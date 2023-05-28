conteudo.style = "border-radius: 0px 10px 10px 0px;";
conteudo.style = "box-shadow: -5px 0px 10px  #0000006f";
function setorLogin(n) {
  conteudo.innerHTML = "";

  transition(n);
}

function transition(parametro) {
  if (parametro == 1) {
    conteudo.style =
      "border-radius: 10px 0px 0px 10px; box-shadow: -4.5px 0px 10px  #0000006f";

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 10%;  box-shadow: -4px 0px 10px  #0000006f";
    }, 50);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 20%;  box-shadow: -3.5px 0px 10px  #0000006f";
    }, 100);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 30%;  box-shadow: -3px 0px 10px  #0000006f";
    }, 150);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 40%;  box-shadow: -2.5px 0px 10px  #0000006f";
    }, 200);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 50%;  box-shadow: -2px 0px 10px  #0000006f";
    }, 250);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 60%; box-shadow: 1.5px 0px 10px  #0000006f";
    }, 300);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 70% ; box-shadow: 2px 0px 10px  #0000006f";
    }, 350);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 80%; ; box-shadow: 3px 0px 10px  #0000006f";
    }, 400);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 90% ; box-shadow: 4px 0px 10px  #0000006f";
    }, 450);

    setTimeout(() => {
      conteudoBox.style =
        "margin-right: 100%; box-shadow: 5px 0px 10px  #0000006f";
    }, 500);

    conteudo.innerHTML = `

    <h1>Novo por aqui!</h1>
            <p>
              Se mantenha conectado ao <br />
              <span class="colorGold FIFA"> FIFA </span>
              <span style="color: white" class="connection"> CONNECTION </span>
              fazendo seu Cadastro!
            </p>
            <button onclick='setorLogin(2)'>Criar uma conta</button>

    `;
  } else {
    conteudo.style = "border-radius: 0px 10px 10px 0px;";

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 5%; box-shadow: 4px 0px 10px  #0000006f";
    }, 50);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 10%; box-shadow: 3px 0px 10px  #0000006f";
    }, 100);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 15%; box-shadow: 2px 0px 10px  #0000006f";
    }, 150);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 20%; box-shadow: 1px 0px 10px  #0000006f";
    }, 200);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 25%; box-shadow: -1px 0px 10px  #0000006f";
    }, 250);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 30%; box-shadow: -2px 0px 10px  #0000006f";
    }, 300);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 35%; box-shadow: -3px 0px 10px  #0000006f";
    }, 350);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 40%; box-shadow: -4px 0px 10px  #0000006f";
    }, 400);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 45%; box-shadow: -5px 0px 10px  #0000006f";
    }, 450);

    setTimeout(() => {
      conteudoBox.style =
        "margin-left: 50%; box-shadow: -5px 0px 10px  #0000006f";
    }, 500);

    conteudo.innerHTML = `
            <h1>Bem-vindo de volta!</h1>
            <p>Se mantenha conectado fazendo login com as suas informações!</p>
            <button onclick="setorLogin(1)">Já tenho uma conta</button>
    `;
  }
}
