import { ReactNode } from 'react';
import styled from 'styled-components';
import IProduct from '../..//models/product.model';
import ProductContextProvider from './context/product.context';

type ProductCardProps = {
  product: IProduct;
  info: ReactNode,
  thumbnail: ReactNode,
  action: ReactNode,
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, info, thumbnail, action }) => {

  return (
    <ProductContextProvider product={product}>
      <StyledProductCard>
        {thumbnail}
        {info}
        {action}
      </StyledProductCard>
    </ProductContextProvider>
  )
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