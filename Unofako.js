let html1 = "<table><tr>";  
let i = 0;


while (i <= 10) {
  html1 += `<td>${i}</td>`;  
  i++;
}


html1 += "</tr></table>";  
document.body.innerHTML = html1;