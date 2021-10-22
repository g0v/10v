require! <[lderror]>

module.exports = do
  delete: ({db, key}) ->
    console.log key
    db.query "delete from session where owner = $1", [key]
  login: ({db, key, req}) ->
    db.query "select * from users where key = $1", [key]
      .then (r={})->
        if !(user = r.[]rows.0) => return lderror.reject 404
        (res, rej) <- new Promise _
        req.login user, (e) -> if e => rej(e) else res!
