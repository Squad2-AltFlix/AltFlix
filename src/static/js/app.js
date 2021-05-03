window.onload = () => {
    getScreenHome()
}

screenNew = (call) => {
    const screen = call.href.substring(call.href.indexOf("#") + 1)

    $('#content').children().attr("id", screen)

    window.scrollTo(0,0)

    if (screen == "home") { getScreenHome() }
    else if (screen == "form") { getScreenForm() }
    else if (screen == "movie") { getScreenMovie() }
    else if (screen == "about") { getScreenAbout() }
}

async function movieHome() {
    const movie = await videoAll()
    
    movie.forEach((element, index) => {
        $('.swiper-wrapper').prepend(`
            <div class="swiper-slide">
                <div class="movie-container">
                    <img src="${element[0]}"
                    alt="${element[1]}" class="movie-pic">
                </div>
                <span class="movie-title">
                    <p><a href="#movie=${element[2]}" onclick="moviePlay(this)">${element[1]} <i class="fas fa-caret-square-right"></i></a></p>                    
                 </span>
            </div>
        `)

        if(index == movie.length - 1) {
            new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        }

    });
}

function movieSearch() {

}

async function moviePlay(call) {
    $('#content').children().attr("id", 'movie')

    window.scrollTo(0,0)

    getScreenMovie()

    const id = call.href.substring(call.href.indexOf("=") + 1)

    // let movie = await videoSearch(id)

    // $('.wrapper').append(`<iframe src="https://www.youtube.com/embed/${id}" class="embed" title="Filme" allowfullscreen="true"></iframe>`)
    // $('.titulo').append(`<h2>${movie.title}</h2>`)
    // $('.sinopse').append(`<h2>&nbsp;&nbsp;&nbsp;${movie.description}</h2>`)
    // $('.dyg').append(`
    //     <h2 class="duration">${movie.duration}</h2>
    //     <h2 class="year">${movie.year}</h2>
    //     <h2 class="genre">${movie.type}</h2>
    // `)

    // movie.technicalTeam.forEach(element => {
    //     $('.producao').append(`<h2>${element}</h2>`)
    // });
}