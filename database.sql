CREATE DATABASE dashboard;

CREATE TABLE logs(
    lid BIGINT PRIMARY KEY, 
    body TEXT, 
    date DATE, 
    time TIME,
    stravaLog json
);