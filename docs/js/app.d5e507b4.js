(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"8a3dc539","chunk-2d0f0e03":"04a21b61","chunk-2d2308c0":"d8958a71"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/WEB_InpenDansim-INPENDANSIM/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showNav?n("Navigation"):e._e(),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-toolbar",[r("v-toolbar-title",[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n("aba7"),width:"150"}})])],1),r("v-spacer"),e.loggedIn?r("v-btn",{attrs:{text:""},on:{click:e.handleLogOut}},[r("span",{staticClass:"mr-2"},[e._v("Log-Out")])]):r("v-btn",{attrs:{text:""},on:{click:function(t){return e.$router.push("/login")}}},[r("span",{staticClass:"mr-2"},[e._v("Log-In")])])],1)},s=[],u=(n("b64b"),n("5530")),c=n("2f62"),l={computed:Object(u["a"])(Object(u["a"])({},Object(c["b"])(["userProfile"])),{},{loggedIn:function(){return Object.keys(this.userProfile).length>0}}),methods:{handleLogOut:function(){this.$store.dispatch("logout")}}},d=l,f=n("2877"),p=n("6544"),h=n.n(p),m=n("8336"),b=n("2fa4"),v=n("71d9"),g=n("2a7f"),w=Object(f["a"])(d,i,s,!1,null,null,null),y=w.exports;h()(w,{VBtn:m["a"],VSpacer:b["a"],VToolbar:v["a"],VToolbarTitle:g["a"]});var P={components:{Navigation:y},computed:{showNav:function(){return!0}}},O=P,j=Object(f["a"])(O,a,o,!1,null,null,null),x=j.exports,k=(n("45fc"),n("d3b7"),n("8c4f")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"home"}},[n("v-btn",{on:{click:e.handleDashboard}},[n("span",[e._v("Dashboard")])]),n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"20",md:"4"}},[n("v-text-field",{attrs:{label:"훈련병 이름 검색"},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword="string"===typeof t?t.trim():t},expression:"searchKeyword"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-btn",{attrs:{disabled:""===e.searchKeyword},on:{click:e.handleSearch}},[n("span",[e._v("Let's write!")])])],1)],1)],1)},I=[],S={data:function(){return{searchKeyword:""}},methods:{handleDashboard:function(){this.$router.push("/dashboard")},handleSearch:function(){this.$router.push({name:"Write",params:{soldier:this.searchKeyword}}),this.searchKeyword=""}}},E=S,R=n("62ad"),D=n("a523"),N=n("0fd9"),U=n("8654"),A=Object(f["a"])(E,_,I,!1,null,null,null),K=A.exports;h()(A,{VBtn:m["a"],VCol:R["a"],VContainer:D["a"],VRow:N["a"],VTextField:U["a"]});var L=n("59ca"),T=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyD3FRUN06mMD-L73bs94oy7st67EhJSxaw",authDomain:"inpen-dansim.firebaseapp.com",databaseURL:"https://inpen-dansim.firebaseio.com",projectId:"inpen-dansim",storageBucket:"inpen-dansim.appspot.com",messagingSenderId:"568175520459",appId:"1:568175520459:web:ef8e5c399a9707720f094e",measurementId:"G-EKB4MK33PW"});L["initializeApp"](T);var V=L["firestore"](),M=L["auth"](),$=V.collection("users");r["a"].use(k["a"]);var C=[{path:"/",name:"Home",component:K},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/login",name:"LogIn",component:function(){return n.e("chunk-2d0f0e03").then(n.bind(null,"9ddf"))}},{path:"/write/:soldier",name:"Write",component:function(){return n.e("chunk-2d2308c0").then(n.bind(null,"ed6a"))}}],W=new k["a"]({mode:"history",base:"/WEB_InpenDansim-INPENDANSIM/",routes:C});W.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!M.currentUser?n("/login"):n()}));var B=W,q=(n("b0c0"),n("96cf"),n("1da1"));r["a"].use(c["a"]);var J=new c["a"].Store({state:{userProfile:{}},mutations:{setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t}},actions:{login:function(e,t){return Object(q["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,M.signInWithEmailAndPassword(t.email,t.password);case 3:a=n.sent,o=a.user,r("fetchUserProfile",o);case 6:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(q["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,M.createUserWithEmailAndPassword(t.email,t.password);case 3:return a=n.sent,o=a.user,n.next=7,$.doc(o.uid).set({name:t.name});case 7:r("fetchUserProfile",o);case 8:case"end":return n.stop()}}),n)})))()},fetchUserProfile:function(e,t){return Object(q["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,$.doc(t.uid).get();case 3:a=n.sent,r("setUserProfile",a.data()),"/login"===B.currentRoute.path&&B.push("/");case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(q["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.signOut();case 3:n("setUserProfile",{}),B.push("/login");case 5:case"end":return t.stop()}}),t)})))()}}}),z=J,F=n("f309");r["a"].use(F["a"]);var G,H=new F["a"]({});r["a"].config.productionTip=!1,M.onAuthStateChanged((function(e){G||(G=new r["a"]({router:B,store:z,vuetify:H,render:function(e){return e(x)}}).$mount("#app")),e&&z.dispatch("fetchUserProfile",e)}))},aba7:function(e,t,n){e.exports=n.p+"img/IPDS_logo.511b4704.jpg"}});
//# sourceMappingURL=app.d5e507b4.js.map