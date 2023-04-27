import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"

class cenas{
    Card_ativo =false
    renderHudBasic(expetions)
    {
        var OctElem = new Oct8()
        var elementoBase
        if(expetions=="")
        {
            var ButtonAtaque = OctElem.CreateContainerElement("Ataque_bt","conainer-base","card_select","div")
            OctElem.ModifyPropsDefault(ButtonAtaque,[30],[20],[20],[20])
            elementoBase = OctElem.CreateContainerElement("ataque_title","Ataque_bt","title_card","div")
            OctElem.ModifyPropsDefault(elementoBase,[0],[1],[17],[4])
            elementoBase.innerText= "Atacar"
            ButtonAtaque.style.backgroundImage = "url('../img/Ataque.png')"
            ButtonAtaque.style.backgroundSize = "100%"

            var ButtonDefesa = OctElem.CreateContainerElement("Defesa_bt","conainer-base","card_select","div")
            OctElem.ModifyPropsDefault(ButtonDefesa,[60],[20],[20],[20])
            elementoBase = OctElem.CreateContainerElement("defesa_title","Defesa_bt","title_card","div")
            OctElem.ModifyPropsDefault(elementoBase,[0],[1],[17],[4])
            elementoBase.innerText= "Defender"
            ButtonDefesa.style.backgroundImage = "url('../img/escudo.jpg')"
            ButtonDefesa.style.backgroundSize = "100%"
            
            var ButtonDefesa = OctElem.CreateContainerElement("Especial_bt","conainer-base","card_select","div")
            OctElem.ModifyPropsDefault(ButtonDefesa,[90],[20],[20],[20])
            elementoBase = OctElem.CreateContainerElement("especial_title","Especial_bt","title_card","div")
            OctElem.ModifyPropsDefault(elementoBase,[0],[1],[17],[4])
            elementoBase.innerText= "Especial"
            ButtonDefesa.style.backgroundImage = "url('../img/magia.jpg"
            ButtonDefesa.style.backgroundSize = "100%"

            var avisoEfeitos = OctElem.CreateContainerElement("AvisoEfeitos","conainer-base","aviso01","div")
            OctElem.ModifyPropsDefault(avisoEfeitos,[62],[-58],[80],[20])
        }
    }
    addAtaqueButton(Servicevariavelbatalha,Personagem,Inimigo,variavelbatalha,_Service_Cenabatalha)
    {
        let ButtonAtaque = document.getElementById("Ataque_bt")
        let ButtonDefesa = document.getElementById("Defesa_bt")
        let ButtonEspecial = document.getElementById("Especial_bt")
        var OctElem = new Oct8()
        ButtonAtaque.addEventListener("click",()=>{
            if(variavelbatalha == false && this.Card_ativo == false)
            {
              variavelbatalha = true
              ButtonAtaque.style.opacity = "0.6"
              ButtonAtaque.style.cursor = "not-allowed"
              ButtonDefesa.style.opacity = "0.6"
              ButtonDefesa.style.cursor = "not-allowed"
              ButtonEspecial.style.opacity = "0.6"
              ButtonEspecial.style.cursor = "not-allowed"
              if(Servicevariavelbatalha.CalculoAcao(Personagem[0][3][0])){
                document.getElementById(Personagem[0][0]).classList.add("moveChar_player")
                Servicevariavelbatalha.AdicionarStatusPersonagem("Ataque","aplicou 10 de dano.")
                document.getElementById(Inimigo[0][0]).classList.add("damage")
                let Elememt =  document.getElementById(Inimigo[0][0]+"barraVida")
                let Calc = parseInt(Elememt.style.width) - 4
                Elememt.style.width = Calc+"vh"
              }
              else
              {
                Servicevariavelbatalha.AdicionarStatusAdversario("Ataque","Aplicou 5 de dano.")
                document.getElementById(Inimigo[0][0]).classList.add("moveChar_enemy")
                document.getElementById(Personagem[0][0]).classList.add("damage")
                let Elememt =  document.getElementById(Personagem[0][0]+"barraVida")
                let Calc = parseInt(Elememt.style.width) - 4
                Personagem[0][2] = Personagem[0][2]-4
                Elememt.style.width = Calc+"vh"
              }
              OctElem.CreateEvent(()=>{       
                  document.getElementById(Personagem[0][0]).classList.remove("damage")
                  document.getElementById(Inimigo[0][0]).classList.remove("damage")
                  document.getElementById(Personagem[0][0]).classList.remove("moveChar_player")    
                  document.getElementById(Inimigo[0][0]).classList.remove("moveChar_enemy")              
                  variavelbatalha = false
                  ButtonAtaque.style.opacity = "1"
                  ButtonAtaque.style.cursor = "pointer"
                  
                  ButtonDefesa.style.opacity = "1"
                  ButtonDefesa.style.cursor = "pointer"
  
                  ButtonEspecial.style.opacity = "1"
                  ButtonEspecial.style.cursor = "pointer"
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
        let ButtonEspecial = document.getElementById("Especial_bt")
        var OctElem = new Oct8()
        ButtonDefesa.addEventListener("click",()=>{
            if(variavelbatalha == false  && this.Card_ativo == false)
            {
              variavelbatalha = true
              ButtonAtaque.style.opacity = "0.6"
              ButtonAtaque.style.cursor = "not-allowed"
              ButtonDefesa.style.opacity = "0.6"
              ButtonDefesa.style.cursor = "not-allowed"
              ButtonEspecial.style.opacity = "0.6"
              ButtonEspecial.style.cursor = "not-allowed"

              if(Servicevariavelbatalha.CalculoAcao(Personagem[0][3][1])){
                document.getElementById(Inimigo[0][0]).classList.add("moveChar_enemy")
                Servicevariavelbatalha.AdicionarStatusPersonagem("Defesa","se defendeu.")
              }
              else
              {
                Servicevariavelbatalha.AdicionarStatusAdversario("Ataque","Aplicou 10 de dano.")
                document.getElementById(Inimigo[0][0]).classList.add("moveChar_enemy")
                document.getElementById(Personagem[0][0]).classList.add("damage")
                let Elememt =  document.getElementById(Personagem[0][0]+"barraVida")
                let Calc = parseInt(Elememt.style.width) - 8
                Personagem[0][2] = Personagem[0][2]-8
                Elememt.style.width = Calc+"vh"
              }
              OctElem.CreateEvent(()=>{       
                  document.getElementById(Personagem[0][0]).classList.remove("damage")  
                  document.getElementById(Inimigo[0][0]).classList.remove("moveChar_enemy")  
                  variavelbatalha = false
                  ButtonAtaque.style.opacity = "1"
                  ButtonAtaque.style.cursor = "pointer"
                  
                  ButtonDefesa.style.opacity = "1"
                  ButtonDefesa.style.cursor = "pointer"
  
                  ButtonEspecial.style.opacity = "1"
                  ButtonEspecial.style.cursor = "pointer"
                  console.log(Servicevariavelbatalha._stats_personagem)
                  OctElem.StopEvent()
              },1000)
            }
        },false)
    }

    addEspecialButton(Servicevariavelbatalha,Personagem,Inimigo,variavelbatalha,_Service_Cenabatalha)
    {
      let ButtonAtaque = document.getElementById("Ataque_bt")
      let ButtonDefesa = document.getElementById("Defesa_bt")
      let ButtonEspecial = document.getElementById("Especial_bt")
      var OctElem = new Oct8()
      ButtonEspecial.addEventListener("click",()=>{
          if(variavelbatalha == false && this.Card_ativo == false)
          {
            variavelbatalha = true
            ButtonAtaque.style.opacity = "0.6"
            ButtonAtaque.style.cursor = "not-allowed"
            ButtonDefesa.style.opacity = "0.6"
            ButtonDefesa.style.cursor = "not-allowed"
            ButtonEspecial.style.opacity = "0.6"
            ButtonEspecial.style.cursor = "not-allowed"
            if(Servicevariavelbatalha.CalculoAcao(Personagem[0][3][0])){
              Servicevariavelbatalha.AdicionarStatusPersonagem("Especial"," recuperou 5 de energia.")
              let Elememt =  document.getElementById(Personagem[0][0]+"barraVida")
              let Calc = parseInt(Elememt.style.width) + 2
              Personagem[0][2] = Personagem[0][2]+5
              Elememt.style.width = Calc+"vh"
            }
            else 
            {
              Servicevariavelbatalha.AdicionarStatusAdversario("Especial","Aplicou 2 de dano.")
              document.getElementById(Inimigo[0][0]).classList.add("moveChar_enemy")
              document.getElementById(Personagem[0][0]).classList.add("damage")
              let Elememt =  document.getElementById(Personagem[0][0]+"barraVida")
              let Calc = parseInt(Elememt.style.width) - 1
              Personagem[0][2] = Personagem[0][2]-2
              Elememt.style.width = Calc+"vh"
            }
            OctElem.CreateEvent(()=>{       
                document.getElementById(Personagem[0][0]).classList.remove("damage")
                document.getElementById(Inimigo[0][0]).classList.remove("damage")
                document.getElementById(Inimigo[0][0]).classList.remove("moveChar_enemy") 
                variavelbatalha = false
                ButtonAtaque.style.opacity = "1"
                ButtonAtaque.style.cursor = "pointer"
                
                ButtonDefesa.style.opacity = "1"
                ButtonDefesa.style.cursor = "pointer"

                ButtonEspecial.style.opacity = "1"
                ButtonEspecial.style.cursor = "pointer"
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
        console.log(Personagem[0][0])
        Oct8.AppendObjectFacyotyTo("Personagem",Personagem[0])
        document.getElementById(Personagem[0][0]).addEventListener("click",()=>{
          if(this.Card_ativo == false)
          {
            this.statusCardPersonagem(Personagem)
            this.Card_ativo = true
          }
          
        },false)
        Oct8.AppendObjectFacyotyTo("Inimigo",inimigo[0])
        ServiceCenas.renderHudBasic("")
        ServiceCenas.addAtaqueButton(Servicevariavelbatalha,Personagem,inimigo,variavelbatalha)
        ServiceCenas.addDefesaButton(Servicevariavelbatalha,Personagem,inimigo,variavelbatalha)
        ServiceCenas.addEspecialButton(Servicevariavelbatalha,Personagem,inimigo,variavelbatalha)
        Servicevariavelbatalha.BatalhaAtiva()

    }

    statusCardPersonagem(PerosnagemService){
      let OctElem = new Oct8()
      let elemento_generico
      let cardPersonagem = OctElem.CreateContainerElement("Personagem_Card","conainer-base","cardButtonStatus","div")
      OctElem.ModifyPropsDefault(cardPersonagem,[56],[-20],[90],[80])
      elemento_generico = OctElem.CreateContainerElement("Close_card_bt","Personagem_Card","close_card","button")
      elemento_generico.innerText="X"
      
      OctElem.ModifyPropsDefault(elemento_generico,[83],[2],[6],[6])
      elemento_generico = OctElem.CreateContainerElement("","Personagem_Card","","h1")
      OctElem.ModifyPropsDefault(elemento_generico,null,null,null,null)
      elemento_generico.innerText = PerosnagemService[0][0]

      elemento_generico = OctElem.CreateContainerElement("","Personagem_Card","image_Card","div")
      OctElem.ModifyPropsDefault(elemento_generico,null,null,[20],[20])
      elemento_generico.style.backgroundImage = "url("+PerosnagemService[0][1]+")"

      elemento_generico =OctElem.CreateContainerElement("","Personagem_Card","","h3")
      console.log(PerosnagemService[0][2]/2)

      elemento_generico.innerHTML="Vida: "+PerosnagemService[0][2]
      OctElem.ModifyPropsDefault(elemento_generico,null,null,null,null)

      document.getElementById("Close_card_bt").addEventListener("click",()=>{
        this.Card_ativo = false
        cardPersonagem.remove()
      })
    }
}

export default cenas
