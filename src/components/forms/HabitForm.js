import styled from "styled-components";
import {useContext, useState} from "react";
import GlobalContext from "../GlobalContext";
import Input from "../commons/Input";
import {getHabits, postHabit} from "../../services/api";
import {ThreeDots} from "react-loader-spinner";
import DayBtn from "../commons/DayBtn";
import HabitsContext from "../HabitsContext";

export default function HabitForm() {
  const [disabled, setDisabled] = useState(false);
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const {theme, login} = useContext(GlobalContext);

  const {days, setDays, habit, setHabit, setHabits, setShowForm} = useContext(HabitsContext);

  function click(e, index) {
    e.preventDefault();
    const newDays = new Set(days);
    if (newDays.has(index)) {
      newDays.delete(index);
    } else {
      newDays.add(index);
    }
    setDays(newDays);
  }

  function cancel(e) {
    e.preventDefault();
    setShowForm(false);
  }

  function save(e) {
    e.preventDefault();
    const promise = postHabit({name: habit, days: [...days]}, login.token);
    promise.catch(error => {
      alert("Erro ao criar hábito");
      setDisabled(false);
    });

    promise.then(response => {
      setHabit("");
      setDays(new Set());
      setShowForm(false);
      const prom = getHabits(login.token);
      prom.then(response => setHabits(response.data));
    });

    setDisabled(true);
  }
  return (
    <FormWrapper theme={theme}>
      <Input
        className="input"
        theme={theme}
        value={habit}
        onChange={e => setHabit(e.target.value)}
        type="text"
        placeholder="nome do hábito"
        required
        disabled={disabled}
      />
      <div className="weekdays-btns">
        {weekdays.map((weekday, index) => (
          <DayBtn
            disabled={disabled}
            key={index}
            theme={theme}
            check={days.has(index)}
            onClick={e => click(e, index)}>
            {weekday}
          </DayBtn>
        ))}
      </div>
      <div className="form-btns">
        <button className="cancel-btn" onClick={cancel}>
          Cancelar
        </button>
        <button className="save-btn" disabled={disabled} onClick={save}>
          {disabled ? <ThreeDots color="#fff" height={20} width={50} /> : "Salvar"}
        </button>
      </div>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  height: 180px;
  margin: 20px 0 0;
  background: ${props => props.theme.white};

  display: flex;
  flex-direction: column;
  border-radius: 5px;

  .input {
    width: calc(100% - 40px);
    margin: 18px 20px 10px;
  }

  .weekdays-btns {
    margin: 0 20px;
    display: flex;
    gap: 4px;
  }

  .form-btns {
    margin: 28px 20px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 23px;
  }

  .form-btns button {
    font-size: 16px;
    line-height: 20px;
  }

  .cancel-btn {
    width: 69px;
    height: 20px;

    color: ${props => props.theme.blue};
  }

  .save-btn {
    width: 84px;
    height: 35px;

    color: ${props => props.theme.white};
    background: ${props => props.theme.blue};
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
      opacity: 0.7;
    }
  }
`;
