import Author = require('./Author')
import Article = require('./Article')
import TextArticle = require('./TextArticle')
import ImageArticle = require('./ImageArticle')
import VideoArticle = require('./VideoArticle')

// Import lodash
import _ = require('lodash');

class ArticleList {
    constructor(public textArticles: Array<TextArticle>, public imageArticles: ImageArticle[], public videoArticles: Array<VideoArticle>) { }

    static fromJSON(data: any): ArticleList {
        data.textArticles.forEach(val => val.title = _.replace(val.title, "article", "text"));
        data.imageArticles.forEach(val => val.title = _.replace(val.title, "article", "text"));
        data.videoArticles.forEach(val => val.title = _.replace(val.title, "article", "text"));
        
        let textArticles: Array<TextArticle> = data.textArticles.map((val, idx) => TextArticle.fromJSON(val));
        let imageArticles: Array<ImageArticle> = data.imageArticles.map((val, idx) => ImageArticle.fromJSON(val));
        let videoArticles: Array<VideoArticle> = data.videoArticles.map((val, idx) => VideoArticle.fromJSON(val));

        return new ArticleList(textArticles, imageArticles, videoArticles);
    }

    all(): Array<Article> {
        return (<Article[]>this.textArticles).concat(this.imageArticles).concat(this.videoArticles);
    }
}

export = ArticleList;