import styled from 'styled-components';

const Button = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 145px;
height: 145px;
border: 1px solid #cecece;
border-radius: 20px;
margin-right: 24px;
cursor: pointer;
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

export default Button;
