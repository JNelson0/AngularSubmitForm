FROM node:alpine

WORKDIR /app/client

COPY package*.json ./

COPY tsconfig.json ./

COPY . . 

RUN yarn install

EXPOSE 4200

CMD /app/client/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check
# EXPOSE 4200

# CMD yarn run start

# RUN yarn run build

# FROM nginx:alpine

# EXPOSE 80

# COPY --from=node /app/client/dist/client /usr/share/nginx/html