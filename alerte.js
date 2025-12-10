
// // var liczby = [1,2,3,4];
// // document.write ( liczby + "<br>")
// // var usuniety=liczby.pop();
// // document.write (liczby + "<br>")
// // document.write ( "element usuniety:"+ usuniety)

// // let liczby = [1,2,3,4]
// // document.write(liczby + "<br>")
// // let usuniety = liczby.shift()
// // document.write(liczby+"<br>")
// // document.write("element usuniety"+ usuniety)

// // var fruits = ["Banana","Orange","Apple","Mango"]
// // document.write(fruits + "<br>");
// // fruits.sort
// // document.write("lista po sortowanieu"+ fruits + "</br>")
// // fruits.reverse
// // document.write("lista po odworceniu"+fruits)

// // var kolejka=[];
// // kolejka.push('jeden');
// // kolejka.push('dwa')
// // kolejka.push('trzy')
// // document.write('teraz kolejka zawiera' + kolejka + '<br>')
// // var usuniety = kolejka.shift()
// // document.write('usunieto element ' + usuniety + '</br>' )
// // document.write('Teraz kolejka zawiera : ' + kolejka)

// // const txt ='Ala ma kota'
// // const txt = txt.slice(0,3);
// // console.log(txt2);// ala 
// // const txt3=txt.slice(4)
// // console.log(txt3) //ma kota 
// // const txt4= txt.slice(-4)
// // console.log(txt4) //kota



// // const str = 'the quick brown fox jumps over the lazy dog.';

// // // Podział tekstu na słowa
// // const words = str.split(' ');
// // console.log(words[3]); // "fox"

// // // Podział tekstu na pojedyncze znaki
// // const chars = str.split('');
// // console.log(chars[8]); // "k"

// // let liczba1=prompt("Podaj pierwsza liczbe");
// // let liczba2=prompt("podaj druga liczbe");
// // let operacja=prompt("wybierz rodzaj operacji");
// // switch(operacja){
// //   case "+":
// //     wynik=liczba1+liczba2;
// //     break;
// //   case"-":
// //   wynik=liczba1-liczba2;
// //   break;
// //   case"*":
// //   wynik=liczba1*liczba2;
// //   break;
// //   case"/":
// //   wynik=liczba1/liczba2break;
// // break;
// // }
// // document.write("wynik="wynik);

//parzyste liczby od 0 d0 20 
// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }
 
// let i=0
// while (i<=10) {
//   document.write (i++ + ',')
// }
// od 0 do 10 w liscie html 
// z tr jakies gowno 
// let html1 = "<table><tr>";  
// let i = 0;

// while (i <= 10) {
//   html1 += `<td>${i}</td>`;  
//   i++;
// }

// html1 += "</tr></table>";  
// document.body.innerHTML = html1;
// reverse liczby za pomoca for 
//  for(let i=10; i>0;--i){
//    console.log ("liczba:"+i)
//  }

// function subtraction (n1 , n2 ){
//     return ( n1-n2)
    
// let lista=document.querySelectorAll('a');
// console.log(lista)
// console.log('Pierwszy : '+lista[0].getAttribute('href'))
// console.log('Drugi'+lista[1]getAttribute('href'))


// let a =document.querySelector('a')
// a.setAttribute('href', 'https://kursjs.pl')


// <body>
// <h1> Tworzenie nowego albumu </h1>
// </body>
// <script>
//     // Tworzenie nowego elementu
//     let newElement = document.createElement("p");
//     //dodanie tekstu do nowego elementu
//     newElement.textContent = "To jest nowy paragraf utworzony"
//     //dodanie nowego elementu do ciała dokumentu
//     document.body.appendChild(newElement);
// </script>





// ZADANIE : Przy użyciu skryptu javascript utwórz akapit zawierający swoje imię
// const akapit = document.createElement('p');
// akapit.textContent = 'Kasia';
// document.body.appendChild(akapit);


// // let newElement = document.createElement("p")        // tworzenie nowego elementu
// // newElement.textContent = "to jest nowy paragraf"
// // document.body.appendChild(newElement)


// // let h2 = document.querySelector("h2"); // zmiana nagluwka czy tam elementu
// //  h2.innerHTML = "to jest to co zmienilem ";


// //  const naglowek = document.createElement("div");
// // naglowek.textContent = "to jest nagluwek";
// // document.body.appendChild(naglowek);


// Wstawianie nowego elementu przed innym :

 
// let akapit =document.createElement(p);
// let content-document.createTextNode("nowy akapit");
// akapit.appendchild(content);
// let position=document.querySelector('#div1')
// let before-document.querySelector('#p1')
// position.insertBefore( akapit, before);

// Usuwanie Elementów :

// let parent=document.querySelector('#div1')
// let child=document.querySelector('#p1');
// parent.removeChild( child);


// podmiana elementow html:
// let akapit-document.createElement("p");
// let contet-document.createTextNode("Nowy akapit");
// akapit.appendChild(content);
// let parent-document.querySelector("#div1");
// let child=document.querySelector("#p1");
// parent.replaceChild(akapit,child);
 
// dodanie stylu do elementu
// <style> p{ border:solid1px red; }</style>

// const box = document.querySelector('#box');
// const akapit = document.createElement('p')
// akapit.classList.add('p');
// akapit.innerHTML = "to jest akapit"
// box.appendChild(akapit);



// Formatowanie tabel

// 1.Obramowanie
// table,th,td{
// border: 1px solid red;
// border-collapse:collapse;
// }

// 2.rozmiar:

// <body>
//     <h1>Tworzenie nowego elementu HTML</h1>
//     </body>
//     <script>
//         // Tworzenie nowego elementu paragrafu
//         let newElement = document.createElement("p");
//         //Dodanie tekstu do nowego elementu
//         newElement.textContent = "To jest nowy paragraf";
//         // Dodanie nowego elementu do ciała dokumentu
//         document.body.appendChild(newElement);
//     </script>



// # OBSLUGA ZDARZEN


// Zdarzenie jest to wystapienie jakiejs zmiany przy przegladaniu strony interneteowej 



// przypisanie zmiany wlasciwosci do zdarzenia 
//  <h1 onclick="this.innterHTML='nowy tekst'" >Kliknij w tekst</h1>

// przypisanie funkcji oblsugi zdarzenia do elementu html
// <h1>onclick="changeText(this);"
//     kliknij w tekst
// </h1>
// <script>
//     function changeText(od){
//         id.innterHTML="nowy tekst"
//     }
// </script>
