# PROD CONFIG
FROM node:lts-alpine as prod

WORKDIR /app

COPY package*.json ./

WORKDIR /app/backend

COPY ./backend/ ./

RUN yarn --pure-lockfile

WORKDIR /app/frontend

COPY ./frontend/ ./

RUN yarn --pure-lockfile

RUN yarn build

RUN mv ./build ../backend

WORKDIR /app

RUN rm -rf frontend



# CMD [ "npm", "start" ]
FROM node:lts-alpine

WORKDIR /app

# copy from build image
COPY --from=prod /app/backend/ ./
ENV NODE_ENV=production
CMD [ "node", "server.js" ]