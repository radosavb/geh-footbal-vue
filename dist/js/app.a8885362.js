(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var u=a[i];0!==n[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"1a12":function(e,t,a){},"2ea9":function(e,t,a){"use strict";a("426e")},"426e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{attrs:{id:"wrapper"}},[a("div",{attrs:{id:"field"}},[a("Field",{key:e.componentKey,attrs:{msg:"Welcome to Your Vue.js App"},on:{"change-component":function(t){return e.changeComponentKey()}}})],1),a("div",{attrs:{id:"admin-panel"}},[a("AdminPanel",{key:e.componentKey1,on:{"change-component":function(t){return e.changeComponentKey()}}})],1),a("div",{attrs:{id:"chat"}},[a("Chat")],1)]),a("Footer")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.username,expression:"username"}],attrs:{id:"uputstva"}},[e._v(' > Za potvrdu dolaska se prijavi klikom na slobodnu poziciju (fudbalsku loptu) na terenu. Takodje mozes da prijavis gej drugara tako sto ces uneti njegovo ime i kliknuti na dugme "Prijavi drugara".'),a("br"),e._v(' > Za otkazivanje dolaska klikni na dugme "Otkazi igru" ili otkazi za drugara klikom na odgovarajuce crveno dugme.'),a("br"),e._v(' > Ako si vec otkazao, ponovo se vrati u "neizjasnjene" klikom na plavo dugme.'),a("br"),a("b",{staticClass:"text-danger"},[e._v(">>>Ako promena nije odmah prikzana ponovo učitaj stranicu!!!")])]),a("div",{staticClass:"field"},[e.players.length<10?a("span",{staticClass:"prijavljeni bolder rounded  h5 bg-light p-1"},[e._v("Trenutno prijavljeno "),a("b",{staticClass:"bg-dark text-light p-1"},[e._v(e._s(e.players.length))]),e._v(" igraca")]):a("span",{staticClass:"h4 text-light bg-danger p-3 rounded bold ml-3 "},[e._v(" URAAAAAA!!! IGRA SE!!! "),a("b",{staticClass:"rounded-circle text-danger p-2 bg-light"},[e._v(e._s(e.players.length))]),e._v(" GEJEVA SE PRIJAVILO!!!")]),e._l(e.polja,(function(t,r){return a("div",{key:t.position,staticClass:"player",class:[{default_slika:-1==e.pozicije.indexOf(t.name)&&-1==e.stalni_igraci.indexOf(t.name)},{blur:-1==e.pozicije.indexOf(t.name)},t.position,t.name],on:{click:function(t){e.selectedIndex(r),e.modalf()}}},[e._v(e._s(t.name)+" ")])})),a("div",{directives:[{name:"show",rawName:"v-show",value:e.modal,expression:"modal"}],staticClass:"mod"},[a("span",{staticClass:"float-right",on:{click:function(t){e.modal=!1}}},[e._v("x")]),a("div",{staticClass:"slicica",class:e.username,on:{click:function(t){e.registruj(),e.ponovnaPrijava()}}},[e._v("Prijavi sebe")]),a("hr"),a("form",{on:{submit:function(t){t.preventDefault(),e.registruj_drugara(),e.ponovnaPrijava()}}},[a("small",[e._v("ili unesi ime drugara i klikni na dugme")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.drugar,expression:"drugar"}],attrs:{placeholder:"",type:"text"},domProps:{value:e.drugar},on:{input:function(t){t.target.composing||(e.drugar=t.target.value)}}}),a("input",{attrs:{type:"submit",value:"Prijavi drugara"}})])])],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.zauzeto,expression:"zauzeto"}],staticClass:" zauzeto alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("strong",[e._v("Zauzeto!")]),e._v(" Izaberite drugu poziciju. "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(t){e.zauzeto=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.obavestenje_reg_drugara,expression:"obavestenje_reg_drugara"}],staticClass:" alert alert-info alert-dismissible fade show",attrs:{role:"alert"}},[a("strong",[e._v("!")]),e._v(" "+e._s(e.obavestenje_reg_drugara)+" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(t){e.obavestenje_reg_drugara=""}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])])},i=[],u=(a("c975"),a("a434"),a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),l={name:"Field",props:{msg:String},data:function(){return{polja:[{name:"gk_home",position:"gk_home"},{name:"dmf_home",position:"dmf_home"},{name:"aml_home",position:"aml_home"},{name:"amr_home",position:"amr_home"},{name:"cf_home",position:"cf_home"},{name:"sub1_home",position:"sub1_home"},{name:"sub2_home",position:"sub2_home"},{name:"gk_away",position:"gk_away"},{name:"dmf_away",position:"dmf_away"},{name:"aml_away",position:"aml_away"},{name:"amr_away",position:"amr_away"},{name:"cf_away",position:"cf_away"},{name:"sub1_away",position:"sub1_away"},{name:"sub2_away",position:"sub2_away"}],pozicije:["gk_home","dmf_home","aml_home","amr_home","cf_home","sub1_home","sub2_home","gk_away","dmf_away","aml_away","amr_away","cf_away","sub1_away","sub2_away"],stalni_igraci:["radosavb","brankog","filiph","milosd","vladimirb","vladimirz","nikolaz","nikolao","nikolac","goranp","srdjanv","milosj","markov","branislavm","bogdanm"],players:[],users:[],player_index:null,username:localStorage.getItem("username"),tok:localStorage.getItem("token"),modal:!1,drugar:"",moji_igraci:[],zauzeto:!1,response:"",obavestenje_reg_drugara:"",kc:0}},methods:{fUpdate:function(){this.forceUpdate()},selectedIndex:function(e){this.player_index=e},proba:function(){console.log("object")},modalf:function(){this.pozicije.indexOf(this.polja[this.player_index].name)>-1?(this.modal=!0,this.zauzeto=!1):this.zauzeto=!0},ispis:function(){console.log(this.player_index)},registruj:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+this.tok},body:JSON.stringify({position:this.polja[this.player_index].position})},fetch("https://flask-football-app.herokuapp.com/player/"+this.username,t).then(this.get_players()).then(this.reRenderAll()),this.modal=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),registruj_drugara:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+this.tok},body:JSON.stringify({username:this.username,position:this.polja[this.player_index].position})},fetch("https://flask-football-app.herokuapp.com/drugar/"+this.drugar,t),a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"JWT "+this.tok},body:JSON.stringify({position:this.polja[this.player_index].position})},fetch("https://flask-football-app.herokuapp.com/player/"+this.drugar,a).then(this.get_players()).then(this.reRenderAll()),this.modal=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),ponovnaPrijava:function(){var e={method:"DELETE",headers:{"Content-Type":"application/json"}};fetch("https://flask-football-app.herokuapp.com/otkazan/"+this.username,e).then(this.get_players()).then(this.reRenderAll())},get_players:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://flask-football-app.herokuapp.com/players");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.players=a.players,this.update_players();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),get_users:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"JWT "+this.tok}},e.next=3,fetch("https://flask-football-app.herokuapp.com/users",t);case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,this.users=r.users,401==r["status_code"]&&(this.isAuthorized="false",localStorage.removeItem("username"));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),update_players:function(){for(var e=0,t=0;t<this.players.length;t++)for(var a=0;a<this.polja.length;a++)this.players[e].position==this.polja[a].position&&(this.polja.splice(a,1,this.players[e]),e++)},reRenderAll:function(){this.$emit("change-component")}},created:function(){this.get_players()}},c=l,p=(a("2ea9"),a("2877")),m=Object(p["a"])(c,o,i,!1,null,"2d291e62",null),d=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"nav-bar"},[a("div",[a("span",{staticClass:"logo"},[e._v("Geh Football")]),a("span",{staticClass:"termin"},[e._v("Sledeći termin:"),a("b",{staticClass:"termin-datum"},[e._v(" "+e._s(e.termin))])])])])},f=[],v={data:function(){return{termin:"Nedelja 15.11.2020"}}},_=v,g=(a("5dfc"),Object(p["a"])(_,h,f,!1,null,null,null)),w=g.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"wrapper"}},[a("div",{attrs:{id:"chat"}})])}],y={data:function(){return{}}},j=y,z=(a("ddf6"),Object(p["a"])(j,b,k,!1,null,"7276a01c",null)),x=z.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-panel"},["true"===e.isAuthorized?a("div",[a("span",{staticClass:"ml-1 mt-2",attrs:{id:"pozdrav"}},[e._v("Welcome "+e._s(e.username_show))]),a("span",{staticClass:"slicica-profil",class:e.username_show}),a("input",{directives:[{name:"show",rawName:"v-show",value:"true"===e.isAuthorized&&!e.otkazani.some((function(t){return t.username===e.username_show})),expression:"isAuthorized ==='true' && !otkazani.some(e => e.username === username_show) "}],staticClass:" bg-danger ml-1 mt-1",attrs:{type:"button",value:"Otkazi igru"},on:{click:function(t){return e.otkazivanje()}}}),a("input",{directives:[{name:"show",rawName:"v-show",value:"true"===e.isAuthorized&&e.otkazani.some((function(t){return t.username===e.username_show}))&&!e.players.some((function(t){return t.name===e.username_show})),expression:"isAuthorized ==='true' && otkazani.some(e => e.username === username_show) && !players.some(e => e.name === username_show)"}],staticClass:"bg-primary mt-1 ml-1",attrs:{type:"button",value:"Vrati se u neodredjene"},on:{click:function(t){return e.ponovnaPrijava()}}}),a("input",{staticClass:"bg-info ml-1 mt-1",attrs:{type:"button",value:"Log Out"},on:{click:function(t){return e.logout()}}}),a("hr"),a("form",{staticClass:"promeni-sifru",staticStyle:{display:"inline-block"},on:{submit:function(t){return t.preventDefault(),e.promenaSifre()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nova_sifra,expression:"nova_sifra"}],attrs:{id:"promeni sifru",type:"password",placeholder:"Unesi novu sifru"},domProps:{value:e.nova_sifra},on:{input:function(t){t.target.composing||(e.nova_sifra=t.target.value)}}}),e._v(e._s(" ")+" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.provera_sifre,expression:"provera_sifre"}],attrs:{id:"ponovi sifru",type:"password",placeholder:"Ponovi novu sifru"},domProps:{value:e.provera_sifre},on:{input:function(t){t.target.composing||(e.provera_sifre=t.target.value)}}}),e._v(e._s(" ")+" "),a("input",{attrs:{type:"submit",value:"Promeni sifru"}})])]):a("form",{staticClass:"login-form",on:{submit:function(t){return t.preventDefault(),e.autorizacija(t)}}},[a("tr",[e._m(0),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username_login",type:"text",placeholder:"Unesite username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),a("tr",[e._m(1),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password_login",type:"password",placeholder:"Unesite sifru"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("input",{attrs:{type:"submit",value:"Log In"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.greska_prijava,expression:"greska_prijava"}],staticClass:" zauzeto alert alert-warning alert-dismissible fade show mt-2",attrs:{role:"alert"}},[a("strong",[e._v("GRESKA!")]),e._v(" "+e._s(e.greska_prijava)+" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(t){e.greska_prijava=""}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),a("div",e._l(e.drugari,(function(t){return a("span",{directives:[{name:"show",rawName:"v-show",value:t.username==e.username_show,expression:"drugar.username == username_show"}],key:t.drugar},[a("button",{staticClass:"btn btn-danger p-1 mr-1 mb-1",on:{click:function(a){e.promeniDrugara(t),e.otkaziDrugara()}}},[e._v("Otkazi za "+e._s(t.drugar))])])})),0),a("form",{directives:[{name:"show",rawName:"v-show",value:"true"===e.isAuthorized&&e.admins.includes(e.username_show),expression:"isAuthorized === 'true' && admins.includes(username_show)"}],staticClass:"login-form admin-form",on:{submit:function(t){return t.preventDefault(),e.add_user(t)}}},[a("h5",[e._v("Dodaj novog korisnika")]),a("tr",[e._m(2),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.new_user_username,expression:"new_user_username"}],attrs:{id:"username",type:"text",placeholder:"Unesite username"},domProps:{value:e.new_user_username},on:{input:function(t){t.target.composing||(e.new_user_username=t.target.value)}}})])]),a("tr",[e._m(3),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.new_user_password,expression:"new_user_password"}],attrs:{id:"password",type:"password",placeholder:"Unesite sifru"},domProps:{value:e.new_user_password},on:{input:function(t){t.target.composing||(e.new_user_password=t.target.value)}}})])]),e._m(4)]),a("div",{directives:[{name:"show",rawName:"v-show",value:"true"===e.isAuthorized&&e.username_show,expression:"isAuthorized === 'true' && username_show"}],staticClass:"admin-panel-list"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.obavestenje_o_promeni,expression:"obavestenje_o_promeni"}],staticClass:" zauzeto alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[a("strong",[e._v("USPEH!")]),e._v(" "+e._s(e.obavestenje_o_promeni)+" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(t){e.obavestenje_o_promeni=""}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),a("h6",[e._v("LOBBY:")]),a("ul",e._l(e.users,(function(t){return a("li",{key:t.username},[a("span",{staticClass:"status",class:{otkazao:e.otkazani.some((function(e){return e.username===t.username})),prijavljen:e.players.some((function(e){return e.name==t.username}))}}),e._v(" "+e._s(t.username)+" "),a("span",{staticClass:"slicica",class:t.username})])})),0),a("ul",e._l(e.players,(function(t){return a("li",{directives:[{name:"show",rawName:"v-show",value:!e.users.some((function(e){return e.username==t.name})),expression:"!users.some(e => e.username == player.name)"}],key:t.name},[a("span",{staticClass:"status prijavljen"}),e._v(e._s(t.name)),a("span",{staticClass:"slicica default"})])})),0)])])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("label",{attrs:{for:"username_login"}},[a("strong",[e._v("Username:")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("label",{attrs:{for:"password_login"}},[a("strong",[e._v("Password:")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("label",{attrs:{for:"username"}},[e._v("Username novog korisnika: ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("label",{attrs:{for:"password"}},[e._v("Password novog korisnika: ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"submit-wrapper"},[a("input",{attrs:{type:"submit",value:"Add User"}})])}],A=(a("a4d3"),a("e01a"),{name:"AdminPanel",data:function(){return{users:[],players:[],otkazani:[],drugari:[],admins:["radosavb"],username:"",username_show:localStorage.getItem("username"),password:"",tok:localStorage.getItem("token"),isAuthorized:localStorage.getItem("isAuthorized"),greska_prijava:"",new_user_username:"",new_user_password:"",nova_sifra:"",provera_sifre:"",obavestenje_o_promeni:"",otkazani_drugar:null,isLoading:!1}},created:function(){this.get_users(),this.get_players(),this.get_otkazane(),this.get_drugare()},methods:{get_users:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"JWT "+this.tok}},e.next=3,fetch("https://flask-football-app.herokuapp.com/users",t);case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,this.users=r.users,401==r["status_code"]&&(localStorage.setItem("isAuthorized","false"),localStorage.removeItem("username"));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),get_players:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://flask-football-app.herokuapp.com/players");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.players=a.players;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),get_otkazane:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://flask-football-app.herokuapp.com/otkazani");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.otkazani=a.otkazani;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),get_drugare:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://flask-football-app.herokuapp.com/drugari");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.drugari=a.drugari;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),promeniDrugara:function(e){this.otkazani_drugar=e.drugar},otkaziDrugara:function(){var e={method:"DELETE",headers:{"Content-Type":"application/json"}};fetch("https://flask-football-app.herokuapp.com/player/"+this.otkazani_drugar,e);var t={method:"DELETE",headers:{"Content-Type":"application/json"}};fetch("https://flask-football-app.herokuapp.com/drugar/"+this.otkazani_drugar,t).then(this.reRenderAll())},otkazivanje:function(){var e={method:"POST",headers:{"Content-Type":"application/json"}};fetch("https://flask-football-app.herokuapp.com/otkazan/"+this.username_show,e);var t={method:"DELETE",headers:{"Content-Type":"application/json"}};fetch("https://flask-football-app.herokuapp.com/player/"+this.username_show,t).then(this.reRenderAll())},ponovnaPrijava:function(){var e={method:"DELETE",headers:{"Content-Type":"application/json"}};fetch("https://flask-football-app.herokuapp.com/otkazan/"+this.username_show,e).then(this.reRenderAll())},add_user:function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.new_user_username,password:this.new_user_password})};fetch("https://flask-football-app.herokuapp.com/register",e),this.get_users()},autorizacija:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})};fetch("https://flask-football-app.herokuapp.com/auth",t).then((function(e){return e.json()})).then((function(t){t["access_token"]?(localStorage.setItem("isAuthorized","true"),localStorage.setItem("token",t.access_token),localStorage.setItem("username",e.username),e.tok=t.access_token,window.location.reload()):(e.greska_prijava=t["description"],console.log(e.greska_prijava))}))},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.setItem("isAuthorized","false"),window.location.reload()},promenaSifre:function(){var e=this;if(this.nova_sifra==this.provera_sifre){var t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:this.nova_sifra})};fetch("https://flask-football-app.herokuapp.com/users/"+this.username_show,t).then((function(e){return e.json()})).then((function(t){e.obavestenje_o_promeni=t.msg}))}this.nova_sifra="",this.provera_sifre=""},reRenderAll:function(){this.$emit("change-component")}},computed:{uslov:function(){return""==this.username}}}),S=A,P=(a("c736"),Object(p["a"])(S,C,O,!1,null,"21dd654c",null)),E=P.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("strong",[e._v("Copyright Geh Football 2020 ©")])])}],R={data:function(){return{}}},I=R,$=(a("760c"),Object(p["a"])(I,T,N,!1,null,null,null)),J=$.exports,D={name:"App",components:{Field:d,Navbar:w,Chat:x,AdminPanel:E,Footer:J},data:function(){return{title:"Fudbal",componentKey:0,componentKey1:-100}},methods:{changeComponentKey:function(){this.componentKey+=1,this.componentKey1+=1}}},U=D,K=(a("034f"),Object(p["a"])(U,n,s,!1,null,null,null)),L=K.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(L)}}).$mount("#app")},"5dfc":function(e,t,a){"use strict";a("1a12")},"760c":function(e,t,a){"use strict";a("c3f5")},"85ec":function(e,t,a){},ab60:function(e,t,a){},c3f5:function(e,t,a){},c736:function(e,t,a){"use strict";a("ab60")},ca4d:function(e,t,a){},ddf6:function(e,t,a){"use strict";a("ca4d")}});
//# sourceMappingURL=app.a8885362.js.map