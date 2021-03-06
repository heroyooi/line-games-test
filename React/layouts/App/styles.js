import { css } from "@emotion/react";

const FontFamily =
  '"Noto Sans KR", "Malgun Gothic", "맑은 고딕", "돋움", sans-serif;';

export const GlobalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap");

  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
  }
  table {
    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  li {
    list-style: none;
  }
  img,
  fieldset,
  iframe {
    border: 0 none;
  }
  img {
    vertical-align: top;
    width: 100%;
  }
  textarea {
    resize: none;
  }
  input,
  select,
  textarea,
  button {
    font-size: 100%;
    vertical-align: top;
    outline: none;
    -webkit-appearance: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
  address,
  strong,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  body {
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  input {
    margin: 0;
    padding: 0;
    color: #000;
    &:checked[type="checkbox"] {
      background-color: #666;
      -webkit-appearance: checkbox;
    }
    &[type="search"]::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    &[type="radio"] {
      -webkit-appearance: radio;
    }
    &[type="checkbox"] {
      -webkit-appearance: checkbox;
    }
    &:disabled {
      background: #f6f6f6;
    }
  }
  button {
    border: 0;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    outline: none;
  }
  a {
    outline: none;
    text-decoration: none;
  }
  body {
    -webkit-font-smoothing: antialiased;
    min-width: 320px;
    color: #000;
    background-color: #000;
  }
  body,
  input,
  select,
  textarea,
  button {
    font-family: ${FontFamily};
    font-size: 14px;
    line-height: 1;
    color: #666;
    letter-spacing: -0.5px;
  }
  textarea {
    resize: none;
  }
  .blind,
  legend,
  caption {
    width: 0;
    height: 0;
    position: absolute;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    z-index: -1;
    visibility: hidden;
    left: -9999px;
    text-indent: -9999px;
  }
  .hidden {
    position: absolute !important;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7*/
    clip: rect(1px, 1px, 1px, 1px);
  }
`;
