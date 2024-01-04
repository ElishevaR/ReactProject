import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function Home() {
    return (<>

        <p>
            <Link to="admin">admin  </Link>
               |   
            <Link to="client">  client</Link>
        </p>
        <Outlet></Outlet>
    
    </>)
}