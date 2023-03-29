import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"
import Oct8Events from "../Oct8-alpha/Oct8/Oct8Events.js"
import Personagens from "./Perosnagens.js"
import CenaBatalha from "./CenaBatalha.js"
import cenas from "./cenas.js"

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
let _Cenas= new cenas()

//Criação de Fabricas bases
OctElem.CreateObjectFactory(Personagens_game.CreateChar,"Personagem")
OctElem.CreateObjectFactory(Personagens_game.genrateEnemy,"Inimigo")

// Gerar Cenas do Games
function CreateTutobasic()
{
  OctElem.AppendObjectFacyotyTo("Personagem",Personagens_game.personagens.Heroi[0])
  OctElem.AppendObjectFacyotyTo("Inimigo",Personagens_game.inimigos.inimigos_base[0])
  _Cenas.renderHudBasic("")
  _Cenas.addAtaqueButton(_Service_Cenabatalha,Personagens_game.personagens.Heroi,Personagens_game.inimigos.inimigos_base,Batalha)
  _Service_Cenabatalha.BatalhaAtiva()
}

OctElem.NewScene("MakeTuto",[CreateTutobasic],10,10)



//Inicialização do Game
let game_world = new Game()
game_world.main()
_Service_Cenabatalha.DefinirJogadores(Personagens_game.inimigos.inimigos_base[0],Personagens_game.personagens.Heroi[0])

//Render 
OctElem.ExecuteScene("MakeTuto")

function VerificarDano(){
  if(parseInt(document.getElementById("HeroibarraVida").style.width)==0 || parseInt(document.getElementById("blobbarraVida").style.width)==0 )
  {
    window.location.reload()
  }
}