(this.webpackJsonpnasatheworm=this.webpackJsonpnasatheworm||[]).push([[0],{14:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(16),i=n.n(s),r=n(7),l=n(2),j=(n(14),n(0));var o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"nav-container",children:Object(j.jsx)("div",{className:"header-image",children:Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("h1",{className:"nav-text",children:"Hello Space"}),Object(j.jsxs)("div",{className:"nav-links",children:[Object(j.jsx)("ul",{children:Object(j.jsx)(r.b,{to:"/",className:"nav-text",children:"Home"})}),Object(j.jsx)("ul",{children:Object(j.jsx)(r.b,{to:"/Earth",className:"nav-text",children:"Earth"})})]})]})})})})};var h=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{className:"footer-container",children:[Object(j.jsx)("ul",{children:Object(j.jsx)(r.b,{className:"footer-text",href:"https://github.com/Jonathan-84",target:"_blank",children:"GitHub"})}),Object(j.jsx)("ul",{children:Object(j.jsx)(r.b,{className:"footer-text",href:"https://www.linkedin.com/company/exley-deadlines",target:"_blank",children:"LinkedIn"})})]})})})},d=n(18),b=n(19),x=n(21),m=n(20),O="https://api.nasa.gov/planetary/apod?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),u=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={image:[],title:[],explanation:[]},c}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(O).then((function(e){return e.json()})).then((function(t){e.setState({image:t.url,title:t.title,explanation:t.explanation})}))}},{key:"render",value:function(){var e=this.state,t=e.image,n=e.title,c=e.explanation;return console.log(t,n,c),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Welcome"}),Object(j.jsx)("h3",{children:"Astronomy Photo of the Day"}),Object(j.jsx)("a",{href:this.state.image,children:Object(j.jsx)("img",{alt:"random astronomy",src:this.state.image,height:"300",width:"500"})}),Object(j.jsx)("p",{children:this.state.title}),Object(j.jsx)("p",{className:"explText",children:this.state.explanation})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}}]),n}(c.Component),p=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{className:"text-md-center text-sm-left m-3",children:" Will try to put SPotify music player here."})})},f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"display-4 text-center border-bottom border-warning",children:"Home"}),Object(j.jsx)("p",{className:"text-md-center text-sm-left m-3",children:" I am Earth."})]})};n(35).config();var g=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsx)("div",{className:"LeftPanel",children:Object(j.jsx)(p,{})}),Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(l.a,{exact:!0,path:"/earth",component:f})]})})]}),Object(j.jsx)("div",{className:"footer-size",children:Object(j.jsx)(h,{})})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.b9faca3c.chunk.js.map