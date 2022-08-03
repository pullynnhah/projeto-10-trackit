import styled from "styled-components";

const DayBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${props => (props.check ? props.theme.gray : props.theme.borderGray)};
  color: ${props => (props.check ? props.theme.white : props.theme.gray)};
  background: ${props => (props.check ? props.theme.gray : props.theme.white)};
`;

export default DayBtn;
