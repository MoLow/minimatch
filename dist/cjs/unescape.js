"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unescape = void 0;
const node_primordials_1 = require("node-primordials");
/**
 * Un-escape a string that has been escaped with {@link escape}.
 *
 * If the {@link windowsPathsNoEscape} option is used, then square-brace
 * escapes are removed, but not backslash escapes.  For example, it will turn
 * the string `'[*]'` into `*`, but it will not turn `'\\*'` into `'*'`,
 * becuase `\` is a path separator in `windowsPathsNoEscape` mode.
 *
 * When `windowsPathsNoEscape` is not set, then both brace escapes and
 * backslash escapes are removed.
 *
 * Slashes (and backslashes in `windowsPathsNoEscape` mode) cannot be escaped
 * or unescaped.
 */
const unescape = (s, { windowsPathsNoEscape = false, } = {}) => {
    return windowsPathsNoEscape
        ? (0, node_primordials_1.StringPrototypeReplace)(s, /\[([^\/\\])\]/g, '$1')
        : (0, node_primordials_1.StringPrototypeReplace)((0, node_primordials_1.StringPrototypeReplace)(s, /((?!\\).|^)\[([^\/\\])\]/g, '$1$2'), /\\([^\/])/g, '$1');
};
exports.unescape = unescape;
//# sourceMappingURL=unescape.js.map