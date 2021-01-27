var livescript, pug, stylus, marked, jsYaml, opt, pugext;
livescript = require('livescript');
pug = require('pug');
stylus = require('stylus');
marked = require('marked');
jsYaml = require('js-yaml');
opt = {};
pugext = {
  filters: {
    'lsc': function(text, opt){
      return livescript.compile(text, {
        bare: true,
        header: false
      });
    },
    'lson': function(text, opt){
      return livescript.compile(text, {
        bare: true,
        header: false,
        json: true
      });
    },
    'stylus': function(text, opt){
      return stylus(text).set('filename', 'inline').define('index', function(a, b){
        a = (a.string || a.val).split(' ');
        return new stylus.nodes.Unit(a.indexOf(b.val));
      }).render();
    },
    'md': function(text, opt){
      return marked(text);
    }
  },
  md: marked,
  yaml: function(it){
    return jsYaml.safeLoad(fs.readFileSync(it));
  },
  yamls: function(dir){
    var ret;
    ret = fs.readdirSync(dir).map(function(it){
      return dir + "/" + it;
    }).filter(function(it){
      return /\.yaml$/.exec(it);
    }).map(function(it){
      var e;
      try {
        return jsYaml.safeLoad(fs.readFileSync(it));
      } catch (e$) {
        e = e$;
        return console.log("[ERROR@" + it + "]: ", e);
      }
    });
    return ret;
  }
};
pugext.i18n = pugext.filters.i18n = function(it){
  if (opt.i18n) {
    return opt.i18n.t((it || '').trim());
  } else {
    return t;
  }
};
module.exports = pugext;
