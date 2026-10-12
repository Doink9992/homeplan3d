var Yd=Object.create;var jc=Object.defineProperty;var Zd=Object.getOwnPropertyDescriptor;var Kd=Object.getOwnPropertyNames;var Jd=Object.getPrototypeOf,jd=Object.prototype.hasOwnProperty;var Qd=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var tf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Kd(t))!jd.call(i,s)&&s!==e&&jc(i,s,{get:()=>t[s],enumerable:!(n=Zd(t,s))||n.enumerable});return i};var ef=(i,t,e)=>(e=i!=null?Yd(Jd(i)):{},tf(t||!i||!i.__esModule?jc(e,"default",{value:i,enumerable:!0}):e,i));var Bd=Qd(($c,qc)=>{(function(i,t){typeof $c=="object"&&typeof qc<"u"?qc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})($c,function(){"use strict";function i(O,y){var b={label:0,sent:function(){if(I[0]&1)throw I[1];return I[1]},trys:[],ops:[]},E,R,I,X;return X={next:$(0),throw:$(1),return:$(2)},typeof Symbol=="function"&&(X[Symbol.iterator]=function(){return this}),X;function $(H){return function(V){return P([H,V])}}function P(H){if(E)throw new TypeError("Generator is already executing.");for(;b;)try{if(E=1,R&&(I=H[0]&2?R.return:H[0]?R.throw||((I=R.return)&&I.call(R),0):R.next)&&!(I=I.call(R,H[1])).done)return I;switch(R=0,I&&(H=[H[0]&2,I.value]),H[0]){case 0:case 1:I=H;break;case 4:return b.label++,{value:H[1],done:!1};case 5:b.label++,R=H[1],H=[0];continue;case 7:H=b.ops.pop(),b.trys.pop();continue;default:if(I=b.trys,!(I=I.length>0&&I[I.length-1])&&(H[0]===6||H[0]===2)){b=0;continue}if(H[0]===3&&(!I||H[1]>I[0]&&H[1]<I[3])){b.label=H[1];break}if(H[0]===6&&b.label<I[1]){b.label=I[1],I=H;break}if(I&&b.label<I[2]){b.label=I[2],b.ops.push(H);break}I[2]&&b.ops.pop(),b.trys.pop();continue}H=y.call(O,b)}catch(V){H=[6,V],R=0}finally{E=I=0}if(H[0]&5)throw H[1];return{value:H[0]?H[1]:void 0,done:!0}}}var t=function(){function O(y,b){this.next=null,this.key=y,this.data=b,this.left=null,this.right=null}return O}();function e(O,y){return O>y?1:O<y?-1:0}function n(O,y,b){for(var E=new t(null,null),R=E,I=E;;){var X=b(O,y.key);if(X<0){if(y.left===null)break;if(b(O,y.left.key)<0){var $=y.left;if(y.left=$.right,$.right=y,y=$,y.left===null)break}I.left=y,I=y,y=y.left}else if(X>0){if(y.right===null)break;if(b(O,y.right.key)>0){var $=y.right;if(y.right=$.left,$.left=y,y=$,y.right===null)break}R.right=y,R=y,y=y.right}else break}return R.right=y.left,I.left=y.right,y.left=E.right,y.right=E.left,y}function s(O,y,b,E){var R=new t(O,y);if(b===null)return R.left=R.right=null,R;b=n(O,b,E);var I=E(O,b.key);return I<0?(R.left=b.left,R.right=b,b.left=null):I>=0&&(R.right=b.right,R.left=b,b.right=null),R}function r(O,y,b){var E=null,R=null;if(y){y=n(O,y,b);var I=b(y.key,O);I===0?(E=y.left,R=y.right):I<0?(R=y.right,y.right=null,E=y):(E=y.left,y.left=null,R=y)}return{left:E,right:R}}function o(O,y,b){return y===null?O:(O===null||(y=n(O.key,y,b),y.left=O),y)}function a(O,y,b,E,R){if(O){E(""+y+(b?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+R(O)+`
`);var I=y+(b?"    ":"\u2502   ");O.left&&a(O.left,I,!1,E,R),O.right&&a(O.right,I,!0,E,R)}}var l=function(){function O(y){y===void 0&&(y=e),this._root=null,this._size=0,this._comparator=y}return O.prototype.insert=function(y,b){return this._size++,this._root=s(y,b,this._root,this._comparator)},O.prototype.add=function(y,b){var E=new t(y,b);this._root===null&&(E.left=E.right=null,this._size++,this._root=E);var R=this._comparator,I=n(y,this._root,R),X=R(y,I.key);return X===0?this._root=I:(X<0?(E.left=I.left,E.right=I,I.left=null):X>0&&(E.right=I.right,E.left=I,I.right=null),this._size++,this._root=E),this._root},O.prototype.remove=function(y){this._root=this._remove(y,this._root,this._comparator)},O.prototype._remove=function(y,b,E){var R;if(b===null)return null;b=n(y,b,E);var I=E(y,b.key);return I===0?(b.left===null?R=b.right:(R=n(y,b.left,E),R.right=b.right),this._size--,R):b},O.prototype.pop=function(){var y=this._root;if(y){for(;y.left;)y=y.left;return this._root=n(y.key,this._root,this._comparator),this._root=this._remove(y.key,this._root,this._comparator),{key:y.key,data:y.data}}return null},O.prototype.findStatic=function(y){for(var b=this._root,E=this._comparator;b;){var R=E(y,b.key);if(R===0)return b;R<0?b=b.left:b=b.right}return null},O.prototype.find=function(y){return this._root&&(this._root=n(y,this._root,this._comparator),this._comparator(y,this._root.key)!==0)?null:this._root},O.prototype.contains=function(y){for(var b=this._root,E=this._comparator;b;){var R=E(y,b.key);if(R===0)return!0;R<0?b=b.left:b=b.right}return!1},O.prototype.forEach=function(y,b){for(var E=this._root,R=[],I=!1;!I;)E!==null?(R.push(E),E=E.left):R.length!==0?(E=R.pop(),y.call(b,E),E=E.right):I=!0;return this},O.prototype.range=function(y,b,E,R){for(var I=[],X=this._comparator,$=this._root,P;I.length!==0||$;)if($)I.push($),$=$.left;else{if($=I.pop(),P=X($.key,b),P>0)break;if(X($.key,y)>=0&&E.call(R,$))return this;$=$.right}return this},O.prototype.keys=function(){var y=[];return this.forEach(function(b){var E=b.key;return y.push(E)}),y},O.prototype.values=function(){var y=[];return this.forEach(function(b){var E=b.data;return y.push(E)}),y},O.prototype.min=function(){return this._root?this.minNode(this._root).key:null},O.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},O.prototype.minNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.left;)y=y.left;return y},O.prototype.maxNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.right;)y=y.right;return y},O.prototype.at=function(y){for(var b=this._root,E=!1,R=0,I=[];!E;)if(b)I.push(b),b=b.left;else if(I.length>0){if(b=I.pop(),R===y)return b;R++,b=b.right}else E=!0;return null},O.prototype.next=function(y){var b=this._root,E=null;if(y.right){for(E=y.right;E.left;)E=E.left;return E}for(var R=this._comparator;b;){var I=R(y.key,b.key);if(I===0)break;I<0?(E=b,b=b.left):b=b.right}return E},O.prototype.prev=function(y){var b=this._root,E=null;if(y.left!==null){for(E=y.left;E.right;)E=E.right;return E}for(var R=this._comparator;b;){var I=R(y.key,b.key);if(I===0)break;I<0?b=b.left:(E=b,b=b.right)}return E},O.prototype.clear=function(){return this._root=null,this._size=0,this},O.prototype.toList=function(){return u(this._root)},O.prototype.load=function(y,b,E){b===void 0&&(b=[]),E===void 0&&(E=!1);var R=y.length,I=this._comparator;if(E&&p(y,b,0,R-1,I),this._root===null)this._root=c(y,b,0,R),this._size=R;else{var X=f(this.toList(),h(y,b),I);R=this._size+R,this._root=d({head:X},0,R)}return this},O.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(O.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(O.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),O.prototype.toString=function(y){y===void 0&&(y=function(E){return String(E.key)});var b=[];return a(this._root,"",!0,function(E){return b.push(E)},y),b.join("")},O.prototype.update=function(y,b,E){var R=this._comparator,I=r(y,this._root,R),X=I.left,$=I.right;R(y,b)<0?$=s(b,E,$,R):X=s(b,E,X,R),this._root=o(X,$,R)},O.prototype.split=function(y){return r(y,this._root,this._comparator)},O.prototype[Symbol.iterator]=function(){var y,b,E;return i(this,function(R){switch(R.label){case 0:y=this._root,b=[],E=!1,R.label=1;case 1:return E?[3,6]:y===null?[3,2]:(b.push(y),y=y.left,[3,5]);case 2:return b.length===0?[3,4]:(y=b.pop(),[4,y]);case 3:return R.sent(),y=y.right,[3,5];case 4:E=!0,R.label=5;case 5:return[3,1];case 6:return[2]}})},O}();function c(O,y,b,E){var R=E-b;if(R>0){var I=b+Math.floor(R/2),X=O[I],$=y[I],P=new t(X,$);return P.left=c(O,y,b,I),P.right=c(O,y,I+1,E),P}return null}function h(O,y){for(var b=new t(null,null),E=b,R=0;R<O.length;R++)E=E.next=new t(O[R],y[R]);return E.next=null,b.next}function u(O){for(var y=O,b=[],E=!1,R=new t(null,null),I=R;!E;)y?(b.push(y),y=y.left):b.length>0?(y=I=I.next=b.pop(),y=y.right):E=!0;return I.next=null,R.next}function d(O,y,b){var E=b-y;if(E>0){var R=y+Math.floor(E/2),I=d(O,y,R),X=O.head;return X.left=I,O.head=O.head.next,X.right=d(O,R+1,b),X}return null}function f(O,y,b){for(var E=new t(null,null),R=E,I=O,X=y;I!==null&&X!==null;)b(I.key,X.key)<0?(R.next=I,I=I.next):(R.next=X,X=X.next),R=R.next;return I!==null?R.next=I:X!==null&&(R.next=X),E.next}function p(O,y,b,E,R){if(!(b>=E)){for(var I=O[b+E>>1],X=b-1,$=E+1;;){do X++;while(R(O[X],I)<0);do $--;while(R(O[$],I)>0);if(X>=$)break;var P=O[X];O[X]=O[$],O[$]=P,P=y[X],y[X]=y[$],y[$]=P}p(O,y,b,$,R),p(O,y,$+1,E,R)}}let x=(O,y)=>O.ll.x<=y.x&&y.x<=O.ur.x&&O.ll.y<=y.y&&y.y<=O.ur.y,g=(O,y)=>{if(y.ur.x<O.ll.x||O.ur.x<y.ll.x||y.ur.y<O.ll.y||O.ur.y<y.ll.y)return null;let b=O.ll.x<y.ll.x?y.ll.x:O.ll.x,E=O.ur.x<y.ur.x?O.ur.x:y.ur.x,R=O.ll.y<y.ll.y?y.ll.y:O.ll.y,I=O.ur.y<y.ur.y?O.ur.y:y.ur.y;return{ll:{x:b,y:R},ur:{x:E,y:I}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let M=m*m,v=(O,y)=>{if(-m<O&&O<m&&-m<y&&y<m)return 0;let b=O-y;return b*b<M*O*y?0:O<y?-1:1};class _{constructor(){this.reset()}reset(){this.xRounder=new D,this.yRounder=new D}round(y,b){return{x:this.xRounder.round(y),y:this.yRounder.round(b)}}}class D{constructor(){this.tree=new l,this.round(0)}round(y){let b=this.tree.add(y),E=this.tree.prev(b);if(E!==null&&v(b.key,E.key)===0)return this.tree.remove(y),E.key;let R=this.tree.next(b);return R!==null&&v(b.key,R.key)===0?(this.tree.remove(y),R.key):y}}let C=new _,N=11102230246251565e-32,k=134217729,T=(3+8*N)*N;function w(O,y,b,E,R){let I,X,$,P,H=y[0],V=E[0],F=0,q=0;V>H==V>-H?(I=H,H=y[++F]):(I=V,V=E[++q]);let Q=0;if(F<O&&q<b)for(V>H==V>-H?(X=H+I,$=I-(X-H),H=y[++F]):(X=V+I,$=I-(X-V),V=E[++q]),I=X,$!==0&&(R[Q++]=$);F<O&&q<b;)V>H==V>-H?(X=I+H,P=X-I,$=I-(X-P)+(H-P),H=y[++F]):(X=I+V,P=X-I,$=I-(X-P)+(V-P),V=E[++q]),I=X,$!==0&&(R[Q++]=$);for(;F<O;)X=I+H,P=X-I,$=I-(X-P)+(H-P),H=y[++F],I=X,$!==0&&(R[Q++]=$);for(;q<b;)X=I+V,P=X-I,$=I-(X-P)+(V-P),V=E[++q],I=X,$!==0&&(R[Q++]=$);return(I!==0||Q===0)&&(R[Q++]=I),Q}function L(O,y){let b=y[0];for(let E=1;E<O;E++)b+=y[E];return b}function G(O){return new Float64Array(O)}let W=(3+16*N)*N,J=(2+12*N)*N,it=(9+64*N)*N*N,K=G(4),ot=G(8),tt=G(12),dt=G(16),ut=G(4);function wt(O,y,b,E,R,I,X){let $,P,H,V,F,q,Q,xt,Mt,Ht,St,Jt,fe,_e,Ce,xe,Fe,Pe,Ke=O-R,Be=b-R,Je=y-I,ze=E-I;_e=Ke*ze,q=k*Ke,Q=q-(q-Ke),xt=Ke-Q,q=k*ze,Mt=q-(q-ze),Ht=ze-Mt,Ce=xt*Ht-(_e-Q*Mt-xt*Mt-Q*Ht),xe=Je*Be,q=k*Je,Q=q-(q-Je),xt=Je-Q,q=k*Be,Mt=q-(q-Be),Ht=Be-Mt,Fe=xt*Ht-(xe-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,K[0]=Ce-(St+F)+(F-Fe),Jt=_e+St,F=Jt-_e,fe=_e-(Jt-F)+(St-F),St=fe-xe,F=fe-St,K[1]=fe-(St+F)+(F-xe),Pe=Jt+St,F=Pe-Jt,K[2]=Jt-(Pe-F)+(St-F),K[3]=Pe;let dn=L(4,K),ai=J*X;if(dn>=ai||-dn>=ai||(F=O-Ke,$=O-(Ke+F)+(F-R),F=b-Be,H=b-(Be+F)+(F-R),F=y-Je,P=y-(Je+F)+(F-I),F=E-ze,V=E-(ze+F)+(F-I),$===0&&P===0&&H===0&&V===0)||(ai=it*X+T*Math.abs(dn),dn+=Ke*V+ze*$-(Je*H+Be*P),dn>=ai||-dn>=ai))return dn;_e=$*ze,q=k*$,Q=q-(q-$),xt=$-Q,q=k*ze,Mt=q-(q-ze),Ht=ze-Mt,Ce=xt*Ht-(_e-Q*Mt-xt*Mt-Q*Ht),xe=P*Be,q=k*P,Q=q-(q-P),xt=P-Q,q=k*Be,Mt=q-(q-Be),Ht=Be-Mt,Fe=xt*Ht-(xe-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,ut[0]=Ce-(St+F)+(F-Fe),Jt=_e+St,F=Jt-_e,fe=_e-(Jt-F)+(St-F),St=fe-xe,F=fe-St,ut[1]=fe-(St+F)+(F-xe),Pe=Jt+St,F=Pe-Jt,ut[2]=Jt-(Pe-F)+(St-F),ut[3]=Pe;let da=w(4,K,4,ut,ot);_e=Ke*V,q=k*Ke,Q=q-(q-Ke),xt=Ke-Q,q=k*V,Mt=q-(q-V),Ht=V-Mt,Ce=xt*Ht-(_e-Q*Mt-xt*Mt-Q*Ht),xe=Je*H,q=k*Je,Q=q-(q-Je),xt=Je-Q,q=k*H,Mt=q-(q-H),Ht=H-Mt,Fe=xt*Ht-(xe-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,ut[0]=Ce-(St+F)+(F-Fe),Jt=_e+St,F=Jt-_e,fe=_e-(Jt-F)+(St-F),St=fe-xe,F=fe-St,ut[1]=fe-(St+F)+(F-xe),Pe=Jt+St,F=Pe-Jt,ut[2]=Jt-(Pe-F)+(St-F),ut[3]=Pe;let fa=w(da,ot,4,ut,tt);_e=$*V,q=k*$,Q=q-(q-$),xt=$-Q,q=k*V,Mt=q-(q-V),Ht=V-Mt,Ce=xt*Ht-(_e-Q*Mt-xt*Mt-Q*Ht),xe=P*H,q=k*P,Q=q-(q-P),xt=P-Q,q=k*H,Mt=q-(q-H),Ht=H-Mt,Fe=xt*Ht-(xe-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,ut[0]=Ce-(St+F)+(F-Fe),Jt=_e+St,F=Jt-_e,fe=_e-(Jt-F)+(St-F),St=fe-xe,F=fe-St,ut[1]=fe-(St+F)+(F-xe),Pe=Jt+St,F=Pe-Jt,ut[2]=Jt-(Pe-F)+(St-F),ut[3]=Pe;let pa=w(fa,tt,4,ut,dt);return dt[pa-1]}function Ft(O,y,b,E,R,I){let X=(y-I)*(b-R),$=(O-R)*(E-I),P=X-$,H=Math.abs(X+$);return Math.abs(P)>=W*H?P:-wt(O,y,b,E,R,I,H)}let Zt=(O,y)=>O.x*y.y-O.y*y.x,st=(O,y)=>O.x*y.x+O.y*y.y,pt=(O,y,b)=>{let E=Ft(O.x,O.y,y.x,y.y,b.x,b.y);return E>0?-1:E<0?1:0},Tt=O=>Math.sqrt(st(O,O)),mt=(O,y,b)=>{let E={x:y.x-O.x,y:y.y-O.y},R={x:b.x-O.x,y:b.y-O.y};return Zt(R,E)/Tt(R)/Tt(E)},kt=(O,y,b)=>{let E={x:y.x-O.x,y:y.y-O.y},R={x:b.x-O.x,y:b.y-O.y};return st(R,E)/Tt(R)/Tt(E)},Vt=(O,y,b)=>y.y===0?null:{x:O.x+y.x/y.y*(b-O.y),y:b},zt=(O,y,b)=>y.x===0?null:{x:b,y:O.y+y.y/y.x*(b-O.x)},Qt=(O,y,b,E)=>{if(y.x===0)return zt(b,E,O.x);if(E.x===0)return zt(O,y,b.x);if(y.y===0)return Vt(b,E,O.y);if(E.y===0)return Vt(O,y,b.y);let R=Zt(y,E);if(R==0)return null;let I={x:b.x-O.x,y:b.y-O.y},X=Zt(I,y)/R,$=Zt(I,E)/R,P=O.x+$*y.x,H=b.x+X*E.x,V=O.y+$*y.y,F=b.y+X*E.y,q=(P+H)/2,Q=(V+F)/2;return{x:q,y:Q}};class at{static compare(y,b){let E=at.comparePoints(y.point,b.point);return E!==0?E:(y.point!==b.point&&y.link(b),y.isLeft!==b.isLeft?y.isLeft?1:-1:B.compare(y.segment,b.segment))}static comparePoints(y,b){return y.x<b.x?-1:y.x>b.x?1:y.y<b.y?-1:y.y>b.y?1:0}constructor(y,b){y.events===void 0?y.events=[this]:y.events.push(this),this.point=y,this.isLeft=b}link(y){if(y.point===this.point)throw new Error("Tried to link already linked events");let b=y.point.events;for(let E=0,R=b.length;E<R;E++){let I=b[E];this.point.events.push(I),I.point=this.point}this.checkForConsuming()}checkForConsuming(){let y=this.point.events.length;for(let b=0;b<y;b++){let E=this.point.events[b];if(E.segment.consumedBy===void 0)for(let R=b+1;R<y;R++){let I=this.point.events[R];I.consumedBy===void 0&&E.otherSE.point.events===I.otherSE.point.events&&E.segment.consume(I.segment)}}}getAvailableLinkedEvents(){let y=[];for(let b=0,E=this.point.events.length;b<E;b++){let R=this.point.events[b];R!==this&&!R.segment.ringOut&&R.segment.isInResult()&&y.push(R)}return y}getLeftmostComparator(y){let b=new Map,E=R=>{let I=R.otherSE;b.set(R,{sine:mt(this.point,y.point,I.point),cosine:kt(this.point,y.point,I.point)})};return(R,I)=>{b.has(R)||E(R),b.has(I)||E(I);let{sine:X,cosine:$}=b.get(R),{sine:P,cosine:H}=b.get(I);return X>=0&&P>=0?$<H?1:$>H?-1:0:X<0&&P<0?$<H?-1:$>H?1:0:P<X?-1:P>X?1:0}}}let gt=0;class B{static compare(y,b){let E=y.leftSE.point.x,R=b.leftSE.point.x,I=y.rightSE.point.x,X=b.rightSE.point.x;if(X<E)return 1;if(I<R)return-1;let $=y.leftSE.point.y,P=b.leftSE.point.y,H=y.rightSE.point.y,V=b.rightSE.point.y;if(E<R){if(P<$&&P<H)return 1;if(P>$&&P>H)return-1;let F=y.comparePoint(b.leftSE.point);if(F<0)return 1;if(F>0)return-1;let q=b.comparePoint(y.rightSE.point);return q!==0?q:-1}if(E>R){if($<P&&$<V)return-1;if($>P&&$>V)return 1;let F=b.comparePoint(y.leftSE.point);if(F!==0)return F;let q=y.comparePoint(b.rightSE.point);return q<0?1:q>0?-1:1}if($<P)return-1;if($>P)return 1;if(I<X){let F=b.comparePoint(y.rightSE.point);if(F!==0)return F}if(I>X){let F=y.comparePoint(b.rightSE.point);if(F<0)return 1;if(F>0)return-1}if(I!==X){let F=H-$,q=I-E,Q=V-P,xt=X-R;if(F>q&&Q<xt)return 1;if(F<q&&Q>xt)return-1}return I>X?1:I<X||H<V?-1:H>V?1:y.id<b.id?-1:y.id>b.id?1:0}constructor(y,b,E,R){this.id=++gt,this.leftSE=y,y.segment=this,y.otherSE=b,this.rightSE=b,b.segment=this,b.otherSE=y,this.rings=E,this.windings=R}static fromRing(y,b,E){let R,I,X,$=at.comparePoints(y,b);if($<0)R=y,I=b,X=1;else if($>0)R=b,I=y,X=-1;else throw new Error(`Tried to create degenerate segment at [${y.x}, ${y.y}]`);let P=new at(R,!0),H=new at(I,!1);return new B(P,H,[E],[X])}replaceRightSE(y){this.rightSE=y,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let y=this.leftSE.point.y,b=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:y<b?y:b},ur:{x:this.rightSE.point.x,y:y>b?y:b}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(y){return y.x===this.leftSE.point.x&&y.y===this.leftSE.point.y||y.x===this.rightSE.point.x&&y.y===this.rightSE.point.y}comparePoint(y){if(this.isAnEndpoint(y))return 0;let b=this.leftSE.point,E=this.rightSE.point,R=this.vector();if(b.x===E.x)return y.x===b.x?0:y.x<b.x?1:-1;let I=(y.y-b.y)/R.y,X=b.x+I*R.x;if(y.x===X)return 0;let $=(y.x-b.x)/R.x,P=b.y+$*R.y;return y.y===P?0:y.y<P?-1:1}getIntersection(y){let b=this.bbox(),E=y.bbox(),R=g(b,E);if(R===null)return null;let I=this.leftSE.point,X=this.rightSE.point,$=y.leftSE.point,P=y.rightSE.point,H=x(b,$)&&this.comparePoint($)===0,V=x(E,I)&&y.comparePoint(I)===0,F=x(b,P)&&this.comparePoint(P)===0,q=x(E,X)&&y.comparePoint(X)===0;if(V&&H)return q&&!F?X:!q&&F?P:null;if(V)return F&&I.x===P.x&&I.y===P.y?null:I;if(H)return q&&X.x===$.x&&X.y===$.y?null:$;if(q&&F)return null;if(q)return X;if(F)return P;let Q=Qt(I,this.vector(),$,y.vector());return Q===null||!x(R,Q)?null:C.round(Q.x,Q.y)}split(y){let b=[],E=y.events!==void 0,R=new at(y,!0),I=new at(y,!1),X=this.rightSE;this.replaceRightSE(I),b.push(I),b.push(R);let $=new B(R,X,this.rings.slice(),this.windings.slice());return at.comparePoints($.leftSE.point,$.rightSE.point)>0&&$.swapEvents(),at.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),E&&(R.checkForConsuming(),I.checkForConsuming()),b}swapEvents(){let y=this.rightSE;this.rightSE=this.leftSE,this.leftSE=y,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let b=0,E=this.windings.length;b<E;b++)this.windings[b]*=-1}consume(y){let b=this,E=y;for(;b.consumedBy;)b=b.consumedBy;for(;E.consumedBy;)E=E.consumedBy;let R=B.compare(b,E);if(R!==0){if(R>0){let I=b;b=E,E=I}if(b.prev===E){let I=b;b=E,E=I}for(let I=0,X=E.rings.length;I<X;I++){let $=E.rings[I],P=E.windings[I],H=b.rings.indexOf($);H===-1?(b.rings.push($),b.windings.push(P)):b.windings[H]+=P}E.rings=null,E.windings=null,E.consumedBy=b,E.leftSE.consumedBy=b.leftSE,E.rightSE.consumedBy=b.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let y=this.prev.consumedBy||this.prev;this._beforeState=y.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let y=this.beforeState();this._afterState={rings:y.rings.slice(0),windings:y.windings.slice(0),multiPolys:[]};let b=this._afterState.rings,E=this._afterState.windings,R=this._afterState.multiPolys;for(let $=0,P=this.rings.length;$<P;$++){let H=this.rings[$],V=this.windings[$],F=b.indexOf(H);F===-1?(b.push(H),E.push(V)):E[F]+=V}let I=[],X=[];for(let $=0,P=b.length;$<P;$++){if(E[$]===0)continue;let H=b[$],V=H.poly;if(X.indexOf(V)===-1)if(H.isExterior)I.push(V);else{X.indexOf(V)===-1&&X.push(V);let F=I.indexOf(H.poly);F!==-1&&I.splice(F,1)}}for(let $=0,P=I.length;$<P;$++){let H=I[$].multiPoly;R.indexOf(H)===-1&&R.push(H)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let y=this.beforeState().multiPolys,b=this.afterState().multiPolys;switch(ct.type){case"union":{let E=y.length===0,R=b.length===0;this._isInResult=E!==R;break}case"intersection":{let E,R;y.length<b.length?(E=y.length,R=b.length):(E=b.length,R=y.length),this._isInResult=R===ct.numMultiPolys&&E<R;break}case"xor":{let E=Math.abs(y.length-b.length);this._isInResult=E%2===1;break}case"difference":{let E=R=>R.length===1&&R[0].isSubject;this._isInResult=E(y)!==E(b);break}default:throw new Error(`Unrecognized operation type found ${ct.type}`)}return this._isInResult}}class Pt{constructor(y,b,E){if(!Array.isArray(y)||y.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=b,this.isExterior=E,this.segments=[],typeof y[0][0]!="number"||typeof y[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let R=C.round(y[0][0],y[0][1]);this.bbox={ll:{x:R.x,y:R.y},ur:{x:R.x,y:R.y}};let I=R;for(let X=1,$=y.length;X<$;X++){if(typeof y[X][0]!="number"||typeof y[X][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let P=C.round(y[X][0],y[X][1]);P.x===I.x&&P.y===I.y||(this.segments.push(B.fromRing(I,P,this)),P.x<this.bbox.ll.x&&(this.bbox.ll.x=P.x),P.y<this.bbox.ll.y&&(this.bbox.ll.y=P.y),P.x>this.bbox.ur.x&&(this.bbox.ur.x=P.x),P.y>this.bbox.ur.y&&(this.bbox.ur.y=P.y),I=P)}(R.x!==I.x||R.y!==I.y)&&this.segments.push(B.fromRing(I,R,this))}getSweepEvents(){let y=[];for(let b=0,E=this.segments.length;b<E;b++){let R=this.segments[b];y.push(R.leftSE),y.push(R.rightSE)}return y}}class ft{constructor(y,b){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Pt(y[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let E=1,R=y.length;E<R;E++){let I=new Pt(y[E],this,!1);I.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=I.bbox.ll.x),I.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=I.bbox.ll.y),I.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=I.bbox.ur.x),I.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=I.bbox.ur.y),this.interiorRings.push(I)}this.multiPoly=b}getSweepEvents(){let y=this.exteriorRing.getSweepEvents();for(let b=0,E=this.interiorRings.length;b<E;b++){let R=this.interiorRings[b].getSweepEvents();for(let I=0,X=R.length;I<X;I++)y.push(R[I])}return y}}class At{constructor(y,b){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof y[0][0][0]=="number"&&(y=[y])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let E=0,R=y.length;E<R;E++){let I=new ft(y[E],this);I.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=I.bbox.ll.x),I.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=I.bbox.ll.y),I.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=I.bbox.ur.x),I.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=I.bbox.ur.y),this.polys.push(I)}this.isSubject=b}getSweepEvents(){let y=[];for(let b=0,E=this.polys.length;b<E;b++){let R=this.polys[b].getSweepEvents();for(let I=0,X=R.length;I<X;I++)y.push(R[I])}return y}}class _t{static factory(y){let b=[];for(let E=0,R=y.length;E<R;E++){let I=y[E];if(!I.isInResult()||I.ringOut)continue;let X=null,$=I.leftSE,P=I.rightSE,H=[$],V=$.point,F=[];for(;X=$,$=P,H.push($),$.point!==V;)for(;;){let q=$.getAvailableLinkedEvents();if(q.length===0){let Mt=H[0].point,Ht=H[H.length-1].point;throw new Error(`Unable to complete output ring starting at [${Mt.x}, ${Mt.y}]. Last matching segment found ends at [${Ht.x}, ${Ht.y}].`)}if(q.length===1){P=q[0].otherSE;break}let Q=null;for(let Mt=0,Ht=F.length;Mt<Ht;Mt++)if(F[Mt].point===$.point){Q=Mt;break}if(Q!==null){let Mt=F.splice(Q)[0],Ht=H.splice(Mt.index);Ht.unshift(Ht[0].otherSE),b.push(new _t(Ht.reverse()));continue}F.push({index:H.length,point:$.point});let xt=$.getLeftmostComparator(X);P=q.sort(xt)[0].otherSE;break}b.push(new _t(H))}return b}constructor(y){this.events=y;for(let b=0,E=y.length;b<E;b++)y[b].segment.ringOut=this;this.poly=null}getGeom(){let y=this.events[0].point,b=[y];for(let H=1,V=this.events.length-1;H<V;H++){let F=this.events[H].point,q=this.events[H+1].point;pt(F,y,q)!==0&&(b.push(F),y=F)}if(b.length===1)return null;let E=b[0],R=b[1];pt(E,y,R)===0&&b.shift(),b.push(b[0]);let I=this.isExteriorRing()?1:-1,X=this.isExteriorRing()?0:b.length-1,$=this.isExteriorRing()?b.length:-1,P=[];for(let H=X;H!=$;H+=I)P.push([b[H].x,b[H].y]);return P}isExteriorRing(){if(this._isExteriorRing===void 0){let y=this.enclosingRing();this._isExteriorRing=y?!y.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let y=this.events[0];for(let R=1,I=this.events.length;R<I;R++){let X=this.events[R];at.compare(y,X)>0&&(y=X)}let b=y.segment.prevInResult(),E=b?b.prevInResult():null;for(;;){if(!b)return null;if(!E)return b.ringOut;if(E.ringOut!==b.ringOut)return E.ringOut.enclosingRing()!==b.ringOut?b.ringOut:b.ringOut.enclosingRing();b=E.prevInResult(),E=b?b.prevInResult():null}}}class Bt{constructor(y){this.exteriorRing=y,y.poly=this,this.interiorRings=[]}addInterior(y){this.interiorRings.push(y),y.poly=this}getGeom(){let y=[this.exteriorRing.getGeom()];if(y[0]===null)return null;for(let b=0,E=this.interiorRings.length;b<E;b++){let R=this.interiorRings[b].getGeom();R!==null&&y.push(R)}return y}}class Rt{constructor(y){this.rings=y,this.polys=this._composePolys(y)}getGeom(){let y=[];for(let b=0,E=this.polys.length;b<E;b++){let R=this.polys[b].getGeom();R!==null&&y.push(R)}return y}_composePolys(y){let b=[];for(let E=0,R=y.length;E<R;E++){let I=y[E];if(!I.poly)if(I.isExteriorRing())b.push(new Bt(I));else{let X=I.enclosingRing();X.poly||b.push(new Bt(X)),X.poly.addInterior(I)}}return b}}class U{constructor(y){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B.compare;this.queue=y,this.tree=new l(b),this.segments=[]}process(y){let b=y.segment,E=[];if(y.consumedBy)return y.isLeft?this.queue.remove(y.otherSE):this.tree.remove(b),E;let R=y.isLeft?this.tree.add(b):this.tree.find(b);if(!R)throw new Error(`Unable to find segment #${b.id} [${b.leftSE.point.x}, ${b.leftSE.point.y}] -> [${b.rightSE.point.x}, ${b.rightSE.point.y}] in SweepLine tree.`);let I=R,X=R,$,P;for(;$===void 0;)I=this.tree.prev(I),I===null?$=null:I.key.consumedBy===void 0&&($=I.key);for(;P===void 0;)X=this.tree.next(X),X===null?P=null:X.key.consumedBy===void 0&&(P=X.key);if(y.isLeft){let H=null;if($){let F=$.getIntersection(b);if(F!==null&&(b.isAnEndpoint(F)||(H=F),!$.isAnEndpoint(F))){let q=this._splitSafely($,F);for(let Q=0,xt=q.length;Q<xt;Q++)E.push(q[Q])}}let V=null;if(P){let F=P.getIntersection(b);if(F!==null&&(b.isAnEndpoint(F)||(V=F),!P.isAnEndpoint(F))){let q=this._splitSafely(P,F);for(let Q=0,xt=q.length;Q<xt;Q++)E.push(q[Q])}}if(H!==null||V!==null){let F=null;H===null?F=V:V===null?F=H:F=at.comparePoints(H,V)<=0?H:V,this.queue.remove(b.rightSE),E.push(b.rightSE);let q=b.split(F);for(let Q=0,xt=q.length;Q<xt;Q++)E.push(q[Q])}E.length>0?(this.tree.remove(b),E.push(y)):(this.segments.push(b),b.prev=$)}else{if($&&P){let H=$.getIntersection(P);if(H!==null){if(!$.isAnEndpoint(H)){let V=this._splitSafely($,H);for(let F=0,q=V.length;F<q;F++)E.push(V[F])}if(!P.isAnEndpoint(H)){let V=this._splitSafely(P,H);for(let F=0,q=V.length;F<q;F++)E.push(V[F])}}}this.tree.remove(b)}return E}_splitSafely(y,b){this.tree.remove(y);let E=y.rightSE;this.queue.remove(E);let R=y.split(b);return R.push(E),y.consumedBy===void 0&&this.tree.add(y),R}}let S=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,j=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class rt{run(y,b,E){ct.type=y,C.reset();let R=[new At(b,!0)];for(let F=0,q=E.length;F<q;F++)R.push(new At(E[F],!1));if(ct.numMultiPolys=R.length,ct.type==="difference"){let F=R[0],q=1;for(;q<R.length;)g(R[q].bbox,F.bbox)!==null?q++:R.splice(q,1)}if(ct.type==="intersection")for(let F=0,q=R.length;F<q;F++){let Q=R[F];for(let xt=F+1,Mt=R.length;xt<Mt;xt++)if(g(Q.bbox,R[xt].bbox)===null)return[]}let I=new l(at.compare);for(let F=0,q=R.length;F<q;F++){let Q=R[F].getSweepEvents();for(let xt=0,Mt=Q.length;xt<Mt;xt++)if(I.insert(Q[xt]),I.size>S)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let X=new U(I),$=I.size,P=I.pop();for(;P;){let F=P.key;if(I.size===$){let Q=F.segment;throw new Error(`Unable to pop() ${F.isLeft?"left":"right"} SweepEvent [${F.point.x}, ${F.point.y}] from segment #${Q.id} [${Q.leftSE.point.x}, ${Q.leftSE.point.y}] -> [${Q.rightSE.point.x}, ${Q.rightSE.point.y}] from queue.`)}if(I.size>S)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(X.segments.length>j)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let q=X.process(F);for(let Q=0,xt=q.length;Q<xt;Q++){let Mt=q[Q];Mt.consumedBy===void 0&&I.insert(Mt)}$=I.size,P=I.pop()}C.reset();let H=_t.factory(X.segments);return new Rt(H).getGeom()}}let ct=new rt;var Kt={union:function(O){for(var y=arguments.length,b=new Array(y>1?y-1:0),E=1;E<y;E++)b[E-1]=arguments[E];return ct.run("union",O,b)},intersection:function(O){for(var y=arguments.length,b=new Array(y>1?y-1:0),E=1;E<y;E++)b[E-1]=arguments[E];return ct.run("intersection",O,b)},xor:function(O){for(var y=arguments.length,b=new Array(y>1?y-1:0),E=1;E<y;E++)b[E-1]=arguments[E];return ct.run("xor",O,b)},difference:function(O){for(var y=arguments.length,b=new Array(y>1?y-1:0),E=1;E<y;E++)b[E-1]=arguments[E];return ct.run("difference",O,b)}};return Kt})});var Mc="170",Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nf=0,Qc=1,sf=2;var pu=1,rf=2,Zn=3,_i=0,tn=1,de=2,xi=0,xs=1,an=2,th=3,eh=4,of=5,Ii=100,af=101,lf=102,cf=103,hf=104,uf=200,df=201,ff=202,pf=203,Ka=204,Ja=205,mf=206,gf=207,xf=208,yf=209,_f=210,vf=211,bf=212,Mf=213,wf=214,ja=0,Qa=1,tl=2,Ms=3,el=4,nl=5,il=6,sl=7,mu=0,Sf=1,Ef=2,yi=0,Tf=1,Af=2,Rf=3,Cf=4,Pf=5,If=6,Lf=7;var gu=300,ws=301,Ss=302,rl=303,ol=304,Bo=306,ir=1e3,Di=1001,al=1002,Rn=1003,Df=1004;var Mr=1005;var kn=1006,ma=1007;var Ui=1008;var ti=1009,xu=1010,yu=1011,sr=1012,wc=1013,Ni=1014,Jn=1015,pr=1016,Sc=1017,Ec=1018,Es=1020,_u=35902,vu=1021,bu=1022,An=1023,Mu=1024,wu=1025,ys=1026,Ts=1027,Su=1028,Tc=1029,Eu=1030,Ac=1031;var Rc=1033,io=33776,so=33777,ro=33778,oo=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,xl=37810,yl=37811,_l=37812,vl=37813,bl=37814,Ml=37815,wl=37816,Sl=37817,El=37818,Tl=37819,Al=37820,Rl=37821,ao=36492,Cl=36494,Pl=36495,Tu=36283,Il=36284,Ll=36285,Dl=36286;var lo=2300,Ul=2301,ga=2302,nh=2400,ih=2401,sh=2402;var Uf=3200,Nf=3201;var Au=0,Of=1,gi="",Qe="srgb",Is="srgb-linear",zo="linear",ce="srgb";var Ji=7680;var rh=519,kf=512,Ff=513,Bf=514,Ru=515,zf=516,Hf=517,Vf=518,Gf=519,Nl=35044,Cc=35048;var oh="300 es",jn=2e3,co=2001,ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,_s=Math.PI/180,rr=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Pc(i,t){return(i%t+t)%t}function Wf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xf(i,t,e){return i!==t?(e-i)/(t-i):0}function js(i,t,e){return(1-e)*i+e*t}function $f(i,t,e,n){return js(i,t,1-Math.exp(-e*n))}function qf(i,t=1){return t-Math.abs(Pc(i,t*2)-t)}function Yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Kf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jf(i,t){return i+Math.random()*(t-i)}function jf(i){return i*(.5-Math.random())}function Qf(i){i!==void 0&&(ah=i);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tp(i){return i*_s}function ep(i){return i*rr}function np(i){return(i&i-1)===0&&i!==0}function ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Cu={DEG2RAD:_s,RAD2DEG:rr,generateUUID:Fn,clamp:Oe,euclideanModulo:Pc,mapLinear:Wf,inverseLerp:Xf,lerp:js,damp:$f,pingpong:qf,smoothstep:Yf,smootherstep:Zf,randInt:Kf,randFloat:Jf,randFloatSpread:jf,seededRandom:Qf,degToRad:tp,radToDeg:ep,isPowerOfTwo:np,ceilPowerOfTwo:ip,floorPowerOfTwo:sp,setQuaternionFromProperEuler:rp,normalize:oe,denormalize:Tn},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],M=s[1],v=s[4],_=s[7],D=s[2],C=s[5],N=s[8];return r[0]=o*x+a*M+l*D,r[3]=o*g+a*v+l*C,r[6]=o*m+a*_+l*N,r[1]=c*x+h*M+u*D,r[4]=c*g+h*v+u*C,r[7]=c*m+h*_+u*N,r[2]=d*x+f*M+p*D,r[5]=d*g+f*v+p*C,r[8]=d*m+f*_+p*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xa=new $t;function Pu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function op(){let i=ho("canvas");return i.style.display="block",i}var lh={};function Ks(i){i in lh||(lh[i]=!0,console.warn(i))}function ap(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ch=[.64,.33,.3,.6,.15,.06],hh=[.2126,.7152,.0722],uh=[.3127,.329],dh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Is]:{primaries:ch,whitePoint:uh,transfer:zo,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:hh,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:ch,whitePoint:uh,transfer:ce,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:hh,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});var ji,Ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=ho("canvas")),ji.width=t.width,ji.height=t.height;let n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hp=0,uo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ya(s[o].image)):r.push(ya(s[o]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var up=0,ln=class i extends ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=kn,o=Ui,a=An,l=ti,c=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Fn(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=gu;ln.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(f+1)/2,D=(m+1)/2,C=(h+d)/4,N=(u+x)/4,k=(p+g)/4;return v>_&&v>D?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=C/n,r=N/n):_>D?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=k/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=N/r,s=k/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kl=class extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends kl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fo=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fl=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*x,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let D=Math.sqrt(v),C=Math.atan2(D,m*M);g=Math.sin(g*C)/D,a=Math.sin(a*C)/D}let _=a*M;if(l=l*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+x*_,g===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_a=new z,ph=new Cn,Oi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Sr.subVectors(this.max,Vs),Qi.subVectors(t.a,Vs),ts.subVectors(t.b,Vs),es.subVectors(t.c,Vs),hi.subVectors(ts,Qi),ui.subVectors(es,ts),Si.subVectors(Qi,es);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Si.z,Si.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Si.z,0,-Si.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Si.y,Si.x,0];return!va(e,Qi,ts,es,Sr)||(e=[1,0,0,0,1,0,0,0,1],!va(e,Qi,ts,es,Sr))?!1:(Er.crossVectors(hi,ui),e=[Er.x,Er.y,Er.z],va(e,Qi,ts,es,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,wr=new Oi,Qi=new z,ts=new z,es=new z,hi=new z,ui=new z,Si=new z,Vs=new z,Sr=new z,Er=new z,Ei=new z;function va(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dp=new Oi,Gs=new z,ba=new z,ki=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(ba)),this.expandByPoint(Gs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new z,Ma=new z,Tr=new z,di=new z,wa=new z,Ar=new z,Sa=new z,vi=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ma.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Ma);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=di.dot(this.direction),l=-di.dot(Tr),c=di.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ma).addScaledVector(Tr,d),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),Ar.subVectors(n,t),Sa.crossVectors(wa,Ar);let o=this.direction.dot(Sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let l=a*this.direction.dot(Ar.crossVectors(di,Ar));if(l<0)return null;let c=a*this.direction.dot(wa.cross(di));if(c<0||l+c>o)return null;let h=-a*di.dot(Sa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,pp)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),fi.crossVectors(n,rn),fi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),fi.crossVectors(n,rn)),fi.normalize(),Rr.crossVectors(rn,fi),s[0]=fi.x,s[4]=Rr.x,s[8]=rn.x,s[1]=fi.y,s[5]=Rr.y,s[9]=rn.y,s[2]=fi.z,s[6]=Rr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],v=n[7],_=n[11],D=n[15],C=s[0],N=s[4],k=s[8],T=s[12],w=s[1],L=s[5],G=s[9],W=s[13],J=s[2],it=s[6],K=s[10],ot=s[14],tt=s[3],dt=s[7],ut=s[11],wt=s[15];return r[0]=o*C+a*w+l*J+c*tt,r[4]=o*N+a*L+l*it+c*dt,r[8]=o*k+a*G+l*K+c*ut,r[12]=o*T+a*W+l*ot+c*wt,r[1]=h*C+u*w+d*J+f*tt,r[5]=h*N+u*L+d*it+f*dt,r[9]=h*k+u*G+d*K+f*ut,r[13]=h*T+u*W+d*ot+f*wt,r[2]=p*C+x*w+g*J+m*tt,r[6]=p*N+x*L+g*it+m*dt,r[10]=p*k+x*G+g*K+m*ut,r[14]=p*T+x*W+g*ot+m*wt,r[3]=M*C+v*w+_*J+D*tt,r[7]=M*N+v*L+_*it+D*dt,r[11]=M*k+v*G+_*K+D*ut,r[15]=M*T+v*W+_*ot+D*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=u*g*c-x*d*c+x*l*f-a*g*f-u*l*m+a*d*m,v=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,_=h*x*c-p*u*c+p*a*f-o*x*f-h*a*m+o*u*m,D=p*u*l-h*x*l-p*a*d+o*x*d+h*a*g-o*u*g,C=e*M+n*v+s*_+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return t[0]=M*N,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*m-n*d*m)*N,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*m+n*l*m)*N,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*N,t[4]=v*N,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*N,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*N,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*N,t[8]=_*N,t[9]=(p*u*r-h*x*r-p*n*f+e*x*f+h*n*m-e*u*m)*N,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*m+e*a*m)*N,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*N,t[12]=D*N,t[13]=(h*x*s-p*u*s+p*n*d-e*x*d-h*n*g+e*u*g)*N,t[14]=(p*a*s-o*x*s-p*n*l+e*x*l+o*n*g-e*a*g)*N,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,g=o*u,m=a*u,M=l*c,v=l*h,_=l*u,D=n.x,C=n.y,N=n.z;return s[0]=(1-(x+m))*D,s[1]=(f+_)*D,s[2]=(p-v)*D,s[3]=0,s[4]=(f-_)*C,s[5]=(1-(d+m))*C,s[6]=(g+M)*C,s[7]=0,s[8]=(p+v)*N,s[9]=(g-M)*N,s[10]=(1-(d+x))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let c=1/r,h=1/o,u=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,p;if(a===jn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===co)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,p,x;if(a===jn)p=(o+r)*u,x=-2*u;else if(a===co)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new z,wn=new ee,fp=new z(0,0,0),pp=new z(1,1,1),fi=new z,Rr=new z,rn=new z,mh=new ee,gh=new Cn,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mp=0,xh=new z,is=new Cn,$n=new ee,Cr=new z,Ws=new z,gp=new z,xp=new Cn,yh=new z(1,0,0),_h=new z(0,1,0),vh=new z(0,0,1),bh={type:"added"},yp={type:"removed"},ss={type:"childadded",child:null},Ea={type:"childremoved",child:null},Ie=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Bn,n=new Cn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new $t}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ws,Cr,this.up):$n.lookAt(Cr,Ws,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),is.setFromRotationMatrix($n),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new z(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new z,qn=new z,Ta=new z,Yn=new z,rs=new z,os=new z,Mh=new z,Aa=new z,Ra=new z,Ca=new z,Pa=new Me,Ia=new Me,La=new Me,Kn=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),qn.subVectors(n,e),Ta.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(qn),l=Sn.dot(Ta),c=qn.dot(qn),h=qn.dot(Ta),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pa.setScalar(0),Ia.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(Ia,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),qn.subVectors(t,e),Sn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,n),os.subVectors(r,n),Aa.subVectors(t,n);let l=rs.dot(Aa),c=os.dot(Aa);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,s);let h=rs.dot(Ra),u=os.dot(Ra);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(rs,o);Ca.subVectors(t,r);let f=rs.dot(Ca),p=os.dot(Ca);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(os,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Mh.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Mh,a);let m=1/(g+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Pc(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Da(o,r,t+1/3),this.g=Da(o,r,t),this.b=Da(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return te.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Oe(Ve.r*255,0,255))*65536+Math.round(Oe(Ve.g*255,0,255))*256+Math.round(Oe(Ve.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Qe){te.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Pr);let n=js(pi.h,Pr.h,e),s=js(pi.s,Pr.s,e),r=js(pi.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Ot;Ot.NAMES=Iu;var _p=0,zn=class extends ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Fn(),this.name="",this.blending=xs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Ja,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ge=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new z,Ir=new ht,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nl&&(t.usage=this.usage),t}};var po=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},vp=0,pn=new ee,Ua=new Ie,as=new z,on=new Oi,Xs=new Oi,Ne=new z,jt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pu(t)?mo:po)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(on.min,Xs.min),on.expandByPoint(Ne),Ne.addVectors(on.max,Xs.max),on.expandByPoint(Ne)):(on.expandByPoint(Xs.min),on.expandByPoint(Xs.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Ne.add(as)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<n.count;k++)a[k]=new z,l[k]=new z;let c=new z,h=new z,u=new z,d=new ht,f=new ht,p=new ht,x=new z,g=new z;function m(k,T,w){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,k),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[k].add(x),a[T].add(x),a[w].add(x),l[k].add(g),l[T].add(g),l[w].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let k=0,T=M.length;k<T;++k){let w=M[k],L=w.start,G=w.count;for(let W=L,J=L+G;W<J;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let v=new z,_=new z,D=new z,C=new z;function N(k){D.fromBufferAttribute(s,k),C.copy(D);let T=a[k];v.copy(T),v.sub(D.multiplyScalar(D.dot(T))).normalize(),_.crossVectors(C,T);let L=_.dot(l[k])<0?-1:1;o.setXYZW(k,v.x,v.y,v.z,L)}for(let k=0,T=M.length;k<T;++k){let w=M[k],L=w.start,G=w.count;for(let W=L,J=L+G;W<J;W+=3)N(t.getX(W+0)),N(t.getX(W+1)),N(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wh=new ee,Ti=new vi,Lr=new ki,Sh=new z,Dr=new z,Ur=new z,Nr=new z,Na=new z,Or=new z,Eh=new z,kr=new z,Gt=class extends Ie{constructor(t=new jt,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Na.fromBufferAttribute(u,t),o?Or.addScaledVector(Na,h):Or.addScaledVector(Na.sub(e),h))}e.add(Or)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Lr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Lr,Sh)===null||Ti.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(wh.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(wh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,D=v;_<D;_+=3){let C=a.getX(_),N=a.getX(_+1),k=a.getX(_+2);s=Fr(this,m,t,n,c,h,u,C,N,k),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=Fr(this,o,t,n,c,h,u,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,D=v;_<D;_+=3){let C=_,N=_+1,k=_+2;s=Fr(this,m,t,n,c,h,u,C,N,k),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,v=g+1,_=g+2;s=Fr(this,o,t,n,c,h,u,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function bp(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(kr);return c<e.near||c>e.far?null:{distance:c,point:kr.clone(),object:i}}function Fr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Dr),i.getVertexPosition(l,Ur),i.getVertexPosition(c,Nr);let h=bp(i,t,e,n,Dr,Ur,Nr,Eh);if(h){let u=new z;Kn.getBarycoord(Eh,Dr,Ur,Nr,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=Kn.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new z,materialIndex:0};Kn.getNormal(Dr,Ur,Nr,d.normal),h.face=d,h.barycoord=u}return h}var we=class i extends jt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function p(x,g,m,M,v,_,D,C,N,k,T){let w=_/N,L=D/k,G=_/2,W=D/2,J=C/2,it=N+1,K=k+1,ot=0,tt=0,dt=new z;for(let ut=0;ut<K;ut++){let wt=ut*L-W;for(let Ft=0;Ft<it;Ft++){let Zt=Ft*w-G;dt[x]=Zt*M,dt[g]=wt*v,dt[m]=J,c.push(dt.x,dt.y,dt.z),dt[x]=0,dt[g]=0,dt[m]=C>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Ft/N),u.push(1-ut/k),ot+=1}}for(let ut=0;ut<k;ut++)for(let wt=0;wt<N;wt++){let Ft=d+wt+it*ut,Zt=d+wt+it*(ut+1),st=d+(wt+1)+it*(ut+1),pt=d+(wt+1)+it*ut;l.push(Ft,Zt,pt),l.push(Zt,st,pt),tt+=6}a.addGroup(f,tt,T),f+=tt,d+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var wp={clone:As,merge:Xe},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},go=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new z,Th=new ht,Ah=new ht,$e=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Th,Ah),e.subVectors(Ah,Th)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,Bl=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new $e(ls,cs,t,e);r.layers=this.layers,this.add(r);let o=new $e(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new $e(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new $e(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new $e(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xo=class extends ln{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zl=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:xi});r.uniforms.tEquirect.value=e;let o=new Gt(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=kn),new Bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Oa=new z,Tp=new z,Ap=new $t,En=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oa.subVectors(n,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ap.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new ki,Br=new z,ar=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],x=s[10],g=s[11],m=s[12],M=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,g-f,_-m).normalize(),n[1].setComponents(l+r,d+c,g+f,_+m).normalize(),n[2].setComponents(l+o,d+h,g+p,_+M).normalize(),n[3].setComponents(l-o,d-h,g-p,_-M).normalize(),n[4].setComponents(l-a,d-u,g-x,_-v).normalize(),e===jn)n[5].setComponents(l+a,d+u,g+x,_+v).normalize();else if(e===co)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Du(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ii=class i extends jt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*d-o;for(let v=0;v<c;v++){let _=v*u-r;p.push(_,-M,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let v=M+c*m,_=M+c*(m+1),D=M+1+c*(m+1),C=M+1+c*m;f.push(v,_,C),f.push(_,D,C)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fg=`float getShadowMask() {
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
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,Og=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Kg=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define STANDARD
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
}`,t0=`#define TOON
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
}`,e0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 color;
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
}`,o0=`uniform float rotation;
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
}`,a0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Ip,alphamap_pars_fragment:Lp,alphatest_fragment:Dp,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:Op,batching_pars_vertex:kp,batching_vertex:Fp,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Zp,color_pars_vertex:Kp,color_vertex:Jp,common:jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:bm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:xm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:_m,lights_pars_begin:vm,lights_toon_fragment:Mm,lights_toon_pars_fragment:wm,lights_phong_fragment:Sm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Om,map_particle_fragment:km,map_particle_pars_fragment:Fm,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:$m,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:Km,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:tg,iridescence_pars_fragment:eg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:og,dithering_pars_fragment:ag,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:xg,specularmap_fragment:yg,specularmap_pars_fragment:_g,tonemapping_fragment:vg,tonemapping_pars_fragment:bg,transmission_fragment:Mg,transmission_pars_fragment:wg,uv_pars_fragment:Sg,uv_pars_vertex:Eg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Pg,backgroundCube_frag:Ig,cube_vert:Lg,cube_frag:Dg,depth_vert:Ug,depth_frag:Ng,distanceRGBA_vert:Og,distanceRGBA_frag:kg,equirect_vert:Fg,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:$g,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Kg,meshphong_frag:Jg,meshphysical_vert:jg,meshphysical_frag:Qg,meshtoon_vert:t0,meshtoon_frag:e0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:o0,sprite_frag:a0},vt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},On={basic:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Xe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Xe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Xe([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Xe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Xe([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Xe([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Xe([vt.common,vt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Xe([vt.lights,vt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};On.physical={uniforms:Xe([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var zr={r:0,b:0,g:0},Ri=new Bn,l0=new ee;function c0(i,t,e,n,s,r,o){let a=new Ot(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1,_=p(M);_===null?m(a,l):_&&_.isColor&&(m(_,1),v=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,v){let _=p(v);_&&(_.isCubeTexture||_.mapping===Bo)?(h===void 0&&(h=new Gt(new we(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:As(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(Ri)),h.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Gt(new ii(2,2),new Hn({name:"BackgroundMaterial",uniforms:As(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(zr,Lu(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:x,addToRenderList:g}}function h0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(w,L,G,W,J){let it=!1,K=u(W,G,L);r!==K&&(r=K,c(r.object)),it=f(w,W,G,J),it&&p(w,W,G,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,_(w,L,G,W),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,L,G){let W=G.wireframe===!0,J=n[w.id];J===void 0&&(J={},n[w.id]=J);let it=J[L.id];it===void 0&&(it={},J[L.id]=it);let K=it[W];return K===void 0&&(K=d(l()),it[W]=K),K}function d(w){let L=[],G=[],W=[];for(let J=0;J<e;J++)L[J]=0,G[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:W,object:w,attributes:{},index:null}}function f(w,L,G,W){let J=r.attributes,it=L.attributes,K=0,ot=G.getAttributes();for(let tt in ot)if(ot[tt].location>=0){let ut=J[tt],wt=it[tt];if(wt===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(wt=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(wt=w.instanceColor)),ut===void 0||ut.attribute!==wt||wt&&ut.data!==wt.data)return!0;K++}return r.attributesNum!==K||r.index!==W}function p(w,L,G,W){let J={},it=L.attributes,K=0,ot=G.getAttributes();for(let tt in ot)if(ot[tt].location>=0){let ut=it[tt];ut===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor));let wt={};wt.attribute=ut,ut&&ut.data&&(wt.data=ut.data),J[tt]=wt,K++}r.attributes=J,r.attributesNum=K,r.index=W}function x(){let w=r.newAttributes;for(let L=0,G=w.length;L<G;L++)w[L]=0}function g(w){m(w,0)}function m(w,L){let G=r.newAttributes,W=r.enabledAttributes,J=r.attributeDivisors;G[w]=1,W[w]===0&&(i.enableVertexAttribArray(w),W[w]=1),J[w]!==L&&(i.vertexAttribDivisor(w,L),J[w]=L)}function M(){let w=r.newAttributes,L=r.enabledAttributes;for(let G=0,W=L.length;G<W;G++)L[G]!==w[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function v(w,L,G,W,J,it,K){K===!0?i.vertexAttribIPointer(w,L,G,J,it):i.vertexAttribPointer(w,L,G,W,J,it)}function _(w,L,G,W){x();let J=W.attributes,it=G.getAttributes(),K=L.defaultAttributeValues;for(let ot in it){let tt=it[ot];if(tt.location>=0){let dt=J[ot];if(dt===void 0&&(ot==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),ot==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),dt!==void 0){let ut=dt.normalized,wt=dt.itemSize,Ft=t.get(dt);if(Ft===void 0)continue;let Zt=Ft.buffer,st=Ft.type,pt=Ft.bytesPerElement,Tt=st===i.INT||st===i.UNSIGNED_INT||dt.gpuType===wc;if(dt.isInterleavedBufferAttribute){let mt=dt.data,kt=mt.stride,Vt=dt.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<tt.locationSize;zt++)m(tt.location+zt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<tt.locationSize;zt++)g(tt.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let zt=0;zt<tt.locationSize;zt++)v(tt.location+zt,wt/tt.locationSize,st,ut,kt*pt,(Vt+wt/tt.locationSize*zt)*pt,Tt)}else{if(dt.isInstancedBufferAttribute){for(let mt=0;mt<tt.locationSize;mt++)m(tt.location+mt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let mt=0;mt<tt.locationSize;mt++)g(tt.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let mt=0;mt<tt.locationSize;mt++)v(tt.location+mt,wt/tt.locationSize,st,ut,wt*pt,wt/tt.locationSize*mt*pt,Tt)}}else if(K!==void 0){let ut=K[ot];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(tt.location,ut);break;case 3:i.vertexAttrib3fv(tt.location,ut);break;case 4:i.vertexAttrib4fv(tt.location,ut);break;default:i.vertexAttrib1fv(tt.location,ut)}}}}M()}function D(){k();for(let w in n){let L=n[w];for(let G in L){let W=L[G];for(let J in W)h(W[J].object),delete W[J];delete L[G]}delete n[w]}}function C(w){if(n[w.id]===void 0)return;let L=n[w.id];for(let G in L){let W=L[G];for(let J in W)h(W[J].object),delete W[J];delete L[G]}delete n[w.id]}function N(w){for(let L in n){let G=n[L];if(G[w.id]===void 0)continue;let W=G[w.id];for(let J in W)h(W[J].object),delete W[J];delete G[w.id]}}function k(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function u0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function d0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==An&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let k=N===pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==ti&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Jn&&!k)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=p>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:D,maxSamples:C}}function f0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,v=M*4,_=m.clippingState||null;l.value=_,_=h(p,d,v,f);for(let D=0;D!==v;++D)_[D]=e[D];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function p0(i){let t=new WeakMap;function e(o,a){return a===rl?o.mapping=ws:a===ol&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===rl||a===ol)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var yo=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,Rh=[.125,.215,.35,.446,.526,.582],Li=20,ka=new yo,Ch=new Ot,Fa=null,Ba=0,za=0,Ha=!1,Pi=(1+Math.sqrt(5))/2,hs=1/Pi,Ph=[new z(-Pi,hs,0),new z(Pi,hs,0),new z(-hs,0,Pi),new z(hs,0,Pi),new z(0,Pi,-hs),new z(0,Pi,hs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ba,za),this._renderer.xr.enabled=Ha,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:pr,format:An,colorSpace:Is,depthBuffer:!1},s=Ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(r)),this._blurMaterial=g0(r,t,e)}return s}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s){let a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ch),h.toneMapping=yi,h.autoClear=!1;let f=new Ge({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),p=new Gt(new we,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Ch),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Hr(s,M*v,m>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ws||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ph[(s-r-1)%Ph.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Gt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Li;g>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);let m=[],M=0;for(let N=0;N<Li;++N){let k=N/x,T=Math.exp(-k*k/2);m.push(T),N===0?M+=T:N<g&&(M+=2*T)}for(let N=0;N<m.length;N++)m[N]=m[N]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let _=this._sizeLods[s],D=3*_*(s>v-ms?s-v+ms:0),C=4*(this._cubeSize-_);Hr(e,D,C,3*_,2*_),l.setRenderTarget(e),l.render(u,ka)}};function m0(i){let t=[],e=[],n=[],s=i,r=i-ms+1+Rh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ms?l=Rh[o-i+ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,M=new Float32Array(x*p*f),v=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let C=0;C<f;C++){let N=C%3*2/3-1,k=C>2?0:-1,T=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];M.set(T,x*p*C),v.set(d,g*p*C);let w=[C,C,C,C,C,C];_.set(w,m*p*C)}let D=new jt;D.setAttribute("position",new ke(M,x)),D.setAttribute("uv",new ke(v,g)),D.setAttribute("faceIndex",new ke(_,m)),t.push(D),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ih(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g0(i,t,e){let n=new Float32Array(Li),s=new z(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Lh(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Dh(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function x0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===rl||l===ol,h=l===ws||l===Ss;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new _o(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new _o(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function y0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let v=0,_=M.length;v<_;v+=3){let D=M[v+0],C=M[v+1],N=M[v+2];d.push(D,C,C,N,N,D)}}else if(p!==void 0){let M=p.array;x=p.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let D=v+0,C=v+1,N=v+2;d.push(D,C,C,N,N,D)}}else return;let g=new(Pu(d)?mo:po)(d,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function v0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M]*x[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function b0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M0(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,D=1;_>t.maxTextureSize&&(D=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let C=new Float32Array(_*D*4*u),N=new fo(C,_,D,u);N.type=Jn,N.needsUpdate=!0;let k=v*4;for(let w=0;w<u;w++){let L=g[w],G=m[w],W=M[w],J=_*D*4*w;for(let it=0;it<L.count;it++){let K=it*k;f===!0&&(s.fromBufferAttribute(L,it),C[J+K+0]=s.x,C[J+K+1]=s.y,C[J+K+2]=s.z,C[J+K+3]=0),p===!0&&(s.fromBufferAttribute(G,it),C[J+K+4]=s.x,C[J+K+5]=s.y,C[J+K+6]=s.z,C[J+K+7]=0),x===!0&&(s.fromBufferAttribute(W,it),C[J+K+8]=s.x,C[J+K+9]=s.y,C[J+K+10]=s.z,C[J+K+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new ht(_,D)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function w0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var vo=class extends ln{constructor(t,e,n,s,r,o,a,l,c,h=ys){if(h!==ys&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=Ni),n===void 0&&h===Ts&&(n=Es),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uu=new ln,Uh=new vo(1,1),Nu=new fo,Ou=new Fl,ku=new xo,Nh=[],Oh=[],kh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function R0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),De(e,n)}}function C0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),De(e,n)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;kh.set(n),i.uniformMatrix4fv(this.addr,!1,kh),De(e,n)}}function I0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function N0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=Ru,r=Uh):r=Uu,e.setTexture2D(t||r,s)}function z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ou,s)}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ku,s)}function V0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function G0(i){switch(i){case 5126:return S0;case 35664:return E0;case 35665:return T0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return I0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return O0;case 36295:return k0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}function W0(i,t){i.uniform1fv(this.addr,t)}function X0(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function $0(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function q0(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function Y0(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Z0(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function K0(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function J0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function Q0(i,t){i.uniform3iv(this.addr,t)}function tx(i,t){i.uniform4iv(this.addr,t)}function ex(i,t){i.uniform1uiv(this.addr,t)}function nx(i,t){i.uniform2uiv(this.addr,t)}function ix(i,t){i.uniform3uiv(this.addr,t)}function sx(i,t){i.uniform4uiv(this.addr,t)}function rx(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Uu,r[o])}function ox(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ou,r[o])}function ax(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ku,r[o])}function lx(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nu,r[o])}function cx(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return $0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return K0;case 5124:case 35670:return J0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}var Hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G0(e.type)}},Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cx(e.type)}},Gl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Va=/(\w+)(\])?(\[|\.)?/g;function zh(i,t){i.seq.push(t),i.map[t.id]=t}function hx(i,t,e){let n=i.name,s=n.length;for(Va.lastIndex=0;;){let r=Va.exec(n),o=Va.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zh(e,c===void 0?new Hl(a,i,t):new Vl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Gl(a),zh(e,u)),e=u}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Hh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ux=37297,dx=0;function fx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Vh=new $t;function px(i){te._getMatrix(Vh,te.workingColorSpace,i);let t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fx(i.getShaderSource(t),o)}else return s}function mx(i,t){let e=px(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gx(i,t){let e;switch(t){case Tf:e="Linear";break;case Af:e="Reinhard";break;case Rf:e="Cineon";break;case Cf:e="ACESFilmic";break;case If:e="AgX";break;case Lf:e="Neutral";break;case Pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vr=new z;function xx(){te.getLuminanceCoefficients(Vr);let i=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function _x(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Js(i){return i!==""}function Wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(bx,wx)}var Mx=new Map;function wx(i,t){let e=qt[t];if(e===void 0){let n=Mx.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wl(e)}var Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(i){return i.replace(Sx,Ex)}function Ex(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ax(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ss:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Cx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mu:t="ENVMAP_BLENDING_MULTIPLY";break;case Sf:t="ENVMAP_BLENDING_MIX";break;case Ef:t="ENVMAP_BLENDING_ADD";break}return t}function Px(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ix(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tx(e),c=Ax(e),h=Rx(e),u=Cx(e),d=Px(e),f=yx(e),p=_x(r),x=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Js).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(g=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?qt.tonemapping_pars_fragment:"",e.toneMapping!==yi?gx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,mx("linearToOutputTexel",e.outputColorSpace),xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=Wl(o),o=Wh(o,e),o=Xh(o,e),a=Wl(a),a=Wh(a,e),a=Xh(a,e),o=$h(o),a=$h(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=M+g+o,_=M+m+a,D=Hh(s,s.VERTEX_SHADER,v),C=Hh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,D),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(L){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(D).trim(),J=s.getShaderInfoLog(C).trim(),it=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,C);else{let ot=Gh(s,D,"vertex"),tt=Gh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+ot+`
`+tt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||J==="")&&(K=!1);K&&(L.diagnostics={runnable:it,programLog:G,vertexShader:{log:W,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(D),s.deleteShader(C),k=new bs(s,x),T=vx(s,x)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,ux)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}var Lx=0,Xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $l(t),e.set(t,n)),n}},$l=class{constructor(t){this.id=Lx++,this.code=t,this.usedTimes=0}};function Dx(i,t,e,n,s,r,o){let a=new or,l=new Xl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,w,L,G,W){let J=G.fog,it=W.geometry,K=T.isMeshStandardMaterial?G.environment:null,ot=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),tt=ot&&ot.mapping===Bo?ot.image.height:null,dt=p[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ut=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,wt=ut!==void 0?ut.length:0,Ft=0;it.morphAttributes.position!==void 0&&(Ft=1),it.morphAttributes.normal!==void 0&&(Ft=2),it.morphAttributes.color!==void 0&&(Ft=3);let Zt,st,pt,Tt;if(dt){let St=On[dt];Zt=St.vertexShader,st=St.fragmentShader}else Zt=T.vertexShader,st=T.fragmentShader,l.update(T),pt=l.getVertexShaderID(T),Tt=l.getFragmentShaderID(T);let mt=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),Vt=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,Qt=!!T.map,at=!!T.matcap,gt=!!ot,B=!!T.aoMap,Pt=!!T.lightMap,ft=!!T.bumpMap,At=!!T.normalMap,_t=!!T.displacementMap,Bt=!!T.emissiveMap,Rt=!!T.metalnessMap,U=!!T.roughnessMap,S=T.anisotropy>0,j=T.clearcoat>0,rt=T.dispersion>0,ct=T.iridescence>0,lt=T.sheen>0,It=T.transmission>0,bt=S&&!!T.anisotropyMap,Ct=j&&!!T.clearcoatMap,Kt=j&&!!T.clearcoatNormalMap,O=j&&!!T.clearcoatRoughnessMap,y=ct&&!!T.iridescenceMap,b=ct&&!!T.iridescenceThicknessMap,E=lt&&!!T.sheenColorMap,R=lt&&!!T.sheenRoughnessMap,I=!!T.specularMap,X=!!T.specularColorMap,$=!!T.specularIntensityMap,P=It&&!!T.transmissionMap,H=It&&!!T.thicknessMap,V=!!T.gradientMap,F=!!T.alphaMap,q=T.alphaTest>0,Q=!!T.alphaHash,xt=!!T.extensions,Mt=yi;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Ht={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:Zt,fragmentShader:st,defines:T.defines,customVertexShaderID:pt,customFragmentShaderID:Tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:zt,batchingColor:zt&&W._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&W.instanceColor!==null,instancingMorph:Vt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Is,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:at,envMap:gt,envMapMode:gt&&ot.mapping,envMapCubeUVHeight:tt,aoMap:B,lightMap:Pt,bumpMap:ft,normalMap:At,displacementMap:d&&_t,emissiveMap:Bt,normalMapObjectSpace:At&&T.normalMapType===Of,normalMapTangentSpace:At&&T.normalMapType===Au,metalnessMap:Rt,roughnessMap:U,anisotropy:S,anisotropyMap:bt,clearcoat:j,clearcoatMap:Ct,clearcoatNormalMap:Kt,clearcoatRoughnessMap:O,dispersion:rt,iridescence:ct,iridescenceMap:y,iridescenceThicknessMap:b,sheen:lt,sheenColorMap:E,sheenRoughnessMap:R,specularMap:I,specularColorMap:X,specularIntensityMap:$,transmission:It,transmissionMap:P,thicknessMap:H,gradientMap:V,opaque:T.transparent===!1&&T.blending===xs&&T.alphaToCoverage===!1,alphaMap:F,alphaTest:q,alphaHash:Q,combine:T.combine,mapUv:Qt&&x(T.map.channel),aoMapUv:B&&x(T.aoMap.channel),lightMapUv:Pt&&x(T.lightMap.channel),bumpMapUv:ft&&x(T.bumpMap.channel),normalMapUv:At&&x(T.normalMap.channel),displacementMapUv:_t&&x(T.displacementMap.channel),emissiveMapUv:Bt&&x(T.emissiveMap.channel),metalnessMapUv:Rt&&x(T.metalnessMap.channel),roughnessMapUv:U&&x(T.roughnessMap.channel),anisotropyMapUv:bt&&x(T.anisotropyMap.channel),clearcoatMapUv:Ct&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:y&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:b&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:E&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:R&&x(T.sheenRoughnessMap.channel),specularMapUv:I&&x(T.specularMap.channel),specularColorMapUv:X&&x(T.specularColorMap.channel),specularIntensityMapUv:$&&x(T.specularIntensityMap.channel),transmissionMapUv:P&&x(T.transmissionMap.channel),thicknessMapUv:H&&x(T.thicknessMap.channel),alphaMapUv:F&&x(T.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(At||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!it.attributes.uv&&(Qt||F),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:W.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&te.getTransfer(T.map.colorSpace)===ce,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&te.getTransfer(T.emissiveMap.colorSpace)===ce,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===de,flipSided:T.side===tn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:xt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&T.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function m(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let L in T.defines)w.push(L),w.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(M(w,T),v(w,T),w.push(i.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function M(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function v(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){let w=p[T.type],L;if(w){let G=On[w];L=wp.clone(G.uniforms)}else L=T.uniforms;return L}function D(T,w){let L;for(let G=0,W=h.length;G<W;G++){let J=h[G];if(J.cacheKey===w){L=J,++L.usedTimes;break}}return L===void 0&&(L=new Ix(i,w,T,r),h.push(L)),L}function C(T){if(--T.usedTimes===0){let w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),T.destroy()}}function N(T){l.remove(T)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:D,releaseProgram:C,releaseShaderCache:N,programs:h,dispose:k}}function Ux(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,x,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Nx),n.length>1&&n.sort(d||Yh),s.length>1&&s.sort(d||Yh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ox(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Zh,i.set(n,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ot};break;case"SpotLight":e={position:new z,direction:new z,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Fx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bx=0;function zx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hx(i){let t=new kx,e=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new ee,o=new ee;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,v=0,_=0,D=0,C=0,N=0;c.sort(zx);for(let T=0,w=c.length;T<w;T++){let L=c[T],G=L.color,W=L.intensity,J=L.distance,it=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*W,u+=G.g*W,d+=G.b*W;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],W);N++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,tt=e.get(L);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,n.directionalShadow[f]=tt,n.directionalShadowMap[f]=it,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=K,f++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(G).multiplyScalar(W),K.distance=J,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[x]=K;let ot=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,ot.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[x]=ot.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,n.spotShadow[x]=tt,n.spotShadowMap[x]=it,_++}x++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy(G).multiplyScalar(W),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=K,g++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let ot=L.shadow,tt=e.get(L);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,tt.shadowCameraNear=ot.camera.near,tt.shadowCameraFar=ot.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=L.shadow.matrix,v++}n.point[p]=K,p++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(W),K.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[m]=K,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let k=n.hash;(k.directionalLength!==f||k.pointLength!==p||k.spotLength!==x||k.rectAreaLength!==g||k.hemiLength!==m||k.numDirectionalShadows!==M||k.numPointShadows!==v||k.numSpotShadows!==_||k.numSpotMaps!==D||k.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,k.directionalLength=f,k.pointLength=p,k.spotLength=x,k.rectAreaLength=g,k.hemiLength=m,k.numDirectionalShadows=M,k.numPointShadows=v,k.numSpotShadows=_,k.numSpotMaps=D,k.numLightProbes=N,n.version=Bx++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let v=c[m];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Kh(i){let t=new Hx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Kh(i),t.set(s,[a])):r>=o.length?(a=new Kh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ql=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yl=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`;function Xx(i,t,e){let n=new ar,s=new ht,r=new ht,o=new Me,a=new ql({depthPacking:Nf}),l=new Yl,c={},h=e.maxTextureSize,u={[_i]:tn,[tn]:_i,[de]:de},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Gx,fragmentShader:Wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new jt;p.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Gt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let m=this.type;this.render=function(C,N,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let T=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(xi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=m!==Zn&&this.type===Zn,J=m===Zn&&this.type!==Zn;for(let it=0,K=C.length;it<K;it++){let ot=C[it],tt=ot.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let dt=tt.getFrameExtents();if(s.multiply(dt),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,tt.mapSize.y=r.y)),tt.map===null||W===!0||J===!0){let wt=this.type!==Zn?{minFilter:Rn,magFilter:Rn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new ni(s.x,s.y,wt),tt.map.texture.name=ot.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let ut=tt.getViewportCount();for(let wt=0;wt<ut;wt++){let Ft=tt.getViewport(wt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),G.viewport(o),tt.updateMatrices(ot,wt),n=tt.getFrustum(),_(N,k,tt.camera,ot,this.type)}tt.isPointLightShadow!==!0&&this.type===Zn&&M(tt,k),tt.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,w,L)};function M(C,N){let k=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(N,null,k,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(N,null,k,f,x,null)}function v(C,N,k,T){let w=null,L=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)w=L;else if(w=k.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let G=w.uuid,W=N.uuid,J=c[G];J===void 0&&(J={},c[G]=J);let it=J[W];it===void 0&&(it=w.clone(),J[W]=it,N.addEventListener("dispose",D)),w=it}if(w.visible=N.visible,w.wireframe=N.wireframe,T===Zn?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:u[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=i.properties.get(w);G.light=k}return w}function _(C,N,k,T,w){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===Zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let W=t.update(C),J=C.material;if(Array.isArray(J)){let it=W.groups;for(let K=0,ot=it.length;K<ot;K++){let tt=it[K],dt=J[tt.materialIndex];if(dt&&dt.visible){let ut=v(C,dt,T,w);C.onBeforeShadow(i,C,N,k,W,ut,tt),i.renderBufferDirect(k,null,W,ut,C,tt),C.onAfterShadow(i,C,N,k,W,ut,tt)}}}else if(J.visible){let it=v(C,J,T,w);C.onBeforeShadow(i,C,N,k,W,it,null),i.renderBufferDirect(k,null,W,it,C,null),C.onAfterShadow(i,C,N,k,W,it,null)}}let G=C.children;for(let W=0,J=G.length;W<J;W++)_(G[W],N,k,T,w)}function D(C){C.target.removeEventListener("dispose",D);for(let k in c){let T=c[k],w=C.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var $x={[ja]:Qa,[tl]:il,[el]:sl,[Ms]:nl,[Qa]:ja,[il]:tl,[sl]:el,[nl]:Ms};function qx(i,t){function e(){let P=!1,H=new Me,V=null,F=new Me(0,0,0,0);return{setMask:function(q){V!==q&&!P&&(i.colorMask(q,q,q,q),V=q)},setLocked:function(q){P=q},setClear:function(q,Q,xt,Mt,Ht){Ht===!0&&(q*=Mt,Q*=Mt,xt*=Mt),H.set(q,Q,xt,Mt),F.equals(H)===!1&&(i.clearColor(q,Q,xt,Mt),F.copy(H))},reset:function(){P=!1,V=null,F.set(-1,0,0,0)}}}function n(){let P=!1,H=!1,V=null,F=null,q=null;return{setReversed:function(Q){if(H!==Q){let xt=t.get("EXT_clip_control");H?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT);let Mt=q;q=null,this.setClear(Mt)}H=Q},getReversed:function(){return H},setTest:function(Q){Q?mt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(Q){V!==Q&&!P&&(i.depthMask(Q),V=Q)},setFunc:function(Q){if(H&&(Q=$x[Q]),F!==Q){switch(Q){case ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=Q}},setLocked:function(Q){P=Q},setClear:function(Q){q!==Q&&(H&&(Q=1-Q),i.clearDepth(Q),q=Q)},reset:function(){P=!1,V=null,F=null,q=null,H=!1}}}function s(){let P=!1,H=null,V=null,F=null,q=null,Q=null,xt=null,Mt=null,Ht=null;return{setTest:function(St){P||(St?mt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(St){H!==St&&!P&&(i.stencilMask(St),H=St)},setFunc:function(St,Jt,fe){(V!==St||F!==Jt||q!==fe)&&(i.stencilFunc(St,Jt,fe),V=St,F=Jt,q=fe)},setOp:function(St,Jt,fe){(Q!==St||xt!==Jt||Mt!==fe)&&(i.stencilOp(St,Jt,fe),Q=St,xt=Jt,Mt=fe)},setLocked:function(St){P=St},setClear:function(St){Ht!==St&&(i.clearStencil(St),Ht=St)},reset:function(){P=!1,H=null,V=null,F=null,q=null,Q=null,xt=null,Mt=null,Ht=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,M=null,v=null,_=null,D=null,C=null,N=new Ot(0,0,0),k=0,T=!1,w=null,L=null,G=null,W=null,J=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ot=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=ot>=1):tt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=ot>=2);let dt=null,ut={},wt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Zt=new Me().fromArray(wt),st=new Me().fromArray(Ft);function pt(P,H,V,F){let q=new Uint8Array(4),Q=i.createTexture();i.bindTexture(P,Q),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<V;xt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,F,0,i.RGBA,i.UNSIGNED_BYTE,q):i.texImage2D(H+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,q);return Q}let Tt={};Tt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(Ms),ft(!1),At(Qc),mt(i.CULL_FACE),B(xi);function mt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function kt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Vt(P,H){return u[P]!==H?(i.bindFramebuffer(P,H),u[P]=H,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=H),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=H),!0):!1}function zt(P,H){let V=f,F=!1;if(P){V=d.get(H),V===void 0&&(V=[],d.set(H,V));let q=P.textures;if(V.length!==q.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,xt=q.length;Q<xt;Q++)V[Q]=i.COLOR_ATTACHMENT0+Q;V.length=q.length,F=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,F=!0);F&&i.drawBuffers(V)}function Qt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}let at={[Ii]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};at[cf]=i.MIN,at[hf]=i.MAX;let gt={[uf]:i.ZERO,[df]:i.ONE,[ff]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function B(P,H,V,F,q,Q,xt,Mt,Ht,St){if(P===xi){x===!0&&(kt(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),P!==of){if(P!==g||St!==T){if((m!==Ii||_!==Ii)&&(i.blendEquation(i.FUNC_ADD),m=Ii,_=Ii),St)switch(P){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,v=null,D=null,C=null,N.set(0,0,0),k=0,g=P,T=St}return}q=q||H,Q=Q||V,xt=xt||F,(H!==m||q!==_)&&(i.blendEquationSeparate(at[H],at[q]),m=H,_=q),(V!==M||F!==v||Q!==D||xt!==C)&&(i.blendFuncSeparate(gt[V],gt[F],gt[Q],gt[xt]),M=V,v=F,D=Q,C=xt),(Mt.equals(N)===!1||Ht!==k)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ht),N.copy(Mt),k=Ht),g=P,T=!1}function Pt(P,H){P.side===de?kt(i.CULL_FACE):mt(i.CULL_FACE);let V=P.side===tn;H&&(V=!V),ft(V),P.blending===xs&&P.transparent===!1?B(xi):B(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let F=P.stencilWrite;a.setTest(F),F&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Bt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(P){w!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),w=P)}function At(P){P!==nf?(mt(i.CULL_FACE),P!==L&&(P===Qc?i.cullFace(i.BACK):P===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),L=P}function _t(P){P!==G&&(K&&i.lineWidth(P),G=P)}function Bt(P,H,V){P?(mt(i.POLYGON_OFFSET_FILL),(W!==H||J!==V)&&(i.polygonOffset(H,V),W=H,J=V)):kt(i.POLYGON_OFFSET_FILL)}function Rt(P){P?mt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function U(P){P===void 0&&(P=i.TEXTURE0+it-1),dt!==P&&(i.activeTexture(P),dt=P)}function S(P,H,V){V===void 0&&(dt===null?V=i.TEXTURE0+it-1:V=dt);let F=ut[V];F===void 0&&(F={type:void 0,texture:void 0},ut[V]=F),(F.type!==P||F.texture!==H)&&(dt!==V&&(i.activeTexture(V),dt=V),i.bindTexture(P,H||Tt[P]),F.type=P,F.texture=H)}function j(){let P=ut[dt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function y(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(P){Zt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Zt.copy(P))}function R(P){st.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),st.copy(P))}function I(P,H){let V=c.get(H);V===void 0&&(V=new WeakMap,c.set(H,V));let F=V.get(P);F===void 0&&(F=i.getUniformBlockIndex(H,P.name),V.set(P,F))}function X(P,H){let F=c.get(H).get(P);l.get(H)!==F&&(i.uniformBlockBinding(H,F,P.__bindingPointIndex),l.set(H,F))}function $(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,ut={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,M=null,v=null,_=null,D=null,C=null,N=new Ot(0,0,0),k=0,T=!1,w=null,L=null,G=null,W=null,J=null,Zt.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:kt,bindFramebuffer:Vt,drawBuffers:zt,useProgram:Qt,setBlending:B,setMaterial:Pt,setFlipSided:ft,setCullFace:At,setLineWidth:_t,setPolygonOffset:Bt,setScissorTest:Rt,activeTexture:U,bindTexture:S,unbindTexture:j,compressedTexImage2D:rt,compressedTexImage3D:ct,texImage2D:y,texImage3D:b,updateUBOMapping:I,uniformBlockBinding:X,texStorage2D:Kt,texStorage3D:O,texSubImage2D:lt,texSubImage3D:It,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ct,scissor:E,viewport:R,reset:$}}function Jh(i,t,e,n){let s=Yx(n);switch(e){case vu:return i*t;case Mu:return i*t;case wu:return i*t*2;case Su:return i*t/s.components*s.byteLength;case Tc:return i*t/s.components*s.byteLength;case Eu:return i*t*2/s.components*s.byteLength;case Ac:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Rc:return i*t*4/s.components*s.byteLength;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(t,8)/2;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ao:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tu:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yx(i){switch(i){case ti:case xu:return{byteLength:1,components:1};case sr:case yu:case pr:return{byteLength:2,components:1};case Sc:case Ec:return{byteLength:2,components:4};case Ni:case wc:case Jn:return{byteLength:4,components:1};case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(U,S){return f?new OffscreenCanvas(U,S):ho("canvas")}function x(U,S,j){let rt=1,ct=Rt(U);if((ct.width>j||ct.height>j)&&(rt=j/Math.max(ct.width,ct.height)),rt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let lt=Math.floor(rt*ct.width),It=Math.floor(rt*ct.height);u===void 0&&(u=p(lt,It));let bt=S?p(lt,It):u;return bt.width=lt,bt.height=It,bt.getContext("2d").drawImage(U,0,0,lt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+lt+"x"+It+")."),bt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function g(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,S,j,rt,ct=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=S;if(S===i.RED&&(j===i.FLOAT&&(lt=i.R32F),j===i.HALF_FLOAT&&(lt=i.R16F),j===i.UNSIGNED_BYTE&&(lt=i.R8)),S===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.R8UI),j===i.UNSIGNED_SHORT&&(lt=i.R16UI),j===i.UNSIGNED_INT&&(lt=i.R32UI),j===i.BYTE&&(lt=i.R8I),j===i.SHORT&&(lt=i.R16I),j===i.INT&&(lt=i.R32I)),S===i.RG&&(j===i.FLOAT&&(lt=i.RG32F),j===i.HALF_FLOAT&&(lt=i.RG16F),j===i.UNSIGNED_BYTE&&(lt=i.RG8)),S===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RG8UI),j===i.UNSIGNED_SHORT&&(lt=i.RG16UI),j===i.UNSIGNED_INT&&(lt=i.RG32UI),j===i.BYTE&&(lt=i.RG8I),j===i.SHORT&&(lt=i.RG16I),j===i.INT&&(lt=i.RG32I)),S===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),j===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),j===i.UNSIGNED_INT&&(lt=i.RGB32UI),j===i.BYTE&&(lt=i.RGB8I),j===i.SHORT&&(lt=i.RGB16I),j===i.INT&&(lt=i.RGB32I)),S===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),j===i.UNSIGNED_INT&&(lt=i.RGBA32UI),j===i.BYTE&&(lt=i.RGBA8I),j===i.SHORT&&(lt=i.RGBA16I),j===i.INT&&(lt=i.RGBA32I)),S===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),S===i.RGBA){let It=ct?zo:te.getTransfer(rt);j===i.FLOAT&&(lt=i.RGBA32F),j===i.HALF_FLOAT&&(lt=i.RGBA16F),j===i.UNSIGNED_BYTE&&(lt=It===ce?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function _(U,S){let j;return U?S===null||S===Ni||S===Es?j=i.DEPTH24_STENCIL8:S===Jn?j=i.DEPTH32F_STENCIL8:S===sr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===Es?j=i.DEPTH_COMPONENT24:S===Jn?j=i.DEPTH_COMPONENT32F:S===sr&&(j=i.DEPTH_COMPONENT16),j}function D(U,S){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Rn&&U.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function C(U){let S=U.target;S.removeEventListener("dispose",C),k(S),S.isVideoTexture&&h.delete(S)}function N(U){let S=U.target;S.removeEventListener("dispose",N),w(S)}function k(U){let S=n.get(U);if(S.__webglInit===void 0)return;let j=U.source,rt=d.get(j);if(rt){let ct=rt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&T(U),Object.keys(rt).length===0&&d.delete(j)}n.remove(U)}function T(U){let S=n.get(U);i.deleteTexture(S.__webglTexture);let j=U.source,rt=d.get(j);delete rt[S.__cacheKey],o.memory.textures--}function w(U){let S=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let ct=0;ct<S.__webglFramebuffer[rt].length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[rt][ct]);else i.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[rt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=U.textures;for(let rt=0,ct=j.length;rt<ct;rt++){let lt=n.get(j[rt]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(j[rt])}n.remove(U)}let L=0;function G(){L=0}function W(){let U=L;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),L+=1,U}function J(U){let S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function it(U,S){let j=n.get(U);if(U.isVideoTexture&&_t(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){let rt=U.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(j,U,S);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+S)}function K(U,S){let j=n.get(U);if(U.version>0&&j.__version!==U.version){st(j,U,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+S)}function ot(U,S){let j=n.get(U);if(U.version>0&&j.__version!==U.version){st(j,U,S);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+S)}function tt(U,S){let j=n.get(U);if(U.version>0&&j.__version!==U.version){pt(j,U,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+S)}let dt={[ir]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},ut={[Rn]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},wt={[kf]:i.NEVER,[Gf]:i.ALWAYS,[Ff]:i.LESS,[Ru]:i.LEQUAL,[Bf]:i.EQUAL,[Vf]:i.GEQUAL,[zf]:i.GREATER,[Hf]:i.NOTEQUAL};function Ft(U,S){if(S.type===Jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===kn||S.magFilter===ma||S.magFilter===Mr||S.magFilter===Ui||S.minFilter===kn||S.minFilter===ma||S.minFilter===Mr||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,dt[S.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,dt[S.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,dt[S.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ut[S.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Rn||S.minFilter!==Mr&&S.minFilter!==Ui||S.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(U,S){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",C));let rt=S.source,ct=d.get(rt);ct===void 0&&(ct={},d.set(rt,ct));let lt=J(S);if(lt!==U.__cacheKey){ct[lt]===void 0&&(ct[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ct[lt].usedTimes++;let It=ct[U.__cacheKey];It!==void 0&&(ct[U.__cacheKey].usedTimes--,It.usedTimes===0&&T(S)),U.__cacheKey=lt,U.__webglTexture=ct[lt].texture}return j}function st(U,S,j){let rt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=i.TEXTURE_3D);let ct=Zt(U,S),lt=S.source;e.bindTexture(rt,U.__webglTexture,i.TEXTURE0+j);let It=n.get(lt);if(lt.version!==It.__version||ct===!0){e.activeTexture(i.TEXTURE0+j);let bt=te.getPrimaries(te.workingColorSpace),Ct=S.colorSpace===gi?null:te.getPrimaries(S.colorSpace),Kt=S.colorSpace===gi||bt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let O=x(S.image,!1,s.maxTextureSize);O=Bt(S,O);let y=r.convert(S.format,S.colorSpace),b=r.convert(S.type),E=v(S.internalFormat,y,b,S.colorSpace,S.isVideoTexture);Ft(rt,S);let R,I=S.mipmaps,X=S.isVideoTexture!==!0,$=It.__version===void 0||ct===!0,P=lt.dataReady,H=D(S,O);if(S.isDepthTexture)E=_(S.format===Ts,S.type),$&&(X?e.texStorage2D(i.TEXTURE_2D,1,E,O.width,O.height):e.texImage2D(i.TEXTURE_2D,0,E,O.width,O.height,0,y,b,null));else if(S.isDataTexture)if(I.length>0){X&&$&&e.texStorage2D(i.TEXTURE_2D,H,E,I[0].width,I[0].height);for(let V=0,F=I.length;V<F;V++)R=I[V],X?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,R.width,R.height,y,b,R.data):e.texImage2D(i.TEXTURE_2D,V,E,R.width,R.height,0,y,b,R.data);S.generateMipmaps=!1}else X?($&&e.texStorage2D(i.TEXTURE_2D,H,E,O.width,O.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,y,b,O.data)):e.texImage2D(i.TEXTURE_2D,0,E,O.width,O.height,0,y,b,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){X&&$&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,E,I[0].width,I[0].height,O.depth);for(let V=0,F=I.length;V<F;V++)if(R=I[V],S.format!==An)if(y!==null)if(X){if(P)if(S.layerUpdates.size>0){let q=Jh(R.width,R.height,S.format,S.type);for(let Q of S.layerUpdates){let xt=R.data.subarray(Q*q/R.data.BYTES_PER_ELEMENT,(Q+1)*q/R.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,Q,R.width,R.height,1,y,xt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,R.width,R.height,O.depth,y,R.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,E,R.width,R.height,O.depth,0,R.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,R.width,R.height,O.depth,y,b,R.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,E,R.width,R.height,O.depth,0,y,b,R.data)}else{X&&$&&e.texStorage2D(i.TEXTURE_2D,H,E,I[0].width,I[0].height);for(let V=0,F=I.length;V<F;V++)R=I[V],S.format!==An?y!==null?X?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,R.width,R.height,y,R.data):e.compressedTexImage2D(i.TEXTURE_2D,V,E,R.width,R.height,0,R.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,R.width,R.height,y,b,R.data):e.texImage2D(i.TEXTURE_2D,V,E,R.width,R.height,0,y,b,R.data)}else if(S.isDataArrayTexture)if(X){if($&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,E,O.width,O.height,O.depth),P)if(S.layerUpdates.size>0){let V=Jh(O.width,O.height,S.format,S.type);for(let F of S.layerUpdates){let q=O.data.subarray(F*V/O.data.BYTES_PER_ELEMENT,(F+1)*V/O.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,F,O.width,O.height,1,y,b,q)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,y,b,O.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,E,O.width,O.height,O.depth,0,y,b,O.data);else if(S.isData3DTexture)X?($&&e.texStorage3D(i.TEXTURE_3D,H,E,O.width,O.height,O.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,y,b,O.data)):e.texImage3D(i.TEXTURE_3D,0,E,O.width,O.height,O.depth,0,y,b,O.data);else if(S.isFramebufferTexture){if($)if(X)e.texStorage2D(i.TEXTURE_2D,H,E,O.width,O.height);else{let V=O.width,F=O.height;for(let q=0;q<H;q++)e.texImage2D(i.TEXTURE_2D,q,E,V,F,0,y,b,null),V>>=1,F>>=1}}else if(I.length>0){if(X&&$){let V=Rt(I[0]);e.texStorage2D(i.TEXTURE_2D,H,E,V.width,V.height)}for(let V=0,F=I.length;V<F;V++)R=I[V],X?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,y,b,R):e.texImage2D(i.TEXTURE_2D,V,E,y,b,R);S.generateMipmaps=!1}else if(X){if($){let V=Rt(O);e.texStorage2D(i.TEXTURE_2D,H,E,V.width,V.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,y,b,O)}else e.texImage2D(i.TEXTURE_2D,0,E,y,b,O);g(S)&&m(rt),It.__version=lt.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function pt(U,S,j){if(S.image.length!==6)return;let rt=Zt(U,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);let lt=n.get(ct);if(ct.version!==lt.__version||rt===!0){e.activeTexture(i.TEXTURE0+j);let It=te.getPrimaries(te.workingColorSpace),bt=S.colorSpace===gi?null:te.getPrimaries(S.colorSpace),Ct=S.colorSpace===gi||It===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,O=S.image[0]&&S.image[0].isDataTexture,y=[];for(let F=0;F<6;F++)!Kt&&!O?y[F]=x(S.image[F],!0,s.maxCubemapSize):y[F]=O?S.image[F].image:S.image[F],y[F]=Bt(S,y[F]);let b=y[0],E=r.convert(S.format,S.colorSpace),R=r.convert(S.type),I=v(S.internalFormat,E,R,S.colorSpace),X=S.isVideoTexture!==!0,$=lt.__version===void 0||rt===!0,P=ct.dataReady,H=D(S,b);Ft(i.TEXTURE_CUBE_MAP,S);let V;if(Kt){X&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,H,I,b.width,b.height);for(let F=0;F<6;F++){V=y[F].mipmaps;for(let q=0;q<V.length;q++){let Q=V[q];S.format!==An?E!==null?X?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,0,0,Q.width,Q.height,E,Q.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,I,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,0,0,Q.width,Q.height,E,R,Q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,I,Q.width,Q.height,0,E,R,Q.data)}}}else{if(V=S.mipmaps,X&&$){V.length>0&&H++;let F=Rt(y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,H,I,F.width,F.height)}for(let F=0;F<6;F++)if(O){X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,y[F].width,y[F].height,E,R,y[F].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,I,y[F].width,y[F].height,0,E,R,y[F].data);for(let q=0;q<V.length;q++){let xt=V[q].image[F].image;X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,0,0,xt.width,xt.height,E,R,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,I,xt.width,xt.height,0,E,R,xt.data)}}else{X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,E,R,y[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,I,E,R,y[F]);for(let q=0;q<V.length;q++){let Q=V[q];X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,0,0,E,R,Q.image[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,I,E,R,Q.image[F])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),lt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Tt(U,S,j,rt,ct,lt){let It=r.convert(j.format,j.colorSpace),bt=r.convert(j.type),Ct=v(j.internalFormat,It,bt,j.colorSpace),Kt=n.get(S),O=n.get(j);if(O.__renderTarget=S,!Kt.__hasExternalTextures){let y=Math.max(1,S.width>>lt),b=Math.max(1,S.height>>lt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,lt,Ct,y,b,S.depth,0,It,bt,null):e.texImage2D(ct,lt,Ct,y,b,0,It,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ct,O.__webglTexture,0,ft(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ct,O.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(U,S,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),S.depthBuffer){let rt=S.depthTexture,ct=rt&&rt.isDepthTexture?rt.type:null,lt=_(S.stencilBuffer,ct),It=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=ft(S);At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,lt,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,lt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,U)}else{let rt=S.textures;for(let ct=0;ct<rt.length;ct++){let lt=rt[ct],It=r.convert(lt.format,lt.colorSpace),bt=r.convert(lt.type),Ct=v(lt.internalFormat,It,bt,lt.colorSpace),Kt=ft(S);j&&At(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ct,S.width,S.height):At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Ct,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(U,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(S.depthTexture);rt.__renderTarget=S,(!rt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),it(S.depthTexture,0);let ct=rt.__webglTexture,lt=ft(S);if(S.depthTexture.format===ys)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Ts)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Vt(U){let S=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){let rt=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){let ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",ct)};rt.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=rt}if(U.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,U)}else if(j){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=i.createRenderbuffer(),mt(S.__webglDepthbuffer[rt],U,!1);else{let ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),mt(S.__webglDepthbuffer,U,!1);else{let rt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(U,S,j){let rt=n.get(U);S!==void 0&&Tt(rt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Vt(U)}function Qt(U){let S=U.texture,j=n.get(U),rt=n.get(S);U.addEventListener("dispose",N);let ct=U.textures,lt=U.isWebGLCubeRenderTarget===!0,It=ct.length>1;if(It||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=S.version,o.memory.textures++),lt){j.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[bt]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)j.__webglFramebuffer[bt][Ct]=i.createFramebuffer()}else j.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)j.__webglFramebuffer[bt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(It)for(let bt=0,Ct=ct.length;bt<Ct;bt++){let Kt=n.get(ct[bt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&At(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let bt=0;bt<ct.length;bt++){let Ct=ct[bt];j.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[bt]);let Kt=r.convert(Ct.format,Ct.colorSpace),O=r.convert(Ct.type),y=v(Ct.internalFormat,Kt,O,Ct.colorSpace,U.isXRRenderTarget===!0),b=ft(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,b,y,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,j.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(j.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Tt(j.__webglFramebuffer[bt][Ct],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ct);else Tt(j.__webglFramebuffer[bt],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);g(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let bt=0,Ct=ct.length;bt<Ct;bt++){let Kt=ct[bt],O=n.get(Kt);e.bindTexture(i.TEXTURE_2D,O.__webglTexture),Ft(i.TEXTURE_2D,Kt),Tt(j.__webglFramebuffer,U,Kt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),g(Kt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(bt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,rt.__webglTexture),Ft(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Tt(j.__webglFramebuffer[Ct],U,S,i.COLOR_ATTACHMENT0,bt,Ct);else Tt(j.__webglFramebuffer,U,S,i.COLOR_ATTACHMENT0,bt,0);g(S)&&m(bt),e.unbindTexture()}U.depthBuffer&&Vt(U)}function at(U){let S=U.textures;for(let j=0,rt=S.length;j<rt;j++){let ct=S[j];if(g(ct)){let lt=M(U),It=n.get(ct).__webglTexture;e.bindTexture(lt,It),m(lt),e.unbindTexture()}}}let gt=[],B=[];function Pt(U){if(U.samples>0){if(At(U)===!1){let S=U.textures,j=U.width,rt=U.height,ct=i.COLOR_BUFFER_BIT,lt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(U),bt=S.length>1;if(bt)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let Kt=n.get(S[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,j,rt,0,0,j,rt,ct,i.NEAREST),l===!0&&(gt.length=0,B.length=0,gt.push(i.COLOR_ATTACHMENT0+Ct),U.depthBuffer&&U.resolveDepthBuffer===!1&&(gt.push(lt),B.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let Kt=n.get(S[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let S=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ft(U){return Math.min(s.maxSamples,U.samples)}function At(U){let S=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(U){let S=o.render.frame;h.get(U)!==S&&(h.set(U,S),U.update())}function Bt(U,S){let j=U.colorSpace,rt=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Is&&j!==gi&&(te.getTransfer(j)===ce?(rt!==An||ct!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function Rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=K,this.setTexture3D=ot,this.setTextureCube=tt,this.rebindTextures=zt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=At}function Kx(i,t){function e(n,s=gi){let r,o=te.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return i.BYTE;if(n===yu)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===pr)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===bu)return i.RGB;if(n===An)return i.RGBA;if(n===Mu)return i.LUMINANCE;if(n===wu)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Su)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===xl||n===yl||n===_l||n===vl||n===bl||n===Ml||n===wl||n===Sl||n===El||n===Tl||n===Al||n===Rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===Cl||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===Il||n===Ll||n===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zl=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jx={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hn({vertexShader:jx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends ei{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new Kl,g=e.getContextAttributes(),m=null,M=null,v=[],_=[],D=new ht,C=null,N=new $e;N.viewport=new Me;let k=new $e;k.viewport=new Me;let T=[N,k],w=new Zl,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let pt=v[st];return pt===void 0&&(pt=new Qs,v[st]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(st){let pt=v[st];return pt===void 0&&(pt=new Qs,v[st]=pt),pt.getGripSpace()},this.getHand=function(st){let pt=v[st];return pt===void 0&&(pt=new Qs,v[st]=pt),pt.getHandSpace()};function W(st){let pt=_.indexOf(st.inputSource);if(pt===-1)return;let Tt=v[pt];Tt!==void 0&&(Tt.update(st.inputSource,st.frame,c||o),Tt.dispatchEvent({type:st.type,data:st.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",it);for(let st=0;st<v.length;st++){let pt=_[st];pt!==null&&(_[st]=null,v[st].disconnect(pt))}L=null,G=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",it),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ni(f.framebufferWidth,f.framebufferHeight,{format:An,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let pt=null,Tt=null,mt=null;g.depth&&(mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=g.stencil?Ts:ys,Tt=g.stencil?Es:Ni);let kt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ni(d.textureWidth,d.textureHeight,{format:An,type:ti,depthTexture:new vo(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function it(st){for(let pt=0;pt<st.removed.length;pt++){let Tt=st.removed[pt],mt=_.indexOf(Tt);mt>=0&&(_[mt]=null,v[mt].disconnect(Tt))}for(let pt=0;pt<st.added.length;pt++){let Tt=st.added[pt],mt=_.indexOf(Tt);if(mt===-1){for(let Vt=0;Vt<v.length;Vt++)if(Vt>=_.length){_.push(Tt),mt=Vt;break}else if(_[Vt]===null){_[Vt]=Tt,mt=Vt;break}if(mt===-1)break}let kt=v[mt];kt&&kt.connect(Tt)}}let K=new z,ot=new z;function tt(st,pt,Tt){K.setFromMatrixPosition(pt.matrixWorld),ot.setFromMatrixPosition(Tt.matrixWorld);let mt=K.distanceTo(ot),kt=pt.projectionMatrix.elements,Vt=Tt.projectionMatrix.elements,zt=kt[14]/(kt[10]-1),Qt=kt[14]/(kt[10]+1),at=(kt[9]+1)/kt[5],gt=(kt[9]-1)/kt[5],B=(kt[8]-1)/kt[0],Pt=(Vt[8]+1)/Vt[0],ft=zt*B,At=zt*Pt,_t=mt/(-B+Pt),Bt=_t*-B;if(pt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Bt),st.translateZ(_t),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),kt[10]===-1)st.projectionMatrix.copy(pt.projectionMatrix),st.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let Rt=zt+_t,U=Qt+_t,S=ft-Bt,j=At+(mt-Bt),rt=at*Qt/U*Rt,ct=gt*Qt/U*Rt;st.projectionMatrix.makePerspective(S,j,rt,ct,Rt,U),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function dt(st,pt){pt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(pt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let pt=st.near,Tt=st.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),w.near=k.near=N.near=pt,w.far=k.far=N.far=Tt,(L!==w.near||G!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,G=w.far),N.layers.mask=st.layers.mask|2,k.layers.mask=st.layers.mask|4,w.layers.mask=N.layers.mask|k.layers.mask;let mt=st.parent,kt=w.cameras;dt(w,mt);for(let Vt=0;Vt<kt.length;Vt++)dt(kt[Vt],mt);kt.length===2?tt(w,N,k):w.projectionMatrix.copy(N.projectionMatrix),ut(st,w,mt)};function ut(st,pt,Tt){Tt===null?st.matrix.copy(pt.matrixWorld):(st.matrix.copy(Tt.matrixWorld),st.matrix.invert(),st.matrix.multiply(pt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(pt.projectionMatrix),st.projectionMatrixInverse.copy(pt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=rr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(st){l=st,d!==null&&(d.fixedFoveation=st),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=st)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let wt=null;function Ft(st,pt){if(h=pt.getViewerPose(c||o),p=pt,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let mt=!1;Tt.length!==w.cameras.length&&(w.cameras.length=0,mt=!0);for(let Vt=0;Vt<Tt.length;Vt++){let zt=Tt[Vt],Qt=null;if(f!==null)Qt=f.getViewport(zt);else{let gt=u.getViewSubImage(d,zt);Qt=gt.viewport,Vt===0&&(t.setRenderTargetTextures(M,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(M))}let at=T[Vt];at===void 0&&(at=new $e,at.layers.enable(Vt),at.viewport=new Me,T[Vt]=at),at.matrix.fromArray(zt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(zt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Vt===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),mt===!0&&w.cameras.push(at)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Vt=u.getDepthInformation(Tt[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,s.renderState)}}for(let Tt=0;Tt<v.length;Tt++){let mt=_[Tt],kt=v[Tt];mt!==null&&kt!==void 0&&kt.update(mt,pt,c||o)}wt&&wt(st,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),p=null}let Zt=new Du;Zt.setAnimationLoop(Ft),this.setAnimationLoop=function(st){wt=st},this.dispose=function(){}}},Ci=new Bn,ty=new ee;function ey(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Lu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),v=M.envMap,_=M.envMapRotation;v&&(g.envMap.value=v,Ci.copy(_),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(Ci)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ny(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let _=v.program;n.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(p(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));let D=v.program;n.updateUBOMapping(M,D);let C=t.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){let v=u();M.__bindingPointIndex=v;let _=i.createBuffer(),D=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=s[M.id],_=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,N=_.length;C<N;C++){let k=Array.isArray(_[C])?_[C]:[_[C]];for(let T=0,w=k.length;T<w;T++){let L=k[T];if(f(L,C,T,D)===!0){let G=L.__offset,W=Array.isArray(L.value)?L.value:[L.value],J=0;for(let it=0;it<W.length;it++){let K=W[it],ot=x(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,G+J,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,J),J+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,_,D){let C=M.value,N=v+"_"+_;if(D[N]===void 0)return typeof C=="number"||typeof C=="boolean"?D[N]=C:D[N]=C.clone(),!0;{let k=D[N];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return D[N]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function p(M){let v=M.uniforms,_=0,D=16;for(let N=0,k=v.length;N<k;N++){let T=Array.isArray(v[N])?v[N]:[v[N]];for(let w=0,L=T.length;w<L;w++){let G=T[w],W=Array.isArray(G.value)?G.value:[G.value];for(let J=0,it=W.length;J<it;J++){let K=W[J],ot=x(K),tt=_%D,dt=tt%ot.boundary,ut=tt+dt;_+=dt,ut!==0&&D-ut<ot.storage&&(_+=D-ut),G.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=ot.storage}}}let C=_%D;return C>0&&(_+=D-C),M.__size=_,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var bo=class{constructor(t={}){let{canvas:e=op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=yi,this.toneMappingExposure=1;let _=this,D=!1,C=0,N=0,k=null,T=-1,w=null,L=new Me,G=new Me,W=null,J=new Ot(0),it=0,K=e.width,ot=e.height,tt=1,dt=null,ut=null,wt=new Me(0,0,K,ot),Ft=new Me(0,0,K,ot),Zt=!1,st=new ar,pt=!1,Tt=!1,mt=new ee,kt=new ee,Vt=new z,zt=new Me,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function gt(){return k===null?tt:1}let B=n;function Pt(A,Y){return e.getContext(A,Y)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",F,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",Q,!1),B===null){let Y="webgl2";if(B=Pt(Y,A),B===null)throw Pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,At,_t,Bt,Rt,U,S,j,rt,ct,lt,It,bt,Ct,Kt,O,y,b,E,R,I,X,$,P;function H(){ft=new y0(B),ft.init(),X=new Kx(B,ft),At=new d0(B,ft,t,X),_t=new qx(B,ft),At.reverseDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),Bt=new b0(B),Rt=new Ux,U=new Zx(B,ft,_t,Rt,At,X,Bt),S=new p0(_),j=new x0(_),rt=new Rp(B),$=new h0(B,rt),ct=new _0(B,rt,Bt,$),lt=new w0(B,ct,rt,Bt),E=new M0(B,At,U),O=new f0(Rt),It=new Dx(_,S,j,ft,At,$,O),bt=new ey(_,Rt),Ct=new Ox,Kt=new Vx(ft),b=new c0(_,S,j,_t,lt,f,l),y=new Xx(_,lt,At),P=new ny(B,Bt,At,_t),R=new u0(B,ft,Bt),I=new v0(B,ft,Bt),Bt.programs=It.programs,_.capabilities=At,_.extensions=ft,_.properties=Rt,_.renderLists=Ct,_.shadowMap=y,_.state=_t,_.info=Bt}H();let V=new Jl(_,B);this.xr=V,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(A){A!==void 0&&(tt=A,this.setSize(K,ot,!1))},this.getSize=function(A){return A.set(K,ot)},this.setSize=function(A,Y,et=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,ot=Y,e.width=Math.floor(A*tt),e.height=Math.floor(Y*tt),et===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(K*tt,ot*tt).floor()},this.setDrawingBufferSize=function(A,Y,et){K=A,ot=Y,tt=et,e.width=Math.floor(A*et),e.height=Math.floor(Y*et),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(wt)},this.setViewport=function(A,Y,et,nt){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,Y,et,nt),_t.viewport(L.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(A){return A.copy(Ft)},this.setScissor=function(A,Y,et,nt){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,Y,et,nt),_t.scissor(G.copy(Ft).multiplyScalar(tt).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(A){_t.setScissorTest(Zt=A)},this.setOpaqueSort=function(A){dt=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(b.getClearColor())},this.setClearColor=function(){b.setClearColor.apply(b,arguments)},this.getClearAlpha=function(){return b.getClearAlpha()},this.setClearAlpha=function(){b.setClearAlpha.apply(b,arguments)},this.clear=function(A=!0,Y=!0,et=!0){let nt=0;if(A){let Z=!1;if(k!==null){let yt=k.texture.format;Z=yt===Rc||yt===Ac||yt===Tc}if(Z){let yt=k.texture.type,Et=yt===ti||yt===Ni||yt===sr||yt===Es||yt===Sc||yt===Ec,Lt=b.getClearColor(),Dt=b.getClearAlpha(),Wt=Lt.r,Xt=Lt.g,Ut=Lt.b;Et?(p[0]=Wt,p[1]=Xt,p[2]=Ut,p[3]=Dt,B.clearBufferuiv(B.COLOR,0,p)):(x[0]=Wt,x[1]=Xt,x[2]=Ut,x[3]=Dt,B.clearBufferiv(B.COLOR,0,x))}else nt|=B.COLOR_BUFFER_BIT}Y&&(nt|=B.DEPTH_BUFFER_BIT),et&&(nt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",F,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),Ct.dispose(),Kt.dispose(),Rt.dispose(),S.dispose(),j.dispose(),lt.dispose(),$.dispose(),P.dispose(),It.dispose(),V.dispose(),V.removeEventListener("sessionstart",_e),V.removeEventListener("sessionend",Ce),xe.stop()};function F(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let A=Bt.autoReset,Y=y.enabled,et=y.autoUpdate,nt=y.needsUpdate,Z=y.type;H(),Bt.autoReset=A,y.enabled=Y,y.autoUpdate=et,y.needsUpdate=nt,y.type=Z}function Q(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){let Y=A.target;Y.removeEventListener("dispose",xt),Mt(Y)}function Mt(A){Ht(A),Rt.remove(A)}function Ht(A){let Y=Rt.get(A).programs;Y!==void 0&&(Y.forEach(function(et){It.releaseProgram(et)}),A.isShaderMaterial&&It.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,et,nt,Z,yt){Y===null&&(Y=Qt);let Et=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=da(A,Y,et,nt,Z);_t.setMaterial(nt,Et);let Dt=et.index,Wt=1;if(nt.wireframe===!0){if(Dt=ct.getWireframeAttribute(et),Dt===void 0)return;Wt=2}let Xt=et.drawRange,Ut=et.attributes.position,ie=Xt.start*Wt,pe=(Xt.start+Xt.count)*Wt;yt!==null&&(ie=Math.max(ie,yt.start*Wt),pe=Math.min(pe,(yt.start+yt.count)*Wt)),Dt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,Dt.count)):Ut!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,Ut.count));let me=pe-ie;if(me<0||me===1/0)return;$.setup(Z,nt,Lt,et,Dt);let je,se=R;if(Dt!==null&&(je=rt.get(Dt),se=I,se.setIndex(je)),Z.isMesh)nt.wireframe===!0?(_t.setLineWidth(nt.wireframeLinewidth*gt()),se.setMode(B.LINES)):se.setMode(B.TRIANGLES);else if(Z.isLine){let Nt=nt.linewidth;Nt===void 0&&(Nt=1),_t.setLineWidth(Nt*gt()),Z.isLineSegments?se.setMode(B.LINES):Z.isLineLoop?se.setMode(B.LINE_LOOP):se.setMode(B.LINE_STRIP)}else Z.isPoints?se.setMode(B.POINTS):Z.isSprite&&se.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)se.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))se.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Nt=Z._multiDrawStarts,Gn=Z._multiDrawCounts,re=Z._multiDrawCount,bn=Dt?rt.get(Dt).bytesPerElement:1,Ki=Rt.get(nt).currentProgram.getUniforms();for(let sn=0;sn<re;sn++)Ki.setValue(B,"_gl_DrawID",sn),se.render(Nt[sn]/bn,Gn[sn])}else if(Z.isInstancedMesh)se.renderInstances(ie,me,Z.count);else if(et.isInstancedBufferGeometry){let Nt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Gn=Math.min(et.instanceCount,Nt);se.renderInstances(ie,me,Gn)}else se.render(ie,me)};function St(A,Y,et){A.transparent===!0&&A.side===de&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,ze(A,Y,et),A.side=_i,A.needsUpdate=!0,ze(A,Y,et),A.side=de):ze(A,Y,et)}this.compile=function(A,Y,et=null){et===null&&(et=A),m=Kt.get(et),m.init(Y),v.push(m),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),A!==et&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();let nt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let yt=Z.material;if(yt)if(Array.isArray(yt))for(let Et=0;Et<yt.length;Et++){let Lt=yt[Et];St(Lt,et,Z),nt.add(Lt)}else St(yt,et,Z),nt.add(yt)}),v.pop(),m=null,nt},this.compileAsync=function(A,Y,et=null){let nt=this.compile(A,Y,et);return new Promise(Z=>{function yt(){if(nt.forEach(function(Et){Rt.get(Et).currentProgram.isReady()&&nt.delete(Et)}),nt.size===0){Z(A);return}setTimeout(yt,10)}ft.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Jt=null;function fe(A){Jt&&Jt(A)}function _e(){xe.stop()}function Ce(){xe.start()}let xe=new Du;xe.setAnimationLoop(fe),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(A){Jt=A,V.setAnimationLoop(A),A===null?xe.stop():xe.start()},V.addEventListener("sessionstart",_e),V.addEventListener("sessionend",Ce),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(Y),Y=V.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,Y,k),m=Kt.get(A,v.length),m.init(Y),v.push(m),kt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),st.setFromProjectionMatrix(kt),Tt=this.localClippingEnabled,pt=O.init(this.clippingPlanes,Tt),g=Ct.get(A,M.length),g.init(),M.push(g),V.enabled===!0&&V.isPresenting===!0){let yt=_.xr.getDepthSensingMesh();yt!==null&&Fe(yt,Y,-1/0,_.sortObjects)}Fe(A,Y,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(dt,ut),at=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,at&&b.addToRenderList(g,A),this.info.render.frame++,pt===!0&&O.beginShadows();let et=m.state.shadowsArray;y.render(et,A,Y),pt===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=g.opaque,Z=g.transmissive;if(m.setupLights(),Y.isArrayCamera){let yt=Y.cameras;if(Z.length>0)for(let Et=0,Lt=yt.length;Et<Lt;Et++){let Dt=yt[Et];Ke(nt,Z,A,Dt)}at&&b.render(A);for(let Et=0,Lt=yt.length;Et<Lt;Et++){let Dt=yt[Et];Pe(g,A,Dt,Dt.viewport)}}else Z.length>0&&Ke(nt,Z,A,Y),at&&b.render(A),Pe(g,A,Y);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(_,A,Y),$.resetDefaultState(),T=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],pt===!0&&O.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Fe(A,Y,et,nt){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||st.intersectsSprite(A)){nt&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(kt);let Et=lt.update(A),Lt=A.material;Lt.visible&&g.push(A,Et,Lt,et,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||st.intersectsObject(A))){let Et=lt.update(A),Lt=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(kt)),Array.isArray(Lt)){let Dt=Et.groups;for(let Wt=0,Xt=Dt.length;Wt<Xt;Wt++){let Ut=Dt[Wt],ie=Lt[Ut.materialIndex];ie&&ie.visible&&g.push(A,Et,ie,et,zt.z,Ut)}}else Lt.visible&&g.push(A,Et,Lt,et,zt.z,null)}}let yt=A.children;for(let Et=0,Lt=yt.length;Et<Lt;Et++)Fe(yt[Et],Y,et,nt)}function Pe(A,Y,et,nt){let Z=A.opaque,yt=A.transmissive,Et=A.transparent;m.setupLightsView(et),pt===!0&&O.setGlobalState(_.clippingPlanes,et),nt&&_t.viewport(L.copy(nt)),Z.length>0&&Be(Z,Y,et),yt.length>0&&Be(yt,Y,et),Et.length>0&&Be(Et,Y,et),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ke(A,Y,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new ni(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?pr:ti,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let yt=m.state.transmissionRenderTarget[nt.id],Et=nt.viewport||L;yt.setSize(Et.z,Et.w);let Lt=_.getRenderTarget();_.setRenderTarget(yt),_.getClearColor(J),it=_.getClearAlpha(),it<1&&_.setClearColor(16777215,.5),_.clear(),at&&b.render(et);let Dt=_.toneMapping;_.toneMapping=yi;let Wt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),pt===!0&&O.setGlobalState(_.clippingPlanes,nt),Be(A,et,nt),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,ie=Y.length;Ut<ie;Ut++){let pe=Y[Ut],me=pe.object,je=pe.geometry,se=pe.material,Nt=pe.group;if(se.side===de&&me.layers.test(nt.layers)){let Gn=se.side;se.side=tn,se.needsUpdate=!0,Je(me,et,nt,je,se,Nt),se.side=Gn,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}_.setRenderTarget(Lt),_.setClearColor(J,it),Wt!==void 0&&(nt.viewport=Wt),_.toneMapping=Dt}function Be(A,Y,et){let nt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,yt=A.length;Z<yt;Z++){let Et=A[Z],Lt=Et.object,Dt=Et.geometry,Wt=nt===null?Et.material:nt,Xt=Et.group;Lt.layers.test(et.layers)&&Je(Lt,Y,et,Dt,Wt,Xt)}}function Je(A,Y,et,nt,Z,yt){A.onBeforeRender(_,Y,et,nt,Z,yt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(_,Y,et,nt,A,yt),Z.transparent===!0&&Z.side===de&&Z.forceSinglePass===!1?(Z.side=tn,Z.needsUpdate=!0,_.renderBufferDirect(et,Y,nt,Z,A,yt),Z.side=_i,Z.needsUpdate=!0,_.renderBufferDirect(et,Y,nt,Z,A,yt),Z.side=de):_.renderBufferDirect(et,Y,nt,Z,A,yt),A.onAfterRender(_,Y,et,nt,Z,yt)}function ze(A,Y,et){Y.isScene!==!0&&(Y=Qt);let nt=Rt.get(A),Z=m.state.lights,yt=m.state.shadowsArray,Et=Z.state.version,Lt=It.getParameters(A,Z.state,yt,Y,et),Dt=It.getProgramCacheKey(Lt),Wt=nt.programs;nt.environment=A.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(A.isMeshStandardMaterial?j:S).get(A.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",xt),Wt=new Map,nt.programs=Wt);let Xt=Wt.get(Dt);if(Xt!==void 0){if(nt.currentProgram===Xt&&nt.lightsStateVersion===Et)return ai(A,Lt),Xt}else Lt.uniforms=It.getUniforms(A),A.onBeforeCompile(Lt,_),Xt=It.acquireProgram(Lt,Dt),Wt.set(Dt,Xt),nt.uniforms=Lt.uniforms;let Ut=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=O.uniform),ai(A,Lt),nt.needsLights=pa(A),nt.lightsStateVersion=Et,nt.needsLights&&(Ut.ambientLightColor.value=Z.state.ambient,Ut.lightProbe.value=Z.state.probe,Ut.directionalLights.value=Z.state.directional,Ut.directionalLightShadows.value=Z.state.directionalShadow,Ut.spotLights.value=Z.state.spot,Ut.spotLightShadows.value=Z.state.spotShadow,Ut.rectAreaLights.value=Z.state.rectArea,Ut.ltc_1.value=Z.state.rectAreaLTC1,Ut.ltc_2.value=Z.state.rectAreaLTC2,Ut.pointLights.value=Z.state.point,Ut.pointLightShadows.value=Z.state.pointShadow,Ut.hemisphereLights.value=Z.state.hemi,Ut.directionalShadowMap.value=Z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ut.spotShadowMap.value=Z.state.spotShadowMap,Ut.spotLightMatrix.value=Z.state.spotLightMatrix,Ut.spotLightMap.value=Z.state.spotLightMap,Ut.pointShadowMap.value=Z.state.pointShadowMap,Ut.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=Xt,nt.uniformsList=null,Xt}function dn(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=bs.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function ai(A,Y){let et=Rt.get(A);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function da(A,Y,et,nt,Z){Y.isScene!==!0&&(Y=Qt),U.resetTextureUnits();let yt=Y.fog,Et=nt.isMeshStandardMaterial?Y.environment:null,Lt=k===null?_.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Is,Dt=(nt.isMeshStandardMaterial?j:S).get(nt.envMap||Et),Wt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Xt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ut=!!et.morphAttributes.position,ie=!!et.morphAttributes.normal,pe=!!et.morphAttributes.color,me=yi;nt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(me=_.toneMapping);let je=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,se=je!==void 0?je.length:0,Nt=Rt.get(nt),Gn=m.state.lights;if(pt===!0&&(Tt===!0||A!==w)){let fn=A===w&&nt.id===T;O.setState(nt,A,fn)}let re=!1;nt.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Gn.state.version||Nt.outputColorSpace!==Lt||Z.isBatchedMesh&&Nt.batching===!1||!Z.isBatchedMesh&&Nt.batching===!0||Z.isBatchedMesh&&Nt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Nt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Nt.instancing===!1||!Z.isInstancedMesh&&Nt.instancing===!0||Z.isSkinnedMesh&&Nt.skinning===!1||!Z.isSkinnedMesh&&Nt.skinning===!0||Z.isInstancedMesh&&Nt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Nt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Nt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Nt.instancingMorph===!1&&Z.morphTexture!==null||Nt.envMap!==Dt||nt.fog===!0&&Nt.fog!==yt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==O.numPlanes||Nt.numIntersection!==O.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==Xt||Nt.morphTargets!==Ut||Nt.morphNormals!==ie||Nt.morphColors!==pe||Nt.toneMapping!==me||Nt.morphTargetsCount!==se)&&(re=!0):(re=!0,Nt.__version=nt.version);let bn=Nt.currentProgram;re===!0&&(bn=ze(nt,Y,Z));let Ki=!1,sn=!1,zs=!1,ge=bn.getUniforms(),Nn=Nt.uniforms;if(_t.useProgram(bn.program)&&(Ki=!0,sn=!0,zs=!0),nt.id!==T&&(T=nt.id,sn=!0),Ki||w!==A){_t.buffers.depth.getReversed()?(mt.copy(A.projectionMatrix),lp(mt),cp(mt),ge.setValue(B,"projectionMatrix",mt)):ge.setValue(B,"projectionMatrix",A.projectionMatrix),ge.setValue(B,"viewMatrix",A.matrixWorldInverse);let li=ge.map.cameraPosition;li!==void 0&&li.setValue(B,Vt.setFromMatrixPosition(A.matrixWorld)),At.logarithmicDepthBuffer&&ge.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&ge.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,sn=!0,zs=!0)}if(Z.isSkinnedMesh){ge.setOptional(B,Z,"bindMatrix"),ge.setOptional(B,Z,"bindMatrixInverse");let fn=Z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ge.setValue(B,"boneTexture",fn.boneTexture,U))}Z.isBatchedMesh&&(ge.setOptional(B,Z,"batchingTexture"),ge.setValue(B,"batchingTexture",Z._matricesTexture,U),ge.setOptional(B,Z,"batchingIdTexture"),ge.setValue(B,"batchingIdTexture",Z._indirectTexture,U),ge.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ge.setValue(B,"batchingColorTexture",Z._colorsTexture,U));let Hs=et.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&E.update(Z,et,bn),(sn||Nt.receiveShadow!==Z.receiveShadow)&&(Nt.receiveShadow=Z.receiveShadow,ge.setValue(B,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Nn.envMap.value=Dt,Nn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),sn&&(ge.setValue(B,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&fa(Nn,zs),yt&&nt.fog===!0&&bt.refreshFogUniforms(Nn,yt),bt.refreshMaterialUniforms(Nn,nt,tt,ot,m.state.transmissionRenderTarget[A.id]),bs.upload(B,dn(Nt),Nn,U)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(bs.upload(B,dn(Nt),Nn,U),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&ge.setValue(B,"center",Z.center),ge.setValue(B,"modelViewMatrix",Z.modelViewMatrix),ge.setValue(B,"normalMatrix",Z.normalMatrix),ge.setValue(B,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let fn=nt.uniformsGroups;for(let li=0,ci=fn.length;li<ci;li++){let Jc=fn[li];P.update(Jc,bn),P.bind(Jc,bn)}}return bn}function fa(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function pa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,Y,et){Rt.get(A.texture).__webglTexture=Y,Rt.get(A.depthTexture).__webglTexture=et;let nt=Rt.get(A);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){let et=Rt.get(A);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,et=0){k=A,C=Y,N=et;let nt=!0,Z=null,yt=!1,Et=!1;if(A){let Dt=Rt.get(A);if(Dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(B.FRAMEBUFFER,null),nt=!1;else if(Dt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Dt.__hasExternalTextures)U.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ut=A.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&Rt.has(Ut)&&(A.width!==Ut.image.width||A.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}let Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Et=!0);let Xt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[Y])?Z=Xt[Y][et]:Z=Xt[Y],yt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?Z=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?Z=Xt[et]:Z=Xt,L.copy(A.viewport),G.copy(A.scissor),W=A.scissorTest}else L.copy(wt).multiplyScalar(tt).floor(),G.copy(Ft).multiplyScalar(tt).floor(),W=Zt;if(_t.bindFramebuffer(B.FRAMEBUFFER,Z)&&nt&&_t.drawBuffers(A,Z),_t.viewport(L),_t.scissor(G),_t.setScissorTest(W),yt){let Dt=Rt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Dt.__webglTexture,et)}else if(Et){let Dt=Rt.get(A.texture),Wt=Y||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,et||0,Wt)}T=-1},this.readRenderTargetPixels=function(A,Y,et,nt,Z,yt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){_t.bindFramebuffer(B.FRAMEBUFFER,Lt);try{let Dt=A.texture,Wt=Dt.format,Xt=Dt.type;if(!At.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-nt&&et>=0&&et<=A.height-Z&&B.readPixels(Y,et,nt,Z,X.convert(Wt),X.convert(Xt),yt)}finally{let Dt=k!==null?Rt.get(k).__webglFramebuffer:null;_t.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,et,nt,Z,yt,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){let Dt=A.texture,Wt=Dt.format,Xt=Dt.type;if(!At.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-nt&&et>=0&&et<=A.height-Z){_t.bindFramebuffer(B.FRAMEBUFFER,Lt);let Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,yt.byteLength,B.STREAM_READ),B.readPixels(Y,et,nt,Z,X.convert(Wt),X.convert(Xt),0);let ie=k!==null?Rt.get(k).__webglFramebuffer:null;_t.bindFramebuffer(B.FRAMEBUFFER,ie);let pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ap(B,pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,yt),B.deleteBuffer(Ut),B.deleteSync(pe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,et=0){A.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);let nt=Math.pow(2,-et),Z=Math.floor(A.image.width*nt),yt=Math.floor(A.image.height*nt),Et=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;U.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,et,0,0,Et,Lt,Z,yt),_t.unbindTexture()},this.copyTextureToTexture=function(A,Y,et=null,nt=null,Z=0){A.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,A=arguments[1],Y=arguments[2],Z=arguments[3]||0,et=null);let yt,Et,Lt,Dt,Wt,Xt,Ut,ie,pe,me=A.isCompressedTexture?A.mipmaps[Z]:A.image;et!==null?(yt=et.max.x-et.min.x,Et=et.max.y-et.min.y,Lt=et.isBox3?et.max.z-et.min.z:1,Dt=et.min.x,Wt=et.min.y,Xt=et.isBox3?et.min.z:0):(yt=me.width,Et=me.height,Lt=me.depth||1,Dt=0,Wt=0,Xt=0),nt!==null?(Ut=nt.x,ie=nt.y,pe=nt.z):(Ut=0,ie=0,pe=0);let je=X.convert(Y.format),se=X.convert(Y.type),Nt;Y.isData3DTexture?(U.setTexture3D(Y,0),Nt=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Nt=B.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Nt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);let Gn=B.getParameter(B.UNPACK_ROW_LENGTH),re=B.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ki=B.getParameter(B.UNPACK_SKIP_ROWS),sn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,me.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Wt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);let zs=A.isDataArrayTexture||A.isData3DTexture,ge=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Nn=Rt.get(A),Hs=Rt.get(Y),fn=Rt.get(Nn.__renderTarget),li=Rt.get(Hs.__renderTarget);_t.bindFramebuffer(B.READ_FRAMEBUFFER,fn.__webglFramebuffer),_t.bindFramebuffer(B.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<Lt;ci++)zs&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,Z,Xt+ci),A.isDepthTexture?(ge&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(Y).__webglTexture,Z,pe+ci),B.blitFramebuffer(Dt,Wt,yt,Et,Ut,ie,yt,Et,B.DEPTH_BUFFER_BIT,B.NEAREST)):ge?B.copyTexSubImage3D(Nt,Z,Ut,ie,pe+ci,Dt,Wt,yt,Et):B.copyTexSubImage2D(Nt,Z,Ut,ie,pe+ci,Dt,Wt,yt,Et);_t.bindFramebuffer(B.READ_FRAMEBUFFER,null),_t.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ge?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Nt,Z,Ut,ie,pe,yt,Et,Lt,je,se,me.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,Z,Ut,ie,pe,yt,Et,Lt,je,me.data):B.texSubImage3D(Nt,Z,Ut,ie,pe,yt,Et,Lt,je,se,me):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Z,Ut,ie,yt,Et,je,se,me.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Z,Ut,ie,me.width,me.height,je,me.data):B.texSubImage2D(B.TEXTURE_2D,Z,Ut,ie,yt,Et,je,se,me);B.pixelStorei(B.UNPACK_ROW_LENGTH,Gn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,re),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ki),B.pixelStorei(B.UNPACK_SKIP_IMAGES,sn),Z===0&&Y.generateMipmaps&&B.generateMipmap(Nt),_t.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,et=null,nt=null,Z=0){return A.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,A=arguments[2],Y=arguments[3],Z=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,et,nt,Z)},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){C=0,N=0,k=null,_t.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Mo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wo=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},jl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},We=new z,So=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qe=class extends zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,$s=new z,ds=new z,fs=new z,ps=new ht,qs=new ht,Fu=new ee,Gr=new z,Ys=new z,Wr=new z,jh=new ht,Ga=new ht,Qh=new ht,en=class extends Ie{constructor(t=new qe){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new jt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jl(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new So(n,3,0,!1)),us.setAttribute("uv",new So(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Xr(Gr.set(-.5,-.5,0),fs,o,ds,s,r),Xr(Ys.set(.5,-.5,0),fs,o,ds,s,r),Xr(Wr.set(.5,.5,0),fs,o,ds,s,r),jh.set(0,0),Ga.set(1,0),Qh.set(1,1);let a=t.ray.intersectTriangle(Gr,Ys,Wr,!1,$s);if(a===null&&(Xr(Ys.set(-.5,.5,0),fs,o,ds,s,r),Ga.set(0,1),a=t.ray.intersectTriangle(Gr,Wr,Ys,!1,$s),a===null))return;let l=t.ray.origin.distanceTo($s);l<t.near||l>t.far||e.push({distance:l,point:$s.clone(),uv:Kn.getInterpolation($s,Gr,Ys,Wr,jh,Ga,Qh,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xr(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(qs.x=r*ps.x-s*ps.y,qs.y=s*ps.x+r*ps.y):qs.copy(ps),i.copy(t),i.x+=qs.x,i.y+=qs.y,i.applyMatrix4(Fu)}var le=class extends zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Eo=new z,To=new z,tu=new ee,Zs=new vi,$r=new ki,Wa=new z,eu=new z,cn=class extends Ie{constructor(t=new jt,e=new le){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Eo.fromBufferAttribute(e,s-1),To.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Eo.distanceTo(To);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;tu.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),M=h.getX(x+1),v=qr(this,t,Zs,l,m,M);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=qr(this,t,Zs,l,x,g);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=qr(this,t,Zs,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=qr(this,t,Zs,l,p-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Eo.fromBufferAttribute(o,s),To.fromBufferAttribute(o,r),e.distanceSqToSegment(Eo,To,Wa,eu)>n)return;Wa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wa);if(!(l<t.near||l>t.far))return{distance:l,point:eu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var nu=new z,iu=new z,he=class extends cn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)nu.fromBufferAttribute(e,s),iu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nu.distanceTo(iu);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fi=class extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},su=new ee,Ql=new vi,Yr=new ki,Zr=new z,Rs=class extends Ie{constructor(t=new jt,e=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;su.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(su);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);Zr.fromBufferAttribute(u,g),ru(Zr,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Zr.fromBufferAttribute(u,p),ru(Zr,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ru(i,t,e,n,s,r,o){let a=Ql.distanceSqToPoint(i);if(a<e){let l=new z;Ql.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ye=class extends ln{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new z,s=[],r=[],o=[],a=new z,l=new ee;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tc=class extends lr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Kr=new z,Xa=new Lc,$a=new Lc,qa=new Lc,ec=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Kr.subVectors(s[0],s[1]).add(s[0]),c=Kr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Xa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),$a.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),qa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$a.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),qa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Xa.calc(l),$a.calc(l),qa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ou(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function iy(i,t){let e=1-i;return e*e*t}function sy(i,t){return 2*(1-i)*i*t}function ry(i,t){return i*i*t}function tr(i,t,e,n){return iy(i,t)+sy(i,e)+ry(i,n)}function oy(i,t){let e=1-i;return e*e*e*t}function ay(i,t){let e=1-i;return 3*e*e*i*t}function ly(i,t){return 3*(1-i)*i*i*t}function cy(i,t){return i*i*i*t}function er(i,t,e,n,s){return oy(i,t)+ay(i,e)+ly(i,n)+cy(i,s)}var Ao=class extends mn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nc=class extends mn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y),er(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ro=class extends mn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ic=class extends mn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends mn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends mn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y),tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ou(a,l.x,c.x,h.x,u.x),ou(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},rc=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:ec,CubicBezierCurve:Ao,CubicBezierCurve3:nc,EllipseCurve:lr,LineCurve:Ro,LineCurve3:ic,QuadraticBezierCurve:Co,QuadraticBezierCurve3:sc,SplineCurve:Po}),oc=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new rc[s.type]().fromJSON(s))}return this}},bi=class extends oc{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ro(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Co(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ao(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new lr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var cr=class i extends jt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=n/2,m=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function M(){let _=new z,D=new z,C=0,N=(e-t)/n;for(let k=0;k<=r;k++){let T=[],w=k/r,L=w*(e-t)+t;for(let G=0;G<=s;G++){let W=G/s,J=W*l+a,it=Math.sin(J),K=Math.cos(J);D.x=L*it,D.y=-w*n+g,D.z=L*K,u.push(D.x,D.y,D.z),_.set(it,N,K).normalize(),d.push(_.x,_.y,_.z),f.push(W,1-w),T.push(p++)}x.push(T)}for(let k=0;k<s;k++)for(let T=0;T<r;T++){let w=x[T][k],L=x[T+1][k],G=x[T+1][k+1],W=x[T][k+1];(t>0||T!==0)&&(h.push(w,L,W),C+=3),(e>0||T!==r-1)&&(h.push(L,G,W),C+=3)}c.addGroup(m,C,0),m+=C}function v(_){let D=p,C=new ht,N=new z,k=0,T=_===!0?t:e,w=_===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;let L=p;for(let G=0;G<=s;G++){let J=G/s*l+a,it=Math.cos(J),K=Math.sin(J);N.x=T*K,N.y=g*w,N.z=T*it,u.push(N.x,N.y,N.z),d.push(0,w,0),C.x=it*.5+.5,C.y=K*.5*w+.5,f.push(C.x,C.y),p++}for(let G=0;G<s;G++){let W=D+G,J=L+G;_===!0?h.push(J,J+1,W):h.push(J+1,J,W),k+=3}c.addGroup(m,k,_===!0?1:2),m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Jr=new z,jr=new z,Ya=new z,Qr=new Kn,Se=class extends jt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(_s*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=Qr;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Qr.getNormal(Ya),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let v=(M+1)%3,_=u[M],D=u[v],C=Qr[h[M]],N=Qr[h[v]],k=`${_}_${D}`,T=`${D}_${_}`;T in d&&d[T]?(Ya.dot(d[T].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(N.x,N.y,N.z)),d[T]=null):k in d||(d[k]={index0:c[M],index1:c[v],normal:Ya.clone()})}}for(let p in d)if(d[p]){let{index0:x,index1:g}=d[p];Jr.fromBufferAttribute(a,x),jr.fromBufferAttribute(a,g),f.push(Jr.x,Jr.y,Jr.z),f.push(jr.x,jr.y,jr.z)}this.setAttribute("position",new ne(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},hn=class extends bi{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new bi().fromJSON(s))}return this}},hy={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Bu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=my(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return hr(r,o,e,a,l,f,0),o}};function Bu(i,t,e,n,s){let r,o;if(s===Ty(i,t,e,n)>0)for(r=t;r<e;r+=n)o=au(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=au(r,i[r],i[r+1],o);return o&&Vo(o,o.next)&&(dr(o),o=o.next),o}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vo(e,e.next)||ve(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&vy(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?dy(i,n,s,r):uy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),dr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=fy(Bi(i),t,e),hr(i,t,e,n,s,r,2)):o===2&&py(i,t,e,n,s,r):hr(Bi(i),t,e,n,s,r,1);break}}}function uy(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&gs(s,a,r,l,o,c,p.x,p.y)&&ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=ac(f,p,t,e,n),M=ac(x,g,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=m&&_&&_.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&gs(a,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&gs(a,h,l,u,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&gs(a,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&gs(a,h,l,u,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function fy(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Vo(s,r)&&zu(s,n,n.next,r)&&ur(s,r)&&ur(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),dr(n),dr(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function py(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wy(o,a)){let l=Hu(o,a);o=Bi(o,o.next),l=Bi(l,l.next),hr(o,t,e,n,s,r,0),hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function my(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(My(c));for(s.sort(gy),r=0;r<s.length;r++)e=xy(s[r],e);return e}function gy(i,t){return i.x-t.x}function xy(i,t){let e=yy(i,t);if(!e)return t;let n=Hu(e,i);return Bi(n,n.next),Bi(e,e.next)}function yy(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ur(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&_y(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function _y(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function vy(i,t,e,n){let s=i;do s.z===0&&(s.z=ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,by(s)}function by(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function My(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function wy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sy(i,t)&&(ur(i,t)&&ur(t,i)&&Ey(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Vo(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vo(i,t){return i.x===t.x&&i.y===t.y}function zu(i,t,e,n){let s=eo(ve(i,t,e)),r=eo(ve(i,t,n)),o=eo(ve(e,n,i)),a=eo(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&to(i,e,t)||r===0&&to(i,n,t)||o===0&&to(e,i,n)||a===0&&to(e,t,n))}function to(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function eo(i){return i>0?1:i<0?-1:0}function Sy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ur(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Ey(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hu(i,t){let e=new lc(i.i,i.x,i.y),n=new lc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function au(i,t,e,n){let s=new lc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ty(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var nr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];lu(t),cu(n,t);let o=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,cu(n,e[l]);let a=hy.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function cu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gn=class i extends jt{constructor(t=new hn([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ay,v,_=!1,D,C,N,k;m&&(v=m.getSpacedPoints(h),_=!0,d=!1,D=m.computeFrenetFrames(h,!1),C=new z,N=new z,k=new z),d||(g=0,f=0,p=0,x=0);let T=a.extractPoints(c),w=T.shape,L=T.holes;if(!nr.isClockWise(w)){w=w.reverse();for(let at=0,gt=L.length;at<gt;at++){let B=L[at];nr.isClockWise(B)&&(L[at]=B.reverse())}}let W=nr.triangulateShape(w,L),J=w;for(let at=0,gt=L.length;at<gt;at++){let B=L[at];w=w.concat(B)}function it(at,gt,B){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(gt,B)}let K=w.length,ot=W.length;function tt(at,gt,B){let Pt,ft,At,_t=at.x-gt.x,Bt=at.y-gt.y,Rt=B.x-at.x,U=B.y-at.y,S=_t*_t+Bt*Bt,j=_t*U-Bt*Rt;if(Math.abs(j)>Number.EPSILON){let rt=Math.sqrt(S),ct=Math.sqrt(Rt*Rt+U*U),lt=gt.x-Bt/rt,It=gt.y+_t/rt,bt=B.x-U/ct,Ct=B.y+Rt/ct,Kt=((bt-lt)*U-(Ct-It)*Rt)/(_t*U-Bt*Rt);Pt=lt+_t*Kt-at.x,ft=It+Bt*Kt-at.y;let O=Pt*Pt+ft*ft;if(O<=2)return new ht(Pt,ft);At=Math.sqrt(O/2)}else{let rt=!1;_t>Number.EPSILON?Rt>Number.EPSILON&&(rt=!0):_t<-Number.EPSILON?Rt<-Number.EPSILON&&(rt=!0):Math.sign(Bt)===Math.sign(U)&&(rt=!0),rt?(Pt=-Bt,ft=_t,At=Math.sqrt(S)):(Pt=_t,ft=Bt,At=Math.sqrt(S/2))}return new ht(Pt/At,ft/At)}let dt=[];for(let at=0,gt=J.length,B=gt-1,Pt=at+1;at<gt;at++,B++,Pt++)B===gt&&(B=0),Pt===gt&&(Pt=0),dt[at]=tt(J[at],J[B],J[Pt]);let ut=[],wt,Ft=dt.concat();for(let at=0,gt=L.length;at<gt;at++){let B=L[at];wt=[];for(let Pt=0,ft=B.length,At=ft-1,_t=Pt+1;Pt<ft;Pt++,At++,_t++)At===ft&&(At=0),_t===ft&&(_t=0),wt[Pt]=tt(B[Pt],B[At],B[_t]);ut.push(wt),Ft=Ft.concat(wt)}for(let at=0;at<g;at++){let gt=at/g,B=f*Math.cos(gt*Math.PI/2),Pt=p*Math.sin(gt*Math.PI/2)+x;for(let ft=0,At=J.length;ft<At;ft++){let _t=it(J[ft],dt[ft],Pt);mt(_t.x,_t.y,-B)}for(let ft=0,At=L.length;ft<At;ft++){let _t=L[ft];wt=ut[ft];for(let Bt=0,Rt=_t.length;Bt<Rt;Bt++){let U=it(_t[Bt],wt[Bt],Pt);mt(U.x,U.y,-B)}}}let Zt=p+x;for(let at=0;at<K;at++){let gt=d?it(w[at],Ft[at],Zt):w[at];_?(N.copy(D.normals[0]).multiplyScalar(gt.x),C.copy(D.binormals[0]).multiplyScalar(gt.y),k.copy(v[0]).add(N).add(C),mt(k.x,k.y,k.z)):mt(gt.x,gt.y,0)}for(let at=1;at<=h;at++)for(let gt=0;gt<K;gt++){let B=d?it(w[gt],Ft[gt],Zt):w[gt];_?(N.copy(D.normals[at]).multiplyScalar(B.x),C.copy(D.binormals[at]).multiplyScalar(B.y),k.copy(v[at]).add(N).add(C),mt(k.x,k.y,k.z)):mt(B.x,B.y,u/h*at)}for(let at=g-1;at>=0;at--){let gt=at/g,B=f*Math.cos(gt*Math.PI/2),Pt=p*Math.sin(gt*Math.PI/2)+x;for(let ft=0,At=J.length;ft<At;ft++){let _t=it(J[ft],dt[ft],Pt);mt(_t.x,_t.y,u+B)}for(let ft=0,At=L.length;ft<At;ft++){let _t=L[ft];wt=ut[ft];for(let Bt=0,Rt=_t.length;Bt<Rt;Bt++){let U=it(_t[Bt],wt[Bt],Pt);_?mt(U.x,U.y+v[h-1].y,v[h-1].x+B):mt(U.x,U.y,u+B)}}}st(),pt();function st(){let at=s.length/3;if(d){let gt=0,B=K*gt;for(let Pt=0;Pt<ot;Pt++){let ft=W[Pt];kt(ft[2]+B,ft[1]+B,ft[0]+B)}gt=h+g*2,B=K*gt;for(let Pt=0;Pt<ot;Pt++){let ft=W[Pt];kt(ft[0]+B,ft[1]+B,ft[2]+B)}}else{for(let gt=0;gt<ot;gt++){let B=W[gt];kt(B[2],B[1],B[0])}for(let gt=0;gt<ot;gt++){let B=W[gt];kt(B[0]+K*h,B[1]+K*h,B[2]+K*h)}}n.addGroup(at,s.length/3-at,0)}function pt(){let at=s.length/3,gt=0;Tt(J,gt),gt+=J.length;for(let B=0,Pt=L.length;B<Pt;B++){let ft=L[B];Tt(ft,gt),gt+=ft.length}n.addGroup(at,s.length/3-at,1)}function Tt(at,gt){let B=at.length;for(;--B>=0;){let Pt=B,ft=B-1;ft<0&&(ft=at.length-1);for(let At=0,_t=h+g*2;At<_t;At++){let Bt=K*At,Rt=K*(At+1),U=gt+Pt+Bt,S=gt+ft+Bt,j=gt+ft+Rt,rt=gt+Pt+Rt;Vt(U,S,j,rt)}}}function mt(at,gt,B){l.push(at),l.push(gt),l.push(B)}function kt(at,gt,B){zt(at),zt(gt),zt(B);let Pt=s.length/3,ft=M.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);Qt(ft[0]),Qt(ft[1]),Qt(ft[2])}function Vt(at,gt,B,Pt){zt(at),zt(gt),zt(Pt),zt(gt),zt(B),zt(Pt);let ft=s.length/3,At=M.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Qt(At[0]),Qt(At[1]),Qt(At[3]),Qt(At[1]),Qt(At[2]),Qt(At[3])}function zt(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function Qt(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ry(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rc[s.type]().fromJSON(s)),new i(n,t.options)}},Ay={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-p),new ht(x,1-m)]:[new ht(a,1-l),new ht(h,1-u),new ht(f,1-p),new ht(g,1-m)]}};function Ry(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cs=class i extends jt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new z,p=new ht;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let M=m+g,v=M,_=M+n+1,D=M+n+2,C=M+1;a.push(v,_,C),a.push(_,D,C)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Io=class i extends jt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,d=new z,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],v=m/n,_=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){let C=D/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(C+_,1-v),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let v=h[m][M+1],_=h[m][M],D=h[m+1][M],C=h[m+1][M+1];(m!==0||o>0)&&f.push(v,_,C),(m!==n-1||l<Math.PI)&&f.push(_,D,C)}this.setIndex(f),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var be=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function no(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cc=class extends Ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ih:r=t,a=2*e-n;break;case sh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ih:o=t,l=2*n-e;break;case sh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+M*o[c+D]+v*o[l+D]+_*o[u+D];return r}},hc=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},uc=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=no(e,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:no(t.times,Array),values:no(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case Ul:e=this.InterpolantFactoryMethodLinear;break;case ga:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Cy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ul;var zi=class extends Pn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=lo;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Pn{};dc.prototype.ValueTypeName="color";var fc=class extends Pn{};fc.prototype.ValueTypeName="number";var pc=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lo=class extends Pn{InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=lo;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends Pn{};mc.prototype.ValueTypeName="vector";var gc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Py=new gc,xc=class{constructor(t){this.manager=t!==void 0?t:Py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Za=new ee,hu=new z,uu=new z,yc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var _c=class extends yc{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new _c}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},No=class extends Do{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Dc="\\[\\]\\.:\\/",Iy=new RegExp("["+Dc+"]","g"),Uc="[^"+Dc+"]",Ly="[^"+Dc.replace("\\.","")+"]",Dy=/((?:WC+[\/:])*)/.source.replace("WC",Uc),Uy=/(WCOD+)?/.source.replace("WCOD",Ly),Ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),ky=new RegExp("^"+Dy+Uy+Ny+Oy+"$"),Fy=["material","materials","bones","map"],vc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iy,"")}static parseTrackName(t){let e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=vc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);var du=new ee,Oo=class{constructor(t,e,n=0,s=1/0){this.ray=new vi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(fu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(fu),n}};function fu(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],t,e,!0)}}var fr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ko=class extends he{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ot(n),s=new Ot(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new jt;h.setAttribute("position",new ne(l,3)),h.setAttribute("color",new ne(c,3));let u=new le({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Fo=class extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);var Vu={type:"change"},Oc={type:"start"},Wu={type:"end"},Go=new vi,Gu=new En,By=Math.cos(70*Cu.DEG2RAD),Ue=new z,nn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nc=1e-6,Wo=class extends Fo{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Cn,this._lastTargetPosition=new z,this._quat=new Cn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fr,this._sphericalDelta=new fr,this._scale=1,this._panOffset=new z,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new z,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hy.bind(this),this._onPointerDown=zy.bind(this),this._onPointerUp=Vy.bind(this),this._onContextMenu=Zy.bind(this),this._onMouseWheel=Xy.bind(this),this._onKeyDown=$y.bind(this),this._onTouchStart=qy.bind(this),this._onTouchMove=Yy.bind(this),this._onMouseDown=Gy.bind(this),this._onMouseMove=Wy.bind(this),this._interceptControlDown=Ky.bind(this),this._interceptControlUp=Jy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vu),this.update(),this.state=ue.NONE}update(t=null){let e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ue.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<By?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nc||this._lastTargetPosition.distanceToSquared(this.target)>Nc?(this.dispatchEvent(Vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function zy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Hy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Gy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case Vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case Vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Oc)}function Wy(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xy(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(Oc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function $y(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function qy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Oc)}function Yy(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function Zy(i){this.enabled!==!1&&i.preventDefault()}function Ky(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xo=class extends Ie{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ht(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Ds=new z,Xu=new ee,$u=new ee,qu=new z,Yu=new z,$o=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Xu.copy(x.matrixWorldInverse),$u.multiplyMatrices(x.projectionMatrix,Xu),h(p,p,x),f(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,g=p.children.length;x<g;x++)c(p.children[x])}function h(p,x,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Ds.setFromMatrixPosition(p.matrixWorld),Ds.applyMatrix4($u);let m=Ds.z>=-1&&Ds.z<=1&&p.layers.test(g.layers)===!0,M=p.element;M.style.display=m===!0?"":"none",m===!0&&(p.onBeforeRender(e,x,g),M.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Ds.x*r+r)+"px,"+(-Ds.y*o+o)+"px)",M.parentNode!==l&&l.appendChild(M),p.onAfterRender(e,x,g));let v={distanceToCameraSquared:u(g,p)};a.objects.set(p,v)}for(let m=0,M=p.children.length;m<M;m++)h(p.children[m],x,g)}function u(p,x){return qu.setFromMatrixPosition(p.matrixWorld),Yu.setFromMatrixPosition(x.matrixWorld),qu.distanceToSquared(Yu)}function d(p){let x=[];return p.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function f(p){let x=d(p).sort(function(m,M){if(m.renderOrder!==M.renderOrder)return M.renderOrder-m.renderOrder;let v=a.objects.get(m).distanceToCameraSquared,_=a.objects.get(M).distanceToCameraSquared;return v-_}),g=x.length;for(let m=0,M=x.length;m<M;m++)x[m].element.style.zIndex=g-m}}};var Re=class{constructor(t){this.view=t,this.group=new ae,this.on=!0}get id(){return"feature"}get label(){return this.id}get title(){return""}available(){return!1}toolbar(){return[]}build(t){}update(t){}tick(t,e){}reset(){}dispose(){}onTap(t,e){return!1}onLongPress(t,e){return!1}get plan(){return this.view.plan}get settings(){return this.view.plan.settings}get states(){return this.view.getStates()||{}}};function In(i,{cls:t="",interactive:e=!1}={}){let n=document.createElement("div");return n.className="card3d "+t,n.innerHTML=i,n.style.pointerEvents=e?"auto":"none",new Xo(n)}var Yt=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function ri(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,i),s.addColorStop(.35,"rgba(255,255,255,.35)"),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128),new Ye(e)}var xn=(i,t,e)=>Math.max(t,Math.min(e,i));var Zu=i=>Math.max(0,Math.min(1,i)),jy={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.45},cloudy:{cloud:.85},rainy:{rain:.55,cloud:.9},pouring:{rain:1,cloud:1},snowy:{snow:.7,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:.9},hail:{rain:.8,snow:.3,cloud:1},lightning:{lightning:!0,cloud:.95},"lightning-rainy":{lightning:!0,rain:.8,cloud:1},fog:{fog:.8,cloud:.75},windy:{cloud:.3,wind:1},"windy-variant":{cloud:.7,wind:1},exceptional:{cloud:.6}},Qy={"km/h":1,"m/s":3.6,mph:1.609,kn:1.852,"ft/s":1.097,"mm/s":.0036};function t_(i,t="km/h"){let e=Number(i);return Number.isFinite(e)?e*(Qy[String(t).toLowerCase()]??1):0}function Ku(i,t={},e=null){let n=jy[i]||{},s={rain:0,snow:0,fog:0,cloud:0,lightning:!1,windKmh:0,...n};return t.cloud_coverage!=null&&Number.isFinite(Number(t.cloud_coverage))&&(s.cloud=Zu(Number(t.cloud_coverage)/100)),s.windKmh=t_(t.wind_speed,t.wind_speed_unit),!s.windKmh&&n.wind&&(s.windKmh=35),s.windAngle=Zu(s.windKmh/60)*35,s.windBearing=Number(t.wind_bearing)||0,s.night=i==="clear-night"||e?.state==="below_horizon",s.sunElevation=Number(e?.attributes?.elevation),s.sunAzimuth=Number(e?.attributes?.azimuth),s}function Ju(i){return{sunny:"Sonnig","clear-night":"Klar",partlycloudy:"Teils bew\xF6lkt",cloudy:"Bew\xF6lkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee","snowy-rainy":"Schneeregen",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",fog:"Nebel",windy:"Windig","windy-variant":"Windig, bew\xF6lkt",exceptional:"Au\xDFergew\xF6hnlich"}[i]||i}function Us(i,t,e=0){let n=(e+i)*Math.PI/180,s=t*Math.PI/180;return{x:Math.sin(n)*Math.cos(s),y:Math.sin(s),z:-Math.cos(n)*Math.cos(s)}}function Vn(i,{title:t,obj:e,fields:n,extra:s,note:r}){i.closeOverlay();let o=document.createElement("div");o.className="overlay",o.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,94%);max-height:84%;overflow:auto",i.shadowRoot.querySelector(".wrap").append(o),i._overlay=o;let a=!1,l=0,c=f=>f.split(".").reduce((p,x)=>p?.[x],e),h=(f,p)=>{let x=f.split("."),g=x.pop();x.reduce((m,M)=>m[M]??={},e)[g]=p},u=()=>{clearTimeout(l),l=setTimeout(()=>{i.rebuild3D(),i.draw2D()},250)},d=()=>{let f=Object.keys(i.getStates()||{}).sort();o.innerHTML=`<h4 style="margin:0 0 6px">${Yt(t)}</h4>
      <datalist id="set-ents">${f.map(p=>`<option value="${Yt(p)}">`).join("")}</datalist>
      ${r?`<div style="opacity:.7;font-size:12px;margin-bottom:6px">${r}</div>`:""}
      ${n.map(p=>{let x=c(p.k),g=`data-k="${p.k}" data-t="${p.t||"text"}"`;return p.t==="checkbox"?`<label style="display:flex;gap:6px;align-items:center"><input type="checkbox" ${g} ${x?"checked":""} style="width:auto">${Yt(p.l)}</label>`:p.t==="select"?`<label>${Yt(p.l)}</label><select ${g}>${p.o.map(m=>{let[M,v]=Array.isArray(m)?m:[m,m];return`<option value="${Yt(M)}" ${M===(x??"")?"selected":""}>${Yt(v)}</option>`}).join("")}</select>`:`<label>${Yt(p.l)}</label><input ${g} ${p.t==="entity"?'list="set-ents"':""} ${p.t==="number"?`type="number" step="${p.s||1}"`:""} value="${Yt(x??"")}" placeholder="${Yt(p.p||"")}">`}).join("")}
      <div class="extra" style="margin-top:8px"></div>
      <div style="display:flex;margin-top:10px"><span style="flex:1"></span><button id="set-close" class="on">Fertig</button></div>`,o.querySelectorAll("[data-k]").forEach(p=>{p.onchange=()=>{a||(i.pushUndo(),a=!0);let x=p.dataset.t,g=p.value.trim();x==="checkbox"?g=p.checked:x==="number"?g=g===""?null:+g:g===""&&(g=null),h(p.dataset.k,g),u()}}),o.querySelector("#set-close").onclick=()=>i.closeOverlay(),s?.(o.querySelector(".extra"),d,()=>{a||(i.pushUndo(),a=!0),u()})};d()}var ju={rain:!0,snow:!0,lightning:!0,fog:!1,clouds:!0,sun:!0};function e_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");for(let e=0;e<14;e++){let n=40+Math.random()*176,s=50+Math.random()*40,r=22+Math.random()*30,o=t.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,256,128)}return new Ye(i)}function n_(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");return t.fillStyle="#e6ecff",t.beginPath(),t.arc(64,64,40,0,Math.PI*2),t.fill(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(84,56,36,0,Math.PI*2),t.fill(),new Ye(i)}var qo=class extends Re{get id(){return"weather"}get label(){return"\u2601 Wetter"}get title(){return"Wetter drau\xDFen: Regen, Schnee, Gewitter, Wolken, Sonne und Mond"}get settingsLabel(){return"\u2601 Wetter"}cfg(){return{...ju,...this.settings.weather||{}}}openSettings(){let t=this.settings.weather={...ju,...this.settings.weather||{}},e=Object.keys(this.states).filter(n=>n.startsWith("weather."));Vn(this.view,{title:"\u2601 Wetter drau\xDFen",obj:t,note:"Die Wetter-Entit\xE4t steuert Regen, Schnee, Gewitter, Nebel und Wolken; Sonne und Mond kommen von sun.sun.",fields:[{k:"entity",l:"Wetter-Entit\xE4t",t:"select",o:[["","automatisch"],...e]},{k:"rain",l:"Regen",t:"checkbox"},{k:"snow",l:"Schnee",t:"checkbox"},{k:"lightning",l:"Gewitter und Blitze",t:"checkbox"},{k:"fog",l:"Nebel",t:"checkbox"},{k:"clouds",l:"Wolken und Abdunkeln",t:"checkbox"},{k:"sun",l:"Sonne und Mond",t:"checkbox"}]})}entity(){let t=this.states,e=this.cfg().entity;return e&&t[e]?e:Object.keys(t).find(n=>n.startsWith("weather."))||null}available(){return!!this.entity()}build(){let t=this.view,e=t.extent()||[0,0,10,10],n=t.cfg.quality==="tablet"?.3:1;this.center=new z((e[0]+e[2])/2,0,(e[1]+e[3])/2),this.box={x0:e[0]-14,x1:e[2]+14,z0:e[1]-14,z1:e[3]+14,top:26};let s=this.box.x1-this.box.x0,r=this.box.z1-this.box.z0,o=(h,u)=>h+Math.random()*(u-h);this.rainN=Math.round(2400*n),this.rainPos=new Float32Array(this.rainN*6),this.rainHead=new Float32Array(this.rainN*3),this.rainSpeed=new Float32Array(this.rainN);for(let h=0;h<this.rainN;h++)this.rainHead.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.rainSpeed[h]=o(16,24);let a=new jt;a.setAttribute("position",new ke(this.rainPos,3).setUsage(Cc)),a.setDrawRange(0,0),this.rain=new he(a,new le({color:10275071,transparent:!0,opacity:.5,depthWrite:!1})),this.rain.frustumCulled=!1,this.snowN=Math.round(1800*n),this.snowPos=new Float32Array(this.snowN*3),this.snowPhase=new Float32Array(this.snowN);for(let h=0;h<this.snowN;h++)this.snowPos.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.snowPhase[h]=o(0,6.28);let l=new jt;l.setAttribute("position",new ke(this.snowPos,3).setUsage(Cc)),l.setDrawRange(0,0),this.snow=new Rs(l,new Fi({size:.2,color:16777215,map:ri(),transparent:!0,depthWrite:!1,opacity:.9})),this.snow.frustumCulled=!1,this.bolt=new cn(new jt().setFromPoints(Array.from({length:9},()=>new z)),new le({color:15397631})),this.bolt.visible=!1,this.bolt.frustumCulled=!1,this.sunSprite=new en(new qe({map:ri("rgba(255,244,200,1)"),color:16771496,transparent:!0,depthWrite:!1,blending:an,fog:!1})),this.sunSprite.scale.setScalar(16),this.moonSprite=new en(new qe({map:n_(),transparent:!0,depthWrite:!1,fog:!1})),this.moonSprite.scale.setScalar(6),this.sunSprite.visible=this.moonSprite.visible=!1;let c=e_();this.clouds=Array.from({length:9},()=>{let h=new en(new qe({map:c,transparent:!0,depthWrite:!1,opacity:0,fog:!1}));return h.scale.set(o(26,40),o(10,16),1),h.position.set(o(this.box.x0-10,this.box.x1+10),o(24,36),o(this.box.z0-10,this.box.z1+10)),h.visible=!1,h}),this.group.add(this.rain,this.snow,this.bolt,this.sunSprite,this.moonSprite,...this.clouds),this.base={amb:t.ambient.intensity,dl:t.sunLight.intensity,bg:t.scene.background.clone(),fogNear:t.scene.fog.near,fogFar:t.scene.fog.far,dlPos:t.sunLight.position.clone(),dlColor:t.sunLight.color.clone()},this.flash=0,this.nextStrike=4,this.wx=0,this.wz=0,this.w=null,this.lit={amb:this.base.amb,dl:this.base.dl}}update(t){let e=this.entity();if(!e||!this.base)return;let n=t[e],s=this.cfg(),r=this.plan.site?.north??this.settings.north??0,o=this.w=Ku(n.state,n.attributes||{},t["sun.sun"]||null),a=this.view;this.rain.geometry.setDrawRange(0,s.rain?Math.round(this.rainN*o.rain)*2:0),this.snow.geometry.setDrawRange(0,s.snow?Math.round(this.snowN*o.snow):0);let l=Math.tan(o.windAngle*Math.PI/180),c=Us(o.windBearing+180,0,r);this.wx=c.x*l,this.wz=c.z*l;let h=!o.night,u=Number.isFinite(o.sunElevation)?o.sunElevation:h?40:-20,d=Number.isFinite(o.sunAzimuth)?o.sunAzimuth:180,f=62,p=(g,m)=>g.position.set(this.center.x+m.x*f,Math.max(4,m.y*f),this.center.z+m.z*f);this.sunSprite.visible=s.sun&&h&&u>-2,this.sunSprite.visible&&p(this.sunSprite,Us(d,Math.max(u,6),r)),this.sunSprite.material.opacity=1-o.cloud*.75,this.moonSprite.visible=s.sun&&o.night,this.moonSprite.visible&&p(this.moonSprite,Us(d+180,xn(-u+10,14,60),r)),this.moonSprite.material.opacity=1-o.cloud*.8,this.clouds.forEach((g,m)=>{let M=s.clouds&&m<Math.ceil(this.clouds.length*o.cloud);g.visible=M,g.material.opacity=M?.2+.35*o.cloud:0});let x=h?Us(d,Math.max(u,12),r):Us(d+180,35,r);a.sunLight.position.set(this.center.x+x.x*30,x.y*30,this.center.z+x.z*30),a.sunLight.color.set(h?16773592:8361430),this.target={amb:this.base.amb*(h?1:.75)*(1-.25*o.cloud),dl:this.base.dl*(h?1:.4)*(1-.7*o.cloud),fog:s.fog?o.fog:0,tint:a.theme==="neon"&&h?.55*(1-o.cloud*.6):0},a.setChip("weather",`${o.lightning?"\u26C8":o.rain?"\u{1F327}":o.snow?"\u2744":o.fog?"\u{1F32B}":h?o.cloud>.6?"\u2601":o.cloud>.25?"\u26C5":"\u2600":"\u{1F319}"} ${Ju(n.state)}${n.attributes?.temperature!=null?` \xB7 ${n.attributes.temperature}\xB0`:""}${o.windKmh>=5?` \xB7 ${Math.round(o.windKmh)} km/h`:""}`)}tick(t){if(!this.w||!this.target)return;let e=this.view,n=this.w,s=this.cfg(),r=Math.min(1,t*1.5);if(this.lit.amb+=(this.target.amb-this.lit.amb)*r,this.lit.dl+=(this.target.dl-this.lit.dl)*r,s.lightning&&n.lightning&&(this.nextStrike-=t,this.nextStrike<=0)){this.flash=1,this.nextStrike=3+Math.random()*7;let h=this.box.x0+Math.random()*(this.box.x1-this.box.x0),u=this.box.z0+Math.random()*(this.box.z1-this.box.z0),d=this.bolt.geometry.attributes.position;for(let f=0;f<9;f++)d.setXYZ(f,h+(Math.random()-.5)*3*(f>0&&f<8?1:0),28-f*3.5,u+(Math.random()-.5)*3*(f>0&&f<8?1:0));d.needsUpdate=!0,this.bolt.visible=!0}this.flash=Math.max(0,this.flash-t*4),this.flash<.3&&(this.bolt.visible=!1),e.ambient.intensity=this.lit.amb+this.flash*1.4,e.sunLight.intensity=this.lit.dl+this.flash*1.8,e.scene.background.copy(this.base.bg).lerp(new Ot(1714765),this.target.tint).lerp(new Ot(14543103),this.flash*.5),this.target.fog>0?(e.scene.fog.near=this.base.fogNear*(1-.85*this.target.fog),e.scene.fog.far=this.base.fogFar*(1-.7*this.target.fog)):(e.scene.fog.near=this.base.fogNear,e.scene.fog.far=this.base.fogFar);let a=Math.round(this.rainN*n.rain);if(s.rain&&a){let u=this.wx,d=this.wz;for(let f=0;f<a;f++){let p=this.rainHead[f*3],x=this.rainHead[f*3+1],g=this.rainHead[f*3+2],m=this.rainSpeed[f]*t;x-=m,p+=u*m,g+=d*m,x<0&&(x=this.box.top,p=this.box.x0+Math.random()*(this.box.x1-this.box.x0),g=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.rainHead.set([p,x,g],f*3),this.rainPos.set([p,x,g,p-u*.7,x+.7,g-d*.7],f*6)}this.rain.geometry.attributes.position.needsUpdate=!0}let l=Math.round(this.snowN*n.snow);if(s.snow&&l){let h=performance.now()/1e3;for(let u=0;u<l;u++){let d=this.snowPos[u*3],f=this.snowPos[u*3+1],p=this.snowPos[u*3+2];f-=1.3*t,d+=(Math.sin(h*.7+this.snowPhase[u])*.5+this.wx*4)*t,p+=(Math.cos(h*.5+this.snowPhase[u])*.5+this.wz*4)*t,f<0&&(f=this.box.top,d=this.box.x0+Math.random()*(this.box.x1-this.box.x0),p=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.snowPos[u*3]=d,this.snowPos[u*3+1]=f,this.snowPos[u*3+2]=p}this.snow.geometry.attributes.position.needsUpdate=!0}let c=(.4+n.windKmh*.05)*t;this.clouds.forEach(h=>{h.visible&&(h.position.x+=c,h.position.x>this.box.x1+20&&(h.position.x=this.box.x0-20))})}reset(){let t=this.view;this.base&&(t.ambient.intensity=this.base.amb,t.sunLight.intensity=this.base.dl,t.sunLight.position.copy(this.base.dlPos),t.sunLight.color.copy(this.base.dlColor),t.scene.background.copy(this.base.bg),t.scene.fog.near=this.base.fogNear,t.scene.fog.far=this.base.fogFar,t.setChip("weather",""))}dispose(){this.reset(),this.base=null,this.w=null,this.target=null}};function i_(i,t){if(t==null)return!1;let e=String(t).trim().toLowerCase();if(e==="")return!1;if(e==="*")return!0;let n=String(i??"").toLowerCase();return e.includes("*")?new RegExp("^"+e.split("*").map(r=>r.replace(/[.+?^${}()|[\]\\]/g,"\\$&")).join(".*")+"$").test(n):n===e||n.includes(e)}function Yo(i,t,e){for(let n of i||[]){let s=t[n.entity||e];if(!s)continue;let r=n.attr?s.attributes?.[n.attr]:s.state;if(i_(r,n.match))return n}return null}var s_=[["netflix","#e50914"],["youtube","#ff1a1a"],["prime","#00a8e1"],["amazon","#00a8e1"],["disney","#1b46c9"],["spotify","#1db954"],["plex","#e5a00d"],["kodi","#17b2e7"],["max","#5822b4"],["hbo","#5822b4"],["apple","#9aa0a6"],["twitch","#9146ff"],["tagesschau","#0a3a78"],["zdf","#fa7d19"],["ard","#0a56b8"],["rtl","#e30613"],["sky","#0072c9"],["dazn","#d6ff00"],["paramount","#0064ff"]];function kc(i){let t=String(i||"").toLowerCase();return t&&s_.find(([e])=>t.includes(e))?.[1]||null}var Fc=i=>typeof i=="string"&&/^camera\.[\w]+$/.test(i);var r_=["off","unavailable","unknown","standby","idle"],Zo=class extends Re{get id(){return"screens"}build(t){this.items=(t.screens||[]).map(e=>({a:e,ctx:e.canvas.getContext("2d"),sig:""})),this.images=new Map,this.camTimer=0,this.bust=Date.now()}imageFor(t){if(!t)return null;let e=this.images.get(t);if(!e){let n=new Image;/^https?:\/\//i.test(t)&&!t.startsWith(location.origin)&&(n.crossOrigin="anonymous"),e={img:n,ok:!1},n.onload=()=>{e.ok=!0,this.items.forEach(s=>s.sig=""),this.update(this.states)},n.onerror=()=>{e.failed=!0},n.src=t,this.images.set(t,e)}return e.ok?e.img:null}model(t,e){let n=t.a.f,s=n.screen||{},r=s.entity||n.entity||null,o=r?e[r]:null,a=o?!r_.includes(o.state):!1,l=Yo(s.rules,e,r),c=l?.bg||s.bg||"dark";if(l?.image){let h=l.image,u=Fc(h);if(u){let d=e[h]?.attributes?.entity_picture;h=d?`${d}${d.includes("?")?"&":"?"}_=${this.bust}`:null}return{mode:"rule",bg:c,src:h,cam:u,key:`rule|${c}|${h}`}}if(o&&a){let h=o.attributes?.entity_picture,u=o.attributes?.app_name||o.attributes?.source||o.attributes?.media_title||"";if(o.state==="playing"&&h)return{mode:"art",bg:c,src:h,tint:kc(u),key:`art|${h}|${u}`};let d=kc(u)||"#2d6cff";return{mode:"app",bg:c,tint:d,text:u,key:`app|${d}|${u}|${o.state}`}}return a?{mode:"on",bg:c,key:"on"}:{mode:"off",bg:c,key:"off"}}update(t){if(this.items)for(let e of this.items){let n=this.model(e,t);n.key!==e.sig&&(e.sig=n.key,this.draw(e,n))}}tick(t){!this.items?.length||(this.camTimer+=t,this.camTimer<5)||(this.camTimer=0,!this.items.some(n=>(n.a.f.screen?.rules||[]).some(s=>Fc(s.image))))||(this.bust=Date.now(),this.images.forEach((n,s)=>{s.includes("_=")&&this.images.delete(s)}),this.items.forEach(n=>{n.sig.startsWith("rule|")&&n.sig.includes("_=")&&(n.sig="")}),this.update(this.states))}draw(t,e){let{ctx:n}=t,s=t.a.canvas.width,r=t.a.canvas.height,o=e.bg!=="white";n.clearRect(0,0,s,r);let a=c=>{n.fillStyle=c,n.fillRect(0,0,s,r)},l=(c,h=.12,u=!1)=>{let d=c.naturalWidth||c.width,f=c.naturalHeight||c.height,p=s*(1-h*2),x=r*(1-h*2),g=u?Math.max(s/d,r/f):Math.min(p/d,x/f),m=d*g,M=f*g;n.drawImage(c,(s-m)/2,(r-M)/2,m,M)};if(e.mode==="off"){a("#04060b");let c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,"rgba(255,255,255,.07)"),c.addColorStop(.4,"rgba(255,255,255,0)"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="on"){let c=n.createLinearGradient(0,0,0,r);c.addColorStop(0,"#2a3f8f"),c.addColorStop(1,"#0b1330"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="app"){a("#05070d");let c=n.createRadialGradient(s/2,r/2,10,s/2,r/2,s*.6);c.addColorStop(0,e.tint),c.addColorStop(1,"#05070d"),n.fillStyle=c,n.fillRect(0,0,s,r),e.text&&(n.fillStyle="#fff",n.font=`bold ${Math.round(r*.16)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(e.text,s/2,r/2,s*.86))}else if(e.mode==="art"){a("#05070d"),e.tint&&(n.fillStyle=e.tint,n.globalAlpha=.28,n.fillRect(0,0,s,r),n.globalAlpha=1);let c=this.imageFor(e.src);c&&l(c,.06)}else if(e.mode==="rule"){a(o?"#05070d":"#f4f6fb");let c=this.imageFor(e.src);c&&l(c,e.cam?0:.14,e.cam)}n.strokeStyle="rgba(255,255,255,.12)",n.lineWidth=3,n.strokeRect(1.5,1.5,s-3,r-3),t.a.tex.needsUpdate=!0}dispose(){this.items=null}};var yn=()=>Math.random().toString(36).slice(2,9),mr=(i,t=.25)=>Math.round(i/t)*t,Ze=i=>(i||"").split(".")[0],Ko=i=>JSON.parse(JSON.stringify(i)),Ee=i=>i*Math.PI/180;function un(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}function Mi(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function Ns(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?((i[0]-t[0])*n+(i[1]-t[1])*s)/r:0;o=Math.max(0,Math.min(1,o));let a=[t[0]+o*n,t[1]+o*s];return{d:Math.hypot(i[0]-a[0],i[1]-a[1]),q:a,t:o}}function Jo(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return Math.abs(t/2)}function Ln(i){let t=0,e=0,n=0;for(let u=0;u<i.length;u++){let[d,f]=i[u],[p,x]=i[(u+1)%i.length],g=d*x-p*f;t+=g,e+=(d+p)*g,n+=(f+x)*g}let[s,r,o,a]=Mi(i);if(Math.abs(t)<1e-9)return[(s+o)/2,(r+a)/2];let l=[e/(3*t),n/(3*t)];if(un(l,i))return l;let c=null,h=1/0;for(let u=s;u<=o;u+=.1)for(let d=r;d<=a;d+=.1){let f=Math.hypot(u-l[0],d-l[1]);f<h&&un([u,d],i)&&(h=f,c=[u,d])}return c||l}function Bc(i,t,e){let n=Ee(i.rot||0),s=Math.cos(n),r=Math.sin(n);return[i.x+t*s-e*r,i.z+t*r+e*s]}function jo(i){let t=(i.w||.5)/2,e=(i.d||.5)/2;return[[-t,-e],[t,-e],[t,e],[-t,e]].map(([n,s])=>Bc(i,n,s))}function o_(i){let t=[...new Map(i.map(r=>[r.join(","),r])).values()].sort((r,o)=>r[0]-o[0]||r[1]-o[1]);if(t.length<3)return t;let e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}let s=[];for(let r of[...t].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function Qu(i){let t=o_(i),e=null;for(let x=0;x<t.length;x++){let g=t[x],m=t[(x+1)%t.length],M=Math.atan2(m[1]-g[1],m[0]-g[0]),v=Math.cos(-M),_=Math.sin(-M),D=1/0,C=-1/0,N=1/0,k=-1/0;for(let w of t){let L=w[0]*v-w[1]*_,G=w[0]*_+w[1]*v;D=Math.min(D,L),C=Math.max(C,L),N=Math.min(N,G),k=Math.max(k,G)}let T=(C-D)*(k-N);(!e||T<e.area-1e-9)&&(e={area:T,ang:M,x0:D,x1:C,z0:N,z1:k})}let{ang:n,x0:s,x1:r,z0:o,z1:a}=e,l=(s+r)/2,c=(o+a)/2,h=Math.cos(n),u=Math.sin(n),d=r-s,f=a-o,p=n;return f>d&&([d,f]=[f,d],p+=Math.PI/2),{cx:l*h-c*u,cz:l*u+c*h,len:d,wid:f,ang:p}}function td(i=0){let t=i*Math.PI/180;return{north:[Math.sin(t),-Math.cos(t)],south:[-Math.sin(t),Math.cos(t)],east:[Math.cos(t),Math.sin(t)],west:[-Math.cos(t),-Math.sin(t)]}}var ed="playing",Qo=class extends Re{get id(){return"sound"}get label(){return"\u{1F50A} Sound"}get title(){return"Wiedergabe: Karten, Klangringe, Multiroom; langes Dr\xFCcken \xF6ffnet das Men\xFC"}get usesHolo(){return!0}available(){return!!this.players?.length}build(t){this.players=[];let e=new Set,n=(r,o,a,l,c)=>{!r||Ze(r)!=="media_player"||e.has(r)||(e.add(r),this.players.push({entity:r,x:o,y:a,z:l,floor:c}))};t.devices.forEach(r=>n(r.entity,r.x,r.y,r.z,r.floor)),t.furniture.forEach(r=>n(r.f.entity,r.x,r.top+.05,r.z,r.floor));let s=r=>new Ge({color:r,transparent:!0,opacity:0,side:de,depthWrite:!1});this.players.forEach(r=>{r.root=new ae,r.root.position.set(r.x,r.y,r.z),r.rings=[0,1,2].map(()=>{let o=new Gt(new Cs(.94,1,56),s(16722902));return o.rotation.x=-Math.PI/2,o.visible=!1,r.root.add(o),o}),r.card=In(this.cardHtml(r),{cls:"np",interactive:!0}),r.card.position.set(0,.55,0),r.card.visible=!1,r.card.element.addEventListener("click",o=>this.cardClick(r,o)),r.card.element.addEventListener("change",o=>this.cardClick(r,o)),r.root.add(r.card),this.group.add(r.root)}),this.lines=new he(new jt,new le({color:16722902,transparent:!0,opacity:.7})),this.lines.frustumCulled=!1,this.group.add(this.lines),this.phase=0}cardHtml(t){return`<div class="np"><img alt=""><div><div class="t"><b data-t></b></div><div class="sub" data-s></div>
      <div class="ctl"><button data-a="prev">\u23EE</button><button data-a="play">\u23EF</button><button data-a="next">\u23ED</button>
      <input type="range" min="0" max="100" data-a="vol" title="Lautst\xE4rke"></div></div></div>`}cardClick(t,e){let n=e.target.closest?.("[data-a]");if(!n)return;e.stopPropagation();let s={prev:"media_previous_track",play:"media_play_pause",next:"media_next_track"}[n.dataset.a];s&&e.type==="click"&&this.view.hass.callService("media_player",s,{entity_id:t.entity}),n.dataset.a==="vol"&&e.type==="change"&&this.view.hass.callService("media_player","volume_set",{entity_id:t.entity,volume_level:+n.value/100})}update(t){if(!this.players)return;let e=this.view.holo!==!1,n=0,s=[];this.players.forEach(a=>{let l=t[a.entity];a.playing=l?.state===ed,a.vol=xn(Number(l?.attributes?.volume_level??.35),0,1),a.members=l?.attributes?.group_members||[],a.rings.forEach(h=>{h.visible=a.playing});let c=e&&a.playing&&n<3;if(a.card.visible=c,c&&n++,l&&c){let h=l.attributes||{},u=[l.state,h.media_title,h.media_artist,h.entity_picture,h.friendly_name].join("|");if(u!==a.sig){a.sig=u;let f=a.card.element;f.querySelector("[data-t]").textContent=h.media_title||h.friendly_name||a.entity,f.querySelector("[data-s]").textContent=[h.media_artist,h.friendly_name].filter(Boolean).join(" \xB7 ");let p=f.querySelector("img");p.style.display=h.entity_picture?"":"none",h.entity_picture&&(p.src=h.entity_picture)}let d=a.card.element.querySelector("[data-a=vol]");d&&document.activeElement!==d&&(d.value=Math.round(a.vol*100))}a.playing&&s.push(a)});let r=[],o=new Set;this.players.forEach(a=>{a.members.forEach(l=>{let c=this.players.find(u=>u.entity===l);if(!c||c===a||a.floor!==c.floor)return;let h=[a.entity,c.entity].sort().join("|");o.has(h)||(o.add(h),r.push(new z(a.x,a.y,a.z),new z(c.x,c.y,c.z)))})}),this.lines.geometry.setFromPoints(r),this.lines.visible=r.length>0,this.menu&&this.refreshMenu()}tick(t){this.players&&(this.phase=(this.phase+t*.55)%1,this.players.forEach(e=>{if(!e.playing)return;let n=.35+e.vol*1.25;e.rings.forEach((s,r)=>{let o=(this.phase+r/3)%1;s.scale.setScalar(.2+o*n),s.material.opacity=(1-o)*(.35+.5*e.vol)})}))}onLongPress(t){return!t?.entity||Ze(t.entity)!=="media_player"?!1:(this.openMenu(t.entity),!0)}closeMenu(){this.menu?.box.remove(),this.menu=null}openMenu(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(460px,94%);max-height:70%;overflow:auto",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e,this.menu={entity:t,box:e,mode:"main",stack:[],list:null,sig:""};let n=e.remove.bind(e);e.remove=()=>{n(),this.menu?.box===e&&(this.menu=null)},this.refreshMenu(!0)}refreshMenu(t=!1){let e=this.menu;if(!e)return;let n=this.states[e.entity];if(!n)return;let s=n.attributes||{},r=[e.mode,n.state,s.media_title,s.media_artist,s.entity_picture,s.source,s.is_volume_muted,e.list?.title].join("|");if(!t&&r===e.sig)return;e.sig=r;let o=(l,c={})=>this.view.hass.callService("media_player",l,{entity_id:e.entity,...c});if(e.mode==="browse")return this.renderBrowse();let a=s.source_list||[];e.box.innerHTML=`
      <div style="display:flex;gap:10px;align-items:center">
        ${s.entity_picture?`<img src="${Yt(s.entity_picture)}" style="width:64px;height:64px;border-radius:8px;object-fit:cover">`:""}
        <div style="flex:1;min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Yt(s.media_title||s.friendly_name||e.entity)}</b>
        <span style="opacity:.7">${Yt([s.media_artist,s.friendly_name,n.state].filter(Boolean).join(" \xB7 "))}</span></div>
        <button data-a="x" title="Schlie\xDFen">\u2715</button></div>
      <div style="display:flex;gap:6px;align-items:center;margin:10px 0">
        <button data-a="prev">\u23EE</button><button data-a="play" class="on">${n.state===ed?"\u23F8":"\u25B6"}</button><button data-a="next">\u23ED</button>
        <button data-a="mute">${s.is_volume_muted?"\u{1F507}":"\u{1F508}"}</button>
        <input type="range" min="0" max="100" value="${Math.round((s.volume_level??0)*100)}" data-a="vol" style="flex:1">
      </div>
      <div style="display:flex;gap:6px">
        ${a.length?`<select data-a="src" style="flex:1"><option value="">Quelle \u2026</option>${a.map(l=>`<option ${l===s.source?"selected":""}>${Yt(l)}</option>`).join("")}</select>`:""}
        <button data-a="browse" style="flex:1">\u25B6 Abspielen \u2026</button>
        <button data-a="info">\u2139</button>
      </div>`,e.box.onclick=l=>{let c=l.target.closest("[data-a]");if(!c)return;let h=c.dataset.a;h==="x"?this.view.closeOverlay():h==="prev"?o("media_previous_track"):h==="next"?o("media_next_track"):h==="play"?o("media_play_pause"):h==="mute"?o("volume_mute",{is_volume_muted:!s.is_volume_muted}):h==="info"?(this.view.closeOverlay(),this.view.moreInfo(e.entity)):h==="browse"&&(e.mode="browse",e.stack=[],this.browse())},e.box.onchange=l=>{let c=l.target.closest("[data-a]");c?.dataset.a==="vol"&&o("volume_set",{volume_level:+c.value/100}),c?.dataset.a==="src"&&c.value&&o("select_source",{source:c.value})}}async browse(t,e){let n=this.menu;if(n){try{let s={type:"media_player/browse_media",entity_id:n.entity};t!=null&&(s.media_content_id=t,s.media_content_type=e),n.list=await this.view.hass.callWS(s),n.err=null}catch(s){n.err=s.message||"Durchsuchen nicht m\xF6glich",n.list=null}this.renderBrowse()}}renderBrowse(){let t=this.menu;if(!t)return;let e=t.list;t.box.innerHTML=`<div style="display:flex;gap:6px;align-items:center;margin-bottom:8px">
      <button data-a="back">\u2190</button><b style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Yt(e?.title||"Medien")}</b><button data-a="x">\u2715</button></div>
      ${t.err?`<div style="opacity:.7">${Yt(t.err)}</div>`:""}
      <div>${(e?.children||[]).map((n,s)=>`<div class="dev" data-i="${s}"><div style="display:flex;gap:8px;align-items:center;min-width:0">
        ${n.thumbnail?`<img src="${Yt(n.thumbnail)}" style="width:36px;height:36px;border-radius:5px;object-fit:cover">`:`<span style="width:36px;text-align:center">${n.can_expand?"\u{1F4C1}":"\u266A"}</span>`}
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Yt(n.title)}</span></div>
        <span>${n.can_play?`<button data-play="${s}" title="Abspielen">\u25B6</button>`:""}${n.can_expand?"\u203A":""}</span></div>`).join("")||(t.err?"":"<div style='opacity:.7'>Leer</div>")}</div>`,t.box.onclick=n=>{let s=n.target.closest("[data-a]")?.dataset.a;if(s==="x")return this.view.closeOverlay();if(s==="back"){let l=t.stack.pop();return l?this.browse(l.id,l.type):(t.mode="main",this.refreshMenu(!0))}let r=n.target.closest("[data-play]")?.dataset.play,o=r??n.target.closest("[data-i]")?.dataset.i;if(o==null)return;let a=e.children[+o];if(r!=null||a.can_play&&!a.can_expand)return this.view.hass.callService("media_player","play_media",{entity_id:t.entity,media_content_id:a.media_content_id,media_content_type:a.media_content_type}),t.mode="main",this.refreshMenu(!0);a.can_expand&&(t.stack.push({id:e.media_content_id,type:e.media_content_type}),this.browse(a.media_content_id,a.media_content_type))},t.box.onchange=null}reset(){this.closeMenu()}dispose(){this.closeMenu(),this.players=null}};var nd=i=>Number.isFinite(Number(i))?Number(i):null;function id(i,t){let e=(s,r=!1)=>{let o=s?t[s]:null;if(!o)return null;let a=nd(o.state);if(a==null)return null;let l=String(o.attributes?.unit_of_measurement||"W").toLowerCase();return l==="kw"?a*=1e3:l==="mw"&&(a*=1e6),r?-a:a},n=i.battery_soc&&t[i.battery_soc]?nd(t[i.battery_soc].state):null;return{solar:e(i.solar),grid:e(i.grid,!!i.grid_invert),battery:e(i.battery,!!i.battery_invert),consumption:e(i.consumption),wallbox:e(i.wallbox),soc:n}}function sd(i){let t=Math.max(0,i.solar??0),e=i.battery??0,n=i.grid??(i.consumption!=null?i.consumption-t-e:0),s=i.consumption!=null?Math.max(0,i.consumption):Math.max(0,t+n+e),r=Math.max(0,-e),o=Math.max(0,e),a=Math.min(t,s),l=t-a,c=Math.min(l,r),h=Math.max(0,Math.min(l-c,Math.max(0,-n)||l-c)),u=Math.max(0,n),d=Math.max(0,r-c),f=o,p=s>0?Math.max(0,Math.min(1,1-u/s)):1;return{S:t,H:s,g:n,b:e,s2h:a,s2b:c,s2g:h,g2h:u,g2b:d,b2h:f,autarky:p,import:u,export:Math.max(0,-n)}}function Wi(i){return Math.abs(i)>=1e3?`${(i/1e3).toFixed(2).replace(".",",")} kW`:`${Math.round(i)} W`}function rd(i){return Math.max(.25,Math.min(2.6,.25+Math.log10(1+Math.abs(i))*.65))}function od(i){let t={};for(let e of i?.energy_sources||[]){let n=e.stat_rate||e.power?.[0]?.stat_rate||e.power_config?.stat_rate||null;n&&(e.type==="solar"&&!t.solar&&(t.solar=n),e.type==="grid"&&!t.grid&&(t.grid=n),e.type==="battery"&&!t.battery&&(t.battery=n))}return t}function ad(i){let t={};for(let[e,n]of Object.entries(i||{}))t[e]=(n||[]).map(s=>{let r=s.lu??s.lc;return{t:r!=null?r*1e3:Date.parse(s.last_updated||s.last_changed||0),s:s.s??s.state,a:s.a??s.attributes??null}}).filter(s=>Number.isFinite(s.t)).sort((s,r)=>s.t-r.t);return t}function ld(i){return(i||[]).map(t=>({t:t.t,v:Number(t.s)})).filter(t=>Number.isFinite(t.v))}function cd(i,t,e){let n=0;for(let s=0;s<i.length;s++){let r=Math.max(i[s].t,t),o=Math.min(s+1<i.length?i[s+1].t:e,e);o>r&&(n+=Math.max(0,i[s].v)*((o-r)/36e5))}return n/1e3}function hd(i,t,e,n){let s=new Array(n).fill(null),r=0,o=null;for(let a=0;a<n;a++){let l=t+(e-t)*(a+.5)/n;for(;r<i.length&&i[r].t<=l;)o=i[r].v,r++;s[a]=o}return s}async function ta(i,t,e,n,{attrs:s=!1}={}){let r=[...new Set(t.filter(Boolean))];if(!r.length)return{};let o=await i.callWS({type:"history/history_during_period",start_time:e.toISOString(),end_time:n.toISOString(),entity_ids:r,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!s,no_attributes:!s});return ad(o)}var Xi={solar:16765286,import:4891647,export:8116367,discharge:65437,charge:16722902,wallbox:1697535},Dn=(i,t,e)=>new z(i,t,e),ea=class extends Re{get id(){return"energy"}get label(){return"\u26A1 Energie"}get title(){return"Energiefluss: Kabel mit Leistungspunkten, leuchtende Solarmodule, Hologramm"}get usesHolo(){return!0}get settingsLabel(){return"\u26A1 Energie"}cfg(){return{hide_below_w:5,device_cards:!0,...this.settings.energy||{}}}effective(){let t=this.cfg();return{...t,solar:t.solar||this.pvEntity||null,consumption:t.consumption||this.meterPower||null}}available(){let t=this.effective();return!!(t.solar||t.grid||t.battery||t.consumption)}build(t){this.anchors=t,this.pvEntity=t.pv.find(g=>g.entity)?.entity||null,this.meterPower=t.furniture.find(g=>g.f.type==="meter"&&g.f.power)?.f.power||null;let e=t.pv.some(g=>g.entity),n=t.pv.filter(g=>!e||g.entity),s=g=>g.pos||g.mesh.position,r=g=>t.furniture.find(m=>m.f.type===g),o=g=>g?Dn(g.x,(g.y+g.top)/2,g.z):null,a=t.rooms.filter(g=>g.elev<=.3),l=a.length?a:t.rooms,c=r("meter"),h=r("grid_point")||c,u=l.length?Dn(l.reduce((g,m)=>g+m.x,0)/l.length,1.2,l.reduce((g,m)=>g+m.z,0)/l.length):Dn(0,1.2,0);this.nodes={house:o(c)||u};let d=this.view.extent()||[0,0,10,10];if(this.nodes.grid=o(h)||Dn(d[0]-4,1,(d[1]+d[3])/2),n.length){let g=n.reduce((m,M)=>m.add(s(M)),Dn(0,0,0)).multiplyScalar(1/n.length);this.nodes.solar=g.add(Dn(0,.25,0))}else this.nodes.solar=o(r("inverter"));this.nodes.battery=o(r("battery")),this.nodes.wallbox=o(r("wallbox"));let f=Math.max(...t.rooms.map(g=>g.elev+2.8),...n.map(g=>s(g).y),3);this.nodes.holo=Dn(this.nodes.house.x,f+1.4,this.nodes.house.z),this.edges=[];let p=ri(),x=(g,m,M)=>{if(!m||!M)return;let v=this.route(m,M),_=new cn(new jt().setFromPoints(v.pts),new le({color:3820152,transparent:!0,opacity:.45})),D=Math.max(6,Math.round(v.len*1.1)),C=new Rs(new jt().setAttribute("position",new ke(new Float32Array(D*3),3)),new Fi({size:.34,map:p,color:Xi.solar,transparent:!0,depthWrite:!1,blending:an}));C.frustumCulled=!1,C.visible=!1,this.group.add(_,C),this.edges.push({key:g,path:v,line:_,dots:C,n:D,u:0,dir:1,w:0})};x("solar",this.nodes.solar,this.nodes.house),x("grid",this.nodes.grid,this.nodes.house),x("battery",this.nodes.battery,this.nodes.house),x("wallbox",this.nodes.house,this.nodes.wallbox),this.pvTex=(()=>{let g=document.createElement("canvas");g.width=4,g.height=64;let m=g.getContext("2d"),M=m.createLinearGradient(0,0,0,64);M.addColorStop(0,"#102040"),M.addColorStop(.5,"#9fd0ff"),M.addColorStop(1,"#102040"),m.fillStyle=M,m.fillRect(0,0,4,64);let v=new Ye(g);return v.wrapT=ir,v})(),this.pvMats=[...new Set(n.map(g=>g.mat))],this.pvMats.forEach(g=>{g.emissiveMap=this.pvTex,g.emissive.set(16777215),g.emissiveIntensity=.12,g.needsUpdate=!0}),this.pvWp=n.reduce((g,m)=>g+(m.wp||400),0)||400,this.level=0,this.holo=In('<div class="en"><b>\u26A1 Energie</b><div data-rows></div><canvas data-spark width="220" height="40"></canvas></div>',{cls:"holo"}),this.holo.position.copy(this.nodes.holo),this.group.add(this.holo),this.holo.visible=!1,this.devCards=t.furniture.filter(g=>g.f.power).map(g=>{let m=In("<span>\u26A1 <b>\u2013 W</b></span>",{cls:"pw"});return m.position.set(g.x,g.top+.45,g.z),m.visible=!1,this.group.add(m),{a:g,c:m,sig:""}}),this._html=null,this.curveTimer=0,this.loadCurve()}route(t,e){let n=Math.max(t.y,e.y)+.35,s=[t.clone(),Dn(t.x,n,t.z),Dn(e.x,n,t.z),Dn(e.x,n,e.z),e.clone()],r=s.filter((a,l)=>l===0||a.distanceTo(s[l-1])>.001),o=[0];for(let a=1;a<r.length;a++)o.push(o[a-1]+r[a].distanceTo(r[a-1]));return{pts:r,cum:o,len:o[o.length-1]||1}}at(t,e,n){let{pts:s,cum:r}=t,o=1;for(;o<r.length-1&&r[o]<e;)o++;let a=(e-r[o-1])/Math.max(1e-6,r[o]-r[o-1]);return n.copy(s[o-1]).lerp(s[o],xn(a,0,1))}async loadCurve(){let t=this.effective();if(!(!t.solar||!this.view.hass?.callWS))try{let e=new Date,n=new Date(e);n.setHours(0,0,0,0);let s=await ta(this.view.hass,[t.solar],n,e),r=ld(s[t.solar]).map(o=>({...o,v:this.unitW(t.solar,o.v)}));this.curve=hd(r,n.getTime(),n.getTime()+864e5,48),this.nowBucket=Math.min(47,Math.floor((e-n)/864e5*48)),this.yieldKwh=cd(r,n.getTime(),e.getTime()),this.drawCurve(),this.update(this.states)}catch{}}unitW(t,e){return String(this.states[t]?.attributes?.unit_of_measurement||"W").toLowerCase()==="kw"?e*1e3:e}drawCurve(){let t=this.holo?.element.querySelector("[data-spark]");if(!t||!this.curve)return;let e=t.getContext("2d"),n=t.width,s=t.height;e.clearRect(0,0,n,s);let r=Math.max(1,...this.curve.map(a=>a||0)),o=n/this.curve.length;this.curve.forEach((a,l)=>{if(a==null)return;let c=Math.max(1,a/r*(s-4));e.fillStyle=l===this.nowBucket?"#ffd166":"rgba(255,209,102,.55)",e.fillRect(l*o,s-c,o-1,c)})}update(t){if(!this.edges)return;let e=this.effective(),n=this.p=id(e,t),s=this.f=sd(n),r=(u,d,f,p)=>{let x=this.edges.find(g=>g.key===u);x&&(x.w=d,x.dir=f,x.dots.visible=d>=10,x.dots.material.color.setHex(p),x.line.material.color.setHex(d>=10?p:3820152),x.line.material.opacity=d>=10?.75:.35)};r("solar",s.S,1,Xi.solar),r("grid",Math.abs(s.g),s.g>=0?1:-1,s.g>=0?Xi.import:Xi.export),r("battery",Math.abs(s.b),s.b>=0?1:-1,s.b>=0?Xi.discharge:Xi.charge),r("wallbox",Math.max(0,n.wallbox??0),1,Xi.wallbox),this.level=xn(s.S/this.pvWp,0,1);let o=this.view.holo!==!1,a=(u,d,f,p="")=>`<div class="r"><span>${u} ${d}</span><b>${f}</b>${p?`<span class="sub">${p}</span>`:""}</div>`,l=[];(n.solar!=null||this.pvEntity)&&l.push(a("\u2600","PV",Wi(s.S),this.yieldKwh!=null?`heute ${this.yieldKwh.toFixed(1).replace(".",",")} kWh`:"")),l.push(a("\u{1F3E0}","Haus",Wi(s.H))),(n.grid!=null||n.consumption!=null)&&l.push(a("\u{1F50C}","Netz",Wi(Math.abs(s.g)),s.g>10?"Bezug":s.g<-10?"Einspeisung":"")),(n.battery!=null||n.soc!=null)&&l.push(a("\u{1F50B}",n.soc!=null?`${Math.round(n.soc)} %`:"Akku",Wi(Math.abs(s.b)),s.b>10?"entl\xE4dt":s.b<-10?"l\xE4dt":"")),n.wallbox!=null&&n.wallbox>10&&l.push(a("\u{1F697}","Wallbox",Wi(n.wallbox))),s.H>0&&l.push(a("\u{1F331}","Autarkie",`${Math.round(s.autarky*100)} %`));for(let[u,d,f]of[["gas","\u{1F525}","Gas"],["water","\u{1F4A7}","Wasser"]]){let p=e[u]?t[e[u]]:null;p&&p.state!=="unavailable"&&l.push(a(d,f,`${Yt(p.state)} ${Yt(p.attributes?.unit_of_measurement||"")}`))}let c=l.join(""),h=this.holo.element;c!==this._html&&(this._html=c,h.querySelector("[data-rows]").innerHTML=c),this.holo.visible=o&&l.length>0,h.querySelector("[data-spark]").style.display=this.curve?"":"none",this.devCards.forEach(u=>{let d=t[u.a.f.power],f=d?parseFloat(d.state):NaN,p=Number.isFinite(f)?this.unitW(u.a.f.power,f):null;u.c.visible=e.device_cards!==!1&&o&&p!=null&&Math.abs(p)>=(e.hide_below_w??5);let x=p==null?"":Wi(p);x!==u.sig&&(u.sig=x,u.c.element.querySelector("b").textContent=x)})}tick(t){if(!this.edges)return;let e=Dn(0,0,0);for(let n of this.edges){if(!n.dots.visible)continue;n.u=(n.u+n.dir*rd(n.w)*t/n.path.len+1)%1;let s=n.dots.geometry.attributes.position;for(let r=0;r<n.n;r++){let o=((n.u+r/n.n)%1+1)%1;this.at(n.path,o*n.path.len,e),s.setXYZ(r,e.x,e.y,e.z)}s.needsUpdate=!0}this.level>.01&&(this.pvTex.offset.y=(this.pvTex.offset.y-t*(.15+1.4*this.level))%1),this.pvMats.forEach(n=>{n.emissiveIntensity=.1+1.2*this.level}),this.curveTimer+=t,this.curveTimer>300&&(this.curveTimer=0,this.loadCurve())}reset(){(this.pvMats||[]).forEach(t=>{t.emissiveMap=null,t.emissive.set(2059263),t.emissiveIntensity=.15,t.needsUpdate=!0})}dispose(){this.reset(),this.edges=null,this.pvMats=[]}openSettings(){let t=this.settings.energy||={};Vn(this.view,{title:"\u26A1 Energie einrichten",obj:t,note:"Leistungs-Sensoren in Watt. Netz: Bezug positiv. Akku: Entladen positiv. Mit \u201Eumkehren\u201C drehst du das Vorzeichen um. Kabel und Karte brauchen mindestens PV, Netz oder Verbrauch.",fields:[{k:"solar",l:"PV-Leistung",t:"entity"},{k:"grid",l:"Netz-Leistung",t:"entity"},{k:"grid_invert",l:"Netz-Vorzeichen umkehren",t:"checkbox"},{k:"battery",l:"Akku-Leistung",t:"entity"},{k:"battery_invert",l:"Akku-Vorzeichen umkehren",t:"checkbox"},{k:"battery_soc",l:"Akku-Ladestand (%)",t:"entity"},{k:"consumption",l:"Hausverbrauch (sonst berechnet)",t:"entity"},{k:"wallbox",l:"Wallbox-Leistung",t:"entity"},{k:"gas",l:"Gas (Anzeige)",t:"entity"},{k:"water",l:"Wasser (Anzeige)",t:"entity"},{k:"device_cards",l:"Leistungskarten an Ger\xE4ten",t:"checkbox"},{k:"hide_below_w",l:"Karten unter \u2026 W ausblenden",t:"number",p:"5"}],extra:(e,n,s)=>{let r=document.createElement("button");r.textContent="\u21E9 Vom Energie-Dashboard \xFCbernehmen",r.onclick=async()=>{try{let o=od(await this.view.hass.callWS({type:"energy/get_prefs"}));if(!Object.keys(o).length)return this.view.msg("Im Energie-Dashboard sind keine Leistungs-Sensoren hinterlegt \u2013 bitte oben w\xE4hlen.");s(),Object.assign(t,o),this.view.msg(`\xDCbernommen: ${Object.keys(o).join(", ")}`),n()}catch(o){this.view.msg("Energie-Dashboard nicht lesbar: "+(o.message||o.code))}},e.append(r)}})}};var a_=["battery","range","charging","power","lock","climate","switch","tracker"];function ud(i,t,e,n={}){let s=i?t?.[i]?.device_id:null,r=s?Object.keys(t).filter(u=>t[u].device_id===s&&e[u]&&!t[u].hidden):i&&e[i]?[i]:[],o=u=>e[u]?.attributes?.device_class,a=u=>r.find(u)||null,l=u=>u.startsWith("sensor."),c={battery:a(u=>l(u)&&o(u)==="battery"&&!/12v|aux|key|fob/.test(u))||a(u=>l(u)&&/battery_level|state_of_charge|soc|charge_level|ladestand/.test(u)),range:a(u=>l(u)&&/range|reichweite/.test(u)&&!/charge_time|time/.test(u)),charging:a(u=>u.startsWith("binary_sensor.")&&(o(u)==="battery_charging"||/charging|laden/.test(u))),power:a(u=>l(u)&&o(u)==="power"&&/charg|lade/.test(u)),lock:a(u=>u.startsWith("lock.")),climate:a(u=>u.startsWith("climate.")),switch:a(u=>(u.startsWith("switch.")||u.startsWith("button."))&&/charg|lade/.test(u)),tracker:a(u=>u.startsWith("device_tracker."))},h={};for(let u of a_)h[u]=n[u]||c[u]||null;return h}function zc(i){return i==null||Number.isNaN(i)?1697535:i<20?16726843:i<50?16757575:4063130}function dd(i,t){let e=a=>{let l=a&&t[a]?parseFloat(t[a].state):NaN;return Number.isFinite(l)?l:null},n=a=>t[a]?.attributes?.unit_of_measurement||"",s=a=>!!a&&["on","heat","cool","heat_cool","auto","charging"].includes(t[a]?.state),r=i.tracker?t[i.tracker]?.state:null,o=e(i.power);return o!=null&&n(i.power).toLowerCase()==="w"&&(o/=1e3),{battery:e(i.battery),range:e(i.range),rangeUnit:n(i.range)||"km",charging:s(i.charging)||o!=null&&o>.05,power:o,locked:i.lock?t[i.lock]?.state==="locked":null,climateOn:s(i.climate),away:r!=null&&r!=="home"&&r!=="unknown"}}var Os=class extends Re{get id(){return"car"}get label(){return"\u{1F697} Auto"}get title(){return"Fahrzeug: Ladestand, Reichweite, Laden, Verriegelung und Klima"}get usesHolo(){return!0}get settingsLabel(){return"\u{1F697} Auto"}available(){return!!this.cars?.length}build(t){this.cars=t.cars.map(e=>{let n=t.furniture.find(a=>a.f===e.f),s=In("<span data-pin>\u{1F697}</span>",{cls:"pin",interactive:!0});s.position.set(n.x,n.top+.5,n.z),s.element.style.cursor="pointer",s.element.addEventListener("click",()=>this.toggleCard(o));let r=In('<div class="car"></div>',{cls:"carcard",interactive:!0});r.position.set(n.x,n.top+1.4,n.z),r.visible=!1,r.element.addEventListener("click",a=>this.cardClick(o,a)),this.group.add(s,r);let o={...e,a:n,pin:s,dlg:r,open:!1,roles:null,sig:"",dlgSig:""};return o})}roles(t){let e=t.f,n=e.car||{};return ud(n.entity||e.entity,this.view.hass?.entities||{},this.states,n)}toggleCard(t){t.open=!t.open,this.cars.forEach(e=>{e!==t&&(e.open=!1)}),this.update(this.states)}onTap(t){let e=this.cars?.find(n=>n.f.id===t?.furnId);return e?(this.toggleCard(e),!0):!1}update(t){if(!this.cars)return;let e=this.view.holo!==!1;this.cars.forEach(n=>{let s=n.roles=this.roles(n),r=n.s=dd(s,t),o=r.battery!=null||r.range!=null||s.lock||s.climate;n.band.color.setHex(r.climateOn?16751164:zc(r.battery)),n.band.opacity=r.away?.2:.9,n.group.visible=!0;let a=n.f.car?.name||n.f.name||"Auto",l=r.away?["unterwegs"]:[r.battery!=null?`\u{1F50B} ${Math.round(r.battery)} %`:null,r.range!=null?`${Math.round(r.range)} ${Yt(r.rangeUnit)}`:null,r.charging?`\u26A1 ${r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"l\xE4dt"}`:null,r.locked!=null?r.locked?"\u{1F512}":"\u{1F513}":null,r.climateOn?"\u2744":null].filter(Boolean),c=`${Yt(a)}${l.length?" \xB7 "+l.join(" \xB7 "):""}`;if(c!==n.sig&&(n.sig=c,n.pin.element.firstChild.innerHTML=c),n.pin.visible=e,n.dlg.visible=e&&n.open,n.open){let h=r.battery!=null?xn(r.battery,0,100):0,u=`<b>\u{1F697} ${Yt(a)}</b>
          ${r.battery!=null?`<div class="bar"><i style="width:${h}%;background:#${zc(r.battery).toString(16).padStart(6,"0")}"></i></div>`:""}
          <div class="r"><span>Ladestand</span><b>${r.battery!=null?Math.round(r.battery)+" %":"\u2013"}</b></div>
          <div class="r"><span>Reichweite</span><b>${r.range!=null?Math.round(r.range)+" "+Yt(r.rangeUnit):"\u2013"}</b></div>
          <div class="r"><span>Laden</span><b>${r.charging?r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"ja":"nein"}</b></div>
          <div class="btns">
            ${s.lock?`<button data-a="lock">${r.locked?"\u{1F512} Verriegelt":"\u{1F513} Offen"}</button>`:""}
            ${s.climate?`<button data-a="climate" class="${r.climateOn?"on":""}">\u2744 Klima</button>`:""}
            ${s.switch?`<button data-a="charge" class="${r.charging?"on":""}">\u26A1 Laden</button>`:""}
            <button data-a="close">\u2715</button></div>`;u!==n.dlgSig&&(n.dlgSig=u,n.dlg.element.firstChild.innerHTML=u)}})}cardClick(t,e){let n=e.target.closest("[data-a]")?.dataset.a;if(!n)return;e.stopPropagation();let{roles:s,s:r}=t,o=this.view.hass;if(n==="close")return t.open=!1,this.update(this.states);if(n==="lock"&&s.lock){if(r.locked&&!confirm("Auto entriegeln?"))return;o.callService("lock",r.locked?"unlock":"lock",{entity_id:s.lock})}n==="climate"&&s.climate&&o.callService("climate",r.climateOn?"turn_off":"turn_on",{entity_id:s.climate}),n==="charge"&&s.switch&&(s.switch.startsWith("button.")?o.callService("button","press",{entity_id:s.switch}):o.callService("switch",r.charging?"turn_off":"turn_on",{entity_id:s.switch}))}tick(t,e){this.cars?.forEach(n=>{n.s?.charging&&!n.s.away&&(n.band.opacity=.55+.35*Math.sin(e*4))})}openSettings(){let t=this.cars?.[0];if(!t)return this.view.msg("Erst ein Fahrzeug (M\xF6beltyp \u201Ecar\u201C) im Plan platzieren.");this.openCarSettings(t.f)}openCarSettings(t){let e=t.car||={};Vn(this.view,{title:"\u{1F697} Auto zuordnen",obj:e,note:"Nenne eine beliebige Entit\xE4t des Autos; die anderen Entit\xE4ten desselben Ger\xE4ts werden automatisch gefunden. Eigene Zuordnungen unten haben Vorrang.",fields:[{k:"name",l:"Name",t:"text"},{k:"entity",l:"Entit\xE4t des Autos (z. B. Ladestand)",t:"entity"},{k:"battery",l:"Ladestand (%)",t:"entity"},{k:"range",l:"Reichweite",t:"entity"},{k:"charging",l:"L\xE4dt (binary_sensor)",t:"entity"},{k:"power",l:"Ladeleistung",t:"entity"},{k:"lock",l:"Zentralverriegelung (lock)",t:"entity"},{k:"climate",l:"Klima (climate)",t:"entity"},{k:"switch",l:"Laden starten/stoppen (switch/button)",t:"entity"},{k:"tracker",l:"Standort (device_tracker)",t:"entity"}]})}};function ks(i){let t=i*Math.PI/180;return[-Math.sin(t),Math.cos(t)]}function na(i,t,e,n,s,r=18){let o=ks(e),a=Math.atan2(o[1],o[0]),l=n*Math.PI/360,c=[[i,t]];for(let h=0;h<=r;h++){let u=a-l+2*l*h/r;c.push([i+s*Math.cos(u),t+s*Math.sin(u)])}return c}function fd(i,t){return 2*Math.atan(Math.tan(i*Math.PI/360)/Math.max(.2,t))*180/Math.PI}var l_=[["person","\u{1F6B6}",/person|human|people|mensch|face|gesicht/i],["vehicle","\u{1F697}",/vehicle|car\b|truck|auto|fahrzeug|bus\b|motorcycle|bicycle|lkw|pkw/i],["animal","\u{1F43E}",/animal|dog|cat\b|bird|tier|pet\b|hund|katze|vogel/i],["package","\u{1F4E6}",/package|paket|parcel/i],["motion","\u3030",/motion|bewegung|movement|moving/i]];function pd(i,t="",e=""){let n=`${i} ${t}`;for(let[s,r,o]of l_)if(o.test(n))return{kind:s,icon:r};return["motion","occupancy","moving"].includes(e)?{kind:"motion",icon:"\u3030"}:null}function md(i,t,e){let n=[],s=null;for(let r of i||[])r.s==="on"&&s!=="on"&&r.t>=t-e&&r.t<=t&&n.push({t:r.t,age:(t-r.t)/e}),s=r.s;return n}var gr=i=>new Date(i).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"});function gd(i){return/[?&]token=([^&]+)/.exec(i||"")?.[1]||null}var Un=(i,t,e)=>new z(i,t,e),c_=["motion","occupancy","presence","moving"],ia=class extends Re{get id(){return"cameras"}get label(){return"\u{1F3A5} Kameras"}get title(){return"Kameras: Sichtfeld, Erkennungs-Pins, Standbild, Durch-die-Kamera-sehen"}get settingsLabel(){return"\u{1F3A5} Kameras"}get usesHolo(){return!0}cfg(){return{pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}}}available(){return!!this.cams?.length}toolbar(){return[{label:"\u{1F5BC} Wand",title:"Standbilder aller Kameras als Raster, alle 5 s aktualisiert",on:!!this.wall,fn:()=>this.toggleWall()},{label:"\u{1F463} Spur",title:"Bewegung der letzten 30 Minuten",on:!!this.trailOn,fn:()=>this.toggleTrail()}]}build(t){this.anchors=t;let e=n=>t.rooms.find(s=>s.floor===n)?.elev??0;this.cams=t.devices.filter(n=>n.kind==="camera").map(n=>{let s=n.d,r={a:n,d:s,entity:n.entity,rot:s.rot??0,tilt:s.tilt??25,fov:s.fov??90,reach:s.reach??7,fe:s.groundY??e(n.floor)},o=na(n.x,n.z,r.rot,r.fov,r.reach),a=[];for(let f=1;f<o.length-1;f++)a.push(o[0][0],r.fe+.05,o[0][1],o[f][0],r.fe+.05,o[f][1],o[f+1][0],r.fe+.05,o[f+1][1]);let l=new jt;l.setAttribute("position",new ne(a,3)),r.mat=new Ge({color:1697535,transparent:!0,opacity:.16,side:de,depthWrite:!1}),r.cone=new Gt(l,r.mat);let c=[Un(n.x,r.fe+.05,n.z),...o.slice(1).map(f=>Un(f[0],r.fe+.05,f[1])),Un(n.x,r.fe+.05,n.z)];r.edge=new cn(new jt().setFromPoints(c),new le({color:1697535,transparent:!0,opacity:.7})),r.cone.visible=r.edge.visible=this.cfg().fov!==!1;let h=ks(r.rot),u=Math.cos(Ee(r.tilt)),d=Un(n.x+h[0]*.6*u,n.y-Math.sin(Ee(r.tilt))*.6,n.z+h[1]*.6*u);return r.dir=new cn(new jt().setFromPoints([Un(n.x,n.y,n.z),d]),new le({color:16722902})),r.pin=In("<span></span>",{cls:"pin",interactive:!0}),r.pin.position.set(n.x+h[0]*.7,n.y+.35,n.z+h[1]*.7),r.pin.visible=!1,r.pin.element.style.cursor="pointer",r.pin.element.addEventListener("click",()=>this.openCard(r)),this.group.add(r.cone,r.edge,r.dir,r.pin),r}),this.trailGroup=new ae,this.group.add(this.trailGroup),this.sibs=new Map,this.timer=0,this.trailTimer=999,this.look=null,this.trailOn&&this.loadTrail()}siblings(t){let e=this.sibs.get(t.entity);if(e)return e;let n=this.view.hass,s=this.states,r=n?.entities?.[t.entity]?.device_id,o=t.d.motion&&s[t.d.motion]?[{entity:t.d.motion,kind:"motion",icon:"\u3030"}]:[],a=r?Object.keys(n.entities).filter(l=>l!==t.entity&&n.entities[l].device_id===r&&s[l]):[];for(let l of a){if(!l.startsWith("binary_sensor.")&&!l.startsWith("sensor."))continue;let c=s[l],h=pd(l,c.attributes?.friendly_name,c.attributes?.device_class);h&&!o.some(u=>u.entity===l)&&o.push({entity:l,...h,count:l.startsWith("sensor.")})}return this.sibs.set(t.entity,e=o),e}update(t){if(!this.cams)return;let e=this.view.holo!==!1;this.cams.forEach(n=>{let r=this.siblings(n).filter(l=>l.count?parseFloat(t[l.entity]?.state)>0:t[l.entity]?.state==="on"),o=r.length>0;if(n.motion=o,n.mat.color.setHex(o?16726843:1697535),n.edge.material.color.setHex(o?16726843:1697535),n.mat.opacity=o?.3:.16,n.recording=t[n.entity]?.state==="recording",this.cfg().pins!==!1&&e&&o){let l=r.map(c=>{let h=t[c.entity];return`${c.icon} <b>${gr(Date.parse(h.last_changed||h.last_updated||Date.now()))}</b>`}).join(" \xB7 ");l!==n.pinSig&&(n.pinSig=l,n.pin.element.firstChild.innerHTML=l),n.pin.visible=!0}else n.pin.visible=!1}),this.wall&&this.refreshWall(!1),this.card&&this.refreshCard(!1)}picture(t,e=!0){let n=this.states[t.entity]?.attributes?.entity_picture;return n?e?`${n}${n.includes("?")?"&":"?"}_=${Date.now()}`:n:null}streamUrl(t){let e=gd(this.states[t.entity]?.attributes?.entity_picture);return e?`/api/camera_proxy_stream/${t.entity}?token=${e}`:null}onTap(t){let e=this.cams?.find(n=>n.entity===t?.entity);return e?(this.openCard(e),!0):!1}openCard(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(480px,94%)",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e;let n=e.remove.bind(e);e.remove=()=>{n(),this.card?.box===e&&(this.card=null)};let s=this.states[t.entity]?.attributes?.friendly_name||t.entity;e.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>\u{1F3A5} ${Yt(s)}</b><button data-a="x">\u2715</button></div>
      <img data-img style="width:100%;border-radius:8px;margin:8px 0;background:#000;min-height:120px;object-fit:cover" alt="">
      <div style="display:flex;gap:6px;flex-wrap:wrap"><button data-a="look" class="on">\u{1F441} Durch die Kamera sehen</button><button data-a="live">\u25B6 Live</button><button data-a="info">\u2139</button></div>`,e.onclick=r=>{let o=r.target.closest("[data-a]")?.dataset.a;o==="x"?this.view.closeOverlay():o==="look"?(this.view.closeOverlay(),this.lookThrough(t)):o==="live"?this.openLive(t):o==="info"&&(this.view.closeOverlay(),this.view.moreInfo(t.entity))},this.card={cam:t,box:e,timer:0},this.refreshCard(!0)}refreshCard(t){let e=this.card;if(!e)return;let n=e.box.querySelector("[data-img]"),s=this.picture(e.cam,!1);n&&s&&(t||n.dataset.src!==s)&&(n.dataset.src=s,n.src=this.picture(e.cam))}openLive(t){this.view.closeOverlay();let e=this.streamUrl(t),n=document.createElement("div");n.className="overlay",n.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(860px,94%)",this.view.shadowRoot.querySelector(".wrap").append(n),this.view._overlay=n,n.innerHTML=`<div style="display:flex;justify-content:space-between"><b>\u{1F3A5} ${Yt(this.states[t.entity]?.attributes?.friendly_name||t.entity)} \xB7 Live</b><button data-a="x">\u2715</button></div>
      <img style="width:100%;border-radius:8px;margin-top:8px;background:#000" alt="">
      <div style="opacity:.6;font-size:11px;margin-top:4px">${e?"Live-Strom (MJPEG)":"Dieses Kamera-Ger\xE4t liefert keinen Live-Strom \u2013 das Bild wird jede Sekunde neu geladen."}</div>`;let s=n.querySelector("img"),r=0,o=()=>{s.src=this.picture(t)};e?(s.onerror=()=>{s.onerror=null,r=setInterval(o,1e3),o()},s.src=e):(o(),r=setInterval(o,1e3));let a=n.remove.bind(n);n.remove=()=>{clearInterval(r),s.src="",a()},n.onclick=l=>{l.target.closest("[data-a=x]")&&this.view.closeOverlay()}}lookThrough(t){let e=this.view;if(this.look)return;let n=t.a,s=ks(t.rot),r=Math.cos(Ee(t.tilt)),o={pos:Un(n.x,n.y,n.z),target:Un(n.x+s[0]*r,n.y-Math.sin(Ee(t.tilt)),n.z+s[1]*r),hfov:t.fov};this.look={cam:t,t:0,from:{pos:e.camera.position.clone(),target:e.controls.target.clone(),fov:e.camera.fov},to:o,done:!1},e.controls.enabled=!1;let a=e.shadowRoot.querySelector("#view"),l=document.createElement("img");l.style.cssText="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;pointer-events:none;z-index:2";let c=document.createElement("div");c.className="overlay",c.style.cssText="left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:8px;align-items:center;z-index:7";let h=!!e.hass?.user?.is_admin&&e.cfg.mode!=="card";c.innerHTML=`<span>Bild</span><input type="range" min="0" max="100" value="60" data-a="op" style="width:110px">
      ${h?`<span>Drehung</span><input type="range" min="0" max="360" value="${t.rot}" data-a="rot" style="width:90px"><span>Neigung</span><input type="range" min="0" max="80" value="${t.tilt}" data-a="tilt" style="width:80px">`:""}
      <button data-a="back" class="on">\u2190 Zur\xFCck zur Ansicht</button>`,a.append(l,c);let u=()=>{let f=ks(t.rot),p=Math.cos(Ee(t.tilt));this.look.to.target.set(n.x+f[0]*p,n.y-Math.sin(Ee(t.tilt)),n.z+f[1]*p),e.controls.target.copy(this.look.to.target),e.camera.lookAt(this.look.to.target)};c.oninput=f=>{let p=f.target.dataset.a;p==="op"&&(l.style.opacity=f.target.value/100),(p==="rot"||p==="tilt")&&(t[p]=+f.target.value,t.d[p]=t[p],this.look.moved=!0,u())},c.onclick=f=>{f.target.closest("[data-a=back]")&&this.endLook()},this.look.ui={img:l,bar:c};let d=()=>{let f=this.picture(t);f&&(l.src=f)};d(),this.look.timer=setInterval(d,2e3)}endLook(){let t=this.look,e=this.view;t&&(clearInterval(t.timer),t.ui.img.remove(),t.ui.bar.remove(),e.camera.position.copy(t.from.pos),e.controls.target.copy(t.from.target),e.camera.fov=t.from.fov,e.camera.updateProjectionMatrix(),e.controls.enabled=!0,this.look=null,t.moved&&(e.msg("Drehung/Neigung ge\xE4ndert \u2013 mit \u{1F4BE} speichern"),e.rebuild3D()))}toggleWall(){if(this.wall){this.wall.remove(),this.wall=null,this.view.renderBar();return}let t=document.createElement("div");t.style.cssText="position:absolute;left:8px;top:48px;z-index:4;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;width:min(520px,60%);max-height:70%;overflow:auto",this.cams.forEach(e=>{let n=document.createElement("div");n.style.cssText="position:relative;border:2px solid #2a3b6a;border-radius:8px;overflow:hidden;background:#000;cursor:pointer;aspect-ratio:16/9",n.innerHTML=`<img style="width:100%;height:100%;object-fit:cover;display:block" alt=""><span style="position:absolute;left:4px;bottom:3px;font-size:11px;background:rgba(0,0,0,.6);padding:1px 5px;border-radius:4px">${Yt(this.states[e.entity]?.attributes?.friendly_name||e.entity)}</span><i data-rec style="position:absolute;right:6px;top:4px;color:#ff3b3b;display:none">\u25CF</i>`,n.onclick=()=>this.openLive(e),e.tile=n,t.append(n)}),this.view.shadowRoot.querySelector("#view").append(t),this.wall=t,this.view.renderBar(),this.refreshWall(!0)}refreshWall(t){this.cams.forEach(e=>{let n=e.tile;if(n&&(n.style.borderColor=e.motion?"#ff3b3b":"#2a3b6a",n.querySelector("[data-rec]").style.display=e.recording?"":"none",t)){let s=this.picture(e);s&&(n.querySelector("img").src=s)}})}toggleTrail(){this.trailOn=!this.trailOn,this.trailOn?this.loadTrail():this.clearTrail(),this.view.renderBar()}clearTrail(){this.trailGroup?.clear(),this.trailLabels?.forEach(t=>t.element.remove()),this.trailLabels=[]}positionOf(t){let e=this.anchors,n=e.devices.find(c=>c.entity===t);if(n)return Un(n.x,n.y,n.z);let s=this.cams.find(c=>this.siblings(c).some(h=>h.entity===t));if(s){let c=ks(s.rot);return Un(s.a.x+c[0]*s.reach*.5,s.fe+.5,s.a.z+c[1]*s.reach*.5)}let r=this.view.hass,o=r?.entities?.[t],a=o?.area_id||r?.devices?.[o?.device_id]?.area_id,l=a?e.rooms.find(c=>c.area===a):null;return l?Un(l.x,l.elev+1.1,l.z):null}async loadTrail(){if(!this.trailOn||!this.view.hass?.callWS)return;let t=this.states,e=Object.keys(t).filter(a=>a.startsWith("binary_sensor.")&&c_.includes(t[a].attributes?.device_class)).filter(a=>this.positionOf(a)),n=this.cams.flatMap(a=>this.siblings(a).filter(l=>!l.count).map(l=>l.entity)),s=[...new Set([...e,...n])].slice(0,60);if(!s.length){this.view.msg("Keine Bewegungsmelder im Plan oder an Kameras gefunden");return}let r=Date.now(),o=(this.cfg().trail_minutes||30)*6e4;try{let a=await ta(this.view.hass,s,new Date(r-o),new Date(r));if(!this.trailOn)return;let l=s.flatMap(c=>md(a[c],r,o).map(h=>({...h,entity:c,pos:this.positionOf(c)}))).filter(c=>c.pos).sort((c,h)=>c.t-h.t);this.drawTrail(l)}catch(a){this.view.msg("Verlauf nicht verf\xFCgbar: "+(a.message||a.code))}}drawTrail(t){if(this.clearTrail(),!t.length)return;let e=ri();t.forEach(s=>{let r=new en(new qe({map:e,color:1697535,transparent:!0,opacity:xn(1-s.age*.85,.12,1),depthTest:!1,blending:an}));r.position.copy(s.pos),r.scale.setScalar(.9*(1-.55*s.age)+.25),r.renderOrder=8,this.trailGroup.add(r)});let n=new Map;if(t.forEach(s=>{let r=`${s.pos.x.toFixed(2)}|${s.pos.z.toFixed(2)}`;n.has(r)||n.set(r,{pos:s.pos,times:[]}),n.get(r).times.push(s.t)}),n.forEach(s=>{let r=In(`<span>${s.times.slice(-4).reverse().map(gr).join(" \xB7 ")}${s.times.length>4?" \u2026":""}</span>`,{cls:"pw"});r.position.copy(s.pos).add(Un(0,.3,0)),this.trailGroup.add(r),this.trailLabels.push(r)}),t.length>1){let s=[],r=[];t.forEach(l=>{s.push(l.pos.x,l.pos.y,l.pos.z);let c=xn(1-l.age,.1,1);r.push(.1*c,.9*c,1*c)});let o=new jt;o.setAttribute("position",new ne(s,3)),o.setAttribute("color",new ne(r,3));let a=new cn(o,new le({vertexColors:!0,transparent:!0,depthTest:!1}));a.renderOrder=8,this.trailGroup.add(a)}}tick(t){let e=this.view;if(this.look){let n=this.look;if(!n.done){n.t=Math.min(1,n.t+t/.9);let s=n.t*n.t*(3-2*n.t);e.camera.position.lerpVectors(n.from.pos,n.to.pos,s),e.controls.target.lerpVectors(n.from.target,n.to.target,s);let r=e.viewEl.clientWidth||1,o=e.viewEl.clientHeight||1;e.camera.fov=n.from.fov+(fd(n.to.hfov,r/o)-n.from.fov)*s,e.camera.updateProjectionMatrix(),n.t>=1&&(n.done=!0)}}this.timer+=t,this.timer>5&&(this.timer=0,this.wall&&this.refreshWall(!0),this.card&&this.refreshCard(!0)),this.trailTimer+=t,this.trailOn&&this.trailTimer>60&&(this.trailTimer=0,this.loadTrail())}reset(){this.endLook(),this.clearTrail(),this.wall&&(this.wall.remove(),this.wall=null)}dispose(){this.endLook(),this.wall?.remove(),this.wall=null,this.cams=null}openSettings(){let t=this.settings.cameras={pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}};Vn(this.view,{title:"\u{1F3A5} Kameras",obj:t,note:"Kameras sind Ger\xE4te vom Typ camera. Drehung, Neigung, \xD6ffnungswinkel und Reichweite stellst du am Ger\xE4t ein (Ger\xE4t anklicken). Die Melder werden am selben HA-Ger\xE4t gefunden oder dort eingetragen.",fields:[{k:"fov",l:"Sichtfeld auf dem Boden zeigen",t:"checkbox"},{k:"pins",l:"Erkennungs-Pins (Person, Fahrzeug, Tier \u2026)",t:"checkbox"},{k:"trail_minutes",l:"Bewegungsspur: Minuten zur\xFCck",t:"number",s:5}]})}};var xr={paper:{label:"Papier",re:/papier|pappe|karton|blau/i},yellow:{label:"Gelber Sack",re:/gelb|wertstoff|leichtverp|verpack/i},rest:{label:"Restm\xFCll",re:/rest|schwarz|hausm|grau/i},bio:{label:"Bio",re:/bio|braun|küche|kueche|organ/i}};function Hc(i){let t=String(i??"");return Object.keys(xr).filter(e=>xr[e].re.test(t))}function _d(i){return xr[i.waste]?i.waste:Hc(`${i.name||""}`)[0]||null}var xd=i=>String(i).padStart(2,"0");function vd(i,t=0){let e=new Date(i);return e.setDate(e.getDate()+t),`${e.getFullYear()}-${xd(e.getMonth()+1)}-${xd(e.getDate())}`}var h_=/^\d{4}-\d{2}-\d{2}$/,yd=i=>Object.keys(i||{}).filter(t=>h_.test(t));function bd(i,t){let e=i?.[t];return e==null?[]:Hc(Array.isArray(e)?e.join(", "):e)}function Md(i,t){let e=new Set;for(let n of i||[]){let s=(n.start?.date||n.start?.dateTime||"").slice(0,10),r=(n.end?.date||n.end?.dateTime||"").slice(0,10);if(!s)continue;let o=!!n.start?.date;(!r||r<s)&&(r=s),t>=s&&(o?t<r||s===r:t<=r)&&Hc(n.summary).forEach(a=>e.add(a))}return[...e]}function wd(i,t){if(t&&i[t])return{entity:t,type:t.startsWith("calendar.")?"calendar":"sensor"};let e=Object.keys(i).filter(r=>r.startsWith("sensor.")&&yd(i[r].attributes).length>=2),n=r=>(/leerung|abfall|müll|muell|waste/i.test(`${r} ${i[r].attributes?.friendly_name||""}`)?1:0)*100+yd(i[r].attributes).length;if(e.sort((r,o)=>n(o)-n(r)),e.length)return{entity:e[0],type:"sensor"};let s=Object.keys(i).filter(r=>r.startsWith("calendar.")&&i[r].state!=="unavailable"&&/müll|muell|abfall|waste|leerung/i.test(`${r} ${i[r].attributes?.friendly_name||""}`));return s.length?{entity:s[0],type:"calendar"}:null}var sa=class extends Re{get id(){return"waste"}get label(){return"\u{1F5D1} M\xFCll"}get title(){return"M\xFClltonnen leuchten am Tag vor der Abholung"}get settingsLabel(){return"\u{1F5D1} M\xFCllabfuhr"}available(){return!!this.bins?.length}cfg(){return{days:1,...this.settings.waste||{}}}build(t){let e=ri();this.bins=t.furniture.filter(n=>n.f.type==="bin").map(n=>{let s=_d(n.f),r=new Ot(n.f.color||"#9aa5c0"),o={};r.getHSL(o),o.l<.3&&r.setHSL(o.h,Math.min(o.s,.2),.62);let a=new en(new qe({map:e,color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:an}));return a.position.set(n.x,n.top-n.h*.45,n.z),a.scale.setScalar(2.2),a.renderOrder=7,a.visible=!1,this.group.add(a),{a:n,kind:s,glow:a,col:r,base:n.mats.map(l=>({m:l,e:l.emissive.clone(),i:l.emissiveIntensity})),lit:!1}}),this.cal=null,this.calAt=0,this.kinds=new Set}collect(t){let e=this.cfg(),n=vd(Date.now(),e.days),s=wd(t,e.entity);if(this.src=s,!s)return new Set;if(s.type==="sensor")return new Set(bd(t[s.entity]?.attributes,n));let r=Date.now();if(r-this.calAt>30*6e4&&this.view.hass?.callApi){this.calAt=r;let o=new Date;o.setDate(o.getDate()+e.days),o.setHours(0,0,0,0);let a=new Date(o);a.setDate(a.getDate()+1),this.view.hass.callApi("GET",`calendars/${s.entity}?start=${encodeURIComponent(o.toISOString())}&end=${encodeURIComponent(a.toISOString())}`).then(l=>{this.cal=Md(l,n),this.update(this.states)}).catch(()=>{this.cal=[]})}return new Set(this.cal||[])}update(t){if(!this.bins)return;this.kinds=this.collect(t);let e=[];this.bins.forEach(s=>{s.lit=!!s.kind&&this.kinds.has(s.kind),s.glow.visible=s.lit,s.base.forEach(r=>{s.lit?(r.m.emissive.copy(s.col),r.m.emissiveIntensity=1):(r.m.emissive.copy(r.e),r.m.emissiveIntensity=r.i)}),s.lit&&e.push(xr[s.kind].label)});let n=this.cfg();this.view.setChip("waste",e.length?`\u{1F5D1} ${n.days===1?"Morgen":`In ${n.days} Tagen`}: ${[...new Set(e)].join(", ")}`:"")}tick(t,e){this.bins?.forEach(n=>{if(!n.lit)return;let s=.75+.25*Math.sin(e*3);n.glow.material.opacity=s,n.glow.scale.setScalar(2+.4*Math.sin(e*3)),n.base.forEach(r=>r.m.emissiveIntensity=.7+.5*s)})}reset(){this.bins?.forEach(t=>{t.lit=!1,t.glow.visible=!1,t.base.forEach(e=>{e.m.emissive.copy(e.e),e.m.emissiveIntensity=e.i})}),this.view.setChip("waste","")}dispose(){this.view.setChip("waste",""),this.bins=null}openSettings(){let t=this.settings.waste={days:1,...this.settings.waste||{}};Vn(this.view,{title:"\u{1F5D1} M\xFCllabfuhr",obj:t,note:`Quelle der Abholtermine: ein Sensor, dessen Attribute Datum \u2192 M\xFCllart enthalten (Waste Collection Schedule), oder ein M\xFCll-Kalender. Leer = automatisch${this.src?` (gefunden: ${this.src.entity})`:""}. Die Tonnen sind M\xF6bel vom Typ <b>bin</b>; Blau = Papier, Gelb = Gelber Sack, Schwarz = Restm\xFCll, Braun = Bio, erkannt am Namen.`,fields:[{k:"entity",l:"Sensor oder Kalender (leer = automatisch)",t:"entity",p:"sensor.naechste_leerung"},{k:"days",l:"Tage vor der Abholung leuchten",t:"number",s:1}]})}};var ra=class extends Re{get id(){return"parked"}available(){return!1}build(t){this.cars=t.furniture.filter(e=>e.f.presence).map(e=>({a:e,entity:e.f.presence,shown:!0}))}update(t){this.cars?.forEach(e=>{let n=t[e.entity]?.state;e.shown=n==null||n!=="off"&&n!=="unavailable",e.a.group.visible=e.shown})}onLongPress(t){let e=this.cars?.find(s=>s.a.f.id===t?.furnId);if(!e||!e.shown||!this.view.hass)return!1;let[n]=e.entity.split(".");return this.view.hass.callService(n,"turn_off",{entity_id:e.entity}),this.view.msg(`${e.a.f.name||"Auto"}: als \u201Eweg\u201C markiert`),!0}reset(){this.cars?.forEach(t=>{t.a.group.visible=!0})}dispose(){this.cars=null}};var u_=["auf","offen","open","opened","opening","on","ge\xF6ffnet"],d_=["zu","geschlossen","closed","closing","off","closed_"];function Ed(i,t={}){let e=String(i??"").trim().toLowerCase();return!e||e==="unknown"||e==="unavailable"?null:(t.openStates||u_).map(n=>n.toLowerCase()).includes(e)?"open":(t.closedStates||d_).map(n=>n.toLowerCase()).includes(e)?"closed":null}function Sd(i,t){let e=(t-i)%(2*Math.PI);return e>Math.PI&&(e-=2*Math.PI),e<=-Math.PI&&(e+=2*Math.PI),e}function Td(i,t,e=[1,0]){let n=Math.atan2(t[1]-i[1],t[0]-i[0]),s=n+Math.PI,r=Math.atan2(e[1],e[0]);return{A:{closed:n,open:n+Sd(n,r)},B:{closed:s,open:s+Sd(s,r)}}}var oa=class extends Re{get id(){return"gates"}get label(){return"\u{1F6A7} Tor"}get title(){return"Hoftor: Auf / Zu nach dem Zustand aus Frigate"}available(){return!!this.gates?.length}build(){let t=this.view.theme==="day",e=t?5924216:10134976,n=new be({color:e,emissive:e,emissiveIntensity:t?0:.2,transparent:!0,opacity:t?.9:.4,side:de,depthWrite:!1}),s=new le({color:e,transparent:!0,opacity:.95}),r=new be({color:e,emissive:e,emissiveIntensity:t?0:.3});this.group.position.y=this.plan.site?.groundY??0,this.gates=(this.plan.site?.gates||[]).filter(o=>o.a&&o.b).map(o=>{let a=o.h||2,l=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]),c=o.single?l:l/2,h=Td(o.a,o.b,o.inward||[1,0]),u=(p,x,g)=>{let m=new ae;m.position.set(p[0],0,p[1]);let M=new Gt(new we(c-.12,a-.2,.05),n);if(M.position.set(c/2+.03,.1+(a-.2)/2,0),M.add(new he(new Se(M.geometry),s)),g)for(let v=.2;v<c-.2;v+=.22){let _=new Gt(new we(.025,.55,.025),r);_.position.set(v-(c-.12)/2,(a-.2)/2-.3,0),M.add(_)}return M.userData={entity:o.entity,gate:!0},m.add(M),this.pickList.push(M),this.group.add(m),m};this.pickList=this.pickList||[];let d=u(o.a,h.A,!!o.barsA),f=o.single?null:u(o.b,h.B,!0);for(let p of[o.a,o.b]){let x=new Gt(new we(.2,a+.1,.2),r);x.position.set(p[0],(a+.1)/2,p[1]),this.group.add(x)}return{cfg:o,A:d,B:f,ang:h,cur:0,target:0,known:!1,last:null}}),this.view.pickables.push(...this.pickList||[])}update(t){this.gates?.forEach(n=>{let s=n.cfg.entity?t[n.cfg.entity]:null,r=Ed(s?.state,n.cfg);if(r){let o=r==="open"?1:0;n.known&&r!==n.last&&this.view.msg(`${n.cfg.name||"Tor"} ist jetzt ${r==="open"?"auf":"zu"}`),n.known||(n.cur=o),n.target=o,n.last=r,n.known=!0,n.since=s.last_changed?gr(Date.parse(s.last_changed)):null}});let e=this.gates?.filter(n=>n.last==="open")||[];this.view.setChip("gates",e.length?`\u{1F6A7} ${e.map(n=>n.cfg.name||"Tor").join(", ")}: auf${e[0].since?` seit ${e[0].since}`:""}`:""),this.pose()}pose(){this.gates?.forEach(t=>{let e=(n,s)=>{n&&(n.rotation.y=-(s.closed+(s.open-s.closed)*t.cur))};e(t.A,t.ang.A),e(t.B,t.ang.B)})}tick(t){let e=!1;this.gates?.forEach(n=>{Math.abs(n.target-n.cur)>.002&&(n.cur+=Math.sign(n.target-n.cur)*Math.min(Math.abs(n.target-n.cur),t*.9),e=!0)}),e&&this.pose()}reset(){this.view.setChip("gates","")}dispose(){this.view.setChip("gates",""),this.gates=null,this.pickList=null}};function Ad(i){return[new qo(i),new ea(i),new Qo(i),new Os(i),new ia(i),new sa(i),new ra(i),new oa(i),new Zo(i)]}function f_(i,t=512){return new Promise((e,n)=>{let s=new Image,r=URL.createObjectURL(i);s.onload=()=>{let o=Math.min(1,t/Math.max(s.naturalWidth,s.naturalHeight)),a=document.createElement("canvas");a.width=Math.max(1,Math.round(s.naturalWidth*o)),a.height=Math.max(1,Math.round(s.naturalHeight*o)),a.getContext("2d").drawImage(s,0,0,a.width,a.height),URL.revokeObjectURL(r),e(i.type==="image/png"||i.type==="image/svg+xml"?a.toDataURL("image/png"):a.toDataURL("image/jpeg",.85))},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Bild nicht lesbar"))},s.src=r})}function Rd(i,t){i.closeOverlay();let e=t.screen||={bg:"dark",rules:[]};e.rules||=[];let n=i.shadowRoot.querySelector(".wrap"),s=document.createElement("div");s.className="overlay",s.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(680px,94%);max-height:84%;overflow:auto",i._overlay=s,n.append(s);let r=()=>{i.rebuild3D(),i.draw2D()},o=!1,a=()=>{o||(i.pushUndo(),o=!0)},l=()=>{let c=i.getStates()||{},h=Object.keys(c).sort(),u=e.entity||t.entity||"",d=Yo(e.rules,c,u);s.innerHTML=`
      <h4 style="margin:0 0 8px">\u{1F5A5} Bildschirm ${Yt(t.name||t.type)}</h4>
      <datalist id="scr-ents">${h.map(f=>`<option value="${Yt(f)}">`).join("")}</datalist>
      <div class="row"><div><label>Bildschirm-Entit\xE4t (z. B. media_player)</label><input id="scr-entity" list="scr-ents" value="${Yt(e.entity||"")}" placeholder="${Yt(t.entity||"media_player.tv")}"></div>
      <div><label>Hintergrund</label><select id="scr-bg"><option value="dark" ${e.bg!=="white"?"selected":""}>dunkel</option><option value="white" ${e.bg==="white"?"selected":""}>wei\xDF</option></select></div></div>
      <div style="margin:10px 0 4px;opacity:.8">Bild-Regeln \u2013 die erste passende gewinnt. Ohne Regel zeigt der Bildschirm Cover und Farbe der laufenden App.</div>
      <div id="scr-rules">${e.rules.map((f,p)=>`
        <div class="rule" data-i="${p}" style="display:grid;grid-template-columns:1.2fr 1fr 1fr 1.4fr auto auto auto;gap:4px;margin:4px 0;align-items:center">
          <input data-f="entity" list="scr-ents" placeholder="Entit\xE4t (leer = Bildschirm)" value="${Yt(f.entity||"")}">
          <input data-f="attr" placeholder="Attribut (leer = Zustand)" value="${Yt(f.attr||"")}">
          <input data-f="match" placeholder="Wert (enth\xE4lt, * = alles)" value="${Yt(f.match||"")}">
          <input data-f="image" placeholder="Bild-URL oder camera.xyz" value="${Yt(String(f.image||"").startsWith("data:")?"":f.image||"")}">
          <button data-act="upload" title="Bild hochladen">${String(f.image||"").startsWith("data:")?"\u{1F5BC} \u2713":"\u2B06"}</button>
          <button data-act="del" title="Regel l\xF6schen">\u{1F5D1}</button>
          <span title="trifft gerade zu" style="color:${d===f?"#19e6ff":"#35405f"}">\u25CF</span>
        </div>`).join("")}</div>
      <div style="display:flex;gap:6px;margin-top:8px"><button id="scr-add">+ Regel</button><span style="flex:1"></span><button id="scr-close" class="on">Fertig</button></div>`,s.querySelector("#scr-entity").onchange=f=>{a(),e.entity=f.target.value||null,r(),l()},s.querySelector("#scr-bg").onchange=f=>{a(),e.bg=f.target.value,r()},s.querySelector("#scr-add").onclick=()=>{a(),e.rules.push({match:"",image:""}),l()},s.querySelector("#scr-close").onclick=()=>i.closeOverlay(),s.querySelectorAll(".rule").forEach(f=>{let p=e.rules[+f.dataset.i];f.querySelectorAll("input[data-f]").forEach(x=>{x.onchange=()=>{a();let g=x.dataset.f,m=x.value.trim();g==="image"?m?p.image=m:String(p.image||"").startsWith("data:")||(p.image=""):p[g]=m,r(),l()}}),f.querySelector('[data-act="del"]').onclick=()=>{a(),e.rules.splice(+f.dataset.i,1),r(),l()},f.querySelector('[data-act="upload"]').onclick=()=>{let x=document.createElement("input");x.type="file",x.accept="image/*",x.onchange=async()=>{try{a(),p.image=await f_(x.files[0]),r(),l()}catch(g){i.msg("Bild nicht lesbar: "+g.message)}},x.click()}})};l()}function yr(i,t={},e=0){let n=Qu(i),s=td(e),r=s[t?.high||"south"]||s.south,o=[-Math.sin(n.ang),Math.cos(n.ang)],a=o[0]*r[0]+o[1]*r[1]>=0?o:[-o[0],-o[1]],l=Math.atan2(-a[0],-a[1]),c=Math.cos(l)<0;return{cx:n.cx,cz:n.cz,L:n.len,W:n.wid,theta:l,dHigh:a,flip:c,tToU:h=>c?n.len/2-h:h-n.len/2}}function oi(i,t,e){return[i.cx+t*Math.cos(i.theta)+e*Math.sin(i.theta),i.cz-t*Math.sin(i.theta)+e*Math.cos(i.theta)]}function Cd(i,t){if(!t)return null;let e=Math.max(0,Math.round(Number(t.carportStalls)||0)),n=Number(t.stallWidth)||2.9,s=t.bike&&t.bike!=="none"?t.bike:null,r=t.garage||(e||s?"west":"none");if(!e&&r==="none"&&!s)return null;let o=Math.min(i,e*n),a=s?Math.min(Math.max(0,i-o),Number(t.bikeWidth)||3):0,l=Math.max(0,i-o-a),c=r==="none"?0:t.garageLen!=null&&t.garageLen!==""?Math.min(Number(t.garageLen),l):l,h=Math.max(0,l-c),u={stalls:e,stallWidth:e?o/e:n},d={door:Number(t.bikeDoor)||1.2},f=[],p=r!=="east",x=s?s==="west":!p;s&&x&&f.push(["bike",a,d]),p?(f.push(["garage",c]),h>.05&&f.push(["open",h]),f.push(["carport",o,u])):(f.push(["carport",o,u]),h>.05&&f.push(["open",h]),f.push(["garage",c])),s&&!x&&f.push(["bike",a,d]);let g=[],m=0;for(let[M,v,_]of f)v>.05&&g.push({type:M,t0:m,t1:m+v,..._||{}}),m+=v;return g}function Pd({L:i,W:t,pitchDeg:e,orientation:n,portrait:s,fill:r=!0,rows:o,cols:a,margin:l=.25,gap:c=.02,align:h="center",uCenter:u=0}){let d=t/Math.cos(e*Math.PI/180),f=m=>{let M=m?1.134:1.722,v=m?1.722:1.134,_=r?Math.max(0,Math.floor((i-2*l+c)/(M+c))):Math.max(0,Math.round(a??1)),D=r?Math.max(0,Math.floor((d-2*l+c)/(v+c))):Math.max(0,Math.round(o??1)),C=[],N=h==="low"?l+v/2:h==="high"?d-l-v/2-(D-1)*(v+c):d/2-(D-1)/2*(v+c);for(let k=0;k<_;k++)for(let T=0;T<D;T++)C.push({u:u+(k-(_-1)/2)*(M+c),s:N+T*(v+c),mw:M,mh:v});return{cols:_,rows:D,modules:C,slope:d,portrait:m}},p=n&&n!=="auto"?n:s!=null&&n!=="auto"?s?"portrait":"landscape":"auto";if(p==="portrait")return f(!0);if(p==="landscape")return f(!1);let x=f(!1),g=f(!0);return g.modules.length>x.modules.length?g:x}var Fs={garage:"Garage",carport:"Carport",bike:"Fahrradgarage",open:"Unterstand"},Id={low:"L\xE4ngsseite (niedrig)",high:"L\xE4ngsseite (hoch)",west:"Westende",east:"Ostende"};function aa({side:i="low",pt:t,f:e,W:n,hLow:s,bike:r=!1,width:o}){let a=Math.min(r?2:2.2,s-.2),l=Number(o)||(r?1.2:2.5),c=.03;if(i==="west"||i==="east"){let d=(i==="west"?-1:1)*(e.flip?-1:1);return{side:i,sx:.05,sy:a,sz:Math.min(l,n-.3),x:e.tToU(i==="west"?t.t0:t.t1)+d*c,y:a/2,z:0}}let h=Math.abs(e.tToU(t.t1)-e.tToU(t.t0)),u=i==="high";return{side:u?"high":"low",sx:Math.min(l,h-.2),sy:a,sz:.05,x:(e.tToU(t.t0)+e.tToU(t.t1))/2,y:a/2,z:u?-n/2-c:n/2+c}}function la(i,t="east"){let e=Math.max(1,Math.round(i.stalls||1)),n=(i.t1-i.t0)/e;return Array.from({length:e},(s,r)=>({n:r+1,t:t==="west"?i.t0+(r+.5)*n:i.t1-(r+.5)*n}))}function p_(i,t){let e=h=>h.type==="carport"?Math.max(0,Math.round(Number(h.stalls)||0))*(Number(h.stallWidth)||2.9):h.len!=null&&h.len!==""&&Number(h.len)>0?Number(h.len):null,n=t.map(e),s=n.reduce((h,u)=>h+(u??0),0),r=n.filter(h=>h==null).length,o=r?Math.max(0,i-s)/r:0,a=!r&&s>i?i/s:1,l=[],c=0;return t.forEach((h,u)=>{let d=(n[u]??o)*a;if(d>.05){let f=h.type==="carport"?Math.max(1,Math.round(Number(h.stalls)||1)):void 0;l.push({...h,type:h.type||"garage",t0:c,t1:c+d,...f?{stalls:f,stallWidth:d/f}:{},index:u})}c+=d}),l}function ca(i,t){return t?.parts?.length?p_(i,t.parts):Cd(i,t?.layout)}function Ld(i,t){return(Cd(i,t)||[]).map(e=>e.type==="carport"?{type:"carport",stalls:e.stalls,stallWidth:+e.stallWidth.toFixed(2)}:e.type==="garage"||e.type==="open"?{type:e.type,len:null}:{type:e.type,len:+(e.t1-e.t0).toFixed(2),door:e.door})}var _r={wallExterior:.24,wallInterior:.12,slab:.18};function ha(i){return{id:yn(),name:`Etage ${i}`,height:2.6,rooms:[],walls:[],openings:[],devices:[],furniture:[]}}function Vc(i,t,e){let n=i.floors.map((o,a)=>({e:_n(i,a),h:o.height||2.6})).filter(o=>o.e>-.01).sort((o,a)=>o.e-a.e);if(e=Math.max(1,Math.round(e)||1),t.levels=e,!n.length)return t.storeys=Array.from({length:e},(o,a)=>+(a*2.8).toFixed(2)),t.height=+(e*2.8).toFixed(2),t;let s=n[n.length-1];t.storeys=Array.from({length:e},(o,a)=>+(n[a]?.e??s.e+(a-n.length+1)*s.h).toFixed(2));let r=n[e-1]||{e:s.e+(e-n.length)*(s.h+.18),h:s.h};return t.height=+(r.e+r.h).toFixed(2),t}function Nd(i,t=1){return{id:yn(),name:`Geb\xE4ude ${t}`,points:i,height:3,visible:!0,roof:{type:"gable",pitch:25,overhang:.3}}}function Gc(){return{version:2,settings:{},floors:[ha(1)]}}function $i(i){return i.version=2,i.settings={..._r,autoDevices:!0,...i.settings||{}},i.floors=i.floors||[],i.site&&(i.site.buildings=i.site.buildings||[],i.site.buildings.forEach(t=>{t.height=t.height||3,t.roof={type:"flat",pitch:25,overhang:.3,...t.roof||{}},t.visible==null&&(t.visible=!0)})),i.floors.forEach(t=>{t.height=t.height||2.6;for(let e of["rooms","walls","openings","devices","furniture"])t[e]=t[e]||[];t.openings.forEach(e=>{let n=e.type==="door";e.w=e.w||(n?.9:1.2),e.h=e.h||(n?2.1:1.1),e.sill==null&&(e.sill=n?0:.9)})}),(i.site?.buildings||[]).forEach(t=>{t.levels>1&&!t.storeys&&Vc(i,t,t.levels)}),i}function _n(i,t){let e=i.floors[t];if(!e)return 0;if(e.elevation!=null)return e.elevation;let n=0;for(let s=0;s<t;s++)n+=(i.floors[s].height||2.6)+(i.settings?.slab??_r.slab);return n}var Dd=new WeakMap;function vr(i){let t=Dd.get(i);if(t)return t;let e=i.axis!=="z",n=!!i.flip,s=n?i.eaveB:i.eaveA,r=n?i.eaveA:i.eaveB,o=n?i.pitchB:i.pitchA,a=n?i.pitchA:i.pitchB,l=e?i.z0:i.x0,c=e?i.z1:i.x1,h=e?i.x0:i.z0,u=e?i.x1:i.z1,d=Math.tan(Ee(o)),f=Math.tan(Ee(a)),p=(r-s+d*l+f*c)/(d+f),x=s+d*(p-l);return t={horiz:e,c0:l,c1:c,s0:h,s1:u,eaveA:s,eaveB:r,pa:o,pb:a,ta:d,tb:f,cr:p,yr:x,base:i.base??Math.min(s,r),overhang:i.overhang??.5},Dd.set(i,t),t}function br(i){return i.settings?.roof?.sections||[]}function Od(i,t,e,n=.06){let s=1/0,r=!1;for(let o of br(i)){let a=vr(o),l=a.horiz?e:t,c=a.horiz?t:e;if(c<a.s0-n||c>a.s1+n||l<a.c0-n||l>a.c1+n)continue;let h=Math.min(a.eaveA+a.ta*(l-a.c0),a.eaveB+a.tb*(a.c1-l));(!r||h>s)&&(s=h),r=!0}return r?s:1/0}var Ud=.03,m_=i=>typeof i=="number"?i:1/0;function ua(i,t=_r){let e=[],n=l=>{for(let h of e)if(Math.hypot(h[0]-l[0],h[1]-l[1])<Ud)return h;let c=[l[0],l[1]];return c.i=e.length,e.push(c),c},s=[];i.rooms.forEach(l=>{let c=l.points.length;l.points.forEach((h,u)=>{s.push({a:n(h),b:n(l.points[(u+1)%c]),t:l.wallT?.[u]??null,h:m_(l.wallH?.[u]),room:l.id,free:!1})})}),i.walls.forEach(l=>s.push({a:n(l.a),b:n(l.b),t:l.t??null,h:l.h!=null?l.h:1/0,room:null,free:!0,id:l.id}));let r=new Map;s.forEach(l=>{if(l.a===l.b)return;let c=[{t:0,n:l.a},{t:1,n:l.b}];for(let h of e){if(h===l.a||h===l.b)continue;let u=Ns(h,l.a,l.b);u.d<Ud&&u.t>5e-4&&u.t<.9995&&c.push({t:u.t,n:h})}c.sort((h,u)=>h.t-u.t);for(let h=0;h<c.length-1;h++){let u=c[h].n,d=c[h+1].n;if(u===d)continue;let f=u.i<d.i?`${u.i}|${d.i}`:`${d.i}|${u.i}`,p=r.get(f);p||r.set(f,p={a:u,b:d,ts:[],hs:[],rooms:new Set,free:!1,ids:[]}),l.t!=null&&p.ts.push(l.t),p.hs.push(l.h),l.room&&p.rooms.add(l.room),l.free&&(p.free=!0,l.id&&p.ids.push(l.id))}});let o=[];r.forEach(l=>{let c=Math.max(...l.hs);if(c<=0)return;let h=l.ts.length?Math.max(...l.ts):l.free||l.rooms.size>=2?t.wallInterior:t.wallExterior;o.push({a:l.a,b:l.b,t:h,h:Number.isFinite(c)?c:null,extA:0,extB:0,rooms:[...l.rooms],free:l.free,ids:l.ids})});let a=new Map;return o.forEach(l=>{for(let[c,h]of[[l.a,l.b],[l.b,l.a]])a.has(c)||a.set(c,[]),a.get(c).push({s:l,dir:g_([h[0]-c[0],h[1]-c[1]])})}),a.forEach((l,c)=>{if(l.length===1||l.length>2)return;let[h,u]=l,d=h.dir[0]*u.dir[1]-h.dir[1]*u.dir[0],f=h.dir[0]*u.dir[0]+h.dir[1]*u.dir[1];if(!(Math.abs(d)<.05&&f<0))for(let p of l)p.s.a===c?p.s.extA=p.s.t/2:p.s.extB=p.s.t/2}),o.forEach(l=>{l.len=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]),l.rot=-Math.atan2(l.b[1]-l.a[1],l.b[0]-l.a[0])}),o}var g_=i=>{let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]};function kd(i,t){let e=null;for(let n of t){let s=Ns([i.x,i.z],n.a,n.b);s.d>n.t/2+.2||i.rot!=null&&Math.abs(Math.sin(i.rot-n.rot))>.15||(!e||s.d<e.d)&&(e={s:n,d:s.d,u:s.t*n.len,q:s.q})}return e}var Wc=i=>i.type==="stairs"||i.type==="stairs_u";function Xc(i){if(i.type!=="stairs_u"||i.landings!==2)return jo(i);let t=i.w||1.9,e=i.d||3.2;return[[-t/2,-e/2],[t/2,-e/2],[t/2,0],[-t/2,0]].map(([n,s])=>Bc(i,n,s))}function Fd(i,t){let e=[],n=_n(i,t);for(let s=0;s<t;s++){let r=_n(i,s);i.floors[s].furniture.filter(Wc).forEach(o=>{if(r+(o.h||2.7)<n-.35||r>=n)return;let a=Xc(o);i.floors[t].rooms.some(l=>a.every(c=>un(c,l.points)))&&e.push(a)})}return e}var zd=ef(Bd(),1);var Yi={neon:{bg:460815,wall:1697535,wallOp:.2,edgeOp:.85,floorK:.25,floorEm:.14,door:16722902,win:7317759,roof:16751164,text:"#dfe8ff",glow:"#19e6ff"},day:{bg:14673650,wall:15922424,wallOp:.92,edgeOp:.5,floorK:.85,floorEm:0,door:10119999,win:9356799,roof:11883580,text:"#1d2740",glow:"#ffffff"}},x_={kitchen:"#ffb347",kitchen_tall:"#ffb347",kitchen_wall:"#ffb347",island:"#ffb347",sink:"#9ad7ff",stove:"#ff6b6b",dishwasher:"#c0c8d8",fridge:"#e8f1ff",washer:"#e8f1ff",dryer:"#e8f1ff",bed:"#b388ff",dresser:"#c08a5a",wardrobe:"#c08a5a",tall_cabinet:"#c08a5a",sideboard:"#c08a5a",shelf:"#c08a5a",desk:"#4aa3ff",office_chair:"#4aa3ff",chair:"#e0b080",stool:"#e0b080",table:"#e0b080",bench:"#e0b080",sofa_l:"#7bd88f",sofa:"#7bd88f",tv_board:"#7bd88f",rug:"#8f6bb3",shower:"#7fdbff",wc:"#e8f1ff",washbasin:"#e8f1ff",bathtub:"#e8f1ff",robot_vacuum:"#00ff9d",led_strip:"#fff29a",inverter:"#ffd166",meter:"#ffd166",grid_point:"#ffd166",stairs:"#c9d1e6",stairs_u:"#c9d1e6",tv:"#5a6bff",monitor:"#5a6bff",speaker:"#ff2bd6",soundbar:"#ff2bd6",car:"#9aa5c0",battery:"#7bd88f",wallbox:"#19e6ff"},y_={bin:[.58,.72,1.07],stairs:[1,3.2,2.75],stairs_u:[1.9,3.2,2.75],bed:[1.8,2,.5],table:[1.6,.9,.75],chair:[.45,.45,.9],stool:[.35,.35,.45],rug:[2,3,.02],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},__={kitchen_wall:1.4,tv:.8,monitor:.74,soundbar:.45};function Bs(i=256){let t=document.createElement("canvas");t.width=i,t.height=64;let e=new Ye(t),n=new en(new qe({map:e,transparent:!0,depthTest:!1}));return n.scale.set(i/256*1.2,.3,1),n.renderOrder=10,n.visible=!1,n.userData={canvas:t,tex:e,text:""},n}function Zi(i,t,e="#19e6ff"){let n=i.userData;if(n.text===t)return;n.text=t;let s=n.canvas.getContext("2d"),r=n.canvas.width;s.clearRect(0,0,r,64),s.fillStyle="rgba(7,8,15,.75)",s.beginPath(),s.roundRect(4,8,r-8,48,12),s.fill(),s.strokeStyle=e,s.lineWidth=2,s.stroke(),s.fillStyle="#fff",s.font="bold 30px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(t,r/2,33,r-24),n.tex.needsUpdate=!0}function Te(i,t,e,n=0,s=0,r=0){let o=new we(i,t,e);return o.translate(s,n+t/2,r),o}var v_={sedan:[[0,0],[0,.42],[.08,.5],[.3,.55],[.4,1],[.64,1],[.78,.58],[1,.5],[1,0]],wagon:[[0,0],[0,.78],[.03,.97],[.08,1],[.58,1],[.8,.58],[1,.5],[1,0]],hatch:[[0,0],[0,.72],[.06,.96],[.12,1],[.54,1],[.76,.64],[1,.54],[1,0]],van:[[0,0],[0,.95],[.03,1],[.72,1],[.86,.66],[1,.58],[1,0]],roadster:[[0,0],[0,.55],[.12,.62],[.5,.62],[.58,1],[.7,1],[.8,.64],[1,.52],[1,0]]};function b_(i,t,e){let n=y_[i.type]||[.6,.6,.8],s=i.w||n[0],r=i.d||n[1],o=i.h||n[2],a=new Ot(i.color||x_[i.type]||"#9aa5c0"),l=e.theme==="day"?1:.5,c=new be({color:a.clone().multiplyScalar(i.color?1:l),emissive:a,emissiveIntensity:e.theme==="day"?0:i.color?.3:.18,transparent:!0,opacity:e.theme==="day"?1:.88}),h=new le({color:i.color?a.clone().lerp(new Ot(16777215),.4):a,transparent:!0,opacity:.9}),u=i.mountY??__[i.type]??0,d=[],f=[c],p=new ae;p.position.set(i.x,t+(i.baseY||0),i.z),p.rotation.y=-Ee(i.rot||0);let x=(M,v=c)=>{let _=new Gt(M,v);return _.add(new he(new Se(M),h)),p.add(_),_.userData.entity=i.entity||null,_.userData.furnId=i.id,e.pickables.push(_),d.push(_),_};switch(i.type){case"bin":{x(Te(s,o-.06,r,.04)),x(Te(s+.04,.06,r+.04,o-.06));break}case"stairs_u":{if(i.landings===2){let k=Math.max(12,2*Math.round(o/.18/2)),T=o/k,w=Math.min(1.2,s/3,r/3),L=i.flip?-1:1,G=Math.max(2,Math.round(k*.31)),W=Math.max(1,k-2-2*G),J=s-w,it=r-2*w;for(let K=0;K<G;K++)x(Te(J/G,(K+1)*T,w,0,L*(-s/2+(K+.5)*(J/G)),r/2-w/2));x(Te(w,(G+1)*T,w,0,L*(s/2-w/2),r/2-w/2));for(let K=0;K<W;K++)x(Te(w,(G+2+K)*T,it/W,0,L*(s/2-w/2),r/2-w-(K+.5)*(it/W)));x(Te(w,(G+W+2)*T,w,0,L*(s/2-w/2),-r/2+w/2));for(let K=0;K<G;K++)x(Te(J/G,(G+W+3+K)*T,w,0,L*(s/2-w-(K+.5)*(J/G)),-r/2+w/2));break}let M=Math.max(8,2*Math.round(o/.18/2)),v=M/2,_=Math.min(1.2,r*.25),D=(r-_)/v,C=s/2-.02,N=i.flip?-1:1;for(let k=0;k<v;k++)x(Te(C,(k+1)*o/M,D,0,N*s/4,r/2-(k+.5)*D));x(Te(s,o/2,_,0,0,-r/2+_/2));for(let k=0;k<v;k++)x(Te(C,o/2+(k+1)*o/M,D,0,-N*s/4,-r/2+_+(k+.5)*D));break}case"stairs":{let M=Math.max(4,Math.round(o/.18)),v=r/M;for(let _=0;_<M;_++)x(Te(s,(_+1)*o/M,v,0,0,r/2-(_+.5)*v));break}case"table":case"desk":case"bench":{x(Te(s,.05,r,o-.05));let M=s/2-.05,v=r/2-.05;for(let _ of[-1,1])for(let D of[-1,1])x(Te(.05,o-.05,.05,0,_*M,D*v));break}case"chair":case"office_chair":case"stool":{let M=Math.min(.46,o*.5);x(Te(s,.06,r,M)),x(Te(.06,M,.06)),i.type!=="stool"&&x(Te(s,o-M,.05,M,0,-r/2+.025));break}case"sofa_l":case"sofa":{x(Te(s,Math.min(.45,o),r)),x(Te(s,o,.22,0,0,-r/2+.11));break}case"robot_vacuum":{let M=new cr(Math.max(s,r)/2,Math.max(s,r)/2,o,24);M.translate(0,u+o/2,0),x(M);break}case"tv":case"monitor":{x(Te(s,o,r,u));let M=512,v=Math.max(64,Math.round(512*o/s)),_=document.createElement("canvas");_.width=M,_.height=v;let D=new Ye(_);D.colorSpace=Qe;let C=Math.max(.1,s-.06),N=Math.max(.1,o-.06),k=new Gt(new ii(C,N),new Ge({map:D,toneMapped:!1}));k.position.set(0,u+o/2,r/2+.003),k.userData.entity=i.entity||null,p.add(k),e.pickables.push(k),e.anchors.screens.push({f:i,canvas:_,tex:D,mesh:k,w:C,h:N,floor:e.cur.i});break}case"car":{let M=v_[i.body];if(M){let C=L=>.2+L*(o-.2),N=new hn(M.map(([L,G])=>new ht((L-.5)*r,C(G)))),k=new gn(N,{depth:s,bevelEnabled:!1});k.applyMatrix4(new ee().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),k.translate(-s/2,0,0),x(k);let T=new be({color:1119256,emissive:2106412,emissiveIntensity:.5}),w=Math.min(.34,o*.27);for(let L of[-1,1])for(let G of[-1,1]){let W=new cr(w,w,.22,16);W.rotateZ(Math.PI/2);let J=new Gt(W,T);J.position.set(L*(s/2-.1),w,G*r*.31),p.add(J)}}else x(Te(s,o*.42,r,.18)),x(Te(s*.86,o*.34,r*.5,.18+o*.42,0,-r*.04));let v=new Ge({color:1697535,transparent:!0,opacity:.9}),_=new Gt(new we(s+.08,.06,r+.08),v);if(_.position.set(0,.1,0),_.visible=!!i.car||!M,p.add(_),e.anchors.cars.push({f:i,band:v,group:p,floor:e.cur.i,w:s,d:r,h:o}),i.name&&!i.car){let D=Bs();Zi(D,i.name),D.visible=!0,D.position.set(0,o+.45,0),p.add(D)}break}default:x(Te(s,o,r,u))}let g={mats:f,group:p},m=u+o+(i.baseY||0);if(e.anchors.furniture.push({f:i,floor:e.cur.i,x:i.x,z:i.z,y:e.cur.elev+u+(i.baseY||0),top:e.cur.elev+m,w:s,d:r,h:o,group:p,mats:f}),i.entity||i.stateEntity){let M=new en(new qe({map:e.glowTex(),color:a,transparent:!0,depthWrite:!1,blending:an}));M.scale.setScalar(Math.max(1,s*2)),M.position.set(0,m/2,0),M.visible=!1,p.add(M),e.dyn.push({kind:"furniture",entity:i.entity||i.stateEntity,mats:f,glow:M,baseScale:M.scale.x})}if(i.power){let M=Bs();M.position.set(0,m+.35,0),p.add(M),e.dyn.push({kind:"value",entity:i.power,sprite:M,always:i.marker==="always"})}if(i.name&&i.showName){let M=Bs();Zi(M,i.name,"#19e6ff"),M.visible=!0,M.position.set(0,m+.3,0),p.add(M)}return g.group}function M_(i,t,e,n,s,r,o){let a=i.len+i.extA+i.extB,l=(i.b[0]-i.a[0])/i.len,c=(i.b[1]-i.a[1])/i.len,h=i.h!=null?Math.min(i.h,t.height):t.height,u=br(n).length>0,d=v=>{if(!u)return h;let _=v-i.extA,D=Od(n,i.a[0]+l*_,i.a[1]+c*_);return D===1/0?h:Math.max(.05,Math.min(h,D-e-.02))},f=new hn;f.moveTo(0,0),f.lineTo(a,0);let p=u?Math.max(1,Math.ceil(a/.25)):1;for(let v=p;v>=0;v--){let _=a*v/p;f.lineTo(_,d(_))}f.closePath();let x=o.map(v=>({u0:v.u+i.extA-v.w/2,u1:v.u+i.extA+v.w/2,y0:Math.max(v.sill,.003),y1:v.sill+v.h})).sort((v,_)=>v.u0-_.u0),g=-1;x.forEach(v=>{let _=Math.max(v.u0,.01),D=Math.min(v.u1,a-.01),C=Math.min(v.y1,Math.min(d(_),d(D))-.01);if(D-_<.05||C-v.y0<.05||_<g+.01)return;g=D;let N=new bi;N.moveTo(_,v.y0),N.lineTo(D,v.y0),N.lineTo(D,C),N.lineTo(_,C),N.closePath(),f.holes.push(N)});let m=new gn(f,{depth:i.t,bevelEnabled:!1,curveSegments:1});m.translate(0,0,-i.t/2);let M=new Gt(m,r.wall);return M.position.set(i.a[0]-l*i.extA,e,i.a[1]-c*i.extA),M.rotation.y=i.rot,M.add(new he(new Se(m,25),r.edge)),M.renderOrder=1,M}function w_(i,t,e,n,s){let r=n.th,o=i.type==="door",a=new ae,l=t?(t.s.b[0]-t.s.a[0])/t.s.len:Math.cos(-i.rot),c=t?(t.s.b[1]-t.s.a[1])/t.s.len:Math.sin(-i.rot),h=t?t.s.a[0]+l*t.u:i.x,u=t?t.s.a[1]+c*t.u:i.z;a.position.set(h,e+i.sill,u),a.rotation.y=t?t.s.rot:i.rot;let d=t?t.s.t:.15,f=i.w,p=Math.min(i.h,3),x=o?i.style==="front"?16722902:r.door:r.win,g=new le({color:x}),m=new he(new Se(new we(f,p,d+.02)),g);m.position.y=p/2,a.add(m);let M={kind:"opening",entity:i.entity||null,type:i.type,open:0};if(o&&i.style==="passage")return n.dyn.push(M),a;let v=new ae,_=i.hinge==="right"?f/2:-f/2;v.position.set(_,0,0);let D=(i.hinge==="right"?-1:1)*(i.swing==="out"?-1:1),C=new be({color:x,emissive:x,emissiveIntensity:o?.5:.7,transparent:!0,opacity:o?.75:.35,depthWrite:!1,side:de}),N=o||i.leaves!==2?f:f/2,k=new Gt(new we(N-.04,p-.04,o?.045:.02),C);if(k.position.set(-_>0?N/2:-N/2,p/2,0),v.add(k),!o&&i.leaves===2){let T=new Gt(k.geometry,C);T.position.set(-k.position.x,p/2,0),a.add(T)}return a.add(v),M.pivot=v,M.mat=C,M.sign=D,M.maxAngle=o?Ee(75):Ee(28),n.dyn.push(M),a}function qi(i,t,e,n){return i.horiz?[n,e,t]:[t,e,n]}function Hd(i,t,e,n=.5){let s=vr(t),r=t.overhang??s.overhang,o=s.s0-r,a=s.s1+r,l=s.c0-r,c=s.c1+r,h=s.eaveA-s.ta*r,u=s.eaveB-s.tb*r,d=[qi(s,l,h,o),qi(s,l,h,a),qi(s,s.cr,s.yr,a),qi(s,s.cr,s.yr,o),qi(s,c,u,o),qi(s,c,u,a)],f=new jt;f.setAttribute("position",new ne(d.flat(),3)),f.setIndex([0,1,2,0,2,3,3,2,5,3,5,4]),f.computeVertexNormals();let p=new Gt(f,e.surf);p.add(new he(new Se(f,5),e.line)),p.renderOrder=2,i.add(p);for(let[x,g]of[[s.s0,1],[s.s1,-1]]){let m=new hn;m.moveTo(s.c0,s.base),m.lineTo(s.c1,s.base),m.lineTo(s.c1,Math.max(s.eaveB,s.base)),m.lineTo(s.cr,s.yr),m.lineTo(s.c0,Math.max(s.eaveA,s.base)),m.closePath();let M=new gn(m,{depth:n,bevelEnabled:!1}),v=new ee;s.horiz&&v.set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1),M.applyMatrix4(v);let _=g>0?x:x-n;s.horiz?M.translate(_,0,0):M.translate(0,0,_);let D=new Gt(M,e.gable);D.add(new he(new Se(M,25),e.edge)),i.add(D)}}function S_(i,t){let e=i.settings?.roof,n=new ae;if(!e?.sections?.length)return n;let s=t.th,r=new be({color:s.roof,emissive:s.roof,emissiveIntensity:t.theme==="day"?0:.25,transparent:!0,opacity:t.theme==="day"?.95:.3,side:de,depthWrite:!1}),o=new le({color:s.roof,transparent:!0,opacity:.9}),a=new be({color:s.wall,emissive:s.wall,emissiveIntensity:.2,transparent:!0,opacity:s.wallOp+.05,side:de,depthWrite:!1});e.sections.forEach(h=>Hd(n,h,{surf:r,line:o,gable:a,edge:t.mats.edge}));let l=h=>{let[u,d]=String(h).split(":"),f=e.sections.find(p=>p.id===u);return f?{g:vr(f),side:d==="b"?"b":"a"}:null},c=(h,u,d,f,p,x)=>{let g=l(h);if(!g)return null;let{g:m,side:M}=g,v=Ee(M==="a"?m.pa:m.pb),_=M==="a"?m.c0+d*Math.cos(v):m.c1-d*Math.cos(v),D=(M==="a"?m.eaveA:m.eaveB)+d*Math.sin(v);_+=(M==="a"?-Math.sin(v):Math.sin(v))*f,D+=Math.cos(v)*f;let C=qi(m,_,D,m.s0+u),N=m.horiz?new we(p,.04,x):new we(x,.04,p),k=new Gt(N,null);return k.position.set(...C),m.horiz?k.rotation.x=M==="a"?-v:v:k.rotation.z=M==="a"?v:-v,k};return(e.solar||[]).forEach(h=>{let u=h.moduleW||(h.portrait?1.134:1.722),d=h.moduleH||(h.portrait?1.722:1.134),f=h.cols||1,p=h.rows||1,x=new be({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),g=new le({color:5939455});for(let m=0;m<f;m++)for(let M=0;M<p;M++){let v=h.u+(m-(f-1)/2)*(u+.02),_=h.v+(M-(p-1)/2)*(d+.02),D=c(h.face,v,_,.05,u,d);D&&(D.material=x,D.add(new he(new Se(D.geometry),g)),n.add(D),t.anchors.pv.push({mesh:D,mat:x,entity:h.entity||null,wp:h.wp||400}))}h.entity&&t.dyn.push({kind:"solar",entity:h.entity,mat:x,wp:h.wp||400})}),(e.windows||[]).forEach(h=>{let u=c(h.face,h.u,h.v,.05,h.w||1,h.h||1.2);u&&(u.material=new be({color:s.win,emissive:s.win,emissiveIntensity:.5,transparent:!0,opacity:.55}),n.add(u))}),n}function E_(i,t,e,n,s){let r=new ae,o=i.site?.north??i.settings?.north??0,a=t.roof||{},l=yr(t.points,a,o),c=Ee(a.pitch??12),h=Math.tan(c),u=t.height||2.8,d=l.L,f=l.W,p=a.overhang??.3,x=u+f*h,g=L=>u+(f/2-L)*h,m=new ae;m.position.set(l.cx,0,l.cz),m.rotation.y=l.theta,r.add(m);let M=d/2+p,v=-f/2-p,_=f/2+p,D=new jt;D.setAttribute("position",new ne([-M,g(v),v,M,g(v),v,M,g(_),_,-M,g(_),_],3)),D.setIndex([0,1,2,0,2,3]),D.computeVertexNormals();let C=new Gt(D,s.roofMats.surf);C.add(new he(new Se(D,5),s.lineMat)),C.renderOrder=2,m.add(C);let N=(L,G,W,J)=>{if(!n.label)return;let it=n.label(L,e.theme),K=oi(l,G,W);it.position.set(K[0],J,K[1]),r.add(it)},k=ca(d,t)||[{type:"solid",t0:0,t1:d}],T=!!(t.parts?.length||t.layout);if(k.forEach(L=>{let G=Math.min(l.tToU(L.t0),l.tToU(L.t1)),W=Math.max(l.tToU(L.t0),l.tToU(L.t1)),J=W-G,it=(G+W)/2;if(L.type==="garage"||L.type==="solid"||L.type==="bike"){let K=new hn([new ht(-f/2,0),new ht(f/2,0),new ht(f/2,u),new ht(-f/2,x)]),ot=new gn(K,{depth:J,bevelEnabled:!1});ot.applyMatrix4(new ee().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),ot.translate(G,0,0);let tt=new Gt(ot,s.wallMat);if(tt.add(new he(new Se(ot,25),s.lineMat)),tt.userData={site:t.id},tt.renderOrder=1,m.add(tt),e.pickables.push(tt),(L.type==="garage"||L.type==="bike")&&T){let dt=aa({side:L.doorSide,pt:L,f:l,W:f,hLow:u,bike:L.type==="bike",width:L.door}),ut=new Gt(new we(dt.sx,dt.sy,dt.sz),new be({color:16722902,emissive:16722902,emissiveIntensity:.5,transparent:!0,opacity:.5,depthWrite:!1}));ut.position.set(dt.x,dt.y,dt.z),ut.add(new he(new Se(ut.geometry),new le({color:16722902}))),m.add(ut)}N(L.name||(L.type==="solid"?t.name||"":Fs[L.type]||""),it,0,.06)}else{let K=new we(J,x,.1),ot=new Gt(K,s.wallMat);ot.position.set(it,x/2,-f/2+.05),ot.add(new he(new Se(K),s.lineMat)),ot.userData={site:t.id},m.add(ot),e.pickables.push(ot);let tt=L.type==="carport"?L.stalls:1,dt=J/tt,ut=[];for(let Ft=0;Ft<=tt;Ft++){let Zt=G+Ft*dt,st=(pt,Tt)=>{let mt=new Gt(new we(.14,Tt,.14),s.wallMat);mt.position.set(Zt,Tt/2,pt),mt.add(new he(new Se(mt.geometry),s.lineMat)),m.add(mt)};st(f/2-.08,u),st(-f/2+.08,x),ut.push(new z(Zt,.03,-f/2),new z(Zt,.03,f/2))}L.type==="carport"&&m.add(new he(new jt().setFromPoints(ut),new le({color:s.col,transparent:!0,opacity:.8})));let wt=new Gt(new ii(J,f),new Ge({color:s.col,transparent:!0,opacity:.12,side:de,depthWrite:!1}));wt.rotation.x=-Math.PI/2,wt.position.set(it,.02,0),m.add(wt),L.type==="carport"&&la(L,L.numberFrom).forEach(Ft=>N(String(Ft.n),l.tToU(Ft.t),0,.05))}}),T&&k.some(L=>L.type==="carport")){let L=k.find(G=>G.type==="carport");N(`Carport \xB7 ${L.stalls} Stellpl\xE4tze`,l.tToU((L.t0+L.t1)/2),f/2+.9,.06)}let w=t.pv;if(w&&w.enabled!==!1){let L=w.over?String(w.over).startsWith("#")?k.find(ot=>ot.index===Number(String(w.over).slice(1))):k.find(ot=>ot.type===w.over):null,G=Pd({L:d,W:f,pitchDeg:a.pitch??12,orientation:w.orientation,portrait:w.portrait,fill:w.fill!==!1,rows:w.rows,cols:w.cols,align:w.edge||"center",uCenter:L?l.tToU((L.t0+L.t1)/2):0}),W=new be({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),J=new le({color:5939455}),it=Math.cos(c),K=Math.sin(c);m.updateMatrixWorld(!0),G.modules.forEach(ot=>{let tt=f/2-ot.s*it+.06*K,dt=u+ot.s*K+.06*it,ut=new Gt(new we(ot.mw,.04,ot.mh),W);ut.position.set(ot.u,dt,tt),ut.rotation.x=c,ut.add(new he(new Se(ut.geometry),J)),m.add(ut);let wt=new z;m.updateMatrixWorld(!0),ut.updateWorldMatrix(!0,!1),ut.getWorldPosition(wt),e.anchors.pv.push({mesh:ut,mat:W,entity:w.entity||null,wp:w.wp||420,pos:wt,site:t.id})})}return r}function T_(i,t,e={}){let n=new ae,s=i.site?.buildings||[];if(!s.length&&!i.site?.decks?.length)return n;let r=t.theme==="day",o=r?14205861:16757575,a=new be({color:o,emissive:o,emissiveIntensity:r?0:.18,transparent:!0,opacity:r?.95:.22,depthWrite:!1,side:de}),l=new le({color:o,transparent:!0,opacity:.9}),c={surf:new be({color:o,emissive:o,emissiveIntensity:r?0:.25,transparent:!0,opacity:r?.95:.32,side:de,depthWrite:!1}),line:l,gable:a,edge:l},h=(d,f,p)=>{if(!d.points||d.points.length<3)return;let x=d.rail??1,g=d.railSkip||[0],m=new gn(new hn(d.points.map(_=>new ht(_[0],-_[1]))),{depth:.18,bevelEnabled:!1,curveSegments:1}),M=new Gt(m,new be({color:o,emissive:o,emissiveIntensity:r?0:.35,transparent:!0,opacity:r?.9:.5,side:de,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=f-.18,M.add(new he(new Se(m,25),l)),M.userData={site:p},n.add(M),t.pickables.push(M);let v=[];for(let _=0;_<d.points.length;_++){if(g.includes(_))continue;let D=d.points[_],C=d.points[(_+1)%d.points.length];v.push(D[0],f,D[1],C[0],f,C[1],C[0],f+x,C[1],D[0],f,D[1],C[0],f+x,C[1],D[0],f+x,D[1])}if(v.length){let _=new jt;_.setAttribute("position",new ne(v,3)),_.computeVertexNormals();let D=new Gt(_,new Ge({color:o,transparent:!0,opacity:.18,side:de,depthWrite:!1}));D.add(new he(new Se(_,5),l)),n.add(D)}if(e.label&&d.name){let _=e.label(d.name,t.theme),D=Ln(d.points);_.position.set(D[0],f+.06,D[1]),n.add(_)}};(i.site?.decks||[]).forEach(d=>h(d,d.elev??0,"deck"));let u=i.site?.groundY??0;return s.forEach(d=>{if(d.visible===!1||!d.points||d.points.length<3)return;if(d.roof?.type==="shed"||d.layout||d.parts?.length){let D=E_(i,d,t,e,{wallMat:a,lineMat:l,roofMats:c,col:o});u&&(D.position.y=u,t.anchors.pv.forEach(C=>{C.site===d.id&&(C.pos.y+=u)})),n.add(D);return}let f=d.levels>1||d.baseY!=null,p=f?Math.min(0,d.baseY??u):0,x=n.children.length,g=d.height||3,m=new gn(new hn(d.points.map(D=>new ht(D[0],-D[1]))),{depth:g-p,bevelEnabled:!1,curveSegments:1}),M=new Gt(m,a);M.rotation.x=-Math.PI/2,M.position.y=p,M.add(new he(new Se(m,25),l)),M.userData={site:d.id},M.renderOrder=1,n.add(M),t.pickables.push(M),(d.storeys||[]).filter(D=>D>.05&&D<g-.3).forEach(D=>{let C=[];i.floors.forEach((L,G)=>{let W=_n(i,G);W>=D||L.furniture.filter(Wc).forEach(J=>{let it=Xc(J);W+(J.h||2.7)>=D-.35&&it.every(K=>un(K,d.points))&&C.push(it)})}),i.floors.forEach((L,G)=>{Math.abs(_n(i,G)-D)>.02||L.rooms.filter(W=>W.dy<0&&W.points.every(J=>un(J,d.points))).forEach(W=>C.push(W.points))});let N=(L,G=[])=>{let W=new hn(L.map(J=>new ht(J[0],-J[1])));return G.forEach(J=>W.holes.push(new bi(J.map(it=>new ht(it[0],-it[1]))))),W},k=[N(d.points)];C.length&&(k=zd.default.difference([[d.points.map(G=>[G[0],G[1]])]],...C.map(G=>[[G.map(W=>[W[0],W[1]])]])).map(G=>N(G[0],G.slice(1))));let T=new gn(k,{depth:.18,bevelEnabled:!1,curveSegments:1}),w=new Gt(T,new be({color:o,emissive:o,emissiveIntensity:r?0:.35,transparent:!0,opacity:r?.9:.45,side:de,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=D-.18,w.add(new he(new Se(T,25),l)),n.add(w)}),(d.openings||[]).forEach(D=>{let C=D.w||1.1,N=D.h||2.2,k=D.type==="door"?0:C/2,T=new hn;T.moveTo(-C/2,0),T.lineTo(C/2,0),T.lineTo(C/2,N-k),k?T.absarc(0,N-k,k,0,Math.PI,!1):(T.lineTo(C/2,N),T.lineTo(-C/2,N)),T.lineTo(-C/2,0);let w=new gn(T,{depth:.16,bevelEnabled:!1,curveSegments:16});w.translate(0,0,-.08);let L=new Gt(w,new be({color:16722902,emissive:16722902,emissiveIntensity:.5,transparent:!0,opacity:.5,depthWrite:!1}));L.add(new he(new Se(w,20),new le({color:16722902}))),L.position.set(D.x,D.elev||0,D.z),L.rotation.y=-Ee(D.rot||0),L.userData={site:d.id},n.add(L),t.pickables.push(L)}),(d.balconies||[]).forEach(D=>h(D,D.elev??(d.storeys||[]).find(C=>C>.05)??2.8,d.id));let v=g,_=d.roof||{};if(_.type==="gable"&&d.points.length===4){let[D,C,N]=d.points,k=[C[0]-D[0],C[1]-D[1]],T=[N[0]-C[0],N[1]-C[1]],w=Math.hypot(...k),L=Math.hypot(...T),G=w>=L?k:T,W=Math.max(w,L),J=Math.min(w,L),it=_.pitch||25,K={axis:"x",x0:-W/2,x1:W/2,z0:-J/2,z1:J/2,base:g,eaveA:g,eaveB:g,pitchA:it,pitchB:it,overhang:_.overhang??.3},ot=new ae;Hd(ot,K,c,.05),ot.position.set(d.points.reduce((tt,dt)=>tt+dt[0],0)/d.points.length,0,d.points.reduce((tt,dt)=>tt+dt[1],0)/d.points.length),ot.rotation.y=-Math.atan2(G[1],G[0]),n.add(ot),v=vr(K).yr}if(d.name&&e.label){let D=Ln(d.points),C=e.label(d.name,t.theme);C.position.set(D[0],v+.1,D[1]),n.add(C)}!f&&u&&n.children.slice(x).forEach(D=>{D.position.y+=u})}),n}function A_(i,t,e){let n=new ae;n.position.set(t[0],.05,t[1]);let s=Ee(i||0),r=new z(Math.sin(s),0,-Math.cos(s)),o=e.theme==="day"?3359061:1697535,a=new Gt(new Cs(1.1,1.18,48),new Ge({color:o,side:de,transparent:!0,opacity:.8}));a.rotation.x=-Math.PI/2,n.add(a),n.add(new cn(new jt().setFromPoints([r.clone().multiplyScalar(-.9),r.clone().multiplyScalar(1.5)]),new le({color:16722902})));let l=Bs();return Zi(l,"N","#ff2bd6"),l.visible=!0,l.scale.set(.9,.22,1),l.position.copy(r.clone().multiplyScalar(1.9)),l.position.y=.3,n.add(l),n}function Vd(i,t){let e=t.theme||"neon",n=Yi[e]||Yi.neon,s={wall:new be({color:n.wall,emissive:n.wall,emissiveIntensity:e==="day"?0:.25,transparent:!0,opacity:n.wallOp,depthWrite:!1}),edge:new le({color:e==="day"?6713477:n.wall,transparent:!0,opacity:n.edgeOp})},r={rooms:[],furniture:[],devices:[],pv:[],screens:[],cars:[]},o={theme:e,th:n,mats:s,dyn:[],pickables:[],glowTex:t.glowTex,anchors:r,cur:{elev:0,i:0}},a=new ae,l={..._r,...i.settings||{}};i.floors.forEach((h,u)=>{if(u>t.maxFloor)return;let d=_n(i,u);o.cur={elev:d,i:u};let f=new ae,p=u<t.maxFloor&&t.maxFloor!==1/0?.7:1,x=Fd(i,u);h.rooms.forEach(v=>{let _=new hn(v.points.map(w=>new ht(w[0],w[1])));x.forEach(w=>{w.every(L=>un(L,v.points))&&_.holes.push(new bi(w.map(L=>new ht(L[0],L[1]))))});let D=new Ot(v.color||"#19e6ff"),C=new be({color:D.clone().multiplyScalar(n.floorK),emissive:D,emissiveIntensity:n.floorEm*p,side:de}),N=new Gt(new gn(_,{depth:l.slab,bevelEnabled:!1,curveSegments:1}),C);N.rotation.x=Math.PI/2,N.position.y=v.dy||0,N.userData={room:v.id,floor:h.id},f.add(N),o.pickables.push(N);let k=Ln(v.points);if(r.rooms.push({id:v.id,name:v.name,area:v.area,room:v,floor:u,x:k[0],z:k[1],y:d+h.height*.5,elev:d}),v.name){let w=Ln(v.points),L=t.label(v.name,e);L.position.set(w[0],.04,w[1]),f.add(L)}let T=t.climateFor?.(v);if(T&&(T.temperature||T.humidity||T.co2)){let w=Ln(v.points),L=Bs(448);L.scale.set(3.15,.45,1),L.position.set(w[0],1.05,w[1]),f.add(L),o.dyn.push({kind:"roomclimate",...T,sprite:L,mat:C,base:{color:C.color.clone(),emissive:C.emissive.clone(),ei:C.emissiveIntensity}})}});let g=ua(h,l),m=new Map,M=[];h.openings.forEach(v=>{let _=kd(v,g);_&&(m.has(_.s)||m.set(_.s,[]),m.get(_.s).push({...v,u:_.u})),f.add(w_(v,_,0,o,i)),_||M.push(v)}),g.forEach(v=>{let _=M_(v,h,d,i,n,s,m.get(v)||[]);_.position.y=0,f.add(_)}),h.furniture.forEach(v=>f.add(b_(v,0,o))),t.devicesFor(h).forEach(v=>{let _=Ze(v.entity),D=v.y??(_==="light"?h.height-.4:_==="camera"?Math.min(2.4,h.height-.25):.9),C=_==="light"?new Io(.14,16,12):_==="cover"?new we(.5,.08,.08):new we(.22,.22,.22),N=new Gt(C,new be({color:4475494,emissive:0}));N.position.set(v.x,D,v.z),N.userData={entity:v.entity};let k=new en(new qe({map:t.glowTex(),color:16765066,transparent:!0,depthWrite:!1,blending:an}));k.position.copy(N.position);let T=_==="light"?2.4:1.1;if(k.scale.setScalar(T),k.visible=!1,f.add(N,k),o.pickables.push(N),r.devices.push({d:v,entity:v.entity,floor:u,x:v.x,y:d+D,z:v.z,kind:_,mesh:N}),o.dyn.push({kind:_,entity:v.entity,mesh:N,glow:k,baseScale:T,pulse:_==="light"}),v.name&&v.showName){let w=Bs();Zi(w,v.name),w.visible=!0,w.position.set(v.x,D+.35,v.z),f.add(w)}}),f.position.y=d,a.add(f)}),t.showRoof&&t.maxFloor>=i.floors.length-1&&a.add(S_(i,o)),t.showSite!==!1&&a.add(T_(i,o,t));let c=[...i.floors.flatMap(h=>h.rooms.flatMap(u=>u.points)),...(i.site?.buildings||[]).flatMap(h=>h.points)];if(c.length&&i.site?.north!=null){let[h,,,u]=Mi(c);a.add(A_(i.site.north,[h-2.5,u+2.5],o))}return{root:a,dyn:o.dyn,pickables:o.pickables,anchors:r}}var R_={wood:"#e0a458",tiles:"#58c4dd",stone:"#9aa5b8",carpet:"#b48ad8",concrete:"#8d99ae"},Gd=i=>i==null?null:Number(i),wi=i=>i&&i!=="none"?i:null;function C_(i){let t=i?.result??i,e=t?.building??t;if(!e||!Array.isArray(e.floors))throw new Error("Keine NeonPlan-3D-Daten (floors fehlen)");return{building:e,meta:{version:t?.version,revision:t?.revision}}}function Wd(i){let{building:t,meta:e}=C_(i),n=t.settings||{},s={version:2,settings:{wallExterior:n.wall_exterior??.24,wallInterior:n.wall_interior??.12,north:n.north??0,autoDevices:!0,energy:t.energy||null,roof:P_(n.roof),source:{app:"neonplan3d",version:e.version??null,revision:e.revision??null}},floors:[]};return[...t.floors].sort((o,a)=>(o.elevation??0)-(a.elevation??0)).forEach(o=>{let a=(o.rooms||[]).map(d=>({id:d.id,name:d.name||"",area:d.area_id||null,color:R_[d.floor_material]||"#19e6ff",material:d.floor_material||null,points:d.points.map(f=>[f[0],f[1]]),wallT:d.wall_thickness||null,wallH:d.wall_heights||null,climate:d.climate&&Object.values(d.climate).some(Boolean)?d.climate:null})),l=(o.walls||[]).map(d=>({id:d.id,a:[...d.a],b:[...d.b],t:Gd(d.thickness),h:Gd(d.height)})),c=[];(o.openings||[]).forEach(d=>{let f,p;if(d.wall){let _=(o.walls||[]).find(D=>D.id===d.wall);if(!_)return;[f,p]=[_.a,_.b]}else{let _=(o.rooms||[]).find(C=>C.id===d.room_id);if(!_)return;let D=d.edge||0;[f,p]=[_.points[D%_.points.length],_.points[(D+1)%_.points.length]]}let x=p[0]-f[0],g=p[1]-f[1],m=Math.hypot(x,g)||1,M=d.offset??m/2,v=d.type==="door";c.push({id:d.id,type:d.type,x:+(f[0]+x/m*M).toFixed(4),z:+(f[1]+g/m*M).toFixed(4),rot:-Math.atan2(g,x),w:d.width??(v?.9:1.2),h:d.height??(v?2.1:1.1),sill:d.sill??(v?0:.9),style:d.style||null,hinge:d.hinge||"left",swing:d.swing||"in",leaves:d.leaves||1,entity:wi(d.contact)||wi(d.sensor),cover:wi(d.cover)})});let h=(o.furniture||[]).map(d=>({id:d.id,type:d.type,x:d.x??0,z:d.z??0,rot:d.rotation||0,w:d.w,d:d.d,h:d.h,mountY:d.mount_y??null,name:d.name||null,showName:!!d.show_name,entity:wi(d.entity),power:wi(d.power),stateEntity:wi(d.state_entity),marker:d.marker||null})),u=(o.placements||[]).map((d,f)=>({id:`${o.id}_dev${f}`,entity:d.entity_id,x:d.x,z:d.z,y:d.y??null,name:d.name||null,showName:!!d.show_name}));s.floors.push({id:o.id,name:o.name,elevation:o.elevation??0,height:o.height??2.6,rooms:a,walls:l,openings:c,devices:u,furniture:h})}),$i(s)}function P_(i){return!i||!Array.isArray(i.sections)||!i.sections.length?null:{overhang:i.overhang??.5,sections:i.sections.map(t=>({id:t.id,shape:t.shape||"gable",axis:t.axis||"x",x0:t.x0,x1:t.x1,z0:t.z0,z1:t.z1,base:t.base,eaveA:t.eave_a,eaveB:t.eave_b,pitchA:t.pitch_a??i.pitch??40,pitchB:t.pitch_b??i.pitch??40,overhang:t.overhang??i.overhang??.5,flip:!!t.flip})),solar:(i.solar||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:t.rows||1,cols:t.cols||1,portrait:t.portrait!==!1,entity:wi(t.entity),wp:t.wp||null,name:t.name||null,moduleW:t.module_w??null,moduleH:t.module_h??null})),windows:(i.windows||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,w:t.w||1,h:t.h||1.2,entity:wi(t.contact)}))}}var Xd=["light","switch","cover","fan","lock","input_boolean","media_player"],I_=["off","closed","unavailable","unknown","idle","locked","docked","standby","paused"],qd={bed:[1.8,2,.5],sofa_l:[2.4,1.6,.85],table:[1.6,.9,.75],chair:[.45,.45,.9],desk:[1.4,.7,.75],office_chair:[.6,.6,1],wardrobe:[1,.6,2.1],dresser:[1.2,.5,.9],shelf:[.8,.3,1.8],tv_board:[1.6,.45,.5],sideboard:[1.4,.45,.85],kitchen:[2.4,.62,.9],kitchen_tall:[.6,.62,2.1],kitchen_wall:[1,.35,.7],island:[1.8,.9,.9],fridge:[.6,.65,1.8],stove:[.6,.6,.9],sink:[.8,.6,.9],dishwasher:[.6,.6,.85],washer:[.6,.6,.85],shower:[.9,.9,2.1],bathtub:[1.7,.75,.55],wc:[.4,.7,.8],washbasin:[.6,.45,.85],bin:[.58,.72,1.07],stairs:[.9,2.4,2.8],stairs_u:[1.9,3.2,2.8],rug:[2,3,.02],stool:[.35,.35,.45],bench:[1.2,.4,.45],robot_vacuum:[.36,.36,.1],led_strip:[1,.05,.05],inverter:[.5,.2,.65],meter:[.5,.2,1.1],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},$d=Object.keys(qd),L_=(i,t)=>t.split(".").reduce((e,n)=>e?.[n],i),D_=(i,t,e)=>{let n=t.split("."),s=n.pop(),r=n.reduce((o,a)=>o[a]??={},i);r[s]=e},vn=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),U_=`
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
`,Yc=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.plan=Gc(),this.fi=0,this.cut=!1,this.editing=!1,this.tool="select",this.sel=null,this.draft=[],this.cam2={x:5,z:4,s:40},this.dyn=[],this.pickables=[],this.cfg={},this._ready=!1,this.panelRoom=null,this.pendingEntity="",this.furnType="table",this.grid=.1,this.showRoof=!0,this.showSite=!0,this.showClimate=!0,this.heatmap=!1,this.hasClimate=!1,this.multi=[],this.theme="neon",this.undoStack=[],this._labels=new Map,this.chips={},this.holo=!0,this.features=Ad(this)}set hass(t){let e=!this._hass;this._hass=t,e&&this._ready&&this.load(),this.updateStates(),!this.editing&&this.panelRoom&&this.renderRoomPanel()}get hass(){return this._hass}getStates(){return this._replayStates||this._hass?.states}fxOn(t){if(this.cfg[t]!=null)return!!this.cfg[t];try{let e=localStorage.getItem("hp3d.fx."+t);if(e!=null)return e==="1"}catch{}return!0}setFx(t,e){try{localStorage.setItem("hp3d.fx."+t,e?"1":"0")}catch{}let n=this.features.find(s=>s.id===t);n&&(n.on=e,n.group.visible=e,e?n.update(this.getStates()||{}):n.reset(),this.renderBar())}openFxMenu(){this.closeOverlay();let t=document.createElement("div");t.className="overlay",t.style.cssText="right:12px;top:52px;width:230px",t.innerHTML=`<h4 style="margin:0 0 6px">Funktionen einrichten</h4>${this.features.filter(e=>e.settingsLabel).map((e,n)=>`<button class="full" data-i="${n}">${e.settingsLabel}</button>`).join("")}`,t.onclick=e=>{let n=e.target.closest("[data-i]")?.dataset.i;n!=null&&this.features.filter(s=>s.settingsLabel)[+n].openSettings()},this.shadowRoot.querySelector(".wrap").append(t),this._overlay=t}closeOverlay(){this._overlay&&(this._overlay.remove(),this._overlay=null)}setChip(t,e){e?this.chips[t]=e:delete this.chips[t];let n=this.$("#chips");n&&(n.innerHTML=Object.values(this.chips).map(s=>`<span>${s}</span>`).join(""))}set config(t){this.cfg=t||{},this.theme=this.cfg.theme==="day"?"day":"neon",this.showRoof=this.cfg.show_roof!==!1,this.showSite=this.cfg.show_site!==!1,this.showClimate=this.cfg.show_climate!==!1,this.heatmap=!!this.cfg.heatmap,this._ready&&(this.renderBar(),this.rebuild3D())}connectedCallback(){if(this._ready)return;this._ready=!0,this.shadowRoot.innerHTML=`<style>${U_}</style>
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
    </div>`;let t=e=>this.shadowRoot.querySelector(e);this.$=t,this.edCanvas=t("#ed"),this.viewEl=t("#view"),t("#edit").onclick=()=>this.setEditing(!this.editing),t("#save").onclick=()=>this.save(),t("#undo").onclick=()=>this.undo(),this.init3D(),this.initEditor(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.shadowRoot.querySelector(".wrap")),this._hass?this.load():this.setPlan(this.plan,{fit:!0})}disconnectedCallback(){this.ro?.disconnect(),cancelAnimationFrame(this._raf),this.renderer?.dispose(),this._ready=!1}async load(){let t=null;try{t=await this._hass.callWS({type:"homeplan3d/get"})}catch(e){console.error(e)}this.setPlan(t||Gc(),{fit:!0})}setPlan(t,{fit:e=!1}={}){this.plan=$i(t),this.plan.floors.length||(this.plan.floors=[ha(1)]);let n=this.plan.floors.length-1;this.fi=this.cfg.floor!=null?Math.max(0,Math.min(this.cfg.floor,n)):n,this.cut=this.cfg.floor!=null,this.sel=null,this.draft=[],this.panelRoom=null;let s=this._hass?.user?.is_admin!==!1&&this.cfg.mode!=="card"&&!!this._hass;this.$("#edit").classList.toggle("hidden",!s),this.renderBar(),this.rebuild3D(),e&&this.fit(),this.draw2D()}async save(){try{await this._hass.callWS({type:"homeplan3d/save",plan:this.plan}),this.msg("\u2705 Gespeichert")}catch(t){this.msg("\u274C Speichern fehlgeschlagen: "+(t.message||t.code))}}msg(t){let e=document.createElement("div");e.className="msg",e.textContent=t,this.shadowRoot.querySelector(".wrap").append(e),setTimeout(()=>e.remove(),3500)}get floor(){return this.plan.floors[this.fi]}pushUndo(){this.undoStack.push(JSON.stringify(this.plan)),this.undoStack.length>40&&this.undoStack.shift()}undo(){let t=this.undoStack.pop();t&&(this.plan=$i(JSON.parse(t)),this.fi=Math.min(this.fi,this.plan.floors.length-1),this.sel=null,this.draft=[],this.renderBar(),this.rebuild3D(),this.renderSide(),this.draw2D())}changed({side:t=!1}={}){this.rebuild3D(),this.draw2D(),t&&this.renderSide()}renderBar(){let t=this.$("#floors");t.innerHTML="";let e=(o,a,l,c)=>{let h=document.createElement("button");return h.textContent=o,h.className=a||"",c&&(h.title=c),h.onclick=l,h};!this.editing&&this.plan.floors.length>1&&t.append(e("Alle",this.cut?"":"on",()=>{this.cut=!1,this.renderBar(),this.rebuild3D(),this.flyToFloor(null)},"Ganzes Geb\xE4ude"));for(let o=this.plan.floors.length-1;o>=0;o--){let a=this.plan.floors[o];t.append(e(a.name,o===this.fi&&(this.editing||this.cut)?"on":"",()=>{this.fi=o,this.cut=!0,this.sel=null,this.renderBar(),this.rebuild3D(),this.draw2D(),this.renderSide(),this.flyToFloor(o)}))}this.editing&&t.append(e("+","",()=>{this.pushUndo(),this.plan.floors.push(ha(this.plan.floors.length+1)),this.fi=this.plan.floors.length-1,this.renderBar(),this.changed({side:!0})},"Etage hinzuf\xFCgen"));let n=this.$("#toggles");n.innerHTML="",br(this.plan).length&&n.append(e("Dach",this.showRoof?"on":"",()=>{this.showRoof=!this.showRoof,this.renderBar(),this.rebuild3D()})),this.plan.site?.buildings?.length&&n.append(e("Gel\xE4nde",this.showSite?"on":"",()=>{this.showSite=!this.showSite,this.renderBar(),this.rebuild3D(),this.draw2D()},"Weitere Geb\xE4ude auf dem Flurst\xFCck")),this.features.forEach(o=>{o.available()&&(n.append(e(o.label,o.on?"on":"",()=>this.setFx(o.id,!o.on),o.title)),o.on&&o.toolbar().forEach(a=>n.append(e(a.label,a.on?"on":"",a.fn,a.title))))}),this.features.some(o=>o.usesHolo&&o.available())&&n.append(e("\u25C8 Karten",this.holo?"on":"",()=>{this.holo=!this.holo,this.renderBar(),this.updateStates()},"Karten und Hologramme im Raum ein- oder ausblenden")),this.hasClimate&&(n.append(e("\u{1F321} Klima",this.showClimate?"on":"",()=>{this.showClimate=!this.showClimate,this.renderBar(),this.updateStates()},"Temperatur und Luftfeuchte in den R\xE4umen")),n.append(e("\u{1F525} W\xE4rme",this.heatmap?"on":"",()=>{this.heatmap=!this.heatmap,this.renderBar(),this.updateStates()},"R\xE4ume nach Temperatur einf\xE4rben"))),n.append(e(this.theme==="day"?"\u2600":"\u{1F319}","",()=>{this.theme=this.theme==="day"?"neon":"day",this.renderBar(),this.rebuild3D()},"Darstellung wechseln"));let s=this.$("#tools");s.innerHTML="",[["select","\u2196 Auswahl"],["rect","\u25AD Raum"],["room","\u2B20 Polygon"],["wall","\u25AC Wand"],["door","\u{1F6AA} T\xFCr"],["window","\u{1FA9F} Fenster"],["furn","\u{1FA91} M\xF6bel"],["device","\u{1F4A1} Ger\xE4t"],["building","\u{1F3E0} Geb\xE4ude"],["erase","\u{1F5D1}"]].forEach(([o,a])=>s.append(e(a,this.tool===o?"on":"",()=>{this.tool=o,this.draft=[],this.renderBar(),this.renderSide(),this.draw2D()}))),s.append(e("\u2922","",()=>{this.fit2D(),this.draw2D()},"Ansicht einpassen")),s.append(e("\u2699 Funktionen","",()=>this.openFxMenu(),"Wetter, Energie, Auto, Kameras \u2026 einrichten"))}setEditing(t){this.editing=t,this.panelRoom=null;for(let[e,n]of[["#tools",t],["#save",t],["#undo",t]])this.$(e).classList.toggle("hidden",!n);this.edCanvas.classList.toggle("hidden",!t),this.$("#side").classList.toggle("hidden",!t),this.$("#edit").classList.toggle("on",t),this.renderBar(),this.renderSide(),this.rebuild3D(),this.resize(),t&&this.fit2D(),this.draw2D()}fit2D(){let t=this.edCanvas;if(!t.width)return;let e=this.floor.rooms.flatMap(a=>a.points);if(e.length||(e=this.plan.floors.flatMap(a=>a.rooms.flatMap(l=>l.points))),e.length||(e=(this.plan.site?.buildings||[]).flatMap(a=>a.points)),!e.length)return;let[n,s,r,o]=Mi(e);this.cam2.x=(n+r)/2,this.cam2.z=(s+o)/2,this.cam2.s=Math.max(5,Math.min(120,Math.min(t.width/((r-n)*1.15+1),t.height/((o-s)*1.15+1))))}hint(t){this.$("#hint").textContent=t||""}formHtml(t,e){return e.map(n=>{let s=L_(t,n.k)??n.def,r=`data-k="${n.k}" data-t="${n.t||"text"}"`;return n.t==="select"?`<label>${n.l}</label><select ${r}>${n.o.map(o=>{let[a,l]=Array.isArray(o)?o:[o,o];return`<option value="${vn(a)}" ${a===s?"selected":""}>${vn(l)}</option>`}).join("")}</select>`:n.t==="checkbox"?`<label><input type="checkbox" ${r} ${s?"checked":""}>${n.l}</label>`:n.t==="number"?`<label>${n.l}</label><input ${r} type="number" step="${n.s||.05}" value="${s??""}" placeholder="${n.p||""}">`:`<label>${n.l}</label><input ${r} ${n.t==="color"?'type="color"':""} ${n.list?`list="${n.list}"`:""} ${n.p?`placeholder="${vn(n.p)}"`:""} value="${vn(s??"")}">`}).join("")}bindForm(t,e,n){t.querySelectorAll("[data-k]").forEach(s=>{s._bound||(s._bound=!0,s.onchange=()=>{this.pushUndo();let r=s.dataset.t,o=s.value;r==="number"?o=s.value===""?null:+s.value:r==="checkbox"?o=s.checked:o===""&&(o=null),D_(e,s.dataset.k,o),n?.(s),this.changed()})})}renderSide(){let t=this.$("#side");if(!this.editing)return;let e=this._hass,n=this.floor,s={select:"Ziehen verschiebt \xB7 Entf l\xF6scht \xB7 leere Fl\xE4che aufziehen w\xE4hlt mehrere \xB7 Umschalt+Klick f\xFCgt hinzu \xB7 Strg+Z",rect:"Diagonal aufziehen",room:"Punkte klicken, Doppelklick schlie\xDFt",wall:"Start/Ende klicken, Esc beendet",door:"Auf eine Wand klicken",window:"Auf eine Wand klicken",furn:"Typ w\xE4hlen, dann in den Raum klicken",device:"Entit\xE4t w\xE4hlen, dann in den Raum klicken",building:"Geb\xE4ude auf dem Gel\xE4nde diagonal aufziehen",erase:"Element anklicken"};this.hint(s[this.tool]);let o=`<datalist id="ents">${Object.keys(e?.states||{}).sort().map(p=>`<option value="${p}">`).join("")}</datalist>`;o+=`<h4>Etage</h4><div data-obj="floor">${this.formHtml(n,[{k:"name",l:"Name"},{k:"height",l:"Raumh\xF6he (m)",t:"number"},{k:"elevation",l:"H\xF6he Fu\xDFboden (m, leer = automatisch)",t:"number",p:"auto"}])}</div>`,o+=`<label><input type="checkbox" data-plan="autoDevices" ${this.plan.settings.autoDevices?"checked":""}>Ger\xE4te aus HA-Bereichen automatisch platzieren</label>`,o+=`<label>Raster</label><select id="grid">${[.05,.1,.25,.5].map(p=>`<option ${p===this.grid?"selected":""}>${p}</option>`).join("")}</select>`,(this.tool==="device"||this.tool==="door"||this.tool==="window")&&(o+=`<h4>${this.tool==="device"?"Ger\xE4t":"Kontaktsensor"}</h4><label>Entit\xE4t</label><input id="pent" list="ents" value="${vn(this.pendingEntity)}" placeholder="light.wohnzimmer">`),this.tool==="furn"&&(o+=`<h4>M\xF6bel</h4><label>Typ</label><select id="ftype">${$d.map(p=>`<option ${p===this.furnType?"selected":""}>${p}</option>`).join("")}</select>`);let a=this.sel,l=(p,x)=>p.find(g=>g.id===x),c=null,h="";if(this.multi.length>1){let p={};this.multi.forEach(g=>p[g.kind]=(p[g.kind]||0)+1);let x={device:"Ger\xE4te",furniture:"M\xF6bel",opening:"\xD6ffnungen",room:"R\xE4ume",wall:"W\xE4nde",site:"Geb\xE4ude"};h+=`<h4>Auswahl</h4><div style="font-size:12px;opacity:.85">${this.multi.length} Elemente: ${Object.entries(p).map(([g,m])=>`${m} ${x[g]||g}`).join(", ")}</div>
        <button class="full" id="multi-del">\u{1F5D1} Auswahl entfernen</button>
        <div style="font-size:11px;opacity:.6;margin-top:4px">Automatisch platzierte Ger\xE4te werden ausgeblendet. Ziehen verschiebt die ganze Auswahl.</div>`}else if(a?.kind==="room"){if(c=l(n.rooms,a.id),c){let p=Object.values(e?.areas||{}),x=this.areaClimate(c.area);h+=`<h4>Raum</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"area",l:"HA-Bereich (Ger\xE4te automatisch)",t:"select",o:[["","\u2013 keiner \u2013"],...p.map(g=>[g.area_id,g.name]),...c.area&&!p.some(g=>g.area_id===c.area)?[[c.area,c.area]]:[]]},{k:"color",l:"Farbe",t:"color"},{k:"dy",l:"Boden h\xF6her / tiefer als die Etage (m, tiefer = negativ)",t:"number",s:.05,p:"0"},{k:"autoDevices",l:"Ger\xE4te aus dem HA-Bereich automatisch platzieren",t:"checkbox",def:!0},{k:"climate.temperature",l:"Temperatur-Sensor",list:"ents",p:x.temperature?`automatisch: ${x.temperature}`:""},{k:"climate.humidity",l:"Feuchte-Sensor",list:"ents",p:x.humidity?`automatisch: ${x.humidity}`:""},{k:"climate.co2",l:"CO\u2082-Sensor",list:"ents",p:x.co2?`automatisch: ${x.co2}`:""}])}<div class="hint2" style="opacity:.6;font-size:11px;margin-top:6px">${Jo(c.points).toFixed(1)} m\xB2</div>`}}else if(a?.kind==="wall")c=l(n.walls,a.id),c&&(h+=`<h4>Wand</h4>${this.formHtml(c,[{k:"t",l:"St\xE4rke (m)",t:"number",p:"auto"},{k:"h",l:"H\xF6he (m, leer = voll)",t:"number"}])}`);else if(a?.kind==="device"){if(c=l(n.devices,a.id),c)h+=`<h4>Ger\xE4t</h4>${this.formHtml(c,[{k:"entity",l:"Entit\xE4t",list:"ents"},{k:"name",l:"Anzeigename"},{k:"showName",l:"Name anzeigen",t:"checkbox"},{k:"y",l:"H\xF6he (m)",t:"number",p:"auto"},...Ze(c.entity)==="camera"?[{k:"rot",l:"Blickrichtung (\xB0 im Uhrzeigersinn, 0 = im Plan nach unten)",t:"number",s:5,p:"0"},{k:"tilt",l:"Neigung nach unten (\xB0)",t:"number",s:5,p:"25"},{k:"fov",l:"\xD6ffnungswinkel (\xB0)",t:"number",s:5,p:"90"},{k:"reach",l:"Reichweite im Plan (m)",t:"number",s:.5,p:"7"},{k:"motion",l:"Bewegungsmelder (leer = am Kamera-Ger\xE4t suchen)",list:"ents"}]:[]])}`;else if(this.isAuto(a)){let p=this.itemOf(a);p&&(h+=`<h4>Ger\xE4t (automatisch)</h4><div style="font-size:12px;opacity:.85;word-break:break-all">${vn(p.entity)}</div>
          <div style="font-size:11px;opacity:.6;margin:4px 0">Aus dem HA-Bereich des Raums platziert. Ziehen setzt es fest, Entf blendet es aus.</div>
          <button class="full" id="auto-pin">\u{1F4CC} Festsetzen</button><button class="full" id="auto-hide">\u{1F648} Ausblenden</button>`)}}else a?.kind==="opening"?(c=l(n.openings,a.id),c&&(h+=`<h4>${c.type==="door"?"T\xFCr":"Fenster"}</h4>${this.formHtml(c,[{k:"w",l:"Breite (m)",t:"number"},{k:"h",l:"H\xF6he (m)",t:"number"},{k:"sill",l:"Br\xFCstung (m)",t:"number"},{k:"style",l:"Art",t:"select",o:[["","Standard"],"front","interior","passage"]},{k:"hinge",l:"Angel",t:"select",o:["left","right"]},{k:"swing",l:"\xD6ffnet nach",t:"select",o:["in","out"]},{k:"entity",l:"Kontaktsensor",list:"ents"}])}`)):a?.kind==="furniture"?(c=l(n.furniture,a.id),c&&(h+=`<h4>M\xF6bel</h4>${this.formHtml(c,[{k:"type",l:"Typ",t:"select",o:$d},{k:"name",l:"Name"},{k:"color",l:"Farbe (leer = Standard)",t:"color"},...c.type==="stairs_u"?[{k:"landings",l:"Podeste (1 = zwei L\xE4ufe, 2 = drei L\xE4ufe um die Ecken)",t:"number",s:1,p:"1"},{k:"flip",l:"Gespiegelt (Anfang auf der anderen Seite)",t:"checkbox"}]:[],...c.type==="car"?[{k:"presence",l:"Anwesenheit (Schalter: an = da, aus = weg)",list:"ents"}]:[],...c.type==="car"?[{k:"body",l:"Karosserie",t:"select",o:[["","einfach"],["sedan","Limousine"],["wagon","Kombi"],["hatch","Schr\xE4gheck / Crossover"],["van","Kastenwagen"],["roadster","Roadster"]]}]:[],{k:"rot",l:"Drehung (\xB0)",t:"number",s:5},{k:"w",l:"Breite",t:"number"},{k:"d",l:"Tiefe",t:"number"},{k:"h",l:"H\xF6he",t:"number"},{k:"mountY",l:"H\xF6he \xFCber Boden",t:"number",p:"0"},{k:"entity",l:"Entit\xE4t (Zustand/Leuchten)",list:"ents"},{k:"power",l:"Leistungs-Sensor",list:"ents"}])}${c.type==="tv"||c.type==="monitor"?'<button class="full" id="scr-edit">\u{1F5A5} Bildschirm-Regeln \u2026</button>':""}${c.type==="car"?'<button class="full" id="car-edit">\u{1F697} Auto zuordnen \u2026</button>':""}`)):a?.kind==="site"&&(c=l(this.plan.site?.buildings||[],a.id),c&&(h+=`<h4>Geb\xE4ude</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"levels",l:"Geschosse (richten sich nach den Haus-Etagen)",t:"number",s:1,p:"1"},{k:"height",l:"Traufh\xF6he (m)",t:"number",s:.1},{k:"roof.type",l:"Dach",t:"select",o:[["flat","Flach"],["gable","Satteldach"],["shed","Pultdach"]]},{k:"roof.pitch",l:"Neigung (\xB0)",t:"number",s:1},...c.roof?.type==="shed"?[{k:"roof.high",l:"Hohe Seite (zum Nachbarn)",t:"select",o:[["south","S\xFCd"],["north","Nord"],["east","Ost"],["west","West"]],def:"south"}]:[],{k:"visible",l:"Sichtbar",t:"checkbox"}])}${c.roof?.type==="shed"?`${this.partsHtml(c)}<h4>Photovoltaik auf dem Dach</h4>${this.formHtml(c,[{k:"pv.enabled",l:"PV-Module auf dem Dach",t:"checkbox"},{k:"pv.fill",l:"Dachfl\xE4che f\xFCllen",t:"checkbox",def:!0},{k:"pv.orientation",l:"Modulausrichtung",t:"select",o:[["auto","automatisch (mehr Module)"],["landscape","quer"],["portrait","hochkant"]],def:"auto"},{k:"pv.rows",l:"Reihen (ohne F\xFCllen)",t:"number",s:1},{k:"pv.cols",l:"Module je Reihe (ohne F\xFCllen)",t:"number",s:1},{k:"pv.over",l:"Lage entlang des Dachs",t:"select",o:[["","Mitte"],...this.partOptions(c)]},{k:"pv.edge",l:"Lage am Hang",t:"select",o:[["center","Mitte"],["low","unten an der Traufe"],["high","oben am First"]],def:"center"},{k:"pv.wp",l:"Leistung je Modul (Wp)",t:"number",s:10,p:"420"},{k:"pv.entity",l:"Leistungs-Sensor dieser Anlage",list:"ents"}])}`:""}`));h&&(o+=`<div data-obj="sel">${h}</div>`);let u=this.deviceList(n),d=u.filter(p=>!p.explicit).length,f=(this.plan.settings.hiddenEntities||[]).length;o+=`<h4>Ger\xE4te dieser Etage (${u.length})</h4>
      <input id="devfilter" placeholder="Filter \u2026" value="${vn(this._devFilter||"")}">
      <div id="devlist" style="max-height:220px;overflow:auto;margin-top:4px"></div>
      <div class="row"><button id="dev-selall">Alle w\xE4hlen</button><button id="dev-hideauto" ${d?"":"disabled"}>Auto ausblenden (${d})</button></div>
      <button class="full" id="dev-restore" ${f?"":"disabled"}>\u21BA Ausgeblendete zeigen (${f})</button>`,o+=`<h4>Import</h4>
      <button class="full" id="imp-live">\u21E9 Von NeonPlan 3D \xFCbernehmen</button>
      <button class="full" id="imp-file">\u{1F4C2} Datei laden (NeonPlan / Plan / Gel\xE4nde)</button>
      <button class="full" id="exp-file">\u2B06 Plan als Datei sichern</button>`,t.innerHTML=o,this.bindForm(t.querySelector('[data-obj="floor"]'),n,p=>{p.dataset.k==="name"&&this.renderBar()}),c&&this.bindForm(t.querySelector('[data-obj="sel"]'),c,p=>{p.dataset.k==="levels"&&a?.kind==="site"&&(Vc(this.plan,c,c.levels||1),this.renderSide()),p.dataset.k==="height"&&a?.kind==="site"&&(c.storeys=(c.storeys||[]).filter(x=>x<c.height-.3)),(p.dataset.k==="type"||p.dataset.k==="style"||p.dataset.k==="entity"&&a?.kind==="device")&&this.renderSide()}),t.querySelector("[data-plan]")?.addEventListener("change",p=>{this.plan.settings.autoDevices=p.target.checked,this.changed()}),t.querySelector("#grid").onchange=p=>{this.grid=+p.target.value},t.querySelector("#pent")?.addEventListener("change",p=>this.pendingEntity=p.target.value),t.querySelector("#ftype")?.addEventListener("change",p=>this.furnType=p.target.value),a?.kind==="site"&&c&&this.bindParts(t,c),t.querySelector("#scr-edit")?.addEventListener("click",()=>Rd(this,c)),t.querySelector("#car-edit")?.addEventListener("click",()=>this.features.find(p=>p instanceof Os).openCarSettings(c)),this.fillDevList(),t.querySelector("#devfilter").oninput=p=>{this._devFilter=p.target.value,this.fillDevList()},t.querySelector("#dev-selall").onclick=()=>{this.multi=this.deviceList(this.floor).map(p=>({kind:"device",id:p.id})),this.sel=this.multi.length===1?this.multi[0]:null,this.renderSide(),this.draw2D()},t.querySelector("#dev-hideauto").onclick=()=>{this.pushUndo(),this.deviceList(this.floor).filter(p=>!p.explicit).forEach(p=>this.hideEntity(p.entity)),this.changed({side:!0})},t.querySelector("#dev-restore").onclick=()=>{this.pushUndo(),this.plan.settings.hiddenEntities=[],this.changed({side:!0})},t.querySelector("#multi-del")?.addEventListener("click",()=>this.deleteHits([...this.multi])),t.querySelector("#auto-hide")?.addEventListener("click",()=>this.deleteHits([a])),t.querySelector("#auto-pin")?.addEventListener("click",()=>{let p=this.itemOf(a);if(!p)return;this.pushUndo();let x={id:yn(),entity:p.entity,x:p.x,z:p.z};n.devices.push(x),this.sel={kind:"device",id:x.id},this.changed({side:!0})}),t.querySelector("#imp-live").onclick=()=>this.importLive(),t.querySelector("#imp-file").onclick=()=>this.importFile(),t.querySelector("#exp-file").onclick=()=>this.exportFile()}siteLength(t){return yr(t.points,t.roof,this.plan.site?.north??0).L}ensureParts(t){return!t.parts&&t.layout&&(t.parts=Ld(this.siteLength(t),t.layout),delete t.layout),t.parts||[]}partOptions(t){return this.ensureParts(t).map((e,n)=>[`#${n}`,`${n+1}. ${e.name||Fs[e.type]||e.type}`])}partsHtml(t){let e=this.ensureParts(t),n=Object.entries(Fs);return`<h4>Aufteilung (West \u2192 Ost)</h4>${e.map((r,o)=>`<div class="prow" data-i="${o}">
      <div class="l1"><select data-f="type">${n.map(([a,l])=>`<option value="${a}" ${r.type===a?"selected":""}>${l}</option>`).join("")}</select>
        <button data-a="up" title="nach links (West)">\u2190</button><button data-a="down" title="nach rechts (Ost)">\u2192</button><button data-a="del" title="Teil entfernen">\u{1F5D1}</button></div>
      <div class="l2">${r.type==="carport"?`<input data-f="stalls" type="number" step="1" value="${r.stalls??4}" title="Stellpl\xE4tze"><input data-f="stallWidth" type="number" step="0.1" value="${r.stallWidth??2.9}" title="Breite je Stellplatz (m)">`:`<input data-f="len" type="number" step="0.1" value="${r.len??""}" placeholder="L\xE4nge: Rest" title="L\xE4nge (m), leer = Rest">`}
        ${r.type==="garage"||r.type==="bike"?`<input data-f="door" type="number" step="0.1" value="${r.door??""}" placeholder="T\xFCr (m)" title="T\xFCrbreite (m)">`:""}</div>
      ${r.type==="garage"||r.type==="bike"?`<div class="l3"><select data-f="doorSide" title="An welcher Wand das Tor sitzt">${Object.entries(Id).map(([a,l])=>`<option value="${a}" ${(r.doorSide||"low")===a?"selected":""}>Tor: ${l}</option>`).join("")}</select></div>`:r.type==="carport"?`<div class="l3"><select data-f="numberFrom" title="Von welchem Ende die Stellpl\xE4tze gez\xE4hlt werden"><option value="east" ${r.numberFrom!=="west"?"selected":""}>Nummer 1 im Osten</option><option value="west" ${r.numberFrom==="west"?"selected":""}>Nummer 1 im Westen</option></select></div>`:""}</div>`).join("")}<button class="full" id="part-add">+ Teil hinzuf\xFCgen</button>
      <div style="opacity:.6;font-size:11px;margin-top:4px">L\xE4nge leer = Rest \xB7 Gesamtl\xE4nge ${this.siteLength(t).toFixed(1)} m \xB7 Carport: Stellpl\xE4tze \xD7 Breite</div>`}bindParts(t,e){t.querySelectorAll(".prow").forEach(n=>{let s=+n.dataset.i;n.querySelectorAll("[data-f]").forEach(r=>{r.onchange=()=>{this.pushUndo();let o=e.parts[s],a=r.dataset.f;a==="type"?(o.type=r.value,o.type==="carport"&&(o.stalls??=4,o.stallWidth??=2.9)):a==="doorSide"||a==="numberFrom"?r.value===(a==="doorSide"?"low":"east")?delete o[a]:o[a]=r.value:o[a]=r.value===""?null:+r.value,this.changed({side:a==="type"})}}),n.querySelectorAll("[data-a]").forEach(r=>{r.onclick=()=>{this.pushUndo();let o=r.dataset.a;if(o==="del")e.parts.splice(s,1);else{let a=o==="up"?s-1:s+1;a>=0&&a<e.parts.length&&([e.parts[s],e.parts[a]]=[e.parts[a],e.parts[s]])}this.changed({side:!0})}})}),t.querySelector("#part-add")?.addEventListener("click",()=>{this.pushUndo(),(e.parts||=[]).push({type:"garage",len:null}),this.changed({side:!0})})}fillDevList(){let t=this.$("#devlist");if(!t)return;let e=(this._devFilter||"").toLowerCase(),n=this._hass?.states||{},s=o=>o.name||n[o.entity]?.attributes?.friendly_name||o.entity,r=this.deviceList(this.floor).filter(o=>!e||o.entity.toLowerCase().includes(e)||s(o).toLowerCase().includes(e));t.innerHTML="",r.slice(0,300).forEach(o=>{let a=document.createElement("div");a.className="dev"+(this.isSel(o.id)?" on":""),a.innerHTML=`<div style="min-width:0;flex:1"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${vn(s(o))}</b><span class="s">${o.explicit?"":"auto \xB7 "}${vn(o.entity)}</span></div><button title="Entfernen" data-del>\u{1F5D1}</button>`,a.onclick=l=>{if(l.target.closest("[data-del]")){this.deleteHits([{kind:"device",id:o.id}]);return}this.sel={kind:"device",id:o.id},this.multi=[],this.cam2.x=o.x,this.cam2.z=o.z,this.renderSide(),this.draw2D()},t.append(a)}),r.length||(t.innerHTML='<div style="opacity:.6;padding:6px">Keine Ger\xE4te</div>')}async importLive(){try{let t=await this._hass.callWS({type:"neonplan3d/building/get"});this.applyImport(t,"NeonPlan 3D (live)")}catch(t){this.msg("NeonPlan 3D nicht erreichbar: "+(t.message||t.code||t))}}importFile(){let t=document.createElement("input");t.type="file",t.accept=".json,application/json",t.onchange=async()=>{try{let e=JSON.parse(await t.files[0].text());this.applyImport(e,t.files[0].name)}catch(e){this.msg("Datei nicht lesbar: "+e.message)}},t.click()}exportFile(){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(this.plan,null,1)],{type:"application/json"})),t.download="homeplan3d-plan.json",t.click()}applyImport(t,e){let n=t?.result??t,s=this.plan.floors.some(c=>c.rooms.length||c.walls.length);if(n?.buildings&&!n.floors){this.pushUndo(),this.plan.site={...this.plan.site||{},...n},this.plan=$i(this.plan),this.showSite=!0,this.renderBar(),this.changed({side:!0}),this.fit(),this.msg(`${n.buildings.length} Geb\xE4ude aus ${e} \xFCbernommen`);return}let r,o=n?.building??n,a=o?.settings&&("wall_exterior"in o.settings||"buttons"in o.settings)||o?.floors?.some(c=>"placements"in c||"cut_height"in c);try{r=a?Wd(t):$i(Ko(n))}catch(c){this.msg("Import fehlgeschlagen: "+c.message);return}if(s&&!confirm("Den vorhandenen Plan durch den importierten ersetzen?"))return;this.pushUndo();let l=this.plan.site;!r.site&&l&&(r.site=l),this.setPlan(r,{fit:!0}),this.editing&&this.renderSide(),this.msg(`${r.floors.length} Etagen aus ${e} \xFCbernommen \u2013 mit \u{1F4BE} speichern`)}deviceList(t){let e=this._hass,n=t.devices.map(o=>({...o,explicit:!0}));if(!e?.entities||!this.plan.settings.autoDevices)return n;let s=new Set(this.plan.floors.flatMap(o=>o.devices.map(a=>a.entity))),r=new Set(this.plan.settings.hiddenEntities||[]);return t.rooms.forEach(o=>{if(!o.area||o.autoDevices===!1)return;let a=Object.keys(e.states).sort().filter(g=>{if(!Xd.includes(Ze(g)))return!1;let m=e.entities[g];return!m||m.hidden?!1:(m.area_id||e.devices?.[m.device_id]?.area_id)===o.area}),[l,c,h,u]=Mi(o.points),d=Math.max(1,Math.floor((h-l)/.8)),f=0,p=0,x=[];for(;x.length<a.length&&p++<400;){let g=f%d,m=Math.floor(f/d),M=[l+.5+g*.8,c+.5+m*.8];if(f++,M[1]>u){x.push([(l+h)/2,(c+u)/2]);continue}un(M,o.points)&&x.push(M)}a.forEach((g,m)=>{!s.has(g)&&!r.has(g)&&n.push({id:"auto:"+g,entity:g,x:x[m][0],z:x[m][1],explicit:!1})})}),n}climateFor(t){let e=t.climate||{},n=t.area?this.areaClimate(t.area):{};return{temperature:e.temperature||n.temperature||null,humidity:e.humidity||n.humidity||null,co2:e.co2||n.co2||null}}areaClimate(t){let e={temperature:null,humidity:null,co2:null},n=this._hass;if(!t||!n?.entities)return e;let s=Object.keys(n.entities).length+"|"+Object.keys(n.states).length;if(this._areaClimate?.sig!==s&&(this._areaClimate={sig:s,map:new Map}),this._areaClimate.map.has(t))return this._areaClimate.map.get(t);let r={temperature:"temperature",humidity:"humidity",carbon_dioxide:"co2"};for(let o of Object.keys(n.states).sort()){if(Ze(o)!=="sensor")continue;let a=n.entities[o];if(!a||a.hidden||a.entity_category&&a.entity_category!=="none"||(a.area_id||n.devices?.[a.device_id]?.area_id)!==t)continue;let l=r[n.states[o].attributes?.device_class];l&&!e[l]&&(e[l]=o)}return this._areaClimate.map.set(t,e),e}updateClimate(t){let e=this._hass?.states;if(!e)return;let n=c=>{let h=c&&e[c]?parseFloat(e[c].state):NaN;return Number.isFinite(h)?h:null},s=n(t.temperature),r=n(t.humidity),o=n(t.co2),a=[];s!=null&&a.push(`${s.toFixed(1)} \xB0C`),r!=null&&a.push(`${Math.round(r)} %`),o!=null&&a.push(`${Math.round(o)} ppm`);let l=new Ot().setHSL((220-(Math.max(15,Math.min(28,s??21))-15)/13*220)/360,.85,.55);a.length&&Zi(t.sprite,a.join(" \xB7 "),s!=null?"#"+l.getHexString():"#19e6ff"),t.sprite.visible=this.showClimate&&a.length>0,this.heatmap&&s!=null?(t.mat.color.copy(l).multiplyScalar(.35),t.mat.emissive.copy(l),t.mat.emissiveIntensity=.6):(t.mat.color.copy(t.base.color),t.mat.emissive.copy(t.base.emissive),t.mat.emissiveIntensity=t.base.ei)}init3D(){this.scene=new wo,this.camera=new $e(50,1,.1,400),this.camera.position.set(14,14,18),this.renderer=new bo({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.viewEl.prepend(this.renderer.domElement),this.controls=new Wo(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI/2.02,this.controls.addEventListener("start",()=>{this._fly=null}),this.ambient=new No(8425664,.9),this.scene.add(this.ambient),this.sunLight=new Uo(16777215,.7),this.sunLight.position.set(5,18,8),this.scene.add(this.sunLight),this.labelRenderer=new $o({element:this.$("#labels")}),this.world=new ae,this.scene.add(this.world),this.ray=new Oo;let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",r=>{e={x:r.clientX,y:r.clientY,t:Date.now()}}),t.addEventListener("pointerup",r=>{if(!e)return;let o=Math.hypot(r.clientX-e.x,r.clientY-e.y)>5,a=Date.now()-e.t>500;e=null,o||this.pick3D(r,a)});let n=performance.now()/1e3,s=()=>{this._raf=requestAnimationFrame(s),this.controls.update();let r=performance.now()/1e3,o=Math.min(.1,r-n);if(n=r,this._fly){let a=this._fly;a.t=Math.min(1,a.t+o/.8);let l=a.t*a.t*(3-2*a.t);this.camera.position.lerpVectors(a.p0,a.p1,l),this.controls.target.lerpVectors(a.t0,a.t1,l),a.t>=1&&(this._fly=null)}this.dyn.forEach(a=>{a.pulse&&a.on&&a.glow.scale.setScalar(a.baseScale*(1+.05*Math.sin(r*3)))}),this.features.forEach(a=>{a.on&&a.tick(o,r)}),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)};s()}resize(){let t=this.viewEl.clientWidth,e=this.viewEl.clientHeight;t&&e&&(this.renderer.setSize(t,e,!1),this.labelRenderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix());let n=this.edCanvas;n.clientWidth&&(n.width=n.clientWidth*devicePixelRatio,n.height=n.clientHeight*devicePixelRatio,this.draw2D())}extent(){let t=this.plan.floors.flatMap(e=>e.rooms.flatMap(n=>n.points));return this.showSite&&(this.plan.site?.buildings||[]).forEach(e=>e.visible!==!1&&t.push(...e.points)),t.length?Mi(t):null}fit(){let t=this.extent();if(!t)return;let[e,n,s,r]=t,o=(e+s)/2,a=(n+r)/2,l=Math.max(s-e,r-n,4),c=_n(this.plan,this.plan.floors.length-1)/2;this.controls.target.set(o,c/2,a),this.camera.position.set(o+l*.55,c+l*.75,a+l*.95),this.cam2={x:o,z:a,s:Math.max(8,Math.min(120,500/l))}}flyToFloor(t){if(!this.camera||!this.controls)return;let e;if(t==null){let d=this.extent();if(!d)return;e=[[d[0],d[1]],[d[2],d[3]]]}else if(e=this.plan.floors[t]?.rooms.flatMap(f=>f.points),!e?.length)return;let[n,s,r,o]=Mi(e),a=Math.max(r-n,o-s,4),l=t==null?_n(this.plan,this.plan.floors.length-1)/2:_n(this.plan,t)+(this.plan.floors[t].height||2.6)/2,c=new z((n+r)/2,Math.max(0,l),(s+o)/2),h=this.camera.position.clone().sub(this.controls.target);h.lengthSq()<1e-6&&h.set(.55,.75,.95),h.normalize(),h.y<.35&&(h.y=.35,h.normalize());let u=a*(t==null?1.35:1.15)+3;this._fly={t:0,p0:this.camera.position.clone(),p1:c.clone().addScaledVector(h,u),t0:this.controls.target.clone(),t1:c}}rebuild3D(){if(!this.world)return;this.features.forEach(a=>a.dispose()),this.$("#labels")?.replaceChildren(),this.world.traverse(a=>{a.geometry?.dispose(),a.material&&!a.material.map&&a.material.dispose?.()}),this.world.clear();let t=Yi[this.theme]||Yi.neon;this.scene.background=new Ot(t.bg),this.scene.fog=new Mo(t.bg,60,160);let e=this.editing||this.cut?this.fi:1/0,n=Vd(this.plan,{theme:this.theme,maxFloor:e,showRoof:this.showRoof,showSite:this.showSite,devicesFor:a=>this.deviceList(a),climateFor:a=>this.climateFor(a),glowTex:()=>this.glowTex(),label:(a,l)=>this.label(a,l)});this.world.add(n.root),this.dyn=n.dyn,this.pickables=n.pickables,this.anchors=n.anchors,this.features.forEach(a=>{a.group=new ae,a.on=this.fxOn(a.id),a.group.visible=a.on,this.world.add(a.group),a.build(n.anchors)});let s=this.dyn.some(a=>a.kind==="roomclimate"),r=this.features.map(a=>a.available()?"1":"0").join("");(s!==this.hasClimate||r!==this._fxSig)&&(this.hasClimate=s,this._fxSig=r,this.renderBar());let o=this.extent();if(o){let a=new ko(120,120,this.theme==="day"?12108502:1912919,this.theme==="day"?13620966:1055798);a.position.set((o[0]+o[2])/2,this.plan.site?.groundY!=null?this.plan.site.groundY-.02:Math.min(0,_n(this.plan,0))-(this.plan.settings.slab??.18)-.02,(o[1]+o[3])/2),this.world.add(a)}this.updateStates()}glowTex(){if(this._glow)return this._glow;let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this._glow=new Ye(t)}label(t,e){let n=e+"|"+t,s=this._labels.get(n);if(!s){let o=document.createElement("canvas");o.width=384,o.height=64;let a=o.getContext("2d");a.font="bold 30px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle=Yi[e]?.text||"#dfe8ff",a.shadowColor=Yi[e]?.glow||"#19e6ff",a.shadowBlur=8,a.fillText(t,192,32,370),s=new Ye(o),this._labels.set(n,s)}let r=new Gt(new ii(3,.5),new Ge({map:s,transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=5,r}updateStates(){let t=this.getStates();if(t){this.features.forEach(e=>{e.on&&e.update(t)});for(let e of this.dyn){if(e.kind==="roomclimate"){this.updateClimate(e);continue}let n=t[e.entity];if(!n)continue;let s=!I_.includes(n.state);if(e.on=s,e.kind==="opening"){let r=["on","open","opening","tilted"].includes(n.state);e.pivot&&(e.pivot.rotation.y=r?e.sign*e.maxAngle:0),e.mat&&(e.mat.emissiveIntensity=r?1.2:.5,e.mat.opacity=r?.35:e.type==="door"?.75:.35)}else if(e.kind==="value"){let r=parseFloat(n.state);if(Number.isNaN(r)){e.sprite.visible=!1;continue}let o=n.attributes.unit_of_measurement||"",a=o==="W"&&Math.abs(r)>=1e3?`${(r/1e3).toFixed(2)} kW`:`${Math.round(r*10)/10} ${o}`;Zi(e.sprite,a);let l=this.features.some(c=>c.id==="energy"&&c.on&&c.available())&&this.holo;e.sprite.visible=!l&&(e.always||Math.abs(r)>5)}else if(e.kind==="solar"){let r=parseFloat(n.state)||0;e.mat.emissiveIntensity=.15+Math.min(1,r/e.wp)*1.2}else if(e.kind==="furniture")e.glow.visible=s,e.mats.forEach(r=>r.emissiveIntensity=s?.9:.18);else if(e.kind==="camera")e.glow.visible=!1,e.mesh.material.emissive.setHex(n.state==="unavailable"?0:1697535),e.mesh.material.emissiveIntensity=.55;else{let r=new Ot(16765066),o=n.attributes;o.rgb_color?r=new Ot(`rgb(${o.rgb_color.join(",")})`):e.kind!=="light"&&(r=new Ot(1697535));let a=o.brightness!=null?o.brightness/255:1;e.glow.visible=s,e.glow.material.color.copy(r),e.glow.material.opacity=.3+.7*a,e.mesh.material.emissive.copy(s?r:new Ot(0)),e.mesh.material.emissiveIntensity=s?.4+a:0}}}}pick3D(t,e){let n=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new ht((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.camera);let s=this.ray.intersectObjects(this.pickables,!1)[0];if(!s){!this.editing&&this.panelRoom&&(this.panelRoom=null,this.$("#side").classList.add("hidden"));return}let r=s.object.userData;if(!(!this.editing&&this.features.some(o=>o.on&&(e?o.onLongPress(r,t):o.onTap(r,t)))))if(r.entity){if(e||this.editing)return this.moreInfo(r.entity);let o=Ze(r.entity);["light","switch","input_boolean","fan"].includes(o)?this._hass.callService("homeassistant","toggle",{entity_id:r.entity}):o==="cover"?this._hass.callService("cover","toggle",{entity_id:r.entity}):o==="lock"?this._hass.callService("lock",this._hass.states[r.entity]?.state==="locked"?"unlock":"lock",{entity_id:r.entity}):this.moreInfo(r.entity)}else r.room&&!this.editing&&(this.panelRoom=r.room,this.renderRoomPanel())}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}renderRoomPanel(){let t=this.$("#side"),e=this.plan.floors.find(c=>c.rooms.some(h=>h.id===this.panelRoom)),n=e?.rooms.find(c=>c.id===this.panelRoom);if(!n)return;t.classList.remove("hidden");let s=this._hass.states,r=this.deviceList(e).filter(c=>un([c.x,c.z],n.points)),o=this.climateFor(n),a=(c,h)=>c&&s[c]&&s[c].state!=="unavailable"?`${s[c].state}${h}`:null,l=[a(o.temperature," \xB0C"),a(o.humidity," %"),a(o.co2," ppm")].filter(Boolean).join(" \xB7 ");t.innerHTML=`<b>${vn(n.name)}</b>${l?`<div style="opacity:.8;margin:4px 0 6px">${l}</div>`:""}${r.length?"":"<p style='opacity:.6'>Keine Ger\xE4te</p>"}`,r.forEach(c=>{let h=s[c.entity];if(!h)return;let u=document.createElement("div"),d=h.state==="on"||h.state==="open";if(u.className="dev"+(d?" on":""),u.innerHTML=`<div><b>${vn(c.name||h.attributes.friendly_name||c.entity)}</b><br><span class="s">${vn(h.state)}</span></div>`,Ze(c.entity)==="light"){let f=document.createElement("input");f.type="range",f.min=1,f.max=255,f.style.width="70px",f.value=h.attributes.brightness||(d?255:1),f.onclick=p=>p.stopPropagation(),f.onchange=()=>this._hass.callService("light","turn_on",{entity_id:c.entity,brightness:+f.value}),u.append(f)}u.onclick=()=>["light","switch","input_boolean","fan"].includes(Ze(c.entity))?this._hass.callService("homeassistant","toggle",{entity_id:c.entity}):this.moreInfo(c.entity),u.oncontextmenu=f=>{f.preventDefault(),this.moreInfo(c.entity)},t.append(u)})}initEditor(){let t=this.edCanvas;this.mouse=[0,0];let e=l=>[(l[0]-this.cam2.x)*this.cam2.s+t.width/2,(l[1]-this.cam2.z)*this.cam2.s+t.height/2],n=(l,c)=>[(l*devicePixelRatio-t.width/2)/this.cam2.s+this.cam2.x,(c*devicePixelRatio-t.height/2)/this.cam2.s+this.cam2.z];this.w2s=e;let s=l=>{let c=t.getBoundingClientRect();return[l.clientX-c.left,l.clientY-c.top]},r=(l,c=!0)=>{let h=n(...s(l));return c&&!l.altKey?[mr(h[0],this.grid),mr(h[1],this.grid)]:h},o=null,a=null;t.addEventListener("wheel",l=>{l.preventDefault();let c=n(...s(l));this.cam2.s=Math.max(5,Math.min(250,this.cam2.s*(l.deltaY<0?1.12:.89)));let h=n(...s(l));this.cam2.x+=c[0]-h[0],this.cam2.z+=c[1]-h[1],this.draw2D()},{passive:!1}),t.addEventListener("pointerdown",l=>{if(t.setPointerCapture(l.pointerId),t.focus(),l.button===1||l.button===2){a={x:l.clientX,y:l.clientY,cx:this.cam2.x,cz:this.cam2.z};return}let c=r(l),h=r(l,!1),u=this.floor,d=this.tool;if(d==="select"){let f=this.hit2D(h);if(l.shiftKey&&f){let p=this.multi.length?this.multi:this.sel?[this.sel]:[];this.multi=p.some(x=>x.id===f.id)?p.filter(x=>x.id!==f.id):[...p,f],this.sel=this.multi.length===1?this.multi[0]:null}else if(f){let p=this.multi.length>1&&this.multi.some(g=>g.id===f.id);p||(this.multi=[],this.sel=f),o={items:(p?this.multi:[f]).map(g=>({hit:g,orig:this.snapshotFor(g)})),start:c,undone:!1}}else this.sel=null,this.multi=[],o={marquee:h};this.renderSide(),this.draw2D()}else if(d==="erase"){let f=this.hit2D(h);f&&this.deleteHits([f])}else if(d==="rect"||d==="building")o={rect:c};else if(d==="room")this.draft.length>2&&Math.hypot(c[0]-this.draft[0][0],c[1]-this.draft[0][1])<.01?this.finishRoom():this.draft.push(c);else if(d==="wall")this.draft.length?(this.pushUndo(),u.walls.push({id:yn(),a:this.draft[0],b:c,t:null,h:null}),this.draft=[c],this.changed()):this.draft=[c];else if(d==="door"||d==="window")this.placeOpening(h,d);else if(d==="furn"){this.pushUndo();let[f,p,x]=qd[this.furnType]||[.6,.6,.8],g={id:yn(),type:this.furnType,x:c[0],z:c[1],rot:0,w:f,d:p,h:x};u.furniture.push(g),this.sel={kind:"furniture",id:g.id},this.changed({side:!0})}else if(d==="device"){if(!this.pendingEntity){this.hint("Erst eine Entit\xE4t im rechten Panel eingeben");return}this.pushUndo();let f={id:yn(),entity:this.pendingEntity,x:c[0],z:c[1]};u.devices.push(f),this.sel={kind:"device",id:f.id},this.changed({side:!0})}this.draw2D()}),t.addEventListener("pointermove",l=>{this.mouse=r(l),a?(this.cam2.x=a.cx-(l.clientX-a.x)*devicePixelRatio/this.cam2.s,this.cam2.z=a.cz-(l.clientY-a.y)*devicePixelRatio/this.cam2.s):o?.rect?(o.cur=this.mouse,this.rectPrev=[o.rect,this.mouse]):o?.marquee?this.marquee=[o.marquee,r(l,!1)]:o?.items&&(o.undone||(this.pushUndo(),o.undone=!0,this.pinAutos(o)),this.moveItems(o,this.mouse,r(l,!1))),this.draw2D()}),t.addEventListener("pointerup",()=>{if(o?.rect&&o.cur){let[l,c]=[o.rect,o.cur];if(Math.abs(l[0]-c[0])>=this.grid&&Math.abs(l[1]-c[1])>=this.grid){this.pushUndo();let h=[[l[0],l[1]],[c[0],l[1]],[c[0],c[1]],[l[0],c[1]]];if(this.tool==="building"){this.plan.site=this.plan.site||{buildings:[]};let u=Nd(h,this.plan.site.buildings.length+1);this.plan.site.buildings.push(u),this.showSite=!0,this.sel={kind:"site",id:u.id}}else{let u={id:yn(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:h};this.floor.rooms.push(u),this.sel={kind:"room",id:u.id}}this.tool="select",this.renderBar(),this.changed({side:!0})}}else if(o?.marquee&&this.marquee){let[l,c]=this.marquee;Math.hypot(c[0]-l[0],c[1]-l[1])*this.cam2.s/devicePixelRatio>6&&(this.selectInRect(l,c),this.renderSide())}else o?.items&&this.rebuild3D();o=null,a=null,this.rectPrev=null,this.marquee=null,this.draw2D()}),t.addEventListener("dblclick",()=>{this.tool==="room"?(this.draft.pop(),this.finishRoom()):this.tool==="wall"&&(this.draft=[])}),t.addEventListener("contextmenu",l=>l.preventDefault()),t.tabIndex=0,t.addEventListener("keydown",l=>{l.key==="Escape"&&(this.draft=[],this.draw2D()),(l.key==="Delete"||l.key==="Backspace")&&(this.multi.length||this.sel)&&this.deleteHits(this.multi.length>1?this.multi:[this.sel]),(l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="z"&&(l.preventDefault(),this.undo())})}finishRoom(){if(this.draft.length>=3){this.pushUndo();let t={id:yn(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:this.draft};this.floor.rooms.push(t),this.sel={kind:"room",id:t.id},this.tool="select",this.renderBar(),this.changed({side:!0})}this.draft=[],this.draw2D()}segs(){return ua(this.floor,this.plan.settings)}nearestWall(t,e=.6){let n=null;for(let s of this.segs()){let r=Ns(t,s.a,s.b);r.d<e+s.t/2&&(!n||r.d<n.d)&&(n={...r,s})}return n}placeOpening(t,e){let n=this.nearestWall(t);if(!n){this.hint("N\xE4her an eine Wand klicken");return}this.pushUndo();let r=mr(n.t*n.s.len,.05)/n.s.len,o={id:yn(),type:e,x:+(n.s.a[0]+(n.s.b[0]-n.s.a[0])*r).toFixed(3),z:+(n.s.a[1]+(n.s.b[1]-n.s.a[1])*r).toFixed(3),rot:n.s.rot,w:e==="door"?.9:1.2,h:e==="door"?2.1:1.3,sill:e==="door"?0:.9,hinge:"left",swing:"in"};this.pendingEntity&&Ze(this.pendingEntity)!=="light"&&(o.entity=this.pendingEntity),this.floor.openings.push(o),this.sel={kind:"opening",id:o.id},this.changed({side:!0})}hit2D(t){let e=this.floor,n=12/this.cam2.s;for(let s of this.deviceList(e))if(Math.hypot(t[0]-s.x,t[1]-s.z)<n)return{kind:"device",id:s.id};for(let s of e.openings)if(Math.hypot(t[0]-s.x,t[1]-s.z)<Math.max(n,s.w/2))return{kind:"opening",id:s.id};for(let s of[...e.furniture].reverse()){let r=t[0]-s.x,o=t[1]-s.z,a=Ee(s.rot||0),l=r*Math.cos(a)+o*Math.sin(a),c=-r*Math.sin(a)+o*Math.cos(a);if(Math.abs(l)<=(s.w||.5)/2&&Math.abs(c)<=(s.d||.5)/2)return{kind:"furniture",id:s.id}}for(let s of e.rooms){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"room",id:s.id,vertex:r}}if(this.showSite)for(let s of this.plan.site?.buildings||[]){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"site",id:s.id,vertex:r}}for(let s of e.walls)if(Ns(t,s.a,s.b).d<n)return{kind:"wall",id:s.id};for(let s of[...e.rooms].reverse())if(un(t,s.points))return{kind:"room",id:s.id};if(this.showSite){for(let s of this.plan.site?.buildings||[])if(un(t,s.points))return{kind:"site",id:s.id}}return null}itemOf(t){let e=this.floor,s={room:e.rooms,wall:e.walls,device:e.devices,opening:e.openings,furniture:e.furniture,site:this.plan.site?.buildings||[]}[t.kind]?.find(r=>r.id===t.id);return!s&&t.kind==="device"&&String(t.id).startsWith("auto:")?this.deviceList(e).find(r=>r.id===t.id):s}isSel(t){return this.sel?.id===t||this.multi.some(e=>e.id===t)}isAuto(t){return t?.kind==="device"&&String(t.id).startsWith("auto:")}hideEntity(t){let e=this.plan.settings.hiddenEntities||=[];e.includes(t)||e.push(t)}isAutoCandidate(t){let e=this._hass,n=e?.entities?.[t];if(!n||!Xd.includes(Ze(t)))return!1;let s=n.area_id||e.devices?.[n.device_id]?.area_id;return!!s&&this.plan.floors.some(r=>r.rooms.some(o=>o.area===s&&o.autoDevices!==!1))}pinAutos(t){let e=t.items.map(n=>this.isAuto(n.hit)?this.itemOf(n.hit):null);t.items.forEach((n,s)=>{if(!e[s])return;let r={id:yn(),entity:e[s].entity,x:e[s].x,z:e[s].z};this.floor.devices.push(r);let o=n.hit.id;n.hit={kind:"device",id:r.id},n.orig=[r.x,r.z],this.sel?.id===o&&(this.sel=n.hit),this.multi=this.multi.map(a=>a.id===o?n.hit:a)})}selectInRect(t,e){let n=this.floor,[s,r]=[Math.min(t[0],e[0]),Math.max(t[0],e[0])],[o,a]=[Math.min(t[1],e[1]),Math.max(t[1],e[1])],l=(h,u)=>h>=s&&h<=r&&u>=o&&u<=a,c=[];this.deviceList(n).forEach(h=>l(h.x,h.z)&&c.push({kind:"device",id:h.id})),this.multi=c,this.sel=c.length===1?c[0]:null}snapshotFor(t){let e=this.itemOf(t);return t.kind==="room"||t.kind==="site"?Ko(e.points):t.kind==="wall"?Ko([e.a,e.b]):[e.x,e.z]}moveItems(t,e,n){t.items.forEach(s=>this.moveOne(s.hit,s.orig,t.start,e,n))}moveOne(t,e,n,s,r){let o=this.itemOf(t);if(!o)return;let a=s[0]-n[0],l=s[1]-n[1];if(t.kind==="room"||t.kind==="site")o.points=e.map((c,h)=>t.vertex!=null?h===t.vertex?[e[h][0]+a,e[h][1]+l]:c:[c[0]+a,c[1]+l]);else if(t.kind==="wall")o.a=[e[0][0]+a,e[0][1]+l],o.b=[e[1][0]+a,e[1][1]+l];else if(t.kind==="opening"){let c=this.nearestWall(r);if(c){let h=mr(c.t*c.s.len,.05),u=h/c.s.len;o.x=c.s.a[0]+(c.s.b[0]-c.s.a[0])*u,o.z=c.s.a[1]+(c.s.b[1]-c.s.a[1])*u,o.rot=c.s.rot}}else o.x=e[0]+a,o.z=e[1]+l}deleteHits(t){t.length&&(this.pushUndo(),t.forEach(e=>this.deleteOne(e)),this.sel=null,this.multi=[],this.changed({side:!0}))}deleteOne(t){let e=this.floor;if(t.kind==="room"&&t.vertex!=null&&this.tool==="erase"){let n=e.rooms.find(s=>s.id===t.id);if(n.points.length>3){n.points.splice(t.vertex,1);return}}if(t.kind==="device"){let n=this.itemOf(t);if(!n)return;this.isAuto(t)||(e.devices=e.devices.filter(s=>s.id!==t.id)),(this.isAuto(t)||this.isAutoCandidate(n.entity))&&this.hideEntity(n.entity)}else if(t.kind==="site")this.plan.site.buildings=this.plan.site.buildings.filter(n=>n.id!==t.id);else{let n={room:"rooms",wall:"walls",opening:"openings",furniture:"furniture"}[t.kind];e[n]=e[n].filter(s=>s.id!==t.id)}}draw2D(){if(!this.editing)return;let t=this.edCanvas,e=t.getContext("2d"),n=this.cam2.s,s=this.w2s,r=this.floor,o=devicePixelRatio;e.clearRect(0,0,t.width,t.height),e.fillStyle="#0a0d1a",e.fillRect(0,0,t.width,t.height);let a=[this.cam2.x-t.width/2/n,this.cam2.z-t.height/2/n],l=[this.cam2.x+t.width/2/n,this.cam2.z+t.height/2/n];e.lineWidth=1;for(let u=Math.floor(a[0]);u<=l[0];u++){let d=s([u,0])[0];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(d,0),e.lineTo(d,t.height),e.stroke()}for(let u=Math.floor(a[1]);u<=l[1];u++){let d=s([0,u])[1];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(0,d),e.lineTo(t.width,d),e.stroke()}this.showSite&&(e.setLineDash([8*o,5*o]),(this.plan.site?.buildings||[]).forEach(u=>{if(u.visible===!1)return;let d=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle="rgba(255,179,71,.08)",e.fill(),e.strokeStyle=d?"#fff":"#ffb347",e.lineWidth=(d?3:2)*o,e.stroke();let f=this.w2s(Ln(u.points));if(e.fillStyle="#ffb347",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${Jo(u.points).toFixed(0)} m\xB2${u.levels>1?`, ${u.levels} Geschosse`:""})`,f[0],f[1]),d&&u.points.forEach(p=>{let x=this.w2s(p);e.fillStyle="#fff",e.fillRect(x[0]-4*o,x[1]-4*o,8*o,8*o)}),(u.openings||[]).forEach(p=>{let x=Ee(p.rot||0),g=(p.w||1.1)/2,m=this.w2s([p.x-Math.cos(x)*g,p.z-Math.sin(x)*g]),M=this.w2s([p.x+Math.cos(x)*g,p.z+Math.sin(x)*g]);e.save(),e.setLineDash([]),e.strokeStyle="#ff2bd6",e.lineWidth=4*o,e.beginPath(),e.moveTo(...m),e.lineTo(...M),e.stroke(),e.restore()}),(u.balconies||[]).forEach(p=>{if(!p.points?.length)return;this.path(e,p.points,!0),e.fillStyle="rgba(255,179,71,.18)",e.fill(),e.strokeStyle="#ffb347",e.lineWidth=o,e.stroke();let x=this.w2s(Ln(p.points));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText(p.name||"Balkon",x[0],x[1])}),u.roof?.type==="shed"){let p=yr(u.points,u.roof,this.plan.site?.north??0);e.setLineDash([]),e.strokeStyle="#ffb347",e.lineWidth=o,(ca(p.L,u)||[]).forEach(g=>{let m=g.type==="carport",M=m?g.stalls:1;for(let v=0;v<=M;v++){let _=g.t0+v*(g.t1-g.t0)/M,D=s(oi(p,p.tToU(_),-p.W/2)),C=s(oi(p,p.tToU(_),p.W/2));e.beginPath(),e.moveTo(...D),e.lineTo(...C),e.stroke()}if(g.type==="garage"||g.type==="bike"){let v=aa({side:g.doorSide,pt:g,f:p,W:p.W,hLow:u.height||2.8,bike:g.type==="bike",width:g.door}),_=v.sx>v.sz?[v.sx/2,0]:[0,v.sz/2],D=s(oi(p,v.x-_[0],v.z-_[1])),C=s(oi(p,v.x+_[0],v.z+_[1]));e.strokeStyle="#ff2bd6",e.lineWidth=3*o,e.beginPath(),e.moveTo(...D),e.lineTo(...C),e.stroke(),e.strokeStyle="#ffb347",e.lineWidth=o}if(d){e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center";let v=(_,D,C)=>{let N=s(oi(p,p.tToU(D),C));e.fillText(_,N[0],N[1])};m?la(g,g.numberFrom).forEach(_=>v(String(_.n),_.t,p.W*.3)):v(g.name||Fs[g.type]||"",(g.t0+g.t1)/2,p.W*.3)}});let x=s(oi(p,0,-p.W/2+.25));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText("\u25B2 hoch",x[0],x[1]),e.setLineDash([8*o,5*o])}}),(this.plan.site?.decks||[]).forEach(u=>{if(!u.points?.length)return;this.path(e,u.points,!0),e.fillStyle="rgba(255,179,71,.18)",e.fill(),e.setLineDash([]),e.strokeStyle="#ffb347",e.lineWidth=o,e.stroke();let d=this.w2s(Ln(u.points));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText(u.name||"Terrasse",d[0],d[1])}),(this.plan.site?.gates||[]).forEach(u=>{if(!u.a||!u.b)return;let d=this.w2s(u.a),f=this.w2s(u.b);e.save(),e.setLineDash([]),e.strokeStyle="#9aa5c0",e.lineWidth=4*o,e.beginPath(),e.moveTo(...d),e.lineTo(...f),e.stroke(),e.restore(),e.fillStyle="#9aa5c0",e.font=`${10*o}px sans-serif`,e.textAlign="left",e.fillText(u.name||"Tor",d[0]+6*o,(d[1]+f[1])/2)}),this.plan.site?.cadastreHouse&&(this.path(e,this.plan.site.cadastreHouse,!0),e.strokeStyle="#3ddc84",e.lineWidth=1.5*o,e.stroke()),e.setLineDash([]));let c=this.plan.floors[this.fi-1];if(c&&(e.strokeStyle="#2b3558",e.lineWidth=o,c.rooms.forEach(u=>{this.path(e,u.points,!0),e.stroke()})),r.rooms.forEach(u=>{let d=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle=(u.color||"#19e6ff")+"22",e.fill(),e.strokeStyle=d?"#fff":u.color||"#19e6ff",e.lineWidth=(d?3:1.5)*o,e.shadowColor=u.color||"#19e6ff",e.shadowBlur=d?8:0,e.stroke(),e.shadowBlur=0,d&&u.points.forEach(p=>{let x=s(p);e.fillStyle="#fff",e.fillRect(x[0]-4*o,x[1]-4*o,8*o,8*o)});let f=s(Ln(u.points));e.fillStyle="#dfe8ff",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${Jo(u.points).toFixed(1)} m\xB2)`,f[0],f[1])}),this.segs().forEach(u=>{let d=u.ids.includes(this.sel?.id);e.strokeStyle=d?"#fff":u.free?"#ff9a3c":"#6b7bb0",e.lineWidth=Math.max(2*o,u.t*n),e.globalAlpha=.75,e.beginPath(),e.moveTo(...s(u.a)),e.lineTo(...s(u.b)),e.stroke(),e.globalAlpha=1}),r.openings.forEach(u=>{let d=s([u.x,u.z]),f=u.w/2*n;if(e.save(),e.translate(...d),e.rotate(-(u.rot||0)),e.fillStyle=u.type==="door"?"#ff2bd6":"#6fa8ff",e.fillRect(-f,-3*o,f*2,6*o),u.type==="door"&&u.style!=="passage"){let p=u.hinge==="right"?f:-f,x=u.swing==="out"?-1:1;e.strokeStyle="#ff2bd6",e.lineWidth=o,e.beginPath(),e.moveTo(p,0),e.lineTo(p,x*u.w*n),e.arc(p,0,u.w*n,x*Math.PI/2,u.hinge==="right"?x>0?Math.PI:-Math.PI:0,u.hinge==="right"?x<0:x>0),e.stroke()}this.isSel(u.id)&&(e.strokeStyle="#fff",e.lineWidth=2*o,e.strokeRect(-f,-6*o,f*2,12*o)),e.restore()}),r.furniture.forEach(u=>{let d=jo(u).map(s);if(e.beginPath(),d.forEach((f,p)=>p?e.lineTo(...f):e.moveTo(...f)),e.closePath(),e.fillStyle=u.type==="rug"?"rgba(143,107,179,.25)":"rgba(224,176,128,.28)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#e0b080",e.lineWidth=(this.isSel(u.id)?2.5:1)*o,e.stroke(),n>25){let f=s([u.x,u.z]);e.fillStyle="#e8d5bd",e.font=`${9*o}px sans-serif`,e.textAlign="center",e.fillText(u.name||u.type,f[0],f[1]+3*o)}}),this.deviceList(r).forEach(u=>{let d=s([u.x,u.z]);if(Ze(u.entity)==="camera"){let f=na(u.x,u.z,u.rot??0,u.fov??90,u.reach??7).map(s);e.beginPath(),f.forEach((p,x)=>x?e.lineTo(...p):e.moveTo(...p)),e.closePath(),e.fillStyle="rgba(25,230,255,.12)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"rgba(25,230,255,.7)",e.lineWidth=o,e.stroke()}e.beginPath(),e.arc(d[0],d[1],6*o,0,7),e.fillStyle=u.explicit?"#ffd08a":"#88889a",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#000",e.lineWidth=(this.isSel(u.id)?3:2)*o,e.stroke(),n>25&&(e.fillStyle="#cdd6f4",e.font=`${9*o}px sans-serif`,e.textAlign="left",e.fillText(u.name||u.entity.split(".")[1]||u.entity,d[0]+9*o,d[1]+3*o))}),this.draft.length&&(e.strokeStyle="#fff",e.setLineDash([6,4]),e.lineWidth=2*o,this.path(e,[...this.draft,this.mouse],!1),e.stroke(),e.setLineDash([]),this.tool==="wall"&&this.dim(e,this.draft[0],this.mouse)),this.marquee){let[u,d]=this.marquee.map(s);e.fillStyle="rgba(25,230,255,.08)",e.fillRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.strokeStyle="#19e6ff",e.setLineDash([5,4]),e.lineWidth=o,e.strokeRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.setLineDash([])}if(this.rectPrev){let[u,d]=this.rectPrev.map(s);e.strokeStyle="#fff",e.setLineDash([6,4]),e.strokeRect(u[0],u[1],d[0]-u[0],d[1]-u[1]),e.setLineDash([]),this.dim(e,this.rectPrev[0],this.rectPrev[1])}let h=s(this.mouse);e.fillStyle="#19e6ff",e.fillRect(h[0]-3,h[1]-3,6,6)}dim(t,e,n){let s=this.w2s([(e[0]+n[0])/2,(e[1]+n[1])/2]);t.fillStyle="#fff",t.font=`${12*devicePixelRatio}px sans-serif`,t.textAlign="left",t.fillText(Math.abs(n[0]-e[0]).toFixed(2)+" \xD7 "+Math.abs(n[1]-e[1]).toFixed(2)+" m",s[0]+6,s[1]-6)}path(t,e,n){t.beginPath(),e.forEach((s,r)=>{let o=this.w2s(s);r?t.lineTo(...o):t.moveTo(...o)}),n&&t.closePath()}};customElements.get("homeplan3d-view")||customElements.define("homeplan3d-view",Yc);var Zc=class extends HTMLElement{set hass(t){this._h=t,this._v&&(this._v.hass=t)}set narrow(t){}set panel(t){}connectedCallback(){this.style.display="block",this.style.height="100vh",this._v=document.createElement("homeplan3d-view"),this._v.config={mode:"panel"},this._v.style.height="100%",this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-panel")||customElements.define("homeplan3d-panel",Zc);var Kc=class extends HTMLElement{setConfig(t){this._c={...t,mode:"card"},this._v&&(this._v.config=this._c)}set hass(t){this._h=t,this._v&&(this._v.hass=t)}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:8,min_rows:4}}static getStubConfig(){return{type:"custom:homeplan3d-card",height:450}}connectedCallback(){this._v=document.createElement("homeplan3d-view"),this._v.config=this._c||{mode:"card"},this._v.style.cssText=`display:block;height:${this._c?.height||450}px;border-radius:12px;overflow:hidden`,this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-card")||customElements.define("homeplan3d-card",Kc);window.customCards=window.customCards||[];window.customCards.push({type:"homeplan3d-card",name:"Home Plan 3D",description:"3D-Grundriss mit Ger\xE4testeuerung"});
/*! Bundled license information:

polygon-clipping/dist/polygon-clipping.umd.js:
  (**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
