import { Link } from 'react-router-dom';
import productsData from '../data/productsData';

const Products = () => {
  return (<>
    <h1>Products page</h1>
    {productsData.map(product => {
      const { id, name, price } = product;
      return (
        <div key={id}>
          <Link to={`/products/${id}`}><h2>{name} ${price}</h2></Link>
        </div>
      );
    })}
  </>);
};

export default Products;