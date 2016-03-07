# Exercise 4: Namespaces
In this exercise, we will investigate how classes and methods can divided into namespaces. Namespaces are a concept which can be used to encapsulated functionality in order to avoid polluting the global namespace.

A namespace is also formely known as an internal module. As the keyword module was easily confused with external modules (next exercise), it was decided to change the keyword to namespace. Older tutorials/guides will still however use the old term internal module.

##### Web server

As in exercise 3, the data will be loaded from JSON. This requires a web server to be running, which can be done as below
```sh
sh server
```
or (*start* is defined in packages.json)
```sh
npm start
```
Python needs to be installed with example modules which is preinstalled on Mac OSX but not on Windows. Windows requires could either install python 2.7 with examples or using an external data source instead (provided at workshop)

##### Bundling
As we are diving into namespace separation, there will be plenty of JavaScript files. It is no longer sustainable to include each of the compiled files into your HTML pages as script tags. Instead, we will use TypeScript compilers built-in functionality to bundle each of the TypeScript files into one. This can be done by changing **tsconfig.json** where 
```sh
"outDir": "js",
```
should be changed to
```sh
"outFile": "js/app.js",
```
Update your **index.html** file to only include the **app.js** file instead

## Steps:
1. Split the classes in Article.ts into a separate files (which is best practise)
2. Move the article related classes into a new folder, say **blog** or similiar
3. Encapsulated all of the article types into a namespace called the same as the folder
4. Create a Common namespace that contains helpers and similiar (URI etc.)
5. Create a Validation namespace which has the following methods
  ##### Namespace: Validation
   | Function name | Purpose                                                     |
   | --------------|:------------------------------------------------------------| 
   | notNull       | Validates that input is not null, returns input             | 
   | notBlank      | Validates that input **string** is not blank, returns input |  
     
6. Use the functionality in your Validation namespace to guard each constructor from invalid inputdata
   
   
## Questions:
1. Can you relate the namespace concept to any other programming language?
2. What can be put inside a namespace? Classes? Functions? Variables?