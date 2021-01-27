# Servebase

Base web server design reference.



## Code Maintain and Modularization

Keep common part in a base repo ( servebase ) but carefully design how to customize it.


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

## Code Check

 - ls-lint: https://github.com/eheitherd/ls-lint


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

# Reference

 - https://github.com/mikesparr/typescript-postgres-auth-example
