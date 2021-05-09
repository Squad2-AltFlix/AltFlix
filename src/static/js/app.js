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

    window.scrollTo(0,0)

    if (screen == "home") { getScreenHome() }
    else if (screen == "form") { getScreenForm() }
    else if (screen == "movie") { getScreenMovie() }
    else if (screen == "about") { getScreenAbout() }
}

async function moviePlay(call) {
    $('#content').children().attr("id", 'movie')
    
    const id = call.classList.value

    //const moviePlay = await videoSearch(id)
    //getScreenMovie(id, moviePlay)

    getScreenMovie()

    window.scrollTo(0,0)
}

function movieSearch(event) {
    $('#content').children().attr("id", 'home')
    getScreenHome()

    const search = $('input[name="search"]').val()

    if (event.key == "Enter" || event.type == 'click') {
        let result = ""

        for (let index = 0; index < movie.length; index++) {
            if (!(movie[index].title.search(search))) {
                result = search
                
                const videoId = movie[index].videoId
                const thumbnails = movie[index].thumbnails
                const title = movie[index].title

                getScreenHomeSearch(videoId, thumbnails, title)

                break
            }
        }

        if (result == "") {
            $('input[name="search"]').val('Filme Não Encontrado!').blur()
            setTimeout(() => {
                $('#search-field').val('').focus()
            }, 1400)
        }

    }
    
    else if (search == "") {
        $('#content').children().attr("id", 'home')
        getScreenHome()
    }
}

function homeSearch() {
    let autoSearch = new Array()

    for (let index = 0; index < movie.length; index++) {
        autoSearch.push(movie[index].title)
    }

    $('input[name="search"').autocomplete({
        source: autoSearch
    });
}