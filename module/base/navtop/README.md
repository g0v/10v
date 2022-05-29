# @servebase/navtop

site-wise navigation menu dynamics


## Usage

    ldc.register <[navtop]>, ({navtop}) -> ...


`@servebase/navtop` uses ldview to manipulte its DOM. following ld selectors are available:

 - `signup`: authpanel is triggered in signup tab when clicked
 - `login`: authpanel is triggered in login tab when clicked
 - `logout`: sign user out when clicked
 - `displayname`: show user's displayname
 - `admin`: show if `user.staff` is not false
 - `unauthed`: show if it's an anonymous user
 - `authed` show if current user is signed in.
 - `avatar`: show user avatar. default to `/assets/avatar/#{uid}`


## Class Transition

`@servebase/navtop` changes bar class if data-classes and data-pivot is defined.

 - `data-classes`: "class1 class2 ...;class1 class2 ..." for before and after transition classs.
 - `data-pivot`: node to monitor for visibility and thus reflect the whether state should be change.
