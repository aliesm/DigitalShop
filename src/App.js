import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import NavbarPage from "./Component/Navigation/Navigation";
import TopHeader from "./Component/TopHeader/TopHeader";
import Footer from "./Component/Footer/Footer";
import { Provider } from "react-redux";
import { cartStore } from "./Store/Store";
import "./App.css";
import Navbar from "./Component/Navigation/Navbar";

function App() {
  return (
    <Provider store={cartStore}>
      <BrowserRouter>
        <header>
          <TopHeader />
          <NavbarPage />
          {/* <Navbar /> */}
        </header>

        <main>
          <Main />
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
