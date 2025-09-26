import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  Chip,
  Avatar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  onClose: () => void;
  appointment: any | null;
}

const AppointmentDetailsModal: React.FC<Props> = ({
  open,
  onClose,
  appointment,
}) => {
  if (!appointment) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 1,
        }}
      >
        <Box>
          <Typography fontWeight="bold">MYSELF</Typography>
          <Typography variant="body2" color="text.secondary">
            Pl. Id: {appointment.id}
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 2 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="body2">
            Date of Booking : <b>23 TUE, Feb 21</b>
          </Typography>
          <Typography variant="body2">
            Time of Booking : <b>21:11 PM</b>
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            <Avatar
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face"
              alt="Dr. Gouri Karrunarkar"
              sx={{ width: 48, height: 48 }}
            />
            <Box>
              <Typography fontWeight="bold">
                {appointment.doctor || 'Dr. Gouri Karrunarkar'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Neurosurgeon
              </Typography>
            </Box>
          </Box>
          <Box textAlign="right">
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent="flex-end"
              mb={0.5}
            >
              <Typography variant="body2">In-Clinic</Typography>
              <Chip
                label="QR"
                size="small"
                sx={{ backgroundColor: '#e0e0e0', color: '#666' }}
              />
              <Chip label="UPI" size="small" color="info" />
              <Typography fontWeight="bold">305.5</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent="flex-end"
            >
              <Typography variant="body2">Solapur - MAH</Typography>
              <Typography
                variant="body2"
                sx={{ backgroundColor: '#f5f5f5', px: 1, borderRadius: 1 }}
              >
                Day - 1
              </Typography>
              <Typography variant="body2" color="success.main">
                15%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box>
            <Typography fontWeight="bold">
              {appointment?.patientName || 'Pt. Swapnel Katare'}
            </Typography>
            <Typography variant="body2">
              {appointment?.phone || '8087929577'}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2">Female</Typography>
            <Box
              sx={{
                border: 1,
                borderColor: 'grey.300',
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              <Typography variant="body2">25</Typography>
            </Box>
            <Typography variant="body2">19 Wed, Jan 25</Typography>
            <Box
              sx={{
                border: 1,
                borderColor: 'grey.300',
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              <Typography variant="body2">12:30 PM</Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Avatar
            sx={{ width: 40, height: 40, backgroundColor: '#f5f5f5' }}
            variant="rounded"
          >
            🏥
          </Avatar>
          <Box flex={1}>
            <Typography fontWeight="bold">
              Million Smiles Dental Clinic
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solapur - Saat Rasta
            </Typography>
          </Box>
          <Box display="flex" gap={4}>
            <Box>
              <Typography variant="body2">8087929577</Typography>
              <Typography variant="body2">8435465111</Typography>
            </Box>
            <Box>
              <Typography variant="body2">9985674321</Typography>
              <Typography variant="body2">9255071125</Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            ›
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2"> Total Fees</Typography>
            <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
              ₹350
            </Typography>
            <Typography variant="body2">₹303.5</Typography>
            <Chip
              label="You Saved ₹47.5"
              size="small"
              sx={{ backgroundColor: '#2196f3', color: 'white' }}
            />
          </Box>
          <Box textAlign="right">
            <Typography variant="body2" fontWeight="bold">
              Patient Paid
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ›
            </Typography>
          </Box>
        </Box>
        <Typography variant="caption" color="text.secondary">
          Incl. taxes and charges
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{ justifyContent: 'space-between', px: 2, pb: 2, gap: 2 }}
      >
        <Button
          variant="outlined"
          color="error"
          startIcon={<CloseIcon />}
          sx={{ flex: 1, py: 1.5 }}
        >
          Cancel Appointment
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<span>🔄</span>}
          sx={{ flex: 1, py: 0.5 }}
        >
          Refresh Status
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentDetailsModal;
