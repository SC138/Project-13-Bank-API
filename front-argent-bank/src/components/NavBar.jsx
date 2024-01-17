import logo from "../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/loginActions";

export function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const firstName = useSelector((state) => state.profile.body.firstName);

  function handleSignOut() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuth ? (
            <>
              <Link className="main-nav-item-connect" to="/profile">
                <i className="fa fa-user-circle user-connect"></i>
                {firstName}
              </Link>
              <Link className="main-nav-item" onClick={handleSignOut} to="/">
                <i className="fa fa-user-circle"></i>
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="./sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
