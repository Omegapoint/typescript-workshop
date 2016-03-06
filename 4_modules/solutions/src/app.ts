/// <reference path="common/Helpers.ts" />

Common.ready(function() {
    Common.getJSON(new Common.URI("articles.json"), data => {
        Validate.notNull(data);

        addArticles(Blog.ArticleList.fromJSON(data));
    });

    function addArticles(articles: Blog.ArticleList) {
        var articlesElement: HTMLElement = document.getElementById("articles");
        articles.textArticles.forEach(val => val.render(articlesElement));
        articles.imageArticles.forEach(val => val.render(articlesElement));
        articles.videoArticles.forEach(val => val.render(articlesElement));
    }
});