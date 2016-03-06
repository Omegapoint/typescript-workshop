getJSON(new URI("articles.json"), data => {
    let articles = ArticleList.fromJSON(data);
    
    var articleContainer: HTMLElement = document.getElementById("articles");
    
    articles.textArticles.forEach(article => article.render(articleContainer));
    articles.imageArticles.forEach(article => article.render(articleContainer));
    articles.videoArticles.forEach(article => article.render(articleContainer));
});