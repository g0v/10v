ldcv = {}
ldcv.cookie = new ldCover do
  root: '.ldcv[data-name=cookie-consent]'
ldcv.consent = new ldCover do
  root: '.ldcv[data-name=consent]'
ldcv.cookie.get!
  .then ->
    ldcv.consent.toggle!
