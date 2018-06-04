var about_Profile = /** @class */ (function () {
    // --------constructor---------------
    function about_Profile(workPlace, college, highSchool, friendsList, homeTown, mobilePhone, emailId, address, relationshipStatus, birthDate, IsProfilePrivate, currentCity, placesCheckedIn, socialLink, profilePic) {
        var _this = this;
        this.workPlace = workPlace;
        this.college = college;
        this.highSchool = highSchool;
        this.friendsList = friendsList;
        this.homeTown = homeTown;
        this.mobilePhone = mobilePhone;
        this.emailId = emailId;
        this.address = address;
        this.relationshipStatus = relationshipStatus;
        this.birthDate = birthDate;
        this.IsProfilePrivate = IsProfilePrivate;
        this.currentCity = currentCity;
        this.placesCheckedIn = placesCheckedIn;
        this.socialLink = socialLink;
        this.profilePic = profilePic;
        // -----------setters---------
        this.setCurrentCity = function () {
            console.log("setting the value of 'current place' based on the value of workplace");
            _this.currentCity = _this.workPlace;
        };
        this.setplacesCheckedIn = function (places) {
            console.log("---------------------------------------");
            console.log("Setting the value of optional property 'checked in places'............");
            _this.placesCheckedIn = places;
        };
        this.setsocialLink = function (link) {
            console.log("---------------------------------------");
            console.log("Setting the value of optional property 'Social Link'............");
            _this.socialLink = link;
        };
        this.setemailId = function (email) {
            console.log('---------------------------------------');
            console.log('setting a new value to emailID ..........');
            _this.emailId = email;
        };
        this.setProfilePic = function (url) {
            console.log('setting the profile picture ..............');
            _this.profilePic = url;
        };
        // ----------------Getters-----------
        this.getworkPlace = function () {
            return _this.workPlace;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getmobilePhone = function () {
            return _this.mobilePhone;
        };
        this.getemailId = function () {
            return _this.emailId;
        };
        this.getaddress = function () {
            return _this.address;
        };
        this.getbirthDate = function () {
            return _this.birthDate;
        };
        this.getsocialLink = function () {
            return _this.socialLink;
        };
        this.getPrivacy = function () {
            if (_this.IsProfilePrivate) {
                return "Yes";
            }
            else {
                return "No";
            }
        };
        this.getProfilePic = function () {
            console.log('getProfilePic() is to display the profile picture.');
            return _this.profilePic;
        };
        // ---method in the class----
        this.getOnlineFriends = function () {
            console.log('getOnlineFriends()  is to find the friends in online');
        };
        this.getHobbies = function () {
            console.log('getHobbies() is to display the hobbies of that person.');
        };
        this.workPlace = workPlace;
        this.college = college;
        this.highSchool = highSchool;
        this.friendsList = friendsList;
        this.homeTown = homeTown;
        this.mobilePhone = mobilePhone;
        this.emailId = emailId;
        this.address = address;
        this.relationshipStatus = relationshipStatus;
        this.birthDate = birthDate;
    }
    return about_Profile;
}());
// ------------------Object for the class---------------
var profile_soumya = new about_Profile("chennai", "KLU", "KPS", 200, "Vijayawada", 657868768, "abc@yahoo.in", "flat56/124,manas vihar", "single", "20/08/1994", false);
// ----- passing the values to DOM-----------------------
document.getElementById('workplace').innerHTML = profile_soumya.getworkPlace();
document.getElementById('college').innerHTML = profile_soumya.college;
document.getElementById('highSchool').innerHTML = profile_soumya.highSchool;
document.getElementById('friends').innerHTML = profile_soumya.friendsList.toString();
document.getElementById('homeTown').innerHTML = profile_soumya.homeTown;
document.getElementById('relation').innerHTML = profile_soumya.relationshipStatus;
profile_soumya.setCurrentCity();
document.getElementById('currentCity').innerHTML = profile_soumya.getCurrentCity();
document.getElementById('mobile').innerHTML = profile_soumya.getmobilePhone().toString();
document.getElementById('email').innerHTML = profile_soumya.getemailId();
document.getElementById('address').innerHTML = profile_soumya.getaddress();
document.getElementById('birthday').innerHTML = profile_soumya.getbirthDate();
document.getElementById('privacy').innerHTML = profile_soumya.getPrivacy();
profile_soumya.setsocialLink("www.instagram_abc.com");
document.getElementById('socialLink').innerHTML = profile_soumya.getsocialLink();
profile_soumya.setplacesCheckedIn(["chennai", "hyderabad", "shimla", "delhi", "pune"]);
console.log("Places checked in are:");
for (var i = 0; i < profile_soumya.placesCheckedIn.length; i++) {
    console.log(profile_soumya.placesCheckedIn[i]);
}
profile_soumya.setemailId("ksl@gmail.com");
console.log("The new email Id is : " + profile_soumya.getemailId());
console.log('--------------------------------');
profile_soumya.setProfilePic("user.png");
document.getElementById('pic').innerHTML = '<img src= ' + profile_soumya.getProfilePic() + '>';
profile_soumya.getOnlineFriends();
