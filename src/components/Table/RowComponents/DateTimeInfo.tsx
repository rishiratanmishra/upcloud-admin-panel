import React from 'react';
import { Typography, Box } from '@mui/material';
import type { Appointment } from '../../../types/appointment';

interface Props { appointment: Appointment; }

const DateTimeInfo: React.FC<Props> = ({ appointment }) => (
  <>
    <Typography>{appointment.date}</Typography>
    <Box display="inline-block" px={1.5} py={0.5} borderRadius="16px" border={1} borderColor="grey.400" textAlign="center">
      <Typography variant="body2">{appointment.time}</Typography>
    </Box>
  </>
);

export default DateTimeInfo;
