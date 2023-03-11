import styled from 'styled-components';
import CardHotel from './CardHotel';
import { useState } from 'react';
import useRooms from '../../../hooks/api/useRooms';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Rooms from './Rooms';

export default function Hotel({ hotels }) {
  const { enrollment } = useEnrollment();
  const list = []; 
  const reserved = [];   
  const [selectedHotel, setSelectedHotel ] = useState(null); 
  for(let i = 1; i <= 3; i++) {
    const { rooms } = useRooms(i);
    list.push(rooms);
  }
  if(list[list.length - 1] === null) {
    return '...';
  }
  const room = list[selectedHotel];
  
  if (hotels) {
    return (
      <HotelsContainer>
        <h1>Escolha de quarto de hotel</h1>
        <p>Primeiro, escolha seu hotel</p>
        <div>
          {hotels.map((hotel) => (
            <CardHotel key={hotel.id} hotel={hotel} setSelectedHotel={setSelectedHotel}/>
          ))}
        </div>
        {room ? ( 
          <>
            <p style={{ marginTop: '52px' }}>Ótima pedida! Agora escolha seu quarto</p>
            <Container>
              {room.map((bedroom, index) => (
                <Rooms key={ bedroom.id } index={index} room={room} reserved={reserved}/>
              ))}
            </Container>   
            <Button onClick={ () => console.log(reserved, enrollment.id) } /* Esse console.log dispara exatamente o número da vaga selecionada = RoomId; enrollment.id = userId*/>Reservar quarto</Button>         
          </>
        ) : ''}
      </HotelsContainer>
    );
  }
  return <></>;
}

const HotelsContainer = styled.div`
  &>div{
    display: flex;
  }
  &>h1{
    font-size: 34px;
    color: #000000;
    margin-bottom: 36px;
  }
  &>p{
  font-size: 20px;
  color: #8E8E8E;
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
