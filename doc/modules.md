# modules

 * file upload
   - prepare a Google Data Storage API for saving files.
   - Users might upload really big files, such as some pdf > 180MB for taicca flagship program
   - file management?
   - corresponding db table for maintaining files
 * print, pdf merge
   - pdf-merger-js seems to just work: https://github.com/nbesli/pdf-merger-js

## TBD

stage
permission
 - permission cache?
sharedb + programmable api
prj
brd hierarchy
user
history / db audit

generic table - use additional table for storing data?

 - data_table
   - foreign_key int,
   - type text,
   - data jsonb 
