import tradingBotImage from '../images/trading-bot.png';
import noblemart from '../images/noblemart.mov';
import chess from '../images/chess.mov';
import poker from '../images/poker.jpg';
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
import github from '../images/github.png';

export const projects = [
    {
      title: "Trading Bot with EMA/SMA Strategy",
      subtitle: "Python, Mathplotlib, YFinance, Alpaca API",
      description:"Currently developing a trading bot using Yahoo Finance API to analyze an EMA/SMA strategy, factoring in risks and volatility for optimized trading decisions.\nIntegrated with Alpaca API for paper trading and used Matplotlib for visualizing data and analyzing strategy performance.\nAchieved a 13% profit for steady tickers and an average of 47% profit for high volatility tickers based on backtesting results.",
      image: tradingBotImage,
      video: null,
      link: "https://github.com/Hxrshmxllow/Projects/tree/main/Trading%20Bot"
    },
    {
      title: "NobleMart",
      subtitle: "Python, Flask, SQLite, HTML, TailwindCSS, UPCiteMDB API, Ebay API",
      description:"Developed an e-commerce website for a fragrance business that features an admin dashboard for inventory management (delete, update, add via UPC lookup).\nImplement a fully functional shopping cart feature and integrated inventory management controls that allowed real-time tracking of stock levels; provided analytics insights to identify top-selling products while enhancing user experience.",
      image: null,
      video: noblemart,
      link: "https://github.com/Hxrshmxllow/Projects/tree/main/noblemart"
    },
    {
      title: "Chess",
      subtitle: "Python, PyGame, PyTorch",
      description:"Created a player vs. player chess game using Pygame and implemented logic to detect check and checkmate scenarios. Currently building a reinforcement learning model using PyTorch, trained on Lichess game data to predict optimal moves and enhance AI performance.",
      image: null,
      video: chess,
      link: null
    },
    /*{
      title: "Poker",
      subtitle: "Python, PyTorch",
      description:"Developing a poker application with an AI opponent being integrated using PyTorch to create a model that can play against human players.",
      image: poker,
      video: null,
      link: null
    }*/
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
    name: "React",
    image: reactjs,
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
