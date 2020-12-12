import randomQuote from '../images/random-quote-machine.gif';
import alpacaVids from '../images/alpacavids.gif';
import recipegif from '../images/recipe.gif';
import weatherApp from '../images/weatherApp.png';
import rockPaperScissors from '../images/rock-paper-scissors.png';
import ipTracker from '../images/ip-tracker.png';

const projects = [
    {
        title: "Rock, Paper, Scissors",
        subTitle: "A rock, paper, scissors game played against the computer. First to five win. Check it out!",
        description: "This game is built with HTML, CSS, and vanilla Javascript. It was very exciting seeing everything come together.",
        techStack: [
            "HTML", "LESS", "Javascript (ES6)"
        ],
        url: "https://kbs-rock-paper-scissors.netlify.app/",
        github: [
            "https://github.com/Kerri-AnnBates/rock-paper-scissors"
        ],
        imageSource: rockPaperScissors
    },
    {
        title: "Random Quote Machine",
        subTitle: "Simple website that displays randomly generated quotes to the user.",
        description: "This simple application took approximately less than a day to complete. It demonstrates the use of react class components, connection to a thrid party API, and Sass.",
        techStack: [
            "React class components",
            "Axios HTTP client",
            "Preprocessor scripting language - Sass"
        ],
        url: "https://randomquotemachinekb.netlify.com/",
        github: [
            "https://github.com/Kerri-AnnBates/Random-Quote-Machine"
        ],
        imageSource: randomQuote
    },

    {
        title: "IP Address Tracker",
        subTitle: "Web application display map IP information based on the user's IP address. Allows for searching IP iniformation based on the IP address entered in search form, or by domain name.",
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
        title: "Weather App",
        subTitle: "Web application that display the weather in your local area and other cities throughtout the US via search.",
        description: "Web application that display the weather in your local area. It also gives the user the ability to search and retrieve weather data from other cities throughout the USA, as well as save their favorite city. This app demonstrates the use of react functional components, react hooks, connection to a thrid party API, saving data, Sass and the BEM styling methodology. Future features in the making.",
        techStack: [
            "React functional components",
            "React hooks",
            "Axios HTTP client",
            "Preprocessor scripting language - Sass",
            "Mobile-first style approach"
        ],
        url: "https://theweatherapp-kb.herokuapp.com/",
        github: [
            "https://github.com/Kerri-AnnBates/weather-app"
        ],
        imageSource: weatherApp
    },
    {
        title: "Alpaca Vids",
        subTitle: "Web application that allows users to get constructive feedback on interview performance in a team envirnment.",
        description: "A video journal web application that allow users to practice answering prompt questions by recording themselves answering those questions and receiving feedback from their team members on one platform. Worked with a remote team of 4 full-stack developers and 1 UX designer over 2 months.",
        techStack: [
            "Functioned as a full-stack developer",
            "Created several API endpoints, a protective middleware, and tests for those endpoints on the backend using jest, node, express and knex",
            "Worked with Postgres relational database",
            "Created responsive base layout with Sass",
            "Created actions in redux, dispatching data from endpoints to display on the frontend",
            "Implemented CRUD operations"
        ],
        url: "https://www.alpacavids.com/",
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
    }
]

export default projects;