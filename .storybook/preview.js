import { addDecorator } from "@storybook/react";
import {createGlobalStyle, ThemeProvider} from "styled-components"
import {theme} from "../src/themes"
import * as NextImage from "next/image"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

//自作themeの適用
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
))

//next/imageはstorybookで動作しないため差し替え
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'deafult', {
  configurable: true,
  value: (props) => typeof props.src === "string" ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  )
})