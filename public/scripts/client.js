/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  $("form.tweet-submission").submit(function(event) {
    event.preventDefault();
    $('section.validationError').slideUp(1);
    const input = $('form.tweet-submission > textarea.tweet-text').val();
    if (!input) {
      $('span.errorMessage').text('Please write something.');
      $('section.validationError').slideDown(1);
      return $('form.tweet-submission > textarea.tweet-text').val('').focus();

    }
    if (input.length > 140) {
      $('span.errorMessage').text('Please limit to 140 characters.');
      $('section.validationError').slideDown(1);
      return $('form.tweet-submission > textarea.tweet-text').val('').focus();
    }
    const createHTMLPost = tweets => renderTweets(tweets, createTweetElement);
    const fetchAndUpdate = () => loadTweets(createHTMLPost);
    submitTweet(event, fetchAndUpdate);
    $('main section.new-tweet').slideUp();
    $('output.counter').val(140);
    $('form.tweet-submission > textarea.tweet-text').val('').focus();
  });

  $('div.writeATweet').click(function(event) {
    event.preventDefault();
    $('i.fa-angle-double-down').slideToggle();
    $('i.fa-angle-double-down').slideToggle();
    $('main section.new-tweet').slideDown();
    $('form.tweet-submission > textarea.tweet-text').focus();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('section button.back-to-top').fadeIn();
    } else {
      $('section button.back-to-top').fadeOut();
    }
  });

  $('section button.back-to-top').click(function() {
    $("html, body").animate({scrollTop: 0});
    $('main section.new-tweet').slideDown();
 });

});