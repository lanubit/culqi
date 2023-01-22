# RETO TECNICO CULQI

## Requisitos
* npm
* MongoDB
* docker-compose
#

## Pasos previos a la instalción
* Crear base de datos **culqi** en MongoDB
* Si se utiliza un servidor MongoDB distinto a localhost o un puerto en específico, cambiar la ruta en el archivo **culqi/src/token/infrastructure/db/mongo.db.ts** linea 3.
  > const URI = 'mongodb://localhost:27017/culqi';


* Si se desea ejecutar MongoDb con docker.
  * Ubicarse dentro de la carpeta docker/mongo
    > $ cd docker/mongo 
  * Ejecutar el comando
    > $ docker-compose up -d 
  * Abrir navegador e ir a la ruta **http://localhost:8081/** (usuario: root, clave: root)
  * Crear la base de datos **culqi**

#
## Instalación
* Upicarse en la raiz del proyecto y ejeutar el comando
  >$ npm install

#
## PROYECTO

### Comandos:

* Comando compilar typescript
  > $ npm run build

* Comando para levantar proyecto en entorno local
  > $ npm run start:dev

* Comando para ejecutar los test
  > $ npm run test

### API Rest
* Generar Token
  ```
  METHOD: POST
  URL: http://localhost:3000/tokens
  HEADER:
    Authorization: Bearer client_id_example
  ```
* Obtener datos de tarjeta desde token
  ```
  METHOD: GET
  URL: http://localhost:3000/tokens/{token}/card-decode
  HEADER:
    Authorization: Bearer client_id_example
  ```
