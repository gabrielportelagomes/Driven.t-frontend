import styled from 'styled-components';
import useRooms from '../../../hooks/api/useRooms';

export default function Hotel({ hotel, setSelectedHotel }) {
  const { rooms } = useRooms(hotel.id);  
  if (rooms) {
    function definirTipos() {
      let frase = '';
      const single = rooms.find((room) => (room.name = 'single'));
      const double = rooms.find((room) => (room.name = 'double'));
      const triple = rooms.find((room) => (room.name = 'triple'));

      if (single && !double && !triple) {
        frase += 'Single';
      } else if (!single && !double && !triple) {
        frase += 'Double';
      } else if (!single && !double && triple) {
        frase += 'Triple';
      } else if (single && double && !triple) {
        frase += 'Single e Double';
      } else if (single && !double && triple) {
        frase += 'Single e Triple';
      } else if (!single && double && triple) {
        frase += 'Double e Triple';
      } else {
        frase += 'Single, Double e Triple';
      }
      return frase;
    }

    function definirVagas() {
      let vagas = 0;
      rooms.map((room) => {
        vagas += room.capacity;
        if(room.Booking.length>0) {
          vagas -= Number(room.Booking.length);
        }
      });
      return vagas;
    }
    return (
      <Card onClick = { () => setSelectedHotel(hotel.id - 1) }>
        <img src={hotel.image} alt="hotel" />
        <h1>{hotel.name}</h1>
        <h2>Tipos de acomodação</h2>
        <p>{definirTipos()}</p>
        <h2>Vagas disponíveis</h2>
        <p>{definirVagas()}</p>
      </Card>
    );
  }

  return <></>;
}

const Card = styled.div`
  width: 196px;
  height: 264px;
  background-color: #ebebeb;
  border-radius: 5px;
  padding: 16px 14px 0;
  margin-right: 19px;
  cursor: pointer;
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
  & > h2 {
    margin-top: 10px;
    font-size: 12px;
    color: #3c3c3c;
    margin-bottom: 2px;
    font-weight: 700;
  }
  & > p {
    font-size: 12px;
    color: #3c3c3c;
    margin-bottom: 2px;
  }
`;
