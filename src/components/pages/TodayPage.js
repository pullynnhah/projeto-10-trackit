import {useContext, useEffect, useState} from "react";
import GlobalContext from "../contexts/GlobalContext";
import Page from "../commons/Page";
import Loading from "../commons/Loading";
import dayjs from "dayjs";

import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";
import styled from "styled-components";
import TodayHabit from "../TodayHabit";
import {getTodayHabits} from "../../services/api";

export default function TodayPage() {
  const [habits, setHabits] = useState(null);
  const {login, percentage, setPercentage, theme} = useContext(GlobalContext);

  dayjs.locale("pt-br");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("pt-br", {
    weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  });

  useEffect(() => {
    const promise = getTodayHabits(login.token);
    promise.then(response => {
      setHabits(response.data);
      const sizeHabits = habits?.length;
      if (!sizeHabits) {
        setPercentage(0);
      } else {
        const sizeCompleteHabits = habits.filter(habit => habit.done).length;
        setPercentage(Math.round((sizeCompleteHabits * 100) / sizeHabits));
      }
    });
  }, [login.token, habits, setPercentage]);

  if (habits === null) {
    return <Loading />;
  }

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
          <TodayHabit habit={habit} setHabits={setHabits} key={habit.id} />
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
