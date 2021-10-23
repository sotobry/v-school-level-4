// import withPointlessHOC from './withPointlessHOC';
import withExtraPropAdded from './withExtraPropAdded';

const HOCsPart2 = props => {
  console.log(props);
  return <div>Hello world!</div>;
};

// const HOCsPart2WithPointlessHOC = withPointlessHOC(HOCsPart2);
// export default HOCsPart2WithPointlessHOC;

const HOCsPart2WithExtraPropAdded = withExtraPropAdded(HOCsPart2);
export default HOCsPart2WithExtraPropAdded;