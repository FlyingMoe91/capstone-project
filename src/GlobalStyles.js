import { createGlobalStyle } from 'styled-components';
import BackgroundImage from './images/Background.png';

export default createGlobalStyle`

:root {
    --primary-color:#00687e;
    --secondary-color:#e0cdbf;
}

*{
    box-sizing: border-box;
}
body{
    max-width: 768px;
    margin: 0 auto;
    padding: 20px;
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
