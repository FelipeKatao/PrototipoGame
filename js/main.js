import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"
import Oct8Events from "../Oct8-alpha/Oct8/Oct8Events.js"
import Personagens from "./Perosnagens.js"
import CenaBatalha from "./CenaBatalha.js"

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
var Batalha = false
var OctElem = new Oct8()
let Personagens_game = new Personagens()
let _Service_Cenabatalha = new CenaBatalha()

//Criação de Fabricas bases
OctElem.CreateObjectFactory(Personagens_game.CreateChar,"Personagem")
OctElem.CreateObjectFactory(Personagens_game.genrateEnemy,"Inimigo")

//HUD do game
function GenerateHudBase()
{
  var ButtonAtaque = OctElem.CreateContainerElement("Ataque_bt","conainer-base","bt_hud","button")
  OctElem.ModifyPropsDefault(ButtonAtaque,[60],[-30],[8],[8])
  ButtonAtaque.style.backgroundImage = "url('../img/Ataque.png')"
  ButtonAtaque.style.backgroundSize = "100%"

  //Clique de  evento 
  ButtonAtaque.addEventListener("click",()=>{
    if(Batalha == false)
    {
      ButtonAtaque.style.opacity = "0.6"
      ButtonAtaque.style.cursor = "not-allowed"
      document.getElementById("blob").classList.add("damage")
      OctElem.CreateEvent(()=>{
        document.getElementById("blob").classList.remove("damage")
        _Service_Cenabatalha.verificarTurnoBatalha()
        _Service_Cenabatalha.CalculoAcao(Personagens_game.personagens.aliados[0][3][0])
      },1000)
      Batalha = true
    }
    
  })
} 

// Gerar Cenas do Games
function CreateTutobasic()
{
  OctElem.AppendObjectFacyotyTo("Personagem",Personagens_game.personagens.aliados[0])
  OctElem.AppendObjectFacyotyTo("Inimigo",Personagens_game.inimigos.inimigos_base[0])
  GenerateHudBase()
  _Service_Cenabatalha.BatalhaAtiva()
}

OctElem.NewScene("MakeTuto",[CreateTutobasic],10,10)



//Inicialização do Game
let game_world = new Game()
game_world.main()
_Service_Cenabatalha.DefinirJogadores(Personagens_game.inimigos.inimigos_base[0],Personagens_game.personagens.aliados[0])

//Render 
OctElem.ExecuteScene("MakeTuto")

OctElem.CreateEvent(()=>{
  console.log(_Service_Cenabatalha.Acao_escolhidas)
},100)