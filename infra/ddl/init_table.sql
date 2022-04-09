-- sample user
create table if not exists sample_user (
    id int primary key auto_increment comment 'PK',
    username varchar(100) not null,
    is_deleted boolean not null default 0,
    created_at datetime default now(),
    updated_at datetime,
    deleted_at datetime
);

-- sample car
create table if not exists sample_car (
    id int primary key auto_increment comment 'PK',
    user_id int not null,
    carname varchar(100) not null,
    is_deleted boolean not null default 0,
    created_at datetime default now(),
    updated_at datetime,
    deleted_at datetime
);