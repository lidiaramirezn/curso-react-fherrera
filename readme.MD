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
- Ejecutar `npm run build`
- Ejecutar el comando `gh-pages -d dist`

Guía gh-pages: [https://www.npmjs.com/package/gh-pages](https://www.npmjs.com/package/gh-pages) 

Guía deploy vite - ghpages: [https://vitejs.dev/guide/static-deploy.html#github-pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

## Configuraciones para las pruebas unitarias y de integraciones
- Instalar Jest: `npm install --save-dev jest`
- Agregar en package.json el script: `"test": "jest"`, si se requiere siempre estar "escuchando": `"test": "jest --watchAll"`
- Instalar `@types/jest` para ayuda en el autocompletado de las pruebas: `npm install --save-dev @types/jest`
- Instalar babel-jest: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Crear archivo babel.config.js y agregar contenido según guía de jest
- Para ejecutar: `npm run test`
- Para el caso de usar pruebas con fetch instalar dependecia: `npm install --save-dev whatwg-fetch` 

## Test React - Jest - Testing Library
- Instalar Testing library `npm install --save-dev @testing-library/react`
- Instalar `npm install --save-dev jest-environment-jsdom`
- Configurar jest.config
- Instalar `npm i --save-dev @babel/preset-react`
- Configurar babel.config

Guía Jest: [https://jestjs.io/](https://jestjs.io/)

##  Página desplegada: 
>[https://lidiaramirezn.github.io/curso-react-fherrera/](https://lidiaramirezn.github.io/curso-react-fherrera/)
