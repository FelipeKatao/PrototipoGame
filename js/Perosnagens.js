import Oct8 from "../Oct8-alpha/Oct8/Oct8.js"
class Personagens{
    StatusAcerto = {
      baixo:[1,2],
      Media:[3,4,5],
      Alta:[1,6,4,3]
    }
    personagens = {
     aliados:[["Heroi","../img/image832.png",10,
     [this.StatusAcerto.baixo,this.StatusAcerto.baixo,this.StatusAcerto.baixo]]
     ,["Mago"]]
    }
    inimigos= {
     inimigos_base:[["blob","../img/Enemyt.png",4]]
    }

    CreateChar(persogem){
        let  OctElem = new Oct8()
        var char = OctElem.CreateContainerElement(persogem[0],"conainer-base",null,"div")
        OctElem.ModifyPropsDefault(char,[50],[40],[40],[40])
        char.style.backgroundImage = "url('"+persogem[1]+"')"
        char.style.backgroundSize = "100%"
      
        var lifebar = OctElem.CreateContainerElement(persogem[0]+"barraVida","conainer-base","barra-vida","div")
        OctElem.ModifyPropsDefault(lifebar,[50],[1],[(persogem[2]*2)],[4])
      }

      genrateEnemy(inimigo){
        let  OctElem = new Oct8()
        var enemy = OctElem.CreateContainerElement(inimigo[0],"conainer-base","animateChar","div")
        OctElem.ModifyPropsDefault(enemy,[120],[-50],[20],[20])
        enemy.style.backgroundImage = "url('"+inimigo[1]+"')"
        enemy.style.backgroundSize = "100%"
      
        var lifebar = OctElem.CreateContainerElement(inimigo[0]+"barraVida","conainer-base","barra-vida","div")
        OctElem.ModifyPropsDefault(lifebar,[124],[1],[(inimigo[2]*2)],[4])
      }
 }

 export default Personagens