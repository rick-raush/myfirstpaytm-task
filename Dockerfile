# Stage 1 - Node app
FROM node:18 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2 - Nginx with Node app
FROM nginx:alpine


# Install Node.js and bash
RUN apk add --no-cache nodejs npm bash \
    && ln -s /usr/bin/nodejs /usr/bin/node


COPY --from=builder /usr/src/app /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh
RUN chmod +x /start.sh
WORKDIR /app

# Use the wait-for script
CMD ["/start.sh"]



