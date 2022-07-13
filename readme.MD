# Conocimientos aplicados

## React
Guía: [https://es.reactjs.org/docs/getting-started.html](https://es.reactjs.org/docs/getting-started.html)

- Componentes
- Props
- Events
- useState - hook

## Vite
Creación de proyecto: [https://vitejs.dev/guide/#trying-vite-online](https://vitejs.dev/guide/#trying-vite-online)


## Deploy con github-pages
- npm i gh-pages
- En vite.config.js, en base colocar '/<REPO>/'
- Crear archivo 'deploy.sh' y copiar contenido de la guía deploy vite, cambiar las partes resaltadas
- Ejecutar npm run build
- Ejecutar el comando "gh-pages -d dist"

Guía gh-pages: [https://www.npmjs.com/package/gh-pages](https://www.npmjs.com/package/gh-pages) 

Guía deploy vite - ghpages: [https://vitejs.dev/guide/static-deploy.html#github-pages](https://vitejs.dev/guide/static-deploy.html#github-pages)