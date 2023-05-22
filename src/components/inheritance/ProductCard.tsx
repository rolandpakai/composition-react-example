import styled from "styled-components";
import BuyButton from './BuyButton';
import Thumbnail from './Thumbnail';
import Info from './Info';

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  discount,
  rating,
  stock,
  thumbnail,
}) => {

  return (
    <StyledProductCard>
      <Thumbnail src={thumbnail} alt={`${title} thumbnail`}/>
      <Info 
        title={title}
        description={description}
        discount={discount}
        price={price}
        rating={rating}
        stock={stock}
      />
      <BuyButton />
    </StyledProductCard>
  );
};

export default ProductCard;

const StyledProductCard = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
`;