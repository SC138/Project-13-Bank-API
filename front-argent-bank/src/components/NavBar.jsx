import logo from "../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router";
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
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {isAuth ? (
            <>
              <a href="/profile">
                <i className="fa fa-user-circle"></i>
                {firstName}
              </a>
              <a className="main-nav-item" onClick={handleSignOut} href="/">
                <i className="fa fa-user-circle"></i>
                Sign Out
              </a>
            </>
          ) : (
            <a className="main-nav-item" href="./sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
