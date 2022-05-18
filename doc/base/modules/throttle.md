# Throttle

Rate limit + Slow down of requests to server.

 - Use in-memory store for request log but can be upgraded to use another data store.


## Usage

    require! <[@servebase/backend/throttle]>

    # use predefined throttler
    app.get "/", throttle.kit.generic, (req, res) ->

    # customize throttler
    app.get "/", throttle({key: throttle.kit.key}), (req, res) ->


### Configurations for customized throttler

 - `span`: reset request count for every `span`. in ms. default 1000
 - `maxCount`: return error after request count > `max-count` in each `span`. default 10
 - `delayCount`: start to delay after request count in each span reaches `delayCount`. default 5
 - `delay`: response delay multiplier, in ms. default 200.
    - formula: `delay * currentCount - delayCount) ^ 1.5`
 - `maxDelay`: maximal delay, in ms. default 19000 (note: useless if it exceeds nginx timeout settings)
 - `key(req)`: key generator function. default `throttle.key.ip`. should return a string as key.
   - `req`: `request` object in express router.
 - `error`: error object to throw when throttled. should be a `lderror` object.
   - default `{id: 1024, name: 'lderror'}`


## Available keys

Predefined keys can be found in `throttle.key` with following possible keys:

 - `ip`: recognize requests by ip and requested url
 - `user`: recognize requests by user key and requested url
 - `ipUser`: recognize requests by ip, user key and requested url

To customize a key generator, provide a function accepting `request` object and return a string, e.g.,

    mykey = (req) -> return if req.user => "user-#{req.user.key}" else "anonymous"


## Available kits

Predefined kits can be found in `throttle.kit`. Following kits are available:

 - `signup`: maximal 10 requests every 10 minutes per ip.
 - `login`: maximal 20 requests per minute ip.
 - `generic`: maximal 30 requests per minute per user.

