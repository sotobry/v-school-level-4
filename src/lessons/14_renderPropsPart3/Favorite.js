import { useToggler } from './useToggler';
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

const Favorite = () => {
  const [isFavorited, toggleFavorite] = useToggler(false);

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