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
	let observaciones = document.getElementById('observaciones').value.toUpperCase();
	let adestino = document.getElementById('adestino').value.toUpperCase();
        let adProcedencia = document.getElementById('adProcedencia').value.toUpperCase();
        let aclaracion = document.getElementById('aclaracion').value.toUpperCase();
        let emailContacto = document.getElementById('emailContacto').value;
        let telefonoContacto = document.getElementById('telefonoContacto').value;
        let dniLegajoLicencia = document.getElementById('dniLegajoLicencia').value;
        let tipoVuelo = document.querySelector('input[name = "tipoVuelo"]:checked').value;
        console.log(tipoVuelo);
        let horariofechaFinalizacion = document.getElementById('horariofechaFinalizacion').value.toUpperCase();
        let fechaFinalizacion = document.getElementById('fechaFinalizacion').value.toUpperCase();
        let horarioFechaInicio = document.getElementById('horarioFechaInicio').value.toUpperCase();
        let fechaInicio = document.getElementById('fechaInicio').value.toUpperCase();
        // Texto Medio
        let tipoAeronave = document.getElementById('tipoAeronave').value.toUpperCase();
        let matriculaExtension = document.getElementById('matriculaExtension').value.toUpperCase();
        let adAlternativa2 = document.getElementById('adAlternativa2').value.toUpperCase();
        let adAlternativa = document.getElementById('adAlternativa').value.toUpperCase();
        // Primeros dos
        let adDestino = document.getElementById('adDestino').value.toUpperCase();
        let presentadoPor = document.getElementById('presentadoPor').value.toUpperCase();
        let opcionCorresponda = document.getElementById('opcionCorresponda').value;
        // no va
        let hijos = document.querySelector('input[name="hijos"]:checked').value;
        let numeroHijos = document.getElementById('numeroHijos').value;
        let discapacidad = document.querySelector('input[name="discapacidad"]:checked').value;
        let discapacidadDesc = document.getElementById('discapacidad-desc').value;
        generatePDF(observaciones,adestino, adProcedencia, aclaracion, emailContacto, telefonoContacto, dniLegajoLicencia, tipoVuelo, horariofechaFinalizacion, fechaFinalizacion, horarioFechaInicio, fechaInicio, tipoAeronave, matriculaExtension, adAlternativa2, adAlternativa, adDestino, presentadoPor, opcionCorresponda, hijos, numeroHijos, discapacidad, discapacidadDesc);
    })

});

async function generatePDF(observaciones, adestino, adProcedencia, aclaracion, emailContacto, telefonoContacto, dniLegajoLicencia, tipoVuelo, horariofechaFinalizacion, fechaFinalizacion, horarioFechaInicio, fechaInicio, tipoAeronave, matriculaExtension, adAlternativa2, adAlternativa, adDestino, presentadoPor, opcionCorresponda, hijos, numeroHijos, discapacidad, discapacidadDesc) {
    const image = await loadImage("img/FormularioA.jpg");
    const signatureImage = signaturePad.toDataURL();
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 50, 635, 280, 60);
    // IF Para los SELECT SOLICITUD
    pdf.setFontSize(12);
    if(parseInt(opcionCorresponda) == 1) {
        pdf.text("X",80,239);
    } else {
        if (parseInt(opcionCorresponda) == 2) {
        pdf.text("X",80,263);
    } else {
        if (parseInt(opcionCorresponda) == 3) {
        pdf.text("X",80,288);
                        } 
           }
    }
    if(parseInt(opcionCorresponda) == 4){
        pdf.text("X",80,313);
    } else {
        if(parseInt(opcionCorresponda) == 5){
        pdf.text("X",80,337);
                }
            }
    // Siguientes Textos
    pdf.setFontSize(12);
    pdf.text(observaciones, 130, 625);
    pdf.text(adestino, 170, 485);
    pdf.setFontSize(12);
    pdf.text(adProcedencia, 182, 445);
    pdf.text(presentadoPor, 130, 380);
    pdf.text(adDestino, 130, 422);
    // Texto Medio 
    pdf.text(adAlternativa, 190, 465);
    pdf.text(adAlternativa2, 420, 465);
    pdf.text(matriculaExtension, 170, 507);
    pdf.text(tipoAeronave, 380, 507);
    //Fecha
    pdf.text(fechaInicio, 130, 529);
    pdf.text(horarioFechaInicio, 365, 529);
    pdf.text(fechaFinalizacion, 159, 549);
    pdf.text(horariofechaFinalizacion, 365, 549);
    //tipo de vuelo o motivo 
    if(parseInt(tipoVuelo) == 1){
        pdf.setFontSize(14);
        pdf.text("X", 102, 581);
    }
    if(parseInt(tipoVuelo) == 2){
        pdf.setFontSize(14);
        pdf.text("X", 170, 581);
    }
    if(parseInt(tipoVuelo) == 3){
        pdf.setFontSize(14);
        pdf.text("X", 220, 581);
    }
    if(parseInt(tipoVuelo) == 4){
        pdf.setFontSize(14);
        pdf.text("X", 263, 581);
    }
    if(parseInt(tipoVuelo) == 5){
        pdf.setFontSize(14);
        pdf.text("X", 310, 581);
    }
    pdf.setFontSize(12);
    pdf.text(dniLegajoLicencia, 159, 689);
    pdf.text(telefonoContacto, 160, 709);
    pdf.text(emailContacto, 138, 730);
    pdf.text(aclaracion, 366, 667)
;
    pdf.addPage();
    const image1 = await loadImage("img/FormularioA1.jpg");
    pdf.addImage(image1, 'PNG', 0, 0, 565, 792);

   


    /*/Switch 2 
    if (parseInt(switch1) === 1) {
       pdf.text("X", 533, 4);
    } else {
        pdf.circle(435,535,6,'FD');
        pdf.setFontSize(14);
        pdf.text(397,530,"X"); 
        pdf.text(478,535,"X");
    } */
  

/*
    pdf.setFillColor(0,0,0);


    if (parseInt(hijos) === 0) {
        pdf.circle(255, 374, 4, 'FD');
    } else {
        pdf.circle(190, 374, 4, 'FD');
        
    }

    if (parseInt(discapacidad) === 0) {
        pdf.circle(285, 718, 4, 'FD');
    } else {
        pdf.circle(240, 718, 4, 'FD');
  
    }
*/
//fecha
let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

    pdf.save("FormularioA-"+day+"/"+month+"/"+year+".pdf");

}
