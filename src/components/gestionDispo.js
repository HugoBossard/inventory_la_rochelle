/* eslint-disable */

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { BoutonRetour } from "./BoutonRetour";

export function GestionDispo() {
    const navigate = useNavigate(); 

    const params = useParams();
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

      const [commentaire, setCommentaire] = useState([{libelle:""}]);


      useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const commentaireInfo = await (
            await fetch("http://localhost:4000/api/materiels/commentaire/"+params.id,
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
          setCommentaire(commentaireInfo);

        };
    
        dataFetch();
      }, []);

    function passageDispo(){
        fetch("http://localhost:4000/api/materiels/disponible/"+params.id,
        {
            method:'POST',
            mode: 'cors',
            headers: {
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        }).then(()=>{navigate('/')}).catch(error=>{console.log(error)})
    }

	return (
	 <div className="nouvelEmprunt">
        <h3 className="title is-3">Nom: {materiel.nomProduit}</h3><br></br>
        <div className="box">
            <div className="columns">
                <div className="column is-full">
                    <textarea id="commentaire" className="textarea" placeholder="commentaire ici" defaultValue={commentaire[0].libelle} readOnly></textarea>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half"><BoutonRetour></BoutonRetour></div>
                <div className="column is-half">
                    <button className="button is-link" id="button-center" onClick={passageDispo}>Rendre disponible</button>
                </div>
            </div>

        </div>
     </div>
	);
}