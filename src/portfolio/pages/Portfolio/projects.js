const projects = [

  // {
  //   id: "weatherdashboard",
  //   github: "https://github.com/the-medium-place/weather-dashboard",
  //   deployed: "http://the-medium-place.github.io/weather-dashboard",
  //   description: "An application allowing a user to search by city for current weather conditions and the 5-day forecast. This project utilizes JQuery AJAX calls on a simble BootStrap grid to populate the weather and map data.",
  //   title: "Weather Dashboard",
  //   technologies: "HTML5, CSS3, JQuery, Bootstrap"
  // },
  // {
  //   id: "workdayscheduler",
  //   github: "https://github.com/the-medium-place/work-day-scheduler",
  //   deployed: "https://the-medium-place.github.io/work-day-scheduler/",
  //   description: "This application utilizes local storage to save the user inputs in text fields which change color to follow the time of day (but only during work hours!)",
  //   title: "Workday Scheduler",
  //technologies: "HTML5, CSS3"

  // },

  // {
  //   id: "employeemanager",
  //   github: "https://github.com/the-medium-place/employee-tracker",
  //   deployed: "https://github.com/the-medium-place/employee-tracker",
  //   description: "This is a CLI (Command Line Interface) program allowing a user to keep track of all types of employee information and display it in useful, easy-to-read ways. It was built using Node JS and MySQL, and I'm pretty proud of the layout and design I was able to put together for this Bootcamp assignment.",
  //   title: "Employee Manager",
  // technologies: "JavaScript, Node.js, Inquirer NPM, Figlet NPM"

  // },
  // {
  //   id: "codequiz",
  //   github: "https://github.com/the-medium-place/code-quiz",
  //   deployed: "https://the-medium-place.github.io/code-quiz/",
  //   description: "The Ninja Turtles Quiz is retro-themed quiz game. When the start button is pressed the user is presented with a series of knowledge questions about the Teenage Mutant Ninja Turtles!",
  //   title: "Ninja Turtles Quiz",
  // technologies: "HTML5, CSS3, JQuery, Bootstrap"

  // },
  // {
  //   id: "readmegenerator",
  //   github: "https://github.com/the-medium-place/README-generator",
  //   deployed: "https://github.com/the-medium-place/README-generator",
  //   description: "This is a CLI (Command Line Interface) program allowing a user to auto-generate a README markdown file for any project. The file includes 'license' and 'contributor' badges, as well as the user's GitHub profile information.  Node JS and JQuery are used to gather user info and generate the end file.",
  //   title: "README Generator",
  // technologies: "JavaScript, JQuery, Node.js, Inquirer NPM"

  // },
  // {
  //   id: "passwordgenerator",
  //   github: "https://github.com/the-medium-place/random-password",
  //   deployed: "https://the-medium-place.github.io/random-password/",
  //   description: "This application generates a random password based on input from the user.",
  //   title: "Random Password Generator",
  // technologies: "JavaScript, JQuery, Node.js, Inquirer NPM"

  // },
  // {
  //   id: "burgerapp",
  //   github: "https://github.com/the-medium-place/burger",
  //   deployed: "https://kinda-good-burger.herokuapp.com/",
  //   description: "Make a list of all the burger's you would want to eat! Then, with the click of a button you can place the burger on your list of 'Burger Conquests'. This app utilizes Handlebars JS for rendering and MySQL for the database. I appreciated how this assignment didn't pretend to be anything useful. It's just a burger list.",
  //   title: "Burger Listing",
  // technologies: "HTML5, CSS3, Node.js, Express, MySQL"

  // },
 
  {
    id: "markit",
    github: "https://github.com/dianastebbins/mark-it-react",
    deployed: "https://awesome-mark-it.herokuapp.com/",
    description: "Search for local markets, contact market vendors, buy or sell your wares at your favorite local farmer's market! Mark-It transcends the age of COVID and brings farm-fresh produce into the age of social-distancing!",
    // "This full-stack application provides a way for users to search for local farmer's markets as well as create a vendor profile which allows the user to list and sell products - creating a way for consumers to get their farmer's market shopping done at a safe 'social distance'.  Items created appear on the app's map function, and users can favorite a vendor, item or market and have it appear on their profile page.",
    title: "Mark-It",
    tagline: "Farm-to-market-to-internet-database...",
    screenshot: 'https://i.imgur.com/rcTeF3S.jpg',
    technologies: "Node.js, Express, React JS, Sequelize, MySQL, HTML5, CSS3, Bulma CSS"

  },
  {
    id: "crudposting",
    github: "https://github.com/the-medium-place/personal-blog-front",
    deployed: "https://zgs-personal-blog-frontend.herokuapp.com/crudposting",
    description: "Welcome to my personal blog and portfolio combo application! The blog-side is a fully CRUD-functional CMS that is directly connected to this portfolio site! click the menu above or the button below to visit the homepage and catch up on my programming journey, or random musings!",
    // "This full-stack application provides a way for users to search for local farmer's markets as well as create a vendor profile which allows the user to list and sell products - creating a way for consumers to get their farmer's market shopping done at a safe 'social distance'.  Items created appear on the app's map function, and users can favorite a vendor, item or market and have it appear on their profile page.",
    title: "CRUDposting",
    tagline: "Personal CRUD blog and Portolio!",
    screenshot: 'https://i.imgur.com/zu9Gwy4.png',
    technologies: "Node.js, Express, React JS, Sequelize, MySQL, HTML5, CSS3, Material UI"

  },


  // {
  //   id: "employeeOrganizer",
  //   github: "https://github.com/the-medium-place/react-employee-directory",
  //   deployed: "https://infinite-gorge-44449.herokuapp.com/",
  //   description: "This application utilized the Random User API to create a table of fake employees. The front-end is built with ReactJS and allows the user to organize the resultant employees by Name or Location as well as to search the employees by any data with real-time results.",
  //   title: "Employee Organizer",
  // technologies: "Node.js, Express, React JS, HTML5, CSS3"

  // }
  {
    id: "togather",
    github: "https://github.com/the-medium-place/group-planner",
    deployed: "http://awesome-group-planner.herokuapp.com/",
    description: "This application allows multiple users to collaborate on multiple events. It utilizes a Sequelize  MySQL,database to store all relevant data and allows the user to view, edit, and delete user information (full CRUD functionality!). Multiple users can collaborate on multiple projects or events, while keeping track of event specific tasks and expenditures. This was a one-week collaborative project with a team of four, for which I acted as Project Manager",
    title: "To-Gather",
    tagline: "Getting people together, Helping them ToGather...",
    screenshot: 'https://i.imgur.com/tj8sCI5.jpg',
    technologies: "HTML5, CSS3, Node.js, Sequelize, MySQL, Handlebars JS, Express, Foundation CSS"

  },
  {
    id: "googlebooks",
    github: "https://github.com/the-medium-place/google-books-search",
    deployed: "https://awesome-google-books-react.herokuapp.com/",
    description: "This Full-Stack (MERN) application uses React JS and MongoDB, Mongoose, allowing a user to search the Google Books API, and save any results to a list that is displayed on the 'Saved' page. The user can also delete books from this list giving the app CR-D functionality.",
    title: "Google Books Search",
    tagline: "Simple but elegant book search...",
    screenshot: 'https://i.imgur.com/JWLfCey.png',
    technologies: "MongoDB, Mongoose, Express, React JS, Node.js, HTML5, CSS3"

  },
  {
    id: "fitnessmonkey",
    github: "https://github.com/the-medium-place/fitness-tracker",
    deployed: "https://awesome-fitness-tracker.herokuapp.com/",
    description: "This is a simple fitness tracker app that utilizes Node JS, Handlebars and MongoDB, Mongoose to allow a user to create workout regimens and then add/edit/delete the individual exercises within. My test data while building consistently focused, for some reason, on eating bananas. So, I called the app Fitness Monkey!",
    title: "Fitness Monkey",
    tagline:'Stay fit... no monkey business!',
    screenshot: "https://i.imgur.com/hlZdCTl.png",
  technologies: "HTML5, CSS3, MongoDB, Mongoose, Express, Handlebars JS, Node.js"

  },
  {
    id: "socialdistance",
    github: "https://github.com/the-medium-place/covidDistractions",
    deployed: " https://the-medium-place.github.io/covidDistractions/",
    description: "This application is designed for a user who is looking for the option to escape a depressing new cycle (specifically the COVID-19 pandemic). While one path (social) leads to news feeds with all the anxiety of the outside world, the other path (distance) takes the user away with movies, games and a relaxing breath time. This was a one-week collaborative project in a team of four.",
    title: "Social // Distance",
    tagline: "There's good news AND bad news...",
    screenshot: 'https://i.imgur.com/m4b4xIC.jpg',
    technologies: "HTML5, CSS3, JQuery, Skeleton Framework"
  },
];
export default projects;