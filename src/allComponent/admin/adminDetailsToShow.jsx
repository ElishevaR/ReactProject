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
              //  ברירת מחדל יפה
              // src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F03%2F16%2F21%2F18%2Flogo-2150297_640.png&tbnid=geKaFCLVQIB4oM&vet=1&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flogo%2F&docid=bVXxrJ-DMFgyIM&w=640&h=640&source=sh%2Fx%2Fim%2Fm1%2F1"
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






