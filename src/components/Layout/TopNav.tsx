import { useState } from 'react';
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { FilterSvg, SortSvg } from '../../assets';
import FilterModal from '../Modals/FilterModal';
import SortModal from '../Modals/SortModal';
import { getTitle } from '../Common/getTitle';
import DateNavRow from './DateNavRow';
import CalendarModal from '../Modals/CalendarModal';
import { useFilters } from '../FiltersContext/FiltersContext';

const dates = [
  { label: '24 Mon', value: 24, count: 3 },
  { label: '25 Tue', value: 25, count: 123 },
  { label: '26 Wed', value: 26, count: 1223 },
  { label: '27 Thu', value: 27, count: 1 },
  { label: '28 Fri', value: 28, count: 9999 },
];

const TopNav = ({ setHideSidebar }: { setHideSidebar: (prev: boolean) => boolean }) => {
  const {
    searchQuery,
    setSearchQuery,
    status,
    setStatus,
    city,
    setCity,
    state,
    setState,
    appointmentTypes,
    setAppointmentTypes,
    paymentMethods,
    setPaymentMethods,
    gender,
    setGender,
    sortOrder,
    setSortOrder,
    dateRange,
    setDateRange,
    resetFilters,
  } = useFilters();

  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number>(26);

  const handleSelectRange = (range: [Date | null, Date | null]) => {
    setDateRange(range);
  };

  const title = getTitle(status);

  return (
    <Box display="flex" flexDirection="column" gap={2} mb={2}>
      {/* -------- Top Row -------- */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {/* Back + Title */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton
            edge="start"
            sx={{ ml: 2 }}
            onClick={() => setHideSidebar((prev) => !prev)}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        {/* Search */}
        <TextField
          placeholder="Search by invoice number, name, amount..."
          size="small"
          sx={{ width: 400 }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Box display="flex" gap={3} alignItems="center">
          <Button
            variant="outlined"
            startIcon={<img src={SortSvg} alt="Sort" width={16} height={16} />}
            sx={{
              textTransform: 'none',
              borderRadius: 1,
              minWidth: 80,
              px: 1.5,
              py: 0.5,
              color: 'black',
              borderColor: 'black',
              '&:hover': {
                borderColor: 'black',
                backgroundColor: '#f0f0f0',
              },
            }}
            onClick={() => setSortOpen(true)}
          >
            Sort
          </Button>

          <Button
            variant="outlined"
            startIcon={
              <img src={FilterSvg} alt="Filter" width={16} height={16} />
            }
            sx={{
              textTransform: 'none',
              borderRadius: 1,
              minWidth: 80,
              px: 1.5,
              py: 0.5,
              color: 'black',
              borderColor: 'black',
              '&:hover': {
                borderColor: 'black',
                backgroundColor: '#f0f0f0',
              },
            }}
            onClick={() => setFilterOpen(true)}
          >
            Filter
          </Button>
        </Box>
      </Box>

      {/* -------- Second Row -------- */}
      <Box sx={{ ml: 2 }}>
        <DateNavRow
          selectedDate={selectedDate}
          onChangeDate={setSelectedDate}
          dates={dates}
          onCalendarClick={() => setCalendarOpen(true)}
        />
      </Box>

      <CalendarModal
        open={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        onSelectRange={handleSelectRange}
      />

      <SortModal
        open={sortOpen}
        onClose={() => setSortOpen(false)}
        sortOrder={sortOrder}
        onChangeSortOrder={setSortOrder}
        gender={gender}
        onChangeGender={setGender}
      />

      <FilterModal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        status={status}
        onChangeStatus={setStatus}
        city={city}
        onChangeCity={setCity}
        state={state}
        onChangeState={setState}
        appointmentTypes={appointmentTypes}
        onChangeAppointmentTypes={setAppointmentTypes}
        paymentMethods={paymentMethods}
        onChangePaymentMethods={setPaymentMethods}
        onResetFilters={resetFilters}
      />
    </Box>
  );
};

export default TopNav;
