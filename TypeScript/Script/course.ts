let autoUserId = 1001;
let autoCourseId = 101;

//class creation for user registration.
class UserRegistration
{
    userId:string;
    userName:string;
    userAge:number;
    userPhoneNumber:number;
    constructor(name:string, age:number, phone:number)
    {
        this.userName = name;
        this.userAge = age;
        this.userPhoneNumber = phone;
        this.userId="CD"+autoUserId.toString();
        autoUserId++;
    }
}

//class creation for Enrollment.
class CourceRegistration
{
    courseId:string;
    courseName:string;
    requiredDays:number;
    userId:string;
    constructor(courseName:string, requiredDate:number, userId:string)
    {
        this.courseName = courseName;
        this.requiredDays = requiredDate;
        this.userId = userId;
        this.courseId = "C"+autoCourseId.toString();
        autoCourseId++;
    }
}

//Array craetion.
let userDetails: Array<UserRegistration> = new Array<UserRegistration>();

let courseEnrollment:Array<CourceRegistration> = new Array<CourceRegistration>();

//default values.
userDetails.push(new UserRegistration("sathish", 21, 9876362158));
userDetails.push(new UserRegistration("sivaraman", 22, 9806332458));
userDetails.push(new UserRegistration("Rithu", 20, 8871362352));

courseEnrollment.push(new CourceRegistration("HTML",3,"CD1001"));
courseEnrollment.push(new CourceRegistration("CSS",5,"CD1002"));
courseEnrollment.push(new CourceRegistration("C#",7,"CD1001"));

//function calling.
function registerPage()
{
    
   let main= document.getElementById("mainPage") as HTMLDivElement;
   let registration= document.getElementById("registration") as HTMLDivElement;
   main.style.display="none";
   registration.style.display = "block";
   (document.getElementById("userName") as HTMLInputElement).value ="";
   (document.getElementById("userAge") as HTMLInputElement).value ="";
   (document.getElementById("phoneNumber") as HTMLInputElement).value ="";
}
function loginPage()
{
    let main = document.getElementById("mainPage") as HTMLDivElement;
    let login = document.getElementById("login") as HTMLDivElement; 
    main.style.display="none";
    login.style.display="block";
    (document.getElementById("userId") as HTMLInputElement).value = "";
    let details = document.getElementById("existingDetails") as HTMLInputElement;
    for(let i = 0; i<userDetails.length;i++)
    {
        details.innerHTML +=` User ID: ${userDetails[i].userId} || User Name: ${userDetails[i].userName} || User Age: ${userDetails[i].userAge} <br><br>`;
    }
}
function registration()
{
    let name= (document.getElementById("userName") as HTMLInputElement).value;
    let age= (document.getElementById("userAge") as HTMLInputElement).value;
    let phoneNumber= (document.getElementById("phoneNumber") as HTMLInputElement).value;
    userDetails.push(new UserRegistration(name, +age, +phoneNumber));
    let index = userDetails.length-1;
    let userId = userDetails[index].userId;
    alert(`The registration process is completed and userId is ${userId}`);
    if(alert)
    {
        let main= document.getElementById("mainPage") as HTMLDivElement;
        let registration= document.getElementById("registration") as HTMLDivElement;
        main.style.display="block";
        registration.style.display = "none";
    }
}
function login()
{
    let studentId=(document.getElementById("userId") as HTMLInputElement).value ;
    let control:boolean = false;
    for(let i= 0; i < userDetails.length; i++)
    {
        if(userDetails[i].userId == studentId)
        {
            let login = document.getElementById("login") as HTMLDivElement;
            let selection = document.getElementById("selection") as HTMLDivElement; 
            login.style.display="none";
            selection.style.display="block";
            control = true;
        }
    }
    if(control == false)
    {
        alert("Enter the Correct Student ID.");
        if(alert)
        {
            let main= document.getElementById("mainPage") as HTMLDivElement;
            let login= document.getElementById("login") as HTMLDivElement;
            main.style.display="block";
            login.style.display = "none";
        }
    }
}
function selection()
{
    let login = document.getElementById("login") as HTMLDivElement;
    let selection = document.getElementById("selection") as HTMLDivElement; 
    login.style.display="none";
    selection.style.display="block";
}
function availablecource()
{
    let availableCource = document.getElementById("availableCource") as HTMLDivElement;
    let selection = document.getElementById("selection") as HTMLDivElement; 
    selection.style.display="none";
    availableCource.style.display="block";
    (document.getElementById("requiredDays") as HTMLInputElement).value = "";
}
function courseList()
{
    let requiredates =(document.getElementById("requiredDays") as HTMLInputElement).value;
    let id = (document.getElementById("userId") as HTMLInputElement). value;
    let couseName = (document.getElementById("courceName") as HTMLSelectElement).value;
    courseEnrollment.push(new CourceRegistration(couseName,+requiredates,id) );
    let index = courseEnrollment.length-1;
    let courseId = courseEnrollment[index].courseId;
    alert(`The registration process is completed and courseId is ${courseId}`);
    if(alert)
    {
        let selection= document.getElementById("selection") as HTMLDivElement;
        let availableCource= document.getElementById("availableCource") as HTMLDivElement;
        selection.style.display="block";
        availableCource.style.display = "none";
    }
}
function enrolledcource()
{
    let enrolledCource = document.getElementById("enrolledCource") as HTMLDivElement;
    let selection = document.getElementById("selection") as HTMLDivElement; 
    selection.style.display="none";
    enrolledCource.style.display="block";
    let id = (document.getElementById("userId") as HTMLInputElement). value;
    let courcenames = (document.getElementById("courceList") as HTMLLabelElement);
    let date:number = 0;
    let totalDays = (document.getElementById("totalDays") as HTMLLabelElement);
    for(let i= 0; i < courseEnrollment.length; i++)
    {
        if(id == courseEnrollment[i].userId)
        {
            courcenames.innerHTML += courseEnrollment[i].courseName;
            courcenames.innerHTML +=" ";
            date += courseEnrollment[i].requiredDays;
        }
    }
    totalDays.innerHTML += date;
}
function back()
{
    (document.getElementById("courceList") as HTMLLabelElement).innerHTML="";
    (document.getElementById("totalDays") as HTMLLabelElement).innerHTML ="";
    let enrolledCource = document.getElementById("enrolledCource") as HTMLDivElement;
    let selection = document.getElementById("selection") as HTMLDivElement; 
    selection.style.display="block";
    enrolledCource.style.display="none";
    
}