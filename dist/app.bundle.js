!(function(e) {
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, n) {
    !(function(e, t) {
      if (!w[e] || !g[e]) return;
      for (var n in ((g[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (h[n] = t[n]);
      0 == --v && 0 === b && _();
    })(e, n),
      t && t(e, n);
  };
  var n,
    r = !0,
    o = '5d0971bc3432ae67bcff',
    i = 1e4,
    s = {},
    c = [],
    a = [];
  function d(e) {
    var t = D[e];
    if (!t) return S;
    var r = function(r) {
        return (
          t.hot.active
            ? (D[r]
                ? -1 === D[r].parents.indexOf(e) && D[r].parents.push(e)
                : ((c = [e]), (n = r)),
              -1 === t.children.indexOf(r) && t.children.push(r))
            : (console.warn(
                '[HMR] unexpected require(' + r + ') from disposed module ' + e
              ),
              (c = [])),
          S(r)
        );
      },
      o = function(e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return S[e];
          },
          set: function(t) {
            S[e] = t;
          }
        };
      };
    for (var i in S)
      Object.prototype.hasOwnProperty.call(S, i) &&
        'e' !== i &&
        't' !== i &&
        Object.defineProperty(r, i, o(i));
    return (
      (r.e = function(e) {
        return (
          'ready' === u && f('prepare'),
          b++,
          S.e(e).then(t, function(e) {
            throw (t(), e);
          })
        );
        function t() {
          b--, 'prepare' === u && (m[e] || x(e), 0 === b && 0 === v && _());
        }
      }),
      (r.t = function(e, t) {
        return 1 & t && (e = r(e)), S.t(e, -2 & t);
      }),
      r
    );
  }
  var l = [],
    u = 'idle';
  function f(e) {
    u = e;
    for (var t = 0; t < l.length; t++) l[t].call(null, e);
  }
  var p,
    h,
    y,
    v = 0,
    b = 0,
    m = {},
    g = {},
    w = {};
  function j(e) {
    return +e + '' === e ? +e : e;
  }
  function O(e) {
    if ('idle' !== u) throw new Error('check() is only allowed in idle status');
    return (
      (r = e),
      f('check'),
      ((t = i),
      (t = t || 1e4),
      new Promise(function(e, n) {
        if ('undefined' == typeof XMLHttpRequest)
          return n(new Error('No browser support'));
        try {
          var r = new XMLHttpRequest(),
            i = S.p + '' + o + '.hot-update.json';
          r.open('GET', i, !0), (r.timeout = t), r.send(null);
        } catch (e) {
          return n(e);
        }
        r.onreadystatechange = function() {
          if (4 === r.readyState)
            if (0 === r.status)
              n(new Error('Manifest request to ' + i + ' timed out.'));
            else if (404 === r.status) e();
            else if (200 !== r.status && 304 !== r.status)
              n(new Error('Manifest request to ' + i + ' failed.'));
            else {
              try {
                var t = JSON.parse(r.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function(e) {
        if (!e) return f('idle'), null;
        (g = {}), (m = {}), (w = e.c), (y = e.h), f('prepare');
        var t = new Promise(function(e, t) {
          p = { resolve: e, reject: t };
        });
        h = {};
        return x(0), 'prepare' === u && 0 === b && 0 === v && _(), t;
      })
    );
    var t;
  }
  function x(e) {
    w[e]
      ? ((g[e] = !0),
        v++,
        (function(e) {
          var t = document.getElementsByTagName('head')[0],
            n = document.createElement('script');
          (n.charset = 'utf-8'),
            (n.src = S.p + '' + e + '.' + o + '.hot-update.js'),
            t.appendChild(n);
        })(e))
      : (m[e] = !0);
  }
  function _() {
    f('ready');
    var e = p;
    if (((p = null), e))
      if (r)
        Promise.resolve()
          .then(function() {
            return E(r);
          })
          .then(
            function(t) {
              e.resolve(t);
            },
            function(t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in h)
          Object.prototype.hasOwnProperty.call(h, n) && t.push(j(n));
        e.resolve(t);
      }
  }
  function E(t) {
    if ('ready' !== u)
      throw new Error('apply() is only allowed in ready status');
    var n, r, i, a, d;
    function l(e) {
      for (
        var t = [e],
          n = {},
          r = t.slice().map(function(e) {
            return { chain: [e], id: e };
          });
        r.length > 0;

      ) {
        var o = r.pop(),
          i = o.id,
          s = o.chain;
        if ((a = D[i]) && !a.hot._selfAccepted) {
          if (a.hot._selfDeclined)
            return { type: 'self-declined', chain: s, moduleId: i };
          if (a.hot._main) return { type: 'unaccepted', chain: s, moduleId: i };
          for (var c = 0; c < a.parents.length; c++) {
            var d = a.parents[c],
              l = D[d];
            if (l) {
              if (l.hot._declinedDependencies[i])
                return {
                  type: 'declined',
                  chain: s.concat([d]),
                  moduleId: i,
                  parentId: d
                };
              -1 === t.indexOf(d) &&
                (l.hot._acceptedDependencies[i]
                  ? (n[d] || (n[d] = []), p(n[d], [i]))
                  : (delete n[d],
                    t.push(d),
                    r.push({ chain: s.concat([d]), id: d })));
            }
          }
        }
      }
      return {
        type: 'accepted',
        moduleId: e,
        outdatedModules: t,
        outdatedDependencies: n
      };
    }
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        -1 === e.indexOf(r) && e.push(r);
      }
    }
    t = t || {};
    var v = {},
      b = [],
      m = {},
      g = function() {
        console.warn(
          '[HMR] unexpected require(' + x.moduleId + ') to disposed module'
        );
      };
    for (var O in h)
      if (Object.prototype.hasOwnProperty.call(h, O)) {
        var x;
        d = j(O);
        var _ = !1,
          E = !1,
          U = !1,
          I = '';
        switch (
          ((x = h[O] ? l(d) : { type: 'disposed', moduleId: O }).chain &&
            (I = '\nUpdate propagation: ' + x.chain.join(' -> ')),
          x.type)
        ) {
          case 'self-declined':
            t.onDeclined && t.onDeclined(x),
              t.ignoreDeclined ||
                (_ = new Error(
                  'Aborted because of self decline: ' + x.moduleId + I
                ));
            break;
          case 'declined':
            t.onDeclined && t.onDeclined(x),
              t.ignoreDeclined ||
                (_ = new Error(
                  'Aborted because of declined dependency: ' +
                    x.moduleId +
                    ' in ' +
                    x.parentId +
                    I
                ));
            break;
          case 'unaccepted':
            t.onUnaccepted && t.onUnaccepted(x),
              t.ignoreUnaccepted ||
                (_ = new Error(
                  'Aborted because ' + d + ' is not accepted' + I
                ));
            break;
          case 'accepted':
            t.onAccepted && t.onAccepted(x), (E = !0);
            break;
          case 'disposed':
            t.onDisposed && t.onDisposed(x), (U = !0);
            break;
          default:
            throw new Error('Unexception type ' + x.type);
        }
        if (_) return f('abort'), Promise.reject(_);
        if (E)
          for (d in ((m[d] = h[d]),
          p(b, x.outdatedModules),
          x.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(x.outdatedDependencies, d) &&
              (v[d] || (v[d] = []), p(v[d], x.outdatedDependencies[d]));
        U && (p(b, [x.moduleId]), (m[d] = g));
      }
    var A,
      R = [];
    for (r = 0; r < b.length; r++)
      (d = b[r]),
        D[d] &&
          D[d].hot._selfAccepted &&
          R.push({ module: d, errorHandler: D[d].hot._selfAccepted });
    f('dispose'),
      Object.keys(w).forEach(function(e) {
        !1 === w[e] &&
          (function(e) {
            delete installedChunks[e];
          })(e);
      });
    for (var H, M, k = b.slice(); k.length > 0; )
      if (((d = k.pop()), (a = D[d]))) {
        var L = {},
          P = a.hot._disposeHandlers;
        for (i = 0; i < P.length; i++) (n = P[i])(L);
        for (
          s[d] = L, a.hot.active = !1, delete D[d], delete v[d], i = 0;
          i < a.children.length;
          i++
        ) {
          var C = D[a.children[i]];
          C && ((A = C.parents.indexOf(d)) >= 0 && C.parents.splice(A, 1));
        }
      }
    for (d in v)
      if (Object.prototype.hasOwnProperty.call(v, d) && (a = D[d]))
        for (M = v[d], i = 0; i < M.length; i++)
          (H = M[i]),
            (A = a.children.indexOf(H)) >= 0 && a.children.splice(A, 1);
    for (d in (f('apply'), (o = y), m))
      Object.prototype.hasOwnProperty.call(m, d) && (e[d] = m[d]);
    var T = null;
    for (d in v)
      if (Object.prototype.hasOwnProperty.call(v, d) && (a = D[d])) {
        M = v[d];
        var N = [];
        for (r = 0; r < M.length; r++)
          if (((H = M[r]), (n = a.hot._acceptedDependencies[H]))) {
            if (-1 !== N.indexOf(n)) continue;
            N.push(n);
          }
        for (r = 0; r < N.length; r++) {
          n = N[r];
          try {
            n(M);
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: 'accept-errored',
                moduleId: d,
                dependencyId: M[r],
                error: e
              }),
              t.ignoreErrored || T || (T = e);
          }
        }
      }
    for (r = 0; r < R.length; r++) {
      var B = R[r];
      (d = B.module), (c = [d]);
      try {
        S(d);
      } catch (e) {
        if ('function' == typeof B.errorHandler)
          try {
            B.errorHandler(e);
          } catch (n) {
            t.onErrored &&
              t.onErrored({
                type: 'self-accept-error-handler-errored',
                moduleId: d,
                error: n,
                originalError: e
              }),
              t.ignoreErrored || T || (T = n),
              T || (T = e);
          }
        else
          t.onErrored &&
            t.onErrored({ type: 'self-accept-errored', moduleId: d, error: e }),
            t.ignoreErrored || T || (T = e);
      }
    }
    return T
      ? (f('fail'), Promise.reject(T))
      : (f('idle'),
        new Promise(function(e) {
          e(b);
        }));
  }
  var D = {};
  function S(t) {
    if (D[t]) return D[t].exports;
    var r = (D[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: (function(e) {
        var t = {
          _acceptedDependencies: {},
          _declinedDependencies: {},
          _selfAccepted: !1,
          _selfDeclined: !1,
          _disposeHandlers: [],
          _main: n !== e,
          active: !0,
          accept: function(e, n) {
            if (void 0 === e) t._selfAccepted = !0;
            else if ('function' == typeof e) t._selfAccepted = e;
            else if ('object' == typeof e)
              for (var r = 0; r < e.length; r++)
                t._acceptedDependencies[e[r]] = n || function() {};
            else t._acceptedDependencies[e] = n || function() {};
          },
          decline: function(e) {
            if (void 0 === e) t._selfDeclined = !0;
            else if ('object' == typeof e)
              for (var n = 0; n < e.length; n++)
                t._declinedDependencies[e[n]] = !0;
            else t._declinedDependencies[e] = !0;
          },
          dispose: function(e) {
            t._disposeHandlers.push(e);
          },
          addDisposeHandler: function(e) {
            t._disposeHandlers.push(e);
          },
          removeDisposeHandler: function(e) {
            var n = t._disposeHandlers.indexOf(e);
            n >= 0 && t._disposeHandlers.splice(n, 1);
          },
          check: O,
          apply: E,
          status: function(e) {
            if (!e) return u;
            l.push(e);
          },
          addStatusHandler: function(e) {
            l.push(e);
          },
          removeStatusHandler: function(e) {
            var t = l.indexOf(e);
            t >= 0 && l.splice(t, 1);
          },
          data: s[e]
        };
        return (n = void 0), t;
      })(t),
      parents: ((a = c), (c = []), a),
      children: []
    });
    return e[t].call(r.exports, r, r.exports, d(t)), (r.l = !0), r.exports;
  }
  (S.m = e),
    (S.c = D),
    (S.d = function(e, t, n) {
      S.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (S.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (S.t = function(e, t) {
      if ((1 & t && (e = S(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (S.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          S.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (S.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return S.d(t, 'a', t), t;
    }),
    (S.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (S.p = '/'),
    (S.h = function() {
      return o;
    }),
    d('./src/index.js')((S.s = './src/index.js'));
})({
  './node_modules/css-loader/index.js!./src/styles/style.css': function(
    e,
    t,
    n
  ) {
    (e.exports = n('./node_modules/css-loader/lib/css-base.js')(!1)).push([
      e.i,
      "/* @font-face {\n  font-family: 'Spirax-Regular';\n  src: url(../fonts/Spirax-Regular.ttf);\n  font-weight: 700;\n  font-style: normal;\n} */\n\nbody {\n  background-color: #dd95bd;\n}\n\n/* .hello {\n  color: rebeccapurple;\n  background: url('../images/xtocat.jpg');\n  font-family: 'Spirax-Regular';\n} */\n",
      ''
    ]);
  },
  './node_modules/css-loader/lib/css-base.js': function(e, t) {
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || '',
                r = e[3];
              if (!r) return n;
              if (t && 'function' == typeof btoa) {
                var o = ((s = r),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(s)))) +
                    ' */'),
                  i = r.sources.map(function(e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                  });
                return [n]
                  .concat(i)
                  .concat([o])
                  .join('\n');
              }
              var s;
              return [n].join('\n');
            })(t, e);
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
          }).join('');
        }),
        (t.i = function(e, n) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            'number' == typeof i && (r[i] = !0);
          }
          for (o = 0; o < e.length; o++) {
            var s = e[o];
            ('number' == typeof s[0] && r[s[0]]) ||
              (n && !s[2]
                ? (s[2] = n)
                : n && (s[2] = '(' + s[2] + ') and (' + n + ')'),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  './node_modules/style-loader/lib/addStyles.js': function(e, t, n) {
    var r,
      o,
      i = {},
      s = ((r = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === o && (o = r.apply(this, arguments)), o;
      }),
      c = (function(e) {
        var t = {};
        return function(e) {
          if ('function' == typeof e) return e();
          if (void 0 === t[e]) {
            var n = function(e) {
              return document.querySelector(e);
            }.call(this, e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })(),
      a = null,
      d = 0,
      l = [],
      u = n('./node_modules/style-loader/lib/urls.js');
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = i[r.id];
        if (o) {
          o.refs++;
          for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
          for (; s < r.parts.length; s++) o.parts.push(m(r.parts[s], t));
        } else {
          var c = [];
          for (s = 0; s < r.parts.length; s++) c.push(m(r.parts[s], t));
          i[r.id] = { id: r.id, refs: 1, parts: c };
        }
      }
    }
    function p(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          s = t.base ? i[0] + t.base : i[0],
          c = { css: i[1], media: i[2], sourceMap: i[3] };
        r[s] ? r[s].parts.push(c) : n.push((r[s] = { id: s, parts: [c] }));
      }
      return n;
    }
    function h(e, t) {
      var n = c(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = l[l.length - 1];
      if ('top' === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          l.push(t);
      else if ('bottom' === e.insertAt) n.appendChild(t);
      else {
        if ('object' != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var o = c(e.insertInto + ' ' + e.insertAt.before);
        n.insertBefore(t, o);
      }
    }
    function y(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = l.indexOf(e);
      t >= 0 && l.splice(t, 1);
    }
    function v(e) {
      var t = document.createElement('style');
      return (
        void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
        b(t, e.attrs),
        h(e, t),
        t
      );
    }
    function b(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function m(e, t) {
      var n, r, o, i;
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function() {};
        e.css = i;
      }
      if (t.singleton) {
        var s = d++;
        (n = a || (a = v(t))),
          (r = j.bind(null, n, s, !1)),
          (o = j.bind(null, n, s, !0));
      } else
        e.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement('link');
              return (
                void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                b(t, e.attrs),
                h(e, t),
                t
              );
            })(t)),
            (r = function(e, t, n) {
              var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
              (t.convertToAbsoluteUrls || i) && (r = u(r));
              o &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */');
              var s = new Blob([r], { type: 'text/css' }),
                c = e.href;
              (e.href = URL.createObjectURL(s)), c && URL.revokeObjectURL(c);
            }.bind(null, n, t)),
            (o = function() {
              y(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = v(t)),
            (r = function(e, t) {
              var n = t.css,
                r = t.media;
              r && e.setAttribute('media', r);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (o = function() {
              y(n);
            }));
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function(e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        );
      ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = s()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom');
      var n = p(e, t);
      return (
        f(n, t),
        function(e) {
          for (var r = [], o = 0; o < n.length; o++) {
            var s = n[o];
            (c = i[s.id]).refs--, r.push(c);
          }
          e && f(p(e, t), t);
          for (o = 0; o < r.length; o++) {
            var c;
            if (0 === (c = r[o]).refs) {
              for (var a = 0; a < c.parts.length; a++) c.parts[a]();
              delete i[c.id];
            }
          }
        }
      );
    };
    var g,
      w = ((g = []),
      function(e, t) {
        return (g[e] = t), g.filter(Boolean).join('\n');
      });
    function j(e, t, n, r) {
      var o = n ? '' : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, o);
      else {
        var i = document.createTextNode(o),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]),
          s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
      }
    }
  },
  './node_modules/style-loader/lib/urls.js': function(e, t) {
    e.exports = function(e) {
      var t = 'undefined' != typeof window && window.location;
      if (!t) throw new Error('fixUrls requires window.location');
      if (!e || 'string' != typeof e) return e;
      var n = t.protocol + '//' + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, '/');
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var o,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? e
            : ((o =
                0 === i.indexOf('//')
                  ? i
                  : 0 === i.indexOf('/')
                    ? n + i
                    : r + i.replace(/^\.\//, '')),
              'url(' + JSON.stringify(o) + ')');
        }
      );
    };
  },
  './src/index.js': function(e, t, n) {
    'use strict';
    n.r(t);
    n('./src/styles/style.css');
    let r = (((i = document.createElement('pre')).innerHTML = [
      'Hello webpack!',
      '5 cube is equal to ' + ((o = 5), o * o * o)
    ].join('\n\n')),
    i);
    var o, i;
    document.body.appendChild(r);
  },
  './src/styles/style.css': function(e, t, n) {
    var r = n('./node_modules/css-loader/index.js!./src/styles/style.css');
    'string' == typeof r && (r = [[e.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 },
      i = n('./node_modules/style-loader/lib/addStyles.js')(r, o);
    r.locals && (e.exports = r.locals),
      e.hot.accept(
        './node_modules/css-loader/index.js!./src/styles/style.css',
        function(t) {
          !(function() {
            var t = n(
              './node_modules/css-loader/index.js!./src/styles/style.css'
            );
            if (
              ('string' == typeof t && (t = [[e.i, t, '']]),
              !(function(e, t) {
                var n,
                  r = 0;
                for (n in e) {
                  if (!t || e[n] !== t[n]) return !1;
                  r++;
                }
                for (n in t) r--;
                return 0 === r;
              })(r.locals, t.locals))
            )
              throw new Error(
                'Aborting CSS HMR due to changed css-modules locals.'
              );
            i(t);
          })();
        }
      ),
      e.hot.dispose(function() {
        i();
      });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz82ZDA4Il0sIm5hbWVzIjpbInBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrIiwid2luZG93IiwiY2h1bmtJZCIsIm1vcmVNb2R1bGVzIiwiaG90QXZhaWxhYmxlRmlsZXNNYXAiLCJob3RSZXF1ZXN0ZWRGaWxlc01hcCIsIm1vZHVsZUlkIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaG90VXBkYXRlIiwiaG90V2FpdGluZ0ZpbGVzIiwiaG90Q2h1bmtzTG9hZGluZyIsImhvdFVwZGF0ZURvd25sb2FkZWQiLCJob3RBZGRVcGRhdGVDaHVuayIsImhvdEN1cnJlbnRDaGlsZE1vZHVsZSIsImhvdEFwcGx5T25VcGRhdGUiLCJob3RDdXJyZW50SGFzaCIsImhvdFJlcXVlc3RUaW1lb3V0IiwiaG90Q3VycmVudE1vZHVsZURhdGEiLCJob3RDdXJyZW50UGFyZW50cyIsImhvdEN1cnJlbnRQYXJlbnRzVGVtcCIsImhvdENyZWF0ZVJlcXVpcmUiLCJtZSIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZm4iLCJyZXF1ZXN0IiwiaG90IiwiYWN0aXZlIiwicGFyZW50cyIsImluZGV4T2YiLCJwdXNoIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwid2FybiIsIk9iamVjdEZhY3RvcnkiLCJuYW1lIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJlIiwiaG90U3RhdHVzIiwiaG90U2V0U3RhdHVzIiwidGhlbiIsImZpbmlzaENodW5rTG9hZGluZyIsImVyciIsImhvdFdhaXRpbmdGaWxlc01hcCIsImhvdEVuc3VyZVVwZGF0ZUNodW5rIiwidCIsIm1vZGUiLCJob3RTdGF0dXNIYW5kbGVycyIsIm5ld1N0YXR1cyIsImkiLCJsZW5ndGgiLCJob3REZWZlcnJlZCIsImhvdFVwZGF0ZU5ld0hhc2giLCJ0b01vZHVsZUlkIiwiaWQiLCJob3RDaGVjayIsImFwcGx5IiwiRXJyb3IiLCJyZXF1ZXN0VGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiWE1MSHR0cFJlcXVlc3QiLCJyZXF1ZXN0UGF0aCIsInAiLCJvcGVuIiwidGltZW91dCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwidXBkYXRlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiYyIsImgiLCJwcm9taXNlIiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiY2hhcnNldCIsInNyYyIsImFwcGVuZENoaWxkIiwiaG90RG93bmxvYWRVcGRhdGVDaHVuayIsImRlZmVycmVkIiwiaG90QXBwbHkiLCJyZXN1bHQiLCJvdXRkYXRlZE1vZHVsZXMiLCJvcHRpb25zIiwiY2IiLCJqIiwibW9kdWxlIiwiZ2V0QWZmZWN0ZWRTdHVmZiIsInVwZGF0ZU1vZHVsZUlkIiwib3V0ZGF0ZWREZXBlbmRlbmNpZXMiLCJxdWV1ZSIsInNsaWNlIiwibWFwIiwiY2hhaW4iLCJxdWV1ZUl0ZW0iLCJwb3AiLCJfc2VsZkFjY2VwdGVkIiwiX3NlbGZEZWNsaW5lZCIsInR5cGUiLCJfbWFpbiIsInBhcmVudElkIiwicGFyZW50IiwiX2RlY2xpbmVkRGVwZW5kZW5jaWVzIiwiY29uY2F0IiwiX2FjY2VwdGVkRGVwZW5kZW5jaWVzIiwiYWRkQWxsVG9TZXQiLCJhIiwiYiIsIml0ZW0iLCJhcHBsaWVkVXBkYXRlIiwid2FyblVuZXhwZWN0ZWRSZXF1aXJlIiwiYWJvcnRFcnJvciIsImRvQXBwbHkiLCJkb0Rpc3Bvc2UiLCJjaGFpbkluZm8iLCJqb2luIiwib25EZWNsaW5lZCIsImlnbm9yZURlY2xpbmVkIiwib25VbmFjY2VwdGVkIiwiaWdub3JlVW5hY2NlcHRlZCIsIm9uQWNjZXB0ZWQiLCJvbkRpc3Bvc2VkIiwiaWR4Iiwib3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzIiwiZXJyb3JIYW5kbGVyIiwia2V5cyIsImZvckVhY2giLCJpbnN0YWxsZWRDaHVua3MiLCJob3REaXNwb3NlQ2h1bmsiLCJkZXBlbmRlbmN5IiwibW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMiLCJkYXRhIiwiZGlzcG9zZUhhbmRsZXJzIiwiX2Rpc3Bvc2VIYW5kbGVycyIsImNoaWxkIiwic3BsaWNlIiwibW9kdWxlcyIsImVycm9yIiwiY2FsbGJhY2tzIiwib25FcnJvcmVkIiwiZGVwZW5kZW5jeUlkIiwiaWdub3JlRXJyb3JlZCIsImVycjIiLCJvcmlnaW5hbEVycm9yIiwiZXhwb3J0cyIsImwiLCJhY2NlcHQiLCJkZXAiLCJjYWxsYmFjayIsImRlY2xpbmUiLCJkaXNwb3NlIiwiYWRkRGlzcG9zZUhhbmRsZXIiLCJyZW1vdmVEaXNwb3NlSGFuZGxlciIsImNoZWNrIiwiYWRkU3RhdHVzSGFuZGxlciIsInJlbW92ZVN0YXR1c0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJob3RDcmVhdGVNb2R1bGUiLCJtIiwiZCIsImdldHRlciIsIm8iLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJjb250ZW50IiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlTWFwIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnkiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJtZW1vIiwic3R5bGVzSW5Eb20iLCJpc09sZElFIiwiYWxsIiwiYXRvYiIsImFyZ3VtZW50cyIsImdldEVsZW1lbnQiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJzdHlsZXNJbnNlcnRlZEF0VG9wIiwiZml4VXJscyIsImFkZFN0eWxlc1RvRG9tIiwic3R5bGVzIiwiZG9tU3R5bGUiLCJyZWZzIiwicGFydHMiLCJhZGRTdHlsZSIsImxpc3RUb1N0eWxlcyIsIm5ld1N0eWxlcyIsImJhc2UiLCJwYXJ0IiwiY3NzIiwibWVkaWEiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZSIsImluc2VydEludG8iLCJsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCIsImluc2VydEF0IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYmVmb3JlIiwicmVtb3ZlU3R5bGVFbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlU3R5bGVFbGVtZW50IiwiYXR0cnMiLCJhZGRBdHRycyIsImVsIiwic2V0QXR0cmlidXRlIiwib2JqIiwicmVtb3ZlIiwidHJhbnNmb3JtIiwic3R5bGVJbmRleCIsImFwcGx5VG9TaW5nbGV0b25UYWciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJCbG9iIiwibGluayIsInJlbCIsImNyZWF0ZUxpbmtFbGVtZW50IiwiYXV0b0ZpeFVybHMiLCJjb252ZXJ0VG9BYnNvbHV0ZVVybHMiLCJibG9iIiwib2xkU3JjIiwiaHJlZiIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJuZXdPYmoiLCJERUJVRyIsIm5ld0xpc3QiLCJtYXlSZW1vdmUiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlVGV4dCIsImluZGV4IiwicmVwbGFjZW1lbnQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiY3NzTm9kZSIsImNoaWxkTm9kZXMiLCJsb2NhdGlvbiIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJjdXJyZW50RGlyIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsIm5ld1VybCIsInVucXVvdGVkT3JpZ1VybCIsInRyaW0iLCIkMSIsInRlc3QiLCJzcmNfZWxlbWVudCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJ4IiwiYm9keSIsImhtciIsImxvY2FscyIsIl9fV0VCUEFDS19PVVREQVRFRF9ERVBFTkRFTkNJRVNfXyIsIm5ld0NvbnRlbnQiXSwibWFwcGluZ3MiOiJhQUdBLElBQUFBLEVBQUFDLE9BQUEsaUJBQ0FBLE9BQUEsaUJBQ0EsU0FBQUMsRUFBQUMsSUE4UUEsU0FBQUQsRUFBQUMsR0FDQSxJQUFBQyxFQUFBRixLQUFBRyxFQUFBSCxHQUNBLE9BRUEsUUFBQUksS0FEQUQsRUFBQUgsSUFBQSxFQUNBQyxFQUNBSSxPQUFBQyxVQUFBQyxlQUFBQyxLQUFBUCxFQUFBRyxLQUNBSyxFQUFBTCxHQUFBSCxFQUFBRyxJQUdBLEtBQUFNLEdBQUEsSUFBQUMsR0FDQUMsSUF2UkFDLENBQUFiLEVBQUFDLEdBQ0FILEtBQUFFLEVBQUFDLElBd0RBLElBSUFhLEVBSkFDLEdBQUEsRUFDQUMsRUFBQSx1QkFDQUMsRUFBQSxJQUNBQyxLQUVBQyxLQUNBQyxLQUdBLFNBQUFDLEVBQUFqQixHQUNB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MEZDdEVBLElBQUFLLElBVEFDLEVBQUF0TixTQUFBRyxjQUFBLFFBRUFvTixXQUFBLHdDQ0ZBQyxFREVBLEVDREFBLFFEQ0E1SyxLQUNBLFFBRUEwSyxHQU5BLElDQ0FFLEVEQUFGLEVBVUF0TixTQUFBeU4sS0FBQW5OLFlBQUErTSw2Q0ViQSxJQUFBMUcsRUFBQXhLLEVBQUEsNkRBRUEsaUJBQUF3SyxRQUFBNUYsRUFBQTdDLEVBQUF5SSxFQUFBLE1BT0EsSUFBQS9GLEdBQWU4TSxLQUFBLEVBRWZqRCxlQVBBQSxFQVFBakIsZ0JBQUFuRSxHQUVBN0YsRUFBQXJELEVBQUEsK0NBQUFBLENBQUF3SyxFQUFBL0YsR0FFQStGLEVBQUFnSCxTQUFBNU0sRUFBQTBELFFBQUFrQyxFQUFBZ0gsUUFHQTVNLEVBQUF6RSxJQUFBcUksT0FBQSxxRUFBQWlKLElBQUEsV0FDQSxJQUFBQyxFQUFBMVIsRUFBQSw2REFpQkEsR0FmQSxpQkFBQTBSLFFBQUE5TSxFQUFBN0MsRUFBQTJQLEVBQUEsT0FFQSxTQUFBMUwsRUFBQUMsR0FDQSxJQUFBNkQsRUFBQTlDLEVBQUEsRUFFQSxJQUFBOEMsS0FBQTlELEVBQUEsQ0FDQSxJQUFBQyxHQUFBRCxFQUFBOEQsS0FBQTdELEVBQUE2RCxHQUFBLFNBQ0E5QyxJQUdBLElBQUE4QyxLQUFBN0QsRUFBQWUsSUFFQSxXQUFBQSxFQVZBLENBV0d3RCxFQUFBZ0gsT0FBQUUsRUFBQUYsUUFFSCxVQUFBalAsTUFBQSx1REFFQWMsRUFBQXFPLEdBcEJBLEtBdUJBOU0sRUFBQXpFLElBQUF5SSxRQUFBLFdBQWdDdkYiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjVkMDk3MWJjMzQzMmFlNjdiY2ZmXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IDA7XG4gXHRcdFx0e1xuIFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0KVxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2luZGV4LmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIEBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTcGlyYXgtUmVndWxhcic7XFxuICBzcmM6IHVybCguLi9mb250cy9TcGlyYXgtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59ICovXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ5NWJkO1xcbn1cXG5cXG4vKiAuaGVsbG8ge1xcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy94dG9jYXQuanBnJyk7XFxuICBmb250LWZhbWlseTogJ1NwaXJheC1SZWd1bGFyJztcXG59ICovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCB7IGN1YmUgfSBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBbJ0hlbGxvIHdlYnBhY2shJywgJzUgY3ViZSBpcyBlcXVhbCB0byAnICsgY3ViZSg1KV0uam9pbihcbiAgICAnXFxuXFxuJ1xuICApO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gU3RvcmUgdGhlIGVsZW1lbnQgdG8gcmUtcmVuZGVyIG9uIHByaW50LmpzIGNoYW5nZXNcbmxldCBlbGVtZW50ID0gY29tcG9uZW50KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuICAvLyBtb2R1bGUuaG90LmFjY2VwdCgnLi9wcmludC5qcycsIGZ1bmN0aW9uKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdBY2NlcHRpbmcgdGhlIHVwZGF0ZWQgcHJpbnRNZSBtb2R1bGUhJyk7XG4gIC8vICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgLy8gICBlbGVtZW50ID0gY29tcG9uZW50KCk7XG4gIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgLy8gfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3F1YXJlKHgpIHtcbiAgcmV0dXJuIHggKiB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViZSh4KSB7XG4gIHJldHVybiB4ICogeCAqIHg7XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
