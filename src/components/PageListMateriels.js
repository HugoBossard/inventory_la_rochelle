/* eslint-disable */
import React from 'react';
import ListMaterielsDispo from "./ListMaterielsDispo";
import ListMaterielsEmprunter from "./ListMaterielsEmprunte";
import ListMaterielsAttente from './ListMaterielAttente';

export function PageListMateriels(){
    return(
        <div className="columns">
            <div className="column is-one-third">
                <ListMaterielsDispo ></ListMaterielsDispo>
                <ListMaterielsAttente></ListMaterielsAttente>
            </div>
            <div className="column is-two-third">
                <ListMaterielsEmprunter></ListMaterielsEmprunter>
            </div>

            
        </div>
    )
}