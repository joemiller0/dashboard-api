CREATE DATABASE dashboard;

CREATE TABLE logs(
    lid SERIAL PRIMARY KEY, 
    upload_id BIGINT,
    body TEXT, 
    date DATE, 
    time TIME,
    stravaLog TEXT
);