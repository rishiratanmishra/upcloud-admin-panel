import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import type { Appointment } from '../../../types/appointment';

interface Props { appointment: Appointment; }

const PaymentInfo: React.FC<Props> = ({ appointment }) => (
  <>
    <Box display="flex" alignItems="center" gap={1} mb={0.5}>
      <Chip
        label={appointment.paymentMethod}
        color={appointment.paymentMethod === 'Cash' ? 'success' : 'primary'}
        size="small"
      />
      <Typography>{appointment.amount}</Typography>
    </Box>
    <Typography variant="body2">
      Day - {appointment.day}{' '}
      <Box display="inline-flex" alignItems="center" border={1} borderColor="grey.400" borderRadius={1} px={1} py={0.25}>
        {appointment.discount}%
      </Box>
    </Typography>
  </>
);

export default PaymentInfo;
