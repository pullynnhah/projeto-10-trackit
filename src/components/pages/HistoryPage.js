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

function Day({day, date, history}) {
  const {theme} = useContext(GlobalContext);

  for (const historyItem of history) {
    if (date === historyItem.day && date !== dayjs().format("DD/MM/YYYY")) {
      const isIncomplete = historyItem.habits.find(habit => !habit.done);
      return (
        <HistoryWrapper done={!isIncomplete} theme={theme} className="history-day">
          {day}
        </HistoryWrapper>
      );
    }
  }

  return <DayWrapper>{day}</DayWrapper>;
}

export default function HistoryPage() {
  dayjs.extend(customParseFormat);
  const [history, setHistory] = useState(null);
  const {login, theme} = useContext(GlobalContext);

  useEffect(() => {
    const promise = getHistory(login.token);
    promise.then(response => {
      setHistory(response.data);
      console.log(response.data);
    });
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
          className="calendar"
          formatDay={(locale, date) => (
            <Day
              day={dayjs(date).format("DD")}
              date={dayjs(date).format("DD/MM/YYYY")}
              history={history}
            />
          )}
        />
      </CalendarWrapper>
    </Page>
  );
}

const DayWrapper = styled.div`
  padding: 12px 0;
`;

const HistoryWrapper = styled(DayWrapper)`
  background: ${props => (props.done ? props.theme.calendarGreen : props.theme.calendarRed)};
  border-radius: 50%;
`;

const Title = styled.div`
  padding: 28px 0 11px;

  h3 {
    font-size: 23px;
    line-height: 29px;
    color: ${props => props.theme.darkBlue};
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .calendar {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
  }
`;
