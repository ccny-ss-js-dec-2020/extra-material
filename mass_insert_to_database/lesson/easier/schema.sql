/* Using our first_sql database */
USE first_sql;
/* Creating a table with the name of movies in the first_sql database */
CREATE TABLE movies (
    title VARCHAR(255),
    usGross INT,
    worldWideGross INT,
    usDvdSales INT,
    productionBudget INT,
    releaseDate VARCHAR(255),
    mpaaRating VARCHAR(255),
    distributor VARCHAR(255),
    source VARCHAR(255),
    majorGenre VARCHAR(255),
    creativeType VARCHAR(255),
    director VARCHAR(255),
    rottenTomatoesRating INT,
    imdbRating DECIMAL,
    imdbVotes INT
);
