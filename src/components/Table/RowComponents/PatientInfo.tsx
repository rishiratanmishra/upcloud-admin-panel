import React from 'react';
import { Typography } from '@mui/material';
import type { Appointment } from '../../../types/appointment';

interface Props { patient: Appointment; }

const PatientInfo: React.FC<Props> = ({ patient }) => (
  <>
    <Typography fontWeight="bold">{patient.patientName}</Typography>
    <Typography variant="body2">{patient.phone}</Typography>
  </>
);

export default PatientInfo;
