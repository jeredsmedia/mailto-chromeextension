chrome={extension:{sendRequest:function(a,b){var c="c"+window.Date.now();var d=function(e){if(e.name!=="resp"||e.message.callbackToken!==c){return}b(e.message.data);safari.self.removeEventListener("message",d,false)};safari.self.addEventListener("message",d,false);safari.self.tab.dispatchMessage("req",{data:a,callbackToken:c})}}};