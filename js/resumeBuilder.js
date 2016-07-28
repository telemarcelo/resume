var bio = {
	"name" : "Marcelo Antunes", 
	"role" : "Math/CS Teacher",
	"contact" : {
		"mobile" : " 941-735-1174",
		"email" : " telemarcelo@gmail.com",
		"github" : " telemarcelo",
		"twitter" : " telemarcelo",
 		"location" : " Hefei, China"
	},
	"welcomeMessage_1": "Dedicated CS/Math Teacher with a strong desire to communicate the beauty and importance of the new literacy.<BR>",
	"welcomeMessage_2": "An amateur artist and musician who would like to use these skills as a vehicle for teaching technology.<BR><BR>",
	"biopic" : "images/portrait-small.jpg",
	"skills" : ['Teaching','Programming','Web Design', 'Game Design','Risk Management',
	,'Languages', 'Soccer Coaching']
};

bio.display = function(){
//var work = {"jobs":[employer, title, location, dates worked and description.]}
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$('#header').prepend(formattedName + " " + formattedRole);

	var contacts = [];
	contacts.push(HTMLmobile.replace("%data%", bio.contact.mobile));
	contacts.push(HTMLemail.replace("%data%", bio.contact.email));
	contacts.push(HTMLgithub.replace("%data%", bio.contact.github));
	contacts.push(HTMLtwitter.replace("%data%", bio.contact.twitter));
	contacts.push(HTMLlocation.replace("%data%", bio.contact.location));
	for(index in contacts){
		$('#topContacts').append(contacts[index]);
		$('#footerContacts').append(contacts[index]);
	}

	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	$('#header').append(formattedPic);

	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage_1);
	$('#header').append("<p></p>" + formattedMessage);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage_2);
	$('#header').append("<p></p>" + formattedMessage);
	
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(index in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
			$("#skills").append(formattedSkill);
		}
	}
}

