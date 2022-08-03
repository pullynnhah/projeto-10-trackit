import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./commons/GlobalStyle";

import Context from "./Context";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  const [login, setLogin] = useState(null);
  const [percentage, setPercentage] = useState(66);
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
      <Context.Provider value={{login, setLogin, percentage, setPercentage, theme}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
