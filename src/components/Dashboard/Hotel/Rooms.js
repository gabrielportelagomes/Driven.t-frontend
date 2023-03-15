import styled from 'styled-components';
import Bedrooms from './Bedrooms';
import { useState } from 'react';

export default function Rooms({ room, index, reserved }) { 
  const num = index;    
  const [color, setColor] = useState('#fff'); 
  const allBeds = []; 
  for(let i = 0; i < room[index].capacity; i++) {
    const item = i;    
    allBeds.push(item);
  }; 
  
  return (    
    <>      
      <Bedroom style={{ backgroundColor: color }}>
        <h1>{index + 1}</h1>
        <Vacancies>
          {allBeds.map((bed, index) => (
            <Bedrooms key={ bed.id}  num={num} bed={bed} index={index} room={room} reserved={reserved}/>
          ))}
        </Vacancies>                 
      </Bedroom>      
    </>
  );
}

const Bedroom = styled.div`
width: 190px;
height: 45px;
border: 2px solid #cecece;
border-radius: 10px;
padding: 0 4.38px 0 16px;
display: flex;
justify-content: space-between;
&>h1{
    font-size: 20px;
    color: #000000;
    margin: auto 0 ;   
}
`;
const Vacancies = styled.div`
justify-content: space-between;
margin: auto 0 auto 0;
`;
