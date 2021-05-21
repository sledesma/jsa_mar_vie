(() => {
	"use strict";
	function t(n) {
		return (t =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							"function" == typeof Symbol &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? "symbol"
							: typeof t;
				  })(n);
	}
	function n(n, e) {
		return !e || ("object" !== t(e) && "function" != typeof e)
			? (function (t) {
					if (void 0 === t)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return t;
			  })(n)
			: e;
	}
	function e(t) {
		var n = "function" == typeof Map ? new Map() : void 0;
		return (e = function (t) {
			if (
				null === t ||
				((e = t), -1 === Function.toString.call(e).indexOf("[native code]"))
			)
				return t;
			var e;
			if ("function" != typeof t)
				throw new TypeError(
					"Super expression must either be null or a function"
				);
			if (void 0 !== n) {
				if (n.has(t)) return n.get(t);
				n.set(t, r);
			}
			function r() {
				return o(t, arguments, c(this).constructor);
			}
			return (
				(r.prototype = Object.create(t.prototype, {
					constructor: {
						value: r,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
				u(r, t)
			);
		})(t);
	}
	function o(t, n, e) {
		return (o = r()
			? Reflect.construct
			: function (t, n, e) {
					var o = [null];
					o.push.apply(o, n);
					var r = new (Function.bind.apply(t, o))();
					return e && u(r, e.prototype), r;
			  }).apply(null, arguments);
	}
	function r() {
		if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return (
				Boolean.prototype.valueOf.call(
					Reflect.construct(Boolean, [], function () {})
				),
				!0
			);
		} catch (t) {
			return !1;
		}
	}
	function u(t, n) {
		return (u =
			Object.setPrototypeOf ||
			function (t, n) {
				return (t.__proto__ = n), t;
			})(t, n);
	}
	function c(t) {
		return (c = Object.setPrototypeOf
			? Object.getPrototypeOf
			: function (t) {
					return t.__proto__ || Object.getPrototypeOf(t);
			  })(t);
	}
	var i = new ((function (t) {
		!(function (t, n) {
			if ("function" != typeof n && null !== n)
				throw new TypeError(
					"Super expression must either be null or a function"
				);
			(t.prototype = Object.create(n && n.prototype, {
				constructor: { value: t, writable: !0, configurable: !0 },
			})),
				n && u(t, n);
		})(f, t);
		var e,
			o,
			i =
				((e = f),
				(o = r()),
				function () {
					var t,
						r = c(e);
					if (o) {
						var u = c(this).constructor;
						t = Reflect.construct(r, arguments, u);
					} else t = r.apply(this, arguments);
					return n(this, t);
				});
		function f() {
			var t;
			return (
				(function (t, n) {
					if (!(t instanceof n))
						throw new TypeError("Cannot call a class as a function");
				})(this, f),
				(t = i.call(this)),
				console.log("Creando lista"),
				(t.nombre = "Lista"),
				t
			);
		}
		return f;
	})(e(Array)))();
	console.log(i);
})();
