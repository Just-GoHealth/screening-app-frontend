import React from "react";
import { IconButton, Button, Box } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { AccessAndAdd } from "../../shared/components/access-add/AccessAndAdd";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const AccessHealthRecords = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get("password"),
    });
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-8 rounded-xl border-[#993399] p-4">
          <AccessAndAdd heading="Access Health Records" />
          <div className="text-center">
            <p className=" text-[#989898] mt-5">
              Enter password to access Health Records
            </p>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div>
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
      </div>
    </>
  );
};
