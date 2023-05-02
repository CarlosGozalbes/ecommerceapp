import styles from "./styles.module.scss";
import Head from "next/head";
import Header from "../../header";
import Sidebar from "../sidebar";
export default function Layout({ session, tab, children }) {
  const country =  {
        name: "Spain",
        flag: "https://thumbs.dreamstime.com/b/bandera-de-espa%C3%B1a-icono-brillante-redondo-en-un-fondo-blanco-123979228.jpg",
      }
  return (
    <div className={styles.layout}>
      <Head>
        <title>{session?.user?.name}</title>
      </Head>
      <Header country={country} />
      <div className={styles.layout__container}>
        <Sidebar
          data={{
            ...session,
            tab,
          }}
        />
        <div className={styles.layout__content}>{children}</div>
      </div>
    </div>
  );
}
