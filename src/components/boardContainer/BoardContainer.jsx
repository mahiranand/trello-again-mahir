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
    get("members/me/boards")
      .then((res) => {ß
        if (res.status == 200) {
          setBoardData(res.data);
          setGetData("got-data");
        } else alert("Error Occurred !!");
      })
      .catch(() => {
        setGetData("error");
      });
  }, []);

  const makeNewBoard = (name) => {
    post(`boards/?name=${name}`)
      .then((res) => {
        setBoardData((prevData) => [...prevData, res.data]);
      })
      .catch(() => {
        alert("Error Occured");
      });
  };

  if (getData == "no-data") {
    return <LoadingScreen />;
  } else if (getData == "got-data") {
    return (
      <div
        style={{
          paddingBottom: "2%",
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
