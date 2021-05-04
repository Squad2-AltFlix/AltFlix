window.onload = () => {
    async function movieCall() {
        await videoAll()
        await getScreenHome()
    }
    movieCall()

    $(() => {
        $("#search-field" ).autocomplete({
          source: [
            "Natação",
            "Futebol",
            "Vôlei",
            "Basquete"
          ]
        });
    });
}

function screenNew(call) {
    const screen = call.href.substring(call.href.indexOf("#") + 1)

    $('#content').children().attr("id", screen)

    window.scrollTo(0,0)

    if (screen == "home") { getScreenHome() }
    else if (screen == "form") { getScreenForm() }
    else if (screen == "movie") { getScreenMovie() }
    else if (screen == "about") { getScreenAbout() }
}

async function movieHome() {
    for (let index = 0; index < movie.length; index++) {
       $('.swiper-wrapper').prepend(`
            <div class="swiper-slide">
                <div class="movie-container">
                    <img src="${movie[index].thumbnails}"
                    alt="${movie[index].title}" class="movie-pic">
                </div>
                <span class="movie-title">
                    <p><a href="#movie=${movie[index].videoId}" onclick="moviePlay(this)">${movie[index].title} <i class="fas fa-caret-square-right"></i></a></p>                    
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
    }
}

async function moviePlay(call) {
    $('#content').children().attr("id", 'movie')

    window.scrollTo(0,0)

    getScreenMovie()

    const id = call.href.substring(call.href.indexOf("=") + 1)

    // let moviePlay = await videoSearch(id)

    // $('.wrapper').append(`<iframe src="https://www.youtube.com/embed/${id}" class="embed" title="Filme" allowfullscreen="true"></iframe>`)
    // $('.titulo').append(`${moviePlay.title}`)
    // $('.sinopse').append(`<h2>&nbsp;&nbsp;&nbsp;${moviePlay.description}</h2>`)
    // $('.dyg').append(`
    //     <h2 class="duration">${moviePlay.duration}</h2>
    //     <h2 class="year">${moviePlay.year}</h2>
    //     <h2 class="genre">${moviePlay.type}</h2>
    // `)

    // moviePlay.technicalTeam.forEach(element => {
    //     $('.producao').append(`<h2>${element}</h2>`)
    // });
}

function movieSearch(search, key) {
    if(key.key == "Enter") {
        let result = ""

        for (let index = 0; index < movie.length; index++) {
            if(!(movie[index].title.search(search.value))) { 
                result = search.value
                break
            }
        }

        if(result == "") {
            $('#search-field').val('Filme Não Encontrado!')
            setTimeout(() => {
                $('#search-field').val('')
            }, 1500)
        }

    }    
}

/*

    Style autocomplete, trocar array
    ficha em horizontal: 4min genero ano
    implementar forms screen

*/