!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(void 0!==e&&null!==e)return e;throw new Error(t||"assertExists: The passed value doesn’t exist")}},function(e,t,n){var o=self.crypto||self.msCrypto;e.exports=function(e){e=e||21;for(var t="",n=o.getRandomValues(new Uint8Array(e));0<e--;)t+="_~getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"[63&n[e]];return t}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),s=n.n(i),a=function(e){return e.getItem("stageUserId")||e.setItem("stageUserId",s()()),e.getItem("stageUserId")||""};var c=()=>{var e={},t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://d2f7xo8n6nlhxf.cloudfront.net/rakam.min.js",t.onload=function(){window.rakam.runQueuedFunctions()};var n=document.getElementsByTagName("script")[0];function o(e,t){e[t]=function(){return this._q.push([t].concat(Array.prototype.slice.call(arguments,0))),this}}n.parentNode.insertBefore(t,n);for(var r=function(){return this._q=[],this},i=["set","setOnce","increment","unset"],s=0;s<i.length;s++)o(r.prototype,i[s]);e.User=r,e._q=[];for(var a=["init","logEvent","logInlinedEvent","setUserId","getUserId","getDeviceId","setSuperProperties","setOptOut","setVersionName","setDomain","setUserProperties","setDeviceId","onload","onEvent","startTimer"],c=0;c<a.length;c++)o(e,a[c]);var u=["getTimeOnPreviousPage","getTimeOnPage","isReturningUser"],d=(window.console?window.console.error||window.console.log:null)||function(){},l=function(e){return function(){d("The method rakam."+e+"() must be called inside rakam.init callback function!")}};for(c=0;c<u.length;c++)e[u[c]]=l(u[c]);return window.rakam=e,window.rakam};var u,d=function(e,t,n,o){var r=c();return r.init(e,t,n,o),r.setUserProperties({resolution:window.screen.width+" × "+window.screen.height}),r.startTimer(!0),r.setSuperProperties({_ip:!0,_user_agent:!0,_referrer:document.referrer,resolution:window.screen.width+" × "+window.screen.height},!0),r},l=function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn-ra.rockcontent.com/ra.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)};!function(e){e.Comment="comment",e.Subscription="subscription",e.Unknown="unknown"}(u||(u={}));var p,m=function(e){var t=e.eventKind,n=e.eventGenerator,o=e.properties;return{url:window.location.toString(),hostname:window.location.hostname,event_kind:t,event_generator:n,allEventProperties:JSON.stringify(o),blog_name:window.chorusAnalytics_blogName||"",post_type:window.chorusAnalytics_postType||"",post_date:window.chorusAnalytics_postDate||"",post_author:window.chorusAnalytics_postAuthor||"",post_categories:window.chorusAnalytics_postCategories||"",post_tags:window.chorusAnalytics_postTags||"",post_word_count:window.chorusAnalytics_postWordCount||0,post_published_by_studio:window.chorusAnalytics_postPublishedByStudio||!1}},f=function(e){return e+""},w=function(){if(window.rakam&&window.chorusAnalytics_rakamInitialized)return window.rakam;throw new Error("“getRakam” function must be called after rakam initialization!")},_=function(){window.chorus_disqusCommentHandler=function(e){w().logEvent(f("chorus_wordpress_form_submit"),m({eventKind:u.Comment,eventGenerator:"disqus",properties:{comment_id:e.id,comment_text:e.text}}))}},g=r()("https://rakam-helper.services.rockstage.io"),h=function(e,t){var n=function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}(t);(function(){if(!("sendBeacon"in navigator))return!1;try{var t=new Blob([n],{type:"application/x-www-form-urlencoded; charset=utf-8"});return navigator.sendBeacon(e,t)}catch(e){return!1}})()||function(){var t=new XMLHttpRequest;t.open("POST",e,!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(n)}()},v=function(e,t){return e.name?"form-field__"+e.name:e.id?"form-field__id__"+e.id:"form-field__index__"+t},y=function(e){return"INPUT"===e.tagName&&"number"===e.type?Number(e.value):void 0!==e.value?e.value:null},b=function(e,t){for(var n=w(),o={form__action:t.action},r=0;r<t.elements.length;r++){var i=t.elements[r];if("password"!==i.type&&("checkbox"!==i.type&&"radio"!==i.type||i.checked)){var s=v(i,r),a=y(i);null!==a?o[s]=a:console.debug("Couldn’t get value of form element:",s)}}var c=function(e){var t=e.getAttribute("action")||"";return-1!==t.indexOf("/wp-comments-post.php")?{kind:u.Comment,generator:"wp-built-in-comments"}:-1!==t.indexOf(".list-manage.com")?{kind:u.Subscription,generator:"mailchimp"}:-1!==t.indexOf("forms.hsforms.com")?{kind:u.Subscription,generator:"hubspot-forms"}:-1!==t.indexOf("wpcf7")?{kind:u.Subscription,generator:"contact-form-7"}:-1!==t.indexOf("/admin-post.php")&&null!==e.querySelector('input[name="action"][value^="rock_convert"]')?{kind:u.Subscription,generator:"rock-convert"}:{kind:u.Unknown,generator:""}}(t),d=c.kind,l=c.generator;n.logEvent(f("chorus_wordpress_form_submit"),m({eventKind:d,eventGenerator:l,properties:o}));var p=Object.keys(o).map(function(e){return o[e]}).filter(function(e){return"string"==typeof e}).filter(function(e){return-1!==e.indexOf("@")&&-1!==e.indexOf(".")&&-1===e.trim().indexOf(" ")})[0];p&&function(e,t){h(g+"/track-user-email",{userId:e,email:t})}(e,p)},k=function(e){p=function(t){var n=t.target;"FORM"===n.tagName&&b(e,n)},document.addEventListener("submit",p,!0)},O=function(){var e=w(),t=r()(document.documentElement),n=t.getElementsByTagName("body")[0],o=window.innerWidth||t.clientWidth||n.clientWidth,i=window.innerHeight||t.clientHeight||n.clientHeight;return{url:window.location.toString(),hostname:window.location.hostname,time_on_page:e.getTimeOnPreviousPage(),returning_session:e.isReturningUser(),color_depth:window.screen.colorDepth,viewport:o+" × "+i,title:document.title,blog_name:window.chorusAnalytics_blogName,post_type:window.chorusAnalytics_postType||"",post_date:window.chorusAnalytics_postDate||"",post_author:window.chorusAnalytics_postAuthor||"",post_categories:window.chorusAnalytics_postCategories||"",post_tags:window.chorusAnalytics_postTags||"",post_word_count:window.chorusAnalytics_postWordCount||0,post_published_by_studio:window.chorusAnalytics_postPublishedByStudio||!1}},x=function(){w().logEvent(f("chorus_wordpress_pageview"),O())};(function(e,t,n){window.chorusAnalytics_isLoaded||(window.chorusAnalytics_isLoaded=!0,window.chorusAnalytics_rakamInitialized?x():(window.chorusAnalytics_rakamInitialized=!0,d(e,t,{apiEndpoint:n,includeUtm:!0,trackClicks:!0,trackForms:!0,includeReferrer:!0},function(){x()})),k(t),_()),window.rca&&window.rca.initialized||l()})(r()("4fqqh9hrvkoftg2d18rna483mdfn9qhfkh02uo9820a6j321j44ju4uv0u4em8jh"),a(localStorage),r()("rakam.services.rockstage.io"))}]);