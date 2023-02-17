import React from "react"; //optional

function TweetForm() {
  const tweetPlaceholder = "What are you humming about?";

  return (
    <section class="newtweet">
      <form method="post" action="/tweets" class="newtweet__form" onSubmit={(e) => e.preventDefault()}>
        <textarea
          class="form__textarea"
          name="text"
          placeholder={tweetPlaceholder}
        ></textarea>
        <input type="submit" value="Tweet" class="form__input" onClick={(e) => e.preventDefault()} />
        <span class="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
