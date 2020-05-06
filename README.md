# Academia Pokémon

O projeto é um trabalho da disciplina de banco de dados I a fim de explorar os conceitos aprendidos em sala de aula com a linguagem SQL. Este trabalho tem como objetivo o desenvolvimento do banco de dados e uma interface gráfica para visualização dos dados contidos neste banco.

#### Diagrama Entidade Relacionamento
![alt text](https://raw.githubusercontent.com/carona-jr/academia-pokemon/master/img/bd.png?token=AJNMEVCJJJEQHNADR6EQPAK6XR5FI "Diagrama Entidade Relacionamento")

## Iniciando

Para iniciar um servidor, basta seguir os passos descritos abaixo.

### Pré-requisitos

```
NodeJS
Npm
Yarn
ReactJS
PostgreSQL
```

### Instalando API

Crie uma pasta **config** dentro de backend. 
Dentro dela, coloque as seguintes variáveis de ambiente no arquivo **dev-env**:

```
PORT=3000
PG_KEY=ENDEREÇO-DO-BANCO-DE-DADOS-AQUI
```

Após isto, instale os pacotes com o comando na pasta backend: 

```
npm i
```

Rode o servidor com o script dev para rodar localmente:

```
npm run dev
```


### Rodando o React

not yet


## Feito com S2

* [NodeJS](https://nodejs.org/en/docs/) - servidor da api
* [NPM](https://www.npmjs.com/) - gerenciador de pacotes
* [Express](https://expressjs.com/) - routes framework
* [Cors](https://www.npmjs.com/package/cors) - cors
* [ElephantSQL](https://www.elephantsql.com/) - PostgreSQL as service
* [Axios](https://www.npmjs.com/package/axios) - requisições HTTPs
* [Nodemon](https://www.npmjs.com/package/nodemon) - monitoramento de arquivos
* [env-cmd](https://www.npmjs.com/package/env-cmd) - criar variáveis ambientes
* [pg](https://www.npmjs.com/package/pg) - conexão com o banco


## Versões

Para ver as versões deste projeto, utilize as [tags deste repositório](https://github.com/carona-jr/academia-pokemon/releases). 

## Autores

* **Carlos Roberto** - *Estudante de Sistemas de Informação - UNESP* 
* **Giovanna Simioni** - *Estudante de Sistemas de Informação - UNESP* 
* **Leandro** - *Estudante de Sistemas de Informação - UNESP* 
* **Lucas Pederzini** - *Estudante de Sistemas de Informação - UNESP* 

## Licença

MIT License - [see more](https://github.com/carona-jr/academia-pokemon/blob/master/LICENSE)
