window.addEventListener("load",function(){var i,mailtoLinks=[],allHref=document.querySelectorAll("[href], [HREF]");for(i=0;i<allHref.length;i++){if(/^mailto\:.+/i.test(allHref[i].href))mailtoLinks.push(allHref[i])}window.removeEventListener("load",arguments.callee);if(mailtoLinks.length){chrome.extension.sendRequest("email",function(email){var mailto,i;for(mailto=0;mailto<mailtoLinks.length;mailto++){var match=mailtoLinks[mailto].href.match(/^mailto\:(.+)$/i);if(!match)continue;var queryparts={};var params=("to="+match[1]).replace(/\?/,'&').split('&');for(i=0;i<params.length;i++){var split=params[i].split('=');queryparts[split[0].toLowerCase()]=unescape(split[1]||"")}if(queryparts.to)queryparts.to=queryparts.to.replace(/^.*\<(.+\@.+\..+)\>$/,"$1");if(queryparts.cc)queryparts.cc=queryparts.cc.replace(/^.*\<(.+\@.+\..+)\>$/,"$1");var link="";switch(email){case"hotmail":var hotmaillink="compose?To=";hotmaillink+=(queryparts.to||"");hotmaillink+=(queryparts.cc?"&CC="+queryparts.cc:"");hotmaillink+=(queryparts.subject?"&subject="+queryparts.subject:"");hotmaillink+=(queryparts.body?"&body="+queryparts.body:"");link="http://mail.live.com/?rru="+escape(hotmaillink);break;case"gmail":var gmaillink=(queryparts.to||"");gmaillink+=(queryparts.cc?"&cc="+queryparts.cc:"");gmaillink+=(queryparts.subject?"&su="+queryparts.subject:"");gmaillink+=(queryparts.body?"&body="+queryparts.body:"");link="https://mail.google.com/mail/?view=cm&tf=1&to="+gmaillink;break;case"ymail":var ymaillink=(queryparts.to||"");ymaillink+=(queryparts.cc?"&Cc="+queryparts.cc:"");ymaillink+=(queryparts.subject?"&Subject="+queryparts.subject:"");ymaillink+=(queryparts.body?"&Body="+queryparts.body:"");link="http://compose.mail.yahoo.com/?To="+ymaillink;break}link=link.replace("'",'"');mailtoLinks[mailto].setAttribute("onclick","window.open('"+link+"', '_new');return false;")}})}});