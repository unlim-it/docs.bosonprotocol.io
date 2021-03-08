class NavigationToggle {
  private readonly containerSelector: string;
  private readonly buttonSelector: string;
  private readonly parentSelector: string;
  private readonly closedClass: string;
  private readonly openClass: string;

  constructor({
    containerSelector = "#control-bar",
    buttonSelector = "#navigation-toggle",
    parentSelector = "body",
    closedClass = "drawer-closed",
    openClass = "drawer-open",
  } = {}) {
    this.containerSelector = containerSelector;
    this.buttonSelector = buttonSelector;
    this.parentSelector = parentSelector;
    this.closedClass = closedClass;
    this.openClass = openClass;
  }

  handleClick() {
    $(this.parentSelector)
      .toggleClass(this.closedClass)
      .toggleClass(this.openClass);
  }

  attach() {
    $(this.containerSelector).on("click", this.buttonSelector, () =>
      this.handleClick()
    );
    return this;
  }
}

export default NavigationToggle;
