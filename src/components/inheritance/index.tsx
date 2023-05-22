import Error from '../Error';
import Loading from '../Loading';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';

const Inheritance: React.FC = () => {
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
          title={p.title}
          description={p.description}
          price={p.price}
          discount={p.discountPercentage}
          rating={p.rating}
          stock={p.stock}
          thumbnail={p.thumbnail}
        />
      ))}
    </div>
  );
};

export default Inheritance;

