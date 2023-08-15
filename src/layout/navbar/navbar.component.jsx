import { Outlet, Link } from 'react-router-dom'
import NavbarButton from '../../components/navbar-button/navbar-button.component';
import './navbar.style.css';


const Navbar = () => {

    const paths = [
      {
        pathName: "Active Tasks",
        linkTo: "/",
      },
      {
        pathName: "Inactive Tasks",
        linkTo: "browse-inactive",
      },
      {
        pathName: "Create New Task",
        linkTo: "create-task",
      },
    ];

  return (
    <div className='main-wrapper'>
      <div className='navbar-body'>
        {paths.map((path, index) => 
            <Link className="link-button"key={index} to={path.linkTo}> <NavbarButton name={path.pathName}/> </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
