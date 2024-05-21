## Create package.json file 
* `npm init -y`

## initialize git in your project 
* `git init` 

### create .gitignore file 
* add details which we don't want to push into git 

## Folder Structure 
* src
   * app.ts

## Installation 
* `npm install express typeorm reflect-metadata mysql2`

### development dependencies

* `npm install @types/node typescript ts-node nodemon @types/express --save-dev`

## create development package file for typescript 

* `npx tsc --init`
     #### According to our project we have to enable some configurations in tsc file

* `rootDir: "./src" `
* `"outDir": "./dist"`
*  `"strictPropertyInitialization": false`
* `"experimentalDecorators": true , "emitDecoratorMetadata": true, `

### For running our project we have setup some configures in package.json file 

`"scripts": {"dev": "nodemon src/app.ts", "build": "tsc", "start": "node dist/app.js"}`

### running application 
* `npm run dev`

### build for production. it will convert our code into typescript to javascript and creates a dist folder
* `npm run build`

### Now starts interaction with typeorm 
* first we have to working with datasource