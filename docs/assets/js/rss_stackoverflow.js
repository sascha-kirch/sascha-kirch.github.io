function updateStackoverflowUserData(){
	var responseObj = JSON.parse(this.responseText);
	let object_string = ""
	object_string += "<a href=\""+responseObj.items[0].link+"\" target=\"_blank\">"
	object_string += "<div>" 
	object_string += "<article class=\"media\">"
    object_string += "<figure class=\"media-left\">"
    object_string += "<p class=\"image is-64x64\"><img src=\""+responseObj.items[0].profile_image+"\" alt=\"Image\"></p>"
    object_string += "</figure>"
    object_string += "<div class=\"media-content\">"
    object_string += "<div class=\"content\">"
    object_string += "<p>"
    object_string += "<strong>"+responseObj.items[0].display_name+"</strong> <br><small>Reputation: "+responseObj.items[0].reputation + "</small>"
    var monthlyGrowth = responseObj.items[0].reputation_change_month
    if(monthlyGrowth > 0){
		object_string += "<small> (<span class=\"has-text-success has-text-weight-bold\">+"+monthlyGrowth+"</span> this month)</small>"
	}
    
    object_string += "<br>"
    object_string += "<small>"
    object_string += "<span><i class=\"fas fa-circle\" style=\"color:gold;\"></i> "+responseObj.items[0].badge_counts.gold+" </span>"
    object_string += "<span><i class=\"fas fa-circle\" style=\"color:silver;\"></i> "+responseObj.items[0].badge_counts.silver+" </span>"
    object_string += "<span><i class=\"fas fa-circle\" style=\"color:#bf8970;\"></i> "+responseObj.items[0].badge_counts.bronze+" </span>"
    object_string += "</small>"
    object_string += "</p>"
    object_string += "</div>"
	object_string += "</article>"
	object_string += "</div>" 
	object_string += "</a>"
	
	//add content to page
	document.getElementById("stackoverflow_rss_user").innerHTML = "<div>"+object_string+"</div>"
}

function updateStackoverflowTopAnswers(){
	var responseObj = JSON.parse(this.responseText);
	for(const answer of responseObj.items){
		let object_string = ""
		
		tag_score_color = ""
		if (answer.is_accepted){
			tag_score_color = "is-success"
		}
		object_string += "<div>"
		object_string += "<div class=\"columns is-vcentered is-mobile\">"
		object_string += "<div class=\"column is-narrow\">"
		object_string += "<span class=\"tag is-medium "+tag_score_color+"\">"+answer.score+"  </span>"
		object_string += "</div>"
		object_string += "<div class=\"column\" id=\"top_question_title_"+answer.question_id+"\"></div>"
		//var answerDate = new Date(answer.creation_date*1000)
		//object_string += "<div class=\"column is-2\">"+answerDate.toDateString()+" </div>"		
		//object_string += "</div>"
		object_string += "</div>"
		
		//add content to page
		document.getElementById("stackoverflow_rss_top_answers").innerHTML += object_string
		
		//fetch text of question and replace with question_title container
		//https://api.stackexchange.com/docs/questions-by-ids
		questionFeed = 'https://api.stackexchange.com/2.3/questions/'+answer.question_id+'?order=desc&sort=activity&site=stackoverflow'
		var request_question = new XMLHttpRequest();
		request_question.onload = function(){
			var questionResponse = JSON.parse(this.responseText);
			document.getElementById("top_question_title_"+answer.question_id).innerHTML = "<a href=\""+questionResponse.items[0].link+"\" target=\"blank\"> "+questionResponse.items[0].title+"</a>"	
		}
		request_question.open('get', questionFeed, true)
		request_question.send()
	}
	
}

