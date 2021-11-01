import { Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';

const ServicesList = props => {
  console.log({ servicesData });
  return (
    <div>
      <h1>Services List Page</h1>
      {servicesData.map(service =>
        <div key={service._id}>
          <h2><Link to={`/services/${service._id}`}>{service.name}</Link> ${service.price}</h2>
        </div>
      )}
    </div>
  );
};

export default ServicesList;