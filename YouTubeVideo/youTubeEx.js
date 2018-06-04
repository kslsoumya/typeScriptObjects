var youTubeVideo = /** @class */ (function () {
    // ----------------constructor ----------------
    function youTubeVideo(videoTitle, channelTitle, videoCategory, viewsCount, likesCount, dislikesCount, commentsCount, publishedDate, duration, isThereanyAd, subscriptionCount) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.channelTitle = channelTitle;
        this.videoCategory = videoCategory;
        this.viewsCount = viewsCount;
        this.likesCount = likesCount;
        this.dislikesCount = dislikesCount;
        this.commentsCount = commentsCount;
        this.publishedDate = publishedDate;
        this.duration = duration;
        this.isThereanyAd = isThereanyAd;
        this.subscriptionCount = subscriptionCount;
        // ------------------Getters and setters---------------
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getviewsCount = function () {
            return _this.viewsCount;
        };
        this.getlikesCount = function () {
            return _this.likesCount;
        };
        this.getdisLikesCount = function () {
            return _this.dislikesCount;
        };
        this.setviewsCount = function (count) {
            _this.viewsCount = count;
        };
        this.setlikesCount = function (count) {
            _this.likesCount = count;
        };
        this.setdislikesCount = function (count) {
            _this.dislikesCount = count;
        };
        this.setsubscriptionCount = function (count) {
            console.log("Optional  property subscription value is being set........");
            _this.subscriptionCount = count;
        };
        this.getsubscriptionCount = function () {
            return _this.subscriptionCount;
        };
        this.getIsThereAnyAd = function () {
            if (_this.isThereanyAd) {
                return "Yes";
            }
            else {
                return "No";
            }
        };
        // ----------methods in the class--------------
        this.getNextVideo = function () {
            return "the next video!!!!!";
        };
        this.getNextVideoTitle = function () {
            return "next video title!!!!!!";
        };
        this.videoTitle = videoTitle;
        this.channelTitle = channelTitle;
        this.videoCategory = videoCategory;
        this.viewsCount = viewsCount;
        this.likesCount = likesCount;
        this.dislikesCount = dislikesCount;
        this.commentsCount = commentsCount;
        this.duration = duration;
        this.isThereanyAd = isThereanyAd;
        this.publishedDate = publishedDate;
    }
    return youTubeVideo;
}());
// ------------Object for the class------------
var havanaVideo = new youTubeVideo("Camila Cabello - Havana (Audio) ft. Young Thug", "Entrepreneur Records", "Music", 1124108252, "6M", "259K", 294271, "3:38", "Aug 3,2017", true);
havanaVideo.setsubscriptionCount("7.7M");
console.log("The No of subscribers for the channel is -----" + havanaVideo.getsubscriptionCount());
// ----------setting the properties to html ----------
document.getElementById('title').innerHTML = havanaVideo.getvideoTitle();
document.getElementById('channel').innerHTML = havanaVideo.channelTitle;
document.getElementById('category').innerHTML = havanaVideo.videoCategory;
document.getElementById('Likes').innerHTML = havanaVideo.getlikesCount();
document.getElementById('views').innerHTML = havanaVideo.getviewsCount().toString();
document.getElementById('dislikes').innerHTML = havanaVideo.getdisLikesCount();
document.getElementById('comments').innerHTML = havanaVideo.commentsCount.toString();
document.getElementById('date').innerHTML = havanaVideo.publishedDate;
document.getElementById('duration').innerHTML = havanaVideo.duration;
document.getElementById('ad').innerHTML = havanaVideo.getIsThereAnyAd();
document.getElementById('sCount').innerHTML = havanaVideo.getsubscriptionCount();
//----------- displaying the properties in console------------
havanaVideo.setdislikesCount("100k");
console.log("-------------------------------------------");
console.log("Dislikes has been changed by the setter!!!");
console.log("Dislikes count is --->" + havanaVideo.getdisLikesCount());
console.log("-------------------------------------------");
havanaVideo.setlikesCount("10M");
console.log("Likes has been changed by the setter!!!");
console.log("Likes count is --->" + havanaVideo.getdisLikesCount());
console.log("-------------------------------------------");
console.log("getNextVideo function is to display ------->" + havanaVideo.getNextVideo());
console.log("getNextVideoTitle function is to get ------->" + havanaVideo.getNextVideoTitle());
console.log("-------------------------------------------");
console.log("getIsThereAnyAd() returns yes or no based on the boolean value of the property 'isThereanyAd'.");
