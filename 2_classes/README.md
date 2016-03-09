# Exercise 2: Classes
In this exercise, we will investigate how classes are created in TypeScript and how they can be used. The application will list articles which can be text articles, image articles or video articles.

## Steps:
1. Run **npm install** and then compile using **tsc**
2. Start the "application", i.e. open the index.html file and see how it looks. Currently, one class-less article is added using strings
3. Create a new file that contains an Author class which has a string value field with a corresponding constructor
   #### Class: Author
   | Field        | Type                             |
   | ----------- |:---------------------------------| 
   | value       | string variable                  |  
   
4. Create a new file to contain the article classes (one file will suffice, split into several if you wish but will require "more" script tags in html)
5. Create an interface which has the following fields/methods
   #### Interface: Article
   | Field        | Type                             |
   | ----------- |:---------------------------------| 
   | title       | string variable                  | 
   | author      | Author variable                  |  
   | content     | string variable                  |   
   | render      | void method, accepts HTMLElement |
   
6. Implement the interface with the classes TextArticle, ImageArticle and VideoArticle. Start with TextArticle since it is easiest and continue with the next step. When you can instantiate and render it correctly, continue with the next ones
   #### Class: TextArticle, Implements: Article
   | Field        | Type                             |
   | ----------- |:---------------------------------| 
   | title       | string variable                  | 
   | author      | Author variable                  |  
   | content     | string variable                  |   
   | render      | void method, accepts HTMLElement parameter |
   
   #### Class: ImageArticle, Implements: Article
   | Field        | Type                             |
   | ----------- |:---------------------------------| 
   | title       | string variable                  | 
   | author      | Author variable                  |  
   | content     | string variable                  |  
   | uri         | URI variable                     |   
   | render      | void method, accepts HTMLElement parameter |
   
   #### Class: VideoArticle, Implements: Article
   | Field        | Type                             |
   | ----------- |:---------------------------------| 
   | title       | string variable                  | 
   | author      | Author variable                  |  
   | content     | string variable                  |   
   | uri         | URI variable                     |   
   | render      | void method, accepts HTMLElement parameter |
   
7. Create an array that contains some TextArticles, a ImageArticle and a VideoArticle. Retrieve the HTMLElement container element for the articles and for each article, render.

## HTML Help
Since this is a TypeScript workshop, some examples for HTML are provided below:

##### Example TextArticle markup
```html
<h3>Title</h3>
<p>Author</p>
<span>Content</span>
```

##### Example ImageArticle markup
```html
<h3>Title</h3>
<p>Author</p>
<span>Content</span>
<br/>
<img src="URI">
```

##### Example VideoArticle markup
```html
<h3>Title</h3>
<p>Author</p>
<span>Content</span>
<br/>
<video controls src="URI" />
```

## Questions:
1. How does a class look when compiled into plain JavaScript?
2. How does a function look like that accepts a specific class or interface?
3. Why is not function overloading with the same number of parameters allowed in TypeScript?
4. Which different ways can you create a constructor?
5. How does one protect internal variables against external usage? Can this also be set in the constructor?
6. Why would you use a private constructor parameter?
7. Do you have to specify type for a variable?
8. What happens when you try to pass in a ImageArticle as a TextArticle parameter?
9. What happend when you try to pass in a TextArticle as a ImageArticle parameter?
10. Why is it a bad idea to generate HTML elements by string concatenation?