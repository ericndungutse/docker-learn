FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
ENV NODE_ENV=production

RUN npm install


COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]