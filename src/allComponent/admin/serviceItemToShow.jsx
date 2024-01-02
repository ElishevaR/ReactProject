import { observer } from "mobx-react-lite";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ServiceItemToShow =observer( ({ service }) => {

  return (
    <div>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        id: {service.id}
        </Typography>

        <Typography >
        name:{service.name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        description:{service.description}
        </Typography>

        <Typography variant="body2">
          price:{service.price}
        </Typography>

        <Typography variant="body2">
        duration: {service.duration}
        </Typography>
      </CardContent>

    </Card>
  </div>
  )
})

export default ServiceItemToShow;











