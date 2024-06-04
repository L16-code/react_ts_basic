import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../state_management/reducers';
import { useDispatch } from 'react-redux';
import { logOutAction } from '../../state_management/actions/AuthActions';

interface HeaderProps {
    isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = () => {
    const { isLoggedIn } = useSelector((state: RootState) => state.authReducers);
    const isAuthenticated = isLoggedIn;
    const dispatch=useDispatch()

    return (
        <nav>
            <Link to="/">Home</Link>
            {isAuthenticated && (
                <>
                    <Link to="/profile">Profile</Link>
                    <Link to="/myorders">My Orders</Link>
                </>
            )}
            {isAuthenticated ? (
                <Link to="/" onClick={()=>{ dispatch(logOutAction()) }}>Logout</Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Header;
