config folder structure

 - `base`: servebase sample configs
 - `private`: per site configs that should be kept as secret
 - `gen`: generated files, can be re-gen based on configs from e.g., `private` or env vars.
 - `<name>`: configs dedicated for `<name>`
   - can follow `base` structure yet  there is no limitation of this. which is:
     - `nginx`: nginx config.
     - `mail`: mail templates
     - `db`: db schema configs
     - `docker`: docker (composer) config files
     - `bootstrap`: bootstrap custom scss
     - `modules`: (TBD) module specific config

run scripts under `tool` with `./tool/<name>`.
