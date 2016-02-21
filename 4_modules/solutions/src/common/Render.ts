module Common {
    export function addTextArticle(textArticle: Blog.TextArticle): void {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + textArticle.title + "</h3>" +
            "<p>" + textArticle.author + "</p>" +
            "<span>" + textArticle.content + "</span>";

        document.getElementById("articles").appendChild(article);
    }

    export function addImageArticle(imageArticle: Blog.ImageArticle): void {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + imageArticle.title + "</h3>" +
            "<p>" + imageArticle.author + "</p>" +
            "<span>" + imageArticle.content + "</span><br/>" +
            "<img src=\"" + imageArticle.uri.value + "\">";

        document.getElementById("articles").appendChild(article);
    }

    export function addVideoArticle(videoArticle: Blog.VideoArticle): void {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + videoArticle.title + "</h3>" +
            "<p>" + videoArticle.author + "</p>" +
            "<span>" + videoArticle.content + "</span><br/>" +
            "<video controls src=\"" + videoArticle.getURI().value + "\" />"

        document.getElementById("articles").appendChild(article);
    }
}