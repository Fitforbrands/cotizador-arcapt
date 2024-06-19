function calcularCotizacion() {
  // Obtener valores del formulario
  var zonaTatuar = document.getElementById("zonaTatuar").value;
  var tipoSesion = document.getElementById("tipoSesion").value;

  // Validar que se obtengan los valores correctamente
  console.log("Zona a tatuar:", zonaTatuar);
  console.log("Tipo de sesión:", tipoSesion);

  // Buscar en la tabla el costo por sesión correspondiente
  var cotizacion = buscarCotizacion(zonaTatuar, tipoSesion);

  // Mostrar resultado
  var resultadoElement = document.getElementById("resultadoCotizacion");
  resultadoElement.innerHTML = `
        <h3>Cotización</h3>
        <p>Zona a tatuar: ${cotizacion.zona}</p>
        <p>Tipo de sesión: ${cotizacion.tipo}</p>
        <p>Duración de cada sesión: ${cotizacion.duracion} Hs</p>
        <p>Cantidad de sesiones: ${cotizacion.cantidad}</p>
        
        <p>Costo por sesión: $${cotizacion.costo}</p>
    `;
}

function buscarCotizacion(zonaTatuar, tipoSesion) {
  // Tabla con los valores proporcionados
  var tablaCotizaciones = {
    "Todo el brazo-Chica": {
      zona: "Todo el brazo",
      tipo: "Chica",
      cantidad: 6,
      duracion: 3,
      costo: 115000,
    },
    "Todo el brazo-Grande": {
      zona: "Todo el brazo",
      tipo: "Grande",
      cantidad: 3,
      duracion: 6,
      costo: 150000,
    },
    "Medio Brazo-Chica": {
      zona: "Medio Brazo",
      tipo: "Chica",
      cantidad: 4,
      duracion: 3,
      costo: 115000,
    },
    "Medio Brazo-Grande": {
      zona: "Medio Brazo",
      tipo: "Grande",
      cantidad: 2,
      duracion: 6,
      costo: 150000,
    },
    "Pierna entera-Chica": {
      zona: "Pierna entera",
      tipo: "Chica",
      cantidad: 8,
      duracion: 3,
      costo: 115000,
    },
    "Pierna entera-Grande": {
      zona: "Pierna entera",
      tipo: "Grande",
      cantidad: 4,
      duracion: 6,
      costo: 150000,
    },
    "Media Pierna-Chica": {
      zona: "Media Pierna",
      tipo: "Chica",
      cantidad: 6,
      duracion: 3,
      costo: 115000,
    },
    "Media Pierna-Grande": {
      zona: "Media Pierna",
      tipo: "Grande",
      cantidad: 3,
      duracion: 6,
      costo: 150000,
    },
    "Cara ext brazo-Chica": {
      zona: "Cara ext brazo",
      tipo: "Chica",
      cantidad: 2,
      duracion: 3,
      costo: 115000,
    },
    "Cara ext brazo-Grande": {
      zona: "Cara ext brazo",
      tipo: "Grande",
      cantidad: 1,
      duracion: 6,
      costo: 150000,
    },
    "Brazalete-Grande": {
      zona: "Brazalete",
      tipo: "Grande",
      cantidad: 1,
      duracion: 6,
      costo: 150000,
    },
  };

  // Construir la clave basada en zonaTatuar y tipoSesion
  var clave = zonaTatuar + "-" + tipoSesion;

  // Retornar el objeto de cotización correspondiente
  return tablaCotizaciones[clave];
}
