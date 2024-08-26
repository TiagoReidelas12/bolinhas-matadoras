var raquete
var pontofinal
var pontos=1
var tempo
var tempodejogo
var jogoAtivo =true
function setup() {
  createCanvas(800,600);//cava cria o tamanho da tela do jogo
 raquete= createSprite(400, 580, 150, 10);
grupoVerde=new Group()
grupoVermelho=new Group()
tempo=millis()
edges=createEdgeSprites()
grupobonus=new Group()}

function draw() {
  background("black"); // Define a cor de fundo

  if (jogoAtivo) {
    if (keyDown("a")) { // Move a raquete para a esquerda
      raquete.position.x -= 25;
    }
    if (keyDown("d")) { // Move a raquete para a direita
      raquete.position.x += 25;
    }

    bolinhasVerdes();
bolinhasbonus()
    grupoVerde.forEach(verde => {
      if (raquete.overlap(verde)) {
        verde.remove();
        pontos = pontos + 1;
      }
    });

    grupoVermelho.forEach(vermelho => {
      if (raquete.overlap(vermelho)) {
        vermelho.remove();
        pontos = pontos - 1;
      }
    });
    grupobonus.forEach(bonus => {
      if (raquete.overlap(bonus)) {
        bonus.remove();
        pontos = pontos +7;
      }
    });

    if (pontos < 0) {
      gameover();
    } else {
      tempodejogo = Math.floor((millis() - tempo) / 1000); // Calcula o tempo de jogo
    }

    raquete.bounceOff(edges); // Impede que a raquete saia da tela
    drawSprites(); // Desenha os sprites na tela
    bolinhasVermelhas(); // Gera novas bolinhas vermelhas
  }

  // Exibe a pontuação e o tempo na tela
  textSize(20);
  fill("white");
  text("pontos: " + pontos, 10, 30);
  text("tempo: " + tempodejogo, 10, 50);

  if (!jogoAtivo) {
    textSize(50);
    fill("white");
    text("Game Over", 290, 290);
    text("Seu tempo: " + pontofinal + " segundos", 200, 330);
  }
}
function bolinhasVerdes(){
  if(frameCount%50==0){//criar um sprite acada 50 quadros
    var verde = createSprite(random(0,780),0,50,50)
    verde.shapeColor="green"//pra colocar cor nos sprite
    verde.velocityY=random(20,10)//colocar velocidade no sprite para baixo aleatoria
    verde.lifetime=50
    if(pontos>0&&pontos%2===0){
      verde.velocityY+=2
    }
    grupoVerde.add(verde)
  }
}


 function bolinhasVermelhas(){
  if(frameCount%9==0){//criar um sprite acada 50 quadros
    var vermelho = createSprite(random(0,780),0,50,50)
    vermelho.shapeColor="red"//pra colocar cor nos sprite
    vermelho.velocityY=random(20,10)//colocar velocidade no sprite para baixo aleatoria
    vermelho.lifetime=50
    grupoVermelho.add(vermelho) }
}
 function bolinhasbonus(){
  if(frameCount%500==0){//criar um sprite acada 50 quadros
    var bonus = createSprite(random(0,780),0,50,50)
    bonus.shapeColor="purple"//pra colocar cor nos sprite
    bonus.velocityY=random(20,10)//colocar velocidade no sprite para baixo aleatoria
    bonus.lifetime=50
    grupobonus.add(bonus) }
}

function gameover() {
  jogoAtivo = false; // Para o jogo
  grupoVerde.setVelocityYEach(0); // Para as bolinhas verdes
  grupoVermelho.setVelocityYEach(0); // Para as bolinhas vermelhas
  pontofinal = tempodejogo; // Armazena o tempo final
}
