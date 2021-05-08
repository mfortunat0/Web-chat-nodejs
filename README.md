# Web chat Rocketseat 
Desenvolvido na quinta edição da Next Level Week da trilha Node.js
## Conceitos aprendidos
- [x] Websocket com biblioteca socket.io
- [x] Uso do ORM [Typeorm](https://typeorm.io/#/)
- [x] Estruturação de pastas
- [x] Uso do banco SQLite

# Preview
![preview](.github/preview.gif)

# Como usar
```bash
# Clone o repositorio
git clone https://github.com/mfortunat0/nlw5-nodejs.git && cd nlw5-nodejs

# Instalando dependecias
yarn || npm install

# Rodando as migrations
yarn typeorm migration:run || npm run typeorm migration:run 

# Rodando projeto
yarn dev || npm run dev
```
Agora acesse [localhost na porta 3001](http://localhost:3001/)