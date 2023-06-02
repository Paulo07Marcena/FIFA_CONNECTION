b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
record.innerHTML = sessionStorage.Record;

var image = 0;

function proximo() {
  image++;

  if (image > 2) {
    image = 0;
  }

  if (image == 0) {
    card01b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=xIOChRt5ezc&t=61s">
     <button onclick="mostrarModal(1)">
       <img class="img_desafios" src="./IMG/Tommy.png" alt="">
       <h1>Tommy Shelby</h1>
     </button>
    </a>
        `;
    card02b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=ejAZH32si7s">
     <button onclick="mostrarModal(2)">
       <img class="img_desafios" src="./IMG/tom.png" alt="">
       <h1>Tom Holland</h1>
     </button>
    </a>
        `;
    card03b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=143JV0MyQ1U">
     <button onclick="mostrarModal(3)">
       <img class="img_desafios" src="./IMG/Jonh.png" alt="">
       <h1>John Wick</h1>
     </button>
    </a>
    
    `;
  }

  if (image == 1) {
    card01b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=143JV0MyQ1U">
     <button onclick="mostrarModal(3)">
       <img class="img_desafios" src="./IMG/Jonh.png" alt="">
       <h1>John Wick</h1>
     </button>
    </a>
        `;
    card02b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=xIOChRt5ezc&t=61s">
     <button onclick="mostrarModal(1)">
       <img class="img_desafios" src="./IMG/Tommy.png" alt="">
       <h1>Tommy Shelby</h1>
     </button>
    </a>`;

    card03b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=ejAZH32si7s">
     <button onclick="mostrarModal(2)">
       <img class="img_desafios" src="./IMG/tom.png" alt="">
       <h1>Tom Holland</h1>
     </button>
    </a>`;
  }

  if (image == 2) {
    card01b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=ejAZH32si7s">
     <button onclick="mostrarModal(2)">
       <img class="img_desafios" src="./IMG/tom.png" alt="">
       <h1>Tom Holland</h1>
     </button>
    </a>`;

    card02b.innerHTML = `
     <a target="_blank" href="https://www.youtube.com/watch?v=143JV0MyQ1U">
      <button onclick="mostrarModal(3)">
        <img class="img_desafios" src="./IMG/Jonh.png" alt="">
        <h1>John Wick</h1>
      </button>
     </a>`;

    card03b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=xIOChRt5ezc&t=61s">
     <button onclick="mostrarModal(1)">
       <img class="img_desafios" src="./IMG/Tommy.png" alt="">
       <h1>Tommy Shelby</h1>
     </button>
    </a>`;
  }
}

function anterior() {
  image--;
  if (image < 0) {
    image = 2;
  }
  if (image == 0) {
    card01b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=xIOChRt5ezc&t=61s">
     <button onclick="mostrarModal(1)">
       <img class="img_desafios" src="./IMG/Tommy.png" alt="">
       <h1>Tommy Shelby</h1>
     </button>
    </a>`;

    card02b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=ejAZH32si7s">
      <button onclick="mostrarModal(2)">
        <img class="img_desafios" src="./IMG/tom.png" alt="">
        <h1>Tom Holland</h1>
      </button>
    </a>`;

    card03b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=143JV0MyQ1U">
     <button onclick="mostrarModal(3)">
       <img class="img_desafios" src="./IMG/Jonh.png" alt="">
       <h1>John Wick</h1>
     </button>
    </a>`;
  } else if (image == 1) {
    card01b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=143JV0MyQ1U">
     <button onclick="mostrarModal(3)">
       <img class="img_desafios" src="./IMG/Jonh.png" alt="">
       <h1>John Wick</h1>
     </button>
    </a>`;

    card02b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=xIOChRt5ezc&t=61s">
     <button onclick="mostrarModal(1)">
       <img class="img_desafios" src="./IMG/Tommy.png" alt="">
       <h1>Tommy Shelby</h1>
     </button>
    </a>`;
    card03b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=ejAZH32si7s">
     <button onclick="mostrarModal(2)">
       <img class="img_desafios" src="./IMG/tom.png" alt="">
       <h1>Tom Holland</h1>
     </button>
    </a>`;
  }

  if (image == 2) {
    card01b.innerHTML = `

    <a target="_blank" href="https://www.youtube.com/watch?v=ejAZH32si7s">
     <button onclick="mostrarModal(2)">
       <img class="img_desafios" src="./IMG/tom.png" alt="">
       <h1>Tom Holland</h1>
     </button>
    </a>`;
    card02b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=143JV0MyQ1U">
     <button onclick="mostrarModal(3)">
       <img class="img_desafios" src="./IMG/Jonh.png" alt="">
       <h1>John Wick</h1>
     </button>
    </a>`;
    card03b.innerHTML = `
    <a target="_blank" href="https://www.youtube.com/watch?v=xIOChRt5ezc&t=61s">
     <button onclick="mostrarModal(1)">
       <img class="img_desafios" src="./IMG/Tommy.png" alt="">
       <h1>Tommy Shelby</h1>
     </button>
    </a>`;
  }
}

function game() {
  sessionStorage.NOME_USUARIO = sessionStorage.NOME_USUARIO;
  sessionStorage.ID_USER = sessionStorage.ID_USER;
  sessionStorage.Record = sessionStorage.Record;

  window.location = "./game.html";
}
