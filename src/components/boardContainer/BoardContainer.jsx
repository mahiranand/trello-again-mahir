import { useEffect, useState } from "react";
import { get, post } from "../../api/apiFunctions";
import LoadingScreen from "../loaders/LoadingScreen";
import Error from "../error/Error";
import Board from "./Board";
import FormCreateBoard from "./FormCreateBoard";

const BoardContainer = () => {
  const [boardData, setBoardData] = useState([]);
  const [getData, setGetData] = useState("no-data");

  useEffect(() => {
    get("members/me/boards", setBoardData, setGetData);
  }, []);

  const makeNewBoard = (name) => {
    post(`boards/?name=${name}`, setBoardData);
  };

  if (getData == "no-data") {
    return <LoadingScreen />;
  } else if (getData == "got-data") {
    return (
      <div
        style={{
          margin: "2% 5%",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        <FormCreateBoard makeNewBoard={makeNewBoard} />
        {boardData.map(({ name, id }) => {
          return <Board name={name} id={id} key={id} />;
        })}
      </div>
    );
  } else {
    return <Error />;
  }
};

export default BoardContainer;
