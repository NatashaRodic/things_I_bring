const locations = ['Boston', 'New York', 'San Francisco'];

const locationWeather = [
    {
        location: 'Boston',
        weather: 'Cold'
    },
    {
        location: 'Dallas',
        weather: 'Hot'
    },
    
    {
        location: 'New York',
        weather: 'Cold'
    },
    {
        location: 'San Francisco',
        weather: 'Hot'
    }

]

// ESSENTIALS //

// const travelDocuments = ['Any necessary visas or travel permits'];
// const money = ['Cash in the local currency', 'Credit/debit cards'];
// const toiletries = ['Toothbrush and toothpaste', 'Shampoo and conditioner', 'Body wash or soap', 'Hairbrush/comb', 'Razor and shaving cream', 'Moisturizer', 'Deodorant'];
// const electronics = [];
// const personalItems = ['Wallet and organizer']

// const clothing = [
// {    
// 	 
// 	 
// 	 
// 	 
// 	 comfortableShoes: 0,
// 	 swimwear: 0,
//      hat: 0,
//      umbrella: 0,
// }
// ]


const items = [
    {
        itemName: 'ID or passport',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage:'images/passport.png'
    },
    {
        itemName: 'Boarding passes or tickets',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/boarding-passes.png'
    },
    {
        itemName: 'Hotel reservation confirmation',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/hotel-reservation-confirmation.png'
    },
    {
        itemName: 'Credit/debit cards',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/debit-cards.png'
    },
    {
        itemName: 'Phone and charger',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/phone.png'
    },
    {
        itemName: 'Power bank',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/power-bank.png'
    },
    {
        itemName: 'Laptop/tablet and charger',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/tablet.png'
    },
    

    {
        itemName: 'Keys',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage:'images/keys.png'
    },
    {
        itemName: 'Sunglasses',
        weather: 'Hot',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/sunglasses.png'
    },
    
    {
        itemName: 'Hand sanitizer',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/hand-sanitizer.png'
    },
   
    {
        itemName: 'T-shirts/Tops',
        weather: 'All',
        daysInUse: 2,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/tops.png'
    },
    {
        itemName: 'Pants/Shorts',
        weather: 'All',
        daysInUse: 3,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/pants.png'
    },
    {
        itemName: 'Sleepwear',
        weather: 'All',
        daysInUse: 365,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/sleepwear.png'
    },
    {
        itemName: 'Socks',
        weather: 'All',
        daysInUse: 1,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/socks.png'
    },
    {
        itemName: 'Jacket',
        weather: 'Cold',
        daysInUse: 365,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/jacket.png'
    },
    {
        itemName: 'Comfortable Shoes',
        weather: 'All',
        daysInUse: 365,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/shoes.png'
    },
    {
        itemName: 'Swimwear',
        weather: 'Hot',
        daysInUse: 365,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/swimwear.png'
    },
    {
        itemName: 'Hat',
        weather: 'Hot',
        daysInUse: 365,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/hat.png'
    },
    {
        itemName: 'Umbrella',
        weather: 'Cold',
        daysInUse: 365,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/umbrella.png'
    },
    
    {
        itemName: 'Underwear',
        weather: 'All',
        daysInUse: 1,
        essentials: false,
        style: 'unisex',
        itemImage: 'images/underwear.png'
    },
    {
        itemName: 'Dress',
        weather: 'Hot',
        daysInUse: 3,
        essentials: false,
        style: 'women',
        itemImage: 'images/dress.png'
    }
]

let itemsBring = [
];

let essentialsBring = [];



// majica 
const howManyByDays = function(daysInUse, stay){
    if(stay<=daysInUse){return 1} else {return Math.trunc(stay/daysInUse)}
}


let styleButton = () => {
    return document.querySelector('input[name="style"]:checked').value;
}


// ADDS ALL ESSENTIAL ITEMS FROM THE FIRST PARAMETER (JSON) TO THE SECOND PARAMETER (JSON - ITEMS THAT WE NEED TO BRING TO VACATION)
const bringEssentials = function (essentialsBring, items, days) {
    items.forEach(item => {
        if(item.essentials === true) {
            essentialsBring.push(
                {
                    itemName: item.itemName,
                    itemQuantity: howManyByDays(item.daysInUse, days),
                    itemImage: item.itemImage 
                }

            )
        }
       
    });
    return essentialsBring;
}


