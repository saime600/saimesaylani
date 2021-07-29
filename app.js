var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}
];
var b=0;
for(var i=0;i<itemsArray.length; i++){
    var a=itemsArray[i].price * itemsArray[i].quantity ;
    b +=a;
    document.write("Total Price of "+itemsArray[i].name +" is " +a+"<br>")
}

document.write("Total Price of All Items are "+b);
Task 2/////////
var bioData={
    name:"junaid",
    email:"junaid92@gmail.com",
    password:"worldfree",
    age:"23",
    gender:"male",
    city:"karachi",
    country:"pakistan"
}
var checkAge="age" in bioData;
document.write("Check Age in object is "+ checkAge+"<br>");
var checkCountry="country" in bioData;
document.write("Check Country in object is "+ checkCountry+"<br>");
var checkfirstName="firstName" in bioData;
document.write("Check firstName in object is "+ checkfirstName+"<br>");
var checklastName="lastName" in bioData;
document.write("Check lastName in object is "+ checklastName+"<br>");
////////////// task 3/////////////////

function StdList(stdName,fatherName,roll,course){
    this.stdName=stdName;
    this.fatherName=fatherName;
    this.roll=roll;
    this.course=course;
}
var stdlist1=new StdList("hafiz","khursed","32","Data Base");
var stdlist2=new StdList("Shaid","noman","25","front developer");
var stdlist3=new StdList("Saqib","Ali","65","web & hybrid mobile");
console.log(stdlist1)
console.log(stdlist2)
console.log(stdlist3)


function reCord(){

    function Checkopulation(name,gender,address,education,profession){
        this.name=name;
        this.gender=gender;
        this.address=address;
        this.education=education;
        this.profession=profession;
    }
    var name1=document.record.name.value;
    var gender=document.record.gender.value;
    var address=document.record.address.value;
    var education=document.record.education.value;
    var profession=document.record.profession.value;
    var checkopulation1=new Checkopulation(name1,gender,address,education,profession)
    console.log(checkopulation1)

}
