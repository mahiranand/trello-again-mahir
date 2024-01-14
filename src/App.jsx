import { Route, Routes } from "react-router-dom";
import BoardContainer from "./components/boardContainer/BoardContainer";
import NavBar from "./components/navbar/NavBar";
import ListContainer from "./components/listContainer/ListContainer";
import PageNotFound from "./components/error/PageNotFound";

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
        <Route path="/:id" element={<ListContainer />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
