// Frontend Thumbnails
import amazonClone from "./../assets/images/frontend-projects/amazon-clone.png";
import assemblyEndgame from "./../assets/images/frontend-projects/assembly-endgame.png";
import braySurfing from "./../assets/images/frontend-projects/bray-surfing.png";
import calculator from "./../assets/images/frontend-projects/calculator.png";
import diceRoller from "./../assets/images/frontend-projects/dice-roller.png";
import numberGuessing from "./../assets/images/frontend-projects/number-guessing.png";
import passwordGenerator from "./../assets/images/frontend-projects/password-generator.png";
import recipebotAi from "./../assets/images/frontend-projects/recipebot-ai.png";
import rockPaperScissors from "./../assets/images/frontend-projects/rock-paper-scissors.png";
import stopwatch from "./../assets/images/frontend-projects/stopwatch.png";
import temperatureConversion from "./../assets/images/frontend-projects/temperature-conversion.png";
import tenzies from "./../assets/images/frontend-projects/tenzies.png";
import todoList from "./../assets/images/frontend-projects/todo-list.png";
import travelJournal from "./../assets/images/frontend-projects/travel-journal.png";
import weatherApp from "./../assets/images/frontend-projects/weather-app.png";
import youtubeClone from "./../assets/images/frontend-projects/youtube-clone.png";
import portfolioWeb from "./../assets/images/frontend-projects/web-portfolio.png";

//Backend Thumbnails
import coffeeApi from "./../assets/images/backend-projects/coffee-api.png";

//Fullstack Thumbnails
import coffeeCulture from "./../assets/images/fullstack-projects/coffee-culture.png";
import founderHub from "./../assets/images/fullstack-projects/founder-hub.png";
import chatbotAI from "./../assets/images/fullstack-projects/ai-chatbot.png";




//ICONS

// import mysql from "./../assets/images/icon/mysql.png";
// import chakraUi from "./../assets/images/icon/chakra-ui.png";

import geminiAI from "./../assets/images/icon/gemini.png";
import typescript from "./../assets/images/icon/typescript.png";
import mongoDb from "./../assets/images/icon/mongo-db.png";
import tailwindCss from "./../assets/images/icon/tailwind-css.png";
import vercel from "./../assets/images/icon/vercel.png";
import nextjs from "./../assets/images/icon/nextjs.png";
import css from "./../assets/images/icon/css.png";
import html from "./../assets/images/icon/html.png";
import jasmine from "./../assets/images/icon/jasmine.png";
import js from "./../assets/images/icon/js.png";
import materialUi from "./../assets/images/icon/material-ui.png";
import netlify from "./../assets/images/icon/netlify.png";
import reactRouter from "./../assets/images/icon/react-router.png";
import react from "./../assets/images/icon/react.png";
import reduxToolkit from "./../assets/images/icon/redux-toolkit.png";
import vite from "./../assets/images/icon/vite.png";
import zustand from "./../assets/images/icon/zustand.png";
import hfLogo from "./../assets/images/icon/hf-logo.png";
import openWeather from "./../assets/images/icon/openweather.png";
import framerMotion from "./../assets/images/icon/framer-motion.png";
import nodejs from "./../assets/images/icon/nodejs.png";
import express from "./../assets/images/icon/express.png";
import authjs from "./../assets/images/icon/auth-js.png";
import sanity from "./../assets/images/icon/sanity.png";



