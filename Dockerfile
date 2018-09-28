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

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD [ "yarn", "start" ]