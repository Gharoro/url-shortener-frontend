# URL Shortener Frontend Setup Guide

This readme provides a setup guide to get the React frontend running locally.

## Description

Application was built with React + Vite + Typescript + Tailwind CSS. Ensure the backend API is setup and running before running this project locally.
The application supports both light and dark themes.

## First step, clone the github repository

```bash
$ git clone https://github.com/Gharoro/url-shortener-frontend.git
$ cd url-shortener-frontend
```

## Project setup

In the root of project, run the command below to install all necessary dependencies

```bash
$ npm install
```

## Add .env

Create a .env file in the root of the project folder and add the following variables

```bash
$ VITE_API_BASE_URL = http://localhost:2025/api
$ VITE_URL_DOMAIN = 'http://localhost:2025'
```

Ensure the localhost URLs and port number is the same as the backend

## Run the project

Execute the command below to start the project locally.

```bash
$ npm run dev
```

## Visit Application

While the application is running, visit the following URL on your browser to view the appllication

[http://localhost:5173](http://localhost:5173)
