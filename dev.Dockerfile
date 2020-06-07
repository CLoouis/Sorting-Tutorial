# PROD CONFIG
FROM node:lts-alpine as prod
WORKDIR /app
COPY ./package.json ./
WORKDIR /app/backend

COPY ./backend/ ./

RUN yarn install
WORKDIR /app/frontend

COPY ./frontend/ ./

RUN yarn install
WORKDIR /app

ENV NODE_ENV=production
VOLUME ["/app/backend","/app/frontend"]
CMD [ "npm", "start" ]

# DEV CONFIG
FROM prod as dev

EXPOSE 5000 3000

ENV NODE_ENV=development

RUN npm install -g nodemon
RUN npm install -g concurrently
RUN ls frontend
CMD [ "npm", "run", "dev" ]