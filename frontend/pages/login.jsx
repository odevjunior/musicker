
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'


export default () => {
    return(
        <main id="loginPage">
            <div id="logo_box">
                <img src="imgs/logo1.png" alt=""/>
            </div>
            <section class="login_box animate__animated animate__slideInUp">
                <h1>Login</h1>
                <form id="login_form" method="post" actiom="#">                    
                    <div>
                        <input type='email' class="email_input" placeholder="E-mail"/>
                    </div>
                    <div>
                        <input type="password" class="password_input" placeholder="Senha"/>
                        <button type="submit" class="button_submit">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                    <div class="forgot_password">
                        <span>
                            Esqueci minha senha
                        </span>
                    </div>
                    <div class="sign_up">
                        <a>Cadastre-se</a>
                    </div>
                </form>
            </section>
        </main>
    )
}