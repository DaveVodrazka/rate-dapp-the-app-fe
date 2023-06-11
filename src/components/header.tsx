import AppBar from "@mui/material/AppBar";
import GlobalStyles from "@mui/material/GlobalStyles";

export const Header = () => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          padding: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></AppBar>
    </>
  );
};
