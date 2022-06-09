// import * as $ from '../../node_modules/jquery/dist/jquery.min';
// import parsley from '../../node_modules/parsley/dist/parsley';
// *******************************
$('#login-form').parsley();
// const form = document.querySelector('#login-form');
// form.parsley().isValid();

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
const form = document.querySelector('#login-form');

if (form.length > 0) {
  formSub.addEventListener('submit', (e) => e.preventDefault);

  form.addEventListener('keydown', () => {
    setTimeout(() => {
      if ($('#login-form').parsley().isValid()) {
        formSub.disabled = false;
      } else {
        formSub.disabled = true;
      }
    }, 200);
  });
}

// **************************************

if (inputs) {
  inputs.forEach((input) => {
    input.addEventListener('input', toggleDataFilled);
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

    if (target.dataset.filled === 'true') {
      target.parentNode.classList.add('input--line-filled');
    } else {
      target.parentNode.classList.remove('input--line-filled');
    }

    if (target.id === 'login__password--new') {
      target.parentNode.classList.remove('input--line-focus');
      target.parentNode.classList.remove('input--line-filled');
      target.parentNode.classList.remove('input--line-error');
      target.parentNode.classList.add('input--line-green');
    }

    if (target.classList.contains('parsley-error')) {
      target.parentNode.classList.add('input--line-error');
      target.parentNode.classList.remove('input--line-focus');
      target.parentNode.classList.remove('input--line-filled');
    } else {
      target.parentNode.classList.remove('input--line-error');
    }
  });

  input.addEventListener('focus', (e) => {
    let target = e.currentTarget;
    if (target.value === '' && target.id === 'login__password--new') {
      target.parentNode.classList.remove('input--line-focus');
      target.parentNode.classList.add('input--line-green');
    } else {
      target.parentNode.classList.add('input--line-focus');
    }
  });

  input.addEventListener('blur', (e) => {
    let target = e.currentTarget;
    if (target.parentNode.classList.contains('input--line-focus')) {
      target.parentNode.classList.remove('input--line-focus');
    }
  });
});

// ***************************
const togglePasswordBtns = document.querySelectorAll('.input__icon');

if (togglePasswordBtns) {
  togglePasswordBtns.forEach((togglePasswordBtn) => {
    togglePasswordBtn.addEventListener('click', showHidePassword);
  });
}

function showHidePassword(e) {
  let targetInput = e.currentTarget.parentNode.firstChild.nextSibling;
  let targetIcon = e.currentTarget.firstChild.nextSibling;

  if (targetInput.type === 'password') {
    targetIcon.src = '/assets/images/pass-hidden.png';
    targetInput.type = 'text';
  } else {
    targetIcon.src = '/assets/images/pass-visible.png';
    targetInput.type = 'password';
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

// *********************************
const timer = document.querySelector('.timer');
const otpContainer = document.querySelector('.otp');
const getNewCode = document.querySelector('.otp a');
let time = 90;

if (getNewCode) {
  getNewCode.addEventListener('click', startTimer);
}

function startTimer() {
  getNewCode.style.display = 'none';
  timer.style.color = '#696d80';
  otpContainer.classList.add('active');

  const countDown = setInterval(() => {
    time--;
    displayTime(time);

    if (time <= 0) {
      clearInterval(countDown);
      timer.style.color = '#af2246';
      otpContainer.classList.remove('active');
    }
  }, 1000);
}

function displayTime(second) {
  let min = Math.floor(second / 60);
  let sec = Math.floor(second % 60);

  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  timer.innerText = `${min}:${sec}`;
}

// *********************************

const otpForm = document.querySelector('.form__otp');
const otpInputs = document.querySelectorAll('#otp-verify .input input');

if (otpForm) {
  otpForm.addEventListener('input', handleInputFocus);
  otpInputs[0].addEventListener('paste', pasteCode);

  otpInputs.forEach((input) =>
    input.addEventListener('keydown', handleBackSpaceFocus)
  );
}

function pasteCode(e) {
  const paste = e.clipboardData.getData('text');
  otpInputs.forEach((input, i) => (input.value = paste[i] || ''));
}

function handleInputFocus(e) {
  e.preventDefault();
  const otpInput = e.target;
  if (otpInput.value) {
    otpInput.parentNode.nextElementSibling.firstChild.nextSibling.focus();
  }
}

function handleBackSpaceFocus(e) {
  let otpInput = e.target;
  const key = e.key;
  if (key === 'Backspace') {
    otpInput.value = '';
    otpInput.parentNode.previousElementSibling.firstChild.nextSibling.focus();
  }
}
// 345678 657389 form__otp

// const formOtp = document.querySelector('.form__otp').parsley();
// console.log(formOtp.isValid());
