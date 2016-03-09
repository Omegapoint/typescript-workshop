# TypeScript workshop
##### Authors: Daniel Hultqvist and Christoffer Sawicki

This workshop is intended to give a great start into the world of TypeScript. 

We will start with an introduction slideshow where TypeScript is explained. After that, it is time for the exercises where each exercise introduce a new concept. 

Each exercise has it's own folder which in turn consists of two folders **exercise** and **solutions** and a **README** file. The instructions for the exercise is in the **README** file which can be displayed nicely on GitHub. The idea is that you should start the exercise in the **exercise** folder and perform all the work there. If you need help/hints, you can sneak-peek in the solutions folder which  has a complete solution.

Each exercise starts off with the previous exercise solution. So it is highly advised to start from the beginning and take it step by step, or atleast investigate the solutions step by step.

### Prerequisites
Some software is needed to perform this lab.  
1. **Editor**. We recommend using *Visual Studio Code* as it is free and has great autocompletion. *IntelliJ* is also a great tool.  
2. **NodeJS**. NPM (package manager) is needed to get dependencies (compare with Maven or Gradle). Can be downloaded at https://nodejs.org/en/ . Avoid installing using brew/macports etc. as it can lead to permission problems. If NPM is installed correctly, you should be able to run **npm --version** in your terminal/command prompt

### Optional
In order to verify that everything is working on your own machine, you can install TypeScript using NPM
```sh
npm install typescript -g
```

Create a file **hello.ts** and add 
```javascript
var name: string = "Peter Pan";
```

and then run 
```sh
tsc hello.ts
```

If everything works fine, you should now have a hello.js file in the same folder. This will suffice as a start of this workshop.