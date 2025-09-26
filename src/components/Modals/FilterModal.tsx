import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  onClose: () => void;
  status: string;
  onChangeStatus: (value: string) => void;
  city: string;
  onChangeCity: (value: string) => void;
  state: string;
  onChangeState: (value: string) => void;
  appointmentTypes: string[];
  onChangeAppointmentTypes: (values: string[]) => void;
  paymentMethods: string[];
  onChangePaymentMethods: (values: string[]) => void;
  onResetFilters: () => void;
  onApplyFilters: () => void;
}

const FilterModal: React.FC<Props> = ({
  open,
  onClose,
  status,
  onChangeStatus,
  city,
  onChangeCity,
  state,
  onChangeState,
  appointmentTypes,
  onChangeAppointmentTypes,
  paymentMethods,
  onChangePaymentMethods,
  onResetFilters,
  onApplyFilters,
}) => {
  const [tempStatus, setTempStatus] = useState(status);
  const [tempCity, setTempCity] = useState(city);
  const [tempState, setTempState] = useState(state);
  const [tempAppointmentTypes, setTempAppointmentTypes] =
    useState(appointmentTypes);
  const [tempPaymentMethods, setTempPaymentMethods] = useState(paymentMethods);

  useEffect(() => {
    if (open) {
      setTempStatus(status);
      setTempCity(city);
      setTempState(state);
      setTempAppointmentTypes(appointmentTypes);
      setTempPaymentMethods(paymentMethods);
    }
  }, [open, status, city, state, appointmentTypes, paymentMethods]);

  const toggleCheckbox = (
    value: string,
    current: string[],
    callback: (vals: string[]) => void
  ) => {
    if (current.includes(value)) {
      callback(current.filter((v) => v !== value));
    } else {
      callback([...current, value]);
    }
  };

  const handleApply = () => {
    onChangeStatus(tempStatus);
    onChangeCity(tempCity);
    onChangeState(tempState);
    onChangeAppointmentTypes(tempAppointmentTypes);
    onChangePaymentMethods(tempPaymentMethods);
    onApplyFilters();
    onClose();
  };

  const handleReset = () => {
    setTempStatus('');
    setTempCity('');
    setTempState('');
    setTempAppointmentTypes([]);
    setTempPaymentMethods([]);
    onResetFilters();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Filter
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ pt: 2, pb: 2 }}>
        {/* Status */}
        <FormControl fullWidth margin="dense" variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            value={tempStatus}
            onChange={(e) => setTempStatus(e.target.value)}
            label="Status"
          >
            {[
              'Pending',
              'Completed',
              'Confirmed',
              'Cancel',
              'Dismissed',
              'Failed',
            ].map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* City */}
        <FormControl fullWidth margin="dense" variant="outlined">
          <InputLabel>City</InputLabel>
          <Select
            value={tempCity}
            onChange={(e) => setTempCity(e.target.value)}
            label="City"
          >
            {['Mumbai', 'Delhi', 'Bangalore'].map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* State */}
        <FormControl fullWidth margin="dense" variant="outlined">
          <InputLabel>State</InputLabel>
          <Select
            value={tempState}
            onChange={(e) => setTempState(e.target.value)}
            label="State"
          >
            {['Maharashtra', 'Karnataka', 'Delhi'].map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Appointment Types */}
        <Box mt={2}>
          <FormLabel component="legend" sx={{ mb: 1, fontWeight: 600 }}>
            Appointment Types
          </FormLabel>
          <FormGroup row>
            {['QR', 'Online'].map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    checked={tempAppointmentTypes.includes(type)}
                    onChange={() =>
                      toggleCheckbox(
                        type,
                        tempAppointmentTypes,
                        setTempAppointmentTypes
                      )
                    }
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>
        </Box>

        {/* Payment Methods */}
        <Box mt={2}>
          <FormLabel component="legend" sx={{ mb: 1, fontWeight: 600 }}>
            Payment Methods
          </FormLabel>
          <FormGroup row>
            {['Cash', 'UPI'].map((method) => (
              <FormControlLabel
                key={method}
                control={
                  <Checkbox
                    checked={tempPaymentMethods.includes(method)}
                    onChange={() =>
                      toggleCheckbox(
                        method,
                        tempPaymentMethods,
                        setTempPaymentMethods
                      )
                    }
                  />
                }
                label={method}
              />
            ))}
          </FormGroup>
        </Box>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ px: 3, py: 2, justifyContent: 'flex-end', gap: 1 }}>
        <Button onClick={handleReset} color="secondary" variant="outlined">
          Reset
        </Button>
        <Button onClick={handleApply} color="primary" variant="contained">
          Apply Filter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterModal;
