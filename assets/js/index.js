const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
]

function pintar(from = 0, until = 1000, amount = 0) {
  let total = 0
  for (let x of propiedadesJSON) {
    const propiedades = document.querySelector(".propiedades");
    const propiedadHTML = `
    <article class="propiedad" data-precio="${x.m}">
      <h4>${x.name}</h4>
      <h6>${x.description}</h6>
      <img class="img" src="${x.src}" />
      <section> <p>${x.rooms}</p></section>
      <p>${x.m}</p>
      <a><button>Ver más</button></a>
    </article>
  `;
    if (x.m >= from && x.m <= until && x.rooms >= amount) {
      propiedades.innerHTML += propiedadHTML;
      total += 1
    }
  }
  const cantidad = document.querySelector("#cantidad");
  cantidad.innerHTML = total
}

pintar();

const Total = document.querySelector("#totalResultados");
const from = document.querySelector("#desde");
const until = document.querySelector("#hasta");
const amount = document.querySelector("#amount");
const boton = document.querySelector("#search");

boton.addEventListener("click", function () {
  if (from.value === "" || until.value === "" || amount.value === "") {
    alert("Faltan Campos por llenar");
    return;
  }
  const propiedades = document.querySelector(".propiedades");
  propiedades.innerHTML = "";
  pintar(from.value, until.value, amount.value);
  //pintar(0,100,2)

});
