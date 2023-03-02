import styled from 'styled-components';

const ButtonSummary = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 108px;
  border: none;
  border-radius: 20px;
  margin-right: 24px;
  background-color: #fdeed2;

  & > h1 {
    color: #454545;
    font-size: 16px;
    margin-bottom: 3px;
  }

  & > p {
    font-size: 14px;
    color: #898989;
  }
`;

export default ButtonSummary;
