FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD npm start