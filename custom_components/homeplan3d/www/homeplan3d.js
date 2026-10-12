var dc="170",Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gd=0,qc=1,Wd=2;var lu=1,Xd=2,Bn=3,li=0,Ge=1,le=2,oi=0,as=1,Ze=2,Yc=3,Zc=4,$d=5,bi=100,qd=101,Yd=102,Zd=103,Kd=104,Jd=200,jd=201,Qd=202,tf=203,za=204,Ha=205,ef=206,nf=207,sf=208,rf=209,of=210,af=211,lf=212,cf=213,hf=214,Va=0,Ga=1,Wa=2,ds=3,Xa=4,$a=5,qa=6,Ya=7,cu=0,uf=1,df=2,ai=0,ff=1,pf=2,mf=3,gf=4,_f=5,xf=6,yf=7;var hu=300,fs=301,ps=302,Za=303,Ka=304,Io=306,qs=1e3,wi=1001,Ja=1002,gn=1003,vf=1004;var pr=1005;var Tn=1006,ra=1007;var Si=1008;var Wn=1009,uu=1010,du=1011,Ys=1012,fc=1013,Ei=1014,Hn=1015,sr=1016,pc=1017,mc=1018,ms=1020,fu=35902,pu=1021,mu=1022,mn=1023,gu=1024,_u=1025,ls=1026,gs=1027,xu=1028,gc=1029,yu=1030,_c=1031;var xc=1033,Zr=33776,Kr=33777,Jr=33778,jr=33779,ja=35840,Qa=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,Qr=36492,yl=36494,vl=36495,vu=36283,bl=36284,Ml=36285,wl=36286;var to=2300,Sl=2301,oa=2302,Kc=2400,Jc=2401,jc=2402;var bf=3200,Mf=3201;var bu=0,wf=1,ri="",Ve="srgb",bs="srgb-linear",Lo="linear",re="srgb";var Hi=7680;var Qc=519,Sf=512,Ef=513,Tf=514,Mu=515,Af=516,Rf=517,Cf=518,Pf=519,El=35044,yc=35048;var th="300 es",Vn=2e3,eo=2001,Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,cs=Math.PI/180,Zs=180/Math.PI;function An(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function vc(i,t){return(i%t+t)%t}function If(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Lf(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function Df(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function Uf(i,t=1){return t-Math.abs(vc(i,t*2)-t)}function Nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Of(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ff(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kf(i,t){return i+Math.random()*(t-i)}function Bf(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(eh=i);let t=eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hf(i){return i*cs}function Vf(i){return i*Zs}function Gf(i){return(i&i-1)===0&&i!==0}function Wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $f(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wu={DEG2RAD:cs,RAD2DEG:Zs,generateUUID:An,clamp:Ce,euclideanModulo:vc,mapLinear:If,inverseLerp:Lf,lerp:Vs,damp:Df,pingpong:Uf,smoothstep:Nf,smootherstep:Of,randInt:Ff,randFloat:kf,randFloatSpread:Bf,seededRandom:zf,degToRad:Hf,radToDeg:Vf,isPowerOfTwo:Gf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:$f,normalize:ne,denormalize:pn},K=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],v=s[1],y=s[4],x=s[7],T=s[2],E=s[5],C=s[8];return r[0]=o*_+a*v+l*T,r[3]=o*g+a*y+l*E,r[6]=o*m+a*x+l*C,r[1]=c*_+h*v+u*T,r[4]=c*g+h*y+u*E,r[7]=c*m+h*x+u*C,r[2]=d*_+f*v+p*T,r[5]=d*g+f*y+p*E,r[8]=d*m+f*x+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},aa=new zt;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){let i=no("canvas");return i.style.display="block",i}var nh={};function zs(i){i in nh||(nh[i]=!0,console.warn(i))}function Yf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?Lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ih=[.64,.33,.3,.6,.15,.06],sh=[.2126,.7152,.0722],rh=[.3127,.329],oh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[bs]:{primaries:ih,whitePoint:rh,transfer:Lo,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:sh,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:ih,whitePoint:rh,transfer:re,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:sh,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var Vi,Tl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=no("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jf=0,io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jf=0,Ke=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,s=wi,r=Tn,o=Si,a=mn,l=Wn,c=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=An(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=hu;Ke.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,T=(m+1)/2,E=(h+d)/4,C=(u+_)/4,P=(p+g)/4;return y>x&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=C/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Al=class extends Xn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let T=Math.sqrt(y),E=Math.atan2(T,m*v);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let x=a*v;if(l=l*g+d*x,c=c*g+f*x,h=h*g+p*x,u=u*g+_*x,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new L,lh=new _n,Ti=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),gr.subVectors(this.max,Ls),Gi.subVectors(t.a,Ls),Wi.subVectors(t.b,Ls),Xi.subVectors(t.c,Ls),Qn.subVectors(Wi,Gi),ti.subVectors(Xi,Wi),pi.subVectors(Gi,Xi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-pi.z,pi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,pi.z,0,-pi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-pi.y,pi.x,0];return!ha(e,Gi,Wi,Xi,gr)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,Gi,Wi,Xi,gr))?!1:(_r.crossVectors(Qn,ti),e=[_r.x,_r.y,_r.z],ha(e,Gi,Wi,Xi,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,mr=new Ti,Gi=new L,Wi=new L,Xi=new L,Qn=new L,ti=new L,pi=new L,Ls=new L,gr=new L,_r=new L,mi=new L;function ha(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qf=new Ti,Ds=new L,ua=new L,Ai=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(ua)),this.expandByPoint(Ds.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new L,da=new L,xr=new L,ei=new L,fa=new L,yr=new L,pa=new L,ci=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){da.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(da);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=ei.dot(this.direction),l=-ei.dot(xr),c=ei.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(da).addScaledVector(xr,d),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){fa.subVectors(e,t),yr.subVectors(n,t),pa.crossVectors(fa,yr);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);let l=a*this.direction.dot(yr.crossVectors(ei,yr));if(l<0)return null;let c=a*this.direction.dot(fa.cross(ei));if(c<0||l+c>o)return null;let h=-a*ei.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),ni.crossVectors(n,qe),ni.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),ni.crossVectors(n,qe)),ni.normalize(),vr.crossVectors(qe,ni),s[0]=ni.x,s[4]=vr.x,s[8]=qe.x,s[1]=ni.y,s[5]=vr.y,s[9]=qe.y,s[2]=ni.z,s[6]=vr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],y=n[7],x=n[11],T=n[15],E=s[0],C=s[4],P=s[8],w=s[12],b=s[1],A=s[5],F=s[9],O=s[13],B=s[2],X=s[6],k=s[10],Z=s[14],H=s[3],et=s[7],ot=s[11],pt=s[15];return r[0]=o*E+a*b+l*B+c*H,r[4]=o*C+a*A+l*X+c*et,r[8]=o*P+a*F+l*k+c*ot,r[12]=o*w+a*O+l*Z+c*pt,r[1]=h*E+u*b+d*B+f*H,r[5]=h*C+u*A+d*X+f*et,r[9]=h*P+u*F+d*k+f*ot,r[13]=h*w+u*O+d*Z+f*pt,r[2]=p*E+_*b+g*B+m*H,r[6]=p*C+_*A+g*X+m*et,r[10]=p*P+_*F+g*k+m*ot,r[14]=p*w+_*O+g*Z+m*pt,r[3]=v*E+y*b+x*B+T*H,r[7]=v*C+y*A+x*X+T*et,r[11]=v*P+y*F+x*k+T*ot,r[15]=v*w+y*O+x*Z+T*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=u*g*c-_*d*c+_*l*f-a*g*f-u*l*m+a*d*m,y=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,x=h*_*c-p*u*c+p*a*f-o*_*f-h*a*m+o*u*m,T=p*u*l-h*_*l-p*a*d+o*_*d+h*a*g-o*u*g,E=e*v+n*y+s*x+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=v*C,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*m-n*d*m)*C,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*m+n*l*m)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=y*C,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*C,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=x*C,t[9]=(p*u*r-h*_*r-p*n*f+e*_*f+h*n*m-e*u*m)*C,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*m+e*a*m)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=T*C,t[13]=(h*_*s-p*u*s+p*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(p*a*s-o*_*s-p*n*l+e*_*l+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,v=l*c,y=l*h,x=l*u,T=n.x,E=n.y,C=n.z;return s[0]=(1-(_+m))*T,s[1]=(f+x)*T,s[2]=(p-y)*T,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+m))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(p+y)*C,s[9]=(g-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let c=1/r,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,p;if(a===Vn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===eo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,p,_;if(a===Vn)p=(o+r)*u,_=-2*u;else if(a===eo)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new L,un=new Kt,tp=new L(0,0,0),ep=new L(1,1,1),ni=new L,vr=new L,qe=new L,ch=new Kt,hh=new _n,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hh.setFromEuler(this),this.setFromQuaternion(hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},np=0,uh=new L,qi=new _n,On=new Kt,br=new L,Us=new L,ip=new L,sp=new _n,dh=new L(1,0,0),fh=new L(0,1,0),ph=new L(0,0,1),mh={type:"added"},rp={type:"removed"},Yi={type:"childadded",child:null},ma={type:"childremoved",child:null},Se=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Rn,n=new _n,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new zt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(dh,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dh,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Us,br,this.up):On.lookAt(br,Us,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(On),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new L,Fn=new L,ga=new L,kn=new L,Zi=new L,Ki=new L,gh=new L,_a=new L,xa=new L,ya=new L,va=new _e,ba=new _e,Ma=new _e,zn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Fn.subVectors(n,e),ga.subVectors(t,e);let o=dn.dot(dn),a=dn.dot(Fn),l=dn.dot(ga),c=Fn.dot(Fn),h=Fn.dot(ga),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return va.setScalar(0),ba.setScalar(0),Ma.setScalar(0),va.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Fn.subVectors(t,e),dn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),dn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),Ki.subVectors(r,n),_a.subVectors(t,n);let l=Zi.dot(_a),c=Ki.dot(_a);if(l<=0&&c<=0)return e.copy(n);xa.subVectors(t,s);let h=Zi.dot(xa),u=Ki.dot(xa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zi,o);ya.subVectors(t,r);let f=Zi.dot(ya),p=Ki.dot(ya);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ki,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return gh.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(gh,a);let m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Zi,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=vc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Zt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ce(De.r*255,0,255))*65536+Math.round(Ce(De.g*255,0,255))*256+Math.round(Ce(De.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(De.copy(this),e);let n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ve){Zt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,s=De.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Mr);let n=Vs(ii.h,Mr.h,e),s=Vs(ii.s,Mr.s,e),r=Vs(ii.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Rt;Rt.NAMES=Eu;var op=0,Cn=class extends Xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=An(),this.name="",this.blending=as,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ue=class extends Cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new L,wr=new K,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==El&&(t.usage=this.usage),t}};var ro=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},ap=0,tn=new Kt,Sa=new Se,Ji=new L,Ye=new Ti,Ns=new Ti,Re=new L,Xt=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?oo:ro)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ye.min,Ns.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,Ns.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(Ns.min),Ye.expandByPoint(Ns.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),Re.add(Ji)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;let c=new L,h=new L,u=new L,d=new K,f=new K,p=new K,_=new L,g=new L;function m(P,w,b){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(A),a[P].add(_),a[w].add(_),a[b].add(_),l[P].add(g),l[w].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,w=v.length;P<w;++P){let b=v[P],A=b.start,F=b.count;for(let O=A,B=A+F;O<B;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new L,x=new L,T=new L,E=new L;function C(P){T.fromBufferAttribute(s,P),E.copy(T);let w=a[P];y.copy(w),y.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(E,w);let A=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,A)}for(let P=0,w=v.length;P<w;++P){let b=v[P],A=b.start,F=b.count;for(let O=A,B=A+F;O<B;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_h=new Kt,gi=new ci,Sr=new Ai,xh=new L,Er=new L,Tr=new L,Ar=new L,Ea=new L,Rr=new L,yh=new L,Cr=new L,Ut=class extends Se{constructor(t=new Xt,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,t),o?Rr.addScaledVector(Ea,h):Rr.addScaledVector(Ea.sub(e),h))}e.add(Rr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Sr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Sr,xh)===null||gi.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(_h.copy(r).invert(),gi.copy(t.ray).applyMatrix4(_h),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,T=y;x<T;x+=3){let E=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=Pr(this,m,t,n,c,h,u,E,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Pr(this,o,t,n,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,T=y;x<T;x+=3){let E=x,C=x+1,P=x+2;s=Pr(this,m,t,n,c,h,u,E,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let v=g,y=g+1,x=g+2;s=Pr(this,o,t,n,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function lp(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Cr);return c<e.near||c>e.far?null:{distance:c,point:Cr.clone(),object:i}}function Pr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Ar);let h=lp(i,t,e,n,Er,Tr,Ar,yh);if(h){let u=new L;zn.getBarycoord(yh,Er,Tr,Ar,u),s&&(h.uv=zn.getInterpolatedAttribute(s,a,l,c,u,new K)),r&&(h.uv1=zn.getInterpolatedAttribute(r,a,l,c,u,new K)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};zn.getNormal(Er,Tr,Ar,d.normal),h.face=d,h.barycoord=u}return h}var xe=class i extends Xt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function p(_,g,m,v,y,x,T,E,C,P,w){let b=x/C,A=T/P,F=x/2,O=T/2,B=E/2,X=C+1,k=P+1,Z=0,H=0,et=new L;for(let ot=0;ot<k;ot++){let pt=ot*A-O;for(let Pt=0;Pt<X;Pt++){let $t=Pt*b-F;et[_]=$t*v,et[g]=pt*y,et[m]=B,c.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[m]=E>0?1:-1,h.push(et.x,et.y,et.z),u.push(Pt/C),u.push(1-ot/P),Z+=1}}for(let ot=0;ot<P;ot++)for(let pt=0;pt<C;pt++){let Pt=d+pt+X*ot,$t=d+pt+X*(ot+1),$=d+(pt+1)+X*(ot+1),it=d+(pt+1)+X*ot;l.push(Pt,$t,it),l.push($t,$,it),H+=6}a.addGroup(f,H,w),f+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function cp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var hp={clone:_s,merge:Oe},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ao=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new L,vh=new K,bh=new K,Fe=class extends ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,vh,bh),e.subVectors(bh,vh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,Qi=1,Cl=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new Fe(ji,Qi,t,e);r.layers=this.layers,this.add(r);let o=new Fe(ji,Qi,t,e);o.layers=this.layers,this.add(o);let a=new Fe(ji,Qi,t,e);a.layers=this.layers,this.add(a);let l=new Fe(ji,Qi,t,e);l.layers=this.layers,this.add(l);let c=new Fe(ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},lo=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pl=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:oi});r.uniforms.tEquirect.value=e;let o=new Ut(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Tn),new Cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ta=new L,fp=new L,pp=new zt,fn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ta.subVectors(n,e).cross(fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pp.getNormalMatrix(t),s=this.coplanarPoint(Ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Ai,Ir=new L,Js=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,o=new fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,g-f,x-m).normalize(),n[1].setComponents(l+r,d+c,g+f,x+m).normalize(),n[2].setComponents(l+o,d+h,g+p,x+v).normalize(),n[3].setComponents(l-o,d-h,g-p,x-v).normalize(),n[4].setComponents(l-a,d-u,g-_,x-y).normalize(),e===Vn)n[5].setComponents(l+a,d+u,g+_,x+y).normalize();else if(e===eo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qn=class i extends Xt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let v=m*d-o;for(let y=0;y<c;y++){let x=y*u-r;p.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let y=v+c*m,x=v+c*(m+1),T=v+1+c*(m+1),E=v+1+c*m;f.push(y,x,E),f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,wg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define STANDARD
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
}`,Hg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:gp,alphahash_pars_fragment:_p,alphamap_fragment:xp,alphamap_pars_fragment:yp,alphatest_fragment:vp,alphatest_pars_fragment:bp,aomap_fragment:Mp,aomap_pars_fragment:wp,batching_pars_vertex:Sp,batching_vertex:Ep,begin_vertex:Tp,beginnormal_vertex:Ap,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:Op,color_pars_vertex:Fp,color_vertex:kp,common:Bp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:$p,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Kp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:lm,envmap_vertex:jp,fog_vertex:Qp,fog_pars_vertex:tm,fog_fragment:em,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:cm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:dm,lights_physical_fragment:fm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:bm,map_fragment:Mm,map_pars_fragment:wm,map_particle_fragment:Sm,map_particle_pars_fragment:Em,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Rm,morphcolor_vertex:Cm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Im,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Om,normal_vertex:Fm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:$m,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:tg,skinbase_vertex:eg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:og,tonemapping_fragment:ag,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:dg,uv_vertex:fg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:_g,backgroundCube_frag:xg,cube_vert:yg,cube_frag:vg,depth_vert:bg,depth_frag:Mg,distanceRGBA_vert:wg,distanceRGBA_frag:Sg,equirect_vert:Eg,equirect_frag:Tg,linedashed_vert:Ag,linedashed_frag:Rg,meshbasic_vert:Cg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:Og,meshphong_vert:Fg,meshphong_frag:kg,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:Hg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Wg,shadow_vert:Xg,shadow_frag:$g,sprite_vert:qg,sprite_frag:Yg},ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},En={basic:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([ct.lights,ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};En.physical={uniforms:Oe([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Lr={r:0,b:0,g:0},xi=new Rn,Zg=new Kt;function Kg(i,t,e,n,s,r,o){let a=new Rt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1,x=p(v);x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){let x=p(y);x&&(x.isCubeTexture||x.mapping===Io)?(h===void 0&&(h=new Ut(new xe(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:_s(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(y.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(xi)),h.material.toneMapped=Zt.getTransfer(x.colorSpace)!==re,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ut(new qn(2,2),new Pn({name:"BackgroundMaterial",uniforms:_s(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(Lr,Tu(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:_,addToRenderList:g}}function Jg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,A,F,O,B){let X=!1,k=u(O,F,A);r!==k&&(r=k,c(r.object)),X=f(b,O,F,B),X&&p(b,O,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(b,A,F,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,A,F){let O=F.wireframe===!0,B=n[b.id];B===void 0&&(B={},n[b.id]=B);let X=B[A.id];X===void 0&&(X={},B[A.id]=X);let k=X[O];return k===void 0&&(k=d(l()),X[O]=k),k}function d(b){let A=[],F=[],O=[];for(let B=0;B<e;B++)A[B]=0,F[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,A,F,O){let B=r.attributes,X=A.attributes,k=0,Z=F.getAttributes();for(let H in Z)if(Z[H].location>=0){let ot=B[H],pt=X[H];if(pt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor)),ot===void 0||ot.attribute!==pt||pt&&ot.data!==pt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function p(b,A,F,O){let B={},X=A.attributes,k=0,Z=F.getAttributes();for(let H in Z)if(Z[H].location>=0){let ot=X[H];ot===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor));let pt={};pt.attribute=ot,ot&&ot.data&&(pt.data=ot.data),B[H]=pt,k++}r.attributes=B,r.attributesNum=k,r.index=O}function _(){let b=r.newAttributes;for(let A=0,F=b.length;A<F;A++)b[A]=0}function g(b){m(b,0)}function m(b,A){let F=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;F[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),B[b]!==A&&(i.vertexAttribDivisor(b,A),B[b]=A)}function v(){let b=r.newAttributes,A=r.enabledAttributes;for(let F=0,O=A.length;F<O;F++)A[F]!==b[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function y(b,A,F,O,B,X,k){k===!0?i.vertexAttribIPointer(b,A,F,B,X):i.vertexAttribPointer(b,A,F,O,B,X)}function x(b,A,F,O){_();let B=O.attributes,X=F.getAttributes(),k=A.defaultAttributeValues;for(let Z in X){let H=X[Z];if(H.location>=0){let et=B[Z];if(et===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),et!==void 0){let ot=et.normalized,pt=et.itemSize,Pt=t.get(et);if(Pt===void 0)continue;let $t=Pt.buffer,$=Pt.type,it=Pt.bytesPerElement,yt=$===i.INT||$===i.UNSIGNED_INT||et.gpuType===fc;if(et.isInterleavedBufferAttribute){let st=et.data,Ct=st.stride,Ot=et.offset;if(st.isInstancedInterleavedBuffer){for(let Dt=0;Dt<H.locationSize;Dt++)m(H.location+Dt,st.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<H.locationSize;Dt++)g(H.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Dt=0;Dt<H.locationSize;Dt++)y(H.location+Dt,pt/H.locationSize,$,ot,Ct*it,(Ot+pt/H.locationSize*Dt)*it,yt)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)m(H.location+st,et.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<H.locationSize;st++)g(H.location+st);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let st=0;st<H.locationSize;st++)y(H.location+st,pt/H.locationSize,$,ot,pt*it,pt/H.locationSize*st*it,yt)}}else if(k!==void 0){let ot=k[Z];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(H.location,ot);break;case 3:i.vertexAttrib3fv(H.location,ot);break;case 4:i.vertexAttrib4fv(H.location,ot);break;default:i.vertexAttrib1fv(H.location,ot)}}}}v()}function T(){P();for(let b in n){let A=n[b];for(let F in A){let O=A[F];for(let B in O)h(O[B].object),delete O[B];delete A[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let A=n[b.id];for(let F in A){let O=A[F];for(let B in O)h(O[B].object),delete O[B];delete A[F]}delete n[b.id]}function C(b){for(let A in n){let F=n[A];if(F[b.id]===void 0)continue;let O=F[b.id];for(let B in O)h(O[B].object),delete O[B];delete F[b.id]}}function P(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function jg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function t0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new fn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,y=v*4,x=m.clippingState||null;l.value=x,x=h(p,d,y,f);for(let T=0;T!==y;++T)x[T]=e[T];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function e0(i){let t=new WeakMap;function e(o,a){return a===Za?o.mapping=fs:a===Ka&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Za||a===Ka)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Pl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var co=class extends ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,Mh=[.125,.215,.35,.446,.526,.582],Mi=20,Aa=new co,wh=new Rt,Ra=null,Ca=0,Pa=0,Ia=!1,vi=(1+Math.sqrt(5))/2,ts=1/vi,Sh=[new L(-vi,ts,0),new L(vi,ts,0),new L(-ts,0,vi),new L(ts,0,vi),new L(0,vi,-ts),new L(0,vi,ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ho=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Ia,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:sr,format:mn,colorSpace:bs,depthBuffer:!1},s=Eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(r)),this._blurMaterial=i0(r,t,e)}return s}_compileMaterial(t){let e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,s){let a=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wh),h.toneMapping=ai,h.autoClear=!1;let f=new Ue({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),p=new Ut(new xe,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(wh),_=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Dr(s,v*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fs||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sh[(s-r-1)%Sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ut(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Mi;g>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);let m=[],v=0;for(let C=0;C<Mi;++C){let P=C/_,w=Math.exp(-P*P/2);m.push(w),C===0?v+=w:C<g&&(v+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;let x=this._sizeLods[s],T=3*x*(s>y-rs?s-y+rs:0),E=4*(this._cubeSize-x);Dr(e,T,E,3*x,2*x),l.setRenderTarget(e),l.render(u,Aa)}};function n0(i){let t=[],e=[],n=[],s=i,r=i-rs+1+Mh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-rs?l=Mh[o-i+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,P=E>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(w,_*p*E),y.set(d,g*p*E);let b=[E,E,E,E,E,E];x.set(b,m*p*E)}let T=new Xt;T.setAttribute("position",new Pe(v,_)),T.setAttribute("uv",new Pe(y,g)),T.setAttribute("faceIndex",new Pe(x,m)),t.push(T),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Eh(i,t,e){let n=new $n(i,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function i0(i,t,e){let n=new Float32Array(Mi),s=new L(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Th(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ah(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function s0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Za||l===Ka,h=l===fs||l===ps;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ho(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ho(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function r0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function o0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){let T=v[y+0],E=v[y+1],C=v[y+2];d.push(T,E,E,C,C,T)}}else if(p!==void 0){let v=p.array;_=p.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let T=y+0,E=y+1,C=y+2;d.push(T,E,E,C,C,T)}}else return;let g=new(Su(d)?oo:ro)(d,1);g.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function a0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,_){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*_[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function l0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function c0(i,t,e){let n=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*T*4*u),C=new so(E,x,T,u);C.type=Hn,C.needsUpdate=!0;let P=y*4;for(let b=0;b<u;b++){let A=g[b],F=m[b],O=v[b],B=x*T*4*b;for(let X=0;X<A.count;X++){let k=X*P;f===!0&&(s.fromBufferAttribute(A,X),E[B+k+0]=s.x,E[B+k+1]=s.y,E[B+k+2]=s.z,E[B+k+3]=0),p===!0&&(s.fromBufferAttribute(F,X),E[B+k+4]=s.x,E[B+k+5]=s.y,E[B+k+6]=s.z,E[B+k+7]=0),_===!0&&(s.fromBufferAttribute(O,X),E[B+k+8]=s.x,E[B+k+9]=s.y,E[B+k+10]=s.z,E[B+k+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new K(x,T)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function h0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var uo=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h=ls){if(h!==ls&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Ei),n===void 0&&h===gs&&(n=ms),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ru=new Ke,Rh=new uo(1,1),Cu=new so,Pu=new Rl,Iu=new lo,Ch=[],Ph=[],Ih=new Float32Array(16),Lh=new Float32Array(9),Dh=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Do(i,t){let e=Ph[t];e===void 0&&(e=new Int32Array(t),Ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function u0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Dh.set(n),i.uniformMatrix2fv(this.addr,!1,Dh),Te(e,n)}}function g0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Lh.set(n),i.uniformMatrix3fv(this.addr,!1,Lh),Te(e,n)}}function _0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),Te(e,n)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rh.compareFunction=Mu,r=Rh):r=Ru,e.setTexture2D(t||r,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pu,s)}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Iu,s)}function C0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cu,s)}function P0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return b0;case 5125:return M0;case 36294:return w0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function I0(i,t){i.uniform1fv(this.addr,t)}function L0(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function D0(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function U0(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function N0(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function O0(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F0(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k0(i,t){i.uniform1iv(this.addr,t)}function B0(i,t){i.uniform2iv(this.addr,t)}function z0(i,t){i.uniform3iv(this.addr,t)}function H0(i,t){i.uniform4iv(this.addr,t)}function V0(i,t){i.uniform1uiv(this.addr,t)}function G0(i,t){i.uniform2uiv(this.addr,t)}function W0(i,t){i.uniform3uiv(this.addr,t)}function X0(i,t){i.uniform4uiv(this.addr,t)}function $0(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ru,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pu,r[o])}function Y0(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Iu,r[o])}function Z0(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cu,r[o])}function K0(i){switch(i){case 5126:return I0;case 35664:return L0;case 35665:return D0;case 35666:return U0;case 35674:return N0;case 35675:return O0;case 35676:return F0;case 5124:case 35670:return k0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return G0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}var Il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}},Ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K0(e.type)}},Dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},La=/(\w+)(\])?(\[|\.)?/g;function Uh(i,t){i.seq.push(t),i.map[t.id]=t}function J0(i,t,e){let n=i.name,s=n.length;for(La.lastIndex=0;;){let r=La.exec(n),o=La.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uh(e,c===void 0?new Il(a,i,t):new Ll(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Dl(a),Uh(e,u)),e=u}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);J0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Nh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var j0=37297,Q0=0;function t_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Oh=new zt;function e_(i){Zt._getMatrix(Oh,Zt.workingColorSpace,i);let t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Lo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+t_(i.getShaderSource(t),o)}else return s}function n_(i,t){let e=e_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i_(i,t){let e;switch(t){case ff:e="Linear";break;case pf:e="Reinhard";break;case mf:e="Cineon";break;case gf:e="ACESFilmic";break;case xf:e="AgX";break;case yf:e="Neutral";break;case _f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ur=new L;function s_(){Zt.getLuminanceCoefficients(Ur);let i=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function o_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(i){return i.replace(l_,h_)}var c_=new Map;function h_(i,t){let e=Vt[t];if(e===void 0){let n=c_.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ul(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(u_,d_)}function d_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function f_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case Io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function g_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cu:t="ENVMAP_BLENDING_MULTIPLY";break;case uf:t="ENVMAP_BLENDING_MIX";break;case df:t="ENVMAP_BLENDING_ADD";break}return t}function __(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function x_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=f_(e),c=p_(e),h=m_(e),u=g_(e),d=__(e),f=r_(e),p=o_(r),_=s.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(g=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ai?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),s_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Ul(o),o=kh(o,e),o=Bh(o,e),a=Ul(a),a=kh(a,e),a=Bh(a,e),o=zh(o),a=zh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+o,x=v+m+a,T=Nh(s,s.VERTEX_SHADER,y),E=Nh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(A){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(E).trim(),X=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,E);else{let Z=Fh(s,T,"vertex"),H=Fh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+Z+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||B==="")&&(k=!1);k&&(A.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(T),s.deleteShader(E),P=new us(s,_),w=a_(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,j0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}var y_=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ol(t),e.set(t,n)),n}},Ol=class{constructor(t){this.id=y_++,this.code=t,this.usedTimes=0}};function v_(i,t,e,n,s,r,o){let a=new Ks,l=new Nl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,A,F,O){let B=F.fog,X=O.geometry,k=w.isMeshStandardMaterial?F.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||k),H=Z&&Z.mapping===Io?Z.image.height:null,et=p[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=ot!==void 0?ot.length:0,Pt=0;X.morphAttributes.position!==void 0&&(Pt=1),X.morphAttributes.normal!==void 0&&(Pt=2),X.morphAttributes.color!==void 0&&(Pt=3);let $t,$,it,yt;if(et){let ee=En[et];$t=ee.vertexShader,$=ee.fragmentShader}else $t=w.vertexShader,$=w.fragmentShader,l.update(w),it=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);let st=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ot=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,Yt=!!w.map,j=!!w.matcap,rt=!!Z,I=!!w.aoMap,Tt=!!w.lightMap,tt=!!w.bumpMap,xt=!!w.normalMap,lt=!!w.displacementMap,It=!!w.emissiveMap,gt=!!w.metalnessMap,R=!!w.roughnessMap,M=w.anisotropy>0,z=w.clearcoat>0,q=w.dispersion>0,Q=w.iridescence>0,Y=w.sheen>0,Mt=w.transmission>0,ht=M&&!!w.anisotropyMap,_t=z&&!!w.clearcoatMap,Wt=z&&!!w.clearcoatNormalMap,nt=z&&!!w.clearcoatRoughnessMap,vt=Q&&!!w.iridescenceMap,Lt=Q&&!!w.iridescenceThicknessMap,Nt=Y&&!!w.sheenColorMap,bt=Y&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Ht=!!w.specularColorMap,ce=!!w.specularIntensityMap,D=Mt&&!!w.transmissionMap,ut=Mt&&!!w.thicknessMap,W=!!w.gradientMap,J=!!w.alphaMap,mt=w.alphaTest>0,dt=!!w.alphaHash,kt=!!w.extensions,ge=ai;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=i.toneMapping);let Ie={shaderID:et,shaderType:w.type,shaderName:w.name,vertexShader:$t,fragmentShader:$,defines:w.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&O.instanceColor!==null,instancingMorph:Ot&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:bs,alphaToCoverage:!!w.alphaToCoverage,map:Yt,matcap:j,envMap:rt,envMapMode:rt&&Z.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Tt,bumpMap:tt,normalMap:xt,displacementMap:d&&lt,emissiveMap:It,normalMapObjectSpace:xt&&w.normalMapType===wf,normalMapTangentSpace:xt&&w.normalMapType===bu,metalnessMap:gt,roughnessMap:R,anisotropy:M,anisotropyMap:ht,clearcoat:z,clearcoatMap:_t,clearcoatNormalMap:Wt,clearcoatRoughnessMap:nt,dispersion:q,iridescence:Q,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Nt,sheenRoughnessMap:bt,specularMap:qt,specularColorMap:Ht,specularIntensityMap:ce,transmission:Mt,transmissionMap:D,thicknessMap:ut,gradientMap:W,opaque:w.transparent===!1&&w.blending===as&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:mt,alphaHash:dt,combine:w.combine,mapUv:Yt&&_(w.map.channel),aoMapUv:I&&_(w.aoMap.channel),lightMapUv:Tt&&_(w.lightMap.channel),bumpMapUv:tt&&_(w.bumpMap.channel),normalMapUv:xt&&_(w.normalMap.channel),displacementMapUv:lt&&_(w.displacementMap.channel),emissiveMapUv:It&&_(w.emissiveMap.channel),metalnessMapUv:gt&&_(w.metalnessMap.channel),roughnessMapUv:R&&_(w.roughnessMap.channel),anisotropyMapUv:ht&&_(w.anisotropyMap.channel),clearcoatMapUv:_t&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(w.sheenRoughnessMap.channel),specularMapUv:qt&&_(w.specularMap.channel),specularColorMapUv:Ht&&_(w.specularColorMap.channel),specularIntensityMapUv:ce&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:ut&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Yt||J),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Yt&&w.map.isVideoTexture===!0&&Zt.getTransfer(w.map.colorSpace)===re,decodeVideoTextureEmissive:It&&w.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(w.emissiveMap.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===le,flipSided:w.side===Ge,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:kt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&w.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let A in w.defines)b.push(A),b.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(v(b,w),y(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let b=p[w.type],A;if(b){let F=En[b];A=hp.clone(F.uniforms)}else A=w.uniforms;return A}function T(w,b){let A;for(let F=0,O=h.length;F<O;F++){let B=h[F];if(B.cacheKey===b){A=B,++A.usedTimes;break}}return A===void 0&&(A=new x_(i,b,w,r),h.push(A)),A}function E(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function b_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,_,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,d,f,p,_,g){let m=o(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,_,g){let m=o(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||M_),n.length>1&&n.sort(d||Vh),s.length>1&&s.sort(d||Vh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function w_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Gh,i.set(n,[o])):s>=r.length?(o=new Gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Rt};break;case"SpotLight":e={position:new L,direction:new L,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function E_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var T_=0;function A_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){let t=new S_,e=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Kt,o=new Kt;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,y=0,x=0,T=0,E=0,C=0;c.sort(A_);for(let w=0,b=c.length;w<b;w++){let A=c[w],F=A.color,O=A.intensity,B=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],O);C++}else if(A.isDirectionalLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=A.shadow.matrix,v++}n.directional[f]=k,f++}else if(A.isSpotLight){let k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(F).multiplyScalar(O),k.distance=B,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[_]=k;let Z=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,Z.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,A.castShadow){let H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,x++}_++}else if(A.isRectAreaLight){let k=t.get(A);k.color.copy(F).multiplyScalar(O),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=k,g++}else if(A.isPointLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){let Z=A.shadow,H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=A.shadow.matrix,y++}n.point[p]=k,p++}else if(A.isHemisphereLight){let k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(O),k.groundColor.copy(A.groundColor).multiplyScalar(O),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=T,P.numLightProbes=C,n.version=T_++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let y=c[m];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Wh(i){let t=new R_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function C_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Wh(i),t.set(s,[a])):r>=o.length?(a=new Wh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fl=class extends Cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kl=class extends Cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`;function L_(i,t,e){let n=new Js,s=new K,r=new K,o=new _e,a=new Fl({depthPacking:Mf}),l=new kl,c={},h=e.maxTextureSize,u={[li]:Ge,[Ge]:li,[le]:le},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:P_,fragmentShader:I_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let m=this.type;this.render=function(E,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(oi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=m!==Bn&&this.type===Bn,B=m===Bn&&this.type!==Bn;for(let X=0,k=E.length;X<k;X++){let Z=E[X],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let et=H.getFrameExtents();if(s.multiply(et),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,H.mapSize.y=r.y)),H.map===null||O===!0||B===!0){let pt=this.type!==Bn?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new $n(s.x,s.y,pt),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ot=H.getViewportCount();for(let pt=0;pt<ot;pt++){let Pt=H.getViewport(pt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),F.viewport(o),H.updateMatrices(Z,pt),n=H.getFrustum(),x(C,P,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Bn&&v(H,P),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,b,A)};function v(E,C){let P=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function y(E,C,P,w){let b=null,A=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)b=A;else if(b=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let F=b.uuid,O=C.uuid,B=c[F];B===void 0&&(B={},c[F]=B);let X=B[O];X===void 0&&(X=b.clone(),B[O]=X,C.addEventListener("dispose",T)),b=X}if(b.visible=C.visible,b.wireframe=C.wireframe,w===Bn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=i.properties.get(b);F.light=P}return b}function x(E,C,P,w,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let O=t.update(E),B=E.material;if(Array.isArray(B)){let X=O.groups;for(let k=0,Z=X.length;k<Z;k++){let H=X[k],et=B[H.materialIndex];if(et&&et.visible){let ot=y(E,et,w,b);E.onBeforeShadow(i,E,C,P,O,ot,H),i.renderBufferDirect(P,null,O,ot,E,H),E.onAfterShadow(i,E,C,P,O,ot,H)}}}else if(B.visible){let X=y(E,B,w,b);E.onBeforeShadow(i,E,C,P,O,X,null),i.renderBufferDirect(P,null,O,X,E,null),E.onAfterShadow(i,E,C,P,O,X,null)}}let F=E.children;for(let O=0,B=F.length;O<B;O++)x(F[O],C,P,w,b)}function T(E){E.target.removeEventListener("dispose",T);for(let P in c){let w=c[P],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var D_={[Va]:Ga,[Wa]:qa,[Xa]:Ya,[ds]:$a,[Ga]:Va,[qa]:Wa,[Ya]:Xa,[$a]:ds};function U_(i,t){function e(){let D=!1,ut=new _e,W=null,J=new _e(0,0,0,0);return{setMask:function(mt){W!==mt&&!D&&(i.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){D=mt},setClear:function(mt,dt,kt,ge,Ie){Ie===!0&&(mt*=ge,dt*=ge,kt*=ge),ut.set(mt,dt,kt,ge),J.equals(ut)===!1&&(i.clearColor(mt,dt,kt,ge),J.copy(ut))},reset:function(){D=!1,W=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,W=null,J=null,mt=null;return{setReversed:function(dt){if(ut!==dt){let kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let ge=mt;mt=null,this.setClear(ge)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?st(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(dt){W!==dt&&!D&&(i.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=D_[dt]),J!==dt){switch(dt){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){mt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),mt=dt)},reset:function(){D=!1,W=null,J=null,mt=null,ut=!1}}}function s(){let D=!1,ut=null,W=null,J=null,mt=null,dt=null,kt=null,ge=null,Ie=null;return{setTest:function(ee){D||(ee?st(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ee){ut!==ee&&!D&&(i.stencilMask(ee),ut=ee)},setFunc:function(ee,ln,Ln){(W!==ee||J!==ln||mt!==Ln)&&(i.stencilFunc(ee,ln,Ln),W=ee,J=ln,mt=Ln)},setOp:function(ee,ln,Ln){(dt!==ee||kt!==ln||ge!==Ln)&&(i.stencilOp(ee,ln,Ln),dt=ee,kt=ln,ge=Ln)},setLocked:function(ee){D=ee},setClear:function(ee){Ie!==ee&&(i.clearStencil(ee),Ie=ee)},reset:function(){D=!1,ut=null,W=null,J=null,mt=null,dt=null,kt=null,ge=null,Ie=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,y=null,x=null,T=null,E=null,C=new Rt(0,0,0),P=0,w=!1,b=null,A=null,F=null,O=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Z>=2);let et=null,ot={},pt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),$t=new _e().fromArray(pt),$=new _e().fromArray(Pt);function it(D,ut,W,J){let mt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<W;kt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ut+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return dt}let yt={};yt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(ds),tt(!1),xt(qc),st(i.CULL_FACE),I(oi);function st(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ot(D,ut){return u[D]!==ut?(i.bindFramebuffer(D,ut),u[D]=ut,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Dt(D,ut){let W=f,J=!1;if(D){W=d.get(ut),W===void 0&&(W=[],d.set(ut,W));let mt=D.textures;if(W.length!==mt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,kt=mt.length;dt<kt;dt++)W[dt]=i.COLOR_ATTACHMENT0+dt;W.length=mt.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function Yt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}let j={[bi]:i.FUNC_ADD,[qd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};j[Zd]=i.MIN,j[Kd]=i.MAX;let rt={[Jd]:i.ZERO,[jd]:i.ONE,[Qd]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[of]:i.SRC_ALPHA_SATURATE,[sf]:i.DST_COLOR,[ef]:i.DST_ALPHA,[tf]:i.ONE_MINUS_SRC_COLOR,[Ha]:i.ONE_MINUS_SRC_ALPHA,[rf]:i.ONE_MINUS_DST_COLOR,[nf]:i.ONE_MINUS_DST_ALPHA,[af]:i.CONSTANT_COLOR,[lf]:i.ONE_MINUS_CONSTANT_COLOR,[cf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,ut,W,J,mt,dt,kt,ge,Ie,ee){if(D===oi){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),D!==$d){if(D!==g||ee!==w){if((m!==bi||x!==bi)&&(i.blendEquation(i.FUNC_ADD),m=bi,x=bi),ee)switch(D){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.ONE,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,T=null,E=null,C.set(0,0,0),P=0,g=D,w=ee}return}mt=mt||ut,dt=dt||W,kt=kt||J,(ut!==m||mt!==x)&&(i.blendEquationSeparate(j[ut],j[mt]),m=ut,x=mt),(W!==v||J!==y||dt!==T||kt!==E)&&(i.blendFuncSeparate(rt[W],rt[J],rt[dt],rt[kt]),v=W,y=J,T=dt,E=kt),(ge.equals(C)===!1||Ie!==P)&&(i.blendColor(ge.r,ge.g,ge.b,Ie),C.copy(ge),P=Ie),g=D,w=!1}function Tt(D,ut){D.side===le?Ct(i.CULL_FACE):st(i.CULL_FACE);let W=D.side===Ge;ut&&(W=!W),tt(W),D.blending===as&&D.transparent===!1?I(oi):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function xt(D){D!==Gd?(st(i.CULL_FACE),D!==A&&(D===qc?i.cullFace(i.BACK):D===Wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),A=D}function lt(D){D!==F&&(k&&i.lineWidth(D),F=D)}function It(D,ut,W){D?(st(i.POLYGON_OFFSET_FILL),(O!==ut||B!==W)&&(i.polygonOffset(ut,W),O=ut,B=W)):Ct(i.POLYGON_OFFSET_FILL)}function gt(D){D?st(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+X-1),et!==D&&(i.activeTexture(D),et=D)}function M(D,ut,W){W===void 0&&(et===null?W=i.TEXTURE0+X-1:W=et);let J=ot[W];J===void 0&&(J={type:void 0,texture:void 0},ot[W]=J),(J.type!==D||J.texture!==ut)&&(et!==W&&(i.activeTexture(W),et=W),i.bindTexture(D,ut||yt[D]),J.type=D,J.texture=ut)}function z(){let D=ot[et];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){$t.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),$t.copy(D))}function bt(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function qt(D,ut){let W=c.get(ut);W===void 0&&(W=new WeakMap,c.set(ut,W));let J=W.get(D);J===void 0&&(J=i.getUniformBlockIndex(ut,D.name),W.set(D,J))}function Ht(D,ut){let J=c.get(ut).get(D);l.get(ut)!==J&&(i.uniformBlockBinding(ut,J,D.__bindingPointIndex),l.set(ut,J))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,ot={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,y=null,x=null,T=null,E=null,C=new Rt(0,0,0),P=0,w=!1,b=null,A=null,F=null,O=null,B=null,$t.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Ct,bindFramebuffer:Ot,drawBuffers:Dt,useProgram:Yt,setBlending:I,setMaterial:Tt,setFlipSided:tt,setCullFace:xt,setLineWidth:lt,setPolygonOffset:It,setScissorTest:gt,activeTexture:R,bindTexture:M,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:vt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Nt,viewport:bt,reset:ce}}function Xh(i,t,e,n){let s=N_(n);switch(e){case pu:return i*t;case gu:return i*t;case _u:return i*t*2;case xu:return i*t/s.components*s.byteLength;case gc:return i*t/s.components*s.byteLength;case yu:return i*t*2/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case mu:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case xc:return i*t*4/s.components*s.byteLength;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case el:return Math.max(i,16)*Math.max(t,8)/4;case ja:case tl:return Math.max(i,8)*Math.max(t,8)/2;case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case yl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vu:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ml:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N_(i){switch(i){case Wn:case uu:return{byteLength:1,components:1};case Ys:case du:case sr:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Ei:case fc:case Hn:return{byteLength:4,components:1};case fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function O_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,M){return f?new OffscreenCanvas(R,M):no("canvas")}function _(R,M,z){let q=1,Q=gt(R);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor(q*Q.width),Mt=Math.floor(q*Q.height);u===void 0&&(u=p(Y,Mt));let ht=M?p(Y,Mt):u;return ht.width=Y,ht.height=Mt,ht.getContext("2d").drawImage(R,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Mt+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,M,z,q,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=M;if(M===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){let Mt=Q?Lo:Zt.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Mt===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(R,M){let z;return R?M===null||M===Ei||M===ms?z=i.DEPTH24_STENCIL8:M===Hn?z=i.DEPTH32F_STENCIL8:M===Ys&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===ms?z=i.DEPTH_COMPONENT24:M===Hn?z=i.DEPTH_COMPONENT32F:M===Ys&&(z=i.DEPTH_COMPONENT16),z}function T(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Tn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){let M=R.target;M.removeEventListener("dispose",E),P(M),M.isVideoTexture&&h.delete(M)}function C(R){let M=R.target;M.removeEventListener("dispose",C),b(M)}function P(R){let M=n.get(R);if(M.__webglInit===void 0)return;let z=R.source,q=d.get(z);if(q){let Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(R),Object.keys(q).length===0&&d.delete(z)}n.remove(R)}function w(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let z=R.source,q=d.get(z);delete q[M.__cacheKey],o.memory.textures--}function b(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=R.textures;for(let q=0,Q=z.length;q<Q;q++){let Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(R)}let A=0;function F(){A=0}function O(){let R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function B(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){let z=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,R,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function k(R,M){let z=n.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Z(R,M){let z=n.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function H(R,M){let z=n.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let et={[qs]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},ot={[gn]:i.NEAREST,[vf]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},pt={[Sf]:i.NEVER,[Pf]:i.ALWAYS,[Ef]:i.LESS,[Mu]:i.LEQUAL,[Tf]:i.EQUAL,[Cf]:i.GEQUAL,[Af]:i.GREATER,[Rf]:i.NOTEQUAL};function Pt(R,M){if(M.type===Hn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Tn||M.magFilter===ra||M.magFilter===pr||M.magFilter===Si||M.minFilter===Tn||M.minFilter===ra||M.minFilter===pr||M.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ot[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==pr&&M.minFilter!==Si||M.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $t(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));let q=M.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let Y=B(M);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Y].usedTimes++;let Mt=Q[R.__cacheKey];Mt!==void 0&&(Q[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(M)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return z}function $(R,M,z){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let Q=$t(R,M),Y=M.source;e.bindTexture(q,R.__webglTexture,i.TEXTURE0+z);let Mt=n.get(Y);if(Y.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let ht=Zt.getPrimaries(Zt.workingColorSpace),_t=M.colorSpace===ri?null:Zt.getPrimaries(M.colorSpace),Wt=M.colorSpace===ri||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let nt=_(M.image,!1,s.maxTextureSize);nt=It(M,nt);let vt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),Nt=y(M.internalFormat,vt,Lt,M.colorSpace,M.isVideoTexture);Pt(q,M);let bt,qt=M.mipmaps,Ht=M.isVideoTexture!==!0,ce=Mt.__version===void 0||Q===!0,D=Y.dataReady,ut=T(M,nt);if(M.isDepthTexture)Nt=x(M.format===gs,M.type),ce&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Nt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,nt.width,nt.height,0,vt,Lt,null));else if(M.isDataTexture)if(qt.length>0){Ht&&ce&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)bt=qt[W],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,vt,Lt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Nt,bt.width,bt.height,0,vt,Lt,bt.data);M.generateMipmaps=!1}else Ht?(ce&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Lt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,nt.width,nt.height,0,vt,Lt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Nt,qt[0].width,qt[0].height,nt.depth);for(let W=0,J=qt.length;W<J;W++)if(bt=qt[W],M.format!==mn)if(vt!==null)if(Ht){if(D)if(M.layerUpdates.size>0){let mt=Xh(bt.width,bt.height,M.format,M.type);for(let dt of M.layerUpdates){let kt=bt.data.subarray(dt*mt/bt.data.BYTES_PER_ELEMENT,(dt+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,dt,bt.width,bt.height,1,vt,kt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,nt.depth,vt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Nt,bt.width,bt.height,nt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,nt.depth,vt,Lt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Nt,bt.width,bt.height,nt.depth,0,vt,Lt,bt.data)}else{Ht&&ce&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)bt=qt[W],M.format!==mn?vt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,vt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Nt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,vt,Lt,bt.data):e.texImage2D(i.TEXTURE_2D,W,Nt,bt.width,bt.height,0,vt,Lt,bt.data)}else if(M.isDataArrayTexture)if(Ht){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Nt,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){let W=Xh(nt.width,nt.height,M.format,M.type);for(let J of M.layerUpdates){let mt=nt.data.subarray(J*W/nt.data.BYTES_PER_ELEMENT,(J+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,Lt,mt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(M.isData3DTexture)Ht?(ce&&e.texStorage3D(i.TEXTURE_3D,ut,Nt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(M.isFramebufferTexture){if(ce)if(Ht)e.texStorage2D(i.TEXTURE_2D,ut,Nt,nt.width,nt.height);else{let W=nt.width,J=nt.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,Nt,W,J,0,vt,Lt,null),W>>=1,J>>=1}}else if(qt.length>0){if(Ht&&ce){let W=gt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Nt,W.width,W.height)}for(let W=0,J=qt.length;W<J;W++)bt=qt[W],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Lt,bt):e.texImage2D(i.TEXTURE_2D,W,Nt,vt,Lt,bt);M.generateMipmaps=!1}else if(Ht){if(ce){let W=gt(nt);e.texStorage2D(i.TEXTURE_2D,ut,Nt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,vt,Lt,nt);g(M)&&m(q),Mt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function it(R,M,z){if(M.image.length!==6)return;let q=$t(R,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let Y=n.get(Q);if(Q.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+z);let Mt=Zt.getPrimaries(Zt.workingColorSpace),ht=M.colorSpace===ri?null:Zt.getPrimaries(M.colorSpace),_t=M.colorSpace===ri||Mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Wt&&!nt?vt[J]=_(M.image[J],!0,s.maxCubemapSize):vt[J]=nt?M.image[J].image:M.image[J],vt[J]=It(M,vt[J]);let Lt=vt[0],Nt=r.convert(M.format,M.colorSpace),bt=r.convert(M.type),qt=y(M.internalFormat,Nt,bt,M.colorSpace),Ht=M.isVideoTexture!==!0,ce=Y.__version===void 0||q===!0,D=Q.dataReady,ut=T(M,Lt);Pt(i.TEXTURE_CUBE_MAP,M);let W;if(Wt){Ht&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,Lt.width,Lt.height);for(let J=0;J<6;J++){W=vt[J].mipmaps;for(let mt=0;mt<W.length;mt++){let dt=W[mt];M.format!==mn?Nt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,dt.width,dt.height,Nt,bt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,qt,dt.width,dt.height,0,Nt,bt,dt.data)}}}else{if(W=M.mipmaps,Ht&&ce){W.length>0&&ut++;let J=gt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Nt,bt,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,vt[J].width,vt[J].height,0,Nt,bt,vt[J].data);for(let mt=0;mt<W.length;mt++){let kt=W[mt].image[J].image;Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,kt.width,kt.height,Nt,bt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,qt,kt.width,kt.height,0,Nt,bt,kt.data)}}else{Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,bt,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Nt,bt,vt[J]);for(let mt=0;mt<W.length;mt++){let dt=W[mt];Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Nt,bt,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,qt,Nt,bt,dt.image[J])}}}g(M)&&m(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function yt(R,M,z,q,Q,Y){let Mt=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),_t=y(z.internalFormat,Mt,ht,z.colorSpace),Wt=n.get(M),nt=n.get(z);if(nt.__renderTarget=M,!Wt.__hasExternalTextures){let vt=Math.max(1,M.width>>Y),Lt=Math.max(1,M.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,_t,vt,Lt,M.depth,0,Mt,ht,null):e.texImage2D(Q,Y,_t,vt,Lt,0,Mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),xt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,nt.__webglTexture,0,tt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,nt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Y=x(M.stencilBuffer,Q),Mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=tt(M);xt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,R)}else{let q=M.textures;for(let Q=0;Q<q.length;Q++){let Y=q[Q],Mt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),_t=y(Y.internalFormat,Mt,ht,Y.colorSpace),Wt=tt(M);z&&xt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,_t,M.width,M.height):xt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let Q=q.__webglTexture,Y=tt(M);if(M.depthTexture.format===ls)xt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===gs)xt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ot(R){let M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ct(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),st(M.__webglDepthbuffer[q],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(R,M,z){let q=n.get(R);M!==void 0&&yt(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ot(R)}function Yt(R){let M=R.texture,z=n.get(R),q=n.get(M);R.addEventListener("dispose",C);let Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let _t=0;_t<M.mipmaps.length;_t++)z.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else z.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)z.__webglFramebuffer[ht]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ht=0,_t=Q.length;ht<_t;ht++){let Wt=n.get(Q[ht]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&xt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){let _t=Q[ht];z.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);let Wt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),vt=y(_t.internalFormat,Wt,nt,_t.colorSpace,R.isXRRenderTarget===!0),Lt=tt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)yt(z.__webglFramebuffer[ht][_t],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else yt(z.__webglFramebuffer[ht],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,_t=Q.length;ht<_t;ht++){let Wt=Q[ht],nt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Pt(i.TEXTURE_2D,Wt),yt(z.__webglFramebuffer,R,Wt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(Wt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),Pt(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)yt(z.__webglFramebuffer[_t],R,M,i.COLOR_ATTACHMENT0,ht,_t);else yt(z.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ht,0);g(M)&&m(ht),e.unbindTexture()}R.depthBuffer&&Ot(R)}function j(R){let M=R.textures;for(let z=0,q=M.length;z<q;z++){let Q=M[z];if(g(Q)){let Y=v(R),Mt=n.get(Q).__webglTexture;e.bindTexture(Y,Mt),m(Y),e.unbindTexture()}}}let rt=[],I=[];function Tt(R){if(R.samples>0){if(xt(R)===!1){let M=R.textures,z=R.width,q=R.height,Q=i.COLOR_BUFFER_BIT,Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(R),ht=M.length>1;if(ht)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);let Wt=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,Q,i.NEAREST),l===!0&&(rt.length=0,I.length=0,rt.push(i.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(rt.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);let Wt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function tt(R){return Math.min(s.maxSamples,R.samples)}function xt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function It(R,M){let z=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==bs&&z!==ri&&(Zt.getTransfer(z)===re?(q!==mn||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Dt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=xt}function F_(i,t){function e(n,s=ri){let r,o=Zt.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.BYTE;if(n===du)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===fc)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===sr)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===mn)return i.RGBA;if(n===gu)return i.LUMINANCE;if(n===_u)return i.LUMINANCE_ALPHA;if(n===ls)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===xu)return i.RED;if(n===gc)return i.RED_INTEGER;if(n===yu)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===xc)return i.RGBA_INTEGER;if(n===Zr||n===Kr||n===Jr||n===jr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Qa||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===yl||n===vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===bl||n===Ml||n===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bl=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ie=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},k_={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:B_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hl=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=new zl,g=e.getContextAttributes(),m=null,v=null,y=[],x=[],T=new K,E=null,C=new Fe;C.viewport=new _e;let P=new Fe;P.viewport=new _e;let w=[C,P],b=new Bl,A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=y[$];return it===void 0&&(it=new Gs,y[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=y[$];return it===void 0&&(it=new Gs,y[$]=it),it.getGripSpace()},this.getHand=function($){let it=y[$];return it===void 0&&(it=new Gs,y[$]=it),it.getHandSpace()};function O($){let it=x.indexOf($.inputSource);if(it===-1)return;let yt=y[it];yt!==void 0&&(yt.update($.inputSource,$.frame,c||o),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let $=0;$<y.length;$++){let it=x[$];it!==null&&(x[$]=null,y[$].disconnect(it))}A=null,F=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new $n(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,yt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?gs:ls,yt=g.stencil?ms:Ei);let Ct={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new $n(d.textureWidth,d.textureHeight,{format:mn,type:Wn,depthTexture:new uo(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X($){for(let it=0;it<$.removed.length;it++){let yt=$.removed[it],st=x.indexOf(yt);st>=0&&(x[st]=null,y[st].disconnect(yt))}for(let it=0;it<$.added.length;it++){let yt=$.added[it],st=x.indexOf(yt);if(st===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=x.length){x.push(yt),st=Ot;break}else if(x[Ot]===null){x[Ot]=yt,st=Ot;break}if(st===-1)break}let Ct=y[st];Ct&&Ct.connect(yt)}}let k=new L,Z=new L;function H($,it,yt){k.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);let st=k.distanceTo(Z),Ct=it.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,Dt=Ct[14]/(Ct[10]-1),Yt=Ct[14]/(Ct[10]+1),j=(Ct[9]+1)/Ct[5],rt=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],Tt=(Ot[8]+1)/Ot[0],tt=Dt*I,xt=Dt*Tt,lt=st/(-I+Tt),It=lt*-I;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let gt=Dt+lt,R=Yt+lt,M=tt-It,z=xt+(st-It),q=j*Yt/R*gt,Q=rt*Yt/R*gt;$.projectionMatrix.makePerspective(M,z,q,Q,gt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let it=$.near,yt=$.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),b.near=P.near=C.near=it,b.far=P.far=C.far=yt,(A!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,F=b.far),C.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,b.layers.mask=C.layers.mask|P.layers.mask;let st=$.parent,Ct=b.cameras;et(b,st);for(let Ot=0;Ot<Ct.length;Ot++)et(Ct[Ot],st);Ct.length===2?H(b,C,P):b.projectionMatrix.copy(C.projectionMatrix),ot($,b,st)};function ot($,it,yt){yt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let pt=null;function Pt($,it){if(h=it.getViewerPose(c||o),p=it,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let st=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let Ot=0;Ot<yt.length;Ot++){let Dt=yt[Ot],Yt=null;if(f!==null)Yt=f.getViewport(Dt);else{let rt=u.getViewSubImage(d,Dt);Yt=rt.viewport,Ot===0&&(t.setRenderTargetTextures(v,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(v))}let j=w[Ot];j===void 0&&(j=new Fe,j.layers.enable(Ot),j.viewport=new _e,w[Ot]=j),j.matrix.fromArray(Dt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Dt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ot===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(j)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Ot=u.getDepthInformation(yt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let yt=0;yt<y.length;yt++){let st=x[yt],Ct=y[yt];st!==null&&Ct!==void 0&&Ct.update(st,it,c||o)}pt&&pt($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),p=null}let $t=new Au;$t.setAnimationLoop(Pt),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}},yi=new Rn,H_=new Kt;function V_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Tu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ge&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ge&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,yi.copy(x),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(yi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(p(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));let T=y.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let y=u();v.__bindingPointIndex=y;let x=i.createBuffer(),T=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],x=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,C=x.length;E<C;E++){let P=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,b=P.length;w<b;w++){let A=P[w];if(f(A,E,w,T)===!0){let F=A.__offset,O=Array.isArray(A.value)?A.value:[A.value],B=0;for(let X=0;X<O.length;X++){let k=O[X],Z=_(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,F+B,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,T){let E=v.value,C=y+"_"+x;if(T[C]===void 0)return typeof E=="number"||typeof E=="boolean"?T[C]=E:T[C]=E.clone(),!0;{let P=T[C];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[C]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function p(v){let y=v.uniforms,x=0,T=16;for(let C=0,P=y.length;C<P;C++){let w=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,A=w.length;b<A;b++){let F=w[b],O=Array.isArray(F.value)?F.value:[F.value];for(let B=0,X=O.length;B<X;B++){let k=O[B],Z=_(k),H=x%T,et=H%Z.boundary,ot=H+et;x+=et,ot!==0&&T-ot<Z.storage&&(x+=T-ot),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}let E=x%T;return E>0&&(x+=T-E),v.__size=x,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var fo=class{constructor(t={}){let{canvas:e=qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=ai,this.toneMappingExposure=1;let x=this,T=!1,E=0,C=0,P=null,w=-1,b=null,A=new _e,F=new _e,O=null,B=new Rt(0),X=0,k=e.width,Z=e.height,H=1,et=null,ot=null,pt=new _e(0,0,k,Z),Pt=new _e(0,0,k,Z),$t=!1,$=new Js,it=!1,yt=!1,st=new Kt,Ct=new Kt,Ot=new L,Dt=new _e,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function rt(){return P===null?H:1}let I=n;function Tt(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){let U="webgl2";if(I=Tt(U,S),I===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let tt,xt,lt,It,gt,R,M,z,q,Q,Y,Mt,ht,_t,Wt,nt,vt,Lt,Nt,bt,qt,Ht,ce,D;function ut(){tt=new r0(I),tt.init(),Ht=new F_(I,tt),xt=new Qg(I,tt,t,Ht),lt=new U_(I,tt),xt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),It=new l0(I),gt=new b_,R=new O_(I,tt,lt,gt,xt,Ht,It),M=new e0(x),z=new s0(x),q=new mp(I),ce=new Jg(I,q),Q=new o0(I,q,It,ce),Y=new h0(I,Q,q,It),Nt=new c0(I,xt,R),nt=new t0(gt),Mt=new v_(x,M,z,tt,xt,ce,nt),ht=new V_(x,gt),_t=new w_,Wt=new C_(tt),Lt=new Kg(x,M,z,lt,Y,f,l),vt=new L_(x,Y,xt),D=new G_(I,It,xt,lt),bt=new jg(I,tt,It),qt=new a0(I,tt,It),It.programs=Mt.programs,x.capabilities=xt,x.extensions=tt,x.properties=gt,x.renderLists=_t,x.shadowMap=vt,x.state=lt,x.info=It}ut();let W=new Hl(x,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(k,Z,!1))},this.getSize=function(S){return S.set(k,Z)},this.setSize=function(S,U,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,Z=U,e.width=Math.floor(S*H),e.height=Math.floor(U*H),V===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(k*H,Z*H).floor()},this.setDrawingBufferSize=function(S,U,V){k=S,Z=U,H=V,e.width=Math.floor(S*V),e.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(pt)},this.setViewport=function(S,U,V,G){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,V,G),lt.viewport(A.copy(pt).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Pt)},this.setScissor=function(S,U,V,G){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,U,V,G),lt.scissor(F.copy(Pt).multiplyScalar(H).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(S){lt.setScissorTest($t=S)},this.setOpaqueSort=function(S){et=S},this.setTransparentSort=function(S){ot=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,U=!0,V=!0){let G=0;if(S){let N=!1;if(P!==null){let at=P.texture.format;N=at===xc||at===_c||at===gc}if(N){let at=P.texture.type,ft=at===Wn||at===Ei||at===Ys||at===ms||at===pc||at===mc,wt=Lt.getClearColor(),St=Lt.getClearAlpha(),Ft=wt.r,Bt=wt.g,Et=wt.b;ft?(p[0]=Ft,p[1]=Bt,p[2]=Et,p[3]=St,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=Ft,_[1]=Bt,_[2]=Et,_[3]=St,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),Wt.dispose(),gt.dispose(),M.dispose(),z.dispose(),Y.dispose(),ce.dispose(),D.dispose(),Mt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Bc),W.removeEventListener("sessionend",zc),fi.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let S=It.autoReset,U=vt.enabled,V=vt.autoUpdate,G=vt.needsUpdate,N=vt.type;ut(),It.autoReset=S,vt.enabled=U,vt.autoUpdate=V,vt.needsUpdate=G,vt.type=N}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){let U=S.target;U.removeEventListener("dispose",kt),ge(U)}function ge(S){Ie(S),gt.remove(S)}function Ie(S){let U=gt.get(S).programs;U!==void 0&&(U.forEach(function(V){Mt.releaseProgram(V)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,G,N,at){U===null&&(U=Yt);let ft=N.isMesh&&N.matrixWorld.determinant()<0,wt=zd(S,U,V,G,N);lt.setMaterial(G,ft);let St=V.index,Ft=1;if(G.wireframe===!0){if(St=Q.getWireframeAttribute(V),St===void 0)return;Ft=2}let Bt=V.drawRange,Et=V.attributes.position,jt=Bt.start*Ft,he=(Bt.start+Bt.count)*Ft;at!==null&&(jt=Math.max(jt,at.start*Ft),he=Math.min(he,(at.start+at.count)*Ft)),St!==null?(jt=Math.max(jt,0),he=Math.min(he,St.count)):Et!=null&&(jt=Math.max(jt,0),he=Math.min(he,Et.count));let ue=he-jt;if(ue<0||ue===1/0)return;ce.setup(N,G,wt,V,St);let He,Qt=bt;if(St!==null&&(He=q.get(St),Qt=qt,Qt.setIndex(He)),N.isMesh)G.wireframe===!0?(lt.setLineWidth(G.wireframeLinewidth*rt()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(N.isLine){let At=G.linewidth;At===void 0&&(At=1),lt.setLineWidth(At*rt()),N.isLineSegments?Qt.setMode(I.LINES):N.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else N.isPoints?Qt.setMode(I.POINTS):N.isSprite&&Qt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let At=N._multiDrawStarts,Dn=N._multiDrawCounts,te=N._multiDrawCount,cn=St?q.get(St).bytesPerElement:1,zi=gt.get(G).currentProgram.getUniforms();for(let $e=0;$e<te;$e++)zi.setValue(I,"_gl_DrawID",$e),Qt.render(At[$e]/cn,Dn[$e])}else if(N.isInstancedMesh)Qt.renderInstances(jt,ue,N.count);else if(V.isInstancedBufferGeometry){let At=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Dn=Math.min(V.instanceCount,At);Qt.renderInstances(jt,ue,Dn)}else Qt.render(jt,ue)};function ee(S,U,V){S.transparent===!0&&S.side===le&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,fr(S,U,V),S.side=li,S.needsUpdate=!0,fr(S,U,V),S.side=le):fr(S,U,V)}this.compile=function(S,U,V=null){V===null&&(V=S),m=Wt.get(V),m.init(U),y.push(m),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),S!==V&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){let wt=at[ft];ee(wt,V,N),G.add(wt)}else ee(at,V,N),G.add(at)}),y.pop(),m=null,G},this.compileAsync=function(S,U,V=null){let G=this.compile(S,U,V);return new Promise(N=>{function at(){if(G.forEach(function(ft){gt.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){N(S);return}setTimeout(at,10)}tt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ln=null;function Ln(S){ln&&ln(S)}function Bc(){fi.stop()}function zc(){fi.start()}let fi=new Au;fi.setAnimationLoop(Ln),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(S){ln=S,W.setAnimationLoop(S),S===null?fi.stop():fi.start()},W.addEventListener("sessionstart",Bc),W.addEventListener("sessionend",zc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,P),m=Wt.get(S,y.length),m.init(U),y.push(m),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,it=nt.init(this.clippingPlanes,yt),g=_t.get(S,v.length),g.init(),v.push(g),W.enabled===!0&&W.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&sa(at,U,-1/0,x.sortObjects)}sa(S,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(et,ot),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Lt.addToRenderList(g,S),this.info.render.frame++,it===!0&&nt.beginShadows();let V=m.state.shadowsArray;vt.render(V,S,U),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,N=g.transmissive;if(m.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let ft=0,wt=at.length;ft<wt;ft++){let St=at[ft];Vc(G,N,S,St)}j&&Lt.render(S);for(let ft=0,wt=at.length;ft<wt;ft++){let St=at[ft];Hc(g,S,St,St.viewport)}}else N.length>0&&Vc(G,N,S,U),j&&Lt.render(S),Hc(g,S,U);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,U),ce.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],it===!0&&nt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function sa(S,U,V,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){G&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ct);let ft=Y.update(S),wt=S.material;wt.visible&&g.push(S,ft,wt,V,Dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){let ft=Y.update(S),wt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Dt.copy(ft.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(Ct)),Array.isArray(wt)){let St=ft.groups;for(let Ft=0,Bt=St.length;Ft<Bt;Ft++){let Et=St[Ft],jt=wt[Et.materialIndex];jt&&jt.visible&&g.push(S,ft,jt,V,Dt.z,Et)}}else wt.visible&&g.push(S,ft,wt,V,Dt.z,null)}}let at=S.children;for(let ft=0,wt=at.length;ft<wt;ft++)sa(at[ft],U,V,G)}function Hc(S,U,V,G){let N=S.opaque,at=S.transmissive,ft=S.transparent;m.setupLightsView(V),it===!0&&nt.setGlobalState(x.clippingPlanes,V),G&&lt.viewport(A.copy(G)),N.length>0&&dr(N,U,V),at.length>0&&dr(at,U,V),ft.length>0&&dr(ft,U,V),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Vc(S,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new $n(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?sr:Wn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let at=m.state.transmissionRenderTarget[G.id],ft=G.viewport||A;at.setSize(ft.z,ft.w);let wt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),j&&Lt.render(V);let St=x.toneMapping;x.toneMapping=ai;let Ft=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),it===!0&&nt.setGlobalState(x.clippingPlanes,G),dr(S,V,G),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Et=0,jt=U.length;Et<jt;Et++){let he=U[Et],ue=he.object,He=he.geometry,Qt=he.material,At=he.group;if(Qt.side===le&&ue.layers.test(G.layers)){let Dn=Qt.side;Qt.side=Ge,Qt.needsUpdate=!0,Gc(ue,V,G,He,Qt,At),Qt.side=Dn,Qt.needsUpdate=!0,Bt=!0}}Bt===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}x.setRenderTarget(wt),x.setClearColor(B,X),Ft!==void 0&&(G.viewport=Ft),x.toneMapping=St}function dr(S,U,V){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=S.length;N<at;N++){let ft=S[N],wt=ft.object,St=ft.geometry,Ft=G===null?ft.material:G,Bt=ft.group;wt.layers.test(V.layers)&&Gc(wt,U,V,St,Ft,Bt)}}function Gc(S,U,V,G,N,at){S.onBeforeRender(x,U,V,G,N,at),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,V,G,S,at),N.transparent===!0&&N.side===le&&N.forceSinglePass===!1?(N.side=Ge,N.needsUpdate=!0,x.renderBufferDirect(V,U,G,N,S,at),N.side=li,N.needsUpdate=!0,x.renderBufferDirect(V,U,G,N,S,at),N.side=le):x.renderBufferDirect(V,U,G,N,S,at),S.onAfterRender(x,U,V,G,N,at)}function fr(S,U,V){U.isScene!==!0&&(U=Yt);let G=gt.get(S),N=m.state.lights,at=m.state.shadowsArray,ft=N.state.version,wt=Mt.getParameters(S,N.state,at,U,V),St=Mt.getProgramCacheKey(wt),Ft=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?z:M).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ft===void 0&&(S.addEventListener("dispose",kt),Ft=new Map,G.programs=Ft);let Bt=Ft.get(St);if(Bt!==void 0){if(G.currentProgram===Bt&&G.lightsStateVersion===ft)return Xc(S,wt),Bt}else wt.uniforms=Mt.getUniforms(S),S.onBeforeCompile(wt,x),Bt=Mt.acquireProgram(wt,St),Ft.set(St,Bt),G.uniforms=wt.uniforms;let Et=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=nt.uniform),Xc(S,wt),G.needsLights=Vd(S),G.lightsStateVersion=ft,G.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Bt,G.uniformsList=null,Bt}function Wc(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=us.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Xc(S,U){let V=gt.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function zd(S,U,V,G,N){U.isScene!==!0&&(U=Yt),R.resetTextureUnits();let at=U.fog,ft=G.isMeshStandardMaterial?U.environment:null,wt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bs,St=(G.isMeshStandardMaterial?z:M).get(G.envMap||ft),Ft=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,he=!!V.morphAttributes.color,ue=ai;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=x.toneMapping);let He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qt=He!==void 0?He.length:0,At=gt.get(G),Dn=m.state.lights;if(it===!0&&(yt===!0||S!==b)){let Qe=S===b&&G.id===w;nt.setState(G,S,Qe)}let te=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Dn.state.version||At.outputColorSpace!==wt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==St||G.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==Ft||At.vertexTangents!==Bt||At.morphTargets!==Et||At.morphNormals!==jt||At.morphColors!==he||At.toneMapping!==ue||At.morphTargetsCount!==Qt)&&(te=!0):(te=!0,At.__version=G.version);let cn=At.currentProgram;te===!0&&(cn=fr(G,U,N));let zi=!1,$e=!1,Ps=!1,de=cn.getUniforms(),Sn=At.uniforms;if(lt.useProgram(cn.program)&&(zi=!0,$e=!0,Ps=!0),G.id!==w&&(w=G.id,$e=!0),zi||b!==S){lt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),Zf(st),Kf(st),de.setValue(I,"projectionMatrix",st)):de.setValue(I,"projectionMatrix",S.projectionMatrix),de.setValue(I,"viewMatrix",S.matrixWorldInverse);let Jn=de.map.cameraPosition;Jn!==void 0&&Jn.setValue(I,Ot.setFromMatrixPosition(S.matrixWorld)),xt.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,$e=!0,Ps=!0)}if(N.isSkinnedMesh){de.setOptional(I,N,"bindMatrix"),de.setOptional(I,N,"bindMatrixInverse");let Qe=N.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),de.setValue(I,"boneTexture",Qe.boneTexture,R))}N.isBatchedMesh&&(de.setOptional(I,N,"batchingTexture"),de.setValue(I,"batchingTexture",N._matricesTexture,R),de.setOptional(I,N,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",N._indirectTexture,R),de.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",N._colorsTexture,R));let Is=V.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Nt.update(N,V,cn),($e||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,de.setValue(I,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Sn.envMap.value=St,Sn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),$e&&(de.setValue(I,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&Hd(Sn,Ps),at&&G.fog===!0&&ht.refreshFogUniforms(Sn,at),ht.refreshMaterialUniforms(Sn,G,H,Z,m.state.transmissionRenderTarget[S.id]),us.upload(I,Wc(At),Sn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(us.upload(I,Wc(At),Sn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(I,"center",N.center),de.setValue(I,"modelViewMatrix",N.modelViewMatrix),de.setValue(I,"normalMatrix",N.normalMatrix),de.setValue(I,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Qe=G.uniformsGroups;for(let Jn=0,jn=Qe.length;Jn<jn;Jn++){let $c=Qe[Jn];D.update($c,cn),D.bind($c,cn)}}return cn}function Hd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Vd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,U,V){gt.get(S.texture).__webglTexture=U,gt.get(S.depthTexture).__webglTexture=V;let G=gt.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let V=gt.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,V=0){P=S,E=U,C=V;let G=!0,N=null,at=!1,ft=!1;if(S){let St=gt.get(S);if(St.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(St.__hasExternalTextures)R.rebindTextures(S,gt.get(S.texture).__webglTexture,gt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Et=S.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&gt.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}let Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ft=!0);let Bt=gt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?N=Bt[U][V]:N=Bt[U],at=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?N=gt.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[V]:N=Bt,A.copy(S.viewport),F.copy(S.scissor),O=S.scissorTest}else A.copy(pt).multiplyScalar(H).floor(),F.copy(Pt).multiplyScalar(H).floor(),O=$t;if(lt.bindFramebuffer(I.FRAMEBUFFER,N)&&G&&lt.drawBuffers(S,N),lt.viewport(A),lt.scissor(F),lt.setScissorTest(O),at){let St=gt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,V)}else if(ft){let St=gt.get(S.texture),Ft=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.__webglTexture,V||0,Ft)}w=-1},this.readRenderTargetPixels=function(S,U,V,G,N,at,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){lt.bindFramebuffer(I.FRAMEBUFFER,wt);try{let St=S.texture,Ft=St.format,Bt=St.type;if(!xt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&V>=0&&V<=S.height-N&&I.readPixels(U,V,G,N,Ht.convert(Ft),Ht.convert(Bt),at)}finally{let St=P!==null?gt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(S,U,V,G,N,at,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){let St=S.texture,Ft=St.format,Bt=St.type;if(!xt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-G&&V>=0&&V<=S.height-N){lt.bindFramebuffer(I.FRAMEBUFFER,wt);let Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(U,V,G,N,Ht.convert(Ft),Ht.convert(Bt),0);let jt=P!==null?gt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,jt);let he=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Yf(I,he,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Et),I.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,V=0){S.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let G=Math.pow(2,-V),N=Math.floor(S.image.width*G),at=Math.floor(S.image.height*G),ft=U!==null?U.x:0,wt=U!==null?U.y:0;R.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,ft,wt,N,at),lt.unbindTexture()},this.copyTextureToTexture=function(S,U,V=null,G=null,N=0){S.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let at,ft,wt,St,Ft,Bt,Et,jt,he,ue=S.isCompressedTexture?S.mipmaps[N]:S.image;V!==null?(at=V.max.x-V.min.x,ft=V.max.y-V.min.y,wt=V.isBox3?V.max.z-V.min.z:1,St=V.min.x,Ft=V.min.y,Bt=V.isBox3?V.min.z:0):(at=ue.width,ft=ue.height,wt=ue.depth||1,St=0,Ft=0,Bt=0),G!==null?(Et=G.x,jt=G.y,he=G.z):(Et=0,jt=0,he=0);let He=Ht.convert(U.format),Qt=Ht.convert(U.type),At;U.isData3DTexture?(R.setTexture3D(U,0),At=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),At=I.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Dn=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=I.getParameter(I.UNPACK_SKIP_PIXELS),zi=I.getParameter(I.UNPACK_SKIP_ROWS),$e=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,St),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Bt);let Ps=S.isDataArrayTexture||S.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Sn=gt.get(S),Is=gt.get(U),Qe=gt.get(Sn.__renderTarget),Jn=gt.get(Is.__renderTarget);lt.bindFramebuffer(I.READ_FRAMEBUFFER,Qe.__webglFramebuffer),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let jn=0;jn<wt;jn++)Ps&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(S).__webglTexture,N,Bt+jn),S.isDepthTexture?(de&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(U).__webglTexture,N,he+jn),I.blitFramebuffer(St,Ft,at,ft,Et,jt,at,ft,I.DEPTH_BUFFER_BIT,I.NEAREST)):de?I.copyTexSubImage3D(At,N,Et,jt,he+jn,St,Ft,at,ft):I.copyTexSubImage2D(At,N,Et,jt,he+jn,St,Ft,at,ft);lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else de?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(At,N,Et,jt,he,at,ft,wt,He,Qt,ue.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(At,N,Et,jt,he,at,ft,wt,He,ue.data):I.texSubImage3D(At,N,Et,jt,he,at,ft,wt,He,Qt,ue):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Et,jt,at,ft,He,Qt,ue.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Et,jt,ue.width,ue.height,He,ue.data):I.texSubImage2D(I.TEXTURE_2D,N,Et,jt,at,ft,He,Qt,ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,Dn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,zi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),N===0&&U.generateMipmaps&&I.generateMipmap(At),lt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,V=null,G=null,N=0){return S.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,V,G,N)},this.initRenderTarget=function(S){gt.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),lt.unbindTexture()},this.resetState=function(){E=0,C=0,P=null,lt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var po=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mo=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ne=new L,go=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ke=class extends Cn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},es,Os=new L,ns=new L,is=new L,ss=new K,Fs=new K,Lu=new Kt,Nr=new L,ks=new L,Or=new L,$h=new K,Da=new K,qh=new K,We=class extends Se{constructor(t=new ke){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new Xt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vl(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new go(n,3,0,!1)),es.setAttribute("uv",new go(n,2,3,!1))}this.geometry=es,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Lu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fr(Nr.set(-.5,-.5,0),is,o,ns,s,r),Fr(ks.set(.5,-.5,0),is,o,ns,s,r),Fr(Or.set(.5,.5,0),is,o,ns,s,r),$h.set(0,0),Da.set(1,0),qh.set(1,1);let a=t.ray.intersectTriangle(Nr,ks,Or,!1,Os);if(a===null&&(Fr(ks.set(-.5,.5,0),is,o,ns,s,r),Da.set(0,1),a=t.ray.intersectTriangle(Nr,Or,ks,!1,Os),a===null))return;let l=t.ray.origin.distanceTo(Os);l<t.near||l>t.far||e.push({distance:l,point:Os.clone(),uv:zn.getInterpolation(Os,Nr,ks,Or,$h,Da,qh,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fr(i,t,e,n,s,r){ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*ss.x-s*ss.y,Fs.y=s*ss.x+r*ss.y):Fs.copy(ss),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Lu)}var se=class extends Cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_o=new L,xo=new L,Yh=new Kt,Bs=new ci,kr=new Ai,Ua=new L,Zh=new L,Je=class extends Se{constructor(t=new Xt,e=new se){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_o.fromBufferAttribute(e,s-1),xo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_o.distanceTo(xo);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Yh.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),v=h.getX(_+1),y=Br(this,t,Bs,l,m,v);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=Br(this,t,Bs,l,_,g);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=Br(this,t,Bs,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=Br(this,t,Bs,l,p-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Br(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(_o.fromBufferAttribute(o,s),xo.fromBufferAttribute(o,r),e.distanceSqToSegment(_o,xo,Ua,Zh)>n)return;Ua.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ua);if(!(l<t.near||l>t.far))return{distance:l,point:Zh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Kh=new L,Jh=new L,oe=class extends Je{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Kh.fromBufferAttribute(e,s),Jh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kh.distanceTo(Jh);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends Cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jh=new Kt,Gl=new ci,zr=new Ai,Hr=new L,xs=class extends Se{constructor(t=new Xt,e=new Ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;jh.copy(s).invert(),Gl.copy(t.ray).applyMatrix4(jh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);Hr.fromBufferAttribute(u,g),Qh(Hr,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Hr.fromBufferAttribute(u,p),Qh(Hr,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qh(i,t,e,n,s,r,o){let a=Gl.distanceSqToPoint(i);if(a<e){let l=new L;Gl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Be=class extends Ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new K:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,l=new Kt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends en{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new K){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wl=class extends js{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Vr=new L,Na=new Mc,Oa=new Mc,Fa=new Mc,Xl=class extends en{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Vr.subVectors(s[0],s[1]).add(s[0]),c=Vr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Na.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Oa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),Fa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Oa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Na.calc(l),Oa.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function W_(i,t){let e=1-i;return e*e*t}function X_(i,t){return 2*(1-i)*i*t}function $_(i,t){return i*i*t}function Ws(i,t,e,n){return W_(i,t)+X_(i,e)+$_(i,n)}function q_(i,t){let e=1-i;return e*e*e*t}function Y_(i,t){let e=1-i;return 3*e*e*i*t}function Z_(i,t){return 3*(1-i)*i*i*t}function K_(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return q_(i,t)+Y_(i,e)+Z_(i,n)+K_(i,s)}var yo=class extends en{constructor(t=new K,e=new K,n=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$l=class extends en{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y),Xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends en{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ql=class extends en{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends en{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yl=class extends en{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y),Ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(tu(a,l.x,c.x,h.x,u.x),tu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new K().fromArray(s))}return this}},Zl=Object.freeze({__proto__:null,ArcCurve:Wl,CatmullRomCurve3:Xl,CubicBezierCurve:yo,CubicBezierCurve3:$l,EllipseCurve:js,LineCurve:vo,LineCurve3:ql,QuadraticBezierCurve:bo,QuadraticBezierCurve3:Yl,SplineCurve:Mo}),Kl=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Zl[s.type]().fromJSON(s))}return this}},hi=class extends Kl{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vo(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new bo(this.currentPoint.clone(),new K(t,e),new K(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new yo(this.currentPoint.clone(),new K(t,e),new K(n,s),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Mo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new js(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Qs=class i extends Xt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],g=n/2,m=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function v(){let x=new L,T=new L,E=0,C=(e-t)/n;for(let P=0;P<=r;P++){let w=[],b=P/r,A=b*(e-t)+t;for(let F=0;F<=s;F++){let O=F/s,B=O*l+a,X=Math.sin(B),k=Math.cos(B);T.x=A*X,T.y=-b*n+g,T.z=A*k,u.push(T.x,T.y,T.z),x.set(X,C,k).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-b),w.push(p++)}_.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let b=_[w][P],A=_[w+1][P],F=_[w+1][P+1],O=_[w][P+1];(t>0||w!==0)&&(h.push(b,A,O),E+=3),(e>0||w!==r-1)&&(h.push(A,F,O),E+=3)}c.addGroup(m,E,0),m+=E}function y(x){let T=p,E=new K,C=new L,P=0,w=x===!0?t:e,b=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let A=p;for(let F=0;F<=s;F++){let B=F/s*l+a,X=Math.cos(B),k=Math.sin(B);C.x=w*k,C.y=g*b,C.z=w*X,u.push(C.x,C.y,C.z),d.push(0,b,0),E.x=X*.5+.5,E.y=k*.5*b+.5,f.push(E.x,E.y),p++}for(let F=0;F<s;F++){let O=T+F,B=A+F;x===!0?h.push(B,B+1,O):h.push(B+1,B,O),P+=3}c.addGroup(m,P,x===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Gr=new L,Wr=new L,ka=new L,Xr=new zn,ye=class extends Xt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(cs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=Xr;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Xr.getNormal(ka),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let y=(v+1)%3,x=u[v],T=u[y],E=Xr[h[v]],C=Xr[h[y]],P=`${x}_${T}`,w=`${T}_${x}`;w in d&&d[w]?(ka.dot(d[w].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(C.x,C.y,C.z)),d[w]=null):P in d||(d[P]={index0:c[v],index1:c[y],normal:ka.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:g}=d[p];Gr.fromBufferAttribute(a,_),Wr.fromBufferAttribute(a,g),f.push(Gr.x,Gr.y,Gr.z),f.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new Jt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},je=class extends hi{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new hi().fromJSON(s))}return this}},J_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Du(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=nx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return tr(r,o,e,a,l,f,0),o}};function Du(i,t,e,n,s){let r,o;if(s===fx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=eu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=eu(r,i[r],i[r+1],o);return o&&Uo(o,o.next)&&(nr(o),o=o.next),o}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Uo(e,e.next)||pe(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ax(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Q_(i,n,s,r):j_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tx(Ci(i),t,e),tr(i,t,e,n,s,r,2)):o===2&&ex(i,t,e,n,s,r):tr(Ci(i),t,e,n,s,r,1);break}}}function j_(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&os(s,a,r,l,o,c,p.x,p.y)&&pe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Q_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(pe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Jl(f,p,t,e,n),v=Jl(_,g,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&os(a,h,l,u,c,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&os(a,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&os(a,h,l,u,c,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&os(a,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Uo(s,r)&&Uu(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function ex(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hx(o,a)){let l=Nu(o,a);o=Ci(o,o.next),l=Ci(l,l.next),tr(o,t,e,n,s,r,0),tr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Du(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(cx(c));for(s.sort(ix),r=0;r<s.length;r++)e=sx(s[r],e);return e}function ix(i,t){return i.x-t.x}function sx(i,t){let e=rx(i,t);if(!e)return t;let n=Nu(e,i);return Ci(n,n.next),Ci(e,e.next)}function rx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&os(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ox(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function ox(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function ax(i,t,e,n){let s=i;do s.z===0&&(s.z=Jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lx(s)}function lx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function os(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ux(i,t)&&(er(i,t)&&er(t,i)&&dx(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Uo(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Uo(i,t){return i.x===t.x&&i.y===t.y}function Uu(i,t,e,n){let s=qr(pe(i,t,e)),r=qr(pe(i,t,n)),o=qr(pe(e,n,i)),a=qr(pe(e,n,t));return!!(s!==r&&o!==a||s===0&&$r(i,e,t)||r===0&&$r(i,n,t)||o===0&&$r(e,i,n)||a===0&&$r(e,t,n))}function $r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function ux(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function dx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nu(i,t){let e=new jl(i.i,i.x,i.y),n=new jl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eu(i,t,e,n){let s=new jl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $s=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nu(t),iu(n,t);let o=t.length;e.forEach(nu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,iu(n,e[l]);let a=J_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function nu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function iu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var nn=class i extends Xt{constructor(t=new je([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:px,y,x=!1,T,E,C,P;m&&(y=m.getSpacedPoints(h),x=!0,d=!1,T=m.computeFrenetFrames(h,!1),E=new L,C=new L,P=new L),d||(g=0,f=0,p=0,_=0);let w=a.extractPoints(c),b=w.shape,A=w.holes;if(!$s.isClockWise(b)){b=b.reverse();for(let j=0,rt=A.length;j<rt;j++){let I=A[j];$s.isClockWise(I)&&(A[j]=I.reverse())}}let O=$s.triangulateShape(b,A),B=b;for(let j=0,rt=A.length;j<rt;j++){let I=A[j];b=b.concat(I)}function X(j,rt,I){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,I)}let k=b.length,Z=O.length;function H(j,rt,I){let Tt,tt,xt,lt=j.x-rt.x,It=j.y-rt.y,gt=I.x-j.x,R=I.y-j.y,M=lt*lt+It*It,z=lt*R-It*gt;if(Math.abs(z)>Number.EPSILON){let q=Math.sqrt(M),Q=Math.sqrt(gt*gt+R*R),Y=rt.x-It/q,Mt=rt.y+lt/q,ht=I.x-R/Q,_t=I.y+gt/Q,Wt=((ht-Y)*R-(_t-Mt)*gt)/(lt*R-It*gt);Tt=Y+lt*Wt-j.x,tt=Mt+It*Wt-j.y;let nt=Tt*Tt+tt*tt;if(nt<=2)return new K(Tt,tt);xt=Math.sqrt(nt/2)}else{let q=!1;lt>Number.EPSILON?gt>Number.EPSILON&&(q=!0):lt<-Number.EPSILON?gt<-Number.EPSILON&&(q=!0):Math.sign(It)===Math.sign(R)&&(q=!0),q?(Tt=-It,tt=lt,xt=Math.sqrt(M)):(Tt=lt,tt=It,xt=Math.sqrt(M/2))}return new K(Tt/xt,tt/xt)}let et=[];for(let j=0,rt=B.length,I=rt-1,Tt=j+1;j<rt;j++,I++,Tt++)I===rt&&(I=0),Tt===rt&&(Tt=0),et[j]=H(B[j],B[I],B[Tt]);let ot=[],pt,Pt=et.concat();for(let j=0,rt=A.length;j<rt;j++){let I=A[j];pt=[];for(let Tt=0,tt=I.length,xt=tt-1,lt=Tt+1;Tt<tt;Tt++,xt++,lt++)xt===tt&&(xt=0),lt===tt&&(lt=0),pt[Tt]=H(I[Tt],I[xt],I[lt]);ot.push(pt),Pt=Pt.concat(pt)}for(let j=0;j<g;j++){let rt=j/g,I=f*Math.cos(rt*Math.PI/2),Tt=p*Math.sin(rt*Math.PI/2)+_;for(let tt=0,xt=B.length;tt<xt;tt++){let lt=X(B[tt],et[tt],Tt);st(lt.x,lt.y,-I)}for(let tt=0,xt=A.length;tt<xt;tt++){let lt=A[tt];pt=ot[tt];for(let It=0,gt=lt.length;It<gt;It++){let R=X(lt[It],pt[It],Tt);st(R.x,R.y,-I)}}}let $t=p+_;for(let j=0;j<k;j++){let rt=d?X(b[j],Pt[j],$t):b[j];x?(C.copy(T.normals[0]).multiplyScalar(rt.x),E.copy(T.binormals[0]).multiplyScalar(rt.y),P.copy(y[0]).add(C).add(E),st(P.x,P.y,P.z)):st(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<k;rt++){let I=d?X(b[rt],Pt[rt],$t):b[rt];x?(C.copy(T.normals[j]).multiplyScalar(I.x),E.copy(T.binormals[j]).multiplyScalar(I.y),P.copy(y[j]).add(C).add(E),st(P.x,P.y,P.z)):st(I.x,I.y,u/h*j)}for(let j=g-1;j>=0;j--){let rt=j/g,I=f*Math.cos(rt*Math.PI/2),Tt=p*Math.sin(rt*Math.PI/2)+_;for(let tt=0,xt=B.length;tt<xt;tt++){let lt=X(B[tt],et[tt],Tt);st(lt.x,lt.y,u+I)}for(let tt=0,xt=A.length;tt<xt;tt++){let lt=A[tt];pt=ot[tt];for(let It=0,gt=lt.length;It<gt;It++){let R=X(lt[It],pt[It],Tt);x?st(R.x,R.y+y[h-1].y,y[h-1].x+I):st(R.x,R.y,u+I)}}}$(),it();function $(){let j=s.length/3;if(d){let rt=0,I=k*rt;for(let Tt=0;Tt<Z;Tt++){let tt=O[Tt];Ct(tt[2]+I,tt[1]+I,tt[0]+I)}rt=h+g*2,I=k*rt;for(let Tt=0;Tt<Z;Tt++){let tt=O[Tt];Ct(tt[0]+I,tt[1]+I,tt[2]+I)}}else{for(let rt=0;rt<Z;rt++){let I=O[rt];Ct(I[2],I[1],I[0])}for(let rt=0;rt<Z;rt++){let I=O[rt];Ct(I[0]+k*h,I[1]+k*h,I[2]+k*h)}}n.addGroup(j,s.length/3-j,0)}function it(){let j=s.length/3,rt=0;yt(B,rt),rt+=B.length;for(let I=0,Tt=A.length;I<Tt;I++){let tt=A[I];yt(tt,rt),rt+=tt.length}n.addGroup(j,s.length/3-j,1)}function yt(j,rt){let I=j.length;for(;--I>=0;){let Tt=I,tt=I-1;tt<0&&(tt=j.length-1);for(let xt=0,lt=h+g*2;xt<lt;xt++){let It=k*xt,gt=k*(xt+1),R=rt+Tt+It,M=rt+tt+It,z=rt+tt+gt,q=rt+Tt+gt;Ot(R,M,z,q)}}}function st(j,rt,I){l.push(j),l.push(rt),l.push(I)}function Ct(j,rt,I){Dt(j),Dt(rt),Dt(I);let Tt=s.length/3,tt=v.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);Yt(tt[0]),Yt(tt[1]),Yt(tt[2])}function Ot(j,rt,I,Tt){Dt(j),Dt(rt),Dt(Tt),Dt(rt),Dt(I),Dt(Tt);let tt=s.length/3,xt=v.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Yt(xt[0]),Yt(xt[1]),Yt(xt[3]),Yt(xt[1]),Yt(xt[2]),Yt(xt[3])}function Dt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Yt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zl[s.type]().fromJSON(s)),new i(n,t.options)}},px={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new K(r,o),new K(a,l),new K(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-u),new K(d,1-p),new K(_,1-m)]:[new K(a,1-l),new K(h,1-u),new K(f,1-p),new K(g,1-m)]}};function mx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ys=class i extends Xt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new L,p=new K;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<s;_++){let g=_*(n+1);for(let m=0;m<n;m++){let v=m+g,y=v,x=v+n+1,T=v+n+2,E=v+1;a.push(y,x,E),a.push(x,T,E)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var wo=class i extends Xt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let v=[],y=m/n,x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let E=T/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(E+x,1-y),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let y=h[m][v+1],x=h[m][v],T=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&f.push(y,x,E),(m!==n-1||l<Math.PI)&&f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var me=class extends Cn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Yr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ql=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,a=2*e-n;break;case jc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=t,l=2*n-e;break;case jc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+v*o[c+T]+y*o[l+T]+x*o[u+T];return r}},tc=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ec=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case Sl:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return Sl;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&gx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Sl;var Pi=class extends xn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=to;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends xn{};nc.prototype.ValueTypeName="color";var ic=class extends xn{};ic.prototype.ValueTypeName="number";var sc=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},So=class extends xn{InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}};So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends xn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=to;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends xn{};rc.prototype.ValueTypeName="vector";var oc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},_x=new oc,ac=class{constructor(t){this.manager=t!==void 0?t:_x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Eo=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ba=new Kt,su=new L,ru=new L,lc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var cc=class extends lc{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},To=class extends Eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ao=class extends Eo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var wc="\\[\\]\\.:\\/",xx=new RegExp("["+wc+"]","g"),Sc="[^"+wc+"]",yx="[^"+wc.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",Sc),bx=/(WCOD+)?/.source.replace("WCOD",yx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),Sx=new RegExp("^"+vx+bx+Mx+wx+"$"),Ex=["material","materials","bones","map"],hc=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){let e=Sx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=hc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var My=new Float32Array(1);var ou=new Kt,Ro=class{constructor(t,e,n=0,s=1/0){this.ray=new ci(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(au),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uc(t[s],this,n,e);return n.sort(au),n}};function au(i,t){return i.distance-t.distance}function uc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)uc(r[o],t,e,!0)}}var ir=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Co=class extends oe{constructor(t=10,e=10,n=4473924,s=8947848){n=new Rt(n),s=new Rt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let _=d===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new Xt;h.setAttribute("position",new Jt(l,3)),h.setAttribute("color",new Jt(c,3));let u=new se({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Po=class extends Xn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);var Ou={type:"change"},Tc={type:"start"},ku={type:"end"},No=new ci,Fu=new fn,Tx=Math.cos(70*wu.DEG2RAD),Ae=new L,Xe=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ec=1e-6,Oo=class extends Po{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new _n,this._lastTargetPosition=new L,this._quat=new _n().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ir,this._sphericalDelta=new ir,this._scale=1,this._panOffset=new L,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new L,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rx.bind(this),this._onPointerDown=Ax.bind(this),this._onPointerUp=Cx.bind(this),this._onContextMenu=Ox.bind(this),this._onMouseWheel=Lx.bind(this),this._onKeyDown=Dx.bind(this),this._onTouchStart=Ux.bind(this),this._onTouchMove=Nx.bind(this),this._onMouseDown=Px.bind(this),this._onMouseMove=Ix.bind(this),this._interceptControlDown=Fx.bind(this),this._interceptControlUp=kx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ou),this.update(),this.state=ae.NONE}update(t=null){let e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xe:n>Math.PI&&(n-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ae.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(No.origin.copy(this.object.position),No.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(No.direction))<Tx?this.object.lookAt(this.target):(Fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),No.intersectPlane(Fu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ec||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ec||this._lastTargetPosition.distanceToSquared(this.target)>Ec?(this.dispatchEvent(Ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new K,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ax(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Rx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Cx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ku),this.state=ae.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Px(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Tc)}function Ix(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(Tc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ku))}function Dx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ux(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Tc)}function Nx(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function Ox(i){this.enabled!==!1&&i.preventDefault()}function Fx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fo=class extends Se{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new K(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},ws=new L,Bu=new Kt,zu=new Kt,Hu=new L,Vu=new L,ko=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Bu.copy(_.matrixWorldInverse),zu.multiplyMatrices(_.projectionMatrix,Bu),h(p,p,_),f(p)},this.setSize=function(p,_){n=p,s=_,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,g=p.children.length;_<g;_++)c(p.children[_])}function h(p,_,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){ws.setFromMatrixPosition(p.matrixWorld),ws.applyMatrix4(zu);let m=ws.z>=-1&&ws.z<=1&&p.layers.test(g.layers)===!0,v=p.element;v.style.display=m===!0?"":"none",m===!0&&(p.onBeforeRender(e,_,g),v.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(ws.x*r+r)+"px,"+(-ws.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),p.onAfterRender(e,_,g));let y={distanceToCameraSquared:u(g,p)};a.objects.set(p,y)}for(let m=0,v=p.children.length;m<v;m++)h(p.children[m],_,g)}function u(p,_){return Hu.setFromMatrixPosition(p.matrixWorld),Vu.setFromMatrixPosition(_.matrixWorld),Hu.distanceToSquared(Vu)}function d(p){let _=[];return p.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(p){let _=d(p).sort(function(m,v){if(m.renderOrder!==v.renderOrder)return v.renderOrder-m.renderOrder;let y=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(v).distanceToCameraSquared;return y-x}),g=_.length;for(let m=0,v=_.length;m<v;m++)_[m].element.style.zIndex=g-m}}};var we=class{constructor(t){this.view=t,this.group=new ie,this.on=!0}get id(){return"feature"}get label(){return this.id}get title(){return""}available(){return!1}toolbar(){return[]}build(t){}update(t){}tick(t,e){}reset(){}dispose(){}onTap(t,e){return!1}onLongPress(t,e){return!1}get plan(){return this.view.plan}get settings(){return this.view.plan.settings}get states(){return this.view.getStates()||{}}};function yn(i,{cls:t="",interactive:e=!1}={}){let n=document.createElement("div");return n.className="card3d "+t,n.innerHTML=i,n.style.pointerEvents=e?"auto":"none",new Fo(n)}var Gt=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function Zn(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,i),s.addColorStop(.35,"rgba(255,255,255,.35)"),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128),new Be(e)}var sn=(i,t,e)=>Math.max(t,Math.min(e,i));var Gu=i=>Math.max(0,Math.min(1,i)),Bx={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.45},cloudy:{cloud:.85},rainy:{rain:.55,cloud:.9},pouring:{rain:1,cloud:1},snowy:{snow:.7,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:.9},hail:{rain:.8,snow:.3,cloud:1},lightning:{lightning:!0,cloud:.95},"lightning-rainy":{lightning:!0,rain:.8,cloud:1},fog:{fog:.8,cloud:.75},windy:{cloud:.3,wind:1},"windy-variant":{cloud:.7,wind:1},exceptional:{cloud:.6}},zx={"km/h":1,"m/s":3.6,mph:1.609,kn:1.852,"ft/s":1.097,"mm/s":.0036};function Hx(i,t="km/h"){let e=Number(i);return Number.isFinite(e)?e*(zx[String(t).toLowerCase()]??1):0}function Wu(i,t={},e=null){let n=Bx[i]||{},s={rain:0,snow:0,fog:0,cloud:0,lightning:!1,windKmh:0,...n};return t.cloud_coverage!=null&&Number.isFinite(Number(t.cloud_coverage))&&(s.cloud=Gu(Number(t.cloud_coverage)/100)),s.windKmh=Hx(t.wind_speed,t.wind_speed_unit),!s.windKmh&&n.wind&&(s.windKmh=35),s.windAngle=Gu(s.windKmh/60)*35,s.windBearing=Number(t.wind_bearing)||0,s.night=i==="clear-night"||e?.state==="below_horizon",s.sunElevation=Number(e?.attributes?.elevation),s.sunAzimuth=Number(e?.attributes?.azimuth),s}function Xu(i){return{sunny:"Sonnig","clear-night":"Klar",partlycloudy:"Teils bew\xF6lkt",cloudy:"Bew\xF6lkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee","snowy-rainy":"Schneeregen",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",fog:"Nebel",windy:"Windig","windy-variant":"Windig, bew\xF6lkt",exceptional:"Au\xDFergew\xF6hnlich"}[i]||i}function Ss(i,t,e=0){let n=(e+i)*Math.PI/180,s=t*Math.PI/180;return{x:Math.sin(n)*Math.cos(s),y:Math.sin(s),z:-Math.cos(n)*Math.cos(s)}}function In(i,{title:t,obj:e,fields:n,extra:s,note:r}){i.closeOverlay();let o=document.createElement("div");o.className="overlay",o.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,94%);max-height:84%;overflow:auto",i.shadowRoot.querySelector(".wrap").append(o),i._overlay=o;let a=!1,l=0,c=f=>f.split(".").reduce((p,_)=>p?.[_],e),h=(f,p)=>{let _=f.split("."),g=_.pop();_.reduce((m,v)=>m[v]??={},e)[g]=p},u=()=>{clearTimeout(l),l=setTimeout(()=>{i.rebuild3D(),i.draw2D()},250)},d=()=>{let f=Object.keys(i.getStates()||{}).sort();o.innerHTML=`<h4 style="margin:0 0 6px">${Gt(t)}</h4>
      <datalist id="set-ents">${f.map(p=>`<option value="${Gt(p)}">`).join("")}</datalist>
      ${r?`<div style="opacity:.7;font-size:12px;margin-bottom:6px">${r}</div>`:""}
      ${n.map(p=>{let _=c(p.k),g=`data-k="${p.k}" data-t="${p.t||"text"}"`;return p.t==="checkbox"?`<label style="display:flex;gap:6px;align-items:center"><input type="checkbox" ${g} ${_?"checked":""} style="width:auto">${Gt(p.l)}</label>`:p.t==="select"?`<label>${Gt(p.l)}</label><select ${g}>${p.o.map(m=>{let[v,y]=Array.isArray(m)?m:[m,m];return`<option value="${Gt(v)}" ${v===(_??"")?"selected":""}>${Gt(y)}</option>`}).join("")}</select>`:`<label>${Gt(p.l)}</label><input ${g} ${p.t==="entity"?'list="set-ents"':""} ${p.t==="number"?`type="number" step="${p.s||1}"`:""} value="${Gt(_??"")}" placeholder="${Gt(p.p||"")}">`}).join("")}
      <div class="extra" style="margin-top:8px"></div>
      <div style="display:flex;margin-top:10px"><span style="flex:1"></span><button id="set-close" class="on">Fertig</button></div>`,o.querySelectorAll("[data-k]").forEach(p=>{p.onchange=()=>{a||(i.pushUndo(),a=!0);let _=p.dataset.t,g=p.value.trim();_==="checkbox"?g=p.checked:_==="number"?g=g===""?null:+g:g===""&&(g=null),h(p.dataset.k,g),u()}}),o.querySelector("#set-close").onclick=()=>i.closeOverlay(),s?.(o.querySelector(".extra"),d,()=>{a||(i.pushUndo(),a=!0),u()})};d()}var $u={rain:!0,snow:!0,lightning:!0,fog:!1,clouds:!0,sun:!0};function Vx(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");for(let e=0;e<14;e++){let n=40+Math.random()*176,s=50+Math.random()*40,r=22+Math.random()*30,o=t.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,256,128)}return new Be(i)}function Gx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");return t.fillStyle="#e6ecff",t.beginPath(),t.arc(64,64,40,0,Math.PI*2),t.fill(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(84,56,36,0,Math.PI*2),t.fill(),new Be(i)}var Bo=class extends we{get id(){return"weather"}get label(){return"\u2601 Wetter"}get title(){return"Wetter drau\xDFen: Regen, Schnee, Gewitter, Wolken, Sonne und Mond"}get settingsLabel(){return"\u2601 Wetter"}cfg(){return{...$u,...this.settings.weather||{}}}openSettings(){let t=this.settings.weather={...$u,...this.settings.weather||{}},e=Object.keys(this.states).filter(n=>n.startsWith("weather."));In(this.view,{title:"\u2601 Wetter drau\xDFen",obj:t,note:"Die Wetter-Entit\xE4t steuert Regen, Schnee, Gewitter, Nebel und Wolken; Sonne und Mond kommen von sun.sun.",fields:[{k:"entity",l:"Wetter-Entit\xE4t",t:"select",o:[["","automatisch"],...e]},{k:"rain",l:"Regen",t:"checkbox"},{k:"snow",l:"Schnee",t:"checkbox"},{k:"lightning",l:"Gewitter und Blitze",t:"checkbox"},{k:"fog",l:"Nebel",t:"checkbox"},{k:"clouds",l:"Wolken und Abdunkeln",t:"checkbox"},{k:"sun",l:"Sonne und Mond",t:"checkbox"}]})}entity(){let t=this.states,e=this.cfg().entity;return e&&t[e]?e:Object.keys(t).find(n=>n.startsWith("weather."))||null}available(){return!!this.entity()}build(){let t=this.view,e=t.extent()||[0,0,10,10],n=t.cfg.quality==="tablet"?.3:1;this.center=new L((e[0]+e[2])/2,0,(e[1]+e[3])/2),this.box={x0:e[0]-14,x1:e[2]+14,z0:e[1]-14,z1:e[3]+14,top:26};let s=this.box.x1-this.box.x0,r=this.box.z1-this.box.z0,o=(h,u)=>h+Math.random()*(u-h);this.rainN=Math.round(2400*n),this.rainPos=new Float32Array(this.rainN*6),this.rainHead=new Float32Array(this.rainN*3),this.rainSpeed=new Float32Array(this.rainN);for(let h=0;h<this.rainN;h++)this.rainHead.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.rainSpeed[h]=o(16,24);let a=new Xt;a.setAttribute("position",new Pe(this.rainPos,3).setUsage(yc)),a.setDrawRange(0,0),this.rain=new oe(a,new se({color:10275071,transparent:!0,opacity:.5,depthWrite:!1})),this.rain.frustumCulled=!1,this.snowN=Math.round(1800*n),this.snowPos=new Float32Array(this.snowN*3),this.snowPhase=new Float32Array(this.snowN);for(let h=0;h<this.snowN;h++)this.snowPos.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.snowPhase[h]=o(0,6.28);let l=new Xt;l.setAttribute("position",new Pe(this.snowPos,3).setUsage(yc)),l.setDrawRange(0,0),this.snow=new xs(l,new Ri({size:.2,color:16777215,map:Zn(),transparent:!0,depthWrite:!1,opacity:.9})),this.snow.frustumCulled=!1,this.bolt=new Je(new Xt().setFromPoints(Array.from({length:9},()=>new L)),new se({color:15397631})),this.bolt.visible=!1,this.bolt.frustumCulled=!1,this.sunSprite=new We(new ke({map:Zn("rgba(255,244,200,1)"),color:16771496,transparent:!0,depthWrite:!1,blending:Ze,fog:!1})),this.sunSprite.scale.setScalar(16),this.moonSprite=new We(new ke({map:Gx(),transparent:!0,depthWrite:!1,fog:!1})),this.moonSprite.scale.setScalar(6),this.sunSprite.visible=this.moonSprite.visible=!1;let c=Vx();this.clouds=Array.from({length:9},()=>{let h=new We(new ke({map:c,transparent:!0,depthWrite:!1,opacity:0,fog:!1}));return h.scale.set(o(26,40),o(10,16),1),h.position.set(o(this.box.x0-10,this.box.x1+10),o(24,36),o(this.box.z0-10,this.box.z1+10)),h.visible=!1,h}),this.group.add(this.rain,this.snow,this.bolt,this.sunSprite,this.moonSprite,...this.clouds),this.base={amb:t.ambient.intensity,dl:t.sunLight.intensity,bg:t.scene.background.clone(),fogNear:t.scene.fog.near,fogFar:t.scene.fog.far,dlPos:t.sunLight.position.clone(),dlColor:t.sunLight.color.clone()},this.flash=0,this.nextStrike=4,this.wx=0,this.wz=0,this.w=null,this.lit={amb:this.base.amb,dl:this.base.dl}}update(t){let e=this.entity();if(!e||!this.base)return;let n=t[e],s=this.cfg(),r=this.plan.site?.north??this.settings.north??0,o=this.w=Wu(n.state,n.attributes||{},t["sun.sun"]||null),a=this.view;this.rain.geometry.setDrawRange(0,s.rain?Math.round(this.rainN*o.rain)*2:0),this.snow.geometry.setDrawRange(0,s.snow?Math.round(this.snowN*o.snow):0);let l=Math.tan(o.windAngle*Math.PI/180),c=Ss(o.windBearing+180,0,r);this.wx=c.x*l,this.wz=c.z*l;let h=!o.night,u=Number.isFinite(o.sunElevation)?o.sunElevation:h?40:-20,d=Number.isFinite(o.sunAzimuth)?o.sunAzimuth:180,f=62,p=(g,m)=>g.position.set(this.center.x+m.x*f,Math.max(4,m.y*f),this.center.z+m.z*f);this.sunSprite.visible=s.sun&&h&&u>-2,this.sunSprite.visible&&p(this.sunSprite,Ss(d,Math.max(u,6),r)),this.sunSprite.material.opacity=1-o.cloud*.75,this.moonSprite.visible=s.sun&&o.night,this.moonSprite.visible&&p(this.moonSprite,Ss(d+180,sn(-u+10,14,60),r)),this.moonSprite.material.opacity=1-o.cloud*.8,this.clouds.forEach((g,m)=>{let v=s.clouds&&m<Math.ceil(this.clouds.length*o.cloud);g.visible=v,g.material.opacity=v?.2+.35*o.cloud:0});let _=h?Ss(d,Math.max(u,12),r):Ss(d+180,35,r);a.sunLight.position.set(this.center.x+_.x*30,_.y*30,this.center.z+_.z*30),a.sunLight.color.set(h?16773592:8361430),this.target={amb:this.base.amb*(h?1:.75)*(1-.25*o.cloud),dl:this.base.dl*(h?1:.4)*(1-.7*o.cloud),fog:s.fog?o.fog:0,tint:a.theme==="neon"&&h?.55*(1-o.cloud*.6):0},a.setChip("weather",`${o.lightning?"\u26C8":o.rain?"\u{1F327}":o.snow?"\u2744":o.fog?"\u{1F32B}":h?o.cloud>.6?"\u2601":o.cloud>.25?"\u26C5":"\u2600":"\u{1F319}"} ${Xu(n.state)}${n.attributes?.temperature!=null?` \xB7 ${n.attributes.temperature}\xB0`:""}${o.windKmh>=5?` \xB7 ${Math.round(o.windKmh)} km/h`:""}`)}tick(t){if(!this.w||!this.target)return;let e=this.view,n=this.w,s=this.cfg(),r=Math.min(1,t*1.5);if(this.lit.amb+=(this.target.amb-this.lit.amb)*r,this.lit.dl+=(this.target.dl-this.lit.dl)*r,s.lightning&&n.lightning&&(this.nextStrike-=t,this.nextStrike<=0)){this.flash=1,this.nextStrike=3+Math.random()*7;let h=this.box.x0+Math.random()*(this.box.x1-this.box.x0),u=this.box.z0+Math.random()*(this.box.z1-this.box.z0),d=this.bolt.geometry.attributes.position;for(let f=0;f<9;f++)d.setXYZ(f,h+(Math.random()-.5)*3*(f>0&&f<8?1:0),28-f*3.5,u+(Math.random()-.5)*3*(f>0&&f<8?1:0));d.needsUpdate=!0,this.bolt.visible=!0}this.flash=Math.max(0,this.flash-t*4),this.flash<.3&&(this.bolt.visible=!1),e.ambient.intensity=this.lit.amb+this.flash*1.4,e.sunLight.intensity=this.lit.dl+this.flash*1.8,e.scene.background.copy(this.base.bg).lerp(new Rt(1714765),this.target.tint).lerp(new Rt(14543103),this.flash*.5),this.target.fog>0?(e.scene.fog.near=this.base.fogNear*(1-.85*this.target.fog),e.scene.fog.far=this.base.fogFar*(1-.7*this.target.fog)):(e.scene.fog.near=this.base.fogNear,e.scene.fog.far=this.base.fogFar);let a=Math.round(this.rainN*n.rain);if(s.rain&&a){let u=this.wx,d=this.wz;for(let f=0;f<a;f++){let p=this.rainHead[f*3],_=this.rainHead[f*3+1],g=this.rainHead[f*3+2],m=this.rainSpeed[f]*t;_-=m,p+=u*m,g+=d*m,_<0&&(_=this.box.top,p=this.box.x0+Math.random()*(this.box.x1-this.box.x0),g=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.rainHead.set([p,_,g],f*3),this.rainPos.set([p,_,g,p-u*.7,_+.7,g-d*.7],f*6)}this.rain.geometry.attributes.position.needsUpdate=!0}let l=Math.round(this.snowN*n.snow);if(s.snow&&l){let h=performance.now()/1e3;for(let u=0;u<l;u++){let d=this.snowPos[u*3],f=this.snowPos[u*3+1],p=this.snowPos[u*3+2];f-=1.3*t,d+=(Math.sin(h*.7+this.snowPhase[u])*.5+this.wx*4)*t,p+=(Math.cos(h*.5+this.snowPhase[u])*.5+this.wz*4)*t,f<0&&(f=this.box.top,d=this.box.x0+Math.random()*(this.box.x1-this.box.x0),p=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.snowPos[u*3]=d,this.snowPos[u*3+1]=f,this.snowPos[u*3+2]=p}this.snow.geometry.attributes.position.needsUpdate=!0}let c=(.4+n.windKmh*.05)*t;this.clouds.forEach(h=>{h.visible&&(h.position.x+=c,h.position.x>this.box.x1+20&&(h.position.x=this.box.x0-20))})}reset(){let t=this.view;this.base&&(t.ambient.intensity=this.base.amb,t.sunLight.intensity=this.base.dl,t.sunLight.position.copy(this.base.dlPos),t.sunLight.color.copy(this.base.dlColor),t.scene.background.copy(this.base.bg),t.scene.fog.near=this.base.fogNear,t.scene.fog.far=this.base.fogFar,t.setChip("weather",""))}dispose(){this.reset(),this.base=null,this.w=null,this.target=null}};function Wx(i,t){if(t==null)return!1;let e=String(t).trim().toLowerCase();if(e==="")return!1;if(e==="*")return!0;let n=String(i??"").toLowerCase();return e.includes("*")?new RegExp("^"+e.split("*").map(r=>r.replace(/[.+?^${}()|[\]\\]/g,"\\$&")).join(".*")+"$").test(n):n===e||n.includes(e)}function zo(i,t,e){for(let n of i||[]){let s=t[n.entity||e];if(!s)continue;let r=n.attr?s.attributes?.[n.attr]:s.state;if(Wx(r,n.match))return n}return null}var Xx=[["netflix","#e50914"],["youtube","#ff1a1a"],["prime","#00a8e1"],["amazon","#00a8e1"],["disney","#1b46c9"],["spotify","#1db954"],["plex","#e5a00d"],["kodi","#17b2e7"],["max","#5822b4"],["hbo","#5822b4"],["apple","#9aa0a6"],["twitch","#9146ff"],["tagesschau","#0a3a78"],["zdf","#fa7d19"],["ard","#0a56b8"],["rtl","#e30613"],["sky","#0072c9"],["dazn","#d6ff00"],["paramount","#0064ff"]];function Ac(i){let t=String(i||"").toLowerCase();return t&&Xx.find(([e])=>t.includes(e))?.[1]||null}var Rc=i=>typeof i=="string"&&/^camera\.[\w]+$/.test(i);var $x=["off","unavailable","unknown","standby","idle"],Ho=class extends we{get id(){return"screens"}build(t){this.items=(t.screens||[]).map(e=>({a:e,ctx:e.canvas.getContext("2d"),sig:""})),this.images=new Map,this.camTimer=0,this.bust=Date.now()}imageFor(t){if(!t)return null;let e=this.images.get(t);if(!e){let n=new Image;/^https?:\/\//i.test(t)&&!t.startsWith(location.origin)&&(n.crossOrigin="anonymous"),e={img:n,ok:!1},n.onload=()=>{e.ok=!0,this.items.forEach(s=>s.sig=""),this.update(this.states)},n.onerror=()=>{e.failed=!0},n.src=t,this.images.set(t,e)}return e.ok?e.img:null}model(t,e){let n=t.a.f,s=n.screen||{},r=s.entity||n.entity||null,o=r?e[r]:null,a=o?!$x.includes(o.state):!1,l=zo(s.rules,e,r),c=l?.bg||s.bg||"dark";if(l?.image){let h=l.image,u=Rc(h);if(u){let d=e[h]?.attributes?.entity_picture;h=d?`${d}${d.includes("?")?"&":"?"}_=${this.bust}`:null}return{mode:"rule",bg:c,src:h,cam:u,key:`rule|${c}|${h}`}}if(o&&a){let h=o.attributes?.entity_picture,u=o.attributes?.app_name||o.attributes?.source||o.attributes?.media_title||"";if(o.state==="playing"&&h)return{mode:"art",bg:c,src:h,tint:Ac(u),key:`art|${h}|${u}`};let d=Ac(u)||"#2d6cff";return{mode:"app",bg:c,tint:d,text:u,key:`app|${d}|${u}|${o.state}`}}return a?{mode:"on",bg:c,key:"on"}:{mode:"off",bg:c,key:"off"}}update(t){if(this.items)for(let e of this.items){let n=this.model(e,t);n.key!==e.sig&&(e.sig=n.key,this.draw(e,n))}}tick(t){!this.items?.length||(this.camTimer+=t,this.camTimer<5)||(this.camTimer=0,!this.items.some(n=>(n.a.f.screen?.rules||[]).some(s=>Rc(s.image))))||(this.bust=Date.now(),this.images.forEach((n,s)=>{s.includes("_=")&&this.images.delete(s)}),this.items.forEach(n=>{n.sig.startsWith("rule|")&&n.sig.includes("_=")&&(n.sig="")}),this.update(this.states))}draw(t,e){let{ctx:n}=t,s=t.a.canvas.width,r=t.a.canvas.height,o=e.bg!=="white";n.clearRect(0,0,s,r);let a=c=>{n.fillStyle=c,n.fillRect(0,0,s,r)},l=(c,h=.12,u=!1)=>{let d=c.naturalWidth||c.width,f=c.naturalHeight||c.height,p=s*(1-h*2),_=r*(1-h*2),g=u?Math.max(s/d,r/f):Math.min(p/d,_/f),m=d*g,v=f*g;n.drawImage(c,(s-m)/2,(r-v)/2,m,v)};if(e.mode==="off"){a("#04060b");let c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,"rgba(255,255,255,.07)"),c.addColorStop(.4,"rgba(255,255,255,0)"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="on"){let c=n.createLinearGradient(0,0,0,r);c.addColorStop(0,"#2a3f8f"),c.addColorStop(1,"#0b1330"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="app"){a("#05070d");let c=n.createRadialGradient(s/2,r/2,10,s/2,r/2,s*.6);c.addColorStop(0,e.tint),c.addColorStop(1,"#05070d"),n.fillStyle=c,n.fillRect(0,0,s,r),e.text&&(n.fillStyle="#fff",n.font=`bold ${Math.round(r*.16)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(e.text,s/2,r/2,s*.86))}else if(e.mode==="art"){a("#05070d"),e.tint&&(n.fillStyle=e.tint,n.globalAlpha=.28,n.fillRect(0,0,s,r),n.globalAlpha=1);let c=this.imageFor(e.src);c&&l(c,.06)}else if(e.mode==="rule"){a(o?"#05070d":"#f4f6fb");let c=this.imageFor(e.src);c&&l(c,e.cam?0:.14,e.cam)}n.strokeStyle="rgba(255,255,255,.12)",n.lineWidth=3,n.strokeRect(1.5,1.5,s-3,r-3),t.a.tex.needsUpdate=!0}dispose(){this.items=null}};var on=()=>Math.random().toString(36).slice(2,9),rr=(i,t=.25)=>Math.round(i/t)*t,ze=i=>(i||"").split(".")[0],Vo=i=>JSON.parse(JSON.stringify(i)),ve=i=>i*Math.PI/180;function rn(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}function ui(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function Es(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?((i[0]-t[0])*n+(i[1]-t[1])*s)/r:0;o=Math.max(0,Math.min(1,o));let a=[t[0]+o*n,t[1]+o*s];return{d:Math.hypot(i[0]-a[0],i[1]-a[1]),q:a,t:o}}function Go(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return Math.abs(t/2)}function vn(i){let t=0,e=0,n=0;for(let u=0;u<i.length;u++){let[d,f]=i[u],[p,_]=i[(u+1)%i.length],g=d*_-p*f;t+=g,e+=(d+p)*g,n+=(f+_)*g}let[s,r,o,a]=ui(i);if(Math.abs(t)<1e-9)return[(s+o)/2,(r+a)/2];let l=[e/(3*t),n/(3*t)];if(rn(l,i))return l;let c=null,h=1/0;for(let u=s;u<=o;u+=.1)for(let d=r;d<=a;d+=.1){let f=Math.hypot(u-l[0],d-l[1]);f<h&&rn([u,d],i)&&(h=f,c=[u,d])}return c||l}function Cc(i,t,e){let n=ve(i.rot||0),s=Math.cos(n),r=Math.sin(n);return[i.x+t*s-e*r,i.z+t*r+e*s]}function Wo(i){let t=(i.w||.5)/2,e=(i.d||.5)/2;return[[-t,-e],[t,-e],[t,e],[-t,e]].map(([n,s])=>Cc(i,n,s))}function qx(i){let t=[...new Map(i.map(r=>[r.join(","),r])).values()].sort((r,o)=>r[0]-o[0]||r[1]-o[1]);if(t.length<3)return t;let e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}let s=[];for(let r of[...t].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function qu(i){let t=qx(i),e=null;for(let _=0;_<t.length;_++){let g=t[_],m=t[(_+1)%t.length],v=Math.atan2(m[1]-g[1],m[0]-g[0]),y=Math.cos(-v),x=Math.sin(-v),T=1/0,E=-1/0,C=1/0,P=-1/0;for(let b of t){let A=b[0]*y-b[1]*x,F=b[0]*x+b[1]*y;T=Math.min(T,A),E=Math.max(E,A),C=Math.min(C,F),P=Math.max(P,F)}let w=(E-T)*(P-C);(!e||w<e.area-1e-9)&&(e={area:w,ang:v,x0:T,x1:E,z0:C,z1:P})}let{ang:n,x0:s,x1:r,z0:o,z1:a}=e,l=(s+r)/2,c=(o+a)/2,h=Math.cos(n),u=Math.sin(n),d=r-s,f=a-o,p=n;return f>d&&([d,f]=[f,d],p+=Math.PI/2),{cx:l*h-c*u,cz:l*u+c*h,len:d,wid:f,ang:p}}function Yu(i=0){let t=i*Math.PI/180;return{north:[Math.sin(t),-Math.cos(t)],south:[-Math.sin(t),Math.cos(t)],east:[Math.cos(t),Math.sin(t)],west:[-Math.cos(t),-Math.sin(t)]}}var Zu="playing",Xo=class extends we{get id(){return"sound"}get label(){return"\u{1F50A} Sound"}get title(){return"Wiedergabe: Karten, Klangringe, Multiroom; langes Dr\xFCcken \xF6ffnet das Men\xFC"}get usesHolo(){return!0}available(){return!!this.players?.length}build(t){this.players=[];let e=new Set,n=(r,o,a,l,c)=>{!r||ze(r)!=="media_player"||e.has(r)||(e.add(r),this.players.push({entity:r,x:o,y:a,z:l,floor:c}))};t.devices.forEach(r=>n(r.entity,r.x,r.y,r.z,r.floor)),t.furniture.forEach(r=>n(r.f.entity,r.x,r.top+.05,r.z,r.floor));let s=r=>new Ue({color:r,transparent:!0,opacity:0,side:le,depthWrite:!1});this.players.forEach(r=>{r.root=new ie,r.root.position.set(r.x,r.y,r.z),r.rings=[0,1,2].map(()=>{let o=new Ut(new ys(.94,1,56),s(16722902));return o.rotation.x=-Math.PI/2,o.visible=!1,r.root.add(o),o}),r.card=yn(this.cardHtml(r),{cls:"np",interactive:!0}),r.card.position.set(0,.55,0),r.card.visible=!1,r.card.element.addEventListener("click",o=>this.cardClick(r,o)),r.card.element.addEventListener("change",o=>this.cardClick(r,o)),r.root.add(r.card),this.group.add(r.root)}),this.lines=new oe(new Xt,new se({color:16722902,transparent:!0,opacity:.7})),this.lines.frustumCulled=!1,this.group.add(this.lines),this.phase=0}cardHtml(t){return`<div class="np"><img alt=""><div><div class="t"><b data-t></b></div><div class="sub" data-s></div>
      <div class="ctl"><button data-a="prev">\u23EE</button><button data-a="play">\u23EF</button><button data-a="next">\u23ED</button>
      <input type="range" min="0" max="100" data-a="vol" title="Lautst\xE4rke"></div></div></div>`}cardClick(t,e){let n=e.target.closest?.("[data-a]");if(!n)return;e.stopPropagation();let s={prev:"media_previous_track",play:"media_play_pause",next:"media_next_track"}[n.dataset.a];s&&e.type==="click"&&this.view.hass.callService("media_player",s,{entity_id:t.entity}),n.dataset.a==="vol"&&e.type==="change"&&this.view.hass.callService("media_player","volume_set",{entity_id:t.entity,volume_level:+n.value/100})}update(t){if(!this.players)return;let e=this.view.holo!==!1,n=0,s=[];this.players.forEach(a=>{let l=t[a.entity];a.playing=l?.state===Zu,a.vol=sn(Number(l?.attributes?.volume_level??.35),0,1),a.members=l?.attributes?.group_members||[],a.rings.forEach(h=>{h.visible=a.playing});let c=e&&a.playing&&n<3;if(a.card.visible=c,c&&n++,l&&c){let h=l.attributes||{},u=[l.state,h.media_title,h.media_artist,h.entity_picture,h.friendly_name].join("|");if(u!==a.sig){a.sig=u;let f=a.card.element;f.querySelector("[data-t]").textContent=h.media_title||h.friendly_name||a.entity,f.querySelector("[data-s]").textContent=[h.media_artist,h.friendly_name].filter(Boolean).join(" \xB7 ");let p=f.querySelector("img");p.style.display=h.entity_picture?"":"none",h.entity_picture&&(p.src=h.entity_picture)}let d=a.card.element.querySelector("[data-a=vol]");d&&document.activeElement!==d&&(d.value=Math.round(a.vol*100))}a.playing&&s.push(a)});let r=[],o=new Set;this.players.forEach(a=>{a.members.forEach(l=>{let c=this.players.find(u=>u.entity===l);if(!c||c===a||a.floor!==c.floor)return;let h=[a.entity,c.entity].sort().join("|");o.has(h)||(o.add(h),r.push(new L(a.x,a.y,a.z),new L(c.x,c.y,c.z)))})}),this.lines.geometry.setFromPoints(r),this.lines.visible=r.length>0,this.menu&&this.refreshMenu()}tick(t){this.players&&(this.phase=(this.phase+t*.55)%1,this.players.forEach(e=>{if(!e.playing)return;let n=.35+e.vol*1.25;e.rings.forEach((s,r)=>{let o=(this.phase+r/3)%1;s.scale.setScalar(.2+o*n),s.material.opacity=(1-o)*(.35+.5*e.vol)})}))}onLongPress(t){return!t?.entity||ze(t.entity)!=="media_player"?!1:(this.openMenu(t.entity),!0)}closeMenu(){this.menu?.box.remove(),this.menu=null}openMenu(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(460px,94%);max-height:70%;overflow:auto",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e,this.menu={entity:t,box:e,mode:"main",stack:[],list:null,sig:""};let n=e.remove.bind(e);e.remove=()=>{n(),this.menu?.box===e&&(this.menu=null)},this.refreshMenu(!0)}refreshMenu(t=!1){let e=this.menu;if(!e)return;let n=this.states[e.entity];if(!n)return;let s=n.attributes||{},r=[e.mode,n.state,s.media_title,s.media_artist,s.entity_picture,s.source,s.is_volume_muted,e.list?.title].join("|");if(!t&&r===e.sig)return;e.sig=r;let o=(l,c={})=>this.view.hass.callService("media_player",l,{entity_id:e.entity,...c});if(e.mode==="browse")return this.renderBrowse();let a=s.source_list||[];e.box.innerHTML=`
      <div style="display:flex;gap:10px;align-items:center">
        ${s.entity_picture?`<img src="${Gt(s.entity_picture)}" style="width:64px;height:64px;border-radius:8px;object-fit:cover">`:""}
        <div style="flex:1;min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Gt(s.media_title||s.friendly_name||e.entity)}</b>
        <span style="opacity:.7">${Gt([s.media_artist,s.friendly_name,n.state].filter(Boolean).join(" \xB7 "))}</span></div>
        <button data-a="x" title="Schlie\xDFen">\u2715</button></div>
      <div style="display:flex;gap:6px;align-items:center;margin:10px 0">
        <button data-a="prev">\u23EE</button><button data-a="play" class="on">${n.state===Zu?"\u23F8":"\u25B6"}</button><button data-a="next">\u23ED</button>
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
        <span>${n.can_play?`<button data-play="${s}" title="Abspielen">\u25B6</button>`:""}${n.can_expand?"\u203A":""}</span></div>`).join("")||(t.err?"":"<div style='opacity:.7'>Leer</div>")}</div>`,t.box.onclick=n=>{let s=n.target.closest("[data-a]")?.dataset.a;if(s==="x")return this.view.closeOverlay();if(s==="back"){let l=t.stack.pop();return l?this.browse(l.id,l.type):(t.mode="main",this.refreshMenu(!0))}let r=n.target.closest("[data-play]")?.dataset.play,o=r??n.target.closest("[data-i]")?.dataset.i;if(o==null)return;let a=e.children[+o];if(r!=null||a.can_play&&!a.can_expand)return this.view.hass.callService("media_player","play_media",{entity_id:t.entity,media_content_id:a.media_content_id,media_content_type:a.media_content_type}),t.mode="main",this.refreshMenu(!0);a.can_expand&&(t.stack.push({id:e.media_content_id,type:e.media_content_type}),this.browse(a.media_content_id,a.media_content_type))},t.box.onchange=null}reset(){this.closeMenu()}dispose(){this.closeMenu(),this.players=null}};var Ku=i=>Number.isFinite(Number(i))?Number(i):null;function Ju(i,t){let e=(s,r=!1)=>{let o=s?t[s]:null;if(!o)return null;let a=Ku(o.state);if(a==null)return null;let l=String(o.attributes?.unit_of_measurement||"W").toLowerCase();return l==="kw"?a*=1e3:l==="mw"&&(a*=1e6),r?-a:a},n=i.battery_soc&&t[i.battery_soc]?Ku(t[i.battery_soc].state):null;return{solar:e(i.solar),grid:e(i.grid,!!i.grid_invert),battery:e(i.battery,!!i.battery_invert),consumption:e(i.consumption),wallbox:e(i.wallbox),soc:n}}function ju(i){let t=Math.max(0,i.solar??0),e=i.battery??0,n=i.grid??(i.consumption!=null?i.consumption-t-e:0),s=i.consumption!=null?Math.max(0,i.consumption):Math.max(0,t+n+e),r=Math.max(0,-e),o=Math.max(0,e),a=Math.min(t,s),l=t-a,c=Math.min(l,r),h=Math.max(0,Math.min(l-c,Math.max(0,-n)||l-c)),u=Math.max(0,n),d=Math.max(0,r-c),f=o,p=s>0?Math.max(0,Math.min(1,1-u/s)):1;return{S:t,H:s,g:n,b:e,s2h:a,s2b:c,s2g:h,g2h:u,g2b:d,b2h:f,autarky:p,import:u,export:Math.max(0,-n)}}function Ui(i){return Math.abs(i)>=1e3?`${(i/1e3).toFixed(2).replace(".",",")} kW`:`${Math.round(i)} W`}function Qu(i){return Math.max(.25,Math.min(2.6,.25+Math.log10(1+Math.abs(i))*.65))}function td(i){let t={};for(let e of i?.energy_sources||[]){let n=e.stat_rate||e.power?.[0]?.stat_rate||e.power_config?.stat_rate||null;n&&(e.type==="solar"&&!t.solar&&(t.solar=n),e.type==="grid"&&!t.grid&&(t.grid=n),e.type==="battery"&&!t.battery&&(t.battery=n))}return t}function ed(i){let t={};for(let[e,n]of Object.entries(i||{}))t[e]=(n||[]).map(s=>{let r=s.lu??s.lc;return{t:r!=null?r*1e3:Date.parse(s.last_updated||s.last_changed||0),s:s.s??s.state,a:s.a??s.attributes??null}}).filter(s=>Number.isFinite(s.t)).sort((s,r)=>s.t-r.t);return t}function nd(i){return(i||[]).map(t=>({t:t.t,v:Number(t.s)})).filter(t=>Number.isFinite(t.v))}function id(i,t,e){let n=0;for(let s=0;s<i.length;s++){let r=Math.max(i[s].t,t),o=Math.min(s+1<i.length?i[s+1].t:e,e);o>r&&(n+=Math.max(0,i[s].v)*((o-r)/36e5))}return n/1e3}function sd(i,t,e,n){let s=new Array(n).fill(null),r=0,o=null;for(let a=0;a<n;a++){let l=t+(e-t)*(a+.5)/n;for(;r<i.length&&i[r].t<=l;)o=i[r].v,r++;s[a]=o}return s}async function $o(i,t,e,n,{attrs:s=!1}={}){let r=[...new Set(t.filter(Boolean))];if(!r.length)return{};let o=await i.callWS({type:"history/history_during_period",start_time:e.toISOString(),end_time:n.toISOString(),entity_ids:r,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!s,no_attributes:!s});return ed(o)}var Ni={solar:16765286,import:4891647,export:8116367,discharge:65437,charge:16722902,wallbox:1697535},bn=(i,t,e)=>new L(i,t,e),qo=class extends we{get id(){return"energy"}get label(){return"\u26A1 Energie"}get title(){return"Energiefluss: Kabel mit Leistungspunkten, leuchtende Solarmodule, Hologramm"}get usesHolo(){return!0}get settingsLabel(){return"\u26A1 Energie"}cfg(){return{hide_below_w:5,device_cards:!0,...this.settings.energy||{}}}effective(){let t=this.cfg();return{...t,solar:t.solar||this.pvEntity||null,consumption:t.consumption||this.meterPower||null}}available(){let t=this.effective();return!!(t.solar||t.grid||t.battery||t.consumption)}build(t){this.anchors=t,this.pvEntity=t.pv.find(g=>g.entity)?.entity||null,this.meterPower=t.furniture.find(g=>g.f.type==="meter"&&g.f.power)?.f.power||null;let e=t.pv.some(g=>g.entity),n=t.pv.filter(g=>!e||g.entity),s=g=>g.pos||g.mesh.position,r=g=>t.furniture.find(m=>m.f.type===g),o=g=>g?bn(g.x,(g.y+g.top)/2,g.z):null,a=t.rooms.filter(g=>g.elev<=.3),l=a.length?a:t.rooms,c=r("meter"),h=r("grid_point")||c,u=l.length?bn(l.reduce((g,m)=>g+m.x,0)/l.length,1.2,l.reduce((g,m)=>g+m.z,0)/l.length):bn(0,1.2,0);this.nodes={house:o(c)||u};let d=this.view.extent()||[0,0,10,10];if(this.nodes.grid=o(h)||bn(d[0]-4,1,(d[1]+d[3])/2),n.length){let g=n.reduce((m,v)=>m.add(s(v)),bn(0,0,0)).multiplyScalar(1/n.length);this.nodes.solar=g.add(bn(0,.25,0))}else this.nodes.solar=o(r("inverter"));this.nodes.battery=o(r("battery")),this.nodes.wallbox=o(r("wallbox"));let f=Math.max(...t.rooms.map(g=>g.elev+2.8),...n.map(g=>s(g).y),3);this.nodes.holo=bn(this.nodes.house.x,f+1.4,this.nodes.house.z),this.edges=[];let p=Zn(),_=(g,m,v)=>{if(!m||!v)return;let y=this.route(m,v),x=new Je(new Xt().setFromPoints(y.pts),new se({color:3820152,transparent:!0,opacity:.45})),T=Math.max(6,Math.round(y.len*1.1)),E=new xs(new Xt().setAttribute("position",new Pe(new Float32Array(T*3),3)),new Ri({size:.34,map:p,color:Ni.solar,transparent:!0,depthWrite:!1,blending:Ze}));E.frustumCulled=!1,E.visible=!1,this.group.add(x,E),this.edges.push({key:g,path:y,line:x,dots:E,n:T,u:0,dir:1,w:0})};_("solar",this.nodes.solar,this.nodes.house),_("grid",this.nodes.grid,this.nodes.house),_("battery",this.nodes.battery,this.nodes.house),_("wallbox",this.nodes.house,this.nodes.wallbox),this.pvTex=(()=>{let g=document.createElement("canvas");g.width=4,g.height=64;let m=g.getContext("2d"),v=m.createLinearGradient(0,0,0,64);v.addColorStop(0,"#102040"),v.addColorStop(.5,"#9fd0ff"),v.addColorStop(1,"#102040"),m.fillStyle=v,m.fillRect(0,0,4,64);let y=new Be(g);return y.wrapT=qs,y})(),this.pvMats=[...new Set(n.map(g=>g.mat))],this.pvMats.forEach(g=>{g.emissiveMap=this.pvTex,g.emissive.set(16777215),g.emissiveIntensity=.12,g.needsUpdate=!0}),this.pvWp=n.reduce((g,m)=>g+(m.wp||400),0)||400,this.level=0,this.holo=yn('<div class="en"><b>\u26A1 Energie</b><div data-rows></div><canvas data-spark width="220" height="40"></canvas></div>',{cls:"holo"}),this.holo.position.copy(this.nodes.holo),this.group.add(this.holo),this.holo.visible=!1,this.devCards=t.furniture.filter(g=>g.f.power).map(g=>{let m=yn("<span>\u26A1 <b>\u2013 W</b></span>",{cls:"pw"});return m.position.set(g.x,g.top+.45,g.z),m.visible=!1,this.group.add(m),{a:g,c:m,sig:""}}),this._html=null,this.curveTimer=0,this.loadCurve()}route(t,e){let n=Math.max(t.y,e.y)+.35,s=[t.clone(),bn(t.x,n,t.z),bn(e.x,n,t.z),bn(e.x,n,e.z),e.clone()],r=s.filter((a,l)=>l===0||a.distanceTo(s[l-1])>.001),o=[0];for(let a=1;a<r.length;a++)o.push(o[a-1]+r[a].distanceTo(r[a-1]));return{pts:r,cum:o,len:o[o.length-1]||1}}at(t,e,n){let{pts:s,cum:r}=t,o=1;for(;o<r.length-1&&r[o]<e;)o++;let a=(e-r[o-1])/Math.max(1e-6,r[o]-r[o-1]);return n.copy(s[o-1]).lerp(s[o],sn(a,0,1))}async loadCurve(){let t=this.effective();if(!(!t.solar||!this.view.hass?.callWS))try{let e=new Date,n=new Date(e);n.setHours(0,0,0,0);let s=await $o(this.view.hass,[t.solar],n,e),r=nd(s[t.solar]).map(o=>({...o,v:this.unitW(t.solar,o.v)}));this.curve=sd(r,n.getTime(),n.getTime()+864e5,48),this.nowBucket=Math.min(47,Math.floor((e-n)/864e5*48)),this.yieldKwh=id(r,n.getTime(),e.getTime()),this.drawCurve(),this.update(this.states)}catch{}}unitW(t,e){return String(this.states[t]?.attributes?.unit_of_measurement||"W").toLowerCase()==="kw"?e*1e3:e}drawCurve(){let t=this.holo?.element.querySelector("[data-spark]");if(!t||!this.curve)return;let e=t.getContext("2d"),n=t.width,s=t.height;e.clearRect(0,0,n,s);let r=Math.max(1,...this.curve.map(a=>a||0)),o=n/this.curve.length;this.curve.forEach((a,l)=>{if(a==null)return;let c=Math.max(1,a/r*(s-4));e.fillStyle=l===this.nowBucket?"#ffd166":"rgba(255,209,102,.55)",e.fillRect(l*o,s-c,o-1,c)})}update(t){if(!this.edges)return;let e=this.effective(),n=this.p=Ju(e,t),s=this.f=ju(n),r=(u,d,f,p)=>{let _=this.edges.find(g=>g.key===u);_&&(_.w=d,_.dir=f,_.dots.visible=d>=10,_.dots.material.color.setHex(p),_.line.material.color.setHex(d>=10?p:3820152),_.line.material.opacity=d>=10?.75:.35)};r("solar",s.S,1,Ni.solar),r("grid",Math.abs(s.g),s.g>=0?1:-1,s.g>=0?Ni.import:Ni.export),r("battery",Math.abs(s.b),s.b>=0?1:-1,s.b>=0?Ni.discharge:Ni.charge),r("wallbox",Math.max(0,n.wallbox??0),1,Ni.wallbox),this.level=sn(s.S/this.pvWp,0,1);let o=this.view.holo!==!1,a=(u,d,f,p="")=>`<div class="r"><span>${u} ${d}</span><b>${f}</b>${p?`<span class="sub">${p}</span>`:""}</div>`,l=[];(n.solar!=null||this.pvEntity)&&l.push(a("\u2600","PV",Ui(s.S),this.yieldKwh!=null?`heute ${this.yieldKwh.toFixed(1).replace(".",",")} kWh`:"")),l.push(a("\u{1F3E0}","Haus",Ui(s.H))),(n.grid!=null||n.consumption!=null)&&l.push(a("\u{1F50C}","Netz",Ui(Math.abs(s.g)),s.g>10?"Bezug":s.g<-10?"Einspeisung":"")),(n.battery!=null||n.soc!=null)&&l.push(a("\u{1F50B}",n.soc!=null?`${Math.round(n.soc)} %`:"Akku",Ui(Math.abs(s.b)),s.b>10?"entl\xE4dt":s.b<-10?"l\xE4dt":"")),n.wallbox!=null&&n.wallbox>10&&l.push(a("\u{1F697}","Wallbox",Ui(n.wallbox))),s.H>0&&l.push(a("\u{1F331}","Autarkie",`${Math.round(s.autarky*100)} %`));for(let[u,d,f]of[["gas","\u{1F525}","Gas"],["water","\u{1F4A7}","Wasser"]]){let p=e[u]?t[e[u]]:null;p&&p.state!=="unavailable"&&l.push(a(d,f,`${Gt(p.state)} ${Gt(p.attributes?.unit_of_measurement||"")}`))}let c=l.join(""),h=this.holo.element;c!==this._html&&(this._html=c,h.querySelector("[data-rows]").innerHTML=c),this.holo.visible=o&&l.length>0,h.querySelector("[data-spark]").style.display=this.curve?"":"none",this.devCards.forEach(u=>{let d=t[u.a.f.power],f=d?parseFloat(d.state):NaN,p=Number.isFinite(f)?this.unitW(u.a.f.power,f):null;u.c.visible=e.device_cards!==!1&&o&&p!=null&&Math.abs(p)>=(e.hide_below_w??5);let _=p==null?"":Ui(p);_!==u.sig&&(u.sig=_,u.c.element.querySelector("b").textContent=_)})}tick(t){if(!this.edges)return;let e=bn(0,0,0);for(let n of this.edges){if(!n.dots.visible)continue;n.u=(n.u+n.dir*Qu(n.w)*t/n.path.len+1)%1;let s=n.dots.geometry.attributes.position;for(let r=0;r<n.n;r++){let o=((n.u+r/n.n)%1+1)%1;this.at(n.path,o*n.path.len,e),s.setXYZ(r,e.x,e.y,e.z)}s.needsUpdate=!0}this.level>.01&&(this.pvTex.offset.y=(this.pvTex.offset.y-t*(.15+1.4*this.level))%1),this.pvMats.forEach(n=>{n.emissiveIntensity=.1+1.2*this.level}),this.curveTimer+=t,this.curveTimer>300&&(this.curveTimer=0,this.loadCurve())}reset(){(this.pvMats||[]).forEach(t=>{t.emissiveMap=null,t.emissive.set(2059263),t.emissiveIntensity=.15,t.needsUpdate=!0})}dispose(){this.reset(),this.edges=null,this.pvMats=[]}openSettings(){let t=this.settings.energy||={};In(this.view,{title:"\u26A1 Energie einrichten",obj:t,note:"Leistungs-Sensoren in Watt. Netz: Bezug positiv. Akku: Entladen positiv. Mit \u201Eumkehren\u201C drehst du das Vorzeichen um. Kabel und Karte brauchen mindestens PV, Netz oder Verbrauch.",fields:[{k:"solar",l:"PV-Leistung",t:"entity"},{k:"grid",l:"Netz-Leistung",t:"entity"},{k:"grid_invert",l:"Netz-Vorzeichen umkehren",t:"checkbox"},{k:"battery",l:"Akku-Leistung",t:"entity"},{k:"battery_invert",l:"Akku-Vorzeichen umkehren",t:"checkbox"},{k:"battery_soc",l:"Akku-Ladestand (%)",t:"entity"},{k:"consumption",l:"Hausverbrauch (sonst berechnet)",t:"entity"},{k:"wallbox",l:"Wallbox-Leistung",t:"entity"},{k:"gas",l:"Gas (Anzeige)",t:"entity"},{k:"water",l:"Wasser (Anzeige)",t:"entity"},{k:"device_cards",l:"Leistungskarten an Ger\xE4ten",t:"checkbox"},{k:"hide_below_w",l:"Karten unter \u2026 W ausblenden",t:"number",p:"5"}],extra:(e,n,s)=>{let r=document.createElement("button");r.textContent="\u21E9 Vom Energie-Dashboard \xFCbernehmen",r.onclick=async()=>{try{let o=td(await this.view.hass.callWS({type:"energy/get_prefs"}));if(!Object.keys(o).length)return this.view.msg("Im Energie-Dashboard sind keine Leistungs-Sensoren hinterlegt \u2013 bitte oben w\xE4hlen.");s(),Object.assign(t,o),this.view.msg(`\xDCbernommen: ${Object.keys(o).join(", ")}`),n()}catch(o){this.view.msg("Energie-Dashboard nicht lesbar: "+(o.message||o.code))}},e.append(r)}})}};var Yx=["battery","range","charging","power","lock","climate","switch","tracker"];function rd(i,t,e,n={}){let s=i?t?.[i]?.device_id:null,r=s?Object.keys(t).filter(u=>t[u].device_id===s&&e[u]&&!t[u].hidden):i&&e[i]?[i]:[],o=u=>e[u]?.attributes?.device_class,a=u=>r.find(u)||null,l=u=>u.startsWith("sensor."),c={battery:a(u=>l(u)&&o(u)==="battery"&&!/12v|aux|key|fob/.test(u))||a(u=>l(u)&&/battery_level|state_of_charge|soc|charge_level|ladestand/.test(u)),range:a(u=>l(u)&&/range|reichweite/.test(u)&&!/charge_time|time/.test(u)),charging:a(u=>u.startsWith("binary_sensor.")&&(o(u)==="battery_charging"||/charging|laden/.test(u))),power:a(u=>l(u)&&o(u)==="power"&&/charg|lade/.test(u)),lock:a(u=>u.startsWith("lock.")),climate:a(u=>u.startsWith("climate.")),switch:a(u=>(u.startsWith("switch.")||u.startsWith("button."))&&/charg|lade/.test(u)),tracker:a(u=>u.startsWith("device_tracker."))},h={};for(let u of Yx)h[u]=n[u]||c[u]||null;return h}function Pc(i){return i==null||Number.isNaN(i)?1697535:i<20?16726843:i<50?16757575:4063130}function od(i,t){let e=a=>{let l=a&&t[a]?parseFloat(t[a].state):NaN;return Number.isFinite(l)?l:null},n=a=>t[a]?.attributes?.unit_of_measurement||"",s=a=>!!a&&["on","heat","cool","heat_cool","auto","charging"].includes(t[a]?.state),r=i.tracker?t[i.tracker]?.state:null,o=e(i.power);return o!=null&&n(i.power).toLowerCase()==="w"&&(o/=1e3),{battery:e(i.battery),range:e(i.range),rangeUnit:n(i.range)||"km",charging:s(i.charging)||o!=null&&o>.05,power:o,locked:i.lock?t[i.lock]?.state==="locked":null,climateOn:s(i.climate),away:r!=null&&r!=="home"&&r!=="unknown"}}var Ts=class extends we{get id(){return"car"}get label(){return"\u{1F697} Auto"}get title(){return"Fahrzeug: Ladestand, Reichweite, Laden, Verriegelung und Klima"}get usesHolo(){return!0}get settingsLabel(){return"\u{1F697} Auto"}available(){return!!this.cars?.length}build(t){this.cars=t.cars.map(e=>{let n=t.furniture.find(a=>a.f===e.f),s=yn("<span data-pin>\u{1F697}</span>",{cls:"pin",interactive:!0});s.position.set(n.x,n.top+.5,n.z),s.element.style.cursor="pointer",s.element.addEventListener("click",()=>this.toggleCard(o));let r=yn('<div class="car"></div>',{cls:"carcard",interactive:!0});r.position.set(n.x,n.top+1.4,n.z),r.visible=!1,r.element.addEventListener("click",a=>this.cardClick(o,a)),this.group.add(s,r);let o={...e,a:n,pin:s,dlg:r,open:!1,roles:null,sig:"",dlgSig:""};return o})}roles(t){let e=t.f,n=e.car||{};return rd(n.entity||e.entity,this.view.hass?.entities||{},this.states,n)}toggleCard(t){t.open=!t.open,this.cars.forEach(e=>{e!==t&&(e.open=!1)}),this.update(this.states)}onTap(t){let e=this.cars?.find(n=>n.f.id===t?.furnId);return e?(this.toggleCard(e),!0):!1}update(t){if(!this.cars)return;let e=this.view.holo!==!1;this.cars.forEach(n=>{let s=n.roles=this.roles(n),r=n.s=od(s,t),o=r.battery!=null||r.range!=null||s.lock||s.climate;n.band.color.setHex(r.climateOn?16751164:Pc(r.battery)),n.band.opacity=r.away?.2:.9,n.group.visible=!0;let a=n.f.car?.name||n.f.name||"Auto",l=r.away?["unterwegs"]:[r.battery!=null?`\u{1F50B} ${Math.round(r.battery)} %`:null,r.range!=null?`${Math.round(r.range)} ${Gt(r.rangeUnit)}`:null,r.charging?`\u26A1 ${r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"l\xE4dt"}`:null,r.locked!=null?r.locked?"\u{1F512}":"\u{1F513}":null,r.climateOn?"\u2744":null].filter(Boolean),c=`${Gt(a)}${l.length?" \xB7 "+l.join(" \xB7 "):""}`;if(c!==n.sig&&(n.sig=c,n.pin.element.firstChild.innerHTML=c),n.pin.visible=e,n.dlg.visible=e&&n.open,n.open){let h=r.battery!=null?sn(r.battery,0,100):0,u=`<b>\u{1F697} ${Gt(a)}</b>
          ${r.battery!=null?`<div class="bar"><i style="width:${h}%;background:#${Pc(r.battery).toString(16).padStart(6,"0")}"></i></div>`:""}
          <div class="r"><span>Ladestand</span><b>${r.battery!=null?Math.round(r.battery)+" %":"\u2013"}</b></div>
          <div class="r"><span>Reichweite</span><b>${r.range!=null?Math.round(r.range)+" "+Gt(r.rangeUnit):"\u2013"}</b></div>
          <div class="r"><span>Laden</span><b>${r.charging?r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"ja":"nein"}</b></div>
          <div class="btns">
            ${s.lock?`<button data-a="lock">${r.locked?"\u{1F512} Verriegelt":"\u{1F513} Offen"}</button>`:""}
            ${s.climate?`<button data-a="climate" class="${r.climateOn?"on":""}">\u2744 Klima</button>`:""}
            ${s.switch?`<button data-a="charge" class="${r.charging?"on":""}">\u26A1 Laden</button>`:""}
            <button data-a="close">\u2715</button></div>`;u!==n.dlgSig&&(n.dlgSig=u,n.dlg.element.firstChild.innerHTML=u)}})}cardClick(t,e){let n=e.target.closest("[data-a]")?.dataset.a;if(!n)return;e.stopPropagation();let{roles:s,s:r}=t,o=this.view.hass;if(n==="close")return t.open=!1,this.update(this.states);if(n==="lock"&&s.lock){if(r.locked&&!confirm("Auto entriegeln?"))return;o.callService("lock",r.locked?"unlock":"lock",{entity_id:s.lock})}n==="climate"&&s.climate&&o.callService("climate",r.climateOn?"turn_off":"turn_on",{entity_id:s.climate}),n==="charge"&&s.switch&&(s.switch.startsWith("button.")?o.callService("button","press",{entity_id:s.switch}):o.callService("switch",r.charging?"turn_off":"turn_on",{entity_id:s.switch}))}tick(t,e){this.cars?.forEach(n=>{n.s?.charging&&!n.s.away&&(n.band.opacity=.55+.35*Math.sin(e*4))})}openSettings(){let t=this.cars?.[0];if(!t)return this.view.msg("Erst ein Fahrzeug (M\xF6beltyp \u201Ecar\u201C) im Plan platzieren.");this.openCarSettings(t.f)}openCarSettings(t){let e=t.car||={};In(this.view,{title:"\u{1F697} Auto zuordnen",obj:e,note:"Nenne eine beliebige Entit\xE4t des Autos; die anderen Entit\xE4ten desselben Ger\xE4ts werden automatisch gefunden. Eigene Zuordnungen unten haben Vorrang.",fields:[{k:"name",l:"Name",t:"text"},{k:"entity",l:"Entit\xE4t des Autos (z. B. Ladestand)",t:"entity"},{k:"battery",l:"Ladestand (%)",t:"entity"},{k:"range",l:"Reichweite",t:"entity"},{k:"charging",l:"L\xE4dt (binary_sensor)",t:"entity"},{k:"power",l:"Ladeleistung",t:"entity"},{k:"lock",l:"Zentralverriegelung (lock)",t:"entity"},{k:"climate",l:"Klima (climate)",t:"entity"},{k:"switch",l:"Laden starten/stoppen (switch/button)",t:"entity"},{k:"tracker",l:"Standort (device_tracker)",t:"entity"}]})}};function As(i){let t=i*Math.PI/180;return[-Math.sin(t),Math.cos(t)]}function Yo(i,t,e,n,s,r=18){let o=As(e),a=Math.atan2(o[1],o[0]),l=n*Math.PI/360,c=[[i,t]];for(let h=0;h<=r;h++){let u=a-l+2*l*h/r;c.push([i+s*Math.cos(u),t+s*Math.sin(u)])}return c}function ad(i,t){return 2*Math.atan(Math.tan(i*Math.PI/360)/Math.max(.2,t))*180/Math.PI}var Zx=[["person","\u{1F6B6}",/person|human|people|mensch|face|gesicht/i],["vehicle","\u{1F697}",/vehicle|car\b|truck|auto|fahrzeug|bus\b|motorcycle|bicycle|lkw|pkw/i],["animal","\u{1F43E}",/animal|dog|cat\b|bird|tier|pet\b|hund|katze|vogel/i],["package","\u{1F4E6}",/package|paket|parcel/i],["motion","\u3030",/motion|bewegung|movement|moving/i]];function ld(i,t="",e=""){let n=`${i} ${t}`;for(let[s,r,o]of Zx)if(o.test(n))return{kind:s,icon:r};return["motion","occupancy","moving"].includes(e)?{kind:"motion",icon:"\u3030"}:null}function cd(i,t,e){let n=[],s=null;for(let r of i||[])r.s==="on"&&s!=="on"&&r.t>=t-e&&r.t<=t&&n.push({t:r.t,age:(t-r.t)/e}),s=r.s;return n}var or=i=>new Date(i).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"});function hd(i){return/[?&]token=([^&]+)/.exec(i||"")?.[1]||null}var Mn=(i,t,e)=>new L(i,t,e),Kx=["motion","occupancy","presence","moving"],Zo=class extends we{get id(){return"cameras"}get label(){return"\u{1F3A5} Kameras"}get title(){return"Kameras: Sichtfeld, Erkennungs-Pins, Standbild, Durch-die-Kamera-sehen"}get settingsLabel(){return"\u{1F3A5} Kameras"}get usesHolo(){return!0}cfg(){return{pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}}}available(){return!!this.cams?.length}toolbar(){return[{label:"\u{1F5BC} Wand",title:"Standbilder aller Kameras als Raster, alle 5 s aktualisiert",on:!!this.wall,fn:()=>this.toggleWall()},{label:"\u{1F463} Spur",title:"Bewegung der letzten 30 Minuten",on:!!this.trailOn,fn:()=>this.toggleTrail()}]}build(t){this.anchors=t;let e=n=>t.rooms.find(s=>s.floor===n)?.elev??0;this.cams=t.devices.filter(n=>n.kind==="camera").map(n=>{let s=n.d,r={a:n,d:s,entity:n.entity,rot:s.rot??0,tilt:s.tilt??25,fov:s.fov??90,reach:s.reach??7,fe:s.groundY??e(n.floor)},o=Yo(n.x,n.z,r.rot,r.fov,r.reach),a=[];for(let f=1;f<o.length-1;f++)a.push(o[0][0],r.fe+.05,o[0][1],o[f][0],r.fe+.05,o[f][1],o[f+1][0],r.fe+.05,o[f+1][1]);let l=new Xt;l.setAttribute("position",new Jt(a,3)),r.mat=new Ue({color:1697535,transparent:!0,opacity:.16,side:le,depthWrite:!1}),r.cone=new Ut(l,r.mat);let c=[Mn(n.x,r.fe+.05,n.z),...o.slice(1).map(f=>Mn(f[0],r.fe+.05,f[1])),Mn(n.x,r.fe+.05,n.z)];r.edge=new Je(new Xt().setFromPoints(c),new se({color:1697535,transparent:!0,opacity:.7})),r.cone.visible=r.edge.visible=this.cfg().fov!==!1;let h=As(r.rot),u=Math.cos(ve(r.tilt)),d=Mn(n.x+h[0]*.6*u,n.y-Math.sin(ve(r.tilt))*.6,n.z+h[1]*.6*u);return r.dir=new Je(new Xt().setFromPoints([Mn(n.x,n.y,n.z),d]),new se({color:16722902})),r.pin=yn("<span></span>",{cls:"pin",interactive:!0}),r.pin.position.set(n.x+h[0]*.7,n.y+.35,n.z+h[1]*.7),r.pin.visible=!1,r.pin.element.style.cursor="pointer",r.pin.element.addEventListener("click",()=>this.openCard(r)),this.group.add(r.cone,r.edge,r.dir,r.pin),r}),this.trailGroup=new ie,this.group.add(this.trailGroup),this.sibs=new Map,this.timer=0,this.trailTimer=999,this.look=null,this.trailOn&&this.loadTrail()}siblings(t){let e=this.sibs.get(t.entity);if(e)return e;let n=this.view.hass,s=this.states,r=n?.entities?.[t.entity]?.device_id,o=t.d.motion&&s[t.d.motion]?[{entity:t.d.motion,kind:"motion",icon:"\u3030"}]:[],a=r?Object.keys(n.entities).filter(l=>l!==t.entity&&n.entities[l].device_id===r&&s[l]):[];for(let l of a){if(!l.startsWith("binary_sensor.")&&!l.startsWith("sensor."))continue;let c=s[l],h=ld(l,c.attributes?.friendly_name,c.attributes?.device_class);h&&!o.some(u=>u.entity===l)&&o.push({entity:l,...h,count:l.startsWith("sensor.")})}return this.sibs.set(t.entity,e=o),e}update(t){if(!this.cams)return;let e=this.view.holo!==!1;this.cams.forEach(n=>{let r=this.siblings(n).filter(l=>l.count?parseFloat(t[l.entity]?.state)>0:t[l.entity]?.state==="on"),o=r.length>0;if(n.motion=o,n.mat.color.setHex(o?16726843:1697535),n.edge.material.color.setHex(o?16726843:1697535),n.mat.opacity=o?.3:.16,n.recording=t[n.entity]?.state==="recording",this.cfg().pins!==!1&&e&&o){let l=r.map(c=>{let h=t[c.entity];return`${c.icon} <b>${or(Date.parse(h.last_changed||h.last_updated||Date.now()))}</b>`}).join(" \xB7 ");l!==n.pinSig&&(n.pinSig=l,n.pin.element.firstChild.innerHTML=l),n.pin.visible=!0}else n.pin.visible=!1}),this.wall&&this.refreshWall(!1),this.card&&this.refreshCard(!1)}picture(t,e=!0){let n=this.states[t.entity]?.attributes?.entity_picture;return n?e?`${n}${n.includes("?")?"&":"?"}_=${Date.now()}`:n:null}streamUrl(t){let e=hd(this.states[t.entity]?.attributes?.entity_picture);return e?`/api/camera_proxy_stream/${t.entity}?token=${e}`:null}onTap(t){let e=this.cams?.find(n=>n.entity===t?.entity);return e?(this.openCard(e),!0):!1}openCard(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(480px,94%)",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e;let n=e.remove.bind(e);e.remove=()=>{n(),this.card?.box===e&&(this.card=null)};let s=this.states[t.entity]?.attributes?.friendly_name||t.entity;e.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>\u{1F3A5} ${Gt(s)}</b><button data-a="x">\u2715</button></div>
      <img data-img style="width:100%;border-radius:8px;margin:8px 0;background:#000;min-height:120px;object-fit:cover" alt="">
      <div style="display:flex;gap:6px;flex-wrap:wrap"><button data-a="look" class="on">\u{1F441} Durch die Kamera sehen</button><button data-a="live">\u25B6 Live</button><button data-a="info">\u2139</button></div>`,e.onclick=r=>{let o=r.target.closest("[data-a]")?.dataset.a;o==="x"?this.view.closeOverlay():o==="look"?(this.view.closeOverlay(),this.lookThrough(t)):o==="live"?this.openLive(t):o==="info"&&(this.view.closeOverlay(),this.view.moreInfo(t.entity))},this.card={cam:t,box:e,timer:0},this.refreshCard(!0)}refreshCard(t){let e=this.card;if(!e)return;let n=e.box.querySelector("[data-img]"),s=this.picture(e.cam,!1);n&&s&&(t||n.dataset.src!==s)&&(n.dataset.src=s,n.src=this.picture(e.cam))}openLive(t){this.view.closeOverlay();let e=this.streamUrl(t),n=document.createElement("div");n.className="overlay",n.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(860px,94%)",this.view.shadowRoot.querySelector(".wrap").append(n),this.view._overlay=n,n.innerHTML=`<div style="display:flex;justify-content:space-between"><b>\u{1F3A5} ${Gt(this.states[t.entity]?.attributes?.friendly_name||t.entity)} \xB7 Live</b><button data-a="x">\u2715</button></div>
      <img style="width:100%;border-radius:8px;margin-top:8px;background:#000" alt="">
      <div style="opacity:.6;font-size:11px;margin-top:4px">${e?"Live-Strom (MJPEG)":"Dieses Kamera-Ger\xE4t liefert keinen Live-Strom \u2013 das Bild wird jede Sekunde neu geladen."}</div>`;let s=n.querySelector("img"),r=0,o=()=>{s.src=this.picture(t)};e?(s.onerror=()=>{s.onerror=null,r=setInterval(o,1e3),o()},s.src=e):(o(),r=setInterval(o,1e3));let a=n.remove.bind(n);n.remove=()=>{clearInterval(r),s.src="",a()},n.onclick=l=>{l.target.closest("[data-a=x]")&&this.view.closeOverlay()}}lookThrough(t){let e=this.view;if(this.look)return;let n=t.a,s=As(t.rot),r=Math.cos(ve(t.tilt)),o={pos:Mn(n.x,n.y,n.z),target:Mn(n.x+s[0]*r,n.y-Math.sin(ve(t.tilt)),n.z+s[1]*r),hfov:t.fov};this.look={cam:t,t:0,from:{pos:e.camera.position.clone(),target:e.controls.target.clone(),fov:e.camera.fov},to:o,done:!1},e.controls.enabled=!1;let a=e.shadowRoot.querySelector("#view"),l=document.createElement("img");l.style.cssText="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;pointer-events:none;z-index:2";let c=document.createElement("div");c.className="overlay",c.style.cssText="left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:8px;align-items:center;z-index:7";let h=!!e.hass?.user?.is_admin&&e.cfg.mode!=="card";c.innerHTML=`<span>Bild</span><input type="range" min="0" max="100" value="60" data-a="op" style="width:110px">
      ${h?`<span>Drehung</span><input type="range" min="0" max="360" value="${t.rot}" data-a="rot" style="width:90px"><span>Neigung</span><input type="range" min="0" max="80" value="${t.tilt}" data-a="tilt" style="width:80px">`:""}
      <button data-a="back" class="on">\u2190 Zur\xFCck zur Ansicht</button>`,a.append(l,c);let u=()=>{let f=As(t.rot),p=Math.cos(ve(t.tilt));this.look.to.target.set(n.x+f[0]*p,n.y-Math.sin(ve(t.tilt)),n.z+f[1]*p),e.controls.target.copy(this.look.to.target),e.camera.lookAt(this.look.to.target)};c.oninput=f=>{let p=f.target.dataset.a;p==="op"&&(l.style.opacity=f.target.value/100),(p==="rot"||p==="tilt")&&(t[p]=+f.target.value,t.d[p]=t[p],this.look.moved=!0,u())},c.onclick=f=>{f.target.closest("[data-a=back]")&&this.endLook()},this.look.ui={img:l,bar:c};let d=()=>{let f=this.picture(t);f&&(l.src=f)};d(),this.look.timer=setInterval(d,2e3)}endLook(){let t=this.look,e=this.view;t&&(clearInterval(t.timer),t.ui.img.remove(),t.ui.bar.remove(),e.camera.position.copy(t.from.pos),e.controls.target.copy(t.from.target),e.camera.fov=t.from.fov,e.camera.updateProjectionMatrix(),e.controls.enabled=!0,this.look=null,t.moved&&(e.msg("Drehung/Neigung ge\xE4ndert \u2013 mit \u{1F4BE} speichern"),e.rebuild3D()))}toggleWall(){if(this.wall){this.wall.remove(),this.wall=null,this.view.renderBar();return}let t=document.createElement("div");t.style.cssText="position:absolute;left:8px;top:48px;z-index:4;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;width:min(520px,60%);max-height:70%;overflow:auto",this.cams.forEach(e=>{let n=document.createElement("div");n.style.cssText="position:relative;border:2px solid #2a3b6a;border-radius:8px;overflow:hidden;background:#000;cursor:pointer;aspect-ratio:16/9",n.innerHTML=`<img style="width:100%;height:100%;object-fit:cover;display:block" alt=""><span style="position:absolute;left:4px;bottom:3px;font-size:11px;background:rgba(0,0,0,.6);padding:1px 5px;border-radius:4px">${Gt(this.states[e.entity]?.attributes?.friendly_name||e.entity)}</span><i data-rec style="position:absolute;right:6px;top:4px;color:#ff3b3b;display:none">\u25CF</i>`,n.onclick=()=>this.openLive(e),e.tile=n,t.append(n)}),this.view.shadowRoot.querySelector("#view").append(t),this.wall=t,this.view.renderBar(),this.refreshWall(!0)}refreshWall(t){this.cams.forEach(e=>{let n=e.tile;if(n&&(n.style.borderColor=e.motion?"#ff3b3b":"#2a3b6a",n.querySelector("[data-rec]").style.display=e.recording?"":"none",t)){let s=this.picture(e);s&&(n.querySelector("img").src=s)}})}toggleTrail(){this.trailOn=!this.trailOn,this.trailOn?this.loadTrail():this.clearTrail(),this.view.renderBar()}clearTrail(){this.trailGroup?.clear(),this.trailLabels?.forEach(t=>t.element.remove()),this.trailLabels=[]}positionOf(t){let e=this.anchors,n=e.devices.find(c=>c.entity===t);if(n)return Mn(n.x,n.y,n.z);let s=this.cams.find(c=>this.siblings(c).some(h=>h.entity===t));if(s){let c=As(s.rot);return Mn(s.a.x+c[0]*s.reach*.5,s.fe+.5,s.a.z+c[1]*s.reach*.5)}let r=this.view.hass,o=r?.entities?.[t],a=o?.area_id||r?.devices?.[o?.device_id]?.area_id,l=a?e.rooms.find(c=>c.area===a):null;return l?Mn(l.x,l.elev+1.1,l.z):null}async loadTrail(){if(!this.trailOn||!this.view.hass?.callWS)return;let t=this.states,e=Object.keys(t).filter(a=>a.startsWith("binary_sensor.")&&Kx.includes(t[a].attributes?.device_class)).filter(a=>this.positionOf(a)),n=this.cams.flatMap(a=>this.siblings(a).filter(l=>!l.count).map(l=>l.entity)),s=[...new Set([...e,...n])].slice(0,60);if(!s.length){this.view.msg("Keine Bewegungsmelder im Plan oder an Kameras gefunden");return}let r=Date.now(),o=(this.cfg().trail_minutes||30)*6e4;try{let a=await $o(this.view.hass,s,new Date(r-o),new Date(r));if(!this.trailOn)return;let l=s.flatMap(c=>cd(a[c],r,o).map(h=>({...h,entity:c,pos:this.positionOf(c)}))).filter(c=>c.pos).sort((c,h)=>c.t-h.t);this.drawTrail(l)}catch(a){this.view.msg("Verlauf nicht verf\xFCgbar: "+(a.message||a.code))}}drawTrail(t){if(this.clearTrail(),!t.length)return;let e=Zn();t.forEach(s=>{let r=new We(new ke({map:e,color:1697535,transparent:!0,opacity:sn(1-s.age*.85,.12,1),depthTest:!1,blending:Ze}));r.position.copy(s.pos),r.scale.setScalar(.9*(1-.55*s.age)+.25),r.renderOrder=8,this.trailGroup.add(r)});let n=new Map;if(t.forEach(s=>{let r=`${s.pos.x.toFixed(2)}|${s.pos.z.toFixed(2)}`;n.has(r)||n.set(r,{pos:s.pos,times:[]}),n.get(r).times.push(s.t)}),n.forEach(s=>{let r=yn(`<span>${s.times.slice(-4).reverse().map(or).join(" \xB7 ")}${s.times.length>4?" \u2026":""}</span>`,{cls:"pw"});r.position.copy(s.pos).add(Mn(0,.3,0)),this.trailGroup.add(r),this.trailLabels.push(r)}),t.length>1){let s=[],r=[];t.forEach(l=>{s.push(l.pos.x,l.pos.y,l.pos.z);let c=sn(1-l.age,.1,1);r.push(.1*c,.9*c,1*c)});let o=new Xt;o.setAttribute("position",new Jt(s,3)),o.setAttribute("color",new Jt(r,3));let a=new Je(o,new se({vertexColors:!0,transparent:!0,depthTest:!1}));a.renderOrder=8,this.trailGroup.add(a)}}tick(t){let e=this.view;if(this.look){let n=this.look;if(!n.done){n.t=Math.min(1,n.t+t/.9);let s=n.t*n.t*(3-2*n.t);e.camera.position.lerpVectors(n.from.pos,n.to.pos,s),e.controls.target.lerpVectors(n.from.target,n.to.target,s);let r=e.viewEl.clientWidth||1,o=e.viewEl.clientHeight||1;e.camera.fov=n.from.fov+(ad(n.to.hfov,r/o)-n.from.fov)*s,e.camera.updateProjectionMatrix(),n.t>=1&&(n.done=!0)}}this.timer+=t,this.timer>5&&(this.timer=0,this.wall&&this.refreshWall(!0),this.card&&this.refreshCard(!0)),this.trailTimer+=t,this.trailOn&&this.trailTimer>60&&(this.trailTimer=0,this.loadTrail())}reset(){this.endLook(),this.clearTrail(),this.wall&&(this.wall.remove(),this.wall=null)}dispose(){this.endLook(),this.wall?.remove(),this.wall=null,this.cams=null}openSettings(){let t=this.settings.cameras={pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}};In(this.view,{title:"\u{1F3A5} Kameras",obj:t,note:"Kameras sind Ger\xE4te vom Typ camera. Drehung, Neigung, \xD6ffnungswinkel und Reichweite stellst du am Ger\xE4t ein (Ger\xE4t anklicken). Die Melder werden am selben HA-Ger\xE4t gefunden oder dort eingetragen.",fields:[{k:"fov",l:"Sichtfeld auf dem Boden zeigen",t:"checkbox"},{k:"pins",l:"Erkennungs-Pins (Person, Fahrzeug, Tier \u2026)",t:"checkbox"},{k:"trail_minutes",l:"Bewegungsspur: Minuten zur\xFCck",t:"number",s:5}]})}};var ar={paper:{label:"Papier",re:/papier|pappe|karton|blau/i},yellow:{label:"Gelber Sack",re:/gelb|wertstoff|leichtverp|verpack/i},rest:{label:"Restm\xFCll",re:/rest|schwarz|hausm|grau/i},bio:{label:"Bio",re:/bio|braun|küche|kueche|organ/i}};function Ic(i){let t=String(i??"");return Object.keys(ar).filter(e=>ar[e].re.test(t))}function fd(i){return ar[i.waste]?i.waste:Ic(`${i.name||""}`)[0]||null}var ud=i=>String(i).padStart(2,"0");function pd(i,t=0){let e=new Date(i);return e.setDate(e.getDate()+t),`${e.getFullYear()}-${ud(e.getMonth()+1)}-${ud(e.getDate())}`}var Jx=/^\d{4}-\d{2}-\d{2}$/,dd=i=>Object.keys(i||{}).filter(t=>Jx.test(t));function md(i,t){let e=i?.[t];return e==null?[]:Ic(Array.isArray(e)?e.join(", "):e)}function gd(i,t){let e=new Set;for(let n of i||[]){let s=(n.start?.date||n.start?.dateTime||"").slice(0,10),r=(n.end?.date||n.end?.dateTime||"").slice(0,10);if(!s)continue;let o=!!n.start?.date;(!r||r<s)&&(r=s),t>=s&&(o?t<r||s===r:t<=r)&&Ic(n.summary).forEach(a=>e.add(a))}return[...e]}function _d(i,t){if(t&&i[t])return{entity:t,type:t.startsWith("calendar.")?"calendar":"sensor"};let e=Object.keys(i).filter(r=>r.startsWith("sensor.")&&dd(i[r].attributes).length>=2),n=r=>(/leerung|abfall|müll|muell|waste/i.test(`${r} ${i[r].attributes?.friendly_name||""}`)?1:0)*100+dd(i[r].attributes).length;if(e.sort((r,o)=>n(o)-n(r)),e.length)return{entity:e[0],type:"sensor"};let s=Object.keys(i).filter(r=>r.startsWith("calendar.")&&i[r].state!=="unavailable"&&/müll|muell|abfall|waste|leerung/i.test(`${r} ${i[r].attributes?.friendly_name||""}`));return s.length?{entity:s[0],type:"calendar"}:null}var Ko=class extends we{get id(){return"waste"}get label(){return"\u{1F5D1} M\xFCll"}get title(){return"M\xFClltonnen leuchten am Tag vor der Abholung"}get settingsLabel(){return"\u{1F5D1} M\xFCllabfuhr"}available(){return!!this.bins?.length}cfg(){return{days:1,...this.settings.waste||{}}}build(t){let e=Zn();this.bins=t.furniture.filter(n=>n.f.type==="bin").map(n=>{let s=fd(n.f),r=new Rt(n.f.color||"#9aa5c0"),o={};r.getHSL(o),o.l<.3&&r.setHSL(o.h,Math.min(o.s,.2),.62);let a=new We(new ke({map:e,color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ze}));return a.position.set(n.x,n.top-n.h*.45,n.z),a.scale.setScalar(2.2),a.renderOrder=7,a.visible=!1,this.group.add(a),{a:n,kind:s,glow:a,col:r,base:n.mats.map(l=>({m:l,e:l.emissive.clone(),i:l.emissiveIntensity})),lit:!1}}),this.cal=null,this.calAt=0,this.kinds=new Set}collect(t){let e=this.cfg(),n=pd(Date.now(),e.days),s=_d(t,e.entity);if(this.src=s,!s)return new Set;if(s.type==="sensor")return new Set(md(t[s.entity]?.attributes,n));let r=Date.now();if(r-this.calAt>30*6e4&&this.view.hass?.callApi){this.calAt=r;let o=new Date;o.setDate(o.getDate()+e.days),o.setHours(0,0,0,0);let a=new Date(o);a.setDate(a.getDate()+1),this.view.hass.callApi("GET",`calendars/${s.entity}?start=${encodeURIComponent(o.toISOString())}&end=${encodeURIComponent(a.toISOString())}`).then(l=>{this.cal=gd(l,n),this.update(this.states)}).catch(()=>{this.cal=[]})}return new Set(this.cal||[])}update(t){if(!this.bins)return;this.kinds=this.collect(t);let e=[];this.bins.forEach(s=>{s.lit=!!s.kind&&this.kinds.has(s.kind),s.glow.visible=s.lit,s.base.forEach(r=>{s.lit?(r.m.emissive.copy(s.col),r.m.emissiveIntensity=1):(r.m.emissive.copy(r.e),r.m.emissiveIntensity=r.i)}),s.lit&&e.push(ar[s.kind].label)});let n=this.cfg();this.view.setChip("waste",e.length?`\u{1F5D1} ${n.days===1?"Morgen":`In ${n.days} Tagen`}: ${[...new Set(e)].join(", ")}`:"")}tick(t,e){this.bins?.forEach(n=>{if(!n.lit)return;let s=.75+.25*Math.sin(e*3);n.glow.material.opacity=s,n.glow.scale.setScalar(2+.4*Math.sin(e*3)),n.base.forEach(r=>r.m.emissiveIntensity=.7+.5*s)})}reset(){this.bins?.forEach(t=>{t.lit=!1,t.glow.visible=!1,t.base.forEach(e=>{e.m.emissive.copy(e.e),e.m.emissiveIntensity=e.i})}),this.view.setChip("waste","")}dispose(){this.view.setChip("waste",""),this.bins=null}openSettings(){let t=this.settings.waste={days:1,...this.settings.waste||{}};In(this.view,{title:"\u{1F5D1} M\xFCllabfuhr",obj:t,note:`Quelle der Abholtermine: ein Sensor, dessen Attribute Datum \u2192 M\xFCllart enthalten (Waste Collection Schedule), oder ein M\xFCll-Kalender. Leer = automatisch${this.src?` (gefunden: ${this.src.entity})`:""}. Die Tonnen sind M\xF6bel vom Typ <b>bin</b>; Blau = Papier, Gelb = Gelber Sack, Schwarz = Restm\xFCll, Braun = Bio, erkannt am Namen.`,fields:[{k:"entity",l:"Sensor oder Kalender (leer = automatisch)",t:"entity",p:"sensor.naechste_leerung"},{k:"days",l:"Tage vor der Abholung leuchten",t:"number",s:1}]})}};var Jo=class extends we{get id(){return"parked"}available(){return!1}build(t){this.cars=t.furniture.filter(e=>e.f.presence).map(e=>({a:e,entity:e.f.presence,shown:!0}))}update(t){this.cars?.forEach(e=>{let n=t[e.entity]?.state;e.shown=n==null||n!=="off"&&n!=="unavailable",e.a.group.visible=e.shown})}onLongPress(t){let e=this.cars?.find(s=>s.a.f.id===t?.furnId);if(!e||!e.shown||!this.view.hass)return!1;let[n]=e.entity.split(".");return this.view.hass.callService(n,"turn_off",{entity_id:e.entity}),this.view.msg(`${e.a.f.name||"Auto"}: als \u201Eweg\u201C markiert`),!0}reset(){this.cars?.forEach(t=>{t.a.group.visible=!0})}dispose(){this.cars=null}};var jx=["auf","offen","open","opened","opening","on","ge\xF6ffnet"],Qx=["zu","geschlossen","closed","closing","off","closed_"];function yd(i,t={}){let e=String(i??"").trim().toLowerCase();return!e||e==="unknown"||e==="unavailable"?null:(t.openStates||jx).map(n=>n.toLowerCase()).includes(e)?"open":(t.closedStates||Qx).map(n=>n.toLowerCase()).includes(e)?"closed":null}function xd(i,t){let e=(t-i)%(2*Math.PI);return e>Math.PI&&(e-=2*Math.PI),e<=-Math.PI&&(e+=2*Math.PI),e}function vd(i,t,e=[1,0]){let n=Math.atan2(t[1]-i[1],t[0]-i[0]),s=n+Math.PI,r=Math.atan2(e[1],e[0]);return{A:{closed:n,open:n+xd(n,r)},B:{closed:s,open:s+xd(s,r)}}}var jo=class extends we{get id(){return"gates"}get label(){return"\u{1F6A7} Tor"}get title(){return"Hoftor: Auf / Zu nach dem Zustand aus Frigate"}available(){return!!this.gates?.length}build(){let t=this.view.theme==="day",e=t?5924216:10134976,n=new me({color:e,emissive:e,emissiveIntensity:t?0:.2,transparent:!0,opacity:t?.9:.4,side:le,depthWrite:!1}),s=new se({color:e,transparent:!0,opacity:.95}),r=new me({color:e,emissive:e,emissiveIntensity:t?0:.3});this.group.position.y=this.plan.site?.groundY??0,this.gates=(this.plan.site?.gates||[]).filter(o=>o.a&&o.b).map(o=>{let a=o.h||2,l=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]),c=o.single?l:l/2,h=vd(o.a,o.b,o.inward||[1,0]),u=(p,_,g)=>{let m=new ie;m.position.set(p[0],0,p[1]);let v=new Ut(new xe(c-.12,a-.2,.05),n);if(v.position.set(c/2+.03,.1+(a-.2)/2,0),v.add(new oe(new ye(v.geometry),s)),g)for(let y=.2;y<c-.2;y+=.22){let x=new Ut(new xe(.025,.55,.025),r);x.position.set(y-(c-.12)/2,(a-.2)/2-.3,0),v.add(x)}return v.userData={entity:o.entity,gate:!0},m.add(v),this.pickList.push(v),this.group.add(m),m};this.pickList=this.pickList||[];let d=u(o.a,h.A,!!o.barsA),f=o.single?null:u(o.b,h.B,!0);for(let p of[o.a,o.b]){let _=new Ut(new xe(.2,a+.1,.2),r);_.position.set(p[0],(a+.1)/2,p[1]),this.group.add(_)}return{cfg:o,A:d,B:f,ang:h,cur:0,target:0,known:!1,last:null}}),this.view.pickables.push(...this.pickList||[])}update(t){this.gates?.forEach(n=>{let s=n.cfg.entity?t[n.cfg.entity]:null,r=yd(s?.state,n.cfg);if(r){let o=r==="open"?1:0;n.known&&r!==n.last&&this.view.msg(`${n.cfg.name||"Tor"} ist jetzt ${r==="open"?"auf":"zu"}`),n.known||(n.cur=o),n.target=o,n.last=r,n.known=!0,n.since=s.last_changed?or(Date.parse(s.last_changed)):null}});let e=this.gates?.filter(n=>n.last==="open")||[];this.view.setChip("gates",e.length?`\u{1F6A7} ${e.map(n=>n.cfg.name||"Tor").join(", ")}: auf${e[0].since?` seit ${e[0].since}`:""}`:""),this.pose()}pose(){this.gates?.forEach(t=>{let e=(n,s)=>{n&&(n.rotation.y=-(s.closed+(s.open-s.closed)*t.cur))};e(t.A,t.ang.A),e(t.B,t.ang.B)})}tick(t){let e=!1;this.gates?.forEach(n=>{Math.abs(n.target-n.cur)>.002&&(n.cur+=Math.sign(n.target-n.cur)*Math.min(Math.abs(n.target-n.cur),t*.9),e=!0)}),e&&this.pose()}reset(){this.view.setChip("gates","")}dispose(){this.view.setChip("gates",""),this.gates=null,this.pickList=null}};function bd(i){return[new Bo(i),new qo(i),new Xo(i),new Ts(i),new Zo(i),new Ko(i),new Jo(i),new jo(i),new Ho(i)]}function ty(i,t=512){return new Promise((e,n)=>{let s=new Image,r=URL.createObjectURL(i);s.onload=()=>{let o=Math.min(1,t/Math.max(s.naturalWidth,s.naturalHeight)),a=document.createElement("canvas");a.width=Math.max(1,Math.round(s.naturalWidth*o)),a.height=Math.max(1,Math.round(s.naturalHeight*o)),a.getContext("2d").drawImage(s,0,0,a.width,a.height),URL.revokeObjectURL(r),e(i.type==="image/png"||i.type==="image/svg+xml"?a.toDataURL("image/png"):a.toDataURL("image/jpeg",.85))},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Bild nicht lesbar"))},s.src=r})}function Md(i,t){i.closeOverlay();let e=t.screen||={bg:"dark",rules:[]};e.rules||=[];let n=i.shadowRoot.querySelector(".wrap"),s=document.createElement("div");s.className="overlay",s.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(680px,94%);max-height:84%;overflow:auto",i._overlay=s,n.append(s);let r=()=>{i.rebuild3D(),i.draw2D()},o=!1,a=()=>{o||(i.pushUndo(),o=!0)},l=()=>{let c=i.getStates()||{},h=Object.keys(c).sort(),u=e.entity||t.entity||"",d=zo(e.rules,c,u);s.innerHTML=`
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
      <div style="display:flex;gap:6px;margin-top:8px"><button id="scr-add">+ Regel</button><span style="flex:1"></span><button id="scr-close" class="on">Fertig</button></div>`,s.querySelector("#scr-entity").onchange=f=>{a(),e.entity=f.target.value||null,r(),l()},s.querySelector("#scr-bg").onchange=f=>{a(),e.bg=f.target.value,r()},s.querySelector("#scr-add").onclick=()=>{a(),e.rules.push({match:"",image:""}),l()},s.querySelector("#scr-close").onclick=()=>i.closeOverlay(),s.querySelectorAll(".rule").forEach(f=>{let p=e.rules[+f.dataset.i];f.querySelectorAll("input[data-f]").forEach(_=>{_.onchange=()=>{a();let g=_.dataset.f,m=_.value.trim();g==="image"?m?p.image=m:String(p.image||"").startsWith("data:")||(p.image=""):p[g]=m,r(),l()}}),f.querySelector('[data-act="del"]').onclick=()=>{a(),e.rules.splice(+f.dataset.i,1),r(),l()},f.querySelector('[data-act="upload"]').onclick=()=>{let _=document.createElement("input");_.type="file",_.accept="image/*",_.onchange=async()=>{try{a(),p.image=await ty(_.files[0]),r(),l()}catch(g){i.msg("Bild nicht lesbar: "+g.message)}},_.click()}})};l()}function lr(i,t={},e=0){let n=qu(i),s=Yu(e),r=s[t?.high||"south"]||s.south,o=[-Math.sin(n.ang),Math.cos(n.ang)],a=o[0]*r[0]+o[1]*r[1]>=0?o:[-o[0],-o[1]],l=Math.atan2(-a[0],-a[1]),c=Math.cos(l)<0;return{cx:n.cx,cz:n.cz,L:n.len,W:n.wid,theta:l,dHigh:a,flip:c,tToU:h=>c?n.len/2-h:h-n.len/2}}function Kn(i,t,e){return[i.cx+t*Math.cos(i.theta)+e*Math.sin(i.theta),i.cz-t*Math.sin(i.theta)+e*Math.cos(i.theta)]}function wd(i,t){if(!t)return null;let e=Math.max(0,Math.round(Number(t.carportStalls)||0)),n=Number(t.stallWidth)||2.9,s=t.bike&&t.bike!=="none"?t.bike:null,r=t.garage||(e||s?"west":"none");if(!e&&r==="none"&&!s)return null;let o=Math.min(i,e*n),a=s?Math.min(Math.max(0,i-o),Number(t.bikeWidth)||3):0,l=Math.max(0,i-o-a),c=r==="none"?0:t.garageLen!=null&&t.garageLen!==""?Math.min(Number(t.garageLen),l):l,h=Math.max(0,l-c),u={stalls:e,stallWidth:e?o/e:n},d={door:Number(t.bikeDoor)||1.2},f=[],p=r!=="east",_=s?s==="west":!p;s&&_&&f.push(["bike",a,d]),p?(f.push(["garage",c]),h>.05&&f.push(["open",h]),f.push(["carport",o,u])):(f.push(["carport",o,u]),h>.05&&f.push(["open",h]),f.push(["garage",c])),s&&!_&&f.push(["bike",a,d]);let g=[],m=0;for(let[v,y,x]of f)y>.05&&g.push({type:v,t0:m,t1:m+y,...x||{}}),m+=y;return g}function Sd({L:i,W:t,pitchDeg:e,orientation:n,portrait:s,fill:r=!0,rows:o,cols:a,margin:l=.25,gap:c=.02,align:h="center",uCenter:u=0}){let d=t/Math.cos(e*Math.PI/180),f=m=>{let v=m?1.134:1.722,y=m?1.722:1.134,x=r?Math.max(0,Math.floor((i-2*l+c)/(v+c))):Math.max(0,Math.round(a??1)),T=r?Math.max(0,Math.floor((d-2*l+c)/(y+c))):Math.max(0,Math.round(o??1)),E=[],C=h==="low"?l+y/2:h==="high"?d-l-y/2-(T-1)*(y+c):d/2-(T-1)/2*(y+c);for(let P=0;P<x;P++)for(let w=0;w<T;w++)E.push({u:u+(P-(x-1)/2)*(v+c),s:C+w*(y+c),mw:v,mh:y});return{cols:x,rows:T,modules:E,slope:d,portrait:m}},p=n&&n!=="auto"?n:s!=null&&n!=="auto"?s?"portrait":"landscape":"auto";if(p==="portrait")return f(!0);if(p==="landscape")return f(!1);let _=f(!1),g=f(!0);return g.modules.length>_.modules.length?g:_}var Rs={garage:"Garage",carport:"Carport",bike:"Fahrradgarage",open:"Unterstand"},Ed={low:"L\xE4ngsseite (niedrig)",high:"L\xE4ngsseite (hoch)",west:"Westende",east:"Ostende"};function Qo({side:i="low",pt:t,f:e,W:n,hLow:s,bike:r=!1,width:o}){let a=Math.min(r?2:2.2,s-.2),l=Number(o)||(r?1.2:2.5),c=.03;if(i==="west"||i==="east"){let d=(i==="west"?-1:1)*(e.flip?-1:1);return{side:i,sx:.05,sy:a,sz:Math.min(l,n-.3),x:e.tToU(i==="west"?t.t0:t.t1)+d*c,y:a/2,z:0}}let h=Math.abs(e.tToU(t.t1)-e.tToU(t.t0)),u=i==="high";return{side:u?"high":"low",sx:Math.min(l,h-.2),sy:a,sz:.05,x:(e.tToU(t.t0)+e.tToU(t.t1))/2,y:a/2,z:u?-n/2-c:n/2+c}}function ta(i,t="east"){let e=Math.max(1,Math.round(i.stalls||1)),n=(i.t1-i.t0)/e;return Array.from({length:e},(s,r)=>({n:r+1,t:t==="west"?i.t0+(r+.5)*n:i.t1-(r+.5)*n}))}function ey(i,t){let e=h=>h.type==="carport"?Math.max(0,Math.round(Number(h.stalls)||0))*(Number(h.stallWidth)||2.9):h.len!=null&&h.len!==""&&Number(h.len)>0?Number(h.len):null,n=t.map(e),s=n.reduce((h,u)=>h+(u??0),0),r=n.filter(h=>h==null).length,o=r?Math.max(0,i-s)/r:0,a=!r&&s>i?i/s:1,l=[],c=0;return t.forEach((h,u)=>{let d=(n[u]??o)*a;if(d>.05){let f=h.type==="carport"?Math.max(1,Math.round(Number(h.stalls)||1)):void 0;l.push({...h,type:h.type||"garage",t0:c,t1:c+d,...f?{stalls:f,stallWidth:d/f}:{},index:u})}c+=d}),l}function ea(i,t){return t?.parts?.length?ey(i,t.parts):wd(i,t?.layout)}function Td(i,t){return(wd(i,t)||[]).map(e=>e.type==="carport"?{type:"carport",stalls:e.stalls,stallWidth:+e.stallWidth.toFixed(2)}:e.type==="garage"||e.type==="open"?{type:e.type,len:null}:{type:e.type,len:+(e.t1-e.t0).toFixed(2),door:e.door})}var cr={wallExterior:.24,wallInterior:.12,slab:.18};function na(i){return{id:on(),name:`Etage ${i}`,height:2.6,rooms:[],walls:[],openings:[],devices:[],furniture:[]}}function Lc(i,t,e){let n=i.floors.map((o,a)=>({e:wn(i,a),h:o.height||2.6})).filter(o=>o.e>-.01).sort((o,a)=>o.e-a.e);if(e=Math.max(1,Math.round(e)||1),t.levels=e,!n.length)return t.storeys=Array.from({length:e},(o,a)=>+(a*2.8).toFixed(2)),t.height=+(e*2.8).toFixed(2),t;let s=n[n.length-1];t.storeys=Array.from({length:e},(o,a)=>+(n[a]?.e??s.e+(a-n.length+1)*s.h).toFixed(2));let r=n[e-1]||{e:s.e+(e-n.length)*(s.h+.18),h:s.h};return t.height=+(r.e+r.h).toFixed(2),t}function Cd(i,t=1){return{id:on(),name:`Geb\xE4ude ${t}`,points:i,height:3,visible:!0,roof:{type:"gable",pitch:25,overhang:.3}}}function Dc(){return{version:2,settings:{},floors:[na(1)]}}function Oi(i){return i.version=2,i.settings={...cr,autoDevices:!0,...i.settings||{}},i.floors=i.floors||[],i.site&&(i.site.buildings=i.site.buildings||[],i.site.buildings.forEach(t=>{t.height=t.height||3,t.roof={type:"flat",pitch:25,overhang:.3,...t.roof||{}},t.visible==null&&(t.visible=!0)})),i.floors.forEach(t=>{t.height=t.height||2.6;for(let e of["rooms","walls","openings","devices","furniture"])t[e]=t[e]||[];t.openings.forEach(e=>{let n=e.type==="door";e.w=e.w||(n?.9:1.2),e.h=e.h||(n?2.1:1.1),e.sill==null&&(e.sill=n?0:.9)})}),(i.site?.buildings||[]).forEach(t=>{t.levels>1&&!t.storeys&&Lc(i,t,t.levels)}),i}function wn(i,t){let e=i.floors[t];if(!e)return 0;if(e.elevation!=null)return e.elevation;let n=0;for(let s=0;s<t;s++)n+=(i.floors[s].height||2.6)+(i.settings?.slab??cr.slab);return n}var Ad=new WeakMap;function hr(i){let t=Ad.get(i);if(t)return t;let e=i.axis!=="z",n=!!i.flip,s=n?i.eaveB:i.eaveA,r=n?i.eaveA:i.eaveB,o=n?i.pitchB:i.pitchA,a=n?i.pitchA:i.pitchB,l=e?i.z0:i.x0,c=e?i.z1:i.x1,h=e?i.x0:i.z0,u=e?i.x1:i.z1,d=Math.tan(ve(o)),f=Math.tan(ve(a)),p=(r-s+d*l+f*c)/(d+f),_=s+d*(p-l);return t={horiz:e,c0:l,c1:c,s0:h,s1:u,eaveA:s,eaveB:r,pa:o,pb:a,ta:d,tb:f,cr:p,yr:_,base:i.base??Math.min(s,r),overhang:i.overhang??.5},Ad.set(i,t),t}function ur(i){return i.settings?.roof?.sections||[]}function Pd(i,t,e,n=.06){let s=1/0,r=!1;for(let o of ur(i)){let a=hr(o),l=a.horiz?e:t,c=a.horiz?t:e;if(c<a.s0-n||c>a.s1+n||l<a.c0-n||l>a.c1+n)continue;let h=Math.min(a.eaveA+a.ta*(l-a.c0),a.eaveB+a.tb*(a.c1-l));(!r||h>s)&&(s=h),r=!0}return r?s:1/0}var Rd=.03,ny=i=>typeof i=="number"?i:1/0;function ia(i,t=cr){let e=[],n=l=>{for(let h of e)if(Math.hypot(h[0]-l[0],h[1]-l[1])<Rd)return h;let c=[l[0],l[1]];return c.i=e.length,e.push(c),c},s=[];i.rooms.forEach(l=>{let c=l.points.length;l.points.forEach((h,u)=>{s.push({a:n(h),b:n(l.points[(u+1)%c]),t:l.wallT?.[u]??null,h:ny(l.wallH?.[u]),room:l.id,free:!1})})}),i.walls.forEach(l=>s.push({a:n(l.a),b:n(l.b),t:l.t??null,h:l.h!=null?l.h:1/0,room:null,free:!0,id:l.id}));let r=new Map;s.forEach(l=>{if(l.a===l.b)return;let c=[{t:0,n:l.a},{t:1,n:l.b}];for(let h of e){if(h===l.a||h===l.b)continue;let u=Es(h,l.a,l.b);u.d<Rd&&u.t>5e-4&&u.t<.9995&&c.push({t:u.t,n:h})}c.sort((h,u)=>h.t-u.t);for(let h=0;h<c.length-1;h++){let u=c[h].n,d=c[h+1].n;if(u===d)continue;let f=u.i<d.i?`${u.i}|${d.i}`:`${d.i}|${u.i}`,p=r.get(f);p||r.set(f,p={a:u,b:d,ts:[],hs:[],rooms:new Set,free:!1,ids:[]}),l.t!=null&&p.ts.push(l.t),p.hs.push(l.h),l.room&&p.rooms.add(l.room),l.free&&(p.free=!0,l.id&&p.ids.push(l.id))}});let o=[];r.forEach(l=>{let c=Math.max(...l.hs);if(c<=0)return;let h=l.ts.length?Math.max(...l.ts):l.free||l.rooms.size>=2?t.wallInterior:t.wallExterior;o.push({a:l.a,b:l.b,t:h,h:Number.isFinite(c)?c:null,extA:0,extB:0,rooms:[...l.rooms],free:l.free,ids:l.ids})});let a=new Map;return o.forEach(l=>{for(let[c,h]of[[l.a,l.b],[l.b,l.a]])a.has(c)||a.set(c,[]),a.get(c).push({s:l,dir:iy([h[0]-c[0],h[1]-c[1]])})}),a.forEach((l,c)=>{if(l.length===1||l.length>2)return;let[h,u]=l,d=h.dir[0]*u.dir[1]-h.dir[1]*u.dir[0],f=h.dir[0]*u.dir[0]+h.dir[1]*u.dir[1];if(!(Math.abs(d)<.05&&f<0))for(let p of l)p.s.a===c?p.s.extA=p.s.t/2:p.s.extB=p.s.t/2}),o.forEach(l=>{l.len=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]),l.rot=-Math.atan2(l.b[1]-l.a[1],l.b[0]-l.a[0])}),o}var iy=i=>{let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]};function Id(i,t){let e=null;for(let n of t){let s=Es([i.x,i.z],n.a,n.b);s.d>n.t/2+.2||i.rot!=null&&Math.abs(Math.sin(i.rot-n.rot))>.15||(!e||s.d<e.d)&&(e={s:n,d:s.d,u:s.t*n.len,q:s.q})}return e}var Uc=i=>i.type==="stairs"||i.type==="stairs_u";function Nc(i){if(i.type!=="stairs_u"||i.landings!==2)return Wo(i);let t=i.w||1.9,e=i.d||3.2;return[[-t/2,-e/2],[t/2,-e/2],[t/2,0],[-t/2,0]].map(([n,s])=>Cc(i,n,s))}function Ld(i,t){let e=[],n=wn(i,t);for(let s=0;s<t;s++){let r=wn(i,s);i.floors[s].furniture.filter(Uc).forEach(o=>{if(r+(o.h||2.7)<n-.35||r>=n)return;let a=Nc(o);i.floors[t].rooms.some(l=>a.every(c=>rn(c,l.points)))&&e.push(a)})}return e}var ki={neon:{bg:460815,wall:1697535,wallOp:.2,edgeOp:.85,floorK:.25,floorEm:.14,door:16722902,win:7317759,roof:16751164,text:"#dfe8ff",glow:"#19e6ff"},day:{bg:14673650,wall:15922424,wallOp:.92,edgeOp:.5,floorK:.85,floorEm:0,door:10119999,win:9356799,roof:11883580,text:"#1d2740",glow:"#ffffff"}},sy={kitchen:"#ffb347",kitchen_tall:"#ffb347",kitchen_wall:"#ffb347",island:"#ffb347",sink:"#9ad7ff",stove:"#ff6b6b",dishwasher:"#c0c8d8",fridge:"#e8f1ff",washer:"#e8f1ff",dryer:"#e8f1ff",bed:"#b388ff",dresser:"#c08a5a",wardrobe:"#c08a5a",tall_cabinet:"#c08a5a",sideboard:"#c08a5a",shelf:"#c08a5a",desk:"#4aa3ff",office_chair:"#4aa3ff",chair:"#e0b080",stool:"#e0b080",table:"#e0b080",bench:"#e0b080",sofa_l:"#7bd88f",sofa:"#7bd88f",tv_board:"#7bd88f",rug:"#8f6bb3",shower:"#7fdbff",wc:"#e8f1ff",washbasin:"#e8f1ff",bathtub:"#e8f1ff",robot_vacuum:"#00ff9d",led_strip:"#fff29a",inverter:"#ffd166",meter:"#ffd166",grid_point:"#ffd166",stairs:"#c9d1e6",stairs_u:"#c9d1e6",tv:"#5a6bff",monitor:"#5a6bff",speaker:"#ff2bd6",soundbar:"#ff2bd6",car:"#9aa5c0",battery:"#7bd88f",wallbox:"#19e6ff"},ry={bin:[.58,.72,1.07],stairs:[1,3.2,2.75],stairs_u:[1.9,3.2,2.75],bed:[1.8,2,.5],table:[1.6,.9,.75],chair:[.45,.45,.9],stool:[.35,.35,.45],rug:[2,3,.02],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},oy={kitchen_wall:1.4,tv:.8,monitor:.74,soundbar:.45};function Cs(i=256){let t=document.createElement("canvas");t.width=i,t.height=64;let e=new Be(t),n=new We(new ke({map:e,transparent:!0,depthTest:!1}));return n.scale.set(i/256*1.2,.3,1),n.renderOrder=10,n.visible=!1,n.userData={canvas:t,tex:e,text:""},n}function Bi(i,t,e="#19e6ff"){let n=i.userData;if(n.text===t)return;n.text=t;let s=n.canvas.getContext("2d"),r=n.canvas.width;s.clearRect(0,0,r,64),s.fillStyle="rgba(7,8,15,.75)",s.beginPath(),s.roundRect(4,8,r-8,48,12),s.fill(),s.strokeStyle=e,s.lineWidth=2,s.stroke(),s.fillStyle="#fff",s.font="bold 30px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(t,r/2,33,r-24),n.tex.needsUpdate=!0}function be(i,t,e,n=0,s=0,r=0){let o=new xe(i,t,e);return o.translate(s,n+t/2,r),o}var ay={sedan:[[0,0],[0,.42],[.08,.5],[.3,.55],[.4,1],[.64,1],[.78,.58],[1,.5],[1,0]],wagon:[[0,0],[0,.78],[.03,.97],[.08,1],[.58,1],[.8,.58],[1,.5],[1,0]],hatch:[[0,0],[0,.72],[.06,.96],[.12,1],[.54,1],[.76,.64],[1,.54],[1,0]],van:[[0,0],[0,.95],[.03,1],[.72,1],[.86,.66],[1,.58],[1,0]],roadster:[[0,0],[0,.55],[.12,.62],[.5,.62],[.58,1],[.7,1],[.8,.64],[1,.52],[1,0]]};function ly(i,t,e){let n=ry[i.type]||[.6,.6,.8],s=i.w||n[0],r=i.d||n[1],o=i.h||n[2],a=new Rt(i.color||sy[i.type]||"#9aa5c0"),l=e.theme==="day"?1:.5,c=new me({color:a.clone().multiplyScalar(i.color?1:l),emissive:a,emissiveIntensity:e.theme==="day"?0:i.color?.3:.18,transparent:!0,opacity:e.theme==="day"?1:.88}),h=new se({color:i.color?a.clone().lerp(new Rt(16777215),.4):a,transparent:!0,opacity:.9}),u=i.mountY??oy[i.type]??0,d=[],f=[c],p=new ie;p.position.set(i.x,t+(i.baseY||0),i.z),p.rotation.y=-ve(i.rot||0);let _=(v,y=c)=>{let x=new Ut(v,y);return x.add(new oe(new ye(v),h)),p.add(x),x.userData.entity=i.entity||null,x.userData.furnId=i.id,e.pickables.push(x),d.push(x),x};switch(i.type){case"bin":{_(be(s,o-.06,r,.04)),_(be(s+.04,.06,r+.04,o-.06));break}case"stairs_u":{if(i.landings===2){let P=Math.max(12,2*Math.round(o/.18/2)),w=o/P,b=Math.min(1.2,s/3,r/3),A=i.flip?-1:1,F=Math.max(2,Math.round(P*.31)),O=Math.max(1,P-2-2*F),B=s-b,X=r-2*b;for(let k=0;k<F;k++)_(be(B/F,(k+1)*w,b,0,A*(-s/2+(k+.5)*(B/F)),r/2-b/2));_(be(b,(F+1)*w,b,0,A*(s/2-b/2),r/2-b/2));for(let k=0;k<O;k++)_(be(b,(F+2+k)*w,X/O,0,A*(s/2-b/2),r/2-b-(k+.5)*(X/O)));_(be(b,(F+O+2)*w,b,0,A*(s/2-b/2),-r/2+b/2));for(let k=0;k<F;k++)_(be(B/F,(F+O+3+k)*w,b,0,A*(s/2-b-(k+.5)*(B/F)),-r/2+b/2));break}let v=Math.max(8,2*Math.round(o/.18/2)),y=v/2,x=Math.min(1.2,r*.25),T=(r-x)/y,E=s/2-.02,C=i.flip?-1:1;for(let P=0;P<y;P++)_(be(E,(P+1)*o/v,T,0,C*s/4,r/2-(P+.5)*T));_(be(s,o/2,x,0,0,-r/2+x/2));for(let P=0;P<y;P++)_(be(E,o/2+(P+1)*o/v,T,0,-C*s/4,-r/2+x+(P+.5)*T));break}case"stairs":{let v=Math.max(4,Math.round(o/.18)),y=r/v;for(let x=0;x<v;x++)_(be(s,(x+1)*o/v,y,0,0,r/2-(x+.5)*y));break}case"table":case"desk":case"bench":{_(be(s,.05,r,o-.05));let v=s/2-.05,y=r/2-.05;for(let x of[-1,1])for(let T of[-1,1])_(be(.05,o-.05,.05,0,x*v,T*y));break}case"chair":case"office_chair":case"stool":{let v=Math.min(.46,o*.5);_(be(s,.06,r,v)),_(be(.06,v,.06)),i.type!=="stool"&&_(be(s,o-v,.05,v,0,-r/2+.025));break}case"sofa_l":case"sofa":{_(be(s,Math.min(.45,o),r)),_(be(s,o,.22,0,0,-r/2+.11));break}case"robot_vacuum":{let v=new Qs(Math.max(s,r)/2,Math.max(s,r)/2,o,24);v.translate(0,u+o/2,0),_(v);break}case"tv":case"monitor":{_(be(s,o,r,u));let v=512,y=Math.max(64,Math.round(512*o/s)),x=document.createElement("canvas");x.width=v,x.height=y;let T=new Be(x);T.colorSpace=Ve;let E=Math.max(.1,s-.06),C=Math.max(.1,o-.06),P=new Ut(new qn(E,C),new Ue({map:T,toneMapped:!1}));P.position.set(0,u+o/2,r/2+.003),P.userData.entity=i.entity||null,p.add(P),e.pickables.push(P),e.anchors.screens.push({f:i,canvas:x,tex:T,mesh:P,w:E,h:C,floor:e.cur.i});break}case"car":{let v=ay[i.body];if(v){let E=A=>.2+A*(o-.2),C=new je(v.map(([A,F])=>new K((A-.5)*r,E(F)))),P=new nn(C,{depth:s,bevelEnabled:!1});P.applyMatrix4(new Kt().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),P.translate(-s/2,0,0),_(P);let w=new me({color:1119256,emissive:2106412,emissiveIntensity:.5}),b=Math.min(.34,o*.27);for(let A of[-1,1])for(let F of[-1,1]){let O=new Qs(b,b,.22,16);O.rotateZ(Math.PI/2);let B=new Ut(O,w);B.position.set(A*(s/2-.1),b,F*r*.31),p.add(B)}}else _(be(s,o*.42,r,.18)),_(be(s*.86,o*.34,r*.5,.18+o*.42,0,-r*.04));let y=new Ue({color:1697535,transparent:!0,opacity:.9}),x=new Ut(new xe(s+.08,.06,r+.08),y);if(x.position.set(0,.1,0),x.visible=!!i.car||!v,p.add(x),e.anchors.cars.push({f:i,band:y,group:p,floor:e.cur.i,w:s,d:r,h:o}),i.name&&!i.car){let T=Cs();Bi(T,i.name),T.visible=!0,T.position.set(0,o+.45,0),p.add(T)}break}default:_(be(s,o,r,u))}let g={mats:f,group:p},m=u+o+(i.baseY||0);if(e.anchors.furniture.push({f:i,floor:e.cur.i,x:i.x,z:i.z,y:e.cur.elev+u+(i.baseY||0),top:e.cur.elev+m,w:s,d:r,h:o,group:p,mats:f}),i.entity||i.stateEntity){let v=new We(new ke({map:e.glowTex(),color:a,transparent:!0,depthWrite:!1,blending:Ze}));v.scale.setScalar(Math.max(1,s*2)),v.position.set(0,m/2,0),v.visible=!1,p.add(v),e.dyn.push({kind:"furniture",entity:i.entity||i.stateEntity,mats:f,glow:v,baseScale:v.scale.x})}if(i.power){let v=Cs();v.position.set(0,m+.35,0),p.add(v),e.dyn.push({kind:"value",entity:i.power,sprite:v,always:i.marker==="always"})}if(i.name&&i.showName){let v=Cs();Bi(v,i.name,"#19e6ff"),v.visible=!0,v.position.set(0,m+.3,0),p.add(v)}return g.group}function cy(i,t,e,n,s,r,o){let a=i.len+i.extA+i.extB,l=(i.b[0]-i.a[0])/i.len,c=(i.b[1]-i.a[1])/i.len,h=i.h!=null?Math.min(i.h,t.height):t.height,u=ur(n).length>0,d=y=>{if(!u)return h;let x=y-i.extA,T=Pd(n,i.a[0]+l*x,i.a[1]+c*x);return T===1/0?h:Math.max(.05,Math.min(h,T-e-.02))},f=new je;f.moveTo(0,0),f.lineTo(a,0);let p=u?Math.max(1,Math.ceil(a/.25)):1;for(let y=p;y>=0;y--){let x=a*y/p;f.lineTo(x,d(x))}f.closePath();let _=o.map(y=>({u0:y.u+i.extA-y.w/2,u1:y.u+i.extA+y.w/2,y0:Math.max(y.sill,.003),y1:y.sill+y.h})).sort((y,x)=>y.u0-x.u0),g=-1;_.forEach(y=>{let x=Math.max(y.u0,.01),T=Math.min(y.u1,a-.01),E=Math.min(y.y1,Math.min(d(x),d(T))-.01);if(T-x<.05||E-y.y0<.05||x<g+.01)return;g=T;let C=new hi;C.moveTo(x,y.y0),C.lineTo(T,y.y0),C.lineTo(T,E),C.lineTo(x,E),C.closePath(),f.holes.push(C)});let m=new nn(f,{depth:i.t,bevelEnabled:!1,curveSegments:1});m.translate(0,0,-i.t/2);let v=new Ut(m,r.wall);return v.position.set(i.a[0]-l*i.extA,e,i.a[1]-c*i.extA),v.rotation.y=i.rot,v.add(new oe(new ye(m,25),r.edge)),v.renderOrder=1,v}function hy(i,t,e,n,s){let r=n.th,o=i.type==="door",a=new ie,l=t?(t.s.b[0]-t.s.a[0])/t.s.len:Math.cos(-i.rot),c=t?(t.s.b[1]-t.s.a[1])/t.s.len:Math.sin(-i.rot),h=t?t.s.a[0]+l*t.u:i.x,u=t?t.s.a[1]+c*t.u:i.z;a.position.set(h,e+i.sill,u),a.rotation.y=t?t.s.rot:i.rot;let d=t?t.s.t:.15,f=i.w,p=Math.min(i.h,3),_=o?i.style==="front"?16722902:r.door:r.win,g=new se({color:_}),m=new oe(new ye(new xe(f,p,d+.02)),g);m.position.y=p/2,a.add(m);let v={kind:"opening",entity:i.entity||null,type:i.type,open:0};if(o&&i.style==="passage")return n.dyn.push(v),a;let y=new ie,x=i.hinge==="right"?f/2:-f/2;y.position.set(x,0,0);let T=(i.hinge==="right"?-1:1)*(i.swing==="out"?-1:1),E=new me({color:_,emissive:_,emissiveIntensity:o?.5:.7,transparent:!0,opacity:o?.75:.35,depthWrite:!1,side:le}),C=o||i.leaves!==2?f:f/2,P=new Ut(new xe(C-.04,p-.04,o?.045:.02),E);if(P.position.set(-x>0?C/2:-C/2,p/2,0),y.add(P),!o&&i.leaves===2){let w=new Ut(P.geometry,E);w.position.set(-P.position.x,p/2,0),a.add(w)}return a.add(y),v.pivot=y,v.mat=E,v.sign=T,v.maxAngle=o?ve(75):ve(28),n.dyn.push(v),a}function Fi(i,t,e,n){return i.horiz?[n,e,t]:[t,e,n]}function Dd(i,t,e,n=.5){let s=hr(t),r=t.overhang??s.overhang,o=s.s0-r,a=s.s1+r,l=s.c0-r,c=s.c1+r,h=s.eaveA-s.ta*r,u=s.eaveB-s.tb*r,d=[Fi(s,l,h,o),Fi(s,l,h,a),Fi(s,s.cr,s.yr,a),Fi(s,s.cr,s.yr,o),Fi(s,c,u,o),Fi(s,c,u,a)],f=new Xt;f.setAttribute("position",new Jt(d.flat(),3)),f.setIndex([0,1,2,0,2,3,3,2,5,3,5,4]),f.computeVertexNormals();let p=new Ut(f,e.surf);p.add(new oe(new ye(f,5),e.line)),p.renderOrder=2,i.add(p);for(let[_,g]of[[s.s0,1],[s.s1,-1]]){let m=new je;m.moveTo(s.c0,s.base),m.lineTo(s.c1,s.base),m.lineTo(s.c1,Math.max(s.eaveB,s.base)),m.lineTo(s.cr,s.yr),m.lineTo(s.c0,Math.max(s.eaveA,s.base)),m.closePath();let v=new nn(m,{depth:n,bevelEnabled:!1}),y=new Kt;s.horiz&&y.set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1),v.applyMatrix4(y);let x=g>0?_:_-n;s.horiz?v.translate(x,0,0):v.translate(0,0,x);let T=new Ut(v,e.gable);T.add(new oe(new ye(v,25),e.edge)),i.add(T)}}function uy(i,t){let e=i.settings?.roof,n=new ie;if(!e?.sections?.length)return n;let s=t.th,r=new me({color:s.roof,emissive:s.roof,emissiveIntensity:t.theme==="day"?0:.25,transparent:!0,opacity:t.theme==="day"?.95:.3,side:le,depthWrite:!1}),o=new se({color:s.roof,transparent:!0,opacity:.9}),a=new me({color:s.wall,emissive:s.wall,emissiveIntensity:.2,transparent:!0,opacity:s.wallOp+.05,side:le,depthWrite:!1});e.sections.forEach(h=>Dd(n,h,{surf:r,line:o,gable:a,edge:t.mats.edge}));let l=h=>{let[u,d]=String(h).split(":"),f=e.sections.find(p=>p.id===u);return f?{g:hr(f),side:d==="b"?"b":"a"}:null},c=(h,u,d,f,p,_)=>{let g=l(h);if(!g)return null;let{g:m,side:v}=g,y=ve(v==="a"?m.pa:m.pb),x=v==="a"?m.c0+d*Math.cos(y):m.c1-d*Math.cos(y),T=(v==="a"?m.eaveA:m.eaveB)+d*Math.sin(y);x+=(v==="a"?-Math.sin(y):Math.sin(y))*f,T+=Math.cos(y)*f;let E=Fi(m,x,T,m.s0+u),C=m.horiz?new xe(p,.04,_):new xe(_,.04,p),P=new Ut(C,null);return P.position.set(...E),m.horiz?P.rotation.x=v==="a"?-y:y:P.rotation.z=v==="a"?y:-y,P};return(e.solar||[]).forEach(h=>{let u=h.moduleW||(h.portrait?1.134:1.722),d=h.moduleH||(h.portrait?1.722:1.134),f=h.cols||1,p=h.rows||1,_=new me({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),g=new se({color:5939455});for(let m=0;m<f;m++)for(let v=0;v<p;v++){let y=h.u+(m-(f-1)/2)*(u+.02),x=h.v+(v-(p-1)/2)*(d+.02),T=c(h.face,y,x,.05,u,d);T&&(T.material=_,T.add(new oe(new ye(T.geometry),g)),n.add(T),t.anchors.pv.push({mesh:T,mat:_,entity:h.entity||null,wp:h.wp||400}))}h.entity&&t.dyn.push({kind:"solar",entity:h.entity,mat:_,wp:h.wp||400})}),(e.windows||[]).forEach(h=>{let u=c(h.face,h.u,h.v,.05,h.w||1,h.h||1.2);u&&(u.material=new me({color:s.win,emissive:s.win,emissiveIntensity:.5,transparent:!0,opacity:.55}),n.add(u))}),n}function dy(i,t,e,n,s){let r=new ie,o=i.site?.north??i.settings?.north??0,a=t.roof||{},l=lr(t.points,a,o),c=ve(a.pitch??12),h=Math.tan(c),u=t.height||2.8,d=l.L,f=l.W,p=a.overhang??.3,_=u+f*h,g=A=>u+(f/2-A)*h,m=new ie;m.position.set(l.cx,0,l.cz),m.rotation.y=l.theta,r.add(m);let v=d/2+p,y=-f/2-p,x=f/2+p,T=new Xt;T.setAttribute("position",new Jt([-v,g(y),y,v,g(y),y,v,g(x),x,-v,g(x),x],3)),T.setIndex([0,1,2,0,2,3]),T.computeVertexNormals();let E=new Ut(T,s.roofMats.surf);E.add(new oe(new ye(T,5),s.lineMat)),E.renderOrder=2,m.add(E);let C=(A,F,O,B)=>{if(!n.label)return;let X=n.label(A,e.theme),k=Kn(l,F,O);X.position.set(k[0],B,k[1]),r.add(X)},P=ea(d,t)||[{type:"solid",t0:0,t1:d}],w=!!(t.parts?.length||t.layout);if(P.forEach(A=>{let F=Math.min(l.tToU(A.t0),l.tToU(A.t1)),O=Math.max(l.tToU(A.t0),l.tToU(A.t1)),B=O-F,X=(F+O)/2;if(A.type==="garage"||A.type==="solid"||A.type==="bike"){let k=new je([new K(-f/2,0),new K(f/2,0),new K(f/2,u),new K(-f/2,_)]),Z=new nn(k,{depth:B,bevelEnabled:!1});Z.applyMatrix4(new Kt().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),Z.translate(F,0,0);let H=new Ut(Z,s.wallMat);if(H.add(new oe(new ye(Z,25),s.lineMat)),H.userData={site:t.id},H.renderOrder=1,m.add(H),e.pickables.push(H),(A.type==="garage"||A.type==="bike")&&w){let et=Qo({side:A.doorSide,pt:A,f:l,W:f,hLow:u,bike:A.type==="bike",width:A.door}),ot=new Ut(new xe(et.sx,et.sy,et.sz),new me({color:16722902,emissive:16722902,emissiveIntensity:.5,transparent:!0,opacity:.5,depthWrite:!1}));ot.position.set(et.x,et.y,et.z),ot.add(new oe(new ye(ot.geometry),new se({color:16722902}))),m.add(ot)}C(A.name||(A.type==="solid"?t.name||"":Rs[A.type]||""),X,0,.06)}else{let k=new xe(B,_,.1),Z=new Ut(k,s.wallMat);Z.position.set(X,_/2,-f/2+.05),Z.add(new oe(new ye(k),s.lineMat)),Z.userData={site:t.id},m.add(Z),e.pickables.push(Z);let H=A.type==="carport"?A.stalls:1,et=B/H,ot=[];for(let Pt=0;Pt<=H;Pt++){let $t=F+Pt*et,$=(it,yt)=>{let st=new Ut(new xe(.14,yt,.14),s.wallMat);st.position.set($t,yt/2,it),st.add(new oe(new ye(st.geometry),s.lineMat)),m.add(st)};$(f/2-.08,u),$(-f/2+.08,_),ot.push(new L($t,.03,-f/2),new L($t,.03,f/2))}A.type==="carport"&&m.add(new oe(new Xt().setFromPoints(ot),new se({color:s.col,transparent:!0,opacity:.8})));let pt=new Ut(new qn(B,f),new Ue({color:s.col,transparent:!0,opacity:.12,side:le,depthWrite:!1}));pt.rotation.x=-Math.PI/2,pt.position.set(X,.02,0),m.add(pt),A.type==="carport"&&ta(A,A.numberFrom).forEach(Pt=>C(String(Pt.n),l.tToU(Pt.t),0,.05))}}),w&&P.some(A=>A.type==="carport")){let A=P.find(F=>F.type==="carport");C(`Carport \xB7 ${A.stalls} Stellpl\xE4tze`,l.tToU((A.t0+A.t1)/2),f/2+.9,.06)}let b=t.pv;if(b&&b.enabled!==!1){let A=b.over?String(b.over).startsWith("#")?P.find(Z=>Z.index===Number(String(b.over).slice(1))):P.find(Z=>Z.type===b.over):null,F=Sd({L:d,W:f,pitchDeg:a.pitch??12,orientation:b.orientation,portrait:b.portrait,fill:b.fill!==!1,rows:b.rows,cols:b.cols,align:b.edge||"center",uCenter:A?l.tToU((A.t0+A.t1)/2):0}),O=new me({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),B=new se({color:5939455}),X=Math.cos(c),k=Math.sin(c);m.updateMatrixWorld(!0),F.modules.forEach(Z=>{let H=f/2-Z.s*X+.06*k,et=u+Z.s*k+.06*X,ot=new Ut(new xe(Z.mw,.04,Z.mh),O);ot.position.set(Z.u,et,H),ot.rotation.x=c,ot.add(new oe(new ye(ot.geometry),B)),m.add(ot);let pt=new L;m.updateMatrixWorld(!0),ot.updateWorldMatrix(!0,!1),ot.getWorldPosition(pt),e.anchors.pv.push({mesh:ot,mat:O,entity:b.entity||null,wp:b.wp||420,pos:pt,site:t.id})})}return r}function fy(i,t,e={}){let n=new ie,s=i.site?.buildings||[];if(!s.length&&!i.site?.decks?.length)return n;let r=t.theme==="day",o=r?14205861:16757575,a=new me({color:o,emissive:o,emissiveIntensity:r?0:.18,transparent:!0,opacity:r?.95:.22,depthWrite:!1,side:le}),l=new se({color:o,transparent:!0,opacity:.9}),c={surf:new me({color:o,emissive:o,emissiveIntensity:r?0:.25,transparent:!0,opacity:r?.95:.32,side:le,depthWrite:!1}),line:l,gable:a,edge:l},h=(d,f,p)=>{if(!d.points||d.points.length<3)return;let _=d.rail??1,g=d.railSkip||[0],m=new nn(new je(d.points.map(x=>new K(x[0],-x[1]))),{depth:.18,bevelEnabled:!1,curveSegments:1}),v=new Ut(m,new me({color:o,emissive:o,emissiveIntensity:r?0:.35,transparent:!0,opacity:r?.9:.5,side:le,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=f-.18,v.add(new oe(new ye(m,25),l)),v.userData={site:p},n.add(v),t.pickables.push(v);let y=[];for(let x=0;x<d.points.length;x++){if(g.includes(x))continue;let T=d.points[x],E=d.points[(x+1)%d.points.length];y.push(T[0],f,T[1],E[0],f,E[1],E[0],f+_,E[1],T[0],f,T[1],E[0],f+_,E[1],T[0],f+_,T[1])}if(y.length){let x=new Xt;x.setAttribute("position",new Jt(y,3)),x.computeVertexNormals();let T=new Ut(x,new Ue({color:o,transparent:!0,opacity:.18,side:le,depthWrite:!1}));T.add(new oe(new ye(x,5),l)),n.add(T)}if(e.label&&d.name){let x=e.label(d.name,t.theme),T=vn(d.points);x.position.set(T[0],f+.06,T[1]),n.add(x)}};(i.site?.decks||[]).forEach(d=>h(d,d.elev??0,"deck"));let u=i.site?.groundY??0;return s.forEach(d=>{if(d.visible===!1||!d.points||d.points.length<3)return;if(d.roof?.type==="shed"||d.layout||d.parts?.length){let T=dy(i,d,t,e,{wallMat:a,lineMat:l,roofMats:c,col:o});u&&(T.position.y=u,t.anchors.pv.forEach(E=>{E.site===d.id&&(E.pos.y+=u)})),n.add(T);return}let f=d.levels>1||d.baseY!=null,p=f?Math.min(0,d.baseY??u):0,_=n.children.length,g=d.height||3,m=new nn(new je(d.points.map(T=>new K(T[0],-T[1]))),{depth:g-p,bevelEnabled:!1,curveSegments:1}),v=new Ut(m,a);v.rotation.x=-Math.PI/2,v.position.y=p,v.add(new oe(new ye(m,25),l)),v.userData={site:d.id},v.renderOrder=1,n.add(v),t.pickables.push(v),(d.storeys||[]).filter(T=>T>.05&&T<g-.3).forEach(T=>{let E=new je(d.points.map(w=>new K(w[0],-w[1])));i.floors.forEach((w,b)=>{let A=wn(i,b);A>=T||w.furniture.filter(Uc).forEach(F=>{let O=Nc(F);A+(F.h||2.7)>=T-.35&&O.every(B=>rn(B,d.points))&&E.holes.push(new hi(O.map(B=>new K(B[0],-B[1]))))})});let C=new nn(E,{depth:.18,bevelEnabled:!1,curveSegments:1}),P=new Ut(C,new me({color:o,emissive:o,emissiveIntensity:r?0:.35,transparent:!0,opacity:r?.9:.45,side:le,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.y=T-.18,P.add(new oe(new ye(C,25),l)),n.add(P)}),(d.openings||[]).forEach(T=>{let E=T.w||1.1,C=T.h||2.2,P=T.type==="door"?0:E/2,w=new je;w.moveTo(-E/2,0),w.lineTo(E/2,0),w.lineTo(E/2,C-P),P?w.absarc(0,C-P,P,0,Math.PI,!1):(w.lineTo(E/2,C),w.lineTo(-E/2,C)),w.lineTo(-E/2,0);let b=new nn(w,{depth:.16,bevelEnabled:!1,curveSegments:16});b.translate(0,0,-.08);let A=new Ut(b,new me({color:16722902,emissive:16722902,emissiveIntensity:.5,transparent:!0,opacity:.5,depthWrite:!1}));A.add(new oe(new ye(b,20),new se({color:16722902}))),A.position.set(T.x,T.elev||0,T.z),A.rotation.y=-ve(T.rot||0),A.userData={site:d.id},n.add(A),t.pickables.push(A)}),(d.balconies||[]).forEach(T=>h(T,T.elev??(d.storeys||[]).find(E=>E>.05)??2.8,d.id));let y=g,x=d.roof||{};if(x.type==="gable"&&d.points.length===4){let[T,E,C]=d.points,P=[E[0]-T[0],E[1]-T[1]],w=[C[0]-E[0],C[1]-E[1]],b=Math.hypot(...P),A=Math.hypot(...w),F=b>=A?P:w,O=Math.max(b,A),B=Math.min(b,A),X=x.pitch||25,k={axis:"x",x0:-O/2,x1:O/2,z0:-B/2,z1:B/2,base:g,eaveA:g,eaveB:g,pitchA:X,pitchB:X,overhang:x.overhang??.3},Z=new ie;Dd(Z,k,c,.05),Z.position.set(d.points.reduce((H,et)=>H+et[0],0)/d.points.length,0,d.points.reduce((H,et)=>H+et[1],0)/d.points.length),Z.rotation.y=-Math.atan2(F[1],F[0]),n.add(Z),y=hr(k).yr}if(d.name&&e.label){let T=vn(d.points),E=e.label(d.name,t.theme);E.position.set(T[0],y+.1,T[1]),n.add(E)}!f&&u&&n.children.slice(_).forEach(T=>{T.position.y+=u})}),n}function py(i,t,e){let n=new ie;n.position.set(t[0],.05,t[1]);let s=ve(i||0),r=new L(Math.sin(s),0,-Math.cos(s)),o=e.theme==="day"?3359061:1697535,a=new Ut(new ys(1.1,1.18,48),new Ue({color:o,side:le,transparent:!0,opacity:.8}));a.rotation.x=-Math.PI/2,n.add(a),n.add(new Je(new Xt().setFromPoints([r.clone().multiplyScalar(-.9),r.clone().multiplyScalar(1.5)]),new se({color:16722902})));let l=Cs();return Bi(l,"N","#ff2bd6"),l.visible=!0,l.scale.set(.9,.22,1),l.position.copy(r.clone().multiplyScalar(1.9)),l.position.y=.3,n.add(l),n}function Ud(i,t){let e=t.theme||"neon",n=ki[e]||ki.neon,s={wall:new me({color:n.wall,emissive:n.wall,emissiveIntensity:e==="day"?0:.25,transparent:!0,opacity:n.wallOp,depthWrite:!1}),edge:new se({color:e==="day"?6713477:n.wall,transparent:!0,opacity:n.edgeOp})},r={rooms:[],furniture:[],devices:[],pv:[],screens:[],cars:[]},o={theme:e,th:n,mats:s,dyn:[],pickables:[],glowTex:t.glowTex,anchors:r,cur:{elev:0,i:0}},a=new ie,l={...cr,...i.settings||{}};i.floors.forEach((h,u)=>{if(u>t.maxFloor)return;let d=wn(i,u);o.cur={elev:d,i:u};let f=new ie,p=u<t.maxFloor&&t.maxFloor!==1/0?.7:1,_=Ld(i,u);h.rooms.forEach(y=>{let x=new je(y.points.map(b=>new K(b[0],b[1])));_.forEach(b=>{b.every(A=>rn(A,y.points))&&x.holes.push(new hi(b.map(A=>new K(A[0],A[1]))))});let T=new Rt(y.color||"#19e6ff"),E=new me({color:T.clone().multiplyScalar(n.floorK),emissive:T,emissiveIntensity:n.floorEm*p,side:le}),C=new Ut(new nn(x,{depth:l.slab,bevelEnabled:!1,curveSegments:1}),E);C.rotation.x=Math.PI/2,C.position.y=0,C.userData={room:y.id,floor:h.id},f.add(C),o.pickables.push(C);let P=vn(y.points);if(r.rooms.push({id:y.id,name:y.name,area:y.area,room:y,floor:u,x:P[0],z:P[1],y:d+h.height*.5,elev:d}),y.name){let b=vn(y.points),A=t.label(y.name,e);A.position.set(b[0],.04,b[1]),f.add(A)}let w=t.climateFor?.(y);if(w&&(w.temperature||w.humidity||w.co2)){let b=vn(y.points),A=Cs(448);A.scale.set(3.15,.45,1),A.position.set(b[0],1.05,b[1]),f.add(A),o.dyn.push({kind:"roomclimate",...w,sprite:A,mat:E,base:{color:E.color.clone(),emissive:E.emissive.clone(),ei:E.emissiveIntensity}})}});let g=ia(h,l),m=new Map,v=[];h.openings.forEach(y=>{let x=Id(y,g);x&&(m.has(x.s)||m.set(x.s,[]),m.get(x.s).push({...y,u:x.u})),f.add(hy(y,x,0,o,i)),x||v.push(y)}),g.forEach(y=>{let x=cy(y,h,d,i,n,s,m.get(y)||[]);x.position.y=0,f.add(x)}),h.furniture.forEach(y=>f.add(ly(y,0,o))),t.devicesFor(h).forEach(y=>{let x=ze(y.entity),T=y.y??(x==="light"?h.height-.4:x==="camera"?Math.min(2.4,h.height-.25):.9),E=x==="light"?new wo(.14,16,12):x==="cover"?new xe(.5,.08,.08):new xe(.22,.22,.22),C=new Ut(E,new me({color:4475494,emissive:0}));C.position.set(y.x,T,y.z),C.userData={entity:y.entity};let P=new We(new ke({map:t.glowTex(),color:16765066,transparent:!0,depthWrite:!1,blending:Ze}));P.position.copy(C.position);let w=x==="light"?2.4:1.1;if(P.scale.setScalar(w),P.visible=!1,f.add(C,P),o.pickables.push(C),r.devices.push({d:y,entity:y.entity,floor:u,x:y.x,y:d+T,z:y.z,kind:x,mesh:C}),o.dyn.push({kind:x,entity:y.entity,mesh:C,glow:P,baseScale:w,pulse:x==="light"}),y.name&&y.showName){let b=Cs();Bi(b,y.name),b.visible=!0,b.position.set(y.x,T+.35,y.z),f.add(b)}}),f.position.y=d,a.add(f)}),t.showRoof&&t.maxFloor>=i.floors.length-1&&a.add(uy(i,o)),t.showSite!==!1&&a.add(fy(i,o,t));let c=[...i.floors.flatMap(h=>h.rooms.flatMap(u=>u.points)),...(i.site?.buildings||[]).flatMap(h=>h.points)];if(c.length&&i.site?.north!=null){let[h,,,u]=ui(c);a.add(py(i.site.north,[h-2.5,u+2.5],o))}return{root:a,dyn:o.dyn,pickables:o.pickables,anchors:r}}var my={wood:"#e0a458",tiles:"#58c4dd",stone:"#9aa5b8",carpet:"#b48ad8",concrete:"#8d99ae"},Nd=i=>i==null?null:Number(i),di=i=>i&&i!=="none"?i:null;function gy(i){let t=i?.result??i,e=t?.building??t;if(!e||!Array.isArray(e.floors))throw new Error("Keine NeonPlan-3D-Daten (floors fehlen)");return{building:e,meta:{version:t?.version,revision:t?.revision}}}function Od(i){let{building:t,meta:e}=gy(i),n=t.settings||{},s={version:2,settings:{wallExterior:n.wall_exterior??.24,wallInterior:n.wall_interior??.12,north:n.north??0,autoDevices:!0,energy:t.energy||null,roof:_y(n.roof),source:{app:"neonplan3d",version:e.version??null,revision:e.revision??null}},floors:[]};return[...t.floors].sort((o,a)=>(o.elevation??0)-(a.elevation??0)).forEach(o=>{let a=(o.rooms||[]).map(d=>({id:d.id,name:d.name||"",area:d.area_id||null,color:my[d.floor_material]||"#19e6ff",material:d.floor_material||null,points:d.points.map(f=>[f[0],f[1]]),wallT:d.wall_thickness||null,wallH:d.wall_heights||null,climate:d.climate&&Object.values(d.climate).some(Boolean)?d.climate:null})),l=(o.walls||[]).map(d=>({id:d.id,a:[...d.a],b:[...d.b],t:Nd(d.thickness),h:Nd(d.height)})),c=[];(o.openings||[]).forEach(d=>{let f,p;if(d.wall){let x=(o.walls||[]).find(T=>T.id===d.wall);if(!x)return;[f,p]=[x.a,x.b]}else{let x=(o.rooms||[]).find(E=>E.id===d.room_id);if(!x)return;let T=d.edge||0;[f,p]=[x.points[T%x.points.length],x.points[(T+1)%x.points.length]]}let _=p[0]-f[0],g=p[1]-f[1],m=Math.hypot(_,g)||1,v=d.offset??m/2,y=d.type==="door";c.push({id:d.id,type:d.type,x:+(f[0]+_/m*v).toFixed(4),z:+(f[1]+g/m*v).toFixed(4),rot:-Math.atan2(g,_),w:d.width??(y?.9:1.2),h:d.height??(y?2.1:1.1),sill:d.sill??(y?0:.9),style:d.style||null,hinge:d.hinge||"left",swing:d.swing||"in",leaves:d.leaves||1,entity:di(d.contact)||di(d.sensor),cover:di(d.cover)})});let h=(o.furniture||[]).map(d=>({id:d.id,type:d.type,x:d.x??0,z:d.z??0,rot:d.rotation||0,w:d.w,d:d.d,h:d.h,mountY:d.mount_y??null,name:d.name||null,showName:!!d.show_name,entity:di(d.entity),power:di(d.power),stateEntity:di(d.state_entity),marker:d.marker||null})),u=(o.placements||[]).map((d,f)=>({id:`${o.id}_dev${f}`,entity:d.entity_id,x:d.x,z:d.z,y:d.y??null,name:d.name||null,showName:!!d.show_name}));s.floors.push({id:o.id,name:o.name,elevation:o.elevation??0,height:o.height??2.6,rooms:a,walls:l,openings:c,devices:u,furniture:h})}),Oi(s)}function _y(i){return!i||!Array.isArray(i.sections)||!i.sections.length?null:{overhang:i.overhang??.5,sections:i.sections.map(t=>({id:t.id,shape:t.shape||"gable",axis:t.axis||"x",x0:t.x0,x1:t.x1,z0:t.z0,z1:t.z1,base:t.base,eaveA:t.eave_a,eaveB:t.eave_b,pitchA:t.pitch_a??i.pitch??40,pitchB:t.pitch_b??i.pitch??40,overhang:t.overhang??i.overhang??.5,flip:!!t.flip})),solar:(i.solar||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:t.rows||1,cols:t.cols||1,portrait:t.portrait!==!1,entity:di(t.entity),wp:t.wp||null,name:t.name||null,moduleW:t.module_w??null,moduleH:t.module_h??null})),windows:(i.windows||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,w:t.w||1,h:t.h||1.2,entity:di(t.contact)}))}}var Fd=["light","switch","cover","fan","lock","input_boolean","media_player"],xy=["off","closed","unavailable","unknown","idle","locked","docked","standby","paused"],Bd={bed:[1.8,2,.5],sofa_l:[2.4,1.6,.85],table:[1.6,.9,.75],chair:[.45,.45,.9],desk:[1.4,.7,.75],office_chair:[.6,.6,1],wardrobe:[1,.6,2.1],dresser:[1.2,.5,.9],shelf:[.8,.3,1.8],tv_board:[1.6,.45,.5],sideboard:[1.4,.45,.85],kitchen:[2.4,.62,.9],kitchen_tall:[.6,.62,2.1],kitchen_wall:[1,.35,.7],island:[1.8,.9,.9],fridge:[.6,.65,1.8],stove:[.6,.6,.9],sink:[.8,.6,.9],dishwasher:[.6,.6,.85],washer:[.6,.6,.85],shower:[.9,.9,2.1],bathtub:[1.7,.75,.55],wc:[.4,.7,.8],washbasin:[.6,.45,.85],bin:[.58,.72,1.07],stairs:[.9,2.4,2.8],stairs_u:[1.9,3.2,2.8],rug:[2,3,.02],stool:[.35,.35,.45],bench:[1.2,.4,.45],robot_vacuum:[.36,.36,.1],led_strip:[1,.05,.05],inverter:[.5,.2,.65],meter:[.5,.2,1.1],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},kd=Object.keys(Bd),yy=(i,t)=>t.split(".").reduce((e,n)=>e?.[n],i),vy=(i,t,e)=>{let n=t.split("."),s=n.pop(),r=n.reduce((o,a)=>o[a]??={},i);r[s]=e},an=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),by=`
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
`,Oc=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.plan=Dc(),this.fi=0,this.cut=!1,this.editing=!1,this.tool="select",this.sel=null,this.draft=[],this.cam2={x:5,z:4,s:40},this.dyn=[],this.pickables=[],this.cfg={},this._ready=!1,this.panelRoom=null,this.pendingEntity="",this.furnType="table",this.grid=.1,this.showRoof=!0,this.showSite=!0,this.showClimate=!0,this.heatmap=!1,this.hasClimate=!1,this.multi=[],this.theme="neon",this.undoStack=[],this._labels=new Map,this.chips={},this.holo=!0,this.features=bd(this)}set hass(t){let e=!this._hass;this._hass=t,e&&this._ready&&this.load(),this.updateStates(),!this.editing&&this.panelRoom&&this.renderRoomPanel()}get hass(){return this._hass}getStates(){return this._replayStates||this._hass?.states}fxOn(t){if(this.cfg[t]!=null)return!!this.cfg[t];try{let e=localStorage.getItem("hp3d.fx."+t);if(e!=null)return e==="1"}catch{}return!0}setFx(t,e){try{localStorage.setItem("hp3d.fx."+t,e?"1":"0")}catch{}let n=this.features.find(s=>s.id===t);n&&(n.on=e,n.group.visible=e,e?n.update(this.getStates()||{}):n.reset(),this.renderBar())}openFxMenu(){this.closeOverlay();let t=document.createElement("div");t.className="overlay",t.style.cssText="right:12px;top:52px;width:230px",t.innerHTML=`<h4 style="margin:0 0 6px">Funktionen einrichten</h4>${this.features.filter(e=>e.settingsLabel).map((e,n)=>`<button class="full" data-i="${n}">${e.settingsLabel}</button>`).join("")}`,t.onclick=e=>{let n=e.target.closest("[data-i]")?.dataset.i;n!=null&&this.features.filter(s=>s.settingsLabel)[+n].openSettings()},this.shadowRoot.querySelector(".wrap").append(t),this._overlay=t}closeOverlay(){this._overlay&&(this._overlay.remove(),this._overlay=null)}setChip(t,e){e?this.chips[t]=e:delete this.chips[t];let n=this.$("#chips");n&&(n.innerHTML=Object.values(this.chips).map(s=>`<span>${s}</span>`).join(""))}set config(t){this.cfg=t||{},this.theme=this.cfg.theme==="day"?"day":"neon",this.showRoof=this.cfg.show_roof!==!1,this.showSite=this.cfg.show_site!==!1,this.showClimate=this.cfg.show_climate!==!1,this.heatmap=!!this.cfg.heatmap,this._ready&&(this.renderBar(),this.rebuild3D())}connectedCallback(){if(this._ready)return;this._ready=!0,this.shadowRoot.innerHTML=`<style>${by}</style>
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
    </div>`;let t=e=>this.shadowRoot.querySelector(e);this.$=t,this.edCanvas=t("#ed"),this.viewEl=t("#view"),t("#edit").onclick=()=>this.setEditing(!this.editing),t("#save").onclick=()=>this.save(),t("#undo").onclick=()=>this.undo(),this.init3D(),this.initEditor(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.shadowRoot.querySelector(".wrap")),this._hass?this.load():this.setPlan(this.plan,{fit:!0})}disconnectedCallback(){this.ro?.disconnect(),cancelAnimationFrame(this._raf),this.renderer?.dispose(),this._ready=!1}async load(){let t=null;try{t=await this._hass.callWS({type:"homeplan3d/get"})}catch(e){console.error(e)}this.setPlan(t||Dc(),{fit:!0})}setPlan(t,{fit:e=!1}={}){this.plan=Oi(t),this.plan.floors.length||(this.plan.floors=[na(1)]);let n=this.plan.floors.length-1;this.fi=this.cfg.floor!=null?Math.max(0,Math.min(this.cfg.floor,n)):n,this.cut=this.cfg.floor!=null,this.sel=null,this.draft=[],this.panelRoom=null;let s=this._hass?.user?.is_admin!==!1&&this.cfg.mode!=="card"&&!!this._hass;this.$("#edit").classList.toggle("hidden",!s),this.renderBar(),this.rebuild3D(),e&&this.fit(),this.draw2D()}async save(){try{await this._hass.callWS({type:"homeplan3d/save",plan:this.plan}),this.msg("\u2705 Gespeichert")}catch(t){this.msg("\u274C Speichern fehlgeschlagen: "+(t.message||t.code))}}msg(t){let e=document.createElement("div");e.className="msg",e.textContent=t,this.shadowRoot.querySelector(".wrap").append(e),setTimeout(()=>e.remove(),3500)}get floor(){return this.plan.floors[this.fi]}pushUndo(){this.undoStack.push(JSON.stringify(this.plan)),this.undoStack.length>40&&this.undoStack.shift()}undo(){let t=this.undoStack.pop();t&&(this.plan=Oi(JSON.parse(t)),this.fi=Math.min(this.fi,this.plan.floors.length-1),this.sel=null,this.draft=[],this.renderBar(),this.rebuild3D(),this.renderSide(),this.draw2D())}changed({side:t=!1}={}){this.rebuild3D(),this.draw2D(),t&&this.renderSide()}renderBar(){let t=this.$("#floors");t.innerHTML="";let e=(o,a,l,c)=>{let h=document.createElement("button");return h.textContent=o,h.className=a||"",c&&(h.title=c),h.onclick=l,h};!this.editing&&this.plan.floors.length>1&&t.append(e("Alle",this.cut?"":"on",()=>{this.cut=!1,this.renderBar(),this.rebuild3D(),this.flyToFloor(null)},"Ganzes Geb\xE4ude"));for(let o=this.plan.floors.length-1;o>=0;o--){let a=this.plan.floors[o];t.append(e(a.name,o===this.fi&&(this.editing||this.cut)?"on":"",()=>{this.fi=o,this.cut=!0,this.sel=null,this.renderBar(),this.rebuild3D(),this.draw2D(),this.renderSide(),this.flyToFloor(o)}))}this.editing&&t.append(e("+","",()=>{this.pushUndo(),this.plan.floors.push(na(this.plan.floors.length+1)),this.fi=this.plan.floors.length-1,this.renderBar(),this.changed({side:!0})},"Etage hinzuf\xFCgen"));let n=this.$("#toggles");n.innerHTML="",ur(this.plan).length&&n.append(e("Dach",this.showRoof?"on":"",()=>{this.showRoof=!this.showRoof,this.renderBar(),this.rebuild3D()})),this.plan.site?.buildings?.length&&n.append(e("Gel\xE4nde",this.showSite?"on":"",()=>{this.showSite=!this.showSite,this.renderBar(),this.rebuild3D(),this.draw2D()},"Weitere Geb\xE4ude auf dem Flurst\xFCck")),this.features.forEach(o=>{o.available()&&(n.append(e(o.label,o.on?"on":"",()=>this.setFx(o.id,!o.on),o.title)),o.on&&o.toolbar().forEach(a=>n.append(e(a.label,a.on?"on":"",a.fn,a.title))))}),this.features.some(o=>o.usesHolo&&o.available())&&n.append(e("\u25C8 Karten",this.holo?"on":"",()=>{this.holo=!this.holo,this.renderBar(),this.updateStates()},"Karten und Hologramme im Raum ein- oder ausblenden")),this.hasClimate&&(n.append(e("\u{1F321} Klima",this.showClimate?"on":"",()=>{this.showClimate=!this.showClimate,this.renderBar(),this.updateStates()},"Temperatur und Luftfeuchte in den R\xE4umen")),n.append(e("\u{1F525} W\xE4rme",this.heatmap?"on":"",()=>{this.heatmap=!this.heatmap,this.renderBar(),this.updateStates()},"R\xE4ume nach Temperatur einf\xE4rben"))),n.append(e(this.theme==="day"?"\u2600":"\u{1F319}","",()=>{this.theme=this.theme==="day"?"neon":"day",this.renderBar(),this.rebuild3D()},"Darstellung wechseln"));let s=this.$("#tools");s.innerHTML="",[["select","\u2196 Auswahl"],["rect","\u25AD Raum"],["room","\u2B20 Polygon"],["wall","\u25AC Wand"],["door","\u{1F6AA} T\xFCr"],["window","\u{1FA9F} Fenster"],["furn","\u{1FA91} M\xF6bel"],["device","\u{1F4A1} Ger\xE4t"],["building","\u{1F3E0} Geb\xE4ude"],["erase","\u{1F5D1}"]].forEach(([o,a])=>s.append(e(a,this.tool===o?"on":"",()=>{this.tool=o,this.draft=[],this.renderBar(),this.renderSide(),this.draw2D()}))),s.append(e("\u2922","",()=>{this.fit2D(),this.draw2D()},"Ansicht einpassen")),s.append(e("\u2699 Funktionen","",()=>this.openFxMenu(),"Wetter, Energie, Auto, Kameras \u2026 einrichten"))}setEditing(t){this.editing=t,this.panelRoom=null;for(let[e,n]of[["#tools",t],["#save",t],["#undo",t]])this.$(e).classList.toggle("hidden",!n);this.edCanvas.classList.toggle("hidden",!t),this.$("#side").classList.toggle("hidden",!t),this.$("#edit").classList.toggle("on",t),this.renderBar(),this.renderSide(),this.rebuild3D(),this.resize(),t&&this.fit2D(),this.draw2D()}fit2D(){let t=this.edCanvas;if(!t.width)return;let e=this.floor.rooms.flatMap(a=>a.points);if(e.length||(e=this.plan.floors.flatMap(a=>a.rooms.flatMap(l=>l.points))),e.length||(e=(this.plan.site?.buildings||[]).flatMap(a=>a.points)),!e.length)return;let[n,s,r,o]=ui(e);this.cam2.x=(n+r)/2,this.cam2.z=(s+o)/2,this.cam2.s=Math.max(5,Math.min(120,Math.min(t.width/((r-n)*1.15+1),t.height/((o-s)*1.15+1))))}hint(t){this.$("#hint").textContent=t||""}formHtml(t,e){return e.map(n=>{let s=yy(t,n.k)??n.def,r=`data-k="${n.k}" data-t="${n.t||"text"}"`;return n.t==="select"?`<label>${n.l}</label><select ${r}>${n.o.map(o=>{let[a,l]=Array.isArray(o)?o:[o,o];return`<option value="${an(a)}" ${a===s?"selected":""}>${an(l)}</option>`}).join("")}</select>`:n.t==="checkbox"?`<label><input type="checkbox" ${r} ${s?"checked":""}>${n.l}</label>`:n.t==="number"?`<label>${n.l}</label><input ${r} type="number" step="${n.s||.05}" value="${s??""}" placeholder="${n.p||""}">`:`<label>${n.l}</label><input ${r} ${n.t==="color"?'type="color"':""} ${n.list?`list="${n.list}"`:""} ${n.p?`placeholder="${an(n.p)}"`:""} value="${an(s??"")}">`}).join("")}bindForm(t,e,n){t.querySelectorAll("[data-k]").forEach(s=>{s._bound||(s._bound=!0,s.onchange=()=>{this.pushUndo();let r=s.dataset.t,o=s.value;r==="number"?o=s.value===""?null:+s.value:r==="checkbox"?o=s.checked:o===""&&(o=null),vy(e,s.dataset.k,o),n?.(s),this.changed()})})}renderSide(){let t=this.$("#side");if(!this.editing)return;let e=this._hass,n=this.floor,s={select:"Ziehen verschiebt \xB7 Entf l\xF6scht \xB7 leere Fl\xE4che aufziehen w\xE4hlt mehrere \xB7 Umschalt+Klick f\xFCgt hinzu \xB7 Strg+Z",rect:"Diagonal aufziehen",room:"Punkte klicken, Doppelklick schlie\xDFt",wall:"Start/Ende klicken, Esc beendet",door:"Auf eine Wand klicken",window:"Auf eine Wand klicken",furn:"Typ w\xE4hlen, dann in den Raum klicken",device:"Entit\xE4t w\xE4hlen, dann in den Raum klicken",building:"Geb\xE4ude auf dem Gel\xE4nde diagonal aufziehen",erase:"Element anklicken"};this.hint(s[this.tool]);let o=`<datalist id="ents">${Object.keys(e?.states||{}).sort().map(p=>`<option value="${p}">`).join("")}</datalist>`;o+=`<h4>Etage</h4><div data-obj="floor">${this.formHtml(n,[{k:"name",l:"Name"},{k:"height",l:"Raumh\xF6he (m)",t:"number"},{k:"elevation",l:"H\xF6he Fu\xDFboden (m, leer = automatisch)",t:"number",p:"auto"}])}</div>`,o+=`<label><input type="checkbox" data-plan="autoDevices" ${this.plan.settings.autoDevices?"checked":""}>Ger\xE4te aus HA-Bereichen automatisch platzieren</label>`,o+=`<label>Raster</label><select id="grid">${[.05,.1,.25,.5].map(p=>`<option ${p===this.grid?"selected":""}>${p}</option>`).join("")}</select>`,(this.tool==="device"||this.tool==="door"||this.tool==="window")&&(o+=`<h4>${this.tool==="device"?"Ger\xE4t":"Kontaktsensor"}</h4><label>Entit\xE4t</label><input id="pent" list="ents" value="${an(this.pendingEntity)}" placeholder="light.wohnzimmer">`),this.tool==="furn"&&(o+=`<h4>M\xF6bel</h4><label>Typ</label><select id="ftype">${kd.map(p=>`<option ${p===this.furnType?"selected":""}>${p}</option>`).join("")}</select>`);let a=this.sel,l=(p,_)=>p.find(g=>g.id===_),c=null,h="";if(this.multi.length>1){let p={};this.multi.forEach(g=>p[g.kind]=(p[g.kind]||0)+1);let _={device:"Ger\xE4te",furniture:"M\xF6bel",opening:"\xD6ffnungen",room:"R\xE4ume",wall:"W\xE4nde",site:"Geb\xE4ude"};h+=`<h4>Auswahl</h4><div style="font-size:12px;opacity:.85">${this.multi.length} Elemente: ${Object.entries(p).map(([g,m])=>`${m} ${_[g]||g}`).join(", ")}</div>
        <button class="full" id="multi-del">\u{1F5D1} Auswahl entfernen</button>
        <div style="font-size:11px;opacity:.6;margin-top:4px">Automatisch platzierte Ger\xE4te werden ausgeblendet. Ziehen verschiebt die ganze Auswahl.</div>`}else if(a?.kind==="room"){if(c=l(n.rooms,a.id),c){let p=Object.values(e?.areas||{}),_=this.areaClimate(c.area);h+=`<h4>Raum</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"area",l:"HA-Bereich (Ger\xE4te automatisch)",t:"select",o:[["","\u2013 keiner \u2013"],...p.map(g=>[g.area_id,g.name]),...c.area&&!p.some(g=>g.area_id===c.area)?[[c.area,c.area]]:[]]},{k:"color",l:"Farbe",t:"color"},{k:"autoDevices",l:"Ger\xE4te aus dem HA-Bereich automatisch platzieren",t:"checkbox",def:!0},{k:"climate.temperature",l:"Temperatur-Sensor",list:"ents",p:_.temperature?`automatisch: ${_.temperature}`:""},{k:"climate.humidity",l:"Feuchte-Sensor",list:"ents",p:_.humidity?`automatisch: ${_.humidity}`:""},{k:"climate.co2",l:"CO\u2082-Sensor",list:"ents",p:_.co2?`automatisch: ${_.co2}`:""}])}<div class="hint2" style="opacity:.6;font-size:11px;margin-top:6px">${Go(c.points).toFixed(1)} m\xB2</div>`}}else if(a?.kind==="wall")c=l(n.walls,a.id),c&&(h+=`<h4>Wand</h4>${this.formHtml(c,[{k:"t",l:"St\xE4rke (m)",t:"number",p:"auto"},{k:"h",l:"H\xF6he (m, leer = voll)",t:"number"}])}`);else if(a?.kind==="device"){if(c=l(n.devices,a.id),c)h+=`<h4>Ger\xE4t</h4>${this.formHtml(c,[{k:"entity",l:"Entit\xE4t",list:"ents"},{k:"name",l:"Anzeigename"},{k:"showName",l:"Name anzeigen",t:"checkbox"},{k:"y",l:"H\xF6he (m)",t:"number",p:"auto"},...ze(c.entity)==="camera"?[{k:"rot",l:"Blickrichtung (\xB0 im Uhrzeigersinn, 0 = im Plan nach unten)",t:"number",s:5,p:"0"},{k:"tilt",l:"Neigung nach unten (\xB0)",t:"number",s:5,p:"25"},{k:"fov",l:"\xD6ffnungswinkel (\xB0)",t:"number",s:5,p:"90"},{k:"reach",l:"Reichweite im Plan (m)",t:"number",s:.5,p:"7"},{k:"motion",l:"Bewegungsmelder (leer = am Kamera-Ger\xE4t suchen)",list:"ents"}]:[]])}`;else if(this.isAuto(a)){let p=this.itemOf(a);p&&(h+=`<h4>Ger\xE4t (automatisch)</h4><div style="font-size:12px;opacity:.85;word-break:break-all">${an(p.entity)}</div>
          <div style="font-size:11px;opacity:.6;margin:4px 0">Aus dem HA-Bereich des Raums platziert. Ziehen setzt es fest, Entf blendet es aus.</div>
          <button class="full" id="auto-pin">\u{1F4CC} Festsetzen</button><button class="full" id="auto-hide">\u{1F648} Ausblenden</button>`)}}else a?.kind==="opening"?(c=l(n.openings,a.id),c&&(h+=`<h4>${c.type==="door"?"T\xFCr":"Fenster"}</h4>${this.formHtml(c,[{k:"w",l:"Breite (m)",t:"number"},{k:"h",l:"H\xF6he (m)",t:"number"},{k:"sill",l:"Br\xFCstung (m)",t:"number"},{k:"style",l:"Art",t:"select",o:[["","Standard"],"front","interior","passage"]},{k:"hinge",l:"Angel",t:"select",o:["left","right"]},{k:"swing",l:"\xD6ffnet nach",t:"select",o:["in","out"]},{k:"entity",l:"Kontaktsensor",list:"ents"}])}`)):a?.kind==="furniture"?(c=l(n.furniture,a.id),c&&(h+=`<h4>M\xF6bel</h4>${this.formHtml(c,[{k:"type",l:"Typ",t:"select",o:kd},{k:"name",l:"Name"},{k:"color",l:"Farbe (leer = Standard)",t:"color"},...c.type==="stairs_u"?[{k:"landings",l:"Podeste (1 = zwei L\xE4ufe, 2 = drei L\xE4ufe um die Ecken)",t:"number",s:1,p:"1"},{k:"flip",l:"Gespiegelt (Anfang auf der anderen Seite)",t:"checkbox"}]:[],...c.type==="car"?[{k:"presence",l:"Anwesenheit (Schalter: an = da, aus = weg)",list:"ents"}]:[],...c.type==="car"?[{k:"body",l:"Karosserie",t:"select",o:[["","einfach"],["sedan","Limousine"],["wagon","Kombi"],["hatch","Schr\xE4gheck / Crossover"],["van","Kastenwagen"],["roadster","Roadster"]]}]:[],{k:"rot",l:"Drehung (\xB0)",t:"number",s:5},{k:"w",l:"Breite",t:"number"},{k:"d",l:"Tiefe",t:"number"},{k:"h",l:"H\xF6he",t:"number"},{k:"mountY",l:"H\xF6he \xFCber Boden",t:"number",p:"0"},{k:"entity",l:"Entit\xE4t (Zustand/Leuchten)",list:"ents"},{k:"power",l:"Leistungs-Sensor",list:"ents"}])}${c.type==="tv"||c.type==="monitor"?'<button class="full" id="scr-edit">\u{1F5A5} Bildschirm-Regeln \u2026</button>':""}${c.type==="car"?'<button class="full" id="car-edit">\u{1F697} Auto zuordnen \u2026</button>':""}`)):a?.kind==="site"&&(c=l(this.plan.site?.buildings||[],a.id),c&&(h+=`<h4>Geb\xE4ude</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"levels",l:"Geschosse (richten sich nach den Haus-Etagen)",t:"number",s:1,p:"1"},{k:"height",l:"Traufh\xF6he (m)",t:"number",s:.1},{k:"roof.type",l:"Dach",t:"select",o:[["flat","Flach"],["gable","Satteldach"],["shed","Pultdach"]]},{k:"roof.pitch",l:"Neigung (\xB0)",t:"number",s:1},...c.roof?.type==="shed"?[{k:"roof.high",l:"Hohe Seite (zum Nachbarn)",t:"select",o:[["south","S\xFCd"],["north","Nord"],["east","Ost"],["west","West"]],def:"south"}]:[],{k:"visible",l:"Sichtbar",t:"checkbox"}])}${c.roof?.type==="shed"?`${this.partsHtml(c)}<h4>Photovoltaik auf dem Dach</h4>${this.formHtml(c,[{k:"pv.enabled",l:"PV-Module auf dem Dach",t:"checkbox"},{k:"pv.fill",l:"Dachfl\xE4che f\xFCllen",t:"checkbox",def:!0},{k:"pv.orientation",l:"Modulausrichtung",t:"select",o:[["auto","automatisch (mehr Module)"],["landscape","quer"],["portrait","hochkant"]],def:"auto"},{k:"pv.rows",l:"Reihen (ohne F\xFCllen)",t:"number",s:1},{k:"pv.cols",l:"Module je Reihe (ohne F\xFCllen)",t:"number",s:1},{k:"pv.over",l:"Lage entlang des Dachs",t:"select",o:[["","Mitte"],...this.partOptions(c)]},{k:"pv.edge",l:"Lage am Hang",t:"select",o:[["center","Mitte"],["low","unten an der Traufe"],["high","oben am First"]],def:"center"},{k:"pv.wp",l:"Leistung je Modul (Wp)",t:"number",s:10,p:"420"},{k:"pv.entity",l:"Leistungs-Sensor dieser Anlage",list:"ents"}])}`:""}`));h&&(o+=`<div data-obj="sel">${h}</div>`);let u=this.deviceList(n),d=u.filter(p=>!p.explicit).length,f=(this.plan.settings.hiddenEntities||[]).length;o+=`<h4>Ger\xE4te dieser Etage (${u.length})</h4>
      <input id="devfilter" placeholder="Filter \u2026" value="${an(this._devFilter||"")}">
      <div id="devlist" style="max-height:220px;overflow:auto;margin-top:4px"></div>
      <div class="row"><button id="dev-selall">Alle w\xE4hlen</button><button id="dev-hideauto" ${d?"":"disabled"}>Auto ausblenden (${d})</button></div>
      <button class="full" id="dev-restore" ${f?"":"disabled"}>\u21BA Ausgeblendete zeigen (${f})</button>`,o+=`<h4>Import</h4>
      <button class="full" id="imp-live">\u21E9 Von NeonPlan 3D \xFCbernehmen</button>
      <button class="full" id="imp-file">\u{1F4C2} Datei laden (NeonPlan / Plan / Gel\xE4nde)</button>
      <button class="full" id="exp-file">\u2B06 Plan als Datei sichern</button>`,t.innerHTML=o,this.bindForm(t.querySelector('[data-obj="floor"]'),n,p=>{p.dataset.k==="name"&&this.renderBar()}),c&&this.bindForm(t.querySelector('[data-obj="sel"]'),c,p=>{p.dataset.k==="levels"&&a?.kind==="site"&&(Lc(this.plan,c,c.levels||1),this.renderSide()),p.dataset.k==="height"&&a?.kind==="site"&&(c.storeys=(c.storeys||[]).filter(_=>_<c.height-.3)),(p.dataset.k==="type"||p.dataset.k==="style"||p.dataset.k==="entity"&&a?.kind==="device")&&this.renderSide()}),t.querySelector("[data-plan]")?.addEventListener("change",p=>{this.plan.settings.autoDevices=p.target.checked,this.changed()}),t.querySelector("#grid").onchange=p=>{this.grid=+p.target.value},t.querySelector("#pent")?.addEventListener("change",p=>this.pendingEntity=p.target.value),t.querySelector("#ftype")?.addEventListener("change",p=>this.furnType=p.target.value),a?.kind==="site"&&c&&this.bindParts(t,c),t.querySelector("#scr-edit")?.addEventListener("click",()=>Md(this,c)),t.querySelector("#car-edit")?.addEventListener("click",()=>this.features.find(p=>p instanceof Ts).openCarSettings(c)),this.fillDevList(),t.querySelector("#devfilter").oninput=p=>{this._devFilter=p.target.value,this.fillDevList()},t.querySelector("#dev-selall").onclick=()=>{this.multi=this.deviceList(this.floor).map(p=>({kind:"device",id:p.id})),this.sel=this.multi.length===1?this.multi[0]:null,this.renderSide(),this.draw2D()},t.querySelector("#dev-hideauto").onclick=()=>{this.pushUndo(),this.deviceList(this.floor).filter(p=>!p.explicit).forEach(p=>this.hideEntity(p.entity)),this.changed({side:!0})},t.querySelector("#dev-restore").onclick=()=>{this.pushUndo(),this.plan.settings.hiddenEntities=[],this.changed({side:!0})},t.querySelector("#multi-del")?.addEventListener("click",()=>this.deleteHits([...this.multi])),t.querySelector("#auto-hide")?.addEventListener("click",()=>this.deleteHits([a])),t.querySelector("#auto-pin")?.addEventListener("click",()=>{let p=this.itemOf(a);if(!p)return;this.pushUndo();let _={id:on(),entity:p.entity,x:p.x,z:p.z};n.devices.push(_),this.sel={kind:"device",id:_.id},this.changed({side:!0})}),t.querySelector("#imp-live").onclick=()=>this.importLive(),t.querySelector("#imp-file").onclick=()=>this.importFile(),t.querySelector("#exp-file").onclick=()=>this.exportFile()}siteLength(t){return lr(t.points,t.roof,this.plan.site?.north??0).L}ensureParts(t){return!t.parts&&t.layout&&(t.parts=Td(this.siteLength(t),t.layout),delete t.layout),t.parts||[]}partOptions(t){return this.ensureParts(t).map((e,n)=>[`#${n}`,`${n+1}. ${e.name||Rs[e.type]||e.type}`])}partsHtml(t){let e=this.ensureParts(t),n=Object.entries(Rs);return`<h4>Aufteilung (West \u2192 Ost)</h4>${e.map((r,o)=>`<div class="prow" data-i="${o}">
      <div class="l1"><select data-f="type">${n.map(([a,l])=>`<option value="${a}" ${r.type===a?"selected":""}>${l}</option>`).join("")}</select>
        <button data-a="up" title="nach links (West)">\u2190</button><button data-a="down" title="nach rechts (Ost)">\u2192</button><button data-a="del" title="Teil entfernen">\u{1F5D1}</button></div>
      <div class="l2">${r.type==="carport"?`<input data-f="stalls" type="number" step="1" value="${r.stalls??4}" title="Stellpl\xE4tze"><input data-f="stallWidth" type="number" step="0.1" value="${r.stallWidth??2.9}" title="Breite je Stellplatz (m)">`:`<input data-f="len" type="number" step="0.1" value="${r.len??""}" placeholder="L\xE4nge: Rest" title="L\xE4nge (m), leer = Rest">`}
        ${r.type==="garage"||r.type==="bike"?`<input data-f="door" type="number" step="0.1" value="${r.door??""}" placeholder="T\xFCr (m)" title="T\xFCrbreite (m)">`:""}</div>
      ${r.type==="garage"||r.type==="bike"?`<div class="l3"><select data-f="doorSide" title="An welcher Wand das Tor sitzt">${Object.entries(Ed).map(([a,l])=>`<option value="${a}" ${(r.doorSide||"low")===a?"selected":""}>Tor: ${l}</option>`).join("")}</select></div>`:r.type==="carport"?`<div class="l3"><select data-f="numberFrom" title="Von welchem Ende die Stellpl\xE4tze gez\xE4hlt werden"><option value="east" ${r.numberFrom!=="west"?"selected":""}>Nummer 1 im Osten</option><option value="west" ${r.numberFrom==="west"?"selected":""}>Nummer 1 im Westen</option></select></div>`:""}</div>`).join("")}<button class="full" id="part-add">+ Teil hinzuf\xFCgen</button>
      <div style="opacity:.6;font-size:11px;margin-top:4px">L\xE4nge leer = Rest \xB7 Gesamtl\xE4nge ${this.siteLength(t).toFixed(1)} m \xB7 Carport: Stellpl\xE4tze \xD7 Breite</div>`}bindParts(t,e){t.querySelectorAll(".prow").forEach(n=>{let s=+n.dataset.i;n.querySelectorAll("[data-f]").forEach(r=>{r.onchange=()=>{this.pushUndo();let o=e.parts[s],a=r.dataset.f;a==="type"?(o.type=r.value,o.type==="carport"&&(o.stalls??=4,o.stallWidth??=2.9)):a==="doorSide"||a==="numberFrom"?r.value===(a==="doorSide"?"low":"east")?delete o[a]:o[a]=r.value:o[a]=r.value===""?null:+r.value,this.changed({side:a==="type"})}}),n.querySelectorAll("[data-a]").forEach(r=>{r.onclick=()=>{this.pushUndo();let o=r.dataset.a;if(o==="del")e.parts.splice(s,1);else{let a=o==="up"?s-1:s+1;a>=0&&a<e.parts.length&&([e.parts[s],e.parts[a]]=[e.parts[a],e.parts[s]])}this.changed({side:!0})}})}),t.querySelector("#part-add")?.addEventListener("click",()=>{this.pushUndo(),(e.parts||=[]).push({type:"garage",len:null}),this.changed({side:!0})})}fillDevList(){let t=this.$("#devlist");if(!t)return;let e=(this._devFilter||"").toLowerCase(),n=this._hass?.states||{},s=o=>o.name||n[o.entity]?.attributes?.friendly_name||o.entity,r=this.deviceList(this.floor).filter(o=>!e||o.entity.toLowerCase().includes(e)||s(o).toLowerCase().includes(e));t.innerHTML="",r.slice(0,300).forEach(o=>{let a=document.createElement("div");a.className="dev"+(this.isSel(o.id)?" on":""),a.innerHTML=`<div style="min-width:0;flex:1"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${an(s(o))}</b><span class="s">${o.explicit?"":"auto \xB7 "}${an(o.entity)}</span></div><button title="Entfernen" data-del>\u{1F5D1}</button>`,a.onclick=l=>{if(l.target.closest("[data-del]")){this.deleteHits([{kind:"device",id:o.id}]);return}this.sel={kind:"device",id:o.id},this.multi=[],this.cam2.x=o.x,this.cam2.z=o.z,this.renderSide(),this.draw2D()},t.append(a)}),r.length||(t.innerHTML='<div style="opacity:.6;padding:6px">Keine Ger\xE4te</div>')}async importLive(){try{let t=await this._hass.callWS({type:"neonplan3d/building/get"});this.applyImport(t,"NeonPlan 3D (live)")}catch(t){this.msg("NeonPlan 3D nicht erreichbar: "+(t.message||t.code||t))}}importFile(){let t=document.createElement("input");t.type="file",t.accept=".json,application/json",t.onchange=async()=>{try{let e=JSON.parse(await t.files[0].text());this.applyImport(e,t.files[0].name)}catch(e){this.msg("Datei nicht lesbar: "+e.message)}},t.click()}exportFile(){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(this.plan,null,1)],{type:"application/json"})),t.download="homeplan3d-plan.json",t.click()}applyImport(t,e){let n=t?.result??t,s=this.plan.floors.some(c=>c.rooms.length||c.walls.length);if(n?.buildings&&!n.floors){this.pushUndo(),this.plan.site={...this.plan.site||{},...n},this.plan=Oi(this.plan),this.showSite=!0,this.renderBar(),this.changed({side:!0}),this.fit(),this.msg(`${n.buildings.length} Geb\xE4ude aus ${e} \xFCbernommen`);return}let r,o=n?.building??n,a=o?.settings&&("wall_exterior"in o.settings||"buttons"in o.settings)||o?.floors?.some(c=>"placements"in c||"cut_height"in c);try{r=a?Od(t):Oi(Vo(n))}catch(c){this.msg("Import fehlgeschlagen: "+c.message);return}if(s&&!confirm("Den vorhandenen Plan durch den importierten ersetzen?"))return;this.pushUndo();let l=this.plan.site;!r.site&&l&&(r.site=l),this.setPlan(r,{fit:!0}),this.editing&&this.renderSide(),this.msg(`${r.floors.length} Etagen aus ${e} \xFCbernommen \u2013 mit \u{1F4BE} speichern`)}deviceList(t){let e=this._hass,n=t.devices.map(o=>({...o,explicit:!0}));if(!e?.entities||!this.plan.settings.autoDevices)return n;let s=new Set(this.plan.floors.flatMap(o=>o.devices.map(a=>a.entity))),r=new Set(this.plan.settings.hiddenEntities||[]);return t.rooms.forEach(o=>{if(!o.area||o.autoDevices===!1)return;let a=Object.keys(e.states).sort().filter(g=>{if(!Fd.includes(ze(g)))return!1;let m=e.entities[g];return!m||m.hidden?!1:(m.area_id||e.devices?.[m.device_id]?.area_id)===o.area}),[l,c,h,u]=ui(o.points),d=Math.max(1,Math.floor((h-l)/.8)),f=0,p=0,_=[];for(;_.length<a.length&&p++<400;){let g=f%d,m=Math.floor(f/d),v=[l+.5+g*.8,c+.5+m*.8];if(f++,v[1]>u){_.push([(l+h)/2,(c+u)/2]);continue}rn(v,o.points)&&_.push(v)}a.forEach((g,m)=>{!s.has(g)&&!r.has(g)&&n.push({id:"auto:"+g,entity:g,x:_[m][0],z:_[m][1],explicit:!1})})}),n}climateFor(t){let e=t.climate||{},n=t.area?this.areaClimate(t.area):{};return{temperature:e.temperature||n.temperature||null,humidity:e.humidity||n.humidity||null,co2:e.co2||n.co2||null}}areaClimate(t){let e={temperature:null,humidity:null,co2:null},n=this._hass;if(!t||!n?.entities)return e;let s=Object.keys(n.entities).length+"|"+Object.keys(n.states).length;if(this._areaClimate?.sig!==s&&(this._areaClimate={sig:s,map:new Map}),this._areaClimate.map.has(t))return this._areaClimate.map.get(t);let r={temperature:"temperature",humidity:"humidity",carbon_dioxide:"co2"};for(let o of Object.keys(n.states).sort()){if(ze(o)!=="sensor")continue;let a=n.entities[o];if(!a||a.hidden||a.entity_category&&a.entity_category!=="none"||(a.area_id||n.devices?.[a.device_id]?.area_id)!==t)continue;let l=r[n.states[o].attributes?.device_class];l&&!e[l]&&(e[l]=o)}return this._areaClimate.map.set(t,e),e}updateClimate(t){let e=this._hass?.states;if(!e)return;let n=c=>{let h=c&&e[c]?parseFloat(e[c].state):NaN;return Number.isFinite(h)?h:null},s=n(t.temperature),r=n(t.humidity),o=n(t.co2),a=[];s!=null&&a.push(`${s.toFixed(1)} \xB0C`),r!=null&&a.push(`${Math.round(r)} %`),o!=null&&a.push(`${Math.round(o)} ppm`);let l=new Rt().setHSL((220-(Math.max(15,Math.min(28,s??21))-15)/13*220)/360,.85,.55);a.length&&Bi(t.sprite,a.join(" \xB7 "),s!=null?"#"+l.getHexString():"#19e6ff"),t.sprite.visible=this.showClimate&&a.length>0,this.heatmap&&s!=null?(t.mat.color.copy(l).multiplyScalar(.35),t.mat.emissive.copy(l),t.mat.emissiveIntensity=.6):(t.mat.color.copy(t.base.color),t.mat.emissive.copy(t.base.emissive),t.mat.emissiveIntensity=t.base.ei)}init3D(){this.scene=new mo,this.camera=new Fe(50,1,.1,400),this.camera.position.set(14,14,18),this.renderer=new fo({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.viewEl.prepend(this.renderer.domElement),this.controls=new Oo(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI/2.02,this.controls.addEventListener("start",()=>{this._fly=null}),this.ambient=new Ao(8425664,.9),this.scene.add(this.ambient),this.sunLight=new To(16777215,.7),this.sunLight.position.set(5,18,8),this.scene.add(this.sunLight),this.labelRenderer=new ko({element:this.$("#labels")}),this.world=new ie,this.scene.add(this.world),this.ray=new Ro;let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",r=>{e={x:r.clientX,y:r.clientY,t:Date.now()}}),t.addEventListener("pointerup",r=>{if(!e)return;let o=Math.hypot(r.clientX-e.x,r.clientY-e.y)>5,a=Date.now()-e.t>500;e=null,o||this.pick3D(r,a)});let n=performance.now()/1e3,s=()=>{this._raf=requestAnimationFrame(s),this.controls.update();let r=performance.now()/1e3,o=Math.min(.1,r-n);if(n=r,this._fly){let a=this._fly;a.t=Math.min(1,a.t+o/.8);let l=a.t*a.t*(3-2*a.t);this.camera.position.lerpVectors(a.p0,a.p1,l),this.controls.target.lerpVectors(a.t0,a.t1,l),a.t>=1&&(this._fly=null)}this.dyn.forEach(a=>{a.pulse&&a.on&&a.glow.scale.setScalar(a.baseScale*(1+.05*Math.sin(r*3)))}),this.features.forEach(a=>{a.on&&a.tick(o,r)}),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)};s()}resize(){let t=this.viewEl.clientWidth,e=this.viewEl.clientHeight;t&&e&&(this.renderer.setSize(t,e,!1),this.labelRenderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix());let n=this.edCanvas;n.clientWidth&&(n.width=n.clientWidth*devicePixelRatio,n.height=n.clientHeight*devicePixelRatio,this.draw2D())}extent(){let t=this.plan.floors.flatMap(e=>e.rooms.flatMap(n=>n.points));return this.showSite&&(this.plan.site?.buildings||[]).forEach(e=>e.visible!==!1&&t.push(...e.points)),t.length?ui(t):null}fit(){let t=this.extent();if(!t)return;let[e,n,s,r]=t,o=(e+s)/2,a=(n+r)/2,l=Math.max(s-e,r-n,4),c=wn(this.plan,this.plan.floors.length-1)/2;this.controls.target.set(o,c/2,a),this.camera.position.set(o+l*.55,c+l*.75,a+l*.95),this.cam2={x:o,z:a,s:Math.max(8,Math.min(120,500/l))}}flyToFloor(t){if(!this.camera||!this.controls)return;let e;if(t==null){let d=this.extent();if(!d)return;e=[[d[0],d[1]],[d[2],d[3]]]}else if(e=this.plan.floors[t]?.rooms.flatMap(f=>f.points),!e?.length)return;let[n,s,r,o]=ui(e),a=Math.max(r-n,o-s,4),l=t==null?wn(this.plan,this.plan.floors.length-1)/2:wn(this.plan,t)+(this.plan.floors[t].height||2.6)/2,c=new L((n+r)/2,Math.max(0,l),(s+o)/2),h=this.camera.position.clone().sub(this.controls.target);h.lengthSq()<1e-6&&h.set(.55,.75,.95),h.normalize(),h.y<.35&&(h.y=.35,h.normalize());let u=a*(t==null?1.35:1.15)+3;this._fly={t:0,p0:this.camera.position.clone(),p1:c.clone().addScaledVector(h,u),t0:this.controls.target.clone(),t1:c}}rebuild3D(){if(!this.world)return;this.features.forEach(a=>a.dispose()),this.$("#labels")?.replaceChildren(),this.world.traverse(a=>{a.geometry?.dispose(),a.material&&!a.material.map&&a.material.dispose?.()}),this.world.clear();let t=ki[this.theme]||ki.neon;this.scene.background=new Rt(t.bg),this.scene.fog=new po(t.bg,60,160);let e=this.editing||this.cut?this.fi:1/0,n=Ud(this.plan,{theme:this.theme,maxFloor:e,showRoof:this.showRoof,showSite:this.showSite,devicesFor:a=>this.deviceList(a),climateFor:a=>this.climateFor(a),glowTex:()=>this.glowTex(),label:(a,l)=>this.label(a,l)});this.world.add(n.root),this.dyn=n.dyn,this.pickables=n.pickables,this.anchors=n.anchors,this.features.forEach(a=>{a.group=new ie,a.on=this.fxOn(a.id),a.group.visible=a.on,this.world.add(a.group),a.build(n.anchors)});let s=this.dyn.some(a=>a.kind==="roomclimate"),r=this.features.map(a=>a.available()?"1":"0").join("");(s!==this.hasClimate||r!==this._fxSig)&&(this.hasClimate=s,this._fxSig=r,this.renderBar());let o=this.extent();if(o){let a=new Co(120,120,this.theme==="day"?12108502:1912919,this.theme==="day"?13620966:1055798);a.position.set((o[0]+o[2])/2,this.plan.site?.groundY!=null?this.plan.site.groundY-.02:Math.min(0,wn(this.plan,0))-(this.plan.settings.slab??.18)-.02,(o[1]+o[3])/2),this.world.add(a)}this.updateStates()}glowTex(){if(this._glow)return this._glow;let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this._glow=new Be(t)}label(t,e){let n=e+"|"+t,s=this._labels.get(n);if(!s){let o=document.createElement("canvas");o.width=384,o.height=64;let a=o.getContext("2d");a.font="bold 30px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle=ki[e]?.text||"#dfe8ff",a.shadowColor=ki[e]?.glow||"#19e6ff",a.shadowBlur=8,a.fillText(t,192,32,370),s=new Be(o),this._labels.set(n,s)}let r=new Ut(new qn(3,.5),new Ue({map:s,transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=5,r}updateStates(){let t=this.getStates();if(t){this.features.forEach(e=>{e.on&&e.update(t)});for(let e of this.dyn){if(e.kind==="roomclimate"){this.updateClimate(e);continue}let n=t[e.entity];if(!n)continue;let s=!xy.includes(n.state);if(e.on=s,e.kind==="opening"){let r=["on","open","opening","tilted"].includes(n.state);e.pivot&&(e.pivot.rotation.y=r?e.sign*e.maxAngle:0),e.mat&&(e.mat.emissiveIntensity=r?1.2:.5,e.mat.opacity=r?.35:e.type==="door"?.75:.35)}else if(e.kind==="value"){let r=parseFloat(n.state);if(Number.isNaN(r)){e.sprite.visible=!1;continue}let o=n.attributes.unit_of_measurement||"",a=o==="W"&&Math.abs(r)>=1e3?`${(r/1e3).toFixed(2)} kW`:`${Math.round(r*10)/10} ${o}`;Bi(e.sprite,a);let l=this.features.some(c=>c.id==="energy"&&c.on&&c.available())&&this.holo;e.sprite.visible=!l&&(e.always||Math.abs(r)>5)}else if(e.kind==="solar"){let r=parseFloat(n.state)||0;e.mat.emissiveIntensity=.15+Math.min(1,r/e.wp)*1.2}else if(e.kind==="furniture")e.glow.visible=s,e.mats.forEach(r=>r.emissiveIntensity=s?.9:.18);else if(e.kind==="camera")e.glow.visible=!1,e.mesh.material.emissive.setHex(n.state==="unavailable"?0:1697535),e.mesh.material.emissiveIntensity=.55;else{let r=new Rt(16765066),o=n.attributes;o.rgb_color?r=new Rt(`rgb(${o.rgb_color.join(",")})`):e.kind!=="light"&&(r=new Rt(1697535));let a=o.brightness!=null?o.brightness/255:1;e.glow.visible=s,e.glow.material.color.copy(r),e.glow.material.opacity=.3+.7*a,e.mesh.material.emissive.copy(s?r:new Rt(0)),e.mesh.material.emissiveIntensity=s?.4+a:0}}}}pick3D(t,e){let n=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new K((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.camera);let s=this.ray.intersectObjects(this.pickables,!1)[0];if(!s){!this.editing&&this.panelRoom&&(this.panelRoom=null,this.$("#side").classList.add("hidden"));return}let r=s.object.userData;if(!(!this.editing&&this.features.some(o=>o.on&&(e?o.onLongPress(r,t):o.onTap(r,t)))))if(r.entity){if(e||this.editing)return this.moreInfo(r.entity);let o=ze(r.entity);["light","switch","input_boolean","fan"].includes(o)?this._hass.callService("homeassistant","toggle",{entity_id:r.entity}):o==="cover"?this._hass.callService("cover","toggle",{entity_id:r.entity}):o==="lock"?this._hass.callService("lock",this._hass.states[r.entity]?.state==="locked"?"unlock":"lock",{entity_id:r.entity}):this.moreInfo(r.entity)}else r.room&&!this.editing&&(this.panelRoom=r.room,this.renderRoomPanel())}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}renderRoomPanel(){let t=this.$("#side"),e=this.plan.floors.find(c=>c.rooms.some(h=>h.id===this.panelRoom)),n=e?.rooms.find(c=>c.id===this.panelRoom);if(!n)return;t.classList.remove("hidden");let s=this._hass.states,r=this.deviceList(e).filter(c=>rn([c.x,c.z],n.points)),o=this.climateFor(n),a=(c,h)=>c&&s[c]&&s[c].state!=="unavailable"?`${s[c].state}${h}`:null,l=[a(o.temperature," \xB0C"),a(o.humidity," %"),a(o.co2," ppm")].filter(Boolean).join(" \xB7 ");t.innerHTML=`<b>${an(n.name)}</b>${l?`<div style="opacity:.8;margin:4px 0 6px">${l}</div>`:""}${r.length?"":"<p style='opacity:.6'>Keine Ger\xE4te</p>"}`,r.forEach(c=>{let h=s[c.entity];if(!h)return;let u=document.createElement("div"),d=h.state==="on"||h.state==="open";if(u.className="dev"+(d?" on":""),u.innerHTML=`<div><b>${an(c.name||h.attributes.friendly_name||c.entity)}</b><br><span class="s">${an(h.state)}</span></div>`,ze(c.entity)==="light"){let f=document.createElement("input");f.type="range",f.min=1,f.max=255,f.style.width="70px",f.value=h.attributes.brightness||(d?255:1),f.onclick=p=>p.stopPropagation(),f.onchange=()=>this._hass.callService("light","turn_on",{entity_id:c.entity,brightness:+f.value}),u.append(f)}u.onclick=()=>["light","switch","input_boolean","fan"].includes(ze(c.entity))?this._hass.callService("homeassistant","toggle",{entity_id:c.entity}):this.moreInfo(c.entity),u.oncontextmenu=f=>{f.preventDefault(),this.moreInfo(c.entity)},t.append(u)})}initEditor(){let t=this.edCanvas;this.mouse=[0,0];let e=l=>[(l[0]-this.cam2.x)*this.cam2.s+t.width/2,(l[1]-this.cam2.z)*this.cam2.s+t.height/2],n=(l,c)=>[(l*devicePixelRatio-t.width/2)/this.cam2.s+this.cam2.x,(c*devicePixelRatio-t.height/2)/this.cam2.s+this.cam2.z];this.w2s=e;let s=l=>{let c=t.getBoundingClientRect();return[l.clientX-c.left,l.clientY-c.top]},r=(l,c=!0)=>{let h=n(...s(l));return c&&!l.altKey?[rr(h[0],this.grid),rr(h[1],this.grid)]:h},o=null,a=null;t.addEventListener("wheel",l=>{l.preventDefault();let c=n(...s(l));this.cam2.s=Math.max(5,Math.min(250,this.cam2.s*(l.deltaY<0?1.12:.89)));let h=n(...s(l));this.cam2.x+=c[0]-h[0],this.cam2.z+=c[1]-h[1],this.draw2D()},{passive:!1}),t.addEventListener("pointerdown",l=>{if(t.setPointerCapture(l.pointerId),t.focus(),l.button===1||l.button===2){a={x:l.clientX,y:l.clientY,cx:this.cam2.x,cz:this.cam2.z};return}let c=r(l),h=r(l,!1),u=this.floor,d=this.tool;if(d==="select"){let f=this.hit2D(h);if(l.shiftKey&&f){let p=this.multi.length?this.multi:this.sel?[this.sel]:[];this.multi=p.some(_=>_.id===f.id)?p.filter(_=>_.id!==f.id):[...p,f],this.sel=this.multi.length===1?this.multi[0]:null}else if(f){let p=this.multi.length>1&&this.multi.some(g=>g.id===f.id);p||(this.multi=[],this.sel=f),o={items:(p?this.multi:[f]).map(g=>({hit:g,orig:this.snapshotFor(g)})),start:c,undone:!1}}else this.sel=null,this.multi=[],o={marquee:h};this.renderSide(),this.draw2D()}else if(d==="erase"){let f=this.hit2D(h);f&&this.deleteHits([f])}else if(d==="rect"||d==="building")o={rect:c};else if(d==="room")this.draft.length>2&&Math.hypot(c[0]-this.draft[0][0],c[1]-this.draft[0][1])<.01?this.finishRoom():this.draft.push(c);else if(d==="wall")this.draft.length?(this.pushUndo(),u.walls.push({id:on(),a:this.draft[0],b:c,t:null,h:null}),this.draft=[c],this.changed()):this.draft=[c];else if(d==="door"||d==="window")this.placeOpening(h,d);else if(d==="furn"){this.pushUndo();let[f,p,_]=Bd[this.furnType]||[.6,.6,.8],g={id:on(),type:this.furnType,x:c[0],z:c[1],rot:0,w:f,d:p,h:_};u.furniture.push(g),this.sel={kind:"furniture",id:g.id},this.changed({side:!0})}else if(d==="device"){if(!this.pendingEntity){this.hint("Erst eine Entit\xE4t im rechten Panel eingeben");return}this.pushUndo();let f={id:on(),entity:this.pendingEntity,x:c[0],z:c[1]};u.devices.push(f),this.sel={kind:"device",id:f.id},this.changed({side:!0})}this.draw2D()}),t.addEventListener("pointermove",l=>{this.mouse=r(l),a?(this.cam2.x=a.cx-(l.clientX-a.x)*devicePixelRatio/this.cam2.s,this.cam2.z=a.cz-(l.clientY-a.y)*devicePixelRatio/this.cam2.s):o?.rect?(o.cur=this.mouse,this.rectPrev=[o.rect,this.mouse]):o?.marquee?this.marquee=[o.marquee,r(l,!1)]:o?.items&&(o.undone||(this.pushUndo(),o.undone=!0,this.pinAutos(o)),this.moveItems(o,this.mouse,r(l,!1))),this.draw2D()}),t.addEventListener("pointerup",()=>{if(o?.rect&&o.cur){let[l,c]=[o.rect,o.cur];if(Math.abs(l[0]-c[0])>=this.grid&&Math.abs(l[1]-c[1])>=this.grid){this.pushUndo();let h=[[l[0],l[1]],[c[0],l[1]],[c[0],c[1]],[l[0],c[1]]];if(this.tool==="building"){this.plan.site=this.plan.site||{buildings:[]};let u=Cd(h,this.plan.site.buildings.length+1);this.plan.site.buildings.push(u),this.showSite=!0,this.sel={kind:"site",id:u.id}}else{let u={id:on(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:h};this.floor.rooms.push(u),this.sel={kind:"room",id:u.id}}this.tool="select",this.renderBar(),this.changed({side:!0})}}else if(o?.marquee&&this.marquee){let[l,c]=this.marquee;Math.hypot(c[0]-l[0],c[1]-l[1])*this.cam2.s/devicePixelRatio>6&&(this.selectInRect(l,c),this.renderSide())}else o?.items&&this.rebuild3D();o=null,a=null,this.rectPrev=null,this.marquee=null,this.draw2D()}),t.addEventListener("dblclick",()=>{this.tool==="room"?(this.draft.pop(),this.finishRoom()):this.tool==="wall"&&(this.draft=[])}),t.addEventListener("contextmenu",l=>l.preventDefault()),t.tabIndex=0,t.addEventListener("keydown",l=>{l.key==="Escape"&&(this.draft=[],this.draw2D()),(l.key==="Delete"||l.key==="Backspace")&&(this.multi.length||this.sel)&&this.deleteHits(this.multi.length>1?this.multi:[this.sel]),(l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="z"&&(l.preventDefault(),this.undo())})}finishRoom(){if(this.draft.length>=3){this.pushUndo();let t={id:on(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:this.draft};this.floor.rooms.push(t),this.sel={kind:"room",id:t.id},this.tool="select",this.renderBar(),this.changed({side:!0})}this.draft=[],this.draw2D()}segs(){return ia(this.floor,this.plan.settings)}nearestWall(t,e=.6){let n=null;for(let s of this.segs()){let r=Es(t,s.a,s.b);r.d<e+s.t/2&&(!n||r.d<n.d)&&(n={...r,s})}return n}placeOpening(t,e){let n=this.nearestWall(t);if(!n){this.hint("N\xE4her an eine Wand klicken");return}this.pushUndo();let r=rr(n.t*n.s.len,.05)/n.s.len,o={id:on(),type:e,x:+(n.s.a[0]+(n.s.b[0]-n.s.a[0])*r).toFixed(3),z:+(n.s.a[1]+(n.s.b[1]-n.s.a[1])*r).toFixed(3),rot:n.s.rot,w:e==="door"?.9:1.2,h:e==="door"?2.1:1.3,sill:e==="door"?0:.9,hinge:"left",swing:"in"};this.pendingEntity&&ze(this.pendingEntity)!=="light"&&(o.entity=this.pendingEntity),this.floor.openings.push(o),this.sel={kind:"opening",id:o.id},this.changed({side:!0})}hit2D(t){let e=this.floor,n=12/this.cam2.s;for(let s of this.deviceList(e))if(Math.hypot(t[0]-s.x,t[1]-s.z)<n)return{kind:"device",id:s.id};for(let s of e.openings)if(Math.hypot(t[0]-s.x,t[1]-s.z)<Math.max(n,s.w/2))return{kind:"opening",id:s.id};for(let s of[...e.furniture].reverse()){let r=t[0]-s.x,o=t[1]-s.z,a=ve(s.rot||0),l=r*Math.cos(a)+o*Math.sin(a),c=-r*Math.sin(a)+o*Math.cos(a);if(Math.abs(l)<=(s.w||.5)/2&&Math.abs(c)<=(s.d||.5)/2)return{kind:"furniture",id:s.id}}for(let s of e.rooms){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"room",id:s.id,vertex:r}}if(this.showSite)for(let s of this.plan.site?.buildings||[]){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"site",id:s.id,vertex:r}}for(let s of e.walls)if(Es(t,s.a,s.b).d<n)return{kind:"wall",id:s.id};for(let s of[...e.rooms].reverse())if(rn(t,s.points))return{kind:"room",id:s.id};if(this.showSite){for(let s of this.plan.site?.buildings||[])if(rn(t,s.points))return{kind:"site",id:s.id}}return null}itemOf(t){let e=this.floor,s={room:e.rooms,wall:e.walls,device:e.devices,opening:e.openings,furniture:e.furniture,site:this.plan.site?.buildings||[]}[t.kind]?.find(r=>r.id===t.id);return!s&&t.kind==="device"&&String(t.id).startsWith("auto:")?this.deviceList(e).find(r=>r.id===t.id):s}isSel(t){return this.sel?.id===t||this.multi.some(e=>e.id===t)}isAuto(t){return t?.kind==="device"&&String(t.id).startsWith("auto:")}hideEntity(t){let e=this.plan.settings.hiddenEntities||=[];e.includes(t)||e.push(t)}isAutoCandidate(t){let e=this._hass,n=e?.entities?.[t];if(!n||!Fd.includes(ze(t)))return!1;let s=n.area_id||e.devices?.[n.device_id]?.area_id;return!!s&&this.plan.floors.some(r=>r.rooms.some(o=>o.area===s&&o.autoDevices!==!1))}pinAutos(t){let e=t.items.map(n=>this.isAuto(n.hit)?this.itemOf(n.hit):null);t.items.forEach((n,s)=>{if(!e[s])return;let r={id:on(),entity:e[s].entity,x:e[s].x,z:e[s].z};this.floor.devices.push(r);let o=n.hit.id;n.hit={kind:"device",id:r.id},n.orig=[r.x,r.z],this.sel?.id===o&&(this.sel=n.hit),this.multi=this.multi.map(a=>a.id===o?n.hit:a)})}selectInRect(t,e){let n=this.floor,[s,r]=[Math.min(t[0],e[0]),Math.max(t[0],e[0])],[o,a]=[Math.min(t[1],e[1]),Math.max(t[1],e[1])],l=(h,u)=>h>=s&&h<=r&&u>=o&&u<=a,c=[];this.deviceList(n).forEach(h=>l(h.x,h.z)&&c.push({kind:"device",id:h.id})),this.multi=c,this.sel=c.length===1?c[0]:null}snapshotFor(t){let e=this.itemOf(t);return t.kind==="room"||t.kind==="site"?Vo(e.points):t.kind==="wall"?Vo([e.a,e.b]):[e.x,e.z]}moveItems(t,e,n){t.items.forEach(s=>this.moveOne(s.hit,s.orig,t.start,e,n))}moveOne(t,e,n,s,r){let o=this.itemOf(t);if(!o)return;let a=s[0]-n[0],l=s[1]-n[1];if(t.kind==="room"||t.kind==="site")o.points=e.map((c,h)=>t.vertex!=null?h===t.vertex?[e[h][0]+a,e[h][1]+l]:c:[c[0]+a,c[1]+l]);else if(t.kind==="wall")o.a=[e[0][0]+a,e[0][1]+l],o.b=[e[1][0]+a,e[1][1]+l];else if(t.kind==="opening"){let c=this.nearestWall(r);if(c){let h=rr(c.t*c.s.len,.05),u=h/c.s.len;o.x=c.s.a[0]+(c.s.b[0]-c.s.a[0])*u,o.z=c.s.a[1]+(c.s.b[1]-c.s.a[1])*u,o.rot=c.s.rot}}else o.x=e[0]+a,o.z=e[1]+l}deleteHits(t){t.length&&(this.pushUndo(),t.forEach(e=>this.deleteOne(e)),this.sel=null,this.multi=[],this.changed({side:!0}))}deleteOne(t){let e=this.floor;if(t.kind==="room"&&t.vertex!=null&&this.tool==="erase"){let n=e.rooms.find(s=>s.id===t.id);if(n.points.length>3){n.points.splice(t.vertex,1);return}}if(t.kind==="device"){let n=this.itemOf(t);if(!n)return;this.isAuto(t)||(e.devices=e.devices.filter(s=>s.id!==t.id)),(this.isAuto(t)||this.isAutoCandidate(n.entity))&&this.hideEntity(n.entity)}else if(t.kind==="site")this.plan.site.buildings=this.plan.site.buildings.filter(n=>n.id!==t.id);else{let n={room:"rooms",wall:"walls",opening:"openings",furniture:"furniture"}[t.kind];e[n]=e[n].filter(s=>s.id!==t.id)}}draw2D(){if(!this.editing)return;let t=this.edCanvas,e=t.getContext("2d"),n=this.cam2.s,s=this.w2s,r=this.floor,o=devicePixelRatio;e.clearRect(0,0,t.width,t.height),e.fillStyle="#0a0d1a",e.fillRect(0,0,t.width,t.height);let a=[this.cam2.x-t.width/2/n,this.cam2.z-t.height/2/n],l=[this.cam2.x+t.width/2/n,this.cam2.z+t.height/2/n];e.lineWidth=1;for(let u=Math.floor(a[0]);u<=l[0];u++){let d=s([u,0])[0];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(d,0),e.lineTo(d,t.height),e.stroke()}for(let u=Math.floor(a[1]);u<=l[1];u++){let d=s([0,u])[1];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(0,d),e.lineTo(t.width,d),e.stroke()}this.showSite&&(e.setLineDash([8*o,5*o]),(this.plan.site?.buildings||[]).forEach(u=>{if(u.visible===!1)return;let d=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle="rgba(255,179,71,.08)",e.fill(),e.strokeStyle=d?"#fff":"#ffb347",e.lineWidth=(d?3:2)*o,e.stroke();let f=this.w2s(vn(u.points));if(e.fillStyle="#ffb347",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${Go(u.points).toFixed(0)} m\xB2${u.levels>1?`, ${u.levels} Geschosse`:""})`,f[0],f[1]),d&&u.points.forEach(p=>{let _=this.w2s(p);e.fillStyle="#fff",e.fillRect(_[0]-4*o,_[1]-4*o,8*o,8*o)}),(u.openings||[]).forEach(p=>{let _=ve(p.rot||0),g=(p.w||1.1)/2,m=this.w2s([p.x-Math.cos(_)*g,p.z-Math.sin(_)*g]),v=this.w2s([p.x+Math.cos(_)*g,p.z+Math.sin(_)*g]);e.save(),e.setLineDash([]),e.strokeStyle="#ff2bd6",e.lineWidth=4*o,e.beginPath(),e.moveTo(...m),e.lineTo(...v),e.stroke(),e.restore()}),(u.balconies||[]).forEach(p=>{if(!p.points?.length)return;this.path(e,p.points,!0),e.fillStyle="rgba(255,179,71,.18)",e.fill(),e.strokeStyle="#ffb347",e.lineWidth=o,e.stroke();let _=this.w2s(vn(p.points));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText(p.name||"Balkon",_[0],_[1])}),u.roof?.type==="shed"){let p=lr(u.points,u.roof,this.plan.site?.north??0);e.setLineDash([]),e.strokeStyle="#ffb347",e.lineWidth=o,(ea(p.L,u)||[]).forEach(g=>{let m=g.type==="carport",v=m?g.stalls:1;for(let y=0;y<=v;y++){let x=g.t0+y*(g.t1-g.t0)/v,T=s(Kn(p,p.tToU(x),-p.W/2)),E=s(Kn(p,p.tToU(x),p.W/2));e.beginPath(),e.moveTo(...T),e.lineTo(...E),e.stroke()}if(g.type==="garage"||g.type==="bike"){let y=Qo({side:g.doorSide,pt:g,f:p,W:p.W,hLow:u.height||2.8,bike:g.type==="bike",width:g.door}),x=y.sx>y.sz?[y.sx/2,0]:[0,y.sz/2],T=s(Kn(p,y.x-x[0],y.z-x[1])),E=s(Kn(p,y.x+x[0],y.z+x[1]));e.strokeStyle="#ff2bd6",e.lineWidth=3*o,e.beginPath(),e.moveTo(...T),e.lineTo(...E),e.stroke(),e.strokeStyle="#ffb347",e.lineWidth=o}if(d){e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center";let y=(x,T,E)=>{let C=s(Kn(p,p.tToU(T),E));e.fillText(x,C[0],C[1])};m?ta(g,g.numberFrom).forEach(x=>y(String(x.n),x.t,p.W*.3)):y(g.name||Rs[g.type]||"",(g.t0+g.t1)/2,p.W*.3)}});let _=s(Kn(p,0,-p.W/2+.25));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText("\u25B2 hoch",_[0],_[1]),e.setLineDash([8*o,5*o])}}),(this.plan.site?.decks||[]).forEach(u=>{if(!u.points?.length)return;this.path(e,u.points,!0),e.fillStyle="rgba(255,179,71,.18)",e.fill(),e.setLineDash([]),e.strokeStyle="#ffb347",e.lineWidth=o,e.stroke();let d=this.w2s(vn(u.points));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText(u.name||"Terrasse",d[0],d[1])}),(this.plan.site?.gates||[]).forEach(u=>{if(!u.a||!u.b)return;let d=this.w2s(u.a),f=this.w2s(u.b);e.save(),e.setLineDash([]),e.strokeStyle="#9aa5c0",e.lineWidth=4*o,e.beginPath(),e.moveTo(...d),e.lineTo(...f),e.stroke(),e.restore(),e.fillStyle="#9aa5c0",e.font=`${10*o}px sans-serif`,e.textAlign="left",e.fillText(u.name||"Tor",d[0]+6*o,(d[1]+f[1])/2)}),this.plan.site?.cadastreHouse&&(this.path(e,this.plan.site.cadastreHouse,!0),e.strokeStyle="#3ddc84",e.lineWidth=1.5*o,e.stroke()),e.setLineDash([]));let c=this.plan.floors[this.fi-1];if(c&&(e.strokeStyle="#2b3558",e.lineWidth=o,c.rooms.forEach(u=>{this.path(e,u.points,!0),e.stroke()})),r.rooms.forEach(u=>{let d=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle=(u.color||"#19e6ff")+"22",e.fill(),e.strokeStyle=d?"#fff":u.color||"#19e6ff",e.lineWidth=(d?3:1.5)*o,e.shadowColor=u.color||"#19e6ff",e.shadowBlur=d?8:0,e.stroke(),e.shadowBlur=0,d&&u.points.forEach(p=>{let _=s(p);e.fillStyle="#fff",e.fillRect(_[0]-4*o,_[1]-4*o,8*o,8*o)});let f=s(vn(u.points));e.fillStyle="#dfe8ff",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${Go(u.points).toFixed(1)} m\xB2)`,f[0],f[1])}),this.segs().forEach(u=>{let d=u.ids.includes(this.sel?.id);e.strokeStyle=d?"#fff":u.free?"#ff9a3c":"#6b7bb0",e.lineWidth=Math.max(2*o,u.t*n),e.globalAlpha=.75,e.beginPath(),e.moveTo(...s(u.a)),e.lineTo(...s(u.b)),e.stroke(),e.globalAlpha=1}),r.openings.forEach(u=>{let d=s([u.x,u.z]),f=u.w/2*n;if(e.save(),e.translate(...d),e.rotate(-(u.rot||0)),e.fillStyle=u.type==="door"?"#ff2bd6":"#6fa8ff",e.fillRect(-f,-3*o,f*2,6*o),u.type==="door"&&u.style!=="passage"){let p=u.hinge==="right"?f:-f,_=u.swing==="out"?-1:1;e.strokeStyle="#ff2bd6",e.lineWidth=o,e.beginPath(),e.moveTo(p,0),e.lineTo(p,_*u.w*n),e.arc(p,0,u.w*n,_*Math.PI/2,u.hinge==="right"?_>0?Math.PI:-Math.PI:0,u.hinge==="right"?_<0:_>0),e.stroke()}this.isSel(u.id)&&(e.strokeStyle="#fff",e.lineWidth=2*o,e.strokeRect(-f,-6*o,f*2,12*o)),e.restore()}),r.furniture.forEach(u=>{let d=Wo(u).map(s);if(e.beginPath(),d.forEach((f,p)=>p?e.lineTo(...f):e.moveTo(...f)),e.closePath(),e.fillStyle=u.type==="rug"?"rgba(143,107,179,.25)":"rgba(224,176,128,.28)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#e0b080",e.lineWidth=(this.isSel(u.id)?2.5:1)*o,e.stroke(),n>25){let f=s([u.x,u.z]);e.fillStyle="#e8d5bd",e.font=`${9*o}px sans-serif`,e.textAlign="center",e.fillText(u.name||u.type,f[0],f[1]+3*o)}}),this.deviceList(r).forEach(u=>{let d=s([u.x,u.z]);if(ze(u.entity)==="camera"){let f=Yo(u.x,u.z,u.rot??0,u.fov??90,u.reach??7).map(s);e.beginPath(),f.forEach((p,_)=>_?e.lineTo(...p):e.moveTo(...p)),e.closePath(),e.fillStyle="rgba(25,230,255,.12)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"rgba(25,230,255,.7)",e.lineWidth=o,e.stroke()}e.beginPath(),e.arc(d[0],d[1],6*o,0,7),e.fillStyle=u.explicit?"#ffd08a":"#88889a",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#000",e.lineWidth=(this.isSel(u.id)?3:2)*o,e.stroke(),n>25&&(e.fillStyle="#cdd6f4",e.font=`${9*o}px sans-serif`,e.textAlign="left",e.fillText(u.name||u.entity.split(".")[1]||u.entity,d[0]+9*o,d[1]+3*o))}),this.draft.length&&(e.strokeStyle="#fff",e.setLineDash([6,4]),e.lineWidth=2*o,this.path(e,[...this.draft,this.mouse],!1),e.stroke(),e.setLineDash([]),this.tool==="wall"&&this.dim(e,this.draft[0],this.mouse)),this.marquee){let[u,d]=this.marquee.map(s);e.fillStyle="rgba(25,230,255,.08)",e.fillRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.strokeStyle="#19e6ff",e.setLineDash([5,4]),e.lineWidth=o,e.strokeRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.setLineDash([])}if(this.rectPrev){let[u,d]=this.rectPrev.map(s);e.strokeStyle="#fff",e.setLineDash([6,4]),e.strokeRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.setLineDash([]),this.dim(e,this.rectPrev[0],this.rectPrev[1])}let h=s(this.mouse);e.fillStyle="#19e6ff",e.fillRect(h[0]-3,h[1]-3,6,6)}dim(t,e,n){let s=this.w2s([(e[0]+n[0])/2,(e[1]+n[1])/2]);t.fillStyle="#fff",t.font=`${12*devicePixelRatio}px sans-serif`,t.textAlign="left",t.fillText(Math.abs(n[0]-e[0]).toFixed(2)+" \xD7 "+Math.abs(n[1]-e[1]).toFixed(2)+" m",s[0]+6,s[1]-6)}path(t,e,n){t.beginPath(),e.forEach((s,r)=>{let o=this.w2s(s);r?t.lineTo(...o):t.moveTo(...o)}),n&&t.closePath()}};customElements.get("homeplan3d-view")||customElements.define("homeplan3d-view",Oc);var Fc=class extends HTMLElement{set hass(t){this._h=t,this._v&&(this._v.hass=t)}set narrow(t){}set panel(t){}connectedCallback(){this.style.display="block",this.style.height="100vh",this._v=document.createElement("homeplan3d-view"),this._v.config={mode:"panel"},this._v.style.height="100%",this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-panel")||customElements.define("homeplan3d-panel",Fc);var kc=class extends HTMLElement{setConfig(t){this._c={...t,mode:"card"},this._v&&(this._v.config=this._c)}set hass(t){this._h=t,this._v&&(this._v.hass=t)}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:8,min_rows:4}}static getStubConfig(){return{type:"custom:homeplan3d-card",height:450}}connectedCallback(){this._v=document.createElement("homeplan3d-view"),this._v.config=this._c||{mode:"card"},this._v.style.cssText=`display:block;height:${this._c?.height||450}px;border-radius:12px;overflow:hidden`,this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-card")||customElements.define("homeplan3d-card",kc);window.customCards=window.customCards||[];window.customCards.push({type:"homeplan3d-card",name:"Home Plan 3D",description:"3D-Grundriss mit Ger\xE4testeuerung"});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
