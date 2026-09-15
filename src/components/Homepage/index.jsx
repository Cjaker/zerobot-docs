import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const copy = {
  en: {
    eyebrow: 'ZeroBot developer documentation',
    title: 'Build scripts and routes with a clear view of the bot.',
    description:
      'Practical guides and a Lua reference synchronized with the public core wrappers used by ZeroBot.',
    primaryAction: 'Explore the Lua API',
    secondaryAction: 'Set up CaveBot',
    signalsLabel: 'Documentation features',
    signals: ['LuaJIT runtime', 'English + Português', 'Version-aware notes'],
    pathsEyebrow: 'Choose a path',
    pathsTitle: 'Go straight to the work you are doing.',
    pathsDescription:
      'Start with a feature guide or jump directly into the developer reference.',
    cards: [
      {
        index: '01',
        label: 'Product guide',
        title: 'Understand ZeroBot',
        description:
          'See what each module does, where it fits, and which behavior depends on the client or OTServer.',
        href: '/general',
        cta: 'Open the overview',
      },
      {
        index: '02',
        label: 'Route automation',
        title: 'Create CaveBot routes',
        description:
          'Learn waypoint types, movement settings, lure behavior, special areas, and script actions.',
        href: '/cavebot/getting_started',
        cta: 'Start with CaveBot',
      },
      {
        index: '03',
        label: 'Developer reference',
        title: 'Build Lua scripts',
        description:
          'Browse the public modules, exact signatures, return behavior, enums, and runtime constraints.',
        href: '/lua_scripting/functions/',
        cta: 'Browse the API',
      },
      {
        index: '04',
        label: 'Event-driven scripts',
        title: 'React to game data',
        description:
          'Handle chat, HUD interaction, quests, alarms, Daily Reward, Hunting Tasks, and other events.',
        href: '/lua_scripting/game_events',
        cta: 'Explore events',
      },
    ],
    workflowEyebrow: 'Recommended workflow',
    workflowTitle: 'Keep scripts responsive and maintainable.',
    workflowDescription:
      'Use the high-level core modules, prefer events for incoming data, and guard version-specific payloads.',
    steps: [
      {
        index: '01',
        title: 'Start from the core API',
        description:
          'The modules under Scripts/core are loaded automatically. Use their documented namespaces.',
      },
      {
        index: '02',
        title: 'Prefer events and timers',
        description:
          'React to data with Game events and schedule repeated work with Timer instead of blocking loops.',
      },
      {
        index: '03',
        title: 'Validate the target client',
        description:
          'Treat optional fields, client-version requirements, and OTServer behavior as explicit conditions.',
      },
    ],
    codeTitle: 'Event-driven example',
    code: `local active =
    Enums.PreyTaskDataState.PREY_TASK_DATA_STATE_ACTIVE

local function onHuntingTasks(data)
    if data.state == active then
        print("slot", data.slotId, "kills", data.currentKills)
    end
end

Game.registerEvent(
    Game.Events.TASK_HUNTING_DATA,
    onHuntingTasks
)`,
    resourcesEyebrow: 'Useful references',
    resourcesTitle: 'The details developers usually need next.',
    resources: [
      {
        title: 'Lua runtime',
        description: 'ZeroBot globals, dofile, wait, and modified standard functions.',
        href: '/lua_scripting/functions/runtime',
      },
      {
        title: 'Code practices',
        description: 'Patterns for timers, events, hotkeys, enums, and table debugging.',
        href: '/code_practices',
      },
      {
        title: 'Beta features',
        description: 'How to evaluate and safely test functionality marked as Beta.',
        href: '/about_beta',
      },
    ],
  },
  pt: {
    eyebrow: 'Documentação para desenvolvedores ZeroBot',
    title: 'Crie scripts e rotas sabendo exatamente o que o bot expõe.',
    description:
      'Guias práticos e uma referência Lua sincronizada com os wrappers públicos do core usados pelo ZeroBot.',
    primaryAction: 'Explorar a API Lua',
    secondaryAction: 'Configurar o CaveBot',
    signalsLabel: 'Características da documentação',
    signals: ['Runtime LuaJIT', 'English + Português', 'Notas por versão'],
    pathsEyebrow: 'Escolha um caminho',
    pathsTitle: 'Vá direto para o trabalho que está fazendo.',
    pathsDescription:
      'Comece por um guia de funcionalidade ou entre diretamente na referência para desenvolvedores.',
    cards: [
      {
        index: '01',
        label: 'Guia do produto',
        title: 'Entenda o ZeroBot',
        description:
          'Veja o papel de cada módulo e quais comportamentos dependem do cliente ou do OTServer.',
        href: '/general',
        cta: 'Abrir visão geral',
      },
      {
        index: '02',
        label: 'Automação de rotas',
        title: 'Crie rotas de CaveBot',
        description:
          'Aprenda tipos de waypoint, movimentação, lure, Special Areas e ações por script.',
        href: '/cavebot/getting_started',
        cta: 'Começar com CaveBot',
      },
      {
        index: '03',
        label: 'Referência técnica',
        title: 'Desenvolva scripts Lua',
        description:
          'Consulte módulos públicos, assinaturas exatas, retornos, enums e restrições do runtime.',
        href: '/lua_scripting/functions/',
        cta: 'Consultar a API',
      },
      {
        index: '04',
        label: 'Scripts orientados a eventos',
        title: 'Reaja aos dados do jogo',
        description:
          'Trate chat, HUD, quests, alarmes, Daily Reward, Hunting Tasks e outros eventos.',
        href: '/lua_scripting/game_events',
        cta: 'Explorar eventos',
      },
    ],
    workflowEyebrow: 'Fluxo recomendado',
    workflowTitle: 'Mantenha os scripts responsivos e fáceis de manter.',
    workflowDescription:
      'Use os módulos de alto nível do core, prefira eventos para dados recebidos e proteja payloads específicos de versão.',
    steps: [
      {
        index: '01',
        title: 'Comece pela API do core',
        description:
          'Os módulos em Scripts/core são carregados automaticamente. Use os namespaces documentados.',
      },
      {
        index: '02',
        title: 'Prefira eventos e timers',
        description:
          'Reaja aos dados com eventos de Game e agende repetições com Timer em vez de loops bloqueantes.',
      },
      {
        index: '03',
        title: 'Valide o cliente de destino',
        description:
          'Trate campos opcionais, requisitos de versão e comportamentos do OTServer como condições explícitas.',
      },
    ],
    codeTitle: 'Exemplo orientado a eventos',
    code: `local active =
    Enums.PreyTaskDataState.PREY_TASK_DATA_STATE_ACTIVE

local function onHuntingTasks(data)
    if data.state == active then
        print("slot", data.slotId, "kills", data.currentKills)
    end
end

Game.registerEvent(
    Game.Events.TASK_HUNTING_DATA,
    onHuntingTasks
)`,
    resourcesEyebrow: 'Referências úteis',
    resourcesTitle: 'Os detalhes que desenvolvedores normalmente procuram depois.',
    resources: [
      {
        title: 'Runtime Lua',
        description: 'Globals do ZeroBot, dofile, wait e funções padrão modificadas.',
        href: '/lua_scripting/functions/runtime',
      },
      {
        title: 'Boas práticas',
        description: 'Padrões para timers, eventos, hotkeys, enums e debug de tabelas.',
        href: '/code_practices',
      },
      {
        title: 'Funcionalidades Beta',
        description: 'Como avaliar e testar com segurança uma funcionalidade marcada como Beta.',
        href: '/about_beta',
      },
    ],
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Homepage({locale = 'en'}) {
  const content = copy[locale] ?? copy.en;
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl.replace(/\/$/, '');
  const localPath = (path) => `${baseUrl}${path}`;

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>{content.eyebrow}</div>
          <h1>{content.title}</h1>
          <p className={styles.heroDescription}>{content.description}</p>

          <div className={styles.actions}>
            <Link
              className={styles.primaryAction}
              to={localPath('/lua_scripting/functions/')}>
              {content.primaryAction}
              <Arrow />
            </Link>
            <Link
              className={styles.secondaryAction}
              to={localPath('/cavebot/getting_started')}>
              {content.secondaryAction}
            </Link>
          </div>

          <ul className={styles.signals} aria-label={content.signalsLabel}>
            {content.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <div className={styles.heroMark} aria-hidden="true">
          <div className={styles.logoFrame}>
            <img src={`${baseUrl}/img/zerobot-logo.png`} alt="" />
          </div>
          <span>ZERO / DOCS</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>{content.pathsEyebrow}</div>
            <h2>{content.pathsTitle}</h2>
          </div>
          <p>{content.pathsDescription}</p>
        </div>

        <div className={styles.cardGrid}>
          {content.cards.map((card) => (
            <Link className={styles.pathCard} to={localPath(card.href)} key={card.title}>
              <div className={styles.cardTopline}>
                <span>{card.index}</span>
                <span>{card.label}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className={styles.cardCta}>
                {card.cta}
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.workflow}>
        <div className={styles.workflowCopy}>
          <div className={styles.eyebrow}>{content.workflowEyebrow}</div>
          <h2>{content.workflowTitle}</h2>
          <p>{content.workflowDescription}</p>

          <ol className={styles.steps}>
            {content.steps.map((step) => (
              <li key={step.index}>
                <span>{step.index}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.codePanel}>
          <div className={styles.codePanelTitle}>
            <span className={styles.statusDot} aria-hidden="true" />
            {content.codeTitle}
          </div>
          <CodeBlock language="lua">{content.code}</CodeBlock>
        </div>
      </section>

      <section className={styles.resources}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>{content.resourcesEyebrow}</div>
            <h2>{content.resourcesTitle}</h2>
          </div>
        </div>

        <div className={styles.resourceGrid}>
          {content.resources.map((resource) => (
            <Link
              className={styles.resource}
              to={localPath(resource.href)}
              key={resource.title}>
              <div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
