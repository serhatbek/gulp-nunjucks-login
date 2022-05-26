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

// **********************

const input = document.querySelector('input');
const formSub = document.querySelector('.button');

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
