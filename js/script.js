var view = {
	//resume info Objects
	//bio object
	bio: {
		"name": "Matthew Nerger",
		"role": "Front-End Web Developer",
		"contacts": {
			"mobile": "813.758.8512",
			"email": "matthewjnerger3@gmail.com",
			"github": "towercity",
			"location": "New York, NY"
		},
		"otherLocations": [
			"Fort Wayne, IN",
			"Tampa, FL",
			"Baton Rouge, LA",
			"New York, NY"
		],
		"welcomeMessage": `My name's Matthew Nerger. I'm a writer and front-end web developer currently based in New York City. I've been coding for the web since early 2015, and I've built and maintained websites for a number of clients, many of which you can check out below. In addition, I write and produce music, and write interesting fiction on the side. Visit my GitHub page to see more of my work, or check out my resume to read up on education and work history. Drop me an email if you'd like me to build you something. I'm always eager to create more`,

		//TODO: Make less languages, more active skills (what I've DONE with languages)
		"skills": ["Javascript", "CSS", "HTML", "WordPress", "jQuery", "Bootstrap", "Python"],

		//TODO: add a specific page section for languages and frameworks
		"languages": ["jQuery", "Knockout", "Backbone.js", "Jasmine", "Javascript", "CSS", "HTML"]
	},

	//work object
	work: {
		"jobs": [
			{
				"employer": "The Miami Hurricane",
				"title": "Webmaster",
				"location": "Miami, FL",
				"description": [
					"Maintained WordPress blog with archive of over 15,000 posts",
					"Repaired front- and back-end errors in styling and content management",
					"Updated and added functionalities as needed"
				]
    	},
			{
				"employer": "University of Miami, College of Arts and Sciences",
				"title": "Assistant to the Web Developer",
				"location": "Miami, FL",
				"description": [
					"Migrated website of over 1,000 pages from TERMINALFOUR to Cascade Content Management System",
					"Updated css styles where neccesary",
					"Cropped photographs and banners to fit new site design's required dimensions",
					"Created new banners according to college's requests"
				]
			},
			{
				"employer": "Sinking City Lit Mag",
				"title": "Webmaster/Fiction Editor",
				"location": "Miami, FL",
				"description": [
					"Migrated online literary mag of approximately 50 pages from static site to WordPress blog",
					"Added and updated published works, author bios, and editorial listings",
					"Created and maintained templates for easy addition and modification of site content",
					"Coded custom layouts for poems and visual art pieces as needed"
				]
    		},
			// {
			// 	"employer": "LSU Cox Center for Student Athletes",
			// 	"title": "Content Tutor",
			// 	"location": "Baton Rouge, LA",
			// 	"description": [
			// 		"Tutored student-athletes in composition and literature",
			// 		"Generated and presented educational materials",
			// 		"Helped students set and meet structured learning goals"
			//   	]
   //  		},
			{
				"employer": "WFSU-FM",
				"title": "Production Assisstant",
				"location": "Tallahassee, FL",
				"description": [
					"Updated and maintained music library databases",
					"Downloaded and organized weekly radio programs, bumpers, and pre-recorded announcements",
					"Pushed program files to automation server via FTP"
				]
    		}
			// {
			// 	"employer": "Solution Skills, Inc.",
			// 	"title": "Marketing Assisstant",
			// 	"location": "Tallahassee, FL",
			// 	"description": [
			// 		"Wrote, edited, and formatted marketing materials, strategy guides, and practice tests",
			// 		"Researched and compiled information on standardized tests",
			// 		"Organized and led focus groups and workshops with high-school and college aged students"
			//   	]
   //  		},
			// {
			// 	"employer": "Leon County Schools",
			// 	"title": "Substitute Teacher",
			// 	"location": "Tallahassee, FL",
			// 	"description": [
			// 		"Taught large groups of students a variety of subjects",
			// 		"Worked individually with students as needed",
			// 		"Reported progress and specific student needs to primary teacher"
			//   	]
   //  		}
    	]
	},

	//education object
	education: {
		"schools": [
			{
				"name": "University of Miami",
				"location": "Miami, FL",
				"major": "Creative Writing",
				"degree": "Master of Fine Arts",
				"years": 1,
				"description": [
    				"Taught multiple creative writing and english composition classes",
						"Developed course contents, including lectures, essay prompts, and class activities",
						"Coded and maintained online graduate literary journal website, Sinking City"
				]
    		},
			{
				"name": "Florida State University",
				"location": "Tallahassee, FL",
				"major": "Creative Writing",
				"degree": "Bachelor of Arts",
				"years": 4,
				"description": [
    				"Produced sixty pages of original fiction for honors thesis"
				]
			},
			{
				"name": "Udacity",
				"location": "https://www.udacity.com/",
				"major": "Front-End Developement",
				"degree": "Nanodegree",
				"description": [
					"Learned fundamentals of HTML, CSS, and Javascript",
					"Created a variety of original projects using fundamentals of web design"
				]
    		}
    	],
		"onlineCourses": [
			{
				"title": "Front-End Developer",
				"school": "Udacity",
				"url": "https://www.udacity.com/",
				"description": [
					"Learned fundamentals of HTML, CSS, and Javascript",
					"Created a variety of original projects using fundamentals of web design"
				]
    		}
    	]
	},

	//project object
	projects: {
		"projects": [
			{
				"title": "Sinking City",
				"description": "The University of Miami's Graduate literary magazine",
				"image": "images/project_sink.jpg",
				"link": "http://www.sinkingcitylitmag.com"
    		},
			{
				"title": "Audio Portfolio",
				"description": "Web portfolio with fully functional HTML5 audio player.",
				"image": "images/project01.jpg",
				"link": "http://www.matthewjnerger.com/web-portfolio/"
    		},
			{
				"title": "Author Blog",
				"description": "A simple biography/blog page for an author.",
				"image": "images/project_author.jpg",
				"link": "http://www.jakobkonger.com/"
    		}
    	]
	},

	//reusable text variables
	HTMLclear: '<div class="clear"></div>',
	HTMLheaderBox: '<div id="header-box"></div>',
	HTMLheaderName: '<h1 id="name">%data%</h1>',
	HTMLheaderRole: '<h3>%data%</h3>',
	HTMLheaderText: '<div id="header-text"></div>',

	HTMLcontactGeneric: '<li class="flex-item"><span class="dark-text">%contact%</span><span class="white-text">%data%</span></li>',
	HTMLmobile: '<li class="flex-item"><span class="dark-text">mobile</span><a href="tel:%data%" class="white-text contact-link">%data%</a></li>',
	HTMLemail: '<li class="flex-item"><span class="dark-text">email</span><a href="mailto:%data%" class="white-text contact-link">%data%</a></li>',
	HTMLtwitter: '<li class="flex-item"><span class="dark-text">twitter</span><a href="http://www.twitter.com/%data%" target="_blank" class="white-text contact-link">%data%</a></li>',
	HTMLgithub: '<li class="flex-item"><span class="dark-text">github</span><a href="http://www.github.com/%data%" target="_blank" class="white-text contact-link">%data%</a></li>',
	HTMLblog: '<li class="flex-item"><span class="dark-text">blog</span><a href="%data%" class="white-text contact-link">%data%</a></li>',
	HTMLlocation: '<li class="flex-item"><span class="dark-text">location</span><span class="white-text">%data%</span></li>',

	HTMLwelcomeMsg: '<h2 class="center-text">Welcome!</h2><p id="welcome-message" class="row">%data%</p>',

	HTMLskillsStart: '<div id="skills" class="col-md-3"><h2 id="skills-h3" class="left-text">Skills:</h2><ul id="skillsList"></ul>',
	HTMLskills: '<li><span>%data%</span></li>',

	HTMLworkStart: '<div class="work-entry row"></div>',
	HTMLworkLeft: '<div class="work-left col-md-5"></div>',
	HTMLworkRight: '<div class="work-right col-md-7"></div>',
	HTMLworkEmployer: '<p>%data%</p>',
	HTMLworkTitle: '<p>%data%</p>',
	HTMLworkLocation: '<div class="location-text">%data%</div>',
	HTMLworkDescription: '<li>%data%</li>',

	HTMLprojectStart: '<div class="col-md-4 project-container"><div class="project-entry image-wrapper overlay-fade-in"></div></div>',
	HTMLprojectOverlay: '<div class="project-overlay image-overlay-content"></div>',
	HTMLprojectTitle: '<h2>%data%</h2>',
	HTMLprojectDescription: '<p class="project-description">%data%</p>',
	HTMLprojectImage: '<img src="%data%">',
	HTMLprojectLink: '<a href="%data%" target="_blank" class="button">View project</a>',
	HTMLprojectEnd: '<a href="http://www.matthewjnerger.com" target="_blank"></a>',

	HTMLschoolStart: '<div class="education-entry row"></div>',
	HTMLschoolLeft: '<div class="education-left col-md-5"></div>',
	HTMLschoolRight: '<div class="education-right col-md-7"></div>',
	HTMLschoolName: '<p>%data%</p>',
	HTMLschoolDegree: '<p>%data%, ',
	HTMLschoolLocation: '<div class="location-text">%data%</div>',
	HTMLschoolMajor: '%data%</p>',
	HTMLschoolDescription: '<li>%data%</li>',

	HTMLonlineClasses: '<h3>Online Classes</h3>',
	HTMLonlineTitle: '<p>%data%</p>',
	HTMLonlineSchool: '<p>%data%</p>',
	HTMLonlineURL: '<a href="#">%data%</a>',

	internationalizeButton: '<button>Internationalize</button>',
	googleMap: '<div id="map"></div>',

	//Prints all resume info onto page (separate from init in case of future changes which require re-rendering)
	render: function () {
		//bio render
		$("#topContacts").append(
			this.HTMLmobile.replace(/%data%/g, this.bio.contacts.mobile) +
			this.HTMLemail.replace(/%data%/g, this.bio.contacts.email) +
			this.HTMLgithub.replace(/%data%/g, this.bio.contacts.github) +
			this.HTMLlocation.replace("%data%", this.bio.contacts.location)
		);
		$("#footerContacts").append(
			this.HTMLmobile.replace(/%data%/g, this.bio.contacts.mobile) +
			this.HTMLemail.replace(/%data%/g, this.bio.contacts.email) +
			this.HTMLgithub.replace(/%data%/g, this.bio.contacts.github) +
			this.HTMLlocation.replace("%data%", this.bio.contacts.location)
		);
		$(this.HTMLheaderBox).insertBefore("#main");
		$("#header-box").append(this.HTMLheaderText);
		$("#header-text").append(
			this.HTMLheaderName.replace("%data%", this.bio.name) +
			this.HTMLheaderRole.replace("%data%", this.bio.role)
		);
		$("#header").append(this.HTMLwelcomeMsg.replace("%data%", this.bio.welcomeMessage));
		//checks for skills before printing skills header
		if (this.bio.skills.length > 0) {
			$("#mapRow").append(this.HTMLskillsStart);
			for (var skill in this.bio.skills) {
				$("#skillsList").append(this.HTMLskills.replace("%data%", this.bio.skills[skill]));
			}
		}

		//work render
		this.work.jobs.forEach(function (job) {
			$("#workExperience").append(view.HTMLworkStart);
			$(".work-entry:last").append(view.HTMLworkLeft);
			$(".work-left:last").append(
				view.HTMLworkEmployer.replace("%data%", job.employer) +
				view.HTMLworkLocation.replace("%data%", job.location)
			);
			$(".work-entry:last").append(view.HTMLworkRight);
			$(".work-right:last").append(view.HTMLworkTitle.replace("%data%", job.title));
			job.description.forEach(function (duty) {
				$(".work-right:last").append(view.HTMLworkDescription.replace("%data%", duty));
			});
			$("#workExperience").append(view.HTMLclear);
		});

		//education render
		this.education.schools.forEach(function (school) {
			$("#education").append(view.HTMLschoolStart);
			$(".education-entry:last").append(view.HTMLschoolLeft);
			$(".education-left:last").append(
				view.HTMLschoolName.replace("%data%", school.name) +
				view.HTMLschoolLocation.replace("%data%", school.location)
			);
			$(".education-entry:last").append(view.HTMLschoolRight);
			$(".education-right:last").append(
				view.HTMLschoolDegree.replace("%data%", school.degree) +
				view.HTMLschoolMajor.replace("%data%", school.major)
			);
			school.description.forEach(function (duty) {
				$(".education-right:last").append(view.HTMLschoolDescription.replace("%data%", duty));
			});
			$("#education").append(view.HTMLclear);
		});

			//projects render
			this.projects.projects.forEach(function (project) {
				$("#projects").append(view.HTMLprojectStart);
				$(".project-entry:last").append(view.HTMLprojectImage.replace("%data%", project.image));
				$(".project-entry:last").append(view.HTMLprojectOverlay);
				$(".project-overlay:last").append(
					view.HTMLprojectTitle.replace("%data%", project.title) +
					view.HTMLprojectDescription.replace("%data%", project.description) +
					view.HTMLprojectLink.replace("%data%", project.link)
				);
			});
			//add 'view more' link to the end of projects
			$('#projects').append(view.HTMLprojectEnd);

	},
	init: function () {
		this.render();
	}
};

