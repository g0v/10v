require! <[pino json0-ot-diff ../engine/module/db/postgresql ../secret]>
db = new postgresql {config: secret, log: new pino!}

db.query = """
insert into perm (data) values
  select json from (select unnest($1::json[]) as json) t
""", [jsons]

list-length = 1000
perm = do
  list: [
    {type: \user, key: 1}
  ]

act = [0,0,0]
act.0 = add = ->
  for i from 0 til 10000 =>
    key = Math.ceil(1000000 * Math.random!)
    if !(perm.list.filter(-> it.key == key).length) => break
  obj = {type: \user, key}
  perm.list.push obj

act.1 = del = ->
  if perm.list.length <= 0 => return
  idx = Math.floor(Math.random!*perm.list.length)
  perm.list.splice idx, 1

act.2 = update = ->
  if perm.list.length <= 0 => return
  idx = Math.floor(Math.random!*perm.list.length)
  obj = perm.list[idx]
  obj.token = Math.random!toString(36).substring(2)

random-action = ->
  #dice = Math.floor(Math.random! * 3)
  #act[dice]!
  v = Math.random!
  if v <= 0.4 => act.0!
  else if v <= 0.8 => act.2!
  else act.1!

perms = []
for i from 0 til list-length => act.0!
for i from 0 til 100 =>
  perms.push JSON.parse(JSON.stringify(perm))
  random-action!

calc = (round = 0)->
  t1 = Date.now!
  i = Math.floor(Math.random! * perms.length)
  j = Math.floor(Math.random! * perms.length)
  perm.list.sort (b,a) -> b.key - a.key
  [p1,p2] = [perms[i], perms[j]]
  p1.list.sort (b,a) -> if b.key > a.key => return 1 else if b.key < a.key => return -1 else 0
  p2.list.sort (b,a) -> if b.key > a.key => return 1 else if b.key < a.key => return -1 else 0
  [i,j] = [0,0]
  edit = {add: [], del: [], update: []}
  while true
    if i >= p1.list.length and j >= p2.list.length => break
    u1 = p1.list[i]
    u2 = p2.list[j]
    if u1 and u2 and u1.key == u2.key =>
      i++
      j++
      ret = json0-ot-diff u1, u2
      if ret and ret.length =>
        #console.log "#{u1.key} patched: ", ret
        edit.update.push {obj: u1, diff: ret}
      continue
    else if u1 and (!u2 or u1.key < u2.key) =>
      i++
      #console.log "#{u1.key} removed."
      edit.del.push {obj: u1}
    else if u2 and (!u1 or u1.key > u2.key) =>
      j++
      #console.log "#{u2.key} added."
      edit.add.push {obj: u2}
  t2 = Date.now!
  console.log "round #round elapsed time: ", t2 - t1
  return t2 - t1

sum = 0
iter = 1000
for i from 0 til iter =>
  r = calc i
  sum += r
console.log "list size: ", perm.list.length
console.log "average elapsed time: ", sum / iter
