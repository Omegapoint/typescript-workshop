ready(function() {
    
    // Retrieve JSON from external source
    getJSON(new URI("articles.json"), data => {
        //let articles: ArticleList = <ArticleList>data; // Direct casting will lose the URI object and convert directly to string (which is allowed in runtime but not compile)
        let articles = ArticleList.fromJSON(data);
        
        articles.textArticles.forEach((val, idx) => addTextArticle(val));
        articles.imageArticles.forEach((val, idx) => addImageArticle(val));
        articles.videoArticles.forEach((val, idx) => addVideoArticle(val));
    });
});