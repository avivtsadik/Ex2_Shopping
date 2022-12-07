import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function DrawerAppBar() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Shopping cart
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => {
                navigate("/");
              }}
              key={"Home"}
              sx={{ color: "#fff" }}
            >
              {"Home"}
            </Button>
            <Button
              onClick={() => {
                navigate("/cart");
              }}
              key={"Cart"}
              sx={{ color: "#fff" }}
            >
              {"Cart"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
