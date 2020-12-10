
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
