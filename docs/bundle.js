!function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);h.length;)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([11,1]),n()}([,,,,function(e,t,n){e.exports=function(){return new Worker(n.p+"3fe4d47da7c9ea65a0f0.worker.js")}},,function(e,t,n){var o=n(2),r=n(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body {\n  margin: 0\n}\n\n#app {\n  align-items: center;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  z-index: 1;\n}\n\n.render-canvas {\n  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.15);\n}\n\n#params-container {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  z-index: 100;\n}\n",""]),e.exports=t},function(e,t,n){var o=n(2),r=n(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,"\n:root {\n  /* Base colors */\n  --tp-base-background-color: hsl(230deg, 5%, 95%);\n  --tp-base-shadow-color: hsla(0, 0%, 0%, 0.1);\n\n  /* Button-like control colors */\n  --tp-button-background-color: hsl(230deg, 5%, 70%);\n  --tp-button-background-color-active: hsl(230deg, 5%, 55%);\n  --tp-button-background-color-focus: hsl(230deg, 5%, 60%);\n  --tp-button-background-color-hover: hsl(230deg, 5%, 65%);\n  --tp-button-foreground-color: hsl(230deg, 5%, 20%);\n\n  /* Folder colors */\n  --tp-folder-background-color: hsl(230deg, 5%, 80%);\n  --tp-folder-background-color-active: hsl(230deg, 5%, 65%);\n  --tp-folder-background-color-focus: hsl(230deg, 5%, 70%);\n  --tp-folder-background-color-hover: hsl(230deg, 5%, 75%);\n  --tp-folder-foreground-color: var(--tp-input-foreground-color);\n\n  /* Input control colors */\n  --tp-input-background-color: hsl(230deg, 5%, 91%);\n  --tp-input-background-color-active: hsl(230deg, 5%, 84%);\n  --tp-input-background-color-focus: hsl(230deg, 5%, 85%);\n  --tp-input-background-color-hover: hsl(230deg, 5%, 87%);\n  --tp-input-foreground-color: hsl(230deg, 5%, 30%);\n  --tp-input-guide-color: hsla(230deg, 5%, 30%, 10%);\n\n  /* Monitor control colors */\n  --tp-monitor-background-color: var(--tp-input-background-color);\n  --tp-monitor-foreground-color: hsl(230deg, 5%, 60%);\n\n  /* Misc */\n  --tp-label-foreground-color: hsl(230deg, 5%, 50%);\n  --tp-separator-color: hsl(230deg, 5%, 85%);\n}\n",""]),e.exports=t},,function(e,t,n){"use strict";n.r(t);n(6);var o=n(17),r=n(16),a=n(18);function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.w=n,this.h=i,this.canvasElement=t,this.ctx=t.getContext("2d"),this.twoPi=2*Math.PI,this._minSeekRadius=1,this._maxSeekRadius=1,this.strokeScale=Object(o.a)().domain([this._minSeekRadius,this._maxSeekRadius]).rangeRound([2,6]),this.strokeColorScale=Object(r.a)(a.a),this._initializeCanvas()}var t,n,s;return t=e,(n=[{key:"clear",value:function(){this._initializeCanvas()}},{key:"line",value:function(e,t){var n=this.strokeScale(t.r);this.ctx.lineWidth=n,this.ctx.strokeStyle=this.strokeColorScale(t.treeId),this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(t.x,t.y),this.ctx.stroke()}},{key:"node",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;this.ctx.fillStyle=this.style.node.fillColor,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,t,0,this.twoPi),this.ctx.closePath(),this.ctx.fill()}},{key:"root",value:function(e){this.ctx.fillStyle=this.style.root.fillColor,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,6,0,this.twoPi),this.ctx.closePath(),this.ctx.fill(),this.node(e)}},{key:"done",value:function(){}},{key:"_initializeCanvas",value:function(){this.canvasElement.width=this.w,this.canvasElement.height=this.h;var e=window.devicePixelRatio||1;this.canvasElement.style.width=this.canvasElement.width+"px",this.canvasElement.style.height=this.canvasElement.height+"px",this.canvasElement.width=this.canvasElement.width*e,this.canvasElement.height=this.canvasElement.height*e,this.ctx.scale(e,e),this.ctx.fillStyle="white",this.ctx.rect(0,0,this.w,this.h),this.ctx.fill(),this.ctx.lineCap="round"}},{key:"minSeekRadius",set:function(e){this._minSeekRadius=e,this.strokeScale.domain([this._minSeekRadius,this._maxSeekRadius])}},{key:"maxSeekRadius",set:function(e){this._maxSeekRadius=e,this.strokeScale.domain([this._minSeekRadius,this._maxSeekRadius])}},{key:"style",get:function(){return{root:{fillColor:"red"},node:{fillColor:"black"},line:{strokeColor:"black"}}}}])&&i(t.prototype,n),s&&i(t,s),e}(),c=n(4),l=n.n(c),u=(n(8),n(10));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={maxSeekRadius:15,minSeekRadius:7,seekRadiusDecay:.93,numRoots:5,maxBranchAttempts:20,angleMax:140,branchSpacing:2.5},g=new u({title:"Parameters",container:document.getElementById("params-container")});g.addInput(f,"maxSeekRadius",{step:1}),g.addInput(f,"minSeekRadius",{step:1}),g.addInput(f,"seekRadiusDecay",{min:0,max:1,step:.01}),g.addInput(f,"numRoots",{step:1}),g.addInput(f,"maxBranchAttempts",{step:1}),g.addInput(f,"angleMax",{min:90,max:180,step:1}),g.addInput(f,"branchSpacing",{min:2,max:3,step:.1});var b,m=g.addButton({title:"Grow"}),v=((b=document.createElement("canvas")).id="render-canvas",b.classList.add("render-canvas"),b);document.getElementById("app").appendChild(v);var k=new s(v,600,600),x=y(h({height:600,width:600},f));function y(e){var t=new l.a;return t.onmessage=w,t.postMessage({cmd:"run",params:e}),t}function w(e){switch(e.data.cmd){case"render:line":k.line(e.data.from,e.data.to);break;case"render:node":k.node(e.data.center,e.data.center.radius);break;case"render:root":k.root(e.data.center);break;case"render:setMinSeekRadius":k.minSeekRadius=e.data.radius;break;case"render:setMaxSeekRadius":k.maxSeekRadius=e.data.radius;break;default:console.log("[index] unknown command ".concat(e.data.cmd,", data: ").concat(JSON.stringify(e.data)))}}m.on("click",(function(){var e,t;k.clear(),e=x,t=h({height:600,width:600},f),e.terminate(),x=y(t)}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyb3cud29ya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R3ZWFrcGFuZV90aGVtZS5jc3M/ZTJjYSIsIndlYnBhY2s6Ly8vLi9zcmMvdHdlYWtwYW5lX3RoZW1lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3JlbmRlcl9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R3ZWFrcGFuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCIwIiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJXb3JrZXIiLCJhcGkiLCJjb250ZW50IiwiZGVmYXVsdCIsIm9wdGlvbnMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iLCJSZW5kZXJDYW52YXMiLCJjYW52YXNFbGVtZW50IiwidyIsImgiLCJ0aGlzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInR3b1BpIiwiTWF0aCIsIlBJIiwiX21pblNlZWtSYWRpdXMiLCJfbWF4U2Vla1JhZGl1cyIsInN0cm9rZVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZVJvdW5kIiwic3Ryb2tlQ29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsInNjaGVtZVRhYmxlYXUxMCIsIl9pbml0aWFsaXplQ2FudmFzIiwiZnJvbSIsInRvIiwic3Ryb2tlV2lkdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInRyZWVJZCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsIngiLCJ5IiwibGluZVRvIiwic3Ryb2tlIiwiY2VudGVyIiwicmFkaXVzIiwiZmlsbFN0eWxlIiwic3R5bGUiLCJub2RlIiwiZmlsbENvbG9yIiwiYXJjIiwiY2xvc2VQYXRoIiwiZmlsbCIsInJvb3QiLCJ3aWR0aCIsImhlaWdodCIsImRwciIsImRldmljZVBpeGVsUmF0aW8iLCJzY2FsZSIsInJlY3QiLCJsaW5lQ2FwIiwibGluZSIsInN0cm9rZUNvbG9yIiwiVHdlYWtwYW5lIiwicmVxdWlyZSIsIlBBUkFNUyIsIm1heFNlZWtSYWRpdXMiLCJtaW5TZWVrUmFkaXVzIiwic2Vla1JhZGl1c0RlY2F5IiwibnVtUm9vdHMiLCJtYXhCcmFuY2hBdHRlbXB0cyIsImFuZ2xlTWF4IiwiYnJhbmNoU3BhY2luZyIsInBhbmUiLCJ0aXRsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRJbnB1dCIsInN0ZXAiLCJtaW4iLCJtYXgiLCJlbGVtZW50IiwiZ3Jvd0J0biIsImFkZEJ1dHRvbiIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiUmVuZGVyIiwid29ya2VyIiwic3Bhd25Xb3JrZXIiLCJwYXJhbXMiLCJHcm93V29ya2VyIiwib25tZXNzYWdlIiwiaGFuZGxlR3Jvd1dvcmtlck1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImNtZCIsImUiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uIiwiY2xlYXIiLCJ0ZXJtaW5hdGUiXSwibWFwcGluZ3MiOiJhQUNFLFNBQVNBLEVBQXFCQyxHQVE3QixJQVBBLElBTUlDLEVBQVVDLEVBTlZDLEVBQVdILEVBQUssR0FDaEJJLEVBQWNKLEVBQUssR0FDbkJLLEVBQWlCTCxFQUFLLEdBSUhNLEVBQUksRUFBR0MsRUFBVyxHQUNwQ0QsRUFBSUgsRUFBU0ssT0FBUUYsSUFDekJKLEVBQVVDLEVBQVNHLEdBQ2hCRyxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLQyxFQUFpQlgsSUFBWVcsRUFBZ0JYLElBQ3BGSyxFQUFTTyxLQUFLRCxFQUFnQlgsR0FBUyxJQUV4Q1csRUFBZ0JYLEdBQVcsRUFFNUIsSUFBSUQsS0FBWUcsRUFDWkssT0FBT0MsVUFBVUMsZUFBZUMsS0FBS1IsRUFBYUgsS0FDcERjLEVBQVFkLEdBQVlHLEVBQVlILElBS2xDLElBRkdlLEdBQXFCQSxFQUFvQmhCLEdBRXRDTyxFQUFTQyxRQUNkRCxFQUFTVSxPQUFUVixHQU9ELE9BSEFXLEVBQWdCSixLQUFLSyxNQUFNRCxFQUFpQmIsR0FBa0IsSUFHdkRlLElBRVIsU0FBU0EsSUFFUixJQURBLElBQUlDLEVBQ0lmLEVBQUksRUFBR0EsRUFBSVksRUFBZ0JWLE9BQVFGLElBQUssQ0FHL0MsSUFGQSxJQUFJZ0IsRUFBaUJKLEVBQWdCWixHQUNqQ2lCLEdBQVksRUFDUkMsRUFBSSxFQUFHQSxFQUFJRixF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WEVBLEVBV01FLEVBWFAsR0FBVXhDLE9BTnJCLElBTTZCRCxNQVA5QixLQU93Q1csR0FZbEQ0QixFQUFPZSxZQVpQZixFQWFPQyxFQUFZQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzExLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmZTRkNDdkYTdjOWVhNjVhMGYwLndvcmtlci5qc1wiKTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMFxcbn1cXG5cXG4jYXBwIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnJlbmRlci1jYW52YXMge1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4jcGFyYW1zLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMWVtO1xcbiAgdG9wOiAxZW07XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHdlYWtwYW5lX3RoZW1lLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIC8qIEJhc2UgY29sb3JzICovXFxuICAtLXRwLWJhc2UtYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzMGRlZywgNSUsIDk1JSk7XFxuICAtLXRwLWJhc2Utc2hhZG93LWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC4xKTtcXG5cXG4gIC8qIEJ1dHRvbi1saWtlIGNvbnRyb2wgY29sb3JzICovXFxuICAtLXRwLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMwZGVnLCA1JSwgNzAlKTtcXG4gIC0tdHAtYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiBoc2woMjMwZGVnLCA1JSwgNTUlKTtcXG4gIC0tdHAtYnV0dG9uLWJhY2tncm91bmQtY29sb3ItZm9jdXM6IGhzbCgyMzBkZWcsIDUlLCA2MCUpO1xcbiAgLS10cC1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogaHNsKDIzMGRlZywgNSUsIDY1JSk7XFxuICAtLXRwLWJ1dHRvbi1mb3JlZ3JvdW5kLWNvbG9yOiBoc2woMjMwZGVnLCA1JSwgMjAlKTtcXG5cXG4gIC8qIEZvbGRlciBjb2xvcnMgKi9cXG4gIC0tdHAtZm9sZGVyLWJhY2tncm91bmQtY29sb3I6IGhzbCgyMzBkZWcsIDUlLCA4MCUpO1xcbiAgLS10cC1mb2xkZXItYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6IGhzbCgyMzBkZWcsIDUlLCA2NSUpO1xcbiAgLS10cC1mb2xkZXItYmFja2dyb3VuZC1jb2xvci1mb2N1czogaHNsKDIzMGRlZywgNSUsIDcwJSk7XFxuICAtLXRwLWZvbGRlci1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiBoc2woMjMwZGVnLCA1JSwgNzUlKTtcXG4gIC0tdHAtZm9sZGVyLWZvcmVncm91bmQtY29sb3I6IHZhcigtLXRwLWlucHV0LWZvcmVncm91bmQtY29sb3IpO1xcblxcbiAgLyogSW5wdXQgY29udHJvbCBjb2xvcnMgKi9cXG4gIC0tdHAtaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzMGRlZywgNSUsIDkxJSk7XFxuICAtLXRwLWlucHV0LWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiBoc2woMjMwZGVnLCA1JSwgODQlKTtcXG4gIC0tdHAtaW5wdXQtYmFja2dyb3VuZC1jb2xvci1mb2N1czogaHNsKDIzMGRlZywgNSUsIDg1JSk7XFxuICAtLXRwLWlucHV0LWJhY2tncm91bmQtY29sb3ItaG92ZXI6IGhzbCgyMzBkZWcsIDUlLCA4NyUpO1xcbiAgLS10cC1pbnB1dC1mb3JlZ3JvdW5kLWNvbG9yOiBoc2woMjMwZGVnLCA1JSwgMzAlKTtcXG4gIC0tdHAtaW5wdXQtZ3VpZGUtY29sb3I6IGhzbGEoMjMwZGVnLCA1JSwgMzAlLCAxMCUpO1xcblxcbiAgLyogTW9uaXRvciBjb250cm9sIGNvbG9ycyAqL1xcbiAgLS10cC1tb25pdG9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXRwLWlucHV0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgLS10cC1tb25pdG9yLWZvcmVncm91bmQtY29sb3I6IGhzbCgyMzBkZWcsIDUlLCA2MCUpO1xcblxcbiAgLyogTWlzYyAqL1xcbiAgLS10cC1sYWJlbC1mb3JlZ3JvdW5kLWNvbG9yOiBoc2woMjMwZGVnLCA1JSwgNTAlKTtcXG4gIC0tdHAtc2VwYXJhdG9yLWNvbG9yOiBoc2woMjMwZGVnLCA1JSwgODUlKTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCB7IHNjYWxlTGluZWFyLCBzY2FsZU9yZGluYWwgfSBmcm9tICdkMy1zY2FsZSdcbmltcG9ydCB7IHNjaGVtZVRhYmxlYXUxMCB9IGZyb20gJ2QzLXNjYWxlLWNocm9tYXRpYydcblxuY2xhc3MgUmVuZGVyQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudCwgdywgaCkge1xuICAgIHRoaXMudyA9IHdcbiAgICB0aGlzLmggPSBoXG4gICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudFxuICAgIHRoaXMuY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIilcblxuICAgIHRoaXMudHdvUGkgPSBNYXRoLlBJKjJcblxuICAgIHRoaXMuX21pblNlZWtSYWRpdXMgPSAxXG4gICAgdGhpcy5fbWF4U2Vla1JhZGl1cyA9IDFcbiAgICB0aGlzLnN0cm9rZVNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbdGhpcy5fbWluU2Vla1JhZGl1cywgdGhpcy5fbWF4U2Vla1JhZGl1c10pXG4gICAgICAucmFuZ2VSb3VuZChbMiwgNl0pXG5cbiAgICB0aGlzLnN0cm9rZUNvbG9yU2NhbGUgPSBzY2FsZU9yZGluYWwoc2NoZW1lVGFibGVhdTEwKVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNhbnZhcygpXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplQ2FudmFzKClcbiAgfVxuXG4gIGxpbmUoZnJvbSwgdG8pIHtcbiAgICBsZXQgc3Ryb2tlV2lkdGggPSB0aGlzLnN0cm9rZVNjYWxlKHRvLnIpXG5cbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBzdHJva2VXaWR0aFxuICAgIC8vdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0eWxlLmxpbmUuc3Ryb2tlQ29sb3JcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3JTY2FsZSh0by50cmVlSWQpXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICB0aGlzLmN0eC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpXG4gICAgdGhpcy5jdHgubGluZVRvKHRvLngsIHRvLnkpXG4gICAgdGhpcy5jdHguc3Ryb2tlKClcblxuICAgIC8vdGhpcy5ub2RlKHRvLCBzdHJva2VXaWR0aCArIDEpXG4gIH1cblxuICBub2RlKGNlbnRlciwgcmFkaXVzID0gMykge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUubm9kZS5maWxsQ29sb3JcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgIHRoaXMuY3R4LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgMCwgdGhpcy50d29QaSlcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxuICAgIHRoaXMuY3R4LmZpbGwoKVxuICB9XG5cbiAgcm9vdChjZW50ZXIpIHtcbiAgICAvL3JldHVyblxuXG4gICAgbGV0IHJhZGl1cyA9IDZcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUucm9vdC5maWxsQ29sb3JcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgIHRoaXMuY3R4LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgMCwgdGhpcy50d29QaSlcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxuICAgIHRoaXMuY3R4LmZpbGwoKVxuXG4gICAgdGhpcy5ub2RlKGNlbnRlcilcbiAgfVxuXG4gIGRvbmUoKSB7IH1cblxuICBzZXQgbWluU2Vla1JhZGl1cyhyKSB7XG4gICAgdGhpcy5fbWluU2Vla1JhZGl1cyA9IHJcbiAgICB0aGlzLnN0cm9rZVNjYWxlLmRvbWFpbihbdGhpcy5fbWluU2Vla1JhZGl1cywgdGhpcy5fbWF4U2Vla1JhZGl1c10pXG4gIH1cblxuICBzZXQgbWF4U2Vla1JhZGl1cyhyKSB7XG4gICAgdGhpcy5fbWF4U2Vla1JhZGl1cyA9IHJcbiAgICB0aGlzLnN0cm9rZVNjYWxlLmRvbWFpbihbdGhpcy5fbWluU2Vla1JhZGl1cywgdGhpcy5fbWF4U2Vla1JhZGl1c10pXG4gIH1cblxuICBnZXQgc3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgZmlsbENvbG9yOiAncmVkJyxcbiAgICAgIH0sXG5cbiAgICAgIG5vZGU6IHtcbiAgICAgICAgZmlsbENvbG9yOiAnYmxhY2snLFxuICAgICAgfSxcblxuICAgICAgbGluZToge1xuICAgICAgICBzdHJva2VDb2xvcjogJ2JsYWNrJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbGl6ZUNhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB0aGlzLndcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oXG5cbiAgICAvLyBTZXQgdXAgcmV0aW5hXG4gICAgY29uc3QgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgIHRoaXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCArIFwicHhcIjtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCArIFwicHhcIjtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggKiBkcHI7XG4gICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgKiBkcHI7XG4gICAgdGhpcy5jdHguc2NhbGUoZHByLCBkcHIpO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpXG4gICAgdGhpcy5jdHguZmlsbCgpXG5cbiAgICB0aGlzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJ1xuICB9XG59XG5cbmV4cG9ydCB7IFJlbmRlckNhbnZhcyB9XG4iLCJpbXBvcnQgXCIuL3R3ZWFrcGFuZV90aGVtZS5jc3NcIjtcbmNvbnN0IFR3ZWFrcGFuZSA9IHJlcXVpcmUoJ3R3ZWFrcGFuZScpXG5cbmV4cG9ydCB7IFR3ZWFrcGFuZSB9XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IFJlbmRlckNhbnZhcyBhcyBSZW5kZXIgfSBmcm9tICcuL3JlbmRlci9yZW5kZXJfY2FudmFzLmpzJ1xuaW1wb3J0IEdyb3dXb3JrZXIgZnJvbSAnLi9ncm93Lndvcmtlci5qcydcbmltcG9ydCB7IFR3ZWFrcGFuZSB9IGZyb20gJy4vdHdlYWtwYW5lLmpzJ1xuXG5cbmNvbnN0IFBBUkFNUyA9IHtcbiAgbWF4U2Vla1JhZGl1czogMTUsXG4gIG1pblNlZWtSYWRpdXM6IDcsXG4gIHNlZWtSYWRpdXNEZWNheTogMC45MyxcbiAgbnVtUm9vdHM6IDUsXG4gIG1heEJyYW5jaEF0dGVtcHRzOiAyMCxcbiAgYW5nbGVNYXg6IDE0MCxcbiAgYnJhbmNoU3BhY2luZzogMi41LFxufVxuXG5jb25zdCBwYW5lID0gbmV3IFR3ZWFrcGFuZSh7IFxuICB0aXRsZTogJ1BhcmFtZXRlcnMnLFxuICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbXMtY29udGFpbmVyJykgXG59KVxucGFuZS5hZGRJbnB1dChQQVJBTVMsICdtYXhTZWVrUmFkaXVzJywgeyBzdGVwOiAxIH0pXG5wYW5lLmFkZElucHV0KFBBUkFNUywgJ21pblNlZWtSYWRpdXMnLCB7IHN0ZXA6IDEgfSlcbnBhbmUuYWRkSW5wdXQoUEFSQU1TLCAnc2Vla1JhZGl1c0RlY2F5JywgeyBtaW46IDAsIG1heDogMSwgc3RlcDogMC4wMSB9KVxucGFuZS5hZGRJbnB1dChQQVJBTVMsICdudW1Sb290cycsIHsgc3RlcDogMX0pXG5wYW5lLmFkZElucHV0KFBBUkFNUywgJ21heEJyYW5jaEF0dGVtcHRzJywgeyBzdGVwOiAxIH0pXG5wYW5lLmFkZElucHV0KFBBUkFNUywgJ2FuZ2xlTWF4JywgeyBtaW46IDkwLCBtYXg6IDE4MCwgc3RlcDogMSB9KVxucGFuZS5hZGRJbnB1dChQQVJBTVMsICdicmFuY2hTcGFjaW5nJywgeyBtaW46IDIsIG1heDogMywgc3RlcDogMC4xIH0pXG5jb25zdCBncm93QnRuID0gcGFuZS5hZGRCdXR0b24oeyB0aXRsZTogJ0dyb3cnLCB9KVxuXG5cbmxldCBjYW52YXMgPSBjYW52YXNFbGVtZW50KClcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5hcHBlbmRDaGlsZChjYW52YXMpXG5cbmxldCB3aWR0aCA9IDYwMCxcbiAgICBoZWlnaHQgPSA2MDAsXG4gICAgcmVuZGVyID0gbmV3IFJlbmRlcihjYW52YXMsIHdpZHRoLCBoZWlnaHQpLFxuICAgIHdvcmtlciA9IHNwYXduV29ya2VyKHtoZWlnaHQsIHdpZHRoLCAuLi5QQVJBTVN9KVxuXG5jb25zdCBoYW5kbGVHcm93QnV0dG9uQ2xpY2sgPSAoKSA9PiB7IFxuICByZW5kZXIuY2xlYXIoKVxuICB3b3JrZXIgPSByZXNwYXduV29ya2VyKHdvcmtlciwge2hlaWdodCwgd2lkdGgsIC4uLlBBUkFNU30pXG59XG5ncm93QnRuLm9uKCdjbGljaycsIGhhbmRsZUdyb3dCdXR0b25DbGljaylcblxuZnVuY3Rpb24gc3Bhd25Xb3JrZXIocGFyYW1zKSB7XG4gIGxldCB3b3JrZXIgPSBuZXcgR3Jvd1dvcmtlcigpXG4gIHdvcmtlci5vbm1lc3NhZ2UgPSBoYW5kbGVHcm93V29ya2VyTWVzc2FnZVxuICB3b3JrZXIucG9zdE1lc3NhZ2Uoe2NtZDogJ3J1bicsIHBhcmFtc30pXG4gIHJldHVybiB3b3JrZXJcbn1cblxuZnVuY3Rpb24gcmVzcGF3bldvcmtlcih3b3JrZXIsIHBhcmFtcykge1xuICB3b3JrZXIudGVybWluYXRlKClcbiAgcmV0dXJuIHNwYXduV29ya2VyKHBhcmFtcylcbn1cblxuZnVuY3Rpb24gaGFuZGxlR3Jvd1dvcmtlck1lc3NhZ2UoZSkge1xuICBzd2l0Y2ggKGUuZGF0YS5jbWQpIHtcbiAgICBjYXNlICdyZW5kZXI6bGluZSc6XG4gICAgICByZW5kZXIubGluZShlLmRhdGEuZnJvbSwgZS5kYXRhLnRvKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdyZW5kZXI6bm9kZSc6XG4gICAgICByZW5kZXIubm9kZShlLmRhdGEuY2VudGVyLCBlLmRhdGEuY2VudGVyLnJhZGl1cylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncmVuZGVyOnJvb3QnOlxuICAgICAgcmVuZGVyLnJvb3QoZS5kYXRhLmNlbnRlcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncmVuZGVyOnNldE1pblNlZWtSYWRpdXMnOlxuICAgICAgcmVuZGVyLm1pblNlZWtSYWRpdXMgPSBlLmRhdGEucmFkaXVzXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3JlbmRlcjpzZXRNYXhTZWVrUmFkaXVzJzpcbiAgICAgIHJlbmRlci5tYXhTZWVrUmFkaXVzID0gZS5kYXRhLnJhZGl1c1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coYFtpbmRleF0gdW5rbm93biBjb21tYW5kICR7ZS5kYXRhLmNtZH0sIGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoZS5kYXRhKX1gKVxuICB9XG59XG5cblxuZnVuY3Rpb24gY2FudmFzRWxlbWVudCgpIHtcbiAgbGV0IGlkID0gJ3JlbmRlci1jYW52YXMnXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgZWxlbWVudC5pZCA9IGlkXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVuZGVyLWNhbnZhcycpXG4gIHJldHVybiBlbGVtZW50XG59XG4iXSwic291cmNlUm9vdCI6IiJ9