var ldcv;
ldcv = {};
ldcv.cookie = new ldCover({
  root: '.ldcv[data-name=cookie-consent]'
});
ldcv.consent = new ldCover({
  root: '.ldcv[data-name=consent]'
});
ldcv.cookie.get().then(function(){
  return ldcv.consent.toggle();
});