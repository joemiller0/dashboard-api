CREATE DATABASE dashboard;

CREATE TABLE logs(
    id SERIAL PRIMARY KEY,
    lid BIGINT,
    body TEXT, 
    date DATE, 
    time TIME,
    stravaLog json,
    UNIQUE (lid)
);