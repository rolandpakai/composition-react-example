import { ReactNode, createContext, useContext } from "react";
import IProduct from "../../../models/product.model";

interface IProductContext {
  product: IProduct;
}

type ProductContextProviderProps = {
  children: ReactNode;
  product: IProduct;
}

const ProductContext = createContext<IProductContext | null>(null);

const ProductContextProvider: React.FC<ProductContextProviderProps> = ({ children, product }) => {
  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

export const useProductContext = (): IProductContext  =>
  useContext(ProductContext) as IProductContext;