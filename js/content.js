/*
* callback performed when a message is recieved from the
* pop up form. The message should contain the value from 
* the form to highlight on the real page
* @param strMessage: string message sent from chrome extension
*/
var callback = function(strMessage, sender, sendResponse) {
	console.log('message: '+strMessage)
	$(strMessage).css({'background-color':'rgba(255, 0, 0, 0.3)'})
	console.log('message recieved')
};


$(document).ready(function(){
	// attach the onMessage listener with the callback function
	chrome.runtime.onMessage.addListener(callback)
	console.log('listener added')
})
