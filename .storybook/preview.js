import { ThemeProvider } from "styled-components";
import { theme } from "../src/themes";
import "../src/app/globals.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, context) => {
      return <ThemeProvider theme={theme}>{story(context)}</ThemeProvider>;
    },
  ],
};

export default preview;
