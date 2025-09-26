import { useMemo } from 'react';
import type { Appointment } from '../../types/appointment';

type SortOption = 'Amount' | 'Name' | 'Date';

export default function useAppointments(
  data: Appointment[],
  statusFilter: Appointment['status'],
  sortBy: SortOption,
  cityFilter: string,
  stateFilter: string,
  appointmentTypeFilter: string[],
  paymentMethodFilter: string[],
  genderFilter?: 'Male' | 'Female',
  sortOrder: 'asc' | 'desc' = 'asc',
  searchQuery: string = '',
  dateRange: [Date | null, Date | null] = [null, null]
) {
  return useMemo(() => {
    let filtered = data;

    if (statusFilter) {
      if (statusFilter === 'Failed') {
        filtered = filtered.filter(
          (a) =>
            a.status === 'Failed' ||
            a.status === 'Cancel' ||
            a.status === 'Dismissed'
        );
      } else {
        filtered = filtered.filter((a) => a.status === statusFilter);
      }
    }

    if (cityFilter) filtered = filtered.filter((a) => a.city === cityFilter);
    if (stateFilter) filtered = filtered.filter((a) => a.state === stateFilter);
    if (appointmentTypeFilter.length > 0)
      filtered = filtered.filter((a) =>
        appointmentTypeFilter.includes(a.appointmentType)
      );
    if (paymentMethodFilter.length > 0)
      filtered = filtered.filter((a) =>
        paymentMethodFilter.includes(a.paymentMethod)
      );
    if (genderFilter) filtered = filtered.filter((a) => a.sex === genderFilter);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          (a.invoiceNumber?.toLowerCase().includes(q) ?? false) ||
          (a.patientName?.toLowerCase().includes(q) ?? false) ||
          (a.amount?.toString().includes(q) ?? false)
      );
    }

    const [start, end] = dateRange;
    if (start && end) {
      filtered = filtered.filter((a) => {
        const [day, month, year] = a.date.split('-').map(Number);
        const d = new Date(year, month - 1, day);
        return d >= start && d <= end;
      });
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'Amount':
          return a.amount - b.amount;
        case 'Name':
          return a.patientName.localeCompare(b.patientName);
        case 'Date':
        default:
          return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }, [
    data,
    statusFilter,
    sortBy,
    cityFilter,
    stateFilter,
    appointmentTypeFilter,
    paymentMethodFilter,
    genderFilter,
    sortOrder,
    searchQuery,
    dateRange,
  ]);
}
