var raquete
var pontofinal
var pontos=1
var tempo
var tempodejogo
function setup() {
  createCanvas(800,600);//cava cria o tamanho da tela do jogo
 raquete= createSprite(400, 580, 150, 10);
grupoVerde=new Group()
grupoVermelho=new Group()
tempo=millis()
edges=createEdgeSprites()}

function draw() {
  background("black");//background cria cores de fundo 
  if(keyDown("a")){ //KeyDown verifica se atecla foi presionada 
raquete.position.x-=25
  } 
  if(keyDown("d")){
  raquete.position.x+=25
  }
  bolinhasVerdes()
  grupoVerde.forEach(verde=>{
    if(raquete.overlap(verde)){
      verde.remove()
      pontos=pontos+1
    }
  
  })
if(pontos<0){
  gameover()

  pontofinal=tempodejogo
}
  grupoVermelho.forEach(vermelho=>{
    if(raquete.overlap(vermelho)){
      vermelho.remove()
      pontos=pontos-1
    }
  })
  raquete.bounceOff(edges)//fazer a raquete bater na borda 
  tempodejogo=Math.floor((millis()-tempo)/1000)
  drawSprites();
  bolinhasVermelhas()                       //proxima aula faremos uma funçao pra aumentar a dificuldade do jogo
textSize(20)
  text("pontos: "+pontos,10,30)
  text("tempo: "+tempodejogo,10,50)
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
    grupoVermelho.add(vermelho)

  }
}

function gameover(){
grupoVermelho.setVelocityYEach(0)
grupoVerde.setVelocityYEach(0)
textSize(50)
fill("whet")
text("Game Over",290,290)
text("seu tempo"+pontofinal,298,330)
}
