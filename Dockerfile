# build environment
FROM node:14-buster as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production
COPY . ./
RUN npm run build

# envoy build
FROM envoyproxy/envoy:v1.18.3 as envoy-build
COPY ./envoy/envoy.yaml /etc/envoy/envoy.yaml

# production environment
FROM nginx:stable

# Update the package lists and install curl
RUN apt-get update \
    && apt-get install -y \
    curl \
    ca-certificates \
    libc6

# Check the network connection with curl
RUN curl -L google.com > /dev/null

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Copy envoy and its config from envoy-build stage
COPY --from=envoy-build /usr/local/bin/envoy /usr/local/bin/envoy
COPY --from=envoy-build /etc/envoy/envoy.yaml /etc/envoy/envoy.yaml

EXPOSE 3000
EXPOSE 9901
EXPOSE 8080

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml > /var/log/envoy.log 2>&1 & nginx -g "daemon off;" > /var/log/nginx.log 2>&1

