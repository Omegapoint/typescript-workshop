module Blog {
    export class VideoArticle implements Article {
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
        getURI(): Common.URI { return this.uri; }

        static fromJSON(data: any): VideoArticle {
            return new VideoArticle(data.title, data.author, data.content, new Common.URI(data.uri)); // we could also create a new using constructor. 
        }
    }
}