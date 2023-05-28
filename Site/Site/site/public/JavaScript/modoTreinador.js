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
];

vt_url = [
  "https://parisfc.fr/",
  "https://www.athletic-club.eus/",
  "https://www.bvb.de/",
  "https://www.ol.fr/pt",
  "https://www.acmilan.com/en",
  "https://salfordcityfc.co.uk/",
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
            <img class="img_desafios" src="./IMG/estrada 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
        `;
    card02b.innerHTML = `
          <button onclick="mostrarModal(2)">
            <img class="img_desafios" src="./IMG/distintivo 1.png" alt="">
            <h1>CRIE SEU TIME</h1>
          </button>
        `;
    card03b.innerHTML = `
    <button onclick="mostrarModal(3)">
    <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
    <h1>FOCO NA BASE</h1>
  </button>
    
    `;
  }

  if (image == 1) {
    card01b.innerHTML = `
    <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>FOCO NA BASE</h1>
          </button>
        `;
    card02b.innerHTML = `
              <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/estrada 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
        `;
    card03b.innerHTML = `
          <button onclick="mostrarModal(2)">
            <img class="img_desafios" src="./IMG/distintivo 1.png" alt="">
            <h1>CRIE SEU TIME</h1>
          </button>
    
    `;
  }

  if (image == 2) {
    card01b.innerHTML = `

          <button onclick="mostrarModal(2)">
            <img class="img_desafios" src="./IMG/distintivo 1.png" alt="">
            <h1>CRIE SEU TIME</h1>
          </button>
        `;
    card02b.innerHTML = `
    <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>FOCO NA BASE</h1>
          </button>
        `;
    card03b.innerHTML = `
          <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/estrada 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
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
            <img class="img_desafios" src="./IMG/estrada 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
          `;
    card02b.innerHTML = `
    <button onclick="mostrarModal(2)">
    <img class="img_desafios" src="./IMG/distintivo 1.png" alt="">
    <h1>CRIE SEU TIME</h1>
  </button>
          `;
    card03b.innerHTML = `
    <button onclick="mostrarModal(3)">
    <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
    <h1>FOCO NA BASE</h1>
  </button>
      
      `;
  } else if (image == 1) {
    card01b.innerHTML = `
    <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>FOCO NA BASE</h1>
          </button>
        `;
    card02b.innerHTML = `
              <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/estrada 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
        `;
    card03b.innerHTML = `
          <button onclick="mostrarModal(2)">
            <img class="img_desafios" src="./IMG/distintivo 1.png" alt="">
            <h1>CRIE SEU TIME</h1>
          </button>
    
    `;
  }

  if (image == 2) {
    card01b.innerHTML = `

          <button onclick="mostrarModal(2)">
            <img class="img_desafios" src="./IMG/distintivo 1.png" alt="">
            <h1>CRIE SEU TIME</h1>
          </button>
        `;
    card02b.innerHTML = `
    <button onclick="mostrarModal(3)">
            <img class="img_desafios" src="./IMG/diamante 1.png" alt="">
            <h1>FOCO NA BASE</h1>
          </button>
        `;
    card03b.innerHTML = `
          <button onclick="mostrarModal(1)">
            <img class="img_desafios" src="./IMG/estrada 1.png" alt="">
            <h1>ESTRADA PARA GLÓRIA</h1>
          </button>
    
    `;
  }
}

function mostrarModal(m) {
  modal.style.display = "flex";
  backGround.style.display = "flex";

  if (m == 1) {
    titleModal.innerHTML = "Estrada para glória";
    description.innerHTML = `No modo carreira do FIFA 23, os desafios do "Caminho para a Glória" oferecem uma experiência envolvente e gratificante. O objetivo é levar um dos clubes com menor classificação do jogo à promoção para a primeira divisão do seu país e torná-lo uma potência doméstica e continental. Esse desafio é especialmente popular na EFL League Two da Inglaterra, onde são necessárias três promoções para chegar à Premier League. É uma jornada emocionante e desafiadora em busca do sucesso e reconhecimento.`;
  } else if (m == 2) {
    titleModal.innerHTML = "Crie seu time";
    description.innerHTML = `No FIFA 23, o modo "Crie seu Clube" é uma adição significativa ao modo carreira. Os jogadores têm a oportunidade de personalizar seu próprio clube e enfrentar desafios personalizados. Começando em ligas inferiores, você pode definir a dificuldade, escolhendo um elenco de baixa classificação, orçamento de transferência limitado e altas expectativas da diretoria. É uma experiência de gerenciamento desafiadora que permite testar suas habilidades e buscar a glória com seu clube personalizado.`;
  } else if (m == 3) {
    titleModal.innerHTML = "Foco na base";
    description.innerHTML = `No FIFA 23, você pode construir e treinar uma academia de jovens no modo carreira. Recrute talentos promissores e os desenvolva ao longo do tempo. Promova esses jogadores para o time principal e crie uma equipe inicial composta por jovens talentosos. É uma oportunidade gratificante para formar uma equipe de sucesso no futuro.`;
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
