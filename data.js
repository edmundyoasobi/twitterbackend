class Tweet{
    constructor(id,userId,tweeetContext){
        this.id = id; 
        this.userId = userId;
        this.tweeetContext = tweeetContext
        this.tweetLikes =  0
        this.retweetUsersId = []
        this.comments = []
    }

    addComment(comment){
        this.comments.push(comment)
    }

    addRetweetUserId(userId){
        this.retweetUsersId.push(userId)
    }

    likeTweet(){
        this.tweetLikes+=1
        
    }

    dislikeTweet(){
        this.tweetLikes-=1
    }
}
const tweets = [
    {id : 1, userId: 1, tweetContent : "Welcome to my first post", tweetLikes : 0,retweetUsersId :[], comments : []},
    {id : 2 , userId :2 ,tweetContent : "BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑", tweetLikes : 0,retweetUsersId :[], comments : []},
    {id : 3 , userId :2 ,tweetContent : "BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑", tweetLikes : 0,retweetUsersId :[], comments : []},
    {id : 4 , userId :2 ,tweetContent : "BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑", tweetLikes : 0,retweetUsersId :[], comments : []},
    {id : 5 , userId :2 ,tweetContent : "BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑", tweetLikes : 0,retweetUsersId :[], comments : []},
    {id : 6 , userId :2 ,tweetContent : "BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑", tweetLikes : 0,retweetUsersId :[], comments : []},
    {id : 7 , userId :2 ,tweetContent : "BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑", tweetLikes : 0,retweetUsersId :[], comments : []},
    {id : 8 , userId :2 ,tweetContent : "BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑", tweetLikes : 0,retweetUsersId :[], comments : []},


];

module.exports = {tweets}