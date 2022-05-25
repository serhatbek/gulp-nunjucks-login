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
