// let placki = document.getElementById("placki")

// placki.addEventListener("click", () => {
//     placki.textContent = "cwel"
// })
document.querySelector('#myButton').onclick=displayDate;
function displayDate(){
document.querySelector('#demo').innerHTML=Date()
}