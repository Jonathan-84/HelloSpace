(this.webpackJsonpnasatheworm=this.webpackJsonpnasatheworm||[]).push([[0],{17:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(21),r=a.n(s),i=a(11),l=a(2),o=(a(17),a(0));var h=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"nav-container",children:Object(o.jsx)("div",{className:"header-image",children:Object(o.jsxs)("div",{className:"header-container",children:[Object(o.jsx)("h2",{children:Object(o.jsx)(i.b,{to:"/",className:"nav-text",children:" Hello Space"})}),Object(o.jsxs)("div",{className:"nav-links",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{to:"/earth",className:"nav-text",children:"Earth"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{to:"/mars",className:"nav-text",children:"Mars"})})]})]})})})})};var j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsx)("ul",{children:Object(o.jsx)("a",{className:"footer-text",href:"https://github.com/Jonathan-84",target:"_blank",rel:"noreferrer",children:"GitHub"})}),Object(o.jsx)("ul",{children:Object(o.jsx)("a",{className:"footer-text",href:"https://www.linkedin.com/in/jrob84",target:"_blank",rel:"noreferrer",children:"LinkedIn"})})]})})})},b=a(4),d=a(5),m=a(7),u=a(6),x=a.p+"static/media/video.c150e9f1.png",p="https://api.nasa.gov/planetary/apod?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={image:[],title:[],explanation:[],type:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(p).then((function(e){return e.json()})).then((function(t){e.setState({image:t.url,title:t.title,explanation:t.explanation,media:t.media_type})}))}},{key:"render",value:function(){var e;e="video"===this.state.media?Object(o.jsxs)("span",{children:[Object(o.jsx)("p",{children:"It's a video of the day! Click the icon to be redirected to it!"}),Object(o.jsx)("a",{href:this.state.image,children:Object(o.jsx)("img",{alt:"random astronomy",src:x,height:"200",width:"200"})})]}):Object(o.jsx)("a",{href:this.state.image,children:Object(o.jsx)("img",{alt:"random astronomy",src:this.state.image,height:"300",width:"500"})});var t=this.state,a=t.image,n=t.title,c=t.explanation;return console.log(a,n,c),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Welcome"}),Object(o.jsx)("h3",{children:"Astronomy Photo of the Day"}),e,Object(o.jsx)("p",{children:this.state.title}),Object(o.jsx)("p",{className:"explText",children:this.state.explanation})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}}]),a}(n.Component),f=a(14),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={value:"https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0"},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsxs)("form",{className:"row justify-content-around d-flex flex-column flex-lg-row align-content-center",children:[Object(o.jsx)("label",{className:"music-color",children:"  Space Radio "}),Object(o.jsxs)("select",{value:this.state.value,onChange:this.handleChange,className:"music-color",children:[Object(o.jsx)("option",{className:"music-color",value:"https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0",children:"Listen In Space"}),Object(o.jsx)("option",{className:"music-color",value:"https://open.spotify.com/embed/episode/2RHNMVBEJ91SMisVu6NoPD",children:"Star Talk"}),Object(o.jsx)("option",{className:"music-color",value:"https://open.spotify.com/embed/playlist/6pcuzwZSIw7OgL149bgJmZ",children:"Voyager Golden Record"})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:" center-music",children:Object(o.jsx)("iframe",{src:this.state.value,width:"100%",height:"400",frameBorder:"0",title:"Spotify",allowtransparency:"true",allow:"encrypted-media",children:"Listen In Space"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=5").then((function(e){return e.json()})).then((function(t){e.setState({})}))}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"display-4 text-center border-bottom border-warning",children:"Home"}),Object(o.jsx)("p",{className:"text-md-center text-sm-left m-3",children:" I am Earth."})]})}}]),a}(n.Component),N=a(24),y=a(23),w=a.n(y),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={date:[],min:[],max:[],overall:[],wind:[],pressure:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.maas2.apollorion.com/").then((function(e){return e.json()})).then((function(t){e.setState({date:t.terrestrial_date,min:t.min_temp,max:t.max_temp,overall:t.atmo_opacity,wind:t.wind_speed,pressure:t.pressure})}))}},{key:"render",value:function(){var e,t,a=this.props.minEarth,n=(9*a/5+32).toFixed(2),c=this.props.maxEarth,s=(9*c/5+32).toFixed(2),r=this.props.earthPressure,i=this.props.earthWind,l=this.props.condition,h=this.props.icon,j="http://openweathermap.org/img/wn/".concat(h,"@2x.png"),b=this.state,d=b.date,m=b.max,u=b.min,x=b.overall,p=b.wind,O=b.pressure;e=null===p?Object(o.jsx)("p",{className:"table-horizontal table-column-left table-header-text",children:"No data"}):Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[p," "]}),t="Sunny"===x?Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[x,Object(o.jsx)("span",{children:Object(o.jsx)("img",{src:"http://openweathermap.org/img/wn/01d@2x.png",alt:"icon for weather"})})," "]}):Object(o.jsxs)("td",{className:"table-horizontal table-column-left",children:[x," "]});var f=d,v=w()(f).format("MMMM Do YYYY");console.log(v);var g=u,N=(9*g/5+32).toFixed(2),y=m,C=(9*y/5+32).toFixed(2);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"Mars Weather"}),Object(o.jsx)("p",{className:"subtitle",children:" Mars Data is from the Curiosity Rover (Rover Environmental Monitoring Station)"}),Object(o.jsx)("div",{className:"w3-responsive",children:Object(o.jsxs)("table",{className:"w3-table-all table-header-text",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:" w3-center table-header-text",children:"Category"}),Object(o.jsx)("th",{className:" w3-center table-column-left table-header-text",children:"Mars"}),Object(o.jsx)("th",{className:" w3-center table-column-left table-header-text",children:"Earth (NYC*)"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Temp Low"}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[g," C / ",N," F"]}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:["  ",a," C/ ",n," F"]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Temp High"}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[y," C / ",C," F"]}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[c," C/ ",s," F"]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Atmospheric Pressure"}),Object(o.jsx)("td",{className:"table-horizontal  table-column-left",children:O}),Object(o.jsx)("td",{className:" table-horizontal table-column-left",children:r})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Wind"}),e,Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[i," "]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Overall Condition"}),t,Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[l,Object(o.jsx)("span",{children:Object(o.jsx)("img",{src:j,alt:"icon for weather"})})," "]})]})]})}),Object(o.jsxs)("p",{children:["Date that Mar's weather data was last received: ",v]}),Object(o.jsx)("p",{children:"* Future adjustments will use html Geolocation to present your local weather conditions in the NYC slot."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),n=t.call(this,e),console.log(e),n.state={minEarth:[],maxEarth:[],condition:[],earthWind:[],icon:[],earthPressure:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.lat,a=this.props.long;console.log(t,a);var n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat("a8b96795d869a45f325b6525fab7502b","&units=metric");console.log(n),fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({minEarth:t.main.temp_min,maxEarth:t.main.temp_max,earthPressure:t.main.pressure,condition:t.weather[0].main,icon:t.weather[0].icon,earthWind:t.wind.speed})})),this.forceUpdate()}},{key:"render",value:function(){var e=this.state,t=e.minEarth,a=e.maxEarth,n=e.condition,c=e.earthWind,s=e.earthPressure;return console.log(t,a,n,c,s),Object(o.jsx)(C,Object(N.a)({},this.state))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleEvent=function(e){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;n.setState({lat:t,long:a})}),(function(){n.setState({lat:40.71,long:-74}),alert("Unable to retrieve your location, so here's NY City's Comparison")}))},n.state={lat:[0],long:[0]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.handleEvent()}},{key:"render",value:function(){var e=this.state,t=e.lat,a=e.long;return console.log(t,a),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(k,{lat:this.state.lat,long:this.state.long})})}}]),a}(n.Component),F="https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={marspic:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(F).then((function(e){return e.json()})).then((function(t){e.setState({marspic:t.latest_photos[0].img_src})}))}},{key:"render",value:function(){var e=this.state.marspic;return console.log(e),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Mars"}),Object(o.jsx)("a",{href:this.state.image,children:Object(o.jsx)("img",{alt:"mars from perseverance",src:this.state.marspic,height:"300",width:"500"})}),Object(o.jsx)("p",{children:"Perseverance's latest photo from Mars"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(M,{})]})}}]),a}(n.Component);a(39).config();var z=function(){return Object(o.jsx)(i.a,{basename:"/HelloSpace",children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{}),Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsx)("div",{className:"LeftPanel",children:Object(o.jsx)(v,{})}),Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(o.jsx)(l.a,{exact:!0,path:"/earth",component:g}),Object(o.jsx)(l.a,{exact:!0,path:"/mars",component:S})]})})]}),Object(o.jsx)("div",{className:"footer-size",children:Object(o.jsx)(j,{})})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(z,{})})}),document.getElementById("root")),E()}},[[42,1,2]]]);
//# sourceMappingURL=main.508f777b.chunk.js.map