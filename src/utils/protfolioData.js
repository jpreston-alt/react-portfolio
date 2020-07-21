function ProjectCard(title, about, imgURL, siteURL, repoURL) {
    this.title = title;
    this.about = about;
    this.imgURL = imgURL;
    this.siteURL = siteURL;
    this.repoURL = repoURL;
};

// new Project Card instances
const quarCard = new ProjectCard(
    "Quarentainment",
    "An entertainment application which allows the user to browse for trending movies, tv shows, and books to keep them entertained during their involuntary time at home. User may save content to their personal list to remember for later. Built using the NYT bestseller and movie reviews API, and The Movie Database API.",
    "assets/images/portfolio/quar2.png",
    "https://jpreston-alt.github.io/Quarentainment/",
    "https://github.com/jpreston-alt/Quarentainment"
);

const weatherCard = new ProjectCard(
    "Weather Dashboard",
    "An application that allows the user to view current and future weather conditions for any city. Past viewed cities are saved to search history for easier viewing in the future. Built using Open Weather Maps API, and Open Cage Geocoder API.",
    "assets/images/portfolio/weather2.png",
    "https://jpreston-alt.github.io/Weather-Dashboard/",
    "https://github.com/jpreston-alt/Weather-Dashboard"
);

const plannerCard = new ProjectCard(
    "Work Day Planner",
    "A simple calendar app for scheduling your work day. Color coded time blocks update depending on what time of day it is, allowing the user to see where they are in their day at a glance. Built with JavaScript and Moment.js.",
    "assets/images/portfolio/planner.png",
    "https://jpreston-alt.github.io/Day-Planner/",
    "https://github.com/jpreston-alt/Day-Planner"
);

const quizCard = new ProjectCard(
    "Code Quiz",
    "A quiz built using JavaScript, to test your coding knowledge. Race against the clock to answer all the questions correctly. Save your high scores to track your improvement.",
    "assets/images/portfolio/quiz.png",
    "https://jpreston-alt.github.io/Code-Quiz/",
    "https://github.com/jpreston-alt/Code-Quiz"
);

const profileGenCard = new ProjectCard(
    "Team Profile Generator",
    "A command-line-interface application that allows the user to easily generate a team profile webpage, featuring summaries of their team members. Built using Node and Inquirer.js.",
    "assets/images/portfolio/team-profile2.png",
    "https://drive.google.com/file/d/1GXXnc2q5sv7_aGnGXkHwB0Wg7uvSFpcF/view",
    "https://github.com/jpreston-alt/Team-Profile-Generator"
);

const notepadCard = new ProjectCard(
    "Notepad",
    "Organize your thoughts with Notepad, a note-taking application build with Express.js. Notepad helps you keep track of everything you need to remember by allowing you to save, view, and delete important reminders and thoughts.",
    "assets/images/portfolio/notepad2.png",
    "https://jp-express-notepad.herokuapp.com/",
    "https://github.com/jpreston-alt/Express-Note-Taker",
);

const burgerCard = new ProjectCard(
    "Eat-Da-Burger",
    "A full-stack, restaurant application that allows the user to input, devour, rate, and delete tasty burgers from a MySQL database. Eat-Da-Burger utilizes the MVC design pattern, and is built using MySQL, Node, Express, Handlebars and a homemade ORM.",
    "assets/images/portfolio/burger2.png",
    "https://jp-burger-logger.herokuapp.com/",
    "https://github.com/jpreston-alt/Burger-Logger"
);

const budgetCard = new ProjectCard(
    "Check Yourself",
    "A full-stack budgeting application, that helps the user track their monthly expenses and manage their money wisely, based on the 50/30/20 budgeting rule. Check Yourself is built using Node, Express, Passport and a MySQL Database. Guest Login: guest@checkyourself.com, guestpw.",
    "assets/images/portfolio/check-yourself.png",
    "https://jp-project2.herokuapp.com/",
    "https://github.com/jpreston-alt/Check-Yourself"
);

const employeeCard = new ProjectCard(
    "Employee Tracker",
    "A command-line, content management system, that allows business owners to easily manage and track information about their employees. Built using Node, Inquirer.js, and a MySQL database.",
    "assets/images/portfolio/emp.png",
    "https://drive.google.com/file/d/1to-rywQco0bl-7fDBKE7dkzV-utTVTK7/view",
    "https://github.com/jpreston-alt/Employee-Tracker"
);

const fitnessCard = new ProjectCard(
    "Fitness Tracker",
    "An full-stack application that allows the user to track their daily workouts and fitness progress. Built using JavaScript, Node, Express, MongoDB, and Mongoose.",
    "assets/images/portfolio/dashboard.png",
    "https://jp-fitness-tracker.herokuapp.com/",
    "https://github.com/jpreston-alt/fitness-tracker"
);

let portfolioData = [budgetCard, quarCard, burgerCard, notepadCard, fitnessCard, employeeCard, weatherCard, profileGenCard];

export default portfolioData;