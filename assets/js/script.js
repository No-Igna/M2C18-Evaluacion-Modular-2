$(document).ready(function () {

    function toggleSeccion(btnId, contenedorId, selectorInterno, duracion = 500) {
      $(btnId).click(function () {
          let elemento = $(contenedorId).find(selectorInterno);
          let boton = $(this);
          elemento.slideToggle(duracion, function() {
              let estaVisible = elemento.is(":visible");
              boton.text(estaVisible ? "Ocultar" : "Mostrar");
          });
      });

    }

    toggleSeccion("#toggleProyectos", "#proyectos", ".timeline");
    toggleSeccion("#toggleExperiencia", "#experiencia", ".timeline");

});