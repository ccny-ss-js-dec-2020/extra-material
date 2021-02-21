/* Using our first_sql database */
USE first_sql;
/* Creating a table with the name of countriesWithoutObjects in the first_sql database */
CREATE TABLE countriesWithoutObjects (
    name VARCHAR(255),
    capital VARCHAR(255),
    relevance VARCHAR(255),
    region VARCHAR(255),
    subregion VARCHAR(255),
    population INT,
    demomym VARCHAR(255),
    area DECIMAL,
    gini DECIMAL,
    nativeName VARCHAR(255),
    alpha2Code VARCHAR(255),
    alpha3Code VARCHAR(255)
);
/* Changing the 'demomym' column name, as i misspelled it. It should be 'demonym' */
ALTER TABLE countriesWithoutObjects CHANGE `demomym` `demonym` VARCHAR(255);
