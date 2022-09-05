let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let boto = document.getElementById("progress-value");

  // La  propiedad scrollTop establece o devuelve el número de 
  // píxeles que el contenido de un elemento se desplaza verticalmente.
  let pos = document.documentElement.scrollTop;

  // La propiedad scrollHeight devuelve en pixeles la altura de un elemento, 
  // incluido el relleno, pero excluye los bordes, las barras de desplazamiento o los márgenes.

  // La propiedad clientHeight devuelve la altura visible de un elemento en 
  // píxeles, incluido el relleno, pero no el borde, la barra de desplazamiento o el margen.
  // Restando scrollHeight - clientHeight obtenemos la altura actual del elemento.
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculem el valor porcentual de la posicio de l'scroll en relació a l'alçada
  // en pixels de l'element
  let scrollValue = Math.round(pos * 100 / calcHeight);

  console.log(scrollValue);


// La función conic-gradient() establece un degradado cónico como imagen de fondo
// Un degradado cónico es un degradado con transiciones de color giradas alrededor 
// de un punto central. Para crear un degradado cónico, debe definir al menos dos paradas de color.
// Las paradas de color son los colores entre los que desea generar la transiciones. 
// Este valor consta de un valor de color, seguido de una posición de parada opcional
// (un grado entre 0 y 360 o un porcentaje entre 0% y 100%).
// Aqui le paso un valor de porcentaje inicial scrollValue (negro) y el valor del  
// scrollValue que va cambiando (rojo).
// https://www.w3schools.com/cssref/func_conic-gradient.asp
  scrollProgress.style.background = `conic-gradient(#f70909 ${scrollValue}%, #000 ${scrollValue}%)`;

  // quan està al final de la pagina, modifico el text del boto
  (scrollValue === 100) ? boto.innerText = ` Mes ?` : boto.innerText = `Llegeix`;

  // amb mouseover i mouseout controlo quan el ratoli pasa per sobre
  // el boto i que vull que fagi en cada cas.
  boto.addEventListener("mouseover", function () {
    boto.innerText = `Amunt ?`;
    if (scrollValue  < 1) {boto.innerText = `Llegeix`;}
  }, false);

  boto.addEventListener("mouseout", function () {
    (scrollValue === 100) ? boto.innerText = ` Mes ?` : boto.innerText = `Llegeix`;
  }, false);


  // TODO: Falta programar quan arriva al final del pagina i vol
  // carregar mes contingut.
  
}

// amb l'event onscroll, crido a la referencia de la funcio scrollPercentage
window.onscroll = scrollPercentage;

// Funcio que et porta a dalt de la pàgina
let goTopPage = () => window.scrollTo(0, 0);