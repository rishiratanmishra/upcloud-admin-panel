import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';

interface SortModalProps {
  open: boolean;
  onClose: () => void;

  // Current App-level sort order & gender
  sortOrder: 'asc' | 'desc';
  onChangeSortOrder: (order: 'asc' | 'desc') => void;

  gender?: 'Male' | 'Female';
  onChangeGender: (gender?: 'Male' | 'Female') => void;
}

const SortModal: React.FC<SortModalProps> = ({
  open,
  onClose,
  sortOrder,
  onChangeSortOrder,
  gender,
  onChangeGender,
}) => {
  // Local temp state for modal editing
  const [tempSortOrder, setTempSortOrder] = useState<'asc' | 'desc'>(sortOrder);
  const [tempGender, setTempGender] = useState<'Male' | 'Female' | undefined>(gender);

  // Sync modal state when modal opens
  useEffect(() => {
    if (open) {
      setTempSortOrder(sortOrder);
      setTempGender(gender);
    }
  }, [open, sortOrder, gender]);

  // Apply changes to App state
  const handleApply = () => {
    onChangeSortOrder(tempSortOrder);
    onChangeGender(tempGender);
    onClose();
  };

  // Reset to defaults
  const handleReset = () => {
    setTempSortOrder('asc');
    setTempGender(undefined);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Sort & Filter</DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Sort Order</FormLabel>
            <RadioGroup
              value={tempSortOrder}
              onChange={(e) => setTempSortOrder(e.target.value as 'asc' | 'desc')}
            >
              <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
              <FormControlLabel value="desc" control={<Radio />} label="Descending" />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              value={tempGender ?? ''}
              onChange={(e) =>
                setTempGender(e.target.value === '' ? undefined : (e.target.value as 'Male' | 'Female'))
              }
            >
              <FormControlLabel value="" control={<Radio />} label="All" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleReset} color="secondary" variant="outlined">
          Reset
        </Button>
        <Button onClick={handleApply} color="primary" variant="contained">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SortModal;
