const fnValidar04 = () => {
    let xPreferencia = document.getElementById("lstPreferencias").value;
    if(xPreferencia=="" || /^\s+$/.test(xPreferencia)) {
        alert("Falta seleccionar PREFERENCIA ...");
        return false;
    }

    let xMes = document.getElementById("lstMes").value;
    if(xMes=="") {
        alert("Falta seleccionar Validación actual...");
        return false;
    }

    /// Caso contrario ///
    return true;	
}