var bio = {
	"name": "Jonathan Welker",
	"role": "Web Developer",
	"contacts": {
		"email": "jwelker110@gmail.com",
		"github": "jwelker110",
		"twitter": "_JonWelker",
		"location": "Baton Rouge, LA"
	},
	"welcomeMessage": "I am a passionate web developer that enjoys a challenge!",
	"skills": [
		"HTML", "CSS", "JavaScript", "Python", "Java"
	],
	"biopic": "images/me.JPG",
	"display": new function(){}
};
bio.display = function(){
	formattedName = HTMLheaderName.replace("%data%", bio.name);
	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
	formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
	formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	formattedLocation = formattedLocation.replace("%urlsafedata%", bio.contacts.location.replace(" ", "+"));
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
		$('#skills-h3').append(HTMLskills.replace("%data%", bio.skills[s]));
	}

	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedLocation);
}

var customDate = function(startDate, endDate){
	return {
		"start": startDate,
		"end": endDate ? " - " + endDate : " - Present"
	};
};

var project = function(title, dates, description, images){
	return {
		"title": title,
		"dates": dates,
		"description": description,
		"images": images ? images : []
	};
};

var job = function(employer, title, location, dates, description){
	return {
		"employer": employer,
		"title": title,
		"location": location,
		"dates": dates,
		"description": description
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

function inName(name){
	names = name.trim().split(" ");
	for (n in names ) {
		if (n == names.length - 1){
			names[n] = names[n].toUpperCase();
		} else {
			names[n] = names[n].slice(0, 1).toUpperCase() + names[n].slice(1).toLowerCase();
		}
	}
	return names.join(" ");
}

var projects = {};
projects.array = [];
projects.display = function(){
	for (p in projects.array) {
		var project = projects.array[p];
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(
			HTMLprojectTitle.replace("%data%", project.title) +
			HTMLprojectDates.replace("%data%", project.dates.start + project.dates.end) +
			HTMLprojectDescription.replace("%data%", project.description));
		for (i in project.images){
			$('.project-entry:last').append(HTMLprojectImage.replace("%data%", project.images[i]));
		}
	}
}

projects.array.push(
	new project(
		"test", 
		new customDate("Nov 2014", "Aug 2015"), 
		"Description", 
		[]));

var work = {
	"jobs": []
};
work.display = function(){
	for (j in work.jobs) {
		var job = work.jobs[j];
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(
			HTMLworkEmployer.replace("%data%", job.employer) +
			HTMLworkTitle.replace("%data%", job.title) +
			HTMLworkDates.replace("%data%", job.dates.start + job.dates.end) +
			HTMLworkLocation.replace("%data%", job.location) +
			HTMLworkDescription.replace("%data%", job.description));
	};
}

work.jobs.push(new job(
	"ScalableWebDesign.net",
	"Web Developer",
	"Baton Rouge, LA",
	new customDate("August 2015", "Present"),
	"Working as a team, my partner and I created the" +
	"original concept for the website and implemented " +
	"it's design using an iterative process."
	));
work.jobs.push(new job(
	"ITT Technical Institute",
	"Software Development Tutor",
	"Baton Rouge, LA",
	new customDate("May 2014", "Present"),
	"Explained in detail various programming concepts" + 
	"in easy-to-understand terms and assisted students" +
	"with assignments and classwork."));


bio.display();
work.display();
projects.display();

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);


