(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),i=n(9),o=n(10),u=n(4),h=n(13),l=n(12),d=(n(18),n(3)),m=n.n(d),p=n(7);function f(e,t){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(m.a.mark((function e(t,n){var a,r,s=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:"",e.prev=1,e.next=4,fetch(n+a,{method:t});case 4:return r=e.sent,e.abrupt("return",r.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),console.log("There has been a problem with your fetch operation: ".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function v(){return(v=Object(p.a)(m.a.mark((function e(t){var n,a,r,s,c,i,o,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("GET","http://data.nba.net/10s/prod/v1/today.json");case 2:return n=e.sent,a=n.seasonScheduleYear,e.next=6,f("GET","http://data.nba.net/10s/prod/v2/".concat(a,"/teams.json"));case 6:return r=e.sent,e.next=9,f("GET","http://data.nba.net/10s/prod/v1/".concat(t,"/scoreboard.json"));case 9:return s=e.sent,c=[],e.next=13,f("GET","http://data.nba.net/10s/prod/v1/2020/players.json");case 13:return i=e.sent,o="",i.league.standard.forEach((function(e){"Stephen"==e.firstName&&(o=e.personId)})),console.log(o),e.next=19,f("GET","http://data.nba.net/10s/prod/v1/2020/players/".concat(o,"_profile.json"));case 19:return u=e.sent,console.log(u),s.games.forEach((function(e){var t=r.league.standard.filter((function(t){return t.teamId===e.hTeam.teamId}))[0].fullName,n=r.league.standard.filter((function(t){return t.teamId===e.vTeam.teamId}))[0].fullName,a=e.hTeam.score,s=e.vTeam.score,i=e.gameId;c.push({hTeam:{fullName:t,score:a},vTeam:{fullName:n,score:s},key:i})})),e.abrupt("return",c);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(5),g=n.n(b),x="YYYYMMDD",O="DD MM YYYY";function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g()().format(x);return 0===e?t:g()(t).add(e,"days").format(x)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O;return g()(e).format(t)}var w=n(11),N=n.n(w),k=n(1);function G(e){return Object(k.jsxs)("div",{className:"card",children:[e.hTeam.fullName," ",Object(k.jsx)("span",{children:"vs"})," ",e.vTeam.fullName,Object(k.jsx)("br",{}),e.hTeam.score," - ",e.vTeam.score]})}var D=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={searching:!1,games:[],currentDate:T(0)},a.changeView=a.changeView.bind(Object(u.a)(a)),a.getGames(),a}return Object(o.a)(n,[{key:"getGames",value:function(){var e=this;this.setState({searching:!0}),function(e){return v.apply(this,arguments)}(this.state.currentDate).then((function(t){e.setState({games:t,searching:!1})}))}},{key:"changeView",value:function(e){this.setState({currentDate:T(e,this.state.currentDate)},this.getGames)}},{key:"showGamesView",value:function(){return this.state.searching?Object(k.jsx)("div",{children:Object(k.jsx)(N.a,{type:"Circles",color:"white",height:80,width:80})}):Object(k.jsx)("div",{children:this.state.games.map((function(e){return Object(k.jsx)(G,{vTeam:e.vTeam,hTeam:e.hTeam},e.key)}))})}},{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:this.props.title}),Object(k.jsxs)("div",{className:"inline",children:[Object(k.jsx)("button",{onClick:function(){return e.changeView(-1)},className:"dateBtn",disabled:this.state.searching,children:"\u21e6"}),Object(k.jsx)("p",{className:"date",children:y(this.state.currentDate)}),Object(k.jsx)("button",{onClick:function(){return e.changeView(1)},className:"dateBtn",disabled:this.state.searching,children:"\u21e8"})]}),Object(k.jsx)("div",{className:"centered"}),this.showGamesView()]})}}]),n}(r.a.Component),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(D,{title:"NBA Games"})}),document.getElementById("root")),Y()}},[[42,1,2]]]);
//# sourceMappingURL=main.0f81d3cd.chunk.js.map