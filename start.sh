#!/bin/sh

# Start Node app in background
node app.js &

# Wait until Node is listening on port 3000
while ! nc -z localhost 3000; do
  echo "Waiting for Node.js to start..."
  sleep 1
done

echo "Node.js is up, starting Nginx..."

# Start Nginx in foreground
nginx -g 'daemon off;'
