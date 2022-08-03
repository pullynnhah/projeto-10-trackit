import {useContext} from "react";
import Context from "./Context";
import styled from "styled-components";
import DayBtn from "./commons/DayBtn";
import {BsTrash} from "react-icons/bs";

import {IconContext} from "react-icons";

function Habit({habit}) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const {theme} = useContext(Context);

  return (
    <HabitWrapper theme={theme}>
      <div className="habit">
        <p>{habit.name}</p>
        <IconContext.Provider value={{color: "#666", size: "15px"}}>
          <BsTrash />
        </IconContext.Provider>
      </div>
      <div className="weekdays-btns">
        {weekdays.map((weekday, index) => (
          <DayBtn disabled key={index} theme={theme} check={habit.days.includes(index)}>
            {weekday}
          </DayBtn>
        ))}
      </div>
    </HabitWrapper>
  );
}

export default function Habits({habits}) {
  const {theme} = useContext(Context);

  return habits.length === 0 ? (
    <NoHabit theme={theme}>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
    </NoHabit>
  ) : (
    <HabitsWrapper theme={theme}>
      {habits.map((habit, index) => (
        <Habit habit={habit} key={index} />
      ))}
    </HabitsWrapper>
  );
}

const HabitWrapper = styled.section`
  min-height: 91px;
  background: ${props => props.theme.white};

  border-radius: 5px;

  .weekdays-btns {
    margin: 0 15px;
    display: flex;
    gap: 4px;
  }
`;

const HabitsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .habit {
    display: flex;
    justify-content: space-between;
    padding: 13px 15px;
  }

  p {
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.theme.textGray};
  }
`;

const NoHabit = styled.p`
  font-size: 18px;
  line-height: 22px;
  padding-top: 29px;
  color: ${props => props.theme.textGray};
`;
