(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function Gn(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = {},
  at = [],
  Fe = () => {},
  Qs = () => !1,
  fn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  un = (e) => e.startsWith("onUpdate:"),
  le = Object.assign,
  Jn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  ui = Object.prototype.hasOwnProperty,
  D = (e, t) => ui.call(e, t),
  I = Array.isArray,
  Xe = (e) => Nt(e) === "[object Map]",
  tn = (e) => Nt(e) === "[object Set]",
  xs = (e) => Nt(e) === "[object Date]",
  R = (e) => typeof e == "function",
  ee = (e) => typeof e == "string",
  Te = (e) => typeof e == "symbol",
  W = (e) => e !== null && typeof e == "object",
  er = (e) => (W(e) || R(e)) && R(e.then) && R(e.catch),
  tr = Object.prototype.toString,
  Nt = (e) => tr.call(e),
  di = (e) => Nt(e).slice(8, -1),
  nr = (e) => Nt(e) === "[object Object]",
  Yn = (e) =>
    ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Et = Gn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  dn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  pi = /-\w/g,
  we = dn((e) => e.replace(pi, (t) => t.slice(1).toUpperCase())),
  hi = /\B([A-Z])/g,
  ut = dn((e) => e.replace(hi, "-$1").toLowerCase()),
  sr = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Tn = dn((e) => (e ? `on${sr(e)}` : "")),
  Ve = (e, t) => !Object.is(e, t),
  An = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  rr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  gi = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let vs;
const pn = () =>
  vs ||
  (vs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function hn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ee(s) ? yi(s) : hn(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (ee(e) || W(e)) return e;
}
const mi = /;(?![^(]*\))/g,
  _i = /:([^]+)/,
  bi = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function yi(e) {
  const t = {};
  return (
    e
      .replace(bi, (n) => (n.startsWith("/*") ? "" : n))
      .split(mi)
      .forEach((n) => {
        if (n) {
          const s = n.split(_i);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function gn(e) {
  let t = "";
  if (ee(e)) t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = gn(e[n]);
      s && (t += s + " ");
    }
  else if (W(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const xi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  vi = Gn(xi);
function ir(e) {
  return !!e || e === "";
}
function wi(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++) s = mn(e[r], t[r], n);
  return s;
}
function ws(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t),
    r = new Uint8Array(s.length);
  for (const i of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!r[l] && mn(i, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Si(e, t, n) {
  let s = Xe(e),
    r = Xe(t);
  if (s || r || ((s = tn(e)), (r = tn(t)), s || r))
    return s && r ? ws(e, t, n) : !1;
  const i = Object.keys(e).length,
    o = Object.keys(t).length;
  if (i !== o) return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l),
      d = t.hasOwnProperty(l);
    if ((a && !d) || (!a && d) || !mn(e[l], t[l], n)) return !1;
  }
  return String(e) === String(t);
}
function Ss(e, t, n, s) {
  n || (n = [new Map(), new Map()]);
  const [r, i] = n;
  if (r.has(e) || i.has(t)) return r.get(e) === t && i.get(t) === e;
  (r.set(e, t), i.set(t, e));
  const o = s(e, t, n);
  return (r.delete(e), i.delete(t), o);
}
function mn(e, t, n) {
  if (e === t) return !0;
  let s = xs(e),
    r = xs(t);
  return s || r
    ? s && r
      ? e.getTime() === t.getTime()
      : !1
    : ((s = Te(e)),
      (r = Te(t)),
      s || r
        ? e === t
        : ((s = I(e)),
          (r = I(t)),
          s || r
            ? s && r
              ? Ss(e, t, n, wi)
              : !1
            : ((s = W(e)),
              (r = W(t)),
              s || r
                ? !s || !r
                  ? !1
                  : Ss(e, t, n, Si)
                : String(e) === String(t))));
}
const or = (e) => !!(e && e.__v_isRef === !0),
  Y = (e) =>
    ee(e)
      ? e
      : e == null
        ? ""
        : I(e) || (W(e) && (e.toString === tr || !R(e.toString)))
          ? or(e)
            ? Y(e.value)
            : JSON.stringify(e, lr, 2)
          : String(e),
  lr = (e, t) =>
    or(t)
      ? lr(e, t.value)
      : Xe(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[$n(s, i) + " =>"] = r), n),
              {},
            ),
          }
        : tn(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => $n(n)) }
          : Te(t)
            ? $n(t)
            : W(t) && !I(t) && !nr(t)
              ? String(t)
              : t,
  $n = (e, t = "") => {
    var n;
    return Te(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let ie;
class Ci {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this._warnOnRun = !0),
      (this.__v_skip = !0),
      !t &&
        ie &&
        (ie.active
          ? ((this.parent = ie),
            (this.index = (ie.scopes || (ie.scopes = [])).push(this) - 1))
          : ((this._active = !1), (this._warnOnRun = !1))));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++) s[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++) r[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++) s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ie;
      try {
        return ((ie = this), t());
      } finally {
        ie = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = ie), (ie = this));
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ie === this) ie = this.prevScope;
      else {
        let t = ie;
        for (; t;) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        const r = this.scopes.slice();
        for (n = 0, s = r.length; n < s; n++) r[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Ti() {
  return ie;
}
let U;
const Pn = new WeakSet();
class cr {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ie && (ie.active ? ie.effects.push(this) : (this.flags &= -2)));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Pn.has(this) && (Pn.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || fr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), Cs(this), ur(this));
    const t = U,
      n = Se;
    ((U = this), (Se = !0));
    try {
      return this.fn();
    } finally {
      (dr(this), (U = t), (Se = n), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Qn(t);
      ((this.deps = this.depsTail = void 0),
        Cs(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? Pn.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    Dn(this) && this.run();
  }
  get dirty() {
    return Dn(this);
  }
}
let ar = 0,
  Ot,
  kt;
function fr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = kt), (kt = e));
    return;
  }
  ((e.next = Ot), (Ot = e));
}
function Zn() {
  ar++;
}
function Xn() {
  if (--ar > 0) return;
  if (kt) {
    let t = kt;
    for (kt = void 0; t;) {
      const n = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = n));
    }
  }
  let e;
  for (; Ot;) {
    let t = Ot;
    for (Ot = void 0; t;) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ur(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function dr(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s;) {
    const r = s.prevDep;
    (s.version === -1 ? (s === n && (n = r), Qn(s), Ai(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r));
  }
  ((e.deps = t), (e.depsTail = n));
}
function Dn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (pr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function pr(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === jt) ||
    ((e.globalVersion = jt),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Dn(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = U,
    s = Se;
  ((U = e), (Se = !0));
  try {
    ur(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ve(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    ((U = n), (Se = s), dr(e), (e.flags &= -3));
  }
}
function Qn(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Qn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ai(e) {
  const { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let Se = !0;
const hr = [];
function Ke() {
  (hr.push(Se), (Se = !1));
}
function Ue() {
  const e = hr.pop();
  Se = e === void 0 ? !0 : e;
}
function Cs(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let jt = 0;
class $i {
  constructor(t, n) {
    ((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class gr {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(t) {
    if (!U || !Se || U === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      ((n = this.activeLink = new $i(U, this)),
        U.deps
          ? ((n.prevDep = U.depsTail),
            (U.depsTail.nextDep = n),
            (U.depsTail = n))
          : (U.deps = U.depsTail = n),
        mr(n));
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      ((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = U.depsTail),
        (n.nextDep = void 0),
        (U.depsTail.nextDep = n),
        (U.depsTail = n),
        U.deps === n && (U.deps = s));
    }
    return n;
  }
  trigger(t) {
    (this.version++, jt++, this.notify(t));
  }
  notify(t) {
    Zn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xn();
    }
  }
}
function mr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) mr(s);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const Hn = new WeakMap(),
  ft = Symbol(""),
  Nn = Symbol(""),
  Rt = Symbol("");
function ce(e, t, n) {
  if (Se && U) {
    let s = Hn.get(e);
    s || Hn.set(e, (s = new Map()));
    let r = s.get(n);
    (r || (s.set(n, (r = new gr())), (r.map = s), (r.key = n)), r.track());
  }
}
function We(e, t, n, s, r, i) {
  const o = Hn.get(e);
  if (!o) {
    jt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((Zn(), t === "clear")) o.forEach(l);
  else {
    const a = I(e),
      d = a && Yn(n);
    if (a && n === "length") {
      const u = Number(s);
      o.forEach((h, C) => {
        (C === "length" || C === Rt || (!Te(C) && C >= u)) && l(h);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Rt)), t)
      ) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(ft)), Xe(e) && l(o.get(Nn)));
          break;
        case "delete":
          a || (l(o.get(ft)), Xe(e) && l(o.get(Nn)));
          break;
        case "set":
          Xe(e) && l(o.get(ft));
          break;
      }
  }
  Xn();
}
function ht(e) {
  const t = V(e);
  return t === e || (ce(t, "iterate", Rt), Ce(e))
    ? t
    : qe(e)
      ? Qe(e)
        ? t.map((n) => tt(Le(n)))
        : t.map(tt)
      : t.map(Le);
}
function _n(e) {
  return (ce((e = V(e)), "iterate", Rt), e);
}
function je(e, t) {
  return qe(e) ? tt(Qe(e) ? Le(t) : t) : Le(t);
}
const Pi = {
  __proto__: null,
  [Symbol.iterator]() {
    return En(this, Symbol.iterator, (e) => je(this, e));
  },
  concat(...e) {
    return ht(this).concat(...e.map((t) => (I(t) ? ht(t) : t)));
  },
  entries() {
    return En(this, "entries", (e) => ((e[1] = je(this, e[1])), e));
  },
  every(e, t) {
    return He(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return He(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => je(this, s)),
      arguments,
    );
  },
  find(e, t) {
    return He(this, "find", e, t, (n) => je(this, n), arguments);
  },
  findIndex(e, t) {
    return He(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return He(this, "findLast", e, t, (n) => je(this, n), arguments);
  },
  findLastIndex(e, t) {
    return He(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return He(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return On(this, "includes", e);
  },
  indexOf(...e) {
    return On(this, "indexOf", e);
  },
  join(e) {
    return ht(this).join(e);
  },
  lastIndexOf(...e) {
    return On(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Tt(this, "pop");
  },
  push(...e) {
    return Tt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ts(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ts(this, "reduceRight", e, t);
  },
  shift() {
    return Tt(this, "shift");
  },
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Tt(this, "splice", e);
  },
  toReversed() {
    return ht(this).toReversed();
  },
  toSorted(e) {
    return ht(this).toSorted(e);
  },
  toSpliced(...e) {
    return ht(this).toSpliced(...e);
  },
  unshift(...e) {
    return Tt(this, "unshift", e);
  },
  values() {
    return En(this, "values", (e) => je(this, e));
  },
};
function En(e, t, n) {
  const s = _n(e),
    r = s[t]();
  return (
    s !== e &&
      !Ce(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return (i.done || (i.value = n(i.value)), i);
      })),
    r
  );
}
const Ei = Array.prototype;
function He(e, t, n, s, r, i) {
  const o = _n(e),
    l = o !== e && !Ce(e),
    a = o[t];
  if (a !== Ei[t]) {
    const h = a.apply(e, i);
    return l ? Le(h) : h;
  }
  let d = n;
  o !== e &&
    (l
      ? (d = function (h, C) {
          return n.call(this, je(e, h), C, e);
        })
      : n.length > 2 &&
        (d = function (h, C) {
          return n.call(this, h, C, e);
        }));
  const u = a.call(o, d, s);
  return l && r ? r(u) : u;
}
function Ts(e, t, n, s) {
  const r = _n(e),
    i = r !== e && !Ce(e);
  let o = n,
    l = !1;
  r !== e &&
    (i
      ? ((l = s.length === 0),
        (o = function (d, u, h) {
          return (
            l && ((l = !1), (d = je(e, d))),
            n.call(this, d, je(e, u), h, e)
          );
        }))
      : n.length > 3 &&
        (o = function (d, u, h) {
          return n.call(this, d, u, h, e);
        }));
  const a = r[t](o, ...s);
  return l ? je(e, a) : a;
}
function On(e, t, n) {
  const s = V(e);
  ce(s, "iterate", Rt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && ss(n[0])
    ? ((n[0] = V(n[0])), s[t](...n))
    : r;
}
function Tt(e, t, n = []) {
  (Ke(), Zn());
  const s = V(e)[t].apply(e, n);
  return (Xn(), Ue(), s);
}
const Oi = Gn("__proto__,__v_isRef,__isVue"),
  _r = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Te),
  );
function ki(e) {
  Te(e) || (e = String(e));
  const t = V(this);
  return (ce(t, "has", e), t.hasOwnProperty(e));
}
class br {
  constructor(t = !1, n = !1) {
    ((this._isReadonly = t), (this._isShallow = n));
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? Bi : wr) : i ? vr : xr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = I(t);
    if (!r) {
      let a;
      if (o && (a = Pi[n])) return a;
      if (n === "hasOwnProperty") return ki;
    }
    const l = Reflect.get(t, n, he(t) ? t : s);
    if ((Te(n) ? _r.has(n) : Oi(n)) || (r || ce(t, "get", n), i)) return l;
    if (he(l)) {
      const a = o && Yn(n) ? l : l.value;
      return r && W(a) ? Vn(a) : a;
    }
    return W(l) ? (r ? Vn(l) : ts(l)) : l;
  }
}
class yr extends br {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = I(t) && Yn(n);
    if (!this._isShallow) {
      const d = qe(i);
      if ((!Ce(s) && !qe(s) && ((i = V(i)), (s = V(s))), !o && he(i) && !he(s)))
        return (d || (i.value = s), !0);
    }
    const l = o ? Number(n) < t.length : D(t, n),
      a = Reflect.set(t, n, s, he(t) ? t : r);
    return (
      t === V(r) &&
        a &&
        (l ? Ve(s, i) && We(t, "set", n, s) : We(t, "add", n, s)),
      a
    );
  }
  deleteProperty(t, n) {
    const s = D(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return (r && s && We(t, "delete", n, void 0), r);
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return ((!Te(n) || !_r.has(n)) && ce(t, "has", n), s);
  }
  ownKeys(t) {
    return (ce(t, "iterate", I(t) ? "length" : ft), Reflect.ownKeys(t));
  }
}
class Mi extends br {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ii = new yr(),
  ji = new Mi(),
  Ri = new yr(!0);
const Bn = (e) => e,
  Gt = (e) => Reflect.getPrototypeOf(e);
function Fi(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = V(r),
      o = Xe(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      d = r[e](...s),
      u = n ? Bn : t ? tt : Le;
    return (
      !t && ce(i, "iterate", a ? Nn : ft),
      le(Object.create(d), {
        next() {
          const { value: h, done: C } = d.next();
          return C
            ? { value: h, done: C }
            : { value: l ? [u(h[0]), u(h[1])] : u(h), done: C };
        },
      })
    );
  };
}
function Jt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Li(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = V(i),
        l = V(r);
      e || (Ve(r, l) && ce(o, "get", r), ce(o, "get", l));
      const { has: a } = Gt(o),
        d = t ? Bn : e ? tt : Le;
      if (a.call(o, r)) return d(i.get(r));
      if (a.call(o, l)) return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return (!e && ce(V(r), "iterate", ft), r.size);
    },
    has(r) {
      const i = this.__v_raw,
        o = V(i),
        l = V(r);
      return (
        e || (Ve(r, l) && ce(o, "has", r), ce(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        a = V(l),
        d = t ? Bn : e ? tt : Le;
      return (
        !e && ce(a, "iterate", ft),
        l.forEach((u, h) => r.call(i, d(u), d(h), o))
      );
    },
  };
  return (
    le(
      n,
      e
        ? {
            add: Jt("add"),
            set: Jt("set"),
            delete: Jt("delete"),
            clear: Jt("clear"),
          }
        : {
            add(r) {
              const i = V(this),
                o = Gt(i),
                l = V(r),
                a = !t && !Ce(r) && !qe(r) ? l : r;
              return (
                o.has.call(i, a) ||
                  (Ve(r, a) && o.has.call(i, r)) ||
                  (Ve(l, a) && o.has.call(i, l)) ||
                  (i.add(a), We(i, "add", a, a)),
                this
              );
            },
            set(r, i) {
              !t && !Ce(i) && !qe(i) && (i = V(i));
              const o = V(this),
                { has: l, get: a } = Gt(o);
              let d = l.call(o, r);
              d || ((r = V(r)), (d = l.call(o, r)));
              const u = a.call(o, r);
              return (
                o.set(r, i),
                d ? Ve(i, u) && We(o, "set", r, i) : We(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = V(this),
                { has: o, get: l } = Gt(i);
              let a = o.call(i, r);
              (a || ((r = V(r)), (a = o.call(i, r))), l && l.call(i, r));
              const d = i.delete(r);
              return (a && We(i, "delete", r, void 0), d);
            },
            clear() {
              const r = V(this),
                i = r.size !== 0,
                o = r.clear();
              return (i && We(r, "clear", void 0, void 0), o);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = Fi(r, e, t);
    }),
    n
  );
}
function es(e, t) {
  const n = Li(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(D(n, r) && r in s ? n : s, r, i);
}
const Di = { get: es(!1, !1) },
  Hi = { get: es(!1, !0) },
  Ni = { get: es(!0, !1) };
const xr = new WeakMap(),
  vr = new WeakMap(),
  wr = new WeakMap(),
  Bi = new WeakMap();
function Vi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ts(e) {
  return qe(e) ? e : ns(e, !1, Ii, Di, xr);
}
function Wi(e) {
  return ns(e, !1, Ri, Hi, vr);
}
function Vn(e) {
  return ns(e, !0, ji, Ni, wr);
}
function ns(e, t, n, s, r) {
  if (
    !W(e) ||
    (e.__v_raw && !(t && e.__v_isReactive)) ||
    e.__v_skip ||
    !Object.isExtensible(e)
  )
    return e;
  const i = r.get(e);
  if (i) return i;
  const o = Vi(di(e));
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return (r.set(e, l), l);
}
function Qe(e) {
  return qe(e) ? Qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function Ce(e) {
  return !!(e && e.__v_isShallow);
}
function ss(e) {
  return e ? !!e.__v_raw : !1;
}
function V(e) {
  const t = e && e.__v_raw;
  return t ? V(t) : e;
}
function zi(e) {
  return (
    !D(e, "__v_skip") && Object.isExtensible(e) && rr(e, "__v_skip", !0),
    e
  );
}
const Le = (e) => (W(e) ? ts(e) : e),
  tt = (e) => (W(e) ? Vn(e) : e);
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function oe(e) {
  return he(e) ? e.value : e;
}
const Ki = {
  get: (e, t, n) => (t === "__v_raw" ? e : oe(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return he(r) && !he(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Sr(e) {
  return Qe(e) ? e : new Proxy(e, Ki);
}
class Ui {
  constructor(t, n, s) {
    ((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new gr(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = jt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && U !== this))
      return (fr(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (pr(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function qi(e, t, n = !1) {
  let s, r;
  return (R(e) ? (s = e) : ((s = e.get), (r = e.set)), new Ui(s, r, n));
}
const Yt = {},
  nn = new WeakMap();
let ct;
function Gi(e, t = !1, n = ct) {
  if (n) {
    let s = nn.get(n);
    (s || nn.set(n, (s = [])), s.push(e));
  }
}
function Ji(e, t, n = q) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = n,
    d = (O) => (r ? O : Ce(O) || r === !1 || r === 0 ? Ze(O, 1) : Ze(O));
  let u,
    h,
    C,
    A,
    H = !1,
    j = !1;
  if (
    (he(e)
      ? ((h = () => e.value), (H = Ce(e)))
      : Qe(e)
        ? ((h = () => d(e)), (H = !0))
        : I(e)
          ? ((j = !0),
            (H = e.some((O) => Qe(O) || Ce(O))),
            (h = () =>
              e.map((O) => {
                if (he(O)) return O.value;
                if (Qe(O)) return d(O);
                if (R(O)) return a ? a(O, 2) : O();
              })))
          : R(e)
            ? t
              ? (h = a ? () => a(e, 2) : e)
              : (h = () => {
                  if (C) {
                    Ke();
                    try {
                      C();
                    } finally {
                      Ue();
                    }
                  }
                  const O = ct;
                  ct = u;
                  try {
                    return a ? a(e, 3, [A]) : e(A);
                  } finally {
                    ct = O;
                  }
                })
            : (h = Fe),
    t && r)
  ) {
    const O = h,
      se = r === !0 ? 1 / 0 : r;
    h = () => Ze(O(), se);
  }
  const te = Ti(),
    Z = () => {
      (u.stop(), te && te.active && Jn(te.effects, u));
    };
  if (i && t) {
    const O = t;
    t = (...se) => {
      const $e = O(...se);
      return (Z(), $e);
    };
  }
  let L = j ? new Array(e.length).fill(Yt) : Yt;
  const N = (O) => {
    if (!(!(u.flags & 1) || (!u.dirty && !O)))
      if (t) {
        const se = u.run();
        if (
          O ||
          r ||
          H ||
          (j ? se.some(($e, Pe) => Ve($e, L[Pe])) : Ve(se, L))
        ) {
          C && C();
          const $e = ct;
          ct = u;
          try {
            const Pe = [se, L === Yt ? void 0 : j && L[0] === Yt ? [] : L, A];
            ((L = se), a ? a(t, 3, Pe) : t(...Pe));
          } finally {
            ct = $e;
          }
        }
      } else u.run();
  };
  return (
    l && l(N),
    (u = new cr(h)),
    (u.scheduler = o ? () => o(N, !1) : N),
    (A = (O) => Gi(O, !1, u)),
    (C = u.onStop =
      () => {
        const O = nn.get(u);
        if (O) {
          if (a) a(O, 4);
          else for (const se of O) se();
          nn.delete(u);
        }
      }),
    t ? (s ? N(!0) : (L = u.run())) : o ? o(N.bind(null, !0), !0) : u.run(),
    (Z.pause = u.pause.bind(u)),
    (Z.resume = u.resume.bind(u)),
    (Z.stop = Z),
    Z
  );
}
function Ze(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !W(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, he(e))) Ze(e.value, t, n);
  else if (I(e)) for (let s = 0; s < e.length; s++) Ze(e[s], t, n);
  else if (tn(e) || Xe(e))
    e.forEach((s) => {
      Ze(s, t, n);
    });
  else if (nr(e)) {
    for (const s in e) Ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ze(e[s], t, n);
  }
  return e;
}
function Bt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    bn(r, t, n);
  }
}
function Ae(e, t, n, s) {
  if (R(e)) {
    const r = Bt(e, t, n, s);
    return (
      r &&
        er(r) &&
        r.catch((i) => {
          bn(i, t, n);
        }),
      r
    );
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Ae(e[i], t, n, s));
    return r;
  }
}
function bn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || q;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l;) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++) if (u[h](e, a, d) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      (Ke(), Bt(i, null, 10, [e, a, d]), Ue());
      return;
    }
  }
  Yi(e, n, r, s, o);
}
function Yi(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const de = [];
let Ie = -1;
const _t = [];
let Ye = null,
  gt = 0;
const Cr = Promise.resolve();
let sn = null;
function Zi(e) {
  const t = sn || Cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xi(e) {
  let t = Ie + 1,
    n = de.length;
  for (; t < n;) {
    const s = (t + n) >>> 1,
      r = de[s],
      i = Ft(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function rs(e) {
  if (!(e.flags & 1)) {
    const t = Ft(e),
      n = de[de.length - 1];
    (!n || (!(e.flags & 2) && t >= Ft(n)) ? de.push(e) : de.splice(Xi(t), 0, e),
      (e.flags |= 1),
      Tr());
  }
}
function Tr() {
  sn || (sn = Cr.then($r));
}
function Qi(e) {
  if (!I(e))
    Ye && e.id === -1
      ? Ye.splice(gt + 1, 0, e)
      : e.flags & 1 || (_t.push(e), (e.flags |= 1));
  else for (let t = 0; t < e.length; t++) _t.push(e[t]);
  Tr();
}
function As(e, t, n = Ie + 1) {
  for (; n < de.length; n++) {
    const s = de[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      (de.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2));
    }
  }
}
function Ar(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort((n, s) => Ft(n) - Ft(s));
    if (((_t.length = 0), Ye)) {
      for (let n = 0; n < t.length; n++) Ye.push(t[n]);
      return;
    }
    for (Ye = t, gt = 0; gt < Ye.length; gt++) {
      const n = Ye[gt];
      (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
    }
    ((Ye = null), (gt = 0));
  }
}
const Ft = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function $r(e) {
  try {
    for (Ie = 0; Ie < de.length; Ie++) {
      const t = de[Ie];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Bt(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ie < de.length; Ie++) {
      const t = de[Ie];
      t && (t.flags &= -2);
    }
    ((Ie = -1),
      (de.length = 0),
      Ar(),
      (sn = null),
      (de.length || _t.length) && $r());
  }
}
let _e = null,
  Pr = null;
function rn(e) {
  const t = _e;
  return ((_e = e), (Pr = (e && e.type.__scopeId) || null), t);
}
function J(e, t = _e, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ls(-1);
    const i = rn(t),
      o = ze.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let a = ze.length; a > o; a--) as();
      (rn(i), s._d && Ls(1));
    }
    return l;
  };
  return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function ot(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (Ke(), Ae(a, n, 8, [e.el, l, e, t]), Ue());
  }
}
function eo(e, t) {
  if (pe) {
    let n = pe.provides;
    const s = pe.parent && pe.parent.provides;
    (s === n && (n = pe.provides = Object.create(s)), (n[e] = t));
  }
}
function Xt(e, t, n = !1) {
  const s = Xo();
  if (s || yt) {
    let r = yt
      ? yt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && R(t) ? t.call(s && s.proxy) : t;
  }
}
const to = Symbol.for("v-scx"),
  no = () => Xt(to);
function kn(e, t, n) {
  return Er(e, t, n);
}
function Er(e, t, n = q) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = le({}, n),
    a = (t && s) || (!t && i !== "post");
  let d;
  if (Ht) {
    if (i === "sync") {
      const A = no();
      d = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!a) {
      const A = () => {};
      return ((A.stop = Fe), (A.resume = Fe), (A.pause = Fe), A);
    }
  }
  const u = pe;
  l.call = (A, H, j) => Ae(A, u, H, j);
  let h = !1;
  (i === "post"
    ? (l.scheduler = (A) => {
        me(A, u && u.suspense);
      })
    : i !== "sync" &&
      ((h = !0),
      (l.scheduler = (A, H) => {
        H ? A() : rs(A);
      })),
    (l.augmentJob = (A) => {
      (t && (A.flags |= 4),
        h && ((A.flags |= 2), u && ((A.id = u.uid), (A.i = u))));
    }));
  const C = Ji(e, t, l);
  return (Ht && (d ? d.push(C) : a && C()), C);
}
function so(e, t, n) {
  const s = this.proxy,
    r = ee(e) ? (e.includes(".") ? Or(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  R(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = Vt(this),
    l = Er(r, i.bind(s), n);
  return (o(), l);
}
function Or(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const ro = Symbol("_vte"),
  yn = (e) => e.__isTeleport,
  Mn = Symbol("_leaveCb");
function io(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== De) {
        t = n;
        break;
      }
  }
  return t;
}
function kr(e) {
  if (!os(e)) return yn(e.type) && e.children ? io(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && R(n.default)) return n.default();
  }
}
function is(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    is((yn(n.type) && kr(n)) || n, t);
  } else
    e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function X(e, t) {
  return R(e) ? le({ name: e.name }, t, { setup: e }) : e;
}
function Mr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function $s(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const on = new WeakMap();
function Mt(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach((j, te) => Mt(j, t && (I(t) ? t[te] : t), n, s, r));
    return;
  }
  if (bt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Mt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? ds(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: a } = e,
    d = t && t.r,
    u = l.refs === q ? (l.refs = {}) : l.refs,
    h = l.setupState,
    C = V(h),
    A = h === q ? Qs : (j) => ($s(u, j) ? !1 : D(C, j)),
    H = (j, te) => !(te && $s(u, te));
  if (d != null && d !== a) {
    if ((Ps(t), ee(d))) ((u[d] = null), A(d) && (h[d] = null));
    else if (he(d)) {
      const j = t;
      (H(d, j.k) && (d.value = null), j.k && (u[j.k] = null));
    }
  }
  if (R(a)) Bt(a, l, 12, [o, u]);
  else {
    const j = ee(a),
      te = he(a);
    if (j || te) {
      const Z = () => {
        if (e.f) {
          const L = j ? (A(a) ? h[a] : u[a]) : H() || !e.k ? a.value : u[e.k];
          if (r) I(L) && Jn(L, i);
          else if (I(L)) L.includes(i) || L.push(i);
          else if (j) ((u[a] = [i]), A(a) && (h[a] = u[a]));
          else {
            const N = [i];
            (H(a, e.k) && (a.value = N), e.k && (u[e.k] = N));
          }
        } else
          j
            ? ((u[a] = o), A(a) && (h[a] = o))
            : te && (H(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const L = () => {
          (Z(), on.delete(e));
        };
        ((L.id = -1), on.set(e, L), me(L, n));
      } else (Ps(e), Z());
    }
  }
}
function Ps(e) {
  const t = on.get(e);
  t && ((t.flags |= 8), on.delete(e));
}
pn().requestIdleCallback;
pn().cancelIdleCallback;
const bt = (e) => !!e.type.__asyncLoader,
  os = (e) => e.type.__isKeepAlive;
function oo(e, t) {
  Ir(e, "a", t);
}
function lo(e, t) {
  Ir(e, "da", t);
}
function Ir(e, t, n = pe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r;) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((xn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent;)
      (os(r.parent.vnode) && co(s, t, n, r), (r = r.parent));
  }
}
function co(e, t, n, s) {
  const r = xn(t, e, s, !0);
  jr(() => {
    Jn(s[t], r);
  }, n);
}
function xn(e, t, n = pe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Ke();
          const l = Vt(n),
            a = Ae(t, n, e, o);
          return (l(), Ue(), a);
        });
    return (s ? r.unshift(i) : r.push(i), i);
  }
}
const Ge =
    (e) =>
    (t, n = pe) => {
      (!Ht || e === "sp") && xn(e, (...s) => t(...s), n);
    },
  ao = Ge("bm"),
  fo = Ge("m"),
  uo = Ge("bu"),
  po = Ge("u"),
  ho = Ge("bum"),
  jr = Ge("um"),
  go = Ge("sp"),
  mo = Ge("rtg"),
  _o = Ge("rtc");
function bo(e, t = pe) {
  xn("ec", e, t);
}
const yo = Symbol.for("v-ndc");
function xe(e, t, n, s) {
  let r;
  const i = n,
    o = I(e);
  if (o || ee(e)) {
    const l = o && Qe(e);
    let a = !1,
      d = !1;
    (l && ((a = !Ce(e)), (d = qe(e)), (e = _n(e))), (r = new Array(e.length)));
    for (let u = 0, h = e.length; u < h; u++)
      r[u] = t(a ? (d ? tt(Le(e[u])) : Le(e[u])) : e[u], u, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (W(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const u = l[a];
        r[a] = t(e[u], u, a, i);
      }
    }
  else r = [];
  return r;
}
function et(e, t, n, s, r, i) {
  if (
    (n == null && (n = {}),
    _e.ce || (_e.parent && bt(_e.parent) && _e.parent.ce))
  ) {
    const d = n,
      u = Object.keys(d).length > 0;
    return (
      t !== "default" && (d.name = t),
      T(),
      ge(G, null, [E("slot", d, s)], u ? -2 : 64)
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const l = ze.length;
  T();
  let a;
  try {
    const d = o && Rr(o(n)),
      u = n.key || i || (d && d.key);
    a = ge(
      G,
      { key: (u && !Te(u) ? u : `_${t}`) + (!d && s ? "_fb" : "") },
      d || (s ? s() : []),
      d && e._ === 1 ? 64 : -2,
    );
  } catch (d) {
    for (let u = ze.length; u > l; u--) as();
    throw d;
  } finally {
    o && o._c && (o._d = !0);
  }
  return (a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), a);
}
function Rr(e) {
  return e.some((t) =>
    fs(t) ? !(t.type === De || (t.type === G && !Rr(t.children))) : !0,
  )
    ? e
    : null;
}
const Wn = (e) => (e ? (ti(e) ? ds(e) : Wn(e.parent)) : null),
  It = le(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Wn(e.parent),
    $root: (e) => Wn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Lr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        rs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Zi.bind(e.proxy)),
    $watch: (e) => so.bind(e),
  }),
  In = (e, t) => e !== q && !e.__isScriptSetup && D(e, t),
  xo = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: a,
      } = e;
      if (t[0] !== "$") {
        const C = o[t];
        if (C !== void 0)
          switch (C) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (In(s, t)) return ((o[t] = 1), s[t]);
          if (r !== q && D(r, t)) return ((o[t] = 2), r[t]);
          if (D(i, t)) return ((o[t] = 3), i[t]);
          if (n !== q && D(n, t)) return ((o[t] = 4), n[t]);
          zn && (o[t] = 0);
        }
      }
      const d = It[t];
      let u, h;
      if (d) return (t === "$attrs" && ce(e.attrs, "get", ""), d(e));
      if ((u = l.__cssModules) && (u = u[t])) return u;
      if (n !== q && D(n, t)) return ((o[t] = 4), n[t]);
      if (((h = a.config.globalProperties), D(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return In(r, t)
        ? ((r[t] = n), !0)
        : s !== q && D(s, t)
          ? ((s[t] = n), !0)
          : D(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          props: i,
          type: o,
        },
      },
      l,
    ) {
      let a;
      return !!(
        n[l] ||
        (e !== q && l[0] !== "$" && D(e, l)) ||
        In(t, l) ||
        D(i, l) ||
        D(s, l) ||
        D(It, l) ||
        D(r.config.globalProperties, l) ||
        ((a = o.__cssModules) && a[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : D(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Es(e) {
  return I(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let zn = !0;
function vo(e) {
  const t = Lr(e),
    n = e.proxy,
    s = e.ctx;
  ((zn = !1), t.beforeCreate && Os(t.beforeCreate, e, "bc"));
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    created: u,
    beforeMount: h,
    mounted: C,
    beforeUpdate: A,
    updated: H,
    activated: j,
    deactivated: te,
    beforeDestroy: Z,
    beforeUnmount: L,
    destroyed: N,
    unmounted: O,
    render: se,
    renderTracked: $e,
    renderTriggered: Pe,
    errorCaptured: Je,
    serverPrefetch: Wt,
    expose: st,
    inheritAttrs: vt,
    components: zt,
    directives: Kt,
    filters: Sn,
  } = t;
  if ((d && wo(d, s, null), o))
    for (const Q in o) {
      const K = o[Q];
      R(K) && (s[Q] = K.bind(n));
    }
  if (r) {
    const Q = r.call(n, n);
    W(Q) && (e.data = ts(Q));
  }
  if (((zn = !0), i))
    for (const Q in i) {
      const K = i[Q],
        rt = R(K) ? K.bind(n, n) : R(K.get) ? K.get.bind(n, n) : Fe,
        Ut = !R(K) && R(K.set) ? K.set.bind(n) : Fe,
        it = si({ get: rt, set: Ut });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => it.value,
        set: (ve) => (it.value = ve),
      });
    }
  if (l) for (const Q in l) Fr(l[Q], s, n, Q);
  if (a) {
    const Q = R(a) ? a.call(n) : a;
    Reflect.ownKeys(Q).forEach((K) => {
      eo(K, Q[K]);
    });
  }
  u && Os(u, e, "c");
  function fe(Q, K) {
    I(K) ? K.forEach((rt) => Q(rt.bind(n))) : K && Q(K.bind(n));
  }
  if (
    (fe(ao, h),
    fe(fo, C),
    fe(uo, A),
    fe(po, H),
    fe(oo, j),
    fe(lo, te),
    fe(bo, Je),
    fe(_o, $e),
    fe(mo, Pe),
    fe(ho, L),
    fe(jr, O),
    fe(go, Wt),
    I(st))
  )
    if (st.length) {
      const Q = e.exposed || (e.exposed = {});
      st.forEach((K) => {
        Object.defineProperty(Q, K, {
          get: () => n[K],
          set: (rt) => (n[K] = rt),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (se && e.render === Fe && (e.render = se),
    vt != null && (e.inheritAttrs = vt),
    zt && (e.components = zt),
    Kt && (e.directives = Kt),
    Wt && Mr(e));
}
function wo(e, t, n = Fe) {
  I(e) && (e = Kn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    (W(r)
      ? "default" in r
        ? (i = Xt(r.from || s, r.default, !0))
        : (i = Xt(r.from || s))
      : (i = Xt(r)),
      he(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i));
  }
}
function Os(e, t, n) {
  Ae(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Fr(e, t, n, s) {
  let r = s.includes(".") ? Or(n, s) : () => n[s];
  if (ee(e)) {
    const i = t[e];
    R(i) && kn(r, i);
  } else if (R(e)) kn(r, e.bind(n));
  else if (W(e))
    if (I(e)) e.forEach((i) => Fr(i, t, n, s));
    else {
      const i = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(i) && kn(r, i, e);
    }
}
function Lr(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !r.length && !n && !s
        ? (a = t)
        : ((a = {}),
          r.length && r.forEach((d) => ln(a, d, o, !0)),
          ln(a, t, o)),
    W(t) && i.set(t, a),
    a
  );
}
function ln(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  (i && ln(e, i, n, !0), r && r.forEach((o) => ln(e, o, n, !0)));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = So[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const So = {
  data: ks,
  props: Ms,
  emits: Ms,
  methods: $t,
  computed: $t,
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  components: $t,
  directives: $t,
  watch: To,
  provide: ks,
  inject: Co,
};
function ks(e, t) {
  return t
    ? e
      ? function () {
          return le(
            R(e) ? e.call(this, this) : e,
            R(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Co(e, t) {
  return $t(Kn(e), Kn(t));
}
function Kn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $t(e, t) {
  return e ? le(Object.create(null), e, t) : t;
}
function Ms(e, t) {
  return e
    ? I(e) && I(t)
      ? [...new Set([...e, ...t])]
      : le(Object.create(null), Es(e), Es(t ?? {}))
    : t;
}
function To(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(Object.create(null), e);
  for (const s in t) n[s] = ue(e[s], t[s]);
  return n;
}
function Dr() {
  return {
    app: null,
    config: {
      isNativeTag: Qs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ao = 0;
function $o(e, t) {
  return function (s, r = null) {
    (R(s) || (s = le({}, s)), r != null && !W(r) && (r = null));
    const i = Dr(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const d = (i.app = {
      _uid: Ao++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: rl,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...h) {
        return (
          o.has(u) ||
            (u && R(u.install)
              ? (o.add(u), u.install(d, ...h))
              : R(u) && (o.add(u), u(d, ...h))),
          d
        );
      },
      mixin(u) {
        return (i.mixins.includes(u) || i.mixins.push(u), d);
      },
      component(u, h) {
        return h ? ((i.components[u] = h), d) : i.components[u];
      },
      directive(u, h) {
        return h ? ((i.directives[u] = h), d) : i.directives[u];
      },
      mount(u, h, C) {
        if (!a) {
          const A = d._ceVNode || E(s, r);
          return (
            (A.appContext = i),
            C === !0 ? (C = "svg") : C === !1 && (C = void 0),
            e(A, u, C),
            (a = !0),
            (d._container = u),
            (u.__vue_app__ = d),
            ds(A.component)
          );
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a &&
          (Ae(l, d._instance, 16),
          e(null, d._container),
          delete d._container.__vue_app__);
      },
      provide(u, h) {
        return ((i.provides[u] = h), d);
      },
      runWithContext(u) {
        const h = yt;
        yt = d;
        try {
          return u();
        } finally {
          yt = h;
        }
      },
    });
    return d;
  };
}
let yt = null;
const Po = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function Eo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || q;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && Po(s, t.slice(7));
  o &&
    (o.trim && (r = n.map((u) => (ee(u) ? u.trim() : u))),
    o.number && (r = r.map(gi)));
  let l,
    a = s[(l = Tn(t))] || s[(l = Tn(we(t)))];
  (!a && i && (a = s[(l = Tn(ut(t)))]), a && Ae(a, e, 6, r));
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    ((e.emitted[l] = !0), Ae(d, e, 6, r));
  }
}
const Oo = new WeakMap();
function Hr(e, t, n = !1) {
  const s = n ? Oo : t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!R(e)) {
    const a = (d) => {
      const u = Hr(d, t, !0);
      u && ((l = !0), le(o, u));
    };
    (!n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a));
  }
  return !i && !l
    ? (W(e) && s.set(e, null), null)
    : (I(i) ? i.forEach((a) => (o[a] = null)) : le(o, i),
      W(e) && s.set(e, o),
      o);
}
function vn(e, t) {
  return !e || !fn(t)
    ? !1
    : ((t = t.slice(2)),
      (t = t === "Once" ? t : t.replace(/Once$/, "")),
      D(e, t[0].toLowerCase() + t.slice(1)) || D(e, ut(t)) || D(e, t));
}
function Is(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: a,
      render: d,
      renderCache: u,
      props: h,
      data: C,
      setupState: A,
      ctx: H,
      inheritAttrs: j,
    } = e,
    te = rn(e);
  let Z, L;
  try {
    if (n.shapeFlag & 4) {
      const O = r || s,
        se = O;
      ((Z = Re(d.call(se, O, u, h, A, C, H))), (L = l));
    } else {
      const O = t;
      ((Z = Re(
        O.length > 1 ? O(h, { attrs: l, slots: o, emit: a }) : O(h, null),
      )),
        (L = t.props ? l : ko(l)));
    }
  } catch (O) {
    ((ze.length = 0), bn(O, e, 1), (Z = E(De)));
  }
  let N = Z;
  if (L && j !== !1) {
    const O = Object.keys(L),
      { shapeFlag: se } = N;
    O.length &&
      se & 7 &&
      (i && O.some(un) && (L = Mo(L, i)), (N = xt(N, L, !1, !0)));
  }
  if (
    (n.dirs &&
      ((N = xt(N, null, !1, !0)),
      (N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs)),
    n.transition)
  ) {
    const O = (yn(N.type) && kr(N)) || N;
    is(O, n.transition);
  }
  return ((Z = N), rn(te), Z);
}
const ko = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || fn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Mo = (e, t) => {
    const n = {};
    for (const s in e) (!un(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Io(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: a } = t,
    d = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? js(s, o, d) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const C = u[h];
        if (Nr(o, s, C) && !vn(d, C)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? js(s, o, d)
            : !0
          : !!o;
  return !1;
}
function js(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (Nr(t, e, i) && !vn(n, i)) return !0;
  }
  return !1;
}
function Nr(e, t, n) {
  const s = e[n],
    r = t[n];
  return n === "style" && W(s) && W(r) ? !mn(s, r) : s !== r;
}
function jo({ vnode: e, parent: t, suspense: n }, s) {
  for (; t;) {
    const r = t.subTree;
    if (
      (r.suspense &&
        r.suspense.activeBranch === e &&
        ((r.suspense.vnode.el = r.el = s), (e = r)),
      r === e)
    )
      (((e = t.vnode).el = s), (t = t.parent));
    else break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Br = {},
  Vr = () => Object.create(Br),
  Wr = (e) => Object.getPrototypeOf(e) === Br;
function Ro(e, t, n, s = !1) {
  const r = {},
    i = Vr();
  ((e.propsDefaults = Object.create(null)), zr(e, t, r, i));
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  (n ? (e.props = s ? r : Wi(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i));
}
function Fo(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = V(r),
    [a] = e.propsOptions;
  let d = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let C = u[h];
        if (vn(e.emitsOptions, C)) continue;
        const A = t[C];
        if (a)
          if (D(i, C)) A !== i[C] && ((i[C] = A), (d = !0));
          else {
            const H = we(C);
            r[H] = Un(a, l, H, A, e, !1);
          }
        else A !== i[C] && ((i[C] = A), (d = !0));
      }
    }
  } else {
    zr(e, t, r, i) && (d = !0);
    let u;
    for (const h in l)
      (!t || (!D(t, h) && ((u = ut(h)) === h || !D(t, u)))) &&
        (a
          ? n &&
            (n[h] !== void 0 || n[u] !== void 0) &&
            (r[h] = Un(a, l, h, void 0, e, !0))
          : delete r[h]);
    if (i !== l) for (const h in i) (!t || !D(t, h)) && (delete i[h], (d = !0));
  }
  d && We(e.attrs, "set", "");
}
function zr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (Et(a)) continue;
      const d = t[a];
      let u;
      r && D(r, (u = we(a)))
        ? !i || !i.includes(u)
          ? (n[u] = d)
          : ((l || (l = {}))[u] = d)
        : vn(e.emitsOptions, a) ||
          ((!(a in s) || d !== s[a]) && ((s[a] = d), (o = !0)));
    }
  if (i) {
    const a = V(n),
      d = l || q;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = Un(r, a, h, d[h], e, !D(d, h));
    }
  }
  return o;
}
function Un(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = D(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && R(a)) {
        const { propsDefaults: d } = r;
        if (n in d) s = d[n];
        else {
          const u = Vt(r);
          ((s = d[n] = a.call(null, t)), u());
        }
      } else s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === ut(n)) && (s = !0));
  }
  return s;
}
const Lo = new WeakMap();
function Kr(e, t, n = !1) {
  const s = n ? Lo : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!R(e)) {
    const u = (h) => {
      a = !0;
      const [C, A] = Kr(h, t, !0);
      (le(o, C), A && l.push(...A));
    };
    (!n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u));
  }
  if (!i && !a) return (W(e) && s.set(e, at), at);
  if (I(i))
    for (let u = 0; u < i.length; u++) {
      const h = we(i[u]);
      Rs(h) && (o[h] = q);
    }
  else if (i)
    for (const u in i) {
      const h = we(u);
      if (Rs(h)) {
        const C = i[u],
          A = (o[h] = I(C) || R(C) ? { type: C } : le({}, C)),
          H = A.type;
        let j = !1,
          te = !0;
        if (I(H))
          for (let Z = 0; Z < H.length; ++Z) {
            const L = H[Z],
              N = R(L) && L.name;
            if (N === "Boolean") {
              j = !0;
              break;
            } else N === "String" && (te = !1);
          }
        else j = R(H) && H.name === "Boolean";
        ((A[0] = j), (A[1] = te), (j || D(A, "default")) && l.push(h));
      }
    }
  const d = [o, l];
  return (W(e) && s.set(e, d), d);
}
function Rs(e) {
  return e[0] !== "$" && !Et(e);
}
const ls = (e) => e === "_" || e === "_ctx" || e === "$stable",
  cs = (e) => (I(e) ? e.map(Re) : [Re(e)]),
  Do = (e, t, n) => {
    if (t._n) return t;
    const s = J((...r) => cs(t(...r)), n);
    return ((s._c = !1), s);
  },
  Ur = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (ls(r)) continue;
      const i = e[r];
      if (R(i)) t[r] = Do(r, i, s);
      else if (i != null) {
        const o = cs(i);
        t[r] = () => o;
      }
    }
  },
  qr = (e, t) => {
    const n = cs(t);
    e.slots.default = () => n;
  },
  Gr = (e, t, n) => {
    for (const s in t) (n || !ls(s)) && (e[s] = t[s]);
  },
  Ho = (e, t, n) => {
    const s = (e.slots = Vr());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Gr(s, t, n), n && rr(s, "_", r, !0)) : Ur(t, s);
    } else t && qr(e, t);
  },
  No = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = q;
    if (s.shapeFlag & 32) {
      const l = t._;
      (l
        ? n && l === 1
          ? (i = !1)
          : Gr(r, t, n)
        : ((i = !t.$stable), Ur(t, r)),
        (o = t));
    } else t && (qr(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !ls(l) && o[l] == null && delete r[l];
  },
  me = Ko;
function Bo(e) {
  return Vo(e);
}
function Vo(e, t) {
  const n = pn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: a,
      setText: d,
      setElementText: u,
      parentNode: h,
      nextSibling: C,
      setScopeId: A = Fe,
      insertStaticContent: H,
    } = e,
    j = (
      c,
      f,
      p,
      b = null,
      g = null,
      _ = null,
      v = void 0,
      x = null,
      y = !!f.dynamicChildren,
    ) => {
      if (c === f) return;
      (c && !At(c, f) && ((b = qt(c)), ve(c, g, _, !0), (c = null)),
        f.patchFlag === -2 && ((y = !1), (f.dynamicChildren = null)),
        f.dynamicChildren &&
          c &&
          c.dynamicChildren &&
          c.dynamicChildren.hasOnce &&
          (f.dynamicChildren === at && (f.dynamicChildren = []),
          (f.dynamicChildren.hasOnce = !0)));
      const { type: m, ref: P, shapeFlag: S } = f;
      switch (m) {
        case wn:
          te(c, f, p, b);
          break;
        case De:
          Z(c, f, p, b);
          break;
        case Qt:
          c == null && L(f, p, b, v);
          break;
        case G:
          zt(c, f, p, b, g, _, v, x, y);
          break;
        default:
          S & 1
            ? se(c, f, p, b, g, _, v, x, y)
            : S & 6
              ? Kt(c, f, p, b, g, _, v, x, y)
              : (S & 64 || S & 128) && m.process(c, f, p, b, g, _, v, x, y, St);
      }
      P != null && g
        ? Mt(P, c && c.ref, _, f || c, !f)
        : P == null && c && c.ref != null && Mt(c.ref, null, _, c, !0);
    },
    te = (c, f, p, b) => {
      if (c == null) s((f.el = l(f.children)), p, b);
      else {
        const g = (f.el = c.el);
        f.children !== c.children && d(g, f.children);
      }
    },
    Z = (c, f, p, b) => {
      c == null ? s((f.el = a(f.children || "")), p, b) : (f.el = c.el);
    },
    L = (c, f, p, b) => {
      [c.el, c.anchor] = H(c.children, f, p, b, c.el, c.anchor);
    },
    N = ({ el: c, anchor: f }, p, b) => {
      let g;
      for (; c && c !== f;) ((g = C(c)), s(c, p, b), (c = g));
      s(f, p, b);
    },
    O = ({ el: c, anchor: f }) => {
      let p;
      for (; c && c !== f;) ((p = C(c)), r(c), (c = p));
      r(f);
    },
    se = (c, f, p, b, g, _, v, x, y) => {
      if (
        (f.type === "svg" ? (v = "svg") : f.type === "math" && (v = "mathml"),
        c == null)
      )
        $e(f, p, b, g, _, v, x, y);
      else {
        const m = c.el && c.el._isVueCE ? c.el : null;
        try {
          (m && m._beginPatch(), Wt(c, f, g, _, v, x, y));
        } finally {
          m && m._endPatch();
        }
      }
    },
    $e = (c, f, p, b, g, _, v, x) => {
      let y, m;
      const { props: P, shapeFlag: S, transition: $, dirs: k } = c;
      if (
        ((y = c.el = o(c.type, _, P && P.is, P)),
        S & 8
          ? u(y, c.children)
          : S & 16 && Je(c.children, y, null, b, g, jn(c, _), v, x),
        k && ot(c, null, b, "created"),
        Pe(y, c, c.scopeId, v, b),
        P)
      ) {
        for (const z in P) z !== "value" && !Et(z) && i(y, z, null, P[z], _, b);
        ("value" in P && i(y, "value", null, P.value, _),
          (m = P.onVnodeBeforeMount) && Me(m, b, c));
      }
      k && ot(c, null, b, "beforeMount");
      const F = Wo(g, $);
      (F && $.beforeEnter(y),
        s(y, f, p),
        ((m = P && P.onVnodeMounted) || F || k) &&
          me(() => {
            (m && Me(m, b, c), F && $.enter(y), k && ot(c, null, b, "mounted"));
          }, g));
    },
    Pe = (c, f, p, b, g) => {
      if ((p && A(c, p), b)) for (let _ = 0; _ < b.length; _++) A(c, b[_]);
      if (g) {
        let _ = g.subTree;
        if (
          f === _ ||
          (Xr(_.type) && (_.ssContent === f || _.ssFallback === f))
        ) {
          const v = g.vnode;
          Pe(c, v, v.scopeId, v.slotScopeIds, g.parent);
        }
      }
    },
    Je = (c, f, p, b, g, _, v, x, y = 0) => {
      for (let m = y; m < c.length; m++) {
        const P = (c[m] = x ? Be(c[m]) : Re(c[m]));
        j(null, P, f, p, b, g, _, v, x);
      }
    },
    Wt = (c, f, p, b, g, _, v) => {
      const x = (f.el = c.el);
      let { patchFlag: y, dynamicChildren: m, dirs: P } = f;
      y |= c.patchFlag & 16;
      const S = c.props || q,
        $ = f.props || q;
      let k;
      if (
        (p && lt(p, !1),
        (k = $.onVnodeBeforeUpdate) && Me(k, p, f, c),
        P && ot(f, c, p, "beforeUpdate"),
        p && lt(p, !0),
        m &&
          (!c.dynamicChildren || c.dynamicChildren.length !== m.length) &&
          ((y = 0), (v = !1), (m = null)),
        ((S.innerHTML && $.innerHTML == null) ||
          (S.textContent && $.textContent == null)) &&
          u(x, ""),
        m
          ? st(c.dynamicChildren, m, x, p, b, jn(f, g), _)
          : v || K(c, f, x, null, p, b, jn(f, g), _, !1),
        y > 0)
      ) {
        if (y & 16) vt(x, S, $, p, g);
        else if (
          (y & 2 && S.class !== $.class && i(x, "class", null, $.class, g),
          y & 4 && i(x, "style", S.style, $.style, g),
          y & 8)
        ) {
          const F = f.dynamicProps;
          for (let z = 0; z < F.length; z++) {
            const B = F[z],
              ne = S[B],
              re = $[B];
            (re !== ne || B === "value") && i(x, B, ne, re, g, p);
          }
        }
        y & 1 && c.children !== f.children && u(x, f.children);
      } else !v && m == null && vt(x, S, $, p, g);
      ((k = $.onVnodeUpdated) || P) &&
        me(() => {
          (k && Me(k, p, f, c), P && ot(f, c, p, "updated"));
        }, b);
    },
    st = (c, f, p, b, g, _, v) => {
      for (let x = 0; x < f.length; x++) {
        const y = c[x],
          m = f[x],
          P =
            y.el && (y.type === G || !At(y, m) || y.shapeFlag & 198)
              ? h(y.el)
              : p;
        j(y, m, P, null, b, g, _, v, !0);
      }
    },
    vt = (c, f, p, b, g) => {
      if (f !== p) {
        if (f !== q)
          for (const _ in f) !Et(_) && !(_ in p) && i(c, _, f[_], null, g, b);
        for (const _ in p) {
          if (Et(_)) continue;
          const v = p[_],
            x = f[_];
          v !== x && _ !== "value" && i(c, _, x, v, g, b);
        }
        "value" in p && i(c, "value", f.value, p.value, g);
      }
    },
    zt = (c, f, p, b, g, _, v, x, y) => {
      const m = (f.el = c ? c.el : l("")),
        P = (f.anchor = c ? c.anchor : l(""));
      let { patchFlag: S, dynamicChildren: $, slotScopeIds: k } = f;
      (k && (x = x ? x.concat(k) : k),
        c == null
          ? (s(m, p, b), s(P, p, b), Je(f.children || [], p, P, g, _, v, x, y))
          : S > 0 &&
              S & 64 &&
              $ &&
              c.dynamicChildren &&
              c.dynamicChildren.length === $.length
            ? (st(c.dynamicChildren, $, p, g, _, v, x),
              (f.key != null || (g && f === g.subTree)) && Jr(c, f, !0))
            : K(c, f, p, P, g, _, v, x, y));
    },
    Kt = (c, f, p, b, g, _, v, x, y) => {
      ((f.slotScopeIds = x),
        c == null
          ? f.shapeFlag & 512
            ? g.ctx.activate(f, p, b, v, y)
            : Sn(f, p, b, g, _, v, y)
          : hs(c, f, y));
    },
    Sn = (c, f, p, b, g, _, v) => {
      const x = (c.component = Zo(c, b, g));
      if ((os(c) && (x.ctx.renderer = St), Qo(x, !1, v), x.asyncDep)) {
        if ((g && g.registerDep(x, fe, v), !c.el)) {
          const y = (x.subTree = E(De));
          (Z(null, y, f, p), (c.placeholder = y.el));
        }
      } else fe(x, c, f, p, g, _, v);
    },
    hs = (c, f, p) => {
      const b = (f.component = c.component);
      if (Io(c, f, p))
        if (b.asyncDep && !b.asyncResolved) {
          ((f.el = c.el), Q(b, f, p));
          return;
        } else ((b.next = f), b.update());
      else ((f.el = c.el), (b.vnode = f));
    },
    fe = (c, f, p, b, g, _, v) => {
      const x = () => {
        if (c.isMounted) {
          let { next: S, bu: $, u: k, parent: F, vnode: z } = c;
          {
            const Oe = Yr(c);
            if (Oe) {
              (S && ((S.el = z.el), Q(c, S, v)),
                Oe.asyncDep.then(() => {
                  me(() => {
                    c.isUnmounted || m();
                  }, g);
                }));
              return;
            }
          }
          let B = S,
            ne;
          (lt(c, !1),
            S ? ((S.el = z.el), Q(c, S, v)) : (S = z),
            $ && An($),
            (ne = S.props && S.props.onVnodeBeforeUpdate) && Me(ne, F, S, z),
            lt(c, !0));
          const re = Is(c),
            Ee = c.subTree;
          ((c.subTree = re),
            j(Ee, re, h(Ee.el), qt(Ee), c, g, _),
            (S.el = re.el),
            B === null && jo(c, re.el),
            k && me(k, g),
            (ne = S.props && S.props.onVnodeUpdated) &&
              me(() => Me(ne, F, S, z), g));
        } else {
          let S;
          const { el: $, props: k } = f,
            { bm: F, m: z, parent: B, root: ne, type: re } = c,
            Ee = bt(f);
          (lt(c, !1),
            F && An(F),
            !Ee && (S = k && k.onVnodeBeforeMount) && Me(S, B, f),
            lt(c, !0));
          {
            ne.ce &&
              ne.ce._hasShadowRoot() &&
              ne.ce._injectChildStyle(re, c.parent ? c.parent.type : void 0);
            const Oe = (c.subTree = Is(c));
            (j(null, Oe, p, b, c, g, _), (f.el = Oe.el));
          }
          if ((z && me(z, g), !Ee && (S = k && k.onVnodeMounted))) {
            const Oe = f;
            me(() => Me(S, B, Oe), g);
          }
          ((f.shapeFlag & 256 ||
            (B && bt(B.vnode) && B.vnode.shapeFlag & 256)) &&
            c.a &&
            me(c.a, g),
            (c.isMounted = !0),
            (f = p = b = null));
        }
      };
      c.scope.on();
      const y = (c.effect = new cr(x));
      c.scope.off();
      const m = (c.update = y.run.bind(y)),
        P = (c.job = y.runIfDirty.bind(y));
      ((P.i = c), (P.id = c.uid), (y.scheduler = () => rs(P)), lt(c, !0), m());
    },
    Q = (c, f, p) => {
      f.component = c;
      const b = c.vnode.props;
      ((c.vnode = f),
        (c.next = null),
        Fo(c, f.props, b, p),
        No(c, f.children, p),
        Ke(),
        As(c),
        Ue());
    },
    K = (c, f, p, b, g, _, v, x, y = !1) => {
      const m = c && c.children,
        P = c ? c.shapeFlag : 0,
        S = f.children,
        { patchFlag: $, shapeFlag: k } = f;
      if ($ > 0) {
        if ($ & 128) {
          Ut(m, S, p, b, g, _, v, x, y);
          return;
        } else if ($ & 256) {
          rt(m, S, p, b, g, _, v, x, y);
          return;
        }
      }
      k & 8
        ? (P & 16 && wt(m, g, _), S !== m && u(p, S))
        : P & 16
          ? k & 16
            ? Ut(m, S, p, b, g, _, v, x, y)
            : wt(m, g, _, !0)
          : (P & 8 && u(p, ""), k & 16 && Je(S, p, b, g, _, v, x, y));
    },
    rt = (c, f, p, b, g, _, v, x, y) => {
      ((c = c || at), (f = f || at));
      const m = c.length,
        P = f.length,
        S = Math.min(m, P);
      let $;
      for ($ = 0; $ < S; $++) {
        const k = (f[$] = y ? Be(f[$]) : Re(f[$]));
        j(c[$], k, p, null, g, _, v, x, y);
      }
      m > P ? wt(c, g, _, !0, !1, S) : Je(f, p, b, g, _, v, x, y, S);
    },
    Ut = (c, f, p, b, g, _, v, x, y) => {
      let m = 0;
      const P = f.length;
      let S = c.length - 1,
        $ = P - 1;
      for (; m <= S && m <= $;) {
        const k = c[m],
          F = (f[m] = y ? Be(f[m]) : Re(f[m]));
        if (At(k, F)) j(k, F, p, null, g, _, v, x, y);
        else break;
        m++;
      }
      for (; m <= S && m <= $;) {
        const k = c[S],
          F = (f[$] = y ? Be(f[$]) : Re(f[$]));
        if (At(k, F)) j(k, F, p, null, g, _, v, x, y);
        else break;
        (S--, $--);
      }
      if (m > S) {
        if (m <= $) {
          const k = $ + 1,
            F = k < P ? f[k].el : b;
          for (; m <= $;)
            (j(null, (f[m] = y ? Be(f[m]) : Re(f[m])), p, F, g, _, v, x, y),
              m++);
        }
      } else if (m > $) for (; m <= S;) (ve(c[m], g, _, !0), m++);
      else {
        const k = m,
          F = m,
          z = new Map();
        for (m = F; m <= $; m++) {
          const be = (f[m] = y ? Be(f[m]) : Re(f[m]));
          be.key != null && z.set(be.key, m);
        }
        let B,
          ne = 0;
        const re = $ - F + 1;
        let Ee = !1,
          Oe = 0;
        const Ct = new Array(re);
        for (m = 0; m < re; m++) Ct[m] = 0;
        for (m = k; m <= S; m++) {
          const be = c[m];
          if (ne >= re) {
            ve(be, g, _, !0);
            continue;
          }
          let ke;
          if (be.key != null) ke = z.get(be.key);
          else
            for (B = F; B <= $; B++)
              if (Ct[B - F] === 0 && At(be, f[B])) {
                ke = B;
                break;
              }
          ke === void 0
            ? ve(be, g, _, !0)
            : ((Ct[ke - F] = m + 1),
              ke >= Oe ? (Oe = ke) : (Ee = !0),
              j(be, f[ke], p, null, g, _, v, x, y),
              ne++);
        }
        const _s = Ee ? zo(Ct) : at;
        for (B = _s.length - 1, m = re - 1; m >= 0; m--) {
          const be = F + m,
            ke = f[be],
            bs = f[be + 1],
            ys = be + 1 < P ? bs.el || Zr(bs) : b;
          Ct[m] === 0
            ? j(null, ke, p, ys, g, _, v, x, y)
            : Ee && (B < 0 || m !== _s[B] ? it(ke, p, ys, 2) : B--);
        }
      }
    },
    it = (c, f, p, b, g = null) => {
      const { el: _, type: v, transition: x, children: y, shapeFlag: m } = c;
      if (m & 6) {
        it(c.component.subTree, f, p, b);
        return;
      }
      if (m & 128) {
        c.suspense.move(f, p, b);
        return;
      }
      if (m & 64) {
        v.move(c, f, p, St);
        return;
      }
      if (v === G) {
        s(_, f, p);
        for (let S = 0; S < y.length; S++) it(y[S], f, p, b);
        s(c.anchor, f, p);
        return;
      }
      if (v === Qt) {
        N(c, f, p);
        return;
      }
      if (b !== 2 && m & 1 && x)
        if (b === 0)
          x.persisted && !_[Mn]
            ? s(_, f, p)
            : (x.beforeEnter(_), s(_, f, p), me(() => x.enter(_), g));
        else {
          const { leave: S, delayLeave: $, afterLeave: k } = x,
            F = () => {
              c.ctx.isUnmounted ? r(_) : s(_, f, p);
            },
            z = () => {
              const B = _._isLeaving || !!_[Mn];
              (_._isLeaving && _[Mn](!0),
                x.persisted && !B
                  ? F()
                  : S(_, () => {
                      (F(), k && k());
                    }));
            };
          $ ? $(_, F, z) : z();
        }
      else s(_, f, p);
    },
    ve = (c, f, p, b = !1, g = !1) => {
      const {
        type: _,
        props: v,
        ref: x,
        children: y,
        dynamicChildren: m,
        shapeFlag: P,
        patchFlag: S,
        dirs: $,
        cacheIndex: k,
        memo: F,
      } = c;
      if (
        ((S === -2 || (m && m.hasOnce)) && (g = !1),
        x != null && (Ke(), Mt(x, null, p, c, !0), Ue()),
        k != null && (!c.ctx || c.ctx === f) && (f.renderCache[k] = void 0),
        P & 256)
      ) {
        f.ctx.deactivate(c);
        return;
      }
      const z = P & 1 && $,
        B = !bt(c);
      let ne;
      if ((B && (ne = v && v.onVnodeBeforeUnmount) && Me(ne, f, c), P & 6))
        fi(c.component, p, b);
      else {
        if (P & 128) {
          c.suspense.unmount(p, b);
          return;
        }
        (z && ot(c, null, f, "beforeUnmount"),
          P & 64
            ? c.type.remove(c, f, p, St, b)
            : m && !m.hasOnce && (_ !== G || (S > 0 && S & 64))
              ? wt(m, f, p, !1, !0)
              : ((_ === G && S & 384) || (!g && P & 16)) && wt(y, f, p),
          b && gs(c));
      }
      const re = F != null && k == null;
      ((B && (ne = v && v.onVnodeUnmounted)) || z || re) &&
        me(() => {
          (ne && Me(ne, f, c),
            z && ot(c, null, f, "unmounted"),
            re && (c.el = null));
        }, p);
    },
    gs = (c) => {
      const { type: f, el: p, anchor: b, transition: g } = c;
      if (f === G) {
        ai(p, b);
        return;
      }
      if (f === Qt) {
        (O(c), g && !g.persisted && g.afterLeave && g.afterLeave());
        return;
      }
      const _ = () => {
        (r(p), g && !g.persisted && g.afterLeave && g.afterLeave());
      };
      if (c.shapeFlag & 1 && g && !g.persisted) {
        const { leave: v, delayLeave: x } = g,
          y = () => v(p, _);
        x ? x(c.el, _, y) : y();
      } else _();
    },
    ai = (c, f) => {
      let p;
      for (; c !== f;) ((p = C(c)), r(c), (c = p));
      r(f);
    },
    fi = (c, f, p) => {
      const { bum: b, scope: g, job: _, subTree: v, um: x, m: y, a: m } = c;
      (Fs(y),
        Fs(m),
        b && An(b),
        g.stop(),
        _
          ? ((_.flags |= 8), ve(v, c, f, p))
          : c.vnode.el &&
            v &&
            ((v.transition = c.vnode.transition), ve(v, c, f, p)),
        x && me(x, f),
        me(() => {
          c.isUnmounted = !0;
        }, f));
    },
    wt = (c, f, p, b = !1, g = !1, _ = 0) => {
      for (let v = _; v < c.length; v++) ve(c[v], f, p, b, g);
    },
    qt = (c) => {
      if (c.shapeFlag & 6) return qt(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const f = C(c.anchor || c.el),
        p = f && f[ro];
      return p ? C(p) : f;
    };
  let Cn = !1;
  const ms = (c, f, p) => {
      let b;
      (c == null
        ? f._vnode && (ve(f._vnode, null, null, !0), (b = f._vnode.component))
        : j(f._vnode || null, c, f, null, null, null, p),
        (f._vnode = c),
        Cn || ((Cn = !0), As(b), Ar(), (Cn = !1)));
    },
    St = {
      p: j,
      um: ve,
      m: it,
      r: gs,
      mt: Sn,
      mc: Je,
      pc: K,
      pbc: st,
      n: qt,
      o: e,
    };
  return { render: ms, hydrate: void 0, createApp: $o(ms) };
}
function jn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function lt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Wo(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Jr(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      (l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Be(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Jr(o, l)),
        l.type === wn &&
          (l.patchFlag === -1 && (l = r[i] = Be(l)), (l.el = o.el)),
        l.type === De && !l.el && (l.el = o.el));
    }
}
function zo(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        ((t[s] = r), n.push(s));
        continue;
      }
      for (i = 0, o = n.length - 1; i < o;)
        ((l = (i + o) >> 1), e[n[l]] < d ? (i = l + 1) : (o = l));
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0;) ((n[i] = o), (o = t[o]));
  return n;
}
function Yr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Yr(t);
}
function Fs(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Zr(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Zr(t.subTree) : null;
}
const Xr = (e) => e.__isSuspense;
function Ko(e, t) {
  t && t.pendingBranch
    ? I(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Qi(e);
}
const G = Symbol.for("v-fgt"),
  wn = Symbol.for("v-txt"),
  De = Symbol.for("v-cmt"),
  Qt = Symbol.for("v-stc"),
  ze = [];
let ye = null;
function T(e = !1) {
  ze.push((ye = e ? null : []));
}
function as() {
  (ze.pop(), (ye = ze[ze.length - 1] || null));
}
let Lt = 1;
function Ls(e, t = !1) {
  ((Lt += e), e < 0 && ye && t && (ye.hasOnce = !0));
}
function Qr(e) {
  return (
    (e.dynamicChildren = Lt > 0 ? ye || at : null),
    as(),
    Lt > 0 && ye && ye.push(e),
    e
  );
}
function M(e, t, n, s, r, i) {
  return Qr(w(e, t, n, s, r, i, !0));
}
function ge(e, t, n, s, r) {
  return Qr(E(e, t, n, s, r, !0));
}
function fs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ei = ({ key: e }) => e ?? null,
  en = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ee(e) || he(e) || R(e)
        ? { i: _e, r: e, k: t, f: !!n }
        : e
      : null
  );
function w(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === G ? 0 : 1,
  o = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ei(t),
    ref: t && en(t),
    scopeId: Pr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: _e,
  };
  return (
    l
      ? (cn(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= ee(n) ? 8 : 16),
    Lt > 0 &&
      !o &&
      ye &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      ye.push(a),
    a
  );
}
const E = Uo;
function Uo(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === yo) && (e = De), fs(e))) {
    const l = xt(e, t, !0);
    return (
      n && cn(l, n),
      Lt > 0 &&
        !i &&
        ye &&
        (l.shapeFlag & 6 ? (ye[ye.indexOf(e)] = l) : ye.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((sl(e) && (e = e.__vccOpts), t)) {
    t = qo(t);
    let { class: l, style: a } = t;
    (l && !ee(l) && (t.class = gn(l)),
      W(a) && (ss(a) && !I(a) && (a = le({}, a)), (t.style = hn(a))));
  }
  const o = ee(e) ? 1 : Xr(e) ? 128 : yn(e) ? 64 : W(e) ? 4 : R(e) ? 2 : 0;
  return w(e, t, n, s, r, o, i, !0);
}
function qo(e) {
  return e ? (ss(e) || Wr(e) ? le({}, e) : e) : null;
}
function xt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e,
    d = t ? Go(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && ei(d),
      ref:
        t && t.ref
          ? n && i
            ? I(i)
              ? i.concat(en(t))
              : [i, en(t)]
            : en(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== G ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && xt(e.ssContent),
      ssFallback: e.ssFallback && xt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
      cacheIndex: e.cacheIndex,
    };
  return (a && s && is(u, a.clone(u)), u);
}
function ae(e = " ", t = 0) {
  return E(wn, null, e, t);
}
function us(e, t) {
  const n = E(Qt, null, e);
  return ((n.staticCount = t), n);
}
function Ds(e = "", t = !1) {
  return t ? (T(), ge(De, null, e)) : E(De, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean"
    ? E(De)
    : I(e)
      ? E(G, null, e.slice())
      : fs(e)
        ? Be(e)
        : E(wn, null, String(e));
}
function Be(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : xt(e);
}
function cn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (I(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), cn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Wr(t)
        ? (t._ctx = _e)
        : r === 3 &&
          _e &&
          (_e.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else if (R(t)) {
    if (s & 65) {
      cn(e, { default: t });
      return;
    }
    ((t = { default: t, _ctx: _e }), (n = 32));
  } else ((t = String(t)), s & 64 ? ((n = 16), (t = [ae(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function Go(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = gn([t.class, s.class]));
      else if (r === "style") t.style = hn([t.style, s.style]);
      else if (fn(r)) {
        const i = t[r],
          o = s[r];
        o && i !== o && !(I(i) && i.includes(o))
          ? (t[r] = i ? [].concat(i, o) : o)
          : o == null && i == null && !un(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  Ae(e, t, 7, [n, s]);
}
const Jo = Dr();
let Yo = 0;
function Zo(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Jo,
    i = {
      uid: Yo++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ci(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Kr(s, r),
      emitsOptions: Hr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: q,
      inheritAttrs: s.inheritAttrs,
      ctx: q,
      data: q,
      props: q,
      attrs: q,
      slots: q,
      refs: q,
      setupState: q,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Eo.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let pe = null;
const Xo = () => pe || _e;
let an, Dt;
{
  const e = pn(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  ((an = t("__VUE_INSTANCE_SETTERS__", (n) => (pe = n))),
    (Dt = t("__VUE_SSR_SETTERS__", (n) => (Ht = n))));
}
const Vt = (e) => {
    const t = pe;
    return (
      an(e),
      e.scope.on(),
      () => {
        (e.scope.off(), an(t));
      }
    );
  },
  Hs = () => {
    (pe && pe.scope.off(), an(null));
  };
function ti(e) {
  return e.vnode.shapeFlag & 4;
}
let Ht = !1;
function Qo(e, t = !1, n = !1) {
  t && Dt(t);
  const { props: s, children: r } = e.vnode,
    i = ti(e);
  (Ro(e, s, i, t), Ho(e, r, n || t));
  const o = i ? el(e, t) : void 0;
  return (t && Dt(!1), o);
}
function el(e, t) {
  const n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, xo)));
  const { setup: s } = n;
  if (s) {
    Ke();
    const r = (e.setupContext = s.length > 1 ? nl(e) : null),
      i = Vt(e),
      o = Bt(s, e, 0, [e.props, r]),
      l = er(o);
    if ((Ue(), i(), (l || e.sp) && !bt(e) && Mr(e), l)) {
      if ((o.then(Hs, Hs), t))
        return o
          .then((a) => {
            Dt(!0);
            try {
              Ns(e, a, t);
            } finally {
              Dt(!1);
            }
          })
          .catch((a) => {
            bn(a, e, 0);
          });
      e.asyncDep = o;
    } else Ns(e, o);
  } else ni(e);
}
function Ns(e, t, n) {
  (R(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : W(t) && (e.setupState = Sr(t)),
    ni(e));
}
function ni(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Fe);
  {
    const r = Vt(e);
    Ke();
    try {
      vo(e);
    } finally {
      (Ue(), r());
    }
  }
}
const tl = {
  get(e, t) {
    return (ce(e, "get", ""), e[t]);
  },
};
function nl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, tl),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ds(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Sr(zi(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in It) return It[n](e);
          },
          has(t, n) {
            return n in t || n in It;
          },
        }))
    : e.proxy;
}
function sl(e) {
  return R(e) && "__vccOpts" in e;
}
const si = (e, t) => qi(e, t, Ht),
  rl = "3.5.43";
let qn;
const Bs = typeof window < "u" && window.trustedTypes;
if (Bs)
  try {
    qn = Bs.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const ri = qn ? (e) => qn.createHTML(e) : (e) => e,
  il = "http://www.w3.org/2000/svg",
  ol = "http://www.w3.org/1998/Math/MathML",
  Ne = typeof document < "u" ? document : null,
  Vs = Ne && Ne.createElement("template"),
  ll = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? Ne.createElementNS(il, e)
          : t === "mathml"
            ? Ne.createElementNS(ol, e)
            : n
              ? Ne.createElement(e, { is: n })
              : Ne.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => Ne.createTextNode(e),
    createComment: (e) => Ne.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ne.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));
        );
      else {
        Vs.innerHTML = ri(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = Vs.content;
        if (s === "svg" || s === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild;) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  cl = Symbol("_vtc");
function al(e, t, n) {
  const s = e[cl];
  (s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const Ws = Symbol("_vod"),
  fl = Symbol("_vsh"),
  ul = Symbol(""),
  dl = /(?:^|;)\s*display\s*:/;
function pl(e, t, n) {
  const s = e.style,
    r = ee(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ee(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Pt(s, l, "");
        }
      else for (const o in t) n[o] == null && Pt(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null
        ? gl(e, o, !ee(t) && t ? t[o] : void 0, l) || Pt(s, o, l)
        : Pt(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[ul];
      (o && (n += ";" + o), (s.cssText = n), (i = dl.test(n)));
    }
  } else t && e.removeAttribute("style");
  Ws in e && ((e[Ws] = i ? s.display : ""), e[fl] && (s.display = "none"));
}
const Zt = /\s*!important$/;
function Pt(e, t, n) {
  if (I(n)) n.forEach((s) => Pt(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--")))
    Zt.test(n)
      ? e.setProperty(t, n.replace(Zt, ""), "important")
      : e.setProperty(t, n);
  else {
    const s = hl(e, t);
    Zt.test(n)
      ? e.setProperty(ut(s), n.replace(Zt, ""), "important")
      : (e[s] = n);
  }
}
const zs = ["Webkit", "Moz", "ms"],
  Rn = {};
function hl(e, t) {
  const n = Rn[t];
  if (n) return n;
  let s = we(t);
  if (s !== "filter" && s in e) return (Rn[t] = s);
  s = sr(s);
  for (let r = 0; r < zs.length; r++) {
    const i = zs[r] + s;
    if (i in e) return (Rn[t] = i);
  }
  return t;
}
function gl(e, t, n, s) {
  return (
    e.tagName === "TEXTAREA" &&
    (t === "width" || t === "height") &&
    ee(s) &&
    n === s
  );
}
const Ks = "http://www.w3.org/1999/xlink";
function Us(e, t, n, s, r, i = vi(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Ks, t.slice(6, t.length))
      : e.setAttributeNS(Ks, t, n)
    : n == null || (i && !ir(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : Te(n) ? String(n) : n);
}
function qs(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ri(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    ((l !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n));
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = ir(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function ml(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function _l(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Gs = Symbol("_vei");
function bl(e, t, n, s, r = null) {
  const i = e[Gs] || (e[Gs] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, a] = vl(t);
    if (s) {
      const d = (i[t] = Cl(s, r));
      ml(e, l, d, a);
    } else o && (_l(e, l, o, a), (i[t] = void 0));
  }
}
const yl = /(Once|Passive|Capture)$/,
  xl = /^on:?(?:Once|Passive|Capture)$/;
function vl(e) {
  let t, n;
  for (; (n = e.match(yl)) && !xl.test(e);)
    (t || (t = {}),
      (e = e.slice(0, e.length - n[1].length)),
      (t[n[1].toLowerCase()] = !0));
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let Fn = 0;
const wl = Promise.resolve(),
  Sl = () => Fn || (wl.then(() => (Fn = 0)), (Fn = Date.now()));
function Cl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    const r = n.value;
    if (I(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        (i.call(s), (s._stopped = !0));
      };
      const o = r.slice(),
        l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const d = o[a];
        d && Ae(d, t, 5, l);
      }
    } else Ae(r, t, 5, [s]);
  };
  return ((n.value = e), (n.attached = Sl()), n);
}
const Js = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Tl = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class"
      ? al(e, s, o)
      : t === "style"
        ? pl(e, n, s)
        : fn(t)
          ? un(t) || bl(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Al(e, t, s, o)
              )
            ? (qs(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Us(e, t, s, o, i, t !== "value"))
            : e._isVueCE &&
                ($l(e, t) ||
                  (e._def.__asyncLoader && (/[A-Z]/.test(t) || !ee(s))))
              ? qs(e, we(t), s, i, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Us(e, t, s, o));
  };
function Al(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Js(t) && R(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Js(t) && ee(n) ? !1 : t in e;
}
function $l(e, t) {
  const n = e._def.props;
  if (!n) return !1;
  const s = we(t);
  return Array.isArray(n)
    ? n.some((r) => we(r) === s)
    : Object.keys(n).some((r) => we(r) === s);
}
const Pl = le({ patchProp: Tl }, ll);
let Ys;
function El() {
  return Ys || (Ys = Bo(Pl));
}
const Ol = (...e) => {
  const t = El().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Ml(s);
      if (!r) return;
      const i = t._component;
      (!R(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ""));
      const o = n(r, !1, kl(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function kl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ml(e) {
  return ee(e) ? document.querySelector(e) : e;
}
const mt = {
    id: 1,
    firstname: "Abderrahim",
    lastname: "El Ouariachi",
    slogan: "Enjoying Cybersecurity and Development Alike",
    expertise: "Penetration Tester & Full-Stack Laravel Developer",
    whyboth:
      "Most developers write code they can't secure. Most pentesters break systems they don't know how to build. I do both.",
    biography: `<p>I'm a security person who thrives on adventure, challenge, and thinking in systems. From a young age, I became fascinated by cybersecurity and the control it gives.</p>
<p>That same system-thinking is what drew me to programming — I love building real things. At the same time that my offensive side keeps me sharp: it pushes me to secure everything I build, and to break down other people's systems just as easily.</p>
<p>I live in Morocco, and I welcome any opportunity that values development and security alike.</p>`,
  },
  nt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  Il = {},
  jl = { class: "relative flex flex-col space-y-5 md:space-y-10 md:w-2/3" };
function Rl(e, t) {
  return (T(), M("div", jl, [et(e.$slots, "default")]));
}
const dt = nt(Il, [["render", Rl]]),
  Fl = {},
  Ll = {
    target: "_blank",
    class:
      "flex items-center hover:cursor-pointer gap-x-2 px-4 py-3 rounded-lg bg-green-200 hover:shadow-xl",
  };
function Dl(e, t) {
  return (T(), M("a", Ll, [et(e.$slots, "icon"), et(e.$slots, "default")]));
}
const ii = nt(Fl, [["render", Dl]]),
  Hl = {},
  Nl = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
  };
function Bl(e, t) {
  return (
    T(),
    M("svg", Nl, [
      ...(t[0] ||
        (t[0] = [
          us(
            '<g stroke-width="1" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="200" stroke-dashoffset="200" d="M10 9h4m-4 7h12m-12 4h12m-12 4h4m-6 5h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2"><animate attributeName="stroke-dashoffset" from="200" to="0" dur="0.8s" fill="freeze"></animate></path><circle cx="22" cy="9" r="0.5" fill="currentColor" opacity="0"><animate attributeName="opacity" begin="0.8s" dur="0.6s" from="0" to="1" fill="freeze"></animate><animate attributeName="r" begin="0.8s" dur="0.4s" values="0.2;1.1;0.5" fill="freeze"></animate></circle></g>',
            1,
          ),
        ])),
    ])
  );
}
const Vl = nt(Hl, [["render", Bl]]),
  Wl = {},
  zl = {
    target: "_blank",
    class:
      "flex border-box hover:border-green-400 hover:cursor-pointer items-center gap-x-2 px-4 py-3 rounded-lg border text-secondary-text border-green-200",
  };
function Kl(e, t) {
  return (T(), M("a", zl, [et(e.$slots, "icon"), et(e.$slots, "default")]));
}
const oi = nt(Wl, [["render", Kl]]),
  Ul = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  ql = X({
    __name: "GitHub",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", Ul, [
          ...(n[0] ||
            (n[0] = [
              us(
                '<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0"></animate></path></g>',
                1,
              ),
            ])),
        ])
      );
    },
  }),
  Gl = { class: "text-center font-quantico text-xl font-bold md:text-8xl" },
  Jl = { class: "green-gradient" },
  Yl = { class: "text-center text-lg md:text-left md:text-2xl" },
  Zl = { class: "mt-20 flex flex-col items-center" },
  Xl = { class: "text-md mb-10 font-bold" },
  Ql = { class: "flex flex-col gap-5 md:-mb-5 md:flex-row md:gap-8" },
  ec = X({
    __name: "Introduction",
    setup(e) {
      return (t, n) => (
        T(),
        ge(
          dt,
          {
            class:
              "mt-20 flex items-center text-text md:mt-0 md:h-screen md:w-screen md:justify-center",
          },
          {
            default: J(() => [
              w("p", Gl, [
                ae(Y(oe(mt).firstname) + " ", 1),
                w("span", Jl, Y(oe(mt).lastname), 1),
              ]),
              w("p", Yl, Y(oe(mt).expertise), 1),
              w("div", Zl, [
                w("p", Xl, Y(oe(mt).slogan), 1),
                w("div", Ql, [
                  E(
                    ii,
                    {
                      title: "Resume",
                      href: "/CV - Abderrahim El Ouariachi.pdf",
                      class: "text-black",
                    },
                    {
                      icon: J(() => [
                        E(Vl, {
                          class: "size-5 fill-transparent stroke-black",
                        }),
                      ]),
                      default: J(() => [n[0] || (n[0] = ae(" Resume ", -1))]),
                      _: 1,
                    },
                  ),
                  E(
                    oi,
                    {
                      title: "Github Account",
                      href: "https://github.com/ItsAbderrahimEl",
                    },
                    {
                      icon: J(() => [
                        E(ql, {
                          class: "size-5 fill-transparent stroke-white",
                        }),
                      ]),
                      default: J(() => [n[1] || (n[1] = ae(" GitHub ", -1))]),
                      _: 1,
                    },
                  ),
                ]),
              ]),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  tc = {
    class:
      "mt-5 rounded-lg border border-l-4 border-green-200 bg-secondary/10 p-5",
  },
  nc = { class: "text mb-5 text-lg font-bold text-white" },
  sc = ["innerHTML"],
  ps = X({
    __name: "Note",
    props: { title: {}, content: {} },
    setup(e) {
      return (t, n) => (
        T(),
        M("div", tc, [
          w("h5", nc, Y(e.title), 1),
          w("p", { innerHTML: e.content }, null, 8, sc),
        ])
      );
    },
  }),
  rc = ["id"],
  ic = { class: "green-gradient" },
  pt = X({
    __name: "Title",
    props: { id: { default: "#" }, normal: {}, colored: {} },
    setup(e) {
      return (t, n) => (
        T(),
        M(
          "h1",
          {
            id: e.id,
            class: "block text-3xl md:text-5xl font-bold font-quantico",
          },
          [ae(Y(e.normal) + " ", 1), w("span", ic, Y(e.colored), 1)],
          8,
          rc,
        )
      );
    },
  }),
  oc = {},
  lc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  };
function cc(e, t) {
  return (
    T(),
    M("svg", lc, [
      ...(t[0] ||
        (t[0] = [
          w(
            "path",
            {
              d: "M8.7 15.9L4.8 12l3.9-3.9a.984.984 0 0 0 0-1.4a.984.984 0 0 0-1.4 0l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 0 0 0-1.4m6.6 0l3.9-3.9l-3.9-3.9a.984.984 0 0 1 0-1.4a.984.984 0 0 1 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 0 1-1.4 0a.984.984 0 0 1 0-1.4",
            },
            null,
            -1,
          ),
        ])),
    ])
  );
}
const ac = nt(oc, [["render", cc]]),
  fc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  uc = X({
    __name: "Shield",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", fc, [
          ...(n[0] ||
            (n[0] = [
              w(
                "path",
                {
                  d: "M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25z",
                },
                null,
                -1,
              ),
            ])),
        ])
      );
    },
  }),
  dc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  pc = X({
    __name: "Terminal",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", dc, [
          ...(n[0] ||
            (n[0] = [
              w(
                "path",
                {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "m5 7l5 5l-5 5m7 2h7",
                },
                null,
                -1,
              ),
            ])),
        ])
      );
    },
  }),
  hc = {},
  gc = {
    class:
      "flex flex-col space-y-2 bg-secondary/10 rounded-xl p-5 border-gray-150 border-1 border-gray-800 hover:border-green-300",
  },
  mc = { class: "p-1 bg-green-200/10 rounded-md w-fit h-fit" },
  _c = { class: "text-lg font-bold" },
  bc = { class: "text-sm" };
function yc(e, t) {
  return (
    T(),
    M("div", gc, [
      w("div", mc, [et(e.$slots, "icon")]),
      w("div", _c, [et(e.$slots, "title")]),
      w("div", bc, [et(e.$slots, "description")]),
    ])
  );
}
const Ln = nt(hc, [["render", yc]]),
  xc = ["innerHTML"],
  vc = { class: "grid mt-5 grid-cols-1 md:grid-cols-3 gap-5" },
  wc = X({
    __name: "About",
    setup(e) {
      return (t, n) => (
        T(),
        ge(dt, null, {
          default: J(() => [
            E(pt, { id: "About", normal: "Who", colored: "I Am" }),
            w(
              "p",
              {
                class: "space-y-5 md:space-y-1 md:text-lg",
                innerHTML: oe(mt).biography,
              },
              null,
              8,
              xc,
            ),
            w("div", vc, [
              E(Ln, null, {
                icon: J(() => [E(ac, { class: "size-10 fill-green-300" })]),
                title: J(() => [
                  ...(n[0] || (n[0] = [ae(" Web Development ", -1)])),
                ]),
                description: J(() => [
                  ...(n[1] ||
                    (n[1] = [
                      ae(
                        " Building robust full-stack apps with Laravel, Vue.js, and modern tooling. ",
                        -1,
                      ),
                    ])),
                ]),
                _: 1,
              }),
              E(Ln, null, {
                icon: J(() => [E(uc, { class: "size-10 fill-green-300" })]),
                title: J(() => [
                  ...(n[2] || (n[2] = [ae(" Penetration Testing ", -1)])),
                ]),
                description: J(() => [
                  ...(n[3] ||
                    (n[3] = [
                      ae(
                        " Identifying vulnerabilities and securing systems through ethical hacking. ",
                        -1,
                      ),
                    ])),
                ]),
                _: 1,
              }),
              E(Ln, null, {
                icon: J(() => [
                  E(pc, { class: "size-10 fill-green-300 stroke-green-300" }),
                ]),
                title: J(() => [
                  ...(n[4] || (n[4] = [ae(" Clean Code ", -1)])),
                ]),
                description: J(() => [
                  ...(n[5] ||
                    (n[5] = [
                      ae(
                        " Writing maintainable, well-tested, and reusable code. ",
                        -1,
                      ),
                    ])),
                ]),
                _: 1,
              }),
            ]),
            E(ps, { title: "Why Both?", content: oe(mt).whyboth }, null, 8, [
              "content",
            ]),
          ]),
          _: 1,
        })
      );
    },
  });
let Sc = [
    {
      id: 1,
      name: "Web Development",
      skills: [
        {
          id: 1,
          name: "Backend Development (Laravel, PHP)",
          url: "https://medium.com/@samanthahayesusa/why-laravel-is-a-great-choice-for-backend-development-058b285df3ba",
        },
        {
          id: 2,
          name: "Frontend Development (Vue.js, Inertia.js)",
          url: "https://itechtuts.com/mastering-laravel-with-vuejs-and-inertia-building-full-stack-modern-apps",
        },
        {
          id: 4,
          name: "Database Design & Optimization",
          url: "https://medium.com/@bahar.mahmudlu9/database-optimization-a-comprehensive-guide-for-data-engineers-b8d6c2ea96ce",
        },
        {
          id: 5,
          name: "Docker & Containerization",
          url: "https://www.geeksforgeeks.org/blogs/containerization-using-docker/",
        },
        {
          id: 6,
          name: "Version Control (Git)",
          url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
        },
        {
          id: 7,
          name: "UI/UX (Figma)",
          url: "https://www.geeksforgeeks.org/websites-apps/figma-tutorial/",
        },
      ],
    },
    {
      id: 2,
      name: "Penetration Testing",
      skills: [
        {
          id: 1,
          name: "Web Application Security",
          url: "https://www.geeksforgeeks.org/ethical-hacking/web-security-considerations/",
        },
        {
          id: 3,
          name: "Reconnaissance & Intelligence Gathering",
          url: "https://www.numberanalytics.com/blog/intelligence-gathering-modern-era",
        },
        {
          id: 4,
          name: "Vulnerability Assessment",
          url: "https://www.techtarget.com/searchsecurity/definition/vulnerability-assessment-vulnerability-analysis",
        },
        {
          id: 6,
          name: "Network Security Assessment",
          url: "https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/",
        },
        {
          id: 7,
          name: "Operating Systems (Windows, Linux)",
          url: "https://premioinc.com/blogs/blog/what-is-an-operating-system-os",
        },
        {
          id: 8,
          name: "Reporting and Communication",
          url: "https://web443.com/how-to-become-a-penetration-tester-a-step-by-step-guide-for-2025/communication-and-reporting-skills",
        },
      ],
    },
  ],
  Cc = [
    { id: 1, name: "English", proficiency: "Professional" },
    { id: 2, name: "Spanish", proficiency: "Professional" },
    { id: 3, name: "French", proficiency: "Professional" },
    { id: 4, name: "Arabic", proficiency: "Native" },
    { id: 5, name: "Amazigh", proficiency: "Native" },
  ];
const Tc = {
    class: "grid grid-cols-1 md:grid-cols-2 gap-20 md:text-lg w-full",
  },
  Ac = { class: "text-xl flex text-white font-bold mb-5 items-center gap-x-2" },
  $c = { class: "flex flex-wrap gap-3 text-sm ml-5" },
  Pc = ["href"],
  Ec = { class: "text-sm text-center text-black" },
  Oc = {
    class: "border border-gray-800 bg-secondary/10 p-5 rounded-lg w-full mt-10",
  },
  kc = {
    class: "flex flex-col md:flex-row gap-y-5 items-center justify-evenly",
  },
  Mc = { class: "flex flex-col items-center" },
  Ic = { class: "text-white" },
  jc = { class: "text-sm text-gray-500" },
  Rc = X({
    __name: "Expertise",
    setup(e) {
      return (t, n) => (
        T(),
        ge(dt, null, {
          default: J(() => [
            E(pt, { id: "Expertise", normal: "What I", colored: "Know" }),
            w("div", Tc, [
              (T(!0),
              M(
                G,
                null,
                xe(
                  oe(Sc),
                  (s) => (
                    T(),
                    M(
                      "div",
                      {
                        key: s.id,
                        class:
                          "col-span-1 border border-gray-800 bg-secondary/10 p-5 rounded-lg",
                      },
                      [
                        w("h2", Ac, [
                          n[0] ||
                            (n[0] = w(
                              "span",
                              {
                                class:
                                  "size-2 animate-pulse bg-green-200 rounded-full",
                              },
                              null,
                              -1,
                            )),
                          ae(" " + Y(s.name), 1),
                        ]),
                        w("div", $c, [
                          (T(!0),
                          M(
                            G,
                            null,
                            xe(
                              s.skills,
                              (r) => (
                                T(),
                                M(
                                  "a",
                                  {
                                    key: r.id,
                                    class:
                                      "bg-green-200 px-6 py-2 border border-transparent hover:border hover:-translate-y-1 flex items-center justify-center rounded-lg transition-transform duration-300",
                                    href: r.url,
                                    target: "_blank",
                                  },
                                  [w("span", Ec, Y(r.name), 1)],
                                  8,
                                  Pc,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                      ],
                    )
                  ),
                ),
                128,
              )),
            ]),
            w("div", Oc, [
              n[1] ||
                (n[1] = w(
                  "h5",
                  { class: "text-white text-xl font-bold mb-5" },
                  " Languages ",
                  -1,
                )),
              w("div", kc, [
                (T(!0),
                M(
                  G,
                  null,
                  xe(
                    oe(Cc),
                    (s) => (
                      T(),
                      M("div", Mc, [
                        w("span", Ic, Y(s.name), 1),
                        w("span", jc, Y(s.proficiency), 1),
                      ])
                    ),
                  ),
                  256,
                )),
              ]),
            ]),
          ]),
          _: 1,
        })
      );
    },
  }),
  Fc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  Lc = X({
    __name: "Email",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", Fc, [
          ...(n[0] ||
            (n[0] = [
              us(
                '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="66" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"></animate></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" to="0"></animate></path></g>',
                1,
              ),
            ])),
        ])
      );
    },
  }),
  Dc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  Hc = X({
    __name: "Phone",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", Dc, [
          ...(n[0] ||
            (n[0] = [
              w(
                "path",
                {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-dasharray": "62",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z",
                },
                [
                  w("animate", {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    dur: "0.6s",
                    values: "62;0",
                  }),
                ],
                -1,
              ),
            ])),
        ])
      );
    },
  }),
  Nc = { class: "space-y-5 md:flex md:flex-col md:items-center md:mb-10" },
  Bc = { class: "flex flex-col md:flex-row gap-5 items-center justify-center" },
  Vc = X({
    __name: "Contact",
    setup(e) {
      return (t, n) => (
        T(),
        ge(dt, null, {
          default: J(() => [
            E(pt, { id: "Contact", normal: "Get In", colored: "Touch" }),
            w("div", Nc, [
              n[2] ||
                (n[2] = w(
                  "p",
                  { class: "text-center md:text-lg md:max-w-2/3" },
                  " Whether you're hiring, building something interesting, or just want to talk security and code — Reach out.",
                  -1,
                )),
              w("div", Bc, [
                E(
                  ii,
                  {
                    href: "mailto:abderahimouriachi@gmail.com",
                    title: "Email",
                    class: "text-black",
                  },
                  {
                    icon: J(() => [E(Lc, { class: "size-5" })]),
                    default: J(() => [n[0] || (n[0] = ae(" Say Hello! ", -1))]),
                    _: 1,
                  },
                ),
                E(
                  oi,
                  {
                    href: "tel:+212623960018",
                    title: "Phone Number",
                    class: "text-white",
                  },
                  {
                    icon: J(() => [E(Hc, { class: "size-5" })]),
                    default: J(() => [
                      n[1] || (n[1] = ae(" Give me a call ", -1)),
                    ]),
                    _: 1,
                  },
                ),
              ]),
            ]),
          ]),
          _: 1,
        })
      );
    },
  }),
  Wc = "/assets/pattern1-D_tfJB0n.jpg",
  zc = "/assets/pattern2-BbT-sq1u.gif",
  Kc = "/assets/pattern3-CMb-Rta2.png",
  Uc = "/assets/pattern4-ChNpF9dB.png",
  qc = "/assets/pattern5-Cb0nh9E9.png",
  Gc = "/assets/pattern6-4it-giaA.png",
  Jc = "/assets/pattern7-BkU5glDf.png";
let Zs = [
  {
    id: 7,
    name: "Obsidian Pentest Vault",
    pattern: Jc,
    description:
      "Designed a reusable Obsidian vault template that centralizes penetration testing documentation, asset relationships, task tracking, and reporting.",
    url: "https://itsabderrahimel.github.io/obsidian-pentest-vault/",
  },
  {
    id: 6,
    name: "Cybersecurity WriteUps",
    pattern: Gc,
    description:
      "A curated collection of in-depth writeup's for some of the most challenging machines on HackTheBox, covering exploitation techniques, privilege escalation, and CTF methodologies.",
    url: "https://itsabderrahimel.github.io/Cybersecurity-Writeups/",
  },
  {
    id: 5,
    name: "PenGate",
    pattern: Wc,
    description: `
            A collaborative forum for penetration testers to share knowledge and techniques, built with Laravel, Vue.js, and Inertia.js in a Dockerized environment using Laravel Sail.
        `,
    url: "https://itsabderrahimel.github.io/PenGate/",
  },
  {
    id: 4,
    name: "Guess Royal Game CTF",
    pattern: zc,
    description: `
            A Laravel-based guessing game designed as a hard CTF challenge demonstrating second-order SQL injection risks, emphasizing secure query handling and safe data persistence.
        `,
    url: "https://itsabderrahimel.github.io/Web-Security-Challenges/",
  },
  {
    id: 3,
    name: "Cinematic Odyssey",
    pattern: Kc,
    description: `
            A web app that lets users browse and manage favorite movies, TV shows, and actors using TMDB data, built with Laravel, Livewire, and Tailwind CSS for a responsive, interactive experience.
        `,
    url: "https://github.com/ItsAbderrahimEl/Cinematic_Odyssey",
  },
  {
    id: 2,
    name: "BirdBoard",
    pattern: Uc,
    description: `
            A project and task collaboration platform built with Laravel, Blade, Tailwind CSS, and Alpine.js, enabling teams to manage projects, track tasks, and collaborate with a real-time activity feed.
        `,
    url: "https://itsabderrahimel.github.io/BirdBoard/",
  },
  {
    id: 1,
    name: "Code Katas",
    pattern: qc,
    description: `
            A collection of PHP exercises using PHPUnit to practice Test-Driven Development, improve problem-solving, and build strong habits in clean, testable code.
        `,
    url: "https://itsabderrahimel.github.io/CodeKatas/",
  },
];
function li(e, t) {
  return (e || (e = {}), (e._resolver = t), e);
}
function Yc(e) {
  return li(e, "person");
}
function Zc(e) {
  return li(e, "softwareApp");
}
const Xc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  Qc = X({
    __name: "ExternalLink",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", Xc, [
          ...(n[0] ||
            (n[0] = [
              w(
                "path",
                {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10 5H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0l-7 7",
                },
                null,
                -1,
              ),
            ])),
        ])
      );
    },
  }),
  ea = {
    class:
      "border border-gray-800 bg-secondary/10 hover:border-green-200 rounded-lg p-5 flex flex-col gap-y-5 group",
  },
  ta = ["src", "alt"],
  na = { class: "flex flex-col bg-black/10" },
  sa = ["href"],
  ra = { class: "text-white text-xl font-bold" },
  ia = { class: "text-sm" },
  oa = X({
    __name: "SingleProject",
    props: { project: {} },
    setup(e) {
      return (t, n) => (
        T(),
        M("div", ea, [
          w(
            "img",
            {
              src: e.project.pattern,
              alt: e.project.name,
              class:
                "w-full h-60 md:max-w-90 rounded-xl object-cover group-hover:scale-105 transition-transform duration-500",
            },
            null,
            8,
            ta,
          ),
          w("div", na, [
            w(
              "a",
              {
                href: e.project.url,
                target: "_blank",
                class: "flex justify-between items-center mb-1",
              },
              [
                w("h5", ra, Y(e.project.name), 1),
                E(Qc, { class: "stroke-green-200 size-5" }),
              ],
              8,
              sa,
            ),
            w("p", ia, Y(e.project.description), 1),
          ]),
        ])
      );
    },
  }),
  la = {
    class:
      "grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:p-5 md:mt-5",
  },
  ca = X({
    __name: "Projects",
    setup(e) {
      return (
        Zs.forEach((t) => {
          Zc({
            url: t.url,
            name: t.name,
            operatingSystem: "Linux",
            images: [t.pattern],
            description: t.description,
          });
        }),
        (t, n) => (
          T(),
          ge(dt, null, {
            default: J(() => [
              E(pt, { id: "Projects", normal: "My", colored: "Craft" }),
              w("div", la, [
                (T(!0),
                M(
                  G,
                  null,
                  xe(
                    oe(Zs),
                    (s) => (
                      T(),
                      ge(oa, { key: s.id, project: s }, null, 8, ["project"])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            _: 1,
          })
        )
      );
    },
  });
let aa = [
  {
    id: 1,
    institution: "HackTheBox Academy",
    studied: "Professional Education in Cybersecurity and Penetration Testing",
    duration: "2022 – Present",
    site: "https://github.com/ItsAbderrahimEl/HackTheBox-Student-Transcript/",
    description: [
      "Completed hands-on training in penetration testing methodologies and attack frameworks.",
      "Practiced exploiting real-world vulnerabilities across web applications, networks, and systems.",
      "Strengthened skills in reconnaissance, enumeration, privilege escalation, and post-exploitation.",
    ],
  },
  {
    id: 2,
    institution: "Laracasts",
    studied: "Advanced Training in Web Development",
    duration: "2022 – Present",
    site: "https://laracasts.com/",
    description: [
      "Advanced Laravel development with a focus on clean architecture and maintainable code.",
      "Built modern full-stack applications using Laravel, Inertia.js, and Vue.js.",
      "Implemented automated testing using Pest, along with best practices for reliable and scalable applications.",
    ],
  },
  {
    id: 3,
    institution: "Higher School of Technology, Oujda",
    studied: "Technical Diploma in Computer Science",
    duration: "2021 – 2024",
    site: "http://esto.ump.ma/",
    description: [
      "Built a solid foundation in core computer science concepts and problem-solving.",
      "Developed practical experience with PHP, JavaScript, Java, and C.",
      "Gained knowledge of computer networking and Linux-based operating systems.",
    ],
  },
];
const fa = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  ua = X({
    __name: "School",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", fa, [
          ...(n[0] ||
            (n[0] = [
              w(
                "path",
                {
                  d: "M21 16v-5.9l-8.05 4.375q-.45.25-.95.25t-.95-.25l-8.45-4.6q-.275-.15-.388-.375T2.1 9t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 3.275t.488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17t-.712-.288T21 16m-9.95 4.475l-5-2.7q-.5-.275-.775-.75T5 16v-3.8l6.05 3.275q.45.25.95.25t.95-.25L19 12.2V16q0 .55-.275 1.025t-.775.75l-5 2.7q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188",
                },
                null,
                -1,
              ),
            ])),
        ])
      );
    },
  }),
  da = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  ci = X({
    __name: "Triangle",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", da, [
          ...(n[0] ||
            (n[0] = [
              w(
                "g",
                { "fill-rule": "evenodd" },
                [
                  w("path", {
                    fill: "currentColor",
                    d: "M10.7 3.148a1.5 1.5 0 0 1 2.599 0l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954Zm1.3 1.75L4.232 18.352h15.536z",
                  }),
                ],
                -1,
              ),
            ])),
        ])
      );
    },
  }),
  pa = {
    class:
      "border-1 flex gap-x-10 border-gray-800 bg-secondary/10 hover:border-green-200 rounded-lg p-5",
  },
  ha = { class: "hidden md:block bg-green-100/10 rounded-md p-2 w-fit h-fit" },
  ga = { class: "space-y-5 w-full" },
  ma = { class: "flex justify-between items-baseline gap-x-1 w-full" },
  _a = { class: "text-white text-xl font-bold" },
  ba = ["href"],
  ya = { class: "text-green-200 text-sm" },
  xa = { class: "space-y-2" },
  va = { class: "flex gap-x-1" },
  wa = { class: "text-sm w-full" },
  Sa = X({
    __name: "SingleEducation",
    props: { education: {} },
    setup(e) {
      return (t, n) => (
        T(),
        M("div", pa, [
          w("div", ha, [E(ua, { class: "fill-green-200 size-8" })]),
          w("div", ga, [
            w("div", ma, [
              w("div", null, [
                w("h5", _a, Y(e.education.studied), 1),
                w(
                  "a",
                  {
                    href: e.education.site,
                    target: "_blank",
                    class: "text-sm text-green-200",
                  },
                  Y(e.education.institution),
                  9,
                  ba,
                ),
              ]),
              w("span", ya, Y(e.education.duration), 1),
            ]),
            w("ul", xa, [
              (T(!0),
              M(
                G,
                null,
                xe(
                  e.education.description,
                  (s) => (
                    T(),
                    M("li", va, [
                      E(ci, {
                        class: "stroke-green-200 size-3 rotate-90 mt-1",
                      }),
                      w("span", wa, Y(s), 1),
                    ])
                  ),
                ),
                256,
              )),
            ]),
          ]),
        ])
      );
    },
  }),
  Ca = { class: "w-full space-y-10 md:space-y-15 md:text-lg md:p-5" },
  Ta = X({
    __name: "Education",
    setup(e) {
      return (t, n) => (
        T(),
        ge(dt, null, {
          default: J(() => [
            E(pt, {
              id: "Education",
              normal: "Where I've",
              colored: "Learned",
            }),
            w("div", Ca, [
              (T(!0),
              M(
                G,
                null,
                xe(
                  oe(aa),
                  (s) => (
                    T(),
                    ge(Sa, { key: s.id, education: s }, null, 8, ["education"])
                  ),
                ),
                128,
              )),
            ]),
            E(ps, {
              title: "Avid & Lifelong Reader",
              content:
                "A lifelong reader across penetration testing, web development, design, martial arts, and Islamic religion — because building strong systems and building strong character draw from the same discipline.",
            }),
          ]),
          _: 1,
        })
      );
    },
  }),
  Aa = [
    {
      id: 7,
      company_name: "Marsa Maroc",
      company_url: "https://www.marsamaroc.co.ma/",
      roles: [
        {
          name: "Network Security Specialist",
          duration: "Sep 2026 - Oct 2026",
          type: "Internship",
          description: [
            'Designed and simulated a <span class="font-bold">site-to-site IPSec VPN</span> between two company branches in GNS3, validating secure connectivity before deployment.',
            'Deployed an SSL VPN on a <span class="font-bold">FortiGate 40F</span> in a live network, enabling secure remote administration and cutting access time by <span class="font-bold">80%</span>.',
            "Configured firewall policies on enterprise hardware to control and secure network traffic.",
          ],
        },
        {
          name: "Penetration Testing",
          duration: "Aug 2026 - Sep 2026",
          type: "Internship",
          description: [
            "Conducted an internal network penetration test on a Marsa Maroc station, identifying critical vulnerabilities in network equipment and infrastructure.",
            'Reduced internal network attack surface by <span class="font-bold">40%</span> through targeted vulnerability identification and remediation guidance.',
            "Authored a detailed security report documenting critical findings, risk severity, and short-term and long-term remediation procedures for the company.",
          ],
        },
      ],
    },
    {
      id: 6,
      company_name: "Confidential",
      roles: [
        {
          name: "External Attack Surface Assessment",
          duration: "Apr 2026 - May 2026",
          type: "Independent Security Assessment",
          description: [
            `Conducted an independent assessment of a hosting provider's external attack surface spanning <span class="font-bold">13,312 IP addresses</span>, identifying <span class="font-bold">205 responsive hosts</span> and security findings affecting <span class="font-bold">37 internet-facing assets</span>.`,
            'Discovered <span class="font-bold">30 vulnerabilities</span>, including <span class="font-bold">12 Critical</span> and <span class="font-bold">11 High</span> severity findings, impacting VPN management interfaces, network infrastructure, web applications, default credentials, and outdated software.',
            "Performed asset discovery, attack surface mapping, vulnerability validation, and risk assessment using a methodology aligned with real-world penetration testing engagements.",
            "Submitted a detailed responsible disclosure report following multiple documented outreach attempts over a two-month period.",
            'A redacted version of the report is available for review — <a target="_blank" class="underline font-bold text-green-200" href="/Redacted Independent Security Assessment.pdf">here</a>.',
          ],
        },
      ],
      company_url: "#",
      has_overview: !0,
      overview:
        'This engagement gave me hands-on experience with real production infrastructure — a hosting provider, where the blast radius of any vulnerability extends far beyond the company to every client and web application they serve. It also led me to build something lasting: a custom Obsidian script that spins up a structured penetration testing vault, automatically linking all assets discovered during an engagement — a tool I now use as a core part of my methodology — that you can found <a target="_blank" class="underline font-bold text-green-200" href="https://github.com/ItsAbderrahimEl/obsidian-pentest-vault">here</a>.',
    },
    {
      id: 5,
      company_name: "WebCom",
      company_url: "https://webcom.ma/",
      roles: [
        {
          name: "DevSecOps",
          duration: "Mar 2026 - Apr 2026",
          type: "Freelance",
          description: [
            "Architected and automated full infrastructure provisioning for a production web application using Ansible, enabling repeatable, zero-drift deployments at scale.",
            "Hardened server security end-to-end: configured stateful firewalls, deployed Fail2Ban for brute-force mitigation, and enforced least-privilege user access policies via Ansible playbooks.",
            '<span class="font-bold">Sole DevSecOps owner of a staging application</span> — independently driving infrastructure, security posture, and continuous deployment pipelines from design to delivery.',
          ],
        },
        {
          name: "Laravel Security Analyst",
          duration: "Feb 2026 - Mar 2026",
          type: "Freelance",
          description: [
            'Conducted a black-box penetration test on a multi-tenant AI-powered Laravel application, uncovering more than <span class="font-bold">50 vulnerabilities</span>.',
            'Discovered and documented a wide range of vulnerabilities, including <span class="font-bold">OWASP API Top 10 vulnerabilities</span>, <span class="font-bold">Remote Code Execution (RCE)</span>, and <span class="font-bold">Insecure Direct Object Reference (IDOR)</span> issues, among others.',
            "A great opportunity to apply hands-on offensive security skills in a real-world production environment.",
          ],
        },
      ],
    },
    {
      id: 3,
      company_name: "Superior School Of Technology Oujda",
      company_url: "http://esto.ump.ma",
      roles: [
        {
          name: "Laravel Full Stack Web Developer",
          duration: "Jun 2024 - Aug 2024",
          type: "Internship",
          description: [
            "Supervised and coordinated an intern team to deliver a full-stack web application for the Higher School of Technology in Oujda, Morocco.",
            "Designed and implemented the application using Laravel, Blade, and Tailwind CSS, producing a modern, responsive user interface.",
            "Led and mentored team members, promoting collaboration, clear communication, and effective problem-solving in a real-world project environment.",
          ],
        },
      ],
    },
    {
      id: 2,
      company_name: "Hack The Box",
      company_url: "https://app.hackthebox.com/public/users/677236",
      roles: [
        {
          name: "Ethical Hacking Practitioner",
          duration: "Sep 2023 - Present",
          type: "Practice",
          description: [
            'Achieved <span class="font-bold">Master rank (#74)</span> on Hack The Box through consistent performance across offensive security challenges and labs.',
            'Successfully <span class="font-bold">compromised 330+ targets</span> spanning web applications, Linux systems, Windows environments, Active Directory, and network infrastructure.',
            "Developed hands-on expertise in enumeration, exploitation, privilege escalation, web application security, and post-exploitation techniques through realistic attack simulations.",
          ],
        },
      ],
    },
    {
      id: 1,
      company_name: "Soft Cactus",
      company_url: "https://softcactus.ma/",
      roles: [
        {
          name: "Laravel Web Developer",
          duration: "Jun 2023 - Jul 2023",
          type: "Internship",
          description: [
            "Completed a web development internship focused on building functional and responsive applications using Laravel.",
            "Applied theoretical knowledge to implement features that improved system reliability and long-term maintainability.",
            "Strengthened full-stack development skills while gaining hands-on experience with secure coding practices and modern web architecture.",
          ],
        },
      ],
    },
  ],
  $a = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  Pa = X({
    __name: "Bag",
    setup(e) {
      return (t, n) => (
        T(),
        M("svg", $a, [
          ...(n[0] ||
            (n[0] = [
              w(
                "path",
                {
                  "fill-rule": "evenodd",
                  d: "M7.25 6.631v-1.17a1.75 1.75 0 0 1 1.49-1.73l1.22-.183a13.8 13.8 0 0 1 4.08 0l1.22.183a1.75 1.75 0 0 1 1.49 1.73v1.17l1.714.138a2.86 2.86 0 0 1 2.593 2.394a27.1 27.1 0 0 1 0 8.674a2.86 2.86 0 0 1-2.593 2.394l-1.872.15a57 57 0 0 1-9.184 0l-1.872-.15a2.86 2.86 0 0 1-2.593-2.394a27.1 27.1 0 0 1 0-8.674A2.86 2.86 0 0 1 5.536 6.77zm2.933-1.6a12.3 12.3 0 0 1 3.634 0l1.22.183a.25.25 0 0 1 .213.247v1.065a57 57 0 0 0-6.5 0V5.46a.25.25 0 0 1 .213-.247zM7.529 8.113c2.976-.24 5.966-.24 8.942 0l1.872.152a1.36 1.36 0 0 1 1.234 1.138q.093.577.16 1.158a17.52 17.52 0 0 1-15.474 0q.066-.58.16-1.158a1.36 1.36 0 0 1 1.234-1.138zm-3.4 4.044a19.02 19.02 0 0 0 15.742 0a25.6 25.6 0 0 1-.294 5.44a1.36 1.36 0 0 1-1.234 1.139l-1.872.15c-2.976.24-5.966.24-8.942 0l-1.872-.15a1.36 1.36 0 0 1-1.234-1.139c-.291-1.8-.39-3.624-.294-5.44",
                  "clip-rule": "evenodd",
                },
                null,
                -1,
              ),
            ])),
        ])
      );
    },
  }),
  Ea = {
    class:
      "flex flex-col space-y-5 rounded-lg border border-gray-800 bg-secondary/10 p-5 pb-10 hover:border-green-200",
  },
  Oa = { class: "flex items-center gap-x-1 text-green-200" },
  ka = ["href"],
  Ma = { class: "ml-5 space-y-10" },
  Ia = {
    key: 0,
    class:
      "absolute top-2 -left-7.75 size-3 rounded-full bg-green-200 ring-4 ring-green-200/20",
  },
  ja = { class: "text-lg font-bold text-white" },
  Ra = { class: "text-sm" },
  Fa = { class: "mt-5 space-y-2" },
  La = ["innerHTML"],
  Da = X({
    __name: "Roles",
    props: { experience: {} },
    setup(e) {
      let n = e.experience.roles.length > 1;
      return (s, r) => (
        T(),
        M("div", Ea, [
          w("span", Oa, [
            E(Pa, { class: "fill-green-200" }),
            w(
              "a",
              {
                href: e.experience.company_url,
                target: "_blank",
                class: "text-xl font-bold text-green-200",
              },
              Y(e.experience.company_name),
              9,
              ka,
            ),
          ]),
          w("div", Ma, [
            w(
              "div",
              {
                class: gn([
                  "space-y-10 pl-6",
                  { "border-l border-green-200/40": oe(n) },
                ]),
              },
              [
                (T(!0),
                M(
                  G,
                  null,
                  xe(
                    e.experience.roles,
                    (i) => (
                      T(),
                      M(
                        "div",
                        { key: i.name, class: "relative flex flex-col" },
                        [
                          oe(n) ? (T(), M("span", Ia)) : Ds("", !0),
                          w("h5", ja, Y(i.name), 1),
                          w("div", Ra, [
                            w("span", null, Y(i.type), 1),
                            r[0] || (r[0] = ae(" — ", -1)),
                            w("span", null, Y(i.duration), 1),
                          ]),
                          w("ul", Fa, [
                            (T(!0),
                            M(
                              G,
                              null,
                              xe(
                                i.description,
                                (o) => (
                                  T(),
                                  M("li", { key: o, class: "flex gap-x-1" }, [
                                    E(ci, {
                                      class:
                                        "mt-1 size-3 rotate-90 stroke-green-200",
                                    }),
                                    w(
                                      "span",
                                      {
                                        class: "w-full text-sm text-gray-200",
                                        innerHTML: o,
                                      },
                                      null,
                                      8,
                                      La,
                                    ),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ],
              2,
            ),
          ]),
          e.experience.has_overview
            ? (T(),
              ge(
                ps,
                {
                  key: 0,
                  class: "text-sm text-gray-200",
                  title: "Overview",
                  content: e.experience.overview ?? "",
                },
                null,
                8,
                ["content"],
              ))
            : Ds("", !0),
        ])
      );
    },
  }),
  Ha = { class: "space-y-10" },
  Na = X({
    __name: "Experience",
    setup(e) {
      return (t, n) => (
        T(),
        ge(dt, null, {
          default: J(() => [
            E(pt, { id: "Work", normal: "Work and", colored: "Engagements" }),
            w("div", Ha, [
              (T(!0),
              M(
                G,
                null,
                xe(
                  oe(Aa),
                  (s) => (
                    T(),
                    ge(Da, { key: s.id, experience: s }, null, 8, [
                      "experience",
                    ])
                  ),
                ),
                128,
              )),
            ]),
          ]),
          _: 1,
        })
      );
    },
  }),
  Xs = [
    { name: "Home" },
    { name: "About" },
    { name: "Work" },
    { name: "Projects" },
    { name: "Education" },
    { name: "Expertise" },
    { name: "Contact" },
  ],
  Ba = {
    class:
      "hidden md:fixed top-5 left-0 md:flex items-center justify-center w-full px-5 py-3 z-20",
  },
  Va = {
    class:
      "flex gap-x-5 w-fit bg-secondary/10 border border-gray-800 px-4 py-3 shadow-lg rounded-lg backdrop-blur-xs",
  },
  Wa = ["href"],
  za = { class: "md:hidden fixed bottom-0 left-0 w-full z-20" },
  Ka = {
    class:
      "flex h-15 gap-x-5 w-full items-center overflow-scroll bg-secondary/10 border border-gray-800 px-5 py-3 shadow-lg backdrop-blur-lg",
  },
  Ua = ["href"],
  qa = X({
    __name: "AppHeader",
    setup(e) {
      return (t, n) => (
        T(),
        M(
          G,
          null,
          [
            w("div", Ba, [
              w("nav", Va, [
                (T(!0),
                M(
                  G,
                  null,
                  xe(
                    oe(Xs),
                    (s) => (
                      T(),
                      M(
                        "a",
                        {
                          class: "text-secondary-text hover:text-green-200",
                          href: "#" + s.name,
                        },
                        Y(s.name),
                        9,
                        Wa,
                      )
                    ),
                  ),
                  256,
                )),
              ]),
            ]),
            w("div", za, [
              w("nav", Ka, [
                (T(!0),
                M(
                  G,
                  null,
                  xe(
                    oe(Xs),
                    (s) => (
                      T(),
                      M(
                        "a",
                        {
                          class: "text-secondary-text hover:text-green-200",
                          href: "#" + s.name,
                        },
                        Y(s.name),
                        9,
                        Ua,
                      )
                    ),
                  ),
                  256,
                )),
              ]),
            ]),
          ],
          64,
        )
      );
    },
  }),
  Ga = {},
  Ja = {
    class:
      "h-20 mb-15 md:mb-0 text-center z-30 border-t border-gray-800 w-full",
  },
  Ya = {
    class: "px-4 py-6 flex flex-col items-center gap-2 text-xs text-gray-400",
  };
function Za(e, t) {
  return (
    T(),
    M("footer", Ja, [
      w("div", Ya, [
        w(
          "div",
          null,
          "© " + Y(new Date().getFullYear()) + " All rights reserved.",
          1,
        ),
        t[0] ||
          (t[0] = w(
            "div",
            null,
            [
              ae(" Crafted with care by "),
              w(
                "a",
                {
                  href: "mailto:abderahimouriachi@gmail.com",
                  class:
                    "font-medium text-gray-300 hover:text-white transition-colors",
                },
                " Abderrahim El Ouariachi ",
              ),
            ],
            -1,
          )),
      ]),
    ])
  );
}
const Xa = nt(Ga, [["render", Za]]),
  Qa = X({
    __name: "CoolGlow",
    props: {
      color: { default: "rgba(70,130,180,0.1)" },
      size: { default: "700px" },
      x_position: { default: "0px" },
      y_position: { default: "66.6667%" },
    },
    setup(e) {
      const t = e,
        n = si(() => ({
          backgroundImage: `radial-gradient(circle at top center, ${t.color}, transparent 70%)`,
          width: t.size,
          height: t.size,
          left: t.x_position,
          top: t.y_position,
        }));
      return (s, r) => (
        T(),
        M(
          "div",
          { class: "bg-no-repeat blur-3xl absolute z-0", style: hn(n.value) },
          null,
          4,
        )
      );
    },
  }),
  ef = {},
  tf = { class: "cool-top-div w-full h-200 absolute top-0 left-0 z-0" };
function nf(e, t) {
  return (T(), M("div", tf));
}
const sf = nt(ef, [["render", nf]]),
  rf = {
    class:
      "relative space-y-20 overflow-hidden bg-base p-5 pb-0 text-secondary-text md:flex md:flex-col md:items-center md:space-y-30",
  },
  of = X({
    __name: "App",
    setup(e) {
      let t = [
        { id: 1, y_position: "15%", x_position: "10%" },
        { id: 2, y_position: "25%", x_position: "50%" },
        { id: 3, y_position: "35%", x_position: "10%" },
        { id: 4, y_position: "45%", x_position: "50%" },
        { id: 5, y_position: "70%", x_position: "10%" },
        { id: 6, y_position: "80%", x_position: "50%" },
        { id: 6, y_position: "90%", x_position: "10%" },
      ];
      return (
        Yc({
          name: "Abderrahim El Ouariachi",
          jobTitle: "Penetration Tester & Full-Stack Laravel Developer",
          url: "https://itsabderrahimel.github.io/Portfolio/",
          sameAs: [
            "https://github.com/ItsAbderrahimEl",
            "https://itsabderrahimel.github.io/ItsAbderrahimEl/",
            "mailto:abderahimouriachi@gmail.com",
          ],
          description:
            "Abderrahim El Ouariachi is a Penetration Tester and Full-Stack Laravel Developer. He builds secure, scalable web applications and it's infrastruture by combining offensive security techniques with modern software engineering. Active in CTF competitions and platforms such as Hack The Box, he focuses on web exploitation, vulnerability research, and application hardening. Based in Morocco, he is passionate about continuous learning, knowledge sharing, and secure system design.",
          knowsAbout: [
            "Penetration Testing",
            "Web Application Security",
            "Laravel",
            "Vue.js",
            "CTF Challenges",
            "OWASP Top 10",
            "Docker",
            "Secure Software Development",
          ],
          nationality: "Moroccan",
        }),
        (n, s) => (
          T(),
          M(
            G,
            null,
            [
              E(qa),
              E(pt, { id: "Home" }),
              w("div", rf, [
                E(sf),
                (T(!0),
                M(
                  G,
                  null,
                  xe(
                    oe(t),
                    (r) => (
                      T(),
                      ge(
                        Qa,
                        {
                          key: r.id,
                          x_position: r.x_position,
                          y_position: r.y_position,
                        },
                        null,
                        8,
                        ["x_position", "y_position"],
                      )
                    ),
                  ),
                  128,
                )),
                E(ec),
                E(wc),
                E(Na),
                E(ca),
                E(Ta),
                E(Rc),
                E(Vc),
                E(Xa),
              ]),
            ],
            64,
          )
        )
      );
    },
  });
Ol(of).mount("#app");
