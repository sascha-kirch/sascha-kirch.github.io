//JavaScript to fetch from GitHub API. Code inspired by: https://stackoverflow.com/a/18395248/17905764 
// TODO: Add Programming Languages and pagination
function updateGithubFields(){
	var responseObj = JSON.parse(this.responseText);
	document.getElementById("github_image").innerHTML = "<img src=\""+responseObj.avatar_url+"\">"
	document.getElementById("github_public_repos").innerHTML = "Public repos: " + "<a href=\"https://github.com/SaKi1309?tab=repositories\">" +  responseObj.public_repos +"</a>";
	document.getElementById("github_public_gists").innerHTML = "Public gists: " + "<a href=\"https://gist.github.com/SaKi1309\">" +  responseObj.public_gists +"</a>";
	document.getElementById("github_followers").innerHTML = "Followers: " + "<a href=\"https://github.com/SaKi1309?tab=followers\">" + responseObj.followers +"</a>";
	document.getElementById("github_following").innerHTML = "Following: " + "<a href=\"https://github.com/SaKi1309?tab=following\">" +  responseObj.following +"</a>";
}

function updateGithubRepos() {
	var responseObj = JSON.parse(this.responseText);
	for (const element of responseObj) {
		
		let topic_string = ""
		//Get topic of each public repo and represent as tag
		for (const topic of element.topics){
			topic_string += "<span class=\"tag is-rounded is-small\">"+topic+"</span>"
		}
		//Get Infor of each public Repo
		let repo_info_string = ""
		repo_info_string += "<div class=\"box\">"  
		repo_info_string +=	"<strong><a href=\""+element.html_url+"\">"+element.name+" </a></strong>"
		repo_info_string +=	"<div class=\"columns is-multiline\">"
		repo_info_string +=	"<div class=\"column is-one-third\">Watchers: " + element.watchers_count + "</div>"
		repo_info_string +=	"<div class=\"column is-one-third\">Stars: " + element.stargazers_count + "</div>"
		repo_info_string +=	"<div class=\"column is-one-third\">Forks: " + element.forks_count + "</div>"
		//empty container for languages. If element.languages is null, the API also does not return languages. e.g. Githubpage or only markdown repos
		if (element.language != null){
			repo_info_string +=	"<div id=\"github_repo_"+element.name+"\" class=\"column is-full\"></div>" 
		}
		repo_info_string +=	"<div class=\"column is-full\">" + topic_string + "</div>"
		repo_info_string +=	"<div class=\"column is-full\">" + element.description + "</div>"
		repo_info_string +=	"</div>"
		repo_info_string +=	"</div>"
		document.getElementById("github_repos").innerHTML += repo_info_string
		
		//Update languages by performing HTTP Request, that have been created with a certain id. I execute after the div has been created, to ensure, the async call finds the element.
		if (element.language != null){
			var request_repos = new XMLHttpRequest();
			request_repos.onload = function updateGithubLanguages(){
				var responseObj = JSON.parse(this.responseText);
				let languages_string = ""
				for (const [key, value] of Object.entries(responseObj)) {
				  languages_string += "<span class=\"tag is-rounded is-small\">"+key+"</span>"
				}
				document.getElementById("github_repo_"+element.name).innerHTML += languages_string
			}
			request_repos.open('get', element.languages_url, true)
			request_repos.send()
		}
	}
}

var request_basics = new XMLHttpRequest();
request_basics.onload = updateGithubFields;
request_basics.open('get', 'https://api.github.com/users/saki1309', true)
request_basics.send()

var request_repos = new XMLHttpRequest();
request_repos.onload = updateGithubRepos;
request_repos.open('get', 'https://api.github.com/users/saki1309/repos', true)
request_repos.send()
