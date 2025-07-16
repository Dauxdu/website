# Stage 1: Builder
FROM node:24-alpine AS builder

WORKDIR /builder

COPY postcss.config.js .
COPY tailwind.config.js .
COPY package*.json ./

COPY public ./public
COPY src ./src

RUN npm ci && npm run build

# Stage 2: App
FROM nginx:1.29-alpine

COPY --from=builder /builder/build /opt/site
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
