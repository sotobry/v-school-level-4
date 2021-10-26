import './App.css';

// import DefaultProps from './lessons/defaultProps/DefaultProps';
// import PropTypes from './lessons/02_propTypes/PropTypes';
// import DefaultPropsAndPropTypesPractice from './lessons/03_defaultPropsAndPropTypesPractice/DefaultPropsAndPropTypesPractice';
// import ReactChildrenPractice from './lessons/08_reactChildrenPractice/ReactChildrenPractice';
// import HOCsPart2 from './lessons/10_HOCsPart2/HOCsPart2';
// import HOCsPart3Practice from './lessons/11_HOCsPart3Practice/HOCsPart3Practice';
// import HOCsPart4 from './lessons/12_HOCsPart4/HOCsPart4';
// import RenderPropsPart2 from './lessons/13_renderPropsPart2/RenderPropsPart2';
// import RenderPropsPart3 from './lessons/14_renderPropsPart3/RenderPropsPart3';
// import RenderPropsPractice from './lessons/15_renderPropsPractice/RenderPropsPractice';
// import Context from './lessons/16_context/Context';
// import { ThemeContextProvider } from './lessons/16_context/themeContext';
import ContextChallenge1 from './lessons/17_contextChallenge1/ContextChallenge1';
import { UsernameContextProvider } from './lessons/17_contextChallenge1/usernameContext';

function App() {
  return (
    <div className="App">
      {/* <DefaultProps /> */}
      {/* <PropTypes /> */}
      {/* <DefaultPropsAndPropTypesPractice /> */}
      {/* <ReactChildrenPractice /> */}
      {/* <HOCsPart2 /> */}
      {/* <HOCsPart3Practice somePropHere='Hi there!' /> */}
      {/* <HOCsPart4 /> */}
      {/* <RenderPropsPart2 /> */}
      {/* <RenderPropsPart3 /> */}
      {/* <RenderPropsPractice /> */}
      {/* <ThemeContextProvider> */}
      {/* <Context /> */}
      {/* </ThemeContextProvider> */}
      <UsernameContextProvider>
        <ContextChallenge1 />
      </UsernameContextProvider>
    </div>
  );
}

export default App;
