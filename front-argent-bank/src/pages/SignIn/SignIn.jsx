import { NavBar } from "../../components/NavBar.jsx";
import { Footer } from "../../components/Footer.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/loginActions";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.login.isAuth);
  const token = useSelector((state) => state.login.token);
  const error = useSelector((state) => state.login.error);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    dispatch(login(formData));
    event.preventDefault();
  };

  useEffect(() => {
    const datas = async () => {
      if (isAuth) {
        localStorage.setItem("token", token);
        navigate("/profile");
      }
    };
    datas();
  }, [isAuth, navigate, token]);

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
            {error && <p className="error">{error}</p>}
        </section>
      </main>
      <Footer />
    </>
  );
}
