import { Box } from '@mui/material';
import Sidebar from './components/Layout/Sidebar';
import TopNav from './components/Layout/TopNav';
import AppointmentTable from './components/Table/AppointmentTable';
import { appointments } from './data/appointments';
import useAppointments from './components/hooks/useAppointment';
import { useFilters } from './components/FiltersContext/FiltersContext';
import { useState } from 'react';

function App() {
  const {
    status,
    city,
    state,
    appointmentTypes,
    paymentMethods,
    gender,
    sortBy,
    sortOrder,
    searchQuery,
    dateRange,
  } = useFilters();

  const sortedAppointments = useAppointments(
    appointments,
    status,
    sortBy,
    city,
    state,
    appointmentTypes,
    paymentMethods,
    gender,
    sortOrder,
    searchQuery,
    dateRange
  );
  const [hideSiderbar, setHideSidebar] = useState(false);
  return (
    <Box display="flex">
      {!hideSiderbar && <Sidebar />}
      <Box flex={1} bgcolor="#f9fafc" minHeight="100vh">
        <TopNav setHideSidebar={setHideSidebar} />
        <AppointmentTable data={sortedAppointments} />
      </Box>
    </Box>
  );
}

export default App;
