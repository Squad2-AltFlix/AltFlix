async function moviePlay(id) {
    let movie = await videoSearch(id)

    $('.wrapper').append(`<iframe src="https://www.youtube.com/embed/${id}" class="embed" title="Filme" allowfullscreen="true"></iframe>`)
    $('.titulo').append(`<h2>${movie.title}</h2>`)
    $('.sinopse').append(`<h2>&nbsp;&nbsp;&nbsp;${movie.description}</h2>`)
    $('.dyg').append(`
        <h2 class="duration">${movie.duration}</h2>
        <h2 class="year">${movie.year}</h2>
        <h2 class="genre">${movie.type}</h2>
    `)

    movie.technicalTeam.forEach(element => {
        $('.producao').append(`<h2>${element}</h2>`)
    });
}
// moviePlay('ke8X3SE0XE8')

async function movie() {
    let movie = await videoAll()
    console.log(movie);
}
movie()

//form 
$(".formulario").submit((event) => {
    event.preventDefault();
    sendEmail()
});