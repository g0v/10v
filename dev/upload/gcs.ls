
# ask for uploading files, with GCS
api.post "<url>", (req, res) ->
  # TODO - sanity / perission check, manage id and type in DB, etc
  # a random id for creating, or an exists id for updating.
  lc = id: suuid!
  gcs
   .bucket secret.gcs.bucket
   .file lc.id
   .getSignedUrl {action: \write, version: \v4, expires: (Date.now! + 2 * 60 * 1000)} # configurable?
   .then (urls) ->
     lc.url = urls.0
     res.send {signed-url: lc.url, id: lc.id}

# request for accessing specific file with id, with GCS
app.get "<url with id>", (req, res) ->
  # TODO - sanity / permission check
  gcs
    .bucket secret.gcs.bucket
    .file id
    .getSignedUrl {action: \read, version: \v4, expires: (Date.now! + 60000)} # configurable?
    .then (urls) -> return res.status(302).redirect(urls.0)

# frontend upload file code
upload = ({file}) ->
  opt = file{name, size}
  ld$.fetch "<url>", {method: \POST}, {json: opt, type: \json}
    .then ({signed-url, id}) ->
      ld$.xhr(
        signed-url,
        {method: \PUT, body: file, headers: {"Content-Type": file.type}},
        {
          no-default-headers: true
          progress: -> "#{Number(100 * it.percent).toFixed(2)}%"
        }
      )
        .then -> {name: file.name, size: file.size, id: id, modifiedtime: file.lastModified}


table file {
  key serial not null primary key,
  id text not null unique,
  createdtime timestamp,
  modifiedtime timestamp,
  owner int
}
