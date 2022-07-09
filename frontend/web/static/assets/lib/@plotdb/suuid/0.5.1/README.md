# suuid

short, sortable uuid. convert uuid into base 64 string along with coded timestamp.



## Usage

    <script src="<path-to>/suuid.bundle.min.js"></script>
    <script>
      var id = suuid();
      var ts = suuid.timestamp(id);
      var short = suuid.encode("abc0123");
    </script>

sample output ( try with `test/gen.ls` ):

    generated suuid: OTeyNTN4r9fi49Wc5M.AsIMZT0NCe4
    timestamp: 1611282605846 ( Fri Jan 22 2021 10:30:05 GMT+0800 (Taipei Standard Time) )


## API

 - `suuid(opt)`: randomly return a suuid if `opt` is omitted. otherwise, `opt` can be:
   - a `base16` string: return encoded corresponding string.
   - an object `{id, timestamp}`: return an encoded `id` prefix with timestamp, if `timestamp` is true.
     - `id`: a base16 string to encode.
     - `timestamp`: true if prefix timestamp before encoded id. default true.
 - `suuid.timestamp(id)`: get timestamp ( in epoch unix timestamp ) from given suuid
 - `suuid.encode(s)`: simply encode a `base16` string to `base64` string ( with our charmap, see below )


## Spec

`suuid` does following things:

 - prefix uuid(v4) with epoch unix timestamp
 - remove separator ( dash ) in uuid.
 - encodes values from hexadecimal to 64-based string with following charmap: ( url-safe chars according to [the latest uri spec](https://tools.ietf.org/html/rfc3986)

    `123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0_.`


while length of codes corresponding to uuid part are fixed, length of the timestamp code varys. The timestamp bits will be:

 - 7 bytes long before 2109AD
 - 8 bytes long before 10895AD
 - 9 bytes long before 573202AD

and the length of remaining part ( coded uuid, for randomness ) will be always 23 bytes long. thus, to sort suuid before 573202AD, simply add padding zeros before id to make it 32 bytes long.


## Comparison

 - [uniqid](https://github.com/adamhalasz/uniqid)
   - 18 bytes
   - no timestamp

 - [ulid](https://github.com/ulid/spec)
   - 48-bit timestamp + 80-bit entropy
   - base32 encoding, fixed length ( 26 character string. )
     - avoiding similar chars ( like `1IiJj` ) and is case insensitive.
   - timestamped ( 1ms precision )
     - overflow after 10889AD

 - [ksuid](https://github.com/segmentio/ksuid)
   - 32-bit timestamp + 128-bit entropy
   - base62 encoding ( `0-9a-zA-Z` ), fixed length ( 27 characters string. )
   - timestamped ( 1s precision )
     - offset to start from `2014-03-05`
     - overflow after 2150AD

 - [@plotdb/suuid](https://github.com/plotdb/suuid)
   - varied length timestamp ( 42-bit+ ) + 128-bit entropy
   - base64 encoding ( `0-9a-zA-Z.-` ), varied length ( 30 characters + )
   - timestamped ( 1ms precision )
     - unix epoch timestamp ( since `1970-01-01` )

 - [uuid v6 proposal](http://gh.peabody.io/uuidv6/)
   - TBD
   - try to add timestamp in uuid.
   - just a draft, and was expired.
   - [Github Repo](https://github.com/uuid6/uuid6-ietf-draft)


## License

MIT
