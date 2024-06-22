// ==UserScript==
// @name		niggasin.space (ISS) user mute
// @namespace		http://niggasin.space/
// @version		1.0n
// @description		nis blocklist
// @author		nervegas
// @match		*://niggasin.space/*
// @icon		https://niggasin.space/media/avatars/digiskg_0V0Kspx.png
// @grant		none
// ==/UserScript==

(


	function() {

		'use strict';
		const BLOCKED_THREAD_MAKERS = ['username1','username2'];
		const BLOCKED_POSTERS = ['username1','username2'];

		var currentUrl=window.location.href;
		if(currentUrl.includes('/latest-threads')||currentUrl.includes('/forum/')){
			hideThreads();
		}
		else if(currentUrl.includes('/thread/')){
			hidePosts()
		}

		function hidePosts(){
			var postAuthor=document.getElementsByClassName('author-name');
			var postsHidden=0;

			for(var x=0;x<postAuthor.length;x++){
				for(var y=0;y<BLOCKED_POSTERS.length;y++){
					if(postAuthor[x].textContent.includes(BLOCKED_POSTERS[y])){
						postAuthor[x].parentElement.parentElement.style.display='none';
						postsHidden++;
					}
				}
			};
			printDebug("🤐 Total posts hidden: "+postsHidden)

		}

		function hideThreads() {
			var threadAuthor=document.getElementsByClassName('thread-author');
			var threadsHidden=0;

			for(var x=0;x<threadAuthor.length;x++){
				for(var y=0;y<BLOCKED_THREAD_MAKERS.length;y++){
					if(threadAuthor[x].textContent.includes(BLOCKED_THREAD_MAKERS[y])){
						threadAuthor[x].parentElement.parentElement.style.display='none';
						threadsHidden++;
					}
				}
			};
			printDebug("🤐 Total threads hidden: "+threadsHidden)
		}

		function printDebug(debugOut) {
			var footerObject=document.getElementsByClassName('page-footer');
			footerObject[0].textContent+=(debugOut);
		}
	}
)();
