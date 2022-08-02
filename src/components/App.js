import {useState} from "react";
import {GlobalStyle} from "./commons/GlobalStyle";
import Context from "./Context";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  const [login, setLogin] = useState(null);
  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
