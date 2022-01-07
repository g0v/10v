# captcha

Mechanism for human verification

 - abstract interface for accessing captcha resources.
   - able to interate multiple captcha `providers` (e.g., grecaptcha v3 -> hcaptcha -> customer support )
 - 3rd party service supported via provider.
 - provide local captcha fallback ( TODO )
   - a simple captcha
   - verify via interacting with customer supports
     - CR sends a pass key to user for temporarily bypass captcha checking

## API

captcha is a global object providing following APIs:

 - `init(cfg)`: init captcha with configuration object `cfg` which contains corresponding configuration object for every providers as a member in cfg with provider name as its field name.
 - `register(name, provider)`: register a provider with `name`
 - `get(name)`: return a provider with given `name`. return `provider` instance, with interface defined below.
 - `guard(opt)`: guard a request with captcha. this may trigger a set of default captcha object ui. opt:
   - `cb(verify-object)`: function called with a verified object ( `{token, name}` )
     - this function should use the given verification object to send server API call.
     - this function should reject if the given verification object doesn't accepted by remote server.

register captcha provider with `captcha.register(name, provider)`, where provider is an object implementing following methods:

 - `verify(obj)` - verify with custom defined `obj` object. (TBD)
   - return a verified object. For a verified object, see below.
 - `init(obj)` - init with custom defined `obj` object.
 - `priority` - lower = higher
 - `cfg(obj)` - for configuring this captcha. obj with following fields:
   - `enabled` - true if this provider is enabled
   - `sitekey` - sitekey for this provider
 - `create(opt)` - create a provider instance with given opt. captcha provides a default function for this method so developer won't have to implement this.
 - `interface`: a provider instance interface object implementing following fields:
   - `init`:  init object. constructor options will be kept as member variable `opt`. ( the `opt` passed via `create(opt)` )
   - `render()`: render object.
   - `reset()`: reset object status.
   - `get()`: return a verified object ( see below ); trigger interface for user to verify if needed.


## Verified Object

Verified object is passed to server and use for result verification in server side.

 - `token` - token after verified.
 - `name` - name of this provider

## Captcha flow

- accessing any API
  - recaptcha is required?
    - yes: verify ( 1 )
      - verification failed. frontend receive backend error code
      - frontend try again with alternative method
      - try again until
        - all alternatives tried
        - any alternative pass.
    - no: access api.
      - api accessing failed ( due to throttling or any other reason )
      - can this failure resolved by captcha?
        - yes: verify ( go to 1 )


