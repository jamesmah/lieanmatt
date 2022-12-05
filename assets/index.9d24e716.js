import{U as je,_ as ih}from"./vendor.fa4dae5b.js";import{m as Hn}from"./index.7141ca75.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},rh=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],h=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,h=i+2<e.length,c=h?e[i+2]:0,u=r>>2,l=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;h||(m=64,o||(p=64)),s.push(n[u],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||c==null||l==null)throw Error();const p=r<<2|a>>4;if(s.push(p),c!==64){const m=a<<4&240|c>>2;if(s.push(m),l!==64){const v=c<<6&192|l;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},oh=function(e){const t=xi(e);return Oi.encodeByteArray(t,!0)},Mi=function(e){return oh(e).replace(/\./g,"")},bf=function(e){try{return Oi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function ch(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function uh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lh(){return qe().indexOf("Electron/")>=0}function dh(){const e=qe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function fh(){return qe().indexOf("MSAppHost/")>=0}function ph(){return typeof indexedDB=="object"}function gh(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="FirebaseError";class He extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=mh,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?yh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new He(i,a,s)}}function yh(e,t){return e.replace(vh,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const vh=/\{\$([^}]+)}/g;function Af(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Kn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Fi(r)&&Fi(o)){if(!Kn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Df(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function _f(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Nf(e,t){const n=new wh(e,t);return n.subscribe.bind(n)}class wh{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Eh(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=zn),i.error===void 0&&(i.error=zn),i.complete===void 0&&(i.complete=zn);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eh(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function zn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){return new Promise((n,s)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var r;s(`${t}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class Vi{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new Pi(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new Ui(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Pi{constructor(t){this._transaction=t,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(t){return new Ui(this._transaction.objectStore(t))}}class Ui{constructor(t){this._store=t}index(t){return new $i(this._store.index(t))}createIndex(t,n,s){return new $i(this._store.createIndex(t,n,s))}get(t){const n=this._store.get(t);return ie(n,"Error reading from IndexedDB")}put(t,n){const s=this._store.put(t,n);return ie(s,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return ie(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return ie(t,"Error clearing IndexedDB object store")}}class $i{constructor(t){this._index=t}get(t){const n=this._index.get(t);return ie(n,"Error reading from IndexedDB")}}function Th(e,t,n){return new Promise((s,i)=>{try{const r=indexedDB.open(e,t);r.onsuccess=o=>{s(new Vi(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new Vi(r.result),o.oldVersion,o.newVersion,new Pi(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class re{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ah;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bh(t))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wt){return this.instances.has(t)}getOptions(t=wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sh(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=wt){return this.component?this.component.multipleInstances?t:wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sh(e){return e===wt?void 0:e}function bh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ih(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const Ch={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Dh=D.INFO,_h={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Nh=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=_h[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bi{constructor(t){this.name=t,this._logLevel=Dh,this._logHandler=Nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ch[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gn="@firebase/app",ji="0.7.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Bi("@firebase/app"),xh="@firebase/app-compat",Oh="@firebase/analytics-compat",Mh="@firebase/analytics",Lh="@firebase/app-check-compat",Fh="@firebase/app-check",Vh="@firebase/auth",Ph="@firebase/auth-compat",Uh="@firebase/database",$h="@firebase/database-compat",Bh="@firebase/functions",jh="@firebase/functions-compat",qh="@firebase/installations",Hh="@firebase/installations-compat",Kh="@firebase/messaging",zh="@firebase/messaging-compat",Gh="@firebase/performance",Wh="@firebase/performance-compat",Xh="@firebase/remote-config",Yh="@firebase/remote-config-compat",Qh="@firebase/storage",Jh="@firebase/storage-compat",Zh="@firebase/firestore",tc="@firebase/firestore-compat",ec="firebase",nc="9.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]",sc={[Gn]:"fire-core",[xh]:"fire-core-compat",[Mh]:"fire-analytics",[Oh]:"fire-analytics-compat",[Fh]:"fire-app-check",[Lh]:"fire-app-check-compat",[Vh]:"fire-auth",[Ph]:"fire-auth-compat",[Uh]:"fire-rtdb",[$h]:"fire-rtdb-compat",[Bh]:"fire-fn",[jh]:"fire-fn-compat",[qh]:"fire-iid",[Hh]:"fire-iid-compat",[Kh]:"fire-fcm",[zh]:"fire-fcm-compat",[Gh]:"fire-perf",[Wh]:"fire-perf-compat",[Xh]:"fire-rc",[Yh]:"fire-rc-compat",[Qh]:"fire-gcs",[Jh]:"fire-gcs-compat",[Zh]:"fire-fst",[tc]:"fire-fst-compat","fire-js":"fire-js",[ec]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Map,Xn=new Map;function ic(e,t){try{e.container.addComponent(t)}catch(n){Wn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ze(e){const t=e.name;if(Xn.has(t))return Wn.debug(`There were multiple attempts to register component ${t}.`),!1;Xn.set(t,e);for(const n of Ke.values())ic(n,e);return!0}function rc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Et=new Li("app","Firebase",oc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=nc;function cc(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:qi,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Et.create("bad-app-name",{appName:String(s)});const i=Ke.get(s);if(i){if(Kn(e,i.options)&&Kn(n,i.config))return i;throw Et.create("duplicate-app",{appName:s})}const r=new Ah(s);for(const a of Xn.values())r.addComponent(a);const o=new ac(e,n,r);return Ke.set(s,o),o}function uc(e=qi){const t=Ke.get(e);if(!t)throw Et.create("no-app",{appName:e});return t}function Ot(e,t,n){var s;let i=(s=sc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wn.warn(a.join(" "));return}ze(new re(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firebase-heartbeat-database",dc=1,oe="firebase-heartbeat-store";let Yn=null;function Hi(){return Yn||(Yn=Th(lc,dc,(e,t)=>{switch(t){case 0:e.createObjectStore(oe)}}).catch(e=>{throw Et.create("storage-open",{originalErrorMessage:e.message})})),Yn}async function fc(e){try{return(await Hi()).transaction(oe).objectStore(oe).get(zi(e))}catch(t){throw Et.create("storage-get",{originalErrorMessage:t.message})}}async function Ki(e,t){try{const s=(await Hi()).transaction(oe,"readwrite");return await s.objectStore(oe).put(t,zi(e)),s.complete}catch(n){throw Et.create("storage-set",{originalErrorMessage:n.message})}}function zi(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=1024,gc=30*24*60*60*1e3;class mc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=gc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gi(),{heartbeatsToSend:n,unsentEntries:s}=yc(this._heartbeatsCache.heartbeats),i=Mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gi(){return new Date().toISOString().substring(0,10)}function yc(e,t=pc){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wi(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ph()?gh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ki(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ki(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Wi(e){return Mi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(e){ze(new re("platform-logger",t=>new kh(t),"PRIVATE")),ze(new re("heartbeat",t=>new mc(t),"PRIVATE")),Ot(Gn,ji,e),Ot(Gn,ji,"esm2017"),Ot("fire-js","")}wc("");var Ec=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Qn=Qn||{},T=Ec||self;function Ge(){}function Jn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ae(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Tc(e){return Object.prototype.hasOwnProperty.call(e,Zn)&&e[Zn]||(e[Zn]=++Ic)}var Zn="closure_uid_"+(1e9*Math.random()>>>0),Ic=0;function Sc(e,t,n){return e.call.apply(e.bind,arguments)}function bc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=Sc:$=bc,$.apply(null,arguments)}function We(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function B(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function ut(){this.s=this.s,this.o=this.o}var Ac=0,Cc={};ut.prototype.s=!1;ut.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Ac!=0)){var e=Tc(this);delete Cc[e]}};ut.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Yi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Dc(e){t:{var t=vu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Qi(e){return Array.prototype.concat.apply([],arguments)}function ts(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Xe(e){return/^[\s\xa0]*$/.test(e)}var Ji=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function es(e,t){return e<t?-1:e>t?1:0}var X;t:{var Zi=T.navigator;if(Zi){var tr=Zi.userAgent;if(tr){X=tr;break t}}X=""}function ns(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function er(e){const t={};for(const n in e)t[n]=e[n];return t}var nr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<nr.length;r++)n=nr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ss(e){return ss[" "](e),e}ss[" "]=Ge;function _c(e){var t=Rc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Nc=W(X,"Opera"),Mt=W(X,"Trident")||W(X,"MSIE"),ir=W(X,"Edge"),is=ir||Mt,rr=W(X,"Gecko")&&!(W(X.toLowerCase(),"webkit")&&!W(X,"Edge"))&&!(W(X,"Trident")||W(X,"MSIE"))&&!W(X,"Edge"),kc=W(X.toLowerCase(),"webkit")&&!W(X,"Edge");function or(){var e=T.document;return e?e.documentMode:void 0}var Ye;t:{var rs="",os=function(){var e=X;if(rr)return/rv:([^\);]+)(\)|;)/.exec(e);if(ir)return/Edge\/([\d\.]+)/.exec(e);if(Mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(kc)return/WebKit\/(\S+)/.exec(e);if(Nc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(os&&(rs=os?os[1]:""),Mt){var as=or();if(as!=null&&as>parseFloat(rs)){Ye=String(as);break t}}Ye=rs}var Rc={};function xc(){return _c(function(){let e=0;const t=Ji(String(Ye)).split("."),n=Ji("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=es(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||es(i[2].length==0,r[2].length==0)||es(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var hs;if(T.document&&Mt){var ar=or();hs=ar||parseInt(Ye,10)||void 0}else hs=void 0;var Oc=hs,Mc=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Ge,t),T.removeEventListener("test",Ge,t)}catch{}return e}();function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};function he(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rr){t:{try{ss(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Lc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&he.Z.h.call(this)}}B(he,z);var Lc={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),Fc=0;function Vc(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Fc,this.ca=this.fa=!1}function Qe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Je(e){this.src=e,this.g={},this.h=0}Je.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=us(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Vc(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function cs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Xi(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Qe(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function us(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),ds={};function hr(e,t,n,s,i){if(s&&s.once)return ur(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)hr(e,t[r],n,s,i);return null}return n=ms(n),e&&e[ce]?e.N(t,n,ae(s)?!!s.capture:!!s,i):cr(e,t,n,!1,s,i)}function cr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ae(i)?!!i.capture:!!i,a=ps(e);if(a||(e[ls]=a=new Je(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Pc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Mc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(dr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Pc(){function e(n){return t.call(e.src,e.listener,n)}var t=Uc;return e}function ur(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ur(e,t[r],n,s,i);return null}return n=ms(n),e&&e[ce]?e.O(t,n,ae(s)?!!s.capture:!!s,i):cr(e,t,n,!0,s,i)}function lr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)lr(e,t[r],n,s,i);else s=ae(s)?!!s.capture:!!s,n=ms(n),e&&e[ce]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=us(r,n,s,i),-1<n&&(Qe(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ps(e))&&(t=e.g[t.toString()],e=-1,t&&(e=us(t,n,s,i)),(n=-1<e?t[e]:null)&&fs(n))}function fs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[ce])cs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(dr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ps(t))?(cs(n,e),n.h==0&&(n.src=null,t[ls]=null)):Qe(e)}}}function dr(e){return e in ds?ds[e]:ds[e]="on"+e}function Uc(e,t){if(e.ca)e=!0;else{t=new he(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&fs(e),e=n.call(s,t)}return e}function ps(e){return e=e[ls],e instanceof Je?e:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ms(e){return typeof e=="function"?e:(e[gs]||(e[gs]=function(t){return e.handleEvent(t)}),e[gs])}function V(){ut.call(this),this.i=new Je(this),this.P=this,this.I=null}B(V,ut);V.prototype[ce]=!0;V.prototype.removeEventListener=function(e,t,n,s){lr(this,e,t,n,s)};function j(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),sr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ze(o,s,!0,t)&&i}if(o=t.g=e,i=Ze(o,s,!0,t)&&i,i=Ze(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ze(o,s,!1,t)&&i}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Qe(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ze(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&cs(e.i,o),i=a.call(h,s)!==!1&&i}}return i&&!s.defaultPrevented}var ys=T.JSON.stringify;function $c(){var e=pr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Bc{constructor(){this.h=this.g=null}add(t,n){const s=fr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new jc,e=>e.reset());class jc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qc(e){T.setTimeout(()=>{throw e},0)}function vs(e,t){ws||Hc(),Es||(ws(),Es=!0),pr.add(e,t)}var ws;function Hc(){var e=T.Promise.resolve(void 0);ws=function(){e.then(Kc)}}var Es=!1,pr=new Bc;function Kc(){for(var e;e=$c();){try{e.h.call(e.g)}catch(n){qc(n)}var t=fr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Es=!1}function tn(e,t){V.call(this),this.h=e||1,this.g=t||T,this.j=$(this.kb,this),this.l=Date.now()}B(tn,V);g=tn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),j(this,"tick"),this.da&&(Ts(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ts(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){tn.Z.M.call(this),Ts(this),delete this.g};function Is(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function gr(e){e.g=Is(()=>{e.g=null,e.i&&(e.i=!1,gr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zc extends ut{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:gr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(e){ut.call(this),this.h=e,this.g={}}B(ue,ut);var mr=[];function yr(e,t,n,s){Array.isArray(n)||(n&&(mr[0]=n.toString()),n=mr);for(var i=0;i<n.length;i++){var r=hr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function vr(e){ns(e.g,function(t,n){this.g.hasOwnProperty(n)&&fs(t)},e),e.g={}}ue.prototype.M=function(){ue.Z.M.call(this),vr(this)};ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function en(){this.g=!0}en.prototype.Aa=function(){this.g=!1};function Gc(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Wc(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Lt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Yc(e,n)+(s?" "+s:"")})}function Xc(e,t){e.info(function(){return"TIMEOUT: "+t})}en.prototype.info=function(){};function Yc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ys(n)}catch{return t}}var Tt={},wr=null;function nn(){return wr=wr||new V}Tt.Ma="serverreachability";function Er(e){z.call(this,Tt.Ma,e)}B(Er,z);function le(e){const t=nn();j(t,new Er(t,e))}Tt.STAT_EVENT="statevent";function Tr(e,t){z.call(this,Tt.STAT_EVENT,e),this.stat=t}B(Tr,z);function Y(e){const t=nn();j(t,new Tr(t,e))}Tt.Na="timingevent";function Ir(e,t){z.call(this,Tt.Na,e),this.size=t}B(Ir,z);function de(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var sn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Sr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ss(){}Ss.prototype.h=null;function br(e){return e.h||(e.h=e.i())}function Ar(){}var fe={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bs(){z.call(this,"d")}B(bs,z);function As(){z.call(this,"c")}B(As,z);var Cs;function rn(){}B(rn,Ss);rn.prototype.g=function(){return new XMLHttpRequest};rn.prototype.i=function(){return{}};Cs=new rn;function pe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ue(this),this.P=Qc,e=is?125:void 0,this.W=new tn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Cr}function Cr(){this.i=null,this.g="",this.h=!1}var Qc=45e3,Ds={},on={};g=pe.prototype;g.setTimeout=function(e){this.P=e};function _s(e,t,n){e.K=1,e.v=ln(at(t)),e.s=n,e.U=!0,Dr(e,null)}function Dr(e,t){e.F=Date.now(),ge(e),e.A=at(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Fr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Cr,e.g=ro(e.l,n?t:null,!e.s),0<e.O&&(e.L=new zc($(e.Ia,e,e.g),e.O)),yr(e.V,e.g,"readystatechange",e.gb),t=e.H?er(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),le(1),Gc(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ht(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=ht(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||is||this.g&&(this.h.h||this.g.ga()||Wr(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?le(3):le(2)),an(this);var n=this.g.ba();this.N=n;e:if(_r(this)){var s=Wr(this.g);e="";var i=s.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){It(this),me(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Wc(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xe(a)){var c=a;break e}}c=null}if(n=c)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ns(this,n);else{this.i=!1,this.o=3,Y(12),It(this),me(this);break t}}this.U?(Nr(this,u,o),is&&this.i&&u==3&&(yr(this.V,this.W,"tick",this.fb),this.W.start())):(Lt(this.j,this.m,o,null),Ns(this,o)),u==4&&It(this),this.i&&!this.I&&(u==4?eo(this.l,this):(this.i=!1,ge(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),It(this),me(this)}}}catch{}finally{}};function _r(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Nr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Jc(e,n),i==on){t==4&&(e.o=4,Y(14),s=!1),Lt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ds){e.o=4,Y(15),Lt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Lt(e.j,e.m,i,null),Ns(e,i);_r(e)&&i!=on&&i!=Ds&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Y(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$s(t),t.L=!0,Y(11))):(Lt(e.j,e.m,n,"[Invalid Chunked Response]"),It(e),me(e))}g.fb=function(){if(this.g){var e=ht(this.g),t=this.g.ga();this.C<t.length&&(an(this),Nr(this,e,t),this.i&&e!=4&&ge(this))}};function Jc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?on:(n=Number(t.substring(n,s)),isNaN(n)?Ds:(s+=1,s+n>t.length?on:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,It(this)};function ge(e){e.Y=Date.now()+e.P,kr(e,e.P)}function kr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=de($(e.eb,e),t)}function an(e){e.B&&(T.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Xc(this.j,this.A),this.K!=2&&(le(3),Y(17)),It(this),this.o=2,me(this)):kr(this,this.Y-e)};function me(e){e.l.G==0||e.I||eo(e.l,e)}function It(e){an(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ts(e.W),vr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ns(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||xs(n.i,e))){if(n.I=e.N,!e.J&&xs(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)yn(n),gn(n);else break t;Us(n),Y(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=de($(n.ab,n),6e3));if(1>=Ur(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else At(n,11)}else if((e.J||n.g==e)&&yn(n),!Xe(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=c[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(W(v,"spdy")||W(v,"quic")||W(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Os(r,r.h),r.h=null))}if(s.D){const C=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.sa=C,O(s.F,s.D,C))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=io(s,s.H?s.la:null,s.W),o.J){$r(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(an(a),ge(a)),s.g=o}else Zr(s);0<n.l.length&&mn(n)}else c[0]!="stop"&&c[0]!="close"||At(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?At(n,7):Vs(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}le(4)}catch{}}function Zc(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Jn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function ks(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jn(e)||typeof e=="string")Yi(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Jn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=Zc(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Ft(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Ft)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Ft.prototype;g.R=function(){Rs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Rs(this),this.g.concat()};function Rs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];St(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],St(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return St(this.h,e)?this.h[e]:t};g.set=function(e,t){St(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function St(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Rr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof bt){this.g=t!==void 0?t:e.g,hn(this,e.j),this.s=e.s,cn(this,e.i),un(this,e.m),this.l=e.l,t=e.h;var n=new we;n.i=t.i,t.g&&(n.g=new Ft(t.g),n.h=t.h),xr(this,n),this.o=e.o}else e&&(n=String(e).match(Rr))?(this.g=!!t,hn(this,n[1]||"",!0),this.s=ye(n[2]||""),cn(this,n[3]||"",!0),un(this,n[4]),this.l=ye(n[5]||"",!0),xr(this,n[6]||"",!0),this.o=ye(n[7]||"")):(this.g=!!t,this.h=new we(null,this.g))}bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ve(t,Or,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ve(t,Or,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ve(n,n.charAt(0)=="/"?ru:iu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ve(n,au)),e.join("")};function at(e){return new bt(e)}function hn(e,t,n){e.j=n?ye(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function cn(e,t,n){e.i=n?ye(t,!0):t}function un(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xr(e,t,n){t instanceof we?(e.h=t,hu(e.h,e.g)):(n||(t=ve(t,ou)),e.h=new we(t,e.g))}function O(e,t,n){e.h.set(t,n)}function ln(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function eu(e){return e instanceof bt?at(e):new bt(e,void 0)}function nu(e,t,n,s){var i=new bt(null,void 0);return e&&hn(i,e),t&&cn(i,t),n&&un(i,n),s&&(i.l=s),i}function ye(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,su),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function su(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Or=/[#\/\?@]/g,iu=/[#\?:]/g,ru=/[#\?]/g,ou=/[#\?@]/g,au=/#/g;function we(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function lt(e){e.g||(e.g=new Ft,e.h=0,e.i&&tu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=we.prototype;g.add=function(e,t){lt(this),this.i=null,e=Vt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Mr(e,t){lt(e),t=Vt(e,t),St(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,St(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Rs(e)))}function Lr(e,t){return lt(e),t=Vt(e,t),St(e.g.h,t)}g.forEach=function(e,t){lt(this),this.g.forEach(function(n,s){Yi(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){lt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){lt(this);var t=[];if(typeof e=="string")Lr(this,e)&&(t=Qi(t,this.g.get(Vt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Qi(t,e[n])}return t};g.set=function(e,t){return lt(this),this.i=null,e=Vt(this,e),Lr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Fr(e,t,n){Mr(e,t),0<n.length&&(e.i=null,e.g.set(Vt(e,t),ts(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Vt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hu(e,t){t&&!e.j&&(lt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Mr(this,s),Fr(this,i,n))},e)),e.j=t}var cu=class{constructor(e,t){this.h=e,this.g=t}};function Vr(e){this.l=e||uu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uu=10;function Pr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ur(e){return e.h?1:e.g?e.g.size:0}function xs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Os(e,t){e.g?e.g.add(t):e.h=t}function $r(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Vr.prototype.cancel=function(){if(this.i=Br(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Br(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ts(e.i)}function Ms(){}Ms.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Ms.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function lu(){this.g=new Ms}function du(e,t,n){const s=n||"";try{ks(e,function(i,r){let o=i;ae(i)&&(o=ys(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function fu(e,t){const n=new en;if(T.Image){const s=new Image;s.onload=We(dn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=We(dn,n,s,"TestLoadImage: error",!1,t),s.onabort=We(dn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=We(dn,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function dn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ee(e){this.l=e.$b||null,this.j=e.ib||!1}B(Ee,Ss);Ee.prototype.g=function(){return new fn(this.l,this.j)};Ee.prototype.i=function(e){return function(){return e}}({});function fn(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ls,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}B(fn,V);var Ls=0;g=fn.prototype;g.open=function(e,t){if(this.readyState!=Ls)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ie(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Te(this)),this.readyState=Ls};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ie(this)),this.g&&(this.readyState=3,Ie(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function jr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Te(this):Ie(this),this.readyState==3&&jr(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Te(this))};g.Ta=function(e){this.g&&(this.response=e,Te(this))};g.ha=function(){this.g&&Te(this)};function Te(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ie(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ie(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(fn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var pu=T.JSON.parse;function M(e){V.call(this),this.headers=new Ft,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qr,this.K=this.L=!1}B(M,V);var qr="",gu=/^https?$/i,mu=["POST","PUT"];g=M.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cs.g(),this.C=this.u?br(this.u):br(Cs),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Hr(this,r);return}e=n||"";const i=new Ft(this.headers);s&&ks(s,function(r,o){i.set(o,r)}),s=Dc(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=Xi(mu,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gr(this),0<this.B&&((this.K=yu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=Is(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Hr(this,r)}};function yu(e){return Mt&&xc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function vu(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Qn!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function Hr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Kr(e),pn(e)}function Kr(e){e.D||(e.D=!0,j(e,"complete"),j(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j(this,"complete"),j(this,"abort"),pn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pn(this,!0)),M.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?zr(this):this.cb())};g.cb=function(){zr(this)};function zr(e){if(e.h&&typeof Qn!="undefined"&&(!e.C[1]||ht(e)!=4||e.ba()!=2)){if(e.v&&ht(e)==4)Is(e.Fa,0,e);else if(j(e,"readystatechange"),ht(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Rr)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!gu.test(i?i.toLowerCase():"")}n=s}if(n)j(e,"complete"),j(e,"success");else{e.m=6;try{var o=2<ht(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Kr(e)}}finally{pn(e)}}}}function pn(e,t){if(e.g){Gr(e);const n=e.g,s=e.C[0]?Ge:null;e.g=null,e.C=null,t||j(e,"ready");try{n.onreadystatechange=s}catch{}}}function Gr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ht(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),pu(t)}};function Wr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case qr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function wu(e){let t="";return ns(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Fs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=wu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function Se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Xr(e){this.za=0,this.l=[],this.h=new en,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Se("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Se("baseRetryDelayMs",5e3,e),this.$a=Se("retryDelaySeedMs",1e4,e),this.Ya=Se("forwardChannelMaxRetries",2,e),this.ra=Se("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Vr(e&&e.concurrentRequestLimit),this.Ca=new lu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Xr.prototype;g.ma=8;g.G=1;function Vs(e){if(Yr(e),e.G==3){var t=e.V++,n=at(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),be(e,n),t=new pe(e,e.h,t,void 0),t.K=2,t.v=ln(at(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=ro(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ge(t)}so(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function gn(e){e.g&&($s(e),e.g.cancel(),e.g=null)}function Yr(e){gn(e),e.u&&(T.clearTimeout(e.u),e.u=null),yn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Ps(e,t){e.l.push(new cu(e.Za++,t)),e.G==3&&mn(e)}function mn(e){Pr(e.i)||e.m||(e.m=!0,vs(e.Ha,e),e.C=0)}function Eu(e,t){return Ur(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=de($(e.Ha,e,t),no(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new pe(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=er(r),sr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Jr(this,i,t),n=at(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),be(this,n),this.o&&r&&Fs(n,this.o,r),Os(this.i,i),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),i.$=!0,_s(i,n,null)):_s(i,n,t),this.G=2}}else this.G==3&&(e?Qr(this,e):this.l.length==0||Pr(this.i)||Qr(this))};function Qr(e,t){var n;t?n=t.m:n=e.V++;const s=at(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),be(e,s),e.o&&e.s&&Fs(s,e.o,e.s),n=new pe(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Jr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Os(e.i,n),_s(n,s,t)}function be(e,t){e.j&&ks({},function(n,s){O(t,s,n)})}function Jr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let c=i[h].h;const u=i[h].g;if(c-=r,0>c)r=Math.max(0,i[h].h-100),a=!1;else try{du(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Zr(e){e.g||e.u||(e.Y=1,vs(e.Ga,e),e.A=0)}function Us(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=de($(e.Ga,e),no(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,to(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=de($(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Y(10),gn(this),to(this))};function $s(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function to(e){e.g=new pe(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=at(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),be(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&Fs(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ln(at(t)),n.s=null,n.U=!0,Dr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,gn(this),Us(this),Y(19))};function yn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function eo(e,t){var n=null;if(e.g==t){yn(e),$s(e),e.g=null;var s=2}else if(xs(e.i,t))n=t.D,$r(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=nn(),j(s,new Ir(s,n,t,i)),mn(e)}else Zr(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Eu(e,t)||s==2&&Us(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:At(e,5);break;case 4:At(e,10);break;case 3:At(e,6);break;default:At(e,2)}}}function no(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function At(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new bt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||hn(n,"https"),ln(n)),fu(n.toString(),s)}else Y(2);e.G=0,e.j&&e.j.va(t),so(e),Yr(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Y(2)):(this.h.info("Failed to ping google.com"),Y(1))};function so(e){e.G=0,e.I=-1,e.j&&((Br(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ts(e.l),e.l.length=0),e.j.ua())}function io(e,t,n){let s=eu(n);if(s.i!="")t&&cn(s,t+"."+s.i),un(s,s.m);else{const i=T.location;s=nu(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&ns(e.aa,function(i,r){O(s,r,i)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),be(e,s),s}function ro(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new M(new Ee({ib:!0})):new M(e.qa),t.L=e.H,t}function oo(){}g=oo.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function vn(){if(Mt&&!(10<=Number(Oc)))throw Error("Environmental error: no available transport.")}vn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){V.call(this),this.g=new Xr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Xe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Pt(this)}B(nt,V);nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),vs($(e.hb,e,t))),Y(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=io(e,null,e.W),mn(e)};nt.prototype.close=function(){Vs(this.g)};nt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Ps(this.g,t)}else this.v?(t={},t.__data__=ys(e),Ps(this.g,t)):Ps(this.g,e)};nt.prototype.M=function(){this.g.j=null,delete this.j,Vs(this.g),delete this.g,nt.Z.M.call(this)};function ao(e){bs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}B(ao,bs);function ho(){As.call(this),this.status=1}B(ho,As);function Pt(e){this.g=e}B(Pt,oo);Pt.prototype.xa=function(){j(this.g,"a")};Pt.prototype.wa=function(e){j(this.g,new ao(e))};Pt.prototype.va=function(e){j(this.g,new ho(e))};Pt.prototype.ua=function(){j(this.g,"b")};vn.prototype.createWebChannel=vn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;sn.NO_ERROR=0;sn.TIMEOUT=8;sn.HTTP_ERROR=6;Sr.COMPLETE="complete";Ar.EventType=fe;fe.OPEN="a";fe.CLOSE="b";fe.ERROR="c";fe.MESSAGE="d";V.prototype.listen=V.prototype.N;M.prototype.listenOnce=M.prototype.O;M.prototype.getLastError=M.prototype.La;M.prototype.getLastErrorCode=M.prototype.Da;M.prototype.getStatus=M.prototype.ba;M.prototype.getResponseJson=M.prototype.Qa;M.prototype.getResponseText=M.prototype.ga;M.prototype.send=M.prototype.ea;var Tu=function(){return new vn},Iu=function(){return nn()},Bs=sn,Su=Sr,bu=Tt,co={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Au=Ee,wn=Ar,Cu=M;const uo="@firebase/firestore";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ut="9.6.9";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ct=new Bi("@firebase/firestore");function lo(){return Ct.logLevel}function w(e,...t){if(Ct.logLevel<=D.DEBUG){const n=t.map(js);Ct.debug(`Firestore (${Ut}): ${e}`,...n)}}function dt(e,...t){if(Ct.logLevel<=D.ERROR){const n=t.map(js);Ct.error(`Firestore (${Ut}): ${e}`,...n)}}function fo(e,...t){if(Ct.logLevel<=D.WARN){const n=t.map(js);Ct.warn(`Firestore (${Ut}): ${e}`,...n)}}function js(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function I(e="Unexpected state"){const t=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: `+e;throw dt(t),new Error(t)}function k(e,t){e||I()}function S(e,t){return e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends He{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ft{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Du{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _u{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Nu{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let r=new ft;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ft,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const h=r;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},a=h=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ft)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(k(typeof s.accessToken=="string"),new Du(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new tt(t)}}class ku{constructor(t,n,s){this.type="FirstParty",this.user=tt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Ru{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new ku(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ou{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.p=n.token,new xu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Mu(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/qs.A=-1;class po{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Mu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function _(e,t){return e<t?-1:e>t?1:0}function $t(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}class st{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new st(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_(this.nanoseconds,t.nanoseconds):_(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new st(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function go(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Bt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function mo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ae{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ae.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ae?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class R extends Ae{construct(t,n,s){return new R(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Lu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ae{construct(t,n,s){return new et(t,n,s)}static isValidIdentifier(t){return Lu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=h,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hs{constructor(t){this.fields=t,t.sort(et.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $t(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class q{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new q(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new q(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}q.EMPTY_BYTE_STRING=new q("");const Fu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(e){if(k(!!e),typeof e=="string"){let t=0;const n=Fu.exec(e);if(k(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function jt(e){return typeof e=="string"?q.fromBase64String(e):q.fromUint8Array(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vo(e){const t=e.mapValue.fields.__previous_value__;return yo(t)?vo(t):t}function Ce(e){const t=pt(e.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vu{constructor(t,n,s,i,r,o,a,h){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class qt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qt&&t.projectId===this.projectId&&t.database===this.database}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ht(e){return e==null}function En(e){return e===0&&1/e==-1/0}function Pu(e){return typeof e=="number"&&Number.isInteger(e)&&!En(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class E{constructor(t){this.path=t}static fromPath(t){return new E(R.fromString(t))}static fromName(t){return new E(R.fromString(t).popFirst(5))}static empty(){return new E(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&R.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return R.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new R(t.slice()))}}function Dt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?yo(e)?4:Uu(e)?9:10:I()}function ot(e,t){if(e===t)return!0;const n=Dt(e);if(n!==Dt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ce(e).isEqual(Ce(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=pt(s.timestampValue),o=pt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return jt(s.bytesValue).isEqual(jt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return L(s.geoPointValue.latitude)===L(i.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return L(s.integerValue)===L(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=L(s.doubleValue),o=L(i.doubleValue);return r===o?En(r)===En(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return $t(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(go(r)!==go(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function De(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function Kt(e,t){if(e===t)return 0;const n=Dt(e),s=Dt(t);if(n!==s)return _(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=L(i.integerValue||i.doubleValue),a=L(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return wo(e.timestampValue,t.timestampValue);case 4:return wo(Ce(e),Ce(t));case 5:return _(e.stringValue,t.stringValue);case 6:return function(i,r){const o=jt(i),a=jt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let h=0;h<o.length&&h<a.length;h++){const c=_(o[h],a[h]);if(c!==0)return c}return _(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=_(L(i.latitude),L(r.latitude));return o!==0?o:_(L(i.longitude),L(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let h=0;h<o.length&&h<a.length;++h){const c=Kt(o[h],a[h]);if(c)return c}return _(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),h=r.fields||{},c=Object.keys(h);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const l=_(a[u],c[u]);if(l!==0)return l;const p=Kt(o[a[u]],h[c[u]]);if(p!==0)return p}return _(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function wo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _(e,t);const n=pt(e),s=pt(t),i=_(n.seconds,s.seconds);return i!==0?i:_(n.nanos,s.nanos)}function zt(e){return Ks(e)}function Ks(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=pt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?jt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ks(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ks(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Eo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function zs(e){return!!e&&"integerValue"in e}function Gs(e){return!!e&&"arrayValue"in e}function To(e){return!!e&&"nullValue"in e}function Io(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tn(e){return!!e&&"mapValue"in e}function _e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Bt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=_e(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_e(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Uu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=_e(n)}setAll(t){let n=et.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const h=this.getFieldsMap(n);this.applyChanges(h,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=_e(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Tn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Bt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new rt(_e(this.value))}}function So(e){const t=[];return Bt(e.fields,(n,s)=>{const i=new et([n]);if(Tn(s)){const r=So(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Hs(t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class G{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new G(t,0,b.min(),b.min(),rt.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,b.min(),s,0)}static newNoDocument(t,n){return new G(t,2,n,b.min(),rt.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,b.min(),rt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class $u{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function bo(e,t=null,n=[],s=[],i=null,r=null,o=null){return new $u(e,t,n,s,i,r,o)}function Ws(e){const t=S(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+zt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ht(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>zt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>zt(s)).join(",")),t.P=n}return t.P}function Bu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${zt(s.value)}`;var s}).join(", ")}]`),Ht(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>zt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>zt(n)).join(",")),`Target(${t})`}function Xs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Xu(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Do(e.startAt,t.startAt)&&Do(e.endAt,t.endAt)}function Ys(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Q extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new ju(t,n,s):n==="array-contains"?new Ku(t,s):n==="in"?new zu(t,s):n==="not-in"?new Gu(t,s):n==="array-contains-any"?new Wu(t,s):new Q(t,n,s)}static V(t,n,s){return n==="in"?new qu(t,s):new Hu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Kt(n,this.value)):n!==null&&Dt(this.value)===Dt(n)&&this.v(Kt(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ju extends Q{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class qu extends Q{constructor(t,n){super(t,"in",n),this.keys=Ao("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Hu extends Q{constructor(t,n){super(t,"not-in",n),this.keys=Ao("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ao(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Ku extends Q{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gs(n)&&De(n.arrayValue,this.value)}}class zu extends Q{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&De(this.value.arrayValue,n)}}class Gu extends Q{constructor(t,n){super(t,"not-in",n)}matches(t){if(De(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!De(this.value.arrayValue,n)}}class Wu extends Q{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>De(this.value.arrayValue,s))}}class In{constructor(t,n){this.position=t,this.inclusive=n}}class Ne{constructor(t,n="asc"){this.field=t,this.dir=n}}function Xu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Co(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Kt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Do(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ke{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=h,this.D=null,this.C=null,this.startAt,this.endAt}}function Yu(e,t,n,s,i,r,o,a){return new ke(e,t,n,s,i,r,o,a)}function Sn(e){return new ke(e)}function bn(e){return!Ht(e.limit)&&e.limitType==="F"}function An(e){return!Ht(e.limit)&&e.limitType==="L"}function _o(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function No(e){for(const t of e.filters)if(t.S())return t.field;return null}function ko(e){return e.collectionGroup!==null}function Re(e){const t=S(e);if(t.D===null){t.D=[];const n=No(t),s=_o(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new Ne(n)),t.D.push(new Ne(et.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Ne(et.keyField(),r))}}}return t.D}function _t(e){const t=S(e);if(!t.C)if(t.limitType==="F")t.C=bo(t.path,t.collectionGroup,Re(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Re(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ne(r.field,o))}const s=t.endAt?new In(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new In(t.startAt.position,!t.startAt.inclusive):null;t.C=bo(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function Qu(e,t,n){return new ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Cn(e,t){return Xs(_t(e),_t(t))&&e.limitType===t.limitType}function Ro(e){return`${Ws(_t(e))}|lt:${e.limitType}`}function Qs(e){return`Query(target=${Bu(_t(e))}; limitType=${e.limitType})`}function Js(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Co(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Re(n),s)||n.endAt&&!function(i,r,o){const a=Co(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Re(n),s))}(e,t)}function xo(e){return(t,n)=>{let s=!1;for(const i of Re(e)){const r=Ju(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ju(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),h=o.data.field(i);return a!==null&&h!==null?Kt(a,h):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Oo(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:En(t)?"-0":t}}function Mo(e){return{integerValue:""+e}}function Zu(e,t){return Pu(t)?Mo(t):Oo(e,t)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Dn{constructor(){this._=void 0}}function tl(e,t,n){return e instanceof _n?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof xe?Fo(e,t):e instanceof Oe?Vo(e,t):function(s,i){const r=Lo(s,i),o=Po(r)+Po(s.k);return zs(r)&&zs(s.k)?Mo(o):Oo(s.M,o)}(e,t)}function el(e,t,n){return e instanceof xe?Fo(e,t):e instanceof Oe?Vo(e,t):n}function Lo(e,t){return e instanceof Nn?zs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class _n extends Dn{}class xe extends Dn{constructor(t){super(),this.elements=t}}function Fo(e,t){const n=Uo(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class Oe extends Dn{constructor(t){super(),this.elements=t}}function Vo(e,t){let n=Uo(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class Nn extends Dn{constructor(t,n){super(),this.M=t,this.k=n}}function Po(e){return L(e.integerValue||e.doubleValue)}function Uo(e){return Gs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function nl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof xe&&s instanceof xe||n instanceof Oe&&s instanceof Oe?$t(n.elements,s.elements,ot):n instanceof Nn&&s instanceof Nn?ot(n.k,s.k):n instanceof _n&&s instanceof _n}(e.transform,t.transform)}class sl{constructor(t,n){this.version=t,this.transformResults=n}}class Nt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Rn{}function il(e,t,n){e instanceof xn?function(s,i,r){const o=s.value.clone(),a=qo(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Me?function(s,i,r){if(!kn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=qo(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Zs(e,t,n){e instanceof xn?function(s,i,r){if(!kn(s.precondition,i))return;const o=s.value.clone(),a=Ho(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Bo(i),o).setHasLocalMutations()}(e,t,n):e instanceof Me?function(s,i,r){if(!kn(s.precondition,i))return;const o=Ho(s.fieldTransforms,r,i),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument(Bo(i),a).setHasLocalMutations()}(e,t,n):function(s,i){kn(s.precondition,i)&&i.convertToNoDocument(b.min())}(e,t)}function rl(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Lo(s.transform,i||null);r!=null&&(n==null&&(n=rt.empty()),n.set(s.field,r))}return n||null}function $o(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$t(n,s,(i,r)=>nl(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Bo(e){return e.isFoundDocument()?e.version:b.min()}class xn extends Rn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Me extends Rn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function jo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function qo(e,t,n){const s=new Map;k(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,el(o,a,n[i]))}return s}function Ho(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,tl(r,o,t))}return s}class ol extends Rn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class al extends Rn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hl{constructor(t){this.count=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F,A;function cl(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Ko(e){if(e===void 0)return dt("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(A=F||(F={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Bt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return mo(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class P{constructor(t,n){this.comparator=t,this.root=n||H.EMPTY}insert(t,n){return new P(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,H.BLACK,null,null))}remove(t){return new P(this.comparator,this.root.remove(t,this.comparator).copy(null,null,H.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class H{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:H.RED,this.left=i!=null?i:H.EMPTY,this.right=r!=null?r:H.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new H(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return H.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new H(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class K{constructor(t){this.comparator=t,this.data=new P(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zo(this.data.getIterator())}getIteratorFrom(t){return new zo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof K)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new K(this.comparator);return n.data=t,n}}class zo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ul=new P(E.comparator);function kt(){return ul}const ll=new P(E.comparator);function ti(){return ll}function ei(){return new Gt(e=>e.toString(),(e,t)=>e.isEqual(t))}const dl=new P(E.comparator),fl=new K(E.comparator);function x(...e){let t=fl;for(const n of e)t=t.add(n);return t}const pl=new K(_);function Go(){return pl}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Le.createSynthesizedTargetChangeForCurrentChange(t,n)),new Mn(b.min(),s,Go(),kt(),x())}}class Le{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Le(q.EMPTY_BYTE_STRING,n,x(),x(),x())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ln{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.$=i}}class Wo{constructor(t,n){this.targetId=t,this.F=n}}class Xo{constructor(t,n,s=q.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Yo{constructor(){this.B=0,this.L=Jo(),this.q=q.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.q=t)}H(){let t=x(),n=x(),s=x();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Le(this.q,this.U,t,n,s)}J(){this.K=!1,this.L=Jo()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class gl{constructor(t){this.nt=t,this.st=new Map,this.it=kt(),this.rt=Qo(),this.ot=new K(_)}at(t){for(const n of t.O)t.$&&t.$.isFoundDocument()?this.ut(n,t.$):this.ct(n,t.key,t.$);for(const n of t.removedTargetIds)this.ct(n,t.key,t.$)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.F.count,i=this.wt(n);if(i){const r=i.target;if(Ys(r))if(s===0){const o=new E(r.path);this.ct(n,o,G.newNoDocument(o,b.min()))}else k(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Ys(a.target)){const h=new E(a.target.path);this.it.get(h)!==null||this.It(o,h)||this.ct(o,h,G.newNoDocument(h,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=x();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(h=>{const c=this.wt(h);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new Mn(t,n,this.ot,this.it,s);return this.it=kt(),this.rt=Qo(),this.ot=new K(_),i}ut(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Yo,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new K(_),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Yo),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Qo(){return new P(E.comparator)}function Jo(){return new P(E.comparator)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ml=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vl{constructor(t,n){this.databaseId=t,this.N=n}}function Fn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zo(e,t){return e.N?t.toBase64():t.toUint8Array()}function wl(e,t){return Fn(e,t.toTimestamp())}function ct(e){return k(!!e),b.fromTimestamp(function(t){const n=pt(t);return new st(n.seconds,n.nanos)}(e))}function ni(e,t){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ta(e){const t=R.fromString(e);return k(ia(t)),t}function si(e,t){return ni(e.databaseId,t.path)}function ii(e,t){const n=ta(t);if(n.get(1)!==e.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(ea(n))}function ri(e,t){return ni(e.databaseId,t)}function El(e){const t=ta(e);return t.length===4?R.emptyPath():ea(t)}function oi(e){return new R(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ea(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function na(e,t,n){return{name:si(e,t),fields:n.value.mapValue.fields}}function Tl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(h,c){return h.N?(k(c===void 0||typeof c=="string"),q.fromBase64String(c||"")):(k(c===void 0||c instanceof Uint8Array),q.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const c=h.code===void 0?d.UNKNOWN:Ko(h.code);return new y(c,h.message||"")}(o);n=new Xo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ii(e,s.document.name),r=ct(s.document.updateTime),o=new rt({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new Ln(h,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ii(e,s.document),r=s.readTime?ct(s.readTime):b.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ln([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ii(e,s.document),r=s.removedTargetIds||[];n=new Ln([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new hl(i),o=s.targetId;n=new Wo(o,r)}}return n}function Il(e,t){let n;if(t instanceof xn)n={update:na(e,t.key,t.value)};else if(t instanceof ol)n={delete:si(e,t.key)};else if(t instanceof Me)n={update:na(e,t.key,t.data),updateMask:xl(t.fieldMask)};else{if(!(t instanceof al))return I();n={verify:si(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof _n)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Oe)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Nn)return{fieldPath:r.field.canonicalString(),increment:o.k};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wl(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function Sl(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ct(s.updateTime):ct(i);return r.isEqual(b.min())&&(r=ct(i)),new sl(r,s.transformResults||[])}(n,t))):[]}function bl(e,t){return{documents:[ri(e,t.path)]}}function Al(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ri(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ri(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(h){if(h.length===0)return;const c=h.map(u=>function(l){if(l.op==="=="){if(Io(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NAN"}};if(To(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Io(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NOT_NAN"}};if(To(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(l.field),op:Nl(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(h){if(h.length!==0)return h.map(c=>function(u){return{field:Wt(u.field),direction:_l(u.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(h,c){return h.N||Ht(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),n}function Cl(e){let t=El(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){k(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=sa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new Ne(Xt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,Ht(l)?null:l}(n.limit));let h=null;n.startAt&&(h=function(u){const l=!!u.before,p=u.values||[];return new In(p,l)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const l=!u.before,p=u.values||[];return new In(p,l)}(n.endAt)),Yu(t,i,o,r,a,"F",h,c)}function Dl(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function sa(e){return e?e.unaryFilter!==void 0?[Rl(e)]:e.fieldFilter!==void 0?[kl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>sa(t)).reduce((t,n)=>t.concat(n)):I():[]}function _l(e){return ml[e]}function Nl(e){return yl[e]}function Wt(e){return{fieldPath:e.canonicalString()}}function Xt(e){return et.fromServerFormat(e.fieldPath)}function kl(e){return Q.create(Xt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Rl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Xt(e.unaryFilter.field);return Q.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Xt(e.unaryFilter.field);return Q.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xt(e.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Xt(e.unaryFilter.field);return Q.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function xl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ia(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ol="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ml{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},h=>s(h))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fe(e){return e.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ll{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&il(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Zs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Zs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(b.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),x())}isEqual(t){return this.batchId===t.batchId&&$t(this.mutations,t.mutations,(n,s)=>$o(n,s))&&$t(this.baseMutations,t.baseMutations,(n,s)=>$o(n,s))}}class ai{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){k(t.mutations.length===s.length);let i=dl;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ai(t,n,s,i)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Fl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rt{constructor(t,n,s,i,r=b.min(),o=b.min(),a=q.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vl{constructor(t){this.Jt=t}}function Pl(e){const t=Cl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Qu(t,t.limit,"L"):t}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ul{constructor(){this.Ue=new $l}addToCollectionParentIndex(t,n){return this.Ue.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.Ue.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getFieldIndex(t,n){return f.resolve(null)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class $l{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new K(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new K(R.comparator)).toArray()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yt{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Yt(0)}static gn(){return new Yt(-1)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ve(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Ol)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bl{constructor(){this.changes=new Gt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,G.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jl{constructor(t,n,s){this.ls=t,this.Fs=n,this.indexManager=s}Bs(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Ls(t,n,s))}Ls(t,n,s){return this.ls.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Us(t,n){return this.ls.getEntries(t,n).next(s=>this.Ks(t,s).next(()=>s))}Ks(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Gs(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(t,n.path):ko(n)?this.js(t,n,s):this.Ws(t,n,s)}Qs(t,n){return this.Bs(t,new E(n)).next(s=>{let i=ti();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}js(t,n,s){const i=n.collectionGroup;let r=ti();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const h=function(c,u){return new ke(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.Ws(t,h,s).next(c=>{c.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}Ws(t,n,s){let i;return this.ls.getAll(t,n.path,s).next(r=>(i=r,this.Fs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const h=a.key;let c=i.get(h);c==null&&(c=G.newInvalidDocument(h),i=i.insert(h,c)),Zs(a,c,o.localWriteTime),c.isFoundDocument()||(i=i.remove(h))}}).next(()=>(i.forEach((r,o)=>{Js(n,o)||(i=i.remove(r))}),i))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.zs=s,this.Hs=i}static Js(t,n){let s=x(),i=x();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new hi(t,n.fromCache,s,i)}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ql{Ys(t){this.Xs=t}Gs(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(b.min())?this.Zs(t,n):this.Xs.Us(t,i).next(r=>{const o=this.ti(n,r);return(bn(n)||An(n))&&this.ei(n.limitType,o,i,s)?this.Zs(t,n):(lo()<=D.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qs(n)),this.Xs.Gs(t,n,s).next(a=>(o.forEach(h=>{a=a.insert(h.key,h)}),a)))})}ti(t,n){let s=new K(xo(t));return n.forEach((i,r)=>{Js(t,r)&&(s=s.add(r))}),s}ei(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(t,n){return lo()<=D.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.Xs.Gs(t,n,b.min())}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hl{constructor(t,n,s,i){this.persistence=t,this.ni=n,this.M=i,this.si=new P(_),this.ii=new Gt(r=>Ws(r),Xs),this.ri=b.min(),this.oi=t.getRemoteDocumentCache(),this.hs=t.getTargetCache(),this.fs=t.getBundleCache(),this.ai(s)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Fs=this.persistence.getMutationQueue(t,this.indexManager),this.ui=new jl(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.si))}}function Kl(e,t,n,s){return new Hl(e,t,n,s)}async function ra(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Fs.getAllMutationBatches(s).next(r=>(i=r,n.ai(t),n.Fs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let h=x();for(const c of i){o.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}return n.ui.Us(s,h).next(c=>({ci:c,removedBatchIds:o,addedBatchIds:a}))})})}function zl(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,h,c){const u=h.batch,l=u.keys();let p=f.resolve();return l.forEach(m=>{p=p.next(()=>c.getEntry(a,m)).next(v=>{const C=h.docVersions.get(m);k(C!==null),v.version.compareTo(C)<0&&(u.applyToRemoteDocument(v,h),v.isValidDocument()&&(v.setReadTime(h.commitVersion),c.addEntry(v)))})}),p.next(()=>o.Fs.removeMutationBatch(a,u))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.Fs.performConsistencyCheck(s)).next(()=>n.ui.Us(s,i))})}function oa(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hs.getLastRemoteSnapshotVersion(n))}function Gl(e,t){const n=S(e),s=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];t.targetChanges.forEach((c,u)=>{const l=i.get(u);if(!l)return;a.push(n.hs.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.hs.addMatchingKeys(r,c.addedDocuments,u)));let p=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?p=p.withResumeToken(q.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,s)),i=i.insert(u,p),function(m,v,C){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(l,p,c)&&a.push(n.hs.updateTargetData(r,p))});let h=kt();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(Wl(r,o,t.documentUpdates).next(c=>{h=c})),!s.isEqual(b.min())){const c=n.hs.getLastRemoteSnapshotVersion(r).next(u=>n.hs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.ui.Ks(r,h)).next(()=>h)}).then(r=>(n.si=i,r))}function Wl(e,t,n){let s=x();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=kt();return n.forEach((o,a)=>{const h=i.get(o);a.isNoDocument()&&a.version.isEqual(b.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!h.isValidDocument()||a.version.compareTo(h.version)>0||a.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",h.version," Watch version:",a.version)}),r})}function Xl(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.Fs.getNextMutationBatchAfterBatchId(s,t)))}function Yl(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.hs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.hs.allocateTargetId(s).next(o=>(i=new Rt(t,o,0,s.currentSequenceNumber),n.hs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.si.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(t,s.targetId)),s})}async function ci(e,t,n){const s=S(e),i=s.si.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fe(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.si=s.si.remove(t),s.ii.delete(i.target)}function aa(e,t,n){const s=S(e);let i=b.min(),r=x();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,h,c){const u=S(a),l=u.ii.get(c);return l!==void 0?f.resolve(u.si.get(l)):u.hs.getTargetData(h,c)}(s,o,_t(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.hs.getMatchingKeysForTargetId(o,a.targetId).next(h=>{r=h})}).next(()=>s.ni.Gs(o,t,n?i:b.min(),n?r:x())).next(a=>({documents:a,hi:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,n){return f.resolve(this._i.get(n))}saveBundleMetadata(t,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:ct(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.wi.get(n))}saveNamedQuery(t,n){return this.wi.set(n.name,function(s){return{name:s.name,query:Pl(s.bundledQuery),readTime:ct(s.readTime)}}(n)),f.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jl{constructor(){this.overlays=new P(E.comparator),this.mi=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.mi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.mi.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=ei(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const h=a.getNext().value,c=h.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&h.largestBatchId>s&&i.set(h.getKey(),h)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new P((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ei(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ei(),h=r.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return f.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(s.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Fl(n,s));let r=this.mi.get(n);r===void 0&&(r=x(),this.mi.set(n,r)),this.mi.set(n,r.add(s.key))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ui{constructor(){this.gi=new K(U.yi),this.pi=new K(U.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,n){const s=new U(t,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ei(new U(t,n))}Ai(t,n){t.forEach(s=>this.removeReference(s,n))}Ri(t){const n=new E(new R([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.pi.forEachInRange([s,i],o=>{this.Ei(o),r.push(o.key)}),r}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const n=new E(new R([])),s=new U(n,t),i=new U(n,t+1);let r=x();return this.pi.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this.Vi=n}static yi(t,n){return E.comparator(t.key,n.key)||_(t.Vi,n.Vi)}static Ii(t,n){return _(t.Vi,n.Vi)||E.comparator(t.key,n.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Fs=[],this.vi=1,this.Si=new K(U.yi)}checkEmpty(t){return f.resolve(this.Fs.length===0)}addMutationBatch(t,n,s,i){const r=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];const o=new Ll(r,n,s,i);this.Fs.push(o);for(const a of i)this.Si=this.Si.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ci(s),r=i<0?0:i;return f.resolve(this.Fs.length>r?this.Fs[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Fs.length===0?-1:this.vi-1)}getAllMutationBatches(t){return f.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([s,i],o=>{const a=this.Di(o.Vi);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new K(_);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([r,o],a=>{s=s.add(a.Vi)})}),f.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new U(new E(r),0);let a=new K(_);return this.Si.forEachWhile(h=>{const c=h.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(h.Vi)),!0)},o),f.resolve(this.xi(a))}xi(t){const n=[];return t.forEach(s=>{const i=this.Di(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){k(this.Ni(n.batchId,"removed")===0),this.Fs.shift();let s=this.Si;return f.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Si=s})}dn(t){}containsKey(t,n){const s=new U(n,0),i=this.Si.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Fs.length,f.resolve()}Ni(t,n){return this.Ci(t)}Ci(t){return this.Fs.length===0?0:t-this.Fs[0].batchId}Di(t){const n=this.Ci(t);return n<0||n>=this.Fs.length?null:this.Fs[n]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class td{constructor(t){this.ki=t,this.docs=new P(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=kt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),f.resolve(s)}getAll(t,n,s){let i=kt();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:h}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||h.readTime.compareTo(s)<=0||(i=i.insert(h.key,h.mutableCopy()))}return f.resolve(i)}Mi(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new ed(this)}getSize(t){return f.resolve(this.size)}}class ed extends Bl{constructor(t){super(),this.Un=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Un.addEntry(t,i)):this.Un.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Un.getEntry(t,n)}getAllFromCache(t,n){return this.Un.getEntries(t,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nd{constructor(t){this.persistence=t,this.Oi=new Gt(n=>Ws(n),Xs),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.$i=0,this.Fi=new ui,this.targetCount=0,this.Bi=Yt.mn()}forEachTarget(t,n){return this.Oi.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),f.resolve()}In(t){this.Oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Bi=new Yt(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.In(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.In(n),f.resolve()}removeTargetData(t,n){return this.Oi.delete(n.target),this.Fi.Ri(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Oi.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Fi.Ti(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Fi.Ai(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Fi.Ri(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Fi.Pi(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Fi.containsKey(n))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sd{constructor(t,n){this.Li={},this.overlays={},this.Zn=new qs(0),this.ts=!1,this.ts=!0,this.referenceDelegate=t(this),this.hs=new nd(this),this.indexManager=new Ul,this.ls=function(s){return new td(s)}(s=>this.referenceDelegate.qi(s)),this.M=new Vl(n),this.fs=new Ql(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Jl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Li[t.toKey()];return s||(s=new Zl(n,this.referenceDelegate),this.Li[t.toKey()]=s),s}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new id(this.Zn.next());return this.referenceDelegate.Ui(),s(i).next(r=>this.referenceDelegate.Ki(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gi(t,n){return f.or(Object.values(this.Li).map(s=>()=>s.containsKey(t,n)))}}class id extends Ml{constructor(t){super(),this.currentSequenceNumber=t}}class li{constructor(t){this.persistence=t,this.Qi=new ui,this.ji=null}static Wi(t){return new li(t)}get zi(){if(this.ji)return this.ji;throw I()}addReference(t,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.zi.add(n.toString()),f.resolve()}removeTarget(t,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.zi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ui(){this.ji=new Set}Ki(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.zi,s=>{const i=E.fromPath(s);return this.Hi(t,i).next(r=>{r||n.removeEntry(i,b.min())})}).next(()=>(this.ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hi(t,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}qi(t){return 0}Hi(t,n){return f.or([()=>f.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gi(t,n)])}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ha{constructor(){this.activeTargetIds=Go()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rd{constructor(){this.Or=new ha,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Or.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Or.Zi(t)}isLocalQueryTarget(t){return this.Or.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(t){return this.Or.activeTargetIds.has(t)}start(){return this.Or=new ha,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class od{Fr(t){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ca{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Ur(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ad={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hd{constructor(t){this.Qr=t.Qr,this.jr=t.jr}Wr(t){this.zr=t}Hr(t){this.Jr=t}onMessage(t){this.Yr=t}close(){this.jr()}send(t){this.Qr(t)}Xr(){this.zr()}Zr(t){this.Jr(t)}eo(t){this.Yr(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.no=n+"://"+t.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(t,n,s,i,r){const o=this.ro(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.oo(a,i,r),this.ao(t,o,a,s).then(h=>(w("RestConnection","Received: ",h),h),h=>{throw fo("RestConnection",`${t} failed with error: `,h,"url: ",o,"request:",s),h})}uo(t,n,s,i,r){return this.io(t,n,s,i,r)}oo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ut,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ro(t,n){const s=ad[t];return`${this.no}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,n,s,i){return new Promise((r,o)=>{const a=new Cu;a.listenOnce(Su.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bs.NO_ERROR:const c=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Bs.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case Bs.HTTP_ERROR:const u=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new y(p,l.message))}else o(new y(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const h=JSON.stringify(i);a.send(n,"POST",h,s,15)})}co(t,n,s){const i=[this.no,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Tu(),o=Iu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Au({})),this.oo(a.initMessageHeaders,n,s),hh()||uh()||lh()||dh()||fh()||ch()||(a.httpHeadersOverwriteParam="$httpHeaders");const h=i.join("");w("Connection","Creating WebChannel: "+h,a);const c=r.createWebChannel(h,a);let u=!1,l=!1;const p=new hd({Qr:v=>{l?w("Connection","Not sending because WebChannel is closed:",v):(u||(w("Connection","Opening WebChannel transport."),c.open(),u=!0),w("Connection","WebChannel sending:",v),c.send(v))},jr:()=>c.close()}),m=(v,C,N)=>{v.listen(C,Z=>{try{N(Z)}catch(it){setTimeout(()=>{throw it},0)}})};return m(c,wn.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),m(c,wn.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),p.Zr())}),m(c,wn.EventType.ERROR,v=>{l||(l=!0,fo("Connection","WebChannel transport errored:",v),p.Zr(new y(d.UNAVAILABLE,"The operation could not be completed")))}),m(c,wn.EventType.MESSAGE,v=>{var C;if(!l){const N=v.data[0];k(!!N);const Z=N,it=Z.error||((C=Z[0])===null||C===void 0?void 0:C.error);if(it){w("Connection","WebChannel received error:",it);const ne=it.status;let se=function(sh){const Ri=F[sh];if(Ri!==void 0)return Ko(Ri)}(ne),ki=it.message;se===void 0&&(se=d.INTERNAL,ki="Unknown error status: "+ne+" with message "+it.message),l=!0,p.Zr(new y(se,ki)),c.close()}else w("Connection","WebChannel received:",N),p.eo(N)}}),m(o,bu.STAT_EVENT,v=>{v.stat===co.PROXY?w("Connection","Detected buffering proxy"):v.stat===co.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Xr()},0),p}}function di(){return typeof document!="undefined"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vn(e){return new vl(e,!0)}class ua{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hn=t,this.timerId=n,this.ho=s,this.lo=i,this.fo=r,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(t){this.cancel();const n=Math.floor(this._o+this.Io()),s=Math.max(0,Date.now()-this.mo),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this._o} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,i,()=>(this.mo=Date.now(),t())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){this.wo!==null&&(this.wo.skipDelay(),this.wo=null)}cancel(){this.wo!==null&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class la{constructor(t,n,s,i,r,o,a,h){this.Hn=t,this.Eo=s,this.Ao=i,this.Ro=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=h,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new ua(t,n)}So(){return this.state===1||this.state===5||this.Do()}Do(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&this.Po===null&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(t){this.Oo(),this.stream.send(t)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,t!==4?this.vo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Fo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Hr(n)}Fo(){}auth(){this.state=1;const t=this.Bo(this.bo),n=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.bo===n&&this.Lo(s,i)},s=>{t(()=>{const i=new y(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Lo(t,n){const s=this.Bo(this.bo);this.stream=this.Uo(t,n),this.stream.Wr(()=>{s(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Bo(t){return n=>{this.Hn.enqueueAndForget(()=>this.bo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ud extends la{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Uo(t,n){return this.Ro.co("Listen",t,n)}onMessage(t){this.vo.reset();const n=Tl(this.M,t),s=function(i){if(!("targetChange"in i))return b.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?b.min():r.readTime?ct(r.readTime):b.min()}(t);return this.listener.Ko(n,s)}Go(t){const n={};n.database=oi(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=Ys(a)?{documents:bl(i,a)}:{query:Al(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Zo(i,r.resumeToken):r.snapshotVersion.compareTo(b.min())>0&&(o.readTime=Fn(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=Dl(this.M,t);s&&(n.labels=s),this.Mo(n)}Qo(t){const n={};n.database=oi(this.M),n.removeTarget=t,this.Mo(n)}}class ld extends la{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.jo=!1}get Wo(){return this.jo}start(){this.jo=!1,this.lastStreamToken=void 0,super.start()}Fo(){this.jo&&this.zo([])}Uo(t,n){return this.Ro.co("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.jo){this.vo.reset();const n=Sl(t.writeResults,t.commitTime),s=ct(t.commitTime);return this.listener.Ho(s,n)}return k(!t.writeResults||t.writeResults.length===0),this.jo=!0,this.listener.Jo()}Yo(){const t={};t.database=oi(this.M),this.Mo(t)}zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Il(this.M,s))};this.Mo(n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class dd extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Ro=s,this.M=i,this.Xo=!1}Zo(){if(this.Xo)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}io(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}uo(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.uo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}terminate(){this.Xo=!0}}class fd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){this.ta===0&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(t){this.state==="Online"?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ia("Offline")))}set(t){this.aa(),this.ta=0,t==="Online"&&(this.na=!1),this.ia(t)}ia(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(dt(n),this.na=!1):w("OnlineStateTracker",n)}aa(){this.ea!==null&&(this.ea.cancel(),this.ea=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pd{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=r,this.fa.Fr(o=>{s.enqueueAndForget(async()=>{xt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const h=S(a);h.ha.add(4),await Pe(h),h.da.set("Unknown"),h.ha.delete(4),await Pn(h)}(this))})}),this.da=new fd(s,i)}}async function Pn(e){if(xt(e))for(const t of e.la)await t(!0)}async function Pe(e){for(const t of e.la)await t(!1)}function da(e,t){const n=S(e);n.ca.has(t.targetId)||(n.ca.set(t.targetId,t),gi(n)?pi(n):Qt(n).Do()&&fi(n,t))}function fa(e,t){const n=S(e),s=Qt(n);n.ca.delete(t),s.Do()&&pa(n,t),n.ca.size===0&&(s.Do()?s.No():xt(n)&&n.da.set("Unknown"))}function fi(e,t){e._a.Z(t.targetId),Qt(e).Go(t)}function pa(e,t){e._a.Z(t),Qt(e).Qo(t)}function pi(e){e._a=new gl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.ca.get(t)||null}),Qt(e).start(),e.da.sa()}function gi(e){return xt(e)&&!Qt(e).So()&&e.ca.size>0}function xt(e){return S(e).ha.size===0}function ga(e){e._a=void 0}async function gd(e){e.ca.forEach((t,n)=>{fi(e,t)})}async function md(e,t){ga(e),gi(e)?(e.da.oa(t),pi(e)):e.da.set("Unknown")}async function yd(e,t,n){if(e.da.set("Online"),t instanceof Xo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.ca.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.ca.delete(o),s._a.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Un(e,s)}else if(t instanceof Ln?e._a.at(t):t instanceof Wo?e._a._t(t):e._a.ht(t),!n.isEqual(b.min()))try{const s=await oa(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i._a.yt(r);return o.targetChanges.forEach((a,h)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.ca.get(h);c&&i.ca.set(h,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const h=i.ca.get(a);if(!h)return;i.ca.set(a,h.withResumeToken(q.EMPTY_BYTE_STRING,h.snapshotVersion)),pa(i,a);const c=new Rt(h.target,a,1,h.sequenceNumber);fi(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Un(e,s)}}async function Un(e,t,n){if(!Fe(t))throw t;e.ha.add(1),await Pe(e),e.da.set("Offline"),n||(n=()=>oa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.ha.delete(1),await Pn(e)})}function ma(e,t){return t().catch(n=>Un(e,n,t))}async function $n(e){const t=S(e),n=gt(t);let s=t.ua.length>0?t.ua[t.ua.length-1].batchId:-1;for(;vd(t);)try{const i=await Xl(t.localStore,s);if(i===null){t.ua.length===0&&n.No();break}s=i.batchId,wd(t,i)}catch(i){await Un(t,i)}ya(t)&&va(t)}function vd(e){return xt(e)&&e.ua.length<10}function wd(e,t){e.ua.push(t);const n=gt(e);n.Do()&&n.Wo&&n.zo(t.mutations)}function ya(e){return xt(e)&&!gt(e).So()&&e.ua.length>0}function va(e){gt(e).start()}async function Ed(e){gt(e).Yo()}async function Td(e){const t=gt(e);for(const n of e.ua)t.zo(n.mutations)}async function Id(e,t,n){const s=e.ua.shift(),i=ai.from(s,t,n);await ma(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await $n(e)}async function Sd(e,t){t&&gt(e).Wo&&await async function(n,s){if(i=s.code,cl(i)&&i!==d.ABORTED){const r=n.ua.shift();gt(n).xo(),await ma(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await $n(n)}var i}(e,t),ya(e)&&va(e)}async function wa(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=xt(n);n.ha.add(3),await Pe(n),s&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.ha.delete(3),await Pn(n)}async function bd(e,t){const n=S(e);t?(n.ha.delete(2),await Pn(n)):t||(n.ha.add(2),await Pe(n),n.da.set("Unknown"))}function Qt(e){return e.wa||(e.wa=function(t,n,s){const i=S(t);return i.Zo(),new ud(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Wr:gd.bind(null,e),Hr:md.bind(null,e),Ko:yd.bind(null,e)}),e.la.push(async t=>{t?(e.wa.xo(),gi(e)?pi(e):e.da.set("Unknown")):(await e.wa.stop(),ga(e))})),e.wa}function gt(e){return e.ma||(e.ma=function(t,n,s){const i=S(t);return i.Zo(),new ld(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Wr:Ed.bind(null,e),Hr:Sd.bind(null,e),Jo:Td.bind(null,e),Ho:Id.bind(null,e)}),e.la.push(async t=>{t?(e.ma.xo(),await $n(e)):(await e.ma.stop(),e.ua.length>0&&(w("RemoteStore",`Stopping write stream with ${e.ua.length} pending writes`),e.ua=[]))})),e.ma}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new mi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yi(e,t){if(dt("AsyncQueue",`${t}: ${e}`),Fe(e))return new y(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=ti(),this.sortedSet=new P(this.comparator)}static emptySet(t){return new Jt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Jt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ea{constructor(){this.ga=new P(E.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):I():this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,s)=>{t.push(s)}),t}}class Zt{constructor(t,n,s,i,r,o,a,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=h}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Zt(t,n,Jt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ad{constructor(){this.pa=void 0,this.listeners=[]}}class Cd{constructor(){this.queries=new Gt(t=>Ro(t),Cn),this.onlineState="Unknown",this.Ia=new Set}}async function Ta(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ad),i)try{r.pa=await n.onListen(s)}catch(o){const a=yi(o,`Initialization of query '${Qs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Ta(n.onlineState),r.pa&&t.Ea(r.pa)&&vi(n)}async function Ia(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Dd(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Ea(i)&&(s=!0);o.pa=i}}s&&vi(n)}function _d(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function vi(e){e.Ia.forEach(t=>{t.next()})}class Sa{constructor(t,n,s){this.query=t,this.Aa=n,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=s||{}}Ea(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Zt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Ra?this.Pa(t)&&(this.Aa.next(t),n=!0):this.Va(t,this.onlineState)&&(this.va(t),n=!0),this.ba=t,n}onError(t){this.Aa.error(t)}Ta(t){this.onlineState=t;let n=!1;return this.ba&&!this.Ra&&this.Va(this.ba,t)&&(this.va(this.ba),n=!0),n}Va(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Sa||!s)&&(!t.docs.isEmpty()||n==="Offline")}Pa(t){if(t.docChanges.length>0)return!0;const n=this.ba&&this.ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}va(t){t=Zt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Ra=!0,this.Aa.next(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ba{constructor(t){this.key=t}}class Aa{constructor(t){this.key=t}}class Nd{constructor(t,n){this.query=t,this.ka=n,this.Ma=null,this.current=!1,this.Oa=x(),this.mutatedKeys=x(),this.$a=xo(t),this.Fa=new Jt(this.$a)}get Ba(){return this.ka}La(t,n){const s=n?n.qa:new Ea,i=n?n.Fa:this.Fa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const h=bn(this.query)&&i.size===this.query.limit?i.last():null,c=An(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const p=i.get(u),m=Js(this.query,l)?l:null,v=!!p&&this.mutatedKeys.has(p.key),C=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;p&&m?p.data.isEqual(m.data)?v!==C&&(s.track({type:3,doc:m}),N=!0):this.Ua(p,m)||(s.track({type:2,doc:m}),N=!0,(h&&this.$a(m,h)>0||c&&this.$a(m,c)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),N=!0):p&&!m&&(s.track({type:1,doc:p}),N=!0,(h||c)&&(a=!0)),N&&(m?(o=o.add(m),r=C?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),bn(this.query)||An(this.query))for(;o.size>this.query.limit;){const u=bn(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Fa:o,qa:s,ei:a,mutatedKeys:r}}Ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Fa;this.Fa=t.Fa,this.mutatedKeys=t.mutatedKeys;const r=t.qa.ya();r.sort((c,u)=>function(l,p){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(c.type,u.type)||this.$a(c.doc,u.doc)),this.Ka(s);const o=n?this.Ga():[],a=this.Oa.size===0&&this.current?1:0,h=a!==this.Ma;return this.Ma=a,r.length!==0||h?{snapshot:new Zt(this.query,t.Fa,i,r,t.mutatedKeys,a===0,h,!1),Qa:o}:{Qa:o}}Ta(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new Ea,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(t){return!this.ka.has(t)&&!!this.Fa.has(t)&&!this.Fa.get(t).hasLocalMutations}Ka(t){t&&(t.addedDocuments.forEach(n=>this.ka=this.ka.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ka=this.ka.delete(n)),this.current=t.current)}Ga(){if(!this.current)return[];const t=this.Oa;this.Oa=x(),this.Fa.forEach(s=>{this.ja(s.key)&&(this.Oa=this.Oa.add(s.key))});const n=[];return t.forEach(s=>{this.Oa.has(s)||n.push(new Aa(s))}),this.Oa.forEach(s=>{t.has(s)||n.push(new ba(s))}),n}Wa(t){this.ka=t.hi,this.Oa=x();const n=this.La(t.documents);return this.applyChanges(n,!0)}za(){return Zt.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,this.Ma===0)}}class kd{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Rd{constructor(t){this.key=t,this.Ha=!1}}class xd{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ja={},this.Ya=new Gt(a=>Ro(a),Cn),this.Xa=new Map,this.Za=new Set,this.tu=new P(E.comparator),this.eu=new Map,this.nu=new ui,this.su={},this.iu=new Map,this.ru=Yt.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return this.ou===!0}}async function Od(e,t){const n=qd(e);let s,i;const r=n.Ya.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.za();else{const o=await Yl(n.localStore,_t(t));n.isPrimaryClient&&da(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Md(n,t,s,a==="current")}return i}async function Md(e,t,n,s){e.au=(u,l,p)=>async function(m,v,C,N){let Z=v.view.La(C);Z.ei&&(Z=await aa(m.localStore,v.query,!1).then(({documents:se})=>v.view.La(se,Z)));const it=N&&N.targetChanges.get(v.targetId),ne=v.view.applyChanges(Z,m.isPrimaryClient,it);return Ra(m,v.targetId,ne.Qa),ne.snapshot}(e,u,l,p);const i=await aa(e.localStore,t,!0),r=new Nd(t,i.hi),o=r.La(i.documents),a=Le.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),h=r.applyChanges(o,e.isPrimaryClient,a);Ra(e,n,h.Qa);const c=new kd(t,n,r);return e.Ya.set(t,c),e.Xa.has(n)?e.Xa.get(n).push(t):e.Xa.set(n,[t]),h.snapshot}async function Ld(e,t){const n=S(e),s=n.Ya.get(t),i=n.Xa.get(s.targetId);if(i.length>1)return n.Xa.set(s.targetId,i.filter(r=>!Cn(r,t))),void n.Ya.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ci(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),fa(n.remoteStore,s.targetId),wi(n,s.targetId)}).catch(Ve)):(wi(n,s.targetId),await ci(n.localStore,s.targetId,!0))}async function Fd(e,t,n){const s=Hd(e);try{const i=await function(r,o){const a=S(r),h=st.now(),c=o.reduce((l,p)=>l.add(p.key),x());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.ui.Us(l,c).next(p=>{u=p;const m=[];for(const v of o){const C=rl(v,u.get(v.key));C!=null&&m.push(new Me(v.key,C,So(C.value.mapValue),Nt.exists(!0)))}return a.Fs.addMutationBatch(l,h,m,o)})).then(l=>(l.applyToLocalDocumentSet(u),{batchId:l.batchId,changes:u}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let h=r.su[r.currentUser.toKey()];h||(h=new P(_)),h=h.insert(o,a),r.su[r.currentUser.toKey()]=h}(s,i.batchId,n),await Ue(s,i.changes),await $n(s.remoteStore)}catch(i){const r=yi(i,"Failed to persist write");n.reject(r)}}async function Ca(e,t){const n=S(e);try{const s=await Gl(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.eu.get(r);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ha=!0:i.modifiedDocuments.size>0?k(o.Ha):i.removedDocuments.size>0&&(k(o.Ha),o.Ha=!1))}),await Ue(n,s,t)}catch(s){await Ve(s)}}function Da(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ya.forEach((r,o)=>{const a=o.view.Ta(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let h=!1;a.queries.forEach((c,u)=>{for(const l of u.listeners)l.Ta(o)&&(h=!0)}),h&&vi(a)}(s.eventManager,t),i.length&&s.Ja.Ko(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Vd(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.eu.get(t),r=i&&i.key;if(r){let o=new P(E.comparator);o=o.insert(r,G.newNoDocument(r,b.min()));const a=x().add(r),h=new Mn(b.min(),new Map,new K(_),o,a);await Ca(s,h),s.tu=s.tu.remove(r),s.eu.delete(t),Ei(s)}else await ci(s.localStore,t,!1).then(()=>wi(s,t,n)).catch(Ve)}async function Pd(e,t){const n=S(e),s=t.batch.batchId;try{const i=await zl(n.localStore,t);Na(n,s,null),_a(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ue(n,i)}catch(i){await Ve(i)}}async function Ud(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let c;return a.Fs.lookupMutationBatch(h,o).next(u=>(k(u!==null),c=u.keys(),a.Fs.removeMutationBatch(h,u))).next(()=>a.Fs.performConsistencyCheck(h)).next(()=>a.ui.Us(h,c))})}(s.localStore,t);Na(s,t,n),_a(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ue(s,i)}catch(i){await Ve(i)}}function _a(e,t){(e.iu.get(t)||[]).forEach(n=>{n.resolve()}),e.iu.delete(t)}function Na(e,t,n){const s=S(e);let i=s.su[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.su[s.currentUser.toKey()]=i}}function wi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Xa.get(t))e.Ya.delete(s),n&&e.Ja.uu(s,n);e.Xa.delete(t),e.isPrimaryClient&&e.nu.Ri(t).forEach(s=>{e.nu.containsKey(s)||ka(e,s)})}function ka(e,t){e.Za.delete(t.path.canonicalString());const n=e.tu.get(t);n!==null&&(fa(e.remoteStore,n),e.tu=e.tu.remove(t),e.eu.delete(n),Ei(e))}function Ra(e,t,n){for(const s of n)s instanceof ba?(e.nu.addReference(s.key,t),$d(e,s)):s instanceof Aa?(w("SyncEngine","Document no longer in limbo: "+s.key),e.nu.removeReference(s.key,t),e.nu.containsKey(s.key)||ka(e,s.key)):I()}function $d(e,t){const n=t.key,s=n.path.canonicalString();e.tu.get(n)||e.Za.has(s)||(w("SyncEngine","New document in limbo: "+n),e.Za.add(s),Ei(e))}function Ei(e){for(;e.Za.size>0&&e.tu.size<e.maxConcurrentLimboResolutions;){const t=e.Za.values().next().value;e.Za.delete(t);const n=new E(R.fromString(t)),s=e.ru.next();e.eu.set(s,new Rd(n)),e.tu=e.tu.insert(n,s),da(e.remoteStore,new Rt(_t(Sn(n.path)),s,2,qs.A))}}async function Ue(e,t,n){const s=S(e),i=[],r=[],o=[];s.Ya.isEmpty()||(s.Ya.forEach((a,h)=>{o.push(s.au(h,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(h.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=hi.Js(h.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ja.Ko(i),await async function(a,h){const c=S(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(h,l=>f.forEach(l.zs,p=>c.persistence.referenceDelegate.addReference(u,l.targetId,p)).next(()=>f.forEach(l.Hs,p=>c.persistence.referenceDelegate.removeReference(u,l.targetId,p)))))}catch(u){if(!Fe(u))throw u;w("LocalStore","Failed to update sequence numbers: "+u)}for(const u of h){const l=u.targetId;if(!u.fromCache){const p=c.si.get(l),m=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(m);c.si=c.si.insert(l,v)}}}(s.localStore,r))}async function Bd(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await ra(n.localStore,t);n.currentUser=t,function(i,r){i.iu.forEach(o=>{o.forEach(a=>{a.reject(new y(d.CANCELLED,r))})}),i.iu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ue(n,s.ci)}}function jd(e,t){const n=S(e),s=n.eu.get(t);if(s&&s.Ha)return x().add(s.key);{let i=x();const r=n.Xa.get(t);if(!r)return i;for(const o of r){const a=n.Ya.get(o);i=i.unionWith(a.view.Ba)}return i}}function qd(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ca.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vd.bind(null,t),t.Ja.Ko=Dd.bind(null,t.eventManager),t.Ja.uu=_d.bind(null,t.eventManager),t}function Hd(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ud.bind(null,t),t}class Kd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Vn(t.databaseInfo.databaseId),this.sharedClientState=this.hu(t),this.persistence=this.lu(t),await this.persistence.start(),this.gcScheduler=this.fu(t),this.localStore=this.du(t)}fu(t){return null}du(t){return Kl(this.persistence,new ql,t.initialUser,this.M)}lu(t){return new sd(li.Wi,this.M)}hu(t){return new rd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Da(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bd.bind(null,this.syncEngine),await bd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Cd}createDatastore(t){const n=Vn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new cd(i));var i;return function(r,o,a,h){return new dd(r,o,a,h)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Da(this.syncEngine,a,0),o=ca.vt()?new ca:new od,new pd(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,h,c){const u=new xd(s,i,r,o,a,h);return c&&(u.ou=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);w("RemoteStore","RemoteStore shutting down."),n.ha.add(5),await Pe(n),n.fa.shutdown(),n.da.set("Unknown")}(this.remoteStore)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xa{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.wu(this.observer.next,t)}error(t){this.observer.error?this.wu(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}mu(){this.muted=!0}wu(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gd{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=po.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=yi(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Wd(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ra(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Xd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yd(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>wa(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>wa(t.remoteStore,r)),e.onlineComponents=t}async function Yd(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Wd(e,new Kd)),e.offlineComponents}async function Oa(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Xd(e,new zd)),e.onlineComponents}function Qd(e){return Oa(e).then(t=>t.syncEngine)}async function Ti(e){const t=await Oa(e),n=t.eventManager;return n.onListen=Od.bind(null,t.syncEngine),n.onUnlisten=Ld.bind(null,t.syncEngine),n}function Jd(e,t,n={}){const s=new ft;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,h){const c=new xa({next:l=>{r.enqueueAndForget(()=>Ia(i,u));const p=l.docs.has(o);!p&&l.fromCache?h.reject(new y(d.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&l.fromCache&&a&&a.source==="server"?h.reject(new y(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(l)},error:l=>h.reject(l)}),u=new Sa(Sn(o.path),c,{includeMetadataChanges:!0,Sa:!0});return Ta(i,u)}(await Ti(e),e.asyncQueue,t,n,s)),s.promise}const Ma=new Map;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function La(e,t,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Zd(e,t,n,s){if(t===!0&&s===!0)throw new y(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fa(e){if(!E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Va(e){if(E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Bn(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function mt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bn(e);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}class Pa{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Zd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ii{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pa({}),this._settingsFrozen=!1,t instanceof qt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qt(i.options.projectId)}(t))}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _u;switch(n.type){case"gapi":const s=n.client;return k(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Ru(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ma.get(t);n&&(w("ComponentProvider","Removing Datastore"),Ma.delete(t),n.terminate())}(this),Promise.resolve()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class J{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new J(this.firestore,t,this._key)}}class $e{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new $e(this.firestore,t,this._query)}}class yt extends $e{constructor(t,n,s){super(t,n,Sn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new J(this.firestore,null,new E(t))}withConverter(t){return new yt(this.firestore,t,this._path)}}function kf(e,t,...n){if(e=vt(e),La("collection","path",t),e instanceof Ii){const s=R.fromString(t,...n);return Va(s),new yt(e,null,s)}{if(!(e instanceof J||e instanceof yt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return Va(s),new yt(e.firestore,null,s)}}function tf(e,t,...n){if(e=vt(e),arguments.length===1&&(t=po.R()),La("doc","path",t),e instanceof Ii){const s=R.fromString(t,...n);return Fa(s),new J(e,null,new E(s))}{if(!(e instanceof J||e instanceof yt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return Fa(s),new J(e.firestore,e instanceof yt?e.converter:null,new E(s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ef{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new ua(this,"async_queue_retry"),this.Fu=()=>{const n=di();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.vo.To()};const t=di();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Bu(),this.Lu(t)}enterRestrictedMode(t){if(!this.xu){this.xu=!0,this.Ou=t||!1;const n=di();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Fu)}}enqueue(t){if(this.Bu(),this.xu)return new Promise(()=>{});const n=new ft;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Cu.push(t),this.qu()))}async qu(){if(this.Cu.length!==0){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(t){if(!Fe(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(t){const n=this.Du.then(()=>(this.Mu=!0,t().catch(s=>{this.ku=s,this.Mu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Mu=!1,s))));return this.Du=n,n}enqueueAfterDelay(t,n,s){this.Bu(),this.$u.indexOf(t)>-1&&(n=0);const i=mi.createAndSchedule(this,t,n,s,r=>this.Uu(r));return this.Nu.push(i),i}Bu(){this.ku&&I()}verifyOperationInProgress(){}async Ku(){let t;do t=this.Du,await t;while(t!==this.Du)}Gu(t){for(const n of this.Nu)if(n.timerId===t)return!0;return!1}Qu(t){return this.Ku().then(()=>{this.Nu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ku()})}ju(t){this.$u.push(t)}Uu(t){const n=this.Nu.indexOf(t);this.Nu.splice(n,1)}}function Ua(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class te extends Ii{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new ef,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||$a(this),this._firestoreClient.terminate()}}function nf(e=uc()){return rc(e,"firestore").getImmediate()}function Si(e){return e._firestoreClient||$a(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $a(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Vu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Gd(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ee(q.fromBase64String(t))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ee(q.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ba{constructor(t){this._methodName=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ai{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _(this._lat,t._lat)||_(this._long,t._long)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sf=/^__.*__$/;class rf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Me(t,this.data,this.fieldMask,n,this.fieldTransforms):new xn(t,this.data,n,this.fieldTransforms)}}function ja(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Ci{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Wu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get zu(){return this.settings.zu}Hu(t){return new Ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ju(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Hu({path:s,Yu:!1});return i.Xu(t),i}Zu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Hu({path:s,Yu:!1});return i.Wu(),i}tc(t){return this.Hu({path:void 0,Yu:!0})}ec(t){return jn(t,this.settings.methodName,this.settings.nc||!1,this.path,this.settings.sc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Wu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Xu(this.path.get(t))}Xu(t){if(t.length===0)throw this.ec("Document fields must not be empty");if(ja(this.zu)&&sf.test(t))throw this.ec('Document fields cannot begin and end with "__"')}}class of{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Vn(t)}ic(t,n,s,i=!1){return new Ci({zu:t,methodName:n,sc:s,path:et.emptyPath(),Yu:!1,nc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Di(e){const t=e._freezeSettings(),n=Vn(e._databaseId);return new of(e._databaseId,!!t.ignoreUndefinedProperties,n)}function qa(e,t,n,s,i,r={}){const o=e.ic(r.merge||r.mergeFields?2:0,t,n,i);za("Data must be an object, but it was:",o,s);const a=Ha(s,o);let h,c;if(r.merge)h=new Hs(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const l of r.mergeFields){const p=hf(t,l,n);if(!o.contains(p))throw new y(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uf(u,p)||u.push(p)}h=new Hs(u),c=o.fieldTransforms.filter(l=>h.covers(l.field))}else h=null,c=o.fieldTransforms;return new rf(new rt(a),h,c)}function af(e,t,n,s=!1){return _i(n,e.ic(s?4:3,t))}function _i(e,t){if(Ka(e=vt(e)))return za("Unsupported field value:",t,e),Ha(e,t);if(e instanceof Ba)return function(n,s){if(!ja(s.zu))throw s.ec(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ec(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Yu&&t.zu!==4)throw t.ec("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=_i(o,s.tc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Zu(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=st.fromDate(n);return{timestampValue:Fn(s.M,i)}}if(n instanceof st){const i=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fn(s.M,i)}}if(n instanceof Ai)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ee)return{bytesValue:Zo(s.M,n._byteString)};if(n instanceof J){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ec(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ni(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ec(`Unsupported field value: ${Bn(n)}`)}(e,t)}function Ha(e,t){const n={};return mo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bt(e,(s,i)=>{const r=_i(i,t.Ju(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ka(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof st||e instanceof Ai||e instanceof ee||e instanceof J||e instanceof Ba)}function za(e,t,n){if(!Ka(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Bn(n);throw s==="an object"?t.ec(e+" a custom object"):t.ec(e+" "+s)}}function hf(e,t,n){if((t=vt(t))instanceof bi)return t._internalPath;if(typeof t=="string")return Ga(e,t);throw jn("Field path arguments must be of type string or ",e,!1,void 0,n)}const cf=new RegExp("[~\\*/\\[\\]]");function Ga(e,t,n){if(t.search(cf)>=0)throw jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bi(...t.split("."))._internalPath}catch{throw jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new y(d.INVALID_ARGUMENT,a+e+h)}function uf(e,t){return e.some(n=>n.isEqual(t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new J(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ni("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lf extends Wa{data(){return super.data()}}function Ni(e,t){return typeof t=="string"?Ga(e,t):t instanceof bi?t._internalPath:t._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Be{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xa extends Wa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ni("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class qn extends Xa{data(t={}){return super.data(t)}}class df{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Be(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new qn(this._firestore,this._userDataWriter,s.key,s,new Be(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,c=-1;return o.type!==0&&(h=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:ff(o.type),doc:a,oldIndex:h,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ff(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e){if(An(e)&&e.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gf{}function Rf(e,...t){for(const n of t)e=n._apply(e);return e}class mf extends gf{constructor(t,n,s){super(),this.ac=t,this.uc=n,this.cc=s,this.type="where"}_apply(t){const n=Di(t.firestore),s=function(i,r,o,a,h,c,u){let l;if(h.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Qa(u,c);const m=[];for(const v of u)m.push(Ya(a,i,v));l={arrayValue:{values:m}}}else l=Ya(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Qa(u,c),l=af(o,r,u,c==="in"||c==="not-in");const p=Q.create(h,c,l);return function(m,v){if(v.S()){const N=No(m);if(N!==null&&!N.isEqual(v.field))throw new y(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${N.toString()}' and '${v.field.toString()}'`);const Z=_o(m);Z!==null&&yf(m,v.field,Z)}const C=function(N,Z){for(const it of N.filters)if(Z.indexOf(it.op)>=0)return it.op;return null}(m,function(N){switch(N){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(C!==null)throw C===v.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${C.toString()}' filters.`)}(i,p),p}(t._query,"where",n,t.firestore._databaseId,this.ac,this.uc,this.cc);return new $e(t.firestore,t.converter,function(i,r){const o=i.filters.concat([r]);return new ke(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(t._query,s))}}function xf(e,t,n){const s=t,i=Ni("where",e);return new mf(i,s,n)}function Ya(e,t,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ko(t)&&n.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(R.fromString(n));if(!E.isDocumentKey(s))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Eo(e,new E(s))}if(n instanceof J)return Eo(e,n._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bn(n)}.`)}function Qa(e,t){if(!Array.isArray(e)||e.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new y(d.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function yf(e,t,n){if(!n.isEqual(t))throw new y(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vf{convertValue(t,n="none"){switch(Dt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Bt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Ai(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=vo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ce(t));default:return null}}convertTimestamp(t){const n=pt(t);return new st(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=R.fromString(t);k(ia(s));const i=new qt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ja(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Of(e){e=mt(e,J);const t=mt(e.firestore,te);return Jd(Si(t),e._key).then(n=>eh(t,e,n))}class Za extends vf{constructor(t){super(),this.firestore=t}convertBytes(t){return new ee(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new J(this.firestore,null,n)}}function Mf(e,t,n){e=mt(e,J);const s=mt(e.firestore,te),i=Ja(e.converter,t,n);return th(s,[qa(Di(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Nt.none())])}function Lf(e,t){const n=mt(e.firestore,te),s=tf(e),i=Ja(e.converter,t);return th(n,[qa(Di(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,Nt.exists(!1))]).then(()=>s)}function Ff(e,...t){var n,s,i;e=vt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ua(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ua(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let h,c,u;if(e instanceof J)c=mt(e.firestore,te),u=Sn(e._key.path),h={next:l=>{t[o]&&t[o](eh(c,e,l))},error:t[o+1],complete:t[o+2]};else{const l=mt(e,$e);c=mt(l.firestore,te),u=l._query;const p=new Za(c);h={next:m=>{t[o]&&t[o](new df(c,p,l,m))},error:t[o+1],complete:t[o+2]},pf(e._query)}return function(l,p,m,v){const C=new xa(v),N=new Sa(p,C,m);return l.asyncQueue.enqueueAndForget(async()=>Ta(await Ti(l),N)),()=>{C.mu(),l.asyncQueue.enqueueAndForget(async()=>Ia(await Ti(l),N))}}(Si(c),u,a,h)}function th(e,t){return function(n,s){const i=new ft;return n.asyncQueue.enqueueAndForget(async()=>Fd(await Qd(n),s,i)),i.promise}(Si(e),t)}function eh(e,t,n){const s=n.docs.get(t._key),i=new Za(e);return new Xa(e,i,t._key,s,new Be(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Ut=n})(hc),ze(new re("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new te(i,new Nu(n.getProvider("auth-internal")),new Ou(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Ot(uo,"3.4.6",e),Ot(uo,"3.4.6","esm2017")})();je(["to{transform:rotate(360deg);}"]);const Vf=je(["from{opacity:0;}to{opacity:1;}"]);je(["from{opacity:0;transform:translateY(-16px);}to{opacity:1;transform:translateX(0);}"]);je(["from{opacity:0;transform:translateX(16px);}to{opacity:1;transform:translateX(0);}"]);const Pf=ih.div.withConfig({componentId:"sc-2hymkp-0"})(["width:100%;margin-left:auto;margin-right:auto;","{max-width:","px;}","{max-width:","px;}","{max-width:","px;}"],Hn.down("sm"),({theme:e})=>e.breakpoints.sm,Hn.only("md"),({theme:e})=>e.breakpoints.md,Hn.up("lg"),({theme:e})=>e.breakpoints.lg),Uf="trivia",$f="trivia",Bf="trivia-qna",jf="trivia-switch";var wf="firebase",Ef="9.6.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(wf,Ef,"app");const Tf=cc({apiKey:"AIzaSyAXyd6wVqjNsavwsdRFc7egB-Cw9zEjb10",authDomain:"wedding-a2cd0.firebaseapp.com",projectId:"wedding-a2cd0",storageBucket:"wedding-a2cd0.appspot.com",messagingSenderId:"587037697531",appId:"1:587037697531:web:7a53f22b3004468c0cd75e"}),qf=nf(Tf);var nh={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s=[],i=0;i<arguments.length;i++){var r=arguments[i];if(!!r){var o=typeof r;if(o==="string"||o==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&s.push(a)}}else if(o==="object")if(r.toString===Object.prototype.toString)for(var h in r)t.call(r,h)&&r[h]&&s.push(h);else s.push(r.toString())}}return s.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(nh);var Hf=nh.exports;export{xf as A,D as B,Pf as C,Cf as D,Li as E,He as F,Of as G,bf as H,Af as I,Bi as L,hc as S,Uf as T,Mf as Y,ze as _,$f as a,qf as b,Hf as c,kf as d,Ff as e,Vf as f,Bf as g,tf as h,jf as i,Rf as j,vt as k,hh as l,uh as m,re as n,uc as o,rc as p,Kn as q,Ot as r,ch as s,Lf as t,st as u,Nf as v,Df as w,_f as x,qe as y,dh as z};
