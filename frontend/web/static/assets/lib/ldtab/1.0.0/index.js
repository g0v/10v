(function(){
  var ldtab, lc;
  ldtab = function(opt){
    var root, this$ = this;
    this.opt = opt;
    this.cls = {
      tab: {
        className: ['ldtab'],
        classIn: ['ldtab-in'],
        classOut: ['ldtab-out'],
        delay: 350
      },
      panel: {
        className: ['ldtab-panel'],
        classIn: ['ldtab-panel-in'],
        classOut: ['ldtab-panel-out'],
        delay: 350
      }
    };
    import$(this.cls.tab, opt.tab || {});
    import$(this.cls.panel, opt.panel || {});
    this.evtHandler = {};
    ['tab', 'panel'].map(function(t){
      return ['className', 'classIn', 'classOut'].map(function(n){
        if (typeof this$.cls[t][n] === 'string') {
          return this$.cls[t][n] = this$.cls[t][n].split(' ').filter(function(it){
            return it.trim();
          });
        }
      });
    });
    root = opt.root;
    this.root = root = typeof root === 'string'
      ? document.querySelector(root)
      : root ? root : null;
    this.active = {};
    this.pends = {};
    this.group = {};
    if (!(opt.autoInit != null) || opt.autoInit) {
      this.init();
    }
    return this;
  };
  ldtab.prototype = import$(Object.create(Object.prototype), {
    on: function(n, cb){
      var ref$;
      return ((ref$ = this.evtHandler)[n] || (ref$[n] = [])).push(cb);
    },
    fire: function(n){
      var v, res$, i$, to$, ref$, len$, cb, results$ = [];
      res$ = [];
      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      v = res$;
      for (i$ = 0, len$ = (ref$ = this.evtHandler[n] || []).length; i$ < len$; ++i$) {
        cb = ref$[i$];
        results$.push(cb.apply(this, v));
      }
      return results$;
    },
    init: function(){
      return this.add(Array.from(this.root.querySelectorAll('[ldtab]')));
    },
    parse: function(node){
      var n, p, group, name, tab, active;
      n = node;
      while (n && n !== this.root && (!n.matches || (n.matches && !n.matches('[ldtab-group]')))) {
        n = n.parentNode;
      }
      p = !(n && n.matches && n.matches('[ldtab-group]')) ? null : n;
      group = (p ? p : node).getAttribute('ldtab-group');
      name = node.getAttribute('ldtab');
      tab = p ? p.getAttribute('type') : null;
      if (!tab) {
        tab = node.getAttribute('type');
      }
      tab = tab === 'tab';
      active = node.hasAttribute('default') && node.getAttribute('default') !== 'false';
      return {
        group: group,
        name: name,
        tab: tab,
        active: active
      };
    },
    add: function(nodes){
      var this$ = this;
      nodes = Array.isArray(nodes)
        ? nodes
        : [nodes];
      return nodes.map(function(node){
        var ref$, group, name, tab, active, n, ref1$, delay;
        ref$ = this$.parse(node), group = ref$.group, name = ref$.name, tab = ref$.tab, active = ref$.active;
        n = (ref$ = (ref1$ = this$.group)[group] || (ref1$[group] = {}))[name] || (ref$[name] = {});
        if (!node._ldtab_debounce) {
          delay = this$.cls[tab ? 'tab' : 'panel'].delay;
          if (delay) {
            node._ldtab_debounce = debounce(delay, function(){
              return node.classList.remove('active');
            });
          }
        }
        if (tab) {
          n.tab = (n.tab || (n.tab = [])).concat([node]);
          node.classList.add(this$.cls.tab.className);
          node.addEventListener('click', function(){
            return this$.toggle({
              group: group,
              name: name
            });
          });
        } else {
          n.panel = (n.panel || (n.panel = [])).concat([node]);
          node.classList.add(this$.cls.panel.className);
        }
        if (active) {
          return this$.toggle({
            group: group,
            name: name
          });
        }
      });
    },
    update: function(arg$){
      var group, name, active, n, ref$, ref1$, this$ = this;
      group = arg$.group, name = arg$.name, active = arg$.active;
      n = (ref$ = (ref1$ = this.group)[group] || (ref1$[group] = {}))[name] || (ref$[name] = {});
      if (active) {
        ['tab', 'panel'].map(function(t){
          return (n[t] || (n[t] = [])).map(function(node){
            if (node.classList.contains('active')) {
              return;
            }
            if (this$.cls[t].activate) {
              return this$.cls[t].activate({
                node: node
              });
            } else {
              if (node._ldtab_debounce) {
                node._ldtab_debounce.clear();
              }
              node.classList.remove(this$.cls[t].classOut);
              node.classList.add(this$.cls[t].classIn);
              return node.classList.add('active');
            }
          });
        });
      } else {
        ['tab', 'panel'].map(function(t){
          return (n[t] || (n[t] = [])).map(function(node){
            if (!node.classList.contains('active')) {
              return;
            }
            if (this$.cls[t].deactivate) {
              return this$.cls[t].deactivate({
                node: node
              });
            } else {
              if (node._ldtab_debounce) {
                node._ldtab_debounce();
              } else {
                node.classList.remove('active');
              }
              node.classList.remove(this$.cls[t].classIn);
              return node.classList.add(this$.cls[t].classOut);
            }
          });
        });
      }
      return n.active = active;
    },
    toggle: function(arg$){
      var group, name, g, ref$, k, v, this$ = this;
      group = arg$.group, name = arg$.name;
      g = (ref$ = this.group)[group] || (ref$[group] = {});
      (function(){
        var ref$, results$ = [];
        for (k in ref$ = this.group[group]) {
          v = ref$[k];
          results$.push(k);
        }
        return results$;
      }.call(this)).filter(function(it){
        return it !== name;
      }).map(function(name){
        return this$.update({
          group: group,
          name: name,
          active: false
        });
      });
      this.update({
        group: group,
        name: name,
        active: true
      });
      return this.fire('on', {
        group: group,
        name: name
      });
    }
  });
  lc = {};
  ldtab.init = function(opt){
    lc.ldtab = new ldtab(opt);
    return lc.ldtab.add(Array.from(document.querySelectorAll('[ldtab]')));
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = ldtab;
  } else if (typeof window != 'undefined' && window !== null) {
    window.ldtab = ldtab;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
