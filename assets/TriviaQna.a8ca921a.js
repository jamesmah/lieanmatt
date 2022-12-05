var P=Object.defineProperty,R=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var F=(t,a,s)=>a in t?P(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(t,a)=>{for(var s in a||(a={}))Y.call(a,s)&&F(t,s,a[s]);if(Q)for(var s of Q(a))U.call(a,s)&&F(t,s,a[s]);return t},d=(t,a)=>R(t,V(a));import{r as m,_ as i}from"./vendor.fa4dae5b.js";import{G as W,h as H,c as h,Y as z,g as y,b as T}from"./index.9d24e716.js";import{g as K,s as M,a as X}from"./index-f69a28d8.51f544fb.js";import{u as G}from"./index.esm.2b5f8630.js";import{j as n,F as J,a as e,S as c}from"./index.7141ca75.js";import{H as Z}from"./Header.732593e3.js";const C=K(),xe=()=>{const[t,a]=m.exports.useState(null),[s,f]=m.exports.useState(!0),[w,x]=m.exports.useState();m.exports.useEffect(()=>{C.onAuthStateChanged(r=>{a(r),f(!1)})},[]),m.exports.useEffect(()=>{W(H(T,y,y)).then(r=>{var g;const o=(g=r.data())==null?void 0:g.data;o&&x(JSON.parse(o))})},[t]);const{register:S,handleSubmit:p,formState:{errors:v},reset:u}=G();return n(J,{children:[e(Z,{}),n(te,{children:[e(re,{children:"Trivia QnA"}),s?e("p",{children:"Loading..."}):n(J,{children:[t&&e(ae,{onClick:()=>{u(),M(C),x(void 0)},children:"Log Out"}),!t&&n(c,{as:"form",gap:2,onSubmit:p(r=>{f(!0),X(C,r.email,r.password).then(o=>{a(o.user)}).finally(()=>{f(!1)})}),children:[n(c,{gap:.5,children:[e("label",{children:"Email"}),e("input",d(l({},S("email",{required:!0,pattern:/^\S+@\S+\.\S+$/i})),{className:h(v.email&&"error")}))]}),n(c,{gap:.5,children:[e("label",{children:"Password"}),e("input",d(l({},S("password",{required:!0})),{className:h(v.password&&"error")}))]}),e("button",{disabled:s,type:"submit",children:s?"Loading...":"Log In"})]})]})]}),t&&w&&e(ee,{data:w})]})},ee=({data:t})=>{const[a,s]=m.exports.useState(!1),[f,w]=m.exports.useState(!1),[x,S]=m.exports.useState(!1),{register:p,handleSubmit:v,formState:{errors:u}}=G({defaultValues:{data:t}});return n(se,{gap:2,children:[Array.from({length:10},(r,o)=>o).map(r=>{var o,g,b,I,_,A,q,N,k,j,D,L,$,B,E,O;return n(c,{gap:.5,children:[n("label",{children:["Question ",r+1]}),e("input",d(l({},p(`data.${r}.question`,{required:!0})),{className:h(((g=(o=u.data)==null?void 0:o[r])==null?void 0:g.question)&&"error"),placeholder:"question"})),n(ne,{gap:1,row:!0,children:[e("p",{children:"Correct answer "}),n("select",d(l({},p(`data.${r}.correctAnswer`,{required:!0})),{className:h(((I=(b=u.data)==null?void 0:b[r])==null?void 0:I.correctAnswer)&&"error"),placeholder:"correct answer",children:[e("option",{disabled:!0,value:"",children:"Select correct answer"}),e("option",{value:"A",children:"A"}),e("option",{value:"B",children:"B"}),e("option",{value:"C",children:"C"}),e("option",{value:"D",children:"D"})]}))]}),n(oe,{gap:1,row:!0,children:[e("p",{children:"A. "}),e("input",d(l({},p(`data.${r}.answers.A`,{required:!1})),{className:h(((q=(A=(_=u.data)==null?void 0:_[r])==null?void 0:A.answers)==null?void 0:q.A)&&"error")}))]}),n(ie,{gap:1,row:!0,children:[e("p",{children:"B. "}),e("input",d(l({},p(`data.${r}.answers.B`,{required:!1})),{className:h(((j=(k=(N=u.data)==null?void 0:N[r])==null?void 0:k.answers)==null?void 0:j.B)&&"error")}))]}),n(le,{gap:1,row:!0,children:[e("p",{children:"C. "}),e("input",d(l({},p(`data.${r}.answers.C`,{required:!1})),{className:h((($=(L=(D=u.data)==null?void 0:D[r])==null?void 0:L.answers)==null?void 0:$.C)&&"error")}))]}),n(de,{gap:1,row:!0,children:[e("p",{children:"D. "}),e("input",d(l({},p(`data.${r}.answers.D`,{required:!1})),{className:h(((O=(E=(B=u.data)==null?void 0:B[r])==null?void 0:E.answers)==null?void 0:O.D)&&"error")}))]})]},r)}),e("button",{disabled:f,onClick:v(({data:r})=>{s(!1),w(!0),S(!1);const o=Object.values(r).map((g,b)=>d(l({},g),{questionNo:b+1}));z(H(T,y,y),{data:JSON.stringify(o)}).then(()=>{s(!0)}).catch(()=>{S(!0)}).finally(()=>{w(!1)})}),type:"button",children:f?"Loading...":"Save"}),a&&e(ce,{children:"Saved!"}),x&&e(pe,{children:"There was an error"})]})};var te=i("div").withConfig({componentId:"sc-1xlp96a-0"})(["width:100%;margin-left:auto;margin-right:auto;padding:0 1rem;max-width:","px;font-style:normal;"],({theme:t})=>t.breakpoints.lg),re=i("h1").withConfig({componentId:"sc-1xlp96a-1"})(["margin-bottom:1rem;"]),ae=i("button").withConfig({componentId:"sc-1xlp96a-2"})(["margin-bottom:2rem;"]),se=i(c).withConfig({componentId:"sc-1xlp96a-3"})(["width:100%;margin-left:auto;margin-right:auto;padding:0 1rem 3rem;max-width:","px;font-style:normal;input{width:100%;}"],({theme:t})=>t.breakpoints.lg),ne=i(c).withConfig({componentId:"sc-1xlp96a-4"})(["align-items:center;"]),oe=i(c).withConfig({componentId:"sc-1xlp96a-5"})(["align-items:center;"]),ie=i(c).withConfig({componentId:"sc-1xlp96a-6"})(["align-items:center;"]),le=i(c).withConfig({componentId:"sc-1xlp96a-7"})(["align-items:center;"]),de=i(c).withConfig({componentId:"sc-1xlp96a-8"})(["align-items:center;"]),ce=i("div").withConfig({componentId:"sc-1xlp96a-9"})(["color:",";"],({theme:t})=>t.palette.alert.success),pe=i("div").withConfig({componentId:"sc-1xlp96a-10"})(["color:",";"],({theme:t})=>t.palette.alert.error);export{xe as default};
