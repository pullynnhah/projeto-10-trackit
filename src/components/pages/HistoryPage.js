import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {useContext, useEffect, useState} from "react";
import {getHistory} from "../../services/api";
import GlobalContext from "../contexts/GlobalContext";
import Loading from "../commons/Loading";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Page from "../commons/Page";
import styled from "styled-components";
import Day from "../Day";
import HistoryHabits from "../HistoryHabits";
import {useNavigate} from "react-router-dom";

export default function HistoryPage() {
  dayjs.extend(customParseFormat);
  const [history, setHistory] = useState(null);
  const [dayHabits, setDayHabits] = useState(null);
  const [dateState, setDateState] = useState(null);
  const {login, theme} = useContext(GlobalContext);

  const navigate = useNavigate();

  function changeDate(e) {
    if (dayjs().format("DD/MM/YYYY") === dayjs(e).format("DD/MM/YYYY")) {
      navigate("/hoje");
    }
    setDateState(dayjs(e).format("dddd, DD/MM"));
    setDayHabits(history.find(item => item.day === dayjs(e).format("DD/MM/YYYY"))?.habits);
  }

  useEffect(() => {
    const promise = getHistory(login.token);
    promise.then(response => setHistory(response.data));
  }, [login.token]);

  if (history === null) {
    return <Loading />;
  }

  return (
    <Page>
      <Title theme={theme}>
        <h3>Histórico</h3>
      </Title>
      <CalendarWrapper>
        <Calendar
          locale="pt-BR"
          onClickDay={changeDate}
          formatDay={(locale, date) => (
            <Day
              day={dayjs(date).format("DD")}
              date={dayjs(date).format("DD/MM/YYYY")}
              history={history}
            />
          )}
        />
      </CalendarWrapper>
      {dateState ? <HistoryHabits habits={dayHabits} displayDate={dateState} /> : ""}
    </Page>
  );
}

const Title = styled.div`
  padding: 28px 0 11px;

  h3 {
    font-size: 23px;
    line-height: 29px;
    color: ${props => props.theme.darkBlue};
  }
`;

const CalendarWrapper = styled.div`
  width: 350px;

  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 10px;
  }

  .react-calendar__navigation button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
