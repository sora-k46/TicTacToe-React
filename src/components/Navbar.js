import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='hamburger-menu'>
                <HamburgerMenu />
            </div>
            <h1 className='logo'>Sorrawit</h1>
            <ul className='nav-link'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
            </ul>
        </nav>
    );
}

export default Navbar;