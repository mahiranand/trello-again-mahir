import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// eslint-disable-next-line react/prop-types
const CardComponent = ({ name, id, deleteCard }) => {
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
          //   openCheckLists();
          console.log("hlo");
        }}
        deleteIcon={<DeleteIcon />}
      />
      {/* <CheckList
        name={name}
        open={openCardId === id}
        handleClose={handleClose}
        cardId={id}
      /> */}
    </div>
  );
};

export default CardComponent;
