import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"


export const PageNav = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    
    return (<div className="navigation">
        {isLoggedIn && <NavLink className="nav-link" to="/contacts/">Contacts</NavLink>}
        <NavLink className="nav-link" to="/">Home</NavLink>
    </div>) 
}