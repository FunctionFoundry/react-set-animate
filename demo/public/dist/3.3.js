webpackJsonp([3],{111:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(6),c=o(l),f=n(23),s=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={left:50,top:100,width:0,height:2},n}return u(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;this.setAnimate("height",300,2e3,"linear-in"),this.setAnimate("width",1024,2e3,"linear-in").then(function(){return e.setAnimate("top",100,2e3,"bounce-in-out")})}},{key:"getStyle",value:function(){return{position:"fixed",left:this.state.left,top:this.state.top,width:this.state.width,height:this.state.height,backgroundColor:"red",color:"white",fontSize:"3em",textAlign:"center"}}},{key:"render",value:function(){return c["default"].createElement("div",{style:this.getStyle()},"Hello")}}]),t}(f.AnimatedComponent);t["default"]=s}});