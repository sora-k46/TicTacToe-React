
    function showMenu() {
        console.log('clicked')
    }

const HamburgerMenu = (props) => {


    return (
        <div className='hamburger'>
            <div className='ham'></div>
            <div className='ham'></div>
            <div className='ham'></div>
        </div>
    );
}

export default HamburgerMenu;