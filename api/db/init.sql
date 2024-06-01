CREATE DATABASE likeme;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE posts (
    id SERIAL, 
    titulo VARCHAR(25), 
    img VARCHAR(1000), 
    descripcion VARCHAR(255), 
    likes INT);