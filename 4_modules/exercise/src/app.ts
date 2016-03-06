getJSON(new URI("articles.json"), data => {
    let articles = ArticleList.fromJSON(data);
    
    var articleContainer: HTMLElement = document.getElementById("articles");
    articles.all().forEach(article => article.render(articleContainer));
});