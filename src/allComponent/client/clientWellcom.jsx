import { useEffect, useState } from "react";
import AdminBusinessToShow from "../admin/adminDetailsToShow";
import AdminServices from "../admin/adminServices";
import AppointmentItemToEdit from './appointmentItemToEdit'
import AdminAppointments from "../admin/adminAppointments";
import BusinessData from "../mobx/businessMBX";

export default function ClientWellcom() {

    const [editAppointment, setEditAppointment] = useState(false)

    useEffect(() => {
        BusinessData.setIsLogin(false)
    }, [])

    return (<>
        <div>ClientWellcom</div>
        <AdminBusinessToShow></AdminBusinessToShow>
        <AdminServices></AdminServices>
        {!editAppointment ? <button onClick={() => { setEditAppointment(true) }}>appointment </button> : <AppointmentItemToEdit setEditAppointment={setEditAppointment}></AppointmentItemToEdit>}
        <AdminAppointments></AdminAppointments>
    </>)
}