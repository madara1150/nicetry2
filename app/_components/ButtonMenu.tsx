import { Button } from "@mui/joy";
import React from "react";

export const ButtonMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Button color="neutral" sx={{ background: "#242526" }}>
        {children}
      </Button>
    </>
  );
};
