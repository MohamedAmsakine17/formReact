import React ,{useState} from "react"


function InputArea(props)
{
    const [user,setUserData] = useState({
        nom:"",
        prenom:"",
        adresse:"",
    })

    function setData(event)
    {
        const {name , value} = event.target
        setUserData((prevData)=>{return {...prevData,[name]:value}})
    }

    function AddUser(event)
    {
        props.addUser(user)
        setUserData({
            nom:"",
            prenom:"",
            adresse:"",
        })
        event.preventDefault();
    }

    function RemoveUser(event)
    {
        props.removeUserByInfo(user.nom,user.prenom,user.adresse)
        
        event.preventDefault();
    }

    return(
    <form>
        <div>
            <label>Nom</label>
            <input onChange={setData} type="text" name="nom" id="nom" value={user.nom} />
        </div>
        <div>
            <label>Prenom</label>
            <input onChange={setData} type="text" name="prenom" id="prenom" value={user.prenom} />
        </div>
        <div>
            <label>Adresse</label>
            <input onChange={setData} type="text" name="adresse" id="adresse" value={user.adresse} />
        </div>
        <button onClick={AddUser}>Add</button>
        <button onClick={RemoveUser}>Remove</button>
    </form>
    )
}

export default InputArea;