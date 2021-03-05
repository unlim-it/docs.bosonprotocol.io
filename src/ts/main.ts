import '../css/main.css'
import SearchBox from "./search"

const SEARCH_ONLY_API_KEY = "f1696b617ed35006924f527c3a423c6e";
const INDEX_NAME = "docs-preview";
const APPLICATION_ID = "RZUWD1CSL8";

enum Feedback {
  Helpful = "helpful",
  Unhelpful = "unhelpful"
}

function sendFeedbackEvent(feedback: Feedback) {
  gtag('event', 'docs_feedback', {
    'feedback': feedback
  })
}

function disableFeedbackWidget() {
  $(".feedback-button")
    .removeClass("active")
    .addClass("inactive")
  $("#feedback-buttons")
    .off("click", "a#feedback-helpful")
    .off("click", "a#feedback-unhelpful")
}

function feedbackClickHandler(feedback: Feedback) {
  return function (event: Event) {
    event.preventDefault()
    sendFeedbackEvent(feedback)
    disableFeedbackWidget()
  }
}

function navigationToggleHandler() {
  $("body")
    .toggleClass("drawer-closed")
    .toggleClass("drawer-open")
}

function searchButtonHandler() {
  $("#searchpanel")
    .toggleClass("hidden")
}

$.when($.ready).then(function () {
  $("#feedback-buttons")
    .on("click",
      "a#feedback-helpful",
      feedbackClickHandler(Feedback.Helpful))
    .on("click",
      "a#feedback-unhelpful",
      feedbackClickHandler(Feedback.Unhelpful))
  $("#control-bar")
    .on("click",
      "#navigation-toggle",
      navigationToggleHandler)
    .on("click",
      "#search-button",
      searchButtonHandler)

  new SearchBox(APPLICATION_ID, SEARCH_ONLY_API_KEY, INDEX_NAME)
    .attach("#searchbox", "#hits")
    .start()
})
