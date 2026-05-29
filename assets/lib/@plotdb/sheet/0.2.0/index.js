(function(){
  var parseCsv, parent, idxToLabel, labelToIdx, sheet;
  parseCsv = function(txt){
    return Papa.parse(txt).data;
  };
  parent = function(n, s, e){
    var m;
    m = n;
    while (n && n !== e) {
      n = n.parentNode;
    }
    if (n !== e) {
      return null;
    }
    if (!s) {
      return n;
    }
    n = m;
    while (n && n !== e && (!n.matches || (n.matches && !n.matches(s)))) {
      n = n.parentNode;
    }
    if (n === e && (!e.matches || !e.matches(s))) {
      return null;
    }
    return n;
  };
  idxToLabel = function(val){
    var radix, base, v, map, ret, i$, i, c;
    radix = Math.floor(Math.log((val + 1) * 25 + 1) / Math.log(26)) - 1;
    base = (Math.pow(26, radix + 1) - 1) / 25 - 1;
    v = val - base;
    map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ret = "";
    for (i$ = 0; i$ <= radix; ++i$) {
      i = i$;
      c = map.charAt(v % 26);
      ret = c + ret;
      v = (v - v % 26) / 26;
    }
    return ret;
  };
  labelToIdx = function(label){
    var radix, base, map, val, i$, i, idx;
    radix = label.length - 1;
    base = (Math.pow(26, radix + 1) - 1) / 25 - 1;
    map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    val = 0;
    for (i$ = 0; i$ <= radix; ++i$) {
      i = i$;
      idx = map.indexOf(label[i]);
      if (idx < 0) {
        throw new Error("incorrect label");
      }
      val = val * 26 + idx;
    }
    return val + base;
  };
  sheet = function(opt){
    var ref$, this$ = this;
    opt == null && (opt = {});
    this.opt = opt;
    this.root = typeof opt.root === 'string'
      ? document.querySelector(opt.root)
      : opt.root;
    this.evtHandler = {};
    this._data = opt.data || [];
    this._size = {
      row: (ref$ = import$({
        row: [],
        col: []
      }, opt.size)).row,
      col: ref$.col
    };
    this.cls = {
      row: (ref$ = import$({
        row: [],
        col: []
      }, opt['class'])).row,
      col: ref$.col
    };
    this._editing = opt.editing != null ? !!opt.editing : true;
    this.dim = {
      col: (opt.dim || (opt.dim = {})).col || 30,
      row: (opt.dim || (opt.dim = {})).row || 30
    };
    this.frozen = {
      col: (ref$ = import$({
        col: 0,
        row: 0
      }, opt.frozen || {})).col,
      row: ref$.row
    };
    this.idx = {
      col: (ref$ = import$({
        row: true,
        col: true
      }, opt.idx || {})).col,
      row: ref$.row
    };
    this.fixed = {
      col: (ref$ = import$({
        col: 0,
        row: 0
      }, opt.fixed || {})).col,
      row: ref$.row
    };
    this.xif = {
      row: [this.idx.row ? 1 : 0, 0, 0],
      col: [this.idx.col ? 1 : 0, 0, 0]
    };
    ['row', 'col'].map(function(t){
      this$.xif[t][1] = this$.xif[t][0] + this$.fixed[t];
      return this$.xif[t][2] = this$.xif[t][1] + this$.frozen[t];
    });
    this.fix = {
      row: this.xif.row[2],
      col: this.xif.col[2]
    };
    this.pos = {
      col: 0,
      row: 0
    };
    this.scrollPos = {
      x: 0,
      y: 0
    };
    this.sel = {};
    this.les = {};
    this.editing = {};
    this.dom = Object.fromEntries(['sheet', 'inner', 'caret', 'range', 'edit', 'layout'].map(function(it){
      var x$, n;
      x$ = n = document.createElement('div');
      x$.classList.add(it);
      return [it, n];
    }));
    this.dom.sheet.setAttribute('tabindex', -1);
    this.dom.textarea = document.createElement('textarea');
    this.root.appendChild(this.dom.sheet);
    ['inner', 'caret', 'range', 'edit', 'layout'].map(function(it){
      return this$.dom.sheet.appendChild(this$.dom[it]);
    });
    this.dom.edit.appendChild(this.dom.textarea);
    this._init();
    return this;
  };
  sheet.prototype = import$(Object.create(Object.prototype), {
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
    _init: function(){
      var i$, to$, r, j$, to1$, c, dom, this$ = this;
      for (i$ = 0, to$ = this.dim.row; i$ < to$; ++i$) {
        r = i$;
        for (j$ = 0, to1$ = this.dim.col; j$ < to1$; ++j$) {
          c = j$;
          this.addCell(c, r);
        }
      }
      this.regrid();
      this.dom.textarea.addEventListener('mousedown', function(e){
        return e.stopPropagation();
      });
      dom = this.dom.sheet;
      dom.addEventListener('mousedown', function(e){
        var p, ref$, idx;
        this$.edited();
        if (!(p = parent(e.target, '.cell', dom))) {
          return;
        }
        idx = {
          row: (ref$ = this$.index(p)).row,
          col: ref$.col
        };
        if (idx.col < 0 || idx.row < 0) {
          return;
        }
        this$.les.start = this$.les.end = idx;
        this$.les.node = p;
        return this$.renderSelection();
      });
      dom.addEventListener('mousemove', function(e){
        var p, ref$;
        if (this$.editing.on || !(e.buttons && (p = parent(e.target, '.cell', dom)))) {
          return;
        }
        this$.les.end = {
          row: (ref$ = this$.index(p)).row,
          col: ref$.col
        };
        return this$.renderSelection();
      });
      dom.addEventListener('dblclick', function(e){
        var p;
        if (!(p = parent(e.target, '.cell', dom))) {
          return;
        }
        return this$.edit({
          node: p,
          quick: false
        });
      });
      document.body.addEventListener('paste', function(e){
        var data;
        if (!parent(document.activeElement, '.sheet', dom)) {
          return;
        }
        if (!this$.les.start) {
          return;
        }
        data = e.clipboardData.getData('text');
        data = parseCsv(data);
        return this$.set({
          row: this$.les.start.row,
          col: this$.les.start.col,
          data: data,
          range: true
        });
      });
      dom.addEventListener('keydown', function(e){
        var code, ref$, p1, p2, c1, c2, r1, r2, i$, row, j$, col, opt;
        if (e.keyCode === 67 && (e.metaKey || e.ctrlKey)) {
          return this$.copy();
        }
        if (!this$.eventInScope(e)) {
          return;
        }
        code = e.keyCode;
        if (code === 8) {
          if (!this$.les.node) {
            return;
          }
          ref$ = [this$.les.start, this$.les.end], p1 = ref$[0], p2 = ref$[1];
          ref$ = p1.col < p2.col
            ? [p1.col, p2.col]
            : [p2.col, p1.col], c1 = ref$[0], c2 = ref$[1];
          ref$ = p1.row < p2.row
            ? [p1.row, p2.row]
            : [p2.row, p1.row], r1 = ref$[0], r2 = ref$[1];
          for (i$ = r1; i$ <= r2; ++i$) {
            row = i$;
            for (j$ = c1; j$ <= c2; ++j$) {
              col = j$;
              this$.set({
                row: row,
                col: col,
                data: ""
              });
            }
          }
        }
        opt = (function(){
          switch (code) {
          case 37:
            return {
              y: 0,
              x: -1
            };
          case 38:
            return {
              y: -1,
              x: 0
            };
          case 39:
            return {
              y: 0,
              x: 1
            };
          case 40:
            return {
              y: 1,
              x: 0
            };
          default:
            return null;
          }
        }());
        if (!opt) {
          return;
        }
        if (this$.editing.on && !this$.editing.quick) {
          return;
        }
        this$.move(opt);
        e.stopPropagation();
        e.preventDefault();
        return this$.dom.sheet.focus();
      });
      dom.addEventListener('keypress', function(e){
        if (this$.les.node && !this$.editing.on) {
          return this$.edit({
            node: this$.les.node,
            quick: e.keyCode === 13 ? false : true
          });
        }
      });
      this.dom.textarea.addEventListener('keydown', function(e){
        var lbox, box, ref$;
        if (e.keyCode === 27) {
          this$.edited({
            cancel: true
          });
          e.stopPropagation();
          e.preventDefault();
          this$.dom.sheet.focus();
          return;
        }
        if (e.keyCode === 13 && !(e.altKey || e.metaKey)) {
          this$.move({
            y: 1,
            x: 0
          });
          e.stopPropagation();
          e.preventDefault();
          this$.dom.sheet.focus();
          return;
        }
        if (e.keyCode === 13 && (e.altKey || e.metaKey)) {
          this$.dom.textarea.value += '\n';
          this$.dom.layout.textContent = this$.dom.textarea.value + " ";
          lbox = this$.dom.layout.getBoundingClientRect();
          box = this$.editing.node.getBoundingClientRect();
          return ref$ = this$.dom.textarea.style, ref$.width = Math.max(lbox.width, box.width + 1) + "px", ref$.height = Math.max(lbox.height, box.height + 1) + "px", ref$;
        }
      });
      return document.addEventListener('wheel', function(e){
        var inscope, spos, ref$, dx, dy, ox, oy;
        inscope = this$.eventInScope(e);
        if (!(this$.opt.scrollLock != null) || this$.opt.scrollLock) {
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            if (inscope || e.target === document.body) {
              e.preventDefault();
            }
          }
        }
        if (!inscope) {
          return false;
        }
        spos = this$.scrollPos;
        ref$ = [e.deltaX, e.deltaY], dx = ref$[0], dy = ref$[1];
        ref$ = Math.abs(dx) > Math.abs(dy)
          ? [dx, 0]
          : [0, dy], dx = ref$[0], dy = ref$[1];
        ref$ = [spos.x, spos.y], ox = ref$[0], oy = ref$[1];
        spos.x += dx / 30;
        spos.y += dy / 30;
        dx = Math.round(spos.x) - Math.round(ox);
        dy = Math.round(spos.y) - Math.round(oy);
        if (dy > 0) {
          this$._md(dy);
        } else if (dy < 0) {
          this$._mu(dy);
        } else if (dx > 0) {
          this$._mr(dx);
        } else if (dx < 0) {
          this$._ml(dx);
        }
        this$.renderSelection();
        return e.preventDefault();
      }, {
        passive: false
      });
    },
    copy: function(){
      var c, i$, to$, row, r, j$, to1$, col, content, ref$, s;
      if (!this.les.start) {
        return;
      }
      c = [];
      for (i$ = this.les.start.row, to$ = this.les.end.row + 1; i$ < to$; ++i$) {
        row = i$;
        r = [];
        for (j$ = this.les.start.col, to1$ = this.les.end.col + 1; j$ < to1$; ++j$) {
          col = j$;
          content = ((ref$ = this._data)[rpw] || (ref$[rpw] = []))[col];
          if (typeof content === 'object') {
            continue;
          }
          r.push('"' + ('' + content || '').replace(/"/g, '""') + '"');
        }
        c.push(r.join('\t'));
      }
      s = c.join('\n');
      return navigator.clipboard.writeText(s);
    },
    eventInScope: function(e){
      return parent(e.target, '.sheet', this.dom.sheet) === this.dom.sheet;
    },
    size: function(it){
      var ref$;
      if (it == null) {
        return this._size;
      }
      this._size = {
        row: (ref$ = import$({
          row: [],
          col: []
        }, it)).row,
        col: ref$.col
      };
      return this.regrid();
    },
    regrid: function(){
      var this$ = this;
      this.dom.inner.style.gridTemplateColumns = ("repeat(" + this.xif.col[1] + ", max-content) ") + (function(){
        var i$, to$, results$ = [];
        for (i$ = 0, to$ = this.frozen.col; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }.call(this)).map(function(it){
        return this$._size.col[it] || "max-content";
      }).join(' ') + ' ' + (function(){
        var i$, to$, results$ = [];
        for (i$ = this.xif.col[2], to$ = this.dim.col; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }.call(this)).map(function(it){
        return this$._size.col[it + this$.pos.col - this$.xif.col[1]] || "max-content";
      }).join(' ');
      return this.dom.inner.style.gridTemplateRows = ("repeat(" + this.xif.row[1] + ", max-content) ") + (function(){
        var i$, to$, results$ = [];
        for (i$ = 0, to$ = this.frozen.row; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }.call(this)).map(function(it){
        return this$._size.row[it] || "max-content";
      }).join(' ') + ' ' + (function(){
        var i$, to$, results$ = [];
        for (i$ = this.xif.row[2], to$ = this.dim.row; i$ < to$; ++i$) {
          results$.push(i$);
        }
        return results$;
      }.call(this)).map(function(it){
        return this$._size.row[it + this$.pos.row - this$.xif.row[1]] || "max-content";
      }).join(' ');
    },
    addCell: function(x, y){
      var div;
      div = document.createElement('div');
      this.dom.inner.insertBefore(div, this.dom.inner.childNodes[y * this.dim.col + x]);
      return this._content({
        x: x,
        y: y,
        n: div
      });
    },
    set: function(arg$){
      var row, col, data, range, ref$, i$, to$, r, j$, to1$, c, key$;
      row = arg$.row, col = arg$.col, data = arg$.data, range = arg$.range;
      if (!range) {
        ((ref$ = this._data)[row] || (ref$[row] = []))[col] = data;
        this._content({
          y: row - this.pos.row + this.xif.row[1],
          x: col - this.pos.col + this.xif.col[1]
        });
      } else {
        for (i$ = 0, to$ = data.length; i$ < to$; ++i$) {
          r = i$;
          for (j$ = 0, to1$ = data[r].length; j$ < to1$; ++j$) {
            c = j$;
            ((ref$ = this._data)[key$ = r + row] || (ref$[key$] = []))[c + col] = data[r][c];
            this._content({
              y: r + row - this.pos.row + this.xif.row[1],
              x: c + col - this.pos.col + this.xif.col[1]
            });
          }
        }
      }
      return this.fire('change', {
        row: row,
        col: col,
        data: data,
        range: !!range
      });
    },
    _content: function(arg$){
      var x, y, n, v, ref$, key$, content, className, clsext;
      x = arg$.x, y = arg$.y, n = arg$.n;
      if (!n && !(n = this.dom.inner.childNodes[x + y * this.dim.col])) {
        return;
      }
      ref$ = x < this.xif.col[0] && y < this.xif.col[0]
        ? ["", "cell idx"]
        : x < this.xif.col[0]
          ? (v = y < this.xif.row[1]
            ? " "
            : y < this.xif.row[2]
              ? y - this.xif.row[1] + 1
              : y - this.xif.row[1] + this.pos.row + 1, [v, "cell idx"])
          : y < this.xif.row[0]
            ? (v = x < this.xif.col[1]
              ? " "
              : x < this.xif.col[2]
                ? idxToLabel(x - this.xif.col[1])
                : idxToLabel(x - this.xif.col[1] + this.pos.col), [v, "cell idx"])
            : x < this.xif.col[1]
              ? [null, "cell fixed"]
              : y < this.xif.row[1]
                ? [null, "cell fixed"]
                : x < this.xif.col[2] && y < this.xif.row[2]
                  ? [((ref$ = this._data)[key$ = y - this.xif.row[1]] || (ref$[key$] = []))[x - this.xif.col[1]], "cell frozen fixed"]
                  : x < this.xif.col[2]
                    ? [((ref$ = this._data)[key$ = this.pos.row + y - this.xif.row[1]] || (ref$[key$] = []))[x - this.xif.col[1]], "cell frozen"]
                    : y < this.xif.row[2]
                      ? [((ref$ = this._data)[key$ = y - this.xif.row[1]] || (ref$[key$] = []))[this.pos.col + x - this.xif.col[1]], "cell frozen"]
                      : [((ref$ = this._data)[key$ = this.pos.row + y - this.xif.row[1]] || (ref$[key$] = []))[this.pos.col + x - this.xif.col[1]], "cell"], content = ref$[0], className = ref$[1];
      if (!(content != null)) {
        content = "";
      }
      clsext = x >= this.xif.col[0] && y >= this.xif.row[0] ? (this.cls.col[this.pos.col + x - this.xif.col[1]] || '') + ' ' + (this.cls.row[this.pos.row + y - this.xif.row[1]] || '') : '';
      n.className = className + ' ' + clsext;
      if (content !== null) {
        if (typeof content === 'object') {
          if (content.type === 'dom') {
            n.textContent = "";
            return n.appendChild(content.node);
          }
        } else {
          return n.textContent = content;
        }
      }
    },
    _md: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, idx, n;
      mag == null && (mag = 1);
      inner = this.dom.inner;
      mag = Math.round(Math.abs(mag));
      start = (ref$ = mag - (this.dim.row - this.fix.row)) > 0 ? ref$ : 0;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          idx = this.dim.col * this.fix.row;
          if (!inner.childNodes[idx]) {
            break;
          }
          inner.removeChild(inner.childNodes[idx]);
        }
      }
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          n = document.createElement('div');
          this._content({
            x: i,
            y: this.dim.row + j,
            n: n
          });
          inner.appendChild(n);
        }
      }
      return this.pos.row += mag;
    },
    _mu: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, lresult$, n, results$ = [];
      mag == null && (mag = 1);
      inner = this.dom.inner;
      if (this.pos.row <= 0) {
        return;
      }
      mag = Math.round(Math.abs(mag));
      if (mag >= this.pos.row) {
        mag = this.pos.row;
      }
      start = (ref$ = mag - (this.dim.row - this.xif.row[2])) > 0 ? ref$ : 0;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          if (!inner.childNodes.length) {
            break;
          }
          inner.removeChild(inner.childNodes[inner.childNodes.length - 1]);
        }
      }
      this.pos.row -= mag;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        lresult$ = [];
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          n = document.createElement('div');
          this._content({
            x: i,
            y: j + this.xif.row[2],
            n: n
          });
          lresult$.push(inner.insertBefore(n, inner.childNodes[i + (j - start) * this.dim.col + this.dim.col * this.xif.row[2]]));
        }
        results$.push(lresult$);
      }
      return results$;
    },
    _mr: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, n;
      mag == null && (mag = 1);
      inner = this.dom.inner;
      mag = Math.round(Math.abs(mag));
      start = (ref$ = mag - (this.dim.col - this.fix.col)) > 0 ? ref$ : 0;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.row; j$ < to$; ++j$) {
          i = j$;
          inner.removeChild(inner.childNodes[i * this.dim.col + this.fix.col]);
          n = document.createElement('div');
          this._content({
            x: this.dim.col + j,
            y: i,
            n: n
          });
          inner.insertBefore(n, inner.childNodes[(i + 1) * this.dim.col - 1]);
        }
      }
      this.pos.col += mag;
      return this.regrid();
    },
    _ml: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, n;
      mag == null && (mag = 1);
      inner = this.dom.inner;
      mag = Math.round(Math.abs(mag));
      if (mag >= this.pos.col) {
        mag = this.pos.col;
      }
      if (this.pos.col <= 0 || mag <= 0) {
        return;
      }
      start = (ref$ = mag - (this.dim.col - this.xif.col[2])) > 0 ? ref$ : 0;
      this.pos.col -= mag;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.row; j$ < to$; ++j$) {
          i = j$;
          inner.removeChild(inner.childNodes[(i + 1) * this.dim.col - 1]);
          n = document.createElement('div');
          this._content({
            x: j + this.xif.col[2],
            y: i,
            n: n
          });
          inner.insertBefore(n, inner.childNodes[i * this.dim.col + this.xif.col[2] + j - start]);
        }
      }
      return this.regrid();
    },
    goto: function(opt){
      opt == null && (opt = {
        row: 0,
        col: 0
      });
      import$(this.pos, opt);
      return this.render();
    },
    render: function(){
      var i$, to$, y, lresult$, j$, to1$, x, results$ = [];
      for (i$ = 0, to$ = this.dim.row; i$ < to$; ++i$) {
        y = i$;
        lresult$ = [];
        for (j$ = 0, to1$ = this.dim.col; j$ < to1$; ++j$) {
          x = j$;
          lresult$.push(this._content({
            x: x,
            y: y
          }));
        }
        results$.push(lresult$);
      }
      return results$;
    },
    move: function(opt){
      var node, idx, box, sbox, ref$;
      opt == null && (opt = {});
      if (this.editing.on) {
        this.edited();
      }
      if (!(opt.node = this.les.node)) {
        return;
      }
      if (!(node = this.cell(opt))) {
        return;
      }
      idx = this.index(node);
      box = node.getBoundingClientRect();
      sbox = this.dom.sheet.getBoundingClientRect();
      if (box.x + box.width > sbox.x + sbox.width) {
        this._mr(1);
      }
      if (box.y + box.height > sbox.y + sbox.height) {
        this._md(1);
      }
      if (idx.x === 0) {
        if (this.pos.col === 0) {
          return;
        } else {
          this._ml(1);
        }
      }
      if (idx.y === 0) {
        if (this.pos.row === 0) {
          return;
        } else {
          this._mu(1);
        }
      }
      if (!(node = this.cell(opt))) {
        return;
      }
      this.les.node = node;
      this.les.start = this.les.end = {
        col: (ref$ = this.index(node)).col,
        row: ref$.row
      };
      return this.renderSelection();
    },
    edit: function(arg$){
      var node, quick, idx, ref$, lbox, box, rbox, sx, sy, v;
      node = arg$.node, quick = arg$.quick;
      if (!this._editing) {
        return;
      }
      idx = this.index(node);
      if (!idx || idx.col < 0 || idx.row < 0) {
        return;
      }
      ref$ = this.editing;
      ref$.node = node;
      ref$.quick = quick;
      ref$.on = true;
      this.dom.layout.textContent = node.textContent;
      lbox = this.dom.layout.getBoundingClientRect();
      box = node.getBoundingClientRect();
      rbox = this.dom.sheet.getBoundingClientRect();
      ref$ = [this.dom.sheet.scrollLeft, this.dom.sheet.scrollTop], sx = ref$[0], sy = ref$[1];
      ref$ = this.dom.edit.style;
      ref$.left = (box.x - rbox.x + sx - 2) + "px";
      ref$.top = (box.y - rbox.y + sy - 2) + "px";
      ref$.width = "fit-content";
      ref$.height = "fit-content";
      this.dom.edit.classList.toggle('show', true);
      ref$ = this.dom.textarea.style;
      ref$.width = Math.max(lbox.width, box.width + 1) + "px";
      ref$.height = Math.max(lbox.height, box.height + 1) + "px";
      this.dom.textarea.value = v = quick
        ? ''
        : node.textContent || '';
      this.dom.textarea.focus();
      return this.dom.textarea.setSelectionRange(v.length, v.length);
    },
    edited: function(opt){
      var v, ref$;
      opt == null && (opt = {});
      if (!this.editing.on) {
        return;
      }
      if (!opt.cancel) {
        this.set({
          row: this.les.start.row,
          col: this.les.start.col,
          data: v = this.dom.textarea.value || ''
        });
      }
      this.dom.edit.classList.toggle('show', false);
      return ref$ = this.editing, ref$.node = null, ref$.on = false, ref$;
    },
    index: function(node){
      var idx, x, y, col, row;
      idx = Array.from(this.dom.inner.childNodes).indexOf(node);
      if (idx < 0) {
        return null;
      }
      x = idx % this.dim.col;
      y = (idx - x) / this.dim.col;
      if (x < this.xif.col[1]) {
        col = -1;
      } else if (x < this.xif.col[2]) {
        col = x - this.xif.col[1];
      } else {
        col = x - this.xif.col[1] + this.pos.col;
      }
      if (y < this.xif.row[1]) {
        row = -1;
      } else if (y < this.xif.row[2]) {
        row = y - this.xif.row[1];
      } else {
        row = y - this.xif.row[1] + this.pos.row;
      }
      return {
        x: x,
        y: y,
        col: col,
        row: row
      };
    },
    cell: function(opt){
      var x, y, ref$, base;
      opt == null && (opt = {});
      if (opt.col != null) {
        if (opt.col < this.frozen.col) {
          x = opt.col;
        } else if (opt.col - this.pos.col < this.frozen.col) {
          return null;
        } else {
          x = opt.col - this.pos.col;
        }
        if (opt.row < this.frozen.row) {
          y = opt.row;
        } else if (opt.row - this.pos.row < this.frozen.row) {
          return null;
        } else {
          y = opt.row - this.pos.row;
        }
        ref$ = [x + this.xif.col[1], y + this.xif.row[1]], x = ref$[0], y = ref$[1];
        if (x < 0 || y < 0 || x >= this.dim.col || y >= this.dim.row) {
          return null;
        }
        return this.dom.inner.childNodes[y * this.dim.col + x];
      } else {
        base = opt.node
          ? this.index(opt.node)
          : {
            y: 0,
            x: 0
          };
        if (!base) {
          throw new Error("node not found in sheet");
        }
        y = base.y + (opt.y || 0);
        x = base.x + (opt.x || 0);
        return this.dom.inner.childNodes[y * this.dim.col + x];
      }
    },
    editing: function(v){
      return !(v != null)
        ? this._editing
        : this._editing = !!v;
    },
    renderSelection: function(){
      var ref$, sc, ec, sr, er, rbox, c0, c1, c2, c3, c4, b0, b1, b2, b3, b4, x1, y1, x2, y2, w, h, snode, sbox;
      if (!this.les.start) {
        return;
      }
      ref$ = this.les.start.col < this.les.end.col
        ? [this.les.start.col, this.les.end.col]
        : [this.les.end.col, this.les.start.col], sc = ref$[0], ec = ref$[1];
      ref$ = this.les.start.row < this.les.end.row
        ? [this.les.start.row, this.les.end.row]
        : [this.les.end.row, this.les.start.row], sr = ref$[0], er = ref$[1];
      rbox = this.dom.inner.getBoundingClientRect();
      c0 = this.cell({
        col: this.pos.col + this.frozen.col,
        row: this.pos.row + this.frozen.row
      });
      c1 = this.cell({
        col: sc,
        row: sr
      });
      c2 = this.cell({
        col: sc,
        row: er
      });
      c3 = this.cell({
        col: ec,
        row: sr
      });
      c4 = this.cell({
        col: ec,
        row: er
      });
      ref$ = [c0, c1, c2, c3, c4].map(function(it){
        if (it) {
          return it.getBoundingClientRect();
        } else {
          return null;
        }
      }), b0 = ref$[0], b1 = ref$[1], b2 = ref$[2], b3 = ref$[3], b4 = ref$[4];
      b0.width = 0;
      b0.height = 0;
      x1 = (b1 || b2 || b0).x - rbox.x;
      y1 = (b1 || b3 || b0).y - rbox.y;
      x2 = (b3 || b4 || b0).x + (b3 || b4 || b0).width - rbox.x;
      y2 = (b2 || b4 || b0).y + (b2 || b4 || b0).height - rbox.y;
      w = x2 - x1 + 1;
      h = y2 - y1 + 1;
      snode = this.cell(this.les.start);
      sbox = !snode
        ? null
        : snode.getBoundingClientRect();
      ref$ = this.dom.range.style;
      ref$.left = x1 + "px";
      ref$.top = y1 + "px";
      ref$.width = w + "px";
      ref$.height = h + "px";
      this.dom.range.classList.toggle('show', true);
      if (sbox) {
        ref$ = this.dom.caret.style;
        ref$.left = (sbox.x - rbox.x - 1) + "px";
        ref$.top = (sbox.y - rbox.y - 1) + "px";
        ref$.width = (sbox.width + 2) + "px";
        ref$.height = (sbox.height + 2) + "px";
        ref$.zIndex = this.les.start.row + this.xif.row[1] < this.xif.row[2] && this.les.start.col + this.xif.col[1] < this.xif.col[2]
          ? 101
          : this.les.start.row + this.xif.row[1] < this.xif.row[2] || this.les.start.col + this.xif.col[1] < this.xif.col[2] ? 20 : 15;
      }
      return this.dom.caret.classList.toggle('show', !!sbox);
    },
    data: function(it){
      if (!(it != null)) {
        return this._data;
      }
      this._data = it;
      return this.render();
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = sheet;
  } else if (typeof window != 'undefined' && window !== null) {
    window.sheet = sheet;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
