import styled from "styled-components";
import Title from './Title';
import Description from './Description';
import Price from './Price';
import Rating from './Rating';
import Stock from './Stock';

type InfoProps = {
  title: string;
  description: string;
  discount: number;
  price: number;
  rating: number;
  stock: number;
};

const Info: React.FC<InfoProps> = ({
  title,
  description,
  discount,
  price,
  rating,
  stock,
}) => {
  return (
    <>
      <FlexContainer>
        <Title>{ title }</Title>
        <Rating rating={rating} />
      </FlexContainer>
      <Stock stock={stock} />
      <Price price={price} discount={discount} />
      <Description>{description}</Description>
    </>
  )
};

export default Info;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;