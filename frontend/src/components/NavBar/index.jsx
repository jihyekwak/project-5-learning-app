import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return(
        <div>
            <NavLink to='/' style={({ isActive }) => ({ backgroundColor: isActive ? '#9ad2a9' : 'white' })}>Logo</NavLink>
            <NavLink to='/main' style={({ isActive }) => ({ backgroundColor: isActive ? '#9ad2a9' : 'white' })}>Main</NavLink>
            <NavLink to='/mypage' style={({ isActive }) => ({ backgroundColor: isActive ? '#9ad2a9' : 'white' })}>MyPage</NavLink>
        </div>
    )
}
export default NavBar;