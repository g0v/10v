# Version Control

This document describes how we manage versions, releases and different customization via git.


## Repository / Branch structures

 - repo: source
   - master
   - dev/...
   - release/a.b.c
   - release/d.e.f
 - repo: customer-a ( derived from release/a.b.c, in standalone repo )
   - master
   - dev/...
   - release/g.h.i
 - repo: customr-b ( derived from release/d.e.f, in standalone repo )
   - master
   - dev/...
   - release/j.k.l
 - ...


## development process

 - (master) : develop on `master` branch
 - (dev/...) : experiment features / functionality on `dev/...` branch. merge back to master if needed.
 - (master -> release/xxx) : branch to release/xxx when releasing.
 - (commit -> release/xxx) : cherry-pick commits from mainstream to specific release branch for hotfixes.
 - (source/release/a.b.c -> customer/master) : upgrade customer-a by merging source/release/a.b.c
 - (customer/master -> customer/release/yyy) : customer repo can also has releases.
 - only branch when we need hotfix. otherwise simply use tag.


## setup new customer repo

init:

    git init # create a new, empty repo
    git remote add servebase <servebase-repo-url> # and keep the `servebase` repo with local name `servebase`.
    git fetch servebase
    git reset --hard servebase/master # alternatively to specific tag / release.
    git remote add origin <our-repo-url> # repo we are going to use
    git push -u origin master # populate data into remote repo
    npm i # and any other necessary initializing commands

update:

    # ... make some changes ... and then commit + push ...
    git fetch servebase # pull in newly update from servebase
    git merge servebase/master # or specific branches, to update our codebase
    git push # update our remote repo
