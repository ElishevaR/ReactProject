import { Outlet } from "react-router-dom";
import {  useState } from "react"
import AdminBusinessToEdit from "./adminDetailsToEdit";
import { Link } from "react-router-dom";

export default function AdminOption(){

    const [isEdit, SetIsEdit] = useState(false)

    return( 
        <>
        {!isEdit ?
            <div>
                
               <button onClick={() => SetIsEdit(true)}>edit</button>
                <p>
                    <button><Link to="appointments">appointments</Link></button>
                    <button><Link to="services" >service</Link></button>
                </p>
            </div> : <AdminBusinessToEdit SetIsEdit={SetIsEdit} ></AdminBusinessToEdit>
        }
            <Outlet></Outlet>
        </>
    )
}