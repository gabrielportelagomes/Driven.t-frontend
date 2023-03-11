import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useSaveBooking from '../../../hooks/api/useSaveBooking';
import useToken from '../../../hooks/useToken';
import CardHotel from './CardHotel';
import CardRoom from './CardRoom';

export default function Hotel({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(undefined);
  const [roomsData, setRoomsData] = useState(undefined);
  const [selectedRoom, setSelectedRoom] = useState(undefined);
  const { saveBookingLoading, saveBooking } = useSaveBooking();

  async function bookingRoom() {
    try {
      const body = {
        roomId: selectedRoom,
      };

      await saveBooking(body);
      toast('Informações salvas com sucesso!');
    } catch (error) {
      toast('Não foi possível salvar suas informações!');
    }
  }

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
                setRoomsData={setRoomsData}
                setSelectedRoom={setSelectedRoom}
              />
            ))}
          </div>
        </HotelsContainer>
        {selectedHotel && (
          <RoomsContainer>
            <p>Ótima pedida! Agora escolha seu quarto:</p>
            <div>
              {roomsData.map((room) => {
                return (
                  <CardRoom key={room.id} room={room} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
                );
              })}
            </div>
            <BookingButton onClick={() => bookingRoom()} disabled={!selectedRoom || saveBookingLoading}>
              RESERVAR QUARTO
            </BookingButton>
          </RoomsContainer>
        )}
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
    flex-wrap: wrap;
  }
  & > p {
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 33px;
    margin-top: 52px;
  }
`;

const BookingButton = styled.button`
  width: 182px;
  height: 37px;
  border: none;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 38px;
  margin-bottom: 100px;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? 'cursor' : 'pointer')};
`;
