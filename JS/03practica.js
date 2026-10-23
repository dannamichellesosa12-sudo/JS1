
"use strict";

// Obtener los elementos del HTML
const formulario = document.getElementById("formSalario");
const resultado = document.getElementById("resultado");

// Formatear cantidades como pesos mexicanos
const formatoMoneda = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
});

// Función para mostrar cantidades en pesos
function pesos(cantidad) {
    return formatoMoneda.format(cantidad);
}

// Evento para calcular el salario
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const salarioBruto = Number(document.getElementById("salario").value);
    const porcentajeISR = Number(document.getElementById("isr").value);
    const porcentajeIMSS = Number(document.getElementById("imss").value);
    const otrasDeducciones = Number(
        document.getElementById("otrasDeducciones").value
    );

    // Validar los datos
    if (
        nombre === "" ||
        !Number.isFinite(salarioBruto) ||
        !Number.isFinite(porcentajeISR) ||
        !Number.isFinite(porcentajeIMSS) ||
        !Number.isFinite(otrasDeducciones) ||
        salarioBruto <= 0 ||
        porcentajeISR < 0 ||
        porcentajeISR > 100 ||
        porcentajeIMSS < 0 ||
        porcentajeIMSS > 100 ||
        otrasDeducciones < 0
    ) {
        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "Verifica el nombre, el salario y las deducciones."
        });

        return;
    }

    // Calcular las deducciones porcentuales
    const descuentoISR = salarioBruto * porcentajeISR / 100;
    const descuentoIMSS = salarioBruto * porcentajeIMSS / 100;

    // Calcular el total de deducciones
    const totalDeducciones =
        descuentoISR + descuentoIMSS + otrasDeducciones;

    // Calcular el salario neto
    const salarioNeto = salarioBruto - totalDeducciones;

    // Evitar resultados negativos
    if (salarioNeto < 0) {
        Swal.fire({
            icon: "warning",
            title: "Deducciones excesivas",
            text: "Las deducciones no pueden superar el salario bruto."
        });

        return;
    }

    // Mostrar los resultados en el HTML
    document.getElementById("resNombre").textContent = nombre;
    document.getElementById("resBruto").textContent =
        pesos(salarioBruto);
    document.getElementById("resISR").textContent =
        pesos(descuentoISR);
    document.getElementById("resIMSS").textContent =
        pesos(descuentoIMSS);
    document.getElementById("resOtras").textContent =
        pesos(otrasDeducciones);
    document.getElementById("resNeto").textContent =
        pesos(salarioNeto);

    // Hacer visibles los resultados
    resultado.hidden = false;

    // Mostrar mensaje de confirmación
    Swal.fire({
        icon: "success",
        title: "Cálculo realizado",
        text: "El salario neto es de " + pesos(salarioNeto),
        confirmButtonText: "Aceptar"
    });
});

// Evento para limpiar el formulario y ocultar los resultados
formulario.addEventListener("reset", function () {
    resultado.hidden = true;
});
