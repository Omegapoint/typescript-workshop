module Blog {
    export class ArticleList {
        constructor(public textArticles: Array<TextArticle>, public imageArticles: ImageArticle[], public videoArticles: Array<VideoArticle>) { }

        static fromJSON(data: any): ArticleList {
            let textArticles: Array<TextArticle> = data.textArticles.map((val, idx) => <TextArticle>val); // This is called 'direct' case, useful when only primitive fields
            let imageArticles: Array<ImageArticle> = data.imageArticles.map((val, idx) => ImageArticle.fromJSON(val));
            let videoArticles: Array<VideoArticle> = data.videoArticles.map((val, idx) => VideoArticle.fromJSON(val));

            return new ArticleList(textArticles, imageArticles, videoArticles);
        }
    }
}