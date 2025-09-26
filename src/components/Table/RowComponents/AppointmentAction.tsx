import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import type { Appointment } from "../../../types/appointment";
import AppointmentDetailsModal from "../../Modals/AppointmentDetailsModal";

interface Props {
  appointment: Appointment;
}

const AppointmentAction: React.FC<Props> = ({ appointment }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Typography variant="body2">{appointment.id}</Typography>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={() => setOpen(true)}
      >
        View Details
      </Button>

      <AppointmentDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        appointment={appointment}
      />
    </>
  );
};

export default AppointmentAction;
