import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react';
import NavbarButton from '../../components/navbar-button/navbar-button.component';


const Navbar = () => {

    const paths = [
      {
        pathName: "Home",
        linkTo: "/",
      },
      {
        pathName: "Inactive",
        linkTo: "browse-inactive",
      },
      {
        pathName: "Create New Task",
        linkTo: "create-task",
      },
    ];

  return (
    <Fragment>
      <div>
        {paths.map((path, index) => 
            <Link key={index} to={path.linkTo}> <NavbarButton name={path.pathName}/> </Link>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
