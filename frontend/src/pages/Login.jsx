import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Login.css';
import Logo from '../assets/imgs/logo1.png';
import InputComponent from '../components/InputComponent';

const Login = () => (
  <main id="loginPage">
    <div id="logo_box">
      <img src={Logo} alt="" />
    </div>
    <section className="login_box animate__animated animate__slideInUp">
      <h1>Login</h1>
      <form id="login_form" method="post" actiom="#">
        <InputComponent name="email" id="emailInput" className="email_input" placeholder="E-mail" type="email" />
        <div>
          <InputComponent name="password" id="passwordInput" className="password_input" placeholder="Senha" type="password" />
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

export default Login;
