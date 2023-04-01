import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"
import Oct8Events from "../Oct8-alpha/Oct8/Oct8Events.js"
import Personagens from "./Perosnagens.js"
import CenaBatalha from "./CenaBatalha.js"
import cenas from "./cenas.js"

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
  _Cenas.cenaTutorialGenerico(_Service_Cenabatalha,_Cenas,Personagens_game.personagens.Heroi,Batalha,Personagens_game.inimigos.inimigos_base,OctElem)
} 

OctElem.NewScene("MakeTuto",[CreateTutobasic],10,10)
OctElem.ExecuteScene("MakeTuto")

function VerificarDano(){
  if(parseInt(document.getElementById("HeroibarraVida").style.width)==0 || parseInt(document.getElementById("blobbarraVida").style.width)==0 )
  {
    window.location.reload()
  }
}