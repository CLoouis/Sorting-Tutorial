# Building Stage
FROM node as build-stage

# Create 'app' directory
WORKDIR /app

# Copy both package .json into app directory
COPY ./client/package*.json ./

# Install Vue.js project
RUN npm install

# Copy all project files into app directory
COPY ./client/ ./

# Build the app for production
RUN npm run build

# Production Stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]