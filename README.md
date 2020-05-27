# Sorting-Tutorial
This project was created for Ca_IRK 18 selection 

## Description
Sorting-Tutorial is a web application that allows one to learn sorting algorithm with visualization. This application can be run from web-browser local host.

## Prerequisite
1. Latest Web Browser
2. React
3. Yarn 
4. d3

## Run

### By React
1. Clone or download this repository
2. In the project directory run
`yarn`
or
`npm install`
and 
`npm install d3 --save` 
if you haven't installed d3 in before
3. After a node module folder is created, run 
`yarn start`
to run the app in the development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### By Docker
1. In the project directory run
`docker build . -t sorting`
2. In the project directory run
 `docker run -it --rm -p 3000:3000 -d sorting`
3. To know the docker-machine ip default run
`docker-machine ip default`
4. Run http://your_ip_default:300/ in your browser
