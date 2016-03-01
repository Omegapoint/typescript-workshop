// Create article instances
let textArticle: TextArticle = new TextArticle("A brand new spanking text article", new Author("Daniel"), "This is a proper typed text article");
let imageArticle: ImageArticle = new ImageArticle("Nice looking image article", new Author("John"), "Cool logo for this company", new URI("img/omegapoint.png"));
let videoArticle: VideoArticle = new VideoArticle("Look att this cool video", new Author("Jane"), "Copyright https://peach.blender.org/", new URI("video/video.mp4"));

// Create an array with each article. This can be done in two ways, Array<Article> or Article[]. Do they look different when compiled to Javascript?
let articles: Array<Article> = [textArticle, imageArticle, videoArticle]; 

// Fat arrow syntax (lambdas)
var articleContainer: HTMLElement = document.getElementById("articles");
articles.forEach(article => article.render(articleContainer));

/*=======================================================================================================*/
/*=======================================================================================================*/
function log(article: TextArticle) {
    console.log(article.content);
}

log(textArticle); // OK, we pass a text article?
log(imageArticle); // What?! What happend to our type safe function?!