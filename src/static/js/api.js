const apiKeyYoutube = 'AIzaSyBcjhgbZUYfZ7vOgwuYZMJVrVLaCKniNd4'
const apiIdChannelYoutube = 'UCfhJhcy7L2FwCGiXfXLuq2w'

async function videoAll() {
    await axios.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKeyYoutube + '&part=snippet,id&channelId=' + apiIdChannelYoutube)
        .then((response) => {
            $.each(response.data.items, (index, data) => {
                if (!(index == 0 && data.snippet.title == 'ALTFLIX Brasil')) {
                    console.log(data); //all data
                    console.log(data.snippet.title);
                    console.log(data.snippet.thumbnails.high.url);
                    console.log(data.id.videoId); //src in youtube https://www.youtube.com/embed/
                }
            });
        })
        .catch((err) => { console.log(err); })
}
// videoAll()

async function videoSearch(id) {
    let movie = await axios.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKeyYoutube + '&part=snippet&id=' + id)

    let description = movie.data.items[0].snippet.description.split("\n")
    let moreInformations = description[3].split('|')
    let technicalTeam = movie.data.items[0].snippet.description.substring(movie.data.items[0].snippet.description.indexOf('EQUIPE TÉCNICA')).split('\n')

    movie = {
        'title': movie.data.items[0].snippet.title,
        'description': description[1],
        'duration': moreInformations[0].trim(),
        'type': moreInformations[1].trim(),
        'year': moreInformations[2].trim(),
        'technicalTeam': technicalTeam,
    }
    
    return movie
}


async function sendEmail() {
    await axios.post('https://api.staticforms.xyz/submit' + $(".formulario").serialize())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => { console.log(err); })
}