var octopus = {
	init: function () {
		view.init();
		model.init();
		$("#mapDiv").append(view.googleMap);
		initializeMap();
	}
};

var model = {
	clickLocations: [],

	logClicks: function (x, y) {
		this.clickLocations.push({
			x: x,
			y: y
		});
		console.log('x location: ' + x + '; y location: ' + y);
	},

	init: function () {
		$('button').click(function () {
			var iName = inName() || function () {};
			$('#name').html(iName);
		});

		$(document).click(function (loc) {
			var x = loc.pageX;
			var y = loc.pageY;

			model.logClicks(x, y);
		});
	}
};


//Google map
var map;

function initializeMap() {

	var locations;

	var mapOptions = {
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};

	map = new google.maps.Map(document.querySelector('#map'), mapOptions);


	/*
	locationFinder() returns an array of every location string from the JSONs
	written for bio, education, and work.
	*/
	function locationFinder() {
		var locations = [];

		// adds the single location property from bio to the locations array
		locations.push(view.bio.contacts.location);

		// iterates through school locations and appends each location to
		// the locations array
		view.education.schools.forEach(function (school) {
			locations.push(school.location);
		});

		// iterates through work locations and appends each location to
		// the locations array.
		view.work.jobs.forEach(function (job) {
			locations.push(job.location);
		});

		view.bio.otherLocations.forEach(function (place) {
			locations.push(place)
		})

		return locations;
	}

	/*
	createMapMarker(placeData) reads Google Places search results to create map pins.
	placeData is the object returned from search results containing information
	about a single location.
	*/
	function createMapMarker(placeData) {

		// The next lines save location data from the search result object to local variables
		var lat = placeData.geometry.location.lat(); // latitude from the place service
		var lon = placeData.geometry.location.lng(); // longitude from the place service
		var name = placeData.formatted_address; // name of the place from the place service
		var bounds = window.mapBounds; // current boundaries of the map window

		var marker = new google.maps.Marker({
			map: map,
			position: placeData.geometry.location,
			title: name
		});

		var infoWindow = new google.maps.InfoWindow({
			content: name
		});

		google.maps.event.addListener(marker, 'click', function () {
			infoWindow.open(map, marker);
		});

		bounds.extend(new google.maps.LatLng(lat, lon));
		map.fitBounds(bounds);
		map.setCenter(bounds.getCenter());
	}

	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			createMapMarker(results[0]);
		}
	}

	/*
	pinPoster(locations) takes in the array of locations created by locationFinder()
	and fires off Google place searches for each location
	*/
	function pinPoster(locations) {

		// creates a Google place search service object
		var service = new google.maps.places.PlacesService(map);

		// Iterates through the array of locations, creates a search object for each location
		locations.forEach(function (place) {
			// the search request object
			var request = {
				query: place
			};

			// Actually searches the Google Maps API for location data and runs the callback
			// function with the search results after each search.
			service.textSearch(request, callback);
		});
	}

	// Sets the boundaries of the map based on pin locations
	window.mapBounds = new google.maps.LatLngBounds();

	// locations is an array of location strings returned from locationFinder()
	locations = locationFinder();

	// pinPoster(locations) creates pins on the map for each location in
	// the locations array
	pinPoster(locations);

}

window.addEventListener('resize', function (e) {
	//Make sure the map bounds get updated on page resize
	map.fitBounds(mapBounds);
});
