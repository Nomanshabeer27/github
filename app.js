// let taq = document.querySelector("h1");
// h1 = "on";
// taq.addEventListener("click", () => {
//   if (h1 == "on") {
//     taq.innerHTML = "goo";

//     h1 = 'off';
//   }else{
//     taq.innerHTML = 'HLO'
//     // taq.stye .color = 'red'
//     h1 = 'on'
//   }
// });

// var user ={
//   name : 'nomi',
//   fullName : 'nomishabeer',
//   id : 'nomi@123'
// }
// let user2 = {...user}
// user2.name ="ali"

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// array.forEach(function (val) {
//   console.log(((val + 2) * 2) / 3 );
// });

// let obj = {
//   name: "nomi",
//   id: "nomi@123",
//   city: "GK",
// };

// for (let name in obj) {
//   console.log(name, obj[name]);
// }

// let a = 18;
// do {
//   console.log('hlo');
//   a--;

// } while (a>14);

const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbtn = document.getElementById("qr-btn");

console.log(qrbtn,qrimg,qrinput);



qrbtn.addEventListener("click", () => {
  const inputValue = qrinput.value;
  console.log(inputValue);
  if (!inputValue) {
    alert("please a valid  URL");
    return;
  } else {
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.alt = `QR Code for ${inputValue}`
  }
});
