import {useState} from "react";
import {GlobalStyle} from "./commons/GlobalStyle";
import Context from "./Context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  const [login, setLogin] = useState(null);
  const theme = {
    darkBlue: "#126ba5",
    blue: "#52b6ff",
    borderGray: "#d4d4d4",
    backgroundGray: "#f2f2f2",
    textGray: "#666",
    gray: "#dbdbdb",
    white: "#fff",
  };
  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{login, setLogin, theme}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
