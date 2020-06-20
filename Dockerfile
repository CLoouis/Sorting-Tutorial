# stage: 1
FROM node:10

# set working directory
WORKDIR /app

# Copies package
COPY package.json ./
COPY package-lock.json ./

# Install all node packages
RUN npm install

# Copy everything to Docker environtment
COPY . ./

# Uses port which is used
EXPOSE 3000

# Run
CMD ["npm", "start"]