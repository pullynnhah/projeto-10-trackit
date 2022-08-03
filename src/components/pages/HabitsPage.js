import Page from "../commons/Page";
import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import GlobalContext from "../contexts/GlobalContext";
import HabitForm from "../forms/HabitForm";
import Habits from "../Habits";
import {getHabits} from "../../services/api";
import {Hearts} from "react-loader-spinner";
import HabitsContext from "../contexts/HabitsContext";

export default function HabitsPage() {
  const [showForm, setShowForm] = useState(false); // TODO: set to false
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState(new Set());
  const [habits, setHabits] = useState(null);

  const {login} = useContext(GlobalContext);

  useEffect(() => {
    const promise = getHabits(login.token);
    promise.catch(error => console.log(error));
    promise.then(response => setHabits(response.data));
  }, [login.token]);
  const {theme} = useContext(GlobalContext);

  if (habits === null) {
    return (
      <Page>
        <LoadingWrapper>
          <Hearts height="180" width="180" color="#52b6ff" />
        </LoadingWrapper>
      </Page>
    );
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

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
