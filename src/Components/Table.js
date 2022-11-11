import React ,{useState} from "react"


function Table(props)
{

    function remove()
    {
        props.removeUser(props.id)
    }

    return(
        <tr>
            <td>{props.nom}</td>
            <td>{props.prenom}</td>
            <td>{props.adresse}</td>
            <td><button onClick={remove}>Remove</button></td>
        </tr>

    )
}

export default Table;