 var bio=
 {
 	"name" : "Bonnie Ray",
	"city" : "Pittsburgh,PA",
	"contacts" : 
	{
		"phone" : "304-707-8811",
		"email" : "bonnieray12@gmail.com",
		"location": "Calcutta,India"

	},
	 	
	"welcomeMessage" : "Welcome to my Resume. Here you will find information about my experience and skills!",
	"skills" : 
		[
	 		"Gradle", "Java", "HTML", "JavaScript","RESTful Web Services", "SVN", "CSS", "Harvest", "Visual Studio"
		],
	 "bioPic" : "IMG_0424.JPG"

 };


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//$("#topContacts").append(HTMLcontactGeneric);
var mobile = HTMLmobile.replace("%data%", bio.contacts.phone);
$("#topContacts").append(mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(email);
var city = HTMLlocation.replace("%data%", bio.city);
$("#topContacts").append(city);


var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
var welcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(welcome);



 var education=
 {
	"name" : "West Virginia University",
	"city" : "Morgantown, West Virginia",
	"major" : "Computer Engineering",
	"minor" : "Computer Science",
	"degree" : "Bachelors of Science",
	"graduated" : "2008-2012",
	"location" : "Morgantown,WestVirginia"
 
  	
 }

 var work=
 {
 	"jobs" : [
 	  {
 		"employer" : "CA Technologies",
 		"date" : "2012-Present",
 		"position" : "Software Engineer",
 		"location" : "Pittsburgh, PA",
 		"description" :  "Re-architecting build process for CA NetMaster using Gradle <br>"+
 						 "Created HTML and JavaScript Webpages for Notification tool for CA Automation Point <br>"+
 						 "Implementing Java GUI to simplify and automate Mainframe IPL shutdown and restart process <br>" +
 						 "Beta Coordinator for product team, assisted customers with new product features for the new release <br>" +
						 "Developing in C++ for Automation Point, a cross-platform product used to manage mainframe disaster recovery, handle output messages from the shutdown/restart process, and allow for remote connectivity to mainframe systems" +
						 "Mentoring Junior Software Engineer in the team"

 	  },

 	  {
 		"employer" : "Disney Research",
 		"date" : "Summer 2011",
 		"position" : "Lab Associate",
 		"location" : "Pittsburgh, PA",
 		"description" : "Created User Interfaces, which processed motion capture data using MATLAB <br>" + 
						"Acquired knowledge of the standards and human design factors which influence GUI design <br>" + 
						"Thrived in creative environment, created appealing GUI from a development and user standpoint"
 	  },
 	

 	  {
 		"employer" : "West Virginia University",
 		"date" : "2010-2011",
 		"position" : "Lab Assistant",
 		"location" : "Morgantown, West Virginia",
 		"description": "Modeled Nanophotonic crystals using various design software for photonics <br>" + 
						"Researched the effect of the crystal size on new fingerprinting tools and camera devices"
 	  }

 	]
 }

var projects=
{

	"project" : [

	{
		"projectDate" : "March 2015",
		"projectTitle" : "JavaScript Resume",
		"projectDescription" : "A webpage resume.",


	},
	{
		"projectDate" : "January 2015",
		"projectTitle" : "Google App Engine Web App",
		"projectDescription" : "Created a blog with Google App Engine using Python. The blog"+
							   " allows users to create their own blog post and view it. The limit<br>"+
							   "on how many blog posts can be added is set to 8 before old data is removed"+
							   " from the webpage."


	},
	{
		"projectDate" : "December 2014",
		"projectTitle" : "Python website",
		"projectDescription" : "Created a movie trailer webpage using Python. This is a webpage"+
								" with different movie posters. When the user clicks the movie <br>"+
								"posters they can view the trailers for that movie."
		
	}

	]
}
//return an array of locations
function locationizer(work_obj)
{
	var myArray = [];

	for (var l in work_obj.jobs)
	{
		myArray.push(work_obj.jobs[l].location);
	}
	return myArray;
}

function displayWork()
{
	for(var j in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var employer= HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[j].position);
		var employerTitle= employer + jobTitle ;
		$(".work-entry:last").append(employerTitle);

		var jobLocation= HTMLworkLocation.replace("%data%", work.jobs[j].location);
		$(".work-entry:last").append(jobLocation);

		var date = HTMLworkDates.replace("%data%", work.jobs[j].date);
		$(".work-entry:last").append(date);

		
		var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$(".work-entry:last").append(jobDescription);

	}
}


if(bio.skills.length >0)
 {
 	$("#header").append(HTMLskillsStart);
 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
 	$("#skills").append(formattedSkill);

 }

//function to find the location of clicks on the webpage
$(document).click(function(loc) 
{ // your code goes here
	var x = loc.pageX;
	var y = loc.pageY;
	console.log("x : " + x + " y : " + y);

 });

//$("#main").append(internationalizeButton);
//changing name formatting bonnie ray === Bonnie RAY
function inName(name)
{
	var nameArray = name.trim().split(" ");
	var intrName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase()+ " " + nameArray[1].toUpperCase();

	return intrName;
}

//encapsulating display property within projects object
projects.display = function()
{
	
	for (proj in projects.project)
	{
		$("#projects").append(HTMLprojectStart);

		var projTitle =HTMLprojectTitle.replace("%data%", projects.project[proj].projectTitle);
		$(".project-entry:last").append(projTitle);

		var projDate= HTMLprojectDates.replace("%data%", projects.project[proj].projectDate);
		$(".project-entry:last").append(projDate);

		var projDes = HTMLprojectDescription.replace("%data%", projects.project[proj].projectDescription);
		$(".project-entry:last").append(projDes);

	}

}

education.display = function()
{
	$("#education").append(HTMLschoolStart);

	var school = HTMLschoolName.replace("%data%", education.name);
	$(".education-entry").append(school);

	var dates = HTMLschoolDates .replace("%data%", education.graduated);	
	$(".education-entry").append(dates);



	var major = HTMLschoolMajor.replace("%data%", education.major);
	$(".education-entry").append(major);


	var degree = HTMLschoolDegree.replace("%data%", education.degree);
	$(".education-entry").append(degree);


	var location = HTMLschoolLocation.replace("%data%", education.city);
	$(".education-entry").append(location);
	
}

$("#mapDiv").append(googleMap)

 projects.display();
 education.display();
 displayWork();
 someArray =locationizer(work);
 newName = inName("bONNIE Ray");



