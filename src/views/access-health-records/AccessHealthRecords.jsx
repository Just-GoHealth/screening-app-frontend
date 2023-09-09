import React, { useState } from "react";
import { IconButton, Button, Box, CircularProgress } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { AccessAndAdd } from "../../shared/components/access-add/AccessAndAdd";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useInAppNavigation } from "../../shared/custom-hooks/useInAppNavigation";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
// import Cookies from "js-cookie";

export const AccessHealthRecords = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { handleGoBack, navigate } = useInAppNavigation();
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const password = event.target[0].value;

    axios
      .post("https://screening-tool-api.onrender.com/schools", { password })
      .then((res) => {
        setIsLoading(false);
        setIsAuthenticated(true);
        Cookies.set("isAuthenticated", true, { sameSite: "Strict" });
        toast.success("Welcome Back!");
        navigate("/all-health-records");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-8 rounded-xl border-[#993399] p-4">
          <AccessAndAdd
            onLeftIconClick={handleGoBack}
            heading="Access Health Records"
          />
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
                  {isLoading ? (
                    <CircularProgress sx={{ color: "#f4eaf4" }} size={24} />
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
