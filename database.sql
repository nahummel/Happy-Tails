--BASE--

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR (20),
    "street" VARCHAR (255),
    "city" VARCHAR (50),
    "state" VARCHAR (25),
    "zipcode" INT,
    "phone" INT,
    "email" VARCHAR (255),
    "user" BOOLEAN
);

CREATE TABLE "dogs" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (50),
    "breed" VARCHAR (50),
    "sex" VARCHAR (6),
    "age" INT,
    "rescue_id" INT,
);

CREATE TABLE "questionnaires" (
    "id" SERIAL PRIMARY KEY,
    "size" VARCHAR (20),
    "age_range" VARCHAR (10),
    "sex" VARCHAR (6),
    "rent_breed" BOOLEAN,
    "other_dogs" BOOLEAN,
    "cats" BOOLEAN,
    "kids" BOOLEAN,
    "grooming" BOOLEAN,
    "active" BOOLEAN,
    "training" BOOLEAN,
    "health" BOOLEAN,
    "dog_id" INT,
    "user_id" INT
);

--STRETCH--

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "dog_id" INT,
    "user_id" INT
);