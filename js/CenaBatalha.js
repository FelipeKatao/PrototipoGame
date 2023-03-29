//import Oct8 from "../../Oct8-alpha/Oct8/Oct8.js"
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
        let RNG_Acao_calc = Math.floor(Math.random()*6)+1
        console.log(RNG_Acao_calc+" < RNG")
        console.log(Acao+" < Seu numero")
        return Acao.includes(RNG_Acao_calc) ? true : false
    }
    DefinirAcaoAdversario()
    {
        let RNG_Acao_adversario_calc = Math.floor(Math.random()*3)+1
        return RNG_Acao_adversario_calc
    }
}

export default CenaBatalha