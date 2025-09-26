import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Box, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import type { DateRange } from '@mui/x-date-pickers-pro';

interface CalendarModalProps {
  open: boolean;
  onClose: () => void;
  onSelectRange: (range: DateRange<Date>) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ open, onClose, onSelectRange }) => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  const handleApply = () => {
    onSelectRange(value);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Date Range</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Start Date"
            endText="End Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(startProps, endProps) => (
              <Box display="flex" gap={2} mt={1}>
                <TextField {...startProps} fullWidth />
                <TextField {...endProps} fullWidth />
              </Box>
            )}
          />
        </LocalizationProvider>

        <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleApply}>
            Apply
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
