export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  sex: 'Male' | 'Female';
  age: number;
  date: string;
  time: string;
  doctor: string;
  reason: string;
  paymentMethod: 'UPI' | 'Cash';
  amount: number;
  day: number;
  discount: number;
  city: string;
  state: string;
  appointmentType: 'QR' | 'Online';
  status: 'Pending' | 'Completed' | 'Confirmed' | 'Cancel' | 'Dismissed' | 'Failed';
}
