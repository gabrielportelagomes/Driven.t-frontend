import styled from 'styled-components';
import BookingCard from './BookingCard';
import CardHotel from './CardHotel';

import useSaveBooking from '../../../hooks/api/useSaveBooking';

export default function Hotel({ hotels }) {
  const { booking, saveBooking } = useSaveBooking();
  if (hotels) {
    return (
      <HotelsContainer>
        <h1>Escolha de quarto e hotel</h1>
        <p>Primeiro, escolha seu hotel</p>
        <div>
          {hotels.map((hotel) => (
            <CardHotel key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </HotelsContainer>
    );
  }
  // if (booking) {
  //   return <BookingCard hotel={hotels} saveBooking={saveBooking} room={booking}/>;
  // }
  return <BookingCard hotel={hotels} saveBooking={saveBooking} room={booking} />;
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
