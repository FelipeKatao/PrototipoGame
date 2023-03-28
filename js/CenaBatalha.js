import Oct8 from "../../Oct8-alpha/Oct8/Oct8.js"
class CenaBatalha{
    batalhaAtiva = true 
    Acao_escolhidas = 0
    Acao_turno = 2
    Adversario_batalha = null 
    Jogador_batalha = null

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
        console.log(Acao)
    }
}

export default CenaBatalha