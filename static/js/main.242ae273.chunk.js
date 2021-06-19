(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(18),r=n.n(c),s=(n(27),n(11)),o=n(7),l=n(8),d=n(9),u=n(12),h=n(10),m=n(5),p=n.n(m),j=n(13),b=n(6),f=n.n(b),v="YYYYMMDD",x="DD MM YYYY";function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f()().format(v);return 0===e?t:f()(t).add(e,"days").format(v)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x;return f()(e).local().format(t)}function T(e){return f()(e).local().format("HH:mm")}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(p.a.mark((function e(t,n){var a,i,c=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:"",e.prev=1,e.next=4,fetch(n+a,{method:t});case 4:return i=e.sent,e.abrupt("return",i.json());case 8:e.prev=8,e.t0=e.catch(1),console.log("Issue with fetch: ".concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function k(){return(k=Object(j.a)(p.a.mark((function e(t){var n,a,i,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("GET","https://data.nba.net/10s/prod/v1/today.json");case 2:return n=e.sent,a=n.seasonScheduleYear,e.next=6,w("GET","https://data.nba.net/10s/prod/v2/".concat(a,"/teams.json"));case 6:return i=e.sent,e.next=9,w("GET","https://data.nba.net/10s/prod/v1/".concat(t,"/scoreboard.json"));case 9:return c=e.sent,r=[],c.games.forEach((function(e){r.push({hTeam:{fullName:i.league.standard.filter((function(t){return t.teamId===e.hTeam.teamId}))[0].fullName,score:e.hTeam.score,seriesWin:e.playoffs.hTeam.seriesWin},vTeam:{fullName:i.league.standard.filter((function(t){return t.teamId===e.vTeam.teamId}))[0].fullName,score:e.vTeam.score,seriesWin:e.playoffs.vTeam.seriesWin},date:e.homeStartDate,time:T(e.startTimeUTC),key:e.gameId,gameId:e.gameId,startTimeTBD:e.isStartTimeTBD,arena:"".concat(e.arena.name,", ").concat(e.arena.city," "),isActiveGame:e.isGameActivated,isEnded:void 0!=e.endTimeUTC})})),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(j.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("GET","https://data.nba.net/10s/prod/v1/".concat(t,"/").concat(n,"_boxscore.json"));case 2:return a=e.sent.basicGameData,e.abrupt("return",{hTeamScore:a.hTeam.score,vTeamScore:a.vTeam.score,currentPeriod:a.period.current,isEndOfPeriod:a.period.isHalftime,isHalftime:a.period.isEndOfPeriod,clock:a.clock});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G,S,E,I,z,A,C,N,Y,B,P,W,F,H,M,V,J,L,U,Q=n(2),_=n(3),q=(_.a.div(G||(G=Object(Q.a)(["\n  background-color: #3d424d;\n  font-size: calc(8px + 2vmin);\n  display: flex;\n  flex-direction: column;\n"]))),_.a.div(S||(S=Object(Q.a)(["\n  background-color: #2d3038;\n  padding: 10px 0;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px 1px #0e1529;\n  margin: 5px 0;\n"])))),K=_.a.div(E||(E=Object(Q.a)(["\n  display: flex; \n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),R=_.a.div(I||(I=Object(Q.a)(["\n  text-align: right;\n  width: 47%;\n"]))),X=_.a.div(z||(z=Object(Q.a)(["\n  text-align: left;\n  width: 47%;\n"]))),Z=_.a.div(A||(A=Object(Q.a)(["\n  width: 4%;\n  text-align: center;\n  font-weight: 800;\n  font-size: calc(3px + 2vmin);\n"]))),$=_.a.div(C||(C=Object(Q.a)(["\n  text-align: center;\n  margin: 0;\n"]))),ee=_.a.div(N||(N=Object(Q.a)(["\n  font-size: calc(8px + 2vmin);\n  text-shadow: 2px 2px #0e1529;\n  line-height: calc(20px + 2vmin);\n"]))),te=_.a.div(Y||(Y=Object(Q.a)(["\n  font-size: calc(5px + 2vmin);\n  line-height: calc(15px + 2vmin);\n"]))),ne=_.a.div(B||(B=Object(Q.a)(["\n  font-size: calc(7px + 2vmin);\n  line-height: calc(18px + 2vmin);\n"]))),ae=_.a.div(P||(P=Object(Q.a)(["\n  background-color: #444853;\n  text-align: center;\n  font-size: 15px;;\n"]))),ie=n(1),ce=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),a=t.call(this,e),e.isActiveGame&&(a.state={currentPeriod:"",vTeamScore:e.vTeam.score,hTeamScore:e.hTeam.score,clock:"",isHalftime:!1,isEndOfPeriod:!1},a.SetActiveGame()),a}return Object(l.a)(n,[{key:"SetActiveGame",value:function(){var e=this;console.log("subscription set"),setInterval((function(){return function(e,t){return D.apply(this,arguments)}(e.props.date,e.props.gameId).then((function(t){console.log("updating score for "+e.props.hTeam.fullName),e.setState(Object(s.a)({},t))}))}),5e3)}},{key:"gameScore",value:function(){return Object(ie.jsxs)(K,{children:[Object(ie.jsx)(R,{children:Object(ie.jsx)(ee,{children:this.props.hTeam.score})}),Object(ie.jsx)(Z,{children:"-"}),Object(ie.jsx)(X,{children:Object(ie.jsx)(ee,{children:this.props.vTeam.score})})]})}},{key:"activeGameDetails",value:function(){return Object(ie.jsx)(ae,{children:"Q".concat(this.state.currentPeriod," - ").concat(this.state.clock)})}},{key:"endedGameDetails",value:function(){return Object(ie.jsxs)(K,{children:[Object(ie.jsx)(R,{children:Object(ie.jsx)(te,{children:this.props.hTeam.seriesWin})}),Object(ie.jsx)(Z,{children:"-"}),Object(ie.jsx)(X,{children:Object(ie.jsx)(te,{children:this.props.vTeam.seriesWin})})]})}},{key:"upcomingGameDetails",value:function(){return Object(ie.jsx)($,{children:Object(ie.jsx)(te,{children:this.props.arena})})}},{key:"gameStartTime",value:function(){return Object(ie.jsx)($,{children:Object(ie.jsx)(ne,{children:this.props.startTimeTBD?"TBD":this.props.time})})}},{key:"gameDetails",value:function(){return this.props.isEnded?this.endedGameDetails():this.upcomingGameDetails()}},{key:"render",value:function(){return Object(ie.jsxs)(q,{children:[Object(ie.jsxs)(K,{children:[Object(ie.jsx)(R,{children:Object(ie.jsx)(ee,{children:this.props.hTeam.fullName})}),Object(ie.jsx)(Z,{children:"vs"}),Object(ie.jsx)(X,{children:Object(ie.jsx)(ee,{children:this.props.vTeam.fullName})})]}),this.props.isActiveGame||this.props.isEnded?this.gameScore():this.gameStartTime(),this.props.isActiveGame?this.activeGameDetails():this.gameDetails()]})}}]),n}(i.a.Component),re=_.a.div(W||(W=Object(Q.a)(["\n  width: fit-content;\n  margin: auto;\n  display: flex; \n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),se=_.a.p(F||(F=Object(Q.a)(["\n  font-size: calc(4px + 2vmin);\n  vertical-align: middle;\n  margin: 10px;\n"]))),oe=_.a.button(H||(H=Object(Q.a)(["\n  margin: 10px;\n  font-size: calc(10px + 2vmin);\n  font-weight: bold;\n  background-color: #2d3038;\n  color: white;\n  border-radius: 20%;\n"]))),le=function(e){return Object(ie.jsxs)(re,{children:[Object(ie.jsx)(oe,{onClick:function(){return e.navigation(-1)},disabled:e.disabled,children:"\u2962"}),Object(ie.jsx)(se,{children:O(e.date)}),Object(ie.jsx)(oe,{onClick:function(){return e.navigation(1)},disabled:e.disabled,children:"\u2964"})]})},de=n(22),ue=n.n(de),he=_.a.div(M||(M=Object(Q.a)(["\n    background-color: #3d424d;\n    font-size: calc(8px + 2vmin);\n    color: white;\n    display: flex;\n    flex-direction: column;\n"]))),me=_.a.div(V||(V=Object(Q.a)(["\n    margin: 10px auto;\n    text-align: center;\n    font-size: calc(13px + 2vmin);\n"]))),pe=Object(_.a)(ue.a)(J||(J=Object(Q.a)(["\n    width: fit-content;\n    margin: 20px auto;\n"]))),je=_.a.div(L||(L=Object(Q.a)(["\n    color: white;\n    max-width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n"]))),be=_.a.p(U||(U=Object(Q.a)(["\n    width: fit-content;\n    margin: 10px auto;\n"]))),fe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={searching:!0,games:[],currentDate:g(0)},a.changeView=a.changeView.bind(Object(d.a)(a)),a.getGames(),a}return Object(l.a)(n,[{key:"getGames",value:function(){var e=this;this.setState({searching:!0}),function(e){return k.apply(this,arguments)}(this.state.currentDate).then((function(t){e.setState({games:t,searching:!1})}))}},{key:"changeView",value:function(e){this.setState({currentDate:g(e,this.state.currentDate)},this.getGames)}},{key:"games",value:function(){return this.state.searching?Object(ie.jsx)(pe,{type:"Circles",color:"white",height:80,width:80}):0!=this.state.games.length?Object(ie.jsx)(he,{children:this.state.games.map((function(e){return Object(ie.jsx)(ce,Object(s.a)({},e))}))}):Object(ie.jsx)(be,{children:" No Game Found :("})}},{key:"render",value:function(){return Object(ie.jsxs)(je,{children:[Object(ie.jsx)(me,{children:this.props.title}),Object(ie.jsx)(le,{navigation:this.changeView,date:this.state.currentDate,disabled:this.state.searching}),this.games()]})}}]),n}(i.a.Component),ve=function(e){return Object(ie.jsx)(fe,{title:"NBA Games"})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(ie.jsx)(i.a.StrictMode,{children:Object(ie.jsx)(ve,{title:"NBA App"})}),document.getElementById("root")),xe()}},[[55,1,2]]]);
//# sourceMappingURL=main.242ae273.chunk.js.map