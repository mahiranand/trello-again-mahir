import { Button, List, ListItem } from "@mui/material";
import ArchiveRoundedIcon from "@mui/icons-material/ArchiveRounded";
import CardsContainer from "../cardsContainer/CardsContainer";

// eslint-disable-next-line react/prop-types
const ListComponent = ({ name, id, archieveList }) => {
  return (
    <List>
      <ListItem
        sx={{
          width: "19rem",
          flexDirection: "column",
          backgroundColor: "lightsalmon",
          borderRadius: "1rem",
          padding: "0.5rem 0rem 0.5rem 0",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0.5rem",
          }}
        >
          <p
            style={{
              borderRadius: "0.3rem",
              marginLeft: "1.3rem",
              fontSize: "1.3rem",
              backgroundColor: "lawngreen",
              padding: "0.2rem 0.5rem",
            }}
          >
            {name}
          </p>
          <Button
            variant="text"
            size="small"
            sx={{
              color: "black",
              transform: "scale(0.9)",
              "&:hover": {
                backgroundColor: "darksalmon",
              },
            }}
            onClick={() => {
              archieveList(id);
            }}
          >
            <ArchiveRoundedIcon />
          </Button>
        </div>
        <CardsContainer id={id} />
      </ListItem>
    </List>
  );
};

export default ListComponent;
