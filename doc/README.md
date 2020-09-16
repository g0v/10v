server

## Repo Structure ( TBD Tentative ) 

 - src
   - ls, styl, pug
 - static
   - assets and other
 - engine
   - watch
   - route
   - module
     - db
     - util? # 額外的工具模組
   - other files
     - index.ls
 - user
 - config # 需要考慮到支援不同網域
   - nginx
 - doc
 - test
 - tool
 - .view, .engine - prebuilt files
 - other files
   - start
   - package.json, package-lock.json, .gitignore, .git, node_modules, server.log

## Infrastructure

 - Load Balancing
   - https://blog.gcp.expert/gcp-http-load-balancer-console/
   - https://blog.gcp.expert/gcp-instance-autoscaling/
   - for ShareDB - use Redis Pub/Sub across instances
     - https://github.com/share/sharedb/issues/110
     - https://github.com/share/sharedb/issues/295
     - https://stackoverfow.com/questions/20375338/
     - https://github.com/share/sharedb-redis-pubsub
   - nginx can help: https://www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching
 - Stateless Web Server
   - OpenAPI
     - https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md
     - https://github.com/wesleytodd/express-openapi/
 - SQL Server / Shading
 - Docker / Kubernete
   - write file to host - https://stackoverflow.com/questions/31448821

## Error Handling

 - all errors should be handled in a common handler.
 - promise-based route can be wrapped with a util function, such as `autocatch`
 - use lderror to provide error information.
   - id
   - meta data
     - encode error in following format:
       - <module-name>/<error-name>
       - <error-name> ( general error )
     - <error-name> should be simple, short, and matches [a-b0-9][a-b0-9-]*

## Route Sanity Check

 - authed
 - staff
 - recaptcha - should provide fallback for failure

## Backend

 - module redesign
 - redis + sharedb, cross instance communication
 - zero down-time strategy
   - https://yu-jack.github.io/2020/03/09/nodejs-zero-downtime/


## Security

 - recaptcha - should provide fallback for failure
