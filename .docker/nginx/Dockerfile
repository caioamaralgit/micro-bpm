FROM node:alpine AS builder
WORKDIR /app
ADD web .
RUN npm i
RUN npm run build

FROM nginx:alpine
WORKDIR /var/www/html
ADD .docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /var/www/html/public
