import { Redirect } from 'react-router-dom';

const WithAuth = (Component) => {
  const AuthRoute = (props) => {
    const isAuthenticated = localStorage.getItem('access_token') != null;
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return AuthRoute;
};

export default WithAuth;
