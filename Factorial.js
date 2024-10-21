solicitarNumero();

// Función para solicitar el número
function solicitarNumero() {
    let numero;
    while (true) {
        numero = prompt("Ingrese un número: ");

        // Verificar si la entrada es un número
        if (isNaN(numero) || numero === "") {
            alert("Error: Debe ingresar un número válido."); // Mensaje de error
            continue; // Volver a solicitar el número
        }

        // Convertimos la entrada a número
        numero = Number(numero);

        // Calcular factorial
        const resultado = calcularFactorial(numero);
        console.log("El factorial de " + numero + " es " + resultado);
        mostrarResultado(numero, resultado);
        break; // Salir del bucle una vez que se obtiene un número válido
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

// Mostrar resultado en la página web
function mostrarResultado(numero, resultado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "El factorial de " + numero + " es " + resultado;
}
