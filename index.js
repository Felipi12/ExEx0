class Fruta {

  constructor(angulo, raio, elemento){
    this.angulo= angulo;
    this.raio= raio;
    this.elemento= elemento;
    this.elemento.style.width= "4em"
    this.elemento.style.height= "4em"

    this.elemento.addEventListener("mouseover",this.mostrarBalao.bind(this));
    this.elemento.addEventListener("mouseout",this.ocultarBalao);

    this.atualizar();
  }

  mostrarBalao(){
    const Balao = document.querySelector("#balao");
    Balao.style.opacity=1;
    Balao.style.transform=`rotate(${this.angulo}deg) translate(${this.raio}em) rotate(-${this.angulo}deg)`;
    

  }

  ocultarBalao(){
    const Balao = document.querySelector("#balao");
    Balao.style.opacity=0;

  }

  atualizar(){
    this.angulo+=0.2;
    this.elemento.style.transform=`rotate(${this.angulo}deg) translate(${this.raio}em) rotate(-${this.angulo}deg)`;
  }

}

const Frutas = Array.from(document.querySelectorAll(".fruta")).map((elemento, indice, vetor) =>
                new Fruta(360/vetor.length*indice, indice%2?9:16, elemento));



setInterval(function(){

  Frutas.forEach(fruta => fruta.atualizar());

}, 33)








/*(function() {
  $(window.location).scroll(function() {
    toggleBackToTop();
  });

  // Show and hide back to top button
  function toggleBackToTop() {
    var offset = 1, // Offset position when to show
        scrollTop = 0,
        $btn = $('.topButton');

    scrollTop = $(window.location).scrollTop();

    if(scrollTop >= offset) {
        $btn.fadeIn();
    } else {
      $btn.fadeOut();
    }

  }
})();


var raio = 100;
var fields = $('#fruta'),
  container = $('.circlecontainer'),
  width = container.width(),
  height = container.height();
*/
