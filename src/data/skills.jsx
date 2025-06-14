import chakraUi from "./../assets/images/icon/chakra-ui.png";
import css from "./../assets/images/icon/css.png";
import eslint from "./../assets/images/icon/eslint.png";
import figma from "./../assets/images/icon/figma.png";
import git from "./../assets/images/icon/git.png";
import github from "./../assets/images/icon/github-icon.png";
import html from "./../assets/images/icon/html.png";
import jasmine from "./../assets/images/icon/jasmine.png";
import js from "./../assets/images/icon/js.png";
import materialUi from "./../assets/images/icon/material-ui.png";
import netlify from "./../assets/images/icon/netlify.png";
import nextjs from "./../assets/images/icon/nextjs.png";
import npm from "./../assets/images/icon/npm.png";
import prettier from "./../assets/images/icon/prettier.png";
import reactRouter from "./../assets/images/icon/react-router.png";
import react from "./../assets/images/icon/react.png";
import reduxToolkit from "./../assets/images/icon/redux-toolkit.png";
import mysql from "./../assets/images/icon/mysql.png";
import tailwindCss from "./../assets/images/icon/tailwind-css.png";
import typescript from "./../assets/images/icon/typescript.png";
import vercel from "./../assets/images/icon/vercel.png";
import vite from "./../assets/images/icon/vite.png";
import vscode from "./../assets/images/icon/vscode.png";
import zustand from "./../assets/images/icon/zustand.png";
import express from "./../assets/images/icon/express.png";
import nodejs from "./../assets/images/icon/nodejs.png";
import authjs from "./../assets/images/icon/auth-js.png";
import mongoDb from "./../assets/images/icon/mongo-db.png";
import uiAnimation from "./../assets/images/icon/ui-animation.png";
import aiIcon from "./../assets/images/icon/ai-icon.png";
import responsiveDesign from "./../assets/images/icon/responsive-design.png";
import apiIcon from "./../assets/images/icon/api.png";

import {
  Code,
  Layout,
  Paintbrush,
  Server,
  Database,
  Cloud,
  Bug,
  Settings,
  Sparkles,
  Zap,
  Workflow,
  BadgeHelp,
  ShieldCheck,
  Bot,
} from "lucide-react";

export const skills = [
  {
    title: "Programming Languages",
    icon: <Code color="#FF6B6B" size={20} />,
    items: [
      { name: "TypeScript", icon: typescript, site: "https://www.typescriptlang.org/" },
      { name: "JavaScript", icon: js, site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "HTML5", icon: html, site: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: css, site: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    title: "Frontend Developments",
    icon: <Layout color="#4D96FF" size={20} />,
    items: [
      { name: "Next.js", icon: nextjs, site: "https://nextjs.org/" },
      { name: "React", icon: react, site: "https://react.dev/" },
      { name: "Redux Toolkit", icon: reduxToolkit, site: "https://redux-toolkit.js.org/" },
      { name: "Zustand", icon: zustand, site: "https://zustand-demo.pmnd.rs/" },
      { name: "React Router", icon: reactRouter, site: "https://reactrouter.com/" },
    ],
  },
  {
    title: "UI Frameworks",
    icon: <Paintbrush color="#EFB93F" size={20} />,
    items: [
      { name: "Tailwind CSS", icon: tailwindCss, site: "https://tailwindcss.com/" },
      { name: "Material UI", icon: materialUi, site: "https://mui.com/" },
      { name: "Chakra UI", icon: chakraUi, site: "https://chakra-ui.com/" },
      // Add Shadcn, Reactbits, bootstrap later
    ],
  },
  {
    title: "Backend Development",
    icon: <Server color="#B86ADB" size={20} />,
    items: [
      { name: "Node.js", icon: nodejs, site: "https://nodejs.org/en" },
      { name: "Express", icon: express, site: "https://expressjs.com/" },
      { name: "Auth.js", icon: authjs, site: "https://authjs.dev/" },
      // Add Passport.js later
    ],
  },
  {
    title: "Databases",
    icon: <Database color="#56C596" size={20} />,
    items: [
      { name: "MongoDB", icon: mongoDb, site: "https://www.mongodb.com/" },
      { name: "MySQL", icon: mysql, site: "https://dev.mysql.com/" },
    ],
  },
  {
    title: "DevOps & Clouds",
    icon: <Cloud color="#00C6AE" size={20} />,
    items: [
      { name: "Git", icon: git, site: "https://git-scm.com/" },
      { name: "GitHub", icon: github, site: "https://github.com/" },
      { name: "Vercel", icon: vercel, site: "https://vercel.com/" },
      { name: "Netlify", icon: netlify, site: "https://www.netlify.com/" },
    ],
  },
  {
    title: "Testing & Code Quality",
    icon: <Bug color="#F77F00" size={20} />,
    items: [
      // Add Jest later
      { name: "ESLint", icon: eslint, site: "https://eslint.org/" },
      { name: "Prettier", icon: prettier, site: "https://prettier.io/" },
      { name: "Jasmine", icon: jasmine, site: "https://jasmine.github.io/" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Settings color="#9D4EDD" size={20} />,
    items: [
      { name: "Vite", icon: vite, site: "https://vite.dev/" },
      { name: "npm", icon: npm, site: "https://www.npmjs.com/" },
      { name: "VS Code", icon: vscode, site: "https://code.visualstudio.com/" },
      { name: "Figma", icon: figma, site: "https://www.figma.com/" },
    ],
  },
  {
    title: "Other Skills",
    icon: <Sparkles color="#FF9F1C" size={20} />,
    items: [
      { name: "API Integration", icon: uiAnimation, site: "" },
      { name: "Responsive Design", icon: responsiveDesign, site: "" },
      { name: "AI Integration", icon: aiIcon, site: "" },
      { name: "UI Animation", icon: uiAnimation, site: "" },
    ],
  },
];


