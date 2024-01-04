import { Fragment, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, Select, MenuItem } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Alert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import AppointmentMBX from '../mobx/appointmentMBX'
import ServiceMBX from '../mobx/servicesMBX'
import dayjs from 'dayjs';
import DialogContentText from '@mui/material/DialogContentText';
import { useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

export default function AppointmentItemToEdit({ setEditAppointment }) {

  const [openError, setOpenError] = useState(false);
  const [openSuccsess, setOpenSuccsess] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dayjs(new Date()));

  const { register,handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    setOpen(true)
    AppointmentMBX.setIsAdd(false)
  }, [])

  const [newAppointment, setNewAppointment] = useState({
    serviceName: "",
    dateTime: "",
    clientName: "",
    clientPhone: "",
    clientEmail: ""
  })

  const submitFunc = async (data) => {
    
    await AppointmentMBX.addAppointment({
      serviceName: newAppointment.serviceName,
      dateTime: new Date(newAppointment.dateTime),
      clientName: data.clientName,
      clientPhone: data.clientPhone,
      clientEmail: data.clientEmail
    })
    
    if (AppointmentMBX.isAdd) {
      setOpen(false)
      setOpenSuccsess(true)
      setOpenError(false);
      // setEditAppointment(false)
        data.target.reset();
       
    }
    else {
      setOpenError(true);
      setOpenSuccsess(false);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (value, field) => {
    setNewAppointment(Object.assign(newAppointment, { [field]: value }));
  }

  return (
    <>
      <Snackbar open={openError} autoHideDuration={6000} onClose={() => setOpenError(false)}>
        <Alert onClose={() => setOpenError(false)} severity="error" sx={{ width: '100%' }}>
          change the date!
        </Alert>
      </Snackbar>

      <Snackbar open={openSuccsess} autoHideDuration={6000} onClose={() => setOpenSuccsess(false)}>
        <Alert onClose={() => setOpenSuccsess(false)} severity="success" sx={{ width: '100%' }}>
          Added!
        </Alert>
      </Snackbar>

      <Fragment>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit(submitFunc)}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                add details to appointment

              </DialogContentText>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Controlled picker"
                  value={date}
                  onChange={(date) => { handleChange(date, 'dateTime') }}
                  disablePast={true}
                />
              </LocalizationProvider>

               <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">pleas select service name</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="serviceName"
                    label="serviceName"
                    onChange={(e)=>handleChange( e.target.value,'serviceName')}
                  >
                    {ServiceMBX.listServices.map((s, index) => <MenuItem value={s.name} key={index}>{s.name}</MenuItem>)}
                  </Select>
                </FormControl>
              </Box> 
     
              <TextField id="outlined-basic" label="clientName" variant="outlined" placeholder="clientName" {...register("clientName", { min: 5 })} />
              <TextField id="outlined-basic" label="clientPhone" variant="outlined" placeholder="clientPhone" {...register("clientPhone", { min: 15 })} />
              <TextField id="outlined-basic" label="clientEmail" variant="outlined" placeholder="clientEmail" {...register("clientEmail", { min: 15 })} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" >send</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    </>
  )

}
