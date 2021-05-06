window.onload = () => {
    async function movieCall() {
        await videoAll()
        await getScreenHome()
    }
    movieCall()
}

function screenNew(call) {
    const screen = call.href.substring(call.href.indexOf("#") + 1)

    $('#content').children().attr("id", screen)

    window.scrollTo(0, 0)

    if (screen == "home") { getScreenHome() }
    else if (screen == "form") { getScreenForm() }
    else if (screen == "movie") { getScreenMovie() }
    else if (screen == "about") { getScreenAbout() }
}

async function moviePlay(call) {
    $('#content').children().attr("id", 'movie')

    const id = call.href.substring(call.href.indexOf("=") + 1)

    const moviePlay = await videoSearch(id)

    getScreenMovie()
    //getScreenMovie(id, moviePlay)

    window.scrollTo(0, 0)
}

function movieSearch(search, key) {
    if (key.key == "Enter") {
        let result = ""

        for (let index = 0; index < movie.length; index++) {
            if (!(movie[index].title.search(search.value))) {
                result = search.value

                const videoId = movie[index].videoId
                const thumbnails = movie[index].thumbnails
                const title = movie[index].title

                getScreenHomeSearch(videoId, thumbnails, title)

                break
            }
        }

        if (result == "") {
            $('#search-field').val('Filme Não Encontrado!').blur()
            setTimeout(() => {
                $('#search-field').val('').focus()
            }, 1400)
        }

    }
    
    else if (search.value == "") {
        $('#content').children().attr("id", 'home')
        getScreenHome()
    }
}

function homeSearch() {
    let autoSearch = new Array()

    for (let index = 0; index < movie.length; index++) {
        autoSearch.push(movie[index].title)
    }

    $("#search-field").autocomplete({
        source: autoSearch
    });
}

/*

    Style autocomplete
    ficha em horizontal: 4min genero ano
    nome na tela sobre errado
    background carrossel

*/