var autoUserId = 1001;
var autoCourseId = 101;
//class creation for user registration.
var UserRegistration = /** @class */ (function () {
    function UserRegistration(name, age, phone) {
        this.userName = name;
        this.userAge = age;
        this.userPhoneNumber = phone;
        this.userId = "CD" + autoUserId.toString();
        autoUserId++;
    }
    return UserRegistration;
}());
//class creation for Enrollment.
var CourceRegistration = /** @class */ (function () {
    function CourceRegistration(courseName, requiredDate, userId) {
        this.courseName = courseName;
        this.requiredDays = requiredDate;
        this.userId = userId;
        this.courseId = "C" + autoCourseId.toString();
        autoCourseId++;
    }
    return CourceRegistration;
}());
//Array craetion.
var userDetails = new Array();
var courseEnrollment = new Array();
//default values.
userDetails.push(new UserRegistration("sathish", 21, 9876362158));
userDetails.push(new UserRegistration("sivaraman", 22, 9806332458));
userDetails.push(new UserRegistration("Rithu", 20, 8871362352));
courseEnrollment.push(new CourceRegistration("HTML", 3, "CD1001"));
courseEnrollment.push(new CourceRegistration("CSS", 5, "CD1002"));
courseEnrollment.push(new CourceRegistration("C#", 7, "CD1001"));
//function calling.
function registerPage() {
    var main = document.getElementById("mainPage");
    var registration = document.getElementById("registration");
    main.style.display = "none";
    registration.style.display = "block";
    document.getElementById("userName").value = "";
    document.getElementById("userAge").value = "";
    document.getElementById("phoneNumber").value = "";
}
function loginPage() {
    var main = document.getElementById("mainPage");
    var login = document.getElementById("login");
    main.style.display = "none";
    login.style.display = "block";
    document.getElementById("userId").value = "";
    var details = document.getElementById("existingDetails");
    for (var i = 0; i < userDetails.length; i++) {
        details.innerHTML += " User ID: ".concat(userDetails[i].userId, " || User Name: ").concat(userDetails[i].userName, " || User Age: ").concat(userDetails[i].userAge, " <br><br>");
    }
}
function registration() {
    var name = document.getElementById("userName").value;
    var age = document.getElementById("userAge").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    userDetails.push(new UserRegistration(name, +age, +phoneNumber));
    var index = userDetails.length - 1;
    var userId = userDetails[index].userId;
    alert("The registration process is completed and userId is ".concat(userId));
    if (alert) {
        var main = document.getElementById("mainPage");
        var registration_1 = document.getElementById("registration");
        main.style.display = "block";
        registration_1.style.display = "none";
    }
}
function login() {
    var studentId = document.getElementById("userId").value;
    var control = false;
    for (var i = 0; i < userDetails.length; i++) {
        if (userDetails[i].userId == studentId) {
            var login_1 = document.getElementById("login");
            var selection_1 = document.getElementById("selection");
            login_1.style.display = "none";
            selection_1.style.display = "block";
            control = true;
        }
    }
    if (control == false) {
        alert("Enter the Correct Student ID.");
        if (alert) {
            var main = document.getElementById("mainPage");
            var login_2 = document.getElementById("login");
            main.style.display = "block";
            login_2.style.display = "none";
        }
    }
}
function selection() {
    var login = document.getElementById("login");
    var selection = document.getElementById("selection");
    login.style.display = "none";
    selection.style.display = "block";
}
function availablecource() {
    var availableCource = document.getElementById("availableCource");
    var selection = document.getElementById("selection");
    selection.style.display = "none";
    availableCource.style.display = "block";
    document.getElementById("requiredDays").value = "";
}
function courseList() {
    var requiredates = document.getElementById("requiredDays").value;
    var id = document.getElementById("userId").value;
    var couseName = document.getElementById("courceName").value;
    courseEnrollment.push(new CourceRegistration(couseName, +requiredates, id));
    var index = courseEnrollment.length - 1;
    var courseId = courseEnrollment[index].courseId;
    alert("The registration process is completed and courseId is ".concat(courseId));
    if (alert) {
        var selection_2 = document.getElementById("selection");
        var availableCource = document.getElementById("availableCource");
        selection_2.style.display = "block";
        availableCource.style.display = "none";
    }
}
function enrolledcource() {
    var enrolledCource = document.getElementById("enrolledCource");
    var selection = document.getElementById("selection");
    selection.style.display = "none";
    enrolledCource.style.display = "block";
    var id = document.getElementById("userId").value;
    var courcenames = document.getElementById("courceList");
    var date = 0;
    var totalDays = document.getElementById("totalDays");
    for (var i = 0; i < courseEnrollment.length; i++) {
        if (id == courseEnrollment[i].userId) {
            courcenames.innerHTML += courseEnrollment[i].courseName;
            courcenames.innerHTML += " ";
            date += courseEnrollment[i].requiredDays;
        }
    }
    totalDays.innerHTML += date;
}
function back() {
    document.getElementById("courceList").innerHTML = "";
    document.getElementById("totalDays").innerHTML = "";
    var enrolledCource = document.getElementById("enrolledCource");
    var selection = document.getElementById("selection");
    selection.style.display = "block";
    enrolledCource.style.display = "none";
}
