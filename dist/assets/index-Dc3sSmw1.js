(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
function is(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const N = {},
  ft = [],
  Fe = () => {},
  li = () => !1,
  bn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  yn = (e) => e.startsWith("onUpdate:"),
  re = Object.assign,
  rs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  xr = Object.prototype.hasOwnProperty,
  V = (e, t) => xr.call(e, t),
  M = Array.isArray,
  Qe = (e) => Kt(e) === "[object Map]",
  ln = (e) => Kt(e) === "[object Set]",
  Es = (e) => Kt(e) === "[object Date]",
  L = (e) => typeof e == "function",
  te = (e) => typeof e == "string",
  Pe = (e) => typeof e == "symbol",
  W = (e) => e !== null && typeof e == "object",
  ci = (e) => (W(e) || L(e)) && L(e.then) && L(e.catch),
  ai = Object.prototype.toString,
  Kt = (e) => ai.call(e),
  vr = (e) => Kt(e).slice(8, -1),
  ui = (e) => Kt(e) === "[object Object]",
  os = (e) =>
    te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  It = is(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  xn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  wr = /-\w/g,
  Ce = xn((e) => e.replace(wr, (t) => t.slice(1).toUpperCase())),
  Sr = /\B([A-Z])/g,
  st = xn((e) => e.replace(Sr, "-$1").toLowerCase()),
  fi = xn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  In = xn((e) => (e ? `on${fi(e)}` : "")),
  ce = (e, t) => !Object.is(e, t),
  jn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  di = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  Cr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Os;
const vn = () =>
  Os ||
  (Os =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function wn(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = te(s) ? kr(s) : wn(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else if (te(e) || W(e)) return e;
}
const Ar = /;(?![^(]*\))/g,
  Tr = /:([^]+)/,
  $r = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function kr(e) {
  const t = {};
  return (
    e
      .replace($r, (n) => (n.startsWith("/*") ? "" : n))
      .split(Ar)
      .forEach((n) => {
        if (n) {
          const s = n.split(Tr);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function qt(e) {
  let t = "";
  if (te(e)) t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = qt(e[n]);
      s && (t += s + " ");
    }
  else if (W(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Pr =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Er = is(Pr);
function hi(e) {
  return !!e || e === "";
}
function Or(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++) s = Sn(e[i], t[i], n);
  return s;
}
function Ms(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t),
    i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && Sn(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function Mr(e, t, n) {
  let s = Qe(e),
    i = Qe(t);
  if (s || i || ((s = ln(e)), (i = ln(t)), s || i))
    return s && i ? Ms(e, t, n) : !1;
  const r = Object.keys(e).length,
    o = Object.keys(t).length;
  if (r !== o) return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l),
      d = t.hasOwnProperty(l);
    if ((a && !d) || (!a && d) || !Sn(e[l], t[l], n)) return !1;
  }
  return String(e) === String(t);
}
function Is(e, t, n, s) {
  n || (n = [new Map(), new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t)) return i.get(e) === t && r.get(t) === e;
  (i.set(e, t), r.set(t, e));
  const o = s(e, t, n);
  return (i.delete(e), r.delete(t), o);
}
function Sn(e, t, n) {
  if (e === t) return !0;
  let s = Es(e),
    i = Es(t);
  return s || i
    ? s && i
      ? e.getTime() === t.getTime()
      : !1
    : ((s = Pe(e)),
      (i = Pe(t)),
      s || i
        ? e === t
        : ((s = M(e)),
          (i = M(t)),
          s || i
            ? s && i
              ? Is(e, t, n, Or)
              : !1
            : ((s = W(e)),
              (i = W(t)),
              s || i
                ? !s || !i
                  ? !1
                  : Is(e, t, n, Mr)
                : String(e) === String(t))));
}
const pi = (e) => !!(e && e.__v_isRef === !0),
  Q = (e) =>
    te(e)
      ? e
      : e == null
        ? ""
        : M(e) || (W(e) && (e.toString === ai || !L(e.toString)))
          ? pi(e)
            ? Q(e.value)
            : JSON.stringify(e, gi, 2)
          : String(e),
  gi = (e, t) =>
    pi(t)
      ? gi(e, t.value)
      : Qe(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, i], r) => ((n[Rn(s, r) + " =>"] = i), n),
              {},
            ),
          }
        : ln(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Rn(n)) }
          : Pe(t)
            ? Rn(t)
            : W(t) && !M(t) && !ui(t)
              ? String(t)
              : t,
  Rn = (e, t = "") => {
    var n;
    return Pe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let le;
class Ir {
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
        le &&
        (le.active
          ? ((this.parent = le),
            (this.index = (le.scopes || (le.scopes = [])).push(this) - 1))
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++) i[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++) s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = le;
      try {
        return ((le = this), t());
      } finally {
        le = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = le), (le = this));
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (le === this) le = this.prevScope;
      else {
        let t = le;
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
        const i = this.scopes.slice();
        for (n = 0, s = i.length; n < s; n++) i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function jr() {
  return le;
}
let J;
const Ln = new WeakSet();
class mi {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      le && (le.active ? le.effects.push(this) : (this.flags &= -2)));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ln.has(this) && (Ln.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || bi(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), js(this), yi(this));
    const t = J,
      n = $e;
    ((J = this), ($e = !0));
    try {
      return this.fn();
    } finally {
      (xi(this), (J = t), ($e = n), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) as(t);
      ((this.deps = this.depsTail = void 0),
        js(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? Ln.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    qn(this) && this.run();
  }
  get dirty() {
    return qn(this);
  }
}
let _i = 0,
  jt,
  Rt;
function bi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = Rt), (Rt = e));
    return;
  }
  ((e.next = jt), (jt = e));
}
function ls() {
  _i++;
}
function cs() {
  if (--_i > 0) return;
  if (Rt) {
    let t = Rt;
    for (Rt = void 0; t;) {
      const n = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = n));
    }
  }
  let e;
  for (; jt;) {
    let t = jt;
    for (jt = void 0; t;) {
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
function yi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function xi(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s;) {
    const i = s.prevDep;
    (s.version === -1 ? (s === n && (n = i), as(s), Rr(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i));
  }
  ((e.deps = t), (e.depsTail = n));
}
function qn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (vi(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function vi(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Nt) ||
    ((e.globalVersion = Nt),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !qn(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = J,
    s = $e;
  ((J = e), ($e = !0));
  try {
    yi(e);
    const i = e.fn(e._value);
    (t.version === 0 || ce(i, e._value)) &&
      ((e.flags |= 128), (e._value = i), t.version++);
  } catch (i) {
    throw (t.version++, i);
  } finally {
    ((J = n), ($e = s), xi(e), (e.flags &= -3));
  }
}
function as(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) as(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rr(e) {
  const { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let $e = !0;
const wi = [];
function Ge() {
  (wi.push($e), ($e = !1));
}
function Je() {
  const e = wi.pop();
  $e = e === void 0 ? !0 : e;
}
function js(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = J;
    J = void 0;
    try {
      t();
    } finally {
      J = n;
    }
  }
}
let Nt = 0;
class Lr {
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
class us {
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
    if (!J || !$e || J === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== J)
      ((n = this.activeLink = new Lr(J, this)),
        J.deps
          ? ((n.prevDep = J.depsTail),
            (J.depsTail.nextDep = n),
            (J.depsTail = n))
          : (J.deps = J.depsTail = n),
        Si(n));
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      ((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = J.depsTail),
        (n.nextDep = void 0),
        (J.depsTail.nextDep = n),
        (J.depsTail = n),
        J.deps === n && (J.deps = s));
    }
    return n;
  }
  trigger(t) {
    (this.version++, Nt++, this.notify(t));
  }
  notify(t) {
    ls();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      cs();
    }
  }
}
function Si(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Si(s);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const Gn = new WeakMap(),
  dt = Symbol(""),
  Jn = Symbol(""),
  Ht = Symbol("");
function ae(e, t, n) {
  if ($e && J) {
    let s = Gn.get(e);
    s || Gn.set(e, (s = new Map()));
    let i = s.get(n);
    (i || (s.set(n, (i = new us())), (i.map = s), (i.key = n)), i.track());
  }
}
function Ue(e, t, n, s, i, r) {
  const o = Gn.get(e);
  if (!o) {
    Nt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((ls(), t === "clear")) o.forEach(l);
  else {
    const a = M(e),
      d = a && os(n);
    if (a && n === "length") {
      const f = Number(s);
      o.forEach((p, x) => {
        (x === "length" || x === Ht || (!Pe(x) && x >= f)) && l(p);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Ht)), t)
      ) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(dt)), Qe(e) && l(o.get(Jn)));
          break;
        case "delete":
          a || (l(o.get(dt)), Qe(e) && l(o.get(Jn)));
          break;
        case "set":
          Qe(e) && l(o.get(dt));
          break;
      }
  }
  cs();
}
function _t(e) {
  const t = U(e);
  return t === e || (ae(t, "iterate", Ht), ke(e))
    ? t
    : Ye(e)
      ? et(e)
        ? t.map((n) => nt(Ne(n)))
        : t.map(nt)
      : t.map(Ne);
}
function Cn(e) {
  return (ae((e = U(e)), "iterate", Ht), e);
}
function Le(e, t) {
  return Ye(e) ? nt(et(e) ? Ne(t) : t) : Ne(t);
}
const Dr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Dn(this, Symbol.iterator, (e) => Le(this, e));
  },
  concat(...e) {
    return _t(this).concat(...e.map((t) => (M(t) ? _t(t) : t)));
  },
  entries() {
    return Dn(this, "entries", (e) => ((e[1] = Le(this, e[1])), e));
  },
  every(e, t) {
    return Be(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Be(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Le(this, s)),
      arguments,
    );
  },
  find(e, t) {
    return Be(this, "find", e, t, (n) => Le(this, n), arguments);
  },
  findIndex(e, t) {
    return Be(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Be(this, "findLast", e, t, (n) => Le(this, n), arguments);
  },
  findLastIndex(e, t) {
    return Be(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Be(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fn(this, "includes", e);
  },
  indexOf(...e) {
    return Fn(this, "indexOf", e);
  },
  join(e) {
    return _t(this).join(e);
  },
  lastIndexOf(...e) {
    return Fn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Be(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return kt(this, "pop");
  },
  push(...e) {
    return kt(this, "push", e);
  },
  reduce(e, ...t) {
    return Rs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rs(this, "reduceRight", e, t);
  },
  shift() {
    return kt(this, "shift");
  },
  some(e, t) {
    return Be(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return kt(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return kt(this, "unshift", e);
  },
  values() {
    return Dn(this, "values", (e) => Le(this, e));
  },
};
function Dn(e, t, n) {
  const s = Cn(e),
    i = s[t]();
  return (
    s !== e &&
      !ke(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next();
        return (r.done || (r.value = n(r.value)), r);
      })),
    i
  );
}
const Fr = Array.prototype;
function Be(e, t, n, s, i, r) {
  const o = Cn(e),
    l = o !== e && !ke(e),
    a = o[t];
  if (a !== Fr[t]) {
    const p = a.apply(e, r);
    return l ? Ne(p) : p;
  }
  let d = n;
  o !== e &&
    (l
      ? (d = function (p, x) {
          return n.call(this, Le(e, p), x, e);
        })
      : n.length > 2 &&
        (d = function (p, x) {
          return n.call(this, p, x, e);
        }));
  const f = a.call(o, d, s);
  return l && i ? i(f) : f;
}
function Rs(e, t, n, s) {
  const i = Cn(e),
    r = i !== e && !ke(e);
  let o = n,
    l = !1;
  i !== e &&
    (r
      ? ((l = s.length === 0),
        (o = function (d, f, p) {
          return (
            l && ((l = !1), (d = Le(e, d))),
            n.call(this, d, Le(e, f), p, e)
          );
        }))
      : n.length > 3 &&
        (o = function (d, f, p) {
          return n.call(this, d, f, p, e);
        }));
  const a = i[t](o, ...s);
  return l ? Le(e, a) : a;
}
function Fn(e, t, n) {
  const s = U(e);
  ae(s, "iterate", Ht);
  const i = s[t](...n);
  return (i === -1 || i === !1) && ps(n[0])
    ? ((n[0] = U(n[0])), s[t](...n))
    : i;
}
function kt(e, t, n = []) {
  (Ge(), ls());
  const s = U(e)[t].apply(e, n);
  return (cs(), Je(), s);
}
const Nr = is("__proto__,__v_isRef,__isVue"),
  Ci = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Pe),
  );
function Hr(e) {
  Pe(e) || (e = String(e));
  const t = U(this);
  return (ae(t, "has", e), t.hasOwnProperty(e));
}
class Ai {
  constructor(t = !1, n = !1) {
    ((this._isReadonly = t), (this._isShallow = n));
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return s === (i ? (r ? Yr : Pi) : r ? ki : $i).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = M(t);
    if (!i) {
      let a;
      if (o && (a = Dr[n])) return a;
      if (n === "hasOwnProperty") return Hr;
    }
    const l = Reflect.get(t, n, me(t) ? t : s);
    if ((Pe(n) ? Ci.has(n) : Nr(n)) || (i || ae(t, "get", n), r)) return l;
    if (me(l)) {
      const a = o && os(n) ? l : l.value;
      return i && W(a) ? Zn(a) : a;
    }
    return W(l) ? (i ? Zn(l) : ds(l)) : l;
  }
}
class Ti extends Ai {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = M(t) && os(n);
    if (!this._isShallow) {
      const d = Ye(r);
      if ((!ke(s) && !Ye(s) && ((r = U(r)), (s = U(s))), !o && me(r) && !me(s)))
        return (d || (r.value = s), !0);
    }
    const l = o ? Number(n) < t.length : V(t, n),
      a = Reflect.set(t, n, s, me(t) ? t : i);
    return (
      t === U(i) &&
        a &&
        (l ? ce(s, r) && Ue(t, "set", n, s) : Ue(t, "add", n, s)),
      a
    );
  }
  deleteProperty(t, n) {
    const s = V(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return (i && s && Ue(t, "delete", n, void 0), i);
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return ((!Pe(n) || !Ci.has(n)) && ae(t, "has", n), s);
  }
  ownKeys(t) {
    return (ae(t, "iterate", M(t) ? "length" : dt), Reflect.ownKeys(t));
  }
}
class Vr extends Ai {
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
const Br = new Ti(),
  Wr = new Vr(),
  zr = new Ti(!0);
const Yn = (e) => e,
  Qt = (e) => Reflect.getPrototypeOf(e);
function Ur(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = U(i),
      o = Qe(r),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      d = i[e](...s),
      f = n ? Yn : t ? nt : Ne;
    return (
      !t && ae(r, "iterate", a ? Jn : dt),
      re(Object.create(d), {
        next() {
          const { value: p, done: x } = d.next();
          return x
            ? { value: p, done: x }
            : { value: l ? [f(p[0]), f(p[1])] : f(p), done: x };
        },
      })
    );
  };
}
function en(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Kr(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        o = U(r),
        l = U(i);
      e || (ce(i, l) && ae(o, "get", i), ae(o, "get", l));
      const { has: a } = Qt(o),
        d = t ? Yn : e ? nt : Ne;
      if (a.call(o, i)) return d(r.get(i));
      if (a.call(o, l)) return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return (!e && ae(U(i), "iterate", dt), i.size);
    },
    has(i) {
      const r = this.__v_raw,
        o = U(r),
        l = U(i);
      return (
        e || (ce(i, l) && ae(o, "has", i), ae(o, "has", l)),
        i === l ? r.has(i) : r.has(i) || r.has(l)
      );
    },
    forEach(i, r) {
      const o = this,
        l = o.__v_raw,
        a = U(l),
        d = t ? Yn : e ? nt : Ne;
      return (
        !e && ae(a, "iterate", dt),
        l.forEach((f, p) => i.call(r, d(f), d(p), o))
      );
    },
  };
  return (
    re(
      n,
      e
        ? {
            add: en("add"),
            set: en("set"),
            delete: en("delete"),
            clear: en("clear"),
          }
        : {
            add(i) {
              const r = U(this),
                o = Qt(r),
                l = U(i),
                a = !t && !ke(i) && !Ye(i) ? l : i;
              return (
                o.has.call(r, a) ||
                  (ce(i, a) && o.has.call(r, i)) ||
                  (ce(l, a) && o.has.call(r, l)) ||
                  (r.add(a), Ue(r, "add", a, a)),
                this
              );
            },
            set(i, r) {
              !t && !ke(r) && !Ye(r) && (r = U(r));
              const o = U(this),
                { has: l, get: a } = Qt(o);
              let d = l.call(o, i);
              d || ((i = U(i)), (d = l.call(o, i)));
              const f = a.call(o, i);
              return (
                o.set(i, r),
                d ? ce(r, f) && Ue(o, "set", i, r) : Ue(o, "add", i, r),
                this
              );
            },
            delete(i) {
              const r = U(this),
                { has: o, get: l } = Qt(r);
              let a = o.call(r, i);
              (a || ((i = U(i)), (a = o.call(r, i))), l && l.call(r, i));
              const d = r.delete(i);
              return (a && Ue(r, "delete", i, void 0), d);
            },
            clear() {
              const i = U(this),
                r = i.size !== 0,
                o = i.clear();
              return (r && Ue(i, "clear", void 0, void 0), o);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Ur(i, e, t);
    }),
    n
  );
}
function fs(e, t) {
  const n = Kr(e, t);
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
          ? s
          : Reflect.get(V(n, i) && i in s ? n : s, i, r);
}
const qr = { get: fs(!1, !1) },
  Gr = { get: fs(!1, !0) },
  Jr = { get: fs(!0, !1) };
const $i = new WeakMap(),
  ki = new WeakMap(),
  Pi = new WeakMap(),
  Yr = new WeakMap();
function Zr(e) {
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
function ds(e) {
  return Ye(e) ? e : hs(e, !1, Br, qr, $i);
}
function Xr(e) {
  return hs(e, !1, zr, Gr, ki);
}
function Zn(e) {
  return hs(e, !0, Wr, Jr, Pi);
}
function hs(e, t, n, s, i) {
  if (
    !W(e) ||
    (e.__v_raw && !(t && e.__v_isReactive)) ||
    e.__v_skip ||
    !Object.isExtensible(e)
  )
    return e;
  const r = i.get(e);
  if (r) return r;
  const o = Zr(vr(e));
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return (i.set(e, l), l);
}
function et(e) {
  return Ye(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function ke(e) {
  return !!(e && e.__v_isShallow);
}
function ps(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Qr(e) {
  return (
    !V(e, "__v_skip") && Object.isExtensible(e) && di(e, "__v_skip", !0),
    e
  );
}
const Ne = (e) => (W(e) ? ds(e) : e),
  nt = (e) => (W(e) ? Zn(e) : e);
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ie(e) {
  return me(e) ? e.value : e;
}
const eo = {
  get: (e, t, n) => (t === "__v_raw" ? e : ie(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t];
    return me(i) && !me(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Ei(e) {
  return et(e) ? e : new Proxy(e, eo);
}
class to {
  constructor(t) {
    ((this.__v_isRef = !0), (this._value = void 0));
    const n = (this.dep = new us()),
      { get: s, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    ((this._get = s), (this._set = i));
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function no(e) {
  return new to(e);
}
class so {
  constructor(t, n, s) {
    ((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new us(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Nt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && J !== this))
      return (bi(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (vi(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function io(e, t, n = !1) {
  let s, i;
  return (L(e) ? (s = e) : ((s = e.get), (i = e.set)), new so(s, i, n));
}
const tn = {},
  cn = new WeakMap();
let ut;
function ro(e, t = !1, n = ut) {
  if (n) {
    let s = cn.get(n);
    (s || cn.set(n, (s = [])), s.push(e));
  }
}
function oo(e, t, n = N) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = n,
    d = (E) => (i ? E : ke(E) || i === !1 || i === 0 ? Ke(E, 1) : Ke(E));
  let f,
    p,
    x,
    C,
    R = !1,
    $ = !1;
  if (
    (me(e)
      ? ((p = () => e.value), (R = ke(e)))
      : et(e)
        ? ((p = () => d(e)), (R = !0))
        : M(e)
          ? (($ = !0),
            (R = e.some((E) => et(E) || ke(E))),
            (p = () =>
              e.map((E) => {
                if (me(E)) return E.value;
                if (et(E)) return d(E);
                if (L(E)) return a ? a(E, 2) : E();
              })))
          : L(e)
            ? t
              ? (p = a ? () => a(e, 2) : e)
              : (p = () => {
                  if (x) {
                    Ge();
                    try {
                      x();
                    } finally {
                      Je();
                    }
                  }
                  const E = ut;
                  ut = f;
                  try {
                    return a ? a(e, 3, [C]) : e(C);
                  } finally {
                    ut = E;
                  }
                })
            : (p = Fe),
    t && i)
  ) {
    const E = p,
      ne = i === !0 ? 1 / 0 : i;
    p = () => Ke(E(), ne);
  }
  const B = jr(),
    q = () => {
      (f.stop(), B && B.active && rs(B.effects, f));
    };
  if (r && t) {
    const E = t;
    t = (...ne) => {
      const ve = E(...ne);
      return (q(), ve);
    };
  }
  let D = $ ? new Array(e.length).fill(tn) : tn;
  const H = (E) => {
    if (!(!(f.flags & 1) || (!f.dirty && !E)))
      if (t) {
        const ne = f.run();
        if (
          E ||
          i ||
          R ||
          ($ ? ne.some((ve, we) => ce(ve, D[we])) : ce(ne, D))
        ) {
          x && x();
          const ve = ut;
          ut = f;
          try {
            const we = [ne, D === tn ? void 0 : $ && D[0] === tn ? [] : D, C];
            ((D = ne), a ? a(t, 3, we) : t(...we));
          } finally {
            ut = ve;
          }
        }
      } else f.run();
  };
  return (
    l && l(H),
    (f = new mi(p)),
    (f.scheduler = o ? () => o(H, !1) : H),
    (C = (E) => ro(E, !1, f)),
    (x = f.onStop =
      () => {
        const E = cn.get(f);
        if (E) {
          if (a) a(E, 4);
          else for (const ne of E) ne();
          cn.delete(f);
        }
      }),
    t ? (s ? H(!0) : (D = f.run())) : o ? o(H.bind(null, !0), !0) : f.run(),
    (q.pause = f.pause.bind(f)),
    (q.resume = f.resume.bind(f)),
    (q.stop = q),
    q
  );
}
function Ke(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !W(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, me(e))) Ke(e.value, t, n);
  else if (M(e)) for (let s = 0; s < e.length; s++) Ke(e[s], t, n);
  else if (ln(e) || Qe(e))
    e.forEach((s) => {
      Ke(s, t, n);
    });
  else if (ui(e)) {
    for (const s in e) Ke(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ke(e[s], t, n);
  }
  return e;
}
function Gt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    An(i, t, n);
  }
}
function Ee(e, t, n, s) {
  if (L(e)) {
    const i = Gt(e, t, n, s);
    return (
      i &&
        ci(i) &&
        i.catch((r) => {
          An(r, t, n);
        }),
      i
    );
  }
  if (M(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(Ee(e[r], t, n, s));
    return i;
  }
}
function An(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || N;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l;) {
      const f = l.ec;
      if (f) {
        for (let p = 0; p < f.length; p++) if (f[p](e, a, d) === !1) return;
      }
      l = l.parent;
    }
    if (r) {
      (Ge(), Gt(r, null, 10, [e, a, d]), Je());
      return;
    }
  }
  lo(e, n, i, s, o);
}
function lo(e, t, n, s = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
const pe = [];
let Re = -1;
const xt = [];
let Xe = null,
  bt = 0;
const Oi = Promise.resolve();
let an = null;
function co(e) {
  const t = an || Oi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ao(e) {
  let t = Re + 1,
    n = pe.length;
  for (; t < n;) {
    const s = (t + n) >>> 1,
      i = pe[s],
      r = Vt(i);
    r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function gs(e) {
  if (!(e.flags & 1)) {
    const t = Vt(e),
      n = pe[pe.length - 1];
    (!n || (!(e.flags & 2) && t >= Vt(n)) ? pe.push(e) : pe.splice(ao(t), 0, e),
      (e.flags |= 1),
      Mi());
  }
}
function Mi() {
  an || (an = Oi.then(ji));
}
function uo(e) {
  if (!M(e))
    Xe && e.id === -1
      ? Xe.splice(bt + 1, 0, e)
      : e.flags & 1 || (xt.push(e), (e.flags |= 1));
  else for (let t = 0; t < e.length; t++) xt.push(e[t]);
  Mi();
}
function Ls(e, t, n = Re + 1) {
  for (; n < pe.length; n++) {
    const s = pe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      (pe.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2));
    }
  }
}
function Ii(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort((n, s) => Vt(n) - Vt(s));
    if (((xt.length = 0), Xe)) {
      for (let n = 0; n < t.length; n++) Xe.push(t[n]);
      return;
    }
    for (Xe = t, bt = 0; bt < Xe.length; bt++) {
      const n = Xe[bt];
      (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
    }
    ((Xe = null), (bt = 0));
  }
}
const Vt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ji(e) {
  try {
    for (Re = 0; Re < pe.length; Re++) {
      const t = pe[Re];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Gt(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Re < pe.length; Re++) {
      const t = pe[Re];
      t && (t.flags &= -2);
    }
    ((Re = -1),
      (pe.length = 0),
      Ii(),
      (an = null),
      (pe.length || xt.length) && ji());
  }
}
let fe = null,
  Ri = null;
function un(e) {
  const t = fe;
  return ((fe = e), (Ri = (e && e.type.__scopeId) || null), t);
}
function X(e, t = fe, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && pn(-1);
    const r = un(t),
      o = qe.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = qe.length; a > o; a--) vs();
      (un(r), s._d && pn(1));
    }
    return l;
  };
  return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function fo(e, t) {
  if (fe === null) return e;
  const n = En(fe),
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = N] = t[i];
    r &&
      (L(r) && (r = { mounted: r, updated: r }),
      r.deep && Ke(o),
      s.push({
        dir: r,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function lt(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (Ge(), Ee(a, n, 8, [e.el, l, e, t]), Je());
  }
}
function ho(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    (s === n && (n = ge.provides = Object.create(s)), (n[e] = t));
  }
}
function Lt(e, t, n = !1) {
  const s = cr();
  if (s || wt) {
    let i = wt
      ? wt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && L(t) ? t.call(s && s.proxy) : t;
  }
}
const po = Symbol.for("v-scx"),
  go = () => Lt(po);
function mo(e, t) {
  return ms(e, null, { flush: "sync" });
}
function Nn(e, t, n) {
  return ms(e, t, n);
}
function ms(e, t, n = N) {
  const { immediate: s, deep: i, flush: r, once: o } = n,
    l = re({}, n),
    a = (t && s) || (!t && r !== "post");
  let d;
  if (Ut) {
    if (r === "sync") {
      const C = go();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!a) {
      const C = () => {};
      return ((C.stop = Fe), (C.resume = Fe), (C.pause = Fe), C);
    }
  }
  const f = ge;
  l.call = (C, R, $) => Ee(C, f, R, $);
  let p = !1;
  (r === "post"
    ? (l.scheduler = (C) => {
        be(C, f && f.suspense);
      })
    : r !== "sync" &&
      ((p = !0),
      (l.scheduler = (C, R) => {
        R ? C() : gs(C);
      })),
    (l.augmentJob = (C) => {
      (t && (C.flags |= 4),
        p && ((C.flags |= 2), f && ((C.id = f.uid), (C.i = f))));
    }));
  const x = oo(e, t, l);
  return (Ut && (d ? d.push(x) : a && x()), x);
}
function _o(e, t, n) {
  const s = this.proxy,
    i = te(e) ? (e.includes(".") ? Li(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  L(t) ? (r = t) : ((r = t.handler), (n = t));
  const o = Jt(this),
    l = ms(i, r.bind(s), n);
  return (o(), l);
}
function Li(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
const bo = Symbol("_vte"),
  Tn = (e) => e.__isTeleport,
  Hn = Symbol("_leaveCb");
function yo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== He) {
        t = n;
        break;
      }
  }
  return t;
}
function Di(e) {
  if (!bs(e)) return Tn(e.type) && e.children ? yo(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && L(n.default)) return n.default();
  }
}
function _s(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    _s((Tn(n.type) && Di(n)) || n, t);
  } else
    e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Z(e, t) {
  return L(e) ? re({ name: e.name }, t, { setup: e }) : e;
}
function Fi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ds(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const fn = new WeakMap();
function Dt(e, t, n, s, i = !1) {
  if (M(e)) {
    e.forEach(($, B) => Dt($, t && (M(t) ? t[B] : t), n, s, i));
    return;
  }
  if (vt(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Dt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? En(s.component) : s.el,
    o = i ? null : r,
    { i: l, r: a } = e,
    d = t && t.r,
    f = l.refs === N ? (l.refs = {}) : l.refs,
    p = l.setupState,
    x = U(p),
    C = p === N ? li : ($) => (Ds(f, $) ? !1 : V(x, $)),
    R = ($, B) => !(B && Ds(f, B));
  if (d != null && d !== a) {
    if ((Fs(t), te(d))) ((f[d] = null), C(d) && (p[d] = null));
    else if (me(d)) {
      const $ = t;
      (R(d, $.k) && (d.value = null), $.k && (f[$.k] = null));
    }
  }
  if (L(a)) Gt(a, l, 12, [o, f]);
  else {
    const $ = te(a),
      B = me(a);
    if ($ || B) {
      const q = () => {
        if (e.f) {
          const D = $ ? (C(a) ? p[a] : f[a]) : R() || !e.k ? a.value : f[e.k];
          if (i) M(D) && rs(D, r);
          else if (M(D)) D.includes(r) || D.push(r);
          else if ($) ((f[a] = [r]), C(a) && (p[a] = f[a]));
          else {
            const H = [r];
            (R(a, e.k) && (a.value = H), e.k && (f[e.k] = H));
          }
        } else
          $
            ? ((f[a] = o), C(a) && (p[a] = o))
            : B && (R(a, e.k) && (a.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const D = () => {
          (q(), fn.delete(e));
        };
        ((D.id = -1), fn.set(e, D), be(D, n));
      } else (Fs(e), q());
    }
  }
}
function Fs(e) {
  const t = fn.get(e);
  t && ((t.flags |= 8), fn.delete(e));
}
vn().requestIdleCallback;
vn().cancelIdleCallback;
const vt = (e) => !!e.type.__asyncLoader,
  bs = (e) => e.type.__isKeepAlive;
function xo(e, t) {
  Ni(e, "a", t);
}
function vo(e, t) {
  Ni(e, "da", t);
}
function Ni(e, t, n = ge) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i;) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if (($n(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent;)
      (bs(i.parent.vnode) && wo(s, t, n, i), (i = i.parent));
  }
}
function wo(e, t, n, s) {
  const i = $n(t, e, s, !0);
  Hi(() => {
    rs(s[t], i);
  }, n);
}
function $n(e, t, n = ge, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          Ge();
          const l = Jt(n),
            a = Ee(t, n, e, o);
          return (l(), Je(), a);
        });
    return (s ? i.unshift(r) : i.push(r), r);
  }
}
const Ze =
    (e) =>
    (t, n = ge) => {
      (!Ut || e === "sp") && $n(e, (...s) => t(...s), n);
    },
  So = Ze("bm"),
  Co = Ze("m"),
  Ao = Ze("bu"),
  To = Ze("u"),
  $o = Ze("bum"),
  Hi = Ze("um"),
  ko = Ze("sp"),
  Po = Ze("rtg"),
  Eo = Ze("rtc");
function Oo(e, t = ge) {
  $n("ec", e, t);
}
const Mo = Symbol.for("v-ndc");
function Ae(e, t, n, s) {
  let i;
  const r = n,
    o = M(e);
  if (o || te(e)) {
    const l = o && et(e);
    let a = !1,
      d = !1;
    (l && ((a = !ke(e)), (d = Ye(e)), (e = Cn(e))), (i = new Array(e.length)));
    for (let f = 0, p = e.length; f < p; f++)
      i[f] = t(a ? (d ? nt(Ne(e[f])) : Ne(e[f])) : e[f], f, void 0, r);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, r);
  } else if (W(e))
    if (e[Symbol.iterator]) i = Array.from(e, (l, a) => t(l, a, void 0, r));
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const f = l[a];
        i[a] = t(e[f], f, a, r);
      }
    }
  else i = [];
  return i;
}
function tt(e, t, n, s, i, r) {
  if (
    (n == null && (n = {}),
    fe.ce || (fe.parent && vt(fe.parent) && fe.parent.ce))
  ) {
    const d = n,
      f = Object.keys(d).length > 0;
    return (
      t !== "default" && (d.name = t),
      T(),
      _e(Y, null, [k("slot", d, s)], f ? -2 : 64)
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const l = qe.length;
  T();
  let a;
  try {
    const d = o && Vi(o(n)),
      f = n.key || r || (d && d.key);
    a = _e(
      Y,
      { key: (f && !Pe(f) ? f : `_${t}`) + (!d && s ? "_fb" : "") },
      d || (s ? s() : []),
      d && e._ === 1 ? 64 : -2,
    );
  } catch (d) {
    for (let f = qe.length; f > l; f--) vs();
    throw d;
  } finally {
    o && o._c && (o._d = !0);
  }
  return (a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), a);
}
function Vi(e) {
  return e.some((t) =>
    Wt(t) ? !(t.type === He || (t.type === Y && !Vi(t.children))) : !0,
  )
    ? e
    : null;
}
const Xn = (e) => (e ? (ar(e) ? En(e) : Xn(e.parent)) : null),
  Ft = re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xn(e.parent),
    $root: (e) => Xn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        gs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = co.bind(e.proxy)),
    $watch: (e) => _o.bind(e),
  }),
  Vn = (e, t) => e !== N && !e.__isScriptSetup && V(e, t),
  Io = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: l,
        appContext: a,
      } = e;
      if (t[0] !== "$") {
        const x = o[t];
        if (x !== void 0)
          switch (x) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Vn(s, t)) return ((o[t] = 1), s[t]);
          if (i !== N && V(i, t)) return ((o[t] = 2), i[t]);
          if (V(r, t)) return ((o[t] = 3), r[t]);
          if (n !== N && V(n, t)) return ((o[t] = 4), n[t]);
          Qn && (o[t] = 0);
        }
      }
      const d = Ft[t];
      let f, p;
      if (d) return (t === "$attrs" && ae(e.attrs, "get", ""), d(e));
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== N && V(n, t)) return ((o[t] = 4), n[t]);
      if (((p = a.config.globalProperties), V(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return Vn(i, t)
        ? ((i[t] = n), !0)
        : s !== N && V(s, t)
          ? ((s[t] = n), !0)
          : V(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          props: r,
          type: o,
        },
      },
      l,
    ) {
      let a;
      return !!(
        n[l] ||
        (e !== N && l[0] !== "$" && V(e, l)) ||
        Vn(t, l) ||
        V(r, l) ||
        V(s, l) ||
        V(Ft, l) ||
        V(i.config.globalProperties, l) ||
        ((a = o.__cssModules) && a[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : V(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function dn(e) {
  return M(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function jo(e, t) {
  return !e || !t ? e || t : M(e) && M(t) ? e.concat(t) : re({}, dn(e), dn(t));
}
let Qn = !0;
function Ro(e) {
  const t = Wi(e),
    n = e.proxy,
    s = e.ctx;
  ((Qn = !1), t.beforeCreate && Ns(t.beforeCreate, e, "bc"));
  const {
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    created: f,
    beforeMount: p,
    mounted: x,
    beforeUpdate: C,
    updated: R,
    activated: $,
    deactivated: B,
    beforeDestroy: q,
    beforeUnmount: D,
    destroyed: H,
    unmounted: E,
    render: ne,
    renderTracked: ve,
    renderTriggered: we,
    errorCaptured: Se,
    serverPrefetch: gt,
    expose: Ve,
    inheritAttrs: it,
    components: mt,
    directives: Yt,
    filters: On,
  } = t;
  if ((d && Lo(d, s, null), o))
    for (const ee in o) {
      const G = o[ee];
      L(G) && (s[ee] = G.bind(n));
    }
  if (i) {
    const ee = i.call(n, n);
    W(ee) && (e.data = ds(ee));
  }
  if (((Qn = !0), r))
    for (const ee in r) {
      const G = r[ee],
        rt = L(G) ? G.bind(n, n) : L(G.get) ? G.get.bind(n, n) : Fe,
        Zt = !L(G) && L(G.set) ? G.set.bind(n) : Fe,
        ot = fr({ get: rt, set: Zt });
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: (Te) => (ot.value = Te),
      });
    }
  if (l) for (const ee in l) Bi(l[ee], s, n, ee);
  if (a) {
    const ee = L(a) ? a.call(n) : a;
    Reflect.ownKeys(ee).forEach((G) => {
      ho(G, ee[G]);
    });
  }
  f && Ns(f, e, "c");
  function de(ee, G) {
    M(G) ? G.forEach((rt) => ee(rt.bind(n))) : G && ee(G.bind(n));
  }
  if (
    (de(So, p),
    de(Co, x),
    de(Ao, C),
    de(To, R),
    de(xo, $),
    de(vo, B),
    de(Oo, Se),
    de(Eo, ve),
    de(Po, we),
    de($o, D),
    de(Hi, E),
    de(ko, gt),
    M(Ve))
  )
    if (Ve.length) {
      const ee = e.exposed || (e.exposed = {});
      Ve.forEach((G) => {
        Object.defineProperty(ee, G, {
          get: () => n[G],
          set: (rt) => (n[G] = rt),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (ne && e.render === Fe && (e.render = ne),
    it != null && (e.inheritAttrs = it),
    mt && (e.components = mt),
    Yt && (e.directives = Yt),
    gt && Fi(e));
}
function Lo(e, t, n = Fe) {
  M(e) && (e = es(e));
  for (const s in e) {
    const i = e[s];
    let r;
    (W(i)
      ? "default" in i
        ? (r = Lt(i.from || s, i.default, !0))
        : (r = Lt(i.from || s))
      : (r = Lt(i)),
      me(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (t[s] = r));
  }
}
function Ns(e, t, n) {
  Ee(M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Bi(e, t, n, s) {
  let i = s.includes(".") ? Li(n, s) : () => n[s];
  if (te(e)) {
    const r = t[e];
    L(r) && Nn(i, r);
  } else if (L(e)) Nn(i, e.bind(n));
  else if (W(e))
    if (M(e)) e.forEach((r) => Bi(r, t, n, s));
    else {
      const r = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(r) && Nn(i, r, e);
    }
}
function Wi(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = r.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !i.length && !n && !s
        ? (a = t)
        : ((a = {}),
          i.length && i.forEach((d) => hn(a, d, o, !0)),
          hn(a, t, o)),
    W(t) && r.set(t, a),
    a
  );
}
function hn(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  (r && hn(e, r, n, !0), i && i.forEach((o) => hn(e, o, n, !0)));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Do[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Do = {
  data: Hs,
  props: Vs,
  emits: Vs,
  methods: Ot,
  computed: Ot,
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  components: Ot,
  directives: Ot,
  watch: No,
  provide: Hs,
  inject: Fo,
};
function Hs(e, t) {
  return t
    ? e
      ? function () {
          return re(
            L(e) ? e.call(this, this) : e,
            L(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Fo(e, t) {
  return Ot(es(e), es(t));
}
function es(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ot(e, t) {
  return e ? re(Object.create(null), e, t) : t;
}
function Vs(e, t) {
  return e
    ? M(e) && M(t)
      ? [...new Set([...e, ...t])]
      : re(Object.create(null), dn(e), dn(t ?? {}))
    : t;
}
function No(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(Object.create(null), e);
  for (const s in t) n[s] = he(e[s], t[s]);
  return n;
}
function zi() {
  return {
    app: null,
    config: {
      isNativeTag: li,
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
let Ho = 0;
function Vo(e, t) {
  return function (s, i = null) {
    (L(s) || (s = re({}, s)), i != null && !W(i) && (i = null));
    const r = zi(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const d = (r.app = {
      _uid: Ho++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: _l,
      get config() {
        return r.config;
      },
      set config(f) {},
      use(f, ...p) {
        return (
          o.has(f) ||
            (f && L(f.install)
              ? (o.add(f), f.install(d, ...p))
              : L(f) && (o.add(f), f(d, ...p))),
          d
        );
      },
      mixin(f) {
        return (r.mixins.includes(f) || r.mixins.push(f), d);
      },
      component(f, p) {
        return p ? ((r.components[f] = p), d) : r.components[f];
      },
      directive(f, p) {
        return p ? ((r.directives[f] = p), d) : r.directives[f];
      },
      mount(f, p, x) {
        if (!a) {
          const C = d._ceVNode || k(s, i);
          return (
            (C.appContext = r),
            x === !0 ? (x = "svg") : x === !1 && (x = void 0),
            e(C, f, x),
            (a = !0),
            (d._container = f),
            (f.__vue_app__ = d),
            En(C.component)
          );
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a &&
          (Ee(l, d._instance, 16),
          e(null, d._container),
          delete d._container.__vue_app__);
      },
      provide(f, p) {
        return ((r.provides[f] = p), d);
      },
      runWithContext(f) {
        const p = wt;
        wt = d;
        try {
          return f();
        } finally {
          wt = p;
        }
      },
    });
    return d;
  };
}
let wt = null;
function Bo(e, t, n = N) {
  const s = cr(),
    i = Ce(t),
    r = st(t),
    o = Ui(e, i),
    l = no((a, d) => {
      let f,
        p = N,
        x;
      return (
        mo(() => {
          const C = e[i];
          ce(f, C) && ((f = C), d());
        }),
        {
          get() {
            return (a(), n.get ? n.get(f) : f);
          },
          set(C) {
            const R = n.set ? n.set(C) : C;
            if (!ce(R, f) && !(p !== N && ce(C, p))) return;
            const $ = s.vnode.props,
              B = !!(
                $ &&
                (t in $ || i in $ || r in $) &&
                (`onUpdate:${t}` in $ ||
                  `onUpdate:${i}` in $ ||
                  `onUpdate:${r}` in $)
              );
            (B || ((f = C), d()),
              s.emit(`update:${t}`, R),
              ce(C, p) &&
                ((ce(C, R) && !ce(R, x)) || (B && p !== N && !ce(R, f))) &&
                d(),
              (p = C),
              (x = R));
          },
        }
      );
    });
  return (
    (l[Symbol.iterator] = () => {
      let a = 0;
      return {
        next() {
          return a < 2 ? { value: a++ ? o || N : l, done: !1 } : { done: !0 };
        },
      };
    }),
    l
  );
}
const Ui = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function Wo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || N;
  let i = n;
  const r = t.startsWith("update:"),
    o = r && Ui(s, t.slice(7));
  o &&
    (o.trim && (i = n.map((f) => (te(f) ? f.trim() : f))),
    o.number && (i = i.map(Cr)));
  let l,
    a = s[(l = In(t))] || s[(l = In(Ce(t)))];
  (!a && r && (a = s[(l = In(st(t)))]), a && Ee(a, e, 6, i));
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    ((e.emitted[l] = !0), Ee(d, e, 6, i));
  }
}
const zo = new WeakMap();
function Ki(e, t, n = !1) {
  const s = n ? zo : t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let o = {},
    l = !1;
  if (!L(e)) {
    const a = (d) => {
      const f = Ki(d, t, !0);
      f && ((l = !0), re(o, f));
    };
    (!n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a));
  }
  return !r && !l
    ? (W(e) && s.set(e, null), null)
    : (M(r) ? r.forEach((a) => (o[a] = null)) : re(o, r),
      W(e) && s.set(e, o),
      o);
}
function kn(e, t) {
  return !e || !bn(t)
    ? !1
    : ((t = t.slice(2)),
      (t = t === "Once" ? t : t.replace(/Once$/, "")),
      V(e, t[0].toLowerCase() + t.slice(1)) || V(e, st(t)) || V(e, t));
}
function Bs(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: o,
      attrs: l,
      emit: a,
      render: d,
      renderCache: f,
      props: p,
      data: x,
      setupState: C,
      ctx: R,
      inheritAttrs: $,
    } = e,
    B = un(e);
  let q, D;
  try {
    if (n.shapeFlag & 4) {
      const E = i || s,
        ne = E;
      ((q = De(d.call(ne, E, f, p, C, x, R))), (D = l));
    } else {
      const E = t;
      ((q = De(
        E.length > 1 ? E(p, { attrs: l, slots: o, emit: a }) : E(p, null),
      )),
        (D = t.props ? l : Uo(l)));
    }
  } catch (E) {
    ((qe.length = 0), An(E, e, 1), (q = k(He)));
  }
  let H = q;
  if (D && $ !== !1) {
    const E = Object.keys(D),
      { shapeFlag: ne } = H;
    E.length &&
      ne & 7 &&
      (r && E.some(yn) && (D = Ko(D, r)), (H = St(H, D, !1, !0)));
  }
  if (
    (n.dirs &&
      ((H = St(H, null, !1, !0)),
      (H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs)),
    n.transition)
  ) {
    const E = (Tn(H.type) && Di(H)) || H;
    _s(E, n.transition);
  }
  return ((q = H), un(B), q);
}
const Uo = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || bn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ko = (e, t) => {
    const n = {};
    for (const s in e) (!yn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function qo(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: o, children: l, patchFlag: a } = t,
    d = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Ws(s, o, d) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const x = f[p];
        if (qi(o, s, x) && !kn(d, x)) return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? Ws(s, o, d)
            : !0
          : !!o;
  return !1;
}
function Ws(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (qi(t, e, r) && !kn(n, r)) return !0;
  }
  return !1;
}
function qi(e, t, n) {
  const s = e[n],
    i = t[n];
  return n === "style" && W(s) && W(i) ? !Sn(s, i) : s !== i;
}
function Go({ vnode: e, parent: t, suspense: n }, s) {
  for (; t;) {
    const i = t.subTree;
    if (
      (i.suspense &&
        i.suspense.activeBranch === e &&
        ((i.suspense.vnode.el = i.el = s), (e = i)),
      i === e)
    )
      (((e = t.vnode).el = s), (t = t.parent));
    else break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Gi = {},
  Ji = () => Object.create(Gi),
  Yi = (e) => Object.getPrototypeOf(e) === Gi;
function Jo(e, t, n, s = !1) {
  const i = {},
    r = Ji();
  ((e.propsDefaults = Object.create(null)), Zi(e, t, i, r));
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  (n ? (e.props = s ? i : Xr(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r));
}
function Yo(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    l = U(i),
    [a] = e.propsOptions;
  let d = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let x = f[p];
        if (kn(e.emitsOptions, x)) continue;
        const C = t[x];
        if (a)
          if (V(r, x)) C !== r[x] && ((r[x] = C), (d = !0));
          else {
            const R = Ce(x);
            i[R] = ts(a, l, R, C, e, !1);
          }
        else C !== r[x] && ((r[x] = C), (d = !0));
      }
    }
  } else {
    Zi(e, t, i, r) && (d = !0);
    let f;
    for (const p in l)
      (!t || (!V(t, p) && ((f = st(p)) === p || !V(t, f)))) &&
        (a
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (i[p] = ts(a, l, p, void 0, e, !0))
          : delete i[p]);
    if (r !== l) for (const p in r) (!t || !V(t, p)) && (delete r[p], (d = !0));
  }
  d && Ue(e.attrs, "set", "");
}
function Zi(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (It(a)) continue;
      const d = t[a];
      let f;
      i && V(i, (f = Ce(a)))
        ? !r || !r.includes(f)
          ? (n[f] = d)
          : ((l || (l = {}))[f] = d)
        : kn(e.emitsOptions, a) ||
          ((!(a in s) || d !== s[a]) && ((s[a] = d), (o = !0)));
    }
  if (r) {
    const a = U(n),
      d = l || N;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      n[p] = ts(i, a, p, d[p], e, !V(d, p));
    }
  }
  return o;
}
function ts(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = V(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && L(a)) {
        const { propsDefaults: d } = i;
        if (n in d) s = d[n];
        else {
          const f = Jt(i);
          ((s = d[n] = a.call(null, t)), f());
        }
      } else s = a;
      i.ce && i.ce._setProp(n, s);
    }
    o[0] &&
      (r && !l ? (s = !1) : o[1] && (s === "" || s === st(n)) && (s = !0));
  }
  return s;
}
const Zo = new WeakMap();
function Xi(e, t, n = !1) {
  const s = n ? Zo : t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!L(e)) {
    const f = (p) => {
      a = !0;
      const [x, C] = Xi(p, t, !0);
      (re(o, x), C && l.push(...C));
    };
    (!n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f));
  }
  if (!r && !a) return (W(e) && s.set(e, ft), ft);
  if (M(r))
    for (let f = 0; f < r.length; f++) {
      const p = Ce(r[f]);
      zs(p) && (o[p] = N);
    }
  else if (r)
    for (const f in r) {
      const p = Ce(f);
      if (zs(p)) {
        const x = r[f],
          C = (o[p] = M(x) || L(x) ? { type: x } : re({}, x)),
          R = C.type;
        let $ = !1,
          B = !0;
        if (M(R))
          for (let q = 0; q < R.length; ++q) {
            const D = R[q],
              H = L(D) && D.name;
            if (H === "Boolean") {
              $ = !0;
              break;
            } else H === "String" && (B = !1);
          }
        else $ = L(R) && R.name === "Boolean";
        ((C[0] = $), (C[1] = B), ($ || V(C, "default")) && l.push(p));
      }
    }
  const d = [o, l];
  return (W(e) && s.set(e, d), d);
}
function zs(e) {
  return e[0] !== "$" && !It(e);
}
const ys = (e) => e === "_" || e === "_ctx" || e === "$stable",
  xs = (e) => (M(e) ? e.map(De) : [De(e)]),
  Xo = (e, t, n) => {
    if (t._n) return t;
    const s = X((...i) => xs(t(...i)), n);
    return ((s._c = !1), s);
  },
  Qi = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (ys(i)) continue;
      const r = e[i];
      if (L(r)) t[i] = Xo(i, r, s);
      else if (r != null) {
        const o = xs(r);
        t[i] = () => o;
      }
    }
  },
  er = (e, t) => {
    const n = xs(t);
    e.slots.default = () => n;
  },
  tr = (e, t, n) => {
    for (const s in t) (n || !ys(s)) && (e[s] = t[s]);
  },
  Qo = (e, t, n) => {
    const s = (e.slots = Ji());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (tr(s, t, n), n && di(s, "_", i, !0)) : Qi(t, s);
    } else t && er(e, t);
  },
  el = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      o = N;
    if (s.shapeFlag & 32) {
      const l = t._;
      (l
        ? n && l === 1
          ? (r = !1)
          : tr(i, t, n)
        : ((r = !t.$stable), Qi(t, i)),
        (o = t));
    } else t && (er(e, t), (o = { default: 1 }));
    if (r) for (const l in i) !ys(l) && o[l] == null && delete i[l];
  },
  be = rl;
function tl(e) {
  return nl(e);
}
function nl(e, t) {
  const n = vn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: l,
      createComment: a,
      setText: d,
      setElementText: f,
      parentNode: p,
      nextSibling: x,
      setScopeId: C = Fe,
      insertStaticContent: R,
    } = e,
    $ = (
      c,
      u,
      h,
      b = null,
      g = null,
      _ = null,
      w = void 0,
      v = null,
      y = !!u.dynamicChildren,
    ) => {
      if (c === u) return;
      (c && !Pt(c, u) && ((b = Xt(c)), Te(c, g, _, !0), (c = null)),
        u.patchFlag === -2 && ((y = !1), (u.dynamicChildren = null)),
        u.dynamicChildren &&
          c &&
          c.dynamicChildren &&
          c.dynamicChildren.hasOnce &&
          (u.dynamicChildren === ft && (u.dynamicChildren = []),
          (u.dynamicChildren.hasOnce = !0)));
      const { type: m, ref: O, shapeFlag: A } = u;
      switch (m) {
        case Pn:
          B(c, u, h, b);
          break;
        case He:
          q(c, u, h, b);
          break;
        case rn:
          c == null && D(u, h, b, w);
          break;
        case Y:
          mt(c, u, h, b, g, _, w, v, y);
          break;
        default:
          A & 1
            ? ne(c, u, h, b, g, _, w, v, y)
            : A & 6
              ? Yt(c, u, h, b, g, _, w, v, y)
              : (A & 64 || A & 128) && m.process(c, u, h, b, g, _, w, v, y, Tt);
      }
      O != null && g
        ? Dt(O, c && c.ref, _, u || c, !u)
        : O == null && c && c.ref != null && Dt(c.ref, null, _, c, !0);
    },
    B = (c, u, h, b) => {
      if (c == null) s((u.el = l(u.children)), h, b);
      else {
        const g = (u.el = c.el);
        u.children !== c.children && d(g, u.children);
      }
    },
    q = (c, u, h, b) => {
      c == null ? s((u.el = a(u.children || "")), h, b) : (u.el = c.el);
    },
    D = (c, u, h, b) => {
      [c.el, c.anchor] = R(c.children, u, h, b, c.el, c.anchor);
    },
    H = ({ el: c, anchor: u }, h, b) => {
      let g;
      for (; c && c !== u;) ((g = x(c)), s(c, h, b), (c = g));
      s(u, h, b);
    },
    E = ({ el: c, anchor: u }) => {
      let h;
      for (; c && c !== u;) ((h = x(c)), i(c), (c = h));
      i(u);
    },
    ne = (c, u, h, b, g, _, w, v, y) => {
      if (
        (u.type === "svg" ? (w = "svg") : u.type === "math" && (w = "mathml"),
        c == null)
      )
        ve(u, h, b, g, _, w, v, y);
      else {
        const m = c.el && c.el._isVueCE ? c.el : null;
        try {
          (m && m._beginPatch(), gt(c, u, g, _, w, v, y));
        } finally {
          m && m._endPatch();
        }
      }
    },
    ve = (c, u, h, b, g, _, w, v) => {
      let y, m;
      const { props: O, shapeFlag: A, transition: P, dirs: I } = c;
      if (
        ((y = c.el = o(c.type, _, O && O.is, O)),
        A & 8
          ? f(y, c.children)
          : A & 16 && Se(c.children, y, null, b, g, Bn(c, _), w, v),
        I && lt(c, null, b, "created"),
        we(y, c, c.scopeId, w, b),
        O)
      ) {
        for (const K in O) K !== "value" && !It(K) && r(y, K, null, O[K], _, b);
        ("value" in O && r(y, "value", null, O.value, _),
          (m = O.onVnodeBeforeMount) && je(m, b, c));
      }
      I && lt(c, null, b, "beforeMount");
      const F = sl(g, P);
      (F && P.beforeEnter(y),
        s(y, u, h),
        ((m = O && O.onVnodeMounted) || F || I) &&
          be(() => {
            (m && je(m, b, c), F && P.enter(y), I && lt(c, null, b, "mounted"));
          }, g));
    },
    we = (c, u, h, b, g) => {
      if ((h && C(c, h), b)) for (let _ = 0; _ < b.length; _++) C(c, b[_]);
      if (g) {
        let _ = g.subTree;
        if (
          u === _ ||
          (rr(_.type) && (_.ssContent === u || _.ssFallback === u))
        ) {
          const w = g.vnode;
          we(c, w, w.scopeId, w.slotScopeIds, g.parent);
        }
      }
    },
    Se = (c, u, h, b, g, _, w, v, y = 0) => {
      for (let m = y; m < c.length; m++) {
        const O = (c[m] = v ? ze(c[m]) : De(c[m]));
        $(null, O, u, h, b, g, _, w, v);
      }
    },
    gt = (c, u, h, b, g, _, w) => {
      const v = (u.el = c.el);
      let { patchFlag: y, dynamicChildren: m, dirs: O } = u;
      y |= c.patchFlag & 16;
      const A = c.props || N,
        P = u.props || N;
      let I;
      if (
        (h && ct(h, !1),
        (I = P.onVnodeBeforeUpdate) && je(I, h, u, c),
        O && lt(u, c, h, "beforeUpdate"),
        h && ct(h, !0),
        m &&
          (!c.dynamicChildren || c.dynamicChildren.length !== m.length) &&
          ((y = 0), (w = !1), (m = null)),
        ((A.innerHTML && P.innerHTML == null) ||
          (A.textContent && P.textContent == null)) &&
          f(v, ""),
        m
          ? Ve(c.dynamicChildren, m, v, h, b, Bn(u, g), _)
          : w || G(c, u, v, null, h, b, Bn(u, g), _, !1),
        y > 0)
      ) {
        if (y & 16) it(v, A, P, h, g);
        else if (
          (y & 2 && A.class !== P.class && r(v, "class", null, P.class, g),
          y & 4 && r(v, "style", A.style, P.style, g),
          y & 8)
        ) {
          const F = u.dynamicProps;
          for (let K = 0; K < F.length; K++) {
            const z = F[K],
              se = A[z],
              oe = P[z];
            (oe !== se || z === "value") && r(v, z, se, oe, g, h);
          }
        }
        y & 1 && c.children !== u.children && f(v, u.children);
      } else !w && m == null && it(v, A, P, h, g);
      ((I = P.onVnodeUpdated) || O) &&
        be(() => {
          (I && je(I, h, u, c), O && lt(u, c, h, "updated"));
        }, b);
    },
    Ve = (c, u, h, b, g, _, w) => {
      for (let v = 0; v < u.length; v++) {
        const y = c[v],
          m = u[v],
          O =
            y.el && (y.type === Y || !Pt(y, m) || y.shapeFlag & 198)
              ? p(y.el)
              : h;
        $(y, m, O, null, b, g, _, w, !0);
      }
    },
    it = (c, u, h, b, g) => {
      if (u !== h) {
        if (u !== N)
          for (const _ in u) !It(_) && !(_ in h) && r(c, _, u[_], null, g, b);
        for (const _ in h) {
          if (It(_)) continue;
          const w = h[_],
            v = u[_];
          w !== v && _ !== "value" && r(c, _, v, w, g, b);
        }
        "value" in h && r(c, "value", u.value, h.value, g);
      }
    },
    mt = (c, u, h, b, g, _, w, v, y) => {
      const m = (u.el = c ? c.el : l("")),
        O = (u.anchor = c ? c.anchor : l(""));
      let { patchFlag: A, dynamicChildren: P, slotScopeIds: I } = u;
      (I && (v = v ? v.concat(I) : I),
        c == null
          ? (s(m, h, b), s(O, h, b), Se(u.children || [], h, O, g, _, w, v, y))
          : A > 0 &&
              A & 64 &&
              P &&
              c.dynamicChildren &&
              c.dynamicChildren.length === P.length
            ? (Ve(c.dynamicChildren, P, h, g, _, w, v),
              (u.key != null || (g && u === g.subTree)) && nr(c, u, !0))
            : G(c, u, h, O, g, _, w, v, y));
    },
    Yt = (c, u, h, b, g, _, w, v, y) => {
      ((u.slotScopeIds = v),
        c == null
          ? u.shapeFlag & 512
            ? g.ctx.activate(u, h, b, w, y)
            : On(u, h, b, g, _, w, y)
          : Cs(c, u, y));
    },
    On = (c, u, h, b, g, _, w) => {
      const v = (c.component = fl(c, b, g));
      if ((bs(c) && (v.ctx.renderer = Tt), dl(v, !1, w), v.asyncDep)) {
        if ((g && g.registerDep(v, de, w), !c.el)) {
          const y = (v.subTree = k(He));
          (q(null, y, u, h), (c.placeholder = y.el));
        }
      } else de(v, c, u, h, g, _, w);
    },
    Cs = (c, u, h) => {
      const b = (u.component = c.component);
      if (qo(c, u, h))
        if (b.asyncDep && !b.asyncResolved) {
          ((u.el = c.el), ee(b, u, h));
          return;
        } else ((b.next = u), b.update());
      else ((u.el = c.el), (b.vnode = u));
    },
    de = (c, u, h, b, g, _, w) => {
      const v = () => {
        if (c.isMounted) {
          let { next: A, bu: P, u: I, parent: F, vnode: K } = c;
          {
            const Me = sr(c);
            if (Me) {
              (A && ((A.el = K.el), ee(c, A, w)),
                Me.asyncDep.then(() => {
                  be(() => {
                    c.isUnmounted || m();
                  }, g);
                }));
              return;
            }
          }
          let z = A,
            se;
          (ct(c, !1),
            A ? ((A.el = K.el), ee(c, A, w)) : (A = K),
            P && jn(P),
            (se = A.props && A.props.onVnodeBeforeUpdate) && je(se, F, A, K),
            ct(c, !0));
          const oe = Bs(c),
            Oe = c.subTree;
          ((c.subTree = oe),
            $(Oe, oe, p(Oe.el), Xt(Oe), c, g, _),
            (A.el = oe.el),
            z === null && Go(c, oe.el),
            I && be(I, g),
            (se = A.props && A.props.onVnodeUpdated) &&
              be(() => je(se, F, A, K), g));
        } else {
          let A;
          const { el: P, props: I } = u,
            { bm: F, m: K, parent: z, root: se, type: oe } = c,
            Oe = vt(u);
          (ct(c, !1),
            F && jn(F),
            !Oe && (A = I && I.onVnodeBeforeMount) && je(A, z, u),
            ct(c, !0));
          {
            se.ce &&
              se.ce._hasShadowRoot() &&
              se.ce._injectChildStyle(oe, c.parent ? c.parent.type : void 0);
            const Me = (c.subTree = Bs(c));
            ($(null, Me, h, b, c, g, _), (u.el = Me.el));
          }
          if ((K && be(K, g), !Oe && (A = I && I.onVnodeMounted))) {
            const Me = u;
            be(() => je(A, z, Me), g);
          }
          ((u.shapeFlag & 256 ||
            (z && vt(z.vnode) && z.vnode.shapeFlag & 256)) &&
            c.a &&
            be(c.a, g),
            (c.isMounted = !0),
            (u = h = b = null));
        }
      };
      c.scope.on();
      const y = (c.effect = new mi(v));
      c.scope.off();
      const m = (c.update = y.run.bind(y)),
        O = (c.job = y.runIfDirty.bind(y));
      ((O.i = c), (O.id = c.uid), (y.scheduler = () => gs(O)), ct(c, !0), m());
    },
    ee = (c, u, h) => {
      u.component = c;
      const b = c.vnode.props;
      ((c.vnode = u),
        (c.next = null),
        Yo(c, u.props, b, h),
        el(c, u.children, h),
        Ge(),
        Ls(c),
        Je());
    },
    G = (c, u, h, b, g, _, w, v, y = !1) => {
      const m = c && c.children,
        O = c ? c.shapeFlag : 0,
        A = u.children,
        { patchFlag: P, shapeFlag: I } = u;
      if (P > 0) {
        if (P & 128) {
          Zt(m, A, h, b, g, _, w, v, y);
          return;
        } else if (P & 256) {
          rt(m, A, h, b, g, _, w, v, y);
          return;
        }
      }
      I & 8
        ? (O & 16 && At(m, g, _), A !== m && f(h, A))
        : O & 16
          ? I & 16
            ? Zt(m, A, h, b, g, _, w, v, y)
            : At(m, g, _, !0)
          : (O & 8 && f(h, ""), I & 16 && Se(A, h, b, g, _, w, v, y));
    },
    rt = (c, u, h, b, g, _, w, v, y) => {
      ((c = c || ft), (u = u || ft));
      const m = c.length,
        O = u.length,
        A = Math.min(m, O);
      let P;
      for (P = 0; P < A; P++) {
        const I = (u[P] = y ? ze(u[P]) : De(u[P]));
        $(c[P], I, h, null, g, _, w, v, y);
      }
      m > O ? At(c, g, _, !0, !1, A) : Se(u, h, b, g, _, w, v, y, A);
    },
    Zt = (c, u, h, b, g, _, w, v, y) => {
      let m = 0;
      const O = u.length;
      let A = c.length - 1,
        P = O - 1;
      for (; m <= A && m <= P;) {
        const I = c[m],
          F = (u[m] = y ? ze(u[m]) : De(u[m]));
        if (Pt(I, F)) $(I, F, h, null, g, _, w, v, y);
        else break;
        m++;
      }
      for (; m <= A && m <= P;) {
        const I = c[A],
          F = (u[P] = y ? ze(u[P]) : De(u[P]));
        if (Pt(I, F)) $(I, F, h, null, g, _, w, v, y);
        else break;
        (A--, P--);
      }
      if (m > A) {
        if (m <= P) {
          const I = P + 1,
            F = I < O ? u[I].el : b;
          for (; m <= P;)
            ($(null, (u[m] = y ? ze(u[m]) : De(u[m])), h, F, g, _, w, v, y),
              m++);
        }
      } else if (m > P) for (; m <= A;) (Te(c[m], g, _, !0), m++);
      else {
        const I = m,
          F = m,
          K = new Map();
        for (m = F; m <= P; m++) {
          const ye = (u[m] = y ? ze(u[m]) : De(u[m]));
          ye.key != null && K.set(ye.key, m);
        }
        let z,
          se = 0;
        const oe = P - F + 1;
        let Oe = !1,
          Me = 0;
        const $t = new Array(oe);
        for (m = 0; m < oe; m++) $t[m] = 0;
        for (m = I; m <= A; m++) {
          const ye = c[m];
          if (se >= oe) {
            Te(ye, g, _, !0);
            continue;
          }
          let Ie;
          if (ye.key != null) Ie = K.get(ye.key);
          else
            for (z = F; z <= P; z++)
              if ($t[z - F] === 0 && Pt(ye, u[z])) {
                Ie = z;
                break;
              }
          Ie === void 0
            ? Te(ye, g, _, !0)
            : (($t[Ie - F] = m + 1),
              Ie >= Me ? (Me = Ie) : (Oe = !0),
              $(ye, u[Ie], h, null, g, _, w, v, y),
              se++);
        }
        const $s = Oe ? il($t) : ft;
        for (z = $s.length - 1, m = oe - 1; m >= 0; m--) {
          const ye = F + m,
            Ie = u[ye],
            ks = u[ye + 1],
            Ps = ye + 1 < O ? ks.el || ir(ks) : b;
          $t[m] === 0
            ? $(null, Ie, h, Ps, g, _, w, v, y)
            : Oe && (z < 0 || m !== $s[z] ? ot(Ie, h, Ps, 2) : z--);
        }
      }
    },
    ot = (c, u, h, b, g = null) => {
      const { el: _, type: w, transition: v, children: y, shapeFlag: m } = c;
      if (m & 6) {
        ot(c.component.subTree, u, h, b);
        return;
      }
      if (m & 128) {
        c.suspense.move(u, h, b);
        return;
      }
      if (m & 64) {
        w.move(c, u, h, Tt);
        return;
      }
      if (w === Y) {
        s(_, u, h);
        for (let A = 0; A < y.length; A++) ot(y[A], u, h, b);
        s(c.anchor, u, h);
        return;
      }
      if (w === rn) {
        H(c, u, h);
        return;
      }
      if (b !== 2 && m & 1 && v)
        if (b === 0)
          v.persisted && !_[Hn]
            ? s(_, u, h)
            : (v.beforeEnter(_), s(_, u, h), be(() => v.enter(_), g));
        else {
          const { leave: A, delayLeave: P, afterLeave: I } = v,
            F = () => {
              c.ctx.isUnmounted ? i(_) : s(_, u, h);
            },
            K = () => {
              const z = _._isLeaving || !!_[Hn];
              (_._isLeaving && _[Hn](!0),
                v.persisted && !z
                  ? F()
                  : A(_, () => {
                      (F(), I && I());
                    }));
            };
          P ? P(_, F, K) : K();
        }
      else s(_, u, h);
    },
    Te = (c, u, h, b = !1, g = !1) => {
      const {
        type: _,
        props: w,
        ref: v,
        children: y,
        dynamicChildren: m,
        shapeFlag: O,
        patchFlag: A,
        dirs: P,
        cacheIndex: I,
        memo: F,
      } = c;
      if (
        ((A === -2 || (m && m.hasOnce)) && (g = !1),
        v != null && (Ge(), Dt(v, null, h, c, !0), Je()),
        I != null && (!c.ctx || c.ctx === u) && (u.renderCache[I] = void 0),
        O & 256)
      ) {
        u.ctx.deactivate(c);
        return;
      }
      const K = O & 1 && P,
        z = !vt(c);
      let se;
      if ((z && (se = w && w.onVnodeBeforeUnmount) && je(se, u, c), O & 6))
        yr(c.component, h, b);
      else {
        if (O & 128) {
          c.suspense.unmount(h, b);
          return;
        }
        (K && lt(c, null, u, "beforeUnmount"),
          O & 64
            ? c.type.remove(c, u, h, Tt, b)
            : m && !m.hasOnce && (_ !== Y || (A > 0 && A & 64))
              ? At(m, u, h, !1, !0)
              : ((_ === Y && A & 384) || (!g && O & 16)) && At(y, u, h),
          b && As(c));
      }
      const oe = F != null && I == null;
      ((z && (se = w && w.onVnodeUnmounted)) || K || oe) &&
        be(() => {
          (se && je(se, u, c),
            K && lt(c, null, u, "unmounted"),
            oe && (c.el = null));
        }, h);
    },
    As = (c) => {
      const { type: u, el: h, anchor: b, transition: g } = c;
      if (u === Y) {
        br(h, b);
        return;
      }
      if (u === rn) {
        (E(c), g && !g.persisted && g.afterLeave && g.afterLeave());
        return;
      }
      const _ = () => {
        (i(h), g && !g.persisted && g.afterLeave && g.afterLeave());
      };
      if (c.shapeFlag & 1 && g && !g.persisted) {
        const { leave: w, delayLeave: v } = g,
          y = () => w(h, _);
        v ? v(c.el, _, y) : y();
      } else _();
    },
    br = (c, u) => {
      let h;
      for (; c !== u;) ((h = x(c)), i(c), (c = h));
      i(u);
    },
    yr = (c, u, h) => {
      const { bum: b, scope: g, job: _, subTree: w, um: v, m: y, a: m } = c;
      (Us(y),
        Us(m),
        b && jn(b),
        g.stop(),
        _
          ? ((_.flags |= 8), Te(w, c, u, h))
          : c.vnode.el &&
            w &&
            ((w.transition = c.vnode.transition), Te(w, c, u, h)),
        v && be(v, u),
        be(() => {
          c.isUnmounted = !0;
        }, u));
    },
    At = (c, u, h, b = !1, g = !1, _ = 0) => {
      for (let w = _; w < c.length; w++) Te(c[w], u, h, b, g);
    },
    Xt = (c) => {
      if (c.shapeFlag & 6) return Xt(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const u = x(c.anchor || c.el),
        h = u && u[bo];
      return h ? x(h) : u;
    };
  let Mn = !1;
  const Ts = (c, u, h) => {
      let b;
      (c == null
        ? u._vnode && (Te(u._vnode, null, null, !0), (b = u._vnode.component))
        : $(u._vnode || null, c, u, null, null, null, h),
        (u._vnode = c),
        Mn || ((Mn = !0), Ls(b), Ii(), (Mn = !1)));
    },
    Tt = {
      p: $,
      um: Te,
      m: ot,
      r: As,
      mt: On,
      mc: Se,
      pc: G,
      pbc: Ve,
      n: Xt,
      o: e,
    };
  return { render: Ts, hydrate: void 0, createApp: Vo(Ts) };
}
function Bn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function ct({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function sl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function nr(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (M(s) && M(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      (l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = i[r] = ze(i[r])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && nr(o, l)),
        l.type === Pn &&
          (l.patchFlag === -1 && (l = i[r] = ze(l)), (l.el = o.el)),
        l.type === He && !l.el && (l.el = o.el));
    }
}
function il(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((i = n[n.length - 1]), e[i] < d)) {
        ((t[s] = i), n.push(s));
        continue;
      }
      for (r = 0, o = n.length - 1; r < o;)
        ((l = (r + o) >> 1), e[n[l]] < d ? (r = l + 1) : (o = l));
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0;) ((n[r] = o), (o = t[o]));
  return n;
}
function sr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : sr(t);
}
function Us(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ir(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? ir(t.subTree) : null;
}
const rr = (e) => e.__isSuspense;
function rl(e, t) {
  t && t.pendingBranch
    ? M(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : uo(e);
}
const Y = Symbol.for("v-fgt"),
  Pn = Symbol.for("v-txt"),
  He = Symbol.for("v-cmt"),
  rn = Symbol.for("v-stc"),
  qe = [];
let xe = null;
function T(e = !1) {
  qe.push((xe = e ? null : []));
}
function vs() {
  (qe.pop(), (xe = qe[qe.length - 1] || null));
}
let Bt = 1;
function pn(e, t = !1) {
  ((Bt += e), e < 0 && xe && t && (xe.hasOnce = !0));
}
function or(e) {
  return (
    (e.dynamicChildren = Bt > 0 ? xe || ft : null),
    vs(),
    Bt > 0 && xe && xe.push(e),
    e
  );
}
function j(e, t, n, s, i, r) {
  return or(S(e, t, n, s, i, r, !0));
}
function _e(e, t, n, s, i) {
  return or(k(e, t, n, s, i, !0));
}
function Wt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const lr = ({ key: e }) => e ?? null,
  on = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? te(e) || me(e) || L(e)
        ? { i: fe, r: e, k: t, f: !!n }
        : e
      : null
  );
function S(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === Y ? 0 : 1,
  o = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lr(t),
    ref: t && on(t),
    scopeId: Ri,
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
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: fe,
  };
  return (
    l
      ? (gn(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= te(n) ? 8 : 16),
    Bt > 0 &&
      !o &&
      xe &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      xe.push(a),
    a
  );
}
const k = ol;
function ol(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === Mo) && (e = He), Wt(e))) {
    const l = St(e, t, !0);
    return (
      n && gn(l, n),
      Bt > 0 &&
        !r &&
        xe &&
        (l.shapeFlag & 6 ? (xe[xe.indexOf(e)] = l) : xe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((ml(e) && (e = e.__vccOpts), t)) {
    t = ll(t);
    let { class: l, style: a } = t;
    (l && !te(l) && (t.class = qt(l)),
      W(a) && (ps(a) && !M(a) && (a = re({}, a)), (t.style = wn(a))));
  }
  const o = te(e) ? 1 : rr(e) ? 128 : Tn(e) ? 64 : W(e) ? 4 : L(e) ? 2 : 0;
  return S(e, t, n, s, i, o, r, !0);
}
function ll(e) {
  return e ? (ps(e) || Yi(e) ? re({}, e) : e) : null;
}
function St(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e,
    d = t ? cl(i || {}, t) : i,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && lr(d),
      ref:
        t && t.ref
          ? n && r
            ? M(r)
              ? r.concat(on(t))
              : [r, on(t)]
            : on(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Y ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && St(e.ssContent),
      ssFallback: e.ssFallback && St(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
      cacheIndex: e.cacheIndex,
    };
  return (a && s && _s(f, a.clone(f)), f);
}
function ue(e = " ", t = 0) {
  return k(Pn, null, e, t);
}
function ws(e, t) {
  const n = k(rn, null, e);
  return ((n.staticCount = t), n);
}
function Ks(e = "", t = !1) {
  return t ? (T(), _e(He, null, e)) : k(He, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean"
    ? k(He)
    : M(e)
      ? k(Y, null, e.slice())
      : Wt(e)
        ? ze(e)
        : k(Pn, null, String(e));
}
function ze(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : St(e);
}
function gn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (M(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), gn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Yi(t)
        ? (t._ctx = fe)
        : i === 3 &&
          fe &&
          (fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else if (L(t)) {
    if (s & 65) {
      gn(e, { default: t });
      return;
    }
    ((t = { default: t, _ctx: fe }), (n = 32));
  } else ((t = String(t)), s & 64 ? ((n = 16), (t = [ue(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function cl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = qt([t.class, s.class]));
      else if (i === "style") t.style = wn([t.style, s.style]);
      else if (bn(i)) {
        const r = t[i],
          o = s[i];
        o && r !== o && !(M(r) && r.includes(o))
          ? (t[i] = r ? [].concat(r, o) : o)
          : o == null && r == null && !yn(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Ee(e, t, 7, [n, s]);
}
const al = zi();
let ul = 0;
function fl(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || al,
    r = {
      uid: ul++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ir(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Xi(s, i),
      emitsOptions: Ki(s, i),
      emit: null,
      emitted: null,
      propsDefaults: N,
      inheritAttrs: s.inheritAttrs,
      ctx: N,
      data: N,
      props: N,
      attrs: N,
      slots: N,
      refs: N,
      setupState: N,
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
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Wo.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ge = null;
const cr = () => ge || fe;
let mn, zt;
{
  const e = vn(),
    t = (n, s) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
        }
      );
    };
  ((mn = t("__VUE_INSTANCE_SETTERS__", (n) => (ge = n))),
    (zt = t("__VUE_SSR_SETTERS__", (n) => (Ut = n))));
}
const Jt = (e) => {
    const t = ge;
    return (
      mn(e),
      e.scope.on(),
      () => {
        (e.scope.off(), mn(t));
      }
    );
  },
  qs = () => {
    (ge && ge.scope.off(), mn(null));
  };
function ar(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function dl(e, t = !1, n = !1) {
  t && zt(t);
  const { props: s, children: i } = e.vnode,
    r = ar(e);
  (Jo(e, s, r, t), Qo(e, i, n || t));
  const o = r ? hl(e, t) : void 0;
  return (t && zt(!1), o);
}
function hl(e, t) {
  const n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Io)));
  const { setup: s } = n;
  if (s) {
    Ge();
    const i = (e.setupContext = s.length > 1 ? gl(e) : null),
      r = Jt(e),
      o = Gt(s, e, 0, [e.props, i]),
      l = ci(o);
    if ((Je(), r(), (l || e.sp) && !vt(e) && Fi(e), l)) {
      if ((o.then(qs, qs), t))
        return o
          .then((a) => {
            zt(!0);
            try {
              Gs(e, a, t);
            } finally {
              zt(!1);
            }
          })
          .catch((a) => {
            An(a, e, 0);
          });
      e.asyncDep = o;
    } else Gs(e, o);
  } else ur(e);
}
function Gs(e, t, n) {
  (L(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : W(t) && (e.setupState = Ei(t)),
    ur(e));
}
function ur(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Fe);
  {
    const i = Jt(e);
    Ge();
    try {
      Ro(e);
    } finally {
      (Je(), i());
    }
  }
}
const pl = {
  get(e, t) {
    return (ae(e, "get", ""), e[t]);
  },
};
function gl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, pl),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function En(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ei(Qr(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Ft) return Ft[n](e);
          },
          has(t, n) {
            return n in t || n in Ft;
          },
        }))
    : e.proxy;
}
function ml(e) {
  return L(e) && "__vccOpts" in e;
}
const fr = (e, t) => io(e, t, Ut);
function ns(e, t, n) {
  try {
    pn(-1);
    const s = arguments.length;
    return s === 2
      ? W(t) && !M(t)
        ? Wt(t)
          ? k(e, null, [t])
          : k(e, t)
        : k(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && Wt(n) && (n = [n]),
        k(e, t, n));
  } finally {
    pn(1);
  }
}
const _l = "3.5.43";
let ss;
const Js = typeof window < "u" && window.trustedTypes;
if (Js)
  try {
    ss = Js.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const dr = ss ? (e) => ss.createHTML(e) : (e) => e,
  bl = "http://www.w3.org/2000/svg",
  yl = "http://www.w3.org/1998/Math/MathML",
  We = typeof document < "u" ? document : null,
  Ys = We && We.createElement("template"),
  xl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? We.createElementNS(bl, e)
          : t === "mathml"
            ? We.createElementNS(yl, e)
            : n
              ? We.createElement(e, { is: n })
              : We.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => We.createTextNode(e),
    createComment: (e) => We.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => We.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, r) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));
        );
      else {
        Ys.innerHTML = dr(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = Ys.content;
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
  vl = Symbol("_vtc");
function wl(e, t, n) {
  const s = e[vl];
  (s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const _n = Symbol("_vod"),
  hr = Symbol("_vsh"),
  Sl = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[_n] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Et(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Et(e, !0), s.enter(e))
            : s.leave(e, () => {
                Et(e, !1);
              })
          : Et(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Et(e, t);
    },
  };
function Et(e, t) {
  ((e.style.display = t ? e[_n] : "none"), (e[hr] = !t));
}
const Cl = Symbol(""),
  Al = /(?:^|;)\s*display\s*:/;
function Tl(e, t, n) {
  const s = e.style,
    i = te(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (te(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Mt(s, l, "");
        }
      else for (const o in t) n[o] == null && Mt(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null
        ? kl(e, o, !te(t) && t ? t[o] : void 0, l) || Mt(s, o, l)
        : Mt(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Cl];
      (o && (n += ";" + o), (s.cssText = n), (r = Al.test(n)));
    }
  } else t && e.removeAttribute("style");
  _n in e && ((e[_n] = r ? s.display : ""), e[hr] && (s.display = "none"));
}
const nn = /\s*!important$/;
function Mt(e, t, n) {
  if (M(n)) n.forEach((s) => Mt(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--")))
    nn.test(n)
      ? e.setProperty(t, n.replace(nn, ""), "important")
      : e.setProperty(t, n);
  else {
    const s = $l(e, t);
    nn.test(n)
      ? e.setProperty(st(s), n.replace(nn, ""), "important")
      : (e[s] = n);
  }
}
const Zs = ["Webkit", "Moz", "ms"],
  Wn = {};
function $l(e, t) {
  const n = Wn[t];
  if (n) return n;
  let s = Ce(t);
  if (s !== "filter" && s in e) return (Wn[t] = s);
  s = fi(s);
  for (let i = 0; i < Zs.length; i++) {
    const r = Zs[i] + s;
    if (r in e) return (Wn[t] = r);
  }
  return t;
}
function kl(e, t, n, s) {
  return (
    e.tagName === "TEXTAREA" &&
    (t === "width" || t === "height") &&
    te(s) &&
    n === s
  );
}
const Xs = "http://www.w3.org/1999/xlink";
function Qs(e, t, n, s, i, r = Er(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Xs, t.slice(6, t.length))
      : e.setAttributeNS(Xs, t, n)
    : n == null || (r && !hi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : Pe(n) ? String(n) : n);
}
function ei(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? dr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
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
      ? (n = hi(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(i || t);
}
function Pl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function El(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ti = Symbol("_vei");
function Ol(e, t, n, s, i = null) {
  const r = e[ti] || (e[ti] = {}),
    o = r[t];
  if (s && o) o.value = s;
  else {
    const [l, a] = jl(t);
    if (s) {
      const d = (r[t] = Dl(s, i));
      Pl(e, l, d, a);
    } else o && (El(e, l, o, a), (r[t] = void 0));
  }
}
const Ml = /(Once|Passive|Capture)$/,
  Il = /^on:?(?:Once|Passive|Capture)$/;
function jl(e) {
  let t, n;
  for (; (n = e.match(Ml)) && !Il.test(e);)
    (t || (t = {}),
      (e = e.slice(0, e.length - n[1].length)),
      (t[n[1].toLowerCase()] = !0));
  return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t];
}
let zn = 0;
const Rl = Promise.resolve(),
  Ll = () => zn || (Rl.then(() => (zn = 0)), (zn = Date.now()));
function Dl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    const i = n.value;
    if (M(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        (r.call(s), (s._stopped = !0));
      };
      const o = i.slice(),
        l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const d = o[a];
        d && Ee(d, t, 5, l);
      }
    } else Ee(i, t, 5, [s]);
  };
  return ((n.value = e), (n.attached = Ll()), n);
}
const ni = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Fl = (e, t, n, s, i, r) => {
    const o = i === "svg";
    t === "class"
      ? wl(e, s, o)
      : t === "style"
        ? Tl(e, n, s)
        : bn(t)
          ? yn(t) || Ol(e, t, n, s, r)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Nl(e, t, s, o)
              )
            ? (ei(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Qs(e, t, s, o, r, t !== "value"))
            : e._isVueCE &&
                (Hl(e, t) ||
                  (e._def.__asyncLoader && (/[A-Z]/.test(t) || !te(s))))
              ? ei(e, Ce(t), s, r, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Qs(e, t, s, o));
  };
function Nl(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && ni(t) && L(n))
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
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ni(t) && te(n) ? !1 : t in e;
}
function Hl(e, t) {
  const n = e._def.props;
  if (!n) return !1;
  const s = Ce(t);
  return Array.isArray(n)
    ? n.some((i) => Ce(i) === s)
    : Object.keys(n).some((i) => Ce(i) === s);
}
const Vl = re({ patchProp: Fl }, xl);
let si;
function Bl() {
  return si || (si = tl(Vl));
}
const Wl = (...e) => {
  const t = Bl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = Ul(s);
      if (!i) return;
      const r = t._component;
      (!L(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = ""));
      const o = n(i, !1, zl(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function zl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ul(e) {
  return te(e) ? document.querySelector(e) : e;
}
let yt = {
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
};
const Ct = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  Kl = {},
  ql = { class: "relative flex flex-col space-y-5 md:space-y-10 md:w-2/3" };
function Gl(e, t) {
  return (T(), j("div", ql, [tt(e.$slots, "default")]));
}
const ht = Ct(Kl, [["render", Gl]]),
  Jl = {
    target: "_blank",
    class:
      "flex items-center hover:cursor-pointer gap-x-2 px-4 py-3 rounded-lg bg-green-200 hover:shadow-xl",
  },
  pr = Z({
    __name: "PrimaryLink",
    props: { href: {} },
    setup(e) {
      return (t, n) => (
        T(),
        j("a", Jl, [tt(t.$slots, "icon"), tt(t.$slots, "default")])
      );
    },
  }),
  Yl = {},
  Zl = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
  };
function Xl(e, t) {
  return (
    T(),
    j("svg", Zl, [
      ...(t[0] ||
        (t[0] = [
          ws(
            '<g stroke-width="1" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="200" stroke-dashoffset="200" d="M10 9h4m-4 7h12m-12 4h12m-12 4h4m-6 5h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2"><animate attributeName="stroke-dashoffset" from="200" to="0" dur="0.8s" fill="freeze"></animate></path><circle cx="22" cy="9" r="0.5" fill="currentColor" opacity="0"><animate attributeName="opacity" begin="0.8s" dur="0.6s" from="0" to="1" fill="freeze"></animate><animate attributeName="r" begin="0.8s" dur="0.4s" values="0.2;1.1;0.5" fill="freeze"></animate></circle></g>',
            1,
          ),
        ])),
    ])
  );
}
const Ql = Ct(Yl, [["render", Xl]]),
  ec = {
    target: "_blank",
    class:
      "flex border-box hover:border-green-400 hover:cursor-pointer items-center gap-x-2 px-4 py-3 rounded-lg border text-secondary-text border-green-200",
  },
  gr = Z({
    __name: "SecondaryLink",
    props: { href: {} },
    setup(e) {
      return (t, n) => (
        T(),
        j("a", ec, [tt(t.$slots, "icon"), tt(t.$slots, "default")])
      );
    },
  }),
  tc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  nc = Z({
    __name: "GitHub",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", tc, [
          ...(n[0] ||
            (n[0] = [
              ws(
                '<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0"></animate></path></g>',
                1,
              ),
            ])),
        ])
      );
    },
  }),
  sc = { class: "text-xl text-center md:text-8xl font-bold font-quantico" },
  ic = { class: "green-gradient" },
  rc = { class: "text-lg md:text-2xl text-center md:text-left" },
  oc = { class: "flex flex-col items-center mt-20" },
  lc = { class: "text-md mb-10 font-bold" },
  cc = { class: "flex flex-col gap-5 md:-mb-5 md:gap-8 md:flex-row" },
  ac = Z({
    __name: "Introduction",
    setup(e) {
      return (t, n) => (
        T(),
        _e(
          ht,
          {
            class:
              "text-text md:mt-0 md:h-screen md:w-screen flex items-center mt-20 md:justify-center",
          },
          {
            default: X(() => [
              S("p", sc, [
                ue(Q(ie(yt).firstname) + " ", 1),
                S("span", ic, Q(ie(yt).lastname), 1),
              ]),
              S("p", rc, Q(ie(yt).expertise), 1),
              S("div", oc, [
                S("p", lc, Q(ie(yt).slogan), 1),
                S("div", cc, [
                  k(
                    pr,
                    {
                      title: "Resume",
                      href: "/CV - Abderrahim El Ouariachi.pdf",
                      class: "text-black",
                    },
                    {
                      icon: X(() => [
                        k(Ql, {
                          class: "size-5 fill-transparent stroke-black",
                        }),
                      ]),
                      default: X(() => [n[0] || (n[0] = ue(" Resume ", -1))]),
                      _: 1,
                    },
                  ),
                  k(
                    gr,
                    {
                      title: "Github Account",
                      href: "https://github.com/ItsAbderrahimEl",
                    },
                    {
                      icon: X(() => [
                        k(nc, {
                          class: "size-5 fill-transparent stroke-white",
                        }),
                      ]),
                      default: X(() => [n[1] || (n[1] = ue(" GitHub ", -1))]),
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
  });
const at = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
const ii = (...e) =>
  e
    .filter((t, n, s) => !!t && t.trim() !== "" && s.indexOf(t) === n)
    .join(" ")
    .trim();
function Un(e) {
  return e != null;
}
function uc(e, t = {}) {
  const n = t.attributeNames ?? {},
    s = (x) => n[x] ?? x,
    i = e.size ?? e.width ?? at.width,
    r = e.size ?? e.height ?? at.height,
    o =
      e.aliases
        ?.filter((x) => typeof x == "string" && x.trim() !== "")
        .map((x) => `lucide-${x}`) ?? [],
    l = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
    a = t.className?.split(" ").filter(Boolean) ?? [],
    d = t.includeDefaultClasses === !1 ? ii(...a) : ii("lucide", ...l, ...a),
    f = t.absoluteStrokeWidth
      ? (Number(t.strokeWidth ?? at["stroke-width"]) *
          Number(e.size ?? e.width ?? at.width)) /
        Number(t.size ?? t.width ?? at.width)
      : (t.strokeWidth ?? at["stroke-width"]);
  return [
    "svg",
    {
      ...Object.entries(at).reduce((x, [C, R]) => ((x[s(C)] = R), x), {}),
      ...("color" in t && t.color && { [s("stroke")]: t.color }),
      ...("size" in t &&
        Un(t.size) && { [s("width")]: t.size, [s("height")]: t.size }),
      ...("width" in t && Un(t.width) && { [s("width")]: t.width }),
      ...("height" in t && Un(t.height) && { [s("height")]: t.height }),
      [s("stroke-width")]: f,
      ...(d && { [s("class")]: d }),
      [s("viewBox")]: `0 0 ${i} ${r}`,
      ...(t.hasA11yProp === !1 ? { [s("aria-hidden")]: "true" } : {}),
      ...("attributes" in t && t.attributes),
    },
    e.node.map((x) => {
      const [C, R, $] = x,
        B = t.nonScalingStroke
          ? { [s("vector-effect")]: "non-scaling-stroke", ...R }
          : R;
      return $ ? [C, B, $] : [C, B];
    }),
  ];
}
const fc = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  return !1;
};
const sn = (e) => e === "";
const dc = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const hc = Symbol("lucide-icons");
function pc() {
  return Lt(hc, {});
}
const gc = (
  {
    name: e,
    iconNode: t,
    "icon-node": n,
    icon: s = { name: e && dc(e), node: t ?? n ?? [], size: 24, aliases: [] },
    absoluteStrokeWidth: i,
    "absolute-stroke-width": r,
    nonScalingStroke: o,
    "non-scaling-stroke": l,
    strokeWidth: a,
    "stroke-width": d,
    size: f,
    width: p = f,
    height: x = f,
    color: C,
    ...R
  },
  { slots: $ },
) => {
  const {
      size: B,
      color: q,
      strokeWidth: D = 2,
      absoluteStrokeWidth: H = !1,
      nonScalingStroke: E = !1,
      class: ne = "",
    } = pc(),
    ve = sn(i) || sn(r) || i === !0 || r === !0 || H === !0,
    we = sn(o) || sn(l) || o === !0 || l === !0 || E === !0;
  delete R.class;
  const Se = $.default?.(),
    [, gt, Ve = []] = uc(s, {
      color: C ?? q,
      width: p ?? f ?? B,
      height: x ?? f ?? B,
      strokeWidth: a ?? d ?? D,
      absoluteStrokeWidth: ve,
      nonScalingStroke: we,
      className: ne,
      hasA11yProp: (Se != null && Se.length > 0) || fc(R),
      attributes: R,
    });
  return ns("svg", gt, [...Ve.map(([it, mt]) => ns(it, mt)), ...(Se ?? [])]);
};
function mc(e, t = []) {
  const n = typeof e == "string" ? { name: e, node: t } : e;
  return (s, { slots: i }) =>
    ns(gc, { ...s, icon: n }, i.default ? { default: i.default } : void 0);
}
const _c = {
    name: "arrow-down",
    size: 24,
    node: [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
    ],
  },
  bc = mc(_c),
  yc = {
    class:
      "border-l-4 bg-secondary/10 border border-green-200 mt-5 p-5 rounded-lg",
  },
  xc = { class: "flex justify-between" },
  vc = { class: "text-white font-bold text text-lg" },
  wc = ["innerHTML"],
  Ss = Z({
    __name: "Note",
    props: jo(
      { title: {}, content: {} },
      { modelValue: { type: Boolean, default: !1 }, modelModifiers: {} },
    ),
    emits: ["update:modelValue"],
    setup(e) {
      const t = Bo(e, "modelValue");
      return (n, s) => (
        T(),
        j("div", yc, [
          S("div", xc, [
            S("h5", vc, Q(e.title), 1),
            S(
              "div",
              {
                onClick: s[0] || (s[0] = (i) => (t.value = !t.value)),
                class: "hover:cursor-pointer",
              },
              [
                k(
                  ie(bc),
                  {
                    class: qt({
                      "rotate-180 transition-all duration-500": t.value,
                    }),
                    color: "#fff",
                  },
                  null,
                  8,
                  ["class"],
                ),
              ],
            ),
          ]),
          fo(S("p", { class: "mt-5", innerHTML: e.content }, null, 8, wc), [
            [Sl, t.value],
          ]),
        ])
      );
    },
  }),
  Sc = ["id"],
  Cc = { class: "green-gradient" },
  pt = Z({
    __name: "Title",
    props: { id: { default: "#" }, normal: {}, colored: {} },
    setup(e) {
      return (t, n) => (
        T(),
        j(
          "h1",
          {
            id: e.id,
            class: "block text-3xl md:text-5xl font-bold font-quantico",
          },
          [ue(Q(e.normal) + " ", 1), S("span", Cc, Q(e.colored), 1)],
          8,
          Sc,
        )
      );
    },
  }),
  Ac = {},
  Tc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  };
function $c(e, t) {
  return (
    T(),
    j("svg", Tc, [
      ...(t[0] ||
        (t[0] = [
          S(
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
const kc = Ct(Ac, [["render", $c]]),
  Pc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  Ec = Z({
    __name: "Shield",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", Pc, [
          ...(n[0] ||
            (n[0] = [
              S(
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
  Oc = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  Mc = Z({
    __name: "Terminal",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", Oc, [
          ...(n[0] ||
            (n[0] = [
              S(
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
  Ic = {},
  jc = {
    class:
      "flex flex-col space-y-2 bg-secondary/10 rounded-xl p-5 border-gray-150 border-1 border-gray-800 hover:border-green-300",
  },
  Rc = { class: "p-1 bg-green-200/10 rounded-md w-fit h-fit" },
  Lc = { class: "text-lg font-bold" },
  Dc = { class: "text-sm" };
function Fc(e, t) {
  return (
    T(),
    j("div", jc, [
      S("div", Rc, [tt(e.$slots, "icon")]),
      S("div", Lc, [tt(e.$slots, "title")]),
      S("div", Dc, [tt(e.$slots, "description")]),
    ])
  );
}
const Kn = Ct(Ic, [["render", Fc]]),
  Nc = ["innerHTML"],
  Hc = { class: "grid mt-5 grid-cols-1 md:grid-cols-3 gap-5" },
  Vc = Z({
    __name: "About",
    setup(e) {
      return (t, n) => (
        T(),
        _e(ht, null, {
          default: X(() => [
            k(pt, { id: "About", normal: "Who", colored: "I Am" }),
            S(
              "p",
              {
                class: "space-y-5 md:space-y-1 md:text-lg",
                innerHTML: ie(yt).biography,
              },
              null,
              8,
              Nc,
            ),
            S("div", Hc, [
              k(Kn, null, {
                icon: X(() => [k(kc, { class: "size-10 fill-green-300" })]),
                title: X(() => [
                  ...(n[0] || (n[0] = [ue(" Web Development ", -1)])),
                ]),
                description: X(() => [
                  ...(n[1] ||
                    (n[1] = [
                      ue(
                        " Building robust full-stack apps with Laravel, Vue.js, and modern tooling. ",
                        -1,
                      ),
                    ])),
                ]),
                _: 1,
              }),
              k(Kn, null, {
                icon: X(() => [k(Ec, { class: "size-10 fill-green-300" })]),
                title: X(() => [
                  ...(n[2] || (n[2] = [ue(" Penetration Testing ", -1)])),
                ]),
                description: X(() => [
                  ...(n[3] ||
                    (n[3] = [
                      ue(
                        " Identifying vulnerabilities and securing systems through ethical hacking. ",
                        -1,
                      ),
                    ])),
                ]),
                _: 1,
              }),
              k(Kn, null, {
                icon: X(() => [
                  k(Mc, { class: "size-10 fill-green-300 stroke-green-300" }),
                ]),
                title: X(() => [
                  ...(n[4] || (n[4] = [ue(" Clean Code ", -1)])),
                ]),
                description: X(() => [
                  ...(n[5] ||
                    (n[5] = [
                      ue(
                        " Writing maintainable, well-tested, and reusable code. ",
                        -1,
                      ),
                    ])),
                ]),
                _: 1,
              }),
            ]),
            k(Ss, { title: "Why Both?", content: ie(yt).whyboth }, null, 8, [
              "content",
            ]),
          ]),
          _: 1,
        })
      );
    },
  });
let Bc = [
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
  Wc = [
    { id: 1, name: "English", proficiency: "Professional" },
    { id: 2, name: "Spanish", proficiency: "Professional" },
    { id: 3, name: "French", proficiency: "Professional" },
    { id: 4, name: "Arabic", proficiency: "Native" },
    { id: 5, name: "Amazigh", proficiency: "Native" },
  ];
const zc = {
    class: "grid grid-cols-1 md:grid-cols-2 gap-20 md:text-lg w-full",
  },
  Uc = { class: "text-xl flex text-white font-bold mb-5 items-center gap-x-2" },
  Kc = { class: "flex flex-wrap gap-3 text-sm ml-5" },
  qc = ["href"],
  Gc = { class: "text-sm text-center text-black" },
  Jc = {
    class: "border border-gray-800 bg-secondary/10 p-5 rounded-lg w-full mt-10",
  },
  Yc = {
    class: "flex flex-col md:flex-row gap-y-5 items-center justify-evenly",
  },
  Zc = { class: "flex flex-col items-center" },
  Xc = { class: "text-white" },
  Qc = { class: "text-sm text-gray-500" },
  ea = Z({
    __name: "Expertise",
    setup(e) {
      return (t, n) => (
        T(),
        _e(ht, null, {
          default: X(() => [
            k(pt, { id: "Expertise", normal: "What I", colored: "Know" }),
            S("div", zc, [
              (T(!0),
              j(
                Y,
                null,
                Ae(
                  ie(Bc),
                  (s) => (
                    T(),
                    j(
                      "div",
                      {
                        key: s.id,
                        class:
                          "col-span-1 border border-gray-800 bg-secondary/10 p-5 rounded-lg",
                      },
                      [
                        S("h2", Uc, [
                          n[0] ||
                            (n[0] = S(
                              "span",
                              {
                                class:
                                  "size-2 animate-pulse bg-green-200 rounded-full",
                              },
                              null,
                              -1,
                            )),
                          ue(" " + Q(s.name), 1),
                        ]),
                        S("div", Kc, [
                          (T(!0),
                          j(
                            Y,
                            null,
                            Ae(
                              s.skills,
                              (i) => (
                                T(),
                                j(
                                  "a",
                                  {
                                    key: i.id,
                                    class:
                                      "bg-green-200 px-6 py-2 border border-transparent hover:border hover:-translate-y-1 flex items-center justify-center rounded-lg transition-transform duration-300",
                                    href: i.url,
                                    target: "_blank",
                                  },
                                  [S("span", Gc, Q(i.name), 1)],
                                  8,
                                  qc,
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
            S("div", Jc, [
              n[1] ||
                (n[1] = S(
                  "h5",
                  { class: "text-white text-xl font-bold mb-5" },
                  " Languages ",
                  -1,
                )),
              S("div", Yc, [
                (T(!0),
                j(
                  Y,
                  null,
                  Ae(
                    ie(Wc),
                    (s) => (
                      T(),
                      j("div", Zc, [
                        S("span", Xc, Q(s.name), 1),
                        S("span", Qc, Q(s.proficiency), 1),
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
  ta = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  na = Z({
    __name: "Email",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", ta, [
          ...(n[0] ||
            (n[0] = [
              ws(
                '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="66" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"></animate></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" to="0"></animate></path></g>',
                1,
              ),
            ])),
        ])
      );
    },
  }),
  sa = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  ia = Z({
    __name: "Phone",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", sa, [
          ...(n[0] ||
            (n[0] = [
              S(
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
                  S("animate", {
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
  ra = { class: "space-y-5 md:flex md:flex-col md:items-center md:mb-10" },
  oa = { class: "flex flex-col md:flex-row gap-5 items-center justify-center" },
  la = Z({
    __name: "Contact",
    setup(e) {
      return (t, n) => (
        T(),
        _e(ht, null, {
          default: X(() => [
            k(pt, { id: "Contact", normal: "Get In", colored: "Touch" }),
            S("div", ra, [
              n[2] ||
                (n[2] = S(
                  "p",
                  { class: "text-center md:text-lg md:max-w-2/3" },
                  " Whether you're hiring, building something interesting, or just want to talk security and code — Reach out.",
                  -1,
                )),
              S("div", oa, [
                k(
                  pr,
                  {
                    href: "mailto:abderahimouriachi@gmail.com",
                    title: "Email",
                    class: "text-black",
                  },
                  {
                    icon: X(() => [k(na, { class: "size-5" })]),
                    default: X(() => [n[0] || (n[0] = ue(" Say Hello! ", -1))]),
                    _: 1,
                  },
                ),
                k(
                  gr,
                  {
                    href: "tel:+212623960018",
                    title: "Phone Number",
                    class: "text-white",
                  },
                  {
                    icon: X(() => [k(ia, { class: "size-5" })]),
                    default: X(() => [
                      n[1] || (n[1] = ue(" Give me a call ", -1)),
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
  ca = "/assets/pattern1-D_tfJB0n.jpg",
  aa = "/assets/pattern2-BbT-sq1u.gif",
  ua = "/assets/pattern3-CMb-Rta2.png",
  fa = "/assets/pattern4-ChNpF9dB.png",
  da = "/assets/pattern5-Cb0nh9E9.png",
  ha = "/assets/pattern6-4it-giaA.png",
  pa = "/assets/pattern7-BkU5glDf.png";
let ri = [
  {
    id: 7,
    name: "Obsidian Pentest Vault",
    pattern: pa,
    description:
      "Designed a reusable Obsidian vault template that centralizes penetration testing documentation, asset relationships, task tracking, and reporting.",
    url: "https://itsabderrahimel.github.io/obsidian-pentest-vault/",
  },
  {
    id: 6,
    name: "Cybersecurity WriteUps",
    pattern: ha,
    description:
      "A curated collection of in-depth writeup's for some of the most challenging machines on HackTheBox, covering exploitation techniques, privilege escalation, and CTF methodologies.",
    url: "https://itsabderrahimel.github.io/Cybersecurity-Writeups/",
  },
  {
    id: 5,
    name: "PenGate",
    pattern: ca,
    description: `
            A collaborative forum for penetration testers to share knowledge and techniques, built with Laravel, Vue.js, and Inertia.js in a Dockerized environment using Laravel Sail.
        `,
    url: "https://itsabderrahimel.github.io/PenGate/",
  },
  {
    id: 4,
    name: "Guess Royal Game CTF",
    pattern: aa,
    description: `
            A Laravel-based guessing game designed as a hard CTF challenge demonstrating second-order SQL injection risks, emphasizing secure query handling and safe data persistence.
        `,
    url: "https://itsabderrahimel.github.io/Web-Security-Challenges/",
  },
  {
    id: 3,
    name: "Cinematic Odyssey",
    pattern: ua,
    description: `
            A web app that lets users browse and manage favorite movies, TV shows, and actors using TMDB data, built with Laravel, Livewire, and Tailwind CSS for a responsive, interactive experience.
        `,
    url: "https://github.com/ItsAbderrahimEl/Cinematic_Odyssey",
  },
  {
    id: 2,
    name: "BirdBoard",
    pattern: fa,
    description: `
            A project and task collaboration platform built with Laravel, Blade, Tailwind CSS, and Alpine.js, enabling teams to manage projects, track tasks, and collaborate with a real-time activity feed.
        `,
    url: "https://itsabderrahimel.github.io/BirdBoard/",
  },
  {
    id: 1,
    name: "Code Katas",
    pattern: da,
    description: `
            A collection of PHP exercises using PHPUnit to practice Test-Driven Development, improve problem-solving, and build strong habits in clean, testable code.
        `,
    url: "https://itsabderrahimel.github.io/CodeKatas/",
  },
];
function mr(e, t) {
  return (e || (e = {}), (e._resolver = t), e);
}
function ga(e) {
  return mr(e, "person");
}
function ma(e) {
  return mr(e, "softwareApp");
}
const _a = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  ba = Z({
    __name: "ExternalLink",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", _a, [
          ...(n[0] ||
            (n[0] = [
              S(
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
  ya = {
    class:
      "border border-gray-800 bg-secondary/10 hover:border-green-200 rounded-lg p-5 flex flex-col gap-y-5 group",
  },
  xa = ["src", "alt"],
  va = { class: "flex flex-col bg-black/10" },
  wa = ["href"],
  Sa = { class: "text-white text-xl font-bold" },
  Ca = { class: "text-sm" },
  Aa = Z({
    __name: "SingleProject",
    props: { project: {} },
    setup(e) {
      return (t, n) => (
        T(),
        j("div", ya, [
          S(
            "img",
            {
              src: e.project.pattern,
              alt: e.project.name,
              class:
                "w-full h-60 md:max-w-90 rounded-xl object-cover group-hover:scale-105 transition-transform duration-500",
            },
            null,
            8,
            xa,
          ),
          S("div", va, [
            S(
              "a",
              {
                href: e.project.url,
                target: "_blank",
                class: "flex justify-between items-center mb-1",
              },
              [
                S("h5", Sa, Q(e.project.name), 1),
                k(ba, { class: "stroke-green-200 size-5" }),
              ],
              8,
              wa,
            ),
            S("p", Ca, Q(e.project.description), 1),
          ]),
        ])
      );
    },
  }),
  Ta = {
    class:
      "grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:p-5 md:mt-5",
  },
  $a = Z({
    __name: "Projects",
    setup(e) {
      return (
        ri.forEach((t) => {
          ma({
            url: t.url,
            name: t.name,
            operatingSystem: "Linux",
            images: [t.pattern],
            description: t.description,
          });
        }),
        (t, n) => (
          T(),
          _e(ht, null, {
            default: X(() => [
              k(pt, { id: "Projects", normal: "My", colored: "Craft" }),
              S("div", Ta, [
                (T(!0),
                j(
                  Y,
                  null,
                  Ae(
                    ie(ri),
                    (s) => (
                      T(),
                      _e(Aa, { key: s.id, project: s }, null, 8, ["project"])
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
let ka = [
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
const Pa = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  Ea = Z({
    __name: "School",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", Pa, [
          ...(n[0] ||
            (n[0] = [
              S(
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
  Oa = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  _r = Z({
    __name: "Triangle",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", Oa, [
          ...(n[0] ||
            (n[0] = [
              S(
                "g",
                { "fill-rule": "evenodd" },
                [
                  S("path", {
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
  Ma = {
    class:
      "border-1 flex gap-x-10 border-gray-800 bg-secondary/10 hover:border-green-200 rounded-lg p-5",
  },
  Ia = { class: "hidden md:block bg-green-100/10 rounded-md p-2 w-fit h-fit" },
  ja = { class: "space-y-5 w-full" },
  Ra = { class: "flex justify-between items-baseline gap-x-1 w-full" },
  La = { class: "text-white text-xl font-bold" },
  Da = ["href"],
  Fa = { class: "text-green-200 text-sm" },
  Na = { class: "space-y-2" },
  Ha = { class: "flex gap-x-1" },
  Va = { class: "text-sm w-full" },
  Ba = Z({
    __name: "SingleEducation",
    props: { education: {} },
    setup(e) {
      return (t, n) => (
        T(),
        j("div", Ma, [
          S("div", Ia, [k(Ea, { class: "fill-green-200 size-8" })]),
          S("div", ja, [
            S("div", Ra, [
              S("div", null, [
                S("h5", La, Q(e.education.studied), 1),
                S(
                  "a",
                  {
                    href: e.education.site,
                    target: "_blank",
                    class: "text-sm text-green-200",
                  },
                  Q(e.education.institution),
                  9,
                  Da,
                ),
              ]),
              S("span", Fa, Q(e.education.duration), 1),
            ]),
            S("ul", Na, [
              (T(!0),
              j(
                Y,
                null,
                Ae(
                  e.education.description,
                  (s) => (
                    T(),
                    j("li", Ha, [
                      k(_r, {
                        class: "stroke-green-200 size-3 rotate-90 mt-1",
                      }),
                      S("span", Va, Q(s), 1),
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
  Wa = { class: "w-full space-y-10 md:space-y-15 md:text-lg md:p-5" },
  za = Z({
    __name: "Education",
    setup(e) {
      return (t, n) => (
        T(),
        _e(ht, null, {
          default: X(() => [
            k(pt, {
              id: "Education",
              normal: "Where I've",
              colored: "Learned",
            }),
            S("div", Wa, [
              (T(!0),
              j(
                Y,
                null,
                Ae(
                  ie(ka),
                  (s) => (
                    T(),
                    _e(Ba, { key: s.id, education: s }, null, 8, ["education"])
                  ),
                ),
                128,
              )),
            ]),
            k(Ss, {
              title: "Avid & Lifelong Reader",
              content:
                "A lifelong reader across penetration testing, web development, design, martial arts, and Islamic religion — because building strong systems and building strong character draw from the same discipline.",
            }),
          ]),
          _: 1,
        })
      );
    },
  });
let Ua = [
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
];
const Ka = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  },
  qa = Z({
    __name: "Bag",
    setup(e) {
      return (t, n) => (
        T(),
        j("svg", Ka, [
          ...(n[0] ||
            (n[0] = [
              S(
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
  Ga = {
    class:
      "border border-gray-800 bg-secondary/10 pb-10 hover:border-green-200 rounded-lg p-5 flex flex-col space-y-5",
  },
  Ja = { class: "text-green-200 flex items-center gap-x-1" },
  Ya = ["href"],
  Za = { class: "space-y-10 ml-5" },
  Xa = {
    key: 0,
    class:
      "absolute top-2 -left-7.75 size-3 rounded-full bg-green-200 ring-4 ring-green-200/20",
  },
  Qa = { class: "text-lg font-bold text-white" },
  eu = { class: "text-sm" },
  tu = { class: "mt-5 space-y-2" },
  nu = ["innerHTML"],
  su = Z({
    __name: "Roles",
    props: { experience: {} },
    setup(e) {
      let n = e.experience.roles.length > 1;
      return (s, i) => (
        T(),
        j("div", Ga, [
          S("span", Ja, [
            k(qa, { class: "fill-green-200" }),
            S(
              "a",
              {
                href: e.experience.company_url,
                target: "_blank",
                class: "text-green-200 text-xl font-bold",
              },
              Q(e.experience.company_name),
              9,
              Ya,
            ),
          ]),
          S("div", Za, [
            S(
              "div",
              {
                class: qt([
                  "space-y-10 pl-6",
                  { "border-l border-green-200/40": ie(n) },
                ]),
              },
              [
                (T(!0),
                j(
                  Y,
                  null,
                  Ae(
                    e.experience.roles,
                    (r) => (
                      T(),
                      j(
                        "div",
                        { key: r.name, class: "relative flex flex-col" },
                        [
                          ie(n) ? (T(), j("span", Xa)) : Ks("", !0),
                          S("h5", Qa, Q(r.name), 1),
                          S("div", eu, [
                            S("span", null, Q(r.type), 1),
                            i[0] || (i[0] = ue(" — ", -1)),
                            S("span", null, Q(r.duration), 1),
                          ]),
                          S("ul", tu, [
                            (T(!0),
                            j(
                              Y,
                              null,
                              Ae(
                                r.description,
                                (o) => (
                                  T(),
                                  j("li", { key: o, class: "flex gap-x-1" }, [
                                    k(_r, {
                                      class:
                                        "mt-1 size-3 rotate-90 stroke-green-200",
                                    }),
                                    S(
                                      "span",
                                      {
                                        class: "w-full text-sm text-gray-200",
                                        innerHTML: o,
                                      },
                                      null,
                                      8,
                                      nu,
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
              _e(
                Ss,
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
            : Ks("", !0),
        ])
      );
    },
  }),
  iu = { class: "space-y-10" },
  ru = Z({
    __name: "Experience",
    setup(e) {
      return (t, n) => (
        T(),
        _e(ht, null, {
          default: X(() => [
            k(pt, { id: "Work", normal: "Work and", colored: "Engagements" }),
            S("div", iu, [
              (T(!0),
              j(
                Y,
                null,
                Ae(
                  ie(Ua),
                  (s) => (
                    T(),
                    _e(su, { key: s.id, experience: s }, null, 8, [
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
  oi = [
    { name: "Home" },
    { name: "About" },
    { name: "Work" },
    { name: "Projects" },
    { name: "Education" },
    { name: "Expertise" },
    { name: "Contact" },
  ],
  ou = {
    class:
      "hidden md:fixed top-5 left-0 md:flex items-center justify-center w-full px-5 py-3 z-20",
  },
  lu = {
    class:
      "flex gap-x-5 w-fit bg-secondary/10 border border-gray-800 px-4 py-3 shadow-lg rounded-lg backdrop-blur-xs",
  },
  cu = ["href"],
  au = { class: "md:hidden fixed bottom-0 left-0 w-full z-20" },
  uu = {
    class:
      "flex h-15 gap-x-5 w-full items-center overflow-scroll bg-secondary/10 border border-gray-800 px-5 py-3 shadow-lg backdrop-blur-lg",
  },
  fu = ["href"],
  du = Z({
    __name: "AppHeader",
    setup(e) {
      return (t, n) => (
        T(),
        j(
          Y,
          null,
          [
            S("div", ou, [
              S("nav", lu, [
                (T(!0),
                j(
                  Y,
                  null,
                  Ae(
                    ie(oi),
                    (s) => (
                      T(),
                      j(
                        "a",
                        {
                          class: "text-secondary-text hover:text-green-200",
                          href: "#" + s.name,
                        },
                        Q(s.name),
                        9,
                        cu,
                      )
                    ),
                  ),
                  256,
                )),
              ]),
            ]),
            S("div", au, [
              S("nav", uu, [
                (T(!0),
                j(
                  Y,
                  null,
                  Ae(
                    ie(oi),
                    (s) => (
                      T(),
                      j(
                        "a",
                        {
                          class: "text-secondary-text hover:text-green-200",
                          href: "#" + s.name,
                        },
                        Q(s.name),
                        9,
                        fu,
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
  hu = {},
  pu = {
    class:
      "h-20 mb-15 md:mb-0 text-center z-30 border-t border-gray-800 w-full",
  },
  gu = {
    class: "px-4 py-6 flex flex-col items-center gap-2 text-xs text-gray-400",
  };
function mu(e, t) {
  return (
    T(),
    j("footer", pu, [
      S("div", gu, [
        S(
          "div",
          null,
          "© " + Q(new Date().getFullYear()) + " All rights reserved.",
          1,
        ),
        t[0] ||
          (t[0] = S(
            "div",
            null,
            [
              ue(" Crafted with care by "),
              S(
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
const _u = Ct(hu, [["render", mu]]),
  bu = Z({
    __name: "CoolGlow",
    props: {
      color: { default: "rgba(70,130,180,0.1)" },
      size: { default: "700px" },
      x_position: { default: "0px" },
      y_position: { default: "66.6667%" },
    },
    setup(e) {
      const t = e,
        n = fr(() => ({
          backgroundImage: `radial-gradient(circle at top center, ${t.color}, transparent 70%)`,
          width: t.size,
          height: t.size,
          left: t.x_position,
          top: t.y_position,
        }));
      return (s, i) => (
        T(),
        j(
          "div",
          { class: "bg-no-repeat blur-3xl absolute z-0", style: wn(n.value) },
          null,
          4,
        )
      );
    },
  }),
  yu = {},
  xu = { class: "cool-top-div w-full h-200 absolute top-0 left-0 z-0" };
function vu(e, t) {
  return (T(), j("div", xu));
}
const wu = Ct(yu, [["render", vu]]),
  Su = {
    class:
      "relative space-y-20 overflow-hidden bg-base p-5 pb-0 text-secondary-text md:flex md:flex-col md:items-center md:space-y-30",
  },
  Cu = Z({
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
        ga({
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
          j(
            Y,
            null,
            [
              k(du),
              k(pt, { id: "Home" }),
              S("div", Su, [
                k(wu),
                (T(!0),
                j(
                  Y,
                  null,
                  Ae(
                    ie(t),
                    (i) => (
                      T(),
                      _e(
                        bu,
                        {
                          key: i.id,
                          x_position: i.x_position,
                          y_position: i.y_position,
                        },
                        null,
                        8,
                        ["x_position", "y_position"],
                      )
                    ),
                  ),
                  128,
                )),
                k(ac),
                k(Vc),
                k(ru),
                k($a),
                k(za),
                k(ea),
                k(la),
                k(_u),
              ]),
            ],
            64,
          )
        )
      );
    },
  });
Wl(Cu).mount("#app");
