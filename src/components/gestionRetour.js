/* eslint-disable */
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { BoutonRetour } from "./BoutonRetour";
import { useNavigate } from "react-router-dom";

export function GestioRetour(){
    const navigate = useNavigate();
    const [materiel, setMateriel] = useState({
        "id": "",
        "nomProduit": "",
        "Emprunts": [
            {
                "id": "",
                "nomEmprunteur": "",
                "groupe": "",
                "dateRetourPrevu": ""
            }
        ]
    });
    const params = useParams();

    let date = new Date();
    let day = date.getUTCDate().toString();
    let month = (date.getUTCMonth()+1).toString();
    if(day.length == 1){
        day = "0"+day;
    }
    if(month.length == 1){
        month = "0"+month;
    }
    let inputdate = date.getUTCFullYear().toString()+'-'+month+'-'+day;


    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const materielInfo = await (
            await fetch("http://localhost:4000/api/materiels/"+params.id,
                {
                    method:'GET',
                    mode: 'cors',
                    headers: {
                    'Access-Control-Allow-Origin':'*'
                    }
                }
            )
          ).json();
    
          // set state when the data received
          setMateriel(materielInfo);
        };
    
        dataFetch();
      }, []);

      function MDdate(MD){
        if(MD.length == 1){
            MD = "0"+month;
        }
        return MD;
      }

    function returnMaterial(){

        let data = {
            "idMateriel": materiel.id,
            "idEmprunt": materiel.Emprunts[0].id,
            "dateRetour": document.getElementById('dateRetour').value,
            "commentairesAttente": document.getElementById('commentaireAttente').value,
            "dateCommentaire": document.getElementById('dateRetour').value
        }

        fetch("http://localhost:4000/api/materiels/retour",
        {
            method:'POST',
            mode: 'cors',
            headers: {
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(()=>{navigate('/')}).catch(error=>{console.log(error)})
    }

    return(
        <div className="nouvelEmprunt">
        <h3 className="title is-3">Nom: {materiel.nomProduit}</h3><br></br>
        <div className="box">

            <div className="columns">
                <div className="column is-one-quarter">
                    <label className="label text-vertical-center" id="text-nom">Nom:</label>
                </div>
                <div className="column">
                    <input id='nom' className="input" type="text" placeholder="" value={materiel.Emprunts[0].nomEmprunteur} readOnly/>
                </div>
            </div>
            <div className="columns">
                <div className="column is-one-quarter">
                    <label className="label text-vertical-center" id="text-nom">Groupe:</label>
                </div>
                <div className="column is-half">
                    <input id='groupe' className="input" type="text" placeholder="" value={materiel.Emprunts[0].groupe} readOnly/>
                </div>
            </div>

            <div className="columns">
                <div className="column is-one-third">
                    <label className="label text-vertical-center"  id="text-date-emprunt" >Date emprunt:</label>
                    
                </div>
                <div className="column is-one-third">
                    <input id='dateEmprunt'  className="date-center" type="date" readOnly value={new Date(materiel.Emprunts[0].dateEmprunt).getUTCFullYear().toString()+'-'+MDdate(new Date(materiel.Emprunts[0].dateEmprunt).getUTCMonth()+1).toString()+'-'+MDdate(new Date(materiel.Emprunts[0].dateEmprunt).getUTCDate()).toString()}/>
 
                </div>
                <div className="column is-one-third"></div>
            </div>

            <div className="columns">
                <div className="column is-one-third">
                    <label className="label text-vertical-center" id="text-date-retour">Date retour prévue :</label>
                </div>
                <div className="column is-one-third">
                    <input id='dateRetourPrevu' className="date-center" type="date" readOnly value={new Date(materiel.Emprunts[0].dateRetourPrevu).getUTCFullYear().toString()+'-'+MDdate(new Date(materiel.Emprunts[0].dateRetourPrevu).getUTCMonth()+1).toString()+'-'+MDdate(new Date(materiel.Emprunts[0].dateRetourPrevu).getUTCDate()).toString()}/>
                    
                </div>
                <div className="column is-one-third">
                

                </div>
            </div>
            <div className="columns">
                <div className="column is-full">
                    <textarea id="commentaire" className="textarea" placeholder="commentaire ici" readOnly value={materiel.Emprunts[0].commentaire}></textarea>
                </div>
            </div>
            <div id="separateur" className="columns">

            </div>
            <div className="columns">
                <div className="column is-one-third">
                    <label className="label text-vertical-center" id="text-nom">Date retour:</label>
                </div>
                <div className="column is-one-third">
                    <input id="dateRetour" className="date-center" type="date" defaultValue={inputdate}/>
                </div>
            </div>
            <div className="columns">
            <div className="column is-full">
                    <textarea id="commentaireAttente" className="textarea" placeholder="commentaire zone d'attente ici"></textarea>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half"><BoutonRetour></BoutonRetour></div>
                <div className="column is-half">
                    <button className="button is-link" id="button-center" onClick={returnMaterial} >Retourner l'emprunt</button>
                </div>
            </div>
        </div>
     </div>
    );
}