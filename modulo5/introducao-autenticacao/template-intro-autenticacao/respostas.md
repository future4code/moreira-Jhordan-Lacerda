### Exercício 1

a) Eu acho melhor usar strings, pois eu tenho mais opcoes de de senhas e senhas mais fortes.
b)

```
import {v4} from "uuid";


export const IdGenerator = (): string => {
    return v4();
}
```

### Exercício 2

a) O código cria uma conexão com o banco de dados e depois tem uma função que cria um usário(insere os valores
id, email e password na tabela 'User' do banco de dados).

b)

```
CREATE TABLE IF NOT EXISTS User(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
)
```

c)

```
import connection from "../connection";

export const createUserAtividade = async (
  id: string,
  email: string,
  password: string
) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into("User");
};
```

### Exercício 3

a) Ela afirma que o que vai vir do process.env.JWT_KEY vai ser uma string e a gente usa para que o typescript deixe nós
recebermos a KEY vindo do .env.

b)

```
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "5h";

const genareteToken = (id: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );

  return token;
};
```

### Exercício 4

a, b, c

```
app.post('/user/signup', createUserAtividade);
```

```
export default async function createUserAtividade(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (email || email.indexOf("@") === -1) {
      res.statusCode = 409
      throw new Error("Invalid email");
    }

    if (password || password.length < 6) {
      res.statusCode = 409
      throw new Error("Invalid password");
    }

    const id = IdGenerator();

    const token = genareteToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
```

### Exercício 5

```
export const getUserByEmail = async (email: string): Promise<any> => {
  const result = await connection.select("*").from("User").where({ email });

  return result[0];
};
```

### Exercício 6

```
app.post('/user/login', login);
```

```
export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 409;
      throw new Error("Invalid email");
    }

    const user = await getUserByEmail(email);

    if (user.password !== password) {
      res.statusCode = 409;
      throw new Error("Invalid password");
    }

    const token = genareteToken({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
```

### Exercício 7

a) Ela fala pro TS que o tipo vai ser any. Para que o TS não reclame sobre essa variável.
b)

```
export const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  };
```

### Exercício 8

a)

```
export const getUserById = async (id: string): Promise<any> => {
  const result = await connection.select("*").from("User").where({ id });

  return result[0];
};
```

b)

```
export default async function getUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
}
```
