// Selecionando o elemento da imagem e animando
const image = document.querySelector('img'); // Seleciona o elemento <img> no HTML e o atribui à variável 'image'
let angle = 0; // Inicia a variável 'angle' com valor 0
let intervalId; // Inicia a variável 'intervalId' sem valor

function rotateImage() { // Define a função 'rotateImage'
  angle += 2; // Incrementa o valor da variável 'angle' em 2
  image.style.transform = `rotate(${angle}deg)`; // Aplica a rotação à imagem com base no valor atual da variável 'angle'
}

function startRotation() { // Define a função 'startRotation'
  intervalId = setInterval(rotateImage, 10); // Define um intervalo de tempo que chama a função 'rotateImage' a cada 10 milissegundos e armazena o ID do intervalo na variável 'intervalId'
}

function stopRotation() { // Define a função 'stopRotation'
  clearInterval(intervalId); // Limpa o intervalo definido na função 'startRotation' com base no ID armazenado na variável 'intervalId'
}

// Alterando a cor da imagem aleatoriamente
function randomColor() { // Define a função 'randomColor'
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Cria um array de cores
  const randomIndex = Math.floor(Math.random() * colors.length); // Seleciona um índice aleatório no array de cores
  return colors[randomIndex]; // Retorna a cor correspondente ao índice selecionado
}

function changeImageColor() { // Define a função 'changeImageColor'
  const newColor = randomColor(); // Seleciona uma nova cor aleatória
  image.style.filter = `hue-rotate(${Math.floor(Math.random() * 361)}deg)`; // Aplica uma rotação de matiz aleatória à imagem
  image.style.backgroundColor = newColor; // Define a nova cor como a cor de fundo da imagem
  image.style.borderColor = newColor; // Define a nova cor como a cor da borda da imagem
}

// Selecionando o elemento de texto e animando
const text = document.querySelector('p'); // Seleciona o elemento <p> no HTML e o atribui à variável 'text'
let colorIndex = 0; // Inicia a variável 'colorIndex' com valor 0
let intervalTextId; // Inicia a variável 'intervalTextId' sem valor

function changeTextColor() { // Define a função 'changeTextColor'
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Cria um array de cores
  text.style.color = colors[colorIndex]; // Define a cor do texto com base no valor atual da variável 'colorIndex'
  colorIndex = (colorIndex + 1) % colors.length; // Incrementa o valor da variável 'colorIndex' em 1, mas mantém o valor dentro do intervalo do array de cores
}

function startTextAnimation() { // Define a função 'startTextAnimation'
  intervalTextId = setInterval(changeTextColor, 1000); // Define um intervalo de tempo que chama a função 'changeTextColor' a cada 1000 milissegundos (ou

}


function stopTextAnimation() {
  clearInterval(intervalTextId); // Cancela o intervalo com o ID armazenado na variável
}

// Adicionando os eventos aos elementos
image.addEventListener('mouseover', startRotation);
image.addEventListener('mouseout', stopRotation);
image.addEventListener('click', changeImageColor);

text.addEventListener('mouseover', startTextAnimation);
text.addEventListener('mouseout', stopTextAnimation);
