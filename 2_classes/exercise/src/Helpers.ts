function addTextArticle(title: string, author: string, content: string) : void {
      let article: HTMLElement = document.createElement("article")
        article.innerHTML = 
        "<h3>" + title + "</h3>" + 
        "<p>" + author + "</p>" +
        "<span>" + content + "</span>";
    
    document.getElementById("articles").appendChild(article);
}