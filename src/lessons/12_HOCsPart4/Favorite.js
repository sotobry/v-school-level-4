import React from 'react';
import withToggler from './withToggler';

const Favorite = props => {
  const { toggle: toggleFavorite, isOn: isFavorited } = props;

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1 onClick={toggleFavorite}>
        {isFavorited ? '❤️' : '♡'}
      </h1>
    </div >
  );
};

const FavoriteWithToggler = withToggler(Favorite, false);
export default FavoriteWithToggler;