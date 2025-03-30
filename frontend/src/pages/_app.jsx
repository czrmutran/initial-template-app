// pages/_app.js
import '../css/global.css'; // ajuste o caminho conforme sua estrutura de pastas

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
