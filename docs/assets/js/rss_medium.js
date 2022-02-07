function updateMediumCard(){
	var responseObj = JSON.parse(this.responseText);
	let object_string = ""
	//hack to obtain link to prifile by removing /feed
	var profileLink = responseObj.feed.url.replace("/feed", "")
	
	//Go through all posts
	for (const item of responseObj.items){
		
		object_string += "<div class=\"column is-three-fifths is-offset-one-fifth\">"
		object_string += "<div class=\"card\">"
		object_string += "<div class=\"card-image\">"
		object_string += "<figure class=\"image \">"
		object_string += "<img src=\""+item.thumbnail+"\" alt=\"Placeholder image\">"
		object_string += "</figure>"
		object_string += "</div>"
		object_string += "<div class=\"card-content\">"

		object_string += "<p class=\"title is-4\">"+item.title+"</p>"
		object_string += "<p class=\"subtitle is-6\">by <a href=\""+profileLink+"\" target=\"_blank\">"+item.author+"</a> "
		dateTime = item.pubDate.split(" ")
		object_string += "<time><span class=\"tag is-small\">"+dateTime[0]+"</span></time></p>"
		
		
		object_string += "<div class=\"content\">"
		object_string += "<p>"
		for (const category of item.categories){
			object_string += "<span class=\"tag is-rounded is-small is-info is-light\">"+category+"</span>"
		}
		object_string += "</p>"
		let startIndex = item.description.indexOf("<p>") + 3 //+3 to compensate for <p>
		let stopIndex = item.description.indexOf("</p>")
		//TODO: might not work properly if HTML attribute is sliced in half
		//limit to max 200 characters
		//if ((stopIndex - startIndex) > 200){
		//	stopIndex = startIndex + 200;
		//}
		let stringValue = item.description.slice(startIndex,stopIndex) 
		console.log(startIndex)
		console.log(stopIndex)
		console.log(stringValue)
		
		object_string += "<p>" + stringValue + "...</p>"

		
		object_string += "</div>"
		object_string += "</div>"
		object_string += "<footer class=\"card-footer\">"
		object_string += "<a href=\""+item.guid+"\" target=\"_blank\" class=\"card-footer-item\">Read full post</a>"
		object_string += "</footer>"
		object_string += "</div>"
		object_string += "</div>"

	}
	
	//add content to page
	document.getElementById("medium_cards").innerHTML = "<div>"+object_string+"</div>"
}

//When calling the feed directly, I get CORS errors. There workarround is, redirecting the request over rss2json.com api e.g. https://rss2json.com/#rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40SaschaKirch .
feed_url = 'https://medium.com/feed/@SaschaKirch'
request_url = "https://api.rss2json.com/v1/api.json?rss_url=" + feed_url

var request_basics = new XMLHttpRequest();
request_basics.onload = updateMediumCard;
request_basics.open('get', request_url, true)
request_basics.send()
