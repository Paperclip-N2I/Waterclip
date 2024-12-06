let types = [
    { "id": 0, "name": "normal", "color": { "rgb": [255, 255, 255], "hex": "ffffff" } },
    { "id": 1, "name": "fighting", "color": { "rgb": [255, 192, 203], "hex": "ffc0cb" } },
    { "id": 2, "name": "flying", "color": { "rgb": [240, 255, 255], "hex": "f0ffff" } },
    { "id": 3, "name": "poison", "color": { "rgb": [255, 235, 238], "hex": "fff5ee" } },
    { "id": 4, "name": "ground", "color": { "rgb": [255, 235, 205], "hex": "fff5cd" } },
    { "id": 5, "name": "rock", "color": { "rgb": [255, 222, 173], "hex": "ffdea3" } },
    { "id": 6, "name": "bug", "color": { "rgb": [255, 255, 224], "hex": "ffffe0" } },
    { "id": 7, "name": "ghost", "color": { "rgb": [255, 245, 238], "hex": "fff5ee" } },
    { "id": 8, "name": "steel", "color": { "rgb": [255, 255, 255], "hex": "ffffff" } },
    { "id": 9, "name": "fire", "color": { "rgb": [255, 215, 0], "hex": "ffd700" } },
    { "id": 10, "name": "water", "color": { "rgb": [240, 248, 255], "hex": "f0f8ff" } },
    { "id": 11, "name": "grass", "color": { "rgb": [220, 255, 220], "hex": "dcdcdc" } },
    { "id": 12, "name": "electric", "color": { "rgb": [255, 255, 224], "hex": "ffffe0" } },
    { "id": 13, "name": "psychic", "color": { "rgb": [255, 192, 203], "hex": "ffc0cb" } },
    { "id": 14, "name": "ice", "color": { "rgb": [240, 248, 255], "hex": "f0f8ff" } },
    { "id": 15, "name": "dragon", "color": { "rgb": [240, 248, 255], "hex": "f0f8ff" } },
    { "id": 16, "name": "dark", "color": { "rgb": [240, 248, 255], "hex": "f0f8ff" } },
    { "id": 17, "name": "fairy", "color": { "rgb": [255, 228, 225], "hex": "ffe4e1" } },
    { "id": 18, "name": "stellar", "color": { "rgb": [255, 239, 213], "hex": "ffefd5" } },
    { "id": 19, "name": "unknown", "color": { "rgb": [255, 255, 255], "hex": "ffffff" } }
]

var name_type = 0;


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
            name_type = data.types[0].type.name;
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

    await drawPokemon(name, 2);

})

form_poke.querySelector("input").addEventListener("input", async (e) => {
    console.log(await searchPokemon(e.target.value));
    document.querySelector("p").textContent = "";
    let search = await searchPokemon(e.target.value);
    for (let index = 0; index < search.length; index++) {
        document.querySelector("p").textContent += search[index].name + "\n";
    }
})



async function drawPokemon(pokemon, size = 1) {
    const canvas = document.getElementById("poke_canvas");
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.src = await getPokemon(pokemon);
    image.crossOrigin = "anonymous";
    image.onload = function () {
        canvas.width = image.width * size;
        canvas.height = image.height * size;
        ctx.imageSmoothingEnabled = false;


        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const type = types.find(type => type.name === name_type);

        for (let i = 0; i < imageData.data.length; i += 4) {

            if (imageData.data[i + 3] > 0) {
                if (Math.random() > 0.5) {
                    imageData.data[i] = 0;
                    imageData.data[i + 1] = 0;
                    imageData.data[i + 2] = 0;
                }
                else {
                    imageData.data[i] = type.color.rgb[0];
                    imageData.data[i + 1] = type.color.rgb[1];
                    imageData.data[i + 2] = type.color.rgb[2];
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };
    image.onerror = function () {
        console.error("Erreur lors du chargement de l'image.");
    };
}


for (let index = 0; index < types.length; index++) {
    const square = document.createElement("div");
    square.style.backgroundColor = types[index].color.hex;
    square.style.width = "20px";
    square.style.height = "20px";
    document.getElementById("body").appendChild(square);
}