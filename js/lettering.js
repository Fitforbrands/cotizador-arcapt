function cotizar() {
  // Obtener el tipo de tipografía seleccionado
  var tipo = document.querySelector('input[name="tipo"]:checked').value;

  // Obtener el ancho y alto del tatuaje desde los inputs
  var ancho = parseInt(document.getElementById("ancho").value);
  var alto = parseInt(document.getElementById("alto").value);

  // Calcular el área en cm^2
  var area = ancho * alto;

  // Variables para almacenar el precio y el tipo de tipografía seleccionada
  var precio;
  var tipoTexto;

  // Determinar el precio según el tipo de tipografía y el área del tatuaje
  if (tipo === "no_serif") {
    if (area <= 10) {
      precio = 29900;
    } else if (area <= 15) {
      precio = 39900;
    } else {
      mostrarMensajeSuperior();
      return;
    }
    tipoTexto = "Tipografía no serif";
  } else if (tipo === "serif") {
    if (area <= 15) {
      precio = 39900;
    } else {
      mostrarMensajeSuperior();
      return;
    }
    tipoTexto = "Tipografía serif";
  }

  // Calcular el precio total
  var precioTotal = precio * area;

  // Mostrar el resultado en el div #resultado
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = `
          <p>Seleccionaste: ${tipoTexto}</p>
          <p>Área a cubrir: ${area} cm²</p>
          <h3>Total: $${precio}</h3>
  
      `;
}

function mostrarMensajeSuperior() {
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = `
          <p>La medida es superior a lo que se puede realizar con la tipografía seleccionada.</p>
      `;
}
