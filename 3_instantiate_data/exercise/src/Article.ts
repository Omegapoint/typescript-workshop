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
}

class VideoArticle implements Article {
    constructor(public title: string, public author: string, public content: string, private uri: URI) {    }   
    getURI() : URI { return this.uri; }
}