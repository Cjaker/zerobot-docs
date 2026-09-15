import React, {useEffect, useId, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {prepareRecords, searchRecords} from '../../search/rank.mjs';
import styles from './styles.module.css';

const copy = {
  en: {
    button: 'Search Lua & docs', title: 'Search documentation', placeholder: 'Function, method, or topic…',
    all: 'All docs', api: 'Lua API', guides: 'Guides', close: 'Close search', clear: 'Clear search',
    hint: 'Go straight to a function.', examples: 'Try a name, a method, or a few words:',
    loading: 'Loading the local index…', error: 'Could not load search. Please retry.', retry: 'Retry',
    empty: 'No results. Try a shorter name or switch filters.', results: 'results', showing: 'Showing',
    function: 'Function', section: 'Section', page: 'Page', navigate: 'navigate', open: 'open', escape: 'close',
  },
  pt: {
    button: 'Buscar Lua e docs', title: 'Buscar na documentação', placeholder: 'Função, método ou assunto…',
    all: 'Todas', api: 'API Lua', guides: 'Guias', close: 'Fechar busca', clear: 'Limpar busca',
    hint: 'Vá direto à função.', examples: 'Busque por nome, método ou algumas palavras:',
    loading: 'Carregando o índice local…', error: 'Não foi possível carregar a busca. Tente novamente.', retry: 'Tentar novamente',
    empty: 'Nenhum resultado. Tente um nome mais curto ou outro filtro.', results: 'resultados', showing: 'Exibindo',
    function: 'Função', section: 'Seção', page: 'Página', navigate: 'navegar', open: 'abrir', escape: 'fechar',
  },
};

const examples = ['Player.getHealth', 'HUD:setText', 'forge fuse', 'TASK_BOARD_DATA'];
let indexPromise;
function loadIndex() {
  if (!indexPromise) {
    indexPromise = import(/* webpackChunkName: "local-search-index" */ '@zerobot-search-index')
      .then((module) => prepareRecords(module.default.records))
      .catch((error) => {indexPromise = undefined; throw error;});
  }
  return indexPromise;
}

function SearchDialog({text, onClose}) {
  const dialog = useRef(null);
  const input = useRef(null);
  const links = useRef([]);
  const listId = useId();
  const titleId = useId();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [records, setRecords] = useState(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [selected, setSelected] = useState(0);
  const {results, total} = useMemo(() => searchRecords(records ?? [], query, filter), [records, query, filter]);

  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const element = dialog.current;
    element.showModal();
    document.body.style.overflow = 'hidden';
    input.current.focus();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (opener?.isConnected) opener.focus();
    };
  }, []);

  useEffect(() => {
    let active = true;
    setFailed(false);
    loadIndex().then((loaded) => {if (active) setRecords(loaded);}).catch(() => {if (active) setFailed(true);});
    return () => {active = false;};
  }, [attempt]);

  useEffect(() => {setSelected(0);}, [query, filter]);
  useEffect(() => {links.current[selected]?.scrollIntoView({block: 'nearest'});}, [selected]);

  function handleKey(event) {
    if (event.isComposing) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (results.length) setSelected((index) => (index + (event.key === 'ArrowDown' ? 1 : results.length - 1)) % results.length);
    } else if (event.key === 'Enter' && results.length) {
      event.preventDefault();
      links.current[selected]?.click();
    }
  }

  return createPortal(
    <dialog ref={dialog} className={styles.dialog} aria-labelledby={titleId}
      onCancel={(event) => {event.preventDefault(); onClose();}}
      onClick={(event) => {if (event.target === event.currentTarget) onClose();}}>
      <div className={styles.panel}>
        <header className={styles.header}>
          <div><span className={styles.eyebrow}>ZeroBot · Lua</span><h2 id={titleId}>{text.title}</h2></div>
          <button type="button" className={styles.close} onClick={onClose} aria-label={text.close}>✕</button>
        </header>
        <div className={styles.inputRow}>
          <SearchIcon />
          <input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleKey}
            placeholder={text.placeholder} aria-label={text.placeholder} type="search" maxLength={200} autoComplete="off" spellCheck={false}
            role="combobox" aria-autocomplete="list" aria-expanded={results.length > 0} aria-controls={listId}
            aria-activedescendant={results.length ? `${listId}-${selected}` : undefined} />
          {query && <button type="button" className={styles.clear} aria-label={text.clear} onClick={() => {setQuery(''); input.current.focus();}}>✕</button>}
        </div>
        <div className={styles.toolbar}>
          <div className={styles.filters}>
            {['all', 'api', 'guides'].map((value) => <button key={value} type="button" aria-pressed={filter === value}
              onClick={() => {setFilter(value); input.current.focus();}}>{text[value]}</button>)}
          </div>
          <span className={styles.count} role="status" aria-live="polite">
            {query && records ? `${total > results.length ? `${text.showing} ${results.length} / ` : ''}${total} ${text.results}` : ''}
          </span>
        </div>
        <div className={styles.content}>
          {failed ? <div className={styles.message} role="alert"><p>{text.error}</p><button type="button" onClick={() => setAttempt((value) => value + 1)}>{text.retry}</button></div>
            : !records ? <p className={styles.message} role="status">{text.loading}</p>
              : !query.trim() ? <div className={styles.message}><h3>{text.hint}</h3><p>{text.examples}</p><div className={styles.examples}>
                {examples.map((value) => <button key={value} type="button" onClick={() => {setQuery(value); input.current.focus();}}><code>{value}</code></button>)}
              </div></div>
                : !results.length ? <p className={styles.message}>{text.empty}</p> : null}
          <ul id={listId} role="listbox" aria-label={text.title} className={styles.results}>
            {results.map((result, index) => <li key={result.url} id={`${listId}-${index}`} role="option" aria-selected={selected === index}>
              <Link ref={(element) => {links.current[index] = element;}} to={result.url} tabIndex={-1}
                className={`${styles.result} ${selected === index ? styles.selected : ''}`}
                onMouseMove={() => setSelected(index)} onClick={onClose}>
                <div className={styles.resultTop}><span className={styles.badge}>{text[result.kind]}</span><span className={styles.breadcrumb}>{result.pageTitle}</span><span aria-hidden="true">↗</span></div>
                {result.kind === 'function' ? <code className={styles.signature}>{result.signature}</code> : <strong className={styles.resultTitle}>{result.title}</strong>}
                <p className={styles.description}>{result.description}</p>
              </Link>
            </li>)}
          </ul>
        </div>
        <footer className={styles.footer}><span><kbd>↑</kbd><kbd>↓</kbd> {text.navigate}</span><span><kbd>Enter</kbd> {text.open}</span><span><kbd>Esc</kbd> {text.escape}</span></footer>
      </div>
    </dialog>, document.body,
  );
}

function SearchIcon() {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>;
}

export default function SearchBar() {
  const {i18n} = useDocusaurusContext();
  const text = copy[i18n.currentLocale] ?? copy.en;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function shortcut(event) {
      const editable = event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"]');
      if (event.isComposing || event.altKey) return;
      if ((event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey)) || (event.key === '/' && !editable && !event.ctrlKey && !event.metaKey)) {
        event.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener('keydown', shortcut);
    return () => document.removeEventListener('keydown', shortcut);
  }, []);
  return <>
    <button type="button" className={styles.trigger} aria-label={text.button} aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <SearchIcon /><span>{text.button}</span><kbd>Ctrl K</kbd>
    </button>
    {open && <SearchDialog text={text} onClose={() => setOpen(false)} />}
  </>;
}
