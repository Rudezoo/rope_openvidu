(this.webpackJsonprope=this.webpackJsonprope||[]).push([[0],{357:function(e,t,a){e.exports=a(639)},379:function(e,t,a){},546:function(e,t){},547:function(e,t){},548:function(e,t){},549:function(e,t){},550:function(e,t){},576:function(e,t,a){},583:function(e,t,a){},639:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),o=a(22),i=a.n(o),l=a(73),s=a(51),u=a(686),m=a(689),d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{icon:r.a.createElement(m.a,null),title:"\uc218\uace0\ud558\uc168\uc2b5\ub2c8\ub2e4!"}))},f=a(43),p=a.n(f),E=a(58),h=a(13),b=a(682),g=a(120),O=a(683),v=a(681),j=a(687),S=a(54),y=a(680),w=a(191),x=(a(379),a(690)),C=a(42),I=a.n(C),k=a(129),N="https://52.79.134.9/:4443",D=document.documentElement,T=function(e){var t=b.a.Text,a=Object(c.useState)(!0),o=Object(h.a)(a,2),i=o[0],l=o[1],s=Object(c.useState)(""),u=Object(h.a)(s,2),m=u[0],d=u[1],f=Object(c.useState)(""),C=Object(h.a)(f,2),T=C[0],P=C[1],M=Object(c.useState)(!1),A=Object(h.a)(M,2),_=A[0],R=A[1],F=Object(c.useState)(!1),V=Object(h.a)(F,2),L=V[0],z=V[1],B=Object(c.useState)("\uc2dc\ud5d8\uc744 \uc120\ud0dd\ud558\uc138\uc694"),U=Object(h.a)(B,2),Y=U[0],J=U[1],q=Object(c.useState)(0),K=Object(h.a)(q,2),H=K[0],W=K[1],G=Object(c.useState)([]),Q=Object(h.a)(G,2),X=Q[0],Z=Q[1],$=Object(c.useState)([]),ee=Object(h.a)($,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(!0),ce=Object(h.a)(ne,2),re=ce[0],oe=ce[1],ie=Object(c.useState)(""),le=Object(h.a)(ie,2),se=le[0],ue=le[1],me=Object(c.useState)(0),de=Object(h.a)(me,2),fe=de[0],pe=de[1],Ee=Object(c.useState)(""),he=Object(h.a)(Ee,2),be=he[0],ge=he[1],Oe=Object(c.useState)(""),ve=Object(h.a)(Oe,2),je=ve[0],Se=ve[1],ye=Object(c.useState)(),we=Object(h.a)(ye,2),xe=we[0],Ce=we[1],Ie=Object(c.useState)(),ke=Object(h.a)(Ie,2),Ne=ke[0],De=ke[1],Te=Object(c.useState)(),Pe=Object(h.a)(Te,2),Me=(Pe[0],Pe[1]),Ae=Object(c.useState)(),_e=Object(h.a)(Ae,2),Re=(_e[0],_e[1]),Fe=Object(c.useState)([]),Ve=Object(h.a)(Fe,2),Le=Ve[0],ze=Ve[1],Be=Object(c.useState)(!0),Ue=Object(h.a)(Be,2),Ye=Ue[0],Je=Ue[1],qe=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("http://52.79.134.9:5000/exam/lists",{}).then((function(e){for(var t=[],a=0;a<e.data.length;a++)t.push(e.data[a].title);ae(t),t=[];for(var n=0;n<e.data.length;n++)t.push(e.data[n].sessionID);Z(t)})).catch((function(e){return alert(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("http://52.79.134.9:5000/exam/get/"+be,{}).then((function(e){console.log(e.data[0].content),ue(e.data[0].content),pe(e.data[0].time),Ce(e.data[0].file),W(e.data[0].eid)})).catch((function(e){return alert(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=r.a.createElement(g.a,{onClick:function(e){var t=e.key;oe(!1),J(te[t]),ge(X[t])}},te.map((function(e,t){return r.a.createElement(g.a.Item,{key:t},e)})));Object(c.useEffect)((function(){return window.addEventListener("beforeunload",We),window.removeEventListener("beforeunload",We)})),Object(c.useEffect)((function(){if(Ne){var e=Ne;console.log(Ne),e.on("streamCreated",(function(e){})),e.on("streamDestroyed",(function(e){Ge(e.stream.streamManager)})),Xe().then((function(t){e.connect(t,{clientData:je}).then((function(){var t=n.initPublisher(void 0,{audioSource:void 0,videoSource:"screen",publishAudio:!1,publishVideo:!0,resolution:"640x480",frameRate:30,insertMode:"APPEND",mirror:!1});e.publish(t),Me(t),Re(t)})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))}))}}),[Ne]);var We=function(e){Qe()},Ge=function(e){var t=Le,a=t.indexOf(e,0);a>-1&&(t.splice(a,1),ze(t))},Qe=function(){Ne&&Ne.disconnect(),n=null,De(),ze([]),ge(sessionStorage.getItem("sessionID")),Se("Professor"),Me(void 0),Re(void 0)},Xe=function(){return(e=be,new Promise((function(t,a){var n=JSON.stringify({customSessionId:e});I.a.post(N+"/api/sessions",n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){console.log("CREATE SESION",e),t(e.data.id)})).catch((function(a){var n=Object.assign({},a);n.response&&409===n.response.status?t(e):(console.log(n),console.warn("No connection to OpenVidu Server. This may be a certificate error at "+N),window.confirm('No connection to OpenVidu Server. This may be a certificate error at "'+N+'"\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "'+N+'"')&&window.location.assign(N+"/accept-certificate"))}))}))).then((function(e){return function(e){return new Promise((function(t,a){var n=JSON.stringify({session:e});I.a.post(N+"/api/tokens",n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){console.log("TOKEN",e),t(e.data.token)})).catch((function(e){return a(e)}))}))}(e)}));var e};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"gray",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center"}},r.a.createElement(O.a,{visible:i,title:"\uc815\ubcf4 \uc785\ub825",footer:[],centered:!0},r.a.createElement(v.a,{onFinish:function(e){""!==e.sid&&""!==e.sname&&(d(e.sid),P(e.sname),l(!1),z(!0),qe())}},r.a.createElement(v.a.Item,null,r.a.createElement(t,{style:{color:"gray"}},"\uc81c\ucd9c \uc804 \ubc18\ub4dc\uc2dc \uc778\uc801\uc0ac\ud56d\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694!")),r.a.createElement(v.a.Item,{name:"sid",label:"\ud559\ubc88",rules:[{required:!0,message:"\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694!"}]},r.a.createElement(j.a,null)),r.a.createElement(v.a.Item,{name:"sname",label:"\uc774\ub984",rules:[{required:!0,message:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!"}]},r.a.createElement(j.a,null)),r.a.createElement(v.a.Item,null,r.a.createElement(S.a,{key:"back",onClick:function(){l(!1)}},"\ucde8\uc18c"),r.a.createElement(S.a,{key:"submit",htmlType:"submit"},"\uc81c\ucd9c")))),!0===L?r.a.createElement("div",{className:"enterexam-background"},r.a.createElement(y.a,{title:"*\uc2dc\ud5d8 \uc120\ud0dd*",bordered:"false",style:{top:"30%",left:"35%",width:500,height:400}},r.a.createElement("p",null,"\uc778\uc801\uc0ac\ud56d"),r.a.createElement("p",null,"\ud559\ubc88 : ",m),r.a.createElement("p",null,"\uc774\ub984 : ",T),r.a.createElement("div",null,r.a.createElement(w.a.Button,{icon:r.a.createElement(x.a,null),overlay:He},Y)),r.a.createElement("div",{style:{marginTop:20}},r.a.createElement(S.a,{disabled:re,onClick:function(){Ke(),z(!1),R(!0)}},"\uc120\ud0dd")))):" ",!0===_?r.a.createElement("div",{className:"enterexam-background"},r.a.createElement(y.a,{title:"\u203b\uc8fc\uc758\uc0ac\ud56d\u203b",bordered:"false",style:{top:"30%",left:"35%",width:500,height:400}},r.a.createElement("p",null,Y),r.a.createElement("p",null,"\uc2dc\ud5d8 \uc2dc\uac04 : ",Math.round(fe/60)," \ubd84"),r.a.createElement("p",null,"\ud559\ubc88 : ",m),r.a.createElement("p",null,"\uc774\ub984 : ",T),r.a.createElement("p",null," ",se),r.a.createElement(S.a,{onClick:function(){Se(m+"/"+T),n=new k.OpenVidu,I.a.get(N+"/api/sessions/"+be,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){De(n.initSession()),Je(!1)})).catch((function(e){return alert("Not yet")}))}},"\ud654\uba74 \uacf5\uc720\ud558\uae30"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{onClick:function(){D.requestFullscreen(),e.history.push({pathname:"/Examing",search:"",state:{fileName:xe,time:fe,TestName:Y,sName:T,sid:m,eid:H}})},disabled:Ye},"\uc2dc\ud5d8 \uc2dc\uc791"))):" "))},P=a(684),M=a(138),A=a(86),_=a(691),R=a(692),F=a(152);F.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/"+F.c.version+"/pdf.worker.js";var V,L,z=function(e){var t=Object(c.useState)(null),a=Object(h.a)(t,2),n=a[0],o=a[1],i=Object(c.useState)(0),l=Object(h.a)(i,2),s=l[0],u=l[1],m=Object(c.useState)("../uploads/pdfs/"+e.location.state.fileName),d=Object(h.a)(m,2),f=d[0];d[1];return r.a.createElement("div",null,r.a.createElement(F.a,{file:f,onLoadSuccess:function(e){var t=e.numPages;o(t),console.log("sucess")}},r.a.createElement(F.b,{pageIndex:s,width:e.wrapperDivSize,scale:1})),r.a.createElement(M.a,null,r.a.createElement(A.a,{span:12},r.a.createElement("div",{className:"site-button-ghost-wrapper"},r.a.createElement(S.a,{onClick:function(){s-1>=0&&u(s-1)},block:!0},r.a.createElement(_.a,null),s))),r.a.createElement(A.a,{span:12},r.a.createElement("div",null,r.a.createElement(S.a,{onClick:function(){s+1<n&&u(s+1)},block:!0},s+1,r.a.createElement(R.a,null))))))},B=function(e){var t=P.a.Countdown,a=Date.now()+1e3*e.location.state.time,n=Object(c.useState)(!1),o=Object(h.a)(n,2),i=o[0],l=o[1],s=function(){console.log("fin"),e.history.push({pathname:"/Examing_fin",state:{sName:e.location.state.sName,sid:e.location.state.sid,eid:e.location.state.eid}})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"gray",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement(O.a,{title:"\uc2dc\ud5d8 \uc870\uae30 \uc885\ub8cc",visible:i,onOk:s,onCancel:function(){l(!1)}},r.a.createElement("p",null,"\uc2dc\ud5d8\uc744 \uc9c0\uae08 \uc885\ub8cc\ud569\ub2c8\uae4c?"))),r.a.createElement("div",null,r.a.createElement(y.a,{title:e.location.state.TestName,bordered:!0,style:{textAlign:"center"}},r.a.createElement(S.a,{style:{height:100},type:"ghost"},r.a.createElement(t,{title:"Countdown",value:a,onFinish:s})),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(S.a,{onClick:function(){l(!0)}},"\uc2dc\ud5d8 \uc870\uae30 \uc885\ub8cc")),r.a.createElement(z,{location:e.location})))))},U=a(679),Y=a(688),J=a(693),q=function(e){var t=P.a.Countdown,a=U.a.Dragger,n=Object(c.useState)([]),o=Object(h.a)(n,2),i=o[0],l=o[1],s=Object(c.useState)([]),u=Object(h.a)(s,2),m=u[0],d=u[1],f=Date.now()+3e5,b={name:"file",multiple:!0,action:"http://52.79.134.9:5000/exam/student/",fileList:i,beforeUpload:function(e){return l(i.concat(e)),!1}},g={name:"file",multiple:!0,action:"http://52.79.134.9:5000/exam/student/",fileList2:m,beforeUpload:function(e){return d(m.concat(e)),!1}},O={eid:e.location.state.eid,sid:e.location.state.sid,sName:e.location.state.sName},v=function(){var t=Object(E.a)(p.a.mark((function t(a){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(i.length>0&&m.length>0)){t.next=10;break}for(c in n=new FormData,i.forEach((function(e){return n.append("answer",e)})),m.forEach((function(e){return n.append("answer",e)})),O)n.append(c,O[c]);return t.next=8,I.a.post("http://52.79.134.9:5000/exam/student",n,{header:{"Content-Type":"multipart/form-data"}}).then((function(t){"Create_success"===t.data.message?e.hitory.push("/End"):"already sibmit"===t.data.message&&alert("\uc774\ubbf8 \uc81c\ucd9c \ud588\uc2b5\ub2c8\ub2e4!")})).catch((function(e){return alert(e)}));case 8:t.next=11;break;case 10:alert("\ud30c\uc77c\uc744 \ub4f1\ub85d\ud574\uc8fc\uc138\uc694!");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"gray",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement(y.a,{title:"\uc2dc\ud5d8 \uc885\ub8cc",style:{textAlign:"center",width:"100%"},actions:[r.a.createElement(S.a,{onClick:v},"\uc81c\ucd9c")]},r.a.createElement(t,{value:f,onFinish:function(){console.log("fin")}}),r.a.createElement("p",null,r.a.createElement("br",null),"\uc218\uace0\ud558\uc168\uc2b5\ub2c8\ub2e4"),r.a.createElement("p",null,"\uc791\uc131\ud55c \ub2f5\uc548\uc9c0\uc640 \ud0c0\uc784\ub7a9\uc2a4 \ud30c\uc77c\uc744 \uc81c\ucd9c\ud574\uc8fc\uc138\uc694"),r.a.createElement(Y.b,null,r.a.createElement(a,Object.assign({},b,{onRemove:function(e){var t=[];i.forEach((function(e){t.push(e)})),t.splice(t.indexOf(e),1),l(t)}}),r.a.createElement("p",null,r.a.createElement(J.a,null)),r.a.createElement("p",null,"\ud0c0\uc784\ub7a9\uc2a4 \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8\ud558\uc5ec \ub4f1\ub85d\ud558\uc138\uc694")),r.a.createElement(a,Object.assign({},g,{onRemove:function(e){var t=[];m.forEach((function(e){t.push(e)})),t.splice(t.indexOf(e),1),d(t)}}),r.a.createElement("p",null,r.a.createElement(J.a,null)),r.a.createElement("p",null,"\ub2f5\uc548 \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8\ud558\uc5ec \ub4f1\ub85d\ud558\uc138\uc694")))))))},K=(a(574),a(280),a(694)),H=a(695),W=function(e){var t=b.a.Text,a=Object(c.useState)(""),n=Object(h.a)(a,2),o=n[0],i=n[1],s=Object(c.useState)(""),u=Object(h.a)(s,2),m=u[0],d=u[1],f=function(){var t=Object(E.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o||!m){t.next=5;break}return t.next=3,I.a.post("http://52.79.134.9:5000/user/login",{user:o,pass:m},{withCredentials:!0}).then((function(t){console.log(t.data),sessionStorage.setItem("sessionID",t.data.sessionID),sessionStorage.setItem("userID",t.data.userId),sessionStorage.setItem("isLogged",t.data.isLogged),"login success"===t.data.message&&e.history.push("/Main"),console.log(t)})).catch((function(e){return alert(e)}));case 3:t.next=6;break;case 5:alert("input please");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"gray",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center",justifyContent:"center"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(y.a,null,r.a.createElement("div",null,r.a.createElement(t,{style:{fontSize:30,fontWeight:700}},r.a.createElement(K.a,null),"Login")),r.a.createElement("div",{className:"LoginScreen"},r.a.createElement(v.a,null,r.a.createElement(v.a.Item,{name:"username",rules:[{required:!0,message:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694!"}]},r.a.createElement(j.a,{prefix:r.a.createElement(H.a,{className:"site-form-item-icon"}),placeholder:"\uc544\uc774\ub514",value:o,onChange:function(e){i(e.target.value)}})),r.a.createElement(v.a.Item,{name:"password",rules:[{required:!0,message:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!"}]},r.a.createElement(j.a.Password,{prefix:r.a.createElement(K.a,{className:"site-form-item-icon"}),placeholder:"\ube44\ubc00\ubc88\ud638",value:m,onChange:function(e){d(e.target.value)}})),r.a.createElement(v.a.Item,null,r.a.createElement(S.a,{type:"secondary",htmlType:"submit",className:"LoginBtn",onClick:f},"\ub85c\uadf8\uc778")),r.a.createElement(t,{style:{float:"left"}},"or ",r.a.createElement(l.b,{to:"./Register"},"\ud68c\uc6d0\uac00\uc785")))))),r.a.createElement(l.b,{to:"/EnterExam_Student"},"Goto Exam")))},G=a(700),Q=a(675),X=(a(576),a(696)),Z=a(697),$=a(698),ee=a(699),te=Object(c.memo)((function(){var e=Object(s.f)(),t=[r.a.createElement(X.a,null),r.a.createElement(Z.a,null),r.a.createElement($.a,null),r.a.createElement(ee.a,null)],a=["/Main","/Main/1","/Main/2","/Main/3"],n=Object(c.useState)("0"),o=Object(h.a)(n,2),i=o[0],u=o[1];return Object(c.useEffect)((function(){console.log(e);var t=a.findIndex((function(t){return t===e.pathname}));u(String(t))}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{mode:"inline",theme:"dark",selectedKeys:[i]},["\ud648","\uc2dc\ud5d8 \ub4f1\ub85d","\uc2dc\ud5d8\uc7a5 \uc785\uc7a5","\uc2dc\ud5d8\uacb0\uacfc \ud655\uc778"].map((function(e,n){return r.a.createElement(g.a.Item,{key:n,icon:t[n],id:e}," ",r.a.createElement(l.b,{to:a[n]},e))}))))})),ae=a(674),ne=a(685),ce=function(){b.a.Title;var e=b.a.Text;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.b,{style:{paddingTop:20,paddingLeft:20}},r.a.createElement(e,{style:{fontWeight:"bold",fontSize:20}},r.a.createElement(e,{type:"warning"},"Rope"),"\uc5d0 \uc624\uc2e0\uac78 \ud658\uc601\ud569\ub2c8\ub2e4!")),r.a.createElement(ae.a,null),r.a.createElement("div",{className:"Content",style:{margin:20}},r.a.createElement(u.a,{status:"404",title:"\uc544\uc9c1 \uac1c\ubc1c\uc911\uc778 \uc791\uc5c5\uc785\ub2c8\ub2e4!",subTitle:"\uc870\uae08 \ub354 \uc644\ubcbd\ud55c \uc11c\ube44\uc2a4\ub97c \uc704\ud574 \uae30\ub2e4\ub824\uc8fc\uc138\uc694"})),r.a.createElement(ae.a,null),r.a.createElement("div",{style:{paddingLeft:5,paddingBottom:20},className:"space-align-container"},r.a.createElement(e,{code:!0},"\uc81c\uacf5\uc790"),r.a.createElement(ne.a,{src:"https://lh3.googleusercontent.com/ogw/ADGmqu8uPjReaS9H1M_C5UabkgioDOBDcDFM0E2MGa8H=s83-c-mo"}),r.a.createElement(ne.a,{src:"https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-9/117035716_3183548191766547_183287540202193355_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=tT2IyCRyMHAAX-81589&_nc_ht=scontent-gmp1-1.xx&oh=54ec351277fb364144c3ae023eac6673&oe=5F733C8E"})))},re=a(678),oe=a(351),ie=a(101),le=a.n(ie),se=Object(c.memo)((function(e){var t=U.a.Dragger,a=b.a.Text,n=j.a.TextArea,o=re.a.RangePicker,i=Object(c.useState)([]),s=Object(h.a)(i,2),u=s[0],m=s[1],d=Object(c.useState)(""),f=Object(h.a)(d,2),g=f[0],O=f[1],y=Object(c.useState)(""),w=Object(h.a)(y,2),x=w[0],C=w[1],k=Object(c.useState)(0),N=Object(h.a)(k,2),D=N[0],T=N[1],P=Object(c.useState)(),M=Object(h.a)(P,2),A=M[0],_=M[1],R=Object(c.useState)(!0),F=Object(h.a)(R,2),V=F[0],L=F[1],z=Object(c.useState)([]),B=Object(h.a)(z,2),Y=(B[0],B[1]),q={fileName:g,contents:x,time:D,userID:sessionStorage.getItem("userID"),sessionID:sessionStorage.getItem("sessionID"),isLogged:sessionStorage.getItem("isLogged")},K={labelCol:{span:8},wrapperCol:{span:10}},H={wrapperCol:{offset:8,span:4}},W=function(e){e.preventDefault(),O(""),C(""),_(""),m([]),L(!1)},G=function(){var e=Object(E.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in t.preventDefault(),a=new FormData,u.forEach((function(e){return a.append("files",e)})),q)a.append(n,q[n]);return e.next=6,I.a.post("http://52.79.134.9:5000/api-session/create",a,{header:{"Content-Type":"multipart/form-data"}}).then((function(e){"create_success"===e.data.message&&(alert("\ud30c\uc77c \uc5c5\ub85c\ub4dc \uc131\uacf5!"),W(t)),"create exam fail"===e.data.message&&alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4!")})).catch((function(e){return alert(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q={name:"file",multiple:!0,action:"http://52.79.134.9:5000/api-session/create/",beforeUpload:function(e){return m(u.concat(e)),!1},onChange:function(e){var t=e.file.status;"done"===t?oe.b.success("".concat(e.file.name," file uploaded successfully.")):"error"===t&&oe.b.error("".concat(e.file.name," file upload failed."))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{style:{padding:20}},r.a.createElement(a,{strong:!0,style:{fontSize:20}},"\uc2dc\ud5d8 \ub4f1\ub85d"),r.a.createElement(ae.a,null)),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(v.a.Item,Object.assign({},K,{label:"\uc2dc\ud5d8 \uc81c\ubaa9"}),r.a.createElement(j.a,{placeholder:"\ub4f1\ub85d\ud560 \uc2dc\ud5d8\uc758 \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",value:g,onChange:function(e){O(e.target.value)}})),r.a.createElement(v.a.Item,Object.assign({},K,{label:"\uc2dc\ud5d8 \uc8fc\uc758\uc0ac\ud56d"}),r.a.createElement(n,{rows:4,placeholder:"\uc2dc\ud5d8\uc2dc \uc8fc\uc758 \uc0ac\ud56d\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",value:x,onChange:function(e){C(e.target.value)}})),r.a.createElement(v.a.Item,Object.assign({},K,{label:"\uc2dc\ud5d8 \uc2dc\uac04"}),r.a.createElement(o,{order:"true",onChange:function(e,t){_(e),Y(t),T(Math.round(le.a.duration(e[1].diff(e[0])).asSeconds())),console.log(t)},value:A})),r.a.createElement(v.a.Item,Object.assign({},K,{label:"\ubb38\uc81c \ud30c\uc77c"}),r.a.createElement(t,Object.assign({},Q,{onRemove:function(e){console.log(e);var t=[];u.forEach((function(e){t.push(e)})),t.splice(t.indexOf(e),1),m(t)}}),r.a.createElement("p",null,r.a.createElement(J.a,null)),r.a.createElement("p",null,"\uc774\uacf3\uc5d0 \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8\ud558\uc5ec \ub4f1\ub85d\ud558\uc138\uc694"))),r.a.createElement(v.a.Item,H,r.a.createElement(S.a,{onClick:function(e){G(e)},disabled:!V},"\ub4f1\ub85d")),r.a.createElement(v.a.Item,H,r.a.createElement(S.a,{style:{marginBottom:30},onClick:W,disabled:V},r.a.createElement(l.b,{to:"/Main/2"},"\uc2dc\ud5d8 \uc2dc\uc791")))))))})),ue=a(347),me=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){e.streamManager&&e.index&&e.index>0&&e.streamManager[e.index-1].addVideoElement(t.current)}),[]),r.a.createElement(r.a.Fragment,null,e.index>0?r.a.createElement("video",{autoPlay:!0,ref:t}):null)},de=function(e){var t=Object(c.useState)(),a=Object(h.a)(t,2),n=a[0],o=a[1];return Object(c.useEffect)((function(){console.log(e.index),e.index>0&&o(JSON.parse(e.streamManager[e.index-1].stream.connection.data).clientData)}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,void 0!==e.streamManager?r.a.createElement("div",{className:"streamcomponent"},r.a.createElement(me,{streamManager:e.streamManager,index:e.index}),r.a.createElement("div",null,r.a.createElement("p",null,n))):null))},fe=function(e){var t=Object(c.useState)(sessionStorage.getItem("sessionID")),a=Object(h.a)(t,2),n=a[0],o=a[1],i=Object(c.useState)("Professor"),l=Object(h.a)(i,2),s=l[0],u=l[1],m=Object(c.useState)(),d=Object(h.a)(m,2),f=d[0],p=d[1],E=Object(c.useState)(),b=Object(h.a)(E,2),g=b[0],O=b[1],v=Object(c.useState)(),j=Object(h.a)(v,2),y=(j[0],j[1]),w=Object(c.useState)([]),x=Object(h.a)(w,2),C=x[0],N=x[1];Object(c.useEffect)((function(){return window.addEventListener("beforeunload",D),window.removeEventListener("beforeunload",D)})),Object(c.useEffect)((function(){if(f){var e=f;e.on("streamCreated",(function(t){var a=e.subscribe(t.stream,void 0),n=C;n.push(a),N([].concat(Object(ue.a)(C),[n]))})),e.on("streamDestroyed",(function(e){T(e.stream.streamManager)})),M().then((function(t){e.connect(t,{clientData:s}).then((function(){var t=V.initPublisher(void 0,{audioSource:void 0,videoSource:void 0,publishAudio:!1,publishVideo:!0,resolution:"640x480",frameRate:30,insertMode:"APPEND",mirror:!1});e.publish(t),O(t),y(t),console.log(f)})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))}))}}),[f]);var D=function(e){P()},T=function(e){var t=C,a=t.indexOf(e,0);a>-1&&(t.splice(a,1),N(t))},P=function(){f&&I.a.delete("https://52.79.134.9:4443/api/sessions/"+n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),V=null,p(),N([]),o(sessionStorage.getItem("sessionID")),u("Professor"),O(void 0),y(void 0)},M=function(){return(e=n,new Promise((function(t,a){var n=JSON.stringify({customSessionId:e});I.a.post("https://52.79.134.9:4443/api/sessions",n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){console.log("CREATE SESION",e),t(e.data.id)})).catch((function(a){var n=Object.assign({},a);n.response&&409===n.response.status?t(e):(console.log(n),console.warn("No connection to OpenVidu Server. This may be a certificate error at https://52.79.134.9:4443"),window.confirm('No connection to OpenVidu Server. This may be a certificate error at "https://52.79.134.9:4443"\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "https://52.79.134.9:4443"')&&window.location.assign("https://52.79.134.9:4443/accept-certificate"))}))}))).then((function(e){return function(e){return new Promise((function(t,a){var n=JSON.stringify({session:e});I.a.post("https://52.79.134.9:4443/api/tokens",n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){console.log("TOKEN",e),t(e.data.token)})).catch((function(e){return a(e)}))}))}(e)}));var e};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignSelf:"center",alignItems:"center"}},r.a.createElement("div",{id:"check"},r.a.createElement(S.a,{onClick:function(){V=new k.OpenVidu,p(V.initSession())},style:{}},"\uc138\uc158 \uc5f4\uae30 ")),r.a.createElement("div",{id:"session"},void 0!==f?r.a.createElement("div",{id:"session"},r.a.createElement("div",{id:"session-header",style:{textAlign:"center"}},r.a.createElement("h1",{id:"session-title"},n),r.a.createElement(S.a,{type:"button",id:"buttonLeaveSession",onClick:P,value:"Leave session"},"\uc138\uc158 \ub2eb\uae30")),r.a.createElement("div",{id:"video-container"},C.map((function(e,t){return r.a.createElement("div",{key:t,onClick:function(){var t;g!==(t=e)&&O(t)}},r.a.createElement(de,{streamManager:e,index:t}))})))):null)))},pe=a(677),Ee=(a(583),function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(sessionStorage.getItem("sessionID")),i=Object(h.a)(o,2),l=i[0],s=(i[1],Object(c.useState)(!1)),u=Object(h.a)(s,2),m=u[0],d=u[1],f=Object(c.useState)([]),b=Object(h.a)(f,2),g=b[0],O=b[1],v=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("http://52.79.134.9:5000/exam/get/"+l,{}).then((function(e){console.log(e.data[0].content),n(e.data[0].eid)})).catch((function(e){return alert(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e){var t=[];e.map((function(e,a){t.push({key:a,sid:e.sid,name:e.sName,time:e.cam_file,answer:e.result_file})})),console.log(t),O(t)},y=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,I.a.get("http://52.79.134.9:5000/exam/result/"+a,{}).then((function(e){console.log(e.data),"there is no student"===e.data.message?alert("\ud559\uc0dd\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):(d(!0),j(e.data))})).catch((function(e){return alert(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=[{title:"\ud559\ubc88",dataIndex:"sid",width:150,align:"center"},{title:"\uc774\ub984",dataIndex:"name",width:150,align:"center"},{title:"\ud0c0\uc784\ub7a9\uc2a4",dataIndex:"time",width:150,align:"center",render:function(e){return r.a.createElement("a",{href:"/uploads/answers/"+e,download:!0},e)}},{title:"\ub2f5\uc548\ud30c\uc77c",dataIndex:"answer",width:150,align:"center",render:function(e){return r.a.createElement("a",{href:"/uploads/answers/"+e,download:!0},e)}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flexDirection:"column",alignItems:"center"}},r.a.createElement(S.a,{onClick:function(){v()}},"\ub370\uc774\ud130 \uc5f0\ub3d9"),r.a.createElement(S.a,{onClick:function(){0===a?alert("\uc2dc\ud5d8 \ub370\uc774\ud130\uc640 \uc5f0\ub3d9\uc744 \uba3c\uc800\ud574\uc8fc\uc138\uc694!"):y()}},"\uc2dc\ud5d8 \uacb0\uacfc \uc870\ud68c"),m?r.a.createElement("div",{style:{margin:15}},r.a.createElement(pe.a,{columns:w,pagination:{pageSize:50},scroll:{y:240},dataSource:g})):null))}),he=function(e){var t=e.match,a=(e.location,e.history),n=Object(c.useState)([]),o=Object(h.a)(n,2),i=(o[0],o[1],Q.a.Header),u=Q.a.Footer,m=Q.a.Sider,d=Q.a.Content,f=(g.a.SubMenu,b.a.Title,b.a.Text),O=Object(c.useState)(!1),v=Object(h.a)(O,2),j=v[0],y=v[1],w=function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("http://52.79.134.9:5000/user/logout",{},{withCredentials:!0}).then((function(e){sessionStorage.setItem("sessionID",void 0),sessionStorage.setItem("userID",void 0),sessionStorage.setItem("isLogged",!1),a.push("/")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{style:{minHeight:"100vh"}},r.a.createElement(i,null,r.a.createElement(f,{className:"Logo"},r.a.createElement(l.b,{to:"/Main",style:{color:"white"}},r.a.createElement(G.a,null),"Rope")),r.a.createElement(f,{className:"subLogo"},"\xa0 @Rude_zoo @hyowii"),r.a.createElement(S.a,{id:"logoutbtn",type:"primary",onClick:w},"Logout")),r.a.createElement(Q.a,null,r.a.createElement(m,{collapsible:!0,collapsed:j,onCollapse:function(){console.log(j),y(!0!==j)}},r.a.createElement(te,{match:t})),r.a.createElement(Q.a,null,r.a.createElement(d,{className:"Site-Content"},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(s.a,{exact:!0,path:t.path,component:ce}),r.a.createElement(s.a,{path:"".concat(t.path,"/1"),component:se}),r.a.createElement(s.a,{path:"".concat(t.path,"/2"),component:fe}),r.a.createElement(s.a,{path:"".concat(t.path,"/3"),component:Ee}))),r.a.createElement(u,{style:{textAlign:"center"}},"Web Design \xa92020 Created by Rude zoo")))))},be=Object(c.memo)((function(e){var t=b.a.Text,a=Object(c.useState)(""),n=Object(h.a)(a,2),o=n[0],i=n[1],s=Object(c.useState)(""),u=Object(h.a)(s,2),m=u[0],d=u[1],f=Object(c.useState)(""),g=Object(h.a)(f,2),O=g[0],w=g[1],x=Object(c.useState)([]),C=Object(h.a)(x,2),k=(C[0],C[1],Object(c.useState)("")),N=Object(h.a)(k,2),D=N[0],T=N[1],P=Object(c.useState)(""),M=Object(h.a)(P,2),A=M[0],R=M[1],F=Object(c.useState)(""),V=Object(h.a)(F,2),L=V[0],z=V[1],B=Object(c.useState)(""),U=Object(h.a)(B,2),J=U[0],q=U[1],K=Object(c.useState)(""),H=Object(h.a)(K,2),W=H[0],G=H[1],Q=Object(c.useState)(""),X=Object(h.a)(Q,2),Z=X[0],$=X[1],ee=Object(c.useState)(""),te=Object(h.a)(ee,2),ne=te[0],ce=te[1],re={labelCol:{span:8},wrapperCol:{span:10}},oe={wrapperCol:{offset:8,span:10}},ie=function(){var t=Object(E.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q(""===D?"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694!":""),G(""===o?"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!":""),$(""===A?"\uc774\ub984 \uc785\ub825\ud558\uc138\uc694!":""),ce(""===L?"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694!":""),t.next=6,I.a.post("http://52.79.134.9:5000/user/join",{userId:D,pass:o,email:L,name:A},{withCredentials:!0}).then((function(t){"join fail"===t.data.message&&alert("\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4"),"join success"===t.data.message&&(alert("\uac00\uc785\uc131\uacf5!"),e.history.push("/"))}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){""!==o&&""!==m&&(m===o?w("\uc704\uc640 \uc77c\uce58\ud569\ub2c8\ub2e4"):(console.log(o),console.log(m),w("\uc704\uc640 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4")))}),[o,m]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"gray",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center",justifyContent:"center"}},r.a.createElement(y.a,{style:{width:"40%"}},r.a.createElement("div",{style:{padding:20}},r.a.createElement(t,{style:{fontSize:25,color:"#120338"}},r.a.createElement(l.b,{to:"/",style:{color:"black"}},r.a.createElement(_.a,null)),"\xa0 \ud68c\uc6d0\uac00\uc785"),r.a.createElement(ae.a,null)),r.a.createElement("div",{className:"SignupForm"},r.a.createElement(v.a,{style:{}},r.a.createElement(v.a.Item,Object.assign({},re,{label:"\uc544\uc774\ub514"}),r.a.createElement(Y.b,null,r.a.createElement(j.a,{placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694",value:D,onChange:function(e){T(e.target.value)}})),r.a.createElement("div",{style:{color:"red"}},J)),r.a.createElement(v.a.Item,Object.assign({},re,{label:"\ud328\uc2a4\uc6cc\ub4dc"}),r.a.createElement(j.a.Password,{placeholder:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){i(e.target.value)},value:o}),r.a.createElement("div",{style:{color:"red"}},W)),r.a.createElement(v.a.Item,Object.assign({},re,{label:"\ud328\uc2a4\uc6cc\ub4dc \ud655\uc778"}),r.a.createElement(j.a.Password,{placeholder:"\uc704\uc5d0 \uc791\uc131\ud55c \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){d(e.target.value)},value:m}),O),r.a.createElement(v.a.Item,Object.assign({},re,{label:"\uc774\ub984"}),r.a.createElement(j.a,{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",value:A,onChange:function(e){R(e.target.value)}}),r.a.createElement("div",{style:{color:"red"}},Z)),r.a.createElement(v.a.Item,Object.assign({},re,{label:"\uc774\uba54\uc77c"}),r.a.createElement(j.a,{placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:L,onChange:function(e){z(e.target.value)}}),r.a.createElement("div",{style:{color:"red"}},ne)),r.a.createElement(v.a.Item,oe,r.a.createElement(S.a,{size:"large",type:"secondary",htmlType:"submit",className:"LoginBtn",onClick:ie,style:{marginBottom:30,width:"100%"}},"\uac00\uc785")))))))})),ge=(a(638),void 0),Oe=function(e){var t=Object(c.useState)("EQ0vMvWlTNQcqDYEe73E8mU9AIAOpXka"),a=Object(h.a)(t,2),n=a[0],o=a[1],i=Object(c.useState)(e.location.state.Id),l=Object(h.a)(i,2),s=l[0],u=l[1],m=Object(c.useState)(),d=Object(h.a)(m,2),f=(d[0],d[1],Object(c.useState)()),p=Object(h.a)(f,2),E=p[0],b=p[1],g=Object(c.useState)(),O=Object(h.a)(g,2),v=(O[0],O[1]),j=Object(c.useState)(),S=Object(h.a)(j,2),y=S[0],w=S[1],x=Object(c.useState)([]),C=Object(h.a)(x,2),N=C[0],D=C[1];Object(c.useEffect)((function(){return console.log(s),window.addEventListener("beforeunload",T),window.removeEventListener("beforeunload",T)})),Object(c.useEffect)((function(){if(E){var e=E;console.log(E),e.on("streamCreated",(function(e){})),e.on("streamDestroyed",(function(e){P(e.stream.streamManager)})),A().then((function(t){e.connect(t,{clientData:s}).then((function(){var t=L.initPublisher(void 0,{audioSource:void 0,videoSource:"screen",publishAudio:!1,publishVideo:!0,resolution:"640x480",frameRate:30,insertMode:"APPEND",mirror:!1});e.publish(t),v(t),w(t)})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))}))}}),[E]);var T=function(e){M()},P=function(e){var t=N,a=t.indexOf(e,0);a>-1&&(t.splice(a,1),D(t))},M=function(){E&&E.disconnect(),L=null,b(),D([]),o(sessionStorage.getItem("sessionID")),u("Professor"),v(void 0),w(void 0)},A=function(){return(e=n,new Promise((function(t,a){var n=JSON.stringify({customSessionId:e});I.a.post("https://192.168.99.100:4443/api/sessions",n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){console.log("CREATE SESION",e),t(e.data.id)})).catch((function(a){var n=Object.assign({},a);n.response&&409===n.response.status?t(e):(console.log(n),console.warn("No connection to OpenVidu Server. This may be a certificate error at https://192.168.99.100:4443"),window.confirm('No connection to OpenVidu Server. This may be a certificate error at "https://192.168.99.100:4443"\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "https://192.168.99.100:4443"')&&window.location.assign("https://192.168.99.100:4443/accept-certificate"))}))}))).then((function(e){return function(e){return new Promise((function(t,a){var n=JSON.stringify({session:e});I.a.post("https://192.168.99.100:4443/api/tokens",n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){console.log("TOKEN",e),t(e.data.token)})).catch((function(e){return a(e)}))}))}(e)}));var e};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{id:"check"},r.a.createElement("button",{onClick:function(){L=new k.OpenVidu,I.a.get("https://192.168.99.100:4443/api/sessions/"+n,{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:MY_SECRET"),"Content-Type":"application/json"}}).then((function(e){b(L.initSession())})).catch((function(e){return alert("Not yet")}))}},"click")),void 0!==y?r.a.createElement("div",{className:"stream-container col-md-6 col-xs-6",onClick:function(){return ge.handleMainVideoStream(y)}}):null))},ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:W}),r.a.createElement(s.a,{path:"/Main",component:he}),r.a.createElement(s.a,{path:"/Register",component:be}),r.a.createElement(s.a,{path:"/Examing",component:B}),r.a.createElement(s.a,{path:"/EnterExam_Student",component:T}),r.a.createElement(s.a,{path:"/Sharing",component:Oe}),r.a.createElement(s.a,{path:"/Examing_fin",component:q}),r.a.createElement(s.a,{path:"/End",component:d}))))};i.a.render(r.a.createElement("div",null,r.a.createElement(ve,null)),document.getElementById("root"))}},[[357,1,2]]]);
//# sourceMappingURL=main.d7f63327.chunk.js.map