import '../css/main.css'

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

function initialiseTheme() {
  if (localStorage.theme == "light") {
    $("#theme-switch input")
      .prop("checked", true)
  }
  $("#theme-switch").removeClass('hidden')
}

function darkModeToggleHandler() {
  if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
    $(document.documentElement)
      .addClass("light")
      .removeClass("dark")
    localStorage.theme = 'light'
  } else {
    $(document.documentElement)
      .removeClass('light')
      .addClass("dark")
    localStorage.theme = 'dark'
  }
}

$(initialiseTheme)

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
  $("#theme-switch")
    .on("click",
      "#theme-switch-label",
      darkModeToggleHandler)
})
