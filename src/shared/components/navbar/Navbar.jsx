import React from "react";
import { IconButton } from "@mui/material";
import { AiOutlineLeft } from "react-icons/ai";
import { logo } from "../../../assets/images";
import { useInAppNavigation } from "../../custom-hooks/useInAppNavigation";
import "./Navbar.styles.css";

export const Navbar = ({ showBackButton, showLogo, className }) => {
  const { handleGoBack, handleGoHome } = useInAppNavigation();

  return (
    <div className={`${"nav-container "} ${className}`}>
      <div>
        {showBackButton && (
          <IconButton
            onClick={handleGoBack}
            size="small"
            style={{ background: "#BCBEC0" }}
          >
            <AiOutlineLeft color="white" />
          </IconButton>
        )}
      </div>

      <div>
        {showLogo && (
          <img
            src={logo}
            alt="Just Go Health Logo"
            onClick={handleGoHome}
            className="h-8 sm:h-10 float-right hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
