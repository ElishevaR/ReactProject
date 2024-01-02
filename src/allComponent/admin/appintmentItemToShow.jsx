import { observer } from "mobx-react-lite";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AppointmentItemToShow = observer(({ appointment,color}) => {

  return (
  <div>
    <Card sx={{ minWidth: 275 }} style={{ color: color }}>
      <CardContent>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          serviceName: {appointment.serviceName}
        </Typography>

        <Typography >
          dateTime:{appointment.dateTime}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          clientName: {appointment.clientName}
        </Typography>

        <Typography variant="body2">
          clientPhone: {appointment.clientPhone}

        </Typography>
      </CardContent>

    </Card>
  </div>)
}
)
export default AppointmentItemToShow;













