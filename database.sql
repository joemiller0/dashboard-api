CREATE DATABASE dashboard;

CREATE TABLE logs(
    lid BIGINT PRIMARY KEY,
    id SERIAL,
    body TEXT, 
    date DATE, 
    time TIME,
    stravaLog json
);