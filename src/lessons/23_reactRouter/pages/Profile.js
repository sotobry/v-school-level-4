import {
  Link,
  Switch, Route,
  useRouteMatch
} from 'react-router-dom';
import Info from './profile/Info';
import Settings from './profile/Settings';

const Profile = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${url}/info`}>Profile Info</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Profile Settings</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/info`}>
          <Info />
        </Route>
        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
};

export default Profile;