(self.webpackChunkclient=self.webpackChunkclient||[]).push([[145,136],{2136:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i}});n(2791);var t=n(74),a=n(4270),c=n(184),i=function(e){return(0,c.jsxs)("div",{id:"error",children:[(0,c.jsx)(a.Z,{children:(0,c.jsx)("title",{children:"404 | \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}),(0,c.jsx)(t.Z,{offset:800,children:(0,c.jsx)("img",{src:n(9882)("./error404".concat(Math.ceil(4*Math.random()),".jpg")),alt:"img"})}),(0,c.jsxs)("p",{children:["\u041e\u0448\u0438\u0431\u043a\u0430 404 | \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 | ",(0,c.jsx)("a",{href:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})]})}},3573:function(e,s,n){"use strict";n.d(s,{Z:function(){return S}});var t=n(4165),a=n(5861),c=n(885),i=n(2791),r=(n(4676),n(4432),n(5880),n(435),n(8830)),o=n(7152),l=n(4569),d=n.n(l),h=n(2271),u=(n(4992),n(74)),x=n(8890),f=n.n(x),m=n(8329),j=n(2183),p=n.p+"static/media/stadium.fec3d4b281de73cfe249.webp",g=n.p+"static/media/location.0e95e7eb2f630554a78c.webp",v=n.p+"static/media/whistle.7abfda1e248dc05f8a50.webp",w=n(8309),N=n(6852),Z=n(1927),b=n(184);o.ZP.use([o.tl]);var S=function(e){var s=(0,i.useState)(),n=(0,c.Z)(s,2),o=n[0],l=n[1];(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.Z.get("auth")&&d().post("/matches/expected",{token:m.Z.get("auth")}).then((function(e){var s=[],n=e.data.filter((function(e){return!s.includes(e.hName)&&(s.push(e.hName),!0)}));l(n&&n.map((function(e,s){return(0,b.jsxs)(r.o5,{children:[(0,b.jsxs)("div",{className:"top",children:[(0,b.jsxs)("div",{className:"lNameLogo",children:[(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:""===e.stadium?"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u0437\u0436\u0435":e.stadium,children:(0,b.jsx)("img",{src:p,alt:"\u0441\u0442\u0430\u0434\u0438\u043e\u043d"})})}),(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:e.lNameRoundDateTime[0]&&-1!==e.lNameRoundDateTime[0].indexOf("\u0422\u043e\u0432\u0430\u0440\u0438\u0449\u0435\u0441\u043a\u0438\u0439")?"\u0422\u043e\u0432\u0430\u0440\u0438\u0449\u0435\u0441\u043a\u0438\u0439":e.lNameRoundDateTime[0]&&e.lNameRoundDateTime[0]+" | "+e.lNameRoundDateTime[1]+", "+e.lNameRoundDateTime[2],children:(0,b.jsx)("img",{width:"14px",src:"https://s.scr365.net/s1/logo/13_36_14/fPHr8_16_439.png"===e.lLogo?j:e.lLogo&&"https://s.scr365.net/img/ball16.png"===e.lLogo?w:e.lLogo&&"https://s.scr365.net/s1/logo/12_250_17/a7wHB_16_438.png"===e.lLogo?j:e.lLogo&&"https://s.scr365.net/s1/logo/22_33_11/46atU_16_742.png"===e.lLogo?N:e.lLogo,alt:e.lName})})}),(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:""===e.venue?"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u0437\u0436\u0435":e.venue,children:(0,b.jsx)("img",{src:g,alt:"\u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"})})})]}),(0,b.jsxs)("div",{className:"teamsCoef",children:[(0,b.jsxs)("div",{className:"teams",children:[(0,b.jsxs)("div",{className:"ht",children:[(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:e.hName,children:(0,b.jsx)("img",{src:e.hLogo,alt:e.hName})})}),(0,b.jsx)("span",{children:e.hName.slice(0,13)})]}),(0,b.jsxs)("div",{className:"at",children:[(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:e.aName,children:(0,b.jsx)("img",{src:e.aLogo,alt:e.aName})})}),(0,b.jsx)("span",{children:e.aName.slice(0,13)})]})]}),(0,b.jsx)(h.ZP,{content:"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0442\u043e\u0447\u043d\u044b\u043c\u0438 \u0432 \u0434\u0435\u043d\u044c \u0438\u0433\u0440\u044b",children:(0,b.jsxs)("div",{className:"coefs",children:[(0,b.jsx)("span",{children:""===e.w1||e.w1&&"\u0414\u043e\u0440\u0434\u043e\u0439"===e.hName||e.w1&&"\u0414\u043e\u0440\u0434\u043e\u0439"===e.aName||e.w1&&"\u0410\u0431\u0434\u044b\u0448-\u0410\u0442\u0430"===e.hName||e.w1&&"\u0410\u0431\u0434\u044b\u0448-\u0410\u0442\u0430"===e.aName||e.w1&&"\u041a\u0430\u0439\u0440\u0430\u0442"===e.hName||e.w1&&"\u041a\u0430\u0439\u0440\u0430\u0442"===e.aName||e.w1&&void 0===e.lLogo?"-":e.w1}),(0,b.jsx)("span",{children:""===e.d||e.d&&"\u0414\u043e\u0440\u0434\u043e\u0439"===e.hName||e.d&&"\u0414\u043e\u0440\u0434\u043e\u0439"===e.aName||e.d&&"\u0410\u0431\u0434\u044b\u0448-\u0410\u0442\u0430"===e.hName||e.d&&"\u0410\u0431\u0434\u044b\u0448-\u0410\u0442\u0430"===e.aName||e.d&&"\u041a\u0430\u0439\u0440\u0430\u0442"===e.hName||e.d&&"\u041a\u0430\u0439\u0440\u0430\u0442"===e.aName||e.d&&void 0===e.lLogo?"-":e.d}),(0,b.jsx)("span",{children:""===e.w2||e.w2&&"\u0414\u043e\u0440\u0434\u043e\u0439"===e.hName||e.w2&&"\u0414\u043e\u0440\u0434\u043e\u0439"===e.aName||e.w2&&"\u0410\u0431\u0434\u044b\u0448-\u0410\u0442\u0430"===e.hName||e.w2&&"\u0410\u0431\u0434\u044b\u0448-\u0410\u0442\u0430"===e.aName||e.w2&&"\u041a\u0430\u0439\u0440\u0430\u0442"===e.hName||e.w2&&"\u041a\u0430\u0439\u0440\u0430\u0442"===e.aName||e.w2&&void 0===e.lLogo?"-":e.w2})]})})]})]}),(0,b.jsxs)("div",{className:"bottom",children:[(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:e.refree?e.refree.replace("\u0410\u0440\u0431\u0438\u0442\u0440\u044b",""):"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u0437\u0436\u0435",children:(0,b.jsx)("img",{src:v,alt:"\u0441\u0443\u0434\u044c\u044f"})})}),(0,b.jsx)("span",{children:e.lNameRoundDateTime[3]&&e.lNameRoundDateTime[3]}),(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:e.weatherDescr.length<5?"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u0437\u0436\u0435":e.weatherDescr,children:e.weatherDescr.length<5?(0,b.jsx)("span",{style:{fontWeight:"bold",color:"blue"},children:"?"}):(0,b.jsx)("img",{src:e.weatherIco,alt:"\u043f\u043e\u0433\u043e\u0434\u0430"})})})]})]},"matchesSlider"+s)})))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),setInterval((function(){e()}),3e4)}),[]);return(0,b.jsx)("div",{id:"matchesSlider",children:(0,b.jsxs)("section",{id:"endedQckNav",children:[(0,b.jsxs)("div",{className:"title",children:[(0,b.jsx)("h2",{className:"sectionName",children:"\u0411\u043b\u0438\u0436\u0430\u0439\u0449\u0438\u0435 \u043c\u0430\u0442\u0447\u0438 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434"}),(0,b.jsx)(u.Z,{offset:800,children:(0,b.jsx)(h.ZP,{content:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443",children:(0,b.jsx)("img",{src:Z,alt:"add favorite",onClick:function(){m.Z.get("auth")?f()(".favoriteTeamPopUp").fadeIn()&&f()("body").css({overflow:"hidden"}):f()(".authWrap").fadeIn()&&f()("body").css({overflow:"hidden"}),f()("#auth input").val(""),f()("#auth .error").text("")}})})})]}),(0,b.jsx)("div",{className:"matchesSliderWrap",children:(0,b.jsx)(r.tq,{pagination:{type:"progressbar"},spaceBetween:20,grabCursor:!0,slidesPerView:1,breakpoints:{360:{slidesPerView:2},540:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5,spaceBetween:30}},children:o&&o.length>0?o:(0,b.jsx)("div",{className:"noData",children:"\u0414\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442"})})})]})})}},2924:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return D}});var t=n(2791),a=n(6871),c=n(4165),i=n(5861),r=n(885),o=n(3504),l=n(4569),d=n.n(l),h=n(4886),u=n.n(h),x=n(8890),f=n.n(x),m=n(74),j=n(184),p=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1];return(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/news/otherNews").then((function(e){a(e.data&&e.data.reverse().map((function(e){var s,n,t,a,c=new Date(e.date),i=String(c.getDate()).length<2?"0"+String(c.getDate()):String(c.getDate()),r=String(c.getMonth()).length<2?"0"+String(c.getMonth()+1):String(c.getMonth()+1),l=c.getFullYear(),d=String(c.getHours()).length<2?"0"+String(c.getHours()):String(c.getHours()),h=String(c.getMinutes()).length<2?"0"+String(c.getMinutes()):String(c.getMinutes());return(0,j.jsx)("div",{className:"cart",id:"id"+e.id,onMouseEnter:function(){f()(".newsHr #".concat("id"+e.id," .img img")).css({transform:"scale(1.04)"}),f()(".newsHr #".concat("id"+e.id)).css({boxShadow:"0px 0px 15px 1px #000"}),f()(".newsHr #".concat("id"+e.id," h3")).css({backgroundColor:"rgba(0, 0, 0, 0.7)"}).css({color:"rgb(224, 164, 79)"}),f()(".newsHr #".concat("id"+e.id," .img img")).css({opacity:"1"})},onMouseLeave:function(){f()(".newsHr #".concat("id"+e.id," .img img")).css({transform:"scale(1)"}),f()(".newsHr #".concat("id"+e.id)).css({boxShadow:"0px 0px 0px 0px #000"}),f()(".newsHr #".concat("id"+e.id," h3")).css({backgroundColor:"rgba(0, 0, 0, 0.1)"}).css({color:"rgb(255, 255, 255)"}),f()(".newsHr #".concat("id"+e.id," .img img")).css({opacity:"0.8"})},children:(0,j.jsxs)(o.rU,{to:"/news/read/".concat(e.id+"-"+u()().transform(e.title).replace(/[^a-zA-Z\s]/g,"").replace(/\s+/g,"-").toLowerCase()),children:[(0,j.jsx)("div",{className:"img",children:(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)("img",{alt:e.title,src:e.img})})}),(0,j.jsx)("h3",{children:e.title}),(0,j.jsxs)("span",{className:"date",children:[i+"-"+r+"-"+l+" | "+d+":"+h," ",(0,j.jsxs)("span",{className:"views",children:["\ud83d\udc41 ","".concat(e&&(null===(s=e.views)||void 0===s?void 0:s.split(",").length)>0?null===(n=e.views)||void 0===n?void 0:n.split(",").length:"0")]})]}),(0,j.jsxs)("span",{className:"category",children:[(0,j.jsxs)("span",{className:"likes",children:["\u2764 ","".concat(e&&(null===(t=e.likes)||void 0===t?void 0:t.split(",").length)>0?null===(a=e.likes)||void 0===a?void 0:a.split(",").length:"0")]})," ","#".concat(e.category)]})]})},"news"+e.id)})))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsxs)("div",{id:"newsOther",className:"newsHr",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u0420\u0430\u0437\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),(0,j.jsx)("section",{children:n})]})},g=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1];return(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/news/blogs").then((function(e){a(e.data&&e.data.reverse().map((function(e){var s,n,t,a,c=new Date(e.date),i=String(c.getDate()).length<2?"0"+String(c.getDate()):String(c.getDate()),r=String(c.getMonth()).length<2?"0"+String(c.getMonth()+1):String(c.getMonth()+1),l=c.getFullYear(),d=String(c.getHours()).length<2?"0"+String(c.getHours()):String(c.getHours()),h=String(c.getMinutes()).length<2?"0"+String(c.getMinutes()):String(c.getMinutes());return(0,j.jsx)("div",{className:"cart",id:"id"+e.id,onMouseEnter:function(){f()(".newsHr #".concat("id"+e.id," .img img")).css({transform:"scale(1.04)"}),f()(".newsHr #".concat("id"+e.id)).css({boxShadow:"0px 0px 15px 1px #000"}),f()(".newsHr #".concat("id"+e.id," h3")).css({backgroundColor:"rgba(0, 0, 0, 0.7)"}).css({color:"rgb(224, 164, 79)"}),f()(".newsHr #".concat("id"+e.id," .img img")).css({opacity:"1"})},onMouseLeave:function(){f()(".newsHr #".concat("id"+e.id," .img img")).css({transform:"scale(1)"}),f()(".newsHr #".concat("id"+e.id)).css({boxShadow:"0px 0px 0px 0px #000"}),f()(".newsHr #".concat("id"+e.id," h3")).css({backgroundColor:"rgba(0, 0, 0, 0.1)"}).css({color:"rgb(255, 255, 255)"}),f()(".newsHr #".concat("id"+e.id," .img img")).css({opacity:"0.8"})},children:(0,j.jsxs)(o.rU,{to:"/news/read/".concat(e.id+"-"+u()().transform(e.title).replace(/[^a-zA-Z\s]/g,"").replace(/\s+/g,"-").toLowerCase()),children:[(0,j.jsx)("div",{className:"img",children:(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)("img",{alt:e.title,src:e.img})})}),(0,j.jsx)("h3",{children:e.title}),(0,j.jsxs)("span",{className:"date",children:[i+"-"+r+"-"+l+" | "+d+":"+h," ",(0,j.jsxs)("span",{className:"views",children:["\ud83d\udc41 ","".concat(e&&(null===(s=e.views)||void 0===s?void 0:s.split(",").length)>0?null===(n=e.views)||void 0===n?void 0:n.split(",").length:"0")]})]}),(0,j.jsxs)("span",{className:"category",children:[(0,j.jsxs)("span",{className:"likes",children:["\u2764 ","".concat(e&&(null===(t=e.likes)||void 0===t?void 0:t.split(",").length)>0?null===(a=e.likes)||void 0===a?void 0:a.split(",").length:"0")]})," ","#".concat(e.category)]})]})},"blogs"+e.id)})))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsxs)("div",{id:"blogsOther",className:"newsHr",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u0411\u043b\u043e\u0433\u0438"}),(0,j.jsx)("section",{children:n})]})},v=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1];return(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/news/videoNews").then((function(e){a(e.data&&e.data.reverse().map((function(e){var s,n,t,a,c=new Date(e.date),i=String(c.getDate()).length<2?"0"+String(c.getDate()):String(c.getDate()),r=String(c.getMonth()).length<2?"0"+String(c.getMonth()+1):String(c.getMonth()+1),l=c.getFullYear(),d=String(c.getHours()).length<2?"0"+String(c.getHours()):String(c.getHours()),h=String(c.getMinutes()).length<2?"0"+String(c.getMinutes()):String(c.getMinutes());return(0,j.jsx)("div",{className:"cart",id:"id"+e.id,onMouseEnter:function(){f()(".newsHr #".concat("id"+e.id," .img img")).css({transform:"scale(1.04)"}),f()(".newsHr #".concat("id"+e.id)).css({boxShadow:"0px 0px 15px 1px #000"}),f()(".newsHr #".concat("id"+e.id," h3")).css({backgroundColor:"rgba(0, 0, 0, 0.7)"}).css({color:"rgb(224, 164, 79)"}),f()(".newsHr #".concat("id"+e.id," .img img")).css({opacity:"1"})},onMouseLeave:function(){f()(".newsHr #".concat("id"+e.id," .img img")).css({transform:"scale(1)"}),f()(".newsHr #".concat("id"+e.id)).css({boxShadow:"0px 0px 0px 0px #000"}),f()(".newsHr #".concat("id"+e.id," h3")).css({backgroundColor:"rgba(0, 0, 0, 0.1)"}).css({color:"rgb(255, 255, 255)"}),f()(".newsHr #".concat("id"+e.id," .img img")).css({opacity:"0.8"})},children:(0,j.jsxs)(o.rU,{to:"/news/read/".concat(e.id+"-"+u()().transform(e.title).replace(/[^a-zA-Z\s]/g,"").replace(/\s+/g,"-").toLowerCase()),children:[(0,j.jsx)("div",{className:"img",children:(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)("img",{alt:e.title,src:e.img})})}),(0,j.jsx)("h3",{children:e.title}),(0,j.jsxs)("span",{className:"date",children:[i+"-"+r+"-"+l+" | "+d+":"+h," ",(0,j.jsxs)("span",{className:"views",children:["\ud83d\udc41 ","".concat(e&&(null===(s=e.views)||void 0===s?void 0:s.split(",").length)>0?null===(n=e.views)||void 0===n?void 0:n.split(",").length:"0")]})]}),(0,j.jsxs)("span",{className:"category",children:[(0,j.jsxs)("span",{className:"likes",children:["\u2764 ","".concat(e&&(null===(t=e.likes)||void 0===t?void 0:t.split(",").length)>0?null===(a=e.likes)||void 0===a?void 0:a.split(",").length:"0")]})," ","#".concat(e.category)]})]})},"video"+e.id)})))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsxs)("div",{id:"videoOther",className:"newsHr",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u0412\u0438\u0434\u0435\u043e"}),(0,j.jsx)("section",{children:n})]})},w=n(2271),N=(n(4992),n(5432)),Z=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1],o=(0,t.useState)(),l=(0,r.Z)(o,2),h=l[0],u=l[1];return(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/standings/uefacountryrankseason").then((function(e){a(e.data&&e.data.map((function(e,s){return(0,j.jsxs)("div",{children:[(0,j.jsx)(w.ZP,{content:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0447\u043a\u043e\u0432 \u0437\u0430 \u0441\u0435\u0437\u043e\u043d 20"+e.seasonLast5.split("/")[0]+"/20"+e.seasonLast5.split("/")[1],children:(0,j.jsx)("span",{children:e.seasonLast5})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0447\u043a\u043e\u0432 \u0437\u0430 \u0441\u0435\u0437\u043e\u043d 20"+e.seasonLast4.split("/")[0]+"/20"+e.seasonLast4.split("/")[1],children:(0,j.jsx)("span",{children:e.seasonLast4})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0447\u043a\u043e\u0432 \u0437\u0430 \u0441\u0435\u0437\u043e\u043d 20"+e.seasonLast3.split("/")[0]+"/20"+e.seasonLast3.split("/")[1],children:(0,j.jsx)("span",{children:e.seasonLast3})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0447\u043a\u043e\u0432 \u0437\u0430 \u0441\u0435\u0437\u043e\u043d 20"+e.seasonLast2.split("/")[0]+"/20"+e.seasonLast2.split("/")[1],children:(0,j.jsx)("span",{children:e.seasonLast2})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0447\u043a\u043e\u0432 \u0437\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043e\u043d",children:(0,j.jsx)("span",{className:"current",children:e.seasonCurrent})})]},"uefaCountryRankSeason"+s)})))})).catch((function(e){console.log(e)}));case 2:d().get("/standings/uefacountryrank").then((function(e){u(e.data&&e.data.map((function(e,s){return(0,j.jsxs)("div",{className:"col wrap",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("span",{className:"place",children:[e.place,(0,j.jsx)("span",{children:"."})]}),(0,j.jsxs)("div",{className:"flagName",children:[(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:e.name,children:(0,j.jsx)("img",{src:"https://terrikon.com"+e.flag,alt:e.name})})}),(0,j.jsx)("span",{children:e.name})]}),(0,j.jsx)("span",{children:e.quantity}),(0,j.jsx)("span",{className:"total",children:e.total})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:e.totalLast5}),(0,j.jsx)("span",{children:e.totalLast4}),(0,j.jsx)("span",{children:e.totalLast3}),(0,j.jsx)("span",{children:e.totalLast2}),(0,j.jsx)("span",{className:"current",children:e.totalCurrent})]})]},"uefaCountryRank"+s)})))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsxs)("div",{id:"uefaCountryRankOther",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0439 \u0423\u0415\u0424\u0410"}),(0,j.jsx)("section",{children:(0,j.jsxs)("div",{className:"uefaTable",children:[(0,j.jsx)("div",{className:"logoWrap",children:(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:"UEFA",children:(0,j.jsx)("img",{src:N,alt:"uefaLogo"})})})}),(0,j.jsxs)("div",{className:"col",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(w.ZP,{content:"\u041f\u043e\u0437\u0438\u0446\u0438\u044f",children:(0,j.jsx)("span",{children:"#"})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0442\u0440\u0430\u043d\u0430",children:(0,j.jsx)("span",{children:"\u0421\u0442\u0440\u0430\u043d\u0430"})}),(0,j.jsx)(w.ZP,{content:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0443\u0431\u043e\u0432",children:(0,j.jsx)("span",{children:"\u041a\u043b\u0443\u0431\u044b"})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0447\u043a\u043e\u0432",children:(0,j.jsx)("span",{className:"total",children:"\u0421\u0443\u043c\u043c\u0430"})})]}),n]}),h]})})]})},b=n(2687),S=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1],o=(0,t.useState)(50),l=(0,r.Z)(o,2),h=l[0],u=l[1];(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/standings/fifaranking").then((function(e){a(e.data&&e.data.splice(0,h).map((function(e,s){return(0,j.jsxs)("div",{className:"col wrap",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("span",{className:"place",children:[e.place,".",(0,j.jsx)("span",{})]}),(0,j.jsxs)("div",{className:"flagName",children:[(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:e.name,children:(0,j.jsx)("img",{src:e.flag,alt:e.name})})}),(0,j.jsx)("span",{children:e.name})]}),(0,j.jsx)("span",{className:"="===e.difference[0]?"diffEqual":"\u2191"===e.difference[0]?"diffUp":"\u2193"===e.difference[0]&&"diffDown",children:e.difference}),(0,j.jsx)("span",{className:"total",children:e.points})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:e.pointsDiff}),(0,j.jsx)("span",{children:e.association})]})]},"fifaRanking"+s)})))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[h]);return(0,j.jsxs)("div",{id:"fifaRankOther",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0424\u0418\u0424\u0410"}),(0,j.jsx)("section",{children:(0,j.jsxs)("div",{className:"uefaTable",children:[(0,j.jsx)("div",{className:"logoWrap",children:(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:"FIFA",children:(0,j.jsx)("img",{src:b,alt:"fifaLogo"})})})}),(0,j.jsxs)("div",{className:"col",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(w.ZP,{content:"\u041f\u043e\u0437\u0438\u0446\u0438\u044f",children:(0,j.jsx)("span",{children:"#"})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0442\u0440\u0430\u043d\u0430",children:(0,j.jsx)("span",{children:"\u0421\u0442\u0440\u0430\u043d\u0430"})}),(0,j.jsx)(w.ZP,{content:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u043f\u043e\u0437\u0438\u0446\u0438\u0438",children:(0,j.jsx)("span",{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})}),(0,j.jsx)(w.ZP,{content:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0447\u043a\u043e\u0432",children:(0,j.jsx)("span",{className:"total",children:"\u041e\u0447\u043a\u0438"})})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)(w.ZP,{content:"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c\u0438 \u043e\u0447\u043a\u0430\u043c\u0438",children:(0,j.jsx)("span",{children:"+/-"})}),(0,j.jsx)(w.ZP,{content:"\u0410\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u044f",children:(0,j.jsx)("span",{children:"\u0410\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u044f"})})]})]}),n,(0,j.jsx)("div",{className:"more",children:(0,j.jsx)("span",{onClick:function(){u(h+20),f()("#fifaRank > section > div > div.more > a > span").text("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")},children:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"})})]})})]})},k=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1];return(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/tv/schedule").then((function(e){a(e.data&&e.data.map((function(e,s){return(0,j.jsxs)("div",{className:"col",children:[(0,j.jsx)("div",{className:"channel",children:(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)("img",{src:e.channel,alt:"channel"})})}),(0,j.jsxs)("div",{className:"timeProgramme",children:[(0,j.jsx)("span",{children:e.time}),(0,j.jsx)("span",{children:e.programme})]})]},"matchesSchedule"+s)})))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsxs)("div",{id:"tvScheduleOther",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u0422\u0412 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,j.jsx)("section",{children:(0,j.jsx)("div",{className:"wrap",children:n})})]})},L=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1];return(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/forecasts/odds").then((function(e){a(e.data&&e.data.map((function(e,s){return(0,j.jsxs)("div",{className:"col",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"head",children:[(0,j.jsx)("span",{children:e.lCountryName}),"\xa0\xa0|\xa0\xa0",(0,j.jsx)("span",{children:e.lName})]}),(0,j.jsxs)("div",{className:"center",children:[(0,j.jsxs)("div",{className:"home",children:[(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:e.hName,children:(0,j.jsx)("img",{src:e.hLogo,alt:e.hName})})}),(0,j.jsx)("span",{children:e.hName})]}),(0,j.jsxs)("div",{className:"dateTime",children:[(0,j.jsx)("span",{children:e.date}),(0,j.jsx)("span",{children:e.time})]}),(0,j.jsxs)("div",{className:"away",children:[(0,j.jsx)("span",{children:e.aName}),(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:e.aName,children:(0,j.jsx)("img",{src:e.aLogo,alt:e.aName})})})]})]})]}),(0,j.jsxs)("div",{className:"coefWrap",children:[(0,j.jsxs)("div",{className:"w1",children:[(0,j.jsx)(w.ZP,{content:"\u041f\u043e\u0431\u0435\u0434\u0430 \u043f\u0435\u0440\u0432\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:(0,j.jsx)("span",{children:"\u041f1"})}),(0,j.jsx)("span",{children:""===e.w1?"-":e.w1})]}),(0,j.jsxs)("div",{className:"w1",children:[(0,j.jsx)(w.ZP,{content:"\u041d\u0438\u0447\u044c\u044f",children:(0,j.jsx)("span",{children:"\u0425"})}),(0,j.jsx)("span",{children:""===e.draw?"-":e.draw})]}),(0,j.jsxs)("div",{className:"w1",children:[(0,j.jsx)(w.ZP,{content:"\u041f\u043e\u0431\u0435\u0434\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:(0,j.jsx)("span",{children:"\u041f2"})}),(0,j.jsx)("span",{children:""===e.w2?"-":e.w2})]}),(0,j.jsxs)("div",{className:"w1",children:[(0,j.jsx)(w.ZP,{content:"\u0411\u0443\u0434\u0435\u0442 \u0437\u0430\u0431\u0438\u0442\u043e \u043c\u0435\u043d\u044c\u0448\u0435 2-\u0443\u0445 (\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e) \u043c\u044f\u0447\u0435\u0439",children:(0,j.jsx)("span",{children:"\u0422\u041c 2.5"})}),(0,j.jsx)("span",{children:""===e.totalU?"-":e.totalU})]}),(0,j.jsxs)("div",{className:"w1",children:[(0,j.jsx)(w.ZP,{content:"\u0411\u0443\u0434\u0435\u0442 \u0437\u0430\u0431\u0438\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 3-\u0451\u0445 (\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e) \u043c\u044f\u0447\u0435\u0439",children:(0,j.jsx)("span",{children:"\u0422\u0411 2.5"})}),(0,j.jsx)("span",{children:""===e.totalO?"-":e.totalO})]})]})]},"forecasts"+s)})))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsxs)("div",{id:"forecastsOther",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0430 \u043c\u0430\u0442\u0447\u0438"}),(0,j.jsx)("section",{children:n})]})},P=function(){var e=(0,t.useState)(),s=(0,r.Z)(e,2),n=s[0],a=s[1];return(0,t.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,t.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/broadcasts/get").then((function(e){a(e.data&&e.data.reverse().splice(0,8).map((function(e){return(0,j.jsx)(w.ZP,{content:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c",children:(0,j.jsx)(o.rU,{to:"/broadcast/watch/".concat(e.id),id:"broadcast"+e.id,children:(0,j.jsxs)("div",{className:"col",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:e.hName,children:(0,j.jsx)("img",{src:e.hLogo,alt:e.hName})})}),(0,j.jsx)("span",{children:e.hName.slice(0,8)})]}),(0,j.jsxs)("div",{className:"timeLive",children:[(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:e.lName,children:(0,j.jsx)("img",{src:e.lLogo,alt:e.lName})})}),null===e.broadcastLink?(0,j.jsx)("span",{children:e.time}):(0,j.jsx)("span",{style:{color:"red",letterSpacing:"1.3px"},children:"live"})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:e.aName.slice(0,8)}),(0,j.jsx)(m.Z,{offset:800,children:(0,j.jsx)(w.ZP,{content:e.aName,children:(0,j.jsx)("img",{src:e.aLogo,alt:e.aName})})})]})]})})},"broadcast"+e.id)})))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsxs)("div",{className:"otherBroadcasts",children:[(0,j.jsx)("h1",{className:"pageName",children:"\u0422\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u044f \u043c\u0430\u0442\u0447\u0435\u0439"}),(0,j.jsx)("div",{className:"wrap",children:n})]})},H=n(2136),y=n(3573),D=function(){return(0,j.jsxs)("div",{id:"other",children:[(0,j.jsx)(y.Z,{}),(0,j.jsxs)(a.Z5,{children:[(0,j.jsx)(a.AW,{path:"/news",element:(0,j.jsx)(p,{})}),(0,j.jsx)(a.AW,{path:"/blogs",element:(0,j.jsx)(g,{})}),(0,j.jsx)(a.AW,{path:"/video",element:(0,j.jsx)(v,{})}),(0,j.jsx)(a.AW,{path:"/uefa-country-ranking",element:(0,j.jsx)(Z,{})}),(0,j.jsx)(a.AW,{path:"/fifa-ranking",element:(0,j.jsx)(S,{})}),(0,j.jsx)(a.AW,{path:"/tvschedule",element:(0,j.jsx)(k,{})}),(0,j.jsx)(a.AW,{path:"/odds",element:(0,j.jsx)(L,{})}),(0,j.jsx)(a.AW,{path:"/broadcasts",element:(0,j.jsx)(P,{})}),(0,j.jsx)(a.AW,{path:"*",element:(0,j.jsx)(H.default,{})})]})]})}},4432:function(){},5880:function(){},435:function(){},4676:function(){},9882:function(e,s,n){var t={"./error4041.jpg":9721,"./error4042.jpg":6599,"./error4043.jpg":6453,"./error4044.jpg":3277};function a(e){var s=c(e);return n(s)}function c(e){if(!n.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=c,e.exports=a,a.id=9882},1927:function(e,s,n){"use strict";e.exports=n.p+"static/media/addFavorite.cd24781fdca0e267db5b.webp"},2687:function(e,s,n){"use strict";e.exports=n.p+"static/media/fifaLogo.4ba9df7ab1821da12308.webp"},5432:function(e,s,n){"use strict";e.exports=n.p+"static/media/uefaLogo.caa2ac5057078f8d6201.webp"},9721:function(e,s,n){"use strict";e.exports=n.p+"static/media/error4041.e4cef78e6883fb16d116.jpg"},6599:function(e,s,n){"use strict";e.exports=n.p+"static/media/error4042.65335c1839e85e59495d.jpg"},6453:function(e,s,n){"use strict";e.exports=n.p+"static/media/error4043.4abf11b05d3545d3a70d.jpg"},3277:function(e,s,n){"use strict";e.exports=n.p+"static/media/error4044.b198061316d5165e1eac.jpg"}}]);
//# sourceMappingURL=145.631eb597.chunk.js.map