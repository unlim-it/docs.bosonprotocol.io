enum Feedback {
  Helpful = "helpful",
  Unhelpful = "unhelpful",
}

class FeedbackControl {
  private readonly containerSelector: string;
  private readonly buttonsSelector: string;
  private readonly helpfulButtonSelector: string;
  private readonly unhelpfulButtonSelector: string;
  private readonly eventName: string;

  constructor({
    containerSelector = "#feedback-buttons",
    buttonsSelector = ".feedback-button",
    helpfulButtonSelector = "a#feedback-helpful",
    unhelpfulButtonSelector = "a#feedback-unhelpful",
    eventName = "docs_feedback",
  } = {}) {
    this.containerSelector = containerSelector;
    this.buttonsSelector = buttonsSelector;
    this.helpfulButtonSelector = helpfulButtonSelector;
    this.unhelpfulButtonSelector = unhelpfulButtonSelector;
    this.eventName = eventName;
  }

  disable() {
    $(this.buttonsSelector).removeClass("active").addClass("inactive");
    $(this.containerSelector)
      .off("click", this.helpfulButtonSelector)
      .off("click", this.unhelpfulButtonSelector);
  }

  sendAnalyticsEvent(feedback: Feedback) {
    gtag("event", this.eventName, {
      feedback: feedback,
    });
  }

  handleClick(feedback: Feedback) {
    this.sendAnalyticsEvent(feedback);
    this.disable();
  }

  attach() {
    $(this.containerSelector)
      .on("click", this.helpfulButtonSelector, (event) => {
        event.preventDefault();
        this.handleClick(Feedback.Helpful);
      })
      .on("click", this.unhelpfulButtonSelector, (event) => {
        event.preventDefault();
        this.handleClick(Feedback.Unhelpful);
      });
    return this;
  }
}

export default FeedbackControl;
