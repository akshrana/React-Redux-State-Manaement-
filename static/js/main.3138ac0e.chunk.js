(this["webpackJsonpreact-redux-demo"]=this["webpackJsonpreact-redux-demo"]||[]).push([[0],{26:function(t,e,i){},44:function(t,e,i){},67:function(t,e,i){"use strict";i.r(e);var o=i(0),n=i(1),r=i.n(n),s=i(19),l=i.n(s),c=(i(44),i.p,i(26),i(10)),a=i(12),d=i(11),h=function(t){Object(a.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(c.a)(this,i);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).render=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"login"})})},t}return i}(n.Component),b=i.p+"static/media/Capg logo.9dd96ef7.png",j=i.p+"static/media/VA.e9551734.jpg",u=i(3),p=i(16),g=function(t){Object(a.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(c.a)(this,i);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).render=function(){var e=[];return t.props.taskdata.tasks?t.props.taskdata.tasks.map((function(t){e.push(Object(o.jsx)("div",{children:t.task}))})):e.push(Object(o.jsx)("span",{})),console.log(t.props.taskdata),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{style:{backgroundColor:"#0099ff",display:"block",height:80},children:[Object(o.jsx)("img",{src:b,style:{height:70,width:170,display:"inline-block"}}),Object(o.jsx)("button",{style:{float:"Right",backgroundColor:"#0099ff",color:"white",cursor:"pointer",border:"none",display:"inline-block",position:"relative",top:55},children:"Sign Out"}),Object(o.jsx)("h2",{style:{float:"Right",color:"White",fontSize:15,display:"inline-block",position:"relative",top:40,left:-10},children:"Welcome Akshit Rana"}),Object(o.jsx)("h1",{style:{position:"absolute",top:0,left:400,color:"white"},children:"Employee Digital Assistant"})]}),Object(o.jsxs)("div",{style:{backgroundColor:"#b3b3ff",height:30},children:[Object(o.jsx)(u.b,{to:"/React-Redux-State-Manaement-/tasks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Tasks"})}),Object(o.jsx)(u.b,{to:"/React-Redux-State-Manaement-/meetings",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Meetings"})}),Object(o.jsx)(u.b,{to:"/React-Redux-State-Manaement-/implinks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Important Links"})}),Object(o.jsx)(u.b,{to:"/React-Redux-State-Manaement-/notes",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Notes"})})]}),Object(o.jsx)("div",{style:{backgroundColor:"white",height:150,width:800,display:"inline-block"},children:Object(o.jsx)("p",{children:"Welcome to the Employee Digital Assitant.We are here for you to provide different services to make your life as simpler as we can. Here you can enjoy various features provided by your assistant to make your professional life more comfortable.Here you can add your important meetings, notes and taks.Your assistant will help you remembering everthing on time."})}),Object(o.jsx)("img",{src:j,style:{height:400,width:350,float:"right",paddingTop:20}}),Object(o.jsxs)("div",{style:{backgroundColor:"white",height:300,width:250,display:"inline-block",marginLeft:20,borderStyle:"solid"},children:[Object(o.jsx)("h3",{style:{marginLeft:40},children:"Upcoming events"}),Object(o.jsx)("div",{children:e})]}),Object(o.jsx)("div",{style:{backgroundColor:"white",height:300,width:250,display:"inline-block",marginLeft:20,borderStyle:"solid"},children:Object(o.jsx)("h3",{style:{marginLeft:40},children:"Upcoming meetings"})}),Object(o.jsx)("div",{style:{backgroundColor:"white",height:300,width:250,display:"inline-block",marginLeft:20,borderStyle:"solid"},children:Object(o.jsx)("h3",{style:{marginLeft:40},children:"Important notes"})})]})},t}return i}(n.Component),f=Object(p.b)((function(t){return{taskdata:t}}))(g),O=i(18),k=i.n(O),y=function(){return{type:"fetchtaskstatus"}},x="",v="",m="",w="";function C(t){x=t.target.value,console.log(x)}function R(t){v=t.target.value,console.log(v)}function S(t){m=t.target.value,console.log(m)}var A=Object(p.b)((function(t){return{taskdata:t}}),(function(t){return{fetchTasks:function(){return t((function(t){t(y),k.a.get("http://localhost:3001/getdata").then((function(e){var i=e.data;t({type:"fetchtasksuccess",payload:i})})).catch((function(e){var i=e.message;t(function(t){return{type:"fetchtaskfail",payload:t}}(i))}))}))},addtask:function(){return t({type:"addtask",payload:{task:x,priority:v,Deadline:m,idt:w}})},deletetask:function(e){return t({type:"removetask",payload:{task:x,priority:v,Deadline:m,tidd:e}})}}}))((function(t){var e=t.fetchTasks,i=t.taskdata,r=t.addtask,s=t.deletetask;Object(n.useEffect)((function(){e()}),[]);var l=[];return console.log("this is task data"),console.log(i),i.tasks&&i.tasks.map((function(t){l.push(Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{style:{height:100,width:650,borderStyle:"Solid",marginLeft:10,marginRight:40,display:"inline-block"},children:Object(o.jsxs)("div",{style:{backgroundColor:"brown",position:"relative",top:0},children:[Object(o.jsx)("span",{children:"task 1"}),Object(o.jsxs)("span",{style:{float:"right"},children:["priority: ",t.priority]}),Object(o.jsxs)("span",{style:{float:"right"},children:["Deadline: ",t.deadline]})]})}),Object(o.jsx)("button",{onClick:function(){var e;s(t.idt),e=t.idt,k.a.post("http://localhost:3001/deletetask",{idt:e})},children:"delete task"}),Object(o.jsx)("div",{style:{position:"relative",top:-80,left:12},children:t.task})]}))})),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{style:{backgroundColor:"#0099ff",display:"block",height:80},children:[Object(o.jsx)("img",{src:b,style:{height:70,width:170,display:"inline-block"}}),Object(o.jsx)("button",{style:{float:"Right",backgroundColor:"#0099ff",color:"white",cursor:"pointer",border:"none",display:"inline-block",position:"relative",top:55},children:"Sign Out"}),Object(o.jsx)("h2",{style:{float:"Right",color:"White",fontSize:15,display:"inline-block",position:"relative",top:40,left:-10},children:"Welcome Akshit Rana"}),Object(o.jsx)("h1",{style:{position:"absolute",top:0,left:400,color:"white"},children:"Employee Digital Assistant"})]}),Object(o.jsxs)("div",{style:{backgroundColor:"#b3b3ff",height:30},children:[Object(o.jsx)(u.b,{to:"/tasks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Tasks"})}),Object(o.jsx)(u.b,{to:"/meetings",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Meetings"})}),Object(o.jsx)(u.b,{to:"/implinks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Important Links"})}),Object(o.jsx)(u.b,{to:"/notes",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Notes"})})]}),Object(o.jsxs)("div",{style:{height:450,width:800,backgroundColor:"white",borderStyle:"Solid",display:"inline-block",overflowY:"scroll",overflowX:"hidden"},children:[Object(o.jsxs)("div",{style:{position:"absolute",left:10,backgroundColor:"white",zIndex:10,width:"778px"},children:[Object(o.jsx)("h3",{style:{position:"relative",left:"40%",backgroundColor:"white",zIndex:10,width:"150px",display:"inline-block"},children:"Pending tasks"}),Object(o.jsx)("span",{})]}),Object(o.jsx)("div",{style:{position:"relative",top:80},children:l})]}),Object(o.jsxs)("div",{style:{height:450,width:350,borderStyle:"Solid",display:"inline-block",position:"relative",left:40,top:-200},children:[Object(o.jsx)("h3",{children:"Create Task"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Enter Task:"}),Object(o.jsx)("textarea",{onChange:C,style:{width:300,height:100}})]}),Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("span",{children:"Deadline:"}),Object(o.jsx)("input",{onChange:S,type:"date"})]}),Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("span",{children:"priority:"}),Object(o.jsxs)("select",{id:"cars",name:"cars",onChange:R,children:[Object(o.jsx)("option",{value:"high",children:"High"}),Object(o.jsx)("option",{value:"moderate",children:"Moderate"}),Object(o.jsx)("option",{value:"low",children:"Low"})]})]}),Object(o.jsx)("button",{onClick:function(){w=Date().toLocaleString(),k.a.post("http://localhost:3001/submittask",{task:x,priority:v,deadline:m,id:"1",idt:w}),r()},children:"submit task"})]})]})})),M=function(t){Object(a.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(c.a)(this,i);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).render=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{style:{backgroundColor:"#0099ff",display:"block",height:80},children:[Object(o.jsx)("img",{src:b,style:{height:70,width:170,display:"inline-block"}}),Object(o.jsx)("button",{style:{float:"Right",backgroundColor:"#0099ff",color:"white",cursor:"pointer",border:"none",display:"inline-block",position:"relative",top:55},children:"Sign Out"}),Object(o.jsx)("h2",{style:{float:"Right",color:"White",fontSize:15,display:"inline-block",position:"relative",top:40,left:-10},children:"Welcome Akshit Rana"}),Object(o.jsx)("h1",{style:{position:"absolute",top:0,left:400,color:"white"},children:"Employee Digital Assistant"})]}),Object(o.jsxs)("div",{style:{backgroundColor:"#b3b3ff",height:30},children:[Object(o.jsx)(u.b,{to:"/tasks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Tasks"})}),Object(o.jsx)(u.b,{to:"/meetings",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Meetings"})}),Object(o.jsx)(u.b,{to:"/implinks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Important Links"})}),Object(o.jsx)(u.b,{to:"/notes",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Notes"})})]})]})},t}return i}(n.Component),L=function(t){Object(a.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(c.a)(this,i);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).render=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{style:{backgroundColor:"#0099ff",display:"block",height:80},children:[Object(o.jsx)("img",{src:b,style:{height:70,width:170,display:"inline-block"}}),Object(o.jsx)("button",{style:{float:"Right",backgroundColor:"#0099ff",color:"white",cursor:"pointer",border:"none",display:"inline-block",position:"relative",top:55},children:"Sign Out"}),Object(o.jsx)("h2",{style:{float:"Right",color:"White",fontSize:15,display:"inline-block",position:"relative",top:40,left:-10},children:"Welcome Akshit Rana"}),Object(o.jsx)("h1",{style:{position:"absolute",top:0,left:400,color:"white"},children:"Employee Digital Assistant"})]}),Object(o.jsxs)("div",{style:{backgroundColor:"#b3b3ff",height:30},children:[Object(o.jsx)(u.b,{to:"/tasks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Tasks"})}),Object(o.jsx)(u.b,{to:"/meetings",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Meetings"})}),Object(o.jsx)(u.b,{to:"/implinks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Important Links"})}),Object(o.jsx)(u.b,{to:"/notes",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Notes"})})]})]})},t}return i}(n.Component),D=function(t){Object(a.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(c.a)(this,i);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).render=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{style:{backgroundColor:"#0099ff",display:"block",height:80},children:[Object(o.jsx)("img",{src:b,style:{height:70,width:170,display:"inline-block"}}),Object(o.jsx)("button",{style:{float:"Right",backgroundColor:"#0099ff",color:"white",cursor:"pointer",border:"none",display:"inline-block",position:"relative",top:55},children:"Sign Out"}),Object(o.jsx)("h2",{style:{float:"Right",color:"White",fontSize:15,display:"inline-block",position:"relative",top:40,left:-10},children:"Welcome Akshit Rana"}),Object(o.jsx)("h1",{style:{position:"absolute",top:0,left:400,color:"white"},children:"Employee Digital Assistant"})]}),Object(o.jsxs)("div",{style:{backgroundColor:"#b3b3ff",height:30},children:[Object(o.jsx)(u.b,{to:"/tasks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Tasks"})}),Object(o.jsx)(u.b,{to:"/meetings",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Meetings"})}),Object(o.jsx)(u.b,{to:"/implinks",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Important Links"})}),Object(o.jsx)(u.b,{to:"/notes",children:Object(o.jsx)("button",{style:{borderRadius:0,width:200,backgroundColor:"#b3b3ff",cursor:"pointer",height:30,float:"right"},children:"Notes"})})]})]})},t}return i}(n.Component),T=i(15),W=i(37),I=i(38),E=i(13),z={loading:!0,tasks:[],error:""},N=[],F=Object(T.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(console.log("old state",t.tasks),e.type){case"fetchtaskstatus":return Object(E.a)(Object(E.a)({},t),{},{loading:!0});case"fetchtasksuccess":return{loading:!1,tasks:e.payload,error:""};case"fetchtaskfail":return{loading:!1,tasks:[],error:e.payload};case"addtask":return(N=t.tasks).push(e.payload),Object(E.a)(Object(E.a)({},t),{},{tasks:N});case"removetask":return console.log(e.payload.tidd),N=(N=t.tasks).filter((function(t){return t.idt!=e.payload.tidd})),Object(E.a)(Object(E.a)({},t),{},{tasks:N});default:return t}}),Object(I.composeWithDevTools)(Object(T.applyMiddleware)(W.a))),H=i(4);var P=function(){return Object(o.jsx)(u.a,{children:Object(o.jsx)(p.a,{store:F,children:Object(o.jsx)("div",{children:Object(o.jsxs)(H.c,{children:[Object(o.jsx)(H.a,{path:"/React-Redux-State-Manaement-/login",component:h}),Object(o.jsx)(H.a,{path:"/React-Redux-State-Manaement-/meetings",component:L}),Object(o.jsx)(H.a,{path:"/React-Redux-State-Manaement-/notes",component:D}),Object(o.jsx)(H.a,{path:"/tasks",component:A}),Object(o.jsx)(H.a,{path:"/React-Redux-State-Manaement-/implinks",component:M}),Object(o.jsx)(H.a,{path:"/React-Redux-State-Manaement-/",component:f})]})})})})},B=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,68)).then((function(e){var i=e.getCLS,o=e.getFID,n=e.getFCP,r=e.getLCP,s=e.getTTFB;i(t),o(t),n(t),r(t),s(t)}))};l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),B()}},[[67,1,2]]]);
//# sourceMappingURL=main.3138ac0e.chunk.js.map