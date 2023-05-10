import React from "react";
import { AccessAndAdd } from "../../shared/components/access-add/AccessAndAdd";
import { Box, Button, MenuItem, TextField } from "@mui/material";

export const AddNewSchool = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const schoolTypes = [
    {
      value: "Primary School",
      label: "Primary School",
    },
    {
      value: "Junior High School",
      label: "Junior High School",
    },
    {
      value: "Senior High School",
      label: "Senior High School",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-8 rounded-xl border-[#993399] p-4 w-72 sm:w-[28rem]">
          <AccessAndAdd heading="Add New School" />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="location"
              size="small"
            />
            <TextField
              id="school-select"
              fullWidth
              required
              select
              margin="normal"
              label="School Select"
              defaultValue="Primary School"
              helperText="Please select your school"
              size="small"
            >
              {schoolTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="dense"
              required
              fullWidth
              id="coordinator"
              label="Coordinator"
              name="coordinator"
              autoComplete="name"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact"
              name="contact"
              autoComplete="phone"
              size="small"
            />

            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 10, bgcolor: "#993399" }}
              >
                Continue
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};
