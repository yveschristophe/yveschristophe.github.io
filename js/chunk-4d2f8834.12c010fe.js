(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d2f8834"],{"4c7e":function(e,t,n){"use strict";var s=n("dbd8"),o=n.n(s);o.a},"5f29":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("FAKE FLIX")]),n("Navbar"),n("h2",[e._v("Vos films favoris")]),n("div",{attrs:{id:"movie_container"}},e._l(e.fav_movies,(function(e){return n("img",{key:e.id,attrs:{src:e,alt:""}})})),0),n("Film")],1)},o=[],i=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("d178")),a=n("bcf0"),r=n("494d"),c={store:r["a"],name:"Favoris",data:function(){return{fav_movies:[]}},components:{Navbar:i["a"],Film:a["a"]},computed:{session_id:function(){return r["a"].state.session_id},getsession_id:function(){return this.session_id}},created:function(){this.getsession_Id()},methods:{getsession_Id:function(){var e=this;fetch("https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=b94d0075dc634f6f48d56ae29e58f3ce&session_id=".concat(this.session_id,"&language=en-US&sort_by=created_at.asc&page=1")).then((function(t){return t.json().then((function(t){console.log("Données Jsonnizées"),console.log(t);var n=!0,s=!1,o=void 0;try{for(var i,a=t.results[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var r=i.value;e.fav_movies.push("https://image.tmdb.org/t/p/w200".concat(r.poster_path),r.id)}}catch(c){s=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(s)throw o}}}))})).catch((function(e){console.log("Une erreur s'est produite"),console.log(e)}))}}},d=c,u=(n("4c7e"),n("2877")),l=Object(u["a"])(d,s,o,!1,null,"b1aec6ea",null);t["default"]=l.exports},dbd8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4d2f8834.12c010fe.js.map