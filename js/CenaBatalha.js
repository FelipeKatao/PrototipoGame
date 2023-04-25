//import Oct8 from "../../Oct8-alpha/Oct8/Oct8.js"
class CenaBatalha{
    batalhaAtiva = true 
    Acao_escolhidas = 0
    Acao_turno = 2
    Adversario_batalha = null 
    Jogador_batalha = null

    _stats_personagem={
        Ataque:0,
        Defesa:0,
        Especial:0
    }

    _stats_Adversario={
        Ataque:0,
        Defesa:0,
        Especial:0
    }

    verificarTurnoBatalha(){
        if(this.Acao_escolhidas >= this.Acao_turno)
        {
            //Calcular turno de batalha fazendo os calculos
            return this.batalhaAtiva
        }
        this.Acao_escolhidas+=1
        return this.batalhaAtiva
    }

    DefinirJogadores(Adversario,Jogador){
        this.Adversario_batalha = Adversario
        this.Jogador_batalha = Jogador    
    }

    BatalhaAtiva(){
        if(this.verificarBatalha)
        {
            console.log("Hello world")
        }
        else
        {
            console.log("Parar o evento")
        }
    }
    QuebrarBatalha(){
        this.batalhaAtiva = false
    }
    CalculoAcao(Acao)
    {
        let RNG_Acao_calc = Math.floor(Math.random()*6)+1
        return Acao.includes(RNG_Acao_calc) ? true : false
    }
    DefinirAcaoAdversario()
    {
        let RNG_Acao_adversario_calc = Math.floor(Math.random()*3)+1
        return RNG_Acao_adversario_calc
    }
    AdicionarStatusPersonagem(Status,aviso){
        this._stats_personagem[Status]+=1
        document.getElementById("AvisoEfeitos").innerHTML+="<spam class='player-aviso'>Você </spam>"+aviso+"</br>"
    }
    AdicionarStatusAdversario(status,aviso){
        this._stats_Adversario[status]+=1
        document.getElementById("AvisoEfeitos").innerHTML+="<spam class='adv-aviso'>Inimigo </spam>"+aviso+"</br>"
    }
    moveCharAtaque(typeEvent,Element,octEvent)
    {
      if(typeEvent == "char")
      {
        document.getElementById(Element).classList.add("moveChar_player")
        octEvent.CreateEvent(()=>{
            document.getElementById(Element).classList.remove("moveChar_player")
           //octEvent.StopEvent()
        },1200)
      }
      else
      {
        document.getElementById(Element).classList.add("moveChar_enemy")
        octEvent.CreateEvent(()=>{
            document.getElementById(Element).classList.remove("moveChar_enemy")
            //octEvent.StopEvent()
        },1200)
      }
    }
}

export default CenaBatalha