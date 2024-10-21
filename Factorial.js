solicitarNumero();

//Funcion para solicitar el número
function solicitarNumero() {
    let numero;
    while (true) {
        numero = prompt("Ingrese un número: ");
        // Convertimos la entrada número
        numero = Number(numero);
        // Calcular factorial
        const resultado = calcularFactorial(numero);
        console.log("El factorial de " + numero + " es " + resultado);
        mostrarResultado(numero, resultado);
        break;


    }
}
// Calcular factorial
function calcularFactorial(numero) {
    if (numero < 0) {
        console.log("El número debe ser positivo");
        return;
    }
    if (numero === 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;


}

//Mostrar resultado en la página web
function mostrarResultado(numero, resultado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "El factorial de " + numero + " es " + resultado;
}