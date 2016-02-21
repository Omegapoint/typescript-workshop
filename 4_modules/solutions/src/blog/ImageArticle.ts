module Blog {
    export class ImageArticle implements Article {
        title: string;
        author: string;
        content: string;
        uri: Common.URI;

        constructor(title: string, author: string, content: string, uri: Common.URI) {
            this.title = Validate.notBlank(title);
            this.author = Validate.notBlank(title);
            this.content = Validate.notBlank(title);
            this.uri = Validate.notNull(uri);
        }

        static fromJSON(data: any): ImageArticle {
            let article = <ImageArticle>data; // We dont have any functions in this class, so we can direct cast most fields, except URI
            article.uri = new Common.URI(data.uri); // So set it explicitly
            return article;
        }
    }
}