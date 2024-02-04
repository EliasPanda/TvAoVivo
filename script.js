
// Obtém o elemento do relógio
var clockElement = document.getElementById('clock');

// Atualiza o relógio a cada segundo
function updateClock() {
    var now = new Date();
    now.setHours(now.getHours() - 0); // Ajusta para o fuso horário de Brasília (GMT-3)

    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    // Atualiza o conteúdo do relógio
    clockElement.textContent = hours + ':' + minutes + ':' + seconds;
}

// Chama a função inicialmente para exibir o horário atual
updateClock();

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

var searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', function () {
    // Obtém o valor da barra de pesquisa
    var searchTerm = searchBar.value.toLowerCase();
})

// Obtém a referência para o elemento de rolagem
var scrollContainer = document.getElementById('scrollContainer');
// Adiciona um ouvinte de evento para o evento de roda do mouse
scrollContainer.addEventListener('wheel', function (event) {
    // Ajusta a posição de rolagem horizontal com base no evento de roda do mouse
    scrollContainer.scrollLeft += event.deltaY;

    // Impede a rolagem padrão da página para que apenas a rolagem lateral ocorra
    event.preventDefault();
});

// Obtém a referência para o elemento de rolagem dentro do iframe
var iframeContent = document.getElementById('iframeContent');

// Adiciona um ouvinte de evento para o evento de roda do mouse dentro do iframe
iframeContent.addEventListener('wheel', function (event) {
    // Ajusta a posição de rolagem horizontal com base no evento de roda do mouse
    iframeContent.scrollLeft += event.deltaY;

    // Impede a rolagem padrão do iframe para que apenas a rolagem lateral ocorra
    event.preventDefault();
});
