/* eslint-disable */
import { useNavigate } from 'react-router-dom';



export function BoutonRetour(){
    const navigate = useNavigate(); 
    return(
        <button className='button is-outlined is-danger retour' onClick={() =>{navigate('/')}}>Retour</button>
    )
}