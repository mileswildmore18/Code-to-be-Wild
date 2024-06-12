import { Link } from "react-router-dom";
import Search from "../../components/Search";
import Auth from "../../utils/auth";
import logo from "../../assets/images/parsr-logo.png";
import CatImage from "../../assets/images/SVG/cat-03-front.svg";
import "./style.css";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <AppBar position='static'>
      <Toolbar id='padding-xs' style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <img src={logo} alt='PARSR Logo' style={{ height: "100px" }} /> */}

        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ marginLeft: "450px" }}>Shelter the Wild</h1>
        </Link>

        <div className='flexbox-turn-on' id='right-header'>
          <>
            <Button color='inherit' component={Link} to='/donate'>
              Donate
            </Button>
          </>
          <div className='flexbox-turn-on' id='and-another-one'>
            <>
              <Search id='hidden-break' />
            </>
            <>
              {Auth.loggedIn() ? (
                <div
                  className='flexbox-turn-on'
                  id='furthest-right-header-avatar'
                >
                  <Avatar
                    component={Link}
                    to='/profile'
                    src={CatImage}
                    alt='Profile'
                    sx={{ height: "40px" }}
                    id='avatar'
                  >
                  </Avatar>
                  <Button color='inherit' onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <div className='flexbox-turn-on' id='furthest-right-header'>
                  <Button color='inherit' component={Link} to='/login'>
                    Login
                  </Button>
                </div>
              )}
            </>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;