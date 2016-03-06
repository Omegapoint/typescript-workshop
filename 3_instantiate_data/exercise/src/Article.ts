interface Article {
    title: string; // Field of type string
    author: Author; // Field of type Author
    content: string; // Field of type string
    
    render(element: HTMLElement): void; // Method that accepts an HTMLElement variable and returns void
}

class TextArticle implements Article {
    constructor(public title: string, public author: string, public content: string) {    }  

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
    constructor(public title: string, public author: string, public content: string, public uri: URI) {    }   

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
    constructor(public title: string, public author: string, public content: string, public uri: URI) {    }   
    
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