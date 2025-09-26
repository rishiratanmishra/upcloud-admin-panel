import React from 'react';
import { Typography, Box } from '@mui/material';
import type { Appointment } from '../../../types/appointment';

interface Props { patient: Appointment; }

const AgeSexInfo: React.FC<Props> = ({ patient }) => (
  <>
    <Typography>{patient.sex}</Typography>
    <Box display="inline-block" px={1.5} py={0.5} border={1} borderColor="grey.400" textAlign="center">
      <Typography variant="body2">{patient.age}</Typography>
    </Box>
  </>
);

export default AgeSexInfo;
