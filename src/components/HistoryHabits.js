import {useContext} from "react";
import GlobalContext from "./contexts/GlobalContext";
import {IconContext} from "react-icons";
import {BsCheckLg, BsXLg} from "react-icons/bs";
import styled from "styled-components";

export default function HistoryHabits({habits, displayDate}) {
  const {theme} = useContext(GlobalContext);
  return (
    <HabitsWrapper theme={theme}>
      <h4>{displayDate}</h4>
      {habits ? (
        habits.map((habit, index) => <HistoryHabit habit={habit} key={index} />)
      ) : (
        <p>Nenhum hábito</p>
      )}
    </HabitsWrapper>
  );
}

function HistoryHabit({habit}) {
  const {theme} = useContext(GlobalContext);

  return (
    <HabitWrapper theme={theme} check={habit.done}>
      <h5>{habit.name}</h5>
      <div className="icon">
        {habit.done ? (
          <IconContext.Provider value={{color: "#FFF", size: "25px"}}>
            <BsCheckLg />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{color: "#FFF", size: "25px"}}>
            <BsXLg />
          </IconContext.Provider>
        )}
      </div>
    </HabitWrapper>
  );
}

const HabitWrapper = styled.section`
  min-height: 70px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.textGray};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;

  h5 {
    font-size: 18px;
  }

  .icon {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => (props.check ? props.theme.calendarGreen : props.theme.calendarRed)};
    border-radius: 5px;
  }
`;

const HabitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;

  h4 {
    margin: 18px 0 10px;
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.theme.darkBlue};
  }
`;
