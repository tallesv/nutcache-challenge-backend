<h1 align="center">Nutcache Challenge Backend</h1>

### Aplicação

A aplicação pode ser acessada por esse link: https://nutcache-backend-tallesvieira.herokuapp.com/

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Yarn](https://classic.yarnpkg.com/pt-BR/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### 🎲 Excutando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/tallesv/nutcache-challenge-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd nutcache-challenge-backend

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev:server

# A aplicação inciará na porta:3333 - acesse <http://localhost:3333>

# Para executar os testes
$ yarn test

# Para executar o test coverage
$ yarn test-coverage
```

### Rotas criadas

#### Create employee(post)
  rota: /nutemployee

#### Update employee(put)
  rota: nutemployee/:id

#### Delete employee(delete)
  rota: nutemployee/:id

#### List all employees(get)
  rota: nutemployee/

#### Find employee(get)
  rota: nutemployee/:id
  
  Exemplo Update employee:

    Resquest:

   {
	  "name": "Nutcache Employee",
	  "gender": "Male",
	  "email": "nutcache@nutcache.com",
	  "cpf": "22231213",
	  "birthDate": "2013-03-01T01:10:00",
	  "startDate": "2013-03-01T01:10:00",
	  "team": "frontend"
   }

    Response:

   {
    "_id": "6061a0820107330004a15323",
    "name": "Nutcache Employee 2",
    "birthDate": "2013-03-01T01:10:00.000Z",
    "gender": "Male",
    "email": "nutcache@nutcache.com",
    "cpf": "22231213",
    "startDate": "2013-03-01T01:10:00.000Z",
    "team": "frontend",
    "__v": 0
    }

