# auth

module for authentication related functionalities.


## Usage

include required js:

    <script src="path-to/auth.min.js"></script>


Auth module manager session data and widget so we have to construct an auth object:

    a = new auth(...)

with following constructor options:

 - `api`: default `/api/auth/`. specify this option if you change the api root path in backend.
 - `manager`: a block manager for loading block modules.
 - `loader`: a global ldloader. `auth` uses this to indicate loading status for better UX.
 - `zmgr`: a global zmgr for aligning z-index between widgets.


The auth object provides following APIs:

 - `on(event, cb)`: listen to certain event. evnets:
   - `logout`: fire when user logs out.
   - `error`: fired when an error occurred. with error object `e` as the only parameter used to call `cb`.
   - `change`: fired when global object is updated. with global object as the only parameter used to call `cb`
 - `fire(event, ... params)`: fire a specific event with some parameters.
 - `apiRoot(0`: get `api` in construction option.
 - `logout()`: log user out.
 - `ensure(opt)`: ensure an user is authenticated. short hand for `get({authedOnly: true})`.
 - `get(opt)`: 
   - `authedOnly`: default false. if true, reject when user is not authenticated.
   - `renew`: see `fetch`.
   - `tab`: see `prompt(opt)` below.
   - `lock`: see `prompt(opt)` below.
 - `fetch(opt)`: resolve the global object from server or cache.
   - `renew`: default true. true if skip global in cookie. otherwise a cached cookie may be used for global object.
 - `prompt(opt)`: show authpanel. options:
   - `tab`: either `login` or `signup`. mode to show when authpanel popups.
   - `lock`: true to lock the popuped authpanel.
 - `social(opt)`: trigger social login. options:
   - `name`: name of the social login type to use. e.g., `facebook` or `google`.


