# json0

bundle of `ot-json0`, `json0-ot-diff` and `diff-match-patch` for browser.


# Usage

include `dist/json0.min.js` and use it as:

    /* diff 2 objects, return operational transformations */
    json0.diff(objA, objB)

    /* github:ottypes/json0 */
    json0.type 

    /* apply ot with json0.type */
    json0.type.apply(objC, ots);


for a module version, use `dist/require/json0.min.js`:

    json0 = require("json0")


# Version

we lock `deep-equal` to version 1.0.1 to prevent `es-abstract` from being bundled together, which induces 30k+ file size.


# License 

MIT
