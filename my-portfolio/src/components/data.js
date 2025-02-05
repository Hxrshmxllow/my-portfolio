import tradingBotImage from '../images/trading-bot.png';
import noblemart from '../images/noblemart.mov';
import njtransit from '../images/njtransit.mov';
import tictactoe from '../images/tictactoe.mov';
import rulate from '../images/rulate.mov';
import bank from '../images/bank.mov';
import chess from '../images/chess.mov';
import poker from '../images/poker.mov';
import css from '../images/css.png';
import django from '../images/django.png'
import flask from '../images/flask.png';
import html from '../images/html.png';
import java from '../images/java.png';
import js from'../images/js.png';
import machinelearning from '../images/machine-learning.png';
import nodejs from '../images/node-js.png';
import openai from '../images/openai.png';
import python from '../images/python.png';
import reactjs from '../images/react-js.png';
import sql from '../images/sql.png';
import vscode from '../images/vscode.png';
import github from '../images/github1.png';
import pcep from '../images/pcep.pdf';
import jpmorgan from '../images/jpmorgan.pdf';

export const projects = [
    {
      title: "Trading Bot with EMA/SMA Strategy",
      techstack: "Python, Mathplotlib, YFinance, Alpaca API",
      description:"Integrated with Alpaca API for paper trading and used Matplotlib for visualizing data and analyzing strategy performance.",
      image: tradingBotImage,
      video: null,
      link: "https://github.com/Hxrshmxllow/Projects/tree/main/Trading%20Bot"
    },
    {
      title: "NobleMart",
      techstack: "Python, Flask, SQLite, HTML, TailwindCSS, UPCiteMDB API, Ebay API",
      description:"Developed an e-commerce website for a fragrance business that features an admin dashboard for inventory management (delete, update, add via UPC lookup).",
      image: null,
      video: noblemart,
      link: "https://github.com/Hxrshmxllow/Projects/tree/main/noblemart"
    },
    {
      title: "Chess",
      techstack: "Python, PyGame, PyTorch",
      description:"Implement a pvp chess game with check and checkmate detection. Currently building a reinforcement learning model using PyTorch, trained on Lichess game data to predict optimal moves and enhance AI performance.",
      image: null,
      video: chess,
      link: null
    },
    {
      title: "Poker",
      techstack: "Python, PyTorch",
      description:"Developing a poker application with an AI opponent being integrated using PyTorch to create a model that can play against human players.",
      image: null,
      video: poker,
      link: "https://github.com/Hxrshmxllow/Projects/tree/main/Poker"
    },
    {
      title: "NJ-Transit Lost and Found",
      techstack: "Python, Flask, HTML, Tailwind CSS, JS, Firebase, OpenAI API",
      description:"Collabrated with a team of 4 to create a lost and found database for NJ Transit during a Rutgers University Hackathon. Images of lost items will be processed via OpenAI API to create a description and post.",
      image: null,
      video: njtransit,
      link: 'https://github.com/Hxrshmxllow/Projects/tree/main/NJ-Transit-Lost-and-Found'
    },
    {
      title: "Tic-Tac-Toe",
      techstack: "Python, PyGame, Scikit-Learn",
      description: "Working on training a model to predict moves given board states.",
      image: null,
      video: tictactoe,
      link: 'https://github.com/Hxrshmxllow/Projects/blob/main/Tic-Tac-Toe'
    },
    {
      title: "Banking Applicaiton",
      techstack: "Java, JavaFX, Python, Flask, HTML, CSS, SQLite",
      description: "(Java verison) Implement user authentication, wire transfers and viewable transaction history. (Flask) Converting it into a full-stack application.",
      image: null,
      video: bank,
      link: 'https://github.com/Hxrshmxllow/Projects/tree/main/Bank'
    },
    {
      title: "RULate",
      techstack: "React-Native Expo, Firebase, GoogleMapsAPI, Stripe",
      description: "(Hackathon Winner) Rideshare app for Rutgers University Students. Implemented live route tracking and updates with payments made via Stripe.",
      image: null,
      video: rulate,
      link: 'https://github.com/Hxrshmxllow/HackRU'
    }
]

export const skills = [
  {
    name: "Python",
    image: python,
  },
  {
    name: "JavaScript",
    image: js,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "Java",
    image: java,
  },
  {
    name: "Node.js",
    image: nodejs,
  },
  {
    name: "React.js",
    image: reactjs,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "Django",
    image: django,
  },
  {
    name: "Flask",
    image: flask,
  },
  {
    name: "Machine Learning",
    image: machinelearning,
  },
  {
    name: "SQL",
    image: sql,
  },
  {
    name: "Visual Studio Code",
    image: vscode,
  },
  {
    name: "OpenAI API",
    image: openai,
  },
  {
    name: "Github",
    image: github,
  }
];

export const certificates = [
  {
    name: "Python Institute: Certified Entry-Level Python Programmer",
    image: pcep
  },
  {
    name: "JPMorgan and Chase Co. Quantitative Research Job Simulation",
    image: jpmorgan
  }
];
