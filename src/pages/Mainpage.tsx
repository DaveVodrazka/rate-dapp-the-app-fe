import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { SelectChain } from "../components/SelectChain";
import { SelectProtocol } from "../components/SelectProtocol";
import { Box, Button } from "@mui/material";
import { getRatingData } from "../calls";

export const Mainpage = () => {
  useEffect(() => {
    document.title = "Main Page | Rate App";
  });
  const user = useUser();

  if (!user) {
    return (
      <Box>
        <p>Do you have a MetaMask?</p>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user.chainId && (
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70vw",
            }}
          >
            <SelectChain />
            <SelectProtocol />
          </Box>
          <Button
            onClick={getRatingData}
            sx={{
              mx: 12,
              my: 8,
              p: 2,
            }}
            variant="contained"
          >
            Let's Rate
          </Button>
        </Box>
      )}
    </Box>
  );
};
