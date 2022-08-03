import {useContext} from "react";
import {buildStyles} from "react-circular-progressbar";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styled from "styled-components";
import GlobalContext from "../GlobalContext";
import {Link} from "react-router-dom";

export default function Footer() {
  const {percentage, theme} = useContext(GlobalContext);

  return (
    <Footing theme={theme}>
      <Link to="/habitos" className="link">
        Hábitos
      </Link>
      <Link to="/hoje">
        <div>
          <CircularProgressbar
            value={percentage}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52b6ff",
              textSize: "18px",
              textColor: "#fff",
              pathColor: "#fff",
              strokeLinecap: "round",
              trailColor: "transparent",
            })}
          />
        </div>
      </Link>

      <Link to="/historico" className="link">
        Histórico
      </Link>
    </Footing>
  );
}

const Footing = styled.footer`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.white};

  .link {
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.theme.blue};
  }

  div {
    width: 91px;
    height: 91px;
    margin-top: -31px;
  }
`;
