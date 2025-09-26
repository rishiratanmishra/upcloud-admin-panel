import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import type { Appointment } from '../../../types/appointment';
import { QRSvg, PhoneSvg } from '../../../assets';

interface Props { appointment: Appointment; }

const LocationTypeInfo: React.FC<Props> = ({ appointment }) => (
  <>
    <Typography>{appointment.city}</Typography>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="body2">{appointment.state}</Typography>
      <Chip
        label={
          appointment.appointmentType === 'QR' ? (
            <Box display="flex" alignItems="center" gap={0.5}>
              <img src={QRSvg} alt="QR" style={{ width: 16, height: 16 }} />
              <span>QR</span>
            </Box>
          ) : appointment.appointmentType === 'Online' ? (
            <Box display="flex" alignItems="center" gap={0.5}>
              <img src={PhoneSvg} alt="Online" style={{ width: 16, height: 16 }} />
              <span>Online</span>
            </Box>
          ) : appointment.appointmentType
        }
        size="small"
        variant="outlined"
        sx={{ borderRadius: 1 }}
      />
    </Box>
  </>
);

export default LocationTypeInfo;
