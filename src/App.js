import React ,{useState} from "react"
import Form from "./Components/Form"
import Table from "./Components/Table"


function App() {

  const [users,setUsers] = useState([])

  function addUsers(user)
  {
    setUsers((prevUsers)=>{return([...prevUsers,user])})
  }

  function removeUser(id)
  {
    setUsers((prevUsers)=>{return (prevUsers.filter((user,index)=>{return index != id}))})
  }

  function removeUserByInfo(nom,prenom,adresse)
  {
    setUsers((prevUsers)=>{return (prevUsers.filter((user)=>{
      return (user.nom !== nom || user.prenom != prenom || user.adresse !== adresse)}))})
  
  }

  return (
    <div>
      <h2>Person</h2>
      <Form addUser={addUsers} removeUserByInfo={removeUserByInfo}/>
      <table>
        <tr>
          <th>Nom</th>
          <th>Premome</th>
          <th>adresse</th>
          <th>select</th>
        </tr>
        {users.map((user,index)=>{return(<Table key={index} id={index} nom={user.nom} prenom={user.prenom} adresse={user.adresse} removeUser={removeUser} />)})}
        </table>


      
    </div>
  );
}

export default App;
