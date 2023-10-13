-- Write queries for to get the following from the cities table: (String queries should not be case sensitive)
-- Get the name and country code for 20 cities that have a population greater than 123123, order your results by country_code from A-Z
SELECT name, countries_code, population FROM cities 
WHERE population > 123123 
ORDER BY countries_code;
-- Get the name and country code for 13 cities that have a population less than 1231231, order your results by country_code from Z-A
SELECT name, countries_code, population FROM cities
WHERE population < 1231231
ORDER BY countries_code DESC
LIMIT 13;
-- Get all fields for 10 cities in USA ordered by name A-Z and also descending population
SELECT * FROM cities
WHERE countries_code LIKE 'USA'
ORDER BY name ASC, population DESC;
-- Get all fields for the 3 most populated cities in Saudi Arabia
SELECT * FROM cities
WHERE countries_code LIKE 'SAU'
ORDER BY population DESC
LIMIT 3;
-- Get all fields for the 6 least populated cities in Saudi Arabia
SELECT * FROM cities
WHERE countries_code LIKE 'SAU'
ORDER BY population
LIMIT 6;
-- Get the names of the 3 least populated cities in Russian excluding the least populated city
SELECT * FROM cities
WHERE countries_code LIKE 'RUS'
ORDER BY population
LIMIT 1, 3;

-- Bonus
-- It’s all well and good being able to query the data we need, but often we also have to come up with our own insights.
-- Create queries for 3 additional insights that you are interested in.
-- Feel free to check out the country_languages and the countries tables.
SELECT name, language, percentage, population FROM country_languages
INNER JOIN cities
ON cities.countries_code = country_languages.countries_code
WHERE language LIKE 'English'
AND percentage > 50
ORDER BY language, name;
