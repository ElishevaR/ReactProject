import { observer } from "mobx-react-lite";
import BusinessData from '../mobx/businessMBX'
import AdminOption from "./adminOption";
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import './css.css'

const AdminBusinessToShow = observer(() => {

  return (
    <>
    <div className="detailsBusiness">
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardActions>
          <Card>
            <CardMedia
              component="img"
              alt="logo"
              height="140"
              src="/images/logo.jpg"
              image={BusinessData.buisness.logo}
            />
          </Card>
          <CardContent>

            <Typography level="title-md">Name: {BusinessData.buisness.name}</Typography>
            <Typography level="body-sm">Adress: {BusinessData.buisness.adress}</Typography>
            <Typography level="body-sm">Phone: {BusinessData.buisness.phone}</Typography>
            <Typography level="body-sm">Owner: {BusinessData.buisness.owner}</Typography>
            <Typography level="body-sm">Description: {BusinessData.buisness.description}</Typography>

          </CardContent>
        </CardActions>
      </Card>
      </div>
      {BusinessData.isLogin && <AdminOption></AdminOption>}</>
  )
})

export default AdminBusinessToShow;






