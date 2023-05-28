var image = 0;
var typed = new Typed(".multiple-text", {
  strings: ["SIMULE O SEU TIME DOS SONHOS"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function proximo() {
  image++;
  if (image > 2) {
    image = 0;
  }
  container03.innerHTML = "";
  if (image == 0) {
    container03.innerHTML = `
        <img src="./IMG/4-2-2-2.png" alt="" />
        `;
    container03b.innerHTML = `
        <img src="./IMG/4-2-2-2.png" alt="" />
        `;
  } else if (image == 1) {
    container03.innerHTML = `
        <img src="./IMG/4-3-3.png" alt="" />
        `;

    container03b.innerHTML = `
        <img src="./IMG/4-3-3.png" alt="" />
        `;
  } else if (image == 2) {
    container03.innerHTML = `
        <img src="./IMG/4-4-2.png" alt="" />
        `;

    container03b.innerHTML = `
        <img src="./IMG/4-4-2.png" alt="" />
        `;
  }
}

function anterior() {
  image--;
  if (image < 0) {
    image = 2;
  }
  container03.innerHTML = "";
  if (image == 0) {
    container03.innerHTML = `
        <img src="./IMG/4-2-2-2.png" alt="" />
        `;

    container03b.innerHTML = `
        <img src="./IMG/4-2-2-2.png" alt="" />
        `;
  } else if (image == 1) {
    container03.innerHTML = `
        <img src="./IMG/4-3-3.png" alt="" />
        `;

    container03b.innerHTML = `
        <img src="./IMG/4-3-3.png" alt="" />
        `;
  } else if (image == 2) {
    container03.innerHTML = `
        <img src="./IMG/4-4-2.png" alt="" />
        `;

    container03b.innerHTML = `
        <img src="./IMG/4-4-2.png" alt="" />
        `;
  }
}

var pontos_ataque = 0;
var pontos_defesa = 0;
var pontos_meio = 0;

var grafico_RIT = 0;
var grafico_FIN = 0;
var grafico_PAS = 0;
var grafico_FIS = 0;
var grafico_DEF = 0;
var grafico_DRI = 0;

var vt_pontosJogador = [
  grafico_RIT,
  grafico_FIN,
  grafico_PAS,
  grafico_FIS,
  grafico_DEF,
  grafico_DRI,
];

var vt_nomeDosJogadores = [];

// Enviar a mensagem ao apertar o botão (enter)
let input = document.getElementById("ipt_nomeJogador");
input.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    buscarJogador();
  }
});

var config = {
  type: "radar",
  data: {
    labels: ["RIT", "FIN", "PAS", "FÍS", "DEF", "DRI"],
    datasets: [
      {
        label: `Pontos`,
        data: vt_pontosJogador,
        fill: true,
        backgroundColor: "#e0b84078",
        borderColor: "#e0b840",
        pointBackgroundColor: "#e0b840",
        pointBorderColor: "#e0b840",
        pointHoverBackgroundColor: "#e0b840",
        pointHoverBorderColor: "#e0b840",
        borderWidth: 3,
        fontSize: "25px",
      },
    ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          var value = data.datasets[0].data[tooltipItem.index];
          return label + ": " + value;
        },
      },
    },
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: "#000",
      },
      pointLabels: {
        fontColor: "#fff", // define a cor dos rótulos dos pontos como cinza escuro
      },
      angleLines: {
        color: "#e9c254", // define a cor das linhas do gráfico
      },
      gridLines: {
        color: "#e9c254", // define a cor das linhas do grid
      },
      scaleLabel: {
        display: true,
        labelString: "Pontos",
        fontColor: "#e9c254", // define a cor do título do rótulo
      },
    },
  },
};

var ctx = document.getElementById("grafico").getContext("2d");
var myChart = new Chart(ctx, config);

function buscarJogador() {
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeJogador = ipt_nomeJogador.value;
  var erro = false;

  if (nomeJogador == "" || ipt_nomeJogador.length == 0) {
    alert(`
    Os dados fornecidos não estão de acordo. Verifique os campos`);

    erro = true;
  }

  if (erro == false) {
    // Enviando o valor da nova input
    fetch("/usuarios/buscarJogador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeJogadorServer: nomeJogador,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta.body);

        if (resposta.ok) {
          resposta.json().then(function (dadosJogador) {
            if (dadosJogador.length == 0) {
              toastr.error(
                "Esse jogador ainda não está presente no nosso banco de dados!"
              );
            } else {
              console.log("Consulta realizada com sucesso");
              vt_nomeDosJogadores.push(ipt_nomeJogador.value);
              ipt_nomeJogador.value = "";

              list.innerHTML = "";
              for (var i = 0; i < vt_nomeDosJogadores.length; i++) {
                list.innerHTML += `${i + 1}° -- ${
                  vt_nomeDosJogadores[i]
                } <br> `;
              }

              console.log(`Dados recebidos: ${JSON.stringify(dadosJogador)}`);

              pontos_ataque += Number(dadosJogador[0].Fin);
              pontos_defesa += Number(dadosJogador[0].Def);
              pontos_meio += Number(dadosJogador[0].Pas);

              vt_pontosJogador[0] += Number(dadosJogador[0].rit) / 10;
              vt_pontosJogador[1] += Number(dadosJogador[0].Fin) / 10;
              vt_pontosJogador[2] += Number(dadosJogador[0].Pas) / 10;
              vt_pontosJogador[3] += Number(dadosJogador[0].Fis) / 10;
              vt_pontosJogador[4] += Number(dadosJogador[0].Def) / 10;
              vt_pontosJogador[5] += Number(dadosJogador[0].Dri) / 10;

              console.log(vt_pontosJogador);
              ipt_nomeJogador.value = "";

              atualizarPagina();
            }
          });
        } else {
          throw "Houve um erro ao tentar realizar a consulta!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }
}

function atualizarPagina() {
  myChart.update();

  ataque.innerHTML = (pontos_ataque / 11).toFixed();
  defesa.innerHTML = (pontos_defesa / 11).toFixed();
  meio.innerHTML = (pontos_meio / 11).toFixed();

  ipt_nomeJogador.value = "";

  if (vt_nomeDosJogadores.length == 10) {
    buscar.innerHTML = `
    <input placeholder="Pesquise um jogador..." id="ipt_nomeJogador" />
    <button><img src="./IMG/lupa.png" alt="" /></button>
    `;
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
