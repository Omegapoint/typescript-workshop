import Author = require('./Author')
import Article = require('./Article')
import URI = require('../common/URI')
import * as Validate from '../validate/Validate';

class VideoArticle implements Article {
    title: string;
    author: Author;
    content: string;
    uri: URI;

    constructor(title: string, author: Author, content: string, uri: URI) {
        this.title = Validate.notBlank(title);
        this.author = Validate.notNull(author);
        this.content = Validate.notBlank(content);
        this.uri = Validate.notNull(uri);
    }

    getURI(): URI { return this.uri; }

    render(element: HTMLElement) {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author.value + "</p>" +
            "<span>" + this.content + "</span><br/>" +
            "<video controls src=\"" + this.getURI().value + "\" />"

        element.appendChild(article);
    }

    static fromJSON(data: any): VideoArticle {
        return new VideoArticle(data.title, new Author(data.author), data.content, new URI(data.uri));
    }
}

export = VideoArticle;