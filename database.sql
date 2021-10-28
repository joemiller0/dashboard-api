CREATE DATABASE dashboard;

CREATE TABLE log(
    lid SERIAL PRIMARY KEY, 
    body TEXT, 
    date DATE, 
    time TIME
);