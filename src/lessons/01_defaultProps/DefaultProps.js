import Card from '../Card';

const DefaultProps = () => (
  <div>
    <Card cardColor='red' height={200} />
    <Card width={50} />
    <Card cardColor='green' height={300} width={400} />
  </div>
);

export default DefaultProps;