
import { useSelector } from 'react-redux';
 import { Navigate } from 'react-router-dom';

export default  function PrivateRoute({children}){
    const { token,loggeduser } = useSelector(
                (state) => state.userDetails
            );
            return token? children:<Navigate to="/user-signin"/>
};