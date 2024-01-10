import { NavBar } from "../../components/NavBar.jsx";
import { Footer } from "../../components/Footer.jsx";
import { useState } from "react";

export function SignIn() {
  const [formDatas, setFormDatas] = useState({
    formDatas: [{ username: "", password: "" }],
  });
  const handleChange = (event) => {
    setFormDatas({
      formDatas: [
        { ...formDatas.formDatas, [event.target.name]: event.target.value },
      ],
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={() => handleSubmit(formDatas)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
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
        </section>
      </main>
      <Footer />
    </>
  );
}
