/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')

request.get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then((elem)=>{
    // console.log(elem.body.results);

// console.log(elem.body.results[0]);

 let arrOfLoc = elem.body.results[0]
//
// console.log(arrOfLoc.geometry.location);
// console.log(arrOfLoc.geometry.location.lat)
// console.log(arrOfLoc.geometry.location.lng)

 answerElement_apimashup_1.innerHTML =
` <div> <p>LAT ${arrOfLoc.geometry.location.lat}</p>
  <p> LNG ${arrOfLoc.geometry.location.lng}</p> </div>`

  })


//========================================================================
//  (2) What time does the sunset in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')

request.get('https://api.sunrise-sunset.org/json?lat=45.5016889&lng=-73.567256')
   .then((elem)=>{

     // console.log(elem.body.results.sunset);

     let arrOfSunset = elem.body.results.sunset

     answerElement_apimashup_2.innerHTML =

     `<span> <p>The time of the sunset in Montreal is </p> ${arrOfSunset} </span>`

   })





//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')
request.get('https://api.darksky.net/forecast/8bcc528d40b31b310015b0d1bb85e7a6/45.5016889,-73.567256')
   .then((elem)=>{

     // console.log(elem.body.daily.summary);
     let arrOfWeather = elem.body.daily.summary

 answerElement_apimashup_3.innerHTML = `<p> ${arrOfWeather}</p>`

   })




//
