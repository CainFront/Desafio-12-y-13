/*=======================================
        INTRUCCION - NOTIFAKE

1) "¿Cual es tu cantante Favorito?": Una entrada que con detecta la entrada y lo cataloga:
    a) "Elton Tito" VERDE correcto.
    b) Cualquier otra opcion ROJO incorrecto.

2) Publicidad: Contiene un boton "Cerrar" y al presionarlo se retira la publicidad pero vuelve automaticamente a los 5seg.

3) Botones Cards/Noticias: El boton desplega un texto oculto y al mismo "modifica el texto del Boton", siendo ahora "Cerrar", al volver a subir vuelve a su posicion de origen.
=======================================*/

// Funcion Boton Noticias/Cards
let condicion = function (a) {
  if ($(a).text().length == 47 || $(a).text().length == 11) {
    $(a).text("Cerrar");
  } else $(a).text("Leer mas...");
};

// Inicio funcion READY
$(document).ready(function () {
  // Configuracion Input ("¿Cual es tu cantante Favorito?")
  $(".inputCantente").on("change", function (event) {
    let inputValue = event.target.value;

    if (
      inputValue.toLowerCase() == "Elton Tito" ||
      inputValue.toLowerCase() == "elton tito"
    ) {
      $(this).css("border-color", "green");
      $("#correcto").fadeIn("slow");
      $("#error").fadeOut();
    } else {
      $(this).css("border-color", "red");
      event.target.focus();
      $("#error").fadeIn("slow");
      $("#correcto").fadeOut();
    }
  });

  //Configuracion de Propaganda
  $("#publicidadBtn").click((e) => {
    $(".publicidad").slideUp(2000);
    $(".publicidad").delay(5000);
    $(".publicidad").fadeIn(2000);
  });

  //Configuracion Noticias (Botones)
  $("#noticiaBtn1").click((e) => {
    $(".noticiaOculta1").toggle("1000");
    condicion("#noticiaBtn1");
  });

  $("#noticiaBtn2").click((e) => {
    $(".noticiaOculta2").toggle("1000");
    condicion("#noticiaBtn2");
  });

  $("#noticiaBtn3").click((e) => {
    $(".noticiaOculta3").toggle("1000");
    condicion("#noticiaBtn3");
  });
});
