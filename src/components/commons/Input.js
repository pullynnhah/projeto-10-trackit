import styled from "styled-components";

const Input = styled.input`
  width: 80vw;
  height: 45px;

  font-size: 20px;
  line-height: 25px;

  color: ${props => props.theme.textGray};
  border: 1px solid ${props => props.theme.borderGray};
  background: #fff;
  border-radius: 5px;

  padding-left: 11px;

  &:disabled {
    background: ${props => props.theme.backgroundGray};
  }

  &::placeholder {
    color: ${props => props.theme.gray};
  }
`;

export default Input;
