import styled from 'styled-components';
import CardHotel from './CardHotel';

export default function Hotel({ hotels }) {
  if (hotels) {
    return (
      <HotelsContainer>
        <h1>Escolha de hotel e quarto</h1>
        <p>Primeiro, escolha seu hotel</p>
        <div>
          {hotels.map((hotel) => (
            <CardHotel key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </HotelsContainer>
    );
  }
  return <></>;
}

const HotelsContainer = styled.div`
  & > div {
    display: flex;
  }
  & > h1 {
    font-size: 34px;
    color: #000000;
    margin-bottom: 36px;
  }
  & > p {
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 18px;
  }
`;
