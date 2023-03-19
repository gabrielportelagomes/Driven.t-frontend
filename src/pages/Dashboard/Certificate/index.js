import styled from 'styled-components';

export default function Certificate() {
  return (
    <EmptyContainer>
      <h1>Certificado</h1>
      <div>
        <p style={{ width: '480px' }}>Ao final do evento, o seu certificado de participação será disponibilizado aqui!</p>
      </div>
    </EmptyContainer>
  );
}

const EmptyContainer = styled.div`
  height: 100%;
  & > div {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & > p {
      width: 420px;
      color: #8e8e8e;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
    }
  }
  & > h1 {
    font-size: 34px;
    font-weight: 400;
  }
`;
