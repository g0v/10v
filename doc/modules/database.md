# database

currently only backend/db/postgresql is supported. usage:

    require! <[backend/db/postgresql]>
    new postgresql(backend, opt)

where:

 - `backend`: a backend object.
 - `opt`: additional option with following field:
   - `query-only`: default false.
     - database module run some routine tasks periodically by default,
       which can be suppressed by settings `query-only` to true.
