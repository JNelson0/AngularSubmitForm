# FROM node:alpine

# WORKDIR /app/client

# COPY package*.json ./

# COPY tsconfig.json ./

# COPY . . 

# RUN yarn install

# EXPOSE 4200

# CMD /app/client/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check


FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY /dist/client /usr/share/nginx/html


