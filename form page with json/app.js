var $input = $('.create > input');

$input.blur(function (e) {
  $(this).toggleClass('filled', !!$(this).val());
});