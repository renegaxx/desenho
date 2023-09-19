// Pega o id do canvas do HTML
let canvas = document.getElementById("canvas");

// Pegamos o contexto do desenho, esse é o método que retorna um desenho, usar o parâmetro 2d significa que o objeto que será renderizado será bidimensional 
let contexto = canvas.getContext("2d");

//Variável que vamos usar para identificar se estamos desenhando
let desenhando = false;

canvas.addEventListener("mousedown", function(event){
// Vamos usar o método addEventListener para ouvir nosso mouse, ele irá identificar quando clicarmos
desenhando = true;
contexto.beginPath();
// A variável contexto recebe o método beginPath(), esse método significa que um novo caminho será criado
contexto.moveTo(event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop);
    // Nessa função vamos dizer como o contexto irá funcionar, o clientX vai fornecer coordenadas horizontais enquanto o canvas.offsetLeft vai retornar a medida em pixel, a mesma coisa acontece com o Y de forma vertical
});

canvas.addEventListener("mousemove", function(event){
    // Essa função identifica quando movemos o mouse
    if(desenhando){
        // Esse if vai identificar se estamos clicando enquanto movemos o mouse
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        // Ele vai identificar toda a linha que estamos tracando enquanto clicamos e movemos o mouse
        contexto.stroke();
        // Ele traca a linha
    }
})

canvas.addEventListener("mouseup", function(event){
    // Essa função identifica quando não estamos mais clicando no mouse
    desenhando = false;
})