function updateStackoverflowTopTags(){
	var responseObj = JSON.parse(this.responseText);
	
	for(const tag of responseObj.items){
		let object_string = ""
		object_string += "<div class=\"pb-1\">"
		object_string += "<nav class=\"level is-mobile\">"
		object_string += "<div class=\"level-left\">"
		object_string += "<div class=\"level-item\"><span class=\"tag is-rounded is-medium\">"+tag.tag_name+"</span></div>"
		object_string += "</div>"
		object_string += "<div class=\"level-right\">"
		object_string += "<div class=\"level-item\"><span>Count: "+tag.answer_count+" </span></div>"
		object_string += "<div class=\"level-item\"><span>Score: "+tag.answer_score+" </span></div>"		
		object_string += "</div>"
		object_string += "</div>"
		object_string += "</nav>"
		//add content to page
		document.getElementById("stackoverflow_rss_top_tags").innerHTML += object_string	
	}
}

function updateStackoverflowRecentAnswers(){
	var responseObj = JSON.parse(this.responseText);
	for(const answer of responseObj.items){
		let object_string = ""
		
		tag_score_color = ""
		if (answer.is_accepted){
			tag_score_color = "is-success"
		}
		object_string += "<div>"
		object_string += "<div class=\"columns is-vcentered is-mobile\">"
		object_string += "<div class=\"column is-narrow\">"
		object_string += "<span class=\"tag is-medium "+tag_score_color+"\">"+answer.score+"  </span>"
		object_string += "</div>"
		object_string += "<div class=\"column\" id=\"recent_question_title_"+answer.question_id+"\"></div>"
		//var answerDate = new Date(answer.creation_date*1000)
		//object_string += "<div class=\"column is-2\">"+answerDate.toDateString()+" </div>"		
		//object_string += "</div>"
		object_string += "</div>"
		
		//add content to page
		document.getElementById("stackoverflow_rss_recent_answers").innerHTML += object_string
		
		//fetch text of question and replace with question_title container
		//https://api.stackexchange.com/docs/questions-by-ids
		questionFeed = 'https://api.stackexchange.com/2.3/questions/'+answer.question_id+'?order=desc&sort=activity&site=stackoverflow'
		var request_question = new XMLHttpRequest();
		request_question.onload = function(){
			var questionResponse = JSON.parse(this.responseText);
			document.getElementById("recent_question_title_"+answer.question_id).innerHTML = "<a href=\""+questionResponse.items[0].link+"\" target=\"blank\"> "+questionResponse.items[0].title+"</a>"	
		}
		request_question.open('get', questionFeed, true)
		request_question.send()
	}
	
}

//Stack Exchange API: https://api.stackexchange.com/docs. Many do not require authentification.
//https://api.stackexchange.com/docs/users-by-ids
userFeed = 'https://api.stackexchange.com/2.3/users/17905764?order=desc&sort=reputation&site=stackoverflow'
var request_user = new XMLHttpRequest();
request_user.onload = updateStackoverflowUserData;
request_user.open('get', userFeed, true)
request_user.send()

//https://api.stackexchange.com/docs/answers-on-users
activityFeed = 'https://api.stackexchange.com/2.3/users/17905764/answers?pagesize=5&order=desc&sort=votes&site=stackoverflow'
var request_activities = new XMLHttpRequest();
request_activities.onload = updateStackoverflowTopAnswers;
request_activities.open('get', activityFeed, true)
request_activities.send()

//https://api.stackexchange.com/docs/top-answer-tags-on-users
tagsFeed = 'https://api.stackexchange.com/2.3/users/17905764/top-answer-tags?pagesize=5&site=stackoverflow'
var request_tags = new XMLHttpRequest();
request_tags.onload = updateStackoverflowTopTags;
request_tags.open('get', tagsFeed, true)
request_tags.send()

//https://api.stackexchange.com/docs/answers-on-users
tagsFeed = 'https://api.stackexchange.com/2.3/users/17905764/answers?pagesize=5&order=desc&sort=activity&site=stackoverflow'
var request_tags = new XMLHttpRequest();
request_tags.onload = updateStackoverflowRecentAnswers;
request_tags.open('get', tagsFeed, true)
request_tags.send()
