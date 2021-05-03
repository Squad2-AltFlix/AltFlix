const apiKeyYoutube = 'AIzaSyBcjhgbZUYfZ7vOgwuYZMJVrVLaCKniNd4'
const apiIdChannelYoutube = 'UCfhJhcy7L2FwCGiXfXLuq2w'

async function videoAll() {
    let resp = await axios.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKeyYoutube + '&part=snippet,id&channelId=' + apiIdChannelYoutube)
    
    // console.log(resp);

    let movie = []

    // element.snippet.thumbnails.default.url,
    // element.snippet.thumbnails.high.url,
    // element.snippet.thumbnails.medium.url,

    resp.data.items.forEach((element, index) => {
        if (!(index == 0 && element.snippet.title == 'ALTFLIX Brasil')) {           
            movie.push([
                element.snippet.thumbnails.high.url,
                element.snippet.title,
                element.id.videoId,                
            ])
        }
    });

    return movie
}
// videoAll()

async function videoSearch(id) {
    let resp = await axios.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKeyYoutube + '&part=snippet&id=' + id)

    let description = resp.data.items[0].snippet.description.split("\n")
    let moreInformations = description[3].split('|')
    let technicalTeam = resp.data.items[0].snippet.description.substring(resp.data.items[0].snippet.description.indexOf('EQUIPE TÉCNICA')).split('\n')

    let movie = {
        'title': resp.data.items[0].snippet.title,
        'description': description[1],
        'duration': moreInformations[0].trim().split(' ')[1],
        'year': moreInformations[2].trim().split(' ')[1],
        'type': moreInformations[1].trim(),
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