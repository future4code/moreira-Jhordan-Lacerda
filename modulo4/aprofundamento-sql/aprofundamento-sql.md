### Exercicio 1

a)Remove a coluna salary;
b)Mudou o nome da coluna para sex e declarou que o tipo dele vai ser varchar(6) com 6 caracteres;
c)Mudou o nome da coluna para gender e declarou que o tipo dele vai ser varchar(255) com 255 caracteres;
d)
```
CHANGE gender gender VARCHAR(100);
```

### Exercicio 2
a)
```
UPDATE Actor 
SET name = "Moacyr Franco",
birth_date = "1980-02-08"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET
name = UPPER(name)
WHERE name = "Juliana Paes";

UPDATE Actor 
SET
name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET
name = "Jhordan",
salary = 1000000,
birth_date = "2002-10-29",
gender = "male"
WHERE id = "005";
```

d) Ele fala que a coluna não está na lista (Colocando um campo que não existe, com id invalido, deu certo e não aparecia alteração)

### Exercicio 3
a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) 
```
DELETE FROM Actor WHERE gender = "male" AND salary = 1000000;
```

### Exercicio 4
a) 
```
SELECT MAX(salary) FROM Actor;
```

b) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
``` 

c) 
```
SELECT COUNT(*)
FROM Actor 
WHERE gender = "female";
```

d) 
```
SELECT SUM(salary)
FROM Actor;
```

### Exercicio 5
a)Ela retorna a quantidade de linhas com o gender = male e a quantidade de linhas com o gender = female;

b)
```
SELECT id, name
FROM Actor 
ORDER BY name DESC; 
```

c) 
```
SELECT * 
FROM Actor
ORDER BY salary; 
```

d)
```
SELECT * 
FROM Actor 
ORDER BY salary DESC
LIMIT 3;
```

e) 
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender; 
```

### Exercicio 6
a)
```
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

c) 
```
UPDATE Movie
SET playing_limit_date = "2020-11-21"
WHERE id = "002";

UPDATE Movie
SET playing_limit_date = "2022-03-03"
WHERE id = "008";
```

d) Não apareceu nenhum erro, mas não fez nenhuma alteração, pois não foi encontrado o que seria alterado.
```
UPDATE Movie
SET sinopse = "salve"
WHERE id = "001";
```