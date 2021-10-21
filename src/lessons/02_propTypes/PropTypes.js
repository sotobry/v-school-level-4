import Card from '../Card';

const PropTypes = () => (
  <div>
    <Card cardColor='red' height={200} width={100} />
    <Card cardColor='blue' width={50} height={100} />
    <Card cardColor='green' height={200} width={200} />
  </div>
);

export default PropTypes;