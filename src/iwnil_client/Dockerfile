#STAGE 1
FROM node:20.8.0 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

#STAGE 2
FROM nginx:stable-alpine3.17
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/iwnil /usr/share/nginx/html