"use strict";var j=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var h=j(function(I,c){"use strict";var f=require("@stdlib/utils-define-nonenumerable-read-only-property"),T=require("@stdlib/assert-is-plain-object"),x=require("@stdlib/assert-is-boolean").isPrimitive,F=require("@stdlib/assert-is-ndarray-like"),P=require("@stdlib/ndarray-base-assert-is-read-only"),S=require("@stdlib/assert-has-own-property"),p=require("@stdlib/symbol-iterator"),C=require("@stdlib/array-base-zeros"),L=require("@stdlib/ndarray-shape"),R=require("@stdlib/ndarray-base-numel"),V=require("@stdlib/ndarray-base-slice"),k=require("@stdlib/ndarray-base-next-cartesian-index").assign,z=require("@stdlib/slice-base-args2multislice"),y=require("@stdlib/string-format");function q(i){var r,a,n,t,u,v,e,o,w,s,d;if(!F(i))throw new TypeError(y("invalid argument. First argument must be an ndarray. Value: `%s`.",i));if(t={writable:!1},arguments.length>1){if(r=arguments[1],!T(r))throw new TypeError(y("invalid argument. Options argument must be an object. Value: `%s`.",r));if(S(r,"readonly")){if(!x(r.readonly))throw new TypeError(y("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",r.readonly));if(t.writable=!r.readonly,t.writable&&P(i))throw new Error("invalid option. Cannot write to read-only array.")}}if(a=L(i),n=a.length,n<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return s=R(a),s===0&&(v=!0),s/=a[n-1]*a[n-2],o=n-3,w=a[o],d=-1,e=C(n),e[n-1]=null,e[n-2]=null,u={},f(u,"next",b),f(u,"return",E),p&&f(u,p,O),u;function b(){var l,g,m;return d+=1,v||d>=s?{done:!0}:(l=e.slice(),g=z(e),m=(e[o]+1)%w,e[o]=m,m===0&&(e=k(a,"row-major",e,o-1,e)),{value:[l,V(i,g,!0,t.writable)],done:!1})}function E(l){return v=!0,arguments.length?{value:l,done:!0}:{done:!0}}function O(){return q(i,t)}}c.exports=q});var B=h();module.exports=B;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
