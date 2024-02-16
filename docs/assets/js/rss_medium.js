function updateBlogPosts(){
	try{
		updateMediumBlogPosts(this.responseText)
	} catch (e){
		updateBlogPostsOnError()
	}
}

function updateBlogPostsOnError(){
	let object_string = ""
	object_string += "<div class=\"column\">"
	object_string += "<div class=\"box\">"
	object_string += "<h4>Oops...</h4>"
	object_string += "<p>Medium's RSS feed is currently not available, hence data cannot be pulled. <br> Please visit my blog on Medium to see all my posts.</p>"
	object_string += "<p><a href=\"https://medium.com/@SaschaKirch\" target=\"_blank\">https://medium.com/@SaschaKirch</a></p>"
	object_string += "</div>"
	object_string += "</div>"

	//add content to page
	document.getElementById("blog_posts").innerHTML = "<div>"+object_string+"</div>"
}

function extractFirstImageLink(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
}

function updateMediumBlogPosts(responseText){

	var responseObj = JSON.parse(responseText);

	let object_string = ""
	//hack to obtain link to prifile by removing /feed
	var profileLink = responseObj.feed.url.replace("/feed", "")

	object_string += "<div class=\"columns is-multiline\">"

	//Go through all posts
	for (const item of responseObj.items){

		const img_path = extractFirstImageLink(item.content);

		//object_string += "<div class=\"column is-full\">"
		object_string += "<div class=\"column is-one-third\">"
		object_string += "<div class=\"box\">"
		// object_string += "<div class=\"columns is-vcentered\">"
		object_string += "<div class=\"columns is-multiline\">"

		//Image Column
		// object_string += "<div class=\"column is-one-third\">"
		object_string += "<div class=\"column is-full\">"
		object_string += "<a href=\""+item.guid+"\" target=\"_blank\" >"
		object_string += "<figure class=\"image\">"
		object_string += "<img src=\""+img_path+"\" alt=\"Placeholder image\">"
		object_string += "</figure>"
		object_string += "</a>"
		object_string += "</div>"

		// Content Column
		object_string += "<div class=\"column is-full\">"
		object_string += "<p align=\"left\" class=\"title is-5\">"+item.title+"</p>"
		object_string += "<p align=\"left\" class=\"subtitle is-7\"><br>by <a href=\""+profileLink+"\" target=\"_blank\">"+item.author+"</a> "
		dateTime = item.pubDate.split(" ")
		object_string += "<time><span>, "+dateTime[0]+"</span></time></p>"
		object_string += "<div class=\"content\">"
		object_string += "<p>"
		for (const category of item.categories){
			object_string += "<span class=\"tag is-rounded is-small is-info is-light\">"+category+"</span>"
		}
		object_string += "</p>"
		let startIndex = item.description.indexOf("<p>") + 3 //+3 to compensate for <p>
		let stopIndex = item.description.indexOf("</p>")
		let stringValue = item.description.slice(startIndex,stopIndex)
		object_string += "<p>" + stringValue + "...</p>"
		object_string += "<p><a href=\""+item.guid+"\" target=\"_blank\" >Read full post</a></p>"
		object_string += "</div>"
		object_string += "</div>"

		object_string += "</div>"
		object_string += "</div>"
		object_string += "</div>"

	}
	object_string += "</div>"

	//add content to page
	document.getElementById("blog_posts").innerHTML = "<div>"+object_string+"</div>"
}


//When calling the feed directly, I get CORS errors. There workarround is, redirecting the request over rss2json.com api e.g. https://rss2json.com/#rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40SaschaKirch .
feed_url = 'https://medium.com/feed/@SaschaKirch'
request_url = "https://api.rss2json.com/v1/api.json?rss_url=" + feed_url


var request_basics = new XMLHttpRequest();
request_basics.onload = updateBlogPosts;
request_basics.open('get', request_url, true)
request_basics.send()
