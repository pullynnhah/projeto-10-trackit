import Page from "../commons/Page";
import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import GlobalContext from "../contexts/GlobalContext";
import HabitForm from "../forms/HabitForm";
import Habits from "../Habits";
import {getHabits} from "../../services/api";
import HabitsContext from "../contexts/HabitsContext";
import Loading from "../commons/Loading";

export default function HabitsPage() {
  const [showForm, setShowForm] = useState(false); // TODO: set to false
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState(new Set());
  const [habits, setHabits] = useState(null);

  const {login, theme} = useContext(GlobalContext);

  useEffect(() => {
    const promise = getHabits(login.token);
    promise.then(response => setHabits(response.data));
  }, [login.token]);

  if (habits === null) {
    return <Loading />;
  }

  return (
    <HabitsContext.Provider
      value={{days, setDays, habit, setHabit, habits, setHabits, setShowForm}}>
      <Page>
        <Title theme={theme}>
          <h3>Meus hábitos</h3>
          <button onClick={() => setShowForm(true)}>+</button>
        </Title>
        {showForm ? <HabitForm /> : ""}
        <Habits habits={habits} />
      </Page>
    </HabitsContext.Provider>
  );
}

const Title = styled.div`
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    font-size: 23px;
    line-height: 29px;
    color: ${props => props.theme.darkBlue};
  }

  button {
    width: 40px;
    height: 35px;
    font-size: 27px;
    line-height: 34px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    color: ${props => props.theme.white};
    background: ${props => props.theme.blue};
  }
`;
