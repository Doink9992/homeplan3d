var Kd=Object.create;var eh=Object.defineProperty;var Jd=Object.getOwnPropertyDescriptor;var jd=Object.getOwnPropertyNames;var Qd=Object.getPrototypeOf,tf=Object.prototype.hasOwnProperty;var ef=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var nf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of jd(t))!tf.call(i,s)&&s!==e&&eh(i,s,{get:()=>t[s],enumerable:!(n=Jd(t,s))||n.enumerable});return i};var sf=(i,t,e)=>(e=i!=null?Kd(Qd(i)):{},nf(t||!i||!i.__esModule?eh(e,"default",{value:i,enumerable:!0}):e,i));var Vd=ef((qc,Yc)=>{(function(i,t){typeof qc=="object"&&typeof Yc<"u"?Yc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(qc,function(){"use strict";function i(k,y){var b={label:0,sent:function(){if(L[0]&1)throw L[1];return L[1]},trys:[],ops:[]},T,C,L,X;return X={next:$(0),throw:$(1),return:$(2)},typeof Symbol=="function"&&(X[Symbol.iterator]=function(){return this}),X;function $(H){return function(V){return I([H,V])}}function I(H){if(T)throw new TypeError("Generator is already executing.");for(;b;)try{if(T=1,C&&(L=H[0]&2?C.return:H[0]?C.throw||((L=C.return)&&L.call(C),0):C.next)&&!(L=L.call(C,H[1])).done)return L;switch(C=0,L&&(H=[H[0]&2,L.value]),H[0]){case 0:case 1:L=H;break;case 4:return b.label++,{value:H[1],done:!1};case 5:b.label++,C=H[1],H=[0];continue;case 7:H=b.ops.pop(),b.trys.pop();continue;default:if(L=b.trys,!(L=L.length>0&&L[L.length-1])&&(H[0]===6||H[0]===2)){b=0;continue}if(H[0]===3&&(!L||H[1]>L[0]&&H[1]<L[3])){b.label=H[1];break}if(H[0]===6&&b.label<L[1]){b.label=L[1],L=H;break}if(L&&b.label<L[2]){b.label=L[2],b.ops.push(H);break}L[2]&&b.ops.pop(),b.trys.pop();continue}H=y.call(k,b)}catch(V){H=[6,V],C=0}finally{T=L=0}if(H[0]&5)throw H[1];return{value:H[0]?H[1]:void 0,done:!0}}}var t=function(){function k(y,b){this.next=null,this.key=y,this.data=b,this.left=null,this.right=null}return k}();function e(k,y){return k>y?1:k<y?-1:0}function n(k,y,b){for(var T=new t(null,null),C=T,L=T;;){var X=b(k,y.key);if(X<0){if(y.left===null)break;if(b(k,y.left.key)<0){var $=y.left;if(y.left=$.right,$.right=y,y=$,y.left===null)break}L.left=y,L=y,y=y.left}else if(X>0){if(y.right===null)break;if(b(k,y.right.key)>0){var $=y.right;if(y.right=$.left,$.left=y,y=$,y.right===null)break}C.right=y,C=y,y=y.right}else break}return C.right=y.left,L.left=y.right,y.left=T.right,y.right=T.left,y}function s(k,y,b,T){var C=new t(k,y);if(b===null)return C.left=C.right=null,C;b=n(k,b,T);var L=T(k,b.key);return L<0?(C.left=b.left,C.right=b,b.left=null):L>=0&&(C.right=b.right,C.left=b,b.right=null),C}function r(k,y,b){var T=null,C=null;if(y){y=n(k,y,b);var L=b(y.key,k);L===0?(T=y.left,C=y.right):L<0?(C=y.right,y.right=null,T=y):(T=y.left,y.left=null,C=y)}return{left:T,right:C}}function o(k,y,b){return y===null?k:(k===null||(y=n(k.key,y,b),y.left=k),y)}function a(k,y,b,T,C){if(k){T(""+y+(b?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+C(k)+`
`);var L=y+(b?"    ":"\u2502   ");k.left&&a(k.left,L,!1,T,C),k.right&&a(k.right,L,!0,T,C)}}var l=function(){function k(y){y===void 0&&(y=e),this._root=null,this._size=0,this._comparator=y}return k.prototype.insert=function(y,b){return this._size++,this._root=s(y,b,this._root,this._comparator)},k.prototype.add=function(y,b){var T=new t(y,b);this._root===null&&(T.left=T.right=null,this._size++,this._root=T);var C=this._comparator,L=n(y,this._root,C),X=C(y,L.key);return X===0?this._root=L:(X<0?(T.left=L.left,T.right=L,L.left=null):X>0&&(T.right=L.right,T.left=L,L.right=null),this._size++,this._root=T),this._root},k.prototype.remove=function(y){this._root=this._remove(y,this._root,this._comparator)},k.prototype._remove=function(y,b,T){var C;if(b===null)return null;b=n(y,b,T);var L=T(y,b.key);return L===0?(b.left===null?C=b.right:(C=n(y,b.left,T),C.right=b.right),this._size--,C):b},k.prototype.pop=function(){var y=this._root;if(y){for(;y.left;)y=y.left;return this._root=n(y.key,this._root,this._comparator),this._root=this._remove(y.key,this._root,this._comparator),{key:y.key,data:y.data}}return null},k.prototype.findStatic=function(y){for(var b=this._root,T=this._comparator;b;){var C=T(y,b.key);if(C===0)return b;C<0?b=b.left:b=b.right}return null},k.prototype.find=function(y){return this._root&&(this._root=n(y,this._root,this._comparator),this._comparator(y,this._root.key)!==0)?null:this._root},k.prototype.contains=function(y){for(var b=this._root,T=this._comparator;b;){var C=T(y,b.key);if(C===0)return!0;C<0?b=b.left:b=b.right}return!1},k.prototype.forEach=function(y,b){for(var T=this._root,C=[],L=!1;!L;)T!==null?(C.push(T),T=T.left):C.length!==0?(T=C.pop(),y.call(b,T),T=T.right):L=!0;return this},k.prototype.range=function(y,b,T,C){for(var L=[],X=this._comparator,$=this._root,I;L.length!==0||$;)if($)L.push($),$=$.left;else{if($=L.pop(),I=X($.key,b),I>0)break;if(X($.key,y)>=0&&T.call(C,$))return this;$=$.right}return this},k.prototype.keys=function(){var y=[];return this.forEach(function(b){var T=b.key;return y.push(T)}),y},k.prototype.values=function(){var y=[];return this.forEach(function(b){var T=b.data;return y.push(T)}),y},k.prototype.min=function(){return this._root?this.minNode(this._root).key:null},k.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},k.prototype.minNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.left;)y=y.left;return y},k.prototype.maxNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.right;)y=y.right;return y},k.prototype.at=function(y){for(var b=this._root,T=!1,C=0,L=[];!T;)if(b)L.push(b),b=b.left;else if(L.length>0){if(b=L.pop(),C===y)return b;C++,b=b.right}else T=!0;return null},k.prototype.next=function(y){var b=this._root,T=null;if(y.right){for(T=y.right;T.left;)T=T.left;return T}for(var C=this._comparator;b;){var L=C(y.key,b.key);if(L===0)break;L<0?(T=b,b=b.left):b=b.right}return T},k.prototype.prev=function(y){var b=this._root,T=null;if(y.left!==null){for(T=y.left;T.right;)T=T.right;return T}for(var C=this._comparator;b;){var L=C(y.key,b.key);if(L===0)break;L<0?b=b.left:(T=b,b=b.right)}return T},k.prototype.clear=function(){return this._root=null,this._size=0,this},k.prototype.toList=function(){return u(this._root)},k.prototype.load=function(y,b,T){b===void 0&&(b=[]),T===void 0&&(T=!1);var C=y.length,L=this._comparator;if(T&&p(y,b,0,C-1,L),this._root===null)this._root=c(y,b,0,C),this._size=C;else{var X=d(this.toList(),h(y,b),L);C=this._size+C,this._root=f({head:X},0,C)}return this},k.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(k.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),k.prototype.toString=function(y){y===void 0&&(y=function(T){return String(T.key)});var b=[];return a(this._root,"",!0,function(T){return b.push(T)},y),b.join("")},k.prototype.update=function(y,b,T){var C=this._comparator,L=r(y,this._root,C),X=L.left,$=L.right;C(y,b)<0?$=s(b,T,$,C):X=s(b,T,X,C),this._root=o(X,$,C)},k.prototype.split=function(y){return r(y,this._root,this._comparator)},k.prototype[Symbol.iterator]=function(){var y,b,T;return i(this,function(C){switch(C.label){case 0:y=this._root,b=[],T=!1,C.label=1;case 1:return T?[3,6]:y===null?[3,2]:(b.push(y),y=y.left,[3,5]);case 2:return b.length===0?[3,4]:(y=b.pop(),[4,y]);case 3:return C.sent(),y=y.right,[3,5];case 4:T=!0,C.label=5;case 5:return[3,1];case 6:return[2]}})},k}();function c(k,y,b,T){var C=T-b;if(C>0){var L=b+Math.floor(C/2),X=k[L],$=y[L],I=new t(X,$);return I.left=c(k,y,b,L),I.right=c(k,y,L+1,T),I}return null}function h(k,y){for(var b=new t(null,null),T=b,C=0;C<k.length;C++)T=T.next=new t(k[C],y[C]);return T.next=null,b.next}function u(k){for(var y=k,b=[],T=!1,C=new t(null,null),L=C;!T;)y?(b.push(y),y=y.left):b.length>0?(y=L=L.next=b.pop(),y=y.right):T=!0;return L.next=null,C.next}function f(k,y,b){var T=b-y;if(T>0){var C=y+Math.floor(T/2),L=f(k,y,C),X=k.head;return X.left=L,k.head=k.head.next,X.right=f(k,C+1,b),X}return null}function d(k,y,b){for(var T=new t(null,null),C=T,L=k,X=y;L!==null&&X!==null;)b(L.key,X.key)<0?(C.next=L,L=L.next):(C.next=X,X=X.next),C=C.next;return L!==null?C.next=L:X!==null&&(C.next=X),T.next}function p(k,y,b,T,C){if(!(b>=T)){for(var L=k[b+T>>1],X=b-1,$=T+1;;){do X++;while(C(k[X],L)<0);do $--;while(C(k[$],L)>0);if(X>=$)break;var I=k[X];k[X]=k[$],k[$]=I,I=y[X],y[X]=y[$],y[$]=I}p(k,y,b,$,C),p(k,y,$+1,T,C)}}let x=(k,y)=>k.ll.x<=y.x&&y.x<=k.ur.x&&k.ll.y<=y.y&&y.y<=k.ur.y,g=(k,y)=>{if(y.ur.x<k.ll.x||k.ur.x<y.ll.x||y.ur.y<k.ll.y||k.ur.y<y.ll.y)return null;let b=k.ll.x<y.ll.x?y.ll.x:k.ll.x,T=k.ur.x<y.ur.x?k.ur.x:y.ur.x,C=k.ll.y<y.ll.y?y.ll.y:k.ll.y,L=k.ur.y<y.ur.y?k.ur.y:y.ur.y;return{ll:{x:b,y:C},ur:{x:T,y:L}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let M=m*m,_=(k,y)=>{if(-m<k&&k<m&&-m<y&&y<m)return 0;let b=k-y;return b*b<M*k*y?0:k<y?-1:1};class v{constructor(){this.reset()}reset(){this.xRounder=new O,this.yRounder=new O}round(y,b){return{x:this.xRounder.round(y),y:this.yRounder.round(b)}}}class O{constructor(){this.tree=new l,this.round(0)}round(y){let b=this.tree.add(y),T=this.tree.prev(b);if(T!==null&&_(b.key,T.key)===0)return this.tree.remove(y),T.key;let C=this.tree.next(b);return C!==null&&_(b.key,C.key)===0?(this.tree.remove(y),C.key):y}}let A=new v,P=11102230246251565e-32,U=134217729,E=(3+8*P)*P;function w(k,y,b,T,C){let L,X,$,I,H=y[0],V=T[0],F=0,q=0;V>H==V>-H?(L=H,H=y[++F]):(L=V,V=T[++q]);let Q=0;if(F<k&&q<b)for(V>H==V>-H?(X=H+L,$=L-(X-H),H=y[++F]):(X=V+L,$=L-(X-V),V=T[++q]),L=X,$!==0&&(C[Q++]=$);F<k&&q<b;)V>H==V>-H?(X=L+H,I=X-L,$=L-(X-I)+(H-I),H=y[++F]):(X=L+V,I=X-L,$=L-(X-I)+(V-I),V=T[++q]),L=X,$!==0&&(C[Q++]=$);for(;F<k;)X=L+H,I=X-L,$=L-(X-I)+(H-I),H=y[++F],L=X,$!==0&&(C[Q++]=$);for(;q<b;)X=L+V,I=X-L,$=L-(X-I)+(V-I),V=T[++q],L=X,$!==0&&(C[Q++]=$);return(L!==0||Q===0)&&(C[Q++]=L),Q}function D(k,y){let b=y[0];for(let T=1;T<k;T++)b+=y[T];return b}function G(k){return new Float64Array(k)}let W=(3+16*P)*P,J=(2+12*P)*P,it=(9+64*P)*P*P,K=G(4),ot=G(8),tt=G(12),dt=G(16),ut=G(4);function wt(k,y,b,T,C,L,X){let $,I,H,V,F,q,Q,xt,Mt,Ht,St,Qt,fe,ve,Ce,ye,Fe,Pe,je=k-C,Be=b-C,Qe=y-L,ze=T-L;ve=je*ze,q=U*je,Q=q-(q-je),xt=je-Q,q=U*ze,Mt=q-(q-ze),Ht=ze-Mt,Ce=xt*Ht-(ve-Q*Mt-xt*Mt-Q*Ht),ye=Qe*Be,q=U*Qe,Q=q-(q-Qe),xt=Qe-Q,q=U*Be,Mt=q-(q-Be),Ht=Be-Mt,Fe=xt*Ht-(ye-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,K[0]=Ce-(St+F)+(F-Fe),Qt=ve+St,F=Qt-ve,fe=ve-(Qt-F)+(St-F),St=fe-ye,F=fe-St,K[1]=fe-(St+F)+(F-ye),Pe=Qt+St,F=Pe-Qt,K[2]=Qt-(Pe-F)+(St-F),K[3]=Pe;let dn=D(4,K),li=J*X;if(dn>=li||-dn>=li||(F=k-je,$=k-(je+F)+(F-C),F=b-Be,H=b-(Be+F)+(F-C),F=y-Qe,I=y-(Qe+F)+(F-L),F=T-ze,V=T-(ze+F)+(F-L),$===0&&I===0&&H===0&&V===0)||(li=it*X+E*Math.abs(dn),dn+=je*V+ze*$-(Qe*H+Be*I),dn>=li||-dn>=li))return dn;ve=$*ze,q=U*$,Q=q-(q-$),xt=$-Q,q=U*ze,Mt=q-(q-ze),Ht=ze-Mt,Ce=xt*Ht-(ve-Q*Mt-xt*Mt-Q*Ht),ye=I*Be,q=U*I,Q=q-(q-I),xt=I-Q,q=U*Be,Mt=q-(q-Be),Ht=Be-Mt,Fe=xt*Ht-(ye-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,ut[0]=Ce-(St+F)+(F-Fe),Qt=ve+St,F=Qt-ve,fe=ve-(Qt-F)+(St-F),St=fe-ye,F=fe-St,ut[1]=fe-(St+F)+(F-ye),Pe=Qt+St,F=Pe-Qt,ut[2]=Qt-(Pe-F)+(St-F),ut[3]=Pe;let fa=w(4,K,4,ut,ot);ve=je*V,q=U*je,Q=q-(q-je),xt=je-Q,q=U*V,Mt=q-(q-V),Ht=V-Mt,Ce=xt*Ht-(ve-Q*Mt-xt*Mt-Q*Ht),ye=Qe*H,q=U*Qe,Q=q-(q-Qe),xt=Qe-Q,q=U*H,Mt=q-(q-H),Ht=H-Mt,Fe=xt*Ht-(ye-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,ut[0]=Ce-(St+F)+(F-Fe),Qt=ve+St,F=Qt-ve,fe=ve-(Qt-F)+(St-F),St=fe-ye,F=fe-St,ut[1]=fe-(St+F)+(F-ye),Pe=Qt+St,F=Pe-Qt,ut[2]=Qt-(Pe-F)+(St-F),ut[3]=Pe;let pa=w(fa,ot,4,ut,tt);ve=$*V,q=U*$,Q=q-(q-$),xt=$-Q,q=U*V,Mt=q-(q-V),Ht=V-Mt,Ce=xt*Ht-(ve-Q*Mt-xt*Mt-Q*Ht),ye=I*H,q=U*I,Q=q-(q-I),xt=I-Q,q=U*H,Mt=q-(q-H),Ht=H-Mt,Fe=xt*Ht-(ye-Q*Mt-xt*Mt-Q*Ht),St=Ce-Fe,F=Ce-St,ut[0]=Ce-(St+F)+(F-Fe),Qt=ve+St,F=Qt-ve,fe=ve-(Qt-F)+(St-F),St=fe-ye,F=fe-St,ut[1]=fe-(St+F)+(F-ye),Pe=Qt+St,F=Pe-Qt,ut[2]=Qt-(Pe-F)+(St-F),ut[3]=Pe;let ma=w(pa,tt,4,ut,dt);return dt[ma-1]}function Ft(k,y,b,T,C,L){let X=(y-L)*(b-C),$=(k-C)*(T-L),I=X-$,H=Math.abs(X+$);return Math.abs(I)>=W*H?I:-wt(k,y,b,T,C,L,H)}let Zt=(k,y)=>k.x*y.y-k.y*y.x,st=(k,y)=>k.x*y.x+k.y*y.y,pt=(k,y,b)=>{let T=Ft(k.x,k.y,y.x,y.y,b.x,b.y);return T>0?-1:T<0?1:0},Tt=k=>Math.sqrt(st(k,k)),mt=(k,y,b)=>{let T={x:y.x-k.x,y:y.y-k.y},C={x:b.x-k.x,y:b.y-k.y};return Zt(C,T)/Tt(C)/Tt(T)},kt=(k,y,b)=>{let T={x:y.x-k.x,y:y.y-k.y},C={x:b.x-k.x,y:b.y-k.y};return st(C,T)/Tt(C)/Tt(T)},Gt=(k,y,b)=>y.y===0?null:{x:k.x+y.x/y.y*(b-k.y),y:b},zt=(k,y,b)=>y.x===0?null:{x:b,y:k.y+y.y/y.x*(b-k.x)},te=(k,y,b,T)=>{if(y.x===0)return zt(b,T,k.x);if(T.x===0)return zt(k,y,b.x);if(y.y===0)return Gt(b,T,k.y);if(T.y===0)return Gt(k,y,b.y);let C=Zt(y,T);if(C==0)return null;let L={x:b.x-k.x,y:b.y-k.y},X=Zt(L,y)/C,$=Zt(L,T)/C,I=k.x+$*y.x,H=b.x+X*T.x,V=k.y+$*y.y,F=b.y+X*T.y,q=(I+H)/2,Q=(V+F)/2;return{x:q,y:Q}};class at{static compare(y,b){let T=at.comparePoints(y.point,b.point);return T!==0?T:(y.point!==b.point&&y.link(b),y.isLeft!==b.isLeft?y.isLeft?1:-1:B.compare(y.segment,b.segment))}static comparePoints(y,b){return y.x<b.x?-1:y.x>b.x?1:y.y<b.y?-1:y.y>b.y?1:0}constructor(y,b){y.events===void 0?y.events=[this]:y.events.push(this),this.point=y,this.isLeft=b}link(y){if(y.point===this.point)throw new Error("Tried to link already linked events");let b=y.point.events;for(let T=0,C=b.length;T<C;T++){let L=b[T];this.point.events.push(L),L.point=this.point}this.checkForConsuming()}checkForConsuming(){let y=this.point.events.length;for(let b=0;b<y;b++){let T=this.point.events[b];if(T.segment.consumedBy===void 0)for(let C=b+1;C<y;C++){let L=this.point.events[C];L.consumedBy===void 0&&T.otherSE.point.events===L.otherSE.point.events&&T.segment.consume(L.segment)}}}getAvailableLinkedEvents(){let y=[];for(let b=0,T=this.point.events.length;b<T;b++){let C=this.point.events[b];C!==this&&!C.segment.ringOut&&C.segment.isInResult()&&y.push(C)}return y}getLeftmostComparator(y){let b=new Map,T=C=>{let L=C.otherSE;b.set(C,{sine:mt(this.point,y.point,L.point),cosine:kt(this.point,y.point,L.point)})};return(C,L)=>{b.has(C)||T(C),b.has(L)||T(L);let{sine:X,cosine:$}=b.get(C),{sine:I,cosine:H}=b.get(L);return X>=0&&I>=0?$<H?1:$>H?-1:0:X<0&&I<0?$<H?-1:$>H?1:0:I<X?-1:I>X?1:0}}}let gt=0;class B{static compare(y,b){let T=y.leftSE.point.x,C=b.leftSE.point.x,L=y.rightSE.point.x,X=b.rightSE.point.x;if(X<T)return 1;if(L<C)return-1;let $=y.leftSE.point.y,I=b.leftSE.point.y,H=y.rightSE.point.y,V=b.rightSE.point.y;if(T<C){if(I<$&&I<H)return 1;if(I>$&&I>H)return-1;let F=y.comparePoint(b.leftSE.point);if(F<0)return 1;if(F>0)return-1;let q=b.comparePoint(y.rightSE.point);return q!==0?q:-1}if(T>C){if($<I&&$<V)return-1;if($>I&&$>V)return 1;let F=b.comparePoint(y.leftSE.point);if(F!==0)return F;let q=y.comparePoint(b.rightSE.point);return q<0?1:q>0?-1:1}if($<I)return-1;if($>I)return 1;if(L<X){let F=b.comparePoint(y.rightSE.point);if(F!==0)return F}if(L>X){let F=y.comparePoint(b.rightSE.point);if(F<0)return 1;if(F>0)return-1}if(L!==X){let F=H-$,q=L-T,Q=V-I,xt=X-C;if(F>q&&Q<xt)return 1;if(F<q&&Q>xt)return-1}return L>X?1:L<X||H<V?-1:H>V?1:y.id<b.id?-1:y.id>b.id?1:0}constructor(y,b,T,C){this.id=++gt,this.leftSE=y,y.segment=this,y.otherSE=b,this.rightSE=b,b.segment=this,b.otherSE=y,this.rings=T,this.windings=C}static fromRing(y,b,T){let C,L,X,$=at.comparePoints(y,b);if($<0)C=y,L=b,X=1;else if($>0)C=b,L=y,X=-1;else throw new Error(`Tried to create degenerate segment at [${y.x}, ${y.y}]`);let I=new at(C,!0),H=new at(L,!1);return new B(I,H,[T],[X])}replaceRightSE(y){this.rightSE=y,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let y=this.leftSE.point.y,b=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:y<b?y:b},ur:{x:this.rightSE.point.x,y:y>b?y:b}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(y){return y.x===this.leftSE.point.x&&y.y===this.leftSE.point.y||y.x===this.rightSE.point.x&&y.y===this.rightSE.point.y}comparePoint(y){if(this.isAnEndpoint(y))return 0;let b=this.leftSE.point,T=this.rightSE.point,C=this.vector();if(b.x===T.x)return y.x===b.x?0:y.x<b.x?1:-1;let L=(y.y-b.y)/C.y,X=b.x+L*C.x;if(y.x===X)return 0;let $=(y.x-b.x)/C.x,I=b.y+$*C.y;return y.y===I?0:y.y<I?-1:1}getIntersection(y){let b=this.bbox(),T=y.bbox(),C=g(b,T);if(C===null)return null;let L=this.leftSE.point,X=this.rightSE.point,$=y.leftSE.point,I=y.rightSE.point,H=x(b,$)&&this.comparePoint($)===0,V=x(T,L)&&y.comparePoint(L)===0,F=x(b,I)&&this.comparePoint(I)===0,q=x(T,X)&&y.comparePoint(X)===0;if(V&&H)return q&&!F?X:!q&&F?I:null;if(V)return F&&L.x===I.x&&L.y===I.y?null:L;if(H)return q&&X.x===$.x&&X.y===$.y?null:$;if(q&&F)return null;if(q)return X;if(F)return I;let Q=te(L,this.vector(),$,y.vector());return Q===null||!x(C,Q)?null:A.round(Q.x,Q.y)}split(y){let b=[],T=y.events!==void 0,C=new at(y,!0),L=new at(y,!1),X=this.rightSE;this.replaceRightSE(L),b.push(L),b.push(C);let $=new B(C,X,this.rings.slice(),this.windings.slice());return at.comparePoints($.leftSE.point,$.rightSE.point)>0&&$.swapEvents(),at.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),T&&(C.checkForConsuming(),L.checkForConsuming()),b}swapEvents(){let y=this.rightSE;this.rightSE=this.leftSE,this.leftSE=y,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let b=0,T=this.windings.length;b<T;b++)this.windings[b]*=-1}consume(y){let b=this,T=y;for(;b.consumedBy;)b=b.consumedBy;for(;T.consumedBy;)T=T.consumedBy;let C=B.compare(b,T);if(C!==0){if(C>0){let L=b;b=T,T=L}if(b.prev===T){let L=b;b=T,T=L}for(let L=0,X=T.rings.length;L<X;L++){let $=T.rings[L],I=T.windings[L],H=b.rings.indexOf($);H===-1?(b.rings.push($),b.windings.push(I)):b.windings[H]+=I}T.rings=null,T.windings=null,T.consumedBy=b,T.leftSE.consumedBy=b.leftSE,T.rightSE.consumedBy=b.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let y=this.prev.consumedBy||this.prev;this._beforeState=y.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let y=this.beforeState();this._afterState={rings:y.rings.slice(0),windings:y.windings.slice(0),multiPolys:[]};let b=this._afterState.rings,T=this._afterState.windings,C=this._afterState.multiPolys;for(let $=0,I=this.rings.length;$<I;$++){let H=this.rings[$],V=this.windings[$],F=b.indexOf(H);F===-1?(b.push(H),T.push(V)):T[F]+=V}let L=[],X=[];for(let $=0,I=b.length;$<I;$++){if(T[$]===0)continue;let H=b[$],V=H.poly;if(X.indexOf(V)===-1)if(H.isExterior)L.push(V);else{X.indexOf(V)===-1&&X.push(V);let F=L.indexOf(H.poly);F!==-1&&L.splice(F,1)}}for(let $=0,I=L.length;$<I;$++){let H=L[$].multiPoly;C.indexOf(H)===-1&&C.push(H)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let y=this.beforeState().multiPolys,b=this.afterState().multiPolys;switch(ct.type){case"union":{let T=y.length===0,C=b.length===0;this._isInResult=T!==C;break}case"intersection":{let T,C;y.length<b.length?(T=y.length,C=b.length):(T=b.length,C=y.length),this._isInResult=C===ct.numMultiPolys&&T<C;break}case"xor":{let T=Math.abs(y.length-b.length);this._isInResult=T%2===1;break}case"difference":{let T=C=>C.length===1&&C[0].isSubject;this._isInResult=T(y)!==T(b);break}default:throw new Error(`Unrecognized operation type found ${ct.type}`)}return this._isInResult}}class Pt{constructor(y,b,T){if(!Array.isArray(y)||y.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=b,this.isExterior=T,this.segments=[],typeof y[0][0]!="number"||typeof y[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let C=A.round(y[0][0],y[0][1]);this.bbox={ll:{x:C.x,y:C.y},ur:{x:C.x,y:C.y}};let L=C;for(let X=1,$=y.length;X<$;X++){if(typeof y[X][0]!="number"||typeof y[X][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let I=A.round(y[X][0],y[X][1]);I.x===L.x&&I.y===L.y||(this.segments.push(B.fromRing(L,I,this)),I.x<this.bbox.ll.x&&(this.bbox.ll.x=I.x),I.y<this.bbox.ll.y&&(this.bbox.ll.y=I.y),I.x>this.bbox.ur.x&&(this.bbox.ur.x=I.x),I.y>this.bbox.ur.y&&(this.bbox.ur.y=I.y),L=I)}(C.x!==L.x||C.y!==L.y)&&this.segments.push(B.fromRing(L,C,this))}getSweepEvents(){let y=[];for(let b=0,T=this.segments.length;b<T;b++){let C=this.segments[b];y.push(C.leftSE),y.push(C.rightSE)}return y}}class ft{constructor(y,b){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Pt(y[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let T=1,C=y.length;T<C;T++){let L=new Pt(y[T],this,!1);L.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=L.bbox.ll.x),L.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=L.bbox.ll.y),L.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=L.bbox.ur.x),L.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=L.bbox.ur.y),this.interiorRings.push(L)}this.multiPoly=b}getSweepEvents(){let y=this.exteriorRing.getSweepEvents();for(let b=0,T=this.interiorRings.length;b<T;b++){let C=this.interiorRings[b].getSweepEvents();for(let L=0,X=C.length;L<X;L++)y.push(C[L])}return y}}class At{constructor(y,b){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof y[0][0][0]=="number"&&(y=[y])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let T=0,C=y.length;T<C;T++){let L=new ft(y[T],this);L.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=L.bbox.ll.x),L.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=L.bbox.ll.y),L.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=L.bbox.ur.x),L.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=L.bbox.ur.y),this.polys.push(L)}this.isSubject=b}getSweepEvents(){let y=[];for(let b=0,T=this.polys.length;b<T;b++){let C=this.polys[b].getSweepEvents();for(let L=0,X=C.length;L<X;L++)y.push(C[L])}return y}}class _t{static factory(y){let b=[];for(let T=0,C=y.length;T<C;T++){let L=y[T];if(!L.isInResult()||L.ringOut)continue;let X=null,$=L.leftSE,I=L.rightSE,H=[$],V=$.point,F=[];for(;X=$,$=I,H.push($),$.point!==V;)for(;;){let q=$.getAvailableLinkedEvents();if(q.length===0){let Mt=H[0].point,Ht=H[H.length-1].point;throw new Error(`Unable to complete output ring starting at [${Mt.x}, ${Mt.y}]. Last matching segment found ends at [${Ht.x}, ${Ht.y}].`)}if(q.length===1){I=q[0].otherSE;break}let Q=null;for(let Mt=0,Ht=F.length;Mt<Ht;Mt++)if(F[Mt].point===$.point){Q=Mt;break}if(Q!==null){let Mt=F.splice(Q)[0],Ht=H.splice(Mt.index);Ht.unshift(Ht[0].otherSE),b.push(new _t(Ht.reverse()));continue}F.push({index:H.length,point:$.point});let xt=$.getLeftmostComparator(X);I=q.sort(xt)[0].otherSE;break}b.push(new _t(H))}return b}constructor(y){this.events=y;for(let b=0,T=y.length;b<T;b++)y[b].segment.ringOut=this;this.poly=null}getGeom(){let y=this.events[0].point,b=[y];for(let H=1,V=this.events.length-1;H<V;H++){let F=this.events[H].point,q=this.events[H+1].point;pt(F,y,q)!==0&&(b.push(F),y=F)}if(b.length===1)return null;let T=b[0],C=b[1];pt(T,y,C)===0&&b.shift(),b.push(b[0]);let L=this.isExteriorRing()?1:-1,X=this.isExteriorRing()?0:b.length-1,$=this.isExteriorRing()?b.length:-1,I=[];for(let H=X;H!=$;H+=L)I.push([b[H].x,b[H].y]);return I}isExteriorRing(){if(this._isExteriorRing===void 0){let y=this.enclosingRing();this._isExteriorRing=y?!y.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let y=this.events[0];for(let C=1,L=this.events.length;C<L;C++){let X=this.events[C];at.compare(y,X)>0&&(y=X)}let b=y.segment.prevInResult(),T=b?b.prevInResult():null;for(;;){if(!b)return null;if(!T)return b.ringOut;if(T.ringOut!==b.ringOut)return T.ringOut.enclosingRing()!==b.ringOut?b.ringOut:b.ringOut.enclosingRing();b=T.prevInResult(),T=b?b.prevInResult():null}}}class Bt{constructor(y){this.exteriorRing=y,y.poly=this,this.interiorRings=[]}addInterior(y){this.interiorRings.push(y),y.poly=this}getGeom(){let y=[this.exteriorRing.getGeom()];if(y[0]===null)return null;for(let b=0,T=this.interiorRings.length;b<T;b++){let C=this.interiorRings[b].getGeom();C!==null&&y.push(C)}return y}}class Rt{constructor(y){this.rings=y,this.polys=this._composePolys(y)}getGeom(){let y=[];for(let b=0,T=this.polys.length;b<T;b++){let C=this.polys[b].getGeom();C!==null&&y.push(C)}return y}_composePolys(y){let b=[];for(let T=0,C=y.length;T<C;T++){let L=y[T];if(!L.poly)if(L.isExteriorRing())b.push(new Bt(L));else{let X=L.enclosingRing();X.poly||b.push(new Bt(X)),X.poly.addInterior(L)}}return b}}class N{constructor(y){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B.compare;this.queue=y,this.tree=new l(b),this.segments=[]}process(y){let b=y.segment,T=[];if(y.consumedBy)return y.isLeft?this.queue.remove(y.otherSE):this.tree.remove(b),T;let C=y.isLeft?this.tree.add(b):this.tree.find(b);if(!C)throw new Error(`Unable to find segment #${b.id} [${b.leftSE.point.x}, ${b.leftSE.point.y}] -> [${b.rightSE.point.x}, ${b.rightSE.point.y}] in SweepLine tree.`);let L=C,X=C,$,I;for(;$===void 0;)L=this.tree.prev(L),L===null?$=null:L.key.consumedBy===void 0&&($=L.key);for(;I===void 0;)X=this.tree.next(X),X===null?I=null:X.key.consumedBy===void 0&&(I=X.key);if(y.isLeft){let H=null;if($){let F=$.getIntersection(b);if(F!==null&&(b.isAnEndpoint(F)||(H=F),!$.isAnEndpoint(F))){let q=this._splitSafely($,F);for(let Q=0,xt=q.length;Q<xt;Q++)T.push(q[Q])}}let V=null;if(I){let F=I.getIntersection(b);if(F!==null&&(b.isAnEndpoint(F)||(V=F),!I.isAnEndpoint(F))){let q=this._splitSafely(I,F);for(let Q=0,xt=q.length;Q<xt;Q++)T.push(q[Q])}}if(H!==null||V!==null){let F=null;H===null?F=V:V===null?F=H:F=at.comparePoints(H,V)<=0?H:V,this.queue.remove(b.rightSE),T.push(b.rightSE);let q=b.split(F);for(let Q=0,xt=q.length;Q<xt;Q++)T.push(q[Q])}T.length>0?(this.tree.remove(b),T.push(y)):(this.segments.push(b),b.prev=$)}else{if($&&I){let H=$.getIntersection(I);if(H!==null){if(!$.isAnEndpoint(H)){let V=this._splitSafely($,H);for(let F=0,q=V.length;F<q;F++)T.push(V[F])}if(!I.isAnEndpoint(H)){let V=this._splitSafely(I,H);for(let F=0,q=V.length;F<q;F++)T.push(V[F])}}}this.tree.remove(b)}return T}_splitSafely(y,b){this.tree.remove(y);let T=y.rightSE;this.queue.remove(T);let C=y.split(b);return C.push(T),y.consumedBy===void 0&&this.tree.add(y),C}}let S=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,j=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class rt{run(y,b,T){ct.type=y,A.reset();let C=[new At(b,!0)];for(let F=0,q=T.length;F<q;F++)C.push(new At(T[F],!1));if(ct.numMultiPolys=C.length,ct.type==="difference"){let F=C[0],q=1;for(;q<C.length;)g(C[q].bbox,F.bbox)!==null?q++:C.splice(q,1)}if(ct.type==="intersection")for(let F=0,q=C.length;F<q;F++){let Q=C[F];for(let xt=F+1,Mt=C.length;xt<Mt;xt++)if(g(Q.bbox,C[xt].bbox)===null)return[]}let L=new l(at.compare);for(let F=0,q=C.length;F<q;F++){let Q=C[F].getSweepEvents();for(let xt=0,Mt=Q.length;xt<Mt;xt++)if(L.insert(Q[xt]),L.size>S)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let X=new N(L),$=L.size,I=L.pop();for(;I;){let F=I.key;if(L.size===$){let Q=F.segment;throw new Error(`Unable to pop() ${F.isLeft?"left":"right"} SweepEvent [${F.point.x}, ${F.point.y}] from segment #${Q.id} [${Q.leftSE.point.x}, ${Q.leftSE.point.y}] -> [${Q.rightSE.point.x}, ${Q.rightSE.point.y}] from queue.`)}if(L.size>S)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(X.segments.length>j)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let q=X.process(F);for(let Q=0,xt=q.length;Q<xt;Q++){let Mt=q[Q];Mt.consumedBy===void 0&&L.insert(Mt)}$=L.size,I=L.pop()}A.reset();let H=_t.factory(X.segments);return new Rt(H).getGeom()}}let ct=new rt;var Kt={union:function(k){for(var y=arguments.length,b=new Array(y>1?y-1:0),T=1;T<y;T++)b[T-1]=arguments[T];return ct.run("union",k,b)},intersection:function(k){for(var y=arguments.length,b=new Array(y>1?y-1:0),T=1;T<y;T++)b[T-1]=arguments[T];return ct.run("intersection",k,b)},xor:function(k){for(var y=arguments.length,b=new Array(y>1?y-1:0),T=1;T<y;T++)b[T-1]=arguments[T];return ct.run("xor",k,b)},difference:function(k){for(var y=arguments.length,b=new Array(y>1?y-1:0),T=1;T<y;T++)b[T-1]=arguments[T];return ct.run("difference",k,b)}};return Kt})});var wc="170",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rf=0,nh=1,of=2;var xu=1,af=2,Zn=3,bi=0,en=1,oe=2,yi=0,_s=1,cn=2,ih=3,sh=4,lf=5,Li=100,cf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,Ja=204,ja=205,xf=206,yf=207,_f=208,vf=209,bf=210,Mf=211,wf=212,Sf=213,Ef=214,Qa=0,tl=1,el=2,Ss=3,nl=4,il=5,sl=6,rl=7,yu=0,Tf=1,Af=2,_i=0,Rf=1,Cf=2,Pf=3,If=4,Lf=5,Df=6,Uf=7;var _u=300,Es=301,Ts=302,ol=303,al=304,zo=306,Oi=1e3,Ui=1001,ll=1002,Rn=1003,Nf=1004;var wr=1005;var kn=1006,ga=1007;var Ni=1008;var ti=1009,vu=1010,bu=1011,sr=1012,Sc=1013,ki=1014,Jn=1015,mr=1016,Ec=1017,Tc=1018,As=1020,Mu=35902,wu=1021,Su=1022,An=1023,Eu=1024,Tu=1025,vs=1026,Rs=1027,Au=1028,Ac=1029,Ru=1030,Rc=1031;var Cc=1033,so=33776,ro=33777,oo=33778,ao=33779,cl=35840,hl=35841,ul=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37808,xl=37809,yl=37810,_l=37811,vl=37812,bl=37813,Ml=37814,wl=37815,Sl=37816,El=37817,Tl=37818,Al=37819,Rl=37820,Cl=37821,lo=36492,Pl=36494,Il=36495,Cu=36283,Ll=36284,Dl=36285,Ul=36286;var co=2300,Nl=2301,xa=2302,rh=2400,oh=2401,ah=2402;var Of=3200,kf=3201;var Pu=0,Ff=1,xi="",qe="srgb",Ds="srgb-linear",Ho="linear",ue="srgb";var Qi=7680;var lh=519,Bf=512,zf=513,Hf=514,Iu=515,Vf=516,Gf=517,Wf=518,Xf=519,Ol=35044,Pc=35048;var ch="300 es",jn=2e3,ho=2001,ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,bs=Math.PI/180,rr=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Ic(i,t){return(i%t+t)%t}function $f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qf(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function Yf(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function Zf(i,t=1){return t-Math.abs(Ic(i,t*2)-t)}function Kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qf(i,t){return i+Math.random()*(t-i)}function tp(i){return i*(.5-Math.random())}function ep(i){i!==void 0&&(hh=i);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function np(i){return i*bs}function ip(i){return i*rr}function sp(i){return(i&i-1)===0&&i!==0}function rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function op(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ap(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lu={DEG2RAD:bs,RAD2DEG:rr,generateUUID:Fn,clamp:Oe,euclideanModulo:Ic,mapLinear:$f,inverseLerp:qf,lerp:tr,damp:Yf,pingpong:Zf,smoothstep:Kf,smootherstep:Jf,randInt:jf,randFloat:Qf,randFloatSpread:tp,seededRandom:ep,degToRad:np,radToDeg:ip,isPowerOfTwo:sp,ceilPowerOfTwo:rp,floorPowerOfTwo:op,setQuaternionFromProperEuler:ap,normalize:le,denormalize:Tn},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],M=s[1],_=s[4],v=s[7],O=s[2],A=s[5],P=s[8];return r[0]=o*x+a*M+l*O,r[3]=o*g+a*_+l*A,r[6]=o*m+a*v+l*P,r[1]=c*x+h*M+u*O,r[4]=c*g+h*_+u*A,r[7]=c*m+h*v+u*P,r[2]=f*x+d*M+p*O,r[5]=f*g+d*_+p*A,r[8]=f*m+d*v+p*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ya=new $t;function Du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=uo("canvas");return i.style.display="block",i}var uh={};function js(i){i in uh||(uh[i]=!0,console.warn(i))}function cp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function up(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],ph=[.3127,.329],mh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Ds]:{primaries:dh,whitePoint:ph,transfer:Ho,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:dh,whitePoint:ph,transfer:ue,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});var ts,kl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=uo("canvas")),ts.width=t.width,ts.height=t.height;let n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dp=0,fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_a(s[o].image)):r.push(_a(s[o]))}else r=_a(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fp=0,hn=class i extends ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=kn,o=Ni,a=An,l=ti,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Fn(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oi:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oi:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=_u;hn.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,O=(m+1)/2,A=(h+f)/4,P=(u+x)/4,U=(p+g)/4;return _>v&&_>O?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=P/n):v>O?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=U/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=P/r,s=U/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bl=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*x,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let O=Math.sqrt(_),A=Math.atan2(O,m*M);g=Math.sin(g*A)/O,a=Math.sin(a*A)/O}let v=a*M;if(l=l*g+f*v,c=c*g+d*v,h=h*g+p*v,u=u*g+x*v,g===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new z,xh=new Cn,Fi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Er.subVectors(this.max,Ws),es.subVectors(t.a,Ws),ns.subVectors(t.b,Ws),is.subVectors(t.c,Ws),ui.subVectors(ns,es),di.subVectors(is,ns),Ei.subVectors(es,is);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ei.z,Ei.y,ui.z,0,-ui.x,di.z,0,-di.x,Ei.z,0,-Ei.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ei.y,Ei.x,0];return!ba(e,es,ns,is,Er)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,es,ns,is,Er))?!1:(Tr.crossVectors(ui,di),e=[Tr.x,Tr.y,Tr.z],ba(e,es,ns,is,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,Sr=new Fi,es=new z,ns=new z,is=new z,ui=new z,di=new z,Ei=new z,Ws=new z,Er=new z,Tr=new z,Ti=new z;function ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var pp=new Fi,Xs=new z,Ma=new z,Bi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Ma)),this.expandByPoint(Xs.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new z,wa=new z,Ar=new z,fi=new z,Sa=new z,Rr=new z,Ea=new z,Mi=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wa.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(wa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ar),a=fi.dot(this.direction),l=-fi.dot(Ar),c=fi.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wa).addScaledVector(Ar,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){Sa.subVectors(e,t),Rr.subVectors(n,t),Ea.crossVectors(Sa,Rr);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let l=a*this.direction.dot(Rr.crossVectors(fi,Rr));if(l<0)return null;let c=a*this.direction.dot(Sa.cross(fi));if(c<0||l+c>o)return null;let h=-a*fi.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),pi.crossVectors(n,an),pi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),pi.crossVectors(n,an)),pi.normalize(),Cr.crossVectors(an,pi),s[0]=pi.x,s[4]=Cr.x,s[8]=an.x,s[1]=pi.y,s[5]=Cr.y,s[9]=an.y,s[2]=pi.z,s[6]=Cr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],_=n[7],v=n[11],O=n[15],A=s[0],P=s[4],U=s[8],E=s[12],w=s[1],D=s[5],G=s[9],W=s[13],J=s[2],it=s[6],K=s[10],ot=s[14],tt=s[3],dt=s[7],ut=s[11],wt=s[15];return r[0]=o*A+a*w+l*J+c*tt,r[4]=o*P+a*D+l*it+c*dt,r[8]=o*U+a*G+l*K+c*ut,r[12]=o*E+a*W+l*ot+c*wt,r[1]=h*A+u*w+f*J+d*tt,r[5]=h*P+u*D+f*it+d*dt,r[9]=h*U+u*G+f*K+d*ut,r[13]=h*E+u*W+f*ot+d*wt,r[2]=p*A+x*w+g*J+m*tt,r[6]=p*P+x*D+g*it+m*dt,r[10]=p*U+x*G+g*K+m*ut,r[14]=p*E+x*W+g*ot+m*wt,r[3]=M*A+_*w+v*J+O*tt,r[7]=M*P+_*D+v*it+O*dt,r[11]=M*U+_*G+v*K+O*ut,r[15]=M*E+_*W+v*ot+O*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,_=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,v=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,O=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,A=e*M+n*_+s*v+r*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=M*P,t[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*m-n*f*m)*P,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*m+n*l*m)*P,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*P,t[4]=_*P,t[5]=(h*g*r-p*f*r+p*s*d-e*g*d-h*s*m+e*f*m)*P,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*P,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*P,t[8]=v*P,t[9]=(p*u*r-h*x*r-p*n*d+e*x*d+h*n*m-e*u*m)*P,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*m+e*a*m)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*P,t[12]=O*P,t[13]=(h*x*s-p*u*s+p*n*f-e*x*f-h*n*g+e*u*g)*P,t[14]=(p*a*s-o*x*s-p*n*l+e*x*l+o*n*g-e*a*g)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,M=l*c,_=l*h,v=l*u,O=n.x,A=n.y,P=n.z;return s[0]=(1-(x+m))*O,s[1]=(d+v)*O,s[2]=(p-_)*O,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+m))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(p+_)*P,s[9]=(g-M)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let c=1/r,h=1/o,u=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,p;if(a===jn)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ho)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,p,x;if(a===jn)p=(o+r)*u,x=-2*u;else if(a===ho)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ss=new z,wn=new ne,mp=new z(0,0,0),gp=new z(1,1,1),pi=new z,Cr=new z,an=new z,yh=new ne,_h=new Cn,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _h.setFromEuler(this),this.setFromQuaternion(_h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xp=0,vh=new z,rs=new Cn,$n=new ne,Pr=new z,$s=new z,yp=new z,_p=new Cn,bh=new z(1,0,0),Mh=new z(0,1,0),wh=new z(0,0,1),Sh={type:"added"},vp={type:"removed"},os={type:"childadded",child:null},Ta={type:"childremoved",child:null},Ie=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Bn,n=new Cn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new $t}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt($s,Pr,this.up):$n.lookAt(Pr,$s,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),rs.setFromRotationMatrix($n),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new z(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new z,qn=new z,Aa=new z,Yn=new z,as=new z,ls=new z,Eh=new z,Ra=new z,Ca=new z,Pa=new z,Ia=new we,La=new we,Da=new we,Kn=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),qn.subVectors(n,e),Aa.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(qn),l=Sn.dot(Aa),c=qn.dot(qn),h=qn.dot(Aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ia.setScalar(0),La.setScalar(0),Da.setScalar(0),Ia.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),qn.subVectors(t,e),Sn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;as.subVectors(s,n),ls.subVectors(r,n),Ra.subVectors(t,n);let l=as.dot(Ra),c=ls.dot(Ra);if(l<=0&&c<=0)return e.copy(n);Ca.subVectors(t,s);let h=as.dot(Ca),u=ls.dot(Ca);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(as,o);Pa.subVectors(t,r);let d=as.dot(Pa),p=ls.dot(Pa);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ls,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Eh.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Eh,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ic(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ua(o,r,t+1/3),this.g=Ua(o,r,t),this.b=Ua(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ee.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Oe(Ve.r*255,0,255))*65536+Math.round(Oe(Ve.g*255,0,255))*256+Math.round(Oe(Ve.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=qe){ee.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Ir);let n=tr(mi.h,Ir.h,e),s=tr(mi.s,Ir.s,e),r=tr(mi.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Ot;Ot.NAMES=Uu;var bp=0,zn=class extends ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Fn(),this.name="",this.blending=_s,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=ja,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ge=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new z,Lr=new ht,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}};var mo=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var go=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mp=0,pn=new ne,Na=new Ie,cs=new z,ln=new Fi,qs=new Fi,Ne=new z,Jt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?go:mo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(ln.min,qs.min),ln.expandByPoint(Ne),Ne.addVectors(ln.max,qs.max),ln.expandByPoint(Ne)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(t,c),Ne.add(cs)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new z,l[U]=new z;let c=new z,h=new z,u=new z,f=new ht,d=new ht,p=new ht,x=new z,g=new z;function m(U,E,w){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(D),a[U].add(x),a[E].add(x),a[w].add(x),l[U].add(g),l[E].add(g),l[w].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let U=0,E=M.length;U<E;++U){let w=M[U],D=w.start,G=w.count;for(let W=D,J=D+G;W<J;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let _=new z,v=new z,O=new z,A=new z;function P(U){O.fromBufferAttribute(s,U),A.copy(O);let E=a[U];_.copy(E),_.sub(O.multiplyScalar(O.dot(E))).normalize(),v.crossVectors(A,E);let D=v.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,D)}for(let U=0,E=M.length;U<E;++U){let w=M[U],D=w.start,G=w.count;for(let W=D,J=D+G;W<J;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new ne,Ai=new Mi,Dr=new Bi,Ah=new z,Ur=new z,Nr=new z,Or=new z,Oa=new z,kr=new z,Rh=new z,Fr=new z,Vt=class extends Ie{constructor(t=new Jt,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Oa.fromBufferAttribute(u,t),o?kr.addScaledVector(Oa,h):kr.addScaledVector(Oa.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Dr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Dr,Ah)===null||Ai.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(Th.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,O=_;v<O;v+=3){let A=a.getX(v),P=a.getX(v+1),U=a.getX(v+2);s=Br(this,m,t,n,c,h,u,A,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=Br(this,o,t,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,O=_;v<O;v+=3){let A=v,P=v+1,U=v+2;s=Br(this,m,t,n,c,h,u,A,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=g,_=g+1,v=g+2;s=Br(this,o,t,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function wp(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:i}}function Br(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ur),i.getVertexPosition(l,Nr),i.getVertexPosition(c,Or);let h=wp(i,t,e,n,Ur,Nr,Or,Rh);if(h){let u=new z;Kn.getBarycoord(Rh,Ur,Nr,Or,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=Kn.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Kn.getNormal(Ur,Nr,Or,f.normal),h.face=f,h.barycoord=u}return h}var Se=class i extends Jt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function p(x,g,m,M,_,v,O,A,P,U,E){let w=v/P,D=O/U,G=v/2,W=O/2,J=A/2,it=P+1,K=U+1,ot=0,tt=0,dt=new z;for(let ut=0;ut<K;ut++){let wt=ut*D-W;for(let Ft=0;Ft<it;Ft++){let Zt=Ft*w-G;dt[x]=Zt*M,dt[g]=wt*_,dt[m]=J,c.push(dt.x,dt.y,dt.z),dt[x]=0,dt[g]=0,dt[m]=A>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Ft/P),u.push(1-ut/U),ot+=1}}for(let ut=0;ut<U;ut++)for(let wt=0;wt<P;wt++){let Ft=f+wt+it*ut,Zt=f+wt+it*(ut+1),st=f+(wt+1)+it*(ut+1),pt=f+(wt+1)+it*ut;l.push(Ft,Zt,pt),l.push(Zt,st,pt),tt+=6}a.addGroup(d,tt,E),d+=tt,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Sp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Ep={clone:Cs,merge:$e},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},xo=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new z,Ch=new ht,Ph=new ht,Ye=class extends xo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ph),e.subVectors(Ph,Ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hs=-90,us=1,zl=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(hs,us,t,e);s.layers=this.layers,this.add(s);let r=new Ye(hs,us,t,e);r.layers=this.layers,this.add(r);let o=new Ye(hs,us,t,e);o.layers=this.layers,this.add(o);let a=new Ye(hs,us,t,e);a.layers=this.layers,this.add(a);let l=new Ye(hs,us,t,e);l.layers=this.layers,this.add(l);let c=new Ye(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yo=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hl=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Se(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:yi});r.uniforms.tEquirect.value=e;let o=new Vt(s,r),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=kn),new zl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ka=new z,Rp=new z,Cp=new $t,En=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ka.subVectors(n,e).cross(Rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cp.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Bi,zr=new z,ar=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],p=s[9],x=s[10],g=s[11],m=s[12],M=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,g-d,v-m).normalize(),n[1].setComponents(l+r,f+c,g+d,v+m).normalize(),n[2].setComponents(l+o,f+h,g+p,v+M).normalize(),n[3].setComponents(l-o,f-h,g-p,v-M).normalize(),n[4].setComponents(l-a,f-u,g-x,v-_).normalize(),e===jn)n[5].setComponents(l+a,f+u,g+x,v+_).normalize();else if(e===ho)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ou(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ii=class i extends Jt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*f-o;for(let _=0;_<c;_++){let v=_*u-r;p.push(v,-M,0),x.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let _=M+c*m,v=M+c*(m+1),O=M+1+c*(m+1),A=M+1+c*m;d.push(_,v,A),d.push(v,O,A)}this.setIndex(d),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rm=`PhysicalMaterial material;
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
#endif`,Cm=`struct PhysicalMaterial {
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
}`,Pm=`
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,e0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Ip,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Up,alphatest_fragment:Np,alphatest_pars_fragment:Op,aomap_fragment:kp,aomap_pars_fragment:Fp,batching_pars_vertex:Bp,batching_vertex:zp,begin_vertex:Hp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Zp,color_fragment:Kp,color_pars_fragment:Jp,color_pars_vertex:jp,color_vertex:Qp,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:wm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:_m,lights_lambert_fragment:vm,lights_lambert_pars_fragment:bm,lights_pars_begin:Mm,lights_toon_fragment:Sm,lights_toon_pars_fragment:Em,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:Rm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Pm,lights_fragment_maps:Im,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Om,map_fragment:km,map_pars_fragment:Fm,map_particle_fragment:Bm,map_particle_pars_fragment:zm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:$m,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Zm,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:xg,skinning_vertex:yg,skinnormal_vertex:_g,specularmap_fragment:vg,specularmap_pars_fragment:bg,tonemapping_fragment:Mg,tonemapping_pars_fragment:wg,transmission_fragment:Sg,transmission_pars_fragment:Eg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ug,cube_frag:Ng,depth_vert:Og,depth_frag:kg,distanceRGBA_vert:Fg,distanceRGBA_frag:Bg,equirect_vert:zg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:$g,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Zg,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:t0,meshphysical_frag:e0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},vt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},On={basic:{uniforms:$e([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:$e([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:$e([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:$e([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:$e([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:$e([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:$e([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:$e([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:$e([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:$e([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:$e([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:$e([vt.common,vt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:$e([vt.lights,vt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};On.physical={uniforms:$e([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Hr={r:0,b:0,g:0},Ci=new Bn,h0=new ne;function u0(i,t,e,n,s,r,o){let a=new Ot(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1,v=p(M);v===null?m(a,l):v&&v.isColor&&(m(v,1),_=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,_){let v=p(_);v&&(v.isCubeTexture||v.mapping===zo)?(h===void 0&&(h=new Vt(new Se(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Cs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(_.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Ci)),h.material.toneMapped=ee.getTransfer(v.colorSpace)!==ue,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Vt(new ii(2,2),new Hn({name:"BackgroundMaterial",uniforms:Cs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,_){M.getRGB(Hr,Nu(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:x,addToRenderList:g}}function d0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,D,G,W,J){let it=!1,K=u(W,G,D);r!==K&&(r=K,c(r.object)),it=d(w,W,G,J),it&&p(w,W,G,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,v(w,D,G,W),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,D,G){let W=G.wireframe===!0,J=n[w.id];J===void 0&&(J={},n[w.id]=J);let it=J[D.id];it===void 0&&(it={},J[D.id]=it);let K=it[W];return K===void 0&&(K=f(l()),it[W]=K),K}function f(w){let D=[],G=[],W=[];for(let J=0;J<e;J++)D[J]=0,G[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:W,object:w,attributes:{},index:null}}function d(w,D,G,W){let J=r.attributes,it=D.attributes,K=0,ot=G.getAttributes();for(let tt in ot)if(ot[tt].location>=0){let ut=J[tt],wt=it[tt];if(wt===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(wt=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(wt=w.instanceColor)),ut===void 0||ut.attribute!==wt||wt&&ut.data!==wt.data)return!0;K++}return r.attributesNum!==K||r.index!==W}function p(w,D,G,W){let J={},it=D.attributes,K=0,ot=G.getAttributes();for(let tt in ot)if(ot[tt].location>=0){let ut=it[tt];ut===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor));let wt={};wt.attribute=ut,ut&&ut.data&&(wt.data=ut.data),J[tt]=wt,K++}r.attributes=J,r.attributesNum=K,r.index=W}function x(){let w=r.newAttributes;for(let D=0,G=w.length;D<G;D++)w[D]=0}function g(w){m(w,0)}function m(w,D){let G=r.newAttributes,W=r.enabledAttributes,J=r.attributeDivisors;G[w]=1,W[w]===0&&(i.enableVertexAttribArray(w),W[w]=1),J[w]!==D&&(i.vertexAttribDivisor(w,D),J[w]=D)}function M(){let w=r.newAttributes,D=r.enabledAttributes;for(let G=0,W=D.length;G<W;G++)D[G]!==w[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function _(w,D,G,W,J,it,K){K===!0?i.vertexAttribIPointer(w,D,G,J,it):i.vertexAttribPointer(w,D,G,W,J,it)}function v(w,D,G,W){x();let J=W.attributes,it=G.getAttributes(),K=D.defaultAttributeValues;for(let ot in it){let tt=it[ot];if(tt.location>=0){let dt=J[ot];if(dt===void 0&&(ot==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),ot==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),dt!==void 0){let ut=dt.normalized,wt=dt.itemSize,Ft=t.get(dt);if(Ft===void 0)continue;let Zt=Ft.buffer,st=Ft.type,pt=Ft.bytesPerElement,Tt=st===i.INT||st===i.UNSIGNED_INT||dt.gpuType===Sc;if(dt.isInterleavedBufferAttribute){let mt=dt.data,kt=mt.stride,Gt=dt.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<tt.locationSize;zt++)m(tt.location+zt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<tt.locationSize;zt++)g(tt.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let zt=0;zt<tt.locationSize;zt++)_(tt.location+zt,wt/tt.locationSize,st,ut,kt*pt,(Gt+wt/tt.locationSize*zt)*pt,Tt)}else{if(dt.isInstancedBufferAttribute){for(let mt=0;mt<tt.locationSize;mt++)m(tt.location+mt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let mt=0;mt<tt.locationSize;mt++)g(tt.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let mt=0;mt<tt.locationSize;mt++)_(tt.location+mt,wt/tt.locationSize,st,ut,wt*pt,wt/tt.locationSize*mt*pt,Tt)}}else if(K!==void 0){let ut=K[ot];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(tt.location,ut);break;case 3:i.vertexAttrib3fv(tt.location,ut);break;case 4:i.vertexAttrib4fv(tt.location,ut);break;default:i.vertexAttrib1fv(tt.location,ut)}}}}M()}function O(){U();for(let w in n){let D=n[w];for(let G in D){let W=D[G];for(let J in W)h(W[J].object),delete W[J];delete D[G]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;let D=n[w.id];for(let G in D){let W=D[G];for(let J in W)h(W[J].object),delete W[J];delete D[G]}delete n[w.id]}function P(w){for(let D in n){let G=n[D];if(G[w.id]===void 0)continue;let W=G[w.id];for(let J in W)h(W[J].object),delete W[J];delete G[w.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function f0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let U=P===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ti&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Jn&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:O,maxSamples:A}}function m0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,v=m.clippingState||null;l.value=v,v=h(p,f,_,d);for(let O=0;O!==_;++O)v[O]=e[O];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function g0(i){let t=new WeakMap;function e(o,a){return a===ol?o.mapping=Es:a===al&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ol||a===al)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var _o=class extends xo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xs=4,Ih=[.125,.215,.35,.446,.526,.582],Di=20,Fa=new _o,Lh=new Ot,Ba=null,za=0,Ha=0,Va=!1,Ii=(1+Math.sqrt(5))/2,ds=1/Ii,Dh=[new z(-Ii,ds,0),new z(Ii,ds,0),new z(-ds,0,Ii),new z(ds,0,Ii),new z(0,Ii,-ds),new z(0,Ii,ds),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],vo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,Ha),this._renderer.xr.enabled=Va,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:mr,format:An,colorSpace:Ds,depthBuffer:!1},s=Uh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=y0(r,t,e)}return s}_compileMaterial(t){let e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s){let a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lh),h.toneMapping=_i,h.autoClear=!1;let d=new Ge({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),p=new Vt(new Se,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(Lh),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;Vr(s,M*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Es||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Vt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);let m=[],M=0;for(let P=0;P<Di;++P){let U=P/x,E=Math.exp(-U*U/2);m.push(E),P===0?M+=E:P<g&&(M+=2*E)}for(let P=0;P<m.length;P++)m[P]=m[P]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=p,f.mipInt.value=_-n;let v=this._sizeLods[s],O=3*v*(s>_-xs?s-_+xs:0),A=4*(this._cubeSize-v);Vr(e,O,A,3*v,2*v),l.setRenderTarget(e),l.render(u,Fa)}};function x0(i){let t=[],e=[],n=[],s=i,r=i-xs+1+Ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-xs?l=Ih[o-i+xs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,M=new Float32Array(x*p*d),_=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let A=0;A<d;A++){let P=A%3*2/3-1,U=A>2?0:-1,E=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];M.set(E,x*p*A),_.set(f,g*p*A);let w=[A,A,A,A,A,A];v.set(w,m*p*A)}let O=new Jt;O.setAttribute("position",new ke(M,x)),O.setAttribute("uv",new ke(_,g)),O.setAttribute("faceIndex",new ke(v,m)),t.push(O),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uh(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function y0(i,t,e){let n=new Float32Array(Di),s=new z(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Nh(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Oh(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function _0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ol||l===al,h=l===Es||l===Ts;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new vo(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new vo(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function v0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function b0(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){let O=M[_+0],A=M[_+1],P=M[_+2];f.push(O,A,A,P,P,O)}}else if(p!==void 0){let M=p.array;x=p.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let O=_+0,A=_+1,P=_+2;f.push(O,A,A,P,P,O)}}else return;let g=new(Du(f)?go:mo)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function M0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function u(f,d,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M]*x[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function w0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function S0(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,O=1;v>t.maxTextureSize&&(O=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*O*4*u),P=new po(A,v,O,u);P.type=Jn,P.needsUpdate=!0;let U=_*4;for(let w=0;w<u;w++){let D=g[w],G=m[w],W=M[w],J=v*O*4*w;for(let it=0;it<D.count;it++){let K=it*U;d===!0&&(s.fromBufferAttribute(D,it),A[J+K+0]=s.x,A[J+K+1]=s.y,A[J+K+2]=s.z,A[J+K+3]=0),p===!0&&(s.fromBufferAttribute(G,it),A[J+K+4]=s.x,A[J+K+5]=s.y,A[J+K+6]=s.z,A[J+K+7]=0),x===!0&&(s.fromBufferAttribute(W,it),A[J+K+8]=s.x,A[J+K+9]=s.y,A[J+K+10]=s.z,A[J+K+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ht(v,O)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function E0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var bo=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h=vs){if(h!==vs&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=ki),n===void 0&&h===Rs&&(n=As),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ku=new hn,kh=new bo(1,1),Fu=new po,Bu=new Bl,zu=new yo,Fh=[],Bh=[],zh=new Float32Array(16),Hh=new Float32Array(9),Vh=new Float32Array(4);function Us(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vo(i,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Vh.set(n),i.uniformMatrix2fv(this.addr,!1,Vh),De(e,n)}}function I0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),De(e,n)}}function L0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),De(e,n)}}function D0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function k0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=Iu,r=kh):r=ku,e.setTexture2D(t||r,s)}function V0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bu,s)}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function W0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fu,s)}function X0(i){switch(i){case 5126:return T0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return I0;case 35676:return L0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return k0;case 36294:return F0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}function $0(i,t){i.uniform1fv(this.addr,t)}function q0(i,t){let e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){let e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function Z0(i,t){let e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function K0(i,t){let e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J0(i,t){let e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j0(i,t){let e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Q0(i,t){i.uniform1iv(this.addr,t)}function tx(i,t){i.uniform2iv(this.addr,t)}function ex(i,t){i.uniform3iv(this.addr,t)}function nx(i,t){i.uniform4iv(this.addr,t)}function ix(i,t){i.uniform1uiv(this.addr,t)}function sx(i,t){i.uniform2uiv(this.addr,t)}function rx(i,t){i.uniform3uiv(this.addr,t)}function ox(i,t){i.uniform4uiv(this.addr,t)}function ax(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function lx(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bu,r[o])}function cx(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zu,r[o])}function hx(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fu,r[o])}function ux(i){switch(i){case 5126:return $0;case 35664:return q0;case 35665:return Y0;case 35666:return Z0;case 35674:return K0;case 35675:return J0;case 35676:return j0;case 5124:case 35670:return Q0;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}var Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=X0(e.type)}},Gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ux(e.type)}},Wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function Gh(i,t){i.seq.push(t),i.map[t.id]=t}function dx(i,t,e){let n=i.name,s=n.length;for(Ga.lastIndex=0;;){let r=Ga.exec(n),o=Ga.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gh(e,c===void 0?new Vl(a,i,t):new Gl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Wl(a),Gh(e,u)),e=u}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var fx=37297,px=0;function mx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xh=new $t;function gx(i){ee._getMatrix(Xh,ee.workingColorSpace,i);let t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $h(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mx(i.getShaderSource(t),o)}else return s}function xx(i,t){let e=gx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yx(i,t){let e;switch(t){case Rf:e="Linear";break;case Cf:e="Reinhard";break;case Pf:e="Cineon";break;case If:e="ACESFilmic";break;case Df:e="AgX";break;case Uf:e="Neutral";break;case Lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gr=new z;function _x(){ee.getLuminanceCoefficients(Gr);let i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function bx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qs(i){return i!==""}function qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(wx,Ex)}var Sx=new Map;function Ex(i,t){let e=qt[t];if(e===void 0){let n=Sx.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}var Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(i){return i.replace(Tx,Ax)}function Ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Rx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===af?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case Ts:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Px(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Ix(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yu:t="ENVMAP_BLENDING_MULTIPLY";break;case Tf:t="ENVMAP_BLENDING_MIX";break;case Af:t="ENVMAP_BLENDING_ADD";break}return t}function Lx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Rx(e),c=Cx(e),h=Px(e),u=Ix(e),f=Lx(e),d=vx(e),p=bx(r),x=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(g=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?qt.tonemapping_pars_fragment:"",e.toneMapping!==_i?yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,xx("linearToOutputTexel",e.outputColorSpace),_x(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Xl(o),o=qh(o,e),o=Yh(o,e),a=Xl(a),a=qh(a,e),a=Yh(a,e),o=Zh(o),a=Zh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+g+o,v=M+m+a,O=Wh(s,s.VERTEX_SHADER,_),A=Wh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,O),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(D){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(A).trim(),it=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,O,A);else{let ot=$h(s,O,"vertex"),tt=$h(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+ot+`
`+tt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||J==="")&&(K=!1);K&&(D.diagnostics={runnable:it,programLog:G,vertexShader:{log:W,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(O),s.deleteShader(A),U=new ws(s,x),E=Mx(s,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,fx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=px++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=A,this}var Ux=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ql(t),e.set(t,n)),n}},ql=class{constructor(t){this.id=Ux++,this.code=t,this.usedTimes=0}};function Nx(i,t,e,n,s,r,o){let a=new or,l=new $l,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,w,D,G,W){let J=G.fog,it=W.geometry,K=E.isMeshStandardMaterial?G.environment:null,ot=(E.isMeshStandardMaterial?e:t).get(E.envMap||K),tt=ot&&ot.mapping===zo?ot.image.height:null,dt=p[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let ut=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,wt=ut!==void 0?ut.length:0,Ft=0;it.morphAttributes.position!==void 0&&(Ft=1),it.morphAttributes.normal!==void 0&&(Ft=2),it.morphAttributes.color!==void 0&&(Ft=3);let Zt,st,pt,Tt;if(dt){let St=On[dt];Zt=St.vertexShader,st=St.fragmentShader}else Zt=E.vertexShader,st=E.fragmentShader,l.update(E),pt=l.getVertexShaderID(E),Tt=l.getFragmentShaderID(E);let mt=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),Gt=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,te=!!E.map,at=!!E.matcap,gt=!!ot,B=!!E.aoMap,Pt=!!E.lightMap,ft=!!E.bumpMap,At=!!E.normalMap,_t=!!E.displacementMap,Bt=!!E.emissiveMap,Rt=!!E.metalnessMap,N=!!E.roughnessMap,S=E.anisotropy>0,j=E.clearcoat>0,rt=E.dispersion>0,ct=E.iridescence>0,lt=E.sheen>0,It=E.transmission>0,bt=S&&!!E.anisotropyMap,Ct=j&&!!E.clearcoatMap,Kt=j&&!!E.clearcoatNormalMap,k=j&&!!E.clearcoatRoughnessMap,y=ct&&!!E.iridescenceMap,b=ct&&!!E.iridescenceThicknessMap,T=lt&&!!E.sheenColorMap,C=lt&&!!E.sheenRoughnessMap,L=!!E.specularMap,X=!!E.specularColorMap,$=!!E.specularIntensityMap,I=It&&!!E.transmissionMap,H=It&&!!E.thicknessMap,V=!!E.gradientMap,F=!!E.alphaMap,q=E.alphaTest>0,Q=!!E.alphaHash,xt=!!E.extensions,Mt=_i;E.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Ht={shaderID:dt,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:st,defines:E.defines,customVertexShaderID:pt,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:zt,batchingColor:zt&&W._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&W.instanceColor!==null,instancingMorph:Gt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Ds,alphaToCoverage:!!E.alphaToCoverage,map:te,matcap:at,envMap:gt,envMapMode:gt&&ot.mapping,envMapCubeUVHeight:tt,aoMap:B,lightMap:Pt,bumpMap:ft,normalMap:At,displacementMap:f&&_t,emissiveMap:Bt,normalMapObjectSpace:At&&E.normalMapType===Ff,normalMapTangentSpace:At&&E.normalMapType===Pu,metalnessMap:Rt,roughnessMap:N,anisotropy:S,anisotropyMap:bt,clearcoat:j,clearcoatMap:Ct,clearcoatNormalMap:Kt,clearcoatRoughnessMap:k,dispersion:rt,iridescence:ct,iridescenceMap:y,iridescenceThicknessMap:b,sheen:lt,sheenColorMap:T,sheenRoughnessMap:C,specularMap:L,specularColorMap:X,specularIntensityMap:$,transmission:It,transmissionMap:I,thicknessMap:H,gradientMap:V,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:F,alphaTest:q,alphaHash:Q,combine:E.combine,mapUv:te&&x(E.map.channel),aoMapUv:B&&x(E.aoMap.channel),lightMapUv:Pt&&x(E.lightMap.channel),bumpMapUv:ft&&x(E.bumpMap.channel),normalMapUv:At&&x(E.normalMap.channel),displacementMapUv:_t&&x(E.displacementMap.channel),emissiveMapUv:Bt&&x(E.emissiveMap.channel),metalnessMapUv:Rt&&x(E.metalnessMap.channel),roughnessMapUv:N&&x(E.roughnessMap.channel),anisotropyMapUv:bt&&x(E.anisotropyMap.channel),clearcoatMapUv:Ct&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:y&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:b&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:T&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:C&&x(E.sheenRoughnessMap.channel),specularMapUv:L&&x(E.specularMap.channel),specularColorMapUv:X&&x(E.specularColorMap.channel),specularIntensityMapUv:$&&x(E.specularIntensityMap.channel),transmissionMapUv:I&&x(E.transmissionMap.channel),thicknessMapUv:H&&x(E.thicknessMap.channel),alphaMapUv:F&&x(E.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(At||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!it.attributes.uv&&(te||F),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:W.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===oe,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function m(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)w.push(D),w.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(w,E),_(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function M(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function _(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let w=p[E.type],D;if(w){let G=On[w];D=Ep.clone(G.uniforms)}else D=E.uniforms;return D}function O(E,w){let D;for(let G=0,W=h.length;G<W;G++){let J=h[G];if(J.cacheKey===w){D=J,++D.usedTimes;break}}return D===void 0&&(D=new Dx(i,w,E,r),h.push(D)),D}function A(E){if(--E.usedTimes===0){let w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function P(E){l.remove(E)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:O,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:U}}function Ox(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,p,x,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||kx),n.length>1&&n.sort(f||Jh),s.length>1&&s.sort(f||Jh)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jh,i.set(n,[o])):s>=r.length?(o=new jh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ot};break;case"SpotLight":e={position:new z,direction:new z,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hx=0;function Vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gx(i){let t=new Bx,e=zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new ne,o=new ne;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,M=0,_=0,v=0,O=0,A=0,P=0;c.sort(Vx);for(let E=0,w=c.length;E<w;E++){let D=c[E],G=D.color,W=D.intensity,J=D.distance,it=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*W,u+=G.g*W,f+=G.b*W;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],W);P++}else if(D.isDirectionalLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ot=D.shadow,tt=e.get(D);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,n.directionalShadow[d]=tt,n.directionalShadowMap[d]=it,n.directionalShadowMatrix[d]=D.shadow.matrix,M++}n.directional[d]=K,d++}else if(D.isSpotLight){let K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(G).multiplyScalar(W),K.distance=J,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[x]=K;let ot=D.shadow;if(D.map&&(n.spotLightMap[O]=D.map,O++,ot.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=ot.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,n.spotShadow[x]=tt,n.spotShadowMap[x]=it,v++}x++}else if(D.isRectAreaLight){let K=t.get(D);K.color.copy(G).multiplyScalar(W),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=K,g++}else if(D.isPointLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){let ot=D.shadow,tt=e.get(D);tt.shadowIntensity=ot.intensity,tt.shadowBias=ot.bias,tt.shadowNormalBias=ot.normalBias,tt.shadowRadius=ot.radius,tt.shadowMapSize=ot.mapSize,tt.shadowCameraNear=ot.camera.near,tt.shadowCameraFar=ot.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=D.shadow.matrix,_++}n.point[p]=K,p++}else if(D.isHemisphereLight){let K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(W),K.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[m]=K,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==d||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==M||U.numPointShadows!==_||U.numSpotShadows!==v||U.numSpotMaps!==O||U.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+O-A,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,U.directionalLength=d,U.pointLength=p,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=M,U.numPointShadows=_,U.numSpotShadows=v,U.numSpotMaps=O,U.numLightProbes=P,n.version=Hx++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let _=c[m];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Qh(i){let t=new Gx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qh(i),t.set(s,[a])):r>=o.length?(a=new Qh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yl=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;function qx(i,t,e){let n=new ar,s=new ht,r=new ht,o=new we,a=new Yl({depthPacking:kf}),l=new Zl,c={},h=e.maxTextureSize,u={[bi]:en,[en]:bi,[oe]:oe},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Xx,fragmentShader:$x}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Jt;p.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let m=this.type;this.render=function(A,P,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),G=i.state;G.setBlending(yi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=m!==Zn&&this.type===Zn,J=m===Zn&&this.type!==Zn;for(let it=0,K=A.length;it<K;it++){let ot=A[it],tt=ot.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let dt=tt.getFrameExtents();if(s.multiply(dt),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,tt.mapSize.y=r.y)),tt.map===null||W===!0||J===!0){let wt=this.type!==Zn?{minFilter:Rn,magFilter:Rn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new ni(s.x,s.y,wt),tt.map.texture.name=ot.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let ut=tt.getViewportCount();for(let wt=0;wt<ut;wt++){let Ft=tt.getViewport(wt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),G.viewport(o),tt.updateMatrices(ot,wt),n=tt.getFrustum(),v(P,U,tt.camera,ot,this.type)}tt.isPointLightShadow!==!0&&this.type===Zn&&M(tt,U),tt.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,w,D)};function M(A,P){let U=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ni(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,U,d,x,null)}function _(A,P,U,E){let w=null,D=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)w=D;else if(w=U.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let G=w.uuid,W=P.uuid,J=c[G];J===void 0&&(J={},c[G]=J);let it=J[W];it===void 0&&(it=w.clone(),J[W]=it,P.addEventListener("dispose",O)),w=it}if(w.visible=P.visible,w.wireframe=P.wireframe,E===Zn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=i.properties.get(w);G.light=U}return w}function v(A,P,U,E,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let W=t.update(A),J=A.material;if(Array.isArray(J)){let it=W.groups;for(let K=0,ot=it.length;K<ot;K++){let tt=it[K],dt=J[tt.materialIndex];if(dt&&dt.visible){let ut=_(A,dt,E,w);A.onBeforeShadow(i,A,P,U,W,ut,tt),i.renderBufferDirect(U,null,W,ut,A,tt),A.onAfterShadow(i,A,P,U,W,ut,tt)}}}else if(J.visible){let it=_(A,J,E,w);A.onBeforeShadow(i,A,P,U,W,it,null),i.renderBufferDirect(U,null,W,it,A,null),A.onAfterShadow(i,A,P,U,W,it,null)}}let G=A.children;for(let W=0,J=G.length;W<J;W++)v(G[W],P,U,E,w)}function O(A){A.target.removeEventListener("dispose",O);for(let U in c){let E=c[U],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}var Yx={[Qa]:tl,[el]:sl,[nl]:rl,[Ss]:il,[tl]:Qa,[sl]:el,[rl]:nl,[il]:Ss};function Zx(i,t){function e(){let I=!1,H=new we,V=null,F=new we(0,0,0,0);return{setMask:function(q){V!==q&&!I&&(i.colorMask(q,q,q,q),V=q)},setLocked:function(q){I=q},setClear:function(q,Q,xt,Mt,Ht){Ht===!0&&(q*=Mt,Q*=Mt,xt*=Mt),H.set(q,Q,xt,Mt),F.equals(H)===!1&&(i.clearColor(q,Q,xt,Mt),F.copy(H))},reset:function(){I=!1,V=null,F.set(-1,0,0,0)}}}function n(){let I=!1,H=!1,V=null,F=null,q=null;return{setReversed:function(Q){if(H!==Q){let xt=t.get("EXT_clip_control");H?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT);let Mt=q;q=null,this.setClear(Mt)}H=Q},getReversed:function(){return H},setTest:function(Q){Q?mt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(Q){V!==Q&&!I&&(i.depthMask(Q),V=Q)},setFunc:function(Q){if(H&&(Q=Yx[Q]),F!==Q){switch(Q){case Qa:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=Q}},setLocked:function(Q){I=Q},setClear:function(Q){q!==Q&&(H&&(Q=1-Q),i.clearDepth(Q),q=Q)},reset:function(){I=!1,V=null,F=null,q=null,H=!1}}}function s(){let I=!1,H=null,V=null,F=null,q=null,Q=null,xt=null,Mt=null,Ht=null;return{setTest:function(St){I||(St?mt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(St){H!==St&&!I&&(i.stencilMask(St),H=St)},setFunc:function(St,Qt,fe){(V!==St||F!==Qt||q!==fe)&&(i.stencilFunc(St,Qt,fe),V=St,F=Qt,q=fe)},setOp:function(St,Qt,fe){(Q!==St||xt!==Qt||Mt!==fe)&&(i.stencilOp(St,Qt,fe),Q=St,xt=Qt,Mt=fe)},setLocked:function(St){I=St},setClear:function(St){Ht!==St&&(i.clearStencil(St),Ht=St)},reset:function(){I=!1,H=null,V=null,F=null,q=null,Q=null,xt=null,Mt=null,Ht=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,_=null,v=null,O=null,A=null,P=new Ot(0,0,0),U=0,E=!1,w=null,D=null,G=null,W=null,J=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ot=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=ot>=1):tt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=ot>=2);let dt=null,ut={},wt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Zt=new we().fromArray(wt),st=new we().fromArray(Ft);function pt(I,H,V,F){let q=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<V;xt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,F,0,i.RGBA,i.UNSIGNED_BYTE,q):i.texImage2D(H+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,q);return Q}let Tt={};Tt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(Ss),ft(!1),At(nh),mt(i.CULL_FACE),B(yi);function mt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function kt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Gt(I,H){return u[I]!==H?(i.bindFramebuffer(I,H),u[I]=H,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=H),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=H),!0):!1}function zt(I,H){let V=d,F=!1;if(I){V=f.get(H),V===void 0&&(V=[],f.set(H,V));let q=I.textures;if(V.length!==q.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,xt=q.length;Q<xt;Q++)V[Q]=i.COLOR_ATTACHMENT0+Q;V.length=q.length,F=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,F=!0);F&&i.drawBuffers(V)}function te(I){return p!==I?(i.useProgram(I),p=I,!0):!1}let at={[Li]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};at[uf]=i.MIN,at[df]=i.MAX;let gt={[ff]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[bf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[xf]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[yf]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[wf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[Ef]:i.ONE_MINUS_CONSTANT_ALPHA};function B(I,H,V,F,q,Q,xt,Mt,Ht,St){if(I===yi){x===!0&&(kt(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),I!==lf){if(I!==g||St!==E){if((m!==Li||v!==Li)&&(i.blendEquation(i.FUNC_ADD),m=Li,v=Li),St)switch(I){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,_=null,O=null,A=null,P.set(0,0,0),U=0,g=I,E=St}return}q=q||H,Q=Q||V,xt=xt||F,(H!==m||q!==v)&&(i.blendEquationSeparate(at[H],at[q]),m=H,v=q),(V!==M||F!==_||Q!==O||xt!==A)&&(i.blendFuncSeparate(gt[V],gt[F],gt[Q],gt[xt]),M=V,_=F,O=Q,A=xt),(Mt.equals(P)===!1||Ht!==U)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ht),P.copy(Mt),U=Ht),g=I,E=!1}function Pt(I,H){I.side===oe?kt(i.CULL_FACE):mt(i.CULL_FACE);let V=I.side===en;H&&(V=!V),ft(V),I.blending===_s&&I.transparent===!1?B(yi):B(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let F=I.stencilWrite;a.setTest(F),F&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function At(I){I!==rf?(mt(i.CULL_FACE),I!==D&&(I===nh?i.cullFace(i.BACK):I===of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),D=I}function _t(I){I!==G&&(K&&i.lineWidth(I),G=I)}function Bt(I,H,V){I?(mt(i.POLYGON_OFFSET_FILL),(W!==H||J!==V)&&(i.polygonOffset(H,V),W=H,J=V)):kt(i.POLYGON_OFFSET_FILL)}function Rt(I){I?mt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function N(I){I===void 0&&(I=i.TEXTURE0+it-1),dt!==I&&(i.activeTexture(I),dt=I)}function S(I,H,V){V===void 0&&(dt===null?V=i.TEXTURE0+it-1:V=dt);let F=ut[V];F===void 0&&(F={type:void 0,texture:void 0},ut[V]=F),(F.type!==I||F.texture!==H)&&(dt!==V&&(i.activeTexture(V),dt=V),i.bindTexture(I,H||Tt[I]),F.type=I,F.texture=H)}function j(){let I=ut[dt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function y(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function b(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function T(I){Zt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function C(I){st.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),st.copy(I))}function L(I,H){let V=c.get(H);V===void 0&&(V=new WeakMap,c.set(H,V));let F=V.get(I);F===void 0&&(F=i.getUniformBlockIndex(H,I.name),V.set(I,F))}function X(I,H){let F=c.get(H).get(I);l.get(H)!==F&&(i.uniformBlockBinding(H,F,I.__bindingPointIndex),l.set(H,F))}function $(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,ut={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,_=null,v=null,O=null,A=null,P=new Ot(0,0,0),U=0,E=!1,w=null,D=null,G=null,W=null,J=null,Zt.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:kt,bindFramebuffer:Gt,drawBuffers:zt,useProgram:te,setBlending:B,setMaterial:Pt,setFlipSided:ft,setCullFace:At,setLineWidth:_t,setPolygonOffset:Bt,setScissorTest:Rt,activeTexture:N,bindTexture:S,unbindTexture:j,compressedTexImage2D:rt,compressedTexImage3D:ct,texImage2D:y,texImage3D:b,updateUBOMapping:L,uniformBlockBinding:X,texStorage2D:Kt,texStorage3D:k,texSubImage2D:lt,texSubImage3D:It,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ct,scissor:T,viewport:C,reset:$}}function tu(i,t,e,n){let s=Kx(n);switch(e){case wu:return i*t;case Eu:return i*t;case Tu:return i*t*2;case Au:return i*t/s.components*s.byteLength;case Ac:return i*t/s.components*s.byteLength;case Ru:return i*t*2/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case Su:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Cc:return i*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hl:case dl:return Math.max(i,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(t,8)/2;case fl:case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lo:case Pl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cu:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kx(i){switch(i){case ti:case vu:return{byteLength:1,components:1};case sr:case bu:case mr:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case ki:case Sc:case Jn:return{byteLength:4,components:1};case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(N,S){return d?new OffscreenCanvas(N,S):uo("canvas")}function x(N,S,j){let rt=1,ct=Rt(N);if((ct.width>j||ct.height>j)&&(rt=j/Math.max(ct.width,ct.height)),rt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let lt=Math.floor(rt*ct.width),It=Math.floor(rt*ct.height);u===void 0&&(u=p(lt,It));let bt=S?p(lt,It):u;return bt.width=lt,bt.height=It,bt.getContext("2d").drawImage(N,0,0,lt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+lt+"x"+It+")."),bt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),N;return N}function g(N){return N.generateMipmaps}function m(N){i.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,S,j,rt,ct=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=S;if(S===i.RED&&(j===i.FLOAT&&(lt=i.R32F),j===i.HALF_FLOAT&&(lt=i.R16F),j===i.UNSIGNED_BYTE&&(lt=i.R8)),S===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.R8UI),j===i.UNSIGNED_SHORT&&(lt=i.R16UI),j===i.UNSIGNED_INT&&(lt=i.R32UI),j===i.BYTE&&(lt=i.R8I),j===i.SHORT&&(lt=i.R16I),j===i.INT&&(lt=i.R32I)),S===i.RG&&(j===i.FLOAT&&(lt=i.RG32F),j===i.HALF_FLOAT&&(lt=i.RG16F),j===i.UNSIGNED_BYTE&&(lt=i.RG8)),S===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RG8UI),j===i.UNSIGNED_SHORT&&(lt=i.RG16UI),j===i.UNSIGNED_INT&&(lt=i.RG32UI),j===i.BYTE&&(lt=i.RG8I),j===i.SHORT&&(lt=i.RG16I),j===i.INT&&(lt=i.RG32I)),S===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),j===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),j===i.UNSIGNED_INT&&(lt=i.RGB32UI),j===i.BYTE&&(lt=i.RGB8I),j===i.SHORT&&(lt=i.RGB16I),j===i.INT&&(lt=i.RGB32I)),S===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),j===i.UNSIGNED_INT&&(lt=i.RGBA32UI),j===i.BYTE&&(lt=i.RGBA8I),j===i.SHORT&&(lt=i.RGBA16I),j===i.INT&&(lt=i.RGBA32I)),S===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),S===i.RGBA){let It=ct?Ho:ee.getTransfer(rt);j===i.FLOAT&&(lt=i.RGBA32F),j===i.HALF_FLOAT&&(lt=i.RGBA16F),j===i.UNSIGNED_BYTE&&(lt=It===ue?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function v(N,S){let j;return N?S===null||S===ki||S===As?j=i.DEPTH24_STENCIL8:S===Jn?j=i.DEPTH32F_STENCIL8:S===sr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===As?j=i.DEPTH_COMPONENT24:S===Jn?j=i.DEPTH_COMPONENT32F:S===sr&&(j=i.DEPTH_COMPONENT16),j}function O(N,S){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rn&&N.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function A(N){let S=N.target;S.removeEventListener("dispose",A),U(S),S.isVideoTexture&&h.delete(S)}function P(N){let S=N.target;S.removeEventListener("dispose",P),w(S)}function U(N){let S=n.get(N);if(S.__webglInit===void 0)return;let j=N.source,rt=f.get(j);if(rt){let ct=rt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(N),Object.keys(rt).length===0&&f.delete(j)}n.remove(N)}function E(N){let S=n.get(N);i.deleteTexture(S.__webglTexture);let j=N.source,rt=f.get(j);delete rt[S.__cacheKey],o.memory.textures--}function w(N){let S=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let ct=0;ct<S.__webglFramebuffer[rt].length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[rt][ct]);else i.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[rt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=N.textures;for(let rt=0,ct=j.length;rt<ct;rt++){let lt=n.get(j[rt]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(j[rt])}n.remove(N)}let D=0;function G(){D=0}function W(){let N=D;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),D+=1,N}function J(N){let S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function it(N,S){let j=n.get(N);if(N.isVideoTexture&&_t(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){let rt=N.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(j,N,S);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+S)}function K(N,S){let j=n.get(N);if(N.version>0&&j.__version!==N.version){st(j,N,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+S)}function ot(N,S){let j=n.get(N);if(N.version>0&&j.__version!==N.version){st(j,N,S);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+S)}function tt(N,S){let j=n.get(N);if(N.version>0&&j.__version!==N.version){pt(j,N,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+S)}let dt={[Oi]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ll]:i.MIRRORED_REPEAT},ut={[Rn]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},wt={[Bf]:i.NEVER,[Xf]:i.ALWAYS,[zf]:i.LESS,[Iu]:i.LEQUAL,[Hf]:i.EQUAL,[Wf]:i.GEQUAL,[Vf]:i.GREATER,[Gf]:i.NOTEQUAL};function Ft(N,S){if(S.type===Jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===kn||S.magFilter===ga||S.magFilter===wr||S.magFilter===Ni||S.minFilter===kn||S.minFilter===ga||S.minFilter===wr||S.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,dt[S.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,dt[S.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,dt[S.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ut[S.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Rn||S.minFilter!==wr&&S.minFilter!==Ni||S.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(N,S){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",A));let rt=S.source,ct=f.get(rt);ct===void 0&&(ct={},f.set(rt,ct));let lt=J(S);if(lt!==N.__cacheKey){ct[lt]===void 0&&(ct[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ct[lt].usedTimes++;let It=ct[N.__cacheKey];It!==void 0&&(ct[N.__cacheKey].usedTimes--,It.usedTimes===0&&E(S)),N.__cacheKey=lt,N.__webglTexture=ct[lt].texture}return j}function st(N,S,j){let rt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=i.TEXTURE_3D);let ct=Zt(N,S),lt=S.source;e.bindTexture(rt,N.__webglTexture,i.TEXTURE0+j);let It=n.get(lt);if(lt.version!==It.__version||ct===!0){e.activeTexture(i.TEXTURE0+j);let bt=ee.getPrimaries(ee.workingColorSpace),Ct=S.colorSpace===xi?null:ee.getPrimaries(S.colorSpace),Kt=S.colorSpace===xi||bt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let k=x(S.image,!1,s.maxTextureSize);k=Bt(S,k);let y=r.convert(S.format,S.colorSpace),b=r.convert(S.type),T=_(S.internalFormat,y,b,S.colorSpace,S.isVideoTexture);Ft(rt,S);let C,L=S.mipmaps,X=S.isVideoTexture!==!0,$=It.__version===void 0||ct===!0,I=lt.dataReady,H=O(S,k);if(S.isDepthTexture)T=v(S.format===Rs,S.type),$&&(X?e.texStorage2D(i.TEXTURE_2D,1,T,k.width,k.height):e.texImage2D(i.TEXTURE_2D,0,T,k.width,k.height,0,y,b,null));else if(S.isDataTexture)if(L.length>0){X&&$&&e.texStorage2D(i.TEXTURE_2D,H,T,L[0].width,L[0].height);for(let V=0,F=L.length;V<F;V++)C=L[V],X?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,C.width,C.height,y,b,C.data):e.texImage2D(i.TEXTURE_2D,V,T,C.width,C.height,0,y,b,C.data);S.generateMipmaps=!1}else X?($&&e.texStorage2D(i.TEXTURE_2D,H,T,k.width,k.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,y,b,k.data)):e.texImage2D(i.TEXTURE_2D,0,T,k.width,k.height,0,y,b,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){X&&$&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,T,L[0].width,L[0].height,k.depth);for(let V=0,F=L.length;V<F;V++)if(C=L[V],S.format!==An)if(y!==null)if(X){if(I)if(S.layerUpdates.size>0){let q=tu(C.width,C.height,S.format,S.type);for(let Q of S.layerUpdates){let xt=C.data.subarray(Q*q/C.data.BYTES_PER_ELEMENT,(Q+1)*q/C.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,Q,C.width,C.height,1,y,xt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,C.width,C.height,k.depth,y,C.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,T,C.width,C.height,k.depth,0,C.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,C.width,C.height,k.depth,y,b,C.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,T,C.width,C.height,k.depth,0,y,b,C.data)}else{X&&$&&e.texStorage2D(i.TEXTURE_2D,H,T,L[0].width,L[0].height);for(let V=0,F=L.length;V<F;V++)C=L[V],S.format!==An?y!==null?X?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,C.width,C.height,y,C.data):e.compressedTexImage2D(i.TEXTURE_2D,V,T,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,C.width,C.height,y,b,C.data):e.texImage2D(i.TEXTURE_2D,V,T,C.width,C.height,0,y,b,C.data)}else if(S.isDataArrayTexture)if(X){if($&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,T,k.width,k.height,k.depth),I)if(S.layerUpdates.size>0){let V=tu(k.width,k.height,S.format,S.type);for(let F of S.layerUpdates){let q=k.data.subarray(F*V/k.data.BYTES_PER_ELEMENT,(F+1)*V/k.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,F,k.width,k.height,1,y,b,q)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,y,b,k.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,T,k.width,k.height,k.depth,0,y,b,k.data);else if(S.isData3DTexture)X?($&&e.texStorage3D(i.TEXTURE_3D,H,T,k.width,k.height,k.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,y,b,k.data)):e.texImage3D(i.TEXTURE_3D,0,T,k.width,k.height,k.depth,0,y,b,k.data);else if(S.isFramebufferTexture){if($)if(X)e.texStorage2D(i.TEXTURE_2D,H,T,k.width,k.height);else{let V=k.width,F=k.height;for(let q=0;q<H;q++)e.texImage2D(i.TEXTURE_2D,q,T,V,F,0,y,b,null),V>>=1,F>>=1}}else if(L.length>0){if(X&&$){let V=Rt(L[0]);e.texStorage2D(i.TEXTURE_2D,H,T,V.width,V.height)}for(let V=0,F=L.length;V<F;V++)C=L[V],X?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,y,b,C):e.texImage2D(i.TEXTURE_2D,V,T,y,b,C);S.generateMipmaps=!1}else if(X){if($){let V=Rt(k);e.texStorage2D(i.TEXTURE_2D,H,T,V.width,V.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,y,b,k)}else e.texImage2D(i.TEXTURE_2D,0,T,y,b,k);g(S)&&m(rt),It.__version=lt.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function pt(N,S,j){if(S.image.length!==6)return;let rt=Zt(N,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);let lt=n.get(ct);if(ct.version!==lt.__version||rt===!0){e.activeTexture(i.TEXTURE0+j);let It=ee.getPrimaries(ee.workingColorSpace),bt=S.colorSpace===xi?null:ee.getPrimaries(S.colorSpace),Ct=S.colorSpace===xi||It===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,k=S.image[0]&&S.image[0].isDataTexture,y=[];for(let F=0;F<6;F++)!Kt&&!k?y[F]=x(S.image[F],!0,s.maxCubemapSize):y[F]=k?S.image[F].image:S.image[F],y[F]=Bt(S,y[F]);let b=y[0],T=r.convert(S.format,S.colorSpace),C=r.convert(S.type),L=_(S.internalFormat,T,C,S.colorSpace),X=S.isVideoTexture!==!0,$=lt.__version===void 0||rt===!0,I=ct.dataReady,H=O(S,b);Ft(i.TEXTURE_CUBE_MAP,S);let V;if(Kt){X&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,H,L,b.width,b.height);for(let F=0;F<6;F++){V=y[F].mipmaps;for(let q=0;q<V.length;q++){let Q=V[q];S.format!==An?T!==null?X?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,0,0,Q.width,Q.height,T,Q.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,L,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,0,0,Q.width,Q.height,T,C,Q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q,L,Q.width,Q.height,0,T,C,Q.data)}}}else{if(V=S.mipmaps,X&&$){V.length>0&&H++;let F=Rt(y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,H,L,F.width,F.height)}for(let F=0;F<6;F++)if(k){X?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,y[F].width,y[F].height,T,C,y[F].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,L,y[F].width,y[F].height,0,T,C,y[F].data);for(let q=0;q<V.length;q++){let xt=V[q].image[F].image;X?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,0,0,xt.width,xt.height,T,C,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,L,xt.width,xt.height,0,T,C,xt.data)}}else{X?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,T,C,y[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,L,T,C,y[F]);for(let q=0;q<V.length;q++){let Q=V[q];X?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,0,0,T,C,Q.image[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,q+1,L,T,C,Q.image[F])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),lt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Tt(N,S,j,rt,ct,lt){let It=r.convert(j.format,j.colorSpace),bt=r.convert(j.type),Ct=_(j.internalFormat,It,bt,j.colorSpace),Kt=n.get(S),k=n.get(j);if(k.__renderTarget=S,!Kt.__hasExternalTextures){let y=Math.max(1,S.width>>lt),b=Math.max(1,S.height>>lt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,lt,Ct,y,b,S.depth,0,It,bt,null):e.texImage2D(ct,lt,Ct,y,b,0,It,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ct,k.__webglTexture,0,ft(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ct,k.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(N,S,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),S.depthBuffer){let rt=S.depthTexture,ct=rt&&rt.isDepthTexture?rt.type:null,lt=v(S.stencilBuffer,ct),It=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=ft(S);At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,lt,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,lt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,N)}else{let rt=S.textures;for(let ct=0;ct<rt.length;ct++){let lt=rt[ct],It=r.convert(lt.format,lt.colorSpace),bt=r.convert(lt.type),Ct=_(lt.internalFormat,It,bt,lt.colorSpace),Kt=ft(S);j&&At(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ct,S.width,S.height):At(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Ct,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(N,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(S.depthTexture);rt.__renderTarget=S,(!rt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),it(S.depthTexture,0);let ct=rt.__webglTexture,lt=ft(S);if(S.depthTexture.format===vs)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(S.depthTexture.format===Rs)At(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Gt(N){let S=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){let rt=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){let ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",ct)};rt.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=rt}if(N.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,N)}else if(j){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=i.createRenderbuffer(),mt(S.__webglDepthbuffer[rt],N,!1);else{let ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),mt(S.__webglDepthbuffer,N,!1);else{let rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(N,S,j){let rt=n.get(N);S!==void 0&&Tt(rt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Gt(N)}function te(N){let S=N.texture,j=n.get(N),rt=n.get(S);N.addEventListener("dispose",P);let ct=N.textures,lt=N.isWebGLCubeRenderTarget===!0,It=ct.length>1;if(It||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=S.version,o.memory.textures++),lt){j.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[bt]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)j.__webglFramebuffer[bt][Ct]=i.createFramebuffer()}else j.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)j.__webglFramebuffer[bt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(It)for(let bt=0,Ct=ct.length;bt<Ct;bt++){let Kt=n.get(ct[bt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&At(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let bt=0;bt<ct.length;bt++){let Ct=ct[bt];j.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[bt]);let Kt=r.convert(Ct.format,Ct.colorSpace),k=r.convert(Ct.type),y=_(Ct.internalFormat,Kt,k,Ct.colorSpace,N.isXRRenderTarget===!0),b=ft(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,b,y,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,j.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(j.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Tt(j.__webglFramebuffer[bt][Ct],N,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ct);else Tt(j.__webglFramebuffer[bt],N,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);g(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let bt=0,Ct=ct.length;bt<Ct;bt++){let Kt=ct[bt],k=n.get(Kt);e.bindTexture(i.TEXTURE_2D,k.__webglTexture),Ft(i.TEXTURE_2D,Kt),Tt(j.__webglFramebuffer,N,Kt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),g(Kt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,rt.__webglTexture),Ft(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Tt(j.__webglFramebuffer[Ct],N,S,i.COLOR_ATTACHMENT0,bt,Ct);else Tt(j.__webglFramebuffer,N,S,i.COLOR_ATTACHMENT0,bt,0);g(S)&&m(bt),e.unbindTexture()}N.depthBuffer&&Gt(N)}function at(N){let S=N.textures;for(let j=0,rt=S.length;j<rt;j++){let ct=S[j];if(g(ct)){let lt=M(N),It=n.get(ct).__webglTexture;e.bindTexture(lt,It),m(lt),e.unbindTexture()}}}let gt=[],B=[];function Pt(N){if(N.samples>0){if(At(N)===!1){let S=N.textures,j=N.width,rt=N.height,ct=i.COLOR_BUFFER_BIT,lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(N),bt=S.length>1;if(bt)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let Kt=n.get(S[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,j,rt,0,0,j,rt,ct,i.NEAREST),l===!0&&(gt.length=0,B.length=0,gt.push(i.COLOR_ATTACHMENT0+Ct),N.depthBuffer&&N.resolveDepthBuffer===!1&&(gt.push(lt),B.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let Kt=n.get(S[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let S=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ft(N){return Math.min(s.maxSamples,N.samples)}function At(N){let S=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(N){let S=o.render.frame;h.get(N)!==S&&(h.set(N,S),N.update())}function Bt(N,S){let j=N.colorSpace,rt=N.format,ct=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Ds&&j!==xi&&(ee.getTransfer(j)===ue?(rt!==An||ct!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function Rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=K,this.setTexture3D=ot,this.setTextureCube=tt,this.rebindTextures=zt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=At}function jx(i,t){function e(n,s=xi){let r,o=ee.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.BYTE;if(n===bu)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===Su)return i.RGB;if(n===An)return i.RGBA;if(n===Eu)return i.LUMINANCE;if(n===Tu)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===Au)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===Ru)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===pl)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gl||n===xl||n===yl||n===_l||n===vl||n===bl||n===Ml||n===wl||n===Sl||n===El||n===Tl||n===Al||n===Rl||n===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===Pl||n===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cu||n===Ll||n===Dl||n===Ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Kl=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qx={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hn({vertexShader:ty,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jl=class extends ei{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=new Jl,g=e.getContextAttributes(),m=null,M=null,_=[],v=[],O=new ht,A=null,P=new Ye;P.viewport=new we;let U=new Ye;U.viewport=new we;let E=[P,U],w=new Kl,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let pt=_[st];return pt===void 0&&(pt=new er,_[st]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(st){let pt=_[st];return pt===void 0&&(pt=new er,_[st]=pt),pt.getGripSpace()},this.getHand=function(st){let pt=_[st];return pt===void 0&&(pt=new er,_[st]=pt),pt.getHandSpace()};function W(st){let pt=v.indexOf(st.inputSource);if(pt===-1)return;let Tt=_[pt];Tt!==void 0&&(Tt.update(st.inputSource,st.frame,c||o),Tt.dispatchEvent({type:st.type,data:st.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",it);for(let st=0;st<_.length;st++){let pt=v[st];pt!==null&&(v[st]=null,_[st].disconnect(pt))}D=null,G=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",it),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ni(d.framebufferWidth,d.framebufferHeight,{format:An,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let pt=null,Tt=null,mt=null;g.depth&&(mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=g.stencil?Rs:vs,Tt=g.stencil?As:ki);let kt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ni(f.textureWidth,f.textureHeight,{format:An,type:ti,depthTexture:new bo(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function it(st){for(let pt=0;pt<st.removed.length;pt++){let Tt=st.removed[pt],mt=v.indexOf(Tt);mt>=0&&(v[mt]=null,_[mt].disconnect(Tt))}for(let pt=0;pt<st.added.length;pt++){let Tt=st.added[pt],mt=v.indexOf(Tt);if(mt===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=v.length){v.push(Tt),mt=Gt;break}else if(v[Gt]===null){v[Gt]=Tt,mt=Gt;break}if(mt===-1)break}let kt=_[mt];kt&&kt.connect(Tt)}}let K=new z,ot=new z;function tt(st,pt,Tt){K.setFromMatrixPosition(pt.matrixWorld),ot.setFromMatrixPosition(Tt.matrixWorld);let mt=K.distanceTo(ot),kt=pt.projectionMatrix.elements,Gt=Tt.projectionMatrix.elements,zt=kt[14]/(kt[10]-1),te=kt[14]/(kt[10]+1),at=(kt[9]+1)/kt[5],gt=(kt[9]-1)/kt[5],B=(kt[8]-1)/kt[0],Pt=(Gt[8]+1)/Gt[0],ft=zt*B,At=zt*Pt,_t=mt/(-B+Pt),Bt=_t*-B;if(pt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Bt),st.translateZ(_t),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),kt[10]===-1)st.projectionMatrix.copy(pt.projectionMatrix),st.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let Rt=zt+_t,N=te+_t,S=ft-Bt,j=At+(mt-Bt),rt=at*te/N*Rt,ct=gt*te/N*Rt;st.projectionMatrix.makePerspective(S,j,rt,ct,Rt,N),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function dt(st,pt){pt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(pt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let pt=st.near,Tt=st.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),w.near=U.near=P.near=pt,w.far=U.far=P.far=Tt,(D!==w.near||G!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,G=w.far),P.layers.mask=st.layers.mask|2,U.layers.mask=st.layers.mask|4,w.layers.mask=P.layers.mask|U.layers.mask;let mt=st.parent,kt=w.cameras;dt(w,mt);for(let Gt=0;Gt<kt.length;Gt++)dt(kt[Gt],mt);kt.length===2?tt(w,P,U):w.projectionMatrix.copy(P.projectionMatrix),ut(st,w,mt)};function ut(st,pt,Tt){Tt===null?st.matrix.copy(pt.matrixWorld):(st.matrix.copy(Tt.matrixWorld),st.matrix.invert(),st.matrix.multiply(pt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(pt.projectionMatrix),st.projectionMatrixInverse.copy(pt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=rr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let wt=null;function Ft(st,pt){if(h=pt.getViewerPose(c||o),p=pt,h!==null){let Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let mt=!1;Tt.length!==w.cameras.length&&(w.cameras.length=0,mt=!0);for(let Gt=0;Gt<Tt.length;Gt++){let zt=Tt[Gt],te=null;if(d!==null)te=d.getViewport(zt);else{let gt=u.getViewSubImage(f,zt);te=gt.viewport,Gt===0&&(t.setRenderTargetTextures(M,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(M))}let at=E[Gt];at===void 0&&(at=new Ye,at.layers.enable(Gt),at.viewport=new we,E[Gt]=at),at.matrix.fromArray(zt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(zt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(te.x,te.y,te.width,te.height),Gt===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),mt===!0&&w.cameras.push(at)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Gt=u.getDepthInformation(Tt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,s.renderState)}}for(let Tt=0;Tt<_.length;Tt++){let mt=v[Tt],kt=_[Tt];mt!==null&&kt!==void 0&&kt.update(mt,pt,c||o)}wt&&wt(st,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),p=null}let Zt=new Ou;Zt.setAnimationLoop(Ft),this.setAnimationLoop=function(st){wt=st},this.dispose=function(){}}},Pi=new Bn,ny=new ne;function iy(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Nu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,Pi.copy(v),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),g.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(Pi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=s[M.id];v===void 0&&(p(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));let O=_.program;n.updateUBOMapping(M,O);let A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){let _=u();M.__bindingPointIndex=_;let v=i.createBuffer(),O=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,O,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=s[M.id],v=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,P=v.length;A<P;A++){let U=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,w=U.length;E<w;E++){let D=U[E];if(d(D,A,E,O)===!0){let G=D.__offset,W=Array.isArray(D.value)?D.value:[D.value],J=0;for(let it=0;it<W.length;it++){let K=W[it],ot=x(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,G+J,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,J),J+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,v,O){let A=M.value,P=_+"_"+v;if(O[P]===void 0)return typeof A=="number"||typeof A=="boolean"?O[P]=A:O[P]=A.clone(),!0;{let U=O[P];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return O[P]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function p(M){let _=M.uniforms,v=0,O=16;for(let P=0,U=_.length;P<U;P++){let E=Array.isArray(_[P])?_[P]:[_[P]];for(let w=0,D=E.length;w<D;w++){let G=E[w],W=Array.isArray(G.value)?G.value:[G.value];for(let J=0,it=W.length;J<it;J++){let K=W[J],ot=x(K),tt=v%O,dt=tt%ot.boundary,ut=tt+dt;v+=dt,ut!==0&&O-ut<ot.storage&&(v+=O-ut),G.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=ot.storage}}}let A=v%O;return A>0&&(v+=O-A),M.__size=v,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Mo=class{constructor(t={}){let{canvas:e=lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=_i,this.toneMappingExposure=1;let v=this,O=!1,A=0,P=0,U=null,E=-1,w=null,D=new we,G=new we,W=null,J=new Ot(0),it=0,K=e.width,ot=e.height,tt=1,dt=null,ut=null,wt=new we(0,0,K,ot),Ft=new we(0,0,K,ot),Zt=!1,st=new ar,pt=!1,Tt=!1,mt=new ne,kt=new ne,Gt=new z,zt=new we,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function gt(){return U===null?tt:1}let B=n;function Pt(R,Y){return e.getContext(R,Y)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",F,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",Q,!1),B===null){let Y="webgl2";if(B=Pt(Y,R),B===null)throw Pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ft,At,_t,Bt,Rt,N,S,j,rt,ct,lt,It,bt,Ct,Kt,k,y,b,T,C,L,X,$,I;function H(){ft=new v0(B),ft.init(),X=new jx(B,ft),At=new p0(B,ft,t,X),_t=new Zx(B,ft),At.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Bt=new w0(B),Rt=new Ox,N=new Jx(B,ft,_t,Rt,At,X,Bt),S=new g0(v),j=new _0(v),rt=new Pp(B),$=new d0(B,rt),ct=new b0(B,rt,Bt,$),lt=new E0(B,ct,rt,Bt),T=new S0(B,At,N),k=new m0(Rt),It=new Nx(v,S,j,ft,At,$,k),bt=new iy(v,Rt),Ct=new Fx,Kt=new Wx(ft),b=new u0(v,S,j,_t,lt,d,l),y=new qx(v,lt,At),I=new sy(B,Bt,At,_t),C=new f0(B,ft,Bt),L=new M0(B,ft,Bt),Bt.programs=It.programs,v.capabilities=At,v.extensions=ft,v.properties=Rt,v.renderLists=Ct,v.shadowMap=y,v.state=_t,v.info=Bt}H();let V=new jl(v,B);this.xr=V,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=ft.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ft.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(R){R!==void 0&&(tt=R,this.setSize(K,ot,!1))},this.getSize=function(R){return R.set(K,ot)},this.setSize=function(R,Y,et=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,ot=Y,e.width=Math.floor(R*tt),e.height=Math.floor(Y*tt),et===!0&&(e.style.width=R+"px",e.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(K*tt,ot*tt).floor()},this.setDrawingBufferSize=function(R,Y,et){K=R,ot=Y,tt=et,e.width=Math.floor(R*et),e.height=Math.floor(Y*et),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(wt)},this.setViewport=function(R,Y,et,nt){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,Y,et,nt),_t.viewport(D.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(R){return R.copy(Ft)},this.setScissor=function(R,Y,et,nt){R.isVector4?Ft.set(R.x,R.y,R.z,R.w):Ft.set(R,Y,et,nt),_t.scissor(G.copy(Ft).multiplyScalar(tt).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(R){_t.setScissorTest(Zt=R)},this.setOpaqueSort=function(R){dt=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(b.getClearColor())},this.setClearColor=function(){b.setClearColor.apply(b,arguments)},this.getClearAlpha=function(){return b.getClearAlpha()},this.setClearAlpha=function(){b.setClearAlpha.apply(b,arguments)},this.clear=function(R=!0,Y=!0,et=!0){let nt=0;if(R){let Z=!1;if(U!==null){let yt=U.texture.format;Z=yt===Cc||yt===Rc||yt===Ac}if(Z){let yt=U.texture.type,Et=yt===ti||yt===ki||yt===sr||yt===As||yt===Ec||yt===Tc,Lt=b.getClearColor(),Dt=b.getClearAlpha(),Wt=Lt.r,Xt=Lt.g,Ut=Lt.b;Et?(p[0]=Wt,p[1]=Xt,p[2]=Ut,p[3]=Dt,B.clearBufferuiv(B.COLOR,0,p)):(x[0]=Wt,x[1]=Xt,x[2]=Ut,x[3]=Dt,B.clearBufferiv(B.COLOR,0,x))}else nt|=B.COLOR_BUFFER_BIT}Y&&(nt|=B.DEPTH_BUFFER_BIT),et&&(nt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",F,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),Ct.dispose(),Kt.dispose(),Rt.dispose(),S.dispose(),j.dispose(),lt.dispose(),$.dispose(),I.dispose(),It.dispose(),V.dispose(),V.removeEventListener("sessionstart",ve),V.removeEventListener("sessionend",Ce),ye.stop()};function F(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let R=Bt.autoReset,Y=y.enabled,et=y.autoUpdate,nt=y.needsUpdate,Z=y.type;H(),Bt.autoReset=R,y.enabled=Y,y.autoUpdate=et,y.needsUpdate=nt,y.type=Z}function Q(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){let Y=R.target;Y.removeEventListener("dispose",xt),Mt(Y)}function Mt(R){Ht(R),Rt.remove(R)}function Ht(R){let Y=Rt.get(R).programs;Y!==void 0&&(Y.forEach(function(et){It.releaseProgram(et)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,et,nt,Z,yt){Y===null&&(Y=te);let Et=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=fa(R,Y,et,nt,Z);_t.setMaterial(nt,Et);let Dt=et.index,Wt=1;if(nt.wireframe===!0){if(Dt=ct.getWireframeAttribute(et),Dt===void 0)return;Wt=2}let Xt=et.drawRange,Ut=et.attributes.position,ie=Xt.start*Wt,pe=(Xt.start+Xt.count)*Wt;yt!==null&&(ie=Math.max(ie,yt.start*Wt),pe=Math.min(pe,(yt.start+yt.count)*Wt)),Dt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,Dt.count)):Ut!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,Ut.count));let ge=pe-ie;if(ge<0||ge===1/0)return;$.setup(Z,nt,Lt,et,Dt);let tn,se=C;if(Dt!==null&&(tn=rt.get(Dt),se=L,se.setIndex(tn)),Z.isMesh)nt.wireframe===!0?(_t.setLineWidth(nt.wireframeLinewidth*gt()),se.setMode(B.LINES)):se.setMode(B.TRIANGLES);else if(Z.isLine){let Nt=nt.linewidth;Nt===void 0&&(Nt=1),_t.setLineWidth(Nt*gt()),Z.isLineSegments?se.setMode(B.LINES):Z.isLineLoop?se.setMode(B.LINE_LOOP):se.setMode(B.LINE_STRIP)}else Z.isPoints?se.setMode(B.POINTS):Z.isSprite&&se.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)se.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))se.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Nt=Z._multiDrawStarts,Gn=Z._multiDrawCounts,re=Z._multiDrawCount,bn=Dt?rt.get(Dt).bytesPerElement:1,ji=Rt.get(nt).currentProgram.getUniforms();for(let on=0;on<re;on++)ji.setValue(B,"_gl_DrawID",on),se.render(Nt[on]/bn,Gn[on])}else if(Z.isInstancedMesh)se.renderInstances(ie,ge,Z.count);else if(et.isInstancedBufferGeometry){let Nt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Gn=Math.min(et.instanceCount,Nt);se.renderInstances(ie,ge,Gn)}else se.render(ie,ge)};function St(R,Y,et){R.transparent===!0&&R.side===oe&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,ze(R,Y,et),R.side=bi,R.needsUpdate=!0,ze(R,Y,et),R.side=oe):ze(R,Y,et)}this.compile=function(R,Y,et=null){et===null&&(et=R),m=Kt.get(et),m.init(Y),_.push(m),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),R!==et&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();let nt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let yt=Z.material;if(yt)if(Array.isArray(yt))for(let Et=0;Et<yt.length;Et++){let Lt=yt[Et];St(Lt,et,Z),nt.add(Lt)}else St(yt,et,Z),nt.add(yt)}),_.pop(),m=null,nt},this.compileAsync=function(R,Y,et=null){let nt=this.compile(R,Y,et);return new Promise(Z=>{function yt(){if(nt.forEach(function(Et){Rt.get(Et).currentProgram.isReady()&&nt.delete(Et)}),nt.size===0){Z(R);return}setTimeout(yt,10)}ft.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Qt=null;function fe(R){Qt&&Qt(R)}function ve(){ye.stop()}function Ce(){ye.start()}let ye=new Ou;ye.setAnimationLoop(fe),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(R){Qt=R,V.setAnimationLoop(R),R===null?ye.stop():ye.start()},V.addEventListener("sessionstart",ve),V.addEventListener("sessionend",Ce),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(Y),Y=V.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,U),m=Kt.get(R,_.length),m.init(Y),_.push(m),kt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),st.setFromProjectionMatrix(kt),Tt=this.localClippingEnabled,pt=k.init(this.clippingPlanes,Tt),g=Ct.get(R,M.length),g.init(),M.push(g),V.enabled===!0&&V.isPresenting===!0){let yt=v.xr.getDepthSensingMesh();yt!==null&&Fe(yt,Y,-1/0,v.sortObjects)}Fe(R,Y,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(dt,ut),at=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,at&&b.addToRenderList(g,R),this.info.render.frame++,pt===!0&&k.beginShadows();let et=m.state.shadowsArray;y.render(et,R,Y),pt===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=g.opaque,Z=g.transmissive;if(m.setupLights(),Y.isArrayCamera){let yt=Y.cameras;if(Z.length>0)for(let Et=0,Lt=yt.length;Et<Lt;Et++){let Dt=yt[Et];je(nt,Z,R,Dt)}at&&b.render(R);for(let Et=0,Lt=yt.length;Et<Lt;Et++){let Dt=yt[Et];Pe(g,R,Dt,Dt.viewport)}}else Z.length>0&&je(nt,Z,R,Y),at&&b.render(R),Pe(g,R,Y);U!==null&&(N.updateMultisampleRenderTarget(U),N.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(v,R,Y),$.resetDefaultState(),E=-1,w=null,_.pop(),_.length>0?(m=_[_.length-1],pt===!0&&k.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Fe(R,Y,et,nt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||st.intersectsSprite(R)){nt&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(kt);let Et=lt.update(R),Lt=R.material;Lt.visible&&g.push(R,Et,Lt,et,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||st.intersectsObject(R))){let Et=lt.update(R),Lt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(kt)),Array.isArray(Lt)){let Dt=Et.groups;for(let Wt=0,Xt=Dt.length;Wt<Xt;Wt++){let Ut=Dt[Wt],ie=Lt[Ut.materialIndex];ie&&ie.visible&&g.push(R,Et,ie,et,zt.z,Ut)}}else Lt.visible&&g.push(R,Et,Lt,et,zt.z,null)}}let yt=R.children;for(let Et=0,Lt=yt.length;Et<Lt;Et++)Fe(yt[Et],Y,et,nt)}function Pe(R,Y,et,nt){let Z=R.opaque,yt=R.transmissive,Et=R.transparent;m.setupLightsView(et),pt===!0&&k.setGlobalState(v.clippingPlanes,et),nt&&_t.viewport(D.copy(nt)),Z.length>0&&Be(Z,Y,et),yt.length>0&&Be(yt,Y,et),Et.length>0&&Be(Et,Y,et),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function je(R,Y,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new ni(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?mr:ti,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let yt=m.state.transmissionRenderTarget[nt.id],Et=nt.viewport||D;yt.setSize(Et.z,Et.w);let Lt=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(J),it=v.getClearAlpha(),it<1&&v.setClearColor(16777215,.5),v.clear(),at&&b.render(et);let Dt=v.toneMapping;v.toneMapping=_i;let Wt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),pt===!0&&k.setGlobalState(v.clippingPlanes,nt),Be(R,et,nt),N.updateMultisampleRenderTarget(yt),N.updateRenderTargetMipmap(yt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,ie=Y.length;Ut<ie;Ut++){let pe=Y[Ut],ge=pe.object,tn=pe.geometry,se=pe.material,Nt=pe.group;if(se.side===oe&&ge.layers.test(nt.layers)){let Gn=se.side;se.side=en,se.needsUpdate=!0,Qe(ge,et,nt,tn,se,Nt),se.side=Gn,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(N.updateMultisampleRenderTarget(yt),N.updateRenderTargetMipmap(yt))}v.setRenderTarget(Lt),v.setClearColor(J,it),Wt!==void 0&&(nt.viewport=Wt),v.toneMapping=Dt}function Be(R,Y,et){let nt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,yt=R.length;Z<yt;Z++){let Et=R[Z],Lt=Et.object,Dt=Et.geometry,Wt=nt===null?Et.material:nt,Xt=Et.group;Lt.layers.test(et.layers)&&Qe(Lt,Y,et,Dt,Wt,Xt)}}function Qe(R,Y,et,nt,Z,yt){R.onBeforeRender(v,Y,et,nt,Z,yt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(v,Y,et,nt,R,yt),Z.transparent===!0&&Z.side===oe&&Z.forceSinglePass===!1?(Z.side=en,Z.needsUpdate=!0,v.renderBufferDirect(et,Y,nt,Z,R,yt),Z.side=bi,Z.needsUpdate=!0,v.renderBufferDirect(et,Y,nt,Z,R,yt),Z.side=oe):v.renderBufferDirect(et,Y,nt,Z,R,yt),R.onAfterRender(v,Y,et,nt,Z,yt)}function ze(R,Y,et){Y.isScene!==!0&&(Y=te);let nt=Rt.get(R),Z=m.state.lights,yt=m.state.shadowsArray,Et=Z.state.version,Lt=It.getParameters(R,Z.state,yt,Y,et),Dt=It.getProgramCacheKey(Lt),Wt=nt.programs;nt.environment=R.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(R.isMeshStandardMaterial?j:S).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",xt),Wt=new Map,nt.programs=Wt);let Xt=Wt.get(Dt);if(Xt!==void 0){if(nt.currentProgram===Xt&&nt.lightsStateVersion===Et)return li(R,Lt),Xt}else Lt.uniforms=It.getUniforms(R),R.onBeforeCompile(Lt,v),Xt=It.acquireProgram(Lt,Dt),Wt.set(Dt,Xt),nt.uniforms=Lt.uniforms;let Ut=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=k.uniform),li(R,Lt),nt.needsLights=ma(R),nt.lightsStateVersion=Et,nt.needsLights&&(Ut.ambientLightColor.value=Z.state.ambient,Ut.lightProbe.value=Z.state.probe,Ut.directionalLights.value=Z.state.directional,Ut.directionalLightShadows.value=Z.state.directionalShadow,Ut.spotLights.value=Z.state.spot,Ut.spotLightShadows.value=Z.state.spotShadow,Ut.rectAreaLights.value=Z.state.rectArea,Ut.ltc_1.value=Z.state.rectAreaLTC1,Ut.ltc_2.value=Z.state.rectAreaLTC2,Ut.pointLights.value=Z.state.point,Ut.pointLightShadows.value=Z.state.pointShadow,Ut.hemisphereLights.value=Z.state.hemi,Ut.directionalShadowMap.value=Z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ut.spotShadowMap.value=Z.state.spotShadowMap,Ut.spotLightMatrix.value=Z.state.spotLightMatrix,Ut.spotLightMap.value=Z.state.spotLightMap,Ut.pointShadowMap.value=Z.state.pointShadowMap,Ut.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=Xt,nt.uniformsList=null,Xt}function dn(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=ws.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function li(R,Y){let et=Rt.get(R);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function fa(R,Y,et,nt,Z){Y.isScene!==!0&&(Y=te),N.resetTextureUnits();let yt=Y.fog,Et=nt.isMeshStandardMaterial?Y.environment:null,Lt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ds,Dt=(nt.isMeshStandardMaterial?j:S).get(nt.envMap||Et),Wt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Xt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ut=!!et.morphAttributes.position,ie=!!et.morphAttributes.normal,pe=!!et.morphAttributes.color,ge=_i;nt.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ge=v.toneMapping);let tn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,se=tn!==void 0?tn.length:0,Nt=Rt.get(nt),Gn=m.state.lights;if(pt===!0&&(Tt===!0||R!==w)){let fn=R===w&&nt.id===E;k.setState(nt,R,fn)}let re=!1;nt.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Gn.state.version||Nt.outputColorSpace!==Lt||Z.isBatchedMesh&&Nt.batching===!1||!Z.isBatchedMesh&&Nt.batching===!0||Z.isBatchedMesh&&Nt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Nt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Nt.instancing===!1||!Z.isInstancedMesh&&Nt.instancing===!0||Z.isSkinnedMesh&&Nt.skinning===!1||!Z.isSkinnedMesh&&Nt.skinning===!0||Z.isInstancedMesh&&Nt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Nt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Nt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Nt.instancingMorph===!1&&Z.morphTexture!==null||Nt.envMap!==Dt||nt.fog===!0&&Nt.fog!==yt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==k.numPlanes||Nt.numIntersection!==k.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==Xt||Nt.morphTargets!==Ut||Nt.morphNormals!==ie||Nt.morphColors!==pe||Nt.toneMapping!==ge||Nt.morphTargetsCount!==se)&&(re=!0):(re=!0,Nt.__version=nt.version);let bn=Nt.currentProgram;re===!0&&(bn=ze(nt,Y,Z));let ji=!1,on=!1,Vs=!1,xe=bn.getUniforms(),Nn=Nt.uniforms;if(_t.useProgram(bn.program)&&(ji=!0,on=!0,Vs=!0),nt.id!==E&&(E=nt.id,on=!0),ji||w!==R){_t.buffers.depth.getReversed()?(mt.copy(R.projectionMatrix),hp(mt),up(mt),xe.setValue(B,"projectionMatrix",mt)):xe.setValue(B,"projectionMatrix",R.projectionMatrix),xe.setValue(B,"viewMatrix",R.matrixWorldInverse);let ci=xe.map.cameraPosition;ci!==void 0&&ci.setValue(B,Gt.setFromMatrixPosition(R.matrixWorld)),At.logarithmicDepthBuffer&&xe.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&xe.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,on=!0,Vs=!0)}if(Z.isSkinnedMesh){xe.setOptional(B,Z,"bindMatrix"),xe.setOptional(B,Z,"bindMatrixInverse");let fn=Z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xe.setValue(B,"boneTexture",fn.boneTexture,N))}Z.isBatchedMesh&&(xe.setOptional(B,Z,"batchingTexture"),xe.setValue(B,"batchingTexture",Z._matricesTexture,N),xe.setOptional(B,Z,"batchingIdTexture"),xe.setValue(B,"batchingIdTexture",Z._indirectTexture,N),xe.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xe.setValue(B,"batchingColorTexture",Z._colorsTexture,N));let Gs=et.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&T.update(Z,et,bn),(on||Nt.receiveShadow!==Z.receiveShadow)&&(Nt.receiveShadow=Z.receiveShadow,xe.setValue(B,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Nn.envMap.value=Dt,Nn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),on&&(xe.setValue(B,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&pa(Nn,Vs),yt&&nt.fog===!0&&bt.refreshFogUniforms(Nn,yt),bt.refreshMaterialUniforms(Nn,nt,tt,ot,m.state.transmissionRenderTarget[R.id]),ws.upload(B,dn(Nt),Nn,N)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ws.upload(B,dn(Nt),Nn,N),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&xe.setValue(B,"center",Z.center),xe.setValue(B,"modelViewMatrix",Z.modelViewMatrix),xe.setValue(B,"normalMatrix",Z.normalMatrix),xe.setValue(B,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let fn=nt.uniformsGroups;for(let ci=0,hi=fn.length;ci<hi;ci++){let th=fn[ci];I.update(th,bn),I.bind(th,bn)}}return bn}function pa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ma(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,Y,et){Rt.get(R.texture).__webglTexture=Y,Rt.get(R.depthTexture).__webglTexture=et;let nt=Rt.get(R);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){let et=Rt.get(R);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,et=0){U=R,A=Y,P=et;let nt=!0,Z=null,yt=!1,Et=!1;if(R){let Dt=Rt.get(R);if(Dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(B.FRAMEBUFFER,null),nt=!1;else if(Dt.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Dt.__hasExternalTextures)N.rebindTextures(R,Rt.get(R.texture).__webglTexture,Rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ut=R.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&Rt.has(Ut)&&(R.width!==Ut.image.width||R.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}let Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Et=!0);let Xt=Rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[Y])?Z=Xt[Y][et]:Z=Xt[Y],yt=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?Z=Rt.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?Z=Xt[et]:Z=Xt,D.copy(R.viewport),G.copy(R.scissor),W=R.scissorTest}else D.copy(wt).multiplyScalar(tt).floor(),G.copy(Ft).multiplyScalar(tt).floor(),W=Zt;if(_t.bindFramebuffer(B.FRAMEBUFFER,Z)&&nt&&_t.drawBuffers(R,Z),_t.viewport(D),_t.scissor(G),_t.setScissorTest(W),yt){let Dt=Rt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Dt.__webglTexture,et)}else if(Et){let Dt=Rt.get(R.texture),Wt=Y||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,et||0,Wt)}E=-1},this.readRenderTargetPixels=function(R,Y,et,nt,Z,yt,Et){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){_t.bindFramebuffer(B.FRAMEBUFFER,Lt);try{let Dt=R.texture,Wt=Dt.format,Xt=Dt.type;if(!At.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-nt&&et>=0&&et<=R.height-Z&&B.readPixels(Y,et,nt,Z,X.convert(Wt),X.convert(Xt),yt)}finally{let Dt=U!==null?Rt.get(U).__webglFramebuffer:null;_t.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,et,nt,Z,yt,Et){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){let Dt=R.texture,Wt=Dt.format,Xt=Dt.type;if(!At.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-nt&&et>=0&&et<=R.height-Z){_t.bindFramebuffer(B.FRAMEBUFFER,Lt);let Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,yt.byteLength,B.STREAM_READ),B.readPixels(Y,et,nt,Z,X.convert(Wt),X.convert(Xt),0);let ie=U!==null?Rt.get(U).__webglFramebuffer:null;_t.bindFramebuffer(B.FRAMEBUFFER,ie);let pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await cp(B,pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,yt),B.deleteBuffer(Ut),B.deleteSync(pe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,et=0){R.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);let nt=Math.pow(2,-et),Z=Math.floor(R.image.width*nt),yt=Math.floor(R.image.height*nt),Et=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;N.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,et,0,0,Et,Lt,Z,yt),_t.unbindTexture()},this.copyTextureToTexture=function(R,Y,et=null,nt=null,Z=0){R.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,R=arguments[1],Y=arguments[2],Z=arguments[3]||0,et=null);let yt,Et,Lt,Dt,Wt,Xt,Ut,ie,pe,ge=R.isCompressedTexture?R.mipmaps[Z]:R.image;et!==null?(yt=et.max.x-et.min.x,Et=et.max.y-et.min.y,Lt=et.isBox3?et.max.z-et.min.z:1,Dt=et.min.x,Wt=et.min.y,Xt=et.isBox3?et.min.z:0):(yt=ge.width,Et=ge.height,Lt=ge.depth||1,Dt=0,Wt=0,Xt=0),nt!==null?(Ut=nt.x,ie=nt.y,pe=nt.z):(Ut=0,ie=0,pe=0);let tn=X.convert(Y.format),se=X.convert(Y.type),Nt;Y.isData3DTexture?(N.setTexture3D(Y,0),Nt=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(N.setTexture2DArray(Y,0),Nt=B.TEXTURE_2D_ARRAY):(N.setTexture2D(Y,0),Nt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);let Gn=B.getParameter(B.UNPACK_ROW_LENGTH),re=B.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=B.getParameter(B.UNPACK_SKIP_PIXELS),ji=B.getParameter(B.UNPACK_SKIP_ROWS),on=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ge.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ge.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Wt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);let Vs=R.isDataArrayTexture||R.isData3DTexture,xe=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Nn=Rt.get(R),Gs=Rt.get(Y),fn=Rt.get(Nn.__renderTarget),ci=Rt.get(Gs.__renderTarget);_t.bindFramebuffer(B.READ_FRAMEBUFFER,fn.__webglFramebuffer),_t.bindFramebuffer(B.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let hi=0;hi<Lt;hi++)Vs&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(R).__webglTexture,Z,Xt+hi),R.isDepthTexture?(xe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(Y).__webglTexture,Z,pe+hi),B.blitFramebuffer(Dt,Wt,yt,Et,Ut,ie,yt,Et,B.DEPTH_BUFFER_BIT,B.NEAREST)):xe?B.copyTexSubImage3D(Nt,Z,Ut,ie,pe+hi,Dt,Wt,yt,Et):B.copyTexSubImage2D(Nt,Z,Ut,ie,pe+hi,Dt,Wt,yt,Et);_t.bindFramebuffer(B.READ_FRAMEBUFFER,null),_t.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else xe?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Nt,Z,Ut,ie,pe,yt,Et,Lt,tn,se,ge.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,Z,Ut,ie,pe,yt,Et,Lt,tn,ge.data):B.texSubImage3D(Nt,Z,Ut,ie,pe,yt,Et,Lt,tn,se,ge):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Z,Ut,ie,yt,Et,tn,se,ge.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Z,Ut,ie,ge.width,ge.height,tn,ge.data):B.texSubImage2D(B.TEXTURE_2D,Z,Ut,ie,yt,Et,tn,se,ge);B.pixelStorei(B.UNPACK_ROW_LENGTH,Gn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,re),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ji),B.pixelStorei(B.UNPACK_SKIP_IMAGES,on),Z===0&&Y.generateMipmaps&&B.generateMipmap(Nt),_t.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,et=null,nt=null,Z=0){return R.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,R=arguments[2],Y=arguments[3],Z=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,et,nt,Z)},this.initRenderTarget=function(R){Rt.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){A=0,P=0,U=null,_t.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var wo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},So=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ql=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xe=new z,Eo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ze=class extends zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fs,Ys=new z,ps=new z,ms=new z,gs=new ht,Zs=new ht,Hu=new ne,Wr=new z,Ks=new z,Xr=new z,eu=new ht,Wa=new ht,nu=new ht,nn=class extends Ie{constructor(t=new Ze){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Jt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ql(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Eo(n,3,0,!1)),fs.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;$r(Wr.set(-.5,-.5,0),ms,o,ps,s,r),$r(Ks.set(.5,-.5,0),ms,o,ps,s,r),$r(Xr.set(.5,.5,0),ms,o,ps,s,r),eu.set(0,0),Wa.set(1,0),nu.set(1,1);let a=t.ray.intersectTriangle(Wr,Ks,Xr,!1,Ys);if(a===null&&($r(Ks.set(-.5,.5,0),ms,o,ps,s,r),Wa.set(0,1),a=t.ray.intersectTriangle(Wr,Xr,Ks,!1,Ys),a===null))return;let l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:Kn.getInterpolation(Ys,Wr,Ks,Xr,eu,Wa,nu,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $r(i,t,e,n,s,r){gs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zs.x=r*gs.x-s*gs.y,Zs.y=s*gs.x+r*gs.y):Zs.copy(gs),i.copy(t),i.x+=Zs.x,i.y+=Zs.y,i.applyMatrix4(Hu)}var ae=class extends zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},To=new z,Ao=new z,iu=new ne,Js=new Mi,qr=new Bi,Xa=new z,su=new z,un=class extends Ie{constructor(t=new Jt,e=new ae){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)To.fromBufferAttribute(e,s-1),Ao.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=To.distanceTo(Ao);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;iu.copy(s).invert(),Js.copy(t.ray).applyMatrix4(iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),M=h.getX(x+1),_=Yr(this,t,Js,l,m,M);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=Yr(this,t,Js,l,x,g);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Yr(this,t,Js,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=Yr(this,t,Js,l,p-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(To.fromBufferAttribute(o,s),Ao.fromBufferAttribute(o,r),e.distanceSqToSegment(To,Ao,Xa,su)>n)return;Xa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Xa);if(!(l<t.near||l>t.far))return{distance:l,point:su.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ru=new z,ou=new z,he=class extends un{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ru.fromBufferAttribute(e,s),ou.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ru.distanceTo(ou);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zi=class extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new ne,tc=new Mi,Zr=new Bi,Kr=new z,Ps=class extends Ie{constructor(t=new Jt,e=new zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;au.copy(s).invert(),tc.copy(t.ray).applyMatrix4(au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Kr.fromBufferAttribute(u,g),lu(Kr,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Kr.fromBufferAttribute(u,p),lu(Kr,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lu(i,t,e,n,s,r,o){let a=tc.distanceSqToPoint(i);if(a<e){let l=new z;tc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var We=class extends hn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new z,s=[],r=[],o=[],a=new z,l=new ne;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ec=class extends lr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jr=new z,$a=new Dc,qa=new Dc,Ya=new Dc,nc=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),$a.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),qa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),Ya.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ya.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set($a.calc(l),qa.calc(l),Ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ry(i,t){let e=1-i;return e*e*t}function oy(i,t){return 2*(1-i)*i*t}function ay(i,t){return i*i*t}function nr(i,t,e,n){return ry(i,t)+oy(i,e)+ay(i,n)}function ly(i,t){let e=1-i;return e*e*e*t}function cy(i,t){let e=1-i;return 3*e*e*i*t}function hy(i,t){return 3*(1-i)*i*i*t}function uy(i,t){return i*i*i*t}function ir(i,t,e,n,s){return ly(i,t)+cy(i,e)+hy(i,n)+uy(i,s)}var Ro=class extends mn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,s.x,r.x,o.x,a.x),ir(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends mn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,s.x,r.x,o.x,a.x),ir(t,s.y,r.y,o.y,a.y),ir(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends mn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends mn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends mn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,s.x,r.x,o.x),nr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends mn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,s.x,r.x,o.x),nr(t,s.y,r.y,o.y),nr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},oc=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:nc,CubicBezierCurve:Ro,CubicBezierCurve3:ic,EllipseCurve:lr,LineCurve:Co,LineCurve3:sc,QuadraticBezierCurve:Po,QuadraticBezierCurve3:rc,SplineCurve:Io}),ac=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new oc[s.type]().fromJSON(s))}return this}},si=class extends ac{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Co(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Po(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ro(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new lr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var cr=class i extends Jt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function M(){let v=new z,O=new z,A=0,P=(e-t)/n;for(let U=0;U<=r;U++){let E=[],w=U/r,D=w*(e-t)+t;for(let G=0;G<=s;G++){let W=G/s,J=W*l+a,it=Math.sin(J),K=Math.cos(J);O.x=D*it,O.y=-w*n+g,O.z=D*K,u.push(O.x,O.y,O.z),v.set(it,P,K).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-w),E.push(p++)}x.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){let w=x[E][U],D=x[E+1][U],G=x[E+1][U+1],W=x[E][U+1];(t>0||E!==0)&&(h.push(w,D,W),A+=3),(e>0||E!==r-1)&&(h.push(D,G,W),A+=3)}c.addGroup(m,A,0),m+=A}function _(v){let O=p,A=new ht,P=new z,U=0,E=v===!0?t:e,w=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),p++;let D=p;for(let G=0;G<=s;G++){let J=G/s*l+a,it=Math.cos(J),K=Math.sin(J);P.x=E*K,P.y=g*w,P.z=E*it,u.push(P.x,P.y,P.z),f.push(0,w,0),A.x=it*.5+.5,A.y=K*.5*w+.5,d.push(A.x,A.y),p++}for(let G=0;G<s;G++){let W=O+G,J=D+G;v===!0?h.push(J,J+1,W):h.push(J+1,J,W),U+=3}c.addGroup(m,U,v===!0?1:2),m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var jr=new z,Qr=new z,Za=new z,to=new Kn,Me=class extends Jt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(bs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=to;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),to.getNormal(Za),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let _=(M+1)%3,v=u[M],O=u[_],A=to[h[M]],P=to[h[_]],U=`${v}_${O}`,E=`${O}_${v}`;E in f&&f[E]?(Za.dot(f[E].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(P.x,P.y,P.z)),f[E]=null):U in f||(f[U]={index0:c[M],index1:c[_],normal:Za.clone()})}}for(let p in f)if(f[p]){let{index0:x,index1:g}=f[p];jr.fromBufferAttribute(a,x),Qr.fromBufferAttribute(a,g),d.push(jr.x,jr.y,jr.z),d.push(Qr.x,Qr.y,Qr.z)}this.setAttribute("position",new jt(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Ke=class extends si{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new si().fromJSON(s))}return this}},dy={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Vu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=xy(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],f=i[p+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return hr(r,o,e,a,l,d,0),o}};function Vu(i,t,e,n,s){let r,o;if(s===Ry(i,t,e,n)>0)for(r=t;r<e;r+=n)o=hu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=hu(r,i[r],i[r+1],o);return o&&Go(o,o.next)&&(dr(o),o=o.next),o}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Go(e,e.next)||be(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&My(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?py(i,n,s,r):fy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),dr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=my(Hi(i),t,e),hr(i,t,e,n,s,r,2)):o===2&&gy(i,t,e,n,s,r):hr(Hi(i),t,e,n,s,r,1);break}}}function fy(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ys(s,a,r,l,o,c,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function py(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=lc(d,p,t,e,n),M=lc(x,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ys(a,h,l,u,c,f,_.x,_.y)&&be(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ys(a,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ys(a,h,l,u,c,f,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ys(a,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function my(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Go(s,r)&&Gu(s,n,n.next,r)&&ur(s,r)&&ur(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),dr(n),dr(n.next),n=i=r),n=n.next}while(n!==i);return Hi(n)}function gy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ey(o,a)){let l=Wu(o,a);o=Hi(o,o.next),l=Hi(l,l.next),hr(o,t,e,n,s,r,0),hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xy(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Vu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Sy(c));for(s.sort(yy),r=0;r<s.length;r++)e=_y(s[r],e);return e}function yy(i,t){return i.x-t.x}function _y(i,t){let e=vy(i,t);if(!e)return t;let n=Wu(e,i);return Hi(n,n.next),Hi(e,e.next)}function vy(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ys(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ur(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&by(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function by(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function My(i,t,e,n){let s=i;do s.z===0&&(s.z=lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wy(s)}function wy(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ys(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ey(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ty(i,t)&&(ur(i,t)&&ur(t,i)&&Ay(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Go(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Go(i,t){return i.x===t.x&&i.y===t.y}function Gu(i,t,e,n){let s=no(be(i,t,e)),r=no(be(i,t,n)),o=no(be(e,n,i)),a=no(be(e,n,t));return!!(s!==r&&o!==a||s===0&&eo(i,e,t)||r===0&&eo(i,n,t)||o===0&&eo(e,i,n)||a===0&&eo(e,t,n))}function eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function no(i){return i>0?1:i<0?-1:0}function Ty(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ur(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Ay(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wu(i,t){let e=new cc(i.i,i.x,i.y),n=new cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hu(i,t,e,n){let s=new cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ry(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];uu(t),du(n,t);let o=t.length;e.forEach(uu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,du(n,e[l]);let a=dy.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function du(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gn=class i extends Jt{constructor(t=new Ke([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Cy,_,v=!1,O,A,P,U;m&&(_=m.getSpacedPoints(h),v=!0,f=!1,O=m.computeFrenetFrames(h,!1),A=new z,P=new z,U=new z),f||(g=0,d=0,p=0,x=0);let E=a.extractPoints(c),w=E.shape,D=E.holes;if(!vi.isClockWise(w)){w=w.reverse();for(let at=0,gt=D.length;at<gt;at++){let B=D[at];vi.isClockWise(B)&&(D[at]=B.reverse())}}let W=vi.triangulateShape(w,D),J=w;for(let at=0,gt=D.length;at<gt;at++){let B=D[at];w=w.concat(B)}function it(at,gt,B){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(gt,B)}let K=w.length,ot=W.length;function tt(at,gt,B){let Pt,ft,At,_t=at.x-gt.x,Bt=at.y-gt.y,Rt=B.x-at.x,N=B.y-at.y,S=_t*_t+Bt*Bt,j=_t*N-Bt*Rt;if(Math.abs(j)>Number.EPSILON){let rt=Math.sqrt(S),ct=Math.sqrt(Rt*Rt+N*N),lt=gt.x-Bt/rt,It=gt.y+_t/rt,bt=B.x-N/ct,Ct=B.y+Rt/ct,Kt=((bt-lt)*N-(Ct-It)*Rt)/(_t*N-Bt*Rt);Pt=lt+_t*Kt-at.x,ft=It+Bt*Kt-at.y;let k=Pt*Pt+ft*ft;if(k<=2)return new ht(Pt,ft);At=Math.sqrt(k/2)}else{let rt=!1;_t>Number.EPSILON?Rt>Number.EPSILON&&(rt=!0):_t<-Number.EPSILON?Rt<-Number.EPSILON&&(rt=!0):Math.sign(Bt)===Math.sign(N)&&(rt=!0),rt?(Pt=-Bt,ft=_t,At=Math.sqrt(S)):(Pt=_t,ft=Bt,At=Math.sqrt(S/2))}return new ht(Pt/At,ft/At)}let dt=[];for(let at=0,gt=J.length,B=gt-1,Pt=at+1;at<gt;at++,B++,Pt++)B===gt&&(B=0),Pt===gt&&(Pt=0),dt[at]=tt(J[at],J[B],J[Pt]);let ut=[],wt,Ft=dt.concat();for(let at=0,gt=D.length;at<gt;at++){let B=D[at];wt=[];for(let Pt=0,ft=B.length,At=ft-1,_t=Pt+1;Pt<ft;Pt++,At++,_t++)At===ft&&(At=0),_t===ft&&(_t=0),wt[Pt]=tt(B[Pt],B[At],B[_t]);ut.push(wt),Ft=Ft.concat(wt)}for(let at=0;at<g;at++){let gt=at/g,B=d*Math.cos(gt*Math.PI/2),Pt=p*Math.sin(gt*Math.PI/2)+x;for(let ft=0,At=J.length;ft<At;ft++){let _t=it(J[ft],dt[ft],Pt);mt(_t.x,_t.y,-B)}for(let ft=0,At=D.length;ft<At;ft++){let _t=D[ft];wt=ut[ft];for(let Bt=0,Rt=_t.length;Bt<Rt;Bt++){let N=it(_t[Bt],wt[Bt],Pt);mt(N.x,N.y,-B)}}}let Zt=p+x;for(let at=0;at<K;at++){let gt=f?it(w[at],Ft[at],Zt):w[at];v?(P.copy(O.normals[0]).multiplyScalar(gt.x),A.copy(O.binormals[0]).multiplyScalar(gt.y),U.copy(_[0]).add(P).add(A),mt(U.x,U.y,U.z)):mt(gt.x,gt.y,0)}for(let at=1;at<=h;at++)for(let gt=0;gt<K;gt++){let B=f?it(w[gt],Ft[gt],Zt):w[gt];v?(P.copy(O.normals[at]).multiplyScalar(B.x),A.copy(O.binormals[at]).multiplyScalar(B.y),U.copy(_[at]).add(P).add(A),mt(U.x,U.y,U.z)):mt(B.x,B.y,u/h*at)}for(let at=g-1;at>=0;at--){let gt=at/g,B=d*Math.cos(gt*Math.PI/2),Pt=p*Math.sin(gt*Math.PI/2)+x;for(let ft=0,At=J.length;ft<At;ft++){let _t=it(J[ft],dt[ft],Pt);mt(_t.x,_t.y,u+B)}for(let ft=0,At=D.length;ft<At;ft++){let _t=D[ft];wt=ut[ft];for(let Bt=0,Rt=_t.length;Bt<Rt;Bt++){let N=it(_t[Bt],wt[Bt],Pt);v?mt(N.x,N.y+_[h-1].y,_[h-1].x+B):mt(N.x,N.y,u+B)}}}st(),pt();function st(){let at=s.length/3;if(f){let gt=0,B=K*gt;for(let Pt=0;Pt<ot;Pt++){let ft=W[Pt];kt(ft[2]+B,ft[1]+B,ft[0]+B)}gt=h+g*2,B=K*gt;for(let Pt=0;Pt<ot;Pt++){let ft=W[Pt];kt(ft[0]+B,ft[1]+B,ft[2]+B)}}else{for(let gt=0;gt<ot;gt++){let B=W[gt];kt(B[2],B[1],B[0])}for(let gt=0;gt<ot;gt++){let B=W[gt];kt(B[0]+K*h,B[1]+K*h,B[2]+K*h)}}n.addGroup(at,s.length/3-at,0)}function pt(){let at=s.length/3,gt=0;Tt(J,gt),gt+=J.length;for(let B=0,Pt=D.length;B<Pt;B++){let ft=D[B];Tt(ft,gt),gt+=ft.length}n.addGroup(at,s.length/3-at,1)}function Tt(at,gt){let B=at.length;for(;--B>=0;){let Pt=B,ft=B-1;ft<0&&(ft=at.length-1);for(let At=0,_t=h+g*2;At<_t;At++){let Bt=K*At,Rt=K*(At+1),N=gt+Pt+Bt,S=gt+ft+Bt,j=gt+ft+Rt,rt=gt+Pt+Rt;Gt(N,S,j,rt)}}}function mt(at,gt,B){l.push(at),l.push(gt),l.push(B)}function kt(at,gt,B){zt(at),zt(gt),zt(B);let Pt=s.length/3,ft=M.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);te(ft[0]),te(ft[1]),te(ft[2])}function Gt(at,gt,B,Pt){zt(at),zt(gt),zt(Pt),zt(gt),zt(B),zt(Pt);let ft=s.length/3,At=M.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);te(At[0]),te(At[1]),te(At[3]),te(At[1]),te(At[2]),te(At[3])}function zt(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function te(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Py(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new oc[s.type]().fromJSON(s)),new i(n,t.options)}},Cy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(f,1-p),new ht(x,1-m)]:[new ht(a,1-l),new ht(h,1-u),new ht(d,1-p),new ht(g,1-m)]}};function Py(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class i extends Jt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new z,p=new ht;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let M=m+g,_=M,v=M+n+1,O=M+n+2,A=M+1;a.push(_,v,A),a.push(v,O,A)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},fr=class i extends Jt{constructor(t=new Ke([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;vi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let M=p[g];vi.isClockWise(M)===!0&&(p[g]=M.reverse())}let x=vi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let M=p[g];d=d.concat(M)}for(let g=0,m=d.length;g<m;g++){let M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],_=M[0]+u,v=M[1]+u,O=M[2]+u;n.push(_,v,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Iy(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Iy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Lo=class i extends Jt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,f=new z,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let O=0;O<=e;O++){let A=O/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+v,1-_),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let _=h[m][M+1],v=h[m][M],O=h[m+1][M],A=h[m+1][M+1];(m!==0||o>0)&&d.push(_,v,A),(m!==n-1||l<Math.PI)&&d.push(v,O,A)}this.setIndex(d),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var me=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ly(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=t,a=2*e-n;break;case ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,l=2*n-e;break;case ah:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let O=0;O!==a;++O)r[O]=m*o[h+O]+M*o[c+O]+_*o[l+O]+v*o[u+O];return r}},uc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},dc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case Nl:e=this.InterpolantFactoryMethodLinear;break;case xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ly(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Nl;var Vi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=co;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Pn{};fc.prototype.ValueTypeName="color";var pc=class extends Pn{};pc.prototype.ValueTypeName="number";var mc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Do=class extends Pn{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=co;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends Pn{};gc.prototype.ValueTypeName="vector";var xc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},Dy=new xc,yc=class{constructor(t){this.manager=t!==void 0?t:Dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ka=new ne,fu=new z,pu=new z,_c=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vc=class extends _c{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new vc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Oo=class extends Uo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Uc="\\[\\]\\.:\\/",Uy=new RegExp("["+Uc+"]","g"),Nc="[^"+Uc+"]",Ny="[^"+Uc.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",Nc),ky=/(WCOD+)?/.source.replace("WCOD",Ny),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),zy=new RegExp("^"+Oy+ky+Fy+By+"$"),Hy=["material","materials","bones","map"],bc=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(t){let e=zy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=bc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);var mu=new ne,ko=class{constructor(t,e,n=0,s=1/0){this.ray=new Mi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(t,e=!0,n=[]){return Mc(t,this,n,e),n.sort(gu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mc(t[s],this,n,e);return n.sort(gu),n}};function gu(i,t){return i.distance-t.distance}function Mc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Mc(r[o],t,e,!0)}}var pr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fo=class extends he{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ot(n),s=new Ot(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,p=-a;f<=e;f++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=f===r?n:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}let h=new Jt;h.setAttribute("position",new jt(l,3)),h.setAttribute("color",new jt(c,3));let u=new ae({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Bo=class extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);var Xu={type:"change"},kc={type:"start"},qu={type:"end"},Wo=new Mi,$u=new En,Vy=Math.cos(70*Lu.DEG2RAD),Ue=new z,sn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oc=1e-6,Xo=class extends Bo{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Cn,this._lastTargetPosition=new z,this._quat=new Cn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pr,this._sphericalDelta=new pr,this._scale=1,this._panOffset=new z,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new z,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wy.bind(this),this._onPointerDown=Gy.bind(this),this._onPointerUp=Xy.bind(this),this._onContextMenu=jy.bind(this),this._onMouseWheel=Yy.bind(this),this._onKeyDown=Zy.bind(this),this._onTouchStart=Ky.bind(this),this._onTouchMove=Jy.bind(this),this._onMouseDown=$y.bind(this),this._onMouseMove=qy.bind(this),this._interceptControlDown=Qy.bind(this),this._interceptControlUp=t_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xu),this.update(),this.state=de.NONE}update(t=null){let e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ue.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wo.origin.copy(this.object.position),Wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wo.direction))<Vy?this.object.lookAt(this.target):($u.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wo.intersectPlane($u,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oc||this._lastTargetPosition.distanceToSquared(this.target)>Oc?(this.dispatchEvent(Xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Gy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Wy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qu),this.state=de.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $y(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case Wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case Wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(kc)}function qy(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Yy(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(kc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qu))}function Zy(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ky(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(kc)}function Jy(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function jy(i){this.enabled!==!1&&i.preventDefault()}function Qy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var $o=class extends Ie{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ht(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Ns=new z,Yu=new ne,Zu=new ne,Ku=new z,Ju=new z,qo=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Yu.copy(x.matrixWorldInverse),Zu.multiplyMatrices(x.projectionMatrix,Yu),h(p,p,x),d(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,g=p.children.length;x<g;x++)c(p.children[x])}function h(p,x,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Ns.setFromMatrixPosition(p.matrixWorld),Ns.applyMatrix4(Zu);let m=Ns.z>=-1&&Ns.z<=1&&p.layers.test(g.layers)===!0,M=p.element;M.style.display=m===!0?"":"none",m===!0&&(p.onBeforeRender(e,x,g),M.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Ns.x*r+r)+"px,"+(-Ns.y*o+o)+"px)",M.parentNode!==l&&l.appendChild(M),p.onAfterRender(e,x,g));let _={distanceToCameraSquared:u(g,p)};a.objects.set(p,_)}for(let m=0,M=p.children.length;m<M;m++)h(p.children[m],x,g)}function u(p,x){return Ku.setFromMatrixPosition(p.matrixWorld),Ju.setFromMatrixPosition(x.matrixWorld),Ku.distanceToSquared(Ju)}function f(p){let x=[];return p.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function d(p){let x=f(p).sort(function(m,M){if(m.renderOrder!==M.renderOrder)return M.renderOrder-m.renderOrder;let _=a.objects.get(m).distanceToCameraSquared,v=a.objects.get(M).distanceToCameraSquared;return _-v}),g=x.length;for(let m=0,M=x.length;m<M;m++)x[m].element.style.zIndex=g-m}}};var Re=class{constructor(t){this.view=t,this.group=new ce,this.on=!0}get id(){return"feature"}get label(){return this.id}get title(){return""}available(){return!1}toolbar(){return[]}build(t){}update(t){}tick(t,e){}reset(){}dispose(){}onTap(t,e){return!1}onLongPress(t,e){return!1}get plan(){return this.view.plan}get settings(){return this.view.plan.settings}get states(){return this.view.getStates()||{}}};function In(i,{cls:t="",interactive:e=!1}={}){let n=document.createElement("div");return n.className="card3d "+t,n.innerHTML=i,n.style.pointerEvents=e?"auto":"none",new $o(n)}var Yt=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function oi(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,i),s.addColorStop(.35,"rgba(255,255,255,.35)"),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128),new We(e)}var xn=(i,t,e)=>Math.max(t,Math.min(e,i));var ju=i=>Math.max(0,Math.min(1,i)),e_={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.45},cloudy:{cloud:.85},rainy:{rain:.55,cloud:.9},pouring:{rain:1,cloud:1},snowy:{snow:.7,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:.9},hail:{rain:.8,snow:.3,cloud:1},lightning:{lightning:!0,cloud:.95},"lightning-rainy":{lightning:!0,rain:.8,cloud:1},fog:{fog:.8,cloud:.75},windy:{cloud:.3,wind:1},"windy-variant":{cloud:.7,wind:1},exceptional:{cloud:.6}},n_={"km/h":1,"m/s":3.6,mph:1.609,kn:1.852,"ft/s":1.097,"mm/s":.0036};function i_(i,t="km/h"){let e=Number(i);return Number.isFinite(e)?e*(n_[String(t).toLowerCase()]??1):0}function Qu(i,t={},e=null){let n=e_[i]||{},s={rain:0,snow:0,fog:0,cloud:0,lightning:!1,windKmh:0,...n};return t.cloud_coverage!=null&&Number.isFinite(Number(t.cloud_coverage))&&(s.cloud=ju(Number(t.cloud_coverage)/100)),s.windKmh=i_(t.wind_speed,t.wind_speed_unit),!s.windKmh&&n.wind&&(s.windKmh=35),s.windAngle=ju(s.windKmh/60)*35,s.windBearing=Number(t.wind_bearing)||0,s.night=i==="clear-night"||e?.state==="below_horizon",s.sunElevation=Number(e?.attributes?.elevation),s.sunAzimuth=Number(e?.attributes?.azimuth),s}function td(i){return{sunny:"Sonnig","clear-night":"Klar",partlycloudy:"Teils bew\xF6lkt",cloudy:"Bew\xF6lkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee","snowy-rainy":"Schneeregen",hail:"Hagel",lightning:"Gewitter","lightning-rainy":"Gewitter mit Regen",fog:"Nebel",windy:"Windig","windy-variant":"Windig, bew\xF6lkt",exceptional:"Au\xDFergew\xF6hnlich"}[i]||i}function Os(i,t,e=0){let n=(e+i)*Math.PI/180,s=t*Math.PI/180;return{x:Math.sin(n)*Math.cos(s),y:Math.sin(s),z:-Math.cos(n)*Math.cos(s)}}function Vn(i,{title:t,obj:e,fields:n,extra:s,note:r}){i.closeOverlay();let o=document.createElement("div");o.className="overlay",o.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,94%);max-height:84%;overflow:auto",i.shadowRoot.querySelector(".wrap").append(o),i._overlay=o;let a=!1,l=0,c=d=>d.split(".").reduce((p,x)=>p?.[x],e),h=(d,p)=>{let x=d.split("."),g=x.pop();x.reduce((m,M)=>m[M]??={},e)[g]=p},u=()=>{clearTimeout(l),l=setTimeout(()=>{i.rebuild3D(),i.draw2D()},250)},f=()=>{let d=Object.keys(i.getStates()||{}).sort();o.innerHTML=`<h4 style="margin:0 0 6px">${Yt(t)}</h4>
      <datalist id="set-ents">${d.map(p=>`<option value="${Yt(p)}">`).join("")}</datalist>
      ${r?`<div style="opacity:.7;font-size:12px;margin-bottom:6px">${r}</div>`:""}
      ${n.map(p=>{let x=c(p.k),g=`data-k="${p.k}" data-t="${p.t||"text"}"`;return p.t==="checkbox"?`<label style="display:flex;gap:6px;align-items:center"><input type="checkbox" ${g} ${x?"checked":""} style="width:auto">${Yt(p.l)}</label>`:p.t==="select"?`<label>${Yt(p.l)}</label><select ${g}>${p.o.map(m=>{let[M,_]=Array.isArray(m)?m:[m,m];return`<option value="${Yt(M)}" ${M===(x??"")?"selected":""}>${Yt(_)}</option>`}).join("")}</select>`:`<label>${Yt(p.l)}</label><input ${g} ${p.t==="entity"?'list="set-ents"':""} ${p.t==="number"?`type="number" step="${p.s||1}"`:""} value="${Yt(x??"")}" placeholder="${Yt(p.p||"")}">`}).join("")}
      <div class="extra" style="margin-top:8px"></div>
      <div style="display:flex;margin-top:10px"><span style="flex:1"></span><button id="set-close" class="on">Fertig</button></div>`,o.querySelectorAll("[data-k]").forEach(p=>{p.onchange=()=>{a||(i.pushUndo(),a=!0);let x=p.dataset.t,g=p.value.trim();x==="checkbox"?g=p.checked:x==="number"?g=g===""?null:+g:g===""&&(g=null),h(p.dataset.k,g),u()}}),o.querySelector("#set-close").onclick=()=>i.closeOverlay(),s?.(o.querySelector(".extra"),f,()=>{a||(i.pushUndo(),a=!0),u()})};f()}var ed={rain:!0,snow:!0,lightning:!0,fog:!1,clouds:!0,sun:!0};function s_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");for(let e=0;e<14;e++){let n=40+Math.random()*176,s=50+Math.random()*40,r=22+Math.random()*30,o=t.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,256,128)}return new We(i)}function r_(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");return t.fillStyle="#e6ecff",t.beginPath(),t.arc(64,64,40,0,Math.PI*2),t.fill(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(84,56,36,0,Math.PI*2),t.fill(),new We(i)}var Yo=class extends Re{get id(){return"weather"}get label(){return"\u2601 Wetter"}get title(){return"Wetter drau\xDFen: Regen, Schnee, Gewitter, Wolken, Sonne und Mond"}get settingsLabel(){return"\u2601 Wetter"}cfg(){return{...ed,...this.settings.weather||{}}}openSettings(){let t=this.settings.weather={...ed,...this.settings.weather||{}},e=Object.keys(this.states).filter(n=>n.startsWith("weather."));Vn(this.view,{title:"\u2601 Wetter drau\xDFen",obj:t,note:"Die Wetter-Entit\xE4t steuert Regen, Schnee, Gewitter, Nebel und Wolken; Sonne und Mond kommen von sun.sun.",fields:[{k:"entity",l:"Wetter-Entit\xE4t",t:"select",o:[["","automatisch"],...e]},{k:"rain",l:"Regen",t:"checkbox"},{k:"snow",l:"Schnee",t:"checkbox"},{k:"lightning",l:"Gewitter und Blitze",t:"checkbox"},{k:"fog",l:"Nebel",t:"checkbox"},{k:"clouds",l:"Wolken und Abdunkeln",t:"checkbox"},{k:"sun",l:"Sonne und Mond",t:"checkbox"}]})}entity(){let t=this.states,e=this.cfg().entity;return e&&t[e]?e:Object.keys(t).find(n=>n.startsWith("weather."))||null}available(){return!!this.entity()}build(){let t=this.view,e=t.extent()||[0,0,10,10],n=t.cfg.quality==="tablet"?.3:1;this.center=new z((e[0]+e[2])/2,0,(e[1]+e[3])/2),this.box={x0:e[0]-14,x1:e[2]+14,z0:e[1]-14,z1:e[3]+14,top:26};let s=this.box.x1-this.box.x0,r=this.box.z1-this.box.z0,o=(h,u)=>h+Math.random()*(u-h);this.rainN=Math.round(2400*n),this.rainPos=new Float32Array(this.rainN*6),this.rainHead=new Float32Array(this.rainN*3),this.rainSpeed=new Float32Array(this.rainN);for(let h=0;h<this.rainN;h++)this.rainHead.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.rainSpeed[h]=o(16,24);let a=new Jt;a.setAttribute("position",new ke(this.rainPos,3).setUsage(Pc)),a.setDrawRange(0,0),this.rain=new he(a,new ae({color:10275071,transparent:!0,opacity:.5,depthWrite:!1})),this.rain.frustumCulled=!1,this.snowN=Math.round(1800*n),this.snowPos=new Float32Array(this.snowN*3),this.snowPhase=new Float32Array(this.snowN);for(let h=0;h<this.snowN;h++)this.snowPos.set([o(this.box.x0,this.box.x1),o(0,this.box.top),o(this.box.z0,this.box.z1)],h*3),this.snowPhase[h]=o(0,6.28);let l=new Jt;l.setAttribute("position",new ke(this.snowPos,3).setUsage(Pc)),l.setDrawRange(0,0),this.snow=new Ps(l,new zi({size:.2,color:16777215,map:oi(),transparent:!0,depthWrite:!1,opacity:.9})),this.snow.frustumCulled=!1,this.bolt=new un(new Jt().setFromPoints(Array.from({length:9},()=>new z)),new ae({color:15397631})),this.bolt.visible=!1,this.bolt.frustumCulled=!1,this.sunSprite=new nn(new Ze({map:oi("rgba(255,244,200,1)"),color:16771496,transparent:!0,depthWrite:!1,blending:cn,fog:!1})),this.sunSprite.scale.setScalar(16),this.moonSprite=new nn(new Ze({map:r_(),transparent:!0,depthWrite:!1,fog:!1})),this.moonSprite.scale.setScalar(6),this.sunSprite.visible=this.moonSprite.visible=!1;let c=s_();this.clouds=Array.from({length:9},()=>{let h=new nn(new Ze({map:c,transparent:!0,depthWrite:!1,opacity:0,fog:!1}));return h.scale.set(o(26,40),o(10,16),1),h.position.set(o(this.box.x0-10,this.box.x1+10),o(24,36),o(this.box.z0-10,this.box.z1+10)),h.visible=!1,h}),this.group.add(this.rain,this.snow,this.bolt,this.sunSprite,this.moonSprite,...this.clouds),this.base={amb:t.ambient.intensity,dl:t.sunLight.intensity,bg:t.scene.background.clone(),fogNear:t.scene.fog.near,fogFar:t.scene.fog.far,dlPos:t.sunLight.position.clone(),dlColor:t.sunLight.color.clone()},this.flash=0,this.nextStrike=4,this.wx=0,this.wz=0,this.w=null,this.lit={amb:this.base.amb,dl:this.base.dl}}update(t){let e=this.entity();if(!e||!this.base)return;let n=t[e],s=this.cfg(),r=this.plan.site?.north??this.settings.north??0,o=this.w=Qu(n.state,n.attributes||{},t["sun.sun"]||null),a=this.view;this.rain.geometry.setDrawRange(0,s.rain?Math.round(this.rainN*o.rain)*2:0),this.snow.geometry.setDrawRange(0,s.snow?Math.round(this.snowN*o.snow):0);let l=Math.tan(o.windAngle*Math.PI/180),c=Os(o.windBearing+180,0,r);this.wx=c.x*l,this.wz=c.z*l;let h=!o.night,u=Number.isFinite(o.sunElevation)?o.sunElevation:h?40:-20,f=Number.isFinite(o.sunAzimuth)?o.sunAzimuth:180,d=62,p=(g,m)=>g.position.set(this.center.x+m.x*d,Math.max(4,m.y*d),this.center.z+m.z*d);this.sunSprite.visible=s.sun&&h&&u>-2,this.sunSprite.visible&&p(this.sunSprite,Os(f,Math.max(u,6),r)),this.sunSprite.material.opacity=1-o.cloud*.75,this.moonSprite.visible=s.sun&&o.night,this.moonSprite.visible&&p(this.moonSprite,Os(f+180,xn(-u+10,14,60),r)),this.moonSprite.material.opacity=1-o.cloud*.8,this.clouds.forEach((g,m)=>{let M=s.clouds&&m<Math.ceil(this.clouds.length*o.cloud);g.visible=M,g.material.opacity=M?.2+.35*o.cloud:0});let x=h?Os(f,Math.max(u,12),r):Os(f+180,35,r);a.sunLight.position.set(this.center.x+x.x*30,x.y*30,this.center.z+x.z*30),a.sunLight.color.set(h?16773592:8361430),this.target={amb:this.base.amb*(h?1:.75)*(1-.25*o.cloud),dl:this.base.dl*(h?1:.4)*(1-.7*o.cloud),fog:s.fog?o.fog:0,tint:a.theme==="neon"&&h?.55*(1-o.cloud*.6):0},a.setChip("weather",`${o.lightning?"\u26C8":o.rain?"\u{1F327}":o.snow?"\u2744":o.fog?"\u{1F32B}":h?o.cloud>.6?"\u2601":o.cloud>.25?"\u26C5":"\u2600":"\u{1F319}"} ${td(n.state)}${n.attributes?.temperature!=null?` \xB7 ${n.attributes.temperature}\xB0`:""}${o.windKmh>=5?` \xB7 ${Math.round(o.windKmh)} km/h`:""}`)}tick(t){if(!this.w||!this.target)return;let e=this.view,n=this.w,s=this.cfg(),r=Math.min(1,t*1.5);if(this.lit.amb+=(this.target.amb-this.lit.amb)*r,this.lit.dl+=(this.target.dl-this.lit.dl)*r,s.lightning&&n.lightning&&(this.nextStrike-=t,this.nextStrike<=0)){this.flash=1,this.nextStrike=3+Math.random()*7;let h=this.box.x0+Math.random()*(this.box.x1-this.box.x0),u=this.box.z0+Math.random()*(this.box.z1-this.box.z0),f=this.bolt.geometry.attributes.position;for(let d=0;d<9;d++)f.setXYZ(d,h+(Math.random()-.5)*3*(d>0&&d<8?1:0),28-d*3.5,u+(Math.random()-.5)*3*(d>0&&d<8?1:0));f.needsUpdate=!0,this.bolt.visible=!0}this.flash=Math.max(0,this.flash-t*4),this.flash<.3&&(this.bolt.visible=!1),e.ambient.intensity=this.lit.amb+this.flash*1.4,e.sunLight.intensity=this.lit.dl+this.flash*1.8,e.scene.background.copy(this.base.bg).lerp(new Ot(1714765),this.target.tint).lerp(new Ot(14543103),this.flash*.5),this.target.fog>0?(e.scene.fog.near=this.base.fogNear*(1-.85*this.target.fog),e.scene.fog.far=this.base.fogFar*(1-.7*this.target.fog)):(e.scene.fog.near=this.base.fogNear,e.scene.fog.far=this.base.fogFar);let a=Math.round(this.rainN*n.rain);if(s.rain&&a){let u=this.wx,f=this.wz;for(let d=0;d<a;d++){let p=this.rainHead[d*3],x=this.rainHead[d*3+1],g=this.rainHead[d*3+2],m=this.rainSpeed[d]*t;x-=m,p+=u*m,g+=f*m,x<0&&(x=this.box.top,p=this.box.x0+Math.random()*(this.box.x1-this.box.x0),g=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.rainHead.set([p,x,g],d*3),this.rainPos.set([p,x,g,p-u*.7,x+.7,g-f*.7],d*6)}this.rain.geometry.attributes.position.needsUpdate=!0}let l=Math.round(this.snowN*n.snow);if(s.snow&&l){let h=performance.now()/1e3;for(let u=0;u<l;u++){let f=this.snowPos[u*3],d=this.snowPos[u*3+1],p=this.snowPos[u*3+2];d-=1.3*t,f+=(Math.sin(h*.7+this.snowPhase[u])*.5+this.wx*4)*t,p+=(Math.cos(h*.5+this.snowPhase[u])*.5+this.wz*4)*t,d<0&&(d=this.box.top,f=this.box.x0+Math.random()*(this.box.x1-this.box.x0),p=this.box.z0+Math.random()*(this.box.z1-this.box.z0)),this.snowPos[u*3]=f,this.snowPos[u*3+1]=d,this.snowPos[u*3+2]=p}this.snow.geometry.attributes.position.needsUpdate=!0}let c=(.4+n.windKmh*.05)*t;this.clouds.forEach(h=>{h.visible&&(h.position.x+=c,h.position.x>this.box.x1+20&&(h.position.x=this.box.x0-20))})}reset(){let t=this.view;this.base&&(t.ambient.intensity=this.base.amb,t.sunLight.intensity=this.base.dl,t.sunLight.position.copy(this.base.dlPos),t.sunLight.color.copy(this.base.dlColor),t.scene.background.copy(this.base.bg),t.scene.fog.near=this.base.fogNear,t.scene.fog.far=this.base.fogFar,t.setChip("weather",""))}dispose(){this.reset(),this.base=null,this.w=null,this.target=null}};function o_(i,t){if(t==null)return!1;let e=String(t).trim().toLowerCase();if(e==="")return!1;if(e==="*")return!0;let n=String(i??"").toLowerCase();return e.includes("*")?new RegExp("^"+e.split("*").map(r=>r.replace(/[.+?^${}()|[\]\\]/g,"\\$&")).join(".*")+"$").test(n):n===e||n.includes(e)}function Zo(i,t,e){for(let n of i||[]){let s=t[n.entity||e];if(!s)continue;let r=n.attr?s.attributes?.[n.attr]:s.state;if(o_(r,n.match))return n}return null}var a_=[["netflix","#e50914"],["youtube","#ff1a1a"],["prime","#00a8e1"],["amazon","#00a8e1"],["disney","#1b46c9"],["spotify","#1db954"],["plex","#e5a00d"],["kodi","#17b2e7"],["max","#5822b4"],["hbo","#5822b4"],["apple","#9aa0a6"],["twitch","#9146ff"],["tagesschau","#0a3a78"],["zdf","#fa7d19"],["ard","#0a56b8"],["rtl","#e30613"],["sky","#0072c9"],["dazn","#d6ff00"],["paramount","#0064ff"]];function Fc(i){let t=String(i||"").toLowerCase();return t&&a_.find(([e])=>t.includes(e))?.[1]||null}var Bc=i=>typeof i=="string"&&/^camera\.[\w]+$/.test(i);var l_=["off","unavailable","unknown","standby","idle"],Ko=class extends Re{get id(){return"screens"}build(t){this.items=(t.screens||[]).map(e=>({a:e,ctx:e.canvas.getContext("2d"),sig:""})),this.images=new Map,this.camTimer=0,this.bust=Date.now()}imageFor(t){if(!t)return null;let e=this.images.get(t);if(!e){let n=new Image;/^https?:\/\//i.test(t)&&!t.startsWith(location.origin)&&(n.crossOrigin="anonymous"),e={img:n,ok:!1},n.onload=()=>{e.ok=!0,this.items.forEach(s=>s.sig=""),this.update(this.states)},n.onerror=()=>{e.failed=!0},n.src=t,this.images.set(t,e)}return e.ok?e.img:null}model(t,e){let n=t.a.f,s=n.screen||{},r=s.entity||n.entity||null,o=r?e[r]:null,a=o?!l_.includes(o.state):!1,l=Zo(s.rules,e,r),c=l?.bg||s.bg||"dark";if(l?.image){let h=l.image,u=Bc(h);if(u){let f=e[h]?.attributes?.entity_picture;h=f?`${f}${f.includes("?")?"&":"?"}_=${this.bust}`:null}return{mode:"rule",bg:c,src:h,cam:u,key:`rule|${c}|${h}`}}if(o&&a){let h=o.attributes?.entity_picture,u=o.attributes?.app_name||o.attributes?.source||o.attributes?.media_title||"";if(o.state==="playing"&&h)return{mode:"art",bg:c,src:h,tint:Fc(u),key:`art|${h}|${u}`};let f=Fc(u)||"#2d6cff";return{mode:"app",bg:c,tint:f,text:u,key:`app|${f}|${u}|${o.state}`}}return a?{mode:"on",bg:c,key:"on"}:{mode:"off",bg:c,key:"off"}}update(t){if(this.items)for(let e of this.items){let n=this.model(e,t);n.key!==e.sig&&(e.sig=n.key,this.draw(e,n))}}tick(t){!this.items?.length||(this.camTimer+=t,this.camTimer<5)||(this.camTimer=0,!this.items.some(n=>(n.a.f.screen?.rules||[]).some(s=>Bc(s.image))))||(this.bust=Date.now(),this.images.forEach((n,s)=>{s.includes("_=")&&this.images.delete(s)}),this.items.forEach(n=>{n.sig.startsWith("rule|")&&n.sig.includes("_=")&&(n.sig="")}),this.update(this.states))}draw(t,e){let{ctx:n}=t,s=t.a.canvas.width,r=t.a.canvas.height,o=e.bg!=="white";n.clearRect(0,0,s,r);let a=c=>{n.fillStyle=c,n.fillRect(0,0,s,r)},l=(c,h=.12,u=!1)=>{let f=c.naturalWidth||c.width,d=c.naturalHeight||c.height,p=s*(1-h*2),x=r*(1-h*2),g=u?Math.max(s/f,r/d):Math.min(p/f,x/d),m=f*g,M=d*g;n.drawImage(c,(s-m)/2,(r-M)/2,m,M)};if(e.mode==="off"){a("#04060b");let c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,"rgba(255,255,255,.07)"),c.addColorStop(.4,"rgba(255,255,255,0)"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="on"){let c=n.createLinearGradient(0,0,0,r);c.addColorStop(0,"#2a3f8f"),c.addColorStop(1,"#0b1330"),n.fillStyle=c,n.fillRect(0,0,s,r)}else if(e.mode==="app"){a("#05070d");let c=n.createRadialGradient(s/2,r/2,10,s/2,r/2,s*.6);c.addColorStop(0,e.tint),c.addColorStop(1,"#05070d"),n.fillStyle=c,n.fillRect(0,0,s,r),e.text&&(n.fillStyle="#fff",n.font=`bold ${Math.round(r*.16)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(e.text,s/2,r/2,s*.86))}else if(e.mode==="art"){a("#05070d"),e.tint&&(n.fillStyle=e.tint,n.globalAlpha=.28,n.fillRect(0,0,s,r),n.globalAlpha=1);let c=this.imageFor(e.src);c&&l(c,.06)}else if(e.mode==="rule"){a(o?"#05070d":"#f4f6fb");let c=this.imageFor(e.src);c&&l(c,e.cam?0:.14,e.cam)}n.strokeStyle="rgba(255,255,255,.12)",n.lineWidth=3,n.strokeRect(1.5,1.5,s-3,r-3),t.a.tex.needsUpdate=!0}dispose(){this.items=null}};var yn=()=>Math.random().toString(36).slice(2,9),gr=(i,t=.25)=>Math.round(i/t)*t,Je=i=>(i||"").split(".")[0],Jo=i=>JSON.parse(JSON.stringify(i)),Ee=i=>i*Math.PI/180;function rn(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}function wi(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function ks(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?((i[0]-t[0])*n+(i[1]-t[1])*s)/r:0;o=Math.max(0,Math.min(1,o));let a=[t[0]+o*n,t[1]+o*s];return{d:Math.hypot(i[0]-a[0],i[1]-a[1]),q:a,t:o}}function jo(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return Math.abs(t/2)}function Ln(i){let t=0,e=0,n=0;for(let u=0;u<i.length;u++){let[f,d]=i[u],[p,x]=i[(u+1)%i.length],g=f*x-p*d;t+=g,e+=(f+p)*g,n+=(d+x)*g}let[s,r,o,a]=wi(i);if(Math.abs(t)<1e-9)return[(s+o)/2,(r+a)/2];let l=[e/(3*t),n/(3*t)];if(rn(l,i))return l;let c=null,h=1/0;for(let u=s;u<=o;u+=.1)for(let f=r;f<=a;f+=.1){let d=Math.hypot(u-l[0],f-l[1]);d<h&&rn([u,f],i)&&(h=d,c=[u,f])}return c||l}function zc(i,t,e){let n=Ee(i.rot||0),s=Math.cos(n),r=Math.sin(n);return[i.x+t*s-e*r,i.z+t*r+e*s]}function Qo(i){let t=(i.w||.5)/2,e=(i.d||.5)/2;return[[-t,-e],[t,-e],[t,e],[-t,e]].map(([n,s])=>zc(i,n,s))}function c_(i){let t=[...new Map(i.map(r=>[r.join(","),r])).values()].sort((r,o)=>r[0]-o[0]||r[1]-o[1]);if(t.length<3)return t;let e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}let s=[];for(let r of[...t].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function nd(i){let t=c_(i),e=null;for(let x=0;x<t.length;x++){let g=t[x],m=t[(x+1)%t.length],M=Math.atan2(m[1]-g[1],m[0]-g[0]),_=Math.cos(-M),v=Math.sin(-M),O=1/0,A=-1/0,P=1/0,U=-1/0;for(let w of t){let D=w[0]*_-w[1]*v,G=w[0]*v+w[1]*_;O=Math.min(O,D),A=Math.max(A,D),P=Math.min(P,G),U=Math.max(U,G)}let E=(A-O)*(U-P);(!e||E<e.area-1e-9)&&(e={area:E,ang:M,x0:O,x1:A,z0:P,z1:U})}let{ang:n,x0:s,x1:r,z0:o,z1:a}=e,l=(s+r)/2,c=(o+a)/2,h=Math.cos(n),u=Math.sin(n),f=r-s,d=a-o,p=n;return d>f&&([f,d]=[d,f],p+=Math.PI/2),{cx:l*h-c*u,cz:l*u+c*h,len:f,wid:d,ang:p}}function id(i=0){let t=i*Math.PI/180;return{north:[Math.sin(t),-Math.cos(t)],south:[-Math.sin(t),Math.cos(t)],east:[Math.cos(t),Math.sin(t)],west:[-Math.cos(t),-Math.sin(t)]}}var sd="playing",ta=class extends Re{get id(){return"sound"}get label(){return"\u{1F50A} Sound"}get title(){return"Wiedergabe: Karten, Klangringe, Multiroom; langes Dr\xFCcken \xF6ffnet das Men\xFC"}get usesHolo(){return!0}available(){return!!this.players?.length}build(t){this.players=[];let e=new Set,n=(r,o,a,l,c)=>{!r||Je(r)!=="media_player"||e.has(r)||(e.add(r),this.players.push({entity:r,x:o,y:a,z:l,floor:c}))};t.devices.forEach(r=>n(r.entity,r.x,r.y,r.z,r.floor)),t.furniture.forEach(r=>n(r.f.entity,r.x,r.top+.05,r.z,r.floor));let s=r=>new Ge({color:r,transparent:!0,opacity:0,side:oe,depthWrite:!1});this.players.forEach(r=>{r.root=new ce,r.root.position.set(r.x,r.y,r.z),r.rings=[0,1,2].map(()=>{let o=new Vt(new Is(.94,1,56),s(16722902));return o.rotation.x=-Math.PI/2,o.visible=!1,r.root.add(o),o}),r.card=In(this.cardHtml(r),{cls:"np",interactive:!0}),r.card.position.set(0,.55,0),r.card.visible=!1,r.card.element.addEventListener("click",o=>this.cardClick(r,o)),r.card.element.addEventListener("change",o=>this.cardClick(r,o)),r.root.add(r.card),this.group.add(r.root)}),this.lines=new he(new Jt,new ae({color:16722902,transparent:!0,opacity:.7})),this.lines.frustumCulled=!1,this.group.add(this.lines),this.phase=0}cardHtml(t){return`<div class="np"><img alt=""><div><div class="t"><b data-t></b></div><div class="sub" data-s></div>
      <div class="ctl"><button data-a="prev">\u23EE</button><button data-a="play">\u23EF</button><button data-a="next">\u23ED</button>
      <input type="range" min="0" max="100" data-a="vol" title="Lautst\xE4rke"></div></div></div>`}cardClick(t,e){let n=e.target.closest?.("[data-a]");if(!n)return;e.stopPropagation();let s={prev:"media_previous_track",play:"media_play_pause",next:"media_next_track"}[n.dataset.a];s&&e.type==="click"&&this.view.hass.callService("media_player",s,{entity_id:t.entity}),n.dataset.a==="vol"&&e.type==="change"&&this.view.hass.callService("media_player","volume_set",{entity_id:t.entity,volume_level:+n.value/100})}update(t){if(!this.players)return;let e=this.view.holo!==!1,n=0,s=[];this.players.forEach(a=>{let l=t[a.entity];a.playing=l?.state===sd,a.vol=xn(Number(l?.attributes?.volume_level??.35),0,1),a.members=l?.attributes?.group_members||[],a.rings.forEach(h=>{h.visible=a.playing});let c=e&&a.playing&&n<3;if(a.card.visible=c,c&&n++,l&&c){let h=l.attributes||{},u=[l.state,h.media_title,h.media_artist,h.entity_picture,h.friendly_name].join("|");if(u!==a.sig){a.sig=u;let d=a.card.element;d.querySelector("[data-t]").textContent=h.media_title||h.friendly_name||a.entity,d.querySelector("[data-s]").textContent=[h.media_artist,h.friendly_name].filter(Boolean).join(" \xB7 ");let p=d.querySelector("img");p.style.display=h.entity_picture?"":"none",h.entity_picture&&(p.src=h.entity_picture)}let f=a.card.element.querySelector("[data-a=vol]");f&&document.activeElement!==f&&(f.value=Math.round(a.vol*100))}a.playing&&s.push(a)});let r=[],o=new Set;this.players.forEach(a=>{a.members.forEach(l=>{let c=this.players.find(u=>u.entity===l);if(!c||c===a||a.floor!==c.floor)return;let h=[a.entity,c.entity].sort().join("|");o.has(h)||(o.add(h),r.push(new z(a.x,a.y,a.z),new z(c.x,c.y,c.z)))})}),this.lines.geometry.setFromPoints(r),this.lines.visible=r.length>0,this.menu&&this.refreshMenu()}tick(t){this.players&&(this.phase=(this.phase+t*.55)%1,this.players.forEach(e=>{if(!e.playing)return;let n=.35+e.vol*1.25;e.rings.forEach((s,r)=>{let o=(this.phase+r/3)%1;s.scale.setScalar(.2+o*n),s.material.opacity=(1-o)*(.35+.5*e.vol)})}))}onLongPress(t){return!t?.entity||Je(t.entity)!=="media_player"?!1:(this.openMenu(t.entity),!0)}closeMenu(){this.menu?.box.remove(),this.menu=null}openMenu(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(460px,94%);max-height:70%;overflow:auto",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e,this.menu={entity:t,box:e,mode:"main",stack:[],list:null,sig:""};let n=e.remove.bind(e);e.remove=()=>{n(),this.menu?.box===e&&(this.menu=null)},this.refreshMenu(!0)}refreshMenu(t=!1){let e=this.menu;if(!e)return;let n=this.states[e.entity];if(!n)return;let s=n.attributes||{},r=[e.mode,n.state,s.media_title,s.media_artist,s.entity_picture,s.source,s.is_volume_muted,e.list?.title].join("|");if(!t&&r===e.sig)return;e.sig=r;let o=(l,c={})=>this.view.hass.callService("media_player",l,{entity_id:e.entity,...c});if(e.mode==="browse")return this.renderBrowse();let a=s.source_list||[];e.box.innerHTML=`
      <div style="display:flex;gap:10px;align-items:center">
        ${s.entity_picture?`<img src="${Yt(s.entity_picture)}" style="width:64px;height:64px;border-radius:8px;object-fit:cover">`:""}
        <div style="flex:1;min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Yt(s.media_title||s.friendly_name||e.entity)}</b>
        <span style="opacity:.7">${Yt([s.media_artist,s.friendly_name,n.state].filter(Boolean).join(" \xB7 "))}</span></div>
        <button data-a="x" title="Schlie\xDFen">\u2715</button></div>
      <div style="display:flex;gap:6px;align-items:center;margin:10px 0">
        <button data-a="prev">\u23EE</button><button data-a="play" class="on">${n.state===sd?"\u23F8":"\u25B6"}</button><button data-a="next">\u23ED</button>
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
        <span>${n.can_play?`<button data-play="${s}" title="Abspielen">\u25B6</button>`:""}${n.can_expand?"\u203A":""}</span></div>`).join("")||(t.err?"":"<div style='opacity:.7'>Leer</div>")}</div>`,t.box.onclick=n=>{let s=n.target.closest("[data-a]")?.dataset.a;if(s==="x")return this.view.closeOverlay();if(s==="back"){let l=t.stack.pop();return l?this.browse(l.id,l.type):(t.mode="main",this.refreshMenu(!0))}let r=n.target.closest("[data-play]")?.dataset.play,o=r??n.target.closest("[data-i]")?.dataset.i;if(o==null)return;let a=e.children[+o];if(r!=null||a.can_play&&!a.can_expand)return this.view.hass.callService("media_player","play_media",{entity_id:t.entity,media_content_id:a.media_content_id,media_content_type:a.media_content_type}),t.mode="main",this.refreshMenu(!0);a.can_expand&&(t.stack.push({id:e.media_content_id,type:e.media_content_type}),this.browse(a.media_content_id,a.media_content_type))},t.box.onchange=null}reset(){this.closeMenu()}dispose(){this.closeMenu(),this.players=null}};var rd=i=>Number.isFinite(Number(i))?Number(i):null;function od(i,t){let e=(s,r=!1)=>{let o=s?t[s]:null;if(!o)return null;let a=rd(o.state);if(a==null)return null;let l=String(o.attributes?.unit_of_measurement||"W").toLowerCase();return l==="kw"?a*=1e3:l==="mw"&&(a*=1e6),r?-a:a},n=i.battery_soc&&t[i.battery_soc]?rd(t[i.battery_soc].state):null;return{solar:e(i.solar),grid:e(i.grid,!!i.grid_invert),battery:e(i.battery,!!i.battery_invert),consumption:e(i.consumption),wallbox:e(i.wallbox),soc:n}}function ad(i){let t=Math.max(0,i.solar??0),e=i.battery??0,n=i.grid??(i.consumption!=null?i.consumption-t-e:0),s=i.consumption!=null?Math.max(0,i.consumption):Math.max(0,t+n+e),r=Math.max(0,-e),o=Math.max(0,e),a=Math.min(t,s),l=t-a,c=Math.min(l,r),h=Math.max(0,Math.min(l-c,Math.max(0,-n)||l-c)),u=Math.max(0,n),f=Math.max(0,r-c),d=o,p=s>0?Math.max(0,Math.min(1,1-u/s)):1;return{S:t,H:s,g:n,b:e,s2h:a,s2b:c,s2g:h,g2h:u,g2b:f,b2h:d,autarky:p,import:u,export:Math.max(0,-n)}}function $i(i){return Math.abs(i)>=1e3?`${(i/1e3).toFixed(2).replace(".",",")} kW`:`${Math.round(i)} W`}function ld(i){return Math.max(.25,Math.min(2.6,.25+Math.log10(1+Math.abs(i))*.65))}function cd(i){let t={};for(let e of i?.energy_sources||[]){let n=e.stat_rate||e.power?.[0]?.stat_rate||e.power_config?.stat_rate||null;n&&(e.type==="solar"&&!t.solar&&(t.solar=n),e.type==="grid"&&!t.grid&&(t.grid=n),e.type==="battery"&&!t.battery&&(t.battery=n))}return t}function hd(i){let t={};for(let[e,n]of Object.entries(i||{}))t[e]=(n||[]).map(s=>{let r=s.lu??s.lc;return{t:r!=null?r*1e3:Date.parse(s.last_updated||s.last_changed||0),s:s.s??s.state,a:s.a??s.attributes??null}}).filter(s=>Number.isFinite(s.t)).sort((s,r)=>s.t-r.t);return t}function ud(i){return(i||[]).map(t=>({t:t.t,v:Number(t.s)})).filter(t=>Number.isFinite(t.v))}function dd(i,t,e){let n=0;for(let s=0;s<i.length;s++){let r=Math.max(i[s].t,t),o=Math.min(s+1<i.length?i[s+1].t:e,e);o>r&&(n+=Math.max(0,i[s].v)*((o-r)/36e5))}return n/1e3}function fd(i,t,e,n){let s=new Array(n).fill(null),r=0,o=null;for(let a=0;a<n;a++){let l=t+(e-t)*(a+.5)/n;for(;r<i.length&&i[r].t<=l;)o=i[r].v,r++;s[a]=o}return s}async function ea(i,t,e,n,{attrs:s=!1}={}){let r=[...new Set(t.filter(Boolean))];if(!r.length)return{};let o=await i.callWS({type:"history/history_during_period",start_time:e.toISOString(),end_time:n.toISOString(),entity_ids:r,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!s,no_attributes:!s});return hd(o)}var qi={solar:16765286,import:4891647,export:8116367,discharge:65437,charge:16722902,wallbox:1697535},Dn=(i,t,e)=>new z(i,t,e),na=class extends Re{get id(){return"energy"}get label(){return"\u26A1 Energie"}get title(){return"Energiefluss: Kabel mit Leistungspunkten, leuchtende Solarmodule, Hologramm"}get usesHolo(){return!0}get settingsLabel(){return"\u26A1 Energie"}cfg(){return{hide_below_w:5,device_cards:!0,...this.settings.energy||{}}}effective(){let t=this.cfg();return{...t,solar:t.solar||this.pvEntity||null,consumption:t.consumption||this.meterPower||null}}available(){let t=this.effective();return!!(t.solar||t.grid||t.battery||t.consumption)}build(t){this.anchors=t,this.pvEntity=t.pv.find(g=>g.entity)?.entity||null,this.meterPower=t.furniture.find(g=>g.f.type==="meter"&&g.f.power)?.f.power||null;let e=t.pv.some(g=>g.entity),n=t.pv.filter(g=>!e||g.entity),s=g=>g.pos||g.mesh.position,r=g=>t.furniture.find(m=>m.f.type===g),o=g=>g?Dn(g.x,(g.y+g.top)/2,g.z):null,a=t.rooms.filter(g=>g.elev<=.3),l=a.length?a:t.rooms,c=r("meter"),h=r("grid_point")||c,u=l.length?Dn(l.reduce((g,m)=>g+m.x,0)/l.length,1.2,l.reduce((g,m)=>g+m.z,0)/l.length):Dn(0,1.2,0);this.nodes={house:o(c)||u};let f=this.view.extent()||[0,0,10,10];if(this.nodes.grid=o(h)||Dn(f[0]-4,1,(f[1]+f[3])/2),n.length){let g=n.reduce((m,M)=>m.add(s(M)),Dn(0,0,0)).multiplyScalar(1/n.length);this.nodes.solar=g.add(Dn(0,.25,0))}else this.nodes.solar=o(r("inverter"));this.nodes.battery=o(r("battery")),this.nodes.wallbox=o(r("wallbox"));let d=Math.max(...t.rooms.map(g=>g.elev+2.8),...n.map(g=>s(g).y),3);this.nodes.holo=Dn(this.nodes.house.x,d+1.4,this.nodes.house.z),this.edges=[];let p=oi(),x=(g,m,M)=>{if(!m||!M)return;let _=this.route(m,M),v=new un(new Jt().setFromPoints(_.pts),new ae({color:3820152,transparent:!0,opacity:.45})),O=Math.max(6,Math.round(_.len*1.1)),A=new Ps(new Jt().setAttribute("position",new ke(new Float32Array(O*3),3)),new zi({size:.34,map:p,color:qi.solar,transparent:!0,depthWrite:!1,blending:cn}));A.frustumCulled=!1,A.visible=!1,this.group.add(v,A),this.edges.push({key:g,path:_,line:v,dots:A,n:O,u:0,dir:1,w:0})};x("solar",this.nodes.solar,this.nodes.house),x("grid",this.nodes.grid,this.nodes.house),x("battery",this.nodes.battery,this.nodes.house),x("wallbox",this.nodes.house,this.nodes.wallbox),this.pvTex=(()=>{let g=document.createElement("canvas");g.width=4,g.height=64;let m=g.getContext("2d"),M=m.createLinearGradient(0,0,0,64);M.addColorStop(0,"#102040"),M.addColorStop(.5,"#9fd0ff"),M.addColorStop(1,"#102040"),m.fillStyle=M,m.fillRect(0,0,4,64);let _=new We(g);return _.wrapT=Oi,_})(),this.pvMats=[...new Set(n.map(g=>g.mat))],this.pvMats.forEach(g=>{g.emissiveMap=this.pvTex,g.emissive.set(16777215),g.emissiveIntensity=.12,g.needsUpdate=!0}),this.pvWp=n.reduce((g,m)=>g+(m.wp||400),0)||400,this.level=0,this.holo=In('<div class="en"><b>\u26A1 Energie</b><div data-rows></div><canvas data-spark width="220" height="40"></canvas></div>',{cls:"holo"}),this.holo.position.copy(this.nodes.holo),this.group.add(this.holo),this.holo.visible=!1,this.devCards=t.furniture.filter(g=>g.f.power).map(g=>{let m=In("<span>\u26A1 <b>\u2013 W</b></span>",{cls:"pw"});return m.position.set(g.x,g.top+.45,g.z),m.visible=!1,this.group.add(m),{a:g,c:m,sig:""}}),this._html=null,this.curveTimer=0,this.loadCurve()}route(t,e){let n=Math.max(t.y,e.y)+.35,s=[t.clone(),Dn(t.x,n,t.z),Dn(e.x,n,t.z),Dn(e.x,n,e.z),e.clone()],r=s.filter((a,l)=>l===0||a.distanceTo(s[l-1])>.001),o=[0];for(let a=1;a<r.length;a++)o.push(o[a-1]+r[a].distanceTo(r[a-1]));return{pts:r,cum:o,len:o[o.length-1]||1}}at(t,e,n){let{pts:s,cum:r}=t,o=1;for(;o<r.length-1&&r[o]<e;)o++;let a=(e-r[o-1])/Math.max(1e-6,r[o]-r[o-1]);return n.copy(s[o-1]).lerp(s[o],xn(a,0,1))}async loadCurve(){let t=this.effective();if(!(!t.solar||!this.view.hass?.callWS))try{let e=new Date,n=new Date(e);n.setHours(0,0,0,0);let s=await ea(this.view.hass,[t.solar],n,e),r=ud(s[t.solar]).map(o=>({...o,v:this.unitW(t.solar,o.v)}));this.curve=fd(r,n.getTime(),n.getTime()+864e5,48),this.nowBucket=Math.min(47,Math.floor((e-n)/864e5*48)),this.yieldKwh=dd(r,n.getTime(),e.getTime()),this.drawCurve(),this.update(this.states)}catch{}}unitW(t,e){return String(this.states[t]?.attributes?.unit_of_measurement||"W").toLowerCase()==="kw"?e*1e3:e}drawCurve(){let t=this.holo?.element.querySelector("[data-spark]");if(!t||!this.curve)return;let e=t.getContext("2d"),n=t.width,s=t.height;e.clearRect(0,0,n,s);let r=Math.max(1,...this.curve.map(a=>a||0)),o=n/this.curve.length;this.curve.forEach((a,l)=>{if(a==null)return;let c=Math.max(1,a/r*(s-4));e.fillStyle=l===this.nowBucket?"#ffd166":"rgba(255,209,102,.55)",e.fillRect(l*o,s-c,o-1,c)})}update(t){if(!this.edges)return;let e=this.effective(),n=this.p=od(e,t),s=this.f=ad(n),r=(u,f,d,p)=>{let x=this.edges.find(g=>g.key===u);x&&(x.w=f,x.dir=d,x.dots.visible=f>=10,x.dots.material.color.setHex(p),x.line.material.color.setHex(f>=10?p:3820152),x.line.material.opacity=f>=10?.75:.35)};r("solar",s.S,1,qi.solar),r("grid",Math.abs(s.g),s.g>=0?1:-1,s.g>=0?qi.import:qi.export),r("battery",Math.abs(s.b),s.b>=0?1:-1,s.b>=0?qi.discharge:qi.charge),r("wallbox",Math.max(0,n.wallbox??0),1,qi.wallbox),this.level=xn(s.S/this.pvWp,0,1);let o=this.view.holo!==!1,a=(u,f,d,p="")=>`<div class="r"><span>${u} ${f}</span><b>${d}</b>${p?`<span class="sub">${p}</span>`:""}</div>`,l=[];(n.solar!=null||this.pvEntity)&&l.push(a("\u2600","PV",$i(s.S),this.yieldKwh!=null?`heute ${this.yieldKwh.toFixed(1).replace(".",",")} kWh`:"")),l.push(a("\u{1F3E0}","Haus",$i(s.H))),(n.grid!=null||n.consumption!=null)&&l.push(a("\u{1F50C}","Netz",$i(Math.abs(s.g)),s.g>10?"Bezug":s.g<-10?"Einspeisung":"")),(n.battery!=null||n.soc!=null)&&l.push(a("\u{1F50B}",n.soc!=null?`${Math.round(n.soc)} %`:"Akku",$i(Math.abs(s.b)),s.b>10?"entl\xE4dt":s.b<-10?"l\xE4dt":"")),n.wallbox!=null&&n.wallbox>10&&l.push(a("\u{1F697}","Wallbox",$i(n.wallbox))),s.H>0&&l.push(a("\u{1F331}","Autarkie",`${Math.round(s.autarky*100)} %`));for(let[u,f,d]of[["gas","\u{1F525}","Gas"],["water","\u{1F4A7}","Wasser"]]){let p=e[u]?t[e[u]]:null;p&&p.state!=="unavailable"&&l.push(a(f,d,`${Yt(p.state)} ${Yt(p.attributes?.unit_of_measurement||"")}`))}let c=l.join(""),h=this.holo.element;c!==this._html&&(this._html=c,h.querySelector("[data-rows]").innerHTML=c),this.holo.visible=o&&l.length>0,h.querySelector("[data-spark]").style.display=this.curve?"":"none",this.devCards.forEach(u=>{let f=t[u.a.f.power],d=f?parseFloat(f.state):NaN,p=Number.isFinite(d)?this.unitW(u.a.f.power,d):null;u.c.visible=e.device_cards!==!1&&o&&p!=null&&Math.abs(p)>=(e.hide_below_w??5);let x=p==null?"":$i(p);x!==u.sig&&(u.sig=x,u.c.element.querySelector("b").textContent=x)})}tick(t){if(!this.edges)return;let e=Dn(0,0,0);for(let n of this.edges){if(!n.dots.visible)continue;n.u=(n.u+n.dir*ld(n.w)*t/n.path.len+1)%1;let s=n.dots.geometry.attributes.position;for(let r=0;r<n.n;r++){let o=((n.u+r/n.n)%1+1)%1;this.at(n.path,o*n.path.len,e),s.setXYZ(r,e.x,e.y,e.z)}s.needsUpdate=!0}this.level>.01&&(this.pvTex.offset.y=(this.pvTex.offset.y-t*(.15+1.4*this.level))%1),this.pvMats.forEach(n=>{n.emissiveIntensity=.1+1.2*this.level}),this.curveTimer+=t,this.curveTimer>300&&(this.curveTimer=0,this.loadCurve())}reset(){(this.pvMats||[]).forEach(t=>{t.emissiveMap=null,t.emissive.set(2059263),t.emissiveIntensity=.15,t.needsUpdate=!0})}dispose(){this.reset(),this.edges=null,this.pvMats=[]}openSettings(){let t=this.settings.energy||={};Vn(this.view,{title:"\u26A1 Energie einrichten",obj:t,note:"Leistungs-Sensoren in Watt. Netz: Bezug positiv. Akku: Entladen positiv. Mit \u201Eumkehren\u201C drehst du das Vorzeichen um. Kabel und Karte brauchen mindestens PV, Netz oder Verbrauch.",fields:[{k:"solar",l:"PV-Leistung",t:"entity"},{k:"grid",l:"Netz-Leistung",t:"entity"},{k:"grid_invert",l:"Netz-Vorzeichen umkehren",t:"checkbox"},{k:"battery",l:"Akku-Leistung",t:"entity"},{k:"battery_invert",l:"Akku-Vorzeichen umkehren",t:"checkbox"},{k:"battery_soc",l:"Akku-Ladestand (%)",t:"entity"},{k:"consumption",l:"Hausverbrauch (sonst berechnet)",t:"entity"},{k:"wallbox",l:"Wallbox-Leistung",t:"entity"},{k:"gas",l:"Gas (Anzeige)",t:"entity"},{k:"water",l:"Wasser (Anzeige)",t:"entity"},{k:"device_cards",l:"Leistungskarten an Ger\xE4ten",t:"checkbox"},{k:"hide_below_w",l:"Karten unter \u2026 W ausblenden",t:"number",p:"5"}],extra:(e,n,s)=>{let r=document.createElement("button");r.textContent="\u21E9 Vom Energie-Dashboard \xFCbernehmen",r.onclick=async()=>{try{let o=cd(await this.view.hass.callWS({type:"energy/get_prefs"}));if(!Object.keys(o).length)return this.view.msg("Im Energie-Dashboard sind keine Leistungs-Sensoren hinterlegt \u2013 bitte oben w\xE4hlen.");s(),Object.assign(t,o),this.view.msg(`\xDCbernommen: ${Object.keys(o).join(", ")}`),n()}catch(o){this.view.msg("Energie-Dashboard nicht lesbar: "+(o.message||o.code))}},e.append(r)}})}};var h_=["battery","range","charging","power","lock","climate","switch","tracker"];function pd(i,t,e,n={}){let s=i?t?.[i]?.device_id:null,r=s?Object.keys(t).filter(u=>t[u].device_id===s&&e[u]&&!t[u].hidden):i&&e[i]?[i]:[],o=u=>e[u]?.attributes?.device_class,a=u=>r.find(u)||null,l=u=>u.startsWith("sensor."),c={battery:a(u=>l(u)&&o(u)==="battery"&&!/12v|aux|key|fob/.test(u))||a(u=>l(u)&&/battery_level|state_of_charge|soc|charge_level|ladestand/.test(u)),range:a(u=>l(u)&&/range|reichweite/.test(u)&&!/charge_time|time/.test(u)),charging:a(u=>u.startsWith("binary_sensor.")&&(o(u)==="battery_charging"||/charging|laden/.test(u))),power:a(u=>l(u)&&o(u)==="power"&&/charg|lade/.test(u)),lock:a(u=>u.startsWith("lock.")),climate:a(u=>u.startsWith("climate.")),switch:a(u=>(u.startsWith("switch.")||u.startsWith("button."))&&/charg|lade/.test(u)),tracker:a(u=>u.startsWith("device_tracker."))},h={};for(let u of h_)h[u]=n[u]||c[u]||null;return h}function Hc(i){return i==null||Number.isNaN(i)?1697535:i<20?16726843:i<50?16757575:4063130}function md(i,t){let e=a=>{let l=a&&t[a]?parseFloat(t[a].state):NaN;return Number.isFinite(l)?l:null},n=a=>t[a]?.attributes?.unit_of_measurement||"",s=a=>!!a&&["on","heat","cool","heat_cool","auto","charging"].includes(t[a]?.state),r=i.tracker?t[i.tracker]?.state:null,o=e(i.power);return o!=null&&n(i.power).toLowerCase()==="w"&&(o/=1e3),{battery:e(i.battery),range:e(i.range),rangeUnit:n(i.range)||"km",charging:s(i.charging)||o!=null&&o>.05,power:o,locked:i.lock?t[i.lock]?.state==="locked":null,climateOn:s(i.climate),away:r!=null&&r!=="home"&&r!=="unknown"}}var Fs=class extends Re{get id(){return"car"}get label(){return"\u{1F697} Auto"}get title(){return"Fahrzeug: Ladestand, Reichweite, Laden, Verriegelung und Klima"}get usesHolo(){return!0}get settingsLabel(){return"\u{1F697} Auto"}available(){return!!this.cars?.length}build(t){this.cars=t.cars.map(e=>{let n=t.furniture.find(a=>a.f===e.f),s=In("<span data-pin>\u{1F697}</span>",{cls:"pin",interactive:!0});s.position.set(n.x,n.top+.5,n.z),s.element.style.cursor="pointer",s.element.addEventListener("click",()=>this.toggleCard(o));let r=In('<div class="car"></div>',{cls:"carcard",interactive:!0});r.position.set(n.x,n.top+1.4,n.z),r.visible=!1,r.element.addEventListener("click",a=>this.cardClick(o,a)),this.group.add(s,r);let o={...e,a:n,pin:s,dlg:r,open:!1,roles:null,sig:"",dlgSig:""};return o})}roles(t){let e=t.f,n=e.car||{};return pd(n.entity||e.entity,this.view.hass?.entities||{},this.states,n)}toggleCard(t){t.open=!t.open,this.cars.forEach(e=>{e!==t&&(e.open=!1)}),this.update(this.states)}onTap(t){let e=this.cars?.find(n=>n.f.id===t?.furnId);return e?(this.toggleCard(e),!0):!1}update(t){if(!this.cars)return;let e=this.view.holo!==!1;this.cars.forEach(n=>{let s=n.roles=this.roles(n),r=n.s=md(s,t),o=r.battery!=null||r.range!=null||s.lock||s.climate;n.band.color.setHex(r.climateOn?16751164:Hc(r.battery)),n.band.opacity=r.away?.2:.9,n.group.visible=!0;let a=n.f.car?.name||n.f.name||"Auto",l=r.away?["unterwegs"]:[r.battery!=null?`\u{1F50B} ${Math.round(r.battery)} %`:null,r.range!=null?`${Math.round(r.range)} ${Yt(r.rangeUnit)}`:null,r.charging?`\u26A1 ${r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"l\xE4dt"}`:null,r.locked!=null?r.locked?"\u{1F512}":"\u{1F513}":null,r.climateOn?"\u2744":null].filter(Boolean),c=`${Yt(a)}${l.length?" \xB7 "+l.join(" \xB7 "):""}`;if(c!==n.sig&&(n.sig=c,n.pin.element.firstChild.innerHTML=c),n.pin.visible=e,n.dlg.visible=e&&n.open,n.open){let h=r.battery!=null?xn(r.battery,0,100):0,u=`<b>\u{1F697} ${Yt(a)}</b>
          ${r.battery!=null?`<div class="bar"><i style="width:${h}%;background:#${Hc(r.battery).toString(16).padStart(6,"0")}"></i></div>`:""}
          <div class="r"><span>Ladestand</span><b>${r.battery!=null?Math.round(r.battery)+" %":"\u2013"}</b></div>
          <div class="r"><span>Reichweite</span><b>${r.range!=null?Math.round(r.range)+" "+Yt(r.rangeUnit):"\u2013"}</b></div>
          <div class="r"><span>Laden</span><b>${r.charging?r.power!=null?r.power.toFixed(1).replace(".",",")+" kW":"ja":"nein"}</b></div>
          <div class="btns">
            ${s.lock?`<button data-a="lock">${r.locked?"\u{1F512} Verriegelt":"\u{1F513} Offen"}</button>`:""}
            ${s.climate?`<button data-a="climate" class="${r.climateOn?"on":""}">\u2744 Klima</button>`:""}
            ${s.switch?`<button data-a="charge" class="${r.charging?"on":""}">\u26A1 Laden</button>`:""}
            <button data-a="close">\u2715</button></div>`;u!==n.dlgSig&&(n.dlgSig=u,n.dlg.element.firstChild.innerHTML=u)}})}cardClick(t,e){let n=e.target.closest("[data-a]")?.dataset.a;if(!n)return;e.stopPropagation();let{roles:s,s:r}=t,o=this.view.hass;if(n==="close")return t.open=!1,this.update(this.states);if(n==="lock"&&s.lock){if(r.locked&&!confirm("Auto entriegeln?"))return;o.callService("lock",r.locked?"unlock":"lock",{entity_id:s.lock})}n==="climate"&&s.climate&&o.callService("climate",r.climateOn?"turn_off":"turn_on",{entity_id:s.climate}),n==="charge"&&s.switch&&(s.switch.startsWith("button.")?o.callService("button","press",{entity_id:s.switch}):o.callService("switch",r.charging?"turn_off":"turn_on",{entity_id:s.switch}))}tick(t,e){this.cars?.forEach(n=>{n.s?.charging&&!n.s.away&&(n.band.opacity=.55+.35*Math.sin(e*4))})}openSettings(){let t=this.cars?.[0];if(!t)return this.view.msg("Erst ein Fahrzeug (M\xF6beltyp \u201Ecar\u201C) im Plan platzieren.");this.openCarSettings(t.f)}openCarSettings(t){let e=t.car||={};Vn(this.view,{title:"\u{1F697} Auto zuordnen",obj:e,note:"Nenne eine beliebige Entit\xE4t des Autos; die anderen Entit\xE4ten desselben Ger\xE4ts werden automatisch gefunden. Eigene Zuordnungen unten haben Vorrang.",fields:[{k:"name",l:"Name",t:"text"},{k:"entity",l:"Entit\xE4t des Autos (z. B. Ladestand)",t:"entity"},{k:"battery",l:"Ladestand (%)",t:"entity"},{k:"range",l:"Reichweite",t:"entity"},{k:"charging",l:"L\xE4dt (binary_sensor)",t:"entity"},{k:"power",l:"Ladeleistung",t:"entity"},{k:"lock",l:"Zentralverriegelung (lock)",t:"entity"},{k:"climate",l:"Klima (climate)",t:"entity"},{k:"switch",l:"Laden starten/stoppen (switch/button)",t:"entity"},{k:"tracker",l:"Standort (device_tracker)",t:"entity"}]})}};function Bs(i){let t=i*Math.PI/180;return[-Math.sin(t),Math.cos(t)]}function ia(i,t,e,n,s,r=18){let o=Bs(e),a=Math.atan2(o[1],o[0]),l=n*Math.PI/360,c=[[i,t]];for(let h=0;h<=r;h++){let u=a-l+2*l*h/r;c.push([i+s*Math.cos(u),t+s*Math.sin(u)])}return c}function gd(i,t){return 2*Math.atan(Math.tan(i*Math.PI/360)/Math.max(.2,t))*180/Math.PI}var u_=[["person","\u{1F6B6}",/person|human|people|mensch|face|gesicht/i],["vehicle","\u{1F697}",/vehicle|car\b|truck|auto|fahrzeug|bus\b|motorcycle|bicycle|lkw|pkw/i],["animal","\u{1F43E}",/animal|dog|cat\b|bird|tier|pet\b|hund|katze|vogel/i],["package","\u{1F4E6}",/package|paket|parcel/i],["motion","\u3030",/motion|bewegung|movement|moving/i]];function xd(i,t="",e=""){let n=`${i} ${t}`;for(let[s,r,o]of u_)if(o.test(n))return{kind:s,icon:r};return["motion","occupancy","moving"].includes(e)?{kind:"motion",icon:"\u3030"}:null}function yd(i,t,e){let n=[],s=null;for(let r of i||[])r.s==="on"&&s!=="on"&&r.t>=t-e&&r.t<=t&&n.push({t:r.t,age:(t-r.t)/e}),s=r.s;return n}var xr=i=>new Date(i).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"});function _d(i){return/[?&]token=([^&]+)/.exec(i||"")?.[1]||null}var Un=(i,t,e)=>new z(i,t,e),d_=["motion","occupancy","presence","moving"],sa=class extends Re{get id(){return"cameras"}get label(){return"\u{1F3A5} Kameras"}get title(){return"Kameras: Sichtfeld, Erkennungs-Pins, Standbild, Durch-die-Kamera-sehen"}get settingsLabel(){return"\u{1F3A5} Kameras"}get usesHolo(){return!0}cfg(){return{pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}}}available(){return!!this.cams?.length}toolbar(){return[{label:"\u{1F5BC} Wand",title:"Standbilder aller Kameras als Raster, alle 5 s aktualisiert",on:!!this.wall,fn:()=>this.toggleWall()},{label:"\u{1F463} Spur",title:"Bewegung der letzten 30 Minuten",on:!!this.trailOn,fn:()=>this.toggleTrail()}]}build(t){this.anchors=t;let e=n=>t.rooms.find(s=>s.floor===n)?.elev??0;this.cams=t.devices.filter(n=>n.kind==="camera").map(n=>{let s=n.d,r={a:n,d:s,entity:n.entity,rot:s.rot??0,tilt:s.tilt??25,fov:s.fov??90,reach:s.reach??7,fe:s.groundY??e(n.floor)},o=ia(n.x,n.z,r.rot,r.fov,r.reach),a=[];for(let d=1;d<o.length-1;d++)a.push(o[0][0],r.fe+.05,o[0][1],o[d][0],r.fe+.05,o[d][1],o[d+1][0],r.fe+.05,o[d+1][1]);let l=new Jt;l.setAttribute("position",new jt(a,3)),r.mat=new Ge({color:1697535,transparent:!0,opacity:.16,side:oe,depthWrite:!1}),r.cone=new Vt(l,r.mat);let c=[Un(n.x,r.fe+.05,n.z),...o.slice(1).map(d=>Un(d[0],r.fe+.05,d[1])),Un(n.x,r.fe+.05,n.z)];r.edge=new un(new Jt().setFromPoints(c),new ae({color:1697535,transparent:!0,opacity:.7})),r.cone.visible=r.edge.visible=this.cfg().fov!==!1;let h=Bs(r.rot),u=Math.cos(Ee(r.tilt)),f=Un(n.x+h[0]*.6*u,n.y-Math.sin(Ee(r.tilt))*.6,n.z+h[1]*.6*u);return r.dir=new un(new Jt().setFromPoints([Un(n.x,n.y,n.z),f]),new ae({color:16722902})),r.pin=In("<span></span>",{cls:"pin",interactive:!0}),r.pin.position.set(n.x+h[0]*.7,n.y+.35,n.z+h[1]*.7),r.pin.visible=!1,r.pin.element.style.cursor="pointer",r.pin.element.addEventListener("click",()=>this.openCard(r)),this.group.add(r.cone,r.edge,r.dir,r.pin),r}),this.trailGroup=new ce,this.group.add(this.trailGroup),this.sibs=new Map,this.timer=0,this.trailTimer=999,this.look=null,this.trailOn&&this.loadTrail()}siblings(t){let e=this.sibs.get(t.entity);if(e)return e;let n=this.view.hass,s=this.states,r=n?.entities?.[t.entity]?.device_id,o=t.d.motion&&s[t.d.motion]?[{entity:t.d.motion,kind:"motion",icon:"\u3030"}]:[],a=r?Object.keys(n.entities).filter(l=>l!==t.entity&&n.entities[l].device_id===r&&s[l]):[];for(let l of a){if(!l.startsWith("binary_sensor.")&&!l.startsWith("sensor."))continue;let c=s[l],h=xd(l,c.attributes?.friendly_name,c.attributes?.device_class);h&&!o.some(u=>u.entity===l)&&o.push({entity:l,...h,count:l.startsWith("sensor.")})}return this.sibs.set(t.entity,e=o),e}update(t){if(!this.cams)return;let e=this.view.holo!==!1;this.cams.forEach(n=>{let r=this.siblings(n).filter(l=>l.count?parseFloat(t[l.entity]?.state)>0:t[l.entity]?.state==="on"),o=r.length>0;if(n.motion=o,n.mat.color.setHex(o?16726843:1697535),n.edge.material.color.setHex(o?16726843:1697535),n.mat.opacity=o?.3:.16,n.recording=t[n.entity]?.state==="recording",this.cfg().pins!==!1&&e&&o){let l=r.map(c=>{let h=t[c.entity];return`${c.icon} <b>${xr(Date.parse(h.last_changed||h.last_updated||Date.now()))}</b>`}).join(" \xB7 ");l!==n.pinSig&&(n.pinSig=l,n.pin.element.firstChild.innerHTML=l),n.pin.visible=!0}else n.pin.visible=!1}),this.wall&&this.refreshWall(!1),this.card&&this.refreshCard(!1)}picture(t,e=!0){let n=this.states[t.entity]?.attributes?.entity_picture;return n?e?`${n}${n.includes("?")?"&":"?"}_=${Date.now()}`:n:null}streamUrl(t){let e=_d(this.states[t.entity]?.attributes?.entity_picture);return e?`/api/camera_proxy_stream/${t.entity}?token=${e}`:null}onTap(t){let e=this.cams?.find(n=>n.entity===t?.entity);return e?(this.openCard(e),!0):!1}openCard(t){this.view.closeOverlay();let e=document.createElement("div");e.className="overlay",e.style.cssText="left:50%;bottom:16px;transform:translateX(-50%);width:min(480px,94%)",this.view.shadowRoot.querySelector(".wrap").append(e),this.view._overlay=e;let n=e.remove.bind(e);e.remove=()=>{n(),this.card?.box===e&&(this.card=null)};let s=this.states[t.entity]?.attributes?.friendly_name||t.entity;e.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><b>\u{1F3A5} ${Yt(s)}</b><button data-a="x">\u2715</button></div>
      <img data-img style="width:100%;border-radius:8px;margin:8px 0;background:#000;min-height:120px;object-fit:cover" alt="">
      <div style="display:flex;gap:6px;flex-wrap:wrap"><button data-a="look" class="on">\u{1F441} Durch die Kamera sehen</button><button data-a="live">\u25B6 Live</button><button data-a="info">\u2139</button></div>`,e.onclick=r=>{let o=r.target.closest("[data-a]")?.dataset.a;o==="x"?this.view.closeOverlay():o==="look"?(this.view.closeOverlay(),this.lookThrough(t)):o==="live"?this.openLive(t):o==="info"&&(this.view.closeOverlay(),this.view.moreInfo(t.entity))},this.card={cam:t,box:e,timer:0},this.refreshCard(!0)}refreshCard(t){let e=this.card;if(!e)return;let n=e.box.querySelector("[data-img]"),s=this.picture(e.cam,!1);n&&s&&(t||n.dataset.src!==s)&&(n.dataset.src=s,n.src=this.picture(e.cam))}openLive(t){this.view.closeOverlay();let e=this.streamUrl(t),n=document.createElement("div");n.className="overlay",n.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(860px,94%)",this.view.shadowRoot.querySelector(".wrap").append(n),this.view._overlay=n,n.innerHTML=`<div style="display:flex;justify-content:space-between"><b>\u{1F3A5} ${Yt(this.states[t.entity]?.attributes?.friendly_name||t.entity)} \xB7 Live</b><button data-a="x">\u2715</button></div>
      <img style="width:100%;border-radius:8px;margin-top:8px;background:#000" alt="">
      <div style="opacity:.6;font-size:11px;margin-top:4px">${e?"Live-Strom (MJPEG)":"Dieses Kamera-Ger\xE4t liefert keinen Live-Strom \u2013 das Bild wird jede Sekunde neu geladen."}</div>`;let s=n.querySelector("img"),r=0,o=()=>{s.src=this.picture(t)};e?(s.onerror=()=>{s.onerror=null,r=setInterval(o,1e3),o()},s.src=e):(o(),r=setInterval(o,1e3));let a=n.remove.bind(n);n.remove=()=>{clearInterval(r),s.src="",a()},n.onclick=l=>{l.target.closest("[data-a=x]")&&this.view.closeOverlay()}}lookThrough(t){let e=this.view;if(this.look)return;let n=t.a,s=Bs(t.rot),r=Math.cos(Ee(t.tilt)),o={pos:Un(n.x,n.y,n.z),target:Un(n.x+s[0]*r,n.y-Math.sin(Ee(t.tilt)),n.z+s[1]*r),hfov:t.fov};this.look={cam:t,t:0,from:{pos:e.camera.position.clone(),target:e.controls.target.clone(),fov:e.camera.fov},to:o,done:!1},e.controls.enabled=!1;let a=e.shadowRoot.querySelector("#view"),l=document.createElement("img");l.style.cssText="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;pointer-events:none;z-index:2";let c=document.createElement("div");c.className="overlay",c.style.cssText="left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:8px;align-items:center;z-index:7";let h=!!e.hass?.user?.is_admin&&e.cfg.mode!=="card";c.innerHTML=`<span>Bild</span><input type="range" min="0" max="100" value="60" data-a="op" style="width:110px">
      ${h?`<span>Drehung</span><input type="range" min="0" max="360" value="${t.rot}" data-a="rot" style="width:90px"><span>Neigung</span><input type="range" min="0" max="80" value="${t.tilt}" data-a="tilt" style="width:80px">`:""}
      <button data-a="back" class="on">\u2190 Zur\xFCck zur Ansicht</button>`,a.append(l,c);let u=()=>{let d=Bs(t.rot),p=Math.cos(Ee(t.tilt));this.look.to.target.set(n.x+d[0]*p,n.y-Math.sin(Ee(t.tilt)),n.z+d[1]*p),e.controls.target.copy(this.look.to.target),e.camera.lookAt(this.look.to.target)};c.oninput=d=>{let p=d.target.dataset.a;p==="op"&&(l.style.opacity=d.target.value/100),(p==="rot"||p==="tilt")&&(t[p]=+d.target.value,t.d[p]=t[p],this.look.moved=!0,u())},c.onclick=d=>{d.target.closest("[data-a=back]")&&this.endLook()},this.look.ui={img:l,bar:c};let f=()=>{let d=this.picture(t);d&&(l.src=d)};f(),this.look.timer=setInterval(f,2e3)}endLook(){let t=this.look,e=this.view;t&&(clearInterval(t.timer),t.ui.img.remove(),t.ui.bar.remove(),e.camera.position.copy(t.from.pos),e.controls.target.copy(t.from.target),e.camera.fov=t.from.fov,e.camera.updateProjectionMatrix(),e.controls.enabled=!0,this.look=null,t.moved&&(e.msg("Drehung/Neigung ge\xE4ndert \u2013 mit \u{1F4BE} speichern"),e.rebuild3D()))}toggleWall(){if(this.wall){this.wall.remove(),this.wall=null,this.view.renderBar();return}let t=document.createElement("div");t.style.cssText="position:absolute;left:8px;top:48px;z-index:4;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;width:min(520px,60%);max-height:70%;overflow:auto",this.cams.forEach(e=>{let n=document.createElement("div");n.style.cssText="position:relative;border:2px solid #2a3b6a;border-radius:8px;overflow:hidden;background:#000;cursor:pointer;aspect-ratio:16/9",n.innerHTML=`<img style="width:100%;height:100%;object-fit:cover;display:block" alt=""><span style="position:absolute;left:4px;bottom:3px;font-size:11px;background:rgba(0,0,0,.6);padding:1px 5px;border-radius:4px">${Yt(this.states[e.entity]?.attributes?.friendly_name||e.entity)}</span><i data-rec style="position:absolute;right:6px;top:4px;color:#ff3b3b;display:none">\u25CF</i>`,n.onclick=()=>this.openLive(e),e.tile=n,t.append(n)}),this.view.shadowRoot.querySelector("#view").append(t),this.wall=t,this.view.renderBar(),this.refreshWall(!0)}refreshWall(t){this.cams.forEach(e=>{let n=e.tile;if(n&&(n.style.borderColor=e.motion?"#ff3b3b":"#2a3b6a",n.querySelector("[data-rec]").style.display=e.recording?"":"none",t)){let s=this.picture(e);s&&(n.querySelector("img").src=s)}})}toggleTrail(){this.trailOn=!this.trailOn,this.trailOn?this.loadTrail():this.clearTrail(),this.view.renderBar()}clearTrail(){this.trailGroup?.clear(),this.trailLabels?.forEach(t=>t.element.remove()),this.trailLabels=[]}positionOf(t){let e=this.anchors,n=e.devices.find(c=>c.entity===t);if(n)return Un(n.x,n.y,n.z);let s=this.cams.find(c=>this.siblings(c).some(h=>h.entity===t));if(s){let c=Bs(s.rot);return Un(s.a.x+c[0]*s.reach*.5,s.fe+.5,s.a.z+c[1]*s.reach*.5)}let r=this.view.hass,o=r?.entities?.[t],a=o?.area_id||r?.devices?.[o?.device_id]?.area_id,l=a?e.rooms.find(c=>c.area===a):null;return l?Un(l.x,l.elev+1.1,l.z):null}async loadTrail(){if(!this.trailOn||!this.view.hass?.callWS)return;let t=this.states,e=Object.keys(t).filter(a=>a.startsWith("binary_sensor.")&&d_.includes(t[a].attributes?.device_class)).filter(a=>this.positionOf(a)),n=this.cams.flatMap(a=>this.siblings(a).filter(l=>!l.count).map(l=>l.entity)),s=[...new Set([...e,...n])].slice(0,60);if(!s.length){this.view.msg("Keine Bewegungsmelder im Plan oder an Kameras gefunden");return}let r=Date.now(),o=(this.cfg().trail_minutes||30)*6e4;try{let a=await ea(this.view.hass,s,new Date(r-o),new Date(r));if(!this.trailOn)return;let l=s.flatMap(c=>yd(a[c],r,o).map(h=>({...h,entity:c,pos:this.positionOf(c)}))).filter(c=>c.pos).sort((c,h)=>c.t-h.t);this.drawTrail(l)}catch(a){this.view.msg("Verlauf nicht verf\xFCgbar: "+(a.message||a.code))}}drawTrail(t){if(this.clearTrail(),!t.length)return;let e=oi();t.forEach(s=>{let r=new nn(new Ze({map:e,color:1697535,transparent:!0,opacity:xn(1-s.age*.85,.12,1),depthTest:!1,blending:cn}));r.position.copy(s.pos),r.scale.setScalar(.9*(1-.55*s.age)+.25),r.renderOrder=8,this.trailGroup.add(r)});let n=new Map;if(t.forEach(s=>{let r=`${s.pos.x.toFixed(2)}|${s.pos.z.toFixed(2)}`;n.has(r)||n.set(r,{pos:s.pos,times:[]}),n.get(r).times.push(s.t)}),n.forEach(s=>{let r=In(`<span>${s.times.slice(-4).reverse().map(xr).join(" \xB7 ")}${s.times.length>4?" \u2026":""}</span>`,{cls:"pw"});r.position.copy(s.pos).add(Un(0,.3,0)),this.trailGroup.add(r),this.trailLabels.push(r)}),t.length>1){let s=[],r=[];t.forEach(l=>{s.push(l.pos.x,l.pos.y,l.pos.z);let c=xn(1-l.age,.1,1);r.push(.1*c,.9*c,1*c)});let o=new Jt;o.setAttribute("position",new jt(s,3)),o.setAttribute("color",new jt(r,3));let a=new un(o,new ae({vertexColors:!0,transparent:!0,depthTest:!1}));a.renderOrder=8,this.trailGroup.add(a)}}tick(t){let e=this.view;if(this.look){let n=this.look;if(!n.done){n.t=Math.min(1,n.t+t/.9);let s=n.t*n.t*(3-2*n.t);e.camera.position.lerpVectors(n.from.pos,n.to.pos,s),e.controls.target.lerpVectors(n.from.target,n.to.target,s);let r=e.viewEl.clientWidth||1,o=e.viewEl.clientHeight||1;e.camera.fov=n.from.fov+(gd(n.to.hfov,r/o)-n.from.fov)*s,e.camera.updateProjectionMatrix(),n.t>=1&&(n.done=!0)}}this.timer+=t,this.timer>5&&(this.timer=0,this.wall&&this.refreshWall(!0),this.card&&this.refreshCard(!0)),this.trailTimer+=t,this.trailOn&&this.trailTimer>60&&(this.trailTimer=0,this.loadTrail())}reset(){this.endLook(),this.clearTrail(),this.wall&&(this.wall.remove(),this.wall=null)}dispose(){this.endLook(),this.wall?.remove(),this.wall=null,this.cams=null}openSettings(){let t=this.settings.cameras={pins:!0,fov:!0,trail_minutes:30,...this.settings.cameras||{}};Vn(this.view,{title:"\u{1F3A5} Kameras",obj:t,note:"Kameras sind Ger\xE4te vom Typ camera. Drehung, Neigung, \xD6ffnungswinkel und Reichweite stellst du am Ger\xE4t ein (Ger\xE4t anklicken). Die Melder werden am selben HA-Ger\xE4t gefunden oder dort eingetragen.",fields:[{k:"fov",l:"Sichtfeld auf dem Boden zeigen",t:"checkbox"},{k:"pins",l:"Erkennungs-Pins (Person, Fahrzeug, Tier \u2026)",t:"checkbox"},{k:"trail_minutes",l:"Bewegungsspur: Minuten zur\xFCck",t:"number",s:5}]})}};var yr={paper:{label:"Papier",re:/papier|pappe|karton|blau/i},yellow:{label:"Gelber Sack",re:/gelb|wertstoff|leichtverp|verpack/i},rest:{label:"Restm\xFCll",re:/rest|schwarz|hausm|grau/i},bio:{label:"Bio",re:/bio|braun|küche|kueche|organ/i}};function Vc(i){let t=String(i??"");return Object.keys(yr).filter(e=>yr[e].re.test(t))}function Md(i){return yr[i.waste]?i.waste:Vc(`${i.name||""}`)[0]||null}var vd=i=>String(i).padStart(2,"0");function wd(i,t=0){let e=new Date(i);return e.setDate(e.getDate()+t),`${e.getFullYear()}-${vd(e.getMonth()+1)}-${vd(e.getDate())}`}var f_=/^\d{4}-\d{2}-\d{2}$/,bd=i=>Object.keys(i||{}).filter(t=>f_.test(t));function Sd(i,t){let e=i?.[t];return e==null?[]:Vc(Array.isArray(e)?e.join(", "):e)}function Ed(i,t){let e=new Set;for(let n of i||[]){let s=(n.start?.date||n.start?.dateTime||"").slice(0,10),r=(n.end?.date||n.end?.dateTime||"").slice(0,10);if(!s)continue;let o=!!n.start?.date;(!r||r<s)&&(r=s),t>=s&&(o?t<r||s===r:t<=r)&&Vc(n.summary).forEach(a=>e.add(a))}return[...e]}function Td(i,t){if(t&&i[t])return{entity:t,type:t.startsWith("calendar.")?"calendar":"sensor"};let e=Object.keys(i).filter(r=>r.startsWith("sensor.")&&bd(i[r].attributes).length>=2),n=r=>(/leerung|abfall|müll|muell|waste/i.test(`${r} ${i[r].attributes?.friendly_name||""}`)?1:0)*100+bd(i[r].attributes).length;if(e.sort((r,o)=>n(o)-n(r)),e.length)return{entity:e[0],type:"sensor"};let s=Object.keys(i).filter(r=>r.startsWith("calendar.")&&i[r].state!=="unavailable"&&/müll|muell|abfall|waste|leerung/i.test(`${r} ${i[r].attributes?.friendly_name||""}`));return s.length?{entity:s[0],type:"calendar"}:null}var ra=class extends Re{get id(){return"waste"}get label(){return"\u{1F5D1} M\xFCll"}get title(){return"M\xFClltonnen leuchten am Tag vor der Abholung"}get settingsLabel(){return"\u{1F5D1} M\xFCllabfuhr"}available(){return!!this.bins?.length}cfg(){return{days:1,...this.settings.waste||{}}}build(t){let e=oi();this.bins=t.furniture.filter(n=>n.f.type==="bin").map(n=>{let s=Md(n.f),r=new Ot(n.f.color||"#9aa5c0"),o={};r.getHSL(o),o.l<.3&&r.setHSL(o.h,Math.min(o.s,.2),.62);let a=new nn(new Ze({map:e,color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:cn}));return a.position.set(n.x,n.top-n.h*.45,n.z),a.scale.setScalar(2.2),a.renderOrder=7,a.visible=!1,this.group.add(a),{a:n,kind:s,glow:a,col:r,base:n.mats.map(l=>({m:l,e:l.emissive.clone(),i:l.emissiveIntensity})),lit:!1}}),this.cal=null,this.calAt=0,this.kinds=new Set}collect(t){let e=this.cfg(),n=wd(Date.now(),e.days),s=Td(t,e.entity);if(this.src=s,!s)return new Set;if(s.type==="sensor")return new Set(Sd(t[s.entity]?.attributes,n));let r=Date.now();if(r-this.calAt>30*6e4&&this.view.hass?.callApi){this.calAt=r;let o=new Date;o.setDate(o.getDate()+e.days),o.setHours(0,0,0,0);let a=new Date(o);a.setDate(a.getDate()+1),this.view.hass.callApi("GET",`calendars/${s.entity}?start=${encodeURIComponent(o.toISOString())}&end=${encodeURIComponent(a.toISOString())}`).then(l=>{this.cal=Ed(l,n),this.update(this.states)}).catch(()=>{this.cal=[]})}return new Set(this.cal||[])}update(t){if(!this.bins)return;this.kinds=this.collect(t);let e=[];this.bins.forEach(s=>{s.lit=!!s.kind&&this.kinds.has(s.kind),s.glow.visible=s.lit,s.base.forEach(r=>{s.lit?(r.m.emissive.copy(s.col),r.m.emissiveIntensity=1):(r.m.emissive.copy(r.e),r.m.emissiveIntensity=r.i)}),s.lit&&e.push(yr[s.kind].label)});let n=this.cfg();this.view.setChip("waste",e.length?`\u{1F5D1} ${n.days===1?"Morgen":`In ${n.days} Tagen`}: ${[...new Set(e)].join(", ")}`:"")}tick(t,e){this.bins?.forEach(n=>{if(!n.lit)return;let s=.75+.25*Math.sin(e*3);n.glow.material.opacity=s,n.glow.scale.setScalar(2+.4*Math.sin(e*3)),n.base.forEach(r=>r.m.emissiveIntensity=.7+.5*s)})}reset(){this.bins?.forEach(t=>{t.lit=!1,t.glow.visible=!1,t.base.forEach(e=>{e.m.emissive.copy(e.e),e.m.emissiveIntensity=e.i})}),this.view.setChip("waste","")}dispose(){this.view.setChip("waste",""),this.bins=null}openSettings(){let t=this.settings.waste={days:1,...this.settings.waste||{}};Vn(this.view,{title:"\u{1F5D1} M\xFCllabfuhr",obj:t,note:`Quelle der Abholtermine: ein Sensor, dessen Attribute Datum \u2192 M\xFCllart enthalten (Waste Collection Schedule), oder ein M\xFCll-Kalender. Leer = automatisch${this.src?` (gefunden: ${this.src.entity})`:""}. Die Tonnen sind M\xF6bel vom Typ <b>bin</b>; Blau = Papier, Gelb = Gelber Sack, Schwarz = Restm\xFCll, Braun = Bio, erkannt am Namen.`,fields:[{k:"entity",l:"Sensor oder Kalender (leer = automatisch)",t:"entity",p:"sensor.naechste_leerung"},{k:"days",l:"Tage vor der Abholung leuchten",t:"number",s:1}]})}};var oa=class extends Re{get id(){return"parked"}available(){return!1}build(t){this.cars=t.furniture.filter(e=>e.f.presence).map(e=>({a:e,entity:e.f.presence,shown:!0}))}update(t){this.cars?.forEach(e=>{let n=t[e.entity]?.state;e.shown=n==null||n!=="off"&&n!=="unavailable",e.a.group.visible=e.shown})}onLongPress(t){let e=this.cars?.find(s=>s.a.f.id===t?.furnId);if(!e||!e.shown||!this.view.hass)return!1;let[n]=e.entity.split(".");return this.view.hass.callService(n,"turn_off",{entity_id:e.entity}),this.view.msg(`${e.a.f.name||"Auto"}: als \u201Eweg\u201C markiert`),!0}reset(){this.cars?.forEach(t=>{t.a.group.visible=!0})}dispose(){this.cars=null}};var p_=["auf","offen","open","opened","opening","on","ge\xF6ffnet"],m_=["zu","geschlossen","closed","closing","off","closed_"];function Rd(i,t={}){let e=String(i??"").trim().toLowerCase();return!e||e==="unknown"||e==="unavailable"?null:(t.openStates||p_).map(n=>n.toLowerCase()).includes(e)?"open":(t.closedStates||m_).map(n=>n.toLowerCase()).includes(e)?"closed":null}function Ad(i,t){let e=(t-i)%(2*Math.PI);return e>Math.PI&&(e-=2*Math.PI),e<=-Math.PI&&(e+=2*Math.PI),e}function Cd(i,t,e=[1,0]){let n=Math.atan2(t[1]-i[1],t[0]-i[0]),s=n+Math.PI,r=Math.atan2(e[1],e[0]);return{A:{closed:n,open:n+Ad(n,r)},B:{closed:s,open:s+Ad(s,r)}}}var aa=class extends Re{get id(){return"gates"}get label(){return"\u{1F6A7} Tor"}get title(){return"Hoftor: Auf / Zu nach dem Zustand aus Frigate"}available(){return!!this.gates?.length}build(){let t=this.view.theme==="day",e=t?5924216:10134976,n=new me({color:e,emissive:e,emissiveIntensity:t?0:.2,transparent:!0,opacity:t?.9:.4,side:oe,depthWrite:!1}),s=new ae({color:e,transparent:!0,opacity:.95}),r=new me({color:e,emissive:e,emissiveIntensity:t?0:.3});this.group.position.y=this.plan.site?.groundY??0,this.gates=(this.plan.site?.gates||[]).filter(o=>o.a&&o.b).map(o=>{let a=o.h||2,l=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]),c=o.single?l:l/2,h=Cd(o.a,o.b,o.inward||[1,0]),u=(p,x,g)=>{let m=new ce;m.position.set(p[0],0,p[1]);let M=new Vt(new Se(c-.12,a-.2,.05),n);if(M.position.set(c/2+.03,.1+(a-.2)/2,0),M.add(new he(new Me(M.geometry),s)),g)for(let _=.2;_<c-.2;_+=.22){let v=new Vt(new Se(.025,.55,.025),r);v.position.set(_-(c-.12)/2,(a-.2)/2-.3,0),M.add(v)}return M.userData={entity:o.entity,gate:!0},m.add(M),this.pickList.push(M),this.group.add(m),m};this.pickList=this.pickList||[];let f=u(o.a,h.A,!!o.barsA),d=o.single?null:u(o.b,h.B,!0);for(let p of[o.a,o.b]){let x=new Vt(new Se(.2,a+.1,.2),r);x.position.set(p[0],(a+.1)/2,p[1]),this.group.add(x)}return{cfg:o,A:f,B:d,ang:h,cur:0,target:0,known:!1,last:null}}),this.view.pickables.push(...this.pickList||[])}update(t){this.gates?.forEach(n=>{let s=n.cfg.entity?t[n.cfg.entity]:null,r=Rd(s?.state,n.cfg);if(r){let o=r==="open"?1:0;n.known&&r!==n.last&&this.view.msg(`${n.cfg.name||"Tor"} ist jetzt ${r==="open"?"auf":"zu"}`),n.known||(n.cur=o),n.target=o,n.last=r,n.known=!0,n.since=s.last_changed?xr(Date.parse(s.last_changed)):null}});let e=this.gates?.filter(n=>n.last==="open")||[];this.view.setChip("gates",e.length?`\u{1F6A7} ${e.map(n=>n.cfg.name||"Tor").join(", ")}: auf${e[0].since?` seit ${e[0].since}`:""}`:""),this.pose()}pose(){this.gates?.forEach(t=>{let e=(n,s)=>{n&&(n.rotation.y=-(s.closed+(s.open-s.closed)*t.cur))};e(t.A,t.ang.A),e(t.B,t.ang.B)})}tick(t){let e=!1;this.gates?.forEach(n=>{Math.abs(n.target-n.cur)>.002&&(n.cur+=Math.sign(n.target-n.cur)*Math.min(Math.abs(n.target-n.cur),t*.9),e=!0)}),e&&this.pose()}reset(){this.view.setChip("gates","")}dispose(){this.view.setChip("gates",""),this.gates=null,this.pickList=null}};function Pd(i){return[new Yo(i),new na(i),new ta(i),new Fs(i),new sa(i),new ra(i),new oa(i),new aa(i),new Ko(i)]}function g_(i,t=512){return new Promise((e,n)=>{let s=new Image,r=URL.createObjectURL(i);s.onload=()=>{let o=Math.min(1,t/Math.max(s.naturalWidth,s.naturalHeight)),a=document.createElement("canvas");a.width=Math.max(1,Math.round(s.naturalWidth*o)),a.height=Math.max(1,Math.round(s.naturalHeight*o)),a.getContext("2d").drawImage(s,0,0,a.width,a.height),URL.revokeObjectURL(r),e(i.type==="image/png"||i.type==="image/svg+xml"?a.toDataURL("image/png"):a.toDataURL("image/jpeg",.85))},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Bild nicht lesbar"))},s.src=r})}function Id(i,t){i.closeOverlay();let e=t.screen||={bg:"dark",rules:[]};e.rules||=[];let n=i.shadowRoot.querySelector(".wrap"),s=document.createElement("div");s.className="overlay",s.style.cssText="left:50%;top:50%;transform:translate(-50%,-50%);width:min(680px,94%);max-height:84%;overflow:auto",i._overlay=s,n.append(s);let r=()=>{i.rebuild3D(),i.draw2D()},o=!1,a=()=>{o||(i.pushUndo(),o=!0)},l=()=>{let c=i.getStates()||{},h=Object.keys(c).sort(),u=e.entity||t.entity||"",f=Zo(e.rules,c,u);s.innerHTML=`
      <h4 style="margin:0 0 8px">\u{1F5A5} Bildschirm ${Yt(t.name||t.type)}</h4>
      <datalist id="scr-ents">${h.map(d=>`<option value="${Yt(d)}">`).join("")}</datalist>
      <div class="row"><div><label>Bildschirm-Entit\xE4t (z. B. media_player)</label><input id="scr-entity" list="scr-ents" value="${Yt(e.entity||"")}" placeholder="${Yt(t.entity||"media_player.tv")}"></div>
      <div><label>Hintergrund</label><select id="scr-bg"><option value="dark" ${e.bg!=="white"?"selected":""}>dunkel</option><option value="white" ${e.bg==="white"?"selected":""}>wei\xDF</option></select></div></div>
      <div style="margin:10px 0 4px;opacity:.8">Bild-Regeln \u2013 die erste passende gewinnt. Ohne Regel zeigt der Bildschirm Cover und Farbe der laufenden App.</div>
      <div id="scr-rules">${e.rules.map((d,p)=>`
        <div class="rule" data-i="${p}" style="display:grid;grid-template-columns:1.2fr 1fr 1fr 1.4fr auto auto auto;gap:4px;margin:4px 0;align-items:center">
          <input data-f="entity" list="scr-ents" placeholder="Entit\xE4t (leer = Bildschirm)" value="${Yt(d.entity||"")}">
          <input data-f="attr" placeholder="Attribut (leer = Zustand)" value="${Yt(d.attr||"")}">
          <input data-f="match" placeholder="Wert (enth\xE4lt, * = alles)" value="${Yt(d.match||"")}">
          <input data-f="image" placeholder="Bild-URL oder camera.xyz" value="${Yt(String(d.image||"").startsWith("data:")?"":d.image||"")}">
          <button data-act="upload" title="Bild hochladen">${String(d.image||"").startsWith("data:")?"\u{1F5BC} \u2713":"\u2B06"}</button>
          <button data-act="del" title="Regel l\xF6schen">\u{1F5D1}</button>
          <span title="trifft gerade zu" style="color:${f===d?"#19e6ff":"#35405f"}">\u25CF</span>
        </div>`).join("")}</div>
      <div style="display:flex;gap:6px;margin-top:8px"><button id="scr-add">+ Regel</button><span style="flex:1"></span><button id="scr-close" class="on">Fertig</button></div>`,s.querySelector("#scr-entity").onchange=d=>{a(),e.entity=d.target.value||null,r(),l()},s.querySelector("#scr-bg").onchange=d=>{a(),e.bg=d.target.value,r()},s.querySelector("#scr-add").onclick=()=>{a(),e.rules.push({match:"",image:""}),l()},s.querySelector("#scr-close").onclick=()=>i.closeOverlay(),s.querySelectorAll(".rule").forEach(d=>{let p=e.rules[+d.dataset.i];d.querySelectorAll("input[data-f]").forEach(x=>{x.onchange=()=>{a();let g=x.dataset.f,m=x.value.trim();g==="image"?m?p.image=m:String(p.image||"").startsWith("data:")||(p.image=""):p[g]=m,r(),l()}}),d.querySelector('[data-act="del"]').onclick=()=>{a(),e.rules.splice(+d.dataset.i,1),r(),l()},d.querySelector('[data-act="upload"]').onclick=()=>{let x=document.createElement("input");x.type="file",x.accept="image/*",x.onchange=async()=>{try{a(),p.image=await g_(x.files[0]),r(),l()}catch(g){i.msg("Bild nicht lesbar: "+g.message)}},x.click()}})};l()}function _r(i,t={},e=0){let n=nd(i),s=id(e),r=s[t?.high||"south"]||s.south,o=[-Math.sin(n.ang),Math.cos(n.ang)],a=o[0]*r[0]+o[1]*r[1]>=0?o:[-o[0],-o[1]],l=Math.atan2(-a[0],-a[1]),c=Math.cos(l)<0;return{cx:n.cx,cz:n.cz,L:n.len,W:n.wid,theta:l,dHigh:a,flip:c,tToU:h=>c?n.len/2-h:h-n.len/2}}function ai(i,t,e){return[i.cx+t*Math.cos(i.theta)+e*Math.sin(i.theta),i.cz-t*Math.sin(i.theta)+e*Math.cos(i.theta)]}function Ld(i,t){if(!t)return null;let e=Math.max(0,Math.round(Number(t.carportStalls)||0)),n=Number(t.stallWidth)||2.9,s=t.bike&&t.bike!=="none"?t.bike:null,r=t.garage||(e||s?"west":"none");if(!e&&r==="none"&&!s)return null;let o=Math.min(i,e*n),a=s?Math.min(Math.max(0,i-o),Number(t.bikeWidth)||3):0,l=Math.max(0,i-o-a),c=r==="none"?0:t.garageLen!=null&&t.garageLen!==""?Math.min(Number(t.garageLen),l):l,h=Math.max(0,l-c),u={stalls:e,stallWidth:e?o/e:n},f={door:Number(t.bikeDoor)||1.2},d=[],p=r!=="east",x=s?s==="west":!p;s&&x&&d.push(["bike",a,f]),p?(d.push(["garage",c]),h>.05&&d.push(["open",h]),d.push(["carport",o,u])):(d.push(["carport",o,u]),h>.05&&d.push(["open",h]),d.push(["garage",c])),s&&!x&&d.push(["bike",a,f]);let g=[],m=0;for(let[M,_,v]of d)_>.05&&g.push({type:M,t0:m,t1:m+_,...v||{}}),m+=_;return g}function Dd({L:i,W:t,pitchDeg:e,orientation:n,portrait:s,fill:r=!0,rows:o,cols:a,margin:l=.25,gap:c=.02,align:h="center",uCenter:u=0}){let f=t/Math.cos(e*Math.PI/180),d=m=>{let M=m?1.134:1.722,_=m?1.722:1.134,v=r?Math.max(0,Math.floor((i-2*l+c)/(M+c))):Math.max(0,Math.round(a??1)),O=r?Math.max(0,Math.floor((f-2*l+c)/(_+c))):Math.max(0,Math.round(o??1)),A=[],P=h==="low"?l+_/2:h==="high"?f-l-_/2-(O-1)*(_+c):f/2-(O-1)/2*(_+c);for(let U=0;U<v;U++)for(let E=0;E<O;E++)A.push({u:u+(U-(v-1)/2)*(M+c),s:P+E*(_+c),mw:M,mh:_});return{cols:v,rows:O,modules:A,slope:f,portrait:m}},p=n&&n!=="auto"?n:s!=null&&n!=="auto"?s?"portrait":"landscape":"auto";if(p==="portrait")return d(!0);if(p==="landscape")return d(!1);let x=d(!1),g=d(!0);return g.modules.length>x.modules.length?g:x}var zs={garage:"Garage",carport:"Carport",bike:"Fahrradgarage",open:"Unterstand"},Ud={low:"L\xE4ngsseite (niedrig)",high:"L\xE4ngsseite (hoch)",west:"Westende",east:"Ostende"};function la({side:i="low",pt:t,f:e,W:n,hLow:s,bike:r=!1,width:o}){let a=Math.min(r?2:2.2,s-.2),l=Number(o)||(r?1.2:2.5),c=.03;if(i==="west"||i==="east"){let f=(i==="west"?-1:1)*(e.flip?-1:1);return{side:i,sx:.05,sy:a,sz:Math.min(l,n-.3),x:e.tToU(i==="west"?t.t0:t.t1)+f*c,y:a/2,z:0}}let h=Math.abs(e.tToU(t.t1)-e.tToU(t.t0)),u=i==="high";return{side:u?"high":"low",sx:Math.min(l,h-.2),sy:a,sz:.05,x:(e.tToU(t.t0)+e.tToU(t.t1))/2,y:a/2,z:u?-n/2-c:n/2+c}}function ca(i,t="east"){let e=Math.max(1,Math.round(i.stalls||1)),n=(i.t1-i.t0)/e;return Array.from({length:e},(s,r)=>({n:r+1,t:t==="west"?i.t0+(r+.5)*n:i.t1-(r+.5)*n}))}function x_(i,t){let e=h=>h.type==="carport"?Math.max(0,Math.round(Number(h.stalls)||0))*(Number(h.stallWidth)||2.9):h.len!=null&&h.len!==""&&Number(h.len)>0?Number(h.len):null,n=t.map(e),s=n.reduce((h,u)=>h+(u??0),0),r=n.filter(h=>h==null).length,o=r?Math.max(0,i-s)/r:0,a=!r&&s>i?i/s:1,l=[],c=0;return t.forEach((h,u)=>{let f=(n[u]??o)*a;if(f>.05){let d=h.type==="carport"?Math.max(1,Math.round(Number(h.stalls)||1)):void 0;l.push({...h,type:h.type||"garage",t0:c,t1:c+f,...d?{stalls:d,stallWidth:f/d}:{},index:u})}c+=f}),l}function ha(i,t){return t?.parts?.length?x_(i,t.parts):Ld(i,t?.layout)}function Nd(i,t){return(Ld(i,t)||[]).map(e=>e.type==="carport"?{type:"carport",stalls:e.stalls,stallWidth:+e.stallWidth.toFixed(2)}:e.type==="garage"||e.type==="open"?{type:e.type,len:null}:{type:e.type,len:+(e.t1-e.t0).toFixed(2),door:e.door})}var vr={wallExterior:.24,wallInterior:.12,slab:.18};function ua(i){return{id:yn(),name:`Etage ${i}`,height:2.6,rooms:[],walls:[],openings:[],devices:[],furniture:[]}}function Gc(i,t,e){let n=i.floors.map((o,a)=>({e:_n(i,a),h:o.height||2.6})).filter(o=>o.e>-.01).sort((o,a)=>o.e-a.e);if(e=Math.max(1,Math.round(e)||1),t.levels=e,!n.length)return t.storeys=Array.from({length:e},(o,a)=>+(a*2.8).toFixed(2)),t.height=+(e*2.8).toFixed(2),t;let s=n[n.length-1];t.storeys=Array.from({length:e},(o,a)=>+(n[a]?.e??s.e+(a-n.length+1)*s.h).toFixed(2));let r=n[e-1]||{e:s.e+(e-n.length)*(s.h+.18),h:s.h};return t.height=+(r.e+r.h).toFixed(2),t}function Fd(i,t=1){return{id:yn(),name:`Geb\xE4ude ${t}`,points:i,height:3,visible:!0,roof:{type:"gable",pitch:25,overhang:.3}}}function Wc(){return{version:2,settings:{},floors:[ua(1)]}}function Yi(i){return i.version=2,i.settings={...vr,autoDevices:!0,...i.settings||{}},i.floors=i.floors||[],i.site&&(i.site.buildings=i.site.buildings||[],i.site.buildings.forEach(t=>{t.height=t.height||3,t.roof={type:"flat",pitch:25,overhang:.3,...t.roof||{}},t.visible==null&&(t.visible=!0)})),i.floors.forEach(t=>{t.height=t.height||2.6;for(let e of["rooms","walls","openings","devices","furniture"])t[e]=t[e]||[];t.openings.forEach(e=>{let n=e.type==="door";e.w=e.w||(n?.9:1.2),e.h=e.h||(n?2.1:1.1),e.sill==null&&(e.sill=n?0:.9)})}),(i.site?.buildings||[]).forEach(t=>{t.levels>1&&!t.storeys&&Gc(i,t,t.levels)}),i}function _n(i,t){let e=i.floors[t];if(!e)return 0;if(e.elevation!=null)return e.elevation;let n=0;for(let s=0;s<t;s++)n+=(i.floors[s].height||2.6)+(i.settings?.slab??vr.slab);return n}var Od=new WeakMap;function br(i){let t=Od.get(i);if(t)return t;let e=i.axis!=="z",n=!!i.flip,s=n?i.eaveB:i.eaveA,r=n?i.eaveA:i.eaveB,o=n?i.pitchB:i.pitchA,a=n?i.pitchA:i.pitchB,l=e?i.z0:i.x0,c=e?i.z1:i.x1,h=e?i.x0:i.z0,u=e?i.x1:i.z1,f=Math.tan(Ee(o)),d=Math.tan(Ee(a)),p=(r-s+f*l+d*c)/(f+d),x=s+f*(p-l);return t={horiz:e,c0:l,c1:c,s0:h,s1:u,eaveA:s,eaveB:r,pa:o,pb:a,ta:f,tb:d,cr:p,yr:x,base:i.base??Math.min(s,r),overhang:i.overhang??.5},Od.set(i,t),t}function Mr(i){return i.settings?.roof?.sections||[]}function Bd(i,t,e,n=.06){let s=1/0,r=!1;for(let o of Mr(i)){let a=br(o),l=a.horiz?e:t,c=a.horiz?t:e;if(c<a.s0-n||c>a.s1+n||l<a.c0-n||l>a.c1+n)continue;let h=Math.min(a.eaveA+a.ta*(l-a.c0),a.eaveB+a.tb*(a.c1-l));(!r||h>s)&&(s=h),r=!0}return r?s:1/0}var kd=.03,y_=i=>typeof i=="number"?i:1/0;function da(i,t=vr){let e=[],n=l=>{for(let h of e)if(Math.hypot(h[0]-l[0],h[1]-l[1])<kd)return h;let c=[l[0],l[1]];return c.i=e.length,e.push(c),c},s=[];i.rooms.forEach(l=>{let c=l.points.length;l.points.forEach((h,u)=>{s.push({a:n(h),b:n(l.points[(u+1)%c]),t:l.wallT?.[u]??null,h:y_(l.wallH?.[u]),room:l.id,free:!1})})}),i.walls.forEach(l=>s.push({a:n(l.a),b:n(l.b),t:l.t??null,h:l.h!=null?l.h:1/0,room:null,free:!0,id:l.id}));let r=new Map;s.forEach(l=>{if(l.a===l.b)return;let c=[{t:0,n:l.a},{t:1,n:l.b}];for(let h of e){if(h===l.a||h===l.b)continue;let u=ks(h,l.a,l.b);u.d<kd&&u.t>5e-4&&u.t<.9995&&c.push({t:u.t,n:h})}c.sort((h,u)=>h.t-u.t);for(let h=0;h<c.length-1;h++){let u=c[h].n,f=c[h+1].n;if(u===f)continue;let d=u.i<f.i?`${u.i}|${f.i}`:`${f.i}|${u.i}`,p=r.get(d);p||r.set(d,p={a:u,b:f,ts:[],hs:[],rooms:new Set,free:!1,ids:[]}),l.t!=null&&p.ts.push(l.t),p.hs.push(l.h),l.room&&p.rooms.add(l.room),l.free&&(p.free=!0,l.id&&p.ids.push(l.id))}});let o=[];r.forEach(l=>{let c=Math.max(...l.hs);if(c<=0)return;let h=l.ts.length?Math.max(...l.ts):l.free||l.rooms.size>=2?t.wallInterior:t.wallExterior;o.push({a:l.a,b:l.b,t:h,h:Number.isFinite(c)?c:null,extA:0,extB:0,rooms:[...l.rooms],free:l.free,ids:l.ids})});let a=new Map;return o.forEach(l=>{for(let[c,h]of[[l.a,l.b],[l.b,l.a]])a.has(c)||a.set(c,[]),a.get(c).push({s:l,dir:__([h[0]-c[0],h[1]-c[1]])})}),a.forEach((l,c)=>{if(l.length===1||l.length>2)return;let[h,u]=l,f=h.dir[0]*u.dir[1]-h.dir[1]*u.dir[0],d=h.dir[0]*u.dir[0]+h.dir[1]*u.dir[1];if(!(Math.abs(f)<.05&&d<0))for(let p of l)p.s.a===c?p.s.extA=p.s.t/2:p.s.extB=p.s.t/2}),o.forEach(l=>{l.len=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]),l.rot=-Math.atan2(l.b[1]-l.a[1],l.b[0]-l.a[0])}),o}var __=i=>{let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]};function zd(i,t){let e=null;for(let n of t){let s=ks([i.x,i.z],n.a,n.b);s.d>n.t/2+.2||i.rot!=null&&Math.abs(Math.sin(i.rot-n.rot))>.15||(!e||s.d<e.d)&&(e={s:n,d:s.d,u:s.t*n.len,q:s.q})}return e}var Xc=i=>i.type==="stairs"||i.type==="stairs_u";function $c(i){if(i.type!=="stairs_u"||i.landings!==2)return Qo(i);let t=i.w||1.9,e=i.d||3.2;return[[-t/2,-e/2],[t/2,-e/2],[t/2,0],[-t/2,0]].map(([n,s])=>zc(i,n,s))}function Hd(i,t){let e=[],n=_n(i,t);for(let s=0;s<t;s++){let r=_n(i,s);i.floors[s].furniture.filter(Xc).forEach(o=>{if(r+(o.h||2.7)<n-.35||r>=n)return;let a=$c(o);i.floors[t].rooms.some(l=>a.every(c=>rn(c,l.points)))&&e.push(a)})}return e}var Kc=sf(Vd(),1);var Ki={neon:{bg:460815,wall:1697535,wallOp:.2,edgeOp:.85,floorK:.25,floorEm:.14,door:16722902,win:7317759,roof:16751164,text:"#dfe8ff",glow:"#19e6ff"},day:{bg:14673650,wall:15922424,wallOp:.92,edgeOp:.5,floorK:.85,floorEm:0,door:10119999,win:9356799,roof:11883580,text:"#1d2740",glow:"#ffffff"}},v_={kitchen:"#ffb347",kitchen_tall:"#ffb347",kitchen_wall:"#ffb347",island:"#ffb347",sink:"#9ad7ff",stove:"#ff6b6b",dishwasher:"#c0c8d8",fridge:"#e8f1ff",washer:"#e8f1ff",dryer:"#e8f1ff",bed:"#b388ff",dresser:"#c08a5a",wardrobe:"#c08a5a",tall_cabinet:"#c08a5a",sideboard:"#c08a5a",shelf:"#c08a5a",desk:"#4aa3ff",office_chair:"#4aa3ff",chair:"#e0b080",stool:"#e0b080",table:"#e0b080",bench:"#e0b080",sofa_l:"#7bd88f",sofa:"#7bd88f",tv_board:"#7bd88f",rug:"#8f6bb3",shower:"#7fdbff",wc:"#e8f1ff",washbasin:"#e8f1ff",bathtub:"#e8f1ff",robot_vacuum:"#00ff9d",led_strip:"#fff29a",inverter:"#ffd166",meter:"#ffd166",grid_point:"#ffd166",stairs:"#c9d1e6",stairs_u:"#c9d1e6",tv:"#5a6bff",monitor:"#5a6bff",speaker:"#ff2bd6",soundbar:"#ff2bd6",car:"#9aa5c0",battery:"#7bd88f",wallbox:"#19e6ff"},b_={bin:[.58,.72,1.07],stairs:[1,3.2,2.75],stairs_u:[1.9,3.2,2.75],bed:[1.8,2,.5],table:[1.6,.9,.75],chair:[.45,.45,.9],stool:[.35,.35,.45],rug:[2,3,.02],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},M_={kitchen_wall:1.4,tv:.8,monitor:.74,soundbar:.45};function Hs(i=256){let t=document.createElement("canvas");t.width=i,t.height=64;let e=new We(t),n=new nn(new Ze({map:e,transparent:!0,depthTest:!1}));return n.scale.set(i/256*1.2,.3,1),n.renderOrder=10,n.visible=!1,n.userData={canvas:t,tex:e,text:""},n}function Ji(i,t,e="#19e6ff"){let n=i.userData;if(n.text===t)return;n.text=t;let s=n.canvas.getContext("2d"),r=n.canvas.width;s.clearRect(0,0,r,64),s.fillStyle="rgba(7,8,15,.75)",s.beginPath(),s.roundRect(4,8,r-8,48,12),s.fill(),s.strokeStyle=e,s.lineWidth=2,s.stroke(),s.fillStyle="#fff",s.font="bold 30px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(t,r/2,33,r-24),n.tex.needsUpdate=!0}function Te(i,t,e,n=0,s=0,r=0){let o=new Se(i,t,e);return o.translate(s,n+t/2,r),o}var w_={sedan:[[0,0],[0,.42],[.08,.5],[.3,.55],[.4,1],[.64,1],[.78,.58],[1,.5],[1,0]],wagon:[[0,0],[0,.78],[.03,.97],[.08,1],[.58,1],[.8,.58],[1,.5],[1,0]],hatch:[[0,0],[0,.72],[.06,.96],[.12,1],[.54,1],[.76,.64],[1,.54],[1,0]],van:[[0,0],[0,.95],[.03,1],[.72,1],[.86,.66],[1,.58],[1,0]],roadster:[[0,0],[0,.55],[.12,.62],[.5,.62],[.58,1],[.7,1],[.8,.64],[1,.52],[1,0]]};function S_(i,t,e){let n=b_[i.type]||[.6,.6,.8],s=i.w||n[0],r=i.d||n[1],o=i.h||n[2],a=new Ot(i.color||v_[i.type]||"#9aa5c0"),l=e.theme==="day"?1:.5,c=new me({color:a.clone().multiplyScalar(i.color?1:l),emissive:a,emissiveIntensity:e.theme==="day"?0:i.color?.3:.18,transparent:!0,opacity:e.theme==="day"?1:.88}),h=new ae({color:i.color?a.clone().lerp(new Ot(16777215),.4):a,transparent:!0,opacity:.9}),u=i.mountY??M_[i.type]??0,f=[],d=[c],p=new ce;p.position.set(i.x,t+(i.baseY||0),i.z),p.rotation.y=-Ee(i.rot||0);let x=(M,_=c)=>{let v=new Vt(M,_);return v.add(new he(new Me(M),h)),p.add(v),v.userData.entity=i.entity||null,v.userData.furnId=i.id,e.pickables.push(v),f.push(v),v};switch(i.type){case"bin":{x(Te(s,o-.06,r,.04)),x(Te(s+.04,.06,r+.04,o-.06));break}case"stairs_u":{if(i.landings===2){let U=Math.max(12,2*Math.round(o/.18/2)),E=o/U,w=Math.min(1.2,s/3,r/3),D=i.flip?-1:1,G=Math.max(2,Math.round(U*.31)),W=Math.max(1,U-2-2*G),J=s-w,it=r-2*w;for(let K=0;K<G;K++)x(Te(J/G,(K+1)*E,w,0,D*(-s/2+(K+.5)*(J/G)),r/2-w/2));x(Te(w,(G+1)*E,w,0,D*(s/2-w/2),r/2-w/2));for(let K=0;K<W;K++)x(Te(w,(G+2+K)*E,it/W,0,D*(s/2-w/2),r/2-w-(K+.5)*(it/W)));x(Te(w,(G+W+2)*E,w,0,D*(s/2-w/2),-r/2+w/2));for(let K=0;K<G;K++)x(Te(J/G,(G+W+3+K)*E,w,0,D*(s/2-w-(K+.5)*(J/G)),-r/2+w/2));break}let M=Math.max(8,2*Math.round(o/.18/2)),_=M/2,v=Math.min(1.2,r*.25),O=(r-v)/_,A=s/2-.02,P=i.flip?-1:1;for(let U=0;U<_;U++)x(Te(A,(U+1)*o/M,O,0,P*s/4,r/2-(U+.5)*O));x(Te(s,o/2,v,0,0,-r/2+v/2));for(let U=0;U<_;U++)x(Te(A,o/2+(U+1)*o/M,O,0,-P*s/4,-r/2+v+(U+.5)*O));break}case"stairs":{let M=Math.max(4,Math.round(o/.18)),_=r/M;for(let v=0;v<M;v++)x(Te(s,(v+1)*o/M,_,0,0,r/2-(v+.5)*_));break}case"table":case"desk":case"bench":{x(Te(s,.05,r,o-.05));let M=s/2-.05,_=r/2-.05;for(let v of[-1,1])for(let O of[-1,1])x(Te(.05,o-.05,.05,0,v*M,O*_));break}case"chair":case"office_chair":case"stool":{let M=Math.min(.46,o*.5);x(Te(s,.06,r,M)),x(Te(.06,M,.06)),i.type!=="stool"&&x(Te(s,o-M,.05,M,0,-r/2+.025));break}case"sofa_l":case"sofa":{x(Te(s,Math.min(.45,o),r)),x(Te(s,o,.22,0,0,-r/2+.11));break}case"robot_vacuum":{let M=new cr(Math.max(s,r)/2,Math.max(s,r)/2,o,24);M.translate(0,u+o/2,0),x(M);break}case"tv":case"monitor":{x(Te(s,o,r,u));let M=512,_=Math.max(64,Math.round(512*o/s)),v=document.createElement("canvas");v.width=M,v.height=_;let O=new We(v);O.colorSpace=qe;let A=Math.max(.1,s-.06),P=Math.max(.1,o-.06),U=new Vt(new ii(A,P),new Ge({map:O,toneMapped:!1}));U.position.set(0,u+o/2,r/2+.003),U.userData.entity=i.entity||null,p.add(U),e.pickables.push(U),e.anchors.screens.push({f:i,canvas:v,tex:O,mesh:U,w:A,h:P,floor:e.cur.i});break}case"car":{let M=w_[i.body];if(M){let A=D=>.2+D*(o-.2),P=new Ke(M.map(([D,G])=>new ht((D-.5)*r,A(G)))),U=new gn(P,{depth:s,bevelEnabled:!1});U.applyMatrix4(new ne().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),U.translate(-s/2,0,0),x(U);let E=new me({color:1119256,emissive:2106412,emissiveIntensity:.5}),w=Math.min(.34,o*.27);for(let D of[-1,1])for(let G of[-1,1]){let W=new cr(w,w,.22,16);W.rotateZ(Math.PI/2);let J=new Vt(W,E);J.position.set(D*(s/2-.1),w,G*r*.31),p.add(J)}}else x(Te(s,o*.42,r,.18)),x(Te(s*.86,o*.34,r*.5,.18+o*.42,0,-r*.04));let _=new Ge({color:1697535,transparent:!0,opacity:.9}),v=new Vt(new Se(s+.08,.06,r+.08),_);if(v.position.set(0,.1,0),v.visible=!!i.car||!M,p.add(v),e.anchors.cars.push({f:i,band:_,group:p,floor:e.cur.i,w:s,d:r,h:o}),i.name&&!i.car){let O=Hs();Ji(O,i.name),O.visible=!0,O.position.set(0,o+.45,0),p.add(O)}break}default:x(Te(s,o,r,u))}let g={mats:d,group:p},m=u+o+(i.baseY||0);if(e.anchors.furniture.push({f:i,floor:e.cur.i,x:i.x,z:i.z,y:e.cur.elev+u+(i.baseY||0),top:e.cur.elev+m,w:s,d:r,h:o,group:p,mats:d}),i.entity||i.stateEntity){let M=new nn(new Ze({map:e.glowTex(),color:a,transparent:!0,depthWrite:!1,blending:cn}));M.scale.setScalar(Math.max(1,s*2)),M.position.set(0,m/2,0),M.visible=!1,p.add(M),e.dyn.push({kind:"furniture",entity:i.entity||i.stateEntity,mats:d,glow:M,baseScale:M.scale.x})}if(i.power){let M=Hs();M.position.set(0,m+.35,0),p.add(M),e.dyn.push({kind:"value",entity:i.power,sprite:M,always:i.marker==="always"})}if(i.name&&i.showName){let M=Hs();Ji(M,i.name,"#19e6ff"),M.visible=!0,M.position.set(0,m+.3,0),p.add(M)}return g.group}function E_(i,t,e,n,s,r,o){let a=i.len+i.extA+i.extB,l=(i.b[0]-i.a[0])/i.len,c=(i.b[1]-i.a[1])/i.len,h=i.h!=null?Math.min(i.h,t.height):t.height,u=Mr(n).length>0,f=_=>{if(!u)return h;let v=_-i.extA,O=Bd(n,i.a[0]+l*v,i.a[1]+c*v);return O===1/0?h:Math.max(.05,Math.min(h,O-e-.02))},d=new Ke;d.moveTo(0,0),d.lineTo(a,0);let p=u?Math.max(1,Math.ceil(a/.25)):1;for(let _=p;_>=0;_--){let v=a*_/p;d.lineTo(v,f(v))}d.closePath();let x=o.map(_=>({u0:_.u+i.extA-_.w/2,u1:_.u+i.extA+_.w/2,y0:Math.max(_.sill,.003),y1:_.sill+_.h})).sort((_,v)=>_.u0-v.u0),g=-1;x.forEach(_=>{let v=Math.max(_.u0,.01),O=Math.min(_.u1,a-.01),A=Math.min(_.y1,Math.min(f(v),f(O))-.01);if(O-v<.05||A-_.y0<.05||v<g+.01)return;g=O;let P=new si;P.moveTo(v,_.y0),P.lineTo(O,_.y0),P.lineTo(O,A),P.lineTo(v,A),P.closePath(),d.holes.push(P)});let m=new gn(d,{depth:i.t,bevelEnabled:!1,curveSegments:1});m.translate(0,0,-i.t/2);let M=new Vt(m,r.wall);return M.position.set(i.a[0]-l*i.extA,e,i.a[1]-c*i.extA),M.rotation.y=i.rot,M.add(new he(new Me(m,25),r.edge)),M.renderOrder=1,M}function T_(i,t,e,n,s){let r=n.th,o=i.type==="door",a=new ce,l=t?(t.s.b[0]-t.s.a[0])/t.s.len:Math.cos(-i.rot),c=t?(t.s.b[1]-t.s.a[1])/t.s.len:Math.sin(-i.rot),h=t?t.s.a[0]+l*t.u:i.x,u=t?t.s.a[1]+c*t.u:i.z;a.position.set(h,e+i.sill,u),a.rotation.y=t?t.s.rot:i.rot;let f=t?t.s.t:.15,d=i.w,p=Math.min(i.h,3),x=o?i.style==="front"?16722902:r.door:r.win,g=new ae({color:x}),m=new he(new Me(new Se(d,p,f+.02)),g);m.position.y=p/2,a.add(m);let M={kind:"opening",entity:i.entity||null,type:i.type,open:0};if(o&&i.style==="passage")return n.dyn.push(M),a;let _=new ce,v=i.hinge==="right"?d/2:-d/2;_.position.set(v,0,0);let O=(i.hinge==="right"?-1:1)*(i.swing==="out"?-1:1),A=new me({color:x,emissive:x,emissiveIntensity:o?.5:.7,transparent:!0,opacity:o?.75:.35,depthWrite:!1,side:oe}),P=o||i.leaves!==2?d:d/2,U=new Vt(new Se(P-.04,p-.04,o?.045:.02),A);if(U.position.set(-v>0?P/2:-P/2,p/2,0),_.add(U),!o&&i.leaves===2){let E=new Vt(U.geometry,A);E.position.set(-U.position.x,p/2,0),a.add(E)}return a.add(_),M.pivot=_,M.mat=A,M.sign=O,M.maxAngle=o?Ee(75):Ee(28),n.dyn.push(M),a}function Zi(i,t,e,n){return i.horiz?[n,e,t]:[t,e,n]}function Gd(i,t,e,n=.5){let s=br(t),r=t.overhang??s.overhang,o=s.s0-r,a=s.s1+r,l=s.c0-r,c=s.c1+r,h=s.eaveA-s.ta*r,u=s.eaveB-s.tb*r,f=[Zi(s,l,h,o),Zi(s,l,h,a),Zi(s,s.cr,s.yr,a),Zi(s,s.cr,s.yr,o),Zi(s,c,u,o),Zi(s,c,u,a)],d=new Jt;d.setAttribute("position",new jt(f.flat(),3)),d.setIndex([0,1,2,0,2,3,3,2,5,3,5,4]),d.computeVertexNormals();let p=new Vt(d,e.surf);p.add(new he(new Me(d,5),e.line)),p.renderOrder=2,i.add(p);for(let[x,g]of[[s.s0,1],[s.s1,-1]]){let m=new Ke;m.moveTo(s.c0,s.base),m.lineTo(s.c1,s.base),m.lineTo(s.c1,Math.max(s.eaveB,s.base)),m.lineTo(s.cr,s.yr),m.lineTo(s.c0,Math.max(s.eaveA,s.base)),m.closePath();let M=new gn(m,{depth:n,bevelEnabled:!1}),_=new ne;s.horiz&&_.set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1),M.applyMatrix4(_);let v=g>0?x:x-n;s.horiz?M.translate(v,0,0):M.translate(0,0,v);let O=new Vt(M,e.gable);O.add(new he(new Me(M,25),e.edge)),i.add(O)}}function A_(i,t){let e=i.settings?.roof,n=new ce;if(!e?.sections?.length)return n;let s=t.th,r=new me({color:s.roof,emissive:s.roof,emissiveIntensity:t.theme==="day"?0:.25,transparent:!0,opacity:t.theme==="day"?.95:.3,side:oe,depthWrite:!1}),o=new ae({color:s.roof,transparent:!0,opacity:.9}),a=new me({color:s.wall,emissive:s.wall,emissiveIntensity:.2,transparent:!0,opacity:s.wallOp+.05,side:oe,depthWrite:!1});e.sections.forEach(h=>Gd(n,h,{surf:r,line:o,gable:a,edge:t.mats.edge}));let l=h=>{let[u,f]=String(h).split(":"),d=e.sections.find(p=>p.id===u);return d?{g:br(d),side:f==="b"?"b":"a"}:null},c=(h,u,f,d,p,x)=>{let g=l(h);if(!g)return null;let{g:m,side:M}=g,_=Ee(M==="a"?m.pa:m.pb),v=M==="a"?m.c0+f*Math.cos(_):m.c1-f*Math.cos(_),O=(M==="a"?m.eaveA:m.eaveB)+f*Math.sin(_);v+=(M==="a"?-Math.sin(_):Math.sin(_))*d,O+=Math.cos(_)*d;let A=Zi(m,v,O,m.s0+u),P=m.horiz?new Se(p,.04,x):new Se(x,.04,p),U=new Vt(P,null);return U.position.set(...A),m.horiz?U.rotation.x=M==="a"?-_:_:U.rotation.z=M==="a"?_:-_,U};return(e.solar||[]).forEach(h=>{let u=h.moduleW||(h.portrait?1.134:1.722),f=h.moduleH||(h.portrait?1.722:1.134),d=h.cols||1,p=h.rows||1,x=new me({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),g=new ae({color:5939455});for(let m=0;m<d;m++)for(let M=0;M<p;M++){let _=h.u+(m-(d-1)/2)*(u+.02),v=h.v+(M-(p-1)/2)*(f+.02),O=c(h.face,_,v,.05,u,f);O&&(O.material=x,O.add(new he(new Me(O.geometry),g)),n.add(O),t.anchors.pv.push({mesh:O,mat:x,entity:h.entity||null,wp:h.wp||400}))}h.entity&&t.dyn.push({kind:"solar",entity:h.entity,mat:x,wp:h.wp||400})}),(e.windows||[]).forEach(h=>{let u=c(h.face,h.u,h.v,.05,h.w||1,h.h||1.2);u&&(u.material=new me({color:s.win,emissive:s.win,emissiveIntensity:.5,transparent:!0,opacity:.55}),n.add(u))}),n}function R_(i,t,e,n,s){let r=new ce,o=i.site?.north??i.settings?.north??0,a=t.roof||{},l=_r(t.points,a,o),c=Ee(a.pitch??12),h=Math.tan(c),u=t.height||2.8,f=l.L,d=l.W,p=a.overhang??.3,x=u+d*h,g=D=>u+(d/2-D)*h,m=new ce;m.position.set(l.cx,0,l.cz),m.rotation.y=l.theta,r.add(m);let M=f/2+p,_=-d/2-p,v=d/2+p,O=new Jt;O.setAttribute("position",new jt([-M,g(_),_,M,g(_),_,M,g(v),v,-M,g(v),v],3)),O.setIndex([0,1,2,0,2,3]),O.computeVertexNormals();let A=new Vt(O,s.roofMats.surf);A.add(new he(new Me(O,5),s.lineMat)),A.renderOrder=2,m.add(A);let P=(D,G,W,J)=>{if(!n.label)return;let it=n.label(D,e.theme),K=ai(l,G,W);it.position.set(K[0],J,K[1]),r.add(it)},U=ha(f,t)||[{type:"solid",t0:0,t1:f}],E=!!(t.parts?.length||t.layout);if(U.forEach(D=>{let G=Math.min(l.tToU(D.t0),l.tToU(D.t1)),W=Math.max(l.tToU(D.t0),l.tToU(D.t1)),J=W-G,it=(G+W)/2;if(D.type==="garage"||D.type==="solid"||D.type==="bike"){let K=new Ke([new ht(-d/2,0),new ht(d/2,0),new ht(d/2,u),new ht(-d/2,x)]),ot=new gn(K,{depth:J,bevelEnabled:!1});ot.applyMatrix4(new ne().set(0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1)),ot.translate(G,0,0);let tt=new Vt(ot,s.wallMat);if(tt.add(new he(new Me(ot,25),s.lineMat)),tt.userData={site:t.id},tt.renderOrder=1,m.add(tt),e.pickables.push(tt),(D.type==="garage"||D.type==="bike")&&E){let dt=la({side:D.doorSide,pt:D,f:l,W:d,hLow:u,bike:D.type==="bike",width:D.door}),ut=new Vt(new Se(dt.sx,dt.sy,dt.sz),new me({color:16722902,emissive:16722902,emissiveIntensity:.5,transparent:!0,opacity:.5,depthWrite:!1}));ut.position.set(dt.x,dt.y,dt.z),ut.add(new he(new Me(ut.geometry),new ae({color:16722902}))),m.add(ut)}P(D.name||(D.type==="solid"?t.name||"":zs[D.type]||""),it,0,.06)}else{let K=new Se(J,x,.1),ot=new Vt(K,s.wallMat);ot.position.set(it,x/2,-d/2+.05),ot.add(new he(new Me(K),s.lineMat)),ot.userData={site:t.id},m.add(ot),e.pickables.push(ot);let tt=D.type==="carport"?D.stalls:1,dt=J/tt,ut=[];for(let Ft=0;Ft<=tt;Ft++){let Zt=G+Ft*dt,st=(pt,Tt)=>{let mt=new Vt(new Se(.14,Tt,.14),s.wallMat);mt.position.set(Zt,Tt/2,pt),mt.add(new he(new Me(mt.geometry),s.lineMat)),m.add(mt)};st(d/2-.08,u),st(-d/2+.08,x),ut.push(new z(Zt,.03,-d/2),new z(Zt,.03,d/2))}D.type==="carport"&&m.add(new he(new Jt().setFromPoints(ut),new ae({color:s.col,transparent:!0,opacity:.8})));let wt=new Vt(new ii(J,d),new Ge({color:s.col,transparent:!0,opacity:.12,side:oe,depthWrite:!1}));wt.rotation.x=-Math.PI/2,wt.position.set(it,.02,0),m.add(wt),D.type==="carport"&&ca(D,D.numberFrom).forEach(Ft=>P(String(Ft.n),l.tToU(Ft.t),0,.05))}}),E&&U.some(D=>D.type==="carport")){let D=U.find(G=>G.type==="carport");P(`Carport \xB7 ${D.stalls} Stellpl\xE4tze`,l.tToU((D.t0+D.t1)/2),d/2+.9,.06)}let w=t.pv;if(w&&w.enabled!==!1){let D=w.over?String(w.over).startsWith("#")?U.find(ot=>ot.index===Number(String(w.over).slice(1))):U.find(ot=>ot.type===w.over):null,G=Dd({L:f,W:d,pitchDeg:a.pitch??12,orientation:w.orientation,portrait:w.portrait,fill:w.fill!==!1,rows:w.rows,cols:w.cols,align:w.edge||"center",uCenter:D?l.tToU((D.t0+D.t1)/2):0}),W=new me({color:726320,emissive:2059263,emissiveIntensity:.15,metalness:.4,roughness:.3}),J=new ae({color:5939455}),it=Math.cos(c),K=Math.sin(c);m.updateMatrixWorld(!0),G.modules.forEach(ot=>{let tt=d/2-ot.s*it+.06*K,dt=u+ot.s*K+.06*it,ut=new Vt(new Se(ot.mw,.04,ot.mh),W);ut.position.set(ot.u,dt,tt),ut.rotation.x=c,ut.add(new he(new Me(ut.geometry),J)),m.add(ut);let wt=new z;m.updateMatrixWorld(!0),ut.updateWorldMatrix(!0,!1),ut.getWorldPosition(wt),e.anchors.pv.push({mesh:ut,mat:W,entity:w.entity||null,wp:w.wp||420,pos:wt,site:t.id})})}return r}var Zc={};function C_(i){let t=i?"day":"neon";if(Zc[t])return Zc[t];let e=512,n=14,s=14,r=e/s,o=e/n,a=document.createElement("canvas");a.width=a.height=e;let l=a.getContext("2d"),c=7,h=()=>(c=c*16807%2147483647,c/2147483647);l.fillStyle=i?"#5d6155":"#1c2230",l.fillRect(0,0,e,e);for(let f=0;f<n;f++)for(let d=0;d<s;d++){let p=(d+.5+(f%2?.5:0))*r+(h()-.5)*5,x=(f+.5)*o+(h()-.5)*5,g=(i?120:98)+Math.floor(h()*(i?70:56)),m=Math.floor(h()*14),M=h()<.08,_=r*(.4+h()*.07),v=o*(.4+h()*.07);for(let O of[-e,0,e])for(let A of[-e,0,e]){let P=p+O,U=x+A;if(P<-r||P>e+r||U<-o||U>e+o)continue;l.beginPath(),l.ellipse(P,U,_,v,(h()-.5)*.4,0,Math.PI*2);let E=l.createRadialGradient(P-_*.3,U-v*.3,1,P,U,Math.max(_,v));E.addColorStop(0,`rgb(${g+22+m},${g+20},${g+16})`),E.addColorStop(1,M?`rgb(${g-30},${g-5},${g-35})`:`rgb(${g-22+m},${g-22},${g-26})`),l.fillStyle=E,l.fill()}}let u=new We(a);return u.wrapS=u.wrapT=Oi,u.repeat.set(.5,.5),u.anisotropy=4,u.colorSpace=qe,Zc[t]=u}function P_(i,t,e={}){let n=new ce,s=i.site?.buildings||[];if(!s.length&&!i.site?.decks?.length&&!i.site?.yard)return n;let r=t.theme==="day",o=i.site?.yard;if(o?.points?.length>2){let d=(o.pits||[]).filter(_=>_.points?.length>2),p=(_,v=[])=>{let O=new Ke(_.map(A=>new ht(A[0],-A[1])));return v.forEach(A=>O.holes.push(new si(A.map(P=>new ht(P[0],-P[1]))))),O},x=i.site?.groundY??0;d.forEach(_=>{let v=_.y??x-.6,O=new Vt(new fr(p(_.points)),new me({color:r?9080729:3752794,emissive:r?0:659228,roughness:1,side:oe}));O.rotation.x=-Math.PI/2,O.position.y=v-.01,n.add(O);let A=[],P=_.openEdges||[];if(_.points.forEach((U,E)=>{if(P.includes(E))return;let w=_.points[(E+1)%_.points.length];A.push(U[0],v,U[1],w[0],v,w[1],w[0],x,w[1],U[0],v,U[1],w[0],x,w[1],U[0],x,U[1])}),A.length){let U=new Jt;U.setAttribute("position",new jt(A,3)),U.computeVertexNormals();let E=r?14205861:16757575,w=new Vt(U,new me({color:E,emissive:E,emissiveIntensity:r?0:.2,transparent:!0,opacity:r?.9:.3,side:oe,depthWrite:!1}));w.add(new he(new Me(U,20),new ae({color:E,transparent:!0,opacity:.9}))),n.add(w)}});let g=d.length?Kc.default.difference([[o.points.map(_=>[_[0],_[1]])]],...d.map(_=>[[_.points.map(v=>[v[0],v[1]])]])):null,m=g?g.map(_=>p(_[0],_.slice(1))):[p(o.points)],M=new Vt(new fr(m),new me({map:C_(r),color:r?16777215:12107988,roughness:1,metalness:0,side:oe}));M.rotation.x=-Math.PI/2,M.position.y=(i.site?.groundY??0)-.012,M.userData={yard:!0},M.renderOrder=0,n.add(M)}let a=r?14205861:16757575,l=new me({color:a,emissive:a,emissiveIntensity:r?0:.18,transparent:!0,opacity:r?.95:.22,depthWrite:!1,side:oe}),c=new ae({color:a,transparent:!0,opacity:.9}),h={surf:new me({color:a,emissive:a,emissiveIntensity:r?0:.25,transparent:!0,opacity:r?.95:.32,side:oe,depthWrite:!1}),line:c,gable:l,edge:c},u=(d,p,x)=>{if(!d.points||d.points.length<3)return;let g=d.rail??1,m=d.railSkip||[0],M=new gn(new Ke(d.points.map(O=>new ht(O[0],-O[1]))),{depth:.18,bevelEnabled:!1,curveSegments:1}),_=new Vt(M,new me({color:a,emissive:a,emissiveIntensity:r?0:.35,transparent:!0,opacity:r?.9:.5,side:oe,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=p-.18,_.add(new he(new Me(M,25),c)),_.userData={site:x},n.add(_),t.pickables.push(_);let v=[];for(let O=0;O<d.points.length;O++){if(m.includes(O))continue;let A=d.points[O],P=d.points[(O+1)%d.points.length];v.push(A[0],p,A[1],P[0],p,P[1],P[0],p+g,P[1],A[0],p,A[1],P[0],p+g,P[1],A[0],p+g,A[1])}if(v.length){let O=new Jt;O.setAttribute("position",new jt(v,3)),O.computeVertexNormals();let A=new Vt(O,new Ge({color:a,transparent:!0,opacity:.18,side:oe,depthWrite:!1}));A.add(new he(new Me(O,5),c)),n.add(A)}if(e.label&&d.name){let O=e.label(d.name,t.theme),A=Ln(d.points);O.position.set(A[0],p+.06,A[1]),n.add(O)}};(i.site?.decks||[]).forEach(d=>u(d,d.elev??0,"deck"));let f=i.site?.groundY??0;return s.forEach(d=>{if(d.visible===!1||!d.points||d.points.length<3)return;if(d.roof?.type==="shed"||d.layout||d.parts?.length){let A=R_(i,d,t,e,{wallMat:l,lineMat:c,roofMats:h,col:a});f&&(A.position.y=f,t.anchors.pv.forEach(P=>{P.site===d.id&&(P.pos.y+=f)})),n.add(A);return}let p=d.levels>1||d.baseY!=null,x=p?Math.min(0,d.baseY??f):0,g=n.children.length,m=d.height||3,M=new gn(new Ke(d.points.map(A=>new ht(A[0],-A[1]))),{depth:m-x,bevelEnabled:!1,curveSegments:1}),_=new Vt(M,l);_.rotation.x=-Math.PI/2,_.position.y=x,_.add(new he(new Me(M,25),c)),_.userData={site:d.id},_.renderOrder=1,n.add(_),t.pickables.push(_),(d.storeys||[]).filter(A=>A>.05&&A<m-.3).forEach(A=>{let P=[];i.floors.forEach((G,W)=>{let J=_n(i,W);J>=A||G.furniture.filter(Xc).forEach(it=>{let K=$c(it);J+(it.h||2.7)>=A-.35&&K.every(ot=>rn(ot,d.points))&&P.push(K)})}),i.floors.forEach((G,W)=>{Math.abs(_n(i,W)-A)>.02||G.rooms.filter(J=>J.dy<0&&J.points.every(it=>rn(it,d.points))).forEach(J=>P.push(J.points))});let U=(G,W=[])=>{let J=new Ke(G.map(it=>new ht(it[0],-it[1])));return W.forEach(it=>J.holes.push(new si(it.map(K=>new ht(K[0],-K[1]))))),J},E=[U(d.points)];P.length&&(E=Kc.default.difference([[d.points.map(W=>[W[0],W[1]])]],...P.map(W=>[[W.map(J=>[J[0],J[1]])]])).map(W=>U(W[0],W.slice(1))));let w=new gn(E,{depth:.18,bevelEnabled:!1,curveSegments:1}),D=new Vt(w,new me({color:a,emissive:a,emissiveIntensity:r?0:.35,transparent:!0,opacity:r?.9:.45,side:oe,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=A-.18,D.add(new he(new Me(w,25),c)),n.add(D)}),(d.openings||[]).forEach(A=>{let P=A.w||1.1,U=A.h||2.2,E=A.type==="door"?0:P/2,w=new Ke;w.moveTo(-P/2,0),w.lineTo(P/2,0),w.lineTo(P/2,U-E),E?w.absarc(0,U-E,E,0,Math.PI,!1):(w.lineTo(P/2,U),w.lineTo(-P/2,U)),w.lineTo(-P/2,0);let D=new gn(w,{depth:.16,bevelEnabled:!1,curveSegments:16});D.translate(0,0,-.08);let G=new Vt(D,new me({color:16722902,emissive:16722902,emissiveIntensity:.5,transparent:!0,opacity:.5,depthWrite:!1}));G.add(new he(new Me(D,20),new ae({color:16722902}))),G.position.set(A.x,A.elev||0,A.z),G.rotation.y=-Ee(A.rot||0),G.userData={site:d.id},n.add(G),t.pickables.push(G)}),(d.balconies||[]).forEach(A=>u(A,A.elev??(d.storeys||[]).find(P=>P>.05)??2.8,d.id));let v=m,O=d.roof||{};if(O.type==="gable"&&d.points.length===4){let[A,P,U]=d.points,E=[P[0]-A[0],P[1]-A[1]],w=[U[0]-P[0],U[1]-P[1]],D=Math.hypot(...E),G=Math.hypot(...w),W=D>=G?E:w,J=Math.max(D,G),it=Math.min(D,G),K=O.pitch||25,ot={axis:"x",x0:-J/2,x1:J/2,z0:-it/2,z1:it/2,base:m,eaveA:m,eaveB:m,pitchA:K,pitchB:K,overhang:O.overhang??.3},tt=new ce;Gd(tt,ot,h,.05),tt.position.set(d.points.reduce((dt,ut)=>dt+ut[0],0)/d.points.length,0,d.points.reduce((dt,ut)=>dt+ut[1],0)/d.points.length),tt.rotation.y=-Math.atan2(W[1],W[0]),n.add(tt),v=br(ot).yr}if(d.name&&e.label){let A=Ln(d.points),P=e.label(d.name,t.theme);P.position.set(A[0],v+.1,A[1]),n.add(P)}!p&&f&&n.children.slice(g).forEach(A=>{A.position.y+=f})}),n}function I_(i,t,e){let n=new ce;n.position.set(t[0],.05,t[1]);let s=Ee(i||0),r=new z(Math.sin(s),0,-Math.cos(s)),o=e.theme==="day"?3359061:1697535,a=new Vt(new Is(1.1,1.18,48),new Ge({color:o,side:oe,transparent:!0,opacity:.8}));a.rotation.x=-Math.PI/2,n.add(a),n.add(new un(new Jt().setFromPoints([r.clone().multiplyScalar(-.9),r.clone().multiplyScalar(1.5)]),new ae({color:16722902})));let l=Hs();return Ji(l,"N","#ff2bd6"),l.visible=!0,l.scale.set(.9,.22,1),l.position.copy(r.clone().multiplyScalar(1.9)),l.position.y=.3,n.add(l),n}function Wd(i,t){let e=t.theme||"neon",n=Ki[e]||Ki.neon,s={wall:new me({color:n.wall,emissive:n.wall,emissiveIntensity:e==="day"?0:.25,transparent:!0,opacity:n.wallOp,depthWrite:!1}),edge:new ae({color:e==="day"?6713477:n.wall,transparent:!0,opacity:n.edgeOp})},r={rooms:[],furniture:[],devices:[],pv:[],screens:[],cars:[]},o={theme:e,th:n,mats:s,dyn:[],pickables:[],glowTex:t.glowTex,anchors:r,cur:{elev:0,i:0}},a=new ce,l={...vr,...i.settings||{}};i.floors.forEach((h,u)=>{if(u>t.maxFloor)return;let f=_n(i,u);o.cur={elev:f,i:u};let d=new ce,p=u<t.maxFloor&&t.maxFloor!==1/0?.7:1,x=Hd(i,u);h.rooms.forEach(_=>{let v=new Ke(_.points.map(w=>new ht(w[0],w[1])));x.forEach(w=>{w.every(D=>rn(D,_.points))&&v.holes.push(new si(w.map(D=>new ht(D[0],D[1]))))});let O=new Ot(_.color||"#19e6ff"),A=new me({color:O.clone().multiplyScalar(n.floorK),emissive:O,emissiveIntensity:n.floorEm*p,side:oe}),P=new Vt(new gn(v,{depth:l.slab,bevelEnabled:!1,curveSegments:1}),A);P.rotation.x=Math.PI/2,P.position.y=_.dy||0,P.userData={room:_.id,floor:h.id},d.add(P),o.pickables.push(P);let U=Ln(_.points);if(r.rooms.push({id:_.id,name:_.name,area:_.area,room:_,floor:u,x:U[0],z:U[1],y:f+h.height*.5,elev:f}),_.name){let w=Ln(_.points),D=t.label(_.name,e);D.position.set(w[0],.04,w[1]),d.add(D)}let E=t.climateFor?.(_);if(E&&(E.temperature||E.humidity||E.co2)){let w=Ln(_.points),D=Hs(448);D.scale.set(3.15,.45,1),D.position.set(w[0],1.05,w[1]),d.add(D),o.dyn.push({kind:"roomclimate",...E,sprite:D,mat:A,base:{color:A.color.clone(),emissive:A.emissive.clone(),ei:A.emissiveIntensity}})}});let g=da(h,l),m=new Map,M=[];h.openings.forEach(_=>{let v=zd(_,g);v&&(m.has(v.s)||m.set(v.s,[]),m.get(v.s).push({..._,u:v.u})),d.add(T_(_,v,0,o,i)),v||M.push(_)}),g.forEach(_=>{let v=E_(_,h,f,i,n,s,m.get(_)||[]);v.position.y=0,d.add(v)}),h.furniture.forEach(_=>d.add(S_(_,0,o))),t.devicesFor(h).forEach(_=>{let v=Je(_.entity),O=_.y??(v==="light"?h.height-.4:v==="camera"?Math.min(2.4,h.height-.25):.9),A=v==="light"?new Lo(.14,16,12):v==="cover"?new Se(.5,.08,.08):new Se(.22,.22,.22),P=new Vt(A,new me({color:4475494,emissive:0}));P.position.set(_.x,O,_.z),P.userData={entity:_.entity};let U=new nn(new Ze({map:t.glowTex(),color:16765066,transparent:!0,depthWrite:!1,blending:cn}));U.position.copy(P.position);let E=v==="light"?2.4:1.1;if(U.scale.setScalar(E),U.visible=!1,d.add(P,U),o.pickables.push(P),r.devices.push({d:_,entity:_.entity,floor:u,x:_.x,y:f+O,z:_.z,kind:v,mesh:P}),o.dyn.push({kind:v,entity:_.entity,mesh:P,glow:U,baseScale:E,pulse:v==="light"}),_.name&&_.showName){let w=Hs();Ji(w,_.name),w.visible=!0,w.position.set(_.x,O+.35,_.z),d.add(w)}}),d.position.y=f,a.add(d)}),t.showRoof&&t.maxFloor>=i.floors.length-1&&a.add(A_(i,o)),t.showSite!==!1&&a.add(P_(i,o,t));let c=[...i.floors.flatMap(h=>h.rooms.flatMap(u=>u.points)),...(i.site?.buildings||[]).flatMap(h=>h.points)];if(c.length&&i.site?.north!=null){let[h,,,u]=wi(c);a.add(I_(i.site.north,[h-2.5,u+2.5],o))}return{root:a,dyn:o.dyn,pickables:o.pickables,anchors:r}}var L_={wood:"#e0a458",tiles:"#58c4dd",stone:"#9aa5b8",carpet:"#b48ad8",concrete:"#8d99ae"},Xd=i=>i==null?null:Number(i),Si=i=>i&&i!=="none"?i:null;function D_(i){let t=i?.result??i,e=t?.building??t;if(!e||!Array.isArray(e.floors))throw new Error("Keine NeonPlan-3D-Daten (floors fehlen)");return{building:e,meta:{version:t?.version,revision:t?.revision}}}function $d(i){let{building:t,meta:e}=D_(i),n=t.settings||{},s={version:2,settings:{wallExterior:n.wall_exterior??.24,wallInterior:n.wall_interior??.12,north:n.north??0,autoDevices:!0,energy:t.energy||null,roof:U_(n.roof),source:{app:"neonplan3d",version:e.version??null,revision:e.revision??null}},floors:[]};return[...t.floors].sort((o,a)=>(o.elevation??0)-(a.elevation??0)).forEach(o=>{let a=(o.rooms||[]).map(f=>({id:f.id,name:f.name||"",area:f.area_id||null,color:L_[f.floor_material]||"#19e6ff",material:f.floor_material||null,points:f.points.map(d=>[d[0],d[1]]),wallT:f.wall_thickness||null,wallH:f.wall_heights||null,climate:f.climate&&Object.values(f.climate).some(Boolean)?f.climate:null})),l=(o.walls||[]).map(f=>({id:f.id,a:[...f.a],b:[...f.b],t:Xd(f.thickness),h:Xd(f.height)})),c=[];(o.openings||[]).forEach(f=>{let d,p;if(f.wall){let v=(o.walls||[]).find(O=>O.id===f.wall);if(!v)return;[d,p]=[v.a,v.b]}else{let v=(o.rooms||[]).find(A=>A.id===f.room_id);if(!v)return;let O=f.edge||0;[d,p]=[v.points[O%v.points.length],v.points[(O+1)%v.points.length]]}let x=p[0]-d[0],g=p[1]-d[1],m=Math.hypot(x,g)||1,M=f.offset??m/2,_=f.type==="door";c.push({id:f.id,type:f.type,x:+(d[0]+x/m*M).toFixed(4),z:+(d[1]+g/m*M).toFixed(4),rot:-Math.atan2(g,x),w:f.width??(_?.9:1.2),h:f.height??(_?2.1:1.1),sill:f.sill??(_?0:.9),style:f.style||null,hinge:f.hinge||"left",swing:f.swing||"in",leaves:f.leaves||1,entity:Si(f.contact)||Si(f.sensor),cover:Si(f.cover)})});let h=(o.furniture||[]).map(f=>({id:f.id,type:f.type,x:f.x??0,z:f.z??0,rot:f.rotation||0,w:f.w,d:f.d,h:f.h,mountY:f.mount_y??null,name:f.name||null,showName:!!f.show_name,entity:Si(f.entity),power:Si(f.power),stateEntity:Si(f.state_entity),marker:f.marker||null})),u=(o.placements||[]).map((f,d)=>({id:`${o.id}_dev${d}`,entity:f.entity_id,x:f.x,z:f.z,y:f.y??null,name:f.name||null,showName:!!f.show_name}));s.floors.push({id:o.id,name:o.name,elevation:o.elevation??0,height:o.height??2.6,rooms:a,walls:l,openings:c,devices:u,furniture:h})}),Yi(s)}function U_(i){return!i||!Array.isArray(i.sections)||!i.sections.length?null:{overhang:i.overhang??.5,sections:i.sections.map(t=>({id:t.id,shape:t.shape||"gable",axis:t.axis||"x",x0:t.x0,x1:t.x1,z0:t.z0,z1:t.z1,base:t.base,eaveA:t.eave_a,eaveB:t.eave_b,pitchA:t.pitch_a??i.pitch??40,pitchB:t.pitch_b??i.pitch??40,overhang:t.overhang??i.overhang??.5,flip:!!t.flip})),solar:(i.solar||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:t.rows||1,cols:t.cols||1,portrait:t.portrait!==!1,entity:Si(t.entity),wp:t.wp||null,name:t.name||null,moduleW:t.module_w??null,moduleH:t.module_h??null})),windows:(i.windows||[]).map(t=>({id:t.id,face:t.face,u:t.u,v:t.v,w:t.w||1,h:t.h||1.2,entity:Si(t.contact)}))}}var qd=["light","switch","cover","fan","lock","input_boolean","media_player"],N_=["off","closed","unavailable","unknown","idle","locked","docked","standby","paused"],Zd={bed:[1.8,2,.5],sofa_l:[2.4,1.6,.85],table:[1.6,.9,.75],chair:[.45,.45,.9],desk:[1.4,.7,.75],office_chair:[.6,.6,1],wardrobe:[1,.6,2.1],dresser:[1.2,.5,.9],shelf:[.8,.3,1.8],tv_board:[1.6,.45,.5],sideboard:[1.4,.45,.85],kitchen:[2.4,.62,.9],kitchen_tall:[.6,.62,2.1],kitchen_wall:[1,.35,.7],island:[1.8,.9,.9],fridge:[.6,.65,1.8],stove:[.6,.6,.9],sink:[.8,.6,.9],dishwasher:[.6,.6,.85],washer:[.6,.6,.85],shower:[.9,.9,2.1],bathtub:[1.7,.75,.55],wc:[.4,.7,.8],washbasin:[.6,.45,.85],bin:[.58,.72,1.07],stairs:[.9,2.4,2.8],stairs_u:[1.9,3.2,2.8],rug:[2,3,.02],stool:[.35,.35,.45],bench:[1.2,.4,.45],robot_vacuum:[.36,.36,.1],led_strip:[1,.05,.05],inverter:[.5,.2,.65],meter:[.5,.2,1.1],tv:[1.2,.06,.7],monitor:[.6,.05,.36],speaker:[.22,.22,.32],soundbar:[.9,.09,.07],car:[1.9,4.6,1.5],battery:[.6,.25,1.1],wallbox:[.25,.12,.35]},Yd=Object.keys(Zd),O_=(i,t)=>t.split(".").reduce((e,n)=>e?.[n],i),k_=(i,t,e)=>{let n=t.split("."),s=n.pop(),r=n.reduce((o,a)=>o[a]??={},i);r[s]=e},vn=i=>String(i??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),F_=`
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
`,Jc=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.plan=Wc(),this.fi=0,this.cut=!1,this.editing=!1,this.tool="select",this.sel=null,this.draft=[],this.cam2={x:5,z:4,s:40},this.dyn=[],this.pickables=[],this.cfg={},this._ready=!1,this.panelRoom=null,this.pendingEntity="",this.furnType="table",this.grid=.1,this.showRoof=!0,this.showSite=!0,this.showClimate=!0,this.heatmap=!1,this.hasClimate=!1,this.multi=[],this.theme="neon",this.undoStack=[],this._labels=new Map,this.chips={},this.holo=!0,this.features=Pd(this)}set hass(t){let e=!this._hass;this._hass=t,e&&this._ready&&this.load(),this.updateStates(),!this.editing&&this.panelRoom&&this.renderRoomPanel()}get hass(){return this._hass}getStates(){return this._replayStates||this._hass?.states}fxOn(t){if(this.cfg[t]!=null)return!!this.cfg[t];try{let e=localStorage.getItem("hp3d.fx."+t);if(e!=null)return e==="1"}catch{}return!0}setFx(t,e){try{localStorage.setItem("hp3d.fx."+t,e?"1":"0")}catch{}let n=this.features.find(s=>s.id===t);n&&(n.on=e,n.group.visible=e,e?n.update(this.getStates()||{}):n.reset(),this.renderBar())}openFxMenu(){this.closeOverlay();let t=document.createElement("div");t.className="overlay",t.style.cssText="right:12px;top:52px;width:230px",t.innerHTML=`<h4 style="margin:0 0 6px">Funktionen einrichten</h4>${this.features.filter(e=>e.settingsLabel).map((e,n)=>`<button class="full" data-i="${n}">${e.settingsLabel}</button>`).join("")}`,t.onclick=e=>{let n=e.target.closest("[data-i]")?.dataset.i;n!=null&&this.features.filter(s=>s.settingsLabel)[+n].openSettings()},this.shadowRoot.querySelector(".wrap").append(t),this._overlay=t}closeOverlay(){this._overlay&&(this._overlay.remove(),this._overlay=null)}setChip(t,e){e?this.chips[t]=e:delete this.chips[t];let n=this.$("#chips");n&&(n.innerHTML=Object.values(this.chips).map(s=>`<span>${s}</span>`).join(""))}set config(t){this.cfg=t||{},this.theme=this.cfg.theme==="day"?"day":"neon",this.showRoof=this.cfg.show_roof!==!1,this.showSite=this.cfg.show_site!==!1,this.showClimate=this.cfg.show_climate!==!1,this.heatmap=!!this.cfg.heatmap,this._ready&&(this.renderBar(),this.rebuild3D())}connectedCallback(){if(this._ready)return;this._ready=!0,this.shadowRoot.innerHTML=`<style>${F_}</style>
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
    </div>`;let t=e=>this.shadowRoot.querySelector(e);this.$=t,this.edCanvas=t("#ed"),this.viewEl=t("#view"),t("#edit").onclick=()=>this.setEditing(!this.editing),t("#save").onclick=()=>this.save(),t("#undo").onclick=()=>this.undo(),this.init3D(),this.initEditor(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.shadowRoot.querySelector(".wrap")),this._hass?this.load():this.setPlan(this.plan,{fit:!0})}disconnectedCallback(){this.ro?.disconnect(),cancelAnimationFrame(this._raf),this.renderer?.dispose(),this._ready=!1}async load(){let t=null;try{t=await this._hass.callWS({type:"homeplan3d/get"})}catch(e){console.error(e)}this.setPlan(t||Wc(),{fit:!0})}setPlan(t,{fit:e=!1}={}){this.plan=Yi(t),this.plan.floors.length||(this.plan.floors=[ua(1)]);let n=this.plan.floors.length-1;this.fi=this.cfg.floor!=null?Math.max(0,Math.min(this.cfg.floor,n)):n,this.cut=this.cfg.floor!=null,this.sel=null,this.draft=[],this.panelRoom=null;let s=this._hass?.user?.is_admin!==!1&&this.cfg.mode!=="card"&&!!this._hass;this.$("#edit").classList.toggle("hidden",!s),this.renderBar(),this.rebuild3D(),e&&this.fit(),this.draw2D()}async save(){try{await this._hass.callWS({type:"homeplan3d/save",plan:this.plan}),this.msg("\u2705 Gespeichert")}catch(t){this.msg("\u274C Speichern fehlgeschlagen: "+(t.message||t.code))}}msg(t){let e=document.createElement("div");e.className="msg",e.textContent=t,this.shadowRoot.querySelector(".wrap").append(e),setTimeout(()=>e.remove(),3500)}get floor(){return this.plan.floors[this.fi]}pushUndo(){this.undoStack.push(JSON.stringify(this.plan)),this.undoStack.length>40&&this.undoStack.shift()}undo(){let t=this.undoStack.pop();t&&(this.plan=Yi(JSON.parse(t)),this.fi=Math.min(this.fi,this.plan.floors.length-1),this.sel=null,this.draft=[],this.renderBar(),this.rebuild3D(),this.renderSide(),this.draw2D())}changed({side:t=!1}={}){this.rebuild3D(),this.draw2D(),t&&this.renderSide()}renderBar(){let t=this.$("#floors");t.innerHTML="";let e=(o,a,l,c)=>{let h=document.createElement("button");return h.textContent=o,h.className=a||"",c&&(h.title=c),h.onclick=l,h};!this.editing&&this.plan.floors.length>1&&t.append(e("Alle",this.cut?"":"on",()=>{this.cut=!1,this.renderBar(),this.rebuild3D(),this.flyToFloor(null)},"Ganzes Geb\xE4ude"));for(let o=this.plan.floors.length-1;o>=0;o--){let a=this.plan.floors[o];t.append(e(a.name,o===this.fi&&(this.editing||this.cut)?"on":"",()=>{this.fi=o,this.cut=!0,this.sel=null,this.renderBar(),this.rebuild3D(),this.draw2D(),this.renderSide(),this.flyToFloor(o)}))}this.editing&&t.append(e("+","",()=>{this.pushUndo(),this.plan.floors.push(ua(this.plan.floors.length+1)),this.fi=this.plan.floors.length-1,this.renderBar(),this.changed({side:!0})},"Etage hinzuf\xFCgen"));let n=this.$("#toggles");n.innerHTML="",Mr(this.plan).length&&n.append(e("Dach",this.showRoof?"on":"",()=>{this.showRoof=!this.showRoof,this.renderBar(),this.rebuild3D()})),this.plan.site?.buildings?.length&&n.append(e("Gel\xE4nde",this.showSite?"on":"",()=>{this.showSite=!this.showSite,this.renderBar(),this.rebuild3D(),this.draw2D()},"Weitere Geb\xE4ude auf dem Flurst\xFCck")),this.features.forEach(o=>{o.available()&&(n.append(e(o.label,o.on?"on":"",()=>this.setFx(o.id,!o.on),o.title)),o.on&&o.toolbar().forEach(a=>n.append(e(a.label,a.on?"on":"",a.fn,a.title))))}),this.features.some(o=>o.usesHolo&&o.available())&&n.append(e("\u25C8 Karten",this.holo?"on":"",()=>{this.holo=!this.holo,this.renderBar(),this.updateStates()},"Karten und Hologramme im Raum ein- oder ausblenden")),this.hasClimate&&(n.append(e("\u{1F321} Klima",this.showClimate?"on":"",()=>{this.showClimate=!this.showClimate,this.renderBar(),this.updateStates()},"Temperatur und Luftfeuchte in den R\xE4umen")),n.append(e("\u{1F525} W\xE4rme",this.heatmap?"on":"",()=>{this.heatmap=!this.heatmap,this.renderBar(),this.updateStates()},"R\xE4ume nach Temperatur einf\xE4rben"))),n.append(e(this.theme==="day"?"\u2600":"\u{1F319}","",()=>{this.theme=this.theme==="day"?"neon":"day",this.renderBar(),this.rebuild3D()},"Darstellung wechseln"));let s=this.$("#tools");s.innerHTML="",[["select","\u2196 Auswahl"],["rect","\u25AD Raum"],["room","\u2B20 Polygon"],["wall","\u25AC Wand"],["door","\u{1F6AA} T\xFCr"],["window","\u{1FA9F} Fenster"],["furn","\u{1FA91} M\xF6bel"],["device","\u{1F4A1} Ger\xE4t"],["building","\u{1F3E0} Geb\xE4ude"],["erase","\u{1F5D1}"]].forEach(([o,a])=>s.append(e(a,this.tool===o?"on":"",()=>{this.tool=o,this.draft=[],this.renderBar(),this.renderSide(),this.draw2D()}))),s.append(e("\u2922","",()=>{this.fit2D(),this.draw2D()},"Ansicht einpassen")),s.append(e("\u2699 Funktionen","",()=>this.openFxMenu(),"Wetter, Energie, Auto, Kameras \u2026 einrichten"))}setEditing(t){this.editing=t,this.panelRoom=null;for(let[e,n]of[["#tools",t],["#save",t],["#undo",t]])this.$(e).classList.toggle("hidden",!n);this.edCanvas.classList.toggle("hidden",!t),this.$("#side").classList.toggle("hidden",!t),this.$("#edit").classList.toggle("on",t),this.renderBar(),this.renderSide(),this.rebuild3D(),this.resize(),t&&this.fit2D(),this.draw2D()}fit2D(){let t=this.edCanvas;if(!t.width)return;let e=this.floor.rooms.flatMap(a=>a.points);if(e.length||(e=this.plan.floors.flatMap(a=>a.rooms.flatMap(l=>l.points))),e.length||(e=(this.plan.site?.buildings||[]).flatMap(a=>a.points)),!e.length)return;let[n,s,r,o]=wi(e);this.cam2.x=(n+r)/2,this.cam2.z=(s+o)/2,this.cam2.s=Math.max(5,Math.min(120,Math.min(t.width/((r-n)*1.15+1),t.height/((o-s)*1.15+1))))}hint(t){this.$("#hint").textContent=t||""}formHtml(t,e){return e.map(n=>{let s=O_(t,n.k)??n.def,r=`data-k="${n.k}" data-t="${n.t||"text"}"`;return n.t==="select"?`<label>${n.l}</label><select ${r}>${n.o.map(o=>{let[a,l]=Array.isArray(o)?o:[o,o];return`<option value="${vn(a)}" ${a===s?"selected":""}>${vn(l)}</option>`}).join("")}</select>`:n.t==="checkbox"?`<label><input type="checkbox" ${r} ${s?"checked":""}>${n.l}</label>`:n.t==="number"?`<label>${n.l}</label><input ${r} type="number" step="${n.s||.05}" value="${s??""}" placeholder="${n.p||""}">`:`<label>${n.l}</label><input ${r} ${n.t==="color"?'type="color"':""} ${n.list?`list="${n.list}"`:""} ${n.p?`placeholder="${vn(n.p)}"`:""} value="${vn(s??"")}">`}).join("")}bindForm(t,e,n){t.querySelectorAll("[data-k]").forEach(s=>{s._bound||(s._bound=!0,s.onchange=()=>{this.pushUndo();let r=s.dataset.t,o=s.value;r==="number"?o=s.value===""?null:+s.value:r==="checkbox"?o=s.checked:o===""&&(o=null),k_(e,s.dataset.k,o),n?.(s),this.changed()})})}renderSide(){let t=this.$("#side");if(!this.editing)return;let e=this._hass,n=this.floor,s={select:"Ziehen verschiebt \xB7 Entf l\xF6scht \xB7 leere Fl\xE4che aufziehen w\xE4hlt mehrere \xB7 Umschalt+Klick f\xFCgt hinzu \xB7 Strg+Z",rect:"Diagonal aufziehen",room:"Punkte klicken, Doppelklick schlie\xDFt",wall:"Start/Ende klicken, Esc beendet",door:"Auf eine Wand klicken",window:"Auf eine Wand klicken",furn:"Typ w\xE4hlen, dann in den Raum klicken",device:"Entit\xE4t w\xE4hlen, dann in den Raum klicken",building:"Geb\xE4ude auf dem Gel\xE4nde diagonal aufziehen",erase:"Element anklicken"};this.hint(s[this.tool]);let o=`<datalist id="ents">${Object.keys(e?.states||{}).sort().map(p=>`<option value="${p}">`).join("")}</datalist>`;o+=`<h4>Etage</h4><div data-obj="floor">${this.formHtml(n,[{k:"name",l:"Name"},{k:"height",l:"Raumh\xF6he (m)",t:"number"},{k:"elevation",l:"H\xF6he Fu\xDFboden (m, leer = automatisch)",t:"number",p:"auto"}])}</div>`,o+=`<label><input type="checkbox" data-plan="autoDevices" ${this.plan.settings.autoDevices?"checked":""}>Ger\xE4te aus HA-Bereichen automatisch platzieren</label>`,o+=`<label>Raster</label><select id="grid">${[.05,.1,.25,.5].map(p=>`<option ${p===this.grid?"selected":""}>${p}</option>`).join("")}</select>`,(this.tool==="device"||this.tool==="door"||this.tool==="window")&&(o+=`<h4>${this.tool==="device"?"Ger\xE4t":"Kontaktsensor"}</h4><label>Entit\xE4t</label><input id="pent" list="ents" value="${vn(this.pendingEntity)}" placeholder="light.wohnzimmer">`),this.tool==="furn"&&(o+=`<h4>M\xF6bel</h4><label>Typ</label><select id="ftype">${Yd.map(p=>`<option ${p===this.furnType?"selected":""}>${p}</option>`).join("")}</select>`);let a=this.sel,l=(p,x)=>p.find(g=>g.id===x),c=null,h="";if(this.multi.length>1){let p={};this.multi.forEach(g=>p[g.kind]=(p[g.kind]||0)+1);let x={device:"Ger\xE4te",furniture:"M\xF6bel",opening:"\xD6ffnungen",room:"R\xE4ume",wall:"W\xE4nde",site:"Geb\xE4ude"};h+=`<h4>Auswahl</h4><div style="font-size:12px;opacity:.85">${this.multi.length} Elemente: ${Object.entries(p).map(([g,m])=>`${m} ${x[g]||g}`).join(", ")}</div>
        <button class="full" id="multi-del">\u{1F5D1} Auswahl entfernen</button>
        <div style="font-size:11px;opacity:.6;margin-top:4px">Automatisch platzierte Ger\xE4te werden ausgeblendet. Ziehen verschiebt die ganze Auswahl.</div>`}else if(a?.kind==="room"){if(c=l(n.rooms,a.id),c){let p=Object.values(e?.areas||{}),x=this.areaClimate(c.area);h+=`<h4>Raum</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"area",l:"HA-Bereich (Ger\xE4te automatisch)",t:"select",o:[["","\u2013 keiner \u2013"],...p.map(g=>[g.area_id,g.name]),...c.area&&!p.some(g=>g.area_id===c.area)?[[c.area,c.area]]:[]]},{k:"color",l:"Farbe",t:"color"},{k:"dy",l:"Boden h\xF6her / tiefer als die Etage (m, tiefer = negativ)",t:"number",s:.05,p:"0"},{k:"autoDevices",l:"Ger\xE4te aus dem HA-Bereich automatisch platzieren",t:"checkbox",def:!0},{k:"climate.temperature",l:"Temperatur-Sensor",list:"ents",p:x.temperature?`automatisch: ${x.temperature}`:""},{k:"climate.humidity",l:"Feuchte-Sensor",list:"ents",p:x.humidity?`automatisch: ${x.humidity}`:""},{k:"climate.co2",l:"CO\u2082-Sensor",list:"ents",p:x.co2?`automatisch: ${x.co2}`:""}])}<div class="hint2" style="opacity:.6;font-size:11px;margin-top:6px">${jo(c.points).toFixed(1)} m\xB2</div>`}}else if(a?.kind==="wall")c=l(n.walls,a.id),c&&(h+=`<h4>Wand</h4>${this.formHtml(c,[{k:"t",l:"St\xE4rke (m)",t:"number",p:"auto"},{k:"h",l:"H\xF6he (m, leer = voll)",t:"number"}])}`);else if(a?.kind==="device"){if(c=l(n.devices,a.id),c)h+=`<h4>Ger\xE4t</h4>${this.formHtml(c,[{k:"entity",l:"Entit\xE4t",list:"ents"},{k:"name",l:"Anzeigename"},{k:"showName",l:"Name anzeigen",t:"checkbox"},{k:"y",l:"H\xF6he (m)",t:"number",p:"auto"},...Je(c.entity)==="camera"?[{k:"rot",l:"Blickrichtung (\xB0 im Uhrzeigersinn, 0 = im Plan nach unten)",t:"number",s:5,p:"0"},{k:"tilt",l:"Neigung nach unten (\xB0)",t:"number",s:5,p:"25"},{k:"fov",l:"\xD6ffnungswinkel (\xB0)",t:"number",s:5,p:"90"},{k:"reach",l:"Reichweite im Plan (m)",t:"number",s:.5,p:"7"},{k:"motion",l:"Bewegungsmelder (leer = am Kamera-Ger\xE4t suchen)",list:"ents"}]:[]])}`;else if(this.isAuto(a)){let p=this.itemOf(a);p&&(h+=`<h4>Ger\xE4t (automatisch)</h4><div style="font-size:12px;opacity:.85;word-break:break-all">${vn(p.entity)}</div>
          <div style="font-size:11px;opacity:.6;margin:4px 0">Aus dem HA-Bereich des Raums platziert. Ziehen setzt es fest, Entf blendet es aus.</div>
          <button class="full" id="auto-pin">\u{1F4CC} Festsetzen</button><button class="full" id="auto-hide">\u{1F648} Ausblenden</button>`)}}else a?.kind==="opening"?(c=l(n.openings,a.id),c&&(h+=`<h4>${c.type==="door"?"T\xFCr":"Fenster"}</h4>${this.formHtml(c,[{k:"w",l:"Breite (m)",t:"number"},{k:"h",l:"H\xF6he (m)",t:"number"},{k:"sill",l:"Br\xFCstung (m)",t:"number"},{k:"style",l:"Art",t:"select",o:[["","Standard"],"front","interior","passage"]},{k:"hinge",l:"Angel",t:"select",o:["left","right"]},{k:"swing",l:"\xD6ffnet nach",t:"select",o:["in","out"]},{k:"entity",l:"Kontaktsensor",list:"ents"}])}`)):a?.kind==="furniture"?(c=l(n.furniture,a.id),c&&(h+=`<h4>M\xF6bel</h4>${this.formHtml(c,[{k:"type",l:"Typ",t:"select",o:Yd},{k:"name",l:"Name"},{k:"color",l:"Farbe (leer = Standard)",t:"color"},...c.type==="stairs_u"?[{k:"landings",l:"Podeste (1 = zwei L\xE4ufe, 2 = drei L\xE4ufe um die Ecken)",t:"number",s:1,p:"1"},{k:"flip",l:"Gespiegelt (Anfang auf der anderen Seite)",t:"checkbox"}]:[],...c.type==="car"?[{k:"presence",l:"Anwesenheit (Schalter: an = da, aus = weg)",list:"ents"}]:[],...c.type==="car"?[{k:"body",l:"Karosserie",t:"select",o:[["","einfach"],["sedan","Limousine"],["wagon","Kombi"],["hatch","Schr\xE4gheck / Crossover"],["van","Kastenwagen"],["roadster","Roadster"]]}]:[],{k:"rot",l:"Drehung (\xB0)",t:"number",s:5},{k:"w",l:"Breite",t:"number"},{k:"d",l:"Tiefe",t:"number"},{k:"h",l:"H\xF6he",t:"number"},{k:"mountY",l:"H\xF6he \xFCber Boden",t:"number",p:"0"},{k:"entity",l:"Entit\xE4t (Zustand/Leuchten)",list:"ents"},{k:"power",l:"Leistungs-Sensor",list:"ents"}])}${c.type==="tv"||c.type==="monitor"?'<button class="full" id="scr-edit">\u{1F5A5} Bildschirm-Regeln \u2026</button>':""}${c.type==="car"?'<button class="full" id="car-edit">\u{1F697} Auto zuordnen \u2026</button>':""}`)):a?.kind==="site"&&(c=l(this.plan.site?.buildings||[],a.id),c&&(h+=`<h4>Geb\xE4ude</h4>${this.formHtml(c,[{k:"name",l:"Name"},{k:"levels",l:"Geschosse (richten sich nach den Haus-Etagen)",t:"number",s:1,p:"1"},{k:"height",l:"Traufh\xF6he (m)",t:"number",s:.1},{k:"roof.type",l:"Dach",t:"select",o:[["flat","Flach"],["gable","Satteldach"],["shed","Pultdach"]]},{k:"roof.pitch",l:"Neigung (\xB0)",t:"number",s:1},...c.roof?.type==="shed"?[{k:"roof.high",l:"Hohe Seite (zum Nachbarn)",t:"select",o:[["south","S\xFCd"],["north","Nord"],["east","Ost"],["west","West"]],def:"south"}]:[],{k:"visible",l:"Sichtbar",t:"checkbox"}])}${c.roof?.type==="shed"?`${this.partsHtml(c)}<h4>Photovoltaik auf dem Dach</h4>${this.formHtml(c,[{k:"pv.enabled",l:"PV-Module auf dem Dach",t:"checkbox"},{k:"pv.fill",l:"Dachfl\xE4che f\xFCllen",t:"checkbox",def:!0},{k:"pv.orientation",l:"Modulausrichtung",t:"select",o:[["auto","automatisch (mehr Module)"],["landscape","quer"],["portrait","hochkant"]],def:"auto"},{k:"pv.rows",l:"Reihen (ohne F\xFCllen)",t:"number",s:1},{k:"pv.cols",l:"Module je Reihe (ohne F\xFCllen)",t:"number",s:1},{k:"pv.over",l:"Lage entlang des Dachs",t:"select",o:[["","Mitte"],...this.partOptions(c)]},{k:"pv.edge",l:"Lage am Hang",t:"select",o:[["center","Mitte"],["low","unten an der Traufe"],["high","oben am First"]],def:"center"},{k:"pv.wp",l:"Leistung je Modul (Wp)",t:"number",s:10,p:"420"},{k:"pv.entity",l:"Leistungs-Sensor dieser Anlage",list:"ents"}])}`:""}`));h&&(o+=`<div data-obj="sel">${h}</div>`);let u=this.deviceList(n),f=u.filter(p=>!p.explicit).length,d=(this.plan.settings.hiddenEntities||[]).length;o+=`<h4>Ger\xE4te dieser Etage (${u.length})</h4>
      <input id="devfilter" placeholder="Filter \u2026" value="${vn(this._devFilter||"")}">
      <div id="devlist" style="max-height:220px;overflow:auto;margin-top:4px"></div>
      <div class="row"><button id="dev-selall">Alle w\xE4hlen</button><button id="dev-hideauto" ${f?"":"disabled"}>Auto ausblenden (${f})</button></div>
      <button class="full" id="dev-restore" ${d?"":"disabled"}>\u21BA Ausgeblendete zeigen (${d})</button>`,o+=`<h4>Import</h4>
      <button class="full" id="imp-live">\u21E9 Von NeonPlan 3D \xFCbernehmen</button>
      <button class="full" id="imp-file">\u{1F4C2} Datei laden (NeonPlan / Plan / Gel\xE4nde)</button>
      <button class="full" id="exp-file">\u2B06 Plan als Datei sichern</button>`,t.innerHTML=o,this.bindForm(t.querySelector('[data-obj="floor"]'),n,p=>{p.dataset.k==="name"&&this.renderBar()}),c&&this.bindForm(t.querySelector('[data-obj="sel"]'),c,p=>{p.dataset.k==="levels"&&a?.kind==="site"&&(Gc(this.plan,c,c.levels||1),this.renderSide()),p.dataset.k==="height"&&a?.kind==="site"&&(c.storeys=(c.storeys||[]).filter(x=>x<c.height-.3)),(p.dataset.k==="type"||p.dataset.k==="style"||p.dataset.k==="entity"&&a?.kind==="device")&&this.renderSide()}),t.querySelector("[data-plan]")?.addEventListener("change",p=>{this.plan.settings.autoDevices=p.target.checked,this.changed()}),t.querySelector("#grid").onchange=p=>{this.grid=+p.target.value},t.querySelector("#pent")?.addEventListener("change",p=>this.pendingEntity=p.target.value),t.querySelector("#ftype")?.addEventListener("change",p=>this.furnType=p.target.value),a?.kind==="site"&&c&&this.bindParts(t,c),t.querySelector("#scr-edit")?.addEventListener("click",()=>Id(this,c)),t.querySelector("#car-edit")?.addEventListener("click",()=>this.features.find(p=>p instanceof Fs).openCarSettings(c)),this.fillDevList(),t.querySelector("#devfilter").oninput=p=>{this._devFilter=p.target.value,this.fillDevList()},t.querySelector("#dev-selall").onclick=()=>{this.multi=this.deviceList(this.floor).map(p=>({kind:"device",id:p.id})),this.sel=this.multi.length===1?this.multi[0]:null,this.renderSide(),this.draw2D()},t.querySelector("#dev-hideauto").onclick=()=>{this.pushUndo(),this.deviceList(this.floor).filter(p=>!p.explicit).forEach(p=>this.hideEntity(p.entity)),this.changed({side:!0})},t.querySelector("#dev-restore").onclick=()=>{this.pushUndo(),this.plan.settings.hiddenEntities=[],this.changed({side:!0})},t.querySelector("#multi-del")?.addEventListener("click",()=>this.deleteHits([...this.multi])),t.querySelector("#auto-hide")?.addEventListener("click",()=>this.deleteHits([a])),t.querySelector("#auto-pin")?.addEventListener("click",()=>{let p=this.itemOf(a);if(!p)return;this.pushUndo();let x={id:yn(),entity:p.entity,x:p.x,z:p.z};n.devices.push(x),this.sel={kind:"device",id:x.id},this.changed({side:!0})}),t.querySelector("#imp-live").onclick=()=>this.importLive(),t.querySelector("#imp-file").onclick=()=>this.importFile(),t.querySelector("#exp-file").onclick=()=>this.exportFile()}siteLength(t){return _r(t.points,t.roof,this.plan.site?.north??0).L}ensureParts(t){return!t.parts&&t.layout&&(t.parts=Nd(this.siteLength(t),t.layout),delete t.layout),t.parts||[]}partOptions(t){return this.ensureParts(t).map((e,n)=>[`#${n}`,`${n+1}. ${e.name||zs[e.type]||e.type}`])}partsHtml(t){let e=this.ensureParts(t),n=Object.entries(zs);return`<h4>Aufteilung (West \u2192 Ost)</h4>${e.map((r,o)=>`<div class="prow" data-i="${o}">
      <div class="l1"><select data-f="type">${n.map(([a,l])=>`<option value="${a}" ${r.type===a?"selected":""}>${l}</option>`).join("")}</select>
        <button data-a="up" title="nach links (West)">\u2190</button><button data-a="down" title="nach rechts (Ost)">\u2192</button><button data-a="del" title="Teil entfernen">\u{1F5D1}</button></div>
      <div class="l2">${r.type==="carport"?`<input data-f="stalls" type="number" step="1" value="${r.stalls??4}" title="Stellpl\xE4tze"><input data-f="stallWidth" type="number" step="0.1" value="${r.stallWidth??2.9}" title="Breite je Stellplatz (m)">`:`<input data-f="len" type="number" step="0.1" value="${r.len??""}" placeholder="L\xE4nge: Rest" title="L\xE4nge (m), leer = Rest">`}
        ${r.type==="garage"||r.type==="bike"?`<input data-f="door" type="number" step="0.1" value="${r.door??""}" placeholder="T\xFCr (m)" title="T\xFCrbreite (m)">`:""}</div>
      ${r.type==="garage"||r.type==="bike"?`<div class="l3"><select data-f="doorSide" title="An welcher Wand das Tor sitzt">${Object.entries(Ud).map(([a,l])=>`<option value="${a}" ${(r.doorSide||"low")===a?"selected":""}>Tor: ${l}</option>`).join("")}</select></div>`:r.type==="carport"?`<div class="l3"><select data-f="numberFrom" title="Von welchem Ende die Stellpl\xE4tze gez\xE4hlt werden"><option value="east" ${r.numberFrom!=="west"?"selected":""}>Nummer 1 im Osten</option><option value="west" ${r.numberFrom==="west"?"selected":""}>Nummer 1 im Westen</option></select></div>`:""}</div>`).join("")}<button class="full" id="part-add">+ Teil hinzuf\xFCgen</button>
      <div style="opacity:.6;font-size:11px;margin-top:4px">L\xE4nge leer = Rest \xB7 Gesamtl\xE4nge ${this.siteLength(t).toFixed(1)} m \xB7 Carport: Stellpl\xE4tze \xD7 Breite</div>`}bindParts(t,e){t.querySelectorAll(".prow").forEach(n=>{let s=+n.dataset.i;n.querySelectorAll("[data-f]").forEach(r=>{r.onchange=()=>{this.pushUndo();let o=e.parts[s],a=r.dataset.f;a==="type"?(o.type=r.value,o.type==="carport"&&(o.stalls??=4,o.stallWidth??=2.9)):a==="doorSide"||a==="numberFrom"?r.value===(a==="doorSide"?"low":"east")?delete o[a]:o[a]=r.value:o[a]=r.value===""?null:+r.value,this.changed({side:a==="type"})}}),n.querySelectorAll("[data-a]").forEach(r=>{r.onclick=()=>{this.pushUndo();let o=r.dataset.a;if(o==="del")e.parts.splice(s,1);else{let a=o==="up"?s-1:s+1;a>=0&&a<e.parts.length&&([e.parts[s],e.parts[a]]=[e.parts[a],e.parts[s]])}this.changed({side:!0})}})}),t.querySelector("#part-add")?.addEventListener("click",()=>{this.pushUndo(),(e.parts||=[]).push({type:"garage",len:null}),this.changed({side:!0})})}fillDevList(){let t=this.$("#devlist");if(!t)return;let e=(this._devFilter||"").toLowerCase(),n=this._hass?.states||{},s=o=>o.name||n[o.entity]?.attributes?.friendly_name||o.entity,r=this.deviceList(this.floor).filter(o=>!e||o.entity.toLowerCase().includes(e)||s(o).toLowerCase().includes(e));t.innerHTML="",r.slice(0,300).forEach(o=>{let a=document.createElement("div");a.className="dev"+(this.isSel(o.id)?" on":""),a.innerHTML=`<div style="min-width:0;flex:1"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${vn(s(o))}</b><span class="s">${o.explicit?"":"auto \xB7 "}${vn(o.entity)}</span></div><button title="Entfernen" data-del>\u{1F5D1}</button>`,a.onclick=l=>{if(l.target.closest("[data-del]")){this.deleteHits([{kind:"device",id:o.id}]);return}this.sel={kind:"device",id:o.id},this.multi=[],this.cam2.x=o.x,this.cam2.z=o.z,this.renderSide(),this.draw2D()},t.append(a)}),r.length||(t.innerHTML='<div style="opacity:.6;padding:6px">Keine Ger\xE4te</div>')}async importLive(){try{let t=await this._hass.callWS({type:"neonplan3d/building/get"});this.applyImport(t,"NeonPlan 3D (live)")}catch(t){this.msg("NeonPlan 3D nicht erreichbar: "+(t.message||t.code||t))}}importFile(){let t=document.createElement("input");t.type="file",t.accept=".json,application/json",t.onchange=async()=>{try{let e=JSON.parse(await t.files[0].text());this.applyImport(e,t.files[0].name)}catch(e){this.msg("Datei nicht lesbar: "+e.message)}},t.click()}exportFile(){let t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(this.plan,null,1)],{type:"application/json"})),t.download="homeplan3d-plan.json",t.click()}applyImport(t,e){let n=t?.result??t,s=this.plan.floors.some(c=>c.rooms.length||c.walls.length);if(n?.buildings&&!n.floors){this.pushUndo(),this.plan.site={...this.plan.site||{},...n},this.plan=Yi(this.plan),this.showSite=!0,this.renderBar(),this.changed({side:!0}),this.fit(),this.msg(`${n.buildings.length} Geb\xE4ude aus ${e} \xFCbernommen`);return}let r,o=n?.building??n,a=o?.settings&&("wall_exterior"in o.settings||"buttons"in o.settings)||o?.floors?.some(c=>"placements"in c||"cut_height"in c);try{r=a?$d(t):Yi(Jo(n))}catch(c){this.msg("Import fehlgeschlagen: "+c.message);return}if(s&&!confirm("Den vorhandenen Plan durch den importierten ersetzen?"))return;this.pushUndo();let l=this.plan.site;!r.site&&l&&(r.site=l),this.setPlan(r,{fit:!0}),this.editing&&this.renderSide(),this.msg(`${r.floors.length} Etagen aus ${e} \xFCbernommen \u2013 mit \u{1F4BE} speichern`)}deviceList(t){let e=this._hass,n=t.devices.map(o=>({...o,explicit:!0}));if(!e?.entities||!this.plan.settings.autoDevices)return n;let s=new Set(this.plan.floors.flatMap(o=>o.devices.map(a=>a.entity))),r=new Set(this.plan.settings.hiddenEntities||[]);return t.rooms.forEach(o=>{if(!o.area||o.autoDevices===!1)return;let a=Object.keys(e.states).sort().filter(g=>{if(!qd.includes(Je(g)))return!1;let m=e.entities[g];return!m||m.hidden?!1:(m.area_id||e.devices?.[m.device_id]?.area_id)===o.area}),[l,c,h,u]=wi(o.points),f=Math.max(1,Math.floor((h-l)/.8)),d=0,p=0,x=[];for(;x.length<a.length&&p++<400;){let g=d%f,m=Math.floor(d/f),M=[l+.5+g*.8,c+.5+m*.8];if(d++,M[1]>u){x.push([(l+h)/2,(c+u)/2]);continue}rn(M,o.points)&&x.push(M)}a.forEach((g,m)=>{!s.has(g)&&!r.has(g)&&n.push({id:"auto:"+g,entity:g,x:x[m][0],z:x[m][1],explicit:!1})})}),n}climateFor(t){let e=t.climate||{},n=t.area?this.areaClimate(t.area):{};return{temperature:e.temperature||n.temperature||null,humidity:e.humidity||n.humidity||null,co2:e.co2||n.co2||null}}areaClimate(t){let e={temperature:null,humidity:null,co2:null},n=this._hass;if(!t||!n?.entities)return e;let s=Object.keys(n.entities).length+"|"+Object.keys(n.states).length;if(this._areaClimate?.sig!==s&&(this._areaClimate={sig:s,map:new Map}),this._areaClimate.map.has(t))return this._areaClimate.map.get(t);let r={temperature:"temperature",humidity:"humidity",carbon_dioxide:"co2"};for(let o of Object.keys(n.states).sort()){if(Je(o)!=="sensor")continue;let a=n.entities[o];if(!a||a.hidden||a.entity_category&&a.entity_category!=="none"||(a.area_id||n.devices?.[a.device_id]?.area_id)!==t)continue;let l=r[n.states[o].attributes?.device_class];l&&!e[l]&&(e[l]=o)}return this._areaClimate.map.set(t,e),e}updateClimate(t){let e=this._hass?.states;if(!e)return;let n=c=>{let h=c&&e[c]?parseFloat(e[c].state):NaN;return Number.isFinite(h)?h:null},s=n(t.temperature),r=n(t.humidity),o=n(t.co2),a=[];s!=null&&a.push(`${s.toFixed(1)} \xB0C`),r!=null&&a.push(`${Math.round(r)} %`),o!=null&&a.push(`${Math.round(o)} ppm`);let l=new Ot().setHSL((220-(Math.max(15,Math.min(28,s??21))-15)/13*220)/360,.85,.55);a.length&&Ji(t.sprite,a.join(" \xB7 "),s!=null?"#"+l.getHexString():"#19e6ff"),t.sprite.visible=this.showClimate&&a.length>0,this.heatmap&&s!=null?(t.mat.color.copy(l).multiplyScalar(.35),t.mat.emissive.copy(l),t.mat.emissiveIntensity=.6):(t.mat.color.copy(t.base.color),t.mat.emissive.copy(t.base.emissive),t.mat.emissiveIntensity=t.base.ei)}init3D(){this.scene=new So,this.camera=new Ye(50,1,.1,400),this.camera.position.set(14,14,18),this.renderer=new Mo({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.viewEl.prepend(this.renderer.domElement),this.controls=new Xo(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI/2.02,this.controls.addEventListener("start",()=>{this._fly=null}),this.ambient=new Oo(8425664,.9),this.scene.add(this.ambient),this.sunLight=new No(16777215,.7),this.sunLight.position.set(5,18,8),this.scene.add(this.sunLight),this.labelRenderer=new qo({element:this.$("#labels")}),this.world=new ce,this.scene.add(this.world),this.ray=new ko;let t=this.renderer.domElement,e=null;t.addEventListener("pointerdown",r=>{e={x:r.clientX,y:r.clientY,t:Date.now()}}),t.addEventListener("pointerup",r=>{if(!e)return;let o=Math.hypot(r.clientX-e.x,r.clientY-e.y)>5,a=Date.now()-e.t>500;e=null,o||this.pick3D(r,a)});let n=performance.now()/1e3,s=()=>{this._raf=requestAnimationFrame(s),this.controls.update();let r=performance.now()/1e3,o=Math.min(.1,r-n);if(n=r,this._fly){let a=this._fly;a.t=Math.min(1,a.t+o/.8);let l=a.t*a.t*(3-2*a.t);this.camera.position.lerpVectors(a.p0,a.p1,l),this.controls.target.lerpVectors(a.t0,a.t1,l),a.t>=1&&(this._fly=null)}this.dyn.forEach(a=>{a.pulse&&a.on&&a.glow.scale.setScalar(a.baseScale*(1+.05*Math.sin(r*3)))}),this.features.forEach(a=>{a.on&&a.tick(o,r)}),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)};s()}resize(){let t=this.viewEl.clientWidth,e=this.viewEl.clientHeight;t&&e&&(this.renderer.setSize(t,e,!1),this.labelRenderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix());let n=this.edCanvas;n.clientWidth&&(n.width=n.clientWidth*devicePixelRatio,n.height=n.clientHeight*devicePixelRatio,this.draw2D())}extent(){let t=this.plan.floors.flatMap(e=>e.rooms.flatMap(n=>n.points));return this.showSite&&(this.plan.site?.buildings||[]).forEach(e=>e.visible!==!1&&t.push(...e.points)),t.length?wi(t):null}fit(){let t=this.extent();if(!t)return;let[e,n,s,r]=t,o=(e+s)/2,a=(n+r)/2,l=Math.max(s-e,r-n,4),c=_n(this.plan,this.plan.floors.length-1)/2;this.controls.target.set(o,c/2,a),this.camera.position.set(o+l*.55,c+l*.75,a+l*.95),this.cam2={x:o,z:a,s:Math.max(8,Math.min(120,500/l))}}flyToFloor(t){if(!this.camera||!this.controls)return;let e;if(t==null){let f=this.extent();if(!f)return;e=[[f[0],f[1]],[f[2],f[3]]]}else{let f=this.plan.floors[t];if(!f?.rooms.length)return;let d=x=>(this.plan.site?.buildings||[]).some(g=>g.points?.length>2&&x.points.every(m=>rn(m,g.points))),p=f.rooms.filter(x=>!d(x));e=(p.length?p:f.rooms).flatMap(x=>x.points)}let[n,s,r,o]=wi(e),a=Math.max(r-n,o-s,4),l=t==null?_n(this.plan,this.plan.floors.length-1)/2:_n(this.plan,t)+(this.plan.floors[t].height||2.6)/2,c=new z((n+r)/2,Math.max(0,l),(s+o)/2),h=this.camera.position.clone().sub(this.controls.target);h.lengthSq()<1e-6&&h.set(.55,.75,.95),h.normalize(),h.y<.35&&(h.y=.35,h.normalize());let u=a*(t==null?1.35:1.15)+3;this._fly={t:0,p0:this.camera.position.clone(),p1:c.clone().addScaledVector(h,u),t0:this.controls.target.clone(),t1:c}}rebuild3D(){if(!this.world)return;this.features.forEach(a=>a.dispose()),this.$("#labels")?.replaceChildren(),this.world.traverse(a=>{a.geometry?.dispose(),a.material&&!a.material.map&&a.material.dispose?.()}),this.world.clear();let t=Ki[this.theme]||Ki.neon;this.scene.background=new Ot(t.bg),this.scene.fog=new wo(t.bg,60,160);let e=this.editing||this.cut?this.fi:1/0,n=Wd(this.plan,{theme:this.theme,maxFloor:e,showRoof:this.showRoof,showSite:this.showSite,devicesFor:a=>this.deviceList(a),climateFor:a=>this.climateFor(a),glowTex:()=>this.glowTex(),label:(a,l)=>this.label(a,l)});this.world.add(n.root),this.dyn=n.dyn,this.pickables=n.pickables,this.anchors=n.anchors,this.features.forEach(a=>{a.group=new ce,a.on=this.fxOn(a.id),a.group.visible=a.on,this.world.add(a.group),a.build(n.anchors)});let s=this.dyn.some(a=>a.kind==="roomclimate"),r=this.features.map(a=>a.available()?"1":"0").join("");(s!==this.hasClimate||r!==this._fxSig)&&(this.hasClimate=s,this._fxSig=r,this.renderBar());let o=this.extent();if(o){let a=new Fo(120,120,this.theme==="day"?12108502:1912919,this.theme==="day"?13620966:1055798);a.position.set((o[0]+o[2])/2,this.plan.site?.groundY!=null?this.plan.site.groundY-.02:Math.min(0,_n(this.plan,0))-(this.plan.settings.slab??.18)-.02,(o[1]+o[3])/2),this.world.add(a)}this.updateStates()}glowTex(){if(this._glow)return this._glow;let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this._glow=new We(t)}label(t,e){let n=e+"|"+t,s=this._labels.get(n);if(!s){let o=document.createElement("canvas");o.width=384,o.height=64;let a=o.getContext("2d");a.font="bold 30px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle=Ki[e]?.text||"#dfe8ff",a.shadowColor=Ki[e]?.glow||"#19e6ff",a.shadowBlur=8,a.fillText(t,192,32,370),s=new We(o),this._labels.set(n,s)}let r=new Vt(new ii(3,.5),new Ge({map:s,transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=5,r}updateStates(){let t=this.getStates();if(t){this.features.forEach(e=>{e.on&&e.update(t)});for(let e of this.dyn){if(e.kind==="roomclimate"){this.updateClimate(e);continue}let n=t[e.entity];if(!n)continue;let s=!N_.includes(n.state);if(e.on=s,e.kind==="opening"){let r=["on","open","opening","tilted"].includes(n.state);e.pivot&&(e.pivot.rotation.y=r?e.sign*e.maxAngle:0),e.mat&&(e.mat.emissiveIntensity=r?1.2:.5,e.mat.opacity=r?.35:e.type==="door"?.75:.35)}else if(e.kind==="value"){let r=parseFloat(n.state);if(Number.isNaN(r)){e.sprite.visible=!1;continue}let o=n.attributes.unit_of_measurement||"",a=o==="W"&&Math.abs(r)>=1e3?`${(r/1e3).toFixed(2)} kW`:`${Math.round(r*10)/10} ${o}`;Ji(e.sprite,a);let l=this.features.some(c=>c.id==="energy"&&c.on&&c.available())&&this.holo;e.sprite.visible=!l&&(e.always||Math.abs(r)>5)}else if(e.kind==="solar"){let r=parseFloat(n.state)||0;e.mat.emissiveIntensity=.15+Math.min(1,r/e.wp)*1.2}else if(e.kind==="furniture")e.glow.visible=s,e.mats.forEach(r=>r.emissiveIntensity=s?.9:.18);else if(e.kind==="camera")e.glow.visible=!1,e.mesh.material.emissive.setHex(n.state==="unavailable"?0:1697535),e.mesh.material.emissiveIntensity=.55;else{let r=new Ot(16765066),o=n.attributes;o.rgb_color?r=new Ot(`rgb(${o.rgb_color.join(",")})`):e.kind!=="light"&&(r=new Ot(1697535));let a=o.brightness!=null?o.brightness/255:1;e.glow.visible=s,e.glow.material.color.copy(r),e.glow.material.opacity=.3+.7*a,e.mesh.material.emissive.copy(s?r:new Ot(0)),e.mesh.material.emissiveIntensity=s?.4+a:0}}}}pick3D(t,e){let n=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new ht((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),this.camera);let s=this.ray.intersectObjects(this.pickables,!1)[0];if(!s){!this.editing&&this.panelRoom&&(this.panelRoom=null,this.$("#side").classList.add("hidden"));return}let r=s.object.userData;if(!(!this.editing&&this.features.some(o=>o.on&&(e?o.onLongPress(r,t):o.onTap(r,t)))))if(r.entity){if(e||this.editing)return this.moreInfo(r.entity);let o=Je(r.entity);["light","switch","input_boolean","fan"].includes(o)?this._hass.callService("homeassistant","toggle",{entity_id:r.entity}):o==="cover"?this._hass.callService("cover","toggle",{entity_id:r.entity}):o==="lock"?this._hass.callService("lock",this._hass.states[r.entity]?.state==="locked"?"unlock":"lock",{entity_id:r.entity}):this.moreInfo(r.entity)}else r.room&&!this.editing&&(this.panelRoom=r.room,this.renderRoomPanel())}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}renderRoomPanel(){let t=this.$("#side"),e=this.plan.floors.find(c=>c.rooms.some(h=>h.id===this.panelRoom)),n=e?.rooms.find(c=>c.id===this.panelRoom);if(!n)return;t.classList.remove("hidden");let s=this._hass.states,r=this.deviceList(e).filter(c=>rn([c.x,c.z],n.points)),o=this.climateFor(n),a=(c,h)=>c&&s[c]&&s[c].state!=="unavailable"?`${s[c].state}${h}`:null,l=[a(o.temperature," \xB0C"),a(o.humidity," %"),a(o.co2," ppm")].filter(Boolean).join(" \xB7 ");t.innerHTML=`<b>${vn(n.name)}</b>${l?`<div style="opacity:.8;margin:4px 0 6px">${l}</div>`:""}${r.length?"":"<p style='opacity:.6'>Keine Ger\xE4te</p>"}`,r.forEach(c=>{let h=s[c.entity];if(!h)return;let u=document.createElement("div"),f=h.state==="on"||h.state==="open";if(u.className="dev"+(f?" on":""),u.innerHTML=`<div><b>${vn(c.name||h.attributes.friendly_name||c.entity)}</b><br><span class="s">${vn(h.state)}</span></div>`,Je(c.entity)==="light"){let d=document.createElement("input");d.type="range",d.min=1,d.max=255,d.style.width="70px",d.value=h.attributes.brightness||(f?255:1),d.onclick=p=>p.stopPropagation(),d.onchange=()=>this._hass.callService("light","turn_on",{entity_id:c.entity,brightness:+d.value}),u.append(d)}u.onclick=()=>["light","switch","input_boolean","fan"].includes(Je(c.entity))?this._hass.callService("homeassistant","toggle",{entity_id:c.entity}):this.moreInfo(c.entity),u.oncontextmenu=d=>{d.preventDefault(),this.moreInfo(c.entity)},t.append(u)})}initEditor(){let t=this.edCanvas;this.mouse=[0,0];let e=l=>[(l[0]-this.cam2.x)*this.cam2.s+t.width/2,(l[1]-this.cam2.z)*this.cam2.s+t.height/2],n=(l,c)=>[(l*devicePixelRatio-t.width/2)/this.cam2.s+this.cam2.x,(c*devicePixelRatio-t.height/2)/this.cam2.s+this.cam2.z];this.w2s=e;let s=l=>{let c=t.getBoundingClientRect();return[l.clientX-c.left,l.clientY-c.top]},r=(l,c=!0)=>{let h=n(...s(l));return c&&!l.altKey?[gr(h[0],this.grid),gr(h[1],this.grid)]:h},o=null,a=null;t.addEventListener("wheel",l=>{l.preventDefault();let c=n(...s(l));this.cam2.s=Math.max(5,Math.min(250,this.cam2.s*(l.deltaY<0?1.12:.89)));let h=n(...s(l));this.cam2.x+=c[0]-h[0],this.cam2.z+=c[1]-h[1],this.draw2D()},{passive:!1}),t.addEventListener("pointerdown",l=>{if(t.setPointerCapture(l.pointerId),t.focus(),l.button===1||l.button===2){a={x:l.clientX,y:l.clientY,cx:this.cam2.x,cz:this.cam2.z};return}let c=r(l),h=r(l,!1),u=this.floor,f=this.tool;if(f==="select"){let d=this.hit2D(h);if(l.shiftKey&&d){let p=this.multi.length?this.multi:this.sel?[this.sel]:[];this.multi=p.some(x=>x.id===d.id)?p.filter(x=>x.id!==d.id):[...p,d],this.sel=this.multi.length===1?this.multi[0]:null}else if(d){let p=this.multi.length>1&&this.multi.some(g=>g.id===d.id);p||(this.multi=[],this.sel=d),o={items:(p?this.multi:[d]).map(g=>({hit:g,orig:this.snapshotFor(g)})),start:c,undone:!1}}else this.sel=null,this.multi=[],o={marquee:h};this.renderSide(),this.draw2D()}else if(f==="erase"){let d=this.hit2D(h);d&&this.deleteHits([d])}else if(f==="rect"||f==="building")o={rect:c};else if(f==="room")this.draft.length>2&&Math.hypot(c[0]-this.draft[0][0],c[1]-this.draft[0][1])<.01?this.finishRoom():this.draft.push(c);else if(f==="wall")this.draft.length?(this.pushUndo(),u.walls.push({id:yn(),a:this.draft[0],b:c,t:null,h:null}),this.draft=[c],this.changed()):this.draft=[c];else if(f==="door"||f==="window")this.placeOpening(h,f);else if(f==="furn"){this.pushUndo();let[d,p,x]=Zd[this.furnType]||[.6,.6,.8],g={id:yn(),type:this.furnType,x:c[0],z:c[1],rot:0,w:d,d:p,h:x};u.furniture.push(g),this.sel={kind:"furniture",id:g.id},this.changed({side:!0})}else if(f==="device"){if(!this.pendingEntity){this.hint("Erst eine Entit\xE4t im rechten Panel eingeben");return}this.pushUndo();let d={id:yn(),entity:this.pendingEntity,x:c[0],z:c[1]};u.devices.push(d),this.sel={kind:"device",id:d.id},this.changed({side:!0})}this.draw2D()}),t.addEventListener("pointermove",l=>{this.mouse=r(l),a?(this.cam2.x=a.cx-(l.clientX-a.x)*devicePixelRatio/this.cam2.s,this.cam2.z=a.cz-(l.clientY-a.y)*devicePixelRatio/this.cam2.s):o?.rect?(o.cur=this.mouse,this.rectPrev=[o.rect,this.mouse]):o?.marquee?this.marquee=[o.marquee,r(l,!1)]:o?.items&&(o.undone||(this.pushUndo(),o.undone=!0,this.pinAutos(o)),this.moveItems(o,this.mouse,r(l,!1))),this.draw2D()}),t.addEventListener("pointerup",()=>{if(o?.rect&&o.cur){let[l,c]=[o.rect,o.cur];if(Math.abs(l[0]-c[0])>=this.grid&&Math.abs(l[1]-c[1])>=this.grid){this.pushUndo();let h=[[l[0],l[1]],[c[0],l[1]],[c[0],c[1]],[l[0],c[1]]];if(this.tool==="building"){this.plan.site=this.plan.site||{buildings:[]};let u=Fd(h,this.plan.site.buildings.length+1);this.plan.site.buildings.push(u),this.showSite=!0,this.sel={kind:"site",id:u.id}}else{let u={id:yn(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:h};this.floor.rooms.push(u),this.sel={kind:"room",id:u.id}}this.tool="select",this.renderBar(),this.changed({side:!0})}}else if(o?.marquee&&this.marquee){let[l,c]=this.marquee;Math.hypot(c[0]-l[0],c[1]-l[1])*this.cam2.s/devicePixelRatio>6&&(this.selectInRect(l,c),this.renderSide())}else o?.items&&this.rebuild3D();o=null,a=null,this.rectPrev=null,this.marquee=null,this.draw2D()}),t.addEventListener("dblclick",()=>{this.tool==="room"?(this.draft.pop(),this.finishRoom()):this.tool==="wall"&&(this.draft=[])}),t.addEventListener("contextmenu",l=>l.preventDefault()),t.tabIndex=0,t.addEventListener("keydown",l=>{l.key==="Escape"&&(this.draft=[],this.draw2D()),(l.key==="Delete"||l.key==="Backspace")&&(this.multi.length||this.sel)&&this.deleteHits(this.multi.length>1?this.multi:[this.sel]),(l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="z"&&(l.preventDefault(),this.undo())})}finishRoom(){if(this.draft.length>=3){this.pushUndo();let t={id:yn(),name:`Raum ${this.floor.rooms.length+1}`,color:"#19e6ff",area:null,points:this.draft};this.floor.rooms.push(t),this.sel={kind:"room",id:t.id},this.tool="select",this.renderBar(),this.changed({side:!0})}this.draft=[],this.draw2D()}segs(){return da(this.floor,this.plan.settings)}nearestWall(t,e=.6){let n=null;for(let s of this.segs()){let r=ks(t,s.a,s.b);r.d<e+s.t/2&&(!n||r.d<n.d)&&(n={...r,s})}return n}placeOpening(t,e){let n=this.nearestWall(t);if(!n){this.hint("N\xE4her an eine Wand klicken");return}this.pushUndo();let r=gr(n.t*n.s.len,.05)/n.s.len,o={id:yn(),type:e,x:+(n.s.a[0]+(n.s.b[0]-n.s.a[0])*r).toFixed(3),z:+(n.s.a[1]+(n.s.b[1]-n.s.a[1])*r).toFixed(3),rot:n.s.rot,w:e==="door"?.9:1.2,h:e==="door"?2.1:1.3,sill:e==="door"?0:.9,hinge:"left",swing:"in"};this.pendingEntity&&Je(this.pendingEntity)!=="light"&&(o.entity=this.pendingEntity),this.floor.openings.push(o),this.sel={kind:"opening",id:o.id},this.changed({side:!0})}hit2D(t){let e=this.floor,n=12/this.cam2.s;for(let s of this.deviceList(e))if(Math.hypot(t[0]-s.x,t[1]-s.z)<n)return{kind:"device",id:s.id};for(let s of e.openings)if(Math.hypot(t[0]-s.x,t[1]-s.z)<Math.max(n,s.w/2))return{kind:"opening",id:s.id};for(let s of[...e.furniture].reverse()){let r=t[0]-s.x,o=t[1]-s.z,a=Ee(s.rot||0),l=r*Math.cos(a)+o*Math.sin(a),c=-r*Math.sin(a)+o*Math.cos(a);if(Math.abs(l)<=(s.w||.5)/2&&Math.abs(c)<=(s.d||.5)/2)return{kind:"furniture",id:s.id}}for(let s of e.rooms){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"room",id:s.id,vertex:r}}if(this.showSite)for(let s of this.plan.site?.buildings||[]){let r=s.points.findIndex(o=>Math.hypot(t[0]-o[0],t[1]-o[1])<n);if(r>=0)return{kind:"site",id:s.id,vertex:r}}for(let s of e.walls)if(ks(t,s.a,s.b).d<n)return{kind:"wall",id:s.id};for(let s of[...e.rooms].reverse())if(rn(t,s.points))return{kind:"room",id:s.id};if(this.showSite){for(let s of this.plan.site?.buildings||[])if(rn(t,s.points))return{kind:"site",id:s.id}}return null}itemOf(t){let e=this.floor,s={room:e.rooms,wall:e.walls,device:e.devices,opening:e.openings,furniture:e.furniture,site:this.plan.site?.buildings||[]}[t.kind]?.find(r=>r.id===t.id);return!s&&t.kind==="device"&&String(t.id).startsWith("auto:")?this.deviceList(e).find(r=>r.id===t.id):s}isSel(t){return this.sel?.id===t||this.multi.some(e=>e.id===t)}isAuto(t){return t?.kind==="device"&&String(t.id).startsWith("auto:")}hideEntity(t){let e=this.plan.settings.hiddenEntities||=[];e.includes(t)||e.push(t)}isAutoCandidate(t){let e=this._hass,n=e?.entities?.[t];if(!n||!qd.includes(Je(t)))return!1;let s=n.area_id||e.devices?.[n.device_id]?.area_id;return!!s&&this.plan.floors.some(r=>r.rooms.some(o=>o.area===s&&o.autoDevices!==!1))}pinAutos(t){let e=t.items.map(n=>this.isAuto(n.hit)?this.itemOf(n.hit):null);t.items.forEach((n,s)=>{if(!e[s])return;let r={id:yn(),entity:e[s].entity,x:e[s].x,z:e[s].z};this.floor.devices.push(r);let o=n.hit.id;n.hit={kind:"device",id:r.id},n.orig=[r.x,r.z],this.sel?.id===o&&(this.sel=n.hit),this.multi=this.multi.map(a=>a.id===o?n.hit:a)})}selectInRect(t,e){let n=this.floor,[s,r]=[Math.min(t[0],e[0]),Math.max(t[0],e[0])],[o,a]=[Math.min(t[1],e[1]),Math.max(t[1],e[1])],l=(h,u)=>h>=s&&h<=r&&u>=o&&u<=a,c=[];this.deviceList(n).forEach(h=>l(h.x,h.z)&&c.push({kind:"device",id:h.id})),this.multi=c,this.sel=c.length===1?c[0]:null}snapshotFor(t){let e=this.itemOf(t);return t.kind==="room"||t.kind==="site"?Jo(e.points):t.kind==="wall"?Jo([e.a,e.b]):[e.x,e.z]}moveItems(t,e,n){t.items.forEach(s=>this.moveOne(s.hit,s.orig,t.start,e,n))}moveOne(t,e,n,s,r){let o=this.itemOf(t);if(!o)return;let a=s[0]-n[0],l=s[1]-n[1];if(t.kind==="room"||t.kind==="site")o.points=e.map((c,h)=>t.vertex!=null?h===t.vertex?[e[h][0]+a,e[h][1]+l]:c:[c[0]+a,c[1]+l]);else if(t.kind==="wall")o.a=[e[0][0]+a,e[0][1]+l],o.b=[e[1][0]+a,e[1][1]+l];else if(t.kind==="opening"){let c=this.nearestWall(r);if(c){let h=gr(c.t*c.s.len,.05),u=h/c.s.len;o.x=c.s.a[0]+(c.s.b[0]-c.s.a[0])*u,o.z=c.s.a[1]+(c.s.b[1]-c.s.a[1])*u,o.rot=c.s.rot}}else o.x=e[0]+a,o.z=e[1]+l}deleteHits(t){t.length&&(this.pushUndo(),t.forEach(e=>this.deleteOne(e)),this.sel=null,this.multi=[],this.changed({side:!0}))}deleteOne(t){let e=this.floor;if(t.kind==="room"&&t.vertex!=null&&this.tool==="erase"){let n=e.rooms.find(s=>s.id===t.id);if(n.points.length>3){n.points.splice(t.vertex,1);return}}if(t.kind==="device"){let n=this.itemOf(t);if(!n)return;this.isAuto(t)||(e.devices=e.devices.filter(s=>s.id!==t.id)),(this.isAuto(t)||this.isAutoCandidate(n.entity))&&this.hideEntity(n.entity)}else if(t.kind==="site")this.plan.site.buildings=this.plan.site.buildings.filter(n=>n.id!==t.id);else{let n={room:"rooms",wall:"walls",opening:"openings",furniture:"furniture"}[t.kind];e[n]=e[n].filter(s=>s.id!==t.id)}}draw2D(){if(!this.editing)return;let t=this.edCanvas,e=t.getContext("2d"),n=this.cam2.s,s=this.w2s,r=this.floor,o=devicePixelRatio;e.clearRect(0,0,t.width,t.height),e.fillStyle="#0a0d1a",e.fillRect(0,0,t.width,t.height);let a=[this.cam2.x-t.width/2/n,this.cam2.z-t.height/2/n],l=[this.cam2.x+t.width/2/n,this.cam2.z+t.height/2/n];e.lineWidth=1;for(let u=Math.floor(a[0]);u<=l[0];u++){let f=s([u,0])[0];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(f,0),e.lineTo(f,t.height),e.stroke()}for(let u=Math.floor(a[1]);u<=l[1];u++){let f=s([0,u])[1];e.strokeStyle=u%5?"#141b33":"#25345e",e.beginPath(),e.moveTo(0,f),e.lineTo(t.width,f),e.stroke()}this.showSite&&(e.setLineDash([8*o,5*o]),(this.plan.site?.buildings||[]).forEach(u=>{if(u.visible===!1)return;let f=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle="rgba(255,179,71,.08)",e.fill(),e.strokeStyle=f?"#fff":"#ffb347",e.lineWidth=(f?3:2)*o,e.stroke();let d=this.w2s(Ln(u.points));if(e.fillStyle="#ffb347",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${jo(u.points).toFixed(0)} m\xB2${u.levels>1?`, ${u.levels} Geschosse`:""})`,d[0],d[1]),f&&u.points.forEach(p=>{let x=this.w2s(p);e.fillStyle="#fff",e.fillRect(x[0]-4*o,x[1]-4*o,8*o,8*o)}),(u.openings||[]).forEach(p=>{let x=Ee(p.rot||0),g=(p.w||1.1)/2,m=this.w2s([p.x-Math.cos(x)*g,p.z-Math.sin(x)*g]),M=this.w2s([p.x+Math.cos(x)*g,p.z+Math.sin(x)*g]);e.save(),e.setLineDash([]),e.strokeStyle="#ff2bd6",e.lineWidth=4*o,e.beginPath(),e.moveTo(...m),e.lineTo(...M),e.stroke(),e.restore()}),(u.balconies||[]).forEach(p=>{if(!p.points?.length)return;this.path(e,p.points,!0),e.fillStyle="rgba(255,179,71,.18)",e.fill(),e.strokeStyle="#ffb347",e.lineWidth=o,e.stroke();let x=this.w2s(Ln(p.points));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText(p.name||"Balkon",x[0],x[1])}),u.roof?.type==="shed"){let p=_r(u.points,u.roof,this.plan.site?.north??0);e.setLineDash([]),e.strokeStyle="#ffb347",e.lineWidth=o,(ha(p.L,u)||[]).forEach(g=>{let m=g.type==="carport",M=m?g.stalls:1;for(let _=0;_<=M;_++){let v=g.t0+_*(g.t1-g.t0)/M,O=s(ai(p,p.tToU(v),-p.W/2)),A=s(ai(p,p.tToU(v),p.W/2));e.beginPath(),e.moveTo(...O),e.lineTo(...A),e.stroke()}if(g.type==="garage"||g.type==="bike"){let _=la({side:g.doorSide,pt:g,f:p,W:p.W,hLow:u.height||2.8,bike:g.type==="bike",width:g.door}),v=_.sx>_.sz?[_.sx/2,0]:[0,_.sz/2],O=s(ai(p,_.x-v[0],_.z-v[1])),A=s(ai(p,_.x+v[0],_.z+v[1]));e.strokeStyle="#ff2bd6",e.lineWidth=3*o,e.beginPath(),e.moveTo(...O),e.lineTo(...A),e.stroke(),e.strokeStyle="#ffb347",e.lineWidth=o}if(f){e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center";let _=(v,O,A)=>{let P=s(ai(p,p.tToU(O),A));e.fillText(v,P[0],P[1])};m?ca(g,g.numberFrom).forEach(v=>_(String(v.n),v.t,p.W*.3)):_(g.name||zs[g.type]||"",(g.t0+g.t1)/2,p.W*.3)}});let x=s(ai(p,0,-p.W/2+.25));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText("\u25B2 hoch",x[0],x[1]),e.setLineDash([8*o,5*o])}}),this.plan.site?.yard?.points?.length>2&&(this.path(e,this.plan.site.yard.points,!0),e.fillStyle="rgba(170,175,190,.08)",e.fill(),e.setLineDash([3*o,5*o]),e.strokeStyle="rgba(170,175,190,.5)",e.lineWidth=o,e.stroke(),e.setLineDash([])),(this.plan.site?.decks||[]).forEach(u=>{if(!u.points?.length)return;this.path(e,u.points,!0),e.fillStyle="rgba(255,179,71,.18)",e.fill(),e.setLineDash([]),e.strokeStyle="#ffb347",e.lineWidth=o,e.stroke();let f=this.w2s(Ln(u.points));e.fillStyle="#ffb347",e.font=`${10*o}px sans-serif`,e.textAlign="center",e.fillText(u.name||"Terrasse",f[0],f[1])}),(this.plan.site?.gates||[]).forEach(u=>{if(!u.a||!u.b)return;let f=this.w2s(u.a),d=this.w2s(u.b);e.save(),e.setLineDash([]),e.strokeStyle="#9aa5c0",e.lineWidth=4*o,e.beginPath(),e.moveTo(...f),e.lineTo(...d),e.stroke(),e.restore(),e.fillStyle="#9aa5c0",e.font=`${10*o}px sans-serif`,e.textAlign="left",e.fillText(u.name||"Tor",f[0]+6*o,(f[1]+d[1])/2)}),this.plan.site?.cadastreHouse&&(this.path(e,this.plan.site.cadastreHouse,!0),e.strokeStyle="#3ddc84",e.lineWidth=1.5*o,e.stroke()),e.setLineDash([]));let c=this.plan.floors[this.fi-1];if(c&&(e.strokeStyle="#2b3558",e.lineWidth=o,c.rooms.forEach(u=>{this.path(e,u.points,!0),e.stroke()})),r.rooms.forEach(u=>{let f=this.isSel(u.id);this.path(e,u.points,!0),e.fillStyle=(u.color||"#19e6ff")+"22",e.fill(),e.strokeStyle=f?"#fff":u.color||"#19e6ff",e.lineWidth=(f?3:1.5)*o,e.shadowColor=u.color||"#19e6ff",e.shadowBlur=f?8:0,e.stroke(),e.shadowBlur=0,f&&u.points.forEach(p=>{let x=s(p);e.fillStyle="#fff",e.fillRect(x[0]-4*o,x[1]-4*o,8*o,8*o)});let d=s(Ln(u.points));e.fillStyle="#dfe8ff",e.font=`${12*o}px sans-serif`,e.textAlign="center",e.fillText(`${u.name} (${jo(u.points).toFixed(1)} m\xB2)`,d[0],d[1])}),this.segs().forEach(u=>{let f=u.ids.includes(this.sel?.id);e.strokeStyle=f?"#fff":u.free?"#ff9a3c":"#6b7bb0",e.lineWidth=Math.max(2*o,u.t*n),e.globalAlpha=.75,e.beginPath(),e.moveTo(...s(u.a)),e.lineTo(...s(u.b)),e.stroke(),e.globalAlpha=1}),r.openings.forEach(u=>{let f=s([u.x,u.z]),d=u.w/2*n;if(e.save(),e.translate(...f),e.rotate(-(u.rot||0)),e.fillStyle=u.type==="door"?"#ff2bd6":"#6fa8ff",e.fillRect(-d,-3*o,d*2,6*o),u.type==="door"&&u.style!=="passage"){let p=u.hinge==="right"?d:-d,x=u.swing==="out"?-1:1;e.strokeStyle="#ff2bd6",e.lineWidth=o,e.beginPath(),e.moveTo(p,0),e.lineTo(p,x*u.w*n),e.arc(p,0,u.w*n,x*Math.PI/2,u.hinge==="right"?x>0?Math.PI:-Math.PI:0,u.hinge==="right"?x<0:x>0),e.stroke()}this.isSel(u.id)&&(e.strokeStyle="#fff",e.lineWidth=2*o,e.strokeRect(-d,-6*o,d*2,12*o)),e.restore()}),r.furniture.forEach(u=>{let f=Qo(u).map(s);if(e.beginPath(),f.forEach((d,p)=>p?e.lineTo(...d):e.moveTo(...d)),e.closePath(),e.fillStyle=u.type==="rug"?"rgba(143,107,179,.25)":"rgba(224,176,128,.28)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#e0b080",e.lineWidth=(this.isSel(u.id)?2.5:1)*o,e.stroke(),n>25){let d=s([u.x,u.z]);e.fillStyle="#e8d5bd",e.font=`${9*o}px sans-serif`,e.textAlign="center",e.fillText(u.name||u.type,d[0],d[1]+3*o)}}),this.deviceList(r).forEach(u=>{let f=s([u.x,u.z]);if(Je(u.entity)==="camera"){let d=ia(u.x,u.z,u.rot??0,u.fov??90,u.reach??7).map(s);e.beginPath(),d.forEach((p,x)=>x?e.lineTo(...p):e.moveTo(...p)),e.closePath(),e.fillStyle="rgba(25,230,255,.12)",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"rgba(25,230,255,.7)",e.lineWidth=o,e.stroke()}e.beginPath(),e.arc(f[0],f[1],6*o,0,7),e.fillStyle=u.explicit?"#ffd08a":"#88889a",e.fill(),e.strokeStyle=this.isSel(u.id)?"#fff":"#000",e.lineWidth=(this.isSel(u.id)?3:2)*o,e.stroke(),n>25&&(e.fillStyle="#cdd6f4",e.font=`${9*o}px sans-serif`,e.textAlign="left",e.fillText(u.name||u.entity.split(".")[1]||u.entity,f[0]+9*o,f[1]+3*o))}),this.draft.length&&(e.strokeStyle="#fff",e.setLineDash([6,4]),e.lineWidth=2*o,this.path(e,[...this.draft,this.mouse],!1),e.stroke(),e.setLineDash([]),this.tool==="wall"&&this.dim(e,this.draft[0],this.mouse)),this.marquee){let[u,f]=this.marquee.map(s);e.fillStyle="rgba(25,230,255,.08)",e.fillRect(u[0],u[1],f[0]-u[0],f[1]-u[1]),e.strokeStyle="#19e6ff",e.setLineDash([5,4]),e.lineWidth=o,e.strokeRect(u[0],u[1],f[0]-u[0],f[1]-u[1]),e.setLineDash([])}if(this.rectPrev){let[u,f]=this.rectPrev.map(s);e.strokeStyle="#fff",e.setLineDash([6,4]),e.strokeRect(u[0],u[1],f[0]-u[0],f[1]-u[1]),e.setLineDash([]),this.dim(e,this.rectPrev[0],this.rectPrev[1])}let h=s(this.mouse);e.fillStyle="#19e6ff",e.fillRect(h[0]-3,h[1]-3,6,6)}dim(t,e,n){let s=this.w2s([(e[0]+n[0])/2,(e[1]+n[1])/2]);t.fillStyle="#fff",t.font=`${12*devicePixelRatio}px sans-serif`,t.textAlign="left",t.fillText(Math.abs(n[0]-e[0]).toFixed(2)+" \xD7 "+Math.abs(n[1]-e[1]).toFixed(2)+" m",s[0]+6,s[1]-6)}path(t,e,n){t.beginPath(),e.forEach((s,r)=>{let o=this.w2s(s);r?t.lineTo(...o):t.moveTo(...o)}),n&&t.closePath()}};customElements.get("homeplan3d-view")||customElements.define("homeplan3d-view",Jc);var jc=class extends HTMLElement{set hass(t){this._h=t,this._v&&(this._v.hass=t)}set narrow(t){}set panel(t){}connectedCallback(){this.style.display="block",this.style.height="100vh",this._v=document.createElement("homeplan3d-view"),this._v.config={mode:"panel"},this._v.style.height="100%",this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-panel")||customElements.define("homeplan3d-panel",jc);var Qc=class extends HTMLElement{setConfig(t){this._c={...t,mode:"card"},this._v&&(this._v.config=this._c)}set hass(t){this._h=t,this._v&&(this._v.hass=t)}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:8,min_rows:4}}static getStubConfig(){return{type:"custom:homeplan3d-card",height:450}}connectedCallback(){this._v=document.createElement("homeplan3d-view"),this._v.config=this._c||{mode:"card"},this._v.style.cssText=`display:block;height:${this._c?.height||450}px;border-radius:12px;overflow:hidden`,this.append(this._v),this._h&&(this._v.hass=this._h)}};customElements.get("homeplan3d-card")||customElements.define("homeplan3d-card",Qc);window.customCards=window.customCards||[];window.customCards.push({type:"homeplan3d-card",name:"Home Plan 3D",description:"3D-Grundriss mit Ger\xE4testeuerung"});
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