// ADDS ALL NONESSENTIAL ITEMS FROM THE FIRST PARAMETER (JSON) TO THE SECOND PARAMETER (JSON - ITEMS THAT WE NEED TO BRING TO VACATION)
const bringWeatherItems = function (itemsBring, items, vrijeme, days, style) {

    items.forEach(item => {
        if((item.essentials === false) && (item.weather === vrijeme || item.weather === 'All') && (item.style === style || item.style === 'unisex' )) 
        
        {
            itemsBring.push(
                {
                    itemName: item.itemName,
                    itemQuantity: howManyByDays(item.daysInUse, days),
                    itemImage: item.itemImage 
                }
            )
            
        }
    
    }
    )
     return itemsBring;
}



// FUNCTION FOR COLD/HOT WEATHER
const printLocationWeather = function (lokacija, locationWeather){
    let vrijeme =  locationWeather.find(locationItem => 
        locationItem.location === lokacija
     )
     //FIX FOR: if result does not exist, ex. location user types is KLM
    return vrijeme.weather;
}

// 
// FUNCTION TO GENERATE A RESPONSE //
function displayData (event) {
    event.preventDefault();
    let location = document.getElementById('location').value;
    console.log(location);
    let days = document.getElementById('days').value;
    // document.getElementById('packThis').innerText =
    // `ESSENTIALS YOU HAVE TO BRING ON YOUR TRIP: ${(JSON.stringify(bringEssentials(essentialsBring, items, days)))}
    // ITEMS TO BRING ON YOUR TRIP: ${(JSON.stringify(bringWeatherItems(itemsBring, items, printLocationWeather(location, locationWeather), days, styleButton())))}, also you chose ${styleButton()}`;

    let cardOutput ="";

    bringEssentials(essentialsBring,items,days).forEach(item=>{
        cardOutput+= `  <div class="item-card" >
        <div class="item" >
           <div class="imgAndText">  <img src="${item.itemImage}" alt="">
           <p>  ${item.itemName} ❗️</p></div>
            <div class="checkbox-container">
                <input type="checkbox" id="${item.itemName}">
                <label for="${item.itemName}"></label>
            </div>
        </div>
    </div>`
    })


    bringWeatherItems(itemsBring, items, printLocationWeather(location, locationWeather), days, styleButton()).forEach(item => {
        cardOutput+= `  <div class="item-card">
        <div class="item">
           <div class="imgAndText"> <img src="${item.itemImage}" alt="">
           <p>${item.itemName} x <strong>${item.itemQuantity} </strong></p></div>
            <div class="checkbox-container">
                <input type="checkbox" id="${item.itemName}">
                <label for="${item.itemName}"></label>
            </div>
        </div>
    </div>`

    })
    document.getElementById('bringItems').innerHTML = cardOutput;
    
    document.getElementById('bringItems').style.display="flex";

    essentialsBring = [];
    itemsBring = [];
    
    // `It will be ${printLocationWeather(location,locationWeather)} in ${location} you should pack: ${stvari(days)} T-shirts, ${stvari(days)} Dresses, ${stvari(days)} Pants, for your ${days} day trip `;
}



document.getElementById("btnPackMe").addEventListener("click", displayData);


//  FUNCTION FOR AUTOCOMPLETE //
function autocomplete(input, locations) {
    let currentFocus;
    input.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        for (i = 0; i < locations.length; i++) {
          if (locations[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + locations[i].substr(0, val.length) + "</strong>";
            b.innerHTML += locations[i].substr(val.length);

            b.innerHTML += "<input type='hidden' value='" + locations[i] + "'>";
                b.addEventListener("click", function(e) {
                input.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    input.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
            addActive(x);

        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);

        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });


    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != input) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
autocomplete(document.getElementById("location"), locations);
//  FUNCTION FOR AUTOCOMPLETE //




//// Bring Items Function ////

// bringItems (items, weatherType=printLocationWeather(location,locationWeather), days) 
// prints [{itemName:T-Shirt, bring:2}]

/// FUNCTION FOR MAJICE ///
// const majice = function(days) {
//     if (days > 2) {
//         return (`${Math.floor(days/2)}`)
//     }
//     else if (days == 2) {
//         return `${days}`
//     }
//     else {
//         return `${days}`
//     }
// }




