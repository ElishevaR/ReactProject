import { observer } from "mobx-react-lite";
import ServiceItemToShow from './serviceItemToShow'
import ServiceMBX from '../mobx/servicesMBX'
import { useState } from "react";
import AdminServiceToAdd from "./adminServiceToAdd";
import BusinessData from '../mobx/businessMBX'
import './designCards.css'


const AdminServices = observer(() => {

    const [isAdd, setIsAdd] = useState(false)

    return (<>
      <div className="cards">  {ServiceMBX.listServices.map((service, index) => <ServiceItemToShow service={service} key={index} ></ServiceItemToShow>)}</div>
        {BusinessData.isLogin && <button onClick={(e) => setIsAdd(true)}>service</button>}
        {isAdd && <AdminServiceToAdd setIsAdd={setIsAdd}></AdminServiceToAdd>}
    </>
    )
})

export default AdminServices;
