Front End Nanodegree Resume
============================

### Purpose
The purpose of this project was to learn the basics of JavaScript. This was done by buiding an interactive resume given a JSON object and iterating over the properties.

### Details
The JSON objects utilized are described by the following:

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

### User-defined resume
User defined resumes are able to be created from JSON objects that copy the previous design. Simply [download the repo](https://github.com/jwelker110/frontend-nanodegree-resume/archive/master.zip) and navigate to the js folder. Open resumeBuilder.js in a text editor, and locate the JSON objects that you wish to edit.

### More information
For more information regarding the implementation and expectations of this project, you can check the course listing at [Udacity](https://www.udacity.com/course/viewer#!/c-ud804/l-3077038869/m-3071088640). This provides a more in-depth glance at the circumstances leading up to and surrounding the project.
