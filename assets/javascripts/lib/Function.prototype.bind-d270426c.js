Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,i=function(){},r=function(){return n.apply(this instanceof i&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,r.prototype=new i,r});