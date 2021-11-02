import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

const ReactRouterChallenge = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/products'><Products /></Route>
          <Route path='/products/:productId'><ProductDetail /></Route>
        </Switch>
      </nav>
    </div>
  );
};

export default ReactRouterChallenge;