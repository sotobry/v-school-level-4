import './styles.css';
import Header from './Header';
import Button from './Button';

import ThemeContext from './themeContext';

const Context = () =>
  <div>
    <Header />
    <ThemeContext.Consumer>{
      isDarkMode => <Button isDarkMode={isDarkMode} />
    }</ThemeContext.Consumer>
    <Button />
  </div>;

export default Context;