let movie = new Array()
async function videoAll() {
    let resp = await axios.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKeyYoutube + '&part=snippet,id&channelId=' + apiIdChannelYoutube + '&maxResults=50')

    resp.data.items.forEach((element, index) => {
        if (!(index == 0 && element.snippet.title == 'ALTFLIX Brasil')) {
            movie.push({
                'thumbnails': element.snippet.thumbnails.high.url,
                'title': element.snippet.title,
                'videoId': element.id.videoId,
                'description': element.snippet.description.replace('SINOPSE', ''),
            })
        }
    })
}

async function videoSearch(id) {
    let resp = await axios.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKeyYoutube + '&part=snippet&id=' + id).catch(err => console.log(err))

    let description = resp.data.items[0].snippet.description.split("\n")
    let moreInformations = description[3].split('|')
    let technicalTeam = resp.data.items[0].snippet.description.substring(resp.data.items[0].snippet.description.indexOf('EQUIPE TÉCNICA')).split('\n')

    let moviePlay = {
        'title': resp.data.items[0].snippet.title,
        'description': description[1],
        'duration': moreInformations[0].trim().split(' ')[1],
        'year': moreInformations[2].trim().split(' ')[1],
        'type': moreInformations[1].trim(),
        'technicalTeam': technicalTeam,
    }

    return moviePlay
}

function sendEmail(body) {
    Email.send({
       Host: emailHost,
       Username: emailUsername,
       Password: emailPassword,
       To: emailToFrom,
       From: emailToFrom,
       Subject: "Pedido de Filme!",
       Body: body,
    }).then(
       message => console.log(message)
    );
}