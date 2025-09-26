import React, { useState } from 'react';
import {
  Dialog,
  Button,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import type { DateRange } from '@mui/x-date-pickers-pro';

interface CalendarModalProps {
  open: boolean;
  onClose: () => void;
  onSelectRange: (range: DateRange<Date>) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  open,
  onClose,
  onSelectRange,
}) => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  // Predefined ranges
  const quickRanges = [
    { label: 'Last 7 days', days: 7 },
    { label: 'Last 14 days', days: 14 },
    { label: 'Last 30 days', days: 30 },
    { label: 'Last 3 months', days: 90 },
    { label: 'Last 12 months', days: 365 },
    { label: 'Select Time', days: 0 },
    { label: 'Custom', days: 0 },
  ];

  const handleQuickSelect = (days: number) => {
    if (days === 0) {
      setValue([null, null]);
      return;
    }
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days + 1);
    setValue([start, end]);
  };

  const handleApply = () => {
    onSelectRange(value);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box display="flex" minHeight={400}>
        {/* Sidebar with quick selects */}
        <Box
          width={200}
          borderRight="1px solid #e0e0e0"
          bgcolor="#fafafa"
          display="flex"
          flexDirection="column"
        >
          <List disablePadding>
            {quickRanges.map((range) => (
              <ListItemButton
                key={range.label}
                onClick={() => handleQuickSelect(range.days)}
                sx={{
                  py: 1.2,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(103, 58, 183, 0.1)', // purple highlight
                    color: '#673ab7',
                  },
                }}
              >
                <ListItemText
                  primary={range.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: 'text.primary',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex={1} display="flex" flexDirection="column" p={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangeCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>

          {/* Footer Buttons */}
          <Box mt="auto" display="flex" justifyContent="flex-end" gap={2}>
            <Button
              onClick={onClose}
              variant="outlined"
              sx={{ textTransform: 'none', borderRadius: 1 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleApply}
              sx={{
                textTransform: 'none',
                borderRadius: 1,
                bgcolor: '#673ab7', // purple
                '&:hover': { bgcolor: '#5e35b1' },
              }}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CalendarModal;
