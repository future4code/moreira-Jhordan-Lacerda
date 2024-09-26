### Exercício 1
a) o comando VARCHAR(255), serve para declarar que o tipo da linha é string com o tamanho de 255 caracteres;
DATE, serve para declarar que que o tipo da linha é para armazenar data.
b) O resultado do SHOW DATABASES é mostrar qual o nome do database; 
SHOW TABLES serve para mostrar quais tabelas exitem no Base de Dados.
c) Os resultados foram o nome do campo, com o tipo, se aceita nulo ou não, o tipo da chave, seu valor default e um extra.

### Exercício 2
a) ´´´
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires", 
    1200000,
    "1963-08-23",
    "female"
);
´´´
b)Esse erro ocorreu porque o id é uma Primary key e uma primary key não aceita valores duplicados.

c) O erro aconteceu porque a contagem de elementos da coluna não batem com a quantidade de linhas que estão sendo passadas.
```
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O erro aconteceu porque o campo name não tem um valor default.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Eu",
  400000,
  "1949-04-18", 
  "male"
);
```

e) O erro aconteceu porque não estava sendo usado o as aspas para envolver a data.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
 "1979-03-26", 
  "female"
);
```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"006",
    "Hiago Lacerda",
    60000000,
    "2011-07-02",
    "male"
);
```

### Exercício 3
a)
```
SELECT * from Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c) Ele não retornou nada, pois não tinha nenhum valor invalido no campo de genero
```
SELECT gender from Actor WHERE gender = "invalid"
```

d)
```
SELECT id, name, salary from Actor WHERE salary <= 500000; 
```

e) O comando foi dado porque não tem nenhum campo com o nome de 'nome';
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercicio 4

a) A query acima vai selecionar e exibir todos os atores que tem como primeira letra A ou J e recebem mais de 300.000

b)
```
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) 
```
SELECT * from Actor WHERE name LIKE "%G%" OR "%g%";
```

d)
```
SELECT * from Actor Where name LIKE "%A%" OR "%a%" OR "%G%" OR "%g%" AND salary BETWEEN 350000 AND 900000;
```
 
### Exercicio 5

a) A query cria uma nova tabela chamada Movie e tem os atributos id, title, sinopse, release_date, rating, todos não podendo ser nulos e o title sendo único
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  sinopse TEXT NOT NULL,
  release_date DATE NOT NULL,
  rating INT NOT NULL
);
```

b)
```
INSERT INTO Movie (id, title, sinopse, release_date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c) 
```
INSERT INTO Movie (id, title, sinopse, release_date, rating)
VALUE(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Movie (id, title, sinopse, release_date, rating)
VALUE(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e) 
```
INSERT INTO Movie (id, title, sinopse, release_date, rating)
VALUE(
	"004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "2000-09-10",
    9
);

```

### Exercicio 6

a)
```
SELECT id, title, rating from Movie WHERE id = 001;
```

b)
```
SELECT * from Movie WHERE title = "O Auto da Compadecida";
```

c)
```
SELECT id, title, sinopse from Movie WHERE rating >= 7;
```

### Exercicio 7

a) 
```
SELECT * from Movie WHERE title LIKE "%Vida%";
```

b)
```
SELECT * from Movie WHERE (title like "O%" OR "o%") OR (sinopse like "%A" OR "%a");
```

c) 
```
SELECT * from Movie WHERE release_date < NOW()
```

d) 
```
SELECT * from Movie WHERE (release_date < NOW()) AND ((title like "O%" OR "o%") OR (sinopse like "%A" OR "%a")) AND rating BETWEEN 7 AND 10;
```
