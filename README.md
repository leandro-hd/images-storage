<h1 align="center"> Images Storage </h1>

<p align="center">
  <a href="#status"> Status </a> ♦️ 
  <a href="#features"> Features </a> ♦️ 
  <a href="#deploy"> Deploy </a> ♦️ 
  <a href="#execute"> Como Executar </a> ♦️ 
  <a href="#tecnologys"> Tecnologias </a> ♦️ 
  <a href="#author"> Autor </a> ♦️ 
  <a href="#license"> Licença </a> ♦️ 
</p>

<br/>

<p align="center">
  <img src="https://github.com/leandro-hd/images-storage/blob/master/resources/images-storage.png" alt="Diagrama" height="390px"/>
</p>

<br/>

<p align="center"> Uma API criada para armazenar imagens, e atribuí-las a uma categoria específica. </p>

<p align="center">
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn"/> &nbsp;
  <img src="https://img.shields.io/github/license/leandro-hd/images-storage?style=for-the-badge" alt="License MIT"/>
</p>

<br/>

<h2 id="status"> ✅ Status do Projeto </h2>

<p> ⭐ Concluído </p>

<br/>

<h2 id="features"> 🛠 Features </h2>

<p>
  ✔️ Armazenamento de imagens (arquivo e caminho); <br/><br/>
  ✔️ Atribuição de categoria às imagens; <br/><br/>
  ✔️ Tratamento de erros; <br/><br/>
  ✔️ Consulta de imagens por categoria;
</p>

<br/>

<h2 id="deploy"> 🚀 Deploy </h2>

<a href="https://images-storage.herokuapp.com/category">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"/>
</a>

<br/>

<h2 id="execute"> 📷 Como Executar </h2>

<h3> ⚠️ Pré-requisitos </h3>

<p> Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas: <br/>

👉 Node.js; <br/>

👉 Gerenciador de pacotes (como o <strong>npm</strong> ou <strong>Yarn</strong>); <br/>

👉 Editor de códigos (como o <strong>Visual Studio Code</strong>); </p>

<br/>

<h3> 🏁 Rodando o servidor </h3>

<pre>
  <code>Clone este repositório <br/>
  $ <strong>git clone <https://github.com/leandro-hd/images-storage.git></strong> <br/>

  Acesse a pasta do projeto no terminal/cmd <br/>
  $ <strong>cd images-storage</strong> <br/>

  Instale as dependências <br/>
  $ <strong>yarn add</strong>

  Execute a aplicação em modo de desenvolvimento <br/>
  $ <strong>yarn dev</strong> <br/>

  O servidor inciará na porta:3333 - acesse <strong>http://localhost:3333</strong></code>
</pre>

<br/>

<h3> 🚨 Importante </h3>

<p>
  ⚡ Para se conectar ao banco de dados, crie um arquivo <strong>.env</strong> na raíz do projeto, e insira as seguintes informações: </br>
  
    DB_HOST = sua-hospedagem

    DB_USERNAME = nome-do-usuário

    DB_PASSWORD = senha-do-banco-de-dados

    DB_NAME = nome-do-banco-de-dados
    
  ⚡ Para salvar uma categoria/imagem, envie uma requisição do método <strong>POST</strong> para a rota <strong>http://localhost:3333/category</strong>; </br></br>
  ⚡ Para visualizar todos os registros, envie uma requisição do método <strong>GET</strong> para a rota <strong>http://localhost:3333/category</strong>; </br></br>
  ⚡ Para visualizar os registros de uma categoria, envie uma requisição do método <strong>GET</strong> para a rota <strong>http://localhost:3333/category/id</strong>; </br></br>
  ⚡ Todas as imagens salvas vão para a pasta <strong>uploads</strong>, e podem ser visualizadas através da rota <strong>http://localhost:3333/uploads/nome-da-imagem</strong>;
<p>

<br/>

<h2 id="tecnologys"> ♟️ Tecnologias </h2>

<p> Para a construção desse projeto, as seguintes ferramentas foram utilizadas: <br/>

▶️ Node.js; <br/><br/>
▶️ Express; <br/><br/>
▶️ Typescript; <br/><br/>
▶️ PostgreSQL; <br/><br/>
▶️ ElephantSQL; <br/><br/>
▶️ Sequelize;

</p>

<br/>

<h2 id="author"> 🏷️ Autor </h2>

<p> Feito por <strong>Leandro Dias</strong>. 🤙 Entre em contato! </p>

<p>
  <img src="https://img.shields.io/badge/-Github-000?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/leandro-hd" alt="leandro-hd"/> &nbsp;
  <img src=https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:leandrohg2003@gmail.com" alt="leandrohg2003@gmail.com" />
</p>

<br/>

<h2 id="license"> 📝 Licença </h2>

<p> Esse projeto está sob a <strong>Licença MIT</strong>. </p>

<img src="https://img.shields.io/github/license/leandro-hd/images-storage?style=for-the-badge" alt="License MIT" />
