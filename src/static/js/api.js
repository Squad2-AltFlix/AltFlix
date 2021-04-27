const apiKey = 'AIzaSyBcjhgbZUYfZ7vOgwuYZMJVrVLaCKniNd4'
const apiIdChannel = 'UCfhJhcy7L2FwCGiXfXLuq2w'


//access channel data
async function channel() {
    await axios.get('https://www.googleapis.com/youtube/v3/channels?key=' + apiKey + '&part=snippet&id=' + apiIdChannel)
    .then((response) => {
        console.log(response);
        console.log(response.data.items[0].snippet.title);
    })
    .catch((err) => {console.log(err);})
}


//access video data
async function videos() {
    await axios.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKey + '&channelId=' + apiIdChannel + '&part=snippet,id')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {console.log(err);})
}


//access search data
async function search() {
    await axios.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&part=snippet,id&channelId=' + apiIdChannel)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {console.log(err);})
}


channel()
//videos()
// search()