create table mk (
    id serial not null primary key,
    mk varchar(10)
);

create table genres (
    id serial not null primary key,
    genre varchar(255)
);

create table artist (
    id serial not null primary key,
    artist_name varchar(255),
    popularity int,
    followers int
);

create table artist_genres (
    id serial not null primary key,
    id_artist int,
    id_genres int,
    foreign key(id_artist) references artist(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
    foreign key(id_genres) references genres(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

create table track(
    id serial not null primary key,
    id_artist int,
    track varchar(255),
    url varchar(255),
    foreign key(id_artist) references artist(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

create table tops_spotfy (
    id serial not null primary key,
    id_track int,
    id_mk int,
    position_on_tops int,
    streams bigint,
    foreign key(id_track) references track(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
    foreign key(id_mk) references mk(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);