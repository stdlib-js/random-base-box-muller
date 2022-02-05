!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).randn=t()}(this,(function(){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,y=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),v&&u&&u.call(r,t,n.set),r},v=e,s=y,p=(l=n()?v:s,l);var d=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=d,h=l;var g=function(r,t,n){h(r,t,{configurable:!1,enumerable:!1,get:n})},m=g,w=l;var A=function(r,t,n,e){w(r,t,{configurable:!1,enumerable:!1,get:n,set:e})},E=A;var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return j&&"symbol"==typeof Symbol.toStringTag},N=Object.prototype.toString,_=N;var I=function(r){return _.call(r)},T=Object.prototype.hasOwnProperty;var U=function(r,t){return null!=r&&T.call(r,t)},M="function"==typeof Symbol?Symbol.toStringTag:"",P=U,L=M,S=N;var F=I,x=function(r){var t,n,e;if(null==r)return S.call(r);n=r[L],t=P(r,L);try{r[L]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[L]=n:delete r[L],e},R=O()?x:F,B=R;var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===B(r)},C=G;var V=function(r){return"object"==typeof r&&null!==r&&!C(r)},q=/./;var Y=function(r){return"boolean"==typeof r},k=Boolean.prototype.toString;var H=R,X=function(r){try{return k.call(r),!0}catch(r){return!1}},J=O();var W=function(r){return"object"==typeof r&&(r instanceof Boolean||(J?X(r):"[object Boolean]"===H(r)))},z=Y,D=W;var K=b,Q=function(r){return z(r)||D(r)},Z=W;K(Q,"isPrimitive",Y),K(Q,"isObject",Z);var $=Q;var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr=$.isPrimitive,er=function(){return new Function("return this;")()},or=rr,ir=tr,ar="object"==typeof r?r:null;var ur=function(r){if(arguments.length){if(!nr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return er()}if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")},fr=ur(),cr=fr.document&&fr.document.childNodes,lr=Int8Array,yr=q,vr=cr,sr=lr;var pr=function(){return"function"==typeof yr||"object"==typeof sr||"function"==typeof vr};var dr=function(){return/^\s*function\s*([^(]*)/i},br=dr;b(br,"REGEXP",dr());var hr=br,gr=G;var mr=function(r){return null!==r&&"object"==typeof r};b(mr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!gr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(mr));var wr=mr;var Ar=R,Er=hr.REGEXP,jr=function(r){return wr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Or=function(r){var t,n,e;if(("Object"===(n=Ar(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Er.exec(e.toString()))return t[1]}return jr(r)?"Buffer":n},Nr=Or,_r=Nr;var Ir=function(r){var t;return null===r?"null":"object"===(t=typeof r)?_r(r).toLowerCase():t},Tr=Nr;var Ur=Ir,Mr=function(r){return Tr(r).toLowerCase()},Pr=pr()?Mr:Ur;var Lr=function(r){return"function"===Pr(r)},Sr=Object.getPrototypeOf;var Fr=function(r){return r.__proto__},xr=R,Rr=Fr;var Br=function(r){var t=Rr(r);return t||null===t?t:"[object Function]"===xr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Gr=Sr,Cr=Br,Vr=Lr(Object.getPrototypeOf)?Gr:Cr;var qr=function(r){return null==r?null:(r=Object(r),Vr(r))},Yr=V,kr=Lr,Hr=qr,Xr=U,Jr=R,Wr=Object.prototype;var zr=function(r){var t;return!!Yr(r)&&(!(t=Hr(r))||!Xr(r,"constructor")&&Xr(t,"constructor")&&kr(t.constructor)&&"[object Function]"===Jr(t.constructor)&&Xr(t,"isPrototypeOf")&&kr(t.isPrototypeOf)&&(t===Wr||function(r){var t;for(t in r)if(!Xr(r,t))return!1;return!0}(r)))},Dr=zr,Kr=R,Qr="function"==typeof Uint32Array;var Zr=function(r){return Qr&&r instanceof Uint32Array||"[object Uint32Array]"===Kr(r)},$r=Math.floor,rt=$r;var tt=function(r){return rt(r)===r},nt=tt;var et=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&nt(r.length)&&r.length>=0&&r.length<=9007199254740991};var ot=function(r){return"number"==typeof r},it=Number,at=it.prototype.toString;var ut=R,ft=it,ct=function(r){try{return at.call(r),!0}catch(r){return!1}},lt=O();var yt=function(r){return"object"==typeof r&&(r instanceof ft||(lt?ct(r):"[object Number]"===ut(r)))},vt=ot,st=yt;var pt=b,dt=function(r){return vt(r)||st(r)},bt=yt;pt(dt,"isPrimitive",ot),pt(dt,"isObject",bt);var ht=dt,gt=Number.POSITIVE_INFINITY,mt=it.NEGATIVE_INFINITY,wt=gt,At=mt,Et=tt;var jt=function(r){return r<wt&&r>At&&Et(r)},Ot=ht.isPrimitive,Nt=jt;var _t=function(r){return Ot(r)&&Nt(r)},It=ht.isObject,Tt=jt;var Ut=function(r){return It(r)&&Tt(r.valueOf())},Mt=_t,Pt=Ut;var Lt=b,St=function(r){return Mt(r)||Pt(r)},Ft=Ut;Lt(St,"isPrimitive",_t),Lt(St,"isObject",Ft);var xt=St.isPrimitive;var Rt=function(r){return xt(r)&&r>0},Bt=St.isObject;var Gt=function(r){return Bt(r)&&r.valueOf()>0},Ct=Rt,Vt=Gt;var qt=b,Yt=function(r){return Ct(r)||Vt(r)},kt=Gt;qt(Yt,"isPrimitive",Rt),qt(Yt,"isObject",kt);var Ht=Yt,Xt=4294967295,Jt="function"==typeof Uint32Array?Uint32Array:null,Wt=Zr,zt=Jt;var Dt=function(){var r,t;if("function"!=typeof zt)return!1;try{t=new zt(t=[1,3.14,-3.14,4294967296,4294967297]),r=Wt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Kt="function"==typeof Uint32Array?Uint32Array:void 0,Qt=function(){throw new Error("not implemented")},Zt=Dt()?Kt:Qt,$t=gt;var rn=function(r){return r!=r},tn=function(r){return 0===r&&1/r===$t},nn=rn,en=mt,on=gt;var an=function(r,t){var n,e,o,i;if(2===(n=arguments.length))return nn(r)||nn(t)?NaN:r===on||t===on?on:r===t&&0===r?tn(r)?r:t:r>t?r:t;for(e=en,i=0;i<n;i++){if(nn(o=arguments[i])||o===on)return o;(o>e||o===e&&0===o&&tn(o))&&(e=o)}return e},un=an;var fn=function(r,t){var n,e;return((n=(65535&(r>>>=0))>>>0)*(e=(65535&(t>>>=0))>>>0)>>>0)+((r>>>16>>>0)*e+n*(t>>>16>>>0)<<16>>>0)>>>0};var cn=function(r,t,n,e,o){var i,a,u,f;if(r<=0)return e;if(1===n&&1===o){if((u=r%8)>0)for(f=0;f<u;f++)e[f]=t[f];if(r<8)return e;for(f=u;f<r;f+=8)e[f]=t[f],e[f+1]=t[f+1],e[f+2]=t[f+2],e[f+3]=t[f+3],e[f+4]=t[f+4],e[f+5]=t[f+5],e[f+6]=t[f+6],e[f+7]=t[f+7];return e}for(i=n<0?(1-r)*n:0,a=o<0?(1-r)*o:0,f=0;f<r;f++)e[a]=t[i],i+=n,a+=o;return e};var ln=function(r,t,n,e,o,i,a){var u,f,c,l;if(r<=0)return o;if(u=e,f=a,1===n&&1===i){if((c=r%8)>0)for(l=0;l<c;l++)o[f]=t[u],u+=n,f+=i;if(r<8)return o;for(l=c;l<r;l+=8)o[f]=t[u],o[f+1]=t[u+1],o[f+2]=t[u+2],o[f+3]=t[u+3],o[f+4]=t[u+4],o[f+5]=t[u+5],o[f+6]=t[u+6],o[f+7]=t[u+7],u+=8,f+=8;return o}for(l=0;l<r;l++)o[f]=t[u],u+=n,f+=i;return o},yn=cn;b(yn,"ndarray",ln);var vn=yn;var sn=function(){};var pn=Lr,dn=hr.REGEXP,bn=function(){return"foo"===sn.name}();var hn=function(r){if(!1===pn(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return bn?r.name:dn.exec(r.toString())[1]},gn=hn,mn=R,wn="function"==typeof Float64Array;var An="function"==typeof Float64Array?Float64Array:null,En=function(r){return wn&&r instanceof Float64Array||"[object Float64Array]"===mn(r)},jn=An;var On=function(){var r,t;if("function"!=typeof jn)return!1;try{t=new jn([1,3.14,-3.14,NaN]),r=En(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r},Nn=On;var _n="function"==typeof Float64Array?Float64Array:void 0,In=function(){throw new Error("not implemented")},Tn=Nn()?_n:In,Un=R,Mn="function"==typeof Int8Array;var Pn="function"==typeof Int8Array?Int8Array:null,Ln=function(r){return Mn&&r instanceof Int8Array||"[object Int8Array]"===Un(r)},Sn=Pn;var Fn=function(){var r,t;if("function"!=typeof Sn)return!1;try{t=new Sn([1,3.14,-3.14,128]),r=Ln(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r};var xn="function"==typeof Int8Array?Int8Array:void 0,Rn=function(){throw new Error("not implemented")},Bn=Fn()?xn:Rn,Gn=R,Cn="function"==typeof Uint8Array;var Vn="function"==typeof Uint8Array?Uint8Array:null,qn=function(r){return Cn&&r instanceof Uint8Array||"[object Uint8Array]"===Gn(r)},Yn=Vn;var kn=function(){var r,t;if("function"!=typeof Yn)return!1;try{t=new Yn(t=[1,3.14,-3.14,256,257]),r=qn(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Hn="function"==typeof Uint8Array?Uint8Array:void 0,Xn=function(){throw new Error("not implemented")},Jn=kn()?Hn:Xn,Wn=R,zn="function"==typeof Uint8ClampedArray;var Dn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Kn=function(r){return zn&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Wn(r)},Qn=Dn;var Zn=function(){var r,t;if("function"!=typeof Qn)return!1;try{t=new Qn([-1,0,1,3.14,4.99,255,256]),r=Kn(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r};var $n="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,re=function(){throw new Error("not implemented")},te=Zn()?$n:re,ne=R,ee="function"==typeof Int16Array;var oe="function"==typeof Int16Array?Int16Array:null,ie=function(r){return ee&&r instanceof Int16Array||"[object Int16Array]"===ne(r)},ae=oe;var ue=function(){var r,t;if("function"!=typeof ae)return!1;try{t=new ae([1,3.14,-3.14,32768]),r=ie(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r};var fe="function"==typeof Int16Array?Int16Array:void 0,ce=function(){throw new Error("not implemented")},le=ue()?fe:ce,ye=R,ve="function"==typeof Uint16Array;var se="function"==typeof Uint16Array?Uint16Array:null,pe=function(r){return ve&&r instanceof Uint16Array||"[object Uint16Array]"===ye(r)},de=se;var be=function(){var r,t;if("function"!=typeof de)return!1;try{t=new de(t=[1,3.14,-3.14,65536,65537]),r=pe(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var he="function"==typeof Uint16Array?Uint16Array:void 0,ge=function(){throw new Error("not implemented")},me=be()?he:ge,we=R,Ae="function"==typeof Int32Array;var Ee="function"==typeof Int32Array?Int32Array:null,je=function(r){return Ae&&r instanceof Int32Array||"[object Int32Array]"===we(r)},Oe=Ee;var Ne=function(){var r,t;if("function"!=typeof Oe)return!1;try{t=new Oe([1,3.14,-3.14,2147483648]),r=je(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r};var _e="function"==typeof Int32Array?Int32Array:void 0,Ie=function(){throw new Error("not implemented")},Te=Ne()?_e:Ie,Ue=R,Me="function"==typeof Float32Array;var Pe="function"==typeof Float32Array?Float32Array:null,Le=function(r){return Me&&r instanceof Float32Array||"[object Float32Array]"===Ue(r)},Se=gt,Fe=Pe;var xe=function(){var r,t;if("function"!=typeof Fe)return!1;try{t=new Fe([1,3.14,-3.14,5e40]),r=Le(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Se}catch(t){r=!1}return r};var Re="function"==typeof Float32Array?Float32Array:void 0,Be=function(){throw new Error("not implemented")},Ge=xe()?Re:Be,Ce=Nr,Ve=gn,qe=qr,Ye=Tn,ke=[Tn,Ge,Te,Zt,le,me,Bn,Jn,te],He=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Xe=Nn()?qe(Ye):Je;function Je(){}Xe="TypedArray"===Ve(Xe)?Xe:Je;var We=function(r,t){if("function"!=typeof t)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+t+"`.");return r instanceof t},ze=Nr,De=qr,Ke=[[Tn,"Float64Array"],[Ge,"Float32Array"],[Te,"Int32Array"],[Zt,"Uint32Array"],[le,"Int16Array"],[me,"Uint16Array"],[Bn,"Int8Array"],[Jn,"Uint8Array"],[te,"Uint8ClampedArray"]];var Qe=function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof Xe)return!0;for(n=0;n<ke.length;n++)if(r instanceof ke[n])return!0;for(;r;){for(t=Ce(r),n=0;n<He.length;n++)if(He[n]===t)return!0;r=qe(r)}return!1},Ze=function(r){var t,n;for(n=0;n<Ke.length;n++)if(We(r,Ke[n][0]))return Ke[n][1];for(;r;){for(t=ze(r),n=0;n<Ke.length;n++)if(t===Ke[n][1])return Ke[n][1];r=De(r)}};var $e=function(r){var t,n;if(!Qe(r))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for((t={}).type=Ze(r),t.data=[],n=0;n<r.length;n++)t.data.push(r[n]);return t},ro=$r;var to=function(){return ro(1+4294967294*Math.random())>>>0},no=b,eo=m,oo=E,io=U,ao=Dr,uo=et,fo=Zr,co=$.isPrimitive,lo=Ht.isPrimitive,yo=Xt,vo=Zt,so=un,po=fn,bo=vn,ho=$e,go=to,mo=624,wo=4294967295,Ao=19650218,Eo=2147483648,jo=2147483647,Oo=2636928640,No=4022730752,_o=[0,2567483615],Io=1/9007199254740992,To=67108864,Uo=.9999999999999999,Mo=630;function Po(r,t){var n;return n=t?"option":"argument",r.length<631?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==r[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+r[0]+"."):3!==r[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+r[1]+"."):r[2]!==mo?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+mo+". Actual: "+r[2]+"."):1!==r[627]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+r[627]+"."):r[629]!==r.length-Mo?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Mo)+". Actual: "+r[629]+"."):null}function Lo(r,t,n){var e;for(r[0]=n>>>0,e=1;e<t;e++)n=((n=r[e-1]>>>0)^n>>>30)>>>0,r[e]=po(n,1812433253)+e>>>0;return r}function So(r,t,n,e){var o,i,a,u;for(i=1,a=0,u=so(t,e);u>0;u--)o=r[i-1]>>>0,o=po(o=(o^o>>>30)>>>0,1664525)>>>0,r[i]=(r[i]>>>0^o)+n[a]+a>>>0,a+=1,(i+=1)>=t&&(r[0]=r[t-1],i=1),a>=e&&(a=0);for(u=t-1;u>0;u--)o=r[i-1]>>>0,o=po(o=(o^o>>>30)>>>0,1566083941)>>>0,r[i]=(r[i]>>>0^o)-i>>>0,(i+=1)>=t&&(r[0]=r[t-1],i=1);return r[0]=2147483648,r}function Fo(r){var t,n;for(227,n=0;n<227;n++)t=r[n]&Eo|r[n+1]&jo,r[n]=r[n+397]^t>>>1^_o[1&t];for(623;n<623;n++)t=r[n]&Eo|r[n+1]&jo,r[n]=r[n-227]^t>>>1^_o[1&t];return t=r[623]&Eo|r[0]&jo,r[623]=r[396]^t>>>1^_o[1&t],r}var xo=function(r){var t,n,e,o,i,a;if(e={},arguments.length){if(!ao(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(io(r,"copy")&&(e.copy=r.copy,!co(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(io(r,"state")){if(n=r.state,e.state=!0,!fo(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(a=Po(n,!0))throw a;!1===e.copy?t=n:(t=new vo(n.length),bo(n.length,n,1,t,1)),n=new vo(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,mo),o=new vo(t.buffer,t.byteOffset+630*t.BYTES_PER_ELEMENT,n[629])}if(void 0===o)if(io(r,"seed"))if(o=r.seed,e.seed=!0,lo(o)){if(o>wo)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===uo(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!lo(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>wo)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(t=new vo(Mo+i))[0]=1,t[1]=3,t[2]=mo,t[627]=1,t[628]=mo,t[629]=i,bo.ndarray(i,o,1,0,t,1,630),n=new vo(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,mo),o=new vo(t.buffer,t.byteOffset+630*t.BYTES_PER_ELEMENT,i),n=So(n=Lo(n,mo,Ao),mo,o,i)}else o=go()>>>0}else o=go()>>>0;return void 0===n&&((t=new vo(631))[0]=1,t[1]=3,t[2]=mo,t[627]=1,t[628]=mo,t[629]=1,t[630]=o,n=new vo(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,mo),o=new vo(t.buffer,t.byteOffset+630*t.BYTES_PER_ELEMENT,1),n=Lo(n,mo,o)),no(p,"NAME","mt19937"),eo(p,"seed",u),eo(p,"seedLength",f),oo(p,"state",y,v),eo(p,"stateLength",c),eo(p,"byteLength",l),no(p,"toJSON",s),no(p,"MIN",1),no(p,"MAX",yo),no(p,"normalized",d),no(d,"NAME",p.NAME),eo(d,"seed",u),eo(d,"seedLength",f),oo(d,"state",y,v),eo(d,"stateLength",c),eo(d,"byteLength",l),no(d,"toJSON",s),no(d,"MIN",0),no(d,"MAX",Uo),p;function u(){var r=t[629];return bo(r,o,1,new vo(r),1)}function f(){return t[629]}function c(){return t.length}function l(){return t.byteLength}function y(){var r=t.length;return bo(r,t,1,new vo(r),1)}function v(r){var i;if(!fo(r))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+r+"`.");if(i=Po(r,!1))throw i;!1===e.copy?e.state&&r.length===t.length?bo(r.length,r,1,t,1):(t=r,e.state=!0):(r.length!==t.length&&(t=new vo(r.length)),bo(r.length,r,1,t,1)),n=new vo(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,mo),o=new vo(t.buffer,t.byteOffset+630*t.BYTES_PER_ELEMENT,t[629])}function s(){var r={type:"PRNG"};return r.name=p.NAME,r.state=ho(t),r.params=[],r}function p(){var r,e;return(e=t[628])>=mo&&(n=Fo(n),e=0),r=n[e],t[628]=e+1,r^=r>>>11,r^=r<<7&Oo,r^=r<<15&No,(r^=r>>>18)>>>0}function d(){var r=p()>>>5,t=p()>>>6;return(r*To+t)*Io}},Ro=xo({seed:to()});b(Ro,"factory",xo);var Bo=Ro;var Go=function(r){return function(){return r}};var Co,Vo=function(){},qo=Math.sqrt,Yo={uint16:me,uint8:Jn};(Co=new Yo.uint16(1))[0]=4660;var ko=52===new Yo.uint8(Co.buffer)[0],Ho=Zt,Xo=!0===ko?1:0,Jo=new Tn(1),Wo=new Ho(Jo.buffer);var zo=function(r){return Jo[0]=r,Wo[Xo]},Do=Zt,Ko=!0===ko?1:0,Qo=new Tn(1),Zo=new Do(Qo.buffer);var $o=function(r,t){return Qo[0]=r,Zo[Ko]=t>>>0,Qo[0]};var ri=zo,ti=$o,ni=rn,ei=mt,oi=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ii=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},ai=.6931471803691238,ui=1.9082149292705877e-10,fi=1048575;var ci=function(r){var t,n,e,o,i,a,u,f,c,l,y;return 0===r?ei:ni(r)||r<0?NaN:(o=0,(n=ri(r))<1048576&&(o-=54,n=ri(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(u=(n&=fi)+614244&1048576|0)>>20|0,a=(r=ti(r,n|1072693248^u))-1,(fi&2+n)<3?0===a?0===o?0:o*ai+o*ui:(i=a*a*(.5-.3333333333333333*a),0===o?a-i:o*ai-(i-o*ui-a)):(u=n-398458|0,f=440401-n|0,e=(l=(y=(c=a/(2+a))*c)*y)*oi(l),i=y*ii(l)+e,(u|=f)>0?(t=.5*a*a,0===o?a-(t-c*(t+i)):o*ai-(t-(c*(t+i)+o*ui)-a)):0===o?a-c*(a-i):o*ai-(c*(a-i)-o*ui-a))))},li=ci;var yi=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},vi=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var si=function(r,t){var n,e,o,i;return o=(i=r*r)*i,e=i*yi(i),e+=o*o*vi(i),(o=1-(n=.5*i))+(1-o-n+(i*e-r*t))},pi=-.16666666666666632;var di=function(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(pi+o*n):r-(o*(.5*t-e*n)-t-e*pi)},bi=Zt,hi=!0===ko?0:1,gi=new Tn(1),mi=new bi(gi.buffer);var wi,Ai,Ei=function(r){return gi[0]=r,mi[hi]};!0===ko?(wi=1,Ai=0):(wi=0,Ai=1);var ji=Zt,Oi={HIGH:wi,LOW:Ai},Ni=new Tn(1),_i=new ji(Ni.buffer),Ii=Oi.HIGH,Ti=Oi.LOW;var Ui=function(r,t){return _i[Ii]=r,_i[Ti]=t,Ni[0]},Mi=Ui,Pi=gt,Li=mt;var Si,Fi,xi=function(r){return r===Pi||r===Li};!0===ko?(Si=1,Fi=0):(Si=0,Fi=1);var Ri=Zt,Bi={HIGH:Si,LOW:Fi},Gi=new Tn(1),Ci=new Ri(Gi.buffer),Vi=Bi.HIGH,qi=Bi.LOW;var Yi=function(r,t){return Gi[0]=t,r[0]=Ci[Vi],r[1]=Ci[qi],r};var ki=function(r,t){return 1===arguments.length?Yi([0,0],r):Yi(r,t)},Hi=ki,Xi=zo,Ji=Mi,Wi=[0,0];var zi=xi,Di=rn,Ki=function(r){return Math.abs(r)};var Qi=function(r,t){return Di(t)||zi(t)?(r[0]=t,r[1]=0,r):0!==t&&Ki(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Zi=function(r,t){return 1===arguments.length?Qi([0,0],r):Qi(r,t)},$i=zo;var ra=function(r){var t=$i(r);return(t=(2146435072&t)>>>20)-1023|0},ta=gt,na=mt,ea=rn,oa=xi,ia=function(r,t){var n,e;return Hi(Wi,r),n=Wi[0],n&=2147483647,e=Xi(t),Ji(n|=e&=2147483648,Wi[1])},aa=Zi,ua=ra,fa=ki,ca=Mi,la=[0,0],ya=[0,0];var va=function(r,t){var n,e;return 0===r||ea(r)||oa(r)?r:(aa(la,r),t+=la[1],(t+=ua(r=la[0]))<-1074?ia(0,r):t>1023?r<0?na:ta:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,fa(ya,r),n=ya[0],n&=2148532223,e*ca(n|=t+1023<<20,ya[1])))},sa=$r,pa=va,da=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ba=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ha=16777216,ga=5.960464477539063e-8,ma=ja(20),wa=ja(20),Aa=ja(20),Ea=ja(20);function ja(r){var t,n;for(t=[],n=0;n<r;n++)t.push(0);return t}function Oa(r,t,n,e,o,i,a,u,f){var c,l,y,v,s,p,d,b,h;for(v=i,h=e[n],b=n,s=0;b>0;s++)l=ga*h|0,Ea[s]=h-ha*l|0,h=e[b-1]+l,b-=1;if(h=pa(h,o),h-=8*sa(.125*h),h-=d=0|h,y=0,o>0?(d+=s=Ea[n-1]>>24-o,Ea[n-1]-=s<<24-o,y=Ea[n-1]>>23-o):0===o?y=Ea[n-1]>>23:h>=.5&&(y=2),y>0){for(d+=1,c=0,s=0;s<n;s++)b=Ea[s],0===c?0!==b&&(c=1,Ea[s]=16777216-b):Ea[s]=16777215-b;if(o>0)switch(o){case 1:Ea[n-1]&=8388607;break;case 2:Ea[n-1]&=4194303}2===y&&(h=1-h,0!==c&&(h-=pa(1,o)))}if(0===h){for(b=0,s=n-1;s>=i;s--)b|=Ea[s];if(0===b){for(p=1;0===Ea[i-p];p++);for(s=n+1;s<=n+p;s++){for(f[u+s]=da[a+s],l=0,b=0;b<=u;b++)l+=r[b]*f[u+(s-b)];e[s]=l}return Oa(r,t,n+=p,e,o,i,a,u,f)}}if(0===h)for(n-=1,o-=24;0===Ea[n];)n-=1,o-=24;else(h=pa(h,-o))>=ha?(l=ga*h|0,Ea[n]=h-ha*l|0,o+=24,Ea[n+=1]=l):Ea[n]=0|h;for(l=pa(1,o),s=n;s>=0;s--)e[s]=l*Ea[s],l*=ga;for(s=n;s>=0;s--){for(l=0,p=0;p<=v&&p<=n-s;p++)l+=ba[p]*e[s+p];Aa[n-s]=l}for(l=0,s=n;s>=0;s--)l+=Aa[s];for(t[0]=0===y?l:-l,l=Aa[0]-l,s=1;s<=n;s++)l+=Aa[s];return t[1]=0===y?l:-l,7&d}var Na=function(r,t,n,e){var o,i,a,u,f,c,l;for(4,(i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),c=i-(a=e-1),l=a+4,f=0;f<=l;f++)ma[f]=c<0?0:da[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*ma[a+(f-c)];wa[f]=o}return 4,Oa(r,t,4,wa,u,4,i,a,ma)},_a=Math.round,Ia=zo;var Ta=zo,Ua=Ei,Ma=Mi,Pa=Na,La=function(r,t,n){var e,o,i,a,u;return i=r-1.5707963267341256*(e=_a(.6366197723675814*r)),a=6077100506506192e-26*e,u=t>>20|0,n[0]=i-a,u-(Ia(n[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),n[0]=i-a,u-(Ia(n[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),n[0]=i-a)),n[1]=i-n[0]-a,e},Sa=1.5707963267341256,Fa=6077100506506192e-26,xa=2*Fa,Ra=3*Fa,Ba=4*Fa,Ga=[0,0,0],Ca=[0,0];var Va=function(r,t){var n,e,o,i,a,u,f;if((o=2147483647&Ta(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?La(r,o,t):o<=1073928572?r>0?(f=r-Sa,t[0]=f-Fa,t[1]=f-t[0]-Fa,1):(f=r+Sa,t[0]=f+Fa,t[1]=f-t[0]+Fa,-1):r>0?(f=r-2*Sa,t[0]=f-xa,t[1]=f-t[0]-xa,2):(f=r+2*Sa,t[0]=f+xa,t[1]=f-t[0]+xa,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?La(r,o,t):r>0?(f=r-3*Sa,t[0]=f-Ra,t[1]=f-t[0]-Ra,3):(f=r+3*Sa,t[0]=f+Ra,t[1]=f-t[0]+Ra,-3):1075388923===o?La(r,o,t):r>0?(f=r-4*Sa,t[0]=f-Ba,t[1]=f-t[0]-Ba,4):(f=r+4*Sa,t[0]=f+Ba,t[1]=f-t[0]+Ba,-4);if(o<1094263291)return La(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Ua(r),f=Ma(o-((e=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)Ga[a]=0|f,f=16777216*(f-Ga[a]);for(Ga[2]=f,i=3;0===Ga[i-1];)i-=1;return u=Pa(Ga,Ca,e,i),r<0?(t[0]=-Ca[0],t[1]=-Ca[1],-u):(t[0]=Ca[0],t[1]=Ca[1],u)},qa=zo,Ya=si,ka=di,Ha=Va,Xa=[0,0];var Ja=zo,Wa=si,za=di,Da=Va,Ka=[0,0];var Qa=function(r){var t;if(t=Ja(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Wa(r,0);if(t>=2146435072)return NaN;switch(3&Da(r,Ka)){case 0:return Wa(Ka[0],Ka[1]);case 1:return-za(Ka[0],Ka[1]);case 2:return-Wa(Ka[0],Ka[1]);default:return za(Ka[0],Ka[1])}},Za=qo,$a=li,ru=function(r){var t;if(t=qa(r),(t&=2147483647)<=1072243195)return t<1045430272?r:ka(r,0);if(t>=2146435072)return NaN;switch(3&Ha(r,Xa)){case 0:return ka(Xa[0],Xa[1]);case 1:return Ya(Xa[0],Xa[1]);case 2:return-ka(Xa[0],Xa[1]);default:return-Ya(Xa[0],Xa[1])}},tu=Qa;var nu=function(r){var t,n;return t=!0,function(){var e,o,i,a;if(t){do{e=r(),o=r()}while(0===e);return i=Za(-2*$a(e)),n=i*tu(a=6.283185307179586*o),t=!1,i*ru(a)}return t=!0,n}},eu=qo,ou=li,iu=Qa(3.141592653589793);var au=function(r){return eu(-2*ou(r))*iu},uu=qo,fu=li,cu=Qa;var lu=function(r){return uu(-2*fu(r))*cu(6.283185307179586*r)},yu=b,vu=m,su=E,pu=Dr,du=Lr,bu=$.isPrimitive,hu=U,gu=Zr,mu=Bo.factory,wu=Go,Au=Vo,Eu=$e,ju=nu,Ou=au,Nu=lu;var _u=function(r){var t,n,e,o;if(o={copy:!0},arguments.length){if(!pu(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(hu(r,"copy")&&(o.copy=r.copy,!bu(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(hu(r,"prng")){if(!du(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");t=r.prng}else if(hu(r,"state")){if(o.state=r.state,!gu(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(hu(r,"seed")&&(o.seed=r.seed,void 0===r.seed))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return void 0===o.state?void 0===t?t=(e=mu(o)).normalized:o.seed=null:t=(e=mu(o)).normalized,n=ju(t),yu(n,"NAME","box-muller"),null===o.seed?(yu(n,"seed",null),yu(n,"seedLength",null)):(vu(n,"seed",i),vu(n,"seedLength",a)),r&&r.prng?(su(n,"state",wu(null),Au),yu(n,"stateLength",null),yu(n,"byteLength",null),yu(n,"toJSON",wu(null))):(su(n,"state",c,l),vu(n,"stateLength",u),vu(n,"byteLength",f),yu(n,"toJSON",y)),yu(n,"PRNG",t),hu(t,"MIN")?(yu(n,"MIN",Ou(t.MIN)),yu(n,"MAX",Nu(t.MIN))):(yu(n,"MIN",null),yu(n,"MAX",null)),n;function i(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(r){e.state=r}function y(){var r={type:"PRNG"};return r.name=n.NAME,r.state=Eu(e.state),r.params=[],r}},Iu=_u();return b(Iu,"factory",_u),Iu}));
//# sourceMappingURL=bundle.js.map