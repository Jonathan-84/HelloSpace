(this.webpackJsonpnasatheworm=this.webpackJsonpnasatheworm||[]).push([[0],{18:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(23),r=a.n(c),i=a(11),o=a(2),l=(a(18),a(0));var h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"nav-container",children:Object(l.jsx)("div",{className:"header-image",children:Object(l.jsxs)("div",{className:"header-container",children:[Object(l.jsx)("h2",{children:Object(l.jsx)(i.c,{to:"/Home",className:"nav-text",children:" Hello Space"})}),Object(l.jsxs)("div",{className:"nav-links",children:[Object(l.jsx)("ul",{children:Object(l.jsx)(i.c,{to:"/earth",className:"nav-text",children:"Earth"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(i.c,{to:"/mars",className:"nav-text",children:"Mars"})})]})]})})})})};var j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsx)("ul",{children:Object(l.jsx)("a",{className:"footer-text",href:"https://github.com/Jonathan-84",target:"_blank",rel:"noreferrer",children:"GitHub"})}),Object(l.jsx)("ul",{children:Object(l.jsx)("a",{className:"footer-text",href:"https://www.linkedin.com/in/jrob84",target:"_blank",rel:"noreferrer",children:"LinkedIn"})})]})})})},b=a(4),m=a(5),d=a(7),p=a(6),x=a.p+"static/media/video.c150e9f1.png",u="https://api.nasa.gov/planetary/apod?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={image:[],title:[],explanation:[],type:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(u).then((function(e){return e.json()})).then((function(t){e.setState({image:t.url,title:t.title,explanation:t.explanation,media:t.media_type})}))}},{key:"render",value:function(){var e;e="video"===this.state.media?Object(l.jsxs)("span",{children:[Object(l.jsx)("p",{children:"It's a video of the day! Click the icon to be redirected to it!"}),Object(l.jsx)("a",{href:this.state.image,children:Object(l.jsx)("img",{alt:"random astronomy",src:x,className:"earth-photo"})})]}):Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:this.state.image,children:Object(l.jsx)("img",{alt:"random astronomy",src:this.state.image,className:"earth-photo"})})});var t=this.state,a=t.image,n=t.title,s=t.explanation;return console.log(a,n,s),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Welcome"}),Object(l.jsx)("p",{className:"explText",children:"Like many, I love NASA. It's more than a government agency, it's... possiblity, potential, wonder, humanity at its best and much more. This mini-project as been an opportunity to geek out and experiment for the first time (undoubtably not the last time) with the NASA APIs."}),Object(l.jsx)("h3",{className:"title",children:"Astronomy Photo of the Day"}),e,Object(l.jsx)("p",{className:"title",children:this.state.title}),Object(l.jsx)("p",{className:"explText",children:this.state.explanation}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})}}]),a}(n.Component),f=a(15),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={value:"https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0"},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsxs)("form",{className:" align-content-center",children:[Object(l.jsx)("label",{className:"music-color",children:"  Space Radio "}),Object(l.jsxs)("select",{value:this.state.value,onChange:this.handleChange,className:"music-color",children:[Object(l.jsx)("option",{className:"music-color",value:"https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0",children:"Give Me Some Space"}),Object(l.jsx)("option",{className:"music-color",value:"https://open.spotify.com/embed/episode/2RHNMVBEJ91SMisVu6NoPD",children:"Star Talk"}),Object(l.jsx)("option",{className:"music-color",value:"https://open.spotify.com/embed/playlist/6pcuzwZSIw7OgL149bgJmZ",children:"Voyager Golden Record"})]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:" center-music",children:Object(l.jsx)("iframe",{src:this.state.value,width:"100%",height:"400",frameBorder:"0",title:"Spotify",allowtransparency:"true",allow:"encrypted-media",children:"Listen In Space"})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})}}]),a}(n.Component),v=a(13),N=a.n(v),y="https://api.nasa.gov/EPIC/api/natural/images?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={earthPic:[],earthDate:[],imageCaption:[],imageLat:[],imageLong:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(y).then((function(e){return e.json()})).then((function(t){e.setState({earthPic:t[0].image,earthDate:t[0].date,imageCaption:t[0].caption,imageLat:t[0].centroid_coordinates.lat,imageLong:t[0].centroid_coordinates.lon})}))}},{key:"render",value:function(){var e=this.state,t=e.earthPic,a=e.earthDate,n=e.imageCaption,s=e.imageLat,c=e.imageLong;console.log(a,t,n,s,c);var r=a,i=N()(r).format("MM"),o=N()(r).format("DD"),h=N()(r).format("YYYY");console.log(i,o,h);var j=s,b=c,m="https://epic.gsfc.nasa.gov/archive/natural/".concat(h,"/").concat(i,"/").concat(o,"/png/").concat(this.state.earthPic,".png");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title ",children:"Earth"}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:m,children:Object(l.jsx)("img",{alt:"Earth from DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.",src:m,className:"earth-photo"})}),Object(l.jsxs)("p",{className:"explText",children:[this.state.imageCaption," on ",i,"/",o,"/",h,"."]}),Object(l.jsxs)("p",{className:"explText",children:["Geographical coordinates that the satellite is looking at:  ",Object(l.jsx)("br",{}),"Longitude: ",j," || Latitude: ",b]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})}}]),a}(n.Component),C=a(21),M=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={date:[],min:[],max:[],overall:[],wind:[],pressure:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.maas2.apollorion.com/").then((function(e){return e.json()})).then((function(t){e.setState({date:t.terrestrial_date,min:t.min_temp,max:t.max_temp,overall:t.atmo_opacity,wind:t.wind_speed,pressure:t.pressure})}))}},{key:"render",value:function(){var e,t,a=this.props.minEarth,n=(9*a/5+32).toFixed(2),s=this.props.maxEarth,c=(9*s/5+32).toFixed(2),r=this.props.earthPressure,i=this.props.earthWind,o=this.props.condition,h=this.props.icon,j="http://openweathermap.org/img/wn/".concat(h,"@2x.png"),b=this.state,m=b.date,d=b.max,p=b.min,x=b.overall,u=b.wind,O=b.pressure;e=null===u?Object(l.jsx)("p",{className:"table-horizontal table-column-left table-header-text",children:"No data"}):Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:[u," "]}),t="Sunny"===x?Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:[x,Object(l.jsx)("span",{children:Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/01d@2x.png",alt:"icon for weather"})})," "]}):Object(l.jsxs)("td",{className:"table-horizontal table-column-left",children:[x," "]});var f=m,g=N()(f).format("MMMM Do YYYY");console.log(g);var v=p,y=(9*v/5+32).toFixed(2),w=d,C=(9*w/5+32).toFixed(2),M=this.props.lat,k=Number(M).toFixed(2),F=this.props.long,S=Number(F).toFixed(2);return console.log(k,S),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Mars Weather"}),Object(l.jsx)("p",{className:"explText",children:" Mars Data is from the Curiosity Rover (Rover Environmental Monitoring Station)"}),Object(l.jsx)("div",{className:"w3-responsive",children:Object(l.jsxs)("table",{className:"w3-table-all table-header-text",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:" w3-center table-header-text",children:"Category"}),Object(l.jsx)("th",{className:" w3-center table-column-left table-header-text",children:"Mars"}),Object(l.jsxs)("th",{className:" w3-center table-column-left table-header-text",children:["Earth (NYC","*)"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"table-horizontal",children:"Temp Low"}),Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:[v," C / ",y," F"]}),Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:["  ",a," C/ ",n," F"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"table-horizontal",children:"Temp High"}),Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:[w," C / ",C," F"]}),Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:[s," C/ ",c," F"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"table-horizontal",children:"Atmospheric Pressure"}),Object(l.jsx)("td",{className:"table-horizontal  table-column-left",children:O}),Object(l.jsx)("td",{className:" table-horizontal table-column-left",children:r})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"table-horizontal",children:"Wind"}),e,Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:[i," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"table-horizontal",children:"Overall Condition"}),t,Object(l.jsxs)("td",{className:" table-horizontal table-column-left",children:[o,Object(l.jsx)("span",{children:Object(l.jsx)("img",{src:j,alt:"icon for weather"})})," "]})]})]})}),Object(l.jsxs)("p",{children:["Date that Mar's weather data was last received: ",g]}),Object(l.jsx)("p",{className:"explText",children:" For now the location is New York City from the Open Weather API, but this will be corrected to capture use your coordinates"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})}}]),a}(n.Component),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(b.a)(this,a),n=t.call(this,e),console.log(e),n.state={minEarth:[],maxEarth:[],condition:[],earthWind:[],icon:[],earthPressure:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.lat,a=this.props.long;console.log(t,a);var n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat("a8b96795d869a45f325b6525fab7502b","&units=metric");console.log(n),fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({minEarth:t.main.temp_min,maxEarth:t.main.temp_max,earthPressure:t.main.pressure,condition:t.weather[0].main,icon:t.weather[0].icon,earthWind:t.wind.speed})})),this.forceUpdate()}},{key:"render",value:function(){var e=this.state,t=e.minEarth,a=e.maxEarth,n=e.condition,s=e.earthWind,c=e.earthPressure;return console.log(t,a,n,s,c),Object(l.jsx)(M,Object(C.a)(Object(C.a)({},this.state),{},{lat:this.props.lat,long:this.props.long}))}}]),a}(n.Component),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleEvent=function(e){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;n.setState({lat:t,long:a})}),(function(){n.setState({lat:40.71,long:-74}),alert("Unable to retrieve your location, so here's NY City's Comparison")}))},n.state={lat:[40.71],long:[-74]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.handleEvent()}},{key:"render",value:function(){var e=this.state,t=e.lat,a=e.long;return console.log(t,a),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(k,{lat:this.state.lat,long:this.state.long})})}}]),a}(n.Component),S="https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=".concat("yCwb05JC1ccmoZ4jFHTMcbiQIa3pV5MAeI22MlmG"),P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={marspic:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(S).then((function(e){return e.json()})).then((function(t){e.setState({marspic:t.latest_photos[0].img_src})}))}},{key:"render",value:function(){var e=this.state.marspic;return console.log(e),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title",children:"Mars"}),Object(l.jsx)("a",{href:this.state.image,children:Object(l.jsx)("img",{alt:"mars from perseverance",src:this.state.marspic,className:"planet-photo"})}),Object(l.jsx)("p",{className:"explText",children:"Perseverance's latest photo from Mars"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(F,{})]})}}]),a}(n.Component);a(39).config();var E=function(){return Object(l.jsx)(i.b,{basename:"/HelloSpace",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"page-container",children:[Object(l.jsx)("div",{className:"LeftPanel",children:Object(l.jsx)(g,{})}),Object(l.jsx)("div",{className:"main body-text",children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/home",component:O}),Object(l.jsx)(o.b,{exact:!0,path:"/earth",component:w}),Object(l.jsx)(o.b,{exact:!0,path:"/mars",component:P}),Object(l.jsx)(o.b,{render:function(){return Object(l.jsx)(o.a,{to:"/home"})}})]})})]}),Object(l.jsx)("div",{className:"footer-size",children:Object(l.jsx)(j,{})})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(E,{})})}),document.getElementById("root")),z()}},[[42,1,2]]]);
//# sourceMappingURL=main.f79e1734.chunk.js.map