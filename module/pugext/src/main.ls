require! <[livescript pug stylus marked js-yaml]>

opt = {}

pugext = do
  filters: do
    'lsc': (text, opt) -> return livescript.compile(text,{bare:true,header:false})
    'lson': (text, opt) -> return livescript.compile(text,{bare:true,header:false,json:true})
    'stylus': (text, opt) ->
       stylus(text)
         .set \filename, 'inline'
         .define 'index', (a,b) ->
           a = (a.string or a.val).split(' ')
           return new stylus.nodes.Unit(a.indexOf b.val)
         .render!
    'md': (text, opt) -> marked text
  md: marked
  yaml: -> js-yaml.safe-load fs.read-file-sync it
  yamls: (dir) ->
    ret = fs.readdir-sync dir
      .map -> "#dir/#it"
      .filter -> /\.yaml$/.exec(it)
      .map ->
        try
          js-yaml.safe-load(fs.read-file-sync it)
        catch e
          console.log "[ERROR@#it]: ", e
    return ret

pugext.i18n = pugext.filters.i18n = -> if opt.i18n => opt.i18n.t((it or '').trim!) else (t)

module.exports = pugext
