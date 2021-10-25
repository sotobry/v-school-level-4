// import Toggler from './Toggler';

// const Favorite = props => {
//   return (
//     <Toggler
//       defaultIsOnValue={false}
//       render={(isFavorited, toggleFavorite) =>
//         <div>
//           <h3>Click heart to favorite</h3>
//           <h1 onClick={toggleFavorite}>
//             {isFavorited ? '❤️' : '♡'}
//           </h1>
//         </div>
//       }
//     />
//   );
// };

const Favorite = props => {
  const { isFavorited, toggleFavorite } = props;
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1 onClick={toggleFavorite}>
        {isFavorited ? '❤️' : '♡'}
      </h1>
    </div>
  );
};

export default Favorite;