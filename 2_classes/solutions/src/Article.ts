interface Article {
    title: string;
    author: string;
    content: string;
}

class TextArticle implements Article {
    title: string;
    author: string;
    content: string; 
    
    constructor(title: string, author: string, content: string) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
}

class ImageArticle implements Article {
    constructor(public title: string, public author: string, public content: string, public uri: URI) {
        // Left empty, automatic mapping using public modifiier in construtor parameters         
    }
}

class VideoArticle implements Article {
    title: string;
    author: string;
    content: string;
    
    constructor(title: string, author: string, content: string, private uri: URI) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    
    setURI(uri: URI) : void {
        this.uri = uri;
    }
    
    getURI() : URI {
        return this.uri;
    }
}