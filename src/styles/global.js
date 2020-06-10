import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body,html,#root{
    height:100%
  }
  ::placeholder {
    color: rgba(255,255,255,0.6);
  }
  .textarea-placeholder-custom::placeholder {
    color: #333;
  }
  .items-menu::-webkit-scrollbar {
    display: none;
  }
  a, a.active{
    text-decoration: none !important;
    color: unset;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  .list-users-custom::-webkit-scrollbar {
    display: none;
  }
  
  .textarea-placeholder-custom::-webkit-scrollbar {
    width: 5px !important;
  }
  .textarea-placeholder-custom::-webkit-scrollbar-track {
    background: #f1f1f1 !important; 
  }
  .textarea-placeholder-custom::-webkit-scrollbar-thumb {
    background: #888 !important; 
  }
  .textarea-placeholder-custom::-webkit-scrollbar-thumb:hover {
    background: #555 !important; 
  }
`;

export default GlobalStyle;