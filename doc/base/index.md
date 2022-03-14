# Servebase

Servebase is a nodeJS / Express based server, designed as a basis of web server development in both Backend and Frontend.

Codestack of servebase:

 - nodejs
 - livescript
 - postgresql
 - express
 - stylus
 - pug
 - docker


## Usage

Use servebase as if you fork it, and constantly pull and merge changes from servebase repo. For more information, check `version-control`.

Once setup, run following commands:

    # for development
    npm run dev

    # or, for production
    npm start


### Customized Config

Instead of `npm`, you can run `start` script directly, with optional `-c <cfg-name>`:

    ./start
    # or, alternatively
    ./start -c myconfig

with `myconfig` option added, you should prepare a corresponding config file `config/private/myconfig.ls`. Check `config/private/demo.ls` for a sample config file.

### Database

To run most of the Servebase backend code you will need a corresponding database. For now Servebase supports Postgresql only. For a quick startup of a Postgresql Instance with docker, run following:

    npm run docker-db

You may need a corresponding database configuration in your private config file.

### Log ( TODO / TBD )

`./start` output logs into a log file `server.log`, with the `pino` log format.

TODO:

 - log rotate & backup
 - format parsing and visualization


## Repo Structure

Server files are separated in several aspects:

 - frontend / backend
 - base / derived 

For more information about repo structure, check `repo-structore'

