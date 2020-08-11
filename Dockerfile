FROM node:lts-alpine3.9 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:lts-alpine3.9
WORKDIR /usr/src/app
COPY . .
COPY --from=build /usr/src/app /usr/src/app
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
CMD ["node", "index.js"]