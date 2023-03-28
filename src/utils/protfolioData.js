import checkYourselfPic from "../assets/images/portfolio/check-yourself.png";
import quarPic from "../assets/images/portfolio/quar2.png";
import weatherPic from "../assets/images/portfolio/weather2.png";
import plannerPic from "../assets/images/portfolio/planner.png";
import quizPic from "../assets/images/portfolio/quiz.png";
import profileGenPic from "../assets/images/portfolio/team-profile2.png";
import notepadPic from "../assets/images/portfolio/notepad2.png";
import burgerPic from "../assets/images/portfolio/burger2.png";
import employeePic from "../assets/images/portfolio/emp.png";
import fitnessPic from "../assets/images/portfolio/dashboard.png";
import employeeDirPic from "../assets/images/portfolio/employee-dir.png";
import pwaPic from "../assets/images/portfolio/pwa.png";
import buddyPic from "../assets/images/portfolio/buddy-match.png";
import votePic from "../assets/images/portfolio/vote-goat.png";

function ProjectCard(title, about, imgURL, siteURL, repoURL) {
  this.title = title;
  this.about = about;
  this.imgURL = imgURL;
  this.siteURL = siteURL;
  this.repoURL = repoURL;
}

const employeeDirCard = new ProjectCard(
  "Employee Directory",
  "An application, built with React, that allows the user to have quick and easy access to employee information. User may filter and search employees by name, and sort by name, email, DOB, and phone number.",
  employeeDirPic,
  "https://jpreston-alt.github.io/React-Employee-Directory/",
  "https://github.com/jpreston-alt/React-Employee-Directory"
);

const quarCard = new ProjectCard(
  "Quarentainment",
  "An entertainment application which allows the user to browse for trending movies, tv shows, and books to keep them entertained during their involuntary time at home. User may save content to their personal list to remember for later. Built using the NYT bestseller and movie reviews API, and The Movie Database API.",
  quarPic,
  "https://jpreston-alt.github.io/Quarentainment/",
  "https://github.com/jpreston-alt/Quarentainment"
);

const weatherCard = new ProjectCard(
  "Weather Dashboard",
  "An application that allows the user to view current and future weather conditions for any city. Past viewed cities are saved to search history for easier viewing in the future. Built using Open Weather Maps API, and Open Cage Geocoder API.",
  weatherPic,
  "https://jpreston-alt.github.io/Weather-Dashboard/",
  "https://github.com/jpreston-alt/Weather-Dashboard"
);

const plannerCard = new ProjectCard(
  "Work Day Planner",
  "A simple calendar app for scheduling your work day. Color coded time blocks update depending on what time of day it is, allowing the user to see where they are in their day at a glance. Built with JavaScript and Moment.js.",
  plannerPic,
  "https://jpreston-alt.github.io/Day-Planner/",
  "https://github.com/jpreston-alt/Day-Planner"
);

const quizCard = new ProjectCard(
  "Code Quiz",
  "A quiz built using JavaScript, to test your coding knowledge. Race against the clock to answer all the questions correctly. Save your high scores to track your improvement.",
  quizPic,
  "https://jpreston-alt.github.io/Code-Quiz/",
  "https://github.com/jpreston-alt/Code-Quiz"
);

const profileGenCard = new ProjectCard(
  "Team Profile Generator",
  "A command-line-interface application that allows the user to easily generate a team profile webpage, featuring summaries of their team members. Built using Node and Inquirer.js.",
  profileGenPic,
  "https://drive.google.com/file/d/1GXXnc2q5sv7_aGnGXkHwB0Wg7uvSFpcF/view",
  "https://github.com/jpreston-alt/Team-Profile-Generator"
);

const notepadCard = new ProjectCard(
  "Notepad",
  "Organize your thoughts with Notepad, a note-taking application build with Express.js. Notepad helps you keep track of everything you need to remember by allowing you to save, view, and delete important reminders and thoughts.",
  notepadPic,
  null,
  "https://github.com/jpreston-alt/Express-Note-Taker"
);

const burgerCard = new ProjectCard(
  "Eat-Da-Burger",
  "A full-stack, restaurant application that allows the user to input, devour, rate, and delete tasty burgers from a MySQL database. Eat-Da-Burger utilizes the MVC design pattern, and is built using MySQL, Node, Express, Handlebars and a homemade ORM.",
  burgerPic,
  null,
  "https://github.com/jpreston-alt/Burger-Logger"
);

const budgetCard = new ProjectCard(
  "Check Yourself",
  "A full-stack budgeting application, that helps the user track their monthly expenses and manage their money wisely, based on the 50/30/20 budgeting rule. Check Yourself is built using Node, Express, Passport and a MySQL Database. Guest Login: guest@checkyourself.com, guestpw.",
  checkYourselfPic,
  null,
  "https://github.com/jpreston-alt/Check-Yourself"
);

const employeeCard = new ProjectCard(
  "Employee Tracker",
  "A command-line, content management system, that allows business owners to easily manage and track information about their employees. Built using Node, Inquirer.js, and a MySQL database.",
  employeePic,
  "https://drive.google.com/file/d/1to-rywQco0bl-7fDBKE7dkzV-utTVTK7/view",
  "https://github.com/jpreston-alt/Employee-Tracker"
);

const fitnessCard = new ProjectCard(
  "Fitness Tracker",
  "A full-stack application that allows the user to track their daily workouts and fitness progress. Built using JavaScript, Node, Express, MongoDB, and Mongoose.",
  fitnessPic,
  null,
  "https://github.com/jpreston-alt/fitness-tracker"
);

const pwaCard = new ProjectCard(
  "Budget Tracker",
  "A budgeting application that utilizes Service Workers, the Cache API, and IndexedDB to allow the user to track their expenses and manage their money, with or without internet connection.",
  pwaPic,
  "https://jp-pwa-budget.herokuapp.com/",
  "https://github.com/jpreston-alt/pwa-budget-tracker"
);

const buddyCard = new ProjectCard(
  "Buddy Match",
  "A dog adoption application that utilizes data from The Pet Finder API, and allows users to search for adoptable dogs and local shelters. This application is a work in progress and is my first attempt at a full MERN stack application (MongoDB, Express, React, and Node).",
  buddyPic,
  "https://buddy-match-dotcom.herokuapp.com/",
  "https://github.com/jpreston-alt/buddy-match"
);

const voteCard = new ProjectCard(
  "Vote Goat",
  "A web application that provides users with information about when, where, and how to vote in their area and gives them access to contact information about their representatives. Logged in users may save events to their calendar, and locations and representatives to their dashboard. A full MERN stack applicaiton built using React, Express, Node, MongoDB and Auto0.",
  votePic,
  null,
  "https://github.com/jpreston-alt/Voting-App"
);

let portfolioData = [
  buddyCard,
  quarCard,
  voteCard,
  budgetCard,
  employeeDirCard,
  burgerCard,
  notepadCard,
  fitnessCard,
  weatherCard,
];

export default portfolioData;
