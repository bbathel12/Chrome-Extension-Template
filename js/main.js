/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/
var callback1 = function(data){
	console.log("this is a callback :"  + data);
}


/*
* callback performed by the tabs.query method on 
* the array of tabs found by query. We are using
* this to get the tabid of the current tab so I 
* can use this message sending api. This also gets
* the value of the #selector input and sends that
* as the message
* @parameter aryTabs: array of tabs found by query
* @return null
*/
var query_callback = function(aryTabs){
	for(var i = 0;i < aryTabs.length; i++){
		var intTabId = aryTabs[i].id
		var message = $('#selector').text();
		chrome.tabs.sendMessage(intTabId, message, {},function(){})
	}
}



$('#selector_form').submit(
	function(e){

		// stop it from actually submiting becuase who knows what
		// that does
		e.preventDefault();

		// get value of selector input 
		var selector = $('#selector').val()

		// get the current tab id so I can send a message with 
		// this stupid message sending set up but it works now 
		//so whatever
		chrome.tabs.query(
		  {currentWindow: true, active : true},
		  query_callback
		)
	}// end function(e)
)// end submit function

