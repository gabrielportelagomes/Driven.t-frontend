import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function BookingSummary({ bookingSummary }) {
  const [capacity, setCapacity] = useState();
  const [occupation, setOccupation] = useState();

  useEffect(() => {
    if (bookingSummary.booking.Room.capacity === 1) {
      setCapacity('Single');
    } else if (bookingSummary.booking.Room.capacity === 2) {
      setCapacity('Double');
    } else {
      setCapacity('Triple');
    }

    if (bookingSummary === 1) {
      setOccupation('Apenas você');
    } else if (bookingSummary === 2) {
      setOccupation('Você e mais 1');
    } else {
      setOccupation('Você e mais 2');
    }
  }, []);
  console.log(bookingSummary);
  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      <p>Você já escolheu o seu quarto: </p>
      <div>
        <CardHotel>
          <img src={bookingSummary.booking.Room.Hotel.image} alt="hotel" />
          <h1>{bookingSummary.booking.Room.Hotel.name}</h1>
          <h2>Quarto reservado</h2>
          <p>
            {bookingSummary.booking.Room.name} ({capacity})
          </p>
          <h2>Pessoas no seu quarto</h2>
          <p>{occupation}</p>
        </CardHotel>
      </div>
    </Container>
  );
}

const Container = styled.div`
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

const CardHotel = styled.div`
  width: 196px;
  height: 264px;
  background-color: #ffeed2;
  border-radius: 10px;
  padding: 16px 14px 0;
  margin-right: 19px;
  & > img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  & > h1 {
    font-size: 20px;
    color: #343434;
  }
  h2 {
    height: 14px;
    margin-top: 10px;
    font-size: 12px;
    color: #3c3c3c;
    margin-bottom: 2px;
    font-weight: 700;
  }
  p {
    height: 14px;
    font-size: 12px;
    color: #3c3c3c;
    margin-bottom: 14px;
  }
`;
