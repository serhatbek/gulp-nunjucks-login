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
console.log(input.value);

input.addEventListener('input', changeDataFilled);

function changeDataFilled() {
  if (input.value === '') {
    input.dataset.filled = 'false';
  } else {
    input.dataset.filled = 'true';
  }
}
