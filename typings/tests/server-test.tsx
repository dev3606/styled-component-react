import * as React from "react";
import styled, { ServerStyleSheet, StyleSheetManager } from "../..";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const sheet = new ServerStyleSheet();
const html = sheet.collectStyles(<Title>Hello world</Title>);
const css = sheet.getStyleTags();
const styleElement = sheet.getStyleElement();

const sheet2 = new ServerStyleSheet();
const element = (
  <StyleSheetManager sheet={sheet2}>
    <Title>Hello world</Title>
  </StyleSheetManager>
);

const css2 = sheet2.getStyleElement();
