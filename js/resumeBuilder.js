var bio = {
    "name": "Marcelo Antunes",
    "role": "Math/CS Teacher",
    "contacts" : {
        "mobile": " 941-735-1174",
        "email": " telemarcelo@gmail.com",
        "github": " telemarcelo",
        "twitter": " telemarcelo",
        "location": " Hefei, China"
    },
    "welcomeMessage": "Dedicated CS/Math Teacher with a strong desire to co" + 
    "mmunicate the beauty and importance of the new literacy.<BR><BR><BR>",
    "skills": ['Teaching', 'Programming', 'Web Design', 'Game Design', 'Risk' + 
    'Management', 'Languages', 'Soccer Coaching'],
    "biopic": "images/portrait-small.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').prepend(formattedName + " " + formattedRole);

    var contacts = [];
    contacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    contacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    contacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    contacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    contacts.push(HTMLlocation.replace("%data%", bio.contacts.location));
    contacts.forEach(function(contact){
        $('#topContacts, #footerContacts').append(contact);
    });

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $('#header').append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').append("<p></p>" + formattedMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill){
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

var education = {
    "schools": [{
        "name": "Harvard University",
        "location": "Cambridge, MA",
        "degree": "Master of Science",
        "majors": ["Applied Mathematics"],
        "dates": "1996",
        "url": "http://www.harvard.edu/"
    }, {
        "name": "Harvard College",
        "location": "Cambridge, MA",
        "degree": "Bachelor of Arts",
        "majors": ["Applied Mathematics"],
        "dates": "1994",
        "url": "http://www.harvard.edu/"
    }],
    "professional": [{
        "name": "Society of Actuaries",
        "degree": "Associate of the Society of Actuaries, 2007"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-" + 
        "end-web-developer-nanodegree--nd001"
    }]
};

//needs work
education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
        	$("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", 
                school.name);
            var formattedSchoolName = formattedSchoolName.replace("#", 
                school.url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", 
                school.degree);
            $(".education-entry:last").append(formattedSchoolName + 
                formattedSchoolDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", 
                school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", 
                school.location);
            $(".education-entry:last").append(formattedSchoolDates + 
                formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", 
                school.majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        })
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(online) {
        	$("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", 
                online.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", 
                online.school);
            $(".education-entry:last").append(formattedOnlineTitle + 
                formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", 
                online.dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", 
                online.URL);
            $(".education-entry:last").append(formattedOnlineURL);
        })
    }
};


var work = {
    "jobs": [{
        "employer": "Hefei No. 1 High School",
        "title": "Calculus Instructor",
        "location": "Hefei, China",
        "dates": "9/1/2016 - Future",
        "description": "Teach four sections of AP Calculus"
    }, {
        "employer": "Saint Stephen’s Episcopal School",
        "title": "Computer Science Instructor",
        "location": "Bradenton, FL",
        "dates": "8/15/2014 - 12/31/2015",
        "description": "Taught AP Computer Science A, Honors Computer Science, "+
        "and Intro to Computer Science"
    }, {
        "employer": "Self-Employed",
        "title": "App Developer",
        "location": "Chicago, IL",
        "dates": "6/1/2010 - 6/1/2013",
        "description": "Worked on a variety of app prototypes and entrepreneurial "+
        "projects"
    }, {
        "employer": "Nico Trading",
        "title": "Risk Manager",
        "location": "Chicago, IL",
        "dates": "5/1/2007 - 5/1/2010",
        "description": "Modeled the risk of the firm's entire options portfolio"+
        " in Crude Oil, Natural Gas, US Treasuries, Eurodollars, Fed Funds, "+
        "Wheat, Soy, Corn, and Gold."
    }, {
        "employer": "Aegon Institutional Markets",
        "title": "Senior Actuarial Analyst",
        "location": "Louisville, KY",
        "dates": "5/1/2004 - 5/1/2007",
        "description": "Risk Reporting: tasks included S&P Capital Modeling, "+
        "Municipal Contract cash flow projections, liquidity modeling, and other "+
        "project and risk reports.  <br>Valuation Area: Tasks included Cash Flow "+
        "Testing, Embedded Value, and Loss Recognition. Numerous other projects "+
        "to expand business and protect firm’s capital."
    }]
};

work.display = function() {
    //var work = {"jobs":[employer, title, location, dates worked and description.]}
    if (work.jobs.length > 0) {
        work.jobs.forEach(function(job) {
        	$("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", 
                job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", 
                job.title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            var formattedDate = HTMLworkDates.replace("%data%", 
                job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", 
                job.location);
            $(".work-entry:last").append(formattedDate + formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", 
                job.description);
            $(".work-entry:last").append(formattedDescription);
        })
    }
};


var projects = {
    "projects": [{
        "title": "Mr. Brainstorms",
        "dates": "8/15/2014 - 12/31/2015",
        "description": "Website for programming and robotics educational "+
        "programs for kids.",
        "images": ["images/MrBrainstorms-small.jpg"]
    }, {
        "title": "Eyepublic",
        "dates": "8/15/2014 - 12/31/2015",
        "description": "A website to store my online resume, projects, and "+
        "hobbies.",
        "images": ["images/eyepublic-small.jpg"]
    }, {
        "title": "MarCuban",
        "dates": "8/15/2014 - 12/31/2015",
        "description": "A frogger like game where Marc Cuban has to transport "+
        "rum from Cuba <br>to Kingston without being arrested by the Trump Coast "+
        "Guard.",
        "images": ["images/MarCuban-small.jpg"]
    }],
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", 
            project.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", 
            project.dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", 
            project.description);
        $(".project-entry:last").append(formattedProjectDescription);
        project.images.forEach(function(image){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", 
            image);
        $(".project-entry:last").append(formattedProjectImage);
    	});
    });
    $(".project-entry:last").append("<br>");
    $(".project-entry:last").append("<br>");
};


bio.display();
projects.display();
work.display();
education.display();

//var projects = {"projects":[ title, dates worked, description, img URL]}




function locationizer(work_obj) {
    var locations = [];
    work.jobs.forEach(function(job) {
        var newLocation = job.location;
        locations.push(newLocation);
    })
    console.log(locations);
    return locations;
}



$('#mapDiv').append(googleMap);
//https://developers.google.com/maps/documentation/javascript/tutorial
//https://d3js.org/

