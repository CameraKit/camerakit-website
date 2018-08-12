FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app
RUN yarn run build

# Set the default host/port
ENV HOST 0.0.0.0
ENV PORT 8080

CMD [ "yarn", "start" ]