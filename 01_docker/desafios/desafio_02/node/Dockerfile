FROM node:15

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install mysql2 --save
RUN npm install express --save


COPY . .

EXPOSE 3000

CMD ["npm", "start"]