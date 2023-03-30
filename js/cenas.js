import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"

class cenas{
    renderHudBasic(expetions)
    {
        var OctElem = new Oct8()
        if(expetions=="")
        {
            var ButtonAtaque = OctElem.CreateContainerElement("Ataque_bt","conainer-base","bt_hud","button")
            OctElem.ModifyPropsDefault(ButtonAtaque,[30],[-30],[8],[8])
            ButtonAtaque.style.backgroundImage = "url('../img/Ataque.png')"
            ButtonAtaque.style.backgroundSize = "100%"

            var ButtonDefesa = OctElem.CreateContainerElement("Defesa_bt","conainer-base","bt_hud","button")
            OctElem.ModifyPropsDefault(ButtonDefesa,[38],[-30],[8],[8])
            ButtonDefesa.style.backgroundImage = "url('../img/escudo.jpg')"
            ButtonDefesa.style.backgroundSize = "100%"

            var avisoEfeitos = OctElem.CreateContainerElement("AvisoEfeitos","conainer-base","aviso01","div")
            OctElem.ModifyPropsDefault(avisoEfeitos,[62],[-58],[80],[20])
        }
    }
    addAtaqueButton(Servicevariavelbatalha,Personagem,Inimigo,variavelbatalha,_Service_Cenabatalha)
    {
        let ButtonAtaque = document.getElementById("Ataque_bt")
        let ButtonDefesa = document.getElementById("Defesa_bt")
        var OctElem = new Oct8()
        ButtonAtaque.addEventListener("click",()=>{
            if(variavelbatalha == false)
            {
              variavelbatalha = true
              ButtonAtaque.style.opacity = "0.6"
              ButtonAtaque.style.cursor = "not-allowed"
              ButtonDefesa.style.opacity = "0.6"
              ButtonDefesa.style.cursor = "not-allowed"
              if(Servicevariavelbatalha.CalculoAcao(Personagem[0][3][0])){
                Servicevariavelbatalha.AdicionarStatusPersonagem("Ataque","aplicou 10 de dano.")
                document.getElementById(Inimigo[0][0]).classList.add("damage")
                let Elememt =  document.getElementById(Inimigo[0][0]+"barraVida")
                let Calc = parseInt(Elememt.style.width) - 4
                Elememt.style.width = Calc+"vh"
              }
              else
              {
                Servicevariavelbatalha.AdicionarStatusAdversario("Ataque","Aplicou 5 de dano.")
                document.getElementById(Personagem[0][0]).classList.add("damage")
                let Elememt =  document.getElementById(Personagem[0][0]+"barraVida")
                let Calc = parseInt(Elememt.style.width) - 4
                Elememt.style.width = Calc+"vh"
              }
              OctElem.CreateEvent(()=>{       
                  document.getElementById(Personagem[0][0]).classList.remove("damage")
                  document.getElementById(Inimigo[0][0]).classList.remove("damage")
                  variavelbatalha = false
                  ButtonAtaque.style.opacity = "1"
                  ButtonAtaque.style.cursor = "allowed"
                  
                  ButtonDefesa.style.opacity = "1"
                  ButtonDefesa.style.cursor = "allowed"
                  console.log(Servicevariavelbatalha._stats_personagem)
                  OctElem.StopEvent()
              },1000)
            }
        },false)
        
    }

    addDefesaButton(Servicevariavelbatalha,Personagem,Inimigo,variavelbatalha,_Service_Cenabatalha)
    {
        let ButtonAtaque = document.getElementById("Ataque_bt")
        let ButtonDefesa = document.getElementById("Defesa_bt")
        var OctElem = new Oct8()
        ButtonDefesa.addEventListener("click",()=>{
            if(variavelbatalha == false)
            {
              variavelbatalha = true
              ButtonAtaque.style.opacity = "0.6"
              ButtonAtaque.style.cursor = "not-allowed"
              ButtonDefesa.style.opacity = "0.6"
              ButtonDefesa.style.cursor = "not-allowed"

              if(Servicevariavelbatalha.CalculoAcao(Personagem[0][3][1])){
                Servicevariavelbatalha.AdicionarStatusPersonagem("Defesa","se defendeu.")
              }
              else
              {
                Servicevariavelbatalha.AdicionarStatusAdversario("Ataque","Aplicou 10 de dano.")
                document.getElementById(Personagem[0][0]).classList.add("damage")
                let Elememt =  document.getElementById(Personagem[0][0]+"barraVida")
                let Calc = parseInt(Elememt.style.width) - 8
                Elememt.style.width = Calc+"vh"
              }
              OctElem.CreateEvent(()=>{       
                  document.getElementById(Personagem[0][0]).classList.remove("damage")
                  variavelbatalha = false
                  ButtonAtaque.style.opacity = "1"
                  ButtonAtaque.style.cursor = "allowed"
                  
                  ButtonDefesa.style.opacity = "1"
                  ButtonDefesa.style.cursor = "allowed"
                  console.log(Servicevariavelbatalha._stats_personagem)
                  OctElem.StopEvent()
              },1000)
            }
        },false)

    }

    cenaTutorialGenerico(Servicevariavelbatalha,ServiceCenas,Personagem,variavelbatalha,inimigo,Oct8){
        Servicevariavelbatalha.DefinirJogadores(inimigo[0],Personagem[0])
        document.getElementById("conainer-base").style.backgroundImage="url('../img/Cena da floresta.png')"
        document.getElementById("conainer-base").style.backgroundSize = "100%"
        Oct8.AppendObjectFacyotyTo("Personagem",Personagem[0])
        Oct8.AppendObjectFacyotyTo("Inimigo",inimigo[0])
        ServiceCenas.renderHudBasic("")
        ServiceCenas.addAtaqueButton(Servicevariavelbatalha,Personagem,inimigo,variavelbatalha)
        ServiceCenas.addDefesaButton(Servicevariavelbatalha,Personagem,inimigo,variavelbatalha)
        Servicevariavelbatalha.BatalhaAtiva()
    }
}

export default cenas
