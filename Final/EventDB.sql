create table event (
	id int not null auto_increment,
    title varchar(50),
    description varchar(100),
    eventdate datetime,
    category varchar(50),
    city varchar(50),
    address varchar(50),
    primary key (id)
);

create table Guest (
	id int not null auto_increment,
    name varchar(50),
    surname varchar(50),
    phone varchar(50),
    primary key (id)
);


create table invitation (
  id int not null auto_increment,
  guest_id int not null,
  event_id int not null,
  primary key (id),
  foreign key(guest_id) REFERENCES guest (id),
  foreign key(event_id) REFERENCES event (id)
);

insert into event(
	title,
    eventdate ,
    description,
    category,
    city,
    address) values('Harry Potter',NOW(),"good movie","movie","Warsaw","Center");
insert into guest(name,surname,phone) values('Garik','Hayrapetyan','+48111222333');

insert into invitation(guest_id,event_id) values(1,1);


