import { useParams } from 'react-router-dom';
import productsData from '../data/productsData';

const ProductDetail = () => {
  const { productId } = useParams();

  const product = productsData.find(product =>
    product.id === Number(productId));
  const { name, description } = product;

  return (<div>
    <h1>Product Detail Page</h1>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>);
};

export default ProductDetail;