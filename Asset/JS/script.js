async function get() {
  try {
    const response = await fetch("http://localhost:3000/Movie");
    const data = await response.json();

    // console.log(data[0].Title);
    // console.log(data.movies[1].Year);
    // console.log(data.movies[1].Poster);
    // console.log(data.movies[1].imdbID);
    data.forEach((val) => {
      let main = document.getElementById("main_container");
      
        let div = document.createElement('div');

      div.innerHTML = `
  <div class="container">
            <div class="movie_main_container">
                <div class="movie_poster_img">
                    <img src="${val.img}" alt="" class="movie_img" />
                </div>

                <div class="movie_ditails">
                    <h3>${val.Title}</h3>
                    <div class="film_details">
                        <div class="movie_year">${val.Year}</div>
                     
                        <div class="movie_type">${val.Genre}</div>
                         <div class="rating">${val.Rating}</div>
                    </div>
                    <div class="movie_description">
                        ${val.Description}
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
