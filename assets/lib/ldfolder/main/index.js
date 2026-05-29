(function(){
  var ldfolder;
  ldfolder = function(opt){
    var root, this$ = this;
    root = opt.root;
    this._delta = {
      wk: new WeakMap(),
      set: new Set()
    };
    this.exclusive = opt.exclusive || false;
    this.root = root = typeof root === 'string'
      ? document.querySelector(root)
      : root ? root : null;
    this.root.addEventListener('click', function(e){
      var n, p;
      n = e.target;
      while (n && n !== this$.root && (!n.matches || (n.matches && !n.matches('.ldfd-toggle')))) {
        n = n.parentNode;
      }
      if (!(n && n !== this$.root)) {
        return;
      }
      p = n;
      while (p = p.nextSibling) {
        if (p.classList && p.classList.contains('ldfd-menu')) {
          break;
        }
      }
      if (p) {
        return this$.toggle(p);
      }
    });
    return this;
  };
  ldfolder.prototype = import$(Object.create(Object.prototype), {
    fit: function(menu){
      return this.toggle(menu, menu.parentNode.classList.contains('show'), true);
    },
    toggle: function(menu, v, force, internal){
      var s, list, results$ = [], this$ = this;
      force == null && (force = false);
      internal == null && (internal = false);
      this._toggle(menu, v, force, internal);
      s = this._delta.set;
      while (s.size) {
        list = Array.from(s);
        s.clear();
        results$.push(list.map(fn$));
      }
      return results$;
      function fn$(it){
        var isOn;
        isOn = it.parentNode.classList.contains('show');
        return this$._toggle(it, isOn, true, true);
      }
    },
    _toggle: function(menu, v, force, internal){
      var ison, ch, delta, sh, n, this$ = this;
      force == null && (force = false);
      internal == null && (internal = false);
      ison = menu.parentNode.classList.contains('show');
      if ((v = v != null
        ? v
        : !ison) === ison && !force) {
        return;
      }
      if (this.exclusive && v && !internal) {
        Array.from(this.root.querySelectorAll('.ldfd.show > .ldfd-menu')).map(function(it){
          if (it.contains(menu) || menu.contains(it)) {
            return;
          }
          return this$._toggle(it, false, false, true);
        });
      }
      ch = getComputedStyle(menu).height || 0;
      menu.style.height = "";
      menu.offsetHeight;
      delta = 0;
      if (internal) {
        delta = this._delta.wk.get(menu) || 0;
        this._delta.wk['delete'](menu);
      }
      sh = menu.scrollHeight + delta;
      menu.style.height = ch;
      menu.offsetHeight;
      menu.style.height = (!v ? 0 : sh) + "px";
      menu.parentNode.classList.toggle('show', v);
      n = menu;
      while (n.parentNode && n.parentNode !== this.root) {
        n = n.parentNode;
        if (!n.matches('.ldfd-menu')) {
          continue;
        }
        this.delta(n, (!v ? 0 : sh) - +ch.replace('px', ''));
        break;
      }
      return v;
    },
    delta: function(node, value){
      var ret;
      this._delta.wk.set(node, ret = (this._delta.wk.get(node) || 0) + value);
      return this._delta.set.add(node);
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = ldfolder;
  } else if (typeof window != 'undefined' && window !== null) {
    window.ldfolder = ldfolder;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
