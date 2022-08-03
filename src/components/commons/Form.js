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

  button:disabled {
    opacity: 0.7;
  }
  .link {
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.blue};
    text-decoration: underline;
  }
`;

export default Form;
