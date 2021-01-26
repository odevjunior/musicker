import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Login.css';
import { useFormik } from 'formik';
import Logo from '../assets/imgs/logo1.png';
import InputComponent from '../components/InputComponent';
import { login } from '../functions/Requirer';
// import { login } from '../functions/Requirer';

const Login = () => {
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // eslint-disable-next-line no-console
    onSubmit: (values) => login(values.email, values.password),
  });
  return (
    <main id="loginPage">
      <div id="logo_box">
        <img src={Logo} alt="" />
      </div>
      <section className="login_box animate__animated animate__slideInUp">
        <h1>Login</h1>
        <form id="login_form" method="post" actiom="#" onSubmit={form.handleSubmit}>
          <InputComponent name="email" id="emailInput" className="email_input" placeholder="E-mail" type="email" onChange={form.handleChange} value={form.values.email} />
          <div>
            <InputComponent name="password" id="passwordInput" className="password_input" placeholder="Senha" type="password" onChange={form.handleChange} value={form.values.password} />
            <button type="submit" className="button_submit">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div className="forgot_password">
            <span>
              Esqueci minha senha
            </span>
          </div>
          <div className="sign_up">
            <p>Cadastre-se</p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
