// Skills Section Logo's
import htmlLogo from './assets/tech_logo/HTML.png';
import tailwindcssLogo from './assets/tech_logo/icons8-tailwind-css-48.png';
import sassLogo from './assets/tech_logo/icons8-sass-64.png';
import javascriptLogo from './assets/tech_logo/icons8-javascript-48.png';
import reactjsLogo from './assets/tech_logo/icons8-react-native-48.png';
import reduxLogo from './assets/tech_logo/icons8-redux-48.png';
import nextjsLogo from './assets/tech_logo/icons8-next.js-48.png';
import gsapLogo from './assets/tech_logo/Gsap logo.jpg';
import materialuiLogo from './assets/tech_logo/icons8-material-ui-48.png';
import bootstrapLogo from './assets/tech_logo/icons8-bootstrap-logo-48.png';
import springbootLogo from './assets/tech_logo/icons8-spring-boot-48.png';
import nodejsLogo from './assets/tech_logo/icons8-nodejs-48.png';
import expressjsLogo from './assets/tech_logo/icons8-express-js-50.png';
import mysqlLogo from './assets/tech_logo/icons8-mysql-logo-48.png';
import mongodbLogo from './assets/tech_logo/icons8-mongo-db-48.png';
import firebaseLogo from './assets/tech_logo/icons8-firebase-48.png';
import typescriptLogo from './assets/tech_logo/icons8-typescript-50.png';
import gitLogo from './assets/tech_logo/icons8-git-logo-48.png';
import githubLogo from './assets/tech_logo/icons8-github-logo-94.png';
import vscodeLogo from './assets/tech_logo/icons8-visual-studio-48.png';
import mantraCareLogo from './assets/mantraCare.jpg'
import { MdDescription } from 'react-icons/md';


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo},
            { name: 'Tailwind CSS', logo: tailwindcssLogo},
            { name: 'SASS', logo: sassLogo},
            { name: 'JavaScript', logo: javascriptLogo},
            { name: 'React JS', logo: reactjsLogo},
            { name: 'Redux', logo: reduxLogo},
            { name: 'Next JS', logo: nextjsLogo},
            { name: 'GSAP', logo: gsapLogo},
            { name: 'Material UI', logo: materialuiLogo},
            { name: 'Bootstrap', logo: bootstrapLogo},
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Springboot', logo: springbootLogo},
            { name: 'Node JS', logo: nodejsLogo},
            { name: 'Express JS', logo: expressjsLogo},
            { name: 'MySQL', logo: mysqlLogo},
            { name: 'MongoDB', logo: mongodbLogo},
            { name: 'Firebase', logo: firebaseLogo},

        ],
    },
      {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', logo: javascriptLogo},
            { name: 'Typescript', logo: typescriptLogo},

        ]
    },
      {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo},
            { name: 'Github', logo: githubLogo},
            { name: 'Vscode', logo: vscodeLogo},
        ]
    }
];

export const experiences = [
    {
        id:0,
        img:mantraCareLogo,
        role:"Fullstack Developer",
        company: "MantraCare",
        date: "January 2025- April-2025",
        desc:"Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "TypeScript",
            "Node JS",
            "Tailwind CSS",
            "Redux",
            "GitHub",
            "MySQL"
        ]

    }
];

export const projects = [
    {
        id:0,
        title: "Github Profile Detective",
        description:"In this I want to let you know about my project with the serious indective intention to provide you the main function variety",
        image: githubLogo,
        github:"",
        webapp: ""

    }
]