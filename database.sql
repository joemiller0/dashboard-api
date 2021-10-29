CREATE DATABASE dashboard;

CREATE TABLE logs(
    lid SERIAL PRIMARY KEY, 
    body TEXT, 
    date DATE, 
    time TIME,
    stravaLog TEXT
);