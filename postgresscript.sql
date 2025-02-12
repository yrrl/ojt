create schema student_list;
drop table studlist;
create table studlist (
	id SERIAL primary key,
	firstname VARCHAR(256) not null,
	lastname VARCHAR(256) not null,
	age INT,
	course VARCHAR(10)
	
)



insert into studlist(firstname,lastname,age,course)
values ('june','cruz',22,'BSINFO'),('juan','juuu',29,'BSINFO');

select * from studlist;

UPDATE studlist set firstname='juasn' WHERE id=2;


