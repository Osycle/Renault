"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.vuelidate = e() : t.vuelidate = e();
}(window, function () {
  return function (t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        r.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "/", r(r.s = 3);
  }({
    3: function _(t, e, r) {
      "use strict";

      function n(t) {
        return null == t;
      }

      function o(t) {
        return null != t;
      }

      function i(t, e) {
        return e.tag === t.tag && e.key === t.key;
      }

      function u(t) {
        var e = t.tag;
        t.vm = new e({
          data: t.args
        });
      }

      function a(t, e, r) {
        var n,
            i,
            u = {};

        for (n = e; n <= r; ++n) {
          o(i = t[n].key) && (u[i] = n);
        }

        return u;
      }

      function l(t, e, r) {
        for (; e <= r; ++e) {
          u(t[e]);
        }
      }

      function c(t, e, r) {
        for (; e <= r; ++e) {
          var n = t[e];
          o(n) && (n.vm.$destroy(), n.vm = null);
        }
      }

      function s(t, e) {
        t !== e && (e.vm = t.vm, function (t) {
          for (var e = Object.keys(t.args), r = 0; r < e.length; r++) {
            e.forEach(function (e) {
              t.vm[e] = t.args[e];
            });
          }
        }(e));
      }

      function f(t, e) {
        o(t) && o(e) ? t !== e && function (t, e) {
          for (var r, f, d, y = 0, h = 0, p = t.length - 1, v = t[0], b = t[p], m = e.length - 1, g = e[0], M = e[m]; y <= p && h <= m;) {
            n(v) ? v = t[++y] : n(b) ? b = t[--p] : i(v, g) ? (s(v, g), v = t[++y], g = e[++h]) : i(b, M) ? (s(b, M), b = t[--p], M = e[--m]) : i(v, M) ? (s(v, M), v = t[++y], M = e[--m]) : i(b, g) ? (s(b, g), b = t[--p], g = e[++h]) : (n(r) && (r = a(t, y, p)), n(f = o(g.key) ? r[g.key] : null) ? (u(g), g = e[++h]) : i(d = t[f], g) ? (s(d, g), t[f] = void 0, g = e[++h]) : (u(g), g = e[++h]));
          }

          y > p ? l(e, h, m) : h > m && c(t, y, p);
        }(t, e) : o(e) ? l(e, 0, e.length - 1) : o(t) && c(t, 0, t.length - 1);
      }

      function d(t, e, r) {
        return {
          tag: t,
          key: e,
          args: r
        };
      }

      function y(t, e) {
        var r = Object.keys(t);

        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })), r.push.apply(r, n);
        }

        return r;
      }

      function h(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t;
      }

      function p(t) {
        return (p = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      r.r(e);
      var v = [],
          b = null;

      function m() {
        null !== b && v.push(b), b = {};
      }

      function g() {
        var t = b,
            e = b = v.pop() || null;
        return e && (Array.isArray(e.$sub) || (e.$sub = []), e.$sub.push(t)), t;
      }

      function M(t) {
        if ("object" !== p(t) || Array.isArray(t)) throw new Error("params must be an object");

        b = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? y(Object(r), !0).forEach(function (e) {
              h(t, e, r[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
            });
          }

          return t;
        }({}, b, {}, t);
      }

      function O(t) {
        var e = t(M);
        return function () {
          m();

          try {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
              r[n] = arguments[n];
            }

            return e.apply(this, r);
          } finally {
            g();
          }
        };
      }

      function $(t, e) {
        return "object" === p(t) && void 0 !== e ? (r = t, n = e, O(function (t) {
          return function () {
            t(r);

            for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++) {
              o[i] = arguments[i];
            }

            return n.apply(this, o);
          };
        })) : O(t);
        var r, n;
      }

      function j(t) {
        return function (t) {
          if (Array.isArray(t)) {
            for (var e = 0, r = new Array(t.length); e < t.length; e++) {
              r[e] = t[e];
            }

            return r;
          }
        }(t) || function (t) {
          if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }(t) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      function _(t, e) {
        var r = Object.keys(t);

        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })), r.push.apply(r, n);
        }

        return r;
      }

      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? _(Object(r), !0).forEach(function (e) {
            w(t, e, r[e]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
        }

        return t;
      }

      function w(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t;
      }

      function x(t) {
        return (x = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      r.d(e, "Vuelidate", function () {
        return L;
      }), r.d(e, "validationMixin", function () {
        return C;
      }), r.d(e, "withParams", function () {
        return $;
      });

      var k = function k() {
        return null;
      },
          z = function z(t, e, r) {
        return t.reduce(function (t, n) {
          return t[r ? r(n) : n] = e(n), t;
        }, {});
      };

      function A(t) {
        return "function" == typeof t;
      }

      function S(t) {
        return null !== t && ("object" === x(t) || A(t));
      }

      var K = function K(t, e, r, n) {
        if ("function" == typeof r) return r.call(t, e, n);
        r = Array.isArray(r) ? r : r.split(".");

        for (var o = 0; o < r.length; o++) {
          if (!e || "object" !== x(e)) return n;
          e = e[r[o]];
        }

        return void 0 === e ? n : e;
      };

      var W = {
        $invalid: function $invalid() {
          var t = this,
              e = this.proxy;
          return this.nestedKeys.some(function (e) {
            return t.refProxy(e).$invalid;
          }) || this.ruleKeys.some(function (t) {
            return !e[t];
          });
        },
        $dirty: function $dirty() {
          var t = this;
          return !!this.dirty || 0 !== this.nestedKeys.length && this.nestedKeys.every(function (e) {
            return t.refProxy(e).$dirty;
          });
        },
        $anyDirty: function $anyDirty() {
          var t = this;
          return !!this.dirty || 0 !== this.nestedKeys.length && this.nestedKeys.some(function (e) {
            return t.refProxy(e).$anyDirty;
          });
        },
        $error: function $error() {
          return this.$dirty && !this.$pending && this.$invalid;
        },
        $anyError: function $anyError() {
          var t = this;
          return !!this.$error || this.nestedKeys.some(function (e) {
            return t.refProxy(e).$anyError;
          });
        },
        $pending: function $pending() {
          var t = this;
          return this.ruleKeys.some(function (e) {
            return t.getRef(e).$pending;
          }) || this.nestedKeys.some(function (e) {
            return t.refProxy(e).$pending;
          });
        },
        $params: function $params() {
          var t = this,
              e = this.validations;
          return P({}, z(this.nestedKeys, function (t) {
            return e[t] && e[t].$params || null;
          }), {}, z(this.ruleKeys, function (e) {
            return t.getRef(e).$params;
          }));
        }
      };

      function D(t) {
        this.dirty = t;
        var e = this.proxy,
            r = t ? "$touch" : "$reset";
        this.nestedKeys.forEach(function (t) {
          e[t][r]();
        });
      }

      var E = {
        $touch: function $touch() {
          D.call(this, !0);
        },
        $reset: function $reset() {
          D.call(this, !1);
        },
        $flattenParams: function $flattenParams() {
          var t = this.proxy,
              e = [];

          for (var r in this.$params) {
            if (this.isNested(r)) {
              for (var n = t[r].$flattenParams(), o = 0; o < n.length; o++) {
                n[o].path.unshift(r);
              }

              e = e.concat(n);
            } else e.push({
              path: [],
              name: r,
              params: this.$params[r]
            });
          }

          return e;
        }
      },
          V = Object.keys(W),
          R = Object.keys(E),
          B = null,
          N = function N(t) {
        if (B) return B;

        var e = t.extend({
          computed: {
            refs: function refs() {
              var t = this._vval;
              this._vval = this.children, f(t, this._vval);
              var e = {};
              return this._vval.forEach(function (t) {
                e[t.key] = t.vm;
              }), e;
            }
          },
          beforeCreate: function beforeCreate() {
            this._vval = null;
          },
          beforeDestroy: function beforeDestroy() {
            this._vval && (f(this._vval), this._vval = null);
          },
          methods: {
            getModel: function getModel() {
              return this.lazyModel ? this.lazyModel(this.prop) : this.model;
            },
            getModelKey: function getModelKey(t) {
              var e = this.getModel();
              if (e) return e[t];
            },
            hasIter: function hasIter() {
              return !1;
            }
          }
        }),
            r = e.extend({
          data: function data() {
            return {
              rule: null,
              lazyModel: null,
              model: null,
              lazyParentModel: null,
              rootModel: null
            };
          },
          methods: {
            runRule: function runRule(e) {
              var r = this.getModel();
              m();
              var n,
                  o = this.rule.call(this.rootModel, r, e),
                  i = S(n = o) && A(n.then) ? function (t, e) {
                var r = new t({
                  data: {
                    p: !0,
                    v: !1
                  }
                });
                return e.then(function (t) {
                  r.p = !1, r.v = t;
                }, function (t) {
                  throw r.p = !1, r.v = !1, t;
                }), r.__isVuelidateAsyncVm = !0, r;
              }(t, o) : o,
                  u = g();
              return {
                output: i,
                params: u && u.$sub ? u.$sub.length > 1 ? u : u.$sub[0] : null
              };
            }
          },
          computed: {
            run: function run() {
              var t = this,
                  e = this.lazyParentModel();

              if (Array.isArray(e) && e.__ob__) {
                var r = e.__ob__.dep;
                r.depend();
                var n = r.constructor.target;

                if (!this._indirectWatcher) {
                  var o = n.constructor;
                  this._indirectWatcher = new o(this, function () {
                    return t.runRule(e);
                  }, null, {
                    lazy: !0
                  });
                }

                var i = this.getModel();
                if (!this._indirectWatcher.dirty && this._lastModel === i) return this._indirectWatcher.depend(), n.value;
                this._lastModel = i, this._indirectWatcher.evaluate(), this._indirectWatcher.depend();
              } else this._indirectWatcher && (this._indirectWatcher.teardown(), this._indirectWatcher = null);

              return this._indirectWatcher ? this._indirectWatcher.value : this.runRule(e);
            },
            $params: function $params() {
              return this.run.params;
            },
            proxy: function proxy() {
              var t = this.run.output;
              return t.__isVuelidateAsyncVm ? !!t.v : !!t;
            },
            $pending: function $pending() {
              var t = this.run.output;
              return !!t.__isVuelidateAsyncVm && t.p;
            }
          },
          destroyed: function destroyed() {
            this._indirectWatcher && (this._indirectWatcher.teardown(), this._indirectWatcher = null);
          }
        }),
            n = e.extend({
          data: function data() {
            return {
              dirty: !1,
              validations: null,
              lazyModel: null,
              model: null,
              prop: null,
              lazyParentModel: null,
              rootModel: null
            };
          },
          methods: P({}, E, {
            refProxy: function refProxy(t) {
              return this.getRef(t).proxy;
            },
            getRef: function getRef(t) {
              return this.refs[t];
            },
            isNested: function isNested(t) {
              return "function" != typeof this.validations[t];
            }
          }),
          computed: P({}, W, {
            nestedKeys: function nestedKeys() {
              return this.keys.filter(this.isNested);
            },
            ruleKeys: function ruleKeys() {
              var t = this;
              return this.keys.filter(function (e) {
                return !t.isNested(e);
              });
            },
            keys: function keys() {
              return Object.keys(this.validations).filter(function (t) {
                return "$params" !== t;
              });
            },
            proxy: function proxy() {
              var t = this,
                  e = z(this.keys, function (e) {
                return {
                  enumerable: !0,
                  configurable: !0,
                  get: function get() {
                    return t.refProxy(e);
                  }
                };
              }),
                  r = z(V, function (e) {
                return {
                  enumerable: !0,
                  configurable: !0,
                  get: function get() {
                    return t[e];
                  }
                };
              }),
                  n = z(R, function (e) {
                return {
                  enumerable: !1,
                  configurable: !0,
                  get: function get() {
                    return t[e];
                  }
                };
              }),
                  o = this.hasIter() ? {
                $iter: {
                  enumerable: !0,
                  value: Object.defineProperties({}, P({}, e))
                }
              } : {};
              return Object.defineProperties({}, P({}, e, {}, o, {
                $model: {
                  enumerable: !0,
                  get: function get() {
                    var e = t.lazyParentModel();
                    return null != e ? e[t.prop] : null;
                  },
                  set: function set(e) {
                    var r = t.lazyParentModel();
                    null != r && (r[t.prop] = e, t.$touch());
                  }
                }
              }, r, {}, n));
            },
            children: function children() {
              var t = this;
              return [].concat(j(this.nestedKeys.map(function (e) {
                return u(t, e);
              })), j(this.ruleKeys.map(function (e) {
                return a(t, e);
              }))).filter(Boolean);
            }
          })
        }),
            o = n.extend({
          methods: {
            isNested: function isNested(t) {
              return void 0 !== this.validations[t]();
            },
            getRef: function getRef(t) {
              var e = this;
              return {
                get proxy() {
                  return e.validations[t]() || !1;
                }

              };
            }
          }
        }),
            i = n.extend({
          computed: {
            keys: function keys() {
              var t = this.getModel();
              return S(t) ? Object.keys(t) : [];
            },
            tracker: function tracker() {
              var t = this,
                  e = this.validations.$trackBy;
              return e ? function (r) {
                return "".concat(K(t.rootModel, t.getModelKey(r), e));
              } : function (t) {
                return "".concat(t);
              };
            },
            getModelLazy: function getModelLazy() {
              var t = this;
              return function () {
                return t.getModel();
              };
            },
            children: function children() {
              var t = this,
                  e = this.validations,
                  r = this.getModel(),
                  o = P({}, e);
              delete o.$trackBy;
              var i = {};
              return this.keys.map(function (e) {
                var u = t.tracker(e);
                return i.hasOwnProperty(u) ? null : (i[u] = !0, d(n, u, {
                  validations: o,
                  prop: e,
                  lazyParentModel: t.getModelLazy,
                  model: r[e],
                  rootModel: t.rootModel
                }));
              }).filter(Boolean);
            }
          },
          methods: {
            isNested: function isNested() {
              return !0;
            },
            getRef: function getRef(t) {
              return this.refs[this.tracker(t)];
            },
            hasIter: function hasIter() {
              return !0;
            }
          }
        }),
            u = function u(t, e) {
          if ("$each" === e) return d(i, e, {
            validations: t.validations[e],
            lazyParentModel: t.lazyParentModel,
            prop: e,
            lazyModel: t.getModel,
            rootModel: t.rootModel
          });
          var r = t.validations[e];

          if (Array.isArray(r)) {
            var u = t.rootModel,
                a = z(r, function (t) {
              return function () {
                return K(u, u.$v, t);
              };
            }, function (t) {
              return Array.isArray(t) ? t.join(".") : t;
            });
            return d(o, e, {
              validations: a,
              lazyParentModel: k,
              prop: e,
              lazyModel: k,
              rootModel: u
            });
          }

          return d(n, e, {
            validations: r,
            lazyParentModel: t.getModel,
            prop: e,
            lazyModel: t.getModelKey,
            rootModel: t.rootModel
          });
        },
            a = function a(t, e) {
          return d(r, e, {
            rule: t.validations[e],
            lazyParentModel: t.lazyParentModel,
            lazyModel: t.getModel,
            rootModel: t.rootModel
          });
        };

        return B = {
          VBase: e,
          Validation: n
        };
      },
          I = null;

      var T = function T(t, e) {
        var r = function (t) {
          if (I) return I;

          for (var e = t.constructor; e["super"];) {
            e = e["super"];
          }

          return I = e, e;
        }(t),
            n = N(r),
            o = n.Validation;

        return new (0, n.VBase)({
          computed: {
            children: function children() {
              var r = "function" == typeof e ? e.call(t) : e;
              return [d(o, "$v", {
                validations: r,
                lazyParentModel: k,
                prop: "$v",
                model: t,
                rootModel: t
              })];
            }
          }
        });
      },
          C = {
        data: function data() {
          var t = this.$options.validations;
          return t && (this._vuelidate = T(this, t)), {};
        },
        beforeCreate: function beforeCreate() {
          var t = this.$options;
          t.validations && (t.computed || (t.computed = {}), t.computed.$v || (t.computed.$v = function () {
            return this._vuelidate ? this._vuelidate.refs.$v.proxy : null;
          }));
        },
        beforeDestroy: function beforeDestroy() {
          this._vuelidate && (this._vuelidate.$destroy(), this._vuelidate = null);
        }
      };

      function L(t) {
        t.mixin(C);
      }

      e["default"] = L;
    }
  });
});