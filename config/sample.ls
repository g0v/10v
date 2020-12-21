module.exports = do
  port: 8901
  limit: '20mb'
  i18n:
    lng: <[en zh-TW]>
  db:
    postgresql:
      host: \localhost:15432 # host.docker.internal
      database: 'this-is-a-sample-database-name'
      user: 'this-is-a-sample-database-username'
      password: 'this-is-a-sample-database-user-password'
      poolSize: 20
  build:
    enabled: true
    watcher: do
      ignores: ['\/\..*\.swp$', '^static/s', '^static/assets/img']
  session:
    secret: 'this-is-a-sample-secret-please-update-it'
  grecaptcha:
    sitekey: '...'
    enabled: false
  log:
    level: \info

