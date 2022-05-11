FROM node:alpine

WORKDIR /app/server

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . . 

RUN yarn install

RUN npx prisma generate

EXPOSE 8080

CMD yarn start