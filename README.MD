# Projeto Automação em Cypress

## Esse projeto tem como objetivo testar a pagina Orange HRM
 
<div align="center"> 
<img  src = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img  src = "https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"/>
<img  src = "https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
</div>

## Table of Contents

- [Instalação](#Instalação)
- [Executando](#Executando)
- [Review](#Review)


## Instalação

1. **Instale o node.js:**

   ```
   https://nodejs.org/pt
   ```

3. **Install cypress:**

   ```
   npm install cypress 
   ```

## Executando

### Executando os Testes

Para rodar todos os testes em  headless mode:
``` npx  cypress run  ```

Para rodar todos os testes em Ambiente com UI:
``` npx cypress open ```


## Review

Este projeto foi desenvolvido com base no padrão POM (Page Object Model), utilizando o arquivo commands.js, o que torna a estrutura mais escalável. Os dados foram consumidos de um arquivo .json localizado em fixtures, o que também contribui para a escalabilidade e reutilização do projeto.
   