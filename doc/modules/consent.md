# Consent Module

Consent module collects user consent based on different scenario. It includes following parts:

 - backend - record user consent state and date
 - frontend
   - display and collect user consent, sending them to backend.
   - cache consent result in localStorage.


Consent logging should consider following aspect:

 - consent type and version
   - We can use `@plotdb/block` module to manage this. Accessing consent via ( for example ):
     - @consent/tos@1.0.0:index.html
 - identity - how to identify a user, regardless of signed or anonymous users. 
   - the only information we can collect is:
     - IP Address
     - User Agent
 - genuineness of the record - how do we prove the user behind the (agent + ip) really consent? ( TODO )


## Backend

Following fields can be logged:

 - `consent_id`: unique identifier of this consent
 - `owner`: user key, if any
 - `ip`:  user ip
 - `time`: time when making this consent

With following API:

 - POST `@api/consent/`: making a consent, with following fields:
   - `consent_id`: id of the consent to make
 - POST `@api/consent/query`: query if a consent has been made.
   - with following fields:
     - `consent_id`: id of the consent to make
   - return either true or false


## Frontned

Consent frontend is for:

 - easily trigger any consent block based on the id
 - intercept and send user feedback back to user.


Usage:

    cs = new consent!
    cs.prompt {name: "some-consent", version: "0.0.", path: "some.html"}
      .then (ret) ->
      .catch -> alert("update consent failed.")

Constructor options: none for now. ( preserved for future extension )

Object API:

 - `ensure(opt)`: ensure a consent is made.
   - return a Promise, resolves if consent is accepted. Otherwise rejects.
   - option:
     - name: consent module name
     - version: consent module version. default `main`
       - if not given, the actual version of the module depends on the consent time
     - path: consent module path. default `index.html`
 - `prompt(opt)`: prompt a consent UI.
   - return a Promise, resolves if consent accepted, otherwise rejects
   - Users are always presented with a consent UI, even if it has been accepted before.
   - option: same with `ensure`


Consent frontend also caches consent result in localStorage so we don't have to hit server each time when we need to verify if a user consent to certain id.

Consents are stored in following format:

 - name: module/consent/userkey/id
   - userkey = 0 for anonymous user
 - value: {time, user}, as a stringified JSON string.

For example, consent `@consent/cookie@0.0.1:` made by user with id `1`, with timestamp 1643636129532 ( UTC Time ):

 - name: consent/@consent/cookie@0.0.1
 - value: "{time: 1643636129532, user: 1}"


### Consent Block

The only requirement for a block to be compatible with the consent module is a `get` function in the returned interface object, which meets following:

 - if accept parameter(s), all parameters that may affect the content of the consent should be stored as an object in the first parameter.
 - return a Promise which resolves `true` if the consent is accepted, otherwise resolves `false`.


## Discussion: Genuineness of the Record

Following has to be confirm:
 - we must not be able to forge the record ( somehow via a lock? )
 - malicious user can't forge the record
   - ip can't be forged ( however may not be tracked if VPN is used )
   - user agent ( http header ) can always be forged - so is it really necessary?

Perhaps nginx log can also be used. Anyway we need some way to analyze it. We have:
 - log for accessing every resources, including
   - IP
   - access time
   - User Agent
   - access url
   - http code
