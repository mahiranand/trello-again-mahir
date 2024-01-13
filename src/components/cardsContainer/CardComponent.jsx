import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckListContainer from "../checklistContainer/CheckListContainer";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CardComponent = ({ name, id, deleteCard }) => {
  const [showChecklist, setShowChecklist] = useState(false);

  return (
    <div key={id}>
      <Chip
        label={name}
        sx={{
          width: "100%",
          height: "2.5rem",
          margin: "0.4rem 0",
          cursor: "pointer",
          fontSize: "1.1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
        onDelete={() => {
          deleteCard(id);
        }}
        onClick={() => {
          setShowChecklist(true);
        }}
        deleteIcon={<DeleteIcon />}
      />
      <CheckListContainer
        id={id}
        name={name}
        showChecklist={showChecklist}
        setShowChecklist={setShowChecklist}
      />
    </div>
  );
};

export default CardComponent;
