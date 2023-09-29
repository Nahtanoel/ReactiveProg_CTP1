function LaRechercheInvite(){
    const obj =require('../data/invite.json');

    const rechercheListe = (event) =>{
        event.preventDefault();
        let ret =""
        obj.forEach((person)=>{
            if(person.present===false){
                ret=ret + person.name + "\r\n"
            }
            if(person.present===true){
                ret=ret + person.name + "\r\n"
            }
        })
        alert(ret)
    }



    return(<>
    
    <div className="Rechercher">

                <label>
                    Rechercher :
                </label>
                <input type="submit" value="Allons-y" onClick={rechercheListe} />
            </div>
    
    
    
    </>)

}

export default LaRechercheInvite;