/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ListMaterielsAttente (props) {
    
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    

    

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch("http://localhost:4000/api/materiels/attente",
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

      function nav(id){
        const navigate = useNavigate(); 
        navigate('/nouveauMateriel/'+id);
     }

    return(
        <div className='listMatDispo'>
            <h3 className="title is-3">Zone d'attente</h3>
            <div className="tableContent">
                <table id="tableMatDispo" className="table is-bordered is-striped">
                    <thead >
                        <tr >
                            <th>Nom</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map(element => {
                        return(
                            <tr key={element.id}>
                                <th>{ element.nomProduit }</th>
                                <th className="emptyCase"><button className='button is-link' onClick={()=>{navigate('/passageDispo/'+element.id)}}>Rendre disponible</button></th>
                            </tr> 
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        )
}