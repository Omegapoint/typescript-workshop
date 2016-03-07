# Exercise 6: Typings
In this exercise, we will investigate how we can add type safety to already existing, non-typescript, libraries. In almost all frontend applications, external libraries are used such as JQuery, Angular, Underscore etc.
We want the ability to have type safety when using functionlity/classes from these libraries. 

TypeScript has the concept of **definition files**. These files contains type mapping for plain JavaScript. A definition file has the file ending **.d.ts**. In this exercise, we will retrieve type definitions for the utility library **lodash**.
Previously, a utility called **DefinitelyTyped** was used to retrieve definition files. The new kid on the block is however **Typings**, which is much more flexible.

In this exercise, we will use the library **lodash** which has nice helper functionality (such as flatMap, reduce, replace e.tc.). We will retrieve a defintion file for the libray so that we will have type safety.

We will continue using external modules as it is required to load external libraries. Hence, we will also continue using **Webpack** instead of the **tsc** compiler.
Remember the *watch* functionality which can be used as **webpack -w**.

##### Web server

As in exercise 3, the data will be loaded from JSON. This requires a web server to be running, which can be done as below
```sh
sh server
```
or (*start* is defined in packages.json)
```sh
npm start
```
Python needs to be installed with example modules which is preinstalled on Mac OSX but not on Windows. 
Windows requires could either install python 2.7 with examples or using an external data source instead (provided at workshop)

## Steps:
1. Install Typings globally using npm
   ```sh
   npm install typings -g --save-dev
   ```
2. Install lodash as an dependency using npm
   ```sh
   npm install lodash --save
   ```
3. Install typings files for lodash using **typings**
   ```sh
   typings install lodash --save
   ```
4. Exclude main typings which is used for server environments (we will use browser typings) in tsconfig.js
   ```javascript
    "exclude": [
        "node_modules",
        "typings/main",
        "typings/main.d.ts"
    ]
   ```
5. Import lodash in the ArticleList class
    ```javascript
    import _ = require('lodash');
    ```    
6. Use lodash to replace some text in an article title or similiar. ( **_.replace(val, search, replaceVal)** )

## Questions
1. How does the typing definition work?
2. What besides type safety can the definition file add?
3. Can you find a function that has type safety in lodash?
 (for example, a string manipulation)
4. Is there any difference in importing an external library with typings compared to your own modules?