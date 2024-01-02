import { observer } from "mobx-react-lite";
import AdminBusinessToShow from './adminDetailsToShow'
import AdminInputLogin from "./adminInputLogin"
import BusinessData from '../mobx/businessMBX'

const AdminWellcom = observer(() => {

  return (<>
    {!BusinessData.isLogin ?
      <>
        <h1>AdminWellcom</h1>
        <AdminInputLogin ></AdminInputLogin>
      </>
      : <><AdminBusinessToShow></AdminBusinessToShow>
      </>}
  </>)

})
export default AdminWellcom