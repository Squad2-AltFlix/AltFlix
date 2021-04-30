//NEBL4v7kTC4
//H1Mw11tzusY
movie = (id) => {
    let informations = videoSearch(id)
    console.log(informations);
    $('.wrapper').append(`<iframe src="https://www.youtube.com/embed/${id}" class="embed" title="Filme" allowfullscreen="true"></iframe>`)
    $('.titulo').append(`<h2>${info.data.items[0].snippet.title}</h2>`)
    $('.sinopse').append(`<h2>&nbsp;&nbsp;&nbsp;${info.data.items[0].snippet.description}</h2>`)
    $('.dyg').append(`
        <h2 class="duration">4min43s</h2>
        <h2 class="year">${data.items[0].snippet.publishedAt.substring(0, response.data.items[0].snippet.publishedAt.indexOf('-'))}</h2>
        <h2 class="genre">Terror</h2>
    `)
    $('.producao').append(`
        <h2>Direção: Daniel Pires</h2>
        <h2>Roteiro: Daniel Pires</h2> 
        <h2>Equipe técnica: Universo Lenda</h2>
    `)
}
// movie('H1Mw11tzusY')

//form 
$(".formulario").submit((event) => {
    event.preventDefault();
    sendEmail()
});