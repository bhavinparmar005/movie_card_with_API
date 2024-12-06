async function get() {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWY5ZDViYzc1YmRmMjkzNDg2OGQyMTIwZjQ4MjhjYiIsIm5iZiI6MTczMzQ3MzcyNy43NzQwMDAyLCJzdWIiOiI2NzUyYjViZjgwZTViOGYwYTc1NjJmOWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ysK4CwkvvEjYrkHQNmdq-d8LiEVPn-ZbVFRTtz9vQ6U'
      }
    };

    let response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    const data = await response.json();

    let final =data.results;


    final.forEach((val) => {
      console.log(val);
      
      let main = document.getElementById("main_container");

      let div = document.createElement('div');

      function getName(){
        let name = val.title || val.name || val.original_name || val.original_title || val.name ;
        return name
      }
 let title =getName();

 function getDate(){
  let date = val.release_date || val.first_air_date || val.release_date || val.first_air
  return date
 }
 let date =getDate();
      div.innerHTML = `
  <div class="container">
            <div class="movie_main_container">
                <div class="movie_poster_img">
                    <img src="https://image.tmdb.org/t/p/w500${val.poster_path}" alt="" class="movie_img" />
                </div>

                <div class="movie_ditails">
                    <h3>${title}</h3>
                    <div class="film_details">
                        <div class="movie_year">${val.media_type}</div>
                     
                        <div class="movie_type">${date}</div>
                         <div class="rating">${val.vote_average}</div>
                    </div>
                    <div class="movie_description">
                     ${val.overview}
                    </div>

                    <div class="movie_trailer">
                        <div class="icon_and_button_main">
                            <div class="icon">
                                <img src="./Asset/image/play-solid.svg" alt="" class="play_button" />
                            </div>
                            <div class="button">Watch Trailer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       


        `;

      main.appendChild(div);



    });
  } catch (error) {
    console.log(error);
  }
}

get();





