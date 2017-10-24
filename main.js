

function scaleBomb() {
  console.log("ejecuta animación bomba");
  TweenLite.to("#lamp", 0.5, {scale:60, onComplete: cambiaVisibilidad});

};

function cambiaVisibilidad() {
    console.log("Este metodo se ejecuta en el conComplete de la animacion bomba ** mostrar texto de ayuda **");
 }


function resetPosition() {
  TweenLite.to("#lamp", 0.5, {scale:1});
  console.log("regresa la animación bomba");
}
