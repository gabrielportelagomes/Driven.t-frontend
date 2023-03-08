import styled from 'styled-components';

export default function Hotel({ hotel }) {
  return(
    <Card>
      <img src={hotel.image} alt='hotel'/>
      <h1>{hotel.name}</h1>
      <h2>Tipos de acomodação</h2>
      <h2>Vagas disponíveis</h2>
    </Card>
  );
}

const Card = styled.div`
    width: 196px;
    height: 264px;
    background-color: #EBEBEB;
    border-radius: 5px;
    padding: 16px 14px 0;
    margin-right: 19px;
    cursor: pointer;
    &>img{
        width: 168px;
        height: 109px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    &>h1{
        font-size: 20px;
        color: #343434;
        margin-bottom: 10px;
    }
    &>h2{
        font-size: 12px;
        color: #3C3C3C;
        margin-bottom: 2px;
    }
`;
