import { Box } from '@mui/material';
import Sidebar from './components/Layout/Sidebar';
import TopNav from './components/Layout/TopNav';
import AppointmentTable from './components/Table/AppointmentTable';
import { appointments } from './data/appointments';
import useAppointments from './components/hooks/useAppointment';
import { useFilters } from './components/FiltersContext/FiltersContext';

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

  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} bgcolor="#f9fafc" minHeight="100vh">
        <TopNav />
        <AppointmentTable data={sortedAppointments} />
      </Box>
    </Box>
  );
}

export default App;
