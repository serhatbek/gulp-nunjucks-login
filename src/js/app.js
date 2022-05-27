// import * as $ from '../../node_modules/jquery/dist/jquery.min';
// import parsley from '../../node_modules/parsley/dist/parsley';
// *******************************
$('#form-email')
  .parsley()
  .on('field:success', function () {
    $('.form__action .button.button--disabled').removeClass('button--disabled');
  });
$('#form-email')
  .parsley()
  .on('form:error', function () {
    $('.form__action .button.button--disabled').addClass('button--disabled');
  });
// dsfdsgfg@gmail.com

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

const input = document.querySelector('.input input');
const formSub = document.querySelector('.form__action .button');

if (input) {
  input.addEventListener('input', changeDataFilled);
}

function changeDataFilled() {
  if (input.value === '') {
    input.dataset.filled = 'false';
    formSub.disabled = true;
    formSub.classList.add('button--disabled');
  } else {
    input.dataset.filled = 'true';
    formSub.disabled = false;
    formSub.classList.remove('button--disabled');
  }
}

// ***************************
const togglePassword = document.querySelector('.input__icon');
const passIcon = document.querySelector('.input__icon img');
const password = document.querySelector('#login__password');

console.log(password, togglePassword);

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
