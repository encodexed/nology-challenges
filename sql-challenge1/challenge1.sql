-- Country codes for cities with a population greater than 126304
SELECT countries_code FROM cities WHERE population > 126304;
-- Population of cities with a name that contains two 'o|O' characters
SELECT name, population FROM cities WHERE name LIKE '%o%o%';
-- City records for cities in Afghanistan or Congo
SELECT * FROM cities WHERE countries_code IN ('AFG', 'COD');
-- Country codes for cities with an id divisible by 23
SELECT countries_code FROM cities WHERE id % 23 = 0;
-- City names and populations for cities with a name that begins with a|A or with a country code that begins with a|A
SELECT name, population, countries_code FROM cities WHERE name LIKE 'a%' OR countries_code LIKE 'a%';
-- Id and population for cities that have a population greater than 104234 or a name thats start with san
SELECT name, id, population FROM cities WHERE population > 104234 OR name LIKE 'san%';