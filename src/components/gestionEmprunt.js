/* eslint-disable */
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { BoutonRetour } from "./BoutonRetour";
export function GestionEmprunt() {
    const navigate = useNavigate(); 
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

    
    const params = useParams();
    let data = {
                "nomEmprunteur": "",
                "dateEmprunt": "",
                "dateRetourPrevu": "",
                "groupe":"",
                "commentaire":"",
                "idMateriel": parseInt(params.id)
            }
    function createNewLoan(){
       
        data.dateEmprunt = document.getElementById('dateEmprunt').value;
        data.dateRetourPrevu = document.getElementById('dateRetour').value;
        data.nomEmprunteur =  document.getElementById('nom').value;
        data.commentaire = document.getElementById('commentaire').value;
        data.groupe = document.getElementById('groupe').value;

        fetch("http://localhost:4000/api/materiels/emprunt",
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

    const [materiel, setMateriel] = useState([]);


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

	return (
	 <div className="nouvelEmprunt">
        <h3 className="title is-3">Nom: {materiel.nomProduit}</h3><br></br>
        <div className="box">

            <div className="columns">
                <div className="column is-one-quarter">
                    <label className="label text-vertical-center" id="text-nom">Nom:</label>
                </div>
                <div className="column">
                    <input id='nom' className="input" type="text" placeholder=""/>
                </div>
            </div>
            <div className="columns">
                <div className="column is-one-quarter">
                    <label className="label text-vertical-center" id="text-nom">Groupe:</label>
                </div>
                <div className="column is-half">
                    <input id='groupe' className="input" type="text" placeholder=""/>
                </div>
            </div>

            <div className="columns">
                <div className="column is-one-third">
                    <label className="label text-vertical-center"  id="text-date-emprunt" >Date emprunt:</label>
                    
                </div>
                <div className="column is-one-third">
                    <input id='dateEmprunt' defaultValue={inputdate} className="date-center" type="date" />
 
                </div>
                <div className="column is-one-third"></div>
            </div>

            <div className="columns">
                <div className="column is-one-third">
                    <label className="label text-vertical-center" id="text-date-retour">Date retour prévue :</label>
                </div>
                <div className="column is-one-third">
                    <input id='dateRetour' className="date-center" type="date"/>
                </div>
                <div className="column is-one-third">
                

                </div>
            </div>
            <div className="columns">
                {/* <div className="column is-one-third">
                    <label className="label text-vertical-center" id="text-date-retour">Commentaire:</label>
                    
                </div> */}
                <div className="column is-full">
                    <textarea id="commentaire" className="textarea" placeholder="commentaire ici"></textarea>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half"><BoutonRetour></BoutonRetour></div>
                <div className="column is-half">
                    <button className="button is-link" id="button-center" onClick={createNewLoan}>Emprunter</button>
                </div>
            </div>

        </div>
     </div>
	);
}