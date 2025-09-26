import type { Appointment } from "../../types/appointment";

  export const getTitle = (status: Appointment['status']): string => {
    switch (status) {
      case 'Dismissed':
        return 'Dismissed by Doctor';
      case 'Cancel':
        return 'Cancelled by Patient';
      case 'Pending':
        return 'Pending Appointments';
      case 'Confirmed':
        return 'Confirmed Appointments';
      case 'Completed':
        return 'Completed Appointments';
      case 'Failed':
        return 'Failed Appointments';
      default:
        return 'All Appointments';
    }
  };
