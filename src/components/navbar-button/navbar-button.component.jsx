import './navbar-button.style.css';

const NavbarButton = (props) => {
    const { name } = props;
    return (
        <div className='navbar-button'>{name}</div>
    )
}

export default NavbarButton;