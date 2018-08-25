
// ##### TV Maze
// https://www.tvmaze.com/ap

// 1. What is the average rating for the show Better Call Saul?

const answerElement_tvmaze_01 = document.getElementById('tvmaze-1')

request.get('https://api.tvmaze.com/search/shows?q=saul')
  .then((elem)=>{
      // console.log(elem.body[0].show.rating.average);

      let arrOfRating = elem.body[0].show.rating.average

      answerElement_tvmaze_01.innerHTML = arrOfRating

  })

// 2. When was the premiere date for the 9th season of Friends?

const answerElement_tvmaze_02 = document.getElementById('tvmaze-2')

request.get('https://api.tvmaze.com/shows/431/seasons')
  .then((elem)=>{
    console.log(elem.body[8].premiereDate)
      let arrOfSeason9 = elem.body[8].premiereDate

      answerElement_tvmaze_02.innerHTML = arrOfSeason9

  })

//
// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

const answerElement_tvmaze_03 = document.getElementById('tvmaze-3')

request.get('https://api.tvmaze.com/shows/73/cast')
 .then((elem)=>{

      answerElement_tvmaze_03.innerHTML = `<p>No existe este actor</p>`
 })
