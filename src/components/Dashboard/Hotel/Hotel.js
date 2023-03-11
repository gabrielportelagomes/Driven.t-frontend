import { useState } from 'react';
import styled from 'styled-components';
import CardHotel from './CardHotel';
import CardRoom from './CardRoom';

export default function Hotel({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(undefined);
  console.log(selectedHotel);

  if (hotels) {
    return (
      <>
        <HotelsContainer>
          <h1>Escolha de hotel e quarto</h1>
          <p>Primeiro, escolha seu hotel</p>
          <div>
            {hotels.map((hotel) => (
              <CardHotel
                key={hotel.id}
                hotel={hotel}
                selectedHotel={selectedHotel}
                setSelectedHotel={setSelectedHotel}
              />
            ))}
          </div>
        </HotelsContainer>
        <RoomsContainer>
          <p>Ótima pedida! Agora escolha seu quarto:</p>
          <CardRoom />
        </RoomsContainer>
      </>
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

const RoomsContainer = styled.div`
  & > div {
    display: flex;
  }
  & > p {
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 33px;
    margin-top: 52px;
  }
`;
