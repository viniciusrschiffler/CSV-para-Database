<h1 align="center"> Passando Planilha CSV de 9.232 Linhas para Banco de dados </h1>

<h1 align="center"><img src=ImgForREADME/img01.png width=100%></h1>

# Indice

- [Sobre](#-sobre)
- [Como Testar o Projeto](#-Como-Testar-o-Projeto)
- [Tecnologias](#-Tecnologias)
- [Veja Mais Sobre Mim ](#-Veja-Mais-Sobre-Mim)

---
## 📖 Sobre
<h3 align="center">Usando Node.js para passar 17 mil dados de uma planilha csv para banco de dados PostgreSQL</h3 align="center">

<br>
A ideia desse porjeto veio a partitr de uma aula sobre banco de dados que eu participei, nessa aula o professor passou como exercício, uma planilha em CSV em que deveriamos analizar os dados dessa planilha, e transformar em um banco de dados normalizado.

<br><br>
Planilha no excel

<img src=ImgForREADME/PlanilhaParte1.png width=100%/>
<img src=ImgForREADME/PlanilhaParte2.png width=100%/>

---

<br><br>
Modelo do Banco já modelado

<img src=ImgForREADME/modeloDB.png />
<br><br><br><br>

Depois de já normalizado, deveria-mos inserir alguns dados da planilha no Banco, porém depois, olhando a planilha percebemos que ela era maior que imaginava-mos.
<br><br>
Foi então que tive a ideia de criar um programa, para inserir todos os dados rapidamente no banco.
<br><br>
No final a tabela tinha 9.232 linhas e foram inseridos 17.472 dados ao Banco em 1,534 Segundos

---
## 💻 Como Testar o Projeto
<br>
Você precisará instalar em seu computador:
<br><br>

- NodeJs
- PostgreSQL
- Algum gerenciador de banco de dados (Usei o DBeaver)

<br>
Depois siga os passos:
<br><br>

1. Clone este repositório `https://github1com/viniciusrschiffler/CSV-para-Database.git`.

2. Abra o seu gerenciador de banco de dados e roda as query do arquivo `createTables.sql` localizado na pasta `DataBase` do projeto.

3. Na raíz do projeto, execute o comando `npm install` ou apenas `npm i` para instalar as dependêcias.

4. Vá para `src/connections` e no arquivo `connections.js` troque os dados de conexão de acordo com o seu banco.  

5. Após a instalação, execute o comando `node index.js`.



---
## ⚙ Tecnologias
 - Node.js
    - fast-csv
    - pg
    - nodemon (para desenvolvimento)

 ---

## 🙍‍♂️ Veja Mais Sobre Mim
 - [Instagram](https://www.instagram.com/vinicius_schiffler/)
 - [YouTube](https://www.youtube.com/channel/UCW6MiRkWJMspGgC9w8FnjNg)
 - [linkedin](https://www.linkedin.com/in/vinicius-rocha-schiffler-6664931b7/)

 ---

<p align="center">Obrigado por ler até aqui 💙 by Vinicius Rocha Schiffler</p>
