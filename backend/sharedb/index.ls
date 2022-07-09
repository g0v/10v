require! <[fs path lderror http ws @servebase/backend/aux @plotdb/ews/sdb-server]>
(backend) <- (->module.exports = it)  _
<-(->it.apply backend) _

{db,config,route:{api},app,session} = @

server = http.createServer app
wss = new ws.Server server: server
sharedb = {sdb, connect, wss} = sdb-server {
  wss: wss
  app, io: config.db.postgresql, session, milestone-db: {interval: 200, enabled: true}
  metadata: ({m, user, session, collection, id}) -> m.user = user.key or 0
  access: ({user, session, collection, id, snapshots}) -> return Promise.resolve!
}

backend.sharedb = sharedb
backend.server = server
