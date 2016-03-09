# Exercise 5: (External) Modules
In this exercise, we will investigate how classes and methods can divided into external modules. Modules are similiar to namespaces, but a module is defined by a single file and the exports inside of it.
The concept is also in EcmaScript 6 and is used when importing external libraries.

External modules needs a module loader in order to be loaded into the browser. There are multiple options to do this. In a NodeJS environment, CommonJS is commonly used. 
In a browser environment, RequireJS or SystemJS is preferred. Setting up a module loading system is tedious and we will simplify this process by using Webpack, a bundler.

##### Webpack
Webpack is a bundle software that concatenates files into one single file. Beside the bundling part, Webpack can also add loading code for modules, which removes the need for configuring a module loader.
Instead of running the typescript compiler directly using 'tsc', we will know instead use webpack by simply running 'webpack'.

Webpack was installed by running (might be required to add -g)
```sh
npm install webpack --save-dev
```

A TypeScript loader is also needed which was installed by using
```sh
npm install ts-loader --save-dev
``` 
Webpack is configured using a webpack.config.js file. Please have a look inside it and figure out what it does. 

##### Web server

As in exercise 3, the data will be loaded from JSON. This requires a web server to be running, which can be done as below
```sh
sh server.sh
```
or (*start* is defined in packages.json)
```sh
npm start
```
Python needs to be installed with example modules which is preinstalled on Mac OSX but not on Windows. 
Windows requires could either install python 2.7 with examples or using an external data source instead (provided at workshop)

##### Bundling
We will continue using bundling as described in exercise 4. The starting point of this exercise already have bundling activated.

## Steps:
1. Update tsconfig.json to use modules. Replace **'outFile': ...** with **'module': 'commonjs'**
2. Convert all classes into modules by removing the namespace keyword and either:  
   a. End the file with
   ```javascript
   export = Article // Class Article
   ```
   b. Export the class/function directly with the export keyword  
   
    ```javascript
    export function notNull<T>(val: T, msg?: string): T { ... }
    export function notBlank(val: string, msg: string = "Value must no be blank"): string { ... }
    ```
  
3. Import the files using import/require keyword where needed. Examples:
  ```javascript
import URI = require('./common/URI');
import Helpers = require('./common/Helpers');
import Article = require('./blog/Article');
import * as Validate from './validate/Validate';
   ```
   
4. Compile using Webpack (**'webpack'**)
5. Run server (**npm start**) and go to http://localhost:8000

   
## Questions:
1. How does the compiled JavaScript file look like? Can you recognise your modules?
2. How does it differ from using namespaces?