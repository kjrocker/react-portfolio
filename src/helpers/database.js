const database = {
  "blurbs" : [ {
    "body" : "I've only scratched the surface of what I can do with programming and web development, but I've already been able to apply what I know to accomplish meaningful and productive tasks. This skill curve will only accelerate as each technology and skill builds on my knowledge in new and exciting ways.",
    "title" : "Skilled"
  }, {
    "body" : "I strive to be approachable and authentic whenever possible. While I can be all business when I need to be, I prefer to be informal and easy to work with. Whether it's talking with co-workers at a meeting, or just in everyday interactions with other human beings, I have a smile and a joke for anyone who wants one.",
    "title" : "Friendly"
  }, {
    "body" : "Supplementing my computer science abilities is a fascination with algorithms, science, mathematics, and formal logic. I bring all these skills to every project I'm involved in, and they provide me with powerful insights and a knack for lateral problem solving.",
    "title" : "Logical"
  } ],
  "jobs" : [ {
    "company" : "Levvel",
    "end" : "April 2017",
    "items" : [ "Gave users of an existing Ruby on Rails app the ability to plan out their sales for the upcoming financial year, and integrated this information with the rest of the application", "Assisted in putting an authorization/permissions system over an already extensive Angular application", "Worked with multiple teams using agile development and a variety of software design, testing, and code review systems" ],
    "logoUrl" : "",
    "start" : "September 2016",
    "summary" : "Worked with clients to create effective, maintainable software solutions addressing a wide array of needs, using any technology dictated by the client or the pre-existing codebase.",
    "title" : "Consultant"
  }, {
    "company" : "PCLS",
    "end" : "July 2016",
    "items" : [ "Developed an automated QC chart system in Excel, which saved over 40 employee-hours per week by automatically extracting and plotting QC data.", "Created a QC checklist that flagged failed controls, and removed all copy-pasting from the analysis process.", "Worked with the rest of the QC team on instrument maintenance and calibration curve analysis, ensuring quality in production" ],
    "logoUrl" : "",
    "start" : "June 2012",
    "summary" : "Responsible for a broad array of services within the QC department, including instrument maintenance and data analysis. Developed automation tools using Excel and VBA to increase department productivity. Also included work with proprietary hardware automation tools.",
    "title" : "QC Metrologist"
  }, {
    "company" : "UNC",
    "end" : "May 2014",
    "items" : [ "Applied various statistical techniques and algorithms to raw data from the lab's SNP microarray", "Created part of the computational suite required to turn this microarray into a toolkit for determining the subspecies of mixed wild mouse populations"],
    "logoUrl" : "",
    "start" : "Spring 2013",
    "summary" : "Managed an independant research project, involving analysis of raw genotype data to meet the laboratory's broader research goals. Interwove SQL, Python, and R to produce meaningful statistics and visualizations from millions of data points.",
    "title" : "Research Lab Volunteer"
  } ],
  "projects" : {
    "projectOrder" : ["simple-sample", "rails-api", "react-client", "grand-order", "project-euler"],
    "projectList": [ {
        "body" : "Extending ActiveRecord with a sample method. A simple attempt at Gem creation.",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/Snake_eyes_dice.jpg",
        "liveUrl" : "",
        "sourceUrl" : "https://github.com/kjrocker/simple_sample",
        "title" : "Simple Sample",
        "id": "simple-sample",
      }, {
        "body" : "Rolling my own authentication in Elixir/Phoenix, using the new structure of Phoenix 1.3 for organization.",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/phoenixframework.png",
        "liveUrl" : "",
        "sourceUrl" : "https://github.com/kjrocker/readdit-elixir",
        "title" : "Readdit",
        "id" : "readdit-elixir",
      }, {
        "body" : "A reference website for Fate Grand Order, a mobile role-playing game",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/Fate_Grand_Order_logo.png",
        "liveUrl" : "",
        "sourceUrl" : "https://github.com/kjrocker/fgo-resources",
        "title" : "Chaldea Foundation",
        "id" : "grand-order",
      }, {
        "body" : "A traditional Reddit-like API in Rails",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/rubies.jpg",
        "liveUrl" : "",
        "sourceUrl" : "https://github.com/kjrocker/readdit-ruby",
        "title" : "Readdit API",
        "id" : "readdit-rails",
      }, {
        "body" : "Template for a Rails API with token based authentication. Focused on a few polished features and best practices",
        "sourceUrl" : "https://github.com/kjrocker/rails-api",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/rubies.jpg",
        "title" : "Rails API",
        "id" : "rails-api",
      }, {
        "body" : "React companion to the Rails API, with Redux. Makes use of higher order abstractions and consistent structure.",
        "sourceUrl" : "https://github.com/kjrocker/react-client",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/react-logo.jpg",
        "title" : "React Client",
        "id" : "react-client",
      }, {
        "body" : "An experiment in UI design, pulling from OkCupid and Match.com",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/match-ui-project.jpg",
        "liveUrl" : "",
        "title" : "Dating UI/UX",
        "id" : "dating-ui",
      }, {
        "body" : "Solving Project Euler problems in a variety of languages. This is usually where I go to learn new languages.",
        "imageUrl" : "https://s3.amazonaws.com/kjrocker-portfolio/project_euler.jpg",
        "sourceUrl" : "",
        "title" : "Project Euler",
        "id" : "project-euler",
      }
    ],
  }

};

export default database;
