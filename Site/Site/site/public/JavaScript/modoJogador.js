const card01 = document.getElementById("card01");
const card02 = document.getElementById("card02");
const card03 = document.getElementById("card03");

var sorteio01 = 0;
var sorteio02 = 0;
var sorteio03 = 0;
var image = 0;

modal.style.display = "none";
backGround.style.display = "none";

vt_times = [
  "parisFcLogo",
  "AthleticBilbaoLogo",
  "borrusiaLogo",
  "lyonLogo",
  "milanLogo",
  "salfordCityLogo",
  "SantosLogo",
];

vt_url = [
  "https://parisfc.fr/",
  "https://www.athletic-club.eus/",
  "https://www.bvb.de/",
  "https://www.ol.fr/pt",
  "https://www.acmilan.com/en",
  "https://salfordcityfc.co.uk/",
  "https://www.santosfc.com.br/",
];

function trocarImagens() {
  sorteio01 = Math.floor(Math.random() * vt_times.length);
  sorteio02 = Math.floor(Math.random() * vt_times.length);
  sorteio03 = Math.floor(Math.random() * vt_times.length);

  if (sorteio01 === sorteio02 || sorteio01 === sorteio03) {
    while (sorteio01 === sorteio02 || sorteio01 === sorteio03) {
      sorteio01 = Math.floor(Math.random() * vt_times.length);
    }
  }
  if (sorteio02 === sorteio01 || sorteio02 === sorteio03) {
    while (sorteio02 === sorteio01 || sorteio02 === sorteio03) {
      sorteio02 = Math.floor(Math.random() * vt_times.length);
    }
  }
  if (sorteio03 === sorteio02 || sorteio03 === sorteio01) {
    while (sorteio03 === sorteio02 || sorteio03 === sorteio01) {
      sorteio03 = Math.floor(Math.random() * vt_times.length);
    }
  }

  card01.innerHTML = `<a class="aLogo" target="_blank" href="${vt_url[sorteio01]}"><img class="imgLogoTime" src="./IMG/${vt_times[sorteio01]}.png" alt=""></a>`;
  card02.innerHTML = `<a class="aLogo" target="_blank" href="${vt_url[sorteio02]}"><img class="imgLogoTime" src="./IMG/${vt_times[sorteio02]}.png" alt=""></a>`;
  card03.innerHTML = `<a class="aLogo" target="_blank" href="${vt_url[sorteio03]}"><img class="imgLogoTime" src="./IMG/${vt_times[sorteio03]}.png" alt=""></a>`;

  setTimeout(trocarImagens, 10000);
}

trocarImagens();

function proximo() {
  image++;

  if (image > 2) {
    image = 0;
  }

  if (image == 0) {
    card01b.innerHTML = `
           <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/LOGO.png" alt="">
            <h1>PATRIOTA</h1>
          </button>
        `;
    card02b.innerHTML = `
          <button onclick="mostrarModal(2)">
          <img class="img_desafios" src="./IMG/crescimento.png" alt="">
          <h1>EVOLUÇÃO</h1>
          </button>
        `;
    card03b.innerHTML = `
              <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
    
    `;
  }

  if (image == 1) {
    card01b.innerHTML = `
              <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
        `;
    card02b.innerHTML = `
           <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/LOGO.png" alt="">
            <h1>PATRIOTA</h1>
          </button>
        `;
    card03b.innerHTML = `
          <button onclick="mostrarModal(2)">
          <img class="img_desafios" src="./IMG/crescimento.png" alt="">
          <h1>EVOLUÇÃO</h1>
          </button>
    
    `;
  }

  if (image == 2) {
    card01b.innerHTML = `

          <button onclick="mostrarModal(2)">
          <img class="img_desafios" src="./IMG/crescimento.png" alt="">
          <h1>EVOLUÇÃO</h1>
          </button>
        `;
    card02b.innerHTML = `
              <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
        `;
    card03b.innerHTML = `
           <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/LOGO.png" alt="">
            <h1>PATRIOTA</h1>
          </button>
    
    `;
  }
}

function anterior() {
  image--;
  if (image < 0) {
    image = 2;
  }
  if (image == 0) {
    card01b.innerHTML = `


           <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/LOGO.png" alt="">
            <h1>PATRIOTA</h1>
          </button>
          `;
    card02b.innerHTML = `
          <button onclick="mostrarModal(2)">
          <img class="img_desafios" src="./IMG/crescimento.png" alt="">
          <h1>EVOLUÇÃO</h1>
          </button>
          `;
    card03b.innerHTML = `
              <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
      
      `;
  } else if (image == 1) {
    card01b.innerHTML = `
              <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
        `;
    card02b.innerHTML = `
           <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/LOGO.png" alt="">
            <h1>PATRIOTA</h1>
          </button>
        `;
    card03b.innerHTML = `
          <button onclick="mostrarModal(2)">
          <img class="img_desafios" src="./IMG/crescimento.png" alt="">
          <h1>EVOLUÇÃO</h1>
          </button>
    
    `;
  }

  if (image == 2) {
    card01b.innerHTML = `

          <button onclick="mostrarModal(2)">
          <img class="img_desafios" src="./IMG/crescimento.png" alt="">
          <h1>EVOLUÇÃO</h1>
          </button>
        `;
    card02b.innerHTML = `
              <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
        `;
    card03b.innerHTML = `
           <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/LOGO.png" alt="">
            <h1>PATRIOTA</h1>
          </button>
    
    `;
  }
}

function mostrarModal(m) {
  modal.style.display = "flex";
  backGround.style.display = "flex";

  if (m == 1) {
    titleModal.innerHTML = "Patriota";
    description.innerHTML = `Busque uma convocação para a seleção nacional do seu país. Trabalhe duro para melhorar seu desempenho em campo e se tornar uma opção válida para representar sua nação em competições internacionais.`;
  } else if (m == 2) {
    titleModal.innerHTML = "Evolução";
    description.innerHTML = ` Aperfeiçoe suas habilidades técnicas e táticas ao longo da sua carreira. Desafie-se a marcar gols de diferentes formas, como de cabeça, de fora da área ou em cobranças de falta. Melhore sua precisão nos passes e dribles, buscando atingir um determinado percentual de sucesso em cada jogo.`;
  } else if (m == 3) {
    titleModal.innerHTML = "Estrada para glória";
    description.innerHTML =
      "Busque conquistar prêmios individuais prestigiados, como a Chuteira de Ouro (artilheiro da temporada na Europa), o prêmio de Jogador do Ano da FIFA ou o prêmio Bola de Ouro. Faça o possível para se destacar e ganhar reconhecimento dentro e fora de campo.";
  }
}
let modalBox = document.getElementById("backGround");

document.addEventListener("click", function (event) {
  var clicadoFora = modalBox.contains(event.target);
  if (clicadoFora) {
    modal.style.display = "none";
    backGround.style.display = "none";
  }
});
