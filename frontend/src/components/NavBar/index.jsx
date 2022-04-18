import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return(
        <div>
            <NavLink to='/'>Logo</NavLink>
            <NavLink to='/'>Main</NavLink>
            <NavLink to='/'>MyPage</NavLink>
        </div>
    )
}
export default NavBar;