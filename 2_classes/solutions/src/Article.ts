interface Article {
    title: string; // Field of type string
    author: Author; // Field of type Author
    content: string; // Field of type string
    
    render(element: HTMLElement): void; // Method that accepts an HTMLElement variable and returns void
}

class TextArticle implements Article {
    title: string;
    author: Author;
    content: string;

    constructor(title: string, author: Author, content: string) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    render(element: HTMLElement) {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author.value + "</p>" +
            "<span>" + this.content + "</span>";

        element.appendChild(article);
    }
}

class ImageArticle implements Article {
    constructor(public title: string, public author: Author, public content: string, public uri: URI) {
        // Left empty, automatic mapping using public modifiier in construtor parameters         
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

class VideoArticle implements Article {
    title: string;
    author: Author;
    content: string;

    constructor(title: string, author: Author, content: string, private uri: URI) {
        this.title = title;
        this.author = author;
        this.content = content;
        
        // Semi-automatic mapping. The private variable URI is mapped in parameter list.
    }
    
    getURI(): URI {
        return this.uri;
    }

    render(element: HTMLElement) {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author.value + "</p>" +
            "<span>" + this.content + "</span><br/>" +
            "<video controls src=\"" + this.getURI().value + "\" />"

        element.appendChild(article);
    }
}