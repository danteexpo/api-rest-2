CREATE DATABASE apirest2db;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT 
)

INSERT INTO users(name, email)
  VALUES ('dante', 'dante@mail.com'), 
          ('renzo', 'renzo@mail.com');
