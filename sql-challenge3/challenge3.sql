-- Get the names for 100 most populated cities together with the countries they’re located in and their respective population.
SELECT c.name AS city_name, ctr.name AS country_name, population
FROM cities AS c
INNER JOIN countries AS ctr
ON c.countries_code = ctr.code
ORDER BY population DESC
LIMIT 100;

-- Get only the official languages spoken in each country.
SELECT name AS country_name, language AS official_language, is_official
FROM countries
INNER JOIN country_languages
ON countries.code = country_languages.countries_code
WHERE is_official LIKE 'T'
ORDER BY name;

-- Get all the countries that people speak French in.
SELECT name AS country_name, language, percentage
FROM countries
INNER JOIN country_languages
ON countries.code = country_languages.countries_code
WHERE language LIKE 'French'
ORDER BY percentage DESC;

-- Get all the cities where English is spoken with a population over 300000.
SELECT name AS city_name, language, population
FROM cities
INNER JOIN country_languages
ON cities.countries_code = country_languages.countries_code
WHERE population > 300000
AND language LIKE 'English'
ORDER BY name;

-- Get the names of the cities, countries and languages spoken for every country code that has ‘U’ as the middle letter.
SELECT c.name AS city_name, ctr.name AS country_name, cl.language, c.countries_code
FROM cities AS c
INNER JOIN countries AS ctr
ON c.countries_code = ctr.code
INNER JOIN country_languages AS cl
ON c.countries_code = cl.countries_code
WHERE c.countries_code LIKE '_U_'
ORDER BY ctr.name;

-- Get the names of the countries with Arabic as the official language.
SELECT name, language, is_official
FROM countries
INNER JOIN country_languages
ON countries.code = country_languages.countries_code
WHERE language LIKE 'Arabic'
AND is_official LIKE 'T'
ORDER BY name;

-- Get the population, city and country names where Chinese is spoken by less than 10% of the people.
SELECT c.name AS city_name, ctr.name AS country_name, c.population, cl.language, cl.percentage
FROM cities AS c
INNER JOIN countries AS ctr
ON c.countries_code = ctr.code
INNER JOIN country_languages AS cl
ON cl.countries_code = ctr.code
WHERE language LIKE 'Chinese'
AND percentage < 10
ORDER BY ctr.name;
