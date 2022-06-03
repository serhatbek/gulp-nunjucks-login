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
// const input = document.querySelector('.input input');
// const inputParent = document.querySelector('.input');
// const inputParentBefore = window.getComputedStyle(inputParent, '::before');

if (formSub) {
  formSub.addEventListener('submit', (e) => e.preventDefault);
}

window.Parsley.on('field:error', function () {
  formSub.disabled = true;
});

window.Parsley.on('field:success', function () {
  formSub.disabled = false;
});

if (inputs) {
  inputs.forEach((input) => {
    input.addEventListener('input', toggleDataFilled);
    // input.addEventListener('input', lineBefore);
  });
}

function toggleDataFilled() {
  inputs.forEach((input) => {
    if (input.value === '') {
      input.dataset.filled = 'false';
    } else {
      input.dataset.filled = 'true';
    }
  });
}

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    let target = e.currentTarget;
    console.log(target);
    if (target === document.activeElement && target.value === '') {
      target.parentNode.classList.add('input--line-focus');
    } else {
    }

    if (target.dataset.filled === 'true') {
      target.parentNode.classList.add('input--line-filled');
    } else {
      target.parentNode.classList.remove('input--line-filled');
    }

    if (target.classList.contains('parsley-error')) {
      target.parentNode.classList.add('input--line-error');
      target.parentNode.classList.remove('input--line-focus');
      target.parentNode.classList.remove('input--line-filled');
    } else {
      target.parentNode.classList.remove('input--line-error');
    }
  });
});

// function lineBefore() {
//   inputs.forEach((input) => {
//     if (input === document.activeElement) {
//       inputParent.style.setProperty('--beforeColor', '#2d56de');
//     }

//     if (input.dataset.filled === 'true') {
//       inputParent.style.setProperty('--beforeColor', '#4c5061');
//     }

//     if (input.classList.contains('parsley-error')) {
//       inputParent.style.setProperty('--beforeColor', '#af2246');
//     }
//   });
// }

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
