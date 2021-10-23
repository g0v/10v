require! <[lderror]>

module.exports = do
  delete: ({db, key}) ->
    # alternatively use session store clear?
    db.query "delete from session where owner = $1", [key]
  # this login should be used only for updating session data.
  # normal login process should be done in backend/auth/index.ls,
  # and go through `get-user` for additional check.
  login: ({db, key, req}) ->
    db.query "select * from users where key = $1", [key]
      .then (r={})->
        if !(user = r.[]rows.0) => return lderror.reject 404
        (res, rej) <- new Promise _
        req.login user, (e) -> if e => rej(e) else res!
