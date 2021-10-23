import withFavoriteNumber from './withFavoriteNumber';

const HOCsPart3Practice = props =>
  <div>{props.somePropHere} My fav num is {props.favNum}</div>;

const HOCsPart3PracticeWithFavoriteNumber = withFavoriteNumber(HOCsPart3Practice);

export default HOCsPart3PracticeWithFavoriteNumber;