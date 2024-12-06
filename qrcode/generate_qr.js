// import QRious from "qrious";

async function generate_qr(url, bg = "255-255-255") {
    const code = "https://api.qrserver.com/v1/create-qr-code/?bgcolor=" + bg + "&size=150x150&data=" + url;


    const canvas = document.getElementById("poke_canvas");
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = code;
    image.crossOrigin = "anonymous";
    image.onload = function () {
        ctx.imageSmoothingEnabled = false;
        image.width = canvas.width / 3;
        image.height = canvas.height / 3;
        let pos_x = canvas.width / 2 - image.width / 2;
        let pos_y = canvas.height / 2 - image.height / 2;
        ctx.drawImage(image, pos_x, pos_y, image.width, image.height);
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
