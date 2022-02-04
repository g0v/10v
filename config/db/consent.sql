create table if not exists consent (
  consent_id text,
  owner int references users(key) on delete cascade,
  ip text,
  time timestamp default now()
);

create index if not exists user_consent on consent (owner);
