module.exports = do
  port: 8901
  limit: '20mb'
  i18n:
    lng: <[en zh-TW]>
  base: 'frontend/demo'
  db:
    postgresql:
      host: \localhost # host.docker.internal
      port: 15432
      database: \pg
      user: \pg
      password: \pg
      poolSize: 20
  build:
    enabled: true
    watcher: do
      ignores: ['\/\..*\.swp$', '^static/assets/img']
  session:
    secret: 'this-is-a-sample-secret-please-update-it'
    max-age: 365 * 86400 * 1000
  grecaptcha:
    sitekey: '...'
    enabled: false
  log:
    level: \info
  auth:
    google:
      clientID: '...'
      clientSecret: '...'
    facebook:
      clientID: '...'
      clientSecret: '...'
    line:
      channelID: '...'
      channelSecret: '...'
    local:
      usernameField: \email
      passwordField: \passwd
  mail:
    mailgun: auth:
      domain: '...'
      api_key: '...'
