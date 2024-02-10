/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ListMaterielsEmprunter (props) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch("http://localhost:4000/api/materiels/emprunter",
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
          setData(data);
        };
    
        dataFetch();
      }, []);

    return(
        <div className='listMatEmpr'>
            <h3 className="title is-3">Liste des MacBook empruntés</h3>
            <div className="tableContent">
                <table id="tableMatEmpr" className="table is-bordered is-striped">
                    <thead >
                        <tr >
                            <th>Nom</th>
                            <th>Nom emprunteur</th>
                            <th>Date prévue</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map(element => {
                        return(
                            <tr key={element.id}>
                                <th>{ element.nomProduit }</th>
                                <th>{ element.Emprunts[0].nomEmprunteur+'-'+element.Emprunts[0].groupe }</th>
                                <th>{new Date(element.Emprunts[0].dateRetourPrevu).getUTCDate()+'/'+(new Date(element.Emprunts[0].dateRetourPrevu).getUTCMonth()+1)+'/'+new Date(element.Emprunts[0].dateRetourPrevu).getUTCFullYear() }</th>
                                <th className="emptyCase"><button className='button is-link' onClick={()=>{navigate('/retourMateriel/'+element.id)}}>Retour</button></th>
                                
                            </tr> 
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        )
}
