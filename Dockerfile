# build env
FROM node:alpine as build

USER node

WORKDIR /app

COPY . ./
RUN npm install --silent
RUN npm run build

# prod env
FROM nginx
COPY - from=build /app/build /usr/share/nginx/html
COPY - from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]