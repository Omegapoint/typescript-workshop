namespace Blog {
    export class ImageArticle implements Article {
        title: string;
        author: Author;
        content: string;
        uri: Common.URI;

        constructor(title: string, author: Author, content: string, uri: Common.URI) {
            this.title = Validate.notBlank(title);
            this.author = Validate.notNull(author);
            this.content = Validate.notBlank(title);
            this.uri = Validate.notNull(uri);
        }

        static fromJSON(data: any): ImageArticle {
            return new ImageArticle(data.title, new Author(data.author), data.content, new Common.URI(data.uri));
        }

        render(element: HTMLElement) {
            let article: HTMLElement = document.createElement("article")
            article.innerHTML =
                "<h3>" + this.title + "</h3>" +
                "<p>" + this.author.value + "</p>" +
                "<span>" + this.content + "</span><br/>" +
                "<img src=\"" + this.uri.value + "\">";

            element.appendChild(article);
        }
    }
}