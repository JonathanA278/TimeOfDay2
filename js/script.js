// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();

console.log(hour);

if (hour < 12) {
    document.getElementById("greeting").innerText = "Good Morning";
    document.getElementById("myImg").src = "https://www.gifcen.com/wp-content/uploads/2023/01/good-morning-gif-16.gif" ;
console.log("It is the morning!")
} else if (hour < 17) {
    document.getElementById("greeting").innerText = "Good Afternoon";
    document.getElementById("myImg").src = "https://ugokawaii.com/wp-content/uploads/2023/03/good-afternoon.gif" ;
    console.log("It is the afternoon!")
}
else {
    document.getElementById("greeting").innerText = "Good Night";
    document.getElementById("myImg").src = "https://media4.giphy.com/media/XFpt52p2EnNEqlaLEt/200w.gif?cid=6c09b952cnnknvofh81e2athwvqv337xlet0xevdex0y5ze8&ep=v1_gifs_search&rid=200w.gif&ct=g" ;
    console.log("It is the night time!")
}


// let geetingElement = document.getElementById("greeting").innerText = "Good Night";
// console.log(greetingElement);