import { observer } from "mobx-react-lite";
import { useState } from "react"
import BusinessData from '../mobx/businessMBX'
import TextField from '@mui/material/TextField';

const AdminBusinessToEdit = observer((props) => {
  
    const { SetIsEdit } = props;
    const [name, setName] = useState(BusinessData.buisness.name);
    const [adress, setAdress] = useState(BusinessData.buisness.adress);
    const [owner, setOwner] = useState(BusinessData.buisness.owner);
    const [phone, setPhone] = useState(BusinessData.buisness.phone);
    const [description, setDescription] = useState(BusinessData.buisness.description);
    const [logo, setLogo] = useState(BusinessData.buisness.logo);

    function handleSubmit() {
        BusinessData.buisness.name = name
        BusinessData.buisness.adress = adress;
        BusinessData.buisness.owner = owner;
        BusinessData.buisness.phone = phone;
        BusinessData.buisness.description = description;
        BusinessData.buisness.logo = logo;
        BusinessData.sendDataToServer()
        SetIsEdit(false)
    }
    return (
        <form >
        <TextField id="outlined-basic" label="name" variant="outlined" placeholder={BusinessData.buisness.name} onChange={(e) => setName(e.target.value)}/>
        <TextField id="outlined-basic" label="adress" variant="outlined" placeholder={BusinessData.buisness.adress} onChange={(e) => setAdress(e.target.value)}/>
        <TextField id="outlined-basic" label="owner" variant="outlined" placeholder={BusinessData.buisness.owner} onChange={(e) => setOwner(e.target.value)}/>
        <TextField id="outlined-basic" label="phone" variant="outlined" placeholder={BusinessData.buisness.phone} onChange={(e) => setPhone(e.target.value)}/>
        <TextField id="outlined-basic" label="description" variant="outlined" placeholder={BusinessData.buisness.description} onChange={(e) => setDescription(e.target.value)}/>
        <TextField id="outlined-basic" label="logo" variant="outlined" placeholder={BusinessData.buisness.logo} onChange={(e) => setLogo(e.target.value)}/>
            <button onClick={handleSubmit}>submit</button>
        </form>
    )
})
export default AdminBusinessToEdit;
