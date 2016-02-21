/// <reference path="common/Helpers.ts" />

Common.ready(function() {
    Common.getJSON(new Common.URI("articles.json"), data => {
        Validate.notNull(data);

        addArticles(Blog.ArticleList.fromJSON(data));
    });

    function addArticles(articles: Blog.ArticleList) {
        articles.textArticles.forEach((val, idx) => Common.addTextArticle(val));
        articles.imageArticles.forEach((val, idx) => Common.addImageArticle(val));
        articles.videoArticles.forEach((val, idx) => Common.addVideoArticle(val));
    }
});