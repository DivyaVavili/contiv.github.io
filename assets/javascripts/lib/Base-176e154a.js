!function(e,t,n){"undefined"!=typeof module?module.exports=n():"undefined"!=typeof define&&"object"==typeof define.amd?define(n):t[e]=n()}("Base",this,function(){var e=function(){};return e.extend=function(t,n){var i=e.prototype.extend;e._prototyping=!0;var r=new this;i.call(r,t),r.base=function(){},delete e._prototyping;var o=r.constructor,s=r.constructor=function(){if(!e._prototyping)if(this._constructing||this.constructor===s)this._constructing=!0,o.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||i).call(arguments[0],r)};return s.ancestor=this,s.extend=this.extend,s.forEach=this.forEach,s.implement=this.implement,s.prototype=r,s.toString=this.toString,s.valueOf=function(e){return"object"===e?s:o.valueOf()},i.call(s,n),"function"==typeof s.init&&s.init(),s},e.prototype={extend:function(t,n){if(arguments.length>1){var i=this[t];if(i&&"function"==typeof n&&(!i.valueOf||i.valueOf()!==n.valueOf())&&/\bbase\b/.test(n)){var r=n.valueOf();n=function(){var t=this.base||e.prototype.base;this.base=i;var n=r.apply(this,arguments);return this.base=t,n},n.valueOf=function(e){return"object"===e?n:r},n.toString=e.toString}this[t]=n}else if(t){var o=e.prototype.extend;e._prototyping||"function"==typeof this||(o=this.extend||o);for(var s={toSource:null},a=["constructor","toString","valueOf"],l=e._prototyping?0:1;l<a.length;l++){var c=a[l];t[c]!==s[c]&&o.call(this,c,t[c])}for(var u in t)s[u]||o.call(this,u,t[u])}return this}},e=e.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(e,t,n){for(var i in e)void 0===this.prototype[i]&&t.call(n,e[i],i,e)},implement:function(){for(var e=0;e<arguments.length;e++)"function"==typeof arguments[e]?arguments[e](this.prototype):this.prototype.extend(arguments[e]);return this},toString:function(){return String(this.valueOf())}})});