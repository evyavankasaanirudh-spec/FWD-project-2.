document.getElementById("iplForm").addEventListener("submit", function(e){

e.preventDefault();

let firstName = document.querySelector("[name='firstName']").value;
let lastName = document.querySelector("[name='lastName']").value;
let email = document.querySelector("[name='email']").value;
let phone = document.querySelector("[name='phone']").value;
let age = document.querySelector("[name='age']").value;

let role = "";
let roles = document.getElementsByName("role");

for(let i=0;i<roles.length;i++){
    if(roles[i].checked){
        role = roles[i].value;
    }
}

let teams = document.getElementsByName("team");
let favTeams = [];

for(let i=0;i<teams.length;i++){
    if(teams[i].checked){
        favTeams.push(teams[i].value);
    }
}

let player = document.querySelector("[name='player']").value;
let thoughts = document.querySelector("[name='thoughts']").value;
let interest = document.querySelector("[name='interest']").value;

let data = {
    firstName,
    lastName,
    email,
    phone,
    age,
    role,
    favTeams,
    player,
    thoughts,
    interest
};

localStorage.setItem("iplData", JSON.stringify(data));

alert(
"Form Submitted Successfully!\n\n"+
"Name: "+firstName+" "+lastName+
"\nEmail: "+email+
"\nPhone: "+phone+
"\nRole: "+role+
"\nTeams: "+favTeams.join(", ")+
"\nPlayer: "+player+
"\nInterest Level: "+interest
);

});