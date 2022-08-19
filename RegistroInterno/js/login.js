function validar() {
  document.querySelector("form").addEventListener("submit", (e) => {
    const formData = new FormData(e.target);
    usuario = formData.get("usuario");
    contraseña = formData.get("contraseña");
    e.preventDefault();

    if (usuario === "jefe" && contraseña === "1234") {
      alert("Ingreso Exitoso");

      window.location.href = "/RegistroInterno/";
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  });
}
