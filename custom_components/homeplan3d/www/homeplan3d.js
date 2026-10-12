var ac="170",Ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,Vc=1,Cd=2;var iu=1,Pd=2,On=3,si=0,He=1,de=2,ni=0,as=1,pn=2,Gc=3,Wc=4,Id=5,xi=100,Ld=101,Dd=102,Ud=103,Nd=104,Od=200,Fd=201,kd=202,Bd=203,Na=204,Oa=205,zd=206,Hd=207,Vd=208,Gd=209,Wd=210,Xd=211,$d=212,qd=213,Yd=214,Fa=0,ka=1,Ba=2,ds=3,za=4,Ha=5,Va=6,Ga=7,su=0,Zd=1,Kd=2,ii=0,Jd=1,jd=2,Qd=3,tf=4,ef=5,nf=6,sf=7;var ru=300,fs=301,ps=302,Wa=303,Xa=304,Co=306,qs=1e3,vi=1001,$a=1002,fn=1003,rf=1004;var dr=1005;var Sn=1006,ta=1007;var bi=1008;var Hn=1009,ou=1010,au=1011,Ys=1012,lc=1013,Mi=1014,kn=1015,sr=1016,cc=1017,hc=1018,ms=1020,lu=35902,cu=1021,hu=1022,dn=1023,uu=1024,du=1025,ls=1026,gs=1027,fu=1028,uc=1029,pu=1030,dc=1031;var fc=1033,qr=33776,Yr=33777,Zr=33778,Kr=33779,qa=35840,Ya=35841,Za=35842,Ka=35843,Ja=36196,ja=37492,Qa=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,Jr=36492,pl=36494,ml=36495,mu=36283,gl=36284,_l=36285,xl=36286;var jr=2300,yl=2301,ea=2302,Xc=2400,$c=2401,qc=2402;var of=3200,af=3201;var gu=0,lf=1,ei="",ze="srgb",bs="srgb-linear",Po="linear",ie="srgb";var Hi=7680;var Yc=519,cf=512,hf=513,uf=514,_u=515,df=516,ff=517,pf=518,mf=519,vl=35044,pc=35048;var Zc="300 es",Bn=2e3,Qr=2001,Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=1234567,cs=Math.PI/180,Zs=180/Math.PI;function wn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function mc(i,t){return(i%t+t)%t}function gf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _f(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function xf(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function yf(i,t=1){return t-Math.abs(mc(i,t*2)-t)}function vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sf(i,t){return i+Math.random()*(t-i)}function wf(i){return i*(.5-Math.random())}function Ef(i){i!==void 0&&(Kc=i);let t=Kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tf(i){return i*cs}function Af(i){return i*Zs}function Rf(i){return(i&i-1)===0&&i!==0}function Cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function If(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xu={DEG2RAD:cs,RAD2DEG:Zs,generateUUID:wn,clamp:Ee,euclideanModulo:mc,mapLinear:gf,inverseLerp:_f,lerp:Vs,damp:xf,pingpong:yf,smoothstep:vf,smootherstep:bf,randInt:Mf,randFloat:Sf,randFloatSpread:wf,seededRandom:Ef,degToRad:Tf,radToDeg:Af,isPowerOfTwo:Rf,ceilPowerOfTwo:Cf,floorPowerOfTwo:Pf,setQuaternionFromProperEuler:If,normalize:ne,denormalize:un},K=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],b=s[1],y=s[4],x=s[7],C=s[2],A=s[5],R=s[8];return r[0]=o*_+a*b+l*C,r[3]=o*g+a*y+l*A,r[6]=o*m+a*x+l*R,r[1]=c*_+h*b+u*C,r[4]=c*g+h*y+u*A,r[7]=c*m+h*x+u*R,r[2]=d*_+f*b+p*C,r[5]=d*g+f*y+p*A,r[8]=d*m+f*x+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},na=new Bt;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){let i=to("canvas");return i.style.display="block",i}var Jc={};function zs(i){i in Jc||(Jc[i]=!0,console.warn(i))}function Df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Uf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Po:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],th=[.3127,.329],eh=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[bs]:{primaries:jc,whitePoint:th,transfer:Po,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:jc,whitePoint:th,transfer:ie,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var Vi,bl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=to("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=to("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Of=0,eo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ff=0,qe=class i extends Vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=Sn,o=bi,a=dn,l=Hn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=wn(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=ru;qe.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,C=(m+1)/2,A=(h+d)/4,R=(u+_)/4,P=(p+g)/4;return y>x&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=R/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ml=class extends Vn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends Ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},no=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*_,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let C=Math.sqrt(y),A=Math.atan2(C,m*b);g=Math.sin(g*A)/C,a=Math.sin(a*A)/C}let x=a*b;if(l=l*g+d*x,c=c*g+f*x,h=h*g+p*x,u=u*g+_*x,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sa=new L,ih=new mn,Si=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),pr.subVectors(this.max,Ls),Gi.subVectors(t.a,Ls),Wi.subVectors(t.b,Ls),Xi.subVectors(t.c,Ls),Zn.subVectors(Wi,Gi),Kn.subVectors(Xi,Wi),ui.subVectors(Gi,Xi);let e=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-ui.y,ui.x,0];return!ra(e,Gi,Wi,Xi,pr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Gi,Wi,Xi,pr))?!1:(mr.crossVectors(Zn,Kn),e=[mr.x,mr.y,mr.z],ra(e,Gi,Wi,Xi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},In=[new L,new L,new L,new L,new L,new L,new L,new L],an=new L,fr=new Si,Gi=new L,Wi=new L,Xi=new L,Zn=new L,Kn=new L,ui=new L,Ls=new L,pr=new L,mr=new L,di=new L;function ra(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){di.fromArray(i,r);let a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var kf=new Si,Ds=new L,oa=new L,wi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(oa)),this.expandByPoint(Ds.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new L,aa=new L,gr=new L,Jn=new L,la=new L,_r=new L,ca=new L,ri=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){aa.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(aa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=Jn.dot(this.direction),l=-Jn.dot(gr),c=Jn.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(gr,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){la.subVectors(e,t),_r.subVectors(n,t),ca.crossVectors(la,_r);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);let l=a*this.direction.dot(_r.crossVectors(Jn,_r));if(l<0)return null;let c=a*this.direction.dot(la.cross(Jn));if(c<0||l+c>o)return null;let h=-a*Jn.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bf,t,zf)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),jn.crossVectors(n,Xe),jn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),jn.crossVectors(n,Xe)),jn.normalize(),xr.crossVectors(Xe,jn),s[0]=jn.x,s[4]=xr.x,s[8]=Xe.x,s[1]=jn.y,s[5]=xr.y,s[9]=Xe.y,s[2]=jn.z,s[6]=xr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],b=n[3],y=n[7],x=n[11],C=n[15],A=s[0],R=s[4],P=s[8],S=s[12],v=s[1],T=s[5],F=s[9],O=s[13],B=s[2],X=s[6],k=s[10],Z=s[14],G=s[3],nt=s[7],ot=s[11],pt=s[15];return r[0]=o*A+a*v+l*B+c*G,r[4]=o*R+a*T+l*X+c*nt,r[8]=o*P+a*F+l*k+c*ot,r[12]=o*S+a*O+l*Z+c*pt,r[1]=h*A+u*v+d*B+f*G,r[5]=h*R+u*T+d*X+f*nt,r[9]=h*P+u*F+d*k+f*ot,r[13]=h*S+u*O+d*Z+f*pt,r[2]=p*A+_*v+g*B+m*G,r[6]=p*R+_*T+g*X+m*nt,r[10]=p*P+_*F+g*k+m*ot,r[14]=p*S+_*O+g*Z+m*pt,r[3]=b*A+y*v+x*B+C*G,r[7]=b*R+y*T+x*X+C*nt,r[11]=b*P+y*F+x*k+C*ot,r[15]=b*S+y*O+x*Z+C*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],b=u*g*c-_*d*c+_*l*f-a*g*f-u*l*m+a*d*m,y=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,x=h*_*c-p*u*c+p*a*f-o*_*f-h*a*m+o*u*m,C=p*u*l-h*_*l-p*a*d+o*_*d+h*a*g-o*u*g,A=e*b+n*y+s*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=b*R,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*m-n*d*m)*R,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*m+n*l*m)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,t[4]=y*R,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*R,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=x*R,t[9]=(p*u*r-h*_*r-p*n*f+e*_*f+h*n*m-e*u*m)*R,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*R,t[12]=C*R,t[13]=(h*_*s-p*u*s+p*n*d-e*_*d-h*n*g+e*u*g)*R,t[14]=(p*a*s-o*_*s-p*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,b=l*c,y=l*h,x=l*u,C=n.x,A=n.y,R=n.z;return s[0]=(1-(_+m))*C,s[1]=(f+x)*C,s[2]=(p-y)*C,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+m))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(p+y)*R,s[9]=(g-b)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);let c=1/r,h=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Bn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,p;if(a===Bn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Qr)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,p,_;if(a===Bn)p=(o+r)*u,_=-2*u;else if(a===Qr)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new L,ln=new Kt,Bf=new L(0,0,0),zf=new L(1,1,1),jn=new L,xr=new L,Xe=new L,sh=new Kt,rh=new mn,En=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hf=0,oh=new L,qi=new mn,Dn=new Kt,yr=new L,Us=new L,Vf=new L,Gf=new mn,ah=new L(1,0,0),lh=new L(0,1,0),ch=new L(0,0,1),hh={type:"added"},Wf={type:"removed"},Yi={type:"childadded",child:null},ha={type:"childremoved",child:null},ve=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new En,n=new mn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Bt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Us,yr,this.up):Dn.lookAt(yr,Us,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Dn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ve.DEFAULT_UP=new L(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new L,Un=new L,ua=new L,Nn=new L,Zi=new L,Ki=new L,uh=new L,da=new L,fa=new L,pa=new L,ma=new ge,ga=new ge,_a=new ge,Fn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Un.subVectors(n,e),ua.subVectors(t,e);let o=cn.dot(cn),a=cn.dot(Un),l=cn.dot(ua),c=Un.dot(Un),h=Un.dot(ua),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Un.subVectors(t,e),cn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),cn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),Ki.subVectors(r,n),da.subVectors(t,n);let l=Zi.dot(da),c=Ki.dot(da);if(l<=0&&c<=0)return e.copy(n);fa.subVectors(t,s);let h=Zi.dot(fa),u=Ki.dot(fa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zi,o);pa.subVectors(t,r);let f=Zi.dot(pa),p=Ki.dot(pa);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ki,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return uh.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(uh,a);let m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Zi,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=mc(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xa(o,r,t+1/3),this.g=xa(o,r,t),this.b=xa(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Zt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ee(Le.r*255,0,255))*65536+Math.round(Ee(Le.g*255,0,255))*256+Math.round(Ee(Le.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ze){Zt.fromWorkingColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(vr);let n=Vs(Qn.h,vr.h,e),s=Vs(Qn.s,vr.s,e),r=Vs(Qn.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Rt;Rt.NAMES=vu;var Xf=0,Tn=class extends Vn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=wn(),this.name="",this.blending=as,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Oe=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new L,br=new K,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}};var io=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var so=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=0,Je=new Kt,ya=new ve,Ji=new L,$e=new Si,Ns=new Si,we=new L,Xt=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?so:io)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors($e.min,Ns.min),$e.expandByPoint(we),we.addVectors($e.max,Ns.max),$e.expandByPoint(we)):($e.expandByPoint(Ns.min),$e.expandByPoint(Ns.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),we.add(Ji)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;let c=new L,h=new L,u=new L,d=new K,f=new K,p=new K,_=new L,g=new L;function m(P,S,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let T=1/(f.x*p.y-p.x*f.y);isFinite(T)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(T),a[P].add(_),a[S].add(_),a[v].add(_),l[P].add(g),l[S].add(g),l[v].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,S=b.length;P<S;++P){let v=b[P],T=v.start,F=v.count;for(let O=T,B=T+F;O<B;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new L,x=new L,C=new L,A=new L;function R(P){C.fromBufferAttribute(s,P),A.copy(C);let S=a[P];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(A,S);let T=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,T)}for(let P=0,S=b.length;P<S;++P){let v=b[P],T=v.start,F=v.count;for(let O=T,B=T+F;O<B;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dh=new Kt,fi=new ri,Mr=new wi,fh=new L,Sr=new L,wr=new L,Er=new L,va=new L,Tr=new L,ph=new L,Ar=new L,Vt=class extends ve{constructor(t=new Xt,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(va.fromBufferAttribute(u,t),o?Tr.addScaledVector(va,h):Tr.addScaledVector(va.sub(e),h))}e.add(Tr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(Mr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Mr,fh)===null||fi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(dh.copy(r).invert(),fi.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,C=y;x<C;x+=3){let A=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);s=Rr(this,m,t,n,c,h,u,A,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let b=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Rr(this,o,t,n,c,h,u,b,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,C=y;x<C;x+=3){let A=x,R=x+1,P=x+2;s=Rr(this,m,t,n,c,h,u,A,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let b=g,y=g+1,x=g+2;s=Rr(this,o,t,n,c,h,u,b,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function qf(i,t,e,n,s,r,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===si,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function Rr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Sr),i.getVertexPosition(l,wr),i.getVertexPosition(c,Er);let h=qf(i,t,e,n,Sr,wr,Er,ph);if(h){let u=new L;Fn.getBarycoord(ph,Sr,wr,Er,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,l,c,u,new K)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,l,c,u,new K)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Fn.getNormal(Sr,wr,Er,d.normal),h.face=d,h.barycoord=u}return h}var Ae=class i extends Xt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function p(_,g,m,b,y,x,C,A,R,P,S){let v=x/R,T=C/P,F=x/2,O=C/2,B=A/2,X=R+1,k=P+1,Z=0,G=0,nt=new L;for(let ot=0;ot<k;ot++){let pt=ot*T-O;for(let Pt=0;Pt<X;Pt++){let $t=Pt*v-F;nt[_]=$t*b,nt[g]=pt*y,nt[m]=B,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[g]=0,nt[m]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Pt/R),u.push(1-ot/P),Z+=1}}for(let ot=0;ot<P;ot++)for(let pt=0;pt<R;pt++){let Pt=d+pt+X*ot,$t=d+pt+X*(ot+1),$=d+(pt+1)+X*(ot+1),it=d+(pt+1)+X*ot;l.push(Pt,$t,it),l.push($t,$,it),G+=6}a.addGroup(f,G,S),f+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function Yf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Zf={clone:_s,merge:Ue},Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Tn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ro=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new L,mh=new K,gh=new K,Ne=class extends ro{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,mh,gh),e.subVectors(gh,mh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,Qi=1,wl=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new Ne(ji,Qi,t,e);r.layers=this.layers,this.add(r);let o=new Ne(ji,Qi,t,e);o.layers=this.layers,this.add(o);let a=new Ne(ji,Qi,t,e);a.layers=this.layers,this.add(a);let l=new Ne(ji,Qi,t,e);l.layers=this.layers,this.add(l);let c=new Ne(ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oo=class extends qe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},El=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new oo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ae(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ni});r.uniforms.tEquirect.value=e;let o=new Vt(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Sn),new wl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ba=new L,jf=new L,Qf=new Bt,hn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ba.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new wi,Cr=new L,Js=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,o=new hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],b=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,g-f,x-m).normalize(),n[1].setComponents(l+r,d+c,g+f,x+m).normalize(),n[2].setComponents(l+o,d+h,g+p,x+b).normalize(),n[3].setComponents(l-o,d-h,g-p,x-b).normalize(),n[4].setComponents(l-a,d-u,g-_,x-y).normalize(),e===Bn)n[5].setComponents(l+a,d+u,g+_,x+y).normalize();else if(e===Qr)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wn=class i extends Xt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let b=m*d-o;for(let y=0;y<c;y++){let x=y*u-r;p.push(x,-b,0),_.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let y=b+c*m,x=b+c*(m+1),C=b+1+c*(m+1),A=b+1+c*m;f.push(y,x,A),f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:vp,color_pars_fragment:bp,color_pars_vertex:Mp,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Ip,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Op,envmap_physical_pars_fragment:qp,envmap_vertex:Fp,fog_vertex:kp,fog_pars_vertex:Bp,fog_fragment:zp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:$p,lights_toon_fragment:Yp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Jp,lights_physical_fragment:jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:_m,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:vm,normal_pars_vertex:bm,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Im,dithering_fragment:Lm,dithering_pars_fragment:Dm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Fm,shadowmap_vertex:km,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Gm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:$m,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:Zm,uv_pars_fragment:Km,uv_pars_vertex:Jm,uv_vertex:jm,worldpos_vertex:Qm,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:dg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:_g,meshmatcap_vert:xg,meshmatcap_frag:yg,meshnormal_vert:vg,meshnormal_frag:bg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:Eg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Pg,shadow_frag:Ig,sprite_vert:Lg,sprite_frag:Dg},ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ue([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ue([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ue([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ue([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ue([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ue([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ue([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ue([ct.lights,ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Mn.physical={uniforms:Ue([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Pr={r:0,b:0,g:0},mi=new En,Ug=new Kt;function Ng(i,t,e,n,s,r,o){let a=new Rt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function _(b){let y=!1,x=p(b);x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){let x=p(y);x&&(x.isCubeTexture||x.mapping===Co)?(h===void 0&&(h=new Vt(new Ae(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:_s(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(mi)),h.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ie,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Vt(new Wn(2,2),new An({name:"BackgroundMaterial",uniforms:_s(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(Pr,bu(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:_,addToRenderList:g}}function Og(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,T,F,O,B){let X=!1,k=u(O,F,T);r!==k&&(r=k,c(r.object)),X=f(v,O,F,B),X&&p(v,O,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(v,T,F,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,T,F){let O=F.wireframe===!0,B=n[v.id];B===void 0&&(B={},n[v.id]=B);let X=B[T.id];X===void 0&&(X={},B[T.id]=X);let k=X[O];return k===void 0&&(k=d(l()),X[O]=k),k}function d(v){let T=[],F=[],O=[];for(let B=0;B<e;B++)T[B]=0,F[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,T,F,O){let B=r.attributes,X=T.attributes,k=0,Z=F.getAttributes();for(let G in Z)if(Z[G].location>=0){let ot=B[G],pt=X[G];if(pt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),ot===void 0||ot.attribute!==pt||pt&&ot.data!==pt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function p(v,T,F,O){let B={},X=T.attributes,k=0,Z=F.getAttributes();for(let G in Z)if(Z[G].location>=0){let ot=X[G];ot===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor));let pt={};pt.attribute=ot,ot&&ot.data&&(pt.data=ot.data),B[G]=pt,k++}r.attributes=B,r.attributesNum=k,r.index=O}function _(){let v=r.newAttributes;for(let T=0,F=v.length;T<F;T++)v[T]=0}function g(v){m(v,0)}function m(v,T){let F=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;F[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),B[v]!==T&&(i.vertexAttribDivisor(v,T),B[v]=T)}function b(){let v=r.newAttributes,T=r.enabledAttributes;for(let F=0,O=T.length;F<O;F++)T[F]!==v[F]&&(i.disableVertexAttribArray(F),T[F]=0)}function y(v,T,F,O,B,X,k){k===!0?i.vertexAttribIPointer(v,T,F,B,X):i.vertexAttribPointer(v,T,F,O,B,X)}function x(v,T,F,O){_();let B=O.attributes,X=F.getAttributes(),k=T.defaultAttributeValues;for(let Z in X){let G=X[Z];if(G.location>=0){let nt=B[Z];if(nt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){let ot=nt.normalized,pt=nt.itemSize,Pt=t.get(nt);if(Pt===void 0)continue;let $t=Pt.buffer,$=Pt.type,it=Pt.bytesPerElement,yt=$===i.INT||$===i.UNSIGNED_INT||nt.gpuType===lc;if(nt.isInterleavedBufferAttribute){let st=nt.data,Ct=st.stride,Nt=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Dt=0;Dt<G.locationSize;Dt++)m(G.location+Dt,st.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<G.locationSize;Dt++)g(G.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Dt=0;Dt<G.locationSize;Dt++)y(G.location+Dt,pt/G.locationSize,$,ot,Ct*it,(Nt+pt/G.locationSize*Dt)*it,yt)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)m(G.location+st,nt.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<G.locationSize;st++)g(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let st=0;st<G.locationSize;st++)y(G.location+st,pt/G.locationSize,$,ot,pt*it,pt/G.locationSize*st*it,yt)}}else if(k!==void 0){let ot=k[Z];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(G.location,ot);break;case 3:i.vertexAttrib3fv(G.location,ot);break;case 4:i.vertexAttrib4fv(G.location,ot);break;default:i.vertexAttrib1fv(G.location,ot)}}}}b()}function C(){P();for(let v in n){let T=n[v];for(let F in T){let O=T[F];for(let B in O)h(O[B].object),delete O[B];delete T[F]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let T=n[v.id];for(let F in T){let O=T[F];for(let B in O)h(O[B].object),delete O[B];delete T[F]}delete n[v.id]}function R(v){for(let T in n){let F=n[T];if(F[v.id]===void 0)continue;let O=F[v.id];for(let B in O)h(O[B].object),delete O[B];delete F[v.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Fg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Bg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new hn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,y=b*4,x=m.clippingState||null;l.value=x,x=h(p,d,y,f);for(let C=0;C!==y;++C)x[C]=e[C];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function zg(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=fs:a===Xa&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new El(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ao=class extends ro{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,_h=[.125,.215,.35,.446,.526,.582],yi=20,Ma=new ao,xh=new Rt,Sa=null,wa=0,Ea=0,Ta=!1,_i=(1+Math.sqrt(5))/2,ts=1/_i,yh=[new L(-_i,ts,0),new L(_i,ts,0),new L(-ts,0,_i),new L(ts,0,_i),new L(0,_i,-ts),new L(0,_i,ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,wa,Ea),this._renderer.xr.enabled=Ta,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:sr,format:dn,colorSpace:bs,depthBuffer:!1},s=vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Vg(r,t,e)}return s}_compileMaterial(t){let e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,n,s){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xh),h.toneMapping=ii,h.autoClear=!1;let f=new Oe({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),p=new Vt(new Ae,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(xh),_=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Ir(s,b*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fs||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ma)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yh[(s-r-1)%yh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Vt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):yi;g>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);let m=[],b=0;for(let R=0;R<yi;++R){let P=R/_,S=Math.exp(-P*P/2);m.push(S),R===0?b+=S:R<g&&(b+=2*S)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;let x=this._sizeLods[s],C=3*x*(s>y-rs?s-y+rs:0),A=4*(this._cubeSize-x);Ir(e,C,A,3*x,2*x),l.setRenderTarget(e),l.render(u,Ma)}};function Hg(i){let t=[],e=[],n=[],s=i,r=i-rs+1+_h.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-rs?l=_h[o-i+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,b=new Float32Array(_*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,P=A>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];b.set(S,_*p*A),y.set(d,g*p*A);let v=[A,A,A,A,A,A];x.set(v,m*p*A)}let C=new Xt;C.setAttribute("position",new Te(b,_)),C.setAttribute("uv",new Te(y,g)),C.setAttribute("faceIndex",new Te(x,m)),t.push(C),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vh(i,t,e){let n=new Gn(i,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vg(i,t,e){let n=new Float32Array(yi),s=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Mh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wa||l===Xa,h=l===fs||l===ps;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new lo(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new lo(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let y=0,x=b.length;y<x;y+=3){let C=b[y+0],A=b[y+1],R=b[y+2];d.push(C,A,A,R,R,C)}}else if(p!==void 0){let b=p.array;_=p.version;for(let y=0,x=b.length/3-1;y<x;y+=3){let C=y+0,A=y+1,R=y+2;d.push(C,A,A,R,R,C)}}else return;let g=new(yu(d)?so:io)(d,1);g.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $g(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,_){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*_[b];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yg(i,t,e){let n=new WeakMap,s=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*C*4*u),R=new no(A,x,C,u);R.type=kn,R.needsUpdate=!0;let P=y*4;for(let v=0;v<u;v++){let T=g[v],F=m[v],O=b[v],B=x*C*4*v;for(let X=0;X<T.count;X++){let k=X*P;f===!0&&(s.fromBufferAttribute(T,X),A[B+k+0]=s.x,A[B+k+1]=s.y,A[B+k+2]=s.z,A[B+k+3]=0),p===!0&&(s.fromBufferAttribute(F,X),A[B+k+4]=s.x,A[B+k+5]=s.y,A[B+k+6]=s.z,A[B+k+7]=0),_===!0&&(s.fromBufferAttribute(O,X),A[B+k+8]=s.x,A[B+k+9]=s.y,A[B+k+10]=s.z,A[B+k+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new K(x,C)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Zg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var co=class extends qe{constructor(t,e,n,s,r,o,a,l,c,h=ls){if(h!==ls&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Mi),n===void 0&&h===gs&&(n=ms),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Su=new qe,Sh=new co(1,1),wu=new no,Eu=new Sl,Tu=new oo,wh=[],Eh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function t0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),Me(e,n)}}function e0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),Me(e,n)}}function n0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),Me(e,n)}}function i0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function a0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=_u,r=Sh):r=Su,e.setTexture2D(t||r,s)}function d0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eu,s)}function f0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tu,s)}function p0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wu,s)}function m0(i){switch(i){case 5126:return Kg;case 35664:return Jg;case 35665:return jg;case 35666:return Qg;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,t){i.uniform1fv(this.addr,t)}function _0(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function x0(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function y0(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function v0(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b0(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function M0(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function S0(i,t){i.uniform1iv(this.addr,t)}function w0(i,t){i.uniform2iv(this.addr,t)}function E0(i,t){i.uniform3iv(this.addr,t)}function T0(i,t){i.uniform4iv(this.addr,t)}function A0(i,t){i.uniform1uiv(this.addr,t)}function R0(i,t){i.uniform2uiv(this.addr,t)}function C0(i,t){i.uniform3uiv(this.addr,t)}function P0(i,t){i.uniform4uiv(this.addr,t)}function I0(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Su,r[o])}function L0(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Eu,r[o])}function D0(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tu,r[o])}function U0(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wu,r[o])}function N0(i){switch(i){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return y0;case 35674:return v0;case 35675:return b0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return w0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return U0}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}},Rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function Ch(i,t){i.seq.push(t),i.map[t.id]=t}function O0(i,t,e){let n=i.name,s=n.length;for(Aa.lastIndex=0;;){let r=Aa.exec(n),o=Aa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ch(e,c===void 0?new Tl(a,i,t):new Al(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Rl(a),Ch(e,u)),e=u}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);O0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var F0=37297,k0=0;function B0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ih=new Bt;function z0(i){Zt._getMatrix(Ih,Zt.workingColorSpace,i);let t=`mat3( ${Ih.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Po:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+B0(i.getShaderSource(t),o)}else return s}function H0(i,t){let e=z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,t){let e;switch(t){case Jd:e="Linear";break;case jd:e="Reinhard";break;case Qd:e="Cineon";break;case tf:e="ACESFilmic";break;case nf:e="AgX";break;case sf:e="Neutral";break;case ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lr=new L;function G0(){Zt.getLuminanceCoefficients(Lr);let i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function X0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function Dh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(q0,Z0)}var Y0=new Map;function Z0(i,t){let e=Ht[t];if(e===void 0){let n=Y0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}var K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(i){return i.replace(K0,J0)}function J0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function e_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case su:t="ENVMAP_BLENDING_MULTIPLY";break;case Zd:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function n_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function i_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=j0(e),c=Q0(e),h=t_(e),u=e_(e),d=n_(e),f=W0(e),p=X0(r),_=s.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(g=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ii?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Cl(o),o=Dh(o,e),o=Uh(o,e),a=Cl(a),a=Dh(a,e),a=Uh(a,e),o=Nh(o),a=Nh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=b+g+o,x=b+m+a,C=Ph(s,s.VERTEX_SHADER,y),A=Ph(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(T){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(A).trim(),X=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,A);else{let Z=Lh(s,C,"vertex"),G=Lh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+Z+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||B==="")&&(k=!1);k&&(T.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(C),s.deleteShader(A),P=new us(s,_),S=$0(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,F0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}var s_=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Il(t),e.set(t,n)),n}},Il=class{constructor(t){this.id=s_++,this.code=t,this.usedTimes=0}};function r_(i,t,e,n,s,r,o){let a=new Ks,l=new Pl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,v,T,F,O){let B=F.fog,X=O.geometry,k=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),G=Z&&Z.mapping===Co?Z.image.height:null,nt=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=ot!==void 0?ot.length:0,Pt=0;X.morphAttributes.position!==void 0&&(Pt=1),X.morphAttributes.normal!==void 0&&(Pt=2),X.morphAttributes.color!==void 0&&(Pt=3);let $t,$,it,yt;if(nt){let ee=Mn[nt];$t=ee.vertexShader,$=ee.fragmentShader}else $t=S.vertexShader,$=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),yt=l.getFragmentShaderID(S);let st=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,Yt=!!S.map,j=!!S.matcap,rt=!!Z,I=!!S.aoMap,Tt=!!S.lightMap,tt=!!S.bumpMap,xt=!!S.normalMap,lt=!!S.displacementMap,It=!!S.emissiveMap,gt=!!S.metalnessMap,E=!!S.roughnessMap,M=S.anisotropy>0,z=S.clearcoat>0,q=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,Mt=S.transmission>0,ht=M&&!!S.anisotropyMap,_t=z&&!!S.clearcoatMap,Wt=z&&!!S.clearcoatNormalMap,et=z&&!!S.clearcoatRoughnessMap,vt=Q&&!!S.iridescenceMap,Lt=Q&&!!S.iridescenceThicknessMap,Ut=Y&&!!S.sheenColorMap,bt=Y&&!!S.sheenRoughnessMap,qt=!!S.specularMap,zt=!!S.specularColorMap,oe=!!S.specularIntensityMap,D=Mt&&!!S.transmissionMap,ut=Mt&&!!S.thicknessMap,W=!!S.gradientMap,J=!!S.alphaMap,mt=S.alphaTest>0,dt=!!S.alphaHash,Ft=!!S.extensions,me=ii;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(me=i.toneMapping);let Pe={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:$,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:bs,alphaToCoverage:!!S.alphaToCoverage,map:Yt,matcap:j,envMap:rt,envMapMode:rt&&Z.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Tt,bumpMap:tt,normalMap:xt,displacementMap:d&&lt,emissiveMap:It,normalMapObjectSpace:xt&&S.normalMapType===lf,normalMapTangentSpace:xt&&S.normalMapType===gu,metalnessMap:gt,roughnessMap:E,anisotropy:M,anisotropyMap:ht,clearcoat:z,clearcoatMap:_t,clearcoatNormalMap:Wt,clearcoatRoughnessMap:et,dispersion:q,iridescence:Q,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:qt,specularColorMap:zt,specularIntensityMap:oe,transmission:Mt,transmissionMap:D,thicknessMap:ut,gradientMap:W,opaque:S.transparent===!1&&S.blending===as&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:mt,alphaHash:dt,combine:S.combine,mapUv:Yt&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:Tt&&_(S.lightMap.channel),bumpMapUv:tt&&_(S.bumpMap.channel),normalMapUv:xt&&_(S.normalMap.channel),displacementMapUv:lt&&_(S.displacementMap.channel),emissiveMapUv:It&&_(S.emissiveMap.channel),metalnessMapUv:gt&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(S.sheenRoughnessMap.channel),specularMapUv:qt&&_(S.specularMap.channel),specularColorMapUv:zt&&_(S.specularColorMap.channel),specularIntensityMapUv:oe&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ut&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Yt||J),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Pt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Yt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ie,decodeVideoTextureEmissive:It&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===de,flipSided:S.side===He,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)v.push(T),v.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(b(v,S),y(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=p[S.type],T;if(v){let F=Mn[v];T=Zf.clone(F.uniforms)}else T=S.uniforms;return T}function C(S,v){let T;for(let F=0,O=h.length;F<O;F++){let B=h[F];if(B.cacheKey===v){T=B,++T.usedTimes;break}}return T===void 0&&(T=new i_(i,v,S,r),h.push(T)),T}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function o_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,_,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,d,f,p,_,g){let m=o(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,_,g){let m=o(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||a_),n.length>1&&n.sort(d||Fh),s.length>1&&s.sort(d||Fh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function l_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new kh,i.set(n,[o])):s>=r.length?(o=new kh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Rt};break;case"SpotLight":e={position:new L,direction:new L,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function h_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var u_=0;function d_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f_(i){let t=new c_,e=h_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Kt,o=new Kt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,b=0,y=0,x=0,C=0,A=0,R=0;c.sort(d_);for(let S=0,v=c.length;S<v;S++){let T=c[S],F=T.color,O=T.intensity,B=T.distance,X=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(T.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(T.sh.coefficients[k],O);R++}else if(T.isDirectionalLight){let k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z=T.shadow,G=e.get(T);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=T.shadow.matrix,b++}n.directional[f]=k,f++}else if(T.isSpotLight){let k=t.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(F).multiplyScalar(O),k.distance=B,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,n.spot[_]=k;let Z=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,Z.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,T.castShadow){let G=e.get(T);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,x++}_++}else if(T.isRectAreaLight){let k=t.get(T);k.color.copy(F).multiplyScalar(O),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=k,g++}else if(T.isPointLight){let k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){let Z=T.shadow,G=e.get(T);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=T.shadow.matrix,y++}n.point[p]=k,p++}else if(T.isHemisphereLight){let k=t.get(T);k.skyColor.copy(T.color).multiplyScalar(O),k.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==b||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=b,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=R,n.version=u_++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let y=c[m];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Bh(i){let t=new f_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function p_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Bh(i),t.set(s,[a])):r>=o.length?(a=new Bh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ll=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dl=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function __(i,t,e){let n=new Js,s=new K,r=new K,o=new ge,a=new Ll({depthPacking:af}),l=new Dl,c={},h=e.maxTextureSize,u={[si]:He,[He]:si,[de]:de},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Vt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let m=this.type;this.render=function(A,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ni),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=m!==On&&this.type===On,B=m===On&&this.type!==On;for(let X=0,k=A.length;X<k;X++){let Z=A[X],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();if(s.multiply(nt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||O===!0||B===!0){let pt=this.type!==On?{minFilter:fn,magFilter:fn}:{};G.map!==null&&G.map.dispose(),G.map=new Gn(s.x,s.y,pt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ot=G.getViewportCount();for(let pt=0;pt<ot;pt++){let Pt=G.getViewport(pt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),F.viewport(o),G.updateMatrices(Z,pt),n=G.getFrustum(),x(R,P,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===On&&b(G,P),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,v,T)};function b(A,R){let P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,P,f,_,null)}function y(A,R,P,S){let v=null,T=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let F=v.uuid,O=R.uuid,B=c[F];B===void 0&&(B={},c[F]=B);let X=B[O];X===void 0&&(X=v.clone(),B[O]=X,R.addEventListener("dispose",C)),v=X}if(v.visible=R.visible,v.wireframe=R.wireframe,S===On?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=P}return v}function x(A,R,P,S,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===On)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let O=t.update(A),B=A.material;if(Array.isArray(B)){let X=O.groups;for(let k=0,Z=X.length;k<Z;k++){let G=X[k],nt=B[G.materialIndex];if(nt&&nt.visible){let ot=y(A,nt,S,v);A.onBeforeShadow(i,A,R,P,O,ot,G),i.renderBufferDirect(P,null,O,ot,A,G),A.onAfterShadow(i,A,R,P,O,ot,G)}}}else if(B.visible){let X=y(A,B,S,v);A.onBeforeShadow(i,A,R,P,O,X,null),i.renderBufferDirect(P,null,O,X,A,null),A.onAfterShadow(i,A,R,P,O,X,null)}}let F=A.children;for(let O=0,B=F.length;O<B;O++)x(F[O],R,P,S,v)}function C(A){A.target.removeEventListener("dispose",C);for(let P in c){let S=c[P],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var x_={[Fa]:ka,[Ba]:Va,[za]:Ga,[ds]:Ha,[ka]:Fa,[Va]:Ba,[Ga]:za,[Ha]:ds};function y_(i,t){function e(){let D=!1,ut=new ge,W=null,J=new ge(0,0,0,0);return{setMask:function(mt){W!==mt&&!D&&(i.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){D=mt},setClear:function(mt,dt,Ft,me,Pe){Pe===!0&&(mt*=me,dt*=me,Ft*=me),ut.set(mt,dt,Ft,me),J.equals(ut)===!1&&(i.clearColor(mt,dt,Ft,me),J.copy(ut))},reset:function(){D=!1,W=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,W=null,J=null,mt=null;return{setReversed:function(dt){if(ut!==dt){let Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let me=mt;mt=null,this.setClear(me)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?st(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(dt){W!==dt&&!D&&(i.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=x_[dt]),J!==dt){switch(dt){case Fa:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){mt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),mt=dt)},reset:function(){D=!1,W=null,J=null,mt=null,ut=!1}}}function s(){let D=!1,ut=null,W=null,J=null,mt=null,dt=null,Ft=null,me=null,Pe=null;return{setTest:function(ee){D||(ee?st(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ee){ut!==ee&&!D&&(i.stencilMask(ee),ut=ee)},setFunc:function(ee,rn,Cn){(W!==ee||J!==rn||mt!==Cn)&&(i.stencilFunc(ee,rn,Cn),W=ee,J=rn,mt=Cn)},setOp:function(ee,rn,Cn){(dt!==ee||Ft!==rn||me!==Cn)&&(i.stencilOp(ee,rn,Cn),dt=ee,Ft=rn,me=Cn)},setLocked:function(ee){D=ee},setClear:function(ee){Pe!==ee&&(i.clearStencil(ee),Pe=ee)},reset:function(){D=!1,ut=null,W=null,J=null,mt=null,dt=null,Ft=null,me=null,Pe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,b=null,y=null,x=null,C=null,A=null,R=new Rt(0,0,0),P=0,S=!1,v=null,T=null,F=null,O=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Z=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=Z>=2);let nt=null,ot={},pt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),$t=new ge().fromArray(pt),$=new ge().fromArray(Pt);function it(D,ut,W,J){let mt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<W;Ft++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ut+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return dt}let yt={};yt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(ds),tt(!1),xt(Vc),st(i.CULL_FACE),I(ni);function st(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Nt(D,ut){return u[D]!==ut?(i.bindFramebuffer(D,ut),u[D]=ut,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Dt(D,ut){let W=f,J=!1;if(D){W=d.get(ut),W===void 0&&(W=[],d.set(ut,W));let mt=D.textures;if(W.length!==mt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ft=mt.length;dt<Ft;dt++)W[dt]=i.COLOR_ATTACHMENT0+dt;W.length=mt.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function Yt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}let j={[xi]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};j[Ud]=i.MIN,j[Nd]=i.MAX;let rt={[Od]:i.ZERO,[Fd]:i.ONE,[kd]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Wd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[Bd]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Xd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,ut,W,J,mt,dt,Ft,me,Pe,ee){if(D===ni){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),D!==Id){if(D!==g||ee!==S){if((m!==xi||x!==xi)&&(i.blendEquation(i.FUNC_ADD),m=xi,x=xi),ee)switch(D){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,y=null,C=null,A=null,R.set(0,0,0),P=0,g=D,S=ee}return}mt=mt||ut,dt=dt||W,Ft=Ft||J,(ut!==m||mt!==x)&&(i.blendEquationSeparate(j[ut],j[mt]),m=ut,x=mt),(W!==b||J!==y||dt!==C||Ft!==A)&&(i.blendFuncSeparate(rt[W],rt[J],rt[dt],rt[Ft]),b=W,y=J,C=dt,A=Ft),(me.equals(R)===!1||Pe!==P)&&(i.blendColor(me.r,me.g,me.b,Pe),R.copy(me),P=Pe),g=D,S=!1}function Tt(D,ut){D.side===de?Ct(i.CULL_FACE):st(i.CULL_FACE);let W=D.side===He;ut&&(W=!W),tt(W),D.blending===as&&D.transparent===!1?I(ni):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function xt(D){D!==Rd?(st(i.CULL_FACE),D!==T&&(D===Vc?i.cullFace(i.BACK):D===Cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),T=D}function lt(D){D!==F&&(k&&i.lineWidth(D),F=D)}function It(D,ut,W){D?(st(i.POLYGON_OFFSET_FILL),(O!==ut||B!==W)&&(i.polygonOffset(ut,W),O=ut,B=W)):Ct(i.POLYGON_OFFSET_FILL)}function gt(D){D?st(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+X-1),nt!==D&&(i.activeTexture(D),nt=D)}function M(D,ut,W){W===void 0&&(nt===null?W=i.TEXTURE0+X-1:W=nt);let J=ot[W];J===void 0&&(J={type:void 0,texture:void 0},ot[W]=J),(J.type!==D||J.texture!==ut)&&(nt!==W&&(i.activeTexture(W),nt=W),i.bindTexture(D,ut||yt[D]),J.type=D,J.texture=ut)}function z(){let D=ot[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){$t.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),$t.copy(D))}function bt(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function qt(D,ut){let W=c.get(ut);W===void 0&&(W=new WeakMap,c.set(ut,W));let J=W.get(D);J===void 0&&(J=i.getUniformBlockIndex(ut,D.name),W.set(D,J))}function zt(D,ut){let J=c.get(ut).get(D);l.get(ut)!==J&&(i.uniformBlockBinding(ut,J,D.__bindingPointIndex),l.set(ut,J))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,ot={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,b=null,y=null,x=null,C=null,A=null,R=new Rt(0,0,0),P=0,S=!1,v=null,T=null,F=null,O=null,B=null,$t.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Ct,bindFramebuffer:Nt,drawBuffers:Dt,useProgram:Yt,setBlending:I,setMaterial:Tt,setFlipSided:tt,setCullFace:xt,setLineWidth:lt,setPolygonOffset:It,setScissorTest:gt,activeTexture:E,bindTexture:M,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:vt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:zt,texStorage2D:Wt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Ut,viewport:bt,reset:oe}}function zh(i,t,e,n){let s=v_(n);switch(e){case cu:return i*t;case uu:return i*t;case du:return i*t*2;case fu:return i*t/s.components*s.byteLength;case uc:return i*t/s.components*s.byteLength;case pu:return i*t*2/s.components*s.byteLength;case dc:return i*t*2/s.components*s.byteLength;case hu:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case fc:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mu:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _l:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v_(i){switch(i){case Hn:case ou:return{byteLength:1,components:1};case Ys:case au:case sr:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case Mi:case lc:case kn:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function b_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,M){return f?new OffscreenCanvas(E,M):to("canvas")}function _(E,M,z){let q=1,Q=gt(E);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(q*Q.width),Mt=Math.floor(q*Q.height);u===void 0&&(u=p(Y,Mt));let ht=M?p(Y,Mt):u;return ht.width=Y,ht.height=Mt,ht.getContext("2d").drawImage(E,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Mt+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,M,z,q,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=M;if(M===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){let Mt=Q?Po:Zt.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Mt===ie?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(E,M){let z;return E?M===null||M===Mi||M===ms?z=i.DEPTH24_STENCIL8:M===kn?z=i.DEPTH32F_STENCIL8:M===Ys&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===ms?z=i.DEPTH_COMPONENT24:M===kn?z=i.DEPTH_COMPONENT32F:M===Ys&&(z=i.DEPTH_COMPONENT16),z}function C(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==fn&&E.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){let M=E.target;M.removeEventListener("dispose",A),P(M),M.isVideoTexture&&h.delete(M)}function R(E){let M=E.target;M.removeEventListener("dispose",R),v(M)}function P(E){let M=n.get(E);if(M.__webglInit===void 0)return;let z=E.source,q=d.get(z);if(q){let Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(E),Object.keys(q).length===0&&d.delete(z)}n.remove(E)}function S(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let z=E.source,q=d.get(z);delete q[M.__cacheKey],o.memory.textures--}function v(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=E.textures;for(let q=0,Q=z.length;q<Q;q++){let Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(E)}let T=0;function F(){T=0}function O(){let E=T;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),T+=1,E}function B(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function X(E,M){let z=n.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,E,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function k(E,M){let z=n.get(E);if(E.version>0&&z.__version!==E.version){$(z,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Z(E,M){let z=n.get(E);if(E.version>0&&z.__version!==E.version){$(z,E,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function G(E,M){let z=n.get(E);if(E.version>0&&z.__version!==E.version){it(z,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let nt={[qs]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},ot={[fn]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},pt={[cf]:i.NEVER,[mf]:i.ALWAYS,[hf]:i.LESS,[_u]:i.LEQUAL,[uf]:i.EQUAL,[pf]:i.GEQUAL,[df]:i.GREATER,[ff]:i.NOTEQUAL};function Pt(E,M){if(M.type===kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===ta||M.magFilter===dr||M.magFilter===bi||M.minFilter===Sn||M.minFilter===ta||M.minFilter===dr||M.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,nt[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,nt[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,nt[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ot[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==dr&&M.minFilter!==bi||M.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $t(E,M){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));let q=M.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let Y=B(M);if(Y!==E.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Y].usedTimes++;let Mt=Q[E.__cacheKey];Mt!==void 0&&(Q[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(M)),E.__cacheKey=Y,E.__webglTexture=Q[Y].texture}return z}function $(E,M,z){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let Q=$t(E,M),Y=M.source;e.bindTexture(q,E.__webglTexture,i.TEXTURE0+z);let Mt=n.get(Y);if(Y.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let ht=Zt.getPrimaries(Zt.workingColorSpace),_t=M.colorSpace===ei?null:Zt.getPrimaries(M.colorSpace),Wt=M.colorSpace===ei||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let et=_(M.image,!1,s.maxTextureSize);et=It(M,et);let vt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),Ut=y(M.internalFormat,vt,Lt,M.colorSpace,M.isVideoTexture);Pt(q,M);let bt,qt=M.mipmaps,zt=M.isVideoTexture!==!0,oe=Mt.__version===void 0||Q===!0,D=Y.dataReady,ut=C(M,et);if(M.isDepthTexture)Ut=x(M.format===gs,M.type),oe&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Ut,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,vt,Lt,null));else if(M.isDataTexture)if(qt.length>0){zt&&oe&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)bt=qt[W],zt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,vt,Lt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,bt.width,bt.height,0,vt,Lt,bt.data);M.generateMipmaps=!1}else zt?(oe&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,vt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,vt,Lt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){zt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,qt[0].width,qt[0].height,et.depth);for(let W=0,J=qt.length;W<J;W++)if(bt=qt[W],M.format!==dn)if(vt!==null)if(zt){if(D)if(M.layerUpdates.size>0){let mt=zh(bt.width,bt.height,M.format,M.type);for(let dt of M.layerUpdates){let Ft=bt.data.subarray(dt*mt/bt.data.BYTES_PER_ELEMENT,(dt+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,dt,bt.width,bt.height,1,vt,Ft)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,et.depth,vt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ut,bt.width,bt.height,et.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,et.depth,vt,Lt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ut,bt.width,bt.height,et.depth,0,vt,Lt,bt.data)}else{zt&&oe&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)bt=qt[W],M.format!==dn?vt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,vt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,vt,Lt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,bt.width,bt.height,0,vt,Lt,bt.data)}else if(M.isDataArrayTexture)if(zt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,et.width,et.height,et.depth),D)if(M.layerUpdates.size>0){let W=zh(et.width,et.height,M.format,M.type);for(let J of M.layerUpdates){let mt=et.data.subarray(J*W/et.data.BYTES_PER_ELEMENT,(J+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,vt,Lt,mt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,et.width,et.height,et.depth,0,vt,Lt,et.data);else if(M.isData3DTexture)zt?(oe&&e.texStorage3D(i.TEXTURE_3D,ut,Ut,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,et.width,et.height,et.depth,0,vt,Lt,et.data);else if(M.isFramebufferTexture){if(oe)if(zt)e.texStorage2D(i.TEXTURE_2D,ut,Ut,et.width,et.height);else{let W=et.width,J=et.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ut,W,J,0,vt,Lt,null),W>>=1,J>>=1}}else if(qt.length>0){if(zt&&oe){let W=gt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Ut,W.width,W.height)}for(let W=0,J=qt.length;W<J;W++)bt=qt[W],zt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Lt,bt):e.texImage2D(i.TEXTURE_2D,W,Ut,vt,Lt,bt);M.generateMipmaps=!1}else if(zt){if(oe){let W=gt(et);e.texStorage2D(i.TEXTURE_2D,ut,Ut,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ut,vt,Lt,et);g(M)&&m(q),Mt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function it(E,M,z){if(M.image.length!==6)return;let q=$t(E,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let Y=n.get(Q);if(Q.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+z);let Mt=Zt.getPrimaries(Zt.workingColorSpace),ht=M.colorSpace===ei?null:Zt.getPrimaries(M.colorSpace),_t=M.colorSpace===ei||Mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Wt&&!et?vt[J]=_(M.image[J],!0,s.maxCubemapSize):vt[J]=et?M.image[J].image:M.image[J],vt[J]=It(M,vt[J]);let Lt=vt[0],Ut=r.convert(M.format,M.colorSpace),bt=r.convert(M.type),qt=y(M.internalFormat,Ut,bt,M.colorSpace),zt=M.isVideoTexture!==!0,oe=Y.__version===void 0||q===!0,D=Q.dataReady,ut=C(M,Lt);Pt(i.TEXTURE_CUBE_MAP,M);let W;if(Wt){zt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,Lt.width,Lt.height);for(let J=0;J<6;J++){W=vt[J].mipmaps;for(let mt=0;mt<W.length;mt++){let dt=W[mt];M.format!==dn?Ut!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,dt.width,dt.height,Ut,bt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,qt,dt.width,dt.height,0,Ut,bt,dt.data)}}}else{if(W=M.mipmaps,zt&&oe){W.length>0&&ut++;let J=gt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,J.width,J.height)}for(let J=0;J<6;J++)if(et){zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Ut,bt,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,vt[J].width,vt[J].height,0,Ut,bt,vt[J].data);for(let mt=0;mt<W.length;mt++){let Ft=W[mt].image[J].image;zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Ft.width,Ft.height,Ut,bt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,qt,Ft.width,Ft.height,0,Ut,bt,Ft.data)}}else{zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ut,bt,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Ut,bt,vt[J]);for(let mt=0;mt<W.length;mt++){let dt=W[mt];zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Ut,bt,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,qt,Ut,bt,dt.image[J])}}}g(M)&&m(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function yt(E,M,z,q,Q,Y){let Mt=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),_t=y(z.internalFormat,Mt,ht,z.colorSpace),Wt=n.get(M),et=n.get(z);if(et.__renderTarget=M,!Wt.__hasExternalTextures){let vt=Math.max(1,M.width>>Y),Lt=Math.max(1,M.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,_t,vt,Lt,M.depth,0,Mt,ht,null):e.texImage2D(Q,Y,_t,vt,Lt,0,Mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),xt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,et.__webglTexture,0,tt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Y=x(M.stencilBuffer,Q),Mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=tt(M);xt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,E)}else{let q=M.textures;for(let Q=0;Q<q.length;Q++){let Y=q[Q],Mt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),_t=y(Y.internalFormat,Mt,ht,Y.colorSpace),Wt=tt(M);z&&xt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,_t,M.width,M.height):xt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let Q=q.__webglTexture,Y=tt(M);if(M.depthTexture.format===ls)xt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===gs)xt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(E){let M=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ct(M.__webglFramebuffer,E)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),st(M.__webglDepthbuffer[q],E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,E,!1);else{let q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(E,M,z){let q=n.get(E);M!==void 0&&yt(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Nt(E)}function Yt(E){let M=E.texture,z=n.get(E),q=n.get(M);E.addEventListener("dispose",R);let Q=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let _t=0;_t<M.mipmaps.length;_t++)z.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else z.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)z.__webglFramebuffer[ht]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ht=0,_t=Q.length;ht<_t;ht++){let Wt=n.get(Q[ht]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&xt(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){let _t=Q[ht];z.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);let Wt=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),vt=y(_t.internalFormat,Wt,et,_t.colorSpace,E.isXRRenderTarget===!0),Lt=tt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)yt(z.__webglFramebuffer[ht][_t],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else yt(z.__webglFramebuffer[ht],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,_t=Q.length;ht<_t;ht++){let Wt=Q[ht],et=n.get(Wt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Pt(i.TEXTURE_2D,Wt),yt(z.__webglFramebuffer,E,Wt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(Wt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),Pt(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)yt(z.__webglFramebuffer[_t],E,M,i.COLOR_ATTACHMENT0,ht,_t);else yt(z.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ht,0);g(M)&&m(ht),e.unbindTexture()}E.depthBuffer&&Nt(E)}function j(E){let M=E.textures;for(let z=0,q=M.length;z<q;z++){let Q=M[z];if(g(Q)){let Y=b(E),Mt=n.get(Q).__webglTexture;e.bindTexture(Y,Mt),m(Y),e.unbindTexture()}}}let rt=[],I=[];function Tt(E){if(E.samples>0){if(xt(E)===!1){let M=E.textures,z=E.width,q=E.height,Q=i.COLOR_BUFFER_BIT,Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(E),ht=M.length>1;if(ht)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);let Wt=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,Q,i.NEAREST),l===!0&&(rt.length=0,I.length=0,rt.push(i.COLOR_ATTACHMENT0+_t),E.depthBuffer&&E.resolveDepthBuffer===!1&&(rt.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);let Wt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function tt(E){return Math.min(s.maxSamples,E.samples)}function xt(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function It(E,M){let z=E.colorSpace,q=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==bs&&z!==ei&&(Zt.getTransfer(z)===ie?(q!==dn||Q!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Dt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=xt}function M_(i,t){function e(n,s=ei){let r,o=Zt.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.BYTE;if(n===au)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===sr)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===dn)return i.RGBA;if(n===uu)return i.LUMINANCE;if(n===du)return i.LUMINANCE_ALPHA;if(n===ls)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===fu)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===pu)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===Kr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===Za||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===ja)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===gl||n===_l||n===xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ul=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},S_={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:w_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends Vn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=new Nl,g=e.getContextAttributes(),m=null,b=null,y=[],x=[],C=new K,A=null,R=new Ne;R.viewport=new ge;let P=new Ne;P.viewport=new ge;let S=[R,P],v=new Ul,T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=y[$];return it===void 0&&(it=new Gs,y[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=y[$];return it===void 0&&(it=new Gs,y[$]=it),it.getGripSpace()},this.getHand=function($){let it=y[$];return it===void 0&&(it=new Gs,y[$]=it),it.getHandSpace()};function O($){let it=x.indexOf($.inputSource);if(it===-1)return;let yt=y[it];yt!==void 0&&(yt.update($.inputSource,$.frame,c||o),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let $=0;$<y.length;$++){let it=x[$];it!==null&&(x[$]=null,y[$].disconnect(it))}T=null,F=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Gn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,yt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?gs:ls,yt=g.stencil?ms:Mi);let Ct={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Gn(d.textureWidth,d.textureHeight,{format:dn,type:Hn,depthTexture:new co(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X($){for(let it=0;it<$.removed.length;it++){let yt=$.removed[it],st=x.indexOf(yt);st>=0&&(x[st]=null,y[st].disconnect(yt))}for(let it=0;it<$.added.length;it++){let yt=$.added[it],st=x.indexOf(yt);if(st===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=x.length){x.push(yt),st=Nt;break}else if(x[Nt]===null){x[Nt]=yt,st=Nt;break}if(st===-1)break}let Ct=y[st];Ct&&Ct.connect(yt)}}let k=new L,Z=new L;function G($,it,yt){k.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);let st=k.distanceTo(Z),Ct=it.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,Dt=Ct[14]/(Ct[10]-1),Yt=Ct[14]/(Ct[10]+1),j=(Ct[9]+1)/Ct[5],rt=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],Tt=(Nt[8]+1)/Nt[0],tt=Dt*I,xt=Dt*Tt,lt=st/(-I+Tt),It=lt*-I;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let gt=Dt+lt,E=Yt+lt,M=tt-It,z=xt+(st-It),q=j*Yt/E*gt,Q=rt*Yt/E*gt;$.projectionMatrix.makePerspective(M,z,q,Q,gt,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let it=$.near,yt=$.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),v.near=P.near=R.near=it,v.far=P.far=R.far=yt,(T!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,F=v.far),R.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;let st=$.parent,Ct=v.cameras;nt(v,st);for(let Nt=0;Nt<Ct.length;Nt++)nt(Ct[Nt],st);Ct.length===2?G(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),ot($,v,st)};function ot($,it,yt){yt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let pt=null;function Pt($,it){if(h=it.getViewerPose(c||o),p=it,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let st=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let Nt=0;Nt<yt.length;Nt++){let Dt=yt[Nt],Yt=null;if(f!==null)Yt=f.getViewport(Dt);else{let rt=u.getViewSubImage(d,Dt);Yt=rt.viewport,Nt===0&&(t.setRenderTargetTextures(b,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(b))}let j=S[Nt];j===void 0&&(j=new Ne,j.layers.enable(Nt),j.viewport=new ge,S[Nt]=j),j.matrix.fromArray(Dt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Dt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Nt===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(j)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Nt=u.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let yt=0;yt<y.length;yt++){let st=x[yt],Ct=y[yt];st!==null&&Ct!==void 0&&Ct.update(st,it,c||o)}pt&&pt($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),p=null}let $t=new Mu;$t.setAnimationLoop(Pt),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}},gi=new En,T_=new Kt;function A_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,bu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===He&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===He&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),y=b.envMap,x=b.envMapRotation;y&&(g.envMap.value=y,gi.copy(x),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),g.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(gi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let x=y.program;n.uniformBlockBinding(b,x)}function c(b,y){let x=s[b.id];x===void 0&&(p(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",g));let C=y.program;n.updateUBOMapping(b,C);let A=t.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){let y=u();b.__bindingPointIndex=y;let x=i.createBuffer(),C=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],x=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,R=x.length;A<R;A++){let P=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,v=P.length;S<v;S++){let T=P[S];if(f(T,A,S,C)===!0){let F=T.__offset,O=Array.isArray(T.value)?T.value:[T.value],B=0;for(let X=0;X<O.length;X++){let k=O[X],Z=_(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,F+B,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,x,C){let A=b.value,R=y+"_"+x;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{let P=C[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function p(b){let y=b.uniforms,x=0,C=16;for(let R=0,P=y.length;R<P;R++){let S=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,T=S.length;v<T;v++){let F=S[v],O=Array.isArray(F.value)?F.value:[F.value];for(let B=0,X=O.length;B<X;B++){let k=O[B],Z=_(k),G=x%C,nt=G%Z.boundary,ot=G+nt;x+=nt,ot!==0&&C-ot<Z.storage&&(x+=C-ot),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}let A=x%C;return A>0&&(x+=C-A),b.__size=x,b.__cache={},this}function _(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){let y=b.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ho=class{constructor(t={}){let{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=ii,this.toneMappingExposure=1;let x=this,C=!1,A=0,R=0,P=null,S=-1,v=null,T=new ge,F=new ge,O=null,B=new Rt(0),X=0,k=e.width,Z=e.height,G=1,nt=null,ot=null,pt=new ge(0,0,k,Z),Pt=new ge(0,0,k,Z),$t=!1,$=new Js,it=!1,yt=!1,st=new Kt,Ct=new Kt,Nt=new L,Dt=new ge,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function rt(){return P===null?G:1}let I=n;function Tt(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){let U="webgl2";if(I=Tt(U,w),I===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,xt,lt,It,gt,E,M,z,q,Q,Y,Mt,ht,_t,Wt,et,vt,Lt,Ut,bt,qt,zt,oe,D;function ut(){tt=new Wg(I),tt.init(),zt=new M_(I,tt),xt=new kg(I,tt,t,zt),lt=new y_(I,tt),xt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),It=new qg(I),gt=new o_,E=new b_(I,tt,lt,gt,xt,zt,It),M=new zg(x),z=new Gg(x),q=new tp(I),oe=new Og(I,q),Q=new Xg(I,q,It,oe),Y=new Zg(I,Q,q,It),Ut=new Yg(I,xt,E),et=new Bg(gt),Mt=new r_(x,M,z,tt,xt,oe,et),ht=new A_(x,gt),_t=new l_,Wt=new p_(tt),Lt=new Ng(x,M,z,lt,Y,f,l),vt=new __(x,Y,xt),D=new R_(I,It,xt,lt),bt=new Fg(I,tt,It),qt=new $g(I,tt,It),It.programs=Mt.programs,x.capabilities=xt,x.extensions=tt,x.properties=gt,x.renderLists=_t,x.shadowMap=vt,x.state=lt,x.info=It}ut();let W=new Ol(x,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(k,Z,!1))},this.getSize=function(w){return w.set(k,Z)},this.setSize=function(w,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,Z=U,e.width=Math.floor(w*G),e.height=Math.floor(U*G),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(k*G,Z*G).floor()},this.setDrawingBufferSize=function(w,U,H){k=w,Z=U,G=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(pt)},this.setViewport=function(w,U,H,V){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,U,H,V),lt.viewport(T.copy(pt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Pt)},this.setScissor=function(w,U,H,V){w.isVector4?Pt.set(w.x,w.y,w.z,w.w):Pt.set(w,U,H,V),lt.scissor(F.copy(Pt).multiplyScalar(G).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(w){lt.setScissorTest($t=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(w=!0,U=!0,H=!0){let V=0;if(w){let N=!1;if(P!==null){let at=P.texture.format;N=at===fc||at===dc||at===uc}if(N){let at=P.texture.type,ft=at===Hn||at===Mi||at===Ys||at===ms||at===cc||at===hc,St=Lt.getClearColor(),wt=Lt.getClearAlpha(),Ot=St.r,kt=St.g,Et=St.b;ft?(p[0]=Ot,p[1]=kt,p[2]=Et,p[3]=wt,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=Ot,_[1]=kt,_[2]=Et,_[3]=wt,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),Wt.dispose(),gt.dispose(),M.dispose(),z.dispose(),Y.dispose(),oe.dispose(),D.dispose(),Mt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Uc),W.removeEventListener("sessionend",Nc),hi.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=It.autoReset,U=vt.enabled,H=vt.autoUpdate,V=vt.needsUpdate,N=vt.type;ut(),It.autoReset=w,vt.enabled=U,vt.autoUpdate=H,vt.needsUpdate=V,vt.type=N}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ft(w){let U=w.target;U.removeEventListener("dispose",Ft),me(U)}function me(w){Pe(w),gt.remove(w)}function Pe(w){let U=gt.get(w).programs;U!==void 0&&(U.forEach(function(H){Mt.releaseProgram(H)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,V,N,at){U===null&&(U=Yt);let ft=N.isMesh&&N.matrixWorld.determinant()<0,St=Ed(w,U,H,V,N);lt.setMaterial(V,ft);let wt=H.index,Ot=1;if(V.wireframe===!0){if(wt=Q.getWireframeAttribute(H),wt===void 0)return;Ot=2}let kt=H.drawRange,Et=H.attributes.position,Jt=kt.start*Ot,ae=(kt.start+kt.count)*Ot;at!==null&&(Jt=Math.max(Jt,at.start*Ot),ae=Math.min(ae,(at.start+at.count)*Ot)),wt!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,wt.count)):Et!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,Et.count));let ce=ae-Jt;if(ce<0||ce===1/0)return;oe.setup(N,V,St,H,wt);let Be,Qt=bt;if(wt!==null&&(Be=q.get(wt),Qt=qt,Qt.setIndex(Be)),N.isMesh)V.wireframe===!0?(lt.setLineWidth(V.wireframeLinewidth*rt()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(N.isLine){let At=V.linewidth;At===void 0&&(At=1),lt.setLineWidth(At*rt()),N.isLineSegments?Qt.setMode(I.LINES):N.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else N.isPoints?Qt.setMode(I.POINTS):N.isSprite&&Qt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let At=N._multiDrawStarts,Pn=N._multiDrawCounts,te=N._multiDrawCount,on=wt?q.get(wt).bytesPerElement:1,zi=gt.get(V).currentProgram.getUniforms();for(let We=0;We<te;We++)zi.setValue(I,"_gl_DrawID",We),Qt.render(At[We]/on,Pn[We])}else if(N.isInstancedMesh)Qt.renderInstances(Jt,ce,N.count);else if(H.isInstancedBufferGeometry){let At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Pn=Math.min(H.instanceCount,At);Qt.renderInstances(Jt,ce,Pn)}else Qt.render(Jt,ce)};function ee(w,U,H){w.transparent===!0&&w.side===de&&w.forceSinglePass===!1?(w.side=He,w.needsUpdate=!0,ur(w,U,H),w.side=si,w.needsUpdate=!0,ur(w,U,H),w.side=de):ur(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),m=Wt.get(H),m.init(U),y.push(m),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){let St=at[ft];ee(St,H,N),V.add(St)}else ee(at,H,N),V.add(at)}),y.pop(),m=null,V},this.compileAsync=function(w,U,H=null){let V=this.compile(w,U,H);return new Promise(N=>{function at(){if(V.forEach(function(ft){gt.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){N(w);return}setTimeout(at,10)}tt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let rn=null;function Cn(w){rn&&rn(w)}function Uc(){hi.stop()}function Nc(){hi.start()}let hi=new Mu;hi.setAnimationLoop(Cn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(w){rn=w,W.setAnimationLoop(w),w===null?hi.stop():hi.start()},W.addEventListener("sessionstart",Uc),W.addEventListener("sessionend",Nc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,P),m=Wt.get(w,y.length),m.init(U),y.push(m),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,it=et.init(this.clippingPlanes,yt),g=_t.get(w,b.length),g.init(),b.push(g),W.enabled===!0&&W.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&Qo(at,U,-1/0,x.sortObjects)}Qo(w,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(nt,ot),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Lt.addToRenderList(g,w),this.info.render.frame++,it===!0&&et.beginShadows();let H=m.state.shadowsArray;vt.render(H,w,U),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(m.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let ft=0,St=at.length;ft<St;ft++){let wt=at[ft];Fc(V,N,w,wt)}j&&Lt.render(w);for(let ft=0,St=at.length;ft<St;ft++){let wt=at[ft];Oc(g,w,wt,wt.viewport)}}else N.length>0&&Fc(V,N,w,U),j&&Lt.render(w),Oc(g,w,U);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,U),oe.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(m=y[y.length-1],it===!0&&et.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Qo(w,U,H,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){V&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);let ft=Y.update(w),St=w.material;St.visible&&g.push(w,ft,St,H,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){let ft=Y.update(w),St=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Dt.copy(ft.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){let wt=ft.groups;for(let Ot=0,kt=wt.length;Ot<kt;Ot++){let Et=wt[Ot],Jt=St[Et.materialIndex];Jt&&Jt.visible&&g.push(w,ft,Jt,H,Dt.z,Et)}}else St.visible&&g.push(w,ft,St,H,Dt.z,null)}}let at=w.children;for(let ft=0,St=at.length;ft<St;ft++)Qo(at[ft],U,H,V)}function Oc(w,U,H,V){let N=w.opaque,at=w.transmissive,ft=w.transparent;m.setupLightsView(H),it===!0&&et.setGlobalState(x.clippingPlanes,H),V&&lt.viewport(T.copy(V)),N.length>0&&hr(N,U,H),at.length>0&&hr(at,U,H),ft.length>0&&hr(ft,U,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Fc(w,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Gn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?sr:Hn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let at=m.state.transmissionRenderTarget[V.id],ft=V.viewport||T;at.setSize(ft.z,ft.w);let St=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),j&&Lt.render(H);let wt=x.toneMapping;x.toneMapping=ii;let Ot=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),it===!0&&et.setGlobalState(x.clippingPlanes,V),hr(w,H,V),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),tt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Et=0,Jt=U.length;Et<Jt;Et++){let ae=U[Et],ce=ae.object,Be=ae.geometry,Qt=ae.material,At=ae.group;if(Qt.side===de&&ce.layers.test(V.layers)){let Pn=Qt.side;Qt.side=He,Qt.needsUpdate=!0,kc(ce,H,V,Be,Qt,At),Qt.side=Pn,Qt.needsUpdate=!0,kt=!0}}kt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}x.setRenderTarget(St),x.setClearColor(B,X),Ot!==void 0&&(V.viewport=Ot),x.toneMapping=wt}function hr(w,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=w.length;N<at;N++){let ft=w[N],St=ft.object,wt=ft.geometry,Ot=V===null?ft.material:V,kt=ft.group;St.layers.test(H.layers)&&kc(St,U,H,wt,Ot,kt)}}function kc(w,U,H,V,N,at){w.onBeforeRender(x,U,H,V,N,at),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,U,H,V,w,at),N.transparent===!0&&N.side===de&&N.forceSinglePass===!1?(N.side=He,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,w,at),N.side=si,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,w,at),N.side=de):x.renderBufferDirect(H,U,V,N,w,at),w.onAfterRender(x,U,H,V,N,at)}function ur(w,U,H){U.isScene!==!0&&(U=Yt);let V=gt.get(w),N=m.state.lights,at=m.state.shadowsArray,ft=N.state.version,St=Mt.getParameters(w,N.state,at,U,H),wt=Mt.getProgramCacheKey(St),Ot=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?z:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",Ft),Ot=new Map,V.programs=Ot);let kt=Ot.get(wt);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===ft)return zc(w,St),kt}else St.uniforms=Mt.getUniforms(w),w.onBeforeCompile(St,x),kt=Mt.acquireProgram(St,wt),Ot.set(wt,kt),V.uniforms=St.uniforms;let Et=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Et.clippingPlanes=et.uniform),zc(w,St),V.needsLights=Ad(w),V.lightsStateVersion=ft,V.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function Bc(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=us.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function zc(w,U){let H=gt.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Ed(w,U,H,V,N){U.isScene!==!0&&(U=Yt),E.resetTextureUnits();let at=U.fog,ft=V.isMeshStandardMaterial?U.environment:null,St=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bs,wt=(V.isMeshStandardMaterial?z:M).get(V.envMap||ft),Ot=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color,ce=ii;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=x.toneMapping);let Be=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=Be!==void 0?Be.length:0,At=gt.get(V),Pn=m.state.lights;if(it===!0&&(yt===!0||w!==v)){let Ke=w===v&&V.id===S;et.setState(V,w,Ke)}let te=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Pn.state.version||At.outputColorSpace!==St||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==wt||V.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==Ot||At.vertexTangents!==kt||At.morphTargets!==Et||At.morphNormals!==Jt||At.morphColors!==ae||At.toneMapping!==ce||At.morphTargetsCount!==Qt)&&(te=!0):(te=!0,At.__version=V.version);let on=At.currentProgram;te===!0&&(on=ur(V,U,N));let zi=!1,We=!1,Ps=!1,he=on.getUniforms(),bn=At.uniforms;if(lt.useProgram(on.program)&&(zi=!0,We=!0,Ps=!0),V.id!==S&&(S=V.id,We=!0),zi||v!==w){lt.buffers.depth.getReversed()?(st.copy(w.projectionMatrix),Uf(st),Nf(st),he.setValue(I,"projectionMatrix",st)):he.setValue(I,"projectionMatrix",w.projectionMatrix),he.setValue(I,"viewMatrix",w.matrixWorldInverse);let qn=he.map.cameraPosition;qn!==void 0&&qn.setValue(I,Nt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&he.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,We=!0,Ps=!0)}if(N.isSkinnedMesh){he.setOptional(I,N,"bindMatrix"),he.setOptional(I,N,"bindMatrixInverse");let Ke=N.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),he.setValue(I,"boneTexture",Ke.boneTexture,E))}N.isBatchedMesh&&(he.setOptional(I,N,"batchingTexture"),he.setValue(I,"batchingTexture",N._matricesTexture,E),he.setOptional(I,N,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",N._indirectTexture,E),he.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",N._colorsTexture,E));let Is=H.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Ut.update(N,H,on),(We||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,he.setValue(I,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(bn.envMap.value=wt,bn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(bn.envMapIntensity.value=U.environmentIntensity),We&&(he.setValue(I,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&Td(bn,Ps),at&&V.fog===!0&&ht.refreshFogUniforms(bn,at),ht.refreshMaterialUniforms(bn,V,G,Z,m.state.transmissionRenderTarget[w.id]),us.upload(I,Bc(At),bn,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(us.upload(I,Bc(At),bn,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&he.setValue(I,"center",N.center),he.setValue(I,"modelViewMatrix",N.modelViewMatrix),he.setValue(I,"normalMatrix",N.normalMatrix),he.setValue(I,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ke=V.uniformsGroups;for(let qn=0,Yn=Ke.length;qn<Yn;qn++){let Hc=Ke[qn];D.update(Hc,on),D.bind(Hc,on)}}return on}function Td(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ad(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,H){gt.get(w.texture).__webglTexture=U,gt.get(w.depthTexture).__webglTexture=H;let V=gt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let H=gt.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){P=w,A=U,R=H;let V=!0,N=null,at=!1,ft=!1;if(w){let wt=gt.get(w);if(wt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(wt.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(wt.__hasExternalTextures)E.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Et=w.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&gt.has(Et)&&(w.width!==Et.image.width||w.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ft=!0);let kt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?N=kt[U][H]:N=kt[U],at=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?N=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[H]:N=kt,T.copy(w.viewport),F.copy(w.scissor),O=w.scissorTest}else T.copy(pt).multiplyScalar(G).floor(),F.copy(Pt).multiplyScalar(G).floor(),O=$t;if(lt.bindFramebuffer(I.FRAMEBUFFER,N)&&V&&lt.drawBuffers(w,N),lt.viewport(T),lt.scissor(F),lt.setScissorTest(O),at){let wt=gt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,H)}else if(ft){let wt=gt.get(w.texture),Ot=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,H||0,Ot)}S=-1},this.readRenderTargetPixels=function(w,U,H,V,N,at,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){lt.bindFramebuffer(I.FRAMEBUFFER,St);try{let wt=w.texture,Ot=wt.format,kt=wt.type;if(!xt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N&&I.readPixels(U,H,V,N,zt.convert(Ot),zt.convert(kt),at)}finally{let wt=P!==null?gt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,V,N,at,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){let wt=w.texture,Ot=wt.format,kt=wt.type;if(!xt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N){lt.bindFramebuffer(I.FRAMEBUFFER,St);let Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(U,H,V,N,zt.convert(Ot),zt.convert(kt),0);let Jt=P!==null?gt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,Jt);let ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Df(I,ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Et),I.deleteSync(ae),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),N=Math.floor(w.image.width*V),at=Math.floor(w.image.height*V),ft=U!==null?U.x:0,St=U!==null?U.y:0;E.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ft,St,N,at),lt.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,V=null,N=0){w.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let at,ft,St,wt,Ot,kt,Et,Jt,ae,ce=w.isCompressedTexture?w.mipmaps[N]:w.image;H!==null?(at=H.max.x-H.min.x,ft=H.max.y-H.min.y,St=H.isBox3?H.max.z-H.min.z:1,wt=H.min.x,Ot=H.min.y,kt=H.isBox3?H.min.z:0):(at=ce.width,ft=ce.height,St=ce.depth||1,wt=0,Ot=0,kt=0),V!==null?(Et=V.x,Jt=V.y,ae=V.z):(Et=0,Jt=0,ae=0);let Be=zt.convert(U.format),Qt=zt.convert(U.type),At;U.isData3DTexture?(E.setTexture3D(U,0),At=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),At=I.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Pn=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),on=I.getParameter(I.UNPACK_SKIP_PIXELS),zi=I.getParameter(I.UNPACK_SKIP_ROWS),We=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);let Ps=w.isDataArrayTexture||w.isData3DTexture,he=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let bn=gt.get(w),Is=gt.get(U),Ke=gt.get(bn.__renderTarget),qn=gt.get(Is.__renderTarget);lt.bindFramebuffer(I.READ_FRAMEBUFFER,Ke.__webglFramebuffer),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<St;Yn++)Ps&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(w).__webglTexture,N,kt+Yn),w.isDepthTexture?(he&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(U).__webglTexture,N,ae+Yn),I.blitFramebuffer(wt,Ot,at,ft,Et,Jt,at,ft,I.DEPTH_BUFFER_BIT,I.NEAREST)):he?I.copyTexSubImage3D(At,N,Et,Jt,ae+Yn,wt,Ot,at,ft):I.copyTexSubImage2D(At,N,Et,Jt,ae+Yn,wt,Ot,at,ft);lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(At,N,Et,Jt,ae,at,ft,St,Be,Qt,ce.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(At,N,Et,Jt,ae,at,ft,St,Be,ce.data):I.texSubImage3D(At,N,Et,Jt,ae,at,ft,St,Be,Qt,ce):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Et,Jt,at,ft,Be,Qt,ce.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Et,Jt,ce.width,ce.height,Be,ce.data):I.texSubImage2D(I.TEXTURE_2D,N,Et,Jt,at,ft,Be,Qt,ce);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,on),I.pixelStorei(I.UNPACK_SKIP_ROWS,zi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We),N===0&&U.generateMipmaps&&I.generateMipmap(At),lt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,V=null,N=0){return w.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,V,N)},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,lt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var uo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fo=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},De=new L,po=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ye=class extends Tn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},es,Os=new L,ns=new L,is=new L,ss=new K,Fs=new K,Au=new Kt,Dr=new L,ks=new L,Ur=new L,Hh=new K,Ra=new K,Vh=new K,je=class extends ve{constructor(t=new Ye){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new Xt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fl(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new po(n,3,0,!1)),es.setAttribute("uv",new po(n,2,3,!1))}this.geometry=es,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Nr(Dr.set(-.5,-.5,0),is,o,ns,s,r),Nr(ks.set(.5,-.5,0),is,o,ns,s,r),Nr(Ur.set(.5,.5,0),is,o,ns,s,r),Hh.set(0,0),Ra.set(1,0),Vh.set(1,1);let a=t.ray.intersectTriangle(Dr,ks,Ur,!1,Os);if(a===null&&(Nr(ks.set(-.5,.5,0),is,o,ns,s,r),Ra.set(0,1),a=t.ray.intersectTriangle(Dr,Ur,ks,!1,Os),a===null))return;let l=t.ray.origin.distanceTo(Os);l<t.near||l>t.far||e.push({distance:l,point:Os.clone(),uv:Fn.getInterpolation(Os,Dr,ks,Ur,Hh,Ra,Vh,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Nr(i,t,e,n,s,r){ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*ss.x-s*ss.y,Fs.y=s*ss.x+r*ss.y):Fs.copy(ss),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Au)}var le=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},mo=new L,go=new L,Gh=new Kt,Bs=new ri,Or=new wi,Ca=new L,Wh=new L,Ze=class extends ve{constructor(t=new Xt,e=new le){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)mo.fromBufferAttribute(e,s-1),go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;Gh.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(Gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),b=h.getX(_+1),y=Fr(this,t,Bs,l,m,b);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=Fr(this,t,Bs,l,_,g);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=Fr(this,t,Bs,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=Fr(this,t,Bs,l,p-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(mo.fromBufferAttribute(o,s),go.fromBufferAttribute(o,r),e.distanceSqToSegment(mo,go,Ca,Wh)>n)return;Ca.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ca);if(!(l<t.near||l>t.far))return{distance:l,point:Wh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Xh=new L,$h=new L,pe=class extends Ze{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xh.fromBufferAttribute(e,s),$h.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xh.distanceTo($h);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ei=class extends Tn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qh=new Kt,kl=new ri,kr=new wi,Br=new L,xs=class extends ve{constructor(t=new Xt,e=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;qh.copy(s).invert(),kl.copy(t.ray).applyMatrix4(qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);Br.fromBufferAttribute(u,g),Yh(Br,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Br.fromBufferAttribute(u,p),Yh(Br,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yh(i,t,e,n,s,r,o){let a=kl.distanceSqToPoint(i);if(a<e){let l=new L;kl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fe=class extends qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new K:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,l=new Kt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new K){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bl=class extends js{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var zr=new L,Pa=new _c,Ia=new _c,La=new _c,zl=class extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),c=zr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Pa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Ia.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),La.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Pa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ia.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),La.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pa.calc(l),Ia.calc(l),La.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function C_(i,t){let e=1-i;return e*e*t}function P_(i,t){return 2*(1-i)*i*t}function I_(i,t){return i*i*t}function Ws(i,t,e,n){return C_(i,t)+P_(i,e)+I_(i,n)}function L_(i,t){let e=1-i;return e*e*e*t}function D_(i,t){let e=1-i;return 3*e*e*i*t}function U_(i,t){return 3*(1-i)*i*i*t}function N_(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return L_(i,t)+D_(i,e)+U_(i,n)+N_(i,s)}var _o=class extends Qe{constructor(t=new K,e=new K,n=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hl=class extends Qe{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y),Xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends Qe{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends Qe{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Qe{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends Qe{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y),Ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zh(a,l.x,c.x,h.x,u.x),Zh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new K().fromArray(s))}return this}},Wl=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:zl,CubicBezierCurve:_o,CubicBezierCurve3:Hl,EllipseCurve:js,LineCurve:xo,LineCurve3:Vl,QuadraticBezierCurve:yo,QuadraticBezierCurve3:Gl,SplineCurve:vo}),Xl=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}},oi=class extends Xl{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xo(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new yo(this.currentPoint.clone(),new K(t,e),new K(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new _o(this.currentPoint.clone(),new K(t,e),new K(n,s),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new js(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Qs=class i extends Xt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],g=n/2,m=0;b(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function b(){let x=new L,C=new L,A=0,R=(e-t)/n;for(let P=0;P<=r;P++){let S=[],v=P/r,T=v*(e-t)+t;for(let F=0;F<=s;F++){let O=F/s,B=O*l+a,X=Math.sin(B),k=Math.cos(B);C.x=T*X,C.y=-v*n+g,C.z=T*k,u.push(C.x,C.y,C.z),x.set(X,R,k).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-v),S.push(p++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let v=_[S][P],T=_[S+1][P],F=_[S+1][P+1],O=_[S][P+1];(t>0||S!==0)&&(h.push(v,T,O),A+=3),(e>0||S!==r-1)&&(h.push(T,F,O),A+=3)}c.addGroup(m,A,0),m+=A}function y(x){let C=p,A=new K,R=new L,P=0,S=x===!0?t:e,v=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),p++;let T=p;for(let F=0;F<=s;F++){let B=F/s*l+a,X=Math.cos(B),k=Math.sin(B);R.x=S*k,R.y=g*v,R.z=S*X,u.push(R.x,R.y,R.z),d.push(0,v,0),A.x=X*.5+.5,A.y=k*.5*v+.5,f.push(A.x,A.y),p++}for(let F=0;F<s;F++){let O=C+F,B=T+F;x===!0?h.push(B,B+1,O):h.push(B+1,B,O),P+=3}c.addGroup(m,P,x===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Hr=new L,Vr=new L,Da=new L,Gr=new Fn,Ce=class extends Xt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(cs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=Gr;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Gr.getNormal(Da),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let y=(b+1)%3,x=u[b],C=u[y],A=Gr[h[b]],R=Gr[h[y]],P=`${x}_${C}`,S=`${C}_${x}`;S in d&&d[S]?(Da.dot(d[S].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(R.x,R.y,R.z)),d[S]=null):P in d||(d[P]={index0:c[b],index1:c[y],normal:Da.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:g}=d[p];Hr.fromBufferAttribute(a,_),Vr.fromBufferAttribute(a,g),f.push(Hr.x,Hr.y,Hr.z),f.push(Vr.x,Vr.y,Vr.z)}this.setAttribute("position",new jt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},gn=class extends oi{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new oi().fromJSON(s))}return this}},O_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ru(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=H_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return tr(r,o,e,a,l,f,0),o}};function Ru(i,t,e,n,s){let r,o;if(s===j_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Kh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Kh(r,i[r],i[r+1],o);return o&&Lo(o,o.next)&&(nr(o),o=o.next),o}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Lo(e,e.next)||fe(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&$_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?k_(i,n,s,r):F_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=B_(Ti(i),t,e),tr(i,t,e,n,s,r,2)):o===2&&z_(i,t,e,n,s,r):tr(Ti(i),t,e,n,s,r,1);break}}}function F_(i){let t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&os(s,a,r,l,o,c,p.x,p.y)&&fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function k_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=$l(f,p,t,e,n),b=$l(_,g,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&os(a,h,l,u,c,d,y.x,y.y)&&fe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&os(a,h,l,u,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&os(a,h,l,u,c,d,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&os(a,h,l,u,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function B_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Lo(s,r)&&Cu(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function z_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z_(o,a)){let l=Pu(o,a);o=Ti(o,o.next),l=Ti(l,l.next),tr(o,t,e,n,s,r,0),tr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function H_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ru(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Y_(c));for(s.sort(V_),r=0;r<s.length;r++)e=G_(s[r],e);return e}function V_(i,t){return i.x-t.x}function G_(i,t){let e=W_(i,t);if(!e)return t;let n=Pu(e,i);return Ti(n,n.next),Ti(e,e.next)}function W_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&os(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&X_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function X_(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function $_(i,t,e,n){let s=i;do s.z===0&&(s.z=$l(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,q_(s)}function q_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function $l(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Y_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function os(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Z_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!K_(i,t)&&(er(i,t)&&er(t,i)&&J_(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Lo(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Lo(i,t){return i.x===t.x&&i.y===t.y}function Cu(i,t,e,n){let s=Xr(fe(i,t,e)),r=Xr(fe(i,t,n)),o=Xr(fe(e,n,i)),a=Xr(fe(e,n,t));return!!(s!==r&&o!==a||s===0&&Wr(i,e,t)||r===0&&Wr(i,n,t)||o===0&&Wr(e,i,n)||a===0&&Wr(e,t,n))}function Wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xr(i){return i>0?1:i<0?-1:0}function K_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function J_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pu(i,t){let e=new ql(i.i,i.x,i.y),n=new ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kh(i,t,e,n){let s=new ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function j_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $s=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jh(t),jh(n,t);let o=t.length;e.forEach(Jh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,jh(n,e[l]);let a=O_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Rn=class i extends Xt{constructor(t=new gn([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Q_,y,x=!1,C,A,R,P;m&&(y=m.getSpacedPoints(h),x=!0,d=!1,C=m.computeFrenetFrames(h,!1),A=new L,R=new L,P=new L),d||(g=0,f=0,p=0,_=0);let S=a.extractPoints(c),v=S.shape,T=S.holes;if(!$s.isClockWise(v)){v=v.reverse();for(let j=0,rt=T.length;j<rt;j++){let I=T[j];$s.isClockWise(I)&&(T[j]=I.reverse())}}let O=$s.triangulateShape(v,T),B=v;for(let j=0,rt=T.length;j<rt;j++){let I=T[j];v=v.concat(I)}function X(j,rt,I){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,I)}let k=v.length,Z=O.length;function G(j,rt,I){let Tt,tt,xt,lt=j.x-rt.x,It=j.y-rt.y,gt=I.x-j.x,E=I.y-j.y,M=lt*lt+It*It,z=lt*E-It*gt;if(Math.abs(z)>Number.EPSILON){let q=Math.sqrt(M),Q=Math.sqrt(gt*gt+E*E),Y=rt.x-It/q,Mt=rt.y+lt/q,ht=I.x-E/Q,_t=I.y+gt/Q,Wt=((ht-Y)*E-(_t-Mt)*gt)/(lt*E-It*gt);Tt=Y+lt*Wt-j.x,tt=Mt+It*Wt-j.y;let et=Tt*Tt+tt*tt;if(et<=2)return new K(Tt,tt);xt=Math.sqrt(et/2)}else{let q=!1;lt>Number.EPSILON?gt>Number.EPSILON&&(q=!0):lt<-Number.EPSILON?gt<-Number.EPSILON&&(q=!0):Math.sign(It)===Math.sign(E)&&(q=!0),q?(Tt=-It,tt=lt,xt=Math.sqrt(M)):(Tt=lt,tt=It,xt=Math.sqrt(M/2))}return new K(Tt/xt,tt/xt)}let nt=[];for(let j=0,rt=B.length,I=rt-1,Tt=j+1;j<rt;j++,I++,Tt++)I===rt&&(I=0),Tt===rt&&(Tt=0),nt[j]=G(B[j],B[I],B[Tt]);let ot=[],pt,Pt=nt.concat();for(let j=0,rt=T.length;j<rt;j++){let I=T[j];pt=[];for(let Tt=0,tt=I.length,xt=tt-1,lt=Tt+1;Tt<tt;Tt++,xt++,lt++)xt===tt&&(xt=0),lt===tt&&(lt=0),pt[Tt]=G(I[Tt],I[xt],I[lt]);ot.push(pt),Pt=Pt.concat(pt)}for(let j=0;j<g;j++){let rt=j/g,I=f*Math.cos(rt*Math.PI/2),Tt=p*Math.sin(rt*Math.PI/2)+_;for(let tt=0,xt=B.length;tt<xt;tt++){let lt=X(B[tt],nt[tt],Tt);st(lt.x,lt.y,-I)}for(let tt=0,xt=T.length;tt<xt;tt++){let lt=T[tt];pt=ot[tt];for(let It=0,gt=lt.length;It<gt;It++){let E=X(lt[It],pt[It],Tt);st(E.x,E.y,-I)}}}let $t=p+_;for(let j=0;j<k;j++){let rt=d?X(v[j],Pt[j],$t):v[j];x?(R.copy(C.normals[0]).multiplyScalar(rt.x),A.copy(C.binormals[0]).multiplyScalar(rt.y),P.copy(y[0]).add(R).add(A),st(P.x,P.y,P.z)):st(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<k;rt++){let I=d?X(v[rt],Pt[rt],$t):v[rt];x?(R.copy(C.normals[j]).multiplyScalar(I.x),A.copy(C.binormals[j]).multiplyScalar(I.y),P.copy(y[j]).add(R).add(A),st(P.x,P.y,P.z)):st(I.x,I.y,u/h*j)}for(let j=g-1;j>=0;j--){let rt=j/g,I=f*Math.cos(rt*Math.PI/2),Tt=p*Math.sin(rt*Math.PI/2)+_;for(let tt=0,xt=B.length;tt<xt;tt++){let lt=X(B[tt],nt[tt],Tt);st(lt.x,lt.y,u+I)}for(let tt=0,xt=T.length;tt<xt;tt++){let lt=T[tt];pt=ot[tt];for(let It=0,gt=lt.length;It<gt;It++){let E=X(lt[It],pt[It],Tt);x?st(E.x,E.y+y[h-1].y,y[h-1].x+I):st(E.x,E.y,u+I)}}}$(),it();function $(){let j=s.length/3;if(d){let rt=0,I=k*rt;for(let Tt=0;Tt<Z;Tt++){let tt=O[Tt];Ct(tt[2]+I,tt[1]+I,tt[0]+I)}rt=h+g*2,I=k*rt;for(let Tt=0;Tt<Z;Tt++){let tt=O[Tt];Ct(tt[0]+I,tt[1]+I,tt[2]+I)}}else{for(let rt=0;rt<Z;rt++){let I=O[rt];Ct(I[2],I[1],I[0])}for(let rt=0;rt<Z;rt++){let I=O[rt];Ct(I[0]+k*h,I[1]+k*h,I[2]+k*h)}}n.addGroup(j,s.length/3-j,0)}function it(){let j=s.length/3,rt=0;yt(B,rt),rt+=B.length;for(let I=0,Tt=T.length;I<Tt;I++){let tt=T[I];yt(tt,rt),rt+=tt.length}n.addGroup(j,s.length/3-j,1)}function yt(j,rt){let I=j.length;for(;--I>=0;){let Tt=I,tt=I-1;tt<0&&(tt=j.length-1);for(let xt=0,lt=h+g*2;xt<lt;xt++){let It=k*xt,gt=k*(xt+1),E=rt+Tt+It,M=rt+tt+It,z=rt+tt+gt,q=rt+Tt+gt;Nt(E,M,z,q)}}}function st(j,rt,I){l.push(j),l.push(rt),l.push(I)}function Ct(j,rt,I){Dt(j),Dt(rt),Dt(I);let Tt=s.length/3,tt=b.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);Yt(tt[0]),Yt(tt[1]),Yt(tt[2])}function Nt(j,rt,I,Tt){Dt(j),Dt(rt),Dt(Tt),Dt(rt),Dt(I),Dt(Tt);let tt=s.length/3,xt=b.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Yt(xt[0]),Yt(xt[1]),Yt(xt[3]),Yt(xt[1]),Yt(xt[2]),Yt(xt[3])}function Dt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Yt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wl[s.type]().fromJSON(s)),new i(n,t.options)}},Q_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new K(r,o),new K(a,l),new K(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-u),new K(d,1-p),new K(_,1-m)]:[new K(a,1-l),new K(h,1-u),new K(f,1-p),new K(g,1-m)]}};function tx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ys=class i extends Xt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new L,p=new K;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<s;_++){let g=_*(n+1);for(let m=0;m<n;m++){let b=m+g,y=b,x=b+n+1,C=b+n+2,A=b+1;a.push(y,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var bo=class i extends Xt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let b=[],y=m/n,x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let A=C/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(A+x,1-y),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let y=h[m][b+1],x=h[m][b],C=h[m+1][b],A=h[m+1][b+1];(m!==0||o>0)&&f.push(y,x,A),(m!==n-1||l<Math.PI)&&f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Re=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function $r(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $c:r=t,a=2*e-n;break;case qc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:o=t,l=2*n-e;break;case qc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,b=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+b*o[c+C]+y*o[l+C]+x*o[u+C];return r}},Zl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Kl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jr:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=yl;var Ai=class extends _n{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=jr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends _n{};Jl.prototype.ValueTypeName="color";var jl=class extends _n{};jl.prototype.ValueTypeName="number";var Ql=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Mo=class extends _n{InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends _n{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=jr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends _n{};tc.prototype.ValueTypeName="vector";var ec=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},nx=new ec,nc=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ua=new Kt,Qh=new L,tu=new L,ic=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var sc=class extends ic{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wo=class extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Eo=class extends So{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var xc="\\[\\]\\.:\\/",ix=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",sx="[^"+xc.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",yc),ox=/(WCOD+)?/.source.replace("WCOD",sx),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),cx=new RegExp("^"+rx+ox+ax+lx+"$"),hx=["material","materials","bones","map"],rc=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=rc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sy=new Float32Array(1);var eu=new Kt,To=class{constructor(t,e,n=0,s=1/0){this.ray=new ri(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oc(t[s],this,n,e);return n.sort(nu),n}};function nu(i,t){return i.distance-t.distance}function oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)oc(r[o],t,e,!0)}}var ir=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ao=class extends pe{constructor(t=10,e=10,n=4473924,s=8947848){n=new Rt(n),s=new Rt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let _=d===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new Xt;h.setAttribute("position",new jt(l,3)),h.setAttribute("color",new jt(c,3));let u=new le({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ro=class extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);var Iu={type:"change"},bc={type:"start"},Du={type:"end"},Do=new ri,Lu=new hn,ux=Math.cos(70*xu.DEG2RAD),Se=new L,Ve=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vc=1e-6,Uo=class extends Ro{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new mn,this._lastTargetPosition=new L,this._quat=new mn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ir,this._sphericalDelta=new ir,this._scale=1,this._panOffset=new L,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new L,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fx.bind(this),this._onPointerDown=dx.bind(this),this._onPointerUp=px.bind(this),this._onContextMenu=bx.bind(this),this._onMouseWheel=_x.bind(this),this._onKeyDown=xx.bind(this),this._onTouchStart=yx.bind(this),this._onTouchMove=vx.bind(this),this._onMouseDown=mx.bind(this),this._onMouseMove=gx.bind(this),this._interceptControlDown=Mx.bind(this),this._interceptControlUp=Sx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Iu),this.update(),this.state=se.NONE}update(t=null){let e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Se.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Do.origin.copy(this.object.position),Do.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Do.direction))<ux?this.object.lookAt(this.target):(Lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Do.intersectPlane(Lu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vc||this._lastTargetPosition.distanceToSquared(this.target)>vc?(this.dispatchEvent(Iu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Se.copy(s).sub(this.target);let r=Se.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new K,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function dx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function px(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Du),this.state=se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(bc)}function gx(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _x(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(bc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Du))}function xx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function yx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(bc)}function vx(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function bx(i){this.enabled!==!1&&i.preventDefault()}function Mx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var No=class extends ve{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new K(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Ss=new L,Uu=new Kt,Nu=new Kt,Ou=new L,Fu=new L,Oo=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Uu.copy(_.matrixWorldInverse),Nu.multiplyMatrices(_.projectionMatrix,Uu),h(p,p,_),f(p)},this.setSize=function(p,_){n=p,s=_,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,g=p.children.length;_<g;_++)c(p.children[_])}function h(p,_,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Ss.setFromMatrixPosition(p.matrixWorld),Ss.applyMatrix4(Nu);let m=Ss.z>=-1&&Ss.z<=1&&p.layers.test(g.layers)===!0,b=p.element;b.style.display=m===!0?"":"none",m===!0&&(p.onBeforeRender(e,_,g),b.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Ss.x*r+r)+"px,"+(-Ss.y*o+o)+"px)",b.parentNode!==l&&l.appendChild(b),p.onAfterRender(e,_,g));let y={distanceToCameraSquared:u(g,p)};a.objects.set(p,y)}for(let m=0,b=p.children.length;m<b;m++)h(p.children[m],_,g)}function u(p,_){return Ou.setFromMatrixPosition(p.matrixWorld),Fu.setFromMatrixPosition(_.matrixWorld),Ou.distanceToSquared(Fu)}function d(p){let _=[];return p.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(p){let _=d(p).sort(function(m,b){if(m.renderOrder!==b.renderOrder)return b.renderOrder-m.renderOrder;let y=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(b).distanceToCameraSquared;return y-x}),g=_.length;for(let m=0,b=_.length;m<b;m++)_[m].element.style.zIndex=g-m}}};var Ge=class{constructor(t){this.view=t,this.group=new re,this.on=!0}get id(){return"feature"}get label(){return this.id}get title(){return""}available(){return!1}toolbar(){return[]}build(t){}update(t){}tick(t,e){}reset(){}dispose(){}onTap(t,e){return!1}onLongPress(t,e){return!1}get plan(){return this.view.plan}get settings(){return this.view.plan.settings}get states(){return this.view.getStates()||{}}};function xn(i,{cls:t="",interactive:e=!1}={}){let n=document.createElement("div");return n.className="card3d "+t,n.innerHTML=i,n.style.pointerEvents=e?"auto":"none",new No(n)}var Gt=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function Li(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,i),s.addColorStop(.35,"rgba(255,255,255,.35)"),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128),new Fe(e)}var tn=(i,t,e)=>Math.max(t,Math.min(e,i));var ku=i=>Math.max(0,Math.min(1,i)),wx={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.45},cloudy:{cloud:.85},rainy:{rain:.55,cloud:.9},pouring:{rain:1,cloud:1},snowy:{snow:.7,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:.9},hail:{rain:.8,snow:.3,cloud:1},lightning:{lightning:!0,cloud:.95},"lightning-rainy":{lightning:!0,rain:.8,cloud:1},fog:{fog:.8,cloud:.75},windy:{cloud:.3,wind:1},"windy-variant":{cloud:.7,wind:1},exceptional:{cloud:.6}},Ex={"km/h":1,"m/s":3.6,mph:1.609,kn:1.852,"ft/s":1.097,"mm/s":.0036};function Tx(i,t="km/h"){let e=Number(i);return Number.isFinite(e)?e*(Ex[String(t).toLowerCase()]??1):0}function Bu(i,t={},e=null){let n=wx[i]||{},s={rain:0,snow:0,fog:0,cloud:0,lightning:!1,windKmh:0,...n};return t.cloud_coverage!=null&&Number.isFinite(Number(t.cloud_coverage))&&(s.cloud=ku(Number(t.cloud_coverage)/100)),s.windKmh=Tx(t.wind_speed,t.wind_speed_unit),!s.windKmh&&n.wind&&(s.windKmh=35),s.windAngle=ku(s.windKmh/60)*35,s.windBearing=Number(t.wind_bearing)||0,s.night=i==="clear-night"||e?.state==="below_horizon",s.sunElevation=Number(e?.attributes?.elevation),s.sunAzimuth=Number(e?.attributes?.azimuth),s}function zu(i){return{sunny:"Sonnig","clear-night":"Klar",partlycloudy:"Teils bew\xF6lkt",cloudy:"Bew\xF6lkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee","snowy-rainy":"Schneeregen",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",fog:"Nebel",windy:"Windig","windy-variant":"Windig, bew\xF6lkt",exceptional:"Au\xDFergew\xF6hnlich"}[i]||i}function ws(i,t,e=0){let n=(e+i)*Math.PI/180,s=t*Math.PI/180;return{x:Math.sin(n)*Math.cos(s),y:Math.sin(s),z:-Math.cos(n)*Math.cos(s)}}function ai(i,{title:t,obj:e,fields:n,extra:s,note:r}){i.closeOverlay();let o=document.createElement("div");o.className="overlay",o.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,94%);max-height:84%;overflow:auto",i.shadowRoot.querySelector(".wrap").append(o),i._overlay=o;let a=!1,l=0,c=f=>f.split(".").reduce((p,_)=>p?.[_],e),h=(f,p)=>{let _=f.split("."),g=_.pop();_.reduce((m,b)=>m[b]??={},e)[g]=p},u=()=>{clearTimeout(l),l=setTimeout(()=>{i.rebuild3D(),i.draw2D()},250)},d=()=>{let f=Object.keys(i.getStates()||{}).sort();o.innerHTML=`<h4 style="margin:0 0 6px">${Gt(t)}</h4>
      <datalist id="set-ents">${f.map(p=>`<option value="${Gt(p)}">`).join("")}</datalist>
      ${r?`<div style="opacity:.7;font-size:12px;margin-bottom:6px">${r}</div>`:""}
      ${n.map(p=>{let _=c(p.k),g=`data-k="${p.k}" data-t="${p.t||"text"}"`;return p.t==="checkbox"?`<label style="display:flex;gap:6px;align-items:center"><input type="checkbox" ${g} ${_?"checked":""} style="width:auto">${Gt(p.l)}</label>`:p.t==="select"?`<label>${Gt(p.l)}</label><select ${g}>${p.o.map(m=>{let[b,y]=Array.isArray(m)?m:[m,m];return`<option value="${Gt(b)}" ${b===(_??"")?"selected":""}>${Gt(y)}</option>`}).join("")}</select>`:`<label>${Gt(p.l)}</label><input ${g} ${p.t==="entity"?'list="set-ents"':""} ${p.t==="number"?`type="number" step="${p.s||1}"`:""} value="${Gt(_??"")}" placeholder="${Gt(p.p||"")}">`}).join("")}
      <div class="extra" style="margin-top:8px"></div>
      <div style="display:flex;margin-top:10px"><span style="flex:1"></span><button id="set-close" class="on">Fertig</button></div>`,o.querySelectorAll("[data-k]").forEach(p=>{p.onchange=()=>{a||(i.pushUndo(),a=!0);let _=p.dataset.t,g=p.value.trim();_==="checkbox"?g=p.checked:_==="number"?g=g===""?null:+g:g===""&&(g=null),h(p.dataset.k,g),u()}}),o.querySelector("#set-close").onclick=()=>i.closeOverlay(),s?.(o.querySelector(".extra"),d,()=>{a||(i.pushUndo(),a=!0),u()})};d()}var Hu={rain:!0,snow:!0,lightning:!0,fog:!1,clouds:!0,sun:!0};function Ax(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");for(let e=0;e<14;e++){let n=40+Math.random()*176,s=50+Math.random()*40,r=22+Math.random()*30,o=t.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,256,128)}return new Fe(i)}function Rx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");return t.fillStyle="#e6ecff",t.beginPath(),t.arc(64,64,40,0,Math.PI*2),t.fill(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(84,56,36,0,Math.PI*2),t.fill(),new Fe(i)}var Fo=class extends Ge{get id(){return"weather"}get label(){return"\u2601 Wetter"}get title(){return"Wetter drau\xDFen: Regen, Schnee, Gewitter, Wolken, Sonne und Mond"}get settingsLabel(){return"\u2601 Wetter"}cfg(){return{...Hu,...this.settings.weather||{}}}openSettings(){let t=this.settings.weather={...Hu,...this.settings.weather||{}},e=Object.keys(this.states).filter(n=>n.startsWith("weather."));ai(this.view,{title:"\u2601 Wetter drau\xDFen",obj:t,note:"Die Wetter-Entit\xE4t steuert Regen, Schnee, Gewitter, Nebel und Wolken; Sonne und Mond kommen von sun.sun.",fields:[{k:"entity",l:"Wetter-Entit\xE4t",t:"select",o:[["","automatisch"],...e]},{k:"rain",l:"Regen",t:"checkbox"},{k:"snow",l:"Schnee",t:"checkbox"},{k:"lightning",l:"Gewitter und Blitze",t:"checkbox"},{k:"fog",l:"Nebel",t:"checkbox"},{k:"clouds",l:"Wolken und Abdunkeln",t:"checkbox"},{k:"sun",l:"Sonne und Mond",t:"checkbox"}]})}entity(){let t=this.states,e=this.cfg().entity;return e&&t[e]?e:Object.keys(t).find(n=>n.startsWith("weather."))||null}available(){return!!this.entity()}build(){let t=this.view,e=t.extent()||[0,0,10,10],n=t.cfg.quality==="tablet"?.3:1;this.center=new L((e[0]+e[2])/2,0,(e[1]+e[3])/2),this.box={x0:e[0]-14,x1:e[2]+14,z0:e[1]-14,z1:e[3]+14,top:26};let s=this.box.x1-this.box.x0,r=this.box.z1-this.box.z0,o=(h,u)=>h+Math.random()*(u-h);this.rainN=Math.round(2400*n),this.rainPos=new Float32Array(this.rainN*6),this.rainHead=new Float32Array(this.rainN*3),this.rainSpeed=new Float32Array(this.rainN);for(let h=0;h<this.rainN;h++)this.rainHead.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.rainSpeed[h]=o(16,24);let a=new Xt;a.setAttribute("position",new Te(this.rainPos,3).setUsage(pc)),a.setDrawRange(0,0),this.rain=new pe(a,new le({color:10275071,transparent:!0,opacity:.5,depthWrite:!1})),this.rain.frustumCulled=!1,this.snowN=Math.round(1800*n),this.snowPos=new Float32Array(this.snowN*3),this.snowPhase=new Float32Array(this.snowN);for(let h=0;h<this.snowN;h++)this.snowPos.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.snowPhase[h]=o(0,6.28);let l=new Xt;l.setAttribute("position",new Te(this.snowPos,3).setUsage(pc)),l.setDrawRange(0,0),this.snow=new xs(l,new Ei({size:.2,color:16777215,map:Li(),transparent:!0,depthWrite:!1,opacity:.9})),this.snow.frustumCulled=!1,this.bolt=new Ze(new Xt().setFromPoints(Array.from({length:9},()=>new L)),new le({color:15397631})),this.bolt.visible=!1,this.bolt.frustumCulled=!1,this.sunSprite=new je(new Ye({map:Li("rgba(255,244,200,1)"),color:16771496,transparent:!0,depthWrite:!1,blending:pn,fog:!1})),this.sunSprite.scale.setScalar(16),this.moonSprite=new je(new Ye({map:Rx(),transparent:!0,depthWrite:!1,fog:!1})),this.moonSprite.scale.setScalar(6),this.sunSprite.visible=this.moonSprite.visible=!1;let c=Ax();this.clouds=Array.from({length:9},()=>{let h=new je(new Ye({map:c,transparent:!0,depthWrite:!1,opacity:0,fog:!1}));return h.scale.set(o(26,40),o(10,16),1),h.position.set(o(this.box.x0-10,this.box.x1+10),o(24,36),o(this.box.z0-10,this.box.z1+10)),h.visible=!1,h}),this.group.add(this.rain,this.snow,this.bolt,this.sunSprite,this.moonSprite,...this.clouds),this.base={amb:t.ambient.intensity,dl:t.sunLight.intensity,bg:t.scene.background.clone(),fogNear:t.scene.fog.near,fogFar:t.scene.fog.far,dlPos:t.sunLight.position.clone(),dlColor:t.sunLight.color.clone()},this.flash=0,this.nextStrike=4,this.wx=0,this.wz=0,this.w=null,this.lit={amb:this.base.amb,dl:this.base.dl}}update(t){let e=this.entity();if(!e||!this.base)return;let n=t[e],s=this.cfg(),r=this.plan.site?.north??this.settings.north??0,o=this.w=Bu(n.state,n.attributes||{},t["sun.sun"]||null),a=this.view;this.rain.geometry.setDrawRange(0,s.rain?Math.round(this.rainN*o.rain)*2:0),this.snow.geometry.setDrawRange(0,s.snow?Math.round(this.snowN*o.snow):0);let l=Math.tan(o.windAngle*Math.PI/180),c=ws(o.windBearing+180,0,r);this.wx=c.x*l,this.wz=c.z*l;let h=!o.night,u=Number.isFinite(o.sunElevation)?o.sunElevation:h?40:-20,d=Number.isFinite(o.sunAzimuth)?o.sunAzimuth:180,f=62,p=(g,m)=>g.position.set(this.center.x+m.x*f,Math.max(4,m.y*f),this.center.z+m.z*f);this.sunSprite.visible=s.sun&&h&&u>-2,this.sunSprite.visible&&p(this.sunSprite,ws(d,Math.max(u,6),r)),this.sunSprite.material.opacity=1-o.cloud*.75,this.moonSprite.visible=s.sun&&o.night,this.moonSprite.visible&&p(this.moonSprite,ws(d+180,tn(-u+10,14,60),r)),this.moonSprite.material.opacity=1-o.cloud*.8,this.clouds.forEach((g,m)=>{let b=s.clouds&&m<Math.ceil(this.clouds.length*o.cloud);g.visible=b,g.material.opacity=b?.2+.35*o.cloud:0});let _=h?ws(d,Math.max(u,12),r):ws(d+180,35,r);a.sunLight.position.set(this.center.x+_.x*30,_.y*30,this.center.z+_.z*30),a.sunLight.color.set(h?16773592:8361430),this.target={amb:this.base.amb*(h?1:.75)*(1-.25*o.cloud),dl:this.base.dl*(h?1:.4)*(1-.7*o.cloud),fog:s.fog?o.fog:0,tint:a.theme==="neon"&&h?.55*(1-o.cloud*.6):0},a.setChip("weather",`${o.lightning?"\u26C8":o.rain?"\u{1F327}":o.snow?"\u2744":o.fog?"\u{1F32B}":h?o.cloud>.6?"\u2601":o.cloud>.25?"\u26C5":"\u2600":"\u{1F319}"} ${zu(n.state)}${n.attributes?.temperature!=null?` \xB7 ${n.attributes.temperature}\xB0`:""}${o.windKmh>=5?` \xB7 ${Math.round(o.windKmh)} km/h`:""}`)}tick(t){if(!this.w||!this.target)return;let e=this.view,n=this.w,s=this.cfg(),r=Math.min(1,t*1.5);if(this.lit.amb+=(this.target.amb-this.lit.amb)*r,this.lit.dl+=(this.target.dl-this.lit.dl)*r,s.lightning&&n.lightning&&(this.nextStrike-=t,this.nextStrike<=0)){this.flash=1,this.nextStrike=3+Math.random()*7;let h=this.box.x0+Math.random()*(this.box.x1-this.box.x0),u=this.box.z0+Math.random()*(this.box.z1-this.box.z0),d=this.bolt.geometry.attributes.position;for(let f=0;f<9;f++)d.setXYZ(f,h+(Math.random()-.5)*3*(f>0&&f<8?1:0),28-f*3.5,u+(Math.random()-.5)*3*(f>0&&f<8?1:0));d.needsUpdate=!0,this.bolt.visible=!0}this.flash=Math.max(0,this.flash-t*4),this.flash<.3&&(this.bolt.visible=!1),e.ambient.intensity=this.lit.amb+this.flash*1.4,e.sunLight.intensity=this.lit.dl+this.flash*1.8,e.scene.background.copy(this.base.bg).lerp(new Rt(1714765),this.target.tint).lerp(new Rt(14543103),this.flash*.5),this.target.fog>0?(e.scene.fog.near=this.base.fogNear*(1-.85*this.target.fog),e.scene.fog.far=this.base.fogFar*(1-.7*this.target.fog)):(e.scene.fog.near=this.base.fogNear,e.scene.fog.far=this.base.fogFar);let a=Math.round(this.rainN*n.rain);if(s.rain&&a){let u=this.wx,d=this.wz;for(let f=0;f<a;f++){let p=this.rainHead[f*3],_=this.rainHead[f*3+1],g=this.rainHead[f*3+2],m=this.rainSpeed[f]*t;_-=m,p+=u*m,g+=d*m,_<0&&(_=this.box.top,p=this.box.x0+Math.random()*(this.box.x1-this.box.x0),g=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.rainHead.set([p,_,g],f*3),this.rainPos.set([p,_,g,p-u*.7,_+.7,g-d*.7],f*6)}this.rain.geometry.attributes.position.needsUpdate=!0}let l=Math.round(this.snowN*n.snow);if(s.snow&&l){let h=performance.now()/1e3;for(let u=0;u<l;u++){let d=this.snowPos[u*3],f=this.snowPos[u*3+1],p=this.snowPos[u*3+2];f-=1.3*t,d+=(Math.sin(h*.7+this.snowPhase[u])*.5+this.wx*4)*t,p+=(Math.cos(h*.5+this.snowPhase[u])*.5+this.wz*4)*t,f<0&&(f=this.box.top,d=this.box.x0+Math.random()*(this.box.x1-this.box.x0),p=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.snowPos[u*3]=d,this.snowPos[u*3+1]=f,this.snowPos[u*3+2]=p}this.snow.geometry.attributes.position.needsUpdate=!0}let c=(.4+n.windKmh*.05)*t;this.clouds.forEach(h=>{h.visible&&(h.position.x+=c,h.position.x>this.box.x1+20&&(h.position.x=this.box.x0-20))})}reset(){let t=this.view;this.base&&(t.ambient.intensity=this.base.amb,t.sunLight.intensity=this.base.dl,t.sunLight.position.copy(this.base.dlPos),t.sunLight.color.copy(this.base.dlColor),t.scene.background.copy(this.base.bg),t.scene.fog.near=this.base.fogNear,t.scene.fog.far=this.base.fogFar,t.setChip("weather",""))}dispose(){this.reset(),this.base=null,this.w=null,this.target=null}};function Cx(i,t){if(t==null)return!1;let e=String(t).trim().toLowerCase();if(e==="")return!1;if(e==="*")return!0;let n=String(i??"").toLowerCase();return e.includes("*")?new RegExp("^"+e.split("*").map(r=>r.replace(/[.+?^${}()|[\]\\]/g,"\\$&")).join(".*")+"$").test(n):n===e||n.includes(e)}function ko(i,t,e){for(let n of i||[]){let s=t[n.entity||e];if(!s)continue;let r=n.attr?s.attributes?.[n.attr]:s.state;if(Cx(r,n.match))return n}return null}var Px=[["netflix","#e50914"],["youtube","#ff1a1a"],["prime","#00a8e1"],["amazon","#00a8e1"],["disney","#1b46c9"],["spotify","#1db954"],["plex","#e5a00d"],["kodi","#17b2e7"],["max","#5822b4"],["hbo","#5822b4"],["apple","#9aa0a6"],["twitch","#9146ff"],["tagesschau","#0a3a78"],["zdf","#fa7d19"],["ard","#0a56b8"],["rtl","#e30613"],["sky","#0072c9"],["dazn","#d6ff00"],["paramount","#0064ff"]];function Mc(i){let t=String(i||"").toLowerCase();return t&&Px.find(([e])=>t.includes(e))?.[1]||null}var Sc=i=>typeof i=="string"&&/^camera\.[\w]+$/.test(i);var Ix=["off","unavailable","unknown","standby","idle"],Bo=class extends Ge{get id(){return"screens"}build(t){this.items=(t.screens||[]).map(e=>({a:e,ctx:e.canvas.getContext("2d"),sig:""})),this.images=new Map,this.camTimer=0,this.bust=Date.now()}imageFor(t){if(!t)return null;let e=this.images.get(t);if(!e){let n=new Image;/^https?:\/\//i.test(t)&&!t.startsWith(location.origin)&&(n.crossOrigin="anonymous"),e={img:n,ok:!1},n.onload=()=>{e.ok=!0,this.items.forEach(s=>s.sig=""),this.update(this.states)},n.onerror=()=>{e.failed=!0},n.src=t,this.images.set(t,e)}return e.ok?e.img:null}model(t,e){let n=t.a.f,s=n.screen||{},r=s.entity||n.entity||null,o=r?e[r]:null,a=o?!Ix.includes(o.state):!1,l=ko(s.rules,e,r),c=l?.bg||s.bg||"dark";if(l?.image){let h=l.image,u=Sc(h);if(u){let d=e[h]?.attributes?.entity_picture;h=d?`${d}${d.includes("?")?"&":"?"}_=${this.bust}`:null}return{mode:"rule",bg:c,src:h,cam:u,key:`rule|${c}|${h}`}}if(o&&a){let h=o.attributes?.entity_picture,u=o.attributes?.app_name||o.attributes?.source||o.attributes?.media_title||"";if(o.state==="playing"&&h)return{mode:"art",bg:c,src:h,tint:Mc(u),key:`art|${h}|${u}`};let d=Mc(u)||"#2d6cff";return{mode:"app",bg:c,tint:d,text:u,key:`app|${d}|${u}|${o.state}`}}return a?{mode:"on",bg:c,key:"on"}:{mode:"off",bg:c,key:"off"}}update(t){if(this.items)for(let e of this.items){let n=this.model(e,t);n.key!==e.sig&&(e.sig=n.key,this.draw(e,n))}}tick(t){!this.items?.length||(this.camTimer+=t,this.camTimer<5)||(this.camTimer=0,!this.items.some(n=>(n.a.f.screen?.rules||[]).some(s=>Sc(s.image))))||(this.bust=Date.now(),this.images.forEach((n,s)=>{s.includes("_=")&&this.images.delete(s)}),this.items.forEach(n=>{n.sig.startsWith("rule|")&&n.sig.includes("_=")&&(n.sig="")}),this.update(this.states))}draw(t,e){let{ctx:n}=t,s=t.a.canvas.width,r=t.a.canvas.height,o=e.bg!=="white";n.clearRect(0,0,s,r);let a=c=>{n.fillStyle=c,n.fillRect(0,0,s,r)},l=(c,h=.12,u=!1)=>{let d=c.naturalWidth||c.width,f=c.naturalHeight||c.height,p=s*(1-h*2),_=r*(1-h*2),g=u?Math.max(s/d,r/f):Math.min(p/d,_/f),m=d*g,b=f*g;n.drawImage(c,(s-m)/2,(r-b)/2,m,b)};if(e.mode==="off"){a("#04060b");let c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,"rgba(255,255,255,.07)"),c.addColorStop(.4,"rgba(255,255,255,0)"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="on"){let c=n.createLinearGradient(0,0,0,r);c.addColorStop(0,"#2a3f8f"),c.addColorStop(1,"#0b1330"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="app"){a("#05070d");let c=n.createRadialGradient(s/2,r/2,10,s/2,r/2,s*.6);c.addColorStop(0,e.tint),c.addColorStop(1,"#05070d"),n.fillStyle=c,n.fillRect(0,0,s,r),e.text&&(n.fillStyle="#fff",n.font=`bold ${Math.round(r*.16)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(e.text,s/2,r/2,s*.86))}else if(e.mode==="art"){a("#05070d"),e.tint&&(n.fillStyle=e.tint,n.globalAlpha=.28,n.fillRect(0,0,s,r),n.globalAlpha=1);let c=this.imageFor(e.src);c&&l(c,.06)}else if(e.mode==="rule"){a(o?"#05070d":"#f4f6fb");let c=this.imageFor(e.src);c&&l(c,e.cam?0:.14,e.cam)}n.strokeStyle="rgba(255,255,255,.12)",n.lineWidth=3,n.strokeRect(1.5,1.5,s-3,r-3),t.a.tex.needsUpdate=!0}dispose(){this.items=null}};var nn=()=>Math.random().toString(36).slice(2,9),rr=(i,t=.25)=>Math.round(i/t)*t,ke=i=>(i||"").split(".")[0],zo=i=>JSON.parse(JSON.stringify(i)),xe=i=>i*Math.PI/180;function en(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}function Di(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function Es(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?((i[0]-t[0])*n+(i[1]-t[1])*s)/r:0;o=Math.max(0,Math.min(1,o));let a=[t[0]+o*n,t[1]+o*s];return{d:Math.hypot(i[0]-a[0],i[1]-a[1]),q:a,t:o}}function Ho(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return Math.abs(t/2)}function li(i){let t=0,e=0,n=0;for(let u=0;u<i.length;u++){let[d,f]=i[u],[p,_]=i[(u+1)%i.length],g=d*_-p*f;t+=g,e+=(d+p)*g,n+=(f+_)*g}let[s,r,o,a]=Di(i);if(Math.abs(t)<1e-9)return[(s+o)/2,(r+a)/2];let l=[e/(3*t),n/(3*t)];if(en(l,i))return l;let c=null,h=1/0;for(let u=s;u<=o;u+=.1)for(let d=r;d<=a;d+=.1){let f=Math.hypot(u-l[0],d-l[1]);f<h&&en([u,d],i)&&(h=f,c=[u,d])}return c||l}function wc(i,t,e){let n=xe(i.rot||0),s=Math.cos(n),r=Math.sin(n);return[i.x+t*s-e*r,i.z+t*r+e*s]}function Vo(i){let t=(i.w||.5)/2,e=(i.d||.5)/2;return[[-t,-e],[t,-e],[t,e],[-t,e]].map(([n,s])=>wc(i,n,s))}function Lx(i){let t=[...new Map(i.map(r=>[r.join(","),r])).values()].sort((r,o)=>r[0]-o[0]||r[1]-o[1]);if(t.length<3)return t;let e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}let s=[];for(let r of[...t].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function Vu(i){let t=Lx(i),e=null;for(let _=0;_<t.length;_++){let g=t[_],m=t[(_+1)%t.length],b=Math.atan2(m[1]-g[1],m[0]-g[0]),y=Math.cos(-b),x=Math.sin(-b),C=1/0,A=-1/0,R=1/0,P=-1/0;for(let v of t){let T=v[0]*y-v[1]*x,F=v[0]*x+v[1]*y;C=Math.min(C,T),A=Math.max(A,T),R=Math.min(R,F),P=Math.max(P,F)}let S=(A-C)*(P-R);(!e||S<e.area-1e-9)&&(e={area:S,ang:b,x0:C,x1:A,z0:R,z1:P})}let{ang:n,x0:s,x1:r,z0:o,z1:a}=e,l=(s+r)/2,c=(o+a)/2,h=Math.cos(n),u=Math.sin(n),d=r-s,f=a-o,p=n;return f>d&&([d,f]=[f,d],p+=Math.PI/2),{cx:l*h-c*u,cz:l*u+c*h,len:d,wid:f,ang:p}}function Gu(i=0){let t=i*Math.PI/180;return{north:[Math.sin(t),-Math.cos(t)],south:[-Math.sin(t),Math.cos(t)],east:[Math.cos(t),Math.sin(t)],west:[-Math.cos(t),-Math.sin(t)]}}var Wu="playing",Go=class extends Ge{get id(){return"sound"}get label(){return"\u{1F50A} Sound"}get title(){return"Wiedergabe: Karten, Klangringe, Multiroom; langes Dr\xFCcken \xF6ffnet das Men\xFC"}get usesHolo(){return!0}available(){return!!this.players?.length}build(t){this.players=[];let e=new Set,n=(r,o,a,l,c)=>{!r||ke(r)!=="media_player"||e.has(r)||(e.add(r),this.players.push({entity:r,x:o,y:a,z:l,floor:c}))};t.devices.forEach(r=>n(r.entity,r.x,r.y,r.z,r.floor)),t.furniture.forEach(r=>n(r.f.entity,r.x,r.top+.05,r.z,r.floor));let s=r=>new Oe({color:r,transparent:!0,opacity:0,side:de,depthWrite:!1});this.players.forEach(r=>{r.root=new re,r.root.position.set(r.x,r.y,r.z),r.rings=[0,1,2].map(()=>{let o=new Vt(new ys(.94,1,56),s(16722902));return o.rotation.x=-Math.PI/2,o.visible=!1,r.root.add(o),o}),r.card=xn(this.cardHtml(r),{cls:"np",interactive:!0}),r.card.position.set(0,.55,0),r.card.visible=!1,r.card.element.addEventListener("click",o=>this.cardClick(r,o)),r.card.element.addEventListener("change",o=>this.cardClick(r,o)),r.root.add(r.card),this.group.add(r.root)}),this.lines=new pe(new Xt,new le({color:16722902,transparent:!0,opacity:.7})),this.lines.frustumCulled=!1,this.group.add(this.lines),this.phase=0}cardHtml(t){return`<div class="np"><img alt=""><div><div class="t"><b data-t></b></div><div class="sub" data-s></div>
      <div class="ctl"><button data-a="prev">\u23EE</button><button data-a="play">\u23EF</button><button data-a="next">\u23ED</button>
      <input type="range" min="0" max="100" data-a="vol" title="Lautst\xE4rke"></div></div></div>`}cardClick(t,e){let n=e.target.closest?.("[data-a]");if(!n)return;e.stopPropagation();let s={prev:"media_previous_track",play:"media_play_pause",next:"media_next_track"}[n.dataset.a];s&&e.type==="click"&&this.view.hass.callService("media_player",s,{entity_id:t.entity}),n.dataset.a==="vol"&&e.type==="change"&&this.view.hass.callService("media_player","volume_set",{entity_id:t.entity,volume_level:+n.value/100})}update(t){if(!this.players)return;let e=this.view.holo!==!1,n=0,s=[];this.players.forEach(a=>{let l=t[a.entity];a.playing=l?.state===Wu,a.vol=tn(Number(l?.attributes?.volume_level??.35),0,1),a.members=l?.attributes?.group_members||[],a.rings.forEach(h=>{h.visible=a.playing});let c=e&&a.playing&&n<3;if(a.card.visible=c,c&&n++,l&&c){let h=l.attributes||{},u=[l.state,h.media_title,h.media_artist,h.entity_picture,h.friendly_name].join("|");if(u!==a.sig){a.sig=u;let f=a.card.element;f.querySelector("[data-t]").textContent=h.media_title||h.friendly_name||a.entity,f.querySelector("[data-s]").textContent=[h.media_artist,h.friendly_name].filter(Boolean).join(" \xB7 ");let p=f.querySelector("img");p.style.display=h.entity_picture?"":"none",h.entity_picture&&(p.src=h.entity_picture)}let d=a.card.element.querySelector("[data-a=vol]");d&&document.activeElement!==d&&(d.value=Math.round(a.vol*100))}a.playing&&s.push(a)});let r=[],o=new Set;this.players.forEach(a=>{a.members.forEach(l=>{let c=this.players.find(u=>u.entity===l);if(!c||c===a||a.floor!==c.floor)return;let h=[a.entity,c.entity].sort().join("|");o.has(h)||(o.add(h),r.push(new L(a.x,a.y,a.z),new L(c.x,c.y,c.z)))})}),this.lines.geometry.setFromPoints(r),this.lines.visible=r.length>0,this.menu&&this.refreshMenu()}tick(t){this.players&&(this.phase=(this.phase+t*.55)%1,this.players.forEach(e=>{if(!e.playing)return;let n=.35+e.vol*1.25;e.rings.forEach((s,r)=>{let o=(this.phase+r/3)%1;s.scale.setScalar(.2+o*n),s.material.opacity=(1-o)*(.35+.5*e.vol)})}))}onLongPress(t){return!t?.entity||ke(t.entity)!=="media_player"?!1:(this.openMenu(t.entity),!0)}closeMenu(){this.menu?.box.remove(),this.menu=null}openMenu(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(460px,94%);max-height:70%;overflow:auto",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e,this.menu={entity:t,box:e,mode:"main",stack:[],list:null,sig:""};let n=e.remove.bind(e);e.remove=()=>{n(),this.menu?.box===e&&(this.menu=null)},this.refreshMenu(!0)}refreshMenu(t=!1){let e=this.menu;if(!e)return;let n=this.states[e.entity];if(!n)return;let s=n.attributes||{},r=[e.mode,n.state,s.media_title,s.media_artist,s.entity_picture,s.source,s.is_volume_muted,e.list?.title].join("|");if(!t&&r===e.sig)return;e.sig=r;let o=(l,c={})=>this.view.hass.callService("media_player",l,{entity_id:e.entity,...c});if(e.mode==="browse")return this.renderBrowse();let a=s.source_list||[];e.box.innerHTML=`
      <div style="display:flex;gap:10px;align-items:center">
        ${s.entity_picture?`<img src="${Gt(s.entity_picture)}" style="width:64px;height:64px;border-radius:8px;object-fit:cover">`:""}
        <div style="flex:1;min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Gt(s.media_title||s.friendly_name||e.entity)}</b>
        <span style="opacity:.7">${Gt([s.media_artist,s.friendly_name,n.state].filter(Boolean).join(" \xB7 "))}</span></div>
        <button data-a="x" title="Schlie\xDFen">\u2715</button></div>
      <div style="display:flex;gap:6px;align-items:center;margin:10px 0">
        <button data-a="prev">\u23EE</button><button data-a="play" class="on">${n.state===Wu?"\u23F8":"\u25B6"}</button><button data-a="next">\u23ED</button>
        <button data-a="mute">${s.is_volume_muted?"\u{1F507}":"\u{1F508}"}</button>
        <input type="range" min="0" max="100" value="${Math.round((s.volume_level??0)*100)}" data-a="vol" style="flex:1">
      </div>
      <div style="display:flex;gap:6px">
        ${a.length?`<select data-a="src" style="flex:1"><option value="">Quelle \u2026</option>${a.map(l=>`<option ${l===s.source?"selected":""}>${Gt(l)}</option>`).join("")}</select>`:""}
        <button data-a="browse" style="flex:1">\u25B6 Abspielen \u2026</button>
        <button data-a="info">\u2139</button>
      </div>`,e.box.onclick=l=>{let c=l.target.closest("[data-a]");if(!c)return;let h=c.dataset.a;h==="x"?this.view.closeOverlay():h==="prev"?o("media_previous_track"):h==="next"?o("media_next_track"):h==="play"?o("media_play_pause"):h==="mute"?o("volume_mute",{is_volume_muted:!s.is_volume_muted}):h==="info"?(this.view.closeOverlay(),this.view.moreInfo(e.entity)):h==="browse"&&(e.mode="browse",e.stack=[],this.browse())},e.box.onchange=l=>{let c=l.target.closest("[data-a]");c?.dataset.a==="vol"&&o("volume_set",{volume_level:+c.value/100}),c?.dataset.a==="src"&&c.value&&o("select_source",{source:c.value})}}async browse(t,e){let n=this.menu;if(n){try{let s={type:"media_player/browse_media",entity_id:n.entity};t!=null&&(s.media_content_id=t,s.media_content_type=e),n.list=await this.view.hass.callWS(s),n.err=null}catch(s){n.err=s.message||"Durchsuchen nicht m\xF6glich",n.list=null}this.renderBrowse()}}renderBrowse(){let t=this.menu;if(!t)return;let e=t.list;t.box.innerHTML=`<div style="display:flex;gap:6px;align-items:center;margin-bottom:8px">
      <button data-a="back">\u2190</button><b style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Gt(e?.title||"Medien")}</b><button data-a="x">\u2715</button></div>
      ${t.err?`<div style="opacity:.7">${Gt(t.err)}</div>`:""}
      <div>${(e?.children||[]).map((n,s)=>`<div class="dev" data-i="${s}"><div style="display:flex;gap:8px;align-items:center;min-width:0">
        ${n.thumbnail?`<img src="${Gt(n.thumbnail)}" style="width:36px;height:36px;border-radius:5px;object-fit:cover">`:`<span style="width:36px;text-align:center">${n.can_expand?"\u{1F4C1}":"\u266A"}</span>`}
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Gt(n.title)}</span></div>
        <span>${n.can_play?`<button data-play="${s}" title="Abspielen">\u25B6</button>`:""}${n.can_expand?"\u203A":""}</span></div>`).join("")||(t.err?"":"<div style='opacity:.7'>Leer</div>")}</div>`,t.box.onclick=n=>{let s=n.target.closest("[data-a]")?.dataset.a;if(s==="x")return this.view.closeOverlay();if(s==="back"){let l=t.stack.pop();return l?this.browse(l.id,l.type):(t.mode="main",this.refreshMenu(!0))}let r=n.target.closest("[data-play]")?.dataset.play,o=r??n.target.closest("[data-i]")?.dataset.i;if(o==null)return;let a=e.children[+o];if(r!=null||a.can_play&&!a.can_expand)return this.view.hass.callService("media_player","play_media",{entity_id:t.entity,media_content_id:a.media_content_id,media_content_type:a.media_content_type}),t.mode="main",this.refreshMenu(!0);a.can_expand&&(t.stack.push({id:e.media_content_id,type:e.media_content_type}),this.browse(a.media_content_id,a.media_content_type))},t.box.onchange=null}reset(){this.closeMenu()}dispose(){this.closeMenu(),this.players=null}};var Xu=i=>Number.isFinite(Number(i))?Number(i):null;function $u(i,t){let e=(s,r=!1)=>{let o=s?t[s]:null;if(!o)return null;let a=Xu(o.state);if(a==null)return null;let l=String(o.attributes?.unit_of_measurement||"W").toLowerCase();return l==="kw"?a*=1e3:l==="mw"&&(a*=1e6),r?-a:a},n=i.battery_soc&&t[i.battery_soc]?Xu(t[i.battery_soc].state):null;return{solar:e(i.solar),grid:e(i.grid,!!i.grid_invert),battery:e(i.battery,!!i.battery_invert),consumption:e(i.consumption),wallbox:e(i.wallbox),soc:n}}function qu(i){let t=Math.max(0,i.solar??0),e=i.battery??0,n=i.grid??(i.consumption!=null?i.consumption-t-e:0),s=i.consumption!=null?Math.max(0,i.consumption):Math.max(0,t+n+e),r=Math.max(0,-e),o=Math.max(0,e),a=Math.min(t,s),l=t-a,c=Math.min(l,r),h=Math.max(0,Math.min(l-c,Math.max(0,-n)||l-c)),u=Math.max(0,n),d=Math.max(0,r-c),f=o,p=s>0?Math.max(0,Math.min(1,1-u/s)):1;return{S:t,H:s,g:n,b:e,s2h:a,s2b:c,s2g:h,g2h:u,g2b:d,b2h:f,autarky:p,import:u,export:Math.max(0,-n)}}function Ui(i){return Math.abs(i)>=1e3?`${(i/1e3).toFixed(2).replace(".",",")} kW`:`${Math.round(i)} W`}function Yu(i){return Math.max(.25,Math.min(2.6,.25+Math.log10(1+Math.abs(i))*.65))}function Zu(i){let t={};for(let e of i?.energy_sources||[]){let n=e.stat_rate||e.power?.[0]?.stat_rate||e.power_config?.stat_rate||null;n&&(e.type==="solar"&&!t.solar&&(t.solar=n),e.type==="grid"&&!t.grid&&(t.grid=n),e.type==="battery"&&!t.battery&&(t.battery=n))}return t}function Ku(i){let t={};for(let[e,n]of Object.entries(i||{}))t[e]=(n||[]).map(s=>{let r=s.lu??s.lc;return{t:r!=null?r*1e3:Date.parse(s.last_updated||s.last_changed||0),s:s.s??s.state,a:s.a??s.attributes??null}}).filter(s=>Number.isFinite(s.t)).sort((s,r)=>s.t-r.t);return t}function Ju(i){return(i||[]).map(t=>({t:t.t,v:Number(t.s)})).filter(t=>Number.isFinite(t.v))}function ju(i,t,e){let n=0;for(let s=0;s<i.length;s++){let r=Math.max(i[s].t,t),o=Math.min(s+1<i.length?i[s+1].t:e,e);o>r&&(n+=Math.max(0,i[s].v)*((o-r)/36e5))}return n/1e3}function Qu(i,t,e,n){let s=new Array(n).fill(null),r=0,o=null;for(let a=0;a<n;a++){let l=t+(e-t)*(a+.5)/n;for(;r<i.length&&i[r].t<=l;)o=i[r].v,r++;s[a]=o}return s}async function Wo(i,t,e,n,{attrs:s=!1}={}){let r=[...new Set(t.filter(Boolean))];if(!r.length)return{};let o=await i.callWS({type:"history/history_during_period",start_time:e.toISOString(),end_time:n.toISOString(),entity_ids:r,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!s,no_attributes:!s});return Ku(o)}var Ni={solar:16765286,import:4891647,export:8116367,discharge:65437,charge:16722902,wallbox:1697535},yn=(i,t,e)=>new L(i,t,e),Xo=class extends Ge{get id(){return"energy"}get label(){return"\u26A1 Energie"}get title(){return"Energiefluss: Kabel mit Leistungspunkten, leuchtende Solarmodule, Hologramm"}get usesHolo(){return!0}get settingsLabel(){return"\u26A1 Energie"}cfg(){return{hide_below_w:5,device_cards:!0,...this.settings.energy||{}}}effective(){let t=this.cfg();return{...t,solar:t.solar||this.pvEntity||null,consumption:t.consumption||this.meterPower||null}}available(){let t=this.effective();return!!(t.solar||t.grid||t.battery||t.consumption)}build(t){this.anchors=t,this.pvEntity=t.pv.find(g=>g.entity)?.entity||null,this.meterPower=t.furniture.find(g=>g.f.type==="meter"&&g.f.power)?.f.power||null;let e=t.pv.some(g=>g.entity),n=t.pv.filter(g=>!e||g.entity),s=g=>g.pos||g.mesh.position,r=g=>t.furniture.find(m=>m.f.type===g),o=g=>g?yn(g.x,(g.y+g.top)/2,g.z):null,a=t.rooms.filter(g=>g.elev<=.3),l=a.length?a:t.rooms,c=r("meter"),h=r("grid_point")||c,u=l.length?yn(l.reduce((g,m)=>g+m.x,0)/l.length,1.2,l.reduce((g,m)=>g+m.z,0)/l.length):yn(0,1.2,0);this.nodes={house:o(c)||u};let d=this.view.extent()||[0,0,10,10];if(this.nodes.grid=o(h)||yn(d[0]-4,1,(d[1]+d[3])/2),n.length){let g=n.reduce((m,b)=>m.add(s(b)),yn(0,0,0)).multiplyScalar(1/n.length);this.nodes.solar=g.add(yn(0,.25,0))}else this.nodes.solar=o(r("inverter"));this.nodes.battery=o(r("battery")),this.nodes.wallbox=o(r("wallbox"));let f=Math.max(...t.rooms.map(g=>g.elev+2.8),...n.map(g=>s(g).y),3);this.nodes.holo=yn(this.nodes.house.x,f+1.4,this.nodes.house.z),this.edges=[];let p=Li(),_=(g,m,b)=>{if(!m||!b)return;let y=this.route(m,b),x=new Ze(new Xt().setFromPoints(y.pts),new le({color:3820152,transparent:!0,opacity:.45})),C=Math.max(6,Math.round(y.len*1.1)),A=new xs(new Xt().setAttribute("position",new Te(new Float32Array(C*3),3)),new Ei({size:.34,map:p,color:Ni.solar,transparent:!0,depthWrite:!1,blending:pn}));A.frustumCulled=!1,A.visible=!1,this.group.add(x,A),this.edges.push({key:g,path:y,line:x,dots:A,n:C,u:0,dir:1,w:0})};_("solar",this.nodes.solar,this.nodes.house),_("grid",this.nodes.grid,this.nodes.house),_("battery",this.nodes.battery,this.nodes.house),_("wallbox",this.nodes.house,this.nodes.wallbox),this.pvTex=(()=>{let g=document.createElement("canvas");g.width=4,g.height=64;let m=g.getContext("2d"),b=m.createLinearGradient(0,0,0,64);b.addColorStop(0,"#102040"),b.addColorStop(.5,"#9fd0ff"),b.addColorStop(1,"#102040"),m.fillStyle=b,m.fillRect(0,0,4,64);let y=new Fe(g);return y.wrapT=qs,y})(),this.pvMats=[...new Set(n.map(g=>g.mat))],this.pvMats.forEach(g=>{g.emissiveMap=this.pvTex,g.emissive.set(16777215),g.emissiveIntensity=.12,g.needsUpdate=!0}),this.pvWp=n.reduce((g,m)=>g+(m.wp||400),0)||400,this.level=0,this.holo=xn('<div class="en"><b>\u26A1 Energie</b><div data-rows></div><canvas data-spark width="220" height="40"></canvas></div>',{cls:"holo"}),this.holo.position.copy(this.nodes.holo),this.group.add(this.holo),this.holo.visible=!1,this.devCards=t.furniture.filter(g=>g.f.power).map(g=>{let m=xn("<span>\u26A1 <b>\u2013 W</b></span>",{cls:"pw"});return m.position.set(g.x,g.top+.45,g.z),m.visible=!1,this.group.add(m),{a:g,c:m,sig:""}}),this._html=null,this.curveTimer=0,this.loadCurve()}route(t,e){let n=Math.max(t.y,e.y)+.35,s=[t.clone(),yn(t.x,n,t.z),yn(e.x,n,t.z),yn(e.x,n,e.z),e.clone()],r=s.filter((a,l)=>l===0||a.distanceTo(s[l-1])>.001),o=[0];for(let a=1;a<r.length;a++)o.push(o[a-1]+r[a].distanceTo(r[a-1]));return{pts:r,cum:o,len:o[o.length-1]||1}}at(t,e,n){let{pts:s,cum:r}=t,o=1;for(;o<r.length-1&&r[o]<e;)o++;let a=(e-r[o-1])/Math.max(1e-6,r[o]-r[o-1]);return n.copy(s[o-1]).lerp(s[o],tn(a,0,1))}async loadCurve(){let t=this.effective();if(!(!t.solar||!this.view.hass?.callWS))try{let e=new Date,n=new Date(e);n.setHours(0,0,0,0);let s=await Wo(this.view.hass,[t.solar],n,e),r=Ju(s[t.solar]).map(o=>({...o,v:this.unitW(t.solar,o.v)}));this.curve=Qu(r,n.getTime(),n.getTime()+864e5,48),this.nowBucket=Math.min(47,Math.floor((e-n)/864e5*48)),this.yieldKwh=ju(r,n.getTime(),e.getTime()),this.drawCurve(),this.update(this.states)}catch{}}unitW(t,e){return String(this.states[t]?.attributes?.unit_of_measurement||"W").toLowerCase()==="kw"?e*1e3:e}drawCurve(){let t=this.holo?.element.querySelector("[data-spark]");if(!t||!this.curve)return;let e=t.getContext("2d"),n=t.width,s=t.height;e.clearRect(0,0,n,s);let r=Math.max(1,...this.curve.map(a=>a||0)),o=n/this.curve.length;this.curve.forEach((a,l)=>{if(a==null)return;let c=Math.max(1,a/r*(s-4));e.fillStyle=l===this.nowBucket?"#ffd166":"rgba(255,209,102,.55)",e.fillRect(l*o,s-c,o-1,c)})}update(t){if(!this.edges)return;let e=this.effective(),n=this.p=$u(e,t),s=this.f=qu(n),r=(u,d,f,p)=>{let _=this.edges.find(g=>g.key===u);_&&(_.w=d,_.dir=f,_.dots.visible=d>=10,_.dots.material.color.setHex(p),_.line.material.color.setHex(d>=10?p:3820152),_.line.material.opacity=d>=10?.75:.35)};r("solar",s.S,1,Ni.solar),r("grid",Math.abs(s.g),s.g>=0?1:-1,s.g>=0?Ni.import:Ni.export),r("battery",Math.abs(s.b),s.b>=0?1:-1,s.b>=0?Ni.discharge:Ni.charge),r("wallbox",Math.max(0,n.wallbox??0),1,Ni.wallbox),this.level=tn(s.S/this.pvWp,0,1);let o=this.view.holo!==!1,a=(u,d,f,p="")=>`<div class="r"><span>${u} ${d}</span><b>${f}</b>${p?`<span class="sub">${p}</span>`:""}</div>`,l=[];(n.solar!=null||this.pvEntity)&&l.push(a("\u2600","PV",Ui(s.S),this.yieldKwh!=null?`heute ${this.yieldKwh.toFixed(1).replace(".",",")} kWh`:"")),l.push(a("\u{1F3E0}","Haus",Ui(s.H))),(n.grid!=null||n.consumption!=null)&&l.push(a("\u{1F50C}","Netz",Ui(Math.abs(s.g)),s.g>10?"Bezug":s.g<-10?"Einspeisung":"")),(n.battery!=null||n.soc!=null)&&l.push(a("\u{1F50B}",n.soc!=null?`${Math.round(n.soc)} %`:"Akku",Ui(Math.abs(s.b)),s.b>10?"entl\xE4dt":s.b<-10?"l\xE4dt":"")),n.wallbox!=null&&n.wallbox>10&&l.push(a("\u{1F697}","Wallbox",Ui(n.wallbox))),s.H>0&&l.push(a("\u{1F331}","Autarkie",`${Math.round(s.autarky*100)} %`));for(let[u,d,f]of[["gas","\u{1F525}","Gas"],["water","\u{1F4A7}","Wasser"]]){let p=e[u]?t[e[u]]:null;p&&p.state!=="unavailable"&&l.push(a(d,f,`${Gt(p.state)} ${Gt(p.attributes?.unit_of_measurement||"")}`))}let c=l.join(""),h=this.holo.element;c!==this._html&&(this._html=c,h.querySelector("[data-rows]").innerHTML=c),this.holo.visible=o&&l.length>0,h.querySelector("[data-spark]").style.display=this.curve?"":"none",this.devCards.forEach(u=>{let d=t[u.a.f.power],f=d?parseFloat(d.state):NaN,p=Number.isFinite(f)?this.unitW(u.a.f.power,f):null;u.c.visible=e.device_cards!==!1&&o&&p!=null&&Math.abs(p)>=(e.hide_below_w??5);let _=p==null?"":Ui(p);_!==u.sig&&(u.sig=_,u.c.element.querySelector("b").textContent=_)})}tick(t){if(!this.edges)return;let e=yn(0,0,0);for(let n of this.edges){if(!n.dots.visible)continue;n.u=(n.u+n.dir*Yu(n.w)*t/n.path.len+1)%1;let s=n.dots.geometry.attributes.position;for(let r=0;r<n.n;r++){let o=((n.u+r/n.n)%1+1)%1;this.at(n.path,o*n.path.len,e),s.setXYZ(r,e.x,e.y,e.z)}s.needsUpdate=!0}this.level>.01&&(this.pvTex.offset.y=(this.pvTex.offset.y-t*(.15+1.4*this.level))%1),this.pvMats.forEach(n=>{n.emissiveIntensity=.1+1.2*this.level}),this.curveTimer+=t,this.curveTimer>300&&(this.curveTimer=0,this.loadCurve())}reset(){(this.pvMats||[]).forEach(t=>{t.emissiveMap=null,t.emissive.set(2059263),t.emissiveIntensity=.15,t.needsUpdate=!0})}dispose(){this.reset(),this.edges=null,this.pvMats=[]}openSettings(){let t=this.settings.energy||={};ai(this.view,{title:"\u26A1 Energie einrichten",obj:t,note:"Leistungs-Sensoren in Watt. Netz: Bezug positiv. Akku: Entladen positiv. Mit \u201Eumkehren\u201C drehst du das Vorzeichen um. Kabel und Karte brauchen mindestens PV, Netz oder Verbrauch.",fields:[{k:"solar",l:"PV-Leistung",t:"entity"},{k:"grid",l:"Netz-Leistung",t:"entity"},{k:"grid_invert",l:"Netz-Vorzeichen umkehren",t:"checkbox"},{k:"battery",l:"Akku-Leistung",t:"entity"},{k:"battery_invert",l:"Akku-Vorzeichen umkehren",t:"checkbox"},{k:"battery_soc",l:"Akku-Ladestand (%)",t:"entity"},{k:"consumption",l:"Hausverbrauch (sonst berechnet)",t:"entity"},{k:"wallbox",l:"Wallbox-Leistung",t:"entity"},{k:"gas",l:"Gas (Anzeige)",t:"entity"},{k:"water",l:"Wasser (Anzeige)",t:"entity"},{k:"device_cards",l:"Leistungskarten an Ger\xE4ten",t:"checkbox"},{k:"hide_below_w",l:"Karten unter \u2026 W ausblenden",t:"number",p:"5"}],extra:(e,n,s)=>{let r=document.createElement("button");r.textContent="\u21E9 Vom Energie-Dashboard \xFCbernehmen",r.onclick=async()=>{try{let o=Zu(await this.view.hass.callWS({type:"energy/get_prefs"}));if(!Object.keys(o).length)return this.view.msg("Im Energie-Dashboard sind keine Leistungs-Sensoren hinterlegt \u2013 bitte oben w\xE4hlen.");s(),Object.assign(t,o),this.view.msg(`\xDCbernommen: ${Object.keys(o).join(", ")}`),n()}catch(o){this.view.msg("Energie-Dashboard nicht lesbar: "+(o.message||o.code))}},e.append(r)}})}};var Dx=["battery","range","charging","power","lock","climate","switch","tracker"];function td(i,t,e,n={}){let s=i?t?.[i]?.device_id:null,r=s?Object.keys(t).filter(u=>t[u].device_id===s&&e[u]&&!t[u].hidden):i&&e[i]?[i]:[],o=u=>e[u]?.attributes?.device_class,a=u=>r.find(u)||null,l=u=>u.startsWith("sensor."),c={battery:a(u=>l(u)&&o(u)==="battery"&&!/12v|aux|key|fob/.test(u))||a(u=>l(u)&&/battery_level|state_of_charge|soc|charge_level|ladestand/.test(u)),range:a(u=>l(u)&&/range|reichweite/.test(u)&&!/charge_time|time/.test(u)),charging:a(u=>u.startsWith("binary_sensor.")&&(o(u)==="battery_charging"||/charging|laden/.test(u))),power:a(u=>l(u)&&o(u)==="power"&&/charg|lade/.test(u)),lock:a(u=>u.startsWith("lock.")),climate:a(u=>u.startsWith("climate.")),switch:a(u=>(u.startsWith("switch.")||u.startsWith("button."))&&/charg|lade/.test(u)),tracker:a(u=>u.startsWith("device_tracker."))},h={};for(let u of Dx)h[u]=n[u]||c[u]||null;return h}function Ec(i){return i==null||Number.isNaN(i)?1697535:i<20?16726843:i<50?16757575:4063130}function ed(i,t){let e=a=>{let l=a&&t[a]?parseFloat(t[a].state):NaN;return Number.isFinite(l)?l:null},n=a=>t[a]?.attributes?.unit_of_measurement||"",s=a=>!!a&&["on","heat","cool","heat_cool","auto","charging"].includes(t[a]?.state),r=i.tracker?t[i.tracker]?.state:null,o=e(i.power);return o!=null&&n(i.power).toLowerCase()==="w"&&(o/=1e3),{battery:e(i.battery),range:e(i.range),rangeUnit:n(i.range)||"km",charging:s(i.charging)||o!=null&&o>.05,power:o,locked:i.lock?t[i.lock]?.state==="locked":null,climateOn:s(i.climate),away:r!=null&&r!=="home"&&r!=="unknown"}}var Ts=class extends Ge{get id(){return"car"}get label(){return"\u{1F697} Auto"}get title(){return"Fahrzeug: Ladestand, Reichweite, Laden, Verriegelung und Klima"}get usesHolo(){return!0}get settingsLabel(){return"\u{1F697} Auto"}available(){return!!this.cars?.length}build(t){this.cars=t.cars.map(e=>{let n=t.furniture.find(a=>a.f===e.f),s=xn("<span data-pin>\u{1F697}</span>",{cls:"pin",interactive:!0});s.position.set(n.x,n.top+.5,n.z),s.element.style.cursor="pointer",s.element.addEventListener("click",()=>this.toggleCard(o));let r=xn('<div class="car"></div>',{cls:"carcard",interactive:!0});r.position.set(n.x,n.top+1.4,n.z),r.visible=!1,r.element.addEventListener("click",a=>this.cardClick(o,a)),this.group.add(s,r);let o={...e,a:n,pin:s,dlg:r,open:!1,roles:null,sig:"",dlgSig:""};return o})}roles(t){let e=t.f,n=e.car||{};return td(n.entity||e.entity,this.view.hass?.entities||{},this.states,n)}toggleCard(t){t.open=!t.open,this.cars.forEach(e=>{e!==t&&(e.open=!1)}),this.update(this.states)}onTap(t){let e=this.cars?.find(n=>n.f.id===t?.furnId);return e?(this.toggleCard(e),!0):!1}update(t){if(!this.cars)return;let e=this.view.holo!==!1;this.cars.forEach(n=>{let s=n.roles=this.roles(n),r=n.s=ed(s,t),o=r.battery!=null||r.range!=null||s.lock||s.climate;n.band.color.setHex(r.climateOn?16751164:Ec(r.battery)),n.band.opacity=r.away?.2:.9,n.group.visible=!0;let a=n.f.car?.name||n.f.name||"Auto",l=r.away?["unterwegs"]:[r.battery!=null?`\u{1F50B} ${Math.round(r.battery)} %`:null,r.range!=null?`${Math.round(r.range)} ${Gt(r.rangeUnit)}`:null,r.charging?`\u26A1 ${r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"l\xE4dt"}`:null,r.locked!=null?r.locked?"\u{1F512}":"\u{1F513}":null,r.climateOn?"\u2744":null].filter(Boolean),c=`${Gt(a)}${l.length?" \xB7 "+l.join(" \xB7 "):""}`;if(c!==n.sig&&(n.sig=c,n.pin.element.firstChild.innerHTML=c),n.pin.visible=e,n.dlg.visible=e&&n.open,n.open){let h=r.battery!=null?tn(r.battery,0,100):0,u=`<b>\u{1F697} ${Gt(a)}</b>
          ${r.battery!=null?`<div class="bar"><i style="width:${h}%;background:#${Ec(r.battery).toString(16).padStart(6,"0")}"></i></div>`:""}
          <div class="r"><span>Ladestand</span><b>${r.battery!=null?Math.round(r.battery)+" %":"\u2013"}</b></div>
          <div class="r"><span>Reichweite</span><b>${r.range!=null?Math.round(r.range)+" "+Gt(r.rangeUnit):"\u2013"}</b></div>
          <div class="r"><span>Laden</span><b>${r.charging?r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"ja":"nein"}</b></div>
          <div class="btns">
            ${s.lock?`<button data-a="lock">${r.locked?"\u{1F512} Verriegelt":"\u{1F513} Offen"}</button>`:""}
            ${s.climate?`<button data-a="climate" class="${r.climateOn?"on":""}">\u2744 Klima</button>`:""}
            ${s.switch?`<button data-a="charge" class="${r.charging?"on":""}">\u26A1 Laden</button>`:""}
            <button data-a="close">\u2715</button></div>`;u!==n.dlgSig&&(n.dlgSig=u,n.dlg.element.firstChild.innerHTML=u)}})}cardClick(t,e){let n=e.target.closest("[data-a]")?.dataset.a;if(!n)return;e.stopPropagation();let{roles:s,s:r}=t,o=this.view.hass;if(n==="close")return t.open=!1,this.update(this.states);if(n==="lock"&&s.lock){if(r.locked&&!confirm("Auto entriegeln?"))return;o.callService("lock",r.locked?"unlock":"lock",{entity_id:s.lock})}n==="climate"&&s.climate&&o.callService("climate",r.climateOn?"turn_off":"turn_on",{entity_id:s.climate}),n==="charge"&&s.switch&&(s.switch.startsWith("button.")?o.callService("button","press",{entity_id:s.switch}):o.callService("switch",r.charging?"turn_off":"turn_on",{entity_id:s.switch}))}tick(t,e){this.cars?.forEach(n=>{n.s?.charging&&!n.s.away&&(n.band.opacity=.55+.35*Math.sin(e*4))})}openSettings(){let t=this.cars?.[0];if(!t)return this.view.msg("Erst ein Fahrzeug (M\xF6beltyp \u201Ecar\u201C) im Plan platzieren.");this.openCarSettings(t.f)}openCarSettings(t){let e=t.car||={};ai(this.view,{title:"\u{1F697} Auto zuordnen",obj:e,note:"Nenne eine beliebige Entit\xE4t des Autos; die anderen Entit\xE4ten desselben Ger\xE4ts werden automatisch gefunden. Eigene Zuordnungen unten haben Vorrang.",fields:[{k:"name",l:"Name",t:"text"},{k:"entity",l:"Entit\xE4t des Autos (z. B. Ladestand)",t:"entity"},{k:"battery",l:"Ladestand (%)",t:"entity"},{k:"range",l:"Reichweite",t:"entity"},{k:"charging",l:"L\xE4dt (binary_sensor)",t:"entity"},{k:"power",l:"Ladeleistung",t:"entity"},{k:"lock",l:"Zentralverriegelung (lock)",t:"entity"},{k:"climate",l:"Klima (climate)",t:"entity"},{k:"switch",l:"Laden starten/stoppen (switch/button)",t:"entity"},{k:"tracker",l:"Standort (device_tracker)",t:"entity"}]})}};function As(i){let t=i*Math.PI/180;return[-Math.sin(t),Math.cos(t)]}function $o(i,t,e,n,s,r=18){let o=As(e),a=Math.atan2(o[1],o[0]),l=n*Math.PI/360,c=[[i,t]];for(let h=0;h<=r;h++){let u=a-l+2*l*h/r;c.push([i+s*Math.cos(u),t+s*Math.sin(u)])}return c}function nd(i,t){return 2*Math.atan(Math.tan(i*Math.PI/360)/Math.max(.2,t))*180/Math.PI}var Ux=[["person","\u{1F6B6}",/person|human|people|mensch|face|gesicht/i],["vehicle","\u{1F697}",/vehicle|car\b|truck|auto|fahrzeug|bus\b|motorcycle|bicycle|lkw|pkw/i],["animal","\u{1F43E}",/animal|dog|cat\b|bird|tier|pet\b|hund|katze|vogel/i],["package","\u{1F4E6}",/package|paket|parcel/i],["motion","\u3030",/motion|bewegung|movement|moving/i]];function id(i,t="",e=""){let n=`${i} ${t}`;for(let[s,r,o]of Ux)if(o.test(n))return{kind:s,icon:r};return["motion","occupancy","moving"].includes(e)?{kind:"motion",icon:"\u3030"}:null}function sd(i,t,e){let n=[],s=null;for(let r of i||[])r.s==="on"&&s!=="on"&&r.t>=t-e&&r.t<=t&&n.push({t:r.t,age:(t-r.t)/e}),s=r.s;return n}var Tc=i=>new Date(i).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"});function rd(i){return/[?&]token=([^&]+)/.exec(i||"")?.[1]||null}var vn=(i,t,e)=>new L(i,t,e),Nx=["motion","occupancy","presence","moving"],qo=class extends Ge{get id(){return"cameras"}get label(){return"\u{1F3A5} Kameras"}get title(){return"Kameras: Sichtfeld, Erkennungs-Pins, Standbild, Durch-die-Kamera-sehen"}get settingsLabel(){return"\u{1F3A5} Kameras"}get usesHolo(){return!0}cfg(){return{pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}}}available(){return!!this.cams?.length}toolbar(){return[{label:"\u{1F5BC} Wand",title:"Standbilder aller Kameras als Raster, alle 5 s aktualisiert",on:!!this.wall,fn:()=>this.toggleWall()},{label:"\u{1F463} Spur",title:"Bewegung der letzten 30 Minuten",on:!!this.trailOn,fn:()=>this.toggleTrail()}]}build(t){this.anchors=t;let e=n=>t.rooms.find(s=>s.floor===n)?.elev??0;this.cams=t.devices.filter(n=>n.kind==="camera").map(n=>{let s=n.d,r={a:n,d:s,entity:n.entity,rot:s.rot??0,tilt:s.tilt??25,fov:s.fov??90,reach:s.reach??7,fe:e(n.floor)},o=$o(n.x,n.z,r.rot,r.fov,r.reach),a=[];for(let f=1;f<o.length-1;f++)a.push(o[0][0],r.fe+.05,o[0][1],o[f][0],r.fe+.05,o[f][1],o[f+1][0],r.fe+.05,o[f+1][1]);let l=new Xt;l.setAttribute("position",new jt(a,3)),r.mat=new Oe({color:1697535,transparent:!0,opacity:.16,side:de,depthWrite:!1}),r.cone=new Vt(l,r.mat);let c=[vn(n.x,r.fe+.05,n.z),...o.slice(1).map(f=>vn(f[0],r.fe+.05,f[1])),vn(n.x,r.fe+.05,n.z)];r.edge=new Ze(new Xt().setFromPoints(c),new le({color:1697535,transparent:!0,opacity:.7})),r.cone.visible=r.edge.visible=this.cfg().fov!==!1;let h=As(r.rot),u=Math.cos(xe(r.tilt)),d=vn(n.x+h[0]*.6*u,n.y-Math.sin(xe(r.tilt))*.6,n.z+h[1]*.6*u);return r.dir=new Ze(new Xt().setFromPoints([vn(n.x,n.y,n.z),d]),new le({color:16722902})),r.pin=xn("<span></span>",{cls:"pin",interactive:!0}),r.pin.position.set(n.x+h[0]*.7,n.y+.35,n.z+h[1]*.7),r.pin.visible=!1,r.pin.element.style.cursor="pointer",r.pin.element.addEventListener("click",()=>this.openCard(r)),this.group.add(r.cone,r.edge,r.dir,r.pin),r}),this.trailGroup=new re,this.group.add(this.trailGroup),this.sibs=new Map,this.timer=0,this.trailTimer=999,this.look=null,this.trailOn&&this.loadTrail()}siblings(t){let e=this.sibs.get(t.entity);if(e)return e;let n=this.view.hass,s=this.states,r=n?.entities?.[t.entity]?.device_id,o=t.d.motion&&s[t.d.motion]?[{entity:t.d.motion,kind:"motion",icon:"\u3030"}]:[],a=r?Object.keys(n.entities).filter(l=>l!==t.entity&&n.entities[l].device_id===r&&s[l]):[];for(let l of a){if(!l.startsWith("binary_sensor.")&&!l.startsWith("sensor."))continue;let c=s[l],h=id(l,c.attributes?.friendly_name,c.attributes?.device_class);h&&!o.some(u=>u.entity===l)&&o.push({entity:l,...h,count:l.startsWith("sensor.")})}return this.sibs.set(t.entity,e=o),e}update(t){if(!this.cams)return;let e=this.view.holo!==!1;this.cams.forEach(n=>{let r=this.siblings(n).filter(l=>l.count?parseFloat(t[l.entity]?.state)>0:t[l.entity]?.state==="on"),o=r.length>0;if(n.motion=o,n.mat.color.setHex(o?16726843:1697535),n.edge.material.color.setHex(o?16726843:1697535),n.mat.opacity=o?.3:.16,n.recording=t[n.entity]?.state==="recording",this.cfg().pins!==!1&&e&&o){let l=r.map(c=>{let h=t[c.entity];return`${c.icon} <b>${Tc(Date.parse(h.last_changed||h.last_updated||Date.now()))}</b>`}).join(" \xB7 ");l!==n.pinSig&&(n.pinSig=l,n.pin.element.firstChild.innerHTML=l),n.pin.visible=!0}else n.pin.visible=!1}),this.wall&&this.refreshWall(!1),this.card&&this.refreshCard(!1)}picture(t,e=!0){let n=this.states[t.entity]?.attributes?.entity_picture;return n?e?`${n}${n.includes("?")?"&":"?"}_=${Date.now()}`:n:null}streamUrl(t){let e=rd(this.states[t.entity]?.attributes?.entity_picture);return e?`/api/camera_proxy_stream/${t.entity}?token=${e}`:null}onTap(t){let e=this.cams?.find(n=>n.entity===t?.entity);return e?(this.openCard(e),!0):!1}openCard(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(480px,94%)",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e;let n=e.remove.bind(e);e.remove=()=>{n(),this.card?.box===e&&(this.card=null)};let s=this.states[t.entity]?.attributes?.friendly_name||t.entity;e.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>\u{1F3A5} ${Gt(s)}</b><button data-a="x">\u2715</button></div>
      <img data-img style="width:100%;border-radius:8px;margin:8px 0;background:#000;min-height:120px;object-fit:cover" alt="">
      <div style="display:flex;gap:6px;flex-wrap:wrap"><button data-a="look" class="on">\u{1F441} Durch die Kamera sehen</button><button data-a="live">\u25B6 Live</button><button data-a="info">\u2139</button></div>`,e.onclick=r=>{let o=r.target.closest("[data-a]")?.dataset.a;o==="x"?this.view.closeOverlay():o==="look"?(this.view.closeOverlay(),this.lookThrough(t)):o==="live"?this.openLive(t):o==="info"&&(this.view.closeOverlay(),this.view.moreInfo(t.entity))},this.card={cam:t,box:e,timer:0},this.refreshCard(!0)}refreshCard(t){let e=this.card;if(!e)return;let n=e.box.querySelector("[data-img]"),s=this.picture(e.cam,!1);n&&s&&(t||n.dataset.src!==s)&&(n.dataset.src=s,n.src=this.picture(e.cam))}openLive(t){this.view.closeOverlay();let e=this.streamUrl(t),n=document.createElement("div");n.className="overlay",n.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(860px,94%)",this.view.shadowRoot.querySelector(".wrap").append(n),this.view._overlay=n,n.innerHTML=`<div style="display:flex;justify-content:space-between"><b>\u{1F3A5} ${Gt(this.states[t.entity]?.attributes?.friendly_name||t.entity)} \xB7 Live</b><button data-a="x">\u2715</button></div>
      <img style="width:100%;border-radius:8px;margin-top:8px;background:#000" alt="">
      <div style="opacity:.6;font-size:11px;margin-top:4px">${e?"Live-Strom (MJPEG)":"Dieses Kamera-Ger\xE4t liefert keinen Live-Strom \u2013 das Bild wird jede Sekunde neu geladen."}</div>`;let s=n.querySelector("img"),r=0,o=()=>{s.src=this.picture(t)};e?(s.onerror=()=>{s.onerror=null,r=setInterval(o,1e3),o()},s.src=e):(o(),r=setInterval(o,1e3));let a=n.remove.bind(n);n.remove=()=>{clearInterval(r),s.src="",a()},n.onclick=l=>{l.target.closest("[data-a=x]")&&this.view.closeOverlay()}}lookThrough(t){let e=this.view;if(this.look)return;let n=t.a,s=As(t.rot),r=Math.cos(xe(t.tilt)),o={pos:vn(n.x,n.y,n.z),target:vn(n.x+s[0]*r,n.y-Math.sin(xe(t.tilt)),n.z+s[1]*r),hfov:t.fov};this.look={cam:t,t:0,from:{pos:e.camera.position.clone(),target:e.controls.target.clone(),fov:e.camera.fov},to:o,done:!1},e.controls.enabled=!1;let a=e.shadowRoot.querySelector("#view"),l=document.createElement("img");l.style.cssText="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;pointer-events:none;z-index:2";let c=document.createElement("div");c.className="overlay",c.style.cssText="left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:8px;align-items:center;z-index:7";let h=!!e.hass?.user?.is_admin&&e.cfg.mode!=="card";c.innerHTML=`<span>Bild</span><input type="range" min="0" max="100" value="60" data-a="op" style="width:110px">
      ${h?`<span>Drehung</span><input type="range" min="0" max="360" value="${t.rot}" data-a="rot" style="width:90px"><span>Neigung</span><input type="range" min="0" max="80" value="${t.tilt}" data-a="tilt" style="width:80px">`:""}
      <button data-a="back" class="on">\u2190 Zur\xFCck zur Ansicht</button>`,a.append(l,c);let u=()=>{let f=As(t.rot),p=Math.cos(xe(t.tilt));this.look.to.target.set(n.x+f[0]*p,n.y-Math.sin(xe(t.tilt)),n.z+f[1]*p),e.controls.target.copy(this.look.to.target),e.camera.lookAt(this.look.to.target)};c.oninput=f=>{let p=f.target.dataset.a;p==="op"&&(l.style.opacity=f.target.value/100),(p==="rot"||p==="tilt")&&(t[p]=+f.target.value,t.d[p]=t[p],this.look.moved=!0,u())},c.onclick=f=>{f.target.closest("[data-a=back]")&&this.endLook()},this.look.ui={img:l,bar:c};let d=()=>{let f=this.picture(t);f&&(l.src=f)};d(),this.look.timer=setInterval(d,2e3)}endLook(){let t=this.look,e=this.view;t&&(clearInterval(t.timer),t.ui.img.remove(),t.ui.bar.remove(),e.camera.position.copy(t.from.pos),e.controls.target.copy(t.from.target),e.camera.fov=t.from.fov,e.camera.updateProjectionMatrix(),e.controls.enabled=!0,this.look=null,t.moved&&(e.msg("Drehung/Neigung ge\xE4ndert \u2013 mit \u{1F4BE} speichern"),e.rebuild3D()))}toggleWall(){if(this.wall){this.wall.remove(),this.wall=null,this.view.renderBar();return}let t=document.createElement("div");t.style.cssText="position:absolute;left:8px;top:48px;z-index:4;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;width:min(520px,60%);max-height:70%;overflow:auto",this.cams.forEach(e=>{let n=document.createElement("div");n.style.cssText="position:relative;border:2px solid #2a3b6a;border-radius:8px;overflow:hidden;background:#000;cursor:pointer;aspect-ratio:16/9",n.innerHTML=`<img style="width:100%;height:100%;object-fit:cover;display:block" alt=""><span style="position:absolute;left:4px;bottom:3px;font-size:11px;background:rgba(0,0,0,.6);padding:1px 5px;border-radius:4px">${Gt(this.states[e.entity]?.attributes?.friendly_name||e.entity)}</span><i data-rec style="position:absolute;right:6px;top:4px;color:#ff3b3b;display:none">\u25CF</i>`,n.onclick=()=>this.openLive(e),e.tile=n,t.append(n)}),this.view.shadowRoot.querySelector("#view").append(t),this.wall=t,this.view.renderBar(),this.refreshWall(!0)}refreshWall(t){this.cams.forEach(e=>{let n=e.tile;if(n&&(n.style.borderColor=e.motion?"#ff3b3b":"#2a3b6a",n.querySelector("[data-rec]").style.display=e.recording?"":"none",t)){let s=this.picture(e);s&&(n.querySelector("img").src=s)}})}toggleTrail(){this.trailOn=!this.trailOn,this.trailOn?this.loadTrail():this.clearTrail(),this.view.renderBar()}clearTrail(){this.trailGroup?.clear(),this.trailLabels?.forEach(t=>t.element.remove()),this.trailLabels=[]}positionOf(t){let e=this.anchors,n=e.devices.find(c=>c.entity===t);if(n)return vn(n.x,n.y,n.z);let s=this.cams.find(c=>this.siblings(c).some(h=>h.entity===t));if(s){let c=As(s.rot);return vn(s.a.x+c[0]*s.reach*.5,s.fe+.5,s.a.z+c[1]*s.reach*.5)}let r=this.view.hass,o=r?.entities?.[t],a=o?.area_id||r?.devices?.[o?.device_id]?.area_id,l=a?e.rooms.find(c=>c.area===a):null;return l?vn(l.x,l.elev+1.1,l.z):null}async loadTrail(){if(!this.trailOn||!this.view.hass?.callWS)return;let t=this.states,e=Object.keys(t).filter(a=>a.startsWith("binary_sensor.")&&Nx.includes(t[a].attributes?.device_class)).filter(a=>this.positionOf(a)),n=this.cams.flatMap(a=>this.siblings(a).filter(l=>!l.count).map(l=>l.entity)),s=[...new Set([...e,...n])].slice(0,60);if(!s.length){this.view.msg("Keine Bewegungsmelder im Plan oder an Kameras gefunden");return}let r=Date.now(),o=(this.cfg().trail_minutes||30)*6e4;try{let a=await Wo(this.view.hass,s,new Date(r-o),new Date(r));if(!this.trailOn)return;let l=s.flatMap(c=>sd(a[c],r,o).map(h=>({...h,entity:c,pos:this.positionOf(c)}))).filter(c=>c.pos).sort((c,h)=>c.t-h.t);this.drawTrail(l)}catch(a){this.view.msg("Verlauf nicht verf\xFCgbar: "+(a.message||a.code))}}drawTrail(t){if(this.clearTrail(),!t.length)return;let e=Li();t.forEach(s=>{let r=new je(new Ye({map:e,color:1697535,transparent:!0,opacity:tn(1-s.age*.85,.12,1),depthTest:!1,blending:pn}));r.position.copy(s.pos),r.scale.setScalar(.9*(1-.55*s.age)+.25),r.renderOrder=8,this.trailGroup.add(r)});let n=new Map;if(t.forEach(s=>{let r=`${s.pos.x.toFixed(2)}|${s.pos.z.toFixed(2)}`;n.has(r)||n.set(r,{pos:s.pos,times:[]}),n.get(r).times.push(s.t)}),n.forEach(s=>{let r=xn(`<span>${s.times.slice(-4).reverse().map(Tc).join(" \xB7 ")}${s.times.length>4?" \u2026":""}</span>`,{cls:"pw"});r.position.copy(s.pos).add(vn(0,.3,0)),this.trailGroup.add(r),this.trailLabels.push(r)}),t.length>1){let s=[],r=[];t.forEach(l=>{s.push(l.pos.x,l.pos.y,l.pos.z);let c=tn(1-l.age,.1,1);r.push(.1*c,.9*c,1*c)});let o=new Xt;o.setAttribute("position",new jt(s,3)),o.setAttribute("color",new jt(r,3));let a=new Ze(o,new le({vertexColors:!0,transparent:!0,depthTest:!1}));a.renderOrder=8,this.trailGroup.add(a)}}tick(t){let e=this.view;if(this.look){let n=this.look;if(!n.done){n.t=Math.min(1,n.t+t/.9);let s=n.t*n.t*(3-2*n.t);e.camera.position.lerpVectors(n.from.pos,n.to.pos,s),e.controls.target.lerpVectors(n.from.target,n.to.target,s);let r=e.viewEl.clientWidth||1,o=e.viewEl.clientHeight||1;e.camera.fov=n.from.fov+(nd(n.to.hfov,r/o)-n.from.fov)*s,e.camera.updateProjectionMatrix(),n.t>=1&&(n.done=!0)}}this.timer+=t,this.timer>5&&(this.timer=0,this.wall&&this.refreshWall(!0),this.card&&this.refreshCard(!0)),this.trailTimer+=t,this.trailOn&&this.trailTimer>60&&(this.trailTimer=0,this.loadTrail())}reset(){this.endLook(),this.clearTrail(),this.wall&&(this.wall.remove(),this.wall=null)}dispose(){this.endLook(),this.wall?.remove(),this.wall=null,this.cams=null}openSettings(){let t=this.settings.cameras={pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}};ai(this.view,{title:"\u{1F3A5} Kameras",obj:t,note:"Kameras sind Ger\xE4te vom Typ camera. Drehung, Neigung, \xD6ffnungswinkel und Reichweite stellst du am Ger\xE4t ein (Ger\xE4t anklicken). Die Melder werden am selben HA-Ger\xE4t gefunden oder dort eingetragen.",fields:[{k:"fov",l:"Sichtfeld auf dem Boden zeigen",t:"checkbox"},{k:"pins",l:"Erkennungs-Pins (Person, Fahrzeug, Tier \u2026)",t:"checkbox"},{k:"trail_minutes",l:"Bewegungsspur: Minuten zur\xFCck",t:"number",s:5}]})}};function od(i){return[new Fo(i),new Xo(i),new Go(i),new Ts(i),new qo(i),new Bo(i)]}function Ox(i,t=512){return new Promise((e,n)=>{let s=new Image,r=URL.createObjectURL(i);s.onload=()=>{let o=Math.min(1,t/Math.max(s.naturalWidth,s.naturalHeight)),a=document.createElement("canvas");a.width=Math.max(1,Math.round(s.naturalWidth*o)),a.height=Math.max(1,Math.round(s.naturalHeight*o)),a.getContext("2d").drawImage(s,0,0,a.width,a.height),URL.revokeObjectURL(r),e(i.type==="image/png"||i.type==="image/svg+xml"?a.toDataURL("image/png"):a.toDataURL("image/jpeg",.85))},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Bild nicht lesbar"))},s.src=r})}function ad(i,t){i.closeOverlay();let e=t.screen||={bg:"dark",rules:[]};e.rules||=[];let n=i.shadowRoot.querySelector(".wrap"),s=document.createElement("div");s.className="overlay",s.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(680px,94%);max-height:84%;overflow:auto",i._overlay=s,n.append(s);let r=()=>{i.rebuild3D(),i.draw2D()},o=!1,a=()=>{o||(i.pushUndo(),o=!0)},l=()=>{let c=i.getStates()||{},h=Object.keys(c).sort(),u=e.entity||t.entity||"",d=ko(e.rules,c,u);s.innerHTML=`
      <h4 style="margin:0 0 8px">\u{1F5A5} Bildschirm ${Gt(t.name||t.type)}</h4>
      <datalist id="scr-ents">${h.map(f=>`<option value="${Gt(f)}">`).join("")}</datalist>
      <div class="row"><div><label>Bildschirm-Entit\xE4t (z. B. media_player)</label><input id="scr-entity" list="scr-ents" value="${Gt(e.entity||"")}" placeholder="${Gt(t.entity||"media_player.tv")}"></div>
      <div><label>Hintergrund</label><select id="scr-bg"><option value="dark" ${e.bg!=="white"?"selected":""}>dunkel</option><option value="white" ${e.bg==="white"?"selected":""}>wei\xDF</option></select></div></div>
      <div style="margin:10px 0 4px;opacity:.8">Bild-Regeln \u2013 die erste passende gewinnt. Ohne Regel zeigt der Bildschirm Cover und Farbe der laufenden App.</div>
      <div id="scr-rules">${e.rules.map((f,p)=>`
        <div class="rule" data-i="${p}" style="display:grid;grid-template-columns:1.2fr 1fr 1fr 1.4fr auto auto auto;gap:4px;margin:4px 0;align-items:center">
          <input data-f="entity" list="scr-ents" placeholder="Entit\xE4t (leer = Bildschirm)" value="${Gt(f.entity||"")}">
          <input data-f="attr" placeholder="Attribut (leer = Zustand)" value="${Gt(f.attr||"")}">
          <input data-f="match" placeholder="Wert (enth\xE4lt, * = alles)" value="${Gt(f.match||"")}">
          <input data-f="image" placeholder="Bild-URL oder camera.xyz" value="${Gt(String(f.image||"").startsWith("data:")?"":f.image||"")}">
          <button data-act="upload" title="Bild hochladen">${String(f.image||"").startsWith("data:")?"\u{1F5BC} \u2713":"\u2B06"}</button>
          <button data-act="del" title="Regel l\xF6schen">\u{1F5D1}</button>
          <span title="trifft gerade zu" style="color:${d===f?"#19e6ff":"#35405f"}">\u25CF</span>
        </div>`).join("")}</div>
      <div style="display:flex;gap:6px;margin-top:8px"><button id="scr-add">+ Regel</button><span style="flex:1"></span><button id="scr-close" class="on">Fertig</button></div>`,s.querySelector("#scr-entity").onchange=f=>{a(),e.entity=f.target.value||null,r(),l()},s.querySelector("#scr-bg").onchange=f=>{a(),e.bg=f.target.value,r()},s.querySelector("#scr-add").onclick=()=>{a(),e.rules.push({match:"",image:""}),l()},s.querySelector("#scr-close").onclick=()=>i.closeOverlay(),s.querySelectorAll(".rule").forEach(f=>{let p=e.rules[+f.dataset.i];f.querySelectorAll("input[data-f]").forEach(_=>{_.onchange=()=>{a();let g=_.dataset.f,m=_.value.trim();g==="image"?m?p.image=m:String(p.image||"").startsWith("data:")||(p.image=""):p[g]=m,r(),l()}}),f.querySelector('[data-act="del"]').onclick=()=>{a(),e.rules.splice(+f.dataset.i,1),r(),l()},f.querySelector('[data-act="upload"]').onclick=()=>{let _=document.createElement("input");_.type="file",_.accept="image/*",_.onchange=async()=>{try{a(),p.image=await Ox(_.files[0]),r(),l()}catch(g){i.msg("Bild nicht lesbar: "+g.message)}},_.click()}})};l()}function or(i,t={},e=0){let n=Vu(i),s=Gu(e),r=s[t?.high||"south"]||s.south,o=[-Math.sin(n.ang),Math.cos(n.ang)],a=o[0]*r[0]+o[1]*r[1]>=0?o:[-o[0],-o[1]],l=Math.atan2(-a[0],-a[1]),c=Math.cos(l)<0;return{cx:n.cx,cz:n.cz,L:n.len,W:n.wid,theta:l,dHigh:a,flip:c,tToU:h=>c?n.len/2-h:h-n.len/2}}function Xn(i,t,e){return[i.cx+t*Math.cos(i.theta)+e*Math.sin(i.theta),i.cz-t*Math.sin(i.theta)+e*Math.cos(i.theta)]}function ld(i,t){if(!t)return null;let e=Math.max(0,Math.round(Number(t.carportStalls)||0)),n=Number(t.stallWidth)||2.9,s=t.bike&&t.bike!=="none"?t.bike:null,r=t.garage||(e||s?"west":"none");if(!e&&r==="none"&&!s)return null;let o=Math.min(i,e*n),a=s?Math.min(Math.max(0,i-o),Number(t.bikeWidth)||3):0,l=Math.max(0,i-o-a),c=r==="none"?0:t.garageLen!=null&&t.garageLen!==""?Math.min(Number(t.garageLen),l):l,h=Math.max(0,l-c),u={stalls:e,stallWidth:e?o/e:n},d={door:Number(t.bikeDoor)||1.2},f=[],p=r!=="east",_=s?s==="west":!p;s&&_&&f.push(["bike",a,d]),p?(f.push(["garage",c]),h>.05&&f.push(["open",h]),f.push(["carport",o,u])):(f.push(["carport",o,u]),h>.05&&f.push(["open",h]),f.push(["garage",c])),s&&!_&&f.push(["bike",a,d]);let g=[],m=0;for(let[b,y,x]of f)y>.05&&g.push({type:b,t0:m,t1:m+y,...x||{}}),m+=y;return g}function cd({L:i,W:t,pitchDeg:e,orientation:n,portrait:s,fill:r=!0,rows:o,cols:a,margin:l=.25,gap:c=.02,align:h="center",uCenter:u=0}){let d=t/Math.cos(e*Math.PI/180),f=m=>{let b=m?1.134:1.722,y=m?1.722:1.134,x=r?Math.max(0,Math.floor((i-2*l+c)/(b+c))):Math.max(0,Math.round(a??1)),C=r?Math.max(0,Math.floor((d-2*l+c)/(y+c))):Math.max(0,Math.round(o??1)),A=[],R=h==="low"?l+y/2:h==="high"?d-l-y/2-(C-1)*(y+c):d/2-(C-1)/2*(y+c);for(let P=0;P<x;P++)for(let S=0;S<C;S++)A.push({u:u+(P-(x-1)/2)*(b+c),s:R+S*(y+c),mw:b,mh:y});return{cols:x,rows:C,modules:A,slope:d,portrait:m}},p=n&&n!=="auto"?n:s!=null&&n!=="auto"?s?"portrait":"landscape":"auto";if(p==="portrait")return f(!0);if(p==="landscape")return f(!1);let _=f(!1),g=f(!0);return g.modules.length>_.modules.length?g:_}var Rs={garage:"Garage",carport:"Carport",bike:"Fahrradgarage",open:"Unterstand"},hd={low:"L\xE4ngsseite (niedrig)",high:"L\xE4ngsseite (hoch)",west:"Westende",east:"Ostende"};function Yo({side:i="low",pt:t,f:e,W:n,hLow:s,bike:r=!1,width:o}){let a=Math.min(r?2:2.2,s-.2),l=Number(o)||(r?1.2:2.5),c=.03;if(i==="west"||i==="east"){let d=(i==="west"?-1:1)*(e.flip?-1:1);return{side:i,sx:.05,sy:a,sz:Math.min(l,n-.3),x:e.tToU(i==="west"?t.t0:t.t1)+d*c,y:a/2,z:0}}let h=Math.abs(e.tToU(t.t1)-e.tToU(t.t0)),u=i==="high";return{side:u?"high":"low",sx:Math.min(l,h-.2),sy:a,sz:.05,x:(e.tToU(t.t0)+e.tToU(t.t1))/2,y:a/2,z:u?-n/2-c:n/2+c}}function Zo(i,t="east"){let e=Math.max(1,Math.round(i.stalls||1)),n=(i.t1-i.t0)/e;return Array.from({length:e},(s,r)=>({n:r+1,t:t==="west"?i.t0+(r+.5)*n:i.t1-(r+.5)*n}))}function Fx(i,t){let e=h=>h.type==="carport"?Math.max(0,Math.round(Number(h.stalls)||0))*(Number(h.stallWidth)||2.9):h.len!=null&&h.len!==""&&Number(h.len)>0?Number(h.len):null,n=t.map(e),s=n.reduce((h,u)=>h+(u??0),0),r=n.filter(h=>h==null).length,o=r?Math.max(0,i-s)/r:0,a=!r&&s>i?i/s:1,l=[],c=0;return t.forEach((h,u)=>{let d=(n[u]??o)*a;if(d>.05){let f=h.type==="carport"?Math.max(1,Math.round(Number(h.stalls)||1)):void 0;l.push({...h,type:h.type||"garage",t0:c,t1:c+d,...f?{stalls:f,stallWidth:d/f}:{},index:u})}c+=d}),l}function Ko(i,t){return t?.parts?.length?Fx(i,t.parts):ld(i,t?.layout)}function ud(i,t){return(ld(i,t)||[]).map(e=>e.type==="carport"?{type:"carport",stalls:e.stalls,stallWidth:+e.stallWidth.toFixed(2)}:e.type==="garage"||e.type==="open"?{type:e.type,len:null}:{type:e.type,len:+(e.t1-e.t0).toFixed(2),door:e.door})}var ar={wallExterior:.24,wallInterior:.12,slab:.18};function Jo(i){return{id:nn(),name:`Etage ${i}`,height:2.6,rooms:[],walls:[],openings:[],devices:[],furniture:[]}}function Ac(i,t,e){let n=i.floors.map((o,a)=>({e:$n(i,a),h:o.height||2.6})).filter(o=>o.e>-.01).sort((o,a)=>o.e-a.e);if(e=Math.max(1,Math.round(e)||1),t.levels=e,!n.length)return t.storeys=Array.from({length:e},(o,a)=>+(a*2.8).toFixed(2)),t.height=+(e*2.8).toFixed(2),t;let s=n[n.length-1];t.storeys=Array.from({length:e},(o,a)=>+(n[a]?.e??s.e+(a-n.length+1)*s.h).toFixed(2));let r=n[e-1]||{e:s.e+(e-n.length)*(s.h+.18),h:s.h};return t.height=+(r.e+r.h).toFixed(2),t}function pd(i,t=1){return{id:nn(),name:`Geb\xE4ude ${t}`,points:i,height:3,visible:!0,roof:{type:"gable",pitch:25,overhang:.3}}}function Rc(){return{version:2,settings:{},floors:[Jo(1)]}}function Oi(i){return i.version=2,i.settings={...ar,autoDevices:!0,...i.settings||{}},i.floors=i.floors||[],i.site&&(i.site.buildings=i.site.buildings||[],i.site.buildings.forEach(t=>{t.height=t.height||3,t.roof={type:"flat",pitch:25,overhang:.3,...t.roof||{}},t.visible==null&&(t.visible=!0)})),i.floors.forEach(t=>{t.height=t.height||2.6;for(let e of["rooms","walls","openings","devices","furniture"])t[e]=t[e]||[];t.openings.forEach(e=>{let n=e.type==="door";e.w=e.w||(n?.9:1.2),e.h=e.h||(n?2.1:1.1),e.sill==null&&(e.sill=n?0:.9)})}),(i.site?.buildings||[]).forEach(t=>{t.levels>1&&!t.storeys&&Ac(i,t,t.levels)}),i}function $n(i,t){let e=i.floors[t];if(!e)return 0;if(e.elevation!=null)return e.elevation;let n=0;for(let s=0;s<t;s++)n+=(i.floors[s].height||2.6)+(i.settings?.slab??ar.slab);return n}var dd=new WeakMap;function lr(i){let t=dd.get(i);if(t)return t;let e=i.axis!=="z",n=!!i.flip,s=n?i.eaveB:i.eaveA,r=n?i.eaveA:i.eaveB,o=n?i.pitchB:i.pitchA,a=n?i.pitchA:i.pitchB,l=e?i.z0:i.x0,c=e?i.z1:i.x1,h=e?i.x0:i.z0,u=e?i.x1:i.z1,d=Math.tan(xe(o)),f=Math.tan(xe(a)),p=(r-s+d*l+f*c)/(d+f),_=s+d*(p-l);return t={horiz:e,c0:l,c1:c,s0:h,s1:u,eaveA:s,eaveB:r,pa:o,pb:a,ta:d,tb:f,cr:p,yr:_,base:i.base??Math.min(s,r),overhang:i.overhang??.5},dd.set(i,t),t}function cr(i){return i.settings?.roof?.sections||[]}function md(i,t,e,n=.06){let s=1/0,r=!1;for(let o of cr(i)){let a=lr(o),l=a.horiz?e:t,c=a.horiz?t:e;if(c<a.s0-n||c>a.s1+n||l<a.c0-n||l>a.c1+n)continue;let h=Math.min(a.eaveA+a.ta*(l-a.c0),a.eaveB+a.tb*(a.c1-l));(!r||h>s)&&(s=h),r=!0}return r?s:1/0}var fd=.03,kx=i=>typeof i=="number"?i:1/0;function jo(i,t=ar){let e=[],n=l=>{for(let h of e)if(Math.hypot(h[0]-l[0],h[1]-l[1])<fd)return h;let c=[l[0],l[1]];return c.i=e.length,e.push(c),c},s=[];i.rooms.forEach(l=>{let c=l.points.length;l.points.forEach((h,u)=>{s.push({a:n(h),b:n(l.points[(u+1)%c]),t:l.wallT?.[u]??null,h:kx(l.wallH?.[u]),room:l.id,free:!1})})}),i.walls.forEach(l=>s.push({a:n(l.a),b:n(l.b),t:l.t??null,h:l.h!=null?l.h:1/0,room:null,free:!0,id:l.id}));let r=new Map;s.forEach(l=>{if(l.a===l.b)return;let c=[{t:0,n:l.a},{t:1,n:l.b}];for(let h of e){if(h===l.a||h===l.b)continue;let u=Es(h,l.a,l.b);u.d<fd&&u.t>5e-4&&u.t<.9995&&c.push({t:u.t,n:h})}c.sort((h,u)=>h.t-u.t);for(let h=0;h<c.length-1;h++){let u=c[h].n,d=c[h+1].n;if(u===d)continue;let f=u.i<d.i?`${u.i}|${d.i}`:`${d.i}|${u.i}`,p=r.get(f);p||r.set(f,p={a:u,b:d,ts:[],hs:[],rooms:new Set,free:!1,ids:[]}),l.t!=null&&p.ts.push(l.t),p.hs.push(l.h),l.room&&p.rooms.add(l.room),l.free&&(p.free=!0,l.id&&p.ids.push(l.id))}});let o=[];r.forEach(l=>{let c=Math.max(...l.hs);if(c<=0)return;let h=l.ts.length?Math.max(...l.ts):l.free||l.rooms.size>=2?t.wallInterior:t.wallExterior;o.push({a:l.a,b:l.b,t:h,h:Number.isFinite(c)?c:null,extA:0,extB:0,rooms:[...l.rooms],free:l.free,ids:l.ids})});let a=new Map;return o.forEach(l=>{for(let[c,h]of[[l.a,l.b],[l.b,l.a]])a.has(c)||a.set(c,[]),a.get(c).push({s:l,dir:Bx([h[0]-c[0],h[1]-c[1]])})}),a.forEach((l,c)=>{if(l.length===1||l.length>2)return;let[h,u]=l,d=h.dir[0]*u.dir[1]-h.dir[1]*u.dir[0],f=h.dir[0]*u.dir[0]+h.dir[1]*u.dir[1];if(!(Math.abs(d)<.05&&f<0))for(let p of l)p.s.a===c?p.s.extA=p.s.t/2:p.s.extB=p.s.t/2}),o.forEach(l=>{l.len=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]),l.rot=-Math.atan2(l.b[1]-l.a[1],l.b[0]-l.a[0])}),o}var Bx=i=>{let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]};function gd(i,t){let e=null;for(let n of t){let s=Es([i.x,i.z],n.a,n.b);s.d>n.t/2+.2||i.rot!=null&&Math.abs(Math.sin(i.rot-n.rot))>.15||(!e||s.d<e.d)&&(e={s:n,d:s.d,u:s.t*n.len,q:s.q})}return e}var Cc=i=>i.type==="stairs"||i.type==="stairs_u";function Pc(i){if(i.type!=="stairs_u"||i.landings!==2)return Vo(i);let t=i.w||1.9,e=i.d||3.2;return[[-t/2,-e/2],[t/2,-e/2],[t/2,0],[-t/2,0]].map(([n,s])=>wc(i,n,s))}function _d(i,t){let e=[],n=$n(i,t);for(let s=0;s<t;s++){let r=$n(i,s);i.floors[s].furniture.filter(Cc).forEach(o=>{if(r+(o.h||2.7)<n-.35||r>=n)return;let a=Pc(o);i.floors[t].rooms.some(l=>a.every(c=>en(c,l.points)))&&e.push(a)})}return e}var ki={neon:{bg:460815,wall:1697535,wallOp:.2,edgeOp:.85,floorK:.25,floorEm:.14,door:16722902,win:7317759,roof:16751164,text:"#dfe8ff",glow:"#19e6ff"},day:{bg:14673650,wall:15922424,wallOp:.92,edgeOp:.5,floorK:.85,floorEm:0,door:10119999,win:9356799,roof:11883580,text:"#1d2740",glow:"#ffffff"}},zx={kitchen:"#ffb347",kitchen_tall:"#ffb347",kitchen_wall:"#ffb347",island:"#ffb347",sink:"#9ad7ff",stove:"#ff6b6b",dishwasher:"#c0c8d8",fridge:"#e8f1ff",washer:"#e8f1ff",dryer:"#e8f1ff",bed:"#b388ff",dresser:"#c08a5a",wardrobe:"#c08a5a",tall_cabinet:"#c08a5a",sideboard:"#c08a5a",shelf:"#c08a5a",desk:"#4aa3ff",office_chair:"#4aa3ff",chair:"#e0b080",stool:"#e0b080",table:"#e0b080",bench:"#e0b080",sofa_l:"#7bd88f",sofa:"#7bd88f",tv_board:"#7bd88f",rug:"#8f6bb3",shower:"#7fdbff",wc:"#e8f1ff",washbasin:"#e8f1ff",bathtub:"#e8f1ff",robot_vacuum:"#00ff9d",led_strip:"#fff29a",inverter:"#ffd166",meter:"#ffd166",grid_point:"#ffd166",stairs:"#c9d1e6",stairs_u:"#c9d1e6",tv:"#5a6bff",monitor:"#5a6bff",speaker:"#ff2bd6",soundbar:"#ff2bd6",car:"#9aa5c0",battery:"#7bd88f",wallbox:"#19e6ff"},Hx={stairs:[1,3.2,2.75],stairs_u:[1.9,3.2,2.75],bed:[1.8,2,.5],table:[1.6,.9,.75],chair:[.45,.45,.9],stool:[.35,.35,.45],rug:[2,3,.02],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},Vx={kitchen_wall:1.4,tv:.8,monitor:.74,soundbar:.45};function Cs(i=256){let t=document.createElement("canvas");t.width=i,t.height=64;let e=new Fe(t),n=new je(new Ye({map:e,transparent:!0,depthTest:!1}));return n.scale.set(i/256*1.2,.3,1),n.renderOrder=10,n.visible=!1,n.userData={canvas:t,tex:e,text:""},n}function Bi(i,t,e="#19e6ff"){let n=i.userData;if(n.text===t)return;n.text=t;let s=n.canvas.getContext("2d"),r=n.canvas.width;s.clearRect(0,0,r,64),s.fillStyle="rgba(7,8,15,.75)",s.beginPath(),s.roundRect(4,8,r-8,48,12),s.fill(),s.strokeStyle=e,s.lineWidth=2,s.stroke(),s.fillStyle="#fff",s.font="bold 30px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(t,r/2,33,r-24),n.tex.needsUpdate=!0}function ye(i,t,e,n=0,s=0,r=0){let o=new Ae(i,t,e);return o.translate(s,n+t/2,r),o}var Gx={sedan:[[0,0],[0,.42],[.08,.5],[.3,.55],[.4,1],[.64,1],[.78,.58],[1,.5],[1,0]],wagon:[[0,0],[0,.78],[.03,.97],[.08,1],[.58,1],[.8,.58],[1,.5],[1,0]],hatch:[[0,0],[0,.72],[.06,.96],[.12,1],[.54,1],[.76,.64],[1,.54],[1,0]],van:[[0,0],[0,.95],[.03,1],[.72,1],[.86,.66],[1,.58],[1,0]],roadster:[[0,0],[0,.55],[.12,.62],[.5,.62],[.58,1],[.7,1],[.8,.64],[1,.52],[1,0]]};function Wx(i,t,e){let n=Hx[i.type]||[.6,.6,.8],s=i.w||n[0],r=i.d||n[1],o=i.h||n[2],a=new Rt(i.color||zx[i.type]||"#9aa5c0"),l=e.theme==="day"?1:.5,c=new Re({color:a.clone().multiplyScalar(i.color?1:l),emissive:a,emissiveIntensity:e.theme==="day"?0:i.color?.3:.18,transparent:!0,opacity:e.theme==="day"?1:.88}),h=new le({color:i.color?a.clone().lerp(new Rt(16777215),.4):a,transparent:!0,opacity:.9}),u=i.mountY??Vx[i.type]??0,d=[],f=[c],p=new re;p.position.set(i.x,t,i.z),p.rotation.y=-xe(i.rot||0);let _=(b,y=c)=>{let x=new Vt(b,y);return x.add(new pe(new Ce(b),h)),p.add(x),x.userData.entity=i.entity||null,x.userData.furnId=i.id,e.pickables.push(x),d.push(x),x};switch(i.type){case"stairs_u":{if(i.landings===2){let P=Math.max(12,2*Math.round(o/.18/2)),S=o/P,v=Math.min(1.2,s/3,r/3),T=i.flip?-1:1,F=Math.max(2,Math.round(P*.31)),O=Math.max(1,P-2-2*F),B=s-v,X=r-2*v;for(let k=0;k<F;k++)_(ye(B/F,(k+1)*S,v,0,T*(-s/2+(k+.5)*(B/F)),r/2-v/2));_(ye(v,(F+1)*S,v,0,T*(s/2-v/2),r/2-v/2));for(let k=0;k<O;k++)_(ye(v,(F+2+k)*S,X/O,0,T*(s/2-v/2),r/2-v-(k+.5)*(X/O)));_(ye(v,(F+O+2)*S,v,0,T*(s/2-v/2),-r/2+v/2));for(let k=0;k<F;k++)_(ye(B/F,(F+O+3+k)*S,v,0,T*(s/2-v-(k+.5)*(B/F)),-r/2+v/2));break}let b=Math.max(8,2*Math.round(o/.18/2)),y=b/2,x=Math.min(1.2,r*.25),C=(r-x)/y,A=s/2-.02,R=i.flip?-1:1;for(let P=0;P<y;P++)_(ye(A,(P+1)*o/b,C,0,R*s/4,r/2-(P+.5)*C));_(ye(s,o/2,x,0,0,-r/2+x/2));for(let P=0;P<y;P++)_(ye(A,o/2+(P+1)*o/b,C,0,-R*s/4,-r/2+x+(P+.5)*C));break}case"stairs":{let b=Math.max(4,Math.round(o/.18)),y=r/b;for(let x=0;x<b;x++)_(ye(s,(x+1)*o/b,y,0,0,r/2-(x+.5)*y));break}case"table":case"desk":case"bench":{_(ye(s,.05,r,o-.05));let b=s/2-.05,y=r/2-.05;for(let x of[-1,1])for(let C of[-1,1])_(ye(.05,o-.05,.05,0,x*b,C*y));break}case"chair":case"office_chair":case"stool":{let b=Math.min(.46,o*.5);_(ye(s,.06,r,b)),_(ye(.06,b,.06)),i.type!=="stool"&&_(ye(s,o-b,.05,b,0,-r/2+.025));break}case"sofa_l":case"sofa":{_(ye(s,Math.min(.45,o),r)),_(ye(s,o,.22,0,0,-r/2+.11));break}case"robot_vacuum":{let b=new Qs(Math.max(s,r)/2,Math.max(s,r)/2,o,24);b.translate(0,u+o/2,0),_(b);break}case"tv":case"monitor":{_(ye(s,o,r,u));let b=512,y=Math.max(64,Math.round(512*o/s)),x=document.createElement("canvas");x.width=b,x.height=y;let C=new Fe(x);C.colorSpace=ze;let A=Math.max(.1,s-.06),R=Math.max(.1,o-.06),P=new Vt(new Wn(A,R),new Oe({map:C,toneMapped:!1}));P.position.set(0,u+o/2,r/2+.003),P.userData.entity=i.entity||null,p.add(P),e.pickables.push(P),e.anchors.screens.push({f:i,canvas:x,tex:C,mesh:P,w:A,h:R,floor:e.cur.i});break}case"car":{let b=Gx[i.body];if(b){let A=T=>.2+T*(o-.2),R=new gn(b.map(([T,F])=>new K((T-.5)*r,A(F)))),P=new Rn(R,{depth:s,bevelEnabled:!1});P.applyMatrix4(new Kt().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),P.translate(-s/2,0,0),_(P);let S=new Re({color:1119256,emissive:2106412,emissiveIntensity:.5}),v=Math.min(.34,o*.27);for(let T of[-1,1])for(let F of[-1,1]){let O=new Qs(v,v,.22,16);O.rotateZ(Math.PI/2);let B=new Vt(O,S);B.position.set(T*(s/2-.1),v,F*r*.31),p.add(B)}}else _(ye(s,o*.42,r,.18)),_(ye(s*.86,o*.34,r*.5,.18+o*.42,0,-r*.04));let y=new Oe({color:1697535,transparent:!0,opacity:.9}),x=new Vt(new Ae(s+.08,.06,r+.08),y);if(x.position.set(0,.1,0),x.visible=!!i.car||!b,p.add(x),e.anchors.cars.push({f:i,band:y,group:p,floor:e.cur.i,w:s,d:r,h:o}),i.name&&!i.car){let C=Cs();Bi(C,i.name),C.visible=!0,C.position.set(0,o+.45,0),p.add(C)}break}default:_(ye(s,o,r,u))}let g={mats:f,group:p},m=u+o;if(e.anchors.furniture.push({f:i,floor:e.cur.i,x:i.x,z:i.z,y:e.cur.elev+u,top:e.cur.elev+m,w:s,d:r,h:o,group:p,mats:f}),i.entity||i.stateEntity){let b=new je(new Ye({map:e.glowTex(),color:a,transparent:!0,depthWrite:!1,blending:pn}));b.scale.setScalar(Math.max(1,s*2)),b.position.set(0,m/2,0),b.visible=!1,p.add(b),e.dyn.push({kind:"furniture",entity:i.entity||i.stateEntity,mats:f,glow:b,baseScale:b.scale.x})}if(i.power){let b=Cs();b.position.set(0,m+.35,0),p.add(b),e.dyn.push({kind:"value",entity:i.power,sprite:b,always:i.marker==="always"})}if(i.name&&i.showName){let b=Cs();Bi(b,i.name,"#19e6ff"),b.visible=!0,b.position.set(0,m+.3,0),p.add(b)}return g.group}function Xx(i,t,e,n,s,r,o){let a=i.len+i.extA+i.extB,l=(i.b[0]-i.a[0])/i.len,c=(i.b[1]-i.a[1])/i.len,h=i.h!=null?Math.min(i.h,t.height):t.height,u=cr(n).length>0,d=y=>{if(!u)return h;let x=y-i.extA,C=md(n,i.a[0]+l*x,i.a[1]+c*x);return C===1/0?h:Math.max(.05,Math.min(h,C-e-.02))},f=new gn;f.moveTo(0,0),f.lineTo(a,0);let p=u?Math.max(1,Math.ceil(a/.25)):1;for(let y=p;y>=0;y--){let x=a*y/p;f.lineTo(x,d(x))}f.closePath();let _=o.map(y=>({u0:y.u+i.extA-y.w/2,u1:y.u+i.extA+y.w/2,y0:Math.max(y.sill,.003),y1:y.sill+y.h})).sort((y,x)=>y.u0-x.u0),g=-1;_.forEach(y=>{let x=Math.max(y.u0,.01),C=Math.min(y.u1,a-.01),A=Math.min(y.y1,Math.min(d(x),d(C))-.01);if(C-x<.05||A-y.y0<.05||x<g+.01)return;g=C;let R=new oi;R.moveTo(x,y.y0),R.lineTo(C,y.y0),R.lineTo(C,A),R.lineTo(x,A),R.closePath(),f.holes.push(R)});let m=new Rn(f,{depth:i.t,bevelEnabled:!1,curveSegments:1});m.translate(0,0,-i.t/2);let b=new Vt(m,r.wall);return b.position.set(i.a[0]-l*i.extA,e,i.a[1]-c*i.extA),b.rotation.y=i.rot,b.add(new pe(new Ce(m,25),r.edge)),b.renderOrder=1,b}function $x(i,t,e,n,s){let r=n.th,o=i.type==="door",a=new re,l=t?(t.s.b[0]-t.s.a[0])/t.s.len:Math.cos(-i.rot),c=t?(t.s.b[1]-t.s.a[1])/t.s.len:Math.sin(-i.rot),h=t?t.s.a[0]+l*t.u:i.x,u=t?t.s.a[1]+c*t.u:i.z;a.position.set(h,e+i.sill,u),a.rotation.y=t?t.s.rot:i.rot;let d=t?t.s.t:.15,f=i.w,p=Math.min(i.h,3),_=o?i.style==="front"?16722902:r.door:r.win,g=new le({color:_}),m=new pe(new Ce(new Ae(f,p,d+.02)),g);m.position.y=p/2,a.add(m);let b={kind:"opening",entity:i.entity||null,type:i.type,open:0};if(o&&i.style==="passage")return n.dyn.push(b),a;let y=new re,x=i.hinge==="right"?f/2:-f/2;y.position.set(x,0,0);let C=(i.hinge==="right"?-1:1)*(i.swing==="out"?-1:1),A=new Re({color:_,emissive:_,emissiveIntensity:o?.5:.7,transparent:!0,opacity:o?.75:.35,depthWrite:!1,side:de}),R=o||i.leaves!==2?f:f/2,P=new Vt(new Ae(R-.04,p-.04,o?.045:.02),A);if(P.position.set(-x>0?R/2:-R/2,p/2,0),y.add(P),!o&&i.leaves===2){let S=new Vt(P.geometry,A);S.position.set(-P.position.x,p/2,0),a.add(S)}return a.add(y),b.pivot=y,b.mat=A,b.sign=C,b.maxAngle=o?xe(75):xe(28),n.dyn.push(b),a}function Fi(i,t,e,n){return i.horiz?[n,e,t]:[t,e,n]}function xd(i,t,e,n=.5){let s=lr(t),r=t.overhang??s.overhang,o=s.s0-r,a=s.s1+r,l=s.c0-r,c=s.c1+r,h=s.eaveA-s.ta*r,u=s.eaveB-s.tb*r,d=[Fi(s,l,h,o),Fi(s,l,h,a),Fi(s,s.cr,s.yr,a),Fi(s,s.cr,s.yr,o),Fi(s,c,u,o),Fi(s,c,u,a)],f=new Xt;f.setAttribute("position",new jt(d.flat(),3)),f.setIndex([0,1,2,0,2,3,3,2,5,3,5,4]),f.computeVertexNormals();let p=new Vt(f,e.surf);p.add(new pe(new Ce(f,5),e.line)),p.renderOrder=2,i.add(p);for(let[_,g]of[[s.s0,1],[s.s1,-1]]){let m=new gn;m.moveTo(s.c0,s.base),m.lineTo(s.c1,s.base),m.lineTo(s.c1,Math.max(s.eaveB,s.base)),m.lineTo(s.cr,s.yr),m.lineTo(s.c0,Math.max(s.eaveA,s.base)),m.closePath();let b=new Rn(m,{depth:n,bevelEnabled:!1}),y=new Kt;s.horiz&&y.set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1),b.applyMatrix4(y);let x=g>0?_:_-n;s.horiz?b.translate(x,0,0):b.translate(0,0,x);let C=new Vt(b,e.gable);C.add(new pe(new Ce(b,25),e.edge)),i.add(C)}}function qx(i,t){let e=i.settings?.roof,n=new re;if(!e?.sections?.length)return n;let s=t.th,r=new Re({color:s.roof,emissive:s.roof,emissiveIntensity:t.theme==="day"?0:.25,transparent:!0,opacity:t.theme==="day"?.95:.3,side:de,depthWrite:!1}),o=new le({color:s.roof,transparent:!0,opacity:.9}),a=new Re({color:s.wall,emissive:s.wall,emissiveIntensity:.2,transparent:!0,opacity:s.wallOp+.05,side:de,depthWrite:!1});e.sections.forEach(h=>xd(n,h,{surf:r,line:o,gable:a,edge:t.mats.edge}));let l=h=>{let[u,d]=String(h).split(":"),f=e.sections.find(p=>p.id===u);return f?{g:lr(f),side:d==="b"?"b":"a"}:null},c=(h,u,d,f,p,_)=>{let g=l(h);if(!g)return null;let{g:m,side:b}=g,y=xe(b==="a"?m.pa:m.pb),x=b==="a"?m.c0+d*Math.cos(y):m.c1-d*Math.cos(y),C=(b==="a"?m.eaveA:m.eaveB)+d*Math.sin(y);x+=(b==="a"?-Math.sin(y):Math.sin(y))*f,C+=Math.cos(y)*f;let A=Fi(m,x,C,m.s0+u),R=m.horiz?new Ae(p,.04,_):new Ae(_,.04,p),P=new Vt(R,null);return P.position.set(...A),m.horiz?P.rotation.x=b==="a"?-y:y:P.rotation.z=b==="a"?y:-y,P};return(e.solar||[]).forEach(h=>{let u=h.moduleW||(h.portrait?1.134:1.722),d=h.moduleH||(h.portrait?1.722:1.134),f=h.cols||1,p=h.rows||1,_=new Re({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),g=new le({color:5939455});for(let m=0;m<f;m++)for(let b=0;b<p;b++){let y=h.u+(m-(f-1)/2)*(u+.02),x=h.v+(b-(p-1)/2)*(d+.02),C=c(h.face,y,x,.05,u,d);C&&(C.material=_,C.add(new pe(new Ce(C.geometry),g)),n.add(C),t.anchors.pv.push({mesh:C,mat:_,entity:h.entity||null,wp:h.wp||400}))}h.entity&&t.dyn.push({kind:"solar",entity:h.entity,mat:_,wp:h.wp||400})}),(e.windows||[]).forEach(h=>{let u=c(h.face,h.u,h.v,.05,h.w||1,h.h||1.2);u&&(u.material=new Re({color:s.win,emissive:s.win,emissiveIntensity:.5,transparent:!0,opacity:.55}),n.add(u))}),n}function Yx(i,t,e,n,s){let r=new re,o=i.site?.north??i.settings?.north??0,a=t.roof||{},l=or(t.points,a,o),c=xe(a.pitch??12),h=Math.tan(c),u=t.height||2.8,d=l.L,f=l.W,p=a.overhang??.3,_=u+f*h,g=T=>u+(f/2-T)*h,m=new re;m.position.set(l.cx,0,l.cz),m.rotation.y=l.theta,r.add(m);let b=d/2+p,y=-f/2-p,x=f/2+p,C=new Xt;C.setAttribute("position",new jt([-b,g(y),y,b,g(y),y,b,g(x),x,-b,g(x),x],3)),C.setIndex([0,1,2,0,2,3]),C.computeVertexNormals();let A=new Vt(C,s.roofMats.surf);A.add(new pe(new Ce(C,5),s.lineMat)),A.renderOrder=2,m.add(A);let R=(T,F,O,B)=>{if(!n.label)return;let X=n.label(T,e.theme),k=Xn(l,F,O);X.position.set(k[0],B,k[1]),r.add(X)},P=Ko(d,t)||[{type:"solid",t0:0,t1:d}],S=!!(t.parts?.length||t.layout);if(P.forEach(T=>{let F=Math.min(l.tToU(T.t0),l.tToU(T.t1)),O=Math.max(l.tToU(T.t0),l.tToU(T.t1)),B=O-F,X=(F+O)/2;if(T.type==="garage"||T.type==="solid"||T.type==="bike"){let k=new gn([new K(-f/2,0),new K(f/2,0),new K(f/2,u),new K(-f/2,_)]),Z=new Rn(k,{depth:B,bevelEnabled:!1});Z.applyMatrix4(new Kt().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),Z.translate(F,0,0);let G=new Vt(Z,s.wallMat);if(G.add(new pe(new Ce(Z,25),s.lineMat)),G.userData={site:t.id},G.renderOrder=1,m.add(G),e.pickables.push(G),(T.type==="garage"||T.type==="bike")&&S){let nt=Yo({side:T.doorSide,pt:T,f:l,W:f,hLow:u,bike:T.type==="bike",width:T.door}),ot=new Vt(new Ae(nt.sx,nt.sy,nt.sz),new Re({color:16722902,emissive:16722902,emissiveIntensity:.5,transparent:!0,opacity:.5,depthWrite:!1}));ot.position.set(nt.x,nt.y,nt.z),ot.add(new pe(new Ce(ot.geometry),new le({color:16722902}))),m.add(ot)}R(T.name||(T.type==="solid"?t.name||"":Rs[T.type]||""),X,0,.06)}else{let k=new Ae(B,_,.1),Z=new Vt(k,s.wallMat);Z.position.set(X,_/2,-f/2+.05),Z.add(new pe(new Ce(k),s.lineMat)),Z.userData={site:t.id},m.add(Z),e.pickables.push(Z);let G=T.type==="carport"?T.stalls:1,nt=B/G,ot=[];for(let Pt=0;Pt<=G;Pt++){let $t=F+Pt*nt,$=(it,yt)=>{let st=new Vt(new Ae(.14,yt,.14),s.wallMat);st.position.set($t,yt/2,it),st.add(new pe(new Ce(st.geometry),s.lineMat)),m.add(st)};$(f/2-.08,u),$(-f/2+.08,_),ot.push(new L($t,.03,-f/2),new L($t,.03,f/2))}T.type==="carport"&&m.add(new pe(new Xt().setFromPoints(ot),new le({color:s.col,transparent:!0,opacity:.8})));let pt=new Vt(new Wn(B,f),new Oe({color:s.col,transparent:!0,opacity:.12,side:de,depthWrite:!1}));pt.rotation.x=-Math.PI/2,pt.position.set(X,.02,0),m.add(pt),T.type==="carport"&&Zo(T,T.numberFrom).forEach(Pt=>R(String(Pt.n),l.tToU(Pt.t),0,.05))}}),S&&P.some(T=>T.type==="carport")){let T=P.find(F=>F.type==="carport");R(`Carport \xB7 ${T.stalls} Stellpl\xE4tze`,l.tToU((T.t0+T.t1)/2),f/2+.9,.06)}let v=t.pv;if(v&&v.enabled!==!1){let T=v.over?String(v.over).startsWith("#")?P.find(Z=>Z.index===Number(String(v.over).slice(1))):P.find(Z=>Z.type===v.over):null,F=cd({L:d,W:f,pitchDeg:a.pitch??12,orientation:v.orientation,portrait:v.portrait,fill:v.fill!==!1,rows:v.rows,cols:v.cols,align:v.edge||"center",uCenter:T?l.tToU((T.t0+T.t1)/2):0}),O=new Re({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),B=new le({color:5939455}),X=Math.cos(c),k=Math.sin(c);m.updateMatrixWorld(!0),F.modules.forEach(Z=>{let G=f/2-Z.s*X+.06*k,nt=u+Z.s*k+.06*X,ot=new Vt(new Ae(Z.mw,.04,Z.mh),O);ot.position.set(Z.u,nt,G),ot.rotation.x=c,ot.add(new pe(new Ce(ot.geometry),B)),m.add(ot);let pt=new L;m.updateMatrixWorld(!0),ot.updateWorldMatrix(!0,!1),ot.getWorldPosition(pt),e.anchors.pv.push({mesh:ot,mat:O,entity:v.entity||null,wp:v.wp||420,pos:pt,site:t.id})})}return r}function Zx(i,t,e={}){let n=new re,s=i.site?.buildings||[];if(!s.length)return n;let r=t.theme==="day",o=r?14205861:16757575,a=new Re({color:o,emissive:o,emissiveIntensity:r?0:.18,transparent:!0,opacity:r?.95:.22,depthWrite:!1,side:de}),l=new le({color:o,transparent:!0,opacity:.9}),c={surf:new Re({color:o,emissive:o,emissiveIntensity:r?0:.25,transparent:!0,opacity:r?.95:.32,side:de,depthWrite:!1}),line:l,gable:a,edge:l};return s.forEach(h=>{if(h.visible===!1||!h.points||h.points.length<3)return;if(h.roof?.type==="shed"||h.layout||h.parts?.length){n.add(Yx(i,h,t,e,{wallMat:a,lineMat:l,roofMats:c,col:o}));return}let u=h.height||3,d=new Rn(new gn(h.points.map(g=>new K(g[0],-g[1]))),{depth:u,bevelEnabled:!1,curveSegments:1}),f=new Vt(d,a);f.rotation.x=-Math.PI/2,f.add(new pe(new Ce(d,25),l)),f.userData={site:h.id},f.renderOrder=1,n.add(f),t.pickables.push(f),(h.storeys||[]).filter(g=>g>.05&&g<u-.3).forEach(g=>{let m=new gn(h.points.map(x=>new K(x[0],-x[1])));i.floors.forEach((x,C)=>{let A=$n(i,C);A>=g||x.furniture.filter(Cc).forEach(R=>{let P=Pc(R);A+(R.h||2.7)>=g-.35&&P.every(S=>en(S,h.points))&&m.holes.push(new oi(P.map(S=>new K(S[0],-S[1]))))})});let b=new Rn(m,{depth:.18,bevelEnabled:!1,curveSegments:1}),y=new Vt(b,new Re({color:o,emissive:o,emissiveIntensity:r?0:.35,transparent:!0,opacity:r?.9:.45,side:de,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=g-.18,y.add(new pe(new Ce(b,25),l)),n.add(y)});let p=u,_=h.roof||{};if(_.type==="gable"&&h.points.length===4){let[g,m,b]=h.points,y=[m[0]-g[0],m[1]-g[1]],x=[b[0]-m[0],b[1]-m[1]],C=Math.hypot(...y),A=Math.hypot(...x),R=C>=A?y:x,P=Math.max(C,A),S=Math.min(C,A),v=_.pitch||25,T={axis:"x",x0:-P/2,x1:P/2,z0:-S/2,z1:S/2,base:u,eaveA:u,eaveB:u,pitchA:v,pitchB:v,overhang:_.overhang??.3},F=new re;xd(F,T,c,.05),F.position.set(h.points.reduce((O,B)=>O+B[0],0)/h.points.length,0,h.points.reduce((O,B)=>O+B[1],0)/h.points.length),F.rotation.y=-Math.atan2(R[1],R[0]),n.add(F),p=lr(T).yr}if(h.name&&e.label){let g=li(h.points),m=e.label(h.name,t.theme);m.position.set(g[0],p+.1,g[1]),n.add(m)}}),n}function Kx(i,t,e){let n=new re;n.position.set(t[0],.05,t[1]);let s=xe(i||0),r=new L(Math.sin(s),0,-Math.cos(s)),o=e.theme==="day"?3359061:1697535,a=new Vt(new ys(1.1,1.18,48),new Oe({color:o,side:de,transparent:!0,opacity:.8}));a.rotation.x=-Math.PI/2,n.add(a),n.add(new Ze(new Xt().setFromPoints([r.clone().multiplyScalar(-.9),r.clone().multiplyScalar(1.5)]),new le({color:16722902})));let l=Cs();return Bi(l,"N","#ff2bd6"),l.visible=!0,l.scale.set(.9,.22,1),l.position.copy(r.clone().multiplyScalar(1.9)),l.position.y=.3,n.add(l),n}function yd(i,t){let e=t.theme||"neon",n=ki[e]||ki.neon,s={wall:new Re({color:n.wall,emissive:n.wall,emissiveIntensity:e==="day"?0:.25,transparent:!0,opacity:n.wallOp,depthWrite:!1}),edge:new le({color:e==="day"?6713477:n.wall,transparent:!0,opacity:n.edgeOp})},r={rooms:[],furniture:[],devices:[],pv:[],screens:[],cars:[]},o={theme:e,th:n,mats:s,dyn:[],pickables:[],glowTex:t.glowTex,anchors:r,cur:{elev:0,i:0}},a=new re,l={...ar,...i.settings||{}};i.floors.forEach((h,u)=>{if(u>t.maxFloor)return;let d=$n(i,u);o.cur={elev:d,i:u};let f=new re,p=u<t.maxFloor&&t.maxFloor!==1/0?.7:1,_=_d(i,u);h.rooms.forEach(y=>{let x=new gn(y.points.map(v=>new K(v[0],v[1])));_.forEach(v=>{v.every(T=>en(T,y.points))&&x.holes.push(new oi(v.map(T=>new K(T[0],T[1]))))});let C=new Rt(y.color||"#19e6ff"),A=new Re({color:C.clone().multiplyScalar(n.floorK),emissive:C,emissiveIntensity:n.floorEm*p,side:de}),R=new Vt(new Rn(x,{depth:l.slab,bevelEnabled:!1,curveSegments:1}),A);R.rotation.x=Math.PI/2,R.position.y=0,R.userData={room:y.id,floor:h.id},f.add(R),o.pickables.push(R);let P=li(y.points);if(r.rooms.push({id:y.id,name:y.name,area:y.area,room:y,floor:u,x:P[0],z:P[1],y:d+h.height*.5,elev:d}),y.name){let v=li(y.points),T=t.label(y.name,e);T.position.set(v[0],.04,v[1]),f.add(T)}let S=t.climateFor?.(y);if(S&&(S.temperature||S.humidity||S.co2)){let v=li(y.points),T=Cs(448);T.scale.set(3.15,.45,1),T.position.set(v[0],1.05,v[1]),f.add(T),o.dyn.push({kind:"roomclimate",...S,sprite:T,mat:A,base:{color:A.color.clone(),emissive:A.emissive.clone(),ei:A.emissiveIntensity}})}});let g=jo(h,l),m=new Map,b=[];h.openings.forEach(y=>{let x=gd(y,g);x&&(m.has(x.s)||m.set(x.s,[]),m.get(x.s).push({...y,u:x.u})),f.add($x(y,x,0,o,i)),x||b.push(y)}),g.forEach(y=>{let x=Xx(y,h,d,i,n,s,m.get(y)||[]);x.position.y=0,f.add(x)}),h.furniture.forEach(y=>f.add(Wx(y,0,o))),t.devicesFor(h).forEach(y=>{let x=ke(y.entity),C=y.y??(x==="light"?h.height-.4:x==="camera"?Math.min(2.4,h.height-.25):.9),A=x==="light"?new bo(.14,16,12):x==="cover"?new Ae(.5,.08,.08):new Ae(.22,.22,.22),R=new Vt(A,new Re({color:4475494,emissive:0}));R.position.set(y.x,C,y.z),R.userData={entity:y.entity};let P=new je(new Ye({map:t.glowTex(),color:16765066,transparent:!0,depthWrite:!1,blending:pn}));P.position.copy(R.position);let S=x==="light"?2.4:1.1;if(P.scale.setScalar(S),P.visible=!1,f.add(R,P),o.pickables.push(R),r.devices.push({d:y,entity:y.entity,floor:u,x:y.x,y:d+C,z:y.z,kind:x,mesh:R}),o.dyn.push({kind:x,entity:y.entity,mesh:R,glow:P,baseScale:S,pulse:x==="light"}),y.name&&y.showName){let v=Cs();Bi(v,y.name),v.visible=!0,v.position.set(y.x,C+.35,y.z),f.add(v)}}),f.position.y=d,a.add(f)}),t.showRoof&&t.maxFloor>=i.floors.length-1&&a.add(qx(i,o)),t.showSite!==!1&&a.add(Zx(i,o,t));let c=[...i.floors.flatMap(h=>h.rooms.flatMap(u=>u.points)),...(i.site?.buildings||[]).flatMap(h=>h.points)];if(c.length&&i.site?.north!=null){let[h,,,u]=Di(c);a.add(Kx(i.site.north,[h-2.5,u+2.5],o))}return{root:a,dyn:o.dyn,pickables:o.pickables,anchors:r}}var Jx={wood:"#e0a458",tiles:"#58c4dd",stone:"#9aa5b8",carpet:"#b48ad8",concrete:"#8d99ae"},vd=i=>i==null?null:Number(i),ci=i=>i&&i!=="none"?i:null;function jx(i){let t=i?.result??i,e=t?.building??t;if(!e||!Array.isArray(e.floors))throw new Error("Keine NeonPlan-3D-Daten (floors fehlen)");return{building:e,meta:{version:t?.version,revision:t?.revision}}}function bd(i){let{building:t,meta:e}=jx(i),n=t.settings||{},s={version:2,settings:{wallExterior:n.wall_exterior??.24,wallInterior:n.wall_interior??.12,north:n.north??0,autoDevices:!0,energy:t.energy||null,roof:Qx(n.roof),source:{app:"neonplan3d",version:e.version??null,revision:e.revision??null}},floors:[]};return[...t.floors].sort((o,a)=>(o.elevation??0)-(a.elevation??0)).forEach(o=>{let a=(o.rooms||[]).map(d=>({id:d.id,name:d.name||"",area:d.area_id||null,color:Jx[d.floor_material]||"#19e6ff",material:d.floor_material||null,points:d.points.map(f=>[f[0],f[1]]),wallT:d.wall_thickness||null,wallH:d.wall_heights||null,climate:d.climate&&Object.values(d.climate).some(Boolean)?d.climate:null})),l=(o.walls||[]).map(d=>({id:d.id,a:[...d.a],b:[...d.b],t:vd(d.thickness),h:vd(d.height)})),c=[];(o.openings||[]).forEach(d=>{let f,p;if(d.wall){let x=(o.walls||[]).find(C=>C.id===d.wall);if(!x)return;[f,p]=[x.a,x.b]}else{let x=(o.rooms||[]).find(A=>A.id===d.room_id);if(!x)return;let C=d.edge||0;[f,p]=[x.points[C%x.points.length],x.points[(C+1)%x.points.length]]}let _=p[0]-f[0],g=p[1]-f[1],m=Math.hypot(_,g)||1,b=d.offset??m/2,y=d.type==="door";c.push({id:d.id,type:d.type,x:+(f[0]+_/m*b).toFixed(4),z:+(f[1]+g/m*b).toFixed(4),rot:-Math.atan2(g,_),w:d.width??(y?.9:1.2),h:d.height??(y?2.1:1.1),sill:d.sill??(y?0:.9),style:d.style||null,hinge:d.hinge||"left",swing:d.swing||"in",leaves:d.leaves||1,entity:ci(d.contact)||ci(d.sensor),cover:ci(d.cover)})});let h=(o.furniture||[]).map(d=>({id:d.id,type:d.type,x:d.x??0,z:d.z??0,rot:d.rotation||0,w:d.w,d:d.d,h:d.h,mountY:d.mount_y??null,name:d.name||null,showName:!!d.show_name,entity:ci(d.entity),power:ci(d.power),stateEntity:ci(d.state_entity),marker:d.marker||null})),u=(o.placements||[]).map((d,f)=>({id:`${o.id}_dev${f}`,entity:d.entity_id,x:d.x,z:d.z,y:d.y??null,name:d.name||null,showName:!!d.show_name}));s.floors.push({id:o.id,name:o.name,elevation:o.elevation??0,height:o.height??2.6,rooms:a,walls:l,openings:c,devices:u,furniture:h})}),Oi(s)}function Qx(i){return!i||!Array.isArray(i.sections)||!i.sections.length?null:{overhang:i.overhang??.5,sections:i.sections.map(t=>({id:t.id,shape:t.shape||"gable",axis:t.axis||"x",x0:t.x0,x1:t.x1,z0:t.z0,z1:t.z1,base:t.base,eaveA:t.eave_a,eaveB:t.eave_b,pitchA:t.pitch_a??i.pitch??40,pitchB:t.pitch_b??i.pitch??40,overhang:t.overhang??i.overhang??.5,flip:!!t.flip})),solar:(i.solar||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:t.rows||1,cols:t.cols||1,portrait:t.portrait!==!1,entity:ci(t.entity),wp:t.wp||null,name:t.name||null,moduleW:t.module_w??null,moduleH:t.module_h??null})),windows:(i.windows||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,w:t.w||1,h:t.h||1.2,entity:ci(t.contact)}))}}var Md=["light","switch","cover","fan","lock","input_boolean","media_player"],ty=["off","closed","unavailable","unknown","idle","locked","docked","standby","paused"],wd={bed:[1.8,2,.5],sofa_l:[2.4,1.6,.85],table:[1.6,.9,.75],chair:[.45,.45,.9],desk:[1.4,.7,.75],office_chair:[.6,.6,1],wardrobe:[1,.6,2.1],dresser:[1.2,.5,.9],shelf:[.8,.3,1.8],tv_board:[1.6,.45,.5],sideboard:[1.4,.45,.85],kitchen:[2.4,.62,.9],kitchen_tall:[.6,.62,2.1],kitchen_wall:[1,.35,.7],island:[1.8,.9,.9],fridge:[.6,.65,1.8],stove:[.6,.6,.9],sink:[.8,.6,.9],dishwasher:[.6,.6,.85],washer:[.6,.6,.85],shower:[.9,.9,2.1],bathtub:[1.7,.75,.55],wc:[.4,.7,.8],washbasin:[.6,.45,.85],stairs:[.9,2.4,2.8],stairs_u:[1.9,3.2,2.8],rug:[2,3,.02],stool:[.35,.35,.45],bench:[1.2,.4,.45],robot_vacuum:[.36,.36,.1],led_strip:[1,.05,.05],inverter:[.5,.2,.65],meter:[.5,.2,1.1],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},Sd=Object.keys(wd),ey=(i,t)=>t.split(".").reduce((e,n)=>e?.[n],i),ny=(i,t,e)=>{let n=t.split("."),s=n.pop(),r=n.reduce((o,a)=>o[a]??={},i);r[s]=e},sn=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),iy=`
:host{display:block;height:100%;--bg:#07080f;--fg:#dfe8ff;--neon:#19e6ff;--pink:#ff2bd6;color:var(--fg);font-family:var(--paper-font-body1_-_font-family,system-ui,sans-serif)}
.wrap{display:flex;flex-direction:column;height:100%;min-height:360px;background:var(--bg);position:relative}
.bar{display:flex;gap:6px;flex-wrap:wrap;align-items:center;padding:6px 8px;background:#0d1020;border-bottom:1px solid #1d2a4a}
.bar>span{display:inline-flex;gap:4px;flex-wrap:wrap}
.main{flex:1;display:flex;min-height:0}
#ed{flex:1;min-width:0;background:#0a0d1a;cursor:crosshair;touch-action:none;outline:none}
#view{flex:1;min-width:0;position:relative}
#view canvas{display:block;width:100%;height:100%}
.side{width:250px;background:#0d1020;border-left:1px solid #1d2a4a;padding:8px;overflow:auto;font-size:13px}
.hidden{display:none!important}
button,select,input{background:#141a33;color:var(--fg);border:1px solid #2a3b6a;border-radius:6px;padding:5px 9px;font:inherit;font-size:13px}
button{cursor:pointer}button:hover{border-color:var(--neon)}
button.on{background:#0b3c4a;border-color:var(--neon);box-shadow:0 0 8px var(--neon)}
.side label{display:block;margin:8px 0 2px;opacity:.7;font-size:12px}
.side input,.side select{width:100%;box-sizing:border-box}
.side input[type=checkbox]{width:auto;margin-right:6px}
.side h4{margin:12px 0 4px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--neon)}
.side .row{display:flex;gap:6px}.side .row>*{flex:1}
.side button.full{width:100%;margin-top:6px;text-align:left}
.dev{display:flex;justify-content:space-between;align-items:center;padding:6px 4px;border-bottom:1px solid #1d2a4a;cursor:pointer}
.dev span.s{font-size:11px;opacity:.7}
.dev.on b{color:var(--neon)}
.hint{position:absolute;left:8px;bottom:8px;font-size:12px;opacity:.6;pointer-events:none}
.msg{position:absolute;left:50%;top:10px;transform:translateX(-50%);background:#0b3c4a;border:1px solid var(--neon);padding:6px 12px;border-radius:8px;font-size:13px;z-index:5}
.sp{flex:1}
#chips{position:absolute;top:8px;right:8px;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;pointer-events:none;z-index:3}
#chips span{background:rgba(7,8,15,.75);border:1px solid #2a3b6a;border-radius:14px;padding:3px 10px;font-size:12px}
#labels{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.card3d{background:rgba(10,16,34,.72);border:1px solid rgba(25,230,255,.55);border-radius:10px;padding:6px 10px;font-size:12px;color:#dfe8ff;backdrop-filter:blur(4px);box-shadow:0 0 14px rgba(25,230,255,.25);white-space:nowrap;transform:translateY(-6px)}
.card3d b{color:#19e6ff}
.card3d .sub{opacity:.7;font-size:11px}
.card3d button{padding:2px 8px;font-size:12px}
.holo .en{min-width:210px}
.holo .r{display:flex;gap:8px;align-items:baseline;justify-content:space-between;margin:2px 0}
.holo .r b{color:#fff}.holo .r .sub{opacity:.65;font-size:11px}
.holo canvas{display:block;margin-top:4px;width:100%}
.pw{padding:2px 8px;font-size:11px}
.pin{padding:3px 9px;font-size:11px}
.carcard{min-width:210px}
.carcard .r{display:flex;justify-content:space-between;gap:12px;margin:2px 0}
.carcard .bar{height:7px;border-radius:4px;background:#1b2440;margin:6px 0;overflow:hidden}.carcard .bar i{display:block;height:100%}
.carcard .btns{display:flex;gap:4px;margin-top:6px;flex-wrap:wrap}
.prow{border:1px solid #1d2a4a;border-radius:8px;padding:4px;margin:4px 0}
.prow .l1,.prow .l2,.prow .l3{display:flex;gap:3px;margin:2px 0}.prow .l1 select,.prow .l3 select{flex:1}.prow .l2 input{min-width:0}
.prow button{padding:2px 6px}
.np{display:flex;gap:8px;align-items:center;min-width:220px}
.np img{width:46px;height:46px;border-radius:6px;object-fit:cover;background:#111}
.np .t{max-width:160px;overflow:hidden;text-overflow:ellipsis}
.np .ctl{display:flex;gap:4px;align-items:center;margin-top:3px}
.np input[type=range]{width:90px;padding:0}
.overlay h4{color:var(--neon);text-transform:none;letter-spacing:0}
.overlay label{display:block;margin:6px 0 2px;opacity:.7;font-size:12px}
.overlay input,.overlay select{width:100%;box-sizing:border-box}
.overlay .row{display:flex;gap:8px}.overlay .row>*{flex:1}
.overlay .dev{border-radius:6px}.overlay .dev:hover{background:#141a33}
.overlay{position:absolute;z-index:6;background:rgba(9,13,28,.94);border:1px solid #2a3b6a;border-radius:12px;padding:12px;font-size:13px;box-shadow:0 8px 30px rgba(0,0,0,.5)}
@media(max-width:700px){.main{flex-direction:column}.side{width:auto;max-height:38%;border-left:0;border-top:1px solid #1d2a4a}}
`,Ic=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.plan=Rc(),this.fi=0,this.cut=!1,this.editing=!1,this.tool="select",this.sel=null,this.draft=[],this.cam2={x:5,z:4,s:40},this.dyn=[],this.pickables=[],this.cfg={},this._ready=!1,this.panelRoom=null,this.pendingEntity="",this.furnType="table",this.grid=.1,this.showRoof=!0,this.showSite=!0,this.showClimate=!0,this.heatmap=!1,this.hasClimate=!1,this.multi=[],this.theme="neon",this.undoStack=[],this._labels=new Map,this.chips={},this.holo=!0,this.features=od(this)}set hass(t){let e=!this._hass;this._hass=t,e&&this._ready&&this.load(),this.updateStates(),!this.editing&&this.panelRoom&&this.renderRoomPanel()}get hass(){return this._hass}getStates(){return this._replayStates||this._hass?.states}fxOn(t){if(this.cfg[t]!=null)return!!this.cfg[t];try{let e=localStorage.getItem("hp3d.fx."+t);if(e!=null)return e==="1"}catch{}return!0}setFx(t,e){try{localStorage.setItem("hp3d.fx."+t,e?"1":"0")}catch{}let n=this.features.find(s=>s.id===t);n&&(n.on=e,n.group.visible=e,e?n.update(this.getStates()||{}):n.reset(),this.renderBar())}openFxMenu(){this.closeOverlay();let t=document.createElement("div");t.className="overlay",t.style.cssText="right:12px;top:52px;width:230px",t.innerHTML=`<h4 style="margin:0 0 6px">Funktionen einrichten</h4>${this.features.filter(e=>e.settingsLabel).map((e,n)=>`<button class="full" data-i="${n}">${e.settingsLabel}</button>`).join("")}`,t.onclick=e=>{let n=e.target.closest("[data-i]")?.dataset.i;n!=null&&this.features.filter(s=>s.settingsLabel)[+n].openSettings()},this.shadowRoot.querySelector(".wrap").append(t),this._overlay=t}closeOverlay(){this._overlay&&(this._overlay.remove(),this._overlay=null)}setChip(t,e){e?this.chips[t]=e:delete this.chips[t];let n=this.$("#chips");n&&(n.innerHTML=Object.values(this.chips).map(s=>`<span>${s}</span>`).join(""))}set config(t){this.cfg=t||{},this.theme=this.cfg.theme==="day"?"day":"neon",this.showRoof=this.cfg.show_roof!==!1,this.showSite=this.cfg.show_site!==!1,this.showClimate=this.cfg.show_climate!==!1,this.heatmap=!!this.cfg.heatmap,this._ready&&(this.renderBar(),this.rebuild3D())}connectedCallback(){if(this._ready)return;this._ready=!0,this.shadowRoot.innerHTML=`<style>${iy}</style>
    <div class="wrap">
      <div class="bar">
        <span id="floors"></span>
        <span id="toggles"></span>
        <span id="tools" class="hidden"></span>
        <span class="sp"></span>
        <button id="undo" class="hidden" title="R\xFCckg\xE4ngig (Strg+Z)">\u21B6</button>
        <button id="edit" class="hidden">\u270F\uFE0F Editor</button>
        <button id="save" class="hidden">\u{1F4BE} Speichern</button>
      </div>
      <div class="main">
        <canvas id="ed" class="hidden"></canvas>
        <div id="view"><div id="labels"></div><div id="chips"></div><div class="hint" id="hint"></div></div>
        <div class="side hidden" id="side"></div>
      </div>
    </div>`;let t=e=>this.shadowRoot.querySelector(e);this.$=t,this.edCanvas=t("#ed"),this.viewEl=t("#view"),t("#edit").onclick=()=>this.setEditing(!this.editing),t("#save").onclick=()=>this.save(),t("#undo").onclick=()=>this.undo(),this.init3D(),this.initEditor(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.shadowRoot.querySelector(".wrap")),this._hass?this.load():this.setPlan(this.plan,{fit:!0})}disconnectedCallback(){this.ro?.disconnect(),cancelAnimationFrame(this._raf),this.renderer?.dispose(),this._ready=!1}async load(){let t=null;try{t=await this._hass.callWS({type:"homeplan3d/get"})}catch(e){console.error(e)}this.setPlan(t||Rc(),{fit:!0})}setPlan(t,{fit:e=!1}={}){this.plan=Oi(t),this.plan.floors.length||(this.plan.floors=[Jo(1)]);let n=this.plan.floors.length-1;this.fi=this.cfg.floor!=null?Math.max(0,Math.min(this.cfg.floor,n)):n,this.cut=this.cfg.floor!=null,this.sel=null,this.draft=[],this.panelRoom=null;let s=this._hass?.user?.is_admin!==!1&&this.cfg.mode!=="card"&&!!this._hass;this.$("#edit").classList.toggle("hidden",!s),this.renderBar(),this.rebuild3D(),e&&this.fit(),this.draw2D()}async save(){try{await this._hass.callWS({type:"homeplan3d/save",plan:this.plan}),this.msg("\u2705 Gespeichert")}catch(t){this.msg("\u274C Speichern fehlgeschlagen: "+(t.message||t.code))}}msg(t){let e=document.createElement("div");e.className="msg",e.textContent=t,this.shadowRoot.querySelector(".wrap").append(e),setTimeout(()=>e.remove(),3500)}get floor(){return this.plan.floors[this.fi]}pushUndo(){this.undoStack.push(JSON.stringify(this.plan)),this.undoStack.length>40&&this.undoStack.shift()}undo(){let t=this.undoStack.pop();t&&(this.plan=Oi(JSON.parse(t)),this.fi=Math.min(this.fi,this.plan.floors.length-1),this.sel=null,this.draft=[],this.renderBar(),this.rebuild3D(),this.renderSide(),this.draw2D())}changed({side:t=!1}={}){this.rebuild3D(),this.draw2D(),t&&this.renderSide()}renderBar(){let t=this.$("#floors");t.innerHTML="";let e=(o,a,l,c)=>{let h=document.createElement("button");return h.textContent=o,h.className=a||"",c&&(h.title=c),h.onclick=l,h};!this.editing&&this.plan.floors.length>1&&t.append(e("Alle",this.cut?"":"on",()=>{this.cut=!1,this.renderBar(),this.rebuild3D()},"Ganzes Geb\xE4ude"));for(let o=this.plan.floors.length-1;o>=0;o--){let a=this.plan.floors[o];t.append(e(a.name,o===this.fi&&(this.editing||this.cut)?"on":"",()=>{this.fi=o,this.cut=!0,this.sel=null,this.renderBar(),this.rebuild3D(),this.draw2D(),this.renderSide()}))}this.editing&&t.append(e("+","",()=>{this.pushUndo(),this.plan.floors.push(Jo(this.plan.floors.length+1)),this.fi=this.plan.floors.length-1,this.renderBar(),this.changed({side:!0})},"Etage hinzuf\xFCgen"));let n=this.$("#toggles");n.innerHTML="",cr(this.plan).length&&n.append(e("Dach",this.showRoof?"on":"",()=>{this.showRoof=!this.showRoof,this.renderBar(),this.rebuild3D()})),this.plan.site?.buildings?.length&&n.append(e("Gel\xE4nde",this.showSite?"on":"",()=>{this.showSite=!this.showSite,this.renderBar(),this.rebuild3D(),this.draw2D()},"Weitere Geb\xE4ude auf dem Flurst\xFCck")),this.features.forEach(o=>{o.available()&&(n.append(e(o.label,o.on?"on":"",()=>this.setFx(o.id,!o.on),o.title)),o.on&&o.toolbar().forEach(a=>n.append(e(a.label,a.on?"on":"",a.fn,a.title))))}),this.features.some(o=>o.usesHolo&&o.available())&&n.append(e("\u25C8 Karten",this.holo?"on":"",()=>{this.holo=!this.holo,this.renderBar(),this.updateStates()},"Karten und Hologramme im Raum ein- oder ausblenden")),this.hasClimate&&(n.append(e("\u{1F321} Klima",this.showClimate?"on":"",()=>{this.showClimate=!this.showClimate,this.renderBar(),this.updateStates()},"Temperatur und Luftfeuchte in den R\xE4umen")),n.append(e("\u{1F525} W\xE4rme",this.heatmap?"on":"",()=>{this.heatmap=!this.heatmap,this.renderBar(),this.updateStates()},"R\xE4ume nach Temperatur einf\xE4rben"))),n.append(e(this.theme==="day"?"\u2600":"\u{1F319}","",()=>{this.theme=this.theme==="day"?"neon":"day",this.renderBar(),this.rebuild3D()},"Darstellung wechseln"));let s=this.$("#tools");s.innerHTML="",[["select","\u2196 Auswahl"],["rect","\u25AD Raum"],["room","\u2B20 Polygon"],["wall","\u25AC Wand"],["door","\u{1F6AA} T\xFCr"],["window","\u{1FA9F} Fenster"],["furn","\u{1FA91} M\xF6bel"],["device","\u{1F4A1} Ger\xE4t"],["building","\u{1F3E0} Geb\xE4ude"],["erase","\u{1F5D1}"]].forEach(([o,a])=>s.append(e(a,this.tool===o?"on":"",()=>{this.tool=o,this.draft=[],this.renderBar(),this.renderSide(),this.draw2D()}))),s.append(e("\u2922","",()=>{this.fit2D(),this.draw2D()},"Ansicht einpassen")),s.append(e("\u2699 Funktionen","",()=>this.openFxMenu(),"Wetter, Energie, Auto, Kameras \u2026 einrichten"))}setEditing(t){this.editing=t,this.panelRoom=null;for(let[e,n]of[["#tools",t],["#save",t],["#undo",t]])this.$(e).classList.toggle("hidden",!n);this.edCanvas.classList.toggle("hidden",!t),this.$("#side").classList.toggle("hidden",!t),this.$("#edit").classList.toggle("on",t),this.renderBar(),this.renderSide(),this.rebuild3D(),this.resize(),t&&this.fit2D(),this.draw2D()}fit2D(){let t=this.edCanvas;if(!t.width)return;let e=this.floor.rooms.flatMap(a=>a.points);if(e.length||(e=this.plan.floors.flatMap(a=>a.rooms.flatMap(l=>l.points))),e.length||(e=(this.plan.site?.buildings||[]).flatMap(a=>a.points)),!e.length)return;let[n,s,r,o]=Di(e);this.cam2.x=(n+r)/2,this.cam2.z=(s+o)/2,this.cam2.s=Math.max(5,Math.min(120,Math.min(t.width/((r-n)*1.15+1),t.height/((o-s)*1.15+1))))}hint(t){this.$("#hint").textContent=t||""}formHtml(t,e){return e.map(n=>{let s=ey(t,n.k)??n.def,r=`data-k="${n.k}" data-t="${n.t||"text"}"`;return n.t==="select"?`<label>${n.l}</label><select ${r}>${n.o.map(o=>{let[a,l]=Array.isArray(o)?o:[o,o];return`<option value="${sn(a)}" ${a===s?"selected":""}>${sn(l)}</option>`}).join("")}</select>`:n.t==="checkbox"?`<label><input type="checkbox" ${r} ${s?"checked":""}>${n.l}</label>`:n.t==="number"?`<label>${n.l}</label><input ${r} type="number" step="${n.s||.05}" value="${s??""}" placeholder="${n.p||""}">`:`<label>${n.l}</label><input ${r} ${n.t==="color"?'type="color"':""} ${n.list?`list="${n.list}"`:""} ${n.p?`placeholder="${sn(n.p)}"`:""} value="${sn(s??"")}">`}).join("")}bindForm(t,e,n){t.querySelectorAll("[data-k]").forEach(s=>{s._bound||(s._bound=!0,s.onchange=()=>{this.pushUndo();let r=s.dataset.t,o=s.value;r==="number"?o=s.value===""?null:+s.value:r==="checkbox"?o=s.checked:o===""&&(o=null),ny(e,s.dataset.k,o),n?.(s),this.changed()})})}renderSide(){let t=this.$("#side");if(!this.editing)return;let e=this._hass,n=this.floor,s={select:"Ziehen verschiebt \xB7 Entf l\xF6scht \xB7 leere Fl\xE4che aufziehen w\xE4hlt mehrere \xB7 Umschalt+Klick f\xFCgt hinzu \xB7 Strg+Z",rect:"Diagonal aufziehen",room:"Punkte klicken, Doppelklick schlie\xDFt",wall:"Start/Ende klicken, Esc beendet",door:"Auf eine Wand klicken",window:"Auf eine Wand klicken",furn:"Typ w\xE4hlen, dann in den Raum klicken",device:"Entit\xE4t w\xE4hlen, dann in den Raum klicken",building:"Geb\xE4ude auf dem Gel\xE4nde diagonal aufziehen",erase:"Element anklicken"};this.hint(s[this.tool]);let o=`<datalist id="ents">${Object.keys(e?.states||{}).sort().map(p=>`<option value="${p}">`).join("")}</datalist>`;o+=`<h4>Etage</h4><div data-obj="floor">${this.formHtml(n,[{k:"name",l:"Name"},{k:"height",l:"Raumh\xF6he (m)",t:"number"},{k:"elevation",l:"H\xF6he Fu\xDFboden (m, leer = automatisch)",t:"number",p:"auto"}])}</div>`,o+=`<label><input type="checkbox" data-plan="autoDevices" ${this.plan.settings.autoDevices?"checked":""}>Ger\xE4te aus HA-Bereichen automatisch platzieren</label>`,o+=`<label>Raster</label><select id="grid">${[.05,.1,.25,.5].map(p=>`<option ${p===this.grid?"selected":""}>${p}</option>`).join("")}</select>`,(this.tool==="device"||this.tool==="door"||this.tool==="window")&&(o+=`<h4>${this.tool==="device"?"Ger\xE4t":"Kontaktsensor"}</h4><label>Entit\xE4t</label><input id="pent" list="ents" value="${sn(this.pendingEntity)}" placeholder="light.wohnzimmer">`),this.tool==="furn"&&(o+=`<h4>M\xF6bel</h4><label>Typ</label><select id="ftype">${Sd.map(p=>`<option ${p===this.furnType?"selected":""}>${p}</option>`).join("")}</select>`);let a=this.sel,l=(p,_)=>p.find(g=>g.id===_),c=null,h="";if(this.multi.length>1){let p={};this.multi.forEach(g=>p[g.kind]=(p[g.kind]||0)+1);let _={device:"Ger\xE4te",furniture:"M\xF6bel",opening:"\xD6ffnungen",room:"R\xE4ume",wall:"W\xE4nde",site:"Geb\xE4ude"};h+=`<h4>Auswahl</h4><div style="font-size:12px;opacity:.85">${this.multi.length} Elemente: ${Object.entries(p).map(([g,m])=>`${m} ${_[g]||g}`).join(", ")}</div>
        <button class="full" id="multi-del">\u{1F5D1} Auswahl entfernen</button>
        <div style="font-size:11px;opacity:.6;margin-top:4px">Automatisch platzierte Ger\xE4te werden ausgeblendet. Ziehen verschiebt die ganze Auswahl.</div>`}else if(a?.kind==="room"){if(c=l(n.rooms,a.id),c){let p=Object.values(e?.areas||{}),_=this.areaClimate(c.area);h+=`<h4>Raum</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"area",l:"HA-Bereich (Ger\xE4te automatisch)",t:"select",o:[["","\u2013 keiner \u2013"],...p.map(g=>[g.area_id,g.name]),...c.area&&!p.some(g=>g.area_id===c.area)?[[c.area,c.area]]:[]]},{k:"color",l:"Farbe",t:"color"},{k:"autoDevices",l:"Ger\xE4te aus dem HA-Bereich automatisch platzieren",t:"checkbox",def:!0},{k:"climate.temperature",l:"Temperatur-Sensor",list:"ents",p:_.temperature?`automatisch: ${_.temperature}`:""},{k:"climate.humidity",l:"Feuchte-Sensor",list:"ents",p:_.humidity?`automatisch: ${_.humidity}`:""},{k:"climate.co2",l:"CO\u2082-Sensor",list:"ents",p:_.co2?`automatisch: ${_.co2}`:""}])}<div class="hint2" style="opacity:.6;font-size:11px;margin-top:6px">${Ho(c.points).toFixed(1)} m\xB2</div>`}}else if(a?.kind==="wall")c=l(n.walls,a.id),c&&(h+=`<h4>Wand</h4>${this.formHtml(c,[{k:"t",l:"St\xE4rke (m)",t:"number",p:"auto"},{k:"h",l:"H\xF6he (m, leer = voll)",t:"number"}])}`);else if(a?.kind==="device"){if(c=l(n.devices,a.id),c)h+=`<h4>Ger\xE4t</h4>${this.formHtml(c,[{k:"entity",l:"Entit\xE4t",list:"ents"},{k:"name",l:"Anzeigename"},{k:"showName",l:"Name anzeigen",t:"checkbox"},{k:"y",l:"H\xF6he (m)",t:"number",p:"auto"},...ke(c.entity)==="camera"?[{k:"rot",l:"Blickrichtung (\xB0 im Uhrzeigersinn, 0 = im Plan nach unten)",t:"number",s:5,p:"0"},{k:"tilt",l:"Neigung nach unten (\xB0)",t:"number",s:5,p:"25"},{k:"fov",l:"\xD6ffnungswinkel (\xB0)",t:"number",s:5,p:"90"},{k:"reach",l:"Reichweite im Plan (m)",t:"number",s:.5,p:"7"},{k:"motion",l:"Bewegungsmelder (leer = am Kamera-Ger\xE4t suchen)",list:"ents"}]:[]])}`;else if(this.isAuto(a)){let p=this.itemOf(a);p&&(h+=`<h4>Ger\xE4t (automatisch)</h4><div style="font-size:12px;opacity:.85;word-break:break-all">${sn(p.entity)}</div>
          <div style="font-size:11px;opacity:.6;margin:4px 0">Aus dem HA-Bereich des Raums platziert. Ziehen setzt es fest, Entf blendet es aus.</div>
          <button class="full" id="auto-pin">\u{1F4CC} Festsetzen</button><button class="full" id="auto-hide">\u{1F648} Ausblenden</button>`)}}else a?.kind==="opening"?(c=l(n.openings,a.id),c&&(h+=`<h4>${c.type==="door"?"T\xFCr":"Fenster"}</h4>${this.formHtml(c,[{k:"w",l:"Breite (m)",t:"number"},{k:"h",l:"H\xF6he (m)",t:"number"},{k:"sill",l:"Br\xFCstung (m)",t:"number"},{k:"style",l:"Art",t:"select",o:[["","Standard"],"front","interior","passage"]},{k:"hinge",l:"Angel",t:"select",o:["left","right"]},{k:"swing",l:"\xD6ffnet nach",t:"select",o:["in","out"]},{k:"entity",l:"Kontaktsensor",list:"ents"}])}`)):a?.kind==="furniture"?(c=l(n.furniture,a.id),c&&(h+=`<h4>M\xF6bel</h4>${this.formHtml(c,[{k:"type",l:"Typ",t:"select",o:Sd},{k:"name",l:"Name"},{k:"color",l:"Farbe (leer = Standard)",t:"color"},...c.type==="stairs_u"?[{k:"landings",l:"Podeste (1 = zwei L\xE4ufe, 2 = drei L\xE4ufe um die Ecken)",t:"number",s:1,p:"1"},{k:"flip",l:"Gespiegelt (Anfang auf der anderen Seite)",t:"checkbox"}]:[],...c.type==="car"?[{k:"body",l:"Karosserie",t:"select",o:[["","einfach"],["sedan","Limousine"],["wagon","Kombi"],["hatch","Schr\xE4gheck / Crossover"],["van","Kastenwagen"],["roadster","Roadster"]]}]:[],{k:"rot",l:"Drehung (\xB0)",t:"number",s:5},{k:"w",l:"Breite",t:"number"},{k:"d",l:"Tiefe",t:"number"},{k:"h",l:"H\xF6he",t:"number"},{k:"mountY",l:"H\xF6he \xFCber Boden",t:"number",p:"0"},{k:"entity",l:"Entit\xE4t (Zustand/Leuchten)",list:"ents"},{k:"power",l:"Leistungs-Sensor",list:"ents"}])}${c.type==="tv"||c.type==="monitor"?'<button class="full" id="scr-edit">\u{1F5A5} Bildschirm-Regeln \u2026</button>':""}${c.type==="car"?'<button class="full" id="car-edit">\u{1F697} Auto zuordnen \u2026</button>':""}`)):a?.kind==="site"&&(c=l(this.plan.site?.buildings||[],a.id),c&&(h+=`<h4>Geb\xE4ude</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"levels",l:"Geschosse (richten sich nach den Haus-Etagen)",t:"number",s:1,p:"1"},{k:"height",l:"Traufh\xF6he (m)",t:"number",s:.1},{k:"roof.type",l:"Dach",t:"select",o:[["flat","Flach"],["gable","Satteldach"],["shed","Pultdach"]]},{k:"roof.pitch",l:"Neigung (\xB0)",t:"number",s:1},...c.roof?.type==="shed"?[{k:"roof.high",l:"Hohe Seite (zum Nachbarn)",t:"select",o:[["south","S\xFCd"],["north","Nord"],["east","Ost"],["west","West"]],def:"south"}]:[],{k:"visible",l:"Sichtbar",t:"checkbox"}])}${c.roof?.type==="shed"?`${this.partsHtml(c)}<h4>Photovoltaik auf dem Dach</h4>${this.formHtml(c,[{k:"pv.enabled",l:"PV-Module auf dem Dach",t:"checkbox"},{k:"pv.fill",l:"Dachfl\xE4che f\xFCllen",t:"checkbox",def:!0},{k:"pv.orientation",l:"Modulausrichtung",t:"select",o:[["auto","automatisch (mehr Module)"],["landscape","quer"],["portrait","hochkant"]],def:"auto"},{k:"pv.rows",l:"Reihen (ohne F\xFCllen)",t:"number",s:1},{k:"pv.cols",l:"Module je Reihe (ohne F\xFCllen)",t:"number",s:1},{k:"pv.over",l:"Lage entlang des Dachs",t:"select",o:[["","Mitte"],...this.partOptions(c)]},{k:"pv.edge",l:"Lage am Hang",t:"select",o:[["center","Mitte"],["low","unten an der Traufe"],["high","oben am First"]],def:"center"},{k:"pv.wp",l:"Leistung je Modul (Wp)",t:"number",s:10,p:"420"},{k:"pv.entity",l:"Leistungs-Sensor dieser Anlage",list:"ents"}])}`:""}`));h&&(o+=`<div data-obj="sel">${h}</div>`);let u=this.deviceList(n),d=u.filter(p=>!p.explicit).length,f=(this.plan.settings.hiddenEntities||[]).length;o+=`<h4>Ger\xE4te dieser Etage (${u.length})</h4>
      <input id="devfilter" placeholder="Filter \u2026" value="${sn(this._devFilter||"")}">
      <div id="devlist" style="max-height:220px;overflow:auto;margin-top:4px"></div>
      <div class="row"><button id="dev-selall">Alle w\xE4hlen</button><button id="dev-hideauto" ${d?"":"disabled"}>Auto ausblenden (${d})</button></div>
      <button class="full" id="dev-restore" ${f?"":"disabled"}>\u21BA Ausgeblendete zeigen (${f})</button>`,o+=`<h4>Import</h4>
      <button class="full" id="imp-live">\u21E9 Von NeonPlan 3D \xFCbernehmen</button>
      <button class="full" id="imp-file">\u{1F4C2} Datei laden (NeonPlan / Plan / Gel\xE4nde)</button>
      <button class="full" id="exp-file">\u2B06 Plan als Datei sichern</button>`,t.innerHTML=o,this.bindForm(t.querySelector('[data-obj="floor"]'),n,p=>{p.dataset.k==="name"&&this.renderBar()}),c&&this.bindForm(t.querySelector('[data-obj="sel"]'),c,p=>{p.dataset.k==="levels"&&a?.kind==="site"&&(Ac(this.plan,c,c.levels||1),this.renderSide()),p.dataset.k==="height"&&a?.kind==="site"&&(c.storeys=(c.storeys||[]).filter(_=>_<c.height-.3)),(p.dataset.k==="type"||p.dataset.k==="style"||p.dataset.k==="entity"&&a?.kind==="device")&&this.renderSide()}),t.querySelector("[data-plan]")?.addEventListener("change",p=>{this.plan.settings.autoDevices=p.target.checked,this.changed()}),t.querySelector("#grid").onchange=p=>{this.grid=+p.target.value},t.querySelector("#pent")?.addEventListener("change",p=>this.pendingEntity=p.target.value),t.querySelector("#ftype")?.addEventListener("change",p=>this.furnType=p.target.value),a?.kind==="site"&&c&&this.bindParts(t,c),t.querySelector("#scr-edit")?.addEventListener("click",()=>ad(this,c)),t.querySelector("#car-edit")?.addEventListener("click",()=>this.features.find(p=>p instanceof Ts).openCarSettings(c)),this.fillDevList(),t.querySelector("#devfilter").oninput=p=>{this._devFilter=p.target.value,this.fillDevList()},t.querySelector("#dev-selall").onclick=()=>{this.multi=this.deviceList(this.floor).map(p=>({kind:"device",id:p.id})),this.sel=this.multi.length===1?this.multi[0]:null,this.renderSide(),this.draw2D()},t.querySelector("#dev-hideauto").onclick=()=>{this.pushUndo(),this.deviceList(this.floor).filter(p=>!p.explicit).forEach(p=>this.hideEntity(p.entity)),this.changed({side:!0})},t.querySelector("#dev-restore").onclick=()=>{this.pushUndo(),this.plan.settings.hiddenEntities=[],this.changed({side:!0})},t.querySelector("#multi-del")?.addEventListener("click",()=>this.deleteHits([...this.multi])),t.querySelector("#auto-hide")?.addEventListener("click",()=>this.deleteHits([a])),t.querySelector("#auto-pin")?.addEventListener("click",()=>{let p=this.itemOf(a);if(!p)return;this.pushUndo();let _={id:nn(),entity:p.entity,x:p.x,z:p.z};n.devices.push(_),this.sel={kind:"device",id:_.id},this.changed({side:!0})}),t.querySelector("#imp-live").onclick=()=>this.importLive(),t.querySelector("#imp-file").onclick=()=>this.importFile(),t.querySelector("#exp-file").onclick=()=>this.exportFile()}siteLength(t){return or(t.points,t.roof,this.plan.site?.north??0).L}ensureParts(t){return!t.parts&&t.layout&&(t.parts=ud(this.siteLength(t),t.layout),delete t.layout),t.parts||[]}partOptions(t){return this.ensureParts(t).map((e,n)=>[`#${n}`,`${n+1}. ${e.name||Rs[e.type]||e.type}`])}partsHtml(t){let e=this.ensureParts(t),n=Object.entries(Rs);return`<h4>Aufteilung (West \u2192 Ost)</h4>${e.map((r,o)=>`<div class="prow" data-i="${o}">
      <div class="l1"><select data-f="type">${n.map(([a,l])=>`<option value="${a}" ${r.type===a?"selected":""}>${l}</option>`).join("")}</select>
        <button data-a="up" title="nach links (West)">\u2190</button><button data-a="down" title="nach rechts (Ost)">\u2192</button><button data-a="del" title="Teil entfernen">\u{1F5D1}</button></div>
      <div class="l2">${r.type==="carport"?`<input data-f="stalls" type="number" step="1" value="${r.stalls??4}" title="Stellpl\xE4tze"><input data-f="stallWidth" type="number" step="0.1" value="${r.stallWidth??2.9}" title="Breite je Stellplatz (m)">`:`<input data-f="len" type="number" step="0.1" value="${r.len??""}" placeholder="L\xE4nge: Rest" title="L\xE4nge (m), leer = Rest">`}
        ${r.type==="garage"||r.type==="bike"?`<input data-f="door" type="number" step="0.1" value="${r.door??""}" placeholder="T\xFCr (m)" title="T\xFCrbreite (m)">`:""}</div>
      ${r.type==="garage"||r.type==="bike"?`<div class="l3"><select data-f="doorSide" title="An welcher Wand das Tor sitzt">${Object.entries(hd).map(([a,l])=>`<option value="${a}" ${(r.doorSide||"low")===a?"selected":""}>Tor: ${l}</option>`).join("")}</select></div>`:r.type==="carport"?`<div class="l3"><select data-f="numberFrom" title="Von welchem Ende die Stellpl\xE4tze gez\xE4hlt werden"><option value="east" ${r.numberFrom!=="west"?"selected":""}>Nummer 1 im Osten</option><option value="west" ${r.numberFrom==="west"?"selected":""}>Nummer 1 im Westen</option></select></div>`:""}</div>`).join("")}<button class="full" id="part-add">+ Teil hinzuf\xFCgen</button>
      <div style="opacity:.6;font-size:11px;margin-top:4px">L\xE4nge leer = Rest \xB7 Gesamtl\xE4nge ${this.siteLength(t).toFixed(1)} m \xB7 Carport: Stellpl\xE4tze \xD7 Breite</div>`}bindParts(t,e){t.querySelectorAll(".prow").forEach(n=>{let s=+n.dataset.i;n.querySelectorAll("[data-f]").forEach(r=>{r.onchange=()=>{this.pushUndo();let o=e.parts[s],a=r.dataset.f;a==="type"?(o.type=r.value,o.type==="carport"&&(o.stalls??=4,o.stallWidth??=2.9)):a==="doorSide"||a==="numberFrom"?r.value===(a==="doorSide"?"low":"east")?delete o[a]:o[a]=r.value:o[a]=r.value===""?null:+r.value,this.changed({side:a==="type"})}}),n.querySelectorAll("[data-a]").forEach(r=>{r.onclick=()=>{this.pushUndo();let o=r.dataset.a;if(o==="del")e.parts.splice(s,1);else{let a=o==="up"?s-1:s+1;a>=0&&a<e.parts.length&&([e.parts[s],e.parts[a]]=[e.parts[a],e.parts[s]])}this.changed({side:!0})}})}),t.querySelector("#part-add")?.addEventListener("click",()=>{this.pushUndo(),(e.parts||=[]).push({type:"garage",len:null}),this.changed({side:!0})})}fillDevList(){let t=this.$("#devlist");if(!t)return;let e=(this._devFilter||"").toLowerCase(),n=this._hass?.states||{},s=o=>o.name||n[o.entity]?.attributes?.friendly_name||o.entity,r=this.deviceList(this.floor).filter(o=>!e||o.entity.toLowerCase().includes(e)||s(o).toLowerCase().includes(e));t.innerHTML="",r.slice(0,300).forEach(o=>{let a=document.createElement("div");a.className="dev"+(this.isSel(o.id)?" on":""),a.innerHTML=`<div style="min-width:0;flex:1"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${sn(s(o))}</b><span class="s">${o.explicit?"":"auto \xB7 "}${sn(o.entity)}</span></div><button title="Entfernen" data-del>\u{1F5D1}</button>`,a.onclick=l=>{if(l.target.closest("[data-del]")){this.deleteHits([{kind:"device",id:o.id}]);return}this.sel={kind:"device",id:o.id},this.multi=[],this.cam2.x=o.x,this.cam2.z=o.z,this.renderSide(),this.draw2D()},t.append(a)}),r.length||(t.innerHTML='<div style="opacity:.6;padding:6px">Keine Ger\xE4te</div>')}async importLive(){try{let t=await this._hass.callWS({type:"neonplan3d/building/get"});this.applyImport(t,"NeonPlan 3D (live)")}catch(t){this.msg("NeonPlan 3D nicht erreichbar: "+(t.message||t.code||t))}}importFile(){let t=document.createElement("input");t.type="file",t.accept=".json,application/json",t.onchange=async()=>{try{let e=JSON.parse(await t.files[0].text());this.applyImport(e,t.files[0].name)}catch(e){this.msg("Datei nicht lesbar: "+e.message)}},t.click()}exportFile(){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(this.plan,null,1)],{type:"application/json"})),t.download="homeplan3d-plan.json",t.click()}applyImport(t,e){let n=t?.result??t,s=this.plan.floors.some(c=>c.rooms.length||c.walls.length);if(n?.buildings&&!n.floors){this.pushUndo(),this.plan.site={...this.plan.site||{},...n},this.plan=Oi(this.plan),this.showSite=!0,this.renderBar(),this.changed({side:!0}),this.fit(),this.msg(`${n.buildings.length} Geb\xE4ude aus ${e} \xFCbernommen`);return}let r,o=n?.building??n,a=o?.settings&&("wall_exterior"in o.settings||"buttons"in o.settings)||o?.floors?.some(c=>"placements"in c||"cut_height"in c);try{r=a?bd(t):Oi(zo(n))}catch(c){this.msg("Import fehlgeschlagen: "+c.message);return}if(s&&!confirm("Den vorhandenen Plan durch den importierten ersetzen?"))return;this.pushUndo();let l=this.plan.site;!r.site&&l&&(r.site=l),this.setPlan(r,{fit:!0}),this.editing&&this.renderSide(),this.msg(`${r.floors.length} Etagen aus ${e} \xFCbernommen \u2013 mit \u{1F4BE} speichern`)}deviceList(t){let e=this._hass,n=t.devices.map(o=>({...o,explicit:!0}));if(!e?.entities||!this.plan.settings.autoDevices)return n;let s=new Set(this.plan.floors.flatMap(o=>o.devices.map(a=>a.entity))),r=new Set(this.plan.settings.hiddenEntities||[]);return t.rooms.forEach(o=>{if(!o.area||o.autoDevices===!1)return;let a=Object.keys(e.states).sort().filter(g=>{if(!Md.includes(ke(g)))return!1;let m=e.entities[g];return!m||m.hidden?!1:(m.area_id||e.devices?.[m.device_id]?.area_id)===o.area}),[l,c,h,u]=Di(o.points),d=Math.max(1,Math.floor((h-l)/.8)),f=0,p=0,_=[];for(;_.length<a.length&&p++<400;){let g=f%d,m=Math.floor(f/d),b=[l+.5+g*.8,c+.5+m*.8];if(f++,b[1]>u){_.push([(l+h)/2,(c+u)/2]);continue}en(b,o.points)&&_.push(b)}a.forEach((g,m)=>{!s.has(g)&&!r.has(g)&&n.push({id:"auto:"+g,entity:g,x:_[m][0],z:_[m][1],explicit:!1})})}),n}climateFor(t){let e=t.climate||{},n=t.area?this.areaClimate(t.area):{};return{temperature:e.temperature||n.temperature||null,humidity:e.humidity||n.humidity||null,co2:e.co2||n.co2||null}}areaClimate(t){let e={temperature:null,humidity:null,co2:null},n=this._hass;if(!t||!n?.entities)return e;let s=Object.keys(n.entities).length+"|"+Object.keys(n.states).length;if(this._areaClimate?.sig!==s&&(this._areaClimate={sig:s,map:new Map}),this._areaClimate.map.has(t))return this._areaClimate.map.get(t);let r={temperature:"temperature",humidity:"humidity",carbon_dioxide:"co2"};for(let o of Object.keys(n.states).sort()){if(ke(o)!=="sensor")continue;let a=n.entities[o];if(!a||a.hidden||a.entity_category&&a.entity_category!=="none"||(a.area_id||n.devices?.[a.device_id]?.area_id)!==t)continue;let l=r[n.states[o].attributes?.device_class];l&&!e[l]&&(e[l]=o)}return this._areaClimate.map.set(t,e),e}updateClimate(t){let e=this._hass?.states;if(!e)return;let n=c=>{let h=c&&e[c]?parseFloat(e[c].state):NaN;return Number.isFinite(h)?h:null},s=n(t.temperature),r=n(t.humidity),o=n(t.co2),a=[];s!=null&&a.push(`${s.toFixed(1)} \xB0C`),r!=null&&a.push(`${Math.round(r)} %`),o!=null&&a.push(`${Math.round(o)} ppm`);let l=new Rt().setHSL((220-(Math.max(15,Math.min(28,s??21))-15)/13*220)/360,.85,.55);a.length&&Bi(t.sprite,a.join(" \xB7 "),s!=null?"#"+l.getHexString():"#19e6ff"),t.sprite.visible=this.showClimate&&a.length>0,this.heatmap&&s!=null?(t.mat.color.copy(l).multiplyScalar(.35),t.mat.emissive.copy(l),t.mat.emissiveIntensity=.6):(t.mat.color.copy(t.base.color),t.mat.emissive.copy(t.base.emissive),t.mat.emissiveIntensity=t.base.ei)}init3D(){this.scene=new fo,this.camera=new Ne(50,1,.1,400),this.camera.position.set(14,14,18),this.renderer=new ho({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.viewEl.prepend(this.renderer.domElement),this.controls=new Uo(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI/2.02,this.ambient=new Eo(8425664,.9),this.scene.add(this.ambient),this.sunLight=new wo(16777215,.7),this.sunLight.position.set(5,18,8),this.scene.add(this.sunLight),this.labelRenderer=new Oo({element:this.$("#labels")}),this.world=new re,this.scene.add(this.world),this.ray=new To;let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",r=>{e={x:r.clientX,y:r.clientY,t:Date.now()}}),t.addEventListener("pointerup",r=>{if(!e)return;let o=Math.hypot(r.clientX-e.x,r.clientY-e.y)>5,a=Date.now()-e.t>500;e=null,o||this.pick3D(r,a)});let n=performance.now()/1e3,s=()=>{this._raf=requestAnimationFrame(s),this.controls.update();let r=performance.now()/1e3,o=Math.min(.1,r-n);n=r,this.dyn.forEach(a=>{a.pulse&&a.on&&a.glow.scale.setScalar(a.baseScale*(1+.05*Math.sin(r*3)))}),this.features.forEach(a=>{a.on&&a.tick(o,r)}),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)};s()}resize(){let t=this.viewEl.clientWidth,e=this.viewEl.clientHeight;t&&e&&(this.renderer.setSize(t,e,!1),this.labelRenderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix());let n=this.edCanvas;n.clientWidth&&(n.width=n.clientWidth*devicePixelRatio,n.height=n.clientHeight*devicePixelRatio,this.draw2D())}extent(){let t=this.plan.floors.flatMap(e=>e.rooms.flatMap(n=>n.points));return this.showSite&&(this.plan.site?.buildings||[]).forEach(e=>e.visible!==!1&&t.push(...e.points)),t.length?Di(t):null}fit(){let t=this.extent();if(!t)return;let[e,n,s,r]=t,o=(e+s)/2,a=(n+r)/2,l=Math.max(s-e,r-n,4),c=$n(this.plan,this.plan.floors.length-1)/2;this.controls.target.set(o,c/2,a),this.camera.position.set(o+l*.55,c+l*.75,a+l*.95),this.cam2={x:o,z:a,s:Math.max(8,Math.min(120,500/l))}}rebuild3D(){if(!this.world)return;this.features.forEach(a=>a.dispose()),this.$("#labels")?.replaceChildren(),this.world.traverse(a=>{a.geometry?.dispose(),a.material&&!a.material.map&&a.material.dispose?.()}),this.world.clear();let t=ki[this.theme]||ki.neon;this.scene.background=new Rt(t.bg),this.scene.fog=new uo(t.bg,60,160);let e=this.editing||this.cut?this.fi:1/0,n=yd(this.plan,{theme:this.theme,maxFloor:e,showRoof:this.showRoof,showSite:this.showSite,devicesFor:a=>this.deviceList(a),climateFor:a=>this.climateFor(a),glowTex:()=>this.glowTex(),label:(a,l)=>this.label(a,l)});this.world.add(n.root),this.dyn=n.dyn,this.pickables=n.pickables,this.anchors=n.anchors,this.features.forEach(a=>{a.group=new re,a.on=this.fxOn(a.id),a.group.visible=a.on,this.world.add(a.group),a.build(n.anchors)});let s=this.dyn.some(a=>a.kind==="roomclimate"),r=this.features.map(a=>a.available()?"1":"0").join("");(s!==this.hasClimate||r!==this._fxSig)&&(this.hasClimate=s,this._fxSig=r,this.renderBar());let o=this.extent();if(o){let a=new Ao(120,120,this.theme==="day"?12108502:1912919,this.theme==="day"?13620966:1055798);a.position.set((o[0]+o[2])/2,Math.min(0,$n(this.plan,0))-(this.plan.settings.slab??.18)-.02,(o[1]+o[3])/2),this.world.add(a)}this.updateStates()}glowTex(){if(this._glow)return this._glow;let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this._glow=new Fe(t)}label(t,e){let n=e+"|"+t,s=this._labels.get(n);if(!s){let o=document.createElement("canvas");o.width=384,o.height=64;let a=o.getContext("2d");a.font="bold 30px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle=ki[e]?.text||"#dfe8ff",a.shadowColor=ki[e]?.glow||"#19e6ff",a.shadowBlur=8,a.fillText(t,192,32,370),s=new Fe(o),this._labels.set(n,s)}let r=new Vt(new Wn(3,.5),new Oe({map:s,transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=5,r}updateStates(){let t=this.getStates();if(t){this.features.forEach(e=>{e.on&&e.update(t)});for(let e of this.dyn){if(e.kind==="roomclimate"){this.updateClimate(e);continue}let n=t[e.entity];if(!n)continue;let s=!ty.includes(n.state);if(e.on=s,e.kind==="opening"){let r=["on","open","opening","tilted"].includes(n.state);e.pivot&&(e.pivot.rotation.y=r?e.sign*e.maxAngle:0),e.mat&&(e.mat.emissiveIntensity=r?1.2:.5,e.mat.opacity=r?.35:e.type==="door"?.75:.35)}else if(e.kind==="value"){let r=parseFloat(n.state);if(Number.isNaN(r)){e.sprite.visible=!1;continue}let o=n.attributes.unit_of_measurement||"",a=o==="W"&&Math.abs(r)>=1e3?`${(r/1e3).toFixed(2)} kW`:`${Math.round(r*10)/10} ${o}`;Bi(e.sprite,a);let l=this.features.some(c=>c.id==="energy"&&c.on&&c.available())&&this.holo;e.sprite.visible=!l&&(e.always||Math.abs(r)>5)}else if(e.kind==="solar"){let r=parseFloat(n.state)||0;e.mat.emissiveIntensity=.15+Math.min(1,r/e.wp)*1.2}else if(e.kind==="furniture")e.glow.visible=s,e.mats.forEach(r=>r.emissiveIntensity=s?.9:.18);else if(e.kind==="camera")e.glow.visible=!1,e.mesh.material.emissive.setHex(n.state==="unavailable"?0:1697535),e.mesh.material.emissiveIntensity=.55;else{let r=new Rt(16765066),o=n.attributes;o.rgb_color?r=new Rt(`rgb(${o.rgb_color.join(",")})`):e.kind!=="light"&&(r=new Rt(1697535));let a=o.brightness!=null?o.brightness/255:1;e.glow.visible=s,e.glow.material.color.copy(r),e.glow.material.opacity=.3+.7*a,e.mesh.material.emissive.copy(s?r:new Rt(0)),e.mesh.material.emissiveIntensity=s?.4+a:0}}}}pick3D(t,e){let n=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new K((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.camera);let s=this.ray.intersectObjects(this.pickables,!1)[0];if(!s){!this.editing&&this.panelRoom&&(this.panelRoom=null,this.$("#side").classList.add("hidden"));return}let r=s.object.userData;if(!(!this.editing&&this.features.some(o=>o.on&&(e?o.onLongPress(r,t):o.onTap(r,t)))))if(r.entity){if(e||this.editing)return this.moreInfo(r.entity);let o=ke(r.entity);["light","switch","input_boolean","fan"].includes(o)?this._hass.callService("homeassistant","toggle",{entity_id:r.entity}):o==="cover"?this._hass.callService("cover","toggle",{entity_id:r.entity}):o==="lock"?this._hass.callService("lock",this._hass.states[r.entity]?.state==="locked"?"unlock":"lock",{entity_id:r.entity}):this.moreInfo(r.entity)}else r.room&&!this.editing&&(this.panelRoom=r.room,this.renderRoomPanel())}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}renderRoomPanel(){let t=this.$("#side"),e=this.plan.floors.find(c=>c.rooms.some(h=>h.id===this.panelRoom)),n=e?.rooms.find(c=>c.id===this.panelRoom);if(!n)return;t.classList.remove("hidden");let s=this._hass.states,r=this.deviceList(e).filter(c=>en([c.x,c.z],n.points)),o=this.climateFor(n),a=(c,h)=>c&&s[c]&&s[c].state!=="unavailable"?`${s[c].state}${h}`:null,l=[a(o.temperature," \xB0C"),a(o.humidity," %"),a(o.co2," ppm")].filter(Boolean).join(" \xB7 ");t.innerHTML=`<b>${sn(n.name)}</b>${l?`<div style="opacity:.8;margin:4px 0 6px">${l}</div>`:""}${r.length?"":"<p style='opacity:.6'>Keine Ger\xE4te</p>"}`,r.forEach(c=>{let h=s[c.entity];if(!h)return;let u=document.createElement("div"),d=h.state==="on"||h.state==="open";if(u.className="dev"+(d?" on":""),u.innerHTML=`<div><b>${sn(c.name||h.attributes.friendly_name||c.entity)}</b><br><span class="s">${sn(h.state)}</span></div>`,ke(c.entity)==="light"){let f=document.createElement("input");f.type="range",f.min=1,f.max=255,f.style.width="70px",f.value=h.attributes.brightness||(d?255:1),f.onclick=p=>p.stopPropagation(),f.onchange=()=>this._hass.callService("light","turn_on",{entity_id:c.entity,brightness:+f.value}),u.append(f)}u.onclick=()=>["light","switch","input_boolean","fan"].includes(ke(c.entity))?this._hass.callService("homeassistant","toggle",{entity_id:c.entity}):this.moreInfo(c.entity),u.oncontextmenu=f=>{f.preventDefault(),this.moreInfo(c.entity)},t.append(u)})}initEditor(){let t=this.edCanvas;this.mouse=[0,0];let e=l=>[(l[0]-this.cam2.x)*this.cam2.s+t.width/2,(l[1]-this.cam2.z)*this.cam2.s+t.height/2],n=(l,c)=>[(l*devicePixelRatio-t.width/2)/this.cam2.s+this.cam2.x,(c*devicePixelRatio-t.height/2)/this.cam2.s+this.cam2.z];this.w2s=e;let s=l=>{let c=t.getBoundingClientRect();return[l.clientX-c.left,l.clientY-c.top]},r=(l,c=!0)=>{let h=n(...s(l));return c&&!l.altKey?[rr(h[0],this.grid),rr(h[1],this.grid)]:h},o=null,a=null;t.addEventListener("wheel",l=>{l.preventDefault();let c=n(...s(l));this.cam2.s=Math.max(5,Math.min(250,this.cam2.s*(l.deltaY<0?1.12:.89)));let h=n(...s(l));this.cam2.x+=c[0]-h[0],this.cam2.z+=c[1]-h[1],this.draw2D()},{passive:!1}),t.addEventListener("pointerdown",l=>{if(t.setPointerCapture(l.pointerId),t.focus(),l.button===1||l.button===2){a={x:l.clientX,y:l.clientY,cx:this.cam2.x,cz:this.cam2.z};return}let c=r(l),h=r(l,!1),u=this.floor,d=this.tool;if(d==="select"){let f=this.hit2D(h);if(l.shiftKey&&f){let p=this.multi.length?this.multi:this.sel?[this.sel]:[];this.multi=p.some(_=>_.id===f.id)?p.filter(_=>_.id!==f.id):[...p,f],this.sel=this.multi.length===1?this.multi[0]:null}else if(f){let p=this.multi.length>1&&this.multi.some(g=>g.id===f.id);p||(this.multi=[],this.sel=f),o={items:(p?this.multi:[f]).map(g=>({hit:g,orig:this.snapshotFor(g)})),start:c,undone:!1}}else this.sel=null,this.multi=[],o={marquee:h};this.renderSide(),this.draw2D()}else if(d==="erase"){let f=this.hit2D(h);f&&this.deleteHits([f])}else if(d==="rect"||d==="building")o={rect:c};else if(d==="room")this.draft.length>2&&Math.hypot(c[0]-this.draft[0][0],c[1]-this.draft[0][1])<.01?this.finishRoom():this.draft.push(c);else if(d==="wall")this.draft.length?(this.pushUndo(),u.walls.push({id:nn(),a:this.draft[0],b:c,t:null,h:null}),this.draft=[c],this.changed()):this.draft=[c];else if(d==="door"||d==="window")this.placeOpening(h,d);else if(d==="furn"){this.pushUndo();let[f,p,_]=wd[this.furnType]||[.6,.6,.8],g={id:nn(),type:this.furnType,x:c[0],z:c[1],rot:0,w:f,d:p,h:_};u.furniture.push(g),this.sel={kind:"furniture",id:g.id},this.changed({side:!0})}else if(d==="device"){if(!this.pendingEntity){this.hint("Erst eine Entit\xE4t im rechten Panel eingeben");return}this.pushUndo();let f={id:nn(),entity:this.pendingEntity,x:c[0],z:c[1]};u.devices.push(f),this.sel={kind:"device",id:f.id},this.changed({side:!0})}this.draw2D()}),t.addEventListener("pointermove",l=>{this.mouse=r(l),a?(this.cam2.x=a.cx-(l.clientX-a.x)*devicePixelRatio/this.cam2.s,this.cam2.z=a.cz-(l.clientY-a.y)*devicePixelRatio/this.cam2.s):o?.rect?(o.cur=this.mouse,this.rectPrev=[o.rect,this.mouse]):o?.marquee?this.marquee=[o.marquee,r(l,!1)]:o?.items&&(o.undone||(this.pushUndo(),o.undone=!0,this.pinAutos(o)),this.moveItems(o,this.mouse,r(l,!1))),this.draw2D()}),t.addEventListener("pointerup",()=>{if(o?.rect&&o.cur){let[l,c]=[o.rect,o.cur];if(Math.abs(l[0]-c[0])>=this.grid&&Math.abs(l[1]-c[1])>=this.grid){this.pushUndo();let h=[[l[0],l[1]],[c[0],l[1]],[c[0],c[1]],[l[0],c[1]]];if(this.tool==="building"){this.plan.site=this.plan.site||{buildings:[]};let u=pd(h,this.plan.site.buildings.length+1);this.plan.site.buildings.push(u),this.showSite=!0,this.sel={kind:"site",id:u.id}}else{let u={id:nn(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:h};this.floor.rooms.push(u),this.sel={kind:"room",id:u.id}}this.tool="select",this.renderBar(),this.changed({side:!0})}}else if(o?.marquee&&this.marquee){let[l,c]=this.marquee;Math.hypot(c[0]-l[0],c[1]-l[1])*this.cam2.s/devicePixelRatio>6&&(this.selectInRect(l,c),this.renderSide())}else o?.items&&this.rebuild3D();o=null,a=null,this.rectPrev=null,this.marquee=null,this.draw2D()}),t.addEventListener("dblclick",()=>{this.tool==="room"?(this.draft.pop(),this.finishRoom()):this.tool==="wall"&&(this.draft=[])}),t.addEventListener("contextmenu",l=>l.preventDefault()),t.tabIndex=0,t.addEventListener("keydown",l=>{l.key==="Escape"&&(this.draft=[],this.draw2D()),(l.key==="Delete"||l.key==="Backspace")&&(this.multi.length||this.sel)&&this.deleteHits(this.multi.length>1?this.multi:[this.sel]),(l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="z"&&(l.preventDefault(),this.undo())})}finishRoom(){if(this.draft.length>=3){this.pushUndo();let t={id:nn(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:this.draft};this.floor.rooms.push(t),this.sel={kind:"room",id:t.id},this.tool="select",this.renderBar(),this.changed({side:!0})}this.draft=[],this.draw2D()}segs(){return jo(this.floor,this.plan.settings)}nearestWall(t,e=.6){let n=null;for(let s of this.segs()){let r=Es(t,s.a,s.b);r.d<e+s.t/2&&(!n||r.d<n.d)&&(n={...r,s})}return n}placeOpening(t,e){let n=this.nearestWall(t);if(!n){this.hint("N\xE4her an eine Wand klicken");return}this.pushUndo();let r=rr(n.t*n.s.len,.05)/n.s.len,o={id:nn(),type:e,x:+(n.s.a[0]+(n.s.b[0]-n.s.a[0])*r).toFixed(3),z:+(n.s.a[1]+(n.s.b[1]-n.s.a[1])*r).toFixed(3),rot:n.s.rot,w:e==="door"?.9:1.2,h:e==="door"?2.1:1.3,sill:e==="door"?0:.9,hinge:"left",swing:"in"};this.pendingEntity&&ke(this.pendingEntity)!=="light"&&(o.entity=this.pendingEntity),this.floor.openings.push(o),this.sel={kind:"opening",id:o.id},this.changed({side:!0})}hit2D(t){let e=this.floor,n=12/this.cam2.s;for(let s of this.deviceList(e))if(Math.hypot(t[0]-s.x,t[1]-s.z)<n)return{kind:"device",id:s.id};for(let s of e.openings)if(Math.hypot(t[0]-s.x,t[1]-s.z)<Math.max(n,s.w/2))return{kind:"opening",id:s.id};for(let s of[...e.furniture].reverse()){let r=t[0]-s.x,o=t[1]-s.z,a=xe(s.rot||0),l=r*Math.cos(a)+o*Math.sin(a),c=-r*Math.sin(a)+o*Math.cos(a);if(Math.abs(l)<=(s.w||.5)/2&&Math.abs(c)<=(s.d||.5)/2)return{kind:"furniture",id:s.id}}for(let s of e.rooms){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"room",id:s.id,vertex:r}}if(this.showSite)for(let s of this.plan.site?.buildings||[]){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"site",id:s.id,vertex:r}}for(let s of e.walls)if(Es(t,s.a,s.b).d<n)return{kind:"wall",id:s.id};for(let s of[...e.rooms].reverse())if(en(t,s.points))return{kind:"room",id:s.id};if(this.showSite){for(let s of this.plan.site?.buildings||[])if(en(t,s.points))return{kind:"site",id:s.id}}return null}itemOf(t){let e=this.floor,s={room:e.rooms,wall:e.walls,device:e.devices,opening:e.openings,furniture:e.furniture,site:this.plan.site?.buildings||[]}[t.kind]?.find(r=>r.id===t.id);return!s&&t.kind==="device"&&String(t.id).startsWith("auto:")?this.deviceList(e).find(r=>r.id===t.id):s}isSel(t){return this.sel?.id===t||this.multi.some(e=>e.id===t)}isAuto(t){return t?.kind==="device"&&String(t.id).startsWith("auto:")}hideEntity(t){let e=this.plan.settings.hiddenEntities||=[];e.includes(t)||e.push(t)}isAutoCandidate(t){let e=this._hass,n=e?.entities?.[t];if(!n||!Md.includes(ke(t)))return!1;let s=n.area_id||e.devices?.[n.device_id]?.area_id;return!!s&&this.plan.floors.some(r=>r.rooms.some(o=>o.area===s&&o.autoDevices!==!1))}pinAutos(t){let e=t.items.map(n=>this.isAuto(n.hit)?this.itemOf(n.hit):null);t.items.forEach((n,s)=>{if(!e[s])return;let r={id:nn(),entity:e[s].entity,x:e[s].x,z:e[s].z};this.floor.devices.push(r);let o=n.hit.id;n.hit={kind:"device",id:r.id},n.orig=[r.x,r.z],this.sel?.id===o&&(this.sel=n.hit),this.multi=this.multi.map(a=>a.id===o?n.hit:a)})}selectInRect(t,e){let n=this.floor,[s,r]=[Math.min(t[0],e[0]),Math.max(t[0],e[0])],[o,a]=[Math.min(t[1],e[1]),Math.max(t[1],e[1])],l=(h,u)=>h>=s&&h<=r&&u>=o&&u<=a,c=[];this.deviceList(n).forEach(h=>l(h.x,h.z)&&c.push({kind:"device",id:h.id})),this.multi=c,this.sel=c.length===1?c[0]:null}snapshotFor(t){let e=this.itemOf(t);return t.kind==="room"||t.kind==="site"?zo(e.points):t.kind==="wall"?zo([e.a,e.b]):[e.x,e.z]}moveItems(t,e,n){t.items.forEach(s=>this.moveOne(s.hit,s.orig,t.start,e,n))}moveOne(t,e,n,s,r){let o=this.itemOf(t);if(!o)return;let a=s[0]-n[0],l=s[1]-n[1];if(t.kind==="room"||t.kind==="site")o.points=e.map((c,h)=>t.vertex!=null?h===t.vertex?[e[h][0]+a,e[h][1]+l]:c:[c[0]+a,c[1]+l]);else if(t.kind==="wall")o.a=[e[0][0]+a,e[0][1]+l],o.b=[e[1][0]+a,e[1][1]+l];else if(t.kind==="opening"){let c=this.nearestWall(r);if(c){let h=rr(c.t*c.s.len,.05),u=h/c.s.len;o.x=c.s.a[0]+(c.s.b[0]-c.s.a[0])*u,o.z=c.s.a[1]+(c.s.b[1]-c.s.a[1])*u,o.rot=c.s.rot}}else o.x=e[0]+a,o.z=e[1]+l}deleteHits(t){t.length&&(this.pushUndo(),t.forEach(e=>this.deleteOne(e)),this.sel=null,this.multi=[],this.changed({side:!0}))}deleteOne(t){let e=this.floor;if(t.kind==="room"&&t.vertex!=null&&this.tool==="erase"){let n=e.rooms.find(s=>s.id===t.id);if(n.points.length>3){n.points.splice(t.vertex,1);return}}if(t.kind==="device"){let n=this.itemOf(t);if(!n)return;this.isAuto(t)||(e.devices=e.devices.filter(s=>s.id!==t.id)),(this.isAuto(t)||this.isAutoCandidate(n.entity))&&this.hideEntity(n.entity)}else if(t.kind==="site")this.plan.site.buildings=this.plan.site.buildings.filter(n=>n.id!==t.id);else{let n={room:"rooms",wall:"walls",opening:"openings",furniture:"furniture"}[t.kind];e[n]=e[n].filter(s=>s.id!==t.id)}}draw2D(){if(!this.editing)return;let t=this.edCanvas,e=t.getContext("2d"),n=this.cam2.s,s=this.w2s,r=this.floor,o=devicePixelRatio;e.clearRect(0,0,t.width,t.height),e.fillStyle="#0a0d1a",e.fillRect(0,0,t.width,t.height);let a=[this.cam2.x-t.width/2/n,this.cam2.z-t.height/2/n],l=[this.cam2.x+t.width/2/n,this.cam2.z+t.height/2/n];e.lineWidth=1;for(let u=Math.floor(a[0]);u<=l[0];u++){let d=s([u,0])[0];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(d,0),e.lineTo(d,t.height),e.stroke()}for(let u=Math.floor(a[1]);u<=l[1];u++){let d=s([0,u])[1];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(0,d),e.lineTo(t.width,d),e.stroke()}this.showSite&&(e.setLineDash([8*o,5*o]),(this.plan.site?.buildings||[]).forEach(u=>{if(u.visible===!1)return;let d=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle="rgba(255,179,71,.08)",e.fill(),e.strokeStyle=d?"#fff":"#ffb347",e.lineWidth=(d?3:2)*o,e.stroke();let f=this.w2s(li(u.points));if(e.fillStyle="#ffb347",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${Ho(u.points).toFixed(0)} m\xB2${u.levels>1?`, ${u.levels} Geschosse`:""})`,f[0],f[1]),d&&u.points.forEach(p=>{let _=this.w2s(p);e.fillStyle="#fff",e.fillRect(_[0]-4*o,_[1]-4*o,8*o,8*o)}),u.roof?.type==="shed"){let p=or(u.points,u.roof,this.plan.site?.north??0);e.setLineDash([]),e.strokeStyle="#ffb347",e.lineWidth=o,(Ko(p.L,u)||[]).forEach(g=>{let m=g.type==="carport",b=m?g.stalls:1;for(let y=0;y<=b;y++){let x=g.t0+y*(g.t1-g.t0)/b,C=s(Xn(p,p.tToU(x),-p.W/2)),A=s(Xn(p,p.tToU(x),p.W/2));e.beginPath(),e.moveTo(...C),e.lineTo(...A),e.stroke()}if(g.type==="garage"||g.type==="bike"){let y=Yo({side:g.doorSide,pt:g,f:p,W:p.W,hLow:u.height||2.8,bike:g.type==="bike",width:g.door}),x=y.sx>y.sz?[y.sx/2,0]:[0,y.sz/2],C=s(Xn(p,y.x-x[0],y.z-x[1])),A=s(Xn(p,y.x+x[0],y.z+x[1]));e.strokeStyle="#ff2bd6",e.lineWidth=3*o,e.beginPath(),e.moveTo(...C),e.lineTo(...A),e.stroke(),e.strokeStyle="#ffb347",e.lineWidth=o}if(d){e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center";let y=(x,C,A)=>{let R=s(Xn(p,p.tToU(C),A));e.fillText(x,R[0],R[1])};m?Zo(g,g.numberFrom).forEach(x=>y(String(x.n),x.t,p.W*.3)):y(g.name||Rs[g.type]||"",(g.t0+g.t1)/2,p.W*.3)}});let _=s(Xn(p,0,-p.W/2+.25));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText("\u25B2 hoch",_[0],_[1]),e.setLineDash([8*o,5*o])}}),this.plan.site?.cadastreHouse&&(this.path(e,this.plan.site.cadastreHouse,!0),e.strokeStyle="#3ddc84",e.lineWidth=1.5*o,e.stroke()),e.setLineDash([]));let c=this.plan.floors[this.fi-1];if(c&&(e.strokeStyle="#2b3558",e.lineWidth=o,c.rooms.forEach(u=>{this.path(e,u.points,!0),e.stroke()})),r.rooms.forEach(u=>{let d=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle=(u.color||"#19e6ff")+"22",e.fill(),e.strokeStyle=d?"#fff":u.color||"#19e6ff",e.lineWidth=(d?3:1.5)*o,e.shadowColor=u.color||"#19e6ff",e.shadowBlur=d?8:0,e.stroke(),e.shadowBlur=0,d&&u.points.forEach(p=>{let _=s(p);e.fillStyle="#fff",e.fillRect(_[0]-4*o,_[1]-4*o,8*o,8*o)});let f=s(li(u.points));e.fillStyle="#dfe8ff",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${Ho(u.points).toFixed(1)} m\xB2)`,f[0],f[1])}),this.segs().forEach(u=>{let d=u.ids.includes(this.sel?.id);e.strokeStyle=d?"#fff":u.free?"#ff9a3c":"#6b7bb0",e.lineWidth=Math.max(2*o,u.t*n),e.globalAlpha=.75,e.beginPath(),e.moveTo(...s(u.a)),e.lineTo(...s(u.b)),e.stroke(),e.globalAlpha=1}),r.openings.forEach(u=>{let d=s([u.x,u.z]),f=u.w/2*n;if(e.save(),e.translate(...d),e.rotate(-(u.rot||0)),e.fillStyle=u.type==="door"?"#ff2bd6":"#6fa8ff",e.fillRect(-f,-3*o,f*2,6*o),u.type==="door"&&u.style!=="passage"){let p=u.hinge==="right"?f:-f,_=u.swing==="out"?-1:1;e.strokeStyle="#ff2bd6",e.lineWidth=o,e.beginPath(),e.moveTo(p,0),e.lineTo(p,_*u.w*n),e.arc(p,0,u.w*n,_*Math.PI/2,u.hinge==="right"?_>0?Math.PI:-Math.PI:0,u.hinge==="right"?_<0:_>0),e.stroke()}this.isSel(u.id)&&(e.strokeStyle="#fff",e.lineWidth=2*o,e.strokeRect(-f,-6*o,f*2,12*o)),e.restore()}),r.furniture.forEach(u=>{let d=Vo(u).map(s);if(e.beginPath(),d.forEach((f,p)=>p?e.lineTo(...f):e.moveTo(...f)),e.closePath(),e.fillStyle=u.type==="rug"?"rgba(143,107,179,.25)":"rgba(224,176,128,.28)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#e0b080",e.lineWidth=(this.isSel(u.id)?2.5:1)*o,e.stroke(),n>25){let f=s([u.x,u.z]);e.fillStyle="#e8d5bd",e.font=`${9*o}px sans-serif`,e.textAlign="center",e.fillText(u.name||u.type,f[0],f[1]+3*o)}}),this.deviceList(r).forEach(u=>{let d=s([u.x,u.z]);if(ke(u.entity)==="camera"){let f=$o(u.x,u.z,u.rot??0,u.fov??90,u.reach??7).map(s);e.beginPath(),f.forEach((p,_)=>_?e.lineTo(...p):e.moveTo(...p)),e.closePath(),e.fillStyle="rgba(25,230,255,.12)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"rgba(25,230,255,.7)",e.lineWidth=o,e.stroke()}e.beginPath(),e.arc(d[0],d[1],6*o,0,7),e.fillStyle=u.explicit?"#ffd08a":"#88889a",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#000",e.lineWidth=(this.isSel(u.id)?3:2)*o,e.stroke(),n>25&&(e.fillStyle="#cdd6f4",e.font=`${9*o}px sans-serif`,e.textAlign="left",e.fillText(u.name||u.entity.split(".")[1]||u.entity,d[0]+9*o,d[1]+3*o))}),this.draft.length&&(e.strokeStyle="#fff",e.setLineDash([6,4]),e.lineWidth=2*o,this.path(e,[...this.draft,this.mouse],!1),e.stroke(),e.setLineDash([]),this.tool==="wall"&&this.dim(e,this.draft[0],this.mouse)),this.marquee){let[u,d]=this.marquee.map(s);e.fillStyle="rgba(25,230,255,.08)",e.fillRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.strokeStyle="#19e6ff",e.setLineDash([5,4]),e.lineWidth=o,e.strokeRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.setLineDash([])}if(this.rectPrev){let[u,d]=this.rectPrev.map(s);e.strokeStyle="#fff",e.setLineDash([6,4]),e.strokeRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.setLineDash([]),this.dim(e,this.rectPrev[0],this.rectPrev[1])}let h=s(this.mouse);e.fillStyle="#19e6ff",e.fillRect(h[0]-3,h[1]-3,6,6)}dim(t,e,n){let s=this.w2s([(e[0]+n[0])/2,(e[1]+n[1])/2]);t.fillStyle="#fff",t.font=`${12*devicePixelRatio}px sans-serif`,t.textAlign="left",t.fillText(Math.abs(n[0]-e[0]).toFixed(2)+" \xD7 "+Math.abs(n[1]-e[1]).toFixed(2)+" m",s[0]+6,s[1]-6)}path(t,e,n){t.beginPath(),e.forEach((s,r)=>{let o=this.w2s(s);r?t.lineTo(...o):t.moveTo(...o)}),n&&t.closePath()}};customElements.get("homeplan3d-view")||customElements.define("homeplan3d-view",Ic);var Lc=class extends HTMLElement{set hass(t){this._h=t,this._v&&(this._v.hass=t)}set narrow(t){}set panel(t){}connectedCallback(){this.style.display="block",this.style.height="100vh",this._v=document.createElement("homeplan3d-view"),this._v.config={mode:"panel"},this._v.style.height="100%",this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-panel")||customElements.define("homeplan3d-panel",Lc);var Dc=class extends HTMLElement{setConfig(t){this._c={...t,mode:"card"},this._v&&(this._v.config=this._c)}set hass(t){this._h=t,this._v&&(this._v.hass=t)}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:8,min_rows:4}}static getStubConfig(){return{type:"custom:homeplan3d-card",height:450}}connectedCallback(){this._v=document.createElement("homeplan3d-view"),this._v.config=this._c||{mode:"card"},this._v.style.cssText=`display:block;height:${this._c?.height||450}px;border-radius:12px;overflow:hidden`,this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-card")||customElements.define("homeplan3d-card",Dc);window.customCards=window.customCards||[];window.customCards.push({type:"homeplan3d-card",name:"Home Plan 3D",description:"3D-Grundriss mit Ger\xE4testeuerung"});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
