var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"email": "johndoe@email.com",
		"github": "example",
		"twitter": "example",
		"location": "Salt Lake City, UT"
	},
	"welcomeMessage": "Welcome to my resume!",
	"skills": [
		"HTML", "CSS", "JavaScript", "Python"
	],
	"biopic": "images/me.jpg",
	"display": new function(){}
};
bio.display = function(){
	formattedName = HTMLheaderName.replace("%data%", bio.name);
	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
	formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
	formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	formattedLocation = formattedLocation.replace("%url%", bio.contacts.location.replace(" ", "+"));
     formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedTwitter);
	$('#topContacts').append(formattedLocation);

	$('#header').append(formattedBiopic);
	$('#header').append(formattedWelcome);
	$('#header').append(HTMLskillsStart);

	for(s in bio.skills){
		$('#skills').append(HTMLskills.replace("%data%", bio.skills[s]));
	}

	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedLocation);
}


// OBJECTS

var customDate = function(startDate, endDate){
	if (startDate === endDate) {
		return {
			"start": startDate,
			"end": ""
		};
	}
	return {
		"start": startDate,
		"end": endDate ? " - " + endDate : " - Present"
	};
};

var project = function(title, dates, description, images, url){
	return {
		"title": title,
		"dates": dates,
		"description": description,
		"images": images ? images : [],
		"url": url ? url : "#"
	};
};

var job = function(employer, title, location, dates, description, url){
	return {
		"employer": employer,
		"title": title,
		"location": location,
		"dates": dates,
		"description": description,
		"url": url ? url : "#"
	};
};

var onlineCourse = function(title, school, dates, url){
	return {
		"title": title,
		"school": school,
		"dates": dates,
		"url": url
	};
};

var school = function(name, location, degree, majors, dates, url, onlineCourses){
	return {
		"name": name,
		"location": location,
		"degree": degree,
		"majors": majors,
		"dates": dates,
		"url": url,
		"onlineCourses": onlineCourses ? onlineCourses : []
	};
};

function locationizer(work_obj){
	var locations = [];

	for (job in work_obj.jobs) {
		locations.push(work_obj.jobs[job].location);
	}
	return locations;
}

function inName(){
	names = bio.name.trim().split(" ");
	for (n in names ) {
		if (n == names.length - 1){
			names[n] = names[n].toUpperCase();
		} else {
			names[n] = names[n].slice(0, 1).toUpperCase() + names[n].slice(1).toLowerCase();
		}
	}
	return names.join(" ");
}


// EDUCATION SECTION

var education = {
	"schools": []
};
education.display = function(){
	for (s in education.schools) {
		var school = education.schools[s];
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(
			HTMLschoolName.replace("%data%", school.name) +
			HTMLschoolDegree.replace("%data%", school.degree) + 
			HTMLschoolDates.replace("%data%", school.dates.start + school.dates.end) +
			HTMLschoolLocation.replace("%data%", school.location));
		var majors = '';
		for (m in school.majors) {
			majors += school.majors[m];
			majors += school.majors.length -1 > m ? ", " : " ";
		}
		$('.education-entry:last').append(
			HTMLschoolMajor.replace("%data%", majors));
		if (school.onlineCourses.length > 0) {
			$('.education-entry:last').append(
				HTMLonlineClasses);
		}
		for (c in school.onlineCourses) {
			var course = school.onlineCourses[c];
			$('.education-entry:last').append(
				HTMLonlineTitle.replace("%data%", course.title).replace("%url%", course.url) +
				HTMLonlineSchool.replace("%data%", course.school) +
				HTMLonlineDates.replace("%data%", course.dates.start + course.dates.end));
		}
	}
}

var onlineCourses = [];
onlineCourses.push(
	new onlineCourse(
		"Full Stack Web Developer",
		"Udacity",
		customDate("Feb 2015", "Aug 2015"),
		"https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"));
onlineCourses.push(
	new onlineCourse(
		"Front End Web Developer",
		"Udacity",
		customDate("Oct 2015"),
		"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"));

education.schools.push(
	new school(
		"Self-Taught University", 
		"World Wide Web", 
		"< 2 years", 
		["Software Development"], 
		customDate("Feb 2014"),
		"https://github.com/",
		onlineCourses));


// PROJECTS SECTION

var projects = {
	"array": []
};
projects.display = function(){
	for (p in projects.array) {
		var project = projects.array[p];
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(
			HTMLprojectTitle.replace("%data%", project.title).replace("%url%", project.url) +
			HTMLprojectDates.replace("%data%", project.dates.start + project.dates.end) + 
			HTMLprojectDescriptionStart);
		for (d in project.description) {
			$('.project-description:last').append(
				HTMLprojectDescription.replace("%data%", project.description[d]));
		}
		for (i in project.images){
			$('.project-entry:last').append(HTMLprojectImage.replace("%data%", project.images[i]));
		}
	}
}

projects.array.push(
	new project(
		"Movie Trailer Website", 
		new customDate("Feb 2015", "Feb 2015"), 
		["A simple website that is generated using Python to read from a JSON file that contains movie details.",
		"Movies are stored in a JSON file and the details are written into the HTML using a Python script"], 
		[],
		"https://github.com"));
projects.array.push(
	new project(
		"Tournament Planner",
		new customDate("March 2015", "March 2015"),
		["Created and implemented a PostgreSQL database that stores standings for a Swiss-Pairings style tournament.",
		"The database utilizes views to simplify querying and Python is used to interact with the database.", 
		"Test functions provide minimal feedback on the purpose of the implemented functions."],
		[],
		"https://github.com"));


// WORK SECTION

var work = {
	"jobs": []
};
work.display = function(){
	for (j in work.jobs) {
		var job = work.jobs[j];
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(
			HTMLworkEmployer.replace("%data%", job.employer).replace("%url%", job.url) +
			HTMLworkTitle.replace("%data%", job.title) +
			HTMLworkDates.replace("%data%", job.dates.start + job.dates.end) +
			HTMLworkLocation.replace("%data%", job.location) + 
			HTMLworkDescriptionStart);
		for (d in job.description) {
			$('.work-description:last').append(
				HTMLworkDescription.replace("%data%", job.description[d]));
		}
	};
}

work.jobs.push(new job(
	"This is the first job",
	"Web Developer",
	"Boston, MA",
	new customDate("August 2015", "Present"),
	["The first thing I did", "The second thing I did", "The third thing I did",
	],
	"http://www.example.com"
	));
work.jobs.push(new job(
	"This is the second job",
	"Software Development",
	"Los Angeles, CA",
	new customDate("May 2014", "Present"),
	["This is the first responsibility", "This is the second responsibility", "This is the third responsibility",
	],
	"http://www.example.com"
	));



bio.display();
work.display();
projects.display();
education.display();

var contacts = $('.contact-link');




// $('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
























