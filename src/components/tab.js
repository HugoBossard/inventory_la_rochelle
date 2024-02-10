import React from "react";
export function Tab(props) {
	return (
	 <table class="table">
		<thead>
			<tr>
			 <th>Nom</th>
			 <th></th>
			</tr>
		</thead>
		<tbody>{props.data.materiels.map(element=>{
            return(
                <tr>
                    <th>{element.nomProduit}</th>
                    <td>
                    <a>
                        <button class="button is-link is-outlined">Emprunter</button>
                    </a>
                    </td>
                </tr>
            )
        })}</tbody>
	 </table>
	);
}
