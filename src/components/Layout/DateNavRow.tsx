import React from 'react';
import { Box, IconButton, Tabs, Tab, Typography, Button } from '@mui/material';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  CalendarToday,
} from '@mui/icons-material';

interface DateNavRowProps {
  selectedDate: number;
  onChangeDate: (date: number) => void;
  dates: { label: string; value: number; count: number }[];
  onCalendarClick: () => void;
}

const DateNavRow: React.FC<DateNavRowProps> = ({
  selectedDate,
  onChangeDate,
  dates,
  onCalendarClick,
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      {/* Date Navigation */}
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton>
          <ArrowBackIosNew fontSize="small" />
        </IconButton>

        <Tabs
          value={selectedDate}
          onChange={(_, value) => onChangeDate(value)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minWidth: 80,
              fontWeight: 'bold',
              textTransform: 'none',
            },
          }}
        >
          {dates.map((d) => (
            <Tab
              key={d.value}
              value={d.value}
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="body2">{d.label}</Typography>
                  <Box px={1} py={0.3} bgcolor="#f0f0f0" borderRadius={1}>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      color="text.secondary"
                    >
                      {d.count.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
              }
            />
          ))}
        </Tabs>

        <IconButton>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>

      {/* Calendar + Download */}
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={onCalendarClick}>
          <CalendarToday />
        </IconButton>
        <Button variant="outlined" startIcon={<ArrowForwardIos />}>
          Download Report
        </Button>
      </Box>
    </Box>
  );
};

export default DateNavRow;
