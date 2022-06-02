// import * as $ from '../../node_modules/jquery/dist/jquery.min';
// import parsley from '../../node_modules/parsley/dist/parsley';
// *******************************
$('#login-form').parsley();

//has uppercase
window.Parsley.addValidator('uppercase', {
  requirementType: 'number',
  validateString: function (value, requirement) {
    var uppercases = value.match(/[A-Z]/g) || [];
    return uppercases.length >= requirement;
  },
});

//has lowercase
window.Parsley.addValidator('lowercase', {
  requirementType: 'number',
  validateString: function (value, requirement) {
    var lowecases = value.match(/[a-z]/g) || [];
    return lowecases.length >= requirement;
  },
});

//has number
window.Parsley.addValidator('number', {
  requirementType: 'number',
  validateString: function (value, requirement) {
    var numbers = value.match(/[0-9]/g) || [];
    return numbers.length >= requirement;
  },
});

//has special char
window.Parsley.addValidator('special', {
  requirementType: 'number',
  validateString: function (value, requirement) {
    var specials = value.match(/[^a-zA-Z0-9]/g) || [];
    return specials.length >= requirement;
  },
});

// **********************

const formSub = document.querySelector('.form__action .button');
const inputs = Array.from(document.querySelectorAll('.input input'));

if (inputs) {
  inputs.forEach((input) => {
    input.addEventListener('input', toggleDataFilled);
  });
}

function toggleDataFilled() {
  inputs.forEach((input) => {
    if (input.value === '') {
      input.dataset.filled = 'false';
      formSub.disabled = true;
    } else {
      input.dataset.filled = 'true';
      formSub.disabled = false;
    }
  });
}

if (formSub) {
  formSub.addEventListener('submit', (e) => e.preventDefault);
}

// ***************************
const togglePassword = document.querySelector('.input__icon');
const passIcon = document.querySelector('.input__icon img');
const password = document.querySelector('#login__password');

if (togglePassword) {
  togglePassword.addEventListener('click', showHidePassword);
}

function showHidePassword() {
  if (password.type === 'password') {
    passIcon.src = '/assets/images/pass-hidden.png';
    password.type = 'text';
  } else {
    passIcon.src = '/assets/images/pass-visible.png';
    password.type = 'password';
  }
}

// **************************

const captchaContainer = document.querySelector('.captcha'),
  captchaRefreshBtn = document.querySelector('#captcha__refresh'),
  captchaListenBtn = document.querySelector('#captcha__listen'),
  captchaImage = document.querySelector('.captcha__img figure img');

if (captchaContainer) {
  captchaRefreshBtn.addEventListener('click', () => {
    captchaImage.src = 'https://source.unsplash.com/random/150×72/';
  });
}
