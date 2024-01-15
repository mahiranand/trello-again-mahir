import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get, post, put } from "../../api/apiFunctions";
import Error from "../error/Error";
import { Button, List, ListItem, Stack, TextField } from "@mui/material";
import ListComponent from "./ListComponent";
import CloseIcon from "@mui/icons-material/Close";
import LoadingScreen from "../loaders/LoadingScreen";
import ListWindowNavbar from "../navbar/ListWindowNavbar";
import Navbar from "../navbar/NavBar";

const ListContainer = () => {
  const { id } = useParams();

  const [listData, setListData] = useState([]);
  const [getData, setGetData] = useState("no-data");
  const [inputValue, setInputValue] = useState("");
  const [formDisplay, setFormDisplay] = useState(false);

  useEffect(() => {
    get(`boards/${id}/lists`)
      .then((res) => {
        if (res.status == 200) {
          setGetData("got-data");
          setListData(res.data);
        } else {
          alert("Error Occured");
        }
      })
      .catch(() => {
        setGetData("error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createNewList = () => {
    post(`boards/${id}/lists?name=${inputValue}`)
      .then((res) => {
        setListData((prevData) => [...prevData, res.data]);
      })
      .catch(() => {
        alert("Error Occured");
      });
  };

  const archieveList = (listId) => {
    put(`lists/${listId}?closed=true`)
      .then((res) => {
        setListData((prevData) => {
          const newData = prevData.filter(({ id }) => id !== res.data.id);
          return newData;
        });
      })
      .catch(() => {
        alert("Error Occured");
      });
  };

  if (getData == "no-data") {
    return (
      <>
        <Navbar />
        <LoadingScreen />
      </>
    );
  } else if (getData == "got-data") {
    return (
      <>
        <ListWindowNavbar />
        <Stack
          direction={"row"}
          overflow={"scroll"}
          height={"91%"}
          sx={{
            padding: "2rem",
            marginRight: "0",
            backgroundColor: "lightcyan",
            gap: "0.5rem",
          }}
        >
          {listData.map(({ id, name }) => (
            <ListComponent
              key={id}
              name={name}
              id={id}
              archieveList={archieveList}
            />
          ))}
          <List>
            {formDisplay ? (
              <ListItem
                sx={{
                  width: "19rem",
                  flexDirection: "column",
                  backgroundColor: "lightsalmon",
                  borderRadius: "1rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormDisplay(false);
                  setInputValue("");
                  createNewList();
                }}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: "0.9rem",
                  }}
                >
                  Create List
                </p>
                <TextField
                  autoFocus={formDisplay}
                  id="outlined-basic"
                  label="List Name"
                  variant="outlined"
                  size="small"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "0.8rem",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ backgroundColor: "coral" }}
                    disabled={inputValue.trim() ? false : true}
                  >
                    Add List
                  </Button>
                  <Button
                    onClick={() => setFormDisplay(false)}
                    sx={{ height: "100%" }}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </ListItem>
            ) : (
              <ListItem
                sx={{
                  width: "19rem",
                  flexDirection: "column",
                  backgroundColor: "lightsalmon",
                  borderRadius: "1rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <Button
                  onClick={() => setFormDisplay(true)}
                  sx={{
                    color: "darkcyan",
                    width: "100%",
                  }}
                >
                  Add New List
                </Button>
              </ListItem>
            )}
          </List>
        </Stack>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Error />
      </>
    );
  }
};

export default ListContainer;
