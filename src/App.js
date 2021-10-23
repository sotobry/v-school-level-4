import './App.css';
// import DefaultProps from './lessons/defaultProps/DefaultProps';
// import PropTypes from './lessons/02_propTypes/PropTypes';
// import DefaultPropsAndPropTypesPractice from './lessons/03_defaultPropsAndPropTypesPractice/DefaultPropsAndPropTypesPractice';
// import ReactChildrenPractice from './lessons/08_reactChildrenPractice/ReactChildrenPractice';
// import HOCsPart2 from './lessons/10_HOCsPart2/HOCsPart2';
import HOCsPart3Practice from './lessons/11_HOCsPart3Practice/HOCsPart3Practice';

function App() {
  return (
    <div className="App">
      {/* <DefaultProps /> */}
      {/* <PropTypes /> */}
      {/* <DefaultPropsAndPropTypesPractice /> */}
      {/* <ReactChildrenPractice /> */}
      {/* <HOCsPart2 /> */}
      <HOCsPart3Practice somePropHere='Hi there!' />
    </div>
  );
}

export default App;
