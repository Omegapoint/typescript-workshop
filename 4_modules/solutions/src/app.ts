/// <reference path="common/Helpers.ts" />

Common.ready(function() {
    Common.getJSON(new Common.URI("articles.json"), data => {
        Validate.notNull(data);

        addArticles(Blog.ArticleList.fromJSON(data));
    });

    function addArticles(articles: Blog.ArticleList) {
        var articleContainer: HTMLElement = document.getElementById("articles");
        articles.all().forEach(article => article.render(articleContainer));
    }
});