import Image from "next/image";

import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home({country}) {
  const { data: session } = useSession();
  console.log(session)
  console.log(country);
  return (
    <div>
      <Header country={country} />
      {
        session ? "you are log in" :"you are not log in"
      }
      <Footer country={country} />
    </div>
  );
}
export async function getServerSideProps() {
  /* let data = await axios
    .get("https://api.ipregistry.co/?key=hu1fn2rb8tyt53we")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data); */
  return {
    props: {
      //country: {name:data.name,flag:data.flag.emojitwo},
      country: {
        name: "Spain",
        flag: "https://thumbs.dreamstime.com/b/bandera-de-espa%C3%B1a-icono-brillante-redondo-en-un-fondo-blanco-123979228.jpg",
      },
    },
  };
}
