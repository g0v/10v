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

    git clone <src-repo-url> # now we have origin yet pointing to source repo
    git remote set-url origin <customer-repo-git-url> # so we re-set it to customer repo
    git remote add source <src-repo-url> # and keep the original repo as `source`.
    git reset --hard source/release/x.x.x # use specific release. TODO check if this is correct.
    # or alternatively if no branch but only tag...
    git reset --hard tagname # TODO check what's the correct way to do this.

update:

    git fetch source/<specific-branch>
    git merge source/<specific-branch>

