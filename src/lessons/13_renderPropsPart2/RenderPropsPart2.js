import Example from './Example';

const RenderPropsPart2 = () =>
  <Example
    render={name => <h1>Hello {name}</h1>}
  />;

export default RenderPropsPart2;