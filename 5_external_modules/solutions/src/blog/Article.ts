import Author = require('./Author')

interface Article {
    title: string; // Field of type string
    author: Author; // Field of type Author
    content: string; // Field of type string
    
    render(element: HTMLElement): void; // Method that accepts an HTMLElement variable and returns void
}

export = Article;