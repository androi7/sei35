-- This file defines the structure of the 'users' table.
-- It's also known as a 'schema'.
-- Create database in sqlite (bash cmd): sqlie3 database.db < users-table.sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT, -- VARCHAR(255)
  name TEXT,
  password TEXT NOT NULL,
  image TEXT,
  verified BOOLEAN,
  age INTEGER
);
