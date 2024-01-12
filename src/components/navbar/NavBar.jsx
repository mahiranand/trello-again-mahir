import { AppBar, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import icon from "../../assets/trello.svg";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "10%" }}>
      <AppBar position="fixed">
        <div>
          <Link
            to={"/"}
            style={{
              display: "flex",
              width: "10rem",
              alignItems: "center",
              padding: "0.75rem 2rem",
              gap: "1rem",
            }}
          >
            <Avatar src={icon} variant="rounded" />
            <span style={{ fontSize: "1.5rem", color: "white" }}>Trello</span>
          </Link>
        </div>
      </AppBar>
    </Box>
  );
};

export default Navbar;
