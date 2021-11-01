import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import servicesData from '../../data/servicesData';

const ServicesList = props => {
  console.log(useLocation());
  const location = useLocation();
  const { pathname } = location;
  console.log({ pathname });

  console.log(useRouteMatch());


  return (
    <div>
      <h1>Services List Page</h1>
      {servicesData.map(service =>
        <div key={service._id}>
          <h2><Link to={`${pathname}/${service._id}`}>{service.name}</Link> ${service.price}</h2>
        </div>
      )}
    </div>
  );
};

export default ServicesList;