# Exercise 1: Hello World
### Setting up compiler and project files
This exercise is a warm-up to verify that the TypeScript compilator is working and compiling code correctly. The main task is to replace a span element which is on the index.html page.

#### Steps needed
1. Create a source folder for TypeScript source code
2. Create a npm package file to include TypeScript dependencies (package.json). Use **npm init**. TypeScript can be installed using 
   ```sh
   npm install typescript -g --save-dev
   ```
3. Create a TypeScript config file (tsconfig.json). The output should be put in a 'js' folder. **Note** that node_modules need to be excluded. 
4. Create a TypeScript source file (**app.ts**) and a function that updates the <span> element in the HTML with "Hello " and an input name. The input name should be of string type. 
5. Compile the file (run **tsc** in terminal)
6. Open the HTML in your browser and check if the code is working. Debug using the developer tools if needed

#### Helpful tips
There is a 'watch' functionality built into the TypeScript compiler. Add the flag '--watch'/'-w' and it will recompile on every source code update.
```sh
tsc -w
```
   
#### Discussion
1. What happens if you try to pass a integer to the function?
2. Is null values or undefined values allowed to pass into the function?
3. How does the compiled Javascript look like? Is it still only possible to pass string values to the function?