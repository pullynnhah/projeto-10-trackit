import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./commons/GlobalStyle";

import GlobalContext from "./contexts/GlobalContext";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  const [login, setLogin] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const theme = {
    darkBlue: "#126ba5",
    blue: "#52b6ff",

    borderGray: "#d4d4d4",
    backgroundGray: "#f2f2f2",
    textGray: "#666",
    lightGray: "#dbdbdb",
    gray: "#bababa",
    iconGray: "#ebebeb",
    iconBorderGray: "#e7e7e7",
    white: "#fff",
    green: "#8FC549",
  };

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={{login, setLogin, percentage, setPercentage, theme}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="hoje" element={<TodayPage />} />
            <Route path="habitos" element={<HabitsPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}
