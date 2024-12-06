


async function getListPokemon(limit, offset) {
    let list_pokemon = [];
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            list_pokemon = data.results;
        })
    return list_pokemon
}

async function searchPokemon(name) {
    let list_pokemon = await getListPokemon(2000, 0);

    return list_pokemon.filter(pokemon => pokemon.name.includes(name.toLowerCase()));
}

async function getPokemon(name) {
    let img_url;
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if (!response.ok) throw response.status;
            return response.json()
        })
        .then(data => {
            img_url = data.sprites.front_default;
        })
    return img_url
};


let form_poke = document.getElementById("form_poke");

form_poke.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = document.querySelector("input").value

    await getPokemon(name).then(img_url => {
        document.createElement("img");
        document.querySelector("img").src = img_url;
    })

    await drawPokemon(name);

})

form_poke.querySelector("input").addEventListener("input", async (e) => {
    console.log(await searchPokemon(e.target.value));
    document.querySelector("p").textContent = "";
    let search = await searchPokemon(e.target.value);
    for (let index = 0; index < search.length; index++) {
        document.querySelector("p").textContent += search[index].name + "\n";
    }
})



async function drawPokemon(pokemon) {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.src = await getPokemon(pokemon);
    image.crossOrigin = "anonymous";
    image.onload = function () {
        canvas.width = image.width * 4;
        canvas.height = image.height * 4;
        ctx.imageSmoothingEnabled = false;


        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < imageData.data.length; i += 4) {

            if (imageData.data[i + 3] > 0) {
                if (Math.random() > 0.5) {
                    imageData.data[i] = 0;
                    imageData.data[i + 1] = 0;
                    imageData.data[i + 2] = 0;
                }
                else {
                    imageData.data[i] = 255;
                    imageData.data[i + 1] = 255;
                    imageData.data[i + 2] = 255;
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };
    image.onerror = function () {
        console.error("Erreur lors du chargement de l'image.");
    };
}


