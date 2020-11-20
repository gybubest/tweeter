let tweetTimes = {};

const createTweetElement = function(data) {
  const tweetId = Object.keys(tweetTimes).length;
  tweetTimes[tweetId] = data.created_at;

  const tweet = `
  <article id="${tweetId}" class="tweet" method="POST" action="/tweets/">
    <header>
      <div class="avatar-name">
        <img src="${data.user.avatars}">
        <p>${data.user.name}</p>
      </div>
      <div class="account-name">
        <p>${data.user.handle}</p>
      </div>
    </header>
    <textarea class="tweet-text" readonly>${data.content.text}</textarea>
    <footer>
      <div>
        <output class="timestamp">${moment(data.created_at).fromNow()}</output>
      </div>
      <div class="footer-buttons">
        <button type="submit"><i class="fas fa-flag"></i></button>
        <button type="submit"><i class="fas fa-retweet"></i></button>
        <button type="submit"><i class="fas fa-heart"></i></button>  
      </div>
    </footer>
  </article>
  `;
  return tweet;
}

const renderTweets = function(tweets, action) {
  const tweet = Object.values(tweets).pop();
  const $tweet = action(tweet);
  $('.tweets').prepend($tweet);
}

const loadTweets = (action) => {
  $.ajax("/tweets", { method: "GET" })
  .then(res => action(res))
  .catch(err => console.log(err))
}

const submitTweet = function(event, action) {
  event.preventDefault();
  $.ajax({
    url: "/tweets",
    method: "POST",
    data: $("form.tweet-submission").serialize()
  })
  .then(res => action(res))
  .catch(err => console.log(err))
};

const updateTimer = setInterval(() => {
  for (const tweetId in tweetTimes) {
    $(`#${tweetId} .timestamp`).val(moment(tweetTimes[tweetId]).fromNow());
  }

}, 15000);
