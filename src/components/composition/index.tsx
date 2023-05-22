import styled from 'styled-components';
import useProducts from '../../hooks/useProducts';
import Error from '../Error';
import Loading from '../Loading';
import ProductCard from "./ProductCard";
import Thumbnail from "./Thumbnail";
import Info from "./Info";
import BuyButton from "./BuyButton";
import Title from "./Title";
import Rating from "./Rating";
import Stock from "./Stock";
import Price from "./Price";
import Description from "./Description";

const Composition: React.FC = () => {
  const { error, loading, products } = useProducts();

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className="products__grid">
      {products.map((p) => (
        <ProductCard 
          key={p.id}
          product={p}
          info={
            <Info>
              <FlexContainer>
                <Title />
                <Rating />
              </FlexContainer>
              <Stock />
              <Price />
              <Description />
            </Info>
          }
          thumbnail={<Thumbnail />}
          action={<BuyButton />}
        />
      ))}
    </div>
  )
};

export default Composition;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;