import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../Store/Context/Context';

function ProtectedRoute({ children }) {
  const location = useLocation()
  const navigate = useNavigate();
  const {store} = useContext(Context)

  useEffect(() => {
    if (!store.isLogin) {
      navigate('/auth-login', {state: {prev: location.pathname}});
    }
    // eslint-disable-next-line
  }, [store.isLogin]); // Include isLogin in the dependency array

  return children; // Return children directly
}

export default ProtectedRoute;