var education = {
	"schools": [{
		"name": "Harvard University",
		"location": "Cambridge, MA",
		"degree": "Master of Science",
		"major": "Applied Mathematics",
		"dates" : "1996", 
		"url" : "?"
	},{
		"name": "Harvard College",
		"location": "Cambridge, MA",
		"degree": "Bachelor of Arts",
		"major": "Applied Mathematics",
		"dates" : "1994", 
		"url" : "?"
	}],
	"professional": [{
		"name": "Society of Actuaries",
		"degree": "Associate of the Society of Actuaries, 2007"
	}],
	"online": [{
		"title": "Front-End Web Developer",
		"School": "Udacity",
		"dates": "2016",
		"URL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};

//needs work
education.display = function(){
	if(education.schools.length > 0){
		$("#education").append(HTMLschoolStart);
		for(index in education.schools){
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
			$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
			$(".education-entry:last").append(formattedSchoolDates+formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	if(education.online.length > 0){
		$(".education-entry:last").append(HTMLonlineClasses);
		for(index in education.schools){
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[index].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[index].School);
			$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[index].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[index].URL);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}


var work = {
	"jobs":[{
		"employer" : "Hefei No. 1 High School",
		"title" : "Calculus Instructor",
		"location" : "Hefei, China",
		"dates" : "9/1/2016 - Future",
		"description" : "Teach four sections of AP Calculus"
	},{
		"employer" : "Saint Stephen’s Episcopal School",
		"title" : "Computer Science Instructor",
		"location" : "Bradenton, FL",
		"dates" : "8/15/2014 - 12/31/2015",
		"description" : "Taught AP Computer Science A, Honors Computer Science, and Intro to Computer Science"
	},{
		"employer" : "Self-Employed",
		"title" : "App Developer",
		"location" : "Chicago, IL",
		"dates" : "6/1/2010 - 6/1/2013",
		"description" : "Worked on a variety of app prototypes and entrepreneurial projects"
	},{
		"employer" : "Nico Trading",
		"title" : "Risk Manager",
		"location" : "Chicago, IL",
		"dates" : "5/1/2007 - 5/1/2010",
		"description" : "Modeled the risk of the firm's entire options portfolio in Crude Oil, Natural Gas, US Treasuries, Eurodollars, Fed Funds, Wheat, Soy, Corn, and Gold."
	},{
		"employer" : "Aegon Institutional Markets",
		"title" : "Senior Actuarial Analyst",
		"location" : "Louisville, KY",
		"dates" : "5/1/2004 - 5/1/2007",
		"description" : "Risk Reporting: tasks included S&P Capital Modeling, Municipal Contract cash flow projections, liquidity modeling, and other project and risk reports.  <br>Valuation Area: Tasks included Cash Flow Testing, Embedded Value, and Loss Recognition. Numerous other projects to expand business and protect firm’s capital."
	}]}

work.display = function(){
//var work = {"jobs":[employer, title, location, dates worked and description.]}
	if(work.jobs.length > 0){
		$("#workExperience").append(HTMLworkStart);
		for(index in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDate =  HTMLworkDates.replace("%data%", work.jobs[index].dates);
			var formattedLocation =  HTMLworkLocation.replace("%data%", work.jobs[index].location);
			$(".work-entry:last").append(formattedDate + formattedLocation);
			var formattedDescription =  HTMLworkDescription.replace("%data%", work.jobs[index].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}


var projects = {
	"projects":[{
		"title" : "Mr. Brainstorms",
		"dates" : "8/15/2014 - 12/31/2015",
		"description" : "Website for programming and robotics educational programs for kids.",
		"image_url" : "images/MrBrainstorms-small.jpg"
	},{
		"title" : "Eyepublic",
		"dates" : "8/15/2014 - 12/31/2015",
		"description" : "A website to store my online resume, projects, and hobbies.",
		"image_url" : "images/Eyepublic-small.jpg"
	},{
		"title" : "MarCuban",
		"dates" : "8/15/2014 - 12/31/2015",
		"description" : "A frogger like game where Marc Cuban has to transport rum from Cuba <br>to Kingston without being arrested by the Trump Coast Guard.",
		"image_url" : "images/MarCuban-small.jpg"
	}],
}

projects.display = function(){
	for(index in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].image_url);
		$(".project-entry:last").append(formattedProjectImage);
	}
	$(".project-entry:last").append("<br>");
	$(".project-entry:last").append("<br>");
}


bio.display();
projects.display();
work.display();
education.display();

//var projects = {"projects":[ title, dates worked, description, img URL]}





function locationizer(work_obj) {
    var locations = [];
    for(job in work.jobs){
        var newLocation = work.jobs[job].location;
        locations.push(newLocation);
    }
    console.log(locations);
    return locations;
}

locationizer(work);

$('#mapDiv').append(googleMap);
//https://developers.google.com/maps/documentation/javascript/tutorial
//https://d3js.org/


$("#main").append(internationalizeButton);
var inName = function(name){
	name = name.split(" ");
	var firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	var secondName = name[1].toUpperCase();
	return secondName + " " + firstName;
}
// de-internationalize button???
/*




/*
var work = {"jobs":[employer, title, location, dates worked and description.]}
var projects = {"projects":[ title, dates worked, description, and an images array with URL strings for project images.]}
var statement = employer, title, location, dates worked and description.
 add detailed description when hovering or something like that (bring info from big resume)*/
// add link to SAT rescaled


/*
var formattedRole = HTMLheaderRole.replace("%data%",role);
var formattedName = HTMLheaderName.replace("%data%",bio.name);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#main').prepend(skills);

This is empty on purpose! Your code to build the resume will go here.
 

var formattedName = HTMLheaderName.replace("%data%","Marcelo Antunes");
$("#header").append(formattedName)

var skills = ["teaching", "learning"];

var bio = {"name":"Marcelo Antunes", "age":44, "skills":skills, "bioPic":"url"};

var work = {"position":"unemployed", "Years Worked":10};
var jobs = ["Saint Stephen's", "Nico Trading"];

var education = {};

education["School"] = "Harvard";

education["Years"] = "1994-1998";
console.log(bio.skills = true);
if(bio.skills = true){
	$("#header").append(HTMLskillsStart);
}

$("#main").append(work["position"]);
$("#main").append(education.School);

function displayWork(){
	for(job in jobs){
		var formattedJob = HTMLworkEmployer.replace("%data%",jobs[job]);
		$("#header").append(formattedJob);
	}	
}

function displayProject(){
	for(project in projects){
		var formattedProject = HTMLworkEmployer.replace("%data%",jobs[job]);
		$("#header").append(formattedJob);
	}	
}


$("#main").append(internationalizeButton);

function inName(name){
	var nameArray = name.split();
	var upperName = nameArray[0] + " " + nameArray[1].toUpperCase;
	return upperName;
}


displayWork();
*/