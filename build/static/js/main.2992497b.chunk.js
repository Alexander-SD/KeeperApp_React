(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{40:function(e,t,n){e.exports=n(52)},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n.n(o),c=n(36),i=n(11),u=n(32),m=n.n(u);var s=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(m.a,null),"Keeper"))};var d=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()))},f=n(34),h=n.n(f);var p=function(e){var t=Object(a.useState)({animationName:"fade-in",animationDuration:"700ms"}),n=Object(i.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:"note",style:o},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){return l({animationName:"fade-out",animationDuration:"1000ms"}),setTimeout((function(){return l({animationName:"fade-in",animationDuration:"700ms"})}),900),setTimeout((function(){return e.deleteNote(e.id)}),900)}},r.a.createElement(h.a,null)))},E=[{key:1,title:"Delegation",content:"Q. How many programmers does it take to change a light bulb? A. None \u2013 It\u2019s a hardware problem"},{key:2,title:"Loops",content:"How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."},{key:3,title:"Arrays",content:"Q. Why did the programmer quit his job? A. Because he didn't get arrays."},{key:4,title:"Hardware vs. Software",content:"What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."},{key:5,title:"Hardware Server",content:"What's the difference between hardware and software?"}],b=n(30),v=n(35),w=n.n(v),y=n(69),k=n(70);var g=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(i.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)(!1),u=Object(i.a)(c,2),m=u[0],s=u[1],d=Object(a.useState)("expand-enter"),f=Object(i.a)(d,2),h=f[0],p=f[1];function E(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(b.a)(Object(b.a)({},e),{},{[n]:a})}))}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},m&&r.a.createElement("input",{onChange:E,name:"title",type:"text",value:o.title,placeholder:"Title"}),r.a.createElement("textarea",{className:h,onClick:function(){s(!0),p("expand-enter-active")},onChange:E,name:"content",type:"text",value:o.content,placeholder:"Take a note"}),r.a.createElement(k.a,{in:!!m},r.a.createElement(y.a,{onClick:function(t){e.addNewNote(o),l({title:"",content:""}),t.preventDefault()}},r.a.createElement(w.a,null)))))};var j=function(){var e=Object(a.useState)(E),t=Object(i.a)(e,2),n=t[0],o=t[1];function l(e){o((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(g,{addNewNote:function(e){o((function(t){return[].concat(Object(c.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,deleteNote:l})})),r.a.createElement(d,null))};l.a.render(r.a.createElement("div",null,r.a.createElement(j,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2992497b.chunk.js.map