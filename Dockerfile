FROM node:16.5.0-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /usr/src/kasa-app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . /kasa-app
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]