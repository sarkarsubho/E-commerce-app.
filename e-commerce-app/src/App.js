import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { DetailsPage } from "./Pages/DetailsPage";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { RequiredAuth } from "./HOF/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home></Home>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart></Cart>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <RequiredAuth>
              <DetailsPage></DetailsPage>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
