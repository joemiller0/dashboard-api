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

CREATE TABLE programs(
    id SERIAL PRIMARY KEY,
    title TEXT,
    start_date DATE, 
    end_date DATE, 
    description TEXT, 
    workouts json
);