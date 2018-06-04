
class youTubeVideo {


    // ----------------constructor ----------------
    constructor(private videoTitle: string,
        public channelTitle: string,
        public videoCategory: string,
        private viewsCount: number,
        private likesCount: string,
        private dislikesCount: string,
        public commentsCount: number,
        public publishedDate: string,
        public duration:string,
        private isThereanyAd :Boolean,
        public subscriptionCount ?:string,
    ) {
        this.videoTitle = videoTitle
        this.channelTitle = channelTitle
        this.videoCategory = videoCategory
        this.viewsCount = viewsCount
        this.likesCount = likesCount
        this.dislikesCount = dislikesCount
        this.commentsCount = commentsCount
        this.duration=duration
        this.isThereanyAd=isThereanyAd
        this.publishedDate = publishedDate
    }

    // ------------------Getters and setters---------------

    getvideoTitle = () => {
        return this.videoTitle
    }
    getviewsCount = () => {
        return this.viewsCount
    }
    getlikesCount = () => {
        return this.likesCount
    }
    getdisLikesCount = () => {
        return this.dislikesCount
    }
    setviewsCount = (count: number) => {
        this.viewsCount = count
    }
    setlikesCount = (count: string) => {
        this.likesCount = count
    }
    setdislikesCount = (count: string) => {
        this.dislikesCount = count
    }
    setsubscriptionCount=(count:string)=>{
        console.log("Optional  property subscription value is being set........")
        this.subscriptionCount=count
    }
    getsubscriptionCount=()=>{
        return this.subscriptionCount
    }
    getIsThereAnyAd=()=>{
        if(this.isThereanyAd){
            return "Yes"
        } else {
            return "No"
        }
    }

    // ----------methods in the class--------------

    getNextVideo = () => {
        return "the next video!!!!!"
    }
    getNextVideoTitle = () => {
        return "next video title!!!!!!"
    }
}

// ------------Object for the class------------

let havanaVideo = new youTubeVideo("Camila Cabello - Havana (Audio) ft. Young Thug", "Entrepreneur Records","Music",
    1124108252, "6M", "259K", 294271, "3:38","Aug 3,2017",true)

    havanaVideo.setsubscriptionCount("7.7M")
    console.log("The No of subscribers for the channel is -----"+havanaVideo.getsubscriptionCount())

// ----------setting the properties to html ----------

document.getElementById('title').innerHTML = havanaVideo.getvideoTitle()
document.getElementById('channel').innerHTML = havanaVideo.channelTitle
document.getElementById('category').innerHTML = havanaVideo.videoCategory
document.getElementById('Likes').innerHTML = havanaVideo.getlikesCount()
document.getElementById('views').innerHTML = havanaVideo.getviewsCount().toString()
document.getElementById('dislikes').innerHTML = havanaVideo.getdisLikesCount()
document.getElementById('comments').innerHTML = havanaVideo.commentsCount.toString()
document.getElementById('date').innerHTML = havanaVideo.publishedDate
document.getElementById('duration').innerHTML = havanaVideo.duration
document.getElementById('ad').innerHTML = havanaVideo.getIsThereAnyAd()
document.getElementById('sCount').innerHTML = havanaVideo.getsubscriptionCount()



//----------- displaying the properties in console------------


havanaVideo.setdislikesCount("100k")
console.log("-------------------------------------------")
console.log("Dislikes has been changed by the setter!!!")
console.log("Dislikes count is --->"+havanaVideo.getdisLikesCount())
console.log("-------------------------------------------")

havanaVideo.setlikesCount("10M")
console.log("Likes has been changed by the setter!!!")
console.log("Likes count is --->"+havanaVideo.getdisLikesCount())

console.log("-------------------------------------------")

console.log("getNextVideo function is to display ------->" + havanaVideo.getNextVideo())
console.log("getNextVideoTitle function is to get ------->" + havanaVideo.getNextVideoTitle())

console.log("-------------------------------------------")
console.log("getIsThereAnyAd() returns yes or no based on the boolean value of the property 'isThereanyAd'.")




