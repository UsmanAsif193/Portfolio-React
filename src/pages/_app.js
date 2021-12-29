import "../styles/globals.css";

import DarkMode from "../Context/DarkMode";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <DarkMode>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Portfolio Website</title>
      </Head>
      <Component {...pageProps} />
      <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
    </DarkMode>
  );
}

export default MyApp;
