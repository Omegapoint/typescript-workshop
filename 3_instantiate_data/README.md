# Exercise 3: Instantition from external data
In this exercise, we will investigate how classes can be instantiated from external JSON data. The data source will either be a local file or on an external web server. 
If serving a local file, an HTTP server is needed to serve the content. A simple implementation using python is available by running

##### Web server
```sh
sh server
```
or (*start* is defined in packages.json)
```sh
npm start
```
Python needs to be installed with example modules which is preinstalled on Mac OSX but not on Windows. Windows requires could either install python 2.7 with examples or using an external data source instead (provided at workshop)


## Steps:
1. Try to get/load the article JSON file using just your browser in order to verify that the data is in place, i.e. browse to something like
```html
http://localhost:8000/articles.json
```  
   
2. Retrieve the JSON data in your TypeScript and log it to the console.
3. Create a response class, **ArticleList**, which has fields for each article type (arrays).
4. Add a static method, **fromJSON(...)**, to **ArticleList** which accepts the JSON data and should convert each article type (see step 5)
5. Add a static method, **fromJSON(...)**, to each of the article types. The method should instantiate a new instance of the specific type
6. Render each article from the article list response.
   
   
## Questions:
1. Why cant we direct type cast the JSON data to our response class?
2. What type should the JSON data input have?