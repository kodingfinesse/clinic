import React from "react";
import Appointment from "../components/Appointment";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const Schedule = () => {
  return (
        <MuiThemeProvider>
          <Appointment />
        </MuiThemeProvider>
        );
      }