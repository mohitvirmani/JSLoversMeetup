(function(){
	
//	var clickHandler = function(){
//		chrome.tabs.query({
//			active : true,
//			currentWindow : true
//		}, function(tabs){
//			chrome.tabs
//		})
//	}
//	
//	chrome.contextMenus.create({
//		"title" : "Extract Page Content",
//		"contexts" : ["page", "selection", "image", "link"],
//		"onclick", clickHandler
//	})
	
	var cleanData = function(data){
		var _data  = [];
		for(var i=0; i<data.length; i++){
			if(_data != "")
				_data.push(data[i])
				
		}
		chrome.runtime.sendMessage({
			action : "sendPageContent",
			content : JSON.stringify(_data)
		})
	}
	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
		switch(request.action){
			case "sendPageContentToBS":
				console.log("sendPageContentToBS");
				cleanData(JSON.parse(request.content));
			break;
		}
	})
})