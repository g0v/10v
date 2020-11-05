require! <[pino json0-ot-diff ../engine/module/db/postgresql ../secret]>
db = new postgresql {config: secret, log: new pino!}

jsons = [0 to 1].map -> {key: it, data: Math.random!}

add = ->
  db.query """
  insert into perm (data)
    select json from (select unnest($1::json[]) as json) as t
  """, [jsons]

update = ->
  #db.query """ update perm set data = $1 """, [{key: 1}]
  db.query """
  update perm set data = t.json from (select unnest($1::json[]) as json) as t
  where (data->'key')::text = (t.json->'key')::text
  """, [jsons]

#delete = ->
#  db.query """delete from perm where (t.data->'key')::text = ANY($1)""", [jsons.map -> it.key] 
calc = ->
  jsons.map -> it.data = Math.random!
  t1 = Date.now!
  update!
    .then ->
      t2 = Date.now!
      return t2 - t1
    .catch (e) ->
      console.log e.err.message
      console.log e.err.hint
sum = 0
iter = 100
count = 0
looper = ->
  count := count + 1
  if count > iter => return Promise.resolve(sum)
  calc!
    .then -> sum := sum + it
    .then -> looper!
looper!
  .then ->
    console.log "iter: #iter, avg elapsed time: ", sum/iter
  .then -> process.exit 0
