import styles from "./styles.module.scss";
import Image from "next/image";
import UserMenu from "./UserMenu";
import {MdSecurity} from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
export default function Top({country}) {

  const { data: session } = useSession();
  const [visible, setVisible] = useState(false)
    return (
      <div className={styles.top}>
        <div className={styles.top__container}>
          <div></div>
          <ul className={styles.top__list}>
            <li className={styles.li}>
              {" "}
              <img src={country.flag} alt="bandera pais" />{" "}
              <span>{country.name} / eur</span>{" "}
            </li>
            <li className={styles.li}>
              <MdSecurity />
              <span>Buyer protection </span>
            </li>
            <li className={styles.li}>
              <span>Customer Service</span>
            </li>
            <li className={styles.li}>
              <span>Help</span>
            </li>
            <li className={styles.li}>
              <BsSuitHeart />
              <Link href="/profile/whishlist">
                <span>Whislist</span>
              </Link>
            </li>
            <li
              className={styles.li}
              onMouseOver={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              {session ? (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <img src={session.user.image} />
                    <span>{session.user.name}</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              ) : (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <RiAccountPinCircleLine />
                    <span>Account</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              )}
              {visible && <UserMenu session={session} />}
            </li>
          </ul>
        </div>
      </div>
    );
}
