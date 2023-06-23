const fnValidar10 = () => {
    let xPreferencia = document.getElementById("lstPreferencias").value;
    if(xPreferencia=="" || /^\s+$/.test(xPreferencia)) {
        alert("Datos generales ...");
        return false;
    }

    let xMes = document.getElementById("lstMes").value;
    if(xMes=="") {
        alert("Elija mínimo dos opciones...");
        return false;
    }

    /// Caso contrario ///
    return true;	
}