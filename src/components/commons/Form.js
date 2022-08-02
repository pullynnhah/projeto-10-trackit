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

    color: ${props => props.theme.textGray};
    border: 1px solid ${props => props.theme.borderGray};
    border-radius: 5px;

    padding-left: 11px;
  }

  input:disabled {
    background: ${props => props.theme.backgroundGray};
  }

  input::placeholder {
    color: ${props => props.theme.gray};
  }

  button {
    width: 80vw;
    height: 45px;

    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
  }

  .link {
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.blue};
    text-decoration: underline;
  }
`;

export default Form;
