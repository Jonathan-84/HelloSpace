(this.webpackJsonpnasatheworm=this.webpackJsonpnasatheworm||[]).push([[0],{17:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(21),r=a.n(s),i=a(10),l=a(2),o=(a(17),a(0));var h=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"nav-container",children:Object(o.jsx)("div",{className:"header-image",children:Object(o.jsxs)("div",{className:"header-container",children:[Object(o.jsx)("h2",{children:Object(o.jsx)(i.b,{to:"/",className:"nav-text",children:" Hello Space"})}),Object(o.jsxs)("div",{className:"nav-links",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{to:"/",className:"nav-text",children:"Temp"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{to:"/earth",className:"nav-text",children:"Earth"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{to:"/mars",className:"nav-text",children:"Mars"})})]})]})})})})};var j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{className:"footer-text",href:"https://github.com/Jonathan-84",target:"_blank",children:"GitHub"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(i.b,{className:"footer-text",href:"https://www.linkedin.com/company/exley-deadlines",target:"_blank",children:"LinkedIn"})})]})})})},b=a(6),d=a(7),m=a(9),x=a(8),u=a.p+"static/media/video.c150e9f1.png",O="https://api.nasa.gov/planetary/apod?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),p=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={image:[],title:[],explanation:[],type:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(O).then((function(e){return e.json()})).then((function(t){e.setState({image:t.url,title:t.title,explanation:t.explanation,media:t.media_type})}))}},{key:"render",value:function(){var e;e="video"===this.state.media?Object(o.jsxs)("span",{children:[Object(o.jsx)("p",{children:"It's a video of the day! Click the icon to be redirected to it!"}),Object(o.jsx)("a",{href:this.state.image,children:Object(o.jsx)("img",{alt:"random astronomy",src:u,height:"200",width:"200"})})]}):Object(o.jsx)("a",{href:this.state.image,children:Object(o.jsx)("img",{alt:"random astronomy",src:this.state.image,height:"300",width:"500"})});var t=this.state,a=t.image,n=t.title,c=t.explanation;return console.log(a,n,c),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Welcome"}),Object(o.jsx)("h3",{children:"Astronomy Photo of the Day"}),e,Object(o.jsx)("p",{children:this.state.title}),Object(o.jsx)("p",{className:"explText",children:this.state.explanation})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}}]),a}(n.Component),f=a(14),v=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={value:"https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0"},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsxs)("form",{className:"row justify-content-around d-flex flex-column flex-lg-row align-content-center",children:[Object(o.jsx)("label",{className:"music-color",children:"  Space Radio "}),Object(o.jsxs)("select",{value:this.state.value,onChange:this.handleChange,className:"music-color",children:[Object(o.jsx)("option",{value:"https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0",children:"Listen In Space"}),Object(o.jsx)("option",{value:"https://open.spotify.com/embed/episode/2RHNMVBEJ91SMisVu6NoPD",children:"Star Talk"}),Object(o.jsx)("option",{value:"https://open.spotify.com/embed/playlist/6pcuzwZSIw7OgL149bgJmZ",children:"Voyager Golden Record"}),Object(o.jsx)("option",{value:"90",children:"3 Months"}),Object(o.jsx)("option",{value:"180",children:"6 Months"}),Object(o.jsx)("option",{value:"270",children:"9 Months"})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:" center-music",children:Object(o.jsx)("iframe",{src:this.state.value,width:"100%",height:"400",frameBorder:"0",title:"Spotify",allowtransparency:"true",allow:"encrypted-media",children:"Listen In Space"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=5").then((function(e){return e.json()})).then((function(t){e.setState({})}))}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"display-4 text-center border-bottom border-warning",children:"Home"}),Object(o.jsx)("p",{className:"text-md-center text-sm-left m-3",children:" I am Earth."})]})}}]),a}(n.Component),N=a(24),y=a(23),w=a.n(y),M=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={date:[],min:[],max:[],overall:[],wind:[],pressure:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.maas2.apollorion.com/").then((function(e){return e.json()})).then((function(t){e.setState({date:t.terrestrial_date,min:t.min_temp,max:t.max_temp,overall:t.atmo_opacity,wind:t.wind_speed,pressure:t.pressure})}))}},{key:"render",value:function(){var e,t=this.props.minEarth,a=(9*t/5+32).toFixed(2),n=this.props.maxEarth,c=(9*n/5+32).toFixed(2),s=this.props.earthPressure,r=this.props.earthWind,i=this.props.condition,l=this.props.icon,h="http://openweathermap.org/img/wn/".concat(l,"@2x.png"),j=this.state,b=j.date,d=j.max,m=j.min,x=j.overall,u=j.wind,O=j.pressure;console.log(u),e=null===u?Object(o.jsx)("p",{className:"table-horizontal table-column-left table-header-text",children:"No data"}):Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[u," "]});var p=b,f=w()(p).format("MMMM Do YYYY");console.log(f);var v=m,g=(9*v/5+32).toFixed(2),N=d,y=(9*N/5+32).toFixed(2);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"Mars Weather"}),Object(o.jsx)("p",{className:"subtitle",children:" Data was from Mars Curiosity Rover (Rover Environmental Monitoring Station)"}),Object(o.jsx)("div",{className:"w3-responsive",children:Object(o.jsxs)("table",{className:"w3-table-all table-header-text",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:" w3-center table-header-text",children:"Category"}),Object(o.jsx)("th",{className:" w3-center table-column-left table-header-text",children:"Mars"}),Object(o.jsx)("th",{className:" w3-center table-column-left table-header-text",children:"Earth (Your City)"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Temp Low"}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[v," C / ",g," F"]}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:["  ",t," C/ ",a," F"]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Temp High"}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[N," C / ",y," F"]}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[n," C/ ",c," F"]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Atmospheric Pressure"}),Object(o.jsx)("td",{className:"table-horizontal  table-column-left",children:O}),Object(o.jsx)("td",{className:" table-horizontal table-column-left",children:s})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Wind"}),e,Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[r," "]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"table-horizontal",children:"Overall Condition"}),Object(o.jsxs)("td",{className:"table-horizontal table-column-left",children:[x," "]}),Object(o.jsxs)("td",{className:" table-horizontal table-column-left",children:[i,Object(o.jsx)("span",{children:Object(o.jsx)("img",{src:h,alt:"icon for weather"})})," "]})]})]})}),Object(o.jsxs)("p",{children:["Date that Mar's weather data was last received: ",f]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={minEarth:[],maxEarth:[],condition:[],earthWind:[],icon:[],pressure:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude,c="https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=").concat("a8b96795d869a45f325b6525fab7502b","&units=metric");console.log(c),fetch(c).then((function(e){return e.json()})).then((function(t){e.setState({minEarth:t.main.temp_min,maxEarth:t.main.temp_max,earthPressure:t.main.pressure,condition:t.weather[0].main,icon:t.weather[0].icon,earthWind:t.wind.speed})}))}))}},{key:"render",value:function(){var e=this.state,t=e.minEarth,a=e.maxEarth,n=e.condition,c=e.earthWind,s=e.pressure;return console.log(t,a,n,c,s),Object(o.jsx)(M,Object(N.a)({},this.state))}}]),a}(n.Component),k="https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),F=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={marspic:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(k).then((function(e){return e.json()})).then((function(t){e.setState({marspic:t.latest_photos[0].img_src})}))}},{key:"render",value:function(){var e=this.state.marspic;return console.log(e),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Mars"}),Object(o.jsx)("a",{href:this.state.image,children:Object(o.jsx)("img",{alt:"mars from perseverance",src:this.state.marspic,height:"300",width:"500"})}),Object(o.jsx)("p",{children:"Perseverance's latest photo from Mars"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(C,{})]})}}]),a}(n.Component);a(39).config();var z=function(){return Object(o.jsx)(i.a,{basename:"/HelloSpace",children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{}),Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsx)("div",{className:"LeftPanel",children:Object(o.jsx)(v,{})}),Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(o.jsx)(l.a,{exact:!0,path:"/earth",component:g}),Object(o.jsx)(l.a,{exact:!0,path:"/mars",component:F})]})})]}),Object(o.jsx)("div",{className:"footer-size",children:Object(o.jsx)(j,{})})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(z,{})})}),document.getElementById("root")),S()}},[[42,1,2]]]);
//# sourceMappingURL=main.1f041da4.chunk.js.map