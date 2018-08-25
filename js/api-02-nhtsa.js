
// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/
//
// 1. How many types of Chevrolet models are registered with the NHTSA?

const answerElement_NHTSA_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json')
  .then(function(serverRes){

    // console.log("_____", serverRes.body.Results.length)
    answerElement_NHTSA_1.innerHTML = serverRes.body.Results.length
  })

//
// 2. What are the vehicle types that Nissan has?
//
const answerElement_NHTSA_2 = document.getElementById('nhtsa-2')

 request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
    .then(function(serverRes){

    // console.log("=========",serverRes.body.Results);

     const arrOfTypes = serverRes.body.Results
     // console.log(arrOfTypes);

       arrOfTypes.forEach(function(res){
         // console.log("=====",res.VehicleTypeName);
         answerElement_NHTSA_2.innerHTML +=
        ` <ul><li>${res.VehicleTypeName}</li></ul>`
       })
})



// 3. What are the types of models that exist for Toyota trucks in 2017?
const answerElement_NHTSA_3 = document.getElementById('nhtsa-3')

  request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/toyota?format=json')
    .then(function(serverRes){
      // console.log("==========",serverRes.body.Results)

     const arrOfToyota = serverRes.body.Results
        arrOfToyota.forEach(function(res){
          answerElement_NHTSA_3.innerHTML +=
         ` <ul><li>${res.Model_Name}</li></ul>`


        })

    })
