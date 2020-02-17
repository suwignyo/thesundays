import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "./Meta";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  red: "#FF0000",
  black: "#000",
  gray: "#ccc",
  lightGray: "#eee",
  maxWidth: `1000px`,
  boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Container>{this.props.children}</Container>
        </StyledPage>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
