function calcular(tipo, valor) {
    if (tipo === "acao") {
        // clear
        if (valor === "c") {
            document.getElementById("resultado").value = ""
        }
        // contatenação das contas
        if (valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === ".") {
            document.getElementById("resultado").value += valor
        }
        // captura das contas
        if (valor === "=") {
            var valorCampo = eval(document.getElementById("resultado").value)
            document.getElementById("resultado").value = valorCampo
        }
    } else if (tipo === "valor") {
        document.getElementById("resultado").value += valor
    }
}