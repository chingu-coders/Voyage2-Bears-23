FROM node:6.11.3

ENV NODE_ENV=production
ENV npm_config_loglevel=warn

WORKDIR /usr/src/app

COPY ./build /usr/src/app/build
COPY ./package.json /usr/src/app/package.json

# COPY ./.npmrc /usr/src/app/.npmrc

# COPY ./VERSION /usr/src/app/VERSION

RUN npm install && npm cache clean

EXPOSE 3000

CMD [ "npm", "start" ]
