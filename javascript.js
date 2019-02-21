var btn = document.querySelector("button");
var price = document.querySelector("#price");
var currency = "USD"

function getPrice(){
    var XHR = new XMLHttpRequest();
        
    XHR.onreadystatechange = function (){
        if(XHR.readyState ==4 && XHR.status ==200) {
            var value = JSON.parse(XHR.responseText).bpi[currency].rate;
            price.innerHTML = value + " " + currency;
        }
    };
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
}

// listen for clicks
btn.addEventListener("click", getPrice);

window.onload = getPrice;