export const frontendProjects = [
  {
    img: braySurfing,
    title: "Clothing Store",
    description:
      "An online clothing store, allowing users to browse products, add to cart, and checkout.",
    link: "https://bray-surfing.netlify.app/",
    github: "https://github.com/rafiframadhana/clothing-store-react",
    techStack: [
      { name: "React", icon: react },
      { name: "Zustand", icon: zustand },
      { name: "React Router", icon: reactRouter },
      { name: "MaterialUi", icon: materialUi },
      { name: "Netlify", icon: netlify },
    ],
  },
  {
    img: recipebotAi,
    title: "RecipeBot AI",
    description:
      "An AI-powered recipe suggestion app that helps users discover new recipes based on available ingredients.",
    link: "https://recipebot-ai.netlify.app/",
    github: "https://github.com/rafiframadhana/recipebot-AI",
    techStack: [
      { name: "React", icon: react },
      { name: "Hugging Face", icon: hfLogo },
      { name: "MaterialUi", icon: materialUi },
      { name: "Netlify", icon: netlify },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: portfolioWeb,
    title: "Portfolio Website",
    description:
      "A modern and interactive personal portfolio showcasing my projects, skills, and achievement.",
    link: "https://rafiframadhana.site/",
    github: "https://github.com/rafiframadhana/my-portfolio-react",
    techStack: [
      { name: "React", icon: react },
      { name: "Framer Motion", icon: framerMotion },
      { name: "MaterialUi", icon: materialUi },
      { name: "Netlify", icon: netlify },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: amazonClone,
    title: "Amazon Clone",
    description:
      "A replica of Amazon's online store, showcasing product listings, a shopping cart, and a checkout process.",
    link: "https://rafiframadhana.github.io/amazon-clone/",
    github: "https://github.com/rafiframadhana/amazon-clone",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Jasmine", icon: jasmine },

    ],
  },

  {
    img: weatherApp,
    title: "Weather App",
    description:
      "A weather web application that allows users to check the current weather by searching for a specific city.",
    link: "https://rafiframadhana.github.io/Weather-App/",
    github: "https://github.com/rafiframadhana/Weather-App",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Open Weather", icon: openWeather },

    ],
  },
  {
    img: travelJournal,
    title: "Travel Journal",
    description:
      "A digital travel journal where users can document their trips, upload photos, and share experiences.",
    link: "https://rafiframadhana.github.io/travel-journal/",
    github: "https://github.com/rafiframadhana/travel-journal",
    techStack: [
      { name: "React", icon: react },
      { name: "Javascript", icon: js },
      { name: "CSS", icon: css },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: youtubeClone,
    title: "Youtube Clone",
    description:
      "A simple YouTube clone, featuring a basic layout with video thumbnails, and titles.",
    link: "https://rafiframadhana.github.io/youtube-clone/",
    github: "https://github.com/rafiframadhana/youtube-clone",
    techStack: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: assemblyEndgame,
    title: "Word Guessing Game",
    description:
      "A word-guessing game where players attempt to guess the hidden word within a limited number of tries.",
    link: "https://rafiframadhana.github.io/assembly-endgame/",
    github: "https://github.com/rafiframadhana/assembly-endgame",
    techStack: [
      { name: "React", icon: react },
      { name: "Javascript", icon: js },
      { name: "CSS", icon: css },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: tenzies,
    title: "Tenzies",
    description:
      "A fun and interactive dice-rolling game where players try to get all dice to show the same number.",
    link: "https://rafiframadhana.github.io/tenzies-game/",
    github: "https://github.com/rafiframadhana/tenzies-game",
    techStack: [
      { name: "React", icon: react },
      { name: "Javascript", icon: js },
      { name: "CSS", icon: css },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: calculator,
    title: "Calculator",
    description:
      "A simple calculator that supports basic arithmetic operations.",
    link: "https://rafiframadhana.github.io/Calculator/",
    github: "https://github.com/rafiframadhana/Calculator",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: todoList,
    title: "To do List",
    description:
      "A to-do list application that allows users to add, edit, and delete tasks.",
    link: "https://rafiframadhana.github.io/To-do-List/",
    github: "https://github.com/rafiframadhana/To-do-List",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: rockPaperScissors,
    title: "Rock Paper Scissors",
    description:
      "A classic Rock, Paper, Scissors game where users can play against the computer.",
    link: "https://rafiframadhana.github.io/Rock-Paper-Scissors-Game/",
    github: "https://github.com/rafiframadhana/Rock-Paper-Scissors-Game",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: passwordGenerator,
    title: "Password Generator",
    description:
      "Generates customizable random passwords with options for length and character types.",
    link: "https://rafiframadhana.github.io/Password-Generator/",
    github: "https://github.com/rafiframadhana/Password-Generator",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: temperatureConversion,
    title: "Temperature Conversion",
    description:
      "Converts temperatures between Celsius, Fahrenheit, and Kelvin.",
    link: "https://rafiframadhana.github.io/Temperature-conversion/",
    github: "https://github.com/rafiframadhana/Temperature-conversion",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: diceRoller,
    title: "Dice Roller Game",
    description:
      "Simulates rolling one or more dice and displays the results visually.",
    link: "https://rafiframadhana.github.io/Dice-Roller-Game/",
    github: "https://github.com/rafiframadhana/Dice-Roller-Game",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: stopwatch,
    title: "Stopwatch",
    description:
      "A minimalist stopwatch with start, stop, and reset functions, with a modern UI.",
    link: "https://rafiframadhana.github.io/Stopwatch/",
    github: "https://github.com/rafiframadhana/Stopwatch",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: numberGuessing,
    title: "Number Guessing Game",
    description:
      "A game where the player guesses a randomly generated number, with feedback on whether the guess is too high or low.",
    link: "https://rafiframadhana.github.io/Number-Guessing-Game/",
    github: "https://github.com/rafiframadhana/Number-Guessing-Game",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
];


export const backendProjects = [
  {
    img: coffeeApi,
    title: "Coffee API",
    description:
      "An API that provides access to a collection of coffee products.",
    link: "https://coffeeshop-backend.up.railway.app/",
    github: "https://github.com/rafiframadhana/coffee-api",
    techStack: [
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongoDb },
    ],
  },
];

export const fullstackProjects = [  
  {
    img: coffeeCulture,
    title: "Coffee Shop: Coffee Culture",
    description:
      "A modern coffee shop website featuring a curated coffee menu, easy ordering, and a stylish design.",
    link: "https://coffeeculture-id.netlify.app/",
    github: "https://github.com/rafiframadhana/coffee-shop",
    techStack: [
      { name: "React", icon: react },
      { name: "Redux", icon: reduxToolkit },
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongoDb},
    ],
  },
  {
    img: founderHub,
    title: "FounderHub",
    description:
      "A platform to pitch startup ideas, vote on projects, and connect with fellow entrepreneurs.",
    link: "https://founder-hub.vercel.app/",
    github: "https://github.com/rafiframadhana/founder-hub",
    techStack: [
      { name: "Next.js", icon: nextjs },
      { name: "Tailwind CSS", icon: tailwindCss },
      { name: "Auth.js", icon: authjs },
      { name: "Sanity", icon:  sanity},
      { name: "Vercel", icon: vercel },
    ],
  },
  {
    img: chatbotAI,
    title: "AI Chatbot",
    description:
      "An AI chatbot that helps users learn more about me by answering questions and guiding them through my portfolio.",
    link: "https://rafif-ai.vercel.app/",
    github: "https://github.com/rafiframadhana/chatbot-ai-gemini",
    techStack: [
      { name: "Next.js", icon: nextjs },
      { name: "TypeScript", icon: typescript },
      { name: "Tailwind CSS", icon: tailwindCss },
      { name: "Gemini AI", icon:  geminiAI},
      { name: "Vercel", icon: vercel },
    ],
  },
];

export const allProjects = [...fullstackProjects, ...frontendProjects, ...backendProjects]
