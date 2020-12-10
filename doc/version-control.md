
## brnach structure

 - mainstream
   - dev
   - release/a.b.c
     - customer-a
     - customer-b
   - release/d.e.f
     - customer-c
     - customer-d


## development process

 - develop on `dev` branch
 - merge dev to mainstream ( exclude dev code )
 - pick commits from mainstream to specific release branch
 - upgrade customer-(c/d) by merging release/a.b.c to merge them.

## upstream / private repo

 - customer can be forked from specific release, and merge new updates from upstream:
   - https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
