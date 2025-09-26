import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  CalendarToday,
  DownloadOutlined,
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
  const selectedIndex = dates.findIndex((d) => d.value === selectedDate);

  const visibleDates = dates.slice(
    Math.max(0, selectedIndex - 3),
    Math.min(dates.length, selectedIndex + 4)
  );

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      {/* Left: Prev/Next buttons + Dates */}
      <Box display="flex" alignItems="center" gap={2}>
        {/* Prev + Next buttons together */}
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={() => {
              if (selectedIndex > 0)
                onChangeDate(dates[selectedIndex - 1].value);
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => {
              if (selectedIndex < dates.length - 1)
                onChangeDate(dates[selectedIndex + 1].value);
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>

        {/* Render 7 date items */}
        <Box display="flex" gap={2}>
          {visibleDates.map((d) => {
            const isSelected = d.value === selectedDate;
            return (
              <Box
                key={d.value}
                onClick={() => onChangeDate(d.value)}
                sx={{
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2" component="span" fontSize={16}>
                  {d.label}
                </Typography>
                <Typography
                  variant="caption"
                  component="span"
                  fontSize={16}
                  sx={{ ml: 0.5, px: 0.5, bgcolor: '#f0f0f5', borderRadius: 1 }}
                >
                  {d.count.toLocaleString()}
                </Typography>
                {isSelected && (
                  <Box mt={0.3} height="2px" bgcolor="teal" borderRadius={1} />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Calendar + Download */}
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={onCalendarClick}>
          <CalendarToday />
        </IconButton>
        <Box
          component="button"
          style={{
            border: '1px solid black',
            padding: '4px 12px',
            borderRadius: '6px',
            background: 'white',
            color: 'black',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <DownloadOutlined fontSize="small" />
          Download Report
        </Box>
      </Box>
    </Box>
  );
};

export default DateNavRow;
