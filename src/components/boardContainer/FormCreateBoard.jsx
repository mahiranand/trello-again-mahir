import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormCreateBoard = ({ makeNewBoard }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const setInputBox = () => setInput("");
  return (
    <>
      <div
        style={{
          backgroundColor: "#b6c2cf",
          height: "11rem",
          width: "18.4rem",
          borderRadius: "0.5rem",
          color: "white",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1.5px solid black",
        }}
        onClick={handleOpen}
      >
        <p style={{ padding: "1rem", fontSize: "1.5rem" }}>Create New Card</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            makeNewBoard(input);
            handleClose();
            setInputBox();
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "400px",
            width: "75%",
            borderRadius: "1rem",
            bgcolor: "background.paper",
            p: 4,
            border: "none",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="p">
            Create Board:
          </Typography>
          <TextField
            autoFocus={open}
            id="outlined-basic"
            label="Board Name"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: "100%", marginTop: "1.5rem" }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={input.trim() ? false : true}
            style={{ marginTop: "1.5rem" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FormCreateBoard;
