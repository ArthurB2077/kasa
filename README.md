# Kasa
In this project, I created interface for a lodgings lend company. The site is made of 4 pages: a homepage, about page, lodging sheet page and a not found page.
You can see the sketch here : https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A2
This app use React, React router, Sass, Typescript and docker. 
The content is fully responsive. 
Using typescript was my initiative as a developpement dependency.


## Created with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install the project

### ` git clone`
First you need to download the repository with : git clone https://github.com/ArthurB2077/arthurbequie_11_02032022.git 

### `yarn install`
Then run at project root the packages installation. You should see a new node_modules directory after this command.

### `docker-compose up --build`
The app run in a docker container. So my advise is to not use yarn start but: docker-compose up --build
After that, you can go to the adress on your loca machine: http://localhost/3000 and you're up !

### `docker-compose up`
If you just stopped the container and you need to re-run it just make this command

### `docker-compose down -v`
If you need to removes the volumes run this command

### `docker stop $(docker ps -a -q)`
If you need to stop all running containers

### `docker stop docker rm $(docker ps -a -q)`
If you need to delete all stopped containers

# Project stage
The project is done and ready for deployement

# Make with 
Visual Studio Code

# Use
React.js, Typescript, Javascript, Sass, Css, HTML, Docker
