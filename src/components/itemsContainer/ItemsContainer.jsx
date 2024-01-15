import { useEffect, useState } from "react";
import { del, get, post, putState } from "../../api/apiFunctions";
import {
  Box,
  Button,
  CircularProgress,
  FormGroup,
  LinearProgress,
  TextField,
} from "@mui/material";
import ItemError from "../error/ItemError";
import Checkitem from "./Checkitem";
import SendIcon from "@mui/icons-material/Send";

// eslint-disable-next-line react/prop-types
const ItemsContainer = ({ cardId, checkListId }) => {
  const [checkitemsData, setCheckitemsData] = useState([]);
  const [getData, setGetData] = useState("no-data");
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    get(`checklists/${checkListId}/checkItems`)
      .then((res) => {
        if (res.status == 200) {
          setGetData("got-data");
          setCheckitemsData(res.data);
        } else {
          setGetData("error");
        }
      })
      .catch(() => {
        setGetData("error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addCheckItem = () => {
    post(`checklists/${checkListId}/checkItems?name=${inputValue}`)
      .then((res) => {
        setCheckitemsData((prevData) => [...prevData, res.data]);
      })
      .catch(() => {
        alert("Error Occured");
      });
  };

  const updateCheckItem = (itemID, state) => {
    const newState = state == "complete" ? "incomplete" : "complete";
    putState(
      `cards/${cardId}/checkItem/${itemID}?state=${newState}`,
      setCheckitemsData
    );
  };

  const deleteCheckItem = (itemId) => {
    del(`checklists/${checkListId}/checkItems/${itemId}`)
      .then(() => {
        setCheckitemsData((prevData) => {
          const newData = prevData.filter(({ id }) => id !== itemId);
          return newData;
        });
      })
      .catch(() => {
        alert("Error Occurred!!");
      });
  };

  const findValue = () => {
    if (checkitemsData.length === 0) {
      return 0;
    }
    let count = 0;
    for (let data of checkitemsData) {
      if (data.state === "complete") {
        count++;
      }
    }
    return parseFloat(((count / checkitemsData.length) * 100).toFixed(2));
  };

  if (getData == "no-data") {
    return (
      <Box sx={{ display: "flex", margin: "2rem 4rem" }}>
        <CircularProgress size={30} sx={{ color: "black" }} />
      </Box>
    );
  } else if (getData == "got-data") {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0.5rem 0",
            marginLeft: "0.2rem",
            gap: "1rem",
          }}
        >
          <span>{findValue()}%</span>
          <LinearProgress
            value={findValue()}
            sx={{ width: "70%" }}
            variant="determinate"
          />
        </div>
        <FormGroup sx={{ marginTop: "0.5rem" }}>
          {checkitemsData.map(({ name, id, state }) => (
            <Checkitem
              key={id}
              name={name}
              state={state}
              id={id}
              deleteCheckItem={deleteCheckItem}
              updateCheckItem={updateCheckItem}
            />
          ))}
        </FormGroup>
        {showForm ? (
          <Box
            sx={{
              display: "flex",
              marginLeft: "0.75rem",
              marginTop: "0.75rem",
              alignItems: "center",
            }}
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              addCheckItem();
              setShowForm(false);
              setInputValue("");
            }}
          >
            <TextField
              autoFocus={showForm}
              value={inputValue}
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              size="small"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              sx={{
                marginLeft: "0.5rem",
                height: "2.5rem",
                backgroundColor: "lightsteelblue",
              }}
              disabled={inputValue.trim() ? false : true}
              type="submit"
            >
              <SendIcon sx={{ color: "black" }} />
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            size="small"
            sx={{ marginLeft: "0.75rem", marginTop: "0.75rem" }}
            onClick={() => setShowForm(true)}
          >
            Add Item
          </Button>
        )}
      </div>
    );
  } else {
    return <ItemError />;
  }
};

export default ItemsContainer;
