FROM node:14

WORKDIR /app

COPY ./back/package*.json ./
RUN npm install

COPY ./back .
RUN npm run build

WORKDIR /app/front

COPY ./front/package*.json ./
RUN npm install

COPY ./front .
RUN npm run build

WORKDIR /app/back

CMD [ "npm", "start" ]
