📌 Angular Exercise - Gerenciador de Tarefas

Bem-vindo ao Angular Exercise! Este projeto foi desenvolvido para praticar conceitos do Angular 17, utilizando a arquitetura Standalone Components e Módulos.

🛠️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado em seu computador:

Node.js (versão recomendada: 18 ou superior)

Angular CLI (versão 17):

npm install -g @angular/cli@17

JSON Server (para simular uma API REST):

npm install -g json-server

🚀 Como rodar o projeto

1️⃣ Clone o repositório:

git clone https://github.com/GabrielRogerioMessias/angular-exercise.git

2️⃣ Acesse a pasta do projeto:

cd angular-exercise

3️⃣ Instale as dependências:

npm install

4️⃣ Inicie a aplicação Angular:

ng serve

5️⃣ Inicie o servidor JSON (banco de dados fake):
Abra outro terminal, navegue até a pasta src/db e execute:

json-server --watch db.json

Agora o servidor estará rodando e pronto para armazenar suas tarefas! ✅

✨ Funcionalidades

✅ Listar todas as tarefas cadastradas✅ Criar novas tarefas✅ Utilização de Snackbar para feedback ao usuário✅ Validação de formulários para garantir que os campos obrigatórios sejam preenchidos✅ Implementação de Botões, Toolbar, Inputs, Model e Service

📂 Estrutura do Projeto

angular-exercise/
│── src/
│ ├── app/
│ │ ├── components/
│ │ ├── models/
│ │ ├── services/
│ │ ├── app.component.ts
│ │ ├── app.module.ts
│ ├── db/
│ │ ├── db.json (base de dados fake)
│ ├── index.html
│ ├── main.ts
│── package.json
│── angular.json
│── README.md

📝 Observações

Este é um projeto simples, com o objetivo principal de aprender e praticar o uso do Angular utilizando Standalone Components e Módulos. Caso tenha alguma dúvida ou queira contribuir, fique à vontade! 😃
