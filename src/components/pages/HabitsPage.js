import Page from "../commons/Page";
import styled from "styled-components";
import {useContext, useState} from "react";
import Context from "../Context";
import HabitForm from "../forms/HabitForm";

export default function HabitsPage() {
  const [showForm, setShowForm] = useState(false); // TODO: set to false
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState(new Set());

  const {theme} = useContext(Context);
  return (
    <Page>
      <Title theme={theme}>
        <h3>Meus hábitos</h3>
        <button onClick={() => setShowForm(true)}>+</button>
      </Title>
      {showForm ? (
        <HabitForm
          setShowForm={setShowForm}
          habit={habit}
          setHabit={setHabit}
          days={days}
          setDays={setDays}
        />
      ) : (
        ""
      )}
    </Page>
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
