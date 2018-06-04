
class about_Profile {

// --------constructor---------------

constructor(
    private workPlace:string,
    public college:string,
    public highSchool:string,
    public friendsList :number,
    public homeTown:string,
    private mobilePhone:number,
    private emailId:string,
    private address:string,
    public relationshipStatus:string,
    private birthDate:string,
    public IsProfilePrivate:boolean,
    private currentCity?:string,
    public placesCheckedIn?:string[],
    private socialLink?:string
) {

this.workPlace=workPlace
this.college=college
this.highSchool=highSchool
this.friendsList=friendsList
this.homeTown=homeTown
this.mobilePhone=mobilePhone
this.emailId=emailId
this.address=address
this.relationshipStatus=relationshipStatus
this.birthDate=birthDate

}

// -----------setters---------

setCurrentCity=()=>{
    console.log("setting the value of 'current place' based on the value of workplace")
    this.currentCity= this.workPlace
}
setplacesCheckedIn=(places:string[])=>{
    console.log("---------------------------------------")
    console.log("Setting the value of optional property 'checked in places'............")
    this.placesCheckedIn = places
}
setsocialLink=(link:string)=>{
    console.log("---------------------------------------")
    console.log("Setting the value of optional property 'Social Link'............")
    this.socialLink=link
}
setemailId=(email:string)=>{
    console.log('---------------------------------------')
    console.log('setting a new value to emailID ..........')
    this.emailId=email
}

// ----------------Getters-----------
getworkPlace=()=>{
    return this.workPlace
}
getCurrentCity=()=>{
    return this.currentCity
}
getmobilePhone=()=>{
    return this.mobilePhone
}
getemailId=()=>{
    return this.emailId
}
getaddress=()=>{
    return this.address
}
getbirthDate=()=>{
    return this.birthDate
}
getsocialLink=()=>{
    return this.socialLink
}
getPrivacy=()=>{
    if(this.IsProfilePrivate) {
        return "Yes"
    } else {
        return "No"
    }
}

// ---method in the class----

getOnlineFriends=()=>{
    console.log('getOnlineFriends()  is to find the friends in online')
}
getProfilePicture=()=>{
    console.log('getProfilePicture() is to display the profile picture.')
}
getHobbies=()=>{
    console.log('getHobbies() is to display the hobbies of that person.')
}

}

// ------------------Object for the class---------------


let profile_soumya = new about_Profile("chennai","KLU","KPS",200,"Vijayawada",
657868768,"abc@yahoo.in","flat56/124,manas vihar","single","20/08/1994",false)

// ----- passing the values to DOM-----------------------

document.getElementById('workplace').innerHTML=profile_soumya.getworkPlace()
document.getElementById('college').innerHTML=profile_soumya.college
document.getElementById('highSchool').innerHTML=profile_soumya.highSchool
document.getElementById('friends').innerHTML=profile_soumya.friendsList.toString()
document.getElementById('homeTown').innerHTML=profile_soumya.homeTown
document.getElementById('relation').innerHTML=profile_soumya.relationshipStatus

profile_soumya.setCurrentCity()
document.getElementById('currentCity').innerHTML=profile_soumya.getCurrentCity()

document.getElementById('mobile').innerHTML=profile_soumya.getmobilePhone().toString()
document.getElementById('email').innerHTML=profile_soumya.getemailId()
document.getElementById('address').innerHTML=profile_soumya.getaddress()
document.getElementById('birthday').innerHTML=profile_soumya.getbirthDate()
document.getElementById('privacy').innerHTML=profile_soumya.getPrivacy()



profile_soumya.setsocialLink("www.instagram_abc.com")
document.getElementById('socialLink').innerHTML=profile_soumya.getsocialLink()


profile_soumya.setplacesCheckedIn(["chennai","hyderabad","shimla","delhi","pune"])
console.log("Places checked in are:")
for(let i=0;i<profile_soumya.placesCheckedIn.length;i++) {
    console.log(profile_soumya.placesCheckedIn[i])
}


profile_soumya.setemailId("ksl@gmail.com")
console.log("The new email Id is : "+profile_soumya.getemailId())
console.log('--------------------------------')

profile_soumya.getOnlineFriends()






