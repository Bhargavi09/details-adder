USE DATABASE userdb;

CREATE TABLE details(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    email VARCHAR(25)
);