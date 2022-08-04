import {useContext} from "react";
import GlobalContext from "./contexts/GlobalContext";
import dayjs from "dayjs";
import styled from "styled-components";

export default function Day({day, date, history}) {
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

const DayWrapper = styled.div`
  padding: 10px 0;
`;

const HistoryWrapper = styled(DayWrapper)`
  background: ${props => (props.done ? props.theme.calendarGreen : props.theme.calendarRed)};
  border-radius: 50%;
`;
