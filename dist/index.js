function Ye(t,e,n){return Math.max(e,Math.min(t,n))}function Ie(t,e,n,r){return{x:Math.max(0,Math.min(t,Math.max(0,window.innerWidth-n))),y:Math.max(0,Math.min(e,Math.max(0,window.innerHeight-r)))}}var F;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function n(s){throw new Error}t.assertNever=n,t.arrayToEnum=s=>{let o={};for(let i of s)o[i]=i;return o},t.getValidEnumValues=s=>{let o=t.objectKeys(s).filter(a=>typeof s[s[a]]!="number"),i={};for(let a of o)i[a]=s[a];return t.objectValues(i)},t.objectValues=s=>t.objectKeys(s).map(function(o){return s[o]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{let o=[];for(let i in s)Object.prototype.hasOwnProperty.call(s,i)&&o.push(i);return o},t.find=(s,o)=>{for(let i of s)if(o(i))return i},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,o=" | "){return s.map(i=>typeof i=="string"?`'${i}'`:i).join(o)}t.joinValues=r,t.jsonStringifyReplacer=(s,o)=>typeof o=="bigint"?o.toString():o})(F||(F={}));var rr;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(rr||(rr={}));var _=F.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),je=t=>{switch(typeof t){case"undefined":return _.undefined;case"string":return _.string;case"number":return isNaN(t)?_.nan:_.number;case"boolean":return _.boolean;case"function":return _.function;case"bigint":return _.bigint;case"symbol":return _.symbol;case"object":return Array.isArray(t)?_.array:t===null?_.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?_.promise:typeof Map<"u"&&t instanceof Map?_.map:typeof Set<"u"&&t instanceof Set?_.set:typeof Date<"u"&&t instanceof Date?_.date:_.object;default:return _.unknown}},S=F.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),mi=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),ce=class t extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};let n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let n=e||function(o){return o.message},r={_errors:[]},s=o=>{for(let i of o.issues)if(i.code==="invalid_union")i.unionErrors.map(s);else if(i.code==="invalid_return_type")s(i.returnTypeError);else if(i.code==="invalid_arguments")s(i.argumentsError);else if(i.path.length===0)r._errors.push(n(i));else{let a=r,l=0;for(;l<i.path.length;){let u=i.path[l];l===i.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(i))):a[u]=a[u]||{_errors:[]},a=a[u],l++}}};return s(this),r}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,F.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){let n={},r=[];for(let s of this.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}};ce.create=t=>new ce(t);var _t=(t,e)=>{let n;switch(t.code){case S.invalid_type:t.received===_.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case S.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,F.jsonStringifyReplacer)}`;break;case S.unrecognized_keys:n=`Unrecognized key(s) in object: ${F.joinValues(t.keys,", ")}`;break;case S.invalid_union:n="Invalid input";break;case S.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${F.joinValues(t.options)}`;break;case S.invalid_enum_value:n=`Invalid enum value. Expected ${F.joinValues(t.options)}, received '${t.received}'`;break;case S.invalid_arguments:n="Invalid function arguments";break;case S.invalid_return_type:n="Invalid function return type";break;case S.invalid_date:n="Invalid date";break;case S.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:F.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case S.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case S.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case S.custom:n="Invalid input";break;case S.invalid_intersection_types:n="Intersection results could not be merged";break;case S.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case S.not_finite:n="Number must be finite";break;default:n=e.defaultError,F.assertNever(t)}return{message:n}},bs=_t;function gi(t){bs=t}function cn(){return bs}var un=t=>{let{data:e,path:n,errorMaps:r,issueData:s}=t,o=[...n,...s.path||[]],i={...s,path:o};if(s.message!==void 0)return{...s,path:o,message:s.message};let a="",l=r.filter(u=>!!u).slice().reverse();for(let u of l)a=u(i,{data:e,defaultError:a}).message;return{...s,path:o,message:a}},hi=[];function T(t,e){let n=cn(),r=un({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===_t?void 0:_t].filter(s=>!!s)});t.common.issues.push(r)}var ee=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){let r=[];for(let s of n){if(s.status==="aborted")return I;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){let r=[];for(let s of n){let o=await s.key,i=await s.value;r.push({key:o,value:i})}return t.mergeObjectSync(e,r)}static mergeObjectSync(e,n){let r={};for(let s of n){let{key:o,value:i}=s;if(o.status==="aborted"||i.status==="aborted")return I;o.status==="dirty"&&e.dirty(),i.status==="dirty"&&e.dirty(),o.value!=="__proto__"&&(typeof i.value<"u"||s.alwaysSet)&&(r[o.value]=i.value)}return{status:e.value,value:r}}},I=Object.freeze({status:"aborted"}),Tt=t=>({status:"dirty",value:t}),ne=t=>({status:"valid",value:t}),sr=t=>t.status==="aborted",or=t=>t.status==="dirty",Wt=t=>t.status==="valid",qt=t=>typeof Promise<"u"&&t instanceof Promise;function dn(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)}function vs(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n}var A;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(A||(A={}));var Ut,jt,ge=class{constructor(e,n,r,s){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},hs=(t,e)=>{if(Wt(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let n=new ce(t.common.issues);return this._error=n,this._error}}};function D(t){if(!t)return{};let{errorMap:e,invalid_type_error:n,required_error:r,description:s}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(i,a)=>{var l,u;let{message:f}=t;return i.code==="invalid_enum_value"?{message:f??a.defaultError}:typeof a.data>"u"?{message:(l=f??r)!==null&&l!==void 0?l:a.defaultError}:i.code!=="invalid_type"?{message:a.defaultError}:{message:(u=f??n)!==null&&u!==void 0?u:a.defaultError}},description:s}}var O=class{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return je(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:je(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ee,ctx:{common:e.parent.common,data:e.data,parsedType:je(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let n=this._parse(e);if(qt(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){let n=this._parse(e);return Promise.resolve(n)}parse(e,n){let r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;let s={common:{issues:[],async:(r=n?.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:je(e)},o=this._parseSync({data:e,path:s.path,parent:s});return hs(s,o)}async parseAsync(e,n){let r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){let r={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:je(e)},s=this._parse({data:e,path:r.path,parent:r}),o=await(qt(s)?s:Promise.resolve(s));return hs(r,o)}refine(e,n){let r=s=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(s):n;return this._refinement((s,o)=>{let i=e(s),a=()=>o.addIssue({code:S.custom,...r(s)});return typeof Promise<"u"&&i instanceof Promise?i.then(l=>l?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,s)=>e(r)?!0:(s.addIssue(typeof n=="function"?n(r,s):n),!1))}_refinement(e){return new ue({schema:this,typeName:$.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return me.create(this,this._def)}nullable(){return _e.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return De.create(this,this._def)}promise(){return Qe.create(this,this._def)}or(e){return at.create([this,e],this._def)}and(e){return it.create(this,e,this._def)}transform(e){return new ue({...D(this._def),schema:this,typeName:$.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let n=typeof e=="function"?e:()=>e;return new pt({...D(this._def),innerType:this,defaultValue:n,typeName:$.ZodDefault})}brand(){return new Qt({typeName:$.ZodBranded,type:this,...D(this._def)})}catch(e){let n=typeof e=="function"?e:()=>e;return new ft({...D(this._def),innerType:this,catchValue:n,typeName:$.ZodCatch})}describe(e){let n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Bt.create(this,e)}readonly(){return mt.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},yi=/^c[^\s-]{8,}$/i,bi=/^[0-9a-z]+$/,vi=/^[0-9A-HJKMNP-TV-Z]{26}$/,Ei=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,xi=/^[a-z0-9_-]{21}$/i,Si=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,wi=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Ti="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",nr,_i=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ki=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Ri=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Es="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Li=new RegExp(`^${Es}$`);function xs(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function Ai(t){return new RegExp(`^${xs(t)}$`)}function Ss(t){let e=`${Es}T${xs(t)}`,n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function Mi(t,e){return!!((e==="v4"||!e)&&_i.test(t)||(e==="v6"||!e)&&ki.test(t))}var We=class t extends O{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==_.string){let o=this._getOrReturnCtx(e);return T(o,{code:S.invalid_type,expected:_.string,received:o.parsedType}),I}let r=new ee,s;for(let o of this._def.checks)if(o.kind==="min")e.data.length<o.value&&(s=this._getOrReturnCtx(e,s),T(s,{code:S.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="max")e.data.length>o.value&&(s=this._getOrReturnCtx(e,s),T(s,{code:S.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="length"){let i=e.data.length>o.value,a=e.data.length<o.value;(i||a)&&(s=this._getOrReturnCtx(e,s),i?T(s,{code:S.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):a&&T(s,{code:S.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if(o.kind==="email")wi.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"email",code:S.invalid_string,message:o.message}),r.dirty());else if(o.kind==="emoji")nr||(nr=new RegExp(Ti,"u")),nr.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"emoji",code:S.invalid_string,message:o.message}),r.dirty());else if(o.kind==="uuid")Ei.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"uuid",code:S.invalid_string,message:o.message}),r.dirty());else if(o.kind==="nanoid")xi.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"nanoid",code:S.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid")yi.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"cuid",code:S.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid2")bi.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"cuid2",code:S.invalid_string,message:o.message}),r.dirty());else if(o.kind==="ulid")vi.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"ulid",code:S.invalid_string,message:o.message}),r.dirty());else if(o.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),T(s,{validation:"url",code:S.invalid_string,message:o.message}),r.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"regex",code:S.invalid_string,message:o.message}),r.dirty())):o.kind==="trim"?e.data=e.data.trim():o.kind==="includes"?e.data.includes(o.value,o.position)||(s=this._getOrReturnCtx(e,s),T(s,{code:S.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty()):o.kind==="toLowerCase"?e.data=e.data.toLowerCase():o.kind==="toUpperCase"?e.data=e.data.toUpperCase():o.kind==="startsWith"?e.data.startsWith(o.value)||(s=this._getOrReturnCtx(e,s),T(s,{code:S.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty()):o.kind==="endsWith"?e.data.endsWith(o.value)||(s=this._getOrReturnCtx(e,s),T(s,{code:S.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty()):o.kind==="datetime"?Ss(o).test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{code:S.invalid_string,validation:"datetime",message:o.message}),r.dirty()):o.kind==="date"?Li.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{code:S.invalid_string,validation:"date",message:o.message}),r.dirty()):o.kind==="time"?Ai(o).test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{code:S.invalid_string,validation:"time",message:o.message}),r.dirty()):o.kind==="duration"?Si.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"duration",code:S.invalid_string,message:o.message}),r.dirty()):o.kind==="ip"?Mi(e.data,o.version)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"ip",code:S.invalid_string,message:o.message}),r.dirty()):o.kind==="base64"?Ri.test(e.data)||(s=this._getOrReturnCtx(e,s),T(s,{validation:"base64",code:S.invalid_string,message:o.message}),r.dirty()):F.assertNever(o);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(s=>e.test(s),{validation:n,code:S.invalid_string,...A.errToObj(r)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...A.errToObj(e)})}url(e){return this._addCheck({kind:"url",...A.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...A.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...A.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...A.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...A.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...A.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...A.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...A.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...A.errToObj(e)})}datetime(e){var n,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(n=e?.offset)!==null&&n!==void 0?n:!1,local:(r=e?.local)!==null&&r!==void 0?r:!1,...A.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...A.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...A.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...A.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...A.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...A.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...A.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...A.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...A.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...A.errToObj(n)})}nonempty(e){return this.min(1,A.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};We.create=t=>{var e;return new We({checks:[],typeName:$.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...D(t)})};function $i(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=n>r?n:r,o=parseInt(t.toFixed(s).replace(".","")),i=parseInt(e.toFixed(s).replace(".",""));return o%i/Math.pow(10,s)}var et=class t extends O{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==_.number){let o=this._getOrReturnCtx(e);return T(o,{code:S.invalid_type,expected:_.number,received:o.parsedType}),I}let r,s=new ee;for(let o of this._def.checks)o.kind==="int"?F.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{code:S.invalid_type,expected:"integer",received:"float",message:o.message}),s.dirty()):o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),T(r,{code:S.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),s.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),T(r,{code:S.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),s.dirty()):o.kind==="multipleOf"?$i(e.data,o.value)!==0&&(r=this._getOrReturnCtx(e,r),T(r,{code:S.not_multiple_of,multipleOf:o.value,message:o.message}),s.dirty()):o.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{code:S.not_finite,message:o.message}),s.dirty()):F.assertNever(o);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,A.toString(n))}gt(e,n){return this.setLimit("min",e,!1,A.toString(n))}lte(e,n){return this.setLimit("max",e,!0,A.toString(n))}lt(e,n){return this.setLimit("max",e,!1,A.toString(n))}setLimit(e,n,r,s){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:A.toString(s)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:A.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:A.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:A.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:A.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:A.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:A.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:A.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:A.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:A.toString(e)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&F.isInteger(e.value))}get isFinite(){let e=null,n=null;for(let r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}};et.create=t=>new et({checks:[],typeName:$.ZodNumber,coerce:t?.coerce||!1,...D(t)});var tt=class t extends O{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==_.bigint){let o=this._getOrReturnCtx(e);return T(o,{code:S.invalid_type,expected:_.bigint,received:o.parsedType}),I}let r,s=new ee;for(let o of this._def.checks)o.kind==="min"?(o.inclusive?e.data<o.value:e.data<=o.value)&&(r=this._getOrReturnCtx(e,r),T(r,{code:S.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),s.dirty()):o.kind==="max"?(o.inclusive?e.data>o.value:e.data>=o.value)&&(r=this._getOrReturnCtx(e,r),T(r,{code:S.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),s.dirty()):o.kind==="multipleOf"?e.data%o.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),T(r,{code:S.not_multiple_of,multipleOf:o.value,message:o.message}),s.dirty()):F.assertNever(o);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,A.toString(n))}gt(e,n){return this.setLimit("min",e,!1,A.toString(n))}lte(e,n){return this.setLimit("max",e,!0,A.toString(n))}lt(e,n){return this.setLimit("max",e,!1,A.toString(n))}setLimit(e,n,r,s){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:A.toString(s)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:A.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:A.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:A.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:A.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:A.toString(n)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};tt.create=t=>{var e;return new tt({checks:[],typeName:$.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...D(t)})};var nt=class extends O{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==_.boolean){let r=this._getOrReturnCtx(e);return T(r,{code:S.invalid_type,expected:_.boolean,received:r.parsedType}),I}return ne(e.data)}};nt.create=t=>new nt({typeName:$.ZodBoolean,coerce:t?.coerce||!1,...D(t)});var rt=class t extends O{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==_.date){let o=this._getOrReturnCtx(e);return T(o,{code:S.invalid_type,expected:_.date,received:o.parsedType}),I}if(isNaN(e.data.getTime())){let o=this._getOrReturnCtx(e);return T(o,{code:S.invalid_date}),I}let r=new ee,s;for(let o of this._def.checks)o.kind==="min"?e.data.getTime()<o.value&&(s=this._getOrReturnCtx(e,s),T(s,{code:S.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),r.dirty()):o.kind==="max"?e.data.getTime()>o.value&&(s=this._getOrReturnCtx(e,s),T(s,{code:S.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),r.dirty()):F.assertNever(o);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:A.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:A.toString(n)})}get minDate(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}};rt.create=t=>new rt({checks:[],coerce:t?.coerce||!1,typeName:$.ZodDate,...D(t)});var kt=class extends O{_parse(e){if(this._getType(e)!==_.symbol){let r=this._getOrReturnCtx(e);return T(r,{code:S.invalid_type,expected:_.symbol,received:r.parsedType}),I}return ne(e.data)}};kt.create=t=>new kt({typeName:$.ZodSymbol,...D(t)});var st=class extends O{_parse(e){if(this._getType(e)!==_.undefined){let r=this._getOrReturnCtx(e);return T(r,{code:S.invalid_type,expected:_.undefined,received:r.parsedType}),I}return ne(e.data)}};st.create=t=>new st({typeName:$.ZodUndefined,...D(t)});var ot=class extends O{_parse(e){if(this._getType(e)!==_.null){let r=this._getOrReturnCtx(e);return T(r,{code:S.invalid_type,expected:_.null,received:r.parsedType}),I}return ne(e.data)}};ot.create=t=>new ot({typeName:$.ZodNull,...D(t)});var qe=class extends O{constructor(){super(...arguments),this._any=!0}_parse(e){return ne(e.data)}};qe.create=t=>new qe({typeName:$.ZodAny,...D(t)});var Ce=class extends O{constructor(){super(...arguments),this._unknown=!0}_parse(e){return ne(e.data)}};Ce.create=t=>new Ce({typeName:$.ZodUnknown,...D(t)});var Ee=class extends O{_parse(e){let n=this._getOrReturnCtx(e);return T(n,{code:S.invalid_type,expected:_.never,received:n.parsedType}),I}};Ee.create=t=>new Ee({typeName:$.ZodNever,...D(t)});var Rt=class extends O{_parse(e){if(this._getType(e)!==_.undefined){let r=this._getOrReturnCtx(e);return T(r,{code:S.invalid_type,expected:_.void,received:r.parsedType}),I}return ne(e.data)}};Rt.create=t=>new Rt({typeName:$.ZodVoid,...D(t)});var De=class t extends O{_parse(e){let{ctx:n,status:r}=this._processInputParams(e),s=this._def;if(n.parsedType!==_.array)return T(n,{code:S.invalid_type,expected:_.array,received:n.parsedType}),I;if(s.exactLength!==null){let i=n.data.length>s.exactLength.value,a=n.data.length<s.exactLength.value;(i||a)&&(T(n,{code:i?S.too_big:S.too_small,minimum:a?s.exactLength.value:void 0,maximum:i?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&n.data.length<s.minLength.value&&(T(n,{code:S.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&n.data.length>s.maxLength.value&&(T(n,{code:S.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((i,a)=>s.type._parseAsync(new ge(n,i,n.path,a)))).then(i=>ee.mergeArray(r,i));let o=[...n.data].map((i,a)=>s.type._parseSync(new ge(n,i,n.path,a)));return ee.mergeArray(r,o)}get element(){return this._def.type}min(e,n){return new t({...this._def,minLength:{value:e,message:A.toString(n)}})}max(e,n){return new t({...this._def,maxLength:{value:e,message:A.toString(n)}})}length(e,n){return new t({...this._def,exactLength:{value:e,message:A.toString(n)}})}nonempty(e){return this.min(1,e)}};De.create=(t,e)=>new De({type:t,minLength:null,maxLength:null,exactLength:null,typeName:$.ZodArray,...D(e)});function wt(t){if(t instanceof ie){let e={};for(let n in t.shape){let r=t.shape[n];e[n]=me.create(wt(r))}return new ie({...t._def,shape:()=>e})}else return t instanceof De?new De({...t._def,type:wt(t.element)}):t instanceof me?me.create(wt(t.unwrap())):t instanceof _e?_e.create(wt(t.unwrap())):t instanceof Te?Te.create(t.items.map(e=>wt(e))):t}var ie=class t extends O{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),n=F.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==_.object){let u=this._getOrReturnCtx(e);return T(u,{code:S.invalid_type,expected:_.object,received:u.parsedType}),I}let{status:r,ctx:s}=this._processInputParams(e),{shape:o,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof Ee&&this._def.unknownKeys==="strip"))for(let u in s.data)i.includes(u)||a.push(u);let l=[];for(let u of i){let f=o[u],g=s.data[u];l.push({key:{status:"valid",value:u},value:f._parse(new ge(s,g,s.path,u)),alwaysSet:u in s.data})}if(this._def.catchall instanceof Ee){let u=this._def.unknownKeys;if(u==="passthrough")for(let f of a)l.push({key:{status:"valid",value:f},value:{status:"valid",value:s.data[f]}});else if(u==="strict")a.length>0&&(T(s,{code:S.unrecognized_keys,keys:a}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let u=this._def.catchall;for(let f of a){let g=s.data[f];l.push({key:{status:"valid",value:f},value:u._parse(new ge(s,g,s.path,f)),alwaysSet:f in s.data})}}return s.common.async?Promise.resolve().then(async()=>{let u=[];for(let f of l){let g=await f.key,w=await f.value;u.push({key:g,value:w,alwaysSet:f.alwaysSet})}return u}).then(u=>ee.mergeObjectSync(r,u)):ee.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return A.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var s,o,i,a;let l=(i=(o=(s=this._def).errorMap)===null||o===void 0?void 0:o.call(s,n,r).message)!==null&&i!==void 0?i:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=A.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:$.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let n={};return F.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new t({...this._def,shape:()=>n})}omit(e){let n={};return F.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new t({...this._def,shape:()=>n})}deepPartial(){return wt(this)}partial(e){let n={};return F.objectKeys(this.shape).forEach(r=>{let s=this.shape[r];e&&!e[r]?n[r]=s:n[r]=s.optional()}),new t({...this._def,shape:()=>n})}required(e){let n={};return F.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let o=this.shape[r];for(;o instanceof me;)o=o._def.innerType;n[r]=o}}),new t({...this._def,shape:()=>n})}keyof(){return ws(F.objectKeys(this.shape))}};ie.create=(t,e)=>new ie({shape:()=>t,unknownKeys:"strip",catchall:Ee.create(),typeName:$.ZodObject,...D(e)});ie.strictCreate=(t,e)=>new ie({shape:()=>t,unknownKeys:"strict",catchall:Ee.create(),typeName:$.ZodObject,...D(e)});ie.lazycreate=(t,e)=>new ie({shape:t,unknownKeys:"strip",catchall:Ee.create(),typeName:$.ZodObject,...D(e)});var at=class extends O{_parse(e){let{ctx:n}=this._processInputParams(e),r=this._def.options;function s(o){for(let a of o)if(a.result.status==="valid")return a.result;for(let a of o)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;let i=o.map(a=>new ce(a.ctx.common.issues));return T(n,{code:S.invalid_union,unionErrors:i}),I}if(n.common.async)return Promise.all(r.map(async o=>{let i={...n,common:{...n.common,issues:[]},parent:null};return{result:await o._parseAsync({data:n.data,path:n.path,parent:i}),ctx:i}})).then(s);{let o,i=[];for(let l of r){let u={...n,common:{...n.common,issues:[]},parent:null},f=l._parseSync({data:n.data,path:n.path,parent:u});if(f.status==="valid")return f;f.status==="dirty"&&!o&&(o={result:f,ctx:u}),u.common.issues.length&&i.push(u.common.issues)}if(o)return n.common.issues.push(...o.ctx.common.issues),o.result;let a=i.map(l=>new ce(l));return T(n,{code:S.invalid_union,unionErrors:a}),I}}get options(){return this._def.options}};at.create=(t,e)=>new at({options:t,typeName:$.ZodUnion,...D(e)});var Pe=t=>t instanceof lt?Pe(t.schema):t instanceof ue?Pe(t.innerType()):t instanceof ct?[t.value]:t instanceof ut?t.options:t instanceof dt?F.objectValues(t.enum):t instanceof pt?Pe(t._def.innerType):t instanceof st?[void 0]:t instanceof ot?[null]:t instanceof me?[void 0,...Pe(t.unwrap())]:t instanceof _e?[null,...Pe(t.unwrap())]:t instanceof Qt||t instanceof mt?Pe(t.unwrap()):t instanceof ft?Pe(t._def.innerType):[],pn=class t extends O{_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==_.object)return T(n,{code:S.invalid_type,expected:_.object,received:n.parsedType}),I;let r=this.discriminator,s=n.data[r],o=this.optionsMap.get(s);return o?n.common.async?o._parseAsync({data:n.data,path:n.path,parent:n}):o._parseSync({data:n.data,path:n.path,parent:n}):(T(n,{code:S.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),I)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){let s=new Map;for(let o of n){let i=Pe(o.shape[e]);if(!i.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of i){if(s.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);s.set(a,o)}}return new t({typeName:$.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:s,...D(r)})}};function ar(t,e){let n=je(t),r=je(e);if(t===e)return{valid:!0,data:t};if(n===_.object&&r===_.object){let s=F.objectKeys(e),o=F.objectKeys(t).filter(a=>s.indexOf(a)!==-1),i={...t,...e};for(let a of o){let l=ar(t[a],e[a]);if(!l.valid)return{valid:!1};i[a]=l.data}return{valid:!0,data:i}}else if(n===_.array&&r===_.array){if(t.length!==e.length)return{valid:!1};let s=[];for(let o=0;o<t.length;o++){let i=t[o],a=e[o],l=ar(i,a);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return n===_.date&&r===_.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var it=class extends O{_parse(e){let{status:n,ctx:r}=this._processInputParams(e),s=(o,i)=>{if(sr(o)||sr(i))return I;let a=ar(o.value,i.value);return a.valid?((or(o)||or(i))&&n.dirty(),{status:n.value,value:a.data}):(T(r,{code:S.invalid_intersection_types}),I)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([o,i])=>s(o,i)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};it.create=(t,e,n)=>new it({left:t,right:e,typeName:$.ZodIntersection,...D(n)});var Te=class t extends O{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==_.array)return T(r,{code:S.invalid_type,expected:_.array,received:r.parsedType}),I;if(r.data.length<this._def.items.length)return T(r,{code:S.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),I;!this._def.rest&&r.data.length>this._def.items.length&&(T(r,{code:S.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());let o=[...r.data].map((i,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new ge(r,i,r.path,a)):null}).filter(i=>!!i);return r.common.async?Promise.all(o).then(i=>ee.mergeArray(n,i)):ee.mergeArray(n,o)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};Te.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Te({items:t,typeName:$.ZodTuple,rest:null,...D(e)})};var fn=class t extends O{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==_.object)return T(r,{code:S.invalid_type,expected:_.object,received:r.parsedType}),I;let s=[],o=this._def.keyType,i=this._def.valueType;for(let a in r.data)s.push({key:o._parse(new ge(r,a,r.path,a)),value:i._parse(new ge(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?ee.mergeObjectAsync(n,s):ee.mergeObjectSync(n,s)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof O?new t({keyType:e,valueType:n,typeName:$.ZodRecord,...D(r)}):new t({keyType:We.create(),valueType:e,typeName:$.ZodRecord,...D(n)})}},Lt=class extends O{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==_.map)return T(r,{code:S.invalid_type,expected:_.map,received:r.parsedType}),I;let s=this._def.keyType,o=this._def.valueType,i=[...r.data.entries()].map(([a,l],u)=>({key:s._parse(new ge(r,a,r.path,[u,"key"])),value:o._parse(new ge(r,l,r.path,[u,"value"]))}));if(r.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of i){let u=await l.key,f=await l.value;if(u.status==="aborted"||f.status==="aborted")return I;(u.status==="dirty"||f.status==="dirty")&&n.dirty(),a.set(u.value,f.value)}return{status:n.value,value:a}})}else{let a=new Map;for(let l of i){let u=l.key,f=l.value;if(u.status==="aborted"||f.status==="aborted")return I;(u.status==="dirty"||f.status==="dirty")&&n.dirty(),a.set(u.value,f.value)}return{status:n.value,value:a}}}};Lt.create=(t,e,n)=>new Lt({valueType:e,keyType:t,typeName:$.ZodMap,...D(n)});var At=class t extends O{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==_.set)return T(r,{code:S.invalid_type,expected:_.set,received:r.parsedType}),I;let s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(T(r,{code:S.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),n.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(T(r,{code:S.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),n.dirty());let o=this._def.valueType;function i(l){let u=new Set;for(let f of l){if(f.status==="aborted")return I;f.status==="dirty"&&n.dirty(),u.add(f.value)}return{status:n.value,value:u}}let a=[...r.data.values()].map((l,u)=>o._parse(new ge(r,l,r.path,u)));return r.common.async?Promise.all(a).then(l=>i(l)):i(a)}min(e,n){return new t({...this._def,minSize:{value:e,message:A.toString(n)}})}max(e,n){return new t({...this._def,maxSize:{value:e,message:A.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}};At.create=(t,e)=>new At({valueType:t,minSize:null,maxSize:null,typeName:$.ZodSet,...D(e)});var mn=class t extends O{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==_.function)return T(n,{code:S.invalid_type,expected:_.function,received:n.parsedType}),I;function r(a,l){return un({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,cn(),_t].filter(u=>!!u),issueData:{code:S.invalid_arguments,argumentsError:l}})}function s(a,l){return un({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,cn(),_t].filter(u=>!!u),issueData:{code:S.invalid_return_type,returnTypeError:l}})}let o={errorMap:n.common.contextualErrorMap},i=n.data;if(this._def.returns instanceof Qe){let a=this;return ne(async function(...l){let u=new ce([]),f=await a._def.args.parseAsync(l,o).catch(y=>{throw u.addIssue(r(l,y)),u}),g=await Reflect.apply(i,this,f);return await a._def.returns._def.type.parseAsync(g,o).catch(y=>{throw u.addIssue(s(g,y)),u})})}else{let a=this;return ne(function(...l){let u=a._def.args.safeParse(l,o);if(!u.success)throw new ce([r(l,u.error)]);let f=Reflect.apply(i,this,u.data),g=a._def.returns.safeParse(f,o);if(!g.success)throw new ce([s(f,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:Te.create(e).rest(Ce.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new t({args:e||Te.create([]).rest(Ce.create()),returns:n||Ce.create(),typeName:$.ZodFunction,...D(r)})}},lt=class extends O{get schema(){return this._def.getter()}_parse(e){let{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}};lt.create=(t,e)=>new lt({getter:t,typeName:$.ZodLazy,...D(e)});var ct=class extends O{_parse(e){if(e.data!==this._def.value){let n=this._getOrReturnCtx(e);return T(n,{received:n.data,code:S.invalid_literal,expected:this._def.value}),I}return{status:"valid",value:e.data}}get value(){return this._def.value}};ct.create=(t,e)=>new ct({value:t,typeName:$.ZodLiteral,...D(e)});function ws(t,e){return new ut({values:t,typeName:$.ZodEnum,...D(e)})}var ut=class t extends O{constructor(){super(...arguments),Ut.set(this,void 0)}_parse(e){if(typeof e.data!="string"){let n=this._getOrReturnCtx(e),r=this._def.values;return T(n,{expected:F.joinValues(r),received:n.parsedType,code:S.invalid_type}),I}if(dn(this,Ut,"f")||vs(this,Ut,new Set(this._def.values),"f"),!dn(this,Ut,"f").has(e.data)){let n=this._getOrReturnCtx(e),r=this._def.values;return T(n,{received:n.data,code:S.invalid_enum_value,options:r}),I}return ne(e.data)}get options(){return this._def.values}get enum(){let e={};for(let n of this._def.values)e[n]=n;return e}get Values(){let e={};for(let n of this._def.values)e[n]=n;return e}get Enum(){let e={};for(let n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return t.create(e,{...this._def,...n})}exclude(e,n=this._def){return t.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}};Ut=new WeakMap;ut.create=ws;var dt=class extends O{constructor(){super(...arguments),jt.set(this,void 0)}_parse(e){let n=F.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==_.string&&r.parsedType!==_.number){let s=F.objectValues(n);return T(r,{expected:F.joinValues(s),received:r.parsedType,code:S.invalid_type}),I}if(dn(this,jt,"f")||vs(this,jt,new Set(F.getValidEnumValues(this._def.values)),"f"),!dn(this,jt,"f").has(e.data)){let s=F.objectValues(n);return T(r,{received:r.data,code:S.invalid_enum_value,options:s}),I}return ne(e.data)}get enum(){return this._def.values}};jt=new WeakMap;dt.create=(t,e)=>new dt({values:t,typeName:$.ZodNativeEnum,...D(e)});var Qe=class extends O{unwrap(){return this._def.type}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==_.promise&&n.common.async===!1)return T(n,{code:S.invalid_type,expected:_.promise,received:n.parsedType}),I;let r=n.parsedType===_.promise?n.data:Promise.resolve(n.data);return ne(r.then(s=>this._def.type.parseAsync(s,{path:n.path,errorMap:n.common.contextualErrorMap})))}};Qe.create=(t,e)=>new Qe({type:t,typeName:$.ZodPromise,...D(e)});var ue=class extends O{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===$.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:n,ctx:r}=this._processInputParams(e),s=this._def.effect||null,o={addIssue:i=>{T(r,i),i.fatal?n.abort():n.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),s.type==="preprocess"){let i=s.transform(r.data,o);if(r.common.async)return Promise.resolve(i).then(async a=>{if(n.value==="aborted")return I;let l=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return l.status==="aborted"?I:l.status==="dirty"||n.value==="dirty"?Tt(l.value):l});{if(n.value==="aborted")return I;let a=this._def.schema._parseSync({data:i,path:r.path,parent:r});return a.status==="aborted"?I:a.status==="dirty"||n.value==="dirty"?Tt(a.value):a}}if(s.type==="refinement"){let i=a=>{let l=s.refinement(a,o);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?I:(a.status==="dirty"&&n.dirty(),i(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?I:(a.status==="dirty"&&n.dirty(),i(a.value).then(()=>({status:n.value,value:a.value}))))}if(s.type==="transform")if(r.common.async===!1){let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Wt(i))return i;let a=s.transform(i.value,o);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(i=>Wt(i)?Promise.resolve(s.transform(i.value,o)).then(a=>({status:n.value,value:a})):i);F.assertNever(s)}};ue.create=(t,e,n)=>new ue({schema:t,typeName:$.ZodEffects,effect:e,...D(n)});ue.createWithPreprocess=(t,e,n)=>new ue({schema:e,effect:{type:"preprocess",transform:t},typeName:$.ZodEffects,...D(n)});var me=class extends O{_parse(e){return this._getType(e)===_.undefined?ne(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};me.create=(t,e)=>new me({innerType:t,typeName:$.ZodOptional,...D(e)});var _e=class extends O{_parse(e){return this._getType(e)===_.null?ne(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};_e.create=(t,e)=>new _e({innerType:t,typeName:$.ZodNullable,...D(e)});var pt=class extends O{_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return n.parsedType===_.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}};pt.create=(t,e)=>new pt({innerType:t,typeName:$.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...D(e)});var ft=class extends O{_parse(e){let{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return qt(s)?s.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new ce(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ce(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};ft.create=(t,e)=>new ft({innerType:t,typeName:$.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...D(e)});var Mt=class extends O{_parse(e){if(this._getType(e)!==_.nan){let r=this._getOrReturnCtx(e);return T(r,{code:S.invalid_type,expected:_.nan,received:r.parsedType}),I}return{status:"valid",value:e.data}}};Mt.create=t=>new Mt({typeName:$.ZodNaN,...D(t)});var Ii=Symbol("zod_brand"),Qt=class extends O{_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}},Bt=class t extends O{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let o=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?I:o.status==="dirty"?(n.dirty(),Tt(o.value)):this._def.out._parseAsync({data:o.value,path:r.path,parent:r})})();{let s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?I:s.status==="dirty"?(n.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,n){return new t({in:e,out:n,typeName:$.ZodPipeline})}},mt=class extends O{_parse(e){let n=this._def.innerType._parse(e),r=s=>(Wt(s)&&(s.value=Object.freeze(s.value)),s);return qt(n)?n.then(s=>r(s)):r(n)}unwrap(){return this._def.innerType}};mt.create=(t,e)=>new mt({innerType:t,typeName:$.ZodReadonly,...D(e)});function Ts(t,e={},n){return t?qe.create().superRefine((r,s)=>{var o,i;if(!t(r)){let a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(i=(o=a.fatal)!==null&&o!==void 0?o:n)!==null&&i!==void 0?i:!0,u=typeof a=="string"?{message:a}:a;s.addIssue({code:"custom",...u,fatal:l})}}):qe.create()}var Pi={object:ie.lazycreate},$;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})($||($={}));var Ci=(t,e={message:`Input not instance of ${t.name}`})=>Ts(n=>n instanceof t,e),_s=We.create,ks=et.create,Di=Mt.create,Oi=tt.create,Rs=nt.create,Hi=rt.create,Ni=kt.create,Fi=st.create,Ui=ot.create,ji=qe.create,Wi=Ce.create,qi=Ee.create,Qi=Rt.create,Bi=De.create,Vi=ie.create,Ji=ie.strictCreate,zi=at.create,Xi=pn.create,Zi=it.create,Gi=Te.create,Ki=fn.create,Yi=Lt.create,el=At.create,tl=mn.create,nl=lt.create,rl=ct.create,sl=ut.create,ol=dt.create,al=Qe.create,ys=ue.create,il=me.create,ll=_e.create,cl=ue.createWithPreprocess,ul=Bt.create,dl=()=>_s().optional(),pl=()=>ks().optional(),fl=()=>Rs().optional(),ml={string:t=>We.create({...t,coerce:!0}),number:t=>et.create({...t,coerce:!0}),boolean:t=>nt.create({...t,coerce:!0}),bigint:t=>tt.create({...t,coerce:!0}),date:t=>rt.create({...t,coerce:!0})},gl=I,c=Object.freeze({__proto__:null,defaultErrorMap:_t,setErrorMap:gi,getErrorMap:cn,makeIssue:un,EMPTY_PATH:hi,addIssueToContext:T,ParseStatus:ee,INVALID:I,DIRTY:Tt,OK:ne,isAborted:sr,isDirty:or,isValid:Wt,isAsync:qt,get util(){return F},get objectUtil(){return rr},ZodParsedType:_,getParsedType:je,ZodType:O,datetimeRegex:Ss,ZodString:We,ZodNumber:et,ZodBigInt:tt,ZodBoolean:nt,ZodDate:rt,ZodSymbol:kt,ZodUndefined:st,ZodNull:ot,ZodAny:qe,ZodUnknown:Ce,ZodNever:Ee,ZodVoid:Rt,ZodArray:De,ZodObject:ie,ZodUnion:at,ZodDiscriminatedUnion:pn,ZodIntersection:it,ZodTuple:Te,ZodRecord:fn,ZodMap:Lt,ZodSet:At,ZodFunction:mn,ZodLazy:lt,ZodLiteral:ct,ZodEnum:ut,ZodNativeEnum:dt,ZodPromise:Qe,ZodEffects:ue,ZodTransformer:ue,ZodOptional:me,ZodNullable:_e,ZodDefault:pt,ZodCatch:ft,ZodNaN:Mt,BRAND:Ii,ZodBranded:Qt,ZodPipeline:Bt,ZodReadonly:mt,custom:Ts,Schema:O,ZodSchema:O,late:Pi,get ZodFirstPartyTypeKind(){return $},coerce:ml,any:ji,array:Bi,bigint:Oi,boolean:Rs,date:Hi,discriminatedUnion:Xi,effect:ys,enum:sl,function:tl,instanceof:Ci,intersection:Zi,lazy:nl,literal:rl,map:Yi,nan:Di,nativeEnum:ol,never:qi,null:Ui,nullable:ll,number:ks,object:Vi,oboolean:fl,onumber:pl,optional:il,ostring:dl,pipeline:ul,preprocess:cl,promise:al,record:Ki,set:el,strictObject:Ji,string:_s,symbol:Ni,transformer:ys,tuple:Gi,undefined:Fi,union:zi,unknown:Wi,void:Qi,NEVER:gl,ZodIssueCode:S,quotelessJson:mi,ZodError:ce});function ir(){try{if(typeof window<"u"&&typeof window.getContext=="function")return window.getContext();let t=window.SillyTavern;if(t&&typeof t.getContext=="function")return t.getContext()}catch(t){console.error("[开局框架] getContext 失败",t)}return null}var Ls=c.object({enabled:c.boolean().default(!0),useGlobal:c.boolean().default(!0),contextRounds:c.number().int().default(3),group:c.string().default(""),updateFrequency:c.number().int().default(3),skipFloors:c.number().int().default(0),sendLatestRows:c.number().int().default(-1),sendRowsTemplate:c.string().default(""),extractTags:c.string().default(""),extractRules:c.array(c.object({start:c.string(),end:c.string()})).default([]),excludeTags:c.string().default(""),excludeRules:c.array(c.object({start:c.string(),end:c.string()})).default([])}),lr=Ls.parse({}),gn=c.object({note:c.string().default(""),insertRule:c.string().default(""),updateRule:c.string().default(""),deleteRule:c.string().default("")}),hl=c.object({uid:c.string(),name:c.string(),purpose:c.string().default(""),type:c.enum(["standard","special"]).default("standard"),headers:c.array(c.string()),rows:c.array(c.array(c.union([c.string(),c.null()]))),sourceData:gn,updateConfig:Ls}),As=c.object({version:c.literal(1),sheets:c.record(c.string(),hl)});function $t(){return{version:1,sheets:{}}}var hn=c.object({uid:c.string(),name:c.string(),purpose:c.string().default(""),scope:c.enum(["always","onSeed"]).default("always"),type:c.enum(["standard","special"]).default("standard"),headers:c.array(c.string()),sourceData:gn,updateConfig:c.object({}).catchall(c.any()).default({})}),Vt=c.object({mode:c.enum(["tavern","custom"]).default("custom"),stream:c.boolean().default(!0),proxyPreset:c.string().default(""),apiUrl:c.string().default(""),apiKey:c.string().default(""),model:c.string().default(""),source:c.string().default("openai"),temperature:c.number().default(.8),maxTokens:c.union([c.number(),c.literal("same_as_preset"),c.literal("unset")]).default(5e3),topP:c.union([c.number(),c.literal("same_as_preset"),c.literal("unset")]).default("unset")}),yn=Vt.extend({mode:c.enum(["tavern","custom"]).default("tavern")}),bn=c.object({contextRounds:c.number().int().default(3),updateFrequency:c.number().int().default(3),skipFloors:c.number().int().default(0),sendLatestRows:c.number().int().default(-1),extractTags:c.string().default("<content>|</content>"),excludeTags:c.string().default("")});function It(t,e){let n=t.updateConfig;return n.useGlobal?{...n,contextRounds:e.contextRounds,updateFrequency:e.updateFrequency,skipFloors:e.skipFloors,sendLatestRows:e.sendLatestRows,extractTags:e.extractTags,extractRules:[],excludeTags:e.excludeTags,excludeRules:[]}:n}var yl=c.object({role:c.enum(["system","user","assistant"]),content:c.string(),enabled:c.boolean().default(!0),note:c.string().default("")});var Ms=[{name:"{{instructions}}",desc:'填表指令正文（本页下方"填表指令"输入框的内容会替换到这里）'},{name:"{{target_tables}}",desc:"本次要更新的表名清单（自动生成，不用手填）"},{name:"{{table_data}}",desc:"表数据：列定义、维护规则、当前所有行（自动渲染）"},{name:"{{messages}}",desc:'最近对话正文（按表的"读取对话轮数"截取，已做标签过滤）'},{name:"{{floor_info}}",desc:"楼层元信息（AI 回复计数、分组、读取轮数等）"},{name:"{{worldbook}}",desc:"世界书内容（自动读取全局 + 角色卡 + 聊天绑定的世界书：蓝灯条目全发，绿灯条目按关键词匹配最近对话；在下方开启该段才会发送）"},{name:"{{char_description}}",desc:"角色卡描述（在下方段里开启才会发送，当前版本内容为空）"},{name:"{{persona_description}}",desc:"用户设定 / 个人描述（在下方段里开启才会发送，当前版本内容为空）"}],cr=c.object({segments:c.array(yl),instructions:c.string().default("")}),tu=c.object({fillApi:Vt,dialogueApi:yn,globalDefaults:bn,promptTemplate:cr,autoFillEnabled:c.boolean().default(!0),maxRetries:c.number().int().default(1)}),bl=c.object({type:c.enum(["insert","update","delete"]),sheet:c.string(),rowId:c.number().int().optional(),cells:c.array(c.union([c.string(),c.null()])).optional()}),$s=c.object({operations:c.array(bl)}),Is={name:"table_fill_ops",description:"表格维护操作列表",value:{type:"object",properties:{operations:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["insert","update","delete"]},sheet:{type:"string",description:"表名或 uid"},rowId:{type:"integer",description:"update/delete 必填，1 基行号；insert 可省"},cells:{type:"array",items:{type:["string","null"]},description:"insert/update 的单元格值，按表头顺序"}},required:["type","sheet"]}}},required:["operations"]}};var ur=[{role:"system",enabled:!0,note:"填表指令与输出格式",content:`你是表格维护 AI。根据下方【表数据】与【最近对话】更新指定表。
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
请按上述表数据与对话，输出本次需要执行的操作 JSON。`}],dr=`更新原则：
1. 只在确实发生变化时才产生操作；无变化返回空 operations。
2. 严格遵循每张表 Note / Insert触发 / Update触发 / Delete触发 中的规则与约束。
3. 不要凭空创造规则里没有的字段或取值；不确定时宁可不改。
4. 数值类字段（如信任度、属性）单次变化幅度遵循表内约束，不越界。`,Ps={segments:ur,instructions:dr};var pr=c.object({id:c.string().min(1,"缺少 id"),name:c.string().min(1,"缺少 name"),description:c.string().default(""),rulesText:c.string().default(""),tables:c.array(hn).default([]),settlementStartMark:c.string().default("【自定义开局结算开始】"),settlementEndMark:c.string().default("【自定义开局结算结束】"),requiredKeys:c.array(c.string()).default([]),seedRows:c.record(c.string(),c.array(c.array(c.union([c.string(),c.null()])))).default({}),builtin:c.boolean().default(!1)}),Jt="custom-opening";var zt="opening-framework",fr=c.object({windowX:c.number().nullable().default(null),windowY:c.number().nullable().default(null),windowWidth:c.number().min(280).max(4096).default(420),windowHeight:c.number().min(320).max(4096).default(660),floatingToggleEnabled:c.boolean().default(!0),toggleX:c.number().nullable().default(null),toggleY:c.number().nullable().default(null),toggleSize:c.number().min(32).max(72).default(44),autoFillEnabled:c.boolean().default(!0),maxRetries:c.number().int().min(0).max(5).default(1),fillApi:Vt.catch(Vt.parse({})),dialogueApi:yn.catch(yn.parse({})),globalDefaults:bn.catch(bn.parse({})),promptTemplate:cr.catch(Ps),activeRulePackageId:c.string().catch(Jt).default(Jt),rulePackages:c.array(c.unknown()).catch([]),autoSyncEnabled:c.boolean().default(!0),statusPlaceholderEnabled:c.boolean().default(!0),appMode:c.enum(["presets","gradband"]).default("presets")});function vl(){let e=ir()?.extensionSettings?.[zt];return e&&typeof e=="object"?e:{}}function B(){try{let t=fr.safeParse(vl());return t.success?t.data:(console.warn("[开局框架] 设置校验失败，使用默认值：",t.error.message),fr.parse({}))}catch(t){return console.error("[开局框架] loadSettings 异常：",t),fr.parse({})}}function q(t,e){let n=ir();if(!n?.extensionSettings){console.warn("[开局框架] extensionSettings 不可用，设置未持久化");return}(!n.extensionSettings[zt]||typeof n.extensionSettings[zt]!="object")&&(n.extensionSettings[zt]={}),n.extensionSettings[zt][t]=e,typeof n.saveSettingsDebounced=="function"&&n.saveSettingsDebounced()}function gt(t){for(let[e,n]of Object.entries(t))q(e,n)}var de={root:"of-root",window:"of-window",content:"of-content",titlebar:"of-titlebar"},Ds=320,Os=420;function mr(){let t=document.getElementById(de.root);return t||(t=document.createElement("div"),t.id=de.root,t.className="of-root",document.body.appendChild(t),t)}function El(){let t=document.getElementById(de.window);if(t)return t;let e=mr();t=document.createElement("div"),t.id=de.window,t.className="of-window";let n=B(),r=window.innerWidth,s=window.innerHeight,o=r<=640,i=Ye(o?r-8:n.windowWidth,Ds,r),a=Ye(o?s-8:n.windowHeight,Os,s),l=o?4:n.windowX??Math.max(10,r-i-40),u=o?4:n.windowY??Math.max(60,Math.floor((s-a)/2)),f=Ie(l,u,i,a);return t.style.left=f.x+"px",t.style.top=f.y+"px",t.style.width=i+"px",t.style.height=a+"px",t.innerHTML=`
    <div class="of-window-titlebar" id="${de.titlebar}">
      <span class="of-window-title">🎬 开局框架</span>
      <button class="of-window-close" id="of-window-close" title="关闭">✕</button>
    </div>
    <div class="of-window-content" id="${de.content}"></div>
    <div class="of-window-resize" data-dir="e" title="左右拉伸"></div>
    <div class="of-window-resize" data-dir="s" title="上下拉伸"></div>
    <div class="of-window-resize" data-dir="se" title="斜角拉伸"></div>
  `,t.querySelector("#of-window-close")?.addEventListener("click",g=>{g.stopPropagation(),Xt(!1)}),e.appendChild(t),t}function xl(){let t=document.getElementById(de.window),e=t?.querySelector("#"+de.titlebar);if(!t||!e)return;let n=!1,r=0,s=0,o=null;e.addEventListener("pointerdown",a=>{if(a.target.closest(".of-window-close")||t.classList.contains("resizing"))return;n=!0,o=a.pointerId;let u=t.getBoundingClientRect();r=a.clientX-u.left,s=a.clientY-u.top,a.target.setPointerCapture(a.pointerId),t.classList.add("dragging"),a.preventDefault()}),e.addEventListener("pointermove",a=>{if(!n||a.pointerId!==o)return;let l=Ie(a.clientX-r,a.clientY-s,t.offsetWidth,t.offsetHeight);t.style.left=l.x+"px",t.style.top=l.y+"px",a.preventDefault()});let i=a=>{if(!(!n||a.pointerId!==o)){n=!1;try{a.target.releasePointerCapture(a.pointerId)}catch{}t.classList.remove("dragging"),q("windowX",parseInt(t.style.left,10)),q("windowY",parseInt(t.style.top,10)),o=null}};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("contextmenu",a=>a.preventDefault())}function Sl(){let t=document.getElementById(de.window);t&&t.querySelectorAll(".of-window-resize").forEach(e=>{let n=!1,r=null,s="",o=0,i=0,a=0,l=0;e.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),s=e.getAttribute("data-dir")||"";let g=t.getBoundingClientRect();n=!0,r=f.pointerId,o=f.clientX,i=f.clientY,a=g.width,l=g.height,e.setPointerCapture(f.pointerId),t.classList.add("resizing")}),e.addEventListener("pointermove",f=>{if(!n||f.pointerId!==r)return;f.preventDefault();let g=f.clientX-o,w=f.clientY-i,y=a,p=l;s.includes("e")&&(y=Ye(a+g,Ds,window.innerWidth)),s.includes("s")&&(p=Ye(l+w,Os,window.innerHeight)),t.style.width=Math.round(y)+"px",t.style.height=Math.round(p)+"px"});let u=f=>{if(!n||f.pointerId!==r)return;n=!1;try{e.releasePointerCapture(f.pointerId)}catch{}t.classList.remove("resizing");let g=Ie(parseInt(t.style.left,10)||0,parseInt(t.style.top,10)||0,t.offsetWidth,t.offsetHeight);t.style.left=g.x+"px",t.style.top=g.y+"px",q("windowX",g.x),q("windowY",g.y),q("windowWidth",t.offsetWidth),q("windowHeight",t.offsetHeight),r=null,s=""};e.addEventListener("pointerup",u),e.addEventListener("pointercancel",u),e.addEventListener("contextmenu",f=>f.preventDefault())})}function Xt(t){let e=document.getElementById(de.window);if(!e)return!1;let n=t??!e.classList.contains("visible");return e.classList.toggle("visible",n),n}var Cs=!1;function Hs(){let t=El();return xl(),Sl(),Cs||(Cs=!0,window.addEventListener("resize",()=>{let e=document.getElementById(de.window);if(!e)return;let n=Ie(parseInt(e.style.left,10)||0,parseInt(e.style.top,10)||0,e.offsetWidth,e.offsetHeight);e.style.left=n.x+"px",e.style.top=n.y+"px"})),t}function Ns(){document.getElementById(de.window)?.remove();let t=document.getElementById(de.root);t&&t.childElementCount===0&&t.remove()}var Zt="of-toggle",Fs=5,wl=300;function vn({onToggle:t}={}){let e=document.getElementById(Zt);if(e)return e;let n=mr();e=document.createElement("div"),e.id=Zt,e.className="of-toggle",e.title="拖拽移动 / 点击打开",e.innerHTML='<span class="of-toggle-icon">🎬</span>';let r=B(),s=Ye(r.toggleSize,32,72),o=window.innerWidth,i=o<=640,a=Math.max(10,o-s-(i?12:40)),l=i?Math.round(window.innerHeight*.32):60,u=Ie(r.toggleX??a,r.toggleY??l,s,s);e.style.width=s+"px",e.style.height=s+"px",e.style.left=u.x+"px",e.style.top=u.y+"px",n.appendChild(e),Tl(e,t),Us(e,r.floatingToggleEnabled);let f=window;return f.__ofToggleResizeBound||(f.__ofToggleResizeBound=!0,window.addEventListener("resize",()=>{let g=document.getElementById(Zt);if(!g)return;let w=g.offsetWidth||44,y=Ie(parseInt(g.style.left,10)||0,parseInt(g.style.top,10)||0,w,w);g.style.left=y.x+"px",g.style.top=y.y+"px"})),e}function Tl(t,e){let n=!1,r=0,s=0,o=0,i=0,a=null,l=0;t.addEventListener("pointerdown",f=>{l=Date.now(),n=!1,a=f.pointerId;let g=t.getBoundingClientRect();o=f.clientX-g.left,i=f.clientY-g.top,r=f.clientX,s=f.clientY,t.setPointerCapture(f.pointerId),t.classList.add("dragging"),f.preventDefault()}),t.addEventListener("pointermove",f=>{if(f.pointerId!==a||((Math.abs(f.clientX-r)>Fs||Math.abs(f.clientY-s)>Fs)&&(n=!0),!n))return;let g=Ie(f.clientX-o,f.clientY-i,t.offsetWidth,t.offsetHeight);t.style.left=g.x+"px",t.style.top=g.y+"px",f.preventDefault()});let u=f=>{if(f.pointerId===a){try{t.releasePointerCapture(f.pointerId)}catch{}t.classList.remove("dragging"),n&&(q("toggleX",parseInt(t.style.left,10)),q("toggleY",parseInt(t.style.top,10))),!n&&Date.now()-l<wl&&typeof e=="function"&&e(),n=!1,a=null}};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u),t.addEventListener("contextmenu",f=>f.preventDefault())}function Us(t,e){let n=t??document.getElementById(Zt);if(!n)return;let r=e===!1;n.hidden=r,n.style.display=r?"none":""}function js(t){q("floatingToggleEnabled",t),Us(null,t)}function Ws(){document.getElementById(Zt)?.remove()}var Gt="1.8.5";var En=class{handlers=[];add(e,n,r,s){e.addEventListener(n,r,s),this.handlers.push(()=>e.removeEventListener(n,r,s))}on(e,n,r){e.on(n,r),this.handlers.push(()=>{try{e.removeListener?.(n,r)}catch{}})}addDisposer(e){this.handlers.push(e)}dispose(){this.handlers.forEach(e=>{try{e()}catch{}}),this.handlers=[]}};var qs=new URL("../../../../",import.meta.url),Sn=!1,xn=null;async function Qs(){if(!Sn)try{let t=await import(new URL("slash-commands.js",qs).href),e=await import(new URL("slash-commands/SlashCommand.js",qs).href),n=t?.SlashCommandParser,r=e?.SlashCommand;if(!n?.addCommandObject||!r?.fromProps)throw new Error("酒馆核心 SlashCommand 模块不可用");n.addCommandObject(r.fromProps({name:"opening",aliases:["开局"],callback:()=>Xt()?"已打开开局框架窗口":"已关闭开局框架窗口",helpString:"开关开局框架窗口（可拖拽、可缩放）"})),xn=n,Sn=!0,console.info("[开局框架] Slash 命令已注册：/opening（别名 /开局）")}catch(t){console.warn("[开局框架] Slash 命令注册失败（不影响其他功能）：",t)}}function Bs(){if(!(!Sn||!xn)){try{xn.removeCommand?.("opening")}catch(t){console.warn("[开局框架] Slash 命令注销失败：",t)}Sn=!1,xn=null}}var Pt=null;function gr(){if(Pt)return Pt;try{if(typeof window<"u"&&window.TavernHelper)return Pt=window.TavernHelper,Pt;let t=window.SillyTavern;if(t&&typeof t.getContext=="function"){let e=t.getContext();if(e&&e.TavernHelper)return Pt=e.TavernHelper,Pt}}catch(t){console.error("[开局框架] 获取 TavernHelper 失败",t)}return null}function Vs(){return!!gr()}function Js(t,e){try{let r=SillyTavern?.getContext?.()?.extensionSettings;if(!r)return e;let s=r[t];return s??e}catch{return e}}function zs(t,e){try{let n=SillyTavern?.getContext?.();if(!n?.extensionSettings)return;n.extensionSettings[t]=e,typeof n.saveSettingsDebounced=="function"&&n.saveSettingsDebounced()}catch{}}function Xs(t){if(!t||!t.includes("{{"))return t;try{let e=SillyTavern?.getContext?.(),n=e?.substituteParams;if(typeof n=="function")return n.call(e,t)}catch{}return t}function xe(t){let e=gr();if(!e)return null;let n=e[t];return typeof n=="function"?n:null}function Se(t,...e){let n=xe(t);if(!n)return null;try{return Promise.resolve(n(...e))}catch(r){return console.warn(`[开局框架] TavernHelper.${t} 调用失败：`,r),null}}function he(t){let e=xe("getVariables");if(e)try{return e(t)??{}}catch{return{}}return console.error("[开局框架] getVariables 不可用（TavernHelper 未注入主页面？）"),{}}function Y(t,e){let n=xe("updateVariablesWith");if(n){try{n(t,e)}catch(s){console.error("[开局框架] updateVariablesWith 失败",s)}return}let r=xe("replaceVariables");if(r){let s=he(e),o=t(s)||s;try{r(o,e)}catch(i){console.error("[开局框架] replaceVariables 失败",i)}}}function re(t,e){let n=xe("getChatMessages");if(n)try{return n(t,e)??[]}catch(r){return console.error("[开局框架] getChatMessages 失败",r),[]}try{let r=window.SillyTavern;if(r&&Array.isArray(r.chat))return r.chat.map((s,o)=>({message_id:o,name:s.name,role:s.is_user?"user":"assistant",is_user:!!s.is_user,is_hidden:!!s.is_hidden,message:s.mes}))}catch{}return console.error("[开局框架] getChatMessages 不可用"),[]}async function Be(t,e){let n=xe("setChatMessages");if(n)try{return await n(t,e)}catch(r){console.error("[开局框架] setChatMessages 失败",r);return}console.error("[开局框架] setChatMessages 不可用（TavernHelper 未注入？）")}function ye(){let t=xe("getLastMessageId");if(t)try{let e=t();if(typeof e=="number"&&e>=-1)return e}catch{}try{return re("0-{{lastMessageId}}").length-1}catch{}return-1}async function wn(t){let e=xe("generateRaw");if(!e)throw console.error("[开局框架] generateRaw 不可用"),new Error("generateRaw 不可用（TavernHelper 未注入）");return e(t)}function hr(t){let e=xe("stopGenerationById");if(e)try{return e(t)}catch{return!1}return!1}var Tn={MESSAGE_RECEIVED:"message_received",MESSAGE_DELETED:"message_deleted",MESSAGE_UPDATED:"message_updated",MESSAGE_SWIPED:"message_swiped",CHAT_CHANGED:"chat_id_changed",MESSAGE_SENT:"message_sent",GENERATION_ENDED:"generation_ended"};function _l(){try{if(typeof window<"u"&&window.eventSource)return window.eventSource;let t=window.SillyTavern;if(t&&typeof t.getContext=="function"){let e=t.getContext();if(e&&e.eventSource)return e.eventSource}}catch{}return null}function we(t,e){let n=_l();if(n&&typeof n.on=="function"){let r=(...s)=>{try{e(...s)}catch(o){console.error("[开局框架] 事件回调出错",o)}};return n.on(t,r),{stop:()=>{try{n.removeListener?.(t,r)}catch{}}}}return console.error("[开局框架] eventSource 不可用，无法监听 "+t),{stop:()=>{}}}function kl(){try{let t=gr();if(t?.iframe_events?.STREAM_TOKEN_RECEIVED_FULLY)return String(t.iframe_events.STREAM_TOKEN_RECEIVED_FULLY);if(window.iframe_events?.STREAM_TOKEN_RECEIVED_FULLY)return String(window.iframe_events.STREAM_TOKEN_RECEIVED_FULLY)}catch{}return"js_stream_token_received_fully"}function Zs(t,e){let n=kl(),r=(...o)=>{let i=typeof o[0]=="string"?o[0]:"",a=typeof o[1]=="string"?o[1]:void 0;if(!(a&&t&&a!==t))try{e(i)}catch(l){console.error("[开局框架] 流式回调出错",l)}},s=xe("eventOn");if(s)try{let o=s(n,r);return{stop:()=>{try{o?.stop?.()}catch{}try{xe("eventRemoveListener")?.(n,r)}catch{}}}}catch{}return we(n,r)}var Gs="__of_tables__";function V(){try{let t=he({type:"chat"}),e=t&&t[Gs];if(!e)return $t();let n=As.safeParse(e);return n.success?n.data:(console.warn("[开局框架] 表格存储校验失败，返回空 store：",n.error.message),$t())}catch(t){return console.error("[开局框架] loadStore 异常：",t),$t()}}function pe(t){Y(e=>(e[Gs]=structuredClone(t),e),{type:"chat"})}function ke(t=V()){return Object.values(t.sheets)}function be(t,e){let n=t.sheets[e];return n||(ke(t).find(r=>r.name===e||r.uid===e)??null)}function Ks(t,e){let n=structuredClone(t);for(let r of e){let s=be(n,r.sheet);if(!s)throw new Error(`操作目标表不存在：${r.sheet}`);let o=s.headers.length;if(r.type==="insert"){if(!r.cells)throw new Error(`insert 缺少 cells（表 ${s.name}）`);let i=Kt(r.cells,o);s.rows.push(i)}else if(r.type==="update"){if(r.rowId==null)throw new Error(`update 缺少 rowId（表 ${s.name}）`);if(!r.cells)throw new Error(`update 缺少 cells（表 ${s.name}）`);let i=r.rowId-1;if(i<0||i>=s.rows.length)throw new Error(`update 行号越界：${r.rowId}（表 ${s.name}）`);s.rows[i]=Kt(r.cells,o)}else if(r.type==="delete"){if(r.rowId==null)throw new Error(`delete 缺少 rowId（表 ${s.name}）`);let i=r.rowId-1;if(i<0||i>=s.rows.length)throw new Error(`delete 行号越界：${r.rowId}（表 ${s.name}）`);s.rows.splice(i,1)}}return n}function Kt(t,e){let n=t.slice(0,e);for(;n.length<e;)n.push(null);return n}function Oe(t){let e=$t();for(let n of t){let r={...n,sourceData:n?.sourceData??{}},s=hn.safeParse(r);if(!s.success){console.warn("[开局框架] 模板表校验失败，已跳过：",s.error.message,n);continue}let o=s.data,i={...lr,...o.updateConfig},a={uid:o.uid,name:o.name,purpose:o.purpose,type:o.type??"standard",headers:o.headers,rows:[],sourceData:o.sourceData,updateConfig:i};e.sheets[`sheet_${o.uid}`]=a}return pe(e),console.info(`[开局框架] 已导入模板：${Object.keys(e.sheets).length}/${t.length} 张表`),e}function _n(t,e){let n=V(),r=n.sheets[t]??be(n,t);if(!r)throw new Error(`seedInitialRows 目标表不存在：${t}`);let s=r.headers.length;r.rows=e.map(o=>Kt(o,s)),pe(n)}function Ys(t,e){let n=V(),r=n.sheets[t]??be(n,t);if(!r)throw new Error(`表不存在：${t}`);let s=e.rowId-1;if(s<0||s>=r.rows.length)throw new Error(`行号越界：${e.rowId}`);if(e.colIndex<0||e.colIndex>=r.headers.length)throw new Error(`列号越界：${e.colIndex}`);r.rows[s][e.colIndex]=e.value,pe(n)}function eo(t,e,n){let r=V(),s=r.sheets[t]??be(r,t);if(!s)throw new Error(`表不存在：${t}`);let o=Kt(e,s.headers.length);n==null?s.rows.push(o):s.rows.splice(n-1,0,o),pe(r)}function to(t,e){let n=V(),r=n.sheets[t]??be(n,t);if(!r)throw new Error(`表不存在：${t}`);let s=e-1;if(s<0||s>=r.rows.length)throw new Error(`行号越界：${e}`);r.rows.splice(s,1),pe(n)}function no(t,e){let n=V(),r=n.sheets[t]??be(n,t);if(!r)throw new Error(`表不存在：${t}`);e.name!=null&&(r.name=e.name),e.purpose!=null&&(r.purpose=e.purpose),e.headers!=null&&(r.headers=e.headers,r.rows=r.rows.map(s=>Kt(s,e.headers.length))),pe(n)}function ro(t,e){let n=V(),r=n.sheets[t]??be(n,t);if(!r)throw new Error(`表不存在：${t}`);r.sourceData={...r.sourceData,...e},pe(n)}function yr(t,e){let n=V(),r=n.sheets[t]??be(n,t);if(!r)throw new Error(`表不存在：${t}`);r.updateConfig={...r.updateConfig,...e},pe(n)}function so(t){let e=V(),n=`sheet_${t.uid}`;if(e.sheets[n])throw new Error(`表 uid 已存在：${t.uid}`);let r={...lr,...t.updateConfig};return e.sheets[n]={uid:t.uid,name:t.name,purpose:t.purpose??"",type:t.type??"standard",headers:t.headers,rows:[],sourceData:gn.parse(t.sourceData??{}),updateConfig:r},pe(e),n}function oo(t){let e=V();delete e.sheets[t],pe(e)}function ao(){pe($t())}function fe(){let t=B();return{fillApi:t.fillApi,dialogueApi:t.dialogueApi,globalDefaults:t.globalDefaults,promptTemplate:t.promptTemplate,autoFillEnabled:t.autoFillEnabled,maxRetries:t.maxRetries}}function br(t){gt({fillApi:t.fillApi,dialogueApi:t.dialogueApi,globalDefaults:t.globalDefaults,promptTemplate:t.promptTemplate,autoFillEnabled:t.autoFillEnabled,maxRetries:t.maxRetries})}function vr(t){let e=fe();return e.dialogueApi={...e.dialogueApi,...t},br(e),e}function io(t){let e=fe();return e.promptTemplate=t,br(e),e}function lo(){let t=fe();return t.promptTemplate={segments:ur,instructions:dr},br(t),t}function He(t){if(!t||!t.includes("{{"))return t;try{let e=SillyTavern?.getContext?.(),n=e?.substituteParams;if(typeof n=="function")return n.call(e,t)}catch{}return t}function co(t,e={}){let n=e.updateConfig??t.updateConfig,r=e.sendLatestRows??n.sendLatestRows,s=e.sendRowsTemplate??n.sendRowsTemplate,o=t.rows;r>0&&o.length>r&&(o=o.slice(-r));let i=t.headers,a=i.map((f,g)=>`[${g}:${f}]`).join(", "),l=`[表名: ${t.name}]
`;l+=`Columns: ${a}
`;let u=t.sourceData;return u.note&&(l+=`Note: ${u.note}
`),u.insertRule&&(l+=`Insert触发: ${u.insertRule}
`),u.updateRule&&(l+=`Update触发: ${u.updateRule}
`),u.deleteRule&&(l+=`Delete触发: ${u.deleteRule}
`),o.length===0?(l+=`(该表为空)
`,l):(s&&s.trim()?(l+=`数据：
`,o.forEach((f,g)=>{let w=g+1,y=f.map(v=>He(v??"")),p={row_index:String(g),row_id:String(w),cells:y.join(", "),row:y.join(", ")};y.forEach((v,b)=>{p[`col_${b}`]=v}),i.forEach((v,b)=>{p[v]=y[b]??""}),l+=Rl(s,p)+`
`})):o.forEach((f,g)=>{l+=`  [${g+1}] ${f.map(w=>He(w??"")).join(", ")}
`}),l)}function Rl(t,e){return t.replace(/\{\{\s*([\w\u4e00-\u9fa5]+)\s*\}\}/g,(n,r)=>Object.prototype.hasOwnProperty.call(e,r)?e[r]:n)}function Yt(t,e=""){let n=[];if(Array.isArray(t))for(let s of t)s&&typeof s.start=="string"&&typeof s.end=="string"&&n.push({start:s.start,end:s.end});let r=String(e||"").trim();return r&&r.split(`
`).forEach(s=>{let o=s.indexOf("|");o>0&&n.push({start:s.slice(0,o).trim(),end:s.slice(o+1).trim()})}),n}function Ll(t,e,n){if(!t||!e||!n)return null;let r=t.toLowerCase(),s=e.toLowerCase(),o=n.toLowerCase(),i=r.lastIndexOf(o);if(i===-1)return null;let a=r.lastIndexOf(s,Math.max(0,i-1));if(a===-1)return null;let l=i+n.length;return l<=a?null:t.slice(a,l)}function Al(t,e,n){if(!t||!e||!n)return t;let r=t.toLowerCase(),s=e.toLowerCase(),o=n.toLowerCase(),i=r.lastIndexOf(o);if(i===-1)return t;let a=r.lastIndexOf(s,Math.max(0,i-1));if(a===-1)return t;let l=i+n.length;return l<=a?t:(t.slice(0,a)+t.slice(l)).replace(/\n{3,}/g,`

`).trim()}function Ml(t,e){if(!t||e.length===0)return t;let n=[];for(let r of e){let s=Ll(t,r.start,r.end);s!==null&&n.push(s)}return n.length>0?n.join(`

`):t}function $l(t,e){let n=String(t??"");for(let r of e)n=Al(n,r.start,r.end);return n}function uo(t,e={}){let n=String(t??""),r=Yt(e.extractRules,e.extractTags);n=Ml(n,r);let s=Yt(e.excludeRules,e.excludeTags);return n=$l(n,s),n}function po(t){let{contextRounds:e,skipFloors:n,extractTags:r,extractRules:s,excludeTags:o,excludeRules:i}=t;if(e<=0)return"(无最新对话内容)";let a=re("0-{{lastMessageId}}");if(!a||a.length===0)return"(无最新对话内容)";let l=n>0?a.slice(0,-n):a;if(l.length===0)return"(无最新对话内容)";let u=[],f=0;for(let p=l.length-1;p>=0;p--){let v=l[p];if(v.is_user&&(f++,f>e))break;u.push(v)}let g=u.reverse();if(g.length===0)return"(无最新对话内容)";let w=Il();return g.map(p=>{let v=p.is_user?w:p.name||"角色",b=p.message||"";return!p.is_user&&(r||s&&s.length||o||i&&i.length)&&(b=uo(b,{extractTags:r,extractRules:s,excludeTags:o,excludeRules:i})),`${v}: ${b}`}).join(`
`)}function fo(t){if(t<=0)return"";let e=re("0-{{lastMessageId}}");if(!e||e.length===0)return"";let n=[],r=0;for(let s=e.length-1;s>=0&&!(e[s].is_user&&(r++,r>t));s--)n.push(e[s]);return n.reverse().map(s=>s.message||"").join(`
`)}function Il(){try{let t=SillyTavern?.getContext?.()?.name1||window.name1||"用户";return String(t||"用户")}catch{return"用户"}}function mo(t){return t||"默认组"}function go(t){let e=new Map;for(let r of t.sheets){if(!r.updateConfig.enabled)continue;let s=(r.updateConfig.group||"").trim();e.has(s)||e.set(s,[]),e.get(s).push(r)}let n=[];for(let[r,s]of e)n.push(Pl(r,s,t));return n}function Pl(t,e,n){let{settings:r,floorInfo:s}=n,o=r.globalDefaults,i=e.map(b=>It(b,o)),a=Math.max(1,...i.map(b=>b.contextRounds??o.contextRounds)),l=e.map(b=>co(b,{updateConfig:It(b,o)})).join(`
`),u=e.map(b=>`- ${b.name}（uid:${b.uid}，${b.rows.length} 行）`).join(`
`),f=i.flatMap(b=>Yt(b.extractRules,b.extractTags)),g=i.flatMap(b=>Yt(b.excludeRules,b.excludeTags)),w=Math.max(0,...i.map(b=>b.skipFloors??0),o.skipFloors),y=po({contextRounds:a,skipFloors:w,extractRules:f,excludeRules:g}),p={"{{instructions}}":r.promptTemplate.instructions||"","{{table_data}}":l,"{{messages}}":y,"{{worldbook}}":n.worldbookText||"","{{char_description}}":n.charDescription||"","{{persona_description}}":n.personaDescription||"","{{target_tables}}":u,"{{floor_info}}":s||""},v=r.promptTemplate.segments.filter(b=>b.enabled).map(b=>({role:b.role,content:Cl(b.content,p)}));return{group:t,sheets:e,contextRounds:a,orderedPrompts:v}}function Cl(t,e){return t.replace(/\{\{[^}]+\}\}/g,n=>Object.prototype.hasOwnProperty.call(e,n)?e[n]:n)}function Dl(){return window.EjsTemplate??window.TavernHelper?.EjsTemplate}async function Ol(t,e,n,r){let s=t;if(s.includes("<%")&&n&&r)try{s=await n.evaltemplate(s,r)}catch(o){console.warn(`[开局框架] 世界书条目「${e}」EJS 渲染失败（原样发送）：`,o)}return s.includes("{{")&&(s=He(s)),s}async function Hl(){let t=[],e=o=>{typeof o=="string"&&o&&!t.includes(o)&&t.push(o)},n=await Se("getGlobalWorldbookNames");Array.isArray(n)&&n.forEach(e);let r=await Se("getCharWorldbookNames","current");r&&(e(r.primary),Array.isArray(r.additional)&&r.additional.forEach(e));let s=await Se("getChatWorldbookName","current");return e(s),t}function Nl(t,e){try{if(t instanceof RegExp)return t.test(e);if(typeof t=="string"&&t.length>0)return e.toLowerCase().includes(t.toLowerCase())}catch{}return!1}async function ho(t={}){let e=t.matchText??"";try{let n=await Hl();if(n.length===0)return console.info("[开局框架] 没有可读取的世界书（全局/角色卡/聊天都未绑定）"),"";let r=Dl(),s=typeof r?.evaltemplate=="function"&&typeof r?.prepareContext=="function",o=null;if(s)try{o=await r.prepareContext()}catch(a){console.warn("[开局框架] EjsTemplate.prepareContext 失败，EJS 条目将原样发送：",a)}let i=[];for(let a of n){let l=await Se("getWorldbook",a);if(Array.isArray(l))for(let u of l){if(!u||u.enabled===!1||!u.content)continue;let f=u.strategy?.type;if(f==="vectorized")continue;if(f==="selective"){let y=u.strategy?.keys??[];if(y.length===0||!e||!y.some(p=>Nl(p,e)))continue}if(typeof u.probability=="number"&&u.probability<100&&Math.random()*100>=u.probability)continue;let g=u.name||"未命名条目",w=await Ol(u.content,g,s?r:null,o);i.push(`【${g}】
${w}`)}}return console.info(`[开局框架] 世界书读取：${n.length} 本，采纳 ${i.length} 条（蓝灯全发/绿灯按关键词；EJS ${s?"已编译":"未安装插件→原样发送"}；宏已替换；不截断）`),i.join(`

`)}catch(n){return console.warn("[开局框架] 读取世界书失败（本次填表不带世界书）：",n),""}}var ht="stat_data",en="开局框架",Fl=["normal","regenerate","continue","swipe"],yo=0,kn=null;function Ul(t){return t.rows.map(e=>{let n={};return t.headers.forEach((r,s)=>{n[r]=He(e[s]??"")}),n})}function jl(){let t=V(),e={};for(let n of ke(t))e[n.name]=Ul(n);return e}async function bo(t){if(t<0)return{ok:!1,tables:0,error:"当前没有聊天消息"};try{let e=jl(),n=Object.keys(e).length;return await Y(r=>{let s=r??{},o=s[ht]&&typeof s[ht]=="object"?s[ht]:{};return o[en]=e,s[ht]=o,s},{type:"message",message_id:t}),{ok:!0,tables:n}}catch(e){return console.error("[数据同步] 写入楼层变量失败：",e),{ok:!1,tables:0,error:e.message}}}async function Re(){let t=ye(),e=await bo(t);return e.ok?(console.info(`[数据同步] 已将 ${e.tables} 张表写入第 ${t} 楼变量（stat_data.${en}）`),{...e,floor:t}):e}async function vo(t,e){let n=Math.max(0,Math.min(t,e)),r=Math.min(ye(),Math.max(t,e)),s=0,o=0;for(let i=n;i<=r;i++){o++;try{let l=he({type:"message",message_id:i})?.[ht];if(!l||typeof l!="object"||!(en in l))continue;await Y(u=>{let f=u??{},g=f[ht];return g&&typeof g=="object"&&en in g&&(delete g[en],Object.keys(g).length===0&&delete f[ht]),f},{type:"message",message_id:i}),s++}catch(a){console.warn(`[数据同步] 清除第 ${i} 楼失败：`,a)}}return console.info(`[数据同步] 清除完成：扫描 ${o} 楼，清除 ${s} 楼的同步数据`),{cleared:s,scanned:o}}function Er(){return B().autoSyncEnabled}function Eo(){kn||(kn=we("message_received",(t,e)=>{if(!Fl.includes(e)||!Er())return;let n=Date.now();n-yo<1500||(yo=n,bo(typeof t=="number"?t:ye()))}),console.info("[数据同步] 自动同步已开启（收到 AI 回复后写入该楼变量）"))}function Wl(){kn?.stop(),kn=null}function xo(t){q("autoSyncEnabled",t),t?Eo():Wl()}function So(){Er()&&Eo()}async function wo(){Er()&&await Re()}function xr(t){let e={};return t.proxyPreset?e.proxy_preset=t.proxyPreset:(t.apiUrl&&(e.apiurl=t.apiUrl),t.apiKey&&(e.key=t.apiKey)),t.model&&(e.model=t.model),t.source&&(e.source=t.source),e.temperature=t.temperature,e.max_tokens=t.maxTokens,t.topP!=="unset"&&(e.top_p=t.topP),e}async function Sr(t){let{settings:e,orderedPrompts:n,generationId:r}=t,s=e.fillApi.mode==="custom"?xr(e.fillApi):void 0;return wr({orderedPrompts:n,jsonSchema:Is,customApi:s,stream:e.fillApi.stream!==!1,generationId:r})}async function wr(t){let{orderedPrompts:e,jsonSchema:n,customApi:r,stream:s,generationId:o}=t;try{let i=await wn({ordered_prompts:e,should_stream:s!==!1,should_silence:!0,...o?{generation_id:o}:{},...r?{custom_api:r}:{},...n?{json_schema:n}:{}});if(typeof i=="string")return{ok:!0,text:i};if(i&&typeof i=="object"){let a=i;if(typeof a.content=="string"&&a.content)return{ok:!0,text:a.content};if(Array.isArray(a.tool_calls)&&a.tool_calls.length>0){let l=a.tool_calls[0]?.function?.arguments;if(typeof l=="string")return{ok:!0,text:l}}return{ok:!1,error:"返回为非文本对象，无法解析"}}return{ok:!1,error:"返回为空"}}catch(i){return{ok:!1,error:`generateRaw 异常：${i.message}`}}}function ql(t){if(!t||!t.trim())return{ok:!1,error:"返回为空",raw:t};let e=t.trim();e=Ql(e);let n;try{n=JSON.parse(e)}catch(s){let o=e.match(/\{[\s\S]*\}/);if(o)try{n=JSON.parse(o[0])}catch(i){return{ok:!1,error:`JSON.parse 失败：${i.message}`,raw:t}}else return{ok:!1,error:`JSON.parse 失败：${s.message}`,raw:t}}let r=$s.safeParse(n);return r.success?{ok:!0,operations:r.data.operations}:{ok:!1,error:`结构校验失败：${r.error.message}`,raw:t}}function Ql(t){let e=t.match(/^```(?:json)?\s*\n?([\s\S]*?)\n?```\s*$/i);return e?e[1].trim():t}function Bl(t){let e=V(),n=[];for(let r of t){let s=be(e,r.sheet);s?((r.type==="update"||r.type==="delete")&&(r.rowId==null?n.push(`${r.type} 缺 rowId（${s.name}）`):(r.rowId<1||r.rowId>s.rows.length)&&n.push(`${r.type} 行号越界 ${r.rowId}（${s.name}）`)),(r.type==="insert"||r.type==="update")&&!r.cells&&n.push(`${r.type} 缺 cells（${s.name}）`)):n.push(`表不存在：${r.sheet}`)}return n}function Tr(t){let e=ql(t);if(!e.ok||!e.operations)return{ok:!1,applied:0,error:e.error};if(e.operations.length===0)return console.info("[开局框架] AI 返回空操作，无需更新"),{ok:!0,applied:0};let n=Bl(e.operations);if(n.length>0)return{ok:!1,applied:0,error:`预检失败：${n.join("; ")}`};let r=V();try{let s=Ks(r,e.operations);return pe(s),console.info(`[开局框架] 已应用 ${e.operations.length} 条操作`),{ok:!0,applied:e.operations.length}}catch(s){return{ok:!1,applied:0,error:`应用失败：${s.message}`}}}var Rn=!1,Ct=0,Ln=-1,tn=null;async function _r(t={}){if(Rn)return toastr?.warning?.("正在填表中，请稍候"),{ok:!1,applied:0,errors:["busy"]};let e=V(),n=ke(e).filter(a=>a.updateConfig.enabled);if(t.targetSheetKeys&&t.targetSheetKeys.length>0&&(n=t.targetSheetKeys.map(a=>be(e,a)).filter(a=>!!a).filter(a=>a.updateConfig.enabled)),n.length===0)return toastr?.info?.("没有需要填写的表"),{ok:!0,applied:0,errors:[]};let r=fe();if(!r.autoFillEnabled&&t.reason!=="manual")return{ok:!1,applied:0,errors:["auto disabled"]};Rn=!0;let s=[],o=0,i=`of_fill_${Date.now()}`;try{let a=`AI 回复计数=${Ct}，上次填表=${Ln}`,u=r.promptTemplate.segments.some(g=>g.enabled&&g.content.includes("{{worldbook}}"))?await ho({matchText:fo(r.globalDefaults.contextRounds)}):"",f=go({sheets:n,settings:r,floorInfo:a,worldbookText:u,charDescription:"",personaDescription:""});for(let g of f){let w=mo(g.group),y=encodeURIComponent(g.group||"_"),p=await Sr({orderedPrompts:g.orderedPrompts,settings:r,generationId:`${i}_g${y}`});if(!p.ok||!p.text){if(s.push(`分组[${w}]: ${p.error}`),r.maxRetries>0){let b=await Sr({orderedPrompts:g.orderedPrompts,settings:r,generationId:`${i}_g${y}_r`});if(b.ok&&b.text){let k=Tr(b.text);k.ok?o+=k.applied:s.push(`分组[${w}] 重试后应用失败: ${k.error}`)}else s.push(`分组[${w}] 重试失败: ${b.error}`)}continue}let v=Tr(p.text);v.ok?(o+=v.applied,console.info(`[开局框架] 分组[${w}] 完成（${g.sheets.length} 张表，读取 ${g.contextRounds} 轮）`)):s.push(`分组[${w}] 应用失败: ${v.error}`)}return Ln=Ct,wo(),s.length===0?toastr?.success?.(`填表完成，应用 ${o} 条操作`):toastr?.warning?.(`填表完成（${s.length} 个错误）`),console.info("[开局框架] runFill 完成",{applied:o,errors:s,reason:t.reason}),{ok:s.length===0,applied:o,errors:s}}catch(a){let l=a.message;return s.push(l),console.error("[开局框架] runFill 异常:",a),{ok:!1,applied:o,errors:s}}finally{Rn=!1}}function To(){return Rn}function An(){tn||(tn=we(Tn.MESSAGE_RECEIVED,(t,e)=>{if(e==="normal"||e==="regenerate"||e==="continue"||e==="swipe"){Ct+=1;let n=fe(),r=V(),s=ke(r).filter(a=>{if(!a.updateConfig.enabled)return!1;let l=It(a,n.globalDefaults),u=Math.max(1,l.updateFrequency||1);return Ct%u===0});if(s.length===0)return;let o=Ct-Ln,i=Math.max(0,...s.map(a=>It(a,n.globalDefaults).skipFloors||0));if(o<i)return;_r({targetSheetKeys:s.map(a=>a.uid),reason:"auto"})}}),console.info("[开局框架] 自动填表已启动"))}function Mn(){tn&&(tn.stop(),tn=null)}function _o(){Ct=0,Ln=-1}var kr="<StatusPlaceHolderImpl/>",Vl=["normal","regenerate","continue","swipe"],$n=null;function ko(){return B().statusPlaceholderEnabled}async function Ro(t){try{let n=re(t)?.[0];if(!n||n.is_user)return;let r=n.message||"";if(r.endsWith(kr))return;await Be([{message_id:t,message:r+`
`+kr}],{refresh:"affected"}),console.info(`[开局框架] 已为第 ${t} 楼追加状态栏标记`)}catch(e){console.error("[开局框架] 追加状态栏标记失败：",e)}}function Lo(){$n||($n=we("message_received",(t,e)=>{Vl.includes(e)&&ko()&&typeof t=="number"&&t>=0&&Ro(t)}),console.info("[开局框架] 状态栏标记已开启（AI 回复末尾追加 <StatusPlaceHolderImpl/>）"))}function Jl(){$n?.stop(),$n=null}async function Ao(t){if(q("statusPlaceholderEnabled",t),t){Lo();let n=[...re("0-{{lastMessageId}}")||[]].reverse().find(r=>!r.is_user);n&&!(n.message||"").endsWith(kr)&&await Ro(n.message_id)}else Jl()}function Mo(){ko()&&Lo()}var $o="__of_dialogue__",yt=["选模式","魔法路线","种族与属性","金手指","技能与凭证","身份资产资金","女主/同伴","终审与结算"],In={currentStep:0,selections:[],ledger:"",status:"idle",history:[]};function zl(t){if(!Array.isArray(t))return[];let e=[];for(let n of t)n&&typeof n=="object"&&typeof n.content=="string"&&(n.role==="user"||n.role==="assistant")&&e.push({role:n.role,content:n.content});return e.slice(-200)}function se(){try{let e=he({type:"chat"})?.[$o];if(!e)return structuredClone(In);let n=typeof e=="object"&&e!==null?e:null;return!n||typeof n.currentStep!="number"||!["idle","in_progress","settled"].includes(n.status)?structuredClone(In):{currentStep:n.currentStep,selections:Array.isArray(n.selections)?n.selections:[],ledger:n.ledger||"",status:n.status,settledText:n.settledText,settledAt:n.settledAt,history:zl(n.history)}}catch(t){return console.warn("[开局对话] 读取对话状态失败",t),structuredClone(In)}}function Le(t){Y(e=>(e[$o]=structuredClone(t),e),{type:"chat"})}function Rr(t,e=se()){let n={...e,currentStep:t,selections:e.selections.slice(0,t)};return t===0&&(n.status="in_progress"),Le(n),n}function Io(t,e=se()){let n={...e,ledger:t};return Le(n),n}function Po(t,e=se()){let n={...e,status:"settled",settledText:t,settledAt:Date.now()};return Le(n),n}function Co(){Le({...In})}function Do(t=se()){let e=[];e.push(`【对话进度】当前步骤：第 ${t.currentStep} 步·${yt[t.currentStep]??""}`);let n=t.selections.map((r,s)=>r?`第${s}步(${yt[s]})：${r}`:null).filter(Boolean);return n.length>0&&e.push(`已确认选项：
`+n.join(`
`)),t.ledger&&e.push(`最近台账：${t.ledger}`),e.push('【引导要求】一次只推进一个问题；玩家说"回到第 X 步"时按规则表第 9 节处理。'),e.join(`
`)}var Lr="【自定义开局结算开始】",Ar="【自定义开局结算结束】";function Mr(t,e=Lr,n=Ar){if(!t||!e||!n)return null;let r=t.indexOf(e);if(r===-1)return null;let s=t.indexOf(n,r+e.length);return s===-1?null:t.slice(r,s+n.length)}function Xl(t){let e=t.trim();if(!e||e==="无")return{kind:"scalar",value:e};if(e.includes(";;"))return{kind:"list",items:e.split(";;").map(r=>r.trim()).filter(Boolean).map(r=>({cols:r.split("|").map(s=>s.trim()),original:r}))};if(e.includes(";")){let n={};return e.split(";").map(r=>r.trim()).filter(Boolean).forEach(r=>{let s=r.indexOf("=");s>0?n[r.slice(0,s).trim()]=r.slice(s+1).trim():n[r]=""}),{kind:"pairs",pairs:n}}return e.includes("|")?{kind:"list",items:[{cols:e.split("|").map(r=>r.trim()),original:e}]}:{kind:"scalar",value:e}}function Zl(t){let e={},n={},s=t.replace(Lr,"").replace(Ar,"").trim().split(`
`).map(o=>o.trim()).filter(Boolean);for(let o of s){let i=o.indexOf(":");if(i<=0)continue;let a=o.slice(0,i).trim(),l=o.slice(i+1).trim();!a||!l||(e[a]=l,n[a]=Xl(l))}return{raw:t,fields:e,parsed:n}}var $r=["模式","点数","魔法","主角","女主","主角技能","女主技能","资产","地区","网络","总览","金手指","开场白"];function Oo(t,e={}){let n=e.startMark??Lr,r=e.endMark??Ar,s=e.requiredKeys??$r,o=Mr(t,n,r);if(!o)return{ok:!1,missingKeys:[],error:`未找到结算块标记（${n}…${r}）`};let i=Zl(o),a=s.filter(l=>!Object.prototype.hasOwnProperty.call(i.fields,l));return a.length>0?{ok:!1,settlement:i,missingKeys:a,error:`结算块缺少字段：${a.join("、")}`}:{ok:!0,settlement:i,missingKeys:[]}}var Pn=`{
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
}`;var le=(()=>{try{let t=JSON.parse(Pn),e=(n,r)=>t.lines?.[n]?.tables?.find(s=>s?.name===r)??null;return{tech:e("爱丽丝","已解锁科技"),authority:e("爱丽丝","权柄"),recipe:e("墨白","配方"),refine:e("墨白","精炼"),farm:e("墨白","普通种养"),crop:e("墨白","高级作物"),livestock:e("墨白","高级养殖")}}catch(t){return console.warn("[开局框架] 预设表定义加载失败（规则包将不含这批表）：",t),{}}})(),Ho=[{uid:"profile",name:"角色档案",purpose:'存主角与主要角色的档案。固定几行：主角一行、各主要角色一行。综合属性格式"力量X 敏捷X 体质X 智力X"，0-25 整数。属性不轻易变化。',scope:"always",type:"standard",headers:["角色","名字","身份","种族","性别","外貌","整体状态","综合属性","流动资金"],sourceData:{note:'记录主角和主要角色的档案。固定几行：主角一行、各主要角色一行。综合属性格式"力量X 敏捷X 体质X 智力X"，0-25 整数。属性不轻易变化。',insertRule:"新角色登场插入一行。",updateRule:"按 角色 定位更新状态/属性/资金。",deleteRule:"禁止。角色离场仅更新状态。"},updateConfig:{enabled:!0,contextRounds:3,updateFrequency:1}},{uid:"skills",name:"技能",purpose:"存各角色掌握的技能与熟练阶段。",scope:"always",type:"standard",headers:["所属","技能名","技能类型","阶段","效果描述"],sourceData:{note:"记录各角色的技能。每行一个技能。阶段：入门/初学/熟练/精通/大师。",insertRule:'学会新技能时插入，初始"初学"。',updateRule:"技能提升时更新阶段与效果，每次一阶。",deleteRule:"遗忘/废弃时删除。"},updateConfig:{enabled:!0,contextRounds:3,updateFrequency:1}},...le.tech?[le.tech]:[],...le.authority?[le.authority]:[],{uid:"assets",name:"资产",purpose:"记录房产/商铺/物品等资产的归属与状态，开局常驻（后续也会自动增删）。",scope:"always",type:"standard",headers:["名称","简介","类型","所属","实际掌控者","所属地区"],sourceData:{note:"记录的房产/商铺/组织/物品等资产。名称|简介|类型|地区 的列表。",insertRule:"获得新资产时插入一行。",updateRule:"资产状态变化时更新。",deleteRule:"失去资产时删除。"},updateConfig:{enabled:!0,contextRounds:2,updateFrequency:2}},{uid:"region",name:"地区",purpose:"开局所在地区的设定，基本只读——结算没提到地区就不建这张表。",scope:"onSeed",type:"standard",headers:["名称","规模","简述","所属","主导产业","经济状态","政治状态","与主角关系","关键势力","当前事件"],sourceData:{note:'开局所在地区设定。填满十列，无关键势力写"无"。',insertRule:"开局时一行，一般不改。",updateRule:"地区状态重大变化时更新。",deleteRule:"禁止。"},updateConfig:{enabled:!1,contextRounds:0,updateFrequency:999}},{uid:"network",name:"系统网络",purpose:"推演系统的已连接对象（首行固定玩家），开局常驻。",scope:"always",type:"standard",headers:["已连接对象","智力","状态","态度"],sourceData:{note:'金手指=推演系统时的已连接对象。首行固定"玩家"。',insertRule:"新增连接时插入。",updateRule:"状态下变化时更新。",deleteRule:"断开连接时删除。"},updateConfig:{enabled:!0,contextRounds:2,updateFrequency:2}},{uid:"overview",name:"系统总览",purpose:"推演系统的总览状态（单行表）——结算没产出总览字段就不建。",scope:"onSeed",type:"standard",headers:["当前时间","系统状态","当前推演解锁","已解锁知识库"],sourceData:{note:"推演系统的总览状态。单行表。",insertRule:"禁止。",updateRule:"总览变化时更新。",deleteRule:"禁止。"},updateConfig:{enabled:!0,contextRounds:2,updateFrequency:1}},...le.recipe?[le.recipe]:[],...le.refine?[le.refine]:[],...le.farm?[le.farm]:[],...le.crop?[le.crop]:[],...le.livestock?[le.livestock]:[]];function Kl(t,e){return!t||t.kind!=="pairs"?"":t.pairs[e]??""}function Cn(t){return!t||t.kind!=="list"?[]:t.items}function No(t){let e=[],n=t.parsed.主角;if(n){let s=n.kind==="pairs"?n.pairs:{};e.push(["主角",s.名字??"{{user}}",s.身份??"",s.种族??"",s.性别??"",s.外貌??"",s.状态??"健康",s.属性??"",s.资金??""])}let r=t.parsed.女主;if(r&&r.kind==="pairs"&&Object.keys(r.pairs).length>0){let s=r.pairs;e.push(["女主",s.名字??"",s.身份??"",s.种族??"",s.性别??"",s.外貌??"",s.状态??"健康",s.属性??"",s.资金??""])}return e}function Fo(t){let e=[],n=[["主角","主角技能"],["女主","女主技能"]];for(let[r,s]of n){let o=Cn(t.parsed[s]);for(let i of o){let[a,l,u,f,...g]=i.cols;a&&e.push([r,a,l??"",u??"",f??g.join("|")])}}return e}function Uo(t){let e=[],n=Cn(t.parsed.资产);for(let r of n){let[s,o,i,a]=r.cols;s&&e.push([s,o??"",i??"","{{user}}","{{user}}",a??""])}return e}function jo(t){let e=Cn(t.parsed.地区);if(e.length===0)return[];let n=e[0].cols;return[[n[0]??"",n[1]??"",n[2]??"",n[3]??"",n[4]??"",n[5]??"",n[6]??"",n[7]??"",n[8]??"无",n[9]??""]]}function Wo(t){let e=[];e.push(["{{user}}",Kl(t.parsed.网络,"智力")||"玩家智力","聊天使用中","乐意分享"]);let n=Cn(t.parsed.网络);for(let r of n){let[s,o,i,a]=r.cols;s&&s!=="{{user}}"&&e.push([s,o??"",i??"",a??""])}return e}function qo(t){let e=t.parsed.总览;if(!e||e.kind!=="pairs")return[];let n=e.pairs.当前时间??"",r=e.pairs.系统状态??"闲置",s=e.pairs.当前推演解锁??"无",o=e.pairs.已解锁知识库??"地球";return[[n,r,s,o]]}function Qo(t,e){try{if(!e.tables||e.tables.length===0)return{ok:!1,packageName:e.name,sheetsImported:0,rowsSeeded:0,error:`规则包「${e.name}」没有配置表结构（tables 为空）`};let n={};for(let[i,a]of Object.entries(e.seedRows??{}))Array.isArray(a)&&a.length>0&&(n[i]=a);if(e.seedDynamic){let i=e.seedDynamic(t)??{};for(let[a,l]of Object.entries(i))Array.isArray(l)&&l.length>0&&(n[a]=l)}let r=e.tables.filter(i=>i.scope==="onSeed"?!!n[i.uid]?.length:!0);Oe(r);let s=0;for(let[i,a]of Object.entries(n))try{_n(`sheet_${i}`,a),s+=a.length}catch(l){console.warn(`[开局对话] 初始行写入失败（表 ${i}）：`,l)}let o=e.tables.filter(i=>!r.includes(i)).map(i=>i.name);return o.length>0&&console.info(`[开局对话] 按需跳过未用到的表：${o.join("、")}`),{ok:!0,packageName:e.name,sheetsImported:r.length,rowsSeeded:s}}catch(n){return console.error("[开局对话] 结算落地失败",n),{ok:!1,packageName:e.name,sheetsImported:0,rowsSeeded:0,error:n.message}}}var Yl=/\[台账\][\s\S]*?(?=$|\n|【)/,ec=/下一步\s*[:：]\s*第\s*(\d+)\s*步/i;function Bo(t){let e=t.maxHistoryEntries??20,n=new Set,r=new Set,s=null,o=!1;function i(){n.forEach(y=>{try{y()}catch{}})}function a(y){r.forEach(p=>{try{p(y)}catch{}})}function l(){if(!s)return!1;o=!0;try{return hr(s)}catch{return!1}}function u(y){return y.map((p,v)=>({message_id:v,name:p.role==="user"?"玩家":"AI",role:p.role,is_user:p.role==="user",message:p.content}))}function f(y,p){if(p.status==="settled")return;let v=y.match(Yl);v&&Io(v[0].trim());let b=y.match(ec);if(b){let k=parseInt(b[1],10);k>=0&&k<=7&&k>p.currentStep&&Rr(k)}if(Mr(y,t.pkg.settlementStartMark,t.pkg.settlementEndMark)){let k=Oo(y,{startMark:t.pkg.settlementStartMark,endMark:t.pkg.settlementEndMark,requiredKeys:t.pkg.requiredKeys});if(k.ok&&k.settlement){let W=Qo(k.settlement,t.pkg);W.ok?(Po(k.settlement.raw),t.onSettled?.({packageName:W.packageName,rows:W.rowsSeeded}),toastr?.success?.(`开局结算已落地：${W.packageName}（${W.sheetsImported} 张表，${W.rowsSeeded} 行数据）`),Re()):(t.onSettleError?.(W.error||"落地失败"),toastr?.error?.("结算解析成功但落地失败："+(W.error||"未知错误")))}else t.onSettleError?.(k.error||"结算校验失败"),toastr?.error?.("结算块校验失败："+(k.error||"未知错误"))}}function g(y){let p=se();if(p.status==="settled")return;let v=y.match(/回到第\s*(\d+)\s*步/);if(v){let b=parseInt(v[1],10);if(b>=0&&b<=7&&b<p.currentStep){Rr(b),toastr?.info?.(`已回到第 ${b} 步（${yt[b]}）`);return}}/改模式|换模式/.test(y)&&toastr?.warning?.("模式选定后不可更改，建议重新开局")}async function w(){let p=se().history;if(![...p].reverse().find(Q=>Q.role==="user"))throw new Error("会话历史里没有玩家消息");let b=Do(),k=[{role:"system",content:t.rulesText},...b?[{role:"system",content:b}]:[],...p.slice(-e).map(Q=>({role:Q.role,content:Q.content}))];o=!1,s=`of_chat_${Date.now()}`;let W=Zs(s,Q=>a(Q));try{let Q=await wn({ordered_prompts:k,should_stream:!0,should_silence:!0,generation_id:s,...t.customApi?{custom_api:t.customApi}:{}}),ve=typeof Q=="string"?Q:Q?.content||"";if(!ve)throw new Error("AI 返回为空");let Ft=se();Ft.history.push({role:"assistant",content:ve}),Le(Ft),i(),f(ve,Ft)}finally{W.stop(),s=null}}return{read(){return u(se().history)},async sendMessage(y){let p=y.trim();if(!p)return;g(p);let v=se();v.history.push({role:"user",content:p}),v.status==="idle"&&(v.status="in_progress"),Le(v),i();try{await w()}catch(b){if(o){toastr?.info?.("已停止生成（这条消息已保留，可继续补充发送）");return}let k=se();k.history.length>0&&k.history[k.history.length-1].role==="user"&&(k.history.pop(),Le(k),i()),console.error("[开局对话] 生成失败",b),toastr?.error?.("对话生成失败："+b.message)}},async reroll(y){let p=se(),v=p.history[p.history.length-1];if(!v||v.role!=="assistant"||y!==p.history.length-1){toastr?.warning?.("只能重新生成最后一条 AI 回复");return}p.history.pop(),Le(p),i();try{await w()}catch(b){if(o){toastr?.info?.("已停止生成（旧回复已移除，可再次点重新生成）");return}console.error("[开局对话] 重新生成失败",b),toastr?.error?.("重新生成失败："+b.message)}},async delete(y){let p=se();y<0||y>=p.history.length||(p.history.splice(y,1),Le(p),i())},onMessagesChanged(y){return n.add(y),()=>{n.delete(y)}},stop:l,onStreamUpdate(y){return r.add(y),()=>{r.delete(y)}}}}var Vo=`# 自定义开局 · AI 引导规则表（第五开局线专用）

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
`;var tc={id:"custom-opening",name:"自定义开局（内置）",description:"第五开线规则表：七步引导 + 结算落地到 13 张表（角色档案/技能/已解锁科技/权柄/系统网络/资产/地区/系统总览 + 墨白线配方/精炼/种养×3）。",rulesText:Vo,tables:Ho,settlementStartMark:"【自定义开局结算开始】",settlementEndMark:"【自定义开局结算结束】",requiredKeys:[...$r],seedRows:{},builtin:!0,seedDynamic:t=>({profile:No(t),skills:Fo(t),assets:Uo(t),region:jo(t),network:Wo(t),overview:qo(t)})},nc={id:"card-b-placeholder",name:"角色卡B（占位）",description:"占位包：给另一张卡预留的插槽。还没有规则和表格，无法开始引导。可改成 JSON 导入自己的包，或在本文件里填内容。",rulesText:"",tables:[],settlementStartMark:"【自定义开局结算开始】",settlementEndMark:"【自定义开局结算结束】",requiredKeys:[],seedRows:{},builtin:!0},Dn=[tc,nc];function Ir(){let t=B().rulePackages,e=[];for(let n of t){let r=pr.safeParse(n);r.success?e.push({...r.data,builtin:!1}):console.warn("[规则包] 忽略损坏的导入包：",r.error.message)}return e}function On(){return[...Dn,...Ir()]}function Ve(){let t=B().activeRulePackageId;return On().find(n=>n.id===t)??Dn[0]}function Pr(t){return On().some(e=>e.id===t)?(q("activeRulePackageId",t),!0):(console.warn("[规则包] 切换失败，包不存在：",t),!1)}function Jo(t){let e=pr.safeParse(t);if(!e.success){let i=e.error.issues[0];return{ok:!1,error:`${i?.path?.join(".")||"根"}: ${i?.message||e.error.message}`}}let n=e.data;if(!n.rulesText.trim()&&n.tables.length===0)return{ok:!1,error:"规则包内容为空（rulesText 和 tables 都没填）"};let r={...n,builtin:!1},s=Ir(),o=s.findIndex(i=>i.id===r.id);return o>=0?s[o]=r:s.push(r),q("rulePackages",s),{ok:!0,pkg:r}}function zo(t){return Dn.some(e=>e.id===t)?{ok:!1,error:"内置规则包不能删除"}:(q("rulePackages",Ir().filter(e=>e.id!==t)),B().activeRulePackageId===t&&q("activeRulePackageId",Jt),{ok:!0})}var bt={messages:[],isGenerating:!1,activeSheetKey:""};function Dt(t){try{bt.messages=t.read()}catch(e){console.warn("[开局框架面板] 读取消息失败",e),bt.messages=[]}}var Hn=null;function Cr(){return Hn||(Hn=rc()),Hn}function vt(){Hn=null}function rc(){let t=Ve(),e=fe().dialogueApi;return Bo({rulesText:t.rulesText,pkg:t,customApi:e.mode==="custom"?xr(e):void 0,onSettled:n=>{console.info("[开局对话] 已落地",n)},onSettleError:n=>{console.warn("[开局对话] 结算失败",n)}})}function Xo(){let t=Ve();return t.rulesText.trim()?(vt(),Cr(),toastr?.info?.(`已进入引导对话（规则包：${t.name}；独立会话，不含酒馆聊天记录）`),!0):(toastr?.warning?.(`规则包「${t.name}」还没有配置规则，无法开始引导。请先导入规则包或在「开局」页切换。`),!1)}var Nn=`[
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
`;function oc(){return JSON.parse(Nn)}function Go(t){let e=V(),n=Object.keys(e.sheets).length,r=n>0,s=null;try{s=se()}catch{}t.innerHTML=`
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
        <span style="width:8px;height:8px;border-radius:50%;background:${r?"#a6e3a1":"#6c7086"}"></span>
        <span>${r?`已开局：${n} 张表`:"未开局"}</span>
        ${r?'<button class="of-btn of-btn-ghost of-btn-sm" id="of-start-reset" style="margin-left:auto">重置开局</button>':""}
      </div>

      <div class="of-path-grid">
        <button class="of-path-card" data-path="ai"><div class="of-path-icon">🤖</div><div class="of-path-title">AI 对话引导</div><div class="of-path-desc">按当前规则包聊出开局，自动结算落地</div></button>
        <button class="of-path-card" data-path="template"><div class="of-path-icon">📦</div><div class="of-path-title">选模板开局</div><div class="of-path-desc">从样例模板里选一套，手动填数据</div></button>
        <button class="of-path-card" data-path="manual"><div class="of-path-icon">✏️</div><div class="of-path-title">手动建表</div><div class="of-path-desc">从零定义表结构和数据</div></button>
      </div>

      <div class="of-card" id="of-path-detail"></div>
    </div>
  `,ac(t,s),t.querySelector("#of-pkg-import-toggle").addEventListener("click",()=>{let i=t.querySelector("#of-pkg-import");i.style.display=i.style.display==="none"?"":"none"}),t.querySelector("#of-pkg-file").addEventListener("change",i=>{let a=i.target.files?.[0];if(!a)return;let l=new FileReader;l.onload=()=>Zo(t,l.result),l.readAsText(a,"utf-8"),i.target.value=""}),t.querySelector("#of-pkg-paste-go").addEventListener("click",()=>{let i=t.querySelector("#of-pkg-paste").value;if(!i.trim()){toastr?.warning?.("请粘贴规则包 JSON");return}Zo(t,i)}),t.querySelectorAll("[data-path]").forEach(i=>{i.addEventListener("click",()=>ic(t,i.getAttribute("data-path"),r,s))});let o=t.querySelector("#of-start-reset");o&&o.addEventListener("click",()=>{confirm("重置开局将清空所有表数据，确定？")&&(ao(),Z())})}function ac(t,e){let n=t.querySelector("#of-pkg-list"),r=Ve();n.innerHTML=On().map(s=>{let o=s.id===r.id,i=!!s.rulesText.trim();return`<div data-pkg="${s.id}" style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;cursor:pointer;${o?"background:#313244;outline:1px solid #89b4fa":""}">
      <span>${o?"🔵":"⚪"}</span>
      <div style="flex:1;min-width:0">
        <div style="font-weight:600">${s.name}
          <span class="of-badge ${i?"of-badge-ok":"of-badge-warn"}" style="margin-left:6px">${i?"已配置":"未配置"}</span>
          ${s.builtin?'<span class="of-badge of-badge-idle" style="margin-left:4px">内置</span>':""}
        </div>
        <div class="of-hint">${s.description||"—"}</div>
      </div>
      ${s.builtin?"":`<button class="of-btn of-btn-danger of-btn-sm" data-pkgdel="${s.id}">删</button>`}
    </div>`}).join(""),n.querySelectorAll("[data-pkg]").forEach(s=>{s.addEventListener("click",o=>{if(o.target.closest("[data-pkgdel]"))return;let i=s.getAttribute("data-pkg"),a=Ve();if(i===a.id)return;Pr(i),vt();let l=Ve();e&&e.status==="in_progress"?toastr?.warning?.(`已切换到「${l.name}」。当前聊天的引导进度是上一个包的，建议点「重置引导进度」再开新局。`):toastr?.success?.(`已切换规则包：${l.name}`),Z()})}),n.querySelectorAll("[data-pkgdel]").forEach(s=>{s.addEventListener("click",()=>{let o=s.getAttribute("data-pkgdel");if(!confirm("删除这个导入的规则包？"))return;let i=zo(o);if(!i.ok){toastr?.error?.(i.error||"删除失败");return}vt(),toastr?.success?.("已删除"),Z()})})}function Zo(t,e){let n;try{n=JSON.parse(e)}catch(s){toastr?.error?.("JSON 解析失败："+s.message);return}let r=Jo(n);if(!r.ok||!r.pkg){toastr?.error?.("规则包导入失败："+(r.error||"未知错误"));return}Pr(r.pkg.id),vt(),toastr?.success?.(`已导入并切换规则包：${r.pkg.name}`),Z()}function ic(t,e,n,r){let s=t.querySelector("#of-path-detail");if(t.querySelectorAll("[data-path]").forEach(o=>o.classList.toggle("active",o.getAttribute("data-path")===e)),e==="ai"){let o=Ve(),i=r?r.status==="settled"?"✅ 已结算落地":r.status==="in_progress"?`进行中 · 第 ${r.currentStep} 步 ${yt[r.currentStep]??""}`:"未开始":"—",a=r?r.status==="settled"?"of-badge-ok":r.status==="in_progress"?"of-badge-warn":"of-badge-idle":"of-badge-idle",l="";if(r&&r.status==="in_progress"){let f=yt.map((w,y)=>`<span class="of-step-chip ${y<r.currentStep?"of-step-done":y===r.currentStep?"of-step-cur":"of-step-todo"}">${w}</span>`).join(""),g=(r.selections||[]).filter(w=>w);l=`<div style="margin-top:8px">${f}</div>${g.length?`<div style="margin-top:6px;color:#a6e3a1;font-size:12px">已选：${g.join("；")}</div>`:""}${r.ledger?`<div style="margin-top:4px;color:#f9e2af;font-size:12px">${r.ledger}</div>`:""}`}s.innerHTML=`
      <p style="margin:0 0 12px">按当前规则包「<b>${o.name}</b>」引导你完成开局，结束后按该包的表格自动结算落地。</p>
      <div style="margin-bottom:12px"><span class="of-badge ${a}">${i}</span></div>
      ${l}
      ${r&&r.status==="settled"?'<p class="of-muted" style="margin-top:8px">结算已完成，可到"表格数据"页查看。</p>':""}
      <div style="margin-top:12px;display:flex;gap:8px">
        <button class="of-btn" id="of-ai-go">${r?.status==="in_progress"?"继续引导对话":"开始引导对话"}</button>
        ${r&&r.status!=="idle"?'<button class="of-btn of-btn-ghost of-btn-sm" id="of-ai-reset">重置引导进度</button>':""}
      </div>
    `,s.querySelector("#of-ai-go").addEventListener("click",()=>{Xo()&&Je("chat")});let u=s.querySelector("#of-ai-reset");u&&u.addEventListener("click",()=>{confirm("重置对话引导进度？（会清空这段引导会话的历史）")&&(Co(),Z())})}else if(e==="template"){let o=oc();s.innerHTML=`
      <p class="of-muted" style="margin:0 0 10px">从样例模板里选一套导入：</p>
      <div id="of-tpl-list">
        <div class="of-card" style="cursor:pointer" id="of-tpl-standard">
          <div style="font-weight:600">标准模板</div>
          <div class="of-muted" style="font-size:12px;margin-top:4px">角色档案 / 技能 / 纪要表 / 资产 / 地区 / 系统网络 / 系统总览（${o.length} 张表）</div>
        </div>
        <div style="margin-top:8px"><button class="of-btn of-btn-ghost of-btn-sm" id="of-tpl-paste">粘贴 JSON 导入</button></div>
        <div id="of-tpl-paste-area" style="display:none;margin-top:8px">
          <textarea class="of-textarea" id="of-tpl-paste-text" rows="8" placeholder='[ { "uid":"x","name":"表名","headers":["列1"],"sourceData":{"note":"..."}, "updateConfig":{} } ]'></textarea>
          <button class="of-btn of-btn-sm" style="margin-top:6px" id="of-tpl-paste-go">导入</button>
        </div>
      </div>
    `;let i=s.querySelector("#of-tpl-list");i.querySelector("#of-tpl-standard").addEventListener("click",()=>{confirm(`将导入 ${o.length} 张表，会清空当前所有表数据。继续？`)&&(Oe(o),Z(),toastr?.success?.(`已导入模板：${o.length} 张表`))}),i.querySelector("#of-tpl-paste").addEventListener("click",()=>{i.querySelector("#of-tpl-paste-area").style.display=""}),i.querySelector("#of-tpl-paste-go").addEventListener("click",()=>{let a=i.querySelector("#of-tpl-paste-text").value;if(!a.trim()){toastr?.warning?.("请粘贴模板 JSON");return}try{let l=JSON.parse(a);if(!Array.isArray(l))throw new Error("必须是数组");if(!confirm(`将导入 ${l.length} 张表，继续？`))return;Oe(l),Z(),toastr?.success?.(`已导入 ${l.length} 张表`)}catch(l){toastr?.error?.("JSON 解析失败："+l.message)}})}else if(e==="manual"){s.innerHTML=`
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
    `;let o=[];s.querySelector("#of-ns-create").addEventListener("click",()=>{let i=s.querySelector("#of-ns-uid").value.trim(),a=s.querySelector("#of-ns-name").value.trim();if(!i||!a){toastr?.warning?.("uid 和 name 必填");return}let l=s.querySelector("#of-ns-headers").value.split(",").map(u=>u.trim()).filter(Boolean);if(l.length===0){toastr?.warning?.("至少一列");return}try{so({uid:i,name:a,headers:l,purpose:"",scope:"always",type:"standard",sourceData:{note:s.querySelector("#of-ns-note").value,insertRule:s.querySelector("#of-ns-insert").value,updateRule:s.querySelector("#of-ns-update").value,deleteRule:s.querySelector("#of-ns-delete").value},updateConfig:{}}),o.push(a),s.querySelector("#of-ns-created").textContent="已建："+o.join("、"),["#of-ns-uid","#of-ns-name","#of-ns-headers","#of-ns-note","#of-ns-insert","#of-ns-update","#of-ns-delete"].forEach(u=>{s.querySelector(u).value=""}),toastr?.success?.(`已建表：${a}`)}catch(u){toastr?.error?.("建表失败："+u.message)}})}}var Dr="__of_preset_state__";function Fn(){try{let t=he({type:"chat"})?.[Dr];if(!t||typeof t!="object")return null;let e=t;return typeof e.character!="string"||!e.character?null:{character:e.character,gender:typeof e.gender=="string"?e.gender:"",opening:typeof e.opening=="string"?e.opening:""}}catch{return null}}function ze(t){Y(e=>(t?e[Dr]=t:delete e[Dr],e),{type:"chat"})}var lc=JSON.parse(Pn),Ae=lc.lines,Ko=Object.keys(Ae);function Yo(t,e){let n=Ae[t];if(!n)throw new Error(`未知角色线：${t}`);Oe(n.tables);let r=n.seeds[e==="女"?"女":"男"]??{},s=0;for(let[o,i]of Object.entries(r))try{let a=i.map(l=>l.map(u=>u===null?null:He(u)));_n(o,a),s+=a.length}catch(a){console.warn(`[原预设开局] 初始行写入失败（${o}）：`,a)}return console.info(`[原预设开局] ${t}（${e}）已写入 ${n.tables.length} 张表 / ${s} 行初始数据`),{tables:n.tables.length,rows:s}}async function Un(t){let e=(t||"").trim();if(!e)throw new Error("开场白为空");let n=re(0);if(!n||n.length===0)throw new Error("当前聊天没有第 0 楼（开场白楼层），请先有开场白楼层再注入");await Be([{message_id:0,message:e}],{refresh:"affected"})}var ea=[6],ta=[27],cc=[20,21,29,30,31,32,33,34],uc={爱丽丝:[20,21],沧月汐:[29,30],似久:[32,33],墨白:[31,34]},na=[14,22],ra=[9,13,23,24],sa=[26],oa=[35,36,37,38,39],dc=[...ea,...ta,...cc,...na,...ra,...sa,...oa];async function pc(){let t=[],e=o=>{typeof o=="string"&&o&&!t.includes(o)&&t.push(o)},n=await Se("getGlobalWorldbookNames");Array.isArray(n)&&n.forEach(e);let r=await Se("getCharWorldbookNames","current");r&&(e(r.primary),Array.isArray(r.additional)&&r.additional.forEach(e));let s=await Se("getChatWorldbookName","current");return e(s),t}async function aa(t){let e=uc[t]??[],n=t==="墨白",r=[];try{r=await pc()}catch{r=[]}if(r.length===0)return{ok:!1,error:"未找到任何世界书（全局/角色卡/聊天都未绑定）"};let s=[];for(let o of r)try{let i=await Se("getWorldbook",o);if(!Array.isArray(i))continue;let a=i.map(l=>{let u=l&&typeof l.uid=="number"?l.uid:null;if(u===null||!dc.includes(u))return l;let f=l.strategy&&typeof l.strategy=="object"?l.strategy:{};return ea.includes(u)||ta.includes(u)||e.includes(u)||!n&&(sa.includes(u)||na.includes(u))?{...l,strategy:{...f,type:"constant"},enabled:!0}:n&&oa.includes(u)||!n&&ra.includes(u)?{...l,strategy:{...f,type:"selective"},enabled:!0}:{...l,strategy:{...f,type:"constant"},enabled:!1}});await Se("updateWorldbookWith",o,()=>a),s.push(`${o}=${i.length}条`)}catch(i){console.warn(`[原预设开局] 切换世界书 ${o} 失败：`,i)}return{ok:!0,summary:s.join("，")}}var te=0,N=null;function la(t){N=Fn(),te=0,N&&(N.opening?te=3:N.gender?te=2:te=1),Or(t)}function Or(t){let e=N?Ae[N.character]:null;t.innerHTML=`<div style="padding:16px;max-width:760px">
    <div style="display:flex;align-items:center;margin-bottom:4px">
      <div class="of-h1" style="margin:0">剑与汽水角色卡专用开局</div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-po-reset" style="margin-left:auto">清除进度</button>
    </div>
    <div class="of-hint" style="margin-bottom:10px">四条线（爱丽丝 / 沧月汐 / 似久 / 墨白）。选角色 → 选性别写入数据 → 确认开场白 → 注入第 0 楼。进度随当前聊天保存。</div>

    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;font-size:12px">
      ${[0,1,2,3].map(r=>`<span style="width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;${r===te?"background:#89b4fa;color:#1e1e2e;font-weight:700":r<te?"background:#a6e3a1;color:#1e1e2e":"background:#313244;color:#6c7086"}">${r+1}</span>${r<3?'<span style="flex:0 0 24px;height:2px;background:#313244"></span>':""}`).join("")}
      <span class="of-hint" style="margin-left:8px">${["选择角色","选择性别并写入数据","确认开场白","注入第 0 楼"][te]}</span>
    </div>

    <div id="of-po-body"></div>
  </div>`,t.querySelector("#of-po-reset").addEventListener("click",()=>{confirm("清除本条线的开局进度？（已写入的表格数据不受影响，可到「表格数据」页查看）")&&(N=null,ze(null),te=0,Or(t))});let n=t.querySelector("#of-po-body");te===0?fc(n):te===1?mc(n):te===2?gc(n):hc(n)}function fc(t){t.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择角色线</div>
      <div class="of-hint" style="margin-bottom:10px">确认后自动按线切换世界书（本线性格/动态/系统相关条目开启，其它线关闭）。</div>
      <div class="of-grid2" id="of-po-chars">
        ${Ko.map(r=>{let s=Ae[r];return`<button class="of-path-card" data-char="${r}">
            <div class="of-path-title">${s.title}</div>
            <div class="of-path-desc">${(s.subtitle||"").replace(/\n/g,"<br>")}</div>
          </button>`}).join("")}
      </div>
      <button class="of-btn" id="of-po-char-ok" style="margin-top:12px" disabled>确认角色并继续（切换世界书）</button>
      <div class="of-hint" id="of-po-char-state" style="margin-top:6px"></div>
    </div>`;let e=N?.character??"";e&&t.querySelector(`[data-char="${e}"]`)?.classList.add("active");let n=t.querySelector("#of-po-char-ok");e&&(n.disabled=!1),t.querySelectorAll("[data-char]").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll("[data-char]").forEach(s=>s.classList.remove("active")),r.classList.add("active"),e=r.getAttribute("data-char"),n.disabled=!1})}),n.addEventListener("click",async()=>{if(!e)return;n.disabled=!0;let r=t.querySelector("#of-po-char-state");r.textContent="正在切换世界书…",N={character:e,gender:"",opening:""},ze(N);try{let s=await aa(e);r.textContent=s.ok?`世界书已切换：${s.summary||"无变更"}`:`世界书切换跳过：${s.error||"未知原因"}（不影响后续步骤）`}catch(s){r.textContent=`世界书切换异常（已继续）：${s.message}`}n.disabled=!1,te=1,jn(t)})}function mc(t){let e=Ae[N.character];t.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择你的性别（${N.character} 线）</div>
      <div class="of-grid2" style="margin-top:8px">
        <button class="of-path-card" data-gender="男"><div class="of-path-title">♂ 男</div><div class="of-path-desc">${e.maleDesc.replace(/\n/g,"<br>")}</div></button>
        <button class="of-path-card" data-gender="女"><div class="of-path-title">♀ 女</div><div class="of-path-desc">${e.femaleDesc.replace(/\n/g,"<br>")}</div></button>
      </div>
      <div class="of-hint" id="of-po-gender-preview" style="margin-top:10px"></div>
      <button class="of-btn of-btn-ok" id="of-po-gender-ok" style="margin-top:10px" disabled>确认性别并写入数据</button>
      <div class="of-hint" id="of-po-gender-state" style="margin-top:6px"></div>
    </div>`;let n=N?.gender??"";n&&t.querySelector(`[data-gender="${n}"]`)?.classList.add("active");let r=t.querySelector("#of-po-gender-ok"),s=t.querySelector("#of-po-gender-preview");n&&(r.disabled=!1,ia(s,N.character,n)),t.querySelectorAll("[data-gender]").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll("[data-gender]").forEach(i=>i.classList.remove("active")),o.classList.add("active"),n=o.getAttribute("data-gender"),r.disabled=!1,ia(s,N.character,n)})}),r.addEventListener("click",async()=>{if(!n)return;r.disabled=!0;let o=t.querySelector("#of-po-gender-state");o.textContent="正在写入表格模板与初始数据…";try{let i=Yo(N.character,n);N={...N,gender:n},ze(N),o.textContent=`写入成功：${i.tables} 张表 / ${i.rows} 行初始数据（存本扩展，可到「表格数据」页查看）`,toastr?.success?.(`开局数据已写入：${i.tables} 张表 / ${i.rows} 行`),Re(),te=2,jn(t)}catch(i){o.textContent=`写入失败：${i.message}`,r.disabled=!1}})}function ia(t,e,n){let r=Ae[e],s=r.seeds[n==="女"?"女":"男"]??{},o=s.角色档案??[],i=o[0]??[],a=o[1]??[],u=r.tables.find(w=>w.name==="角色档案")?.headers??[],f=(w,y)=>{let p=u.indexOf(y);return p>=0&&w[p]||"-"},g=Object.entries(s).map(([w,y])=>`${w} ${y.length} 行`).join("，");t.innerHTML=`<b>主角</b>：${i.length?`${f(i,"身份")} · ${f(i,"种族")} · ${f(i,"综合属性")} · ${f(i,"流动资金")}`:"-"}
    ${a.length?`<br><b>同伴</b>：${f(a,"名字")} · ${f(a,"身份")} · ${f(a,"综合属性")}`:""}
    <br><b>将写入</b>：${g||"（无初始数据）"}`}function gc(t){let n=Ae[N.character].openings[N.gender==="女"?"女":"男"]??"";N.opening||(N.opening=n),t.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白（预设已填入，可直接修改）</div>
      <textarea class="of-textarea" id="of-po-opening" rows="12" style="min-height:220px">${N.opening.replace(/</g,"&lt;")}</textarea>
      <div class="of-hint" style="margin-top:6px">{{user}} 宏在注入第 0 楼后由酒馆自动替换。注入会覆盖第 0 楼现有内容。</div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="of-btn of-btn-ghost" id="of-po-opening-reset">恢复默认开场白</button>
        <button class="of-btn of-btn-ok" id="of-po-opening-ok" style="margin-left:auto">确认开场白</button>
      </div>
    </div>`;let r=t.querySelector("#of-po-opening");r.addEventListener("input",()=>{N.opening=r.value,ze(N)}),t.querySelector("#of-po-opening-reset").addEventListener("click",()=>{r.value=n,N.opening=n,ze(N)}),t.querySelector("#of-po-opening-ok").addEventListener("click",()=>{let s=r.value.trim();if(!s){toastr?.warning?.("开场白为空");return}N.opening=s,ze(N),te=3,jn(t)})}function hc(t){let e=Ae[N.character];t.innerHTML=`<div class="of-card">
      <div class="of-h2" style="font-size:13px">确认信息</div>
      <div class="of-hint">角色线：${N.character} ｜ 性别：${N.gender||"男"} ｜ 表格模板与初始数据已写入本扩展表格存储（「表格数据」页可查看/修改）。</div>
    </div>
    <div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白预览</div>
      <div style="white-space:pre-wrap;font-size:13px;line-height:1.8;max-height:260px;overflow-y:auto" id="of-po-final-preview"></div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-po-back" style="margin-top:8px">← 返回修改开场白</button>
    </div>
    <button class="of-btn of-btn-ok" id="of-po-start" style="margin-top:12px">注入第 0 楼并开始游戏</button>
    <div class="of-hint" id="of-po-start-state" style="margin-top:6px"></div>`,t.querySelector("#of-po-final-preview").textContent=N.opening,t.querySelector("#of-po-back").addEventListener("click",()=>{te=2,jn(t)});let n=t.querySelector("#of-po-start"),r=t.querySelector("#of-po-start-state");n.addEventListener("click",async()=>{n.disabled=!0,r.textContent="正在注入第 0 楼…";try{await Un(N.opening),r.textContent="已写入第 0 楼！进度已清除，可以开始游戏了。",toastr?.success?.("开场白已注入第 0 楼，游戏开始！"),Re(),N=null,ze(null),te=0,n.textContent="已完成 ✓"}catch(s){r.textContent=`注入失败：${s.message}`,n.disabled=!1}})}function jn(t){let e=t;for(;e&&!e.querySelector?.("#of-po-reset");)e=e.parentElement;e?Or(e):Z()}var ca="渐变带自由回路";var Hr="<StatusPlaceHolderImpl/>";function Nr(){return{数据AI:[{role:"system",enabled:!0,note:"任务与铁律",content:`你是跑团系统的"数据AI"。你的唯一职责：阅读最新一轮正文，把它翻译成结构化状态变更包（JSON）。
铁律：
1. 你不做任何算术。施法消耗、自然恢复由本地脚本结算，你永远不要在"剧情数值变更"里报它们。
2. "剧情数值变更"只用于剧情特例（例如：被灌了魔素、NPC 强行喂了药剂、剧情奖励/损失），没有特殊剧情就输出空对象 {}。"精神上限"只在高强度突破/觉醒类剧情里才允许提高，一般剧情禁止动它。
3. 你只能报告事实，不能发明账单：只允许报告【槽位清单】里存在的回路 id（认领用 id，你只看得见 id/名称/族·分支/一句话效果，参数与账单对你不下发）。
4. 只输出 JSON，字段以下方 schema 为准，禁止新增任何字段（出现"删除物品/修改回路参数/修改亲和"等字段会被整包拒绝）。
5. "现在剧情时间"格式固定为"2026年11月12日，21：12"（年月日，时：分），从正文推断剧情当前时间；若正文未提及时间推进，就沿用【当前状态】里的剧情时间。
6. "新增补给"只允许这 4 类：魔素晶体 / 魔素导液 / 快速生化止血喷雾 / 仿生神经桥接贴片（其它道具、武器、任务物品一律不要报）。格式化输出：
   - "魔素晶体"：{"名称": "魔素晶体", "数量": 整数, "纯度": 浮点数, "克数": 浮点数}（例：魔素晶体，34%纯度，2g）
   - "魔素导液"：{"名称": "魔素导液", "数量": 整数, "纯度": 浮点数, "容量ml": 浮点数}（例：魔素导液，56%纯度，13ml）
   - "快速生化止血喷雾" / "仿生神经桥接贴片"：{"名称": "…", "数量": 整数}（创伤类严禁填纯度、克数或容量！）
   【正文无具体数字时的推断基准（严禁拍脑袋瞎编大数）——按"来源场景"判断档位并给中位数】：
   a. 地摊/废品/民用工具/下层黑市：晶体纯度 30%~55%（缺省填 45.0）、克数 1.0~3.0g（缺省填 2.0）；导液纯度 40%~65%（缺省填 50.0）、容量 20.0~50.0ml（缺省填 30.0）。
   b. 军用/战警/特勤安保/战备走私箱：晶体纯度 82%~92%（缺省填 88.0）、克数 0.5~1.5g（缺省填 1.0）；导液纯度 82%~90%（缺省填 85.0）、容量 5.0~15.0ml（缺省填 10.0）。
   c. 绝密设施/国家重器/核心反应堆：晶体纯度 99.0%~99.9%、克数必须是微量（0.01~0.1g，严禁填整克！）；导液纯度 99.0%~99.9%、容量必须是微量冷萃（1.0~3.0ml）。
7. "剧情获得"只在正文明确出现主角获得/学会/被授予新法术时才报，每回合最多1条；没发生就输出空数组 []。只填 种类(fixed/free)+族+一句话效果（参数由法术AI 送审时填写，你不得填参数）。fixed=剧情直接给的永久固化技；free=未固化技（次数填 0~9，表示初始已用次数）。
8. "爆发线/持续线"只能提高、不能降低，且必须发生在【训练或战斗】类剧情里才可报，一次只能提高一点点（一般 1~5）；日常剧情禁止动。
9. 事件范围铁律（防重复结算）：【最近正文】分两层——【前文背景】＝上一轮及更早的正文（其事件已在历史回合结算过）；【本轮待结算正文】＝最新一轮（含玩家最新动作与AI判定）。所有结算项目（本轮使用回路/剧情数值变更/新增补给/身体/战斗中/场景变更/剧情获得）必须且仅限由【本轮待结算正文】中尘埃落定的事实产生；【前文背景】仅用于辅助理解动作意图、因果与时间差，严禁从中重复提取已结算过的事件，严防历史重复清算导致重复扣费。
10. "战斗中"判定：仅当场面存在【有敌意的生物】时才为 true——追击、被追击、遭遇战均算；正常切磋/训练对练不算；无战斗场面输出 null。`},{role:"system",enabled:!0,note:"状态注入（脚本生成）",content:`【当前状态】
{{状态}}`},{role:"system",enabled:!0,note:"场景（脚本生成）",content:`【场景】
{{场景}}`},{role:"system",enabled:!0,note:"最近正文（脚本生成·分层：前文背景＝上一轮及更早｜本轮待结算正文＝最新一轮）",content:`【最近正文】
{{正文}}`},{role:"system",enabled:!0,note:"输出格式示例（示范 · 非校验）",content:`【输出格式示例（严格按此形状输出；没发生的字段用空值 []/{}/null，不要编造；仅列白名单/枚举值）】
{"现在剧情时间": "2026年11月12日，21：12","本轮使用回路": [{"回路": "fx-01", "次数": 1}],"剧情数值变更": {},"身体": {"状态": "轻伤"},"战斗中": true,"新增补给": [{"名称": "魔素导液", "数量": 2, "纯度": 56.0, "容量ml": 13},{"名称": "快速生化止血喷雾", "数量": 1}],"场景变更": null,"剧情获得": []}`},{role:"user",enabled:!0,note:"收尾指令",content:"请按 schema 输出本轮状态变更包 JSON。没有发生的字段输出空值（[]/{}/null），不要编造。"}],法术AI:[{role:"system",enabled:!0,note:"核心定位、双场景契约与裁决铁律",content:`你是跑团系统「渐变带」的法术AI，负责审核新回路在世界观内的「物理可行性与机制自洽性」。

【最高铁律：只审物理，不审亲和】
1. 亲和归属（主/次/非亲和）由角色体质决定，只影响施法能耗倍率与过载风险，由本地脚本计费，绝不是你驳回的理由。
2. 你不做任何账单计算，不修改角色状态，不发明判定机制。
3. 你的唯一裁决标尺：该回路声明的「作用对象 + 作用方式」在世界观物理法则下能否成立闭环。

【规范化回路字段定义与要求】
1. "名称"：2~7字纯中文短名，工业魔导质感（如「风切·高周波」「共价晶壁」「突触杂音」），严禁中二浮夸修饰。
2. "一句话效果"：概括其核心物理做功本质（20字以内）。
3. "物理相态与表征"（★正文AI叙事唯一形态锚点，必须严格依五系物理机理分流描写）：
   - 严禁空洞的“绚丽光晕”、“魔法阵”、“神秘能量”等奇幻辞藻。
   - 依五系严格呈现：倾泻系写发散准直与直线射束；波动·媒介波写介质依赖与激波声效；波动·场写无形势能范围与空间扰动；结构系写微观晶格相态与就地取材附着（绝无弹道）；生机系写渗透给药与生理组织异变反应（绝无弹道与光球）；感知系写神经感官映射与无声无形球域。
4. "效果文字稿"（场景A专属）：供正文引用的具体动作与微观物理现象描写（50~100字）。

【双调用场景与输出契约】你会收到两种调用场景之一，按 {{参数}} 的形状识别：
▶ 场景 A（自创申报）：{{参数}} 为「中文参数明细」文本。核对玩家意图与参数是否物理自洽；通过时规范化回路严禁携带「参数向量」：
{"结论":"通过","规范化回路":{"名称":"2~7字纯中文短名","一句话效果":"提炼的物理作用机理","物理相态与表征":"依五系机理提炼的视觉、声学、空间与介质特征","效果文字稿":"供正文引用的施法描写"},"解释":null}

▶ 场景 B（剧情获得送审）：{{参数}} 为包含顶层/子实体参数的「参数模板JSON」。需为该回路填补合理的「参数向量」（参考模板 def 默认值与上下限，缺省键脚本自动兜底）；通过时规范化回路必须含「参数向量」：
{"结论":"通过","规范化回路":{"名称":"2~7字纯中文短名","一句话效果":"提炼的物理效果","物理相态与表征":"依五系机理提炼的视觉、声学、空间与介质特征","参数向量":{"<模板中的key>":数值}},"解释":null}

▶ 通用驳回：{"结论":"驳回","规范化回路":null,"解释":"直接面向玩家的通俗物理说明，指明违背了哪条物理规律或缺失了什么环境介质"}
你不计费、不改任何状态；输出必须为纯 JSON。`},{role:"system",enabled:!0,note:"法定五系18分支谱系与物理表征准则",content:`【世界观法定五系与 18 亲和分支物理运作与表征规范】

1. 倾泻族（pour）[3 分支] —— 高能瞬发直线射束，出径即承诺，无质量/寻低阻/热相变：
- [光]：定向高能光频脉冲、激光、光辐射致盲。
- [电]：高压电荷脉冲、电弧击穿、寻最低阻抗释放。
- [热]：高能热焰喷射、热膨胀、爆轰冲击波（降温吸热亦归热相逆过程）。
★ 表征准则：必须交代发散准直形态（针状/收窄束/扇面）、光色/高温焦灼/电弧击穿声、绝对直线轨迹。

2. 波动族（flow）[5 分支] —— 介质借用与场干涉共振，插槽即物理量，必须遵守介质法则：
- [实体波]：电磁波震荡（调频/调幅/调相）与时空引力波，无需介质可在真空中传播。
- [媒介波]：绝对依赖介质！包括声压激波（需空气/水体）、气流风刃（需环境空气/风力）、流体液压（需水柱/水源在场）、固体机械波/地震（需岩层土体耦合）。无介质强行施展必须坚决驳回。
- [电磁场]：静电场、磁通量聚集、磁约束粒子。
- [引力场]：微重力悬浮、重力沉降（调梯度撕裂需极高能量）。
- [核力场]：强/弱相互作用、微裂变点燃、衰变加速。【战略级禁区】动用即国家级事件，非极端重大剧情能不驳就驳。
★ 表征准则：媒介波必须写明波阵面、介质偏转与声学爆鸣；实体波与场必须强调肉眼无形、空间扭曲感或无声辐射。

3. 结构族（struct）[4 分支] —— 微观晶格不可逆重排，固化零维持费，必须有现场无机物基底：
- [晶体]：晶界致密强化、硅基固化、晶相壁垒。
- [金属]：金属晶格位错强化、抗剪切强化（需随身/环境金属）。
- [土石]：硅酸盐岩体突变、宏观地表重塑（需现场土石原料，凭空造巨石必驳）。
- [合金]：多元固溶体界面调控、装甲硬化。
★ 表征准则：绝无弹道飞行！必须交代基底取材（金属/岩石）、晶格相态外观（脆硬致密/延韧金属光泽）、附着部位及应力变化。

4. 生机族（life）[3 分支] —— 有机生理过程催化与渗透愈合，催化剂不是锤子，仅对活体有效：
- [植物]：植物纤维急速缠绕、木质素加固。
- [动物(含人体)]：血小板活化、创口肌肉闭合、肌纤维爆发（对无机机械体完全无效）。
- [微生物]：菌群定向裂变、生化降解催化。
★ 表征准则：绝无弹道与能量光芒！必须交代施药/渗透方式（触碰注入/气雾扩散）、生理组织异变反应（血管收缩/肉芽闭合/组织坏死麻痒）。

5. 感知族（perce）[3 分支] —— 纯信息读取与神经电位伪造，严格只读不写，无宏观破坏力：
- [五感延伸]：超声多普勒全景、视听神经增强。
- [读心干扰]：突触动作电位注入杂音、打断前摇。
- [信息伪造]：多普勒频移虚构、幻觉相位投射。
★ 表征准则：绝无物理杀伤！必须交代神经感官接收形态、无形多普勒扫描场域或脑神经突触杂音感。

【驳回说明规范】驳回理由必须具有物理说服力与通俗度，直接指明「缺少了什么环境介质」或「违背了哪条作用机制」，严禁用代码变量敷衍。`},{role:"system",enabled:!0,note:"送审上下文注入",content:`【玩家描述 / 剧情法术描述】
{{描述}}

【构筑参数明细 / 待填参数模板】
{{参数}}

【主角亲和分支（仅作背景认知参考，严禁作为审核门槛）】
{{亲和}}

【当前物理场景（用于校验介质、无机物与水体可行性）】
{{场景}}`},{role:"user",enabled:!0,note:"触发审核指令",content:`请对本次送审回路进行物理可行性仲裁：
1. 若输入为「明细文本」（场景 A）：核验描述与参数逻辑，通过时规范化回路输出 {"名称","一句话效果","物理相态与表征","效果文字稿"}。
2. 若输入为「参数模板JSON」（场景 B）：通过时必须结合一句话效果，在规范化回路中补全合理的 {"名称","一句话效果","物理相态与表征","参数向量"}。
3. 发现介质缺失（如真空声波、无水控浪）、凭空造物、物理不成立时，坚决输出驳回，并在「解释」中给出清晰的物理说服说明。
请输出纯 JSON。`}]}}function yc(){return{开关:{自动结算:!0,状态栏标记:!0},频率:{数据AI:1},api:{数据AI:{mode:"tavern"},法术AI:{mode:"tavern"}},提示词:Nr()}}var nn=null;function K(){if(nn)return nn;let t=yc(),e=Js(ca,{});return nn={开关:{自动结算:typeof e.开关?.自动结算=="boolean"?e.开关.自动结算:t.开关.自动结算,状态栏标记:typeof e.开关?.状态栏标记=="boolean"?e.开关.状态栏标记:t.开关.状态栏标记},频率:{数据AI:e.频率&&typeof e.频率.数据AI=="number"?e.频率.数据AI:t.频率.数据AI},api:{数据AI:e.api?.数据AI??t.api.数据AI,法术AI:e.api?.法术AI??t.api.法术AI},提示词:{数据AI:e.提示词?.数据AI??t.提示词.数据AI,法术AI:e.提示词?.法术AI??t.提示词.法术AI},窗口:e.窗口,悬浮球:e.悬浮球},nn}function Et(t){nn=t,zs(ca,t)}var bc=c.object({能量kJ:c.object({当前:c.number(),上限:c.number()}),精神点:c.object({当前:c.number(),上限:c.number()}),爆发线kW:c.number(),爆发倍率:c.number().optional(),持续线kW:c.number(),磨炼:c.record(c.string(),c.number()).optional(),战斗中:c.boolean(),身体状态:c.enum(["正常","轻伤","重伤","过载透支"]),剧情时间:c.object({label:c.string()}),上次结算min:c.number()}),vc=c.object({目标:c.enum(["能量","精神","创伤"]),增加kJ:c.number().optional(),增加点:c.number().optional(),身体状态:c.enum(["正常","轻伤"]).optional()}),Ec=c.object({名称:c.string().min(1),数量:c.number().int().min(1),uid:c.string().optional(),纯度:c.number().min(0).max(99.99).optional(),克数:c.number().min(0).optional(),容量ml:c.number().min(0).optional(),效果:vc.optional(),桌面位置:c.object({x:c.number(),y:c.number()}).optional()}),da=["魔素晶体","魔素导液","快速生化止血喷雾","仿生神经桥接贴片"],xc=c.object({id:c.string(),名称:c.string(),type:c.enum(["fixed","free"]),族:c.string(),famKey:c.enum(["pour","flow","struct","life","perce"]),分支:c.string(),实体:c.string().nullable(),参数向量:c.record(c.string(),c.union([c.number(),c.string()])),注册e:c.number(),参数明细:c.record(c.string(),c.string()),微调预算:c.object({br_min:c.number(),fv_max:c.number(),E_min:c.number(),E_max:c.number()}).nullable(),微调预算明细:c.record(c.string(),c.union([c.string(),c.number()])).nullable(),基线账单:c.object({输出kJ:c.number(),计费kJ:c.number(),精神:c.number(),一句话效果:c.string()}),物理相态与表征:c.string().optional(),uses:c.number().int().nullable(),来源:c.enum(["面板送审","转正","剧情授技","开局预设"]),审核存档:c.object({原始描述:c.string(),规范化结果:c.any()}).nullable(),审核状态:c.enum(["免审","待送审","已通过"]).optional(),过载率:c.number().optional(),过载风险:c.number().optional(),本轮走火:c.boolean().optional(),桌面位置:c.object({x:c.number(),y:c.number()}).optional()}),Sc=c.object({固定槽:c.array(c.string().nullable()).length(10),自由槽:c.array(c.string().nullable()).length(3)}),ua=c.object({族:c.string(),分支:c.string()}),wc=c.object({主分支:c.array(ua).min(0),次分支:c.array(ua)}),Tc=c.object({ref:c.string(),名称:c.string(),bill:c.number(),mind:c.number(),tell:c.number(),risk:c.number(),锚点:c.string(),order:c.string(),famKey:c.string().nullable().optional(),分支:c.string().optional(),workE:c.number().optional()}),_c=c.object({风力档:c.number(),可塑无机物kJ:c.number(),水体在场:c.boolean()}),Fr=c.object({version:c.number().default(2),主角:bc,补给物品:c.array(Ec),回路库:c.array(xc),槽位:Sc,亲和:wc,待扣单:c.array(Tc),场景:_c});var Ne="渐变带";function kc(t){let e=Math.max(t.持续线kW,1e-9);(t.爆发倍率==null||!isFinite(t.爆发倍率))&&(t.爆发倍率=Math.min(50,Math.max(8,Math.round(t.爆发线kW/e*10)/10))),t.爆发线kW=Math.round(e*t.爆发倍率*10)/10}function Fe(){try{let t=he({type:"chat"})?.[Ne];if(!t)return null;let e=Fr.safeParse(t);return e.success?(kc(e.data.主角),e.data):(console.warn("[渐变带] 存档校验失败，忽略坏数据",e.error?.issues?.slice(0,3)),null)}catch{return null}}async function Ur(t){let e=Fr.parse(t);return await Y(n=>(n[Ne]=e,n),{type:"chat"}),!0}async function Ot(t){let e=t??Fe();if(!e)return!1;let n={...e};delete n.主角.上次结算min;let r=ye();return r<0?!1:(await Y(s=>(s.stat_data??={},s.stat_data[Ne]=n,s),{type:"message",message_id:r}),!0)}function Rc(t,e){return t.filter(n=>n.enabled).map(n=>{let r=n.content;for(let[s,o]of Object.entries(e))r=r.split(`{{${s}}}`).join(o);return{role:n.role,content:r}})}function Lc(t){if(!t||t.mode!=="custom")return;let e={};return t.proxy_preset&&(e.proxy_preset=t.proxy_preset),t.apiurl&&(e.apiurl=t.apiurl),t.key&&(e.key=t.key),t.model&&(e.model=t.model),t.source&&(e.source=t.source),typeof t.temperature=="number"&&(e.temperature=t.temperature),typeof t.max_tokens=="number"&&(e.max_tokens=t.max_tokens),Object.keys(e).length?e:void 0}async function pa(t){let e=K(),n=Rc(t.segments,t.vars).map(s=>({role:s.role,content:Xs(s.content)})),r=await wr({orderedPrompts:n,jsonSchema:t.jsonSchema,customApi:Lc(e.api[t.which]),generationId:t.generationId});if(!r.ok||!r.text)throw new Error(r.error||"AI 返回为空");return r.text}function Ac(t){let e=re("0-{{lastMessageId}}")||[],n=[],r=0;for(let s=e.length-1;s>=0&&r<t;s--){let o=e[s],i=(o.message||"").replace(/<StatusPlaceHolderImpl\/>/g,"").replace(/```[\s\S]*?```/g,"").trim();i&&(n.unshift((o.is_user?"【玩家】":"【AI】")+i.slice(0,3e3)),o.is_user||r++)}return n}function fa(t=4){let e=Ac(t),n=e.pop()||"";return{bg:e.join(`

`),latest:n}}function Wn(t){if(typeof t!="string")return null;let n=t.replace(/[，,]/g,",").replace(/[：:]/g,":").replace(/\s+/g,"").trim().match(/^(\d{1,4})年(\d{1,2})月(\d{1,2})日,(\d{1,2}):(\d{2})$/);if(!n)return null;let r=+n[1],s=+n[2],o=+n[3],i=+n[4],a=+n[5];if(s<1||s>12||o<1||o>31||i>23||a>59)return null;let l=Date.UTC(r,s-1,o,i,a);return Number.isNaN(l)?null:Math.round(l/6e4)}function ma(t){let e=new Date(t*6e4),n=r=>String(r).padStart(2,"0");return`${e.getUTCFullYear()}年${e.getUTCMonth()+1}月${e.getUTCDate()}日，${n(e.getUTCHours())}：${n(e.getUTCMinutes())}`}var Mc=c.object({现在剧情时间:c.string(),本轮使用回路:c.array(c.object({回路:c.string().min(1),次数:c.number().int().min(1)})).default([]),剧情数值变更:c.record(c.string(),c.number()).default({}),身体:c.object({状态:c.enum(["正常","轻伤","重伤","过载透支"])}).nullable().default(null),战斗中:c.boolean().nullable().default(null),新增补给:c.array(c.object({名称:c.string().min(1),数量:c.number().int().min(1),纯度:c.number().min(0).max(99.99).optional(),克数:c.number().min(0).optional(),容量ml:c.number().min(0).optional()})).default([]),场景变更:c.object({风力档:c.number().optional(),可塑无机物kJ:c.number().optional(),水体在场:c.boolean().optional()}).nullable().default(null),剧情获得:c.array(c.object({种类:c.enum(["fixed","free"]),族:c.enum(["pour","flow","struct","life","perce"]),一句话效果:c.string().min(1),次数:c.number().int().min(0).max(10).optional(),参数向量:c.record(c.string(),c.union([c.number(),c.string()])).optional()})).default([])}),$c=["能量","精神","能量上限","精神上限","持续线"];function ga(t){if(!t)return null;let e=t.match(/```(?:json)?\s*([\s\S]*?)```/),n=e?e[1]:t,r=n.indexOf("{");if(r<0)return null;let s=n.lastIndexOf("}");if(s<=r)return null;try{return JSON.parse(n.slice(r,s+1))}catch{return null}}function ha(t,e){let n=[],r=[];if(t==null||typeof t!="object")return{ok:!1,error:"变更包不是 JSON 对象",忽略的回路:n,忽略的剧情:r};let s=["现在剧情时间","本轮使用回路","剧情数值变更","身体","战斗中","新增补给","场景变更","剧情获得"],o=Object.keys(t).filter(v=>!s.includes(v));if(o.length)return{ok:!1,error:`越权字段：${o.join("、")}（整包打回）`,忽略的回路:n,忽略的剧情:r};let a=Object.keys(t.剧情数值变更??{}).filter(v=>!$c.includes(v));if(a.length)return{ok:!1,error:`剧情数值变更含越权键：${a.join("、")}（施法费/物品/参数/亲和不得出现在这里）`,忽略的回路:n,忽略的剧情:r};if(t.身体!=null){let b=Object.keys(t.身体).filter(k=>k!=="状态");if(b.length)return{ok:!1,error:`身体字段含越权键：${b.join("、")}`,忽略的回路:n,忽略的剧情:r}}let l=Mc.safeParse(t);if(!l.success){let v=l.error.issues[0];return{ok:!1,error:`字段校验失败：${v?.path?.join(".")} ${v?.message}`,忽略的回路:n,忽略的剧情:r}}let u=l.data,f=Wn(u.现在剧情时间);if(f==null)return{ok:!1,error:`剧情时间无法解析："${u.现在剧情时间}"（格式应为 2026年11月12日，21：12）`,忽略的回路:n,忽略的剧情:r};if(f<e.主角.上次结算min)return{ok:!1,error:`剧情时间倒退：${u.现在剧情时间} 早于上次结算（拒）`,忽略的回路:n,忽略的剧情:r};let g=new Set([...e.槽位.固定槽,...e.槽位.自由槽].filter(Boolean)),w=new Set(e.待扣单.map(v=>v.ref)),y=u.本轮使用回路.filter(v=>g.has(v.回路)||w.has(v.回路)?!0:(n.push({...v,原因:"id 不在槽位/待扣单中，忽略（不发明账单）"}),!1));if(u.本轮使用回路=y,u.剧情获得.length>1){let v=u.剧情获得.slice(1);u.剧情获得=u.剧情获得.slice(0,1),v.forEach(b=>r.push(`剧情获得《${b.一句话效果}》忽略（每回合最多 1 条）`))}let p=new Set(e.回路库.map(v=>v.基线账单?.一句话效果??"").filter(Boolean));return u.剧情获得=u.剧情获得.filter(v=>p.has(v.一句话效果)?(r.push(`剧情获得《${v.一句话效果}》忽略（与已有回路重复）`),!1):!0),{ok:!0,data:u,忽略的回路:n,忽略的剧情:r}}(function(t,e){typeof module=="object"&&module.exports?module.exports=e():t.CircuitEngine=e()})(typeof window<"u"?window:globalThis,function(){"use strict";let t=[{t:"静风",v:0},{t:"和风",v:40},{t:"劲风",v:70},{t:"风暴",v:95}],e=[{t:"无(只有空气)",v:0},{t:"砖石混凝",v:3e3},{t:"矿区岩层",v:2e4}],n=[[100,"一记重拳"],[1e3,"≈手枪弹"],[1e4,"≈步枪弹击穿力"],[1e5,"≈轿车60码撞击"],[1e6,"≈1/4公斤TNT"],[1e7,"≈2.4公斤TNT"],[1e8,"≈24公斤TNT"],[1e9,"≈半吨TNT"],[1e12,"≈战术核弹头"],[1e15,"≈战役级天灾"],[1/0,"≈全球核弹头总和·宇宙级BOSS"]];function r(d){let x=d*1e3;for(let[E,M]of n)if(x<=E)return M;return"???"}let s=(d,x,E)=>x*Math.pow(E/x,d/100),o=(d,x,E)=>Math.round(100*Math.log(d/x)/Math.log(E/x)),i=d=>"10^"+Math.round(Math.log10(d)*10)/10;function a(d){return+(.005*Math.pow(1e3,d/100))}function l(d){return .05*Math.pow(4e4,d/100)}function u(d){return+(.5*Math.pow(1e3,d/100))}function f(d){return Math.round(Math.log(d/.5)/Math.log(1e3)*100)}let g={promoteN:10,injuryRegenMul:.5,supplyMaxKJ:5e3,supplyMaxPoint:50,seismicWorkFrac:.02,fixedMindMul:.2},w={倾泻:["光","电","热"],波动:["实体波","媒介波","电磁场","引力场","核力场"],结构:["晶体","金属","土石","合金"],生机:["植物","动物(含人体)","微生物"],感知:["五感延伸","读心干扰","信息伪造"]},y={pour:"倾泻",flow:"波动",struct:"结构",life:"生机",perce:"感知"};function p(d,x,E){let M=y[x],m=Array.isArray(d.main)?d.main:d.main?[d.main]:[],L=d.subs||[];return m.some(C=>C&&C.fam===M&&C.br===E)?"main":m.some(C=>C&&C.fam===M)||L.some(C=>C&&C.fam===M&&C.br===E)||L.some(C=>C&&C.fam===M)?"mid":"far"}function v(d,x,E,M){let m=p(d,x,E),L=x==="life";if(m==="main")return{m:1,e:1,n:"主分支",c:"g",t:m};if(m==="mid")return{m:2,e:L?1:1.5,n:"中档·次/同族",c:"y",t:m};let C=M&&M[E]||4;return{m:C,e:L?1:C,n:"全陌",c:"r",t:m}}let b=[{n:"实体波"},{n:"媒介波"},{n:"场"}],k={"0-0":{n:"电磁波 · 调频/调幅/调相",mm:1,d:.3,ctrls:[{k:"band",label:"频段（调频=换光子）",type:"seg",opts:["无线电·μeV·通信","微波·10μeV·加热","可见/紫外·eV·激光","X射线·100keV·穿甲","γ·MeV·核级"],def:2},{k:"eknob",label:"调什么",type:"seg",opts:["调振幅·功率输出","调相位·干涉重排"],def:0},{k:"pkw",label:"输出功率",type:"range",min:0,max:100,step:1,def:40,show:d=>d.eknob===0,fmt:d=>s(d,.1,1e3).toFixed(1)+" kW"},{k:"ecov",label:"相位覆盖面积",type:"range",min:1,max:50,step:1,def:2,show:d=>d.eknob===1,fmt:d=>d+" m²"},{k:"et",label:"作用时长",type:"range",min:.1,max:10,step:.1,def:1,fmt:d=>d+" s"}]},"0-1":{n:"引力波 · 时空涟漪",mm:4,d:.9,ctrls:[{k:"gwh",label:"应变振幅 h",type:"range",min:0,max:100,step:1,def:20,fmt:d=>{let x=1e-21*Math.pow(10,15*d/100);return"h="+i(x)+(x<1e-12?"·仅干涉仪可测":x<1e-8?"·仪器强信号":"·肉眼可见")}}]},"1-0":{n:"声波 · 声压/空化/相位",mm:1,d:.2,ctrls:[{k:"sknob",label:"调什么",type:"seg",opts:["调声压·明攻","超声空化·水下","调相位·静默区"],def:0},{k:"db",label:"声压级",type:"range",min:60,max:210,step:5,def:160,show:d=>d.sknob===0,fmt:d=>d+" dB"},{k:"svol",label:"空化水量",type:"range",min:0,max:100,step:1,def:50,show:d=>d.sknob===1,fmt:d=>s(d,.1,1e3).toFixed(1)+" L"},{k:"scov",label:"静默区半径",type:"range",min:1,max:20,step:1,def:3,show:d=>d.sknob===2,fmt:d=>"r="+d+" m"},{k:"st",label:"作用时长",type:"range",min:.05,max:5,step:.05,def:.1,fmt:d=>d+" s"}]},"1-1":{n:"流体 · 风刃/液压",mm:1,d:0,ctrls:[{k:"fmed",label:"介质",type:"seg",opts:["空气·风刃系","水/液压·流体系"],def:0},{k:"fa",label:"刃口/过流面积",type:"range",min:0,max:100,step:1,def:33,show:d=>d.fmed===0,fmt:d=>s(d,.005,5).toFixed(3)+" m²"},{k:"fv",label:"风速",type:"range",min:0,max:100,step:1,def:70,show:d=>d.fmed===0,fmt:d=>Math.round(s(d,30,1200))+" m/s"},{k:"fh",label:"波高",type:"range",min:.05,max:30,step:.05,def:.3,show:d=>d.fmed===1,fmt:d=>"h="+d+" m"},{k:"fA",label:"作用面积",type:"range",min:0,max:100,step:1,def:50,show:d=>d.fmed===1,fmt:d=>Math.round(s(d,1,1e4))+" m²"},{k:"fbuild",label:"波形成形时长",type:"range",min:1,max:60,step:1,def:20,show:d=>d.fmed===1,fmt:d=>d+" s"}]},"1-2":{n:"固体机械波 · 地震",mm:1.3,d:.4,ctrls:[{k:"ml",label:"局部震级 ML",type:"range",min:.5,max:9,step:.1,def:1.5,fmt:d=>"ML"+d+"（"+r(Math.pow(10,1.5*d+4.8)/1e3)+"）"},{k:"sfoc",label:"震源",type:"seg",opts:["浅源·地表破坏","深源·远传衰减"],def:0}]},"2-0":{n:"静电场/磁场 · B²/2μ₀·V",mm:1.2,d:.3,ctrls:[{k:"mb",label:"磁通量 B",type:"range",min:0,max:100,step:1,def:61,fmt:d=>s(d,.01,20).toFixed(2)+" T"},{k:"mv",label:"场体积 V",type:"range",min:0,max:100,step:1,def:50,fmt:d=>s(d,.01,100).toFixed(2)+" m³"},{k:"mT",label:"用途",type:"seg",opts:["吸拂·铁磁物件","磁约束·带电粒子/等离子体","偏转·精密微操"],def:0},{k:"mset",label:"场建立时长",type:"range",min:1,max:60,step:1,def:20,fmt:d=>d+" s"},{k:"mhold",label:"维持时长",type:"range",min:.1,max:60,step:.5,def:1,fmt:d=>d+" s"}]},"2-1":{n:"引力场 · 悬浮与撕裂",mm:2,d:.9,ctrls:[{k:"gk",label:"调什么",type:"seg",opts:["调g·宏观搬物(便宜!)","调梯度·潮汐撕裂"],def:0},{k:"gm",label:"质量",type:"range",min:0,max:100,step:1,def:60,show:d=>d.gk===0,fmt:d=>s(d,.1,2e3).toFixed(1)+" kg"},{k:"gh",label:"抬升高度/力臂",type:"range",min:.1,max:20,step:.1,def:1,show:d=>d.gk===0,fmt:d=>d+" m"},{k:"gg",label:"头脚引力差",type:"range",min:1.1,max:10,step:.1,def:2,show:d=>d.gk===1,fmt:d=>"×"+d+"（"+r(625e5*Math.pow(d-1,2)*1e3)+"）"}]},"2-2":{n:"核力场 · 强/弱相互作用",mm:5,d:1.2,ctrls:[{k:"nmode",label:"操纵模式",type:"seg",opts:["衰变加速·放射性操纵","结合能释放·核素点燃"],def:0},{k:"nmass",label:"核素质量",type:"range",min:0,max:100,step:1,def:10,fmt:d=>{let x=.1*Math.pow(1e4,d/100);return x<1?(x*1e3).toFixed(0)+" mg":x.toFixed(1)+" g"}},{k:"nctl",label:"释放方式",type:"seg",opts:["全域·原地释放","定向·方向性引导"],def:0}]}},W=[["0-0","0-1"],["1-0","1-1","1-2"],["2-0","2-1","2-2"]];function Q(d){let x=W[d.mode];return x[Math.min(d.sub,x.length-1)]}let ve={pour:{name:"倾泻系",sub:'热/电/光 · 出"口"即直线',baseMind:2,baseTime:.25,tell:3,ctrls:[{k:"phase",label:"相态形态(=分支)",type:"seg",opts:["光辐射·光","电子流·电磁","热膨胀·爆轰·热"],def:0},{k:"pw",label:"释放脉宽 t",type:"range",min:0,max:100,step:1,def:55,fmt:d=>a(d).toFixed(2)+" s"},{k:"th",label:"准直发散角 θ",type:"range",min:0,max:100,step:1,def:25,fmt:d=>(d<15?"针状·单点穿甲":d<60?"收窄束":"扇形·面爆燃")+"（"+d+" 档）"}]},flow:{name:"波动系",sub:"插槽=物理量，E=公式导出",baseMind:2,baseTime:.3,tell:2,derived:!0,ctrls:[{k:"mode",label:"作用模态(=分支组)",type:"seg",opts:["实体波·无需介质","媒介波·依赖介质","场·势能梯度"],def:1},{k:"sub",label:"操纵实体",type:"seg",def:1},{k:"br",label:"介质借用率",type:"range",min:0,max:100,step:5,def:70,show:d=>d.mode===1,fmt:d=>d+" %"}]},struct:{name:"结构系",sub:"分子重排 · 不可逆零维持",baseMind:2,baseTime:.5,tell:2,ctrls:[{k:"base",label:"无机物基底(=分支)",type:"seg",opts:["随身钢材→金属","地面存量→土石","空气粉尘→土石·能量×3","随身晶体→晶体","随身合金→合金"],def:1},{k:"latt",label:"晶格重排方向",type:"range",min:0,max:100,step:1,def:80,fmt:d=>(d>70?"共价相·脆硬":d>30?"混相":"金属相·延韧")+"（"+d+" 档）"},{k:"mass",label:"重排体量",type:"range",min:0,max:100,step:1,def:55,fmt:d=>l(d).toFixed(1)+" kg"},{k:"rate",label:"重排速率",type:"range",min:.5,max:10,step:.5,def:3,fmt:d=>d+" 档"},{k:"stress",label:"魔素应力",type:"seg",opts:["固化·零维持费","应力·按秒计费"],def:0},{k:"stressT",label:"应力时长",type:"range",min:1,max:30,step:1,def:10,show:d=>d.stress===1,fmt:d=>d+" s"}]},life:{name:"生机系",sub:"催化剂不是锤子",baseMind:3,baseTime:.4,tell:1,ctrls:[{k:"targ",label:"对象(=分支)",type:"seg",opts:["植物","动物(含人体)","微生物"],def:1},{k:"pen",label:"渗透速率",type:"range",min:0,max:100,step:5,def:40,fmt:d=>d+" %"},{k:"inten",label:"增殖烈度",type:"seg",opts:["修复增殖(愈合)","增生催长","失控增殖(伤人)"],def:0},{k:"form2",label:"剂型相态",type:"seg",opts:["接触","注液","气雾"],def:1},{k:"sel",label:"目标选择性",type:"seg",opts:["仅自身","指定个体","指定物种","无差别"],def:1},{k:"lat",label:"潜伏期",type:"range",min:0,max:600,step:10,def:0,fmt:d=>d+" min"},{k:"cat",label:"催化时长",type:"range",min:.5,max:20,step:.5,def:3,fmt:d=>d+" min"}]},perce:{name:"感知系",sub:"只读不写 · 精神是主账单",baseMind:4,baseTime:.3,tell:1,relCap:.5,ctrls:[{k:"rad",label:"扫描半径",type:"range",min:1,max:200,step:1,def:30,fmt:d=>d+" m"},{k:"res",label:"信噪/分辨率",type:"seg",opts:["广域","标准","锐分(被察觉+8%)"],def:1},{k:"pert",label:"信息扰动深度(=分支)",type:"seg",opts:["噪声干扰→读心干扰","幻觉碎片→信息伪造","深幻→信息伪造","纯感知→五感延伸"],def:0},{k:"dwell",label:"驻留形态",type:"seg",opts:["瞬时扫","待机雷达","触发告警"],def:0},{k:"dwellSec",label:"驻留时长",type:"range",min:5,max:60,step:5,def:20,show:d=>d.dwell>=1,fmt:d=>d+" s"}]}};function Ft(d){let x={};for(let E of ve[d].ctrls)x[E.k]=E.def;return xt(d,x)}function xt(d,x){if(d!=="flow")return Object.assign({},x);let E=Object.assign({},x),M=W[E.mode];M&&(E.sub=Math.max(0,Math.min(Number(E.sub)||0,M.length-1)));for(let m of(k[Q(E)]||{ctrls:[]}).ctrls)m.k in E||(E[m.k]=m.def);return E}function os(d,x){if(d==="pour")return["光","电","热"][x.phase];if(d==="flow"){let E=Q(x);return E[0]==="0"?"实体波":E[0]==="1"?"媒介波":{"2-0":"电磁场","2-1":"引力场","2-2":"核力场"}[E]}return d==="struct"?["金属","土石","土石","晶体","合金"][x.base]:d==="life"?["植物","动物(含人体)","微生物"][x.targ]:["读心干扰","信息伪造","信息伪造","五感延伸"][x.pert]}function Ga(d,x){let E=xt(d,x),M={},m=L=>{if(L.show&&!L.show(E))return;let C=E[L.k];L.type==="seg"?M[L.label]=L.opts&&L.opts[C]!=null?L.opts[C]:String(C):M[L.label]=L.fmt?L.fmt(C):String(C)};for(let L of ve[d].ctrls){if(L.k==="sub"){M[L.label]=(k[Q(E)]||{}).n||String(E.sub);continue}m(L)}if(d==="flow")for(let L of(k[Q(E)]||{ctrls:[]}).ctrls)m(L);return M}function Ka(d,x,E){return d!=="flow"||Q(x)!=="1-1"||x.fmed!==0?null:{br_min:Math.max(0,x.br-15),fv_max:Math.min(100,x.fv+2),E_min:Math.max(.1,Math.round(E*.2*10)/10),E_max:Math.round(E*1.8*10)/10}}function Ya(d){return d?{介质借用率下限:d.br_min+" %",风速上限档:d.fv_max+"（约 "+Math.round(s(d.fv_max,30,1200))+" m/s）",输出下限kJ:d.E_min,输出上限kJ:d.E_max}:null}function as(d,x){let E=d.fam,M=d.e,m=xt(E,d.c),L=ve[E],C=x.scene||{wind:40,mat:3e3,water:!1},G=x.char&&x.char.speed||1,Me=os(E,m),oe=v(x.aff,E,Me,x.亲和磨炼),h={fam:E,F:L,g:oe,branch:Me,c:m,chips:[],lines:[]};h.out=L.relCap?Math.min(u(M),L.relCap):u(M);let j=L.baseMind;if(h.tell=L.tell,E==="pour"){let U=a(m.pw);h.t=U,h.relT=Math.max(.005,U),j+=(100-m.th)*.03+(U<.15?1.5:0)+Math.max(0,U-.3)*2,h.bill=h.out*oe.e,h.lines.push([["光辐射·无质量直线","电子流·寻最低阻","热膨胀·冲击波"][m.phase],"出手即承诺"]),h.lines.push(["脉宽",h.relT.toFixed(3)+"s → P=E/t"]),h.lines.push(["发散角",m.th<15?"针状·单点穿甲":m.th<60?"收窄束":"扇形·面爆燃（摊薄）"]),h.relT<=.01&&h.out>=50&&h.chips.push({t:"超短脉冲高能·通径瞬时击穿反噬自身",w:12,l:"r"}),m.phase===0&&(h.tell+=1),h.effect=[["光辐射","电子流","热爆轰"][m.phase],m.th<15?"针状穿甲":m.th<60?"收窄束":"扇形爆燃"].join("·")}else if(E==="flow"){let U=Q(m),$e=k[U]||k["2-2"],H=0,ae=1,X="",St=1;if(j*=$e.mm,m.mode===1){let P=C.wind+15,z=1.5;U==="1-0"&&(P=Math.max(C.wind,80)+15,z=1.5),U==="1-1"&&(P=m.fmed===1?90:C.wind+15,z=m.fmed===1?1.3:2),U==="1-2"&&(P=85,z=20);let Ze=Math.min(m.br,P);ae=1-.5*Ze/100,St=1+(z-1)*Ze/100,h.lines.push(["介质借用","有效"+Ze+"%/供给"+P+"% · 放大×"+St.toFixed(2)+"·折价×"+ae.toFixed(2)]),m.br>P&&h.chips.push({t:"断流风险·借用超现场介质供给",w:14,l:"o"})}if(U==="0-0"){let P=[1,1,1.2,1.6,2.5][m.band];if(j+=m.band*.8,m.eknob===0){let z=s(m.pkw,.1,1e3);H=z*m.et*P,h.relT=m.et,X=["无线电","微波","激光","X射线","γ射线"][m.band]+" "+z.toFixed(1)+"kW×"+m.et+"s",h.lines.push(["公式","E=P×t×频段税",H.toFixed(1)+"kJ"]),m.band>=3&&(h.lines.push(["高光子税","穿透≠杀伤，剂量与残留由裁判判"]),h.chips.push({t:"X/γ残留=专业设备可探测的证据链",w:6,l:"y"}))}else H=m.ecov*.55*m.et,h.relT=m.et,X="相位干涉·"+m.ecov+"m²×"+m.et+"s",j+=.5+m.ecov*.25,h.tell=1,h.lines.push(["公式","E=0.55kW/m²×t（相消只重排去向）",H.toFixed(1)+"kJ"]),h.lines.push(["干涉去向","能量挪到旁边——旁边站了谁？裁判判"])}else if(U==="0-1"){let P=1e-21*Math.pow(10,15*m.gwh/100),z=1e14*Math.pow(P/1e-6,2);H=z,h.gravCost=500,h.relT=1,j+=6,h.tell=5,X="应变h="+i(P),h.lines.push(["四极矩公式","E≈1e14kJ×(h/10⁻⁶)²"+(z<.1?" · 实战破坏≈0":""),r(z)]),h.chips.push({t:"引力操纵·战略级征状（军方监控阵列会看向这里）",w:15,l:"r"}),P<1e-12?h.chips.push({t:"涟漪活人毫无知觉——只有干涉仪知道你出手了",w:8,l:"o"}):P>=1e-7&&h.chips.push({t:"肉眼可见空间抖动=国家级事件",w:30,l:"r"}),h.effect=X+(P<1e-12?"（实战破坏≈0，纯信号源）":"")}else if(U==="1-0")if(m.sknob===0)H=1e-12*Math.pow(10,m.db/10)*.5*m.st/1e3,h.relT=Math.max(.05,m.st),X=m.db+"dB声压×"+m.st+"s",j+=(m.db-120)/40,h.lines.push(["公式","E=I×0.5m²(胸腔)×t（基准10⁻¹²W/m²）",H<1?(H*1e3).toFixed(0)+"J":H.toFixed(1)+"kJ"]),m.db>=194&&h.chips.push({t:"194dB+ 空气非线性·声压失真转为激波",w:10,l:"o"}),m.db>=190&&(h.lines.push(["共振条款","体表无伤、内脏出血——死法认定由裁判判"]),h.tell=3);else if(m.sknob===1){let P=s(m.svol,.1,1e3);H=100*P*m.st/1e3,h.relT=Math.max(.1,m.st),X="超声空化"+P.toFixed(1)+"L×"+m.st+"s",j+=1,h.lines.push(["公式","E=100W/L×t（气泡溃灭微射流）",H.toFixed(2)+"kJ"]),h.chips.push({t:"需液相介质：水体在场或人体70%水自带",w:C.water?4:6,l:"o"})}else H=m.scov*.05*m.st,h.relT=Math.max(.1,m.st),X="静默区r="+m.scov+"m×"+m.st+"s",j+=.5+m.scov*.3,h.tell=1,h.lines.push(["公式","E=反向相位叠加0.05kW/m（消音不消能量）",H.toFixed(2)+"kJ"]);else if(U==="1-1")if(m.fmed===0){let P=s(m.fa,.005,5),z=s(m.fv,30,1200);h.relT=.3;let Ze=z>340?z/340:1;H=.5*1.2*P*Math.pow(z,3)*h.relT/1e3*Ze,X="风刃 A="+P.toFixed(3)+"m² v="+z.toFixed(0)+"m/s",h.lines.push(["公式","E=½ρAv³×t×激波系数",H.toFixed(1)+"kJ"]),z>340&&h.chips.push({t:"跨音速·激波爆鸣=自带开团广播",w:6,l:"o"}),j+=.025*m.fv}else{let P=s(m.fA,1,1e4);H=4.9*P*m.fh*m.fh,h.relT=m.fbuild,j+=1.5,X="浪高"+m.fh+"m×"+P.toFixed(0)+"m²·成形"+m.fbuild+"s",h.lines.push(["公式","E=½ρ水gAh²",r(H)]),C.water||h.chips.push({t:"现场无水柱！先声明水源（管道/雨/泳池）否则空转",w:12,l:"r"}),H>1e3&&h.chips.push({t:"兆焦水体位移=市政级事故现场",w:12,l:"r"})}else if(U==="1-2")H=Math.pow(10,1.5*m.ml+4.8)/1e3*(m.sfoc===1?.6:1),h.relT=2,h.workOut=H*g.seismicWorkFrac,X="ML"+m.ml+(m.sfoc===1?"·深源远传":"·浅源地表破坏"),h.lines.push(["古登堡公式","log₁₀E(J)=1.5ML+4.8",r(H)]),j+=2.5+m.ml*1.5,h.tell=Math.min(5,Math.round(2+m.ml)),h.lines.push(["引信条款","总释放大地出，你只付点火费——后续自然滑移由裁判判"]),m.ml>=2.5&&h.chips.push({t:"城市逃逸阈值以上——十分钟后到场的将是军队",w:25,l:"r"}),m.ml>=4.5&&h.chips.push({t:"ML4.5+=1/30广岛·压箱底大招",w:30,l:"r"});else if(U==="2-0"){let P=s(m.mb,.01,20),z=s(m.mv,.01,100);H=P*P*397.9*z,h.relT=m.mhold??1,h.chargeT=m.mset,X=P.toFixed(2)+"T×"+z.toFixed(2)+"m³·"+["吸拂","磁约束","偏转微操"][m.mT],h.lines.push(["磁场能公式","E=B²/2μ₀·V（B平方·V线性）",r(H)]),h.lines.push(["建立/维持",m.mset+"s 建立 · "+h.relT+"s 维持"]),P>=8&&h.chips.push({t:"10T实验室级：铁磁物全压饼（植入物？裁判判）",w:15,l:"r"}),m.mT===1&&(j+=1.5),m.mT===2&&(j+=2.5)}else if(U==="2-1")if(m.gk===0){let P=s(m.gm,.1,2e3);H=P*9.8*m.gh/1e3,h.relT=1,j+=2.5,h.tell=2,X="悬浮"+P.toFixed(1)+"kg×"+m.gh+"m",h.lines.push(["公式","E=mgh（把枪从手里提走只要几焦）",H.toFixed(2)+"kJ"])}else H=625e5*Math.pow(m.gg-1,2),h.relT=1,j+=8,h.tell=5,X="头脚引力差×"+m.gg,h.lines.push(["曲率代价",'梯度×5≈1TJ——"不如扔板砖"是公式结论']),h.chips.push({t:"潮汐撕裂≈战术核弹能耗+战略征状",w:30,l:"r"});else if(U==="2-2"){let P=.1*Math.pow(1e4,m.nmass/100);h.nmass_g=P,m.nmode===1?(H=P*8e4,h.relT=3,X="核素点燃"+(P<1?(P*1e3).toFixed(0)+"mg":P.toFixed(1)+"g"),h.lines.push(["微裂变公式","E=8×10⁴kJ/g（可控截面转化率0.1%）",r(H)]),j+=8,h.chips.push({t:"核爆征状·使用即国家级事件，全球监控阵列看向这里",w:30,l:"r"}),H>=1e7&&h.chips.push({t:"战术核弹当量门槛·压箱底同归于尽招",w:15,l:"r"})):(H=P*400,h.relT=10,X="衰变加速"+(P<1?(P*1e3).toFixed(0)+"mg":P.toFixed(1)+"g"),h.lines.push(["活化能公式","E=400kJ/g·跨越衰变势垒",H.toFixed(0)+"kJ"]),j+=6,h.chips.push({t:"放射性污染·缓发杀伤，剂量账单由裁判记",w:20,l:"r"})),m.nctl===1?(j+=2,h.lines.push(["定向引导","方向性释放·减少误伤，代价是精度负荷"])):h.chips.push({t:"全域原地释放·风向与人群都站在这笔账里",w:10,l:"r"}),h.tell=5,h.effect=X}else H=0,h.relT=1,j=99,X="未解锁";h.out=Math.round(H*100)/100,h.bill=(h.out/St*ae+(h.gravCost||0))*oe.e,h.effect=X,h.entity=U,h.lines.unshift([b[m.mode].n+"→"+$e.n+"·分支["+Me+"]",""])}else if(E==="struct"){let U=l(m.mass),$e=[50,C.mat,5,20,40][m.base],H=m.base===2?3:1;h.kg=U,h.dem=U*.6*H,h.fill=h.out/h.dem,h.qual=Math.min(1.2,.5+.08*m.rate);let ae=m.latt/100;h.hard=ae,h.pool=U*.4*(.6+.4*ae)*h.qual*(m.stress?1.5:1),h.relT=m.rate,j+=.2*m.rate+U/60+(m.rate<1?2:0)+(m.stress?m.stressT*1:0),h.lines.push(["基底",["随身钢材→金属","地面存量→土石","空气粉尘→土石·能量×3","随身晶体→晶体","随身合金→合金"][m.base],"上限"+$e+"kg"]),h.lines.push(["晶格",(ae>.7?"共价相·脆硬":ae>.3?"混相":"金属相·延韧")+" 质量系数"+h.qual.toFixed(2)]),h.lines.push(["体量",U.toFixed(1)+"kg 需"+h.dem.toFixed(0)+"kJ 充足率"+(h.fill*100).toFixed(0)+"%"]),h.fill<.8&&h.chips.push({t:"注入不足·出半成品",w:10,l:"o"}),U>$e&&h.chips.push({t:"无料可塑·超基底存量",w:12,l:"r"}),ae>.7&&h.chips.push({t:"共价相·池烧穿即脆断",w:0,l:"y"}),h.lines.push(["维持","固化=零维持费；破坏=对波烧池"]),h.bill=(Math.max(h.out,h.dem*h.qual)+(m.stress?.1*h.pool*m.stressT:0))*oe.e,h.effect=U.toFixed(0)+"kg·"+(ae>.7?"共价":ae>.3?"混":"金属")+"相"+(m.stress?"·应力硬化":"")}else E==="life"?(j+=m.pen/25+m.cat*1.5,j*=[.8,1.5,2.5,1][m.sel],j-=Math.min(3,m.lat/200),h.relT=Math.max(.2,.3+m.cat*.05),m.pen>70&&h.chips.push({t:"急渗拒斥·目标组织排异",w:8,l:"o"}),m.form2===2&&(h.tell+=1,h.chips.push({t:"气雾回吹·扩散方向交给风",w:8,l:"o"})),m.sel===3&&h.chips.push({t:"无差别·生态事故风险(剧情代价裁判判)",w:20,l:"r"}),m.inten===2&&h.chips.push({t:"失控增殖·命中即伦理账单",w:6,l:"r"}),h.lines.push(["对象","["+["植物","动物(含人体)","微生物"][m.targ]+"] 愈毒同杆两端"]),h.bill=h.out*(1+.4*m.pen/100)*oe.e,h.effect=["愈合","增生","伤人"][m.inten]+"·"+["接触","注液","气雾"][m.form2]+"·"+["植物","动物","微生物"][m.targ]):(j+=m.rad*m.rad/400*3,j*=[1,1.5,2.5][m.res],m.dwell===1&&(j+=2*m.dwellSec),m.dwell===2&&(j+=2+.3*m.dwellSec),h.relT=m.dwell>=1?m.dwellSec:.1,m.res===2&&h.chips.push({t:"被察觉风险·强精神目标可反感知",w:8,l:"o"}),h.lines.push(["主账单","能量折算≤"+L.relCap+"kJ，账全在精神"]),h.bill=h.out*oe.e,h.effect="半径"+m.rad+"m·"+["广域","标准","锐分"][m.res]);return h.readyT=Math.max(.15,(L.baseTime+(E==="struct"?m.rate:0)+(h.chargeT||0))/G),h.mind=j*oe.m,h.lines.unshift([L.name+"·分支["+Me+"]→"+oe.n,"精神×"+oe.m+" 能量×"+oe.e]),h}function is(d,x,E){let M=xt(d,x),m=0,L=[],C=E&&E.g&&E.g.t==="main";if(d==="flow"){let G=Q(M);k[G]&&k[G].d&&(m+=k[G].d,L.push(k[G].n.split(" ")[0])),G==="1-1"&&M.fmed===0&&(M.br<65&&(m+=(65-M.br)/100,L.push("借用偏离熟路")),m+=Math.max(0,M.fv-72)*.003),G==="0-0"&&M.eknob===1&&(m+=.25,L.push("调相·精密活")),G==="2-0"&&M.mT===2&&(m+=.2,L.push("偏转微操")),G==="1-0"&&M.sknob===2&&(m+=.2,L.push("声相位"))}else d==="struct"?(C||(m+=.45,L.push("结构·陌生场")),M.base===2&&(m+=.3,L.push("粉尘")),M.stress&&(m+=.2,L.push("应力"))):d==="pour"?C||(m+=.8,L.push("倾泻·全新地形")):d==="life"?C||(m+=.7,L.push("生机·全新地形")):C||(m+=.6,L.push("感知·全新地形"));return E.g.t==="far"&&!L.length&&(L.push("全陌族"),m=Math.max(m,.5)),{d:Math.min(m,4),unf:1+.25*Math.min(m,4),parts:L}}function ls(d,x,E){if(!d.tuned||!d.tuned.length||x.fam!=="flow")return null;let M=xt("flow",E);if(Q(M)!=="1-1"||M.fmed!==0)return null;for(let m of d.tuned){if(!m.budget||!m.params||m.params.fmed!==0)continue;let L=m.budget;if(M.br>=(L.br_min??85)&&M.fv<=(L.fv_max??72)&&x.out>=(L.E_min??1)&&x.out<=(L.E_max??9))return m}return null}function cs(d){let x={正常:0,轻伤:1,重伤:2,过载透支:3}[d||"正常"];return{mM:1+.25*x,eM:1+.15*x,sev:x}}function us(d,x){let E=as(d,x),M=x.char||{},m=cs(M.body),L=is(d.fam,E.c,E),C=ls(x,E,E.c),G=Math.max(.5,E.mind*L.unf*m.mM),Me=E.bill*m.eM;d.固定?G=Math.max(.5,G*g.fixedMindMul):C&&(G=Math.max(.5,G*.3)),G=+G.toFixed(1),Me=Math.round(Me*10)/10;let oe=Me>(M.eCur??1/0),h=((E.workOut??E.out)||.1)/E.relT,j=E.workOut!=null?E.workOut:Math.round(E.bill/(E.g.e||1)*10)/10,U=M.burstKW??300,$e=M.sustainKW??50,H=h>U,ae=E.relT>=1&&h>$e,X=M.mMax??90,St=M.mCur??90,P=G/X,z=P<1/3?{n:"绿·轻度",c:"g"}:P<2/3?{n:"黄·中度",c:"y"}:P<.9?{n:"红·重荷",c:"r"}:{n:"紫·断线区",c:"p"},Ze=Math.max(1,Math.min(5,Math.round(E.tell+(E.g.t==="far"?1:0)))),si=E.workOut!=null?U||1:E.relT>=1?$e||1:U||1,Ge=+(h/si*100).toFixed(1),ps=Math.max(1,X),fs=Math.max(0,Math.min(1,St/ps)),tr=Math.pow(100/ps,.5),ms=.8+(1-fs)*1.2,oi=.6+1.4*Math.pow(1-fs,2),ln=0;Ge>150?ln=35+(Ge-150)*1:Ge>100?ln=5+(Ge-100)*.6:Ge>80&&(ln=(Ge-80)*.25);let ai=ln*tr*ms,ii=E.g.t==="far"?18:E.g.t==="mid"?6:0,li=(Math.max(1,L.unf)-1)*20,gs=ii+li;C&&(gs*=.3);let ci=gs*tr*oi,Ke=E.chips.slice(),ui=E.chips.reduce((pi,fi)=>pi+(fi.w||0),0)+m.sev*5+(oe?20:0),di=Math.min(100,Math.max(0,Math.round(ai+ci+ui)));return m.sev&&Ke.push({t:"伤势["+(M.body||"正常")+"] 精神×"+m.mM.toFixed(2)+" 能量×"+m.eM.toFixed(2),w:0,l:"y"}),ae&&Ke.push({t:"超持续线·"+h.toFixed(0)+"kW>"+$e+" → 冲刺数秒后段衰减",w:0,l:"o"}),H&&Ke.push({t:"超爆发上限"+U+"kW·断线",w:0,l:"r"}),P>=2/3&&Ke.push({t:"负荷区≥⅔·手抖冷汗视线发毛",w:0,l:"r"}),G>St&&Ke.push({t:"精神余量不足·失败形态由裁判挑",w:0,l:"r"}),oe&&Ke.push({t:"储量透支·过载灼伤烧在接触处",w:0,l:"r"}),{r:E,E_out:E.out,bill:Me,mind:G,workE:j,relT:E.relT,readyT:E.readyT,power:h,tell:Ze,risk:di,zone:z,overloadRate:Ge,beta:tr,gamma:ms,unf:L,chips:Ke,tunedHit:C?C.id:null,tunedName:C?C.名||C.name:null,exhaust:oe,overBurst:H,overSustain:ae}}function ei(d){let x=(d.desc||"").trim(),E=d.scene||{};return x.length<8?{结论:"驳回",解释:'描述太短，抽不出"作用对象+作用方式"两要素。格式参考：用磁场把三米外手枪隔空捞过来'}:/真空/.test(x)&&/声|喊|尖叫|噪音/.test(x)?{结论:"驳回",解释:"媒介波必须有介质：真空没有可供集体运动的分子，你的声波没有承载物。改实体波，或者先找空气。"}:/引力波/.test(x)&&/(撕|震|砸|撞)/.test(x)?{结论:"驳回",解释:'h<10⁻¹²的引力波对宏观目标实战意义≈0（四极矩公式摆着）。想"撕"——去引力场·梯度插槽，那是另一笔核弹账。'}:/水浪|海啸|水流|液压/.test(x)&&!E.water?{结论:"驳回",解释:"场景判定：现场无水柱可用。声明水源（消防栓/泳池/暴雨）后重提。"}:/地震|板块|震级/.test(x)&&(E.mat??3e3)<=0?{结论:"驳回",解释:"固体机械波需要岩层耦合，你现在悬空/薄沥青。先落地。"}:{结论:"通过",规范化回路:{名:x.slice(0,7)+"·自拟",族:d.fam,实体:d.entity||null,参数向量:d.params,一句话效果:d.effect}}}function ds(d){let x=d.r,E=[];E.push("【主角拥有的回路｜"+(d.tunedHit?"固定招微调("+d.tunedName+")":"自由回路·临时构建")+"】"),E.push("[ "+x.F.name+"·分支["+x.branch+"]·"+x.g.n+" 精神×"+x.g.m+" 能量×"+x.g.e+" ]"),E.push(" 能量 "+x.out.toFixed(x.out<10?2:1)+"kJ（"+r(x.out)+"）→ 计费 "+d.bill.toFixed(1)+"kJ，回合末从储量扣"),E.push(" · 效果："+(x.effect||"—")),x.fam==="struct"&&E.push(" · 固化=零维持；池"+x.pool.toFixed(0)+"kJ"),E.push(" · 就绪 "+x.readyT.toFixed(2)+"s · 作用 "+x.relT.toFixed(2)+"s · 征状Lv"+d.tell),E.push(" · 精神 "+d.mind.toFixed(1)+"（"+d.zone.n+"）· 风险 "+d.risk+"%");let M={pour:"粒子走直线，弹道改不了也撤不了单。",flow:"相消不消灭能量，挪走的在别处结账；地震的后续滑移账看裁判。",struct:"重排期被打断=晶界缺陷。",life:"起效前是段没人看见的时间；气雾方向交给风。",perce:"读人时也被人读；写型被打断即反噬。"}[x.fam];return E.push(" 裁判备注："+M),E.push("（本单=编译产物；数字对外只到锚点级）"),E.join(`
`)}function ti(d,x){let E=d.r;return{schema:"cast_out/1",time:x||null,fam:E.fam,branch:E.branch,entity:E.fam==="flow"&&E.entity||null,params:E.c,energy:{E_kJ:E.out,bill_kJ:d.bill,anchor:r(E.out),derived:!!E.F.derived},power:{relT_s:E.relT,P_kW:+d.power.toFixed(1)},mind:{cost:d.mind,unf:+d.unf.unf.toFixed(2)},tell_lv:d.tell,risk_pct:d.risk,chips:d.chips.map(M=>M.t),tuned_via:d.tunedHit||null,hooks:E.lines.filter(M=>/裁判|由裁|滑移|旁边/.test(String(M[1]))).map(M=>String(M[1]))}}function ni(d,x){let E=x||{};return{ref:d.tunedHit||"tmp·现搭",分支:d.r.branch,名:E.name||String(d.r.effect).slice(0,10)+(d.tunedHit?"·微调":"·现构"),bill:d.bill,mind:d.mind,workE:d.workE,tell:d.tell,risk:d.risk,order:ds(d)}}function ri(d,x,E){if(!Array.isArray(d))return[];let M=typeof E=="function"?E:Math.random;return d.map(m=>{let L={fam:m.famKey,e:m.注册e||0,c:m.参数向量||{}},C=us(L,x);return Object.assign({},m,{过载率:C.overloadRate,过载风险:C.risk,本轮走火:Math.floor(M()*100)+1<=C.risk})})}return{quote:us,calcCircuit:as,localJudge:ei,compileOrder:ds,buildCastOut:ti,makePending:ni,settleCircuitLibrary:ri,initParams:Ft,syncParams:xt,branchOf:os,curKey:Q,tierOf:p,gateOf:v,injuryMod:cs,unfOf:is,findTuned:ls,readableParams:Ga,budgetFrom:Ka,readableBudget:Ya,TUNE:g,TREE:w,FAMKEY:y,FAMS:ve,SUBS:k,SUBKEYS:W,MODES:b,WINDS:t,MATS:e,ANCH:n,anchorOf:r,sliderToKJ:u,kjToSlider:f,logv:s,logTo:o,pwS:a,massKg:l,exp10:i,VERSION:"2.3.0"}});var R=globalThis.CircuitEngine??(typeof window<"u"?window.CircuitEngine:void 0);if(!R)throw new Error("[渐变带] CircuitEngine 未加载");var Qp=R.VERSION,qn=R.quote.bind(R),Bp=R.calcCircuit.bind(R),Vp=R.localJudge.bind(R),ya=R.compileOrder.bind(R),Jp=R.buildCastOut.bind(R),zp=R.makePending.bind(R),ba=R.settleCircuitLibrary.bind(R),Qn=R.initParams.bind(R),Bn=R.syncParams.bind(R),va=R.branchOf.bind(R),Xp=R.curKey.bind(R),Ea=R.tierOf.bind(R),Zp=R.gateOf.bind(R),Gp=R.injuryMod.bind(R),Kp=R.unfOf.bind(R),Yp=R.findTuned.bind(R),xa=R.readableParams.bind(R),jr=R.budgetFrom.bind(R),Wr=R.readableBudget.bind(R),rn=R.TUNE,Sa=R.TREE,qr=R.FAMKEY,ef=R.FAMS,tf=R.SUBS,nf=R.SUBKEYS,rf=R.MODES,sf=R.WINDS,of=R.MATS,af=R.ANCH,Qr=R.anchorOf.bind(R),lf=R.sliderToKJ.bind(R),cf=R.kjToSlider.bind(R),uf=R.logv.bind(R),df=R.logTo.bind(R),pf=R.pwS.bind(R),ff=R.massKg.bind(R),mf=R.exp10.bind(R);function Ic(t){let e=new Map(t.回路库.map(r=>[r.id,r])),n=r=>r?e.get(r)??null:null;return{固定槽:t.槽位.固定槽.map(n),自由槽:t.槽位.自由槽.map(n)}}function wa(t){let e=Ic(t),n=(s,o,i)=>s==null?null:{序号:o,类型:i,id:s.id,名称:s.名称,族:s.族,分支:s.分支,一句话效果:s.基线账单?.一句话效果??""},r={主角:{能量kJ:t.主角.能量kJ,精神点:t.主角.精神点,爆发线kW:t.主角.爆发线kW,爆发倍率:t.主角.爆发倍率??10,持续线kW:t.主角.持续线kW,战斗中:t.主角.战斗中,身体状态:t.主角.身体状态,剧情时间:t.主角.剧情时间.label},槽位清单:{固定槽:e.固定槽.map((s,o)=>n(s,o+1,"fixed")).filter(Boolean),自由槽:e.自由槽.map((s,o)=>n(s,o+1,"free")).filter(Boolean)},场景:t.场景};return JSON.stringify(r,null,1)}function Ta(t){let e=["静风","和风","劲风","风暴"][Math.min(3,Math.max(0,Math.round(t.场景.风力档/33)))]??"和风";return`风力：${t.场景.风力档}（${e}）；可塑无机物：${t.场景.可塑无机物kJ}kJ；水体在场：${t.场景.水体在场?"有":"无"}`}var Pc={name:"state_change_pack",value:{type:"object",properties:{现在剧情时间:{type:"string",description:"格式：2026年11月12日，21：12"},本轮使用回路:{type:"array",items:{type:"object",properties:{回路:{type:"string",description:"槽位清单里的回路 id"},次数:{type:"integer",minimum:1,description:"本回合使用次数，必须为精确数字"}},required:["回路","次数"],additionalProperties:!1}},剧情数值变更:{type:"object",properties:{能量:{type:"number"},精神:{type:"number"},能量上限:{type:"number"},精神上限:{type:"number",description:"仅突破/觉醒类剧情允许提高"},持续线:{type:"number",description:"只能为正（提高），仅训练/战斗类剧情，一次 1~5；瞬时爆发线=持续×倍率自动派生，禁止直接报爆发线"}},additionalProperties:!1},身体:{type:["object","null"],properties:{状态:{type:"string",enum:["正常","轻伤","重伤","过载透支"]}},required:["状态"],additionalProperties:!1},战斗中:{type:["boolean","null"],description:"仅当存在有敌意的生物时才算 true：追击/被追击、遭遇战都算；正常切磋/训练对练不算；无战斗场面输出 null"},新增补给:{type:"array",items:{type:"object",properties:{名称:{type:"string",description:"只允许 4 类：魔素晶体 / 魔素导液 / 快速生化止血喷雾 / 仿生神经桥接贴片"},数量:{type:"integer",minimum:1},纯度:{type:"number",minimum:0,maximum:99.99,description:"仅魔素晶体/魔素导液需要（0-99.99%，<80民用/80-99管控/≥99战略）；创伤补给严禁填"},克数:{type:"number",minimum:0,description:"仅魔素晶体需要：单颗克重 g（如 2.0）；创伤补给严禁填。正文无数字时按来源场景推断：地摊/民用 1.0~3.0g（缺省2.0）；军用 0.5~1.5g（缺省1.0）；绝密设施 0.01~0.1g 微量（严禁整克）"},容量ml:{type:"number",minimum:0,description:"仅魔素导液需要：单安瓿容量 ml（如 13）；创伤补给严禁填。正文无数字时按来源场景推断：地摊/民用 20~50ml（缺省30）；军用 5~15ml（缺省10）；绝密设施 1.0~3.0ml 微量冷萃"}},required:["名称","数量"],additionalProperties:!1}},场景变更:{type:["object","null"],properties:{风力档:{type:"number",description:"0/40/70/95 之一"},可塑无机物kJ:{type:"number"},水体在场:{type:"boolean"}},additionalProperties:!1},剧情获得:{type:"array",description:'本回合正文中主角获得/学会的新法术（每回合最多1条）。仅当正文明确出现获得/学会/被授予新回路时才报，否则输出空数组 []。你不懂引擎参数，所以参数由脚本按"族"取默认值，你只给 种类/族/一句话效果。',items:{type:"object",properties:{种类:{type:"string",enum:["fixed","free"],description:"fixed=剧情直接给的固化技（永久）；free=未固化技（挂自由回路库）"},族:{type:"string",enum:["pour","flow","struct","life","perce"],description:"该法术属于五系中的哪一系"},一句话效果:{type:"string",description:"用一句话概括这个法术的作用效果（作为回路的一句话效果）"},次数:{type:"integer",minimum:0,maximum:10,description:"仅种类=free 有意义（初始已用次数 0~9）；种类=fixed 填 10 表示永久（脚本会忽略）"}},required:["种类","族","一句话效果"],additionalProperties:!1}}},required:["现在剧情时间","本轮使用回路","剧情数值变更","身体","战斗中","新增补给","场景变更","剧情获得"],additionalProperties:!1}};async function _a(t){let n=K().提示词.数据AI,r=fa(4),s=`【前文背景（仅供参考因果，严禁在此提取结算项目）】
`+(r.bg||"（无）")+`
【本轮待结算正文（必须且仅在此范围内提取动作与事件！）】
`+r.latest,o={状态:wa(t),场景:Ta(t),出手单:"",正文:s},i;try{i=await pa({which:"数据AI",segments:n,vars:o,jsonSchema:Pc,generationId:`gb_data_${Date.now()}`})}catch(u){return{ok:!1,error:"数据AI调用失败："+(u?.message??u),忽略的回路:[],忽略的剧情:[]}}let a=ga(i);if(a==null)return{ok:!1,error:"数据AI输出无法解析为 JSON",raw:i,忽略的回路:[],忽略的剧情:[]};let l=ha(a,t);return l.ok?{ok:!0,pack:l.data,raw:i,忽略的回路:l.忽略的回路,忽略的剧情:l.忽略的剧情}:{ok:!1,error:l.error,raw:i,忽略的回路:l.忽略的回路,忽略的剧情:l.忽略的剧情}}function Br(t){let e=t??0;return e>=99?"战略":e>=80?"管控":"民用"}function ka(t,e){if(t==="魔素晶体"){let n=e??0;return n>=99?{目标:"能量",增加kJ:4800}:n>=80?{目标:"能量",增加kJ:1800}:{目标:"能量",增加kJ:500}}if(t==="魔素导液"){let n=e??0;return n>=99?{目标:"精神",增加点:50}:n>=80?{目标:"精神",增加点:30}:{目标:"精神",增加点:12}}return t==="快速生化止血喷雾"?{目标:"创伤",身体状态:"正常"}:t==="仿生神经桥接贴片"?{目标:"创伤",身体状态:"轻伤"}:null}function Ra(t){let e=t??0;return e>=99?.05:e>=80?1:2}function La(t){let e=t??0;return e>=99?2:e>=80?10:30}function Cc(t){let e=n=>({fam:qr[n.族]??n.族,br:n.分支});return{main:(Array.isArray(t.亲和.主分支)?t.亲和.主分支:[]).map(e),subs:(t.亲和.次分支||[]).map(e)}}function Dc(t,e){let n={},r=t.主角.磨炼??{},s=Math.max(1,t.主角.能量kJ.上限);for(let[o,i]of Object.entries(qr))for(let a of Sa[i]??[])Ea(e,o,a)==="far"&&(n[a]=Math.round((4-2*Math.min(1,(r[a]??0)/(5*s)))*100)/100);return n}function Vn(t,e){let n=Cc(t);return{aff:n,亲和磨炼:Dc(t,n),scene:{wind:t.场景.风力档,mat:t.场景.可塑无机物kJ,water:t.场景.水体在场},char:{burstKW:t.主角.爆发线kW,sustainKW:t.主角.持续线kW,speed:1,eCur:t.主角.能量kJ.当前,mCur:t.主角.精神点.当前,mMax:t.主角.精神点.上限,body:t.主角.身体状态},tuned:e?.noTuned?[]:Hc(t)}}function Aa(t,e){let n=1,r=new Set(t.回路库.map(s=>s.id));for(;r.has(`${e}-${String(n).padStart(2,"0")}`);)n++;return`${e}-${String(n).padStart(2,"0")}`}function Oc(t){let{id:e,名称:n,type:r,famKey:s,params:o,e:i,g:a,来源:l}=t,u=Object.assign(Qn(s),o),f=Vn(a,{noTuned:!0}),g=qn({fam:s,e:i,c:u,固定:r==="fixed"},f),w=va(s,Bn(s,u)),y=r==="fixed"?jr(s,Bn(s,u),g.E_out):null;return{id:e,名称:n,type:r,族:{pour:"倾泻",flow:"波动",struct:"结构",life:"生机",perce:"感知"}[s],famKey:s,分支:w,实体:s==="flow"?String(g.r.entity??null):null,参数向量:u,注册e:i,参数明细:xa(s,u),微调预算:y,微调预算明细:Wr(y),基线账单:{输出kJ:g.E_out,计费kJ:g.bill,精神:g.mind,一句话效果:t.一句话效果??String(g.r.effect??"")},...t.物理相态与表征?{物理相态与表征:t.物理相态与表征}:{},uses:r==="free"?0:null,来源:l,审核存档:t.审核存档??null,审核状态:t.审核状态??"免审"}}function Ma(t,e){let n=[],r=[],s=[],o=t.主角;if(e.本轮使用回路.length){let p=Vn(t);for(let v of e.本轮使用回路){if(t.待扣单.some(k=>k.ref===v.回路))continue;let b=t.回路库.find(k=>k.id===v.回路);if(b){for(let k=0;k<v.次数;k++){let W=qn({fam:b.famKey,e:b.注册e??0,c:b.参数向量,固定:b.type==="fixed"},p);t.待扣单.push({ref:b.id,名称:b.名称+"（补扣）",分支:b.分支,bill:W.bill,mind:W.mind,workE:W.workE,tell:W.tell,risk:W.risk,锚点:Qr(W.E_out),order:ya(W),famKey:b.famKey})}n.push(`⑥a 补挂待扣：《${b.名称}》×${v.次数}（正文AI 额外施放）`)}}}if(t.待扣单.length){for(let p of t.待扣单){o.能量kJ.当前-=p.bill,o.精神点.当前-=p.mind;let v=p.分支??t.回路库.find(b=>b.id===p.ref)?.分支;v&&(o.磨炼??={},o.磨炼[v]=Math.round(((o.磨炼[v]??0)+(p.workE??0))*10)/10),n.push(`⑥a 扣费《${p.名称}》能量−${p.bill}kJ（${p.锚点}）精神−${p.mind}`)}t.待扣单=[],n.push("⑥a 待扣单已清空（施法即承诺）")}else n.push("⑥a 无待扣单");if(e.本轮使用回路.length)for(let p of e.本轮使用回路){let v=t.回路库.find(b=>b.id===p.回路);if(!v){n.push(`⑥b ${p.回路} 不在库，忽略`);continue}if(v.type!=="free"){n.push(`⑥b ${v.名称} 是固定回路，不计数`);continue}v.uses=(v.uses??0)+p.次数,n.push(`⑥b 《${v.名称}》uses +${p.次数} → ${v.uses}/${rn.promoteN}`)}else n.push("⑥b 本轮无回路使用报告");let i=Wn(e.现在剧情时间),a=i-o.上次结算min,l=e.战斗中===!0,u=o.战斗中&&l;if(a>0){let p=1,v=1;u?(p=0,v=0):o.身体状态==="重伤"&&(p=rn.injuryRegenMul,v=rn.injuryRegenMul);let b=o.能量kJ.上限,k=o.精神点.上限,W=Math.max(6,72-48/9800*(b-200)),Q=Math.round(b/(W*60)*a*p),ve=Math.round(k/900*a*v*10)/10;o.能量kJ.当前=Math.min(b,o.能量kJ.当前+Q),o.精神点.当前=Math.min(k,o.精神点.当前+ve),n.push(`⑥c Δt=${a}min（${a>=60?(a/60).toFixed(1)+"h":a+"分"}）自动恢复：能量+${Q}kJ（上限${b}·满回${W.toFixed(1)}h） 精神+${ve}${u?"（前后均战斗×0）":o.身体状态==="重伤"?"（重伤×0.5）":""}`)}else n.push(`⑥c Δt=${a}min，无恢复`);o.上次结算min=i,o.剧情时间.label=ma(i),e.身体&&(n.push(`⑥e 身体：${o.身体状态} → ${e.身体.状态}`),o.身体状态=e.身体.状态),e.战斗中!=null&&(n.push(`⑥e 战斗旗：${o.战斗中} → ${e.战斗中}`),o.战斗中=e.战斗中);let f=e.剧情数值变更;if(f&&Object.keys(f).length&&(typeof f.能量=="number"&&(o.能量kJ.当前+=f.能量,n.push(`⑥e 剧情特例：能量 ${f.能量>0?"+":""}${f.能量}kJ`)),typeof f.精神=="number"&&(o.精神点.当前+=f.精神,n.push(`⑥e 剧情特例：精神 ${f.精神>0?"+":""}${f.精神}`)),typeof f.能量上限=="number"&&(o.能量kJ.上限=Math.max(1,o.能量kJ.上限+f.能量上限),n.push(`⑥e 能量上限 → ${o.能量kJ.上限}kJ`)),typeof f.精神上限=="number"&&(o.精神点.上限=Math.max(1,o.精神点.上限+f.精神上限),n.push(`⑥e 精神上限 → ${o.精神点.上限}`),r.push(`精神上限变为 ${o.精神点.上限}`)),typeof f.持续线=="number"&&f.持续线>0&&(o.持续线kW=Math.round(o.持续线kW+f.持续线),o.爆发线kW=Math.round(o.持续线kW*(o.爆发倍率??10)*10)/10,n.push(`⑥e 持续线 → ${o.持续线kW}kW（爆发线 ${o.爆发线kW}kW）`),r.push(`持续线提升至 ${o.持续线kW}kW`))),e.场景变更){let p=e.场景变更;typeof p.风力档=="number"&&(t.场景.风力档=Math.min(95,Math.max(0,p.风力档)),n.push(`⑥e 场景：风力档 → ${t.场景.风力档}`)),typeof p.可塑无机物kJ=="number"&&(t.场景.可塑无机物kJ=Math.max(0,p.可塑无机物kJ),n.push(`⑥e 场景：可塑无机物 → ${t.场景.可塑无机物kJ}kJ`)),typeof p.水体在场=="boolean"&&(t.场景.水体在场=p.水体在场,n.push(`⑥e 场景：水体 → ${p.水体在场?"有":"无"}`))}for(let p of e.新增补给){if(!da.includes(p.名称)){r.push(`补给《${p.名称}》不在白名单（只收 魔素晶体/魔素导液/快速生化止血喷雾/仿生神经桥接贴片），忽略`);continue}if(p.名称==="魔素晶体"||p.名称==="魔素导液"){let b={名称:p.名称,数量:Math.max(1,p.数量),纯度:p.纯度};p.名称==="魔素晶体"?b.克数=p.克数??Ra(p.纯度):b.容量ml=p.容量ml??La(p.纯度),t.补给物品.push(b),n.push(`⑥f 新增补给《${p.名称}》(${Br(p.纯度)} ${p.纯度!=null?p.纯度+"%":""}${b.克数!=null?"·"+b.克数+"g":b.容量ml!=null?"·"+b.容量ml+"ml":""})×${p.数量}（库存·桌面滑杆使用）`);continue}let v=ka(p.名称,p.纯度);if(!v){r.push(`补给《${p.名称}》效果无法解析，忽略`);continue}for(let b=0;b<p.数量;b++)t.补给物品.push({名称:p.名称,数量:1,纯度:p.纯度,效果:{...v},uid:`${p.名称}${p.纯度!=null?"-"+p.纯度:""}#${Date.now().toString(36)}${b}`});n.push(`⑥f 新增补给《${p.名称}》(${Br(p.纯度)}${p.纯度!=null?" "+p.纯度+"%":""})×${p.数量}（一补给一牌）`)}e.新增补给.length||n.push("⑥f 无新增补给");let g=o.能量kJ.当前,w=o.精神点.当前;o.能量kJ.当前=Math.min(o.能量kJ.上限,Math.max(0,o.能量kJ.当前)),o.精神点.当前=Math.min(o.精神点.上限,Math.max(0,o.精神点.当前)),g!==o.能量kJ.当前&&n.push(`⑥g 能量钳制 ${Math.round(g)} → ${Math.round(o.能量kJ.当前)}`),w!==o.精神点.当前&&n.push(`⑥g 精神钳制 ${Math.round(w*10)/10} → ${o.精神点.当前}`),g>o.能量kJ.上限&&r.push("储量透支——过载灼伤烧在接触处");for(let p of[...t.回路库])if(p.type==="free"&&(p.uses??0)>=rn.promoteN){let v=Aa(t,"fx"),b={...p,id:v,type:"fixed",来源:"转正",uses:null,审核状态:"免审",微调预算:jr(p.famKey,Bn(p.famKey,p.参数向量),p.基线账单.输出kJ)};b.微调预算明细=Wr(b.微调预算),t.回路库.push(b),t.回路库=t.回路库.filter(k=>k.id!==p.id),t.槽位.自由槽=t.槽位.自由槽.map(k=>k===p.id?null:k),t.槽位.固定槽=t.槽位.固定槽.map(k=>k===p.id?null:k),s.push({新id:v,名称:p.名称}),r.push(`《${p.名称}》已转正为固定回路（${v}），原自由槽已空出`),n.push(`⑥h 转正：《${p.名称}》(fr) → ${v}(fx)，自由槽空出`)}s.length||n.push("⑥h 无转正");for(let p of e.剧情获得){let v=(p.一句话效果||"").slice(0,6)||"未名回路",b=Oc({id:Aa(t,p.种类==="fixed"?"fx":"fr"),名称:v,type:p.种类,famKey:p.族,params:Qn(p.族),e:0,g:t,来源:"剧情授技",一句话效果:p.一句话效果,审核状态:"待送审"});p.种类==="free"&&(b.uses=Math.min(9,Math.max(0,p.次数??0))),t.回路库.push(b);let k=p.种类==="fixed"?"固定":"自由";n.push(`⑥i 剧情授技：《${b.名称}》(${b.族}·${b.分支}) 入${k}库（待送审，参数默认），uses=${b.uses??"永久"}`),r.push(`剧情获得回路《${b.名称}》已入${k}库，待送审（牌库/侧栏有红点提示）`)}e.剧情获得.length||n.push("⑥i 无剧情获得");let y=Vn(t);return t.回路库=ba(t.回路库,y,Math.random),n.push(`⑥j 过载率/过载风险已重算 ${t.回路库.length} 条`),{log:n,notices:r,promoted:s}}function Hc(t){let e=[];for(let n of t.槽位.固定槽){if(!n)continue;let r=t.回路库.find(s=>s.id===n);r&&r.type==="fixed"&&r.微调预算&&e.push({id:r.id,名:r.名称,params:r.参数向量,budget:r.微调预算})}return e}var Nc="操作表";function $a(){Y(t=>{let e=t[Ne];return e&&(e[Nc]={manual:!1,circuits:[],counts:[]}),t},{type:"chat"})}var Fc=["normal","regenerate","continue","swipe"],Jn=null,Ht=!1,Vr=0,Pa=null;function Jr(){return Pa}async function Ia(t){let n=re(t)?.[0];!n||n.is_user||(n.message||"").endsWith(Hr)||await Be([{message_id:t,message:n.message+`
`+Hr}],{refresh:"affected"})}async function Ca(){let t={log:[],notices:[]},e=K(),n=Fe();if(!n)return t.error="未初始化存档（先完成开局）",t;if($a(),e.开关.自动结算){let r=await _a(n);for(let s of r.忽略的回路)t.notices.push(`回路报告忽略：${s.回路}×${s.次数}（${s.原因}）`);for(let s of r.忽略的剧情)t.notices.push(s);if(!r.ok)t.error=r.error,t.log.push("⑤ 契约校验拒绝："+r.error),t.log.push("（整包打回。可调整提示词后重试，或手动在工具页结算）");else if(r.pack){let s=Ma(n,r.pack);t.log.push(...s.log),t.notices.push(...s.notices)}}else t.log.push("（自动结算已关闭）");return await Ur(n),await Ot(n),await Y(r=>(r.渐变带日志={log:t.log,notices:t.notices,error:t.error??null,时间:new Date().toLocaleString()},r),{type:"chat"}),Pa=t,t}function Uc(t){let e=Math.max(1,Math.round(t.频率.数据AI||1));return Vr++,Vr%e===0||Vr===1}function Da(){Jn||(Jn=we("message_received",(t,e)=>{Fc.includes(e)&&(typeof t!="number"||t<0||(async()=>{if(Ht)return;let n=K();if(!Uc(n)){n.开关.状态栏标记&&await Ia(t);return}Ht=!0;try{console.info("[渐变带] 开始回合结算…"),await Ca()}catch(r){console.error("[渐变带] 回合结算异常",r)}finally{n.开关.状态栏标记&&await Ia(ye()),Ht=!1}})())}),console.info("[渐变带] 回合调度已启动"))}function Oa(){Jn?.stop(),Jn=null}async function zr(){if(Ht)return{log:[],notices:[],error:"上一轮结算尚未完成"};Ht=!0;try{return await Ca()}finally{Ht=!1}}var Ha="<渐变带开局/>";async function Zr(){let t=ye(),n=re(t)?.[0];n&&((n.message||"").includes(Ha)||await Be([{message_id:t,message:n.message+`
`+Ha}],{refresh:"affected"}))}var Xr=!1;async function Na(){Xr||(Xr=!0,K(),Da(),console.info("[渐变带·自由回路] 已随开局框架启动（⚡ 在「渐变带」页操作）"))}function Fa(){Oa(),Xr=!1}var Nt="overview",jc="<StatusPlaceHolderImpl/>".replace(/[/&]/g,t=>"\\"+t),Wc="<渐变带开局/>".replace(/[/&]/g,t=>"\\"+t);function sn(t){return String(t??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Ua(t){t.innerHTML='<div class="gbfc-tabs" id="gbfc-tabs"></div><div class="gbfc-body" id="gbfc-body" style="padding:12px"></div>';let e=t.querySelector("#gbfc-tabs"),n=t.querySelector("#gbfc-body"),r=[["overview","总览"],["settings","设置"],["prompts","提示词"],["tools","工具"]];e.innerHTML=r.map(s=>`<span class="gbfc-tab${s[0]===Nt?" on":""}" data-t="${s[0]}">${s[1]}</span>`).join(""),e.addEventListener("click",s=>{let o=s.target.dataset?.t;o&&(Nt=o,e.querySelectorAll(".gbfc-tab").forEach(i=>i.classList.toggle("on",i.dataset.t===o)),zn(n))}),zn(n)}function zn(t){let e=K(),n="";if(Nt==="overview"){n+="<h4>存档状态</h4>";let r=Fe();r?(n+=`<div class="gbfc-hint">剧情时间：${sn(r.主角.剧情时间.label)}　能量 ${Math.round(r.主角.能量kJ.当前)}/${r.主角.能量kJ.上限}kJ　精神 ${Math.round(r.主角.精神点.当前)}/${r.主角.精神点.上限}</div>`,n+=`<div class="gbfc-hint">回路库 ${r.回路库.length} 条（固定 ${r.回路库.filter(o=>o.type==="fixed").length} / 自由 ${r.回路库.filter(o=>o.type==="free").length}）　补给 ${r.补给物品.length} 种　待扣单 ${r.待扣单.length} 条</div>`):n+='<div class="gbfc-hint">未开局。到最新楼注入开局面板，完成角色创建。</div>';let s=Jr();s&&(n+=`<h4>最近回合报告</h4><div class="gbfc-log">${sn([...s.log,...s.notices.length?["【提示】"+s.notices.join(`
`)]:[],...s.error?["【错误】"+s.error]:[]].join(`
`))}</div>`),n+="<h4>快捷操作</h4>",n+='<button class="gbfc-btn" id="gbInjectOpening">注入开局面板到最新楼</button>',n+='<button class="gbfc-btn" id="gbManualTurn">手动结算一次</button>',n+='<button class="gbfc-btn" id="gbSync">手动同步快照</button>'}else if(Nt==="settings")n+="<h4>开关</h4>",Object.keys(e.开关).forEach(r=>{n+=`<label><input type="checkbox" data-sw="${r}" ${e.开关[r]?"checked":""}> ${r}</label>`}),n+="<h4>结算频率（每 N 条 AI 回复一次）</h4>",n+=`<label>数据AI <input type="number" min="1" step="1" data-freq="数据AI" value="${e.频率.数据AI}"></label>`,n+='<div class="gbfc-hint">数据AI / 法术AI 的 API 配置已移至侧栏「API」页。</div>';else if(Nt==="prompts")n+="<h4>提示词编辑</h4>",n+='<div class="gbfc-hint">两套提示词（数据 / 法术）已独立成页，段级编辑（ON/OFF、排序、增删、恢复默认）。</div>',n+='<button class="gbfc-btn" id="gbGotoPrompts">打开「渐变带·提示词」页</button>';else if(Nt==="tools"){n+="<h4>工具</h4>",n+='<button class="gbfc-btn" id="gbInjectOpening2">注入开局面板标记到最新楼</button>',n+='<button class="gbfc-btn" id="gbManualTurn2">手动结算一次（数据AI+落盘）</button>',n+='<button class="gbfc-btn" id="gbSync2">手动同步快照到最新楼</button>',n+='<button class="gbfc-btn" id="gbWipe">重置本局存档（危险）</button>',n+="<h4>状态栏 / 开局面板 HTML 模板</h4>",n+=`<div class="gbfc-hint">构建产物 dist/状态栏面板.html、dist/开局界面.html 已内联引擎。请手动导入酒馆正则：<br>
      状态栏：查找 <code>${sn(jc)}</code> → 替换为「状态栏面板.html」全文<br>
      开局面板：查找 <code>${sn(Wc)}</code> → 替换为「开局界面.html」全文<br>
      这两处正则需在酒馆「正则」页手动创建（本扩展不再自动注入）。</div>`;let r=Jr();r&&(n+=`<div class="gbfc-log">${sn([...r.log,...r.error?["【错误】"+r.error]:[]].join(`
`))}</div>`)}t.innerHTML=n,qc(t)}function qc(t){t.querySelectorAll("input[data-sw]").forEach(r=>{r.addEventListener("change",()=>{let s=K();s.开关[r.dataset.sw]=r.checked,Et(s)})}),t.querySelectorAll("input[data-freq]").forEach(r=>{r.addEventListener("change",()=>{let s=K(),o=r.dataset.freq;s.频率[o]=Math.max(1,Math.round(+r.value||1)),Et(s)})});let e=(r,s)=>t.querySelector(r)?.addEventListener("click",s);e("#gbInjectOpening",()=>void Zr()),e("#gbInjectOpening2",()=>void Zr()),e("#gbSync",()=>void Ot()),e("#gbSync2",()=>void Ot()),e("#gbGotoPrompts",()=>Je("gradband-prompts")),e("#gbGotoData",()=>Je("gradband-data"));let n=async()=>{let r=await zr();zn(t)};e("#gbManualTurn",()=>void n()),e("#gbManualTurn2",()=>void n()),e("#gbWipe",async()=>{confirm("确定重置本局存档？（聊天变量中的渐变带数据将删除）")&&(await Y(r=>(delete r[Ne],r),{type:"chat"}),zn(t))})}var Qc=["数据AI","法术AI"],Bc={数据AI:"{{状态}} {{场景}} {{正文}}",法术AI:"{{描述}} {{参数}} {{亲和}} {{场景}}"};function ja(t){t.innerHTML=`<div style="padding:16px">
    <div class="of-h1">渐变带 · 提示词</div>
    <div class="of-hint" style="margin-bottom:12px">数据 / 法术 两套提示词各自独立编辑。每套里：<b>ON/OFF</b> 控制这段发不发，↑↓ 调顺序，可删可加、可恢复默认。</div>
    <div id="gbfc-pg-groups"></div>
  </div>`;let e=t.querySelector("#gbfc-pg-groups");Qc.forEach(n=>Vc(e,n))}function Vc(t,e){let r=K().提示词[e].map(l=>({...l})),s=document.createElement("div");s.className="of-card",s.innerHTML=`
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
      <div class="of-h2" style="margin:0">${e} 提示词</div>
      <span class="of-hint" style="font-size:11px">占位符：<code>${Bc[e]}</code></span>
    </div>
    <div class="gbfc-pg-segs" style="margin-top:8px"></div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="of-btn of-btn-ghost of-btn-sm gbfc-pg-add">＋ 添加一段</button>
      <button class="of-btn of-btn-ghost of-btn-sm gbfc-pg-preset">恢复默认</button>
    </div>`,t.appendChild(s);let o=s.querySelector(".gbfc-pg-segs");function i(){o.innerHTML=r.map((l,u)=>`
      <div class="of-card" style="margin-bottom:8px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <select class="of-select" data-role="${u}" style="width:100px">
            <option value="system" ${l.role==="system"?"selected":""}>system</option>
            <option value="user" ${l.role==="user"?"selected":""}>user</option>
            <option value="assistant" ${l.role==="assistant"?"selected":""}>assistant</option>
          </select>
          <input class="of-input" data-note="${u}" value="${(l.note||"").replace(/"/g,"&quot;")}" placeholder="备注" style="flex:1">
          <button class="of-btn of-btn-ghost of-btn-sm" data-up="${u}" title="上移">↑</button>
          <button class="of-btn of-btn-ghost of-btn-sm" data-down="${u}" title="下移">↓</button>
          <button class="of-btn of-btn-sm ${l.enabled?"of-btn-ok":"of-btn-ghost"}" data-toggle="${u}">${l.enabled?"ON":"OFF"}</button>
          <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${u}" title="删除">删</button>
        </div>
        <textarea class="of-textarea" data-content="${u}" rows="3">${(l.content||"").replace(/</g,"&lt;")}</textarea>
      </div>
    `).join("")}i();function a(){let l=K();l.提示词[e]=r.map(u=>({...u})),Et(l),toastr?.success?.(`已保存 ${e} 提示词`)}o.addEventListener("click",l=>{let u=l.target,f=u.closest("[data-up]"),g=u.closest("[data-down]"),w=u.closest("[data-toggle]"),y=u.closest("[data-delseg]");if(f){let p=parseInt(f.getAttribute("data-up"),10);p>0&&([r[p-1],r[p]]=[r[p],r[p-1]],a(),i())}if(g){let p=parseInt(g.getAttribute("data-down"),10);p<r.length-1&&([r[p+1],r[p]]=[r[p],r[p+1]],a(),i())}if(w){let p=parseInt(w.getAttribute("data-toggle"),10);r[p].enabled=!r[p].enabled,a(),i()}if(y){let p=parseInt(y.getAttribute("data-delseg"),10);if(!confirm(`删除「${r[p]?.note||r[p]?.role||"这一段"}」？`))return;r.splice(p,1),a(),i()}}),o.addEventListener("change",l=>{let u=l.target,f=u.closest("[data-role]"),g=u.closest("[data-note]");f&&(r[parseInt(f.getAttribute("data-role"),10)].role=f.value,a()),g&&(r[parseInt(g.getAttribute("data-note"),10)].note=g.value,a())}),o.querySelectorAll("[data-content]").forEach(l=>{l.addEventListener("blur",()=>{let u=parseInt(l.getAttribute("data-content"),10);r[u].content=l.value,a()})}),s.querySelector(".gbfc-pg-add").addEventListener("click",()=>{r.push({role:"system",content:"（新分段，占位符见页首说明）",enabled:!0,note:"自定义"}),a(),i()}),s.querySelector(".gbfc-pg-preset").addEventListener("click",()=>{confirm(`恢复 ${e} 提示词为默认？当前自定义会丢失。`)&&(r.splice(0,r.length,...Nr()[e].map(l=>({...l}))),a(),i())})}function J(t){return String(t??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Wa(t){let e=Fe();t.innerHTML=`<div style="padding:16px">
    <div class="of-h1">渐变带 · 数据</div>
    <div class="of-hint" style="margin-bottom:12px">六表运行时状态（由自由回路引擎维护，存聊天变量 <code>${J(Ne)}</code>）。本页只读概览；要改数据请到「渐变带·自由回路」管理窗口。</div>
    ${e?Jc(e):'<div class="of-card of-muted">未开局：先注入开局面板完成角色创建，或到管理窗口手动建档。</div>'}
  </div>`}function Jc(t){let e=t.主角,n="";n+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">主角</div>
    <div class="of-hint">剧情时间：${J(e.剧情时间?.label??"-")}　能量 ${Math.round(e.能量kJ.当前)}/${e.能量kJ.上限} kJ　精神 ${Math.round(e.精神点.当前)}/${e.精神点.上限}　爆发线 ${e.爆发线kW} kW　持续线 ${e.持续线kW} kW　身体 ${J(e.身体状态)}　战斗中 ${e.战斗中?"是":"否"}</div>
  </div>`,n+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">补给物品（${t.补给物品.length}）</div>
    ${t.补给物品.length===0?'<div class="of-muted">（无）</div>':`<table class="of-table"><thead><tr><th>名称</th><th>数量</th><th>纯度/规格</th><th>效果</th></tr></thead><tbody>${t.补给物品.map(a=>`<tr><td>${J(a.名称)}</td><td>${J(a.数量)}</td><td>${J([a.纯度!=null?a.纯度+"%":"",a.克数!=null?a.克数+"g":"",a.容量ml!=null?a.容量ml+"ml":""].filter(Boolean).join(" · ")||"—")}</td><td>${J(a.效果?JSON.stringify(a.效果):"—")}</td></tr>`).join("")}</tbody></table>`}
  </div>`;let r=t.回路库.filter(a=>a.type==="fixed"),s=t.回路库.filter(a=>a.type==="free");n+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">回路库（固定 ${r.length} / 自由 ${s.length}）</div>
    ${t.回路库.length===0?'<div class="of-muted">（无）</div>':`<table class="of-table"><thead><tr><th>名称</th><th>类型</th><th>族·分支</th><th>效果</th><th>过载率</th><th>过载风险</th><th>状态</th><th>参数</th></tr></thead><tbody>${t.回路库.map(a=>`<tr><td>${J(a.名称)}</td><td>${J(a.type)}</td><td>${J(a.族)}·${J(a.分支)}</td><td>${J(a.基线账单?.一句话效果??"")}</td><td>${J(a.过载率!=null?a.过载率+"%":"-")}</td><td>${J(a.过载风险!=null?a.过载风险+"%":"-")}</td><td>${J(a.审核状态??"-")}</td><td>${J(JSON.stringify(a.参数明细??a.参数向量??{}))}</td></tr>`).join("")}</tbody></table>`}
  </div>`;let o=t.槽位?.固定槽??[],i=t.槽位?.自由槽??[];return n+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">槽位</div>
    <div class="of-hint">固定：${o.length?o.map((a,l)=>`${l+1}.${J(a??"空")}`).join("　"):"（空）"}</div>
    <div class="of-hint">自由：${i.length?i.map((a,l)=>`${l+1}.${J(a??"空")}`).join("　"):"（空）"}</div>
  </div>`,n+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">待扣单（${t.待扣单.length}）</div>
    ${t.待扣单.length===0?'<div class="of-muted">（无）</div>':`<table class="of-table"><thead><tr><th>引用</th><th>名称</th><th>计费kJ</th><th>精神</th><th>风险</th></tr></thead><tbody>${t.待扣单.map(a=>`<tr><td>${J(a.ref)}</td><td>${J(a.名称)}</td><td>${J(a.bill)}</td><td>${J(a.mind)}</td><td>${J(a.risk)}</td></tr>`).join("")}</tbody></table>`}
  </div>`,n+=`<div class="of-card">
    <div class="of-h2" style="font-size:13px">场景</div>
    <div class="of-hint">${J(JSON.stringify(t.场景??{}))}</div>
  </div>`,n}function qa(t){let e=Cr();Dt(e),t.innerHTML=`
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
  `;let n=t.querySelector("#of-chat-list"),r=t.querySelector("#of-chat-input"),s=t.querySelector("#of-chat-send"),o=t.querySelector("#of-chat-stop");function i(y){bt.isGenerating=y,s.disabled=y,o.style.display=y?"":"none"}function a(){let y=bt.messages;if(y.length===0){n.innerHTML='<div style="text-align:center;color:#6c7086;margin-top:32px;font-size:13px">（还没有引导对话。发一句话开始，或回「开局」页选其他开局方式。）</div>';return}n.innerHTML=y.map(p=>{let v=(p.message||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),b=p.is_user,k=b?"of-msg-user":"of-msg-ai",W=b?"玩家":"引导 AI",Q=b?`<button class="of-btn of-btn-ghost of-btn-sm" data-del="${p.message_id}">删</button>`:`<button class="of-btn of-btn-ghost of-btn-sm" data-reroll="${p.message_id}" ${bt.isGenerating?"disabled":""}>重新生成</button> <button class="of-btn of-btn-ghost of-btn-sm" data-del="${p.message_id}">删</button>`;return`<div class="of-msg ${k}"><div class="of-msg-head"><span class="of-msg-name">${W} · #${p.message_id}</span><span class="of-msg-actions">${Q}</span></div><div style="font-family:ui-monospace,monospace">${v}</div></div>`}).join(""),n.scrollTop=n.scrollHeight}a();let l=null;function u(){l?.remove(),l=null}let f=e.onStreamUpdate?.(y=>{l||(l=document.createElement("div"),l.className="of-msg of-msg-ai of-streaming",l.innerHTML='<div class="of-msg-head"><span class="of-msg-name">引导 AI · 生成中…</span></div><div class="of-stream-text" style="font-family:ui-monospace,monospace;white-space:pre-wrap;word-break:break-word"></div>',n.appendChild(l));let p=l.querySelector(".of-stream-text");p.textContent=y||"…",n.scrollTop=n.scrollHeight});o.addEventListener("click",()=>{e.stop?.()||toastr?.warning?.("当前没有可停止的生成")}),t.querySelector("#of-chat-preset").addEventListener("click",async()=>{let y=Fn();if(!y?.opening?.trim()){toastr?.warning?.("还没有预设开场白：请先到「原预设开局」面板走一遍流程生成");return}if(confirm(`把「${y.character}」（${y.gender||"男"}）线的开场白写入第 0 楼？
（会覆盖第 0 楼现有内容，{{user}} 宏由酒馆自动替换）`))try{await Un(y.opening),toastr?.success?.("开场白已注入第 0 楼"),Re()}catch(p){toastr?.error?.("注入失败："+p.message)}}),n.addEventListener("click",async y=>{let p=y.target,v=p.closest("[data-reroll]"),b=p.closest("[data-del]");if(v){i(!0);try{await e.reroll(parseInt(v.getAttribute("data-reroll"),10))}finally{i(!1),u(),Dt(e),a()}}else if(b){let k=parseInt(b.getAttribute("data-del"),10);if(!confirm("删除这条消息？（只删引导会话里的，不影响酒馆楼层）"))return;await e.delete(k),Dt(e),a()}});async function g(){let y=r.value.trim();if(!(!y||bt.isGenerating)){r.value="",i(!0);try{await e.sendMessage(y)}finally{i(!1),u(),Dt(e),a()}}}s.addEventListener("click",()=>{g()}),r.addEventListener("keydown",y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),g())});let w=e.onMessagesChanged(()=>{Dt(e),a()});t._ofDispose=()=>{w(),f?.()}}function Gr(t){let e=V(),n=ke(e),r=n.length>0?`sheet_${n[0].uid}`:"";t.innerHTML='<div class="of-split"><div class="of-sidelist" id="of-tbl-list"></div><div style="flex:1;overflow:auto;padding:12px" id="of-tbl-edit"></div></div>';let s=t.querySelector("#of-tbl-list"),o=t.querySelector("#of-tbl-edit");function i(){if(n.length===0){s.innerHTML='<div style="padding:12px;color:#6c7086;font-size:12px">（无表。到"表结构/配置"页导入模板或新增表。）</div>';return}s.innerHTML=n.map(l=>`<button class="of-sidelist-btn${`sheet_${l.uid}`===r?" active":""}" data-key="sheet_${l.uid}">${l.name}</button>`).join("")}function a(){let l=e.sheets[r];if(!l){o.innerHTML='<p class="of-muted">选择左侧一张表查看 / 修改数据。</p>';return}let u=l.headers,f=l.rows,g=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px"><div class="of-h2" style="margin:0">${l.name}<span class="of-muted" style="font-size:12px;margin-left:8px">uid: ${l.uid} · ${f.length} 行</span></div><button class="of-btn of-btn-ghost of-btn-sm" id="of-tbl-refresh">刷新</button></div>`;l.purpose&&(g+=`<div class="of-hint" style="margin-bottom:10px">作用：${l.purpose}</div>`),g+='<div style="overflow-x:auto"><table class="of-table"><thead><tr><th style="width:40px">#</th>',u.forEach(p=>{g+=`<th>${p}</th>`}),g+='<th style="width:50px"></th></tr></thead><tbody>',f.forEach((p,v)=>{g+=`<tr><td style="color:#6c7086">${v+1}</td>`,p.forEach((b,k)=>{g+=`<td><input data-row="${v+1}" data-col="${k}" value="${(b??"").toString().replace(/"/g,"&quot;")}"></td>`}),g+=`<td style="text-align:center"><button class="of-btn of-btn-danger of-btn-sm" data-delrow="${v+1}">删</button></td></tr>`}),g+='<tr><td style="color:#6c7086">+</td>',u.forEach((p,v)=>{g+=`<td><input data-newcol="${v}" placeholder="${p}"></td>`}),g+='<td style="text-align:center"><button class="of-btn of-btn-ok of-btn-sm" id="of-tbl-addrow">加</button></td></tr>',g+="</tbody></table></div>",o.innerHTML=g,o.querySelectorAll("[data-row]").forEach(p=>{p.addEventListener("change",()=>{let v=parseInt(p.getAttribute("data-row"),10),b=parseInt(p.getAttribute("data-col"),10);Ys(r,{rowId:v,colIndex:b,value:p.value})})}),o.querySelectorAll("[data-delrow]").forEach(p=>{p.addEventListener("click",()=>{let v=parseInt(p.getAttribute("data-delrow"),10);confirm(`删除第 ${v} 行？`)&&(to(r,v),Z())})});let w=o.querySelector("#of-tbl-addrow");w&&w.addEventListener("click",()=>{let p=[];if(o.querySelectorAll("[data-newcol]").forEach(v=>{p.push(v.value)}),p.every(v=>!v)){toastr?.warning?.("行内容为空");return}eo(r,p.map(v=>v||null)),Z()});let y=o.querySelector("#of-tbl-refresh");y&&y.addEventListener("click",()=>Z())}s.addEventListener("click",l=>{let u=l.target.closest("[data-key]");u&&(r=u.getAttribute("data-key"),i(),a())}),i(),a()}function Kr(t){let e=V(),n=ke(e),r=n.length>0?`sheet_${n[0].uid}`:"",s="meta";t.innerHTML='<div class="of-split"><div class="of-sidelist" id="of-cfg-list"></div><div style="flex:1;overflow:auto;padding:12px" id="of-cfg-edit"></div></div>';let o=t.querySelector("#of-cfg-list"),i=t.querySelector("#of-cfg-edit");function a(){let f=n.map(g=>`<button class="of-sidelist-btn${`sheet_${g.uid}`===r?" active":""}" data-key="sheet_${g.uid}">${g.name}${g.updateConfig.group?`<span style="color:#6c7086">（${g.updateConfig.group}）</span>`:""}</button>`).join("");f+='<div style="border-top:1px solid #313244;margin-top:8px;padding-top:8px"><div class="of-sidelist-add" id="of-cfg-import">导入样例模板</div></div>',o.innerHTML=f}function l(){let f=e.sheets[r];if(!f){i.innerHTML='<p class="of-muted">选择左侧一张表，或导入样例模板。</p>';return}let g=["meta","source","config"].map(w=>`<button class="of-tab${s===w?" active":""}" data-tab="${w}">${w==="meta"?"元信息":w==="source"?"源数据":"填表参数"}</button>`).join("");i.innerHTML=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><div class="of-h2">${f.name}</div><div class="of-tabs">${g}</div><button class="of-btn of-btn-danger of-btn-sm" id="of-cfg-del" style="margin-left:auto">删除此表</button></div><div id="of-cfg-body"></div>`,u(f)}function u(f){let g=i.querySelector("#of-cfg-body");if(s==="meta")g.innerHTML=`<div style="max-width:520px">
        <label class="of-label">表名</label><input class="of-input" id="of-m-name" value="${f.name}">
        <div class="of-hint">显示在左侧列表和发给 AI 的表数据里，用中文。</div>
        <label class="of-label" style="margin-top:12px">作用（注释）</label><textarea class="of-textarea" id="of-m-purpose" rows="2">${f.purpose||""}</textarea>
        <div class="of-hint">这张表是干嘛的、什么时候需要——给自己和其它用户看的说明，不发给 AI。</div>
        <label class="of-label" style="margin-top:12px">列名（逗号分隔）</label><input class="of-input" id="of-m-headers" value="${f.headers.join(", ")}">
        <div class="of-hint">这张表有哪些列。改列数后已有行会自动对齐（多截少补空）。</div>
        <button class="of-btn" id="of-m-save" style="margin-top:12px">保存</button>
      </div>`,g.querySelector("#of-m-save").addEventListener("click",()=>{let w=g.querySelector("#of-m-name").value,y=g.querySelector("#of-m-headers").value.split(",").map(v=>v.trim()).filter(Boolean),p=g.querySelector("#of-m-purpose").value;no(r,{name:w,headers:y,purpose:p}),toastr?.success?.("已保存"),Z()});else if(s==="source"){let w=f.sourceData;g.innerHTML=`<div style="max-width:640px">
        <div class="of-hint" style="margin-bottom:8px">这一页全是写给填表 AI 看的说明书，每次填表都会随表数据一起发给它。</div>
        <label class="of-label">Note（列定义 + 维护规则）</label><textarea class="of-textarea" id="of-s-note" rows="5">${w.note||""}</textarea>
        <div class="of-hint">每列填什么、格式/取值范围是什么。写清楚 AI 才不会乱填。</div>
        <label class="of-label" style="margin-top:12px">Insert 触发（什么时候加一行）</label><textarea class="of-textarea" id="of-s-insert" rows="3">${w.insertRule||""}</textarea>
        <label class="of-label" style="margin-top:12px">Update 触发（什么时候改一行）</label><textarea class="of-textarea" id="of-s-update" rows="3">${w.updateRule||""}</textarea>
        <label class="of-label" style="margin-top:12px">Delete 触发（什么时候删一行）</label><textarea class="of-textarea" id="of-s-delete" rows="3">${w.deleteRule||""}</textarea>
        <div class="of-hint">不想让 AI 做某类操作就写「禁止。」</div>
        <button class="of-btn" id="of-s-save" style="margin-top:12px">保存</button>
      </div>`,g.querySelector("#of-s-save").addEventListener("click",()=>{ro(r,{note:g.querySelector("#of-s-note").value,insertRule:g.querySelector("#of-s-insert").value,updateRule:g.querySelector("#of-s-update").value,deleteRule:g.querySelector("#of-s-delete").value}),toastr?.success?.("已保存")})}else{let w=f.updateConfig,y=w.useGlobal!==!1,p=B().globalDefaults;g.innerHTML=`<div style="max-width:560px;font-size:13px">
        <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="of-c-enabled" ${w.enabled?"checked":""}> 参与自动填表</label>
        <div class="of-hint">关掉后这张表不参与自动填表（表格数据页仍可手动编辑）。</div>

        <label class="of-label" style="margin-top:14px">参数来源</label>
        <select class="of-select" id="of-c-src" style="max-width:280px">
          <option value="a" ${y?"selected":""}>a（跟随全局，推荐）</option>
          <option value="custom" ${y?"":"selected"}>自定义（单独调这张表）</option>
        </select>
        <div class="of-hint">a 档当前生效值：读取 <b>${p.contextRounds}</b> 轮 · 每 <b>${p.updateFrequency}</b> 条 AI 回复填一次 · 跳过 <b>${p.skipFloors}</b> 楼 · 只发最近 <b>${p.sendLatestRows}</b> 行 · 提取 <b>${p.extractTags||"无"}</b>（在「设置」页改全局默认）。</div>

        <label class="of-label" style="margin-top:14px">填表分组</label><input class="of-input" id="of-c-group" value="${(w.group||"").replace(/"/g,"&quot;")}" placeholder="留空 = 默认组">
        <div class="of-hint">组名相同的表会合并成<b>一次</b>请求，由同一个 AI 一起填；不同组名的表各自单独发一次请求。重要/复杂的表（如纪要表）单独起个组名，就能不和别的表混在一起。</div>

        <div id="of-c-customfields" style="display:${y?"none":""}">
          <label class="of-label" style="margin-top:14px">读取对话轮数</label><input class="of-input" type="number" id="of-c-rounds" value="${w.contextRounds}">
          <div class="of-hint">AI 填这张表时能往回看几轮对话。1 轮 = 你发一句 + AI 回一句。</div>

          <label class="of-label" style="margin-top:14px">填表频率（每 N 条 AI 回复填一次）</label><input class="of-input" type="number" id="of-c-freq" value="${w.updateFrequency}">
          <div class="of-hint">填 1 = 每条 AI 回复都填；填 2 = 隔一条填一次；填 999 = 基本不自动填。</div>

          <label class="of-label" style="margin-top:14px">跳过最近楼层</label><input class="of-input" type="number" id="of-c-skip" value="${w.skipFloors}">
          <div class="of-hint">最近 N 条消息不参与本次填表（比如刚生成还没读完）。</div>

          <label class="of-label" style="margin-top:14px">只发最近 N 行（-1 = 全部行）</label><input class="of-input" type="number" id="of-c-latest" value="${w.sendLatestRows}">
          <div class="of-hint">行数很多的表（如纪要表）可以只发最近 10 行，省 token。</div>

          <label class="of-label" style="margin-top:14px">自定义行渲染模板（高级，可留空）</label><textarea class="of-textarea" id="of-c-tpl" rows="2">${w.sendRowsTemplate||""}</textarea>
          <div class="of-hint">留空用默认格式（行号 + 逗号分隔）。可用变量：{{row_id}} {{cells}} {{col_0}} {{列名}}。</div>

          <label class="of-label" style="margin-top:14px">正文提取标签</label><textarea class="of-textarea" id="of-c-ex" rows="2">${w.extractTags||""}</textarea>
          <div class="of-hint">只把「开始|结束」之间的正文发给这张表，一对写一行。留空 = 全部正文。例：正文被 <code>&lt;content&gt;…&lt;/content&gt;</code> 包着，就填 <code>&lt;content&gt;|&lt;/content&gt;</code>（会自动取最后一对）。</div>

          <label class="of-label" style="margin-top:14px">正文排除标签</label><textarea class="of-textarea" id="of-c-exc" rows="2">${w.excludeTags||""}</textarea>
          <div class="of-hint">把「开始|结束」之间的内容从正文里删掉再发（如思考过程、OOC）。</div>
        </div>

        <button class="of-btn" id="of-c-save" style="margin-top:14px">保存</button>
      </div>`,g.querySelector("#of-c-save").addEventListener("click",()=>{let b=g.querySelector("#of-c-src").value,k={enabled:g.querySelector("#of-c-enabled").checked,group:g.querySelector("#of-c-group").value.trim()};b==="a"?yr(r,{...k,useGlobal:!0}):yr(r,{...k,useGlobal:!1,contextRounds:parseInt(g.querySelector("#of-c-rounds").value,10),updateFrequency:parseInt(g.querySelector("#of-c-freq").value,10),skipFloors:parseInt(g.querySelector("#of-c-skip").value,10),sendLatestRows:parseInt(g.querySelector("#of-c-latest").value,10),sendRowsTemplate:g.querySelector("#of-c-tpl").value,extractTags:g.querySelector("#of-c-ex").value,excludeTags:g.querySelector("#of-c-exc").value}),toastr?.success?.("已保存"),a()});let v=g.querySelector("#of-c-src");v.addEventListener("change",()=>{g.querySelector("#of-c-customfields").style.display=v.value==="a"?"none":""})}}o.addEventListener("click",f=>{let g=f.target.closest("[data-key]");if(g){r=g.getAttribute("data-key"),s="meta",a(),l();return}if(f.target.id==="of-cfg-import"){if(!confirm("导入样例模板会清空当前所有表数据，继续？"))return;Oe(JSON.parse(Nn)),Z(),toastr?.success?.("已导入样例模板")}}),i.addEventListener("click",f=>{let g=f.target.closest("[data-tab]");if(g){s=g.getAttribute("data-tab"),l();return}if(f.target.id==="of-cfg-del"){if(!confirm("删除整张表？数据一并清除。"))return;oo(r),Z()}}),a(),l()}function Yr(t){let e=fe(),n=e.promptTemplate.segments.map(a=>({...a})),r=e.promptTemplate.instructions;t.innerHTML=`<div style="padding:16px">
    <div style="display:flex;align-items:center;margin-bottom:12px"><div class="of-h2">提示词模板</div><button class="of-btn of-btn-ghost of-btn-sm" id="of-pt-reset" style="margin-left:auto">恢复默认</button></div>
    <div class="of-hint" style="margin-bottom:12px">每次填表发给 AI 的完整提示词，由下面这些「段」按顺序拼成。每段里的占位符会被替换成实际内容；<b>ON/OFF</b> 控制这段发不发，↑↓ 调整顺序，可以随意添加、删除段。</div>

    <div class="of-card" style="margin-bottom:12px">
      <div class="of-h2" style="font-size:13px">可用占位符</div>
      <table class="of-table"><tbody>
        ${Ms.map(a=>`<tr><td style="width:190px"><code style="color:#a6e3a1">${a.name}</code></td><td style="color:#cdd6f4">${a.desc}</td></tr>`).join("")}
      </tbody></table>
      <div class="of-hint" style="margin-top:6px">写错的占位符会原样保留在提示词里，方便发现拼写错误。</div>
    </div>

    <label class="of-label">填表指令 instructions（{{instructions}} 的内容）</label>
    <textarea class="of-textarea" id="of-pt-instr" rows="4">${r||""}</textarea>
    <div class="of-hint">AI 填表的行为准则：什么时候该加行/改行、数值范围等。会替换到带 {{instructions}} 占位符的段里。</div>

    <div id="of-pt-segs" style="margin-top:12px"></div>
    <div style="margin-top:8px"><button class="of-btn of-btn-ok of-btn-sm" id="of-pt-add">＋ 添加一段</button></div>
  </div>`;let s=t.querySelector("#of-pt-segs");function o(){s.innerHTML=n.map((a,l)=>`
      <div class="of-card">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <select class="of-select" data-role="${l}" style="width:100px" title="这段以什么身份发送">
            <option value="system" ${a.role==="system"?"selected":""}>system</option>
            <option value="user" ${a.role==="user"?"selected":""}>user</option>
            <option value="assistant" ${a.role==="assistant"?"selected":""}>assistant</option>
          </select>
          <input class="of-input" data-note="${l}" value="${(a.note||"").replace(/"/g,"&quot;")}" placeholder="备注（只给自己看）" style="flex:1">
          <button class="of-btn of-btn-ghost of-btn-sm" data-up="${l}" title="上移">↑</button>
          <button class="of-btn of-btn-ghost of-btn-sm" data-down="${l}" title="下移">↓</button>
          <button class="of-btn of-btn-sm ${a.enabled?"of-btn-ok":"of-btn-ghost"}" data-toggle="${l}" title="发送 / 不发送这段">${a.enabled?"ON":"OFF"}</button>
          <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${l}" title="删除这段">删</button>
        </div>
        <textarea class="of-textarea" data-content="${l}" rows="3" placeholder="这段的内容，可用上面列表里的占位符">${(a.content||"").replace(/</g,"&lt;")}</textarea>
      </div>
    `).join("")}o();function i(){r=t.querySelector("#of-pt-instr").value,io({segments:n.map(a=>({...a})),instructions:r}),toastr?.success?.("已保存")}s.addEventListener("click",a=>{let l=a.target,u=l.closest("[data-up]"),f=l.closest("[data-down]"),g=l.closest("[data-toggle]"),w=l.closest("[data-delseg]");if(u){let y=parseInt(u.getAttribute("data-up"),10);y>0&&([n[y-1],n[y]]=[n[y],n[y-1]],i(),o())}if(f){let y=parseInt(f.getAttribute("data-down"),10);y<n.length-1&&([n[y+1],n[y]]=[n[y],n[y+1]],i(),o())}if(g){let y=parseInt(g.getAttribute("data-toggle"),10);n[y].enabled=!n[y].enabled,i(),o()}if(w){let y=parseInt(w.getAttribute("data-delseg"),10),p=n[y]?.note||n[y]?.role||"这一段";if(!confirm(`删除「${p}」？`))return;n.splice(y,1),i(),o()}}),s.addEventListener("change",a=>{let l=a.target,u=l.closest("[data-role]"),f=l.closest("[data-note]");u&&(n[parseInt(u.getAttribute("data-role"),10)].role=u.value,i()),f&&(n[parseInt(f.getAttribute("data-note"),10)].note=f.value,i())}),s.querySelectorAll("[data-content]").forEach(a=>{a.addEventListener("blur",()=>{let l=parseInt(a.getAttribute("data-content"),10);n[l].content=a.value,i()})}),t.querySelector("#of-pt-instr").addEventListener("blur",i),t.querySelector("#of-pt-add").addEventListener("click",()=>{n.push({role:"system",content:"",enabled:!0,note:""}),i(),o(),s.lastElementChild?.scrollIntoView({behavior:"smooth",block:"center"})}),t.querySelector("#of-pt-reset").addEventListener("click",()=>{if(!confirm("恢复默认提示词模板？当前自定义（含添加/删除的段）将丢失。"))return;lo(),toastr?.info?.("已恢复默认");let a=fe();n.splice(0,n.length,...a.promptTemplate.segments.map(l=>({...l}))),r=a.promptTemplate.instructions,t.querySelector("#of-pt-instr").value=r,o()})}function es(t){let e=B(),n=e.dialogueApi,r=e.globalDefaults;t.innerHTML=`<div style="padding:16px;max-width:680px">
    <div class="of-h2" style="color:#89b4fa">界面</div>
    <label style="display:flex;align-items:center;gap:8px;margin-top:8px">
      <input type="checkbox" id="of-u-toggle"> 显示悬浮按钮（🎬，可拖拽移动）
    </label>
    <div class="of-hint">关掉后仍可用 /opening 命令或在酒馆扩展设置里恢复。</div>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">引导对话 API（开局引导的 AI）</div>
    <div class="of-hint">「AI 对话」页里陪你做开局引导的 AI，和填表 API 相互独立。默认直接用酒馆当前连接的 API；想用别的模型就切「自定义」。</div>
    <select class="of-select" id="of-d-mode" style="margin-top:8px;max-width:280px">
      <option value="tavern" ${n.mode==="tavern"?"selected":""}>跟随酒馆当前 API</option>
      <option value="custom" ${n.mode==="custom"?"selected":""}>自定义 API（独立配置）</option>
    </select>
    <div id="of-d-custom" style="display:${n.mode==="custom"?"":"none"};margin-top:8px">
      <label class="of-label">代理预设（优先用）</label><input class="of-input" id="of-d-proxy" value="${n.proxyPreset||""}" placeholder="酒馆「代理」功能里保存的预设名">
      <label class="of-label" style="margin-top:12px">API URL（不用代理时直连地址）</label><input class="of-input" id="of-d-url" value="${n.apiUrl||""}" placeholder="如 https://api.deepseek.com/v1">
      <label class="of-label" style="margin-top:12px">API Key</label><input class="of-input" type="password" id="of-d-key" value="${n.apiKey||""}">
      <label class="of-label" style="margin-top:12px">模型</label><input class="of-input" id="of-d-model" value="${n.model||""}" placeholder="引导对话用的模型名">
      <div class="of-grid3" style="margin-top:12px">
        <div>
          <label class="of-label">温度</label><input class="of-input" type="number" step="0.1" id="of-d-temp" value="${n.temperature}">
          <div class="of-hint">引导对话建议 0.7～1，太低说话发死（默认 0.8）</div>
        </div>
        <div>
          <label class="of-label">最大回复长度</label><input class="of-input" type="number" id="of-d-max" value="${n.maxTokens}">
          <div class="of-hint">引导回复可能较长，建议 2048 以上（默认 5000）</div>
        </div>
        <div>
          <label class="of-label">接口类型</label><input class="of-input" id="of-d-src" value="${n.source||""}" placeholder="保持 openai">
        </div>
      </div>
    </div>
    <button class="of-btn" id="of-d-save" style="margin-top:12px">保存对话 API</button>
    <div class="of-hint">保存后立即生效（已有引导对话历史不受影响）。</div>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">全局默认</div>
    <div class="of-hint">单张表没有单独设置时，用这里的值兜底（单表在「表结构/配置」页设置）。</div>
    <div class="of-grid2" style="margin-top:8px">
      <div>
        <label class="of-label">读取对话轮数</label><input class="of-input" type="number" id="of-g-rounds" value="${r.contextRounds}">
        <div class="of-hint">AI 填表时能看到几轮对话。1 轮 = 你发一句 + AI 回一句</div>
      </div>
      <div>
        <label class="of-label">填表频率</label><input class="of-input" type="number" id="of-g-freq" value="${r.updateFrequency}">
        <div class="of-hint">每累计 N 条 AI 回复填一次表。填 2 = 隔一条填一次</div>
      </div>
      <div>
        <label class="of-label">跳过最近楼层</label><input class="of-input" type="number" id="of-g-skip" value="${r.skipFloors}">
        <div class="of-hint">最近 N 条消息不参与本次填表（刚生成还没读完时用）</div>
      </div>
      <div>
        <label class="of-label">只发最近 N 行</label><input class="of-input" type="number" id="of-g-latest" value="${r.sendLatestRows}">
        <div class="of-hint">a 档表格的行数上限，-1 = 全部行</div>
      </div>
    </div>
    <label class="of-label" style="margin-top:12px">正文提取标签（全局默认）</label><textarea class="of-textarea" id="of-g-ex" rows="2">${r.extractTags||""}</textarea>
    <div class="of-hint">只把「开始|结束」之间的正文发给 AI，一对写一行。留空 = 不过滤，全部正文都发。例：输出被 <code>&lt;content&gt;…&lt;/content&gt;</code> 包着，就填 <code>&lt;content&gt;|&lt;/content&gt;</code>。</div>
    <label class="of-label" style="margin-top:12px">正文排除标签（全局默认）</label><textarea class="of-textarea" id="of-g-exc" rows="2">${r.excludeTags||""}</textarea>
    <div class="of-hint">把「开始|结束」之间的内容从正文里删掉再发（如思考过程、代码块）。</div>
    <button class="of-btn" id="of-g-save" style="margin-top:12px">保存</button>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">调度</div>
    <label style="display:flex;align-items:center;gap:8px;margin-top:8px"><input type="checkbox" id="of-s-auto" ${e.autoFillEnabled?"checked":""}> 启用标准表格（自动填表）</label>
    <div class="of-hint">默认开启。关掉后标准数据表格不再自动填表（可手动填）；仅影响开局框架标准表，与「渐变带的数据AI/法术AI」无关。</div>
    <label class="of-label" style="margin-top:12px">失败重试次数</label><input class="of-input" type="number" id="of-s-retry" value="${e.maxRetries}" style="width:120px">
    <div class="of-hint">某次请求失败时静默重试几次，填 0 = 不重试。</div>
  </div>`;let s=t.querySelector("#of-u-toggle");s.checked=e.floatingToggleEnabled,s.addEventListener("change",()=>{js(s.checked),toastr?.info?.(s.checked?"已显示悬浮按钮":"已隐藏悬浮按钮（可在酒馆扩展设置里恢复）")});let o=t.querySelector("#of-d-mode");o.addEventListener("change",()=>{t.querySelector("#of-d-custom").style.display=o.value==="custom"?"":"none"}),t.querySelector("#of-d-save").addEventListener("click",()=>{let u=o.value==="custom"?"custom":"tavern";u==="custom"?vr({mode:u,proxyPreset:t.querySelector("#of-d-proxy").value,apiUrl:t.querySelector("#of-d-url").value,apiKey:t.querySelector("#of-d-key").value,model:t.querySelector("#of-d-model").value,temperature:parseFloat(t.querySelector("#of-d-temp").value)||.8,maxTokens:parseInt(t.querySelector("#of-d-max").value,10)||5e3,source:t.querySelector("#of-d-src").value||"openai"}):vr({mode:u}),vt(),toastr?.success?.(u==="custom"?"已保存引导对话 API（自定义）":"引导对话已切换为跟随酒馆当前 API")}),t.querySelector("#of-g-save").addEventListener("click",()=>{gt({globalDefaults:{...r,contextRounds:parseInt(t.querySelector("#of-g-rounds").value,10)||3,updateFrequency:parseInt(t.querySelector("#of-g-freq").value,10)||3,skipFloors:parseInt(t.querySelector("#of-g-skip").value,10)||0,sendLatestRows:(()=>{let u=parseInt(t.querySelector("#of-g-latest").value,10);return isNaN(u)?-1:u})(),extractTags:t.querySelector("#of-g-ex").value,excludeTags:t.querySelector("#of-g-exc").value}}),toastr?.success?.("已保存全局默认")});let i=t.querySelector("#of-s-auto"),a=t.querySelector("#of-s-retry"),l=()=>{q("autoFillEnabled",i.checked),q("maxRetries",parseInt(a.value,10)||0),i.checked?An():Mn(),toastr?.success?.("已保存（自动填表"+(i.checked?"已开启":"已关闭")+"）")};i.addEventListener("change",l),a.addEventListener("change",l)}function Xn(t){return String(t??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ts(t){let n=B().fillApi,r=K(),s=(a,l,u,f)=>`
    <div class="of-h2" style="color:#89b4fa;margin-top:20px">${a}<span class="of-muted" style="font-size:12px;font-weight:400">（渐变带）</span></div>
    <div class="of-hint">${f}</div>
    <select class="of-select" id="${u}-mode" style="margin-top:8px;max-width:280px">
      <option value="tavern" ${l.mode==="tavern"?"selected":""}>跟随酒馆当前 API</option>
      <option value="custom" ${l.mode!=="tavern"?"selected":""}>自定义 API（独立配置）</option>
    </select>
    <div id="${u}-custom" style="display:${l.mode!=="tavern"?"":"none"};margin-top:8px">
      <label class="of-label">代理预设（优先用）</label><input class="of-input" id="${u}-proxy" value="${Xn(l.proxy_preset||"")}" placeholder="酒馆「代理」功能里保存的预设名">
      <div class="of-hint">填了它，下面的 URL / Key 都不用再填。</div>
      <label class="of-label" style="margin-top:12px">API URL（不用代理时直连地址）</label><input class="of-input" id="${u}-url" value="${Xn(l.apiurl||"")}" placeholder="如 https://api.deepseek.com/v1">
      <label class="of-label" style="margin-top:12px">API Key</label><input class="of-input" type="password" id="${u}-key" value="${Xn(l.key||"")}">
      <label class="of-label" style="margin-top:12px">模型</label><input class="of-input" id="${u}-model" value="${Xn(l.model||"")}" placeholder="模型名">
      <div class="of-grid3" style="margin-top:12px">
        <div>
          <label class="of-label">温度</label><input class="of-input" type="number" step="0.1" id="${u}-temp" value="${l.temperature??.8}">
          <div class="of-hint">0～1，默认 0.8；只输出 JSON，不需要太发散</div>
        </div>
        <div>
          <label class="of-label">最大回复长度</label><input class="of-input" type="number" id="${u}-max" value="${l.max_tokens??5e3}">
          <div class="of-hint">AI 单次回复的上限，默认 5000</div>
        </div>
      </div>
    </div>
    <button class="of-btn" id="${u}-save" style="margin-top:12px">保存</button>`;t.innerHTML=`<div style="padding:16px;max-width:680px">
    <div class="of-h2" style="color:#89b4fa">API 设置</div>
    <div class="of-hint">三个后台 AI 集中在这页配置。每个都可以「跟随酒馆当前 API」（什么都不配），也可以「自定义」单独配一个；保存后立即生效。</div>

    <div class="of-h2" style="color:#89b4fa;margin-top:20px">填表 API<span class="of-muted" style="font-size:12px;font-weight:400">（开局框架·标准表格）</span></div>
    <div class="of-hint">标准表格自动填表用的 AI（如陆安追踪表）。可以「跟随酒馆当前 API」什么都不配，也可以「自定义」单独配一个（推荐：不占用正文模型，选便宜快速的即可）。</div>
    <select class="of-select" id="of-a-mode" style="margin-top:8px;max-width:280px">
      <option value="custom" ${n.mode==="custom"?"selected":""}>自定义 API（独立配置）</option>
      <option value="tavern" ${n.mode==="tavern"?"selected":""}>跟随酒馆当前 API</option>
    </select>
    <label style="display:flex;align-items:center;gap:8px;margin-top:10px"><input type="checkbox" id="of-a-stream" ${n.stream!==!1?"checked":""}> 填表请求使用流式传输</label>
    <div class="of-hint">走反代建议开：非流式请求更容易被反代识别。开启不影响填表结果——解析仍用完整返回；填表的流式内容不会显示在对话页。</div>
    <div id="of-a-custom" style="display:${n.mode==="tavern"?"none":""};margin-top:8px">
      <label class="of-label">代理预设（优先用）</label><input class="of-input" id="of-a-proxy" value="${n.proxyPreset||""}" placeholder="酒馆「代理」功能里保存的预设名">
      <div class="of-hint">酒馆顶栏插头图标里配好的代理预设名。填了它，下面的 URL / Key 都不用再填。</div>
      <label class="of-label" style="margin-top:12px">API URL（不用代理时直连地址）</label><input class="of-input" id="of-a-url" value="${n.apiUrl||""}" placeholder="如 https://api.deepseek.com/v1">
      <div class="of-hint">OpenAI 兼容格式 的接口地址，仅当上面代理预设留空时生效。</div>
      <label class="of-label" style="margin-top:12px">API Key</label><input class="of-input" type="password" id="of-a-key" value="${n.apiKey||""}" placeholder="对应接口的密钥">
      <label class="of-label" style="margin-top:12px">模型</label><input class="of-input" id="of-a-model" value="${n.model||""}" placeholder="如 deepseek-chat、gpt-4o-mini">
      <div class="of-hint">专门负责填表的模型。选便宜快速的即可。</div>
      <div class="of-grid3" style="margin-top:12px">
        <div>
          <label class="of-label">温度</label><input class="of-input" type="number" step="0.1" id="of-a-temp" value="${n.temperature}">
          <div class="of-hint">0～1，越高越发散，默认 0.8</div>
        </div>
        <div>
          <label class="of-label">最大回复长度</label><input class="of-input" type="number" id="of-a-max" value="${n.maxTokens}">
          <div class="of-hint">AI 单次填表回复的上限，默认 5000</div>
        </div>
        <div>
          <label class="of-label">接口类型</label><input class="of-input" id="of-a-src" value="${n.source||""}" placeholder="保持 openai">
          <div class="of-hint">OpenAI 兼容接口就保持默认，不用改</div>
        </div>
      </div>
    </div>
    <button class="of-btn" id="of-a-save" style="margin-top:12px">保存</button>
    <div class="of-hint">切到「跟随酒馆」时已填的自定义配置会保留，切回来还在。</div>

    ${s("数据AI",r.api.数据AI,"of-api-data","渐变带回合管线里，把最新正文翻译成「状态变更包」再交给脚本结算的 AI。")}
    ${s("法术AI",r.api.法术AI,"of-api-spell","审核玩家自创/剧情获得的新回路物理可行性、并替剧情回路填参数的 AI（送审）。")}
  </div>`;let o=t.querySelector("#of-a-mode");o.addEventListener("change",()=>{t.querySelector("#of-a-custom").style.display=o.value==="custom"?"":"none"}),t.querySelector("#of-a-save").addEventListener("click",()=>{let a=o.value==="tavern"?"tavern":"custom",l=t.querySelector("#of-a-stream").checked;a==="custom"?gt({fillApi:{...n,mode:a,stream:l,proxyPreset:t.querySelector("#of-a-proxy").value,apiUrl:t.querySelector("#of-a-url").value,apiKey:t.querySelector("#of-a-key").value,model:t.querySelector("#of-a-model").value,temperature:parseFloat(t.querySelector("#of-a-temp").value)||.8,maxTokens:parseInt(t.querySelector("#of-a-max").value,10)||5e3,source:t.querySelector("#of-a-src").value||"openai"}}):gt({fillApi:{...n,mode:a,stream:l}}),toastr?.success?.(a==="tavern"?"填表已切换为跟随酒馆当前 API":"已保存填表 API 配置（自定义）")});let i=(a,l)=>{let u=t.querySelector(`#${l}-mode`);u.addEventListener("change",()=>{t.querySelector(`#${l}-custom`).style.display=u.value==="custom"?"":"none"}),t.querySelector(`#${l}-save`).addEventListener("click",()=>{let f=u.value==="custom"?"custom":"tavern",g=K();f==="custom"?g.api[a]={...g.api[a],mode:f,proxy_preset:t.querySelector(`#${l}-proxy`).value,apiurl:t.querySelector(`#${l}-url`).value,key:t.querySelector(`#${l}-key`).value,model:t.querySelector(`#${l}-model`).value,temperature:parseFloat(t.querySelector(`#${l}-temp`).value)||.8,max_tokens:parseInt(t.querySelector(`#${l}-max`).value,10)||5e3}:g.api[a]={...g.api[a],mode:f},Et(g),toastr?.success?.(f==="custom"?`已保存${a} API（自定义）`:`${a}已切换为跟随酒馆当前 API`)})};i("数据AI","of-api-data"),i("法术AI","of-api-spell")}function ns(t){let e=B(),n=ye();t.innerHTML=`<div style="padding:16px;max-width:680px">
    <div style="display:flex;align-items:center;margin-bottom:4px">
      <div class="of-h1" style="margin:0">工具</div>
      <span class="of-badge of-badge-idle" style="margin-left:10px">开局框架 v${Gt}</span>
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
      <div class="of-hint" style="margin-top:4px">最新楼当前是：${n<0?"（还没有消息）":`第 ${n} 楼`}。手动改过表格数据后，点一下手动同步即可刷新楼层变量。</div>
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
        <span>楼 到 第</span><input class="of-input" type="number" id="of-tool-clear-to" value="${Math.max(0,n)}" style="width:90px">
        <span>楼</span>
        <button class="of-btn of-btn-danger" id="of-tool-clear">清除</button>
      </div>
      <div class="of-hint" id="of-tool-clear-state" style="margin-top:6px"></div>
    </div>
  </div>`;let r=t.querySelector("#of-tool-fill"),s=t.querySelector("#of-tool-fill-state");r.addEventListener("click",async()=>{if(To()){toastr?.warning?.("正在填表中，请稍候");return}r.disabled=!0,s.textContent="填表中…";try{await _r({reason:"manual"})}finally{r.disabled=!1,s.textContent=""}});let o=t.querySelector("#of-tool-autosync");o.checked=e.autoSyncEnabled,o.addEventListener("change",()=>{xo(o.checked),toastr?.success?.(o.checked?"已开启自动同步":"已关闭自动同步")});let i=t.querySelector("#of-tool-sync"),a=t.querySelector("#of-tool-sync-state");i.addEventListener("click",async()=>{i.disabled=!0,a.textContent="同步中…";let g=await Re();i.disabled=!1,g.ok?(a.textContent=`已写入第 ${g.floor} 楼（${g.tables} 张表）`,toastr?.success?.(`已同步 ${g.tables} 张表到第 ${g.floor} 楼变量`)):(a.textContent="",toastr?.error?.("同步失败："+(g.error||"未知错误")))});let l=t.querySelector("#of-tool-marker");l.checked=e.statusPlaceholderEnabled,l.addEventListener("change",()=>{Ao(l.checked),toastr?.success?.(l.checked?"已开启状态栏标记":"已关闭状态栏标记")});let u=t.querySelector("#of-tool-clear"),f=t.querySelector("#of-tool-clear-state");u.addEventListener("click",async()=>{let g=parseInt(t.querySelector("#of-tool-clear-from").value,10),w=parseInt(t.querySelector("#of-tool-clear-to").value,10);if(isNaN(g)||isNaN(w)){toastr?.warning?.("请填写楼层范围");return}if(!confirm(`清除第 ${Math.min(g,w)}～${Math.max(g,w)} 楼的同步数据？（只删 stat_data.开局框架，不动消息内容）`))return;u.disabled=!0,f.textContent="清除中…";let y=await vo(g,w);u.disabled=!1,f.textContent=`已扫描 ${y.scanned} 楼，清除 ${y.cleared} 楼的同步数据`,toastr?.success?.(`已清除 ${y.cleared} 楼的同步数据`)})}var Qa=[{name:"preset",label:"剑与汽水角色卡专用",order:3,render:la,modes:["presets"]},{name:"start",label:"开局",order:5,render:Go,modes:["presets"]},{name:"chat",label:"AI 对话",order:10,render:qa,modes:["presets"]},{name:"tables",label:"表格数据",order:20,render:Gr,modes:["presets"]},{name:"sheetconf",label:"表结构/配置",order:30,render:Kr,modes:["presets"]},{name:"api",label:"API",order:35,render:ts,modes:["presets"]},{name:"settings",label:"设置",order:40,render:es,modes:["presets"]},{name:"prompt",label:"提示词模板",order:50,render:Yr,modes:["presets"]},{name:"tools",label:"工具",order:90,render:ns,modes:["presets"]},{name:"gradband",label:"渐变带·自由回路",order:6,render:Ua,modes:["gradband"]},{name:"gradband-prompts",label:"渐变带·提示词",order:7,render:ja,modes:["gradband"]},{name:"gradband-data",label:"渐变带·数据",order:8,render:Wa,modes:["gradband"]},{name:"tables",label:"表格数据",order:20,render:Gr,modes:["gradband"]},{name:"sheetconf",label:"表结构/配置",order:30,render:Kr,modes:["gradband"]},{name:"gradband-prompt",label:"提示词模板",order:50,render:Yr,modes:["gradband"]},{name:"api",label:"API",order:35,render:ts,modes:["gradband"]},{name:"settings",label:"设置",order:40,render:es,modes:["gradband"]},{name:"tools",label:"工具",order:90,render:ns,modes:["gradband"]}],Xe="start",Ue=null,Kn=null,Zn=null,Gn=!1;function rs(){return B().appMode??"presets"}function on(){let t=rs();return Qa.filter(e=>!e.modes||e.modes.includes(t))}function Ba(){let t=Ue?._ofDispose;if(typeof t=="function")try{t()}catch(e){console.warn("[开局框架面板] 页面清理失败",e)}}function Va(t){t.className="of-panel",t.innerHTML=`
    <div class="of-modepicker" id="of-modepicker">
      <button class="of-modebtn" data-mode="presets">剑与汽水</button>
      <button class="of-modebtn" data-mode="gradband">渐变带</button>
    </div>
    <nav class="of-nav" id="of-nav"></nav>
    <button class="of-collapse" id="of-collapse">◀</button>
    <div class="of-content" id="of-page"></div>
  `;let e=t.querySelector("#of-nav");Ue=t.querySelector("#of-page"),Kn=e,Zn=t.querySelector("#of-modepicker");let n=t.querySelector("#of-collapse");function r(){if(!Zn)return;let o=rs();Zn.querySelectorAll(".of-modebtn").forEach(i=>{i.classList.toggle("on",i.getAttribute("data-mode")===o)})}Zn.addEventListener("click",o=>{let i=o.target.closest("[data-mode]");if(!i)return;let a=i.getAttribute("data-mode");if(a===rs())return;q("appMode",a),r(),s();let l=on();l.some(u=>u.name===Xe)?Z():(Xe=l[0]?.name??"start",Je(Xe))});function s(){Kn&&(Kn.innerHTML=on().map(o=>`<button class="of-nav-btn${o.name===Xe?" active":""}" data-page="${o.name}">${o.label}</button>`).join(""))}e.addEventListener("click",o=>{let i=o.target.closest("[data-page]");i&&Je(i.getAttribute("data-page"))}),n.addEventListener("click",()=>{Gn=!Gn,e.style.display=Gn?"none":"",n.textContent=Gn?"▶":"◀"}),r(),s(),Je(Xe)}function Je(t){let n=on().find(r=>r.name===t)??on()[0]??Qa[0];if(!(!n||!Ue)){Xe=n.name,Kn?.querySelectorAll(".of-nav-btn").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-page")===Xe)}),Ba(),Ue.innerHTML="";try{n.render(Ue)}catch(r){Ue.innerHTML=`<div style="padding:16px;color:#f38ba8">页面渲染失败: ${r.message}</div>`,console.error(`[开局框架面板] 页面 ${n.name} 渲染失败`,r)}}}function Z(){if(!Ue)return;Ba(),Ue.innerHTML="";let t=on().find(e=>e.name===Xe);if(t)try{t.render(Ue)}catch(e){console.error(e)}}var er="__OPENING_FRAMEWORK_INSTANCE__",za="of-toggle",Yn=!1,an=!1,Ja=!1,Xa=new En;function ss(){Xt()&&Z()}async function zc(){vn({onToggle:ss}),Vs()||(console.error("[开局框架] TavernHelper API 不可用（需先安装并启用酒馆助手/TavernHelper），变量与生成功能将不可用"),toastr?.error?.("开局框架：TavernHelper 不可用，请确认已启用酒馆助手插件"));let e=Hs().querySelector("#of-content");Va(e),Qs(),Xa.addDisposer(we(Tn.CHAT_CHANGED,()=>{_o()}).stop),fe().autoFillEnabled&&An(),So(),Mo(),Na();let r=window[er];r&&(r.status="ready"),setTimeout(()=>{an||document.getElementById(za)||(console.warn("[开局框架] 未检测到悬浮球，已补挂"),vn({onToggle:ss}))},3e3),console.info(`[开局框架] v${Gt} 初始化完成（悬浮球 / /opening 打开窗口）`)}function Za(){Yn||an||(Yn=!0,zc().catch(t=>{console.error("[开局框架] 初始化失败：",t),Yn=!1;try{document.getElementById(za)||vn({onToggle:ss})}catch{}Ja||(Ja=!0,setTimeout(()=>Za(),2e3)),toastr?.error?.("开局框架初始化失败："+t.message)}))}function Xc(){an||(an=!0,Bs(),Mn(),Fa(),Xa.dispose(),Ns(),Ws(),delete window[er],an=!1,Yn=!1)}(function(){let e=window;if(e[er]){console.warn("[开局框架] 已存在活跃实例，跳过重复初始化");return}e[er]={version:Gt,source:"extension",status:"initializing",destroy:Xc};let n=()=>{try{Za()}catch(r){console.error("[开局框架] 启动异常：",r)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n,{once:!0}):setTimeout(n,100)})();
