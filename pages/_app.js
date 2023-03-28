import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "../store/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
let persistor = persistStore(store);

export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    <>
      <Head>
        <title>Ecommerce app</title>
        <meta name="description" content="Ecommerce shopping service for all of your needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aliexpress.png" />
      </Head>
       <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      </SessionProvider>
    </>
  );
}
