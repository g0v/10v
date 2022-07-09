# lderror

Simple wrapper for Error object.

## Usage

lderror contains an `id` field for identify what kind of error it is. to create a lderror object, simply:

    new lderror(1000);
    new lderror("custom message", 1000);
    new lderror({message: "custom message", id: 1000});
    lderror(1000); /* auto new upon invocation */
    lderror(1002,"additional information")
    lderror("custom message"); /* by default, id will be 0 */

valid lderror object contains a field 'name' with value 'lderror', and an id field with values listed in `src/lde.ls`. Following demonstrates how to make a lderror-compatible error object with id 1000 by duck typing:

    new Error! <<< {id: 1000, name: "lderror"}

or

    Object.assign(new Error(), {id: 1000, name: "lderror"});


## Members

 * id - lderror deined error code.
 * message - custom error message (optional)
 * stack - stacktrace (optional)
 * code - http status code, if applicable (optional)


## Helper Functions

lderror exports several help functions for making use lderror easier:

 - `lderror.id(err)`: get the id for an error object `err`.
   - return value:
     - `err.id` if `err` is a valid `lderror` object and `lderror.id` is defined.
     - otherwise, 0
   - alternatively you can get `id` by accessing `err.id` directly - while this is not recommended..
 - `lderror.message(err)`: get the message corresponding to input `err` where `err` is either:
   - a number: return the message corresponding to given error id
   - an object: return the message corresponding to `err.id`
   - return `lderror.message(0)` if none of above, or return message of above is empty.
 - `lderror.reject(...)`: shorthand for `Promise.reject(new lderror(...))`
 - `lderror.handler(opt)`: a constructor function. when constructed, return an error handler
   - return a function `func(err)` for handling `err`. this function also exposes below method:
     - `isOn()`: return true if there are any ongoing errors, otherwise false.
   - options:
     - `ignore`: a list of id to ignore in this handler. error `999` is always ignored.
     - `rule(id)`: convert an error `id` to an user-defined object `o`, which is passed to `handler` below.
       - by default, `rule` is `function(id) { return id; }`
     - `handler(o, e)`: a actual handler for handling the given error
       - should return a promise.
       - options:
         - `o`: user-defined object returned by `rule(id)`.
         - `e`: the original error object.


### Error Handler

A sample scenario of using `lderror.handler`:

    handler = new lderror.handler({
      handler: function(o,e) {
        return Promise.resolve(alert("error: ", o, e));
      }
    });

    doSomething(...)
      .then(...)
      .catch(handler);


Work along with `@plotdb/block` + `ldcvmgr`:

    @manager = new block.manager!
    @ldcvmgr = new ldcvmgr {manager}
    handler = new lderror.handler do
      ignore: <[1005 1004] >
      handler: (~> @ldcvmgr.toggle it )
      rule: (id) -> "error/#id"

    doSomething ...
      .then ...
      .catch handler


## Customized information

Additional information can be added if needed:

 - redirect - instruct a redirect url in order to proper take care of this error. 


## License

MIT
