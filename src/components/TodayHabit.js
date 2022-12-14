import {useContext} from "react";
import GlobalContext from "./contexts/GlobalContext";
import {getTodayHabits, postCheckHabit, postUncheckHabit} from "../services/api";
import {IconContext} from "react-icons";
import {BsCheckLg} from "react-icons/bs";
import styled from "styled-components";

export default function TodayHabit({habit, setHabits}) {
  const {theme, login} = useContext(GlobalContext);

  function toogleCheck() {
    if (habit.done) {
      const promise = postUncheckHabit(habit.id, login.token);
      promise.then(response => {
        const prom = getTodayHabits(login.token);
        prom.then(response => {
          setHabits(response.data);
        });
      });
    } else {
      const promise = postCheckHabit(habit.id, login.token);
      promise.then(response => {
        const prom = getTodayHabits(login.token);
        prom.then(response => {
          setHabits(response.data);
        });
      });
    }
  }

  return (
    <HabitWrapper
      theme={theme}
      check={habit.done}
      firstColor={habit.done}
      secondColor={habit.done && habit.currentSequence === habit.highestSequence}>
      <div>
        <h4>{habit.name}</h4>
        <p>
          Sequência atual:{" "}
          <span>{`${habit.currentSequence} ${habit.currentSequence === 1 ? "dia" : "dias"}`}</span>
        </p>
        <p>
          Seu recorde:{" "}
          <span>{`${habit.highestSequence} ${habit.highestSequence === 1 ? "dia" : "dias"}`}</span>
        </p>
      </div>
      <div className="icon" onClick={toogleCheck}>
        <IconContext.Provider value={{color: "#fff", size: "35px"}}>
          <BsCheckLg />
        </IconContext.Provider>
      </div>
    </HabitWrapper>
  );
}

const HabitWrapper = styled.section`
  height: 94px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.textGray};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;

  h4 {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
    line-height: 16px;
  }

  span:first-of-type {
    color: ${props => (props.firstColor ? props.theme.green : props.theme.textGray)};
  }

  span:last-of-type {
    color: ${props => (props.secondColor ? props.theme.green : props.theme.textGray)};
  }
  .icon {
    width: 69px;
    height: 69px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${props => (props.check ? props.theme.green : props.theme.iconBorderGray)};
    background: ${props => (props.check ? props.theme.green : props.theme.iconGray)};
    border-radius: 5px;
  }
`;
