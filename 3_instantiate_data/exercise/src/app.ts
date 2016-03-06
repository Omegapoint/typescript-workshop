// 1. Retrieve JSON from external source (try printing out the data in console)
// 2. Map the JSON to typed articles. Tip: Create a response/result data class
// 3. Show the articles using their render functionality

// --------------------------------------------------------------------------------------------------
// -                     REPLACE THE BELOW WITH YOUR JSON INSTANTIATION CODE                        -
// --------------------------------------------------------------------------------------------------
let textArticle: TextArticle = new TextArticle("A brand new spanking text article (NOT JSON)", new Author("Daniel"), "This is a proper typed text article");
let imageArticle: ImageArticle = new ImageArticle("Nice looking image article (NOT JSON)", new Author("John"), "Cool logo for this company", new URI("img/omegapoint.png"));
let videoArticle: VideoArticle = new VideoArticle("Look att this cool video  (NOT JSON)", new Author("Jane"), "Copyright https://peach.blender.org/", new URI("video/video.mp4"));

let articles: Array<Article> = [textArticle, imageArticle, videoArticle]; 

var articleContainer: HTMLElement = document.getElementById("articles");
articles.forEach(article => article.render(articleContainer));