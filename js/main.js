import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"
import Oct8Events from "../Oct8-alpha/Oct8/Oct8Events.js"


//Classe para os perosnagens do jogo
class Personagens{
   personagens = {
    aliados:[["Heroi","../img/image832.png",10],"Mago"]
   }
   inimigos= {
    inimigos_base:[["blob","../img/Enemyt.png",4]]
   }
}

//Classe de criação do mundo
 
class Game{
    oct_Object = new Oct8()
    prop_element = {
      Props01 : ["Id01","Hello world"]
    }
    mainChar(prop){
      console.log("Opa")
    }
    main(){
      this.oct_Object.CreateObjectFactory(this.mainChar,"Personagem")
      this.oct_Object.NewScene("Tutorial",[this.tutorialScene],1,2)
      this.oct_Object.ExecuteScene("Tutorial")  
    }
    tutorialScene(){
        document.getElementById("conainer-base").style.backgroundImage="url('../img/Cena da floresta.png')"
        document.getElementById("conainer-base").style.backgroundSize = "100%"
        // this.oct_Object.AppendObjectFacyotyTo("Personagem",this.prop_element.Props01)
    }

}

//Variaveis Base
var OctElem = new Oct8()
let Chars = new Personagens()


//Criação de fabricas
function CreateChar(persogem){
  var char = OctElem.CreateContainerElement(persogem[0],"conainer-base",null,"div")
  OctElem.ModifyPropsDefault(char,[50],[40],[40],[40])
  char.style.backgroundImage = "url('"+persogem[1]+"')"
  char.style.backgroundSize = "100%"

  var lifebar = OctElem.CreateContainerElement(persogem[0]+"barraVida","conainer-base","barra-vida","div")
  OctElem.ModifyPropsDefault(lifebar,[50],[1],[(persogem[2]*2)],[4])
}

function genrateEnemy(inimigo){
  var enemy = OctElem.CreateContainerElement(inimigo[0],"conainer-base","animateChar","div")
  OctElem.ModifyPropsDefault(enemy,[120],[-50],[20],[20])
  enemy.style.backgroundImage = "url('"+inimigo[1]+"')"
  enemy.style.backgroundSize = "100%"

  var lifebar = OctElem.CreateContainerElement(inimigo[0]+"barraVida","conainer-base","barra-vida","div")
  OctElem.ModifyPropsDefault(lifebar,[124],[1],[(inimigo[2]*2)],[4])
}

OctElem.CreateObjectFactory(CreateChar,"Personagem")
OctElem.CreateObjectFactory(genrateEnemy,"Inimigo")

//HUD do game
function GenerateHudBase()
{
  var ButtonAtaque = OctElem.CreateContainerElement("Ataque_bt","conainer-base","bt_hud","button")
  OctElem.ModifyPropsDefault(ButtonAtaque,[60],[-30],[8],[8])
  ButtonAtaque.style.backgroundImage = "url('../img/Ataque.png')"
  ButtonAtaque.style.backgroundSize = "100%"

  ButtonAtaque.addEventListener("click",()=>{
    ButtonAtaque.style.opacity = "0.6"
    ButtonAtaque.style.cursor = "not-allowed"
  })
}

// Gerar Cenas do Games
function CreateTutobasic()
{
  OctElem.AppendObjectFacyotyTo("Personagem",Chars.personagens.aliados[0])
  OctElem.AppendObjectFacyotyTo("Inimigo",Chars.inimigos.inimigos_base[0])
  GenerateHudBase()
}
OctElem.NewScene("MakeTuto",[CreateTutobasic],10,10)



//Inicialização do Game
let game_world = new Game()
game_world.main()

//Render 
OctElem.ExecuteScene("MakeTuto")