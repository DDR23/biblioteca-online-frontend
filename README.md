## IMPORTANTE
Esse repositório foi criado e desenvolvido para o Frontend do desafio 05 da escola DNC.

Nesse README.dm é possivel encontrar informações sobre:
- Etapas de desenvolvimento do desafio
- Instalações
- Funcionalidades
- Screenshots

#### URL da API: https://api-desafio05escoladnc.vercel.app/
#### URL da Aplicação Frontend: https://desafio05escoladnc.vercel.app/

&nbsp;

---

# Desafio-05---Desenvolva-uma-API-e-integre-ao-frontend-de-uma-aplicação---Escola-DNC

🎯 Etapas de Desenvolvimento

### ETAPA-01 - Clone o front-end
Para iniciar o desenvolvimento desse desafio, você precisará clonar o front da aplicação presente neste repositório. É ele que você deverá conectar à sua API.

### ETAPA-02 - Crie um projeto Node para sua API
Comece a construção da sua API através de um projeto em Node.JS. Para isso você deverá iniciar um projeto em Node no seu VS Code. Estruture a API conforme a funcionalidade requerida:
- Cadastro de livros contendo: um ID único, um Título, o Número de páginas, Código ISBN e a editora.
- Edição de livros: podendo editar qualquer campo.
- Visualização de livros: todos os livros cadastrados precisam estar no front-end.
- Deletar livros: todos os livros podem ser deletados.

### ETAPA-03 - Teste de Rotas
Teste cada uma das rotas da API para garantir que estão funcionando. Ao finalizar a API garanta que todas as rotas dela estejam funcionais e realizando o que deveriam estar fazendo.

### ETAPA-04 - Integre sua API com o Front
Implementar a Service que irá executar a conexão com a API. Desenvolva a Service que irá utilizar as rotas da API e irá enviar os dados para cada uma das views utilizadas e desenvolva as funcionalidades em cada View.

### ETAPA-05 - Realize o deploy
Na etapa final você deverá subir o arquivo no github e disponibilizar ele através do Vercel! Assim, qualquer um poderá ver o que você construiu funcionando.

&nbsp;

&nbsp;

## Tecnologias usadas
- vite.js
- sass

&nbsp;

## Instalações

&nbsp;
comandos para iniciar esse projeto do zero

```bash
  npm create vite@latest
```
```bash
  cd nome-do-projeto
```
```bash
  npm i axios dotenv react-router-dom react-icons react-hook-form @hookform/resolvers yup
```
```bash
  npm i -D sass
```

&nbsp;

&nbsp;
comandos para clonar esse projeto

```bash
  git clone https://github.com/DDR23/Desafio-05---FRONTEND---Desenvolva-uma-API-e-integre-ao-frontend-de-uma-aplicacao---Escola-DNC
```
```bash
  npm i
```

&nbsp;
Para rodar esse projeto, você vai precisar criar um arquivo .env e adicionar as seguintes variáveis de ambiente no seu .env

```
VITE_BASE_URL=https://api-desafio05escoladnc.vercel.app
```

&nbsp;

## Funcionalidades
- mostrar todos os livros cadastrados
- mostrar um detalhes de um livro especifico
- cria um livro
- edita um livro cadastrado
- apaga um livro cadastrado

&nbsp;

## Screenshots