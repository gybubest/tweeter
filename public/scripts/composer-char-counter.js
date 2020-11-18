$(document).ready(function() {
  $('.new-tweet form textarea').on('input', function() {
    const textLength = 140 - ($(this).val()).length;
    if (textLength < 0) {
      $(this).parents().find('.counter').val(textLength).css("color", "red");
    } else {
      $(this).parents().find('.counter').val(textLength).css("color", "");
    }
  });
});
