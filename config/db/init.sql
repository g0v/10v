create extension if not exists pg_trgm;

create table if not exists users (
  key serial primary key,
  username text not null unique constraint users_username_len check (char_length(username) <= 100),
  password text constraint users_password_len check (char_length(password) <= 100),
  method text,
  verified jsonb,
  displayname text, constraint users_displayname_length check (char_length(displayname) <= 64),
  description text, constraint users_description_length check (char_length(description) <= 1024),
  title text, constraint  users_title_length check (char_length(title) <= 100),
  tags text, constraint users_tags_length check (char_length(tags) <= 256),
  createdtime timestamp,
  modifiedtime timestamp,
  lastactive timestamp,
  detail jsonb,
  plan jsonb,
  config jsonb,
  staff int,
  deleted boolean
);

create index if not exists idx_user_displayname on users (lower(displayname) varchar_pattern_ops);

create table if not exists session (
  key text not null unique primary key,
  owner int references users(key),
  ip text,
  detail jsonb
);

create index if not exists idx_sessions_user on session (owner);

create table if not exists mailverifytoken (
  owner int references users(key) on delete cascade,
  token text not null,
  time timestamp not null default now()
);

create index if not exists idx_mailverifytoken on mailverifytoken (token);

create table if not exists pwresettoken (
  owner int references users(key) on delete cascade,
  token text not null,
  time timestamp default now()
);

create index if not exists idx_pwresettoken on pwresettoken (token);
