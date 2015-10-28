var formattedName, formattedRole;

var bio = {
	"name": "Jonathan Welker",
	"role": "Web Developer",
	"contacts": {
		"email": "jwelker110@gmail.com",
		"github": "jwelker110",
		"twitter": "@_JonWelker",
		"location": "Baton Rouge, LA"
	},
	"welcomeMessage": "I am a passionate web developer that enjoys a challenge!",
	"skills": [
		"HTML", "CSS", "JavaScript", "Python", "Java"
	],
	"biopic": "images/me.JPG",
	"display": new function(){}
};

var work = {
	"position": "Web Developer",
	"employer": "Self-Employed",
	"city": "Baton Rouge"
};

var education = {
	"name": "Udacity",
	"years": "2014-2015",
	"city": "World Wide Web"
};

// replace with correct info
formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
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


