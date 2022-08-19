//base de datos pilotos
var nombreyapellido = [
  " ",
  "MATTHEWS JUAN",
  "CARLOS TURRAZA",
  "ANGEL LUIS PIOTTI",
  "ALFREDO PILILI",
  "JORGE BUSIGNANI",
];
let dni = [" ", "36869533", "13121548", "10853148", "16446318", "17771360"];

var txtdni = document.getElementById("dni");
var txtlicencia = document.getElementById("licencia");

var select = document.getElementById("nameap");
select.addEventListener("change", function () {
  for (let i = 0; i < nombreyapellido.length; i++) {
    if (select.value === nombreyapellido[i]) {
      txtdni.value = dni[i];
      txtlicencia.value = dni[i];
    }
    if (select.value === nombreyapellido[0]) {
      txtdni.value = " ";
      txtlicencia.value = " ";
    }
  }
});

// COOPILOT 2

var txtdni2 = document.getElementById("dni2");
var txtlicencia2 = document.getElementById("licencia2");

var select2 = document.getElementById("nameap2");
select2.addEventListener("change", function () {
  for (let i = 0; i < nombreyapellido.length; i++) {
    if (select2.value === nombreyapellido[i]) {
      txtdni2.value = dni[i];
      txtlicencia2.value = dni[i];
    }
    if (select2.value === nombreyapellido[0]) {
      txtdni2.value = " ";
      txtlicencia2.value = " ";
    }
  }
});

// Paciente base de datos
let nombreyapellido2 = [" ", "FLAVIA VILLA", "GUANCA JIMENA"];
let dnimedico = [" ", "31817233", "34071294"];
var txtdnimedi = document.getElementById("dnipasajero");
var select4 = document.getElementById("nombrepasajero");
select4.addEventListener("change", function () {
  for (let i = 0; i < nombreyapellido2.length; i++) {
    if (select4.value === nombreyapellido2[i]) {
      txtdnimedi.value = dnimedico[i];
    }
    if (select4.value === nombreyapellido2[0]) {
      txtdnimedi.value = " ";
    }
  }
});

// paciente 2

var txtdnimedi2 = document.getElementById("dnipasajero2");
var select5 = document.getElementById("nombrepasajero2");
select5.addEventListener("change", function () {
  for (let i = 0; i < nombreyapellido2.length; i++) {
    if (select5.value === nombreyapellido2[i]) {
      txtdnimedi2.value = dnimedico[i];
    }
    if (select5.value === nombreyapellido2[0]) {
      txtdnimedi2.value = " ";
    }
  }
});

// paciente 3
var txtdnimedi3 = document.getElementById("dnipasajero3");
var select6 = document.getElementById("nombrepasajero3");
select6.addEventListener("change", function () {
  for (let i = 0; i < nombreyapellido2.length; i++) {
    if (select6.value === nombreyapellido2[i]) {
      txtdnimedi3.value = dnimedico[i];
    }
    if (select6.value === nombreyapellido2[0]) {
      txtdnimedi3.value = " ";
    }
  }
});
