module Blog {
    export class TextArticle implements Article {
        title: string;
        author: string;
        content: string;

        constructor(title: string, author: string, content: string) {
            this.title = Validate.notBlank(title);
            this.author = Validate.notBlank(title);
            this.content = Validate.notBlank(title);
        }
    }
}