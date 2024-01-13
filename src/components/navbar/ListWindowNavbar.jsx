import { AppBar, Avatar, Box, Button, Chip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/trello.svg";

const ListWindowNavbar = () => {
  const name = useLocation().state.name;

  return (
    <Box sx={{ flexGrow: 1, height: "9%" }}>
      <AppBar position="fixed">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
          <Chip
            label={`Board: ${name}`}
            sx={{
              color: "white",
              fontSize: "1.2rem",
            }}
          />
          <Link to="/">
            <Button
              variant="text"
              sx={{
                backgroundColor: "darkBlue",
                color: "white",
                marginRight: "2rem",
              }}
            >
              Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </Box>
  );
};

export default ListWindowNavbar;
