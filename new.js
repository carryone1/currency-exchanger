const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// const apikey = "39081e6fe8858de98d69d1dc";
let select = document.querySelectorAll("select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
for (let a of select) {
    for (let b in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = b;
        newoption.value = b;
        a.append(newoption);
    }
    a.addEventListener("change", (evt) => {
        updateflag(evt.target);
    })
    
    
    
}

updateflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode]; //US JO 
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}
 btn.addEventListener("click",(evt)=>{
evt.preventDefault();
updateExchangeRate();
 });

//  const updateExchangeRate = async () => {
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if (amtVal === "" || amtVal < 1) {
//       amtVal = 1;
//       amount.value = "1";
//     }
//     // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     const URL ="https://v6.exchangerate-api.com/v6/39081e6fe8858de98d69d1dc/latest/USD";
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()];
  
//     let finalAmount = amtVal * rate;
//     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
//   };
const  updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input");
        let amtval = amount.value;
        
        if (amtval === "" || amtval < 1) {
          amtval = 1;
          amount.value = "1";
        }
  const URL = ` https://v6.exchangerate-api.com/v6/39081e6fe8858de98d69d1dc/latest/${fromCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.conversion_rates[toCurr.value];
  let finalamount =(amtval*rate).toFixed(2);
  console.log(finalamount);
  msg.innerText= `${amtval} ${fromCurr.value} =${finalamount} ${toCurr.value}`
  
};