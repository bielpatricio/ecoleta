<h4 align="center">
<img src="./web/src/assets/logo.svg" align="center"/>
<br><br>
Seu marketplace de coleta de resíduos
</h4>

# 💡 Sobre

Projeto desenvolvido durante a Next Level Week #1 da Rocketseat que visa o descarte inteligente de resíduos que possam agredir o meio ambiente em locais adequados onde poderão ser reciclados e reaproveitados. Assim, o estabelecimento pode efetuar um cadastro informando sua localidade e tipos de itens que ele recicla como lâmpadas, óleo de cozinhas, papelão, etc. Com o aplicativo mobile é possível buscar por estabelecimentos próximos que faça a coleta dos itens recicláveis que deseja descartar.

# ⚙️ Como executar

### Expo
 * **Baixe no celular o app EXPO e no seu computador via terminal, considerando que já possui npm instalado, com** </br>
```bash
$ npm install --global expo-cli
```
  * **Clone o repositório**
  
### Iniciar Servidor

  * **Entre na pasta "./server" e execute no terminal:**
```bash
$ npm i
```
  * **Crie o banco de dados executando os comandos:**

```bash
$ npm run knex:migrate
$ npm run knex:seed
```
  * **Inicie o servidor:**

```bash
$ npm start
```

### Iniciar App Web

* **Após iniciar o servidor, entre na pasta "./web" e execute no terminal:**

```bash
$ npm i
$ npm start
```

### Iniciar App Mobile

* **Após iniciar o web, entre na pasta "./mobile" e execute no terminal:**

```bash
$ npm i
$ npm start
```

* **Por fim,  abra o aplicativo do Expo no celular e escaneie o QRCode para iniciar.**

# Funcionamento

  * **No site da web, cadastre um ponto de coleta escolhendo uma imagem, nome do local, email, whatsapp, localização no mapa, estado, cidade e selecione os itens que ele irá reciclar;**
  * **No app mobile, busque por ele ou outros anteriormente cadastrados.**

# :computer: Imagens da Pagina Web

<p align="center">
  <img src="https://github.com/caiovictors/Imagens-repositorios/blob/master/Ecoleta_Imagens/ecoleta_home.png" alt="Home Page" width="800">
  <img src="https://github.com/caiovictors/Imagens-repositorios/blob/master/Ecoleta_Imagens/ecoleta_cadastro.png" alt="Detail Page" width="800">
</p>

# :iphone: Imagens do App Mobile (Lugar fictício)

<p align="center">
  <img src="https://github.com/caiovictors/Imagens-repositorios/blob/master/Ecoleta_Imagens/mobile_home.jpg" alt="Mobile Home Page" width="270">

  <img src="https://github.com/caiovictors/Imagens-repositorios/blob/master/Ecoleta_Imagens/mobile_map.jpg" alt="Mobile Points Page" width="270">

  <img src="https://github.com/caiovictors/Imagens-repositorios/blob/master/Ecoleta_Imagens/mobile_local.jpg" alt="Mobile Details Page" width="270">
</p>
 
 # 💻 Tecnologias

### ⚛️ Frameworks
- [x] [Typescript](https://www.typescriptlang.org/).
- [x] [React Native](https://reactnative.dev/)
- [x] [Node.js](https://nodejs.org/en/) 
- [x] [React](https://pt-br.reactjs.org/)
- [x] [Expo](https://expo.io/)

### 📚 Bibliotecas e Dependências
- [x] [React Navigation](https://reactnavigation.org/)
- [x] [React-Dropzone](https://github.com/react-dropzone/react-dropzone)
- [x] [Celebrate](https://github.com/arb/celebrate)
- [x] [Express](https://expressjs.com/)
- [x] [Leaflet](https://leafletjs.com/)
- [x] [Multer](https://github.com/expressjs/multer)
- [x] [Axios](https://github.com/axios/axios)

### 🏦 Banco de dados
- [x] [SQLite](https://www.sqlite.org/)
- [x] [Knex](http://knexjs.org/)
