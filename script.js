// Obtém o elemento HTML com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema
const currentHour = new Date().getHours();

// Define a mensagem de saudação com base na hora atual
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

// Define o texto da saudação no elemento HTML
greetingElement.textContent = greetingMessage;

// Obtém o elemento HTML com a classe "offer__list-item"
const container = document.querySelector(".offer__list-item");

// Cria um observador de redimensionamento para o elemento HTML
const observer = new ResizeObserver(() => {
  // Obtém a largura atual do contêiner
  const containerWidth = container.offsetWidth;

  // Calcula o número de colunas com base na largura do contêiner e largura mínima de 200px
  const numColumns = Math.floor(containerWidth / 200);

  // Define a estrutura de grade do contêiner com base no número de colunas calculado
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  // Exibe informações de depuração no console sobre o contêiner e o número de colunas
  console.log({ container, numColumns });
});

// Observa as mudanças no tamanho do contêiner e aciona o callback do observador
observer.observe(container);
