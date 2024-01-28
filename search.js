// Obtém o elemento HTML com o id "result-artist"
const resultArtist = document.getElementById("result-artist");

// Obtém o elemento HTML com o id "result-playlists"
const playlistContainer = document.getElementById("result-playlists");

// Obtém o elemento HTML com o id "search-input"
const searchInput = document.getElementById("search-input");

// Função para fazer uma solicitação à API com base no termo de pesquisa fornecido
function requestApi(searchTerm) {
  // Faz uma solicitação fetch para a URL fornecida com o termo de pesquisa
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    // Converte a resposta para JSON
    .then((response) => response.json())
    // Chama a função displayResults com os resultados da solicitação
    .then((results) => displayResults(results));
}

// Função para exibir os resultados da API na página
function displayResults(results) {
  // Oculta as playlists
  hidePlaylists();

  // Obtém os elementos HTML para a imagem e o nome do artista
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  // Para cada elemento nos resultados da API, atualiza a imagem e o nome do artista
  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });

  // Remove a classe "hidden" do elemento de resultado do artista para exibi-lo
  resultArtist.classList.remove("hidden");
}

// Função para ocultar as playlists
function hidePlaylists() {
  // Adiciona a classe "hidden" ao contêiner de playlists para ocultá-lo
  playlistContainer.classList.add("hidden");
}

// Adiciona um ouvinte de evento de entrada ao campo de pesquisa
searchInput.addEventListener("input", function () {
  // Obtém o termo de pesquisa do campo de entrada, convertendo-o para minúsculas
  const searchTerm = searchInput.value.toLowerCase();

  // Se o termo de pesquisa estiver vazio, oculta o resultado do artista e mostra as playlists novamente
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }

  // Chama a função requestApi com o termo de pesquisa fornecido
  requestApi(searchTerm);
});
