/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready( () => {
  $("form.tweet-submission").submit(function(event) {
    event.preventDefault();
    $('main section.validationError').slideUp(1);
    const input = $('.tweet-text').val();
    if (!input) {
      $('main section span.errorMessage').text('No content. Please input something.');
      $('main section.validationError').slideDown(1);
      return $('main form textarea.tweet-text').val('').focus();

    }
    if (input.length > 140) {
      $('main section span.errorMessage').text('The text is too long. Please limit to 140 characters.');
      $('main section.validationError').slideDown(1);
      return $('main form textarea.tweet-text').val('').focus();
    }
    $('main section.new-tweet').slideUp(1);
    const createHTMLPost = tweets => renderTweets(tweets, createTweetElement);
    const fetchAndUpdate = () => loadTweets(createHTMLPost);
    submitTweet(event, fetchAndUpdate);
    $('main form textarea.tweet-text').val('');
  });

  $('div.writeATweet').click(function(event) {
    event.preventDefault();
    $('i.fa-angle-double-down').slideToggle();
    $('i.fa-angle-double-down').slideToggle();
    $('main section.new-tweet').slideDown();
    $('main form textarea.tweet-text').focus();
  });

});