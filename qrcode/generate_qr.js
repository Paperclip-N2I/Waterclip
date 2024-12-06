// import QRious from "qrious";


async function generate_qr(url) {
    const code = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url;

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = code;
    image.crossOrigin = "anonymous";
    image.onload = function () {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2, image.width * 1, image.height);
    };
    image.onerror = function () {
        console.error("Erreur lors du chargement de l'image.");
    };
}


const form_qr = document.getElementById("form_qr");

console.log(form_qr);

form_qr.addEventListener("submit", async (e) => {
    e.preventDefault();
    let url = document.querySelector("input").value
    await generate_qr(url);
})

