import App from "next/app";
import {ThemeProvider} from "styled-components";
import {theme} from "../assets/styles/theme";
import "sanitize.css";

class Eventio extends App {
  componentDidMount() {
    if (!document.documentElement.classList.contains("wf-active")) {
      import("webfontloader").then(WebFont =>
        WebFont.load({
          google: {
            families: ["Hind:400,500,600", "PlayfairDisplay"],
          },
        })
      );
    }
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default Eventio;
