server

## Infrastructure

 - Load Balancing
   - https://blog.gcp.expert/gcp-http-load-balancer-console/
   - https://blog.gcp.expert/gcp-instance-autoscaling/
   - for ShareDB - use Redis Pub/Sub across instances
     - https://github.com/share/sharedb/issues/110
     - https://github.com/share/sharedb/issues/295
     - https://stackoverfow.com/questions/20375338/
 - Stateless Web Server
   - OpenAPI
     - https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md
     - https://github.com/wesleytodd/express-openapi/
 - SQL Server / Shading
 - Docker / Kubernete

## Error Handling

 - all errors should be handled in a common handler.
 - use lderror to provide error information.
   - id
   - meta data
     - encode error in following format:
       - <module-name>/<error-name>
       - <error-name> ( general error )
     - <error-name> should be simple, short, and matches [a-b0-9][a-b0-9-]*


## Backend

 - module redesign
 - redis + sharedb, cross instance communication


## Security

 - hidden recaptcha with fallback
