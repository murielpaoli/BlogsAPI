# BlogsAPI 📝📡

Este projeto consiste no desenvolvimento de uma API e um banco de dados para a produção de conteúdo para um blog, utilizando Node.js e o pacote Sequelize para criar um CRUD de posts.

## Funcionalidades

- **CRUD de posts**: Criação, leitura, atualização e exclusão de posts.
- **Autenticação**: Utilização do JWT para autenticação de usuário e login para realizar um post.
- **Relações entre tabelas**: Implementação das relações entre usuário e post, além de posts e categorias.
- **ORM Sequelize**: Utilização do Sequelize para gerenciar o banco de dados e aplicar migrations.

## Endpoints Desenvolvidos

### Usuários
- **POST /login**: Realiza o login de um usuário.
- **POST /user**: Criação de um novo usuário.
- **GET /user**: Lista todos os usuários.
- **GET /user/:id**: Obtém um usuário específico pelo ID.
- **DELETE /user/me**: Remove o próprio usuário autenticado.

### Categorias
- **POST /categories**: Criação de uma nova categoria.
- **GET /categories**: Lista todas as categorias.

### Posts
- **POST /post**: Criação de um novo post.
- **GET /post**: Lista todos os posts.
- **GET /post/:id**: Obtém um post específico pelo ID.
- **PUT /post/:id**: Atualiza um post específico.
- **DELETE /post/:id**: Remove um post específico.

## Modelos e Migrations

- **Users**: Desenvolvido no arquivo `src/models/User.js` com as propriedades corretas.
- **Categories**: Desenvolvido no arquivo `src/models/Category.js`.
- **BlogPosts**: Desenvolvido no arquivo `src/models/BlogPost.js` com as associações corretas.
- **PostsCategories**: Desenvolvido no arquivo `src/models/PostCategory.js`.

## Ferramentas e Tecnologias

<details>
  <summary><strong>Linguagens de Programação</strong></summary><br />
  <strong>Node.js</strong><br />
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js">
  </a>
</details>

<details>
  <summary><strong>Banco de Dados</strong></summary><br />
  <strong>MySQL</strong><br />
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL">
  </a>
</details>

<details>
  <summary><strong>ORM</strong></summary><br />
  <strong>Sequelize</strong><br />
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=sequelize" alt="Sequelize">
  </a>
</details>

<details>
  <summary><strong>Ambiente de desenvolvimento</strong></summary><br />
  <strong>Docker e Docker Compose</strong><br />
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=docker" alt="Docker">
  </a>
</details>

## Dependências

- **express**: 4.18.2
- **express-async-errors**: 3.1.1
- **joi**: 17.6.0
- **jsonwebtoken**: 9.0.0
- **morgan**: 1.10.0
- **mysql2**: 2.1.0
- **sequelize**: 6.30.0
- **shelljs**: 0.8.5

## Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone git@github.com:seu-usuario/BlogsAPI.git
    ```

2. Entre na pasta do repositório que você acabou de clonar:
    ```sh
    cd BlogsAPI
    ```

3. Configure as variáveis de ambiente, criando um arquivo `.env` baseado no `.env.example`.


4. Suba os containers Docker:
    ```sh
    docker-compose up -d --build

    docker exec -it blogs_api bash
    ```

5. Execute as migrations:
    ```sh
    npx sequelize db:migrate
    ```

6. Instale as dependências:
    ```sh
    npm install
    ```

Agora você pode acessar a API localmente e testar os endpoints.
