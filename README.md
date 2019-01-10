# email-boilerplate

Esse é um pequeno boilerplate para desenvolvimento de email marketing. Ele inclui:

* **Gulp.js:** Módulo do Node.js para automação do fluxo de desenvolvimento Front-end
* **gulp-clean:** Plugin do Gulp que faz eliminação recursiva de arquivos
* **gulp-htmlmin:** Plugin do Gulp que faz a minificação de arquivos HTML
* **gulp-imagemin:** Plugin do Gulp que otimiza imagens
* **gulp-inline-css:** Plugin do Gulp que pega todos os estilos dentro da tag "style" e coloca eles inline

## Como usar...

```bash
npm install
```
Instala todas as dependências do projeto

```bash
npm run dev - Inicia o browser-sync para desenvolvimento ágil
```
Inicia o browser-sync para desenvolvimento ágil

```bash
npm run gulp 
```
Cria uma versão de produção do projeto com :

* Todo o CSS dentro de "style" fica inline
* HTML minificado
* Imagens otimizadas

Espero que goste! :)