import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">
                    <h1>
                        MediPoint
                    </h1>
                </NavLink>
            </nav>
        </header>
    );
};

export default NavBar;