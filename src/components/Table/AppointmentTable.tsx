import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AppointmentRow from './AppointmentRow';
import type { Appointment } from '../../types/appointment';

interface Props {
  data: Appointment[];
}

const AppointmentTable: React.FC<Props> = ({ data }) => (
  <TableContainer component={Paper} sx={{ p: 0, m: 0 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Patients Name & Registered Ph. No</TableCell>
          <TableCell>Sex & Age</TableCell>
          <TableCell>Date & Time Slot</TableCell>
          <TableCell>Dr’s Name & Dismissal Reason</TableCell>
          <TableCell>Pay & Day of Apt</TableCell>
          <TableCell>City-State & Apt Type</TableCell>
          <TableCell>ID’s</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(appointment => (
          <AppointmentRow key={appointment.id} appointment={appointment} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AppointmentTable;
