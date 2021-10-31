CREATE DATABASE dashboard;

CREATE TABLE logs(
    lid BIGINT PRIMARY KEY, 
    exid SERIAL,
    body TEXT, 
    date DATE, 
    time TIME,
    stravaLog json
);