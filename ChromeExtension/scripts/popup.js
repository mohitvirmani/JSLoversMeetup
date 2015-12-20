(function(){

	document
	.getElementById("buttonYes")
	.addEventListener("click", function(){

		chrome.tabs.query({
			active: true,
			currentWindow : true
		},function(tabs){
			
			chrome.tabs.sendMessage(tabs[0].id, {
				action : "getpagecontent"
			})

		})

	});
	
	var parseList = function(list){
		var listHtml = "";
		for(var i=0; i<list.length; i++){
			listHtml += "<li>" + list[i] +"</li>";
		};
		console.log(listHtml);
		document.getElementById("anchorList").innerHTML = listHtml;
	}
	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
		console.log("request.action",request.action);
		switch(request.action){
			case "sendPageContent":
				console.log("sendPageContent");
				console.log(JSON.parse(request.content));
				parseList(JSON.parse(request.content));
			break;
		}
	})

}())