(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function a(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(l){if(l.ep)return;l.ep=!0;const f=a(l);fetch(l.href,f)}})();const S=h=>{h.el.closest(".block-wrapper").classList.add(h.hide?"hidden":"inline-block"),h.el.closest(".block-wrapper").classList.remove(h.hide?"inline-block":"hidden")},ue=h=>{let u,a,d;for(a=0,d=h.length;a<d;a++)if(u=h.charCodeAt(a),!(u>47&&u<58)&&!(u>64&&u<91)&&!(u>96&&u<123)&&!(u>1039&&u<1104))return!1;return!0};class be{constructor(){this.alphabet={en:{uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",lowercase:"abcdefghijklmnopqrstuvwxyz"},ru:{uppercase:"АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",lowercase:"абвгдеёжзийклмнопрстуфхцчшщъыьэюя"}}}encrypt({text:u,shift:a,language:d="ru"}){let l="";return u.split("").map(f=>{if(ue(f)){let p=this.alphabet[d][f.toUpperCase()===f?"uppercase":"lowercase"],o=(p.length+p.indexOf(f)+a)%p.length;l+=p[o]}else l+=f}),l}decrypt({text:u,shift:a,language:d="ru"}){let l="";return u.split("").map(f=>{if(ue(f)){let p=this.alphabet[d][f.toUpperCase()===f?"uppercase":"lowercase"],o=(p.length+p.indexOf(f)-a)%p.length;l+=p[o]}else l+=f}),l}}class Se{constructor(){this.alphabet={en:{uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",lowercase:"abcdefghijklmnopqrstuvwxyz"},ru:{uppercase:"АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",lowercase:"абвгдеёжзийклмнопрстуфхцчшщъыьэюя"}}}encrypt({text:u,key:a,language:d}){const l=this.alphabet[d].lowercase.split(""),f=u.toLowerCase().split(""),p=a.toLowerCase().split("");let o="";return f.forEach((y,w)=>{if(ue(y)){let x=l.indexOf(y),m=l.indexOf(p[w%a.length]);o+=l[(x+m+1)%l.length]}else o+=y}),o}decrypt({text:u,key:a,language:d}){const l=this.alphabet[d].lowercase.split(""),f=u.toLowerCase().split(""),p=a.toLowerCase().split("");let o="";return f.forEach((y,w)=>{if(ue(y)){let x=l.indexOf(y),m=l.indexOf(p[w%a.length]);o+=l[(l.length+x-m-1)%l.length]}else o+=y}),o}}var J={},le={};le.byteLength=Ke;le.toByteArray=Je;le.fromByteArray=ve;var j=[],O=[],We=typeof Uint8Array<"u"?Uint8Array:Array,de="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var re=0,Ye=de.length;re<Ye;++re)j[re]=de[re],O[de.charCodeAt(re)]=re;O[45]=62;O[95]=63;function Te(h){var u=h.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=h.indexOf("=");a===-1&&(a=u);var d=a===u?0:4-a%4;return[a,d]}function Ke(h){var u=Te(h),a=u[0],d=u[1];return(a+d)*3/4-d}function Xe(h,u,a){return(u+a)*3/4-a}function Je(h){var u,a=Te(h),d=a[0],l=a[1],f=new We(Xe(h,d,l)),p=0,o=l>0?d-4:d,y;for(y=0;y<o;y+=4)u=O[h.charCodeAt(y)]<<18|O[h.charCodeAt(y+1)]<<12|O[h.charCodeAt(y+2)]<<6|O[h.charCodeAt(y+3)],f[p++]=u>>16&255,f[p++]=u>>8&255,f[p++]=u&255;return l===2&&(u=O[h.charCodeAt(y)]<<2|O[h.charCodeAt(y+1)]>>4,f[p++]=u&255),l===1&&(u=O[h.charCodeAt(y)]<<10|O[h.charCodeAt(y+1)]<<4|O[h.charCodeAt(y+2)]>>2,f[p++]=u>>8&255,f[p++]=u&255),f}function Ze(h){return j[h>>18&63]+j[h>>12&63]+j[h>>6&63]+j[h&63]}function Qe(h,u,a){for(var d,l=[],f=u;f<a;f+=3)d=(h[f]<<16&16711680)+(h[f+1]<<8&65280)+(h[f+2]&255),l.push(Ze(d));return l.join("")}function ve(h){for(var u,a=h.length,d=a%3,l=[],f=16383,p=0,o=a-d;p<o;p+=f)l.push(Qe(h,p,p+f>o?o:p+f));return d===1?(u=h[a-1],l.push(j[u>>2]+j[u<<4&63]+"==")):d===2&&(u=(h[a-2]<<8)+h[a-1],l.push(j[u>>10]+j[u>>4&63]+j[u<<2&63]+"=")),l.join("")}var ye={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ye.read=function(h,u,a,d,l){var f,p,o=l*8-d-1,y=(1<<o)-1,w=y>>1,x=-7,m=a?l-1:0,M=a?-1:1,B=h[u+m];for(m+=M,f=B&(1<<-x)-1,B>>=-x,x+=o;x>0;f=f*256+h[u+m],m+=M,x-=8);for(p=f&(1<<-x)-1,f>>=-x,x+=d;x>0;p=p*256+h[u+m],m+=M,x-=8);if(f===0)f=1-w;else{if(f===y)return p?NaN:(B?-1:1)*(1/0);p=p+Math.pow(2,d),f=f-w}return(B?-1:1)*p*Math.pow(2,f-d)};ye.write=function(h,u,a,d,l,f){var p,o,y,w=f*8-l-1,x=(1<<w)-1,m=x>>1,M=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,B=d?0:f-1,L=d?1:-1,N=u<0||u===0&&1/u<0?1:0;for(u=Math.abs(u),isNaN(u)||u===1/0?(o=isNaN(u)?1:0,p=x):(p=Math.floor(Math.log(u)/Math.LN2),u*(y=Math.pow(2,-p))<1&&(p--,y*=2),p+m>=1?u+=M/y:u+=M*Math.pow(2,1-m),u*y>=2&&(p++,y/=2),p+m>=x?(o=0,p=x):p+m>=1?(o=(u*y-1)*Math.pow(2,l),p=p+m):(o=u*Math.pow(2,m-1)*Math.pow(2,l),p=0));l>=8;h[a+B]=o&255,B+=L,o/=256,l-=8);for(p=p<<l|o,w+=l;w>0;h[a+B]=p&255,B+=L,p/=256,w-=8);h[a+B-L]|=N*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(h){const u=le,a=ye,d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;h.Buffer=o,h.SlowBuffer=Z,h.INSPECT_MAX_BYTES=50;const l=2147483647;h.kMaxLength=l,o.TYPED_ARRAY_SUPPORT=f(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function f(){try{const r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function p(r){if(r>l)throw new RangeError('The value "'+r+'" is invalid for option "size"');const e=new Uint8Array(r);return Object.setPrototypeOf(e,o.prototype),e}function o(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(r)}return y(r,e,t)}o.poolSize=8192;function y(r,e,t){if(typeof r=="string")return M(r,e);if(ArrayBuffer.isView(r))return L(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(H(r,ArrayBuffer)||r&&H(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(H(r,SharedArrayBuffer)||r&&H(r.buffer,SharedArrayBuffer)))return N(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return o.from(n,e,t);const i=D(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return o.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o.from=function(r,e,t){return y(r,e,t)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function w(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function x(r,e,t){return w(r),r<=0?p(r):e!==void 0?typeof t=="string"?p(r).fill(e,t):p(r).fill(e):p(r)}o.alloc=function(r,e,t){return x(r,e,t)};function m(r){return w(r),p(r<0?0:E(r)|0)}o.allocUnsafe=function(r){return m(r)},o.allocUnsafeSlow=function(r){return m(r)};function M(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!o.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const t=k(r,e)|0;let n=p(t);const i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),n}function B(r){const e=r.length<0?0:E(r.length)|0,t=p(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}function L(r){if(H(r,Uint8Array)){const e=new Uint8Array(r);return N(e.buffer,e.byteOffset,e.byteLength)}return B(r)}function N(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(n,o.prototype),n}function D(r){if(o.isBuffer(r)){const e=E(r.length)|0,t=p(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||pe(r.length)?p(0):B(r);if(r.type==="Buffer"&&Array.isArray(r.data))return B(r.data)}function E(r){if(r>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return r|0}function Z(r){return+r!=r&&(r=0),o.alloc(+r)}o.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==o.prototype},o.compare=function(e,t){if(H(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),H(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(e)||!o.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let c=0,s=Math.min(n,i);c<s;++c)if(e[c]!==t[c]){n=e[c],i=t[c];break}return n<i?-1:i<n?1:0},o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return o.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=o.allocUnsafe(t);let c=0;for(n=0;n<e.length;++n){let s=e[n];if(H(s,Uint8Array))c+s.length>i.length?(o.isBuffer(s)||(s=o.from(s)),s.copy(i,c)):Uint8Array.prototype.set.call(i,s,c);else if(o.isBuffer(s))s.copy(i,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=s.length}return i};function k(r,e){if(o.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||H(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return fe(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ce(r).length;default:if(i)return n?-1:fe(r).length;e=(""+e).toLowerCase(),i=!0}}o.byteLength=k;function Q(r,e,t){let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Pe(this,e,t);case"utf8":case"utf-8":return v(this,e,t);case"ascii":return De(this,e,t);case"latin1":case"binary":return _e(this,e,t);case"base64":return se(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oe(this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o.prototype._isBuffer=!0;function $(r,e,t){const n=r[e];r[e]=r[t],r[t]=n}o.prototype.swap16=function(){const e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)$(this,t,t+1);return this},o.prototype.swap32=function(){const e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)$(this,t,t+3),$(this,t+1,t+2);return this},o.prototype.swap64=function(){const e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)$(this,t,t+7),$(this,t+1,t+6),$(this,t+2,t+5),$(this,t+3,t+4);return this},o.prototype.toString=function(){const e=this.length;return e===0?"":arguments.length===0?v(this,0,e):Q.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(e){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:o.compare(this,e)===0},o.prototype.inspect=function(){let e="";const t=h.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},d&&(o.prototype[d]=o.prototype.inspect),o.prototype.compare=function(e,t,n,i,c){if(H(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),c===void 0&&(c=this.length),t<0||n>e.length||i<0||c>this.length)throw new RangeError("out of range index");if(i>=c&&t>=n)return 0;if(i>=c)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,c>>>=0,this===e)return 0;let s=c-i,g=n-t;const U=Math.min(s,g),A=this.slice(i,c),C=e.slice(t,n);for(let I=0;I<U;++I)if(A[I]!==C[I]){s=A[I],g=C[I];break}return s<g?-1:g<s?1:0};function V(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,pe(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=o.from(e,n)),o.isBuffer(e))return e.length===0?-1:F(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):F(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}function F(r,e,t,n,i){let c=1,s=r.length,g=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;c=2,s/=2,g/=2,t/=2}function U(C,I){return c===1?C[I]:C.readUInt16BE(I*c)}let A;if(i){let C=-1;for(A=t;A<s;A++)if(U(r,A)===U(e,C===-1?0:A-C)){if(C===-1&&(C=A),A-C+1===g)return C*c}else C!==-1&&(A-=A-C),C=-1}else for(t+g>s&&(t=s-g),A=t;A>=0;A--){let C=!0;for(let I=0;I<g;I++)if(U(r,A+I)!==U(e,I)){C=!1;break}if(C)return A}return-1}o.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},o.prototype.indexOf=function(e,t,n){return V(this,e,t,n,!0)},o.prototype.lastIndexOf=function(e,t,n){return V(this,e,t,n,!1)};function b(r,e,t,n){t=Number(t)||0;const i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;const c=e.length;n>c/2&&(n=c/2);let s;for(s=0;s<n;++s){const g=parseInt(e.substr(s*2,2),16);if(pe(g))return s;r[t+s]=g}return s}function _(r,e,t,n){return oe(fe(e,r.length-t),r,t,n)}function T(r,e,t,n){return oe(je(e),r,t,n)}function K(r,e,t,n){return oe(Ce(e),r,t,n)}function ae(r,e,t,n){return oe(ze(e,r.length-t),r,t,n)}o.prototype.write=function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const c=this.length-t;if((n===void 0||n>c)&&(n=c),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return b(this,e,t,n);case"utf8":case"utf-8":return _(this,e,t,n);case"ascii":case"latin1":case"binary":return T(this,e,t,n);case"base64":return K(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ae(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function se(r,e,t){return e===0&&t===r.length?u.fromByteArray(r):u.fromByteArray(r.slice(e,t))}function v(r,e,t){t=Math.min(r.length,t);const n=[];let i=e;for(;i<t;){const c=r[i];let s=null,g=c>239?4:c>223?3:c>191?2:1;if(i+g<=t){let U,A,C,I;switch(g){case 1:c<128&&(s=c);break;case 2:U=r[i+1],(U&192)===128&&(I=(c&31)<<6|U&63,I>127&&(s=I));break;case 3:U=r[i+1],A=r[i+2],(U&192)===128&&(A&192)===128&&(I=(c&15)<<12|(U&63)<<6|A&63,I>2047&&(I<55296||I>57343)&&(s=I));break;case 4:U=r[i+1],A=r[i+2],C=r[i+3],(U&192)===128&&(A&192)===128&&(C&192)===128&&(I=(c&15)<<18|(U&63)<<12|(A&63)<<6|C&63,I>65535&&I<1114112&&(s=I))}}s===null?(s=65533,g=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|s&1023),n.push(s),i+=g}return Ne(n)}const me=4096;function Ne(r){const e=r.length;if(e<=me)return String.fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=me));return t}function De(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]&127);return n}function _e(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}function Pe(r,e,t){const n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let c=e;c<t;++c)i+=Ve[r[c]];return i}function Oe(r,e,t){const n=r.slice(e,t);let i="";for(let c=0;c<n.length-1;c+=2)i+=String.fromCharCode(n[c]+n[c+1]*256);return i}o.prototype.slice=function(e,t){const n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,o.prototype),i};function R(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let i=this[e],c=1,s=0;for(;++s<t&&(c*=256);)i+=this[e+s]*c;return i},o.prototype.readUintBE=o.prototype.readUIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let i=this[e+--t],c=1;for(;t>0&&(c*=256);)i+=this[e+--t]*c;return i},o.prototype.readUint8=o.prototype.readUInt8=function(e,t){return e=e>>>0,t||R(e,1,this.length),this[e]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||R(e,2,this.length),this[e]|this[e+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||R(e,2,this.length),this[e]<<8|this[e+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||R(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},o.prototype.readBigUInt64LE=Y(function(e){e=e>>>0,te(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const i=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,c=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(c)<<BigInt(32))}),o.prototype.readBigUInt64BE=Y(function(e){e=e>>>0,te(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const i=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],c=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(32))+BigInt(c)}),o.prototype.readIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let i=this[e],c=1,s=0;for(;++s<t&&(c*=256);)i+=this[e+s]*c;return c*=128,i>=c&&(i-=Math.pow(2,8*t)),i},o.prototype.readIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let i=t,c=1,s=this[e+--i];for(;i>0&&(c*=256);)s+=this[e+--i]*c;return c*=128,s>=c&&(s-=Math.pow(2,8*t)),s},o.prototype.readInt8=function(e,t){return e=e>>>0,t||R(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},o.prototype.readInt16LE=function(e,t){e=e>>>0,t||R(e,2,this.length);const n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},o.prototype.readInt16BE=function(e,t){e=e>>>0,t||R(e,2,this.length);const n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},o.prototype.readInt32LE=function(e,t){return e=e>>>0,t||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},o.prototype.readInt32BE=function(e,t){return e=e>>>0,t||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},o.prototype.readBigInt64LE=Y(function(e){e=e>>>0,te(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),o.prototype.readBigInt64BE=Y(function(e){e=e>>>0,te(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)}),o.prototype.readFloatLE=function(e,t){return e=e>>>0,t||R(e,4,this.length),a.read(this,e,!0,23,4)},o.prototype.readFloatBE=function(e,t){return e=e>>>0,t||R(e,4,this.length),a.read(this,e,!1,23,4)},o.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||R(e,8,this.length),a.read(this,e,!0,52,8)},o.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||R(e,8,this.length),a.read(this,e,!1,52,8)};function P(r,e,t,n,i,c){if(!o.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<c)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){const g=Math.pow(2,8*n)-1;P(this,e,t,n,g,0)}let c=1,s=0;for(this[t]=e&255;++s<n&&(c*=256);)this[t+s]=e/c&255;return t+n},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){const g=Math.pow(2,8*n)-1;P(this,e,t,n,g,0)}let c=n-1,s=1;for(this[t+c]=e&255;--c>=0&&(s*=256);)this[t+c]=e/s&255;return t+n},o.prototype.writeUint8=o.prototype.writeUInt8=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,1,255,0),this[t]=e&255,t+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function xe(r,e,t,n,i){Ue(e,n,i,r,t,7);let c=Number(e&BigInt(4294967295));r[t++]=c,c=c>>8,r[t++]=c,c=c>>8,r[t++]=c,c=c>>8,r[t++]=c;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,t}function Be(r,e,t,n,i){Ue(e,n,i,r,t,7);let c=Number(e&BigInt(4294967295));r[t+7]=c,c=c>>8,r[t+6]=c,c=c>>8,r[t+5]=c,c=c>>8,r[t+4]=c;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=s,s=s>>8,r[t+2]=s,s=s>>8,r[t+1]=s,s=s>>8,r[t]=s,t+8}o.prototype.writeBigUInt64LE=Y(function(e,t=0){return xe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=Y(function(e,t=0){return Be(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t=t>>>0,!i){const U=Math.pow(2,8*n-1);P(this,e,t,n,U-1,-U)}let c=0,s=1,g=0;for(this[t]=e&255;++c<n&&(s*=256);)e<0&&g===0&&this[t+c-1]!==0&&(g=1),this[t+c]=(e/s>>0)-g&255;return t+n},o.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t=t>>>0,!i){const U=Math.pow(2,8*n-1);P(this,e,t,n,U-1,-U)}let c=n-1,s=1,g=0;for(this[t+c]=e&255;--c>=0&&(s*=256);)e<0&&g===0&&this[t+c+1]!==0&&(g=1),this[t+c]=(e/s>>0)-g&255;return t+n},o.prototype.writeInt8=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},o.prototype.writeInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},o.prototype.writeInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},o.prototype.writeInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},o.prototype.writeInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},o.prototype.writeBigInt64LE=Y(function(e,t=0){return xe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=Y(function(e,t=0){return Be(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ee(r,e,t,n,i,c){if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ie(r,e,t,n,i){return e=+e,t=t>>>0,i||Ee(r,e,t,4),a.write(r,e,t,n,23,4),t+4}o.prototype.writeFloatLE=function(e,t,n){return Ie(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){return Ie(this,e,t,!1,n)};function Fe(r,e,t,n,i){return e=+e,t=t>>>0,i||Ee(r,e,t,8),a.write(r,e,t,n,52,8),t+8}o.prototype.writeDoubleLE=function(e,t,n){return Fe(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){return Fe(this,e,t,!1,n)},o.prototype.copy=function(e,t,n,i){if(!o.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const c=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),c},o.prototype.fill=function(e,t,n,i){if(typeof e=="string"){if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!o.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){const s=e.charCodeAt(0);(i==="utf8"&&s<128||i==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let c;if(typeof e=="number")for(c=t;c<n;++c)this[c]=e;else{const s=o.isBuffer(e)?e:o.from(e,i),g=s.length;if(g===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<n-t;++c)this[c+t]=s[c%g]}return this};const ee={};function he(r,e,t){ee[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}he("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),he("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError),he("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Ae(String(t)):typeof t=="bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Ae(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Ae(r){let e="",t=r.length;const n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function $e(r,e,t){te(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ie(e,r.length-(t+1))}function Ue(r,e,t,n,i,c){if(r>t||r<e){const s=typeof e=="bigint"?"n":"";let g;throw c>3?e===0||e===BigInt(0)?g=`>= 0${s} and < 2${s} ** ${(c+1)*8}${s}`:g=`>= -(2${s} ** ${(c+1)*8-1}${s}) and < 2 ** ${(c+1)*8-1}${s}`:g=`>= ${e}${s} and <= ${t}${s}`,new ee.ERR_OUT_OF_RANGE("value",g,r)}$e(n,i,c)}function te(r,e){if(typeof r!="number")throw new ee.ERR_INVALID_ARG_TYPE(e,"number",r)}function ie(r,e,t){throw Math.floor(r)!==r?(te(r,t),new ee.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new ee.ERR_BUFFER_OUT_OF_BOUNDS:new ee.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}const qe=/[^+/0-9A-Za-z-_]/g;function He(r){if(r=r.split("=")[0],r=r.trim().replace(qe,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function fe(r,e){e=e||1/0;let t;const n=r.length;let i=null;const c=[];for(let s=0;s<n;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&c.push(239,191,189);continue}else if(s+1===n){(e-=3)>-1&&c.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&c.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&c.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;c.push(t)}else if(t<2048){if((e-=2)<0)break;c.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;c.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;c.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return c}function je(r){const e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function ze(r,e){let t,n,i;const c=[];for(let s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),n=t>>8,i=t%256,c.push(i),c.push(n);return c}function Ce(r){return u.toByteArray(He(r))}function oe(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)e[i+t]=r[i];return i}function H(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function pe(r){return r!==r}const Ve=function(){const r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){const n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();function Y(r){return typeof BigInt>"u"?Ge:r}function Ge(){throw new Error("BigInt not supported")}})(J);class Re{encrypt({text:u,key:a}){const d=J.Buffer.from(u,"utf-8"),l=J.Buffer.from(a,"utf-8"),f=J.Buffer.alloc(d.length);for(let p=0;p<d.length;p++)f[p]=d[p]^l[p%l.length];return f.toString("base64")}decrypt({text:u,key:a}){const d=J.Buffer.from(u,"base64"),l=J.Buffer.from(a,"utf-8"),f=J.Buffer.alloc(d.length);for(let p=0;p<d.length;p++)f[p]=d[p]^l[p%l.length];return f.toString("utf-8")}}class ce{encryptSimple({text:u,key:a}){const d=this.makeMatrix(u,a);let l="";return d.map(f=>{f.map((p,o)=>{l+=f[+a[o]-1]})}),l}encryptHard({text:u,key:a}){const d=a.length,l=Math.ceil(u.length/d),f=[];let p=0;for(let y=0;y<l;y++){f[y]=[];for(let w=0;w<d;w++)p<u.length?f[y][w]=u[p++]:f[y][w]=" "}let o="";return a.split("").forEach(y=>{for(let w=0;w<l;w++)console.log(y),o+=f[w][+y-1]}),o}decryptHard({text:u,key:a}){const d=a.length,l=u.length/d,f=[];let p=0;a.split("").forEach(y=>{for(let w=0;w<l;w++)f[w]||(f[w]=[]),f[w][+y-1]=u[p++]});let o="";for(let y=0;y<l;y++)for(let w=0;w<d;w++)o+=f[y][w];return o.trim()}makeMatrix(u,a){let d=[],l=0;for(let f=0;f<Math.ceil(u.length/a.length);f++){let p=[];for(let o=0;o<a.length;o++){let y=l<u.length?u[l]:" ";p.push(y),l++}d.push(p)}return d}}class et{async encrypt({text:u,key:a}){const d=new TextEncoder().encode(u),l=await crypto.subtle.importKey("raw",new TextEncoder().encode(a),{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),f=await crypto.subtle.sign("HMAC",l,d);return Array.from(new Uint8Array(f)).map(o=>o.toString(16).padStart(2,"0")).join("")}}const tt=3,rt=1,nt=16;function it(h){return h+1}function ot(h,u){return new Array(u*3).fill(255)}function ut(h,u,a){for(let d=0;d<16;d++)if(h[u+d*4]!==255)return!1;return!0}const z={t:tt,threshold:rt,codeUnitSize:nt,args:it,messageDelimiter:ot,messageCompleted:ut};function Me(h){if(isNaN(h)||!isFinite(h)||h%1||h<2)return!1;if(h%2===0)return h===2;if(h%3===0)return h===3;const u=Math.sqrt(h);for(let a=5;a<=u;a+=6)if(h%a===0||h%(a+2)===0)return!1;return!0}function ct(h){for(let u=h;;u+=1)if(Me(u))return u}function lt(h,u,a){let d=0;for(let l=a.start||0;l<u;l+=a.inc||1)d+=h(l)||0;return d===0&&a.defValue?a.defValue:d}function at(h,u,a){let d=1;for(let l=a.start||0;l<u;l+=a.inc||1)d*=h(l)||1;return d===1&&a.defValue?a.defValue:d}function st(h,u,a){let d=new Array(a-1);for(let l=0;l<a;l+=1)d[l]=h(l>=u?l+1:l);return d}async function ht(h){return new Promise((u,a)=>{let d=new Image;d.src=h,d.onload=()=>u(d),d.onerror=l=>a(l)})}const ne={isPrime:Me,findNextPrime:ct,sum:lt,product:at,createArrayFromArgs:st,loadImg:ht};async function ft(h,u,a={}){const d=await((F,b)=>{if(typeof F=="string")return ne.loadImg(F);if(F instanceof HTMLImageElement)return ne.loadImg(F.src);throw new Error("IllegalInput: The input image is neither an URL string nor an image.")})(u),l=a.t||z.t,f=a.threshold||z.threshold,p=a.codeUnitSize||z.codeUnitSize,o=ne.findNextPrime(Math.pow(2,l)),y=a.args||z.args,w=a.messageDelimiter||z.messageDelimiter;if(!l||l<1||l>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');const x=document.createElement("canvas"),m=x.getContext("2d");if(m===null)throw new Error("NullContext: Context is null");x.style.display="none",x.width=a.width||d.width,x.height=a.height||d.height,a.height&&a.width?m.drawImage(d,0,0,a.width,a.height):m.drawImage(d,0,0);const M=m.getImageData(0,0,x.width,x.height),B=M.data,L=p/l>>0,N=p%l,D=[];let E,Z=0;for(let F=0;F<=h.length;F++){const b=h.charCodeAt(F)||0,_=N*F%l;if(_>0&&Z){let T=Math.pow(2,l-_)-1;const K=Math.pow(2,p)*(1-Math.pow(2,-_)),ae=(b&T)<<_,se=(Z&K)>>p-_;if(D.push(ae+se),F<h.length){T=Math.pow(2,2*l-_)*(1-Math.pow(2,-l));for(let v=1;v<L;v++)E=b&T,D.push(E>>(v-1)*l+(l-_)),T<<=l;N*(F+1)%l===0?(T=Math.pow(2,p)*(1-Math.pow(2,-l)),E=b&T,D.push(E>>p-l)):N*(F+1)%l+(l-_)<=l&&(E=b&T,D.push(E>>(L-1)*l+(l-_)))}}else if(F<h.length){let T=Math.pow(2,l)-1;for(let K=0;K<L;K++)E=b&T,D.push(E>>K*l),T<<=l}Z=b}let k,Q=0;const $=w(D,f);for(k=0;(k+f)*4<=B.length&&k+f<=D.length;k+=f){let F=[];for(let b=0;b<f&&b+k<D.length;b++){let _=0;for(let T=k;T<f+k&&T<D.length;T++)_+=D[T]*Math.pow(y(b),T-k);F[b]=255-o+1+_%o}for(let b=k*4;b<(k+F.length)*4&&b<B.length;b+=4)B[b+3]=F[b/4%f];Q=F.length}let V;for(V=k+Q;V-(k+Q)<$.length&&(k+$.length)*4<B.length;V++)B[V*4+3]=$[V-(k+Q)];for(let F=(V+1)*4+3;F<B.length;F+=4)B[F]=255;return m.putImageData(new ImageData(B,M.width,M.height),0,0),x.toDataURL()}async function pt(h,u={}){const a=await((E,Z)=>{if(typeof E=="string")return ne.loadImg(E);if(E instanceof HTMLImageElement)return ne.loadImg(E.src);throw new Error("IllegalInput: The input image is neither an URL string nor an image.")})(h),d=u.t||z.t,l=u.threshold||z.threshold,f=u.codeUnitSize||z.codeUnitSize,p=ne.findNextPrime(Math.pow(2,d));u.args||z.args;const o=u.messageCompleted||z.messageCompleted;if(!d||d<1||d>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');const y=document.createElement("canvas"),w=y.getContext("2d");if(w===null)throw new Error("NullContext: Context is null");y.style.display="none",y.width=u.width||a.width,y.height=u.width||a.height,u.height&&u.width?w.drawImage(a,0,0,u.width,u.height):w.drawImage(a,0,0);const m=w.getImageData(0,0,y.width,y.height).data,M=[];if(l===1)for(let E=3;E<m.length&&!o(m,E,l);E+=4)M.push(m[E]-(255-p+1));let B="",L=0,N=0,D=Math.pow(2,f)-1;for(let E=0;E<M.length;E++)L+=M[E]<<N,N+=d,N>=f&&(B+=String.fromCharCode(L&D),N%=f,L=M[E]>>d-N);return L!==0&&(B+=String.fromCharCode(L&D)),B}class ke{async hideMessage(u,a){try{return console.log("Сообщение успешно скрыто в изображении."),await ft(a,u)}catch(d){return console.error("Ошибка:",d),null}}async extractMessage(u){try{return await pt(u)}catch(a){return console.error("Ошибка:",a),null}}}console.log("App connected...");const Le=document.querySelector("#text"),q=document.querySelector("#result"),we=document.querySelector("#cypher"),G=document.querySelector("#key"),W=document.querySelector("#shift"),X=document.querySelector('[name="language"]'),dt=document.querySelector("#action-btn-encrypt"),yt=document.querySelector("#action-btn-encrypt-img"),wt=document.querySelector("#action-btn-decrypt"),gt=document.querySelector("#action-btn-decrypt-img");dt.onclick=async()=>{const h=G.value,u=Le.value,a=document.querySelector('[name="language"]:checked').value;switch(parseInt(we.value)){case 1:const d=+W.value,l=new be;q.value=l.encrypt({text:u,shift:d,language:a});break;case 2:const f=new Se;q.value=f.encrypt({text:u,key:h,language:a});break;case 3:const p=new Re;q.value=p.encrypt({text:u,key:h});break;case 4:const o=new ce;q.value=o.encryptSimple({text:u,key:h});break;case 5:const y=new ce;q.value=y.encryptHard({text:u,key:h});break;case 6:const w=new et;q.value=await w.encrypt({text:u,key:h});break}};wt.onclick=()=>{const h=G.value,u=Le.value,a=document.querySelector('[name="language"]:checked').value;switch(parseInt(we.value)){case 1:const d=+W.value,l=new be;q.value=l.decrypt({text:u,shift:d,language:a});break;case 2:const f=new Se;q.value=f.decrypt({text:u,key:h,language:a});break;case 3:const p=new Re;q.value=p.decrypt({text:u,key:h});break;case 4:const o=new ce;q.value=o.encryptSimple({text:u,key:h});break;case 5:const y=new ce;q.value=y.decryptHard({text:u,key:h});break}};we.onchange=h=>{switch(parseInt(h.target.value)){case 1:S({el:G,hide:!0}),S({el:W,hide:!1}),S({el:X,hide:!1});break;case 2:S({el:G,hide:!1}),S({el:W,hide:!0}),S({el:X,hide:!1});break;case 3:S({el:G,hide:!1}),S({el:W,hide:!0}),S({el:X,hide:!0});break;case 4:S({el:G,hide:!1}),S({el:W,hide:!0}),S({el:X,hide:!0});break;case 5:S({el:G,hide:!1}),S({el:W,hide:!0}),S({el:X,hide:!0});break;case 6:S({el:G,hide:!1}),S({el:W,hide:!0}),S({el:X,hide:!0});break;default:S({el:G,hide:!0}),S({el:W,hide:!0}),S({el:X,hide:!0});break}};const mt=document.getElementById("image"),xt=document.getElementById("output-img"),ge=document.getElementById("input-img");mt.addEventListener("change",function(h){let u=new FileReader;u.onload=a=>{ge.setAttribute("src",a.target.result)},u.readAsDataURL(h.target.files[0])});yt.onclick=()=>{new ke().hideMessage(ge.getAttribute("src"),document.getElementById("text-steg").value).then(u=>{u?xt.src=u:console.log("Произошла ошибка")})};gt.onclick=()=>{new ke().extractMessage(ge.getAttribute("src")).then(u=>{u?document.getElementById("text-steg").value=u:console.log("Произошла ошибка")})};
