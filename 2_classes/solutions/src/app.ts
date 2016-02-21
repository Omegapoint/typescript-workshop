ready(function() {
   let textArticle: TextArticle = new TextArticle("A brand new spanking text article", "Daniel", "This is a proper typed text article");
   addTextArticle(textArticle); 
   
   let imageArticle: ImageArticle = new ImageArticle("Nice looking image article", "John", "Cool logo for this company", new URI("img/omegapoint.png"));
   addImageArticle(imageArticle); 
 
   let videoArticle: VideoArticle = new VideoArticle("Look att this cool video", "Jane", "Copyright https://peach.blender.org/", new URI("video/video.mp4"));
   videoArticle.setURI(new URI("video/video.mp4")) // Why is this needed? Explain.  
   addVideoArticle(videoArticle);
   
   //addTextArticle(videoArticle); // This compiles, why? (duck typing) Exmplain.
   
   let articles: Array<Article> = [textArticle, imageArticle, videoArticle];
   console.log(articles);
});