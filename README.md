# meli-test-frontend

# Overview

La aplicación consta de tres componentes principales: 
- La caja de búsqueda
- La visualización de resultados
- La descripción del detalle del producto

Stack tecnológico utilizado:

● Servidor:
- Node
- Express

● Cliente:
- HTML
- JS (React)
- CSS 

## Backend

El backend tiene la responsabilidad de conectarse con la API de MercadoLibre para obtener la información necesaria.

Utiliza los siguientes endpoints:

* https://api.mercadolibre.com/sites/MLA/search?q= :query 

- Para obtener una lista de resultados que coincidan con los términos utilizados en la query.

* https://api.mercadolibre.com/items/ ​ :id
* https://api.mercadolibre.com/items/ ​ :id​ /description

- Para obtener información detallada de un item en particular.

Utiliza el puerto 4000.

## Frontend

El frontend utiliza el puerto 3000 y consiste de las siguientes pantallas:

1. Buscador inicial 
2. Resultados de la búsqueda
3. Detalle de un item/producto

1. `http://localhost:3000`
El buscador inicial es la home del proyecto.

2. `http://localhost:3000/items?search=query`
Muestra la pantall de resultados de la búsqueda realizada.

3. `http://localhost:3000/items/id`
Muestra la pantalla con información particular de un item/producto.

## Instalación

En el directorio principal del proyecto abrir dos terminales:

- En la terminal para el cliente ejecutar los siguientes comandos:

- `cd cliente`
- `npm install`

- En la terminal para el servidor ejecutar los siguientes comandos:

- `cd backend`
- `npm install`

## Ejecución

Para levantar la aplicación es necesario ejecutar los siguientes comandos:

- En la terminal para el cliente ejecutar los siguientes comandos:

`npm start`

- En la terminal para el servidor ejecutar los siguientes comandos:

`npm run dev`

