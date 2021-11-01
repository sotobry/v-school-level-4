import { useParams } from 'react-router';
import servicesData from '../../data/servicesData';
const ServiceDetail = props => {
  const { serviceId } = useParams();
  const service = servicesData.find(service => service._id === serviceId);
  return (
    <>
      <h1>Service Detail Page</h1>
      <h3>{service.name} (${service.price})</h3>
      <p>{service.description}</p>
    </>
  );
};

export default ServiceDetail;