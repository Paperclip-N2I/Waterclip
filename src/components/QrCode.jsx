const QRcode = () => {
    return (
        <div>
            <h1>QR code generator</h1>
                <div id="generator">
                    <form id="form_poke" action="">
                        <input id=" input_poke" list="datalist_poke" type="text" />
                        <datalist id="datalist_poke"></datalist>
                        <button type="submit">Go</button>
                    </form>
                    <form id="form_qr" action="">
                        <input type="text" />
                        <button type="submit">Go</button>
                    </form>
                    <div id="img-contener">
                        <canvas width="192" height="192" id="poke_canvas">rien a voir ici</canvas>
                        <img id="poke_img" width="192" height="192" src="" style={{ imageRendering: 'pixelated' }} alt="" />
                    </div>
                    <button id="downloadQR">Download</button>
                </div>
        </div>
    )
}

export default QRcode;