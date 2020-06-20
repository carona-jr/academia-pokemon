# Academia Pokémon

O projeto é um trabalho da disciplina de banco de dados I a fim de explorar os conceitos aprendidos em sala de aula com a linguagem SQL. Este trabalho tem como objetivo o desenvolvimento do banco de dados e uma interface gráfica para visualização dos dados contidos neste banco. Para saber mais, [veja o arquivo de documentação da elaboração do diagrama](https://github.com/carona-jr/academia-pokemon/blob/c165a54888afe92e4080963450917d632c17032c/academia.pdf)

Para visualizar o projeto rodando [clique aqui](https://frontend-pokemon.now.sh/)

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

Crie uma pasta **config** dentro da pasta backend. 
Dentro da pasta **config**, faça um arquivo **dev-env** e coloque dentro dele o seguinte código:

```
PORT=3000
PG_KEY=ENDEREÇO-DO-BANCO-DE-DADOS-AQUI
```

Feito a configuração inicial, instale os pacotes com o comando abaixo dentro da pasta backend: 

```
npm i
```

Execute o servidor com o script no modo devesenvolvimento para iniciar um servidor local:

```
npm run dev
```


### Rodando o React

Instale os pacotes utilizando o comando abaixo:

```
yarn install
```

Rode o aplicativo em modo desenvolvimento.

```
yarn start
```

Abra o endereço http://localhost:3000 para visualizar o site Web.


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
* [Nivo](https://nivo.rocks/components) - gráfico
* [JQuery](https://jquery.com/) - jquery
* [PopperJS](https://popper.js.org/) - ferramenta de posição
* [React Calendar Heat Map](https://www.npmjs.com/package/react-calendar-heatmap) - calendário
* [React Loading](https://www.npmjs.com/package/react-loading) - loading animation

## Versões

Para ver as versões deste projeto, utilize as [tags deste repositório](https://github.com/carona-jr/academia-pokemon/releases). 

## Autores

* **Carlos Roberto** - *Estudante de Sistemas de Informação - UNESP* 
* **Giovanna Simioni** - *Estudante de Sistemas de Informação - UNESP* 
* **Leandro** - *Estudante de Sistemas de Informação - UNESP* 
* **Lucas Pederzini** - *Estudante de Sistemas de Informação - UNESP* 

## Licença

MIT License - [see more](https://github.com/carona-jr/academia-pokemon/blob/master/LICENSE)
