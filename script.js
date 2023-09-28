
//Rewrite this part of the code, replace it with the API from weather app webstite

const locations = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

// const locationWeather = [
//     {
//         location: 'Boston',
//         weather: 'Cold'
//     },
//     {
//         location: 'Dallas',
//         weather: 'Hot'
//     },

//     {
//         location: 'New York',
//         weather: 'Cold'
//     },
//     {
//         location: 'San Francisco',
//         weather: 'Hot'
//     }

// ]

// ESSENTIALS //
// const travelDocuments = ['Any necessary visas or travel permits'];
// const money = ['Cash in the local currency', 'Credit/debit cards'];
// const toiletries = ['Toothbrush and toothpaste', 'Shampoo and conditioner', 'Body wash or soap', 'Hairbrush/comb', 'Razor and shaving cream', 'Moisturizer', 'Deodorant'];
// const electronics = [];
// const personalItems = ['Wallet and organizer']

// const clothing = [
// {    
// 	 swimwear: 0,
// }
// ]


const items = [
    {
        itemName: 'ID or passport',
        weather: 'All',
        daysInUse: 365,
        essentials: true,
        itemImage: 'images/passport.png'
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
        itemImage: 'images/keys.png'
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

let itemsBring = [];
let essentialsBring = [];
let cardOutput = "";





// FUNCTION FOR CALCUALATION DAYS IN USE FOR EACH ITEM (NONESSENTIAL AND ESSENTIAL)
const howManyByDays = function (daysInUse, stay) {
    if (stay <= daysInUse) { return 1 } else { return Math.trunc(stay / daysInUse) }
}


// FUNCTION FOR COLD/HOT WEATHER
const printLocationWeather = async function (lokacija) {
    // Return strings "Hot" or "Cold"
    console.log(lokacija);
    let temp = await getWeatherFromApi(lokacija);
    console.log("temperature:", temp)
    if (temp > 62) {
        return "Hot"
    } else return "Cold"
}

// ADDS ALL ESSENTIAL ITEMS FROM THE FIRST PARAMETER (JSON) TO THE SECOND PARAMETER (JSON - ITEMS THAT WE NEED TO BRING TO VACATION)
const bringEssentials = function (items, days) {
    items.forEach(item => {
        if (item.essentials === true) {
            essentialsBring.push(
                {
                    itemName: item.itemName,
                    itemQuantity: howManyByDays(item.daysInUse, days),
                    itemImage: item.itemImage
                }

            )
        }

    });
}


// ADDS ALL NONESSENTIAL ITEMS FROM THE FIRST PARAMETER (JSON) TO THE SECOND PARAMETER (JSON - ITEMS THAT WE NEED TO BRING TO VACATION)
let bringWeatherItems = async function (items, days, style, location) {
    let vrijeme = await printLocationWeather(location);
    items.forEach(item => {
        if ((item.essentials === false) && (item.weather === vrijeme || item.weather === 'All') && (item.style === style || item.style === 'unisex')) {
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

}


// FUNCTION TO GENERATE A RESPONSE //
function displayData(event) {
    event.preventDefault();
    let location = document.getElementById('location').value;
    let days = document.getElementById('days').value;
    let style = document.querySelector('input[name="style"]:checked').value;

    console.log({ location }, { days }, { style });


    // reset item arrays before you generate them again to avaid duplicates
    essentialsBring = [];
    itemsBring = [];
    cardOutput = "";

    bringEssentials(items, days);
    bringWeatherItems(items, days, style, location);


    setTimeout(() => {
        console.log("pokreni covjece");
        console.log(essentialsBring, itemsBring);
        generateCards();
        document.getElementById('bringItems').innerHTML = cardOutput;
    }, 500);

    //shor or hide Card boxes
    document.getElementById('bringItems').style.display = "flex";


}


let generateCards = function () {
    essentialsBring.forEach(item => {
        cardOutput += `  <div class="item-card" >
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
    itemsBring.forEach(item => {
        cardOutput += `  <div class="item-card">
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
}

// When submit button clicked, displayData function is being called
document.getElementById("btnPackMe").addEventListener("click", displayData);




//  FUNCTION FOR AUTOCOMPLETE //
function autocomplete(input, locations) {
    let currentFocus;
    input.addEventListener("input", function (e) {
        let a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
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
                b.addEventListener("click", function (e) {
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    input.addEventListener("keydown", function (e) {
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





//get weather
let getWeatherFromApi = async function (city) {
    const longlat = await getCoords(city);
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?daily=temperature_2m_max&temperature_unit=fahrenheit&timeformat=unixtime&forecast_days=1', {
        params: {
            latitude: longlat[0],
            longitude: longlat[1],
        }
    });
    const temperature = response.data.daily.temperature_2m_max[0];
    return temperature;
    //erorr this funciton is not returning anything 
    //return 63
}

//get coordinates
let getCoords = async function (city) {
    const response = await axios.get('https://geocode.maps.co/search?q=' + city);
    let long = response.data[0]['boundingbox'][0];
    let lat = response.data[0]['boundingbox'][2];
    return [long, lat];
}