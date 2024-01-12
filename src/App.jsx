import { Route, Routes } from "react-router-dom";
import BoardContainer from "./components/boardContainer/BoardContainer";
import NavBar from "./components/navbar/NavBar";
import ListContainer from "./components/listContainer/ListContainer";
import ListWindowNavbar from "./components/navbar/ListWindowNavbar";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <BoardContainer />
            </>
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <ListWindowNavbar />
              <ListContainer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
