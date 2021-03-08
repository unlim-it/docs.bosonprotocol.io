class ThemeManagement {
  private readonly themeSwitchSelector: string;
  private readonly themeSwitchInputSelector: string;
  private readonly lightModeClass: string;
  private readonly darkModeClass: string;
  private readonly enabled: boolean;
  private readonly themeSwitchLabelSelector: string;

  constructor({
    themeSwitchSelector = "#theme-switch",
    themeSwitchInputSelector = "#theme-switch input",
    themeSwitchLabelSelector = "#theme-switch-label",
    lightModeClass = "light",
    darkModeClass = "dark",
    enabled = true,
  } = {}) {
    this.themeSwitchSelector = themeSwitchSelector;
    this.themeSwitchInputSelector = themeSwitchInputSelector;
    this.themeSwitchLabelSelector = themeSwitchLabelSelector;
    this.lightModeClass = lightModeClass;
    this.darkModeClass = darkModeClass;
    this.enabled = enabled;
  }

  initialize() {
    if (localStorage.theme == this.lightModeClass) {
      $(this.themeSwitchInputSelector).prop("checked", true);
    }
    if (this.enabled) {
      $(this.themeSwitchSelector).removeClass("hidden");
    }
    return this;
  }

  handleToggle() {
    if (
      localStorage.theme === this.darkModeClass ||
      !("theme" in localStorage)
    ) {
      $(document.documentElement)
        .addClass(this.lightModeClass)
        .removeClass(this.darkModeClass);
      localStorage.theme = this.lightModeClass;
    } else {
      $(document.documentElement)
        .removeClass(this.lightModeClass)
        .addClass(this.darkModeClass);
      localStorage.theme = this.darkModeClass;
    }
  }

  attach() {
    $(this.themeSwitchSelector).on("click", this.themeSwitchLabelSelector, () =>
      this.handleToggle()
    );
    return this;
  }
}

export default ThemeManagement;
