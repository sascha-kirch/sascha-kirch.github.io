function updateGithubFields() {
	try {
		_updateGithubFields(this.responseText)
	} catch (e) {
		_updateGithubSectionOnError(e)
	}
}

function updateGithubRepos() {
	// _updateGithubRepos(this.responseText)
	try {
		_updateGithubRepos(this.responseText)
	} catch (e) {
		_updateGithubSectionOnError(e)
	}
}

function _updateGithubSectionOnError(e) {

	let object_string = ""
	object_string += "<div class=\"column\">"
	object_string += "<div class=\"notification is-warning is-light\">"
	object_string += "<p>Oops...</p>"
	object_string += "<p>The GitHub API is not responding with valid data, probably you've hit the rate limit. <br> Please visit me on GitHub:</p>"
	object_string += "<p><a href=\"https://github.com/sascha-kirch\" target=\"_blank\">https://github.com/sascha-kirch</a></p>"
	// object_string += "<p>"+e+"</p>"
	object_string += "</div>"
	object_string += "</div>"

	//add content to page
	document.getElementById("github_section").innerHTML = object_string
}

function _updateGithubFields(responseText) {
	var responseObj = JSON.parse(responseText);
	let user_info_string = ""
	user_info_string += "<div class=\"columns is-full is-mobile is-vcentered\">"
	user_info_string += "<div class=\"column is-narrow has-text-centered\">"
	user_info_string += "<figure class=\"image is-128x128 is-centered is-inline-block mx-0\">"
	user_info_string += "<img class=\"is-rounded\" src=\"" + responseObj.avatar_url + "\"/>"
	user_info_string += "</figure>"
	user_info_string += "</div>"
	user_info_string += "<div class=\"column\">"
	user_info_string += "<div>"
	user_info_string += "<i class=\"fas fa-user\"></i>"
	user_info_string += "<span> User: <a href=\"https://github.com/sascha-kirch\" target=\"_blank\">sascha-kirch</a></span>"
	user_info_string += "</div>"
	user_info_string += "<div>"
	user_info_string += "<i class=\"fas fa-book\"></i>"
	user_info_string += "<span> Public repos: <a href=\"https://github.com/sascha-kirch?tab=repositories\" target=\"_blank\">" + responseObj.public_repos + "</a></span>"
	user_info_string += "</div>"
	user_info_string += "<div>"
	user_info_string += "<i class=\"fas fa-code\"></i>"
	user_info_string += "<span> Public gists: <a href=\"https://gist.github.com/sascha-kirch\" target=\"_blank\">" + responseObj.public_gists + "</a></span>"
	user_info_string += "</div>"
	user_info_string += "<div>"
	user_info_string += "<i class=\"fas fa-users\"></i>"
	user_info_string += "<span> Followers: <a href=\"https://github.com/sascha-kirch?tab=followers\" target=\"_blank\">" + responseObj.followers + "</a></span>"
	user_info_string += "<span> Following: <a href=\"https://github.com/sascha-kirch?tab=following\" target=\"_blank\">" + responseObj.following + "</a></span>"
	user_info_string += "</div>"
	user_info_string += "</div>"  //column
	user_info_string += "</div>"  //columns

	document.getElementById("github_user").innerHTML = user_info_string
	console.log(user_info_string)
}

function sortJSON(arr, key, asc = true) {
	return arr.sort((a, b) => {
		let x = a[key];
		let y = b[key];
		if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
		else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
	});
}


function _updateGithubRepos(responseText) {
	var responseObj = JSON.parse(responseText);

	//sort according update date
	sortedResponse = sortJSON(responseObj, "pushed_at", false);

	let repo_info_string = ""
	repo_info_string += "<div class=\"columns is-multiline\">"
	for (const element of sortedResponse) {

		let topic_string = ""
		//Get topic of each public repo and represent as tag
		for (const topic of element.topics) {
			topic_string += "<span class=\"tag is-small is-info is-light mr-1\" >" + topic + "</span>"
		}
		//Get Infor of each public Repo
		repo_info_string += "<div class=\"column is-full\">"
		repo_info_string += "<div class=\"box\">"
		repo_info_string += "<div class=\"columns is-multiline is-mobile\">"
		repo_info_string += "<div class=\"column is-full pb-0 pt-0 mb-3 mt-0\">"
		repo_info_string += "<a class=\"is-size-4\" href=\"" + element.html_url + "\" target=\"_blank\">" + element.name + " </a>"
		repo_info_string += "<span class=\"ml-1 mr-1\" style=\"float:right\"><i class=\"fas fa-eye\"></i> " + element.watchers_count + "</span>"
		repo_info_string += "<span class=\"ml-1 mr-1\" style=\"float:right\"><i class=\"far fa-star\"></i> " + element.stargazers_count + "</span>"
		repo_info_string += "<span class=\"ml-1 mr-1\" style=\"float:right\"><i class=\"fas fa-code-branch\"></i> " + element.forks_count + "</span>"
		repo_info_string += "</div>"

		// Description
		if (element.description != null) {
			repo_info_string += "<div class=\"column is-full pb-0 pt-0 mb-3 mt-0\">" + element.description + "</div>"
		}

		//empty container for languages. If element.languages is null, the API also does not return languages. e.g. Githubpage or only markdown repos
		if (element.language != null) {
			repo_info_string += "<div id=\"github_repo_" + element.name + "\" class=\"column is-full pt-0 pb-0 mt-1 mb-1\"></div>"
		}

		repo_info_string += "<div class=\"column is-full pt-0 pb-0\">" + topic_string + "</div>"
		repo_info_string += "</div>"
		repo_info_string += "</div>"
		repo_info_string += "</div>"

		//Update languages by performing HTTP Request, that have been created with a certain id. I execute after the div has been created, to ensure, the async call finds the element.
		if (element.language != null) {
			var request_repos = new XMLHttpRequest();
			request_repos.onload = function updateGithubLanguages() {
				var responseObj = JSON.parse(this.responseText);
				let languages_string = ""
				for (const [key, value] of Object.entries(responseObj)) {
					languages_string += "<span class=\"tag is-small is-success is-light mr-1\">" + key + "</span>"
				}
				document.getElementById("github_repo_" + element.name).innerHTML += languages_string
			}
			request_repos.open('get', element.languages_url, true)
			request_repos.send()
		}
	}
	repo_info_string += "</div>"
	document.getElementById("github_repos").innerHTML += repo_info_string
}

var request_basics = new XMLHttpRequest();
request_basics.onload = updateGithubFields;
request_basics.open('get', 'https://api.github.com/users/sascha-kirch', true)
request_basics.send()

var request_repos = new XMLHttpRequest();
request_repos.onload = updateGithubRepos;
request_repos.open('get', 'https://api.github.com/users/sascha-kirch/repos', true)
request_repos.send()
