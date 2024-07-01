FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD npm run dev


# docker build -t image_name .
# docker run -p 3000:3000 image_name