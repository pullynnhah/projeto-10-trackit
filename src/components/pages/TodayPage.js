import {useContext, useEffect, useState} from "react";
import {getTodayHabits, postCheckHabit, postUncheckHabit} from "../../services/api";
import GlobalContext from "../contexts/GlobalContext";
import Page from "../commons/Page";
import Loading from "../commons/Loading";
import dayjs from "dayjs";

import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";
import styled from "styled-components";

import {BsCheckLg} from "react-icons/bs";

import {IconContext} from "react-icons";

function Habit({habit, setHabits, calcPercentage}) {
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

export default function TodayPage() {
  const [habits, setHabits] = useState(null);
  const {login, percentage, setPercentage, theme} = useContext(GlobalContext);

  dayjs.locale("pt-br");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("pt-br", {
    weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  });

  function calcPercentage() {
    const sizeHabits = habits.length;
    if (sizeHabits === 0) {
      return 0;
    }
    const sizeCompleteHabits = habits.filter(habit => habit.done).length;
    setPercentage(Math.round((sizeCompleteHabits * 100) / sizeHabits));
  }

  useEffect(() => {
    const promise = getTodayHabits(login.token);
    promise.catch(error => console.log(error));
    promise.then(response => setHabits(response.data));
  }, [login.token]);

  if (habits === null) {
    return <Loading />;
  }

  calcPercentage();
  return (
    <Page>
      <Title theme={theme} perc={percentage === 0}>
        <h3>{dayjs().format("dddd, DD/MM")}</h3>
        <p>
          {percentage ? `${percentage}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
        </p>
      </Title>
      <HabitsWrapper>
        {habits.map(habit => (
          <Habit habit={habit} setHabits={setHabits} key={habit.id} />
        ))}
      </HabitsWrapper>
    </Page>
  );
}

const Title = styled.div`
  padding: 28px 0;

  h3 {
    font-size: 23px;
    line-height: 29px;
    color: ${props => props.theme.darkBlue};
  }

  p {
    font-size: 18px;
    line-height: 22px;
    color: ${props => (props.perc ? props.theme.gray : props.theme.green)};
  }
`;

const HabitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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
