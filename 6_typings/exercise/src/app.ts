import URI = require('./common/URI');
import Helpers = require('./common/Helpers');
import Article = require('./blog/Article');
import ArticleList = require('./blog/ArticleList');
import * as Validate from './validate/Validate';

Helpers.ready(function() {
    Helpers.getJSON(new URI("articles.json"), data => {
        Validate.notNull(data);

        addArticles(ArticleList.fromJSON(data));
    });

    function addArticles(articles: ArticleList) {
        var articleContainer: HTMLElement = document.getElementById("articles");
        articles.all().forEach(article => article.render(articleContainer));
    }
});