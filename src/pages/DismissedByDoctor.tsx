import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import AppointmentTable from '../components/Table/AppointmentTable';
import { appointments } from '../data/appointments';

const DismissedByDoctor: React.FC = () => (
  <Container maxWidth="xl" sx={{ py: 3 }}>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h6">Dismissed by Doctor</Typography>
      <Button variant="outlined">Download Report</Button>
    </Box>
    <AppointmentTable data={appointments.filter(a => a.status === 'Dismissed')} />
  </Container>
);

export default DismissedByDoctor;
