const apiKey = "n8O079pJe5mhKmNl91vQ4XhA8j8xQEko";
const imageId = "upmMxf6lesFwY";
const getGif = fetch(`https://api.giphy.com/v1/gifs/${imageId}?api_key=${apiKey}`);

getGif
    .then(response => response.json())
    .then(({data}) =>{
        let imageUrl = data.images.original.url;
        const $imgContainer = document.getElementById("gif-container");
        const $gif = document.createElement("img");
        $gif.src = imageUrl;
        $imgContainer.appendChild($gif)
    })
    .catch(console.log)

export default getGif;