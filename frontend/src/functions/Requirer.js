import axios from 'axios';

const mainPath = 'localhost:3333';

function login(email, password) {
  axios.post(`${mainPath}/users/login`, {
    email, password,
  })
    .then((response) => {
      localStorage.setItem('user', response.user);
    })
    .catch((error) => {
      alert(error);
    });
}

// eslint-disable-next-line camelcase
function signUp(name, email, password, date_birth, description) {
  axios.post(`${mainPath}/users`, {
    name,
    email,
    password,
    date_birth,
    description,
  })
    .then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp));
    })
    .catch((error) => {
      alert(error);
    });
}

export { login, signUp };
