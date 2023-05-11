import countdownApp from '../images/countdownApp.png';
import alpacaVids from '../images/alpacavids.png';
import recipegif from '../images/recipe.gif';
import rockPaperScissors from '../images/rock-paper-scissors.png';
import ipTracker from '../images/ip-tracker.png';
import interactiveComment from '../images/interactive-comment.png';
import calculatorApp from '../images/calculatorApp.png';

const projects = [
    {
        title: "Interactive Comments Page",
        subTitle: "An interactive comments section for users to add, reply to, edit, and delete comments.",
        description: "This page was built with a mobile-first approach in mind using the React JS framework and Sass on the frontend. On the backend, data is stored in a Postgres database. Spring Boot framework is used to interact with the database.",
        techStack: [
            "Functional full-stack application",
            "React JS",
            "Sass - mobile first approach to build a responsive application",
            "Spring Boot - using the MVC pattern",
            "CRUD API capabilities"
        ],
        url: "https://kbs-interactive-comments.netlify.app/",
        github: [
            "https://github.com/Kerri-AnnBates/interactive-comments"
        ],
        imageSource: interactiveComment
    },
    {
        title: "Launch Countdown Landing Page",
        subTitle: "Landing page displaying countdown of a launch.",
        description: "This landing page is built with css matching the mock-up design. Vanilla JavaScript is used to initiate the countdown of the launch.",
        techStack: [
            "Vanilla JavaScript",
            "Semantic HTML",
            "CSS"
        ],
        url: "https://countdown-launch.netlify.app/",
        github: [
            "https://github.com/Kerri-AnnBates/launch-countdown-timer-main"
        ],
        imageSource: countdownApp
    },
    {
        title: "IP Address Tracker",
        subTitle: "Display map and IP information based on the user's IP address. Allows for searching IP iniformation based on the IP address entered in search form, or by domain name.",
        description: "Responsive application built using the mobile first approach. Built using React.js, making http requests to a third party API. Mapbox API is used to diplay map.",
        techStack: [
            "Axios http client",
            "SASS preprocessor",
            "React.js",
        ],
        url: "https://ip-domain-tracker.netlify.app/",
        github: [
            "https://github.com/Kerri-AnnBates/ip-address-tracker"
        ],
        imageSource: ipTracker
    },
    {
        title: "Basic Calculator App",
        subTitle: "Basic calculator to satisfy your basic math needs!",
        description: "The main objective I had for building this application was to practice organizing my code by implementing the object oriented programing paradigm. This application is also responsive, using css grids to keep everything structure and easily accessible.",
        techStack: [
            "Javascript", "HTML", "SASS preprocessor"
        ],
        url: "https://basiccalculatorkb.netlify.app/",
        github: [
            "https://github.com/Kerri-AnnBates/Calculator"
        ],
        imageSource: calculatorApp
    },
    {
        title: "Alpaca Vids",
        subTitle: "Web application that allows users to get constructive feedback on interview performance in a team envirnment.",
        description: "A video journal web application that allow users to practice answering prompt questions by recording themselves answering those questions and receiving feedback from their team members on one platform. Worked with a remote team of 4 full-stack developers and 1 UX designer over 2 months. (This project has been updated since I have worked on it by other contributors).",
        techStack: [
            "Functioned as a full-stack developer",
            "Created several API endpoints, a protective middleware, and tests for those endpoints on the backend using jest, node, express and knex",
            "Worked with Postgres relational database",
            "Created responsive base layout with Sass",
            "Created actions in redux, dispatching data from endpoints to display on the frontend",
            "Implemented CRUD operations"
        ],
        url: "",
        github: [
            "https://github.com/Lambda-School-Labs/video-journal-for-teams-fe",
            "ttps://github.com/Lambda-School-Labs/video-journal-for-teams-be"
        ],
        imageSource: alpacaVids
    },
    {
        title: "Recipe App",
        subTitle: "Web application that allows users to manage their favorite recipes on one platform. (Work in progress)",
        description: "Currently in progress, this application offer users the ability to manage their recipes on one platform. To avoid cluttering their bookmarks with saved recipes.",
        techStack: [
            "Created several API endpoints, a protective middleware, using node, express and knex",
            "Used Formik, and Yup to manage form validations",
            "Created responsive styles and base layout with Sass",
            "Used ReactStrap where needed",
            "Created actions in redux, dispatching data from endpoints to display on the frontend",
            "Implemented CRUD operations"
        ],
        url: "",
        github: [
            "https://github.com/recipe-app-kb/recipe-fe",
            "https://github.com/recipe-app-kb/recipe-be"
        ],
        imageSource: recipegif
    },
]

export default projects;