function calcularPrecio() {
  let tipoDibujo = document.querySelector(
    'input[name="tipoDibujo"]:checked'
  ).value;
  let alto = parseInt(document.getElementById("alto").value);
  let ancho = parseInt(document.getElementById("ancho").value);

  let tamano = alto * ancho;

  const precios = {
    "Micro tattoo": {
      hasta: 1,
      precio: 22000,
    },
    "Lineal con relleno sin sombra": {
      hasta: 3,
      precio: 29900,
    },
    "Lineal sin relleno": {
      hasta: 115,
      precios: [
        { hasta: 10, precio: 29900 },
        { hasta: 30, precio: 45000 },
        { hasta: 40, precio: 60000 },
        { hasta: 50, precio: 66000 },
        { hasta: 100, precio: 77000 },
        { hasta: 115, precio: 135000 },
      ],
    },
    "Con Sombra": {
      hasta: 115,
      precios: [
        { hasta: 25, precio: 45000 },
        { hasta: 40, precio: 60000 },
        { hasta: 50, precio: 66000 },
        { hasta: 100, precio: 77000 },
        { hasta: 115, precio: 135000 },
      ],
    },
    "Dibujo y Letras": {
      hasta: 115,
      precios: [
        { hasta: 30, precio: 45000 },
        { hasta: 40, precio: 60000 },
        { hasta: 50, precio: 66000 },
        { hasta: 100, precio: 77000 },
        { hasta: 115, precio: 135000 },
      ],
    },
    Realismo: {
      hasta: 115,
      precios: [
        { hasta: 25, precio: 55000 },
        { hasta: 50, precio: 77000 },
        { hasta: 115, precio: 170000 },
      ],
    },
  };

  let precioEncontrado = null;

  if (precios[tipoDibujo]) {
    if (precios[tipoDibujo].hasOwnProperty("precio")) {
      if (tamano <= precios[tipoDibujo].hasta) {
        precioEncontrado = precios[tipoDibujo].precio;
      }
    } else if (precios[tipoDibujo].hasOwnProperty("precios")) {
      for (let i = 0; i < precios[tipoDibujo].precios.length; i++) {
        if (tamano <= precios[tipoDibujo].precios[i].hasta) {
          precioEncontrado = precios[tipoDibujo].precios[i].precio;
          break;
        }
      }
    }
  }

  if (precioEncontrado !== null) {
    document.getElementById(
      "resultado"
    ).innerHTML = `El precio para un tatuaje de ${tipoDibujo} de tamaño ${tamano} cm² es: $${precioEncontrado}`;
  } else {
    document.getElementById(
      "resultado"
    ).innerHTML = `No se encontró un precio para el tamaño especificado.`;
  }
}
