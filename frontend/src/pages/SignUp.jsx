import React from 'react';
import { useFormik } from 'formik';
import Logo from '../assets/imgs/logo1.png';
import { signUp } from '../functions/Requirer';
import InputComponent from '../components/InputComponent';
import '../assets/css/SignUp.css';

export default () => {
  const form = useFormik({

    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      date_birth: '',
      description: '',
    },
    onSubmit: (values) => signUp(
      values.name,
      values.email,
      values.password,
      values.date_birth,
      values.description,
    ),
  });
  return (
    <section id="signup_page">
      <div id="signup_form_box">
        <h1>Cadastro</h1>
        <form onSubmit={form.handleSubmit}>
          <InputComponent name="name" type="text" placeholder="Nome" value={form.values.name} onChange={form.handleChange} id="nameInput" className="signup_form_input" />
          <InputComponent name="email" type="email" placeholder="E-mail" value={form.values.email} onChange={form.handleChange} id="emailInput" className="signup_form_input" />
          <div className="divided">
            <InputComponent name="password" type="password" placeholder="Senha" value={form.values.password} onChange={form.handleChange} id="passwordInput" className="signup_form_input" />
            <InputComponent name="repeatPassword" type="password" placeholder="Repita Sua Senha" value={form.values.repeatPassword} onChange={form.handleChange} id="repeatPasswordInput" className="signup_form_input" />
          </div>
          <InputComponent name="dateBirth" type="datetime" placeholder="Data de Nascimento" value={form.values.date_birth} onChange={form.handleChange} id="dateBirthInput" className="signup_form_input" />
          <div>
            <textarea name="description" type="text" placeholder="Descreva você para o mundo" value={form.values.descipline} onChange={form.handleChange} id="descriptionInput" className="signup_form_input" />
          </div>
          <div id="terms_box">
            <span>
              <input type="checkbox" name="accept_terms" />
              <a href="/olá mundo" id="terms_conditions"> Termos e Condições</a>
            </span>
            <button type="submit" id="signup_form_submit_button">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <div id="signup_logo_box">
        <img src={Logo} alt="logo do musicker" />
      </div>
    </section>
  );
};
