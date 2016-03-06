interface Article {
    title: string; // Field of type string
    author: Author; // Field of type Author
    content: string; // Field of type string
    
    render(element: HTMLElement): void; // Method that accepts an HTMLElement variable and returns void
}

class TextArticle implements Article {
    constructor(public title: string, public author: Author, public content: string) {    }

    render(element: HTMLElement) {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author.value + "</p>" +
            "<span>" + this.content + "</span>";

        element.appendChild(article);
    }
    
    static fromJSON(data: any) : TextArticle {
        return new TextArticle(data.title, new Author(data.author), data.content);
    }
}

class ImageArticle implements Article {
    constructor(public title: string, public author: Author, public content: string, public uri: URI) {    }
    
    render(element: HTMLElement) {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author.value + "</p>" +
            "<span>" + this.content + "</span><br/>" +
            "<img src=\"" + this.uri.value + "\">";

        element.appendChild(article);
    }
    
    static fromJSON(data: any) : ImageArticle {
        return new ImageArticle(data.title, new Author(data.author), data.content, new URI(data.uri));
    }
}

class VideoArticle implements Article {
    constructor(public title: string, public author: Author, public content: string, private uri: URI) {    }   
    getURI() : URI { return this.uri; }

    render(element: HTMLElement) {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author.value + "</p>" +
            "<span>" + this.content + "</span><br/>" +
            "<video controls src=\"" + this.getURI().value + "\" />"

        element.appendChild(article);
    }
    
    static fromJSON(data: any) : VideoArticle {
        return new VideoArticle(data.title, new Author(data.author), data.content, new URI(data.uri));
    }
}

class ArticleList {
    constructor(public textArticles: Array<TextArticle>, public imageArticles: ImageArticle[], public videoArticles: Array<VideoArticle>) {}
    
    static fromJSON(data: any) : ArticleList {
        let textArticles: Array<TextArticle> = data.textArticles.map(val => TextArticle.fromJSON(val));
        let imageArticles: Array<ImageArticle> = data.imageArticles.map(val => ImageArticle.fromJSON(val));
        let videoArticles: Array<VideoArticle> = data.videoArticles.map(val => VideoArticle.fromJSON(val));
        
        return new ArticleList(textArticles, imageArticles, videoArticles);
    }
}
