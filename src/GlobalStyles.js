import { createGlobalStyle } from 'styled-components';
import BackgroundImage from './images/Background.png';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    max-width: 768px;
    margin: 0 auto;
    padding: 0;
    background: url(${BackgroundImage}) center no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    font-family: sans-serif;
    font-size:112.5% ;
}
input, label, textarea{
    font-size: 1em;
}
`;
