import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-bottom: 25px;
  }

  input {
    width: 80vw;
    height: 45px;

    font-size: 20px;
    line-height: 25px;

    color: var(--dark-gray);
    border: 1px solid var(--border-gray);
    border-radius: 5px;

    padding-left: 11px;
  }

  input:disabled {
    background: var(--light-gray);
  }

  input::placeholder {
    color: var(--gray);
  }

  button {
    width: 80vw;
    height: 45px;

    background: var(--blue);
    color: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
  }

  .link {
    font-size: 14px;
    line-height: 17px;
    color: var(--blue);
    text-decoration: underline;
  }
`;

export default Form;
