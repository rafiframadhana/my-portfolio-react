// Frontend Thumbnails
import amazonClone from "./../assets/images/frontend-projects/amazon-clone.png";
import braySurfing from "./../assets/images/frontend-projects/bray-surfing.png";
import recipebotAi from "./../assets/images/frontend-projects/recipebot-ai.png";
import portfolioWeb from "./../assets/images/frontend-projects/web-portfolio.png";
import ipTracker from "./../assets/images/frontend-projects/ip-tracker.png";
import miniProjectsCollection from "./../assets/images/frontend-projects/mini-projects-collection.png";

//Backend Thumbnails
import coffeeApi from "./../assets/images/backend-projects/coffee-api.png";

//Fullstack Thumbnails
import coffeeCulture from "./../assets/images/fullstack-projects/coffee-culture.png";
import founderHub from "./../assets/images/fullstack-projects/founder-hub.png";
import chatbotAI from "./../assets/images/fullstack-projects/ai-chatbot.png";




//ICONS

// import mysql from "./../assets/images/icon/mysql.png";
// import chakraUi from "./../assets/images/icon/chakra-ui.png";
// import openWeather from "./../assets/images/icon/openweather.png";

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
import framerMotion from "./../assets/images/icon/framer-motion.png";
import nodejs from "./../assets/images/icon/nodejs.png";
import express from "./../assets/images/icon/express.png";
import authjs from "./../assets/images/icon/auth-js.png";
import sanity from "./../assets/images/icon/sanity.png";

/* 

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
    img: ipTracker,
    title: "IP Tracker",
    description:
      "A web application that tracks and displays IP address information, including location and network details",
    link: "https://ip-info-tracker.netlify.app/",
    github: "https://github.com/rafiframadhana/ip-tracker",
    techStack: [
      { name: "React", icon: react },
      { name: "Typescript", icon: typescript },
      { name: "Tailwind CSS", icon: tailwindCss },
      { name: "MaterialUI", icon: materialUi },

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
    img: miniProjectsCollection,
    title: "My Mini Projects Collection",
    description:
      "A web application to showcase my mini projects collection",
    link: "https://rafif-mini-projects.netlify.app/",
    github: "https://github.com/rafiframadhana/mini-projects-collection",
    techStack: [
      { name: "React", icon: react },
      { name: "Vite", icon: vite },
      { name: "CSS", icon: css },
      { name: "MaterialUI", icon: materialUi },

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
*/

export const projects = [
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
  {
    img: ipTracker,
    title: "IP Tracker",
    description:
      "A web application that tracks and displays IP address information, including location and network details",
    link: "https://ip-info-tracker.netlify.app/",
    github: "https://github.com/rafiframadhana/ip-tracker",
    techStack: [
      { name: "React", icon: react },
      { name: "Typescript", icon: typescript },
      { name: "Tailwind CSS", icon: tailwindCss },
      { name: "MaterialUI", icon: materialUi },

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
    img: miniProjectsCollection,
    title: "My Mini Projects Collection",
    description:
      "A web application to showcase my mini projects collection",
    link: "https://rafif-mini-projects.netlify.app/",
    github: "https://github.com/rafiframadhana/mini-projects-collection",
    techStack: [
      { name: "React", icon: react },
      { name: "Vite", icon: vite },
      { name: "CSS", icon: css },
      { name: "MaterialUI", icon: materialUi },

    ],
  },

  
];
