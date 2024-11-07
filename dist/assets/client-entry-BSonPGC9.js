const ve="growi-plugin-script-template",be="1.0.0",_e="GROWI plugin template for script",we="MIT",je=["growi","growi-plugin"],Re="module",Ee={dev:"vite",build:"tsc && vite build",preview:"vite preview"},Se={react:"^18.3.1","react-async":"^10.0.1","react-dom":"^18.3.1","react-innertext":"^1.1.5"},Ce={"@types/react":"^18.3.3","@types/react-dom":"^18.3.0","@typescript-eslint/eslint-plugin":"^5.0.0","@typescript-eslint/parser":"^5.0.0","@vitejs/plugin-react":"^4.3.1",eslint:"^8.18.0","eslint-config-next":"^14.2.4","eslint-config-weseek":"^2.1.0","eslint-import-resolver-typescript":"^3.2.5","eslint-plugin-import":"^2.29.1","eslint-plugin-jest":"^27.1.0","eslint-plugin-react":"^7.30.1","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-regex":"^1.10.0",jest:"^29.7.0",typescript:"^5.5.2",vite:"^5.3.2"},Fe={schemaVersion:"4",types:["script"]},Ae={name:ve,version:be,description:_e,license:we,keywords:je,type:Re,scripts:Ee,dependencies:Se,devDependencies:Ce,growiPlugin:Fe};function Pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z={exports:{}},L={},ee={exports:{}},c={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=Symbol.for("react.element"),$e=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Ie=Symbol.for("react.provider"),De=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Me=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),H=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,re={};function E(e,t,n){this.props=e,this.context=t,this.refs=re,this.updater=n||te}E.prototype.isReactComponent={};E.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function oe(){}oe.prototype=E.prototype;function q(e,t,n){this.props=e,this.context=t,this.refs=re,this.updater=n||te}var U=q.prototype=new oe;U.constructor=q;ne(U,E.prototype);U.isPureReactComponent=!0;var J=Array.isArray,ie=Object.prototype.hasOwnProperty,V={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function ce(e,t,n){var o,s={},l=null,a=null;if(t!=null)for(o in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)ie.call(t,o)&&!se.hasOwnProperty(o)&&(s[o]=t[o]);var f=arguments.length-2;if(f===1)s.children=n;else if(1<f){for(var u=Array(f),y=0;y<f;y++)u[y]=arguments[y+2];s.children=u}if(e&&e.defaultProps)for(o in f=e.defaultProps,f)s[o]===void 0&&(s[o]=f[o]);return{$$typeof:P,type:e,key:l,ref:a,props:s,_owner:V.current}}function Ue(e,t){return{$$typeof:P,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function G(e){return typeof e=="object"&&e!==null&&e.$$typeof===P}function Ve(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var K=/\/+/g;function M(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ve(""+e.key):t.toString(36)}function O(e,t,n,o,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case P:case $e:a=!0}}if(a)return a=e,s=s(a),e=o===""?"."+M(a,0):o,J(s)?(n="",e!=null&&(n=e.replace(K,"$&/")+"/"),O(s,t,n,"",function(y){return y})):s!=null&&(G(s)&&(s=Ue(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(K,"$&/")+"/")+e)),t.push(s)),1;if(a=0,o=o===""?".":o+":",J(e))for(var f=0;f<e.length;f++){l=e[f];var u=o+M(l,f);a+=O(l,t,n,u,s)}else if(u=qe(e),typeof u=="function")for(e=u.call(e),f=0;!(l=e.next()).done;)l=l.value,u=o+M(l,f++),a+=O(l,t,n,u,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function x(e,t,n){if(e==null)return e;var o=[],s=0;return O(e,o,"","",function(l){return t.call(n,l,s++)}),o}function Ge(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var g={current:null},I={transition:null},Be={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:I,ReactCurrentOwner:V};function le(){throw Error("act(...) is not supported in production builds of React.")}c.Children={map:x,forEach:function(e,t,n){x(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return x(e,function(){t++}),t},toArray:function(e){return x(e,function(t){return t})||[]},only:function(e){if(!G(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};c.Component=E;c.Fragment=ke;c.Profiler=Oe;c.PureComponent=q;c.StrictMode=xe;c.Suspense=Te;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Be;c.act=le;c.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ne({},e.props),s=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=V.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(u in t)ie.call(t,u)&&!se.hasOwnProperty(u)&&(o[u]=t[u]===void 0&&f!==void 0?f[u]:t[u])}var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){f=Array(u);for(var y=0;y<u;y++)f[y]=arguments[y+2];o.children=f}return{$$typeof:P,type:e.type,key:s,ref:l,props:o,_owner:a}};c.createContext=function(e){return e={$$typeof:De,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ie,_context:e},e.Consumer=e};c.createElement=ce;c.createFactory=function(e){var t=ce.bind(null,e);return t.type=e,t};c.createRef=function(){return{current:null}};c.forwardRef=function(e){return{$$typeof:Le,render:e}};c.isValidElement=G;c.lazy=function(e){return{$$typeof:Ne,_payload:{_status:-1,_result:e},_init:Ge}};c.memo=function(e,t){return{$$typeof:Me,type:e,compare:t===void 0?null:t}};c.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}};c.unstable_act=le;c.useCallback=function(e,t){return g.current.useCallback(e,t)};c.useContext=function(e){return g.current.useContext(e)};c.useDebugValue=function(){};c.useDeferredValue=function(e){return g.current.useDeferredValue(e)};c.useEffect=function(e,t){return g.current.useEffect(e,t)};c.useId=function(){return g.current.useId()};c.useImperativeHandle=function(e,t,n){return g.current.useImperativeHandle(e,t,n)};c.useInsertionEffect=function(e,t){return g.current.useInsertionEffect(e,t)};c.useLayoutEffect=function(e,t){return g.current.useLayoutEffect(e,t)};c.useMemo=function(e,t){return g.current.useMemo(e,t)};c.useReducer=function(e,t,n){return g.current.useReducer(e,t,n)};c.useRef=function(e){return g.current.useRef(e)};c.useState=function(e){return g.current.useState(e)};c.useSyncExternalStore=function(e,t,n){return g.current.useSyncExternalStore(e,t,n)};c.useTransition=function(){return g.current.useTransition()};c.version="18.3.1";ee.exports=c;var ue=ee.exports;const p=Pe(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=ue,Ye=Symbol.for("react.element"),ze=Symbol.for("react.fragment"),He=Object.prototype.hasOwnProperty,Je=We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var o,s={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)He.call(t,o)&&!Ke.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:Ye,type:e,key:l,ref:a,props:s,_owner:Je.current}}L.Fragment=ze;L.jsx=ae;L.jsxs=ae;Z.exports=L;var j=Z.exports;const A=typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global||typeof global=="object"&&global.GLOBAL===global?global:{};A.__REACT_ASYNC__=A.__REACT_ASYNC__||{};const Qe=()=>{};class Xe{constructor(){this.abort=Qe,this.signal={}}}let i;try{i=require("prop-types")}catch{}const R=i&&i.oneOfType([i.node,i.func]),C=i&&i.shape({initialValue:i.any,data:i.any,error:i.instanceOf(Error),value:i.any,startedAt:i.instanceOf(Date),finishedAt:i.instanceOf(Date),status:i.oneOf(["initial","pending","fulfilled","rejected"]),isInitial:i.bool,isPending:i.bool,isLoading:i.bool,isFulfilled:i.bool,isResolved:i.bool,isRejected:i.bool,isSettled:i.bool,counter:i.number,promise:i.instanceOf(Promise),run:i.func,reload:i.func,cancel:i.func,setData:i.func,setError:i.func});var _=i&&{Async:{children:R,promise:i.instanceOf(Promise),promiseFn:i.func,deferFn:i.func,watch:i.any,watchFn:i.func,initialValue:i.any,onResolve:i.func,onReject:i.func,reducer:i.func,dispatcher:i.func,debugLabel:i.string,suspense:i.bool},Initial:{children:R,state:C.isRequired,persist:i.bool},Pending:{children:R,state:C.isRequired,initial:i.bool},Fulfilled:{children:R,state:C.isRequired,persist:i.bool},Rejected:{children:R,state:C.isRequired,persist:i.bool},Settled:{children:R,state:C.isRequired,persist:i.bool}};const $=(e,...t)=>typeof e=="function"?e(...t):e,fe=({children:e,persist:t,state:n={}})=>p.createElement(p.Fragment,null,n.isInitial||t&&!n.data?$(e,n):null),pe=({children:e,initial:t,state:n={}})=>p.createElement(p.Fragment,null,n.isPending&&(!t||!n.value)?$(e,n):null),de=({children:e,persist:t,state:n={}})=>p.createElement(p.Fragment,null,n.isFulfilled||t&&n.data?$(e,n.data,n):null),he=({children:e,persist:t,state:n={}})=>p.createElement(p.Fragment,null,n.isRejected||t&&n.error?$(e,n.error,n):null),me=({children:e,persist:t,state:n={}})=>p.createElement(p.Fragment,null,n.isSettled||t&&n.value?$(e,n):null);_&&(fe.propTypes=_.Initial,pe.propTypes=_.Pending,de.propTypes=_.Fulfilled,he.propTypes=_.Rejected,me.propTypes=_.Settled);var h;(function(e){e.initial="initial",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected"})(h||(h={}));const Ze=(e,t)=>e instanceof Error?h.rejected:e!==void 0?h.fulfilled:t?h.pending:h.initial,et=e=>e instanceof Error?h.rejected:e!==void 0?h.fulfilled:h.initial,F=e=>({status:e,isInitial:e===h.initial,isPending:e===h.pending,isLoading:e===h.pending,isFulfilled:e===h.fulfilled,isResolved:e===h.fulfilled,isRejected:e===h.rejected,isSettled:e===h.fulfilled||e===h.rejected}),D=function(){};Object.setPrototypeOf?Object.setPrototypeOf(D,Promise):D.__proto__=Promise;D.prototype=Object.assign(Object.create(Promise.prototype),{finally(){return this},catch(){return this},then(){return this}});const N=new D;var b;(function(e){e.start="start",e.cancel="cancel",e.fulfill="fulfill",e.reject="reject"})(b||(b={}));const tt=({initialValue:e,promise:t,promiseFn:n})=>({initialValue:e,data:e instanceof Error?void 0:e,error:e instanceof Error?e:void 0,value:e,startedAt:t||n?new Date:void 0,finishedAt:e?new Date:void 0,...F(Ze(e,t||n)),counter:0,promise:N}),Q=(e,t)=>{switch(t.type){case b.start:return{...e,startedAt:new Date,finishedAt:void 0,...F(h.pending),counter:t.meta.counter,promise:t.meta.promise};case b.cancel:return{...e,startedAt:void 0,finishedAt:void 0,...F(et(e.error||e.data)),counter:t.meta.counter,promise:t.meta.promise};case b.fulfill:return{...e,data:t.payload,value:t.payload,error:void 0,finishedAt:new Date,...F(h.fulfilled),promise:t.meta.promise};case b.reject:return{...e,error:t.payload,value:t.payload,finishedAt:new Date,...F(h.rejected),promise:t.meta.promise};default:return e}},nt=e=>(t,...n)=>{e(t,...n),t.type===b.start&&typeof t.payload=="function"&&t.payload()};class lt extends p.Component{}function rt(e={},t="Async"){const{Consumer:n,Provider:o}=p.createContext(void 0);function s({children:v}){return p.createElement(n,null,r=>{if(!r)throw new Error("this component should only be used within an associated <Async> component!");return v(r)})}class l extends p.Component{constructor(r){super(r),this.mounted=!1,this.counter=0,this.args=[],this.promise=N,this.abortController=new Xe,this.start=this.start.bind(this),this.load=this.load.bind(this),this.run=this.run.bind(this),this.cancel=this.cancel.bind(this),this.onResolve=this.onResolve.bind(this),this.onReject=this.onReject.bind(this),this.setData=this.setData.bind(this),this.setError=this.setError.bind(this);const d=r.promise,m=r.promiseFn||e.promiseFn,w=r.initialValue||e.initialValue;this.state={...tt({initialValue:w,promise:d,promiseFn:m}),cancel:this.cancel,run:this.run,reload:()=>{this.load(),this.run(...this.args)},setData:this.setData,setError:this.setError},this.debugLabel=r.debugLabel||e.debugLabel;const{devToolsDispatcher:k}=A.__REACT_ASYNC__,W=r.reducer||e.reducer,Y=r.dispatcher||e.dispatcher||k,ye=W?(S,T)=>W(S,T,Q):Q,z=nt((S,T)=>{this.setState(ge=>ye(ge,S),T)});this.dispatch=Y?S=>Y(S,z,r):z}componentDidMount(){this.mounted=!0,(this.props.promise||!this.state.initialValue)&&this.load()}componentDidUpdate(r){const{watch:d,watchFn:m=e.watchFn,promise:w,promiseFn:k}=this.props;if(d!==r.watch)return this.counter&&this.cancel(),this.load();if(m&&m({...e,...this.props},{...e,...r}))return this.counter&&this.cancel(),this.load();if(w!==r.promise&&(this.counter&&this.cancel(),w))return this.load();if(k!==r.promiseFn&&(this.counter&&this.cancel(),k))return this.load()}componentWillUnmount(){this.cancel(),this.mounted=!1}getMeta(r){return{counter:this.counter,promise:this.promise,debugLabel:this.debugLabel,...r}}start(r){return"AbortController"in A&&(this.abortController.abort(),this.abortController=new A.AbortController),this.counter++,this.promise=new Promise((d,m)=>{if(!this.mounted)return;const w=()=>r().then(d,m);this.dispatch({type:b.start,payload:w,meta:this.getMeta()})})}load(){const r=this.props.promise,d=this.props.promiseFn||e.promiseFn;if(r)this.start(()=>r).then(this.onResolve(this.counter)).catch(this.onReject(this.counter));else if(d){const m={...e,...this.props};this.start(()=>d(m,this.abortController)).then(this.onResolve(this.counter)).catch(this.onReject(this.counter))}}run(...r){const d=this.props.deferFn||e.deferFn;if(d){this.args=r;const m={...e,...this.props};return this.start(()=>d(r,m,this.abortController)).then(this.onResolve(this.counter),this.onReject(this.counter))}}cancel(){const r=this.props.onCancel||e.onCancel;r&&r(),this.counter++,this.abortController.abort(),this.mounted&&this.dispatch({type:b.cancel,meta:this.getMeta()})}onResolve(r){return d=>{if(this.counter===r){const m=this.props.onResolve||e.onResolve;this.setData(d,()=>m&&m(d))}return d}}onReject(r){return d=>{if(this.counter===r){const m=this.props.onReject||e.onReject;this.setError(d,()=>m&&m(d))}return d}}setData(r,d){return this.mounted&&this.dispatch({type:b.fulfill,payload:r,meta:this.getMeta()},d),r}setError(r,d){return this.mounted&&this.dispatch({type:b.reject,payload:r,error:!0,meta:this.getMeta()},d),r}render(){const{children:r,suspense:d}=this.props;if(d&&this.state.isPending&&this.promise!==N)throw this.promise;if(typeof r=="function"){const m=r;return p.createElement(o,{value:this.state},m(this.state))}return r!=null?p.createElement(o,{value:this.state},r):null}}_&&(l.propTypes=_.Async);const a=v=>p.createElement(s,null,r=>p.createElement(fe,Object.assign({},v,{state:r}))),f=v=>p.createElement(s,null,r=>p.createElement(pe,Object.assign({},v,{state:r}))),u=v=>p.createElement(s,null,r=>p.createElement(de,Object.assign({},v,{state:r}))),y=v=>p.createElement(s,null,r=>p.createElement(he,Object.assign({},v,{state:r}))),B=v=>p.createElement(s,null,r=>p.createElement(me,Object.assign({},v,{state:r})));return a.displayName=`${t}.Initial`,f.displayName=`${t}.Pending`,u.displayName=`${t}.Fulfilled`,y.displayName=`${t}.Rejected`,B.displayName=`${t}.Settled`,Object.assign(l,{displayName:t,Initial:a,Pending:f,Loading:f,Fulfilled:u,Resolved:u,Rejected:y,Settled:B})}var ot=rt();const it=async({id:e})=>{const n=await(await fetch(`/_api/v3/page?pageId=${e}`)).json(),{page:o}=n,s=o.path.split("/");return s[s.length-1]},X=e=>({children:t,...n})=>{const{href:o}=n;try{if(o.match(/^\//))return j.jsx(e,{...n,children:t});const s=Array.isArray(t)?t.join(""):t;if(o!==s)return j.jsx(e,{...n,children:t});const l=new URL(o);if(l.hostname!==window.location.hostname)return j.jsx(e,{...n,children:t});const a=l.pathname.replace(/^\//,"");return j.jsx(ot,{promiseFn:it,id:a,children:({data:f,error:u,isPending:y})=>{if(y)return"Loading...";if(u)return`Something went wrong: ${u.message}`;if(f)return j.jsx(e,{...n,children:f})}})}catch(s){console.error(s)}return j.jsx(e,{...n,children:t})},st=()=>{if(growiFacade==null||growiFacade.markdownRenderer==null)return;const{optionsGenerators:e}=growiFacade.markdownRenderer;e.customGenerateViewOptions=(...t)=>{const n=e.generateViewOptions(...t),{a:o}=n.components;return n.components.a=X(o),n},e.customGeneratePreviewOptions=(...t)=>{const n=e.generatePreviewOptions(...t),{a:o}=n.components;return n.components.a=X(o),n}},ct=()=>{};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators[Ae.name]={activate:st,deactivate:ct};