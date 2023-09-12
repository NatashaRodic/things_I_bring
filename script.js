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


const items = [
    {
        itemName: 'T-Shirt',
        weather: 'All',
        daysInUse: 2,
        essentials: false
    },
    {
        itemName: 'Jacket',
        weather: 'Cold',
        daysInUse: 365,
        essentials: false
    },
    {
        itemName: 'Passport',
        weather: 'All',
        daysInUse: 365,
        essentials: true
    },
    {
        itemName: 'Underwear',
        weather: 'All',
        daysInUse: 1,
        essentials: true
    },
    {
        itemName: 'Dress',
        weather: 'Hot',
        daysInUse: 3,
        essentials: false
    }
]

const itemsBring = [
];

const essentialsBring = [];



// const styleClothes = document.getElementById('style').value;


// majica , svaka  dana 
const howManyByDays = function(daysInUse, stay){
    if(stay<=daysInUse){return 1} else {return Math.trunc(stay/daysInUse)}
}



// ADDS ALL ESSENTIAL ITEMS FROM THE FIRST PARAMETER (JSON) TO THE SECOND PARAMETER (JSON - ITEMS THAT WE NEED TO BRING TO VACATION)
const bringEssentials = function (essentialsBring, items, days) {
    items.forEach(item => {
        if(item.essentials === true) {
            essentialsBring.push(
                {
                    itemName: item.itemName,
                    itemQuantity: howManyByDays(item.daysInUse, days)
                }

            )
        }
       
    });
    return essentialsBring;
}
// console.log(bringEssentials(itemsBring, items, 14));

// ADDS ALL NONESSENTIAL ITEMS FROM THE FIRST PARAMETER (JSON) TO THE SECOND PARAMETER (JSON - ITEMS THAT WE NEED TO BRING TO VACATION)
const bringWeatherItems = function (itemsBring, items, vrijeme, days) {

    items.forEach(item => {
        if(item.essentials === false && (item.weather === vrijeme || item.weather === 'All')) {
            itemsBring.push(
                {
                    itemName: item.itemName,
                    itemQuantity: howManyByDays(item.daysInUse, days)
                }
            )
        }
    
    }
    )
    
  
    //     if(style === 'Women') {
    //         itemsBring.push(
    //             {
    //                 itemName: 'Dress',
    //                 itemQuantity: howManyByDays(item.daysInUse, days)
    //             },
    //             {
    //                 itemName: 'Heals',
    //                 itemQuantity: howManyByDays(item.daysInUse, days)
    //             }
    //         )
    //     }
  
     return itemsBring
}

// console.log(bringWeatherItems(itemsBring, items, "Hot", 3));




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
document.getElementById("btnPackMe").addEventListener("click", displayDate);
function displayDate (event) {
    event.preventDefault();
    let location = document.getElementById('location').value;
    console.log(location);
    let days = document.getElementById('days').value;
    // let style = document.getElementById('style').value;
    // console.log(style)
    document.getElementById('packThis').innerText =
    `ESSENTIALS YOU HAVE TO BRING ON YOUR TRIP: ${(JSON.stringify(bringEssentials(essentialsBring, items, days)))}
    ITEMS TO BRING ON YOUR TRIP: ${(JSON.stringify(bringWeatherItems(itemsBring, items, printLocationWeather(location, locationWeather), days)))}`
   
    // `It will be ${printLocationWeather(location,locationWeather)} in ${location} you should pack: ${stvari(days)} T-shirts, ${stvari(days)} Dresses, ${stvari(days)} Pants, for your ${days} day trip `;
}


/// FUNCTION FOR MAJICE ///
const majice = function(days) {
    if (days > 2) {
        return (`${Math.floor(days/2)}`)
    }
    else if (days == 2) {
        return `${days}`
    }
    else {
        return `${days}`
    }
}

/////Dovrsiti ovu funkciju i vidjeti sto ne radi ////

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







// ESSENTIALS //

// const travelDocuments = ['ID or passport', 'Boarding passes or tickets', 'Hotel reservation confirmation', 'Any necessary visas or travel permits'];
// const money = ['Cash in the local currency', 'Credit/debit cards'];
// const toiletries = ['Toothbrush and toothpaste', 'Shampoo and conditioner', 'Body wash or soap', 'Hairbrush/comb', 'Razor and shaving cream', 'Moisturizer', 'Deodorant'];
// const electronics = ['Phone and charger', 'Power bank', 'Laptop/tablet (if necessary) and charger', 'Adapters and converters for different sockets/plugs'];
// const personalItems = ['Keys', 'Sunglasses', 'Wallet and organizer', 'Hand sanitizer'];

// const clothing = [
// {    underwear: 0,
//      socks: 0,
// 	 tshirtsTops: 0,
// 	 pantsShorts: 0,
// 	 jacket:0,
// 	 sleepwear: 0,
// 	 comfortableShoes: 0,
// 	 swimwear: 0,
//      hat: 0,
//      sunglasses: 0,
//      umbrella: 0,
// }
// ]


//// Bring Items Function ////

// bringItems (items, weatherType=printLocationWeather(location,locationWeather), days) 
// prints [{itemName:T-Shirt, bring:2}]





