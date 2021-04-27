const apiKey = 'AIzaSyBcjhgbZUYfZ7vOgwuYZMJVrVLaCKniNd4'
const apiIdChannel = 'fhJhcy7L2FwCGiXfXLuq2w'

//access channel data
async function channel() {
    await axios.get('https://www.googleapis.com/youtube/v3/channels?key=' + apiKey + '&part=snippet&id=' + apiIdChannel)
    .then((response) => {
        console.log(response);
        console.log(response.data.items[0].snippet.title);
    })
    .catch((err) => {console.log(err);})
}

channel();