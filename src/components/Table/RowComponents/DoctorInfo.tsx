import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import type { Appointment } from '../../../types/appointment';
import { DoctorAvatar } from '../../../assets';

interface Props { appointment: Appointment; }

const DoctorInfo: React.FC<Props> = ({ appointment }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <Avatar src={DoctorAvatar} sx={{ width: 32, height: 32 }} />
    <Box>
      <Typography>{appointment.doctor}</Typography>
      <Typography variant="body2" color="error">{appointment.reason}</Typography>
    </Box>
  </Box>
);

export default DoctorInfo;
