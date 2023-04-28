// Função para verificar quando o elemento de vídeo está visível
function verificarVisibilidade(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Iniciar o vídeo quando estiver visível
      const video = entry.target;
      video.play();
    } else {
      // Pausar o vídeo quando estiver fora de visão
      const video = entry.target;
      video.pause();
    }
  });
}

// Criar uma instância do Intersection Observer
const observer = new IntersectionObserver(verificarVisibilidade);

// Selecionar o elemento de vídeo
const videoElement = document.getElementById("meu-video");

// Observar o elemento de vídeo
observer.observe(videoElement);
