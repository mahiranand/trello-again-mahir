import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Board = ({ name, id }) => {
  function getRandomDarkColor() {
    var red = Math.floor(Math.random() * 220);
    var green = Math.floor(Math.random() * 220);
    var blue = Math.floor(Math.random() * 220);

    var color = "rgb(" + red + "," + green + "," + blue + ")";

    return color;
  }

  return (
    <Link
      to={`/${id}`}
      state={{ name: name }}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          backgroundColor: getRandomDarkColor(),
          height: "11rem",
          width: "18.4rem",
          borderRadius: "0.5rem",
          color: "white",
        }}
      >
        <p style={{ padding: "1rem", fontSize: "1.3rem" }}>{name}</p>
      </div>
    </Link>
  );
};

export default Board;
