function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}




let signaturePad = null;

window.addEventListener('load', async () => {


    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    var cancelButton = document.getElementById('clear');
    cancelButton.addEventListener('click', function (event) {
    signaturePad.clear();
    });
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let opcionCorresponda3 = document.getElementById('opcionCorresponda3').value;
        let dnipasajero3 = document.getElementById('dnipasajero3').value.toUpperCase();
        let nombrepasajero3 = document.getElementById('nombrepasajero3').value.toUpperCase();
        
        let opcionCorresponda2 = document.getElementById('opcionCorresponda2').value;
        let dnipasajero2 = document.getElementById('dnipasajero2').value.toUpperCase();
        let nombrepasajero2 = document.getElementById('nombrepasajero2').value.toUpperCase();
        
        let opcionCorresponda = document.getElementById('opcionCorresponda').value;
        let dnipasajero = document.getElementById('dnipasajero').value.toUpperCase();
        let nombrepasajero = document.getElementById('nombrepasajero').value.toUpperCase();
        let matri = document.getElementById('matri').value.toUpperCase();
        let licencia2 = document.getElementById('licencia2').value.toUpperCase();
        let dni2 = document.getElementById('dni2').value.toUpperCase();
        let nameap2 = document.getElementById('nameap2').value.toUpperCase();
        let licencia = document.getElementById('licencia').value.toUpperCase();
        let dni = document.getElementById('dni').value.toUpperCase();
        let nameap = document.getElementById('nameap').value.toUpperCase();
        let partida = document.getElementById('partida').value.toUpperCase();
        let time = document.getElementById('time').value.toUpperCase();
        let date = document.getElementById('date').value.toUpperCase();
        let destino = document.getElementById('destino').value.toUpperCase();
        let matricula = document.getElementById('matricula').value.toUpperCase();
        let grupo = document.querySelector('input[name="grupo"]:checked').value;
        if (grupo === 'on'){
            grupo = ''
        };
        
                generatePDF(opcionCorresponda3,dnipasajero3,nombrepasajero3,opcionCorresponda2,dnipasajero2,nombrepasajero2,opcionCorresponda,dnipasajero,nombrepasajero,matri,licencia2,dni2,nameap2,licencia,dni,nameap,partida,time,date,destino,grupo,matricula);

    })

});

async function generatePDF(opcionCorresponda3,dnipasajero3,nombrepasajero3,opcionCorresponda2,dnipasajero2,nombrepasajero2,opcionCorresponda,dnipasajero,nombrepasajero,matri,licencia2,dni2,nameap2,licencia,dni,nameap,partida,time,date,destino,matricula) {
    const image = await loadImage("img/RegistroB.jpg");
 

    const pdf = new jsPDF('p', 'pt', 'a4');
    
    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    //pdf.addImage(signatureImage, 'JPG', 20, 720, 200, 60);
    pdf.setFontSize(12);

    if(parseInt(opcionCorresponda3) == 1) {
        pdf.text("PASAJERO",400,490);
    }
    if (parseInt(opcionCorresponda3) == 2) {
        pdf.text("PACIENTE",400,490);
    } 
    if (parseInt(opcionCorresponda3) == 3) {
        pdf.text("MEDICO",400,490);
    }


    pdf.text(dnipasajero3, 268, 490);
    pdf.text(nombrepasajero3 ,80,490);


    if(parseInt(opcionCorresponda2) == 1) {
        pdf.text("PASAJERO",400,470);
    }
    if (parseInt(opcionCorresponda2) == 2) {
        pdf.text("PACIENTE",400,470);
    } 
    if (parseInt(opcionCorresponda2) == 3) {
        pdf.text("MEDICO",400,470);
    }


    pdf.text(dnipasajero2, 268, 470);
    pdf.text(nombrepasajero2 ,80,470);
    
    if(parseInt(opcionCorresponda) == 1) {
        pdf.text("PASAJERO",400,450);
    }
    if (parseInt(opcionCorresponda) == 2) {
        pdf.text("PACIENTE",400,450);
    } 
    if (parseInt(opcionCorresponda) == 3) {
        pdf.text("MEDICO",400,450);
    }


    pdf.text(dnipasajero, 268, 450);
    pdf.text(nombrepasajero,80,450);
    pdf.text(matri,160,195);
    pdf.text(matricula, 100, 200);

    pdf.setFontSize(12);
    pdf.text(licencia2, 400, 320);
    pdf.text(dni2, 268, 320);
    pdf.text(nameap2, 80,320);

    pdf.text(licencia, 400, 300);
    pdf.text(dni, 268, 300);
    pdf.text(nameap, 80,300);
    pdf.text(partida, 310, 225);
    pdf.text(time,450,195);
    pdf.text(date, 366, 195);
    pdf.text(destino, 259, 194);
    
 

    if (document.getElementById('grupo1').checked) {
        pdf.text(62,167,'__________');
        pdf.text(62,168,'__________');
        
    } 
    
    if (document.getElementById('grupo2').checked) {
        pdf.text(142,167,'________');
        pdf.text(142,168,'________');
    } 
    
    
    pdf.save("Registro Interno-"+".pdf");
}
