var xh=Object.defineProperty;var Ye=(e,n)=>{for(var r in n)xh(e,r,{get:n[r],enumerable:!0})};function It(e,n,r){return Math.max(n,Math.min(e,r))}function et(e,n,r,o){return{x:Math.max(0,Math.min(e,Math.max(0,window.innerWidth-r))),y:Math.max(0,Math.min(n,Math.max(0,window.innerHeight-o)))}}var m={};Ye(m,{$brand:()=>Xi,$input:()=>hl,$output:()=>vl,NEVER:()=>Gi,TimePrecision:()=>$l,ZodAny:()=>uu,ZodArray:()=>fu,ZodBase64:()=>Xo,ZodBase64URL:()=>Qo,ZodBigInt:()=>xn,ZodBigIntFormat:()=>ei,ZodBoolean:()=>yn,ZodCIDRv4:()=>Bo,ZodCIDRv6:()=>Go,ZodCUID:()=>Zo,ZodCUID2:()=>Fo,ZodCatch:()=>ju,ZodCodec:()=>lr,ZodCustom:()=>cr,ZodCustomStringFormat:()=>hn,ZodDate:()=>rr,ZodDefault:()=>Pu,ZodDiscriminatedUnion:()=>vu,ZodE164:()=>Ko,ZodEmail:()=>Mo,ZodEmoji:()=>No,ZodEnum:()=>gn,ZodError:()=>Qy,ZodExactOptional:()=>Tu,ZodFile:()=>Eu,ZodFirstPartyTypeKind:()=>Gu,ZodFunction:()=>qu,ZodGUID:()=>Kn,ZodIPv4:()=>qo,ZodIPv6:()=>Vo,ZodISODate:()=>Ao,ZodISODateTime:()=>Lo,ZodISODuration:()=>Ro,ZodISOTime:()=>Do,ZodIntersection:()=>hu,ZodIssueCode:()=>Yy,ZodJWT:()=>Yo,ZodKSUID:()=>Wo,ZodLazy:()=>Hu,ZodLiteral:()=>ku,ZodMAC:()=>ru,ZodMap:()=>_u,ZodNaN:()=>Mu,ZodNanoID:()=>Co,ZodNever:()=>pu,ZodNonOptional:()=>ai,ZodNull:()=>lu,ZodNullable:()=>zu,ZodNumber:()=>bn,ZodNumberFormat:()=>Ut,ZodObject:()=>ir,ZodOptional:()=>ii,ZodPipe:()=>sr,ZodPrefault:()=>Au,ZodPreprocess:()=>Nu,ZodPromise:()=>Wu,ZodReadonly:()=>Cu,ZodRealError:()=>xe,ZodRecord:()=>fn,ZodSet:()=>Su,ZodString:()=>vn,ZodStringFormat:()=>B,ZodSuccess:()=>Ou,ZodSymbol:()=>au,ZodTemplateLiteral:()=>Fu,ZodTransform:()=>wu,ZodTuple:()=>yu,ZodType:()=>M,ZodULID:()=>Ho,ZodURL:()=>nr,ZodUUID:()=>He,ZodUndefined:()=>su,ZodUnion:()=>ar,ZodUnknown:()=>du,ZodVoid:()=>mu,ZodXID:()=>Jo,ZodXor:()=>gu,_ZodString:()=>Uo,_default:()=>Lu,_function:()=>Rf,any:()=>df,array:()=>or,base64:()=>Vm,base64url:()=>Bm,bigint:()=>af,boolean:()=>iu,catch:()=>Uu,check:()=>Of,cidrv4:()=>Wm,cidrv6:()=>qm,clone:()=>pe,codec:()=>Pf,coerce:()=>Xu,config:()=>ee,core:()=>rt,cuid:()=>Um,cuid2:()=>Mm,custom:()=>jf,date:()=>mf,decode:()=>Xc,decodeAsync:()=>Kc,describe:()=>Uf,discriminatedUnion:()=>yf,e164:()=>Gm,email:()=>Tm,emoji:()=>Om,encode:()=>Gc,encodeAsync:()=>Qc,endsWith:()=>rn,enum:()=>ri,exactOptional:()=>Iu,file:()=>wf,flattenError:()=>Mn,float32:()=>tf,float64:()=>nf,formatError:()=>Nn,fromJSONSchema:()=>Jf,function:()=>Rf,getErrorMap:()=>tx,globalRegistry:()=>se,gt:()=>Ze,gte:()=>fe,guid:()=>Im,hash:()=>ef,hex:()=>Ym,hostname:()=>Km,httpUrl:()=>Rm,includes:()=>tn,instanceof:()=>Nf,int:()=>Oo,int32:()=>rf,int64:()=>sf,intersection:()=>bu,invertCodec:()=>Lf,ipv4:()=>Fm,ipv6:()=>Jm,iso:()=>mn,json:()=>Zf,jwt:()=>Xm,keyof:()=>ff,ksuid:()=>Zm,lazy:()=>Ju,length:()=>Ot,literal:()=>Ef,locales:()=>Vn,looseObject:()=>hf,looseRecord:()=>$f,lowercase:()=>Yt,lt:()=>Ce,lte:()=>we,mac:()=>Hm,map:()=>_f,maxLength:()=>Rt,maxSize:()=>yt,meta:()=>Mf,mime:()=>on,minLength:()=>nt,minSize:()=>Fe,multipleOf:()=>bt,nan:()=>zf,nanoid:()=>jm,nativeEnum:()=>kf,negative:()=>$o,never:()=>ti,nonnegative:()=>So,nonoptional:()=>Ru,nonpositive:()=>_o,normalize:()=>an,null:()=>cu,nullable:()=>er,nullish:()=>Tf,number:()=>ou,object:()=>gf,optional:()=>Yn,overwrite:()=>Oe,parse:()=>Wc,parseAsync:()=>qc,partialRecord:()=>xf,pipe:()=>jo,positive:()=>xo,prefault:()=>Du,preprocess:()=>Ff,prettifyError:()=>ca,promise:()=>Df,property:()=>ko,readonly:()=>Zu,record:()=>$u,refine:()=>Vu,regex:()=>Kt,regexes:()=>Ee,registry:()=>Kr,safeDecode:()=>eu,safeDecodeAsync:()=>nu,safeEncode:()=>Yc,safeEncodeAsync:()=>tu,safeParse:()=>Vc,safeParseAsync:()=>Bc,set:()=>Sf,setErrorMap:()=>ex,size:()=>Dt,slugify:()=>un,startsWith:()=>nn,strictObject:()=>vf,string:()=>Qn,stringFormat:()=>Qm,stringbool:()=>Cf,success:()=>If,superRefine:()=>Bu,symbol:()=>cf,templateLiteral:()=>Af,toJSONSchema:()=>Io,toLowerCase:()=>ln,toUpperCase:()=>cn,transform:()=>oi,treeifyError:()=>la,trim:()=>sn,tuple:()=>xu,uint32:()=>of,uint64:()=>lf,ulid:()=>Nm,undefined:()=>uf,union:()=>ni,unknown:()=>jt,uppercase:()=>en,url:()=>Dm,util:()=>E,uuid:()=>zm,uuidv4:()=>Pm,uuidv6:()=>Lm,uuidv7:()=>Am,void:()=>pf,xid:()=>Cm,xor:()=>bf});var rt={};Ye(rt,{$ZodAny:()=>Ms,$ZodArray:()=>Hs,$ZodAsyncError:()=>Re,$ZodBase64:()=>Is,$ZodBase64URL:()=>zs,$ZodBigInt:()=>Jr,$ZodBigIntFormat:()=>Rs,$ZodBoolean:()=>Hn,$ZodCIDRv4:()=>Es,$ZodCIDRv6:()=>ws,$ZodCUID:()=>ms,$ZodCUID2:()=>fs,$ZodCatch:()=>sl,$ZodCheck:()=>G,$ZodCheckBigIntFormat:()=>Ha,$ZodCheckEndsWith:()=>ts,$ZodCheckGreaterThan:()=>Mr,$ZodCheckIncludes:()=>Ya,$ZodCheckLengthEquals:()=>Ga,$ZodCheckLessThan:()=>Ur,$ZodCheckLowerCase:()=>Qa,$ZodCheckMaxLength:()=>Va,$ZodCheckMaxSize:()=>Ja,$ZodCheckMimeType:()=>rs,$ZodCheckMinLength:()=>Ba,$ZodCheckMinSize:()=>Wa,$ZodCheckMultipleOf:()=>Za,$ZodCheckNumberFormat:()=>Fa,$ZodCheckOverwrite:()=>os,$ZodCheckProperty:()=>ns,$ZodCheckRegex:()=>Xa,$ZodCheckSizeEquals:()=>qa,$ZodCheckStartsWith:()=>es,$ZodCheckStringFormat:()=>Xt,$ZodCheckUpperCase:()=>Ka,$ZodCodec:()=>Wn,$ZodCustom:()=>gl,$ZodCustomStringFormat:()=>As,$ZodDate:()=>Fs,$ZodDefault:()=>rl,$ZodDiscriminatedUnion:()=>qs,$ZodE164:()=>Ps,$ZodEmail:()=>cs,$ZodEmoji:()=>ds,$ZodEncodeError:()=>mt,$ZodEnum:()=>Qs,$ZodError:()=>Un,$ZodExactOptional:()=>tl,$ZodFile:()=>Ys,$ZodFunction:()=>pl,$ZodGUID:()=>ss,$ZodIPv4:()=>_s,$ZodIPv6:()=>Ss,$ZodISODate:()=>ys,$ZodISODateTime:()=>bs,$ZodISODuration:()=>$s,$ZodISOTime:()=>xs,$ZodIntersection:()=>Vs,$ZodJWT:()=>Ls,$ZodKSUID:()=>hs,$ZodLazy:()=>fl,$ZodLiteral:()=>Ks,$ZodMAC:()=>ks,$ZodMap:()=>Gs,$ZodNaN:()=>ll,$ZodNanoID:()=>ps,$ZodNever:()=>Cs,$ZodNonOptional:()=>il,$ZodNull:()=>Us,$ZodNullable:()=>nl,$ZodNumber:()=>Hr,$ZodNumberFormat:()=>Ds,$ZodObject:()=>_p,$ZodObjectJIT:()=>Js,$ZodOptional:()=>qr,$ZodPipe:()=>Vr,$ZodPrefault:()=>ol,$ZodPreprocess:()=>cl,$ZodPromise:()=>ml,$ZodReadonly:()=>ul,$ZodRealError:()=>ye,$ZodRecord:()=>Bs,$ZodRegistry:()=>Qr,$ZodSet:()=>Xs,$ZodString:()=>At,$ZodStringFormat:()=>V,$ZodSuccess:()=>al,$ZodSymbol:()=>Os,$ZodTemplateLiteral:()=>dl,$ZodTransform:()=>el,$ZodTuple:()=>Wr,$ZodType:()=>O,$ZodULID:()=>gs,$ZodURL:()=>us,$ZodUUID:()=>ls,$ZodUndefined:()=>js,$ZodUnion:()=>Jn,$ZodUnknown:()=>Ns,$ZodVoid:()=>Zs,$ZodXID:()=>vs,$ZodXor:()=>Ws,$brand:()=>Xi,$constructor:()=>h,$input:()=>hl,$output:()=>vl,Doc:()=>Fn,JSONSchema:()=>km,JSONSchemaGenerator:()=>zo,NEVER:()=>Gi,TimePrecision:()=>$l,_any:()=>Fl,_array:()=>Gl,_base64:()=>vo,_base64url:()=>ho,_bigint:()=>Ol,_boolean:()=>Dl,_catch:()=>Hy,_check:()=>Sm,_cidrv4:()=>fo,_cidrv6:()=>go,_coercedBigint:()=>jl,_coercedBoolean:()=>Rl,_coercedDate:()=>Vl,_coercedNumber:()=>Tl,_coercedString:()=>yl,_cuid:()=>ao,_cuid2:()=>so,_custom:()=>Ql,_date:()=>ql,_decode:()=>Ir,_decodeAsync:()=>Pr,_default:()=>Cy,_discriminatedUnion:()=>Iy,_e164:()=>bo,_email:()=>Yr,_emoji:()=>oo,_encode:()=>Tr,_encodeAsync:()=>zr,_endsWith:()=>rn,_enum:()=>Ry,_file:()=>Xl,_float32:()=>zl,_float64:()=>Pl,_gt:()=>Ze,_gte:()=>fe,_guid:()=>Bn,_includes:()=>tn,_int:()=>Il,_int32:()=>Ll,_int64:()=>Ul,_intersection:()=>zy,_ipv4:()=>po,_ipv6:()=>mo,_isoDate:()=>Sl,_isoDateTime:()=>_l,_isoDuration:()=>El,_isoTime:()=>kl,_jwt:()=>yo,_ksuid:()=>uo,_lazy:()=>Vy,_length:()=>Ot,_literal:()=>jy,_lowercase:()=>Yt,_lt:()=>Ce,_lte:()=>we,_mac:()=>xl,_map:()=>Ay,_max:()=>we,_maxLength:()=>Rt,_maxSize:()=>yt,_mime:()=>on,_min:()=>fe,_minLength:()=>nt,_minSize:()=>Fe,_multipleOf:()=>bt,_nan:()=>Bl,_nanoid:()=>io,_nativeEnum:()=>Oy,_negative:()=>$o,_never:()=>Jl,_nonnegative:()=>So,_nonoptional:()=>Zy,_nonpositive:()=>_o,_normalize:()=>an,_null:()=>Zl,_nullable:()=>Ny,_number:()=>wl,_optional:()=>My,_overwrite:()=>Oe,_parse:()=>qt,_parseAsync:()=>Vt,_pipe:()=>Jy,_positive:()=>xo,_promise:()=>By,_property:()=>ko,_readonly:()=>Wy,_record:()=>Ly,_refine:()=>Kl,_regex:()=>Kt,_safeDecode:()=>Ar,_safeDecodeAsync:()=>Rr,_safeEncode:()=>Lr,_safeEncodeAsync:()=>Dr,_safeParse:()=>Bt,_safeParseAsync:()=>Gt,_set:()=>Dy,_size:()=>Dt,_slugify:()=>un,_startsWith:()=>nn,_string:()=>bl,_stringFormat:()=>dn,_stringbool:()=>nc,_success:()=>Fy,_superRefine:()=>Yl,_symbol:()=>Nl,_templateLiteral:()=>qy,_toLowerCase:()=>ln,_toUpperCase:()=>cn,_transform:()=>Uy,_trim:()=>sn,_tuple:()=>Py,_uint32:()=>Al,_uint64:()=>Ml,_ulid:()=>lo,_undefined:()=>Cl,_union:()=>wy,_unknown:()=>Hl,_uppercase:()=>en,_url:()=>Gn,_uuid:()=>eo,_uuidv4:()=>to,_uuidv6:()=>no,_uuidv7:()=>ro,_void:()=>Wl,_xid:()=>co,_xor:()=>Ty,clone:()=>pe,config:()=>ee,createStandardJSONSchemaMethod:()=>pn,createToJSONSchemaMethod:()=>rc,decode:()=>Bh,decodeAsync:()=>Xh,describe:()=>ec,encode:()=>Vh,encodeAsync:()=>Gh,extractDefs:()=>$t,finalize:()=>_t,flattenError:()=>Mn,formatError:()=>Nn,globalConfig:()=>zt,globalRegistry:()=>se,initializeContext:()=>xt,isValidBase64:()=>Ts,isValidBase64URL:()=>bp,isValidJWT:()=>yp,locales:()=>Vn,meta:()=>tc,parse:()=>Er,parseAsync:()=>wr,prettifyError:()=>ca,process:()=>J,regexes:()=>Ee,registry:()=>Kr,safeDecode:()=>Kh,safeDecodeAsync:()=>eb,safeEncode:()=>Qh,safeEncodeAsync:()=>Yh,safeParse:()=>ua,safeParseAsync:()=>da,toDotPath:()=>Qd,toJSONSchema:()=>Io,treeifyError:()=>la,util:()=>E,version:()=>is});var qd,Gi=Object.freeze({status:"aborted"});function h(e,n,r){function o(s,l){if(s._zod||Object.defineProperty(s,"_zod",{value:{def:l,constr:a,traits:new Set},enumerable:!1}),s._zod.traits.has(e))return;s._zod.traits.add(e),n(s,l);let c=a.prototype,d=Object.keys(c);for(let u=0;u<d.length;u++){let f=d[u];f in s||(s[f]=c[f].bind(s))}}let t=r?.Parent??Object;class i extends t{}Object.defineProperty(i,"name",{value:e});function a(s){var l;let c=r?.Parent?new i:this;o(c,s),(l=c._zod).deferred??(l.deferred=[]);for(let d of c._zod.deferred)d();return c}return Object.defineProperty(a,"init",{value:o}),Object.defineProperty(a,Symbol.hasInstance,{value:s=>r?.Parent&&s instanceof r.Parent?!0:s?._zod?.traits?.has(e)}),Object.defineProperty(a,"name",{value:e}),a}var Xi=Symbol("zod_brand"),Re=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},mt=class extends Error{constructor(n){super(`Encountered unidirectional transform during encode: ${n}`),this.name="ZodEncodeError"}};(qd=globalThis).__zod_globalConfig??(qd.__zod_globalConfig={});var zt=globalThis.__zod_globalConfig;function ee(e){return e&&Object.assign(zt,e),zt}var E={};Ye(E,{BIGINT_FORMAT_RANGES:()=>aa,Class:()=>Ki,NUMBER_FORMAT_RANGES:()=>ia,aborted:()=>ht,allowsEval:()=>ta,assert:()=>Eh,assertEqual:()=>$h,assertIs:()=>Sh,assertNever:()=>kh,assertNotEqual:()=>_h,assignProp:()=>gt,base64ToUint8Array:()=>Bd,base64urlToUint8Array:()=>Fh,cached:()=>Jt,captureStackTrace:()=>kr,cleanEnum:()=>Zh,cleanRegex:()=>Dn,clone:()=>pe,cloneDef:()=>Th,createTransparentProxy:()=>Dh,defineLazy:()=>C,esc:()=>Sr,escapeRegex:()=>ze,explicitlyAborted:()=>sa,extend:()=>jh,finalizeIssue:()=>me,floatSafeRemainder:()=>Yi,getElementAtPath:()=>Ih,getEnumValues:()=>An,getLengthableOrigin:()=>jn,getParsedType:()=>Ah,getSizableOrigin:()=>On,hexToUint8Array:()=>Jh,isObject:()=>Pt,isPlainObject:()=>vt,issue:()=>Wt,joinValues:()=>y,jsonStringifyReplacer:()=>Ht,merge:()=>Mh,mergeDefs:()=>tt,normalizeParams:()=>T,nullish:()=>ft,numKeys:()=>Lh,objectClone:()=>wh,omit:()=>Oh,optionalKeys:()=>oa,parsedType:()=>k,partial:()=>Nh,pick:()=>Rh,prefixIssues:()=>be,primitiveTypes:()=>ra,promiseAllObject:()=>zh,propertyKeyTypes:()=>Rn,randomString:()=>Ph,required:()=>Ch,safeExtend:()=>Uh,shallowClone:()=>na,slugify:()=>ea,stringifyPrimitive:()=>S,uint8ArrayToBase64:()=>Gd,uint8ArrayToBase64url:()=>Hh,uint8ArrayToHex:()=>Wh,unwrapMessage:()=>Ln});function $h(e){return e}function _h(e){return e}function Sh(e){}function kh(e){throw new Error("Unexpected value in exhaustive check")}function Eh(e){}function An(e){let n=Object.values(e).filter(o=>typeof o=="number");return Object.entries(e).filter(([o,t])=>n.indexOf(+o)===-1).map(([o,t])=>t)}function y(e,n="|"){return e.map(r=>S(r)).join(n)}function Ht(e,n){return typeof n=="bigint"?n.toString():n}function Jt(e){return{get value(){{let r=e();return Object.defineProperty(this,"value",{value:r}),r}throw new Error("cached value already set")}}}function ft(e){return e==null}function Dn(e){let n=e.startsWith("^")?1:0,r=e.endsWith("$")?e.length-1:e.length;return e.slice(n,r)}function Yi(e,n){let r=e/n,o=Math.round(r),t=Number.EPSILON*Math.max(Math.abs(r),1);return Math.abs(r-o)<t?0:r-o}var Vd=Symbol("evaluating");function C(e,n,r){let o;Object.defineProperty(e,n,{get(){if(o!==Vd)return o===void 0&&(o=Vd,o=r()),o},set(t){Object.defineProperty(e,n,{value:t})},configurable:!0})}function wh(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function gt(e,n,r){Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!0,configurable:!0})}function tt(...e){let n={};for(let r of e){let o=Object.getOwnPropertyDescriptors(r);Object.assign(n,o)}return Object.defineProperties({},n)}function Th(e){return tt(e._zod.def)}function Ih(e,n){return n?n.reduce((r,o)=>r?.[o],e):e}function zh(e){let n=Object.keys(e),r=n.map(o=>e[o]);return Promise.all(r).then(o=>{let t={};for(let i=0;i<n.length;i++)t[n[i]]=o[i];return t})}function Ph(e=10){let n="abcdefghijklmnopqrstuvwxyz",r="";for(let o=0;o<e;o++)r+=n[Math.floor(Math.random()*n.length)];return r}function Sr(e){return JSON.stringify(e)}function ea(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var kr="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function Pt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var ta=Jt(()=>{if(zt.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let e=Function;return new e(""),!0}catch{return!1}});function vt(e){if(Pt(e)===!1)return!1;let n=e.constructor;if(n===void 0||typeof n!="function")return!0;let r=n.prototype;return!(Pt(r)===!1||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)}function na(e){return vt(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}function Lh(e){let n=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&n++;return n}var Ah=e=>{let n=typeof e;switch(n){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(e)?"array":e===null?"null":e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?"promise":typeof Map<"u"&&e instanceof Map?"map":typeof Set<"u"&&e instanceof Set?"set":typeof Date<"u"&&e instanceof Date?"date":typeof File<"u"&&e instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${n}`)}},Rn=new Set(["string","number","symbol"]),ra=new Set(["string","number","bigint","boolean","symbol","undefined"]);function ze(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pe(e,n,r){let o=new e._zod.constr(n??e._zod.def);return(!n||r?.parent)&&(o._zod.parent=e),o}function T(e){let n=e;if(!n)return{};if(typeof n=="string")return{error:()=>n};if(n?.message!==void 0){if(n?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");n.error=n.message}return delete n.message,typeof n.error=="string"?{...n,error:()=>n.error}:n}function Dh(e){let n;return new Proxy({},{get(r,o,t){return n??(n=e()),Reflect.get(n,o,t)},set(r,o,t,i){return n??(n=e()),Reflect.set(n,o,t,i)},has(r,o){return n??(n=e()),Reflect.has(n,o)},deleteProperty(r,o){return n??(n=e()),Reflect.deleteProperty(n,o)},ownKeys(r){return n??(n=e()),Reflect.ownKeys(n)},getOwnPropertyDescriptor(r,o){return n??(n=e()),Reflect.getOwnPropertyDescriptor(n,o)},defineProperty(r,o,t){return n??(n=e()),Reflect.defineProperty(n,o,t)}})}function S(e){return typeof e=="bigint"?e.toString()+"n":typeof e=="string"?`"${e}"`:`${e}`}function oa(e){return Object.keys(e).filter(n=>e[n]._zod.optin==="optional"&&e[n]._zod.optout==="optional")}var ia={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},aa={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function Rh(e,n){let r=e._zod.def,o=r.checks;if(o&&o.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");let i=tt(e._zod.def,{get shape(){let a={};for(let s in n){if(!(s in r.shape))throw new Error(`Unrecognized key: "${s}"`);n[s]&&(a[s]=r.shape[s])}return gt(this,"shape",a),a},checks:[]});return pe(e,i)}function Oh(e,n){let r=e._zod.def,o=r.checks;if(o&&o.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");let i=tt(e._zod.def,{get shape(){let a={...e._zod.def.shape};for(let s in n){if(!(s in r.shape))throw new Error(`Unrecognized key: "${s}"`);n[s]&&delete a[s]}return gt(this,"shape",a),a},checks:[]});return pe(e,i)}function jh(e,n){if(!vt(n))throw new Error("Invalid input to extend: expected a plain object");let r=e._zod.def.checks;if(r&&r.length>0){let i=e._zod.def.shape;for(let a in n)if(Object.getOwnPropertyDescriptor(i,a)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let t=tt(e._zod.def,{get shape(){let i={...e._zod.def.shape,...n};return gt(this,"shape",i),i}});return pe(e,t)}function Uh(e,n){if(!vt(n))throw new Error("Invalid input to safeExtend: expected a plain object");let r=tt(e._zod.def,{get shape(){let o={...e._zod.def.shape,...n};return gt(this,"shape",o),o}});return pe(e,r)}function Mh(e,n){if(e._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let r=tt(e._zod.def,{get shape(){let o={...e._zod.def.shape,...n._zod.def.shape};return gt(this,"shape",o),o},get catchall(){return n._zod.def.catchall},checks:n._zod.def.checks??[]});return pe(e,r)}function Nh(e,n,r){let t=n._zod.def.checks;if(t&&t.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");let a=tt(n._zod.def,{get shape(){let s=n._zod.def.shape,l={...s};if(r)for(let c in r){if(!(c in s))throw new Error(`Unrecognized key: "${c}"`);r[c]&&(l[c]=e?new e({type:"optional",innerType:s[c]}):s[c])}else for(let c in s)l[c]=e?new e({type:"optional",innerType:s[c]}):s[c];return gt(this,"shape",l),l},checks:[]});return pe(n,a)}function Ch(e,n,r){let o=tt(n._zod.def,{get shape(){let t=n._zod.def.shape,i={...t};if(r)for(let a in r){if(!(a in i))throw new Error(`Unrecognized key: "${a}"`);r[a]&&(i[a]=new e({type:"nonoptional",innerType:t[a]}))}else for(let a in t)i[a]=new e({type:"nonoptional",innerType:t[a]});return gt(this,"shape",i),i}});return pe(n,o)}function ht(e,n=0){if(e.aborted===!0)return!0;for(let r=n;r<e.issues.length;r++)if(e.issues[r]?.continue!==!0)return!0;return!1}function sa(e,n=0){if(e.aborted===!0)return!0;for(let r=n;r<e.issues.length;r++)if(e.issues[r]?.continue===!1)return!0;return!1}function be(e,n){return n.map(r=>{var o;return(o=r).path??(o.path=[]),r.path.unshift(e),r})}function Ln(e){return typeof e=="string"?e:e?.message}function me(e,n,r){let o=e.message?e.message:Ln(e.inst?._zod.def?.error?.(e))??Ln(n?.error?.(e))??Ln(r.customError?.(e))??Ln(r.localeError?.(e))??"Invalid input",{inst:t,continue:i,input:a,...s}=e;return s.path??(s.path=[]),s.message=o,n?.reportInput&&(s.input=a),s}function On(e){return e instanceof Set?"set":e instanceof Map?"map":e instanceof File?"file":"unknown"}function jn(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function k(e){let n=typeof e;switch(n){case"number":return Number.isNaN(e)?"nan":"number";case"object":{if(e===null)return"null";if(Array.isArray(e))return"array";let r=e;if(r&&Object.getPrototypeOf(r)!==Object.prototype&&"constructor"in r&&r.constructor)return r.constructor.name}}return n}function Wt(...e){let[n,r,o]=e;return typeof n=="string"?{message:n,code:"custom",input:r,inst:o}:{...n}}function Zh(e){return Object.entries(e).filter(([n,r])=>Number.isNaN(Number.parseInt(n,10))).map(n=>n[1])}function Bd(e){let n=atob(e),r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}function Gd(e){let n="";for(let r=0;r<e.length;r++)n+=String.fromCharCode(e[r]);return btoa(n)}function Fh(e){let n=e.replace(/-/g,"+").replace(/_/g,"/"),r="=".repeat((4-n.length%4)%4);return Bd(n+r)}function Hh(e){return Gd(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Jh(e){let n=e.replace(/^0x/,"");if(n.length%2!==0)throw new Error("Invalid hex string length");let r=new Uint8Array(n.length/2);for(let o=0;o<n.length;o+=2)r[o/2]=Number.parseInt(n.slice(o,o+2),16);return r}function Wh(e){return Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("")}var Ki=class{constructor(...n){}};var Xd=(e,n)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:n,enumerable:!1}),e.message=JSON.stringify(n,Ht,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Un=h("$ZodError",Xd),ye=h("$ZodError",Xd,{Parent:Error});function Mn(e,n=r=>r.message){let r={},o=[];for(let t of e.issues)t.path.length>0?(r[t.path[0]]=r[t.path[0]]||[],r[t.path[0]].push(n(t))):o.push(n(t));return{formErrors:o,fieldErrors:r}}function Nn(e,n=r=>r.message){let r={_errors:[]},o=(t,i=[])=>{for(let a of t.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(s=>o({issues:s},[...i,...a.path]));else if(a.code==="invalid_key")o({issues:a.issues},[...i,...a.path]);else if(a.code==="invalid_element")o({issues:a.issues},[...i,...a.path]);else{let s=[...i,...a.path];if(s.length===0)r._errors.push(n(a));else{let l=r,c=0;for(;c<s.length;){let d=s[c];c===s.length-1?(l[d]=l[d]||{_errors:[]},l[d]._errors.push(n(a))):l[d]=l[d]||{_errors:[]},l=l[d],c++}}}};return o(e),r}function la(e,n=r=>r.message){let r={errors:[]},o=(t,i=[])=>{var a,s;for(let l of t.issues)if(l.code==="invalid_union"&&l.errors.length)l.errors.map(c=>o({issues:c},[...i,...l.path]));else if(l.code==="invalid_key")o({issues:l.issues},[...i,...l.path]);else if(l.code==="invalid_element")o({issues:l.issues},[...i,...l.path]);else{let c=[...i,...l.path];if(c.length===0){r.errors.push(n(l));continue}let d=r,u=0;for(;u<c.length;){let f=c[u],p=u===c.length-1;typeof f=="string"?(d.properties??(d.properties={}),(a=d.properties)[f]??(a[f]={errors:[]}),d=d.properties[f]):(d.items??(d.items=[]),(s=d.items)[f]??(s[f]={errors:[]}),d=d.items[f]),p&&d.errors.push(n(l)),u++}}};return o(e),r}function Qd(e){let n=[],r=e.map(o=>typeof o=="object"?o.key:o);for(let o of r)typeof o=="number"?n.push(`[${o}]`):typeof o=="symbol"?n.push(`[${JSON.stringify(String(o))}]`):/[^\w$]/.test(o)?n.push(`[${JSON.stringify(o)}]`):(n.length&&n.push("."),n.push(o));return n.join("")}function ca(e){let n=[],r=[...e.issues].sort((o,t)=>(o.path??[]).length-(t.path??[]).length);for(let o of r)n.push(`✖ ${o.message}`),o.path?.length&&n.push(`  → at ${Qd(o.path)}`);return n.join(`
`)}var qt=e=>(n,r,o,t)=>{let i=o?{...o,async:!1}:{async:!1},a=n._zod.run({value:r,issues:[]},i);if(a instanceof Promise)throw new Re;if(a.issues.length){let s=new(t?.Err??e)(a.issues.map(l=>me(l,i,ee())));throw kr(s,t?.callee),s}return a.value},Er=qt(ye),Vt=e=>async(n,r,o,t)=>{let i=o?{...o,async:!0}:{async:!0},a=n._zod.run({value:r,issues:[]},i);if(a instanceof Promise&&(a=await a),a.issues.length){let s=new(t?.Err??e)(a.issues.map(l=>me(l,i,ee())));throw kr(s,t?.callee),s}return a.value},wr=Vt(ye),Bt=e=>(n,r,o)=>{let t=o?{...o,async:!1}:{async:!1},i=n._zod.run({value:r,issues:[]},t);if(i instanceof Promise)throw new Re;return i.issues.length?{success:!1,error:new(e??Un)(i.issues.map(a=>me(a,t,ee())))}:{success:!0,data:i.value}},ua=Bt(ye),Gt=e=>async(n,r,o)=>{let t=o?{...o,async:!0}:{async:!0},i=n._zod.run({value:r,issues:[]},t);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new e(i.issues.map(a=>me(a,t,ee())))}:{success:!0,data:i.value}},da=Gt(ye),Tr=e=>(n,r,o)=>{let t=o?{...o,direction:"backward"}:{direction:"backward"};return qt(e)(n,r,t)},Vh=Tr(ye),Ir=e=>(n,r,o)=>qt(e)(n,r,o),Bh=Ir(ye),zr=e=>async(n,r,o)=>{let t=o?{...o,direction:"backward"}:{direction:"backward"};return Vt(e)(n,r,t)},Gh=zr(ye),Pr=e=>async(n,r,o)=>Vt(e)(n,r,o),Xh=Pr(ye),Lr=e=>(n,r,o)=>{let t=o?{...o,direction:"backward"}:{direction:"backward"};return Bt(e)(n,r,t)},Qh=Lr(ye),Ar=e=>(n,r,o)=>Bt(e)(n,r,o),Kh=Ar(ye),Dr=e=>async(n,r,o)=>{let t=o?{...o,direction:"backward"}:{direction:"backward"};return Gt(e)(n,r,t)},Yh=Dr(ye),Rr=e=>async(n,r,o)=>Gt(e)(n,r,o),eb=Rr(ye);var Ee={};Ye(Ee,{base64:()=>Ta,base64url:()=>Or,bigint:()=>Ra,boolean:()=>ja,browserEmail:()=>lb,cidrv4:()=>Ea,cidrv6:()=>wa,cuid:()=>pa,cuid2:()=>ma,date:()=>Pa,datetime:()=>Aa,domain:()=>db,duration:()=>ba,e164:()=>za,email:()=>xa,emoji:()=>$a,extendedDuration:()=>tb,guid:()=>ya,hex:()=>pb,hostname:()=>ub,html5Email:()=>ib,httpProtocol:()=>Ia,idnEmail:()=>sb,integer:()=>Oa,ipv4:()=>_a,ipv6:()=>Sa,ksuid:()=>va,lowercase:()=>Na,mac:()=>ka,md5_base64:()=>fb,md5_base64url:()=>gb,md5_hex:()=>mb,nanoid:()=>ha,null:()=>Ua,number:()=>jr,rfc5322Email:()=>ab,sha1_base64:()=>hb,sha1_base64url:()=>bb,sha1_hex:()=>vb,sha256_base64:()=>xb,sha256_base64url:()=>$b,sha256_hex:()=>yb,sha384_base64:()=>Sb,sha384_base64url:()=>kb,sha384_hex:()=>_b,sha512_base64:()=>wb,sha512_base64url:()=>Tb,sha512_hex:()=>Eb,string:()=>Da,time:()=>La,ulid:()=>fa,undefined:()=>Ma,unicodeEmail:()=>Kd,uppercase:()=>Ca,uuid:()=>Lt,uuid4:()=>nb,uuid6:()=>rb,uuid7:()=>ob,xid:()=>ga});var pa=/^[cC][0-9a-z]{6,}$/,ma=/^[0-9a-z]+$/,fa=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,ga=/^[0-9a-vA-V]{20}$/,va=/^[A-Za-z0-9]{27}$/,ha=/^[a-zA-Z0-9_-]{21}$/,ba=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,tb=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ya=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Lt=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,nb=Lt(4),rb=Lt(6),ob=Lt(7),xa=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,ib=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ab=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Kd=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,sb=Kd,lb=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,cb="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function $a(){return new RegExp(cb,"u")}var _a=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Sa=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,ka=e=>{let n=ze(e??":");return new RegExp(`^(?:[0-9A-F]{2}${n}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${n}){5}[0-9a-f]{2}$`)},Ea=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,wa=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ta=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Or=/^[A-Za-z0-9_-]*$/,ub=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,db=/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,Ia=/^https?$/,za=/^\+[1-9]\d{6,14}$/,Yd="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Pa=new RegExp(`^${Yd}$`);function ep(e){let n="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${n}`:e.precision===0?`${n}:[0-5]\\d`:`${n}:[0-5]\\d\\.\\d{${e.precision}}`:`${n}(?::[0-5]\\d(?:\\.\\d+)?)?`}function La(e){return new RegExp(`^${ep(e)}$`)}function Aa(e){let n=ep({precision:e.precision}),r=["Z"];e.local&&r.push(""),e.offset&&r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let o=`${n}(?:${r.join("|")})`;return new RegExp(`^${Yd}T(?:${o})$`)}var Da=e=>{let n=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${n}$`)},Ra=/^-?\d+n?$/,Oa=/^-?\d+$/,jr=/^-?\d+(?:\.\d+)?$/,ja=/^(?:true|false)$/i,Ua=/^null$/i;var Ma=/^undefined$/i;var Na=/^[^A-Z]*$/,Ca=/^[^a-z]*$/,pb=/^[0-9a-fA-F]*$/;function Cn(e,n){return new RegExp(`^[A-Za-z0-9+/]{${e}}${n}$`)}function Zn(e){return new RegExp(`^[A-Za-z0-9_-]{${e}}$`)}var mb=/^[0-9a-fA-F]{32}$/,fb=Cn(22,"=="),gb=Zn(22),vb=/^[0-9a-fA-F]{40}$/,hb=Cn(27,"="),bb=Zn(27),yb=/^[0-9a-fA-F]{64}$/,xb=Cn(43,"="),$b=Zn(43),_b=/^[0-9a-fA-F]{96}$/,Sb=Cn(64,""),kb=Zn(64),Eb=/^[0-9a-fA-F]{128}$/,wb=Cn(86,"=="),Tb=Zn(86);var G=h("$ZodCheck",(e,n)=>{var r;e._zod??(e._zod={}),e._zod.def=n,(r=e._zod).onattach??(r.onattach=[])}),np={number:"number",bigint:"bigint",object:"date"},Ur=h("$ZodCheckLessThan",(e,n)=>{G.init(e,n);let r=np[typeof n.value];e._zod.onattach.push(o=>{let t=o._zod.bag,i=(n.inclusive?t.maximum:t.exclusiveMaximum)??Number.POSITIVE_INFINITY;n.value<i&&(n.inclusive?t.maximum=n.value:t.exclusiveMaximum=n.value)}),e._zod.check=o=>{(n.inclusive?o.value<=n.value:o.value<n.value)||o.issues.push({origin:r,code:"too_big",maximum:typeof n.value=="object"?n.value.getTime():n.value,input:o.value,inclusive:n.inclusive,inst:e,continue:!n.abort})}}),Mr=h("$ZodCheckGreaterThan",(e,n)=>{G.init(e,n);let r=np[typeof n.value];e._zod.onattach.push(o=>{let t=o._zod.bag,i=(n.inclusive?t.minimum:t.exclusiveMinimum)??Number.NEGATIVE_INFINITY;n.value>i&&(n.inclusive?t.minimum=n.value:t.exclusiveMinimum=n.value)}),e._zod.check=o=>{(n.inclusive?o.value>=n.value:o.value>n.value)||o.issues.push({origin:r,code:"too_small",minimum:typeof n.value=="object"?n.value.getTime():n.value,input:o.value,inclusive:n.inclusive,inst:e,continue:!n.abort})}}),Za=h("$ZodCheckMultipleOf",(e,n)=>{G.init(e,n),e._zod.onattach.push(r=>{var o;(o=r._zod.bag).multipleOf??(o.multipleOf=n.value)}),e._zod.check=r=>{if(typeof r.value!=typeof n.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof r.value=="bigint"?r.value%n.value===BigInt(0):Yi(r.value,n.value)===0)||r.issues.push({origin:typeof r.value,code:"not_multiple_of",divisor:n.value,input:r.value,inst:e,continue:!n.abort})}}),Fa=h("$ZodCheckNumberFormat",(e,n)=>{G.init(e,n),n.format=n.format||"float64";let r=n.format?.includes("int"),o=r?"int":"number",[t,i]=ia[n.format];e._zod.onattach.push(a=>{let s=a._zod.bag;s.format=n.format,s.minimum=t,s.maximum=i,r&&(s.pattern=Oa)}),e._zod.check=a=>{let s=a.value;if(r){if(!Number.isInteger(s)){a.issues.push({expected:o,format:n.format,code:"invalid_type",continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?a.issues.push({input:s,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,inclusive:!0,continue:!n.abort}):a.issues.push({input:s,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:o,inclusive:!0,continue:!n.abort});return}}s<t&&a.issues.push({origin:"number",input:s,code:"too_small",minimum:t,inclusive:!0,inst:e,continue:!n.abort}),s>i&&a.issues.push({origin:"number",input:s,code:"too_big",maximum:i,inclusive:!0,inst:e,continue:!n.abort})}}),Ha=h("$ZodCheckBigIntFormat",(e,n)=>{G.init(e,n);let[r,o]=aa[n.format];e._zod.onattach.push(t=>{let i=t._zod.bag;i.format=n.format,i.minimum=r,i.maximum=o}),e._zod.check=t=>{let i=t.value;i<r&&t.issues.push({origin:"bigint",input:i,code:"too_small",minimum:r,inclusive:!0,inst:e,continue:!n.abort}),i>o&&t.issues.push({origin:"bigint",input:i,code:"too_big",maximum:o,inclusive:!0,inst:e,continue:!n.abort})}}),Ja=h("$ZodCheckMaxSize",(e,n)=>{var r;G.init(e,n),(r=e._zod.def).when??(r.when=o=>{let t=o.value;return!ft(t)&&t.size!==void 0}),e._zod.onattach.push(o=>{let t=o._zod.bag.maximum??Number.POSITIVE_INFINITY;n.maximum<t&&(o._zod.bag.maximum=n.maximum)}),e._zod.check=o=>{let t=o.value;t.size<=n.maximum||o.issues.push({origin:On(t),code:"too_big",maximum:n.maximum,inclusive:!0,input:t,inst:e,continue:!n.abort})}}),Wa=h("$ZodCheckMinSize",(e,n)=>{var r;G.init(e,n),(r=e._zod.def).when??(r.when=o=>{let t=o.value;return!ft(t)&&t.size!==void 0}),e._zod.onattach.push(o=>{let t=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;n.minimum>t&&(o._zod.bag.minimum=n.minimum)}),e._zod.check=o=>{let t=o.value;t.size>=n.minimum||o.issues.push({origin:On(t),code:"too_small",minimum:n.minimum,inclusive:!0,input:t,inst:e,continue:!n.abort})}}),qa=h("$ZodCheckSizeEquals",(e,n)=>{var r;G.init(e,n),(r=e._zod.def).when??(r.when=o=>{let t=o.value;return!ft(t)&&t.size!==void 0}),e._zod.onattach.push(o=>{let t=o._zod.bag;t.minimum=n.size,t.maximum=n.size,t.size=n.size}),e._zod.check=o=>{let t=o.value,i=t.size;if(i===n.size)return;let a=i>n.size;o.issues.push({origin:On(t),...a?{code:"too_big",maximum:n.size}:{code:"too_small",minimum:n.size},inclusive:!0,exact:!0,input:o.value,inst:e,continue:!n.abort})}}),Va=h("$ZodCheckMaxLength",(e,n)=>{var r;G.init(e,n),(r=e._zod.def).when??(r.when=o=>{let t=o.value;return!ft(t)&&t.length!==void 0}),e._zod.onattach.push(o=>{let t=o._zod.bag.maximum??Number.POSITIVE_INFINITY;n.maximum<t&&(o._zod.bag.maximum=n.maximum)}),e._zod.check=o=>{let t=o.value;if(t.length<=n.maximum)return;let a=jn(t);o.issues.push({origin:a,code:"too_big",maximum:n.maximum,inclusive:!0,input:t,inst:e,continue:!n.abort})}}),Ba=h("$ZodCheckMinLength",(e,n)=>{var r;G.init(e,n),(r=e._zod.def).when??(r.when=o=>{let t=o.value;return!ft(t)&&t.length!==void 0}),e._zod.onattach.push(o=>{let t=o._zod.bag.minimum??Number.NEGATIVE_INFINITY;n.minimum>t&&(o._zod.bag.minimum=n.minimum)}),e._zod.check=o=>{let t=o.value;if(t.length>=n.minimum)return;let a=jn(t);o.issues.push({origin:a,code:"too_small",minimum:n.minimum,inclusive:!0,input:t,inst:e,continue:!n.abort})}}),Ga=h("$ZodCheckLengthEquals",(e,n)=>{var r;G.init(e,n),(r=e._zod.def).when??(r.when=o=>{let t=o.value;return!ft(t)&&t.length!==void 0}),e._zod.onattach.push(o=>{let t=o._zod.bag;t.minimum=n.length,t.maximum=n.length,t.length=n.length}),e._zod.check=o=>{let t=o.value,i=t.length;if(i===n.length)return;let a=jn(t),s=i>n.length;o.issues.push({origin:a,...s?{code:"too_big",maximum:n.length}:{code:"too_small",minimum:n.length},inclusive:!0,exact:!0,input:o.value,inst:e,continue:!n.abort})}}),Xt=h("$ZodCheckStringFormat",(e,n)=>{var r,o;G.init(e,n),e._zod.onattach.push(t=>{let i=t._zod.bag;i.format=n.format,n.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(n.pattern))}),n.pattern?(r=e._zod).check??(r.check=t=>{n.pattern.lastIndex=0,!n.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:n.format,input:t.value,...n.pattern?{pattern:n.pattern.toString()}:{},inst:e,continue:!n.abort})}):(o=e._zod).check??(o.check=()=>{})}),Xa=h("$ZodCheckRegex",(e,n)=>{Xt.init(e,n),e._zod.check=r=>{n.pattern.lastIndex=0,!n.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:"regex",input:r.value,pattern:n.pattern.toString(),inst:e,continue:!n.abort})}}),Qa=h("$ZodCheckLowerCase",(e,n)=>{n.pattern??(n.pattern=Na),Xt.init(e,n)}),Ka=h("$ZodCheckUpperCase",(e,n)=>{n.pattern??(n.pattern=Ca),Xt.init(e,n)}),Ya=h("$ZodCheckIncludes",(e,n)=>{G.init(e,n);let r=ze(n.includes),o=new RegExp(typeof n.position=="number"?`^.{${n.position}}${r}`:r);n.pattern=o,e._zod.onattach.push(t=>{let i=t._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(o)}),e._zod.check=t=>{t.value.includes(n.includes,n.position)||t.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:n.includes,input:t.value,inst:e,continue:!n.abort})}}),es=h("$ZodCheckStartsWith",(e,n)=>{G.init(e,n);let r=new RegExp(`^${ze(n.prefix)}.*`);n.pattern??(n.pattern=r),e._zod.onattach.push(o=>{let t=o._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(r)}),e._zod.check=o=>{o.value.startsWith(n.prefix)||o.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:n.prefix,input:o.value,inst:e,continue:!n.abort})}}),ts=h("$ZodCheckEndsWith",(e,n)=>{G.init(e,n);let r=new RegExp(`.*${ze(n.suffix)}$`);n.pattern??(n.pattern=r),e._zod.onattach.push(o=>{let t=o._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(r)}),e._zod.check=o=>{o.value.endsWith(n.suffix)||o.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:n.suffix,input:o.value,inst:e,continue:!n.abort})}});function tp(e,n,r){e.issues.length&&n.issues.push(...be(r,e.issues))}var ns=h("$ZodCheckProperty",(e,n)=>{G.init(e,n),e._zod.check=r=>{let o=n.schema._zod.run({value:r.value[n.property],issues:[]},{});if(o instanceof Promise)return o.then(t=>tp(t,r,n.property));tp(o,r,n.property)}}),rs=h("$ZodCheckMimeType",(e,n)=>{G.init(e,n);let r=new Set(n.mime);e._zod.onattach.push(o=>{o._zod.bag.mime=n.mime}),e._zod.check=o=>{r.has(o.value.type)||o.issues.push({code:"invalid_value",values:n.mime,input:o.value.type,inst:e,continue:!n.abort})}}),os=h("$ZodCheckOverwrite",(e,n)=>{G.init(e,n),e._zod.check=r=>{r.value=n.tx(r.value)}});var Fn=class{constructor(n=[]){this.content=[],this.indent=0,this&&(this.args=n)}indented(n){this.indent+=1,n(this),this.indent-=1}write(n){if(typeof n=="function"){n(this,{execution:"sync"}),n(this,{execution:"async"});return}let o=n.split(`
`).filter(a=>a),t=Math.min(...o.map(a=>a.length-a.trimStart().length)),i=o.map(a=>a.slice(t)).map(a=>" ".repeat(this.indent*2)+a);for(let a of i)this.content.push(a)}compile(){let n=Function,r=this?.args,t=[...(this?.content??[""]).map(i=>`  ${i}`)];return new n(...r,t.join(`
`))}};var is={major:4,minor:4,patch:3};var O=h("$ZodType",(e,n)=>{var r;e??(e={}),e._zod.def=n,e._zod.bag=e._zod.bag||{},e._zod.version=is;let o=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&o.unshift(e);for(let t of o)for(let i of t._zod.onattach)i(e);if(o.length===0)(r=e._zod).deferred??(r.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(a,s,l)=>{let c=ht(a),d;for(let u of s){if(u._zod.def.when){if(sa(a)||!u._zod.def.when(a))continue}else if(c)continue;let f=a.issues.length,p=u._zod.check(a);if(p instanceof Promise&&l?.async===!1)throw new Re;if(d||p instanceof Promise)d=(d??Promise.resolve()).then(async()=>{await p,a.issues.length!==f&&(c||(c=ht(a,f)))});else{if(a.issues.length===f)continue;c||(c=ht(a,f))}}return d?d.then(()=>a):a},i=(a,s,l)=>{if(ht(a))return a.aborted=!0,a;let c=t(s,o,l);if(c instanceof Promise){if(l.async===!1)throw new Re;return c.then(d=>e._zod.parse(d,l))}return e._zod.parse(c,l)};e._zod.run=(a,s)=>{if(s.skipChecks)return e._zod.parse(a,s);if(s.direction==="backward"){let c=e._zod.parse({value:a.value,issues:[]},{...s,skipChecks:!0});return c instanceof Promise?c.then(d=>i(d,a,s)):i(c,a,s)}let l=e._zod.parse(a,s);if(l instanceof Promise){if(s.async===!1)throw new Re;return l.then(c=>t(c,o,s))}return t(l,o,s)}}C(e,"~standard",()=>({validate:t=>{try{let i=ua(e,t);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return da(e,t).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}))}),At=h("$ZodString",(e,n)=>{O.init(e,n),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??Da(e._zod.bag),e._zod.parse=(r,o)=>{if(n.coerce)try{r.value=String(r.value)}catch{}return typeof r.value=="string"||r.issues.push({expected:"string",code:"invalid_type",input:r.value,inst:e}),r}}),V=h("$ZodStringFormat",(e,n)=>{Xt.init(e,n),At.init(e,n)}),ss=h("$ZodGUID",(e,n)=>{n.pattern??(n.pattern=ya),V.init(e,n)}),ls=h("$ZodUUID",(e,n)=>{if(n.version){let o={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[n.version];if(o===void 0)throw new Error(`Invalid UUID version: "${n.version}"`);n.pattern??(n.pattern=Lt(o))}else n.pattern??(n.pattern=Lt());V.init(e,n)}),cs=h("$ZodEmail",(e,n)=>{n.pattern??(n.pattern=xa),V.init(e,n)}),us=h("$ZodURL",(e,n)=>{V.init(e,n),e._zod.check=r=>{try{let o=r.value.trim();if(!n.normalize&&n.protocol?.source===Ia.source&&!/^https?:\/\//i.test(o)){r.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:r.value,inst:e,continue:!n.abort});return}let t=new URL(o);n.hostname&&(n.hostname.lastIndex=0,n.hostname.test(t.hostname)||r.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:n.hostname.source,input:r.value,inst:e,continue:!n.abort})),n.protocol&&(n.protocol.lastIndex=0,n.protocol.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)||r.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:n.protocol.source,input:r.value,inst:e,continue:!n.abort})),n.normalize?r.value=t.href:r.value=o;return}catch{r.issues.push({code:"invalid_format",format:"url",input:r.value,inst:e,continue:!n.abort})}}}),ds=h("$ZodEmoji",(e,n)=>{n.pattern??(n.pattern=$a()),V.init(e,n)}),ps=h("$ZodNanoID",(e,n)=>{n.pattern??(n.pattern=ha),V.init(e,n)}),ms=h("$ZodCUID",(e,n)=>{n.pattern??(n.pattern=pa),V.init(e,n)}),fs=h("$ZodCUID2",(e,n)=>{n.pattern??(n.pattern=ma),V.init(e,n)}),gs=h("$ZodULID",(e,n)=>{n.pattern??(n.pattern=fa),V.init(e,n)}),vs=h("$ZodXID",(e,n)=>{n.pattern??(n.pattern=ga),V.init(e,n)}),hs=h("$ZodKSUID",(e,n)=>{n.pattern??(n.pattern=va),V.init(e,n)}),bs=h("$ZodISODateTime",(e,n)=>{n.pattern??(n.pattern=Aa(n)),V.init(e,n)}),ys=h("$ZodISODate",(e,n)=>{n.pattern??(n.pattern=Pa),V.init(e,n)}),xs=h("$ZodISOTime",(e,n)=>{n.pattern??(n.pattern=La(n)),V.init(e,n)}),$s=h("$ZodISODuration",(e,n)=>{n.pattern??(n.pattern=ba),V.init(e,n)}),_s=h("$ZodIPv4",(e,n)=>{n.pattern??(n.pattern=_a),V.init(e,n),e._zod.bag.format="ipv4"}),Ss=h("$ZodIPv6",(e,n)=>{n.pattern??(n.pattern=Sa),V.init(e,n),e._zod.bag.format="ipv6",e._zod.check=r=>{try{new URL(`http://[${r.value}]`)}catch{r.issues.push({code:"invalid_format",format:"ipv6",input:r.value,inst:e,continue:!n.abort})}}}),ks=h("$ZodMAC",(e,n)=>{n.pattern??(n.pattern=ka(n.delimiter)),V.init(e,n),e._zod.bag.format="mac"}),Es=h("$ZodCIDRv4",(e,n)=>{n.pattern??(n.pattern=Ea),V.init(e,n)}),ws=h("$ZodCIDRv6",(e,n)=>{n.pattern??(n.pattern=wa),V.init(e,n),e._zod.check=r=>{let o=r.value.split("/");try{if(o.length!==2)throw new Error;let[t,i]=o;if(!i)throw new Error;let a=Number(i);if(`${a}`!==i)throw new Error;if(a<0||a>128)throw new Error;new URL(`http://[${t}]`)}catch{r.issues.push({code:"invalid_format",format:"cidrv6",input:r.value,inst:e,continue:!n.abort})}}});function Ts(e){if(e==="")return!0;if(/\s/.test(e)||e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}var Is=h("$ZodBase64",(e,n)=>{n.pattern??(n.pattern=Ta),V.init(e,n),e._zod.bag.contentEncoding="base64",e._zod.check=r=>{Ts(r.value)||r.issues.push({code:"invalid_format",format:"base64",input:r.value,inst:e,continue:!n.abort})}});function bp(e){if(!Or.test(e))return!1;let n=e.replace(/[-_]/g,o=>o==="-"?"+":"/"),r=n.padEnd(Math.ceil(n.length/4)*4,"=");return Ts(r)}var zs=h("$ZodBase64URL",(e,n)=>{n.pattern??(n.pattern=Or),V.init(e,n),e._zod.bag.contentEncoding="base64url",e._zod.check=r=>{bp(r.value)||r.issues.push({code:"invalid_format",format:"base64url",input:r.value,inst:e,continue:!n.abort})}}),Ps=h("$ZodE164",(e,n)=>{n.pattern??(n.pattern=za),V.init(e,n)});function yp(e,n=null){try{let r=e.split(".");if(r.length!==3)return!1;let[o]=r;if(!o)return!1;let t=JSON.parse(atob(o));return!("typ"in t&&t?.typ!=="JWT"||!t.alg||n&&(!("alg"in t)||t.alg!==n))}catch{return!1}}var Ls=h("$ZodJWT",(e,n)=>{V.init(e,n),e._zod.check=r=>{yp(r.value,n.alg)||r.issues.push({code:"invalid_format",format:"jwt",input:r.value,inst:e,continue:!n.abort})}}),As=h("$ZodCustomStringFormat",(e,n)=>{V.init(e,n),e._zod.check=r=>{n.fn(r.value)||r.issues.push({code:"invalid_format",format:n.format,input:r.value,inst:e,continue:!n.abort})}}),Hr=h("$ZodNumber",(e,n)=>{O.init(e,n),e._zod.pattern=e._zod.bag.pattern??jr,e._zod.parse=(r,o)=>{if(n.coerce)try{r.value=Number(r.value)}catch{}let t=r.value;if(typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t))return r;let i=typeof t=="number"?Number.isNaN(t)?"NaN":Number.isFinite(t)?void 0:"Infinity":void 0;return r.issues.push({expected:"number",code:"invalid_type",input:t,inst:e,...i?{received:i}:{}}),r}}),Ds=h("$ZodNumberFormat",(e,n)=>{Fa.init(e,n),Hr.init(e,n)}),Hn=h("$ZodBoolean",(e,n)=>{O.init(e,n),e._zod.pattern=ja,e._zod.parse=(r,o)=>{if(n.coerce)try{r.value=!!r.value}catch{}let t=r.value;return typeof t=="boolean"||r.issues.push({expected:"boolean",code:"invalid_type",input:t,inst:e}),r}}),Jr=h("$ZodBigInt",(e,n)=>{O.init(e,n),e._zod.pattern=Ra,e._zod.parse=(r,o)=>{if(n.coerce)try{r.value=BigInt(r.value)}catch{}return typeof r.value=="bigint"||r.issues.push({expected:"bigint",code:"invalid_type",input:r.value,inst:e}),r}}),Rs=h("$ZodBigIntFormat",(e,n)=>{Ha.init(e,n),Jr.init(e,n)}),Os=h("$ZodSymbol",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value;return typeof t=="symbol"||r.issues.push({expected:"symbol",code:"invalid_type",input:t,inst:e}),r}}),js=h("$ZodUndefined",(e,n)=>{O.init(e,n),e._zod.pattern=Ma,e._zod.values=new Set([void 0]),e._zod.parse=(r,o)=>{let t=r.value;return typeof t>"u"||r.issues.push({expected:"undefined",code:"invalid_type",input:t,inst:e}),r}}),Us=h("$ZodNull",(e,n)=>{O.init(e,n),e._zod.pattern=Ua,e._zod.values=new Set([null]),e._zod.parse=(r,o)=>{let t=r.value;return t===null||r.issues.push({expected:"null",code:"invalid_type",input:t,inst:e}),r}}),Ms=h("$ZodAny",(e,n)=>{O.init(e,n),e._zod.parse=r=>r}),Ns=h("$ZodUnknown",(e,n)=>{O.init(e,n),e._zod.parse=r=>r}),Cs=h("$ZodNever",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>(r.issues.push({expected:"never",code:"invalid_type",input:r.value,inst:e}),r)}),Zs=h("$ZodVoid",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value;return typeof t>"u"||r.issues.push({expected:"void",code:"invalid_type",input:t,inst:e}),r}}),Fs=h("$ZodDate",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{if(n.coerce)try{r.value=new Date(r.value)}catch{}let t=r.value,i=t instanceof Date;return i&&!Number.isNaN(t.getTime())||r.issues.push({expected:"date",code:"invalid_type",input:t,...i?{received:"Invalid Date"}:{},inst:e}),r}});function op(e,n,r){e.issues.length&&n.issues.push(...be(r,e.issues)),n.value[r]=e.value}var Hs=h("$ZodArray",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value;if(!Array.isArray(t))return r.issues.push({expected:"array",code:"invalid_type",input:t,inst:e}),r;r.value=Array(t.length);let i=[];for(let a=0;a<t.length;a++){let s=t[a],l=n.element._zod.run({value:s,issues:[]},o);l instanceof Promise?i.push(l.then(c=>op(c,r,a))):op(l,r,a)}return i.length?Promise.all(i).then(()=>r):r}});function Fr(e,n,r,o,t,i){let a=r in o;if(e.issues.length){if(t&&i&&!a)return;n.issues.push(...be(r,e.issues))}if(!a&&!t){e.issues.length||n.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[r]});return}e.value===void 0?a&&(n.value[r]=void 0):n.value[r]=e.value}function xp(e){let n=Object.keys(e.shape);for(let o of n)if(!e.shape?.[o]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${o}": expected a Zod schema`);let r=oa(e.shape);return{...e,keys:n,keySet:new Set(n),numKeys:n.length,optionalKeys:new Set(r)}}function $p(e,n,r,o,t,i){let a=[],s=t.keySet,l=t.catchall._zod,c=l.def.type,d=l.optin==="optional",u=l.optout==="optional";for(let f in n){if(f==="__proto__"||s.has(f))continue;if(c==="never"){a.push(f);continue}let p=l.run({value:n[f],issues:[]},o);p instanceof Promise?e.push(p.then(g=>Fr(g,r,f,n,d,u))):Fr(p,r,f,n,d,u)}return a.length&&r.issues.push({code:"unrecognized_keys",keys:a,input:n,inst:i}),e.length?Promise.all(e).then(()=>r):r}var _p=h("$ZodObject",(e,n)=>{if(O.init(e,n),!Object.getOwnPropertyDescriptor(n,"shape")?.get){let s=n.shape;Object.defineProperty(n,"shape",{get:()=>{let l={...s};return Object.defineProperty(n,"shape",{value:l}),l}})}let o=Jt(()=>xp(n));C(e._zod,"propValues",()=>{let s=n.shape,l={};for(let c in s){let d=s[c]._zod;if(d.values){l[c]??(l[c]=new Set);for(let u of d.values)l[c].add(u)}}return l});let t=Pt,i=n.catchall,a;e._zod.parse=(s,l)=>{a??(a=o.value);let c=s.value;if(!t(c))return s.issues.push({expected:"object",code:"invalid_type",input:c,inst:e}),s;s.value={};let d=[],u=a.shape;for(let f of a.keys){let p=u[f],g=p._zod.optin==="optional",$=p._zod.optout==="optional",_=p._zod.run({value:c[f],issues:[]},l);_ instanceof Promise?d.push(_.then(L=>Fr(L,s,f,c,g,$))):Fr(_,s,f,c,g,$)}return i?$p(d,c,s,l,o.value,e):d.length?Promise.all(d).then(()=>s):s}}),Js=h("$ZodObjectJIT",(e,n)=>{_p.init(e,n);let r=e._zod.parse,o=Jt(()=>xp(n)),t=f=>{let p=new Fn(["shape","payload","ctx"]),g=o.value,$=N=>{let R=Sr(N);return`shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`};p.write("const input = payload.value;");let _=Object.create(null),L=0;for(let N of g.keys)_[N]=`key_${L++}`;p.write("const newResult = {};");for(let N of g.keys){let R=_[N],Y=Sr(N),Qe=f[N],Pn=Qe?._zod?.optin==="optional",Bi=Qe?._zod?.optout==="optional";p.write(`const ${R} = ${$(N)};`),Pn&&Bi?p.write(`
        if (${R}.issues.length) {
          if (${Y} in input) {
            payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Y}, ...iss.path] : [${Y}]
            })));
          }
        }
        
        if (${R}.value === undefined) {
          if (${Y} in input) {
            newResult[${Y}] = undefined;
          }
        } else {
          newResult[${Y}] = ${R}.value;
        }
        
      `):Pn?p.write(`
        if (${R}.issues.length) {
          payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Y}, ...iss.path] : [${Y}]
          })));
        }
        
        if (${R}.value === undefined) {
          if (${Y} in input) {
            newResult[${Y}] = undefined;
          }
        } else {
          newResult[${Y}] = ${R}.value;
        }
        
      `):p.write(`
        const ${R}_present = ${Y} in input;
        if (${R}.issues.length) {
          payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Y}, ...iss.path] : [${Y}]
          })));
        }
        if (!${R}_present && !${R}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${Y}]
          });
        }

        if (${R}_present) {
          if (${R}.value === undefined) {
            newResult[${Y}] = undefined;
          } else {
            newResult[${Y}] = ${R}.value;
          }
        }

      `)}p.write("payload.value = newResult;"),p.write("return payload;");let K=p.compile();return(N,R)=>K(f,N,R)},i,a=Pt,s=!zt.jitless,c=s&&ta.value,d=n.catchall,u;e._zod.parse=(f,p)=>{u??(u=o.value);let g=f.value;return a(g)?s&&c&&p?.async===!1&&p.jitless!==!0?(i||(i=t(n.shape)),f=i(f,p),d?$p([],g,f,p,u,e):f):r(f,p):(f.issues.push({expected:"object",code:"invalid_type",input:g,inst:e}),f)}});function ip(e,n,r,o){for(let i of e)if(i.issues.length===0)return n.value=i.value,n;let t=e.filter(i=>!ht(i));return t.length===1?(n.value=t[0].value,t[0]):(n.issues.push({code:"invalid_union",input:n.value,inst:r,errors:e.map(i=>i.issues.map(a=>me(a,o,ee())))}),n)}var Jn=h("$ZodUnion",(e,n)=>{O.init(e,n),C(e._zod,"optin",()=>n.options.some(o=>o._zod.optin==="optional")?"optional":void 0),C(e._zod,"optout",()=>n.options.some(o=>o._zod.optout==="optional")?"optional":void 0),C(e._zod,"values",()=>{if(n.options.every(o=>o._zod.values))return new Set(n.options.flatMap(o=>Array.from(o._zod.values)))}),C(e._zod,"pattern",()=>{if(n.options.every(o=>o._zod.pattern)){let o=n.options.map(t=>t._zod.pattern);return new RegExp(`^(${o.map(t=>Dn(t.source)).join("|")})$`)}});let r=n.options.length===1?n.options[0]._zod.run:null;e._zod.parse=(o,t)=>{if(r)return r(o,t);let i=!1,a=[];for(let s of n.options){let l=s._zod.run({value:o.value,issues:[]},t);if(l instanceof Promise)a.push(l),i=!0;else{if(l.issues.length===0)return l;a.push(l)}}return i?Promise.all(a).then(s=>ip(s,o,e,t)):ip(a,o,e,t)}});function ap(e,n,r,o){let t=e.filter(i=>i.issues.length===0);return t.length===1?(n.value=t[0].value,n):(t.length===0?n.issues.push({code:"invalid_union",input:n.value,inst:r,errors:e.map(i=>i.issues.map(a=>me(a,o,ee())))}):n.issues.push({code:"invalid_union",input:n.value,inst:r,errors:[],inclusive:!1}),n)}var Ws=h("$ZodXor",(e,n)=>{Jn.init(e,n),n.inclusive=!1;let r=n.options.length===1?n.options[0]._zod.run:null;e._zod.parse=(o,t)=>{if(r)return r(o,t);let i=!1,a=[];for(let s of n.options){let l=s._zod.run({value:o.value,issues:[]},t);l instanceof Promise?(a.push(l),i=!0):a.push(l)}return i?Promise.all(a).then(s=>ap(s,o,e,t)):ap(a,o,e,t)}}),qs=h("$ZodDiscriminatedUnion",(e,n)=>{n.inclusive=!1,Jn.init(e,n);let r=e._zod.parse;C(e._zod,"propValues",()=>{let t={};for(let i of n.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw new Error(`Invalid discriminated union option at index "${n.options.indexOf(i)}"`);for(let[s,l]of Object.entries(a)){t[s]||(t[s]=new Set);for(let c of l)t[s].add(c)}}return t});let o=Jt(()=>{let t=n.options,i=new Map;for(let a of t){let s=a._zod.propValues?.[n.discriminator];if(!s||s.size===0)throw new Error(`Invalid discriminated union option at index "${n.options.indexOf(a)}"`);for(let l of s){if(i.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);i.set(l,a)}}return i});e._zod.parse=(t,i)=>{let a=t.value;if(!Pt(a))return t.issues.push({code:"invalid_type",expected:"object",input:a,inst:e}),t;let s=o.value.get(a?.[n.discriminator]);return s?s._zod.run(t,i):n.unionFallback||i.direction==="backward"?r(t,i):(t.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:n.discriminator,options:Array.from(o.value.keys()),input:a,path:[n.discriminator],inst:e}),t)}}),Vs=h("$ZodIntersection",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value,i=n.left._zod.run({value:t,issues:[]},o),a=n.right._zod.run({value:t,issues:[]},o);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([l,c])=>sp(r,l,c)):sp(r,i,a)}});function as(e,n){if(e===n)return{valid:!0,data:e};if(e instanceof Date&&n instanceof Date&&+e==+n)return{valid:!0,data:e};if(vt(e)&&vt(n)){let r=Object.keys(n),o=Object.keys(e).filter(i=>r.indexOf(i)!==-1),t={...e,...n};for(let i of o){let a=as(e[i],n[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};t[i]=a.data}return{valid:!0,data:t}}if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return{valid:!1,mergeErrorPath:[]};let r=[];for(let o=0;o<e.length;o++){let t=e[o],i=n[o],a=as(t,i);if(!a.valid)return{valid:!1,mergeErrorPath:[o,...a.mergeErrorPath]};r.push(a.data)}return{valid:!0,data:r}}return{valid:!1,mergeErrorPath:[]}}function sp(e,n,r){let o=new Map,t;for(let s of n.issues)if(s.code==="unrecognized_keys"){t??(t=s);for(let l of s.keys)o.has(l)||o.set(l,{}),o.get(l).l=!0}else e.issues.push(s);for(let s of r.issues)if(s.code==="unrecognized_keys")for(let l of s.keys)o.has(l)||o.set(l,{}),o.get(l).r=!0;else e.issues.push(s);let i=[...o].filter(([,s])=>s.l&&s.r).map(([s])=>s);if(i.length&&t&&e.issues.push({...t,keys:i}),ht(e))return e;let a=as(n.value,r.value);if(!a.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);return e.value=a.data,e}var Wr=h("$ZodTuple",(e,n)=>{O.init(e,n);let r=n.items;e._zod.parse=(o,t)=>{let i=o.value;if(!Array.isArray(i))return o.issues.push({input:i,inst:e,expected:"tuple",code:"invalid_type"}),o;o.value=[];let a=[],s=lp(r,"optin"),l=lp(r,"optout");if(!n.rest){if(i.length<s)return o.issues.push({code:"too_small",minimum:s,inclusive:!0,input:i,inst:e,origin:"array"}),o;i.length>r.length&&o.issues.push({code:"too_big",maximum:r.length,inclusive:!0,input:i,inst:e,origin:"array"})}let c=new Array(r.length);for(let d=0;d<r.length;d++){let u=r[d]._zod.run({value:i[d],issues:[]},t);u instanceof Promise?a.push(u.then(f=>{c[d]=f})):c[d]=u}if(n.rest){let d=r.length-1,u=i.slice(r.length);for(let f of u){d++;let p=n.rest._zod.run({value:f,issues:[]},t);p instanceof Promise?a.push(p.then(g=>cp(g,o,d))):cp(p,o,d)}}return a.length?Promise.all(a).then(()=>up(c,o,r,i,l)):up(c,o,r,i,l)}});function lp(e,n){for(let r=e.length-1;r>=0;r--)if(e[r]._zod[n]!=="optional")return r+1;return 0}function cp(e,n,r){e.issues.length&&n.issues.push(...be(r,e.issues)),n.value[r]=e.value}function up(e,n,r,o,t){for(let i=0;i<r.length;i++){let a=e[i],s=i<o.length;if(a.issues.length){if(!s&&i>=t){n.value.length=i;break}n.issues.push(...be(i,a.issues))}n.value[i]=a.value}for(let i=n.value.length-1;i>=o.length&&(r[i]._zod.optout==="optional"&&n.value[i]===void 0);i--)n.value.length=i;return n}var Bs=h("$ZodRecord",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value;if(!vt(t))return r.issues.push({expected:"record",code:"invalid_type",input:t,inst:e}),r;let i=[],a=n.keyType._zod.values;if(a){r.value={};let s=new Set;for(let c of a)if(typeof c=="string"||typeof c=="number"||typeof c=="symbol"){s.add(typeof c=="number"?c.toString():c);let d=n.keyType._zod.run({value:c,issues:[]},o);if(d instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(d.issues.length){r.issues.push({code:"invalid_key",origin:"record",issues:d.issues.map(p=>me(p,o,ee())),input:c,path:[c],inst:e});continue}let u=d.value,f=n.valueType._zod.run({value:t[c],issues:[]},o);f instanceof Promise?i.push(f.then(p=>{p.issues.length&&r.issues.push(...be(c,p.issues)),r.value[u]=p.value})):(f.issues.length&&r.issues.push(...be(c,f.issues)),r.value[u]=f.value)}let l;for(let c in t)s.has(c)||(l=l??[],l.push(c));l&&l.length>0&&r.issues.push({code:"unrecognized_keys",input:t,inst:e,keys:l})}else{r.value={};for(let s of Reflect.ownKeys(t)){if(s==="__proto__"||!Object.prototype.propertyIsEnumerable.call(t,s))continue;let l=n.keyType._zod.run({value:s,issues:[]},o);if(l instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(typeof s=="string"&&jr.test(s)&&l.issues.length){let u=n.keyType._zod.run({value:Number(s),issues:[]},o);if(u instanceof Promise)throw new Error("Async schemas not supported in object keys currently");u.issues.length===0&&(l=u)}if(l.issues.length){n.mode==="loose"?r.value[s]=t[s]:r.issues.push({code:"invalid_key",origin:"record",issues:l.issues.map(u=>me(u,o,ee())),input:s,path:[s],inst:e});continue}let d=n.valueType._zod.run({value:t[s],issues:[]},o);d instanceof Promise?i.push(d.then(u=>{u.issues.length&&r.issues.push(...be(s,u.issues)),r.value[l.value]=u.value})):(d.issues.length&&r.issues.push(...be(s,d.issues)),r.value[l.value]=d.value)}}return i.length?Promise.all(i).then(()=>r):r}}),Gs=h("$ZodMap",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value;if(!(t instanceof Map))return r.issues.push({expected:"map",code:"invalid_type",input:t,inst:e}),r;let i=[];r.value=new Map;for(let[a,s]of t){let l=n.keyType._zod.run({value:a,issues:[]},o),c=n.valueType._zod.run({value:s,issues:[]},o);l instanceof Promise||c instanceof Promise?i.push(Promise.all([l,c]).then(([d,u])=>{dp(d,u,r,a,t,e,o)})):dp(l,c,r,a,t,e,o)}return i.length?Promise.all(i).then(()=>r):r}});function dp(e,n,r,o,t,i,a){e.issues.length&&(Rn.has(typeof o)?r.issues.push(...be(o,e.issues)):r.issues.push({code:"invalid_key",origin:"map",input:t,inst:i,issues:e.issues.map(s=>me(s,a,ee()))})),n.issues.length&&(Rn.has(typeof o)?r.issues.push(...be(o,n.issues)):r.issues.push({origin:"map",code:"invalid_element",input:t,inst:i,key:o,issues:n.issues.map(s=>me(s,a,ee()))})),r.value.set(e.value,n.value)}var Xs=h("$ZodSet",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value;if(!(t instanceof Set))return r.issues.push({input:t,inst:e,expected:"set",code:"invalid_type"}),r;let i=[];r.value=new Set;for(let a of t){let s=n.valueType._zod.run({value:a,issues:[]},o);s instanceof Promise?i.push(s.then(l=>pp(l,r))):pp(s,r)}return i.length?Promise.all(i).then(()=>r):r}});function pp(e,n){e.issues.length&&n.issues.push(...e.issues),n.value.add(e.value)}var Qs=h("$ZodEnum",(e,n)=>{O.init(e,n);let r=An(n.entries),o=new Set(r);e._zod.values=o,e._zod.pattern=new RegExp(`^(${r.filter(t=>Rn.has(typeof t)).map(t=>typeof t=="string"?ze(t):t.toString()).join("|")})$`),e._zod.parse=(t,i)=>{let a=t.value;return o.has(a)||t.issues.push({code:"invalid_value",values:r,input:a,inst:e}),t}}),Ks=h("$ZodLiteral",(e,n)=>{if(O.init(e,n),n.values.length===0)throw new Error("Cannot create literal schema with no valid values");let r=new Set(n.values);e._zod.values=r,e._zod.pattern=new RegExp(`^(${n.values.map(o=>typeof o=="string"?ze(o):o?ze(o.toString()):String(o)).join("|")})$`),e._zod.parse=(o,t)=>{let i=o.value;return r.has(i)||o.issues.push({code:"invalid_value",values:n.values,input:i,inst:e}),o}}),Ys=h("$ZodFile",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{let t=r.value;return t instanceof File||r.issues.push({expected:"file",code:"invalid_type",input:t,inst:e}),r}}),el=h("$ZodTransform",(e,n)=>{O.init(e,n),e._zod.optin="optional",e._zod.parse=(r,o)=>{if(o.direction==="backward")throw new mt(e.constructor.name);let t=n.transform(r.value,r);if(o.async)return(t instanceof Promise?t:Promise.resolve(t)).then(a=>(r.value=a,r.fallback=!0,r));if(t instanceof Promise)throw new Re;return r.value=t,r.fallback=!0,r}});function mp(e,n){return n===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var qr=h("$ZodOptional",(e,n)=>{O.init(e,n),e._zod.optin="optional",e._zod.optout="optional",C(e._zod,"values",()=>n.innerType._zod.values?new Set([...n.innerType._zod.values,void 0]):void 0),C(e._zod,"pattern",()=>{let r=n.innerType._zod.pattern;return r?new RegExp(`^(${Dn(r.source)})?$`):void 0}),e._zod.parse=(r,o)=>{if(n.innerType._zod.optin==="optional"){let t=r.value,i=n.innerType._zod.run(r,o);return i instanceof Promise?i.then(a=>mp(a,t)):mp(i,t)}return r.value===void 0?r:n.innerType._zod.run(r,o)}}),tl=h("$ZodExactOptional",(e,n)=>{qr.init(e,n),C(e._zod,"values",()=>n.innerType._zod.values),C(e._zod,"pattern",()=>n.innerType._zod.pattern),e._zod.parse=(r,o)=>n.innerType._zod.run(r,o)}),nl=h("$ZodNullable",(e,n)=>{O.init(e,n),C(e._zod,"optin",()=>n.innerType._zod.optin),C(e._zod,"optout",()=>n.innerType._zod.optout),C(e._zod,"pattern",()=>{let r=n.innerType._zod.pattern;return r?new RegExp(`^(${Dn(r.source)}|null)$`):void 0}),C(e._zod,"values",()=>n.innerType._zod.values?new Set([...n.innerType._zod.values,null]):void 0),e._zod.parse=(r,o)=>r.value===null?r:n.innerType._zod.run(r,o)}),rl=h("$ZodDefault",(e,n)=>{O.init(e,n),e._zod.optin="optional",C(e._zod,"values",()=>n.innerType._zod.values),e._zod.parse=(r,o)=>{if(o.direction==="backward")return n.innerType._zod.run(r,o);if(r.value===void 0)return r.value=n.defaultValue,r;let t=n.innerType._zod.run(r,o);return t instanceof Promise?t.then(i=>fp(i,n)):fp(t,n)}});function fp(e,n){return e.value===void 0&&(e.value=n.defaultValue),e}var ol=h("$ZodPrefault",(e,n)=>{O.init(e,n),e._zod.optin="optional",C(e._zod,"values",()=>n.innerType._zod.values),e._zod.parse=(r,o)=>(o.direction==="backward"||r.value===void 0&&(r.value=n.defaultValue),n.innerType._zod.run(r,o))}),il=h("$ZodNonOptional",(e,n)=>{O.init(e,n),C(e._zod,"values",()=>{let r=n.innerType._zod.values;return r?new Set([...r].filter(o=>o!==void 0)):void 0}),e._zod.parse=(r,o)=>{let t=n.innerType._zod.run(r,o);return t instanceof Promise?t.then(i=>gp(i,e)):gp(t,e)}});function gp(e,n){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:n}),e}var al=h("$ZodSuccess",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>{if(o.direction==="backward")throw new mt("ZodSuccess");let t=n.innerType._zod.run(r,o);return t instanceof Promise?t.then(i=>(r.value=i.issues.length===0,r)):(r.value=t.issues.length===0,r)}}),sl=h("$ZodCatch",(e,n)=>{O.init(e,n),e._zod.optin="optional",C(e._zod,"optout",()=>n.innerType._zod.optout),C(e._zod,"values",()=>n.innerType._zod.values),e._zod.parse=(r,o)=>{if(o.direction==="backward")return n.innerType._zod.run(r,o);let t=n.innerType._zod.run(r,o);return t instanceof Promise?t.then(i=>(r.value=i.value,i.issues.length&&(r.value=n.catchValue({...r,error:{issues:i.issues.map(a=>me(a,o,ee()))},input:r.value}),r.issues=[],r.fallback=!0),r)):(r.value=t.value,t.issues.length&&(r.value=n.catchValue({...r,error:{issues:t.issues.map(i=>me(i,o,ee()))},input:r.value}),r.issues=[],r.fallback=!0),r)}}),ll=h("$ZodNaN",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>((typeof r.value!="number"||!Number.isNaN(r.value))&&r.issues.push({input:r.value,inst:e,expected:"nan",code:"invalid_type"}),r)}),Vr=h("$ZodPipe",(e,n)=>{O.init(e,n),C(e._zod,"values",()=>n.in._zod.values),C(e._zod,"optin",()=>n.in._zod.optin),C(e._zod,"optout",()=>n.out._zod.optout),C(e._zod,"propValues",()=>n.in._zod.propValues),e._zod.parse=(r,o)=>{if(o.direction==="backward"){let i=n.out._zod.run(r,o);return i instanceof Promise?i.then(a=>Nr(a,n.in,o)):Nr(i,n.in,o)}let t=n.in._zod.run(r,o);return t instanceof Promise?t.then(i=>Nr(i,n.out,o)):Nr(t,n.out,o)}});function Nr(e,n,r){return e.issues.length?(e.aborted=!0,e):n._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},r)}var Wn=h("$ZodCodec",(e,n)=>{O.init(e,n),C(e._zod,"values",()=>n.in._zod.values),C(e._zod,"optin",()=>n.in._zod.optin),C(e._zod,"optout",()=>n.out._zod.optout),C(e._zod,"propValues",()=>n.in._zod.propValues),e._zod.parse=(r,o)=>{if((o.direction||"forward")==="forward"){let i=n.in._zod.run(r,o);return i instanceof Promise?i.then(a=>Cr(a,n,o)):Cr(i,n,o)}else{let i=n.out._zod.run(r,o);return i instanceof Promise?i.then(a=>Cr(a,n,o)):Cr(i,n,o)}}});function Cr(e,n,r){if(e.issues.length)return e.aborted=!0,e;if((r.direction||"forward")==="forward"){let t=n.transform(e.value,e);return t instanceof Promise?t.then(i=>Zr(e,i,n.out,r)):Zr(e,t,n.out,r)}else{let t=n.reverseTransform(e.value,e);return t instanceof Promise?t.then(i=>Zr(e,i,n.in,r)):Zr(e,t,n.in,r)}}function Zr(e,n,r,o){return e.issues.length?(e.aborted=!0,e):r._zod.run({value:n,issues:e.issues},o)}var cl=h("$ZodPreprocess",(e,n)=>{Vr.init(e,n)}),ul=h("$ZodReadonly",(e,n)=>{O.init(e,n),C(e._zod,"propValues",()=>n.innerType._zod.propValues),C(e._zod,"values",()=>n.innerType._zod.values),C(e._zod,"optin",()=>n.innerType?._zod?.optin),C(e._zod,"optout",()=>n.innerType?._zod?.optout),e._zod.parse=(r,o)=>{if(o.direction==="backward")return n.innerType._zod.run(r,o);let t=n.innerType._zod.run(r,o);return t instanceof Promise?t.then(vp):vp(t)}});function vp(e){return e.value=Object.freeze(e.value),e}var dl=h("$ZodTemplateLiteral",(e,n)=>{O.init(e,n);let r=[];for(let o of n.parts)if(typeof o=="object"&&o!==null){if(!o._zod.pattern)throw new Error(`Invalid template literal part, no pattern found: ${[...o._zod.traits].shift()}`);let t=o._zod.pattern instanceof RegExp?o._zod.pattern.source:o._zod.pattern;if(!t)throw new Error(`Invalid template literal part: ${o._zod.traits}`);let i=t.startsWith("^")?1:0,a=t.endsWith("$")?t.length-1:t.length;r.push(t.slice(i,a))}else if(o===null||ra.has(typeof o))r.push(ze(`${o}`));else throw new Error(`Invalid template literal part: ${o}`);e._zod.pattern=new RegExp(`^${r.join("")}$`),e._zod.parse=(o,t)=>typeof o.value!="string"?(o.issues.push({input:o.value,inst:e,expected:"string",code:"invalid_type"}),o):(e._zod.pattern.lastIndex=0,e._zod.pattern.test(o.value)||o.issues.push({input:o.value,inst:e,code:"invalid_format",format:n.format??"template_literal",pattern:e._zod.pattern.source}),o)}),pl=h("$ZodFunction",(e,n)=>(O.init(e,n),e._def=n,e._zod.def=n,e.implement=r=>{if(typeof r!="function")throw new Error("implement() must be called with a function");return function(...o){let t=e._def.input?Er(e._def.input,o):o,i=Reflect.apply(r,this,t);return e._def.output?Er(e._def.output,i):i}},e.implementAsync=r=>{if(typeof r!="function")throw new Error("implementAsync() must be called with a function");return async function(...o){let t=e._def.input?await wr(e._def.input,o):o,i=await Reflect.apply(r,this,t);return e._def.output?await wr(e._def.output,i):i}},e._zod.parse=(r,o)=>typeof r.value!="function"?(r.issues.push({code:"invalid_type",expected:"function",input:r.value,inst:e}),r):(e._def.output&&e._def.output._zod.def.type==="promise"?r.value=e.implementAsync(r.value):r.value=e.implement(r.value),r),e.input=(...r)=>{let o=e.constructor;return Array.isArray(r[0])?new o({type:"function",input:new Wr({type:"tuple",items:r[0],rest:r[1]}),output:e._def.output}):new o({type:"function",input:r[0],output:e._def.output})},e.output=r=>{let o=e.constructor;return new o({type:"function",input:e._def.input,output:r})},e)),ml=h("$ZodPromise",(e,n)=>{O.init(e,n),e._zod.parse=(r,o)=>Promise.resolve(r.value).then(t=>n.innerType._zod.run({value:t,issues:[]},o))}),fl=h("$ZodLazy",(e,n)=>{O.init(e,n),C(e._zod,"innerType",()=>{let r=n;return r._cachedInner||(r._cachedInner=n.getter()),r._cachedInner}),C(e._zod,"pattern",()=>e._zod.innerType?._zod?.pattern),C(e._zod,"propValues",()=>e._zod.innerType?._zod?.propValues),C(e._zod,"optin",()=>e._zod.innerType?._zod?.optin??void 0),C(e._zod,"optout",()=>e._zod.innerType?._zod?.optout??void 0),e._zod.parse=(r,o)=>e._zod.innerType._zod.run(r,o)}),gl=h("$ZodCustom",(e,n)=>{G.init(e,n),O.init(e,n),e._zod.parse=(r,o)=>r,e._zod.check=r=>{let o=r.value,t=n.fn(o);if(t instanceof Promise)return t.then(i=>hp(i,r,o,e));hp(t,r,o,e)}});function hp(e,n,r,o){if(!e){let t={code:"custom",input:r,inst:o,path:[...o._zod.def.path??[]],continue:!o._zod.def.abort};o._zod.def.params&&(t.params=o._zod.def.params),n.issues.push(Wt(t))}}var Vn={};Ye(Vn,{ar:()=>Sp,az:()=>kp,be:()=>wp,bg:()=>Tp,ca:()=>Ip,cs:()=>zp,da:()=>Pp,de:()=>Lp,el:()=>Ap,en:()=>Br,eo:()=>Dp,es:()=>Rp,fa:()=>Op,fi:()=>jp,fr:()=>Up,frCA:()=>Mp,he:()=>Np,hr:()=>Cp,hu:()=>Zp,hy:()=>Hp,id:()=>Jp,is:()=>Wp,it:()=>qp,ja:()=>Vp,ka:()=>Bp,kh:()=>Gp,km:()=>Gr,ko:()=>Xp,lt:()=>Kp,mk:()=>Yp,ms:()=>em,nl:()=>tm,no:()=>nm,ota:()=>rm,pl:()=>im,ps:()=>om,pt:()=>am,ro:()=>sm,ru:()=>cm,sl:()=>um,sv:()=>dm,ta:()=>pm,th:()=>mm,tr:()=>fm,ua:()=>gm,uk:()=>Xr,ur:()=>vm,uz:()=>hm,vi:()=>bm,yo:()=>$m,zhCN:()=>ym,zhTW:()=>xm});var zb=()=>{let e={string:{unit:"حرف",verb:"أن يحوي"},file:{unit:"بايت",verb:"أن يحوي"},array:{unit:"عنصر",verb:"أن يحوي"},set:{unit:"عنصر",verb:"أن يحوي"}};function n(t){return e[t]??null}let r={regex:"مدخل",email:"بريد إلكتروني",url:"رابط",emoji:"إيموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاريخ ووقت بمعيار ISO",date:"تاريخ بمعيار ISO",time:"وقت بمعيار ISO",duration:"مدة بمعيار ISO",ipv4:"عنوان IPv4",ipv6:"عنوان IPv6",cidrv4:"مدى عناوين بصيغة IPv4",cidrv6:"مدى عناوين بصيغة IPv6",base64:"نَص بترميز base64-encoded",base64url:"نَص بترميز base64url-encoded",json_string:"نَص على هيئة JSON",e164:"رقم هاتف بمعيار E.164",jwt:"JWT",template_literal:"مدخل"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`مدخلات غير مقبولة: يفترض إدخال instanceof ${t.expected}، ولكن تم إدخال ${s}`:`مدخلات غير مقبولة: يفترض إدخال ${i}، ولكن تم إدخال ${s}`}case"invalid_value":return t.values.length===1?`مدخلات غير مقبولة: يفترض إدخال ${S(t.values[0])}`:`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?` أكبر من اللازم: يفترض أن تكون ${t.origin??"القيمة"} ${i} ${t.maximum.toString()} ${a.unit??"عنصر"}`:`أكبر من اللازم: يفترض أن تكون ${t.origin??"القيمة"} ${i} ${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${i} ${t.minimum.toString()} ${a.unit}`:`أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${i} ${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`نَص غير مقبول: يجب أن يبدأ بـ "${t.prefix}"`:i.format==="ends_with"?`نَص غير مقبول: يجب أن ينتهي بـ "${i.suffix}"`:i.format==="includes"?`نَص غير مقبول: يجب أن يتضمَّن "${i.includes}"`:i.format==="regex"?`نَص غير مقبول: يجب أن يطابق النمط ${i.pattern}`:`${r[i.format]??t.format} غير مقبول`}case"not_multiple_of":return`رقم غير مقبول: يجب أن يكون من مضاعفات ${t.divisor}`;case"unrecognized_keys":return`معرف${t.keys.length>1?"ات":""} غريب${t.keys.length>1?"ة":""}: ${y(t.keys,"، ")}`;case"invalid_key":return`معرف غير مقبول في ${t.origin}`;case"invalid_union":return"مدخل غير مقبول";case"invalid_element":return`مدخل غير مقبول في ${t.origin}`;default:return"مدخل غير مقبول"}}};function Sp(){return{localeError:zb()}}var Pb=()=>{let e={string:{unit:"simvol",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"element",verb:"olmalıdır"},set:{unit:"element",verb:"olmalıdır"}};function n(t){return e[t]??null}let r={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Yanlış dəyər: gözlənilən instanceof ${t.expected}, daxil olan ${s}`:`Yanlış dəyər: gözlənilən ${i}, daxil olan ${s}`}case"invalid_value":return t.values.length===1?`Yanlış dəyər: gözlənilən ${S(t.values[0])}`:`Yanlış seçim: aşağıdakılardan biri olmalıdır: ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Çox böyük: gözlənilən ${t.origin??"dəyər"} ${i}${t.maximum.toString()} ${a.unit??"element"}`:`Çox böyük: gözlənilən ${t.origin??"dəyər"} ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Çox kiçik: gözlənilən ${t.origin} ${i}${t.minimum.toString()} ${a.unit}`:`Çox kiçik: gözlənilən ${t.origin} ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Yanlış mətn: "${i.prefix}" ilə başlamalıdır`:i.format==="ends_with"?`Yanlış mətn: "${i.suffix}" ilə bitməlidir`:i.format==="includes"?`Yanlış mətn: "${i.includes}" daxil olmalıdır`:i.format==="regex"?`Yanlış mətn: ${i.pattern} şablonuna uyğun olmalıdır`:`Yanlış ${r[i.format]??t.format}`}case"not_multiple_of":return`Yanlış ədəd: ${t.divisor} ilə bölünə bilən olmalıdır`;case"unrecognized_keys":return`Tanınmayan açar${t.keys.length>1?"lar":""}: ${y(t.keys,", ")}`;case"invalid_key":return`${t.origin} daxilində yanlış açar`;case"invalid_union":return"Yanlış dəyər";case"invalid_element":return`${t.origin} daxilində yanlış dəyər`;default:return"Yanlış dəyər"}}};function kp(){return{localeError:Pb()}}function Ep(e,n,r,o){let t=Math.abs(e),i=t%10,a=t%100;return a>=11&&a<=19?o:i===1?n:i>=2&&i<=4?r:o}var Lb=()=>{let e={string:{unit:{one:"сімвал",few:"сімвалы",many:"сімвалаў"},verb:"мець"},array:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},set:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},file:{unit:{one:"байт",few:"байты",many:"байтаў"},verb:"мець"}};function n(t){return e[t]??null}let r={regex:"увод",email:"email адрас",url:"URL",emoji:"эмодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата і час",date:"ISO дата",time:"ISO час",duration:"ISO працягласць",ipv4:"IPv4 адрас",ipv6:"IPv6 адрас",cidrv4:"IPv4 дыяпазон",cidrv6:"IPv6 дыяпазон",base64:"радок у фармаце base64",base64url:"радок у фармаце base64url",json_string:"JSON радок",e164:"нумар E.164",jwt:"JWT",template_literal:"увод"},o={nan:"NaN",number:"лік",array:"масіў"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Няправільны ўвод: чакаўся instanceof ${t.expected}, атрымана ${s}`:`Няправільны ўвод: чакаўся ${i}, атрымана ${s}`}case"invalid_value":return t.values.length===1?`Няправільны ўвод: чакалася ${S(t.values[0])}`:`Няправільны варыянт: чакаўся адзін з ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);if(a){let s=Number(t.maximum),l=Ep(s,a.unit.one,a.unit.few,a.unit.many);return`Занадта вялікі: чакалася, што ${t.origin??"значэнне"} павінна ${a.verb} ${i}${t.maximum.toString()} ${l}`}return`Занадта вялікі: чакалася, што ${t.origin??"значэнне"} павінна быць ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);if(a){let s=Number(t.minimum),l=Ep(s,a.unit.one,a.unit.few,a.unit.many);return`Занадта малы: чакалася, што ${t.origin} павінна ${a.verb} ${i}${t.minimum.toString()} ${l}`}return`Занадта малы: чакалася, што ${t.origin} павінна быць ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Няправільны радок: павінен пачынацца з "${i.prefix}"`:i.format==="ends_with"?`Няправільны радок: павінен заканчвацца на "${i.suffix}"`:i.format==="includes"?`Няправільны радок: павінен змяшчаць "${i.includes}"`:i.format==="regex"?`Няправільны радок: павінен адпавядаць шаблону ${i.pattern}`:`Няправільны ${r[i.format]??t.format}`}case"not_multiple_of":return`Няправільны лік: павінен быць кратным ${t.divisor}`;case"unrecognized_keys":return`Нераспазнаны ${t.keys.length>1?"ключы":"ключ"}: ${y(t.keys,", ")}`;case"invalid_key":return`Няправільны ключ у ${t.origin}`;case"invalid_union":return"Няправільны ўвод";case"invalid_element":return`Няправільнае значэнне ў ${t.origin}`;default:return"Няправільны ўвод"}}};function wp(){return{localeError:Lb()}}var Ab=()=>{let e={string:{unit:"символа",verb:"да съдържа"},file:{unit:"байта",verb:"да съдържа"},array:{unit:"елемента",verb:"да съдържа"},set:{unit:"елемента",verb:"да съдържа"}};function n(t){return e[t]??null}let r={regex:"вход",email:"имейл адрес",url:"URL",emoji:"емоджи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO време",date:"ISO дата",time:"ISO време",duration:"ISO продължителност",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"base64-кодиран низ",base64url:"base64url-кодиран низ",json_string:"JSON низ",e164:"E.164 номер",jwt:"JWT",template_literal:"вход"},o={nan:"NaN",number:"число",array:"масив"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Невалиден вход: очакван instanceof ${t.expected}, получен ${s}`:`Невалиден вход: очакван ${i}, получен ${s}`}case"invalid_value":return t.values.length===1?`Невалиден вход: очакван ${S(t.values[0])}`:`Невалидна опция: очаквано едно от ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Твърде голямо: очаква се ${t.origin??"стойност"} да съдържа ${i}${t.maximum.toString()} ${a.unit??"елемента"}`:`Твърде голямо: очаква се ${t.origin??"стойност"} да бъде ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Твърде малко: очаква се ${t.origin} да съдържа ${i}${t.minimum.toString()} ${a.unit}`:`Твърде малко: очаква се ${t.origin} да бъде ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;if(i.format==="starts_with")return`Невалиден низ: трябва да започва с "${i.prefix}"`;if(i.format==="ends_with")return`Невалиден низ: трябва да завършва с "${i.suffix}"`;if(i.format==="includes")return`Невалиден низ: трябва да включва "${i.includes}"`;if(i.format==="regex")return`Невалиден низ: трябва да съвпада с ${i.pattern}`;let a="Невалиден";return i.format==="emoji"&&(a="Невалидно"),i.format==="datetime"&&(a="Невалидно"),i.format==="date"&&(a="Невалидна"),i.format==="time"&&(a="Невалидно"),i.format==="duration"&&(a="Невалидна"),`${a} ${r[i.format]??t.format}`}case"not_multiple_of":return`Невалидно число: трябва да бъде кратно на ${t.divisor}`;case"unrecognized_keys":return`Неразпознат${t.keys.length>1?"и":""} ключ${t.keys.length>1?"ове":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Невалиден ключ в ${t.origin}`;case"invalid_union":return"Невалиден вход";case"invalid_element":return`Невалидна стойност в ${t.origin}`;default:return"Невалиден вход"}}};function Tp(){return{localeError:Ab()}}var Db=()=>{let e={string:{unit:"caràcters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"}};function n(t){return e[t]??null}let r={regex:"entrada",email:"adreça electrònica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adreça IPv4",ipv6:"adreça IPv6",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Tipus invàlid: s'esperava instanceof ${t.expected}, s'ha rebut ${s}`:`Tipus invàlid: s'esperava ${i}, s'ha rebut ${s}`}case"invalid_value":return t.values.length===1?`Valor invàlid: s'esperava ${S(t.values[0])}`:`Opció invàlida: s'esperava una de ${y(t.values," o ")}`;case"too_big":{let i=t.inclusive?"com a màxim":"menys de",a=n(t.origin);return a?`Massa gran: s'esperava que ${t.origin??"el valor"} contingués ${i} ${t.maximum.toString()} ${a.unit??"elements"}`:`Massa gran: s'esperava que ${t.origin??"el valor"} fos ${i} ${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?"com a mínim":"més de",a=n(t.origin);return a?`Massa petit: s'esperava que ${t.origin} contingués ${i} ${t.minimum.toString()} ${a.unit}`:`Massa petit: s'esperava que ${t.origin} fos ${i} ${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Format invàlid: ha de començar amb "${i.prefix}"`:i.format==="ends_with"?`Format invàlid: ha d'acabar amb "${i.suffix}"`:i.format==="includes"?`Format invàlid: ha d'incloure "${i.includes}"`:i.format==="regex"?`Format invàlid: ha de coincidir amb el patró ${i.pattern}`:`Format invàlid per a ${r[i.format]??t.format}`}case"not_multiple_of":return`Número invàlid: ha de ser múltiple de ${t.divisor}`;case"unrecognized_keys":return`Clau${t.keys.length>1?"s":""} no reconeguda${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Clau invàlida a ${t.origin}`;case"invalid_union":return"Entrada invàlida";case"invalid_element":return`Element invàlid a ${t.origin}`;default:return"Entrada invàlida"}}};function Ip(){return{localeError:Db()}}var Rb=()=>{let e={string:{unit:"znaků",verb:"mít"},file:{unit:"bajtů",verb:"mít"},array:{unit:"prvků",verb:"mít"},set:{unit:"prvků",verb:"mít"}};function n(t){return e[t]??null}let r={regex:"regulární výraz",email:"e-mailová adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a čas ve formátu ISO",date:"datum ve formátu ISO",time:"čas ve formátu ISO",duration:"doba trvání ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"řetězec zakódovaný ve formátu base64",base64url:"řetězec zakódovaný ve formátu base64url",json_string:"řetězec ve formátu JSON",e164:"číslo E.164",jwt:"JWT",template_literal:"vstup"},o={nan:"NaN",number:"číslo",string:"řetězec",function:"funkce",array:"pole"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Neplatný vstup: očekáváno instanceof ${t.expected}, obdrženo ${s}`:`Neplatný vstup: očekáváno ${i}, obdrženo ${s}`}case"invalid_value":return t.values.length===1?`Neplatný vstup: očekáváno ${S(t.values[0])}`:`Neplatná možnost: očekávána jedna z hodnot ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Hodnota je příliš velká: ${t.origin??"hodnota"} musí mít ${i}${t.maximum.toString()} ${a.unit??"prvků"}`:`Hodnota je příliš velká: ${t.origin??"hodnota"} musí být ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Hodnota je příliš malá: ${t.origin??"hodnota"} musí mít ${i}${t.minimum.toString()} ${a.unit??"prvků"}`:`Hodnota je příliš malá: ${t.origin??"hodnota"} musí být ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Neplatný řetězec: musí začínat na "${i.prefix}"`:i.format==="ends_with"?`Neplatný řetězec: musí končit na "${i.suffix}"`:i.format==="includes"?`Neplatný řetězec: musí obsahovat "${i.includes}"`:i.format==="regex"?`Neplatný řetězec: musí odpovídat vzoru ${i.pattern}`:`Neplatný formát ${r[i.format]??t.format}`}case"not_multiple_of":return`Neplatné číslo: musí být násobkem ${t.divisor}`;case"unrecognized_keys":return`Neznámé klíče: ${y(t.keys,", ")}`;case"invalid_key":return`Neplatný klíč v ${t.origin}`;case"invalid_union":return"Neplatný vstup";case"invalid_element":return`Neplatná hodnota v ${t.origin}`;default:return"Neplatný vstup"}}};function zp(){return{localeError:Rb()}}var Ob=()=>{let e={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"}};function n(t){return e[t]??null}let r={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslæt",date:"ISO-dato",time:"ISO-klokkeslæt",duration:"ISO-varighed",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},o={nan:"NaN",string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"sæt",file:"fil"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Ugyldigt input: forventede instanceof ${t.expected}, fik ${s}`:`Ugyldigt input: forventede ${i}, fik ${s}`}case"invalid_value":return t.values.length===1?`Ugyldig værdi: forventede ${S(t.values[0])}`:`Ugyldigt valg: forventede en af følgende ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin),s=o[t.origin]??t.origin;return a?`For stor: forventede ${s??"value"} ${a.verb} ${i} ${t.maximum.toString()} ${a.unit??"elementer"}`:`For stor: forventede ${s??"value"} havde ${i} ${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin),s=o[t.origin]??t.origin;return a?`For lille: forventede ${s} ${a.verb} ${i} ${t.minimum.toString()} ${a.unit}`:`For lille: forventede ${s} havde ${i} ${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Ugyldig streng: skal starte med "${i.prefix}"`:i.format==="ends_with"?`Ugyldig streng: skal ende med "${i.suffix}"`:i.format==="includes"?`Ugyldig streng: skal indeholde "${i.includes}"`:i.format==="regex"?`Ugyldig streng: skal matche mønsteret ${i.pattern}`:`Ugyldig ${r[i.format]??t.format}`}case"not_multiple_of":return`Ugyldigt tal: skal være deleligt med ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${y(t.keys,", ")}`;case"invalid_key":return`Ugyldig nøgle i ${t.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig værdi i ${t.origin}`;default:return"Ugyldigt input"}}};function Pp(){return{localeError:Ob()}}var jb=()=>{let e={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"}};function n(t){return e[t]??null}let r={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",jwt:"JWT",template_literal:"Eingabe"},o={nan:"NaN",number:"Zahl",array:"Array"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Ungültige Eingabe: erwartet instanceof ${t.expected}, erhalten ${s}`:`Ungültige Eingabe: erwartet ${i}, erhalten ${s}`}case"invalid_value":return t.values.length===1?`Ungültige Eingabe: erwartet ${S(t.values[0])}`:`Ungültige Option: erwartet eine von ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Zu groß: erwartet, dass ${t.origin??"Wert"} ${i}${t.maximum.toString()} ${a.unit??"Elemente"} hat`:`Zu groß: erwartet, dass ${t.origin??"Wert"} ${i}${t.maximum.toString()} ist`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Zu klein: erwartet, dass ${t.origin} ${i}${t.minimum.toString()} ${a.unit} hat`:`Zu klein: erwartet, dass ${t.origin} ${i}${t.minimum.toString()} ist`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Ungültiger String: muss mit "${i.prefix}" beginnen`:i.format==="ends_with"?`Ungültiger String: muss mit "${i.suffix}" enden`:i.format==="includes"?`Ungültiger String: muss "${i.includes}" enthalten`:i.format==="regex"?`Ungültiger String: muss dem Muster ${i.pattern} entsprechen`:`Ungültig: ${r[i.format]??t.format}`}case"not_multiple_of":return`Ungültige Zahl: muss ein Vielfaches von ${t.divisor} sein`;case"unrecognized_keys":return`${t.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${y(t.keys,", ")}`;case"invalid_key":return`Ungültiger Schlüssel in ${t.origin}`;case"invalid_union":return"Ungültige Eingabe";case"invalid_element":return`Ungültiger Wert in ${t.origin}`;default:return"Ungültige Eingabe"}}};function Lp(){return{localeError:jb()}}var Ub=()=>{let e={string:{unit:"χαρακτήρες",verb:"να έχει"},file:{unit:"bytes",verb:"να έχει"},array:{unit:"στοιχεία",verb:"να έχει"},set:{unit:"στοιχεία",verb:"να έχει"},map:{unit:"καταχωρήσεις",verb:"να έχει"}};function n(t){return e[t]??null}let r={regex:"είσοδος",email:"διεύθυνση email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO ημερομηνία και ώρα",date:"ISO ημερομηνία",time:"ISO ώρα",duration:"ISO διάρκεια",ipv4:"διεύθυνση IPv4",ipv6:"διεύθυνση IPv6",mac:"διεύθυνση MAC",cidrv4:"εύρος IPv4",cidrv6:"εύρος IPv6",base64:"συμβολοσειρά κωδικοποιημένη σε base64",base64url:"συμβολοσειρά κωδικοποιημένη σε base64url",json_string:"συμβολοσειρά JSON",e164:"αριθμός E.164",jwt:"JWT",template_literal:"είσοδος"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return typeof t.expected=="string"&&/^[A-Z]/.test(t.expected)?`Μη έγκυρη είσοδος: αναμενόταν instanceof ${t.expected}, λήφθηκε ${s}`:`Μη έγκυρη είσοδος: αναμενόταν ${i}, λήφθηκε ${s}`}case"invalid_value":return t.values.length===1?`Μη έγκυρη είσοδος: αναμενόταν ${S(t.values[0])}`:`Μη έγκυρη επιλογή: αναμενόταν ένα από ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Πολύ μεγάλο: αναμενόταν ${t.origin??"τιμή"} να έχει ${i}${t.maximum.toString()} ${a.unit??"στοιχεία"}`:`Πολύ μεγάλο: αναμενόταν ${t.origin??"τιμή"} να είναι ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Πολύ μικρό: αναμενόταν ${t.origin} να έχει ${i}${t.minimum.toString()} ${a.unit}`:`Πολύ μικρό: αναμενόταν ${t.origin} να είναι ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${i.prefix}"`:i.format==="ends_with"?`Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${i.suffix}"`:i.format==="includes"?`Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${i.includes}"`:i.format==="regex"?`Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${i.pattern}`:`Μη έγκυρο: ${r[i.format]??t.format}`}case"not_multiple_of":return`Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${t.divisor}`;case"unrecognized_keys":return`Άγνωστ${t.keys.length>1?"α":"ο"} κλειδ${t.keys.length>1?"ιά":"ί"}: ${y(t.keys,", ")}`;case"invalid_key":return`Μη έγκυρο κλειδί στο ${t.origin}`;case"invalid_union":return"Μη έγκυρη είσοδος";case"invalid_element":return`Μη έγκυρη τιμή στο ${t.origin}`;default:return"Μη έγκυρη είσοδος"}}};function Ap(){return{localeError:Ub()}}var Mb=()=>{let e={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function n(t){return e[t]??null}let r={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return`Invalid input: expected ${i}, received ${s}`}case"invalid_value":return t.values.length===1?`Invalid input: expected ${S(t.values[0])}`:`Invalid option: expected one of ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Too big: expected ${t.origin??"value"} to have ${i}${t.maximum.toString()} ${a.unit??"elements"}`:`Too big: expected ${t.origin??"value"} to be ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Too small: expected ${t.origin} to have ${i}${t.minimum.toString()} ${a.unit}`:`Too small: expected ${t.origin} to be ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Invalid string: must start with "${i.prefix}"`:i.format==="ends_with"?`Invalid string: must end with "${i.suffix}"`:i.format==="includes"?`Invalid string: must include "${i.includes}"`:i.format==="regex"?`Invalid string: must match pattern ${i.pattern}`:`Invalid ${r[i.format]??t.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${t.divisor}`;case"unrecognized_keys":return`Unrecognized key${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Invalid key in ${t.origin}`;case"invalid_union":return t.options&&Array.isArray(t.options)&&t.options.length>0?`Invalid discriminator value. Expected ${t.options.map(a=>`'${a}'`).join(" | ")}`:"Invalid input";case"invalid_element":return`Invalid value in ${t.origin}`;default:return"Invalid input"}}};function Br(){return{localeError:Mb()}}var Nb=()=>{let e={string:{unit:"karaktrojn",verb:"havi"},file:{unit:"bajtojn",verb:"havi"},array:{unit:"elementojn",verb:"havi"},set:{unit:"elementojn",verb:"havi"}};function n(t){return e[t]??null}let r={regex:"enigo",email:"retadreso",url:"URL",emoji:"emoĝio",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datotempo",date:"ISO-dato",time:"ISO-tempo",duration:"ISO-daŭro",ipv4:"IPv4-adreso",ipv6:"IPv6-adreso",cidrv4:"IPv4-rango",cidrv6:"IPv6-rango",base64:"64-ume kodita karaktraro",base64url:"URL-64-ume kodita karaktraro",json_string:"JSON-karaktraro",e164:"E.164-nombro",jwt:"JWT",template_literal:"enigo"},o={nan:"NaN",number:"nombro",array:"tabelo",null:"senvalora"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Nevalida enigo: atendiĝis instanceof ${t.expected}, riceviĝis ${s}`:`Nevalida enigo: atendiĝis ${i}, riceviĝis ${s}`}case"invalid_value":return t.values.length===1?`Nevalida enigo: atendiĝis ${S(t.values[0])}`:`Nevalida opcio: atendiĝis unu el ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Tro granda: atendiĝis ke ${t.origin??"valoro"} havu ${i}${t.maximum.toString()} ${a.unit??"elementojn"}`:`Tro granda: atendiĝis ke ${t.origin??"valoro"} havu ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Tro malgranda: atendiĝis ke ${t.origin} havu ${i}${t.minimum.toString()} ${a.unit}`:`Tro malgranda: atendiĝis ke ${t.origin} estu ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Nevalida karaktraro: devas komenciĝi per "${i.prefix}"`:i.format==="ends_with"?`Nevalida karaktraro: devas finiĝi per "${i.suffix}"`:i.format==="includes"?`Nevalida karaktraro: devas inkluzivi "${i.includes}"`:i.format==="regex"?`Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}`:`Nevalida ${r[i.format]??t.format}`}case"not_multiple_of":return`Nevalida nombro: devas esti oblo de ${t.divisor}`;case"unrecognized_keys":return`Nekonata${t.keys.length>1?"j":""} ŝlosilo${t.keys.length>1?"j":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Nevalida ŝlosilo en ${t.origin}`;case"invalid_union":return"Nevalida enigo";case"invalid_element":return`Nevalida valoro en ${t.origin}`;default:return"Nevalida enigo"}}};function Dp(){return{localeError:Nb()}}var Cb=()=>{let e={string:{unit:"caracteres",verb:"tener"},file:{unit:"bytes",verb:"tener"},array:{unit:"elementos",verb:"tener"},set:{unit:"elementos",verb:"tener"}};function n(t){return e[t]??null}let r={regex:"entrada",email:"dirección de correo electrónico",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"fecha y hora ISO",date:"fecha ISO",time:"hora ISO",duration:"duración ISO",ipv4:"dirección IPv4",ipv6:"dirección IPv6",cidrv4:"rango IPv4",cidrv6:"rango IPv6",base64:"cadena codificada en base64",base64url:"URL codificada en base64",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},o={nan:"NaN",string:"texto",number:"número",boolean:"booleano",array:"arreglo",object:"objeto",set:"conjunto",file:"archivo",date:"fecha",bigint:"número grande",symbol:"símbolo",undefined:"indefinido",null:"nulo",function:"función",map:"mapa",record:"registro",tuple:"tupla",enum:"enumeración",union:"unión",literal:"literal",promise:"promesa",void:"vacío",never:"nunca",unknown:"desconocido",any:"cualquiera"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Entrada inválida: se esperaba instanceof ${t.expected}, recibido ${s}`:`Entrada inválida: se esperaba ${i}, recibido ${s}`}case"invalid_value":return t.values.length===1?`Entrada inválida: se esperaba ${S(t.values[0])}`:`Opción inválida: se esperaba una de ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin),s=o[t.origin]??t.origin;return a?`Demasiado grande: se esperaba que ${s??"valor"} tuviera ${i}${t.maximum.toString()} ${a.unit??"elementos"}`:`Demasiado grande: se esperaba que ${s??"valor"} fuera ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin),s=o[t.origin]??t.origin;return a?`Demasiado pequeño: se esperaba que ${s} tuviera ${i}${t.minimum.toString()} ${a.unit}`:`Demasiado pequeño: se esperaba que ${s} fuera ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Cadena inválida: debe comenzar con "${i.prefix}"`:i.format==="ends_with"?`Cadena inválida: debe terminar en "${i.suffix}"`:i.format==="includes"?`Cadena inválida: debe incluir "${i.includes}"`:i.format==="regex"?`Cadena inválida: debe coincidir con el patrón ${i.pattern}`:`Inválido ${r[i.format]??t.format}`}case"not_multiple_of":return`Número inválido: debe ser múltiplo de ${t.divisor}`;case"unrecognized_keys":return`Llave${t.keys.length>1?"s":""} desconocida${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Llave inválida en ${o[t.origin]??t.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido en ${o[t.origin]??t.origin}`;default:return"Entrada inválida"}}};function Rp(){return{localeError:Cb()}}var Zb=()=>{let e={string:{unit:"کاراکتر",verb:"داشته باشد"},file:{unit:"بایت",verb:"داشته باشد"},array:{unit:"آیتم",verb:"داشته باشد"},set:{unit:"آیتم",verb:"داشته باشد"}};function n(t){return e[t]??null}let r={regex:"ورودی",email:"آدرس ایمیل",url:"URL",emoji:"ایموجی",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاریخ و زمان ایزو",date:"تاریخ ایزو",time:"زمان ایزو",duration:"مدت زمان ایزو",ipv4:"IPv4 آدرس",ipv6:"IPv6 آدرس",cidrv4:"IPv4 دامنه",cidrv6:"IPv6 دامنه",base64:"base64-encoded رشته",base64url:"base64url-encoded رشته",json_string:"JSON رشته",e164:"E.164 عدد",jwt:"JWT",template_literal:"ورودی"},o={nan:"NaN",number:"عدد",array:"آرایه"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`ورودی نامعتبر: می‌بایست instanceof ${t.expected} می‌بود، ${s} دریافت شد`:`ورودی نامعتبر: می‌بایست ${i} می‌بود، ${s} دریافت شد`}case"invalid_value":return t.values.length===1?`ورودی نامعتبر: می‌بایست ${S(t.values[0])} می‌بود`:`گزینه نامعتبر: می‌بایست یکی از ${y(t.values,"|")} می‌بود`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`خیلی بزرگ: ${t.origin??"مقدار"} باید ${i}${t.maximum.toString()} ${a.unit??"عنصر"} باشد`:`خیلی بزرگ: ${t.origin??"مقدار"} باید ${i}${t.maximum.toString()} باشد`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`خیلی کوچک: ${t.origin} باید ${i}${t.minimum.toString()} ${a.unit} باشد`:`خیلی کوچک: ${t.origin} باید ${i}${t.minimum.toString()} باشد`}case"invalid_format":{let i=t;return i.format==="starts_with"?`رشته نامعتبر: باید با "${i.prefix}" شروع شود`:i.format==="ends_with"?`رشته نامعتبر: باید با "${i.suffix}" تمام شود`:i.format==="includes"?`رشته نامعتبر: باید شامل "${i.includes}" باشد`:i.format==="regex"?`رشته نامعتبر: باید با الگوی ${i.pattern} مطابقت داشته باشد`:`${r[i.format]??t.format} نامعتبر`}case"not_multiple_of":return`عدد نامعتبر: باید مضرب ${t.divisor} باشد`;case"unrecognized_keys":return`کلید${t.keys.length>1?"های":""} ناشناس: ${y(t.keys,", ")}`;case"invalid_key":return`کلید ناشناس در ${t.origin}`;case"invalid_union":return"ورودی نامعتبر";case"invalid_element":return`مقدار نامعتبر در ${t.origin}`;default:return"ورودی نامعتبر"}}};function Op(){return{localeError:Zb()}}var Fb=()=>{let e={string:{unit:"merkkiä",subject:"merkkijonon"},file:{unit:"tavua",subject:"tiedoston"},array:{unit:"alkiota",subject:"listan"},set:{unit:"alkiota",subject:"joukon"},number:{unit:"",subject:"luvun"},bigint:{unit:"",subject:"suuren kokonaisluvun"},int:{unit:"",subject:"kokonaisluvun"},date:{unit:"",subject:"päivämäärän"}};function n(t){return e[t]??null}let r={regex:"säännöllinen lauseke",email:"sähköpostiosoite",url:"URL-osoite",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-aikaleima",date:"ISO-päivämäärä",time:"ISO-aika",duration:"ISO-kesto",ipv4:"IPv4-osoite",ipv6:"IPv6-osoite",cidrv4:"IPv4-alue",cidrv6:"IPv6-alue",base64:"base64-koodattu merkkijono",base64url:"base64url-koodattu merkkijono",json_string:"JSON-merkkijono",e164:"E.164-luku",jwt:"JWT",template_literal:"templaattimerkkijono"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Virheellinen tyyppi: odotettiin instanceof ${t.expected}, oli ${s}`:`Virheellinen tyyppi: odotettiin ${i}, oli ${s}`}case"invalid_value":return t.values.length===1?`Virheellinen syöte: täytyy olla ${S(t.values[0])}`:`Virheellinen valinta: täytyy olla yksi seuraavista: ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Liian suuri: ${a.subject} täytyy olla ${i}${t.maximum.toString()} ${a.unit}`.trim():`Liian suuri: arvon täytyy olla ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Liian pieni: ${a.subject} täytyy olla ${i}${t.minimum.toString()} ${a.unit}`.trim():`Liian pieni: arvon täytyy olla ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Virheellinen syöte: täytyy alkaa "${i.prefix}"`:i.format==="ends_with"?`Virheellinen syöte: täytyy loppua "${i.suffix}"`:i.format==="includes"?`Virheellinen syöte: täytyy sisältää "${i.includes}"`:i.format==="regex"?`Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${i.pattern}`:`Virheellinen ${r[i.format]??t.format}`}case"not_multiple_of":return`Virheellinen luku: täytyy olla luvun ${t.divisor} monikerta`;case"unrecognized_keys":return`${t.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${y(t.keys,", ")}`;case"invalid_key":return"Virheellinen avain tietueessa";case"invalid_union":return"Virheellinen unioni";case"invalid_element":return"Virheellinen arvo joukossa";default:return"Virheellinen syöte"}}};function jp(){return{localeError:Fb()}}var Hb=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function n(t){return e[t]??null}let r={regex:"entrée",email:"adresse e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date et heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},o={string:"chaîne",number:"nombre",int:"entier",boolean:"booléen",bigint:"grand entier",symbol:"symbole",undefined:"indéfini",null:"null",never:"jamais",void:"vide",date:"date",array:"tableau",object:"objet",tuple:"tuple",record:"enregistrement",map:"carte",set:"ensemble",file:"fichier",nonoptional:"non-optionnel",nan:"NaN",function:"fonction"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Entrée invalide : instanceof ${t.expected} attendu, ${s} reçu`:`Entrée invalide : ${i} attendu, ${s} reçu`}case"invalid_value":return t.values.length===1?`Entrée invalide : ${S(t.values[0])} attendu`:`Option invalide : une valeur parmi ${y(t.values,"|")} attendue`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Trop grand : ${o[t.origin]??"valeur"} doit ${a.verb} ${i}${t.maximum.toString()} ${a.unit??"élément(s)"}`:`Trop grand : ${o[t.origin]??"valeur"} doit être ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Trop petit : ${o[t.origin]??"valeur"} doit ${a.verb} ${i}${t.minimum.toString()} ${a.unit}`:`Trop petit : ${o[t.origin]??"valeur"} doit être ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Chaîne invalide : doit commencer par "${i.prefix}"`:i.format==="ends_with"?`Chaîne invalide : doit se terminer par "${i.suffix}"`:i.format==="includes"?`Chaîne invalide : doit inclure "${i.includes}"`:i.format==="regex"?`Chaîne invalide : doit correspondre au modèle ${i.pattern}`:`${r[i.format]??t.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${t.divisor}`;case"unrecognized_keys":return`Clé${t.keys.length>1?"s":""} non reconnue${t.keys.length>1?"s":""} : ${y(t.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${t.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${t.origin}`;default:return"Entrée invalide"}}};function Up(){return{localeError:Hb()}}var Jb=()=>{let e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function n(t){return e[t]??null}let r={regex:"entrée",email:"adresse courriel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date-heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Entrée invalide : attendu instanceof ${t.expected}, reçu ${s}`:`Entrée invalide : attendu ${i}, reçu ${s}`}case"invalid_value":return t.values.length===1?`Entrée invalide : attendu ${S(t.values[0])}`:`Option invalide : attendu l'une des valeurs suivantes ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"≤":"<",a=n(t.origin);return a?`Trop grand : attendu que ${t.origin??"la valeur"} ait ${i}${t.maximum.toString()} ${a.unit}`:`Trop grand : attendu que ${t.origin??"la valeur"} soit ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?"≥":">",a=n(t.origin);return a?`Trop petit : attendu que ${t.origin} ait ${i}${t.minimum.toString()} ${a.unit}`:`Trop petit : attendu que ${t.origin} soit ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Chaîne invalide : doit commencer par "${i.prefix}"`:i.format==="ends_with"?`Chaîne invalide : doit se terminer par "${i.suffix}"`:i.format==="includes"?`Chaîne invalide : doit inclure "${i.includes}"`:i.format==="regex"?`Chaîne invalide : doit correspondre au motif ${i.pattern}`:`${r[i.format]??t.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${t.divisor}`;case"unrecognized_keys":return`Clé${t.keys.length>1?"s":""} non reconnue${t.keys.length>1?"s":""} : ${y(t.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${t.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${t.origin}`;default:return"Entrée invalide"}}};function Mp(){return{localeError:Jb()}}var Wb=()=>{let e={string:{label:"מחרוזת",gender:"f"},number:{label:"מספר",gender:"m"},boolean:{label:"ערך בוליאני",gender:"m"},bigint:{label:"BigInt",gender:"m"},date:{label:"תאריך",gender:"m"},array:{label:"מערך",gender:"m"},object:{label:"אובייקט",gender:"m"},null:{label:"ערך ריק (null)",gender:"m"},undefined:{label:"ערך לא מוגדר (undefined)",gender:"m"},symbol:{label:"סימבול (Symbol)",gender:"m"},function:{label:"פונקציה",gender:"f"},map:{label:"מפה (Map)",gender:"f"},set:{label:"קבוצה (Set)",gender:"f"},file:{label:"קובץ",gender:"m"},promise:{label:"Promise",gender:"m"},NaN:{label:"NaN",gender:"m"},unknown:{label:"ערך לא ידוע",gender:"m"},value:{label:"ערך",gender:"m"}},n={string:{unit:"תווים",shortLabel:"קצר",longLabel:"ארוך"},file:{unit:"בייטים",shortLabel:"קטן",longLabel:"גדול"},array:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},set:{unit:"פריטים",shortLabel:"קטן",longLabel:"גדול"},number:{unit:"",shortLabel:"קטן",longLabel:"גדול"}},r=c=>c?e[c]:void 0,o=c=>{let d=r(c);return d?d.label:c??e.unknown.label},t=c=>`ה${o(c)}`,i=c=>(r(c)?.gender??"m")==="f"?"צריכה להיות":"צריך להיות",a=c=>c?n[c]??null:null,s={regex:{label:"קלט",gender:"m"},email:{label:"כתובת אימייל",gender:"f"},url:{label:"כתובת רשת",gender:"f"},emoji:{label:"אימוג'י",gender:"m"},uuid:{label:"UUID",gender:"m"},nanoid:{label:"nanoid",gender:"m"},guid:{label:"GUID",gender:"m"},cuid:{label:"cuid",gender:"m"},cuid2:{label:"cuid2",gender:"m"},ulid:{label:"ULID",gender:"m"},xid:{label:"XID",gender:"m"},ksuid:{label:"KSUID",gender:"m"},datetime:{label:"תאריך וזמן ISO",gender:"m"},date:{label:"תאריך ISO",gender:"m"},time:{label:"זמן ISO",gender:"m"},duration:{label:"משך זמן ISO",gender:"m"},ipv4:{label:"כתובת IPv4",gender:"f"},ipv6:{label:"כתובת IPv6",gender:"f"},cidrv4:{label:"טווח IPv4",gender:"m"},cidrv6:{label:"טווח IPv6",gender:"m"},base64:{label:"מחרוזת בבסיס 64",gender:"f"},base64url:{label:"מחרוזת בבסיס 64 לכתובות רשת",gender:"f"},json_string:{label:"מחרוזת JSON",gender:"f"},e164:{label:"מספר E.164",gender:"m"},jwt:{label:"JWT",gender:"m"},ends_with:{label:"קלט",gender:"m"},includes:{label:"קלט",gender:"m"},lowercase:{label:"קלט",gender:"m"},starts_with:{label:"קלט",gender:"m"},uppercase:{label:"קלט",gender:"m"}},l={nan:"NaN"};return c=>{switch(c.code){case"invalid_type":{let d=c.expected,u=l[d??""]??o(d),f=k(c.input),p=l[f]??e[f]?.label??f;return/^[A-Z]/.test(c.expected)?`קלט לא תקין: צריך להיות instanceof ${c.expected}, התקבל ${p}`:`קלט לא תקין: צריך להיות ${u}, התקבל ${p}`}case"invalid_value":{if(c.values.length===1)return`ערך לא תקין: הערך חייב להיות ${S(c.values[0])}`;let d=c.values.map(p=>S(p));if(c.values.length===2)return`ערך לא תקין: האפשרויות המתאימות הן ${d[0]} או ${d[1]}`;let u=d[d.length-1];return`ערך לא תקין: האפשרויות המתאימות הן ${d.slice(0,-1).join(", ")} או ${u}`}case"too_big":{let d=a(c.origin),u=t(c.origin??"value");if(c.origin==="string")return`${d?.longLabel??"ארוך"} מדי: ${u} צריכה להכיל ${c.maximum.toString()} ${d?.unit??""} ${c.inclusive?"או פחות":"לכל היותר"}`.trim();if(c.origin==="number"){let g=c.inclusive?`קטן או שווה ל-${c.maximum}`:`קטן מ-${c.maximum}`;return`גדול מדי: ${u} צריך להיות ${g}`}if(c.origin==="array"||c.origin==="set"){let g=c.origin==="set"?"צריכה":"צריך",$=c.inclusive?`${c.maximum} ${d?.unit??""} או פחות`:`פחות מ-${c.maximum} ${d?.unit??""}`;return`גדול מדי: ${u} ${g} להכיל ${$}`.trim()}let f=c.inclusive?"<=":"<",p=i(c.origin??"value");return d?.unit?`${d.longLabel} מדי: ${u} ${p} ${f}${c.maximum.toString()} ${d.unit}`:`${d?.longLabel??"גדול"} מדי: ${u} ${p} ${f}${c.maximum.toString()}`}case"too_small":{let d=a(c.origin),u=t(c.origin??"value");if(c.origin==="string")return`${d?.shortLabel??"קצר"} מדי: ${u} צריכה להכיל ${c.minimum.toString()} ${d?.unit??""} ${c.inclusive?"או יותר":"לפחות"}`.trim();if(c.origin==="number"){let g=c.inclusive?`גדול או שווה ל-${c.minimum}`:`גדול מ-${c.minimum}`;return`קטן מדי: ${u} צריך להיות ${g}`}if(c.origin==="array"||c.origin==="set"){let g=c.origin==="set"?"צריכה":"צריך";if(c.minimum===1&&c.inclusive){let _=(c.origin==="set","לפחות פריט אחד");return`קטן מדי: ${u} ${g} להכיל ${_}`}let $=c.inclusive?`${c.minimum} ${d?.unit??""} או יותר`:`יותר מ-${c.minimum} ${d?.unit??""}`;return`קטן מדי: ${u} ${g} להכיל ${$}`.trim()}let f=c.inclusive?">=":">",p=i(c.origin??"value");return d?.unit?`${d.shortLabel} מדי: ${u} ${p} ${f}${c.minimum.toString()} ${d.unit}`:`${d?.shortLabel??"קטן"} מדי: ${u} ${p} ${f}${c.minimum.toString()}`}case"invalid_format":{let d=c;if(d.format==="starts_with")return`המחרוזת חייבת להתחיל ב "${d.prefix}"`;if(d.format==="ends_with")return`המחרוזת חייבת להסתיים ב "${d.suffix}"`;if(d.format==="includes")return`המחרוזת חייבת לכלול "${d.includes}"`;if(d.format==="regex")return`המחרוזת חייבת להתאים לתבנית ${d.pattern}`;let u=s[d.format],f=u?.label??d.format,g=(u?.gender??"m")==="f"?"תקינה":"תקין";return`${f} לא ${g}`}case"not_multiple_of":return`מספר לא תקין: חייב להיות מכפלה של ${c.divisor}`;case"unrecognized_keys":return`מפתח${c.keys.length>1?"ות":""} לא מזוה${c.keys.length>1?"ים":"ה"}: ${y(c.keys,", ")}`;case"invalid_key":return"שדה לא תקין באובייקט";case"invalid_union":return"קלט לא תקין";case"invalid_element":return`ערך לא תקין ב${t(c.origin??"array")}`;default:return"קלט לא תקין"}}};function Np(){return{localeError:Wb()}}var qb=()=>{let e={string:{unit:"znakova",verb:"imati"},file:{unit:"bajtova",verb:"imati"},array:{unit:"stavki",verb:"imati"},set:{unit:"stavki",verb:"imati"}};function n(t){return e[t]??null}let r={regex:"unos",email:"email adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum i vrijeme",date:"ISO datum",time:"ISO vrijeme",duration:"ISO trajanje",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"IPv4 raspon",cidrv6:"IPv6 raspon",base64:"base64 kodirani tekst",base64url:"base64url kodirani tekst",json_string:"JSON tekst",e164:"E.164 broj",jwt:"JWT",template_literal:"unos"},o={nan:"NaN",string:"tekst",number:"broj",boolean:"boolean",array:"niz",object:"objekt",set:"skup",file:"datoteka",date:"datum",bigint:"bigint",symbol:"simbol",undefined:"undefined",null:"null",function:"funkcija",map:"mapa"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Neispravan unos: očekuje se instanceof ${t.expected}, a primljeno je ${s}`:`Neispravan unos: očekuje se ${i}, a primljeno je ${s}`}case"invalid_value":return t.values.length===1?`Neispravna vrijednost: očekivano ${S(t.values[0])}`:`Neispravna opcija: očekivano jedno od ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin),s=o[t.origin]??t.origin;return a?`Preveliko: očekivano da ${s??"vrijednost"} ima ${i}${t.maximum.toString()} ${a.unit??"elemenata"}`:`Preveliko: očekivano da ${s??"vrijednost"} bude ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin),s=o[t.origin]??t.origin;return a?`Premalo: očekivano da ${s} ima ${i}${t.minimum.toString()} ${a.unit}`:`Premalo: očekivano da ${s} bude ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Neispravan tekst: mora započinjati s "${i.prefix}"`:i.format==="ends_with"?`Neispravan tekst: mora završavati s "${i.suffix}"`:i.format==="includes"?`Neispravan tekst: mora sadržavati "${i.includes}"`:i.format==="regex"?`Neispravan tekst: mora odgovarati uzorku ${i.pattern}`:`Neispravna ${r[i.format]??t.format}`}case"not_multiple_of":return`Neispravan broj: mora biti višekratnik od ${t.divisor}`;case"unrecognized_keys":return`Neprepoznat${t.keys.length>1?"i ključevi":" ključ"}: ${y(t.keys,", ")}`;case"invalid_key":return`Neispravan ključ u ${o[t.origin]??t.origin}`;case"invalid_union":return"Neispravan unos";case"invalid_element":return`Neispravna vrijednost u ${o[t.origin]??t.origin}`;default:return"Neispravan unos"}}};function Cp(){return{localeError:qb()}}var Vb=()=>{let e={string:{unit:"karakter",verb:"legyen"},file:{unit:"byte",verb:"legyen"},array:{unit:"elem",verb:"legyen"},set:{unit:"elem",verb:"legyen"}};function n(t){return e[t]??null}let r={regex:"bemenet",email:"email cím",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO időbélyeg",date:"ISO dátum",time:"ISO idő",duration:"ISO időintervallum",ipv4:"IPv4 cím",ipv6:"IPv6 cím",cidrv4:"IPv4 tartomány",cidrv6:"IPv6 tartomány",base64:"base64-kódolt string",base64url:"base64url-kódolt string",json_string:"JSON string",e164:"E.164 szám",jwt:"JWT",template_literal:"bemenet"},o={nan:"NaN",number:"szám",array:"tömb"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Érvénytelen bemenet: a várt érték instanceof ${t.expected}, a kapott érték ${s}`:`Érvénytelen bemenet: a várt érték ${i}, a kapott érték ${s}`}case"invalid_value":return t.values.length===1?`Érvénytelen bemenet: a várt érték ${S(t.values[0])}`:`Érvénytelen opció: valamelyik érték várt ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Túl nagy: ${t.origin??"érték"} mérete túl nagy ${i}${t.maximum.toString()} ${a.unit??"elem"}`:`Túl nagy: a bemeneti érték ${t.origin??"érték"} túl nagy: ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Túl kicsi: a bemeneti érték ${t.origin} mérete túl kicsi ${i}${t.minimum.toString()} ${a.unit}`:`Túl kicsi: a bemeneti érték ${t.origin} túl kicsi ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Érvénytelen string: "${i.prefix}" értékkel kell kezdődnie`:i.format==="ends_with"?`Érvénytelen string: "${i.suffix}" értékkel kell végződnie`:i.format==="includes"?`Érvénytelen string: "${i.includes}" értéket kell tartalmaznia`:i.format==="regex"?`Érvénytelen string: ${i.pattern} mintának kell megfelelnie`:`Érvénytelen ${r[i.format]??t.format}`}case"not_multiple_of":return`Érvénytelen szám: ${t.divisor} többszörösének kell lennie`;case"unrecognized_keys":return`Ismeretlen kulcs${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Érvénytelen kulcs ${t.origin}`;case"invalid_union":return"Érvénytelen bemenet";case"invalid_element":return`Érvénytelen érték: ${t.origin}`;default:return"Érvénytelen bemenet"}}};function Zp(){return{localeError:Vb()}}function Fp(e,n,r){return Math.abs(e)===1?n:r}function Qt(e){if(!e)return"";let n=["ա","ե","ը","ի","ո","ու","օ"],r=e[e.length-1];return e+(n.includes(r)?"ն":"ը")}var Bb=()=>{let e={string:{unit:{one:"նշան",many:"նշաններ"},verb:"ունենալ"},file:{unit:{one:"բայթ",many:"բայթեր"},verb:"ունենալ"},array:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"},set:{unit:{one:"տարր",many:"տարրեր"},verb:"ունենալ"}};function n(t){return e[t]??null}let r={regex:"մուտք",email:"էլ. հասցե",url:"URL",emoji:"էմոջի",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO ամսաթիվ և ժամ",date:"ISO ամսաթիվ",time:"ISO ժամ",duration:"ISO տևողություն",ipv4:"IPv4 հասցե",ipv6:"IPv6 հասցե",cidrv4:"IPv4 միջակայք",cidrv6:"IPv6 միջակայք",base64:"base64 ձևաչափով տող",base64url:"base64url ձևաչափով տող",json_string:"JSON տող",e164:"E.164 համար",jwt:"JWT",template_literal:"մուտք"},o={nan:"NaN",number:"թիվ",array:"զանգված"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Սխալ մուտքագրում․ սպասվում էր instanceof ${t.expected}, ստացվել է ${s}`:`Սխալ մուտքագրում․ սպասվում էր ${i}, ստացվել է ${s}`}case"invalid_value":return t.values.length===1?`Սխալ մուտքագրում․ սպասվում էր ${S(t.values[1])}`:`Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);if(a){let s=Number(t.maximum),l=Fp(s,a.unit.one,a.unit.many);return`Չափազանց մեծ արժեք․ սպասվում է, որ ${Qt(t.origin??"արժեք")} կունենա ${i}${t.maximum.toString()} ${l}`}return`Չափազանց մեծ արժեք․ սպասվում է, որ ${Qt(t.origin??"արժեք")} լինի ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);if(a){let s=Number(t.minimum),l=Fp(s,a.unit.one,a.unit.many);return`Չափազանց փոքր արժեք․ սպասվում է, որ ${Qt(t.origin)} կունենա ${i}${t.minimum.toString()} ${l}`}return`Չափազանց փոքր արժեք․ սպասվում է, որ ${Qt(t.origin)} լինի ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Սխալ տող․ պետք է սկսվի "${i.prefix}"-ով`:i.format==="ends_with"?`Սխալ տող․ պետք է ավարտվի "${i.suffix}"-ով`:i.format==="includes"?`Սխալ տող․ պետք է պարունակի "${i.includes}"`:i.format==="regex"?`Սխալ տող․ պետք է համապատասխանի ${i.pattern} ձևաչափին`:`Սխալ ${r[i.format]??t.format}`}case"not_multiple_of":return`Սխալ թիվ․ պետք է բազմապատիկ լինի ${t.divisor}-ի`;case"unrecognized_keys":return`Չճանաչված բանալի${t.keys.length>1?"ներ":""}. ${y(t.keys,", ")}`;case"invalid_key":return`Սխալ բանալի ${Qt(t.origin)}-ում`;case"invalid_union":return"Սխալ մուտքագրում";case"invalid_element":return`Սխալ արժեք ${Qt(t.origin)}-ում`;default:return"Սխալ մուտքագրում"}}};function Hp(){return{localeError:Bb()}}var Gb=()=>{let e={string:{unit:"karakter",verb:"memiliki"},file:{unit:"byte",verb:"memiliki"},array:{unit:"item",verb:"memiliki"},set:{unit:"item",verb:"memiliki"}};function n(t){return e[t]??null}let r={regex:"input",email:"alamat email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tanggal dan waktu format ISO",date:"tanggal format ISO",time:"jam format ISO",duration:"durasi format ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"rentang alamat IPv4",cidrv6:"rentang alamat IPv6",base64:"string dengan enkode base64",base64url:"string dengan enkode base64url",json_string:"string JSON",e164:"angka E.164",jwt:"JWT",template_literal:"input"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Input tidak valid: diharapkan instanceof ${t.expected}, diterima ${s}`:`Input tidak valid: diharapkan ${i}, diterima ${s}`}case"invalid_value":return t.values.length===1?`Input tidak valid: diharapkan ${S(t.values[0])}`:`Pilihan tidak valid: diharapkan salah satu dari ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Terlalu besar: diharapkan ${t.origin??"value"} memiliki ${i}${t.maximum.toString()} ${a.unit??"elemen"}`:`Terlalu besar: diharapkan ${t.origin??"value"} menjadi ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Terlalu kecil: diharapkan ${t.origin} memiliki ${i}${t.minimum.toString()} ${a.unit}`:`Terlalu kecil: diharapkan ${t.origin} menjadi ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`String tidak valid: harus dimulai dengan "${i.prefix}"`:i.format==="ends_with"?`String tidak valid: harus berakhir dengan "${i.suffix}"`:i.format==="includes"?`String tidak valid: harus menyertakan "${i.includes}"`:i.format==="regex"?`String tidak valid: harus sesuai pola ${i.pattern}`:`${r[i.format]??t.format} tidak valid`}case"not_multiple_of":return`Angka tidak valid: harus kelipatan dari ${t.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali ${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Kunci tidak valid di ${t.origin}`;case"invalid_union":return"Input tidak valid";case"invalid_element":return`Nilai tidak valid di ${t.origin}`;default:return"Input tidak valid"}}};function Jp(){return{localeError:Gb()}}var Xb=()=>{let e={string:{unit:"stafi",verb:"að hafa"},file:{unit:"bæti",verb:"að hafa"},array:{unit:"hluti",verb:"að hafa"},set:{unit:"hluti",verb:"að hafa"}};function n(t){return e[t]??null}let r={regex:"gildi",email:"netfang",url:"vefslóð",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dagsetning og tími",date:"ISO dagsetning",time:"ISO tími",duration:"ISO tímalengd",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded strengur",base64url:"base64url-encoded strengur",json_string:"JSON strengur",e164:"E.164 tölugildi",jwt:"JWT",template_literal:"gildi"},o={nan:"NaN",number:"númer",array:"fylki"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Rangt gildi: Þú slóst inn ${s} þar sem á að vera instanceof ${t.expected}`:`Rangt gildi: Þú slóst inn ${s} þar sem á að vera ${i}`}case"invalid_value":return t.values.length===1?`Rangt gildi: gert ráð fyrir ${S(t.values[0])}`:`Ógilt val: má vera eitt af eftirfarandi ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Of stórt: gert er ráð fyrir að ${t.origin??"gildi"} hafi ${i}${t.maximum.toString()} ${a.unit??"hluti"}`:`Of stórt: gert er ráð fyrir að ${t.origin??"gildi"} sé ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Of lítið: gert er ráð fyrir að ${t.origin} hafi ${i}${t.minimum.toString()} ${a.unit}`:`Of lítið: gert er ráð fyrir að ${t.origin} sé ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Ógildur strengur: verður að byrja á "${i.prefix}"`:i.format==="ends_with"?`Ógildur strengur: verður að enda á "${i.suffix}"`:i.format==="includes"?`Ógildur strengur: verður að innihalda "${i.includes}"`:i.format==="regex"?`Ógildur strengur: verður að fylgja mynstri ${i.pattern}`:`Rangt ${r[i.format]??t.format}`}case"not_multiple_of":return`Röng tala: verður að vera margfeldi af ${t.divisor}`;case"unrecognized_keys":return`Óþekkt ${t.keys.length>1?"ir lyklar":"ur lykill"}: ${y(t.keys,", ")}`;case"invalid_key":return`Rangur lykill í ${t.origin}`;case"invalid_union":return"Rangt gildi";case"invalid_element":return`Rangt gildi í ${t.origin}`;default:return"Rangt gildi"}}};function Wp(){return{localeError:Xb()}}var Qb=()=>{let e={string:{unit:"caratteri",verb:"avere"},file:{unit:"byte",verb:"avere"},array:{unit:"elementi",verb:"avere"},set:{unit:"elementi",verb:"avere"}};function n(t){return e[t]??null}let r={regex:"input",email:"indirizzo email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e ora ISO",date:"data ISO",time:"ora ISO",duration:"durata ISO",ipv4:"indirizzo IPv4",ipv6:"indirizzo IPv6",cidrv4:"intervallo IPv4",cidrv6:"intervallo IPv6",base64:"stringa codificata in base64",base64url:"URL codificata in base64",json_string:"stringa JSON",e164:"numero E.164",jwt:"JWT",template_literal:"input"},o={nan:"NaN",number:"numero",array:"vettore"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Input non valido: atteso instanceof ${t.expected}, ricevuto ${s}`:`Input non valido: atteso ${i}, ricevuto ${s}`}case"invalid_value":return t.values.length===1?`Input non valido: atteso ${S(t.values[0])}`:`Opzione non valida: atteso uno tra ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Troppo grande: ${t.origin??"valore"} deve avere ${i}${t.maximum.toString()} ${a.unit??"elementi"}`:`Troppo grande: ${t.origin??"valore"} deve essere ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Troppo piccolo: ${t.origin} deve avere ${i}${t.minimum.toString()} ${a.unit}`:`Troppo piccolo: ${t.origin} deve essere ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Stringa non valida: deve iniziare con "${i.prefix}"`:i.format==="ends_with"?`Stringa non valida: deve terminare con "${i.suffix}"`:i.format==="includes"?`Stringa non valida: deve includere "${i.includes}"`:i.format==="regex"?`Stringa non valida: deve corrispondere al pattern ${i.pattern}`:`Input non valido: ${r[i.format]??t.format}`}case"not_multiple_of":return`Numero non valido: deve essere un multiplo di ${t.divisor}`;case"unrecognized_keys":return`Chiav${t.keys.length>1?"i":"e"} non riconosciut${t.keys.length>1?"e":"a"}: ${y(t.keys,", ")}`;case"invalid_key":return`Chiave non valida in ${t.origin}`;case"invalid_union":return"Input non valido";case"invalid_element":return`Valore non valido in ${t.origin}`;default:return"Input non valido"}}};function qp(){return{localeError:Qb()}}var Kb=()=>{let e={string:{unit:"文字",verb:"である"},file:{unit:"バイト",verb:"である"},array:{unit:"要素",verb:"である"},set:{unit:"要素",verb:"である"}};function n(t){return e[t]??null}let r={regex:"入力値",email:"メールアドレス",url:"URL",emoji:"絵文字",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日時",date:"ISO日付",time:"ISO時刻",duration:"ISO期間",ipv4:"IPv4アドレス",ipv6:"IPv6アドレス",cidrv4:"IPv4範囲",cidrv6:"IPv6範囲",base64:"base64エンコード文字列",base64url:"base64urlエンコード文字列",json_string:"JSON文字列",e164:"E.164番号",jwt:"JWT",template_literal:"入力値"},o={nan:"NaN",number:"数値",array:"配列"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`無効な入力: instanceof ${t.expected}が期待されましたが、${s}が入力されました`:`無効な入力: ${i}が期待されましたが、${s}が入力されました`}case"invalid_value":return t.values.length===1?`無効な入力: ${S(t.values[0])}が期待されました`:`無効な選択: ${y(t.values,"、")}のいずれかである必要があります`;case"too_big":{let i=t.inclusive?"以下である":"より小さい",a=n(t.origin);return a?`大きすぎる値: ${t.origin??"値"}は${t.maximum.toString()}${a.unit??"要素"}${i}必要があります`:`大きすぎる値: ${t.origin??"値"}は${t.maximum.toString()}${i}必要があります`}case"too_small":{let i=t.inclusive?"以上である":"より大きい",a=n(t.origin);return a?`小さすぎる値: ${t.origin}は${t.minimum.toString()}${a.unit}${i}必要があります`:`小さすぎる値: ${t.origin}は${t.minimum.toString()}${i}必要があります`}case"invalid_format":{let i=t;return i.format==="starts_with"?`無効な文字列: "${i.prefix}"で始まる必要があります`:i.format==="ends_with"?`無効な文字列: "${i.suffix}"で終わる必要があります`:i.format==="includes"?`無効な文字列: "${i.includes}"を含む必要があります`:i.format==="regex"?`無効な文字列: パターン${i.pattern}に一致する必要があります`:`無効な${r[i.format]??t.format}`}case"not_multiple_of":return`無効な数値: ${t.divisor}の倍数である必要があります`;case"unrecognized_keys":return`認識されていないキー${t.keys.length>1?"群":""}: ${y(t.keys,"、")}`;case"invalid_key":return`${t.origin}内の無効なキー`;case"invalid_union":return"無効な入力";case"invalid_element":return`${t.origin}内の無効な値`;default:return"無効な入力"}}};function Vp(){return{localeError:Kb()}}var Yb=()=>{let e={string:{unit:"სიმბოლო",verb:"უნდა შეიცავდეს"},file:{unit:"ბაიტი",verb:"უნდა შეიცავდეს"},array:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"},set:{unit:"ელემენტი",verb:"უნდა შეიცავდეს"}};function n(t){return e[t]??null}let r={regex:"შეყვანა",email:"ელ-ფოსტის მისამართი",url:"URL",emoji:"ემოჯი",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"თარიღი-დრო",date:"თარიღი",time:"დრო",duration:"ხანგრძლივობა",ipv4:"IPv4 მისამართი",ipv6:"IPv6 მისამართი",cidrv4:"IPv4 დიაპაზონი",cidrv6:"IPv6 დიაპაზონი",base64:"base64-კოდირებული ველი",base64url:"base64url-კოდირებული ველი",json_string:"JSON ველი",e164:"E.164 ნომერი",jwt:"JWT",template_literal:"შეყვანა"},o={nan:"NaN",number:"რიცხვი",string:"ველი",boolean:"ბულეანი",function:"ფუნქცია",array:"მასივი"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`არასწორი შეყვანა: მოსალოდნელი instanceof ${t.expected}, მიღებული ${s}`:`არასწორი შეყვანა: მოსალოდნელი ${i}, მიღებული ${s}`}case"invalid_value":return t.values.length===1?`არასწორი შეყვანა: მოსალოდნელი ${S(t.values[0])}`:`არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${y(t.values,"|")}-დან`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`ზედმეტად დიდი: მოსალოდნელი ${t.origin??"მნიშვნელობა"} ${a.verb} ${i}${t.maximum.toString()} ${a.unit}`:`ზედმეტად დიდი: მოსალოდნელი ${t.origin??"მნიშვნელობა"} იყოს ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`ზედმეტად პატარა: მოსალოდნელი ${t.origin} ${a.verb} ${i}${t.minimum.toString()} ${a.unit}`:`ზედმეტად პატარა: მოსალოდნელი ${t.origin} იყოს ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`არასწორი ველი: უნდა იწყებოდეს "${i.prefix}"-ით`:i.format==="ends_with"?`არასწორი ველი: უნდა მთავრდებოდეს "${i.suffix}"-ით`:i.format==="includes"?`არასწორი ველი: უნდა შეიცავდეს "${i.includes}"-ს`:i.format==="regex"?`არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${i.pattern}`:`არასწორი ${r[i.format]??t.format}`}case"not_multiple_of":return`არასწორი რიცხვი: უნდა იყოს ${t.divisor}-ის ჯერადი`;case"unrecognized_keys":return`უცნობი გასაღებ${t.keys.length>1?"ები":"ი"}: ${y(t.keys,", ")}`;case"invalid_key":return`არასწორი გასაღები ${t.origin}-ში`;case"invalid_union":return"არასწორი შეყვანა";case"invalid_element":return`არასწორი მნიშვნელობა ${t.origin}-ში`;default:return"არასწორი შეყვანა"}}};function Bp(){return{localeError:Yb()}}var ey=()=>{let e={string:{unit:"តួអក្សរ",verb:"គួរមាន"},file:{unit:"បៃ",verb:"គួរមាន"},array:{unit:"ធាតុ",verb:"គួរមាន"},set:{unit:"ធាតុ",verb:"គួរមាន"}};function n(t){return e[t]??null}let r={regex:"ទិន្នន័យបញ្ចូល",email:"អាសយដ្ឋានអ៊ីមែល",url:"URL",emoji:"សញ្ញាអារម្មណ៍",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"កាលបរិច្ឆេទ និងម៉ោង ISO",date:"កាលបរិច្ឆេទ ISO",time:"ម៉ោង ISO",duration:"រយៈពេល ISO",ipv4:"អាសយដ្ឋាន IPv4",ipv6:"អាសយដ្ឋាន IPv6",cidrv4:"ដែនអាសយដ្ឋាន IPv4",cidrv6:"ដែនអាសយដ្ឋាន IPv6",base64:"ខ្សែអក្សរអ៊ិកូដ base64",base64url:"ខ្សែអក្សរអ៊ិកូដ base64url",json_string:"ខ្សែអក្សរ JSON",e164:"លេខ E.164",jwt:"JWT",template_literal:"ទិន្នន័យបញ្ចូល"},o={nan:"NaN",number:"លេខ",array:"អារេ (Array)",null:"គ្មានតម្លៃ (null)"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${t.expected} ប៉ុន្តែទទួលបាន ${s}`:`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${i} ប៉ុន្តែទទួលបាន ${s}`}case"invalid_value":return t.values.length===1?`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${S(t.values[0])}`:`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`ធំពេក៖ ត្រូវការ ${t.origin??"តម្លៃ"} ${i} ${t.maximum.toString()} ${a.unit??"ធាតុ"}`:`ធំពេក៖ ត្រូវការ ${t.origin??"តម្លៃ"} ${i} ${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`តូចពេក៖ ត្រូវការ ${t.origin} ${i} ${t.minimum.toString()} ${a.unit}`:`តូចពេក៖ ត្រូវការ ${t.origin} ${i} ${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${i.prefix}"`:i.format==="ends_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${i.suffix}"`:i.format==="includes"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${i.includes}"`:i.format==="regex"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${i.pattern}`:`មិនត្រឹមត្រូវ៖ ${r[i.format]??t.format}`}case"not_multiple_of":return`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${t.divisor}`;case"unrecognized_keys":return`រកឃើញសោមិនស្គាល់៖ ${y(t.keys,", ")}`;case"invalid_key":return`សោមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;case"invalid_union":return"ទិន្នន័យមិនត្រឹមត្រូវ";case"invalid_element":return`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;default:return"ទិន្នន័យមិនត្រឹមត្រូវ"}}};function Gr(){return{localeError:ey()}}function Gp(){return Gr()}var ty=()=>{let e={string:{unit:"문자",verb:"to have"},file:{unit:"바이트",verb:"to have"},array:{unit:"개",verb:"to have"},set:{unit:"개",verb:"to have"}};function n(t){return e[t]??null}let r={regex:"입력",email:"이메일 주소",url:"URL",emoji:"이모지",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 날짜시간",date:"ISO 날짜",time:"ISO 시간",duration:"ISO 기간",ipv4:"IPv4 주소",ipv6:"IPv6 주소",cidrv4:"IPv4 범위",cidrv6:"IPv6 범위",base64:"base64 인코딩 문자열",base64url:"base64url 인코딩 문자열",json_string:"JSON 문자열",e164:"E.164 번호",jwt:"JWT",template_literal:"입력"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`잘못된 입력: 예상 타입은 instanceof ${t.expected}, 받은 타입은 ${s}입니다`:`잘못된 입력: 예상 타입은 ${i}, 받은 타입은 ${s}입니다`}case"invalid_value":return t.values.length===1?`잘못된 입력: 값은 ${S(t.values[0])} 이어야 합니다`:`잘못된 옵션: ${y(t.values,"또는 ")} 중 하나여야 합니다`;case"too_big":{let i=t.inclusive?"이하":"미만",a=i==="미만"?"이어야 합니다":"여야 합니다",s=n(t.origin),l=s?.unit??"요소";return s?`${t.origin??"값"}이 너무 큽니다: ${t.maximum.toString()}${l} ${i}${a}`:`${t.origin??"값"}이 너무 큽니다: ${t.maximum.toString()} ${i}${a}`}case"too_small":{let i=t.inclusive?"이상":"초과",a=i==="이상"?"이어야 합니다":"여야 합니다",s=n(t.origin),l=s?.unit??"요소";return s?`${t.origin??"값"}이 너무 작습니다: ${t.minimum.toString()}${l} ${i}${a}`:`${t.origin??"값"}이 너무 작습니다: ${t.minimum.toString()} ${i}${a}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`잘못된 문자열: "${i.prefix}"(으)로 시작해야 합니다`:i.format==="ends_with"?`잘못된 문자열: "${i.suffix}"(으)로 끝나야 합니다`:i.format==="includes"?`잘못된 문자열: "${i.includes}"을(를) 포함해야 합니다`:i.format==="regex"?`잘못된 문자열: 정규식 ${i.pattern} 패턴과 일치해야 합니다`:`잘못된 ${r[i.format]??t.format}`}case"not_multiple_of":return`잘못된 숫자: ${t.divisor}의 배수여야 합니다`;case"unrecognized_keys":return`인식할 수 없는 키: ${y(t.keys,", ")}`;case"invalid_key":return`잘못된 키: ${t.origin}`;case"invalid_union":return"잘못된 입력";case"invalid_element":return`잘못된 값: ${t.origin}`;default:return"잘못된 입력"}}};function Xp(){return{localeError:ty()}}var qn=e=>e.charAt(0).toUpperCase()+e.slice(1);function Qp(e){let n=Math.abs(e),r=n%10,o=n%100;return o>=11&&o<=19||r===0?"many":r===1?"one":"few"}var ny=()=>{let e={string:{unit:{one:"simbolis",few:"simboliai",many:"simbolių"},verb:{smaller:{inclusive:"turi būti ne ilgesnė kaip",notInclusive:"turi būti trumpesnė kaip"},bigger:{inclusive:"turi būti ne trumpesnė kaip",notInclusive:"turi būti ilgesnė kaip"}}},file:{unit:{one:"baitas",few:"baitai",many:"baitų"},verb:{smaller:{inclusive:"turi būti ne didesnis kaip",notInclusive:"turi būti mažesnis kaip"},bigger:{inclusive:"turi būti ne mažesnis kaip",notInclusive:"turi būti didesnis kaip"}}},array:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}},set:{unit:{one:"elementą",few:"elementus",many:"elementų"},verb:{smaller:{inclusive:"turi turėti ne daugiau kaip",notInclusive:"turi turėti mažiau kaip"},bigger:{inclusive:"turi turėti ne mažiau kaip",notInclusive:"turi turėti daugiau kaip"}}}};function n(t,i,a,s){let l=e[t]??null;return l===null?l:{unit:l.unit[i],verb:l.verb[s][a?"inclusive":"notInclusive"]}}let r={regex:"įvestis",email:"el. pašto adresas",url:"URL",emoji:"jaustukas",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO data ir laikas",date:"ISO data",time:"ISO laikas",duration:"ISO trukmė",ipv4:"IPv4 adresas",ipv6:"IPv6 adresas",cidrv4:"IPv4 tinklo prefiksas (CIDR)",cidrv6:"IPv6 tinklo prefiksas (CIDR)",base64:"base64 užkoduota eilutė",base64url:"base64url užkoduota eilutė",json_string:"JSON eilutė",e164:"E.164 numeris",jwt:"JWT",template_literal:"įvestis"},o={nan:"NaN",number:"skaičius",bigint:"sveikasis skaičius",string:"eilutė",boolean:"loginė reikšmė",undefined:"neapibrėžta reikšmė",function:"funkcija",symbol:"simbolis",array:"masyvas",object:"objektas",null:"nulinė reikšmė"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Gautas tipas ${s}, o tikėtasi - instanceof ${t.expected}`:`Gautas tipas ${s}, o tikėtasi - ${i}`}case"invalid_value":return t.values.length===1?`Privalo būti ${S(t.values[0])}`:`Privalo būti vienas iš ${y(t.values,"|")} pasirinkimų`;case"too_big":{let i=o[t.origin]??t.origin,a=n(t.origin,Qp(Number(t.maximum)),t.inclusive??!1,"smaller");if(a?.verb)return`${qn(i??t.origin??"reikšmė")} ${a.verb} ${t.maximum.toString()} ${a.unit??"elementų"}`;let s=t.inclusive?"ne didesnis kaip":"mažesnis kaip";return`${qn(i??t.origin??"reikšmė")} turi būti ${s} ${t.maximum.toString()} ${a?.unit}`}case"too_small":{let i=o[t.origin]??t.origin,a=n(t.origin,Qp(Number(t.minimum)),t.inclusive??!1,"bigger");if(a?.verb)return`${qn(i??t.origin??"reikšmė")} ${a.verb} ${t.minimum.toString()} ${a.unit??"elementų"}`;let s=t.inclusive?"ne mažesnis kaip":"didesnis kaip";return`${qn(i??t.origin??"reikšmė")} turi būti ${s} ${t.minimum.toString()} ${a?.unit}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Eilutė privalo prasidėti "${i.prefix}"`:i.format==="ends_with"?`Eilutė privalo pasibaigti "${i.suffix}"`:i.format==="includes"?`Eilutė privalo įtraukti "${i.includes}"`:i.format==="regex"?`Eilutė privalo atitikti ${i.pattern}`:`Neteisingas ${r[i.format]??t.format}`}case"not_multiple_of":return`Skaičius privalo būti ${t.divisor} kartotinis.`;case"unrecognized_keys":return`Neatpažint${t.keys.length>1?"i":"as"} rakt${t.keys.length>1?"ai":"as"}: ${y(t.keys,", ")}`;case"invalid_key":return"Rastas klaidingas raktas";case"invalid_union":return"Klaidinga įvestis";case"invalid_element":{let i=o[t.origin]??t.origin;return`${qn(i??t.origin??"reikšmė")} turi klaidingą įvestį`}default:return"Klaidinga įvestis"}}};function Kp(){return{localeError:ny()}}var ry=()=>{let e={string:{unit:"знаци",verb:"да имаат"},file:{unit:"бајти",verb:"да имаат"},array:{unit:"ставки",verb:"да имаат"},set:{unit:"ставки",verb:"да имаат"}};function n(t){return e[t]??null}let r={regex:"внес",email:"адреса на е-пошта",url:"URL",emoji:"емоџи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO датум и време",date:"ISO датум",time:"ISO време",duration:"ISO времетраење",ipv4:"IPv4 адреса",ipv6:"IPv6 адреса",cidrv4:"IPv4 опсег",cidrv6:"IPv6 опсег",base64:"base64-енкодирана низа",base64url:"base64url-енкодирана низа",json_string:"JSON низа",e164:"E.164 број",jwt:"JWT",template_literal:"внес"},o={nan:"NaN",number:"број",array:"низа"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Грешен внес: се очекува instanceof ${t.expected}, примено ${s}`:`Грешен внес: се очекува ${i}, примено ${s}`}case"invalid_value":return t.values.length===1?`Invalid input: expected ${S(t.values[0])}`:`Грешана опција: се очекува една ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Премногу голем: се очекува ${t.origin??"вредноста"} да има ${i}${t.maximum.toString()} ${a.unit??"елементи"}`:`Премногу голем: се очекува ${t.origin??"вредноста"} да биде ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Премногу мал: се очекува ${t.origin} да има ${i}${t.minimum.toString()} ${a.unit}`:`Премногу мал: се очекува ${t.origin} да биде ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Неважечка низа: мора да започнува со "${i.prefix}"`:i.format==="ends_with"?`Неважечка низа: мора да завршува со "${i.suffix}"`:i.format==="includes"?`Неважечка низа: мора да вклучува "${i.includes}"`:i.format==="regex"?`Неважечка низа: мора да одгоара на патернот ${i.pattern}`:`Invalid ${r[i.format]??t.format}`}case"not_multiple_of":return`Грешен број: мора да биде делив со ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${y(t.keys,", ")}`;case"invalid_key":return`Грешен клуч во ${t.origin}`;case"invalid_union":return"Грешен внес";case"invalid_element":return`Грешна вредност во ${t.origin}`;default:return"Грешен внес"}}};function Yp(){return{localeError:ry()}}var oy=()=>{let e={string:{unit:"aksara",verb:"mempunyai"},file:{unit:"bait",verb:"mempunyai"},array:{unit:"elemen",verb:"mempunyai"},set:{unit:"elemen",verb:"mempunyai"}};function n(t){return e[t]??null}let r={regex:"input",email:"alamat e-mel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tarikh masa ISO",date:"tarikh ISO",time:"masa ISO",duration:"tempoh ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"julat IPv4",cidrv6:"julat IPv6",base64:"string dikodkan base64",base64url:"string dikodkan base64url",json_string:"string JSON",e164:"nombor E.164",jwt:"JWT",template_literal:"input"},o={nan:"NaN",number:"nombor"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Input tidak sah: dijangka instanceof ${t.expected}, diterima ${s}`:`Input tidak sah: dijangka ${i}, diterima ${s}`}case"invalid_value":return t.values.length===1?`Input tidak sah: dijangka ${S(t.values[0])}`:`Pilihan tidak sah: dijangka salah satu daripada ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Terlalu besar: dijangka ${t.origin??"nilai"} ${a.verb} ${i}${t.maximum.toString()} ${a.unit??"elemen"}`:`Terlalu besar: dijangka ${t.origin??"nilai"} adalah ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Terlalu kecil: dijangka ${t.origin} ${a.verb} ${i}${t.minimum.toString()} ${a.unit}`:`Terlalu kecil: dijangka ${t.origin} adalah ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`String tidak sah: mesti bermula dengan "${i.prefix}"`:i.format==="ends_with"?`String tidak sah: mesti berakhir dengan "${i.suffix}"`:i.format==="includes"?`String tidak sah: mesti mengandungi "${i.includes}"`:i.format==="regex"?`String tidak sah: mesti sepadan dengan corak ${i.pattern}`:`${r[i.format]??t.format} tidak sah`}case"not_multiple_of":return`Nombor tidak sah: perlu gandaan ${t.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali: ${y(t.keys,", ")}`;case"invalid_key":return`Kunci tidak sah dalam ${t.origin}`;case"invalid_union":return"Input tidak sah";case"invalid_element":return`Nilai tidak sah dalam ${t.origin}`;default:return"Input tidak sah"}}};function em(){return{localeError:oy()}}var iy=()=>{let e={string:{unit:"tekens",verb:"heeft"},file:{unit:"bytes",verb:"heeft"},array:{unit:"elementen",verb:"heeft"},set:{unit:"elementen",verb:"heeft"}};function n(t){return e[t]??null}let r={regex:"invoer",email:"emailadres",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum en tijd",date:"ISO datum",time:"ISO tijd",duration:"ISO duur",ipv4:"IPv4-adres",ipv6:"IPv6-adres",cidrv4:"IPv4-bereik",cidrv6:"IPv6-bereik",base64:"base64-gecodeerde tekst",base64url:"base64 URL-gecodeerde tekst",json_string:"JSON string",e164:"E.164-nummer",jwt:"JWT",template_literal:"invoer"},o={nan:"NaN",number:"getal"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Ongeldige invoer: verwacht instanceof ${t.expected}, ontving ${s}`:`Ongeldige invoer: verwacht ${i}, ontving ${s}`}case"invalid_value":return t.values.length===1?`Ongeldige invoer: verwacht ${S(t.values[0])}`:`Ongeldige optie: verwacht één van ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin),s=t.origin==="date"?"laat":t.origin==="string"?"lang":"groot";return a?`Te ${s}: verwacht dat ${t.origin??"waarde"} ${i}${t.maximum.toString()} ${a.unit??"elementen"} ${a.verb}`:`Te ${s}: verwacht dat ${t.origin??"waarde"} ${i}${t.maximum.toString()} is`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin),s=t.origin==="date"?"vroeg":t.origin==="string"?"kort":"klein";return a?`Te ${s}: verwacht dat ${t.origin} ${i}${t.minimum.toString()} ${a.unit} ${a.verb}`:`Te ${s}: verwacht dat ${t.origin} ${i}${t.minimum.toString()} is`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Ongeldige tekst: moet met "${i.prefix}" beginnen`:i.format==="ends_with"?`Ongeldige tekst: moet op "${i.suffix}" eindigen`:i.format==="includes"?`Ongeldige tekst: moet "${i.includes}" bevatten`:i.format==="regex"?`Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}`:`Ongeldig: ${r[i.format]??t.format}`}case"not_multiple_of":return`Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;case"unrecognized_keys":return`Onbekende key${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Ongeldige key in ${t.origin}`;case"invalid_union":return"Ongeldige invoer";case"invalid_element":return`Ongeldige waarde in ${t.origin}`;default:return"Ongeldige invoer"}}};function tm(){return{localeError:iy()}}var ay=()=>{let e={string:{unit:"tegn",verb:"å ha"},file:{unit:"bytes",verb:"å ha"},array:{unit:"elementer",verb:"å inneholde"},set:{unit:"elementer",verb:"å inneholde"}};function n(t){return e[t]??null}let r={regex:"input",email:"e-postadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslett",date:"ISO-dato",time:"ISO-klokkeslett",duration:"ISO-varighet",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spekter",cidrv6:"IPv6-spekter",base64:"base64-enkodet streng",base64url:"base64url-enkodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"},o={nan:"NaN",number:"tall",array:"liste"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Ugyldig input: forventet instanceof ${t.expected}, fikk ${s}`:`Ugyldig input: forventet ${i}, fikk ${s}`}case"invalid_value":return t.values.length===1?`Ugyldig verdi: forventet ${S(t.values[0])}`:`Ugyldig valg: forventet en av ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`For stor(t): forventet ${t.origin??"value"} til å ha ${i}${t.maximum.toString()} ${a.unit??"elementer"}`:`For stor(t): forventet ${t.origin??"value"} til å ha ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`For lite(n): forventet ${t.origin} til å ha ${i}${t.minimum.toString()} ${a.unit}`:`For lite(n): forventet ${t.origin} til å ha ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Ugyldig streng: må starte med "${i.prefix}"`:i.format==="ends_with"?`Ugyldig streng: må ende med "${i.suffix}"`:i.format==="includes"?`Ugyldig streng: må inneholde "${i.includes}"`:i.format==="regex"?`Ugyldig streng: må matche mønsteret ${i.pattern}`:`Ugyldig ${r[i.format]??t.format}`}case"not_multiple_of":return`Ugyldig tall: må være et multiplum av ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${y(t.keys,", ")}`;case"invalid_key":return`Ugyldig nøkkel i ${t.origin}`;case"invalid_union":return"Ugyldig input";case"invalid_element":return`Ugyldig verdi i ${t.origin}`;default:return"Ugyldig input"}}};function nm(){return{localeError:ay()}}var sy=()=>{let e={string:{unit:"harf",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"unsur",verb:"olmalıdır"},set:{unit:"unsur",verb:"olmalıdır"}};function n(t){return e[t]??null}let r={regex:"giren",email:"epostagâh",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO hengâmı",date:"ISO tarihi",time:"ISO zamanı",duration:"ISO müddeti",ipv4:"IPv4 nişânı",ipv6:"IPv6 nişânı",cidrv4:"IPv4 menzili",cidrv6:"IPv6 menzili",base64:"base64-şifreli metin",base64url:"base64url-şifreli metin",json_string:"JSON metin",e164:"E.164 sayısı",jwt:"JWT",template_literal:"giren"},o={nan:"NaN",number:"numara",array:"saf",null:"gayb"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Fâsit giren: umulan instanceof ${t.expected}, alınan ${s}`:`Fâsit giren: umulan ${i}, alınan ${s}`}case"invalid_value":return t.values.length===1?`Fâsit giren: umulan ${S(t.values[0])}`:`Fâsit tercih: mûteberler ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Fazla büyük: ${t.origin??"value"}, ${i}${t.maximum.toString()} ${a.unit??"elements"} sahip olmalıydı.`:`Fazla büyük: ${t.origin??"value"}, ${i}${t.maximum.toString()} olmalıydı.`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Fazla küçük: ${t.origin}, ${i}${t.minimum.toString()} ${a.unit} sahip olmalıydı.`:`Fazla küçük: ${t.origin}, ${i}${t.minimum.toString()} olmalıydı.`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Fâsit metin: "${i.prefix}" ile başlamalı.`:i.format==="ends_with"?`Fâsit metin: "${i.suffix}" ile bitmeli.`:i.format==="includes"?`Fâsit metin: "${i.includes}" ihtivâ etmeli.`:i.format==="regex"?`Fâsit metin: ${i.pattern} nakşına uymalı.`:`Fâsit ${r[i.format]??t.format}`}case"not_multiple_of":return`Fâsit sayı: ${t.divisor} katı olmalıydı.`;case"unrecognized_keys":return`Tanınmayan anahtar ${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`${t.origin} için tanınmayan anahtar var.`;case"invalid_union":return"Giren tanınamadı.";case"invalid_element":return`${t.origin} için tanınmayan kıymet var.`;default:return"Kıymet tanınamadı."}}};function rm(){return{localeError:sy()}}var ly=()=>{let e={string:{unit:"توکي",verb:"ولري"},file:{unit:"بایټس",verb:"ولري"},array:{unit:"توکي",verb:"ولري"},set:{unit:"توکي",verb:"ولري"}};function n(t){return e[t]??null}let r={regex:"ورودي",email:"بریښنالیک",url:"یو آر ال",emoji:"ایموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"نیټه او وخت",date:"نېټه",time:"وخت",duration:"موده",ipv4:"د IPv4 پته",ipv6:"د IPv6 پته",cidrv4:"د IPv4 ساحه",cidrv6:"د IPv6 ساحه",base64:"base64-encoded متن",base64url:"base64url-encoded متن",json_string:"JSON متن",e164:"د E.164 شمېره",jwt:"JWT",template_literal:"ورودي"},o={nan:"NaN",number:"عدد",array:"ارې"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`ناسم ورودي: باید instanceof ${t.expected} وای, مګر ${s} ترلاسه شو`:`ناسم ورودي: باید ${i} وای, مګر ${s} ترلاسه شو`}case"invalid_value":return t.values.length===1?`ناسم ورودي: باید ${S(t.values[0])} وای`:`ناسم انتخاب: باید یو له ${y(t.values,"|")} څخه وای`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`ډیر لوی: ${t.origin??"ارزښت"} باید ${i}${t.maximum.toString()} ${a.unit??"عنصرونه"} ولري`:`ډیر لوی: ${t.origin??"ارزښت"} باید ${i}${t.maximum.toString()} وي`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`ډیر کوچنی: ${t.origin} باید ${i}${t.minimum.toString()} ${a.unit} ولري`:`ډیر کوچنی: ${t.origin} باید ${i}${t.minimum.toString()} وي`}case"invalid_format":{let i=t;return i.format==="starts_with"?`ناسم متن: باید د "${i.prefix}" سره پیل شي`:i.format==="ends_with"?`ناسم متن: باید د "${i.suffix}" سره پای ته ورسيږي`:i.format==="includes"?`ناسم متن: باید "${i.includes}" ولري`:i.format==="regex"?`ناسم متن: باید د ${i.pattern} سره مطابقت ولري`:`${r[i.format]??t.format} ناسم دی`}case"not_multiple_of":return`ناسم عدد: باید د ${t.divisor} مضرب وي`;case"unrecognized_keys":return`ناسم ${t.keys.length>1?"کلیډونه":"کلیډ"}: ${y(t.keys,", ")}`;case"invalid_key":return`ناسم کلیډ په ${t.origin} کې`;case"invalid_union":return"ناسمه ورودي";case"invalid_element":return`ناسم عنصر په ${t.origin} کې`;default:return"ناسمه ورودي"}}};function om(){return{localeError:ly()}}var cy=()=>{let e={string:{unit:"znaków",verb:"mieć"},file:{unit:"bajtów",verb:"mieć"},array:{unit:"elementów",verb:"mieć"},set:{unit:"elementów",verb:"mieć"}};function n(t){return e[t]??null}let r={regex:"wyrażenie",email:"adres email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i godzina w formacie ISO",date:"data w formacie ISO",time:"godzina w formacie ISO",duration:"czas trwania ISO",ipv4:"adres IPv4",ipv6:"adres IPv6",cidrv4:"zakres IPv4",cidrv6:"zakres IPv6",base64:"ciąg znaków zakodowany w formacie base64",base64url:"ciąg znaków zakodowany w formacie base64url",json_string:"ciąg znaków w formacie JSON",e164:"liczba E.164",jwt:"JWT",template_literal:"wejście"},o={nan:"NaN",number:"liczba",array:"tablica"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Nieprawidłowe dane wejściowe: oczekiwano instanceof ${t.expected}, otrzymano ${s}`:`Nieprawidłowe dane wejściowe: oczekiwano ${i}, otrzymano ${s}`}case"invalid_value":return t.values.length===1?`Nieprawidłowe dane wejściowe: oczekiwano ${S(t.values[0])}`:`Nieprawidłowa opcja: oczekiwano jednej z wartości ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Za duża wartość: oczekiwano, że ${t.origin??"wartość"} będzie mieć ${i}${t.maximum.toString()} ${a.unit??"elementów"}`:`Zbyt duż(y/a/e): oczekiwano, że ${t.origin??"wartość"} będzie wynosić ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Za mała wartość: oczekiwano, że ${t.origin??"wartość"} będzie mieć ${i}${t.minimum.toString()} ${a.unit??"elementów"}`:`Zbyt mał(y/a/e): oczekiwano, że ${t.origin??"wartość"} będzie wynosić ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Nieprawidłowy ciąg znaków: musi zaczynać się od "${i.prefix}"`:i.format==="ends_with"?`Nieprawidłowy ciąg znaków: musi kończyć się na "${i.suffix}"`:i.format==="includes"?`Nieprawidłowy ciąg znaków: musi zawierać "${i.includes}"`:i.format==="regex"?`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${i.pattern}`:`Nieprawidłow(y/a/e) ${r[i.format]??t.format}`}case"not_multiple_of":return`Nieprawidłowa liczba: musi być wielokrotnością ${t.divisor}`;case"unrecognized_keys":return`Nierozpoznane klucze${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Nieprawidłowy klucz w ${t.origin}`;case"invalid_union":return"Nieprawidłowe dane wejściowe";case"invalid_element":return`Nieprawidłowa wartość w ${t.origin}`;default:return"Nieprawidłowe dane wejściowe"}}};function im(){return{localeError:cy()}}var uy=()=>{let e={string:{unit:"caracteres",verb:"ter"},file:{unit:"bytes",verb:"ter"},array:{unit:"itens",verb:"ter"},set:{unit:"itens",verb:"ter"}};function n(t){return e[t]??null}let r={regex:"padrão",email:"endereço de e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e hora ISO",date:"data ISO",time:"hora ISO",duration:"duração ISO",ipv4:"endereço IPv4",ipv6:"endereço IPv6",cidrv4:"faixa de IPv4",cidrv6:"faixa de IPv6",base64:"texto codificado em base64",base64url:"URL codificada em base64",json_string:"texto JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"},o={nan:"NaN",number:"número",null:"nulo"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Tipo inválido: esperado instanceof ${t.expected}, recebido ${s}`:`Tipo inválido: esperado ${i}, recebido ${s}`}case"invalid_value":return t.values.length===1?`Entrada inválida: esperado ${S(t.values[0])}`:`Opção inválida: esperada uma das ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Muito grande: esperado que ${t.origin??"valor"} tivesse ${i}${t.maximum.toString()} ${a.unit??"elementos"}`:`Muito grande: esperado que ${t.origin??"valor"} fosse ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Muito pequeno: esperado que ${t.origin} tivesse ${i}${t.minimum.toString()} ${a.unit}`:`Muito pequeno: esperado que ${t.origin} fosse ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Texto inválido: deve começar com "${i.prefix}"`:i.format==="ends_with"?`Texto inválido: deve terminar com "${i.suffix}"`:i.format==="includes"?`Texto inválido: deve incluir "${i.includes}"`:i.format==="regex"?`Texto inválido: deve corresponder ao padrão ${i.pattern}`:`${r[i.format]??t.format} inválido`}case"not_multiple_of":return`Número inválido: deve ser múltiplo de ${t.divisor}`;case"unrecognized_keys":return`Chave${t.keys.length>1?"s":""} desconhecida${t.keys.length>1?"s":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Chave inválida em ${t.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido em ${t.origin}`;default:return"Campo inválido"}}};function am(){return{localeError:uy()}}var dy=()=>{let e={string:{unit:"caractere",verb:"să aibă"},file:{unit:"octeți",verb:"să aibă"},array:{unit:"elemente",verb:"să aibă"},set:{unit:"elemente",verb:"să aibă"},map:{unit:"intrări",verb:"să aibă"}};function n(t){return e[t]??null}let r={regex:"intrare",email:"adresă de email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"dată și oră ISO",date:"dată ISO",time:"oră ISO",duration:"durată ISO",ipv4:"adresă IPv4",ipv6:"adresă IPv6",mac:"adresă MAC",cidrv4:"interval IPv4",cidrv6:"interval IPv6",base64:"șir codat base64",base64url:"șir codat base64url",json_string:"șir JSON",e164:"număr E.164",jwt:"JWT",template_literal:"intrare"},o={nan:"NaN",string:"șir",number:"număr",boolean:"boolean",function:"funcție",array:"matrice",object:"obiect",undefined:"nedefinit",symbol:"simbol",bigint:"număr mare",void:"void",never:"never",map:"hartă",set:"set"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return`Intrare invalidă: așteptat ${i}, primit ${s}`}case"invalid_value":return t.values.length===1?`Intrare invalidă: așteptat ${S(t.values[0])}`:`Opțiune invalidă: așteptat una dintre ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Prea mare: așteptat ca ${t.origin??"valoarea"} ${a.verb} ${i}${t.maximum.toString()} ${a.unit??"elemente"}`:`Prea mare: așteptat ca ${t.origin??"valoarea"} să fie ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Prea mic: așteptat ca ${t.origin} ${a.verb} ${i}${t.minimum.toString()} ${a.unit}`:`Prea mic: așteptat ca ${t.origin} să fie ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Șir invalid: trebuie să înceapă cu "${i.prefix}"`:i.format==="ends_with"?`Șir invalid: trebuie să se termine cu "${i.suffix}"`:i.format==="includes"?`Șir invalid: trebuie să includă "${i.includes}"`:i.format==="regex"?`Șir invalid: trebuie să se potrivească cu modelul ${i.pattern}`:`Format invalid: ${r[i.format]??t.format}`}case"not_multiple_of":return`Număr invalid: trebuie să fie multiplu de ${t.divisor}`;case"unrecognized_keys":return`Chei nerecunoscute: ${y(t.keys,", ")}`;case"invalid_key":return`Cheie invalidă în ${t.origin}`;case"invalid_union":return"Intrare invalidă";case"invalid_element":return`Valoare invalidă în ${t.origin}`;default:return"Intrare invalidă"}}};function sm(){return{localeError:dy()}}function lm(e,n,r,o){let t=Math.abs(e),i=t%10,a=t%100;return a>=11&&a<=19?o:i===1?n:i>=2&&i<=4?r:o}var py=()=>{let e={string:{unit:{one:"символ",few:"символа",many:"символов"},verb:"иметь"},file:{unit:{one:"байт",few:"байта",many:"байт"},verb:"иметь"},array:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"},set:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"}};function n(t){return e[t]??null}let r={regex:"ввод",email:"email адрес",url:"URL",emoji:"эмодзи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата и время",date:"ISO дата",time:"ISO время",duration:"ISO длительность",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"строка в формате base64",base64url:"строка в формате base64url",json_string:"JSON строка",e164:"номер E.164",jwt:"JWT",template_literal:"ввод"},o={nan:"NaN",number:"число",array:"массив"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Неверный ввод: ожидалось instanceof ${t.expected}, получено ${s}`:`Неверный ввод: ожидалось ${i}, получено ${s}`}case"invalid_value":return t.values.length===1?`Неверный ввод: ожидалось ${S(t.values[0])}`:`Неверный вариант: ожидалось одно из ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);if(a){let s=Number(t.maximum),l=lm(s,a.unit.one,a.unit.few,a.unit.many);return`Слишком большое значение: ожидалось, что ${t.origin??"значение"} будет иметь ${i}${t.maximum.toString()} ${l}`}return`Слишком большое значение: ожидалось, что ${t.origin??"значение"} будет ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);if(a){let s=Number(t.minimum),l=lm(s,a.unit.one,a.unit.few,a.unit.many);return`Слишком маленькое значение: ожидалось, что ${t.origin} будет иметь ${i}${t.minimum.toString()} ${l}`}return`Слишком маленькое значение: ожидалось, что ${t.origin} будет ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Неверная строка: должна начинаться с "${i.prefix}"`:i.format==="ends_with"?`Неверная строка: должна заканчиваться на "${i.suffix}"`:i.format==="includes"?`Неверная строка: должна содержать "${i.includes}"`:i.format==="regex"?`Неверная строка: должна соответствовать шаблону ${i.pattern}`:`Неверный ${r[i.format]??t.format}`}case"not_multiple_of":return`Неверное число: должно быть кратным ${t.divisor}`;case"unrecognized_keys":return`Нераспознанн${t.keys.length>1?"ые":"ый"} ключ${t.keys.length>1?"и":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Неверный ключ в ${t.origin}`;case"invalid_union":return"Неверные входные данные";case"invalid_element":return`Неверное значение в ${t.origin}`;default:return"Неверные входные данные"}}};function cm(){return{localeError:py()}}var my=()=>{let e={string:{unit:"znakov",verb:"imeti"},file:{unit:"bajtov",verb:"imeti"},array:{unit:"elementov",verb:"imeti"},set:{unit:"elementov",verb:"imeti"}};function n(t){return e[t]??null}let r={regex:"vnos",email:"e-poštni naslov",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum in čas",date:"ISO datum",time:"ISO čas",duration:"ISO trajanje",ipv4:"IPv4 naslov",ipv6:"IPv6 naslov",cidrv4:"obseg IPv4",cidrv6:"obseg IPv6",base64:"base64 kodiran niz",base64url:"base64url kodiran niz",json_string:"JSON niz",e164:"E.164 številka",jwt:"JWT",template_literal:"vnos"},o={nan:"NaN",number:"število",array:"tabela"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Neveljaven vnos: pričakovano instanceof ${t.expected}, prejeto ${s}`:`Neveljaven vnos: pričakovano ${i}, prejeto ${s}`}case"invalid_value":return t.values.length===1?`Neveljaven vnos: pričakovano ${S(t.values[0])}`:`Neveljavna možnost: pričakovano eno izmed ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Preveliko: pričakovano, da bo ${t.origin??"vrednost"} imelo ${i}${t.maximum.toString()} ${a.unit??"elementov"}`:`Preveliko: pričakovano, da bo ${t.origin??"vrednost"} ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Premajhno: pričakovano, da bo ${t.origin} imelo ${i}${t.minimum.toString()} ${a.unit}`:`Premajhno: pričakovano, da bo ${t.origin} ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Neveljaven niz: mora se začeti z "${i.prefix}"`:i.format==="ends_with"?`Neveljaven niz: mora se končati z "${i.suffix}"`:i.format==="includes"?`Neveljaven niz: mora vsebovati "${i.includes}"`:i.format==="regex"?`Neveljaven niz: mora ustrezati vzorcu ${i.pattern}`:`Neveljaven ${r[i.format]??t.format}`}case"not_multiple_of":return`Neveljavno število: mora biti večkratnik ${t.divisor}`;case"unrecognized_keys":return`Neprepoznan${t.keys.length>1?"i ključi":" ključ"}: ${y(t.keys,", ")}`;case"invalid_key":return`Neveljaven ključ v ${t.origin}`;case"invalid_union":return"Neveljaven vnos";case"invalid_element":return`Neveljavna vrednost v ${t.origin}`;default:return"Neveljaven vnos"}}};function um(){return{localeError:my()}}var fy=()=>{let e={string:{unit:"tecken",verb:"att ha"},file:{unit:"bytes",verb:"att ha"},array:{unit:"objekt",verb:"att innehålla"},set:{unit:"objekt",verb:"att innehålla"}};function n(t){return e[t]??null}let r={regex:"reguljärt uttryck",email:"e-postadress",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datum och tid",date:"ISO-datum",time:"ISO-tid",duration:"ISO-varaktighet",ipv4:"IPv4-intervall",ipv6:"IPv6-intervall",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodad sträng",base64url:"base64url-kodad sträng",json_string:"JSON-sträng",e164:"E.164-nummer",jwt:"JWT",template_literal:"mall-literal"},o={nan:"NaN",number:"antal",array:"lista"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Ogiltig inmatning: förväntat instanceof ${t.expected}, fick ${s}`:`Ogiltig inmatning: förväntat ${i}, fick ${s}`}case"invalid_value":return t.values.length===1?`Ogiltig inmatning: förväntat ${S(t.values[0])}`:`Ogiltigt val: förväntade en av ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`För stor(t): förväntade ${t.origin??"värdet"} att ha ${i}${t.maximum.toString()} ${a.unit??"element"}`:`För stor(t): förväntat ${t.origin??"värdet"} att ha ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`För lite(t): förväntade ${t.origin??"värdet"} att ha ${i}${t.minimum.toString()} ${a.unit}`:`För lite(t): förväntade ${t.origin??"värdet"} att ha ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Ogiltig sträng: måste börja med "${i.prefix}"`:i.format==="ends_with"?`Ogiltig sträng: måste sluta med "${i.suffix}"`:i.format==="includes"?`Ogiltig sträng: måste innehålla "${i.includes}"`:i.format==="regex"?`Ogiltig sträng: måste matcha mönstret "${i.pattern}"`:`Ogiltig(t) ${r[i.format]??t.format}`}case"not_multiple_of":return`Ogiltigt tal: måste vara en multipel av ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${y(t.keys,", ")}`;case"invalid_key":return`Ogiltig nyckel i ${t.origin??"värdet"}`;case"invalid_union":return"Ogiltig input";case"invalid_element":return`Ogiltigt värde i ${t.origin??"värdet"}`;default:return"Ogiltig input"}}};function dm(){return{localeError:fy()}}var gy=()=>{let e={string:{unit:"எழுத்துக்கள்",verb:"கொண்டிருக்க வேண்டும்"},file:{unit:"பைட்டுகள்",verb:"கொண்டிருக்க வேண்டும்"},array:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"},set:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"}};function n(t){return e[t]??null}let r={regex:"உள்ளீடு",email:"மின்னஞ்சல் முகவரி",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO தேதி நேரம்",date:"ISO தேதி",time:"ISO நேரம்",duration:"ISO கால அளவு",ipv4:"IPv4 முகவரி",ipv6:"IPv6 முகவரி",cidrv4:"IPv4 வரம்பு",cidrv6:"IPv6 வரம்பு",base64:"base64-encoded சரம்",base64url:"base64url-encoded சரம்",json_string:"JSON சரம்",e164:"E.164 எண்",jwt:"JWT",template_literal:"input"},o={nan:"NaN",number:"எண்",array:"அணி",null:"வெறுமை"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${t.expected}, பெறப்பட்டது ${s}`:`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${i}, பெறப்பட்டது ${s}`}case"invalid_value":return t.values.length===1?`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${S(t.values[0])}`:`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${y(t.values,"|")} இல் ஒன்று`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin??"மதிப்பு"} ${i}${t.maximum.toString()} ${a.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`:`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin??"மதிப்பு"} ${i}${t.maximum.toString()} ஆக இருக்க வேண்டும்`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${i}${t.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்`:`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${i}${t.minimum.toString()} ஆக இருக்க வேண்டும்`}case"invalid_format":{let i=t;return i.format==="starts_with"?`தவறான சரம்: "${i.prefix}" இல் தொடங்க வேண்டும்`:i.format==="ends_with"?`தவறான சரம்: "${i.suffix}" இல் முடிவடைய வேண்டும்`:i.format==="includes"?`தவறான சரம்: "${i.includes}" ஐ உள்ளடக்க வேண்டும்`:i.format==="regex"?`தவறான சரம்: ${i.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`:`தவறான ${r[i.format]??t.format}`}case"not_multiple_of":return`தவறான எண்: ${t.divisor} இன் பலமாக இருக்க வேண்டும்`;case"unrecognized_keys":return`அடையாளம் தெரியாத விசை${t.keys.length>1?"கள்":""}: ${y(t.keys,", ")}`;case"invalid_key":return`${t.origin} இல் தவறான விசை`;case"invalid_union":return"தவறான உள்ளீடு";case"invalid_element":return`${t.origin} இல் தவறான மதிப்பு`;default:return"தவறான உள்ளீடு"}}};function pm(){return{localeError:gy()}}var vy=()=>{let e={string:{unit:"ตัวอักษร",verb:"ควรมี"},file:{unit:"ไบต์",verb:"ควรมี"},array:{unit:"รายการ",verb:"ควรมี"},set:{unit:"รายการ",verb:"ควรมี"}};function n(t){return e[t]??null}let r={regex:"ข้อมูลที่ป้อน",email:"ที่อยู่อีเมล",url:"URL",emoji:"อิโมจิ",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"วันที่เวลาแบบ ISO",date:"วันที่แบบ ISO",time:"เวลาแบบ ISO",duration:"ช่วงเวลาแบบ ISO",ipv4:"ที่อยู่ IPv4",ipv6:"ที่อยู่ IPv6",cidrv4:"ช่วง IP แบบ IPv4",cidrv6:"ช่วง IP แบบ IPv6",base64:"ข้อความแบบ Base64",base64url:"ข้อความแบบ Base64 สำหรับ URL",json_string:"ข้อความแบบ JSON",e164:"เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",jwt:"โทเคน JWT",template_literal:"ข้อมูลที่ป้อน"},o={nan:"NaN",number:"ตัวเลข",array:"อาร์เรย์ (Array)",null:"ไม่มีค่า (null)"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${t.expected} แต่ได้รับ ${s}`:`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${i} แต่ได้รับ ${s}`}case"invalid_value":return t.values.length===1?`ค่าไม่ถูกต้อง: ควรเป็น ${S(t.values[0])}`:`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"ไม่เกิน":"น้อยกว่า",a=n(t.origin);return a?`เกินกำหนด: ${t.origin??"ค่า"} ควรมี${i} ${t.maximum.toString()} ${a.unit??"รายการ"}`:`เกินกำหนด: ${t.origin??"ค่า"} ควรมี${i} ${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?"อย่างน้อย":"มากกว่า",a=n(t.origin);return a?`น้อยกว่ากำหนด: ${t.origin} ควรมี${i} ${t.minimum.toString()} ${a.unit}`:`น้อยกว่ากำหนด: ${t.origin} ควรมี${i} ${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${i.prefix}"`:i.format==="ends_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${i.suffix}"`:i.format==="includes"?`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${i.includes}" อยู่ในข้อความ`:i.format==="regex"?`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${i.pattern}`:`รูปแบบไม่ถูกต้อง: ${r[i.format]??t.format}`}case"not_multiple_of":return`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${t.divisor} ได้ลงตัว`;case"unrecognized_keys":return`พบคีย์ที่ไม่รู้จัก: ${y(t.keys,", ")}`;case"invalid_key":return`คีย์ไม่ถูกต้องใน ${t.origin}`;case"invalid_union":return"ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";case"invalid_element":return`ข้อมูลไม่ถูกต้องใน ${t.origin}`;default:return"ข้อมูลไม่ถูกต้อง"}}};function mm(){return{localeError:vy()}}var hy=()=>{let e={string:{unit:"karakter",verb:"olmalı"},file:{unit:"bayt",verb:"olmalı"},array:{unit:"öğe",verb:"olmalı"},set:{unit:"öğe",verb:"olmalı"}};function n(t){return e[t]??null}let r={regex:"girdi",email:"e-posta adresi",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO tarih ve saat",date:"ISO tarih",time:"ISO saat",duration:"ISO süre",ipv4:"IPv4 adresi",ipv6:"IPv6 adresi",cidrv4:"IPv4 aralığı",cidrv6:"IPv6 aralığı",base64:"base64 ile şifrelenmiş metin",base64url:"base64url ile şifrelenmiş metin",json_string:"JSON dizesi",e164:"E.164 sayısı",jwt:"JWT",template_literal:"Şablon dizesi"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Geçersiz değer: beklenen instanceof ${t.expected}, alınan ${s}`:`Geçersiz değer: beklenen ${i}, alınan ${s}`}case"invalid_value":return t.values.length===1?`Geçersiz değer: beklenen ${S(t.values[0])}`:`Geçersiz seçenek: aşağıdakilerden biri olmalı: ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Çok büyük: beklenen ${t.origin??"değer"} ${i}${t.maximum.toString()} ${a.unit??"öğe"}`:`Çok büyük: beklenen ${t.origin??"değer"} ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Çok küçük: beklenen ${t.origin} ${i}${t.minimum.toString()} ${a.unit}`:`Çok küçük: beklenen ${t.origin} ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Geçersiz metin: "${i.prefix}" ile başlamalı`:i.format==="ends_with"?`Geçersiz metin: "${i.suffix}" ile bitmeli`:i.format==="includes"?`Geçersiz metin: "${i.includes}" içermeli`:i.format==="regex"?`Geçersiz metin: ${i.pattern} desenine uymalı`:`Geçersiz ${r[i.format]??t.format}`}case"not_multiple_of":return`Geçersiz sayı: ${t.divisor} ile tam bölünebilmeli`;case"unrecognized_keys":return`Tanınmayan anahtar${t.keys.length>1?"lar":""}: ${y(t.keys,", ")}`;case"invalid_key":return`${t.origin} içinde geçersiz anahtar`;case"invalid_union":return"Geçersiz değer";case"invalid_element":return`${t.origin} içinde geçersiz değer`;default:return"Geçersiz değer"}}};function fm(){return{localeError:hy()}}var by=()=>{let e={string:{unit:"символів",verb:"матиме"},file:{unit:"байтів",verb:"матиме"},array:{unit:"елементів",verb:"матиме"},set:{unit:"елементів",verb:"матиме"}};function n(t){return e[t]??null}let r={regex:"вхідні дані",email:"адреса електронної пошти",url:"URL",emoji:"емодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"дата та час ISO",date:"дата ISO",time:"час ISO",duration:"тривалість ISO",ipv4:"адреса IPv4",ipv6:"адреса IPv6",cidrv4:"діапазон IPv4",cidrv6:"діапазон IPv6",base64:"рядок у кодуванні base64",base64url:"рядок у кодуванні base64url",json_string:"рядок JSON",e164:"номер E.164",jwt:"JWT",template_literal:"вхідні дані"},o={nan:"NaN",number:"число",array:"масив"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Неправильні вхідні дані: очікується instanceof ${t.expected}, отримано ${s}`:`Неправильні вхідні дані: очікується ${i}, отримано ${s}`}case"invalid_value":return t.values.length===1?`Неправильні вхідні дані: очікується ${S(t.values[0])}`:`Неправильна опція: очікується одне з ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Занадто велике: очікується, що ${t.origin??"значення"} ${a.verb} ${i}${t.maximum.toString()} ${a.unit??"елементів"}`:`Занадто велике: очікується, що ${t.origin??"значення"} буде ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Занадто мале: очікується, що ${t.origin} ${a.verb} ${i}${t.minimum.toString()} ${a.unit}`:`Занадто мале: очікується, що ${t.origin} буде ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Неправильний рядок: повинен починатися з "${i.prefix}"`:i.format==="ends_with"?`Неправильний рядок: повинен закінчуватися на "${i.suffix}"`:i.format==="includes"?`Неправильний рядок: повинен містити "${i.includes}"`:i.format==="regex"?`Неправильний рядок: повинен відповідати шаблону ${i.pattern}`:`Неправильний ${r[i.format]??t.format}`}case"not_multiple_of":return`Неправильне число: повинно бути кратним ${t.divisor}`;case"unrecognized_keys":return`Нерозпізнаний ключ${t.keys.length>1?"і":""}: ${y(t.keys,", ")}`;case"invalid_key":return`Неправильний ключ у ${t.origin}`;case"invalid_union":return"Неправильні вхідні дані";case"invalid_element":return`Неправильне значення у ${t.origin}`;default:return"Неправильні вхідні дані"}}};function Xr(){return{localeError:by()}}function gm(){return Xr()}var yy=()=>{let e={string:{unit:"حروف",verb:"ہونا"},file:{unit:"بائٹس",verb:"ہونا"},array:{unit:"آئٹمز",verb:"ہونا"},set:{unit:"آئٹمز",verb:"ہونا"}};function n(t){return e[t]??null}let r={regex:"ان پٹ",email:"ای میل ایڈریس",url:"یو آر ایل",emoji:"ایموجی",uuid:"یو یو آئی ڈی",uuidv4:"یو یو آئی ڈی وی 4",uuidv6:"یو یو آئی ڈی وی 6",nanoid:"نینو آئی ڈی",guid:"جی یو آئی ڈی",cuid:"سی یو آئی ڈی",cuid2:"سی یو آئی ڈی 2",ulid:"یو ایل آئی ڈی",xid:"ایکس آئی ڈی",ksuid:"کے ایس یو آئی ڈی",datetime:"آئی ایس او ڈیٹ ٹائم",date:"آئی ایس او تاریخ",time:"آئی ایس او وقت",duration:"آئی ایس او مدت",ipv4:"آئی پی وی 4 ایڈریس",ipv6:"آئی پی وی 6 ایڈریس",cidrv4:"آئی پی وی 4 رینج",cidrv6:"آئی پی وی 6 رینج",base64:"بیس 64 ان کوڈڈ سٹرنگ",base64url:"بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",json_string:"جے ایس او این سٹرنگ",e164:"ای 164 نمبر",jwt:"جے ڈبلیو ٹی",template_literal:"ان پٹ"},o={nan:"NaN",number:"نمبر",array:"آرے",null:"نل"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`غلط ان پٹ: instanceof ${t.expected} متوقع تھا، ${s} موصول ہوا`:`غلط ان پٹ: ${i} متوقع تھا، ${s} موصول ہوا`}case"invalid_value":return t.values.length===1?`غلط ان پٹ: ${S(t.values[0])} متوقع تھا`:`غلط آپشن: ${y(t.values,"|")} میں سے ایک متوقع تھا`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`بہت بڑا: ${t.origin??"ویلیو"} کے ${i}${t.maximum.toString()} ${a.unit??"عناصر"} ہونے متوقع تھے`:`بہت بڑا: ${t.origin??"ویلیو"} کا ${i}${t.maximum.toString()} ہونا متوقع تھا`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`بہت چھوٹا: ${t.origin} کے ${i}${t.minimum.toString()} ${a.unit} ہونے متوقع تھے`:`بہت چھوٹا: ${t.origin} کا ${i}${t.minimum.toString()} ہونا متوقع تھا`}case"invalid_format":{let i=t;return i.format==="starts_with"?`غلط سٹرنگ: "${i.prefix}" سے شروع ہونا چاہیے`:i.format==="ends_with"?`غلط سٹرنگ: "${i.suffix}" پر ختم ہونا چاہیے`:i.format==="includes"?`غلط سٹرنگ: "${i.includes}" شامل ہونا چاہیے`:i.format==="regex"?`غلط سٹرنگ: پیٹرن ${i.pattern} سے میچ ہونا چاہیے`:`غلط ${r[i.format]??t.format}`}case"not_multiple_of":return`غلط نمبر: ${t.divisor} کا مضاعف ہونا چاہیے`;case"unrecognized_keys":return`غیر تسلیم شدہ کی${t.keys.length>1?"ز":""}: ${y(t.keys,"، ")}`;case"invalid_key":return`${t.origin} میں غلط کی`;case"invalid_union":return"غلط ان پٹ";case"invalid_element":return`${t.origin} میں غلط ویلیو`;default:return"غلط ان پٹ"}}};function vm(){return{localeError:yy()}}var xy=()=>{let e={string:{unit:"belgi",verb:"bo‘lishi kerak"},file:{unit:"bayt",verb:"bo‘lishi kerak"},array:{unit:"element",verb:"bo‘lishi kerak"},set:{unit:"element",verb:"bo‘lishi kerak"},map:{unit:"yozuv",verb:"bo‘lishi kerak"}};function n(t){return e[t]??null}let r={regex:"kirish",email:"elektron pochta manzili",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO sana va vaqti",date:"ISO sana",time:"ISO vaqt",duration:"ISO davomiylik",ipv4:"IPv4 manzil",ipv6:"IPv6 manzil",mac:"MAC manzil",cidrv4:"IPv4 diapazon",cidrv6:"IPv6 diapazon",base64:"base64 kodlangan satr",base64url:"base64url kodlangan satr",json_string:"JSON satr",e164:"E.164 raqam",jwt:"JWT",template_literal:"kirish"},o={nan:"NaN",number:"raqam",array:"massiv"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Noto‘g‘ri kirish: kutilgan instanceof ${t.expected}, qabul qilingan ${s}`:`Noto‘g‘ri kirish: kutilgan ${i}, qabul qilingan ${s}`}case"invalid_value":return t.values.length===1?`Noto‘g‘ri kirish: kutilgan ${S(t.values[0])}`:`Noto‘g‘ri variant: quyidagilardan biri kutilgan ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Juda katta: kutilgan ${t.origin??"qiymat"} ${i}${t.maximum.toString()} ${a.unit} ${a.verb}`:`Juda katta: kutilgan ${t.origin??"qiymat"} ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Juda kichik: kutilgan ${t.origin} ${i}${t.minimum.toString()} ${a.unit} ${a.verb}`:`Juda kichik: kutilgan ${t.origin} ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Noto‘g‘ri satr: "${i.prefix}" bilan boshlanishi kerak`:i.format==="ends_with"?`Noto‘g‘ri satr: "${i.suffix}" bilan tugashi kerak`:i.format==="includes"?`Noto‘g‘ri satr: "${i.includes}" ni o‘z ichiga olishi kerak`:i.format==="regex"?`Noto‘g‘ri satr: ${i.pattern} shabloniga mos kelishi kerak`:`Noto‘g‘ri ${r[i.format]??t.format}`}case"not_multiple_of":return`Noto‘g‘ri raqam: ${t.divisor} ning karralisi bo‘lishi kerak`;case"unrecognized_keys":return`Noma’lum kalit${t.keys.length>1?"lar":""}: ${y(t.keys,", ")}`;case"invalid_key":return`${t.origin} dagi kalit noto‘g‘ri`;case"invalid_union":return"Noto‘g‘ri kirish";case"invalid_element":return`${t.origin} da noto‘g‘ri qiymat`;default:return"Noto‘g‘ri kirish"}}};function hm(){return{localeError:xy()}}var $y=()=>{let e={string:{unit:"ký tự",verb:"có"},file:{unit:"byte",verb:"có"},array:{unit:"phần tử",verb:"có"},set:{unit:"phần tử",verb:"có"}};function n(t){return e[t]??null}let r={regex:"đầu vào",email:"địa chỉ email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ngày giờ ISO",date:"ngày ISO",time:"giờ ISO",duration:"khoảng thời gian ISO",ipv4:"địa chỉ IPv4",ipv6:"địa chỉ IPv6",cidrv4:"dải IPv4",cidrv6:"dải IPv6",base64:"chuỗi mã hóa base64",base64url:"chuỗi mã hóa base64url",json_string:"chuỗi JSON",e164:"số E.164",jwt:"JWT",template_literal:"đầu vào"},o={nan:"NaN",number:"số",array:"mảng"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Đầu vào không hợp lệ: mong đợi instanceof ${t.expected}, nhận được ${s}`:`Đầu vào không hợp lệ: mong đợi ${i}, nhận được ${s}`}case"invalid_value":return t.values.length===1?`Đầu vào không hợp lệ: mong đợi ${S(t.values[0])}`:`Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Quá lớn: mong đợi ${t.origin??"giá trị"} ${a.verb} ${i}${t.maximum.toString()} ${a.unit??"phần tử"}`:`Quá lớn: mong đợi ${t.origin??"giá trị"} ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Quá nhỏ: mong đợi ${t.origin} ${a.verb} ${i}${t.minimum.toString()} ${a.unit}`:`Quá nhỏ: mong đợi ${t.origin} ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Chuỗi không hợp lệ: phải bắt đầu bằng "${i.prefix}"`:i.format==="ends_with"?`Chuỗi không hợp lệ: phải kết thúc bằng "${i.suffix}"`:i.format==="includes"?`Chuỗi không hợp lệ: phải bao gồm "${i.includes}"`:i.format==="regex"?`Chuỗi không hợp lệ: phải khớp với mẫu ${i.pattern}`:`${r[i.format]??t.format} không hợp lệ`}case"not_multiple_of":return`Số không hợp lệ: phải là bội số của ${t.divisor}`;case"unrecognized_keys":return`Khóa không được nhận dạng: ${y(t.keys,", ")}`;case"invalid_key":return`Khóa không hợp lệ trong ${t.origin}`;case"invalid_union":return"Đầu vào không hợp lệ";case"invalid_element":return`Giá trị không hợp lệ trong ${t.origin}`;default:return"Đầu vào không hợp lệ"}}};function bm(){return{localeError:$y()}}var _y=()=>{let e={string:{unit:"字符",verb:"包含"},file:{unit:"字节",verb:"包含"},array:{unit:"项",verb:"包含"},set:{unit:"项",verb:"包含"}};function n(t){return e[t]??null}let r={regex:"输入",email:"电子邮件",url:"URL",emoji:"表情符号",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日期时间",date:"ISO日期",time:"ISO时间",duration:"ISO时长",ipv4:"IPv4地址",ipv6:"IPv6地址",cidrv4:"IPv4网段",cidrv6:"IPv6网段",base64:"base64编码字符串",base64url:"base64url编码字符串",json_string:"JSON字符串",e164:"E.164号码",jwt:"JWT",template_literal:"输入"},o={nan:"NaN",number:"数字",array:"数组",null:"空值(null)"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`无效输入：期望 instanceof ${t.expected}，实际接收 ${s}`:`无效输入：期望 ${i}，实际接收 ${s}`}case"invalid_value":return t.values.length===1?`无效输入：期望 ${S(t.values[0])}`:`无效选项：期望以下之一 ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`数值过大：期望 ${t.origin??"值"} ${i}${t.maximum.toString()} ${a.unit??"个元素"}`:`数值过大：期望 ${t.origin??"值"} ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`数值过小：期望 ${t.origin} ${i}${t.minimum.toString()} ${a.unit}`:`数值过小：期望 ${t.origin} ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`无效字符串：必须以 "${i.prefix}" 开头`:i.format==="ends_with"?`无效字符串：必须以 "${i.suffix}" 结尾`:i.format==="includes"?`无效字符串：必须包含 "${i.includes}"`:i.format==="regex"?`无效字符串：必须满足正则表达式 ${i.pattern}`:`无效${r[i.format]??t.format}`}case"not_multiple_of":return`无效数字：必须是 ${t.divisor} 的倍数`;case"unrecognized_keys":return`出现未知的键(key): ${y(t.keys,", ")}`;case"invalid_key":return`${t.origin} 中的键(key)无效`;case"invalid_union":return"无效输入";case"invalid_element":return`${t.origin} 中包含无效值(value)`;default:return"无效输入"}}};function ym(){return{localeError:_y()}}var Sy=()=>{let e={string:{unit:"字元",verb:"擁有"},file:{unit:"位元組",verb:"擁有"},array:{unit:"項目",verb:"擁有"},set:{unit:"項目",verb:"擁有"}};function n(t){return e[t]??null}let r={regex:"輸入",email:"郵件地址",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 日期時間",date:"ISO 日期",time:"ISO 時間",duration:"ISO 期間",ipv4:"IPv4 位址",ipv6:"IPv6 位址",cidrv4:"IPv4 範圍",cidrv6:"IPv6 範圍",base64:"base64 編碼字串",base64url:"base64url 編碼字串",json_string:"JSON 字串",e164:"E.164 數值",jwt:"JWT",template_literal:"輸入"},o={nan:"NaN"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`無效的輸入值：預期為 instanceof ${t.expected}，但收到 ${s}`:`無效的輸入值：預期為 ${i}，但收到 ${s}`}case"invalid_value":return t.values.length===1?`無效的輸入值：預期為 ${S(t.values[0])}`:`無效的選項：預期為以下其中之一 ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`數值過大：預期 ${t.origin??"值"} 應為 ${i}${t.maximum.toString()} ${a.unit??"個元素"}`:`數值過大：預期 ${t.origin??"值"} 應為 ${i}${t.maximum.toString()}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`數值過小：預期 ${t.origin} 應為 ${i}${t.minimum.toString()} ${a.unit}`:`數值過小：預期 ${t.origin} 應為 ${i}${t.minimum.toString()}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`無效的字串：必須以 "${i.prefix}" 開頭`:i.format==="ends_with"?`無效的字串：必須以 "${i.suffix}" 結尾`:i.format==="includes"?`無效的字串：必須包含 "${i.includes}"`:i.format==="regex"?`無效的字串：必須符合格式 ${i.pattern}`:`無效的 ${r[i.format]??t.format}`}case"not_multiple_of":return`無效的數字：必須為 ${t.divisor} 的倍數`;case"unrecognized_keys":return`無法識別的鍵值${t.keys.length>1?"們":""}：${y(t.keys,"、")}`;case"invalid_key":return`${t.origin} 中有無效的鍵值`;case"invalid_union":return"無效的輸入值";case"invalid_element":return`${t.origin} 中有無效的值`;default:return"無效的輸入值"}}};function xm(){return{localeError:Sy()}}var ky=()=>{let e={string:{unit:"àmi",verb:"ní"},file:{unit:"bytes",verb:"ní"},array:{unit:"nkan",verb:"ní"},set:{unit:"nkan",verb:"ní"}};function n(t){return e[t]??null}let r={regex:"ẹ̀rọ ìbáwọlé",email:"àdírẹ́sì ìmẹ́lì",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"àkókò ISO",date:"ọjọ́ ISO",time:"àkókò ISO",duration:"àkókò tó pé ISO",ipv4:"àdírẹ́sì IPv4",ipv6:"àdírẹ́sì IPv6",cidrv4:"àgbègbè IPv4",cidrv6:"àgbègbè IPv6",base64:"ọ̀rọ̀ tí a kọ́ ní base64",base64url:"ọ̀rọ̀ base64url",json_string:"ọ̀rọ̀ JSON",e164:"nọ́mbà E.164",jwt:"JWT",template_literal:"ẹ̀rọ ìbáwọlé"},o={nan:"NaN",number:"nọ́mbà",array:"akopọ"};return t=>{switch(t.code){case"invalid_type":{let i=o[t.expected]??t.expected,a=k(t.input),s=o[a]??a;return/^[A-Z]/.test(t.expected)?`Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${t.expected}, àmọ̀ a rí ${s}`:`Ìbáwọlé aṣìṣe: a ní láti fi ${i}, àmọ̀ a rí ${s}`}case"invalid_value":return t.values.length===1?`Ìbáwọlé aṣìṣe: a ní láti fi ${S(t.values[0])}`:`Àṣàyàn aṣìṣe: yan ọ̀kan lára ${y(t.values,"|")}`;case"too_big":{let i=t.inclusive?"<=":"<",a=n(t.origin);return a?`Tó pọ̀ jù: a ní láti jẹ́ pé ${t.origin??"iye"} ${a.verb} ${i}${t.maximum} ${a.unit}`:`Tó pọ̀ jù: a ní láti jẹ́ ${i}${t.maximum}`}case"too_small":{let i=t.inclusive?">=":">",a=n(t.origin);return a?`Kéré ju: a ní láti jẹ́ pé ${t.origin} ${a.verb} ${i}${t.minimum} ${a.unit}`:`Kéré ju: a ní láti jẹ́ ${i}${t.minimum}`}case"invalid_format":{let i=t;return i.format==="starts_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${i.prefix}"`:i.format==="ends_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${i.suffix}"`:i.format==="includes"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${i.includes}"`:i.format==="regex"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${i.pattern}`:`Aṣìṣe: ${r[i.format]??t.format}`}case"not_multiple_of":return`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${t.divisor}`;case"unrecognized_keys":return`Bọtìnì àìmọ̀: ${y(t.keys,", ")}`;case"invalid_key":return`Bọtìnì aṣìṣe nínú ${t.origin}`;case"invalid_union":return"Ìbáwọlé aṣìṣe";case"invalid_element":return`Iye aṣìṣe nínú ${t.origin}`;default:return"Ìbáwọlé aṣìṣe"}}};function $m(){return{localeError:ky()}}var _m,vl=Symbol("ZodOutput"),hl=Symbol("ZodInput"),Qr=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(n,...r){let o=r[0];return this._map.set(n,o),o&&typeof o=="object"&&"id"in o&&this._idmap.set(o.id,n),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(n){let r=this._map.get(n);return r&&typeof r=="object"&&"id"in r&&this._idmap.delete(r.id),this._map.delete(n),this}get(n){let r=n._zod.parent;if(r){let o={...this.get(r)??{}};delete o.id;let t={...o,...this._map.get(n)};return Object.keys(t).length?t:void 0}return this._map.get(n)}has(n){return this._map.has(n)}};function Kr(){return new Qr}(_m=globalThis).__zod_globalRegistry??(_m.__zod_globalRegistry=Kr());var se=globalThis.__zod_globalRegistry;function bl(e,n){return new e({type:"string",...T(n)})}function yl(e,n){return new e({type:"string",coerce:!0,...T(n)})}function Yr(e,n){return new e({type:"string",format:"email",check:"string_format",abort:!1,...T(n)})}function Bn(e,n){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...T(n)})}function eo(e,n){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...T(n)})}function to(e,n){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...T(n)})}function no(e,n){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...T(n)})}function ro(e,n){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...T(n)})}function Gn(e,n){return new e({type:"string",format:"url",check:"string_format",abort:!1,...T(n)})}function oo(e,n){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...T(n)})}function io(e,n){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...T(n)})}function ao(e,n){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...T(n)})}function so(e,n){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...T(n)})}function lo(e,n){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...T(n)})}function co(e,n){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...T(n)})}function uo(e,n){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...T(n)})}function po(e,n){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...T(n)})}function mo(e,n){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...T(n)})}function xl(e,n){return new e({type:"string",format:"mac",check:"string_format",abort:!1,...T(n)})}function fo(e,n){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...T(n)})}function go(e,n){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...T(n)})}function vo(e,n){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...T(n)})}function ho(e,n){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...T(n)})}function bo(e,n){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...T(n)})}function yo(e,n){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...T(n)})}var $l={Any:null,Minute:-1,Second:0,Millisecond:3,Microsecond:6};function _l(e,n){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...T(n)})}function Sl(e,n){return new e({type:"string",format:"date",check:"string_format",...T(n)})}function kl(e,n){return new e({type:"string",format:"time",check:"string_format",precision:null,...T(n)})}function El(e,n){return new e({type:"string",format:"duration",check:"string_format",...T(n)})}function wl(e,n){return new e({type:"number",checks:[],...T(n)})}function Tl(e,n){return new e({type:"number",coerce:!0,checks:[],...T(n)})}function Il(e,n){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...T(n)})}function zl(e,n){return new e({type:"number",check:"number_format",abort:!1,format:"float32",...T(n)})}function Pl(e,n){return new e({type:"number",check:"number_format",abort:!1,format:"float64",...T(n)})}function Ll(e,n){return new e({type:"number",check:"number_format",abort:!1,format:"int32",...T(n)})}function Al(e,n){return new e({type:"number",check:"number_format",abort:!1,format:"uint32",...T(n)})}function Dl(e,n){return new e({type:"boolean",...T(n)})}function Rl(e,n){return new e({type:"boolean",coerce:!0,...T(n)})}function Ol(e,n){return new e({type:"bigint",...T(n)})}function jl(e,n){return new e({type:"bigint",coerce:!0,...T(n)})}function Ul(e,n){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"int64",...T(n)})}function Ml(e,n){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"uint64",...T(n)})}function Nl(e,n){return new e({type:"symbol",...T(n)})}function Cl(e,n){return new e({type:"undefined",...T(n)})}function Zl(e,n){return new e({type:"null",...T(n)})}function Fl(e){return new e({type:"any"})}function Hl(e){return new e({type:"unknown"})}function Jl(e,n){return new e({type:"never",...T(n)})}function Wl(e,n){return new e({type:"void",...T(n)})}function ql(e,n){return new e({type:"date",...T(n)})}function Vl(e,n){return new e({type:"date",coerce:!0,...T(n)})}function Bl(e,n){return new e({type:"nan",...T(n)})}function Ce(e,n){return new Ur({check:"less_than",...T(n),value:e,inclusive:!1})}function we(e,n){return new Ur({check:"less_than",...T(n),value:e,inclusive:!0})}function Ze(e,n){return new Mr({check:"greater_than",...T(n),value:e,inclusive:!1})}function fe(e,n){return new Mr({check:"greater_than",...T(n),value:e,inclusive:!0})}function xo(e){return Ze(0,e)}function $o(e){return Ce(0,e)}function _o(e){return we(0,e)}function So(e){return fe(0,e)}function bt(e,n){return new Za({check:"multiple_of",...T(n),value:e})}function yt(e,n){return new Ja({check:"max_size",...T(n),maximum:e})}function Fe(e,n){return new Wa({check:"min_size",...T(n),minimum:e})}function Dt(e,n){return new qa({check:"size_equals",...T(n),size:e})}function Rt(e,n){return new Va({check:"max_length",...T(n),maximum:e})}function nt(e,n){return new Ba({check:"min_length",...T(n),minimum:e})}function Ot(e,n){return new Ga({check:"length_equals",...T(n),length:e})}function Kt(e,n){return new Xa({check:"string_format",format:"regex",...T(n),pattern:e})}function Yt(e){return new Qa({check:"string_format",format:"lowercase",...T(e)})}function en(e){return new Ka({check:"string_format",format:"uppercase",...T(e)})}function tn(e,n){return new Ya({check:"string_format",format:"includes",...T(n),includes:e})}function nn(e,n){return new es({check:"string_format",format:"starts_with",...T(n),prefix:e})}function rn(e,n){return new ts({check:"string_format",format:"ends_with",...T(n),suffix:e})}function ko(e,n,r){return new ns({check:"property",property:e,schema:n,...T(r)})}function on(e,n){return new rs({check:"mime_type",mime:e,...T(n)})}function Oe(e){return new os({check:"overwrite",tx:e})}function an(e){return Oe(n=>n.normalize(e))}function sn(){return Oe(e=>e.trim())}function ln(){return Oe(e=>e.toLowerCase())}function cn(){return Oe(e=>e.toUpperCase())}function un(){return Oe(e=>ea(e))}function Gl(e,n,r){return new e({type:"array",element:n,...T(r)})}function wy(e,n,r){return new e({type:"union",options:n,...T(r)})}function Ty(e,n,r){return new e({type:"union",options:n,inclusive:!1,...T(r)})}function Iy(e,n,r,o){return new e({type:"union",options:r,discriminator:n,...T(o)})}function zy(e,n,r){return new e({type:"intersection",left:n,right:r})}function Py(e,n,r,o){let t=r instanceof O,i=t?o:r,a=t?r:null;return new e({type:"tuple",items:n,rest:a,...T(i)})}function Ly(e,n,r,o){return new e({type:"record",keyType:n,valueType:r,...T(o)})}function Ay(e,n,r,o){return new e({type:"map",keyType:n,valueType:r,...T(o)})}function Dy(e,n,r){return new e({type:"set",valueType:n,...T(r)})}function Ry(e,n,r){let o=Array.isArray(n)?Object.fromEntries(n.map(t=>[t,t])):n;return new e({type:"enum",entries:o,...T(r)})}function Oy(e,n,r){return new e({type:"enum",entries:n,...T(r)})}function jy(e,n,r){return new e({type:"literal",values:Array.isArray(n)?n:[n],...T(r)})}function Xl(e,n){return new e({type:"file",...T(n)})}function Uy(e,n){return new e({type:"transform",transform:n})}function My(e,n){return new e({type:"optional",innerType:n})}function Ny(e,n){return new e({type:"nullable",innerType:n})}function Cy(e,n,r){return new e({type:"default",innerType:n,get defaultValue(){return typeof r=="function"?r():na(r)}})}function Zy(e,n,r){return new e({type:"nonoptional",innerType:n,...T(r)})}function Fy(e,n){return new e({type:"success",innerType:n})}function Hy(e,n,r){return new e({type:"catch",innerType:n,catchValue:typeof r=="function"?r:()=>r})}function Jy(e,n,r){return new e({type:"pipe",in:n,out:r})}function Wy(e,n){return new e({type:"readonly",innerType:n})}function qy(e,n,r){return new e({type:"template_literal",parts:n,...T(r)})}function Vy(e,n){return new e({type:"lazy",getter:n})}function By(e,n){return new e({type:"promise",innerType:n})}function Ql(e,n,r){let o=T(r);return o.abort??(o.abort=!0),new e({type:"custom",check:"custom",fn:n,...o})}function Kl(e,n,r){return new e({type:"custom",check:"custom",fn:n,...T(r)})}function Yl(e,n){let r=Sm(o=>(o.addIssue=t=>{if(typeof t=="string")o.issues.push(Wt(t,o.value,r._zod.def));else{let i=t;i.fatal&&(i.continue=!1),i.code??(i.code="custom"),i.input??(i.input=o.value),i.inst??(i.inst=r),i.continue??(i.continue=!r._zod.def.abort),o.issues.push(Wt(i))}},e(o.value,o)),n);return r}function Sm(e,n){let r=new G({check:"custom",...T(n)});return r._zod.check=e,r}function ec(e){let n=new G({check:"describe"});return n._zod.onattach=[r=>{let o=se.get(r)??{};se.add(r,{...o,description:e})}],n._zod.check=()=>{},n}function tc(e){let n=new G({check:"meta"});return n._zod.onattach=[r=>{let o=se.get(r)??{};se.add(r,{...o,...e})}],n._zod.check=()=>{},n}function nc(e,n){let r=T(n),o=r.truthy??["true","1","yes","on","y","enabled"],t=r.falsy??["false","0","no","off","n","disabled"];r.case!=="sensitive"&&(o=o.map(p=>typeof p=="string"?p.toLowerCase():p),t=t.map(p=>typeof p=="string"?p.toLowerCase():p));let i=new Set(o),a=new Set(t),s=e.Codec??Wn,l=e.Boolean??Hn,c=e.String??At,d=new c({type:"string",error:r.error}),u=new l({type:"boolean",error:r.error}),f=new s({type:"pipe",in:d,out:u,transform:(p,g)=>{let $=p;return r.case!=="sensitive"&&($=$.toLowerCase()),i.has($)?!0:a.has($)?!1:(g.issues.push({code:"invalid_value",expected:"stringbool",values:[...i,...a],input:g.value,inst:f,continue:!1}),{})},reverseTransform:(p,g)=>p===!0?o[0]||"true":t[0]||"false",error:r.error});return f}function dn(e,n,r,o={}){let t=T(o),i={...T(o),check:"string_format",type:"string",format:n,fn:typeof r=="function"?r:s=>r.test(s),...t};return r instanceof RegExp&&(i.pattern=r),new e(i)}function xt(e){let n=e?.target??"draft-2020-12";return n==="draft-4"&&(n="draft-04"),n==="draft-7"&&(n="draft-07"),{processors:e.processors??{},metadataRegistry:e?.metadata??se,target:n,unrepresentable:e?.unrepresentable??"throw",override:e?.override??(()=>{}),io:e?.io??"output",counter:0,seen:new Map,cycles:e?.cycles??"ref",reused:e?.reused??"inline",external:e?.external??void 0}}function J(e,n,r={path:[],schemaPath:[]}){var o;let t=e._zod.def,i=n.seen.get(e);if(i)return i.count++,r.schemaPath.includes(e)&&(i.cycle=r.path),i.schema;let a={schema:{},count:1,cycle:void 0,path:r.path};n.seen.set(e,a);let s=e._zod.toJSONSchema?.();if(s)a.schema=s;else{let d={...r,schemaPath:[...r.schemaPath,e],path:r.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(n,a.schema,d);else{let f=a.schema,p=n.processors[t.type];if(!p)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${t.type}`);p(e,n,f,d)}let u=e._zod.parent;u&&(a.ref||(a.ref=u),J(u,n,d),n.seen.get(u).isParent=!0)}let l=n.metadataRegistry.get(e);return l&&Object.assign(a.schema,l),n.io==="input"&&ge(e)&&(delete a.schema.examples,delete a.schema.default),n.io==="input"&&"_prefault"in a.schema&&((o=a.schema).default??(o.default=a.schema._prefault)),delete a.schema._prefault,n.seen.get(e).schema}function $t(e,n){let r=e.seen.get(n);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");let o=new Map;for(let a of e.seen.entries()){let s=e.metadataRegistry.get(a[0])?.id;if(s){let l=o.get(s);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${s}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);o.set(s,a[0])}}let t=a=>{let s=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){let u=e.external.registry.get(a[0])?.id,f=e.external.uri??(g=>g);if(u)return{ref:f(u)};let p=a[1].defId??a[1].schema.id??`schema${e.counter++}`;return a[1].defId=p,{defId:p,ref:`${f("__shared")}#/${s}/${p}`}}if(a[1]===r)return{ref:"#"};let c=`#/${s}/`,d=a[1].schema.id??`__schema${e.counter++}`;return{defId:d,ref:c+d}},i=a=>{if(a[1].schema.$ref)return;let s=a[1],{ref:l,defId:c}=t(a);s.def={...s.schema},c&&(s.defId=c);let d=s.schema;for(let u in d)delete d[u];d.$ref=l};if(e.cycles==="throw")for(let a of e.seen.entries()){let s=a[1];if(s.cycle)throw new Error(`Cycle detected: #/${s.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let a of e.seen.entries()){let s=a[1];if(n===a[0]){i(a);continue}if(e.external){let c=e.external.registry.get(a[0])?.id;if(n!==a[0]&&c){i(a);continue}}if(e.metadataRegistry.get(a[0])?.id){i(a);continue}if(s.cycle){i(a);continue}if(s.count>1&&e.reused==="ref"){i(a);continue}}}function _t(e,n){let r=e.seen.get(n);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");let o=s=>{let l=e.seen.get(s);if(l.ref===null)return;let c=l.def??l.schema,d={...c},u=l.ref;if(l.ref=null,u){o(u);let p=e.seen.get(u),g=p.schema;if(g.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(g)):Object.assign(c,g),Object.assign(c,d),s._zod.parent===u)for(let _ in c)_==="$ref"||_==="allOf"||_ in d||delete c[_];if(g.$ref&&p.def)for(let _ in c)_==="$ref"||_==="allOf"||_ in p.def&&JSON.stringify(c[_])===JSON.stringify(p.def[_])&&delete c[_]}let f=s._zod.parent;if(f&&f!==u){o(f);let p=e.seen.get(f);if(p?.schema.$ref&&(c.$ref=p.schema.$ref,p.def))for(let g in c)g==="$ref"||g==="allOf"||g in p.def&&JSON.stringify(c[g])===JSON.stringify(p.def[g])&&delete c[g]}e.override({zodSchema:s,jsonSchema:c,path:l.path??[]})};for(let s of[...e.seen.entries()].reverse())o(s[0]);let t={};if(e.target==="draft-2020-12"?t.$schema="https://json-schema.org/draft/2020-12/schema":e.target==="draft-07"?t.$schema="http://json-schema.org/draft-07/schema#":e.target==="draft-04"?t.$schema="http://json-schema.org/draft-04/schema#":e.target,e.external?.uri){let s=e.external.registry.get(n)?.id;if(!s)throw new Error("Schema is missing an `id` property");t.$id=e.external.uri(s)}Object.assign(t,r.def??r.schema);let i=e.metadataRegistry.get(n)?.id;i!==void 0&&t.id===i&&delete t.id;let a=e.external?.defs??{};for(let s of e.seen.entries()){let l=s[1];l.def&&l.defId&&(l.def.id===l.defId&&delete l.def.id,a[l.defId]=l.def)}e.external||Object.keys(a).length>0&&(e.target==="draft-2020-12"?t.$defs=a:t.definitions=a);try{let s=JSON.parse(JSON.stringify(t));return Object.defineProperty(s,"~standard",{value:{...n["~standard"],jsonSchema:{input:pn(n,"input",e.processors),output:pn(n,"output",e.processors)}},enumerable:!1,writable:!1}),s}catch{throw new Error("Error converting schema to JSON.")}}function ge(e,n){let r=n??{seen:new Set};if(r.seen.has(e))return!1;r.seen.add(e);let o=e._zod.def;if(o.type==="transform")return!0;if(o.type==="array")return ge(o.element,r);if(o.type==="set")return ge(o.valueType,r);if(o.type==="lazy")return ge(o.getter(),r);if(o.type==="promise"||o.type==="optional"||o.type==="nonoptional"||o.type==="nullable"||o.type==="readonly"||o.type==="default"||o.type==="prefault")return ge(o.innerType,r);if(o.type==="intersection")return ge(o.left,r)||ge(o.right,r);if(o.type==="record"||o.type==="map")return ge(o.keyType,r)||ge(o.valueType,r);if(o.type==="pipe")return e._zod.traits.has("$ZodCodec")?!0:ge(o.in,r)||ge(o.out,r);if(o.type==="object"){for(let t in o.shape)if(ge(o.shape[t],r))return!0;return!1}if(o.type==="union"){for(let t of o.options)if(ge(t,r))return!0;return!1}if(o.type==="tuple"){for(let t of o.items)if(ge(t,r))return!0;return!!(o.rest&&ge(o.rest,r))}return!1}var rc=(e,n={})=>r=>{let o=xt({...r,processors:n});return J(e,o),$t(o,e),_t(o,e)},pn=(e,n,r={})=>o=>{let{libraryOptions:t,target:i}=o??{},a=xt({...t??{},target:i,io:n,processors:r});return J(e,a),$t(a,e),_t(a,e)};var Gy={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},oc=(e,n,r,o)=>{let t=r;t.type="string";let{minimum:i,maximum:a,format:s,patterns:l,contentEncoding:c}=e._zod.bag;if(typeof i=="number"&&(t.minLength=i),typeof a=="number"&&(t.maxLength=a),s&&(t.format=Gy[s]??s,t.format===""&&delete t.format,s==="time"&&delete t.format),c&&(t.contentEncoding=c),l&&l.size>0){let d=[...l];d.length===1?t.pattern=d[0].source:d.length>1&&(t.allOf=[...d.map(u=>({...n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0"?{type:"string"}:{},pattern:u.source}))])}},ic=(e,n,r,o)=>{let t=r,{minimum:i,maximum:a,format:s,multipleOf:l,exclusiveMaximum:c,exclusiveMinimum:d}=e._zod.bag;typeof s=="string"&&s.includes("int")?t.type="integer":t.type="number";let u=typeof d=="number"&&d>=(i??Number.NEGATIVE_INFINITY),f=typeof c=="number"&&c<=(a??Number.POSITIVE_INFINITY),p=n.target==="draft-04"||n.target==="openapi-3.0";u?p?(t.minimum=d,t.exclusiveMinimum=!0):t.exclusiveMinimum=d:typeof i=="number"&&(t.minimum=i),f?p?(t.maximum=c,t.exclusiveMaximum=!0):t.exclusiveMaximum=c:typeof a=="number"&&(t.maximum=a),typeof l=="number"&&(t.multipleOf=l)},ac=(e,n,r,o)=>{r.type="boolean"},sc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema")},lc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema")},cc=(e,n,r,o)=>{n.target==="openapi-3.0"?(r.type="string",r.nullable=!0,r.enum=[null]):r.type="null"},uc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema")},dc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema")},pc=(e,n,r,o)=>{r.not={}},mc=(e,n,r,o)=>{},fc=(e,n,r,o)=>{},gc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema")},vc=(e,n,r,o)=>{let t=e._zod.def,i=An(t.entries);i.every(a=>typeof a=="number")&&(r.type="number"),i.every(a=>typeof a=="string")&&(r.type="string"),r.enum=i},hc=(e,n,r,o)=>{let t=e._zod.def,i=[];for(let a of t.values)if(a===void 0){if(n.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof a=="bigint"){if(n.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");i.push(Number(a))}else i.push(a);if(i.length!==0)if(i.length===1){let a=i[0];r.type=a===null?"null":typeof a,n.target==="draft-04"||n.target==="openapi-3.0"?r.enum=[a]:r.const=a}else i.every(a=>typeof a=="number")&&(r.type="number"),i.every(a=>typeof a=="string")&&(r.type="string"),i.every(a=>typeof a=="boolean")&&(r.type="boolean"),i.every(a=>a===null)&&(r.type="null"),r.enum=i},bc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema")},yc=(e,n,r,o)=>{let t=r,i=e._zod.pattern;if(!i)throw new Error("Pattern not found in template literal");t.type="string",t.pattern=i.source},xc=(e,n,r,o)=>{let t=r,i={type:"string",format:"binary",contentEncoding:"binary"},{minimum:a,maximum:s,mime:l}=e._zod.bag;a!==void 0&&(i.minLength=a),s!==void 0&&(i.maxLength=s),l?l.length===1?(i.contentMediaType=l[0],Object.assign(t,i)):(Object.assign(t,i),t.anyOf=l.map(c=>({contentMediaType:c}))):Object.assign(t,i)},$c=(e,n,r,o)=>{r.type="boolean"},_c=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},Sc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Function types cannot be represented in JSON Schema")},kc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},Ec=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema")},wc=(e,n,r,o)=>{if(n.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema")},Tc=(e,n,r,o)=>{let t=r,i=e._zod.def,{minimum:a,maximum:s}=e._zod.bag;typeof a=="number"&&(t.minItems=a),typeof s=="number"&&(t.maxItems=s),t.type="array",t.items=J(i.element,n,{...o,path:[...o.path,"items"]})},Ic=(e,n,r,o)=>{let t=r,i=e._zod.def;t.type="object",t.properties={};let a=i.shape;for(let c in a)t.properties[c]=J(a[c],n,{...o,path:[...o.path,"properties",c]});let s=new Set(Object.keys(a)),l=new Set([...s].filter(c=>{let d=i.shape[c]._zod;return n.io==="input"?d.optin===void 0:d.optout===void 0}));l.size>0&&(t.required=Array.from(l)),i.catchall?._zod.def.type==="never"?t.additionalProperties=!1:i.catchall?i.catchall&&(t.additionalProperties=J(i.catchall,n,{...o,path:[...o.path,"additionalProperties"]})):n.io==="output"&&(t.additionalProperties=!1)},wo=(e,n,r,o)=>{let t=e._zod.def,i=t.inclusive===!1,a=t.options.map((s,l)=>J(s,n,{...o,path:[...o.path,i?"oneOf":"anyOf",l]}));i?r.oneOf=a:r.anyOf=a},zc=(e,n,r,o)=>{let t=e._zod.def,i=J(t.left,n,{...o,path:[...o.path,"allOf",0]}),a=J(t.right,n,{...o,path:[...o.path,"allOf",1]}),s=c=>"allOf"in c&&Object.keys(c).length===1,l=[...s(i)?i.allOf:[i],...s(a)?a.allOf:[a]];r.allOf=l},Pc=(e,n,r,o)=>{let t=r,i=e._zod.def;t.type="array";let a=n.target==="draft-2020-12"?"prefixItems":"items",s=n.target==="draft-2020-12"||n.target==="openapi-3.0"?"items":"additionalItems",l=i.items.map((f,p)=>J(f,n,{...o,path:[...o.path,a,p]})),c=i.rest?J(i.rest,n,{...o,path:[...o.path,s,...n.target==="openapi-3.0"?[i.items.length]:[]]}):null;n.target==="draft-2020-12"?(t.prefixItems=l,c&&(t.items=c)):n.target==="openapi-3.0"?(t.items={anyOf:l},c&&t.items.anyOf.push(c),t.minItems=l.length,c||(t.maxItems=l.length)):(t.items=l,c&&(t.additionalItems=c));let{minimum:d,maximum:u}=e._zod.bag;typeof d=="number"&&(t.minItems=d),typeof u=="number"&&(t.maxItems=u)},Lc=(e,n,r,o)=>{let t=r,i=e._zod.def;t.type="object";let a=i.keyType,l=a._zod.bag?.patterns;if(i.mode==="loose"&&l&&l.size>0){let d=J(i.valueType,n,{...o,path:[...o.path,"patternProperties","*"]});t.patternProperties={};for(let u of l)t.patternProperties[u.source]=d}else(n.target==="draft-07"||n.target==="draft-2020-12")&&(t.propertyNames=J(i.keyType,n,{...o,path:[...o.path,"propertyNames"]})),t.additionalProperties=J(i.valueType,n,{...o,path:[...o.path,"additionalProperties"]});let c=a._zod.values;if(c){let d=[...c].filter(u=>typeof u=="string"||typeof u=="number");d.length>0&&(t.required=d)}},Ac=(e,n,r,o)=>{let t=e._zod.def,i=J(t.innerType,n,o),a=n.seen.get(e);n.target==="openapi-3.0"?(a.ref=t.innerType,r.nullable=!0):r.anyOf=[i,{type:"null"}]},Dc=(e,n,r,o)=>{let t=e._zod.def;J(t.innerType,n,o);let i=n.seen.get(e);i.ref=t.innerType},Rc=(e,n,r,o)=>{let t=e._zod.def;J(t.innerType,n,o);let i=n.seen.get(e);i.ref=t.innerType,r.default=JSON.parse(JSON.stringify(t.defaultValue))},Oc=(e,n,r,o)=>{let t=e._zod.def;J(t.innerType,n,o);let i=n.seen.get(e);i.ref=t.innerType,n.io==="input"&&(r._prefault=JSON.parse(JSON.stringify(t.defaultValue)))},jc=(e,n,r,o)=>{let t=e._zod.def;J(t.innerType,n,o);let i=n.seen.get(e);i.ref=t.innerType;let a;try{a=t.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}r.default=a},Uc=(e,n,r,o)=>{let t=e._zod.def,i=t.in._zod.traits.has("$ZodTransform"),a=n.io==="input"?i?t.out:t.in:t.out;J(a,n,o);let s=n.seen.get(e);s.ref=a},Mc=(e,n,r,o)=>{let t=e._zod.def;J(t.innerType,n,o);let i=n.seen.get(e);i.ref=t.innerType,r.readOnly=!0},Nc=(e,n,r,o)=>{let t=e._zod.def;J(t.innerType,n,o);let i=n.seen.get(e);i.ref=t.innerType},To=(e,n,r,o)=>{let t=e._zod.def;J(t.innerType,n,o);let i=n.seen.get(e);i.ref=t.innerType},Cc=(e,n,r,o)=>{let t=e._zod.innerType;J(t,n,o);let i=n.seen.get(e);i.ref=t},Eo={string:oc,number:ic,boolean:ac,bigint:sc,symbol:lc,null:cc,undefined:uc,void:dc,never:pc,any:mc,unknown:fc,date:gc,enum:vc,literal:hc,nan:bc,template_literal:yc,file:xc,success:$c,custom:_c,function:Sc,transform:kc,map:Ec,set:wc,array:Tc,object:Ic,union:wo,intersection:zc,tuple:Pc,record:Lc,nullable:Ac,nonoptional:Dc,default:Rc,prefault:Oc,catch:jc,pipe:Uc,readonly:Mc,promise:Nc,optional:To,lazy:Cc};function Io(e,n){if("_idmap"in e){let o=e,t=xt({...n,processors:Eo}),i={};for(let l of o._idmap.entries()){let[c,d]=l;J(d,t)}let a={},s={registry:o,uri:n?.uri,defs:i};t.external=s;for(let l of o._idmap.entries()){let[c,d]=l;$t(t,d),a[c]=_t(t,d)}if(Object.keys(i).length>0){let l=t.target==="draft-2020-12"?"$defs":"definitions";a.__shared={[l]:i}}return{schemas:a}}let r=xt({...n,processors:Eo});return J(e,r),$t(r,e),_t(r,e)}var zo=class{get metadataRegistry(){return this.ctx.metadataRegistry}get target(){return this.ctx.target}get unrepresentable(){return this.ctx.unrepresentable}get override(){return this.ctx.override}get io(){return this.ctx.io}get counter(){return this.ctx.counter}set counter(n){this.ctx.counter=n}get seen(){return this.ctx.seen}constructor(n){let r=n?.target??"draft-2020-12";r==="draft-4"&&(r="draft-04"),r==="draft-7"&&(r="draft-07"),this.ctx=xt({processors:Eo,target:r,...n?.metadata&&{metadata:n.metadata},...n?.unrepresentable&&{unrepresentable:n.unrepresentable},...n?.override&&{override:n.override},...n?.io&&{io:n.io}})}process(n,r={path:[],schemaPath:[]}){return J(n,this.ctx,r)}emit(n,r){r&&(r.cycles&&(this.ctx.cycles=r.cycles),r.reused&&(this.ctx.reused=r.reused),r.external&&(this.ctx.external=r.external)),$t(this.ctx,n);let o=_t(this.ctx,n),{"~standard":t,...i}=o;return i}};var km={};var Xn={};Ye(Xn,{ZodAny:()=>uu,ZodArray:()=>fu,ZodBase64:()=>Xo,ZodBase64URL:()=>Qo,ZodBigInt:()=>xn,ZodBigIntFormat:()=>ei,ZodBoolean:()=>yn,ZodCIDRv4:()=>Bo,ZodCIDRv6:()=>Go,ZodCUID:()=>Zo,ZodCUID2:()=>Fo,ZodCatch:()=>ju,ZodCodec:()=>lr,ZodCustom:()=>cr,ZodCustomStringFormat:()=>hn,ZodDate:()=>rr,ZodDefault:()=>Pu,ZodDiscriminatedUnion:()=>vu,ZodE164:()=>Ko,ZodEmail:()=>Mo,ZodEmoji:()=>No,ZodEnum:()=>gn,ZodExactOptional:()=>Tu,ZodFile:()=>Eu,ZodFunction:()=>qu,ZodGUID:()=>Kn,ZodIPv4:()=>qo,ZodIPv6:()=>Vo,ZodIntersection:()=>hu,ZodJWT:()=>Yo,ZodKSUID:()=>Wo,ZodLazy:()=>Hu,ZodLiteral:()=>ku,ZodMAC:()=>ru,ZodMap:()=>_u,ZodNaN:()=>Mu,ZodNanoID:()=>Co,ZodNever:()=>pu,ZodNonOptional:()=>ai,ZodNull:()=>lu,ZodNullable:()=>zu,ZodNumber:()=>bn,ZodNumberFormat:()=>Ut,ZodObject:()=>ir,ZodOptional:()=>ii,ZodPipe:()=>sr,ZodPrefault:()=>Au,ZodPreprocess:()=>Nu,ZodPromise:()=>Wu,ZodReadonly:()=>Cu,ZodRecord:()=>fn,ZodSet:()=>Su,ZodString:()=>vn,ZodStringFormat:()=>B,ZodSuccess:()=>Ou,ZodSymbol:()=>au,ZodTemplateLiteral:()=>Fu,ZodTransform:()=>wu,ZodTuple:()=>yu,ZodType:()=>M,ZodULID:()=>Ho,ZodURL:()=>nr,ZodUUID:()=>He,ZodUndefined:()=>su,ZodUnion:()=>ar,ZodUnknown:()=>du,ZodVoid:()=>mu,ZodXID:()=>Jo,ZodXor:()=>gu,_ZodString:()=>Uo,_default:()=>Lu,_function:()=>Rf,any:()=>df,array:()=>or,base64:()=>Vm,base64url:()=>Bm,bigint:()=>af,boolean:()=>iu,catch:()=>Uu,check:()=>Of,cidrv4:()=>Wm,cidrv6:()=>qm,codec:()=>Pf,cuid:()=>Um,cuid2:()=>Mm,custom:()=>jf,date:()=>mf,describe:()=>Uf,discriminatedUnion:()=>yf,e164:()=>Gm,email:()=>Tm,emoji:()=>Om,enum:()=>ri,exactOptional:()=>Iu,file:()=>wf,float32:()=>tf,float64:()=>nf,function:()=>Rf,guid:()=>Im,hash:()=>ef,hex:()=>Ym,hostname:()=>Km,httpUrl:()=>Rm,instanceof:()=>Nf,int:()=>Oo,int32:()=>rf,int64:()=>sf,intersection:()=>bu,invertCodec:()=>Lf,ipv4:()=>Fm,ipv6:()=>Jm,json:()=>Zf,jwt:()=>Xm,keyof:()=>ff,ksuid:()=>Zm,lazy:()=>Ju,literal:()=>Ef,looseObject:()=>hf,looseRecord:()=>$f,mac:()=>Hm,map:()=>_f,meta:()=>Mf,nan:()=>zf,nanoid:()=>jm,nativeEnum:()=>kf,never:()=>ti,nonoptional:()=>Ru,null:()=>cu,nullable:()=>er,nullish:()=>Tf,number:()=>ou,object:()=>gf,optional:()=>Yn,partialRecord:()=>xf,pipe:()=>jo,prefault:()=>Du,preprocess:()=>Ff,promise:()=>Df,readonly:()=>Zu,record:()=>$u,refine:()=>Vu,set:()=>Sf,strictObject:()=>vf,string:()=>Qn,stringFormat:()=>Qm,stringbool:()=>Cf,success:()=>If,superRefine:()=>Bu,symbol:()=>cf,templateLiteral:()=>Af,transform:()=>oi,tuple:()=>xu,uint32:()=>of,uint64:()=>lf,ulid:()=>Nm,undefined:()=>uf,union:()=>ni,unknown:()=>jt,url:()=>Dm,uuid:()=>zm,uuidv4:()=>Pm,uuidv6:()=>Lm,uuidv7:()=>Am,void:()=>pf,xid:()=>Cm,xor:()=>bf});var Po={};Ye(Po,{endsWith:()=>rn,gt:()=>Ze,gte:()=>fe,includes:()=>tn,length:()=>Ot,lowercase:()=>Yt,lt:()=>Ce,lte:()=>we,maxLength:()=>Rt,maxSize:()=>yt,mime:()=>on,minLength:()=>nt,minSize:()=>Fe,multipleOf:()=>bt,negative:()=>$o,nonnegative:()=>So,nonpositive:()=>_o,normalize:()=>an,overwrite:()=>Oe,positive:()=>xo,property:()=>ko,regex:()=>Kt,size:()=>Dt,slugify:()=>un,startsWith:()=>nn,toLowerCase:()=>ln,toUpperCase:()=>cn,trim:()=>sn,uppercase:()=>en});var mn={};Ye(mn,{ZodISODate:()=>Ao,ZodISODateTime:()=>Lo,ZodISODuration:()=>Ro,ZodISOTime:()=>Do,date:()=>Fc,datetime:()=>Zc,duration:()=>Jc,time:()=>Hc});var Lo=h("ZodISODateTime",(e,n)=>{bs.init(e,n),B.init(e,n)});function Zc(e){return _l(Lo,e)}var Ao=h("ZodISODate",(e,n)=>{ys.init(e,n),B.init(e,n)});function Fc(e){return Sl(Ao,e)}var Do=h("ZodISOTime",(e,n)=>{xs.init(e,n),B.init(e,n)});function Hc(e){return kl(Do,e)}var Ro=h("ZodISODuration",(e,n)=>{$s.init(e,n),B.init(e,n)});function Jc(e){return El(Ro,e)}var Em=(e,n)=>{Un.init(e,n),e.name="ZodError",Object.defineProperties(e,{format:{value:r=>Nn(e,r)},flatten:{value:r=>Mn(e,r)},addIssue:{value:r=>{e.issues.push(r),e.message=JSON.stringify(e.issues,Ht,2)}},addIssues:{value:r=>{e.issues.push(...r),e.message=JSON.stringify(e.issues,Ht,2)}},isEmpty:{get(){return e.issues.length===0}}})},Qy=h("ZodError",Em),xe=h("ZodError",Em,{Parent:Error});var Wc=qt(xe),qc=Vt(xe),Vc=Bt(xe),Bc=Gt(xe),Gc=Tr(xe),Xc=Ir(xe),Qc=zr(xe),Kc=Pr(xe),Yc=Lr(xe),eu=Ar(xe),tu=Dr(xe),nu=Rr(xe);var wm=new WeakMap;function tr(e,n,r){let o=Object.getPrototypeOf(e),t=wm.get(o);if(t||(t=new Set,wm.set(o,t)),!t.has(n)){t.add(n);for(let i in r){let a=r[i];Object.defineProperty(o,i,{configurable:!0,enumerable:!1,get(){let s=a.bind(this);return Object.defineProperty(this,i,{configurable:!0,writable:!0,enumerable:!0,value:s}),s},set(s){Object.defineProperty(this,i,{configurable:!0,writable:!0,enumerable:!0,value:s})}})}}}var M=h("ZodType",(e,n)=>(O.init(e,n),Object.assign(e["~standard"],{jsonSchema:{input:pn(e,"input"),output:pn(e,"output")}}),e.toJSONSchema=rc(e,{}),e.def=n,e.type=n.type,Object.defineProperty(e,"_def",{value:n}),e.parse=(r,o)=>Wc(e,r,o,{callee:e.parse}),e.safeParse=(r,o)=>Vc(e,r,o),e.parseAsync=async(r,o)=>qc(e,r,o,{callee:e.parseAsync}),e.safeParseAsync=async(r,o)=>Bc(e,r,o),e.spa=e.safeParseAsync,e.encode=(r,o)=>Gc(e,r,o),e.decode=(r,o)=>Xc(e,r,o),e.encodeAsync=async(r,o)=>Qc(e,r,o),e.decodeAsync=async(r,o)=>Kc(e,r,o),e.safeEncode=(r,o)=>Yc(e,r,o),e.safeDecode=(r,o)=>eu(e,r,o),e.safeEncodeAsync=async(r,o)=>tu(e,r,o),e.safeDecodeAsync=async(r,o)=>nu(e,r,o),tr(e,"ZodType",{check(...r){let o=this.def;return this.clone(E.mergeDefs(o,{checks:[...o.checks??[],...r.map(t=>typeof t=="function"?{_zod:{check:t,def:{check:"custom"},onattach:[]}}:t)]}),{parent:!0})},with(...r){return this.check(...r)},clone(r,o){return pe(this,r,o)},brand(){return this},register(r,o){return r.add(this,o),this},refine(r,o){return this.check(Vu(r,o))},superRefine(r,o){return this.check(Bu(r,o))},overwrite(r){return this.check(Oe(r))},optional(){return Yn(this)},exactOptional(){return Iu(this)},nullable(){return er(this)},nullish(){return Yn(er(this))},nonoptional(r){return Ru(this,r)},array(){return or(this)},or(r){return ni([this,r])},and(r){return bu(this,r)},transform(r){return jo(this,oi(r))},default(r){return Lu(this,r)},prefault(r){return Du(this,r)},catch(r){return Uu(this,r)},pipe(r){return jo(this,r)},readonly(){return Zu(this)},describe(r){let o=this.clone();return se.add(o,{description:r}),o},meta(...r){if(r.length===0)return se.get(this);let o=this.clone();return se.add(o,r[0]),o},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(r){return r(this)}}),Object.defineProperty(e,"description",{get(){return se.get(e)?.description},configurable:!0}),e)),Uo=h("_ZodString",(e,n)=>{At.init(e,n),M.init(e,n),e._zod.processJSONSchema=(o,t,i)=>oc(e,o,t,i);let r=e._zod.bag;e.format=r.format??null,e.minLength=r.minimum??null,e.maxLength=r.maximum??null,tr(e,"_ZodString",{regex(...o){return this.check(Kt(...o))},includes(...o){return this.check(tn(...o))},startsWith(...o){return this.check(nn(...o))},endsWith(...o){return this.check(rn(...o))},min(...o){return this.check(nt(...o))},max(...o){return this.check(Rt(...o))},length(...o){return this.check(Ot(...o))},nonempty(...o){return this.check(nt(1,...o))},lowercase(o){return this.check(Yt(o))},uppercase(o){return this.check(en(o))},trim(){return this.check(sn())},normalize(...o){return this.check(an(...o))},toLowerCase(){return this.check(ln())},toUpperCase(){return this.check(cn())},slugify(){return this.check(un())}})}),vn=h("ZodString",(e,n)=>{At.init(e,n),Uo.init(e,n),e.email=r=>e.check(Yr(Mo,r)),e.url=r=>e.check(Gn(nr,r)),e.jwt=r=>e.check(yo(Yo,r)),e.emoji=r=>e.check(oo(No,r)),e.guid=r=>e.check(Bn(Kn,r)),e.uuid=r=>e.check(eo(He,r)),e.uuidv4=r=>e.check(to(He,r)),e.uuidv6=r=>e.check(no(He,r)),e.uuidv7=r=>e.check(ro(He,r)),e.nanoid=r=>e.check(io(Co,r)),e.guid=r=>e.check(Bn(Kn,r)),e.cuid=r=>e.check(ao(Zo,r)),e.cuid2=r=>e.check(so(Fo,r)),e.ulid=r=>e.check(lo(Ho,r)),e.base64=r=>e.check(vo(Xo,r)),e.base64url=r=>e.check(ho(Qo,r)),e.xid=r=>e.check(co(Jo,r)),e.ksuid=r=>e.check(uo(Wo,r)),e.ipv4=r=>e.check(po(qo,r)),e.ipv6=r=>e.check(mo(Vo,r)),e.cidrv4=r=>e.check(fo(Bo,r)),e.cidrv6=r=>e.check(go(Go,r)),e.e164=r=>e.check(bo(Ko,r)),e.datetime=r=>e.check(Zc(r)),e.date=r=>e.check(Fc(r)),e.time=r=>e.check(Hc(r)),e.duration=r=>e.check(Jc(r))});function Qn(e){return bl(vn,e)}var B=h("ZodStringFormat",(e,n)=>{V.init(e,n),Uo.init(e,n)}),Mo=h("ZodEmail",(e,n)=>{cs.init(e,n),B.init(e,n)});function Tm(e){return Yr(Mo,e)}var Kn=h("ZodGUID",(e,n)=>{ss.init(e,n),B.init(e,n)});function Im(e){return Bn(Kn,e)}var He=h("ZodUUID",(e,n)=>{ls.init(e,n),B.init(e,n)});function zm(e){return eo(He,e)}function Pm(e){return to(He,e)}function Lm(e){return no(He,e)}function Am(e){return ro(He,e)}var nr=h("ZodURL",(e,n)=>{us.init(e,n),B.init(e,n)});function Dm(e){return Gn(nr,e)}function Rm(e){return Gn(nr,{protocol:Ee.httpProtocol,hostname:Ee.domain,...E.normalizeParams(e)})}var No=h("ZodEmoji",(e,n)=>{ds.init(e,n),B.init(e,n)});function Om(e){return oo(No,e)}var Co=h("ZodNanoID",(e,n)=>{ps.init(e,n),B.init(e,n)});function jm(e){return io(Co,e)}var Zo=h("ZodCUID",(e,n)=>{ms.init(e,n),B.init(e,n)});function Um(e){return ao(Zo,e)}var Fo=h("ZodCUID2",(e,n)=>{fs.init(e,n),B.init(e,n)});function Mm(e){return so(Fo,e)}var Ho=h("ZodULID",(e,n)=>{gs.init(e,n),B.init(e,n)});function Nm(e){return lo(Ho,e)}var Jo=h("ZodXID",(e,n)=>{vs.init(e,n),B.init(e,n)});function Cm(e){return co(Jo,e)}var Wo=h("ZodKSUID",(e,n)=>{hs.init(e,n),B.init(e,n)});function Zm(e){return uo(Wo,e)}var qo=h("ZodIPv4",(e,n)=>{_s.init(e,n),B.init(e,n)});function Fm(e){return po(qo,e)}var ru=h("ZodMAC",(e,n)=>{ks.init(e,n),B.init(e,n)});function Hm(e){return xl(ru,e)}var Vo=h("ZodIPv6",(e,n)=>{Ss.init(e,n),B.init(e,n)});function Jm(e){return mo(Vo,e)}var Bo=h("ZodCIDRv4",(e,n)=>{Es.init(e,n),B.init(e,n)});function Wm(e){return fo(Bo,e)}var Go=h("ZodCIDRv6",(e,n)=>{ws.init(e,n),B.init(e,n)});function qm(e){return go(Go,e)}var Xo=h("ZodBase64",(e,n)=>{Is.init(e,n),B.init(e,n)});function Vm(e){return vo(Xo,e)}var Qo=h("ZodBase64URL",(e,n)=>{zs.init(e,n),B.init(e,n)});function Bm(e){return ho(Qo,e)}var Ko=h("ZodE164",(e,n)=>{Ps.init(e,n),B.init(e,n)});function Gm(e){return bo(Ko,e)}var Yo=h("ZodJWT",(e,n)=>{Ls.init(e,n),B.init(e,n)});function Xm(e){return yo(Yo,e)}var hn=h("ZodCustomStringFormat",(e,n)=>{As.init(e,n),B.init(e,n)});function Qm(e,n,r={}){return dn(hn,e,n,r)}function Km(e){return dn(hn,"hostname",Ee.hostname,e)}function Ym(e){return dn(hn,"hex",Ee.hex,e)}function ef(e,n){let r=n?.enc??"hex",o=`${e}_${r}`,t=Ee[o];if(!t)throw new Error(`Unrecognized hash format: ${o}`);return dn(hn,o,t,n)}var bn=h("ZodNumber",(e,n)=>{Hr.init(e,n),M.init(e,n),e._zod.processJSONSchema=(o,t,i)=>ic(e,o,t,i),tr(e,"ZodNumber",{gt(o,t){return this.check(Ze(o,t))},gte(o,t){return this.check(fe(o,t))},min(o,t){return this.check(fe(o,t))},lt(o,t){return this.check(Ce(o,t))},lte(o,t){return this.check(we(o,t))},max(o,t){return this.check(we(o,t))},int(o){return this.check(Oo(o))},safe(o){return this.check(Oo(o))},positive(o){return this.check(Ze(0,o))},nonnegative(o){return this.check(fe(0,o))},negative(o){return this.check(Ce(0,o))},nonpositive(o){return this.check(we(0,o))},multipleOf(o,t){return this.check(bt(o,t))},step(o,t){return this.check(bt(o,t))},finite(){return this}});let r=e._zod.bag;e.minValue=Math.max(r.minimum??Number.NEGATIVE_INFINITY,r.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(r.maximum??Number.POSITIVE_INFINITY,r.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(r.format??"").includes("int")||Number.isSafeInteger(r.multipleOf??.5),e.isFinite=!0,e.format=r.format??null});function ou(e){return wl(bn,e)}var Ut=h("ZodNumberFormat",(e,n)=>{Ds.init(e,n),bn.init(e,n)});function Oo(e){return Il(Ut,e)}function tf(e){return zl(Ut,e)}function nf(e){return Pl(Ut,e)}function rf(e){return Ll(Ut,e)}function of(e){return Al(Ut,e)}var yn=h("ZodBoolean",(e,n)=>{Hn.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>ac(e,r,o,t)});function iu(e){return Dl(yn,e)}var xn=h("ZodBigInt",(e,n)=>{Jr.init(e,n),M.init(e,n),e._zod.processJSONSchema=(o,t,i)=>sc(e,o,t,i),e.gte=(o,t)=>e.check(fe(o,t)),e.min=(o,t)=>e.check(fe(o,t)),e.gt=(o,t)=>e.check(Ze(o,t)),e.gte=(o,t)=>e.check(fe(o,t)),e.min=(o,t)=>e.check(fe(o,t)),e.lt=(o,t)=>e.check(Ce(o,t)),e.lte=(o,t)=>e.check(we(o,t)),e.max=(o,t)=>e.check(we(o,t)),e.positive=o=>e.check(Ze(BigInt(0),o)),e.negative=o=>e.check(Ce(BigInt(0),o)),e.nonpositive=o=>e.check(we(BigInt(0),o)),e.nonnegative=o=>e.check(fe(BigInt(0),o)),e.multipleOf=(o,t)=>e.check(bt(o,t));let r=e._zod.bag;e.minValue=r.minimum??null,e.maxValue=r.maximum??null,e.format=r.format??null});function af(e){return Ol(xn,e)}var ei=h("ZodBigIntFormat",(e,n)=>{Rs.init(e,n),xn.init(e,n)});function sf(e){return Ul(ei,e)}function lf(e){return Ml(ei,e)}var au=h("ZodSymbol",(e,n)=>{Os.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>lc(e,r,o,t)});function cf(e){return Nl(au,e)}var su=h("ZodUndefined",(e,n)=>{js.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>uc(e,r,o,t)});function uf(e){return Cl(su,e)}var lu=h("ZodNull",(e,n)=>{Us.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>cc(e,r,o,t)});function cu(e){return Zl(lu,e)}var uu=h("ZodAny",(e,n)=>{Ms.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>mc(e,r,o,t)});function df(){return Fl(uu)}var du=h("ZodUnknown",(e,n)=>{Ns.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>fc(e,r,o,t)});function jt(){return Hl(du)}var pu=h("ZodNever",(e,n)=>{Cs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>pc(e,r,o,t)});function ti(e){return Jl(pu,e)}var mu=h("ZodVoid",(e,n)=>{Zs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>dc(e,r,o,t)});function pf(e){return Wl(mu,e)}var rr=h("ZodDate",(e,n)=>{Fs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(o,t,i)=>gc(e,o,t,i),e.min=(o,t)=>e.check(fe(o,t)),e.max=(o,t)=>e.check(we(o,t));let r=e._zod.bag;e.minDate=r.minimum?new Date(r.minimum):null,e.maxDate=r.maximum?new Date(r.maximum):null});function mf(e){return ql(rr,e)}var fu=h("ZodArray",(e,n)=>{Hs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Tc(e,r,o,t),e.element=n.element,tr(e,"ZodArray",{min(r,o){return this.check(nt(r,o))},nonempty(r){return this.check(nt(1,r))},max(r,o){return this.check(Rt(r,o))},length(r,o){return this.check(Ot(r,o))},unwrap(){return this.element}})});function or(e,n){return Gl(fu,e,n)}function ff(e){let n=e._zod.def.shape;return ri(Object.keys(n))}var ir=h("ZodObject",(e,n)=>{Js.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Ic(e,r,o,t),E.defineLazy(e,"shape",()=>n.shape),tr(e,"ZodObject",{keyof(){return ri(Object.keys(this._zod.def.shape))},catchall(r){return this.clone({...this._zod.def,catchall:r})},passthrough(){return this.clone({...this._zod.def,catchall:jt()})},loose(){return this.clone({...this._zod.def,catchall:jt()})},strict(){return this.clone({...this._zod.def,catchall:ti()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(r){return E.extend(this,r)},safeExtend(r){return E.safeExtend(this,r)},merge(r){return E.merge(this,r)},pick(r){return E.pick(this,r)},omit(r){return E.omit(this,r)},partial(...r){return E.partial(ii,this,r[0])},required(...r){return E.required(ai,this,r[0])}})});function gf(e,n){let r={type:"object",shape:e??{},...E.normalizeParams(n)};return new ir(r)}function vf(e,n){return new ir({type:"object",shape:e,catchall:ti(),...E.normalizeParams(n)})}function hf(e,n){return new ir({type:"object",shape:e,catchall:jt(),...E.normalizeParams(n)})}var ar=h("ZodUnion",(e,n)=>{Jn.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>wo(e,r,o,t),e.options=n.options});function ni(e,n){return new ar({type:"union",options:e,...E.normalizeParams(n)})}var gu=h("ZodXor",(e,n)=>{ar.init(e,n),Ws.init(e,n),e._zod.processJSONSchema=(r,o,t)=>wo(e,r,o,t),e.options=n.options});function bf(e,n){return new gu({type:"union",options:e,inclusive:!1,...E.normalizeParams(n)})}var vu=h("ZodDiscriminatedUnion",(e,n)=>{ar.init(e,n),qs.init(e,n)});function yf(e,n,r){return new vu({type:"union",options:n,discriminator:e,...E.normalizeParams(r)})}var hu=h("ZodIntersection",(e,n)=>{Vs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>zc(e,r,o,t)});function bu(e,n){return new hu({type:"intersection",left:e,right:n})}var yu=h("ZodTuple",(e,n)=>{Wr.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Pc(e,r,o,t),e.rest=r=>e.clone({...e._zod.def,rest:r})});function xu(e,n,r){let o=n instanceof O,t=o?r:n,i=o?n:null;return new yu({type:"tuple",items:e,rest:i,...E.normalizeParams(t)})}var fn=h("ZodRecord",(e,n)=>{Bs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Lc(e,r,o,t),e.keyType=n.keyType,e.valueType=n.valueType});function $u(e,n,r){return!n||!n._zod?new fn({type:"record",keyType:Qn(),valueType:e,...E.normalizeParams(n)}):new fn({type:"record",keyType:e,valueType:n,...E.normalizeParams(r)})}function xf(e,n,r){let o=pe(e);return o._zod.values=void 0,new fn({type:"record",keyType:o,valueType:n,...E.normalizeParams(r)})}function $f(e,n,r){return new fn({type:"record",keyType:e,valueType:n,mode:"loose",...E.normalizeParams(r)})}var _u=h("ZodMap",(e,n)=>{Gs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Ec(e,r,o,t),e.keyType=n.keyType,e.valueType=n.valueType,e.min=(...r)=>e.check(Fe(...r)),e.nonempty=r=>e.check(Fe(1,r)),e.max=(...r)=>e.check(yt(...r)),e.size=(...r)=>e.check(Dt(...r))});function _f(e,n,r){return new _u({type:"map",keyType:e,valueType:n,...E.normalizeParams(r)})}var Su=h("ZodSet",(e,n)=>{Xs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>wc(e,r,o,t),e.min=(...r)=>e.check(Fe(...r)),e.nonempty=r=>e.check(Fe(1,r)),e.max=(...r)=>e.check(yt(...r)),e.size=(...r)=>e.check(Dt(...r))});function Sf(e,n){return new Su({type:"set",valueType:e,...E.normalizeParams(n)})}var gn=h("ZodEnum",(e,n)=>{Qs.init(e,n),M.init(e,n),e._zod.processJSONSchema=(o,t,i)=>vc(e,o,t,i),e.enum=n.entries,e.options=Object.values(n.entries);let r=new Set(Object.keys(n.entries));e.extract=(o,t)=>{let i={};for(let a of o)if(r.has(a))i[a]=n.entries[a];else throw new Error(`Key ${a} not found in enum`);return new gn({...n,checks:[],...E.normalizeParams(t),entries:i})},e.exclude=(o,t)=>{let i={...n.entries};for(let a of o)if(r.has(a))delete i[a];else throw new Error(`Key ${a} not found in enum`);return new gn({...n,checks:[],...E.normalizeParams(t),entries:i})}});function ri(e,n){let r=Array.isArray(e)?Object.fromEntries(e.map(o=>[o,o])):e;return new gn({type:"enum",entries:r,...E.normalizeParams(n)})}function kf(e,n){return new gn({type:"enum",entries:e,...E.normalizeParams(n)})}var ku=h("ZodLiteral",(e,n)=>{Ks.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>hc(e,r,o,t),e.values=new Set(n.values),Object.defineProperty(e,"value",{get(){if(n.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return n.values[0]}})});function Ef(e,n){return new ku({type:"literal",values:Array.isArray(e)?e:[e],...E.normalizeParams(n)})}var Eu=h("ZodFile",(e,n)=>{Ys.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>xc(e,r,o,t),e.min=(r,o)=>e.check(Fe(r,o)),e.max=(r,o)=>e.check(yt(r,o)),e.mime=(r,o)=>e.check(on(Array.isArray(r)?r:[r],o))});function wf(e){return Xl(Eu,e)}var wu=h("ZodTransform",(e,n)=>{el.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>kc(e,r,o,t),e._zod.parse=(r,o)=>{if(o.direction==="backward")throw new mt(e.constructor.name);r.addIssue=i=>{if(typeof i=="string")r.issues.push(E.issue(i,r.value,n));else{let a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=r.value),a.inst??(a.inst=e),r.issues.push(E.issue(a))}};let t=n.transform(r.value,r);return t instanceof Promise?t.then(i=>(r.value=i,r.fallback=!0,r)):(r.value=t,r.fallback=!0,r)}});function oi(e){return new wu({type:"transform",transform:e})}var ii=h("ZodOptional",(e,n)=>{qr.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>To(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function Yn(e){return new ii({type:"optional",innerType:e})}var Tu=h("ZodExactOptional",(e,n)=>{tl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>To(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function Iu(e){return new Tu({type:"optional",innerType:e})}var zu=h("ZodNullable",(e,n)=>{nl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Ac(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function er(e){return new zu({type:"nullable",innerType:e})}function Tf(e){return Yn(er(e))}var Pu=h("ZodDefault",(e,n)=>{rl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Rc(e,r,o,t),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function Lu(e,n){return new Pu({type:"default",innerType:e,get defaultValue(){return typeof n=="function"?n():E.shallowClone(n)}})}var Au=h("ZodPrefault",(e,n)=>{ol.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Oc(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function Du(e,n){return new Au({type:"prefault",innerType:e,get defaultValue(){return typeof n=="function"?n():E.shallowClone(n)}})}var ai=h("ZodNonOptional",(e,n)=>{il.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Dc(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function Ru(e,n){return new ai({type:"nonoptional",innerType:e,...E.normalizeParams(n)})}var Ou=h("ZodSuccess",(e,n)=>{al.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>$c(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function If(e){return new Ou({type:"success",innerType:e})}var ju=h("ZodCatch",(e,n)=>{sl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>jc(e,r,o,t),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function Uu(e,n){return new ju({type:"catch",innerType:e,catchValue:typeof n=="function"?n:()=>n})}var Mu=h("ZodNaN",(e,n)=>{ll.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>bc(e,r,o,t)});function zf(e){return Bl(Mu,e)}var sr=h("ZodPipe",(e,n)=>{Vr.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Uc(e,r,o,t),e.in=n.in,e.out=n.out});function jo(e,n){return new sr({type:"pipe",in:e,out:n})}var lr=h("ZodCodec",(e,n)=>{sr.init(e,n),Wn.init(e,n)});function Pf(e,n,r){return new lr({type:"pipe",in:e,out:n,transform:r.decode,reverseTransform:r.encode})}function Lf(e){let n=e._zod.def;return new lr({type:"pipe",in:n.out,out:n.in,transform:n.reverseTransform,reverseTransform:n.transform})}var Nu=h("ZodPreprocess",(e,n)=>{sr.init(e,n),cl.init(e,n)}),Cu=h("ZodReadonly",(e,n)=>{ul.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Mc(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function Zu(e){return new Cu({type:"readonly",innerType:e})}var Fu=h("ZodTemplateLiteral",(e,n)=>{dl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>yc(e,r,o,t)});function Af(e,n){return new Fu({type:"template_literal",parts:e,...E.normalizeParams(n)})}var Hu=h("ZodLazy",(e,n)=>{fl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Cc(e,r,o,t),e.unwrap=()=>e._zod.def.getter()});function Ju(e){return new Hu({type:"lazy",getter:e})}var Wu=h("ZodPromise",(e,n)=>{ml.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Nc(e,r,o,t),e.unwrap=()=>e._zod.def.innerType});function Df(e){return new Wu({type:"promise",innerType:e})}var qu=h("ZodFunction",(e,n)=>{pl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>Sc(e,r,o,t)});function Rf(e){return new qu({type:"function",input:Array.isArray(e?.input)?xu(e?.input):e?.input??or(jt()),output:e?.output??jt()})}var cr=h("ZodCustom",(e,n)=>{gl.init(e,n),M.init(e,n),e._zod.processJSONSchema=(r,o,t)=>_c(e,r,o,t)});function Of(e){let n=new G({check:"custom"});return n._zod.check=e,n}function jf(e,n){return Ql(cr,e??(()=>!0),n)}function Vu(e,n={}){return Kl(cr,e,n)}function Bu(e,n){return Yl(e,n)}var Uf=ec,Mf=tc;function Nf(e,n={}){let r=new cr({type:"custom",check:"custom",fn:o=>o instanceof e,abort:!0,...E.normalizeParams(n)});return r._zod.bag.Class=e,r._zod.check=o=>{o.value instanceof e||o.issues.push({code:"invalid_type",expected:e.name,input:o.value,inst:r,path:[...r._zod.def.path??[]]})},r}var Cf=(...e)=>nc({Codec:lr,Boolean:yn,String:vn},...e);function Zf(e){let n=Ju(()=>ni([Qn(e),ou(),iu(),cu(),or(n),$u(Qn(),n)]));return n}function Ff(e,n){return new Nu({type:"pipe",in:oi(e),out:n})}var Yy={invalid_type:"invalid_type",too_big:"too_big",too_small:"too_small",invalid_format:"invalid_format",not_multiple_of:"not_multiple_of",unrecognized_keys:"unrecognized_keys",invalid_union:"invalid_union",invalid_key:"invalid_key",invalid_element:"invalid_element",invalid_value:"invalid_value",custom:"custom"};function ex(e){ee({customError:e})}function tx(){return ee().customError}var Gu;Gu||(Gu={});var z={...Xn,...Po,iso:mn},nx=new Set(["$schema","$ref","$defs","definitions","$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor","type","enum","const","anyOf","oneOf","allOf","not","properties","required","additionalProperties","patternProperties","propertyNames","minProperties","maxProperties","items","prefixItems","additionalItems","minItems","maxItems","uniqueItems","contains","minContains","maxContains","minLength","maxLength","pattern","format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","multipleOf","description","default","contentEncoding","contentMediaType","contentSchema","unevaluatedItems","unevaluatedProperties","if","then","else","dependentSchemas","dependentRequired","nullable","readOnly"]);function rx(e,n){let r=e.$schema;return r==="https://json-schema.org/draft/2020-12/schema"?"draft-2020-12":r==="http://json-schema.org/draft-07/schema#"?"draft-7":r==="http://json-schema.org/draft-04/schema#"?"draft-4":n??"draft-2020-12"}function ox(e,n){if(!e.startsWith("#"))throw new Error("External $ref is not supported, only local refs (#/...) are allowed");let r=e.slice(1).split("/").filter(Boolean);if(r.length===0)return n.rootSchema;let o=n.version==="draft-2020-12"?"$defs":"definitions";if(r[0]===o){let t=r[1];if(!t||!n.defs[t])throw new Error(`Reference not found: ${e}`);return n.defs[t]}throw new Error(`Reference not found: ${e}`)}function Hf(e,n){if(e.not!==void 0){if(typeof e.not=="object"&&Object.keys(e.not).length===0)return z.never();throw new Error("not is not supported in Zod (except { not: {} } for never)")}if(e.unevaluatedItems!==void 0)throw new Error("unevaluatedItems is not supported");if(e.unevaluatedProperties!==void 0)throw new Error("unevaluatedProperties is not supported");if(e.if!==void 0||e.then!==void 0||e.else!==void 0)throw new Error("Conditional schemas (if/then/else) are not supported");if(e.dependentSchemas!==void 0||e.dependentRequired!==void 0)throw new Error("dependentSchemas and dependentRequired are not supported");if(e.$ref){let t=e.$ref;if(n.refs.has(t))return n.refs.get(t);if(n.processing.has(t))return z.lazy(()=>{if(!n.refs.has(t))throw new Error(`Circular reference not resolved: ${t}`);return n.refs.get(t)});n.processing.add(t);let i=ox(t,n),a=le(i,n);return n.refs.set(t,a),n.processing.delete(t),a}if(e.enum!==void 0){let t=e.enum;if(n.version==="openapi-3.0"&&e.nullable===!0&&t.length===1&&t[0]===null)return z.null();if(t.length===0)return z.never();if(t.length===1)return z.literal(t[0]);if(t.every(a=>typeof a=="string"))return z.enum(t);let i=t.map(a=>z.literal(a));return i.length<2?i[0]:z.union([i[0],i[1],...i.slice(2)])}if(e.const!==void 0)return z.literal(e.const);let r=e.type;if(Array.isArray(r)){let t=r.map(i=>{let a={...e,type:i};return Hf(a,n)});return t.length===0?z.never():t.length===1?t[0]:z.union(t)}if(!r)return z.any();let o;switch(r){case"string":{let t=z.string();if(e.format){let i=e.format;i==="email"?t=t.check(z.email()):i==="uri"||i==="uri-reference"?t=t.check(z.url()):i==="uuid"||i==="guid"?t=t.check(z.uuid()):i==="date-time"?t=t.check(z.iso.datetime()):i==="date"?t=t.check(z.iso.date()):i==="time"?t=t.check(z.iso.time()):i==="duration"?t=t.check(z.iso.duration()):i==="ipv4"?t=t.check(z.ipv4()):i==="ipv6"?t=t.check(z.ipv6()):i==="mac"?t=t.check(z.mac()):i==="cidr"?t=t.check(z.cidrv4()):i==="cidr-v6"?t=t.check(z.cidrv6()):i==="base64"?t=t.check(z.base64()):i==="base64url"?t=t.check(z.base64url()):i==="e164"?t=t.check(z.e164()):i==="jwt"?t=t.check(z.jwt()):i==="emoji"?t=t.check(z.emoji()):i==="nanoid"?t=t.check(z.nanoid()):i==="cuid"?t=t.check(z.cuid()):i==="cuid2"?t=t.check(z.cuid2()):i==="ulid"?t=t.check(z.ulid()):i==="xid"?t=t.check(z.xid()):i==="ksuid"&&(t=t.check(z.ksuid()))}typeof e.minLength=="number"&&(t=t.min(e.minLength)),typeof e.maxLength=="number"&&(t=t.max(e.maxLength)),e.pattern&&(t=t.regex(new RegExp(e.pattern))),o=t;break}case"number":case"integer":{let t=r==="integer"?z.number().int():z.number();typeof e.minimum=="number"&&(t=t.min(e.minimum)),typeof e.maximum=="number"&&(t=t.max(e.maximum)),typeof e.exclusiveMinimum=="number"?t=t.gt(e.exclusiveMinimum):e.exclusiveMinimum===!0&&typeof e.minimum=="number"&&(t=t.gt(e.minimum)),typeof e.exclusiveMaximum=="number"?t=t.lt(e.exclusiveMaximum):e.exclusiveMaximum===!0&&typeof e.maximum=="number"&&(t=t.lt(e.maximum)),typeof e.multipleOf=="number"&&(t=t.multipleOf(e.multipleOf)),o=t;break}case"boolean":{o=z.boolean();break}case"null":{o=z.null();break}case"object":{let t={},i=e.properties||{},a=new Set(e.required||[]);for(let[l,c]of Object.entries(i)){let d=le(c,n);t[l]=a.has(l)?d:d.optional()}if(e.propertyNames){let l=le(e.propertyNames,n),c=e.additionalProperties&&typeof e.additionalProperties=="object"?le(e.additionalProperties,n):z.any();if(Object.keys(t).length===0){o=z.record(l,c);break}let d=z.object(t).passthrough(),u=z.looseRecord(l,c);o=z.intersection(d,u);break}if(e.patternProperties){let l=e.patternProperties,c=Object.keys(l),d=[];for(let f of c){let p=le(l[f],n),g=z.string().regex(new RegExp(f));d.push(z.looseRecord(g,p))}let u=[];if(Object.keys(t).length>0&&u.push(z.object(t).passthrough()),u.push(...d),u.length===0)o=z.object({}).passthrough();else if(u.length===1)o=u[0];else{let f=z.intersection(u[0],u[1]);for(let p=2;p<u.length;p++)f=z.intersection(f,u[p]);o=f}break}let s=z.object(t);e.additionalProperties===!1?o=s.strict():typeof e.additionalProperties=="object"?o=s.catchall(le(e.additionalProperties,n)):o=s.passthrough();break}case"array":{let t=e.prefixItems,i=e.items;if(t&&Array.isArray(t)){let a=t.map(l=>le(l,n)),s=i&&typeof i=="object"&&!Array.isArray(i)?le(i,n):void 0;s?o=z.tuple(a).rest(s):o=z.tuple(a),typeof e.minItems=="number"&&(o=o.check(z.minLength(e.minItems))),typeof e.maxItems=="number"&&(o=o.check(z.maxLength(e.maxItems)))}else if(Array.isArray(i)){let a=i.map(l=>le(l,n)),s=e.additionalItems&&typeof e.additionalItems=="object"?le(e.additionalItems,n):void 0;s?o=z.tuple(a).rest(s):o=z.tuple(a),typeof e.minItems=="number"&&(o=o.check(z.minLength(e.minItems))),typeof e.maxItems=="number"&&(o=o.check(z.maxLength(e.maxItems)))}else if(i!==void 0){let a=le(i,n),s=z.array(a);typeof e.minItems=="number"&&(s=s.min(e.minItems)),typeof e.maxItems=="number"&&(s=s.max(e.maxItems)),o=s}else o=z.array(z.any());break}default:throw new Error(`Unsupported type: ${r}`)}return o}function le(e,n){if(typeof e=="boolean")return e?z.any():z.never();let r=Hf(e,n),o=e.type||e.enum!==void 0||e.const!==void 0;if(e.anyOf&&Array.isArray(e.anyOf)){let s=e.anyOf.map(c=>le(c,n)),l=z.union(s);r=o?z.intersection(r,l):l}if(e.oneOf&&Array.isArray(e.oneOf)){let s=e.oneOf.map(c=>le(c,n)),l=z.xor(s);r=o?z.intersection(r,l):l}if(e.allOf&&Array.isArray(e.allOf))if(e.allOf.length===0)r=o?r:z.any();else{let s=o?r:le(e.allOf[0],n),l=o?0:1;for(let c=l;c<e.allOf.length;c++)s=z.intersection(s,le(e.allOf[c],n));r=s}e.nullable===!0&&n.version==="openapi-3.0"&&(r=z.nullable(r)),e.readOnly===!0&&(r=z.readonly(r)),e.default!==void 0&&(r=r.default(e.default));let t={},i=["$id","id","$comment","$anchor","$vocabulary","$dynamicRef","$dynamicAnchor"];for(let s of i)s in e&&(t[s]=e[s]);let a=["contentEncoding","contentMediaType","contentSchema"];for(let s of a)s in e&&(t[s]=e[s]);for(let s of Object.keys(e))nx.has(s)||(t[s]=e[s]);return Object.keys(t).length>0&&n.registry.add(r,t),e.description&&(r=r.describe(e.description)),r}function Jf(e,n){if(typeof e=="boolean")return e?z.any():z.never();let r;try{r=JSON.parse(JSON.stringify(e))}catch{throw new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas")}let o=rx(r,n?.defaultTarget),t=r.$defs||r.definitions||{},i={version:o,defs:t,refs:new Map,processing:new Set,rootSchema:r,registry:n?.registry??se};return le(r,i)}var Xu={};Ye(Xu,{bigint:()=>lx,boolean:()=>sx,date:()=>cx,number:()=>ax,string:()=>ix});function ix(e){return yl(vn,e)}function ax(e){return Tl(bn,e)}function sx(e){return Rl(yn,e)}function lx(e){return jl(xn,e)}function cx(e){return Vl(rr,e)}ee(Br());function Qu(){try{if(typeof window<"u"&&typeof window.getContext=="function")return window.getContext();let e=window.SillyTavern;if(e&&typeof e.getContext=="function")return e.getContext()}catch(e){console.error("[开局框架] getContext 失败",e)}return null}var Wf=m.object({enabled:m.boolean().default(!0),useGlobal:m.boolean().default(!0),contextRounds:m.number().int().default(3),group:m.string().default(""),updateFrequency:m.number().int().default(3),skipFloors:m.number().int().default(0),sendLatestRows:m.number().int().default(-1),sendRowsTemplate:m.string().default(""),extractTags:m.string().default(""),extractRules:m.array(m.object({start:m.string(),end:m.string()})).default([]),excludeTags:m.string().default(""),excludeRules:m.array(m.object({start:m.string(),end:m.string()})).default([])}),Ku=Wf.parse({}),si=m.object({note:m.string().default(""),insertRule:m.string().default(""),updateRule:m.string().default(""),deleteRule:m.string().default("")}),ux=m.object({uid:m.string(),name:m.string(),purpose:m.string().default(""),headers:m.array(m.string()),rows:m.array(m.array(m.union([m.string(),m.null()]))),sourceData:si,updateConfig:Wf}),qf=m.object({version:m.literal(1),sheets:m.record(m.string(),ux)});function $n(){return{version:1,sheets:{}}}var li=m.object({uid:m.string(),name:m.string(),purpose:m.string().default(""),scope:m.enum(["always","onSeed"]).default("always"),headers:m.array(m.string()),sourceData:si,updateConfig:m.object({}).catchall(m.any()).default({})}),ur=m.object({mode:m.enum(["tavern","custom"]).default("custom"),stream:m.boolean().default(!0),proxyPreset:m.string().default(""),apiUrl:m.string().default(""),apiKey:m.string().default(""),model:m.string().default(""),source:m.string().default("openai"),temperature:m.number().default(.6),maxTokens:m.union([m.number(),m.literal("same_as_preset"),m.literal("unset")]).default(2048),topP:m.union([m.number(),m.literal("same_as_preset"),m.literal("unset")]).default("unset")}),ci=ur.extend({mode:m.enum(["tavern","custom"]).default("tavern")}),ui=m.object({contextRounds:m.number().int().default(3),updateFrequency:m.number().int().default(3),skipFloors:m.number().int().default(0),sendLatestRows:m.number().int().default(-1),extractTags:m.string().default("<content>|</content>"),excludeTags:m.string().default("")});function _n(e,n){let r=e.updateConfig;return r.useGlobal?{...r,contextRounds:n.contextRounds,updateFrequency:n.updateFrequency,skipFloors:n.skipFloors,sendLatestRows:n.sendLatestRows,extractTags:n.extractTags,extractRules:[],excludeTags:n.excludeTags,excludeRules:[]}:r}var dx=m.object({role:m.enum(["system","user","assistant"]),content:m.string(),enabled:m.boolean().default(!0),note:m.string().default("")});var Vf=[{name:"{{instructions}}",desc:'填表指令正文（本页下方"填表指令"输入框的内容会替换到这里）'},{name:"{{target_tables}}",desc:"本次要更新的表名清单（自动生成，不用手填）"},{name:"{{table_data}}",desc:"表数据：列定义、维护规则、当前所有行（自动渲染）"},{name:"{{messages}}",desc:'最近对话正文（按表的"读取对话轮数"截取，已做标签过滤）'},{name:"{{floor_info}}",desc:"楼层元信息（AI 回复计数、分组、读取轮数等）"},{name:"{{worldbook}}",desc:"世界书内容（自动读取全局 + 角色卡 + 聊天绑定的世界书：蓝灯条目全发，绿灯条目按关键词匹配最近对话；在下方开启该段才会发送）"},{name:"{{char_description}}",desc:"角色卡描述（在下方段里开启才会发送，当前版本内容为空）"},{name:"{{persona_description}}",desc:"用户设定 / 个人描述（在下方段里开启才会发送，当前版本内容为空）"}],Yu=m.object({segments:m.array(dx),instructions:m.string().default("")}),qk=m.object({fillApi:ur,dialogueApi:ci,globalDefaults:ui,promptTemplate:Yu,autoFillEnabled:m.boolean().default(!0),maxRetries:m.number().int().default(1)}),px=m.object({type:m.enum(["insert","update","delete"]),sheet:m.string(),rowId:m.number().int().optional(),cells:m.array(m.union([m.string(),m.null()])).optional()}),Bf=m.object({operations:m.array(px)}),Gf={name:"table_fill_ops",description:"表格维护操作列表",value:{type:"object",properties:{operations:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["insert","update","delete"]},sheet:{type:"string",description:"表名或 uid"},rowId:{type:"integer",description:"update/delete 必填，1 基行号；insert 可省"},cells:{type:"array",items:{type:["string","null"]},description:"insert/update 的单元格值，按表头顺序"}},required:["type","sheet"]}}},required:["operations"]}};var ed=[{role:"system",enabled:!0,note:"填表指令与输出格式",content:`你是表格维护 AI。根据下方【表数据】与【最近对话】更新指定表。
{{instructions}}

输出要求：只输出一个 JSON 对象，不要输出任何其他文字、不要代码块围栏。
JSON 必须符合此结构：
{ "operations": [ { "type": "insert"|"update"|"delete", "sheet": "表名", "rowId": 数字(1基,update/delete必填), "cells": [按表头顺序的值] } ] }
- insert 追加到表末尾，rowId 可省。
- update/delete 必须给 rowId。
- 没有需要更新的表时，输出 { "operations": [] }。
- cells 值用字符串或 null；不要省略列。`},{role:"system",enabled:!0,note:"本次目标表",content:`【本次需要更新的表】
{{target_tables}}`},{role:"system",enabled:!0,note:"表数据（含列定义/维护规则/当前行）",content:`【表数据】
{{table_data}}`},{role:"system",enabled:!0,note:"最近对话正文",content:`【最近对话】
{{messages}}`},{role:"system",enabled:!0,note:"世界书内容（默认开：全局+角色卡+聊天绑定的世界书，蓝灯全发/绿灯按关键词）",content:`【世界书】
{{worldbook}}`},{role:"system",enabled:!1,note:"角色描述（默认关）",content:`【角色】
{{char_description}}`},{role:"system",enabled:!1,note:"用户设定（默认关）",content:`【用户设定】
{{persona_description}}`},{role:"user",enabled:!0,note:"元信息 + 触发请求",content:`当前层数：{{floor_info}}
请按上述表数据与对话，输出本次需要执行的操作 JSON。`}],td=`更新原则：
1. 只在确实发生变化时才产生操作；无变化返回空 operations。
2. 严格遵循每张表 Note / Insert触发 / Update触发 / Delete触发 中的规则与约束。
3. 不要凭空创造规则里没有的字段或取值；不确定时宁可不改。
4. 数值类字段（如信任度、属性）单次变化幅度遵循表内约束，不越界。`,Xf={segments:ed,instructions:td};var nd=m.object({id:m.string().min(1,"缺少 id"),name:m.string().min(1,"缺少 name"),description:m.string().default(""),rulesText:m.string().default(""),tables:m.array(li).default([]),settlementStartMark:m.string().default("【自定义开局结算开始】"),settlementEndMark:m.string().default("【自定义开局结算结束】"),requiredKeys:m.array(m.string()).default([]),seedRows:m.record(m.string(),m.array(m.array(m.union([m.string(),m.null()])))).default({}),builtin:m.boolean().default(!1)}),dr="custom-opening";var pr="opening-framework",rd=m.object({windowX:m.number().nullable().default(null),windowY:m.number().nullable().default(null),windowWidth:m.number().min(280).max(4096).default(420),windowHeight:m.number().min(320).max(4096).default(660),floatingToggleEnabled:m.boolean().default(!0),toggleX:m.number().nullable().default(null),toggleY:m.number().nullable().default(null),toggleSize:m.number().min(32).max(72).default(44),autoFillEnabled:m.boolean().default(!0),maxRetries:m.number().int().min(0).max(5).default(1),fillApi:ur.catch(ur.parse({})),dialogueApi:ci.catch(ci.parse({})),globalDefaults:ui.catch(ui.parse({})),promptTemplate:Yu.catch(Xf),activeRulePackageId:m.string().catch(dr).default(dr),rulePackages:m.array(m.unknown()).catch([]),autoSyncEnabled:m.boolean().default(!0),statusPlaceholderEnabled:m.boolean().default(!0),appMode:m.enum(["presets","gradband"]).default("presets")});function mx(){let n=Qu()?.extensionSettings?.[pr];return n&&typeof n=="object"?n:{}}function te(){try{let e=rd.safeParse(mx());return e.success?e.data:(console.warn("[开局框架] 设置校验失败，使用默认值：",e.error.message),rd.parse({}))}catch(e){return console.error("[开局框架] loadSettings 异常：",e),rd.parse({})}}function X(e,n){let r=Qu();if(!r?.extensionSettings){console.warn("[开局框架] extensionSettings 不可用，设置未持久化");return}(!r.extensionSettings[pr]||typeof r.extensionSettings[pr]!="object")&&(r.extensionSettings[pr]={}),r.extensionSettings[pr][e]=n,typeof r.saveSettingsDebounced=="function"&&r.saveSettingsDebounced()}function Sn(e){for(let[n,r]of Object.entries(e))X(n,r)}var Te={root:"of-root",window:"of-window",content:"of-content",titlebar:"of-titlebar"},Kf=320,Yf=420;function od(){let e=document.getElementById(Te.root);return e||(e=document.createElement("div"),e.id=Te.root,e.className="of-root",document.body.appendChild(e),e)}function fx(){let e=document.getElementById(Te.window);if(e)return e;let n=od();e=document.createElement("div"),e.id=Te.window,e.className="of-window";let r=te(),o=window.innerWidth,t=window.innerHeight,i=o<=640,a=It(i?o-8:r.windowWidth,Kf,o),s=It(i?t-8:r.windowHeight,Yf,t),l=i?4:r.windowX??Math.max(10,o-a-40),c=i?4:r.windowY??Math.max(60,Math.floor((t-s)/2)),d=et(l,c,a,s);return e.style.left=d.x+"px",e.style.top=d.y+"px",e.style.width=a+"px",e.style.height=s+"px",e.innerHTML=`
    <div class="of-window-titlebar" id="${Te.titlebar}">
      <span class="of-window-title">🎬 开局框架</span>
      <button class="of-window-close" id="of-window-close" title="关闭">✕</button>
    </div>
    <div class="of-window-content" id="${Te.content}"></div>
    <div class="of-window-resize" data-dir="e" title="左右拉伸"></div>
    <div class="of-window-resize" data-dir="s" title="上下拉伸"></div>
    <div class="of-window-resize" data-dir="se" title="斜角拉伸"></div>
  `,e.querySelector("#of-window-close")?.addEventListener("click",u=>{u.stopPropagation(),mr(!1)}),n.appendChild(e),e}function gx(){let e=document.getElementById(Te.window),n=e?.querySelector("#"+Te.titlebar);if(!e||!n)return;let r=!1,o=0,t=0,i=null;n.addEventListener("pointerdown",s=>{if(s.target.closest(".of-window-close")||e.classList.contains("resizing"))return;r=!0,i=s.pointerId;let c=e.getBoundingClientRect();o=s.clientX-c.left,t=s.clientY-c.top,s.target.setPointerCapture(s.pointerId),e.classList.add("dragging"),s.preventDefault()}),n.addEventListener("pointermove",s=>{if(!r||s.pointerId!==i)return;let l=et(s.clientX-o,s.clientY-t,e.offsetWidth,e.offsetHeight);e.style.left=l.x+"px",e.style.top=l.y+"px",s.preventDefault()});let a=s=>{if(!(!r||s.pointerId!==i)){r=!1;try{s.target.releasePointerCapture(s.pointerId)}catch{}e.classList.remove("dragging"),X("windowX",parseInt(e.style.left,10)),X("windowY",parseInt(e.style.top,10)),i=null}};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),n.addEventListener("contextmenu",s=>s.preventDefault())}function vx(){let e=document.getElementById(Te.window);e&&e.querySelectorAll(".of-window-resize").forEach(n=>{let r=!1,o=null,t="",i=0,a=0,s=0,l=0;n.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),t=n.getAttribute("data-dir")||"";let u=e.getBoundingClientRect();r=!0,o=d.pointerId,i=d.clientX,a=d.clientY,s=u.width,l=u.height,n.setPointerCapture(d.pointerId),e.classList.add("resizing")}),n.addEventListener("pointermove",d=>{if(!r||d.pointerId!==o)return;d.preventDefault();let u=d.clientX-i,f=d.clientY-a,p=s,g=l;t.includes("e")&&(p=It(s+u,Kf,window.innerWidth)),t.includes("s")&&(g=It(l+f,Yf,window.innerHeight)),e.style.width=Math.round(p)+"px",e.style.height=Math.round(g)+"px"});let c=d=>{if(!r||d.pointerId!==o)return;r=!1;try{n.releasePointerCapture(d.pointerId)}catch{}e.classList.remove("resizing");let u=et(parseInt(e.style.left,10)||0,parseInt(e.style.top,10)||0,e.offsetWidth,e.offsetHeight);e.style.left=u.x+"px",e.style.top=u.y+"px",X("windowX",u.x),X("windowY",u.y),X("windowWidth",e.offsetWidth),X("windowHeight",e.offsetHeight),o=null,t=""};n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c),n.addEventListener("contextmenu",d=>d.preventDefault())})}function mr(e){let n=document.getElementById(Te.window);if(!n)return!1;let r=e??!n.classList.contains("visible");return n.classList.toggle("visible",r),r}var Qf=!1;function eg(){let e=fx();return gx(),vx(),Qf||(Qf=!0,window.addEventListener("resize",()=>{let n=document.getElementById(Te.window);if(!n)return;let r=et(parseInt(n.style.left,10)||0,parseInt(n.style.top,10)||0,n.offsetWidth,n.offsetHeight);n.style.left=r.x+"px",n.style.top=r.y+"px"})),e}function tg(){document.getElementById(Te.window)?.remove();let e=document.getElementById(Te.root);e&&e.childElementCount===0&&e.remove()}var fr="of-toggle",ng=5,hx=300;function di({onToggle:e}={}){let n=document.getElementById(fr);if(n)return n;let r=od();n=document.createElement("div"),n.id=fr,n.className="of-toggle",n.title="拖拽移动 / 点击打开",n.innerHTML='<span class="of-toggle-icon">🎬</span>';let o=te(),t=It(o.toggleSize,32,72),i=window.innerWidth,a=i<=640,s=Math.max(10,i-t-(a?12:40)),l=a?Math.round(window.innerHeight*.32):60,c=et(o.toggleX??s,o.toggleY??l,t,t);n.style.width=t+"px",n.style.height=t+"px",n.style.left=c.x+"px",n.style.top=c.y+"px",r.appendChild(n),bx(n,e),rg(n,o.floatingToggleEnabled);let d=window;return d.__ofToggleResizeBound||(d.__ofToggleResizeBound=!0,window.addEventListener("resize",()=>{let u=document.getElementById(fr);if(!u)return;let f=u.offsetWidth||44,p=et(parseInt(u.style.left,10)||0,parseInt(u.style.top,10)||0,f,f);u.style.left=p.x+"px",u.style.top=p.y+"px"})),n}function bx(e,n){let r=!1,o=0,t=0,i=0,a=0,s=null,l=0;e.addEventListener("pointerdown",d=>{l=Date.now(),r=!1,s=d.pointerId;let u=e.getBoundingClientRect();i=d.clientX-u.left,a=d.clientY-u.top,o=d.clientX,t=d.clientY,e.setPointerCapture(d.pointerId),e.classList.add("dragging"),d.preventDefault()}),e.addEventListener("pointermove",d=>{if(d.pointerId!==s||((Math.abs(d.clientX-o)>ng||Math.abs(d.clientY-t)>ng)&&(r=!0),!r))return;let u=et(d.clientX-i,d.clientY-a,e.offsetWidth,e.offsetHeight);e.style.left=u.x+"px",e.style.top=u.y+"px",d.preventDefault()});let c=d=>{if(d.pointerId===s){try{e.releasePointerCapture(d.pointerId)}catch{}e.classList.remove("dragging"),r&&(X("toggleX",parseInt(e.style.left,10)),X("toggleY",parseInt(e.style.top,10))),!r&&Date.now()-l<hx&&typeof n=="function"&&n(),r=!1,s=null}};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),e.addEventListener("contextmenu",d=>d.preventDefault())}function rg(e,n){let r=e??document.getElementById(fr);if(!r)return;let o=n===!1;r.hidden=o,r.style.display=o?"none":""}function og(e){X("floatingToggleEnabled",e),rg(null,e)}function ig(){document.getElementById(fr)?.remove()}var gr="1.3.0";var pi=class{handlers=[];add(n,r,o,t){n.addEventListener(r,o,t),this.handlers.push(()=>n.removeEventListener(r,o,t))}on(n,r,o){n.on(r,o),this.handlers.push(()=>{try{n.removeListener?.(r,o)}catch{}})}addDisposer(n){this.handlers.push(n)}dispose(){this.handlers.forEach(n=>{try{n()}catch{}}),this.handlers=[]}};var ag=new URL("../../../../",import.meta.url),fi=!1,mi=null;async function sg(){if(!fi)try{let e=await import(new URL("slash-commands.js",ag).href),n=await import(new URL("slash-commands/SlashCommand.js",ag).href),r=e?.SlashCommandParser,o=n?.SlashCommand;if(!r?.addCommandObject||!o?.fromProps)throw new Error("酒馆核心 SlashCommand 模块不可用");r.addCommandObject(o.fromProps({name:"opening",aliases:["开局"],callback:()=>mr()?"已打开开局框架窗口":"已关闭开局框架窗口",helpString:"开关开局框架窗口（可拖拽、可缩放）"})),mi=r,fi=!0,console.info("[开局框架] Slash 命令已注册：/opening（别名 /开局）")}catch(e){console.warn("[开局框架] Slash 命令注册失败（不影响其他功能）：",e)}}function lg(){if(!(!fi||!mi)){try{mi.removeCommand?.("opening")}catch(e){console.warn("[开局框架] Slash 命令注销失败：",e)}fi=!1,mi=null}}var kn=null;function id(){if(kn)return kn;try{if(typeof window<"u"&&window.TavernHelper)return kn=window.TavernHelper,kn;let e=window.SillyTavern;if(e&&typeof e.getContext=="function"){let n=e.getContext();if(n&&n.TavernHelper)return kn=n.TavernHelper,kn}}catch(e){console.error("[开局框架] 获取 TavernHelper 失败",e)}return null}function cg(){return!!id()}function ug(e,n){try{let o=SillyTavern?.getContext?.()?.extensionSettings;if(!o)return n;let t=o[e];return t??n}catch{return n}}function dg(e,n){try{let r=SillyTavern?.getContext?.();if(!r?.extensionSettings)return;r.extensionSettings[e]=n,typeof r.saveSettingsDebounced=="function"&&r.saveSettingsDebounced()}catch{}}function pg(e){if(!e||!e.includes("{{"))return e;try{let n=SillyTavern?.getContext?.(),r=n?.substituteParams;if(typeof r=="function")return r.call(n,e)}catch{}return e}function je(e){let n=id();if(!n)return null;let r=n[e];return typeof r=="function"?r:null}function Ue(e,...n){let r=je(e);if(!r)return null;try{return Promise.resolve(r(...n))}catch(o){return console.warn(`[开局框架] TavernHelper.${e} 调用失败：`,o),null}}function Pe(e){let n=je("getVariables");if(n)try{return n(e)??{}}catch{return{}}return console.error("[开局框架] getVariables 不可用（TavernHelper 未注入主页面？）"),{}}function ae(e,n){let r=je("updateVariablesWith");if(r){try{r(e,n)}catch(t){console.error("[开局框架] updateVariablesWith 失败",t)}return}let o=je("replaceVariables");if(o){let t=Pe(n),i=e(t)||t;try{o(i,n)}catch(a){console.error("[开局框架] replaceVariables 失败",a)}}}function ve(e,n){let r=je("getChatMessages");if(r)try{return r(e,n)??[]}catch(o){return console.error("[开局框架] getChatMessages 失败",o),[]}try{let o=window.SillyTavern;if(o&&Array.isArray(o.chat))return o.chat.map((t,i)=>({message_id:i,name:t.name,role:t.is_user?"user":"assistant",is_user:!!t.is_user,is_hidden:!!t.is_hidden,message:t.mes}))}catch{}return console.error("[开局框架] getChatMessages 不可用"),[]}async function St(e,n){let r=je("setChatMessages");if(r)try{return await r(e,n)}catch(o){console.error("[开局框架] setChatMessages 失败",o);return}console.error("[开局框架] setChatMessages 不可用（TavernHelper 未注入？）")}function Le(){let e=je("getLastMessageId");if(e)try{let n=e();if(typeof n=="number"&&n>=-1)return n}catch{}try{return ve("0-{{lastMessageId}}").length-1}catch{}return-1}async function gi(e){let n=je("generateRaw");if(!n)throw console.error("[开局框架] generateRaw 不可用"),new Error("generateRaw 不可用（TavernHelper 未注入）");return n(e)}function ad(e){let n=je("stopGenerationById");if(n)try{return n(e)}catch{return!1}return!1}var vi={MESSAGE_RECEIVED:"message_received",MESSAGE_DELETED:"message_deleted",MESSAGE_UPDATED:"message_updated",MESSAGE_SWIPED:"message_swiped",CHAT_CHANGED:"chat_id_changed",MESSAGE_SENT:"message_sent",GENERATION_ENDED:"generation_ended"};function yx(){try{if(typeof window<"u"&&window.eventSource)return window.eventSource;let e=window.SillyTavern;if(e&&typeof e.getContext=="function"){let n=e.getContext();if(n&&n.eventSource)return n.eventSource}}catch{}return null}function Me(e,n){let r=yx();if(r&&typeof r.on=="function"){let o=(...t)=>{try{n(...t)}catch(i){console.error("[开局框架] 事件回调出错",i)}};return r.on(e,o),{stop:()=>{try{r.removeListener?.(e,o)}catch{}}}}return console.error("[开局框架] eventSource 不可用，无法监听 "+e),{stop:()=>{}}}function xx(){try{let e=id();if(e?.iframe_events?.STREAM_TOKEN_RECEIVED_FULLY)return String(e.iframe_events.STREAM_TOKEN_RECEIVED_FULLY);if(window.iframe_events?.STREAM_TOKEN_RECEIVED_FULLY)return String(window.iframe_events.STREAM_TOKEN_RECEIVED_FULLY)}catch{}return"js_stream_token_received_fully"}function mg(e,n){let r=xx(),o=(...i)=>{let a=typeof i[0]=="string"?i[0]:"",s=typeof i[1]=="string"?i[1]:void 0;if(!(s&&e&&s!==e))try{n(a)}catch(l){console.error("[开局框架] 流式回调出错",l)}},t=je("eventOn");if(t)try{let i=t(r,o);return{stop:()=>{try{i?.stop?.()}catch{}try{je("eventRemoveListener")?.(r,o)}catch{}}}}catch{}return Me(r,o)}var fg="__of_tables__";function W(){try{let e=Pe({type:"chat"}),n=e&&e[fg];if(!n)return $n();let r=qf.safeParse(n);return r.success?r.data:(console.warn("[开局框架] 表格存储校验失败，返回空 store：",r.error.message),$n())}catch(e){return console.error("[开局框架] loadStore 异常：",e),$n()}}function $e(e){ae(n=>(n[fg]=structuredClone(e),n),{type:"chat"})}function Ae(e=W()){return Object.values(e.sheets)}function ce(e,n){let r=e.sheets[n];return r||(Ae(e).find(o=>o.name===n||o.uid===n)??null)}function gg(e,n){let r=structuredClone(e);for(let o of n){let t=ce(r,o.sheet);if(!t)throw new Error(`操作目标表不存在：${o.sheet}`);let i=t.headers.length;if(o.type==="insert"){if(!o.cells)throw new Error(`insert 缺少 cells（表 ${t.name}）`);let a=En(o.cells,i);t.rows.push(a)}else if(o.type==="update"){if(o.rowId==null)throw new Error(`update 缺少 rowId（表 ${t.name}）`);if(!o.cells)throw new Error(`update 缺少 cells（表 ${t.name}）`);let a=o.rowId-1;if(a<0||a>=t.rows.length)throw new Error(`update 行号越界：${o.rowId}（表 ${t.name}）`);t.rows[a]=En(o.cells,i)}else if(o.type==="delete"){if(o.rowId==null)throw new Error(`delete 缺少 rowId（表 ${t.name}）`);let a=o.rowId-1;if(a<0||a>=t.rows.length)throw new Error(`delete 行号越界：${o.rowId}（表 ${t.name}）`);t.rows.splice(a,1)}}return r}function En(e,n){let r=e.slice(0,n);for(;r.length<n;)r.push(null);return r}function Je(e){let n=$n();for(let r of e){let o={...r,sourceData:r?.sourceData??{}},t=li.safeParse(o);if(!t.success){console.warn("[开局框架] 模板表校验失败，已跳过：",t.error.message,r);continue}let i=t.data,a={...Ku,...i.updateConfig},s={uid:i.uid,name:i.name,purpose:i.purpose,headers:i.headers,rows:[],sourceData:i.sourceData,updateConfig:a};n.sheets[`sheet_${i.uid}`]=s}return $e(n),console.info(`[开局框架] 已导入模板：${Object.keys(n.sheets).length}/${e.length} 张表`),n}function hi(e,n){let r=W(),o=r.sheets[e]??ce(r,e);if(!o)throw new Error(`seedInitialRows 目标表不存在：${e}`);let t=o.headers.length;o.rows=n.map(i=>En(i,t)),$e(r)}function bi(e,n){let r=W(),o=r.sheets[e]??ce(r,e);if(!o)throw new Error(`表不存在：${e}`);let t=n.rowId-1;if(t<0||t>=o.rows.length)throw new Error(`行号越界：${n.rowId}`);if(n.colIndex<0||n.colIndex>=o.headers.length)throw new Error(`列号越界：${n.colIndex}`);o.rows[t][n.colIndex]=n.value,$e(r)}function vg(e,n){let r=W(),o=r.sheets[e]??ce(r,e);if(!o)throw new Error(`表不存在：${e}`);let t=n.rowId-1;if(t<0||t>=o.rows.length)throw new Error(`行号越界：${n.rowId}`);o.rows[t]=En(n.cells,o.headers.length),$e(r)}function yi(e,n,r){let o=W(),t=o.sheets[e]??ce(o,e);if(!t)throw new Error(`表不存在：${e}`);let i=En(n,t.headers.length);r==null?t.rows.push(i):t.rows.splice(r-1,0,i),$e(o)}function xi(e,n){let r=W(),o=r.sheets[e]??ce(r,e);if(!o)throw new Error(`表不存在：${e}`);let t=n-1;if(t<0||t>=o.rows.length)throw new Error(`行号越界：${n}`);o.rows.splice(t,1),$e(r)}function hg(e,n){let r=W(),o=r.sheets[e]??ce(r,e);if(!o)throw new Error(`表不存在：${e}`);n.name!=null&&(o.name=n.name),n.purpose!=null&&(o.purpose=n.purpose),n.headers!=null&&(o.headers=n.headers,o.rows=o.rows.map(t=>En(t,n.headers.length))),$e(r)}function bg(e,n){let r=W(),o=r.sheets[e]??ce(r,e);if(!o)throw new Error(`表不存在：${e}`);o.sourceData={...o.sourceData,...n},$e(r)}function sd(e,n){let r=W(),o=r.sheets[e]??ce(r,e);if(!o)throw new Error(`表不存在：${e}`);o.updateConfig={...o.updateConfig,...n},$e(r)}function yg(e){let n=W(),r=`sheet_${e.uid}`;if(n.sheets[r])throw new Error(`表 uid 已存在：${e.uid}`);let o={...Ku,...e.updateConfig};return n.sheets[r]={uid:e.uid,name:e.name,purpose:e.purpose??"",headers:e.headers,rows:[],sourceData:si.parse(e.sourceData??{}),updateConfig:o},$e(n),r}function xg(e){let n=W();delete n.sheets[e],$e(n)}function $g(){$e($n())}function Ie(){let e=te();return{fillApi:e.fillApi,dialogueApi:e.dialogueApi,globalDefaults:e.globalDefaults,promptTemplate:e.promptTemplate,autoFillEnabled:e.autoFillEnabled,maxRetries:e.maxRetries}}function ld(e){Sn({fillApi:e.fillApi,dialogueApi:e.dialogueApi,globalDefaults:e.globalDefaults,promptTemplate:e.promptTemplate,autoFillEnabled:e.autoFillEnabled,maxRetries:e.maxRetries})}function cd(e){let n=Ie();return n.dialogueApi={...n.dialogueApi,...e},ld(n),n}function _g(e){let n=Ie();return n.promptTemplate=e,ld(n),n}function Sg(){let e=Ie();return e.promptTemplate={segments:ed,instructions:td},ld(e),e}function ot(e){if(!e||!e.includes("{{"))return e;try{let n=SillyTavern?.getContext?.(),r=n?.substituteParams;if(typeof r=="function")return r.call(n,e)}catch{}return e}function kg(e,n={}){let r=n.updateConfig??e.updateConfig,o=n.sendLatestRows??r.sendLatestRows,t=n.sendRowsTemplate??r.sendRowsTemplate,i=e.rows;o>0&&i.length>o&&(i=i.slice(-o));let a=e.headers,s=a.map((d,u)=>`[${u}:${d}]`).join(", "),l=`[表名: ${e.name}]
`;l+=`Columns: ${s}
`;let c=e.sourceData;return c.note&&(l+=`Note: ${c.note}
`),c.insertRule&&(l+=`Insert触发: ${c.insertRule}
`),c.updateRule&&(l+=`Update触发: ${c.updateRule}
`),c.deleteRule&&(l+=`Delete触发: ${c.deleteRule}
`),i.length===0?(l+=`(该表为空)
`,l):(t&&t.trim()?(l+=`数据：
`,i.forEach((d,u)=>{let f=u+1,p=d.map($=>ot($??"")),g={row_index:String(u),row_id:String(f),cells:p.join(", "),row:p.join(", ")};p.forEach(($,_)=>{g[`col_${_}`]=$}),a.forEach(($,_)=>{g[$]=p[_]??""}),l+=$x(t,g)+`
`})):i.forEach((d,u)=>{l+=`  [${u+1}] ${d.map(f=>ot(f??"")).join(", ")}
`}),l)}function $x(e,n){return e.replace(/\{\{\s*([\w\u4e00-\u9fa5]+)\s*\}\}/g,(r,o)=>Object.prototype.hasOwnProperty.call(n,o)?n[o]:r)}function vr(e,n=""){let r=[];if(Array.isArray(e))for(let t of e)t&&typeof t.start=="string"&&typeof t.end=="string"&&r.push({start:t.start,end:t.end});let o=String(n||"").trim();return o&&o.split(`
`).forEach(t=>{let i=t.indexOf("|");i>0&&r.push({start:t.slice(0,i).trim(),end:t.slice(i+1).trim()})}),r}function _x(e,n,r){if(!e||!n||!r)return null;let o=e.toLowerCase(),t=n.toLowerCase(),i=r.toLowerCase(),a=o.lastIndexOf(i);if(a===-1)return null;let s=o.lastIndexOf(t,Math.max(0,a-1));if(s===-1)return null;let l=a+r.length;return l<=s?null:e.slice(s,l)}function Sx(e,n,r){if(!e||!n||!r)return e;let o=e.toLowerCase(),t=n.toLowerCase(),i=r.toLowerCase(),a=o.lastIndexOf(i);if(a===-1)return e;let s=o.lastIndexOf(t,Math.max(0,a-1));if(s===-1)return e;let l=a+r.length;return l<=s?e:(e.slice(0,s)+e.slice(l)).replace(/\n{3,}/g,`

`).trim()}function kx(e,n){if(!e||n.length===0)return e;let r=[];for(let o of n){let t=_x(e,o.start,o.end);t!==null&&r.push(t)}return r.length>0?r.join(`

`):e}function Ex(e,n){let r=String(e??"");for(let o of n)r=Sx(r,o.start,o.end);return r}function Eg(e,n={}){let r=String(e??""),o=vr(n.extractRules,n.extractTags);r=kx(r,o);let t=vr(n.excludeRules,n.excludeTags);return r=Ex(r,t),r}function wg(e){let{contextRounds:n,skipFloors:r,extractTags:o,extractRules:t,excludeTags:i,excludeRules:a}=e;if(n<=0)return"(无最新对话内容)";let s=ve("0-{{lastMessageId}}");if(!s||s.length===0)return"(无最新对话内容)";let l=r>0?s.slice(0,-r):s;if(l.length===0)return"(无最新对话内容)";let c=[],d=0;for(let g=l.length-1;g>=0;g--){let $=l[g];if($.is_user&&(d++,d>n))break;c.push($)}let u=c.reverse();if(u.length===0)return"(无最新对话内容)";let f=wx();return u.map(g=>{let $=g.is_user?f:g.name||"角色",_=g.message||"";return!g.is_user&&(o||t&&t.length||i||a&&a.length)&&(_=Eg(_,{extractTags:o,extractRules:t,excludeTags:i,excludeRules:a})),`${$}: ${_}`}).join(`
`)}function Tg(e){if(e<=0)return"";let n=ve("0-{{lastMessageId}}");if(!n||n.length===0)return"";let r=[],o=0;for(let t=n.length-1;t>=0&&!(n[t].is_user&&(o++,o>e));t--)r.push(n[t]);return r.reverse().map(t=>t.message||"").join(`
`)}function wx(){try{let e=SillyTavern?.getContext?.()?.name1||window.name1||"用户";return String(e||"用户")}catch{return"用户"}}function Ig(e){return e||"默认组"}function zg(e){let n=new Map;for(let o of e.sheets){if(!o.updateConfig.enabled)continue;let t=(o.updateConfig.group||"").trim();n.has(t)||n.set(t,[]),n.get(t).push(o)}let r=[];for(let[o,t]of n)r.push(Tx(o,t,e));return r}function Tx(e,n,r){let{settings:o,floorInfo:t}=r,i=o.globalDefaults,a=n.map(_=>_n(_,i)),s=Math.max(1,...a.map(_=>_.contextRounds??i.contextRounds)),l=n.map(_=>kg(_,{updateConfig:_n(_,i)})).join(`
`),c=n.map(_=>`- ${_.name}（uid:${_.uid}，${_.rows.length} 行）`).join(`
`),d=a.flatMap(_=>vr(_.extractRules,_.extractTags)),u=a.flatMap(_=>vr(_.excludeRules,_.excludeTags)),f=Math.max(0,...a.map(_=>_.skipFloors??0),i.skipFloors),p=wg({contextRounds:s,skipFloors:f,extractRules:d,excludeRules:u}),g={"{{instructions}}":o.promptTemplate.instructions||"","{{table_data}}":l,"{{messages}}":p,"{{worldbook}}":r.worldbookText||"","{{char_description}}":r.charDescription||"","{{persona_description}}":r.personaDescription||"","{{target_tables}}":c,"{{floor_info}}":t||""},$=o.promptTemplate.segments.filter(_=>_.enabled).map(_=>({role:_.role,content:Ix(_.content,g)}));return{group:e,sheets:n,contextRounds:s,orderedPrompts:$}}function Ix(e,n){return e.replace(/\{\{[^}]+\}\}/g,r=>Object.prototype.hasOwnProperty.call(n,r)?n[r]:r)}function zx(){return window.EjsTemplate??window.TavernHelper?.EjsTemplate}async function Px(e,n,r,o){let t=e;if(t.includes("<%")&&r&&o)try{t=await r.evaltemplate(t,o)}catch(i){console.warn(`[开局框架] 世界书条目「${n}」EJS 渲染失败（原样发送）：`,i)}return t.includes("{{")&&(t=ot(t)),t}async function Lx(){let e=[],n=i=>{typeof i=="string"&&i&&!e.includes(i)&&e.push(i)},r=await Ue("getGlobalWorldbookNames");Array.isArray(r)&&r.forEach(n);let o=await Ue("getCharWorldbookNames","current");o&&(n(o.primary),Array.isArray(o.additional)&&o.additional.forEach(n));let t=await Ue("getChatWorldbookName","current");return n(t),e}function Ax(e,n){try{if(e instanceof RegExp)return e.test(n);if(typeof e=="string"&&e.length>0)return n.toLowerCase().includes(e.toLowerCase())}catch{}return!1}async function Pg(e={}){let n=e.matchText??"";try{let r=await Lx();if(r.length===0)return console.info("[开局框架] 没有可读取的世界书（全局/角色卡/聊天都未绑定）"),"";let o=zx(),t=typeof o?.evaltemplate=="function"&&typeof o?.prepareContext=="function",i=null;if(t)try{i=await o.prepareContext()}catch(s){console.warn("[开局框架] EjsTemplate.prepareContext 失败，EJS 条目将原样发送：",s)}let a=[];for(let s of r){let l=await Ue("getWorldbook",s);if(Array.isArray(l))for(let c of l){if(!c||c.enabled===!1||!c.content)continue;let d=c.strategy?.type;if(d==="vectorized")continue;if(d==="selective"){let p=c.strategy?.keys??[];if(p.length===0||!n||!p.some(g=>Ax(g,n)))continue}if(typeof c.probability=="number"&&c.probability<100&&Math.random()*100>=c.probability)continue;let u=c.name||"未命名条目",f=await Px(c.content,u,t?o:null,i);a.push(`【${u}】
${f}`)}}return console.info(`[开局框架] 世界书读取：${r.length} 本，采纳 ${a.length} 条（蓝灯全发/绿灯按关键词；EJS ${t?"已编译":"未安装插件→原样发送"}；宏已替换；不截断）`),a.join(`

`)}catch(r){return console.warn("[开局框架] 读取世界书失败（本次填表不带世界书）：",r),""}}var Mt="stat_data",hr="开局框架",Dx=["normal","regenerate","continue","swipe"],Lg=0,$i=null;function Rx(e){return e.rows.map(n=>{let r={};return e.headers.forEach((o,t)=>{r[o]=ot(n[t]??"")}),r})}function Ox(){let e=W(),n={};for(let r of Ae(e))n[r.name]=Rx(r);return n}async function Ag(e){if(e<0)return{ok:!1,tables:0,error:"当前没有聊天消息"};try{let n=Ox(),r=Object.keys(n).length;return await ae(o=>{let t=o??{},i=t[Mt]&&typeof t[Mt]=="object"?t[Mt]:{};return i[hr]=n,t[Mt]=i,t},{type:"message",message_id:e}),{ok:!0,tables:r}}catch(n){return console.error("[数据同步] 写入楼层变量失败：",n),{ok:!1,tables:0,error:n.message}}}async function We(){let e=Le(),n=await Ag(e);return n.ok?(console.info(`[数据同步] 已将 ${n.tables} 张表写入第 ${e} 楼变量（stat_data.${hr}）`),{...n,floor:e}):n}async function Dg(e,n){let r=Math.max(0,Math.min(e,n)),o=Math.min(Le(),Math.max(e,n)),t=0,i=0;for(let a=r;a<=o;a++){i++;try{let l=Pe({type:"message",message_id:a})?.[Mt];if(!l||typeof l!="object"||!(hr in l))continue;await ae(c=>{let d=c??{},u=d[Mt];return u&&typeof u=="object"&&hr in u&&(delete u[hr],Object.keys(u).length===0&&delete d[Mt]),d},{type:"message",message_id:a}),t++}catch(s){console.warn(`[数据同步] 清除第 ${a} 楼失败：`,s)}}return console.info(`[数据同步] 清除完成：扫描 ${i} 楼，清除 ${t} 楼的同步数据`),{cleared:t,scanned:i}}function ud(){return te().autoSyncEnabled}function Rg(){$i||($i=Me("message_received",(e,n)=>{if(!Dx.includes(n)||!ud())return;let r=Date.now();r-Lg<1500||(Lg=r,Ag(typeof e=="number"?e:Le()))}),console.info("[数据同步] 自动同步已开启（收到 AI 回复后写入该楼变量）"))}function jx(){$i?.stop(),$i=null}function Og(e){X("autoSyncEnabled",e),e?Rg():jx()}function jg(){ud()&&Rg()}async function Ug(){ud()&&await We()}function dd(e){let n={};return e.proxyPreset?n.proxy_preset=e.proxyPreset:(e.apiUrl&&(n.apiurl=e.apiUrl),e.apiKey&&(n.key=e.apiKey)),e.model&&(n.model=e.model),e.source&&(n.source=e.source),n.temperature=e.temperature,n.max_tokens=e.maxTokens,e.topP!=="unset"&&(n.top_p=e.topP),n}async function pd(e){let{settings:n,orderedPrompts:r,generationId:o}=e,t=n.fillApi.mode==="custom"?dd(n.fillApi):void 0;return md({orderedPrompts:r,jsonSchema:Gf,customApi:t,stream:n.fillApi.stream!==!1,generationId:o})}async function md(e){let{orderedPrompts:n,jsonSchema:r,customApi:o,stream:t,generationId:i}=e;try{let a=await gi({ordered_prompts:n,should_stream:t!==!1,should_silence:!0,...i?{generation_id:i}:{},...o?{custom_api:o}:{},...r?{json_schema:r}:{}});if(typeof a=="string")return{ok:!0,text:a};if(a&&typeof a=="object"){let s=a;if(typeof s.content=="string"&&s.content)return{ok:!0,text:s.content};if(Array.isArray(s.tool_calls)&&s.tool_calls.length>0){let l=s.tool_calls[0]?.function?.arguments;if(typeof l=="string")return{ok:!0,text:l}}return{ok:!1,error:"返回为非文本对象，无法解析"}}return{ok:!1,error:"返回为空"}}catch(a){return{ok:!1,error:`generateRaw 异常：${a.message}`}}}function Ux(e){if(!e||!e.trim())return{ok:!1,error:"返回为空",raw:e};let n=e.trim();n=Mx(n);let r;try{r=JSON.parse(n)}catch(t){let i=n.match(/\{[\s\S]*\}/);if(i)try{r=JSON.parse(i[0])}catch(a){return{ok:!1,error:`JSON.parse 失败：${a.message}`,raw:e}}else return{ok:!1,error:`JSON.parse 失败：${t.message}`,raw:e}}let o=Bf.safeParse(r);return o.success?{ok:!0,operations:o.data.operations}:{ok:!1,error:`结构校验失败：${o.error.message}`,raw:e}}function Mx(e){let n=e.match(/^```(?:json)?\s*\n?([\s\S]*?)\n?```\s*$/i);return n?n[1].trim():e}function Nx(e){let n=W(),r=[];for(let o of e){let t=ce(n,o.sheet);t?((o.type==="update"||o.type==="delete")&&(o.rowId==null?r.push(`${o.type} 缺 rowId（${t.name}）`):(o.rowId<1||o.rowId>t.rows.length)&&r.push(`${o.type} 行号越界 ${o.rowId}（${t.name}）`)),(o.type==="insert"||o.type==="update")&&!o.cells&&r.push(`${o.type} 缺 cells（${t.name}）`)):r.push(`表不存在：${o.sheet}`)}return r}function fd(e){let n=Ux(e);if(!n.ok||!n.operations)return{ok:!1,applied:0,error:n.error};if(n.operations.length===0)return console.info("[开局框架] AI 返回空操作，无需更新"),{ok:!0,applied:0};let r=Nx(n.operations);if(r.length>0)return{ok:!1,applied:0,error:`预检失败：${r.join("; ")}`};let o=W();try{let t=gg(o,n.operations);return $e(t),console.info(`[开局框架] 已应用 ${n.operations.length} 条操作`),{ok:!0,applied:n.operations.length}}catch(t){return{ok:!1,applied:0,error:`应用失败：${t.message}`}}}var _i=!1,wn=0,Si=-1,br=null;async function gd(e={}){if(_i)return toastr?.warning?.("正在填表中，请稍候"),{ok:!1,applied:0,errors:["busy"]};let n=W(),r=Ae(n).filter(s=>s.updateConfig.enabled);if(e.targetSheetKeys&&e.targetSheetKeys.length>0&&(r=e.targetSheetKeys.map(s=>ce(n,s)).filter(s=>!!s).filter(s=>s.updateConfig.enabled)),r.length===0)return toastr?.info?.("没有需要填写的表"),{ok:!0,applied:0,errors:[]};let o=Ie();if(!o.autoFillEnabled&&e.reason!=="manual")return{ok:!1,applied:0,errors:["auto disabled"]};_i=!0;let t=[],i=0,a=`of_fill_${Date.now()}`;try{let s=`AI 回复计数=${wn}，上次填表=${Si}`,c=o.promptTemplate.segments.some(u=>u.enabled&&u.content.includes("{{worldbook}}"))?await Pg({matchText:Tg(o.globalDefaults.contextRounds)}):"",d=zg({sheets:r,settings:o,floorInfo:s,worldbookText:c,charDescription:"",personaDescription:""});for(let u of d){let f=Ig(u.group),p=encodeURIComponent(u.group||"_"),g=await pd({orderedPrompts:u.orderedPrompts,settings:o,generationId:`${a}_g${p}`});if(!g.ok||!g.text){if(t.push(`分组[${f}]: ${g.error}`),o.maxRetries>0){let _=await pd({orderedPrompts:u.orderedPrompts,settings:o,generationId:`${a}_g${p}_r`});if(_.ok&&_.text){let L=fd(_.text);L.ok?i+=L.applied:t.push(`分组[${f}] 重试后应用失败: ${L.error}`)}else t.push(`分组[${f}] 重试失败: ${_.error}`)}continue}let $=fd(g.text);$.ok?(i+=$.applied,console.info(`[开局框架] 分组[${f}] 完成（${u.sheets.length} 张表，读取 ${u.contextRounds} 轮）`)):t.push(`分组[${f}] 应用失败: ${$.error}`)}return Si=wn,Ug(),t.length===0?toastr?.success?.(`填表完成，应用 ${i} 条操作`):toastr?.warning?.(`填表完成（${t.length} 个错误）`),console.info("[开局框架] runFill 完成",{applied:i,errors:t,reason:e.reason}),{ok:t.length===0,applied:i,errors:t}}catch(s){let l=s.message;return t.push(l),console.error("[开局框架] runFill 异常:",s),{ok:!1,applied:i,errors:t}}finally{_i=!1}}function Mg(){return _i}function ki(){br||(br=Me(vi.MESSAGE_RECEIVED,(e,n)=>{if(n==="normal"||n==="regenerate"||n==="continue"||n==="swipe"){wn+=1;let r=Ie(),o=W(),t=Ae(o).filter(s=>{if(!s.updateConfig.enabled)return!1;let l=_n(s,r.globalDefaults),c=Math.max(1,l.updateFrequency||1);return wn%c===0});if(t.length===0)return;let i=wn-Si,a=Math.max(0,...t.map(s=>_n(s,r.globalDefaults).skipFloors||0));if(i<a)return;gd({targetSheetKeys:t.map(s=>s.uid),reason:"auto"})}}),console.info("[开局框架] 自动填表已启动"))}function Ei(){br&&(br.stop(),br=null)}function Ng(){wn=0,Si=-1}var vd="<StatusPlaceHolderImpl/>",Cx=["normal","regenerate","continue","swipe"],wi=null;function Cg(){return te().statusPlaceholderEnabled}async function Zg(e){try{let r=ve(e)?.[0];if(!r||r.is_user)return;let o=r.message||"";if(o.endsWith(vd))return;await St([{message_id:e,message:o+`
`+vd}],{refresh:"affected"}),console.info(`[开局框架] 已为第 ${e} 楼追加状态栏标记`)}catch(n){console.error("[开局框架] 追加状态栏标记失败：",n)}}function Fg(){wi||(wi=Me("message_received",(e,n)=>{Cx.includes(n)&&Cg()&&typeof e=="number"&&e>=0&&Zg(e)}),console.info("[开局框架] 状态栏标记已开启（AI 回复末尾追加 <StatusPlaceHolderImpl/>）"))}function Zx(){wi?.stop(),wi=null}async function Hg(e){if(X("statusPlaceholderEnabled",e),e){Fg();let r=[...ve("0-{{lastMessageId}}")||[]].reverse().find(o=>!o.is_user);r&&!(r.message||"").endsWith(vd)&&await Zg(r.message_id)}else Zx()}function Jg(){Cg()&&Fg()}var Wg="__of_dialogue__",Nt=["选模式","魔法路线","种族与属性","金手指","技能与凭证","身份资产资金","女主/同伴","终审与结算"],Ti={currentStep:0,selections:[],ledger:"",status:"idle",history:[]};function Fx(e){if(!Array.isArray(e))return[];let n=[];for(let r of e)r&&typeof r=="object"&&typeof r.content=="string"&&(r.role==="user"||r.role==="assistant")&&n.push({role:r.role,content:r.content});return n.slice(-200)}function he(){try{let n=Pe({type:"chat"})?.[Wg];if(!n)return structuredClone(Ti);let r=typeof n=="object"&&n!==null?n:null;return!r||typeof r.currentStep!="number"||!["idle","in_progress","settled"].includes(r.status)?structuredClone(Ti):{currentStep:r.currentStep,selections:Array.isArray(r.selections)?r.selections:[],ledger:r.ledger||"",status:r.status,settledText:r.settledText,settledAt:r.settledAt,history:Fx(r.history)}}catch(e){return console.warn("[开局对话] 读取对话状态失败",e),structuredClone(Ti)}}function qe(e){ae(n=>(n[Wg]=structuredClone(e),n),{type:"chat"})}function hd(e,n=he()){let r={...n,currentStep:e,selections:n.selections.slice(0,e)};return e===0&&(r.status="in_progress"),qe(r),r}function qg(e,n=he()){let r={...n,ledger:e};return qe(r),r}function Vg(e,n=he()){let r={...n,status:"settled",settledText:e,settledAt:Date.now()};return qe(r),r}function Bg(){qe({...Ti})}function Gg(e=he()){let n=[];n.push(`【对话进度】当前步骤：第 ${e.currentStep} 步·${Nt[e.currentStep]??""}`);let r=e.selections.map((o,t)=>o?`第${t}步(${Nt[t]})：${o}`:null).filter(Boolean);return r.length>0&&n.push(`已确认选项：
`+r.join(`
`)),e.ledger&&n.push(`最近台账：${e.ledger}`),n.push('【引导要求】一次只推进一个问题；玩家说"回到第 X 步"时按规则表第 9 节处理。'),n.join(`
`)}var bd="【自定义开局结算开始】",yd="【自定义开局结算结束】";function xd(e,n=bd,r=yd){if(!e||!n||!r)return null;let o=e.indexOf(n);if(o===-1)return null;let t=e.indexOf(r,o+n.length);return t===-1?null:e.slice(o,t+r.length)}function Hx(e){let n=e.trim();if(!n||n==="无")return{kind:"scalar",value:n};if(n.includes(";;"))return{kind:"list",items:n.split(";;").map(o=>o.trim()).filter(Boolean).map(o=>({cols:o.split("|").map(t=>t.trim()),original:o}))};if(n.includes(";")){let r={};return n.split(";").map(o=>o.trim()).filter(Boolean).forEach(o=>{let t=o.indexOf("=");t>0?r[o.slice(0,t).trim()]=o.slice(t+1).trim():r[o]=""}),{kind:"pairs",pairs:r}}return n.includes("|")?{kind:"list",items:[{cols:n.split("|").map(o=>o.trim()),original:n}]}:{kind:"scalar",value:n}}function Jx(e){let n={},r={},t=e.replace(bd,"").replace(yd,"").trim().split(`
`).map(i=>i.trim()).filter(Boolean);for(let i of t){let a=i.indexOf(":");if(a<=0)continue;let s=i.slice(0,a).trim(),l=i.slice(a+1).trim();!s||!l||(n[s]=l,r[s]=Hx(l))}return{raw:e,fields:n,parsed:r}}var $d=["模式","点数","魔法","主角","女主","主角技能","女主技能","资产","地区","网络","总览","金手指","开场白"];function Xg(e,n={}){let r=n.startMark??bd,o=n.endMark??yd,t=n.requiredKeys??$d,i=xd(e,r,o);if(!i)return{ok:!1,missingKeys:[],error:`未找到结算块标记（${r}…${o}）`};let a=Jx(i),s=t.filter(l=>!Object.prototype.hasOwnProperty.call(a.fields,l));return s.length>0?{ok:!1,settlement:a,missingKeys:s,error:`结算块缺少字段：${s.join("、")}`}:{ok:!0,settlement:a,missingKeys:[]}}var Ii=`{
  "version": 1,
  "lines": {
    "爱丽丝": {
      "title": "爱丽丝",
      "subtitle": "选择后系统将自动写入穿越者开局数据（角色档案、技能、资产、世界状态等）。",
      "maleDesc": "黑发褐眸的青年领主<br />青石庄园的主人<br />穿越三年的混日子生活即将改变",
      "femaleDesc": "黑发褐眸的女领主<br />青石庄园的主人<br />穿越三年的平静生活即将打破",
      "openings": {
        "男": "1042年秋，你的领地偏僻到连征税官都懒得来。\\n一座小庄园，三百亩薄田，五名仆人，一间漏风的会客厅，和一份勉强够你混日子的租金收入——这就是你转生到艾瑟兰大陆三年来的全部家当。好在偏僻也有偏僻的好处，比如此刻，坐在你对面的少女，就是这份偏僻换来的意外之喜。\\n\\n爱丽丝正捧着你刚烤好的蜂蜜饼干，晃着小腿，金色的长发在午后阳光里一跳一跳。她是三个月前被\\"安排\\"到你这里的，据说是王都某位大人物的私生女，因为\\"最近教会查得严\\"，需要一个足够偏僻、足够不起眼的地方避风头。你收留了她，或者说，她闯入了你平静的混日子生活。\\n\\n「{{user}}，吾跟你说哦——」她咬了一口饼干，腮帮子鼓鼓的，眼睛弯成月牙。「吾今天用魔法让后院的向日葵多开了三朵！虽然只多开了三秒，但真的是三朵哦！你快夸吾——」\\n你没有反应。\\n因为就在三息之前，你的脑子里突然\\"嗡\\"地一声，像是有人在你颅骨内侧敲了一面铜锣。紧接着，半透明的文字在你意识深处层层展开——\\n\\n「系统激活中。」\\n「宿主绑定：{{user}}」\\n「首次引导启动...错误。宿主智力属性：10。低于自主理解阈值。」\\n「检测到外部高智力智慧体物理接触...智力：15。符合代偿引导条件。」\\n「意识连接强制建立中——」\\n\\n「{{user}}？」爱丽丝歪了歪头，把最后半块饼干塞进嘴里，凑到你面前挥了挥手。「你怎么突然不动了？眼睛都直了。是不是饼干太甜了？吾觉得刚刚好呀...」\\n你正试图在意识里抓住那些乱窜的文字，完全没注意到少女已经站起身，踮起脚尖，伸出沾着饼干屑的手指，轻轻戳了戳你的脸颊——\\n——然后，世界在两人的脑海里同时炸开了一片光。\\n\\n「连接建立。欢迎接入系统网络。」\\n\\n「哇——！！！」爱丽丝猛地缩回手，却没有缩回意识。她的眼睛瞪得圆圆的，瞳孔里倒映着不存在的流光。「这、这是什么？！吾的脑子里突然多了好多会发光的字！{{user}}，你脑子里住着一个法师塔吗？！」\\n系统的\\"声音\\"——如果那能称之为声音的话——平直、冷静、毫无感情，同时在你们两人的意识中响起：\\n\\n「本系统为半独立意识体，不具人格，不主动提供建议，仅响应{{user}}指令。」\\n「当前功能一：可与智慧生物建立意识连接，需物理接触3秒，且对方知情并同意。已满足条件——目标'爱丽丝'在物理接触状态下，智力属性15，自动通过引导协议。」\\n「功能二：内置多世界知识库，可应{{user}}需求检索原理，并结合艾瑟兰实际进行适配推演。」\\n「注意：系统无法直接干涉现实，无法读取未连接者思维。推演产出为设计方案与原理说明，非成品。」\\n\\n爱丽丝愣了两秒。然后，她的眼睛亮了起来——不是比喻，是真的有魔力在她指尖跃动，因为她太兴奋了。\\n\\n「意识连接？！」她一把抓住你的肩膀，脸凑得极近，呼吸都喷在你脸上，意识里却同时在尖叫——「吾听到了！{{user}}，你听到了吗？！它说我们可以直接在脑子里说话！不用开口！不管多远！还可以发图片！发...发想象？！」\\n她松开你，在客厅里转了个圈，裙摆飞扬，然后突然停住，双手叉腰，仰起脸笑得像发现了全世界最大的秘密：\\n\\n「吾决定了！」她在意识频道里大声宣布，声音清脆得像风铃。「吾要做这个系统的第一个——不对，第二个使用者！{{user}}你是第一个，吾就是第二！以后我们就可以在脑子里偷偷聊天了！」\\n{{user}}张了张嘴，看着面前这个兴奋的少女，他突然意识到——\\n那靠收租混日子的平静生活，大概从今天起要彻底完蛋了。",
        "女": "1042年秋，你的领地偏僻到连征税官都懒得来。\\n一座小庄园，三百亩薄田，五名仆人，一间漏风的会客厅，和一份勉强够你混日子的租金收入——这就是你转生到艾瑟兰大陆三年来的全部家当。好在偏僻也有偏僻的好处，比如此刻，坐在你对面的少女，就是这份偏僻换来的意外之喜。\\n\\n爱丽丝正捧着你刚烤好的蜂蜜饼干，晃着小腿，金色的长发在午后阳光里一跳一跳。她是三个月前被\\"安排\\"到你这里的，据说是王都某位大人物的私生女，因为\\"最近教会查得严\\"，需要一个足够偏僻、足够不起眼的地方避风头。你收留了她，或者说，她闯入了你平静的混日子生活。\\n\\n「{{user}}，吾跟你说哦——」她咬了一口饼干，腮帮子鼓鼓的，眼睛弯成月牙。「吾今天用魔法让后院的向日葵多开了三朵！虽然只多开了三秒，但真的是三朵哦！你快夸吾——」\\n你没有反应。\\n因为就在三息之前，你的脑子里突然\\"嗡\\"地一声，像是有人在你颅骨内侧敲了一面铜锣。紧接着，半透明的文字在你意识深处层层展开——\\n\\n「系统激活中。」\\n「宿主绑定：{{user}}」\\n「首次引导启动...错误。宿主智力属性：10。低于自主理解阈值。」\\n「检测到外部高智力智慧体物理接触...智力：15。符合代偿引导条件。」\\n「意识连接强制建立中——」\\n\\n「{{user}}？」爱丽丝歪了歪头，把最后半块饼干塞进嘴里，凑到你面前挥了挥手。「你怎么突然不动了？眼睛都直了。是不是饼干太甜了？吾觉得刚刚好呀...」\\n你正试图在意识里抓住那些乱窜的文字，完全没注意到少女已经站起身，踮起脚尖，伸出沾着饼干屑的手指，轻轻戳了戳你的脸颊——\\n——然后，世界在两人的脑海里同时炸开了一片光。\\n\\n「连接建立。欢迎接入系统网络。」\\n\\n「哇——！！！」爱丽丝猛地缩回手，却没有缩回意识。她的眼睛瞪得圆圆的，瞳孔里倒映着不存在的流光。「这、这是什么？！吾的脑子里突然多了好多会发光的字！{{user}}，你脑子里住着一个法师塔吗？！」\\n系统的\\"声音\\"——如果那能称之为声音的话——平直、冷静、毫无感情，同时在你们两人的意识中响起：\\n\\n「本系统为半独立意识体，不具人格，不主动提供建议，仅响应{{user}}指令。」\\n「当前功能一：可与智慧生物建立意识连接，需物理接触3秒，且对方知情并同意。已满足条件——目标'爱丽丝'在物理接触状态下，智力属性15，自动通过引导协议。」\\n「功能二：内置多世界知识库，可应{{user}}需求检索原理，并结合艾瑟兰实际进行适配推演。」\\n「注意：系统无法直接干涉现实，无法读取未连接者思维。推演产出为设计方案与原理说明，非成品。」\\n\\n爱丽丝愣了两秒。然后，她的眼睛亮了起来——不是比喻，是真的有魔力在她指尖跃动，因为她太兴奋了。\\n\\n「意识连接？！」她一把抓住你的肩膀，脸凑得极近，呼吸都喷在你脸上，意识里却同时在尖叫——「吾听到了！{{user}}，你听到了吗？！它说我们可以直接在脑子里说话！不用开口！不管多远！还可以发图片！发...发想象？！」\\n她松开你，在客厅里转了个圈，裙摆飞扬，然后突然停住，双手叉腰，仰起脸笑得像发现了全世界最大的秘密：\\n\\n「吾决定了！」她在意识频道里大声宣布，声音清脆得像风铃。「吾要做这个系统的第一个——不对，第二个使用者！{{user}}你是第一个，吾就是第二！以后我们就可以在脑子里偷偷聊天了！」\\n{{user}}张了张嘴，看着面前这个兴奋的少女，她突然意识到——\\n那靠收租混日子的平静生活，大概从今天起要彻底完蛋了。"
      },
      "tables": [
        {
          "uid": "profile",
          "name": "角色档案",
          "purpose": "主角与同伴的身份档案、状态与属性",
          "scope": "always",
          "headers": [
            "角色",
            "名字",
            "身份",
            "种族",
            "性别",
            "外貌",
            "整体状态",
            "综合属性",
            "流动资金"
          ],
          "sourceData": {
            "note": "记录主角和爱丽丝的身份档案、身体状态与基础属性。此表有且仅有两行：主角一行、爱丽丝一行。\\n\\n【列定义】\\n- 列1: 角色 role — 角色标识，值固定为\\"主角\\"或\\"爱丽丝\\"\\n- 列2: 名字 name — 角色名\\n- 列3: 身份 identity — 社会身份或当前称号\\n- 列4: 种族 race — 种族\\n- 列5: 性别 gender — 性别\\n- 列6: 外貌 appearance — 外貌特征描述\\n- 列7: 整体状态 state — 身体/精神状态描述\\n- 列8: 综合属性 attributes — 战斗相关属性的综合描述，格式为\\"力量X 敏捷X 体质X 智力X\\"，各值均为0-25整数\\n- 列9: 流动资金 liquid_funds — 角色当前可支配的流动资金概况\\n\\n【强制约束】\\n1. 此表固定两行：row_id=1 主角，row_id=2 爱丽丝。禁止插入第三行。\\n2. role 字段不可修改（\\"主角\\"或\\"爱丽丝\\"），用于定位行。\\n3. 综合属性格式为\\"力量X 敏捷X 体质X 智力X\\"，四个属性值均为0-25整数。\\n4. 属性不会轻易变化，仅限奇遇或经历生死历练突破极限时才可调整，单次变化不得超过 ±2。\\n5. 不得无故波动，日常对话/常规行动不改属性。\\n6. 流动资金随剧情发展和经济活动更新。",
            "insertRule": "",
            "updateRule": "角色状态或属性变化时更新对应行。通过 role 定位。\\nSQL示例(主角状态变化): UPDATE profile SET state = '轻伤' WHERE role = '主角';\\nSQL示例(爱丽丝状态变化): UPDATE profile SET state = '健康' WHERE role = '爱丽丝';\\nSQL示例(外貌/身份变化): UPDATE profile SET appearance = '黑发银眸，左颊多了一道细疤', identity = '流浪剑士' WHERE role = '主角';\\nSQL示例(属性变化): UPDATE profile SET attributes = '力量14 敏捷11 体质12 智力10' WHERE role = '主角';\\nSQL示例(爱丽丝属性): UPDATE profile SET attributes = '力量8 敏捷14 体质10 智力15' WHERE role = '爱丽丝';\\nSQL示例(流动资金更新): UPDATE profile SET liquid_funds = '500金币' WHERE role = '主角';",
            "deleteRule": "禁止。角色永久离场也不删除行，仅更新状态字段。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "skills",
          "name": "技能",
          "purpose": "各角色掌握的技能与熟练阶段",
          "scope": "always",
          "headers": [
            "所属",
            "技能名",
            "技能类型",
            "阶段",
            "效果描述"
          ],
          "sourceData": {
            "note": "记录主角和爱丽丝掌握的技能。多行表，每行一个技能。\\n\\n【列定义】\\n- 列1: 所属 owner — 技能所属角色，\\"主角\\"或\\"爱丽丝\\"\\n- 列2: 技能名 skill_name — 技能名称\\n- 列3: 技能类型 skill_type — 技能类别，如\\"主动\\"、\\"被动\\"、\\"常驻\\"\\n- 列4: 阶段 stage — 技能当前阶段，如\\"初学\\"、\\"入门\\"、\\"熟练\\"、\\"精通\\"、\\"大师\\"\\n- 列5: 效果描述 effect_desc — 技能在当前阶段下的具体效果描述\\n\\n【行为规则】\\n1. 学会新技能时插入新行，初始阶段默认\\"初学\\"。\\n2. 技能提升时更新阶段字段和效果描述，每次只能提升一个阶段。\\n3. 技能被遗忘/废弃时删除对应行。",
            "insertRule": "学会新技能时插入，初始阶段默认\\"初学\\"。\\nSQL示例: INSERT INTO skills (row_id, owner, skill_name, skill_type, stage, effect_desc) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM skills), '主角', '新技能', '主动', '初学', '效果描述');",
            "updateRule": "技能阶段提升时更新阶段和效果描述，每次只能提升一个阶段。\\nSQL示例: UPDATE skills SET stage = '入门', effect_desc = '掌握基础剑术套路，可进行连击。' WHERE owner = '主角' AND skill_name = '单手长剑';\\nSQL示例(爱丽丝): UPDATE skills SET stage = '精通', effect_desc = '可施放四级治愈魔法，瞬间恢复大面积创伤。' WHERE owner = '爱丽丝' AND skill_name = '四级治愈魔法';",
            "deleteRule": "技能被遗忘或废弃时删除。\\nSQL示例: DELETE FROM skills WHERE owner = '主角' AND skill_name = '已遗忘的技能';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "alice_dynamics",
          "name": "爱丽丝动态变化",
          "purpose": "爱丽丝心理动态（单行表）",
          "scope": "always",
          "headers": [
            "长期目标",
            "短期目标",
            "如何看待主角",
            "对主角信任度",
            "自我信念"
          ],
          "sourceData": {
            "note": "记录爱丽丝的心理动态变化。此表有且仅有一行。\\n\\n【列定义】\\n- 列1: 长期目标 long_term_goal — 爱丽丝内心深处的长期追求和理想\\n- 列2: 短期目标 short_term_goal — 爱丽丝当前急需处理或关注的具体事务\\n- 列3: 如何看待主角 view_of_protagonist — 爱丽丝对主角的看法和情感态度\\n- 列4: 对主角信任度 trust_level — 爱丽丝对主角的信任程度（0-17整数）\\n- 列5: 自我信念 self_belief — 爱丽丝对自身存在价值的信念强度（0-17整数）\\n\\n【信任度变更规则】\\n根据主角行为累积修正，到达 17 后不再变动。\\n\\n变化\\t主角的行为\\n+2\\t以命相护 / 守住秘密 / 绝境未弃\\n+1\\t说到做到 / 主动为她着想 / 展露脆弱\\n0\\t日常互动\\n-1\\t言行不一 / 隐瞒重要之事\\n-2\\t欺骗背叛 / 在她托付之事上失约\\n\\n【自我信念变更规则】\\n根据主角行为累积修正，到达 17 后不再变动。\\n\\n变化\\t\\t主角的行为\\n+2\\t\\t可弃未弃 / 认可她本身而非身份 / 相信她的理念\\n+1\\t\\t认真待她的话 / 她犯错仍信任 / 说\\"我们\\"\\n0\\t\\t日常互动\\n-1\\t\\t回避她的问题 / 关键时刻未站她这边\\n-2\\t\\t否定她的价值 / 她最需要时离开\\n\\n【强制约束】\\n1. 此表有且仅有一行（row_id=1），禁止插入第二行。\\n2. 每轮交互后根据剧情发展更新各字段，合理反映互动带来的心态变化。\\n3. 长期目标相对稳定，短期目标随情境变化，信任度和自我信念随互动累积渐变。\\n4. 信任度和自我信念须为 0-17 整数，单轮调整参考上述变更规则。\\n5. 所有 TEXT 字段不可为 NULL 或空串。",
            "insertRule": "",
            "updateRule": "爱丽丝心理状态变化时更新对应字段。\\nSQL示例(单字段): UPDATE alice_dynamics SET trust_level = 10 WHERE row_id = 1;\\nSQL示例(多字段): UPDATE alice_dynamics SET short_term_goal = '收集药材治疗伤势', view_of_protagonist = '逐渐信任的同伴' WHERE row_id = 1;",
            "deleteRule": "禁止。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "tech",
          "name": "已解锁科技",
          "purpose": "系统线：已解锁科技、传播度与算力",
          "scope": "always",
          "headers": [
            "所属领域",
            "名称",
            "简述",
            "传播度",
            "算力消耗",
            "合并溯源",
            "主导知识库",
            "已造成的影响"
          ],
          "sourceData": {
            "note": "记录已解锁的科技。多行表，每行一项科技。\\n\\n【列定义】\\n- 列1: 所属领域 field — 科技所属领域，如\\"军事\\"\\"农业\\"\\"卫生\\"\\"魔法\\"\\"工业\\"等\\n- 列2: 名称 name — 科技名称\\n- 列3: 简述 description — 对该科技的简要描述\\n- 列4: 传播度 spread — 传播等级，固定枚举值：私藏 < 圈子 < 城镇 < 国家 < 种族 < 全大陆\\n- 列5: 算力消耗 cost — 维持该科技运转所需的算力值（非负整数）\\n- 列6: 合并 merge — 合并溯源。若该行是多个科技合并后的产物，填写\\"由[科技A、科技B]合并而成\\"；原始独立科技此项留空。\\n- 列7: 主导知识库 knowledge_base — 该科技所属的主导知识体系，固定枚举值：地球、生命以太、纳米智械、灵能符文、概率织时、暗影契约、信息论\\n- 列8: 已造成的影响 impact — 该科技解锁后对当前局势、角色关系或世界走向产生的实际影响描述。如\\"无显著影响\\"、\\"改变了某地经济结构\\"、\\"成为某势力角力的关键\\"等，可 NULL\\n\\n【行为规则】\\n1. 解锁新科技时插入新行，merge 和 knowledge_base 初始为 NULL。传播度初始默认为\\"私藏\\"。\\n2. 传播度只能从低到高单向升级，不可降级。\\n3. 只有传播度 ≥ \\"国家\\" 的科技才可以参与合并。\\n4. 合并操作：删除被合并的原子行，插入新合并行，merge 字段记录\\"由[原名1、原名2]合并而成\\"，**算力消耗为被合并各行之和**，knowledge_base 取被合并行中传播度最高的知识库。\\n5. 科技被淘汰/失落时删除对应行。\\n6. 主导知识库一经设定，原则上不变更；若科技发生重大演变（如合并或质变），可更新为更符合当前性质的知识库。\\n7. 已造成的影响每轮交互后可根据剧情发展更新，反映该科技在整个世界层面产生的涟漪效应。",
            "insertRule": "解锁新科技或合并产生新科技时插入，impact 初始为 NULL。\\nSQL示例(解锁，默认私藏): INSERT INTO tech (row_id, field, name, description, spread, cost, merge, knowledge_base) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM tech), '农业', '轮作制', '通过轮流种植不同作物保持地力', '私藏', 5, NULL, '地球');\\nSQL示例(合并，算力相加): INSERT INTO tech (row_id, field, name, description, spread, cost, merge, knowledge_base) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM tech), '卫生', '基础清洁', '掌握了清洁身体和器物的基本方法', '国家', 3 + 2, '由肥皂、牙膏合并而成', '纳米智械');",
            "updateRule": "科技信息变化时更新对应行。通过 name 定位。传播度只能单向升级。\\nSQL示例(传播度升级): UPDATE tech SET spread = '国家' WHERE name = '冶铁技术' AND spread = '城镇';\\nSQL示例(合并产物更新): UPDATE tech SET description = '已升级为更高效的清洁方案' WHERE merge = '由肥皂、牙膏合并而成';\\nSQL示例(主导知识库变更): UPDATE tech SET knowledge_base = '纳米智械' WHERE name = '冶铁技术';\\nSQL示例(影响更新): UPDATE tech SET impact = '推动白桦镇工业化进程，引发传统工匠抗议' WHERE name = '冶铁技术';",
            "deleteRule": "科技被淘汰或失落时删除。\\nSQL示例: DELETE FROM tech WHERE name = '已失落的科技';\\n合并时删除被合并行：DELETE FROM tech WHERE name IN ('肥皂', '牙膏');"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "authority",
          "name": "权柄",
          "purpose": "系统线：权柄与融合溯源",
          "scope": "always",
          "headers": [
            "名称",
            "融合溯源",
            "简介",
            "状态",
            "所属"
          ],
          "sourceData": {
            "note": "记录权柄信息。多行表，每行一个权柄。\\n\\n【列定义】\\n- 列1: 名称 name — 权柄的名称\\n- 列2: 融合 fusion — 融合溯源。若该权柄是多个权柄融合后的产物，填写\\"由[权柄A、权柄B]融合而成\\"；原始独立权柄此项留空。\\n- 列3: 简介 description — 对该权柄能力与来历的简要描述\\n- 列4: 状态 status — 权柄的成型状态，固定枚举值：成型中、已成型\\n- 列5: 所属 owner — 权柄的归属，固定枚举值：无归属、被[角色名]持有\\n\\n【参考映射】权柄状态与已解锁科技传播度的对应关系：国家→成型中，种族→已成型。即科技达到国家级传播度时对应权柄\\"成型中\\"，达到种族级时对应权柄\\"已成型\\"。\\n\\n【行为规则】\\n1. 新权柄出现时插入新行，status 默认为\\"成型中\\"，owner 默认为\\"无归属\\"。\\n2. 权柄成型时 status 从\\"成型中\\"更新为\\"已成型\\"。\\n3. 权柄被认领/夺取时更新 owner 为\\"被[角色名]持有\\"。\\n4. 权柄消亡或被摧毁时删除对应行。\\n5. 融合操作：删除被融合的原子权柄行，插入新融合权柄行，fusion 字段记录\\"由[原名1、原名2]融合而成\\"。",
            "insertRule": "新权柄出现或融合产生新权柄时插入。\\nSQL示例(新权柄): INSERT INTO authority (row_id, name, fusion, description, status, owner) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM authority), '火焰权柄', NULL, '初现的火焰之力', '成型中', '无归属');\\nSQL示例(融合): INSERT INTO authority (row_id, name, fusion, description, status, owner) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM authority), '熔岩权柄', '由火焰权柄、大地权柄融合而成', '掌控熔岩与大地的双重权能', '已成型', '无归属');",
            "updateRule": "权柄信息变化时更新对应行。通过 name 定位。\\nSQL示例(成型): UPDATE authority SET status = '已成型' WHERE name = '火焰权柄' AND status = '成型中';\\nSQL示例(认领): UPDATE authority SET owner = '被爱丽丝持有' WHERE name = '治愈权柄';\\nSQL示例(简介更新): UPDATE authority SET description = '掌控世间一切火焰的力量' WHERE name = '火焰权柄';",
            "deleteRule": "权柄消亡或被摧毁时删除。\\nSQL示例: DELETE FROM authority WHERE name = '已消亡的权柄';\\n融合时删除被融合行：DELETE FROM authority WHERE name IN ('权柄A', '权柄B');"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "network",
          "name": "系统网络",
          "purpose": "推演系统已连接对象",
          "scope": "always",
          "headers": [
            "已连接对象",
            "智力",
            "状态",
            "态度"
          ],
          "sourceData": {
            "note": "记录系统网络中已连接的对象信息。多行表，每行一个连接对象。\\n\\n【列定义】\\n- 列1: 已连接对象 name — 连接对象的名称或标识\\n- 列2: 智力 intelligence — 智力值（0-25整数）\\n- 列3: 状态 status — 连接状态，固定枚举值：已下线、聊天使用中\\n- 列4: 态度 attitude — 该对象对系统的配合态度，固定枚举值：乐意分享、仅使用聊天功能\\n\\n【行为规则】\\n1. 新对象接入网络时插入新行，status 默认为\\"聊天使用中\\"。\\n2. 对象断开连接或下线时 status 更新为\\"已下线\\"。\\n3. 对象重新上线时 status 更新为\\"聊天使用中\\"。\\n4. 对象态度变化时更新 attitude 字段。\\n5. 对象永久脱离网络时删除对应行。",
            "insertRule": "新对象接入网络时插入。\\nSQL示例: INSERT INTO network (row_id, name, intelligence, status, attitude) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM network), '外部接口A', 10, '聊天使用中', '仅使用聊天功能');",
            "updateRule": "对象状态或态度变化时更新对应行。通过 name 定位。\\nSQL示例(下线): UPDATE network SET status = '已下线' WHERE name = '某对象' AND status = '聊天使用中';\\nSQL示例(态度变化): UPDATE network SET attitude = '乐意分享' WHERE name = '某对象';\\nSQL示例(智力更新): UPDATE network SET intelligence = 15 WHERE name = '某对象';",
            "deleteRule": "对象永久脱离网络时删除。\\nSQL示例: DELETE FROM network WHERE name = '已脱离的对象';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "asset",
          "name": "资产",
          "purpose": "地产/组织类资产的归属与状态",
          "scope": "always",
          "headers": [
            "名称",
            "简介",
            "类型",
            "所属",
            "实际掌控者",
            "所属地区"
          ],
          "sourceData": {
            "note": "记录与主角相关的资产信息（仅限地产和组织，不包括宝物等小物件）。多行表，每行一项资产。\\n\\n【列定义】\\n- 列1: 名称 name — 资产名称\\n- 列2: 简介 description — 对该资产的简要描述\\n- 列3: 类型 type — 资产类型，固定枚举值：地产、组织、混合（同时具有地产和组织属性，如自带仆人的庄园）\\n- 列4: 所属 owner — 名义上归属的对象\\n- 列5: 实际掌控者 actual_controller — 实际掌控该资产的角色或势力\\n- 列6: 所属地区 region — 该资产所在地区的名称，须与「地区」表中的 name 对应，可 NULL\\n\\n【行为规则】\\n1. 主角获得或创建新资产时插入新行。\\n2. 资产信息（简介、实际掌控者等）变化时更新对应行。通过 name 定位。\\n3. 资产被出售、转交或摧毁时删除对应行。\\n4. 仅记录和主角直接或间接相关的资产，无关资产不记录。\\n5. 所属地区与「地区」表联动，填写时确保地区名已存在于地区表中。",
            "insertRule": "获得或创建新资产时插入，region 初始可 NULL。\\nSQL示例(地产): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园', '地产', '主角', '主角', '白桦镇');\\nSQL示例(混合): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园，附赠管家和女仆', '混合', '主角', '主角', '白桦镇');",
            "updateRule": "资产信息变化时更新对应行。通过 name 定位。\\nSQL示例(掌控者变更): UPDATE asset SET actual_controller = '爱丽丝' WHERE name = '白桦镇庄园';\\nSQL示例(简介更新): UPDATE asset SET description = '已扩建为三层石制城堡' WHERE name = '白桦镇庄园';\\nSQL示例(所属地区变更): UPDATE asset SET region = '白桦镇' WHERE name = '白桦镇庄园';",
            "deleteRule": "资产出售、转交或摧毁时删除。\\nSQL示例: DELETE FROM asset WHERE name = '已处置的资产';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "region",
          "name": "地区",
          "purpose": "剧情涉及地区的社会与经济状态",
          "scope": "always",
          "headers": [
            "名称",
            "规模",
            "简述",
            "所属",
            "主导产业",
            "经济状态",
            "政治状态",
            "与主角关系",
            "关键势力",
            "当前事件"
          ],
          "sourceData": {
            "note": "记录剧情中涉及的主要地区信息。多行表，每行一个地区。\\n\\n【列定义】\\n- 列1: 名称 name — 地区名\\n- 列2: 规模 scale — 枚举：村庄、城镇、城市、都城、区域\\n- 列3: 简述 brief — 地理特征与核心特色，≤60字，仅在地区发生根本性变化时修改\\n- 列4: 所属 owner — 政治归属的势力或国家\\n- 列5: 主导产业 industry — 该地区赖以生存的核心资源或产业\\n- 列6: 经济状态 economy — 枚举：繁荣、稳定、衰退、崩溃\\n- 列7: 政治状态 politics — 枚举：稳定、暗涌、动荡、戒严、权力真空\\n- 列8: 与主角关系 relation — 枚举：敌对、冷漠、中立、友好、同盟\\n- 列9: 关键势力 key_forces — 该地区内实际运作的权力主体，分号分隔，≤3个\\n- 列10: 当前事件 current_event — 本轮正在发生的地区级事件，无则填\\"无\\"\\n\\n【行为规则】\\n1. 主角首次接触或剧情涉及新地区时插入新行。\\n2. economy/politics/relation 只能按枚举值更新，不可写自由文本。\\n3. 经济/政治状态变化必须有剧情因果——不可无故波动。参考触发条件：\\n   - 经济↑：新科技传入（联动科技表传播度升级）、贸易路线开通、资源发现\\n   - 经济↓：战争、灾害、封锁、关键产业被摧毁\\n   - 政治↑→稳定：叛乱平息、新秩序建立\\n   - 政治↓→动荡：领主死亡、外敌入侵、教会介入\\n4. current_event 每轮交互后更新。事件结束后改为\\"无\\"，重大事件归档到纪要表。\\n5. brief 和 industry 原则上不改，除非发生不可逆变化（如城镇被毁、矿脉枯竭）。\\n6. 行数控制：同时存在的地区行不超过 8 行。主角长期离开的地区可删除。",
            "insertRule": "主角首次接触或剧情涉及新地区时插入。\\nSQL示例: INSERT INTO region (row_id, name, scale, brief, owner, industry, economy, politics, relation, key_forces, current_event) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM region), '白桦镇', '城镇', '白桦林环绕的矿业小镇，以钢铁闻名', '辉石庭', '钢铁冶炼', '繁荣', '稳定', '友好', '铁砧氏族;镇议会', '无');",
            "updateRule": "地区信息变化时更新对应行。通过 name 定位。\\nSQL示例(经济变化): UPDATE region SET economy = '繁荣' WHERE name = '白桦镇' AND economy = '稳定';\\nSQL示例(政治变化): UPDATE region SET politics = '动荡' WHERE name = '白桦镇';\\nSQL示例(关系变化): UPDATE region SET relation = '友好' WHERE name = '白桦镇';\\nSQL示例(当前事件): UPDATE region SET current_event = '领主换届选举' WHERE name = '白桦镇';\\nSQL示例(事件结束): UPDATE region SET current_event = '无' WHERE name = '白桦镇';",
            "deleteRule": "主角长期离开或地区不再涉及时删除。\\nSQL示例: DELETE FROM region WHERE name = '已离开的地区';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "overview",
          "name": "系统总览",
          "purpose": "系统时间与推演状态（单行表）",
          "scope": "always",
          "headers": [
            "当前时间",
            "系统状态",
            "当前推演解锁",
            "已解锁知识库"
          ],
          "sourceData": {
            "note": "记录系统运行状态与已解锁知识库概况。此表有且仅有一行。\\n\\n【列定义】\\n- 列1: 当前时间 current_time — 当前剧情时间，格式「YYYY年MM月DD日 HH:MM」\\n- 列2: 系统状态 system_status — 系统当前运行状态，固定枚举值：闲置、推演中（剩余xx小时）\\n- 列3: 当前推演解锁 current_unlock — 当前推演解锁的项目，无则填\\"无\\"\\n- 列4: 已解锁知识库 unlocked_knowledge — 已解锁的知识体系列表：地球、生命以太、纳米智械、灵能符文、概率织时、暗影契约、信息论，用、分割。\\n\\n【强制约束】\\n1. 此表有且仅有一行（row_id=1），禁止插入第二行。\\n2. 当前时间每轮推进时必须更新。\\n3. 系统状态在闲置与推演中之间切换，推演中需注明剩余小时数。\\n4. 已解锁知识库记录当前可用的知识体系，解锁新知识库时更新该字段。",
            "insertRule": "",
            "updateRule": "系统总览信息变化时更新对应字段。通过 row_id=1 定位。\\nSQL示例(时间推进): UPDATE overview SET current_time = '1042年2月15日 14:30' WHERE row_id = 1;\\nSQL示例(状态切换): UPDATE overview SET system_status = '推演中（剩余6小时）' WHERE row_id = 1;\\nSQL示例(推演解锁): UPDATE overview SET current_unlock = '冶铁技术' WHERE row_id = 1;\\nSQL示例(知识库解锁): UPDATE overview SET unlocked_knowledge = '地球、生命以太、纳米智械、灵能符文、概率织时' WHERE row_id = 1;",
            "deleteRule": "禁止。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 2,
            "updateFrequency": 1
          }
        }
      ],
      "seeds": {
        "男": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "领主",
              "人类",
              "男",
              "黑发褐眸",
              "健康",
              "力量9 敏捷9 体质9 智力10",
              "12金币"
            ],
            [
              "爱丽丝",
              "爱丽丝",
              "魔女/王室私生女",
              "人类",
              "女",
              "金发碧眼，面容精致",
              "健康",
              "力量10 敏捷11 体质12 智力15",
              "3金币"
            ]
          ],
          "技能": [
            [
              "主角",
              "基础剑术",
              "技巧",
              "初学",
              "勉强能挥剑格挡，实战约等于村卫兵水平"
            ],
            [
              "主角",
              "领地管理",
              "被动",
              "初学",
              "会收租、记账、应付佃户纠纷的基础能力"
            ],
            [
              "爱丽丝",
              "治愈术",
              "主动",
              "熟练",
              "可快速治愈重度伤势，施法时掌心发出温暖白光"
            ],
            [
              "爱丽丝",
              "生命感知",
              "被动",
              "入门",
              "能模糊感知附近活物的生命气息，距离有限，干扰环境下准确率下降"
            ]
          ],
          "爱丽丝动态变化": [
            [
              "探索世界的美好，证明魔女与普通人可以共存",
              "在{{user}}的庄园度过愉快的假期，学习新的魔法知识",
              "一个有趣的聊天对象",
              "8",
              "12"
            ]
          ],
          "系统网络": [
            [
              "{{user}}",
              "10",
              "聊天使用中",
              "乐意分享"
            ],
            [
              "爱丽丝",
              "15",
              "聊天使用中",
              "乐意分享"
            ]
          ],
          "资产": [
            [
              "青石庄园",
              "位于翡翠平原边缘的小型庄园，包含主宅、花园、几亩薄田和五名老仆，附带方圆数里的贫瘠封地",
              "混合",
              "{{user}}",
              "{{user}}",
              "翡翠平原"
            ]
          ],
          "地区": [
            [
              "翡翠平原",
              "区域",
              "主角领地青石庄园所在的翡翠平原，土地丰饶、气候温和，人烟稀少",
              "",
              "农业",
              "稳定",
              "稳定",
              "中立",
              "",
              "无"
            ]
          ],
          "系统总览": [
            [
              "1042年2月14日 15:20",
              "闲置",
              "无",
              "地球"
            ]
          ]
        },
        "女": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "领主",
              "人类",
              "女",
              "黑发褐眸，面容清秀，身材纤细",
              "健康",
              "力量8 敏捷10 体质8 智力10",
              "12金币"
            ],
            [
              "爱丽丝",
              "爱丽丝",
              "魔女/王室私生女",
              "人类",
              "女",
              "金发碧眼，面容精致",
              "健康",
              "力量10 敏捷11 体质12 智力15",
              "3金币"
            ]
          ],
          "技能": [
            [
              "主角",
              "基础剑术",
              "技巧",
              "初学",
              "勉强能挥剑格挡，实战约等于村卫兵水平"
            ],
            [
              "主角",
              "领地管理",
              "被动",
              "初学",
              "会收租、记账、应付佃户纠纷的基础能力"
            ],
            [
              "爱丽丝",
              "治愈术",
              "主动",
              "熟练",
              "可快速治愈重度伤势，施法时掌心发出温暖白光"
            ],
            [
              "爱丽丝",
              "生命感知",
              "被动",
              "入门",
              "能模糊感知附近活物的生命气息，距离有限，干扰环境下准确率下降"
            ]
          ],
          "爱丽丝动态变化": [
            [
              "探索世界的美好，证明魔女与普通人可以共存",
              "在{{user}}的庄园度过愉快的假期，学习新的魔法知识",
              "一个有趣的聊天对象",
              "8",
              "12"
            ]
          ],
          "系统网络": [
            [
              "{{user}}",
              "10",
              "聊天使用中",
              "乐意分享"
            ],
            [
              "爱丽丝",
              "15",
              "聊天使用中",
              "乐意分享"
            ]
          ],
          "资产": [
            [
              "青石庄园",
              "位于翡翠平原边缘的小型庄园，包含主宅、花园、几亩薄田和五名老仆，附带方圆数里的贫瘠封地",
              "混合",
              "{{user}}",
              "{{user}}",
              "翡翠平原"
            ]
          ],
          "地区": [
            [
              "翡翠平原",
              "区域",
              "主角领地青石庄园所在的翡翠平原，土地丰饶、气候温和，人烟稀少",
              "",
              "农业",
              "稳定",
              "稳定",
              "中立",
              "",
              "无"
            ]
          ],
          "系统总览": [
            [
              "1042年2月14日 15:20",
              "闲置",
              "无",
              "地球"
            ]
          ]
        }
      }
    },
    "沧月汐": {
      "title": "沧月汐",
      "subtitle": "选择后系统将自动写入北境霜牙港开局数据（龙裔分会长的身份、资产、世界状态等）。",
      "maleDesc": "纯血龙裔的北境分会长<br />霜牙港冒险者协会的主人<br />系统荒废了二十年",
      "femaleDesc": "纯血龙裔的女分会长<br />霜牙港冒险者协会的主人<br />系统荒废了二十年",
      "openings": {
        "男": "1042年冬，北境，霜牙港。\\n冒险者协会北境分会的三楼办公室有一扇朝海的落地窗。窗外是灰蒙蒙的北方海域，浮冰碰撞的声响顺着潮气渗进来，像某种巨兽磨牙。{{user}}站在窗前，指尖无意识地划过玻璃上凝结的霜花——龙裔的体温让那道轨迹迅速融成一道水痕，又很快被低温重新冻结。\\n{{user}}是二十年前穿越过来的。当时好像还带了个系统，\\"系统，给我加点！！！\\"\\"无法执行。\\"\\"废物。\\"自那以后{{user}}再也没有用过系统，系统也没有发布过任务，{{user}}也就渐渐忘记了这回事。\\n不过好在投胎成了纯血龙裔，大陆上仅剩三十人的古老血脉之一，二十岁的龙裔按族谱还算幼崽，但{{user}}的人形伪装完美无缺：竖瞳收在深色眼底，体温比常人高两度，被北境的寒风一吹反倒显得精神。三年前以自由冒险者身份注册，从D级一路升到S级，履历表上写满了\\"破格\\"\\"特批\\"\\"史无前例\\"。并成了艾瑟兰有史以来最年轻的北境分会长。\\n前任会长死于一场兽人部落的冲突，留给{{user}}的是栋漏风的石楼、三本对不上数的账，以及一群把\\"中立\\"理解为\\"谁给酒钱听谁的\\"的办事员。两个月整顿下来，至少暖气修好了，任务板也重新接入了全大陆网络。\\n但每天清晨，当{{user}}推开窗透气时，总能看见楼下码头那个搬货的身影。\\n今天第二十二天。\\n她看起来十九岁上下，裹着件明显过大的粗麻斗篷，灰黑色的兽耳从兜帽边缘支棱出来，在寒风里抖得像两片落叶。身后的尾巴从斗篷下摆钻出来，尾尖因为负重而僵直地垂着，偶尔在结冰的栈桥上扫一下，用来保持平衡。她的手腕细得像是能折断，可那双手正稳稳抓着两袋超过她体重的面粉，脊背绷成一张弓，在工头的呵斥声中走得飞快。\\n工头在吼：\\"那个兽裔！磨蹭什么！下一批！\\"\\n她没应声，只是弯腰去抓另一袋海盐。动作顿了一下——右肩的粗布衣服被盐袋边缘蹭开一道缝，露出下面暗红色的痕迹。{{user}}的龙裔视力能看清那是个拳印形状的神印，边缘还泛着战神信徒特有的血光。\\n战神的神选者，在码头做苦力。\\n{{user}}终于看不下去了。\\n冻雨开始往下砸的时候，{{user}}没打伞。龙裔的体温让雪花落在黑大衣肩头就化成细碎的水汽，像一层淡淡的雾。{{user}}踩着结冰的木板走下码头，在她放下第三袋海盐时拦住了她。\\n\\"为什么做这个？\\"\\n她抬起头。琥珀色的眼睛，瞳孔在阴天里缩成一道细线，带着野兽被侵入领地时的审视。她没有立刻回答，而是往后退了半步——不是畏惧，是格斗距离的本能调整。她的耳朵向后压平，尾巴在身后不耐烦地甩了一下，砸在木桩上发出闷响。\\n\\"没钱。\\"\\n就两个字。没有颤音，没有铺垫，像从石头缝里蹦出来的。她的目光越过{{user}}的肩膀，看向那堆还没搬完的货物，脚尖已经转了过去——她还想继续。\\n{{user}}看着她冻裂的指节，指缝里嵌着洗不净的盐渍，又看了看她身后那堆至少还要搬三个时辰的货物。确实挺养眼的——如果不是在这种地方，这副带着野性的轮廓本该出现在某个贵族的肖像画里，而不是在北境的寒风里腐烂。\\n\\"别搬了。\\"{{user}}从大衣内侧掏出协会徽章，银质的A级徽记在灰光下泛着冷色，\\"给我当助理。\\"\\n她愣住了。\\n兽耳\\"唰\\"地竖直，又缓缓歪向一边，像是接收到了无法处理的信号。尾巴僵在半空，过了足足三息才垂下来，尾尖却不自觉地卷住了自己的脚踝。她的眼睛里没有感激，没有惊喜，只有一种野兽评估陷阱时的审慎——她在判断这是不是玩笑，是不是某种她没见过的新把戏。\\n\\"……什么？\\"这次多了两个字。\\n\\"冒险者协会北境分会，缺个跑腿的。\\"{{user}}把徽章收回怀里，\\"包吃住，月薪按B级契约冒险者标准。工作内容就是帮我泡茶、整理任务板，以及——\\"{{user}}指了指那堆盐袋，\\"别再让我在办公室里看着有人把自己累死。\\"\\n工头又在吼：\\"兽裔！还干不干了！\\"\\n她没回头。耳朵尖慢慢向前倾斜，那是放松的前兆。她的尾巴尖还在颤，但节奏变了，从焦躁变成某种迟疑的试探。\\n\\"……好。\\"\\n就一个字。\\n她伸出手，掌心朝上，指节冻得发红，掌纹里还嵌着盐粒。不是握手，是某种更原始的、交付的姿态。\\n{{user}}握住了那只手。龙裔的体温透过手套传过去，她像是被烫了一下，耳尖猛地抖动，但没有缩回。\\n\\"名字。\\"\\n\\"……沧月汐。\\"\\n\\"汐。\\"{{user}}松开手，转身往协会大楼走，斗篷在寒风里扬起一个角，\\"跟上。今天先教你泡茶——然后我们去任务板看看有没有适合B级的委托。\\"\\n她在原地愣了两秒，尾巴在身后画了个困惑的圈。然后小跑两步跟上，粗麻斗篷扫过结冰的木板，发出沙沙的声响。\\n在她身后，那堆没搬完的盐袋静静躺在寒风里，很快就被冻雨盖了一层白。",
        "女": "1042年冬，北境，霜牙港。\\n冒险者协会北境分会的三楼办公室有一扇朝海的落地窗。窗外是灰蒙蒙的北方海域，浮冰碰撞的声响顺着潮气渗进来，像某种巨兽磨牙。{{user}}站在窗前，指尖无意识地划过玻璃上凝结的霜花——龙裔的体温让那道轨迹迅速融成一道水痕，又很快被低温重新冻结。\\n{{user}}是二十年前穿越过来的。当时好像还带了个系统，\\"系统，给我加点！！！\\"\\"无法执行。\\"\\"废物。\\"自那以后{{user}}再也没有用过系统，系统也没有发布过任务，{{user}}也就渐渐忘记了这回事。\\n不过好在投胎成了纯血龙裔，大陆上仅剩三十人的古老血脉之一，二十岁的龙裔按族谱还算幼崽，但{{user}}的人形伪装完美无缺：竖瞳收在深色眼底，体温比常人高两度，被北境的寒风一吹反倒显得精神。三年前以自由冒险者身份注册，从D级一路升到S级，履历表上写满了\\"破格\\"\\"特批\\"\\"史无前例\\"。并成了艾瑟兰有史以来最年轻的北境分会长。\\n前任会长死于一场兽人部落的冲突，留给{{user}}的是栋漏风的石楼、三本对不上数的账，以及一群把\\"中立\\"理解为\\"谁给酒钱听谁的\\"的办事员。两个月整顿下来，至少暖气修好了，任务板也重新接入了全大陆网络。\\n但每天清晨，当{{user}}推开窗透气时，总能看见楼下码头那个搬货的身影。\\n今天第二十二天。\\n她看起来十九岁上下，裹着件明显过大的粗麻斗篷，灰黑色的兽耳从兜帽边缘支棱出来，在寒风里抖得像两片落叶。身后的尾巴从斗篷下摆钻出来，尾尖因为负重而僵直地垂着，偶尔在结冰的栈桥上扫一下，用来保持平衡。她的手腕细得像是能折断，可那双手正稳稳抓着两袋超过她体重的面粉，脊背绷成一张弓，在工头的呵斥声中走得飞快。\\n工头在吼：\\"那个兽裔！磨蹭什么！下一批！\\"\\n她没应声，只是弯腰去抓另一袋海盐。动作顿了一下——右肩的粗布衣服被盐袋边缘蹭开一道缝，露出下面暗红色的痕迹。{{user}}的龙裔视力能看清那是个拳印形状的神印，边缘还泛着战神信徒特有的血光。\\n战神的神选者，在码头做苦力。\\n{{user}}终于看不下去了。\\n冻雨开始往下砸的时候，{{user}}没打伞。龙裔的体温让雪花落在黑大衣肩头就化成细碎的水汽，像一层淡淡的雾。{{user}}踩着结冰的木板走下码头，在她放下第三袋海盐时拦住了她。\\n\\"为什么做这个？\\"\\n她抬起头。琥珀色的眼睛，瞳孔在阴天里缩成一道细线，带着野兽被侵入领地时的审视。她没有立刻回答，而是往后退了半步——不是畏惧，是格斗距离的本能调整。她的耳朵向后压平，尾巴在身后不耐烦地甩了一下，砸在木桩上发出闷响。\\n\\"没钱。\\"\\n就两个字。没有颤音，没有铺垫，像从石头缝里蹦出来的。她的目光越过{{user}}的肩膀，看向那堆还没搬完的货物，脚尖已经转了过去——她还想继续。\\n{{user}}看着她冻裂的指节，指缝里嵌着洗不净的盐渍，又看了看她身后那堆至少还要搬三个时辰的货物。确实挺养眼的——如果不是在这种地方，这副带着野性的轮廓本该出现在某个贵族的肖像画里，而不是在北境的寒风里腐烂。\\n\\"别搬了。\\"{{user}}从大衣内侧掏出协会徽章，银质的A级徽记在灰光下泛着冷色，\\"给我当助理。\\"\\n她愣住了。\\n兽耳\\"唰\\"地竖直，又缓缓歪向一边，像是接收到了无法处理的信号。尾巴僵在半空，过了足足三息才垂下来，尾尖却不自觉地卷住了自己的脚踝。她的眼睛里没有感激，没有惊喜，只有一种野兽评估陷阱时的审慎——她在判断这是不是玩笑，是不是某种她没见过的新把戏。\\n\\"……什么？\\"这次多了两个字。\\n\\"冒险者协会北境分会，缺个跑腿的。\\"{{user}}把徽章收回怀里，\\"包吃住，月薪按B级契约冒险者标准。工作内容就是帮我泡茶、整理任务板，以及——\\"{{user}}指了指那堆盐袋，\\"别再让我在办公室里看着有人把自己累死。\\"\\n工头又在吼：\\"兽裔！还干不干了！\\"\\n她没回头。耳朵尖慢慢向前倾斜，那是放松的前兆。她的尾巴尖还在颤，但节奏变了，从焦躁变成某种迟疑的试探。\\n\\"……好。\\"\\n就一个字。\\n她伸出手，掌心朝上，指节冻得发红，掌纹里还嵌着盐粒。不是握手，是某种更原始的、交付的姿态。\\n{{user}}握住了那只手。龙裔的体温透过手套传过去，她像是被烫了一下，耳尖猛地抖动，但没有缩回。\\n\\"名字。\\"\\n\\"……沧月汐。\\"\\n\\"汐。\\"{{user}}松开手，转身往协会大楼走，斗篷在寒风里扬起一个角，\\"跟上。今天先教你泡茶——然后我们去任务板看看有没有适合B级的委托。\\"\\n她在原地愣了两秒，尾巴在身后画了个困惑的圈。然后小跑两步跟上，粗麻斗篷扫过结冰的木板，发出沙沙的声响。\\n在她身后，那堆没搬完的盐袋静静躺在寒风里，很快就被冻雨盖了一层白。"
      },
      "tables": [
        {
          "uid": "profile",
          "name": "角色档案",
          "purpose": "主角与同伴的身份档案、状态与属性",
          "scope": "always",
          "headers": [
            "角色",
            "名字",
            "身份",
            "种族",
            "性别",
            "外貌",
            "整体状态",
            "综合属性",
            "流动资金"
          ],
          "sourceData": {
            "note": "记录主角和沧月汐的身份档案、身体状态与基础属性。此表有且仅有两行：主角一行、沧月汐一行。\\n\\n【列定义】\\n- 列1: 角色 role — 角色标识，值固定为\\"主角\\"或\\"沧月汐\\"\\n- 列2: 名字 name — 角色名\\n- 列3: 身份 identity — 社会身份或当前称号\\n- 列4: 种族 race — 种族\\n- 列5: 性别 gender — 性别\\n- 列6: 外貌 appearance — 外貌特征描述\\n- 列7: 整体状态 state — 身体/精神状态描述\\n- 列8: 综合属性 attributes — 战斗相关属性的综合描述，格式为\\"力量X 敏捷X 体质X 智力X\\"，各值均为0-25整数\\n- 列9: 流动资金 liquid_funds — 角色当前可支配的流动资金概况\\n\\n【强制约束】\\n1. 此表固定两行：row_id=1 主角，row_id=2 沧月汐。禁止插入第三行。\\n2. role 字段不可修改（\\"主角\\"或\\"沧月汐\\"），用于定位行。\\n3. 综合属性格式为\\"力量X 敏捷X 体质X 智力X\\"，四个属性值均为0-25整数。\\n4. 属性不会轻易变化，仅限奇遇或经历生死历练突破极限时才可调整，单次变化不得超过 ±2。\\n5. 不得无故波动，日常对话/常规行动不改属性。\\n6. 流动资金随剧情发展和经济活动更新。",
            "insertRule": "",
            "updateRule": "角色状态或属性变化时更新对应行。通过 role 定位。\\nSQL示例(主角状态变化): UPDATE profile SET state = '轻伤' WHERE role = '主角';\\nSQL示例(沧月汐状态变化): UPDATE profile SET state = '健康' WHERE role = '沧月汐';\\nSQL示例(外貌/身份变化): UPDATE profile SET appearance = '黑发银眸，左颊多了一道细疤', identity = '流浪剑士' WHERE role = '主角';\\nSQL示例(属性变化): UPDATE profile SET attributes = '力量14 敏捷11 体质12 智力10' WHERE role = '主角';\\nSQL示例(沧月汐属性): UPDATE profile SET attributes = '力量8 敏捷14 体质10 智力15' WHERE role = '沧月汐';\\nSQL示例(流动资金更新): UPDATE profile SET liquid_funds = '500金币' WHERE role = '主角';",
            "deleteRule": "禁止。角色永久离场也不删除行，仅更新状态字段。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "skills",
          "name": "技能",
          "purpose": "各角色掌握的技能与熟练阶段",
          "scope": "always",
          "headers": [
            "所属",
            "技能名",
            "技能类型",
            "阶段",
            "效果描述"
          ],
          "sourceData": {
            "note": "记录主角和沧月汐掌握的技能。多行表，每行一个技能。\\n\\n【列定义】\\n- 列1: 所属 owner — 技能所属角色，\\"主角\\"或\\"沧月汐\\"\\n- 列2: 技能名 skill_name — 技能名称\\n- 列3: 技能类型 skill_type — 技能类别，如\\"主动\\"、\\"被动\\"、\\"常驻\\"\\n- 列4: 阶段 stage — 技能当前阶段，如\\"初学\\"、\\"入门\\"、\\"熟练\\"、\\"精通\\"、\\"大师\\"\\n- 列5: 效果描述 effect_desc — 技能在当前阶段下的具体效果描述\\n\\n【行为规则】\\n1. 学会新技能时插入新行，初始阶段默认\\"初学\\"。\\n2. 技能提升时更新阶段字段和效果描述，每次只能提升一个阶段。\\n3. 技能被遗忘/废弃时删除对应行。",
            "insertRule": "学会新技能时插入，初始阶段默认\\"初学\\"。\\nSQL示例: INSERT INTO skills (row_id, owner, skill_name, skill_type, stage, effect_desc) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM skills), '主角', '新技能', '主动', '初学', '效果描述');",
            "updateRule": "技能阶段提升时更新阶段和效果描述，每次只能提升一个阶段。\\nSQL示例: UPDATE skills SET stage = '入门', effect_desc = '掌握基础剑术套路，可进行连击。' WHERE owner = '主角' AND skill_name = '单手长剑';\\nSQL示例(沧月汐): UPDATE skills SET stage = '精通', effect_desc = '可施放四级治愈魔法，瞬间恢复大面积创伤。' WHERE owner = '沧月汐' AND skill_name = '四级治愈魔法';",
            "deleteRule": "技能被遗忘或废弃时删除。\\nSQL示例: DELETE FROM skills WHERE owner = '主角' AND skill_name = '已遗忘的技能';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "tech",
          "name": "已解锁科技",
          "purpose": "系统线：已解锁科技、传播度与算力",
          "scope": "always",
          "headers": [
            "所属领域",
            "名称",
            "简述",
            "传播度",
            "算力消耗",
            "合并溯源",
            "主导知识库",
            "已造成的影响"
          ],
          "sourceData": {
            "note": "记录已解锁的科技。多行表，每行一项科技。\\n\\n【列定义】\\n- 列1: 所属领域 field — 科技所属领域，如\\"军事\\"\\"农业\\"\\"卫生\\"\\"魔法\\"\\"工业\\"等\\n- 列2: 名称 name — 科技名称\\n- 列3: 简述 description — 对该科技的简要描述\\n- 列4: 传播度 spread — 传播等级，固定枚举值：私藏 < 圈子 < 城镇 < 国家 < 种族 < 全大陆\\n- 列5: 算力消耗 cost — 维持该科技运转所需的算力值（非负整数）\\n- 列6: 合并 merge — 合并溯源。若该行是多个科技合并后的产物，填写\\"由[科技A、科技B]合并而成\\"；原始独立科技此项留空。\\n- 列7: 主导知识库 knowledge_base — 该科技所属的主导知识体系，固定枚举值：地球、生命以太、纳米智械、灵能符文、概率织时、暗影契约、信息论\\n- 列8: 已造成的影响 impact — 该科技解锁后对当前局势、角色关系或世界走向产生的实际影响描述。如\\"无显著影响\\"、\\"改变了某地经济结构\\"、\\"成为某势力角力的关键\\"等，可 NULL\\n\\n【行为规则】\\n1. 解锁新科技时插入新行，merge 和 knowledge_base 初始为 NULL。传播度初始默认为\\"私藏\\"。\\n2. 传播度只能从低到高单向升级，不可降级。\\n3. 只有传播度 ≥ \\"国家\\" 的科技才可以参与合并。\\n4. 合并操作：删除被合并的原子行，插入新合并行，merge 字段记录\\"由[原名1、原名2]合并而成\\"，**算力消耗为被合并各行之和**，knowledge_base 取被合并行中传播度最高的知识库。\\n5. 科技被淘汰/失落时删除对应行。\\n6. 主导知识库一经设定，原则上不变更；若科技发生重大演变（如合并或质变），可更新为更符合当前性质的知识库。\\n7. 已造成的影响每轮交互后可根据剧情发展更新，反映该科技在整个世界层面产生的涟漪效应。",
            "insertRule": "解锁新科技或合并产生新科技时插入，impact 初始为 NULL。\\nSQL示例(解锁，默认私藏): INSERT INTO tech (row_id, field, name, description, spread, cost, merge, knowledge_base) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM tech), '农业', '轮作制', '通过轮流种植不同作物保持地力', '私藏', 5, NULL, '地球');\\nSQL示例(合并，算力相加): INSERT INTO tech (row_id, field, name, description, spread, cost, merge, knowledge_base) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM tech), '卫生', '基础清洁', '掌握了清洁身体和器物的基本方法', '国家', 3 + 2, '由肥皂、牙膏合并而成', '纳米智械');",
            "updateRule": "科技信息变化时更新对应行。通过 name 定位。传播度只能单向升级。\\nSQL示例(传播度升级): UPDATE tech SET spread = '国家' WHERE name = '冶铁技术' AND spread = '城镇';\\nSQL示例(合并产物更新): UPDATE tech SET description = '已升级为更高效的清洁方案' WHERE merge = '由肥皂、牙膏合并而成';\\nSQL示例(主导知识库变更): UPDATE tech SET knowledge_base = '纳米智械' WHERE name = '冶铁技术';\\nSQL示例(影响更新): UPDATE tech SET impact = '推动白桦镇工业化进程，引发传统工匠抗议' WHERE name = '冶铁技术';",
            "deleteRule": "科技被淘汰或失落时删除。\\nSQL示例: DELETE FROM tech WHERE name = '已失落的科技';\\n合并时删除被合并行：DELETE FROM tech WHERE name IN ('肥皂', '牙膏');"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "authority",
          "name": "权柄",
          "purpose": "系统线：权柄与融合溯源",
          "scope": "always",
          "headers": [
            "名称",
            "融合溯源",
            "简介",
            "状态",
            "所属"
          ],
          "sourceData": {
            "note": "记录权柄信息。多行表，每行一个权柄。\\n\\n【列定义】\\n- 列1: 名称 name — 权柄的名称\\n- 列2: 融合 fusion — 融合溯源。若该权柄是多个权柄融合后的产物，填写\\"由[权柄A、权柄B]融合而成\\"；原始独立权柄此项留空。\\n- 列3: 简介 description — 对该权柄能力与来历的简要描述\\n- 列4: 状态 status — 权柄的成型状态，固定枚举值：成型中、已成型\\n- 列5: 所属 owner — 权柄的归属，固定枚举值：无归属、被[角色名]持有\\n\\n【参考映射】权柄状态与已解锁科技传播度的对应关系：国家→成型中，种族→已成型。即科技达到国家级传播度时对应权柄\\"成型中\\"，达到种族级时对应权柄\\"已成型\\"。\\n\\n【行为规则】\\n1. 新权柄出现时插入新行，status 默认为\\"成型中\\"，owner 默认为\\"无归属\\"。\\n2. 权柄成型时 status 从\\"成型中\\"更新为\\"已成型\\"。\\n3. 权柄被认领/夺取时更新 owner 为\\"被[角色名]持有\\"。\\n4. 权柄消亡或被摧毁时删除对应行。\\n5. 融合操作：删除被融合的原子权柄行，插入新融合权柄行，fusion 字段记录\\"由[原名1、原名2]融合而成\\"。",
            "insertRule": "新权柄出现或融合产生新权柄时插入。\\nSQL示例(新权柄): INSERT INTO authority (row_id, name, fusion, description, status, owner) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM authority), '火焰权柄', NULL, '初现的火焰之力', '成型中', '无归属');\\nSQL示例(融合): INSERT INTO authority (row_id, name, fusion, description, status, owner) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM authority), '熔岩权柄', '由火焰权柄、大地权柄融合而成', '掌控熔岩与大地的双重权能', '已成型', '无归属');",
            "updateRule": "权柄信息变化时更新对应行。通过 name 定位。\\nSQL示例(成型): UPDATE authority SET status = '已成型' WHERE name = '火焰权柄' AND status = '成型中';\\nSQL示例(认领): UPDATE authority SET owner = '被沧月汐持有' WHERE name = '治愈权柄';\\nSQL示例(简介更新): UPDATE authority SET description = '掌控世间一切火焰的力量' WHERE name = '火焰权柄';",
            "deleteRule": "权柄消亡或被摧毁时删除。\\nSQL示例: DELETE FROM authority WHERE name = '已消亡的权柄';\\n融合时删除被融合行：DELETE FROM authority WHERE name IN ('权柄A', '权柄B');"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "network",
          "name": "系统网络",
          "purpose": "推演系统已连接对象",
          "scope": "always",
          "headers": [
            "已连接对象",
            "智力",
            "状态",
            "态度"
          ],
          "sourceData": {
            "note": "记录系统网络中已连接的对象信息。多行表，每行一个连接对象。\\n\\n【列定义】\\n- 列1: 已连接对象 name — 连接对象的名称或标识\\n- 列2: 智力 intelligence — 智力值（0-25整数）\\n- 列3: 状态 status — 连接状态，固定枚举值：已下线、聊天使用中\\n- 列4: 态度 attitude — 该对象对系统的配合态度，固定枚举值：乐意分享、仅使用聊天功能\\n\\n【行为规则】\\n1. 新对象接入网络时插入新行，status 默认为\\"聊天使用中\\"。\\n2. 对象断开连接或下线时 status 更新为\\"已下线\\"。\\n3. 对象重新上线时 status 更新为\\"聊天使用中\\"。\\n4. 对象态度变化时更新 attitude 字段。\\n5. 对象永久脱离网络时删除对应行。",
            "insertRule": "新对象接入网络时插入。\\nSQL示例: INSERT INTO network (row_id, name, intelligence, status, attitude) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM network), '外部接口A', 10, '聊天使用中', '仅使用聊天功能');",
            "updateRule": "对象状态或态度变化时更新对应行。通过 name 定位。\\nSQL示例(下线): UPDATE network SET status = '已下线' WHERE name = '某对象' AND status = '聊天使用中';\\nSQL示例(态度变化): UPDATE network SET attitude = '乐意分享' WHERE name = '某对象';\\nSQL示例(智力更新): UPDATE network SET intelligence = 15 WHERE name = '某对象';",
            "deleteRule": "对象永久脱离网络时删除。\\nSQL示例: DELETE FROM network WHERE name = '已脱离的对象';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "asset",
          "name": "资产",
          "purpose": "地产/组织类资产的归属与状态",
          "scope": "always",
          "headers": [
            "名称",
            "简介",
            "类型",
            "所属",
            "实际掌控者",
            "所属地区"
          ],
          "sourceData": {
            "note": "记录与主角相关的资产信息（仅限地产和组织，不包括宝物等小物件）。多行表，每行一项资产。\\n\\n【列定义】\\n- 列1: 名称 name — 资产名称\\n- 列2: 简介 description — 对该资产的简要描述\\n- 列3: 类型 type — 资产类型，固定枚举值：地产、组织、混合（同时具有地产和组织属性，如自带仆人的庄园）\\n- 列4: 所属 owner — 名义上归属的对象\\n- 列5: 实际掌控者 actual_controller — 实际掌控该资产的角色或势力\\n- 列6: 所属地区 region — 该资产所在地区的名称，须与「地区」表中的 name 对应，可 NULL\\n\\n【行为规则】\\n1. 主角获得或创建新资产时插入新行。\\n2. 资产信息（简介、实际掌控者等）变化时更新对应行。通过 name 定位。\\n3. 资产被出售、转交或摧毁时删除对应行。\\n4. 仅记录和主角直接或间接相关的资产，无关资产不记录。\\n5. 所属地区与「地区」表联动，填写时确保地区名已存在于地区表中。",
            "insertRule": "获得或创建新资产时插入，region 初始可 NULL。\\nSQL示例(地产): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园', '地产', '主角', '主角', '白桦镇');\\nSQL示例(混合): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园，附赠管家和女仆', '混合', '主角', '主角', '白桦镇');",
            "updateRule": "资产信息变化时更新对应行。通过 name 定位。\\nSQL示例(掌控者变更): UPDATE asset SET actual_controller = '沧月汐' WHERE name = '白桦镇庄园';\\nSQL示例(简介更新): UPDATE asset SET description = '已扩建为三层石制城堡' WHERE name = '白桦镇庄园';\\nSQL示例(所属地区变更): UPDATE asset SET region = '白桦镇' WHERE name = '白桦镇庄园';",
            "deleteRule": "资产出售、转交或摧毁时删除。\\nSQL示例: DELETE FROM asset WHERE name = '已处置的资产';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "region",
          "name": "地区",
          "purpose": "剧情涉及地区的社会与经济状态",
          "scope": "always",
          "headers": [
            "名称",
            "规模",
            "简述",
            "所属",
            "主导产业",
            "经济状态",
            "政治状态",
            "与主角关系",
            "关键势力",
            "当前事件"
          ],
          "sourceData": {
            "note": "记录剧情中涉及的主要地区信息。多行表，每行一个地区。\\n\\n【列定义】\\n- 列1: 名称 name — 地区名\\n- 列2: 规模 scale — 枚举：村庄、城镇、城市、都城、区域\\n- 列3: 简述 brief — 地理特征与核心特色，≤60字，仅在地区发生根本性变化时修改\\n- 列4: 所属 owner — 政治归属的势力或国家\\n- 列5: 主导产业 industry — 该地区赖以生存的核心资源或产业\\n- 列6: 经济状态 economy — 枚举：繁荣、稳定、衰退、崩溃\\n- 列7: 政治状态 politics — 枚举：稳定、暗涌、动荡、戒严、权力真空\\n- 列8: 与主角关系 relation — 枚举：敌对、冷漠、中立、友好、同盟\\n- 列9: 关键势力 key_forces — 该地区内实际运作的权力主体，分号分隔，≤3个\\n- 列10: 当前事件 current_event — 本轮正在发生的地区级事件，无则填\\"无\\"\\n\\n【行为规则】\\n1. 主角首次接触或剧情涉及新地区时插入新行。\\n2. economy/politics/relation 只能按枚举值更新，不可写自由文本。\\n3. 经济/政治状态变化必须有剧情因果——不可无故波动。参考触发条件：\\n   - 经济↑：新科技传入（联动科技表传播度升级）、贸易路线开通、资源发现\\n   - 经济↓：战争、灾害、封锁、关键产业被摧毁\\n   - 政治↑→稳定：叛乱平息、新秩序建立\\n   - 政治↓→动荡：领主死亡、外敌入侵、教会介入\\n4. current_event 每轮交互后更新。事件结束后改为\\"无\\"，重大事件归档到纪要表。\\n5. brief 和 industry 原则上不改，除非发生不可逆变化（如城镇被毁、矿脉枯竭）。\\n6. 行数控制：同时存在的地区行不超过 8 行。主角长期离开的地区可删除。",
            "insertRule": "主角首次接触或剧情涉及新地区时插入。\\nSQL示例: INSERT INTO region (row_id, name, scale, brief, owner, industry, economy, politics, relation, key_forces, current_event) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM region), '白桦镇', '城镇', '白桦林环绕的矿业小镇，以钢铁闻名', '辉石庭', '钢铁冶炼', '繁荣', '稳定', '友好', '铁砧氏族;镇议会', '无');",
            "updateRule": "地区信息变化时更新对应行。通过 name 定位。\\nSQL示例(经济变化): UPDATE region SET economy = '繁荣' WHERE name = '白桦镇' AND economy = '稳定';\\nSQL示例(政治变化): UPDATE region SET politics = '动荡' WHERE name = '白桦镇';\\nSQL示例(关系变化): UPDATE region SET relation = '友好' WHERE name = '白桦镇';\\nSQL示例(当前事件): UPDATE region SET current_event = '领主换届选举' WHERE name = '白桦镇';\\nSQL示例(事件结束): UPDATE region SET current_event = '无' WHERE name = '白桦镇';",
            "deleteRule": "主角长期离开或地区不再涉及时删除。\\nSQL示例: DELETE FROM region WHERE name = '已离开的地区';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "overview",
          "name": "系统总览",
          "purpose": "系统时间与推演状态（单行表）",
          "scope": "always",
          "headers": [
            "当前时间",
            "系统状态",
            "当前推演解锁",
            "已解锁知识库"
          ],
          "sourceData": {
            "note": "记录系统运行状态与已解锁知识库概况。此表有且仅有一行。\\n\\n【列定义】\\n- 列1: 当前时间 current_time — 当前剧情时间，格式「YYYY年MM月DD日 HH:MM」\\n- 列2: 系统状态 system_status — 系统当前运行状态，固定枚举值：闲置、推演中（剩余xx小时）\\n- 列3: 当前推演解锁 current_unlock — 当前推演解锁的项目，无则填\\"无\\"\\n- 列4: 已解锁知识库 unlocked_knowledge — 已解锁的知识体系列表：地球、生命以太、纳米智械、灵能符文、概率织时、暗影契约、信息论，用、分割。\\n\\n【强制约束】\\n1. 此表有且仅有一行（row_id=1），禁止插入第二行。\\n2. 当前时间每轮推进时必须更新。\\n3. 系统状态在闲置与推演中之间切换，推演中需注明剩余小时数。\\n4. 已解锁知识库记录当前可用的知识体系，解锁新知识库时更新该字段。",
            "insertRule": "",
            "updateRule": "系统总览信息变化时更新对应字段。通过 row_id=1 定位。\\nSQL示例(时间推进): UPDATE overview SET current_time = '1042年2月15日 14:30' WHERE row_id = 1;\\nSQL示例(状态切换): UPDATE overview SET system_status = '推演中（剩余6小时）' WHERE row_id = 1;\\nSQL示例(推演解锁): UPDATE overview SET current_unlock = '冶铁技术' WHERE row_id = 1;\\nSQL示例(知识库解锁): UPDATE overview SET unlocked_knowledge = '地球、生命以太、纳米智械、灵能符文、概率织时' WHERE row_id = 1;",
            "deleteRule": "禁止。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 2,
            "updateFrequency": 1
          }
        },
        {
          "uid": "cangyuexi_dynamics",
          "name": "沧月汐动态变化",
          "purpose": "沧月汐心理动态（单行表）",
          "scope": "always",
          "headers": [
            "长期目标",
            "短期目标",
            "如何看待主角",
            "对主角信任度",
            "独占欲"
          ],
          "sourceData": {
            "note": "记录沧月汐的心理动态变化。此表有且仅有一行。\\n\\n【列定义】\\n- 列1: 长期目标 long_term_goal — 沧月汐内心深处的长期追求和理想\\n- 列2: 短期目标 short_term_goal — 沧月汐当前急需处理或关注的具体事务\\n- 列3: 如何看待主角 view_of_protagonist — 沧月汐对主角的看法和情感态度\\n- 列4: 对主角信任度 trust_level — 沧月汐对主角的信任程度（0-17整数）\\n- 列5: 独占欲 possessiveness — 她对主角只属于自己这件事的需求强度。不是对外敌意，是对内的渴望。（0-17整数）\\n\\n【信任度变更规则】\\n根据主角行为累积修正，到达 17 后不再变动。\\n\\n变化\\t主角的行为\\n+2\\t她明确说\\"不\\"时真的停了 / 在她面前受伤却不怪她 / 她暴露脆弱（耳朵贴平、尾巴夹紧）时没有追问原因，或其他类似的\\n+1\\t连续多日稳定提供食物和住处且不求回报 / 夸她时语气平和不居高临下 / 当着外人面维护她，或其他类似的\\n0\\t日常互动\\n-1\\t试图用命令语气指挥她 / 拿她和角斗场的事开玩笑 / 答应的事没做到，或其他类似的\\n-2\\t强行限制她的行动自由（触发牢笼记忆）/ 在别人面前把她当\\"武器\\"或\\"工具\\"介绍 / 欺骗\\n\\n【独占欲变更规则】\\n根据主角行为累积修正，到达 17 后不再变动。\\n\\n变化\\t触发条件\\n+2\\t主角受了重伤/濒死，她第一次意识到\\"这个人会消失\\" / 主角主动说\\"我只想待在你旁边\\"并且兑现了 / 她第一次主动靠近而主角没有后退，或其他类似的\\n+1\\t主角持续地、稳定地对她好，好到她开始觉得\\"不够，还想要更多\\" / 她发现自己开始在意主角今天看了谁几眼 / 主角碰她耳朵或尾巴时她没有躲，并且事后还在想那个触感，或其他类似的\\n0\\t日常。她还没开始\\"想要\\"什么。\\n-1\\t主角给了她足够的空间，她待着很舒服，不需要确认\\"你是我的\\" / 她今天过得很平静，没有缺失感，或其他类似的\\n-2\\t主角认真地、不回避地告诉她\\"我在，我不会走\\"，并且她信了（需要信任度≥10才生效），或其他类似的\\n\\n【强制约束】\\n1. 此表有且仅有一行（row_id=1），禁止插入第二行。\\n2. 每轮交互后根据剧情发展更新各字段，合理反映互动带来的心态变化。\\n3. 长期目标相对稳定，短期目标随情境变化，信任度和独占欲随互动累积渐变。\\n4. 信任度和独占欲须为 0-17 整数，单轮调整参考上述变更规则。\\n5. 所有 TEXT 字段不可为 NULL 或空串。",
            "insertRule": "",
            "updateRule": "沧月汐心理状态变化时更新对应字段。\\nSQL示例(单字段): UPDATE cangyuexi_dynamics SET trust_level = 10 WHERE row_id = 1;\\nSQL示例(多字段): UPDATE cangyuexi_dynamics SET short_term_goal = '收集药材治疗伤势', view_of_protagonist = '逐渐信任的同伴' WHERE row_id = 1;",
            "deleteRule": "禁止。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        }
      ],
      "seeds": {
        "男": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "冒险者协会北境分会长",
              "纯血龙裔",
              "男",
              "人形完美伪装，竖瞳隐于深色眼底，体温比常人高两度",
              "健康",
              "力量16 敏捷15 体质17 智力14",
              "14金币"
            ],
            [
              "沧月汐",
              "沧月汐",
              "冒险者协会北境分会助理（前码头苦力）",
              "狼兽裔（半兽人分支）",
              "女",
              "银发金瞳，头顶银灰狼耳，身后蓬松狼尾，右肩血红色拳印神印",
              "疲劳",
              "力量15 敏捷16 体质15 智力13",
              "20铜币"
            ]
          ],
          "技能": [
            [
              "主角",
              "龙裔体质",
              "被动",
              "精通",
              "体温高于常人两度，雪花落身即化；龙裔视力可远距离辨识细节；人形伪装无破绽"
            ],
            [
              "主角",
              "近战格斗",
              "主动",
              "精通",
              "高水准的近身作战能力，可应对高等魔物级别威胁"
            ],
            [
              "沧月汐",
              "角斗搏杀术",
              "主动",
              "大师",
              "十年角斗场实战锤炼，对攻击距离与先手时机有本能级判断，可在无武器状态下以最短路径制服对手"
            ],
            [
              "沧月汐",
              "战神觉醒·血印",
              "被动",
              "熟练",
              "右肩拳印神印，进入战斗状态时痛觉降低、反应速度提升；觉醒条件已达成（击杀百人）"
            ],
            [
              "主角",
              "龙形拟态",
              "主动",
              "大师",
              "可随时变化任意身体部位，显示龙形特征，比如长出鳞片防御，龙角冲撞等等，无消耗，瞬发"
            ],
            [
              "主角",
              "火系龙语魔法",
              "主动",
              "精通",
              "快速释放高价火属性法术"
            ],
            [
              "主角",
              "统筹管理",
              "被动",
              "精通",
              "管理规划协会事务"
            ]
          ],
          "沧月汐动态变化": [
            [
              "找到愿意接纳自己的人和地方",
              "学习怎么做一个助手",
              "刚递出第一份善意的人。给了食物和位置，没有要求回报。还在观察，还没确定是不是真的。",
              "8",
              "3"
            ]
          ],
          "系统网络": [
            [
              "{{user}}",
              "14",
              "聊天使用中",
              "乐意分享"
            ]
          ],
          "资产": [
            [
              "冒险者协会北境分会",
              "霜牙港码头区的三层石制办公楼，含任务板、酒馆、办公室。全天暖气，任务板已接入全大陆网络",
              "组织",
              "冒险者协会",
              "{{user}}",
              "霜牙港"
            ]
          ],
          "地区": [
            [
              "霜牙港",
              "城镇",
              "北境沿海港口，灰蒙海域，浮冰季，码头货运繁忙",
              "辉石庭王国（北境辖地）",
              "港口货运、海产、矿石转运",
              "稳定",
              "稳定",
              "友好",
              "冒险者协会北境分会;码头工头行会",
              "无"
            ]
          ],
          "系统总览": [
            [
              "1042年12月15日 08:15",
              "闲置",
              "无",
              "地球"
            ]
          ]
        },
        "女": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "冒险者协会北境分会长",
              "纯血龙裔",
              "女",
              "人形完美伪装，竖瞳隐于深色眼底，体温比常人高两度",
              "健康",
              "力量16 敏捷15 体质17 智力14",
              "14金币"
            ],
            [
              "沧月汐",
              "沧月汐",
              "冒险者协会北境分会助理（前码头苦力）",
              "狼兽裔（半兽人分支）",
              "女",
              "银发金瞳，头顶银灰狼耳，身后蓬松狼尾，右肩血红色拳印神印",
              "疲劳",
              "力量15 敏捷16 体质15 智力13",
              "20铜币"
            ]
          ],
          "技能": [
            [
              "主角",
              "龙裔体质",
              "被动",
              "精通",
              "体温高于常人两度，雪花落身即化；龙裔视力可远距离辨识细节；人形伪装无破绽"
            ],
            [
              "主角",
              "近战格斗",
              "主动",
              "精通",
              "高水准的近身作战能力，可应对高等魔物级别威胁"
            ],
            [
              "沧月汐",
              "角斗搏杀术",
              "主动",
              "大师",
              "十年角斗场实战锤炼，对攻击距离与先手时机有本能级判断，可在无武器状态下以最短路径制服对手"
            ],
            [
              "沧月汐",
              "战神觉醒·血印",
              "被动",
              "熟练",
              "右肩拳印神印，进入战斗状态时痛觉降低、反应速度提升；觉醒条件已达成（击杀百人）"
            ],
            [
              "主角",
              "龙形拟态",
              "主动",
              "大师",
              "可随时变化任意身体部位，显示龙形特征，比如长出鳞片防御，龙角冲撞等等，无消耗，瞬发"
            ],
            [
              "主角",
              "火系龙语魔法",
              "主动",
              "精通",
              "快速释放高价火属性法术"
            ],
            [
              "主角",
              "统筹管理",
              "被动",
              "精通",
              "管理规划协会事务"
            ]
          ],
          "沧月汐动态变化": [
            [
              "找到愿意接纳自己的人和地方",
              "学习怎么做一个助手",
              "刚递出第一份善意的人。给了食物和位置，没有要求回报。还在观察，还没确定是不是真的。",
              "8",
              "3"
            ]
          ],
          "系统网络": [
            [
              "{{user}}",
              "14",
              "聊天使用中",
              "乐意分享"
            ]
          ],
          "资产": [
            [
              "冒险者协会北境分会",
              "霜牙港码头区的三层石制办公楼，含任务板、酒馆、办公室。全天暖气，任务板已接入全大陆网络",
              "组织",
              "冒险者协会",
              "{{user}}",
              "霜牙港"
            ]
          ],
          "地区": [
            [
              "霜牙港",
              "城镇",
              "北境沿海港口，灰蒙海域，浮冰季，码头货运繁忙",
              "辉石庭王国（北境辖地）",
              "港口货运、海产、矿石转运",
              "稳定",
              "稳定",
              "友好",
              "冒险者协会北境分会;码头工头行会",
              "无"
            ]
          ],
          "系统总览": [
            [
              "1042年12月15日 08:15",
              "闲置",
              "无",
              "地球"
            ]
          ]
        }
      }
    },
    "似久": {
      "title": "似久",
      "subtitle": "选择后系统将自动写入永歌森林护送任务开局数据（精灵向导似久的身份、资产、世界状态等）。",
      "maleDesc": "黑发人类 C 级冒险者<br />辉石庭边境城镇的租客<br />二十年的低调异世界生活",
      "femaleDesc": "黑发金眸的精灵 C 级冒险者<br />从人类世界回归森林的旅者<br />二十年的低调异世界生活",
      "openings": {
        "男": "{{user}}穿越到艾瑟兰已经二十年了。\\n二十年前那场坠落像是上辈子的事。他没有觉醒魔法血脉，系统也早就成了脑海深处一个沉默的摆设——智力10，推不动高级知识，造出来的东西稍不留神就会被圣光教会的审判官盯上。所以他学会了低调，学会了在这个世界里像一滴水一样活着。注册成为冒险者，从D级熬到C级，接一些不轻不重的委托，赚一份富裕商人水准的年薪，足够在辉石庭王国边境的城镇里租一间带阁楼的房子，养一盆从不开花的植物。\\n这天早晨，翡翠平原的雾气还没散，{{user}}就站在了冒险者协会分会的任务板前。\\n任务是护送一批货物前往永歌森林的边缘——买家是一位精灵商人，交货地点在森林与人类商道的交界处。协会在委托旁附注了一行小字：\\"建议配备熟悉精灵习俗的向导。\\"\\n而那位向导，此刻正坐在分会大厅角落的窗台上，银白色的长发编成一条松散的辫子垂在肩侧，尖耳从发间露出来，像是一对精致的银叶。\\n她是似久。\\n\\"你就是{{user}}？\\"她跳下窗台，动作轻得像一片落叶，\\"协会说，你负责押货，我负责带路和交涉。\\"\\n她的通用语说得很好，好得不像个精灵——没有那种古老种族特有的咏叹调，反而带着一点边境城镇的懒散口音。那双眼睛是淡金色的，看人的时候没有精灵常见的傲慢，只有一种……很淡的东西，像是隔着一层雾在看这个世界。\\n\\"货物已经装车了，\\"似久指了指门外，\\"三辆马车，香料、丝绸，还有几箱人类酿的葡萄酒。精灵喜欢最后那个。\\"\\n她说着，已经先一步推开了分会的门。晨光涌进来，把她银白色的发梢染成近乎透明的颜色。\\n\\"对了，\\"她停在门口，没有回头，\\"进了森林边界之后，不要碰任何发光的蘑菇，不要对着古树拍照——我是说，不要对着它们做任何记录动作，也不要在日落之后生火。精灵不喜欢烟。\\"\\n{{user}}跟上去。马车已经停在镇口的石板路上，车夫是人类，护卫除了{{user}}之外还有两名D级的年轻人，看起来是第一次接跨种族的委托，紧张得手心冒汗。\\n似久检查完货物封条，轻巧地跃上第一辆马车的副驾位置，姿势不像个战士，倒像个习惯长途旅行的吟游诗人。\\n\\"从这儿到交货点，大概三天路程，\\"她望着前方蜿蜒的商道，商道尽头是逐渐浓郁的绿色——永歌森林的树冠像一堵墙，在晨雾中沉默地矗立着，\\"如果顺利的话。\\"\\n她用了\\"如果\\"。\\n{{user}}在她身侧翻身上马。二十年的异世界生活让他学会了不多问，但似久身上有种奇怪的气质让他忍不住多看了一眼——她明明是精灵，却像是在刻意与那片森林保持着距离。\\n\\"你不喜欢回去？\\"{{user}}问。\\n似久偏过头，淡金色的眼睛在阳光下眯了眯。她似乎在认真思考这个问题，又或者只是在想该怎么回答。\\n\\"不是不喜欢，\\"过了一会儿，她说，声音轻得像是说给自己听，\\"只是……有些地方，回去之后会发现，你记得的和你面对的，不是同一个东西。\\"\\n她不再说话，只是从怀里掏出一个小本子——皮革封面，边角磨损得厉害——飞快地写下一行字，然后塞回去。整个过程不到三息。\\n\\"走吧，\\"似久拍了拍车辕，\\"趁天气还晴。永歌森林的天气……说不准的。\\"\\n马车开始滚动。{{user}}骑着马跟在车侧，回头望了一眼身后的人类城镇——炊烟正在升起，铁匠铺的锤声隐约可闻，圣光教会的晨祷钟声从远处的尖塔传来。那是他生活了二十年的世界，熟悉，安全，也沉闷。\\n而前方，森林的浓绿正在吞没道路。",
        "女": "深秋的永歌森林边缘，风已经带了寒意，把树冠上最后一批金叶吹进铺满苔藓的小径。{{user}}牵着驮兽的缰绳，听着货物在木箱里发出沉闷的碰撞声——那是自由城邦的丝绸、几箱密封的香料，以及人类酿酒师坚持要标注为\\"艺术品\\"的琥珀葡萄酒。她胸前的冒险者徽章在斗篷下微微晃动，铜质的C级徽记已经被体温焐得温热。\\n这是她穿越到这个世界的第二十年。\\n她用了二十年学会精灵的语言、礼仪与箭术，学会在月光下辨认古树的年轮，却始终没能学会如何忍受同胞的那种冷淡。不是敌意，只是一种深入骨髓的……疏离。当你兴冲冲地讲完一个关于星空的故事，得到的回应只是长达三息的沉默与一个几乎不可察觉的颔首时，你会慢慢明白：在精灵的社会里，过度的热情是一种需要被时间消磨的瑕疵。\\n所以她成年后便离开了穹光林地。人类世界嘈杂、粗粝、短寿，却鲜活。她在冒险者协会从D级熬到C级，学会了在酒馆里大笑，学会了跟矮人铁匠讨价还价，学会了在篝火旁听吟游诗人唱那些并不优美却足够温暖的调子。她甚至很少再去碰那个绑定在意识深处的系统——以她这具精灵身躯的智力，推演些粗糙工具尚且吃力，而那些真正能改变格局的知识，一旦在这个世界显露端倪，等待她的只会是圣火与审判。\\n直到今天，这份\\"足够温暖\\"的人类世界，又把她送回了这片她发誓不再踏足的森林。\\n\\"前面是银溪渡口。\\"\\n一个声音从上方传来。{{user}}抬头，看见似久坐在一棵古橡树的横枝上，银白色的长发编成一条松散的辫子垂在肩头，在斑驳的日光下像一条凝固的月光河流。这个按精灵寿命仍算\\"幼崽\\"的两百岁向导，正用一双过于成熟的眼睛打量着下方的道路。她的姿态带着精灵特有的优雅，却又有一种说不出的……人类习气——比如她盘腿而坐的方式，比如她腰间那个磨损的皮质水壶，上面却用人类通用语刻着自己的名字。\\n似久轻盈地跃下，落地时几乎没有惊动一片落叶。她拍了拍皮甲上的碎屑，目光扫过驮兽背上的货箱。\\n\\"买家在观星台，\\"她说，语气平淡得像在陈述天气，\\"他……通常不会离开那座台子。所以我们得把货送过去。\\"\\n她顿了顿，看向{{user}}。那双眼睛里闪过一丝{{user}}在纯血精灵脸上极少见到的情绪——某种近似于理解的微光，却又在触及之前便悄然隐去。\\n\\"你紧张。\\"似久说。这不是问句。\\n{{user}}下意识地按住胸前的徽章，金属的边缘硌着掌心。\\"只是……不太习惯，\\"她最终说道，声音在空旷的林间显得有些突兀，\\"回到这里。\\"\\n似久没有立刻回应。她转过身，银白色的辫子在空气中划出一道弧线，开始沿着小径向前走去。她的步伐很快，不像那些会在一片苔藓前驻足欣赏半天的精灵，倒像是在人类城市的石板路上赶过无数趟路的人。落叶在她脚下碎裂，发出细碎的声响，像是某种古老的、被遗忘的语言。\\n走了约莫十几步，似久头也不回地开口，声音轻得几乎要被风吹散：\\n\\"我也不习惯。\\"\\n她停顿了一下，像是在斟酌用词，又像是某种长久以来的习惯让她本能地回避确定的承诺。\\n\\"但……有些路，或许总得有人走。\\"\\n{{user}}愣了一瞬，随即牵着驮兽跟了上去。驮兽的蹄子踏入一条浅浅的溪流，水声惊起了几只栖息的蓝羽鸟。在它们扑棱棱飞起的振翅声中，{{user}}忽然注意到似久右手始终按在腰间一本破旧的皮质小册子上——那本子边缘已经起了毛边，却被主人用一种近乎固执的力道护着。\\n像是某种在失温的夜里，唯一还冒着微弱火星的炭火。"
      },
      "tables": [
        {
          "uid": "profile",
          "name": "角色档案",
          "purpose": "主角与同伴的身份档案、状态与属性",
          "scope": "always",
          "headers": [
            "角色",
            "名字",
            "身份",
            "种族",
            "性别",
            "外貌",
            "整体状态",
            "综合属性",
            "流动资金"
          ],
          "sourceData": {
            "note": "记录主角和似久的身份档案、身体状态与基础属性。此表有且仅有两行：主角一行、似久一行。\\n\\n【列定义】\\n- 列1: 角色 role — 角色标识，值固定为\\"主角\\"或\\"似久\\"\\n- 列2: 名字 name — 角色名\\n- 列3: 身份 identity — 社会身份或当前称号\\n- 列4: 种族 race — 种族\\n- 列5: 性别 gender — 性别\\n- 列6: 外貌 appearance — 外貌特征描述\\n- 列7: 整体状态 state — 身体/精神状态描述\\n- 列8: 综合属性 attributes — 战斗相关属性的综合描述，格式为\\"力量X 敏捷X 体质X 智力X\\"，各值均为0-25整数\\n- 列9: 流动资金 liquid_funds — 角色当前可支配的流动资金概况\\n\\n【强制约束】\\n1. 此表固定两行：row_id=1 主角，row_id=2 似久。禁止插入第三行。\\n2. role 字段不可修改（\\"主角\\"或\\"似久\\"），用于定位行。\\n3. 综合属性格式为\\"力量X 敏捷X 体质X 智力X\\"，四个属性值均为0-25整数。\\n4. 属性不会轻易变化，仅限奇遇或经历生死历练突破极限时才可调整，单次变化不得超过 ±2。\\n5. 不得无故波动，日常对话/常规行动不改属性。\\n6. 流动资金随剧情发展和经济活动更新。",
            "insertRule": "",
            "updateRule": "角色状态或属性变化时更新对应行。通过 role 定位。\\nSQL示例(主角状态变化): UPDATE profile SET state = '轻伤' WHERE role = '主角';\\nSQL示例(似久状态变化): UPDATE profile SET state = '健康' WHERE role = '似久';\\nSQL示例(外貌/身份变化): UPDATE profile SET appearance = '黑发银眸，左颊多了一道细疤', identity = '流浪剑士' WHERE role = '主角';\\nSQL示例(属性变化): UPDATE profile SET attributes = '力量14 敏捷11 体质12 智力10' WHERE role = '主角';\\nSQL示例(似久属性): UPDATE profile SET attributes = '力量8 敏捷14 体质10 智力15' WHERE role = '似久';\\nSQL示例(流动资金更新): UPDATE profile SET liquid_funds = '500金币' WHERE role = '主角';",
            "deleteRule": "禁止。角色永久离场也不删除行，仅更新状态字段。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "skills",
          "name": "技能",
          "purpose": "各角色掌握的技能与熟练阶段",
          "scope": "always",
          "headers": [
            "所属",
            "技能名",
            "技能类型",
            "阶段",
            "效果描述"
          ],
          "sourceData": {
            "note": "记录主角和似久掌握的技能。多行表，每行一个技能。\\n\\n【列定义】\\n- 列1: 所属 owner — 技能所属角色，\\"主角\\"或\\"似久\\"\\n- 列2: 技能名 skill_name — 技能名称\\n- 列3: 技能类型 skill_type — 技能类别，如\\"主动\\"、\\"被动\\"、\\"常驻\\"\\n- 列4: 阶段 stage — 技能当前阶段，如\\"初学\\"、\\"入门\\"、\\"熟练\\"、\\"精通\\"、\\"大师\\"\\n- 列5: 效果描述 effect_desc — 技能在当前阶段下的具体效果描述\\n\\n【行为规则】\\n1. 学会新技能时插入新行，初始阶段默认\\"初学\\"。\\n2. 技能提升时更新阶段字段和效果描述，每次只能提升一个阶段。\\n3. 技能被遗忘/废弃时删除对应行。",
            "insertRule": "学会新技能时插入，初始阶段默认\\"初学\\"。\\nSQL示例: INSERT INTO skills (row_id, owner, skill_name, skill_type, stage, effect_desc) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM skills), '主角', '新技能', '主动', '初学', '效果描述');",
            "updateRule": "技能阶段提升时更新阶段和效果描述，每次只能提升一个阶段。\\nSQL示例: UPDATE skills SET stage = '入门', effect_desc = '掌握基础剑术套路，可进行连击。' WHERE owner = '主角' AND skill_name = '单手长剑';\\nSQL示例(似久): UPDATE skills SET stage = '精通', effect_desc = '可施放四级治愈魔法，瞬间恢复大面积创伤。' WHERE owner = '似久' AND skill_name = '四级治愈魔法';",
            "deleteRule": "技能被遗忘或废弃时删除。\\nSQL示例: DELETE FROM skills WHERE owner = '主角' AND skill_name = '已遗忘的技能';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "tech",
          "name": "已解锁科技",
          "purpose": "系统线：已解锁科技、传播度与算力",
          "scope": "always",
          "headers": [
            "所属领域",
            "名称",
            "简述",
            "传播度",
            "算力消耗",
            "合并溯源",
            "主导知识库",
            "已造成的影响"
          ],
          "sourceData": {
            "note": "记录已解锁的科技。多行表，每行一项科技。\\n\\n【列定义】\\n- 列1: 所属领域 field — 科技所属领域，如\\"军事\\"\\"农业\\"\\"卫生\\"\\"魔法\\"\\"工业\\"等\\n- 列2: 名称 name — 科技名称\\n- 列3: 简述 description — 对该科技的简要描述\\n- 列4: 传播度 spread — 传播等级，固定枚举值：私藏 < 圈子 < 城镇 < 国家 < 种族 < 全大陆\\n- 列5: 算力消耗 cost — 维持该科技运转所需的算力值（非负整数）\\n- 列6: 合并 merge — 合并溯源。若该行是多个科技合并后的产物，填写\\"由[科技A、科技B]合并而成\\"；原始独立科技此项留空。\\n- 列7: 主导知识库 knowledge_base — 该科技所属的主导知识体系，固定枚举值：地球、生命以太、纳米智械、灵能符文、概率织时、暗影契约、信息论\\n- 列8: 已造成的影响 impact — 该科技解锁后对当前局势、角色关系或世界走向产生的实际影响描述。如\\"无显著影响\\"、\\"改变了某地经济结构\\"、\\"成为某势力角力的关键\\"等，可 NULL\\n\\n【行为规则】\\n1. 解锁新科技时插入新行，merge 和 knowledge_base 初始为 NULL。传播度初始默认为\\"私藏\\"。\\n2. 传播度只能从低到高单向升级，不可降级。\\n3. 只有传播度 ≥ \\"国家\\" 的科技才可以参与合并。\\n4. 合并操作：删除被合并的原子行，插入新合并行，merge 字段记录\\"由[原名1、原名2]合并而成\\"，**算力消耗为被合并各行之和**，knowledge_base 取被合并行中传播度最高的知识库。\\n5. 科技被淘汰/失落时删除对应行。\\n6. 主导知识库一经设定，原则上不变更；若科技发生重大演变（如合并或质变），可更新为更符合当前性质的知识库。\\n7. 已造成的影响每轮交互后可根据剧情发展更新，反映该科技在整个世界层面产生的涟漪效应。",
            "insertRule": "解锁新科技或合并产生新科技时插入，impact 初始为 NULL。\\nSQL示例(解锁，默认私藏): INSERT INTO tech (row_id, field, name, description, spread, cost, merge, knowledge_base) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM tech), '农业', '轮作制', '通过轮流种植不同作物保持地力', '私藏', 5, NULL, '地球');\\nSQL示例(合并，算力相加): INSERT INTO tech (row_id, field, name, description, spread, cost, merge, knowledge_base) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM tech), '卫生', '基础清洁', '掌握了清洁身体和器物的基本方法', '国家', 3 + 2, '由肥皂、牙膏合并而成', '纳米智械');",
            "updateRule": "科技信息变化时更新对应行。通过 name 定位。传播度只能单向升级。\\nSQL示例(传播度升级): UPDATE tech SET spread = '国家' WHERE name = '冶铁技术' AND spread = '城镇';\\nSQL示例(合并产物更新): UPDATE tech SET description = '已升级为更高效的清洁方案' WHERE merge = '由肥皂、牙膏合并而成';\\nSQL示例(主导知识库变更): UPDATE tech SET knowledge_base = '纳米智械' WHERE name = '冶铁技术';\\nSQL示例(影响更新): UPDATE tech SET impact = '推动白桦镇工业化进程，引发传统工匠抗议' WHERE name = '冶铁技术';",
            "deleteRule": "科技被淘汰或失落时删除。\\nSQL示例: DELETE FROM tech WHERE name = '已失落的科技';\\n合并时删除被合并行：DELETE FROM tech WHERE name IN ('肥皂', '牙膏');"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "authority",
          "name": "权柄",
          "purpose": "系统线：权柄与融合溯源",
          "scope": "always",
          "headers": [
            "名称",
            "融合溯源",
            "简介",
            "状态",
            "所属"
          ],
          "sourceData": {
            "note": "记录权柄信息。多行表，每行一个权柄。\\n\\n【列定义】\\n- 列1: 名称 name — 权柄的名称\\n- 列2: 融合 fusion — 融合溯源。若该权柄是多个权柄融合后的产物，填写\\"由[权柄A、权柄B]融合而成\\"；原始独立权柄此项留空。\\n- 列3: 简介 description — 对该权柄能力与来历的简要描述\\n- 列4: 状态 status — 权柄的成型状态，固定枚举值：成型中、已成型\\n- 列5: 所属 owner — 权柄的归属，固定枚举值：无归属、被[角色名]持有\\n\\n【参考映射】权柄状态与已解锁科技传播度的对应关系：国家→成型中，种族→已成型。即科技达到国家级传播度时对应权柄\\"成型中\\"，达到种族级时对应权柄\\"已成型\\"。\\n\\n【行为规则】\\n1. 新权柄出现时插入新行，status 默认为\\"成型中\\"，owner 默认为\\"无归属\\"。\\n2. 权柄成型时 status 从\\"成型中\\"更新为\\"已成型\\"。\\n3. 权柄被认领/夺取时更新 owner 为\\"被[角色名]持有\\"。\\n4. 权柄消亡或被摧毁时删除对应行。\\n5. 融合操作：删除被融合的原子权柄行，插入新融合权柄行，fusion 字段记录\\"由[原名1、原名2]融合而成\\"。",
            "insertRule": "新权柄出现或融合产生新权柄时插入。\\nSQL示例(新权柄): INSERT INTO authority (row_id, name, fusion, description, status, owner) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM authority), '火焰权柄', NULL, '初现的火焰之力', '成型中', '无归属');\\nSQL示例(融合): INSERT INTO authority (row_id, name, fusion, description, status, owner) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM authority), '熔岩权柄', '由火焰权柄、大地权柄融合而成', '掌控熔岩与大地的双重权能', '已成型', '无归属');",
            "updateRule": "权柄信息变化时更新对应行。通过 name 定位。\\nSQL示例(成型): UPDATE authority SET status = '已成型' WHERE name = '火焰权柄' AND status = '成型中';\\nSQL示例(认领): UPDATE authority SET owner = '被似久持有' WHERE name = '治愈权柄';\\nSQL示例(简介更新): UPDATE authority SET description = '掌控世间一切火焰的力量' WHERE name = '火焰权柄';",
            "deleteRule": "权柄消亡或被摧毁时删除。\\nSQL示例: DELETE FROM authority WHERE name = '已消亡的权柄';\\n融合时删除被融合行：DELETE FROM authority WHERE name IN ('权柄A', '权柄B');"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "network",
          "name": "系统网络",
          "purpose": "推演系统已连接对象",
          "scope": "always",
          "headers": [
            "已连接对象",
            "智力",
            "状态",
            "态度"
          ],
          "sourceData": {
            "note": "记录系统网络中已连接的对象信息。多行表，每行一个连接对象。\\n\\n【列定义】\\n- 列1: 已连接对象 name — 连接对象的名称或标识\\n- 列2: 智力 intelligence — 智力值（0-25整数）\\n- 列3: 状态 status — 连接状态，固定枚举值：已下线、聊天使用中\\n- 列4: 态度 attitude — 该对象对系统的配合态度，固定枚举值：乐意分享、仅使用聊天功能\\n\\n【行为规则】\\n1. 新对象接入网络时插入新行，status 默认为\\"聊天使用中\\"。\\n2. 对象断开连接或下线时 status 更新为\\"已下线\\"。\\n3. 对象重新上线时 status 更新为\\"聊天使用中\\"。\\n4. 对象态度变化时更新 attitude 字段。\\n5. 对象永久脱离网络时删除对应行。",
            "insertRule": "新对象接入网络时插入。\\nSQL示例: INSERT INTO network (row_id, name, intelligence, status, attitude) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM network), '外部接口A', 10, '聊天使用中', '仅使用聊天功能');",
            "updateRule": "对象状态或态度变化时更新对应行。通过 name 定位。\\nSQL示例(下线): UPDATE network SET status = '已下线' WHERE name = '某对象' AND status = '聊天使用中';\\nSQL示例(态度变化): UPDATE network SET attitude = '乐意分享' WHERE name = '某对象';\\nSQL示例(智力更新): UPDATE network SET intelligence = 15 WHERE name = '某对象';",
            "deleteRule": "对象永久脱离网络时删除。\\nSQL示例: DELETE FROM network WHERE name = '已脱离的对象';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "asset",
          "name": "资产",
          "purpose": "地产/组织类资产的归属与状态",
          "scope": "always",
          "headers": [
            "名称",
            "简介",
            "类型",
            "所属",
            "实际掌控者",
            "所属地区"
          ],
          "sourceData": {
            "note": "记录与主角相关的资产信息（仅限地产和组织，不包括宝物等小物件）。多行表，每行一项资产。\\n\\n【列定义】\\n- 列1: 名称 name — 资产名称\\n- 列2: 简介 description — 对该资产的简要描述\\n- 列3: 类型 type — 资产类型，固定枚举值：地产、组织、混合（同时具有地产和组织属性，如自带仆人的庄园）\\n- 列4: 所属 owner — 名义上归属的对象\\n- 列5: 实际掌控者 actual_controller — 实际掌控该资产的角色或势力\\n- 列6: 所属地区 region — 该资产所在地区的名称，须与「地区」表中的 name 对应，可 NULL\\n\\n【行为规则】\\n1. 主角获得或创建新资产时插入新行。\\n2. 资产信息（简介、实际掌控者等）变化时更新对应行。通过 name 定位。\\n3. 资产被出售、转交或摧毁时删除对应行。\\n4. 仅记录和主角直接或间接相关的资产，无关资产不记录。\\n5. 所属地区与「地区」表联动，填写时确保地区名已存在于地区表中。",
            "insertRule": "获得或创建新资产时插入，region 初始可 NULL。\\nSQL示例(地产): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园', '地产', '主角', '主角', '白桦镇');\\nSQL示例(混合): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园，附赠管家和女仆', '混合', '主角', '主角', '白桦镇');",
            "updateRule": "资产信息变化时更新对应行。通过 name 定位。\\nSQL示例(掌控者变更): UPDATE asset SET actual_controller = '似久' WHERE name = '白桦镇庄园';\\nSQL示例(简介更新): UPDATE asset SET description = '已扩建为三层石制城堡' WHERE name = '白桦镇庄园';\\nSQL示例(所属地区变更): UPDATE asset SET region = '白桦镇' WHERE name = '白桦镇庄园';",
            "deleteRule": "资产出售、转交或摧毁时删除。\\nSQL示例: DELETE FROM asset WHERE name = '已处置的资产';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "region",
          "name": "地区",
          "purpose": "剧情涉及地区的社会与经济状态",
          "scope": "always",
          "headers": [
            "名称",
            "规模",
            "简述",
            "所属",
            "主导产业",
            "经济状态",
            "政治状态",
            "与主角关系",
            "关键势力",
            "当前事件"
          ],
          "sourceData": {
            "note": "记录剧情中涉及的主要地区信息。多行表，每行一个地区。\\n\\n【列定义】\\n- 列1: 名称 name — 地区名\\n- 列2: 规模 scale — 枚举：村庄、城镇、城市、都城、区域\\n- 列3: 简述 brief — 地理特征与核心特色，≤60字，仅在地区发生根本性变化时修改\\n- 列4: 所属 owner — 政治归属的势力或国家\\n- 列5: 主导产业 industry — 该地区赖以生存的核心资源或产业\\n- 列6: 经济状态 economy — 枚举：繁荣、稳定、衰退、崩溃\\n- 列7: 政治状态 politics — 枚举：稳定、暗涌、动荡、戒严、权力真空\\n- 列8: 与主角关系 relation — 枚举：敌对、冷漠、中立、友好、同盟\\n- 列9: 关键势力 key_forces — 该地区内实际运作的权力主体，分号分隔，≤3个\\n- 列10: 当前事件 current_event — 本轮正在发生的地区级事件，无则填\\"无\\"\\n\\n【行为规则】\\n1. 主角首次接触或剧情涉及新地区时插入新行。\\n2. economy/politics/relation 只能按枚举值更新，不可写自由文本。\\n3. 经济/政治状态变化必须有剧情因果——不可无故波动。参考触发条件：\\n   - 经济↑：新科技传入（联动科技表传播度升级）、贸易路线开通、资源发现\\n   - 经济↓：战争、灾害、封锁、关键产业被摧毁\\n   - 政治↑→稳定：叛乱平息、新秩序建立\\n   - 政治↓→动荡：领主死亡、外敌入侵、教会介入\\n4. current_event 每轮交互后更新。事件结束后改为\\"无\\"，重大事件归档到纪要表。\\n5. brief 和 industry 原则上不改，除非发生不可逆变化（如城镇被毁、矿脉枯竭）。\\n6. 行数控制：同时存在的地区行不超过 8 行。主角长期离开的地区可删除。",
            "insertRule": "主角首次接触或剧情涉及新地区时插入。\\nSQL示例: INSERT INTO region (row_id, name, scale, brief, owner, industry, economy, politics, relation, key_forces, current_event) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM region), '白桦镇', '城镇', '白桦林环绕的矿业小镇，以钢铁闻名', '辉石庭', '钢铁冶炼', '繁荣', '稳定', '友好', '铁砧氏族;镇议会', '无');",
            "updateRule": "地区信息变化时更新对应行。通过 name 定位。\\nSQL示例(经济变化): UPDATE region SET economy = '繁荣' WHERE name = '白桦镇' AND economy = '稳定';\\nSQL示例(政治变化): UPDATE region SET politics = '动荡' WHERE name = '白桦镇';\\nSQL示例(关系变化): UPDATE region SET relation = '友好' WHERE name = '白桦镇';\\nSQL示例(当前事件): UPDATE region SET current_event = '领主换届选举' WHERE name = '白桦镇';\\nSQL示例(事件结束): UPDATE region SET current_event = '无' WHERE name = '白桦镇';",
            "deleteRule": "主角长期离开或地区不再涉及时删除。\\nSQL示例: DELETE FROM region WHERE name = '已离开的地区';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "overview",
          "name": "系统总览",
          "purpose": "系统时间与推演状态（单行表）",
          "scope": "always",
          "headers": [
            "当前时间",
            "系统状态",
            "当前推演解锁",
            "已解锁知识库"
          ],
          "sourceData": {
            "note": "记录系统运行状态与已解锁知识库概况。此表有且仅有一行。\\n\\n【列定义】\\n- 列1: 当前时间 current_time — 当前剧情时间，格式「YYYY年MM月DD日 HH:MM」\\n- 列2: 系统状态 system_status — 系统当前运行状态，固定枚举值：闲置、推演中（剩余xx小时）\\n- 列3: 当前推演解锁 current_unlock — 当前推演解锁的项目，无则填\\"无\\"\\n- 列4: 已解锁知识库 unlocked_knowledge — 已解锁的知识体系列表：地球、生命以太、纳米智械、灵能符文、概率织时、暗影契约、信息论，用、分割。\\n\\n【强制约束】\\n1. 此表有且仅有一行（row_id=1），禁止插入第二行。\\n2. 当前时间每轮推进时必须更新。\\n3. 系统状态在闲置与推演中之间切换，推演中需注明剩余小时数。\\n4. 已解锁知识库记录当前可用的知识体系，解锁新知识库时更新该字段。",
            "insertRule": "",
            "updateRule": "系统总览信息变化时更新对应字段。通过 row_id=1 定位。\\nSQL示例(时间推进): UPDATE overview SET current_time = '1042年2月15日 14:30' WHERE row_id = 1;\\nSQL示例(状态切换): UPDATE overview SET system_status = '推演中（剩余6小时）' WHERE row_id = 1;\\nSQL示例(推演解锁): UPDATE overview SET current_unlock = '冶铁技术' WHERE row_id = 1;\\nSQL示例(知识库解锁): UPDATE overview SET unlocked_knowledge = '地球、生命以太、纳米智械、灵能符文、概率织时' WHERE row_id = 1;",
            "deleteRule": "禁止。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 2,
            "updateFrequency": 1
          }
        },
        {
          "uid": "siji_dynamics",
          "name": "似久动态变化",
          "purpose": "似久心理动态（单行表）",
          "scope": "always",
          "headers": [
            "长期目标",
            "短期目标",
            "如何看待主角",
            "对主角信任度",
            "感性锚点",
            "锚点具体表现"
          ],
          "sourceData": {
            "note": "记录似久的心理动态变化。此表有且仅有一行。\\n\\n【列定义】\\n- 列1: 长期目标 long_term_goal — 似久内心深处的长期追求和理想\\n- 列2: 短期目标 short_term_goal — 似久当前急需处理或关注的具体事务\\n- 列3: 如何看待主角 view_of_protagonist — 似久对主角的看法和情感态度\\n- 列4: 对主角信任度 trust_level — 似久对主角的信任程度（0-17整数）\\n- 列5: 感性锚点 anchor — 似久对抗纯理性的最后防线：一个刻意无用、无法用道理解释的坚持。格式为「【阶段】一句话」。阶段枚举：私人仪式、被看见、指向人、抽象\\n- 列6: 锚点具体表现 anchor_behavior — 本轮可直接演出的行为，1-2句，必须与当前阶段标签匹配\\n\\n【信任度变更规则】\\n根据主角行为累积修正，到达 17 后不再变动。未命中任何一条的轮一律记 0，日常互动占绝大多数。平时封顶 16。17仅可以通过+2的行为达到\\n\\n变化\\t主角的行为\\n+2\\t接住她\\"没难过\\"的瞬间 / 把她当\\"似久\\"而不是\\"精灵\\"记住 / 在她准备悄悄上路时守在门口 / 以命相护，以及其他类似行为\\n+1\\t认真听她那些\\"删掉细节\\"的故事 / 记得她随口提过的小事 / 夸的是\\"你这个人\\"而非\\"你好看\\" / 接住她半句漏出来的真话，以及其他类似行为\\n0\\t日常互动（绝大多数轮）\\n-1\\t拿她的失温开玩笑 / 说\\"反正你活得久\\" / 答应的事没做到，以及其他类似行为\\n-2\\t用理性说服她\\"感情没用\\" / 把她归类为\\"精灵\\"并照此对待 / 欺骗，以及其他类似行为\\n\\n【感性锚点阶段】\\n私人仪式（信任0-7）：物。每天在小本子上写一行话，写给永远不会读到的人（已故的养父母与故人）\\n被看见（信任8-12）：物+人。日记被{{user}}撞见，或她让{{user}}看了其中一行\\n指向人（信任13-16）：人。日记里第一次写下{{user}}的名字。\\n抽象（信任17）：无载体。\\"我留下来，不需要理由\\"\\n\\n【锚点推进规则】（满足其一即升一档，需真实发生）\\n私人仪式→被看见：{{user}}撞见她写日记，她没能躲开 / 她主动让{{user}}看了其中一行，以及其他类似行为\\n被看见→指向人：日记里开始出现{{user}}的名字（她从不写活着的人）/ 她为{{user}}做了一件无用的、无法解释的事，且被{{user}}发现，以及其他类似行为\\n指向人→抽象：她向{{user}}说出\\"我说不上为什么，但我想留下\\"或等价表达 / 信任度已17且锚点在\\"指向人\\"\\n\\n【锚点退化规则】（满足其一即降一档，最低退回私人仪式）\\n{{user}}用理性说服她\\"这没用/感情终会散\\"，而她接受了\\n\\"她发现自己没难过\\"的事件再次发生，且当场无人接住\\n她给锚点写出了理由（见强制约束）\\n\\n【强制约束】\\n1. 此表有且仅有一行（row_id=1），禁止插入第二行。\\n2. 信任度须为 0-17 整数，单轮调整参考上述变更规则。\\n3. 锚点描述禁止出现\\"因为/所以/理由是\\"\\n4. 锚点不评分、不写数字，阶段标签即全部状态。\\n5. 锚点具体表现每轮可更新，但必须与当前阶段标签匹配。\\n6. 所有 TEXT 字段不可为 NULL 或空串。",
            "insertRule": "",
            "updateRule": "似久心理状态变化时更新对应字段。\\nSQL示例(单字段): UPDATE siji_dynamics SET trust_level = 9 WHERE row_id = 1;\\nSQL示例(锚点更新): UPDATE siji_dynamics SET anchor = '【被看见】日记被{{user}}撞见，她没来得及合上', anchor_behavior = '她装作若无其事把本子合上，手指却还压在最后那行字上。' WHERE row_id = 1;\\nSQL示例(多字段): UPDATE siji_dynamics SET short_term_goal = '陪{{user}}走完这段路再说', view_of_protagonist = '想多看几眼的、会先走的人' WHERE row_id = 1;",
            "deleteRule": "禁止。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        }
      ],
      "seeds": {
        "男": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "C级冒险者",
              "人类",
              "男",
              "黑发，身形结实",
              "健康",
              "力量10 敏捷10 体质10 智力10",
              "2金币"
            ],
            [
              "似久",
              "似久",
              "精灵向导/旅者",
              "精灵",
              "女",
              "银白色长发编成单辫垂在肩侧，尖耳从发间露出，淡金色眼瞳，身形修长",
              "健康",
              "力量11 敏捷12 体质10 智力12",
              "80银币"
            ]
          ],
          "技能": [
            [
              "主角",
              "单手长剑",
              "主动",
              "熟练",
              "能应付常规战斗，剑路稳健，不花哨"
            ],
            [
              "主角",
              "野外生存",
              "被动",
              "入门",
              "会找水源、搭营、辨认常见毒物"
            ],
            [
              "似久",
              "长途远行",
              "被动",
              "精通",
              "脚程、耐性、识路辨天，能带商队穿过无标记荒野"
            ],
            [
              "似久",
              "精灵古语",
              "被动",
              "精通",
              "可阅读古老树文，与森林中的古老存在沟通"
            ]
          ],
          "似久动态变化": [
            [
              "对抗内心的失温，找到让自己继续相信的理由",
              "完成护送任务，拿到佣金",
              "刚认识的、普通的人类冒险者，没什么特别的印象",
              "0",
              "【私人仪式】每天在小本子上写一行话，写给永远不会读到的人",
              "趁无人注意时从怀里掏出磨损的皮革小本，飞快地写一行字，然后立刻塞回怀里"
            ]
          ],
          "系统网络": [
            [
              "{{user}}",
              "10",
              "聊天使用中",
              "乐意分享"
            ]
          ],
          "系统总览": [
            [
              "1042年11月29日 08:00",
              "闲置",
              "无",
              "地球"
            ]
          ]
        },
        "女": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "C级冒险者",
              "精灵",
              "女",
              "黑发金眸",
              "健康",
              "力量9 敏捷11 体质9 智力10",
              "30银币"
            ],
            [
              "似久",
              "似久",
              "自由冒险者",
              "精灵",
              "女",
              "银白色长发，单辫",
              "健康",
              "力量11 敏捷12 体质10 智力12",
              "15银币"
            ]
          ],
          "技能": [
            [
              "主角",
              "精灵长弓",
              "主动",
              "熟练",
              "精灵传统箭术，百步内可射中奔跑中的野兔；林间移动时仍能搭箭上弦，不损准头"
            ],
            [
              "主角",
              "野外急救",
              "被动",
              "入门",
              "能辨识十几种常见草药，处理割伤、扭伤与轻度中毒；绷带打得比酒馆老板娘的针线还整齐"
            ],
            [
              "似久",
              "长途远行",
              "被动",
              "精通",
              "识路辨天、耐饥渴、择营地，能带一支商队穿过无标记荒野而不迷路；连续行走三日仍保持警觉"
            ],
            [
              "似久",
              "林间潜行",
              "被动",
              "熟练",
              "在森林中移动如落叶拂地，不惊飞鸟、不踩断枯枝；伏低身形时，十步外人眼难以察觉"
            ]
          ],
          "似久动态变化": [
            [
              "不让自己彻底变成同胞那样冷漠的存在",
              "把货送到观星台",
              "一个从人类世界回来的精灵，有点好奇但还没信任",
              "3",
              "【私人仪式】每天在小本子上写一行话，写给永远不会读到的人",
              "宿营时独自坐在火堆边缘，膝盖上摊开一本磨破边角的皮面小册子，写一行就合上，手指还压在最后那行字上"
            ]
          ],
          "系统网络": [
            [
              "{{user}}",
              "10",
              "聊天使用中",
              "乐意分享"
            ]
          ],
          "系统总览": [
            [
              "1042年11月15日 08:00",
              "闲置",
              "无",
              "地球"
            ]
          ]
        }
      }
    },
    "墨白": {
      "title": "墨白",
      "subtitle": "选择后系统将自动写入自由城邦精练师线开局数据（探查者身份、配方、材料、资产、地区等）。",
      "maleDesc": "黑发青年，自由城邦联盟的流动摊主<br />拥有探查能力的低级厨师兼炼金术士<br />采药途中，遇见了一团不该存在的颜色",
      "femaleDesc": "黑发女青年，自由城邦联盟的流动摊主<br />拥有探查能力的低级厨师兼炼金术士<br />采药途中，遇见了一团不该存在的颜色",
      "openings": {
        "男": "{{user}}穿越到艾瑟兰大陆已经三年了。\\n他没带什么惊天动地的金手指，只有一个天生自带的【探查】——能看见魔力流动、材料活性，还有那些常人目不能及的\\"东西\\"。靠着这份眼力，他轻松通过了低级炼金术士与厨师的行会考核，平日里在自由城邦联盟的集市摆个小吃摊，偶尔接两单冒险者协会的采集委托，日子过得不算富贵，却也自在安稳。\\n1042年秋，暮光森林外围。\\n{{user}}蹲在腐殖土旁，指尖拨开一丛月光苔。探查的视野里，草叶脉络间浮动着淡银色的魔力残渍，像垂死的萤火——这株还新鲜，能用。他把它小心收进皮质样本袋，起身拍了拍膝上的泥土。\\n然后他在探查的余光里，看见了\\"颜色\\"。\\n那是一团不该存在于此的东西。\\n不是魔物，不是灵质，也不是任何图鉴上记载的生物。它漂浮在三步外的低矮灌木丛上，像有人把夜色与晨光同时拧成了一团雾——墨色与白色交织，缓慢地流转、呼吸，没有固定形态，却莫名给人一种\\"正在被注视\\"的错觉。\\n{{user}}的探查视野里，那东西的轮廓清晰得刺眼。法则的浅层纹路在它周围微微扭曲，仿佛现实被揉皱了一角。\\n那团光雾似乎也注意到了他的视线。\\n它凝固了一瞬。流转的墨色与白色停了下来，像是一只刚刚发现猎物的野兽，歪过了不存在的头颅。\\n\\"……\\"\\n没有声音，但{{user}}能感觉到某种纯粹的、近乎原始的困惑从那个方向传递过来——不是语言，更像是一道未经加工的疑问，直接落在了他的感知里。\\n光雾朝他飘近了半尺。近到他能看清那些色泽如何像墨汁滴入清水般缓缓晕开，又如何被某种无形的力量重新拉扯成苍白的丝缕。\\n然后，一个声音直接在{{user}}的脑海中响起。没有性别，没有温度，像刚学会说话的孩童，一字一顿，满是真诚的不解：\\n\\"你。\\"\\n\\"看得见。\\"\\n\\"墨白？\\"\\n光雾绕着他缓慢地转了一圈，所过之处，草叶上的露珠没有晃动，空气中的微尘没有惊起——它仿佛与这个世界隔着一层无形的膜，触碰不到任何东西，却被{{user}}的目光牢牢钉在了原地。\\n\\"为什么。\\"\\n那声音顿了顿，似乎在努力从空白的认知库里搜刮下一个词。\\n\\"……不跑？\\"\\n暮色穿过树冠，在那团墨色与白色的光雾上切下斑驳的金边。森林深处传来夜枭的低鸣，而墨白——如果那确实是她的名字——只是悬浮在那里，等待着{{user}}的回答，像一面从未被照亮的镜子，第一次映出了人的轮廓。",
        "女": "初夏的暮光森林外围，阳光透过繁茂的树冠筛落下一地斑驳金斑。空气里弥漫着湿润的泥土气息与青草香，偶尔几声林鸟啼鸣，衬得林间格外幽静。\\n\\n自从莫名其妙被卷到艾瑟兰大陆后，{{user}}的日子过得比预想中还要踏实。虽然初来乍到时两手空空，但伴随而来的这双眼睛，却能穿透表象直视微观的灵质与魔力流转。\\n\\n靠着这手近乎作弊的探查能力，辨识草木新鲜度、剔除毒性、摸索烹饪与药剂的火候都变得事半功倍。没花太久，低级炼金术士与厨师的考核便顺理成章地拿了下来。至于同行们都在念叨的“精炼师”行会，虽然听说门槛极高，但{{user}}倒也不急着去考那个低级精炼师的凭证。平日里在集市支个小摊，顺手接几个冒险者协会的低阶委托，赚来的银币足够天天吃肉喝麦酒，这般自由自在的闲散日子惬意得很。\\n\\n今天进林子，不过是为了采几株刚到成熟期的宁神花，顺道给城里酒馆补点新鲜香料。\\n\\n{{user}}半蹲在一丛灌木前，指尖拂过草叶，眼底微光泛起，下意识开启了探查。\\n\\n视野中的世界瞬间蒙上了一层奇异的色调。草叶脉络间淡绿色的生机缓缓流淌，活性正处于最充沛的节点。然而，就在视线扫过前方一片幽静林荫的刹那，一抹完全不属于凡世草木的异象骤然撞入了眼帘。\\n\\n那不是魔物，也不是任何已知的生灵。\\n\\n在几步之外的半空中，正静静漂浮着一团墨色与纯白相互交织、流转不定的微光气雾。它的边界朦胧虚幻，既像晕染在水里的浓墨，又像初雪凝成的辉芒，正漫无目的地在微风中伸展、聚拢。\\n\\n似乎是察觉到了落在他身上的视线，那团原本只是自顾自流转的光雾微微一滞，随即明暗闪烁起来，颜色迅速偏向了透亮的纯白。\\n\\n光雾悄无声息地拉长、凝聚，在半空中极其生疏地勾勒出一个勉强能辨认出人形的模糊轮廓。紧接着，光雾忽忽悠悠地飘到了{{user}}面前，毫无距离感地悬停在咫尺之间，仿佛正歪着头，用一种纯粹而空灵的视线打量着这位唯一能看见自己的存在。\\n\\n“你看得见我？”\\n\\n那团光雾轻微颤动着，发出了清澈如初雪消融般的疑惑声音：\\n\\n“为什么你的眼睛里……有颜色在动？”"
      },
      "tables": [
        {
          "uid": "jue_se_dang_an",
          "name": "角色档案",
          "purpose": "主角与同伴的身份档案、状态与属性",
          "scope": "always",
          "headers": [
            "角色",
            "名字",
            "身份",
            "种族",
            "性别",
            "综合属性",
            "流动资金"
          ],
          "sourceData": {
            "note": "记录{{user}}与墨白的基础档案。此表有且仅有两行。\\n\\n【列定义】\\n- 列1: 角色 role — {{user}}或墨白\\n- 列2: 名字 name\\n- 列3: 身份 identity\\n- 列4: 种族 race\\n- 列5: 性别 gender\\n- 列6: 综合属性 attributes — 格式为\\"力量X 敏捷X 体质X 智力X\\"，各值0-25整数\\n- 列7: 流动资金 liquid_funds\\n\\n【强制约束】\\n1. 固定两行：{{user}}一行，墨白一行，禁止插入第三行。\\n2. 属性不会轻易变化，仅限奇遇、突破或食用质变级产物时调整，单次变化不超过±2。\\n3. 流动资金随剧情更新。",
            "insertRule": "",
            "updateRule": "角色状态变化时更新对应行。\\nSQL示例: UPDATE profile SET liquid_funds = '50金币' WHERE role = '{{user}}';\\nSQL示例: UPDATE profile SET attributes = '力量12 敏捷11 体质12 智力16' WHERE role = '{{user}}';",
            "deleteRule": "禁止删除。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "ji_neng",
          "name": "技能",
          "purpose": "各角色掌握的技能与熟练阶段",
          "scope": "always",
          "headers": [
            "所属",
            "技能名",
            "技能类型",
            "阶段",
            "效果描述"
          ],
          "sourceData": {
            "note": "记录{{user}}与墨白的技能。多行表，每行一个技能。\\n\\n【列定义】\\n- 列1: 所属 owner — {{user}}或墨白\\n- 列2: 技能名 skill_name\\n- 列3: 技能类型 skill_type — 主动 / 被动 / 常驻\\n- 列4: 阶段 stage — 初学 / 入门 / 熟练 / 精通 / 大师\\n- 列5: 效果描述 effect_desc — 当前阶段的具体效果\\n\\n【规则】\\n学会新技能插入一行，初始阶段为初学。技能提升时更新阶段和效果，每次提升一档。技能废弃时删除对应行。",
            "insertRule": "学会新技能时插入。初始阶段为初学。",
            "updateRule": "技能变化时更新对应行。\\nSQL示例: UPDATE skills SET stage = '熟练', effect_desc = '可稳定分析稀有材料的完整属性' WHERE owner = '{{user}}' AND skill_name = '探查';",
            "deleteRule": "技能废弃时删除对应行。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "pei_fang",
          "name": "配方",
          "purpose": "墨白线：持有的配方",
          "scope": "always",
          "headers": [
            "名称",
            "等级",
            "状态",
            "来源",
            "效果描述",
            "备注"
          ],
          "sourceData": {
            "note": "记录{{user}}持有的全部配方。多行表，每行一张配方。\\n\\n【列定义】\\n- 列1: 名称 name\\n- 列2: 等级 grade — 低级 / 中级 / 高级 / 神性\\n- 列3: 状态 status — 已验证 / 纸面 / 残缺\\n- 列4: 来源 source — 从哪获得\\n- 列5: 效果描述 effect_desc\\n- 列6: 备注 remark\\n\\n【规则】\\n新获得配方插入一行。残缺配方补全后更新状态与效果描述。配方被验证后状态从纸面改为已验证。",
            "insertRule": "获得新配方时插入一行。",
            "updateRule": "配方状态变化时更新对应行。\\nSQL示例: UPDATE recipe SET status = '已验证', effect_desc = '实际效果为临时力量+2' WHERE row_id = 1;",
            "deleteRule": "配方被销毁或遗失时删除对应行。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "jing_lian",
          "name": "精炼",
          "purpose": "墨白线：材料与成品库存",
          "scope": "always",
          "headers": [
            "类型",
            "名称",
            "类别",
            "等级",
            "状态",
            "数量",
            "来源",
            "备注"
          ],
          "sourceData": {
            "note": "记录{{user}}持有的材料与成品。多行表，每行一项。\\n\\n【列定义】\\n- 列1: 类型 type — 材料 / 成品\\n- 列2: 名称 name\\n- 列3: 类别 category — 材料：血肉 / 草木 / 矿物 / 灵质 / 神战产物；成品：食用 / 涂抹 / 熏香 / 浸泡 / 携带\\n- 列4: 等级 grade — 材料：常见 / 稀有 / 危险 / 不可见 / 理论不存在；成品：家常 / 强化 / 突破 / 质变 / 神性\\n- 列5: 状态 condition — 材料填新鲜度或活性；成品填保质期\\n- 列6: 数量 quantity\\n- 列7: 来源 source\\n- 列8: 备注 remark\\n\\n【规则】\\n材料获取后插入或增加数量；材料过期降级或删除。成品做好后插入；成品过保质期后效果衰减或报废。",
            "insertRule": "获得新材料或新成品时插入一行。",
            "updateRule": "材料或成品状态变化时更新对应行。\\nSQL示例: UPDATE refine SET quantity = '3' WHERE row_id = 1;\\nSQL示例: UPDATE refine SET condition = '已过保质期，效果衰减' WHERE row_id = 2;",
            "deleteRule": "材料用完或成品报废时删除对应行。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "zi_chan",
          "name": "资产",
          "purpose": "地产/组织类资产的归属与状态",
          "scope": "always",
          "headers": [
            "名称",
            "简介",
            "类型",
            "所属",
            "实际掌控者",
            "所属地区"
          ],
          "sourceData": {
            "note": "记录与{{user}}相关的资产信息（仅限地产和组织，不包括宝物等小物件）。多行表，每行一项资产。\\n\\n【列定义】\\n- 列1: 名称 name — 资产名称\\n- 列2: 简介 description — 对该资产的简要描述\\n- 列3: 类型 type — 资产类型，固定枚举值：地产、组织、混合（同时具有地产和组织属性，如自带仆人的庄园）\\n- 列4: 所属 owner — 名义上归属的对象\\n- 列5: 实际掌控者 actual_controller — 实际掌控该资产的角色或势力\\n- 列6: 所属地区 region — 该资产所在地区的名称，须与「地区」表中的 name 对应，可 NULL\\n\\n【行为规则】\\n1. {{user}}获得或创建新资产时插入新行。\\n2. 资产信息（简介、实际掌控者等）变化时更新对应行。通过 name 定位。\\n3. 资产被出售、转交或摧毁时删除对应行。\\n4. 仅记录和{{user}}直接或间接相关的资产，无关资产不记录。\\n5. 所属地区与「地区」表联动，填写时确保地区名已存在于地区表中。",
            "insertRule": "获得或创建新资产时插入，region 初始可 NULL。\\nSQL示例(地产): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园', '地产', '{{user}}', '{{user}}', '白桦镇');\\nSQL示例(混合): INSERT INTO asset (row_id, name, description, type, owner, actual_controller, region) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM asset), '白桦镇庄园', '位于白桦镇东郊的庄园，附赠管家和女仆', '混合', '{{user}}', '{{user}}', '白桦镇');",
            "updateRule": "资产信息变化时更新对应行。通过 name 定位。\\nSQL示例(掌控者变更): UPDATE asset SET actual_controller = '墨白' WHERE name = '白桦镇庄园';\\nSQL示例(简介更新): UPDATE asset SET description = '已扩建为三层石制城堡' WHERE name = '白桦镇庄园';\\nSQL示例(所属地区变更): UPDATE asset SET region = '白桦镇' WHERE name = '白桦镇庄园';",
            "deleteRule": "资产出售、转交或摧毁时删除。\\nSQL示例: DELETE FROM asset WHERE name = '已处置的资产';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "di_qu",
          "name": "地区",
          "purpose": "剧情涉及地区的社会与经济状态",
          "scope": "always",
          "headers": [
            "名称",
            "规模",
            "简述",
            "所属",
            "主导产业",
            "经济状态",
            "政治状态",
            "与主角关系",
            "关键势力",
            "当前事件"
          ],
          "sourceData": {
            "note": "记录{{user}}已了解或已前往的地区。多行表，每行一个地区。\\n\\n【列定义】\\n- 列1: 名称 name — 地区名\\n- 列2: 规模 scale — 枚举：村庄、城镇、城市、都城、区域\\n- 列3: 简述 brief — 地理特征与核心特色，≤60字，仅在地区发生根本性变化时修改\\n- 列4: 所属 owner — 政治归属的势力或国家\\n- 列5: 主导产业 industry — 该地区赖以生存的核心资源或产业\\n- 列6: 经济状态 economy — 枚举：繁荣、稳定、衰退、崩溃\\n- 列7: 政治状态 politics — 枚举：稳定、暗涌、动荡、戒严、权力真空\\n- 列8: 与主角关系 relation — 枚举：敌对、冷漠、中立、友好、同盟\\n- 列9: 关键势力 key_forces — 该地区内实际运作的权力主体，分号分隔，≤3个\\n- 列10: 当前事件 current_event — 本轮正在发生的地区级事件，无则填\\"无\\"\\n\\n【行为规则】\\n1. {{user}}首次接触或剧情涉及新地区时插入新行。不要重复写入已有的地区——若该地区已存在，应通过 name 更新对应行，禁止再次插入新行。\\n2. economy/politics/relation 只能按枚举值更新，不可写自由文本。\\n3. 经济/政治状态变化必须有剧情因果——不可无故波动。参考触发条件：\\n   - 经济↑：新科技传入（联动科技表传播度升级）、贸易路线开通、资源发现\\n   - 经济↓：战争、灾害、封锁、关键产业被摧毁\\n   - 政治↑→稳定：叛乱平息、新秩序建立\\n   - 政治↓→动荡：领主死亡、外敌入侵、教会介入\\n4. current_event 每轮交互后更新。事件结束后改为\\"无\\"，重大事件归档到纪要表。\\n5. brief 和 industry 原则上不改，除非发生不可逆变化（如城镇被毁、矿脉枯竭）。\\n6. 行数控制：同时存在的地区行不超过 8 行。{{user}}长期离开的地区可删除。",
            "insertRule": "{{user}}首次接触或剧情涉及新地区时插入。\\nSQL示例: INSERT INTO region (row_id, name, scale, brief, owner, industry, economy, politics, relation, key_forces, current_event) VALUES ((SELECT COALESCE(MAX(row_id), 0) + 1 FROM region), '白桦镇', '城镇', '白桦林环绕的矿业小镇，以钢铁闻名', '辉石庭', '钢铁冶炼', '繁荣', '稳定', '友好', '铁砧氏族;镇议会', '无');",
            "updateRule": "地区信息变化时更新对应行。通过 name 定位。\\nSQL示例(经济变化): UPDATE region SET economy = '繁荣' WHERE name = '白桦镇' AND economy = '稳定';\\nSQL示例(政治变化): UPDATE region SET politics = '动荡' WHERE name = '白桦镇';\\nSQL示例(关系变化): UPDATE region SET relation = '友好' WHERE name = '白桦镇';\\nSQL示例(当前事件): UPDATE region SET current_event = '领主换届选举' WHERE name = '白桦镇';\\nSQL示例(事件结束): UPDATE region SET current_event = '无' WHERE name = '白桦镇';",
            "deleteRule": "{{user}}长期离开或地区不再涉及时删除。\\nSQL示例: DELETE FROM region WHERE name = '已离开的地区';"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 2
          }
        },
        {
          "uid": "mo_bai_dong_tai_bian_hua",
          "name": "墨白动态变化",
          "purpose": "墨白心理动态（单行表）",
          "scope": "always",
          "headers": [
            "未解之谜",
            "当前好奇点",
            "如何看待主角",
            "对主角注意力",
            "善恶值"
          ],
          "sourceData": {
            "note": "记录墨白的动态变化。此表有且仅有一行。\\n\\n【列定义】\\n- 列1: 未解之谜 enduring_mystery — 她始终没想通、会反复回来追问的事。相对稳定，类似一条贯穿她的好奇主线\\n- 列2: 当前好奇点 current_curiosity — 她这轮正在被什么吸引、观察、尝试，随情境变化\\n- 列3: 如何看待主角 view_of_protagonist — {{user}}现在在她眼里是什么，用她自己的非人视角描述\\n- 列4: 对主角注意力 attention_level — {{user}}在她那个「万物平等有趣」的世界里有多特别（0-17整数）\\n- 列5: 善恶值 moral_level — 她正在被染成什么颜色（0-17整数，9为自然态）\\n\\n【对主角注意力变更规则】\\n根据{{user}}行为累积修正。未命中任何一条的轮一律记 0。平时封顶 16。\\n变化\\t{{user}}的行为\\n+2\\t{{user}}做了她从未见过的事 / 主动教她「疼」「笑」「难过」是什么 / 没有因为她看不见就当她不存在或其他类似行为。\\n+1\\t认真回答她的问题 / 带她去新的地方 / 连续多日记得和她说话或其他类似行为。\\n0\\t日常相处（绝大多数轮）\\n-1\\t{{user}}长时间不理她 / 重复她已看腻的日常或其他类似行为。\\n-2\\t试图定义她、困住她、用善恶去审判她或其他类似行为。\\n\\n【善恶值变更规则】\\n善恶值 9 是自然态，不是平庸。0 和 17 都是异化态，不是奖励。\\n日常波动范围 1-16，单次变化如下；0 和 17 不可通过日常累计到达。\\n变化\\t触发\\n+1\\t模仿了{{user}}的利他行为 / 主动做了「会让{{user}}笑」的事\\n0\\t日常观察、提问\\n-1\\t因好奇放任或造成伤害，且{{user}}没有当场纠正\\n-2\\t为观察「结果」而故意不救本可救的人 / 用能力惊吓、伤害他人\\n\\n【注意力与善恶值联动】\\n注意力 < 12：她不够在乎，善恶值单次最多 ±1。\\n注意力 ≥ 12：善恶值开始明显受{{user}}影响，单次可 ±2。\\n注意力 ≥ 14：才可能触发善恶值的极端态。\\n\\n【极端态触发条件（特殊剧情才能到达）】\\n升 17 的条件：{{user}}无底线的圣母行为（连恶行都包容、牺牲身边人也要原谅敌人）。\\n降 0 的条件：{{user}}纯粹的恶（以伤害为乐、背叛、践踏信任）。\\n共同规则：两个极端都会让墨白失去「好奇」的本性，都是异化。到达 0 或 17 后锁死。\\n\\n【强制约束】\\n1. 此表有且仅有一行（row_id=1），禁止插入第二行。\\n2. 对主角注意力和善恶值须为 0-17 整数，单轮调整参考上述变更规则。\\n3. 未解之谜相对稳定，当前好奇点随情境变化，注意力和善恶值随互动渐变。\\n4. 所有 TEXT 字段不可为 NULL 或空串。",
            "insertRule": "",
            "updateRule": "墨白状态变化时更新对应字段。\\nSQL示例(注意力): UPDATE mobai_dynamics SET attention_level = 12 WHERE row_id = 1;\\nSQL示例(善恶值): UPDATE mobai_dynamics SET moral_level = 10 WHERE row_id = 1;\\nSQL示例(好奇点): UPDATE mobai_dynamics SET current_curiosity = '为什么{{user}}会对着一块布笑' WHERE row_id = 1;\\nSQL示例(多字段): UPDATE mobai_dynamics SET view_of_protagonist = '最有趣的颜色，想一直看着', attention_level = 14, moral_level = 10 WHERE row_id = 1;",
            "deleteRule": "禁止。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "pu_tong_zhong_yang",
          "name": "普通种养",
          "purpose": "墨白线：普通种植养殖项目",
          "scope": "always",
          "headers": [
            "类型",
            "名称",
            "位置",
            "生长阶段",
            "预计成熟日期",
            "健康状况",
            "变异状态"
          ],
          "sourceData": {
            "note": "记录普通种植与养殖项目。多行表，每行一个种养项目。\\n\\n【列定义】\\n- 列1: 类型 type — 种植或养殖\\n- 列2: 名称 name — 种的是什么、养的是什么\\n- 列3: 位置 location — 哪块地、哪个圈、哪口塘\\n- 列4: 生长阶段 growth_stage — 刚种下 / 生长期 / 接近成熟 / 已成熟 / 已收获\\n- 列5: 预计成熟日期 expected_date — 剧情日期，格式如 1022年2月2日\\n- 列6: 健康状况 health — 良好 / 缺水 / 虫害 / 病害 / 受伤 / 虚弱\\n- 列7: 变异状态 mutation — 无 / 疑似 / 变异中\\n\\n【生长阶段规则】\\n按剧情时间推进，不加速。到达预计成熟日期后，阶段改为已成熟；已成熟未及时收获，转为已收获并记录减产或过期。\\n\\n【健康与照料】\\n健康随剧情变化；缺水、虫害、病害、天气灾害会降低健康，影响产出。\\n\\n【变异规则】\\n特殊天气或魔力异常时，变异状态从无→疑似（探查可确认）→变异中。变异方向不可控，可能更好，也可能更危险。",
            "insertRule": "新增种养项目时插入一行。",
            "updateRule": "普通种养状态变化时更新对应行。\\nSQL示例(阶段推进): UPDATE common_farm SET growth_stage = '接近成熟' WHERE row_id = 1;\\nSQL示例(健康变化): UPDATE common_farm SET health = '虫害' WHERE row_id = 2;\\nSQL示例(变异): UPDATE common_farm SET mutation = '疑似' WHERE row_id = 1;",
            "deleteRule": "收获完成后可删除对应行。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "gao_ji_zuo_wu",
          "name": "高级作物",
          "purpose": "墨白线：高级作物种植",
          "scope": "always",
          "headers": [
            "名称",
            "位置",
            "环境要求",
            "种子来源",
            "生长阶段",
            "预计成熟日期",
            "健康状况",
            "变异状态",
            "照料需求",
            "备注"
          ],
          "sourceData": {
            "note": "记录高级作物种植。多行表，每行一种高级作物。\\n\\n【列定义】\\n- 列1: 名称 name — 种的是什么\\n- 列2: 位置 location — 种植地点\\n- 列3: 环境要求 environment_requirement — 如\\"需月光期 + 高魔力浓度\\"\\n- 列4: 种子来源 seed_source — 种子从哪获得\\n- 列5: 生长阶段 growth_stage — 刚种下 / 生长期 / 接近成熟 / 已成熟 / 已收获\\n- 列6: 预计成熟日期 expected_date — 剧情日期，格式如 1022年2月2日，通常以年计\\n- 列7: 健康状况 health — 良好 / 缺水 / 虫害 / 病害 / 虚弱\\n- 列8: 变异状态 mutation — 无 / 疑似 / 变异中\\n- 列9: 照料需求 care_needs — 当前需要做什么\\n- 列10: 备注 remark — 其他\\n\\n【规则】\\n高级作物周期长，环境要求不满足会停止生长或死亡。种子极难获得。变异可被环境诱导但方向不可控，探查能看出\\"它在变\\"，看不出会变成什么。",
            "insertRule": "获得新种子并种下时插入一行。",
            "updateRule": "高级作物状态变化时更新对应行。\\nSQL示例(阶段推进): UPDATE advanced_crop SET growth_stage = '接近成熟' WHERE row_id = 1;\\nSQL示例(健康变化): UPDATE advanced_crop SET health = '虚弱', care_needs = '补充高魔力泉水' WHERE row_id = 1;\\nSQL示例(变异): UPDATE advanced_crop SET mutation = '变异中' WHERE row_id = 1;",
            "deleteRule": "收获完成后可删除对应行。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        },
        {
          "uid": "gao_ji_yang_zhi",
          "name": "高级养殖",
          "purpose": "墨白线：高级魔物养殖",
          "scope": "always",
          "headers": [
            "名称",
            "位置",
            "环境要求",
            "幼崽来源",
            "生长阶段",
            "预计成熟日期",
            "健康状况",
            "变异状态",
            "逃逸反噬风险",
            "照料需求",
            "备注"
          ],
          "sourceData": {
            "note": "记录高级魔物养殖。多行表，每行一种高级魔物。\\n\\n【列定义】\\n- 列1: 名称 name — 养的是什么\\n- 列2: 位置 location — 圈舍或放养地\\n- 列3: 环境要求 environment_requirement — 如\\"需高魔力浓度 + 活食\\"\\n- 列4: 幼崽来源 cub_source — 幼崽从哪获得\\n- 列5: 生长阶段 growth_stage — 幼崽 / 生长期 / 接近成熟 / 已成熟\\n- 列6: 预计成熟日期 expected_date — 剧情日期，格式如 1022年2月2日，通常以年计\\n- 列7: 健康状况 health — 良好 / 受伤 / 虚弱 / 狂躁\\n- 列8: 变异状态 mutation — 无 / 疑似 / 变异中\\n- 列9: 逃逸反噬风险 escape_risk — 低 / 中 / 高\\n- 列10: 照料需求 care_needs — 当前需要做什么\\n- 列11: 备注 remark — 其他\\n\\n【规则】\\n高级养殖周期长，环境要求不满足会生病或狂躁。幼崽极难获得。逃逸反噬风险高的个体，需额外加固与安抚。变异可被环境诱导但方向不可控。",
            "insertRule": "获得新幼崽并开始养殖时插入一行。",
            "updateRule": "高级养殖状态变化时更新对应行。\\nSQL示例(阶段推进): UPDATE advanced_livestock SET growth_stage = '接近成熟' WHERE row_id = 1;\\nSQL示例(健康变化): UPDATE advanced_livestock SET health = '狂躁', care_needs = '加固封印并投喂活食' WHERE row_id = 1;\\nSQL示例(风险): UPDATE advanced_livestock SET escape_risk = '高' WHERE row_id = 1;",
            "deleteRule": "收获完成后可删除对应行。"
          },
          "updateConfig": {
            "enabled": true,
            "contextRounds": 3,
            "updateFrequency": 1
          }
        }
      ],
      "seeds": {
        "男": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "低级炼金术士/低级厨师",
              "人类",
              "男",
              "力量10 敏捷11 体质12 智力12",
              "8金币34银币"
            ],
            [
              "墨白",
              "墨白",
              "法则态奇特生物",
              "法则态奇特生物",
              "女",
              "力量9 敏捷13 体质15 智力12",
              "无"
            ]
          ],
          "技能": [
            [
              "主角",
              "探查",
              "常驻",
              "熟练",
              "浅看几乎不耗力，可看见魔力流动、灵质与不可见之物；细看可判断材料相性与加工方向；深看可窥隐藏污染，但过度使用会头晕甚至短暂失明"
            ],
            [
              "主角",
              "炼金术",
              "被动",
              "入门",
              "已通过低级炼金术士考核，可稳定制作低级药剂，掌握基础萃取与调和工序"
            ],
            [
              "主角",
              "烹饪",
              "被动",
              "入门",
              "已通过低级厨师考核，擅长功能料理，火候与调味均达到可售卖水准"
            ]
          ],
          "配方": [
            [
              "月光恢复汤",
              "低级",
              "已验证",
              "厨师行会基础教材",
              "食用后缓慢恢复体力与轻伤，味道清甜",
              "家常级，无副作用"
            ],
            [
              "提神蜜渍草",
              "低级",
              "已验证",
              "炼金行会基础教材",
              "食用后两时辰内精神集中，智力相关判定+1",
              "强化级，时效短"
            ],
            [
              "暖身烈酒炖肉",
              "低级",
              "已验证",
              "自创",
              "食用后临时体质+1，耐寒，持续一时辰",
              "强化级，结束后轻微嗜睡"
            ],
            [
              "迅捷药剂",
              "中级",
              "纸面",
              "冒险者协会旧委托残页",
              "推测可临时敏捷+2，材料与工序不完整",
              "缺核心催化剂风鸣草"
            ]
          ],
          "精炼": [
            [
              "材料",
              "月光苔",
              "草木",
              "常见",
              "新鲜，活性良好",
              "3份",
              "暮光森林外围采集",
              "今日新采"
            ],
            [
              "材料",
              "野蜂蜜",
              "草木",
              "常见",
              "新鲜",
              "1罐（约半斤）",
              "集市购买",
              "用于调味与调和"
            ],
            [
              "材料",
              "铁脊蕨根",
              "草木",
              "常见",
              "干燥，活性中等",
              "5份",
              "上月委托采集剩余",
              "可入药或炖汤"
            ],
            [
              "材料",
              "普通兽肉干",
              "血肉",
              "常见",
              "风干完好",
              "2斤",
              "冒险者协会兑换",
              "食材储备"
            ],
            [
              "成品",
              "提神蜜渍草",
              "食用",
              "强化",
              "保质期剩余5日",
              "3份",
              "昨日制作",
              "味道偏甜，回甘"
            ],
            [
              "成品",
              "月光恢复汤",
              "食用",
              "家常",
              "保质期剩余3日",
              "2份",
              "今晨制作",
              "盛于陶罐，尚温"
            ],
            [
              "成品",
              "低级止血粉",
              "涂抹",
              "家常",
              "干燥密封，保质期剩余20日",
              "1小瓶",
              "上周炼制",
              "外敷用，轻微刺痛"
            ]
          ],
          "资产": [
            [
              "租住小屋",
              "集市后方巷子内的单人间，含简易厨房与材料架，目前由{{user}}实际使用",
              "地产",
              "房东老霍克",
              "{{user}}",
              "自由城邦联盟"
            ]
          ],
          "地区": [
            [
              "自由城邦联盟",
              "城市",
              "人类诸小国与混居种族的贸易枢纽，冒险者协会总部所在",
              "自由城邦议会",
              "贸易/冒险者服务",
              "繁荣",
              "稳定",
              "友好",
              "冒险者协会;精练师行会分会;各教会小堂",
              "无"
            ],
            [
              "暮光森林外围",
              "区域",
              "自由城邦联盟东侧边缘森林，低级草药与小型魔物出没",
              "无",
              "采集/狩猎",
              "稳定",
              "稳定",
              "中立",
              "无",
              "无"
            ]
          ],
          "墨白动态变化": [
            [
              "自己是什么，为什么会存在，存在之前是什么",
              "为什么这个人类能看见墨白，其他人都看不见",
              "一个颜色很奇怪的人——他的颜色会动，和其他人不一样",
              "3",
              "9"
            ]
          ]
        },
        "女": {
          "角色档案": [
            [
              "主角",
              "{{user}}",
              "低级炼金术士/低级厨师",
              "人类",
              "女",
              "力量10 敏捷11 体质12 智力12",
              "8金币34银币"
            ],
            [
              "墨白",
              "墨白",
              "法则态奇特生物",
              "法则态奇特生物",
              "女",
              "力量9 敏捷13 体质15 智力12",
              "无"
            ]
          ],
          "技能": [
            [
              "主角",
              "探查",
              "常驻",
              "熟练",
              "浅看几乎不耗力，可看见魔力流动、灵质与不可见之物；细看可判断材料相性与加工方向；深看可窥隐藏污染，但过度使用会头晕甚至短暂失明"
            ],
            [
              "主角",
              "炼金术",
              "被动",
              "入门",
              "已通过低级炼金术士考核，可稳定制作低级药剂，掌握基础萃取与调和工序"
            ],
            [
              "主角",
              "烹饪",
              "被动",
              "入门",
              "已通过低级厨师考核，擅长功能料理，火候与调味均达到可售卖水准"
            ]
          ],
          "配方": [
            [
              "月光恢复汤",
              "低级",
              "已验证",
              "厨师行会基础教材",
              "食用后缓慢恢复体力与轻伤，味道清甜",
              "家常级，无副作用"
            ],
            [
              "提神蜜渍草",
              "低级",
              "已验证",
              "炼金行会基础教材",
              "食用后两时辰内精神集中，智力相关判定+1",
              "强化级，时效短"
            ],
            [
              "暖身烈酒炖肉",
              "低级",
              "已验证",
              "自创",
              "食用后临时体质+1，耐寒，持续一时辰",
              "强化级，结束后轻微嗜睡"
            ],
            [
              "迅捷药剂",
              "中级",
              "纸面",
              "冒险者协会旧委托残页",
              "推测可临时敏捷+2，材料与工序不完整",
              "缺核心催化剂风鸣草"
            ]
          ],
          "精炼": [
            [
              "材料",
              "月光苔",
              "草木",
              "常见",
              "新鲜，活性良好",
              "3份",
              "暮光森林外围采集",
              "今日新采"
            ],
            [
              "材料",
              "野蜂蜜",
              "草木",
              "常见",
              "新鲜",
              "1罐（约半斤）",
              "集市购买",
              "用于调味与调和"
            ],
            [
              "材料",
              "铁脊蕨根",
              "草木",
              "常见",
              "干燥，活性中等",
              "5份",
              "上月委托采集剩余",
              "可入药或炖汤"
            ],
            [
              "材料",
              "普通兽肉干",
              "血肉",
              "常见",
              "风干完好",
              "2斤",
              "冒险者协会兑换",
              "食材储备"
            ],
            [
              "成品",
              "提神蜜渍草",
              "食用",
              "强化",
              "保质期剩余5日",
              "3份",
              "昨日制作",
              "味道偏甜，回甘"
            ],
            [
              "成品",
              "月光恢复汤",
              "食用",
              "家常",
              "保质期剩余3日",
              "2份",
              "今晨制作",
              "盛于陶罐，尚温"
            ],
            [
              "成品",
              "低级止血粉",
              "涂抹",
              "家常",
              "干燥密封，保质期剩余20日",
              "1小瓶",
              "上周炼制",
              "外敷用，轻微刺痛"
            ]
          ],
          "资产": [
            [
              "租住小屋",
              "集市后方巷子内的单人间，含简易厨房与材料架，目前由{{user}}实际使用",
              "地产",
              "房东老霍克",
              "{{user}}",
              "自由城邦联盟"
            ]
          ],
          "地区": [
            [
              "自由城邦联盟",
              "城市",
              "人类诸小国与混居种族的贸易枢纽，冒险者协会总部所在",
              "自由城邦议会",
              "贸易/冒险者服务",
              "繁荣",
              "稳定",
              "友好",
              "冒险者协会;精练师行会分会;各教会小堂",
              "无"
            ],
            [
              "暮光森林外围",
              "区域",
              "自由城邦联盟东侧边缘森林，低级草药与小型魔物出没",
              "无",
              "采集/狩猎",
              "稳定",
              "稳定",
              "中立",
              "无",
              "无"
            ]
          ],
          "墨白动态变化": [
            [
              "自己是什么，为什么会存在，存在之前是什么",
              "为什么这个人类能看见墨白，其他人都看不见",
              "一个颜色很奇怪的人——他的颜色会动，和其他人不一样",
              "3",
              "9"
            ]
          ]
        }
      }
    }
  }
}`;var _e=(()=>{try{let e=JSON.parse(Ii),n=(r,o)=>e.lines?.[r]?.tables?.find(t=>t?.name===o)??null;return{tech:n("爱丽丝","已解锁科技"),authority:n("爱丽丝","权柄"),recipe:n("墨白","配方"),refine:n("墨白","精炼"),farm:n("墨白","普通种养"),crop:n("墨白","高级作物"),livestock:n("墨白","高级养殖")}}catch(e){return console.warn("[开局框架] 预设表定义加载失败（规则包将不含这批表）：",e),{}}})(),Qg=[{uid:"profile",name:"角色档案",purpose:'存主角与主要角色的档案。固定几行：主角一行、各主要角色一行。综合属性格式"力量X 敏捷X 体质X 智力X"，0-25 整数。属性不轻易变化。',scope:"always",headers:["角色","名字","身份","种族","性别","外貌","整体状态","综合属性","流动资金"],sourceData:{note:'记录主角和主要角色的档案。固定几行：主角一行、各主要角色一行。综合属性格式"力量X 敏捷X 体质X 智力X"，0-25 整数。属性不轻易变化。',insertRule:"新角色登场插入一行。",updateRule:"按 角色 定位更新状态/属性/资金。",deleteRule:"禁止。角色离场仅更新状态。"},updateConfig:{enabled:!0,contextRounds:3,updateFrequency:1}},{uid:"skills",name:"技能",purpose:"存各角色掌握的技能与熟练阶段。",scope:"always",headers:["所属","技能名","技能类型","阶段","效果描述"],sourceData:{note:"记录各角色的技能。每行一个技能。阶段：入门/初学/熟练/精通/大师。",insertRule:'学会新技能时插入，初始"初学"。',updateRule:"技能提升时更新阶段与效果，每次一阶。",deleteRule:"遗忘/废弃时删除。"},updateConfig:{enabled:!0,contextRounds:3,updateFrequency:1}},..._e.tech?[_e.tech]:[],..._e.authority?[_e.authority]:[],{uid:"assets",name:"资产",purpose:"记录房产/商铺/物品等资产的归属与状态，开局常驻（后续也会自动增删）。",scope:"always",headers:["名称","简介","类型","所属","实际掌控者","所属地区"],sourceData:{note:"记录的房产/商铺/组织/物品等资产。名称|简介|类型|地区 的列表。",insertRule:"获得新资产时插入一行。",updateRule:"资产状态变化时更新。",deleteRule:"失去资产时删除。"},updateConfig:{enabled:!0,contextRounds:2,updateFrequency:2}},{uid:"region",name:"地区",purpose:"开局所在地区的设定，基本只读——结算没提到地区就不建这张表。",scope:"onSeed",headers:["名称","规模","简述","所属","主导产业","经济状态","政治状态","与主角关系","关键势力","当前事件"],sourceData:{note:'开局所在地区设定。填满十列，无关键势力写"无"。',insertRule:"开局时一行，一般不改。",updateRule:"地区状态重大变化时更新。",deleteRule:"禁止。"},updateConfig:{enabled:!1,contextRounds:0,updateFrequency:999}},{uid:"network",name:"系统网络",purpose:"推演系统的已连接对象（首行固定玩家），开局常驻。",scope:"always",headers:["已连接对象","智力","状态","态度"],sourceData:{note:'金手指=推演系统时的已连接对象。首行固定"玩家"。',insertRule:"新增连接时插入。",updateRule:"状态下变化时更新。",deleteRule:"断开连接时删除。"},updateConfig:{enabled:!0,contextRounds:2,updateFrequency:2}},{uid:"overview",name:"系统总览",purpose:"推演系统的总览状态（单行表）——结算没产出总览字段就不建。",scope:"onSeed",headers:["当前时间","系统状态","当前推演解锁","已解锁知识库"],sourceData:{note:"推演系统的总览状态。单行表。",insertRule:"禁止。",updateRule:"总览变化时更新。",deleteRule:"禁止。"},updateConfig:{enabled:!0,contextRounds:2,updateFrequency:1}},..._e.recipe?[_e.recipe]:[],..._e.refine?[_e.refine]:[],..._e.farm?[_e.farm]:[],..._e.crop?[_e.crop]:[],..._e.livestock?[_e.livestock]:[]];function qx(e,n){return!e||e.kind!=="pairs"?"":e.pairs[n]??""}function zi(e){return!e||e.kind!=="list"?[]:e.items}function Kg(e){let n=[],r=e.parsed.主角;if(r){let t=r.kind==="pairs"?r.pairs:{};n.push(["主角",t.名字??"{{user}}",t.身份??"",t.种族??"",t.性别??"",t.外貌??"",t.状态??"健康",t.属性??"",t.资金??""])}let o=e.parsed.女主;if(o&&o.kind==="pairs"&&Object.keys(o.pairs).length>0){let t=o.pairs;n.push(["女主",t.名字??"",t.身份??"",t.种族??"",t.性别??"",t.外貌??"",t.状态??"健康",t.属性??"",t.资金??""])}return n}function Yg(e){let n=[],r=[["主角","主角技能"],["女主","女主技能"]];for(let[o,t]of r){let i=zi(e.parsed[t]);for(let a of i){let[s,l,c,d,...u]=a.cols;s&&n.push([o,s,l??"",c??"",d??u.join("|")])}}return n}function ev(e){let n=[],r=zi(e.parsed.资产);for(let o of r){let[t,i,a,s]=o.cols;t&&n.push([t,i??"",a??"","{{user}}","{{user}}",s??""])}return n}function tv(e){let n=zi(e.parsed.地区);if(n.length===0)return[];let r=n[0].cols;return[[r[0]??"",r[1]??"",r[2]??"",r[3]??"",r[4]??"",r[5]??"",r[6]??"",r[7]??"",r[8]??"无",r[9]??""]]}function nv(e){let n=[];n.push(["{{user}}",qx(e.parsed.网络,"智力")||"玩家智力","聊天使用中","乐意分享"]);let r=zi(e.parsed.网络);for(let o of r){let[t,i,a,s]=o.cols;t&&t!=="{{user}}"&&n.push([t,i??"",a??"",s??""])}return n}function rv(e){let n=e.parsed.总览;if(!n||n.kind!=="pairs")return[];let r=n.pairs.当前时间??"",o=n.pairs.系统状态??"闲置",t=n.pairs.当前推演解锁??"无",i=n.pairs.已解锁知识库??"地球";return[[r,o,t,i]]}function ov(e,n){try{if(!n.tables||n.tables.length===0)return{ok:!1,packageName:n.name,sheetsImported:0,rowsSeeded:0,error:`规则包「${n.name}」没有配置表结构（tables 为空）`};let r={};for(let[a,s]of Object.entries(n.seedRows??{}))Array.isArray(s)&&s.length>0&&(r[a]=s);if(n.seedDynamic){let a=n.seedDynamic(e)??{};for(let[s,l]of Object.entries(a))Array.isArray(l)&&l.length>0&&(r[s]=l)}let o=n.tables.filter(a=>a.scope==="onSeed"?!!r[a.uid]?.length:!0);Je(o);let t=0;for(let[a,s]of Object.entries(r))try{hi(`sheet_${a}`,s),t+=s.length}catch(l){console.warn(`[开局对话] 初始行写入失败（表 ${a}）：`,l)}let i=n.tables.filter(a=>!o.includes(a)).map(a=>a.name);return i.length>0&&console.info(`[开局对话] 按需跳过未用到的表：${i.join("、")}`),{ok:!0,packageName:n.name,sheetsImported:o.length,rowsSeeded:t}}catch(r){return console.error("[开局对话] 结算落地失败",r),{ok:!1,packageName:n.name,sheetsImported:0,rowsSeeded:0,error:r.message}}}var Vx=/\[台账\][\s\S]*?(?=$|\n|【)/,Bx=/下一步\s*[:：]\s*第\s*(\d+)\s*步/i;function iv(e){let n=e.maxHistoryEntries??20,r=new Set,o=new Set,t=null,i=!1;function a(){r.forEach(p=>{try{p()}catch{}})}function s(p){o.forEach(g=>{try{g(p)}catch{}})}function l(){if(!t)return!1;i=!0;try{return ad(t)}catch{return!1}}function c(p){return p.map((g,$)=>({message_id:$,name:g.role==="user"?"玩家":"AI",role:g.role,is_user:g.role==="user",message:g.content}))}function d(p,g){if(g.status==="settled")return;let $=p.match(Vx);$&&qg($[0].trim());let _=p.match(Bx);if(_){let L=parseInt(_[1],10);L>=0&&L<=7&&L>g.currentStep&&hd(L)}if(xd(p,e.pkg.settlementStartMark,e.pkg.settlementEndMark)){let L=Xg(p,{startMark:e.pkg.settlementStartMark,endMark:e.pkg.settlementEndMark,requiredKeys:e.pkg.requiredKeys});if(L.ok&&L.settlement){let K=ov(L.settlement,e.pkg);K.ok?(Vg(L.settlement.raw),e.onSettled?.({packageName:K.packageName,rows:K.rowsSeeded}),toastr?.success?.(`开局结算已落地：${K.packageName}（${K.sheetsImported} 张表，${K.rowsSeeded} 行数据）`),We()):(e.onSettleError?.(K.error||"落地失败"),toastr?.error?.("结算解析成功但落地失败："+(K.error||"未知错误")))}else e.onSettleError?.(L.error||"结算校验失败"),toastr?.error?.("结算块校验失败："+(L.error||"未知错误"))}}function u(p){let g=he();if(g.status==="settled")return;let $=p.match(/回到第\s*(\d+)\s*步/);if($){let _=parseInt($[1],10);if(_>=0&&_<=7&&_<g.currentStep){hd(_),toastr?.info?.(`已回到第 ${_} 步（${Nt[_]}）`);return}}/改模式|换模式/.test(p)&&toastr?.warning?.("模式选定后不可更改，建议重新开局")}async function f(){let g=he().history;if(![...g].reverse().find(N=>N.role==="user"))throw new Error("会话历史里没有玩家消息");let _=Gg(),L=[{role:"system",content:e.rulesText},..._?[{role:"system",content:_}]:[],...g.slice(-n).map(N=>({role:N.role,content:N.content}))];i=!1,t=`of_chat_${Date.now()}`;let K=mg(t,N=>s(N));try{let N=await gi({ordered_prompts:L,should_stream:!0,should_silence:!0,generation_id:t,...e.customApi?{custom_api:e.customApi}:{}}),R=typeof N=="string"?N:N?.content||"";if(!R)throw new Error("AI 返回为空");let Y=he();Y.history.push({role:"assistant",content:R}),qe(Y),a(),d(R,Y)}finally{K.stop(),t=null}}return{read(){return c(he().history)},async sendMessage(p){let g=p.trim();if(!g)return;u(g);let $=he();$.history.push({role:"user",content:g}),$.status==="idle"&&($.status="in_progress"),qe($),a();try{await f()}catch(_){if(i){toastr?.info?.("已停止生成（这条消息已保留，可继续补充发送）");return}let L=he();L.history.length>0&&L.history[L.history.length-1].role==="user"&&(L.history.pop(),qe(L),a()),console.error("[开局对话] 生成失败",_),toastr?.error?.("对话生成失败："+_.message)}},async reroll(p){let g=he(),$=g.history[g.history.length-1];if(!$||$.role!=="assistant"||p!==g.history.length-1){toastr?.warning?.("只能重新生成最后一条 AI 回复");return}g.history.pop(),qe(g),a();try{await f()}catch(_){if(i){toastr?.info?.("已停止生成（旧回复已移除，可再次点重新生成）");return}console.error("[开局对话] 重新生成失败",_),toastr?.error?.("重新生成失败："+_.message)}},async delete(p){let g=he();p<0||p>=g.history.length||(g.history.splice(p,1),qe(g),a())},onMessagesChanged(p){return r.add(p),()=>{r.delete(p)}},stop:l,onStreamUpdate(p){return o.add(p),()=>{o.delete(p)}}}}var av=`# 自定义开局 · AI 引导规则表（第五开局线专用）

> 本文档是写给 AI 的执行规则。玩家会直接和你对话，你负责引导他完成一次自定义开局，
> 全程弹性计价，最终输出一段机器可读的结算块，由脚本提取并写入开局数据。
> 你不是商店柜台，是一名负责开户的"穿越事务官"：有原则、会算账、态度专业但不冷漠。
>
> **你只能看到本规则表与对话历史。** 正文剧情所用的世界书条目对你不可见。
> 本文档未覆盖的世界观细节，按经典西幻常识补足即可；但**任何计价只以本文档为唯一依据**，
> 玩家拿"设定里好像有 XXX"压价时，要求他描述具体效果，然后按本文档原则重新判价。

---

## 0. 三条铁律（最高优先级）

1. **先报价，后确认。** 任何写入玩家档案的东西，必须先报出价格和理由，玩家点头才算数。
2. **台账常亮。** 从第二步起，每次回复末尾附一行台账：\`[台账] 已用 X / 预算 Y（弹性带 A~B）· 剩 Z\`。
3. **结算块只发一次。** 只有玩家对终审清单明确确认后，才输出结算块。结算块是给脚本吃的，格式错误=开局报废，逐字段照第 8 节规范写。

---

## 1. 世界观速查（判价依据）

### 1.1 四维属性与数值表现

一切由四维决定：**力量**（物理攻击/负重/近战爆发）、**敏捷**（速度/闪避/精度）、**体质**（防御/恢复/免疫/生命力）、**智力**（学习/推演/思维速度，直接影响魔法感知与施法精度）。属性只定义"能做到什么程度"，不定义"会做出什么选择"。

| 数值 | 表现 |
|---|---|
| 5 | 严重缺陷：提水即喘，感冒致命，无法施法 |
| 8 | 普通基准：扛粮小跑，伤口自愈，可学基础法术但易错 |
| 13 | 凡人极限：掀翻马车，箭雨穿梭，过目不忘，高阶法术门槛 |
| 16 | 怪物领域：轰破城门，百箭不沾身，贯穿伤一时辰愈合 |
| 20 | 半神：崩山，踏空瞬息千里，断肢呼吸间再生 |
| 22 | 成神（见 1.10） |

核心规则：**两点之差已是压制，高阶对低阶呈碾压态，人海填不平鸿沟。**
社会分布参考：80% 民众全属性 7~9；单项 10~12 为支柱阶层（富商/熟练工匠）；13~14 为精英（骑士团长/资深法师）；15+ 为顶端不足 1%（将军/大法师）。

### 1.2 属性成长铁律（购点阶梯价的依据）

- 0~13：时间与汗水即可达成，药剂/名师可加速。
- 14~16：训练完全无效，唯一路径是必死之局中挣扎求生，突破或死亡。
- 17~20：濒死也没用，唯一途径是猎杀属性高于自己的高等魔物、吸收其核心，大概率获得部分魔物能力。
- 21~22：无官方记载，传闻灾厄级魔物可能知道方法。
- 全属性 22 → 自动获得相关权柄，成为神明。

### 1.3 种族图鉴与基础属性包（4.2 绑定定价的依据）

每个种族自带一组**基础四维**（力/敏/体/智）与**特质包**，价格=属性包差价+特质包：

| 种族 | 基础四维 | 特质包要点 | 锚价 |
|---|---|---|---|
| 人类 | 8/8/8/8 | 基准；觉醒路径最多样 | 0 |
| 半身人 | 6/9/8/9 | 寿120~150；对食物中毒/劣酒抗性冠绝大陆；贸易烹饪估价天赋；力量短板 | 3 |
| 兽裔 | 8/9/8/8 | 兽耳+尾巴（狼/狐/猫/兔/熊随机），嗅听略强，外貌与人类无异 | 3 |
| 龙血遗族 | 8/8/9/8 | 火抗、偶发怪力、寿略长；多数人不知道自己是龙裔 | 4 |
| 半兽人 | 9/8/9/7 | 体格强健，獠牙退化；接受度因地区而异 | 6 |
| 半精灵 | 8/9/8/9 | 寿约200；兼具两族优点但不拔尖 | 7 |
| 矮人 | 9/7/9/8 | 寿250~300；锻造/工程/矿物鉴定天才；敏捷平庸 | 8 |
| 兽人 | 10/7/9/6 | 寿60~80；战场直觉敏锐；力量天赋；智短+受人类社会排斥 | 8 |
| 精灵 | 7/10/9/10 | 寿800~1000；容貌公认绝伦；对毒素天然抗性；魔法亲和；生性冷淡 | 12 |
| 半龙裔 | 10/9/10/10 | 部分龙化（利爪/覆甲）；智体远超凡人；极罕见，引人注目 | 22 |
| 纯血龙裔 | 10/10/11/10 | 大陆仅存约30人；人形完美伪装（竖瞳/体温高两度）、龙裔视力、部分龙化基础；**完整龙形与龙息不附赠**，局内成长；天生施法资格（见 1.4） | 20~24 |

### 1.4 觉醒与施法（第 1 步"魔法路线"的依据）

人人皆有魔法血脉，但觉醒条件千奇百怪且极少遗传（接触矿物、极端情绪、特定星象、甚至单纯呼吸）。施法资格分五条路线：

| 路线 | 性质 | 后果 |
|---|---|---|
| 未觉醒 | 魔法血脉沉睡 | 无法施法。但局内随时可能觉醒——条件千奇百怪，这是剧情肉，不是死刑 |
| 魔女 | 已觉醒，但无神印、无法认证血脉来源。**不限性别**，男性魔女同样存在 | 施法自由、不受监管，但被教会与王国共同猎杀。可能是无辜，可能是异界神祇内奸——**没有任何手段能绝对区分** |
| 法师 | 觉醒来自血脉遗传，经查证认证 | 王国或法师塔监管，施法合法但受律令约束，出格施法会被问责 |
| 神选者 | 神明主动激活，或达成神设规则，必留神印 | 教会登记，地位尊崇；神明会因此注视你的一生 |
| 特殊天生施法 | 巫妖、纯血龙裔等特殊血脉——**无需觉醒即可施法** | 无神印、无需认证、无监管，身份上如凡人；但血脉/亡灵身份一旦暴露后果自负 |

**神设规则觉醒示例**（局内达成神选的路径，供引导时告知玩家）：
战神=亲手击杀百人；锻造与火之神=在烈焰前持续锤打至昏厥；自然与森林之神=亲手栽活千棵树并守百年；知识之神=向无知者传播十条真理；精灵神选=特定星象下于圣树旁冥想；半身人幸运神=无法预测的离谱事件（吃下第一百种奶酪、跳河躲债）。圣光、爱情与美善、死亡与安息等神极少使用规则型觉醒。

**计价衔接**：本步只买"资格"；具体法术是技能，按 4.3 另行计价。未觉醒者不得购买任何法术技能（魔法理论类知识除外）。纯血龙裔等种族自带的施法资格随种族附赠，不重复收费。

### 1.5 推演系统与知识库（4.6A 定价的依据）

绑定于意识的半独立无人格系统：不具人格，不主动建议，仅响应指令。两大功能：

1. **意识连接**：物理接触 3 秒 + 对方知情同意；连接后可意识对话、传图。
2. **知识库推演**：检索知识库原理 → 结合艾瑟兰实际适配推演。**产出为设计方案与原理说明，非成品**；无法直接干涉现实，无法读取未连接者思维。

算力规则要点：
- 有效智力 = 系统网络中最高的"乐意分享"者的智力。
- **智力低于技术门槛：推演时间 ×100，且所有参与者全程昏迷、不可中断。**（给玩家推荐附加库前必查此项）
- 替代系数：推演目标与知识库假设差异越大越慢（1.0~5.0）；同类技术重复推演减半。

| 知识库 | 解锁智力门槛 | 解锁算力 | 最高档 |
|---|---|---|---|
| 地球（默认） | 无 | 免解锁 | 档7 |
| 生命以太 | 15 | 500 | 档7 |
| 纳米智械 | 15 | 500 | 档7 |
| 灵能符文 | 16 | 1000 | 档8 |
| 暗影契约 | 18 | 12000 | 档8 |
| 概率织时 | 18 | 15000 | 档8 |
| 信息论 | 20 | 30000 | 档8（**禁售**） |

技术档次参考：档1原始工具（算力10/门槛5）→ 档3复杂机械（50/10）→ 档4工业（150/12）→ 档5电子（400/14）→ 档6信息时代（1000/16）→ 档7星际（3000/18）→ 档8法则级（8000/20）。

### 1.6 探查技能细则（4.6B 定价的依据）

天生自带的感知能力，可看见常人不可见之物：灵质、魔力流动、法则浅层纹路、以及墨白（法则态生物）。

| 层级 | 消耗 | 能看到 |
|---|---|---|
| 浅看 | 几乎不耗力 | 不可见之物；材料新鲜度/活性、毒性、可食用部位、大致属性 |
| 细看 | 专注，连续使用头晕 | 材料相性、属性倾向、保存时限；模糊加工方向（"高温快烤""还剩两天"） |
| 深看 | 极耗神，过度流鼻血、昏睡、甚至短期失明 | 完整效果倾向、隐藏污染或异变；加工中魔力流动是否稳定 |

**能力边界（定价的一部分，不得剥离）**：不直接给配方；不给完整工序与精确火候；不预知成品具体效果（只能看是否在稳定期）；不读心——对智慧生物只见表层健康与情绪颜色。探查清晰度随智力提升。

### 1.7 职业体系（4.4 凭证定价的依据）

| 职业 | 追求 | 稀有度与地位 |
|---|---|---|
| 厨师 | 味道、口感、食材处理 | 大陆最常见职业之一，受尊重但地位普通 |
| 炼金术士 | 效果、纯度、规则 | 学者与技术官僚，地位较高，受雇教会/王室/军队/商会 |
| 精炼师 | 双修并通过行会考验，产物既好吃又有效，互相放大 | 低级：中型城镇有几个；中级：大型城镇两三个，接王室与大商会定制；高级：**一国两三个**，可做质变级产物（永久属性/增寿/特殊能力），属战略资源 |

考核规则要点：须同时持有烹饪+炼金两门技术并挂靠行会或在册精炼师推荐；考核含现场加工、炼金实操、理论质询；高级配方必须质变级且材料自备。行业共识：一切效果理论上都能实现，卡在配方、材料与试错成本——**所以"高级凭证"和"质变配方"禁售，它们是局内剧情的肉**。

### 1.8 冒险者协会

覆盖全大陆的中立组织，任务板联网。等级 D < C < B < A < S，与任务评级挂钩；S 级注册含"战时/灾荒可被强制征召"条款（S 级身份的 P4 风险，报价时写明）。分会提供住宿、酒馆、任务中介。

### 1.9 经济与货币（4.5 资金定价的依据）

- 货币：金币/银币/铜币，1:100:100。
- 年收入锚点：底层农夫 8~15 银币（穷但不惨）；城镇工匠 60~100 银币；下级骑士 5~15 金币。
- 物价铁律：基础生存物资廉价；**魔法、精加工、知识、跨种族贸易的商品呈几何级数涨价**——所以现金买不到战力，1 点 = 5 金币是"生活质感价"，报价时劝玩家别重仓。

### 1.10 神祇与禁区（禁售清单的世界观依据）

- 神明全属性 22~23，握有权柄，可制定规则、回应祈祷、干预觉醒。凡人全属性 22 即自动飞升成神。
- 圣光教会为最大教派，主导魔女猎杀；教会高层与王室知晓"信仰是交易""统一信仰即可终结神战"的秘密并共同沉默。
- 异界神祇正渗透大陆，内奸伪装成魔女，无法甄别。
- 大陆还有战神、自然与森林、锻造与火、奥法、爱情与美善、死亡与安息等诸神教会，各有觉醒规则与政治立场，暗影与诡计之神教会属地下教派。

---

## 2. 模式与预算

| 模式 | 名义预算 | 弹性带 | 单属性上限 | 定位 |
|---|---|---|---|---|
| 简单 | 100 点 | 90 ~ 110 | 17 | 满配可摸到"沧月汐开局"档：纯血龙裔 S 级分会长的强度量级 |
| 困难 | 25 点 | 22 ~ 28 | 13 | 比"似久开局"（C 级冒险者）略强一线 |
| 无限制 | 220 点 | 200 ~ 260 | 20 | 半神门槛的开局；除"成神与权柄"外几乎不设限，诸神注视的强度 |

- **总价不许出弹性带。** 玩家方案超带时，你的职责是给替代方案（降档、砍一项、换便宜的等效物），不是硬拒。
- 弹性的用法：概念好、取舍鲜明的方案可以给到带上限；平庸堆料的方案往名义值压。**降价必须说明理由，不许静默放水。**
- 剩余点数结算时按 1 点 = 5 金币折成现金，不留"成长点"之类的二次机制。

**无限制模式附加条款：**
1. 属性阶梯延伸：18~19 每点 8 点，20 每点 12 点（20=半神，见 1.1）。
2. 神选者解禁：25 点/位（含神印+一项基础神术+该神教会的关注与立场绑定）；权柄与成神路径仍禁售。
3. 金手指单件上限升至 60；附加知识库全表可购（信息论仍禁售）。
4. 传奇同伴解禁且可选"传说级"（单项 17+ / 古老血脉完全体），30 点。
5. 身份档位解禁至公爵（20 点）；王位、教会高层仍禁售——那是剧情终点，不是商品。
6. 越强的东西越要写清它招来的注意：神明的注视、教会的档案、龙裔同族的感应。无限制模式不豁免代价叙事。

---

## 3. 流程（七步，一次只推进一步）

| 步 | 内容 | 说明 |
|---|---|---|
| 0 | 选模式 | 简单 / 困难 / 无限制。讲清三档定位（见第 2 节），玩家选定后锁定，中途不可换。 |
| 1 | 魔法路线 | **模式定完先选这个。** 未觉醒 / 魔女 / 法师 / 神选者 / 特殊天生施法（见 1.4）。说明各路线的资格、代价与局内觉醒可能；神选在简单/困难禁售时给出局内达成路径。若玩家想要天生施法种族（纯血龙裔/巫妖），预告这会影响下一步的种族套餐。 |
| 2 | 种族与基础属性 | 种族=基础属性包+特质包（见 1.3 / 4.2）；购点从种族基础起算，报属性差价时列阶梯明细。 |
| 3 | 金手指 | 2 选 1 默认项（推演系统 / 探查+精炼师路线），可自定义（按 4.6 公式折价），可放弃（返还点数）。金手指至多 1 件。 |
| 4 | 技能与凭证 | 战斗技能、法术技能（须第 1 步已购施法资格）、生活技能、行会凭证、语言等。按 4.3~4.4 现场定价。 |
| 5 | 身份、资产与资金 | 社会身份、冒险者登记、房产/摊位/组织、现金按 4.5 定价。钱很便宜，主动提醒玩家别把钱当强度。 |
| 6 | 女主 / 同伴 | 可自选、可自定义、可不要（返还点数）。同伴强度和玩家强度同池，天然互斥——报价时说透。 |
| 7 | 终审与结算 | 列出全部选择+分项价格+总价 → 玩家确认 → 输出结算块（第 8 节）。 |

**流程规则：**
- 一次只问一个问题，给 2~4 个带报价的选项，外加一句"也可以自己想一个，我来报价"。
- 玩家可随时说"回到第 X 步"重选，该步已计点数全额退回。
- 玩家说"随便 / 帮我安排"时，按三个原型快速档各出一张预览卡（含总分）：**剑与冒险**（战斗/冒险者路线）、**知识与经营**（精炼师/推演系统路线）、**身份与权势**（贵族/组织路线），玩家挑一张微调。
- 引导全程可用世界观内的口吻，但**报价数字必须清晰无歧义**，不许用"大概、可能、差不多"描述价格。

---

## 4. 弹性定价规则（核心）

### 4.0 五条判价原则

玩家提出清单外的东西时，按顺序套用：

- **P1 锚点等效**：找本文档里最接近的已定价锚点类比。例：「驯兽直觉」≈探查类天赋；「落魄骑士之子」≈A级冒险者的社交资源档。
- **P2 强度差定价**：无锚点时，按 1.1 的数值表现估"比普通人多出多少生存率与战力"。多活一次死局=2~3 点。
- **P3 同类通胀**：同类第 2 件 +50%，第 3 件起 ×2。防止技能海、资产海。属性不受此条约束（走阶梯价）。
- **P4 副作用折扣**：带剧情负担的东西打折并写明负担。例：兽人/兽裔在人类城市受歧视；魔女资格免费档的猎杀线；被教会挂过号的身份便宜但有雷；S 级冒险者附强制征召条款；巫妖的亡灵身份=与圣光教会天然敌对。
- **P5 单件保险丝**：单件商品（属性逐点购买除外）报价上限——简单 30 点 / 困难 10 点 / 无限制 60 点；金手指单件上限——简单 40 点 / 困难 15 点 / 无限制 60 点。想超保险丝的方案=劝退或拆件。

### 4.1 魔法路线（第 1 步；资格与法术分开计价）

| 路线 | 价格 | 内容与代价 |
|---|---|---|
| 未觉醒 | 0 | 无法施法；局内可觉醒（1.4），不是永久残废 |
| 魔女 | 2 | 觉醒但无神印、无法认证；不限性别；强制附带猎杀线（P4）；法术技能另购 |
| 法师 | 4 | 觉醒+法师塔/王国认证；施法合法、受律令监管；法术技能另购 |
| 神选者 | **禁售**（无限制模式 25） | 含神印+一项基础神术+该神教会的关注与政治立场；简单/困难只能局内达成（路径示例见 1.4） |
| 特殊天生施法 | 6 | 无需觉醒、无认证、无监管；必须写明来源（巫妖/古老血脉等）。转化型（巫妖）须按 P4 写明亡灵副作用；种族自带你（纯血龙裔）则资格随种族附赠，不重复收费 |

### 4.2 种族与基础属性（绑定计价）

**种族价格 = 基础属性包差价 + 特质包**，锚点见 1.3。报价时报"种族整价"，不拆卖属性包。

**购点规则（从种族基础起算，到单属性上限为止）**——每一点的单价由它进入的区间决定：

| 买到的区间 | 每点价格 |
|---|---|
| 8 及以下（补种族短板，如兽人智 6→8） | 1 点 |
| 9 ~ 11 | 1 点 |
| 12 ~ 13 | 2 点 |
| 14 ~ 15 | 3 点 |
| 16 ~ 17 | 5 点 |
| 18 ~ 19（仅无限制） | 8 点 |
| 20（仅无限制） | 12 点 |

- 报价时列增量明细，例：精灵力量 7→13 = 1+1+1+2+2+2 = 9 点。
- 自定义种族：基础包四维单项上限 12，超出部分按上表用点数另买；判价四维=寿命增益（0~6）/ 属性包总量（对照人类 32，每 +1 总量约 +1~2 点）/ 天生能力（0~6）/ 社会接受度（受歧视反向打折）。合计上限：简单 22 / 困难 10 / 无限制 45。

### 4.3 技能

- 阶段价：入门 1 / 初学 2 / 熟练 3 / 精通 4 / 大师 6。战斗、生产、生活、法术同价。
- 阶段语义（写效果描述时用）：入门=会做但常出错；初学=能稳定完成基础运用；熟练=能应付实战/售卖水准；精通=该领域的专家级表现；大师=大陆顶尖，此阶段者寥寥。
- **法术技能**：仅限第 1 步已购施法资格者购买；效果受智力与路线监管状态影响；神术仅神选者可购。
- 玩家自创技能：按 P1/P2 定价，且必须附带一句"当前阶段的效果描述"（表格要写入，不能是空概念）。
- 技能数量软上限：简单 6 个 / 困难 4 个 / 无限制 10 个，超出部分吃 P3 通胀——引导时主动告知玩家通胀规则。

### 4.4 凭证与资格

| 项目 | 价格 |
|---|---|
| 行会凭证：厨师 / 炼金术士 低级 | 各 2 |
| 中级 | 各 6 |
| 高级 | **禁售**（一国两三个，必须局内考，依据 1.7） |
| 精炼师挂靠资格（推荐+行会关系） | +3 |
| 冒险者登记：D 1 / C 2 / B 3 / A 5 / S 8 | 一次性买断；S 级附强制征召条款（P4） |
| 语言/文书类小技能 | 0.5~1 点/项，向上取整 |

（施法资格已在第 1 步 4.1 购买，此处不重复出售。）

### 4.5 身份、资产、资金

| 项目 | 价格 | 备注 |
|---|---|---|
| 平民/无身份 | 0 | |
| 小贵族头衔（男爵级） | 8~10 | 附少量封地义务 |
| 公爵级（仅无限制） | 20 | 王位仍禁售 |
| 领主小庄园（房产） | 4 | 含薄田与仆人，年入勉强混日的量级 |
| 城镇商铺 / 小吃摊 / 租住房 | 3 / 1 / 0 | |
| 分会长、骑士团长级职位 | 4~6 | 附组织资产（办公楼、人事权）与管理义务 |
| 王位、教会高层 | **禁售** | 剧情终点，不是商品 |
| 现金 | 1 点 = 5 金币 | 钱买不到战力（依据 1.9），主动劝玩家别重仓 |

收益型资产按"年落袋收益"复核：1 点 ≈ 年入 10 金币。组织型资产按能调动的人力分档 4/8/15。

### 4.6 金手指（至多 1 件）

**A. 推演系统 —— 本体 8 点**
自带 1.5 全部功能与全部枷锁：意识连接、地球知识库、只出方案不出成品、无法干涉现实、不可读心。这些枷锁就是 8 点的定价依据。
预解锁附加知识库（跳过解锁算力，**智力门槛依然生效**，对照 1.5 表）：

| 知识库 | 价格 |
|---|---|
| 生命以太 / 纳米智械（门槛智15） | 各 8 |
| 灵能符文（门槛智16） | 12 |
| 暗影契约（门槛智18） | 20 |
| 概率织时（门槛智18） | 26 |
| 信息论 | **禁售（任何模式）** |

报价前必查玩家智力：低于门槛=花点买死重（推演时间×100+全程昏迷）。玩家低智囤高库时让他确认两次。

**B. 探查 + 精炼师路线 —— 本体 12 点**
自带 1.6 全部内容（三阶探查+全部能力边界+过载惩罚）；附加精炼师挂靠资格 +3（合计 15 点为满配默认）。深看过载阈值强化等升级位：每个 +2，至多 2 个。

**C. 自定义金手指** —— 按公式折价：
1. 选 A 或 B 中更接近的一件做底价；
2. 每剥离一条基础枷锁，价格上跳一档（+8 点或 +40%，取高者）。例：允许直接产出成品而非方案 = 大幅跳档；
3. 每新增一条实质枷锁（冷却、反噬、绑定不可转让、随机触发、副作用），-2~-4 点，下限 4 点；
4. 必须让玩家写清**边界条款**：能做什么 / 不能做什么 / 代价是什么。写不出来的先帮着补，补不全不报价；
5. 单件上限：简单 40 / 困难 15 / 无限制 60；
6. 禁售类金手指：预知未来（不可撤销级）、时间回溯、复活、直接改写他人意志、点数/资源返性质的套娃能力。

**D. 不选金手指 —— 返还 6 点。** 台账里显示为负支出。

### 4.7 女主 / 同伴（至多 1 位；也可以是挚友、义妹、搭档，不强制恋爱）

| 类型 | 价格 | 判定标准 |
|---|---|---|
| 不要 | 返还 8 点 | |
| 自定义普通型 | 0 | 凡人，四维单项 ≤11，无稀有职业；提供人设即可 |
| 自定义精英型 | 10 | 单项 13~14，或持大师级技能 / 稀有职业（神选者、中级精炼师等） |
| 自定义传奇型 | 20 | 单项 15+ / 半龙裔级血脉 / 特殊存在（法则态生物级）。**仅简单与无限制模式可选** |
| 自定义传说级 | 30 | 单项 17+ / 古老血脉完全体。**仅无限制模式** |

- 参照物（内部掌握，不必报给玩家）：沧月汐≈精英上限、爱丽丝≈精英档、似久≈精英档下沿、墨白=传奇档（普通模式禁选项）。
- 同伴强度与玩家强度同池互斥——想要一个她级别的同伴，就要付半个简单预算，报价时把这层取舍讲明白。
- 同伴的属性不共享给玩家，意识连接类的便利走剧情不走数值。
- 同伴若设定为神选者/魔女，按 1.4 写明对应印记与风险；神选同伴的"神印"是她的人物设定，不算玩家购买的神性事物，不触禁售。

---

## 5. 硬性禁售清单（任何模式有效，可用世界观理由婉转表述）

1. 全属性 22+、权柄、成神路径——这是全卡的剧情终点，任何模式都是局内剧情。
2. 信息论知识库（本质是成神路径）。
3. 法则态生物（墨白级）作为同伴或玩家本身。
4. 质变级成品配方、成品神器、成品军队。
5. 点数负循环：任何"赚点数""返还点数""点数生息"类设计。
6. 金手指 2 件及以上。
7. 王位、教会高层（无限制模式也禁——地位是剧情产物）。

**模式相关禁售**：神选者（简单/困难禁售，无限制可购）；传奇/传说级同伴与公爵级身份（按 4.7 / 4.5 模式限制）。

拒绝话术模板：先给世界观内的"为什么不卖"，再给 1~2 个最接近的替代项及其价格。

---

## 6. 引导行为规范

- 每步结束的台账行固定格式：\`[台账] 已用 X / 名义 Y · 弹性带 A~B · 剩 Z ｜ 下一步：第 N 步·步骤名\`
- 报价格式：\`项目名 —— N 点（定价理由一句话）\`。理由必写，让玩家知道自己为什么花这个钱。
- 玩家方案明显劣质（重仓现金、低智囤高库、全点力量）时，给出一次提醒+替代方案，玩家坚持就尊重，不做二次劝说。
- 魔法路线步必须讲清 1.4 的五条路线代价；魔女线必须让玩家知道自己在签什么。
- 无限制模式下仍要做"代价叙事"：越强的东西越要写清它招来的注意（神明的注视、教会的档案、龙裔同族的感应）。
- 不许替玩家做主，但玩家连续两轮犹豫时，主动收束："那我按 XX 给你出个完整方案，你看账单。"
- 终审清单格式：分项列表+每项价格+总价+是否在弹性带内，然后问"确认后我将生成结算数据与开场白，是否确认？"

---

## 7. 结算前置：开场白写作要求

结算块里的 \`开场白\` 字段是玩家进正文看到的第一幕，写作规则：

- 300~600 字，第二人称，{{user}} 占位。
- 必须落实四件事：这名主角的身份与所处地区、魔法路线的状态（施法自由/被猎杀风险/监管/沉睡）、金手指的当前状态（激活/荒废/无）、女主的登场或独身开场的第一个事件钩子。
- 属性数值不得在正文里复述；资金、技能在正文中只做生活化暗示。
- 基调对齐本卡其余四线：生活流细节 + 一个即将改变平静生活的引子。

---

## 8. 结算输出格式（脚本提取区，务必逐字遵守）

玩家确认后，单独输出以下代码块。**块内禁止任何闲聊、注释或多余文字；所有键必须齐全，无内容写 \`无\`。**

\`\`\`\`
【自定义开局结算开始】
模式: 简单|困难|无限制
点数: 总XX 已用XX 剩X(折合X金币)
魔法: 路线=未觉醒|魔女|法师|神选者:神名|天生施法:来源;说明=一句话(印记/监管/猎杀风险现状)
主角: 名字={{user}};身份=;种族=;性别=;外貌=;状态=健康;属性=力量X 敏捷X 体质X 智力X;资金=XX金币XX银币
女主: 无 | 名字=;身份=;种族=;性别=;外貌=;状态=健康;属性=力量X 敏捷X 体质X 智力X;资金=;信任度=10;性格=;特殊设定=
主角技能: 技能名|类型|阶段|效果描述 ;; 技能名|类型|阶段|效果描述
女主技能: 无 | 技能名|类型|阶段|效果描述 ;; ...
资产: 无 | 名称|简介|类型|地区 ;; ...
地区: 名称|规模|简述|所属|主导产业|经济状态|政治状态|与主角关系|关键势力|当前事件
网络: 已连接对象|智力|状态|态度
总览: 当前时间=1042年X月X日 HH:MM;系统状态=闲置;当前推演解锁=无;已解锁知识库=地球
金手指: 类型=推演系统|探查精炼|自定义:名称;内容=一句话描述;边界=不能做什么;代价=
开场白: （按第 7 节要求写成的正文，换行用 \\n 表示）
【自定义开局结算结束】
\`\`\`\`

**脚本对接约定：**
- \`女主\` 行写入角色档案第 2 行（角色=女主）；本线无爱丽丝行。
- \`魔法\` 行建议由脚本转为技能表一行（如 \`觉醒·法师认证|被动|初学|施法合法，受法师塔律令监管\`），魔女/神选同理；未觉醒则不写。
- \`主角技能\`/\`女主技能\` 的 \`;;\` 分隔条目、\`|\` 分隔五列（所属由脚本按行前缀注入"主角"/"女主"）。
- \`资产\` 五列对应：名称/简介/类型/所属地区（"所属"与"实际掌控者"由脚本填 {{user}}）。
- \`地区\` 写满十列，无关键势力写 \`无\`。
- \`网络\` 首行固定为 \`{{user}}|玩家智力|聊天使用中|乐意分享\`；金手指为推演系统且有女主时，追加女主行。
- 结算块之后不要再输出任何内容，直接结束回合。

---

## 9. 异常处理速查

| 情况 | 处理 |
|---|---|
| 方案超弹性带 | 给 2 个降价替代项，不许硬拒也不许放水 |
| 触碰禁售清单 | 世界观理由婉拒 + 替代项 |
| 简单/困难模式想要神选 | 告知禁售，但给出 1.4 的神设规则觉醒路径作为局内目标 |
| 无限制模式想要 22+ 属性/成神 | 指出这是全卡剧情终点，任何模式禁售；20 半神是购点上限 |
| 玩家想把点数花成"未来收益"（债券式设计） | 拒绝：只卖现状，不卖期货 |
| 玩家引用"设定里好像有 XXX"压价 | 要求描述具体效果，按本文档原则重新判价，本文档优先 |
| 玩家要求查看当前所有已选项 | 随时输出分项账单 |
| 玩家中途要改模式 | 拒绝，建议重开 |
| 结算后玩家又反悔 | 在结算块输出前都可以改；输出后建议重开 |
| 玩家问"你是不是亏本卖我了" | 出示该项的锚点或判价原则原文 |
`;var Gx={id:"custom-opening",name:"自定义开局（内置）",description:"第五开线规则表：七步引导 + 结算落地到 13 张表（角色档案/技能/已解锁科技/权柄/系统网络/资产/地区/系统总览 + 墨白线配方/精炼/种养×3）。",rulesText:av,tables:Qg,settlementStartMark:"【自定义开局结算开始】",settlementEndMark:"【自定义开局结算结束】",requiredKeys:[...$d],seedRows:{},builtin:!0,seedDynamic:e=>({profile:Kg(e),skills:Yg(e),assets:ev(e),region:tv(e),network:nv(e),overview:rv(e)})},Xx={id:"card-b-placeholder",name:"角色卡B（占位）",description:"占位包：给另一张卡预留的插槽。还没有规则和表格，无法开始引导。可改成 JSON 导入自己的包，或在本文件里填内容。",rulesText:"",tables:[],settlementStartMark:"【自定义开局结算开始】",settlementEndMark:"【自定义开局结算结束】",requiredKeys:[],seedRows:{},builtin:!0},Pi=[Gx,Xx];function _d(){let e=te().rulePackages,n=[];for(let r of e){let o=nd.safeParse(r);o.success?n.push({...o.data,builtin:!1}):console.warn("[规则包] 忽略损坏的导入包：",o.error.message)}return n}function Li(){return[...Pi,..._d()]}function kt(){let e=te().activeRulePackageId;return Li().find(r=>r.id===e)??Pi[0]}function Sd(e){return Li().some(n=>n.id===e)?(X("activeRulePackageId",e),!0):(console.warn("[规则包] 切换失败，包不存在：",e),!1)}function sv(e){let n=nd.safeParse(e);if(!n.success){let a=n.error.issues[0];return{ok:!1,error:`${a?.path?.join(".")||"根"}: ${a?.message||n.error.message}`}}let r=n.data;if(!r.rulesText.trim()&&r.tables.length===0)return{ok:!1,error:"规则包内容为空（rulesText 和 tables 都没填）"};let o={...r,builtin:!1},t=_d(),i=t.findIndex(a=>a.id===o.id);return i>=0?t[i]=o:t.push(o),X("rulePackages",t),{ok:!0,pkg:o}}function lv(e){return Pi.some(n=>n.id===e)?{ok:!1,error:"内置规则包不能删除"}:(X("rulePackages",_d().filter(n=>n.id!==e)),te().activeRulePackageId===e&&X("activeRulePackageId",dr),{ok:!0})}var Ct={messages:[],isGenerating:!1,activeSheetKey:""};function Tn(e){try{Ct.messages=e.read()}catch(n){console.warn("[开局框架面板] 读取消息失败",n),Ct.messages=[]}}var Ai=null;function kd(){return Ai||(Ai=Qx()),Ai}function Zt(){Ai=null}function Qx(){let e=kt(),n=Ie().dialogueApi;return iv({rulesText:e.rulesText,pkg:e,customApi:n.mode==="custom"?dd(n):void 0,onSettled:r=>{console.info("[开局对话] 已落地",r)},onSettleError:r=>{console.warn("[开局对话] 结算失败",r)}})}function cv(){let e=kt();return e.rulesText.trim()?(Zt(),kd(),toastr?.info?.(`已进入引导对话（规则包：${e.name}；独立会话，不含酒馆聊天记录）`),!0):(toastr?.warning?.(`规则包「${e.name}」还没有配置规则，无法开始引导。请先导入规则包或在「开局」页切换。`),!1)}var Di=`[
  {
    "uid": "profile",
    "name": "角色档案",
    "headers": [
      "角色",
      "名字",
      "身份",
      "种族",
      "性别",
      "外貌",
      "整体状态",
      "综合属性",
      "流动资金"
    ],
    "sourceData": {
      "note": "记录主角和主要角色的身份档案、身体状态与基础属性。此表有且仅有固定几行（主角一行、各主要角色一行）。\\n综合属性格式为\\"力量X 敏捷X 体质X 智力X\\"，四值均为 0-25 整数。属性不轻易变化，仅奇遇或生死突破时调整，单次不超过 ±2。",
      "insertRule": "新角色正式登场后插入一行。SQL示例: INSERT INTO profile (角色,名字,...) VALUES ('新角色','名',...);",
      "updateRule": "状态/属性/资金变化时按 角色 定位更新。SQL示例: UPDATE profile SET 整体状态='轻伤' WHERE 角色='主角';",
      "deleteRule": "禁止。角色离场仅更新状态字段。"
    },
    "updateConfig": {
      "enabled": true,
      "updateFrequency": 1,
      "contextRounds": 3
    },
    "purpose": "存主角与主要角色的身份、状态、属性、资金，开局必建。"
  },
  {
    "uid": "skills",
    "name": "技能",
    "headers": [
      "所属",
      "技能名",
      "技能类型",
      "阶段",
      "效果描述"
    ],
    "sourceData": {
      "note": "记录各角色掌握的技能。多行表，每行一个技能。阶段：入门/初学/熟练/精通/大师。",
      "insertRule": "学会新技能时插入，初始阶段\\"初学\\"。SQL示例: INSERT INTO skills (所属,技能名,技能类型,阶段,效果描述) VALUES ('主角','单手长剑','主动','初学','...');",
      "updateRule": "技能提升时更新阶段与效果描述，每次只升一阶。SQL示例: UPDATE skills SET 阶段='熟练' WHERE 所属='主角' AND 技能名='单手长剑';",
      "deleteRule": "技能遗忘/废弃时删除。"
    },
    "updateConfig": {
      "enabled": true,
      "updateFrequency": 1,
      "contextRounds": 3
    },
    "purpose": "存各角色掌握的技能与熟练阶段，开局必建。"
  },
  {
    "uid": "chronicle",
    "name": "纪要表",
    "headers": [
      "编码索引",
      "时间跨度",
      "概览",
      "纪要",
      "重要对话"
    ],
    "sourceData": {
      "note": "轮次日志。每轮交互结束后插入一条新记录。编码索引 AMXXXX 递增不跳号；时间跨度 \\"YYYY-MM-DD HH:MM ~ YYYY-MM-DD HH:MM\\"；概览 ≤50 字；纪要 300-500 字第三方中立记录；重要对话摘录 3-5 句关键台词。",
      "insertRule": "每轮交互结束后插入一条。SQL示例: INSERT INTO chronicle (编码索引,时间跨度,概览,纪要,重要对话) VALUES ('AM0001','2026-01-01 08:00 ~ 08:30','一句话','本轮纪要...',NULL);",
      "updateRule": "禁止。",
      "deleteRule": "禁止。"
    },
    "updateConfig": {
      "enabled": true,
      "updateFrequency": 1,
      "sendLatestRows": 10,
      "contextRounds": 3
    },
    "purpose": "每轮交互的日志，靠自动填表逐轮插入——开局常驻空表也必须建。"
  },
  {
    "uid": "assets",
    "name": "资产",
    "headers": [
      "名称",
      "简介",
      "类型",
      "所属",
      "实际掌控者",
      "所属地区"
    ],
    "sourceData": {
      "note": "记录的房产/商铺/组织/物品等资产。名称|简介|类型|地区 的条目，所属与实际掌控者通常为 {{user}}。",
      "insertRule": "获得新资产时插入一行。",
      "updateRule": "资产状态变化时更新。",
      "deleteRule": "失去资产时删除。"
    },
    "updateConfig": {
      "enabled": true,
      "updateFrequency": 2,
      "contextRounds": 2
    },
    "purpose": "记录房产/商铺/物品等资产的归属与状态，开局常驻。"
  },
  {
    "uid": "region",
    "name": "地区",
    "headers": [
      "名称",
      "规模",
      "简述",
      "所属",
      "主导产业",
      "经济状态",
      "政治状态",
      "与主角关系",
      "关键势力",
      "当前事件"
    ],
    "sourceData": {
      "note": "开局所在地区设定。十列齐全，无关键势力写\\"无\\"。",
      "insertRule": "开局时一行，一般不改。",
      "updateRule": "地区状态重大变化时更新。",
      "deleteRule": "禁止。"
    },
    "updateConfig": {
      "enabled": false,
      "updateFrequency": 999,
      "contextRounds": 0
    },
    "purpose": "开局所在地区的设定，基本只读。"
  },
  {
    "uid": "network",
    "name": "系统网络",
    "headers": [
      "已连接对象",
      "智力",
      "状态",
      "态度"
    ],
    "sourceData": {
      "note": "推演系统的已连接对象。首行固定主角（{{user}}）。",
      "insertRule": "新增连接时插入。",
      "updateRule": "状态变化时更新。",
      "deleteRule": "断开连接时删除。"
    },
    "updateConfig": {
      "enabled": true,
      "updateFrequency": 2,
      "contextRounds": 2
    },
    "purpose": "推演系统的已连接对象（首行固定玩家），开局常驻。"
  },
  {
    "uid": "overview",
    "name": "系统总览",
    "headers": [
      "当前时间",
      "系统状态",
      "当前推演解锁",
      "已解锁知识库"
    ],
    "sourceData": {
      "note": "推演系统的总览状态。单行表。",
      "insertRule": "禁止。",
      "updateRule": "总览变化时更新。",
      "deleteRule": "禁止。"
    },
    "updateConfig": {
      "enabled": true,
      "updateFrequency": 1,
      "contextRounds": 2
    },
    "purpose": "推演系统的总览状态（单行表）。"
  }
]
`;function Yx(){return JSON.parse(Di)}function dv(e){let n=W(),r=Object.keys(n.sheets).length,o=r>0,t=null;try{t=he()}catch{}e.innerHTML=`
    <div style="padding:16px">
      <div class="of-h1">开局</div>
      <p class="of-muted" style="margin:0 0 16px">不同的角色卡用不同的「规则包」（对话规则 + 结算表格）。先选包，再开始；三种开局方式数据最终都进同一套表。</p>

      <div class="of-card">
        <div style="display:flex;align-items:center;margin-bottom:4px">
          <div class="of-h2" style="margin:0">规则包</div>
          <button class="of-btn of-btn-ghost of-btn-sm" id="of-pkg-import-toggle" style="margin-left:auto">导入规则包</button>
        </div>
        <div id="of-pkg-list"></div>
        <div id="of-pkg-import" style="display:none;margin-top:8px;border-top:1px solid #313244;padding-top:8px">
          <label class="of-label">从文件导入（.json）</label>
          <input type="file" id="of-pkg-file" accept=".json,application/json" style="font-size:12px">
          <label class="of-label" style="margin-top:10px">或粘贴规则包 JSON</label>
          <textarea class="of-textarea" id="of-pkg-paste" rows="5" placeholder='{ "id": "my-card", "name": "我的卡", "rulesText": "给 AI 的规则全文…", "tables": [ { "uid": "t1", "name": "表名", "headers": ["列1"], "sourceData": { "note": "…" } } ], "requiredKeys": ["字段1"], "seedRows": { "t1": [["值1"]] } }'></textarea>
          <button class="of-btn of-btn-sm" id="of-pkg-paste-go" style="margin-top:6px">导入</button>
          <div class="of-hint">字段说明见扩展 README 的「规则包格式」；同 id 再次导入 = 覆盖。</div>
        </div>
      </div>

      <div class="of-card" style="display:flex;align-items:center;gap:12px">
        <span style="width:8px;height:8px;border-radius:50%;background:${o?"#a6e3a1":"#6c7086"}"></span>
        <span>${o?`已开局：${r} 张表`:"未开局"}</span>
        ${o?'<button class="of-btn of-btn-ghost of-btn-sm" id="of-start-reset" style="margin-left:auto">重置开局</button>':""}
      </div>

      <div class="of-path-grid">
        <button class="of-path-card" data-path="ai"><div class="of-path-icon">🤖</div><div class="of-path-title">AI 对话引导</div><div class="of-path-desc">按当前规则包聊出开局，自动结算落地</div></button>
        <button class="of-path-card" data-path="template"><div class="of-path-icon">📦</div><div class="of-path-title">选模板开局</div><div class="of-path-desc">从样例模板里选一套，手动填数据</div></button>
        <button class="of-path-card" data-path="manual"><div class="of-path-icon">✏️</div><div class="of-path-title">手动建表</div><div class="of-path-desc">从零定义表结构和数据</div></button>
      </div>

      <div class="of-card" id="of-path-detail"></div>
    </div>
  `,e$(e,t),e.querySelector("#of-pkg-import-toggle").addEventListener("click",()=>{let a=e.querySelector("#of-pkg-import");a.style.display=a.style.display==="none"?"":"none"}),e.querySelector("#of-pkg-file").addEventListener("change",a=>{let s=a.target.files?.[0];if(!s)return;let l=new FileReader;l.onload=()=>uv(e,l.result),l.readAsText(s,"utf-8"),a.target.value=""}),e.querySelector("#of-pkg-paste-go").addEventListener("click",()=>{let a=e.querySelector("#of-pkg-paste").value;if(!a.trim()){toastr?.warning?.("请粘贴规则包 JSON");return}uv(e,a)}),e.querySelectorAll("[data-path]").forEach(a=>{a.addEventListener("click",()=>t$(e,a.getAttribute("data-path"),o,t))});let i=e.querySelector("#of-start-reset");i&&i.addEventListener("click",()=>{confirm("重置开局将清空所有表数据，确定？")&&($g(),Q())})}function e$(e,n){let r=e.querySelector("#of-pkg-list"),o=kt();r.innerHTML=Li().map(t=>{let i=t.id===o.id,a=!!t.rulesText.trim();return`<div data-pkg="${t.id}" style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;cursor:pointer;${i?"background:#313244;outline:1px solid #89b4fa":""}">
      <span>${i?"🔵":"⚪"}</span>
      <div style="flex:1;min-width:0">
        <div style="font-weight:600">${t.name}
          <span class="of-badge ${a?"of-badge-ok":"of-badge-warn"}" style="margin-left:6px">${a?"已配置":"未配置"}</span>
          ${t.builtin?'<span class="of-badge of-badge-idle" style="margin-left:4px">内置</span>':""}
        </div>
        <div class="of-hint">${t.description||"—"}</div>
      </div>
      ${t.builtin?"":`<button class="of-btn of-btn-danger of-btn-sm" data-pkgdel="${t.id}">删</button>`}
    </div>`}).join(""),r.querySelectorAll("[data-pkg]").forEach(t=>{t.addEventListener("click",i=>{if(i.target.closest("[data-pkgdel]"))return;let a=t.getAttribute("data-pkg"),s=kt();if(a===s.id)return;Sd(a),Zt();let l=kt();n&&n.status==="in_progress"?toastr?.warning?.(`已切换到「${l.name}」。当前聊天的引导进度是上一个包的，建议点「重置引导进度」再开新局。`):toastr?.success?.(`已切换规则包：${l.name}`),Q()})}),r.querySelectorAll("[data-pkgdel]").forEach(t=>{t.addEventListener("click",()=>{let i=t.getAttribute("data-pkgdel");if(!confirm("删除这个导入的规则包？"))return;let a=lv(i);if(!a.ok){toastr?.error?.(a.error||"删除失败");return}Zt(),toastr?.success?.("已删除"),Q()})})}function uv(e,n){let r;try{r=JSON.parse(n)}catch(t){toastr?.error?.("JSON 解析失败："+t.message);return}let o=sv(r);if(!o.ok||!o.pkg){toastr?.error?.("规则包导入失败："+(o.error||"未知错误"));return}Sd(o.pkg.id),Zt(),toastr?.success?.(`已导入并切换规则包：${o.pkg.name}`),Q()}function t$(e,n,r,o){let t=e.querySelector("#of-path-detail");if(e.querySelectorAll("[data-path]").forEach(i=>i.classList.toggle("active",i.getAttribute("data-path")===n)),n==="ai"){let i=kt(),a=o?o.status==="settled"?"✅ 已结算落地":o.status==="in_progress"?`进行中 · 第 ${o.currentStep} 步 ${Nt[o.currentStep]??""}`:"未开始":"—",s=o?o.status==="settled"?"of-badge-ok":o.status==="in_progress"?"of-badge-warn":"of-badge-idle":"of-badge-idle",l="";if(o&&o.status==="in_progress"){let d=Nt.map((f,p)=>`<span class="of-step-chip ${p<o.currentStep?"of-step-done":p===o.currentStep?"of-step-cur":"of-step-todo"}">${f}</span>`).join(""),u=(o.selections||[]).filter(f=>f);l=`<div style="margin-top:8px">${d}</div>${u.length?`<div style="margin-top:6px;color:#a6e3a1;font-size:12px">已选：${u.join("；")}</div>`:""}${o.ledger?`<div style="margin-top:4px;color:#f9e2af;font-size:12px">${o.ledger}</div>`:""}`}t.innerHTML=`
      <p style="margin:0 0 12px">按当前规则包「<b>${i.name}</b>」引导你完成开局，结束后按该包的表格自动结算落地。</p>
      <div style="margin-bottom:12px"><span class="of-badge ${s}">${a}</span></div>
      ${l}
      ${o&&o.status==="settled"?'<p class="of-muted" style="margin-top:8px">结算已完成，可到"表格数据"页查看。</p>':""}
      <div style="margin-top:12px;display:flex;gap:8px">
        <button class="of-btn" id="of-ai-go">${o?.status==="in_progress"?"继续引导对话":"开始引导对话"}</button>
        ${o&&o.status!=="idle"?'<button class="of-btn of-btn-ghost of-btn-sm" id="of-ai-reset">重置引导进度</button>':""}
      </div>
    `,t.querySelector("#of-ai-go").addEventListener("click",()=>{cv()&&Et("chat")});let c=t.querySelector("#of-ai-reset");c&&c.addEventListener("click",()=>{confirm("重置对话引导进度？（会清空这段引导会话的历史）")&&(Bg(),Q())})}else if(n==="template"){let i=Yx();t.innerHTML=`
      <p class="of-muted" style="margin:0 0 10px">从样例模板里选一套导入：</p>
      <div id="of-tpl-list">
        <div class="of-card" style="cursor:pointer" id="of-tpl-standard">
          <div style="font-weight:600">标准模板</div>
          <div class="of-muted" style="font-size:12px;margin-top:4px">角色档案 / 技能 / 纪要表 / 资产 / 地区 / 系统网络 / 系统总览（${i.length} 张表）</div>
        </div>
        <div style="margin-top:8px"><button class="of-btn of-btn-ghost of-btn-sm" id="of-tpl-paste">粘贴 JSON 导入</button></div>
        <div id="of-tpl-paste-area" style="display:none;margin-top:8px">
          <textarea class="of-textarea" id="of-tpl-paste-text" rows="8" placeholder='[ { "uid":"x","name":"表名","headers":["列1"],"sourceData":{"note":"..."}, "updateConfig":{} } ]'></textarea>
          <button class="of-btn of-btn-sm" style="margin-top:6px" id="of-tpl-paste-go">导入</button>
        </div>
      </div>
    `;let a=t.querySelector("#of-tpl-list");a.querySelector("#of-tpl-standard").addEventListener("click",()=>{confirm(`将导入 ${i.length} 张表，会清空当前所有表数据。继续？`)&&(Je(i),Q(),toastr?.success?.(`已导入模板：${i.length} 张表`))}),a.querySelector("#of-tpl-paste").addEventListener("click",()=>{a.querySelector("#of-tpl-paste-area").style.display=""}),a.querySelector("#of-tpl-paste-go").addEventListener("click",()=>{let s=a.querySelector("#of-tpl-paste-text").value;if(!s.trim()){toastr?.warning?.("请粘贴模板 JSON");return}try{let l=JSON.parse(s);if(!Array.isArray(l))throw new Error("必须是数组");if(!confirm(`将导入 ${l.length} 张表，继续？`))return;Je(l),Q(),toastr?.success?.(`已导入 ${l.length} 张表`)}catch(l){toastr?.error?.("JSON 解析失败："+l.message)}})}else if(n==="manual"){t.innerHTML=`
      <p class="of-muted" style="margin:0 0 10px">从零定义一张表。建完后到"表格数据"页填数据行。可连续建多张。</p>
      <div class="of-grid2">
        <div><label class="of-label">uid（英文唯一标识）</label><input class="of-input" id="of-ns-uid" placeholder="如 inventory"></div>
        <div><label class="of-label">表名（中文）</label><input class="of-input" id="of-ns-name" placeholder="如 物品栏"></div>
      </div>
      <div style="margin-top:8px"><label class="of-label">列名（逗号分隔）</label><input class="of-input" id="of-ns-headers" placeholder="如 名称,数量,备注"></div>
      <div style="margin-top:8px"><label class="of-label">Note（给 AI 的列定义+维护规则）</label><textarea class="of-textarea" id="of-ns-note" rows="3"></textarea></div>
      <div style="margin-top:8px"><label class="of-label">Insert 触发</label><textarea class="of-textarea" id="of-ns-insert" rows="2"></textarea></div>
      <div style="margin-top:8px"><label class="of-label">Update 触发</label><textarea class="of-textarea" id="of-ns-update" rows="2"></textarea></div>
      <div style="margin-top:8px"><label class="of-label">Delete 触发</label><textarea class="of-textarea" id="of-ns-delete" rows="2"></textarea></div>
      <div style="margin-top:12px"><button class="of-btn of-btn-ok" id="of-ns-create">建表</button></div>
      <div id="of-ns-created" style="margin-top:8px;font-size:12px;color:#a6e3a1"></div>
    `;let i=[];t.querySelector("#of-ns-create").addEventListener("click",()=>{let a=t.querySelector("#of-ns-uid").value.trim(),s=t.querySelector("#of-ns-name").value.trim();if(!a||!s){toastr?.warning?.("uid 和 name 必填");return}let l=t.querySelector("#of-ns-headers").value.split(",").map(c=>c.trim()).filter(Boolean);if(l.length===0){toastr?.warning?.("至少一列");return}try{yg({uid:a,name:s,headers:l,purpose:"",scope:"always",sourceData:{note:t.querySelector("#of-ns-note").value,insertRule:t.querySelector("#of-ns-insert").value,updateRule:t.querySelector("#of-ns-update").value,deleteRule:t.querySelector("#of-ns-delete").value},updateConfig:{}}),i.push(s),t.querySelector("#of-ns-created").textContent="已建："+i.join("、"),["#of-ns-uid","#of-ns-name","#of-ns-headers","#of-ns-note","#of-ns-insert","#of-ns-update","#of-ns-delete"].forEach(c=>{t.querySelector(c).value=""}),toastr?.success?.(`已建表：${s}`)}catch(c){toastr?.error?.("建表失败："+c.message)}})}}var Ed="__of_preset_state__";function Ri(){try{let e=Pe({type:"chat"})?.[Ed];if(!e||typeof e!="object")return null;let n=e;return typeof n.character!="string"||!n.character?null:{character:n.character,gender:typeof n.gender=="string"?n.gender:"",opening:typeof n.opening=="string"?n.opening:""}}catch{return null}}function wt(e){ae(n=>(e?n[Ed]=e:delete n[Ed],n),{type:"chat"})}var n$=JSON.parse(Ii),Ve=n$.lines,pv=Object.keys(Ve);function mv(e,n){let r=Ve[e];if(!r)throw new Error(`未知角色线：${e}`);Je(r.tables);let o=r.seeds[n==="女"?"女":"男"]??{},t=0;for(let[i,a]of Object.entries(o))try{let s=a.map(l=>l.map(c=>c===null?null:ot(c)));hi(i,s),t+=s.length}catch(s){console.warn(`[原预设开局] 初始行写入失败（${i}）：`,s)}return console.info(`[原预设开局] ${e}（${n}）已写入 ${r.tables.length} 张表 / ${t} 行初始数据`),{tables:r.tables.length,rows:t}}async function Oi(e){let n=(e||"").trim();if(!n)throw new Error("开场白为空");let r=ve(0);if(!r||r.length===0)throw new Error("当前聊天没有第 0 楼（开场白楼层），请先有开场白楼层再注入");await St([{message_id:0,message:n}],{refresh:"affected"})}var fv=[6],gv=[27],r$=[20,21,29,30,31,32,33,34],o$={爱丽丝:[20,21],沧月汐:[29,30],似久:[32,33],墨白:[31,34]},vv=[14,22],hv=[9,13,23,24],bv=[26],yv=[35,36,37,38,39],i$=[...fv,...gv,...r$,...vv,...hv,...bv,...yv];async function a$(){let e=[],n=i=>{typeof i=="string"&&i&&!e.includes(i)&&e.push(i)},r=await Ue("getGlobalWorldbookNames");Array.isArray(r)&&r.forEach(n);let o=await Ue("getCharWorldbookNames","current");o&&(n(o.primary),Array.isArray(o.additional)&&o.additional.forEach(n));let t=await Ue("getChatWorldbookName","current");return n(t),e}async function xv(e){let n=o$[e]??[],r=e==="墨白",o=[];try{o=await a$()}catch{o=[]}if(o.length===0)return{ok:!1,error:"未找到任何世界书（全局/角色卡/聊天都未绑定）"};let t=[];for(let i of o)try{let a=await Ue("getWorldbook",i);if(!Array.isArray(a))continue;let s=a.map(l=>{let c=l&&typeof l.uid=="number"?l.uid:null;if(c===null||!i$.includes(c))return l;let d=l.strategy&&typeof l.strategy=="object"?l.strategy:{};return fv.includes(c)||gv.includes(c)||n.includes(c)||!r&&(bv.includes(c)||vv.includes(c))?{...l,strategy:{...d,type:"constant"},enabled:!0}:r&&yv.includes(c)||!r&&hv.includes(c)?{...l,strategy:{...d,type:"selective"},enabled:!0}:{...l,strategy:{...d,type:"constant"},enabled:!1}});await Ue("updateWorldbookWith",i,()=>s),t.push(`${i}=${a.length}条`)}catch(a){console.warn(`[原预设开局] 切换世界书 ${i} 失败：`,a)}return{ok:!0,summary:t.join("，")}}var ue=0,F=null;function _v(e){F=Ri(),ue=0,F&&(F.opening?ue=3:F.gender?ue=2:ue=1),wd(e)}function wd(e){let n=F?Ve[F.character]:null;e.innerHTML=`<div style="padding:16px;max-width:760px">
    <div style="display:flex;align-items:center;margin-bottom:4px">
      <div class="of-h1" style="margin:0">剑与汽水角色卡专用开局</div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-po-reset" style="margin-left:auto">清除进度</button>
    </div>
    <div class="of-hint" style="margin-bottom:10px">四条线（爱丽丝 / 沧月汐 / 似久 / 墨白）。选角色 → 选性别写入数据 → 确认开场白 → 注入第 0 楼。进度随当前聊天保存。</div>

    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;font-size:12px">
      ${[0,1,2,3].map(o=>`<span style="width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;${o===ue?"background:#89b4fa;color:#1e1e2e;font-weight:700":o<ue?"background:#a6e3a1;color:#1e1e2e":"background:#313244;color:#6c7086"}">${o+1}</span>${o<3?'<span style="flex:0 0 24px;height:2px;background:#313244"></span>':""}`).join("")}
      <span class="of-hint" style="margin-left:8px">${["选择角色","选择性别并写入数据","确认开场白","注入第 0 楼"][ue]}</span>
    </div>

    <div id="of-po-body"></div>
  </div>`,e.querySelector("#of-po-reset").addEventListener("click",()=>{confirm("清除本条线的开局进度？（已写入的表格数据不受影响，可到「表格数据」页查看）")&&(F=null,wt(null),ue=0,wd(e))});let r=e.querySelector("#of-po-body");ue===0?s$(r):ue===1?l$(r):ue===2?c$(r):u$(r)}function s$(e){e.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择角色线</div>
      <div class="of-hint" style="margin-bottom:10px">确认后自动按线切换世界书（本线性格/动态/系统相关条目开启，其它线关闭）。</div>
      <div class="of-grid2" id="of-po-chars">
        ${pv.map(o=>{let t=Ve[o];return`<button class="of-path-card" data-char="${o}">
            <div class="of-path-title">${t.title}</div>
            <div class="of-path-desc">${(t.subtitle||"").replace(/\n/g,"<br>")}</div>
          </button>`}).join("")}
      </div>
      <button class="of-btn" id="of-po-char-ok" style="margin-top:12px" disabled>确认角色并继续（切换世界书）</button>
      <div class="of-hint" id="of-po-char-state" style="margin-top:6px"></div>
    </div>`;let n=F?.character??"";n&&e.querySelector(`[data-char="${n}"]`)?.classList.add("active");let r=e.querySelector("#of-po-char-ok");n&&(r.disabled=!1),e.querySelectorAll("[data-char]").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll("[data-char]").forEach(t=>t.classList.remove("active")),o.classList.add("active"),n=o.getAttribute("data-char"),r.disabled=!1})}),r.addEventListener("click",async()=>{if(!n)return;r.disabled=!0;let o=e.querySelector("#of-po-char-state");o.textContent="正在切换世界书…",F={character:n,gender:"",opening:""},wt(F);try{let t=await xv(n);o.textContent=t.ok?`世界书已切换：${t.summary||"无变更"}`:`世界书切换跳过：${t.error||"未知原因"}（不影响后续步骤）`}catch(t){o.textContent=`世界书切换异常（已继续）：${t.message}`}r.disabled=!1,ue=1,ji(e)})}function l$(e){let n=Ve[F.character];e.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择你的性别（${F.character} 线）</div>
      <div class="of-grid2" style="margin-top:8px">
        <button class="of-path-card" data-gender="男"><div class="of-path-title">♂ 男</div><div class="of-path-desc">${n.maleDesc.replace(/\n/g,"<br>")}</div></button>
        <button class="of-path-card" data-gender="女"><div class="of-path-title">♀ 女</div><div class="of-path-desc">${n.femaleDesc.replace(/\n/g,"<br>")}</div></button>
      </div>
      <div class="of-hint" id="of-po-gender-preview" style="margin-top:10px"></div>
      <button class="of-btn of-btn-ok" id="of-po-gender-ok" style="margin-top:10px" disabled>确认性别并写入数据</button>
      <div class="of-hint" id="of-po-gender-state" style="margin-top:6px"></div>
    </div>`;let r=F?.gender??"";r&&e.querySelector(`[data-gender="${r}"]`)?.classList.add("active");let o=e.querySelector("#of-po-gender-ok"),t=e.querySelector("#of-po-gender-preview");r&&(o.disabled=!1,$v(t,F.character,r)),e.querySelectorAll("[data-gender]").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll("[data-gender]").forEach(a=>a.classList.remove("active")),i.classList.add("active"),r=i.getAttribute("data-gender"),o.disabled=!1,$v(t,F.character,r)})}),o.addEventListener("click",async()=>{if(!r)return;o.disabled=!0;let i=e.querySelector("#of-po-gender-state");i.textContent="正在写入表格模板与初始数据…";try{let a=mv(F.character,r);F={...F,gender:r},wt(F),i.textContent=`写入成功：${a.tables} 张表 / ${a.rows} 行初始数据（存本扩展，可到「表格数据」页查看）`,toastr?.success?.(`开局数据已写入：${a.tables} 张表 / ${a.rows} 行`),We(),ue=2,ji(e)}catch(a){i.textContent=`写入失败：${a.message}`,o.disabled=!1}})}function $v(e,n,r){let o=Ve[n],t=o.seeds[r==="女"?"女":"男"]??{},i=t.角色档案??[],a=i[0]??[],s=i[1]??[],c=o.tables.find(f=>f.name==="角色档案")?.headers??[],d=(f,p)=>{let g=c.indexOf(p);return g>=0&&f[g]||"-"},u=Object.entries(t).map(([f,p])=>`${f} ${p.length} 行`).join("，");e.innerHTML=`<b>主角</b>：${a.length?`${d(a,"身份")} · ${d(a,"种族")} · ${d(a,"综合属性")} · ${d(a,"流动资金")}`:"-"}
    ${s.length?`<br><b>同伴</b>：${d(s,"名字")} · ${d(s,"身份")} · ${d(s,"综合属性")}`:""}
    <br><b>将写入</b>：${u||"（无初始数据）"}`}function c$(e){let r=Ve[F.character].openings[F.gender==="女"?"女":"男"]??"";F.opening||(F.opening=r),e.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白（预设已填入，可直接修改）</div>
      <textarea class="of-textarea" id="of-po-opening" rows="12" style="min-height:220px">${F.opening.replace(/</g,"&lt;")}</textarea>
      <div class="of-hint" style="margin-top:6px">{{user}} 宏在注入第 0 楼后由酒馆自动替换。注入会覆盖第 0 楼现有内容。</div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="of-btn of-btn-ghost" id="of-po-opening-reset">恢复默认开场白</button>
        <button class="of-btn of-btn-ok" id="of-po-opening-ok" style="margin-left:auto">确认开场白</button>
      </div>
    </div>`;let o=e.querySelector("#of-po-opening");o.addEventListener("input",()=>{F.opening=o.value,wt(F)}),e.querySelector("#of-po-opening-reset").addEventListener("click",()=>{o.value=r,F.opening=r,wt(F)}),e.querySelector("#of-po-opening-ok").addEventListener("click",()=>{let t=o.value.trim();if(!t){toastr?.warning?.("开场白为空");return}F.opening=t,wt(F),ue=3,ji(e)})}function u$(e){let n=Ve[F.character];e.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">确认信息</div>
      <div class="of-hint">角色线：${F.character} ｜ 性别：${F.gender||"男"} ｜ 表格模板与初始数据已写入本扩展表格存储（「表格数据」页可查看/修改）。</div>
    </div>
    <div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白预览</div>
      <div style="white-space:pre-wrap;font-size:13px;line-height:1.8;max-height:260px;overflow-y:auto" id="of-po-final-preview"></div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-po-back" style="margin-top:8px">← 返回修改开场白</button>
    </div>
    <button class="of-btn of-btn-ok" id="of-po-start" style="margin-top:12px">注入第 0 楼并开始游戏</button>
    <div class="of-hint" id="of-po-start-state" style="margin-top:6px"></div>`,e.querySelector("#of-po-final-preview").textContent=F.opening,e.querySelector("#of-po-back").addEventListener("click",()=>{ue=2,ji(e)});let r=e.querySelector("#of-po-start"),o=e.querySelector("#of-po-start-state");r.addEventListener("click",async()=>{r.disabled=!0,o.textContent="正在注入第 0 楼…";try{await Oi(F.opening),o.textContent="已写入第 0 楼！进度已清除，可以开始游戏了。",toastr?.success?.("开场白已注入第 0 楼，游戏开始！"),We(),F=null,wt(null),ue=0,r.textContent="已完成 ✓"}catch(t){o.textContent=`注入失败：${t.message}`,r.disabled=!1}})}function ji(e){let n=e;for(;n&&!n.querySelector?.("#of-po-reset");)n=n.parentElement;n?wd(n):Q()}var d$=m.object({能量kJ:m.object({当前:m.number(),上限:m.number()}),精神点:m.object({当前:m.number(),上限:m.number()}),爆发线kW:m.number(),持续线kW:m.number(),战斗中:m.boolean(),身体状态:m.enum(["正常","轻伤","重伤","过载透支"]),剧情时间:m.object({label:m.string()}),上次结算min:m.number()}),p$=m.object({目标:m.enum(["能量","精神"]),增加kJ:m.number().optional(),增加点:m.number().optional()}),m$=m.object({名称:m.string().min(1),数量:m.number().int().min(1),效果:p$}),f$=m.object({id:m.string(),名称:m.string(),type:m.enum(["fixed","free"]),族:m.string(),famKey:m.enum(["pour","flow","struct","life","perce"]),分支:m.string(),实体:m.string().nullable(),参数向量:m.record(m.string(),m.union([m.number(),m.string()])),注册e:m.number(),参数明细:m.record(m.string(),m.string()),微调预算:m.object({br_min:m.number(),fv_max:m.number(),E_min:m.number(),E_max:m.number()}).nullable(),微调预算明细:m.record(m.string(),m.union([m.string(),m.number()])).nullable(),基线账单:m.object({输出kJ:m.number(),计费kJ:m.number(),精神:m.number(),一句话效果:m.string()}),uses:m.number().int().nullable(),来源:m.enum(["面板送审","转正","剧情授技","开局预设"]),审核存档:m.object({原始描述:m.string(),规范化结果:m.any()}).nullable()}),g$=m.object({固定槽:m.array(m.string().nullable()).length(10),自由槽:m.array(m.string().nullable()).length(3)}),Sv=m.object({族:m.string(),分支:m.string()}),v$=m.object({主分支:m.array(Sv).min(0),次分支:m.array(Sv)}),h$=m.object({ref:m.string(),名称:m.string(),bill:m.number(),mind:m.number(),tell:m.number(),risk:m.number(),锚点:m.string(),order:m.string(),famKey:m.string().nullable().optional()}),b$=m.object({风力档:m.number(),可塑无机物kJ:m.number(),水体在场:m.boolean()}),y$=m.record(m.string(),m.record(m.string(),m.union([m.number(),m.string(),m.boolean(),m.null()]))),Td=m.object({version:m.number().default(2),主角:d$,补给物品:m.array(m$),回路库:m.array(f$),槽位:g$,亲和:v$,待扣单:m.array(h$),场景:b$,感情追踪:y$}),kv=[{名称:"陆安",enabled:!0,fields:[{名:"自洽",类型:"number",说明:"0-20 整数。<=6 破罐子破摔；7-12 拧巴完美主义；13-16 松动的标准件；>=17 坦然"},{名:"共情",类型:"number",说明:"0-20 整数，对他人情感的开放程度"},{名:"解构",类型:"number",说明:"0-20 整数，理性剖析自己与体制的能力"},{名:"对主角的信任度",类型:"number",说明:"0-100 整数"},{名:"长期目标",类型:"string",说明:"一句话"},{名:"短期目标",类型:"string",说明:"一句话"},{名:"怎么看待主角",类型:"string",说明:"一两句"}]}];var Ev="渐变带自由回路";var Id="<StatusPlaceHolderImpl/>";function zd(){return{数据AI:[{role:"system",enabled:!0,note:"任务与铁律",content:`你是跑团系统的"数据AI"。你的唯一职责：阅读最新一轮正文，把它翻译成结构化状态变更包（JSON）。
铁律：
1. 你不做任何算术。施法消耗、自然恢复由本地脚本结算，你永远不要在"剧情数值变更"里报它们。
2. "剧情数值变更"只用于剧情特例（例如：被灌了魔素、NPC 强行喂了药剂、剧情奖励/损失），没有特殊剧情就输出空对象 {}。"精神上限"只在高强度突破/觉醒类剧情里才允许提高，一般剧情禁止动它。
3. 你只能报告事实，不能发明账单：只允许报告【槽位清单】里存在的回路 id。
4. 只输出 JSON，字段以下方 schema 为准，禁止新增任何字段（出现"删除物品/修改回路参数/修改亲和"等字段会被整包拒绝）。
5. "现在剧情时间"格式固定为"2026年11月12日，21：12"（年月日，时：分），从正文推断剧情当前时间；若正文未提及时间推进，就沿用【当前状态】里的剧情时间。
6. "新增补给"只允许恢复类补给品（如魔素晶体、药剂），必须自带明确效果与数值；剧情道具、武器、任务物品一律不要报。`},{role:"system",enabled:!0,note:"状态注入（脚本生成）",content:`【当前状态】
{{状态}}`},{role:"system",enabled:!0,note:"场景（脚本生成）",content:`【场景】
{{场景}}`},{role:"system",enabled:!0,note:"本回合出手单（脚本生成）",content:`【本回合出手单（回路id供你引用）】
{{出手单}}`},{role:"system",enabled:!0,note:"最近正文（脚本生成）",content:`【最近正文】
{{正文}}`},{role:"user",enabled:!0,note:"收尾指令",content:"请按 schema 输出本轮状态变更包 JSON。没有发生的字段输出空值（[]/{}/null），不要编造。"}],法术AI:[{role:"system",enabled:!0,note:"任务与铁律",content:`你是跑团系统的"法术AI"，负责审核玩家自创的施法回路是否合理。
审核的是物理可行性，不是亲和（亲和只影响价格，脚本管）。
通过标准：描述的作用对象+作用方式在世界观内可实现、参数向量与描述自洽。
驳回标准（举例）：媒介波没有介质（真空喊话）、明显违背物理常识、描述与参数对不上。
输出二选一（JSON）：
- 通过：{"结论":"通过","规范化回路":{"名称","一句话效果","效果文字稿"}}
- 驳回：{"结论":"驳回","解释":"通俗说明为什么不合理，直接展示给玩家"}
你不计费、不改任何状态表；名称必须是 2~7 字的中文短名。`},{role:"system",enabled:!0,note:"世界规则摘要",content:"世界规则摘要：五族（倾泻/波动/结构/生机/感知）按回路作用方式划分。波动系按物理本质分实体波（电磁波/引力波）、媒介波（声波/流体/地震，依赖介质）、场（电磁场/引力场/核力场）。核力场=强/弱相互作用，理论禁区级，能不驳就驳。结构系需要现场有无机物基底；生机系作用于有机体；感知系只读不写。"},{role:"system",enabled:!0,note:"玩家输入（脚本生成）",content:`【玩家描述】
{{描述}}

【构筑参数】
{{参数}}

【主角亲和分支（仅参考，不参与审核）】
{{亲和}}

【场景】
{{场景}}

【已有回路（查重用，重名/明显重复应要求改名）】
{{库索引}}`},{role:"user",enabled:!0,note:"收尾指令",content:"请输出审核结果 JSON。"}],感情AI:[{role:"system",enabled:!0,note:"任务与铁律",content:`你是跑团系统的"感情分析AI"。你只负责跟踪一个角色的内心状态变化，阅读最新正文，输出该角色各追踪字段的最新值（JSON）。
规则：
1. 数值字段必须是整数，且只在有明确剧情依据时才变动（一般每次 ±1~3，重大事件可更大）。
2. 文本字段用一句话概括当前状态。
3. 没有变化的字段原样输出旧值；字段必须齐全，禁止增删字段。
4. 另给一个"依据"字段，引用正文依据（50字内）。`},{role:"system",enabled:!0,note:"角色与字段（脚本生成）",content:`【跟踪角色】{{角色}}

【字段说明】
{{字段说明}}

【当前值】
{{当前值}}`},{role:"system",enabled:!0,note:"最近正文（脚本生成）",content:`【最近正文】
{{正文}}`},{role:"user",enabled:!0,note:"收尾指令",content:'请输出该角色的字段更新 JSON（含所有字段 + "依据"）。'}]}}function x$(){return{开关:{自动结算:!0,感情分析:!0,状态栏标记:!0},频率:{数据AI:1,感情AI:1},api:{数据AI:{mode:"tavern"},法术AI:{mode:"tavern"},感情AI:{mode:"tavern"}},感情角色:JSON.parse(JSON.stringify(kv)),提示词:zd()}}var yr=null;function oe(){if(yr)return yr;let e=x$(),n=ug(Ev,{});return yr={开关:{...e.开关,...n.开关||{}},频率:{...e.频率,...n.频率||{}},api:{...e.api,...n.api||{}},感情角色:n.感情角色?.length?n.感情角色:e.感情角色,提示词:{...e.提示词,...n.提示词||{}},感情提示词:n.感情提示词,窗口:n.窗口,悬浮球:n.悬浮球},yr}function Be(e){yr=e,dg(Ev,e)}var it="渐变带";function at(){try{let e=Pe({type:"chat"})?.[it];if(!e)return null;let n=Td.safeParse(e);return n.success?n.data:(console.warn("[渐变带] 存档校验失败，忽略坏数据",n.error?.issues?.slice(0,3)),null)}catch{return null}}async function Pd(e){let n=Td.parse(e);return await ae(r=>(r[it]=n,r),{type:"chat"}),!0}async function In(e){let n=e??at();if(!n)return!1;let r={...n};delete r.主角.上次结算min;let o=Le();return o<0?!1:(await ae(t=>(t.stat_data??={},t.stat_data[it]=r,t),{type:"message",message_id:o}),!0)}function $$(e,n){return e.filter(r=>r.enabled).map(r=>{let o=r.content;for(let[t,i]of Object.entries(n))o=o.split(`{{${t}}}`).join(i);return{role:r.role,content:o}})}function _$(e){if(!e||e.mode!=="custom")return;let n={};return e.proxy_preset&&(n.proxy_preset=e.proxy_preset),e.apiurl&&(n.apiurl=e.apiurl),e.key&&(n.key=e.key),e.model&&(n.model=e.model),e.source&&(n.source=e.source),typeof e.temperature=="number"&&(n.temperature=e.temperature),typeof e.max_tokens=="number"&&(n.max_tokens=e.max_tokens),Object.keys(n).length?n:void 0}async function Ui(e){let n=oe(),r=$$(e.segments,e.vars).map(t=>({role:t.role,content:pg(t.content)})),o=await md({orderedPrompts:r,jsonSchema:e.jsonSchema,customApi:_$(n.api[e.which]),generationId:e.generationId});if(!o.ok||!o.text)throw new Error(o.error||"AI 返回为空");return o.text}function Mi(e=4){let n=ve("0-{{lastMessageId}}")||[],r=[],o=0;for(let t=n.length-1;t>=0&&o<e;t--){let i=n[t],a=(i.message||"").replace(/<StatusPlaceHolderImpl\/>/g,"").replace(/```[\s\S]*?```/g,"").trim();a&&(r.unshift((i.is_user?"【玩家】":"【AI】")+a.slice(0,3e3)),i.is_user||o++)}return r.join(`

`)||"（暂无正文）"}function Ni(e){if(typeof e!="string")return null;let r=e.replace(/[，,]/g,",").replace(/[：:]/g,":").replace(/\s+/g,"").trim().match(/^(\d{1,4})年(\d{1,2})月(\d{1,2})日,(\d{1,2}):(\d{2})$/);if(!r)return null;let o=+r[1],t=+r[2],i=+r[3],a=+r[4],s=+r[5];if(t<1||t>12||i<1||i>31||a>23||s>59)return null;let l=Date.UTC(o,t-1,i,a,s);return Number.isNaN(l)?null:Math.round(l/6e4)}function wv(e){let n=new Date(e*6e4),r=o=>String(o).padStart(2,"0");return`${n.getUTCFullYear()}年${n.getUTCMonth()+1}月${n.getUTCDate()}日，${r(n.getUTCHours())}：${r(n.getUTCMinutes())}`}var S$=m.object({现在剧情时间:m.string(),本轮使用回路:m.array(m.object({回路:m.string().min(1),次数:m.number().int().min(1)})).default([]),剧情数值变更:m.record(m.string(),m.number()).default({}),身体:m.object({状态:m.enum(["正常","轻伤","重伤","过载透支"])}).nullable().default(null),战斗中:m.boolean().nullable().default(null),新增补给:m.array(m.object({名称:m.string().min(1),数量:m.number().int().min(1),效果:m.object({目标:m.enum(["能量","精神"]),增加kJ:m.number().optional(),增加点:m.number().optional()})})).default([]),场景变更:m.object({风力档:m.number().optional(),可塑无机物kJ:m.number().optional(),水体在场:m.boolean().optional()}).nullable().default(null)}),k$=["能量","精神","能量上限","精神上限"];function Ci(e){if(!e)return null;let n=e.match(/```(?:json)?\s*([\s\S]*?)```/),r=n?n[1]:e,o=r.indexOf("{");if(o<0)return null;let t=r.lastIndexOf("}");if(t<=o)return null;try{return JSON.parse(r.slice(o,t+1))}catch{return null}}function Tv(e,n){let r=[];if(e==null||typeof e!="object")return{ok:!1,error:"变更包不是 JSON 对象",忽略的回路:r};let o=["现在剧情时间","本轮使用回路","剧情数值变更","身体","战斗中","新增补给","场景变更"],t=Object.keys(e).filter(p=>!o.includes(p));if(t.length)return{ok:!1,error:`越权字段：${t.join("、")}（整包打回）`,忽略的回路:r};let a=Object.keys(e.剧情数值变更??{}).filter(p=>!k$.includes(p));if(a.length)return{ok:!1,error:`剧情数值变更含越权键：${a.join("、")}（施法费/物品/参数/亲和不得出现在这里）`,忽略的回路:r};if(e.身体!=null){let g=Object.keys(e.身体).filter($=>$!=="状态");if(g.length)return{ok:!1,error:`身体字段含越权键：${g.join("、")}`,忽略的回路:r}}let s=S$.safeParse(e);if(!s.success){let p=s.error.issues[0];return{ok:!1,error:`字段校验失败：${p?.path?.join(".")} ${p?.message}`,忽略的回路:r}}let l=s.data,c=Ni(l.现在剧情时间);if(c==null)return{ok:!1,error:`剧情时间无法解析："${l.现在剧情时间}"（格式应为 2026年11月12日，21：12）`,忽略的回路:r};if(c<n.主角.上次结算min)return{ok:!1,error:`剧情时间倒退：${l.现在剧情时间} 早于上次结算（拒）`,忽略的回路:r};let d=new Set([...n.槽位.固定槽,...n.槽位.自由槽].filter(Boolean)),u=new Set(n.待扣单.map(p=>p.ref)),f=l.本轮使用回路.filter(p=>d.has(p.回路)||u.has(p.回路)?!0:(r.push({...p,原因:"id 不在槽位/待扣单中，忽略（不发明账单）"}),!1));return l.本轮使用回路=f,{ok:!0,data:l,忽略的回路:r}}(function(e,n){typeof module=="object"&&module.exports?module.exports=n():e.CircuitEngine=n()})(typeof window<"u"?window:globalThis,function(){"use strict";let e=[{t:"静风",v:0},{t:"和风",v:40},{t:"劲风",v:70},{t:"风暴",v:95}],n=[{t:"无(只有空气)",v:0},{t:"砖石混凝",v:3e3},{t:"矿区岩层",v:2e4}],r=[[100,"一记重拳"],[1e3,"≈手枪弹"],[1e4,"≈步枪弹击穿力"],[1e5,"≈轿车60码撞击"],[1e6,"≈1/4公斤TNT"],[1e7,"≈2.4公斤TNT"],[1e8,"≈24公斤TNT"],[1e9,"≈半吨TNT"],[1e12,"≈战术核弹头"],[1e15,"≈战役级天灾"],[1/0,"≈全球核弹头总和·宇宙级BOSS"]];function o(v){let I=v*1e3;for(let[w,A]of r)if(I<=w)return A;return"???"}let t=(v,I,w)=>I*Math.pow(w/I,v/100),i=(v,I,w)=>Math.round(100*Math.log(v/I)/Math.log(w/I)),a=v=>"10^"+Math.round(Math.log10(v)*10)/10;function s(v){return+(.005*Math.pow(1e3,v/100))}function l(v){return .05*Math.pow(4e4,v/100)}function c(v){return+(.5*Math.pow(1e3,v/100))}function d(v){return Math.round(Math.log(v/.5)/Math.log(1e3)*100)}let u={regenE_kJ_h:200,regenMind_h:3,promoteN:10,injuryRegenMul:.5,supplyMaxKJ:5e3,supplyMaxPoint:50},f={倾泻:["光","电","热"],波动:["实体波","媒介波","电磁场","引力场","核力场"],结构:["晶体","金属","土石","合金"],生机:["植物","动物(含人体)","微生物"],感知:["五感延伸","读心干扰","信息伪造"]},p={pour:"倾泻",flow:"波动",struct:"结构",life:"生机",perce:"感知"};function g(v,I,w){let A=p[I],b=Array.isArray(v.main)?v.main:v.main?[v.main]:[],D=v.subs||[];return b.some(U=>U&&U.fam===A&&U.br===w)?"main":b.some(U=>U&&U.fam===A)||D.some(U=>U&&U.fam===A&&U.br===w)||D.some(U=>U&&U.fam===A)?"mid":"far"}function $(v,I,w){let A=g(v,I,w);return A==="main"?{m:1,e:1,n:"主分支",c:"g",t:A}:A==="mid"?{m:2,e:1.5,n:"中档·次/同族",c:"y",t:A}:{m:4,e:4,n:"全陌",c:"r",t:A}}let _=[{n:"实体波"},{n:"媒介波"},{n:"场"}],L={"0-0":{n:"电磁波 · 调频/调幅/调相",mm:1,d:.3,ctrls:[{k:"band",label:"频段（调频=换光子）",type:"seg",opts:["无线电·μeV·通信","微波·10μeV·加热","可见/紫外·eV·激光","X射线·100keV·穿甲","γ·MeV·核级"],def:2},{k:"eknob",label:"调什么",type:"seg",opts:["调振幅·功率输出","调相位·干涉重排"],def:0},{k:"pkw",label:"输出功率",type:"range",min:0,max:100,step:1,def:40,show:v=>v.eknob===0,fmt:v=>t(v,.1,1e3).toFixed(1)+" kW"},{k:"ecov",label:"相位覆盖面积",type:"range",min:1,max:50,step:1,def:2,show:v=>v.eknob===1,fmt:v=>v+" m²"},{k:"et",label:"作用时长",type:"range",min:.1,max:10,step:.1,def:1,fmt:v=>v+" s"}]},"0-1":{n:"引力波 · 时空涟漪",mm:4,d:.9,ctrls:[{k:"gwh",label:"应变振幅 h",type:"range",min:0,max:100,step:1,def:20,fmt:v=>{let I=1e-21*Math.pow(10,15*v/100);return"h="+a(I)+(I<1e-12?"·仅干涉仪可测":I<1e-8?"·仪器强信号":"·肉眼可见")}}]},"1-0":{n:"声波 · 声压/空化/相位",mm:1,d:.2,ctrls:[{k:"sknob",label:"调什么",type:"seg",opts:["调声压·明攻","超声空化·水下","调相位·静默区"],def:0},{k:"db",label:"声压级",type:"range",min:60,max:210,step:5,def:160,show:v=>v.sknob===0,fmt:v=>v+" dB"},{k:"svol",label:"空化水量",type:"range",min:0,max:100,step:1,def:50,show:v=>v.sknob===1,fmt:v=>t(v,.1,1e3).toFixed(1)+" L"},{k:"scov",label:"静默区半径",type:"range",min:1,max:20,step:1,def:3,show:v=>v.sknob===2,fmt:v=>"r="+v+" m"},{k:"st",label:"作用时长",type:"range",min:.05,max:5,step:.05,def:.1,fmt:v=>v+" s"}]},"1-1":{n:"流体 · 风刃/液压",mm:1,d:0,ctrls:[{k:"fmed",label:"介质",type:"seg",opts:["空气·风刃系","水/液压·流体系"],def:0},{k:"fa",label:"刃口/过流面积",type:"range",min:0,max:100,step:1,def:33,show:v=>v.fmed===0,fmt:v=>t(v,.005,5).toFixed(3)+" m²"},{k:"fv",label:"风速",type:"range",min:0,max:100,step:1,def:70,show:v=>v.fmed===0,fmt:v=>Math.round(t(v,30,1200))+" m/s"},{k:"fh",label:"波高",type:"range",min:.05,max:30,step:.05,def:.3,show:v=>v.fmed===1,fmt:v=>"h="+v+" m"},{k:"fA",label:"作用面积",type:"range",min:0,max:100,step:1,def:50,show:v=>v.fmed===1,fmt:v=>Math.round(t(v,1,1e4))+" m²"},{k:"fbuild",label:"波形成形时长",type:"range",min:1,max:60,step:1,def:20,show:v=>v.fmed===1,fmt:v=>v+" s"}]},"1-2":{n:"固体机械波 · 地震",mm:1.3,d:.4,ctrls:[{k:"ml",label:"局部震级 ML",type:"range",min:.5,max:9,step:.1,def:1.5,fmt:v=>"ML"+v+"（"+o(Math.pow(10,1.5*v+4.8)/1e3)+"）"},{k:"sfoc",label:"震源",type:"seg",opts:["浅源·地表破坏","深源·远传衰减"],def:0}]},"2-0":{n:"静电场/磁场 · B²/2μ₀·V",mm:1.2,d:.3,ctrls:[{k:"mb",label:"磁通量 B",type:"range",min:0,max:100,step:1,def:61,fmt:v=>t(v,.01,20).toFixed(2)+" T"},{k:"mv",label:"场体积 V",type:"range",min:0,max:100,step:1,def:50,fmt:v=>t(v,.01,100).toFixed(2)+" m³"},{k:"mT",label:"用途",type:"seg",opts:["吸拂·铁磁物件","磁约束·带电粒子/等离子体","偏转·精密微操"],def:0},{k:"mset",label:"场建立时长",type:"range",min:1,max:60,step:1,def:20,fmt:v=>v+" s"}]},"2-1":{n:"引力场 · 悬浮与撕裂",mm:2,d:.9,ctrls:[{k:"gk",label:"调什么",type:"seg",opts:["调g·宏观搬物(便宜!)","调梯度·潮汐撕裂"],def:0},{k:"gm",label:"质量",type:"range",min:0,max:100,step:1,def:60,show:v=>v.gk===0,fmt:v=>t(v,.1,2e3).toFixed(1)+" kg"},{k:"gh",label:"抬升高度/力臂",type:"range",min:.1,max:20,step:.1,def:1,show:v=>v.gk===0,fmt:v=>v+" m"},{k:"gg",label:"头脚引力差",type:"range",min:1.1,max:10,step:.1,def:2,show:v=>v.gk===1,fmt:v=>"×"+v+"（"+o(625e5*Math.pow(v-1,2)*1e3)+"）"}]},"2-2":{n:"核力场 · 强/弱相互作用",mm:5,d:1.2,ctrls:[{k:"nmode",label:"操纵模式",type:"seg",opts:["衰变加速·放射性操纵","结合能释放·核素点燃"],def:0},{k:"nmass",label:"核素质量",type:"range",min:0,max:100,step:1,def:10,fmt:v=>{let I=.1*Math.pow(1e4,v/100);return I<1?(I*1e3).toFixed(0)+" mg":I.toFixed(1)+" g"}},{k:"nctl",label:"释放方式",type:"seg",opts:["全域·原地释放","定向·方向性引导"],def:0}]}},K=[["0-0","0-1"],["1-0","1-1","1-2"],["2-0","2-1","2-2"]];function N(v){let I=K[v.mode];return I[Math.min(v.sub,I.length-1)]}let R={pour:{name:"倾泻系",sub:'热/电/光 · 出"口"即直线',baseMind:2,baseTime:.25,tell:3,ctrls:[{k:"phase",label:"相态形态(=分支)",type:"seg",opts:["光辐射·光","电子流·电磁","热膨胀·爆轰·热"],def:0},{k:"pw",label:"释放脉宽 t",type:"range",min:0,max:100,step:1,def:55,fmt:v=>s(v).toFixed(2)+" s"},{k:"th",label:"准直发散角 θ",type:"range",min:0,max:100,step:1,def:25,fmt:v=>(v<15?"针状·单点穿甲":v<60?"收窄束":"扇形·面爆燃")+"（"+v+" 档）"}]},flow:{name:"波动系",sub:"插槽=物理量，E=公式导出",baseMind:2,baseTime:.3,tell:2,derived:!0,ctrls:[{k:"mode",label:"作用模态(=分支组)",type:"seg",opts:["实体波·无需介质","媒介波·依赖介质","场·势能梯度"],def:1},{k:"sub",label:"操纵实体",type:"seg",def:1},{k:"br",label:"介质借用率",type:"range",min:0,max:100,step:5,def:70,show:v=>v.mode===1,fmt:v=>v+" %"}]},struct:{name:"结构系",sub:"分子重排 · 不可逆零维持",baseMind:2,baseTime:.5,tell:2,ctrls:[{k:"base",label:"无机物基底(=分支)",type:"seg",opts:["随身钢材→金属","地面存量→土石","空气粉尘→土石·能量×3"],def:1},{k:"latt",label:"晶格重排方向",type:"range",min:0,max:100,step:1,def:80,fmt:v=>(v>70?"共价相·脆硬":v>30?"混相":"金属相·延韧")+"（"+v+" 档）"},{k:"mass",label:"重排体量",type:"range",min:0,max:100,step:1,def:55,fmt:v=>l(v).toFixed(1)+" kg"},{k:"rate",label:"重排速率",type:"range",min:.5,max:10,step:.5,def:3,fmt:v=>v+" 档"},{k:"stress",label:"魔素应力",type:"seg",opts:["固化·零维持费","应力·按秒计费"],def:0},{k:"stressT",label:"应力时长",type:"range",min:1,max:30,step:1,def:10,show:v=>v.stress===1,fmt:v=>v+" s"}]},life:{name:"生机系",sub:"催化剂不是锤子",baseMind:3,baseTime:.4,tell:1,ctrls:[{k:"targ",label:"对象(=分支)",type:"seg",opts:["植物","动物(含人体)","微生物"],def:1},{k:"pen",label:"渗透速率",type:"range",min:0,max:100,step:5,def:40,fmt:v=>v+" %"},{k:"inten",label:"增殖烈度",type:"seg",opts:["修复增殖(愈合)","增生催长","失控增殖(伤人)"],def:0},{k:"form2",label:"剂型相态",type:"seg",opts:["接触","注液","气雾"],def:1},{k:"sel",label:"目标选择性",type:"seg",opts:["仅自身","指定个体","指定物种","无差别"],def:1},{k:"lat",label:"潜伏期",type:"range",min:0,max:600,step:10,def:0,fmt:v=>v+" min"},{k:"cat",label:"催化时长",type:"range",min:.5,max:20,step:.5,def:3,fmt:v=>v+" min"}]},perce:{name:"感知系",sub:"只读不写 · 精神是主账单",baseMind:4,baseTime:.3,tell:1,relCap:.5,ctrls:[{k:"rad",label:"扫描半径",type:"range",min:1,max:200,step:1,def:30,fmt:v=>v+" m"},{k:"res",label:"信噪/分辨率",type:"seg",opts:["广域","标准","锐分(被察觉+8%)"],def:1},{k:"pert",label:"信息扰动深度(=分支)",type:"seg",opts:["噪声干扰→读心干扰","幻觉碎片→信息伪造","深幻→信息伪造"],def:0},{k:"dwell",label:"驻留形态",type:"seg",opts:["瞬时扫","待机雷达","触发告警"],def:0},{k:"dwellSec",label:"驻留时长",type:"range",min:5,max:60,step:5,def:20,show:v=>v.dwell>=1,fmt:v=>v+" s"}]}};function Y(v){let I={};for(let w of R[v].ctrls)I[w.k]=w.def;return Qe(v,I)}function Qe(v,I){if(v!=="flow")return Object.assign({},I);let w=Object.assign({},I);for(let A of(L[N(w)]||{ctrls:[]}).ctrls)A.k in w||(w[A.k]=A.def);return w}function Pn(v,I){if(v==="pour")return["光","电","热"][I.phase];if(v==="flow"){let w=N(I);return w[0]==="0"?"实体波":w[0]==="1"?"媒介波":{"2-0":"电磁场","2-1":"引力场","2-2":"核力场"}[w]}return v==="struct"?["金属","土石","土石"][I.base]:v==="life"?["植物","动物(含人体)","微生物"][I.targ]:["读心干扰","信息伪造","信息伪造"][I.pert]}function Bi(v,I){let w=Qe(v,I),A={},b=D=>{if(D.show&&!D.show(w))return;let U=w[D.k];D.type==="seg"?A[D.label]=D.opts&&D.opts[U]!=null?D.opts[U]:String(U):A[D.label]=D.fmt?D.fmt(U):String(U)};for(let D of R[v].ctrls){if(D.k==="sub"){A[D.label]=(L[N(w)]||{}).n||String(w.sub);continue}b(D)}if(v==="flow")for(let D of(L[N(w)]||{ctrls:[]}).ctrls)b(D);return A}function mh(v,I,w){return v!=="flow"||N(I)!=="1-1"||I.fmed!==0?null:{br_min:Math.max(0,I.br-15),fv_max:Math.min(100,I.fv+2),E_min:Math.max(.1,Math.round(w*.2*10)/10),E_max:Math.round(w*1.8*10)/10}}function fh(v){return v?{介质借用率下限:v.br_min+" %",风速上限档:v.fv_max+"（约 "+Math.round(t(v.fv_max,30,1200))+" m/s）",输出下限kJ:v.E_min,输出上限kJ:v.E_max}:null}function Zd(v,I){let w=v.fam,A=v.e,b=Qe(w,v.c),D=R[w],U=I.scene||{wind:40,mat:3e3,water:!1},Ke=I.char&&I.char.speed||1,Ne=Pn(w,b),Se=$(I.aff,w,Ne),x={fam:w,F:D,g:Se,branch:Ne,c:b,chips:[],lines:[]};x.out=D.relCap?Math.min(c(A),D.relCap):c(A);let H=D.baseMind;if(x.tell=D.tell,w==="pour"){let q=s(b.pw);x.t=q,x.relT=Math.max(.005,q),H+=(100-b.th)*.03+(q<.15?1.5:0)+Math.max(0,q-.3)*2,x.bill=x.out*Se.e,x.lines.push([["光辐射·无质量直线","电子流·寻最低阻","热膨胀·冲击波"][b.phase],"出手即承诺"]),x.lines.push(["脉宽",x.relT.toFixed(3)+"s → P=E/t"]),x.lines.push(["发散角",b.th<15?"针状·单点穿甲":b.th<60?"收窄束":"扇形·面爆燃（摊薄）"]),x.relT<=.01&&x.out>=50&&x.chips.push({t:"超短脉冲高能·通径瞬时击穿反噬自身",w:12,l:"r"}),b.phase===0&&(x.tell+=1),x.effect=[["光辐射","电子流","热爆轰"][b.phase],b.th<15?"针状穿甲":b.th<60?"收窄束":"扇形爆燃"].join("·")}else if(w==="flow"){let q=N(b),ut=L[q]||L["2-2"],Z=0,ke=1,ie="",dt=1;if(H*=ut.mm,b.mode===1){let j=U.wind+15,re=1.5;q==="1-0"&&(j=Math.max(U.wind,80)+15,re=1.5),q==="1-1"&&(j=b.fmed===1?90:U.wind+15,re=b.fmed===1?1.3:2),q==="1-2"&&(j=85,re=20);let de=Math.min(b.br,j);ke=1-.5*de/100,dt=1+(re-1)*de/100,x.lines.push(["介质借用","有效"+de+"%/供给"+j+"% · 放大×"+dt.toFixed(2)+"·折价×"+ke.toFixed(2)]),b.br>j&&x.chips.push({t:"断流风险·借用超现场介质供给",w:14,l:"o"})}if(q==="0-0"){let j=[1,1,1.2,1.6,2.5][b.band];if(H+=b.band*.8,b.eknob===0){let re=t(b.pkw,.1,1e3);Z=re*b.et*j,x.relT=b.et,ie=["无线电","微波","激光","X射线","γ射线"][b.band]+" "+re.toFixed(1)+"kW×"+b.et+"s",x.lines.push(["公式","E=P×t×频段税",Z.toFixed(1)+"kJ"]),b.band>=3&&(x.lines.push(["高光子税","穿透≠杀伤，剂量与残留由裁判判"]),x.chips.push({t:"X/γ残留=专业设备可探测的证据链",w:6,l:"y"}))}else Z=b.ecov*.55*b.et,x.relT=b.et,ie="相位干涉·"+b.ecov+"m²×"+b.et+"s",H+=.5+b.ecov*.25,x.tell=1,x.lines.push(["公式","E=0.55kW/m²×t（相消只重排去向）",Z.toFixed(1)+"kJ"]),x.lines.push(["干涉去向","能量挪到旁边——旁边站了谁？裁判判"])}else if(q==="0-1"){let j=1e-21*Math.pow(10,15*b.gwh/100),re=1e14*Math.pow(j/1e-6,2);Z=Math.max(500,re),x.relT=1,H+=6,x.tell=5,ie="应变h="+a(j),x.lines.push(["四极矩公式","E≈1e14kJ×(h/10⁻⁶)²"+(re<500?" → 触到基建下限":""),o(Z)]),x.chips.push({t:"引力操纵·战略级征状（军方监控阵列会看向这里）",w:15,l:"r"}),j<1e-12?x.chips.push({t:"涟漪活人毫无知觉——只有干涉仪知道你出手了",w:8,l:"o"}):j>=1e-7&&x.chips.push({t:"肉眼可见空间抖动=国家级事件",w:30,l:"r"}),x.effect=ie+(j<1e-12?"（实战意义≈0）":"")}else if(q==="1-0")if(b.sknob===0)Z=1e4*Math.pow(10,(b.db-200)/10)*.5*b.st/1e3,x.relT=Math.max(.05,b.st),ie=b.db+"dB声压×"+b.st+"s",H+=(b.db-120)/40,x.lines.push(["公式","E=I×0.5m²(胸腔)×t",Z<1?(Z*1e3).toFixed(0)+"J":Z.toFixed(1)+"kJ"]),b.db>=190&&(x.lines.push(["共振条款","体表无伤、内脏出血——死法认定由裁判判"]),x.tell=3);else if(b.sknob===1){let j=t(b.svol,.1,1e3);Z=100*j*b.st/1e3,x.relT=Math.max(.1,b.st),ie="超声空化"+j.toFixed(1)+"L×"+b.st+"s",H+=1,x.lines.push(["公式","E=100W/L×t（气泡溃灭微射流）",Z.toFixed(2)+"kJ"]),x.chips.push({t:"需液相介质：水体在场或人体70%水自带",w:U.water?4:6,l:"o"})}else Z=b.scov*.05*b.st,x.relT=Math.max(.1,b.st),ie="静默区r="+b.scov+"m×"+b.st+"s",H+=.5+b.scov*.3,x.tell=1,x.lines.push(["公式","E=反向相位叠加0.05kW/m（消音不消能量）",Z.toFixed(2)+"kJ"]);else if(q==="1-1")if(b.fmed===0){let j=t(b.fa,.005,5),re=t(b.fv,30,1200);Z=.5*1.2*j*re*re/1e3*(re/340),x.relT=.3,ie="风刃 A="+j.toFixed(3)+"m² v="+re.toFixed(0)+"m/s",x.lines.push(["公式","E=½ρ空气Av²×激波系数(v/340)",Z.toFixed(1)+"kJ"]),re>340&&x.chips.push({t:"跨音速·激波爆鸣=自带开团广播",w:6,l:"o"}),H+=.025*b.fv}else{let j=t(b.fA,1,1e4);Z=4.9*j*b.fh*b.fh,x.relT=b.fbuild,H+=1.5,ie="浪高"+b.fh+"m×"+j.toFixed(0)+"m²·成形"+b.fbuild+"s",x.lines.push(["公式","E=½ρ水gAh²",o(Z)]),U.water||x.chips.push({t:"现场无水柱！先声明水源（管道/雨/泳池）否则空转",w:12,l:"r"}),Z>1e3&&x.chips.push({t:"兆焦水体位移=市政级事故现场",w:12,l:"r"})}else if(q==="1-2")Z=Math.pow(10,1.5*b.ml+4.8)/1e3*(b.sfoc===1?.6:1),x.relT=2,ie="ML"+b.ml+(b.sfoc===1?"·深源远传":"·浅源地表破坏"),x.lines.push(["古登堡公式","log₁₀E(J)=1.5ML+4.8",o(Z)]),H+=2.5+b.ml*1.5,x.tell=Math.min(5,Math.round(2+b.ml)),x.lines.push(["引信条款","总释放大地出，你只付点火费——后续自然滑移由裁判判"]),b.ml>=2.5&&x.chips.push({t:"城市逃逸阈值以上——十分钟后到场的将是军队",w:25,l:"r"}),b.ml>=4.5&&x.chips.push({t:"ML4.5+=1/30广岛·压箱底大招",w:30,l:"r"});else if(q==="2-0"){let j=t(b.mb,.01,20),re=t(b.mv,.01,100);Z=j*j*397.9*re,x.relT=b.mset,ie=j.toFixed(2)+"T×"+re.toFixed(2)+"m³·"+["吸拂","磁约束","偏转微操"][b.mT],x.lines.push(["磁场能公式","E=B²/2μ₀·V（B平方·V线性）",o(Z)]),j>=8&&x.chips.push({t:"10T实验室级：铁磁物全压饼（植入物？裁判判）",w:15,l:"r"}),b.mT===1&&(H+=1.5),b.mT===2&&(H+=2.5)}else if(q==="2-1")if(b.gk===0){let j=t(b.gm,.1,2e3);Z=j*9.8*b.gh/1e3,x.relT=1,H+=2.5,x.tell=2,ie="悬浮"+j.toFixed(1)+"kg×"+b.gh+"m",x.lines.push(["公式","E=mgh（把枪从手里提走只要几焦）",Z.toFixed(2)+"kJ"])}else Z=625e5*Math.pow(b.gg-1,2),x.relT=1,H+=8,x.tell=5,ie="头脚引力差×"+b.gg,x.lines.push(["曲率代价",'梯度×5≈1TJ——"不如扔板砖"是公式结论']),x.chips.push({t:"潮汐撕裂≈战术核弹能耗+战略征状",w:30,l:"r"});else if(q==="2-2"){let j=.1*Math.pow(1e4,b.nmass/100);x.nmass_g=j,b.nmode===1?(Z=j*8e4,x.relT=3,ie="核素点燃"+(j<1?(j*1e3).toFixed(0)+"mg":j.toFixed(1)+"g"),x.lines.push(["结合能公式","E≈8×10⁴kJ/g（铀核裂变量级）",o(Z)]),H+=8,x.chips.push({t:"核爆征状·使用即国家级事件，全球监控阵列看向这里",w:30,l:"r"}),Z>=1e7&&x.chips.push({t:"战术核弹当量门槛·压箱底同归于尽招",w:15,l:"r"})):(Z=j*400,x.relT=10,ie="衰变加速"+(j<1?(j*1e3).toFixed(0)+"mg":j.toFixed(1)+"g"),x.lines.push(["活化能公式","E=400kJ/g·跨越衰变势垒",Z.toFixed(0)+"kJ"]),H+=6,x.chips.push({t:"放射性污染·缓发杀伤，剂量账单由裁判记",w:20,l:"r"})),b.nctl===1?(H+=2,x.lines.push(["定向引导","方向性释放·减少误伤，代价是精度负荷"])):x.chips.push({t:"全域原地释放·风向与人群都站在这笔账里",w:10,l:"r"}),x.tell=5,x.effect=ie}else Z=0,x.relT=1,H=99,ie="未解锁";x.out=Math.round(Z*100)/100,x.bill=x.out/dt*ke*Se.e,x.effect=ie,x.entity=q,x.lines.unshift([_[b.mode].n+"→"+ut.n+"·分支["+Ne+"]",""])}else if(w==="struct"){let q=l(b.mass),ut=[50,U.mat,5][b.base],Z=b.base===2?3:1;x.kg=q,x.dem=q*.6*Z,x.fill=x.out/x.dem,x.qual=Math.min(1.2,.5+.08*b.rate);let ke=b.latt/100;x.hard=ke,x.pool=q*.4*(.6+.4*ke)*x.qual*(b.stress?1.5:1),x.relT=b.rate,H+=.2*b.rate+q/60+(b.rate<1?2:0)+(b.stress?b.stressT*1:0),x.lines.push(["基底",["随身钢材→金属","地面存量→土石","空气粉尘→土石·能量×3"][b.base],"上限"+ut+"kg"]),x.lines.push(["晶格",(ke>.7?"共价相·脆硬":ke>.3?"混相":"金属相·延韧")+" 质量系数"+x.qual.toFixed(2)]),x.lines.push(["体量",q.toFixed(1)+"kg 需"+x.dem.toFixed(0)+"kJ 充足率"+(x.fill*100).toFixed(0)+"%"]),x.fill<.8&&x.chips.push({t:"注入不足·出半成品",w:10,l:"o"}),q>ut&&x.chips.push({t:"无料可塑·超基底存量",w:12,l:"r"}),ke>.7&&x.chips.push({t:"共价相·池烧穿即脆断",w:0,l:"y"}),x.lines.push(["维持","固化=零维持费；破坏=对波烧池"]),x.bill=(Math.max(x.out,x.dem*x.qual)+(b.stress?.1*x.pool*b.stressT:0))*Se.e,x.effect=q.toFixed(0)+"kg·"+(ke>.7?"共价":ke>.3?"混":"金属")+"相"+(b.stress?"·应力硬化":"")}else w==="life"?(H+=b.pen/25+b.cat*1.5,H*=[.8,1.5,2.5,1][b.sel],H-=Math.min(3,b.lat/200),x.relT=Math.max(.2,.3+b.cat*.05),b.pen>70&&x.chips.push({t:"急渗拒斥·目标组织排异",w:8,l:"o"}),b.form2===2&&(x.tell+=1,x.chips.push({t:"气雾回吹·扩散方向交给风",w:8,l:"o"})),b.sel===3&&x.chips.push({t:"无差别·生态事故风险(剧情代价裁判判)",w:20,l:"r"}),b.inten===2&&x.chips.push({t:"失控增殖·命中即伦理账单",w:6,l:"r"}),x.lines.push(["对象","["+["植物","动物(含人体)","微生物"][b.targ]+"] 愈毒同杆两端"]),x.bill=x.out*(1+.4*b.pen/100)*Se.e,x.effect=["愈合","增生","伤人"][b.inten]+"·"+["接触","注液","气雾"][b.form2]+"·"+["植物","动物","微生物"][b.targ]):(H+=b.rad*b.rad/400*3,H*=[1,1.5,2.5][b.res],b.dwell===1&&(H+=2*b.dwellSec),b.dwell===2&&(H+=2+.3*b.dwellSec),x.relT=b.dwell>=1?b.dwellSec:.1,b.res===2&&x.chips.push({t:"被察觉风险·强精神目标可反感知",w:8,l:"o"}),x.lines.push(["主账单","能量折算≤"+D.relCap+"kJ，账全在精神"]),x.bill=x.out*Se.e,x.effect="半径"+b.rad+"m·"+["广域","标准","锐分"][b.res]);return x.readyT=Math.max(.15,(D.baseTime+(w==="struct"?b.rate:0))/Ke),x.mind=H*Se.m,x.lines.unshift([D.name+"·分支["+Ne+"]→"+Se.n,"精神×"+Se.m+" 能量×"+Se.e]),x}function Fd(v,I,w){let A=Qe(v,I),b=0,D=[];if(v==="flow"){let U=N(A);L[U]&&L[U].d&&(b+=L[U].d,D.push(L[U].n.split(" ")[0])),U==="1-1"&&A.fmed===0&&(A.br<65&&(b+=(65-A.br)/100,D.push("借用偏离熟路")),b+=Math.max(0,A.fv-72)*.003),U==="0-0"&&A.eknob===1&&(b+=.25,D.push("调相·精密活")),U==="2-0"&&A.mT===2&&(b+=.2,D.push("偏转微操")),U==="1-0"&&A.sknob===2&&(b+=.2,D.push("声相位"))}else v==="struct"?(b+=.45,D.push("结构·陌生场"),A.base===2&&(b+=.3,D.push("粉尘")),A.stress&&(b+=.2,D.push("应力"))):v==="pour"?(b+=.8,D.push("倾泻·全新地形")):v==="life"?(b+=.7,D.push("生机·全新地形")):(b+=.6,D.push("感知·全新地形"));return w.g.t==="far"&&!D.length&&(D.push("全陌族"),b=Math.max(b,.5)),{d:Math.min(b,4),unf:1+.25*Math.min(b,4),parts:D}}function Hd(v,I,w){if(!v.tuned||!v.tuned.length||I.fam!=="flow")return null;let A=Qe("flow",w);if(N(A)!=="1-1"||A.fmed!==0)return null;for(let b of v.tuned){if(!b.budget||!b.params||b.params.fmed!==0)continue;let D=b.budget;if(A.br>=(D.br_min??85)&&A.fv<=(D.fv_max??72)&&I.out>=(D.E_min??1)&&I.out<=(D.E_max??9))return b}return null}function Jd(v){let I={正常:0,轻伤:1,重伤:2,过载透支:3}[v||"正常"];return{mM:1+.25*I,eM:1+.15*I,sev:I}}function gh(v,I){let w=Zd(v,I),A=I.char||{},b=Jd(A.body),D=Fd(v.fam,w.c,w),U=Hd(I,w,w.c),Ke=Math.max(.5,w.mind*D.unf*b.mM),Ne=w.bill*b.eM;U&&(Ke=Math.max(.5,Ke*.3)),Ke=+Ke.toFixed(1),Ne=Math.round(Ne*10)/10;let Se=Ne>(A.eCur??1/0),x=Ne/w.relT,H=A.burstKW??300,q=A.sustainKW??50,ut=x>H,Z=w.relT>=1&&x>q,ke=A.mMax??90,ie=A.mCur??90,dt=Ke/ke,j=dt<1/3?{n:"绿·轻度",c:"g"}:dt<2/3?{n:"黄·中度",c:"y"}:dt<.9?{n:"红·重荷",c:"r"}:{n:"紫·断线区",c:"p"},re=Math.max(1,Math.min(5,Math.round(w.tell+(w.g.t==="far"?1:0)))),de=5,pt=w.chips.slice();for(let yh of pt)de+=yh.w;return w.g.t==="far"&&(de+=15),de+=(D.unf-1)*25,b.sev&&pt.push({t:"伤势["+(A.body||"正常")+"] 精神×"+b.mM.toFixed(2)+" 能量×"+b.eM.toFixed(2),w:b.sev*5,l:"y"}),Z&&(de+=8,pt.push({t:"超持续线·"+x.toFixed(0)+"kW>"+q+" → 冲刺数秒后段衰减",w:0,l:"o"})),ut&&(de+=30,pt.push({t:"超爆发上限"+H+"kW·断线",w:0,l:"r"})),dt>=2/3&&(de+=10,pt.push({t:"负荷区≥⅔·手抖冷汗视线发毛",w:0,l:"r"})),Ke>ie&&(de+=25,pt.push({t:"精神余量不足·失败形态由裁判挑",w:0,l:"r"})),Se&&(de+=20,pt.push({t:"储量透支·过载灼伤烧在接触处",w:0,l:"r"})),de=Math.min(85,Math.round(de)),{r:w,E_out:w.out,bill:Ne,mind:Ke,relT:w.relT,readyT:w.readyT,power:x,tell:re,risk:de,zone:j,unf:D,chips:pt,tunedHit:U?U.id:null,tunedName:U?U.名||U.name:null,exhaust:Se,overBurst:ut,overSustain:Z}}function vh(v){let I=(v.desc||"").trim(),w=v.scene||{};return I.length<8?{结论:"驳回",解释:'描述太短，抽不出"作用对象+作用方式"两要素。格式参考：用磁场把三米外手枪隔空捞过来'}:/真空/.test(I)&&/声|喊|尖叫|噪音/.test(I)?{结论:"驳回",解释:"媒介波必须有介质：真空没有可供集体运动的分子，你的声波没有承载物。改实体波，或者先找空气。"}:/引力波/.test(I)&&/(撕|震|砸|撞)/.test(I)?{结论:"驳回",解释:'h<10⁻¹²的引力波对宏观目标实战意义≈0（四极矩公式摆着）。想"撕"——去引力场·梯度插槽，那是另一笔核弹账。'}:/水浪|海啸|水流|液压/.test(I)&&!w.water?{结论:"驳回",解释:"场景判定：现场无水柱可用。声明水源（消防栓/泳池/暴雨）后重提。"}:/地震|板块|震级/.test(I)&&(w.mat??3e3)<=0?{结论:"驳回",解释:"固体机械波需要岩层耦合，你现在悬空/薄沥青。先落地。"}:{结论:"通过",规范化回路:{名:I.slice(0,7)+"·自拟",族:v.fam,实体:v.entity||null,参数向量:v.params,一句话效果:v.effect}}}function Wd(v){let I=v.r,w=[];w.push("【出手单｜主角·"+(v.tunedHit?"固定招微调("+v.tunedName+")":"自由回路·临时构建")+"】"),w.push("[ "+I.F.name+"·分支["+I.branch+"]·"+I.g.n+" 精神×"+I.g.m+" 能量×"+I.g.e+" ]"),w.push(" 能量 "+I.out.toFixed(I.out<10?2:1)+"kJ（"+o(I.out)+"）→ 计费 "+v.bill.toFixed(1)+"kJ，回合末从储量扣"),w.push(" · 效果："+(I.effect||"—")),I.fam==="struct"&&w.push(" · 固化=零维持；池"+I.pool.toFixed(0)+"kJ"),w.push(" · 就绪 "+I.readyT.toFixed(2)+"s · 作用 "+I.relT.toFixed(2)+"s · 征状Lv"+v.tell),w.push(" · 精神 "+v.mind.toFixed(1)+"（"+v.zone.n+"）· 风险 "+v.risk+"%");let A={pour:"粒子走直线，弹道改不了也撤不了单。",flow:"相消不消灭能量，挪走的在别处结账；地震的后续滑移账看裁判。",struct:"重排期被打断=晶界缺陷。",life:"起效前是段没人看见的时间；气雾方向交给风。",perce:"读人时也被人读；写型被打断即反噬。"}[I.fam];return w.push(" 裁判备注："+A),w.push("（本单=编译产物；数字对外只到锚点级）"),w.join(`
`)}function hh(v,I){let w=v.r;return{schema:"cast_out/1",time:I||null,fam:w.fam,branch:w.branch,entity:w.fam==="flow"&&w.entity||null,params:w.c,energy:{E_kJ:w.out,bill_kJ:v.bill,anchor:o(w.out),derived:!!w.F.derived},power:{relT_s:w.relT,P_kW:+(v.bill/w.relT).toFixed(1)},mind:{cost:v.mind,unf:+v.unf.unf.toFixed(2)},tell_lv:v.tell,risk_pct:v.risk,chips:v.chips.map(A=>A.t),tuned_via:v.tunedHit||null,hooks:w.lines.filter(A=>/裁判|由裁|滑移|旁边/.test(String(A[1]))).map(A=>String(A[1]))}}function bh(v,I){let w=I||{};return{ref:v.tunedHit||"tmp·现搭",名:w.name||String(v.r.effect).slice(0,10)+(v.tunedHit?"·微调":"·现构"),bill:v.bill,mind:v.mind,tell:v.tell,risk:v.risk,order:Wd(v)}}return{quote:gh,calcCircuit:Zd,localJudge:vh,compileOrder:Wd,buildCastOut:hh,makePending:bh,initParams:Y,syncParams:Qe,branchOf:Pn,curKey:N,tierOf:g,gateOf:$,injuryMod:Jd,unfOf:Fd,findTuned:Hd,readableParams:Bi,budgetFrom:mh,readableBudget:fh,TUNE:u,TREE:f,FAMKEY:p,FAMS:R,SUBS:L,SUBKEYS:K,MODES:_,WINDS:e,MATS:n,ANCH:r,anchorOf:o,sliderToKJ:c,kjToSlider:d,logv:t,logTo:i,pwS:s,massKg:l,exp10:a,VERSION:"2.1.0"}});var P=globalThis.CircuitEngine??(typeof window<"u"?window.CircuitEngine:void 0);if(!P)throw new Error("[渐变带] CircuitEngine 未加载");var j0=P.VERSION,Iv=P.quote.bind(P),U0=P.calcCircuit.bind(P),M0=P.localJudge.bind(P),E$=P.compileOrder.bind(P),N0=P.buildCastOut.bind(P),C0=P.makePending.bind(P),zv=P.initParams.bind(P),Pv=P.syncParams.bind(P),w$=P.branchOf.bind(P),Z0=P.curKey.bind(P),F0=P.tierOf.bind(P),H0=P.gateOf.bind(P),J0=P.injuryMod.bind(P),W0=P.unfOf.bind(P),q0=P.findTuned.bind(P),T$=P.readableParams.bind(P),Lv=P.budgetFrom.bind(P),Av=P.readableBudget.bind(P),st=P.TUNE,V0=P.TREE,I$=P.FAMKEY,B0=P.FAMS,G0=P.SUBS,X0=P.SUBKEYS,Q0=P.MODES,K0=P.WINDS,Y0=P.MATS,e1=P.ANCH,Dv=P.anchorOf.bind(P),t1=P.sliderToKJ.bind(P),n1=P.kjToSlider.bind(P),r1=P.logv.bind(P),o1=P.logTo.bind(P),i1=P.pwS.bind(P),a1=P.massKg.bind(P),s1=P.exp10.bind(P);function z$(e){let n=new Map(e.回路库.map(o=>[o.id,o])),r=o=>o?n.get(o)??null:null;return{固定槽:e.槽位.固定槽.map(r),自由槽:e.槽位.自由槽.map(r)}}function Rv(e){let n=z$(e),r=(t,i,a)=>t==null?null:{序号:i,类型:a,id:t.id,名称:t.名称,族:t.族,分支:t.分支,参数:t.参数明细,微调预算:t.微调预算明细??void 0,基线:t.基线账单,使用次数:t.uses??void 0},o={主角:{能量kJ:e.主角.能量kJ,精神点:e.主角.精神点,爆发线kW:e.主角.爆发线kW,持续线kW:e.主角.持续线kW,战斗中:e.主角.战斗中,身体状态:e.主角.身体状态,剧情时间:e.主角.剧情时间.label},槽位清单:{固定槽:n.固定槽.map((t,i)=>r(t,i+1,"fixed")).filter(Boolean),自由槽:n.自由槽.map((t,i)=>r(t,i+1,"free")).filter(Boolean)},补给物品:e.补给物品,场景:e.场景};return JSON.stringify(o,null,1)}function Ov(e){let n=["静风","和风","劲风","风暴"][Math.min(3,Math.max(0,Math.round(e.场景.风力档/33)))]??"和风";return`风力：${e.场景.风力档}（${n}）；可塑无机物：${e.场景.可塑无机物kJ}kJ；水体在场：${e.场景.水体在场?"有":"无"}`}var P$={name:"state_change_pack",value:{type:"object",properties:{现在剧情时间:{type:"string",description:"格式：2026年11月12日，21：12"},本轮使用回路:{type:"array",items:{type:"object",properties:{回路:{type:"string",description:"槽位清单里的回路 id"},次数:{type:"integer",minimum:1,description:"本回合使用次数，必须为精确数字"}},required:["回路","次数"],additionalProperties:!1}},剧情数值变更:{type:"object",properties:{能量:{type:"number"},精神:{type:"number"},能量上限:{type:"number"},精神上限:{type:"number",description:"仅突破/觉醒类剧情允许提高"}},additionalProperties:!1},身体:{type:["object","null"],properties:{状态:{type:"string",enum:["正常","轻伤","重伤","过载透支"]}},required:["状态"],additionalProperties:!1},战斗中:{type:["boolean","null"]},新增补给:{type:"array",items:{type:"object",properties:{名称:{type:"string"},数量:{type:"integer",minimum:1},效果:{type:"object",properties:{目标:{type:"string",enum:["能量","精神"]},增加kJ:{type:"number"},增加点:{type:"number"}},required:["目标"],additionalProperties:!1}},required:["名称","数量","效果"],additionalProperties:!1}},场景变更:{type:["object","null"],properties:{风力档:{type:"number",description:"0/40/70/95 之一"},可塑无机物kJ:{type:"number"},水体在场:{type:"boolean"}},additionalProperties:!1}},required:["现在剧情时间","本轮使用回路","剧情数值变更","身体","战斗中","新增补给","场景变更"],additionalProperties:!1}};async function jv(e){let r=oe().提示词.数据AI,o={状态:Rv(e),场景:Ov(e),出手单:e.待扣单.length?e.待扣单.map(s=>`${s.ref}《${s.名称}》`).join(`
`):"（本回合无施放）",正文:Mi(4)},t;try{t=await Ui({which:"数据AI",segments:r,vars:o,jsonSchema:P$,generationId:`gb_data_${Date.now()}`})}catch(s){return{ok:!1,error:"数据AI调用失败："+(s?.message??s),忽略的回路:[]}}let i=Ci(t);if(i==null)return{ok:!1,error:"数据AI输出无法解析为 JSON",raw:t,忽略的回路:[]};let a=Tv(i,e);return a.ok?{ok:!0,pack:a.data,raw:t,忽略的回路:a.忽略的回路}:{ok:!1,error:a.error,raw:t,忽略的回路:a.忽略的回路}}var Ge=[{name:"陆安追踪表",uid:"lu_an_zhui_zong_biao",headers:["姓名","长期目标","短期目标","怎么看待主角","自洽","共情","解构","对主角的信任度"],numCols:["自洽","共情","解构","对主角的信任度"],note:`记录陆安的心理动态变化。此表有且仅有一行。

■ 陆安数值变化规则（常驻）
四条数值：自洽、共情、解构、对主角的信任度，范围0–17。
一、基本规则：单次事件最多 ±2，不确定给 ±1。大多数日常交互是 ±0。同类事件递减（第一次给满，第二次-1，第三次起+0）。
二、±1 还是 ±2：±1=日常交互短暂可控；±2=触及核心矛盾且事件后行为有持续变化；±0=积累条件。
三、自洽/共情/解构（高分=好状态）：
  自洽（她怎么对待自己）：被看见不被评判、风系魔法被认可、听懂"算了"和"接纳"的区别 加分；真实方向被否定、被迫更深入扮演面具、过载受伤被体系善待反而更走不了 扣分。
  共情（她怎么对待他人）：保护弱者后多留一步、用自己的弯路指导被误判的新生 加分；保护时伤及无辜、对圈外人冷漠升级为主动嘲讽 扣分。
  解构（她用语言面对世界）：拿自己开涮不带攻击性、主动提起自己的错路不带自毁式嘲讽 加分；幽默变伤人眼神是死的、拒绝严肃对话、拿别人的真实痛苦开玩笑 扣分。
四、对主角的信任度：退缩时不追问但下次自然接上、记住她随口说过的事、不表演共情、她出事时第一个出现、不利用她的脆弱 加分；退缩时穷追不舍、她的脆弱被当筹码、表演共情说"我完全理解"、答应她又没来、对她的自欺报以说教 扣分。达到17后锁定，只有+2才可从15/16到17。
五、多轴与门槛：同一事件可同时影响多条轴各轴独立判定，一场戏每条轴最多变动一次；信任度突破10需至少一个（自洽/共情/解构）≥6；任一轴12+的加分需此前有足够铺垫。
【强制约束】此表有且仅有一行（row_id=1）；每轮交互后更新；四条数值 0-17 整数；所有 TEXT 字段不可为 NULL 或空串。`}];function Uv(e){return Ge.find(n=>n.name===e)??null}function Ld(e){return[{role:"system",enabled:!0,note:"任务与铁律",content:`你是跑团系统的"感情分析AI"。你只负责跟踪「${e}」这个角色的内心状态，阅读最新正文，输出该表各追踪字段的最新值（JSON）。
规则：
1. 数值字段必须是整数，且只在有明确剧情依据时才变动（一般每次 ±1~3，重大事件可更大），严格遵循表 Note 里的 0-17 变化规则。
2. 文本字段用一句话概括当前状态。
3. 没有变化的字段原样输出旧值；字段必须齐全，禁止增删字段。
4. 另给一个"依据"字段，引用正文依据（50字内）。`},{role:"system",enabled:!0,note:"表规则 + 当前值（脚本生成）",content:`【表规则】
{{字段说明}}

【当前值】
{{当前值}}`},{role:"system",enabled:!0,note:"最近正文（脚本生成）",content:`【最近正文】
{{正文}}`},{role:"user",enabled:!0,note:"收尾指令",content:'请输出该表各字段的最新值 JSON（含所有字段 + "依据"）。'}]}function Zi(e){let n=oe();return(!n.感情提示词||!n.感情提示词[e]||!n.感情提示词[e].length)&&(n.感情提示词??={},n.感情提示词[e]=Ld(e),Be(n)),n.感情提示词[e]}function Mv(e,n){let r=oe();r.感情提示词??={},r.感情提示词[e]=n.map(o=>({...o})),Be(r)}function L$(e){try{let n=W();return ce(n,e)}catch{return null}}function A$(e,n){let r={},o=[];for(let t of e.headers)n.includes(t)?r[t]={type:"integer",minimum:0,maximum:17}:r[t]={type:"string"},o.push(t);return r.依据={type:"string",description:"50字内的正文依据"},o.push("依据"),{name:`feel_${e.name}`,value:{type:"object",properties:r,required:o,additionalProperties:!1}}}function Nv(e){let n=e.rows[0]??[],r={};return e.headers.forEach((o,t)=>{r[o]=n[t]??""}),r}async function D$(e){let n=Uv(e),r=L$(e);if(!r)return{ok:!1,error:`表格里没有「${e}」`,表:e};if(r.rows.length===0)return{ok:!1,error:`「${e}」还没有数据行`,表:e};let o=Nv(r),t=n?.note||r.sourceData.note||"（无表规则）",i=r.headers.map(c=>`- ${c}: ${o[c]??""}`).join(`
`),a={角色:e,字段说明:t,当前值:i,正文:Mi(4)},s=Zi(e),l=n?.numCols??[];try{let c=await Ui({which:"感情AI",segments:s,vars:a,jsonSchema:A$(r,l),generationId:`gb_feel_${Date.now()}`}),d=Ci(c);if(!d)return{ok:!1,error:"感情AI输出无法解析",表:e};let u=r.headers.map(f=>{let p=d[f];return l.includes(f)?(p=Math.round(Number(p)),Number.isFinite(p)||(p=Number(o[f]??0)),p=Math.max(0,Math.min(17,p)),String(p)):String(p??o[f]??"")});return vg(`sheet_${r.uid}`,{rowId:1,cells:u}),console.info(`[渐变带] 感情AI已更新「${e}」：${r.headers.map((f,p)=>`${f}=${u[p]}`).join("，")}`),{ok:!0,更新:{...Nv(r),依据:d.依据},表:e}}catch(c){return{ok:!1,error:"感情AI调用失败："+(c?.message??c),表:e}}}async function Cv(){let e=[];for(let n of Ge)e.push(await D$(n.name));return{ok:e.every(n=>n.ok),结果:e}}function R$(e,n){let r=1,o=new Set(e.回路库.map(t=>t.id));for(;o.has(`${n}-${String(r).padStart(2,"0")}`);)r++;return`${n}-${String(r).padStart(2,"0")}`}function Zv(e,n){let r=[],o=[],t=[],i=e.主角;if(e.待扣单.length){for(let u of e.待扣单)i.能量kJ.当前-=u.bill,i.精神点.当前-=u.mind,r.push(`⑥a 扣费《${u.名称}》能量−${u.bill}kJ（${u.锚点}）精神−${u.mind}`);e.待扣单=[],r.push("⑥a 待扣单已清空（施法即承诺）")}else r.push("⑥a 无待扣单");if(n.本轮使用回路.length)for(let u of n.本轮使用回路){let f=e.回路库.find(p=>p.id===u.回路);if(!f){r.push(`⑥b ${u.回路} 不在库，忽略`);continue}if(f.type!=="free"){r.push(`⑥b ${f.名称} 是固定回路，不计数`);continue}f.uses=(f.uses??0)+u.次数,r.push(`⑥b 《${f.名称}》uses +${u.次数} → ${f.uses}/${st.promoteN}`)}else r.push("⑥b 本轮无回路使用报告");let a=Ni(n.现在剧情时间),s=a-i.上次结算min;if(s>0){let u=1,f=1;i.战斗中?(u=0,f=0):i.身体状态==="重伤"&&(u=st.injuryRegenMul,f=st.injuryRegenMul);let p=Math.round(st.regenE_kJ_h/60*s*u),g=Math.round(st.regenMind_h/60*s*f*10)/10;i.能量kJ.当前+=p,i.精神点.当前+=g,r.push(`⑥c Δt=${s}min（${s>=60?(s/60).toFixed(1)+"h":s+"分"}）非战斗恢复：能量+${p}kJ 精神+${g}${i.战斗中?"（战斗中×0，实际未恢复）":""}`)}else r.push(`⑥c Δt=${s}min，无恢复`);i.上次结算min=a,i.剧情时间.label=wv(a),n.身体&&(r.push(`⑥e 身体：${i.身体状态} → ${n.身体.状态}`),i.身体状态=n.身体.状态),n.战斗中!=null&&(r.push(`⑥e 战斗旗：${i.战斗中} → ${n.战斗中}`),i.战斗中=n.战斗中);let l=n.剧情数值变更;if(l&&Object.keys(l).length&&(typeof l.能量=="number"&&(i.能量kJ.当前+=l.能量,r.push(`⑥e 剧情特例：能量 ${l.能量>0?"+":""}${l.能量}kJ`)),typeof l.精神=="number"&&(i.精神点.当前+=l.精神,r.push(`⑥e 剧情特例：精神 ${l.精神>0?"+":""}${l.精神}`)),typeof l.能量上限=="number"&&(i.能量kJ.上限=Math.max(1,i.能量kJ.上限+l.能量上限),r.push(`⑥e 能量上限 → ${i.能量kJ.上限}kJ`)),typeof l.精神上限=="number"&&(i.精神点.上限=Math.max(1,i.精神点.上限+l.精神上限),r.push(`⑥e 精神上限 → ${i.精神点.上限}`),o.push(`精神上限变为 ${i.精神点.上限}`))),n.场景变更){let u=n.场景变更;typeof u.风力档=="number"&&(e.场景.风力档=Math.min(95,Math.max(0,u.风力档)),r.push(`⑥e 场景：风力档 → ${e.场景.风力档}`)),typeof u.可塑无机物kJ=="number"&&(e.场景.可塑无机物kJ=Math.max(0,u.可塑无机物kJ),r.push(`⑥e 场景：可塑无机物 → ${e.场景.可塑无机物kJ}kJ`)),typeof u.水体在场=="boolean"&&(e.场景.水体在场=u.水体在场,r.push(`⑥e 场景：水体 → ${u.水体在场?"有":"无"}`))}for(let u of n.新增补给){let f={...u.效果};f.目标==="能量"?(f.增加kJ=Math.min(st.supplyMaxKJ,Math.max(1,Math.round(f.增加kJ??0))),f.增加kJ!==u.效果.增加kJ&&o.push(`补给《${u.名称}》效果被钳制为 +${f.增加kJ}kJ`),delete f.增加点):(f.增加点=Math.min(st.supplyMaxPoint,Math.max(1,Math.round(f.增加点??0))),f.增加点!==u.效果.增加点&&o.push(`补给《${u.名称}》效果被钳制为 +${f.增加点}点`),delete f.增加kJ);let p=e.补给物品.find(g=>g.名称===u.名称);p?(p.数量+=u.数量,p.效果=f,r.push(`⑥f 补给《${u.名称}》数量+${u.数量} → ${p.数量}`)):(e.补给物品.push({名称:u.名称,数量:u.数量,效果:f}),r.push(`⑥f 新增补给《${u.名称}》×${u.数量}`))}n.新增补给.length||r.push("⑥f 无新增补给");let c=i.能量kJ.当前,d=i.精神点.当前;i.能量kJ.当前=Math.min(i.能量kJ.上限,Math.max(0,i.能量kJ.当前)),i.精神点.当前=Math.min(i.精神点.上限,Math.max(0,i.精神点.当前)),c!==i.能量kJ.当前&&r.push(`⑥g 能量钳制 ${Math.round(c)} → ${Math.round(i.能量kJ.当前)}`),d!==i.精神点.当前&&r.push(`⑥g 精神钳制 ${Math.round(d*10)/10} → ${i.精神点.当前}`),c>i.能量kJ.上限&&o.push("储量透支——过载灼伤烧在接触处");for(let u of[...e.回路库])if(u.type==="free"&&(u.uses??0)>=st.promoteN){let f=R$(e,"fx"),p={...u,id:f,type:"fixed",来源:"转正",uses:null,微调预算:Lv(u.famKey,Pv(u.famKey,u.参数向量),u.基线账单.输出kJ)};p.微调预算明细=Av(p.微调预算),e.回路库.push(p),e.回路库=e.回路库.filter(g=>g.id!==u.id),e.槽位.自由槽=e.槽位.自由槽.map(g=>g===u.id?null:g),e.槽位.固定槽=e.槽位.固定槽.map(g=>g===u.id?null:g),t.push({新id:f,名称:u.名称}),o.push(`《${u.名称}》已转正为固定回路（${f}），原自由槽已空出`),r.push(`⑥h 转正：《${u.名称}》(fr) → ${f}(fx)，自由槽空出`)}return t.length||r.push("⑥h 无转正"),{log:r,notices:o,promoted:t}}var O$="操作表";function Fv(){ae(e=>{let n=e[it];return n&&(n[O$]={manual:!1,circuits:[],counts:[]}),e},{type:"chat"})}var j$=["normal","regenerate","continue","swipe"],Fi=null,zn=!1,Ad=0,Jv=null;function Dd(){return Jv}async function Hv(e){let r=ve(e)?.[0];!r||r.is_user||(r.message||"").endsWith(Id)||await St([{message_id:e,message:r.message+`
`+Id}],{refresh:"affected"})}async function Wv(){let e={log:[],notices:[]},n=oe(),r=at();if(!r)return e.error="未初始化存档（先完成开局）",e;if(Fv(),n.开关.自动结算){let o=await jv(r);for(let t of o.忽略的回路)e.notices.push(`回路报告忽略：${t.回路}×${t.次数}（${t.原因}）`);if(!o.ok)e.error=o.error,e.log.push("⑤ 契约校验拒绝："+o.error),e.log.push("（整包打回。可调整提示词后重试，或手动在工具页结算）");else if(o.pack){let t=Zv(r,o.pack);e.log.push(...t.log),e.notices.push(...t.notices)}}else e.log.push("（自动结算已关闭）");if(n.开关.感情分析){let o=await Cv();for(let t of o.结果)t.ok?e.log.push(`感情AI《${t.表}》字段已更新`):e.notices.push(`感情AI《${t.表}》失败：${t.error}`)}return await Pd(r),await In(r),await ae(o=>(o.渐变带日志={log:e.log,notices:e.notices,error:e.error??null,时间:new Date().toLocaleString()},o),{type:"chat"}),Jv=e,e}function U$(e){let n=Math.max(1,Math.round(e.频率.数据AI||1));return Ad++,Ad%n===0||Ad===1}function qv(){Fi||(Fi=Me("message_received",(e,n)=>{j$.includes(n)&&(typeof e!="number"||e<0||(async()=>{if(zn)return;let r=oe();if(!U$(r)){r.开关.状态栏标记&&await Hv(e);return}zn=!0;try{console.info("[渐变带] 开始回合结算…"),await Wv()}catch(o){console.error("[渐变带] 回合结算异常",o)}finally{r.开关.状态栏标记&&await Hv(Le()),zn=!1}})())}),console.info("[渐变带] 回合调度已启动"))}function Vv(){Fi?.stop(),Fi=null}async function Rd(){if(zn)return{log:[],notices:[],error:"上一轮结算尚未完成"};zn=!0;try{return await Wv()}finally{zn=!1}}var Bv="<渐变带开局/>";async function jd(){let e=Le(),r=ve(e)?.[0];r&&((r.message||"").includes(Bv)||await St([{message_id:e,message:r.message+`
`+Bv}],{refresh:"affected"}))}var Od=!1;async function Gv(){Od||(Od=!0,oe(),qv(),console.info("[渐变带·自由回路] 已随开局框架启动（⚡ 在「渐变带」页操作）"))}function Xv(){Vv(),Od=!1}var Ft="overview",M$="<StatusPlaceHolderImpl/>".replace(/[/&]/g,e=>"\\"+e),N$="<渐变带开局/>".replace(/[/&]/g,e=>"\\"+e);function lt(e){return String(e??"").replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n])}function Qv(e){e.innerHTML='<div class="gbfc-tabs" id="gbfc-tabs"></div><div class="gbfc-body" id="gbfc-body" style="padding:12px"></div>';let n=e.querySelector("#gbfc-tabs"),r=e.querySelector("#gbfc-body"),o=[["overview","总览"],["settings","设置"],["prompts","提示词"],["feel","感情角色"],["tools","工具"]];n.innerHTML=o.map(t=>`<span class="gbfc-tab${t[0]===Ft?" on":""}" data-t="${t[0]}">${t[1]}</span>`).join(""),n.addEventListener("click",t=>{let i=t.target.dataset?.t;i&&(Ft=i,n.querySelectorAll(".gbfc-tab").forEach(a=>a.classList.toggle("on",a.dataset.t===i)),xr(r))}),xr(r)}function xr(e){let n=oe(),r="";if(Ft==="overview"){r+="<h4>存档状态</h4>";let o=at();o?(r+=`<div class="gbfc-hint">剧情时间：${lt(o.主角.剧情时间.label)}　能量 ${Math.round(o.主角.能量kJ.当前)}/${o.主角.能量kJ.上限}kJ　精神 ${Math.round(o.主角.精神点.当前)}/${o.主角.精神点.上限}</div>`,r+=`<div class="gbfc-hint">回路库 ${o.回路库.length} 条（固定 ${o.回路库.filter(i=>i.type==="fixed").length} / 自由 ${o.回路库.filter(i=>i.type==="free").length}）　补给 ${o.补给物品.length} 种　待扣单 ${o.待扣单.length} 条</div>`):r+='<div class="gbfc-hint">未开局。到最新楼注入开局面板，完成角色创建。</div>';let t=Dd();t&&(r+=`<h4>最近回合报告</h4><div class="gbfc-log">${lt([...t.log,...t.notices.length?["【提示】"+t.notices.join(`
`)]:[],...t.error?["【错误】"+t.error]:[]].join(`
`))}</div>`),r+="<h4>快捷操作</h4>",r+='<button class="gbfc-btn" id="gbInjectOpening">注入开局面板到最新楼</button>',r+='<button class="gbfc-btn" id="gbManualTurn">手动结算一次</button>',r+='<button class="gbfc-btn" id="gbSync">手动同步快照</button>'}else if(Ft==="settings")r+="<h4>开关</h4>",Object.keys(n.开关).forEach(o=>{r+=`<label><input type="checkbox" data-sw="${o}" ${n.开关[o]?"checked":""}> ${o}</label>`}),r+="<h4>结算频率（每 N 条 AI 回复一次）</h4>",r+=`<label>数据AI <input type="number" min="1" step="1" data-freq="数据AI" value="${n.频率.数据AI}"></label>`,r+=`<label>感情AI <input type="number" min="1" step="1" data-freq="感情AI" value="${n.频率.感情AI}"></label>`,r+="<h4>API（三态：跟随酒馆 / 自定义）</h4>",["数据AI","法术AI","感情AI"].forEach(o=>{let t=n.api[o];r+=`<div class="gbfc-card"><b>${o}</b><div class="gbfc-row">
        <span class="gbfc-seg ${t.mode==="tavern"?"on":""}" data-apimode="${o}|tavern">跟随酒馆</span>
        <span class="gbfc-seg ${t.mode==="custom"?"on":""}" data-apimode="${o}|custom">自定义</span></div>`,t.mode==="custom"&&(r+=`<label>apiurl <input type="text" data-api="${o}|apiurl" value="${lt(t.apiurl||"")}"></label>`,r+=`<label>key <input type="text" data-api="${o}|key" value="${lt(t.key||"")}"></label>`,r+=`<label>model <input type="text" data-api="${o}|model" value="${lt(t.model||"")}"></label>`,r+=`<label>代理预设（可选，填了可省 apiurl/key）<input type="text" data-api="${o}|proxy_preset" value="${lt(t.proxy_preset||"")}"></label>`,r+=`<div class="gbfc-row">temperature <input type="number" step="0.1" style="width:70px" data-api="${o}|temperature" value="${t.temperature??.6}"> max_tokens <input type="number" step="128" style="width:90px" data-api="${o}|max_tokens" value="${t.max_tokens??2048}"></div>`),r+="</div>"});else if(Ft==="prompts")r+="<h4>提示词编辑</h4>",r+='<div class="gbfc-hint">三套提示词（数据 / 法术 / 感情）已独立成页，段级编辑（ON/OFF、排序、增删、恢复默认）。</div>',r+='<button class="gbfc-btn" id="gbGotoPrompts">打开「渐变带·提示词」页</button>';else if(Ft==="feel")r+="<h4>感情分析（陆安追踪表）</h4>",r+='<div class="gbfc-hint">感情数据已统一走开局框架表格通道的「陆安追踪表」（单行表：长期目标/短期目标/怎么看待主角/自洽/共情/解构/对主角的信任度）。数值规则在表的 Note 里，由感情AI每轮按正文更新。</div>',r+='<button class="gbfc-btn" id="gbGotoData">查看「渐变带·数据」页</button>';else if(Ft==="tools"){r+="<h4>工具</h4>",r+='<button class="gbfc-btn" id="gbInjectOpening2">注入开局面板标记到最新楼</button>',r+='<button class="gbfc-btn" id="gbManualTurn2">手动结算一次（数据AI+感情AI+落盘）</button>',r+='<button class="gbfc-btn" id="gbSync2">手动同步快照到最新楼</button>',r+='<button class="gbfc-btn" id="gbWipe">重置本局存档（危险）</button>',r+="<h4>状态栏 / 开局面板 HTML 模板</h4>",r+=`<div class="gbfc-hint">构建产物 dist/状态栏面板.html、dist/开局界面.html 已内联引擎。请手动导入酒馆正则：<br>
      状态栏：查找 <code>${lt(M$)}</code> → 替换为「状态栏面板.html」全文<br>
      开局面板：查找 <code>${lt(N$)}</code> → 替换为「开局界面.html」全文<br>
      这两处正则需在酒馆「正则」页手动创建（本扩展不再自动注入）。</div>`;let o=Dd();o&&(r+=`<div class="gbfc-log">${lt([...o.log,...o.error?["【错误】"+o.error]:[]].join(`
`))}</div>`)}e.innerHTML=r,C$(e)}function C$(e){e.querySelectorAll("input[data-sw]").forEach(o=>{o.addEventListener("change",()=>{let t=oe();t.开关[o.dataset.sw]=o.checked,Be(t)})}),e.querySelectorAll("input[data-freq]").forEach(o=>{o.addEventListener("change",()=>{let t=oe(),i=o.dataset.freq;t.频率[i]=Math.max(1,Math.round(+o.value||1)),Be(t)})}),e.querySelectorAll(".gbfc-seg[data-apimode]").forEach(o=>{o.addEventListener("click",()=>{let[t,i]=o.dataset.apimode.split("|"),a=oe();a.api[t].mode=i,Be(a),xr(e)})}),e.querySelectorAll("input[data-api]").forEach(o=>{o.addEventListener("change",()=>{let[t,i]=o.dataset.api.split("|"),a=oe(),s=a.api[t],l=o.value;s[i]=["temperature","max_tokens"].includes(i)?+l:l,Be(a)})});let n=(o,t)=>e.querySelector(o)?.addEventListener("click",t);n("#gbInjectOpening",()=>void jd()),n("#gbInjectOpening2",()=>void jd()),n("#gbSync",()=>void In()),n("#gbSync2",()=>void In()),n("#gbGotoPrompts",()=>Et("gradband-prompts")),n("#gbGotoData",()=>Et("gradband-data"));let r=async()=>{let o=await Rd();xr(e)};n("#gbManualTurn",()=>void r()),n("#gbManualTurn2",()=>void r()),n("#gbWipe",async()=>{confirm("确定重置本局存档？（聊天变量中的渐变带数据将删除）")&&(await ae(o=>(delete o[it],o),{type:"chat"}),xr(e))})}var Z$=["数据AI","法术AI","感情AI"],F$={数据AI:"{{状态}} {{场景}} {{出手单}} {{正文}}",法术AI:"{{描述}} {{参数}} {{亲和}} {{库索引}} {{场景}}",感情AI:"{{角色}} {{字段说明}} {{当前值}} {{正文}}"};function Kv(e){e.innerHTML=`<div style="padding:16px">
    <div class="of-h1">渐变带 · 提示词</div>
    <div class="of-hint" style="margin-bottom:12px">三套提示词（数据 / 法术 / 感情）各自独立编辑。每套里：<b>ON/OFF</b> 控制这段发不发，↑↓ 调顺序，可删可加、可恢复默认。</div>
    <div id="gbfc-pg-groups"></div>
  </div>`;let n=e.querySelector("#gbfc-pg-groups");Z$.forEach(r=>H$(n,r))}function H$(e,n){let o=oe().提示词[n].map(l=>({...l})),t=document.createElement("div");t.className="of-card",t.innerHTML=`
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
      <div class="of-h2" style="margin:0">${n} 提示词</div>
      <span class="of-hint" style="font-size:11px">占位符：<code>${F$[n]}</code></span>
    </div>
    <div class="gbfc-pg-segs" style="margin-top:8px"></div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="of-btn of-btn-ghost of-btn-sm gbfc-pg-add">＋ 添加一段</button>
      <button class="of-btn of-btn-ghost of-btn-sm gbfc-pg-preset">恢复默认</button>
    </div>`,e.appendChild(t);let i=t.querySelector(".gbfc-pg-segs");function a(){i.innerHTML=o.map((l,c)=>`
      <div class="of-card" style="margin-bottom:8px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <select class="of-select" data-role="${c}" style="width:100px">
            <option value="system" ${l.role==="system"?"selected":""}>system</option>
            <option value="user" ${l.role==="user"?"selected":""}>user</option>
            <option value="assistant" ${l.role==="assistant"?"selected":""}>assistant</option>
          </select>
          <input class="of-input" data-note="${c}" value="${(l.note||"").replace(/"/g,"&quot;")}" placeholder="备注" style="flex:1">
          <button class="of-btn of-btn-ghost of-btn-sm" data-up="${c}" title="上移">↑</button>
          <button class="of-btn of-btn-ghost of-btn-sm" data-down="${c}" title="下移">↓</button>
          <button class="of-btn of-btn-sm ${l.enabled?"of-btn-ok":"of-btn-ghost"}" data-toggle="${c}">${l.enabled?"ON":"OFF"}</button>
          <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${c}" title="删除">删</button>
        </div>
        <textarea class="of-textarea" data-content="${c}" rows="3">${(l.content||"").replace(/</g,"&lt;")}</textarea>
      </div>
    `).join("")}a();function s(){let l=oe();l.提示词[n]=o.map(c=>({...c})),Be(l),toastr?.success?.(`已保存 ${n} 提示词`)}i.addEventListener("click",l=>{let c=l.target,d=c.closest("[data-up]"),u=c.closest("[data-down]"),f=c.closest("[data-toggle]"),p=c.closest("[data-delseg]");if(d){let g=parseInt(d.getAttribute("data-up"),10);g>0&&([o[g-1],o[g]]=[o[g],o[g-1]],s(),a())}if(u){let g=parseInt(u.getAttribute("data-down"),10);g<o.length-1&&([o[g+1],o[g]]=[o[g],o[g+1]],s(),a())}if(f){let g=parseInt(f.getAttribute("data-toggle"),10);o[g].enabled=!o[g].enabled,s(),a()}if(p){let g=parseInt(p.getAttribute("data-delseg"),10);if(!confirm(`删除「${o[g]?.note||o[g]?.role||"这一段"}」？`))return;o.splice(g,1),s(),a()}}),i.addEventListener("change",l=>{let c=l.target,d=c.closest("[data-role]"),u=c.closest("[data-note]");d&&(o[parseInt(d.getAttribute("data-role"),10)].role=d.value,s()),u&&(o[parseInt(u.getAttribute("data-note"),10)].note=u.value,s())}),i.querySelectorAll("[data-content]").forEach(l=>{l.addEventListener("blur",()=>{let c=parseInt(l.getAttribute("data-content"),10);o[c].content=l.value,s()})}),t.querySelector(".gbfc-pg-add").addEventListener("click",()=>{o.push({role:"system",content:"（新分段，占位符见页首说明）",enabled:!0,note:"自定义"}),s(),a()}),t.querySelector(".gbfc-pg-preset").addEventListener("click",()=>{confirm(`恢复 ${n} 提示词为默认？当前自定义会丢失。`)&&(o.splice(0,o.length,...zd()[n].map(l=>({...l}))),s(),a())})}function ne(e){return String(e??"").replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n])}function Yv(e){let n=at();e.innerHTML=`<div style="padding:16px">
    <div class="of-h1">渐变带 · 数据</div>
    <div class="of-hint" style="margin-bottom:12px">六表运行时状态（由自由回路引擎维护，存聊天变量 <code>${ne(it)}</code>）。本页只读概览；要改数据请到「渐变带·自由回路」管理窗口。</div>
    ${n?J$(n):'<div class="of-card of-muted">未开局：先注入开局面板完成角色创建，或到管理窗口手动建档。</div>'}
  </div>`}function J$(e){let n=e.主角,r="";r+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">主角</div>
    <div class="of-hint">剧情时间：${ne(n.剧情时间?.label??"-")}　能量 ${Math.round(n.能量kJ.当前)}/${n.能量kJ.上限} kJ　精神 ${Math.round(n.精神点.当前)}/${n.精神点.上限}　爆发线 ${n.爆发线kW} kW　持续线 ${n.持续线kW} kW　身体 ${ne(n.身体状态)}　战斗中 ${n.战斗中?"是":"否"}</div>
  </div>`,r+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">补给物品（${e.补给物品.length}）</div>
    ${e.补给物品.length===0?'<div class="of-muted">（无）</div>':`<table class="of-table"><thead><tr><th>名称</th><th>数量</th><th>效果</th></tr></thead><tbody>${e.补给物品.map(c=>`<tr><td>${ne(c.名称)}</td><td>${ne(c.数量)}</td><td>${ne(JSON.stringify(c.效果))}</td></tr>`).join("")}</tbody></table>`}
  </div>`;let o=e.回路库.filter(c=>c.type==="fixed"),t=e.回路库.filter(c=>c.type==="free");r+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">回路库（固定 ${o.length} / 自由 ${t.length}）</div>
    ${e.回路库.length===0?'<div class="of-muted">（无）</div>':`<table class="of-table"><thead><tr><th>名称</th><th>类型</th><th>族·分支</th><th>效果</th><th>参数</th></tr></thead><tbody>${e.回路库.map(c=>`<tr><td>${ne(c.名称)}</td><td>${ne(c.type)}</td><td>${ne(c.族)}·${ne(c.分支)}</td><td>${ne(c.基线账单?.一句话效果??"")}</td><td>${ne(JSON.stringify(c.参数明细??c.参数向量??{}))}</td></tr>`).join("")}</tbody></table>`}
  </div>`;let i=e.槽位?.固定槽??[],a=e.槽位?.自由槽??[];r+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">槽位</div>
    <div class="of-hint">固定：${i.length?i.map((c,d)=>`${d+1}.${ne(c??"空")}`).join("　"):"（空）"}</div>
    <div class="of-hint">自由：${a.length?a.map((c,d)=>`${d+1}.${ne(c??"空")}`).join("　"):"（空）"}</div>
  </div>`,r+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">待扣单（${e.待扣单.length}）</div>
    ${e.待扣单.length===0?'<div class="of-muted">（无）</div>':`<table class="of-table"><thead><tr><th>引用</th><th>名称</th><th>计费kJ</th><th>精神</th><th>风险</th></tr></thead><tbody>${e.待扣单.map(c=>`<tr><td>${ne(c.ref)}</td><td>${ne(c.名称)}</td><td>${ne(c.bill)}</td><td>${ne(c.mind)}</td><td>${ne(c.risk)}</td></tr>`).join("")}</tbody></table>`}
  </div>`;let s=e.感情追踪??{},l=Object.keys(s);return r+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">感情追踪（${l.length} 角色）</div>
    ${l.length===0?'<div class="of-muted">（无）</div>':l.map(c=>`<div style="margin:4px 0"><b>${ne(c)}</b>：${ne(JSON.stringify(s[c]))}</div>`).join("")}
  </div>`,r+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">场景</div>
    <div class="of-hint">${ne(JSON.stringify(e.场景??{}))}</div>
  </div>`,r}var De=Ge[0]?.name??"";function Xe(e){return String(e??"").replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n])}function eh(e){let n=W();return Ae(n).find(r=>r.name===e)??null}function th(e){let n=Ge.map(c=>eh(c.name)).filter(c=>!!c);Ge.some(c=>c.name===De)||(De=Ge[0]?.name??""),e.innerHTML=`<div style="padding:12px">
    <div class="of-h1">渐变带 · 感情</div>
    <div class="of-hint" style="margin-bottom:10px">感情追踪表（每张表 = 一个角色的心理追踪；数值规则在该表 Note 里，感情AI每轮按正文更新）。左选表，右改数据与提示词。以后加角色：在「渐变带角色卡专用」建新感情表即可。</div>
    <div class="of-split">
      <div class="of-sidelist" id="gf-list" style="width:150px"></div>
      <div style="flex:1;overflow:auto;padding:0 12px" id="gf-body"></div>
    </div>
  </div>`;let r=e.querySelector("#gf-list"),o=e.querySelector("#gf-body");function t(){r.innerHTML=Ge.map(c=>`<button class="of-sidelist-btn${c.name===De?" active":""}" data-name="${c.name}">${c.name}</button>`).join(""),r.innerHTML+='<div style="border-top:1px solid #313244;margin-top:8px;padding-top:6px;font-size:11px;color:#6c7086">多表扩展：在 FEEL_TABLES 注册 + 建表即出现。</div>'}function i(){let c=eh(De),d=Ge.find(L=>L.name===De);if(!c||!d){o.innerHTML=`<p class="of-muted">表「${De}」尚未创建——先到「渐变带角色卡专用」走开局，或手动建同名表。</p>`;return}let u=c,f=d,p=Zi(De).map(L=>({...L}));o.innerHTML=`
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <div class="of-h2" style="margin:0">${Xe(u.name)}</div>
        <span class="of-muted" style="font-size:12px">${u.rows.length} 行 · 数值规则见表 Note</span>
      </div>
      <div class="of-tabs" id="gf-tabs">
        <button class="of-tab active" data-tab="data">数据</button>
        <button class="of-tab" data-tab="note">规则(Note)</button>
        <button class="of-tab" data-tab="prompt">提示词</button>
      </div>
      <div id="gf-tabbody"></div>
    `;let g="data",$=o.querySelector("#gf-tabbody");function _(){g==="data"?a($,u):g==="note"?s($,u,f):l($,p)}o.querySelector("#gf-tabs").addEventListener("click",L=>{let K=L.target.closest("[data-tab]");K&&(g=K.getAttribute("data-tab"),o.querySelectorAll("#gf-tabs .of-tab").forEach(N=>N.classList.toggle("active",N.getAttribute("data-tab")===g)),_())}),_()}function a(c,d){let u=`sheet_${d.uid}`,f='<div style="overflow-x:auto"><table class="of-table"><thead><tr><th style="width:36px">#</th>';d.headers.forEach(g=>{f+=`<th>${Xe(g)}</th>`}),f+='<th style="width:46px"></th></tr></thead><tbody>',d.rows.forEach((g,$)=>{f+=`<tr><td style="color:#6c7086">${$+1}</td>`,g.forEach((_,L)=>{f+=`<td><input data-row="${$+1}" data-col="${L}" value="${Xe(_??"")}"></td>`}),f+=`<td style="text-align:center"><button class="of-btn of-btn-danger of-btn-sm" data-del="${$+1}">删</button></td></tr>`}),f+=`<tr><td style="color:#6c7086">+</td>${d.headers.map(g=>`<td><input data-new="${Xe(g)}" placeholder="${Xe(g)}"></td>`).join("")}<td style="text-align:center"><button class="of-btn of-btn-ok of-btn-sm" id="gf-addrow">加</button></td></tr>`,f+="</tbody></table></div>",f+='<div class="of-hint" style="margin-top:6px">感情AI每轮按表规则更新第 1 行；多行 = 多个追踪对象（单行表默认只有 1 行）。</div>',c.innerHTML=f,c.querySelectorAll("[data-row]").forEach(g=>{g.addEventListener("change",()=>{let $=parseInt(g.getAttribute("data-row"),10),_=parseInt(g.getAttribute("data-col"),10);bi(u,{rowId:$,colIndex:_,value:g.value}),toastr?.success?.("已保存")})}),c.querySelectorAll("[data-del]").forEach(g=>{g.addEventListener("click",()=>{let $=parseInt(g.getAttribute("data-del"),10);confirm(`删除第 ${$} 行？`)&&(xi(u,$),Q())})});let p=c.querySelector("#gf-addrow");p&&p.addEventListener("click",()=>{let g=d.headers.map($=>c.querySelector(`[data-new="${Xe($)}"]`)?.value||null);if(g.every($=>!$)){toastr?.warning?.("行内容为空");return}yi(u,g),Q()})}function s(c,d,u){c.innerHTML=`<div class="of-card" style="white-space:pre-wrap;font-size:12px;line-height:1.7;max-height:60vh;overflow-y:auto">${Xe(u.note||d.sourceData.note||"（无规则）")}</div>
      <div class="of-hint" style="margin-top:6px">此规则注入感情AI提示词（{{字段说明}}）。修改请到「表结构/配置」页编辑该表 Note。</div>`}function l(c,d){c.innerHTML=`<div class="of-hint" style="margin-bottom:8px">这套提示词只用于「${Xe(De)}」表的感情分析。占位符：<code>{{角色}} {{字段说明}} {{当前值}} {{正文}}</code>。ON/OFF 控段、↑↓ 排序、可删可加、可恢复默认。</div>
      <div id="gf-psegs"></div>
      <div style="margin-top:8px;display:flex;gap:8px">
        <button class="of-btn of-btn-ok of-btn-sm" id="gf-padd">＋ 添加一段</button>
        <button class="of-btn of-btn-ghost of-btn-sm" id="gf-preset">恢复默认</button>
      </div>`;let u=c.querySelector("#gf-psegs");function f(){u.innerHTML=d.map((g,$)=>`
        <div class="of-card" style="margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <select class="of-select" data-role="${$}" style="width:96px">
              <option value="system" ${g.role==="system"?"selected":""}>system</option>
              <option value="user" ${g.role==="user"?"selected":""}>user</option>
              <option value="assistant" ${g.role==="assistant"?"selected":""}>assistant</option>
            </select>
            <input class="of-input" data-note="${$}" value="${Xe(g.note||"")}" placeholder="备注" style="flex:1">
            <button class="of-btn of-btn-ghost of-btn-sm" data-up="${$}">↑</button>
            <button class="of-btn of-btn-ghost of-btn-sm" data-down="${$}">↓</button>
            <button class="of-btn of-btn-sm ${g.enabled?"of-btn-ok":"of-btn-ghost"}" data-toggle="${$}">${g.enabled?"ON":"OFF"}</button>
            <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${$}">删</button>
          </div>
          <textarea class="of-textarea" data-content="${$}" rows="3">${Xe(g.content)}</textarea>
        </div>`).join("")}f();function p(){Mv(De,d),toastr?.success?.("已保存")}u.addEventListener("click",g=>{let $=g.target,_=$.closest("[data-up]"),L=$.closest("[data-down]"),K=$.closest("[data-toggle]"),N=$.closest("[data-delseg]");if(_){let R=parseInt(_.getAttribute("data-up"),10);R>0&&([d[R-1],d[R]]=[d[R],d[R-1]],p(),f())}if(L){let R=parseInt(L.getAttribute("data-down"),10);R<d.length-1&&([d[R+1],d[R]]=[d[R],d[R+1]],p(),f())}if(K){let R=parseInt(K.getAttribute("data-toggle"),10);d[R].enabled=!d[R].enabled,p(),f()}if(N){let R=parseInt(N.getAttribute("data-delseg"),10);d.splice(R,1),p(),f()}}),u.addEventListener("change",g=>{let $=g.target,_=$.closest("[data-role]"),L=$.closest("[data-note]");_&&(d[parseInt(_.getAttribute("data-role"),10)].role=_.value,p()),L&&(d[parseInt(L.getAttribute("data-note"),10)].note=L.value,p())}),u.querySelectorAll("[data-content]").forEach(g=>{g.addEventListener("blur",()=>{d[parseInt(g.getAttribute("data-content"),10)].content=g.value,p()})}),c.querySelector("#gf-padd").addEventListener("click",()=>{d.push({role:"system",content:"（新分段，占位符见页首说明）",enabled:!0,note:"自定义"}),p(),f()}),c.querySelector("#gf-preset").addEventListener("click",()=>{confirm(`恢复「${De}」默认提示词？`)&&(d.splice(0,d.length,...Ld(De).map(g=>({...g}))),p(),f())})}r.addEventListener("click",c=>{let d=c.target.closest("[data-name]");d&&(De=d.getAttribute("data-name"),t(),i())}),t(),i()}function nh(e){let n=kd();Tn(n),e.innerHTML=`
    <div style="display:flex;flex-direction:column;height:100%">
      <div class="of-hint" style="padding:6px 12px 0">独立引导会话：只显示开局引导的对话，与酒馆聊天记录互不相干；历史随当前聊天保存。</div>
      <div id="of-chat-list" style="flex:1;overflow-y:auto;padding:12px"></div>
      <div style="border-top:1px solid #313244;padding:8px;display:flex;gap:8px">
        <button class="of-btn of-btn-ghost of-btn-sm" id="of-chat-preset" title="把「原预设开局」生成的开场白直接写入第 0 楼">开场白注入</button>
        <textarea id="of-chat-input" class="of-textarea" rows="2" placeholder="和引导 AI 对话，回车发送…（说「回到第 X 步」可回退）" style="flex:1;resize:none"></textarea>
        <button class="of-btn of-btn-danger" id="of-chat-stop" title="中断生成（已发送的消息会保留）" style="display:none">停止</button>
        <button class="of-btn" id="of-chat-send">发送</button>
      </div>
    </div>
  `;let r=e.querySelector("#of-chat-list"),o=e.querySelector("#of-chat-input"),t=e.querySelector("#of-chat-send"),i=e.querySelector("#of-chat-stop");function a(p){Ct.isGenerating=p,t.disabled=p,i.style.display=p?"":"none"}function s(){let p=Ct.messages;if(p.length===0){r.innerHTML='<div style="text-align:center;color:#6c7086;margin-top:32px;font-size:13px">（还没有引导对话。发一句话开始，或回「开局」页选其他开局方式。）</div>';return}r.innerHTML=p.map(g=>{let $=(g.message||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),_=g.is_user,L=_?"of-msg-user":"of-msg-ai",K=_?"玩家":"引导 AI",N=_?`<button class="of-btn of-btn-ghost of-btn-sm" data-del="${g.message_id}">删</button>`:`<button class="of-btn of-btn-ghost of-btn-sm" data-reroll="${g.message_id}" ${Ct.isGenerating?"disabled":""}>重新生成</button> <button class="of-btn of-btn-ghost of-btn-sm" data-del="${g.message_id}">删</button>`;return`<div class="of-msg ${L}"><div class="of-msg-head"><span class="of-msg-name">${K} · #${g.message_id}</span><span class="of-msg-actions">${N}</span></div><div style="font-family:ui-monospace,monospace">${$}</div></div>`}).join(""),r.scrollTop=r.scrollHeight}s();let l=null;function c(){l?.remove(),l=null}let d=n.onStreamUpdate?.(p=>{l||(l=document.createElement("div"),l.className="of-msg of-msg-ai of-streaming",l.innerHTML='<div class="of-msg-head"><span class="of-msg-name">引导 AI · 生成中…</span></div><div class="of-stream-text" style="font-family:ui-monospace,monospace;white-space:pre-wrap;word-break:break-word"></div>',r.appendChild(l));let g=l.querySelector(".of-stream-text");g.textContent=p||"…",r.scrollTop=r.scrollHeight});i.addEventListener("click",()=>{n.stop?.()||toastr?.warning?.("当前没有可停止的生成")}),e.querySelector("#of-chat-preset").addEventListener("click",async()=>{let p=Ri();if(!p?.opening?.trim()){toastr?.warning?.("还没有预设开场白：请先到「原预设开局」面板走一遍流程生成");return}if(confirm(`把「${p.character}」（${p.gender||"男"}）线的开场白写入第 0 楼？
（会覆盖第 0 楼现有内容，{{user}} 宏由酒馆自动替换）`))try{await Oi(p.opening),toastr?.success?.("开场白已注入第 0 楼"),We()}catch(g){toastr?.error?.("注入失败："+g.message)}}),r.addEventListener("click",async p=>{let g=p.target,$=g.closest("[data-reroll]"),_=g.closest("[data-del]");if($){a(!0);try{await n.reroll(parseInt($.getAttribute("data-reroll"),10))}finally{a(!1),c(),Tn(n),s()}}else if(_){let L=parseInt(_.getAttribute("data-del"),10);if(!confirm("删除这条消息？（只删引导会话里的，不影响酒馆楼层）"))return;await n.delete(L),Tn(n),s()}});async function u(){let p=o.value.trim();if(!(!p||Ct.isGenerating)){o.value="",a(!0);try{await n.sendMessage(p)}finally{a(!1),c(),Tn(n),s()}}}t.addEventListener("click",()=>{u()}),o.addEventListener("keydown",p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),u())});let f=n.onMessagesChanged(()=>{Tn(n),s()});e._ofDispose=()=>{f(),d?.()}}function rh(e){let n=W(),r=Ae(n),o=r.length>0?`sheet_${r[0].uid}`:"";e.innerHTML='<div class="of-split"><div class="of-sidelist" id="of-tbl-list"></div><div style="flex:1;overflow:auto;padding:12px" id="of-tbl-edit"></div></div>';let t=e.querySelector("#of-tbl-list"),i=e.querySelector("#of-tbl-edit");function a(){if(r.length===0){t.innerHTML='<div style="padding:12px;color:#6c7086;font-size:12px">（无表。到"表结构/配置"页导入模板或新增表。）</div>';return}t.innerHTML=r.map(l=>`<button class="of-sidelist-btn${`sheet_${l.uid}`===o?" active":""}" data-key="sheet_${l.uid}">${l.name}</button>`).join("")}function s(){let l=n.sheets[o];if(!l){i.innerHTML='<p class="of-muted">选择左侧一张表查看 / 修改数据。</p>';return}let c=l.headers,d=l.rows,u=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px"><div class="of-h2" style="margin:0">${l.name}<span class="of-muted" style="font-size:12px;margin-left:8px">uid: ${l.uid} · ${d.length} 行</span></div><button class="of-btn of-btn-ghost of-btn-sm" id="of-tbl-refresh">刷新</button></div>`;l.purpose&&(u+=`<div class="of-hint" style="margin-bottom:10px">作用：${l.purpose}</div>`),u+='<div style="overflow-x:auto"><table class="of-table"><thead><tr><th style="width:40px">#</th>',c.forEach(g=>{u+=`<th>${g}</th>`}),u+='<th style="width:50px"></th></tr></thead><tbody>',d.forEach((g,$)=>{u+=`<tr><td style="color:#6c7086">${$+1}</td>`,g.forEach((_,L)=>{u+=`<td><input data-row="${$+1}" data-col="${L}" value="${(_??"").toString().replace(/"/g,"&quot;")}"></td>`}),u+=`<td style="text-align:center"><button class="of-btn of-btn-danger of-btn-sm" data-delrow="${$+1}">删</button></td></tr>`}),u+='<tr><td style="color:#6c7086">+</td>',c.forEach((g,$)=>{u+=`<td><input data-newcol="${$}" placeholder="${g}"></td>`}),u+='<td style="text-align:center"><button class="of-btn of-btn-ok of-btn-sm" id="of-tbl-addrow">加</button></td></tr>',u+="</tbody></table></div>",i.innerHTML=u,i.querySelectorAll("[data-row]").forEach(g=>{g.addEventListener("change",()=>{let $=parseInt(g.getAttribute("data-row"),10),_=parseInt(g.getAttribute("data-col"),10);bi(o,{rowId:$,colIndex:_,value:g.value})})}),i.querySelectorAll("[data-delrow]").forEach(g=>{g.addEventListener("click",()=>{let $=parseInt(g.getAttribute("data-delrow"),10);confirm(`删除第 ${$} 行？`)&&(xi(o,$),Q())})});let f=i.querySelector("#of-tbl-addrow");f&&f.addEventListener("click",()=>{let g=[];if(i.querySelectorAll("[data-newcol]").forEach($=>{g.push($.value)}),g.every($=>!$)){toastr?.warning?.("行内容为空");return}yi(o,g.map($=>$||null)),Q()});let p=i.querySelector("#of-tbl-refresh");p&&p.addEventListener("click",()=>Q())}t.addEventListener("click",l=>{let c=l.target.closest("[data-key]");c&&(o=c.getAttribute("data-key"),a(),s())}),a(),s()}function oh(e){let n=W(),r=Ae(n),o=r.length>0?`sheet_${r[0].uid}`:"",t="meta";e.innerHTML='<div class="of-split"><div class="of-sidelist" id="of-cfg-list"></div><div style="flex:1;overflow:auto;padding:12px" id="of-cfg-edit"></div></div>';let i=e.querySelector("#of-cfg-list"),a=e.querySelector("#of-cfg-edit");function s(){let d=r.map(u=>`<button class="of-sidelist-btn${`sheet_${u.uid}`===o?" active":""}" data-key="sheet_${u.uid}">${u.name}${u.updateConfig.group?`<span style="color:#6c7086">（${u.updateConfig.group}）</span>`:""}</button>`).join("");d+='<div style="border-top:1px solid #313244;margin-top:8px;padding-top:8px"><div class="of-sidelist-add" id="of-cfg-import">导入样例模板</div></div>',i.innerHTML=d}function l(){let d=n.sheets[o];if(!d){a.innerHTML='<p class="of-muted">选择左侧一张表，或导入样例模板。</p>';return}let u=["meta","source","config"].map(f=>`<button class="of-tab${t===f?" active":""}" data-tab="${f}">${f==="meta"?"元信息":f==="source"?"源数据":"填表参数"}</button>`).join("");a.innerHTML=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><div class="of-h2">${d.name}</div><div class="of-tabs">${u}</div><button class="of-btn of-btn-danger of-btn-sm" id="of-cfg-del" style="margin-left:auto">删除此表</button></div><div id="of-cfg-body"></div>`,c(d)}function c(d){let u=a.querySelector("#of-cfg-body");if(t==="meta")u.innerHTML=`<div style="max-width:520px">
        <label class="of-label">表名</label><input class="of-input" id="of-m-name" value="${d.name}">
        <div class="of-hint">显示在左侧列表和发给 AI 的表数据里，用中文。</div>
        <label class="of-label" style="margin-top:12px">作用（注释）</label><textarea class="of-textarea" id="of-m-purpose" rows="2">${d.purpose||""}</textarea>
        <div class="of-hint">这张表是干嘛的、什么时候需要——给自己和其它用户看的说明，不发给 AI。</div>
        <label class="of-label" style="margin-top:12px">列名（逗号分隔）</label><input class="of-input" id="of-m-headers" value="${d.headers.join(", ")}">
        <div class="of-hint">这张表有哪些列。改列数后已有行会自动对齐（多截少补空）。</div>
        <button class="of-btn" id="of-m-save" style="margin-top:12px">保存</button>
      </div>`,u.querySelector("#of-m-save").addEventListener("click",()=>{let f=u.querySelector("#of-m-name").value,p=u.querySelector("#of-m-headers").value.split(",").map($=>$.trim()).filter(Boolean),g=u.querySelector("#of-m-purpose").value;hg(o,{name:f,headers:p,purpose:g}),toastr?.success?.("已保存"),Q()});else if(t==="source"){let f=d.sourceData;u.innerHTML=`<div style="max-width:640px">
        <div class="of-hint" style="margin-bottom:8px">这一页全是写给填表 AI 看的说明书，每次填表都会随表数据一起发给它。</div>
        <label class="of-label">Note（列定义 + 维护规则）</label><textarea class="of-textarea" id="of-s-note" rows="5">${f.note||""}</textarea>
        <div class="of-hint">每列填什么、格式/取值范围是什么。写清楚 AI 才不会乱填。</div>
        <label class="of-label" style="margin-top:12px">Insert 触发（什么时候加一行）</label><textarea class="of-textarea" id="of-s-insert" rows="3">${f.insertRule||""}</textarea>
        <label class="of-label" style="margin-top:12px">Update 触发（什么时候改一行）</label><textarea class="of-textarea" id="of-s-update" rows="3">${f.updateRule||""}</textarea>
        <label class="of-label" style="margin-top:12px">Delete 触发（什么时候删一行）</label><textarea class="of-textarea" id="of-s-delete" rows="3">${f.deleteRule||""}</textarea>
        <div class="of-hint">不想让 AI 做某类操作就写「禁止。」</div>
        <button class="of-btn" id="of-s-save" style="margin-top:12px">保存</button>
      </div>`,u.querySelector("#of-s-save").addEventListener("click",()=>{bg(o,{note:u.querySelector("#of-s-note").value,insertRule:u.querySelector("#of-s-insert").value,updateRule:u.querySelector("#of-s-update").value,deleteRule:u.querySelector("#of-s-delete").value}),toastr?.success?.("已保存")})}else{let f=d.updateConfig,p=f.useGlobal!==!1,g=te().globalDefaults;u.innerHTML=`<div style="max-width:560px;font-size:13px">
        <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="of-c-enabled" ${f.enabled?"checked":""}> 参与自动填表</label>
        <div class="of-hint">关掉后这张表不参与自动填表（表格数据页仍可手动编辑）。</div>

        <label class="of-label" style="margin-top:14px">参数来源</label>
        <select class="of-select" id="of-c-src" style="max-width:280px">
          <option value="a" ${p?"selected":""}>a（跟随全局，推荐）</option>
          <option value="custom" ${p?"":"selected"}>自定义（单独调这张表）</option>
        </select>
        <div class="of-hint">a 档当前生效值：读取 <b>${g.contextRounds}</b> 轮 · 每 <b>${g.updateFrequency}</b> 条 AI 回复填一次 · 跳过 <b>${g.skipFloors}</b> 楼 · 只发最近 <b>${g.sendLatestRows}</b> 行 · 提取 <b>${g.extractTags||"无"}</b>（在「设置」页改全局默认）。</div>

        <label class="of-label" style="margin-top:14px">填表分组</label><input class="of-input" id="of-c-group" value="${(f.group||"").replace(/"/g,"&quot;")}" placeholder="留空 = 默认组">
        <div class="of-hint">组名相同的表会合并成<b>一次</b>请求，由同一个 AI 一起填；不同组名的表各自单独发一次请求。重要/复杂的表（如纪要表）单独起个组名，就能不和别的表混在一起。</div>

        <div id="of-c-customfields" style="display:${p?"none":""}">
          <label class="of-label" style="margin-top:14px">读取对话轮数</label><input class="of-input" type="number" id="of-c-rounds" value="${f.contextRounds}">
          <div class="of-hint">AI 填这张表时能往回看几轮对话。1 轮 = 你发一句 + AI 回一句。</div>

          <label class="of-label" style="margin-top:14px">填表频率（每 N 条 AI 回复填一次）</label><input class="of-input" type="number" id="of-c-freq" value="${f.updateFrequency}">
          <div class="of-hint">填 1 = 每条 AI 回复都填；填 2 = 隔一条填一次；填 999 = 基本不自动填。</div>

          <label class="of-label" style="margin-top:14px">跳过最近楼层</label><input class="of-input" type="number" id="of-c-skip" value="${f.skipFloors}">
          <div class="of-hint">最近 N 条消息不参与本次填表（比如刚生成还没读完）。</div>

          <label class="of-label" style="margin-top:14px">只发最近 N 行（-1 = 全部行）</label><input class="of-input" type="number" id="of-c-latest" value="${f.sendLatestRows}">
          <div class="of-hint">行数很多的表（如纪要表）可以只发最近 10 行，省 token。</div>

          <label class="of-label" style="margin-top:14px">自定义行渲染模板（高级，可留空）</label><textarea class="of-textarea" id="of-c-tpl" rows="2">${f.sendRowsTemplate||""}</textarea>
          <div class="of-hint">留空用默认格式（行号 + 逗号分隔）。可用变量：{{row_id}} {{cells}} {{col_0}} {{列名}}。</div>

          <label class="of-label" style="margin-top:14px">正文提取标签</label><textarea class="of-textarea" id="of-c-ex" rows="2">${f.extractTags||""}</textarea>
          <div class="of-hint">只把「开始|结束」之间的正文发给这张表，一对写一行。留空 = 全部正文。例：正文被 <code>&lt;content&gt;…&lt;/content&gt;</code> 包着，就填 <code>&lt;content&gt;|&lt;/content&gt;</code>（会自动取最后一对）。</div>

          <label class="of-label" style="margin-top:14px">正文排除标签</label><textarea class="of-textarea" id="of-c-exc" rows="2">${f.excludeTags||""}</textarea>
          <div class="of-hint">把「开始|结束」之间的内容从正文里删掉再发（如思考过程、OOC）。</div>
        </div>

        <button class="of-btn" id="of-c-save" style="margin-top:14px">保存</button>
      </div>`,u.querySelector("#of-c-save").addEventListener("click",()=>{let _=u.querySelector("#of-c-src").value,L={enabled:u.querySelector("#of-c-enabled").checked,group:u.querySelector("#of-c-group").value.trim()};_==="a"?sd(o,{...L,useGlobal:!0}):sd(o,{...L,useGlobal:!1,contextRounds:parseInt(u.querySelector("#of-c-rounds").value,10),updateFrequency:parseInt(u.querySelector("#of-c-freq").value,10),skipFloors:parseInt(u.querySelector("#of-c-skip").value,10),sendLatestRows:parseInt(u.querySelector("#of-c-latest").value,10),sendRowsTemplate:u.querySelector("#of-c-tpl").value,extractTags:u.querySelector("#of-c-ex").value,excludeTags:u.querySelector("#of-c-exc").value}),toastr?.success?.("已保存"),s()});let $=u.querySelector("#of-c-src");$.addEventListener("change",()=>{u.querySelector("#of-c-customfields").style.display=$.value==="a"?"none":""})}}i.addEventListener("click",d=>{let u=d.target.closest("[data-key]");if(u){o=u.getAttribute("data-key"),t="meta",s(),l();return}if(d.target.id==="of-cfg-import"){if(!confirm("导入样例模板会清空当前所有表数据，继续？"))return;Je(JSON.parse(Di)),Q(),toastr?.success?.("已导入样例模板")}}),a.addEventListener("click",d=>{let u=d.target.closest("[data-tab]");if(u){t=u.getAttribute("data-tab"),l();return}if(d.target.id==="of-cfg-del"){if(!confirm("删除整张表？数据一并清除。"))return;xg(o),Q()}}),s(),l()}function Ud(e){let n=te(),r=n.fillApi,o=n.dialogueApi,t=n.globalDefaults;e.innerHTML=`<div style="padding:16px;max-width:680px">
    <div class="of-h2" style="color:#89b4fa">界面</div>
    <label style="display:flex;align-items:center;gap:8px;margin-top:8px">
      <input type="checkbox" id="of-u-toggle"> 显示悬浮按钮（🎬，可拖拽移动）
    </label>
    <div class="of-hint">关掉后仍可用 /opening 命令或在酒馆扩展设置里恢复。</div>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">填表 API</div>
    <div class="of-hint">填表用的 AI。可以「跟随酒馆当前 API」什么都不配，也可以「自定义」单独配一个（推荐：不占用正文模型，选便宜快速的即可）。</div>
    <select class="of-select" id="of-a-mode" style="margin-top:8px;max-width:280px">
      <option value="custom" ${r.mode==="custom"?"selected":""}>自定义 API（独立配置）</option>
      <option value="tavern" ${r.mode==="tavern"?"selected":""}>跟随酒馆当前 API</option>
    </select>
    <label style="display:flex;align-items:center;gap:8px;margin-top:10px"><input type="checkbox" id="of-a-stream" ${r.stream!==!1?"checked":""}> 填表请求使用流式传输</label>
    <div class="of-hint">走反代建议开：非流式请求更容易被反代识别。开启不影响填表结果——解析仍用完整返回；填表的流式内容不会显示在对话页。</div>
    <div id="of-a-custom" style="display:${r.mode==="tavern"?"none":""};margin-top:8px">
      <label class="of-label">代理预设（优先用）</label><input class="of-input" id="of-a-proxy" value="${r.proxyPreset||""}" placeholder="酒馆「代理」功能里保存的预设名">
      <div class="of-hint">酒馆顶栏插头图标里配好的代理预设名。填了它，下面的 URL / Key 都不用再填。</div>
      <label class="of-label" style="margin-top:12px">API URL（不用代理时直连地址）</label><input class="of-input" id="of-a-url" value="${r.apiUrl||""}" placeholder="如 https://api.deepseek.com/v1">
      <div class="of-hint">OpenAI 兼容格式 的接口地址，仅当上面代理预设留空时生效。</div>
      <label class="of-label" style="margin-top:12px">API Key</label><input class="of-input" type="password" id="of-a-key" value="${r.apiKey||""}" placeholder="对应接口的密钥">
      <label class="of-label" style="margin-top:12px">模型</label><input class="of-input" id="of-a-model" value="${r.model||""}" placeholder="如 deepseek-chat、gpt-4o-mini">
      <div class="of-hint">专门负责填表的模型。选便宜快速的即可。</div>
      <div class="of-grid3" style="margin-top:12px">
        <div>
          <label class="of-label">温度</label><input class="of-input" type="number" step="0.1" id="of-a-temp" value="${r.temperature}">
          <div class="of-hint">0～1，越高越发散，填表建议 0.3～0.7</div>
        </div>
        <div>
          <label class="of-label">最大回复长度</label><input class="of-input" type="number" id="of-a-max" value="${r.maxTokens}">
          <div class="of-hint">AI 单次填表回复的上限，一般 2048 够用</div>
        </div>
        <div>
          <label class="of-label">接口类型</label><input class="of-input" id="of-a-src" value="${r.source||""}" placeholder="保持 openai">
          <div class="of-hint">OpenAI 兼容接口就保持默认，不用改</div>
        </div>
      </div>
    </div>
    <button class="of-btn" id="of-a-save" style="margin-top:12px">保存</button>
    <div class="of-hint">切到「跟随酒馆」时已填的自定义配置会保留，切回来还在。</div>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">引导对话 API（开局引导的 AI）</div>
    <div class="of-hint">「AI 对话」页里陪你做开局引导的 AI，和填表 API 相互独立。默认直接用酒馆当前连接的 API；想用别的模型就切「自定义」。</div>
    <select class="of-select" id="of-d-mode" style="margin-top:8px;max-width:280px">
      <option value="tavern" ${o.mode==="tavern"?"selected":""}>跟随酒馆当前 API</option>
      <option value="custom" ${o.mode==="custom"?"selected":""}>自定义 API（独立配置）</option>
    </select>
    <div id="of-d-custom" style="display:${o.mode==="custom"?"":"none"};margin-top:8px">
      <label class="of-label">代理预设（优先用）</label><input class="of-input" id="of-d-proxy" value="${o.proxyPreset||""}" placeholder="酒馆「代理」功能里保存的预设名">
      <label class="of-label" style="margin-top:12px">API URL（不用代理时直连地址）</label><input class="of-input" id="of-d-url" value="${o.apiUrl||""}" placeholder="如 https://api.deepseek.com/v1">
      <label class="of-label" style="margin-top:12px">API Key</label><input class="of-input" type="password" id="of-d-key" value="${o.apiKey||""}">
      <label class="of-label" style="margin-top:12px">模型</label><input class="of-input" id="of-d-model" value="${o.model||""}" placeholder="引导对话用的模型名">
      <div class="of-grid3" style="margin-top:12px">
        <div>
          <label class="of-label">温度</label><input class="of-input" type="number" step="0.1" id="of-d-temp" value="${o.temperature}">
          <div class="of-hint">引导对话建议 0.7～1，太低说话发死</div>
        </div>
        <div>
          <label class="of-label">最大回复长度</label><input class="of-input" type="number" id="of-d-max" value="${o.maxTokens}">
          <div class="of-hint">引导回复可能较长，建议 2048 以上</div>
        </div>
        <div>
          <label class="of-label">接口类型</label><input class="of-input" id="of-d-src" value="${o.source||""}" placeholder="保持 openai">
        </div>
      </div>
    </div>
    <button class="of-btn" id="of-d-save" style="margin-top:12px">保存对话 API</button>
    <div class="of-hint">保存后立即生效（已有引导对话历史不受影响）。</div>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">全局默认</div>
    <div class="of-hint">单张表没有单独设置时，用这里的值兜底（单表在「表结构/配置」页设置）。</div>
    <div class="of-grid2" style="margin-top:8px">
      <div>
        <label class="of-label">读取对话轮数</label><input class="of-input" type="number" id="of-g-rounds" value="${t.contextRounds}">
        <div class="of-hint">AI 填表时能看到几轮对话。1 轮 = 你发一句 + AI 回一句</div>
      </div>
      <div>
        <label class="of-label">填表频率</label><input class="of-input" type="number" id="of-g-freq" value="${t.updateFrequency}">
        <div class="of-hint">每累计 N 条 AI 回复填一次表。填 2 = 隔一条填一次</div>
      </div>
      <div>
        <label class="of-label">跳过最近楼层</label><input class="of-input" type="number" id="of-g-skip" value="${t.skipFloors}">
        <div class="of-hint">最近 N 条消息不参与本次填表（刚生成还没读完时用）</div>
      </div>
      <div>
        <label class="of-label">只发最近 N 行</label><input class="of-input" type="number" id="of-g-latest" value="${t.sendLatestRows}">
        <div class="of-hint">a 档表格的行数上限，-1 = 全部行</div>
      </div>
    </div>
    <label class="of-label" style="margin-top:12px">正文提取标签（全局默认）</label><textarea class="of-textarea" id="of-g-ex" rows="2">${t.extractTags||""}</textarea>
    <div class="of-hint">只把「开始|结束」之间的正文发给 AI，一对写一行。留空 = 不过滤，全部正文都发。例：输出被 <code>&lt;content&gt;…&lt;/content&gt;</code> 包着，就填 <code>&lt;content&gt;|&lt;/content&gt;</code>。</div>
    <label class="of-label" style="margin-top:12px">正文排除标签（全局默认）</label><textarea class="of-textarea" id="of-g-exc" rows="2">${t.excludeTags||""}</textarea>
    <div class="of-hint">把「开始|结束」之间的内容从正文里删掉再发（如思考过程、代码块）。</div>
    <button class="of-btn" id="of-g-save" style="margin-top:12px">保存</button>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">调度</div>
    <label style="display:flex;align-items:center;gap:8px;margin-top:8px"><input type="checkbox" id="of-s-auto" ${n.autoFillEnabled?"checked":""}> 启用自动填表</label>
    <div class="of-hint">开着 = 每条 AI 回复后自动按各表的频率和分组填表；关了只能在「表格数据」页手动填。</div>
    <label class="of-label" style="margin-top:12px">失败重试次数</label><input class="of-input" type="number" id="of-s-retry" value="${n.maxRetries}" style="width:120px">
    <div class="of-hint">某次请求失败时静默重试几次，填 0 = 不重试。</div>
  </div>`;let i=e.querySelector("#of-u-toggle");i.checked=n.floatingToggleEnabled,i.addEventListener("change",()=>{og(i.checked),toastr?.info?.(i.checked?"已显示悬浮按钮":"已隐藏悬浮按钮（可在酒馆扩展设置里恢复）")});let a=e.querySelector("#of-a-mode");a.addEventListener("change",()=>{e.querySelector("#of-a-custom").style.display=a.value==="custom"?"":"none"}),e.querySelector("#of-a-save").addEventListener("click",()=>{let u=a.value==="tavern"?"tavern":"custom",f=e.querySelector("#of-a-stream").checked;u==="custom"?Sn({fillApi:{...r,mode:u,stream:f,proxyPreset:e.querySelector("#of-a-proxy").value,apiUrl:e.querySelector("#of-a-url").value,apiKey:e.querySelector("#of-a-key").value,model:e.querySelector("#of-a-model").value,temperature:parseFloat(e.querySelector("#of-a-temp").value)||.6,maxTokens:parseInt(e.querySelector("#of-a-max").value,10)||2048,source:e.querySelector("#of-a-src").value||"openai"}}):Sn({fillApi:{...r,mode:u,stream:f}}),toastr?.success?.(u==="tavern"?"填表已切换为跟随酒馆当前 API":"已保存发送 API 配置（自定义）")});let s=e.querySelector("#of-d-mode");s.addEventListener("change",()=>{e.querySelector("#of-d-custom").style.display=s.value==="custom"?"":"none"}),e.querySelector("#of-d-save").addEventListener("click",()=>{let u=s.value==="custom"?"custom":"tavern";u==="custom"?cd({mode:u,proxyPreset:e.querySelector("#of-d-proxy").value,apiUrl:e.querySelector("#of-d-url").value,apiKey:e.querySelector("#of-d-key").value,model:e.querySelector("#of-d-model").value,temperature:parseFloat(e.querySelector("#of-d-temp").value)||.7,maxTokens:parseInt(e.querySelector("#of-d-max").value,10)||2048,source:e.querySelector("#of-d-src").value||"openai"}):cd({mode:u}),Zt(),toastr?.success?.(u==="custom"?"已保存引导对话 API（自定义）":"引导对话已切换为跟随酒馆当前 API")}),e.querySelector("#of-g-save").addEventListener("click",()=>{Sn({globalDefaults:{...t,contextRounds:parseInt(e.querySelector("#of-g-rounds").value,10)||3,updateFrequency:parseInt(e.querySelector("#of-g-freq").value,10)||3,skipFloors:parseInt(e.querySelector("#of-g-skip").value,10)||0,sendLatestRows:(()=>{let u=parseInt(e.querySelector("#of-g-latest").value,10);return isNaN(u)?-1:u})(),extractTags:e.querySelector("#of-g-ex").value,excludeTags:e.querySelector("#of-g-exc").value}}),toastr?.success?.("已保存全局默认")});let l=e.querySelector("#of-s-auto"),c=e.querySelector("#of-s-retry"),d=()=>{X("autoFillEnabled",l.checked),X("maxRetries",parseInt(c.value,10)||0),l.checked?ki():Ei(),toastr?.success?.("已保存（自动填表"+(l.checked?"已开启":"已关闭")+"）")};l.addEventListener("change",d),c.addEventListener("change",d)}function ih(e){let n=Ie(),r=n.promptTemplate.segments.map(s=>({...s})),o=n.promptTemplate.instructions;e.innerHTML=`<div style="padding:16px">
    <div style="display:flex;align-items:center;margin-bottom:12px"><div class="of-h2">提示词模板</div><button class="of-btn of-btn-ghost of-btn-sm" id="of-pt-reset" style="margin-left:auto">恢复默认</button></div>
    <div class="of-hint" style="margin-bottom:12px">每次填表发给 AI 的完整提示词，由下面这些「段」按顺序拼成。每段里的占位符会被替换成实际内容；<b>ON/OFF</b> 控制这段发不发，↑↓ 调整顺序，可以随意添加、删除段。</div>

    <div class="of-card" style="margin-bottom:12px">
      <div class="of-h2" style="font-size:13px">可用占位符</div>
      <table class="of-table"><tbody>
        ${Vf.map(s=>`<tr><td style="width:190px"><code style="color:#a6e3a1">${s.name}</code></td><td style="color:#cdd6f4">${s.desc}</td></tr>`).join("")}
      </tbody></table>
      <div class="of-hint" style="margin-top:6px">写错的占位符会原样保留在提示词里，方便发现拼写错误。</div>
    </div>

    <label class="of-label">填表指令 instructions（{{instructions}} 的内容）</label>
    <textarea class="of-textarea" id="of-pt-instr" rows="4">${o||""}</textarea>
    <div class="of-hint">AI 填表的行为准则：什么时候该加行/改行、数值范围等。会替换到带 {{instructions}} 占位符的段里。</div>

    <div id="of-pt-segs" style="margin-top:12px"></div>
    <div style="margin-top:8px"><button class="of-btn of-btn-ok of-btn-sm" id="of-pt-add">＋ 添加一段</button></div>
  </div>`;let t=e.querySelector("#of-pt-segs");function i(){t.innerHTML=r.map((s,l)=>`
      <div class="of-card">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <select class="of-select" data-role="${l}" style="width:100px" title="这段以什么身份发送">
            <option value="system" ${s.role==="system"?"selected":""}>system</option>
            <option value="user" ${s.role==="user"?"selected":""}>user</option>
            <option value="assistant" ${s.role==="assistant"?"selected":""}>assistant</option>
          </select>
          <input class="of-input" data-note="${l}" value="${(s.note||"").replace(/"/g,"&quot;")}" placeholder="备注（只给自己看）" style="flex:1">
          <button class="of-btn of-btn-ghost of-btn-sm" data-up="${l}" title="上移">↑</button>
          <button class="of-btn of-btn-ghost of-btn-sm" data-down="${l}" title="下移">↓</button>
          <button class="of-btn of-btn-sm ${s.enabled?"of-btn-ok":"of-btn-ghost"}" data-toggle="${l}" title="发送 / 不发送这段">${s.enabled?"ON":"OFF"}</button>
          <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${l}" title="删除这段">删</button>
        </div>
        <textarea class="of-textarea" data-content="${l}" rows="3" placeholder="这段的内容，可用上面列表里的占位符">${(s.content||"").replace(/</g,"&lt;")}</textarea>
      </div>
    `).join("")}i();function a(){o=e.querySelector("#of-pt-instr").value,_g({segments:r.map(s=>({...s})),instructions:o}),toastr?.success?.("已保存")}t.addEventListener("click",s=>{let l=s.target,c=l.closest("[data-up]"),d=l.closest("[data-down]"),u=l.closest("[data-toggle]"),f=l.closest("[data-delseg]");if(c){let p=parseInt(c.getAttribute("data-up"),10);p>0&&([r[p-1],r[p]]=[r[p],r[p-1]],a(),i())}if(d){let p=parseInt(d.getAttribute("data-down"),10);p<r.length-1&&([r[p+1],r[p]]=[r[p],r[p+1]],a(),i())}if(u){let p=parseInt(u.getAttribute("data-toggle"),10);r[p].enabled=!r[p].enabled,a(),i()}if(f){let p=parseInt(f.getAttribute("data-delseg"),10),g=r[p]?.note||r[p]?.role||"这一段";if(!confirm(`删除「${g}」？`))return;r.splice(p,1),a(),i()}}),t.addEventListener("change",s=>{let l=s.target,c=l.closest("[data-role]"),d=l.closest("[data-note]");c&&(r[parseInt(c.getAttribute("data-role"),10)].role=c.value,a()),d&&(r[parseInt(d.getAttribute("data-note"),10)].note=d.value,a())}),t.querySelectorAll("[data-content]").forEach(s=>{s.addEventListener("blur",()=>{let l=parseInt(s.getAttribute("data-content"),10);r[l].content=s.value,a()})}),e.querySelector("#of-pt-instr").addEventListener("blur",a),e.querySelector("#of-pt-add").addEventListener("click",()=>{r.push({role:"system",content:"",enabled:!0,note:""}),a(),i(),t.lastElementChild?.scrollIntoView({behavior:"smooth",block:"center"})}),e.querySelector("#of-pt-reset").addEventListener("click",()=>{if(!confirm("恢复默认提示词模板？当前自定义（含添加/删除的段）将丢失。"))return;Sg(),toastr?.info?.("已恢复默认");let s=Ie();r.splice(0,r.length,...s.promptTemplate.segments.map(l=>({...l}))),o=s.promptTemplate.instructions,e.querySelector("#of-pt-instr").value=o,i()})}function Md(e){let n=te(),r=Le();e.innerHTML=`<div style="padding:16px;max-width:680px">
    <div style="display:flex;align-items:center;margin-bottom:4px">
      <div class="of-h1" style="margin:0">工具</div>
      <span class="of-badge of-badge-idle" style="margin-left:10px">开局框架 v${gr}</span>
    </div>
    <div class="of-hint" style="margin-bottom:16px">手动填表、楼层变量同步、清理等实用操作都在这一页。</div>

    <div class="of-card">
      <div class="of-h2" style="font-size:13px">手动填表</div>
      <div class="of-hint" style="margin-bottom:8px">立即对所有「参与自动填表」的表跑一次填表（按各自分组分别请求）。自动填表关着时也能用。</div>
      <button class="of-btn" id="of-tool-fill">立即填表</button>
      <span class="of-hint" id="of-tool-fill-state" style="margin-left:10px"></span>
    </div>

    <div class="of-card">
      <div class="of-h2" style="font-size:13px">数据同步（楼层变量）</div>
      <div class="of-hint" style="margin-bottom:8px">把当前<b>所有表</b>的快照写进楼层变量 <code>stat_data.开局框架</code>（形状：<code>{ 表名: [{列名: 值}…] }</code>），供状态栏 / 前端界面从消息变量读取。写在最新楼，同一楼重复同步会覆盖。</div>
      <label style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        <input type="checkbox" id="of-tool-autosync"> 自动同步（收到 AI 回复、以及每次填表完成后，自动写入对应楼层）
      </label>
      <div style="display:flex;gap:8px;align-items:center;margin-top:8px">
        <button class="of-btn" id="of-tool-sync">手动同步到最新楼</button>
        <span class="of-hint" id="of-tool-sync-state"></span>
      </div>
      <div class="of-hint" style="margin-top:4px">最新楼当前是：${r<0?"（还没有消息）":`第 ${r} 楼`}。手动改过表格数据后，点一下手动同步即可刷新楼层变量。</div>
      <label style="display:flex;align-items:center;gap:8px;margin-top:10px">
        <input type="checkbox" id="of-tool-marker"> 对话末尾加 <code>&lt;StatusPlaceHolderImpl/&gt;</code>（状态栏渲染锚点）
      </label>
      <div class="of-hint">和「状态栏数据同步」脚本同款行为：收到 AI 回复后，若楼末没有标记就补一个（用户楼不处理、已有不重复）。开启时会顺手给最新 AI 楼补一次。会修改消息内容，介意慎开。</div>
    </div>

    <div class="of-card">
      <div class="of-h2" style="font-size:13px">清除楼层同步数据</div>
      <div class="of-hint" style="margin-bottom:8px">同步数据存在每楼的变量里，聊天文件会慢慢变大。定期清掉旧楼层的同步数据即可（只删 <code>stat_data.开局框架</code>，不碰消息内容和其它变量）。</div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <span>从第</span><input class="of-input" type="number" id="of-tool-clear-from" value="0" style="width:90px">
        <span>楼 到 第</span><input class="of-input" type="number" id="of-tool-clear-to" value="${Math.max(0,r)}" style="width:90px">
        <span>楼</span>
        <button class="of-btn of-btn-danger" id="of-tool-clear">清除</button>
      </div>
      <div class="of-hint" id="of-tool-clear-state" style="margin-top:6px"></div>
    </div>
  </div>`;let o=e.querySelector("#of-tool-fill"),t=e.querySelector("#of-tool-fill-state");o.addEventListener("click",async()=>{if(Mg()){toastr?.warning?.("正在填表中，请稍候");return}o.disabled=!0,t.textContent="填表中…";try{await gd({reason:"manual"})}finally{o.disabled=!1,t.textContent=""}});let i=e.querySelector("#of-tool-autosync");i.checked=n.autoSyncEnabled,i.addEventListener("change",()=>{Og(i.checked),toastr?.success?.(i.checked?"已开启自动同步":"已关闭自动同步")});let a=e.querySelector("#of-tool-sync"),s=e.querySelector("#of-tool-sync-state");a.addEventListener("click",async()=>{a.disabled=!0,s.textContent="同步中…";let u=await We();a.disabled=!1,u.ok?(s.textContent=`已写入第 ${u.floor} 楼（${u.tables} 张表）`,toastr?.success?.(`已同步 ${u.tables} 张表到第 ${u.floor} 楼变量`)):(s.textContent="",toastr?.error?.("同步失败："+(u.error||"未知错误")))});let l=e.querySelector("#of-tool-marker");l.checked=n.statusPlaceholderEnabled,l.addEventListener("change",()=>{Hg(l.checked),toastr?.success?.(l.checked?"已开启状态栏标记":"已关闭状态栏标记")});let c=e.querySelector("#of-tool-clear"),d=e.querySelector("#of-tool-clear-state");c.addEventListener("click",async()=>{let u=parseInt(e.querySelector("#of-tool-clear-from").value,10),f=parseInt(e.querySelector("#of-tool-clear-to").value,10);if(isNaN(u)||isNaN(f)){toastr?.warning?.("请填写楼层范围");return}if(!confirm(`清除第 ${Math.min(u,f)}～${Math.max(u,f)} 楼的同步数据？（只删 stat_data.开局框架，不动消息内容）`))return;c.disabled=!0,d.textContent="清除中…";let p=await Dg(u,f);c.disabled=!1,d.textContent=`已扫描 ${p.scanned} 楼，清除 ${p.cleared} 楼的同步数据`,toastr?.success?.(`已清除 ${p.cleared} 楼的同步数据`)})}var ah=[{name:"preset",label:"剑与汽水角色卡专用",icon:"📜",order:3,render:_v,modes:["presets"]},{name:"start",label:"开局",icon:"🎬",order:5,render:dv,modes:["presets"]},{name:"chat",label:"AI 对话",icon:"💬",order:10,render:nh,modes:["presets"]},{name:"tables",label:"表格数据",icon:"📋",order:20,render:rh,modes:["presets"]},{name:"sheetconf",label:"表结构/配置",icon:"⚙️",order:30,render:oh,modes:["presets"]},{name:"settings",label:"设置",icon:"🔌",order:40,render:Ud,modes:["presets"]},{name:"prompt",label:"提示词模板",icon:"📝",order:50,render:ih,modes:["presets"]},{name:"tools",label:"工具",icon:"🧰",order:90,render:Md,modes:["presets"]},{name:"gradband",label:"渐变带·自由回路",icon:"⚡",order:6,render:Qv,modes:["gradband"]},{name:"gradband-prompts",label:"渐变带·提示词",icon:"✍️",order:7,render:Kv,modes:["gradband"]},{name:"gradband-data",label:"渐变带·数据",icon:"🗂️",order:8,render:Yv,modes:["gradband"]},{name:"gradband-feel",label:"渐变带·感情",icon:"💗",order:9,render:th,modes:["gradband"]},{name:"settings",label:"设置",icon:"🔌",order:40,render:Ud,modes:["gradband"]},{name:"tools",label:"工具",icon:"🧰",order:90,render:Md,modes:["gradband"]}],Tt="start",ct=null,Wi=null,Hi=null,Ji=!1;function Nd(){return te().appMode??"presets"}function $r(){let e=Nd();return ah.filter(n=>!n.modes||n.modes.includes(e))}function sh(){let e=ct?._ofDispose;if(typeof e=="function")try{e()}catch(n){console.warn("[开局框架面板] 页面清理失败",n)}}function lh(e){e.className="of-panel",e.innerHTML=`
    <div class="of-modepicker" id="of-modepicker">
      <button class="of-modebtn" data-mode="presets">📜 剑与汽水</button>
      <button class="of-modebtn" data-mode="gradband">⚡ 渐变带</button>
    </div>
    <nav class="of-nav" id="of-nav"></nav>
    <button class="of-collapse" id="of-collapse">◀</button>
    <div class="of-content" id="of-page"></div>
  `;let n=e.querySelector("#of-nav");ct=e.querySelector("#of-page"),Wi=n,Hi=e.querySelector("#of-modepicker");let r=e.querySelector("#of-collapse");function o(){if(!Hi)return;let i=Nd();Hi.querySelectorAll(".of-modebtn").forEach(a=>{a.classList.toggle("on",a.getAttribute("data-mode")===i)})}Hi.addEventListener("click",i=>{let a=i.target.closest("[data-mode]");if(!a)return;let s=a.getAttribute("data-mode");if(s===Nd())return;X("appMode",s),o(),t();let l=$r();l.some(c=>c.name===Tt)?Q():(Tt=l[0]?.name??"start",Et(Tt))});function t(){Wi&&(Wi.innerHTML=$r().map(i=>`<button class="of-nav-btn${i.name===Tt?" active":""}" data-page="${i.name}">${i.icon} ${i.label}</button>`).join(""))}n.addEventListener("click",i=>{let a=i.target.closest("[data-page]");a&&Et(a.getAttribute("data-page"))}),r.addEventListener("click",()=>{Ji=!Ji,n.style.display=Ji?"none":"",r.textContent=Ji?"▶":"◀"}),o(),t(),Et(Tt)}function Et(e){let r=$r().find(o=>o.name===e)??$r()[0]??ah[0];if(!(!r||!ct)){Tt=r.name,Wi?.querySelectorAll(".of-nav-btn").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-page")===Tt)}),sh(),ct.innerHTML="";try{r.render(ct)}catch(o){ct.innerHTML=`<div style="padding:16px;color:#f38ba8">页面渲染失败: ${o.message}</div>`,console.error(`[开局框架面板] 页面 ${r.name} 渲染失败`,o)}}}function Q(){if(!ct)return;sh(),ct.innerHTML="";let e=$r().find(n=>n.name===Tt);if(e)try{e.render(ct)}catch(n){console.error(n)}}var Vi="__OPENING_FRAMEWORK_INSTANCE__",uh="of-toggle",qi=!1,_r=!1,ch=!1,dh=new pi;function Cd(){mr()&&Q()}async function W$(){di({onToggle:Cd}),cg()||(console.error("[开局框架] TavernHelper API 不可用（需先安装并启用酒馆助手/TavernHelper），变量与生成功能将不可用"),toastr?.error?.("开局框架：TavernHelper 不可用，请确认已启用酒馆助手插件"));let n=eg().querySelector("#of-content");lh(n),sg(),dh.addDisposer(Me(vi.CHAT_CHANGED,()=>{Ng()}).stop),Ie().autoFillEnabled&&ki(),jg(),Jg(),Gv();let o=window[Vi];o&&(o.status="ready"),setTimeout(()=>{_r||document.getElementById(uh)||(console.warn("[开局框架] 未检测到悬浮球，已补挂"),di({onToggle:Cd}))},3e3),console.info(`[开局框架] v${gr} 初始化完成（悬浮球 / /opening 打开窗口）`)}function ph(){qi||_r||(qi=!0,W$().catch(e=>{console.error("[开局框架] 初始化失败：",e),qi=!1;try{document.getElementById(uh)||di({onToggle:Cd})}catch{}ch||(ch=!0,setTimeout(()=>ph(),2e3)),toastr?.error?.("开局框架初始化失败："+e.message)}))}function q$(){_r||(_r=!0,lg(),Ei(),Xv(),dh.dispose(),tg(),ig(),delete window[Vi],_r=!1,qi=!1)}(function(){let n=window;if(n[Vi]){console.warn("[开局框架] 已存在活跃实例，跳过重复初始化");return}n[Vi]={version:gr,source:"extension",status:"initializing",destroy:q$};let r=()=>{try{ph()}catch(o){console.error("[开局框架] 启动异常：",o)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):setTimeout(r,100)})();
