import Menu from './Menu';
import Favorite from './Favorite';
import Toggler from './Toggler';

const RenderPropsPart3 = () =>
  <div>
    <Toggler
      render={(show, toggleShow) =>
        <Menu
          toggleShow={toggleShow}
          show={show}
        />
      }
    />
    <hr />
    <Toggler
      defaultIsOnValue={false}
      render={(isFavorited, toggleFavorite) =>
        <Favorite
          isFavorited={isFavorited}
          toggleFavorite={toggleFavorite}
        />
      }
    />
  </div>;

export default RenderPropsPart3;