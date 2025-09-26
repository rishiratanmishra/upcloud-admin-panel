import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import type { Appointment } from '../../types/appointment';
import PatientInfo from './RowComponents/PatientInfo';
import AgeSexInfo from './RowComponents/AgeSexInfo';
import DateTimeInfo from './RowComponents/DateTimeInfo';
import DoctorInfo from './RowComponents/DoctorInfo';
import PaymentInfo from './RowComponents/PaymentInfo';
import LocationTypeInfo from './RowComponents/LocationTypeInfo';
import AppointmentAction from './RowComponents/AppointmentAction';

interface Props {
  appointment: Appointment;
}

const AppointmentRow: React.FC<Props> = ({ appointment }) => (
  <TableRow hover>
    <TableCell><PatientInfo patient={appointment} /></TableCell>
    <TableCell><AgeSexInfo patient={appointment} /></TableCell>
    <TableCell><DateTimeInfo appointment={appointment} /></TableCell>
    <TableCell><DoctorInfo appointment={appointment} /></TableCell>
    <TableCell><PaymentInfo appointment={appointment} /></TableCell>
    <TableCell><LocationTypeInfo appointment={appointment} /></TableCell>
    <TableCell><AppointmentAction appointment={appointment} /></TableCell>
  </TableRow>
);

export default React.memo(AppointmentRow);
