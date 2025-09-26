import React from 'react';
import { Typography, Button } from '@mui/material';
import type { Appointment } from '../../../types/appointment';

interface Props { appointment: Appointment; }

const AppointmentAction: React.FC<Props> = ({ appointment }) => (
  <>
    <Typography variant="body2">{appointment.id}</Typography>
    <Button variant="contained" color="error" size="small">View Details</Button>
  </>
);

export default AppointmentAction;
