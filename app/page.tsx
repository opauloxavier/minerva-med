import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Home from "./src/components/home";

config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

export default function Page() {
  return <Home />;
}
