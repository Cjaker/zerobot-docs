import {addLuaAnchors} from './records.mjs';

export default function remarkLuaAnchors() {
  return (root, file) => {
    const source = String(file.path ?? '').replaceAll('\\', '/');
    if (source.includes('/lua_scripting/functions/')) addLuaAnchors(root);
  };
}
