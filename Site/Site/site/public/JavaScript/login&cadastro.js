var erro = false;

function cadastrar() {
  aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var cadastroNome = ipt_cadastro_nome.value;
  var cadastroEmail = ipt_cadastro_email.value;
  var cadastroSenha = ipt_cadastro_senha.value;

  if (
    cadastroNome == "" ||
    ipt_cadastro_nome.length <= 1 ||
    cadastroEmail == "" ||
    cadastroEmail.indexOf("@") == -1 ||
    cadastroSenha == "" ||
    ipt_cadastro_senha.length <= 6
  ) {
    toastr.error(
      `Os dados fornecidos não estão de acordo. Verifique os campos`
    );

    erro = true;
    finalizarAguardar();
    return false;
  }

  if (erro == false) {
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: cadastroNome,
        emailServer: cadastroEmail,
        senhaServer: cadastroSenha,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          toastr.success("Cadastro realizado com sucesso!");
          transition(1);

          setTimeout(() => {
            ipt_cadastro_email.value = "";
            ipt_cadastro_nome.value = "";
            ipt_cadastro_senha.value = "";
          }, "2000");
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }
}

function entrar() {
  var erro = false;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;

  if (emailVar == "" || senhaVar == "") {
    toastr.error = "Os campos não estão preenchido de forma correta";
    erro = true;
  } else {
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.ID_USER = json.idUser;
            sessionStorage.Record = json.record;

            window.location = "./central.html";
          });
        } else {
          toastr.erro("Houve um erro ao tentar realizar o login!");

          resposta.text().then((texto) => {
            console.error(texto);
            toastr.error("Houve um erro ao tentar realizar o login!");
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
        toastr.error("Houve um erro ao tentar realizar o login!");
      });

    return false;
  }
}
toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
