import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Popover,
  TextField,
} from "@mui/material";
import { useEffect, useReducer } from "react";
import { del, get, post } from "../../api/apiFunctions";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import ChecklistComponent from "./ChecklistComponent";
import Error from "../error/Error";
import { initialState, reducer } from "../../reducer/stateAndReducer";

// eslint-disable-next-line react/prop-types
const CheckListContainer = ({ id, name, showChecklist, setShowChecklist }) => {
  const [{ data: checklistData, getData, showForm, inputValue }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    get(`cards/${id}/checklists`)
      .then((res) => {
        if (res.status == 200) {
          dispatch({ type: "setData", payload: res.data });
        } else {
          alert("Error Occured");
        }
      })
      .catch(() => {
        dispatch({ type: "error" });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewChecklist = (name) => {
    post(`cards/${id}/checklists?name=${name}`)
      .then((res) => {
        dispatch({ type: "addData", payload: res.data });
      })
      .catch(() => {
        alert("Error Occured");
      });
  };

  const deleteChecklist = (checklistId) => {
    del(`cards/${id}/checklists/${checklistId}`)
      .then(() => {
        dispatch({ type: "deleteData", payload: checklistId });
      })
      .catch(() => {
        alert("Error Occurred!!");
      });
  };

  const open = Boolean(showForm);

  return (
    <Modal open={showChecklist} onClose={() => setShowChecklist(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          backgroundColor: "lightblue",
          boxShadow: 24,
          borderRadius: "2rem",
          minWidth: "20rem",
          p: 4,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: "1.5rem",
              backgroundColor: "blanchedalmond",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
            }}
          >
            Card Name: {name}
          </span>
          <Button
            sx={{ backgroundColor: "blanchedalmond" }}
            onClick={() => {
              setShowChecklist(false);
            }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.5rem",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "1.5rem" }}>CheckLists</p>
          <Button
            variant="contained"
            size="small"
            disableRipple
            endIcon={<AddIcon />}
            onClick={(e) => {
              dispatch({ type: "toggleOpen", payload: e.currentTarget });
            }}
          >
            Add
          </Button>
          <Popover
            open={open}
            anchorEl={showForm}
            onClose={() => dispatch({ type: "toggleOpen", payload: null })}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                addNewChecklist(inputValue);
                dispatch({ type: "submit" });
              }}
            >
              <TextField
                value={inputValue}
                autoFocus={open}
                id="outlined-basic"
                label="CheckList Name"
                variant="outlined"
                size="small"
                sx={{ paddingBottom: "0.5rem" }}
                onChange={(e) => {
                  dispatch({ type: "input", payload: e.target.value });
                }}
              />
              <Button
                sx={{ color: "black", backgroundColor: "lightsteelblue" }}
                type="submit"
                disabled={inputValue.trim() ? false : true}
              >
                Add
              </Button>
            </Box>
          </Popover>
        </div>
        {getData == "no-data" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "4rem",
              alignItems: "flex-end",
            }}
          >
            <CircularProgress sx={{ color: "black" }} />
          </div>
        ) : getData == "got-data" ? (
          <Box
            sx={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.7rem",
              maxHeight: "50vh",
              overflowY: "scroll",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {checklistData.map((checklist) => (
              <ChecklistComponent
                cardId={id}
                key={checklist.id}
                name={checklist.name}
                id={checklist.id}
                deleteChecklist={deleteChecklist}
              />
            ))}
          </Box>
        ) : (
          <Error />
        )}
      </Box>
    </Modal>
  );
};

export default CheckListContainer;
