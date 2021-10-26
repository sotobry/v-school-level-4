import './styles.css';
import Header from './Header';
import Button from './Button';

import { ThemeContextConsumer } from './themeContext';

const Context = () =>
  <div>
    <Header />
    <ThemeContextConsumer>{
      ({ isDarkMode, toggleDarkMode }) => <Button isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    }</ThemeContextConsumer>
    {/* <Button /> */}
  </div>;

export default Context;