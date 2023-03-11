import styled from 'styled-components';
import useSaveBooking from '../../../hooks/api/useSaveBooking';

export default function BookingCard({ resultBooking, room }) {
  console.log(resultBooking, 'resultBooking');
  const { saveBooking } = useSaveBooking();
  async function handleBooking() {
    try {
      const result = await saveBooking();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {resultBooking && (
        <HotelsContainer>
          <h1>Escolha hotel e quarto</h1>
          <span>Você já escolheu seu quarto:</span>
          <Card>
            <img src="image" alt="hotel" />
            <h2>Nome Hotel</h2>
            <h3>Quarto reservado</h3>
            <p>101 (double)</p>
            <h3>Pessoas no seu quarto</h3>
            <p>Você e mais 2</p>
          </Card>
          <Button onClick={handleBooking}>TROCAR DE QUARTO</Button>
        </HotelsContainer>
      )}
    </>
  );
}
const HotelsContainer = styled.div`
  & > h1 {
    font-size: 34px;
    color: #000000;
    margin-bottom: 36px;
  }
  & > span {
    font-size: 20px;
    color: #8e8e8e;
    margin-top: 10px;
    margin-bottom: 18px;
  }
`;
const Card = styled.div`
  margin-top: 25px;
  width: 196px;
  height: 264px;
  background-color: #ebebeb;
  border-radius: 5px;
  padding: 16px 14px 8px;
  margin-right: 19px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  & > h2 {
    white-space: nowrap;
    word-break: keep-all;
    font-size: 20px;
    color: #343434;
    margin-bottom: 8px;
  }
  & > h3 {
    white-space: nowrap;
    word-break: keep-all;
    font-size: 12px;
    color: #3c3c3c;
    margin-bottom: -5px;
  }
  & > p {
    font-size: 15px;
    color: #343434;
    margin-top: 10px;
    margin-bottom: 18px;
  }
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 37px;
  border: none;
  border-radius: 10px;
  padding: 8px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 17px;
  font-size: 16px;
  background-color: #e0e0e0;
`;
