import { useEffect, useState } from "react";
import { del, get, post } from "../../api/apiFunctions";
import Error from "../error/Error";
import { Box, Button, LinearProgress, TextField } from "@mui/material";
import CardComponent from "./CardComponent";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const CardsContainer = ({ id }) => {
  const [cardsData, setCardsData] = useState([]);
  const [getData, setGetData] = useState("no-data");

  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    get(`lists/${id}/cards`, setCardsData, setGetData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewCard = () => {
    post(`cards?name=${inputValue}&idList=${id}`, setCardsData);
  };

  const deleteCard = (cardId) => {
    del(`cards/${cardId}`, setCardsData, cardId);
  };

  if (getData == "no-data") {
    return (
      <Box sx={{ width: "80%" }}>
        <LinearProgress sx={{ margin: "2rem 0" }} />
      </Box>
    );
  } else if (getData == "got-data") {
    return (
      <>
        <Box
          sx={{
            padding: "0rem 0.7rem",
            marginBottom: "0.5rem",
            maxHeight: "25rem",
            overflowY: "scroll",
            width: "100%",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {cardsData.map(({ name, id }) => {
            return (
              <CardComponent
                key={id}
                id={id}
                name={name}
                deleteCard={deleteCard}
              />
            );
          })}
        </Box>
        {showForm ? (
          <Box
            sx={{
              margin: "0.5rem 0rem",
              width: "96%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              addNewCard();
              setShowForm(false);
              setInputValue("");
            }}
          >
            <TextField
              autoFocus={showForm}
              sx={{ width: "90%" }}
              id="outlined-basic"
              label="Card Name"
              variant="outlined"
              size="small"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div
              style={{
                width: "90%",
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
                disabled={inputValue.trim == "" ? true : false}
              >
                Add Card
              </Button>
              <Button
                onClick={() => {
                  setShowForm(false);
                }}
                sx={{ height: "100%" }}
              >
                <CloseIcon />
              </Button>
            </div>
          </Box>
        ) : (
          <Button
            variant="text"
            sx={{
              margin: "0.2rem 0 0.6rem 0",
              color: "white",
              width: "90%",
              backgroundColor: "coral",
            }}
            onClick={() => setShowForm(true)}
          >
            Add New Card
          </Button>
        )}
      </>
    );
  } else {
    return <Error />;
  }
};

export default CardsContainer;
