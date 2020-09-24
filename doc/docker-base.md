 - base Linux

    FROM debian:stretch
    WORKDIR /app
    ADD . /app
    RUN apt-get update
    RUN apt-get install -y screen vim git nginx build-essential gcc g++ make wget curl fonts-noto-cjk
    RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
    RUN apt-get install -y nodejs
    RUN npm install -g n
    RUN n 14.11.0
    RUN npm install -g LiveScript
    RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ stretch-pgdg main" > /etc/apt/sources.list.d/pgdg.list
    RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
    RUN apt-get update
    RUN apt-get install -y postgresql-11
    RUN pg_ctlcluster 11 main start

 - express server
    FROM node:10.14.1
    WORKDIR /app
    ADD . /app
    # --unsafe-perm permit some actions to be run as root.
    # https://stackoverflow.com/questions/18136746/npm-install-failed-with-cannot-run-in-wd
    RUN npm install --unsafe-perm
    EXPOSE 8901
    CMD npm run dev
