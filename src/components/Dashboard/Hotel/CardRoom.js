import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import useBookingByRoomId from '../../../hooks/api/useBooking';
import { useEffect, useState } from 'react';

export default function CardRoom({ room, selectedRoom, setSelectedRoom }) {
  const [roomCapacity, setRoomCapacity] = useState([]);
  const { bookingByRoomId } = useBookingByRoomId(room.id);

  useEffect(() => {
    if (bookingByRoomId) {
      for (let i = 0; i < room.capacity; i++) {
        if (i < bookingByRoomId.result._count.Booking) {
          setRoomCapacity((roomCapacity) => [...roomCapacity, 'unavailable']);
        } else {
          setRoomCapacity((roomCapacity) => ['available', ...roomCapacity]);
        }
      }
    }
  }, [bookingByRoomId]);

  function selectRoom() {
    setSelectedRoom(room.id);
    let index = roomCapacity.length - 1;

    if (roomCapacity.indexOf('unavailable') !== -1) {
      index = roomCapacity.indexOf('unavailable') - 1;
    }

    roomCapacity[index] = 'selected';
  }

  if (!bookingByRoomId) {
    return <></>;
  }

  return (
    <Card
      onClick={() => selectRoom()}
      disabled={room.capacity === bookingByRoomId.result._count.Booking}
      isSelected={room.id === selectedRoom}
    >
      <RoomName>{room.name}</RoomName>
      <CapacityContainer>
        {roomCapacity.map((booked, index) => {
          return booked === 'available' || (booked === 'selected' && selectedRoom !== room.id) ? (
            <BsPerson key={index} />
          ) : (
            <Icon key={index} isSelected={room.id === selectedRoom} booked={booked}>
              <BsPersonFill />
            </Icon>
          );
        })}
      </CapacityContainer>
    </Card>
  );
}

const Card = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 45px;
  margin-right: 17px;
  margin-bottom: 8px;
  border: 1px solid #cecece;
  background-color: ${(props) => (props.disabled ? '#cecece' : props.isSelected ? '#FFEED2' : '#ffffff')};
  border-radius: 10px;
  padding: 0 10px 0 16px;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'cursor' : 'pointer')};
`;

const RoomName = styled.div`
  color: #454545;
  font-weight: 700;
  font-size: 20px;
`;

const CapacityContainer = styled.div`
  display: flex;
  align-items: center;
  color: #454545;
  font-weight: 700;
  font-size: 27px;
`;

const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.booked === 'selected' ? '#ff4791' : '#000000')}; ;
`;
