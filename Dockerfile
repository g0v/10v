FROM node:10.14.1
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8901
CMD npm start
