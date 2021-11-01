import { useParams, useHistory } from 'react-router';
import servicesData from '../../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const history = useHistory();
  const { push } = history;
  console.log(history);

  const service = servicesData.find(service => service._id === serviceId);

  const handleClick = () => {
    setTimeout(() => {
      push('/services');
    }, 2000);
  };
  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>{service.name} (${service.price})</h3>
      <p>{service.description}</p>
      <button onClick={handleClick}>Go back</button>
    </div>

  );
};

export default ServiceDetail;