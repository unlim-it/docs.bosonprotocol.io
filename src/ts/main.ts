import "../css/main.css";

import FeedbackControl from "./FeedbackControl";
import NavigationToggle from "./NavigationToggle";
import ThemeManagement from "./ThemeManagement";

$(() => {
  new FeedbackControl().attach()
  new NavigationToggle().attach()
  new ThemeManagement({ enabled: true }).initialize().attach()
});
