const QRCode = require('qrcode');

const mensaje = `

LA UNICA CONEXIÓN QUE NECESITAS ES CON DIOS

"Acercaos a Dios, y él se acercará a vosotros."

Santiago 4:8`;

QRCode.toFile('qr-dios.png', mensaje, {
    errorCorrectionLevel: 'H',
    width: 1000,
    margin: 4
}, function (error) {
    if (error) {
        console.error('Ocurrió un error:', error);
    } else {
        console.log('¡QR creado correctamente!');
        console.log('Busca el archivo qr-dios.png en tu carpeta.');
    }
});


