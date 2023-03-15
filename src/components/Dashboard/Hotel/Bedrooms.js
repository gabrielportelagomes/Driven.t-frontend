import { useState } from 'react';

export default function Bedrooms({ num, bed, room, reserved }) {  
  const [colorIcon, setColorIcon] = useState('');
  const [sharp, setSharp] = useState('person-outline');
  function changeColor() {  
    if(colorIcon === '' && sharp === 'person-outline' ) {
      reserved.splice(0);
      setSharp('person-sharp');
      setColorIcon('#ff4791');   
      reserved.push(room[num].id * 10 + bed);            
    }if(sharp === 'person-sharp') {
      setSharp('person-outline');
      setColorIcon('');
      reserved.splice(0);
    }    
  }    
  return (
    <>      
      <ion-icon onClick = {() => changeColor(room[num].hotelId)} style={{ width: '20.25px', height: '20.25px', margin: 'auto 8px auto auto', cursor: 'pointer', color: colorIcon }}name={sharp} ></ion-icon>
    </>
  );
}
