# syntax=docker/dockerfile:1
# build env
# FROM node:alpine as build

# USER node

# WORKDIR /app

# COPY . ./
# RUN npm install --silent && npm run build


FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
#COPY . .
# RUN yarn
# RUN yarn build

# prod env
FROM nginx:latest
COPY --from=0 /app/build /usr/share/nginx/html
COPY --from=0 /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]