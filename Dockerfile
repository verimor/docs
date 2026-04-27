FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json .
RUN npm install

COPY docs ./docs
RUN npm run docs:build

# Production: serve with nginx
FROM nginx:alpine

COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
