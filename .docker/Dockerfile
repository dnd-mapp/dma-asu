FROM node:22.14 AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:1.27

COPY .docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/dma-asu/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
