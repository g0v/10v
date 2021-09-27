manager = new block.manager registry: ({name,version,path,type}) ->
  if type == \block => return "/block/#name/index.html"
  return "/assets/lib/#name/#version/#path"

i18next.init supportedLng: <[en zh-TW]>, fallbackLng: \zh-TW
  .then -> block.i18n.use i18next
  .then -> manager.init!
  .then -> manager.get {name: 'auth'}
  .then (bc) -> bc.create!
  .then (bi) -> bi.attach {root: document.body}
