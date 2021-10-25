// import Toggler from './Toggler';

// const Menu = props =>
//   <Toggler render={(show, toggleShow) =>
//     <div>
//       <button onClick={toggleShow}>
//         {show ? 'Hide' : 'Show'}
//       </button>
//       <nav style={{ display: show ? 'block' : 'none' }}>
//         <h6>Signed in as Coder123</h6>
//         <li>Your Profile</li>
//         <li>Your Repositories</li>
//         <li>Your Stars</li>
//         <li>Your Gists</li>
//       </nav>
//     </div>
//   }
//   />;

const Menu = props => {
  const { show, toggleShow } = props;
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

export default Menu;