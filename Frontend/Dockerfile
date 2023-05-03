#stage 1
FROM node:latest as node
WORKDIR /app
COPY dist .
RUN npm install
# RUNnpm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/gocarshare /usr/share/nginx/html