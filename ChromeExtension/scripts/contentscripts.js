(function(){

	var getPageContent = function()
		{
			var anchors = document.getElementsByTagName("a"),
			responseData = [];

			for (var i = 0; i < anchors.length; i++) {
				if(anchors[i].innerText != "")
					responseData.push(anchors[i].innerText);
			};
			
			console.log(JSON.stringify(responseData));
			chrome.runtime.sendMessage({
				action : "sendPageContentToBS",
				content : JSON.stringify(responseData)
			})
		}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
		switch(request.action){
			case "getpagecontent":
				console.log("getpagecontent");
				getPageContent();
			break;
		}
	})

}())