import React from 'react';
import withToggler from './withToggler';

const Menu = props => {
  const { toggle: toggleShow, isOn: show } = props;
  return (
    <div>
      <button onClick={toggleShow}>
        {show ? 'Hide' : 'Show'}
      </button>
      <nav style={{ display: show ? 'block' : 'none' }}>
        <h6>Signed in as Coder123</h6>
        <li>Your Profile</li>
        <li>Your Repositories</li>
        <li>Your Stars</li>
        <li>Your Gists</li>
      </nav>
    </div>
  );
};

const MenuWithToggler = withToggler(Menu);

export default MenuWithToggler;
// export default Menu;