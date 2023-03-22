import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"
import Oct8Events from "../Oct8-alpha/Oct8/Oct8Events.js"

class Personagens{
   personagens = {
    aliados:[["Heroi","../img/image832.png"],"Mago"]
   }
}

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

var OctElem = new Oct8()
let Chars = new Personagens()

function CreateChar(persogem){
   var char = OctElem.CreateContainerElement(persogem[0],"conainer-base",null,"div")
   OctElem.ModifyPropsDefault(char,[50],[40],[40],[40])
   char.style.backgroundImage = "url('"+persogem[1]+"')"
   char.style.backgroundSize = "100%"

}

OctElem.CreateObjectFactory(CreateChar,"Personagem")
OctElem.AppendObjectFacyotyTo("Personagem",Chars.personagens.aliados[0])


let game_world = new Game()
game_world.main()