import styled from 'styled-components';
import BookingCard from './BookingCard';
import CardHotel from './CardHotel';
import { useState } from 'react';
import useRooms from '../../../hooks/api/useRooms';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Rooms from './Rooms';

import useSaveBooking from '../../../hooks/api/useSaveBooking';
import { toast } from 'react-toastify';
import { fetchBooking } from '../../../services/bookingApi';
import useToken from '../../../hooks/useToken';
import { useEffect } from 'react';

export default function Hotel({ hotels }) {
  const { saveBooking } = useSaveBooking();
  const { enrollment } = useEnrollment();
  const { token } = useToken();

  const [booking, setBooking] = useState(false);
  const [resultBooking, setResultBooking] = useState(undefined);
  const [selectedHotel, setSelectedHotel] = useState(null);
  
  const list = [];
  const reserved = [];

  for (let i = 1; i <= 3; i++) {
    const { rooms } = useRooms(i);
    list.push(rooms);
  }
  if (list[list.length - 1] === null) {
    return '...';
  }
  const room = list[selectedHotel];

  
  const handleRoomSelection = async(token, roomId) => {
    if (!roomId) {
      toast('Você precisa escolher o quarto e o hotel!');
      return;
    }

    try {
      const body = { roomId };
      const result = await saveBooking(body);

      if (result) {
        const reservationResult = await fetchBooking(token);
        setBooking(true);
        setResultBooking(result);
      }
    } catch (error) {
      console.error(error);
      toast('Erro em salvar as informações!');
    }
  };

  if (hotels) {
    return (
      <HotelsContainer>
        <h1>Escolha de quarto e hotel</h1>
        <p>Primeiro, escolha seu hotel</p>
        <div>
          {hotels.map((hotel) => (
            <CardHotel key={hotel.id} hotel={hotel} setSelectedHotel={setSelectedHotel} />
          ))}
        </div>
        {room ? (
          <>
            <p style={{ marginTop: '52px' }}>Ótima pedida! Agora escolha seu quarto</p>
            <Container>
              {room.map((bedroom, index) => (
                <Rooms key={bedroom.id} index={index} room={room} reserved={reserved} />
              ))}
            </Container>
            <Button onClick={() => handleRoomSelection(room[0].id, token)}>Reservar quarto</Button>
          </>
        ) : (
          ''
        )}
      </HotelsContainer>
    );
  }

  if (booking) {
    return <BookingCard resultBooking={resultBooking} hotel={hotels} />;
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
const Container = styled.div`
  width: 828px;
  height: 212px;
  margin-top: 33px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Button = styled.button`
  width: 182px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #e0e0e0;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  margin-top: 46px;
  cursor: pointer;
`;
