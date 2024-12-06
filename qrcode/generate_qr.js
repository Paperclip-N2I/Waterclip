async function generate_qr(url, bg = "255-255-255") {
    const code = "https://api.qrserver.com/v1/create-qr-code/?bgcolor=" + bg + "&size=150x150&data=" + url;


    const canvas = document.getElementById("poke_canvas");
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = code;
    image.crossOrigin = "anonymous";
    image.onload = function () {
        ctx.imageSmoothingEnabled = false;
        let pos = null;
        let mat = toMatrix(imageData, canvas.width);
        while (pos === null) {
            pos = canFit(image.width, mat);
            image.width -= 2;
            image.height -= 2;
        }
        ctx.drawImage(image, pos[0], pos[1], image.width, image.height);
    };
    image.onerror = function () {
        console.error("Erreur lors du chargement de l'image.");
    };
}


const form_qr = document.getElementById("form_qr");

console.log(form_qr);

form_qr.addEventListener("submit", async (e) => {
    e.preventDefault();
    let url = form_qr.querySelector("input").value
    const color = types.find(ty => ty.name === name_type).color;
    await generate_qr(url, `${color.rgb[0]}-${color.rgb[1]}-${color.rgb[2]}`);
})

document.getElementById("downloadQR").addEventListener("click", downloadQR);

async function downloadQR() {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('poke_canvas').toDataURL()
    link.click();
}

function toMatrix(imageData, size) {
    let mat = [];
    for (let i = 0; i < imageData.data.length; i += 4 * size) {
        let row = [];
        for (let j = 0; j < imageData.data.length; j += 4) {
            row.push([imageData.data[i + j], imageData.data[i + j + 1], imageData.data[i + j + 2], imageData.data[i + j + 3]]);
        }
        mat.push(row);
    }
    return mat;
}

function canFit(size, matrix) {
    for (let y = 0; y < matrix.length - size; y += 4) {
        for (let x = 0; x < matrix.length - size; x += 4) {
            let canFit = true;
            for (let i = 0; i < size && canFit; i += 4) {
                for (let j = 0; j < size && canFit; j += 4) {
                    if (matrix[y + i][x + j][3] !== 255) {
                        canFit = false;
                    }
                }
            }
            if (canFit) {
                return [x, y];
            }
        }
    }
    return null;
}