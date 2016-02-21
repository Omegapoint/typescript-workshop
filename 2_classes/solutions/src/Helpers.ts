function ready(fn): void {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function addTextArticle(textArticle: TextArticle) : void {
      let article: HTMLElement = document.createElement("article")
        article.innerHTML = 
        "<h3>" + textArticle.title + "</h3>" + 
        "<p>" + textArticle.author + "</p>" +
        "<span>" + textArticle.content + "</span>";
    
    document.getElementById("articles").appendChild(article);
} 

function addImageArticle(imageArticle: ImageArticle) : void {
    let article: HTMLElement = document.createElement("article")
    article.innerHTML = 
        "<h3>" + imageArticle.title + "</h3>" + 
        "<p>" + imageArticle.author + "</p>" +
        "<span>" + imageArticle.content + "</span><br/>" + 
        "<img src=\"" + imageArticle.uri.value + "\">";
    
    document.getElementById("articles").appendChild(article);
}

function addVideoArticle(videoArticle: VideoArticle) : void {
    let article: HTMLElement = document.createElement("article")
    article.innerHTML = 
        "<h3>" + videoArticle.title + "</h3>" + 
        "<p>" + videoArticle.author + "</p>" +
        "<span>" + videoArticle.content + "</span><br/>" + 
        "<video controls src=\"" + videoArticle.getURI().value + "\" />"
    
    document.getElementById("articles").appendChild(article);
}