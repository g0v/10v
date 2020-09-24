FROM node:10.14.1
WORKDIR /app
ADD . /app
# --unsafe-perm permit some actions to be run as root.
# https://stackoverflow.com/questions/18136746/npm-install-failed-with-cannot-run-in-wd
RUN npm install --unsafe-perm
EXPOSE 8901
CMD npm run dev
