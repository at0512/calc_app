/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = () => {

    return (
        <nav>
            <a onClick = {()=>console.log('clicked calc')} href="#">Calculator</a>
            <a onClick = {()=>console.log('clicked timer')} href="#">Timer</a>
            <a onClick = {()=>console.log('clicked tap')} href="#">Tap</a>
        </nav>
    );
}

export default Navbar;