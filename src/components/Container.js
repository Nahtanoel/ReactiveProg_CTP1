import {useState } from "react";
import LaRechercheInvite from "./LaRechercheInvite";



const obj =require('../data/invite.json');


function Container(){

    const [typeInvite,SetTypeInvite] = useState("etudiant")


    const salutation = () =>{
        let ret = "";
        if(typeInvite==="etudiant")  ret ="Yo l'étudiant"
        else if(typeInvite==="enseignant permanent")  ret ="Bonjour les prof permanent"
        else if(typeInvite==="enseignant contractuel")  ret ="Bonjour les prof contractuel"
        else if(typeInvite==="intervenant externe")  ret ="Bonjour les inter externe"

        return ret;
    }



    const monnomsaffiche = (event) => {
        event.preventDefault();

        let trouve = false;
        obj.forEach((person) => {
            if(person.name ===event.target['nom'].value){
                alert(`🎊 Bienvenue à l'ESGI PARTY ! ${event.target['nom'].value} et Vous êtes ${salutation(typeInvite)}! 🎊`);
                trouve = true;
                person.present=true;
                console.log(person)
            }
        });
        if(trouve===false) alert("Vous n'êtes pas invité desolé")
    }

    return(
        <div>
        <form className="formulaire" onSubmit={monnomsaffiche}>

            <div className="nameGuest">
                <input type="text" name ="nom" placeholder="Entrez votre nom"/>
            </div>
            
            <div className="liste">
                <select value={typeInvite} name="listeAChoix" onChange={(e)=>{SetTypeInvite(e.target.value)}}>
                    <option value="etudiant">etudiant</option>
                    <option value="enseignant permanent">enseignant permanent</option>
                    <option value="enseignant contractuel">enseignant contractuel</option>
                    <option value="intervenant externe">intervenant externe</option>
                </select>
            </div>

            <div className="signIn">

                <label>
                    S'enregistrer :
                </label>
                <input type="submit" value="Allons-y" />
            </div>

            <br></br>
            <LaRechercheInvite />
            

        </form>
        </div>
    )
}

export default Container;