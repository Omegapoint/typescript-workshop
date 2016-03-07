namespace Blog {
    export class TextArticle implements Article {
        title: string;
        author: Author;
        content: string;

        constructor(title: string, author: Author, content: string) {
            this.title = Validate.notBlank(title);
            this.author = Validate.notNull(author);
            this.content = Validate.notBlank(content);
        }

        render(element: HTMLElement) {
            let article: HTMLElement = document.createElement("article")
            article.innerHTML =
                "<h3>" + this.title + "</h3>" +
                "<p>" + this.author.value + "</p>" +
                "<span>" + this.content + "</span>";

            element.appendChild(article);
        }

        static fromJSON(data: any): TextArticle {
            return new TextArticle(data.title, new Author(data.author), data.content);
        }
    }
}