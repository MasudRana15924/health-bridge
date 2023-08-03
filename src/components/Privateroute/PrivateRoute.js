
import { useSelector } from 'react-redux';
 import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { token} = useSelector(
        (state) => state.userDetails
    );
    return token ? children : <Navigate to="/user-signin" />
};