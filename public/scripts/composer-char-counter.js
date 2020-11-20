$(document).ready(function() {
  $('section.new-tweet textarea.tweet-text').on('input', function() {
    const textLength = 140 - ($(this).val()).length;
    if (textLength < 0) {
      $(this).parents().find('output.counter').val(textLength).css("color", "red");
    } else {
      $(this).parents().find('output.counter').val(textLength).css("color", "");
    }
  });
});
