import { Button, Checkbox, FormControlLabel } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// eslint-disable-next-line react/prop-types
const Checkitem = ({ name, id, state, deleteCheckItem, updateCheckItem }) => {
  return (
    <div
      key={id}
      style={{
        display: "flex",
        alignItems: "center",
        width: "30%",
        minWidth: "12rem",
        justifyContent: "space-between",
      }}
    >
      <FormControlLabel
        sx={{ margin: "0px", padding: "0px", height: "1.5rem" }}
        control={
          <Checkbox
            onChange={() => {
              updateCheckItem(id, state);
            }}
            checked={state == "complete" ? true : false}
            size="small"
          />
        }
        label={name}
      />
      <Button
        sx={{ color: "black" }}
        onClick={() => {
          deleteCheckItem(id, state);
        }}
      >
        <DeleteIcon sx={{ fontSize: "1.2rem" }} />
      </Button>
    </div>
  );
};

export default Checkitem;
