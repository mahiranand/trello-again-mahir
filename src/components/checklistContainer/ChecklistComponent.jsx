import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import ItemsContainer from "../itemsContainer/ItemsContainer";
// eslint-disable-next-line react/prop-types
const ChecklistComponent = ({ cardId, name, id, deleteChecklist }) => {
  return (
    <div key={id}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <CheckBoxOutlinedIcon />
          <p style={{ fontSize: "1.25rem" }}>{name}</p>
        </div>
        <Button
          size="small"
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{
            color: "red",
            border: "1px solid red",
            "&:hover": {
              border: "1px solid red",
            },
          }}
          onClick={() => {
            deleteChecklist(id);
          }}
        >
          Delete
        </Button>
      </div>
      <ItemsContainer cardId={cardId} checkListId={id} />
    </div>
  );
};

export default ChecklistComponent;
