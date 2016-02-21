interface Article {
    title: string;
    author: string;
    content: string;
}

class TextArticle implements Article {
    constructor(public title: string, public author: string, public content: string) {    }
}

class ImageArticle implements Article {
    constructor(public title: string, public author: string, public content: string, public uri: URI) {    }
    
    static fromJSON(data: any) : ImageArticle {
        let article = <ImageArticle>data; // We dont have any functions in this class, so we can direct cast most fields, except URI
        article.uri = new URI(data.uri); // So set it explicitly
        return article;
    }
}

class VideoArticle implements Article {
    constructor(public title: string, public author: string, public content: string, private uri: URI) {    }   
    getURI() : URI { return this.uri; }
    
    static fromJSON(data: any) : VideoArticle {
        return new VideoArticle(data.title, data.author, data.content, new URI(data.uri)); // we could also create a new using constructor. 
    }
}