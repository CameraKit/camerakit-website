# Use a Node.js image and assign it as our build
FROM mhart/alpine-node:10 as build

# Set the working directory, copy dependency management files to the working directory,
# and install the dependencies
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn install

# Copy all files to the working directly, build the application
# and purge the development dependencies
COPY . .
RUN yarn build && yarn --production

# Create a new image using a minimal Node.js image
# with no extra tools packaged in, such as Yarn or npm for the smallest final size
FROM mhart/alpine-node:base-10

# Set the working directory for the new image and
# set the `NODE_ENV` environment variable value to `production`
# along with setting the path for node_modules to be accessible
WORKDIR /usr/src
ENV NODE_ENV="production"
ENV PATH="./node_modules/.bin:$PATH"

# Copy files from the base image over to our new image's working directory
COPY --from=build /usr/src .

EXPOSE 3000

# Start the server for Next.js using Node.js
CMD ["next", "start"]